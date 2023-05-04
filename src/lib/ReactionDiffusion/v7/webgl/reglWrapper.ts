import REGL from 'regl';
import { doCursor, initCursorCommand } from './cursor/cursor';
import { doColors, initColorsCommands } from './colors/colors';
import { doSimulationUpdate, initSimulationUpdate } from './simulation/simulation';
import { getInitialConditions } from '../initialConditions';
import type { Controls, MouseState, SimulationInfo, SimulationParameters } from '../types';
import { doGrid, initGridCommands } from './grid/grid';

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

    const regl = REGL({
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

    const gridOutput = regl.framebuffer({
        color: regl.texture({
            radius: RADIUS,
            data: INITIAL_CONDITIONS,
            wrap: 'repeat',
            type: 'float'
        }),
        depthStencil: false
    });

    initSimulationUpdate(regl, RADIUS, stateTextures);
    initColorsCommands(regl, stateTextures);
    initGridCommands(regl);
    initCursorCommand(regl);

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
        doColors({
            colorMode: controls.colors,
            iteration: info.iteration,
            outputBuffer: coloredOutput,
            zoomState: mouseState
        });
        doGrid({ inputBuffer: coloredOutput, outputBuffer: gridOutput, zoomState: mouseState });
        doCursor({
            mouseState,
            worldSize: info.worldSize,
            inputBuffer: gridOutput,
            outputBuffer: null
        });
    });

    return regl;
};
