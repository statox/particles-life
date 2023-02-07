import { describe, expect, it } from 'vitest';
import { getNewCells } from '../cells';
import type { Cell } from '../types';
import { CellsMap } from './cellsMap';

describe('CellsMap', () => {
    describe('CellsMap creation', () => {
        it('should throw for invalid screen size and attraction radius', () => {
            expect(
                () =>
                    new CellsMap({
                        screenSize: {
                            x: 21,
                            y: 10
                        },
                        maxAttractionRadius: 2
                    })
            ).toThrow();
        });

        it('should return a proper cell map', () => {
            const cellsMap = new CellsMap({
                screenSize: {
                    x: 20,
                    y: 10
                },
                maxAttractionRadius: 2
            });
            expect(cellsMap.squares).toHaveLength(5);
            expect(cellsMap.squares[0]).toHaveLength(10);
        });
    });

    describe('getSquareCoords', () => {
        it('should work', () => {
            const m = new CellsMap({
                screenSize: {
                    x: 100,
                    y: 25
                },
                maxAttractionRadius: 5
            });

            expect(m.getSquareCoords({ x: 0, y: 0 })).toStrictEqual({ x: 0, y: 0 });
            expect(m.getSquareCoords({ x: 3, y: 3 })).toStrictEqual({ x: 0, y: 0 });
            expect(m.getSquareCoords({ x: 5, y: 0 })).toStrictEqual({ x: 1, y: 0 });
            expect(m.getSquareCoords({ x: 6, y: 0 })).toStrictEqual({ x: 1, y: 0 });
            expect(m.getSquareCoords({ x: 17, y: 22 })).toStrictEqual({ x: 3, y: 4 });
        });
        it('should also work', () => {
            const screenSize = { x: 100, y: 100 };
            const m = new CellsMap({
                screenSize,
                maxAttractionRadius: 10
            });

            for (let y = 0; y < 100; y++) {
                for (let x = 0; x < 100; x++) {
                    expect(m.getSquareCoords({ x, y })).toStrictEqual({
                        x: Math.floor(x / 10),
                        y: Math.floor(y / 10)
                    });
                }
            }
        });
    });

    describe('insert', () => {
        it('should throw is the cell is already in map', () => {
            const m = new CellsMap({
                screenSize: {
                    x: 100,
                    y: 25
                },
                maxAttractionRadius: 5
            });
            const c: Cell = {
                id: 1,
                pos: { x: 1, y: 1 },
                vel: { x: 0, y: 0 },
                color: 'white'
            };

            m.insert(c);
            expect(() => m.insert(c)).toThrow();
        });

        it('should insert cell at the right position', () => {
            const m = new CellsMap({
                screenSize: {
                    x: 100,
                    y: 25
                },
                maxAttractionRadius: 5
            });
            const c: Cell = {
                id: 1,
                pos: { x: 1, y: 1 },
                vel: { x: 0, y: 0 },
                color: 'white'
            };

            m.insert(c);

            expect(m.squareByCellId.size).toBe(1);
            expect(m.squares[0][0].size).toBe(1);
        });
    });

    describe('updateCell', () => {
        it('should throw is the cell is not in map', () => {
            const m = new CellsMap({
                screenSize: {
                    x: 100,
                    y: 25
                },
                maxAttractionRadius: 5
            });
            const c: Cell = {
                id: 1,
                pos: { x: 1, y: 1 },
                vel: { x: 0, y: 0 },
                color: 'white'
            };

            expect(() => m.updateCell(c)).toThrow();
        });

        it('should update cell at the right position', () => {
            const m = new CellsMap({
                screenSize: {
                    x: 100,
                    y: 25
                },
                maxAttractionRadius: 5
            });
            const c: Cell = {
                id: 1,
                pos: { x: 1, y: 1 },
                vel: { x: 0, y: 0 },
                color: 'white'
            };

            m.insert(c);
            c.pos.x = 48;
            c.pos.y = 10;
            m.updateCell(c);

            expect(m.squareByCellId.get(c.id)).toStrictEqual({ x: 9, y: 2 });
            expect(m.squares[2][9].size).toBe(1);
            expect(m.squares[0][0].size).toBe(0);
        });
    });

    describe('getNeighborsIds', () => {
        it('should throw is the cell is not in map', () => {
            const m = new CellsMap({
                screenSize: {
                    x: 100,
                    y: 25
                },
                maxAttractionRadius: 5
            });
            const c: Cell = {
                id: 1,
                pos: { x: 1, y: 1 },
                vel: { x: 0, y: 0 },
                color: 'white'
            };

            expect(() => m.updateCell(c)).toThrow();
        });

        it('should retrieve neighbors from the right squares', () => {
            const screenSize = { x: 100, y: 100 };
            const m = new CellsMap({
                screenSize,
                maxAttractionRadius: 10
            });
            const cells = getNewCells(screenSize, 100);

            let i = 0;
            for (const cell of cells) {
                const y = Math.floor(i / 10) * 10;
                const x = (i % 10) * 10;
                cell.pos = { x, y };
                m.insert(cell);
                i++;
            }

            // Corner square
            expect(m.getNeighborsIds(cells[0])).toStrictEqual([99, 90, 91, 9, 0, 1, 19, 10, 11]);
            // top border
            expect(m.getNeighborsIds(cells[1])).toStrictEqual([90, 91, 92, 0, 1, 2, 10, 11, 12]);
            // bottom border
            expect(m.getNeighborsIds(cells[92])).toStrictEqual([81, 82, 83, 91, 92, 93, 1, 2, 3]);
            // left border
            expect(m.getNeighborsIds(cells[20])).toStrictEqual([
                19, 10, 11, 29, 20, 21, 39, 30, 31
            ]);
            // right border
            expect(m.getNeighborsIds(cells[49])).toStrictEqual([
                38, 39, 30, 48, 49, 40, 58, 59, 50
            ]);

            // middle
            expect(m.getNeighborsIds(cells[25])).toStrictEqual([
                14, 15, 16, 24, 25, 26, 34, 35, 36
            ]);
        });
    });
});
