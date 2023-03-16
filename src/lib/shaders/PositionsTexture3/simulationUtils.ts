export function getInitialData(texDimensions: { width: number, height: number }, screenDimensions: { width: number, height: number }) {
    const nbParticles = texDimensions.width * texDimensions.height;
    const ids = new Array(nbParticles).fill(0).map((_, i) => i);
    const colors = new Array(nbParticles).fill(0).map((_) => Math.floor(Math.random() * 4));

    const positions = ids
        .map((_) => {
            const r = 10 * Math.random();
            const theta = Math.random() * 2 * Math.PI;
            const x = screenDimensions.width / 2 + r * Math.cos(theta);
            const y = screenDimensions.height / 2 + r * Math.sin(theta);

            return [x, y, 0, 0];
        })
        .flat();

    return { ids, positions, texDimensions, colors };
}
