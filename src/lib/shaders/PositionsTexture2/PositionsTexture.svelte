<script lang="ts">
    import { onMount } from 'svelte';
    import * as webglUtils from '../webglUtils';
    import * as drawPositions from './drawPositionsTexture';

    import updatePositionVS from './updatePositionsTexture/updatePosition.vert.glsl';
    import updatePositionFS from './updatePositionsTexture/updatePosition.frag.glsl';

    type PositionsInfo = {
        fb: WebGLFramebuffer;
        tex: WebGLTexture;
    };
    type ProgramInfo = {
        positionAttributeLocation: number;
        positionTexLocation: WebGLUniformLocation | null;
        texDimensionsUniformLocation: WebGLUniformLocation | null;
        resolutionUniformLocation: WebGLUniformLocation | null;
    };

    const screenWidth = 800;
    const screenHeight = 600;
    function main() {
        const gl = webglUtils.getWebGLContext();

        const program = webglUtils.createProgramFromSources(gl, [
            updatePositionVS,
            updatePositionFS
        ]);

        const programInfo = {
            positionAttributeLocation: gl.getAttribLocation(program, 'position'),
            positionTexLocation: gl.getUniformLocation(program, 'positionTex'),
            texDimensionsUniformLocation: gl.getUniformLocation(program, 'texDimensions'),
            resolutionUniformLocation: gl.getUniformLocation(program, 'u_resolution')
        };

        drawPositions.initProgram(gl);

        // setup our attributes to tell WebGL how to pull
        // the data from the buffer above to the position attribute
        // this buffer just contains a -1 to +1 quad for rendering
        // to every pixel
        // setup a full canvas clip space quad
        const updatePositionBuffer = gl.createBuffer() as WebGLBuffer;
        if (!updatePositionBuffer) {
            throw new Error("Can't create buffer");
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, updatePositionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            gl.STATIC_DRAW
        );

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

            runUpdatePositions({
                gl,
                program,
                programInfo,
                newPositionsInfo,
                oldPositionsInfo,
                updatePositionBuffer,
                texDimensions: texDimensions
            });

            const positionTex = oldPositionsInfo.tex;
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

    const runUpdatePositions = (params: {
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        programInfo: ProgramInfo;
        newPositionsInfo: PositionsInfo;
        oldPositionsInfo: PositionsInfo;
        updatePositionBuffer: WebGLBuffer;
        texDimensions: { width: number; height: number };
    }) => {
        const {
            gl,
            program,
            programInfo,
            newPositionsInfo,
            oldPositionsInfo,
            updatePositionBuffer,
            texDimensions
        } = params;
        // render to the new positions
        gl.bindFramebuffer(gl.FRAMEBUFFER, newPositionsInfo.fb);
        gl.viewport(0, 0, texDimensions.width, texDimensions.height);

        gl.bindBuffer(gl.ARRAY_BUFFER, updatePositionBuffer);
        gl.enableVertexAttribArray(programInfo.positionAttributeLocation as number);
        gl.vertexAttribPointer(
            programInfo.positionAttributeLocation as number,
            2, // size (num components)
            gl.FLOAT, // type of data in buffer
            false, // normalize
            0, // stride (0 = auto)
            0 // offset
        );

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, oldPositionsInfo.tex);

        gl.useProgram(program);
        gl.uniform1i(programInfo.positionTexLocation, 0); // tell the shader the position texture is on texture unit 0
        gl.uniform2f(
            programInfo.texDimensionsUniformLocation,
            texDimensions.width,
            texDimensions.height
        );
        gl.uniform2f(programInfo.resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

        gl.drawArrays(gl.TRIANGLES, 0, 6); // draw 2 triangles (6 vertices)
    };
</script>

<p>
    Create an array of render-size positions. Store this array in a texture. In each <code>
        requestAnimationFrame</code
    > update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.
</p>
<canvas id="canvas" style="background-color: black" width={screenWidth} height={screenHeight} />
