import{S as Je,i as Qe,s as et,k as p,a as A,q as T,l as _,m as v,h,c as w,r as x,n as g,p as kt,b as F,D as u,O as ce,K as $,R as Xt,u as Te,P as fe,B as Pe,M as Gt,o as Wt,w as xe,x as Se,y as ve,f as G,t as K,z as Ee,e as je,g as ht,d as mt,L as Vt,v as Lt}from"../../../chunks/index-46ced799.js";import{T as Jt,a as Qt,b as Ht,c as Yt}from"../../../chunks/TabPanel-3f95d051.js";const eo=["VERTEX_SHADER","FRAGMENT_SHADER"];function to(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return oo(t),t}function oo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Kt(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function St(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function qt(e,t,n,o,r){const a=[];for(let d=0;d<t.length;++d){const l=eo[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=no(e,t[d],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=ro(e,a,n,o,r);if(!i)throw"Can not create program";return i}function no(e,t,n,o){const r=o||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+d+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function ro(e,t,n,o,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),n&&n.forEach(function(l,s){e.bindAttribLocation(i,o?o[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function io(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const ao=`attribute vec2 a_position;
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

`,lo=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let Ne,Me,Ye;const uo=(e,t)=>{const{screenDimensions:n}=t,{height:o,width:r}=n;if(Me=qt(e,[ao,lo]),Ne={positionLocation:e.getAttribLocation(Me,"a_position"),textureLocation:e.getUniformLocation(Me,"u_texture"),worldSizeLocation:e.getUniformLocation(Me,"u_worldSize")},Ye=e.createBuffer(),!Ye)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Ye),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,o,r,0,r,0,0,o,r,o]),e.STATIC_DRAW)},so=e=>{const{gl:t,cellsTex:n,worldDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Me),t.bindBuffer(t.ARRAY_BUFFER,Ye),t.enableVertexAttribArray(Ne.positionLocation),t.vertexAttribPointer(Ne.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ne.textureLocation,0),t.uniform2f(Ne.worldSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6)};function co(e,t,n){function o(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function Ft(e,t){const{worldDimensions:n}=t,o=n.width*n.height,r=new Array(o).fill(0).map(i=>Math.random()<.5?1:0);return{cellsTex:Kt(e,new Float32Array(r.map(i=>[i,0,0,0]).flat()),n.width,n.height)}}const fo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,ho=`precision highp float;

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
`;let Oe,ke,ft,Ve,st,Dt,Ct,Xe,Ke;const $t=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return ke=qt(e,[fo,ho]),Oe={uInputTextureLocation:e.getUniformLocation(ke,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ke,"uTextureSize"),positionLocation:e.getAttribLocation(ke,"aPosition")},ft=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,ft),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Ve=n,st=Kt(e,null,o.width,o.height),Dt=St(e,Ve),Ct=St(e,st),Xe={fb:Dt,tex:Ve},Ke={fb:Ct,tex:st},Ve},mo=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ke.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,ft),t.enableVertexAttribArray(Oe.positionLocation),t.vertexAttribPointer(Oe.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Xe.tex),t.useProgram(ke),t.uniform1i(Oe.uInputTextureLocation,0),t.uniform2f(Oe.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const r=Xe;Xe=Ke,Ke=r}return Xe.tex};function po(e){let t,n,o,r,a=e[1]?"Play":"Pause",i,d,l,s,c,f,L=e[0].width+"",D,E,N=e[0].height+"",P,I,J=e[0].width*e[0].height+"",ne,q,de,Y,O,M,Z,Q,ee,W,V,re,B,m,C,he,me,y,Fe,ie,ae,De,k,X,pe;return{c(){t=p("canvas"),n=A(),o=p("div"),r=p("button"),i=T(a),d=T(" (Space)"),l=A(),s=p("div"),c=p("span"),f=T("World "),D=T(L),E=T(" x "),P=T(N),I=T(" ("),ne=T(J),q=T(" cells)"),de=A(),Y=p("button"),O=T("Reload program"),M=A(),Z=p("button"),Q=T("Fullscreen (f)"),ee=A(),W=p("div"),V=p("button"),re=T("Reset world (r)"),B=A(),m=p("span"),C=p("label"),he=T("World: width"),me=A(),y=p("input"),Fe=A(),ie=p("label"),ae=T("height"),De=A(),k=p("input"),this.h()},l(b){t=_(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(h),n=w(b),o=_(b,"DIV",{});var U=v(o);r=_(U,"BUTTON",{});var le=v(r);i=x(le,a),d=x(le," (Space)"),le.forEach(h),U.forEach(h),l=w(b),s=_(b,"DIV",{});var ue=v(s);c=_(ue,"SPAN",{});var j=v(c);f=x(j,"World "),D=x(j,L),E=x(j," x "),P=x(j,N),I=x(j," ("),ne=x(j,J),q=x(j," cells)"),j.forEach(h),de=w(ue),Y=_(ue,"BUTTON",{});var se=v(Y);O=x(se,"Reload program"),se.forEach(h),M=w(ue),Z=_(ue,"BUTTON",{});var _e=v(Z);Q=x(_e,"Fullscreen (f)"),_e.forEach(h),ue.forEach(h),ee=w(b),W=_(b,"DIV",{});var be=v(W);V=_(be,"BUTTON",{});var Ie=v(V);re=x(Ie,"Reset world (r)"),Ie.forEach(h),B=w(be),m=_(be,"SPAN",{});var z=v(m);C=_(z,"LABEL",{for:!0});var ye=v(C);he=x(ye,"World: width"),ye.forEach(h),me=w(z),y=_(z,"INPUT",{id:!0,type:!0,min:!0}),Fe=w(z),ie=_(z,"LABEL",{for:!0});var H=v(ie);ae=x(H,"height"),H.forEach(h),De=w(z),k=_(z,"INPUT",{id:!0,type:!0,min:!0}),z.forEach(h),be.forEach(h),this.h()},h(){g(t,"id","canvas"),kt(t,"background-color","black"),g(t,"width",e[3].width),g(t,"height",e[3].height),g(C,"for","worldWidth"),g(y,"id","worldWidth"),g(y,"type","number"),g(y,"min",0),g(ie,"for","worldHeight"),g(k,"id","worldHeight"),g(k,"type","number"),g(k,"min",0)},m(b,U){F(b,t,U),F(b,n,U),F(b,o,U),u(o,r),u(r,i),u(r,d),F(b,l,U),F(b,s,U),u(s,c),u(c,f),u(c,D),u(c,E),u(c,P),u(c,I),u(c,ne),u(c,q),u(s,de),u(s,Y),u(Y,O),u(s,M),u(s,Z),u(Z,Q),F(b,ee,U),F(b,W,U),u(W,V),u(V,re),u(W,B),u(W,m),u(m,C),u(C,he),u(m,me),u(m,y),ce(y,e[0].width),u(m,Fe),u(m,ie),u(ie,ae),u(m,De),u(m,k),ce(k,e[0].height),X||(pe=[$(r,"click",e[6]),$(Y,"click",e[7]),$(Z,"click",function(){Xt(e[2])&&e[2].apply(this,arguments)}),$(V,"click",e[5]),$(y,"change",e[5]),$(y,"input",e[8]),$(k,"change",e[5]),$(k,"input",e[9])],X=!0)},p(b,[U]){e=b,U&2&&a!==(a=e[1]?"Play":"Pause")&&Te(i,a),U&1&&L!==(L=e[0].width+"")&&Te(D,L),U&1&&N!==(N=e[0].height+"")&&Te(P,N),U&1&&J!==(J=e[0].width*e[0].height+"")&&Te(ne,J),U&1&&fe(y.value)!==e[0].width&&ce(y,e[0].width),U&1&&fe(k.value)!==e[0].height&&ce(k,e[0].height)},i:Pe,o:Pe,d(b){b&&h(t),b&&h(n),b&&h(o),b&&h(l),b&&h(s),b&&h(ee),b&&h(W),X=!1,Gt(pe)}}}function _o(e,t,n){const o={width:1600,height:900},r={width:1600,height:900};let a=!0,i,d,l;function s(){cancelAnimationFrame(l),d=to(),io(d.canvas);const P=Ft(d,{worldDimensions:r});i=$t(d,{cellsTex:P.cellsTex,texDimensions:r}),uo(d,{screenDimensions:o});function I(){return a||(i=mo({gl:d,worldDimensions:r,screenDimensions:o})),so({gl:d,cellsTex:i,worldDimensions:r}),l=requestAnimationFrame(I)}l=requestAnimationFrame(I)}let c;Wt(()=>{s(),n(2,c=co(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",P=>{if(P.code==="Space"&&(n(1,a=!a),P.preventDefault()),P.code==="KeyF"){c();return}if(P.code==="KeyR"){f();return}})});const f=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const P=Ft(d,{worldDimensions:r});i=$t(d,{cellsTex:P.cellsTex,texDimensions:r})},L=()=>n(1,a=!a),D=()=>s();function E(){r.width=fe(this.value),n(0,r)}function N(){r.height=fe(this.value),n(0,r)}return[r,a,c,o,s,f,L,D,E,N]}class To extends Je{constructor(t){super(),Qe(this,t,_o,po,et,{})}}const xo=["VERTEX_SHADER","FRAGMENT_SHADER"];function vo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Eo(t),t}function Eo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Zt(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function Pt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function jt(e,t,n,o,r){const a=[];for(let d=0;d<t.length;++d){const l=xo[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=bo(e,t[d],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=Ao(e,a,n,o,r);if(!i)throw"Can not create program";return i}function bo(e,t,n,o){const r=o||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+d+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function Ao(e,t,n,o,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),n&&n.forEach(function(l,s){e.bindAttribLocation(i,o?o[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function wo(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Ro=`precision mediump float;
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
`,go=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Lo=`precision mediump float;
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

`;let Ce,$e,qe;const So=(e,t)=>{const{screenDimensions:n,mode:o}=t,{height:r,width:a}=n;let i=go;if(o==="gradiant"&&(i=Lo),$e=jt(e,[Ro,i]),Ce={positionLocation:e.getAttribLocation($e,"a_position"),textureLocation:e.getUniformLocation($e,"u_texture"),worldSizeLocation:e.getUniformLocation($e,"u_worldSize"),zoomLocation:e.getUniformLocation($e,"u_zoom"),panLocation:e.getUniformLocation($e,"u_pan")},qe=e.createBuffer(),!qe)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,qe),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},Fo=e=>{const{gl:t,cellsTex:n,worldDimensions:o,zoomLevel:r,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram($e),t.bindBuffer(t.ARRAY_BUFFER,qe),t.enableVertexAttribArray(Ce.positionLocation),t.vertexAttribPointer(Ce.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ce.textureLocation,0),t.uniform2f(Ce.worldSizeLocation,o.width,o.height),t.uniform1f(Ce.zoomLocation,Math.max(r,1)),t.uniform2f(Ce.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function Do(e,t,n){function o(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function It(e,t){const{worldDimensions:n,initialDensity:o,mode:r}=t;let a=o;a>1&&(a=1);const i=n.width*n.height;let d=new Array(i).fill(0);return r==="random"&&(d=d.map(s=>Math.random()<a?1:0)),{cellsTex:Zt(e,new Float32Array(d.map((s,c)=>[s,c,0,0]).flat()),n.width,n.height)}}const Co=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,$o=`precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;
uniform vec2 uMouseCoordinates;
uniform int uMouseMode; // 0 do nothing; 1 draw; 2 erase
uniform int uInfiniteSource; // 0 do nothing; 1 generate cells

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

    if (uInfiniteSource == 1 && distance(texcoord, vec2(0.5, 0.5)) < 0.02) {
        if (gold_noise(texcoord, 155790.0) < 0.05) {
            nextAlive = 1.0;
        }
    }

    gl_FragColor = vec4(nextAlive, id, 0.0, 0.0);
}
`;let ge,Le,dt,He,ct,yt,Ut,Ge,Ze;const Bt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Le=jt(e,[Co,$o]),ge={uInputTextureLocation:e.getUniformLocation(Le,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Le,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Le,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Le,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Le,"uInfiniteSource"),positionLocation:e.getAttribLocation(Le,"aPosition")},dt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,dt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),He=n,ct=Zt(e,null,o.width,o.height),yt=Pt(e,He),Ut=Pt(e,ct),Ge={fb:yt,tex:He},Ze={fb:Ut,tex:ct},He},Po=e=>{const{gl:t,worldDimensions:n,screenDimensions:o,mouseCoordinates:r,mouseMode:a,infiniteSource:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ze.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,dt),t.enableVertexAttribArray(ge.positionLocation),t.vertexAttribPointer(ge.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ge.tex),t.useProgram(Le),t.uniform1i(ge.uInputTextureLocation,0),t.uniform2f(ge.uTextureSizeLocation,n.width,n.height),t.uniform2f(ge.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(ge.uMouseModeLocation,a),t.uniform1i(ge.uInfiniteSourceLocation,i?1:0),t.drawArrays(t.TRIANGLES,0,6);{const d=Ge;Ge=Ze,Ze=d}return Ge.tex};function Io(e){let t,n,o,r,a=e[5]?"Play":"Pause",i,d,l,s,c=e[2]?"Disable":"Enable",f,L,D,E,N,P,I,J,ne,q,de,Y,O,M,Z,Q=e[0].width+"",ee,W,V=e[0].height+"",re,B,m=e[0].width*e[0].height+"",C,he,me,y,Fe,ie,ae,De,k,X,pe,b,U,le,ue,j,se,_e,be,Ie,z,ye,H,Ue,tt,ot,te,nt,Be,rt,it,oe,at,pt;return{c(){t=p("canvas"),n=A(),o=p("div"),r=p("button"),i=T(a),d=T(" (Space)"),l=A(),s=p("button"),f=T(c),L=T(" constant cells generation (E)"),D=A(),E=p("button"),N=T("Zoom in (I)"),P=A(),I=p("button"),J=T("Zoom out (O)"),ne=A(),q=p("button"),de=T("Reset zoom (Z)"),Y=A(),O=p("div"),M=p("span"),Z=T("World "),ee=T(Q),W=T(" x "),re=T(V),B=T(" ("),C=T(m),he=T(" cells)"),me=A(),y=p("button"),Fe=T("Reload program"),ie=A(),ae=p("button"),De=T("Fullscreen (f)"),k=A(),X=p("div"),pe=p("button"),b=T("Reset world (R)"),U=A(),le=p("button"),ue=T("Empty world (E)"),j=A(),se=p("span"),_e=p("label"),be=T("Initial density [0-1]"),Ie=A(),z=p("input"),ye=A(),H=p("span"),Ue=p("label"),tt=T("World: width"),ot=A(),te=p("input"),nt=A(),Be=p("label"),rt=T("height"),it=A(),oe=p("input"),this.h()},l(S){t=_(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(h),n=w(S),o=_(S,"DIV",{});var R=v(o);r=_(R,"BUTTON",{});var lt=v(r);i=x(lt,a),d=x(lt," (Space)"),lt.forEach(h),l=w(R),s=_(R,"BUTTON",{});var ut=v(s);f=x(ut,c),L=x(ut," constant cells generation (E)"),ut.forEach(h),D=w(R),E=_(R,"BUTTON",{});var _t=v(E);N=x(_t,"Zoom in (I)"),_t.forEach(h),P=w(R),I=_(R,"BUTTON",{});var Tt=v(I);J=x(Tt,"Zoom out (O)"),Tt.forEach(h),ne=w(R),q=_(R,"BUTTON",{});var xt=v(q);de=x(xt,"Reset zoom (Z)"),xt.forEach(h),R.forEach(h),Y=w(S),O=_(S,"DIV",{});var ze=v(O);M=_(ze,"SPAN",{});var Ae=v(M);Z=x(Ae,"World "),ee=x(Ae,Q),W=x(Ae," x "),re=x(Ae,V),B=x(Ae," ("),C=x(Ae,m),he=x(Ae," cells)"),Ae.forEach(h),me=w(ze),y=_(ze,"BUTTON",{});var vt=v(y);Fe=x(vt,"Reload program"),vt.forEach(h),ie=w(ze),ae=_(ze,"BUTTON",{});var Et=v(ae);De=x(Et,"Fullscreen (f)"),Et.forEach(h),ze.forEach(h),k=w(S),X=_(S,"DIV",{});var we=v(X);pe=_(we,"BUTTON",{});var bt=v(pe);b=x(bt,"Reset world (R)"),bt.forEach(h),U=w(we),le=_(we,"BUTTON",{});var At=v(le);ue=x(At,"Empty world (E)"),At.forEach(h),j=w(we),se=_(we,"SPAN",{});var We=v(se);_e=_(We,"LABEL",{for:!0});var wt=v(_e);be=x(wt,"Initial density [0-1]"),wt.forEach(h),Ie=w(We),z=_(We,"INPUT",{id:!0,type:!0,min:!0,max:!0}),We.forEach(h),ye=w(we),H=_(we,"SPAN",{});var Re=v(H);Ue=_(Re,"LABEL",{for:!0});var Rt=v(Ue);tt=x(Rt,"World: width"),Rt.forEach(h),ot=w(Re),te=_(Re,"INPUT",{id:!0,type:!0,min:!0}),nt=w(Re),Be=_(Re,"LABEL",{for:!0});var gt=v(Be);rt=x(gt,"height"),gt.forEach(h),it=w(Re),oe=_(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(h),we.forEach(h),this.h()},h(){g(t,"id","canvas"),kt(t,"background-color","black"),g(t,"width",e[7].width),g(t,"height",e[7].height),g(_e,"for","initialDensity"),g(z,"id","initialDensity"),g(z,"type","number"),g(z,"min",0),g(z,"max",1),g(Ue,"for","worldWidth"),g(te,"id","worldWidth"),g(te,"type","number"),g(te,"min",0),g(Be,"for","worldHeight"),g(oe,"id","worldHeight"),g(oe,"type","number"),g(oe,"min",0)},m(S,R){F(S,t,R),F(S,n,R),F(S,o,R),u(o,r),u(r,i),u(r,d),u(o,l),u(o,s),u(s,f),u(s,L),u(o,D),u(o,E),u(E,N),u(o,P),u(o,I),u(I,J),u(o,ne),u(o,q),u(q,de),F(S,Y,R),F(S,O,R),u(O,M),u(M,Z),u(M,ee),u(M,W),u(M,re),u(M,B),u(M,C),u(M,he),u(O,me),u(O,y),u(y,Fe),u(O,ie),u(O,ae),u(ae,De),F(S,k,R),F(S,X,R),u(X,pe),u(pe,b),u(X,U),u(X,le),u(le,ue),u(X,j),u(X,se),u(se,_e),u(_e,be),u(se,Ie),u(se,z),ce(z,e[4]),u(X,ye),u(X,H),u(H,Ue),u(Ue,tt),u(H,ot),u(H,te),ce(te,e[0].width),u(H,nt),u(H,Be),u(Be,rt),u(H,it),u(H,oe),ce(oe,e[0].height),at||(pt=[$(r,"click",e[10]),$(s,"click",e[11]),$(E,"click",e[12]),$(I,"click",e[13]),$(q,"click",e[14]),$(y,"click",e[15]),$(ae,"click",function(){Xt(e[6])&&e[6].apply(this,arguments)}),$(pe,"click",e[16]),$(le,"click",e[17]),$(z,"input",e[18]),$(te,"change",e[19]),$(te,"input",e[20]),$(oe,"change",e[21]),$(oe,"input",e[22])],at=!0)},p(S,[R]){e=S,R&32&&a!==(a=e[5]?"Play":"Pause")&&Te(i,a),R&4&&c!==(c=e[2]?"Disable":"Enable")&&Te(f,c),R&1&&Q!==(Q=e[0].width+"")&&Te(ee,Q),R&1&&V!==(V=e[0].height+"")&&Te(re,V),R&1&&m!==(m=e[0].width*e[0].height+"")&&Te(C,m),R&16&&fe(z.value)!==e[4]&&ce(z,e[4]),R&1&&fe(te.value)!==e[0].width&&ce(te,e[0].width),R&1&&fe(oe.value)!==e[0].height&&ce(oe,e[0].height)},i:Pe,o:Pe,d(S){S&&h(t),S&&h(n),S&&h(o),S&&h(Y),S&&h(O),S&&h(k),S&&h(X),at=!1,Gt(pt)}}}function yo(e,t,n){const o={width:1200,height:900},r={width:1200,height:900},a={x:-100,y:-100},i={x:0,y:0};let d=0,l=!0,s=1,c=.05,f=!0,L,D,E;function N(){cancelAnimationFrame(E),D=vo(),wo(D.canvas);const B=It(D,{mode:"random",worldDimensions:r,initialDensity:c});L=Bt(D,{cellsTex:B.cellsTex,texDimensions:r}),So(D,{screenDimensions:o,mode:"gradiant"});function m(){f||(L=Po({gl:D,worldDimensions:r,screenDimensions:o,mouseCoordinates:a,mouseMode:d,infiniteSource:l}));const C=.005;return a.x<.2&&i.x>=C&&n(1,i.x-=C,i),a.x>.8&&i.x<1-1/s&&n(1,i.x+=C,i),a.y<.2&&i.y>=C&&n(1,i.y-=C,i),a.y>.8&&i.y<1-1/s&&n(1,i.y+=C,i),Fo({gl:D,cellsTex:L,worldDimensions:r,zoomLevel:s,pan:i}),E=requestAnimationFrame(m)}E=requestAnimationFrame(m)}let P;Wt(()=>{N(),n(6,P=Do(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",m=>{if(m.code==="Space"&&(n(5,f=!f),m.preventDefault()),m.code==="KeyF"){P();return}if(m.code==="KeyR"){I("random");return}if(m.code==="KeyE"){I("zero");return}if(m.code==="KeyI"){n(3,s++,s);return}if(m.code==="KeyS"){n(2,l=!l);return}if(m.code==="KeyO"){n(3,s=Math.max(s-1,1)),s===1&&(n(1,i.x=0,i),n(1,i.y=0,i));return}if(m.code==="KeyZ"){n(3,s=1),n(1,i.x=0,i),n(1,i.y=0,i);return}});const B=document.getElementById("canvas");if(!B)throw new Error("Canvas unavailable");B.addEventListener("mousemove",m=>{const C=B.getBoundingClientRect(),he=B.width/C.width,me=B.height/C.height,y={x:(m.clientX-C.left)*he,y:(m.clientY-C.top)*me};a.x=y.x/o.width,a.y=y.y/o.height}),B.addEventListener("mousedown",m=>{m.preventDefault(),m.button===0?d=1:m.button===2&&(d=2)}),B.addEventListener("mouseup",m=>{m.preventDefault(),d=0}),B.addEventListener("contextmenu",m=>(m.preventDefault(),!1))});const I=B=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const m=It(D,{mode:B,worldDimensions:r,initialDensity:c});L=Bt(D,{cellsTex:m.cellsTex,texDimensions:r})},J=()=>n(5,f=!f),ne=()=>n(2,l=!l),q=()=>n(3,s+=1),de=()=>{n(3,s=Math.max(s-1,1)),s===1&&(n(1,i.x=0,i),n(1,i.y=0,i))},Y=()=>n(3,s=1),O=()=>N(),M=()=>I("random"),Z=()=>I("zero");function Q(){c=fe(this.value),n(4,c)}const ee=()=>I("random");function W(){r.width=fe(this.value),n(0,r)}const V=()=>I("random");function re(){r.height=fe(this.value),n(0,r)}return[r,i,l,s,c,f,P,o,N,I,J,ne,q,de,Y,O,M,Z,Q,ee,W,V,re]}class Uo extends Je{constructor(t){super(),Qe(this,t,yo,Io,et,{})}}function zt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Nt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Bo(e){let t;return{c(){t=T("About")},l(n){t=x(n,"About")},m(n,o){F(n,t,o)},d(n){n&&h(t)}}}function zo(e){let t=e[1].title+"",n;return{c(){n=T(t)},l(o){n=x(o,t)},m(o,r){F(o,n,r)},p:Pe,d(o){o&&h(n)}}}function Mt(e){let t,n;return t=new Yt({props:{$$slots:{default:[zo]},$$scope:{ctx:e}}}),{c(){xe(t.$$.fragment)},l(o){Se(t.$$.fragment,o)},m(o,r){ve(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(G(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){Ee(t,o)}}}function No(e){let t,n,o,r;t=new Yt({props:{$$slots:{default:[Bo]},$$scope:{ctx:e}}});let a=e[0],i=[];for(let l=0;l<a.length;l+=1)i[l]=Mt(Nt(e,a,l));const d=l=>K(i[l],1,1,()=>{i[l]=null});return{c(){xe(t.$$.fragment),n=A();for(let l=0;l<i.length;l+=1)i[l].c();o=je()},l(l){Se(t.$$.fragment,l),n=w(l);for(let s=0;s<i.length;s+=1)i[s].l(l);o=je()},m(l,s){ve(t,l,s),F(l,n,s);for(let c=0;c<i.length;c+=1)i[c].m(l,s);F(l,o,s),r=!0},p(l,s){const c={};if(s&64&&(c.$$scope={dirty:s,ctx:l}),t.$set(c),s&1){a=l[0];let f;for(f=0;f<a.length;f+=1){const L=Nt(l,a,f);i[f]?(i[f].p(L,s),G(i[f],1)):(i[f]=Mt(L),i[f].c(),G(i[f],1),i[f].m(o.parentNode,o))}for(ht(),f=a.length;f<i.length;f+=1)d(f);mt()}},i(l){if(!r){G(t.$$.fragment,l);for(let s=0;s<a.length;s+=1)G(i[s]);r=!0}},o(l){K(t.$$.fragment,l),i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)K(i[s]);r=!1},d(l){Ee(t,l),l&&h(n),Vt(i,l),l&&h(o)}}}function Mo(e){let t,n;return{c(){t=p("p"),n=T("Experiments running Conway's Game of Life in WebGL shaders.")},l(o){t=_(o,"P",{});var r=v(t);n=x(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(h)},m(o,r){F(o,t,r),u(t,n)},p:Pe,d(o){o&&h(t)}}}function Oo(e){let t,n,o;var r=e[1].component;function a(i){return{}}return r&&(t=Lt(r,a())),{c(){t&&xe(t.$$.fragment),n=A()},l(i){t&&Se(t.$$.fragment,i),n=w(i)},m(i,d){t&&ve(t,i,d),F(i,n,d),o=!0},p(i,d){if(r!==(r=i[1].component)){if(t){ht();const l=t;K(l.$$.fragment,1,0,()=>{Ee(l,1)}),mt()}r?(t=Lt(r,a()),xe(t.$$.fragment),G(t.$$.fragment,1),ve(t,n.parentNode,n)):t=null}},i(i){o||(t&&G(t.$$.fragment,i),o=!0)},o(i){t&&K(t.$$.fragment,i),o=!1},d(i){t&&Ee(t,i),i&&h(n)}}}function Ot(e){let t,n;return t=new Ht({props:{$$slots:{default:[Oo]},$$scope:{ctx:e}}}),{c(){xe(t.$$.fragment)},l(o){Se(t.$$.fragment,o)},m(o,r){ve(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(G(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){Ee(t,o)}}}function ko(e){let t,n,o,r,a,i;t=new Qt({props:{$$slots:{default:[No]},$$scope:{ctx:e}}}),o=new Ht({props:{$$slots:{default:[Mo]},$$scope:{ctx:e}}});let d=e[0],l=[];for(let c=0;c<d.length;c+=1)l[c]=Ot(zt(e,d,c));const s=c=>K(l[c],1,1,()=>{l[c]=null});return{c(){xe(t.$$.fragment),n=A(),xe(o.$$.fragment),r=A();for(let c=0;c<l.length;c+=1)l[c].c();a=je()},l(c){Se(t.$$.fragment,c),n=w(c),Se(o.$$.fragment,c),r=w(c);for(let f=0;f<l.length;f+=1)l[f].l(c);a=je()},m(c,f){ve(t,c,f),F(c,n,f),ve(o,c,f),F(c,r,f);for(let L=0;L<l.length;L+=1)l[L].m(c,f);F(c,a,f),i=!0},p(c,f){const L={};f&64&&(L.$$scope={dirty:f,ctx:c}),t.$set(L);const D={};if(f&64&&(D.$$scope={dirty:f,ctx:c}),o.$set(D),f&1){d=c[0];let E;for(E=0;E<d.length;E+=1){const N=zt(c,d,E);l[E]?(l[E].p(N,f),G(l[E],1)):(l[E]=Ot(N),l[E].c(),G(l[E],1),l[E].m(a.parentNode,a))}for(ht(),E=d.length;E<l.length;E+=1)s(E);mt()}},i(c){if(!i){G(t.$$.fragment,c),G(o.$$.fragment,c);for(let f=0;f<d.length;f+=1)G(l[f]);i=!0}},o(c){K(t.$$.fragment,c),K(o.$$.fragment,c),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)K(l[f]);i=!1},d(c){Ee(t,c),c&&h(n),Ee(o,c),c&&h(r),Vt(l,c),c&&h(a)}}}function Xo(e){let t,n,o;return n=new Jt({props:{$$slots:{default:[ko]},$$scope:{ctx:e}}}),{c(){t=p("div"),xe(n.$$.fragment)},l(r){t=_(r,"DIV",{});var a=v(t);Se(n.$$.fragment,a),a.forEach(h)},m(r,a){F(r,t,a),ve(n,t,null),o=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),n.$set(i)},i(r){o||(G(n.$$.fragment,r),o=!0)},o(r){K(n.$$.fragment,r),o=!1},d(r){r&&h(t),Ee(n)}}}function Go(e){return[[{title:"V1",component:To},{title:"V2",component:Uo}]]}class Wo extends Je{constructor(t){super(),Qe(this,t,Go,Xo,et,{})}}function Vo(e){let t,n;return t=new Wo({}),{c(){xe(t.$$.fragment)},l(o){Se(t.$$.fragment,o)},m(o,r){ve(t,o,r),n=!0},p:Pe,i(o){n||(G(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){Ee(t,o)}}}class Ko extends Je{constructor(t){super(),Qe(this,t,null,Vo,et,{})}}export{Ko as default};
