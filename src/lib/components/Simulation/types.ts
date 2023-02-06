export type Coordinates = {
    x: number;
    y: number;
};

export type Color = 'white' | 'red';

export interface Cell {
    pos: Coordinates;
    vel: Coordinates;
    color: Color;
}
