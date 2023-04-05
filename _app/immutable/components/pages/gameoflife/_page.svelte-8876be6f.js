import{S as Ke,i as Ze,s as je,k as m,a as g,q as _,l as p,m as v,h as d,c as L,r as T,n as R,p as $t,b as D,D as s,O as ue,K as y,R as Pt,u as _e,P as le,B as Le,M as yt,o as It,w as fe,x as Te,y as de,f as H,t as j,z as he,e as qe,g as rt,d as it,L as Ut,v as _t}from"../../../chunks/index-46ced799.js";import{T as kt,a as Gt,b as Bt,c as zt}from"../../../chunks/TabPanel-3f95d051.js";const Wt=["VERTEX_SHADER","FRAGMENT_SHADER"];function Vt(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Ht(t),t}function Ht(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Nt(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function Tt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Mt(e,t,n,o,r){const a=[];for(let h=0;h<t.length;++h){const u=Wt[h]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Yt(e,t[h],u,r);if(!c)throw"Can not create shader";a.push(c)}const i=qt(e,a,n,o,r);if(!i)throw"Can not create program";return i}function Yt(e,t,n,o){const r=o||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const h=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+h+`
`+t.split(`
`).map((u,c)=>`${c+1}: ${u}`).join(`
`))),e.deleteShader(a),null}return a}function qt(e,t,n,o,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(u){e.attachShader(i,u)}),n&&n.forEach(function(u,c){e.bindAttribLocation(i,o?o[c]:c,u)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const u=e.getProgramInfoLog(i);return a("Error in program linking:"+u),e.deleteProgram(i),null}return i}function Kt(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Zt=`attribute vec2 a_position;
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
`;let Ue,Be,We;const Jt=(e,t)=>{const{screenDimensions:n}=t,{height:o,width:r}=n;if(Be=Mt(e,[Zt,jt]),Ue={positionLocation:e.getAttribLocation(Be,"a_position"),textureLocation:e.getUniformLocation(Be,"u_texture"),worldSizeLocation:e.getUniformLocation(Be,"u_worldSize")},We=e.createBuffer(),!We)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,We),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,o,r,0,r,0,0,o,r,o]),e.STATIC_DRAW)},Qt=e=>{const{gl:t,cellsTex:n,worldDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Be),t.bindBuffer(t.ARRAY_BUFFER,We),t.enableVertexAttribArray(Ue.positionLocation),t.vertexAttribPointer(Ue.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ue.textureLocation,0),t.uniform2f(Ue.worldSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6)};function eo(e,t,n){function o(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function xt(e,t){const{worldDimensions:n}=t,o=n.width*n.height,r=new Array(o).fill(0).map(i=>Math.random()<.5?1:0);return{cellsTex:Nt(e,new Float32Array(r.map(i=>[i,0,0,0]).flat()),n.width,n.height)}}const to=` attribute vec2 aPosition;

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
`;let ze,Ne,ot,ke,et,vt,Et,Me,Ve;const bt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Ne=Mt(e,[to,oo]),ze={uInputTextureLocation:e.getUniformLocation(Ne,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ne,"uTextureSize"),positionLocation:e.getAttribLocation(Ne,"aPosition")},ot=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,ot),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ke=n,et=Nt(e,null,o.width,o.height),vt=Tt(e,ke),Et=Tt(e,et),Me={fb:vt,tex:ke},Ve={fb:Et,tex:et},ke},no=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ve.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,ot),t.enableVertexAttribArray(ze.positionLocation),t.vertexAttribPointer(ze.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Me.tex),t.useProgram(Ne),t.uniform1i(ze.uInputTextureLocation,0),t.uniform2f(ze.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const r=Me;Me=Ve,Ve=r}return Me.tex};function ro(e){let t,n,o,r,a=e[1]?"Play":"Pause",i,h,u,c,l,f,x=e[0].width+"",M,b,P=e[0].height+"",I,q,B=e[0].width*e[0].height+"",z,se,Q,K,ce,ee,S,A,$,k,J,oe,ne,G,re,ie,xe,O,Y,Z,ve,Ee,U,ae,Fe;return{c(){t=m("canvas"),n=g(),o=m("div"),r=m("button"),i=_(a),h=_(" (Space)"),u=g(),c=m("div"),l=m("span"),f=_("World "),M=_(x),b=_(" x "),I=_(P),q=_(" ("),z=_(B),se=_(" cells)"),Q=g(),K=m("button"),ce=_("Reload program"),ee=g(),S=m("button"),A=_("Fullscreen (f)"),$=g(),k=m("div"),J=m("button"),oe=_("Reset world (r)"),ne=g(),G=m("span"),re=m("label"),ie=_("World: width"),xe=g(),O=m("input"),Y=g(),Z=m("label"),ve=_("height"),Ee=g(),U=m("input"),this.h()},l(w){t=p(w,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(d),n=L(w),o=p(w,"DIV",{});var E=v(o);r=p(E,"BUTTON",{});var be=v(r);i=T(be,a),h=T(be," (Space)"),be.forEach(d),E.forEach(d),u=L(w),c=p(w,"DIV",{});var N=v(c);l=p(N,"SPAN",{});var W=v(l);f=T(W,"World "),M=T(W,x),b=T(W," x "),I=T(W,P),q=T(W," ("),z=T(W,B),se=T(W," cells)"),W.forEach(d),Q=L(N),K=p(N,"BUTTON",{});var Se=v(K);ce=T(Se,"Reload program"),Se.forEach(d),ee=L(N),S=p(N,"BUTTON",{});var Ce=v(S);A=T(Ce,"Fullscreen (f)"),Ce.forEach(d),N.forEach(d),$=L(w),k=p(w,"DIV",{});var X=v(k);J=p(X,"BUTTON",{});var De=v(J);oe=T(De,"Reset world (r)"),De.forEach(d),ne=L(X),G=p(X,"SPAN",{});var V=v(G);re=p(V,"LABEL",{for:!0});var $e=v(re);ie=T($e,"World: width"),$e.forEach(d),xe=L(V),O=p(V,"INPUT",{id:!0,type:!0,min:!0}),Y=L(V),Z=p(V,"LABEL",{for:!0});var Pe=v(Z);ve=T(Pe,"height"),Pe.forEach(d),Ee=L(V),U=p(V,"INPUT",{id:!0,type:!0,min:!0}),V.forEach(d),X.forEach(d),this.h()},h(){R(t,"id","canvas"),$t(t,"background-color","black"),R(t,"width",e[3].width),R(t,"height",e[3].height),R(re,"for","worldWidth"),R(O,"id","worldWidth"),R(O,"type","number"),R(O,"min",0),R(Z,"for","worldHeight"),R(U,"id","worldHeight"),R(U,"type","number"),R(U,"min",0)},m(w,E){D(w,t,E),D(w,n,E),D(w,o,E),s(o,r),s(r,i),s(r,h),D(w,u,E),D(w,c,E),s(c,l),s(l,f),s(l,M),s(l,b),s(l,I),s(l,q),s(l,z),s(l,se),s(c,Q),s(c,K),s(K,ce),s(c,ee),s(c,S),s(S,A),D(w,$,E),D(w,k,E),s(k,J),s(J,oe),s(k,ne),s(k,G),s(G,re),s(re,ie),s(G,xe),s(G,O),ue(O,e[0].width),s(G,Y),s(G,Z),s(Z,ve),s(G,Ee),s(G,U),ue(U,e[0].height),ae||(Fe=[y(r,"click",e[6]),y(K,"click",e[7]),y(S,"click",function(){Pt(e[2])&&e[2].apply(this,arguments)}),y(J,"click",e[5]),y(O,"change",e[5]),y(O,"input",e[8]),y(U,"change",e[5]),y(U,"input",e[9])],ae=!0)},p(w,[E]){e=w,E&2&&a!==(a=e[1]?"Play":"Pause")&&_e(i,a),E&1&&x!==(x=e[0].width+"")&&_e(M,x),E&1&&P!==(P=e[0].height+"")&&_e(I,P),E&1&&B!==(B=e[0].width*e[0].height+"")&&_e(z,B),E&1&&le(O.value)!==e[0].width&&ue(O,e[0].width),E&1&&le(U.value)!==e[0].height&&ue(U,e[0].height)},i:Le,o:Le,d(w){w&&d(t),w&&d(n),w&&d(o),w&&d(u),w&&d(c),w&&d($),w&&d(k),ae=!1,yt(Fe)}}}function io(e,t,n){const o={width:1600,height:900},r={width:1600,height:900};let a=!0,i,h,u;function c(){cancelAnimationFrame(u),h=Vt(),Kt(h.canvas);const I=xt(h,{worldDimensions:r});i=bt(h,{cellsTex:I.cellsTex,texDimensions:r}),Jt(h,{screenDimensions:o});function q(){return a||(i=no({gl:h,worldDimensions:r,screenDimensions:o})),Qt({gl:h,cellsTex:i,worldDimensions:r}),u=requestAnimationFrame(q)}u=requestAnimationFrame(q)}let l;It(()=>{c(),n(2,l=eo(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",I=>{if(I.code==="Space"&&(n(1,a=!a),I.preventDefault()),I.code==="KeyF"){l();return}if(I.code==="KeyR"){f();return}})});const f=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const I=xt(h,{worldDimensions:r});i=bt(h,{cellsTex:I.cellsTex,texDimensions:r})},x=()=>n(1,a=!a),M=()=>c();function b(){r.width=le(this.value),n(0,r)}function P(){r.height=le(this.value),n(0,r)}return[r,a,l,o,c,f,x,M,b,P]}class ao extends Ke{constructor(t){super(),Ze(this,t,io,ro,je,{})}}const uo=["VERTEX_SHADER","FRAGMENT_SHADER"];function lo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return so(t),t}function so(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Ot(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function At(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Xt(e,t,n,o,r){const a=[];for(let h=0;h<t.length;++h){const u=uo[h]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=co(e,t[h],u,r);if(!c)throw"Can not create shader";a.push(c)}const i=fo(e,a,n,o,r);if(!i)throw"Can not create program";return i}function co(e,t,n,o){const r=o||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const h=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+h+`
`+t.split(`
`).map((u,c)=>`${c+1}: ${u}`).join(`
`))),e.deleteShader(a),null}return a}function fo(e,t,n,o,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(u){e.attachShader(i,u)}),n&&n.forEach(function(u,c){e.bindAttribLocation(i,o?o[c]:c,u)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const u=e.getProgramInfoLog(i);return a("Error in program linking:"+u),e.deleteProgram(i),null}return i}function ho(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const mo=`precision mediump float;
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

`;let Ae,we,He;const To=(e,t)=>{const{screenDimensions:n,mode:o}=t,{height:r,width:a}=n;let i=po;if(o==="gradiant"&&(i=_o),we=Xt(e,[mo,i]),Ae={positionLocation:e.getAttribLocation(we,"a_position"),textureLocation:e.getUniformLocation(we,"u_texture"),worldSizeLocation:e.getUniformLocation(we,"u_worldSize"),zoomLocation:e.getUniformLocation(we,"u_zoom"),panLocation:e.getUniformLocation(we,"u_pan")},He=e.createBuffer(),!He)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,He),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},xo=e=>{const{gl:t,cellsTex:n,worldDimensions:o,zoomLevel:r,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(we),t.bindBuffer(t.ARRAY_BUFFER,He),t.enableVertexAttribArray(Ae.positionLocation),t.vertexAttribPointer(Ae.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ae.textureLocation,0),t.uniform2f(Ae.worldSizeLocation,o.width,o.height),t.uniform1f(Ae.zoomLocation,Math.max(r,1)),t.uniform2f(Ae.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function vo(e,t,n){function o(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function wt(e,t){const{worldDimensions:n,initialDensity:o}=t;let r=o;r>1&&(r=1);const a=n.width*n.height,i=new Array(a).fill(0).map(u=>Math.random()<r?1:0);return{cellsTex:Ot(e,new Float32Array(i.map((u,c)=>[u,c,0,0]).flat()),n.width,n.height)}}const Eo=` attribute vec2 aPosition;

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
`;let Re,ge,nt,Ge,tt,Rt,gt,Oe,Ye;const Lt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return ge=Xt(e,[Eo,bo]),Re={uInputTextureLocation:e.getUniformLocation(ge,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ge,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(ge,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(ge,"uMouseMode"),positionLocation:e.getAttribLocation(ge,"aPosition")},nt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,nt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Ge=n,tt=Ot(e,null,o.width,o.height),Rt=At(e,Ge),gt=At(e,tt),Oe={fb:Rt,tex:Ge},Ye={fb:gt,tex:tt},Ge},Ao=e=>{const{gl:t,worldDimensions:n,screenDimensions:o,mouseCoordinates:r,mouseMode:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ye.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,nt),t.enableVertexAttribArray(Re.positionLocation),t.vertexAttribPointer(Re.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Oe.tex),t.useProgram(ge),t.uniform1i(Re.uInputTextureLocation,0),t.uniform2f(Re.uTextureSizeLocation,n.width,n.height),t.uniform2f(Re.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(Re.uMouseModeLocation,a),t.drawArrays(t.TRIANGLES,0,6);{const i=Oe;Oe=Ye,Ye=i}return Oe.tex};function wo(e){let t,n,o,r,a=e[4]?"Play":"Pause",i,h,u,c,l,f,x,M,b,P,I,q,B,z,se,Q=e[0].width+"",K,ce,ee=e[0].height+"",S,A,$=e[0].width*e[0].height+"",k,J,oe,ne,G,re,ie,xe,O,Y,Z,ve,Ee,U,ae,Fe,w,E,be,N,W,Se,Ce,X,De,V,$e,Pe,te,Je,at;return{c(){t=m("canvas"),n=g(),o=m("div"),r=m("button"),i=_(a),h=_(" (Space)"),u=g(),c=m("button"),l=_("Zoom in (I)"),f=g(),x=m("button"),M=_("Zoom out (O)"),b=g(),P=m("button"),I=_("Reset zoom (Z)"),q=g(),B=m("div"),z=m("span"),se=_("World "),K=_(Q),ce=_(" x "),S=_(ee),A=_(" ("),k=_($),J=_(" cells)"),oe=g(),ne=m("button"),G=_("Reload program"),re=g(),ie=m("button"),xe=_("Fullscreen (f)"),O=g(),Y=m("div"),Z=m("button"),ve=_("Reset world (r)"),Ee=g(),U=m("span"),ae=m("label"),Fe=_("Initial density [0-1]"),w=g(),E=m("input"),be=g(),N=m("span"),W=m("label"),Se=_("World: width"),Ce=g(),X=m("input"),De=g(),V=m("label"),$e=_("height"),Pe=g(),te=m("input"),this.h()},l(F){t=p(F,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(d),n=L(F),o=p(F,"DIV",{});var C=v(o);r=p(C,"BUTTON",{});var Qe=v(r);i=T(Qe,a),h=T(Qe," (Space)"),Qe.forEach(d),u=L(C),c=p(C,"BUTTON",{});var ut=v(c);l=T(ut,"Zoom in (I)"),ut.forEach(d),f=L(C),x=p(C,"BUTTON",{});var lt=v(x);M=T(lt,"Zoom out (O)"),lt.forEach(d),b=L(C),P=p(C,"BUTTON",{});var st=v(P);I=T(st,"Reset zoom (Z)"),st.forEach(d),C.forEach(d),q=L(F),B=p(F,"DIV",{});var ye=v(B);z=p(ye,"SPAN",{});var me=v(z);se=T(me,"World "),K=T(me,Q),ce=T(me," x "),S=T(me,ee),A=T(me," ("),k=T(me,$),J=T(me," cells)"),me.forEach(d),oe=L(ye),ne=p(ye,"BUTTON",{});var ct=v(ne);G=T(ct,"Reload program"),ct.forEach(d),re=L(ye),ie=p(ye,"BUTTON",{});var ft=v(ie);xe=T(ft,"Fullscreen (f)"),ft.forEach(d),ye.forEach(d),O=L(F),Y=p(F,"DIV",{});var Ie=v(Y);Z=p(Ie,"BUTTON",{});var dt=v(Z);ve=T(dt,"Reset world (r)"),dt.forEach(d),Ee=L(Ie),U=p(Ie,"SPAN",{});var Xe=v(U);ae=p(Xe,"LABEL",{for:!0});var ht=v(ae);Fe=T(ht,"Initial density [0-1]"),ht.forEach(d),w=L(Xe),E=p(Xe,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Xe.forEach(d),be=L(Ie),N=p(Ie,"SPAN",{});var pe=v(N);W=p(pe,"LABEL",{for:!0});var mt=v(W);Se=T(mt,"World: width"),mt.forEach(d),Ce=L(pe),X=p(pe,"INPUT",{id:!0,type:!0,min:!0}),De=L(pe),V=p(pe,"LABEL",{for:!0});var pt=v(V);$e=T(pt,"height"),pt.forEach(d),Pe=L(pe),te=p(pe,"INPUT",{id:!0,type:!0,min:!0}),pe.forEach(d),Ie.forEach(d),this.h()},h(){R(t,"id","canvas"),$t(t,"background-color","black"),R(t,"width",e[6].width),R(t,"height",e[6].height),R(ae,"for","initialDensity"),R(E,"id","initialDensity"),R(E,"type","number"),R(E,"min",0),R(E,"max",1),R(W,"for","worldWidth"),R(X,"id","worldWidth"),R(X,"type","number"),R(X,"min",0),R(V,"for","worldHeight"),R(te,"id","worldHeight"),R(te,"type","number"),R(te,"min",0)},m(F,C){D(F,t,C),D(F,n,C),D(F,o,C),s(o,r),s(r,i),s(r,h),s(o,u),s(o,c),s(c,l),s(o,f),s(o,x),s(x,M),s(o,b),s(o,P),s(P,I),D(F,q,C),D(F,B,C),s(B,z),s(z,se),s(z,K),s(z,ce),s(z,S),s(z,A),s(z,k),s(z,J),s(B,oe),s(B,ne),s(ne,G),s(B,re),s(B,ie),s(ie,xe),D(F,O,C),D(F,Y,C),s(Y,Z),s(Z,ve),s(Y,Ee),s(Y,U),s(U,ae),s(ae,Fe),s(U,w),s(U,E),ue(E,e[3]),s(Y,be),s(Y,N),s(N,W),s(W,Se),s(N,Ce),s(N,X),ue(X,e[0].width),s(N,De),s(N,V),s(V,$e),s(N,Pe),s(N,te),ue(te,e[0].height),Je||(at=[y(r,"click",e[9]),y(c,"click",e[10]),y(x,"click",e[11]),y(P,"click",e[12]),y(ne,"click",e[13]),y(ie,"click",function(){Pt(e[5])&&e[5].apply(this,arguments)}),y(Z,"click",e[8]),y(E,"change",e[8]),y(E,"input",e[14]),y(X,"change",e[8]),y(X,"input",e[15]),y(te,"change",e[8]),y(te,"input",e[16])],Je=!0)},p(F,[C]){e=F,C&16&&a!==(a=e[4]?"Play":"Pause")&&_e(i,a),C&1&&Q!==(Q=e[0].width+"")&&_e(K,Q),C&1&&ee!==(ee=e[0].height+"")&&_e(S,ee),C&1&&$!==($=e[0].width*e[0].height+"")&&_e(k,$),C&8&&le(E.value)!==e[3]&&ue(E,e[3]),C&1&&le(X.value)!==e[0].width&&ue(X,e[0].width),C&1&&le(te.value)!==e[0].height&&ue(te,e[0].height)},i:Le,o:Le,d(F){F&&d(t),F&&d(n),F&&d(o),F&&d(q),F&&d(B),F&&d(O),F&&d(Y),Je=!1,yt(at)}}}function Ro(e,t,n){const o={width:1200,height:900},r={width:1200,height:900},a={x:-100,y:-100},i={x:0,y:0};let h=0,u=1,c=.05,l=!0,f,x,M;function b(){cancelAnimationFrame(M),x=lo(),ho(x.canvas);const S=wt(x,{worldDimensions:r,initialDensity:c});f=Lt(x,{cellsTex:S.cellsTex,texDimensions:r}),To(x,{screenDimensions:o,mode:"gradiant"});function A(){l||(f=Ao({gl:x,worldDimensions:r,screenDimensions:o,mouseCoordinates:a,mouseMode:h}));const $=.005;return a.x<.2&&i.x>=$&&n(1,i.x-=$,i),a.x>.8&&i.x<1-1/u&&n(1,i.x+=$,i),a.y<.2&&i.y>=$&&n(1,i.y-=$,i),a.y>.8&&i.y<1-1/u&&n(1,i.y+=$,i),xo({gl:x,cellsTex:f,worldDimensions:r,zoomLevel:u,pan:i}),M=requestAnimationFrame(A)}M=requestAnimationFrame(A)}let P;It(()=>{b(),n(5,P=vo(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",A=>{if(A.code==="Space"&&(n(4,l=!l),A.preventDefault()),A.code==="KeyF"){P();return}if(A.code==="KeyR"){I();return}if(A.code==="KeyI"){n(2,u++,u);return}if(A.code==="KeyO"){n(2,u=Math.max(u-1,1)),u===1&&(n(1,i.x=0,i),n(1,i.y=0,i));return}if(A.code==="KeyZ"){n(2,u=1),n(1,i.x=0,i),n(1,i.y=0,i);return}});const S=document.getElementById("canvas");if(!S)throw new Error("Canvas unavailable");S.addEventListener("mousemove",A=>{const $=S.getBoundingClientRect(),k=S.width/$.width,J=S.height/$.height,oe={x:(A.clientX-$.left)*k,y:(A.clientY-$.top)*J};a.x=oe.x/o.width,a.y=oe.y/o.height}),S.addEventListener("mousedown",A=>{A.preventDefault(),A.button===0?h=1:A.button===2&&(h=2)}),S.addEventListener("mouseup",A=>{A.preventDefault(),h=0}),S.addEventListener("contextmenu",A=>(A.preventDefault(),!1))});const I=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const S=wt(x,{worldDimensions:r,initialDensity:c});f=Lt(x,{cellsTex:S.cellsTex,texDimensions:r})},q=()=>n(4,l=!l),B=()=>n(2,u+=1),z=()=>{n(2,u=Math.max(u-1,1)),u===1&&(n(1,i.x=0,i),n(1,i.y=0,i))},se=()=>n(2,u=1),Q=()=>b();function K(){c=le(this.value),n(3,c)}function ce(){r.width=le(this.value),n(0,r)}function ee(){r.height=le(this.value),n(0,r)}return[r,i,u,c,l,P,o,b,I,q,B,z,se,Q,K,ce,ee]}class go extends Ke{constructor(t){super(),Ze(this,t,Ro,wo,je,{})}}function Ft(e,t,n){const o=e.slice();return o[1]=t[n],o}function St(e,t,n){const o=e.slice();return o[1]=t[n],o}function Lo(e){let t;return{c(){t=_("About")},l(n){t=T(n,"About")},m(n,o){D(n,t,o)},d(n){n&&d(t)}}}function Fo(e){let t=e[1].title+"",n;return{c(){n=_(t)},l(o){n=T(o,t)},m(o,r){D(o,n,r)},p:Le,d(o){o&&d(n)}}}function Ct(e){let t,n;return t=new zt({props:{$$slots:{default:[Fo]},$$scope:{ctx:e}}}),{c(){fe(t.$$.fragment)},l(o){Te(t.$$.fragment,o)},m(o,r){de(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(H(t.$$.fragment,o),n=!0)},o(o){j(t.$$.fragment,o),n=!1},d(o){he(t,o)}}}function So(e){let t,n,o,r;t=new zt({props:{$$slots:{default:[Lo]},$$scope:{ctx:e}}});let a=e[0],i=[];for(let u=0;u<a.length;u+=1)i[u]=Ct(St(e,a,u));const h=u=>j(i[u],1,1,()=>{i[u]=null});return{c(){fe(t.$$.fragment),n=g();for(let u=0;u<i.length;u+=1)i[u].c();o=qe()},l(u){Te(t.$$.fragment,u),n=L(u);for(let c=0;c<i.length;c+=1)i[c].l(u);o=qe()},m(u,c){de(t,u,c),D(u,n,c);for(let l=0;l<i.length;l+=1)i[l].m(u,c);D(u,o,c),r=!0},p(u,c){const l={};if(c&64&&(l.$$scope={dirty:c,ctx:u}),t.$set(l),c&1){a=u[0];let f;for(f=0;f<a.length;f+=1){const x=St(u,a,f);i[f]?(i[f].p(x,c),H(i[f],1)):(i[f]=Ct(x),i[f].c(),H(i[f],1),i[f].m(o.parentNode,o))}for(rt(),f=a.length;f<i.length;f+=1)h(f);it()}},i(u){if(!r){H(t.$$.fragment,u);for(let c=0;c<a.length;c+=1)H(i[c]);r=!0}},o(u){j(t.$$.fragment,u),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)j(i[c]);r=!1},d(u){he(t,u),u&&d(n),Ut(i,u),u&&d(o)}}}function Co(e){let t,n;return{c(){t=m("p"),n=_("Experiments running Conway's Game of Life in WebGL shaders.")},l(o){t=p(o,"P",{});var r=v(t);n=T(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(d)},m(o,r){D(o,t,r),s(t,n)},p:Le,d(o){o&&d(t)}}}function Do(e){let t,n,o;var r=e[1].component;function a(i){return{}}return r&&(t=_t(r,a())),{c(){t&&fe(t.$$.fragment),n=g()},l(i){t&&Te(t.$$.fragment,i),n=L(i)},m(i,h){t&&de(t,i,h),D(i,n,h),o=!0},p(i,h){if(r!==(r=i[1].component)){if(t){rt();const u=t;j(u.$$.fragment,1,0,()=>{he(u,1)}),it()}r?(t=_t(r,a()),fe(t.$$.fragment),H(t.$$.fragment,1),de(t,n.parentNode,n)):t=null}},i(i){o||(t&&H(t.$$.fragment,i),o=!0)},o(i){t&&j(t.$$.fragment,i),o=!1},d(i){t&&he(t,i),i&&d(n)}}}function Dt(e){let t,n;return t=new Bt({props:{$$slots:{default:[Do]},$$scope:{ctx:e}}}),{c(){fe(t.$$.fragment)},l(o){Te(t.$$.fragment,o)},m(o,r){de(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(H(t.$$.fragment,o),n=!0)},o(o){j(t.$$.fragment,o),n=!1},d(o){he(t,o)}}}function $o(e){let t,n,o,r,a,i;t=new Gt({props:{$$slots:{default:[So]},$$scope:{ctx:e}}}),o=new Bt({props:{$$slots:{default:[Co]},$$scope:{ctx:e}}});let h=e[0],u=[];for(let l=0;l<h.length;l+=1)u[l]=Dt(Ft(e,h,l));const c=l=>j(u[l],1,1,()=>{u[l]=null});return{c(){fe(t.$$.fragment),n=g(),fe(o.$$.fragment),r=g();for(let l=0;l<u.length;l+=1)u[l].c();a=qe()},l(l){Te(t.$$.fragment,l),n=L(l),Te(o.$$.fragment,l),r=L(l);for(let f=0;f<u.length;f+=1)u[f].l(l);a=qe()},m(l,f){de(t,l,f),D(l,n,f),de(o,l,f),D(l,r,f);for(let x=0;x<u.length;x+=1)u[x].m(l,f);D(l,a,f),i=!0},p(l,f){const x={};f&64&&(x.$$scope={dirty:f,ctx:l}),t.$set(x);const M={};if(f&64&&(M.$$scope={dirty:f,ctx:l}),o.$set(M),f&1){h=l[0];let b;for(b=0;b<h.length;b+=1){const P=Ft(l,h,b);u[b]?(u[b].p(P,f),H(u[b],1)):(u[b]=Dt(P),u[b].c(),H(u[b],1),u[b].m(a.parentNode,a))}for(rt(),b=h.length;b<u.length;b+=1)c(b);it()}},i(l){if(!i){H(t.$$.fragment,l),H(o.$$.fragment,l);for(let f=0;f<h.length;f+=1)H(u[f]);i=!0}},o(l){j(t.$$.fragment,l),j(o.$$.fragment,l),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)j(u[f]);i=!1},d(l){he(t,l),l&&d(n),he(o,l),l&&d(r),Ut(u,l),l&&d(a)}}}function Po(e){let t,n,o;return n=new kt({props:{$$slots:{default:[$o]},$$scope:{ctx:e}}}),{c(){t=m("div"),fe(n.$$.fragment)},l(r){t=p(r,"DIV",{});var a=v(t);Te(n.$$.fragment,a),a.forEach(d)},m(r,a){D(r,t,a),de(n,t,null),o=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),n.$set(i)},i(r){o||(H(n.$$.fragment,r),o=!0)},o(r){j(n.$$.fragment,r),o=!1},d(r){r&&d(t),he(n)}}}function yo(e){return[[{title:"V1",component:ao},{title:"V2",component:go}]]}class Io extends Ke{constructor(t){super(),Ze(this,t,yo,Po,je,{})}}function Uo(e){let t,n;return t=new Io({}),{c(){fe(t.$$.fragment)},l(o){Te(t.$$.fragment,o)},m(o,r){de(t,o,r),n=!0},p:Le,i(o){n||(H(t.$$.fragment,o),n=!0)},o(o){j(t.$$.fragment,o),n=!1},d(o){he(t,o)}}}class No extends Ke{constructor(t){super(),Ze(this,t,null,Uo,je,{})}}export{No as default};
