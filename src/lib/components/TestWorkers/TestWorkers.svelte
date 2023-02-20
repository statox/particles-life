<!-- https://medium.com/geekculture/sveltekit-web-worker-8cfc0c86abf6 -->
<script lang="ts">
    import type { CoordinatesPair, PostMessage, PostMessageDataResponse } from './types';

    import { onMount } from 'svelte';
    import { distance } from '../Simulation/cells';

    let worker: Worker | undefined = undefined;
    const workers: Worker[] = [];

    const worldSize = { x: 100, y: 100 };

    const getXRandomCoordPairs = (x: number): CoordinatesPair[] => {
        const pairs = [];
        for (let i = 0; i < x; i++) {
            const a = { x: i, y: i };
            const b = { x: i, y: i };
            pairs.push({ a, b });
        }
        return pairs;
    };

    const nbWorkers = 10;
    const loadWorker = async () => {
        const UnitWorker = await import('$lib/components/TestWorkers/my.worker?worker');
        for (let i = 0; i < nbWorkers; i++) {
            workers.push(new UnitWorker.default());
        }
        const ListWorker = await import('$lib/components/TestWorkers/mySecond.worker?worker');
        worker = new ListWorker.default();
    };

    const nbPairs = 1000;
    const testSync = () => {
        const pairs = getXRandomCoordPairs(nbPairs);

        // console.log('start computing', nbPairs, 'pairs');
        const start = Date.now();
        while (pairs.length) {
            const pair = pairs.pop();
            // console.log(pairs.length);
            distance(worldSize, pair.a, pair.b);
        }
        const end = Date.now();
        const elapsedTime = end - start;
        console.log('sync compute took', elapsedTime, 'ms');
    };

    const testWorkers = () => {
        if (!workers.length) {
            throw new Error('Workers are not initialized');
        }
        const pairs = getXRandomCoordPairs(nbPairs);
        const availableWorkers = [...workers];

        let finished = 0;
        const noMorePairs = () => {
            finished++;
            // console.log('no more pairs to treat', { finished });
            if (finished !== workers.length) {
                return;
            }
            const end = Date.now();
            const elapsedTime = end - start;
            console.log('workers compute took', elapsedTime, 'ms');
        };

        for (let i = 0; i < availableWorkers.length; i++) {
            const worker = availableWorkers[i];
            worker.onmessage = ({
                data: { msg, data }
            }: MessageEvent<PostMessage<PostMessageDataResponse>>) => {
                // console.log('Got result from worker');
                // console.log(msg);
                // console.log(data);

                if (pairs.length !== 0) {
                    const pair = pairs.pop();
                    // console.log(pairs.length);
                    // console.log(`continuing worker ${i} with`, pair);
                    worker.postMessage({ msg: 'distance', data: pair });
                } else {
                    noMorePairs();
                }
            };
        }

        const start = Date.now();
        for (let i = 0; i < availableWorkers.length; i++) {
            const worker = availableWorkers[i];
            const pair = pairs.pop();
            // console.log(`starting worker ${i} with`, pair);
            worker.postMessage({ msg: 'distance', data: pair });
        }
    };

    const testWorker = () => {
        if (!worker) {
            throw new Error('Worker is not initialized');
        }
        const pairs = getXRandomCoordPairs(nbPairs);

        worker.onmessage = ({
            data: { msg, data }
        }: MessageEvent<PostMessage<PostMessageDataResponse>>) => {
            const end = Date.now();
            const elapsedTime = end - start;
            console.log('worker compute took', elapsedTime, 'ms');
        };

        const start = Date.now();
        worker.postMessage({ msg: 'distance', data: { pairs } });
    };

    onMount(loadWorker);
</script>

<h1>Web worker demo</h1>

<button on:click={testSync}>Test sync</button>
<button on:click={testWorkers}>Test workers</button>
<button on:click={testWorker}>Test worker</button>
