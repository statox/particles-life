<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy, onMount } from 'svelte';
    import { drawCells } from '../Simulation/drawing';
    import { distance } from '../Simulation/cells';
    import type { Cell } from '../Simulation/types';

    let _p5: p5;

    let cell1: Cell;
    let cell2: Cell;
    let d = 0;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700);

            cell1 = {
                pos: {
                    x: 200,
                    y: 350
                },
                vel: {
                    x: 0,
                    y: 0
                },
                color: 'white'
            };

            cell2 = {
                pos: {
                    x: 800,
                    y: 350
                },
                vel: {
                    x: 0,
                    y: 0
                },
                color: 'blue'
            };
        };
        p5.draw = () => {
            p5.background(0);
            drawCells(p5, [cell1, cell2]);
            d = distance(p5, cell1.pos, cell2.pos);

            if (p5.mouseIsPressed) {
                if (p5.mouseButton === p5.LEFT) {
                    cell1.pos.x = p5.mouseX;
                    cell1.pos.y = p5.mouseY;
                }
                if (p5.mouseButton === p5.RIGHT) {
                    cell2.pos.x = p5.mouseX;
                    cell2.pos.y = p5.mouseY;
                }
            }
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });

    onMount(() => {
        document.addEventListener('contextmenu', (event) => event.preventDefault());
    });
</script>

<div>
    <p>
        Click left and right buttons to place the particles. This page is used to check the distance
        function works properly with wrapping map
    </p>
    <span>Distance between cells: {Math.trunc(d)}</span>
</div>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>
