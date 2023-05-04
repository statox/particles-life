import type REGL from 'regl';

import gridVS from './glsl/grid.vert.glsl';
import gridFS from './glsl/grid.frag.glsl';

let command: REGL.DrawCommand;

export const initGridCommands = (regl: REGL.Regl) => {
    command = regl({
        vert: gridVS,
        frag: gridFS,

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
        framebuffer: regl.prop('outputBuffer'),
        uniforms: {
            prevState: regl.prop('inputBuffer'),
            zoomLevel: regl.prop('zoomLevel'),
            pan: regl.prop('pan')
        }
    });
};

export const doGrid = (params: {
    inputBuffer: REGL.Framebuffer2D;
    outputBuffer: REGL.Framebuffer2D | null;
    zoomState: { zoomLevel: number; panX: number; panY: number };
}) => {
    const { inputBuffer, outputBuffer, zoomState } = params;
    command({
        inputBuffer,
        outputBuffer,
        zoomLevel: zoomState.zoomLevel,
        pan: [zoomState.panX, zoomState.panY]
    });
};
