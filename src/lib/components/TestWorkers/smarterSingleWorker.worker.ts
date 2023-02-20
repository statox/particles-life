import { distance } from '../Simulation/cells';
import type { Coordinates } from '../Simulation/types';

export type SmarterWorkerRequest = {
    minIndex: number;
    maxIndex: number;
    coords: Coordinates[];
};
onmessage = (request: MessageEvent<SmarterWorkerRequest>) => {
    const { minIndex, maxIndex, coords } = request.data;
    console.log('In worker evaluating', maxIndex - minIndex, 'of', coords.length, 'Coordinates');

    for (let i = minIndex; i < maxIndex; i++) {
        const coordToEvaluate = coords[i];
        // console.log('Sync evaluating', coordToEvaluate);
        const neighbors = [];
        for (let j = 0; j < coords.length; j++) {
            if (i === j) {
                continue;
            }
            const other = coords[j];
            const d = distance({ x: 100, y: 100 }, coordToEvaluate, other);
            if (d < 30) {
                neighbors.push(other);
            }
        }
    }

    postMessage({
        msg: 'distance',
        data: { result: 1 }
    });
};

export {};
