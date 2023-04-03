<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from './webglUtils';
    import * as drawCells from './drawCells';
    import { setupFullscreenElement } from './fullscreen';
    import { getInitialData } from './simulationUtils';
    // import * as updatePositions from './updatePositionsTexture';

    const screenDimensions = {
        width: 900,
        height: 300
    };
    const worldDimensions = {
        width: 90,
        height: 30
    };
    let pause = true;
    let cellsTex: WebGLTexture;

    let gl: WebGLRenderingContext;
    let animationFrameRequest: number;
    function main() {
        cancelAnimationFrame(animationFrameRequest);

        gl = webglUtils.getWebGLContext();

        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const initialData = getInitialData(gl, { worldDimensions });
        cellsTex = initialData.cellsTex;

        drawCells.initProgram(gl, { screenDimensions });

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

            drawCells.runProgram({ gl, cellsTex, worldDimensions });

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

    const resetTexture = () => {
        const initialData = getInitialData(gl, { worldDimensions });
        cellsTex = initialData.cellsTex;
    };
</script>

<canvas
    id="canvas"
    style="background-color: black"
    width={screenDimensions.width}
    height={screenDimensions.height}
/>

<div>
    <span>
        World {worldDimensions.width} x {worldDimensions.height} ({worldDimensions.width *
            worldDimensions.height} cells)
    </span>
    <button on:click={() => main()}>Reload program</button>
    <button on:click={enableFullscreen}>Fullscreen</button>
</div>

<div>
    <button on:click={() => resetTexture()}>Reset texture</button>
</div>
