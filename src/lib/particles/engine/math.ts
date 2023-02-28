import type { Coordinates } from './types';

export const distanceSqrd = (worldSize: Coordinates, a: Coordinates, b: Coordinates) => {
    // Take into consideration the fact that the map is wrapping
    // https://stackoverflow.com/a/3041398
    let dx = Math.abs(b.x - a.x);
    if (dx > worldSize.x / 2) {
        dx = worldSize.x - dx;
    }
    let dy = Math.abs(b.y - a.y);
    if (dy > worldSize.y / 2) {
        dy = worldSize.y - dy;
    }
    return dx * dx + dy * dy;
};

export const distanceSqaredNoWrap = (a: Coordinates, b: Coordinates) => {
    const dx = Math.abs(b.x - a.x);
    const dy = Math.abs(b.y - a.y);
    return dx * dx + dy * dy;
};
