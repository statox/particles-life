export function getInitialData(texDimensions: { width: number, height: number }, screenDimensions: { width: number, height: number }) {
    const nbParticles = texDimensions.width * texDimensions.height;
    const ids = new Array(nbParticles).fill(0).map((_, i) => i);
    const colors = new Array(nbParticles).fill(0).map((_) => Math.floor(Math.random() * 4));

    const positions = ids
        .map((id) => {
            const mode = 'square';
            if (mode === 'circle') {
                const edgeSize = 200;   // In screen pixels
                const { x, y } = randomCoordInCircle(screenDimensions, edgeSize);
                return [x, y, 0, 0];
            }

            if (mode === 'square') {
                const edgeSize = 300;   // In screen pixels
                const { x, y } = randomCoordInSquare(screenDimensions, edgeSize);
                return [x, y, 0, 0];
            }
        })
        .flat();

    return { ids, positions, texDimensions, colors };
}

const randomCoordInSquare = (screenDimensions: { width: number, height: number }, edgeSize: number) => {
    const x = (Math.random() * edgeSize - edgeSize / 2) + screenDimensions.width / 2;
    const y = (Math.random() * edgeSize - edgeSize / 2) + screenDimensions.height / 2;
    return { x, y };
}

const randomCoordInCircle = (screenDimensions: { width: number, height: number }, edgeSize: number) => {
    const r = edgeSize * Math.random();
    const theta = Math.random() * 2 * Math.PI;
    const x = r * Math.cos(theta) + screenDimensions.width / 2;
    const y = r * Math.sin(theta) + screenDimensions.height / 2
    return { x, y };
}
