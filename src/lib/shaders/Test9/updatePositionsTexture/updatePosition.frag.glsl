precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;
uniform float interactionRange;
uniform float deltaTime;
uniform float drag;

// We need to define the texture dimensions in constants
// because loops work only with constant values
const float texWidth = {{TEX_WIDTH}};
const float texHeight = {{TEX_HEIGHT}};

const vec2 gravity = vec2(0.0, 0.5);

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

float euclideanModulo(float n, float m) {
    return mod(mod(n, m) + m, m);
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    vec2 position = texture2D(positionTex, texcoord).xy;

    vec2 direction = vec2(0.0, 0.0);

    // Iterate on the texture coordinates to compare with each other cell

    for (float y=0.0; y<1.0; y += 1.0 / texHeight) {
        for (float x=0.0; x<1.0; x += 1.0 / texWidth) {
            vec2 otherTextCoord = vec2(x, y);
            vec2 otherPosition = texture2D(positionTex, otherTextCoord).xy;

            vec2 diff = position - otherPosition;
            float mag = length(diff);
            if (mag < interactionRange) {
                float diffCoef = 1.0 / mag;
                if (mag < 1.0) {
                    diffCoef = 1.0;
                }
                direction = direction + (diff * diffCoef);
            }
        }
    }
    direction = (direction * deltaTime) / drag;
    direction = direction + gravity;

    vec2 newPosition = position + direction;
    newPosition.x = euclideanModulo(position.x + direction.x, u_resolution.x);

    if (newPosition.y >= u_resolution.y - 5.0) {
        newPosition.y = u_resolution.y - 7.0;
    }

    // if (newPosition.x >= u_resolution.x - 5.0) {
    //     newPosition.x = u_resolution.x - 7.0;
    // }

    // if (newPosition.x <  5.0) {
    //     newPosition.x = 7.0;
    // }

    gl_FragColor = vec4(newPosition, 0, 1);
}

