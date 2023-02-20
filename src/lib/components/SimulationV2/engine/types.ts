export type Coordinates = {
    x: number;
    y: number;
};

export type WorldSize = Coordinates;

export type Color = 'white' | 'red' | 'green' | 'blue';

export interface Cell {
    id: number;
    pos: Coordinates;
    nextPos: Coordinates;
    vel: Coordinates;
    color: Color;
}

export type UpdateCellsWorkerRequest = {
    minIndex: number;
    maxIndex: number;
    cells: Cell[];
};

export type UpdateCellsWorkerResponse = {
    minIndex: number;
    maxIndex: number;
    cells: Cell[];
};
