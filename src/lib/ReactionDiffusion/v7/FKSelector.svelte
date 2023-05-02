<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';

    import { PARAMETERS_CLASSES } from './pearsonClasses';

    export let f: number;
    export let k: number;
    export let onUpdateParams: (params: { f: number; k: number }) => void;

    const rangeF = [0.01, 0.09];
    const rangeK = [0.01, 0.08];

    const fkToCoords = (params: { f: number; k: number }) => {
        const { f, k } = params;
        const x = _p5.map(k, rangeK[0], rangeK[1], 0, _p5.width);
        const y = _p5.map(f, rangeF[0], rangeF[1], 0, _p5.height);

        return { x, y };
    };
    const coordsToFk = (params: { x: number; y: number }) => {
        const { x, y } = params;

        const f = _p5.map(y, 0, _p5.height, rangeF[0], rangeF[1]);
        const k = _p5.map(x, 0, _p5.width, rangeK[0], rangeK[1]);

        return { f, k };
    };

    let _p5: p5;
    const sketch: Sketch = (p5) => {
        let background: p5.Image;
        p5.preload = () => {
            // Images from https://www.mrob.com
            // background = p5.loadImage('/pearsons-parameter-map.jpg');
            background = p5.loadImage('/pearson-space.png');
        };

        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(500, 500);
        };

        p5.draw = () => {
            p5.image(background, 0, 0, p5.width, p5.height);
            p5.fill('red');
            for (const paramClass of PARAMETERS_CLASSES) {
                const { x, y } = fkToCoords({ f: paramClass.f, k: paramClass.k });
                p5.circle(x, y, 10);
                p5.text(paramClass.name, x - p5.textWidth(paramClass.name) / 2, y - 10);
            }

            p5.fill('blue');
            const { x, y } = fkToCoords({ f, k });
            p5.line(0, y, p5.width, y);
            p5.line(x, 0, x, p5.height);
            p5.circle(x, y, 10);
        };

        p5.mousePressed = () => {
            const x = p5.mouseX;
            const y = p5.mouseY;
            if (x < 0 || y < 0 || x > p5.width || y > p5.height) {
                return;
            }
            const { f, k } = coordsToFk({ x: p5.mouseX, y: p5.mouseY });
            onUpdateParams({ f, k });
        };
    };

    onDestroy(() => _p5.remove());
</script>

<P5 {sketch} />
