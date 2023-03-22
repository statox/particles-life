precision mediump float;
varying float v_color;
varying float v_id;

const float u_radius = 0.5; // The radius of the particles

void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5)); // Calculate the distance to the center
    if (dist > u_radius) { // If outside the circle, discard the fragment
        discard;
    }

    if (v_color == 0.0) {
        gl_FragColor = vec4(0.21, 0.64, 0.84, 1.0);
    } else if (v_color == 1.0) {
        gl_FragColor = vec4(0.84, 0.21, 0.64, 1.0);
    } else if (v_color == 2.0) {
        gl_FragColor = vec4(0.64, 0.84, 0.21, 1.0);
    } else {
        // Should not happen
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }

}
