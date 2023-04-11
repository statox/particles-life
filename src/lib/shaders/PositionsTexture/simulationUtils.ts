export function getInitialPositions(screenWidth: number, screenHeight: number) {
    const numParticles = 20;
    return new Array(numParticles)
        .fill(0)
        .map((_) => {
            return [Math.random() * screenWidth, Math.random() * screenHeight];
        })
        .flat();
}

export function getArrays(particleTexWidth: number, particleTexHeight: number) {
    const numParticles = particleTexWidth * particleTexHeight;
    const ids = new Array(numParticles).fill(0).map((_, i) => i);

    const cells = new Float32Array(ids.map((_) => [Math.floor(Math.random() * 2), 0, 0, 1]).flat());

    return { numParticles, cells };
}
