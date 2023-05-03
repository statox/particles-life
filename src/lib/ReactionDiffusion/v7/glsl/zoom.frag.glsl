precision highp float;

uniform sampler2D prevState;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    if (mod(uv.r, 0.1) < 0.001 || mod(uv.g, 0.1) < 0.001) {
        gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0);
    } else {
        gl_FragColor = color;
    }
}
