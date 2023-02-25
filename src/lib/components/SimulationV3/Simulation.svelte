<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    import AttractionTableChoice from '../Simulation/attraction/AttractionTableChoice.svelte';
    import AttractionTableComponent from '../Simulation/attraction/AttractionTableComponent.svelte';
    import type { AttractionTable } from '../Simulation/types';
    import type { Cell, Coordinates, UpdateCellsResponse } from './engine';
    import { getRandomAttractionTable } from './engine/attraction';
    import { getNewCells } from './engine/cells';

    import Canvas from './graphics/Canvas.svelte';

    let worker: Worker;
    let cells: Cell[];
    let history: Coordinates[][];
    let attractionTable: AttractionTable;
    const worldSize = { x: 1600, y: 960 };

    const loadWorker = async () => {
        const SimulationWorker = await import(
            '$lib/components/SimulationV3/engine/simulation.worker?worker'
        );
        worker = new SimulationWorker.default();
    };

    const updateAttractionTable = (newAttractionTable: AttractionTable) => {
        attractionTable = newAttractionTable;
        console.error('Not implemented');
    };

    const start = () => {
        if (!worker) {
            throw new Error('Worker is not initialized');
        }
        const onCellsUpdate = (response: MessageEvent<UpdateCellsResponse>) => {
            history.push(response.data.positions);
        };
        worker.onmessage = onCellsUpdate;

        cells = getNewCells(worldSize, 1000);
        attractionTable = getRandomAttractionTable();
        history = [] as Coordinates[][];
        worker.postMessage({
            msg: 'start',
            cells,
            attractionTable,
            worldSize
        });
    };

    const updateFrame = () => {
        // Keep a buffer of frames which is useful at the beginning
        // when the simulation worker is faster than the drawing loop
        if (history.length > 0) {
            const positions = history.shift() || [];
            for (let i = 0; i < cells.length; i++) {
                cells[i].pos = positions[i];
            }
        }
    };

    onMount(loadWorker);
    onDestroy(() => worker?.terminate());
</script>

<h2>V3 WIP</h2>

<Canvas {cells} {worldSize} drewFrame={updateFrame} />

<div>
    <button on:click={start}> Start </button>
</div>

<AttractionTableChoice updateTable={updateAttractionTable} />
<AttractionTableComponent {attractionTable} onUpdateTable={updateAttractionTable} />
