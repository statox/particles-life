import type REGL from 'regl';

let command: REGL.DrawCommand;
export const initCursorCommand = (regl: REGL.Regl, coloredOutput: REGL.Framebuffer2D) => {
    command = regl({
        frag: `
    precision highp float;

    uniform sampler2D prevState;
    uniform vec2 mousePosition;
    uniform float penRadius;

    varying vec2 uv;

    void main() {
        vec4 color = texture2D(prevState, uv);

        float d = distance(uv, mousePosition);
        if (
            (d >= penRadius && d <= penRadius + 0.001) ||
            (uv.x >= mousePosition.x - 0.001 && uv.x <= mousePosition.x + 0.001 && uv.y >= mousePosition.y - 0.01 && uv.y <= mousePosition.y + 0.01) ||
            (uv.x >= mousePosition.x - 0.01 && uv.x <= mousePosition.x + 0.01 && uv.y >= mousePosition.y - 0.001 && uv.y <= mousePosition.y + 0.001)
        ) {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        } else {
            gl_FragColor = color;
        }
    }`,

        vert: `
    precision mediump float;
    attribute vec2 position;
    varying vec2 uv;
    void main() {
        uv = 0.5 * (position + 1.0);
        gl_Position = vec4( position.x, position.y, 0, 1);
    }`,

        attributes: {
            position: [
                [-1, -1],
                [-1, 1],
                [1, -1],

                [1, -1],
                [-1, 1],
                [1, 1]
            ]
        },

        uniforms: {
            mousePosition: regl.prop('mousePosition'),
            penRadius: regl.prop('penRadius'),
            prevState: coloredOutput
        },

        depth: {
            enable: false
        },

        primitive: 'triangles',
        count: 6
    });
};

export const doCursor = (
    mouseState: { x: number; y: number; penSize: number },
    worldSize: number
) => {
    command({
        mousePosition: [mouseState.x, mouseState.y],
        penRadius: 1 / 2 ** (worldSize - mouseState.penSize)
    });
};
