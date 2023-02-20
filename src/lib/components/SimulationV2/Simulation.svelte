<script lang="ts">
    import AttractionTableChoice from '../Simulation/attraction/AttractionTableChoice.svelte';
    import AttractionTableComponent from '../Simulation/attraction/AttractionTableComponent.svelte';
    import type { AttractionTable } from '../Simulation/types';

    import { Engine } from './engine';
    import Canvas from './graphics/Canvas.svelte';

    const engine = new Engine(1000);

    const updateAttractionTable = (newAttractionTable: AttractionTable) => {
        engine.attractionTable = newAttractionTable;
    };
</script>

<h2>V2 WIP</h2>

<Canvas cells={engine.cells} worldSize={engine.worldSize} />

<div>
    <button
        on:click={() => {
            engine._running ? engine.pause() : engine.run();
            engine._running = engine._running;
        }}
    >
        {engine._running ? 'Pause' : 'Play'}
    </button>
</div>

<AttractionTableChoice updateTable={updateAttractionTable} />
<AttractionTableComponent
    attractionTable={engine.attractionTable}
    onUpdateTable={updateAttractionTable}
/>
