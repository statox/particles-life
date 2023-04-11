import { getInitialData } from './simulationUtils';
import type { InitialCellsMode } from './simulationUtils';
import * as webglUtils from './webglUtils';
import * as updateCells from './updateCells';
import * as drawCells from './drawCells';

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
        mode: 'random',
        worldDimensions,
        initialDensity
    });
    cellsTex = updateCells.initProgram(gl, {
        cellsTex: initialData.cellsTex,
        texDimensions: worldDimensions
    });

    drawCells.initProgram(gl, { screenDimensions, mode: drawMode });
}

export function iteration(params: {
    infiniteSource: boolean;
    iteration: number;
    mouseCoordinates: { x: number; y: number };
    mouseMode: updateCells.MouseMode;
    pan: { x: number; y: number };
    pause: boolean;
    screenDimensions: { width: number; height: number };
    worldDimensions: { width: number; height: number };
    zoomLevel: number;
}) {
    const {
        infiniteSource,
        iteration,
        mouseCoordinates,
        mouseMode,
        pause,
        pan,
        screenDimensions,
        worldDimensions,
        zoomLevel
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

    drawCells.runProgram({
        gl,
        cellsTex,
        worldDimensions,
        zoomLevel,
        pan,
        iteration
    });
}

export const resetTexture = (params: {
    initialDensity: number;
    worldDimensions: { width: number; height: number };
    mode: InitialCellsMode;
}) => {
    const { worldDimensions, mode, initialDensity } = params;
    const initialData = getInitialData(gl, {
        mode,
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
