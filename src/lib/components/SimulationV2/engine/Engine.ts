import { getRandomAttractionTable, tables } from '$lib/components/Simulation/attraction';
import type { AttractionTable } from '$lib/components/Simulation/types';
import type { CallbackErrorOnly } from '$lib/tsUtils';
import { CellsMap } from '../cellsMap';
import type { Cell, Color, UpdateCellsWorkerResponse, WorldSize } from './types';

const UpdateCellsWorker = await import('./updateCells.worker?worker');

const colors: Color[] = ['white', 'red', 'green', 'blue'];

const randColor = (): Color => {
    const randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
};

export class Engine {
    _running: boolean;
    _stepInterval: NodeJS.Timer | undefined;
    _workers: Worker[];
    _nbWorkers: number;
    _cellsMap: CellsMap;
    attractionTable: AttractionTable;
    worldSize: WorldSize;
    cells: Cell[];

    constructor(nbCells: number) {
        this._running = false;
        this._stepInterval = undefined;
        this._nbWorkers = 4;
        this._workers = [];
        this.worldSize = { x: 1600, y: 960 };
        this.cells = [] as Cell[];
        this.attractionTable = getRandomAttractionTable();
        // this.attractionTable = tables.filter((t) => t.name === 'Infinite motion')[0].table;

        this._cellsMap = new CellsMap({ worldSize: this.worldSize, maxAttractionRadius: 32 });

        for (let i = 0; i < nbCells; i++) {
            const cell: Cell = {
                id: i,
                pos: {
                    x: Math.floor(Math.random() * this.worldSize.x),
                    y: Math.floor(Math.random() * this.worldSize.y)
                },
                nextPos: { x: 0, y: 0 },
                vel: { x: 0, y: 0 },
                color: randColor()
            };
            this.cells.push(cell);
            this._cellsMap.insert(cell);
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

        const runSteps = () => {
            if (!this._running) {
                return;
            }
            this.step((error?: Error) => {
                if (error) {
                    throw error;
                }

                this._stepInterval = setTimeout(runSteps, 1);
            });
        };
        runSteps();
    }

    pause() {
        this._running = false;
        clearTimeout(this._stepInterval);
    }

    step(cb: CallbackErrorOnly) {
        if (!this._workers.length) {
            return cb(new Error('_workers is undefined'));
        }
        let finished = 0;
        const onMessage = (response: MessageEvent<UpdateCellsWorkerResponse>) => {
            const { minIndex, maxIndex, cells } = response.data;
            for (let i = minIndex; i < maxIndex; i++) {
                // console.log(i);
                this.cells[i].pos = cells[i].nextPos;
                this._cellsMap.updateCell(this.cells[i]);
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
                cells: this.cells,
                cellsMap: this._cellsMap,
                worldSize: this.worldSize,
                attractionTable: this.attractionTable
            });
        }
    }
}
