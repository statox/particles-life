attribute vec2 a_position;

varying vec2 uv;

void main() {
    // Convert the position from pixels to normalized space (-1 to +1)
    vec2 zeroToTwo = a_position * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

    // Pass the texture coordinate to the fragment shader
    uv = a_position;
}
