import{S as Ke,i as Ze,s as je,k as m,a as g,q as _,l as p,m as v,h,c as $,r as T,n as R,p as Dt,b as S,D as u,O as ae,K as D,R as Pt,u as pe,P as le,B as $e,M as It,o as Ut,w as ce,x as _e,y as fe,f as V,t as j,z as de,e as qe,g as rt,d as it,L as Bt,v as _t}from"../../../chunks/index-46ced799.js";import{T as kt,a as Gt,b as yt,c as zt}from"../../../chunks/TabPanel-3f95d051.js";const Wt=["VERTEX_SHADER","FRAGMENT_SHADER"];function Vt(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Ht(t),t}function Ht(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Nt(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function Tt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Mt(e,t,n,o,r){const i=[];for(let d=0;d<t.length;++d){const l=Wt[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Yt(e,t[d],l,r);if(!c)throw"Can not create shader";i.push(c)}const a=qt(e,i,n,o,r);if(!a)throw"Can not create program";return a}function Yt(e,t,n,o){const r=o||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(i);return r(new Error("*** Error compiling shader '"+i+"':"+d+`
`+t.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),e.deleteShader(i),null}return i}function qt(e,t,n,o,r){const i=r||console.log,a=e.createProgram();if(!a)throw"Could not create program";if(t.forEach(function(l){e.attachShader(a,l)}),n&&n.forEach(function(l,c){e.bindAttribLocation(a,o?o[c]:c,l)}),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const l=e.getProgramInfoLog(a);return i("Error in program linking:"+l),e.deleteProgram(a),null}return a}function Kt(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Zt=`attribute vec2 a_position;
uniform vec2 u_worldSize;
varying vec2 v_texcoord;

void main() {
    // Convert the position from pixels to normalized space (-1 to +1)
    vec2 zeroToOne = a_position / u_worldSize;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

    // Pass the texture coordinate to the fragment shader
    v_texcoord = zeroToOne;
}

`,jt=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let Be,ye,We;const Jt=(e,t)=>{const{screenDimensions:n}=t,{height:o,width:r}=n;if(ye=Mt(e,[Zt,jt]),Be={positionLocation:e.getAttribLocation(ye,"a_position"),textureLocation:e.getUniformLocation(ye,"u_texture"),worldSizeLocation:e.getUniformLocation(ye,"u_worldSize")},We=e.createBuffer(),!We)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,We),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,o,r,0,r,0,0,o,r,o]),e.STATIC_DRAW)},Qt=e=>{const{gl:t,cellsTex:n,worldDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(ye),t.bindBuffer(t.ARRAY_BUFFER,We),t.enableVertexAttribArray(Be.positionLocation),t.vertexAttribPointer(Be.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Be.textureLocation,0),t.uniform2f(Be.worldSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6)};function eo(e,t,n){function o(){const i=e.getElementById(t);i&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),i.width=n.width,i.height=n.height)}function r(){const i=e.getElementById(t);i&&(e.fullscreenElement||i.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function vt(e,t){const{worldDimensions:n}=t,o=n.width*n.height,r=new Array(o).fill(0).map(a=>Math.random()<.5?1:0);return{cellsTex:Nt(e,new Float32Array(r.map(a=>[a,0,0,0]).flat()),n.width,n.height)}}const to=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,oo=`precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;

vec2 wrapCoord(vec2 coord) {
    if (coord.x >= 1.0) {
        coord.x = 0.0;
    }
    if (coord.x < 0.0) {
        coord.x = 1.0;
    }

    if (coord.y > 1.0) {
        coord.y = 0.0;
    }
    if (coord.y < 0.0) {
        coord.y = 1.0;
    }
    return coord;
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / uTextureSize;
    float alive = texture2D(uInputTexture, texcoord).x;

    vec2 topLeftCoord  = wrapCoord(texcoord + (vec2(-1.0, -1.0) / uTextureSize));
    vec2 topCoord      = wrapCoord(texcoord + (vec2(0.0, -1.0) / uTextureSize));
    vec2 topRightCoord = wrapCoord(texcoord + (vec2(1.0, -1.0) / uTextureSize));

    vec2 leftCoord  = wrapCoord(texcoord + (vec2(-1.0, 0.0) / uTextureSize));
    vec2 rightCoord = wrapCoord(texcoord + (vec2(1.0, 0.0) / uTextureSize));

    vec2 bottomLeftCoord  = wrapCoord(texcoord + (vec2(-1.0, 1.0) / uTextureSize));
    vec2 bottomCoord      = wrapCoord(texcoord + (vec2(0.0, 1.0) / uTextureSize));
    vec2 bottomRightCoord = wrapCoord(texcoord + (vec2(1.0, 1.0) / uTextureSize));

    float topLeftAlive  = texture2D(uInputTexture, topLeftCoord ).x;
    float topAlive      = texture2D(uInputTexture, topCoord     ).x;
    float topRightAlive = texture2D(uInputTexture, topRightCoord).x;

    float leftAlive  = texture2D(uInputTexture, leftCoord ).x;;
    float rightAlive = texture2D(uInputTexture, rightCoord).x;

    float bottomLeftAlive  = texture2D(uInputTexture, bottomLeftCoord ).x;
    float bottomAlive      = texture2D(uInputTexture, bottomCoord     ).x;
    float bottomRightAlive = texture2D(uInputTexture, bottomRightCoord).x;

    float aliveNeighbors = topLeftAlive + topAlive + topRightAlive + leftAlive + rightAlive + bottomLeftAlive + bottomAlive + bottomRightAlive;

    float nextAlive = 0.0;
    if (alive == 1.0 && (aliveNeighbors == 2.0 || aliveNeighbors == 3.0)) {
        nextAlive = 1.0;
    } else if (alive == 0.0 && aliveNeighbors == 3.0) {
        nextAlive = 1.0;
    }


    gl_FragColor = vec4(nextAlive, 0.0, 0.0, 0.0);
}
`;let ze,Ne,ot,ke,et,xt,Et,Me,Ve;const bt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Ne=Mt(e,[to,oo]),ze={uInputTextureLocation:e.getUniformLocation(Ne,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ne,"uTextureSize"),positionLocation:e.getAttribLocation(Ne,"aPosition")},ot=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,ot),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ke=n,et=Nt(e,null,o.width,o.height),xt=Tt(e,ke),Et=Tt(e,et),Me={fb:xt,tex:ke},Ve={fb:Et,tex:et},ke},no=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ve.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,ot),t.enableVertexAttribArray(ze.positionLocation),t.vertexAttribPointer(ze.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Me.tex),t.useProgram(Ne),t.uniform1i(ze.uInputTextureLocation,0),t.uniform2f(ze.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const r=Me;Me=Ve,Ve=r}return Me.tex};function ro(e){let t,n,o,r,i=e[1]?"Play":"Pause",a,d,l,c,s,f,w=e[0].width+"",N,b,P=e[0].height+"",I,Y,B=e[0].width*e[0].height+"",y,ue,ee,q,se,C,x,J,Q,O,K,Te,oe,k,ne,re,ve,M,H,Z,xe,Ee,U,ie,Le;return{c(){t=m("canvas"),n=g(),o=m("div"),r=m("button"),a=_(i),d=_(" (Space)"),l=g(),c=m("div"),s=m("span"),f=_("World "),N=_(w),b=_(" x "),I=_(P),Y=_(" ("),y=_(B),ue=_(" cells)"),ee=g(),q=m("button"),se=_("Reload program"),C=g(),x=m("button"),J=_("Fullscreen (f)"),Q=g(),O=m("div"),K=m("button"),Te=_("Reset world (r)"),oe=g(),k=m("span"),ne=m("label"),re=_("World: width"),ve=g(),M=m("input"),H=g(),Z=m("label"),xe=_("height"),Ee=g(),U=m("input"),this.h()},l(A){t=p(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(h),n=$(A),o=p(A,"DIV",{});var E=v(o);r=p(E,"BUTTON",{});var be=v(r);a=T(be,i),d=T(be," (Space)"),be.forEach(h),E.forEach(h),l=$(A),c=p(A,"DIV",{});var z=v(c);s=p(z,"SPAN",{});var G=v(s);f=T(G,"World "),N=T(G,w),b=T(G," x "),I=T(G,P),Y=T(G," ("),y=T(G,B),ue=T(G," cells)"),G.forEach(h),ee=$(z),q=p(z,"BUTTON",{});var Fe=v(q);se=T(Fe,"Reload program"),Fe.forEach(h),C=$(z),x=p(z,"BUTTON",{});var Se=v(x);J=T(Se,"Fullscreen (f)"),Se.forEach(h),z.forEach(h),Q=$(A),O=p(A,"DIV",{});var X=v(O);K=p(X,"BUTTON",{});var Ce=v(K);Te=T(Ce,"Reset world (r)"),Ce.forEach(h),oe=$(X),k=p(X,"SPAN",{});var W=v(k);ne=p(W,"LABEL",{for:!0});var De=v(ne);re=T(De,"World: width"),De.forEach(h),ve=$(W),M=p(W,"INPUT",{id:!0,type:!0,min:!0}),H=$(W),Z=p(W,"LABEL",{for:!0});var Pe=v(Z);xe=T(Pe,"height"),Pe.forEach(h),Ee=$(W),U=p(W,"INPUT",{id:!0,type:!0,min:!0}),W.forEach(h),X.forEach(h),this.h()},h(){R(t,"id","canvas"),Dt(t,"background-color","black"),R(t,"width",e[3].width),R(t,"height",e[3].height),R(ne,"for","worldWidth"),R(M,"id","worldWidth"),R(M,"type","number"),R(M,"min",0),R(Z,"for","worldHeight"),R(U,"id","worldHeight"),R(U,"type","number"),R(U,"min",0)},m(A,E){S(A,t,E),S(A,n,E),S(A,o,E),u(o,r),u(r,a),u(r,d),S(A,l,E),S(A,c,E),u(c,s),u(s,f),u(s,N),u(s,b),u(s,I),u(s,Y),u(s,y),u(s,ue),u(c,ee),u(c,q),u(q,se),u(c,C),u(c,x),u(x,J),S(A,Q,E),S(A,O,E),u(O,K),u(K,Te),u(O,oe),u(O,k),u(k,ne),u(ne,re),u(k,ve),u(k,M),ae(M,e[0].width),u(k,H),u(k,Z),u(Z,xe),u(k,Ee),u(k,U),ae(U,e[0].height),ie||(Le=[D(r,"click",e[6]),D(q,"click",e[7]),D(x,"click",function(){Pt(e[2])&&e[2].apply(this,arguments)}),D(K,"click",e[5]),D(M,"change",e[5]),D(M,"input",e[8]),D(U,"change",e[5]),D(U,"input",e[9])],ie=!0)},p(A,[E]){e=A,E&2&&i!==(i=e[1]?"Play":"Pause")&&pe(a,i),E&1&&w!==(w=e[0].width+"")&&pe(N,w),E&1&&P!==(P=e[0].height+"")&&pe(I,P),E&1&&B!==(B=e[0].width*e[0].height+"")&&pe(y,B),E&1&&le(M.value)!==e[0].width&&ae(M,e[0].width),E&1&&le(U.value)!==e[0].height&&ae(U,e[0].height)},i:$e,o:$e,d(A){A&&h(t),A&&h(n),A&&h(o),A&&h(l),A&&h(c),A&&h(Q),A&&h(O),ie=!1,It(Le)}}}function io(e,t,n){const o={width:1600,height:900},r={width:1600,height:900};let i=!0,a,d,l;function c(){cancelAnimationFrame(l),d=Vt(),Kt(d.canvas);const I=vt(d,{worldDimensions:r});a=bt(d,{cellsTex:I.cellsTex,texDimensions:r}),Jt(d,{screenDimensions:o});function Y(){return i||(a=no({gl:d,worldDimensions:r,screenDimensions:o})),Qt({gl:d,cellsTex:a,worldDimensions:r}),l=requestAnimationFrame(Y)}l=requestAnimationFrame(Y)}let s;Ut(()=>{c(),n(2,s=eo(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",I=>{if(I.code==="Space"&&(n(1,i=!i),I.preventDefault()),I.code==="KeyF"){s();return}if(I.code==="KeyR"){f();return}})});const f=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const I=vt(d,{worldDimensions:r});a=bt(d,{cellsTex:I.cellsTex,texDimensions:r})},w=()=>n(1,i=!i),N=()=>c();function b(){r.width=le(this.value),n(0,r)}function P(){r.height=le(this.value),n(0,r)}return[r,i,s,o,c,f,w,N,b,P]}class ao extends Ke{constructor(t){super(),Ze(this,t,io,ro,je,{})}}const lo=["VERTEX_SHADER","FRAGMENT_SHADER"];function uo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return so(t),t}function so(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Xt(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function At(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Ot(e,t,n,o,r){const i=[];for(let d=0;d<t.length;++d){const l=lo[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=co(e,t[d],l,r);if(!c)throw"Can not create shader";i.push(c)}const a=fo(e,i,n,o,r);if(!a)throw"Can not create program";return a}function co(e,t,n,o){const r=o||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(i);return r(new Error("*** Error compiling shader '"+i+"':"+d+`
`+t.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),e.deleteShader(i),null}return i}function fo(e,t,n,o,r){const i=r||console.log,a=e.createProgram();if(!a)throw"Could not create program";if(t.forEach(function(l){e.attachShader(a,l)}),n&&n.forEach(function(l,c){e.bindAttribLocation(a,o?o[c]:c,l)}),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const l=e.getProgramInfoLog(a);return i("Error in program linking:"+l),e.deleteProgram(a),null}return a}function ho(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const mo=`precision mediump float;
attribute vec2 a_position;
uniform vec2 u_worldSize;

uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    // Handle zoom and pan
    vec2 position = (a_position * u_zoom) + u_pan;
    // Convert the position from pixels to normalized space (-1 to +1)
    vec2 zeroToOne = position / u_worldSize;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;



    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

    // Pass the texture coordinate to the fragment shader
    v_texcoord = zeroToOne;
}
`,po=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,_o=`precision mediump float;
uniform sampler2D u_texture;
uniform vec2 u_worldSize;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    vec4 cell = texture2D(u_texture, texCoord);
    float alive = cell.x;
    float id = cell.y;
    float blue = id / (u_worldSize.x * u_worldSize.y);
    gl_FragColor = vec4(0.0, blue, 1.0, 1.0) * alive;
}

`;let Ae,we,He;const To=(e,t)=>{const{screenDimensions:n,mode:o}=t,{height:r,width:i}=n;let a=po;if(o==="gradiant"&&(a=_o),we=Ot(e,[mo,a]),Ae={positionLocation:e.getAttribLocation(we,"a_position"),textureLocation:e.getUniformLocation(we,"u_texture"),worldSizeLocation:e.getUniformLocation(we,"u_worldSize"),zoomLocation:e.getUniformLocation(we,"u_zoom"),panLocation:e.getUniformLocation(we,"u_pan")},He=e.createBuffer(),!He)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,He),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,i,0,i,0,0,r,i,r]),e.STATIC_DRAW)},vo=e=>{const{gl:t,cellsTex:n,worldDimensions:o,zoomLevel:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(we),t.bindBuffer(t.ARRAY_BUFFER,He),t.enableVertexAttribArray(Ae.positionLocation),t.vertexAttribPointer(Ae.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ae.textureLocation,0),t.uniform2f(Ae.worldSizeLocation,o.width,o.height),t.uniform1f(Ae.zoomLocation,Math.max(r,1)),t.uniform2f(Ae.panLocation,0,0),t.drawArrays(t.TRIANGLES,0,6)};function xo(e,t,n){function o(){const i=e.getElementById(t);i&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),i.width=n.width,i.height=n.height)}function r(){const i=e.getElementById(t);i&&(e.fullscreenElement||i.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function wt(e,t){const{worldDimensions:n,initialDensity:o}=t;let r=o;r>1&&(r=1);const i=n.width*n.height,a=new Array(i).fill(0).map(l=>Math.random()<r?1:0);return{cellsTex:Xt(e,new Float32Array(a.map((l,c)=>[l,c,0,0]).flat()),n.width,n.height)}}const Eo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,bo=`precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;
uniform vec2 uMouseCoordinates;
uniform int uMouseMode; // 0 do nothing; 1 draw; 2 erase

// Gold Noise 2015 dcerisano@standard3d.com
// - based on the Golden Ratio
// - uniform normalized distribution
// - fastest static noise generator function (also runs at low precision)
// - use with indicated fractional seeding method.
float PHI = 1.61803398874989484820459;  //  Golden Ratio

float gold_noise(in vec2 xy, in float seed){
       return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}

vec2 wrapCoord(vec2 coord) {
    if (coord.x >= 1.0) {
        coord.x = 0.0;
    }
    if (coord.x < 0.0) {
        coord.x = 1.0;
    }

    if (coord.y > 1.0) {
        coord.y = 0.0;
    }
    if (coord.y < 0.0) {
        coord.y = 1.0;
    }
    return coord;
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / uTextureSize;
    vec4 cell = texture2D(uInputTexture, texcoord);
    float alive = cell.x;
    float id = cell.y;

    vec2 topLeftCoord  = wrapCoord(texcoord + (vec2(-1.0, -1.0) / uTextureSize));
    vec2 topCoord      = wrapCoord(texcoord + (vec2(0.0, -1.0) / uTextureSize));
    vec2 topRightCoord = wrapCoord(texcoord + (vec2(1.0, -1.0) / uTextureSize));

    vec2 leftCoord  = wrapCoord(texcoord + (vec2(-1.0, 0.0) / uTextureSize));
    vec2 rightCoord = wrapCoord(texcoord + (vec2(1.0, 0.0) / uTextureSize));

    vec2 bottomLeftCoord  = wrapCoord(texcoord + (vec2(-1.0, 1.0) / uTextureSize));
    vec2 bottomCoord      = wrapCoord(texcoord + (vec2(0.0, 1.0) / uTextureSize));
    vec2 bottomRightCoord = wrapCoord(texcoord + (vec2(1.0, 1.0) / uTextureSize));

    float topLeftAlive  = texture2D(uInputTexture, topLeftCoord ).x;
    float topAlive      = texture2D(uInputTexture, topCoord     ).x;
    float topRightAlive = texture2D(uInputTexture, topRightCoord).x;

    float leftAlive  = texture2D(uInputTexture, leftCoord ).x;;
    float rightAlive = texture2D(uInputTexture, rightCoord).x;

    float bottomLeftAlive  = texture2D(uInputTexture, bottomLeftCoord ).x;
    float bottomAlive      = texture2D(uInputTexture, bottomCoord     ).x;
    float bottomRightAlive = texture2D(uInputTexture, bottomRightCoord).x;

    float aliveNeighbors = topLeftAlive + topAlive + topRightAlive + leftAlive + rightAlive + bottomLeftAlive + bottomAlive + bottomRightAlive;

    float nextAlive = 0.0;
    if (alive == 1.0 && (aliveNeighbors == 2.0 || aliveNeighbors == 3.0)) {
        nextAlive = 1.0;
    } else if (alive == 0.0 && aliveNeighbors == 3.0) {
        nextAlive = 1.0;
    }

    if (uMouseMode != 0 && distance(texcoord, uMouseCoordinates) < 0.02) {
        // if (gold_noise(texcoord, 121234.0) < 0.05) {
        //     nextAlive = 1.0;
        // }
        if (uMouseMode == 1 && gold_noise(texcoord, 121234.0) < 0.05) {
            nextAlive = 1.0;
        } else if (uMouseMode == 2) {
            nextAlive = 0.0;
        }
    }

    gl_FragColor = vec4(nextAlive, id, 0.0, 0.0);
}
`;let Re,ge,nt,Ge,tt,Rt,gt,Xe,Ye;const $t=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return ge=Ot(e,[Eo,bo]),Re={uInputTextureLocation:e.getUniformLocation(ge,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ge,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(ge,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(ge,"uMouseMode"),positionLocation:e.getAttribLocation(ge,"aPosition")},nt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,nt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Ge=n,tt=Xt(e,null,o.width,o.height),Rt=At(e,Ge),gt=At(e,tt),Xe={fb:Rt,tex:Ge},Ye={fb:gt,tex:tt},Ge},Ao=e=>{const{gl:t,worldDimensions:n,screenDimensions:o,mouseCoordinates:r,mouseMode:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ye.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,nt),t.enableVertexAttribArray(Re.positionLocation),t.vertexAttribPointer(Re.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Xe.tex),t.useProgram(ge),t.uniform1i(Re.uInputTextureLocation,0),t.uniform2f(Re.uTextureSizeLocation,n.width,n.height),t.uniform2f(Re.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(Re.uMouseModeLocation,i),t.drawArrays(t.TRIANGLES,0,6);{const a=Xe;Xe=Ye,Ye=a}return Xe.tex};function wo(e){let t,n,o,r,i=e[3]?"Play":"Pause",a,d,l,c,s,f,w,N,b,P,I,Y,B,y,ue,ee=e[0].width+"",q,se,C=e[0].height+"",x,J,Q=e[0].width*e[0].height+"",O,K,Te,oe,k,ne,re,ve,M,H,Z,xe,Ee,U,ie,Le,A,E,be,z,G,Fe,Se,X,Ce,W,De,Pe,te,Je,at;return{c(){t=m("canvas"),n=g(),o=m("div"),r=m("button"),a=_(i),d=_(" (Space)"),l=g(),c=m("button"),s=_("Zoom in"),f=g(),w=m("button"),N=_("Zoom out"),b=g(),P=m("button"),I=_("Reset zoom"),Y=g(),B=m("div"),y=m("span"),ue=_("World "),q=_(ee),se=_(" x "),x=_(C),J=_(" ("),O=_(Q),K=_(" cells)"),Te=g(),oe=m("button"),k=_("Reload program"),ne=g(),re=m("button"),ve=_("Fullscreen (f)"),M=g(),H=m("div"),Z=m("button"),xe=_("Reset world (r)"),Ee=g(),U=m("span"),ie=m("label"),Le=_("Initial density [0-1]"),A=g(),E=m("input"),be=g(),z=m("span"),G=m("label"),Fe=_("World: width"),Se=g(),X=m("input"),Ce=g(),W=m("label"),De=_("height"),Pe=g(),te=m("input"),this.h()},l(L){t=p(L,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(h),n=$(L),o=p(L,"DIV",{});var F=v(o);r=p(F,"BUTTON",{});var Qe=v(r);a=T(Qe,i),d=T(Qe," (Space)"),Qe.forEach(h),l=$(F),c=p(F,"BUTTON",{});var lt=v(c);s=T(lt,"Zoom in"),lt.forEach(h),f=$(F),w=p(F,"BUTTON",{});var ut=v(w);N=T(ut,"Zoom out"),ut.forEach(h),b=$(F),P=p(F,"BUTTON",{});var st=v(P);I=T(st,"Reset zoom"),st.forEach(h),F.forEach(h),Y=$(L),B=p(L,"DIV",{});var Ie=v(B);y=p(Ie,"SPAN",{});var he=v(y);ue=T(he,"World "),q=T(he,ee),se=T(he," x "),x=T(he,C),J=T(he," ("),O=T(he,Q),K=T(he," cells)"),he.forEach(h),Te=$(Ie),oe=p(Ie,"BUTTON",{});var ct=v(oe);k=T(ct,"Reload program"),ct.forEach(h),ne=$(Ie),re=p(Ie,"BUTTON",{});var ft=v(re);ve=T(ft,"Fullscreen (f)"),ft.forEach(h),Ie.forEach(h),M=$(L),H=p(L,"DIV",{});var Ue=v(H);Z=p(Ue,"BUTTON",{});var dt=v(Z);xe=T(dt,"Reset world (r)"),dt.forEach(h),Ee=$(Ue),U=p(Ue,"SPAN",{});var Oe=v(U);ie=p(Oe,"LABEL",{for:!0});var ht=v(ie);Le=T(ht,"Initial density [0-1]"),ht.forEach(h),A=$(Oe),E=p(Oe,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Oe.forEach(h),be=$(Ue),z=p(Ue,"SPAN",{});var me=v(z);G=p(me,"LABEL",{for:!0});var mt=v(G);Fe=T(mt,"World: width"),mt.forEach(h),Se=$(me),X=p(me,"INPUT",{id:!0,type:!0,min:!0}),Ce=$(me),W=p(me,"LABEL",{for:!0});var pt=v(W);De=T(pt,"height"),pt.forEach(h),Pe=$(me),te=p(me,"INPUT",{id:!0,type:!0,min:!0}),me.forEach(h),Ue.forEach(h),this.h()},h(){R(t,"id","canvas"),Dt(t,"background-color","black"),R(t,"width",e[5].width),R(t,"height",e[5].height),R(ie,"for","initialDensity"),R(E,"id","initialDensity"),R(E,"type","number"),R(E,"min",0),R(E,"max",1),R(G,"for","worldWidth"),R(X,"id","worldWidth"),R(X,"type","number"),R(X,"min",0),R(W,"for","worldHeight"),R(te,"id","worldHeight"),R(te,"type","number"),R(te,"min",0)},m(L,F){S(L,t,F),S(L,n,F),S(L,o,F),u(o,r),u(r,a),u(r,d),u(o,l),u(o,c),u(c,s),u(o,f),u(o,w),u(w,N),u(o,b),u(o,P),u(P,I),S(L,Y,F),S(L,B,F),u(B,y),u(y,ue),u(y,q),u(y,se),u(y,x),u(y,J),u(y,O),u(y,K),u(B,Te),u(B,oe),u(oe,k),u(B,ne),u(B,re),u(re,ve),S(L,M,F),S(L,H,F),u(H,Z),u(Z,xe),u(H,Ee),u(H,U),u(U,ie),u(ie,Le),u(U,A),u(U,E),ae(E,e[2]),u(H,be),u(H,z),u(z,G),u(G,Fe),u(z,Se),u(z,X),ae(X,e[0].width),u(z,Ce),u(z,W),u(W,De),u(z,Pe),u(z,te),ae(te,e[0].height),Je||(at=[D(r,"click",e[8]),D(c,"click",e[9]),D(w,"click",e[10]),D(P,"click",e[11]),D(oe,"click",e[12]),D(re,"click",function(){Pt(e[4])&&e[4].apply(this,arguments)}),D(Z,"click",e[7]),D(E,"change",e[7]),D(E,"input",e[13]),D(X,"change",e[7]),D(X,"input",e[14]),D(te,"change",e[7]),D(te,"input",e[15])],Je=!0)},p(L,[F]){e=L,F&8&&i!==(i=e[3]?"Play":"Pause")&&pe(a,i),F&1&&ee!==(ee=e[0].width+"")&&pe(q,ee),F&1&&C!==(C=e[0].height+"")&&pe(x,C),F&1&&Q!==(Q=e[0].width*e[0].height+"")&&pe(O,Q),F&4&&le(E.value)!==e[2]&&ae(E,e[2]),F&1&&le(X.value)!==e[0].width&&ae(X,e[0].width),F&1&&le(te.value)!==e[0].height&&ae(te,e[0].height)},i:$e,o:$e,d(L){L&&h(t),L&&h(n),L&&h(o),L&&h(Y),L&&h(B),L&&h(M),L&&h(H),Je=!1,It(at)}}}function Ro(e,t,n){const o={width:1200,height:900},r={width:1200,height:900},i={x:-100,y:-100};let a=0,d=1,l=.05,c=!0,s,f,w;function N(){cancelAnimationFrame(w),f=uo(),ho(f.canvas);const C=wt(f,{worldDimensions:r,initialDensity:l});s=$t(f,{cellsTex:C.cellsTex,texDimensions:r}),To(f,{screenDimensions:o,mode:"white"});function x(){return c||(s=Ao({gl:f,worldDimensions:r,screenDimensions:o,mouseCoordinates:i,mouseMode:a})),vo({gl:f,cellsTex:s,worldDimensions:r,zoomLevel:d}),w=requestAnimationFrame(x)}w=requestAnimationFrame(x)}let b;Ut(()=>{N(),n(4,b=xo(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",x=>{if(x.code==="Space"&&(n(3,c=!c),x.preventDefault()),x.code==="KeyF"){b();return}if(x.code==="KeyR"){P();return}});const C=document.getElementById("canvas");if(!C)throw new Error("Canvas unavailable");C.addEventListener("mousemove",x=>{const J=C.getBoundingClientRect(),Q=C.width/J.width,O=C.height/J.height,K={x:(x.clientX-J.left)*Q,y:(x.clientY-J.top)*O};i.x=K.x/o.width,i.y=K.y/o.height}),C.addEventListener("mousedown",x=>{x.preventDefault(),x.button===0?a=1:x.button===2&&(a=2)}),C.addEventListener("mouseup",x=>{x.preventDefault(),a=0}),C.addEventListener("contextmenu",x=>(x.preventDefault(),!1))});const P=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const C=wt(f,{worldDimensions:r,initialDensity:l});s=$t(f,{cellsTex:C.cellsTex,texDimensions:r})},I=()=>n(3,c=!c),Y=()=>n(1,d+=1),B=()=>n(1,d=Math.max(d-1,1)),y=()=>n(1,d=1),ue=()=>N();function ee(){l=le(this.value),n(2,l)}function q(){r.width=le(this.value),n(0,r)}function se(){r.height=le(this.value),n(0,r)}return[r,d,l,c,b,o,N,P,I,Y,B,y,ue,ee,q,se]}class go extends Ke{constructor(t){super(),Ze(this,t,Ro,wo,je,{})}}function Lt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Ft(e,t,n){const o=e.slice();return o[1]=t[n],o}function $o(e){let t;return{c(){t=_("About")},l(n){t=T(n,"About")},m(n,o){S(n,t,o)},d(n){n&&h(t)}}}function Lo(e){let t=e[1].title+"",n;return{c(){n=_(t)},l(o){n=T(o,t)},m(o,r){S(o,n,r)},p:$e,d(o){o&&h(n)}}}function St(e){let t,n;return t=new zt({props:{$$slots:{default:[Lo]},$$scope:{ctx:e}}}),{c(){ce(t.$$.fragment)},l(o){_e(t.$$.fragment,o)},m(o,r){fe(t,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),t.$set(i)},i(o){n||(V(t.$$.fragment,o),n=!0)},o(o){j(t.$$.fragment,o),n=!1},d(o){de(t,o)}}}function Fo(e){let t,n,o,r;t=new zt({props:{$$slots:{default:[$o]},$$scope:{ctx:e}}});let i=e[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=St(Ft(e,i,l));const d=l=>j(a[l],1,1,()=>{a[l]=null});return{c(){ce(t.$$.fragment),n=g();for(let l=0;l<a.length;l+=1)a[l].c();o=qe()},l(l){_e(t.$$.fragment,l),n=$(l);for(let c=0;c<a.length;c+=1)a[c].l(l);o=qe()},m(l,c){fe(t,l,c),S(l,n,c);for(let s=0;s<a.length;s+=1)a[s].m(l,c);S(l,o,c),r=!0},p(l,c){const s={};if(c&64&&(s.$$scope={dirty:c,ctx:l}),t.$set(s),c&1){i=l[0];let f;for(f=0;f<i.length;f+=1){const w=Ft(l,i,f);a[f]?(a[f].p(w,c),V(a[f],1)):(a[f]=St(w),a[f].c(),V(a[f],1),a[f].m(o.parentNode,o))}for(rt(),f=i.length;f<a.length;f+=1)d(f);it()}},i(l){if(!r){V(t.$$.fragment,l);for(let c=0;c<i.length;c+=1)V(a[c]);r=!0}},o(l){j(t.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)j(a[c]);r=!1},d(l){de(t,l),l&&h(n),Bt(a,l),l&&h(o)}}}function So(e){let t,n;return{c(){t=m("p"),n=_("Experiments running Conway's Game of Life in WebGL shaders.")},l(o){t=p(o,"P",{});var r=v(t);n=T(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(h)},m(o,r){S(o,t,r),u(t,n)},p:$e,d(o){o&&h(t)}}}function Co(e){let t,n,o;var r=e[1].component;function i(a){return{}}return r&&(t=_t(r,i())),{c(){t&&ce(t.$$.fragment),n=g()},l(a){t&&_e(t.$$.fragment,a),n=$(a)},m(a,d){t&&fe(t,a,d),S(a,n,d),o=!0},p(a,d){if(r!==(r=a[1].component)){if(t){rt();const l=t;j(l.$$.fragment,1,0,()=>{de(l,1)}),it()}r?(t=_t(r,i()),ce(t.$$.fragment),V(t.$$.fragment,1),fe(t,n.parentNode,n)):t=null}},i(a){o||(t&&V(t.$$.fragment,a),o=!0)},o(a){t&&j(t.$$.fragment,a),o=!1},d(a){t&&de(t,a),a&&h(n)}}}function Ct(e){let t,n;return t=new yt({props:{$$slots:{default:[Co]},$$scope:{ctx:e}}}),{c(){ce(t.$$.fragment)},l(o){_e(t.$$.fragment,o)},m(o,r){fe(t,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),t.$set(i)},i(o){n||(V(t.$$.fragment,o),n=!0)},o(o){j(t.$$.fragment,o),n=!1},d(o){de(t,o)}}}function Do(e){let t,n,o,r,i,a;t=new Gt({props:{$$slots:{default:[Fo]},$$scope:{ctx:e}}}),o=new yt({props:{$$slots:{default:[So]},$$scope:{ctx:e}}});let d=e[0],l=[];for(let s=0;s<d.length;s+=1)l[s]=Ct(Lt(e,d,s));const c=s=>j(l[s],1,1,()=>{l[s]=null});return{c(){ce(t.$$.fragment),n=g(),ce(o.$$.fragment),r=g();for(let s=0;s<l.length;s+=1)l[s].c();i=qe()},l(s){_e(t.$$.fragment,s),n=$(s),_e(o.$$.fragment,s),r=$(s);for(let f=0;f<l.length;f+=1)l[f].l(s);i=qe()},m(s,f){fe(t,s,f),S(s,n,f),fe(o,s,f),S(s,r,f);for(let w=0;w<l.length;w+=1)l[w].m(s,f);S(s,i,f),a=!0},p(s,f){const w={};f&64&&(w.$$scope={dirty:f,ctx:s}),t.$set(w);const N={};if(f&64&&(N.$$scope={dirty:f,ctx:s}),o.$set(N),f&1){d=s[0];let b;for(b=0;b<d.length;b+=1){const P=Lt(s,d,b);l[b]?(l[b].p(P,f),V(l[b],1)):(l[b]=Ct(P),l[b].c(),V(l[b],1),l[b].m(i.parentNode,i))}for(rt(),b=d.length;b<l.length;b+=1)c(b);it()}},i(s){if(!a){V(t.$$.fragment,s),V(o.$$.fragment,s);for(let f=0;f<d.length;f+=1)V(l[f]);a=!0}},o(s){j(t.$$.fragment,s),j(o.$$.fragment,s),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)j(l[f]);a=!1},d(s){de(t,s),s&&h(n),de(o,s),s&&h(r),Bt(l,s),s&&h(i)}}}function Po(e){let t,n,o;return n=new kt({props:{$$slots:{default:[Do]},$$scope:{ctx:e}}}),{c(){t=m("div"),ce(n.$$.fragment)},l(r){t=p(r,"DIV",{});var i=v(t);_e(n.$$.fragment,i),i.forEach(h)},m(r,i){S(r,t,i),fe(n,t,null),o=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),n.$set(a)},i(r){o||(V(n.$$.fragment,r),o=!0)},o(r){j(n.$$.fragment,r),o=!1},d(r){r&&h(t),de(n)}}}function Io(e){return[[{title:"V1",component:ao},{title:"V2",component:go}]]}class Uo extends Ke{constructor(t){super(),Ze(this,t,Io,Po,je,{})}}function Bo(e){let t,n;return t=new Uo({}),{c(){ce(t.$$.fragment)},l(o){_e(t.$$.fragment,o)},m(o,r){fe(t,o,r),n=!0},p:$e,i(o){n||(V(t.$$.fragment,o),n=!0)},o(o){j(t.$$.fragment,o),n=!1},d(o){de(t,o)}}}class No extends Ke{constructor(t){super(),Ze(this,t,null,Bo,je,{})}}export{No as default};
