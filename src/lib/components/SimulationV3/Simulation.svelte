<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    import AttractionTableChoice from '../Simulation/attraction/AttractionTableChoice.svelte';
    import AttractionTableComponent from '../Simulation/attraction/AttractionTableComponent.svelte';
    import type { AttractionTable } from '../Simulation/types';
    import type { Cell, Color, Coordinates, UpdateCellsResponse } from './engine';
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

    const worldSize = { x: 1600, y: 960 };
    let maxAttractionRadius = 32;
    let nbParticles = 4000;

    // const worldSize = { x: 1920, y: 1280 };
    // let maxAttractionRadius = 32;
    // let nbParticles = 8000;

    let horizontalResolution = 60;
    let verticalResolution = 40;

    let WorkerConstructor: new () => Worker;
    const loadWorker = async () => {
        const SimulationWorker = await import(
            '$lib/components/SimulationV3/engine/simulation.worker?worker'
        );
        WorkerConstructor = SimulationWorker.default;
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

        start();
    };

    const centerCells = () => {
        for (const cell of cells) {
            const r = 2 * Math.random();
            const theta = Math.random() * 2 * Math.PI;
            const x = worldSize.x / 2 + r * Math.cos(theta);
            const y = worldSize.y / 2 + r * Math.sin(theta);

            cell.pos = { x, y };
        }

        start(true, true);
    };

    const rainbowCells = () => {
        const colors: Color[] = ['white', 'red', 'green', 'blue'];
        const sectionWidth = worldSize.x / 4;
        for (const cell of cells) {
            const colorIndex = Math.floor(cell.pos.x / sectionWidth);
            const color = colors[colorIndex];
            cell.color = color;
        }

        start(true, true);
    };

    const resetSimulation = () => {
        start(false, false);
    };

    const start = (keepCells?: boolean, keepTable?: boolean) => {
        if (WorkerConstructor === undefined) {
            throw new Error('Worker is not initialized');
        }
        if (worker) {
            worker.postMessage({ msg: 'destroy' });
            worker.terminate();
        }
        worker = new WorkerConstructor();
        const onCellsUpdate = (response: MessageEvent<UpdateCellsResponse>) => {
            history.push(response.data.positions);
        };
        worker.onmessage = onCellsUpdate;

        if (!keepCells) {
            cells = getNewCells(worldSize, nbParticles);
        }
        if (!keepTable) {
            attractionTable = getRandomAttractionTable();
        }
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
    <button on:click={resetSimulation}> Reset simulation </button>
    <button on:click={centerCells}> Center cells </button>
    <button on:click={rainbowCells}> Rainbow cells </button>
</div>

<AttractionTableChoice updateTable={updateAttractionTable} />
<AttractionTableComponent {attractionTable} onUpdateTable={updateAttractionTable} />
