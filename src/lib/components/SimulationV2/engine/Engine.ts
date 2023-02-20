import type { CallbackErrorOnly } from '$lib/tsUtils';
import type { Cell, WorldSize } from './types';

export class Engine {
    _running: boolean;
    _stepInterval: NodeJS.Timer | undefined;
    _worker: Worker | undefined;
    worldSize: WorldSize;
    cells: Cell[];

    constructor(worldSize: WorldSize, nbCells: number) {
        this._running = false;
        this._stepInterval = undefined;
        this.worldSize = worldSize;
        this.cells = [] as Cell[];

        for (let i = 0; i < nbCells; i++) {
            this.cells.push({
                id: i,
                pos: { x: worldSize.x / 2, y: worldSize.y / 2 },
                nextPos: { x: 0, y: 0 },
                vel: { x: 0, y: 0 },
                color: 'white'
            });
        }
    }

    async run() {
        this._running = true;

        this._stepInterval = setInterval(() => {
            if (!this._running) {
                return;
            }

            this.step((error?: Error) => {
                if (error) {
                    throw error;
                }
            });
        }, 1000);
    }

    pause() {
        this._running = false;
        clearInterval(this._stepInterval);
    }

    step(cb: CallbackErrorOnly) {
        console.log('Doing step');
        for (const cell of this.cells) {
            cell.pos.x += Math.random() * 2 - 1;
            cell.pos.y += Math.random() * 2 - 1;
        }
        return cb();
    }
}
