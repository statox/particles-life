<script>
    import { base } from '$app/paths';
</script>

<header>
    <h1>Particles Life</h1>

    <nav>
        <a href="{base}/">Particles life</a> |
        <a href="{base}/gameoflife">Game Of Life</a> |
        <a href="{base}/reaction-diffusion">Reaction-diffusion</a> |
        <a href="{base}/shaders">Test shaders</a> |
    </nav>
</header>

<slot />
