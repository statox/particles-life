import type { AttractionTable } from '$lib/components/Simulation/types';
import { distanceSqrd } from '../cells';
import type { Cell, Coordinates } from '../types';

export const getAttractionForce = (
    worldSize: Coordinates,
    attractionTable: AttractionTable,
    maxAttractionRadiusSqrd: number,
    a: Cell,
    b: Cell
) => {
    const distSqrd = distanceSqrd(worldSize, a.pos, b.pos);
    if (distSqrd > maxAttractionRadiusSqrd) {
        return 0;
    }
    // push cells apart if they are too close
    const cellRadius = 3;
    const minDistanceSqrd = (2 * cellRadius) ** 2;
    if (distSqrd < minDistanceSqrd) {
        return -1;
    }

    const attractionValue = attractionTable[a.color][b.color] ?? 0;
    if (attractionValue === 0) {
        return 0;
    }
    return triangleMap(
        distSqrd,
        maxAttractionRadiusSqrd / 2,
        maxAttractionRadiusSqrd,
        0,
        attractionValue
    );
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

export const linearMap = function (
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
