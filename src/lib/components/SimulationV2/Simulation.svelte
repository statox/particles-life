<script lang="ts">
    import { Engine } from './engine';
    import Canvas from './graphics/Canvas.svelte';

    const engine = new Engine(5000);
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
