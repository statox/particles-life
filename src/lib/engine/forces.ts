import { getAttractionForce, type AttractionTable } from '$lib/attraction';
import { getNeighborsIds, type CellsMap } from '$lib/cellsMap';
import { distanceSqaredNoWrap, distanceSqrd } from './math';
import type { Cell } from './types';

export const attractionForce = (params: {
    cell: Cell;
    attractionTable: AttractionTable;
    maxAttractionRadiusSqrd: number;
    minDistanceSqrd: number;
    halfWorldDistance: number;
    cells: Cell[];
    cellsMap: CellsMap;
}) => {
    const {
        cell,
        attractionTable,
        maxAttractionRadiusSqrd,
        halfWorldDistance,
        minDistanceSqrd,
        cells,
        cellsMap
    } = params;

    const vel = { x: 0, y: 0 };

    const neigborIds = getNeighborsIds(cellsMap, cell);

    for (const j of neigborIds) {
        const other = cells[j];
        if (cell.id === other.id) {
            continue;
        }

        const distSqrdNoWrap = distanceSqaredNoWrap(cell.pos, other.pos);

        // IMPORTANT
        // If other was in neigborIds it means that its distance on a wrap world
        // is close enough.
        // But if distanceSqaredNoWrap is big enough it means it is on the other side
        // of the (not wraped) map so we need to invert the attractionForce to Take
        // that into account
        let distSqrd = distSqrdNoWrap;
        let wrapped = false;
        if (distSqrdNoWrap > halfWorldDistance) {
            distSqrd = distanceSqrd(cellsMap.worldSize, cell.pos, other.pos);
            wrapped = true;
        }

        let attractionForce = getAttractionForce(
            attractionTable,
            maxAttractionRadiusSqrd,
            minDistanceSqrd,
            distSqrd,
            cell.color,
            other.color
        );

        if (wrapped) {
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

        vel.x += correctedDirection.x;
        vel.y += correctedDirection.y;
    }

    const velocityMag = Math.sqrt(vel.x * vel.x + vel.y * vel.y);

    if (velocityMag === 0) {
        return { x: 0, y: 0 };
    }
    vel.x *= 1 / velocityMag;
    vel.y *= 1 / velocityMag;
    return vel;
};
