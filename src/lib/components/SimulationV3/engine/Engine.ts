import type { AttractionTable } from '$lib/components/Simulation/types';
import type { Callback } from '$lib/tsUtils';
import { CellsMap } from '../cellsMap';
import { updateCells } from './cells';
import type { Cell, WorldSize } from './types';

export class Engine {
    _stepTimeout: ReturnType<typeof setTimeout> | undefined;
    _stepCb: Callback<Cell[]>;
    _running: boolean;
    _cellsMap: CellsMap;
    attractionTable: AttractionTable;
    worldSize: WorldSize;
    cells: Cell[];

    constructor(
        cells: Cell[],
        attractionTable: AttractionTable,
        worldSize: WorldSize,
        maxAttractionRadius: number
    ) {
        this._stepTimeout = undefined;
        this._stepCb = console.log; // The actual function is provided to run()
        this._running = false;
        this.cells = cells;
        this.attractionTable = attractionTable;
        this.worldSize = worldSize;

        this._cellsMap = new CellsMap({ worldSize: this.worldSize, maxAttractionRadius });

        for (const cell of this.cells) {
            this._cellsMap.insert(cell);
        }
    }

    async run(stepCallback: Callback<Cell[]>) {
        this._stepCb = stepCallback;
        const runSteps = () => {
            if (this._running) {
                this.step();
                this._stepCb(undefined, this.cells);
            }
            this._stepTimeout = setTimeout(runSteps);
        };
        this._running = true;
        runSteps();
    }

    destroy() {
        clearTimeout(this._stepTimeout);
    }

    pause() {
        if (this._running) {
            this._running = false;
        }
    }

    unpause() {
        if (!this._running) {
            this._running = true;
        }
    }

    updateAttractionTable(newAttractionTable: AttractionTable) {
        this.attractionTable = newAttractionTable;
    }

    step() {
        updateCells(
            this.attractionTable,
            this._cellsMap.maxAttractionRadius,
            this.cells,
            this._cellsMap
        );
    }
}
