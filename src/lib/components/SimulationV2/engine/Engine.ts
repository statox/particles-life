import type { CallbackErrorOnly } from '$lib/tsUtils';
import type { Cell, UpdateCellsWorkerResponse, WorldSize } from './types';

const UpdateCellsWorker = await import('./updateCells.worker?worker');

export class Engine {
    _running: boolean;
    _stepInterval: NodeJS.Timer | undefined;
    _workers: Worker[];
    _nbWorkers: number;
    worldSize: WorldSize;
    cells: Cell[];

    constructor(worldSize: WorldSize, nbCells: number) {
        this._running = false;
        this._stepInterval = undefined;
        this._nbWorkers = 1;
        this._workers = [];
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
        if (!this._workers.length) {
            this._workers = [];
            for (let i = 0; i < this._nbWorkers; i++) {
                this._workers.push(new UpdateCellsWorker.default());
            }
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
        if (!this._workers.length) {
            return cb(new Error('_workers is undefined'));
        }
        let finished = 0;
        const onMessage = (response: MessageEvent<UpdateCellsWorkerResponse>) => {
            const { minIndex, maxIndex, cells } = response.data;
            for (let i = minIndex; i < maxIndex; i++) {
                this.cells[i].pos = cells[i].pos;
            }
            finished++;
            if (finished === this._workers.length) {
                return cb();
            }
        };

        const batchSize = Math.floor(this.cells.length / this._workers.length);

        for (let i = 0; i < this._workers.length; i++) {
            const worker = this._workers[i];
            worker.onmessage = onMessage;

            const minIndex = i * batchSize;
            const maxIndex =
                i === this._workers.length - 1 ? this.cells.length - 1 : (i + 1) * batchSize - 1;

            // console.log('starting worker', minIndex, maxIndex, this.cells.length);

            worker.postMessage({
                minIndex,
                maxIndex,
                cells: this.cells
            });
        }
    }
}
