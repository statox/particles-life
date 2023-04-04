precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;
varying vec2 vTexCoord;

void main() {
    vec2 texcoord = gl_FragCoord.xy / uTextureSize;
    float color = texture2D(uInputTexture, texcoord).x;

    if (color > 0.5) {
        color -= 0.01;
    } else {
        color += 0.01;
    }

    // Write the texel to the output texture
    gl_FragColor = vec4(color, color, color, 1.0);
}
