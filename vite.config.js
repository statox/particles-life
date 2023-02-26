import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    test: {},
    build: {
        // This build target is necessary to make top-level await work
        // and I use top-level await to load workers
        target: 'esnext'
    }
};

export default config;
