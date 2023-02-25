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
    import type { Cell, Color, Coordinates } from '../engine';
    import { linearMap } from '../engine/attraction';

    export let cellSize: number;
    export let cells: Cell[];
    export let worldSize: Coordinates;
    export let drewFrame: () => void;
    let off: HTMLElement | undefined;
    const colors: Color[] = ['white', 'red', 'green', 'blue'];
    const colorsIndex = {
        white: 0,
        red: 1,
        green: 2,
        blue: 3
    };
    const realColors = {
        white: '#ffedff',
        red: '#fc2a51',
        green: '#8ff97c',
        blue: '#77cfff',
        background: '#383b3d'
    };
    const n = colors.length;
    const r = cellSize;
    const d = r * 2;

    function draw() {
        const canvas = document.getElementById('canvas');
        if (!canvas || !off) {
            throw new Error('Canvas is not ready');
        }
        const ctx = canvas.getContext('2d');

        // Background
        ctx.fillStyle = realColors.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!cells?.length) {
            window.requestAnimationFrame(draw);
            return;
        }

        // Sorting the cells by colors allow to limit the times we change the fil color
        // const sortedCells = [...cells].sort((a, b) => colorsIndex[a.color] - colorsIndex[b.color]);
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            const x = Math.floor(linearMap(cell.pos.x, 0, worldSize.x, 0, canvas.width));
            const y = Math.floor(linearMap(cell.pos.y, 0, worldSize.y, 0, canvas.height));

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
        drewFrame();

        window.requestAnimationFrame(draw);
    }

    onMount(() => {
        // Prepare canvas
        const canvas = document.getElementById('canvas');
        if (!canvas) {
            throw new Error('Canvas is not ready');
        }
        const ctx = canvas.getContext('2d');
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
            const color = colors[i];
            const realColor = realColors[color];
            offCtx.fillStyle = realColor;
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
