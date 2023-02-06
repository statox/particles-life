import type p5 from 'p5';
import type { Cell, Color, Coordinates } from './types';

const colors: Color[] = ['white', 'red', 'green', 'blue'];

const randColor = (): Color => {
    const randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
};

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
            color: randColor()
        });
    }
    return cells;
};

const distance = (p5: p5, a: Coordinates, b: Coordinates) => {
    // Take into consideration the fact that the map is wrapping
    // https://stackoverflow.com/a/3041398
    let dx = Math.abs(b.x - a.x);
    if (dx > p5.width / 2) {
        dx = p5.width - dx;
    }
    let dy = Math.abs(b.y - a.y);
    if (dy > p5.height / 2) {
        dy = p5.height - dy;
    }
    return Math.sqrt(dx * dx + dy * dy);
};

const MIN_ATTRACTION_RADIUS = 30;
const MAX_ATTRACTION_RADIUS = 60;
const attractionTable = {
    white: {
        blue: -1,
        white: 2,
        red: 1
    },
    red: {
        white: -1,
        red: 2,
        green: 1
    },
    green: {
        red: -1,
        green: 2,
        blue: 1
    },
    blue: {
        green: -1,
        blue: 2,
        white: 1
    }
};
const getAttractionForce = (p5: p5, a: Cell, b: Cell) => {
    const dist = distance(p5, a.pos, b.pos);
    if (dist > MAX_ATTRACTION_RADIUS) {
        return 0;
    }
    if (dist < MIN_ATTRACTION_RADIUS) {
        return -1;
    }

    return attractionTable[a.color][b.color] ?? 0;
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
            const attractionForce = getAttractionForce(p5, cell, other);

            const direction = {
                x: other.pos.x - cell.pos.x,
                y: other.pos.y - cell.pos.y
            };
            const directionMag = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            if (directionMag === 0) {
                continue;
            }
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
            cell.pos.x = p5.width - 5;
        } else if (cell.pos.x > p5.width) {
            cell.pos.x = 5;
        }
        if (cell.pos.y < 0) {
            cell.pos.y = p5.height - 5;
        } else if (cell.pos.y > p5.height) {
            cell.pos.y = 5;
        }
    }
};
