export function getInitialData(texDimensions: { width: number, height: number }, screenDimensions: { width: number, height: number }) {
    const nbParticles = texDimensions.width * texDimensions.height;
    const ids = new Array(nbParticles).fill(0).map((_, i) => i);
    const colors = new Array(nbParticles).fill(0).map((_) => Math.floor(Math.random() * 4));

    const positions = ids
        // .map((_) => [Math.random() * screenDimensions.width, Math.random() * screenDimensions.height, 0, 0])
        .map((_) => [screenDimensions.width / 2 + (Math.random() * 100 - 50), screenDimensions.height / 2 + (Math.random() * 100 - 50), 0, 0])
        .flat();

    return { ids, positions, texDimensions, colors };
}
