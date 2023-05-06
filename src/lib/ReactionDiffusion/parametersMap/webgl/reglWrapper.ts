import { doColors, initColorsCommands } from './colors/colors';
import { doSimulationUpdate, initSimulationUpdate } from './simulation/simulation';
import { getInitialConditions } from '../initialConditions';
import type { Controls, MouseState, ParametersMapParameters, SimulationInfo } from '../types';
import { doGrid, initGridCommands } from './grid/grid';
import { doCursor, initCursorCommand } from './cursor/cursor';
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
    const graphicsTextures = Array(2).fill(0).map(makeFrameBuffer);

    initSimulationUpdate(regl, RADIUS);
    initColorsCommands(regl);
    initGridCommands(regl);
    initCursorCommand(regl);

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

        graphicPipeline({
            inputTexture: outputSimulation,
            graphicsTextures,
            controls,
            info,
            mouseState
        });
    });

    return regl;
};

const graphicPipeline = (params: {
    inputTexture: REGL.Framebuffer2D;
    graphicsTextures: REGL.Framebuffer2D[];
    controls: Controls;
    info: SimulationInfo;
    mouseState: MouseState;
}) => {
    const { inputTexture, graphicsTextures, controls, info, mouseState } = params;

    let graphicsTexturesTick = 0;
    graphicsTexturesTick++;
    const inputStep1 = inputTexture;
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
};
