import type REGL from 'regl';

import updateFS from './glsl/update.frag.glsl';
import updateVS from './glsl/update.vert.glsl';
import type { MouseState, SimulationParameters } from '../../types';

let command: REGL.DrawCommand;
export const initSimulationUpdate = (regl: REGL.Regl, radius: number) => {
    command = regl({
        frag: updateFS,
        vert: updateVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },
        count: 3,

        framebuffer: regl.prop('outputBuffer'),
        uniforms: {
            prevState: regl.prop('inputBuffer'),
            Da: 1,
            Db: 0.5,
            f: regl.prop('f'),
            k: regl.prop('k'),
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
    simulationParameters: SimulationParameters;
    worldSize: number;
}) => {
    const {
        inputBuffer,
        outputBuffer,
        pauseSimulation,
        mouseState,
        simulationParameters,
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
        ...simulationParameters
    });
};
