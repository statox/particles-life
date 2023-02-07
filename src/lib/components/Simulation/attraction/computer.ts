import type p5 from 'p5';
import { distance } from '../cells';
import type { AttractionTable, Cell } from '../types';

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
const MIN_ATTRACTION_RADIUS = 30;
const MAX_ATTRACTION_RADIUS = 60;

export const getAttractionForce = (p5: p5, attractionTable: AttractionTable, a: Cell, b: Cell) => {
    const dist = distance(p5, a.pos, b.pos);
    if (dist > MAX_ATTRACTION_RADIUS) {
        return 0;
    }
    if (dist < MIN_ATTRACTION_RADIUS) {
        return -1;
    }

    return attractionTable[a.color][b.color] ?? 0;
};
