import { distance } from '../cells';
import type { AttractionTable, Cell, Coordinates } from '../types';

export const getRandomAttractionTable = (): AttractionTable => {
    return {
        white: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        },
        red: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        },
        green: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        },
        blue: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        }
    };
};

export const getAttractionForce = (
    worldSize: Coordinates,
    attractionTable: AttractionTable,
    maxAttractionRadius: number,
    a: Cell,
    b: Cell
) => {
    const dist = distance(worldSize, a.pos, b.pos);
    if (dist > maxAttractionRadius) {
        return 0;
    }
    if (dist < maxAttractionRadius / 2) {
        return -1;
    }

    return attractionTable[a.color][b.color] ?? 0;
};
