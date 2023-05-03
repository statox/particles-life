import type REGL from 'regl';
import drawVS from './glsl/draw.vert.glsl';
import cursorFS from './glsl/cursor.frag.glsl';

let command: REGL.DrawCommand;
export const initCursorCommand = (regl: REGL.Regl, coloredOutput: REGL.Framebuffer2D) => {
    command = regl({
        frag: cursorFS,
        vert: drawVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },

        uniforms: {
            mousePosition: regl.prop('mousePosition'),
            penRadius: regl.prop('penRadius'),
            prevState: coloredOutput
        },

        depth: {
            enable: false
        },

        primitive: 'triangles',
        count: 3
    });
};

export const doCursor = (
    mouseState: { x: number; y: number; penSize: number },
    worldSize: number
) => {
    command({
        mousePosition: [mouseState.x, mouseState.y],
        penRadius: 1 / 2 ** (worldSize - mouseState.penSize)
    });
};
