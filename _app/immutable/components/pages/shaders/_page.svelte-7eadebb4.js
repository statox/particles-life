import{S as T,i as g,s as _,k as S,l as P,m as U,h,n as D,b as L,B as m,o as N,w as v,x as C,y as I,f as F,t as w,z as $}from"../../../chunks/index-a8a449af.js";const b=["VERTEX_SHADER","FRAGMENT_SHADER"];function y(r,e,o,n,c){const i=[];for(let a=0;a<e.length;++a)i.push(X(r,e[a],r[b[a]],c));return M(r,i,o,n,c)}function X(r,e,o,n){const c=n||console.log,i=r.createShader(o);if(!i)throw"Could not load shader";if(r.shaderSource(i,e),r.compileShader(i),!r.getShaderParameter(i,r.COMPILE_STATUS)){const t=r.getShaderInfoLog(i);return c(new Error("*** Error compiling shader '"+i+"':"+t+`
`+e.split(`
`).map((s,d)=>`${d+1}: ${s}`).join(`
`))),r.deleteShader(i),null}return i}function M(r,e,o,n,c){const i=c||console.log,a=r.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(s){r.attachShader(a,s)}),o&&o.forEach(function(s,d){r.bindAttribLocation(a,n?n[d]:d,s)}),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS)){const s=r.getProgramInfoLog(a);return i("Error in program linking:"+s),r.deleteProgram(a),null}return a}function G(r){let e;return{c(){e=S("canvas"),this.h()},l(o){e=P(o,"CANVAS",{id:!0}),U(e).forEach(h),this.h()},h(){D(e,"id","canvas")},m(o,n){L(o,e,n)},p:m,i:m,o:m,d(o){o&&h(e)}}}function W(r){const e=document.createElement("div");e.textContent=r.toString(),document.body.appendChild(e)}function B(r){function e(){const o=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=3;const t=a.getContext("webgl");if(!t)throw"Coulndt get context";const s=y(t,[o,n]);if(!s)throw"Could not get program";const d=t.getAttribLocation(s,"position"),A=t.getUniformLocation(s,"srcTex"),p=t.getUniformLocation(s,"srcDimensions"),R=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,R),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0);const f=3,E=3,x=t.createTexture();t.bindTexture(t.TEXTURE_2D,x),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,f,E,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(s),t.uniform1i(A,0),t.uniform2f(p,f,E),t.drawArrays(t.TRIANGLES,0,6);const l=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,l);for(let u=0;u<3*3;++u)W(l[u*4])}return N(e),[]}class H extends T{constructor(e){super(),g(this,e,B,G,_,{})}}function k(r){let e,o;return e=new H({}),{c(){v(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,c){I(e,n,c),o=!0},p:m,i(n){o||(F(e.$$.fragment,n),o=!0)},o(n){w(e.$$.fragment,n),o=!1},d(n){$(e,n)}}}class Y extends T{constructor(e){super(),g(this,e,null,k,_,{})}}export{Y as default};
