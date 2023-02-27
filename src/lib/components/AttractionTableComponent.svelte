<script lang="ts">
    import type { AttractionTable } from '$lib/attraction';
    import type { Color } from '$lib/engine';

    export let attractionTable: AttractionTable;
    export let onUpdateTable: (attractionTable: AttractionTable) => void;

    const valuesColors = new Map([
        [-2, '#ff0000'],
        [-1, '#ff7d7d'],
        [0, '#000000'],
        [1, '#7dff7d'],
        [2, '#00ff00']
    ]);

    const colors: Color[] = ['white', 'red', 'green', 'blue'];

    const updateTable = (selfColor: Color, otherColor: Color) => {
        let val = attractionTable[selfColor][otherColor];
        val++;
        if (val === 3) {
            val = -2;
        }

        attractionTable[selfColor][otherColor] = val;
        onUpdateTable(attractionTable);
    };

    const increaseInTable = (selfColor: Color, otherColor: Color) => {
        let val = attractionTable[selfColor][otherColor];
        val++;
        if (val === 3) {
            val = 2;
        }
        attractionTable[selfColor][otherColor] = val;
        onUpdateTable(attractionTable);
    };

    const decreaseInTable = (selfColor: Color, otherColor: Color) => {
        let val = attractionTable[selfColor][otherColor];
        val--;
        if (val === -3) {
            val = -2;
        }
        attractionTable[selfColor][otherColor] = val;
        onUpdateTable(attractionTable);
    };

    const randomizeTable = () => {
        for (const selfColor of Object.keys(attractionTable) as Color[]) {
            for (const otherColor of Object.keys(attractionTable[selfColor]) as Color[]) {
                const randomValue = Math.floor(Math.random() * 5) - 2;
                attractionTable[selfColor][otherColor] = randomValue;
            }
        }
        onUpdateTable(attractionTable);
    };

    const mutateTable = () => {
        const selfColorIndex = Math.floor(Math.random() * colors.length);
        const selfColor = colors[selfColorIndex];
        const otherColorIndex = Math.floor(Math.random() * colors.length);
        const otherColor = colors[otherColorIndex];

        const randomValue = Math.floor(Math.random() * 5) - 2;
        attractionTable[selfColor][otherColor] = randomValue;
        onUpdateTable(attractionTable);
    };

    const zeroTable = () => {
        for (const selfColor of Object.keys(attractionTable) as Color[]) {
            for (const otherColor of Object.keys(attractionTable[selfColor]) as Color[]) {
                attractionTable[selfColor][otherColor] = 0;
            }
        }
        onUpdateTable(attractionTable);
    };
</script>

{#if attractionTable}
    <div>
        <button on:click={randomizeTable}>Randomize table</button>
        <button on:click={zeroTable}>Zero table</button>
        <button on:click={mutateTable}>Mutate table</button>
    </div>
    <div class="grid5cols">
        <!-- Header -->
        <span>Attraction</span>
        {#each colors as color}
            <button style="background-color: {color}" disabled>{color}</button>
        {/each}
        <!-- Body -->
        {#each colors as selfColor}
            <button style="background-color: {selfColor}" disabled>{selfColor}</button>
            {#each colors as otherColor}
                {@const color = valuesColors.get(attractionTable[selfColor][otherColor])}
                <span class="grid1row3cols">
                    <button on:click={() => decreaseInTable(selfColor, otherColor)}>-</button>
                    <button
                        style="background-color: {color}"
                        on:click={() => updateTable(selfColor, otherColor)}
                    />
                    <button on:click={() => increaseInTable(selfColor, otherColor)}>+</button>
                </span>
            {/each}
        {/each}
    </div>
{/if}

<style>
    .grid5cols {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-auto-flow: row;
    }

    .grid1row3cols {
        display: grid;
        grid-template-columns: 25% 50% 25%;
        grid-auto-flow: row;
    }
</style>
