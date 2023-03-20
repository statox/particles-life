<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from '../webglUtils';
    import * as drawPositions from './drawPositionsTexture';
    import { getInitialData } from './simulationUtils';
    import * as updatePositions from './updatePositionsTexture';

    const screenDimensions = {
        width: 800,
        height: 600
    };
    const texDimensions = {
        width: 50,
        height: 10
    };
    let steps = 1;
    let slowMo = false;
    let pause = true;

    const simulationParams = {
        interactionRange: 40
    };
    function main() {
        const gl = webglUtils.getWebGLContext();
        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const { ids, positions, colors } = getInitialData({
            texDimensions,
            screenDimensions: {
                width: screenDimensions.width,
                height: screenDimensions.height
            },
            mode: 'square'
        });

        drawPositions.initProgram(gl, { ids, colors, texDimensions });
        let positionTex = updatePositions.initProgram(gl, { positions, texDimensions });

        function render() {
            webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

            if (!pause) {
                for (let _ = 0; _ < steps; _++) {
                    positionTex = updatePositions.runProgram({
                        gl,
                        texDimensions: texDimensions,
                        interactionRange: simulationParams.interactionRange
                    });
                }
            }

            drawPositions.runProgram({
                gl,
                positionTex,
                textureDimension: texDimensions,
                ids
            });

            if (pause) {
                return requestAnimationFrame(render);
            }
            if (slowMo) {
                return setTimeout(() => requestAnimationFrame(render), 1000);
            }
            return requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }

    onMount(() => main());
</script>

<p>Same principle with a shader to update positions and a shader to draw particles.</p>
<p>
    This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.
</p>
<canvas
    id="canvas"
    style="background-color: black"
    width={screenDimensions.width}
    height={screenDimensions.height}
/>

<div>
    <button on:click={() => (pause = !pause)}>{pause ? 'Play' : 'Pause'}</button>
    <button on:click={() => (slowMo = !slowMo)}>{slowMo ? 'Normal Speed' : 'Slow Mo'}</button>
    <span>particles: {texDimensions.width * texDimensions.height}</span>
    <label for="steps">Smooth steps</label>
    <input bind:value={steps} type="number" min={0} />
</div>
<div>
    <label for="steps">Interaction Ranger</label>
    <input bind:value={simulationParams.interactionRange} type="number" min={0} />
</div>
