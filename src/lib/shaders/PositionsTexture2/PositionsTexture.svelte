<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from '../webglUtils';
    import * as drawPositions from './drawPositionsTexture';
    import * as updatePositions from './updatePositionsTexture';

    const screenWidth = 800;
    const screenHeight = 600;
    function main() {
        const gl = webglUtils.getWebGLContext();

        const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
        const positions = ids
            .map((_) => [Math.random() * screenWidth, Math.random() * screenHeight, 0, 0])
            .flat();

        const texDimensions = {
            width: 3,
            height: 3
        };

        drawPositions.initProgram(gl, ids);
        updatePositions.initProgram(gl);

        // create 2 textures for the positions.
        const positionTex1 = webglUtils.createTexture(
            gl,
            new Float32Array(positions),
            texDimensions.width,
            texDimensions.height
        );
        const positionTex2 = webglUtils.createTexture(
            gl,
            null,
            texDimensions.width,
            texDimensions.height
        );
        // create 2 framebuffers. One that renders to positionTex1
        // and another that renders to positionTex2
        const positionsFB1 = webglUtils.createFramebuffer(gl, positionTex1);
        const positionsFB2 = webglUtils.createFramebuffer(gl, positionTex2);

        let oldPositionsInfo = {
            fb: positionsFB1,
            tex: positionTex1
        };
        let newPositionsInfo = {
            fb: positionsFB2,
            tex: positionTex2
        };

        function render() {
            webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

            updatePositions.runProgram({
                gl,
                newPositionsInfo,
                oldPositionsInfo,
                texDimensions: texDimensions
            });

            const positionTex = newPositionsInfo.tex;
            drawPositions.runProgram({
                gl,
                positionTex,
                textureDimension: texDimensions,
                ids
            });

            // swap which texture we will read from
            // and which one we will write to
            {
                const temp = oldPositionsInfo;
                oldPositionsInfo = newPositionsInfo;
                newPositionsInfo = temp;
            }

            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }

    onMount(() => main());
</script>

<p>Create an array of render-size positions. Store this array in a texture.</p>
<p>
    Create 2 textures which will be used to update the positions with a shader. In each <code>
        requestAnimationFrame</code
    > update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.
</p>
<p>Finally switch the two textures to read and write in the updated textures</p>
<canvas id="canvas" style="background-color: black" width={screenWidth} height={screenHeight} />
