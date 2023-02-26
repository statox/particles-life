<script>
    import { base } from '$app/paths';
</script>

<header>
    <h1>Particles Life</h1>

    <nav>
        <a href="{base}/">Home</a> |
        <a href="{base}/webgl">WebGL</a> |
        <a href="{base}/distance">Distance test</a> |
        <a href="{base}/testWorkers">Workers test</a> |
        <a href="{base}/v2">V2</a> |
        <a href="{base}/v3">V3</a> |
    </nav>
</header>

<slot />
