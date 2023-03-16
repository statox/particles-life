import * as webglUtils from '../../webglUtils';
import drawPositionsVS from './drawPositionsTexture.vert.glsl';
import drawPositionsFS from './drawPositionsTexture.frag.glsl';

type ProgramInfo = {
    idAttributeLocation: number;
    texDimensionsUniformLocation: WebGLUniformLocation | null;
    resolutionUniformLocation: WebGLUniformLocation | null;
};
let programInfo: ProgramInfo;
let program: WebGLProgram;
let idBuffer: WebGLBuffer;

export const initProgram = (gl: WebGLRenderingContext, ids: number[]) => {
    program = webglUtils.createProgramFromSources(gl, [drawPositionsVS, drawPositionsFS]);
    programInfo = {
        idAttributeLocation: gl.getAttribLocation(program, 'id'),
        texDimensionsUniformLocation: gl.getUniformLocation(program, 'texDimensions'),
        resolutionUniformLocation: gl.getUniformLocation(program, 'u_resolution')
    }

    idBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ids), gl.STATIC_DRAW);
}

export const runProgram = (params: {
    gl: WebGLRenderingContext,
    positionTex: WebGLTexture,
    textureDimension: { width: number, height: number },
    ids: number[]
}) => {
    const { gl, positionTex, textureDimension, ids } = params;

    webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, positionTex);

    gl.useProgram(program);

    gl.uniform2f(programInfo.resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(programInfo.texDimensionsUniformLocation, textureDimension.width, textureDimension.height);

    gl.enableVertexAttribArray(programInfo.idAttributeLocation);

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    const size = 1; // 1 components per iteration
    const type = gl.FLOAT; // the data is 32bit floats
    const normalize = false; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    gl.vertexAttribPointer(programInfo.idAttributeLocation, size, type, normalize, stride, offset);

    gl.drawArrays(gl.POINTS, offset, ids.length);
};
