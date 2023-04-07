<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from './webglUtils';
    import * as drawCells from './drawCells';
    import { getInitialData } from './simulationUtils';
    import * as updateCells from './updateCells';
    import type { InitialCellsMode } from './simulationUtils';
    import type { GUIController } from 'dat.gui';

    const mouseCoordinates = { x: 0, y: 0 };
    let mouseMode: updateCells.MouseMode = 0;
    let startTime: number;
    let lastFrameUpdate: number;

    const screenDimensions = {
        width: window.innerWidth - 50,
        height: window.innerHeight - 10
    };
    const settings = {
        program: {
            pause: false,
            infiniteSource: true,
            drawMode: 'age_gradiant' as drawCells.DrawingMode,
            reloadProgram: () => main()
        },

        simulation: {
            iteration: 0,
            timeInSeconds: 0,
            fps: 0
        },

        grid: {
            resetGrid: () => resetTexture('random'),
            emptyGrid: () => resetTexture('zero'),

            initialDensity: 0.5,
            worldWidth: screenDimensions.width,
            worldHeight: screenDimensions.height,
            nbCells: (screenDimensions.width * screenDimensions.height).toString()
        },

        zoom: {
            x: 0,
            y: 0,
            xController: null as GUIController | null,
            yController: null as GUIController | null,
            level: 1,
            previousLevel: 1
        }
    };

    const initGUI = async () => {
        // Imported here to avoid "window is not defined" error
        // https://github.com/dataarts/dat.gui/issues/271
        const dat = await import('dat.gui');
        const gui = new dat.GUI();

        const programFolder = gui.addFolder('Program');
        programFolder.open();
        programFolder.add(settings.program, 'pause').name('Pause').listen();
        programFolder.add(settings.program, 'infiniteSource').name('Infinite Source').listen();
        programFolder
            .add(settings.program, 'drawMode', {
                White: 'white',
                'Age Gradiant': 'age_gradiant',
                'Position Gradiant': 'gradiant'
            })
            .name('Drawing mode')
            .onFinishChange(() =>
                drawCells.initProgram(gl, { screenDimensions, mode: settings.program.drawMode })
            );
        programFolder.add(settings.program, 'reloadProgram').name('Reload program');

        const simulationFolder = gui.addFolder('Simulation');
        simulationFolder.open();
        simulationFolder.add(settings.simulation, 'timeInSeconds').name('Time (s)').listen();
        simulationFolder.add(settings.simulation, 'iteration').name('Iteration').listen();
        simulationFolder.add(settings.simulation, 'fps').listen();

        const gridFolder = gui.addFolder('Grid');
        gridFolder.open();
        gridFolder.add(settings.grid, 'resetGrid').name('Reset grid');
        gridFolder.add(settings.grid, 'emptyGrid').name('Empty grid');
        gridFolder
            .add(settings.grid, 'initialDensity', 0, 1, 0.01)
            .name('Initial density')
            .onFinishChange(() => resetTexture('random'));

        gridFolder
            .add(settings.grid, 'worldWidth', 1, screenDimensions.width, 1)
            .name('World width')
            .onFinishChange(() => {
                settings.grid.nbCells = (
                    settings.grid.worldHeight * settings.grid.worldWidth
                ).toString();
                resetTexture('random');
            });
        gridFolder
            .add(settings.grid, 'worldHeight', 1, screenDimensions.height, 1)
            .name('World height')
            .onFinishChange(() => {
                settings.grid.nbCells = (
                    settings.grid.worldHeight * settings.grid.worldWidth
                ).toString();
                resetTexture('random');
            });
        gridFolder.add(settings.grid, 'nbCells').name('Cells count').listen();

        const zoomFolder = gui.addFolder('Zoom');
        zoomFolder.open();
        zoomFolder
            .add(settings.zoom, 'level', 1, 10)
            .name('Level')
            .onChange(function (newZoomLevel) {
                const levelDiff = newZoomLevel - settings.zoom.previousLevel;

                if (!settings.zoom.xController || !settings.zoom.yController || levelDiff === 0) {
                    return;
                }

                // When zoom level changes we need to update the panning to keep looking
                // at the same place in the texture

                const maxPan = 1 - 1 / settings.zoom.previousLevel;
                const newMaxPan = 1 - 1 / newZoomLevel;
                settings.zoom.xController.max(newMaxPan);
                settings.zoom.xController.min(0);
                settings.zoom.yController.max(newMaxPan);
                settings.zoom.yController.min(0);

                const previousRatio = {
                    x: settings.zoom.x / maxPan,
                    y: settings.zoom.y / maxPan
                };

                // The second case newMaxPan/2 handles the case where previousZoomLevel was 1
                // so we didn't have a reference point to zoom in. In this case we zoom into the middle
                settings.zoom.x = newMaxPan * previousRatio.x || newMaxPan / 2;
                settings.zoom.y = newMaxPan * previousRatio.y || newMaxPan / 2;

                settings.zoom.previousLevel = newZoomLevel;
            });
        settings.zoom.xController = zoomFolder
            .add(settings.zoom, 'x', 0, 0, 0.01)
            .name('X offset')
            .listen();
        settings.zoom.yController = zoomFolder
            .add(settings.zoom, 'y', 0, 0, 0.01)
            .name('Y offset')
            .listen();
    };

    const initEvents = () => {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                settings.program.pause = !settings.program.pause;
                event.preventDefault();
            }
            if (event.code === 'KeyR') {
                resetTexture('random');
                return;
            }
            if (event.code === 'KeyE') {
                resetTexture('zero');
                return;
            }
            if (event.code === 'KeyS') {
                settings.program.infiniteSource = !settings.program.infiniteSource;
                return;
            }
        });

        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (!canvas) {
            throw new Error('Canvas unavailable');
        }

        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect(); // abs. size of element
            const scaleX = canvas.width / rect.width; // relationship bitmap vs. element for x
            const scaleY = canvas.height / rect.height; // relationship bitmap vs. element for y

            const mousePos = {
                x: (event.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
                y: (event.clientY - rect.top) * scaleY // been adjusted to be relative to element
            };

            mouseCoordinates.x = mousePos.x / screenDimensions.width;
            mouseCoordinates.y = mousePos.y / screenDimensions.height;
        });

        setInterval(() => {
            const step = 0.005;
            if (mouseCoordinates.x < 0.1 && settings.zoom.x >= step) {
                settings.zoom.x -= step;
            }
            if (mouseCoordinates.x > 0.9 && settings.zoom.x < 1 - 1 / settings.zoom.level) {
                settings.zoom.x += step;
            }
            if (mouseCoordinates.y < 0.1 && settings.zoom.y >= step) {
                settings.zoom.y -= step;
            }
            if (mouseCoordinates.y > 0.9 && settings.zoom.y < 1 - 1 / settings.zoom.level) {
                settings.zoom.y += step;
            }
        }, 50);

        canvas.addEventListener('mousedown', (event) => {
            event.preventDefault();
            if (event.button === 0) {
                mouseMode = 1;
            } else if (event.button === 2) {
                mouseMode = 2;
            }
        });

        canvas.addEventListener('mouseup', (event) => {
            event.preventDefault();
            mouseMode = 0;
        });

        canvas.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            return false;
        });
    };

    let gl: WebGLRenderingContext;
    let cellsTex: WebGLTexture;
    let animationFrameRequest: number;
    function main() {
        startTime = Date.now() / 1000;
        cancelAnimationFrame(animationFrameRequest);

        gl = webglUtils.getWebGLContext();

        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const initialData = getInitialData(gl, {
            mode: 'random',
            worldDimensions: { width: settings.grid.worldWidth, height: settings.grid.worldHeight },
            initialDensity: settings.grid.initialDensity
        });
        cellsTex = updateCells.initProgram(gl, {
            cellsTex: initialData.cellsTex,
            texDimensions: { width: settings.grid.worldWidth, height: settings.grid.worldHeight }
        });

        drawCells.initProgram(gl, { screenDimensions, mode: settings.program.drawMode });

        function render() {
            if (!settings.program.pause) {
                const now = Date.now() / 1000;
                const deltaTime = now - lastFrameUpdate;
                settings.simulation.fps = 1 / deltaTime;
                lastFrameUpdate = now;

                settings.simulation.timeInSeconds = now - startTime;
                settings.simulation.iteration++;
            }
            cellsTex = updateCells.runProgram({
                gl,
                worldDimensions: {
                    width: settings.grid.worldWidth,
                    height: settings.grid.worldHeight
                },
                screenDimensions,
                mouseCoordinates,
                mouseMode,
                infiniteSource: settings.program.infiniteSource,
                iteration: settings.simulation.iteration,
                pause: settings.program.pause
            });

            drawCells.runProgram({
                gl,
                cellsTex,
                worldDimensions: {
                    width: settings.grid.worldWidth,
                    height: settings.grid.worldHeight
                },
                zoomLevel: settings.zoom.level,
                pan: {
                    x: settings.zoom.x,
                    y: settings.zoom.y
                },
                iteration: settings.simulation.iteration
            });

            return (animationFrameRequest = requestAnimationFrame(render));
        }
        animationFrameRequest = requestAnimationFrame(render);
    }

    onMount(() => {
        main();
        initGUI();
        initEvents();
    });

    const resetTexture = (mode: InitialCellsMode) => {
        settings.simulation.iteration = 0;
        settings.simulation.timeInSeconds = 0;
        const initialData = getInitialData(gl, {
            mode,
            worldDimensions: { width: settings.grid.worldWidth, height: settings.grid.worldHeight },
            initialDensity: settings.grid.initialDensity
        });
        cellsTex = updateCells.initProgram(gl, {
            cellsTex: initialData.cellsTex,
            texDimensions: { width: settings.grid.worldWidth, height: settings.grid.worldHeight }
        });
    };
</script>

<canvas
    id="canvas"
    style="background-color: black"
    width={screenDimensions.width}
    height={screenDimensions.height}
/>

<style>
    #canvas {
        position: absolute;
        right: 25px;
        margin-bottom: 50px;
    }
</style>
