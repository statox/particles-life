<script>
    import { base } from '$app/paths';
    import SvelteMarkdown from 'svelte-markdown';
    import source from './about.md';

    const markdownOptions = {
        baseUrl: base
    };
</script>

<SvelteMarkdown {source} options={markdownOptions} />
