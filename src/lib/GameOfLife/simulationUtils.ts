export type InitialCellsMode = 'random' | 'disk' | 'disk_offset' | 'mesh' | 'square' | 'idDiagonal' | 'sinusoidal' | 'circle';

export function getInitialData(params: { worldDimensions: { width: number, height: number } }) {
    const { worldDimensions } = params;
    const nbParticles = worldDimensions.width * worldDimensions.height;
    const ids = new Array(nbParticles).fill(0).map((_, i) => i);
    const cells = new Array(nbParticles).fill(0).map((_) => Math.random() < 0.5 ? 1.0 : 0.0);

    return { ids, cells };
}
