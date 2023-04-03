precision highp float;

uniform float wallsMode;    // 0.0: wraped 1.0: box 2.0: bottom wall
uniform float gravityFactor;
uniform float interactionRange;
uniform float drag;
uniform float deltaTime;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;

uniform sampler2D positionTex;
uniform sampler2D colorTex;

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

vec2 newPosition_box(vec2 position, vec2 direction) {
    vec2 newPosition = position + direction;
    if (newPosition.y >= worldDimensions.y - 5.0) {
        newPosition.y = worldDimensions.y - 7.0;
    } else if (newPosition.y <  5.0) {
        newPosition.y = 7.0;
    }

    if (newPosition.x >= worldDimensions.x - 5.0) {
        newPosition.x = worldDimensions.x - 7.0;
    } else if (newPosition.x <  5.0) {
        newPosition.x = 7.0;
    }
    return newPosition;
}

vec2 newPosition_bottomWall(vec2 position, vec2 direction) {
    vec2 newPosition = position + direction;
    newPosition.x = euclideanModulo(position.x + direction.x, worldDimensions.x);
    if (newPosition.y >= worldDimensions.y - 5.0) {
        newPosition.y = worldDimensions.y - 7.0;
    }
    return newPosition;
}

vec2 newPosition_wrapWorld(vec2 position, vec2 direction) {
    return euclideanModulo(position + direction, worldDimensions);
}

vec2 getNewPosition(float wallsMode, vec2 position, vec2 direction) {
    if (wallsMode == 0.0) {
        // Wrapped world
        return newPosition_wrapWorld(position, direction);
    }

    if (wallsMode == 1.0) {
        // Box
        return newPosition_box(position, direction);
    }

    // Bottom wall - horizontal wrap
    return newPosition_bottomWall(position, direction);
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    vec2 position = texture2D(positionTex, texcoord).xy;
    float color = texture2D(colorTex, texcoord).x;

    vec2 direction = vec2(0.0, 0.0);

    // Iterate on the texture coordinates to compare with each other cell

    for (float y=0.0; y<1.0; y += 1.0 / texHeight) {
        for (float x=0.0; x<1.0; x += 1.0 / texWidth) {
            vec2 otherTextCoord = vec2(x, y);
            vec2 otherPosition = texture2D(positionTex, otherTextCoord).xy;
            float otherColor = texture2D(colorTex, otherTextCoord).x;

            vec2 diff = position - otherPosition;
            float mag = length(diff);
            if (mag < interactionRange) {
                float diffCoef = 1.0 / mag;
                if (mag < 1.0) {
                    diffCoef = 1.0;
                }

                float colorCoef = 1.0;
                // if (color == otherColor) {
                //     colorCoef = 2.0;
                // }

                direction = direction + (diff * diffCoef * colorCoef);
            }
        }
    }
    direction = (direction * deltaTime) / drag;
    direction = direction + gravity * gravityFactor;

    vec2 newPosition = getNewPosition(wallsMode, position, direction);

    gl_FragColor = vec4(newPosition, 0, 1);
}
