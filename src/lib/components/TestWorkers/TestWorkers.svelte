<!-- https://medium.com/geekculture/sveltekit-web-worker-8cfc0c86abf6 -->
<script lang="ts">
    import type { PostMessage, PostMessageDataResponse } from './types';

    import { onMount } from 'svelte';
    import { distance } from '../Simulation/cells';
    import type { Coordinates } from '../Simulation/types';

    let worker: Worker | undefined = undefined;
    const workers: Worker[] = [];

    const worldSize = { x: 100, y: 100 };

    const getXCoords = (x: number): Coordinates[] => {
        const pairs = [];
        for (let i = 0; i < x; i++) {
            pairs.push({ x: i, y: i });
        }
        return pairs;
    };

    const nbWorkers = 5;
    const loadWorker = async () => {
        const DistanceSingleWorker = await import(
            '$lib/components/TestWorkers/smarterSingleWorker.worker?worker'
        );
        worker = new DistanceSingleWorker.default();

        for (let i = 0; i < nbWorkers; i++) {
            workers.push(new DistanceSingleWorker.default());
        }
    };

    const nbPairs = 50000;
    const testSync = () => {
        const coords = getXCoords(nbPairs);

        console.log('start sync computing', nbPairs, 'pairs');
        const start = Date.now();
        for (const coordToEvaluate of coords) {
            const neighbors = [];
            for (const other of coords) {
                const d = distance(worldSize, coordToEvaluate, other);
                if (d < 30) {
                    neighbors.push(other);
                }
            }
        }
        const end = Date.now();
        const elapsedTime = end - start;
        console.log('sync compute took', elapsedTime, 'ms');
    };

    const testWorkers = () => {
        if (workers.some((worker) => !worker)) {
            throw new Error('Workers are not initialized');
        }
        const coords = getXCoords(nbPairs);

        let finished = 0;

        const onMessage = ({
            data: { msg, data }
        }: MessageEvent<PostMessage<PostMessageDataResponse>>) => {
            finished++;
            // console.log('no more pairs to treat', { finished });
            if (finished !== workers.length) {
                return;
            }
            const end = Date.now();
            const elapsedTime = end - start;
            console.log('workers compute took', elapsedTime, 'ms');
        };

        workers.forEach((worker) => (worker.onmessage = onMessage));
        const batchSize = Math.floor(nbPairs / workers.length);

        const start = Date.now();
        for (let i = 0; i < nbWorkers; i++) {
            const w = workers[i];
            const minIndex = i * batchSize;
            const maxIndex = i === nbWorkers - 1 ? coords.length : (i + 1) * batchSize;
            w.postMessage({ minIndex, maxIndex, coords });
            console.log({ minIndex, maxIndex });
        }
    };

    const testWorker = () => {
        if (!worker) {
            throw new Error('Worker is not initialized');
        }
        const coords = getXCoords(nbPairs);

        worker.onmessage = ({
            data: { msg, data }
        }: MessageEvent<PostMessage<PostMessageDataResponse>>) => {
            const end = Date.now();
            const elapsedTime = end - start;
            console.log('worker compute took', elapsedTime, 'ms');
        };

        const start = Date.now();
        worker.postMessage({ minIndex: 0, maxIndex: coords.length, coords });
    };

    onMount(loadWorker);
</script>

<h1>Web worker test</h1>

<p>
    This page is used to test web workers implementation. The buttons launch the same computations
    with different way to do them.
</p>
<p>
    <b>The computation:</b> To test our mecanism we generate a bunch of coordinates. The goal is to compute
    the distance from each coordinates to each others. We choose this computation because it is somewhat
    expensive and is good enough to do a proof of concept.
</p>

<p><b>Test sync</b> runs the computation directly in a sync function in the component</p>
<p>
    <b>Test worker</b> does the same thing but in a web worker. The computation time is similar to the
    sync test case with some overhead probably due to the worker creation.
</p>
<p>
    <b>Test workers</b> splits the array of coordinates into several chuncks, each chunk is processed
    by a different worker which are executing in parallel. This leads to shorter execution times which
    makes this POC a success.
</p>

<p><b>For now the workers only work with Chrome-based browser.</b> I need to figure out why.</p>

<button on:click={testSync}>Test sync</button>
<button on:click={testWorker}>Test worker</button>
<button on:click={testWorkers}>Test workers</button>
