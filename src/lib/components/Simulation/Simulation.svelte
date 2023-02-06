<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { drawCells } from './drawing';
    import { getNewCells, updateCells } from './service';
    import type { Cell } from './types';

    let _p5: p5;

    let cells: Cell[];
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700);

            cells = getNewCells({ x: p5.width, y: p5.height }, 1000);
        };
        p5.draw = () => {
            p5.background(0);
            updateCells(p5, cells);
            drawCells(p5, cells);
        };
    };

    const reset = () => {
        cells = getNewCells({ x: _p5.width, y: _p5.height }, 1000);
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<div>
    <button on:click={reset}>Reset cells</button>
</div>
