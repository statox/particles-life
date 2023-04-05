import{S as pt,i as _t,s as Tt,k as p,a as A,q as T,l as _,m as v,h as f,c as w,r as x,n as g,p as Ut,b as z,D as u,O as fe,K as C,R as Bt,u as Ee,P as de,B as Ce,M as zt,o as Mt,w as ye,x as Ne,y as Ie,f as _e,t as we,z as Pe,e as St,g as Nt,d as $t,L as ao,v as Ot}from"../../../chunks/index-46ced799.js";import{T as _o,a as To,b as uo,c as lo}from"../../../chunks/TabPanel-3f95d051.js";const xo=["VERTEX_SHADER","FRAGMENT_SHADER"];function Eo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return vo(t),t}function vo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function so(e,t,o,n){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function kt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function co(e,t,o,n,r){const a=[];for(let d=0;d<t.length;++d){const l=xo[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=bo(e,t[d],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=Ao(e,a,o,n,r);if(!i)throw"Can not create program";return i}function bo(e,t,o,n){const r=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+d+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function Ao(e,t,o,n,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),o&&o.forEach(function(l,s){e.bindAttribLocation(i,n?n[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function wo(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const Ro=`attribute vec2 a_position;
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

`,go=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let lt,st,bt;const Lo=(e,t)=>{const{screenDimensions:o}=t,{height:n,width:r}=o;if(st=co(e,[Ro,go]),lt={positionLocation:e.getAttribLocation(st,"a_position"),textureLocation:e.getUniformLocation(st,"u_texture"),worldSizeLocation:e.getUniformLocation(st,"u_worldSize")},bt=e.createBuffer(),!bt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,bt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,n,r,0,r,0,0,n,r,n]),e.STATIC_DRAW)},So=e=>{const{gl:t,cellsTex:o,worldDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(st),t.bindBuffer(t.ARRAY_BUFFER,bt),t.enableVertexAttribArray(lt.positionLocation),t.vertexAttribPointer(lt.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(lt.textureLocation,0),t.uniform2f(lt.worldSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6)};function Fo(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:r,disableFullscreen:n}}function Xt(e,t){const{worldDimensions:o}=t,n=o.width*o.height,r=new Array(n).fill(0).map(i=>Math.random()<.5?1:0);return{cellsTex:so(e,new Float32Array(r.map(i=>[i,0,0,0]).flat()),o.width,o.height)}}const Do=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Co=`precision highp float;

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
`;let ct,ft,yt,xt,Ft,Gt,Wt,dt,At;const Vt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return ft=co(e,[Do,Co]),ct={uInputTextureLocation:e.getUniformLocation(ft,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ft,"uTextureSize"),positionLocation:e.getAttribLocation(ft,"aPosition")},yt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,yt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),xt=o,Ft=so(e,null,n.width,n.height),Gt=kt(e,xt),Wt=kt(e,Ft),dt={fb:Gt,tex:xt},At={fb:Wt,tex:Ft},xt},yo=e=>{const{gl:t,worldDimensions:o,screenDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,At.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,yt),t.enableVertexAttribArray(ct.positionLocation),t.vertexAttribPointer(ct.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,dt.tex),t.useProgram(ft),t.uniform1i(ct.uInputTextureLocation,0),t.uniform2f(ct.uTextureSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6);{const r=dt;dt=At,At=r}return dt.tex};function Io(e){let t,o,n,r,a=e[1]?"Play":"Pause",i,d,l,s,c,m,y=e[0].width+"",S,R,O=e[0].height+"",M,D,ee=e[0].width*e[0].height+"",ue,H,he,K,N,U,j,Z,J,q,V,te,F,h,L,me,pe,B,ge,Te,oe,Le,Y,$,le;return{c(){t=p("canvas"),o=A(),n=p("div"),r=p("button"),i=T(a),d=T(" (Space)"),l=A(),s=p("div"),c=p("span"),m=T("World "),S=T(y),R=T(" x "),M=T(O),D=T(" ("),ue=T(ee),H=T(" cells)"),he=A(),K=p("button"),N=T("Reload program"),U=A(),j=p("button"),Z=T("Fullscreen (f)"),J=A(),q=p("div"),V=p("button"),te=T("Reset world (r)"),F=A(),h=p("span"),L=p("label"),me=T("World: width"),pe=A(),B=p("input"),ge=A(),Te=p("label"),oe=T("height"),Le=A(),Y=p("input"),this.h()},l(I){t=_(I,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(f),o=w(I),n=_(I,"DIV",{});var X=v(n);r=_(X,"BUTTON",{});var ne=v(r);i=x(ne,a),d=x(ne," (Space)"),ne.forEach(f),X.forEach(f),l=w(I),s=_(I,"DIV",{});var xe=v(s);c=_(xe,"SPAN",{});var se=v(c);m=x(se,"World "),S=x(se,y),R=x(se," x "),M=x(se,O),D=x(se," ("),ue=x(se,ee),H=x(se," cells)"),se.forEach(f),he=w(xe),K=_(xe,"BUTTON",{});var Q=v(K);N=x(Q,"Reload program"),Q.forEach(f),U=w(xe),j=_(xe,"BUTTON",{});var ce=v(j);Z=x(ce,"Fullscreen (f)"),ce.forEach(f),xe.forEach(f),J=w(I),q=_(I,"DIV",{});var Re=v(q);V=_(Re,"BUTTON",{});var Se=v(V);te=x(Se,"Reset world (r)"),Se.forEach(f),F=w(Re),h=_(Re,"SPAN",{});var P=v(h);L=_(P,"LABEL",{for:!0});var Fe=v(L);me=x(Fe,"World: width"),Fe.forEach(f),pe=w(P),B=_(P,"INPUT",{id:!0,type:!0,min:!0}),ge=w(P),Te=_(P,"LABEL",{for:!0});var k=v(Te);oe=x(k,"height"),k.forEach(f),Le=w(P),Y=_(P,"INPUT",{id:!0,type:!0,min:!0}),P.forEach(f),Re.forEach(f),this.h()},h(){g(t,"id","canvas"),Ut(t,"background-color","black"),g(t,"width",e[3].width),g(t,"height",e[3].height),g(L,"for","worldWidth"),g(B,"id","worldWidth"),g(B,"type","number"),g(B,"min",0),g(Te,"for","worldHeight"),g(Y,"id","worldHeight"),g(Y,"type","number"),g(Y,"min",0)},m(I,X){z(I,t,X),z(I,o,X),z(I,n,X),u(n,r),u(r,i),u(r,d),z(I,l,X),z(I,s,X),u(s,c),u(c,m),u(c,S),u(c,R),u(c,M),u(c,D),u(c,ue),u(c,H),u(s,he),u(s,K),u(K,N),u(s,U),u(s,j),u(j,Z),z(I,J,X),z(I,q,X),u(q,V),u(V,te),u(q,F),u(q,h),u(h,L),u(L,me),u(h,pe),u(h,B),fe(B,e[0].width),u(h,ge),u(h,Te),u(Te,oe),u(h,Le),u(h,Y),fe(Y,e[0].height),$||(le=[C(r,"click",e[6]),C(K,"click",e[7]),C(j,"click",function(){Bt(e[2])&&e[2].apply(this,arguments)}),C(V,"click",e[5]),C(B,"change",e[5]),C(B,"input",e[8]),C(Y,"change",e[5]),C(Y,"input",e[9])],$=!0)},p(I,[X]){e=I,X&2&&a!==(a=e[1]?"Play":"Pause")&&Ee(i,a),X&1&&y!==(y=e[0].width+"")&&Ee(S,y),X&1&&O!==(O=e[0].height+"")&&Ee(M,O),X&1&&ee!==(ee=e[0].width*e[0].height+"")&&Ee(ue,ee),X&1&&de(B.value)!==e[0].width&&fe(B,e[0].width),X&1&&de(Y.value)!==e[0].height&&fe(Y,e[0].height)},i:Ce,o:Ce,d(I){I&&f(t),I&&f(o),I&&f(n),I&&f(l),I&&f(s),I&&f(J),I&&f(q),$=!1,zt(le)}}}function Po(e,t,o){const n={width:1600,height:900},r={width:1600,height:900};let a=!0,i,d,l;function s(){cancelAnimationFrame(l),d=Eo(),wo(d.canvas);const M=Xt(d,{worldDimensions:r});i=Vt(d,{cellsTex:M.cellsTex,texDimensions:r}),Lo(d,{screenDimensions:n});function D(){return a||(i=yo({gl:d,worldDimensions:r,screenDimensions:n})),So({gl:d,cellsTex:i,worldDimensions:r}),l=requestAnimationFrame(D)}l=requestAnimationFrame(D)}let c;Mt(()=>{s(),o(2,c=Fo(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",M=>{if(M.code==="Space"&&(o(1,a=!a),M.preventDefault()),M.code==="KeyF"){c();return}if(M.code==="KeyR"){m();return}})});const m=()=>{o(0,r.width=Math.min(r.width,n.width),r),o(0,r.height=Math.min(r.height,n.height),r);const M=Xt(d,{worldDimensions:r});i=Vt(d,{cellsTex:M.cellsTex,texDimensions:r})},y=()=>o(1,a=!a),S=()=>s();function R(){r.width=de(this.value),o(0,r)}function O(){r.height=de(this.value),o(0,r)}return[r,a,c,n,s,m,y,S,R,O]}class Uo extends pt{constructor(t){super(),_t(this,t,Po,Io,Tt,{})}}const Bo=["VERTEX_SHADER","FRAGMENT_SHADER"];function zo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Mo(t),t}function Mo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function fo(e,t,o,n){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function Ht(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function ho(e,t,o,n,r){const a=[];for(let d=0;d<t.length;++d){const l=Bo[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=No(e,t[d],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=$o(e,a,o,n,r);if(!i)throw"Can not create program";return i}function No(e,t,o,n){const r=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+d+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function $o(e,t,o,n,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),o&&o.forEach(function(l,s){e.bindAttribLocation(i,n?n[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function Oo(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const ko=`precision mediump float;
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
`,Xo=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Go=`precision mediump float;
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

`;let Ye,Ke,wt;const Wo=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:r,width:a}=o;let i=Xo;if(n==="gradiant"&&(i=Go),Ke=ho(e,[ko,i]),Ye={positionLocation:e.getAttribLocation(Ke,"a_position"),textureLocation:e.getUniformLocation(Ke,"u_texture"),worldSizeLocation:e.getUniformLocation(Ke,"u_worldSize"),zoomLocation:e.getUniformLocation(Ke,"u_zoom"),panLocation:e.getUniformLocation(Ke,"u_pan")},wt=e.createBuffer(),!wt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,wt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},Vo=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:r,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ke),t.bindBuffer(t.ARRAY_BUFFER,wt),t.enableVertexAttribArray(Ye.positionLocation),t.vertexAttribPointer(Ye.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ye.textureLocation,0),t.uniform2f(Ye.worldSizeLocation,n.width,n.height),t.uniform1f(Ye.zoomLocation,Math.max(r,1)),t.uniform2f(Ye.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function Ho(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:r,disableFullscreen:n}}function Yt(e,t){const{worldDimensions:o,initialDensity:n,mode:r}=t;let a=n;a>1&&(a=1);const i=o.width*o.height;let d=new Array(i).fill(0);return r==="random"&&(d=d.map(s=>Math.random()<a?1:0)),{cellsTex:fo(e,new Float32Array(d.map((s,c)=>[s,c,0,0]).flat()),o.width,o.height)}}const Yo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Ko=`precision highp float;

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
`;let Ue,Be,It,Et,Dt,Kt,qt,ht,Rt;const Zt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Be=ho(e,[Yo,Ko]),Ue={uInputTextureLocation:e.getUniformLocation(Be,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Be,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Be,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Be,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Be,"uInfiniteSource"),positionLocation:e.getAttribLocation(Be,"aPosition")},It=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,It),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Et=o,Dt=fo(e,null,n.width,n.height),Kt=Ht(e,Et),qt=Ht(e,Dt),ht={fb:Kt,tex:Et},Rt={fb:qt,tex:Dt},Et},qo=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:r,mouseMode:a,infiniteSource:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,Rt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,It),t.enableVertexAttribArray(Ue.positionLocation),t.vertexAttribPointer(Ue.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ht.tex),t.useProgram(Be),t.uniform1i(Ue.uInputTextureLocation,0),t.uniform2f(Ue.uTextureSizeLocation,o.width,o.height),t.uniform2f(Ue.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(Ue.uMouseModeLocation,a),t.uniform1i(Ue.uInfiniteSourceLocation,i?1:0),t.drawArrays(t.TRIANGLES,0,6);{const d=ht;ht=Rt,Rt=d}return ht.tex};function Zo(e){let t,o,n,r,a=e[5]?"Play":"Pause",i,d,l,s,c=e[2]?"Disable":"Enable",m,y,S,R,O,M,D,ee,ue,H,he,K,N,U,j,Z=e[0].width+"",J,q,V=e[0].height+"",te,F,h=e[0].width*e[0].height+"",L,me,pe,B,ge,Te,oe,Le,Y,$,le,I,X,ne,xe,se,Q,ce,Re,Se,P,Fe,k,ve,$e,Oe,G,ke,be,Xe,Ge,W,We,je;return{c(){t=p("canvas"),o=A(),n=p("div"),r=p("button"),i=T(a),d=T(" (Space)"),l=A(),s=p("button"),m=T(c),y=T(" constant cells generation (E)"),S=A(),R=p("button"),O=T("Zoom in (I)"),M=A(),D=p("button"),ee=T("Zoom out (O)"),ue=A(),H=p("button"),he=T("Reset zoom (Z)"),K=A(),N=p("div"),U=p("span"),j=T("World "),J=T(Z),q=T(" x "),te=T(V),F=T(" ("),L=T(h),me=T(" cells)"),pe=A(),B=p("button"),ge=T("Reload program"),Te=A(),oe=p("button"),Le=T("Fullscreen (f)"),Y=A(),$=p("div"),le=p("button"),I=T("Reset world (R)"),X=A(),ne=p("button"),xe=T("Empty world (E)"),se=A(),Q=p("span"),ce=p("label"),Re=T("Initial density [0-1]"),Se=A(),P=p("input"),Fe=A(),k=p("span"),ve=p("label"),$e=T("World: width"),Oe=A(),G=p("input"),ke=A(),be=p("label"),Xe=T("height"),Ge=A(),W=p("input"),this.h()},l(b){t=_(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(f),o=w(b),n=_(b,"DIV",{});var E=v(n);r=_(E,"BUTTON",{});var Ve=v(r);i=x(Ve,a),d=x(Ve," (Space)"),Ve.forEach(f),l=w(E),s=_(E,"BUTTON",{});var He=v(s);m=x(He,c),y=x(He," constant cells generation (E)"),He.forEach(f),S=w(E),R=_(E,"BUTTON",{});var Je=v(R);O=x(Je,"Zoom in (I)"),Je.forEach(f),M=w(E),D=_(E,"BUTTON",{});var Qe=v(D);ee=x(Qe,"Zoom out (O)"),Qe.forEach(f),ue=w(E),H=_(E,"BUTTON",{});var et=v(H);he=x(et,"Reset zoom (Z)"),et.forEach(f),E.forEach(f),K=w(b),N=_(b,"DIV",{});var Ae=v(N);U=_(Ae,"SPAN",{});var re=v(U);j=x(re,"World "),J=x(re,Z),q=x(re," x "),te=x(re,V),F=x(re," ("),L=x(re,h),me=x(re," cells)"),re.forEach(f),pe=w(Ae),B=_(Ae,"BUTTON",{});var tt=v(B);ge=x(tt,"Reload program"),tt.forEach(f),Te=w(Ae),oe=_(Ae,"BUTTON",{});var ot=v(oe);Le=x(ot,"Fullscreen (f)"),ot.forEach(f),Ae.forEach(f),Y=w(b),$=_(b,"DIV",{});var ie=v($);le=_(ie,"BUTTON",{});var nt=v(le);I=x(nt,"Reset world (R)"),nt.forEach(f),X=w(ie),ne=_(ie,"BUTTON",{});var rt=v(ne);xe=x(rt,"Empty world (E)"),rt.forEach(f),se=w(ie),Q=_(ie,"SPAN",{});var De=v(Q);ce=_(De,"LABEL",{for:!0});var it=v(ce);Re=x(it,"Initial density [0-1]"),it.forEach(f),Se=w(De),P=_(De,"INPUT",{id:!0,type:!0,min:!0,max:!0}),De.forEach(f),Fe=w(ie),k=_(ie,"SPAN",{});var ae=v(k);ve=_(ae,"LABEL",{for:!0});var at=v(ve);$e=x(at,"World: width"),at.forEach(f),Oe=w(ae),G=_(ae,"INPUT",{id:!0,type:!0,min:!0}),ke=w(ae),be=_(ae,"LABEL",{for:!0});var ut=v(be);Xe=x(ut,"height"),ut.forEach(f),Ge=w(ae),W=_(ae,"INPUT",{id:!0,type:!0,min:!0}),ae.forEach(f),ie.forEach(f),this.h()},h(){g(t,"id","canvas"),Ut(t,"background-color","black"),g(t,"width",e[7].width),g(t,"height",e[7].height),g(ce,"for","initialDensity"),g(P,"id","initialDensity"),g(P,"type","number"),g(P,"min",0),g(P,"max",1),g(ve,"for","worldWidth"),g(G,"id","worldWidth"),g(G,"type","number"),g(G,"min",0),g(be,"for","worldHeight"),g(W,"id","worldHeight"),g(W,"type","number"),g(W,"min",0)},m(b,E){z(b,t,E),z(b,o,E),z(b,n,E),u(n,r),u(r,i),u(r,d),u(n,l),u(n,s),u(s,m),u(s,y),u(n,S),u(n,R),u(R,O),u(n,M),u(n,D),u(D,ee),u(n,ue),u(n,H),u(H,he),z(b,K,E),z(b,N,E),u(N,U),u(U,j),u(U,J),u(U,q),u(U,te),u(U,F),u(U,L),u(U,me),u(N,pe),u(N,B),u(B,ge),u(N,Te),u(N,oe),u(oe,Le),z(b,Y,E),z(b,$,E),u($,le),u(le,I),u($,X),u($,ne),u(ne,xe),u($,se),u($,Q),u(Q,ce),u(ce,Re),u(Q,Se),u(Q,P),fe(P,e[4]),u($,Fe),u($,k),u(k,ve),u(ve,$e),u(k,Oe),u(k,G),fe(G,e[0].width),u(k,ke),u(k,be),u(be,Xe),u(k,Ge),u(k,W),fe(W,e[0].height),We||(je=[C(r,"click",e[10]),C(s,"click",e[11]),C(R,"click",e[12]),C(D,"click",e[13]),C(H,"click",e[14]),C(B,"click",e[15]),C(oe,"click",function(){Bt(e[6])&&e[6].apply(this,arguments)}),C(le,"click",e[16]),C(ne,"click",e[17]),C(P,"input",e[18]),C(G,"change",e[19]),C(G,"input",e[20]),C(W,"change",e[21]),C(W,"input",e[22])],We=!0)},p(b,[E]){e=b,E&32&&a!==(a=e[5]?"Play":"Pause")&&Ee(i,a),E&4&&c!==(c=e[2]?"Disable":"Enable")&&Ee(m,c),E&1&&Z!==(Z=e[0].width+"")&&Ee(J,Z),E&1&&V!==(V=e[0].height+"")&&Ee(te,V),E&1&&h!==(h=e[0].width*e[0].height+"")&&Ee(L,h),E&16&&de(P.value)!==e[4]&&fe(P,e[4]),E&1&&de(G.value)!==e[0].width&&fe(G,e[0].width),E&1&&de(W.value)!==e[0].height&&fe(W,e[0].height)},i:Ce,o:Ce,d(b){b&&f(t),b&&f(o),b&&f(n),b&&f(K),b&&f(N),b&&f(Y),b&&f($),We=!1,zt(je)}}}function jo(e,t,o){const n={width:1200,height:900},r={width:1200,height:900},a={x:-100,y:-100},i={x:0,y:0};let d=0,l=!0,s=1,c=.05,m=!0,y,S,R;function O(){cancelAnimationFrame(R),S=zo(),Oo(S.canvas);const F=Yt(S,{mode:"random",worldDimensions:r,initialDensity:c});y=Zt(S,{cellsTex:F.cellsTex,texDimensions:r}),Wo(S,{screenDimensions:n,mode:"gradiant"});function h(){m||(y=qo({gl:S,worldDimensions:r,screenDimensions:n,mouseCoordinates:a,mouseMode:d,infiniteSource:l}));const L=.005;return a.x<.2&&i.x>=L&&o(1,i.x-=L,i),a.x>.8&&i.x<1-1/s&&o(1,i.x+=L,i),a.y<.2&&i.y>=L&&o(1,i.y-=L,i),a.y>.8&&i.y<1-1/s&&o(1,i.y+=L,i),Vo({gl:S,cellsTex:y,worldDimensions:r,zoomLevel:s,pan:i}),R=requestAnimationFrame(h)}R=requestAnimationFrame(h)}let M;Mt(()=>{O(),o(6,M=Ho(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",h=>{if(h.code==="Space"&&(o(5,m=!m),h.preventDefault()),h.code==="KeyF"){M();return}if(h.code==="KeyR"){D("random");return}if(h.code==="KeyE"){D("zero");return}if(h.code==="KeyI"){o(3,s++,s);return}if(h.code==="KeyS"){o(2,l=!l);return}if(h.code==="KeyO"){o(3,s=Math.max(s-1,1)),s===1&&(o(1,i.x=0,i),o(1,i.y=0,i));return}if(h.code==="KeyZ"){o(3,s=1),o(1,i.x=0,i),o(1,i.y=0,i);return}});const F=document.getElementById("canvas");if(!F)throw new Error("Canvas unavailable");F.addEventListener("mousemove",h=>{const L=F.getBoundingClientRect(),me=F.width/L.width,pe=F.height/L.height,B={x:(h.clientX-L.left)*me,y:(h.clientY-L.top)*pe};a.x=B.x/n.width,a.y=B.y/n.height}),F.addEventListener("mousedown",h=>{h.preventDefault(),h.button===0?d=1:h.button===2&&(d=2)}),F.addEventListener("mouseup",h=>{h.preventDefault(),d=0}),F.addEventListener("contextmenu",h=>(h.preventDefault(),!1))});const D=F=>{o(0,r.width=Math.min(r.width,n.width),r),o(0,r.height=Math.min(r.height,n.height),r);const h=Yt(S,{mode:F,worldDimensions:r,initialDensity:c});y=Zt(S,{cellsTex:h.cellsTex,texDimensions:r})},ee=()=>o(5,m=!m),ue=()=>o(2,l=!l),H=()=>o(3,s+=1),he=()=>{o(3,s=Math.max(s-1,1)),s===1&&(o(1,i.x=0,i),o(1,i.y=0,i))},K=()=>o(3,s=1),N=()=>O(),U=()=>D("random"),j=()=>D("zero");function Z(){c=de(this.value),o(4,c)}const J=()=>D("random");function q(){r.width=de(this.value),o(0,r)}const V=()=>D("random");function te(){r.height=de(this.value),o(0,r)}return[r,i,l,s,c,m,M,n,O,D,ee,ue,H,he,K,N,U,j,Z,J,q,V,te]}class Jo extends pt{constructor(t){super(),_t(this,t,jo,Zo,Tt,{})}}const Qo=["VERTEX_SHADER","FRAGMENT_SHADER"];function en(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return tn(t),t}function tn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function mo(e,t,o,n){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function jt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function po(e,t,o,n,r){const a=[];for(let d=0;d<t.length;++d){const l=Qo[d]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=on(e,t[d],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=nn(e,a,o,n,r);if(!i)throw"Can not create program";return i}function on(e,t,o,n){const r=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const d=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+d+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function nn(e,t,o,n,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),o&&o.forEach(function(l,s){e.bindAttribLocation(i,n?n[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function rn(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const an=`precision mediump float;
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
`,un=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,ln=`precision mediump float;
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

`;let qe,Ze,gt;const sn=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:r,width:a}=o;let i=un;if(n==="gradiant"&&(i=ln),Ze=po(e,[an,i]),qe={positionLocation:e.getAttribLocation(Ze,"a_position"),textureLocation:e.getUniformLocation(Ze,"u_texture"),worldSizeLocation:e.getUniformLocation(Ze,"u_worldSize"),zoomLocation:e.getUniformLocation(Ze,"u_zoom"),panLocation:e.getUniformLocation(Ze,"u_pan")},gt=e.createBuffer(),!gt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,gt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},cn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:r,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ze),t.bindBuffer(t.ARRAY_BUFFER,gt),t.enableVertexAttribArray(qe.positionLocation),t.vertexAttribPointer(qe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(qe.textureLocation,0),t.uniform2f(qe.worldSizeLocation,n.width,n.height),t.uniform1f(qe.zoomLocation,Math.max(r,1)),t.uniform2f(qe.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function fn(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:r,disableFullscreen:n}}function Jt(e,t){const{worldDimensions:o,initialDensity:n,mode:r}=t;let a=n;a>1&&(a=1);const i=o.width*o.height;let d=new Array(i).fill(0);return r==="random"&&(d=d.map(s=>Math.random()<a?1:0)),{cellsTex:mo(e,new Float32Array(d.map((s,c)=>[s,c,0,0]).flat()),o.width,o.height)}}const dn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,hn=`precision highp float;

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
`;let ze,Me,Pt,vt,Ct,Qt,eo,mt,Lt;const to=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Me=po(e,[dn,hn]),ze={uInputTextureLocation:e.getUniformLocation(Me,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Me,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Me,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Me,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Me,"uInfiniteSource"),positionLocation:e.getAttribLocation(Me,"aPosition")},Pt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Pt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),vt=o,Ct=mo(e,null,n.width,n.height),Qt=jt(e,vt),eo=jt(e,Ct),mt={fb:Qt,tex:vt},Lt={fb:eo,tex:Ct},vt},mn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:r,mouseMode:a,infiniteSource:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,Lt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,Pt),t.enableVertexAttribArray(ze.positionLocation),t.vertexAttribPointer(ze.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,mt.tex),t.useProgram(Me),t.uniform1i(ze.uInputTextureLocation,0),t.uniform2f(ze.uTextureSizeLocation,o.width,o.height),t.uniform2f(ze.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(ze.uMouseModeLocation,a),t.uniform1i(ze.uInfiniteSourceLocation,i?1:0),t.drawArrays(t.TRIANGLES,0,6);{const d=mt;mt=Lt,Lt=d}return mt.tex};function pn(e){let t,o,n,r,a=e[5]?"Play":"Pause",i,d,l,s,c=e[2]?"Disable":"Enable",m,y,S,R,O,M,D,ee,ue,H,he,K,N,U,j,Z=e[0].width+"",J,q,V=e[0].height+"",te,F,h=e[0].width*e[0].height+"",L,me,pe,B,ge,Te,oe,Le,Y,$,le,I,X,ne,xe,se,Q,ce,Re,Se,P,Fe,k,ve,$e,Oe,G,ke,be,Xe,Ge,W,We,je;return{c(){t=p("canvas"),o=A(),n=p("div"),r=p("button"),i=T(a),d=T(" (Space)"),l=A(),s=p("button"),m=T(c),y=T(" constant cells generation (E)"),S=A(),R=p("button"),O=T("Zoom in (I)"),M=A(),D=p("button"),ee=T("Zoom out (O)"),ue=A(),H=p("button"),he=T("Reset zoom (Z)"),K=A(),N=p("div"),U=p("span"),j=T("World "),J=T(Z),q=T(" x "),te=T(V),F=T(" ("),L=T(h),me=T(" cells)"),pe=A(),B=p("button"),ge=T("Reload program"),Te=A(),oe=p("button"),Le=T("Fullscreen (f)"),Y=A(),$=p("div"),le=p("button"),I=T("Reset world (R)"),X=A(),ne=p("button"),xe=T("Empty world (E)"),se=A(),Q=p("span"),ce=p("label"),Re=T("Initial density [0-1]"),Se=A(),P=p("input"),Fe=A(),k=p("span"),ve=p("label"),$e=T("World: width"),Oe=A(),G=p("input"),ke=A(),be=p("label"),Xe=T("height"),Ge=A(),W=p("input"),this.h()},l(b){t=_(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(f),o=w(b),n=_(b,"DIV",{});var E=v(n);r=_(E,"BUTTON",{});var Ve=v(r);i=x(Ve,a),d=x(Ve," (Space)"),Ve.forEach(f),l=w(E),s=_(E,"BUTTON",{});var He=v(s);m=x(He,c),y=x(He," constant cells generation (E)"),He.forEach(f),S=w(E),R=_(E,"BUTTON",{});var Je=v(R);O=x(Je,"Zoom in (I)"),Je.forEach(f),M=w(E),D=_(E,"BUTTON",{});var Qe=v(D);ee=x(Qe,"Zoom out (O)"),Qe.forEach(f),ue=w(E),H=_(E,"BUTTON",{});var et=v(H);he=x(et,"Reset zoom (Z)"),et.forEach(f),E.forEach(f),K=w(b),N=_(b,"DIV",{});var Ae=v(N);U=_(Ae,"SPAN",{});var re=v(U);j=x(re,"World "),J=x(re,Z),q=x(re," x "),te=x(re,V),F=x(re," ("),L=x(re,h),me=x(re," cells)"),re.forEach(f),pe=w(Ae),B=_(Ae,"BUTTON",{});var tt=v(B);ge=x(tt,"Reload program"),tt.forEach(f),Te=w(Ae),oe=_(Ae,"BUTTON",{});var ot=v(oe);Le=x(ot,"Fullscreen (f)"),ot.forEach(f),Ae.forEach(f),Y=w(b),$=_(b,"DIV",{});var ie=v($);le=_(ie,"BUTTON",{});var nt=v(le);I=x(nt,"Reset world (R)"),nt.forEach(f),X=w(ie),ne=_(ie,"BUTTON",{});var rt=v(ne);xe=x(rt,"Empty world (E)"),rt.forEach(f),se=w(ie),Q=_(ie,"SPAN",{});var De=v(Q);ce=_(De,"LABEL",{for:!0});var it=v(ce);Re=x(it,"Initial density [0-1]"),it.forEach(f),Se=w(De),P=_(De,"INPUT",{id:!0,type:!0,min:!0,max:!0}),De.forEach(f),Fe=w(ie),k=_(ie,"SPAN",{});var ae=v(k);ve=_(ae,"LABEL",{for:!0});var at=v(ve);$e=x(at,"World: width"),at.forEach(f),Oe=w(ae),G=_(ae,"INPUT",{id:!0,type:!0,min:!0}),ke=w(ae),be=_(ae,"LABEL",{for:!0});var ut=v(be);Xe=x(ut,"height"),ut.forEach(f),Ge=w(ae),W=_(ae,"INPUT",{id:!0,type:!0,min:!0}),ae.forEach(f),ie.forEach(f),this.h()},h(){g(t,"id","canvas"),Ut(t,"background-color","black"),g(t,"width",e[7].width),g(t,"height",e[7].height),g(ce,"for","initialDensity"),g(P,"id","initialDensity"),g(P,"type","number"),g(P,"min",0),g(P,"max",1),g(ve,"for","worldWidth"),g(G,"id","worldWidth"),g(G,"type","number"),g(G,"min",0),g(be,"for","worldHeight"),g(W,"id","worldHeight"),g(W,"type","number"),g(W,"min",0)},m(b,E){z(b,t,E),z(b,o,E),z(b,n,E),u(n,r),u(r,i),u(r,d),u(n,l),u(n,s),u(s,m),u(s,y),u(n,S),u(n,R),u(R,O),u(n,M),u(n,D),u(D,ee),u(n,ue),u(n,H),u(H,he),z(b,K,E),z(b,N,E),u(N,U),u(U,j),u(U,J),u(U,q),u(U,te),u(U,F),u(U,L),u(U,me),u(N,pe),u(N,B),u(B,ge),u(N,Te),u(N,oe),u(oe,Le),z(b,Y,E),z(b,$,E),u($,le),u(le,I),u($,X),u($,ne),u(ne,xe),u($,se),u($,Q),u(Q,ce),u(ce,Re),u(Q,Se),u(Q,P),fe(P,e[4]),u($,Fe),u($,k),u(k,ve),u(ve,$e),u(k,Oe),u(k,G),fe(G,e[0].width),u(k,ke),u(k,be),u(be,Xe),u(k,Ge),u(k,W),fe(W,e[0].height),We||(je=[C(r,"click",e[10]),C(s,"click",e[11]),C(R,"click",e[12]),C(D,"click",e[13]),C(H,"click",e[14]),C(B,"click",e[15]),C(oe,"click",function(){Bt(e[6])&&e[6].apply(this,arguments)}),C(le,"click",e[16]),C(ne,"click",e[17]),C(P,"input",e[18]),C(G,"change",e[19]),C(G,"input",e[20]),C(W,"change",e[21]),C(W,"input",e[22])],We=!0)},p(b,[E]){e=b,E&32&&a!==(a=e[5]?"Play":"Pause")&&Ee(i,a),E&4&&c!==(c=e[2]?"Disable":"Enable")&&Ee(m,c),E&1&&Z!==(Z=e[0].width+"")&&Ee(J,Z),E&1&&V!==(V=e[0].height+"")&&Ee(te,V),E&1&&h!==(h=e[0].width*e[0].height+"")&&Ee(L,h),E&16&&de(P.value)!==e[4]&&fe(P,e[4]),E&1&&de(G.value)!==e[0].width&&fe(G,e[0].width),E&1&&de(W.value)!==e[0].height&&fe(W,e[0].height)},i:Ce,o:Ce,d(b){b&&f(t),b&&f(o),b&&f(n),b&&f(K),b&&f(N),b&&f(Y),b&&f($),We=!1,zt(je)}}}function _n(e,t,o){const n={width:1200,height:900},r={width:1200,height:900},a={x:-100,y:-100},i={x:0,y:0};let d=0,l=!0,s=1,c=.05,m=!0,y,S,R;function O(){cancelAnimationFrame(R),S=en(),rn(S.canvas);const F=Jt(S,{mode:"random",worldDimensions:r,initialDensity:c});y=to(S,{cellsTex:F.cellsTex,texDimensions:r}),sn(S,{screenDimensions:n,mode:"gradiant"});function h(){m||(y=mn({gl:S,worldDimensions:r,screenDimensions:n,mouseCoordinates:a,mouseMode:d,infiniteSource:l}));const L=.005;return a.x<.2&&i.x>=L&&o(1,i.x-=L,i),a.x>.8&&i.x<1-1/s&&o(1,i.x+=L,i),a.y<.2&&i.y>=L&&o(1,i.y-=L,i),a.y>.8&&i.y<1-1/s&&o(1,i.y+=L,i),cn({gl:S,cellsTex:y,worldDimensions:r,zoomLevel:s,pan:i}),R=requestAnimationFrame(h)}R=requestAnimationFrame(h)}let M;Mt(()=>{O(),o(6,M=fn(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",h=>{if(h.code==="Space"&&(o(5,m=!m),h.preventDefault()),h.code==="KeyF"){M();return}if(h.code==="KeyR"){D("random");return}if(h.code==="KeyE"){D("zero");return}if(h.code==="KeyI"){o(3,s++,s);return}if(h.code==="KeyS"){o(2,l=!l);return}if(h.code==="KeyO"){o(3,s=Math.max(s-1,1)),s===1&&(o(1,i.x=0,i),o(1,i.y=0,i));return}if(h.code==="KeyZ"){o(3,s=1),o(1,i.x=0,i),o(1,i.y=0,i);return}});const F=document.getElementById("canvas");if(!F)throw new Error("Canvas unavailable");F.addEventListener("mousemove",h=>{const L=F.getBoundingClientRect(),me=F.width/L.width,pe=F.height/L.height,B={x:(h.clientX-L.left)*me,y:(h.clientY-L.top)*pe};a.x=B.x/n.width,a.y=B.y/n.height}),F.addEventListener("mousedown",h=>{h.preventDefault(),h.button===0?d=1:h.button===2&&(d=2)}),F.addEventListener("mouseup",h=>{h.preventDefault(),d=0}),F.addEventListener("contextmenu",h=>(h.preventDefault(),!1))});const D=F=>{o(0,r.width=Math.min(r.width,n.width),r),o(0,r.height=Math.min(r.height,n.height),r);const h=Jt(S,{mode:F,worldDimensions:r,initialDensity:c});y=to(S,{cellsTex:h.cellsTex,texDimensions:r})},ee=()=>o(5,m=!m),ue=()=>o(2,l=!l),H=()=>o(3,s+=1),he=()=>{o(3,s=Math.max(s-1,1)),s===1&&(o(1,i.x=0,i),o(1,i.y=0,i))},K=()=>o(3,s=1),N=()=>O(),U=()=>D("random"),j=()=>D("zero");function Z(){c=de(this.value),o(4,c)}const J=()=>D("random");function q(){r.width=de(this.value),o(0,r)}const V=()=>D("random");function te(){r.height=de(this.value),o(0,r)}return[r,i,l,s,c,m,M,n,O,D,ee,ue,H,he,K,N,U,j,Z,J,q,V,te]}class Tn extends pt{constructor(t){super(),_t(this,t,_n,pn,Tt,{})}}function oo(e,t,o){const n=e.slice();return n[1]=t[o],n}function no(e,t,o){const n=e.slice();return n[1]=t[o],n}function xn(e){let t;return{c(){t=T("About")},l(o){t=x(o,"About")},m(o,n){z(o,t,n)},d(o){o&&f(t)}}}function En(e){let t=e[1].title+"",o;return{c(){o=T(t)},l(n){o=x(n,t)},m(n,r){z(n,o,r)},p:Ce,d(n){n&&f(o)}}}function ro(e){let t,o;return t=new lo({props:{$$slots:{default:[En]},$$scope:{ctx:e}}}),{c(){ye(t.$$.fragment)},l(n){Ne(t.$$.fragment,n)},m(n,r){Ie(t,n,r),o=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){o||(_e(t.$$.fragment,n),o=!0)},o(n){we(t.$$.fragment,n),o=!1},d(n){Pe(t,n)}}}function vn(e){let t,o,n,r;t=new lo({props:{$$slots:{default:[xn]},$$scope:{ctx:e}}});let a=e[0],i=[];for(let l=0;l<a.length;l+=1)i[l]=ro(no(e,a,l));const d=l=>we(i[l],1,1,()=>{i[l]=null});return{c(){ye(t.$$.fragment),o=A();for(let l=0;l<i.length;l+=1)i[l].c();n=St()},l(l){Ne(t.$$.fragment,l),o=w(l);for(let s=0;s<i.length;s+=1)i[s].l(l);n=St()},m(l,s){Ie(t,l,s),z(l,o,s);for(let c=0;c<i.length;c+=1)i[c].m(l,s);z(l,n,s),r=!0},p(l,s){const c={};if(s&64&&(c.$$scope={dirty:s,ctx:l}),t.$set(c),s&1){a=l[0];let m;for(m=0;m<a.length;m+=1){const y=no(l,a,m);i[m]?(i[m].p(y,s),_e(i[m],1)):(i[m]=ro(y),i[m].c(),_e(i[m],1),i[m].m(n.parentNode,n))}for(Nt(),m=a.length;m<i.length;m+=1)d(m);$t()}},i(l){if(!r){_e(t.$$.fragment,l);for(let s=0;s<a.length;s+=1)_e(i[s]);r=!0}},o(l){we(t.$$.fragment,l),i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)we(i[s]);r=!1},d(l){Pe(t,l),l&&f(o),ao(i,l),l&&f(n)}}}function bn(e){let t,o;return{c(){t=p("p"),o=T("Experiments running Conway's Game of Life in WebGL shaders.")},l(n){t=_(n,"P",{});var r=v(t);o=x(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(f)},m(n,r){z(n,t,r),u(t,o)},p:Ce,d(n){n&&f(t)}}}function An(e){let t,o,n;var r=e[1].component;function a(i){return{}}return r&&(t=Ot(r,a())),{c(){t&&ye(t.$$.fragment),o=A()},l(i){t&&Ne(t.$$.fragment,i),o=w(i)},m(i,d){t&&Ie(t,i,d),z(i,o,d),n=!0},p(i,d){if(r!==(r=i[1].component)){if(t){Nt();const l=t;we(l.$$.fragment,1,0,()=>{Pe(l,1)}),$t()}r?(t=Ot(r,a()),ye(t.$$.fragment),_e(t.$$.fragment,1),Ie(t,o.parentNode,o)):t=null}},i(i){n||(t&&_e(t.$$.fragment,i),n=!0)},o(i){t&&we(t.$$.fragment,i),n=!1},d(i){t&&Pe(t,i),i&&f(o)}}}function io(e){let t,o;return t=new uo({props:{$$slots:{default:[An]},$$scope:{ctx:e}}}),{c(){ye(t.$$.fragment)},l(n){Ne(t.$$.fragment,n)},m(n,r){Ie(t,n,r),o=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){o||(_e(t.$$.fragment,n),o=!0)},o(n){we(t.$$.fragment,n),o=!1},d(n){Pe(t,n)}}}function wn(e){let t,o,n,r,a,i;t=new To({props:{$$slots:{default:[vn]},$$scope:{ctx:e}}}),n=new uo({props:{$$slots:{default:[bn]},$$scope:{ctx:e}}});let d=e[0],l=[];for(let c=0;c<d.length;c+=1)l[c]=io(oo(e,d,c));const s=c=>we(l[c],1,1,()=>{l[c]=null});return{c(){ye(t.$$.fragment),o=A(),ye(n.$$.fragment),r=A();for(let c=0;c<l.length;c+=1)l[c].c();a=St()},l(c){Ne(t.$$.fragment,c),o=w(c),Ne(n.$$.fragment,c),r=w(c);for(let m=0;m<l.length;m+=1)l[m].l(c);a=St()},m(c,m){Ie(t,c,m),z(c,o,m),Ie(n,c,m),z(c,r,m);for(let y=0;y<l.length;y+=1)l[y].m(c,m);z(c,a,m),i=!0},p(c,m){const y={};m&64&&(y.$$scope={dirty:m,ctx:c}),t.$set(y);const S={};if(m&64&&(S.$$scope={dirty:m,ctx:c}),n.$set(S),m&1){d=c[0];let R;for(R=0;R<d.length;R+=1){const O=oo(c,d,R);l[R]?(l[R].p(O,m),_e(l[R],1)):(l[R]=io(O),l[R].c(),_e(l[R],1),l[R].m(a.parentNode,a))}for(Nt(),R=d.length;R<l.length;R+=1)s(R);$t()}},i(c){if(!i){_e(t.$$.fragment,c),_e(n.$$.fragment,c);for(let m=0;m<d.length;m+=1)_e(l[m]);i=!0}},o(c){we(t.$$.fragment,c),we(n.$$.fragment,c),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)we(l[m]);i=!1},d(c){Pe(t,c),c&&f(o),Pe(n,c),c&&f(r),ao(l,c),c&&f(a)}}}function Rn(e){let t,o,n;return o=new _o({props:{$$slots:{default:[wn]},$$scope:{ctx:e}}}),{c(){t=p("div"),ye(o.$$.fragment)},l(r){t=_(r,"DIV",{});var a=v(t);Ne(o.$$.fragment,a),a.forEach(f)},m(r,a){z(r,t,a),Ie(o,t,null),n=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),o.$set(i)},i(r){n||(_e(o.$$.fragment,r),n=!0)},o(r){we(o.$$.fragment,r),n=!1},d(r){r&&f(t),Pe(o)}}}function gn(e){return[[{title:"V1",component:Uo},{title:"V2",component:Jo},{title:"V3",component:Tn}]]}class Ln extends pt{constructor(t){super(),_t(this,t,gn,Rn,Tt,{})}}function Sn(e){let t,o;return t=new Ln({}),{c(){ye(t.$$.fragment)},l(n){Ne(t.$$.fragment,n)},m(n,r){Ie(t,n,r),o=!0},p:Ce,i(n){o||(_e(t.$$.fragment,n),o=!0)},o(n){we(t.$$.fragment,n),o=!1},d(n){Pe(t,n)}}}class Cn extends pt{constructor(t){super(),_t(this,t,null,Sn,Tt,{})}}export{Cn as default};
