export type Coordinates = {
    x: number;
    y: number;
};

export type AttractionTable = {
    [selfColor in Color]: {
        [othersColor in Color]: number;
    };
};

export type Color = 'white' | 'red' | 'green' | 'blue';

export interface Cell {
    id: number;
    pos: Coordinates;
    vel: Coordinates;
    color: Color;
}
