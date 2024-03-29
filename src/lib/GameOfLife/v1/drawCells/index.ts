import * as webglUtils from '../webglUtils';
import drawPositionsVS from './drawCells.vert.glsl';
import drawPositionsFS from './drawCells.frag.glsl';

type ProgramInfo = {
    positionLocation: number;
    textureLocation: WebGLUniformLocation | null;
    worldSizeLocation: WebGLUniformLocation | null;
};
let programInfo: ProgramInfo;
let program: WebGLProgram;
let positionBuffer: WebGLBuffer;

export const initProgram = (
    gl: WebGLRenderingContext,
    params: { screenDimensions: { width: number; height: number } }
) => {
    const { screenDimensions } = params;
    const { height, width } = screenDimensions;
    program = webglUtils.createProgramFromSources(gl, [drawPositionsVS, drawPositionsFS]);
    programInfo = {
        positionLocation: gl.getAttribLocation(program, 'a_position'),
        textureLocation: gl.getUniformLocation(program, 'u_texture'),
        worldSizeLocation: gl.getUniformLocation(program, 'u_worldSize')
    };

    // Create a buffer to hold the vertex data
    positionBuffer = gl.createBuffer() as WebGLBuffer;
    if (!positionBuffer) {
        throw new Error('cant create buffer');
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([0, 0, 0, height, width, 0, width, 0, 0, height, width, height]),
        gl.STATIC_DRAW
    );
};

export const runProgram = (params: {
    gl: WebGLRenderingContext;
    cellsTex: WebGLTexture;
    worldDimensions: { width: number; height: number };
}) => {
    const { gl, cellsTex, worldDimensions } = params;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, cellsTex);

    // Bind the program and set the attribute and uniform values
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(programInfo.positionLocation);
    gl.vertexAttribPointer(programInfo.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1i(programInfo.textureLocation, 0);
    gl.uniform2f(programInfo.worldSizeLocation, worldDimensions.width, worldDimensions.height);

    // Draw the texture
    gl.drawArrays(gl.TRIANGLES, 0, 6);
};
