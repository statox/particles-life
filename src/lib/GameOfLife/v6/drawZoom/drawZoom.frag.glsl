precision mediump float;

uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_zoomPoint;

varying vec2 uv;

void main() {
    vec2 new_uv = (uv + u_zoomPoint * u_zoom) * (1.0 / u_zoom);
    gl_FragColor = texture2D(u_texture, new_uv);
}
