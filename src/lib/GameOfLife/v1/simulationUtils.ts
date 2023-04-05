import * as webglUtils from './webglUtils';

export type InitialCellsMode = 'random' | 'disk' | 'disk_offset' | 'mesh' | 'square' | 'idDiagonal' | 'sinusoidal' | 'circle';

export function getInitialData(gl: WebGLRenderingContext, params: { worldDimensions: { width: number, height: number } }) {
    const { worldDimensions } = params;
    const nbParticles = worldDimensions.width * worldDimensions.height;
    const cells = new Array(nbParticles).fill(0).map((_) => Math.random() < 0.5 ? 1.0 : 0.0);

    const cellsTex = webglUtils.createTexture(
        gl,
        new Float32Array(cells.map((v) => [v, 0, 0, 0]).flat()),
        worldDimensions.width,
        worldDimensions.height
    );

    return { cellsTex };
}
