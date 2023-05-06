import type REGL from 'regl';

import updateFS from './glsl/update.frag.glsl';
import updateVS from './glsl/update.vert.glsl';
import type { MouseState, ParametersMapParameters } from '../../types';

let command: REGL.DrawCommand;
export const initSimulationUpdate = (regl: REGL.Regl, radius: number) => {
    command = regl({
        frag: updateFS,
        vert: updateVS,

        attributes: {
            position: [
                [1, -1], // Top right
                [-1, -1], // Top left
                [1, 1], // bottom right
                [1, 1], // bottom right
                [-1, -1], // Top left
                [-1, 1] // bottom left
            ],
            // f: [maxF, maxF, minF, minF, maxF, minF],
            // k: [maxK, minK, maxK, maxK, minK, minK],
            fk: (_, params) => {
                const { maxF, minF, maxK, minK } = params.simulationParameters;
                return [
                    [maxF, maxK],
                    [maxF, minK],
                    [minF, maxK],
                    [minF, maxK],
                    [maxF, minK],
                    [minF, minK]
                ];
            }
        },
        count: 6,

        framebuffer: regl.prop('outputBuffer'),
        uniforms: {
            prevState: regl.prop('inputBuffer'),
            Da: 1,
            Db: 0.5,
            radius,
            pauseSimulation: regl.prop('pauseSimulation'),
            mousePosition: regl.prop('mousePosition'),
            penRadius: regl.prop('penRadius'),
            penDensity: regl.prop('penDensity'),
            penIsActive: regl.prop('penIsActive'),
            eraserIsActive: regl.prop('eraserIsActive'),
            zoomLevel: regl.prop('zoomLevel'),
            pan: regl.prop('pan')
        }
    });
};

export const doSimulationUpdate = (params: {
    inputBuffer: REGL.Framebuffer2D;
    mouseState: MouseState;
    outputBuffer: REGL.Framebuffer2D | null;
    pauseSimulation: boolean;
    worldSize: number;
    simulationParameters: ParametersMapParameters;
}) => {
    const {
        inputBuffer,
        outputBuffer,
        simulationParameters,
        pauseSimulation,
        mouseState,
        worldSize
    } = params;
    command({
        inputBuffer,
        outputBuffer,
        pauseSimulation,
        zoomLevel: mouseState.zoomLevel,
        pan: [mouseState.panX, mouseState.panY],
        mousePosition: [mouseState.x, mouseState.y],
        penRadius: 1 / 2 ** (worldSize - mouseState.penSize),
        penDensity: mouseState.penDensity,
        penIsActive: mouseState.pressedLeft,
        eraserIsActive: mouseState.pressedRight,
        simulationParameters
    });
};
