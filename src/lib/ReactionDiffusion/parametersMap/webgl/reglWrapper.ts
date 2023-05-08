import { doColors, initColorsCommands } from './colors/colors';
import { doSimulationUpdate, initSimulationUpdate } from './simulation/simulation';
import { getInitialConditions } from '../initialConditions';
import type { Controls, MouseState, ParametersMapParameters, SimulationInfo } from '../types';
import REGL from 'regl';

export const initProgram = (params: {
    controls: Controls;
    info: SimulationInfo;
    mouseState: MouseState;
    simulationParameters: ParametersMapParameters;
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

    const makeFrameBuffer = () =>
        regl.framebuffer({
            color: regl.texture({
                radius: RADIUS,
                data: INITIAL_CONDITIONS,
                wrap: 'repeat',
                type: 'float'
            }),
            depthStencil: false
        });

    const simulationTextures = Array(2).fill(0).map(makeFrameBuffer);

    initSimulationUpdate(regl, RADIUS);
    initColorsCommands(regl);

    regl.frame(() => {
        if (!controls.pause) {
            info.iteration++;
        }

        let outputSimulation = simulationTextures[(info.iteration + 1) % 2];
        for (let i = 0; i < controls.speed; i++) {
            info.iteration++;
            const inputSimulation = simulationTextures[info.iteration % 2];
            outputSimulation = simulationTextures[(info.iteration + 1) % 2];
            doSimulationUpdate({
                inputBuffer: inputSimulation,
                outputBuffer: outputSimulation,
                worldSize: info.worldSize,
                pauseSimulation: controls.pause,
                mouseState,
                simulationParameters
            });
        }

        doColors({
            colorMode: controls.colors,
            inputBuffer: outputSimulation,
            iteration: info.iteration,
            outputBuffer: null,
            zoomState: mouseState
        });
    });

    return regl;
};
