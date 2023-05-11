<script lang="ts">
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import About from './components/About.svelte';
    import Auto from './components/Auto.svelte';
    import Manual from './components/Manual.svelte';
    import ParametersMap from '../parametersMap/Main.svelte';
    import Archive from './components/Archive.svelte';
</script>

<div>
    <Tabs>
        <TabList>
            <Tab>About</Tab>
            <Tab>Auto</Tab>
            <Tab>Manual</Tab>
            <Tab>Parameters map</Tab>
            <Tab>Previous versions</Tab>
        </TabList>

        <TabPanel>
            <svelte:component this={About} />
        </TabPanel>
        <TabPanel>
            <svelte:component this={Auto} />
        </TabPanel>
        <TabPanel>
            <svelte:component this={Manual} />
        </TabPanel>
        <TabPanel>
            <svelte:component this={ParametersMap} />
        </TabPanel>
        <TabPanel>
            <svelte:component this={Archive} />
        </TabPanel>
    </Tabs>
</div>
