import { getAttractionForce } from '$lib/components/Simulation/attraction';
import { getNeighborsIds } from '../cellsMap';
import type { Cell, Coordinates, UpdateCellsWorkerRequest, WorldSize } from './types';

const distanceSqaredNoWrap = (a: Coordinates, b: Coordinates) => {
    const dx = Math.abs(b.x - a.x);
    const dy = Math.abs(b.y - a.y);
    return dx * dx + dy * dy;
};

onmessage = (request: MessageEvent<UpdateCellsWorkerRequest>) => {
    const { minIndex, maxIndex, cells, cellsMap, worldSize, attractionTable } = request.data;

    for (let i = minIndex; i < maxIndex; i++) {
        const cell = cells[i];
        cell.vel = { x: 0, y: 0 };

        const neigborIds = getNeighborsIds(cellsMap, cell);

        for (const j of neigborIds) {
            if (i === j) {
                continue;
            }

            const other = cells[j];
            let attractionForce = getAttractionForce(
                cellsMap.worldSize,
                attractionTable,
                cellsMap.maxAttractionRadius,
                cell,
                other
            );

            // IMPORTANT
            // If other was in neigborIds it means that its distance on a wrap world
            // is close enough.
            // But if distanceSqaredNoWrap is big enough it means it is on the other side
            // of the (not wraped) map so we need to invert the attractionForce to Take
            // that into account
            if (
                distanceSqaredNoWrap(cell.pos, other.pos) >
                (cellsMap.worldSize.y * cellsMap.worldSize.y) / 2
            ) {
                attractionForce *= -1;
            }

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
            const correctedDirection = {
                x: normalizedDirection.x * attractionForce,
                y: normalizedDirection.y * attractionForce
            };

            cell.vel.x += correctedDirection.x;
            cell.vel.y += correctedDirection.y;
        }

        const velocityMag = Math.sqrt(cell.vel.x * cell.vel.x + cell.vel.y * cell.vel.y);

        if (velocityMag === 0) {
            continue;
        }
        cell.vel.x *= 1 / velocityMag;
        cell.vel.y *= 1 / velocityMag;

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
