export function getInitialData(nbParticles: number, screenDimensions: { width: number, height: number }) {
    const ids = new Array(nbParticles).fill(0).map((_, i) => i);
    const colors = new Array(nbParticles).fill(0).map((_) => Math.floor(Math.random() * 4));

    const positions = ids
        //.map((_) => [Math.random() * screenDimensions.width, Math.random() * screenDimensions.height, 0, 0])
        .map((_) => [screenDimensions.width / 2 + Math.random() * 10, screenDimensions.height / 2 + Math.random() * 10, 0, 0])
        .flat();

    const texDimensions = {
        width: ids.length,
        height: 1
    };

    return { ids, positions, texDimensions, colors };
}
