import { distance } from '../cells';
import type { AttractionTable, Cell, Coordinates } from '../types';

// This was the first version which didn't do map to soften the attraction based
// on the distance.
// Keeping it to debug in case of issues
export const getConstantAttractionForce = (
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
        return linearMap(dist, 0, maxAttractionRadius / 2, -1, 0);
    }

    const attractionValue = attractionTable[a.color][b.color] ?? 0;
    if (attractionValue === 0) {
        return 0;
    }
    return triangleMap(dist, maxAttractionRadius / 2, maxAttractionRadius, 0, attractionValue);
};

const triangleMap = function (
    n: number,
    start1: number,
    stop1: number,
    start2: number,
    stop2: number
) {
    const middle = start1 + (stop1 - start1) / 2;
    if (n < middle) {
        return linearMap(n, start1, middle, start2, stop2);
    }
    return linearMap(n, middle, stop1, stop2, start2);
};

const linearMap = function (
    n: number,
    start1: number,
    stop1: number,
    start2: number,
    stop2: number
) {
    const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    if (start2 < stop2) {
        return constrain(newval, start2, stop2);
    } else {
        return constrain(newval, stop2, start2);
    }
};

const constrain = function (n: number, low: number, high: number) {
    return Math.max(Math.min(n, high), low);
};
