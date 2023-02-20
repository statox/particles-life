import { getNeighborsIds } from '../cellsMap';
import type { Cell, UpdateCellsWorkerRequest, WorldSize } from './types';

onmessage = (request: MessageEvent<UpdateCellsWorkerRequest>) => {
    const { minIndex, maxIndex, cells, cellsMap, worldSize } = request.data;

    for (let i = minIndex; i < maxIndex; i++) {
        const cell = cells[i];
        cell.vel = { x: 0, y: 0 };

        const neigborIds = getNeighborsIds(cellsMap, cell);

        for (const j of neigborIds) {
            if (i === j) {
                continue;
            }

            const other = cells[j];

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
            const invertedDirection = {
                x: 1 * normalizedDirection.x,
                y: 1 * normalizedDirection.y
            };

            cell.vel.x += invertedDirection.x;
            cell.vel.y += invertedDirection.y;
        }

        updateAndLimitCellNextnextPos(worldSize, cell);
    }

    postMessage({ minIndex, maxIndex, cells });
};

const updateAndLimitCellNextnextPos = (worldSize: WorldSize, cell: Cell) => {
    cell.nextPos.x = cell.pos.x + cell.vel.x;
    cell.nextPos.y = cell.pos.y + cell.vel.y;

    if (cell.nextPos.x <= 0) {
        cell.nextPos.x = worldSize.x + cell.nextPos.x;
    } else if (cell.nextPos.x >= worldSize.x) {
        cell.nextPos.x = cell.nextPos.x - worldSize.x;
    }
    if (cell.nextPos.y <= 0) {
        cell.nextPos.y = worldSize.y + cell.nextPos.y;
    } else if (cell.nextPos.y >= worldSize.y) {
        cell.nextPos.y = cell.nextPos.y - worldSize.y;
    }
};
