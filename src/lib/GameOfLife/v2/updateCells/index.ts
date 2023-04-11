import * as webglUtils from '../webglUtils';
import updateCellsVS from './updateCells.vert.glsl';
import updateCellsFS from './updateCells.frag.glsl';

type PositionsInfo = {
    fb: WebGLFramebuffer;
    tex: WebGLTexture;
};
type ProgramInfo = {
    uInputTextureLocation: WebGLUniformLocation | null;
    uTextureSizeLocation: WebGLUniformLocation | null;
    uMouseCoordinatesLocation: WebGLUniformLocation | null;
    uMouseModeLocation: WebGLUniformLocation | null;
    uInfiniteSourceLocation: WebGLUniformLocation | null;
    positionLocation: number;
};

let programInfo: ProgramInfo;
let program: WebGLProgram;
let vertexBuffer: WebGLBuffer;
let positionTex1: WebGLTexture;
let positionTex2: WebGLTexture;
let positionsFB1: WebGLFramebuffer;
let positionsFB2: WebGLFramebuffer;
let oldPositionsInfo: PositionsInfo;
let newPositionsInfo: PositionsInfo;

export const initProgram = (
    gl: WebGLRenderingContext,
    params: { cellsTex: WebGLTexture; texDimensions: { width: number; height: number } }
) => {
    const { cellsTex, texDimensions } = params;

    program = webglUtils.createProgramFromSources(gl, [updateCellsVS, updateCellsFS]);

    programInfo = {
        uInputTextureLocation: gl.getUniformLocation(program, 'uInputTexture'),
        uTextureSizeLocation: gl.getUniformLocation(program, 'uTextureSize'),
        uMouseCoordinatesLocation: gl.getUniformLocation(program, 'uMouseCoordinates'),
        uMouseModeLocation: gl.getUniformLocation(program, 'uMouseMode'),
        uInfiniteSourceLocation: gl.getUniformLocation(program, 'uInfiniteSource'),
        positionLocation: gl.getAttribLocation(program, 'aPosition')
    };

    // setup our attributes to tell WebGL how to pull
    // the data from the buffer above to the position attribute
    // this buffer just contains a -1 to +1 quad for rendering
    // to every pixel
    // setup a full canvas clip space quad
    vertexBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
    );

    // create 2 textures for the positions.
    positionTex1 = cellsTex;
    positionTex2 = webglUtils.createTexture(gl, null, texDimensions.width, texDimensions.height);

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
};

export type MouseMode = 0 | 1 | 2;
export const runProgram = (params: {
    gl: WebGLRenderingContext;
    worldDimensions: { width: number; height: number };
    screenDimensions: { width: number; height: number };
    mouseCoordinates: { x: number; y: number }; // in range [0, 1] for screen dimensions
    mouseMode: MouseMode;
    infiniteSource: boolean;
}) => {
    const { gl, worldDimensions, screenDimensions, mouseCoordinates, mouseMode, infiniteSource } =
        params;

    // render to the new positions
    gl.bindFramebuffer(gl.FRAMEBUFFER, newPositionsInfo.fb);
    gl.viewport(0, 0, screenDimensions.width, screenDimensions.height);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.enableVertexAttribArray(programInfo.positionLocation as number);
    gl.vertexAttribPointer(
        programInfo.positionLocation,
        2, // size (num components)
        gl.FLOAT, // type of data in buffer
        false, // normalize
        0, // stride (0 = auto)
        0 // offset
    );

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, oldPositionsInfo.tex);

    gl.useProgram(program);
    gl.uniform1i(programInfo.uInputTextureLocation, 0); // tell the shader the position texture is on texture unit 0

    gl.uniform2f(programInfo.uTextureSizeLocation, worldDimensions.width, worldDimensions.height); // Set the texture size
    gl.uniform2f(programInfo.uMouseCoordinatesLocation, mouseCoordinates.x, mouseCoordinates.y);
    gl.uniform1i(programInfo.uMouseModeLocation, mouseMode);
    gl.uniform1i(programInfo.uInfiniteSourceLocation, infiniteSource ? 1 : 0);

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
