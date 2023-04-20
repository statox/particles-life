import type p5 from 'p5';
import type { Cell, Coordinates, Dimensions } from './types';

export const initWorld = (worldDimensions: Dimensions) => {
    const world: Cell[][] = [];
    for (let y = 0; y < worldDimensions.height; y++) {
        world.push([]);
        for (let x = 0; x < worldDimensions.width; x++) {
            world[world.length - 1].push({
                A: 1,
                B: 0
            });
        }
    }

    // Small seeded area
    const offsetX = 5;
    const offsetY = 5;
    const middleX = Math.floor(worldDimensions.width / 2);
    const middleY = Math.floor(worldDimensions.height / 2);
    for (let y = middleY - offsetY; y < middleY + offsetY; y++) {
        for (let x = middleX - offsetX; x < middleX + offsetX; x++) {
            world[y][x].B = 1;
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

            p5.fill(A * 255, B * 255, 0);
            p5.rect(
                x * cellDimensions.width,
                y * cellDimensions.height,
                cellDimensions.width,
                cellDimensions.height
            );
        }
    }
};

const Da = 1.0;
const Db = 0.5;
const f = 0.055;
const k = 0.062;
export const updateWorld = (world: Cell[][]): Cell[][] => {
    const newWorld: Cell[][] = [];

    for (let y = 0; y < world.length; y++) {
        newWorld.push([]);
        for (let x = 0; x < world[0].length; x++) {
            const { A, B } = world[y][x];

            const La = laplacianDiff(world, { x, y }, 'A');
            const Lb = laplacianDiff(world, { x, y }, 'B');

            const newA = A + (Da * La - A * B * B + f * (1 - A));
            const newB = B + (Db * Lb + A * B * B - (k + f) * B);

            newWorld[y].push({
                A: newA,
                B: newB
            });
        }
    }

    return newWorld;
};

type NeighborWithWeight = { coord: Coordinates; weight: number };

const laplacianDiff = (world: Cell[][], coord: Coordinates, component: 'A' | 'B') => {
    const neighborsWithWeight = getNeighborsCoordsWithWeight(world, coord);
    let r = 0;

    for (const neighbor of neighborsWithWeight) {
        const { coord, weight } = neighbor;
        r += world[coord.y][coord.x][component] * weight;
    }

    return r;
};

const getNeighborsCoordsWithWeight = (
    world: Cell[][],
    coord: Coordinates
): NeighborWithWeight[] => {
    const { x, y } = coord;
    const width = world[0].length;
    const height = world.length;

    const topLeft = {
        coord: {
            x: x > 0 ? x - 1 : width - 1,
            y: y > 0 ? y - 1 : height - 1
        },
        weight: 0.05
    };
    const top = {
        coord: {
            x,
            y: y > 0 ? y - 1 : height - 1
        },
        weight: 0.2
    };
    const topRight = {
        coord: {
            x: x < width - 1 ? x + 1 : 0,
            y: y > 0 ? y - 1 : height - 1
        },
        weight: 0.05
    };

    const left = {
        coord: {
            x: x > 0 ? x - 1 : width - 1,
            y
        },
        weight: 0.2
    };
    const middle = {
        coord: {
            x,
            y
        },
        weight: -1
    };
    const right = {
        coord: {
            x: x < width - 1 ? x + 1 : 0,
            y
        },
        weight: 0.2
    };

    const bottomLeft = {
        coord: {
            x: x > 0 ? x - 1 : width - 1,
            y: y < height - 1 ? y + 1 : 0
        },
        weight: 0.05
    };
    const bottom = {
        coord: {
            x,
            y: y < height - 1 ? y + 1 : 0
        },
        weight: 0.2
    };
    const bottomRight = {
        coord: {
            x: x < width - 1 ? x + 1 : 0,
            y: y < height - 1 ? y + 1 : 0
        },
        weight: 0.05
    };

    return [topLeft, top, topRight, left, middle, right, bottomLeft, bottom, bottomRight];
};
