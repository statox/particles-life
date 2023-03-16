precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / texDimensions;

    vec2 position = texture2D(positionTex, texcoord).xy;
    vec2 newPosition = euclideanModulo(position + vec2(1.0, 0.0), u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

