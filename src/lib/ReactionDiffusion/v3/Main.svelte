<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { drawWorld, initWorld, updateWorld } from './world';

    const worldDimensions = { width: 200, height: 200 };

    let _p5: p5;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(500, 500);
            p5.noStroke();
            initWorld(worldDimensions);
        };

        p5.draw = () => {
            for (let _ = 0; _ < 5; _++) {
                updateWorld();
            }
            drawWorld(_p5);
        };
    };
</script>

<P5 {sketch} />
