import type REGL from 'regl';

import gridVS from './glsl/grid.vert.glsl';
import gridFS from './glsl/grid.frag.glsl';

let command: REGL.DrawCommand;

export const initGridCommands = (
    regl: REGL.Regl,
    coloredTexture: REGL.Framebuffer2D,
    outputTexture: REGL.Framebuffer2D | null
) => {
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
        framebuffer: outputTexture,
        uniforms: {
            prevState: coloredTexture,
            zoomLevel: regl.prop('zoomLevel'),
            pan: regl.prop('pan')
        }
    });
};

export const doGrid = (params: {
    zoomState: { zoomLevel: number; panX: number; panY: number };
}) => {
    const { zoomState } = params;
    command({
        zoomLevel: zoomState.zoomLevel,
        pan: [zoomState.panX, zoomState.panY]
    });
};
