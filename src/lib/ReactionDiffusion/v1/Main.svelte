<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import type { Cell } from './types';
    import { drawWorld, initWorld } from './world';

    const worldDimensions = { width: 30, height: 30 };

    let _p5: p5;
    const sketch: Sketch = (p5) => {
        let world: Cell[][];
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(700, 700);
            world = initWorld(worldDimensions);
        };

        p5.draw = () => {
            p5.background(0);
            drawWorld(_p5, world);
        };
    };
</script>

<P5 {sketch} />
