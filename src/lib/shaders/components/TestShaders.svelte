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
</script>

<div>
    <Tabs>
        <TabList>
            <Tab>About</Tab>
            <Tab>Simple counter</Tab>
            <Tab>Particles</Tab>
            <Tab>Particles 2</Tab>
            <Tab>Positions Buffer</Tab>
            <Tab>Positions Texture</Tab>
            <Tab>Positions Texture Draw & Update</Tab>
        </TabList>

        <TabPanel>
            <p>This page is an experiment to run simulation on the GPU.</p>
            <p>
                I am copying code from
                <a
                    target="none"
                    href="https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"
                >
                    this site
                </a>
                and adding basic typings for typescript.
            </p>
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
    </Tabs>
</div>
