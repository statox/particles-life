import{S as je,i as Je,s as Qe,k as m,a as A,q as _,l as p,m as E,h as d,c as w,r as T,n as g,p as zt,b as D,D as s,O as se,K as P,R as Nt,u as me,P as ce,B as Ce,M as Mt,o as Ot,w as pe,x as we,y as _e,f as W,t as K,z as Te,e as Ze,g as ct,d as ft,L as Xt,v as At}from"../../../chunks/index-46ced799.js";import{T as qt,a as Kt,b as kt,c as Gt}from"../../../chunks/TabPanel-3f95d051.js";const Zt=["VERTEX_SHADER","FRAGMENT_SHADER"];function jt(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Jt(t),t}function Jt(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Wt(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function wt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Vt(e,t,n,o,r){const a=[];for(let h=0;h<t.length;++h){const u=Zt[h]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=Qt(e,t[h],u,r);if(!l)throw"Can not create shader";a.push(l)}const i=eo(e,a,n,o,r);if(!i)throw"Can not create program";return i}function Qt(e,t,n,o){const r=o||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const h=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+h+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(a),null}return a}function eo(e,t,n,o,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(u){e.attachShader(i,u)}),n&&n.forEach(function(u,l){e.bindAttribLocation(i,o?o[l]:l,u)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const u=e.getProgramInfoLog(i);return a("Error in program linking:"+u),e.deleteProgram(i),null}return i}function to(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const oo=`attribute vec2 a_position;
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

`,no=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let ze,Ne,He;const ro=(e,t)=>{const{screenDimensions:n}=t,{height:o,width:r}=n;if(Ne=Vt(e,[oo,no]),ze={positionLocation:e.getAttribLocation(Ne,"a_position"),textureLocation:e.getUniformLocation(Ne,"u_texture"),worldSizeLocation:e.getUniformLocation(Ne,"u_worldSize")},He=e.createBuffer(),!He)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,He),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,o,r,0,r,0,0,o,r,o]),e.STATIC_DRAW)},io=e=>{const{gl:t,cellsTex:n,worldDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Ne),t.bindBuffer(t.ARRAY_BUFFER,He),t.enableVertexAttribArray(ze.positionLocation),t.vertexAttribPointer(ze.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(ze.textureLocation,0),t.uniform2f(ze.worldSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6)};function ao(e,t,n){function o(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function Rt(e,t){const{worldDimensions:n}=t,o=n.width*n.height,r=new Array(o).fill(0).map(i=>Math.random()<.5?1:0);return{cellsTex:Wt(e,new Float32Array(r.map(i=>[i,0,0,0]).flat()),n.width,n.height)}}const uo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,lo=`precision highp float;

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
`;let Me,Oe,lt,We,at,gt,Lt,Xe,Ye;const Ft=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Oe=Vt(e,[uo,lo]),Me={uInputTextureLocation:e.getUniformLocation(Oe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Oe,"uTextureSize"),positionLocation:e.getAttribLocation(Oe,"aPosition")},lt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,lt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),We=n,at=Wt(e,null,o.width,o.height),gt=wt(e,We),Lt=wt(e,at),Xe={fb:gt,tex:We},Ye={fb:Lt,tex:at},We},so=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ye.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,lt),t.enableVertexAttribArray(Me.positionLocation),t.vertexAttribPointer(Me.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Xe.tex),t.useProgram(Oe),t.uniform1i(Me.uInputTextureLocation,0),t.uniform2f(Me.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const r=Xe;Xe=Ye,Ye=r}return Xe.tex};function co(e){let t,n,o,r,a=e[1]?"Play":"Pause",i,h,u,l,c,f,L=e[0].width+"",C,x,B=e[0].height+"",I,M,Q=e[0].width*e[0].height+"",ie,Z,fe,Y,O,N,j,ee,$,v,S,ae,de,U,te,Re,ge,z,Le,ue,le,Fe,X,V,he;return{c(){t=m("canvas"),n=A(),o=m("div"),r=m("button"),i=_(a),h=_(" (Space)"),u=A(),l=m("div"),c=m("span"),f=_("World "),C=_(L),x=_(" x "),I=_(B),M=_(" ("),ie=_(Q),Z=_(" cells)"),fe=A(),Y=m("button"),O=_("Reload program"),N=A(),j=m("button"),ee=_("Fullscreen (f)"),$=A(),v=m("div"),S=m("button"),ae=_("Reset world (r)"),de=A(),U=m("span"),te=m("label"),Re=_("World: width"),ge=A(),z=m("input"),Le=A(),ue=m("label"),le=_("height"),Fe=A(),X=m("input"),this.h()},l(b){t=p(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(t).forEach(d),n=w(b),o=p(b,"DIV",{});var y=E(o);r=p(y,"BUTTON",{});var oe=E(r);i=T(oe,a),h=T(oe," (Space)"),oe.forEach(d),y.forEach(d),u=w(b),l=p(b,"DIV",{});var q=E(l);c=p(q,"SPAN",{});var J=E(c);f=T(J,"World "),C=T(J,L),x=T(J," x "),I=T(J,B),M=T(J," ("),ie=T(J,Q),Z=T(J," cells)"),J.forEach(d),fe=w(q),Y=p(q,"BUTTON",{});var $e=E(Y);O=T($e,"Reload program"),$e.forEach(d),N=w(q),j=p(q,"BUTTON",{});var k=E(j);ee=T(k,"Fullscreen (f)"),k.forEach(d),q.forEach(d),$=w(b),v=p(b,"DIV",{});var ve=E(v);S=p(ve,"BUTTON",{});var H=E(S);ae=T(H,"Reset world (r)"),H.forEach(d),de=w(ve),U=p(ve,"SPAN",{});var G=E(U);te=p(G,"LABEL",{for:!0});var Pe=E(te);Re=T(Pe,"World: width"),Pe.forEach(d),ge=w(G),z=p(G,"INPUT",{id:!0,type:!0,min:!0}),Le=w(G),ue=p(G,"LABEL",{for:!0});var Ie=E(ue);le=T(Ie,"height"),Ie.forEach(d),Fe=w(G),X=p(G,"INPUT",{id:!0,type:!0,min:!0}),G.forEach(d),ve.forEach(d),this.h()},h(){g(t,"id","canvas"),zt(t,"background-color","black"),g(t,"width",e[3].width),g(t,"height",e[3].height),g(te,"for","worldWidth"),g(z,"id","worldWidth"),g(z,"type","number"),g(z,"min",0),g(ue,"for","worldHeight"),g(X,"id","worldHeight"),g(X,"type","number"),g(X,"min",0)},m(b,y){D(b,t,y),D(b,n,y),D(b,o,y),s(o,r),s(r,i),s(r,h),D(b,u,y),D(b,l,y),s(l,c),s(c,f),s(c,C),s(c,x),s(c,I),s(c,M),s(c,ie),s(c,Z),s(l,fe),s(l,Y),s(Y,O),s(l,N),s(l,j),s(j,ee),D(b,$,y),D(b,v,y),s(v,S),s(S,ae),s(v,de),s(v,U),s(U,te),s(te,Re),s(U,ge),s(U,z),se(z,e[0].width),s(U,Le),s(U,ue),s(ue,le),s(U,Fe),s(U,X),se(X,e[0].height),V||(he=[P(r,"click",e[6]),P(Y,"click",e[7]),P(j,"click",function(){Nt(e[2])&&e[2].apply(this,arguments)}),P(S,"click",e[5]),P(z,"change",e[5]),P(z,"input",e[8]),P(X,"change",e[5]),P(X,"input",e[9])],V=!0)},p(b,[y]){e=b,y&2&&a!==(a=e[1]?"Play":"Pause")&&me(i,a),y&1&&L!==(L=e[0].width+"")&&me(C,L),y&1&&B!==(B=e[0].height+"")&&me(I,B),y&1&&Q!==(Q=e[0].width*e[0].height+"")&&me(ie,Q),y&1&&ce(z.value)!==e[0].width&&se(z,e[0].width),y&1&&ce(X.value)!==e[0].height&&se(X,e[0].height)},i:Ce,o:Ce,d(b){b&&d(t),b&&d(n),b&&d(o),b&&d(u),b&&d(l),b&&d($),b&&d(v),V=!1,Mt(he)}}}function fo(e,t,n){const o={width:1600,height:900},r={width:1600,height:900};let a=!0,i,h,u;function l(){cancelAnimationFrame(u),h=jt(),to(h.canvas);const I=Rt(h,{worldDimensions:r});i=Ft(h,{cellsTex:I.cellsTex,texDimensions:r}),ro(h,{screenDimensions:o});function M(){return a||(i=so({gl:h,worldDimensions:r,screenDimensions:o})),io({gl:h,cellsTex:i,worldDimensions:r}),u=requestAnimationFrame(M)}u=requestAnimationFrame(M)}let c;Ot(()=>{l(),n(2,c=ao(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",I=>{if(I.code==="Space"&&(n(1,a=!a),I.preventDefault()),I.code==="KeyF"){c();return}if(I.code==="KeyR"){f();return}})});const f=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const I=Rt(h,{worldDimensions:r});i=Ft(h,{cellsTex:I.cellsTex,texDimensions:r})},L=()=>n(1,a=!a),C=()=>l();function x(){r.width=ce(this.value),n(0,r)}function B(){r.height=ce(this.value),n(0,r)}return[r,a,c,o,l,f,L,C,x,B]}class ho extends je{constructor(t){super(),Je(this,t,fo,co,Qe,{})}}const mo=["VERTEX_SHADER","FRAGMENT_SHADER"];function po(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return _o(t),t}function _o(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Ht(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function St(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Yt(e,t,n,o,r){const a=[];for(let h=0;h<t.length;++h){const u=mo[h]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=To(e,t[h],u,r);if(!l)throw"Can not create shader";a.push(l)}const i=vo(e,a,n,o,r);if(!i)throw"Can not create program";return i}function To(e,t,n,o){const r=o||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const h=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+h+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(a),null}return a}function vo(e,t,n,o,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(u){e.attachShader(i,u)}),n&&n.forEach(function(u,l){e.bindAttribLocation(i,o?o[l]:l,u)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const u=e.getProgramInfoLog(i);return a("Error in program linking:"+u),e.deleteProgram(i),null}return i}function xo(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Eo=`precision mediump float;
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
`,bo=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Ao=`precision mediump float;
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

`;let Se,De,qe;const wo=(e,t)=>{const{screenDimensions:n,mode:o}=t,{height:r,width:a}=n;let i=bo;if(o==="gradiant"&&(i=Ao),De=Yt(e,[Eo,i]),Se={positionLocation:e.getAttribLocation(De,"a_position"),textureLocation:e.getUniformLocation(De,"u_texture"),worldSizeLocation:e.getUniformLocation(De,"u_worldSize"),zoomLocation:e.getUniformLocation(De,"u_zoom"),panLocation:e.getUniformLocation(De,"u_pan")},qe=e.createBuffer(),!qe)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,qe),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},Ro=e=>{const{gl:t,cellsTex:n,worldDimensions:o,zoomLevel:r,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(De),t.bindBuffer(t.ARRAY_BUFFER,qe),t.enableVertexAttribArray(Se.positionLocation),t.vertexAttribPointer(Se.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Se.textureLocation,0),t.uniform2f(Se.worldSizeLocation,o.width,o.height),t.uniform1f(Se.zoomLocation,Math.max(r,1)),t.uniform2f(Se.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function go(e,t,n){function o(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function Dt(e,t){const{worldDimensions:n,initialDensity:o}=t;let r=o;r>1&&(r=1);const a=n.width*n.height,i=new Array(a).fill(0).map(u=>Math.random()<r?1:0);return{cellsTex:Ht(e,new Float32Array(i.map((u,l)=>[u,l,0,0]).flat()),n.width,n.height)}}const Lo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Fo=`precision highp float;

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
`;let be,Ae,st,Ve,ut,Ct,$t,ke,Ke;const Pt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Ae=Yt(e,[Lo,Fo]),be={uInputTextureLocation:e.getUniformLocation(Ae,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ae,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Ae,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Ae,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Ae,"uInfiniteSource"),positionLocation:e.getAttribLocation(Ae,"aPosition")},st=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,st),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Ve=n,ut=Ht(e,null,o.width,o.height),Ct=St(e,Ve),$t=St(e,ut),ke={fb:Ct,tex:Ve},Ke={fb:$t,tex:ut},Ve},So=e=>{const{gl:t,worldDimensions:n,screenDimensions:o,mouseCoordinates:r,mouseMode:a,infiniteSource:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,Ke.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,st),t.enableVertexAttribArray(be.positionLocation),t.vertexAttribPointer(be.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ke.tex),t.useProgram(Ae),t.uniform1i(be.uInputTextureLocation,0),t.uniform2f(be.uTextureSizeLocation,n.width,n.height),t.uniform2f(be.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(be.uMouseModeLocation,a),t.uniform1i(be.uInfiniteSourceLocation,i?1:0),t.drawArrays(t.TRIANGLES,0,6);{const h=ke;ke=Ke,Ke=h}return ke.tex};function Do(e){let t,n,o,r,a=e[5]?"Play":"Pause",i,h,u,l,c=e[2]?"Disable":"Enable",f,L,C,x,B,I,M,Q,ie,Z,fe,Y,O,N,j,ee=e[0].width+"",$,v,S=e[0].height+"",ae,de,U=e[0].width*e[0].height+"",te,Re,ge,z,Le,ue,le,Fe,X,V,he,b,y,oe,q,J,$e,k,ve,H,G,Pe,Ie,ne,et,ye,tt,ot,re,nt,dt;return{c(){t=m("canvas"),n=A(),o=m("div"),r=m("button"),i=_(a),h=_(" (Space)"),u=A(),l=m("button"),f=_(c),L=_(" constant cells generation"),C=A(),x=m("button"),B=_("Zoom in (I)"),I=A(),M=m("button"),Q=_("Zoom out (O)"),ie=A(),Z=m("button"),fe=_("Reset zoom (Z)"),Y=A(),O=m("div"),N=m("span"),j=_("World "),$=_(ee),v=_(" x "),ae=_(S),de=_(" ("),te=_(U),Re=_(" cells)"),ge=A(),z=m("button"),Le=_("Reload program"),ue=A(),le=m("button"),Fe=_("Fullscreen (f)"),X=A(),V=m("div"),he=m("button"),b=_("Reset world (r)"),y=A(),oe=m("span"),q=m("label"),J=_("Initial density [0-1]"),$e=A(),k=m("input"),ve=A(),H=m("span"),G=m("label"),Pe=_("World: width"),Ie=A(),ne=m("input"),et=A(),ye=m("label"),tt=_("height"),ot=A(),re=m("input"),this.h()},l(F){t=p(F,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(t).forEach(d),n=w(F),o=p(F,"DIV",{});var R=E(o);r=p(R,"BUTTON",{});var rt=E(r);i=T(rt,a),h=T(rt," (Space)"),rt.forEach(d),u=w(R),l=p(R,"BUTTON",{});var it=E(l);f=T(it,c),L=T(it," constant cells generation"),it.forEach(d),C=w(R),x=p(R,"BUTTON",{});var ht=E(x);B=T(ht,"Zoom in (I)"),ht.forEach(d),I=w(R),M=p(R,"BUTTON",{});var mt=E(M);Q=T(mt,"Zoom out (O)"),mt.forEach(d),ie=w(R),Z=p(R,"BUTTON",{});var pt=E(Z);fe=T(pt,"Reset zoom (Z)"),pt.forEach(d),R.forEach(d),Y=w(F),O=p(F,"DIV",{});var Ue=E(O);N=p(Ue,"SPAN",{});var xe=E(N);j=T(xe,"World "),$=T(xe,ee),v=T(xe," x "),ae=T(xe,S),de=T(xe," ("),te=T(xe,U),Re=T(xe," cells)"),xe.forEach(d),ge=w(Ue),z=p(Ue,"BUTTON",{});var _t=E(z);Le=T(_t,"Reload program"),_t.forEach(d),ue=w(Ue),le=p(Ue,"BUTTON",{});var Tt=E(le);Fe=T(Tt,"Fullscreen (f)"),Tt.forEach(d),Ue.forEach(d),X=w(F),V=p(F,"DIV",{});var Be=E(V);he=p(Be,"BUTTON",{});var vt=E(he);b=T(vt,"Reset world (r)"),vt.forEach(d),y=w(Be),oe=p(Be,"SPAN",{});var Ge=E(oe);q=p(Ge,"LABEL",{for:!0});var xt=E(q);J=T(xt,"Initial density [0-1]"),xt.forEach(d),$e=w(Ge),k=p(Ge,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Ge.forEach(d),ve=w(Be),H=p(Be,"SPAN",{});var Ee=E(H);G=p(Ee,"LABEL",{for:!0});var Et=E(G);Pe=T(Et,"World: width"),Et.forEach(d),Ie=w(Ee),ne=p(Ee,"INPUT",{id:!0,type:!0,min:!0}),et=w(Ee),ye=p(Ee,"LABEL",{for:!0});var bt=E(ye);tt=T(bt,"height"),bt.forEach(d),ot=w(Ee),re=p(Ee,"INPUT",{id:!0,type:!0,min:!0}),Ee.forEach(d),Be.forEach(d),this.h()},h(){g(t,"id","canvas"),zt(t,"background-color","black"),g(t,"width",e[7].width),g(t,"height",e[7].height),g(q,"for","initialDensity"),g(k,"id","initialDensity"),g(k,"type","number"),g(k,"min",0),g(k,"max",1),g(G,"for","worldWidth"),g(ne,"id","worldWidth"),g(ne,"type","number"),g(ne,"min",0),g(ye,"for","worldHeight"),g(re,"id","worldHeight"),g(re,"type","number"),g(re,"min",0)},m(F,R){D(F,t,R),D(F,n,R),D(F,o,R),s(o,r),s(r,i),s(r,h),s(o,u),s(o,l),s(l,f),s(l,L),s(o,C),s(o,x),s(x,B),s(o,I),s(o,M),s(M,Q),s(o,ie),s(o,Z),s(Z,fe),D(F,Y,R),D(F,O,R),s(O,N),s(N,j),s(N,$),s(N,v),s(N,ae),s(N,de),s(N,te),s(N,Re),s(O,ge),s(O,z),s(z,Le),s(O,ue),s(O,le),s(le,Fe),D(F,X,R),D(F,V,R),s(V,he),s(he,b),s(V,y),s(V,oe),s(oe,q),s(q,J),s(oe,$e),s(oe,k),se(k,e[4]),s(V,ve),s(V,H),s(H,G),s(G,Pe),s(H,Ie),s(H,ne),se(ne,e[0].width),s(H,et),s(H,ye),s(ye,tt),s(H,ot),s(H,re),se(re,e[0].height),nt||(dt=[P(r,"click",e[10]),P(l,"click",e[11]),P(x,"click",e[12]),P(M,"click",e[13]),P(Z,"click",e[14]),P(z,"click",e[15]),P(le,"click",function(){Nt(e[6])&&e[6].apply(this,arguments)}),P(he,"click",e[9]),P(k,"change",e[9]),P(k,"input",e[16]),P(ne,"change",e[9]),P(ne,"input",e[17]),P(re,"change",e[9]),P(re,"input",e[18])],nt=!0)},p(F,[R]){e=F,R&32&&a!==(a=e[5]?"Play":"Pause")&&me(i,a),R&4&&c!==(c=e[2]?"Disable":"Enable")&&me(f,c),R&1&&ee!==(ee=e[0].width+"")&&me($,ee),R&1&&S!==(S=e[0].height+"")&&me(ae,S),R&1&&U!==(U=e[0].width*e[0].height+"")&&me(te,U),R&16&&ce(k.value)!==e[4]&&se(k,e[4]),R&1&&ce(ne.value)!==e[0].width&&se(ne,e[0].width),R&1&&ce(re.value)!==e[0].height&&se(re,e[0].height)},i:Ce,o:Ce,d(F){F&&d(t),F&&d(n),F&&d(o),F&&d(Y),F&&d(O),F&&d(X),F&&d(V),nt=!1,Mt(dt)}}}function Co(e,t,n){const o={width:1200,height:900},r={width:1200,height:900},a={x:-100,y:-100},i={x:0,y:0};let h=0,u=!0,l=1,c=.05,f=!0,L,C,x;function B(){cancelAnimationFrame(x),C=po(),xo(C.canvas);const $=Dt(C,{worldDimensions:r,initialDensity:c});L=Pt(C,{cellsTex:$.cellsTex,texDimensions:r}),wo(C,{screenDimensions:o,mode:"gradiant"});function v(){f||(L=So({gl:C,worldDimensions:r,screenDimensions:o,mouseCoordinates:a,mouseMode:h,infiniteSource:u}));const S=.005;return a.x<.2&&i.x>=S&&n(1,i.x-=S,i),a.x>.8&&i.x<1-1/l&&n(1,i.x+=S,i),a.y<.2&&i.y>=S&&n(1,i.y-=S,i),a.y>.8&&i.y<1-1/l&&n(1,i.y+=S,i),Ro({gl:C,cellsTex:L,worldDimensions:r,zoomLevel:l,pan:i}),x=requestAnimationFrame(v)}x=requestAnimationFrame(v)}let I;Ot(()=>{B(),n(6,I=go(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",v=>{if(v.code==="Space"&&(n(5,f=!f),v.preventDefault()),v.code==="KeyF"){I();return}if(v.code==="KeyR"){M();return}if(v.code==="KeyI"){n(3,l++,l);return}if(v.code==="KeyO"){n(3,l=Math.max(l-1,1)),l===1&&(n(1,i.x=0,i),n(1,i.y=0,i));return}if(v.code==="KeyZ"){n(3,l=1),n(1,i.x=0,i),n(1,i.y=0,i);return}});const $=document.getElementById("canvas");if(!$)throw new Error("Canvas unavailable");$.addEventListener("mousemove",v=>{const S=$.getBoundingClientRect(),ae=$.width/S.width,de=$.height/S.height,U={x:(v.clientX-S.left)*ae,y:(v.clientY-S.top)*de};a.x=U.x/o.width,a.y=U.y/o.height}),$.addEventListener("mousedown",v=>{v.preventDefault(),v.button===0?h=1:v.button===2&&(h=2)}),$.addEventListener("mouseup",v=>{v.preventDefault(),h=0}),$.addEventListener("contextmenu",v=>(v.preventDefault(),!1))});const M=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const $=Dt(C,{worldDimensions:r,initialDensity:c});L=Pt(C,{cellsTex:$.cellsTex,texDimensions:r})},Q=()=>n(5,f=!f),ie=()=>n(2,u=!u),Z=()=>n(3,l+=1),fe=()=>{n(3,l=Math.max(l-1,1)),l===1&&(n(1,i.x=0,i),n(1,i.y=0,i))},Y=()=>n(3,l=1),O=()=>B();function N(){c=ce(this.value),n(4,c)}function j(){r.width=ce(this.value),n(0,r)}function ee(){r.height=ce(this.value),n(0,r)}return[r,i,u,l,c,f,I,o,B,M,Q,ie,Z,fe,Y,O,N,j,ee]}class $o extends je{constructor(t){super(),Je(this,t,Co,Do,Qe,{})}}function It(e,t,n){const o=e.slice();return o[1]=t[n],o}function yt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Po(e){let t;return{c(){t=_("About")},l(n){t=T(n,"About")},m(n,o){D(n,t,o)},d(n){n&&d(t)}}}function Io(e){let t=e[1].title+"",n;return{c(){n=_(t)},l(o){n=T(o,t)},m(o,r){D(o,n,r)},p:Ce,d(o){o&&d(n)}}}function Ut(e){let t,n;return t=new Gt({props:{$$slots:{default:[Io]},$$scope:{ctx:e}}}),{c(){pe(t.$$.fragment)},l(o){we(t.$$.fragment,o)},m(o,r){_e(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(W(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){Te(t,o)}}}function yo(e){let t,n,o,r;t=new Gt({props:{$$slots:{default:[Po]},$$scope:{ctx:e}}});let a=e[0],i=[];for(let u=0;u<a.length;u+=1)i[u]=Ut(yt(e,a,u));const h=u=>K(i[u],1,1,()=>{i[u]=null});return{c(){pe(t.$$.fragment),n=A();for(let u=0;u<i.length;u+=1)i[u].c();o=Ze()},l(u){we(t.$$.fragment,u),n=w(u);for(let l=0;l<i.length;l+=1)i[l].l(u);o=Ze()},m(u,l){_e(t,u,l),D(u,n,l);for(let c=0;c<i.length;c+=1)i[c].m(u,l);D(u,o,l),r=!0},p(u,l){const c={};if(l&64&&(c.$$scope={dirty:l,ctx:u}),t.$set(c),l&1){a=u[0];let f;for(f=0;f<a.length;f+=1){const L=yt(u,a,f);i[f]?(i[f].p(L,l),W(i[f],1)):(i[f]=Ut(L),i[f].c(),W(i[f],1),i[f].m(o.parentNode,o))}for(ct(),f=a.length;f<i.length;f+=1)h(f);ft()}},i(u){if(!r){W(t.$$.fragment,u);for(let l=0;l<a.length;l+=1)W(i[l]);r=!0}},o(u){K(t.$$.fragment,u),i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)K(i[l]);r=!1},d(u){Te(t,u),u&&d(n),Xt(i,u),u&&d(o)}}}function Uo(e){let t,n;return{c(){t=m("p"),n=_("Experiments running Conway's Game of Life in WebGL shaders.")},l(o){t=p(o,"P",{});var r=E(t);n=T(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(d)},m(o,r){D(o,t,r),s(t,n)},p:Ce,d(o){o&&d(t)}}}function Bo(e){let t,n,o;var r=e[1].component;function a(i){return{}}return r&&(t=At(r,a())),{c(){t&&pe(t.$$.fragment),n=A()},l(i){t&&we(t.$$.fragment,i),n=w(i)},m(i,h){t&&_e(t,i,h),D(i,n,h),o=!0},p(i,h){if(r!==(r=i[1].component)){if(t){ct();const u=t;K(u.$$.fragment,1,0,()=>{Te(u,1)}),ft()}r?(t=At(r,a()),pe(t.$$.fragment),W(t.$$.fragment,1),_e(t,n.parentNode,n)):t=null}},i(i){o||(t&&W(t.$$.fragment,i),o=!0)},o(i){t&&K(t.$$.fragment,i),o=!1},d(i){t&&Te(t,i),i&&d(n)}}}function Bt(e){let t,n;return t=new kt({props:{$$slots:{default:[Bo]},$$scope:{ctx:e}}}),{c(){pe(t.$$.fragment)},l(o){we(t.$$.fragment,o)},m(o,r){_e(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(W(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){Te(t,o)}}}function zo(e){let t,n,o,r,a,i;t=new Kt({props:{$$slots:{default:[yo]},$$scope:{ctx:e}}}),o=new kt({props:{$$slots:{default:[Uo]},$$scope:{ctx:e}}});let h=e[0],u=[];for(let c=0;c<h.length;c+=1)u[c]=Bt(It(e,h,c));const l=c=>K(u[c],1,1,()=>{u[c]=null});return{c(){pe(t.$$.fragment),n=A(),pe(o.$$.fragment),r=A();for(let c=0;c<u.length;c+=1)u[c].c();a=Ze()},l(c){we(t.$$.fragment,c),n=w(c),we(o.$$.fragment,c),r=w(c);for(let f=0;f<u.length;f+=1)u[f].l(c);a=Ze()},m(c,f){_e(t,c,f),D(c,n,f),_e(o,c,f),D(c,r,f);for(let L=0;L<u.length;L+=1)u[L].m(c,f);D(c,a,f),i=!0},p(c,f){const L={};f&64&&(L.$$scope={dirty:f,ctx:c}),t.$set(L);const C={};if(f&64&&(C.$$scope={dirty:f,ctx:c}),o.$set(C),f&1){h=c[0];let x;for(x=0;x<h.length;x+=1){const B=It(c,h,x);u[x]?(u[x].p(B,f),W(u[x],1)):(u[x]=Bt(B),u[x].c(),W(u[x],1),u[x].m(a.parentNode,a))}for(ct(),x=h.length;x<u.length;x+=1)l(x);ft()}},i(c){if(!i){W(t.$$.fragment,c),W(o.$$.fragment,c);for(let f=0;f<h.length;f+=1)W(u[f]);i=!0}},o(c){K(t.$$.fragment,c),K(o.$$.fragment,c),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)K(u[f]);i=!1},d(c){Te(t,c),c&&d(n),Te(o,c),c&&d(r),Xt(u,c),c&&d(a)}}}function No(e){let t,n,o;return n=new qt({props:{$$slots:{default:[zo]},$$scope:{ctx:e}}}),{c(){t=m("div"),pe(n.$$.fragment)},l(r){t=p(r,"DIV",{});var a=E(t);we(n.$$.fragment,a),a.forEach(d)},m(r,a){D(r,t,a),_e(n,t,null),o=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),n.$set(i)},i(r){o||(W(n.$$.fragment,r),o=!0)},o(r){K(n.$$.fragment,r),o=!1},d(r){r&&d(t),Te(n)}}}function Mo(e){return[[{title:"V1",component:ho},{title:"V2",component:$o}]]}class Oo extends je{constructor(t){super(),Je(this,t,Mo,No,Qe,{})}}function Xo(e){let t,n;return t=new Oo({}),{c(){pe(t.$$.fragment)},l(o){we(t.$$.fragment,o)},m(o,r){_e(t,o,r),n=!0},p:Ce,i(o){n||(W(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){Te(t,o)}}}class Wo extends je{constructor(t){super(),Je(this,t,null,Xo,Qe,{})}}export{Wo as default};
