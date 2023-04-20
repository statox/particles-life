import type p5 from 'p5';
import type { Cell, Dimensions } from './types';

export const initWorld = (worldDimensions: Dimensions) => {
    const world: Cell[][] = [];
    for (let y = 0; y < worldDimensions.height; y++) {
        world.push([]);
        for (let x = 0; x < worldDimensions.width; x++) {
            world[world.length - 1].push({
                A: Math.random(),
                B: Math.random()
            });
        }
    }
    return world;
};

export const drawWorld = (p5: p5, world: Cell[][]) => {
    const cellDimensions = {
        width: p5.width / world[0].length,
        height: p5.height / world.length
    };

    for (let y = 0; y < world.length; y++) {
        for (let x = 0; x < world[0].length; x++) {
            const { A, B } = world[y][x];

            p5.fill(p5.map(A, 0, 1, 0, 255), p5.map(B, 0, 1, 0, 255), 0);
            p5.rect(
                x * cellDimensions.width,
                y * cellDimensions.height,
                cellDimensions.width,
                cellDimensions.height
            );
        }
    }
};
