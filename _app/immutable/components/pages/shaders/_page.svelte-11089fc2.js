import{S as T,i as _,s as g,k as S,l as P,m as U,h,n as D,b as L,B as m,o as N,w as v,x as I,y as C,f as F,t as $,z as w}from"../../../chunks/index-a8a449af.js";const b=["VERTEX_SHADER","FRAGMENT_SHADER"];function X(r,e,o,n,c){const s=[];for(let a=0;a<e.length;++a)s.push(y(r,e[a],r[b[a]],c));return M(r,s,o,n,c)}function y(r,e,o,n){const c=n||console.log,s=r.createShader(o);if(!s)throw"Could not load shader";if(r.shaderSource(s,e),r.compileShader(s),!r.getShaderParameter(s,r.COMPILE_STATUS)){const t=r.getShaderInfoLog(s);return c(new Error("*** Error compiling shader '"+s+"':"+t+`
`+e.split(`
`).map((i,d)=>`${d+1}: ${i}`).join(`
`))),r.deleteShader(s),null}return s}function M(r,e,o,n,c){const s=c||console.log,a=r.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(i){r.attachShader(a,i)}),o&&o.forEach(function(i,d){r.bindAttribLocation(a,n?n[d]:d,i)}),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS)){const i=r.getProgramInfoLog(a);return s("Error in program linking:"+i),r.deleteProgram(a),null}return a}function G(r){let e;return{c(){e=S("canvas"),this.h()},l(o){e=P(o,"CANVAS",{id:!0}),U(e).forEach(h),this.h()},h(){D(e,"id","canvas")},m(o,n){L(o,e,n)},p:m,i:m,o:m,d(o){o&&h(e)}}}function W(r){function e(){const o=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=2;const t=a.getContext("webgl");if(!t)throw"Coulndt get context";const i=X(t,[o,n]),d=t.getAttribLocation(i,"position"),A=t.getUniformLocation(i,"srcTex"),p=t.getUniformLocation(i,"srcDimensions"),R=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,R),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0);const f=3,E=2,x=t.createTexture();t.bindTexture(t.TEXTURE_2D,x),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,f,E,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(i),t.uniform1i(A,0),t.uniform2f(p,f,E),t.drawArrays(t.TRIANGLES,0,6);const l=new Uint8Array(3*2*4);t.readPixels(0,0,3,2,t.RGBA,t.UNSIGNED_BYTE,l);for(let u=0;u<3*2;++u)console.log(l[u*4])}return N(e),[]}class B extends T{constructor(e){super(),_(this,e,W,G,g,{})}}function H(r){let e,o;return e=new B({}),{c(){v(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,c){C(e,n,c),o=!0},p:m,i(n){o||(F(e.$$.fragment,n),o=!0)},o(n){$(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}class O extends T{constructor(e){super(),_(this,e,null,H,g,{})}}export{O as default};
