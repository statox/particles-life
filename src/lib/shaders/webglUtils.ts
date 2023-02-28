import type { CallbackErrorOnly } from '$lib/tsUtils';

const defaultShaderType = ['VERTEX_SHADER', 'FRAGMENT_SHADER'];

/**
 * Creates a program from 2 sources.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSourcess Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram} The created program.
 * @memberOf module:webgl-utils
 */
export function createProgramFromSources(
    gl: WebGLRenderingContext,
    shaderSources: string[],
    opt_attribs?: string[],
    opt_locations?: number[],
    opt_errorCallback?: CallbackErrorOnly
) {
    const shaders = [];
    for (let ii = 0; ii < shaderSources.length; ++ii) {
        shaders.push(
            loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback)
        );
    }
    return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
}

function loadShader(
    gl: WebGLRenderingContext,
    shaderSource: string,
    shaderType: number,
    opt_errorCallback?: CallbackErrorOnly
) {
    const errFn = opt_errorCallback || console.log;
    // Create the shader object
    const shader = gl.createShader(shaderType);
    if (!shader) {
        throw 'Could not load shader';
    }

    // Load the shader source
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check the compile status
    const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        // Something went wrong during compilation; get the error
        const lastError = gl.getShaderInfoLog(shader);
        errFn(
            new Error(
                "*** Error compiling shader '" +
                    shader +
                    "':" +
                    lastError +
                    `\n` +
                    shaderSource
                        .split('\n')
                        .map((l, i) => `${i + 1}: ${l}`)
                        .join('\n')
            )
        );
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

/**
 * Creates a program, attaches shaders, binds attrib locations, links the
 * program and calls useProgram.
 * @param {WebGLShader[]} shaders The shaders to attach
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @memberOf module:webgl-utils
 */
function createProgram(
    gl: WebGLRenderingContext,
    shaders: WebGLShader[],
    opt_attribs?: string[],
    opt_locations?: number[],
    opt_errorCallback?: CallbackErrorOnly
) {
    const errFn = opt_errorCallback || console.log;
    const program = gl.createProgram();
    if (!program) {
        throw 'Could not create program';
    }
    shaders.forEach(function (shader) {
        gl.attachShader(program, shader);
    });
    if (opt_attribs) {
        opt_attribs.forEach(function (attrib, ndx) {
            gl.bindAttribLocation(program, opt_locations ? opt_locations[ndx] : ndx, attrib);
        });
    }
    gl.linkProgram(program);

    // Check the link status
    const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        const lastError = gl.getProgramInfoLog(program);
        errFn('Error in program linking:' + lastError);

        gl.deleteProgram(program);
        return null;
    }
    return program;
}
