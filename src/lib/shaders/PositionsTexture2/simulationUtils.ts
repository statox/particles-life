export function getInitialData(
    nbParticles: number,
    screenDimensions: { width: number; height: number }
) {
    const ids = new Array(nbParticles).fill(0).map((_, i) => i);
    const positions = ids
        .map((_) => [
            Math.random() * screenDimensions.width,
            Math.random() * screenDimensions.height,
            0,
            0
        ])
        .flat();

    const texDimensions = {
        width: ids.length,
        height: 1
    };

    return { ids, positions, texDimensions };
}
