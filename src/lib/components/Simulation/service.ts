import type { Cell, Coordinates } from './types';

export const getNewCells = (screenSize: Coordinates, nbParticles: number): Cell[] => {
    const cells = [] as Cell[];
    for (let _ = 0; _ < nbParticles; _++) {
        cells.push({
            pos: {
                x: Math.random() * screenSize.x,
                y: Math.random() * screenSize.y
            },
            vel: {
                x: 0,
                y: 0
            },
            color: Math.random() < 0.5 ? 'white' : 'red'
        });
    }
    return cells;
};
