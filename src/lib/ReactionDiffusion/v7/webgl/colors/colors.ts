import type REGL from 'regl';

import colorsVS from './glsl/colors.vert.glsl';
import colorsRawFS from './glsl/raw.frag.glsl';
import colorsTimeBasedBlueFS from './glsl/timeBasedBlue.frag.glsl';
import colorsGrayscaleFS from './glsl/grayscale.frag.glsl';
import colorsBlackWhiteFS from './glsl/blackWhite.frag.glsl';
import colorsWhiteBlackFS from './glsl/whiteBlack.frag.glsl';
import colorsLerpFS from './glsl/lerp.frag.glsl';
import colorsMrobFS from './glsl/mrob.frag.glsl';
import colorsRedBlueFS from './glsl/redblue.frag.glsl';

export type ColorMode =
    | 'lerp'
    | 'grayscale'
    | 'blackwhite'
    | 'whiteblack'
    | 'raw'
    | 'timebasedblue'
    | 'mrob';
const colorCommands: {
    [k: string]: REGL.DrawCommand;
} = {};

export const initColorsCommands = (regl: REGL.Regl, stateTextures: REGL.Framebuffer2D[]) => {
    const commonSettings = {
        vert: colorsVS,

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
            iteration: regl.prop('iteration'),
            zoomLevel: regl.prop('zoomLevel'),
            pan: regl.prop('pan'),
            prevState: (params: { tick: number }) => stateTextures[(params.tick + 1) % 2]
        }
    };

    colorCommands['raw'] = regl({
        frag: colorsRawFS,
        ...commonSettings
    });

    colorCommands['grayscale'] = regl({
        frag: colorsGrayscaleFS,
        ...commonSettings
    });
    colorCommands['blackwhite'] = regl({
        frag: colorsBlackWhiteFS,
        ...commonSettings
    });
    colorCommands['whiteblack'] = regl({
        frag: colorsWhiteBlackFS,
        ...commonSettings
    });
    colorCommands['timebasedblue'] = regl({
        frag: colorsTimeBasedBlueFS,
        ...commonSettings
    });

    colorCommands['lerp'] = regl({
        frag: colorsLerpFS,
        ...commonSettings
    });

    colorCommands['mrob'] = regl({
        frag: colorsMrobFS,
        ...commonSettings
    });
    colorCommands['redblue'] = regl({
        frag: colorsRedBlueFS,
        ...commonSettings
    });
};

export const doColors = (params: {
    colorMode: ColorMode;
    iteration: number;
    outputBuffer: REGL.Framebuffer2D | null;
    zoomState: { zoomLevel: number; panX: number; panY: number };
}) => {
    const { colorMode, iteration, outputBuffer, zoomState } = params;
    const command = colorCommands[colorMode] || colorCommands['raw'];
    command({
        iteration,
        outputBuffer,
        pan: [zoomState.panX, zoomState.panY],
        zoomLevel: zoomState.zoomLevel
    });
};
