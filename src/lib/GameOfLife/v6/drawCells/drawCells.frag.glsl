precision mediump float;
uniform sampler2D u_texture;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = v_texcoord;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
