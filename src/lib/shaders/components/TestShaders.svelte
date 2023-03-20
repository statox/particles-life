<script lang="ts">
    // Copying code to get started with GPGPU
    // https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html

    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import SimpleCounter from './SimpleCounter.svelte';
    import SimpleParticles from './SimpleParticles.svelte';
    import Particles2 from '../Particles2/Particles2.svelte';
    import PositionsBuffer from '../PositionsBuffer/PositionsBuffer.svelte';
    import PositionsTexture from '../PositionsTexture/PositionsTexture.svelte';
    import PositionsTexture2 from '../PositionsTexture2/PositionsTexture.svelte';
    import PositionsTexture3 from '../PositionsTexture3/PositionsTexture.svelte';
    import Test8 from '../Test8/Test8.svelte';
    import Test9 from '../Test9/Test9.svelte';
</script>

<div>
    <Tabs>
        <TabList>
            <Tab>About</Tab>
            <Tab>Test 1</Tab>
            <Tab>Test 2</Tab>
            <Tab>Test 3</Tab>
            <Tab>Test 4</Tab>
            <Tab>Test 5</Tab>
            <Tab>Test 6</Tab>
            <Tab>Test 7</Tab>
            <Tab>Test 8</Tab>
            <Tab>Test 9</Tab>
        </TabList>

        <TabPanel>
            <p>This page is an experiment to run simulation on the GPU.</p>
        </TabPanel>

        <TabPanel>
            <SimpleCounter />
        </TabPanel>

        <TabPanel>
            <SimpleParticles />
        </TabPanel>

        <TabPanel>
            <Particles2 />
        </TabPanel>

        <TabPanel>
            <PositionsBuffer />
        </TabPanel>

        <TabPanel>
            <PositionsTexture />
        </TabPanel>

        <TabPanel>
            <PositionsTexture2 />
        </TabPanel>

        <TabPanel>
            <PositionsTexture3 />
        </TabPanel>

        <TabPanel>
            <Test8 />
        </TabPanel>

        <TabPanel>
            <Test9 />
        </TabPanel>
    </Tabs>
</div>
