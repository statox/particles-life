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
    const graphicsTextures = Array(2).fill(0).map(makeFrameBuffer);

    initSimulationUpdate(regl, RADIUS);
    initColorsCommands(regl);
    initGridCommands(regl);
    initCursorCommand(regl);

    let frameTick = 0; // Regl probably has something build in but I couldn't find it
    regl.frame(() => {
        frameTick++;
        if (!controls.pause) {
            info.iteration++;
        }
        let graphicsTexturesTick = 0;

        const inputSimulation = simulationTextures[frameTick % 2];
        const outputSimulation = simulationTextures[(frameTick + 1) % 2];
        doSimulationUpdate({
            inputBuffer: inputSimulation,
            outputBuffer: outputSimulation,
            worldSize: info.worldSize,
            pauseSimulation: controls.pause,
            mouseState,
            simulationParameters
        });

        graphicsTexturesTick++;
        const inputStep1 = outputSimulation;
        const outputStep1 = graphicsTextures[graphicsTexturesTick % 2];
        doColors({
            colorMode: controls.colors,
            inputBuffer: inputStep1,
            iteration: info.iteration,
            outputBuffer: outputStep1,
            zoomState: mouseState
        });

        if (controls.grid) {
            graphicsTexturesTick++;
            const inputStep2 = graphicsTextures[(graphicsTexturesTick + 1) % 2];
            const outputStep2 = graphicsTextures[graphicsTexturesTick % 2];
            doGrid({ inputBuffer: inputStep2, outputBuffer: outputStep2, zoomState: mouseState });
        }

        graphicsTexturesTick++;
        const inputStep3 = graphicsTextures[(graphicsTexturesTick + 1) % 2];
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
