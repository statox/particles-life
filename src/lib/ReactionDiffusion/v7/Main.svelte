<!--
- Adapt regl sprites.js example to my code base
-  https://regl-project.github.io/regl/www/gallery/sprites.js.html
-->
<script lang="ts">
    import FkSelector from './FKSelector.svelte';
    import type { GUI } from 'dat.gui';
    import REGL from 'regl';
    import { onDestroy, onMount } from 'svelte';
    import { getInitialConditions, type InitialConditionsMode } from './initialConditions';
    import { PARAMETERS_CLASSES } from './pearsonClasses';

    import { doColors, initColorsCommands, type ColorMode } from './colors';
    import { doCursor, initCursorCommand } from './cursor';
    import { doZoom, initZoomCommand } from './zoom';
    import { doSimulationUpdate, initSimulationUpdate } from './simulation';

    const screenDimensions = {
        width: window.innerWidth - 50,
        height: window.innerHeight - 10
    };

    let WORLD_SIZE = 8; // Used as a power of 2

    const controls = {
        colors: 'mrob' as ColorMode,
        initialConditions: 'randomSpots' as InitialConditionsMode,
        reset: () => initProgram(),
        pause: false
    };

    const mouseState = {
        pressedLeft: false,
        pressedRight: false,
        x: 0,
        y: 0,
        penSize: 3,
        penDensity: 0.3,
        zoomLevel: 1,
        panX: 0.5,
        panY: 0.5
    };

    const info = {
        iteration: 0
    };

    // Dummy initialization, changes are handled by FKSelector
    const simulationParameters = {
        f: PARAMETERS_CLASSES[0].f,
        k: PARAMETERS_CLASSES[0].k
    };

    let gui: GUI;
    let regl: REGL.Regl;

    const initGUI = async () => {
        // Imported here to avoid "window is not defined" error
        // https://github.com/dataarts/dat.gui/issues/271
        const dat = await import('dat.gui');
        gui = new dat.GUI();

        gui.domElement.setAttribute('style', 'background-color: black');

        gui.add(controls, 'pause').name('Pause');
        gui.add(controls, 'reset').name('Reset simulation');

        gui.add(controls, 'colors', [
            'grayscale',
            'blackwhite',
            'whiteblack',
            'raw',
            'timebasedblue',
            'lerp',
            'mrob',
            'redblue'
        ]);

        const initialConditionsOptions = {
            'Random spots': 'randomSpots',
            'Middle spot': 'middleSpot',
            'Middle + random': 'middleCircleAndRandomSpots',
            Empty: 'empty'
        };
        gui.add(controls, 'initialConditions', initialConditionsOptions).onFinishChange(
            controls.reset
        );

        const iterationController = gui.add(info, 'iteration').listen();
        iterationController.domElement.style.pointerEvents = 'none';

        gui.add(mouseState, 'penSize', 0, WORLD_SIZE).name('Pen size');
        gui.add(mouseState, 'penDensity', 0, 1).name('Pen density');

        gui.add(mouseState, 'zoomLevel', 0, 1).name('Zoom level');
        gui.add(mouseState, 'panX', 0, 1).name('pan x');
        gui.add(mouseState, 'panY', 0, 1).name('pan y');
    };

    const initEvents = () => {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                controls.pause = !controls.pause;
                return event.preventDefault();
            }
            if (event.code === 'KeyR') {
                initProgram();
                return event.preventDefault();
            }
        });
    };

    const initProgram = () => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (!canvas) {
            throw new Error('Canvas container not ready');
        }

        if (regl) {
            regl.destroy();
        }
        regl = REGL({
            extensions: ['OES_texture_float'],
            canvas
        });

        info.iteration = 0;

        const RADIUS = 2 ** WORLD_SIZE;

        let INITIAL_CONDITIONS = getInitialConditions(controls.initialConditions, RADIUS);

        const state = Array(2)
            .fill(0)
            .map(() =>
                regl.framebuffer({
                    color: regl.texture({
                        radius: RADIUS,
                        data: INITIAL_CONDITIONS,
                        wrap: 'repeat',
                        type: 'float'
                    }),
                    depthStencil: false
                })
            );
        const coloredOutput = regl.framebuffer({
            color: regl.texture({
                radius: RADIUS,
                data: INITIAL_CONDITIONS,
                wrap: 'repeat',
                type: 'float'
            }),
            depthStencil: false
        });

        initSimulationUpdate(regl, RADIUS, state);
        initColorsCommands(regl, state, coloredOutput);
        initCursorCommand(regl, coloredOutput);
        initZoomCommand(regl, coloredOutput);

        regl.frame(() => {
            if (!controls.pause) {
                info.iteration++;
            }

            doSimulationUpdate({
                worldSize: WORLD_SIZE,
                pauseSimulation: controls.pause,
                mouseState,
                simulationParameters
            });
            doColors(controls.colors, info);
            doCursor(mouseState, WORLD_SIZE);
            doZoom(mouseState);
        });
    };

    const handleMousemove = (event: any) => {
        if (!event.currentTarget) {
            throw new Error('No target for the onmousemove event');
        }
        if (!event.currentTarget.width || !event.currentTarget.height) {
            throw new Error('No target dimensions for the onmousemove event target');
        }

        var elementRect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - elementRect.left;
        const y = event.clientY - elementRect.top;

        const { width, height } = event.currentTarget;
        const relX = x / width;
        const relY = (height - y) / height;
        mouseState.x = relX;
        mouseState.y = relY;
    };

    const handleMouseButton = (event: MouseEvent) => {
        if (![0, 2].includes(event.button)) {
            return;
        }
        if (!['mouseup', 'mousedown'].includes(event.type)) {
            return;
        }
        let newState = event.type === 'mousedown';
        if (event.button === 0) {
            mouseState.pressedLeft = newState;
        }
        if (event.button === 2) {
            mouseState.pressedRight = newState;
        }
    };

    const reset = () => {
        if (isNaN(WORLD_SIZE)) {
            return;
        }
        if (WORLD_SIZE > 11) {
            WORLD_SIZE = 11;
        }
        if (WORLD_SIZE < 1) {
            WORLD_SIZE = 1;
        }
        gui?.destroy();
        regl?.destroy();

        initGUI();
        initProgram();
    };

    const onSimulationParamsUpdate = (event: CustomEvent<{ f: number; k: number }>) => {
        simulationParameters.f = event.detail.f;
        simulationParameters.k = event.detail.k;
    };

    onMount(() => {
        initGUI();
        initEvents();
        initProgram();
    });

    onDestroy(() => {
        gui.destroy();
        regl.destroy();
    });
</script>

<FkSelector on:fkupdated={onSimulationParamsUpdate} />

<div>
    <label for="worldSize">World Size:</label>
    <input id="worldSize" bind:value={WORLD_SIZE} type="number" step="1" on:change={reset} />
</div>
<canvas
    on:mousemove={handleMousemove}
    on:mousedown|preventDefault={handleMouseButton}
    on:mouseup={handleMouseButton}
    on:contextmenu|preventDefault={(e) => e}
    id="canvas"
    width={screenDimensions.width}
    height={screenDimensions.height}
/>

<style>
    #canvas {
        position: absolute;
        right: 25px;
        margin-bottom: 50px;
        /* cursor: none; */
    }
</style>
