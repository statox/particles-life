<script lang="ts">
    // Copying code to get started with GPGPU
    // https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html

    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import SimpleCounter from './SimpleCounter.svelte';
    import SimpleParticles from './SimpleParticles.svelte';
</script>

<div>
    <Tabs>
        <TabList>
            <Tab>About</Tab>
            <Tab>Simple counter</Tab>
            <Tab>Particles</Tab>
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
    </Tabs>
</div>
