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

    vec2 center = u_resolution / 2.0;
    vec2 direction = vec2(0.0, 0.0);

    // Iterate on the texture coordinates to compare with each other cell
    const float texWidth = 600.0;
    for (float x=0.0; x<1.0; x += 1.0 / texWidth) {
        vec2 otherTextCoord = vec2(x, 0.5);
        vec2 otherPosition = texture2D(positionTex, otherTextCoord).xy;

        vec2 diff = position - otherPosition;
        float mag = length(diff);
        if (mag < 20.0) {
            if (mag == 0.0) {
                mag = 0.1;
            }
            direction = direction + (diff * vec2(10.0/mag, 10.0/mag));
        }
    }
    direction = direction * vec2(0.01, 0.01);

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

