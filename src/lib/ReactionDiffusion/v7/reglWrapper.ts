import REGL from 'regl';
import { doColors, initColorsCommands } from './colors';
import { doCursor, initCursorCommand } from './cursor';
import { getInitialConditions } from './initialConditions';
import { doSimulationUpdate, initSimulationUpdate } from './simulation';
import { doZoom, initZoomCommand } from './zoom';

let regl: REGL.Regl;

export const initProgram = (params: {
    controls: any;
    info: any;
    mouseState: any;
    simulationParameters: any;
    worldSize: number;
}) => {
    const { controls, info, mouseState, simulationParameters, worldSize } = params;
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

    const RADIUS = 2 ** worldSize;

    const INITIAL_CONDITIONS = getInitialConditions(controls.initialConditions, RADIUS);

    const state = Array(2)
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

    initSimulationUpdate(regl, RADIUS, state);
    initColorsCommands(regl, state, coloredOutput);
    initCursorCommand(regl, coloredOutput);
    initZoomCommand(regl, coloredOutput);

    regl.frame(() => {
        if (!controls.pause) {
            info.iteration++;
        }

        doSimulationUpdate({
            worldSize: worldSize,
            pauseSimulation: controls.pause,
            mouseState,
            simulationParameters
        });
        doColors(controls.colors, info);
        doCursor(mouseState, worldSize);
        doZoom(mouseState);
    });

    return regl;
};
