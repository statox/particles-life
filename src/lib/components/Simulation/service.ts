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

const distance = (a: Coordinates, b: Coordinates) => {
    return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
};

const MIN_ATTRACTION_RADIUS = 30;
const MAX_ATTRACTION_RADIUS = 60;
const getAttractionForce = (a: Cell, b: Cell) => {
    const dist = distance(a.pos, b.pos);
    if (dist > MAX_ATTRACTION_RADIUS) {
        return 0;
    }
    if (dist < MIN_ATTRACTION_RADIUS) {
        return -1;
    }

    if (a.color === b.color) {
        return 1;
    }
    return -1;
};

export const updateCells = (p5: p5, cells: Cell[]) => {
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.vel = { x: 0, y: 0 };

        for (let j = 0; j < cells.length; j++) {
            if (i === j) {
                continue;
            }

            const other = cells[j];
            const attractionForce = getAttractionForce(cell, other);

            const direction = {
                x: other.pos.x - cell.pos.x,
                y: other.pos.y - cell.pos.y
            };
            const directionMag = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            const normalizedDirection = {
                x: direction.x * (1 / directionMag),
                y: direction.y * (1 / directionMag)
            };
            const correctedDirection = {
                x: normalizedDirection.x * attractionForce,
                y: normalizedDirection.y * attractionForce
            };

            cell.vel.x += correctedDirection.x;
            cell.vel.y += correctedDirection.y;
        }

        const velocityMag = Math.sqrt(cell.vel.x * cell.vel.x + cell.vel.y * cell.vel.y);

        if (velocityMag === 0) {
            continue;
        }
        cell.vel.x *= 1 / velocityMag;
        cell.vel.y *= 1 / velocityMag;

        cell.pos.x += cell.vel.x;
        cell.pos.y += cell.vel.y;

        if (cell.pos.x < 0) {
            cell.pos.x = p5.width;
        } else if (cell.pos.x > p5.width) {
            cell.pos.x = 0;
        }
        if (cell.pos.y < 0) {
            cell.pos.y = p5.height;
        } else if (cell.pos.y > p5.height) {
            cell.pos.y = 0;
        }
    }
};
