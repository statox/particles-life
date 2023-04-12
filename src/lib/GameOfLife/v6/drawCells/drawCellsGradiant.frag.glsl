precision mediump float;
uniform sampler2D u_texture;
uniform vec2 u_worldSize;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = v_texcoord;

    vec4 cell = texture2D(u_texture, texCoord);
    float alive = cell.x;
    float id = cell.y;
    float blue = id / (u_worldSize.x * u_worldSize.y);
    gl_FragColor = vec4(0.3, blue, 0.8, 1.0) * alive;
}

