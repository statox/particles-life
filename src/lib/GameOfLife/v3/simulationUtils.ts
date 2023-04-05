import * as webglUtils from './webglUtils';

export type InitialCellsMode = 'zero' | 'random' | 'disk' | 'disk_offset' | 'mesh' | 'square' | 'idDiagonal' | 'sinusoidal' | 'circle';

export function getInitialData(gl: WebGLRenderingContext, params: { mode: InitialCellsMode, initialDensity: number, worldDimensions: { width: number, height: number } }) {
    const { worldDimensions, initialDensity, mode } = params;
    let density = initialDensity;
    if (density > 1) {
        density = 1;
    }
    const nbParticles = worldDimensions.width * worldDimensions.height;
    let cells = new Array(nbParticles).fill(0);

    if (mode === 'random') {
        cells = cells.map((_) => Math.random() < density ? 1.0 : 0.0);
    }

    const cellsTex = webglUtils.createTexture(
        gl,
        new Float32Array(cells.map((v, id) => [v, id, 0, 0]).flat()),
        worldDimensions.width,
        worldDimensions.height
    );

    return { cellsTex };
}
