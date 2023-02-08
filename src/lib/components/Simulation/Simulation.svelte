<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { drawCells } from './drawing';
    import { getNewCells, updateCells } from './cells';
    import type { AttractionTable, Cell } from './types';
    import { getRandomAttractionTable, MAX_ATTRACTION_RADIUS } from './attraction';
    import type { CellsMap } from './location';
    import AttractionTableComponent from './attraction/AttractionTableComponent.svelte';

    let _p5: p5;

    let cells: Cell[];
    let cellsMap: CellsMap;
    let attractionTable: AttractionTable;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700);

            resetCells();
            attractionTable = getRandomAttractionTable();
        };
        p5.draw = () => {
            p5.background(0);
            updateCells(p5, attractionTable, cells, cellsMap);
            drawCells(p5, cells);
        };
    };

    const resetCells = () => {
        const newValues = getNewCells(
            { x: MAX_ATTRACTION_RADIUS * 100, y: MAX_ATTRACTION_RADIUS * 60 },
            3000,
            MAX_ATTRACTION_RADIUS
        );
        cells = newValues.cells;
        cellsMap = newValues.cellsMap;
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
