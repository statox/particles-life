import type p5 from 'p5';
import type { Cell, Coordinates } from './types';

export const drawCells = (p5: p5, cells: Cell[], worldSize: Coordinates) => {
    p5.noStroke();
    // Sorting the cells by color seems to improve the FPS because changing
    // the drawing color often is costly
    for (const cell of [...cells].sort((a, b) => (a.color < b.color ? -1 : 1))) {
        // for (const cell of cells) {
        p5.fill(cell.color);
        const x = p5.map(cell.pos.x, 0, worldSize.x, 0, p5.width);
        const y = p5.map(cell.pos.y, 0, worldSize.y, 0, p5.height);
        p5.circle(x, y, 4);
    }
};
