<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from '../webglUtils';
    import * as drawPositions from './drawPositionsTexture';
    import * as updatePositions from './updatePositionsTexture';

    const screenWidth = 800;
    const screenHeight = 600;
    function main() {
        const gl = webglUtils.getWebGLContext();

        drawPositions.initProgram(gl);
        updatePositions.initProgram(gl);

        const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
        const positions = ids
            .map((_) => [Math.random() * screenWidth, Math.random() * screenHeight, 0, 0])
            .flat();

        const texDimensions = {
            width: 3,
            height: 3
        };

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

<p>
    Create an array of render-size positions. Store this array in a texture. In each <code>
        requestAnimationFrame</code
    > update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.
</p>
<canvas id="canvas" style="background-color: black" width={screenWidth} height={screenHeight} />
