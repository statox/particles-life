<script lang="ts">
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import Auto from './components/Auto.svelte';
    import Manual from './components/Manual.svelte';
</script>

<div>
    <Tabs>
        <TabList>
            <Tab>Auto</Tab>
            <Tab>Manual</Tab>
        </TabList>

        <TabPanel>
            <svelte:component this={Auto} />
        </TabPanel>
        <TabPanel>
            <svelte:component this={Manual} />
        </TabPanel>
    </Tabs>
</div>
