import type { AttractionTable } from '$lib/components/Simulation/types';
import { getNeighborsIds, type CellsMap } from '../cellsMap';
import { getAttractionForce } from './attraction';
import type { Cell, Color, Coordinates } from './types';

const colors: Color[] = ['white', 'red', 'green', 'blue'];

const randColor = (): Color => {
    const randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
};

export const getNewCells = (worldSize: Coordinates, nbParticles: number): Cell[] => {
    const cells = [] as Cell[];
    for (let i = 0; i < nbParticles; i++) {
        const cell = {
            id: i,
            pos: {
                x: Math.random() * worldSize.x,
                y: Math.random() * worldSize.y
            },
            nextPos: { x: 0, y: 0 },
            vel: { x: 0, y: 0 },
            color: randColor()
        };
        cells.push(cell);
    }
    return cells;
};

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

const distanceSqaredNoWrap = (a: Coordinates, b: Coordinates) => {
    const dx = Math.abs(b.x - a.x);
    const dy = Math.abs(b.y - a.y);
    return dx * dx + dy * dy;
};

export const updateCells = (
    attractionTable: AttractionTable,
    maxAttractionRadius: number,
    cells: Cell[],
    cellsMap: CellsMap
) => {
    const smallestDimension =
        cellsMap.worldSize.x < cellsMap.worldSize.y ? cellsMap.worldSize.x : cellsMap.worldSize.y;
    const halfWorldDistance = (smallestDimension * smallestDimension) / 2;
    const maxAttractionRadiusSqrd = maxAttractionRadius * maxAttractionRadius;
    const cellRadius = 3;
    const minDistanceSqrd = (2 * cellRadius) ** 2;

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.vel = { x: 0, y: 0 };

        const neigborIds = getNeighborsIds(cellsMap, cell);
        for (const j of neigborIds) {
            if (i === j) {
                continue;
            }
            const other = cells[j];

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

            cell.vel.x += correctedDirection.x;
            cell.vel.y += correctedDirection.y;
        }

        const velocityMag = Math.sqrt(cell.vel.x * cell.vel.x + cell.vel.y * cell.vel.y);

        if (velocityMag === 0) {
            continue;
        }
        cell.vel.x *= 1 / velocityMag;
        cell.vel.y *= 1 / velocityMag;

        // The update of the cell position could be done in a separate loop.
        // That would match what I am used too in the particles simulations I have done before.
        // However here updating the cells position as we compute the attraction of the other ones
        // seems to create more moving patterns
        updateCellPos(cellsMap.worldSize, cell);
        cellsMap.updateCell(cell);
    }

    // That works well (can be tested with a zeroed attraction table)
    // but for now it is too slow to run smoothly
    // for (let i = 0; i < 3; i++) {
    //     pullCellsAppart(minDistanceSqrd, halfWorldDistance, cells, cellsMap);
    // }
};

export const pullCellsAppart = (
    minDistanceSqrd: number,
    halfWorldDistance: number,
    cells: Cell[],
    cellsMap: CellsMap
) => {
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.vel = { x: 0, y: 0 };

        const neigborIds = getNeighborsIds(cellsMap, cell);
        for (const j of neigborIds) {
            if (i === j) {
                continue;
            }
            const other = cells[j];

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

            if (distSqrd > minDistanceSqrd) {
                continue;
            }

            const direction = {
                x: (other.pos.x - cell.pos.x) * (wrapped ? 1 : -1),
                y: (other.pos.y - cell.pos.y) * (wrapped ? 1 : -1)
            };
            const directionMag = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            if (directionMag === 0) {
                continue;
            }
            const normalizedDirection = {
                x: direction.x * (1 / directionMag) * Math.sqrt(minDistanceSqrd),
                y: direction.y * (1 / directionMag) * Math.sqrt(minDistanceSqrd)
            };

            cell.vel.x += normalizedDirection.x;
            cell.vel.y += normalizedDirection.y;
        }

        const velocityMag = Math.sqrt(cell.vel.x * cell.vel.x + cell.vel.y * cell.vel.y);

        if (velocityMag === 0) {
            continue;
        }
        cell.vel.x *= 1 / velocityMag;
        cell.vel.y *= 1 / velocityMag;

        // The update of the cell position could be done in a separate loop.
        // That would match what I am used too in the particles simulations I have done before.
        // However here updating the cells position as we compute the attraction of the other ones
        // seems to create more moving patterns
        updateCellPos(cellsMap.worldSize, cell);
        cellsMap.updateCell(cell);
    }
};

const updateCellPos = (worldSize: Coordinates, cell: Cell) => {
    cell.pos.x += cell.vel.x;
    cell.pos.y += cell.vel.y;

    if (cell.pos.x <= 0) {
        cell.pos.x = worldSize.x + cell.pos.x;
    } else if (cell.pos.x >= worldSize.x) {
        cell.pos.x = cell.pos.x - worldSize.x;
    }
    if (cell.pos.y <= 0) {
        cell.pos.y = worldSize.y + cell.pos.y;
    } else if (cell.pos.y >= worldSize.y) {
        cell.pos.y = cell.pos.y - worldSize.y;
    }
};