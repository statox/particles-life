<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { drawCells } from './drawing';
    import { getNewCells, updateCells } from './cells';
    import type { AttractionTable, Cell, Color } from './types';
    import { getCustomAttractionTable1, getRandomAttractionTable } from './attraction';
    import type { CellsMap } from './location';
    import AttractionTableComponent from './attraction/AttractionTableComponent.svelte';

    let _p5: p5;

    let cells: Cell[];
    let cellsMap: CellsMap;
    let attractionTable: AttractionTable;

    const simulationControls = {
        pause: false
    };

    const worldSize = { x: 1600, y: 960 };
    const maxAttractionRadius = 32;

    const resetCells = () => {
        const newValues = getNewCells(worldSize, 2000, maxAttractionRadius);
        cells = newValues.cells;
        cellsMap = newValues.cellsMap;
    };

    const simulationLoop = () => {
        if (simulationControls.pause === false) {
            updateCells(attractionTable, maxAttractionRadius, cells, cellsMap);
        }
        setTimeout(simulationLoop, 1);
    };

    resetCells();
    attractionTable = getRandomAttractionTable();
    attractionTable = getCustomAttractionTable1();
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

    const rainbow = () => {
        const colors: Color[] = ['white', 'red', 'green', 'blue'];
        const sectionWidth = worldSize.x / 4;
        for (const cell of cells) {
            const colorIndex = Math.floor(cell.pos.x / sectionWidth);
            const color = colors[colorIndex];
            cell.color = color;
        }
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<div>
    <div>
        <button on:click={() => (simulationControls.pause = !simulationControls.pause)}>
            {simulationControls.pause ? 'Run' : 'Pause'}
        </button>
        <button on:click={resetCells}>Reset cells</button>
        <button on:click={rainbow}>Rainbow</button>
    </div>

    <AttractionTableComponent {attractionTable} onUpdateTable={updateAttractionTable} />
</div>
