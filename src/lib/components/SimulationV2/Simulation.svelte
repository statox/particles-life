<script lang="ts">
    import { Engine } from './engine';
    import Canvas from './graphics/Canvas.svelte';

    const worldSize = { x: 100, y: 100 };
    const engine = new Engine(worldSize, 100);
</script>

<h2>V2 WIP</h2>

<Canvas cells={engine.cells} {worldSize} />

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
