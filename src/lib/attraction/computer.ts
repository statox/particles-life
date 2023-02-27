import type { Color } from '$lib/components/SimulationV3/engine';
import type { AttractionTable } from './types';

export const getAttractionForce = (
    attractionTable: AttractionTable,
    maxAttractionRadiusSqrd: number,
    minDistanceSqrd: number,
    distSqrd: number,
    colorA: Color,
    colorB: Color
) => {
    if (distSqrd > maxAttractionRadiusSqrd) {
        return 0;
    }
    // push cells apart if they are too close
    if (distSqrd < minDistanceSqrd) {
        return -1;
    }

    const attractionValue = attractionTable[colorA][colorB] ?? 0;
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
