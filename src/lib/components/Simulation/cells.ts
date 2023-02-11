import { getAttractionForce } from './attraction';
import { CellsMap } from './location';
import type { AttractionTable, Cell, Color, Coordinates } from './types';

const colors: Color[] = ['white', 'red', 'green', 'blue'];

const randColor = (): Color => {
    const randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
};

export const getNewCells = (
    worldSize: Coordinates,
    nbParticles: number,
    maxAttractionRadius: number
): { cells: Cell[]; cellsMap: CellsMap } => {
    const cells = [] as Cell[];
    const cellsMap = new CellsMap({ worldSize, maxAttractionRadius });
    for (let i = 0; i < nbParticles; i++) {
        const cell = {
            id: i,
            pos: {
                x: Math.random() * worldSize.x,
                y: Math.random() * worldSize.y
            },
            vel: {
                x: 0,
                y: 0
            },
            color: randColor()
        };
        cells.push(cell);
        cellsMap.insert(cell);
    }
    return { cells, cellsMap };
};

export const distance = (worldSize: Coordinates, a: Coordinates, b: Coordinates) => {
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
    return Math.sqrt(dx * dx + dy * dy);
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
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.vel = { x: 0, y: 0 };

        const neigborIds = cellsMap.getNeighborsIds(cell);
        for (const j of neigborIds) {
            if (i === j) {
                continue;
            }

            const other = cells[j];
            let attractionForce = getAttractionForce(
                cellsMap.worldSize,
                attractionTable,
                maxAttractionRadius,
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
