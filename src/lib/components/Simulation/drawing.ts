import type p5 from 'p5';
import type { Cell } from './types';

export const drawCells = (p5: p5, cells: Cell[]) => {
    p5.noStroke();
    for (const cell of cells) {
        p5.fill(cell.color);
        p5.circle(cell.pos.x, cell.pos.y, 8);
    }
};
