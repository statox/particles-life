<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from './webglUtils';
    import * as drawCells from './drawCells';
    import { setupFullscreenElement } from './fullscreen';
    import { getInitialData } from './simulationUtils';
    import * as updateCells from './updateCells';

    const screenDimensions = {
        width: 1200,
        height: 900
    };

    const worldDimensions = {
        width: 1200,
        height: 900
    };

    const mouseCoordinates = {
        x: -100,
        y: -100
    };
    let mouseMode: updateCells.MouseMode = 0;

    let zoomLevel = 1;
    let initialDensity = 0.05;

    let pause = true;
    let cellsTex: WebGLTexture;

    let gl: WebGLRenderingContext;
    let animationFrameRequest: number;
    function main() {
        cancelAnimationFrame(animationFrameRequest);

        gl = webglUtils.getWebGLContext();

        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const initialData = getInitialData(gl, { worldDimensions, initialDensity });
        cellsTex = updateCells.initProgram(gl, {
            cellsTex: initialData.cellsTex,
            texDimensions: worldDimensions
        });

        drawCells.initProgram(gl, { screenDimensions, mode: 'white' });

        function render() {
            if (!pause) {
                cellsTex = updateCells.runProgram({
                    gl,
                    worldDimensions,
                    screenDimensions,
                    mouseCoordinates,
                    mouseMode
                });
            }

            drawCells.runProgram({ gl, cellsTex, worldDimensions, zoomLevel });

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
            if (event.code === 'KeyF') {
                // Space bar was pressed
                enableFullscreen();
                return;
            }
            if (event.code === 'KeyR') {
                // Space bar was pressed
                resetTexture();
                return;
            }
        });

        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (!canvas) {
            throw new Error('Canvas unavailable');
        }

        canvas.addEventListener('mousemove', (event) => {
            // const mousePos = getMousePos(canvas, event);

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

    const resetTexture = () => {
        worldDimensions.width = Math.min(worldDimensions.width, screenDimensions.width);
        worldDimensions.height = Math.min(worldDimensions.height, screenDimensions.height);
        const initialData = getInitialData(gl, { worldDimensions, initialDensity });
        cellsTex = updateCells.initProgram(gl, {
            cellsTex: initialData.cellsTex,
            texDimensions: worldDimensions
        });
    };
</script>

<canvas
    id="canvas"
    style="background-color: black"
    width={screenDimensions.width}
    height={screenDimensions.height}
/>

<div>
    <button on:click={() => (pause = !pause)}>{pause ? 'Play' : 'Pause'} (Space)</button>
    <button on:click={() => (zoomLevel += 1)}>Zoom in</button>
    <button on:click={() => (zoomLevel = Math.max(zoomLevel - 1, 1))}>Zoom out</button>
    <button on:click={() => (zoomLevel = 1)}>Reset zoom</button>
</div>

<div>
    <span>
        World {worldDimensions.width} x {worldDimensions.height} ({worldDimensions.width *
            worldDimensions.height} cells)
    </span>
    <button on:click={() => main()}>Reload program</button>
    <button on:click={enableFullscreen}>Fullscreen (f)</button>
</div>

<div>
    <button on:click={resetTexture}>Reset world (r)</button>

    <span>
        <label for="initialDensity">Initial density [0-1]</label>
        <input
            id="initialDensity"
            on:change={resetTexture}
            bind:value={initialDensity}
            type="number"
            min={0}
            max={1}
        />
    </span>

    <span>
        <label for="worldWidth">World: width</label>
        <input
            id="worldWidth"
            on:change={resetTexture}
            bind:value={worldDimensions.width}
            type="number"
            min={0}
        />

        <label for="worldHeight">height</label>
        <input
            id="worldHeight"
            on:change={resetTexture}
            bind:value={worldDimensions.height}
            type="number"
            min={0}
        />
    </span>
</div>
