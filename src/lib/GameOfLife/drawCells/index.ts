import * as webglUtils from '../webglUtils';
import drawPositionsVS from './drawCells.vert.glsl';
import drawPositionsFS from './drawCells.frag.glsl';

type ProgramInfo = {
    positionLocation: number;
    textureLocation: WebGLUniformLocation | null;
};
let programInfo: ProgramInfo;
let program: WebGLProgram;
let positionBuffer: WebGLBuffer;

export const initProgram = (gl: WebGLRenderingContext) => {
    program = webglUtils.createProgramFromSources(gl, [drawPositionsVS, drawPositionsFS]);
    programInfo = {
        positionLocation: gl.getAttribLocation(program, 'a_position'),
        textureLocation: gl.getUniformLocation(program, 'u_texture')

    };

    // Create a buffer to hold the vertex data
    positionBuffer = gl.createBuffer() as WebGLBuffer;
    if (!positionBuffer) {
        throw new Error('cant create buffer');
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0, 0,
        0, 300,
        300, 0,
        300, 0,
        0, 300,
        300, 300,
    ]), gl.STATIC_DRAW);
}

export const runProgram = (params: {
    gl: WebGLRenderingContext,
    cellsTex: WebGLTexture,
}) => {
    const { gl, cellsTex } = params;

    gl.bindTexture(gl.TEXTURE_2D, cellsTex);

    // Bind the program and set the attribute and uniform values
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(programInfo.positionLocation);
    gl.vertexAttribPointer(programInfo.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1i(programInfo.textureLocation, 0);

    // Draw the texture
    gl.drawArrays(gl.TRIANGLES, 0, 6);
};
