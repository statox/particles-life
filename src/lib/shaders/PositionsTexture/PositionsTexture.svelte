<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from '../webglUtils';

    import drawPositionsVS from './glsl/drawPositionsTexture.vert.glsl';
    import drawPositionsFS from './glsl/drawPositionsTexture.frag.glsl';

    const screenWidth = 800;
    const screenHeight = 600;
    function main() {
        // Get A WebGL context
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (!canvas) {
            throw 'canvas undefined';
        }
        const gl = canvas.getContext('webgl');
        if (!gl) {
            throw 'gl undefined';
        }
        webglUtils.checkWebGlCapabilities(gl);

        const program = webglUtils.createProgramFromSources(gl, [drawPositionsVS, drawPositionsFS]);

        webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

        const idAttributeLocation = gl.getAttribLocation(program, 'id');
        const texDimensionsUniformLocation = gl.getUniformLocation(program, 'texDimensions');
        const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');

        const idBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);

        const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ids), gl.STATIC_DRAW);

        const positions = ids
            .map((_) => [Math.random() * screenWidth, Math.random() * screenHeight, 0, 0])
            .flat();
        let positionTex = webglUtils.createTexture(gl, new Float32Array(positions), 3, 3);

        function render() {
            if (!gl) {
                throw 'Undefined params to render';
            }

            for (let i = 0; i <= positions.length - 2; i += 2) {
                positions[i] = (positions[i] + Math.random() * 2 - 1) % gl.canvas.width;
                positions[i + 1] = (positions[i + 1] + Math.random() * 0 + 1) % gl.canvas.height;
            }
            positionTex = webglUtils.createTexture(gl, new Float32Array(positions), 3, 3);

            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ids), gl.STATIC_DRAW);

            webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, positionTex);

            gl.useProgram(program);

            gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
            gl.uniform2f(texDimensionsUniformLocation, 3, 3);

            gl.enableVertexAttribArray(idAttributeLocation);

            // Bind the position buffer.
            gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);

            // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
            const size = 1; // 2 components per iteration
            const type = gl.FLOAT; // the data is 32bit floats
            const normalize = false; // don't normalize the data
            const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            const offset = 0; // start at the beginning of the buffer
            gl.vertexAttribPointer(idAttributeLocation, size, type, normalize, stride, offset);

            var primitiveType = gl.POINTS;
            var count = ids.length;
            gl.drawArrays(primitiveType, offset, count);

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

<button on:click={() => addPosition()}>Add position</button>
