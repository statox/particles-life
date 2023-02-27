<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    import AttractionTableChoice from '$lib/attraction/AttractionTableChoice.svelte';
    import AttractionTableComponent from '$lib/attraction/AttractionTableComponent.svelte';
    import type { AttractionTable } from '$lib/attraction';
    import type { Cell, Color, Coordinates, UpdateCellsResponse } from '$lib/engine';
    import { getRandomAttractionTable } from '$lib/attraction';

    import Canvas from '$lib/graphics/Canvas.svelte';
    import { getNewCells } from '$lib/engine/cells';

    let worker: Worker;
    let cells: Cell[];
    let buffer: Coordinates[][];
    let attractionTable: AttractionTable;
    let lastFrameTimestamp = 0;
    let timeToFrame = 0;
    let renderPaused = false;
    let showColors = true;

    const cellSize = 1;

    // let maxAttractionRadius = 32;
    // let nbParticles = 1000;
    // let horizontalResolution = 60;
    // let verticalResolution = 40;

    // let maxAttractionRadius = 32;
    // let nbParticles = 4000;
    // let horizontalResolution = 60;
    // let verticalResolution = 40;

    let maxAttractionRadius = 32;
    let nbParticles = 4000;
    let horizontalResolution = 30;
    let verticalResolution = 20;

    const worldSize = {
        x: maxAttractionRadius * horizontalResolution,
        y: maxAttractionRadius * verticalResolution
    };

    let WorkerConstructor: new () => Worker;
    const loadWorker = async () => {
        const SimulationWorker = await import('$lib/engine/simulation.worker?worker');
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
        buffer = [cells.map((c) => c.pos)];
        frameIndex = 0;
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

    const largeCenterCells = () => {
        for (const cell of cells) {
            const r = 200 * Math.random();
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
        start(false, true);
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
            buffer.push(response.data.positions);
        };
        worker.onmessage = onCellsUpdate;

        if (!keepCells) {
            cells = getNewCells(worldSize, nbParticles);
        }
        if (!keepTable) {
            attractionTable = getRandomAttractionTable();
        }
        buffer = [] as Coordinates[][];
        frameIndex = 0;
        worker.postMessage({
            msg: 'start',
            cells,
            attractionTable,
            worldSize,
            maxAttractionRadius
        });
    };

    const replayFromStart = () => {
        frameIndex = 0;
    };

    let frameIndex = 0;
    const updateFrame = () => {
        // Keep a buffer of frames which is useful at the beginning
        // when the simulation worker is faster than the drawing loop
        if (buffer.length - 1 > frameIndex) {
            const now = Date.now();
            timeToFrame = now - lastFrameTimestamp;
            lastFrameTimestamp = now;

            if (!renderPaused) {
                frameIndex++;
            }
            const positions = buffer[frameIndex];
            buffer = buffer;

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

<Canvas {cells} {worldSize} {cellSize} {showColors} drewFrame={updateFrame} />
<div>
    <div>
        <span>Buffer size: {(buffer?.length || 0) - frameIndex}</span>
        <span>Current frame: {frameIndex}</span>
        <span>Frame length (ms): {timeToFrame}</span>
    </div>

    <input
        type="range"
        min="1"
        max={buffer?.length ? buffer.length - 1 : 0}
        bind:value={frameIndex}
        class="slider"
        id="frameIndexSlider"
    />

    <div>
        <button on:click={replayFromStart}>Replay from start</button>
        <button on:click={() => (frameIndex = buffer.length - 1 || 0)}>Catchup last frame</button>
        <button on:click={() => (renderPaused = !renderPaused)}>
            {renderPaused ? 'Play' : 'Pause'}
        </button>
    </div>
    <div>
        <button on:click={() => (showColors = !showColors)}>
            {showColors ? 'Hide colors' : 'Show colors'}
        </button>
    </div>
</div>

<div>
    <button on:click={resetSimulation}> Reset cells </button>
    <button on:click={centerCells}> Center cells </button>
    <button on:click={largeCenterCells}> Large Center cells </button>
    <button on:click={rainbowCells}> Rainbow cells </button>
</div>

<AttractionTableChoice updateTable={updateAttractionTable} />
<AttractionTableComponent {attractionTable} onUpdateTable={updateAttractionTable} />
