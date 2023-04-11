import { sveltekit } from '@sveltejs/kit/vite';
import plainText from 'vite-plugin-plain-text';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        plainText(['**/*.glsl', '**/*.rle'], {
            namedExport: false,
            dtsAutoGen: true,
            distAutoClean: false
        }),
        sveltekit()
    ],
    test: {},
    build: {
        // minify: false,
        // This build target is necessary to make top-level await work
        // and I use top-level await to load workers
        target: 'esnext'
    }
};

export default config;
