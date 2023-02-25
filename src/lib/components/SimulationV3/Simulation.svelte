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

    const cellSize = 1;

    // const worldSize = { x: 1600, y: 960 };
    // let maxAttractionRadius = 32;
    // let nbParticles = 1000;

    // const worldSize = { x: 1600, y: 960 };
    // let maxAttractionRadius = 32;
    // let nbParticles = 4000;

    const worldSize = { x: 1920, y: 1280 };
    let maxAttractionRadius = 32;
    let nbParticles = 8000;

    let horizontalResolution = 60;
    let verticalResolution = 40;

    const loadWorker = async () => {
        const SimulationWorker = await import(
            '$lib/components/SimulationV3/engine/simulation.worker?worker'
        );
        worker = new SimulationWorker.default();
        start();
    };

    const updateAttractionTable = (newAttractionTable: AttractionTable) => {
        attractionTable = newAttractionTable;
        // This doesn't work completely because of the history buffer.
        // There is a delay between the press of the button and the moment
        // the frames affected by the change pop out of the buffer.
        worker.postMessage({
            msg: 'updateTable',
            attractionTable
        });
        history = [cells.map((c) => c.pos)];
    };

    const updateWorldSettings = () => {
        worldSize.x = maxAttractionRadius * horizontalResolution;
        worldSize.y = maxAttractionRadius * verticalResolution;

        history = [] as Coordinates[][];
        const onCellsUpdate = (response: MessageEvent<UpdateCellsResponse>) => {
            history.push(response.data.positions);
        };
        worker.onmessage = onCellsUpdate;

        cells = getNewCells(worldSize, nbParticles);
        worker.postMessage({
            msg: 'start',
            cells,
            attractionTable,
            worldSize,
            maxAttractionRadius
        });
    };

    const start = () => {
        if (!worker) {
            throw new Error('Worker is not initialized');
        }
        const onCellsUpdate = (response: MessageEvent<UpdateCellsResponse>) => {
            history.push(response.data.positions);
        };
        worker.onmessage = onCellsUpdate;

        cells = getNewCells(worldSize, nbParticles);
        attractionTable = getRandomAttractionTable();
        history = [] as Coordinates[][];
        worker.postMessage({
            msg: 'start',
            cells,
            attractionTable,
            worldSize,
            maxAttractionRadius
        });
    };

    const updateFrame = () => {
        // Keep a buffer of frames which is useful at the beginning
        // when the simulation worker is faster than the drawing loop
        if (history.length > 0) {
            const positions = history.shift() || [];
            if (positions.length !== cells.length) {
                return;
            }
            for (let i = 0; i < cells.length; i++) {
                cells[i].pos = positions[i];
            }
        }
    };

    onMount(loadWorker);
    onDestroy(() => worker?.terminate());
</script>

<h2>V3 WIP</h2>

<div>
    <p>
        <label for="attractionRadius">Simulation definition</label>
        <input
            id="attractionRadius"
            type="number"
            bind:value={maxAttractionRadius}
            on:change={updateWorldSettings}
        />
    </p>

    <p>
        <label for="horizontalResolution">Simulation horizontal resolution</label>
        <input
            id="horizontalResolution"
            type="number"
            bind:value={horizontalResolution}
            on:change={updateWorldSettings}
        />
        = {horizontalResolution * maxAttractionRadius}
    </p>

    <p>
        <label for="verticalResolution">Simulation vertical resolution</label>
        <input
            id="verticalResolution"
            type="number"
            bind:value={verticalResolution}
            on:change={updateWorldSettings}
        />
        = {verticalResolution * maxAttractionRadius}
    </p>

    <p>
        <label for="nbParticles">Number of particles</label>
        <input
            id="nbParticles"
            type="number"
            bind:value={nbParticles}
            on:change={updateWorldSettings}
        />
    </p>
</div>

<Canvas {cells} {worldSize} {cellSize} drewFrame={updateFrame} />

<div>
    <button on:click={start}> Start </button>
</div>

<AttractionTableChoice updateTable={updateAttractionTable} />
<AttractionTableComponent {attractionTable} onUpdateTable={updateAttractionTable} />
