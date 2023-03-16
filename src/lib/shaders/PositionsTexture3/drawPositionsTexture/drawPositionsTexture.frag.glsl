precision mediump float;
varying float v_color;

void main() {
    if (v_color == 0.0) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 0.3);
    } else if (v_color == 1.0){
        gl_FragColor = vec4(0.0, 1.0, 0.0, 0.3);
    } else if (v_color == 2.0){
        gl_FragColor = vec4(0.0, 0.0, 1.0, 0.3);
    } else if (v_color == 3.0){
        gl_FragColor = vec4(1.0, 1.0, 0.0, 0.3);
    }
}
