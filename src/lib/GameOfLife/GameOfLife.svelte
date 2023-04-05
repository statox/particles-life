<script lang="ts">
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import V1 from './v1/v1.svelte';
    import V2 from './v2/v2.svelte';

    const tabs = [
        { title: 'V1', component: V1 },
        { title: 'V2', component: V2 }
    ];
</script>

<div>
    <Tabs>
        <TabList>
            <Tab>About</Tab>
            {#each tabs as tab}
                <Tab>{tab.title}</Tab>
            {/each}
        </TabList>

        <TabPanel>
            <p>Experiments running Conway's Game of Life in WebGL shaders.</p>
        </TabPanel>

        {#each tabs as tab}
            <TabPanel>
                <svelte:component this={tab.component} />
            </TabPanel>
        {/each}
    </Tabs>
</div>
