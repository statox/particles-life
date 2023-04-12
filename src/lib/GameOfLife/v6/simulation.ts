import { getInitialData } from './simulationUtils';
import * as webglUtils from './webglUtils';
import * as updateCells from './updateCells';
import * as drawCells from './drawCells';
import * as drawZoom from './drawZoom';
import type { ConfigurationName } from '../rle/configurations';

let gl: WebGLRenderingContext;
let cellsTex: WebGLTexture;

export function init(params: {
    initialDensity: number;
    worldDimensions: { width: number; height: number };
    screenDimensions: { width: number; height: number };
    drawMode: drawCells.DrawingMode;
}) {
    const { drawMode, initialDensity, screenDimensions, worldDimensions } = params;

    gl = webglUtils.getWebGLContext();

    webglUtils.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

    const initialData = getInitialData(gl, {
        configuration: 'random',
        worldDimensions,
        initialDensity
    });
    cellsTex = updateCells.initProgram(gl, {
        cellsTex: initialData.cellsTex,
        texDimensions: worldDimensions
    });

    drawCells.initProgram(gl, { screenDimensions, mode: drawMode });
    drawZoom.initProgram(gl, { screenDimensions });
}

export function iteration(params: {
    infiniteSource: boolean;
    iteration: number;
    mouseCoordinates: { x: number; y: number };
    mouseMode: updateCells.MouseMode;
    pause: boolean;
    screenDimensions: { width: number; height: number };
    worldDimensions: { width: number; height: number };
}) {
    const {
        infiniteSource,
        iteration,
        mouseCoordinates,
        mouseMode,
        pause,
        screenDimensions,
        worldDimensions
    } = params;

    cellsTex = updateCells.runProgram({
        gl,
        worldDimensions,
        screenDimensions,
        mouseCoordinates,
        mouseMode,
        infiniteSource,
        iteration,
        pause
    });

    const screenTex = drawCells.runProgram({
        gl,
        cellsTex,
        worldDimensions,
        screenDimensions,
        iteration
    });

    drawZoom.runProgram({
        gl,
        screenTex,
        worldDimensions
    });
}

export const resetTexture = (params: {
    initialDensity: number;
    worldDimensions: { width: number; height: number };
    configuration: 'random' | 'empty' | ConfigurationName;
}) => {
    const { worldDimensions, configuration, initialDensity } = params;
    const initialData = getInitialData(gl, {
        configuration,
        worldDimensions,
        initialDensity: initialDensity
    });
    cellsTex = updateCells.initProgram(gl, {
        cellsTex: initialData.cellsTex,
        texDimensions: worldDimensions
    });
};

export const changeDrawingProgram = (params: {
    drawMode: drawCells.DrawingMode;
    screenDimensions: { width: number; height: number };
}) => {
    drawCells.initProgram(gl, { screenDimensions: params.screenDimensions, mode: params.drawMode });
};
