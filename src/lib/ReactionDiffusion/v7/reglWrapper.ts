import REGL from 'regl';
import { doColors, initColorsCommands } from './colors';
import { doCursor, initCursorCommand } from './cursor';
import { getInitialConditions } from './initialConditions';
import { doSimulationUpdate, initSimulationUpdate } from './simulation';
import type { Controls, MouseState, SimulationInfo, SimulationParameters } from './types';
import { doZoom, initZoomCommand } from './zoom';

let regl: REGL.Regl;

export const initProgram = (params: {
    controls: Controls;
    info: SimulationInfo;
    mouseState: MouseState;
    simulationParameters: SimulationParameters;
}) => {
    const { controls, info, mouseState, simulationParameters } = params;
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) {
        throw new Error('Canvas container not ready');
    }

    if (regl) {
        regl.destroy();
    }
    regl = REGL({
        extensions: ['OES_texture_float'],
        canvas
    });

    info.iteration = 0;

    const RADIUS = 2 ** info.worldSize;

    const INITIAL_CONDITIONS = getInitialConditions(controls.initialConditions, RADIUS);

    const stateTextures = Array(2)
        .fill(0)
        .map(() =>
            regl.framebuffer({
                color: regl.texture({
                    radius: RADIUS,
                    data: INITIAL_CONDITIONS,
                    wrap: 'repeat',
                    type: 'float'
                }),
                depthStencil: false
            })
        );
    const coloredOutput = regl.framebuffer({
        color: regl.texture({
            radius: RADIUS,
            data: INITIAL_CONDITIONS,
            wrap: 'repeat',
            type: 'float'
        }),
        depthStencil: false
    });

    initSimulationUpdate(regl, RADIUS, stateTextures);
    initColorsCommands(regl, stateTextures, coloredOutput);
    initCursorCommand(regl, coloredOutput);
    initZoomCommand(regl, coloredOutput);

    regl.frame(() => {
        if (!controls.pause) {
            info.iteration++;
        }

        doSimulationUpdate({
            worldSize: info.worldSize,
            pauseSimulation: controls.pause,
            mouseState,
            simulationParameters
        });
        doColors({ colorMode: controls.colors, iteration: info.iteration });
        doCursor(mouseState, info.worldSize);
        doZoom(mouseState);
    });

    return regl;
};
