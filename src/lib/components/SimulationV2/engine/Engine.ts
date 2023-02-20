import type { CallbackErrorOnly } from '$lib/tsUtils';
import type { Cell, UpdateCellsWorkerResponse, WorldSize } from './types';

const UpdateCellsWorker = await import('./updateCells.worker?worker');

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
        if (!UpdateCellsWorker) {
            throw new Error('UpdateCellsWorker is undefined');
        }
        if (!this._worker) {
            this._worker = new UpdateCellsWorker.default();
        }
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
        }, 1);
    }

    pause() {
        this._running = false;
        clearInterval(this._stepInterval);
    }

    step(cb: CallbackErrorOnly) {
        if (!this._worker) {
            return cb(new Error('_worker is undefined'));
        }
        this._worker.onmessage = (response: MessageEvent<UpdateCellsWorkerResponse>) => {
            const { minIndex, maxIndex, cells } = response.data;
            for (let i = minIndex; i < maxIndex; i++) {
                this.cells[i].pos = cells[i].pos;
            }
            return cb();
        };
        this._worker.postMessage({ minIndex: 0, maxIndex: this.cells.length, cells: this.cells });
    }
}
