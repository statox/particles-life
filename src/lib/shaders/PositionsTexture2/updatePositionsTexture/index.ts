import * as webglUtils from '../../webglUtils';
import updatePositionVS from './updatePosition.vert.glsl';
import updatePositionFS from './updatePosition.frag.glsl';

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

let programInfo: ProgramInfo;
let program: any;

export const initProgram = (gl: WebGLRenderingContext) => {
    program = webglUtils.createProgramFromSources(gl, [updatePositionVS, updatePositionFS]);

    programInfo = {
        positionAttributeLocation: gl.getAttribLocation(program, 'position'),
        positionTexLocation: gl.getUniformLocation(program, 'positionTex'),
        texDimensionsUniformLocation: gl.getUniformLocation(program, 'texDimensions'),
        resolutionUniformLocation: gl.getUniformLocation(program, 'u_resolution')
    };
}

export const runProgram = (params: {
    gl: WebGLRenderingContext;
    newPositionsInfo: PositionsInfo;
    oldPositionsInfo: PositionsInfo;
    texDimensions: { width: number; height: number };
}) => {
    const {
        gl,
        newPositionsInfo,
        oldPositionsInfo,
        texDimensions
    } = params;
    // render to the new positions
    gl.bindFramebuffer(gl.FRAMEBUFFER, newPositionsInfo.fb);
    gl.viewport(0, 0, texDimensions.width, texDimensions.height);

    // setup our attributes to tell WebGL how to pull
    // the data from the buffer above to the position attribute
    // this buffer just contains a -1 to +1 quad for rendering
    // to every pixel
    // setup a full canvas clip space quad
    const updatePositionBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, updatePositionBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
    );
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
