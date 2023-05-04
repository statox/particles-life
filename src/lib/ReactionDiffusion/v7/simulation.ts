import type REGL from 'regl';

import updateFS from './glsl/update.frag.glsl';
import updateVS from './glsl/update.vert.glsl';
import type { MouseState, SimulationParameters } from './types';

let command: REGL.DrawCommand;
export const initSimulationUpdate = (
    regl: REGL.Regl,
    radius: number,
    stateTextures: REGL.Framebuffer2D[]
) => {
    command = regl({
        frag: updateFS,
        vert: updateVS,

        attributes: {
            position: [-4, -4, 4, -4, 0, 4]
        },
        count: 3,

        framebuffer: (params: { tick: number }) => stateTextures[(params.tick + 1) % 2],
        uniforms: {
            prevState: (params: { tick: number }) => stateTextures[params.tick % 2],
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
    worldSize: number;
    pauseSimulation: boolean;
    mouseState: MouseState;
    simulationParameters: SimulationParameters;
}) => {
    const { pauseSimulation, mouseState, simulationParameters, worldSize } = params;
    command({
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
