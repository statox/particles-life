const rand = (min: number, max?: number) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
};

export function getArrays(
    particleTexWidth: number,
    particleTexHeight: number,
    canvasWidth: number,
    canvasHeight: number
) {
    const numParticles = particleTexWidth * particleTexHeight;
    const ids = new Array(numParticles).fill(0).map((_, i) => i);
    const positions = new Float32Array(
        ids.map((_) => [rand(canvasWidth), rand(canvasHeight), 0, 0]).flat()
    );
    const velocities = new Float32Array(
        ids.map((_) => [rand(-300, 300), rand(-300, 300), 0, 0]).flat()
    );

    return { numParticles, ids: new Float32Array(ids), positions, velocities };
}
