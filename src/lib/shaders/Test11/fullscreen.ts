/*
 * Allow an HTML element to be toggled fullscreen.
 *
 * We return two functions allowing to manually enable and disable the fullscreen mode
 * and the eventListener makes sure disableFullscreen() is called when the user presses Esc
 * to exit fullscreen.
 */
export function setupFullscreenElement(
    document: Document,
    elementId: string,
    elementDimensions: { width: number; height: number }
) {
    function disableFullscreen() {
        const canvas = document.getElementById(elementId) as HTMLCanvasElement;
        if (!canvas) {
            return;
        }

        if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen();
        }
        canvas.width = elementDimensions.width;
        canvas.height = elementDimensions.height;
    }

    function enableFullscreen() {
        const canvas = document.getElementById(elementId);
        if (!canvas) {
            return;
        }
        if (!document.fullscreenElement) {
            canvas.requestFullscreen();
        }
    }

    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement === null) {
            // User exited fullscreen mode
            disableFullscreen();
        }
    });

    return { enableFullscreen, disableFullscreen };
}
