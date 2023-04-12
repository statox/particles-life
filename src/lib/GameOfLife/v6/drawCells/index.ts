import * as webglUtils from '../webglUtils';
import drawCellsVS from './drawCells.vert.glsl';
import drawCellsFS from './drawCells.frag.glsl';
import drawCellsGradiantFS from './drawCellsGradiant.frag.glsl';
import drawCellsAgeGradiantFS from './drawCellsAgeGradiant.frag.glsl';

type ProgramInfo = {
    positionLocation: number;
    textureLocation: WebGLUniformLocation | null;
    worldSizeLocation: WebGLUniformLocation | null;
    zoomLocation: WebGLUniformLocation | null;
    panLocation: WebGLUniformLocation | null;
    iterationLocation: WebGLUniformLocation | null;
};
let programInfo: ProgramInfo;
let program: WebGLProgram;
let positionBuffer: WebGLBuffer;

export type DrawingMode = 'white' | 'gradiant' | 'age_gradiant';
export const initProgram = (
    gl: WebGLRenderingContext,
    params: { mode: DrawingMode; screenDimensions: { width: number; height: number } }
) => {
    const { screenDimensions, mode } = params;
    const { height, width } = screenDimensions;
    let fragShaderSource = drawCellsFS;
    if (mode === 'gradiant') {
        fragShaderSource = drawCellsGradiantFS;
    } else if (mode === 'age_gradiant') {
        fragShaderSource = drawCellsAgeGradiantFS;
    }
    program = webglUtils.createProgramFromSources(gl, [drawCellsVS, fragShaderSource]);
    programInfo = {
        positionLocation: gl.getAttribLocation(program, 'a_position'),
        textureLocation: gl.getUniformLocation(program, 'u_texture'),
        worldSizeLocation: gl.getUniformLocation(program, 'u_worldSize'),
        zoomLocation: gl.getUniformLocation(program, 'u_zoom'),
        panLocation: gl.getUniformLocation(program, 'u_pan'),
        iterationLocation: gl.getUniformLocation(program, 'u_iteration')
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
    zoomLevel: number;
    pan: { x: number; y: number };
    iteration: number;
}) => {
    const { gl, cellsTex, worldDimensions, zoomLevel, pan, iteration } = params;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, cellsTex);

    // Bind the program and set the attribute and uniform values
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(programInfo.positionLocation);
    gl.vertexAttribPointer(programInfo.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1i(programInfo.textureLocation, 0);
    gl.uniform2f(programInfo.worldSizeLocation, worldDimensions.width, worldDimensions.height);
    gl.uniform1f(programInfo.zoomLocation, Math.max(zoomLevel, 1));
    gl.uniform2f(programInfo.panLocation, pan.x, pan.y);
    gl.uniform1f(programInfo.iterationLocation, iteration);

    // Draw the texture
    gl.drawArrays(gl.TRIANGLES, 0, 6);
};
