import type REGL from 'regl';
import zoomVS from './glsl/zoom.vert.glsl';
import zoomFS from './glsl/zoom.frag.glsl';

let command: REGL.DrawCommand;
export const initZoomCommand = (regl: REGL.Regl, coloredOutput: REGL.Framebuffer2D) => {
    command = regl({
        frag: zoomFS,
        vert: zoomVS,

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

        uniforms: {
            zoomLevel: regl.prop('zoomLevel'),
            pan: regl.prop('pan'),
            prevState: coloredOutput
        },

        primitive: 'triangles',
        count: 6
    });
};

export const doZoom = (zoomState: { zoomLevel: number; panX: number; panY: number }) => {
    command({
        zoomLevel: zoomState.zoomLevel,
        pan: [zoomState.panX, zoomState.panY]
    });
};
