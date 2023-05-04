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

    initSimulationUpdate(regl, RADIUS);
    initColorsCommands(regl);
    initGridCommands(regl);
    initCursorCommand(regl);

    let customTick = 0; // Regl probably has something build in but I couldn't find it
    regl.frame(() => {
        customTick++;
        if (!controls.pause) {
            info.iteration++;
        }

        const inputSimulation = stateTextures[customTick % 2];
        const outputSimulation = stateTextures[(customTick + 1) % 2];
        doSimulationUpdate({
            inputBuffer: inputSimulation,
            outputBuffer: outputSimulation,
            worldSize: info.worldSize,
            pauseSimulation: controls.pause,
            mouseState,
            simulationParameters
        });

        const inputStep1 = outputSimulation;
        const outputStep1 = coloredOutput;
        doColors({
            colorMode: controls.colors,
            inputBuffer: inputStep1,
            iteration: info.iteration,
            outputBuffer: outputStep1,
            zoomState: mouseState
        });

        const inputStep2 = outputStep1;
        const outputStep2 = gridOutput;
        if (controls.grid) {
            doGrid({ inputBuffer: inputStep2, outputBuffer: outputStep2, zoomState: mouseState });
        }

        const inputStep3 = controls.grid ? outputStep2 : outputStep1;
        const outputStep3 = null;
        doCursor({
            mouseState,
            worldSize: info.worldSize,
            inputBuffer: inputStep3,
            outputBuffer: outputStep3
        });
    });

    return regl;
};
