import type p5 from 'p5';
import type { Cell, WorldSize } from '../engine';
export const drawCells = (p5: p5, cells: Cell[], worldSize: WorldSize) => {
    p5.noStroke();
    for (const cell of cells) {
        p5.fill(cell.color);
        const x = p5.map(cell.pos.x, 0, worldSize.x, 0, p5.width);
        const y = p5.map(cell.pos.y, 0, worldSize.y, 0, p5.height);
        p5.circle(x, y, 1);
    }
};
