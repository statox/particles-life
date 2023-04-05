import{S as qe,i as Ke,s as Ze,k as p,a as R,q as T,l as _,m as E,h,c as g,r as v,n as w,p as Ft,b as L,D as c,O as oe,K as I,R as Lt,u as me,P as ne,B as Re,M as St,o as Dt,w as le,x as pe,y as ue,f as M,t as H,z as se,e as Ye,g as ot,d as nt,L as Ct,v as dt}from"../../../chunks/index-46ced799.js";import{T as Nt,a as Ot,b as Pt,c as It}from"../../../chunks/TabPanel-3f95d051.js";const Xt=["VERTEX_SHADER","FRAGMENT_SHADER"];function Mt(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return kt(t),t}function kt(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Ut(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function ht(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Bt(e,t,n,o,r){const i=[];for(let d=0;d<t.length;++d){const l=Xt[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,u=Gt(e,t[d],l,r);if(!u)throw"Can not create shader";i.push(u)}const a=Wt(e,i,n,o,r);if(!a)throw"Can not create program";return a}function Gt(e,t,n,o){const r=o||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(i);return r(new Error("*** Error compiling shader '"+i+"':"+d+`
`+t.split(`
`).map((l,u)=>`${u+1}: ${l}`).join(`
`))),e.deleteShader(i),null}return i}function Wt(e,t,n,o,r){const i=r||console.log,a=e.createProgram();if(!a)throw"Could not create program";if(t.forEach(function(l){e.attachShader(a,l)}),n&&n.forEach(function(l,u){e.bindAttribLocation(a,o?o[u]:u,l)}),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const l=e.getProgramInfoLog(a);return i("Error in program linking:"+l),e.deleteProgram(a),null}return a}function Vt(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Ht=`attribute vec2 a_position;
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

`,Yt=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let Pe,Ie,Ge;const qt=(e,t)=>{const{screenDimensions:n}=t,{height:o,width:r}=n;if(Ie=Bt(e,[Ht,Yt]),Pe={positionLocation:e.getAttribLocation(Ie,"a_position"),textureLocation:e.getUniformLocation(Ie,"u_texture"),worldSizeLocation:e.getUniformLocation(Ie,"u_worldSize")},Ge=e.createBuffer(),!Ge)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Ge),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,o,r,0,r,0,0,o,r,o]),e.STATIC_DRAW)},Kt=e=>{const{gl:t,cellsTex:n,worldDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Ie),t.bindBuffer(t.ARRAY_BUFFER,Ge),t.enableVertexAttribArray(Pe.positionLocation),t.vertexAttribPointer(Pe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Pe.textureLocation,0),t.uniform2f(Pe.worldSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6)};function Zt(e,t,n){function o(){const i=e.getElementById(t);i&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),i.width=n.width,i.height=n.height)}function r(){const i=e.getElementById(t);i&&(e.fullscreenElement||i.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function mt(e,t){const{worldDimensions:n}=t,o=n.width*n.height,r=new Array(o).fill(0).map(a=>Math.random()<.5?1:0);return{cellsTex:Ut(e,new Float32Array(r.map(a=>[a,0,0,0]).flat()),n.width,n.height)}}const jt=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Jt=`precision highp float;

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
`;let Ue,Be,et,Me,Je,pt,_t,ze,We;const Tt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Be=Bt(e,[jt,Jt]),Ue={uInputTextureLocation:e.getUniformLocation(Be,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Be,"uTextureSize"),positionLocation:e.getAttribLocation(Be,"aPosition")},et=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,et),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Me=n,Je=Ut(e,null,o.width,o.height),pt=ht(e,Me),_t=ht(e,Je),ze={fb:pt,tex:Me},We={fb:_t,tex:Je},Me},Qt=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,We.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,et),t.enableVertexAttribArray(Ue.positionLocation),t.vertexAttribPointer(Ue.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ze.tex),t.useProgram(Be),t.uniform1i(Ue.uInputTextureLocation,0),t.uniform2f(Ue.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const r=ze;ze=We,We=r}return ze.tex};function eo(e){let t,n,o,r,i=e[1]?"Play":"Pause",a,d,l,u,s,f,x=e[0].width+"",B,b,S=e[0].height+"",A,Y,V=e[0].width*e[0].height+"",q,re,U,k,_e,ie,K,Te,ce,y,j,ve,J,N,Z,G,Q,O,Ee,W,ee,xe,X,z,ge;return{c(){t=p("canvas"),n=R(),o=p("div"),r=p("button"),a=T(i),d=T(" (Space)"),l=R(),u=p("div"),s=p("span"),f=T("World "),B=T(x),b=T(" x "),A=T(S),Y=T(" ("),q=T(V),re=T(" cells)"),U=R(),k=p("button"),_e=T("Reload program"),ie=R(),K=p("button"),Te=T("Fullscreen (f)"),ce=R(),y=p("div"),j=p("button"),ve=T("Reset world (r)"),J=R(),N=p("span"),Z=p("label"),G=T("World: width"),Q=R(),O=p("input"),Ee=R(),W=p("label"),ee=T("height"),xe=R(),X=p("input"),this.h()},l(m){t=_(m,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(t).forEach(h),n=g(m),o=_(m,"DIV",{});var F=E(o);r=_(F,"BUTTON",{});var be=E(r);a=v(be,i),d=v(be," (Space)"),be.forEach(h),F.forEach(h),l=g(m),u=_(m,"DIV",{});var te=E(u);s=_(te,"SPAN",{});var C=E(s);f=v(C,"World "),B=v(C,x),b=v(C," x "),A=v(C,S),Y=v(C," ("),q=v(C,V),re=v(C," cells)"),C.forEach(h),U=g(te),k=_(te,"BUTTON",{});var $e=E(k);_e=v($e,"Reload program"),$e.forEach(h),ie=g(te),K=_(te,"BUTTON",{});var ae=E(K);Te=v(ae,"Fullscreen (f)"),ae.forEach(h),te.forEach(h),ce=g(m),y=_(m,"DIV",{});var fe=E(y);j=_(fe,"BUTTON",{});var Fe=E(j);ve=v(Fe,"Reset world (r)"),Fe.forEach(h),J=g(fe),N=_(fe,"SPAN",{});var P=E(N);Z=_(P,"LABEL",{for:!0});var Le=E(Z);G=v(Le,"World: width"),Le.forEach(h),Q=g(P),O=_(P,"INPUT",{id:!0,type:!0,min:!0}),Ee=g(P),W=_(P,"LABEL",{for:!0});var Ce=E(W);ee=v(Ce,"height"),Ce.forEach(h),xe=g(P),X=_(P,"INPUT",{id:!0,type:!0,min:!0}),P.forEach(h),fe.forEach(h),this.h()},h(){w(t,"id","canvas"),Ft(t,"background-color","black"),w(t,"width",e[3].width),w(t,"height",e[3].height),w(Z,"for","worldWidth"),w(O,"id","worldWidth"),w(O,"type","number"),w(O,"min",0),w(W,"for","worldHeight"),w(X,"id","worldHeight"),w(X,"type","number"),w(X,"min",0)},m(m,F){L(m,t,F),L(m,n,F),L(m,o,F),c(o,r),c(r,a),c(r,d),L(m,l,F),L(m,u,F),c(u,s),c(s,f),c(s,B),c(s,b),c(s,A),c(s,Y),c(s,q),c(s,re),c(u,U),c(u,k),c(k,_e),c(u,ie),c(u,K),c(K,Te),L(m,ce,F),L(m,y,F),c(y,j),c(j,ve),c(y,J),c(y,N),c(N,Z),c(Z,G),c(N,Q),c(N,O),oe(O,e[0].width),c(N,Ee),c(N,W),c(W,ee),c(N,xe),c(N,X),oe(X,e[0].height),z||(ge=[I(r,"click",e[6]),I(k,"click",e[7]),I(K,"click",function(){Lt(e[2])&&e[2].apply(this,arguments)}),I(j,"click",e[5]),I(O,"change",e[5]),I(O,"input",e[8]),I(X,"change",e[5]),I(X,"input",e[9])],z=!0)},p(m,[F]){e=m,F&2&&i!==(i=e[1]?"Play":"Pause")&&me(a,i),F&1&&x!==(x=e[0].width+"")&&me(B,x),F&1&&S!==(S=e[0].height+"")&&me(A,S),F&1&&V!==(V=e[0].width*e[0].height+"")&&me(q,V),F&1&&ne(O.value)!==e[0].width&&oe(O,e[0].width),F&1&&ne(X.value)!==e[0].height&&oe(X,e[0].height)},i:Re,o:Re,d(m){m&&h(t),m&&h(n),m&&h(o),m&&h(l),m&&h(u),m&&h(ce),m&&h(y),z=!1,St(ge)}}}function to(e,t,n){const o={width:1600,height:900},r={width:1600,height:900};let i=!0,a,d,l;function u(){cancelAnimationFrame(l),d=Mt(),Vt(d.canvas);const A=mt(d,{worldDimensions:r});a=Tt(d,{cellsTex:A.cellsTex,texDimensions:r}),qt(d,{screenDimensions:o});function Y(){return i||(a=Qt({gl:d,worldDimensions:r,screenDimensions:o})),Kt({gl:d,cellsTex:a,worldDimensions:r}),l=requestAnimationFrame(Y)}l=requestAnimationFrame(Y)}let s;Dt(()=>{u(),n(2,s=Zt(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",A=>{if(A.code==="Space"&&(n(1,i=!i),A.preventDefault()),A.code==="KeyF"){s();return}if(A.code==="KeyR"){f();return}})});const f=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const A=mt(d,{worldDimensions:r});a=Tt(d,{cellsTex:A.cellsTex,texDimensions:r})},x=()=>n(1,i=!i),B=()=>u();function b(){r.width=ne(this.value),n(0,r)}function S(){r.height=ne(this.value),n(0,r)}return[r,i,s,o,u,f,x,B,b,S]}class oo extends qe{constructor(t){super(),Ke(this,t,to,eo,Ze,{})}}const no=["VERTEX_SHADER","FRAGMENT_SHADER"];function ro(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return io(t),t}function io(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function zt(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function vt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function yt(e,t,n,o,r){const i=[];for(let d=0;d<t.length;++d){const l=no[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,u=ao(e,t[d],l,r);if(!u)throw"Can not create shader";i.push(u)}const a=lo(e,i,n,o,r);if(!a)throw"Can not create program";return a}function ao(e,t,n,o){const r=o||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(i);return r(new Error("*** Error compiling shader '"+i+"':"+d+`
`+t.split(`
`).map((l,u)=>`${u+1}: ${l}`).join(`
`))),e.deleteShader(i),null}return i}function lo(e,t,n,o,r){const i=r||console.log,a=e.createProgram();if(!a)throw"Could not create program";if(t.forEach(function(l){e.attachShader(a,l)}),n&&n.forEach(function(l,u){e.bindAttribLocation(a,o?o[u]:u,l)}),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const l=e.getProgramInfoLog(a);return i("Error in program linking:"+l),e.deleteProgram(a),null}return a}function uo(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const so=`precision mediump float;
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
`,co=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,fo=`precision mediump float;
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

`;let Ae,we,Ve;const ho=(e,t)=>{const{screenDimensions:n,mode:o}=t,{height:r,width:i}=n;let a=co;if(o==="gradiant"&&(a=fo),we=yt(e,[so,a]),Ae={positionLocation:e.getAttribLocation(we,"a_position"),textureLocation:e.getUniformLocation(we,"u_texture"),worldSizeLocation:e.getUniformLocation(we,"u_worldSize"),zoomLocation:e.getUniformLocation(we,"u_zoom"),panLocation:e.getUniformLocation(we,"u_pan")},Ve=e.createBuffer(),!Ve)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Ve),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,i,0,i,0,0,r,i,r]),e.STATIC_DRAW)},mo=e=>{const{gl:t,cellsTex:n,worldDimensions:o,zoomLevel:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(we),t.bindBuffer(t.ARRAY_BUFFER,Ve),t.enableVertexAttribArray(Ae.positionLocation),t.vertexAttribPointer(Ae.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ae.textureLocation,0),t.uniform2f(Ae.worldSizeLocation,o.width,o.height),t.uniform1f(Ae.zoomLocation,Math.max(r,1)),t.uniform2f(Ae.panLocation,0,0),t.drawArrays(t.TRIANGLES,0,6)};function po(e,t,n){function o(){const i=e.getElementById(t);i&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),i.width=n.width,i.height=n.height)}function r(){const i=e.getElementById(t);i&&(e.fullscreenElement||i.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function Et(e,t){const{worldDimensions:n,initialDensity:o}=t;let r=o;r>1&&(r=1);const i=n.width*n.height,a=new Array(i).fill(0).map(l=>Math.random()<r?1:0);return{cellsTex:zt(e,new Float32Array(a.map((l,u)=>[l,u,0,0]).flat()),n.width,n.height)}}const _o=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,To=`precision highp float;

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


    gl_FragColor = vec4(nextAlive, id, 0.0, 0.0);
}
`;let ye,Ne,tt,ke,Qe,xt,bt,Oe,He;const At=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Ne=yt(e,[_o,To]),ye={uInputTextureLocation:e.getUniformLocation(Ne,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ne,"uTextureSize"),positionLocation:e.getAttribLocation(Ne,"aPosition")},tt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,tt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ke=n,Qe=zt(e,null,o.width,o.height),xt=vt(e,ke),bt=vt(e,Qe),Oe={fb:xt,tex:ke},He={fb:bt,tex:Qe},ke},vo=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,He.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,tt),t.enableVertexAttribArray(ye.positionLocation),t.vertexAttribPointer(ye.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Oe.tex),t.useProgram(Ne),t.uniform1i(ye.uInputTextureLocation,0),t.uniform2f(ye.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const r=Oe;Oe=He,He=r}return Oe.tex};function Eo(e){let t,n,o,r,i=e[3]?"Play":"Pause",a,d,l,u,s,f,x,B,b,S,A,Y,V=e[0].width+"",q,re,U=e[0].height+"",k,_e,ie=e[0].width*e[0].height+"",K,Te,ce,y,j,ve,J,N,Z,G,Q,O,Ee,W,ee,xe,X,z,ge,m,F,be,te,C,$e,ae,fe,Fe,P,Le,Ce;return{c(){t=p("canvas"),n=R(),o=p("div"),r=p("button"),a=T(i),d=T(" (Space)"),l=R(),u=p("button"),s=T("Zoom in"),f=R(),x=p("button"),B=T("Zoom out"),b=R(),S=p("div"),A=p("span"),Y=T("World "),q=T(V),re=T(" x "),k=T(U),_e=T(" ("),K=T(ie),Te=T(" cells)"),ce=R(),y=p("button"),j=T("Reload program"),ve=R(),J=p("button"),N=T("Fullscreen (f)"),Z=R(),G=p("div"),Q=p("button"),O=T("Reset world (r)"),Ee=R(),W=p("span"),ee=p("label"),xe=T("Initial density [0-1]"),X=R(),z=p("input"),ge=R(),m=p("span"),F=p("label"),be=T("World: width"),te=R(),C=p("input"),$e=R(),ae=p("label"),fe=T("height"),Fe=R(),P=p("input"),this.h()},l($){t=_($,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(t).forEach(h),n=g($),o=_($,"DIV",{});var D=E(o);r=_(D,"BUTTON",{});var je=E(r);a=v(je,i),d=v(je," (Space)"),je.forEach(h),l=g(D),u=_(D,"BUTTON",{});var rt=E(u);s=v(rt,"Zoom in"),rt.forEach(h),f=g(D),x=_(D,"BUTTON",{});var it=E(x);B=v(it,"Zoom out"),it.forEach(h),D.forEach(h),b=g($),S=_($,"DIV",{});var Se=E(S);A=_(Se,"SPAN",{});var de=E(A);Y=v(de,"World "),q=v(de,V),re=v(de," x "),k=v(de,U),_e=v(de," ("),K=v(de,ie),Te=v(de," cells)"),de.forEach(h),ce=g(Se),y=_(Se,"BUTTON",{});var at=E(y);j=v(at,"Reload program"),at.forEach(h),ve=g(Se),J=_(Se,"BUTTON",{});var lt=E(J);N=v(lt,"Fullscreen (f)"),lt.forEach(h),Se.forEach(h),Z=g($),G=_($,"DIV",{});var De=E(G);Q=_(De,"BUTTON",{});var ut=E(Q);O=v(ut,"Reset world (r)"),ut.forEach(h),Ee=g(De),W=_(De,"SPAN",{});var Xe=E(W);ee=_(Xe,"LABEL",{for:!0});var st=E(ee);xe=v(st,"Initial density [0-1]"),st.forEach(h),X=g(Xe),z=_(Xe,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Xe.forEach(h),ge=g(De),m=_(De,"SPAN",{});var he=E(m);F=_(he,"LABEL",{for:!0});var ct=E(F);be=v(ct,"World: width"),ct.forEach(h),te=g(he),C=_(he,"INPUT",{id:!0,type:!0,min:!0}),$e=g(he),ae=_(he,"LABEL",{for:!0});var ft=E(ae);fe=v(ft,"height"),ft.forEach(h),Fe=g(he),P=_(he,"INPUT",{id:!0,type:!0,min:!0}),he.forEach(h),De.forEach(h),this.h()},h(){w(t,"id","canvas"),Ft(t,"background-color","black"),w(t,"width",e[5].width),w(t,"height",e[5].height),w(ee,"for","initialDensity"),w(z,"id","initialDensity"),w(z,"type","number"),w(z,"min",0),w(z,"max",1),w(F,"for","worldWidth"),w(C,"id","worldWidth"),w(C,"type","number"),w(C,"min",0),w(ae,"for","worldHeight"),w(P,"id","worldHeight"),w(P,"type","number"),w(P,"min",0)},m($,D){L($,t,D),L($,n,D),L($,o,D),c(o,r),c(r,a),c(r,d),c(o,l),c(o,u),c(u,s),c(o,f),c(o,x),c(x,B),L($,b,D),L($,S,D),c(S,A),c(A,Y),c(A,q),c(A,re),c(A,k),c(A,_e),c(A,K),c(A,Te),c(S,ce),c(S,y),c(y,j),c(S,ve),c(S,J),c(J,N),L($,Z,D),L($,G,D),c(G,Q),c(Q,O),c(G,Ee),c(G,W),c(W,ee),c(ee,xe),c(W,X),c(W,z),oe(z,e[2]),c(G,ge),c(G,m),c(m,F),c(F,be),c(m,te),c(m,C),oe(C,e[0].width),c(m,$e),c(m,ae),c(ae,fe),c(m,Fe),c(m,P),oe(P,e[0].height),Le||(Ce=[I(r,"click",e[8]),I(u,"click",e[9]),I(x,"click",e[10]),I(y,"click",e[11]),I(J,"click",function(){Lt(e[4])&&e[4].apply(this,arguments)}),I(Q,"click",e[7]),I(z,"change",e[7]),I(z,"input",e[12]),I(C,"change",e[7]),I(C,"input",e[13]),I(P,"change",e[7]),I(P,"input",e[14])],Le=!0)},p($,[D]){e=$,D&8&&i!==(i=e[3]?"Play":"Pause")&&me(a,i),D&1&&V!==(V=e[0].width+"")&&me(q,V),D&1&&U!==(U=e[0].height+"")&&me(k,U),D&1&&ie!==(ie=e[0].width*e[0].height+"")&&me(K,ie),D&4&&ne(z.value)!==e[2]&&oe(z,e[2]),D&1&&ne(C.value)!==e[0].width&&oe(C,e[0].width),D&1&&ne(P.value)!==e[0].height&&oe(P,e[0].height)},i:Re,o:Re,d($){$&&h(t),$&&h(n),$&&h(o),$&&h(b),$&&h(S),$&&h(Z),$&&h(G),Le=!1,St(Ce)}}}function xo(e,t,n){const o={width:1600,height:900},r={width:1600,height:900};let i=1,a=.05,d=!0,l,u,s;function f(){cancelAnimationFrame(s),u=ro(),uo(u.canvas);const U=Et(u,{worldDimensions:r,initialDensity:a});l=At(u,{cellsTex:U.cellsTex,texDimensions:r}),ho(u,{screenDimensions:o,mode:"gradiant"});function k(){return d||(l=vo({gl:u,worldDimensions:r,screenDimensions:o})),mo({gl:u,cellsTex:l,worldDimensions:r,zoomLevel:i}),s=requestAnimationFrame(k)}s=requestAnimationFrame(k)}let x;Dt(()=>{f(),n(4,x=po(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",U=>{if(U.code==="Space"&&(n(3,d=!d),U.preventDefault()),U.code==="KeyF"){x();return}if(U.code==="KeyR"){B();return}})});const B=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const U=Et(u,{worldDimensions:r,initialDensity:a});l=At(u,{cellsTex:U.cellsTex,texDimensions:r})},b=()=>n(3,d=!d),S=()=>n(1,i+=1),A=()=>n(1,i=Math.max(i-1,1)),Y=()=>f();function V(){a=ne(this.value),n(2,a)}function q(){r.width=ne(this.value),n(0,r)}function re(){r.height=ne(this.value),n(0,r)}return[r,i,a,d,x,o,f,B,b,S,A,Y,V,q,re]}class bo extends qe{constructor(t){super(),Ke(this,t,xo,Eo,Ze,{})}}function wt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Rt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Ao(e){let t;return{c(){t=T("About")},l(n){t=v(n,"About")},m(n,o){L(n,t,o)},d(n){n&&h(t)}}}function wo(e){let t=e[1].title+"",n;return{c(){n=T(t)},l(o){n=v(o,t)},m(o,r){L(o,n,r)},p:Re,d(o){o&&h(n)}}}function gt(e){let t,n;return t=new It({props:{$$slots:{default:[wo]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},l(o){pe(t.$$.fragment,o)},m(o,r){ue(t,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),t.$set(i)},i(o){n||(M(t.$$.fragment,o),n=!0)},o(o){H(t.$$.fragment,o),n=!1},d(o){se(t,o)}}}function Ro(e){let t,n,o,r;t=new It({props:{$$slots:{default:[Ao]},$$scope:{ctx:e}}});let i=e[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=gt(Rt(e,i,l));const d=l=>H(a[l],1,1,()=>{a[l]=null});return{c(){le(t.$$.fragment),n=R();for(let l=0;l<a.length;l+=1)a[l].c();o=Ye()},l(l){pe(t.$$.fragment,l),n=g(l);for(let u=0;u<a.length;u+=1)a[u].l(l);o=Ye()},m(l,u){ue(t,l,u),L(l,n,u);for(let s=0;s<a.length;s+=1)a[s].m(l,u);L(l,o,u),r=!0},p(l,u){const s={};if(u&64&&(s.$$scope={dirty:u,ctx:l}),t.$set(s),u&1){i=l[0];let f;for(f=0;f<i.length;f+=1){const x=Rt(l,i,f);a[f]?(a[f].p(x,u),M(a[f],1)):(a[f]=gt(x),a[f].c(),M(a[f],1),a[f].m(o.parentNode,o))}for(ot(),f=i.length;f<a.length;f+=1)d(f);nt()}},i(l){if(!r){M(t.$$.fragment,l);for(let u=0;u<i.length;u+=1)M(a[u]);r=!0}},o(l){H(t.$$.fragment,l),a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)H(a[u]);r=!1},d(l){se(t,l),l&&h(n),Ct(a,l),l&&h(o)}}}function go(e){let t,n;return{c(){t=p("p"),n=T("Experiments running Conway's Game of Life in WebGL shaders.")},l(o){t=_(o,"P",{});var r=E(t);n=v(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(h)},m(o,r){L(o,t,r),c(t,n)},p:Re,d(o){o&&h(t)}}}function $o(e){let t,n,o;var r=e[1].component;function i(a){return{}}return r&&(t=dt(r,i())),{c(){t&&le(t.$$.fragment),n=R()},l(a){t&&pe(t.$$.fragment,a),n=g(a)},m(a,d){t&&ue(t,a,d),L(a,n,d),o=!0},p(a,d){if(r!==(r=a[1].component)){if(t){ot();const l=t;H(l.$$.fragment,1,0,()=>{se(l,1)}),nt()}r?(t=dt(r,i()),le(t.$$.fragment),M(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}},i(a){o||(t&&M(t.$$.fragment,a),o=!0)},o(a){t&&H(t.$$.fragment,a),o=!1},d(a){t&&se(t,a),a&&h(n)}}}function $t(e){let t,n;return t=new Pt({props:{$$slots:{default:[$o]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},l(o){pe(t.$$.fragment,o)},m(o,r){ue(t,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),t.$set(i)},i(o){n||(M(t.$$.fragment,o),n=!0)},o(o){H(t.$$.fragment,o),n=!1},d(o){se(t,o)}}}function Fo(e){let t,n,o,r,i,a;t=new Ot({props:{$$slots:{default:[Ro]},$$scope:{ctx:e}}}),o=new Pt({props:{$$slots:{default:[go]},$$scope:{ctx:e}}});let d=e[0],l=[];for(let s=0;s<d.length;s+=1)l[s]=$t(wt(e,d,s));const u=s=>H(l[s],1,1,()=>{l[s]=null});return{c(){le(t.$$.fragment),n=R(),le(o.$$.fragment),r=R();for(let s=0;s<l.length;s+=1)l[s].c();i=Ye()},l(s){pe(t.$$.fragment,s),n=g(s),pe(o.$$.fragment,s),r=g(s);for(let f=0;f<l.length;f+=1)l[f].l(s);i=Ye()},m(s,f){ue(t,s,f),L(s,n,f),ue(o,s,f),L(s,r,f);for(let x=0;x<l.length;x+=1)l[x].m(s,f);L(s,i,f),a=!0},p(s,f){const x={};f&64&&(x.$$scope={dirty:f,ctx:s}),t.$set(x);const B={};if(f&64&&(B.$$scope={dirty:f,ctx:s}),o.$set(B),f&1){d=s[0];let b;for(b=0;b<d.length;b+=1){const S=wt(s,d,b);l[b]?(l[b].p(S,f),M(l[b],1)):(l[b]=$t(S),l[b].c(),M(l[b],1),l[b].m(i.parentNode,i))}for(ot(),b=d.length;b<l.length;b+=1)u(b);nt()}},i(s){if(!a){M(t.$$.fragment,s),M(o.$$.fragment,s);for(let f=0;f<d.length;f+=1)M(l[f]);a=!0}},o(s){H(t.$$.fragment,s),H(o.$$.fragment,s),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)H(l[f]);a=!1},d(s){se(t,s),s&&h(n),se(o,s),s&&h(r),Ct(l,s),s&&h(i)}}}function Lo(e){let t,n,o;return n=new Nt({props:{$$slots:{default:[Fo]},$$scope:{ctx:e}}}),{c(){t=p("div"),le(n.$$.fragment)},l(r){t=_(r,"DIV",{});var i=E(t);pe(n.$$.fragment,i),i.forEach(h)},m(r,i){L(r,t,i),ue(n,t,null),o=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),n.$set(a)},i(r){o||(M(n.$$.fragment,r),o=!0)},o(r){H(n.$$.fragment,r),o=!1},d(r){r&&h(t),se(n)}}}function So(e){return[[{title:"V1",component:oo},{title:"V2",component:bo}]]}class Do extends qe{constructor(t){super(),Ke(this,t,So,Lo,Ze,{})}}function Co(e){let t,n;return t=new Do({}),{c(){le(t.$$.fragment)},l(o){pe(t.$$.fragment,o)},m(o,r){ue(t,o,r),n=!0},p:Re,i(o){n||(M(t.$$.fragment,o),n=!0)},o(o){H(t.$$.fragment,o),n=!1},d(o){se(t,o)}}}class Uo extends qe{constructor(t){super(),Ke(this,t,null,Co,Ze,{})}}export{Uo as default};
