import type { AttractionTable } from '$lib/components/Simulation/types';

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

export type StartEngineRequest = {
    msg: 'start';
    cells: Cell[];
    attractionTable: AttractionTable;
    worldSize: WorldSize;
    maxAttractionRadius: number;
};

export type PauseEngineRequest = {
    msg: 'pause';
};

export type UnpauseEngineRequest = {
    msg: 'unpause';
};

export type UpdateTableEngineRequest = {
    msg: 'updateTable';
    attractionTable: AttractionTable;
};

export type EngineRequest =
    | StartEngineRequest
    | PauseEngineRequest
    | UnpauseEngineRequest
    | UpdateTableEngineRequest;

export type UpdateCellsResponse = {
    positions: Coordinates[];
};
