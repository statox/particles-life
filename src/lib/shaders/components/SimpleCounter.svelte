<script lang="ts">
    // Copying code to get started with GPGPU
    // https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html

    import { onMount } from 'svelte';
    import * as webglUtils from '../webglUtils';

    function init() {
        const vs = `
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `;

        const fs = `
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `;

        const dstWidth = 3;
        const dstHeight = 3;

        // make a 3x2 canvas for 6 results
        const canvas = document.createElement('canvas');
        canvas.width = dstWidth;
        canvas.height = dstHeight;

        const gl = canvas.getContext('webgl');
        if (!gl) {
            throw 'Coulndt get context';
        }

        const program = webglUtils.createProgramFromSources(gl, [vs, fs]);
        if (!program) {
            throw 'Could not get program';
        }
        const positionLoc = gl.getAttribLocation(program, 'position');
        const srcTexLoc = gl.getUniformLocation(program, 'srcTex');
        const srcDimensionsLoc = gl.getUniformLocation(program, 'srcDimensions');

        // setup a full canvas clip space quad
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            gl.STATIC_DRAW
        );

        // setup our attributes to tell WebGL how to pull
        // the data from the buffer above to the position attribute
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(
            positionLoc,
            2, // size (num components)
            gl.FLOAT, // type of data in buffer
            false, // normalize
            0, // stride (0 = auto)
            0 // offset
        );

        // create our source texture
        const srcWidth = 3;
        const srcHeight = 3;
        const tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1); // see https://webglfundamentals.org/webgl/lessons/webgl-data-textures.html
        gl.texImage2D(
            gl.TEXTURE_2D,
            0, // mip level
            gl.LUMINANCE, // internal format
            srcWidth,
            srcHeight,
            0, // border
            gl.LUMINANCE, // format
            gl.UNSIGNED_BYTE, // type
            new Uint8Array([1, 2, 3, 4, 5, 6, 70, 80, 90])
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        gl.useProgram(program);
        gl.uniform1i(srcTexLoc, 0); // tell the shader the src texture is on texture unit 0
        gl.uniform2f(srcDimensionsLoc, srcWidth, srcHeight);

        gl.drawArrays(gl.TRIANGLES, 0, 6); // draw 2 triangles (6 vertices)

        // get the result
        const results = new Uint8Array(dstWidth * dstHeight * 4);
        gl.readPixels(0, 0, dstWidth, dstHeight, gl.RGBA, gl.UNSIGNED_BYTE, results);

        // print the results
        for (let i = 0; i < dstWidth * dstHeight; ++i) {
            log(results[i * 4]);
        }
    }
    function log(arg: number) {
        const elem = document.createElement('li');
        elem.textContent = arg.toString();
        const resultElement = document.getElementById('result');
        if (!resultElement) {
            throw 'result element undefined';
        }
        resultElement.appendChild(elem);
    }

    onMount(init);
</script>

<p>
    This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!
</p>
<p>
    It is reusing the code from
    <a target="none" href="https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html">
        this site
    </a>.
</p>

<ul id="result" />

<canvas id="canvas" />
