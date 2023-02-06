<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { drawCells } from './drawing';
    import { getNewCells, getRandomAttractionTable, updateCells } from './service';
    import type { AttractionTable, Cell } from './types';

    let _p5: p5;

    let cells: Cell[];
    let attractionTable: AttractionTable;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700);

            cells = getNewCells({ x: p5.width, y: p5.height }, 1000);
            attractionTable = getRandomAttractionTable();
        };
        p5.draw = () => {
            p5.background(0);
            updateCells(p5, attractionTable, cells);
            drawCells(p5, cells);
        };
    };

    const resetCells = () => {
        cells = getNewCells({ x: _p5.width, y: _p5.height }, 1000);
    };
    const resetTable = () => {
        attractionTable = getRandomAttractionTable();
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
    <button on:click={resetTable}>Reset table</button>

    {#if attractionTable}
        <div class="grid5cols">
            {#each Object.keys(attractionTable) as selfColor}
                <span>{selfColor}</span>
                {#each Object.keys(attractionTable[selfColor]) as otherColor}
                    <span>{otherColor} {attractionTable[selfColor][otherColor]}</span>
                {/each}
            {/each}
        </div>
    {/if}
</div>

<style>
    .grid5cols {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-auto-flow: row;
    }
</style>
