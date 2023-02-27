<script lang="ts">
    /*
     * This component is made to replace P5-svelte to improve performences
     * It uses the technic described by https://stackoverflow.com/a/13916313
     * to draw the circles only once in an offscreen buffer and then copy them
     * to the actual canvas.
     * It looks like the performences are a bit better than with p5. It probably
     * could be improved by having smaller dimensions for the canvas and then
     * scaling it with CSS but I had some blur issues when I tried doing it.
     */

    import { onMount } from 'svelte';
    import { linearMap } from '../attraction';
    import type { Cell, Color, Coordinates } from '../types';

    export let cells: Cell[];
    export let worldSize: Coordinates;
    let off: HTMLCanvasElement | undefined;
    const colors: Color[] = ['white', 'red', 'green', 'blue'];
    const colorsIndex = {
        white: 0,
        red: 1,
        green: 2,
        blue: 3
    };
    const n = colors.length;
    const r = 3;
    const d = r * 2;

    function draw() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (!canvas || !off) {
            throw new Error('Canvas is not ready');
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Ctx is not ready');
        }

        // Background
        ctx.fillStyle = '#040411';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cells?.length) {
            window.requestAnimationFrame(draw);
            return;
        }

        const size = 3;

        // Sorting the cells by colors allow to limit the times we change the fil color
        const sortedCells = [...cells].sort((a, b) => colorsIndex[a.color] - colorsIndex[b.color]);
        for (let i = 0; i < sortedCells.length; i++) {
            const cell = sortedCells[i];
            const x = Math.floor(linearMap(cell.pos.x, 0, worldSize.x, 0, canvas.width));
            const y = Math.floor(linearMap(cell.pos.y, 0, worldSize.y, 0, canvas.height));

            // Limit the number of time we change the color to improve perfs
            if (i === 0 || cell.color !== sortedCells[i - 1].color) {
                ctx.fill();
                ctx.fillStyle = cell.color;
            }
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.closePath();

            var c = colorsIndex[cell.color];

            const sx = c * d;
            const sy = 0;
            const sWidth = d;
            const sHeight = d;

            const dx = x - r;
            const dy = y - r;
            const dWidth = d;
            const dHeight = d;

            ctx.drawImage(off, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        }
        ctx.fill();

        window.requestAnimationFrame(draw);
    }

    onMount(() => {
        // Prepare canvas
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (!canvas) {
            throw new Error('Canvas is not ready');
        }
        canvas.width = 1600;
        canvas.height = 960;

        // Draw circles in offscreen buffer to speed up drawing
        // https://stackoverflow.com/a/13916313

        off = document.createElement('canvas');
        off.width = n * d;
        off.height = d;
        const offCtx = off.getContext('2d');
        if (!offCtx) {
            throw new Error('Offscreen canvas is not ready');
        }

        for (var i = 0; i < n; ++i) {
            offCtx.fillStyle = colors[i];
            offCtx.beginPath();
            offCtx.arc(i * d + r, r, r, 0, 2 * Math.PI);
            offCtx.closePath();
            offCtx.fill();
        }

        window.requestAnimationFrame(draw);
    });
</script>

<div class="container">
    <canvas id="canvas" />
</div>

<style>
    .container {
        min-width: 1000px;
        min-height: 700px;
    }
    canvas {
        width: 1000px;
        height: 700px;
        display: block;
        object-fit: contain;
    }
</style>
