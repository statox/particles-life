<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from './webglUtils';
    import * as drawCells from './drawCells';
    import { setupFullscreenElement } from './fullscreen';
    import { getInitialData } from './simulationUtils';
    // import * as updatePositions from './updatePositionsTexture';

    const screenDimensions = {
        width: 300,
        height: 300
    };
    const worldDimensions = {
        width: 30,
        height: 30
    };
    let slowMo = false;
    let pause = true;

    let gl: WebGLRenderingContext;
    let animationFrameRequest: number;
    function main() {
        cancelAnimationFrame(animationFrameRequest);

        gl = webglUtils.getWebGLContext();

        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const { cells } = getInitialData({ worldDimensions });

        drawCells.initProgram(gl);
        let cellsTex = webglUtils.createTexture(
            gl,
            new Float32Array(cells.map((v) => [v, 0, 0, 0]).flat()),
            worldDimensions.width,
            worldDimensions.height
        );

        function render() {
            // if (!pause) {
            //     cellsTex = updatePositions.runProgram({
            //         gl,
            //         worldDimensions,
            //         interactionRange: simulationParams.interactionRange,
            //         drag: simulationParams.drag,
            //         deltaTime: simulationParams.timeStep,
            //         gravityFactor: simulationParams.gravityFactor,
            //         wallsMode: simulationParams.wallsMode
            //     });
            // }

            drawCells.runProgram({ gl, cellsTex });

            return (animationFrameRequest = requestAnimationFrame(render));
        }
        animationFrameRequest = requestAnimationFrame(render);
    }

    let enableFullscreen: () => void;
    onMount(() => {
        main();

        enableFullscreen = setupFullscreenElement(
            document,
            'canvas',
            screenDimensions
        ).enableFullscreen;

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                // Space bar was pressed
                pause = !pause;
                event.preventDefault();
            }
        });
    });
</script>

<canvas
    id="canvas"
    style="background-color: black"
    width={screenDimensions.width}
    height={screenDimensions.height}
/>

<div>
    <button on:click={() => (pause = !pause)}>{pause ? 'Play' : 'Pause'}</button>
    <button on:click={() => (slowMo = !slowMo)}>{slowMo ? 'Normal Speed' : 'Slow Mo'}</button>
    <span>
        World {worldDimensions.width} x {worldDimensions.height} ({worldDimensions.width *
            worldDimensions.height} cells)
    </span>
    <button on:click={() => main()}>Reset</button>
    <button on:click={enableFullscreen}>Fullscreen</button>
</div>
