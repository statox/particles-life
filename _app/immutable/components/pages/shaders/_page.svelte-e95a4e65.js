import{S as Ye,i as Ve,s as He,k as h,q as R,a as _,l as p,m as x,r as F,h as d,c as A,n as v,b as D,D as l,B as de,o as et,p as ot,K as V,O as $,u as Ze,P as S,M as Xt,I as oi,J as vo,L as to,N as ii,w as pt,x as Dt,y as vt,f as ke,t as Ke,z as xt,e as gn,g as no,d as oo,v as xo}from"../../../chunks/index-46ced799.js";import{T as ri,a as ai,b as Ho,c as qo}from"../../../chunks/TabPanel-3f95d051.js";const si=["VERTEX_SHADER","FRAGMENT_SHADER"];function St(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return bn(e),e}function bn(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Re(t,e,o,n){const i=t.createTexture();if(!i)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i}function Oe(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function ye(t,e,o,n,i){const s=[];for(let r=0;r<e.length;++r){const f=si[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=li(t,e[r],f,i);if(!c)throw"Can not create shader";s.push(c)}const a=ci(t,s,o,n,i);if(!a)throw"Can not create program";return a}function li(t,e,o,n){const i=n||console.log,s=t.createShader(o);if(!s)throw"Could not load shader";if(t.shaderSource(s,e),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(s);return i(new Error("*** Error compiling shader '"+s+"':"+r+`
`+e.split(`
`).map((f,c)=>`${c+1}: ${f}`).join(`
`))),t.deleteShader(s),null}return s}function ci(t,e,o,n,i){const s=i||console.log,a=t.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(f){t.attachShader(a,f)}),o&&o.forEach(function(f,c){t.bindAttribLocation(a,n?n[c]:c,f)}),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const f=t.getProgramInfoLog(a);return s("Error in program linking:"+f),t.deleteProgram(a),null}return a}function Te(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}function fi(t){let e,o,n,i,s,a,r,f,c,u,m,T;return{c(){e=h("p"),o=R(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=_(),i=h("p"),s=R(`It is reusing the code from
    `),a=h("a"),r=R(`this site
    `),f=R("."),c=_(),u=h("ul"),m=_(),T=h("canvas"),this.h()},l(b){e=p(b,"P",{});var g=x(e);o=F(g,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),g.forEach(d),n=A(b),i=p(b,"P",{});var L=x(i);s=F(L,`It is reusing the code from
    `),a=p(L,"A",{target:!0,href:!0});var P=x(a);r=F(P,`this site
    `),P.forEach(d),f=F(L,"."),L.forEach(d),c=A(b),u=p(b,"UL",{id:!0}),x(u).forEach(d),m=A(b),T=p(b,"CANVAS",{id:!0}),x(T).forEach(d),this.h()},h(){v(a,"target","none"),v(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),v(u,"id","result"),v(T,"id","canvas")},m(b,g){D(b,e,g),l(e,o),D(b,n,g),D(b,i,g),l(i,s),l(i,a),l(a,r),l(i,f),D(b,c,g),D(b,u,g),D(b,m,g),D(b,T,g)},p:de,i:de,o:de,d(b){b&&d(e),b&&d(n),b&&d(i),b&&d(c),b&&d(u),b&&d(m),b&&d(T)}}}function ui(t){const e=document.createElement("li");e.textContent=t.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(e)}function di(t){function e(){const o=`
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `,n=`
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `,a=document.createElement("canvas");a.width=3,a.height=3;const r=a.getContext("webgl");if(!r)throw"Coulndt get context";const f=ye(r,[o,n]);if(!f)throw"Could not get program";const c=r.getAttribLocation(f,"position"),u=r.getUniformLocation(f,"srcTex"),m=r.getUniformLocation(f,"srcDimensions"),T=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,T),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const b=3,g=3,L=r.createTexture();r.bindTexture(r.TEXTURE_2D,L),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,b,g,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(f),r.uniform1i(u,0),r.uniform2f(m,b,g),r.drawArrays(r.TRIANGLES,0,6);const P=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,P);for(let I=0;I<3*3;++I)ui(P[I*4])}return et(e),[]}class mi extends Ye{constructor(e){super(),Ve(this,e,di,fi,He,{})}}const hi=Float32Array;function Go(t,e,o,n,i,s){const a=new hi(16);return a[0]=2/(e-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-o),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(i-s),a[11]=0,a[12]=(t+e)/(t-e),a[13]=(o+n)/(o-n),a[14]=(i+s)/(i-s),a[15]=1,a}function pi(t){let e,o,n,i,s,a,r;return{c(){e=h("p"),o=R(`This is the simple particles simulation from
    `),n=h("a"),i=R("webglfundamentals"),s=R(" directly copied in a svelte component."),a=_(),r=h("canvas"),this.h()},l(f){e=p(f,"P",{});var c=x(e);o=F(c,`This is the simple particles simulation from
    `),n=p(c,"A",{target:!0,href:!0});var u=x(n);i=F(u,"webglfundamentals"),u.forEach(d),s=F(c," directly copied in a svelte component."),c.forEach(d),a=A(f),r=p(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(r).forEach(d),this.h()},h(){v(n,"target","none"),v(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),v(r,"id","canvas"),ot(r,"background-color","black"),v(r,"width","800"),v(r,"height","600")},m(f,c){D(f,e,c),l(e,o),l(e,n),l(n,i),l(e,s),D(f,a,c),D(f,r,c)},p:de,i:de,o:de,d(f){f&&d(e),f&&d(a),f&&d(r)}}}function vi(t){function e(){const o=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,n=`
  precision highp float;

  uniform sampler2D positionTex;
  uniform sampler2D velocityTex;
  uniform vec2 texDimensions;
  uniform vec2 canvasDimensions;
  uniform float deltaTime;

  vec2 euclideanModulo(vec2 n, vec2 m) {
  	return mod(mod(n, m) + m, m);
  }

  void main() {
    // there will be one velocity per position
    // so the velocity texture and position texture
    // are the same size.

    // further, we're generating new positions
    // so we know our destination is the same size
    // as our source so we only need one set of 
    // shared texture dimensions

    // compute texcoord from gl_FragCoord;
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    
    vec2 position = texture2D(positionTex, texcoord).xy;
    vec2 velocity = texture2D(velocityTex, texcoord).xy;
    vec2 newPosition = euclideanModulo(position + velocity * deltaTime, canvasDimensions);

    gl_FragColor = vec4(newPosition, 0, 1);
  }
  `,i=`
  attribute float id;
  uniform sampler2D positionTex;
  uniform vec2 texDimensions;
  uniform mat4 matrix;

  vec4 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord);
  }

  void main() {
    // pull the position from the texture
    vec4 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // do the common matrix math
    gl_Position = matrix * vec4(position.xy, 0, 1);
    gl_PointSize = 10.0;
  }
  `,s=`
  precision highp float;
  void main() {
    gl_FragColor = vec4(0.4, 0.2, 0.9, 0.5);
  }
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const r=a.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=ye(r,[o,n]),m=ye(r,[i,s]);if(!u||!m)throw"Can not create programs";const T={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},b={id:r.getAttribLocation(m,"id"),positionTex:r.getUniformLocation(m,"positionTex"),texDimensions:r.getUniformLocation(m,"texDimensions"),matrix:r.getUniformLocation(m,"matrix")},g=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,g),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const L=300,P=20,I=L*P,k=new Array(I).fill(0).map((E,ce)=>ce),G=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,G),r.bufferData(r.ARRAY_BUFFER,new Float32Array(k),r.STATIC_DRAW),Te(r.canvas);const X=(E,ce)=>(ce===void 0&&(ce=E,E=0),Math.random()*(ce-E)+E),j=new Float32Array(k.map(E=>[X(a.width),X(a.height),0,0]).flat()),J=new Float32Array(k.map(E=>[X(-300,300),X(-300,300),0,0]).flat());function H(E,ce,ee,re){const we=E.createTexture();return E.bindTexture(E.TEXTURE_2D,we),E.texImage2D(E.TEXTURE_2D,0,E.RGBA,ee,re,0,E.RGBA,E.FLOAT,ce),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MAG_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),we}const ie=H(r,J,L,P),Q=H(r,j,L,P),M=H(r,null,L,P);if(!Q||!M)throw"Can not create position textures";function ne(E,ce){const ee=E.createFramebuffer();return E.bindFramebuffer(E.FRAMEBUFFER,ee),E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ce,0),ee}const q=ne(r,Q),w=ne(r,M);let C={fb:q,tex:Q},Z={fb:w,tex:M},oe=0;function xe(E){if(!r)return;E*=.001;const ce=E-oe;oe=E,Te(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,Z.fb),r.viewport(0,0,L,P),r.bindBuffer(r.ARRAY_BUFFER,g),r.enableVertexAttribArray(T.position),r.vertexAttribPointer(T.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,C.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,ie),r.useProgram(u),r.uniform1i(T.positionTex,0),r.uniform1i(T.velocityTex,1),r.uniform2f(T.texDimensions,L,P),r.uniform2f(T.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(T.deltaTime,ce),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,G),r.enableVertexAttribArray(b.id),r.vertexAttribPointer(b.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Z.tex),r.useProgram(m),r.uniform2f(b.texDimensions,L,L),r.uniform1i(b.positionTex,0),r.uniformMatrix4fv(b.matrix,!1,Go(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,I);{const ee=C;C=Z,Z=ee}requestAnimationFrame(xe)}requestAnimationFrame(xe)}return et(()=>e()),[]}class xi extends Ye{constructor(e){super(),Ve(this,e,vi,pi,He,{})}}const an=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Ti(t,e,o,n){const i=t*e,s=new Array(i).fill(0).map((f,c)=>c),a=new Float32Array(s.map(f=>[an(o),an(n),0,0]).flat()),r=new Float32Array(s.map(f=>[an(-300,300),an(-300,300),0,0]).flat());return{numParticles:i,ids:new Float32Array(s),positions:a,velocities:r}}const _i=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Ai=`precision highp float;

uniform sampler2D positionTex;
uniform sampler2D velocityTex;
uniform vec2 texDimensions;
uniform vec2 canvasDimensions;
uniform float deltaTime;

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

void main() {
    // there will be one velocity per position
    // so the velocity texture and position texture
    // are the same size.

    // further, we're generating new positions
    // so we know our destination is the same size
    // as our source so we only need one set of 
    // shared texture dimensions

    // compute texcoord from gl_FragCoord;
    vec2 texcoord = gl_FragCoord.xy / texDimensions;

    vec2 position = texture2D(positionTex, texcoord).xy;
    //vec2 velocity = texture2D(velocityTex, texcoord).xy;
    vec2 velocity = vec2(0.0, -100);
    vec2 newPosition = euclideanModulo(position + velocity * deltaTime, canvasDimensions);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`,gi=`  attribute float id;
  uniform sampler2D positionTex;
  uniform vec2 texDimensions;
  uniform mat4 matrix;

  vec4 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord);
  }

  void main() {
    // pull the position from the texture
    vec4 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // do the common matrix math
    gl_Position = matrix * vec4(position.xy, 0, 1);
    gl_PointSize = 10.0;
  }

`,bi=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function wi(t){let e,o,n,i,s,a,r;return{c(){e=h("p"),o=R(`This is the simple particles simulation from
    `),n=h("a"),i=R("webglfundamentals"),s=R(" with the shader code extracted into separate files."),a=_(),r=h("canvas"),this.h()},l(f){e=p(f,"P",{});var c=x(e);o=F(c,`This is the simple particles simulation from
    `),n=p(c,"A",{target:!0,href:!0});var u=x(n);i=F(u,"webglfundamentals"),u.forEach(d),s=F(c," with the shader code extracted into separate files."),c.forEach(d),a=A(f),r=p(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(r).forEach(d),this.h()},h(){v(n,"target","none"),v(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),v(r,"id","canvas"),ot(r,"background-color","black"),v(r,"width","800"),v(r,"height","600")},m(f,c){D(f,e,c),l(e,o),l(e,n),l(n,i),l(e,s),D(f,a,c),D(f,r,c)},p:de,i:de,o:de,d(f){f&&d(e),f&&d(a),f&&d(r)}}}function Ei(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const s=i.getContext("webgl");if(!s)throw"gl undefined";bn(s);const a=ye(s,[_i,Ai]),r=ye(s,[gi,bi]),f={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},c={id:s.getAttribLocation(r,"id"),positionTex:s.getUniformLocation(r,"positionTex"),texDimensions:s.getUniformLocation(r,"texDimensions"),matrix:s.getUniformLocation(r,"matrix")},u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const m=300,T=20,{numParticles:b,ids:g,positions:L,velocities:P}=Ti(m,T,i.width,i.height),I=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,I),s.bufferData(s.ARRAY_BUFFER,new Float32Array(g),s.STATIC_DRAW),Te(s.canvas);const k=Re(s,P,m,T),G=Re(s,L,m,T),X=Re(s,null,m,T),j=Oe(s,G),J=Oe(s,X);let H={fb:j,tex:G},ie={fb:J,tex:X},Q=0;function M(ne){if(!s||!u||!I)throw"Undefined params to render";ne*=.001;const q=ne-Q;Q=ne,Te(s.canvas),n(s,ie,m,T,u,f,H,k,a,q),o(s,m,I,c,ie,r,b);{const w=H;H=ie,ie=w}requestAnimationFrame(M)}requestAnimationFrame(M)}const o=(i,s,a,r,f,c,u)=>{i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,a),i.enableVertexAttribArray(r.id),i.vertexAttribPointer(r.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,f.tex),i.useProgram(c),i.uniform2f(r.texDimensions,s,s),i.uniform1i(r.positionTex,0),i.uniformMatrix4fv(r.matrix,!1,Go(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,u)},n=(i,s,a,r,f,c,u,m,T,b)=>{i.bindFramebuffer(i.FRAMEBUFFER,s.fb),i.viewport(0,0,a,r),i.bindBuffer(i.ARRAY_BUFFER,f),i.enableVertexAttribArray(c.position),i.vertexAttribPointer(c.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,u.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,m),i.useProgram(T),i.uniform1i(c.positionTex,0),i.uniform1i(c.velocityTex,1),i.uniform2f(c.texDimensions,a,r),i.uniform2f(c.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f(c.deltaTime,b),i.drawArrays(i.TRIANGLES,0,6)};return et(()=>e()),[]}class Ri extends Ye{constructor(e){super(),Ve(this,e,Ei,wi,He,{})}}const Fi=`attribute vec2 a_position;

uniform vec2 u_resolution;

// all shaders have a main function
void main() {
    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = a_position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 10.0;
}
`,yi=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Di(t){let e,o,n,i,s,a,r,f,c,u,m,T;return{c(){e=h("p"),o=R(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=h("code"),i=R("requestAnimationFrame"),s=R(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),a=_(),r=h("canvas"),f=_(),c=h("button"),u=R("Add position"),this.h()},l(b){e=p(b,"P",{});var g=x(e);o=F(g,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=p(g,"CODE",{});var L=x(n);i=F(L,"requestAnimationFrame"),L.forEach(d),s=F(g,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),g.forEach(d),a=A(b),r=p(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(r).forEach(d),f=A(b),c=p(b,"BUTTON",{});var P=x(c);u=F(P,"Add position"),P.forEach(d),this.h()},h(){v(r,"id","canvas"),ot(r,"background-color","black"),v(r,"width","800"),v(r,"height","600")},m(b,g){D(b,e,g),l(e,o),l(e,n),l(n,i),l(e,s),D(b,a,g),D(b,r,g),D(b,f,g),D(b,c,g),l(c,u),m||(T=V(c,"click",t[1]),m=!0)},p:de,i:de,o:de,d(b){b&&d(e),b&&d(a),b&&d(r),b&&d(f),b&&d(c),m=!1,T()}}}function Ui(t){const e=[50,50,50,150,150,150,150,50,200,200];function o(){const s=document.getElementById("canvas");if(!s)throw"canvas undefined";const a=s.getContext("webgl");if(!a)throw"gl undefined";bn(a);const r=ye(a,[Fi,yi]);Te(a.canvas);const f=a.getAttribLocation(r,"a_position"),c=a.getUniformLocation(r,"u_resolution"),u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW);function m(){if(!a)throw"Undefined params to render";for(let G=0;G<=e.length-2;G+=2)e[G]=(e[G]+Math.random()*2-1)%a.canvas.width,e[G+1]=(e[G+1]+Math.random()*0+1)%a.canvas.height;a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW),Te(a.canvas),a.viewport(0,0,a.canvas.width,a.canvas.height),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(r),a.uniform2f(c,a.canvas.width,a.canvas.height),a.enableVertexAttribArray(f),a.bindBuffer(a.ARRAY_BUFFER,u);const T=2,b=a.FLOAT,g=!1,L=0,P=0;a.vertexAttribPointer(f,T,b,g,L,P);var I=a.POINTS,k=e.length/2;a.drawArrays(I,P,k),requestAnimationFrame(m)}requestAnimationFrame(m)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return et(()=>o()),[n,()=>n()]}class Li extends Ye{constructor(e){super(),Ve(this,e,Ui,Di,He,{})}}const Pi=`attribute float id;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 10.0;
}
`,Bi=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let kt,Wt;const Ii=t=>{Wt=ye(t,[Pi,Bi]),kt={idAttributeLocation:t.getAttribLocation(Wt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Wt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Wt,"u_resolution")}},$i=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;Te(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Wt),e.uniform2f(kt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(kt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(kt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,s);const a=1,r=e.FLOAT,f=!1,c=0,u=0;e.vertexAttribPointer(kt.idAttributeLocation,a,r,f,c,u);const m=e.POINTS,T=i.length;e.drawArrays(m,u,T)};function Si(t){let e,o,n,i,s,a,r;return{c(){e=h("p"),o=R("Create an array of render-size positions. Store this array in a texture. In each "),n=h("code"),i=R("requestAnimationFrame"),s=R(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),a=_(),r=h("canvas"),this.h()},l(f){e=p(f,"P",{});var c=x(e);o=F(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=p(c,"CODE",{});var u=x(n);i=F(u,"requestAnimationFrame"),u.forEach(d),s=F(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(d),a=A(f),r=p(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(r).forEach(d),this.h()},h(){v(r,"id","canvas"),ot(r,"background-color","black"),v(r,"width",jo),v(r,"height",Ko)},m(f,c){D(f,e,c),l(e,o),l(e,n),l(n,i),l(e,s),D(f,a,c),D(f,r,c)},p:de,i:de,o:de,d(f){f&&d(e),f&&d(a),f&&d(r)}}}const jo=800,Ko=600;function Ci(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const n=o.getContext("webgl");if(!n)throw"gl undefined";bn(n),Te(n.canvas),Ii(n);const i=[0,1,2,3,4,5,6,7,8,9],s=i.map(r=>[Math.random()*jo,Math.random()*Ko,0,0]).flat();function a(){if(!n)throw"Undefined params to render";for(let f=0;f<=s.length-2;f+=2)s[f]=(s[f]+Math.random()*2-1)%n.canvas.width,s[f+1]=(s[f+1]+Math.random()*0+1)%n.canvas.height;const r=Re(n,new Float32Array(s),3,3);$i({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:i}),requestAnimationFrame(a)}requestAnimationFrame(a)}return et(()=>e()),[]}let Mi=class extends Ye{constructor(e){super(),Ve(this,e,Ci,Si,He,{})}};const Ni=`attribute float id;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 3.0;
}
`,zi=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Yt,Vt,Bn;const Oi=(t,e)=>{Vt=ye(t,[Ni,zi]),Yt={idAttributeLocation:t.getAttribLocation(Vt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Vt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Vt,"u_resolution")},Bn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Bn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Xi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Bn),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Vt),e.uniform2f(Yt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Yt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Yt.idAttributeLocation);const s=1,a=e.FLOAT,r=!1,f=0,c=0;e.vertexAttribPointer(Yt.idAttributeLocation,s,a,r,f,c),e.drawArrays(e.POINTS,c,i.length)};function ki(t,e){const o=new Array(t).fill(0).map((s,a)=>a),n=o.map(s=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),i={width:o.length,height:1};return{ids:o,positions:n,texDimensions:i}}const Wi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Yi=`precision highp float;

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
    vec2 direction = (center - position) / u_resolution;

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let Ct,Mt,In,En,Rn,To,_o,Ht,hn;const Vi=(t,e)=>{const{positions:o,texDimensions:n}=e;Mt=ye(t,[Wi,Yi]),Ct={positionAttributeLocation:t.getAttribLocation(Mt,"position"),positionTexLocation:t.getUniformLocation(Mt,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(Mt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Mt,"u_resolution")},In=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,In),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),En=Re(t,new Float32Array(o),n.width,n.height),Rn=Re(t,null,n.width,n.height),To=Oe(t,En),_o=Oe(t,Rn),Ht={fb:To,tex:En},hn={fb:_o,tex:Rn}},Hi=t=>{const{gl:e,texDimensions:o}=t;e.bindFramebuffer(e.FRAMEBUFFER,hn.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,In),e.enableVertexAttribArray(Ct.positionAttributeLocation),e.vertexAttribPointer(Ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ht.tex),e.useProgram(Mt),e.uniform1i(Ct.positionTexLocation,0),e.uniform2f(Ct.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Ht;Ht=hn,hn=n}return Ht.tex};function qi(t){let e,o,n,i,s,a,r,f,c,u,m,T,b;return{c(){e=h("p"),o=R("Create an array of render-size positions. Store this array in a texture."),n=_(),i=h("p"),s=R("Create 2 textures which will be used to update the positions with a shader. In each "),a=h("code"),r=R("requestAnimationFrame"),f=R(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=_(),u=h("p"),m=R("Finally switch the two textures to read and write in the updated textures"),T=_(),b=h("canvas"),this.h()},l(g){e=p(g,"P",{});var L=x(e);o=F(L,"Create an array of render-size positions. Store this array in a texture."),L.forEach(d),n=A(g),i=p(g,"P",{});var P=x(i);s=F(P,"Create 2 textures which will be used to update the positions with a shader. In each "),a=p(P,"CODE",{});var I=x(a);r=F(I,"requestAnimationFrame"),I.forEach(d),f=F(P,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),P.forEach(d),c=A(g),u=p(g,"P",{});var k=x(u);m=F(k,"Finally switch the two textures to read and write in the updated textures"),k.forEach(d),T=A(g),b=p(g,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(b).forEach(d),this.h()},h(){v(b,"id","canvas"),ot(b,"background-color","black"),v(b,"width",Jo),v(b,"height",Qo)},m(g,L){D(g,e,L),l(e,o),D(g,n,L),D(g,i,L),l(i,s),l(i,a),l(a,r),l(i,f),D(g,c,L),D(g,u,L),l(u,m),D(g,T,L),D(g,b,L)},p:de,i:de,o:de,d(g){g&&d(e),g&&d(n),g&&d(i),g&&d(c),g&&d(u),g&&d(T),g&&d(b)}}}const Jo=800,Qo=600;function Gi(t){function e(){const o=St();Te(o.canvas);const{ids:n,positions:i,texDimensions:s}=ki(100,{width:Jo,height:Qo});Oi(o,n),Vi(o,{positions:i,texDimensions:s});function a(){Te(o.canvas);const r=Hi({gl:o,texDimensions:s});Xi({gl:o,positionTex:r,textureDimension:s,ids:n}),requestAnimationFrame(a)}requestAnimationFrame(a)}return et(()=>e()),[]}let ji=class extends Ye{constructor(e){super(),Ve(this,e,Gi,qi,He,{})}};const Ki=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

varying float v_color;
varying float v_id;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 2.0;
    v_color = color;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,Ji=`precision mediump float;
varying float v_color;
varying float v_id;

void main() {
    if (v_id < 0.1) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        return;
    }
    if (v_id > 0.45 && v_id < 0.55) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        return;
    }
    if (v_id > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        return;
    }
    gl_FragColor = vec4(v_id, 1.0, v_id, 1.0);

    // if (v_color == 0.0) {
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 0.3);
    // } else if (v_color == 1.0){
    //     gl_FragColor = vec4(0.0, 1.0, 0.0, 0.3);
    // } else if (v_color == 2.0){
    //     gl_FragColor = vec4(0.0, 0.0, 1.0, 0.3);
    // } else if (v_color == 3.0){
    //     gl_FragColor = vec4(1.0, 1.0, 0.0, 0.3);
    // }
}
`;let Ut,Nt,$n,Sn;const Qi=(t,e)=>{const{ids:o,colors:n}=e;Nt=ye(t,[Ki,Ji]),Ut={idAttributeLocation:t.getAttribLocation(Nt,"id"),colorAttributeLocation:t.getAttribLocation(Nt,"color"),texDimensionsUniformLocation:t.getUniformLocation(Nt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Nt,"u_resolution")},$n=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,$n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Sn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Sn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Zi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,s=1,a=e.FLOAT,r=!1,f=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,$n),e.vertexAttribPointer(Ut.idAttributeLocation,s,a,r,f,c),e.enableVertexAttribArray(Ut.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Sn),e.vertexAttribPointer(Ut.colorAttributeLocation,s,a,r,f,c),e.enableVertexAttribArray(Ut.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Nt),e.uniform2f(Ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ut.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function er(t,e){const o=t.width*t.height,n=new Array(o).fill(0).map((a,r)=>r),i=new Array(o).fill(0).map(a=>Math.floor(Math.random()*4)),s=n.map(a=>{{const{x:f,y:c}=tr(e,20);return[f,c,0,0]}}).flat();return{ids:n,positions:s,texDimensions:t,colors:i}}const tr=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,s=o*Math.sin(n)+t.height/2;return{x:i,y:s}},nr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,or=`precision highp float;

#define MIN_DISTANCE 9.0

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;
uniform float deltaTime;

// We need to define the texture dimensions in constants
// because loops work only with constant values
const float texWidth = 100.0;
const float texHeight = 100.0;

vec2 euclideanModulo(vec2 n, vec2 m) {
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
            if (mag < MIN_DISTANCE) {
                if (mag == 0.0) {
                    mag = 1.0e-10;
                }
                direction = direction + (diff * 10.0/mag);
            }
        }
    }
    direction = (direction * 0.0001) * deltaTime;

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let Lt,Pt,Cn,sn,Fn,Ao,go,qt,pn,ln;const ir=(t,e)=>{const{positions:o,texDimensions:n}=e;return Pt=ye(t,[nr,or]),Lt={positionAttributeLocation:t.getAttribLocation(Pt,"position"),positionTexLocation:t.getUniformLocation(Pt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(Pt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Pt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Pt,"u_resolution")},Cn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Cn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),sn=Re(t,new Float32Array(o),n.width,n.height),Fn=Re(t,null,n.width,n.height),Ao=Oe(t,sn),go=Oe(t,Fn),qt={fb:Ao,tex:sn},pn={fb:go,tex:Fn},sn},rr=t=>{const{gl:e,texDimensions:o}=t,n=Date.now();ln||(ln=n-1);const i=n-ln;ln=n,e.bindFramebuffer(e.FRAMEBUFFER,pn.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Cn),e.enableVertexAttribArray(Lt.positionAttributeLocation),e.vertexAttribPointer(Lt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,qt.tex),e.useProgram(Pt),e.uniform1i(Lt.positionTexLocation,0),e.uniform1f(Lt.deltaTimeUniformLocation,i),e.uniform2f(Lt.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Lt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=qt;qt=pn,pn=s}return qt.tex};function ar(t){let e,o,n,i,s,a,r,f,c,u,m=t[2]?"Play":"Pause",T,b,g,L=t[1]?"Normal Speed":"Slow Mo",P,I,k,G,X=t[4].width*t[4].height+"",j,J,H,ie,Q,M,ne,q;return{c(){e=h("p"),o=R("Same principle with a shader to update positions and a shader to draw particles."),n=_(),i=h("p"),s=R(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=_(),r=h("canvas"),f=_(),c=h("div"),u=h("button"),T=R(m),b=_(),g=h("button"),P=R(L),I=_(),k=h("span"),G=R("particles: "),j=R(X),J=_(),H=h("label"),ie=R("Smooth steps"),Q=_(),M=h("input"),this.h()},l(w){e=p(w,"P",{});var C=x(e);o=F(C,"Same principle with a shader to update positions and a shader to draw particles."),C.forEach(d),n=A(w),i=p(w,"P",{});var Z=x(i);s=F(Z,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Z.forEach(d),a=A(w),r=p(w,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(r).forEach(d),f=A(w),c=p(w,"DIV",{});var oe=x(c);u=p(oe,"BUTTON",{});var xe=x(u);T=F(xe,m),xe.forEach(d),b=A(oe),g=p(oe,"BUTTON",{});var E=x(g);P=F(E,L),E.forEach(d),I=A(oe),k=p(oe,"SPAN",{});var ce=x(k);G=F(ce,"particles: "),j=F(ce,X),ce.forEach(d),J=A(oe),H=p(oe,"LABEL",{for:!0});var ee=x(H);ie=F(ee,"Smooth steps"),ee.forEach(d),Q=A(oe),M=p(oe,"INPUT",{type:!0,min:!0}),oe.forEach(d),this.h()},h(){v(r,"id","canvas"),ot(r,"background-color","black"),v(r,"width",t[3].width),v(r,"height",t[3].height),v(H,"for","steps"),v(M,"type","number"),v(M,"min",0)},m(w,C){D(w,e,C),l(e,o),D(w,n,C),D(w,i,C),l(i,s),D(w,a,C),D(w,r,C),D(w,f,C),D(w,c,C),l(c,u),l(u,T),l(c,b),l(c,g),l(g,P),l(c,I),l(c,k),l(k,G),l(k,j),l(c,J),l(c,H),l(H,ie),l(c,Q),l(c,M),$(M,t[0]),ne||(q=[V(u,"click",t[5]),V(g,"click",t[6]),V(M,"input",t[7])],ne=!0)},p(w,[C]){C&4&&m!==(m=w[2]?"Play":"Pause")&&Ze(T,m),C&2&&L!==(L=w[1]?"Normal Speed":"Slow Mo")&&Ze(P,L),C&1&&S(M.value)!==w[0]&&$(M,w[0])},i:de,o:de,d(w){w&&d(e),w&&d(n),w&&d(i),w&&d(a),w&&d(r),w&&d(f),w&&d(c),ne=!1,Xt(q)}}}function sr(t,e,o){const n={width:800,height:600},i={width:100,height:100};let s=1,a=!1,r=!0;function f(){const T=St();Te(T.canvas);const{ids:b,positions:g,colors:L}=er(i,{width:n.width,height:n.height});Qi(T,{ids:b,colors:L,texDimensions:i});let P=ir(T,{positions:g,texDimensions:i});function I(){if(Te(T.canvas),!r)for(let k=0;k<s;k++)P=rr({gl:T,texDimensions:i});return Zi({gl:T,positionTex:P,textureDimension:i,ids:b}),r?requestAnimationFrame(I):a?setTimeout(()=>requestAnimationFrame(I),1e3):requestAnimationFrame(I)}requestAnimationFrame(I)}et(()=>f());const c=()=>o(2,r=!r),u=()=>o(1,a=!a);function m(){s=S(this.value),o(0,s)}return[s,a,r,n,i,c,u,m]}class lr extends Ye{constructor(e){super(),Ve(this,e,sr,ar,He,{})}}const cr=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

varying float v_color;
varying float v_id;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 5.0;
    v_color = color;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,fr=`precision mediump float;
varying float v_color;
varying float v_id;

void main() {
    if (v_id < 0.1) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        return;
    }
    if (v_id > 0.45 && v_id < 0.55) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        return;
    }
    if (v_id > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        return;
    }
    gl_FragColor = vec4(v_id, 1.0, v_id, 1.0);

    // if (v_color == 0.0) {
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 0.3);
    // } else if (v_color == 1.0){
    //     gl_FragColor = vec4(0.0, 1.0, 0.0, 0.3);
    // } else if (v_color == 2.0){
    //     gl_FragColor = vec4(0.0, 0.0, 1.0, 0.3);
    // } else if (v_color == 3.0){
    //     gl_FragColor = vec4(1.0, 1.0, 0.0, 0.3);
    // }
}
`;let Bt,zt,Mn,Nn;const ur=(t,e)=>{const{ids:o,colors:n}=e;zt=ye(t,[cr,fr]),Bt={idAttributeLocation:t.getAttribLocation(zt,"id"),colorAttributeLocation:t.getAttribLocation(zt,"color"),texDimensionsUniformLocation:t.getUniformLocation(zt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(zt,"u_resolution")},Mn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Mn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},dr=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,s=1,a=e.FLOAT,r=!1,f=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Mn),e.vertexAttribPointer(Bt.idAttributeLocation,s,a,r,f,c),e.enableVertexAttribArray(Bt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Nn),e.vertexAttribPointer(Bt.colorAttributeLocation,s,a,r,f,c),e.enableVertexAttribArray(Bt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(zt),e.uniform2f(Bt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Bt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function mr(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,s=new Array(i).fill(0).map((f,c)=>c),a=new Array(i).fill(0).map(f=>Math.floor(Math.random()*4)),r=s.map(f=>{if(n==="disk"){const{x:u,y:m}=pr(o,20);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=hr(o,550);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=vr(o,f,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=bo(o,f,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=bo(o,f,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const hr=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},pr=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,s=o*Math.sin(n)+t.height/2;return{x:i,y:s}},vr=(t,e,o)=>{const n=zn(e,0,o,0,t.width,!1),i=zn(e,0,o,0,t.height,!1);return{x:n,y:i}},bo=(t,e,o,n)=>{const i=zn(e,0,o,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*i)*200+t.width/2,f=n.y,u=Math.sin(f*i)*200+t.height/2;return{x:r,y:u}},zn=function(t,e,o,n,i,s){const a=(t-e)/(o-e)*(i-n)+n;return s?n<i?wo(a,n,i):wo(a,i,n):a},wo=function(t,e,o){return Math.max(Math.min(t,o),e)},xr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Tr=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;
uniform float interactionRange;
uniform float deltaTime;
uniform float drag;

// We need to define the texture dimensions in constants
// because loops work only with constant values
const float texWidth = 100.0;
const float texHeight = 100.0;

vec2 euclideanModulo(vec2 n, vec2 m) {
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

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let ct,ft,On,cn,yn,Eo,Ro,Gt,vn;const _r=(t,e)=>{const{positions:o,texDimensions:n}=e;return ft=ye(t,[xr,Tr]),ct={positionAttributeLocation:t.getAttribLocation(ft,"position"),positionTexLocation:t.getUniformLocation(ft,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ft,"interactionRange"),dragUniformLocation:t.getUniformLocation(ft,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ft,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ft,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ft,"u_resolution")},On=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,On),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),cn=Re(t,new Float32Array(o),n.width,n.height),yn=Re(t,null,n.width,n.height),Eo=Oe(t,cn),Ro=Oe(t,yn),Gt={fb:Eo,tex:cn},vn={fb:Ro,tex:yn},cn},Ar=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,vn.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,On),e.enableVertexAttribArray(ct.positionAttributeLocation),e.vertexAttribPointer(ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Gt.tex),e.useProgram(ft),e.uniform1i(ct.positionTexLocation,0),e.uniform1f(ct.dragUniformLocation,i),e.uniform1f(ct.interactionRangeUniformLocation,n),e.uniform1f(ct.deltaTimeUniformLocation,s),e.uniform2f(ct.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=Gt;Gt=vn,vn=a}return Gt.tex};function gr(t){let e,o,n,i,s,a,r,f,c,u,m=t[2]?"Play":"Pause",T,b,g,L=t[1]?"Normal Speed":"Slow Mo",P,I,k,G,X=t[5].width*t[5].height+"",j,J,H,ie,Q,M,ne,q,w,C,Z,oe,xe,E,ce,ee,re,we,_e,W,Ue,fe,ae,Le,Ae,Y,Pe,he,ue,Be;return{c(){e=h("p"),o=R("Same principle with a shader to update positions and a shader to draw particles."),n=_(),i=h("p"),s=R(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=_(),r=h("canvas"),f=_(),c=h("div"),u=h("button"),T=R(m),b=_(),g=h("button"),P=R(L),I=_(),k=h("span"),G=R("particles: "),j=R(X),J=_(),H=h("label"),ie=R("Smooth steps"),Q=_(),M=h("input"),ne=_(),q=h("div"),w=h("ul"),C=h("li"),Z=h("label"),oe=R("Interaction Range"),xe=_(),E=h("input"),ce=_(),ee=h("li"),re=h("label"),we=R("Drag"),_e=_(),W=h("input"),Ue=_(),fe=h("li"),ae=h("label"),Le=R("Time step"),Ae=_(),Y=h("input"),Pe=_(),he=h("ul"),this.h()},l(N){e=p(N,"P",{});var z=x(e);o=F(z,"Same principle with a shader to update positions and a shader to draw particles."),z.forEach(d),n=A(N),i=p(N,"P",{});var $e=x(i);s=F($e,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),$e.forEach(d),a=A(N),r=p(N,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(r).forEach(d),f=A(N),c=p(N,"DIV",{});var y=x(c);u=p(y,"BUTTON",{});var te=x(u);T=F(te,m),te.forEach(d),b=A(y),g=p(y,"BUTTON",{});var Se=x(g);P=F(Se,L),Se.forEach(d),I=A(y),k=p(y,"SPAN",{});var Ie=x(k);G=F(Ie,"particles: "),j=F(Ie,X),Ie.forEach(d),J=A(y),H=p(y,"LABEL",{for:!0});var K=x(H);ie=F(K,"Smooth steps"),K.forEach(d),Q=A(y),M=p(y,"INPUT",{type:!0,min:!0}),y.forEach(d),ne=A(N),q=p(N,"DIV",{});var Ce=x(q);w=p(Ce,"UL",{});var le=x(w);C=p(le,"LI",{});var ge=x(C);Z=p(ge,"LABEL",{for:!0});var Me=x(Z);oe=F(Me,"Interaction Range"),Me.forEach(d),xe=A(ge),E=p(ge,"INPUT",{id:!0,type:!0,min:!0}),ge.forEach(d),ce=A(le),ee=p(le,"LI",{});var me=x(ee);re=p(me,"LABEL",{for:!0});var pe=x(re);we=F(pe,"Drag"),pe.forEach(d),_e=A(me),W=p(me,"INPUT",{id:!0,type:!0,min:!0}),me.forEach(d),Ue=A(le),fe=p(le,"LI",{});var be=x(fe);ae=p(be,"LABEL",{for:!0});var De=x(ae);Le=F(De,"Time step"),De.forEach(d),Ae=A(be),Y=p(be,"INPUT",{id:!0,type:!0,min:!0}),be.forEach(d),Pe=A(le),he=p(le,"UL",{}),x(he).forEach(d),le.forEach(d),Ce.forEach(d),this.h()},h(){v(r,"id","canvas"),ot(r,"background-color","black"),v(r,"width",t[4].width),v(r,"height",t[4].height),v(H,"for","steps"),v(M,"type","number"),v(M,"min",0),v(Z,"for","interactionRange"),v(E,"id","interactionRange"),v(E,"type","number"),v(E,"min",0),v(re,"for","drag"),v(W,"id","drag"),v(W,"type","number"),v(W,"min",0),v(ae,"for","deltaTime"),v(Y,"id","deltaTime"),v(Y,"type","number"),v(Y,"min",0)},m(N,z){D(N,e,z),l(e,o),D(N,n,z),D(N,i,z),l(i,s),D(N,a,z),D(N,r,z),D(N,f,z),D(N,c,z),l(c,u),l(u,T),l(c,b),l(c,g),l(g,P),l(c,I),l(c,k),l(k,G),l(k,j),l(c,J),l(c,H),l(H,ie),l(c,Q),l(c,M),$(M,t[0]),D(N,ne,z),D(N,q,z),l(q,w),l(w,C),l(C,Z),l(Z,oe),l(C,xe),l(C,E),$(E,t[3].interactionRange),l(w,ce),l(w,ee),l(ee,re),l(re,we),l(ee,_e),l(ee,W),$(W,t[3].drag),l(w,Ue),l(w,fe),l(fe,ae),l(ae,Le),l(fe,Ae),l(fe,Y),$(Y,t[3].timeStep),l(w,Pe),l(w,he),ue||(Be=[V(u,"click",t[6]),V(g,"click",t[7]),V(M,"input",t[8]),V(E,"input",t[9]),V(W,"input",t[10]),V(Y,"input",t[11])],ue=!0)},p(N,[z]){z&4&&m!==(m=N[2]?"Play":"Pause")&&Ze(T,m),z&2&&L!==(L=N[1]?"Normal Speed":"Slow Mo")&&Ze(P,L),z&1&&S(M.value)!==N[0]&&$(M,N[0]),z&8&&S(E.value)!==N[3].interactionRange&&$(E,N[3].interactionRange),z&8&&S(W.value)!==N[3].drag&&$(W,N[3].drag),z&8&&S(Y.value)!==N[3].timeStep&&$(Y,N[3].timeStep)},i:de,o:de,d(N){N&&d(e),N&&d(n),N&&d(i),N&&d(a),N&&d(r),N&&d(f),N&&d(c),N&&d(ne),N&&d(q),ue=!1,Xt(Be)}}}function br(t,e,o){const n={width:800,height:600},i={width:10,height:10};let s=1,a=!1,r=!0;const f={interactionRange:70,drag:1e3,timeStep:10};function c(){const P=St();Te(P.canvas);const{ids:I,positions:k,colors:G}=mr({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"circle"});ur(P,{ids:I,colors:G,texDimensions:i});let X=_r(P,{positions:k,texDimensions:i});function j(){if(Te(P.canvas),!r)for(let J=0;J<s;J++)X=Ar({gl:P,texDimensions:i,interactionRange:f.interactionRange,drag:f.drag,deltaTime:f.timeStep});return dr({gl:P,positionTex:X,textureDimension:i,ids:I}),r?requestAnimationFrame(j):a?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}et(()=>c());const u=()=>o(2,r=!r),m=()=>o(1,a=!a);function T(){s=S(this.value),o(0,s)}function b(){f.interactionRange=S(this.value),o(3,f)}function g(){f.drag=S(this.value),o(3,f)}function L(){f.timeStep=S(this.value),o(3,f)}return[s,a,r,f,n,i,u,m,T,b,g,L]}class wr extends Ye{constructor(e){super(),Ve(this,e,br,gr,He,{})}}const Er=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

varying float v_color;
varying float v_id;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 5.0;
    v_color = color;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,Rr=`precision mediump float;
varying float v_color;
varying float v_id;

void main() {
    // if (v_id < 0.1) {
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    //     return;
    // }
    // if (v_id > 0.45 && v_id < 0.55) {
    //     gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
    //     return;
    // }
    // if (v_id > 0.9) {
    //     gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    //     return;
    // }
    gl_FragColor = vec4(0.2, 0.2, v_id, 1.0);
    gl_FragColor = vec4(0.2, 0.2, 1.0, 1.0);

    // if (v_color == 0.0) {
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 0.3);
    // } else if (v_color == 1.0){
    //     gl_FragColor = vec4(0.0, 1.0, 0.0, 0.3);
    // } else if (v_color == 2.0){
    //     gl_FragColor = vec4(0.0, 0.0, 1.0, 0.3);
    // } else if (v_color == 3.0){
    //     gl_FragColor = vec4(1.0, 1.0, 0.0, 0.3);
    // }
}
`;let It,Ot,Xn,kn;const Fr=(t,e)=>{const{ids:o,colors:n}=e;Ot=ye(t,[Er,Rr]),It={idAttributeLocation:t.getAttribLocation(Ot,"id"),colorAttributeLocation:t.getAttribLocation(Ot,"color"),texDimensionsUniformLocation:t.getUniformLocation(Ot,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ot,"u_resolution")},Xn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Xn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},yr=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,s=1,a=e.FLOAT,r=!1,f=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Xn),e.vertexAttribPointer(It.idAttributeLocation,s,a,r,f,c),e.enableVertexAttribArray(It.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,kn),e.vertexAttribPointer(It.colorAttributeLocation,s,a,r,f,c),e.enableVertexAttribArray(It.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Ot),e.uniform2f(It.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(It.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function Dr(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,s=new Array(i).fill(0).map((f,c)=>c),a=new Array(i).fill(0).map(f=>Math.floor(Math.random()*4)),r=s.map(f=>{if(n==="random"){const{x:c,y:u}=Ur(o);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=Pr(o,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Lr(o,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Br(o,f,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Fo(o,f,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Fo(o,f,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Ur=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Lr=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Pr=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,s=o*Math.sin(n)+t.height/2;return{x:i,y:s}},Br=(t,e,o)=>{const n=Wn(e,0,o,0,t.width,!1),i=Wn(e,0,o,0,t.height,!1);return{x:n,y:i}},Fo=(t,e,o,n)=>{const i=Wn(e,0,o,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*i)*200+t.width/2,f=n.y,u=Math.sin(f*i)*200+t.height/2;return{x:r,y:u}},Wn=function(t,e,o,n,i,s){const a=(t-e)/(o-e)*(i-n)+n;return s?n<i?yo(a,n,i):yo(a,i,n):a},yo=function(t,e,o){return Math.max(Math.min(t,o),e)},Ir=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,$r=`precision highp float;

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

`;let ut,dt,Yn,fn,Dn,Do,Uo,jt,xn;const Sr=(t,e)=>{const{positions:o,texDimensions:n}=e,i=$r.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return dt=ye(t,[Ir,i]),ut={positionAttributeLocation:t.getAttribLocation(dt,"position"),positionTexLocation:t.getUniformLocation(dt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(dt,"interactionRange"),dragUniformLocation:t.getUniformLocation(dt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(dt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},Yn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Yn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),fn=Re(t,new Float32Array(o),n.width,n.height),Dn=Re(t,null,n.width,n.height),Do=Oe(t,fn),Uo=Oe(t,Dn),jt={fb:Do,tex:fn},xn={fb:Uo,tex:Dn},fn},Cr=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,xn.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Yn),e.enableVertexAttribArray(ut.positionAttributeLocation),e.vertexAttribPointer(ut.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,jt.tex),e.useProgram(dt),e.uniform1i(ut.positionTexLocation,0),e.uniform1f(ut.dragUniformLocation,i),e.uniform1f(ut.interactionRangeUniformLocation,n),e.uniform1f(ut.deltaTimeUniformLocation,s),e.uniform2f(ut.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=jt;jt=xn,xn=a}return jt.tex};function Mr(t){let e,o,n,i,s,a,r,f,c,u,m,T,b,g=t[2]?"Play":"Pause",L,P,I,k=t[1]?"Normal Speed":"Slow Mo",G,X,j,J,H=t[5].width*t[5].height+"",ie,Q,M,ne,q,w,C,Z,oe,xe,E,ce,ee,re,we,_e,W,Ue,fe,ae,Le,Ae,Y,Pe,he,ue,Be,N,z,$e;return{c(){e=h("p"),o=R("This could be a kind of water simulation."),n=_(),i=h("p"),s=R(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),a=_(),r=h("p"),f=R("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=_(),u=h("canvas"),m=_(),T=h("div"),b=h("button"),L=R(g),P=_(),I=h("button"),G=R(k),X=_(),j=h("span"),J=R("particles: "),ie=R(H),Q=_(),M=h("label"),ne=R("Smooth steps"),q=_(),w=h("input"),C=_(),Z=h("div"),oe=h("ul"),xe=h("li"),E=h("label"),ce=R("Interaction Range"),ee=_(),re=h("input"),we=_(),_e=h("li"),W=h("label"),Ue=R("Drag"),fe=_(),ae=h("input"),Le=_(),Ae=h("li"),Y=h("label"),Pe=R("Time step"),he=_(),ue=h("input"),Be=_(),N=h("ul"),this.h()},l(y){e=p(y,"P",{});var te=x(e);o=F(te,"This could be a kind of water simulation."),te.forEach(d),n=A(y),i=p(y,"P",{});var Se=x(i);s=F(Se,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Se.forEach(d),a=A(y),r=p(y,"P",{});var Ie=x(r);f=F(Ie,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Ie.forEach(d),c=A(y),u=p(y,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(u).forEach(d),m=A(y),T=p(y,"DIV",{});var K=x(T);b=p(K,"BUTTON",{});var Ce=x(b);L=F(Ce,g),Ce.forEach(d),P=A(K),I=p(K,"BUTTON",{});var le=x(I);G=F(le,k),le.forEach(d),X=A(K),j=p(K,"SPAN",{});var ge=x(j);J=F(ge,"particles: "),ie=F(ge,H),ge.forEach(d),Q=A(K),M=p(K,"LABEL",{for:!0});var Me=x(M);ne=F(Me,"Smooth steps"),Me.forEach(d),q=A(K),w=p(K,"INPUT",{type:!0,min:!0}),K.forEach(d),C=A(y),Z=p(y,"DIV",{});var me=x(Z);oe=p(me,"UL",{});var pe=x(oe);xe=p(pe,"LI",{});var be=x(xe);E=p(be,"LABEL",{for:!0});var De=x(E);ce=F(De,"Interaction Range"),De.forEach(d),ee=A(be),re=p(be,"INPUT",{id:!0,type:!0,min:!0}),be.forEach(d),we=A(pe),_e=p(pe,"LI",{});var We=x(_e);W=p(We,"LABEL",{for:!0});var U=x(W);Ue=F(U,"Drag"),U.forEach(d),fe=A(We),ae=p(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),Le=A(pe),Ae=p(pe,"LI",{});var B=x(Ae);Y=p(B,"LABEL",{for:!0});var Ee=x(Y);Pe=F(Ee,"Time step"),Ee.forEach(d),he=A(B),ue=p(B,"INPUT",{id:!0,type:!0,min:!0}),B.forEach(d),Be=A(pe),N=p(pe,"UL",{}),x(N).forEach(d),pe.forEach(d),me.forEach(d),this.h()},h(){v(u,"id","canvas"),ot(u,"background-color","black"),v(u,"width",t[4].width),v(u,"height",t[4].height),v(M,"for","steps"),v(w,"type","number"),v(w,"min",0),v(E,"for","interactionRange"),v(re,"id","interactionRange"),v(re,"type","number"),v(re,"min",0),v(W,"for","drag"),v(ae,"id","drag"),v(ae,"type","number"),v(ae,"min",0),v(Y,"for","deltaTime"),v(ue,"id","deltaTime"),v(ue,"type","number"),v(ue,"min",0)},m(y,te){D(y,e,te),l(e,o),D(y,n,te),D(y,i,te),l(i,s),D(y,a,te),D(y,r,te),l(r,f),D(y,c,te),D(y,u,te),D(y,m,te),D(y,T,te),l(T,b),l(b,L),l(T,P),l(T,I),l(I,G),l(T,X),l(T,j),l(j,J),l(j,ie),l(T,Q),l(T,M),l(M,ne),l(T,q),l(T,w),$(w,t[0]),D(y,C,te),D(y,Z,te),l(Z,oe),l(oe,xe),l(xe,E),l(E,ce),l(xe,ee),l(xe,re),$(re,t[3].interactionRange),l(oe,we),l(oe,_e),l(_e,W),l(W,Ue),l(_e,fe),l(_e,ae),$(ae,t[3].drag),l(oe,Le),l(oe,Ae),l(Ae,Y),l(Y,Pe),l(Ae,he),l(Ae,ue),$(ue,t[3].timeStep),l(oe,Be),l(oe,N),z||($e=[V(b,"click",t[6]),V(I,"click",t[7]),V(w,"input",t[8]),V(re,"input",t[9]),V(ae,"input",t[10]),V(ue,"input",t[11])],z=!0)},p(y,[te]){te&4&&g!==(g=y[2]?"Play":"Pause")&&Ze(L,g),te&2&&k!==(k=y[1]?"Normal Speed":"Slow Mo")&&Ze(G,k),te&1&&S(w.value)!==y[0]&&$(w,y[0]),te&8&&S(re.value)!==y[3].interactionRange&&$(re,y[3].interactionRange),te&8&&S(ae.value)!==y[3].drag&&$(ae,y[3].drag),te&8&&S(ue.value)!==y[3].timeStep&&$(ue,y[3].timeStep)},i:de,o:de,d(y){y&&d(e),y&&d(n),y&&d(i),y&&d(a),y&&d(r),y&&d(c),y&&d(u),y&&d(m),y&&d(T),y&&d(C),y&&d(Z),z=!1,Xt($e)}}}function Nr(t,e,o){const n={width:800,height:600},i={width:500,height:20};let s=1,a=!1,r=!0;const f={interactionRange:6,drag:5,timeStep:10};function c(){const P=St();Te(P.canvas);const{ids:I,positions:k,colors:G}=Dr({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Fr(P,{ids:I,colors:G,texDimensions:i});let X=Sr(P,{positions:k,texDimensions:i});function j(){if(Te(P.canvas),!r)for(let J=0;J<s;J++)X=Cr({gl:P,texDimensions:i,interactionRange:f.interactionRange,drag:f.drag,deltaTime:f.timeStep});return yr({gl:P,positionTex:X,textureDimension:i,ids:I}),r?requestAnimationFrame(j):a?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}et(()=>c());const u=()=>o(2,r=!r),m=()=>o(1,a=!a);function T(){s=S(this.value),o(0,s)}function b(){f.interactionRange=S(this.value),o(3,f)}function g(){f.drag=S(this.value),o(3,f)}function L(){f.timeStep=S(this.value),o(3,f)}return[s,a,r,f,n,i,u,m,T,b,g,L]}class zr extends Ye{constructor(e){super(),Ve(this,e,Nr,Mr,He,{})}}const Or=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 worldDimensions;
uniform float size;


varying float v_color;
varying float v_id;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / worldDimensions;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = size;
    v_color = color;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,Xr=`precision mediump float;
varying float v_color;
varying float v_id;

const float u_radius = 0.5; // The radius of the particles

void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5)); // Calculate the distance to the center
    if (dist > u_radius) { // If outside the circle, discard the fragment
        discard;
    }
    gl_FragColor = vec4(0.2, 0.2, 1.0, 0.4);
}
`;let wt,$t,Vn,Hn;const kr=(t,e)=>{const{ids:o,colors:n}=e;$t=ye(t,[Or,Xr]),wt={idAttributeLocation:t.getAttribLocation($t,"id"),colorAttributeLocation:t.getAttribLocation($t,"color"),sizeUniformLocation:t.getUniformLocation($t,"size"),texDimensionsUniformLocation:t.getUniformLocation($t,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation($t,"worldDimensions")},Vn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Vn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Hn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Hn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Wr=t=>{const{gl:e,positionTex:o,texDimensions:n,worldDimensions:i,particlesSize:s,ids:a}=t,r=1,f=e.FLOAT,c=!1,u=0,m=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Vn),e.vertexAttribPointer(wt.idAttributeLocation,r,f,c,u,m),e.enableVertexAttribArray(wt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Hn),e.vertexAttribPointer(wt.colorAttributeLocation,r,f,c,u,m),e.enableVertexAttribArray(wt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram($t),e.uniform1f(wt.sizeUniformLocation,s),e.uniform2f(wt.worldDimensionsUniformLocation,i.width,i.height),e.uniform2f(wt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,m,a.length)};function Yr(t){const{texDimensions:e,worldDimensions:o,mode:n}=t,i=e.width*e.height,s=new Array(i).fill(0).map((f,c)=>c),a=new Array(i).fill(0).map(f=>Math.floor(Math.random()*4)),r=s.map(f=>{if(n==="random"){const{x:c,y:u}=Vr(o);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=qr(o,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Hr(o,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Gr(o,f,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Lo(o,f,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Lo(o,f,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Vr=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Hr=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},qr=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,s=o*Math.sin(n)+t.height/2;return{x:i,y:s}},Gr=(t,e,o)=>{const n=qn(e,0,o,0,t.width,!1),i=qn(e,0,o,0,t.height,!1);return{x:n,y:i}},Lo=(t,e,o,n)=>{const i=qn(e,0,o,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*i)*200+t.width/2,f=n.y,u=Math.sin(f*i)*200+t.height/2;return{x:r,y:u}},qn=function(t,e,o,n,i,s){const a=(t-e)/(o-e)*(i-n)+n;return s?n<i?Po(a,n,i):Po(a,i,n):a},Po=function(t,e,o){return Math.max(Math.min(t,o),e)},jr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Kr=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;
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
    newPosition.x = euclideanModulo(position.x + direction.x, worldDimensions.x);

    if (newPosition.y >= worldDimensions.y - 5.0) {
        newPosition.y = worldDimensions.y - 7.0;
    }

    // if (newPosition.x >= worldDimensions.x - 5.0) {
    //     newPosition.x = worldDimensions.x - 7.0;
    // }

    // if (newPosition.x <  5.0) {
    //     newPosition.x = 7.0;
    // }

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let mt,ht,Gn,un,Un,Bo,Io,Kt,Tn;const Jr=(t,e)=>{const{positions:o,texDimensions:n}=e,i=Kr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return ht=ye(t,[jr,i]),mt={positionAttributeLocation:t.getAttribLocation(ht,"position"),positionTexLocation:t.getUniformLocation(ht,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ht,"interactionRange"),dragUniformLocation:t.getUniformLocation(ht,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ht,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ht,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(ht,"worldDimensions")},Gn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),un=Re(t,new Float32Array(o),n.width,n.height),Un=Re(t,null,n.width,n.height),Bo=Oe(t,un),Io=Oe(t,Un),Kt={fb:Bo,tex:un},Tn={fb:Io,tex:Un},un},Qr=t=>{const{gl:e,texDimensions:o,worldDimensions:n,interactionRange:i,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Tn.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Gn),e.enableVertexAttribArray(mt.positionAttributeLocation),e.vertexAttribPointer(mt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Kt.tex),e.useProgram(ht),e.uniform1i(mt.positionTexLocation,0),e.uniform1f(mt.dragUniformLocation,s),e.uniform1f(mt.interactionRangeUniformLocation,i),e.uniform1f(mt.deltaTimeUniformLocation,a),e.uniform2f(mt.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(mt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Kt;Kt=Tn,Tn=r}return Kt.tex};function Zr(t){let e,o,n,i,s,a,r,f=t[3]?"Play":"Pause",c,u,m,T=t[2]?"Normal Speed":"Slow Mo",b,g,L,P,I=t[6].width*t[6].height+"",k,G,X,j,J,H,ie,Q,M,ne,q,w,C,Z,oe,xe,E,ce,ee,re,we,_e,W,Ue,fe,ae,Le,Ae,Y,Pe,he,ue,Be,N,z,$e,y,te,Se,Ie,K,Ce,le,ge,Me,me,pe,be,De,We;return{c(){e=h("p"),o=R(`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),n=_(),i=h("canvas"),s=_(),a=h("div"),r=h("button"),c=R(f),u=_(),m=h("button"),b=R(T),g=_(),L=h("span"),P=R("particles: "),k=R(I),G=_(),X=h("label"),j=R("Smooth steps"),J=_(),H=h("input"),ie=_(),Q=h("button"),M=R("Reset"),ne=_(),q=h("div"),w=h("ul"),C=h("li"),Z=h("label"),oe=R("Interaction Range"),xe=_(),E=h("input"),ce=_(),ee=h("li"),re=h("label"),we=R("Drag"),_e=_(),W=h("input"),Ue=_(),fe=h("li"),ae=h("label"),Le=R("Time step"),Ae=_(),Y=h("input"),Pe=_(),he=h("li"),ue=h("label"),Be=R("Particles size"),N=_(),z=h("input"),$e=_(),y=h("li"),te=h("label"),Se=R("World: width"),Ie=_(),K=h("input"),Ce=_(),le=h("label"),ge=R("height"),Me=_(),me=h("input"),pe=_(),be=h("ul"),this.h()},l(U){e=p(U,"P",{});var B=x(e);o=F(B,`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),B.forEach(d),n=A(U),i=p(U,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(i).forEach(d),s=A(U),a=p(U,"DIV",{});var Ee=x(a);r=p(Ee,"BUTTON",{});var qe=x(r);c=F(qe,f),qe.forEach(d),u=A(Ee),m=p(Ee,"BUTTON",{});var Ge=x(m);b=F(Ge,T),Ge.forEach(d),g=A(Ee),L=p(Ee,"SPAN",{});var it=x(L);P=F(it,"particles: "),k=F(it,I),it.forEach(d),G=A(Ee),X=p(Ee,"LABEL",{for:!0});var st=x(X);j=F(st,"Smooth steps"),st.forEach(d),J=A(Ee),H=p(Ee,"INPUT",{type:!0,min:!0}),ie=A(Ee),Q=p(Ee,"BUTTON",{});var Xe=x(Q);M=F(Xe,"Reset"),Xe.forEach(d),Ee.forEach(d),ne=A(U),q=p(U,"DIV",{});var lt=x(q);w=p(lt,"UL",{});var ve=x(w);C=p(ve,"LI",{});var je=x(C);Z=p(je,"LABEL",{for:!0});var Tt=x(Z);oe=F(Tt,"Interaction Range"),Tt.forEach(d),xe=A(je),E=p(je,"INPUT",{id:!0,type:!0,min:!0}),je.forEach(d),ce=A(ve),ee=p(ve,"LI",{});var tt=x(ee);re=p(tt,"LABEL",{for:!0});var nt=x(re);we=F(nt,"Drag"),nt.forEach(d),_e=A(tt),W=p(tt,"INPUT",{id:!0,type:!0,min:!0}),tt.forEach(d),Ue=A(ve),fe=p(ve,"LI",{});var O=x(fe);ae=p(O,"LABEL",{for:!0});var se=x(ae);Le=F(se,"Time step"),se.forEach(d),Ae=A(O),Y=p(O,"INPUT",{id:!0,type:!0,min:!0}),O.forEach(d),Pe=A(ve),he=p(ve,"LI",{});var Ne=x(he);ue=p(Ne,"LABEL",{for:!0});var _t=x(ue);Be=F(_t,"Particles size"),_t.forEach(d),N=A(Ne),z=p(Ne,"INPUT",{id:!0,type:!0,min:!0}),Ne.forEach(d),$e=A(ve),y=p(ve,"LI",{});var Fe=x(y);te=p(Fe,"LABEL",{for:!0});var At=x(te);Se=F(At,"World: width"),At.forEach(d),Ie=A(Fe),K=p(Fe,"INPUT",{id:!0,type:!0,min:!0}),Ce=A(Fe),le=p(Fe,"LABEL",{for:!0});var gt=x(le);ge=F(gt,"height"),gt.forEach(d),Me=A(Fe),me=p(Fe,"INPUT",{id:!0,type:!0,min:!0}),Fe.forEach(d),pe=A(ve),be=p(ve,"UL",{}),x(be).forEach(d),ve.forEach(d),lt.forEach(d),this.h()},h(){v(i,"id","canvas"),ot(i,"background-color","black"),v(i,"width",t[5].width),v(i,"height",t[5].height),v(X,"for","steps"),v(H,"type","number"),v(H,"min",0),v(Z,"for","interactionRange"),v(E,"id","interactionRange"),v(E,"type","number"),v(E,"min",0),v(re,"for","drag"),v(W,"id","drag"),v(W,"type","number"),v(W,"min",0),v(ae,"for","deltaTime"),v(Y,"id","deltaTime"),v(Y,"type","number"),v(Y,"min",0),v(ue,"for","particlesSize"),v(z,"id","particlesSize"),v(z,"type","number"),v(z,"min",0),v(te,"for","worldWidth"),v(K,"id","worldWidth"),v(K,"type","number"),v(K,"min",0),v(le,"for","worldHeight"),v(me,"id","worldHeight"),v(me,"type","number"),v(me,"min",0)},m(U,B){D(U,e,B),l(e,o),D(U,n,B),D(U,i,B),D(U,s,B),D(U,a,B),l(a,r),l(r,c),l(a,u),l(a,m),l(m,b),l(a,g),l(a,L),l(L,P),l(L,k),l(a,G),l(a,X),l(X,j),l(a,J),l(a,H),$(H,t[1]),l(a,ie),l(a,Q),l(Q,M),D(U,ne,B),D(U,q,B),l(q,w),l(w,C),l(C,Z),l(Z,oe),l(C,xe),l(C,E),$(E,t[4].interactionRange),l(w,ce),l(w,ee),l(ee,re),l(re,we),l(ee,_e),l(ee,W),$(W,t[4].drag),l(w,Ue),l(w,fe),l(fe,ae),l(ae,Le),l(fe,Ae),l(fe,Y),$(Y,t[4].timeStep),l(w,Pe),l(w,he),l(he,ue),l(ue,Be),l(he,N),l(he,z),$(z,t[4].particlesSize),l(w,$e),l(w,y),l(y,te),l(te,Se),l(y,Ie),l(y,K),$(K,t[0].width),l(y,Ce),l(y,le),l(le,ge),l(y,Me),l(y,me),$(me,t[0].height),l(w,pe),l(w,be),De||(We=[V(r,"click",t[8]),V(m,"click",t[9]),V(H,"input",t[10]),V(Q,"click",t[11]),V(E,"input",t[12]),V(W,"input",t[13]),V(Y,"input",t[14]),V(z,"input",t[15]),V(K,"input",t[16]),V(me,"input",t[17])],De=!0)},p(U,[B]){B&8&&f!==(f=U[3]?"Play":"Pause")&&Ze(c,f),B&4&&T!==(T=U[2]?"Normal Speed":"Slow Mo")&&Ze(b,T),B&2&&S(H.value)!==U[1]&&$(H,U[1]),B&16&&S(E.value)!==U[4].interactionRange&&$(E,U[4].interactionRange),B&16&&S(W.value)!==U[4].drag&&$(W,U[4].drag),B&16&&S(Y.value)!==U[4].timeStep&&$(Y,U[4].timeStep),B&16&&S(z.value)!==U[4].particlesSize&&$(z,U[4].particlesSize),B&1&&S(K.value)!==U[0].width&&$(K,U[0].width),B&1&&S(me.value)!==U[0].height&&$(me,U[0].height)},i:de,o:de,d(U){U&&d(e),U&&d(n),U&&d(i),U&&d(s),U&&d(a),U&&d(ne),U&&d(q),De=!1,Xt(We)}}}function ea(t,e,o){const n={width:800,height:600},i={width:1200,height:500},s={width:200,height:20};let a=10,r=!1,f=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:20};let u,m;function T(){cancelAnimationFrame(m),u=St(),Te(u.canvas);const{ids:H,positions:ie,colors:Q}=Yr({texDimensions:s,worldDimensions:i,mode:"disk"});kr(u,{ids:H,colors:Q,texDimensions:s});let M=Jr(u,{positions:ie,texDimensions:s});function ne(){if(Te(u.canvas),!f)for(let q=0;q<a;q++)M=Qr({gl:u,texDimensions:s,worldDimensions:i,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Wr({gl:u,positionTex:M,texDimensions:s,worldDimensions:i,particlesSize:c.particlesSize,ids:H}),r?setTimeout(()=>m=requestAnimationFrame(ne),1e3):m=requestAnimationFrame(ne)}m=requestAnimationFrame(ne)}et(()=>T());const b=()=>o(3,f=!f),g=()=>o(2,r=!r);function L(){a=S(this.value),o(1,a)}const P=()=>T();function I(){c.interactionRange=S(this.value),o(4,c)}function k(){c.drag=S(this.value),o(4,c)}function G(){c.timeStep=S(this.value),o(4,c)}function X(){c.particlesSize=S(this.value),o(4,c)}function j(){i.width=S(this.value),o(0,i)}function J(){i.height=S(this.value),o(0,i)}return[i,a,r,f,c,n,s,T,b,g,L,P,I,k,G,X,j,J]}class ta extends Ye{constructor(e){super(),Ve(this,e,ea,Zr,He,{})}}const na=`attribute float id;

uniform float size;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;

uniform sampler2D positionTex;
uniform sampler2D colorTex;

varying float v_color;
varying float v_id;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the color from the texture
    float colorFromTex = getValueFrom2DTextureAs1DArray(colorTex, texDimensions, id).x;

    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / worldDimensions;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = size;
    v_color = colorFromTex;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,oa=`precision mediump float;
varying float v_color;
varying float v_id;

const float u_radius = 0.5; // The radius of the particles

void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5)); // Calculate the distance to the center
    if (dist > u_radius) { // If outside the circle, discard the fragment
        discard;
    }

    // if (v_color == 0.0) {
    //     gl_FragColor = vec4(1.0, 0.3, 0.6, 1.0);
    // } else {
    //     gl_FragColor = vec4(0.6, 0.3, 1.0, 1.0);
    // }

    if (v_color == 0.0) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else if (v_color == 1.0) {
        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    } else if (v_color == 2.0) {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    } else {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }

}
`;let Et,Rt,jn,Zo;const ia=(t,e)=>{const{ids:o,colors:n,texDimensions:i}=e;Rt=ye(t,[na,oa]),Et={idAttributeLocation:t.getAttribLocation(Rt,"id"),sizeUniformLocation:t.getUniformLocation(Rt,"size"),texDimensionsUniformLocation:t.getUniformLocation(Rt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Rt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Rt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Rt,"colorTex")},jn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,jn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW);const s=n.map(a=>[a,0,0,0]).flat();Zo=Re(t,new Float32Array(s),i.width,i.height)},ra=t=>{const{gl:e,positionTex:o,texDimensions:n,worldDimensions:i,particlesSize:s,ids:a}=t,r=1,f=e.FLOAT,c=!1,u=0,m=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,jn),e.vertexAttribPointer(Et.idAttributeLocation,r,f,c,u,m),e.enableVertexAttribArray(Et.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Zo),e.useProgram(Rt),e.uniform1f(Et.sizeUniformLocation,s),e.uniform2f(Et.worldDimensionsUniformLocation,i.width,i.height),e.uniform2f(Et.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Et.positionTexUniformLocation,0),e.uniform1i(Et.colorTexUniformLocation,1),e.drawArrays(e.POINTS,m,a.length)};function aa(t,e,o){function n(){const s=t.getElementById(e);s&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),s.width=o.width,s.height=o.height)}function i(){const s=t.getElementById(e);s&&(t.fullscreenElement||s.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:i,disableFullscreen:n}}function sa(t){const{texDimensions:e,worldDimensions:o,mode:n}=t,i=e.width*e.height,s=new Array(i).fill(0).map((f,c)=>c),a=new Array(i).fill(0).map(f=>Math.floor(Math.random()*3)),r=s.map(f=>{if(n==="random"){const{x:c,y:u}=la(o);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=fa(o,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=ca(o,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=ua(o,f,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=$o(o,f,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=$o(o,f,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const la=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},ca=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},fa=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,s=o*Math.sin(n)+t.height/2;return{x:i,y:s}},ua=(t,e,o)=>{const n=Kn(e,0,o,0,t.width,!1),i=Kn(e,0,o,0,t.height,!1);return{x:n,y:i}},$o=(t,e,o,n)=>{const i=Kn(e,0,o,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*i)*200+t.width/2,f=n.y,u=Math.sin(f*i)*200+t.height/2;return{x:r,y:u}},Kn=function(t,e,o,n,i,s){const a=(t-e)/(o-e)*(i-n)+n;return s?n<i?So(a,n,i):So(a,i,n):a},So=function(t,e,o){return Math.max(Math.min(t,o),e)},da=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ma=`precision highp float;

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
    direction = (direction * deltaTime * color) / drag;
    direction = direction + gravity;

    vec2 newPosition = position + direction;
    newPosition.x = euclideanModulo(position.x + direction.x, worldDimensions.x);

    if (newPosition.y >= worldDimensions.y - 5.0) {
        newPosition.y = worldDimensions.y - 7.0;
    }

    // if (newPosition.x >= worldDimensions.x - 5.0) {
    //     newPosition.x = worldDimensions.x - 7.0;
    // }

    // if (newPosition.x <  5.0) {
    //     newPosition.x = 7.0;
    // }

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let rt,at,Jn,dn,Ln,Co,Mo,Jt,_n,ei;const ha=(t,e)=>{const{positions:o,colors:n,texDimensions:i}=e,s=ma.replace("{{TEX_WIDTH}}",i.width.toFixed(1)).replace("{{TEX_HEIGHT}}",i.height.toFixed(1));at=ye(t,[da,s]),rt={positionAttributeLocation:t.getAttribLocation(at,"position"),interactionRangeUniformLocation:t.getUniformLocation(at,"interactionRange"),dragUniformLocation:t.getUniformLocation(at,"drag"),deltaTimeUniformLocation:t.getUniformLocation(at,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(at,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(at,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(at,"positionTex"),colorTexUniformLocation:t.getUniformLocation(at,"colorTex")},Jn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Jn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),dn=Re(t,new Float32Array(o),i.width,i.height),Ln=Re(t,null,i.width,i.height);const a=n.map(r=>[r,0,0,0]).flat();return ei=Re(t,new Float32Array(a),i.width,i.height),Co=Oe(t,dn),Mo=Oe(t,Ln),Jt={fb:Co,tex:dn},_n={fb:Mo,tex:Ln},dn},pa=t=>{const{gl:e,texDimensions:o,worldDimensions:n,interactionRange:i,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,_n.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Jn),e.enableVertexAttribArray(rt.positionAttributeLocation),e.vertexAttribPointer(rt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Jt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ei),e.useProgram(at),e.uniform1i(rt.positionTexUniformLocation,0),e.uniform1i(rt.colorTexUniformLocation,1),e.uniform1f(rt.dragUniformLocation,s),e.uniform1f(rt.interactionRangeUniformLocation,i),e.uniform1f(rt.deltaTimeUniformLocation,a),e.uniform2f(rt.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(rt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Jt;Jt=_n,_n=r}return Jt.tex};function va(t){let e,o,n,i,s=t[3]?"Play":"Pause",a,r,f,c=t[2]?"Normal Speed":"Slow Mo",u,m,T,b,g=t[6].width*t[6].height+"",L,P,I,k,G,X,j,J,H,ie,Q,M,ne,q,w,C,Z,oe,xe,E,ce,ee,re,we,_e,W,Ue,fe,ae,Le,Ae,Y,Pe,he,ue,Be,N,z,$e,y,te,Se,Ie,K,Ce,le,ge,Me,me,pe,be,De,We;return{c(){e=h("canvas"),o=_(),n=h("div"),i=h("button"),a=R(s),r=_(),f=h("button"),u=R(c),m=_(),T=h("span"),b=R("particles: "),L=R(g),P=_(),I=h("label"),k=R("Smooth steps"),G=_(),X=h("input"),j=_(),J=h("button"),H=R("Reset"),ie=_(),Q=h("button"),M=R("Fullscreen"),ne=_(),q=h("div"),w=h("ul"),C=h("li"),Z=h("label"),oe=R("Interaction Range"),xe=_(),E=h("input"),ce=_(),ee=h("li"),re=h("label"),we=R("Drag"),_e=_(),W=h("input"),Ue=_(),fe=h("li"),ae=h("label"),Le=R("Time step"),Ae=_(),Y=h("input"),Pe=_(),he=h("li"),ue=h("label"),Be=R("Particles size"),N=_(),z=h("input"),$e=_(),y=h("li"),te=h("label"),Se=R("World: width"),Ie=_(),K=h("input"),Ce=_(),le=h("label"),ge=R("height"),Me=_(),me=h("input"),pe=_(),be=h("ul"),this.h()},l(U){e=p(U,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(e).forEach(d),o=A(U),n=p(U,"DIV",{});var B=x(n);i=p(B,"BUTTON",{});var Ee=x(i);a=F(Ee,s),Ee.forEach(d),r=A(B),f=p(B,"BUTTON",{});var qe=x(f);u=F(qe,c),qe.forEach(d),m=A(B),T=p(B,"SPAN",{});var Ge=x(T);b=F(Ge,"particles: "),L=F(Ge,g),Ge.forEach(d),P=A(B),I=p(B,"LABEL",{for:!0});var it=x(I);k=F(it,"Smooth steps"),it.forEach(d),G=A(B),X=p(B,"INPUT",{type:!0,min:!0}),j=A(B),J=p(B,"BUTTON",{});var st=x(J);H=F(st,"Reset"),st.forEach(d),ie=A(B),Q=p(B,"BUTTON",{});var Xe=x(Q);M=F(Xe,"Fullscreen"),Xe.forEach(d),B.forEach(d),ne=A(U),q=p(U,"DIV",{});var lt=x(q);w=p(lt,"UL",{});var ve=x(w);C=p(ve,"LI",{});var je=x(C);Z=p(je,"LABEL",{for:!0});var Tt=x(Z);oe=F(Tt,"Interaction Range"),Tt.forEach(d),xe=A(je),E=p(je,"INPUT",{id:!0,type:!0,min:!0}),je.forEach(d),ce=A(ve),ee=p(ve,"LI",{});var tt=x(ee);re=p(tt,"LABEL",{for:!0});var nt=x(re);we=F(nt,"Drag"),nt.forEach(d),_e=A(tt),W=p(tt,"INPUT",{id:!0,type:!0,min:!0}),tt.forEach(d),Ue=A(ve),fe=p(ve,"LI",{});var O=x(fe);ae=p(O,"LABEL",{for:!0});var se=x(ae);Le=F(se,"Time step"),se.forEach(d),Ae=A(O),Y=p(O,"INPUT",{id:!0,type:!0,min:!0}),O.forEach(d),Pe=A(ve),he=p(ve,"LI",{});var Ne=x(he);ue=p(Ne,"LABEL",{for:!0});var _t=x(ue);Be=F(_t,"Particles size"),_t.forEach(d),N=A(Ne),z=p(Ne,"INPUT",{id:!0,type:!0,min:!0}),Ne.forEach(d),$e=A(ve),y=p(ve,"LI",{});var Fe=x(y);te=p(Fe,"LABEL",{for:!0});var At=x(te);Se=F(At,"World: width"),At.forEach(d),Ie=A(Fe),K=p(Fe,"INPUT",{id:!0,type:!0,min:!0}),Ce=A(Fe),le=p(Fe,"LABEL",{for:!0});var gt=x(le);ge=F(gt,"height"),gt.forEach(d),Me=A(Fe),me=p(Fe,"INPUT",{id:!0,type:!0,min:!0}),Fe.forEach(d),pe=A(ve),be=p(ve,"UL",{}),x(be).forEach(d),ve.forEach(d),lt.forEach(d),this.h()},h(){v(e,"id","canvas"),ot(e,"background-color","black"),v(e,"width",t[5].width),v(e,"height",t[5].height),v(I,"for","steps"),v(X,"type","number"),v(X,"min",0),v(Z,"for","interactionRange"),v(E,"id","interactionRange"),v(E,"type","number"),v(E,"min",0),v(re,"for","drag"),v(W,"id","drag"),v(W,"type","number"),v(W,"min",0),v(ae,"for","deltaTime"),v(Y,"id","deltaTime"),v(Y,"type","number"),v(Y,"min",0),v(ue,"for","particlesSize"),v(z,"id","particlesSize"),v(z,"type","number"),v(z,"min",0),v(te,"for","worldWidth"),v(K,"id","worldWidth"),v(K,"type","number"),v(K,"min",0),v(le,"for","worldHeight"),v(me,"id","worldHeight"),v(me,"type","number"),v(me,"min",0)},m(U,B){D(U,e,B),D(U,o,B),D(U,n,B),l(n,i),l(i,a),l(n,r),l(n,f),l(f,u),l(n,m),l(n,T),l(T,b),l(T,L),l(n,P),l(n,I),l(I,k),l(n,G),l(n,X),$(X,t[1]),l(n,j),l(n,J),l(J,H),l(n,ie),l(n,Q),l(Q,M),D(U,ne,B),D(U,q,B),l(q,w),l(w,C),l(C,Z),l(Z,oe),l(C,xe),l(C,E),$(E,t[4].interactionRange),l(w,ce),l(w,ee),l(ee,re),l(re,we),l(ee,_e),l(ee,W),$(W,t[4].drag),l(w,Ue),l(w,fe),l(fe,ae),l(ae,Le),l(fe,Ae),l(fe,Y),$(Y,t[4].timeStep),l(w,Pe),l(w,he),l(he,ue),l(ue,Be),l(he,N),l(he,z),$(z,t[4].particlesSize),l(w,$e),l(w,y),l(y,te),l(te,Se),l(y,Ie),l(y,K),$(K,t[0].width),l(y,Ce),l(y,le),l(le,ge),l(y,Me),l(y,me),$(me,t[0].height),l(w,pe),l(w,be),De||(We=[V(i,"click",t[9]),V(f,"click",t[10]),V(X,"input",t[11]),V(J,"click",t[12]),V(Q,"click",t[8]),V(E,"input",t[13]),V(W,"input",t[14]),V(Y,"input",t[15]),V(z,"input",t[16]),V(K,"input",t[17]),V(me,"input",t[18])],De=!0)},p(U,[B]){B&8&&s!==(s=U[3]?"Play":"Pause")&&Ze(a,s),B&4&&c!==(c=U[2]?"Normal Speed":"Slow Mo")&&Ze(u,c),B&2&&S(X.value)!==U[1]&&$(X,U[1]),B&16&&S(E.value)!==U[4].interactionRange&&$(E,U[4].interactionRange),B&16&&S(W.value)!==U[4].drag&&$(W,U[4].drag),B&16&&S(Y.value)!==U[4].timeStep&&$(Y,U[4].timeStep),B&16&&S(z.value)!==U[4].particlesSize&&$(z,U[4].particlesSize),B&1&&S(K.value)!==U[0].width&&$(K,U[0].width),B&1&&S(me.value)!==U[0].height&&$(me,U[0].height)},i:de,o:de,d(U){U&&d(e),U&&d(o),U&&d(n),U&&d(ne),U&&d(q),De=!1,Xt(We)}}}function xa(t,e,o){const n={width:800,height:600},i={width:800,height:600},s={width:500,height:10};let a=10,r=!1,f=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let u,m;function T(){cancelAnimationFrame(m),u=St(),Te(u.canvas);const{ids:ie,positions:Q,colors:M}=sa({texDimensions:s,worldDimensions:i,mode:"disk"});ia(u,{ids:ie,colors:M,texDimensions:s});let ne=ha(u,{positions:Q,colors:M,texDimensions:s});function q(){if(!f)for(let w=0;w<a;w++)ne=pa({gl:u,texDimensions:s,worldDimensions:i,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return ra({gl:u,positionTex:ne,texDimensions:s,worldDimensions:i,particlesSize:c.particlesSize,ids:ie}),r?setTimeout(()=>m=requestAnimationFrame(q),1e3):m=requestAnimationFrame(q)}m=requestAnimationFrame(q)}const{enableFullscreen:b}=aa(document,"canvas",n);document.addEventListener("keydown",ie=>{ie.code==="Space"&&(o(3,f=!f),ie.preventDefault())}),et(()=>T());const g=()=>o(3,f=!f),L=()=>o(2,r=!r);function P(){a=S(this.value),o(1,a)}const I=()=>T();function k(){c.interactionRange=S(this.value),o(4,c)}function G(){c.drag=S(this.value),o(4,c)}function X(){c.timeStep=S(this.value),o(4,c)}function j(){c.particlesSize=S(this.value),o(4,c)}function J(){i.width=S(this.value),o(0,i)}function H(){i.height=S(this.value),o(0,i)}return[i,a,r,f,c,n,s,T,b,g,L,P,I,k,G,X,j,J,H]}class Ta extends Ye{constructor(e){super(),Ve(this,e,xa,va,He,{})}}const _a=`attribute float id;

uniform float size;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;

uniform sampler2D positionTex;
uniform sampler2D colorTex;

varying float v_color;
varying float v_id;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the color from the texture
    float colorFromTex = getValueFrom2DTextureAs1DArray(colorTex, texDimensions, id).x;

    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / worldDimensions;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = size;
    v_color = colorFromTex;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,Aa=`precision mediump float;
varying float v_color;
varying float v_id;

const float u_radius = 0.5; // The radius of the particles

void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5)); // Calculate the distance to the center
    if (dist > u_radius) { // If outside the circle, discard the fragment
        discard;
    }

    if (v_color == 0.0) {
        gl_FragColor = vec4(0.21, 0.64, 0.84, 1.0);
    } else if (v_color == 1.0) {
        gl_FragColor = vec4(0.84, 0.21, 0.64, 1.0);
    } else if (v_color == 2.0) {
        gl_FragColor = vec4(0.64, 0.84, 0.21, 1.0);
    } else {
        // Should not happen
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }

}
`;let Ft,yt,Qn,ti;const ga=(t,e)=>{const{ids:o,colors:n,texDimensions:i}=e;yt=ye(t,[_a,Aa]),Ft={idAttributeLocation:t.getAttribLocation(yt,"id"),sizeUniformLocation:t.getUniformLocation(yt,"size"),texDimensionsUniformLocation:t.getUniformLocation(yt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(yt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(yt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(yt,"colorTex")},Qn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Qn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW);const s=n.map(a=>[a,0,0,0]).flat();ti=Re(t,new Float32Array(s),i.width,i.height)},ba=t=>{const{gl:e,positionTex:o,texDimensions:n,worldDimensions:i,particlesSize:s,ids:a}=t,r=1,f=e.FLOAT,c=!1,u=0,m=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Qn),e.vertexAttribPointer(Ft.idAttributeLocation,r,f,c,u,m),e.enableVertexAttribArray(Ft.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ti),e.useProgram(yt),e.uniform1f(Ft.sizeUniformLocation,s),e.uniform2f(Ft.worldDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ft.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Ft.positionTexUniformLocation,0),e.uniform1i(Ft.colorTexUniformLocation,1),e.drawArrays(e.POINTS,m,a.length)};function wa(t,e,o){function n(){const s=t.getElementById(e);s&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),s.width=o.width,s.height=o.height)}function i(){const s=t.getElementById(e);s&&(t.fullscreenElement||s.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:i,disableFullscreen:n}}function Ea(t){const{texDimensions:e,worldDimensions:o,mode:n,nbColors:i}=t,s=e.width*e.height,a=new Array(s).fill(0).map((c,u)=>u),r=new Array(s).fill(0).map(c=>Math.floor(Math.random()*i)),f=a.map(c=>{if(n==="random"){const{x:u,y:m}=Ra(o);return[u,m,0,0]}if(n==="mesh"){const{x:u,y:m}=La(o,c,s);return[u,m,0,0]}if(n==="disk"){const u=Math.min(o.width,o.height)*.3,{x:m,y:T}=ya(o,u);return[m,T,0,0]}if(n==="disk_offset"){const{x:T,y:b}=Da(o,100,-150);return[T,b,0,0]}if(n==="square"){const{x:m,y:T}=Fa(o,300);return[m,T,0,0]}if(n==="idDiagonal"){const{x:u,y:m}=Ua(o,c,a.length);return[u,m,0,0]}if(n==="sinusoidal"){const{x:u,y:m}=No(o,c,a.length,{x:1,y:5});return[u,m,0,0]}if(n==="circle"){const{x:u,y:m}=No(o,c,a.length,{x:1,y:1});return[u,m,0,0]}}).flat();return{ids:a,positions:f,texDimensions:e,colors:r}}const Ra=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Fa=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},ya=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,s=o*Math.sin(n)+t.height/2;return{x:i,y:s}},Da=(t,e,o)=>{const n=e*Math.random(),i=Math.random()*2*Math.PI,s=n*Math.cos(i)+t.width/2,a=n*Math.sin(i)+t.height/2;return{x:s+o,y:a}},Ua=(t,e,o)=>{const n=Zn(e,0,o,0,t.width,!1),i=Zn(e,0,o,0,t.height,!1);return{x:n,y:i}},No=(t,e,o,n)=>{const i=Zn(e,0,o,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*i)*200+t.width/2,f=n.y,u=Math.sin(f*i)*200+t.height/2;return{x:r,y:u}},La=(t,e,o)=>{const n=Math.sqrt(o),i=Math.ceil(o/n),s=t.width/i,a=t.height/n,r=e%i*s+s/2,f=Math.floor(e/i)*a+a/2;return{x:r,y:f}},Zn=function(t,e,o,n,i,s){const a=(t-e)/(o-e)*(i-n)+n;return s?n<i?zo(a,n,i):zo(a,i,n):a},zo=function(t,e,o){return Math.max(Math.min(t,o),e)},Pa=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Ba=`precision highp float;

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
`;let Je,Qe,eo,mn,Pn,Oo,Xo,Qt,An,ni;const Ia=(t,e)=>{const{positions:o,colors:n,texDimensions:i}=e,s=Ba.replace("{{TEX_WIDTH}}",i.width.toFixed(1)).replace("{{TEX_HEIGHT}}",i.height.toFixed(1));Qe=ye(t,[Pa,s]),Je={positionAttributeLocation:t.getAttribLocation(Qe,"position"),wallsModeUniformLocation:t.getUniformLocation(Qe,"wallsMode"),gravityFactorUniformLocation:t.getUniformLocation(Qe,"gravityFactor"),interactionRangeUniformLocation:t.getUniformLocation(Qe,"interactionRange"),dragUniformLocation:t.getUniformLocation(Qe,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Qe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Qe,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Qe,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Qe,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Qe,"colorTex")},eo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,eo),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),mn=Re(t,new Float32Array(o),i.width,i.height),Pn=Re(t,null,i.width,i.height);const a=n.map(r=>[r,0,0,0]).flat();return ni=Re(t,new Float32Array(a),i.width,i.height),Oo=Oe(t,mn),Xo=Oe(t,Pn),Qt={fb:Oo,tex:mn},An={fb:Xo,tex:Pn},mn},$a=t=>{const{gl:e,texDimensions:o,worldDimensions:n,wallsMode:i,gravityFactor:s,interactionRange:a,drag:r,deltaTime:f}=t;e.bindFramebuffer(e.FRAMEBUFFER,An.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,eo),e.enableVertexAttribArray(Je.positionAttributeLocation),e.vertexAttribPointer(Je.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Qt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ni),e.useProgram(Qe),e.uniform1i(Je.positionTexUniformLocation,0),e.uniform1i(Je.colorTexUniformLocation,1);const u={wraped:0,box:1,bottom_wall:2}[i];e.uniform1f(Je.wallsModeUniformLocation,u),e.uniform1f(Je.gravityFactorUniformLocation,s),e.uniform1f(Je.dragUniformLocation,r),e.uniform1f(Je.interactionRangeUniformLocation,a),e.uniform1f(Je.deltaTimeUniformLocation,f),e.uniform2f(Je.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Je.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const m=Qt;Qt=An,An=m}return Qt.tex};function Sa(t,e,o){const n=t.slice();return n[23]=e[o],n}function Ca(t){let e,o;return{c(){e=h("option"),o=R(t[23]),this.h()},l(n){e=p(n,"OPTION",{});var i=x(e);o=F(i,t[23]),i.forEach(d),this.h()},h(){e.__value=t[23],e.value=e.__value},m(n,i){D(n,e,i),l(e,o)},p:de,d(n){n&&d(e)}}}function Ma(t){let e,o,n,i,s=t[3]?"Play":"Pause",a,r,f,c=t[2]?"Normal Speed":"Slow Mo",u,m,T,b,g=t[6].width*t[6].height+"",L,P,I,k,G,X,j,J,H,ie,Q,M,ne,q,w,C,Z,oe,xe,E,ce,ee,re,we,_e,W,Ue,fe,ae,Le,Ae,Y,Pe,he,ue,Be,N,z,$e,y,te,Se,Ie,K,Ce,le,ge,Me,me,pe,be,De,We,U,B,Ee,qe,Ge,it,st,Xe,lt,ve,je,Tt,tt=["box","wraped","bottom_wall"],nt=[];for(let O=0;O<3;O+=1)nt[O]=Ca(Sa(t,tt,O));return{c(){e=h("canvas"),o=_(),n=h("div"),i=h("button"),a=R(s),r=_(),f=h("button"),u=R(c),m=_(),T=h("span"),b=R("particles: "),L=R(g),P=_(),I=h("label"),k=R("Smooth steps"),G=_(),X=h("input"),j=_(),J=h("button"),H=R("Reset"),ie=_(),Q=h("button"),M=R("Fullscreen"),ne=_(),q=h("div"),w=h("ul"),C=h("li"),Z=h("label"),oe=R("Interaction Range"),xe=_(),E=h("input"),ce=_(),ee=h("li"),re=h("label"),we=R("Drag"),_e=_(),W=h("input"),Ue=_(),fe=h("li"),ae=h("label"),Le=R("Time step"),Ae=_(),Y=h("input"),Pe=_(),he=h("li"),ue=h("label"),Be=R("Gravity factor"),N=_(),z=h("input"),$e=_(),y=h("li"),te=h("label"),Se=R("Particles size"),Ie=_(),K=h("input"),Ce=_(),le=h("li"),ge=h("label"),Me=R("World: width"),me=_(),pe=h("input"),be=_(),De=h("label"),We=R("height"),U=_(),B=h("input"),Ee=_(),qe=h("li"),Ge=h("label"),it=R("Walls mode"),st=_(),Xe=h("select");for(let O=0;O<3;O+=1)nt[O].c();lt=_(),ve=h("ul"),this.h()},l(O){e=p(O,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),x(e).forEach(d),o=A(O),n=p(O,"DIV",{});var se=x(n);i=p(se,"BUTTON",{});var Ne=x(i);a=F(Ne,s),Ne.forEach(d),r=A(se),f=p(se,"BUTTON",{});var _t=x(f);u=F(_t,c),_t.forEach(d),m=A(se),T=p(se,"SPAN",{});var Fe=x(T);b=F(Fe,"particles: "),L=F(Fe,g),Fe.forEach(d),P=A(se),I=p(se,"LABEL",{for:!0});var At=x(I);k=F(At,"Smooth steps"),At.forEach(d),G=A(se),X=p(se,"INPUT",{type:!0,min:!0}),j=A(se),J=p(se,"BUTTON",{});var gt=x(J);H=F(gt,"Reset"),gt.forEach(d),ie=A(se),Q=p(se,"BUTTON",{});var io=x(Q);M=F(io,"Fullscreen"),io.forEach(d),se.forEach(d),ne=A(O),q=p(O,"DIV",{});var ro=x(q);w=p(ro,"UL",{});var ze=x(w);C=p(ze,"LI",{});var Zt=x(C);Z=p(Zt,"LABEL",{for:!0});var ao=x(Z);oe=F(ao,"Interaction Range"),ao.forEach(d),xe=A(Zt),E=p(Zt,"INPUT",{id:!0,type:!0,min:!0}),Zt.forEach(d),ce=A(ze),ee=p(ze,"LI",{});var en=x(ee);re=p(en,"LABEL",{for:!0});var so=x(re);we=F(so,"Drag"),so.forEach(d),_e=A(en),W=p(en,"INPUT",{id:!0,type:!0,min:!0}),en.forEach(d),Ue=A(ze),fe=p(ze,"LI",{});var tn=x(fe);ae=p(tn,"LABEL",{for:!0});var lo=x(ae);Le=F(lo,"Time step"),lo.forEach(d),Ae=A(tn),Y=p(tn,"INPUT",{id:!0,type:!0,min:!0}),tn.forEach(d),Pe=A(ze),he=p(ze,"LI",{});var nn=x(he);ue=p(nn,"LABEL",{for:!0});var co=x(ue);Be=F(co,"Gravity factor"),co.forEach(d),N=A(nn),z=p(nn,"INPUT",{id:!0,type:!0,min:!0,max:!0}),nn.forEach(d),$e=A(ze),y=p(ze,"LI",{});var on=x(y);te=p(on,"LABEL",{for:!0});var fo=x(te);Se=F(fo,"Particles size"),fo.forEach(d),Ie=A(on),K=p(on,"INPUT",{id:!0,type:!0,min:!0}),on.forEach(d),Ce=A(ze),le=p(ze,"LI",{});var bt=x(le);ge=p(bt,"LABEL",{for:!0});var uo=x(ge);Me=F(uo,"World: width"),uo.forEach(d),me=A(bt),pe=p(bt,"INPUT",{id:!0,type:!0,min:!0}),be=A(bt),De=p(bt,"LABEL",{for:!0});var mo=x(De);We=F(mo,"height"),mo.forEach(d),U=A(bt),B=p(bt,"INPUT",{id:!0,type:!0,min:!0}),bt.forEach(d),Ee=A(ze),qe=p(ze,"LI",{});var rn=x(qe);Ge=p(rn,"LABEL",{for:!0});var ho=x(Ge);it=F(ho,"Walls mode"),ho.forEach(d),st=A(rn),Xe=p(rn,"SELECT",{});var po=x(Xe);for(let wn=0;wn<3;wn+=1)nt[wn].l(po);po.forEach(d),rn.forEach(d),lt=A(ze),ve=p(ze,"UL",{}),x(ve).forEach(d),ze.forEach(d),ro.forEach(d),this.h()},h(){v(e,"id","canvas"),ot(e,"background-color","black"),v(e,"width",t[5].width),v(e,"height",t[5].height),v(I,"for","steps"),v(X,"type","number"),v(X,"min",0),v(Z,"for","interactionRange"),v(E,"id","interactionRange"),v(E,"type","number"),v(E,"min",0),v(re,"for","drag"),v(W,"id","drag"),v(W,"type","number"),v(W,"min",0),v(ae,"for","deltaTime"),v(Y,"id","deltaTime"),v(Y,"type","number"),v(Y,"min",0),v(ue,"for","gravityFactor"),v(z,"id","gravityFactor"),v(z,"type","number"),v(z,"min",-5),v(z,"max",5),v(te,"for","particlesSize"),v(K,"id","particlesSize"),v(K,"type","number"),v(K,"min",0),v(ge,"for","worldWidth"),v(pe,"id","worldWidth"),v(pe,"type","number"),v(pe,"min",0),v(De,"for","worldHeight"),v(B,"id","worldHeight"),v(B,"type","number"),v(B,"min",0),v(Ge,"for","wallsMode"),t[4].wallsMode===void 0&&oi(()=>t[20].call(Xe))},m(O,se){D(O,e,se),D(O,o,se),D(O,n,se),l(n,i),l(i,a),l(n,r),l(n,f),l(f,u),l(n,m),l(n,T),l(T,b),l(T,L),l(n,P),l(n,I),l(I,k),l(n,G),l(n,X),$(X,t[1]),l(n,j),l(n,J),l(J,H),l(n,ie),l(n,Q),l(Q,M),D(O,ne,se),D(O,q,se),l(q,w),l(w,C),l(C,Z),l(Z,oe),l(C,xe),l(C,E),$(E,t[4].interactionRange),l(w,ce),l(w,ee),l(ee,re),l(re,we),l(ee,_e),l(ee,W),$(W,t[4].drag),l(w,Ue),l(w,fe),l(fe,ae),l(ae,Le),l(fe,Ae),l(fe,Y),$(Y,t[4].timeStep),l(w,Pe),l(w,he),l(he,ue),l(ue,Be),l(he,N),l(he,z),$(z,t[4].gravityFactor),l(w,$e),l(w,y),l(y,te),l(te,Se),l(y,Ie),l(y,K),$(K,t[4].particlesSize),l(w,Ce),l(w,le),l(le,ge),l(ge,Me),l(le,me),l(le,pe),$(pe,t[0].width),l(le,be),l(le,De),l(De,We),l(le,U),l(le,B),$(B,t[0].height),l(w,Ee),l(w,qe),l(qe,Ge),l(Ge,it),l(qe,st),l(qe,Xe);for(let Ne=0;Ne<3;Ne+=1)nt[Ne].m(Xe,null);vo(Xe,t[4].wallsMode),l(w,lt),l(w,ve),je||(Tt=[V(i,"click",t[9]),V(f,"click",t[10]),V(X,"input",t[11]),V(J,"click",t[12]),V(Q,"click",t[8]),V(E,"input",t[13]),V(W,"input",t[14]),V(Y,"input",t[15]),V(z,"input",t[16]),V(K,"input",t[17]),V(pe,"input",t[18]),V(B,"input",t[19]),V(Xe,"change",t[20])],je=!0)},p(O,[se]){se&8&&s!==(s=O[3]?"Play":"Pause")&&Ze(a,s),se&4&&c!==(c=O[2]?"Normal Speed":"Slow Mo")&&Ze(u,c),se&2&&S(X.value)!==O[1]&&$(X,O[1]),se&16&&S(E.value)!==O[4].interactionRange&&$(E,O[4].interactionRange),se&16&&S(W.value)!==O[4].drag&&$(W,O[4].drag),se&16&&S(Y.value)!==O[4].timeStep&&$(Y,O[4].timeStep),se&16&&S(z.value)!==O[4].gravityFactor&&$(z,O[4].gravityFactor),se&16&&S(K.value)!==O[4].particlesSize&&$(K,O[4].particlesSize),se&1&&S(pe.value)!==O[0].width&&$(pe,O[0].width),se&1&&S(B.value)!==O[0].height&&$(B,O[0].height),se&16&&vo(Xe,O[4].wallsMode)},i:de,o:de,d(O){O&&d(e),O&&d(o),O&&d(n),O&&d(ne),O&&d(q),to(nt,O),je=!1,Xt(Tt)}}}function Na(t,e,o){const n={width:800,height:600},i={width:800,height:600},s={width:500,height:10};let a=10,r=!1,f=!0;const c={interactionRange:10,drag:5,timeStep:10,particlesSize:3,gravityFactor:0,wallsMode:"wraped"};let u,m;function T(){cancelAnimationFrame(m),u=St(),Te(u.canvas);const{ids:M,positions:ne,colors:q}=Ea({texDimensions:s,worldDimensions:i,mode:"mesh",nbColors:1});ga(u,{ids:M,colors:q,texDimensions:s});let w=Ia(u,{positions:ne,colors:q,texDimensions:s});function C(){if(!f)for(let Z=0;Z<a;Z++)w=$a({gl:u,texDimensions:s,worldDimensions:i,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep,gravityFactor:c.gravityFactor,wallsMode:c.wallsMode});return ba({gl:u,positionTex:w,texDimensions:s,worldDimensions:i,particlesSize:c.particlesSize,ids:M}),r?setTimeout(()=>m=requestAnimationFrame(C),1e3):m=requestAnimationFrame(C)}m=requestAnimationFrame(C)}const{enableFullscreen:b}=wa(document,"canvas",n);document.addEventListener("keydown",M=>{M.code==="Space"&&(o(3,f=!f),M.preventDefault())}),et(()=>T());const g=()=>o(3,f=!f),L=()=>o(2,r=!r);function P(){a=S(this.value),o(1,a)}const I=()=>T();function k(){c.interactionRange=S(this.value),o(4,c)}function G(){c.drag=S(this.value),o(4,c)}function X(){c.timeStep=S(this.value),o(4,c)}function j(){c.gravityFactor=S(this.value),o(4,c)}function J(){c.particlesSize=S(this.value),o(4,c)}function H(){i.width=S(this.value),o(0,i)}function ie(){i.height=S(this.value),o(0,i)}function Q(){c.wallsMode=ii(this),o(4,c)}return[i,a,r,f,c,n,s,T,b,g,L,P,I,k,G,X,j,J,H,ie,Q]}class za extends Ye{constructor(e){super(),Ve(this,e,Na,Ma,He,{})}}function ko(t,e,o){const n=t.slice();return n[1]=e[o],n}function Wo(t,e,o){const n=t.slice();return n[1]=e[o],n}function Oa(t){let e;return{c(){e=R("About")},l(o){e=F(o,"About")},m(o,n){D(o,e,n)},d(o){o&&d(e)}}}function Xa(t){let e=t[1].title+"",o;return{c(){o=R(e)},l(n){o=F(n,e)},m(n,i){D(n,o,i)},p:de,d(n){n&&d(o)}}}function Yo(t){let e,o;return e=new qo({props:{$$slots:{default:[Xa]},$$scope:{ctx:t}}}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,i){vt(e,n,i),o=!0},p(n,i){const s={};i&64&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){o||(ke(e.$$.fragment,n),o=!0)},o(n){Ke(e.$$.fragment,n),o=!1},d(n){xt(e,n)}}}function ka(t){let e,o,n,i;e=new qo({props:{$$slots:{default:[Oa]},$$scope:{ctx:t}}});let s=t[0],a=[];for(let f=0;f<s.length;f+=1)a[f]=Yo(Wo(t,s,f));const r=f=>Ke(a[f],1,1,()=>{a[f]=null});return{c(){pt(e.$$.fragment),o=_();for(let f=0;f<a.length;f+=1)a[f].c();n=gn()},l(f){Dt(e.$$.fragment,f),o=A(f);for(let c=0;c<a.length;c+=1)a[c].l(f);n=gn()},m(f,c){vt(e,f,c),D(f,o,c);for(let u=0;u<a.length;u+=1)a[u].m(f,c);D(f,n,c),i=!0},p(f,c){const u={};if(c&64&&(u.$$scope={dirty:c,ctx:f}),e.$set(u),c&1){s=f[0];let m;for(m=0;m<s.length;m+=1){const T=Wo(f,s,m);a[m]?(a[m].p(T,c),ke(a[m],1)):(a[m]=Yo(T),a[m].c(),ke(a[m],1),a[m].m(n.parentNode,n))}for(no(),m=s.length;m<a.length;m+=1)r(m);oo()}},i(f){if(!i){ke(e.$$.fragment,f);for(let c=0;c<s.length;c+=1)ke(a[c]);i=!0}},o(f){Ke(e.$$.fragment,f),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)Ke(a[c]);i=!1},d(f){xt(e,f),f&&d(o),to(a,f),f&&d(n)}}}function Wa(t){let e,o;return{c(){e=h("p"),o=R("This page is an experiment to run simulation on the GPU.")},l(n){e=p(n,"P",{});var i=x(e);o=F(i,"This page is an experiment to run simulation on the GPU."),i.forEach(d)},m(n,i){D(n,e,i),l(e,o)},p:de,d(n){n&&d(e)}}}function Ya(t){let e,o,n;var i=t[1].component;function s(a){return{}}return i&&(e=xo(i,s())),{c(){e&&pt(e.$$.fragment),o=_()},l(a){e&&Dt(e.$$.fragment,a),o=A(a)},m(a,r){e&&vt(e,a,r),D(a,o,r),n=!0},p(a,r){if(i!==(i=a[1].component)){if(e){no();const f=e;Ke(f.$$.fragment,1,0,()=>{xt(f,1)}),oo()}i?(e=xo(i,s()),pt(e.$$.fragment),ke(e.$$.fragment,1),vt(e,o.parentNode,o)):e=null}},i(a){n||(e&&ke(e.$$.fragment,a),n=!0)},o(a){e&&Ke(e.$$.fragment,a),n=!1},d(a){e&&xt(e,a),a&&d(o)}}}function Vo(t){let e,o;return e=new Ho({props:{$$slots:{default:[Ya]},$$scope:{ctx:t}}}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,i){vt(e,n,i),o=!0},p(n,i){const s={};i&64&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){o||(ke(e.$$.fragment,n),o=!0)},o(n){Ke(e.$$.fragment,n),o=!1},d(n){xt(e,n)}}}function Va(t){let e,o,n,i,s,a;e=new ai({props:{$$slots:{default:[ka]},$$scope:{ctx:t}}}),n=new Ho({props:{$$slots:{default:[Wa]},$$scope:{ctx:t}}});let r=t[0],f=[];for(let u=0;u<r.length;u+=1)f[u]=Vo(ko(t,r,u));const c=u=>Ke(f[u],1,1,()=>{f[u]=null});return{c(){pt(e.$$.fragment),o=_(),pt(n.$$.fragment),i=_();for(let u=0;u<f.length;u+=1)f[u].c();s=gn()},l(u){Dt(e.$$.fragment,u),o=A(u),Dt(n.$$.fragment,u),i=A(u);for(let m=0;m<f.length;m+=1)f[m].l(u);s=gn()},m(u,m){vt(e,u,m),D(u,o,m),vt(n,u,m),D(u,i,m);for(let T=0;T<f.length;T+=1)f[T].m(u,m);D(u,s,m),a=!0},p(u,m){const T={};m&64&&(T.$$scope={dirty:m,ctx:u}),e.$set(T);const b={};if(m&64&&(b.$$scope={dirty:m,ctx:u}),n.$set(b),m&1){r=u[0];let g;for(g=0;g<r.length;g+=1){const L=ko(u,r,g);f[g]?(f[g].p(L,m),ke(f[g],1)):(f[g]=Vo(L),f[g].c(),ke(f[g],1),f[g].m(s.parentNode,s))}for(no(),g=r.length;g<f.length;g+=1)c(g);oo()}},i(u){if(!a){ke(e.$$.fragment,u),ke(n.$$.fragment,u);for(let m=0;m<r.length;m+=1)ke(f[m]);a=!0}},o(u){Ke(e.$$.fragment,u),Ke(n.$$.fragment,u),f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)Ke(f[m]);a=!1},d(u){xt(e,u),u&&d(o),xt(n,u),u&&d(i),to(f,u),u&&d(s)}}}function Ha(t){let e,o,n;return o=new ri({props:{$$slots:{default:[Va]},$$scope:{ctx:t}}}),{c(){e=h("div"),pt(o.$$.fragment)},l(i){e=p(i,"DIV",{});var s=x(e);Dt(o.$$.fragment,s),s.forEach(d)},m(i,s){D(i,e,s),vt(o,e,null),n=!0},p(i,[s]){const a={};s&64&&(a.$$scope={dirty:s,ctx:i}),o.$set(a)},i(i){n||(ke(o.$$.fragment,i),n=!0)},o(i){Ke(o.$$.fragment,i),n=!1},d(i){i&&d(e),xt(o)}}}function qa(t){return[[{title:"test 1",component:mi},{title:"test 2",component:xi},{title:"test 3",component:Ri},{title:"test 4",component:Li},{title:"test 5",component:Mi},{title:"test 6",component:ji},{title:"test 7",component:lr},{title:"test 8",component:wr},{title:"test 9",component:zr},{title:"test 10",component:ta},{title:"test 11",component:Ta},{title:"test 12",component:za}]]}class Ga extends Ye{constructor(e){super(),Ve(this,e,qa,Ha,He,{})}}function ja(t){let e,o;return e=new Ga({}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,i){vt(e,n,i),o=!0},p:de,i(n){o||(ke(e.$$.fragment,n),o=!0)},o(n){Ke(e.$$.fragment,n),o=!1},d(n){xt(e,n)}}}class es extends Ye{constructor(e){super(),Ve(this,e,null,ja,He,{})}}export{es as default};
