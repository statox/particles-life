precision mediump float;
uniform sampler2D u_texture;
uniform vec2 u_worldSize;
uniform float u_iteration;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = v_texcoord;

    vec4 cell = texture2D(u_texture, texCoord);
    float alive = cell.x;
    float updatedAt = cell.z;
    float blue = updatedAt / float(u_iteration);
    gl_FragColor = vec4(blue, 0.0, 1.0, 1.0) * alive;
}

