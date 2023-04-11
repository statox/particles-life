import * as webglUtils from '../../webglUtils';
import drawPositionsVS from './drawPositionsTexture.vert.glsl';
import drawPositionsFS from './drawPositionsTexture.frag.glsl';

type ProgramInfo = {
    idAttributeLocation: number;

    sizeUniformLocation: WebGLUniformLocation | null;
    texDimensionsUniformLocation: WebGLUniformLocation | null;
    worldDimensionsUniformLocation: WebGLUniformLocation | null;

    positionTexUniformLocation: WebGLUniformLocation | null;
    colorTexUniformLocation: WebGLUniformLocation | null;
};
let programInfo: ProgramInfo;
let program: WebGLProgram;
let idBuffer: WebGLBuffer;

let colorTex: WebGLTexture;

export const initProgram = (
    gl: WebGLRenderingContext,
    params: { ids: number[]; colors: number[]; texDimensions: { width: number; height: number } }
) => {
    const { ids, colors, texDimensions } = params;
    program = webglUtils.createProgramFromSources(gl, [drawPositionsVS, drawPositionsFS]);
    programInfo = {
        idAttributeLocation: gl.getAttribLocation(program, 'id'),

        sizeUniformLocation: gl.getUniformLocation(program, 'size'),
        texDimensionsUniformLocation: gl.getUniformLocation(program, 'texDimensions'),
        worldDimensionsUniformLocation: gl.getUniformLocation(program, 'worldDimensions'),

        positionTexUniformLocation: gl.getUniformLocation(program, 'positionTex'),
        colorTexUniformLocation: gl.getUniformLocation(program, 'colorTex')
    };

    idBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ids), gl.STATIC_DRAW);

    const colorsForTexture = colors.map((c) => [c, 0, 0, 0]).flat();
    colorTex = webglUtils.createTexture(
        gl,
        new Float32Array(colorsForTexture),
        texDimensions.width,
        texDimensions.height
    );
};

export const runProgram = (params: {
    gl: WebGLRenderingContext;
    positionTex: WebGLTexture;
    texDimensions: { width: number; height: number };
    worldDimensions: { width: number; height: number };
    particlesSize: number;
    ids: number[];
}) => {
    const { gl, positionTex, texDimensions, worldDimensions, particlesSize, ids } = params;

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

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, positionTex);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, colorTex);

    gl.useProgram(program);

    gl.uniform1f(programInfo.sizeUniformLocation, particlesSize);
    gl.uniform2f(
        programInfo.worldDimensionsUniformLocation,
        worldDimensions.width,
        worldDimensions.height
    );
    gl.uniform2f(
        programInfo.texDimensionsUniformLocation,
        texDimensions.width,
        texDimensions.height
    );

    gl.uniform1i(programInfo.positionTexUniformLocation, 0);
    gl.uniform1i(programInfo.colorTexUniformLocation, 1);

    gl.drawArrays(gl.POINTS, offset, ids.length);
};
