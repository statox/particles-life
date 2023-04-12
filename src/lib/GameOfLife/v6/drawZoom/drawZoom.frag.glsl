precision mediump float;

uniform sampler2D u_texture;
// uniform vec2 u_zoom;

varying vec2 uv;

void main() {
    vec2 new_uv = uv;
    gl_FragColor = texture2D(u_texture, new_uv);
}
