<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import type { Cell } from './types';
    import { drawWorld, initWorld, updateWorld } from './world';

    const worldDimensions = { width: 200, height: 200 };

    let _p5: p5;
    const sketch: Sketch = (p5) => {
        let world: Cell[][];
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(500, 500);
            p5.noStroke();
            world = initWorld(worldDimensions);
        };

        p5.draw = () => {
            p5.background(0);
            for (let _ = 0; _ < 20; _++) {
                world = updateWorld(world);
            }
            drawWorld(_p5, world);
        };
    };
</script>

<P5 {sketch} />
