import type { UpdateCellsWorkerRequest } from './types';

onmessage = (request: MessageEvent<UpdateCellsWorkerRequest>) => {
    const { minIndex, maxIndex, cells } = request.data;

    for (let i = minIndex; i < maxIndex; i++) {
        const cell = cells[i];
        cell.pos.x += Math.random() * 2 - 1;
        cell.pos.y += Math.random() * 2 - 1;
    }

    postMessage({ minIndex, maxIndex, cells });
};
