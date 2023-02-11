<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { drawCells } from './drawing';
    import { getNewCells, updateCells } from './cells';
    import type { AttractionTable, Cell } from './types';
    import { getRandomAttractionTable } from './attraction';
    import type { CellsMap } from './location';
    import AttractionTableComponent from './attraction/AttractionTableComponent.svelte';

    let _p5: p5;

    let cells: Cell[];
    let cellsMap: CellsMap;
    let attractionTable: AttractionTable;

    const worldSize = { x: 1600, y: 960 };
    const maxAttractionRadius = 32;

    const resetCells = () => {
        const newValues = getNewCells(worldSize, 2000, maxAttractionRadius);
        cells = newValues.cells;
        cellsMap = newValues.cellsMap;
    };

    const simulationLoop = () => {
        updateCells(attractionTable, maxAttractionRadius, cells, cellsMap);
        setTimeout(simulationLoop, 1);
    };

    resetCells();
    attractionTable = getRandomAttractionTable();
    simulationLoop();

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700);
        };
        p5.draw = () => {
            p5.background(0);
            drawCells(p5, cells, cellsMap.worldSize);
        };
    };

    const updateAttractionTable = (newAttractionTable: AttractionTable) => {
        attractionTable = newAttractionTable;
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<div>
    <button on:click={resetCells}>Reset cells</button>

    <AttractionTableComponent {attractionTable} onUpdateTable={updateAttractionTable} />
</div>
