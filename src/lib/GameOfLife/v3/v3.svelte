<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from './webglUtils';
    import * as drawCells from './drawCells';
    import { getInitialData } from './simulationUtils';
    import * as updateCells from './updateCells';
    import type { InitialCellsMode } from './simulationUtils';
    import * as dat from 'dat.gui';

    const gui = new dat.GUI();

    const mouseCoordinates = { x: 0, y: 0 };
    let mouseMode: updateCells.MouseMode = 0;

    const screenDimensions = {
        width: window.innerWidth - 50,
        height: window.innerHeight - 10
    };
    let zoomLevel = 1;
    const pan = {
        x: 0,
        y: 0
    };
    const settings = {
        Pause: true,
        'Infinite source': true,

        'Reset grid': () => resetTexture('random'),
        'Empty grid': () => resetTexture('zero'),
        'Initial density': 0.05,
        'World width': screenDimensions.width,
        'World height': screenDimensions.height,
        Cells: (screenDimensions.width * screenDimensions.height).toString(),

        'Zoom in': () => zoomLevel++,
        'Zoom out': () => {
            zoomLevel = Math.max(zoomLevel - 1, 1);
            if (zoomLevel === 1) {
                pan.x = 0;
                pan.y = 0;
            }
        },
        'Zoom reset': () => {
            zoomLevel = 1;
            pan.x = 0;
            pan.y = 0;
        },

        'Reload progam': () => main()
    };

    gui.add(settings, 'Pause').listen();
    gui.add(settings, 'Infinite source').listen();

    gui.add(settings, 'Reset grid');
    gui.add(settings, 'Empty grid');
    gui.add(settings, 'Initial density', 0, 1, 0.01).onFinishChange(() => resetTexture('random'));
    gui.add(settings, 'World width', 1, screenDimensions.width, 1).onFinishChange(() => {
        settings.Cells = (settings['World height'] * settings['World width']).toString();
        resetTexture('random');
    });
    gui.add(settings, 'World height', 1, screenDimensions.height, 1).onFinishChange(() => {
        settings.Cells = (settings['World height'] * settings['World width']).toString();
        resetTexture('random');
    });
    gui.add(settings, 'Cells').listen();

    gui.add(settings, 'Zoom in');
    gui.add(settings, 'Zoom out');
    gui.add(settings, 'Zoom reset');

    gui.add(settings, 'Reload progam');

    let gl: WebGLRenderingContext;
    let cellsTex: WebGLTexture;
    let animationFrameRequest: number;
    function main() {
        cancelAnimationFrame(animationFrameRequest);

        gl = webglUtils.getWebGLContext();

        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const initialData = getInitialData(gl, {
            mode: 'random',
            worldDimensions: { width: settings['World width'], height: settings['World height'] },
            initialDensity: settings['Initial density']
        });
        cellsTex = updateCells.initProgram(gl, {
            cellsTex: initialData.cellsTex,
            texDimensions: { width: settings['World width'], height: settings['World height'] }
        });

        drawCells.initProgram(gl, { screenDimensions, mode: 'gradiant' });

        function render() {
            if (!settings.Pause) {
                cellsTex = updateCells.runProgram({
                    gl,
                    worldDimensions: {
                        width: settings['World width'],
                        height: settings['World height']
                    },
                    screenDimensions,
                    mouseCoordinates,
                    mouseMode,
                    infiniteSource: settings['Infinite source']
                });
            }

            const step = 0.005;
            if (mouseCoordinates.x < 0.2 && pan.x >= step) {
                pan.x -= step;
            }
            if (mouseCoordinates.x > 0.8 && pan.x < 1 - 1 / zoomLevel) {
                pan.x += step;
            }
            if (mouseCoordinates.y < 0.2 && pan.y >= step) {
                pan.y -= step;
            }
            if (mouseCoordinates.y > 0.8 && pan.y < 1 - 1 / zoomLevel) {
                pan.y += step;
            }

            drawCells.runProgram({
                gl,
                cellsTex,
                worldDimensions: {
                    width: settings['World width'],
                    height: settings['World height']
                },
                zoomLevel,
                pan
            });

            return (animationFrameRequest = requestAnimationFrame(render));
        }
        animationFrameRequest = requestAnimationFrame(render);
    }

    onMount(() => {
        main();

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                settings.Pause = !settings.Pause;
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
            if (event.code === 'KeyI') {
                zoomLevel++;
                return;
            }
            if (event.code === 'KeyS') {
                settings['Infinite source'] = !settings['Infinite source'];
                return;
            }
            if (event.code === 'KeyO') {
                zoomLevel = Math.max(zoomLevel - 1, 1);
                if (zoomLevel === 1) {
                    pan.x = 0;
                    pan.y = 0;
                }

                return;
            }
            if (event.code === 'KeyZ') {
                zoomLevel = 1;
                pan.x = 0;
                pan.y = 0;
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
    });

    const resetTexture = (mode: InitialCellsMode) => {
        const initialData = getInitialData(gl, {
            mode,
            worldDimensions: { width: settings['World width'], height: settings['World height'] },
            initialDensity: settings['Initial density']
        });
        cellsTex = updateCells.initProgram(gl, {
            cellsTex: initialData.cellsTex,
            texDimensions: { width: settings['World width'], height: settings['World height'] }
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
