<script lang="ts">
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import V1 from './v1/Main.svelte';
    import V2 from './v2/Main.svelte';
    import V3 from './v3/Main.svelte';

    const tabs = [
        { title: 'V3', component: V3 },
        { title: 'V2', component: V2 },
        { title: 'V1', component: V1 }
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
            <p>
                Experiments with <a
                    href="https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"
                    target="none">Reaction-diffusion systems</a
                >
            </p>
        </TabPanel>

        {#each tabs as tab}
            <TabPanel>
                <svelte:component this={tab.component} />
            </TabPanel>
        {/each}
    </Tabs>
</div>
