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
        width: 100,
        height: 50
    };
    let pause = true;
    function main() {
        const gl = webglUtils.getWebGLContext();
        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const { ids, positions, colors } = getInitialData(texDimensions, {
            width: screenDimensions.width,
            height: screenDimensions.height
        });

        drawPositions.initProgram(gl, { ids, colors, texDimensions });
        updatePositions.initProgram(gl, { positions, texDimensions });

        let positionTex: WebGLTexture;
        function render() {
            webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

            if (!positionTex || !pause) {
                positionTex = updatePositions.runProgram({
                    gl,
                    texDimensions: texDimensions
                });
            }

            drawPositions.runProgram({
                gl,
                positionTex,
                textureDimension: texDimensions,
                ids
            });

            requestAnimationFrame(render);
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
    <span>particles: {texDimensions.width * texDimensions.height}</span>
</div>
