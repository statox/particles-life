<script lang="ts">
    import type { AttractionTable } from '$lib/components/Simulation/types';

    import { getRandomAttractionTable, tables } from './tables';
    let selectedTable: AttractionTable;
    export let updateTable: (table: AttractionTable) => void;
</script>

<div>
    <label for="tables">Select a new attraction table</label>
    <select bind:value={selectedTable} on:change={() => updateTable(selectedTable)}>
        <option value={getRandomAttractionTable()}>Random - A randomly generated table</option>
        {#each tables as tableData}
            <option value={tableData.table}>
                {tableData.name} -
                {tableData.description}
            </option>
        {/each}
    </select>
</div>
