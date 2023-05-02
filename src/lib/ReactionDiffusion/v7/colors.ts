import type REGL from 'regl';

import drawVS from './glsl/draw.vert.glsl';
import colorsRawFS from './glsl/colors/raw.frag.glsl';
import colorsTimeBasedBlueFS from './glsl/colors/timeBasedBlue.frag.glsl';
import colorsGrayscaleFS from './glsl/colors/grayscale.frag.glsl';
import colorsBlackWhiteFS from './glsl/colors/blackWhite.frag.glsl';
import colorsWhiteBlackFS from './glsl/colors/whiteBlack.frag.glsl';

export type ColorMode = 'grayscale' | 'blackwhite' | 'whiteblack' | 'raw' | 'timebasedblue';
const colorCommands: {
    [k: string]: REGL.DrawCommand;
} = {};

export const initColorsCommands = (regl: REGL.Regl, state: REGL.Framebuffer2D[]) => {
    console.log({ regl, state });

    colorCommands['raw'] = regl({
        frag: colorsRawFS,
        vert: drawVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },
        count: 3,
        uniforms: {
            iteration: regl.prop('iteration'),
            prevState: (params: { tick: number }) => state[(params.tick + 1) % 2]
        }
    });

    colorCommands['grayscale'] = regl({
        frag: colorsGrayscaleFS,
        vert: drawVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },
        count: 3,
        uniforms: {
            iteration: regl.prop('iteration'),
            prevState: (params: { tick: number }) => state[(params.tick + 1) % 2]
        }
    });
    colorCommands['blackwhite'] = regl({
        frag: colorsBlackWhiteFS,
        vert: drawVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },
        count: 3,
        uniforms: {
            iteration: regl.prop('iteration'),
            prevState: (params: { tick: number }) => state[(params.tick + 1) % 2]
        }
    });
    colorCommands['whiteblack'] = regl({
        frag: colorsWhiteBlackFS,
        vert: drawVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },
        count: 3,
        uniforms: {
            iteration: regl.prop('iteration'),
            prevState: (params: { tick: number }) => state[(params.tick + 1) % 2]
        }
    });
    colorCommands['timebasedblue'] = regl({
        frag: colorsTimeBasedBlueFS,
        vert: drawVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },
        count: 3,
        uniforms: {
            iteration: regl.prop('iteration'),
            prevState: (params: { tick: number }) => state[(params.tick + 1) % 2]
        }
    });
};

export const doColors = (mode: ColorMode, info: { iteration: number }) => {
    const command = colorCommands[mode] || colorCommands['raw'];
    command({
        iteration: info.iteration
    });
};
