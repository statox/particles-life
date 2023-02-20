<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import type { Cell, WorldSize } from '../engine';
    import { drawCells } from './drawing';

    let _p5: p5;
    export let cells: Cell[];
    export let worldSize: WorldSize;

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700);
        };
        p5.draw = () => {
            p5.background(0);
            drawCells(p5, cells, worldSize);
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div>
    <P5 {sketch} />
</div>
