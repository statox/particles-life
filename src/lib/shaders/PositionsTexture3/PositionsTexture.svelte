<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from '../webglUtils';
    import * as drawPositions from './drawPositionsTexture';
    import { getInitialData } from './simulationUtils';
    import * as updatePositions from './updatePositionsTexture';

    const screenWidth = 800;
    const screenHeight = 600;
    function main() {
        const gl = webglUtils.getWebGLContext();
        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const { ids, positions, texDimensions, colors } = getInitialData(10000, {
            width: screenWidth,
            height: screenHeight
        });

        drawPositions.initProgram(gl, { ids, colors, texDimensions });
        updatePositions.initProgram(gl, { positions, texDimensions });

        function render() {
            webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

            const positionTex = updatePositions.runProgram({
                gl,
                texDimensions: texDimensions
            });

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
<canvas id="canvas" style="background-color: black" width={screenWidth} height={screenHeight} />
