precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;

vec2 wrapCoord(vec2 coord, vec2 dimension) {
    vec2 step = vec2(1.0, 1.0) / uTextureSize;
    if (coord.x >= 1.0) {
        coord.x = 0.0;
    }
    if (coord.x < 0.0) {
        coord.x = 1.0;
    }

    if (coord.y > 1.0) {
        coord.y = 0.0;
    }
    if (coord.y < 0.0) {
        coord.y = 1.0;
    }
    return coord;
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / uTextureSize;
    vec2 neighborcoord = texcoord + (vec2(0.0, -1.0) / uTextureSize);

    neighborcoord = wrapCoord(neighborcoord, uTextureSize);
    float neighborcolor = texture2D(uInputTexture, neighborcoord).x;

    gl_FragColor = vec4(neighborcolor, 0.0, 0.0, 0.0);
}
