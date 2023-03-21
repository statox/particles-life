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
    interactionRangeUniformLocation: WebGLUniformLocation | null;
    dragUniformLocation: WebGLUniformLocation | null;
    deltaTimeUniformLocation: WebGLUniformLocation | null;
    texDimensionsUniformLocation: WebGLUniformLocation | null;
    resolutionUniformLocation: WebGLUniformLocation | null;
};

let programInfo: ProgramInfo;
let program: WebGLProgram;
let updatePositionBuffer: WebGLBuffer;
let positionTex1: WebGLTexture;
let positionTex2: WebGLTexture;
let positionsFB1: WebGLFramebuffer;
let positionsFB2: WebGLFramebuffer;
let oldPositionsInfo: PositionsInfo;
let newPositionsInfo: PositionsInfo;

export const initProgram = (gl: WebGLRenderingContext, params: { positions: number[], texDimensions: { width: number, height: number } }) => {
    const { positions, texDimensions } = params;

    const updatePositionFSTemplated = updatePositionFS
        .replace('{{TEX_WIDTH}}', texDimensions.width.toFixed(1))
        .replace('{{TEX_HEIGHT}}', texDimensions.height.toFixed(1));

    program = webglUtils.createProgramFromSources(gl, [updatePositionVS, updatePositionFSTemplated]);

    programInfo = {
        positionAttributeLocation: gl.getAttribLocation(program, 'position'),
        positionTexLocation: gl.getUniformLocation(program, 'positionTex'),
        interactionRangeUniformLocation: gl.getUniformLocation(program, 'interactionRange'),
        dragUniformLocation: gl.getUniformLocation(program, 'drag'),
        deltaTimeUniformLocation: gl.getUniformLocation(program, 'deltaTime'),
        texDimensionsUniformLocation: gl.getUniformLocation(program, 'texDimensions'),
        resolutionUniformLocation: gl.getUniformLocation(program, 'u_resolution')
    };

    // setup our attributes to tell WebGL how to pull
    // the data from the buffer above to the position attribute
    // this buffer just contains a -1 to +1 quad for rendering
    // to every pixel
    // setup a full canvas clip space quad
    updatePositionBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, updatePositionBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
    );

    // create 2 textures for the positions.
    positionTex1 = webglUtils.createTexture(
        gl,
        new Float32Array(positions),
        texDimensions.width,
        texDimensions.height
    );
    positionTex2 = webglUtils.createTexture(
        gl,
        null,
        texDimensions.width,
        texDimensions.height
    );

    // create 2 framebuffers. One that renders to positionTex1
    // and another that renders to positionTex2
    positionsFB1 = webglUtils.createFramebuffer(gl, positionTex1);
    positionsFB2 = webglUtils.createFramebuffer(gl, positionTex2);

    oldPositionsInfo = {
        fb: positionsFB1,
        tex: positionTex1
    };
    newPositionsInfo = {
        fb: positionsFB2,
        tex: positionTex2
    };

    return positionTex1;
}

export const runProgram = (params: {
    gl: WebGLRenderingContext;
    texDimensions: { width: number; height: number };
    interactionRange: number;
    drag: number;
    deltaTime: number;
}) => {
    const {
        gl,
        texDimensions,
        interactionRange,
        drag,
        deltaTime
    } = params;

    // render to the new positions
    gl.bindFramebuffer(gl.FRAMEBUFFER, newPositionsInfo.fb);
    gl.viewport(0, 0, texDimensions.width, texDimensions.height);

    gl.bindBuffer(gl.ARRAY_BUFFER, updatePositionBuffer);
    gl.enableVertexAttribArray(programInfo.positionAttributeLocation as number);
    gl.vertexAttribPointer(
        programInfo.positionAttributeLocation,
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
    gl.uniform1f(programInfo.dragUniformLocation, drag);
    gl.uniform1f(programInfo.interactionRangeUniformLocation, interactionRange);
    gl.uniform1f(programInfo.deltaTimeUniformLocation, deltaTime);
    gl.uniform2f(
        programInfo.texDimensionsUniformLocation,
        texDimensions.width,
        texDimensions.height
    );
    gl.uniform2f(programInfo.resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

    gl.drawArrays(gl.TRIANGLES, 0, 6); // draw 2 triangles (6 vertices)

    // swap which texture we will read from
    // and which one we will write to
    {
        const temp = oldPositionsInfo;
        oldPositionsInfo = newPositionsInfo;
        newPositionsInfo = temp;
    }

    return oldPositionsInfo.tex;
};
