<!--
- Adapt regl sprites.js example to my code base
-  https://regl-project.github.io/regl/www/gallery/sprites.js.html
-->
<script lang="ts">
    import type { GUI } from 'dat.gui';
    import REGL from 'regl';
    import { onDestroy, onMount } from 'svelte';
    import { middleCircleAndRandomSpots, middleSpot, randomSpots } from './initialConditions';
    import { PARAMETERS_CLASSES } from './pearsonClasses';

    import drawVS from './glsl/draw.vert.glsl';
    import drawFS from './glsl/draw.frag.glsl';
    import updateFS from './glsl/update.frag.glsl';

    const screenDimensions = {
        width: window.innerWidth - 50,
        height: window.innerHeight - 10
    };

    const WORLD_SIZE = 11; // Used as a power of 2

    const controls = {
        presetParams: 4,
        initialConditions: 'randomSpots',
        reset: () => initProgram(),
        pause: false
    };

    const mouseState = {
        pressedLeft: false,
        pressedRight: false,
        x: 0,
        y: 0,
        penSize: 3
    };

    const info = {
        iteration: 0
    };

    const simulationParameters = {
        f: PARAMETERS_CLASSES[controls.presetParams].f,
        k: PARAMETERS_CLASSES[controls.presetParams].k
    };

    let gui: GUI;
    let regl: REGL.Regl;

    const initGUI = async () => {
        // Imported here to avoid "window is not defined" error
        // https://github.com/dataarts/dat.gui/issues/271
        const dat = await import('dat.gui');
        gui = new dat.GUI();

        gui.domElement.setAttribute('style', 'background-color: black');

        gui.add(simulationParameters, 'f').name('Feed rate').listen();
        gui.add(simulationParameters, 'k').name('Kill rate').listen();

        gui.add(controls, 'pause').name('Pause');
        gui.add(controls, 'reset').name('Reset simulation');

        const presetParamsOptions = PARAMETERS_CLASSES.reduce((options, option, index) => {
            options[option.name] = index;
            return options;
        }, {} as { [name: string]: number });
        gui.add(controls, 'presetParams', presetParamsOptions).onFinishChange(() => {
            simulationParameters.f = PARAMETERS_CLASSES[controls.presetParams].f;
            simulationParameters.k = PARAMETERS_CLASSES[controls.presetParams].k;
        });

        const initialConditionsOptions = {
            'Random spots': 'randomSpots',
            'Middle spot': 'middleSpot',
            'Middle + random': 'middleCircleAndRandomSpots'
        };
        gui.add(controls, 'initialConditions', initialConditionsOptions).onFinishChange(
            controls.reset
        );

        const iterationController = gui.add(info, 'iteration').listen();
        iterationController.domElement.style.pointerEvents = 'none';

        gui.add(mouseState, 'penSize', 1, WORLD_SIZE, 1).name('Pen size');
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

        let INITIAL_CONDITIONS: number[];
        if (controls.initialConditions === 'randomSpots') {
            INITIAL_CONDITIONS = randomSpots(RADIUS, 0.001);
        } else if (controls.initialConditions === 'middleCircleAndRandomSpots') {
            INITIAL_CONDITIONS = middleCircleAndRandomSpots(RADIUS, 0.005, 0.05);
        } else {
            INITIAL_CONDITIONS = middleSpot(RADIUS, 0.02);
        }

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

        const updateLife = regl({
            frag: updateFS,

            framebuffer: (params: { tick: number }) => state[(params.tick + 1) % 2],
            uniforms: {
                Da: regl.prop('Da'),
                Db: regl.prop('Db'),
                f: regl.prop('f'),
                k: regl.prop('k'),
                radius: RADIUS,
                pauseSimulation: regl.prop('pauseSimulation'),
                mousePosition: regl.prop('mousePosition'),
                penRadius: regl.prop('penRadius'),
                penIsActive: regl.prop('penIsActive'),
                eraserIsActive: regl.prop('eraserIsActive')
            }
        });

        const setupQuad = regl({
            frag: drawFS,
            vert: drawVS,

            attributes: {
                position: [-4, -4, 4, -4, 0, 4]
            },

            uniforms: {
                prevState: ({ tick }) => state[tick % 2]
            },

            depth: { enable: false },

            count: 3
        });

        regl.frame(() => {
            setupQuad(() => {
                regl.draw();
                if (!controls.pause) {
                    info.iteration++;
                }
                updateLife({
                    Da: 1,
                    Db: 0.5,
                    pauseSimulation: controls.pause,
                    mousePosition: [mouseState.x, mouseState.y],
                    penRadius: 1 / 2 ** (WORLD_SIZE - mouseState.penSize),
                    penIsActive: mouseState.pressedLeft,
                    eraserIsActive: mouseState.pressedRight,
                    ...simulationParameters
                });
            });
        });
    };

    const handleMousemove = (event: any) => {
        if (!event.currentTarget) {
            throw new Error('No target for the onmousemove event');
        }
        if (!event.currentTarget.width || !event.currentTarget.height) {
            throw new Error('No target dimensions for the onmousemove event target');
        }
        const { x, y } = event;
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
    }
</style>
