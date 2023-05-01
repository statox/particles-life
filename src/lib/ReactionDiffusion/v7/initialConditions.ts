export const middleCircleAndRandomSpots = (
    radius: number,
    birthChance: number,
    middleSpotRadius: number
) => {
    const seedRadius = radius * middleSpotRadius;
    return Array(radius * radius)
        .fill(0)
        .map((_, index) => {
            const y = Math.floor(index / radius);
            const x = index % radius;
            const dist = Math.hypot(radius / 2 - x, radius / 2 - y);
            if (dist < seedRadius) {
                return [0, 1, 0, 1];
            }

            if (Math.random() < birthChance) {
                return [0, 1, 0, 1];
            }
            return [1, 0, 0, 1];
        })
        .flat();
};

export const empty = (radius: number) => {
    return Array(radius * radius)
        .fill(0)
        .map(() => {
            return [0, 0, 0, 1];
        })
        .flat();
};

export const randomSpots = (radius: number, birthChance: number) => {
    return Array(radius * radius)
        .fill(0)
        .map(() => {
            if (Math.random() < birthChance) {
                return [0, 1, 0, 1];
            }
            return [1, 0, 0, 1];
        })
        .flat();
};

export const middleSpot = (radius: number, spotRadius: number) => {
    return Array(radius * radius)
        .fill(0)
        .map((_, index) => {
            const y = Math.floor(index / radius);
            const x = index % radius;
            const dist = Math.hypot(radius / 2 - x, radius / 2 - y);
            if (dist < spotRadius * radius) {
                return [0, 1, 0, 1];
            }

            return [1, 0, 0, 1];
        })
        .flat();
};
