export type InitialCellsMode = 'random' | 'disk' | 'square' | 'idDiagonal' | 'sinusoidal' | 'circle';

export function getInitialData(params: { texDimensions: { width: number, height: number }, screenDimensions: { width: number, height: number }, mode: InitialCellsMode }) {
    const { texDimensions, screenDimensions, mode } = params;
    const nbParticles = texDimensions.width * texDimensions.height;
    const ids = new Array(nbParticles).fill(0).map((_, i) => i);
    const colors = new Array(nbParticles).fill(0).map((_) => Math.floor(Math.random() * 4));

    const positions = ids
        .map((id) => {
            if (mode === 'random') {
                const { x, y } = randomCoord(screenDimensions);
                return [x, y, 0, 0];
            }

            if (mode === 'disk') {
                const edgeSize = 200;   // In screen pixels
                const { x, y } = randomCoordInDisk(screenDimensions, edgeSize);
                return [x, y, 0, 0];
            }

            if (mode === 'square') {
                const edgeSize = 300;   // In screen pixels
                const { x, y } = randomCoordInSquare(screenDimensions, edgeSize);
                return [x, y, 0, 0];
            }

            if (mode === 'idDiagonal') {
                const { x, y } = CoordIndiagonalOrderedByIds(screenDimensions, id, ids.length);
                return [x, y, 0, 0];
            }

            if (mode === 'sinusoidal') {
                const { x, y } = CoordInSinusoidal(screenDimensions, id, ids.length, { x: 1, y: 5 });
                return [x, y, 0, 0];
            }

            if (mode === 'circle') {
                const { x, y } = CoordInSinusoidal(screenDimensions, id, ids.length, { x: 1, y: 1 });
                return [x, y, 0, 0];
            }
        })
        .flat() as number[];

    return { ids, positions, texDimensions, colors };
}


const randomCoord = (screenDimensions: { width: number, height: number }) => {
    const x = 20 + Math.random() * (screenDimensions.width - 40);
    const y = Math.random() * (screenDimensions.height - 150);

    return { x, y };
}

const randomCoordInSquare = (screenDimensions: { width: number, height: number }, edgeSize: number) => {
    const x = (Math.random() * edgeSize - edgeSize / 2) + screenDimensions.width / 2;
    const y = (Math.random() * edgeSize - edgeSize / 2) + screenDimensions.height / 2;
    return { x, y };
}

const randomCoordInDisk = (screenDimensions: { width: number, height: number }, edgeSize: number) => {
    const r = edgeSize * Math.random();
    const theta = Math.random() * 2 * Math.PI;
    const x = r * Math.cos(theta) + screenDimensions.width / 2;
    const y = r * Math.sin(theta) + screenDimensions.height / 2
    return { x, y };
}

const CoordIndiagonalOrderedByIds = (screenDimensions: { width: number, height: number }, id: number, nbParticles: number) => {
    const x = map(id, 0, nbParticles, 0, screenDimensions.width, false)
    const y = map(id, 0, nbParticles, 0, screenDimensions.height, false)
    return { x, y };
}

const CoordInSinusoidal = (screenDimensions: { width: number, height: number }, id: number, nbParticles: number, frequencies: { x: number, y: number }) => {
    const toRad = map(id, 0, nbParticles, 0, 1, true) * 2 * Math.PI;

    const freqX = frequencies.x;
    const dx = Math.cos(freqX * toRad) * 200
    const x = dx + screenDimensions.width / 2;

    const freqY = frequencies.y;
    const dy = Math.sin(freqY * toRad) * 200;
    const y = dy + screenDimensions.height / 2;

    return { x, y };
}


const map = function(n: number, start1: number, stop1: number, start2: number, stop2: number, withinBounds: boolean) {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (!withinBounds) {
        return newval;
    }
    if (start2 < stop2) {
        return constrain(newval, start2, stop2);
    } else {
        return constrain(newval, stop2, start2);
    }
};
const constrain = function(n, low, high) {
    return Math.max(Math.min(n, high), low);
};
