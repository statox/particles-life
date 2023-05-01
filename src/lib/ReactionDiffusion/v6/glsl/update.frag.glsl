precision mediump float;

uniform sampler2D prevState;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${RADIUS})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${RADIUS})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${RADIUS})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${RADIUS})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${RADIUS})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${RADIUS})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${RADIUS})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${RADIUS})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${RADIUS})).rg * 0.05;

    return r;
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec2 L = laplacianDiff();
    float La = L.r;
    float Lb = L.g;

    float newA = A + ((Da * La) - (A * B * B) + (f * (1.0 - A)));
    float newB = B + ((Db * Lb) + (A * B * B) - ((k + f) * B));

    gl_FragColor = vec4(newA, newB, 0, 1);
}
