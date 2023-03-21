import * as webglUtils from '../../webglUtils';
import drawPositionsVS from './drawPositionsTexture.vert.glsl';
import drawPositionsFS from './drawPositionsTexture.frag.glsl';

type ProgramInfo = {
    idAttributeLocation: number;
    colorAttributeLocation: number;
    sizeUniformLocation: WebGLUniformLocation | null;
    texDimensionsUniformLocation: WebGLUniformLocation | null;
    resolutionUniformLocation: WebGLUniformLocation | null;
};
let programInfo: ProgramInfo;
let program: WebGLProgram;
let idBuffer: WebGLBuffer;
let colorBuffer: WebGLBuffer;

export const initProgram = (gl: WebGLRenderingContext, params: { ids: number[], colors: number[], texDimensions: { width: number, height: number } }) => {
    const { ids, colors } = params;
    program = webglUtils.createProgramFromSources(gl, [drawPositionsVS, drawPositionsFS]);
    programInfo = {
        idAttributeLocation: gl.getAttribLocation(program, 'id'),
        colorAttributeLocation: gl.getAttribLocation(program, 'color'),
        sizeUniformLocation: gl.getUniformLocation(program, 'size'),
        texDimensionsUniformLocation: gl.getUniformLocation(program, 'texDimensions'),
        resolutionUniformLocation: gl.getUniformLocation(program, 'u_resolution')
    }

    idBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ids), gl.STATIC_DRAW);

    colorBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}

export const runProgram = (params: {
    gl: WebGLRenderingContext,
    positionTex: WebGLTexture,
    textureDimension: { width: number, height: number },
    particlesSize: number,
    ids: number[]
}) => {
    const { gl, positionTex, textureDimension, particlesSize, ids } = params;

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    const size = 1; // 1 components per iteration
    const type = gl.FLOAT; // the data is 32bit floats
    const normalize = false; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    const offset = 0; // start at the beginning of the buffer

    webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
    gl.vertexAttribPointer(programInfo.idAttributeLocation, size, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.idAttributeLocation);

    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(programInfo.colorAttributeLocation, size, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.colorAttributeLocation);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, positionTex);

    gl.useProgram(program);

    gl.uniform1f(programInfo.sizeUniformLocation, particlesSize);
    gl.uniform2f(programInfo.resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(programInfo.texDimensionsUniformLocation, textureDimension.width, textureDimension.height);

    gl.drawArrays(gl.POINTS, offset, ids.length);
};
