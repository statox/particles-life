<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import type { Cell, WorldSize } from '../engine';
    import { drawCells } from './drawing';

    let _p5: p5;
    export let cells: Cell[];
    export let worldSize: WorldSize;
    let avgFPS: string;
    const fpsHistory: number[] = [];

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700);
        };
        p5.draw = () => {
            p5.background(0);
            drawCells(p5, cells, worldSize);

            avgFPS = getFPS(p5);
        };
    };

    const getFPS = (p: p5) => {
        fpsHistory.push(p.frameRate());
        if (fpsHistory.length > 60) fpsHistory.shift();
        const avgFrameRate = fpsHistory.reduce((avg, r) => avg + r / fpsHistory.length, 0);
        return avgFrameRate.toFixed(0);
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div>
    <P5 {sketch} />
    <span>FPS: {avgFPS}</span>
</div>
