import type REGL from 'regl';
import cursorVS from './glsl/cursor.vert.glsl';
import cursorFS from './glsl/cursor.frag.glsl';
import type { MouseState } from './types';

let command: REGL.DrawCommand;
export const initCursorCommand = (
    regl: REGL.Regl,
    inputFBO: REGL.Framebuffer2D,
    outputFBO: REGL.Framebuffer2D | null
) => {
    command = regl({
        frag: cursorFS,
        vert: cursorVS,

        attributes: {
            position: [
                [1, -1],
                [-1, -1],
                [1, 1],
                [1, 1],
                [-1, -1],
                [-1, 1]
            ]
        },
        count: 6,
        framebuffer: outputFBO,
        uniforms: {
            mousePosition: regl.prop('mousePosition'),
            penRadius: regl.prop('penRadius'),
            zoomLevel: regl.prop('zoomLevel'),
            pan: regl.prop('pan'),
            prevState: inputFBO
        }
    });
};

export const doCursor = (params: { mouseState: MouseState; worldSize: number }) => {
    /*
     * Mouse parameters (position, penSize) are relative to the zoomed canvas
     * not to the underlying texture
     */
    const { mouseState, worldSize } = params;
    command({
        mousePosition: [mouseState.x, mouseState.y],
        penRadius: 1 / 2 ** (worldSize - mouseState.penSize),
        zoomLevel: mouseState.zoomLevel,
        pan: [mouseState.panX, mouseState.panY]
    });
};
