import type { CallbackErrorOnly } from '$lib/tsUtils';

const defaultShaderType = ['VERTEX_SHADER', 'FRAGMENT_SHADER'];

export function checkWebGlCapabilities(gl: WebGLRenderingContext) {
    if (!gl.getExtension('OES_texture_float')) {
        alert('Need OES_texture_float');
        throw 'Need OES_texture_float';
    }
    // check we can render to floating point textures
    if (!gl.getExtension('WEBGL_color_buffer_float')) {
        alert('Need WEBGL_color_buffer_float');
        throw 'Need WEBGL_color_buffer_float';
    }
    // check we can use textures in a vertex shader
    if (gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 1) {
        alert('Can not use textures in vertex shaders');
        throw 'Can not use textures in vertex shaders';
    }
}

export function createTexture(
    gl: WebGLRenderingContext,
    data: ArrayBufferView | null,
    width: number,
    height: number
) {
    const tex = gl.createTexture();
    if (!tex) {
        throw 'Can not create texture';
    }
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0, // mip level
        gl.RGBA, // internal format
        width,
        height,
        0, // border
        gl.RGBA, // format
        gl.FLOAT, // type
        data
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return tex;
}

export function createFramebuffer(gl: WebGLRenderingContext, tex: WebGLTexture) {
    const fb = gl.createFramebuffer();
    if (!fb) {
        throw 'Can not create frame buffer';
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    return fb;
}

/**
 * Creates a program from 2 sources.
 *
 * @param gl The WebGLRenderingContext to use.
 * @param shaderSourcess Array of sources for the shaders. The first is assumed to be the vertex shader, the second the fragment shader.
 * @param [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param opt_errorCallback callback for errors. By default it just prints an error to the console on error. If you want something else pass an callback. It's passed an error message.
 * @return The created program.
 * @memberOf module:webgl-utils
 */
export function createProgramFromSources(
    gl: WebGLRenderingContext,
    shaderSources: string[],
    opt_attribs?: string[],
    opt_locations?: number[],
    opt_errorCallback?: CallbackErrorOnly
) {
    const shaders: WebGLShader[] = [];
    for (let ii = 0; ii < shaderSources.length; ++ii) {
        const shaderType = defaultShaderType[ii] === 'VERTEX_SHADER' ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
        const shader = loadShader(
            gl,
            shaderSources[ii],
            shaderType,
            opt_errorCallback
        );
        if (!shader) {
            throw 'Can not create shader';
        }
        shaders.push(shader);
    }
    const program = createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
    if (!program) {
        throw 'Can not create program';
    }
    return program;
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
    shaders.forEach(function(shader) {
        gl.attachShader(program, shader);
    });
    if (opt_attribs) {
        opt_attribs.forEach(function(attrib, ndx) {
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

/**
 * Resize a canvas to match the size its displayed.
 * @param canvas The canvas to resize.
 * @param [multiplier] amount to multiply by.
 *    Pass in window.devicePixelRatio for native pixels.
 * @return true if the canvas was resized.
 * @memberOf module:webgl-utils
 */
export function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement, multiplier?: number) {
    multiplier = multiplier || 1;
    const width = (canvas.clientWidth * multiplier) | 0;
    const height = (canvas.clientHeight * multiplier) | 0;
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}
