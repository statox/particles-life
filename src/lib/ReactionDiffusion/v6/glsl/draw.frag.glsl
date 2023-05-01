precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
