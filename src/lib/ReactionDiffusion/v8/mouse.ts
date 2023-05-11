export const getMouseCoordsRelativeToElement = (event: WheelEvent | MouseEvent) => {
    if (!event.currentTarget) {
        throw new Error('Event has no currentTarget');
    }
    const currentTarget = event.currentTarget as HTMLCanvasElement;
    const elementRect = currentTarget.getBoundingClientRect();
    const x = event.clientX - elementRect.left;
    const y = event.clientY - elementRect.top;

    const { width, height } = currentTarget;
    const relX = x / width;
    const relY = (height - y) / height;

    return { x: relX, y: relY };
};
