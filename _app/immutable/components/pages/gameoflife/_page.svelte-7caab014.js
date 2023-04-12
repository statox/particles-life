import{S as Ke,i as qe,s as Ze,k as g,a as L,q as A,l as w,m as D,h as p,c as S,r as R,n as T,p as ao,b as y,D as m,O as ve,K as B,R as Qt,u as Le,P as we,B as O,M as en,o as uo,w as Se,x as Ye,y as ye,f as q,t as Q,z as Fe,e as Bo,g as ct,d as lt,L as on,v as wt}from"../../../chunks/index-46ced799.js";import{T as Dn,a as $n,b as tn,c as nn}from"../../../chunks/TabPanel-3f95d051.js";import{_ as Xo}from"../../../chunks/preload-helper-41c905a7.js";const Ln=["VERTEX_SHADER","FRAGMENT_SHADER"];function Sn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return yn(o),o}function yn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function rn(e,o,n,i){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function Et(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function an(e,o,n,i,a){const r=[];for(let u=0;u<o.length;++u){const s=Ln[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Fn(e,o[u],s,a);if(!c)throw"Can not create shader";r.push(c)}const t=zn(e,r,n,i,a);if(!t)throw"Can not create program";return t}function Fn(e,o,n,i){const a=i||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(r);return a(new Error("*** Error compiling shader '"+r+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(r),null}return r}function zn(e,o,n,i,a){const r=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,i?i[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return r("Error in program linking:"+s),e.deleteProgram(t),null}return t}function In(e,o){o=o||1;const n=e.clientWidth*o|0,i=e.clientHeight*o|0;return e.width!==n||e.height!==i?(e.width=n,e.height=i,!0):!1}const Pn=`attribute vec2 a_position;
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

`,Mn=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let so,co,Co;const Un=(e,o)=>{const{screenDimensions:n}=o,{height:i,width:a}=n;if(co=an(e,[Pn,Mn]),so={positionLocation:e.getAttribLocation(co,"a_position"),textureLocation:e.getUniformLocation(co,"u_texture"),worldSizeLocation:e.getUniformLocation(co,"u_worldSize")},Co=e.createBuffer(),!Co)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Co),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Bn=e=>{const{gl:o,cellsTex:n,worldDimensions:i}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(co),o.bindBuffer(o.ARRAY_BUFFER,Co),o.enableVertexAttribArray(so.positionLocation),o.vertexAttribPointer(so.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(so.textureLocation,0),o.uniform2f(so.worldSizeLocation,i.width,i.height),o.drawArrays(o.TRIANGLES,0,6)};function Nn(e,o,n){function i(){const r=e.getElementById(o);r&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),r.width=n.width,r.height=n.height)}function a(){const r=e.getElementById(o);r&&(e.fullscreenElement||r.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&i()}),{enableFullscreen:a,disableFullscreen:i}}function At(e,o){const{worldDimensions:n}=o,i=n.width*n.height,a=new Array(i).fill(0).map(t=>Math.random()<.5?1:0);return{cellsTex:rn(e,new Float32Array(a.map(t=>[t,0,0,0]).flat()),n.width,n.height)}}const Gn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Wn=`precision highp float;

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
`;let lo,fo,nt,To,jo,Rt,Ct,mo,Do;const Dt=(e,o)=>{const{cellsTex:n,texDimensions:i}=o;return fo=an(e,[Gn,Wn]),lo={uInputTextureLocation:e.getUniformLocation(fo,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(fo,"uTextureSize"),positionLocation:e.getAttribLocation(fo,"aPosition")},nt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,nt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),To=n,jo=rn(e,null,i.width,i.height),Rt=Et(e,To),Ct=Et(e,jo),mo={fb:Rt,tex:To},Do={fb:Ct,tex:jo},To},Xn=e=>{const{gl:o,worldDimensions:n,screenDimensions:i}=e;o.bindFramebuffer(o.FRAMEBUFFER,Do.fb),o.viewport(0,0,i.width,i.height),o.bindBuffer(o.ARRAY_BUFFER,nt),o.enableVertexAttribArray(lo.positionLocation),o.vertexAttribPointer(lo.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,mo.tex),o.useProgram(fo),o.uniform1i(lo.uInputTextureLocation,0),o.uniform2f(lo.uTextureSizeLocation,n.width,n.height),o.drawArrays(o.TRIANGLES,0,6);{const a=mo;mo=Do,Do=a}return mo.tex};function On(e){let o,n,i,a,r=e[1]?"Play":"Pause",t,u,s,c,d,b,_=e[0].width+"",h,l,f=e[0].height+"",v,x,C=e[0].width*e[0].height+"",I,k,H,$,P,V,ee,te,ne,Z,j,ae,W,E,U,Ee,Ae,N,je,ue,se,Je,Y,K,Re;return{c(){o=g("canvas"),n=L(),i=g("div"),a=g("button"),t=A(r),u=A(" (Space)"),s=L(),c=g("div"),d=g("span"),b=A("World "),h=A(_),l=A(" x "),v=A(f),x=A(" ("),I=A(C),k=A(" cells)"),H=L(),$=g("button"),P=A("Reload program"),V=L(),ee=g("button"),te=A("Fullscreen (f)"),ne=L(),Z=g("div"),j=g("button"),ae=A("Reset world (r)"),W=L(),E=g("span"),U=g("label"),Ee=A("World: width"),Ae=L(),N=g("input"),je=L(),ue=g("label"),se=A("height"),Je=L(),Y=g("input"),this.h()},l(F){o=w(F,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(o).forEach(p),n=S(F),i=w(F,"DIV",{});var G=D(i);a=w(G,"BUTTON",{});var ce=D(a);t=R(ce,r),u=R(ce," (Space)"),ce.forEach(p),G.forEach(p),s=S(F),c=w(F,"DIV",{});var le=D(c);d=w(le,"SPAN",{});var oe=D(d);b=R(oe,"World "),h=R(oe,_),l=R(oe," x "),v=R(oe,f),x=R(oe," ("),I=R(oe,C),k=R(oe," cells)"),oe.forEach(p),H=S(le),$=w(le,"BUTTON",{});var de=D($);P=R(de,"Reload program"),de.forEach(p),V=S(le),ee=w(le,"BUTTON",{});var Ce=D(ee);te=R(Ce,"Fullscreen (f)"),Ce.forEach(p),le.forEach(p),ne=S(F),Z=w(F,"DIV",{});var ze=D(Z);j=w(ze,"BUTTON",{});var oo=D(j);ae=R(oo,"Reset world (r)"),oo.forEach(p),W=S(ze),E=w(ze,"SPAN",{});var X=D(E);U=w(X,"LABEL",{for:!0});var to=D(U);Ee=R(to,"World: width"),to.forEach(p),Ae=S(X),N=w(X,"INPUT",{id:!0,type:!0,min:!0}),je=S(X),ue=w(X,"LABEL",{for:!0});var J=D(ue);se=R(J,"height"),J.forEach(p),Je=S(X),Y=w(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(p),ze.forEach(p),this.h()},h(){T(o,"id","canvas"),ao(o,"background-color","black"),T(o,"width",e[3].width),T(o,"height",e[3].height),T(U,"for","worldWidth"),T(N,"id","worldWidth"),T(N,"type","number"),T(N,"min",0),T(ue,"for","worldHeight"),T(Y,"id","worldHeight"),T(Y,"type","number"),T(Y,"min",0)},m(F,G){y(F,o,G),y(F,n,G),y(F,i,G),m(i,a),m(a,t),m(a,u),y(F,s,G),y(F,c,G),m(c,d),m(d,b),m(d,h),m(d,l),m(d,v),m(d,x),m(d,I),m(d,k),m(c,H),m(c,$),m($,P),m(c,V),m(c,ee),m(ee,te),y(F,ne,G),y(F,Z,G),m(Z,j),m(j,ae),m(Z,W),m(Z,E),m(E,U),m(U,Ee),m(E,Ae),m(E,N),ve(N,e[0].width),m(E,je),m(E,ue),m(ue,se),m(E,Je),m(E,Y),ve(Y,e[0].height),K||(Re=[B(a,"click",e[6]),B($,"click",e[7]),B(ee,"click",function(){Qt(e[2])&&e[2].apply(this,arguments)}),B(j,"click",e[5]),B(N,"change",e[5]),B(N,"input",e[8]),B(Y,"change",e[5]),B(Y,"input",e[9])],K=!0)},p(F,[G]){e=F,G&2&&r!==(r=e[1]?"Play":"Pause")&&Le(t,r),G&1&&_!==(_=e[0].width+"")&&Le(h,_),G&1&&f!==(f=e[0].height+"")&&Le(v,f),G&1&&C!==(C=e[0].width*e[0].height+"")&&Le(I,C),G&1&&we(N.value)!==e[0].width&&ve(N,e[0].width),G&1&&we(Y.value)!==e[0].height&&ve(Y,e[0].height)},i:O,o:O,d(F){F&&p(o),F&&p(n),F&&p(i),F&&p(s),F&&p(c),F&&p(ne),F&&p(Z),K=!1,en(Re)}}}function kn(e,o,n){const i={width:1600,height:900},a={width:1600,height:900};let r=!0,t,u,s;function c(){cancelAnimationFrame(s),u=Sn(),In(u.canvas);const v=At(u,{worldDimensions:a});t=Dt(u,{cellsTex:v.cellsTex,texDimensions:a}),Un(u,{screenDimensions:i});function x(){return r||(t=Xn({gl:u,worldDimensions:a,screenDimensions:i})),Bn({gl:u,cellsTex:t,worldDimensions:a}),s=requestAnimationFrame(x)}s=requestAnimationFrame(x)}let d;uo(()=>{c(),n(2,d=Nn(document,"canvas",i).enableFullscreen),document.addEventListener("keydown",v=>{if(v.code==="Space"&&(n(1,r=!r),v.preventDefault()),v.code==="KeyF"){d();return}if(v.code==="KeyR"){b();return}})});const b=()=>{n(0,a.width=Math.min(a.width,i.width),a),n(0,a.height=Math.min(a.height,i.height),a);const v=At(u,{worldDimensions:a});t=Dt(u,{cellsTex:v.cellsTex,texDimensions:a})},_=()=>n(1,r=!r),h=()=>c();function l(){a.width=we(this.value),n(0,a)}function f(){a.height=we(this.value),n(0,a)}return[a,r,d,i,c,b,_,h,l,f]}let Hn=class extends Ke{constructor(o){super(),qe(this,o,kn,On,Ze,{})}};const Vn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Yn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return Kn(o),o}function Kn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function un(e,o,n,i){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function $t(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function sn(e,o,n,i,a){const r=[];for(let u=0;u<o.length;++u){const s=Vn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=qn(e,o[u],s,a);if(!c)throw"Can not create shader";r.push(c)}const t=Zn(e,r,n,i,a);if(!t)throw"Can not create program";return t}function qn(e,o,n,i){const a=i||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(r);return a(new Error("*** Error compiling shader '"+r+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(r),null}return r}function Zn(e,o,n,i,a){const r=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,i?i[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return r("Error in program linking:"+s),e.deleteProgram(t),null}return t}function jn(e,o){o=o||1;const n=e.clientWidth*o|0,i=e.clientHeight*o|0;return e.width!==n||e.height!==i?(e.width=n,e.height=i,!0):!1}const Jn=`precision mediump float;
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
`,Qn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,ei=`precision mediump float;
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

`;let Qe,eo,$o;const oi=(e,o)=>{const{screenDimensions:n,mode:i}=o,{height:a,width:r}=n;let t=Qn;if(i==="gradiant"&&(t=ei),eo=sn(e,[Jn,t]),Qe={positionLocation:e.getAttribLocation(eo,"a_position"),textureLocation:e.getUniformLocation(eo,"u_texture"),worldSizeLocation:e.getUniformLocation(eo,"u_worldSize"),zoomLocation:e.getUniformLocation(eo,"u_zoom"),panLocation:e.getUniformLocation(eo,"u_pan")},$o=e.createBuffer(),!$o)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,$o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,r,0,r,0,0,a,r,a]),e.STATIC_DRAW)},ti=e=>{const{gl:o,cellsTex:n,worldDimensions:i,zoomLevel:a,pan:r}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(eo),o.bindBuffer(o.ARRAY_BUFFER,$o),o.enableVertexAttribArray(Qe.positionLocation),o.vertexAttribPointer(Qe.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(Qe.textureLocation,0),o.uniform2f(Qe.worldSizeLocation,i.width,i.height),o.uniform1f(Qe.zoomLocation,Math.max(a,1)),o.uniform2f(Qe.panLocation,r.x,r.y),o.drawArrays(o.TRIANGLES,0,6)};function ni(e,o,n){function i(){const r=e.getElementById(o);r&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),r.width=n.width,r.height=n.height)}function a(){const r=e.getElementById(o);r&&(e.fullscreenElement||r.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&i()}),{enableFullscreen:a,disableFullscreen:i}}function Lt(e,o){const{worldDimensions:n,initialDensity:i,mode:a}=o;let r=i;r>1&&(r=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"&&(u=u.map(c=>Math.random()<r?1:0)),{cellsTex:un(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const ii=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,ri=`precision highp float;

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
`;let Ue,Be,it,go,Jo,St,yt,ho,Lo;const Ft=(e,o)=>{const{cellsTex:n,texDimensions:i}=o;return Be=sn(e,[ii,ri]),Ue={uInputTextureLocation:e.getUniformLocation(Be,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Be,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Be,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Be,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Be,"uInfiniteSource"),positionLocation:e.getAttribLocation(Be,"aPosition")},it=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,it),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),go=n,Jo=un(e,null,i.width,i.height),St=$t(e,go),yt=$t(e,Jo),ho={fb:St,tex:go},Lo={fb:yt,tex:Jo},go},ai=e=>{const{gl:o,worldDimensions:n,screenDimensions:i,mouseCoordinates:a,mouseMode:r,infiniteSource:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,Lo.fb),o.viewport(0,0,i.width,i.height),o.bindBuffer(o.ARRAY_BUFFER,it),o.enableVertexAttribArray(Ue.positionLocation),o.vertexAttribPointer(Ue.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,ho.tex),o.useProgram(Be),o.uniform1i(Ue.uInputTextureLocation,0),o.uniform2f(Ue.uTextureSizeLocation,n.width,n.height),o.uniform2f(Ue.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(Ue.uMouseModeLocation,r),o.uniform1i(Ue.uInfiniteSourceLocation,t?1:0),o.drawArrays(o.TRIANGLES,0,6);{const u=ho;ho=Lo,Lo=u}return ho.tex};function ui(e){let o,n,i,a,r=e[5]?"Play":"Pause",t,u,s,c,d=e[2]?"Disable":"Enable",b,_,h,l,f,v,x,C,I,k,H,$,P,V,ee,te=e[0].width+"",ne,Z,j=e[0].height+"",ae,W,E=e[0].width*e[0].height+"",U,Ee,Ae,N,je,ue,se,Je,Y,K,Re,F,G,ce,le,oe,de,Ce,ze,oo,X,to,J,no,Oo,ko,ie,Ho,io,Vo,Yo,re,Ko,dt;return{c(){o=g("canvas"),n=L(),i=g("div"),a=g("button"),t=A(r),u=A(" (Space)"),s=L(),c=g("button"),b=A(d),_=A(" constant cells generation (E)"),h=L(),l=g("button"),f=A("Zoom in (I)"),v=L(),x=g("button"),C=A("Zoom out (O)"),I=L(),k=g("button"),H=A("Reset zoom (Z)"),$=L(),P=g("div"),V=g("span"),ee=A("World "),ne=A(te),Z=A(" x "),ae=A(j),W=A(" ("),U=A(E),Ee=A(" cells)"),Ae=L(),N=g("button"),je=A("Reload program"),ue=L(),se=g("button"),Je=A("Fullscreen (f)"),Y=L(),K=g("div"),Re=g("button"),F=A("Reset world (R)"),G=L(),ce=g("button"),le=A("Empty world (E)"),oe=L(),de=g("span"),Ce=g("label"),ze=A("Initial density [0-1]"),oo=L(),X=g("input"),to=L(),J=g("span"),no=g("label"),Oo=A("World: width"),ko=L(),ie=g("input"),Ho=L(),io=g("label"),Vo=A("height"),Yo=L(),re=g("input"),this.h()},l(M){o=w(M,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(o).forEach(p),n=S(M),i=w(M,"DIV",{});var z=D(i);a=w(z,"BUTTON",{});var qo=D(a);t=R(qo,r),u=R(qo," (Space)"),qo.forEach(p),s=S(z),c=w(z,"BUTTON",{});var Zo=D(c);b=R(Zo,d),_=R(Zo," constant cells generation (E)"),Zo.forEach(p),h=S(z),l=w(z,"BUTTON",{});var ft=D(l);f=R(ft,"Zoom in (I)"),ft.forEach(p),v=S(z),x=w(z,"BUTTON",{});var mt=D(x);C=R(mt,"Zoom out (O)"),mt.forEach(p),I=S(z),k=w(z,"BUTTON",{});var ht=D(k);H=R(ht,"Reset zoom (Z)"),ht.forEach(p),z.forEach(p),$=S(M),P=w(M,"DIV",{});var ro=D(P);V=w(ro,"SPAN",{});var Ie=D(V);ee=R(Ie,"World "),ne=R(Ie,te),Z=R(Ie," x "),ae=R(Ie,j),W=R(Ie," ("),U=R(Ie,E),Ee=R(Ie," cells)"),Ie.forEach(p),Ae=S(ro),N=w(ro,"BUTTON",{});var bt=D(N);je=R(bt,"Reload program"),bt.forEach(p),ue=S(ro),se=w(ro,"BUTTON",{});var pt=D(se);Je=R(pt,"Fullscreen (f)"),pt.forEach(p),ro.forEach(p),Y=S(M),K=w(M,"DIV",{});var Pe=D(K);Re=w(Pe,"BUTTON",{});var xt=D(Re);F=R(xt,"Reset world (R)"),xt.forEach(p),G=S(Pe),ce=w(Pe,"BUTTON",{});var vt=D(ce);le=R(vt,"Empty world (E)"),vt.forEach(p),oe=S(Pe),de=w(Pe,"SPAN",{});var _o=D(de);Ce=w(_o,"LABEL",{for:!0});var _t=D(Ce);ze=R(_t,"Initial density [0-1]"),_t.forEach(p),oo=S(_o),X=w(_o,"INPUT",{id:!0,type:!0,min:!0,max:!0}),_o.forEach(p),to=S(Pe),J=w(Pe,"SPAN",{});var Me=D(J);no=w(Me,"LABEL",{for:!0});var Tt=D(no);Oo=R(Tt,"World: width"),Tt.forEach(p),ko=S(Me),ie=w(Me,"INPUT",{id:!0,type:!0,min:!0}),Ho=S(Me),io=w(Me,"LABEL",{for:!0});var gt=D(io);Vo=R(gt,"height"),gt.forEach(p),Yo=S(Me),re=w(Me,"INPUT",{id:!0,type:!0,min:!0}),Me.forEach(p),Pe.forEach(p),this.h()},h(){T(o,"id","canvas"),ao(o,"background-color","black"),T(o,"width",e[7].width),T(o,"height",e[7].height),T(Ce,"for","initialDensity"),T(X,"id","initialDensity"),T(X,"type","number"),T(X,"min",0),T(X,"max",1),T(no,"for","worldWidth"),T(ie,"id","worldWidth"),T(ie,"type","number"),T(ie,"min",0),T(io,"for","worldHeight"),T(re,"id","worldHeight"),T(re,"type","number"),T(re,"min",0)},m(M,z){y(M,o,z),y(M,n,z),y(M,i,z),m(i,a),m(a,t),m(a,u),m(i,s),m(i,c),m(c,b),m(c,_),m(i,h),m(i,l),m(l,f),m(i,v),m(i,x),m(x,C),m(i,I),m(i,k),m(k,H),y(M,$,z),y(M,P,z),m(P,V),m(V,ee),m(V,ne),m(V,Z),m(V,ae),m(V,W),m(V,U),m(V,Ee),m(P,Ae),m(P,N),m(N,je),m(P,ue),m(P,se),m(se,Je),y(M,Y,z),y(M,K,z),m(K,Re),m(Re,F),m(K,G),m(K,ce),m(ce,le),m(K,oe),m(K,de),m(de,Ce),m(Ce,ze),m(de,oo),m(de,X),ve(X,e[4]),m(K,to),m(K,J),m(J,no),m(no,Oo),m(J,ko),m(J,ie),ve(ie,e[0].width),m(J,Ho),m(J,io),m(io,Vo),m(J,Yo),m(J,re),ve(re,e[0].height),Ko||(dt=[B(a,"click",e[10]),B(c,"click",e[11]),B(l,"click",e[12]),B(x,"click",e[13]),B(k,"click",e[14]),B(N,"click",e[15]),B(se,"click",function(){Qt(e[6])&&e[6].apply(this,arguments)}),B(Re,"click",e[16]),B(ce,"click",e[17]),B(X,"input",e[18]),B(ie,"change",e[19]),B(ie,"input",e[20]),B(re,"change",e[21]),B(re,"input",e[22])],Ko=!0)},p(M,[z]){e=M,z&32&&r!==(r=e[5]?"Play":"Pause")&&Le(t,r),z&4&&d!==(d=e[2]?"Disable":"Enable")&&Le(b,d),z&1&&te!==(te=e[0].width+"")&&Le(ne,te),z&1&&j!==(j=e[0].height+"")&&Le(ae,j),z&1&&E!==(E=e[0].width*e[0].height+"")&&Le(U,E),z&16&&we(X.value)!==e[4]&&ve(X,e[4]),z&1&&we(ie.value)!==e[0].width&&ve(ie,e[0].width),z&1&&we(re.value)!==e[0].height&&ve(re,e[0].height)},i:O,o:O,d(M){M&&p(o),M&&p(n),M&&p(i),M&&p($),M&&p(P),M&&p(Y),M&&p(K),Ko=!1,en(dt)}}}function si(e,o,n){const i={width:1200,height:900},a={width:1200,height:900},r={x:-100,y:-100},t={x:0,y:0};let u=0,s=!0,c=1,d=.05,b=!0,_,h,l;function f(){cancelAnimationFrame(l),h=Yn(),jn(h.canvas);const W=Lt(h,{mode:"random",worldDimensions:a,initialDensity:d});_=Ft(h,{cellsTex:W.cellsTex,texDimensions:a}),oi(h,{screenDimensions:i,mode:"gradiant"});function E(){b||(_=ai({gl:h,worldDimensions:a,screenDimensions:i,mouseCoordinates:r,mouseMode:u,infiniteSource:s}));const U=.005;return r.x<.2&&t.x>=U&&n(1,t.x-=U,t),r.x>.8&&t.x<1-1/c&&n(1,t.x+=U,t),r.y<.2&&t.y>=U&&n(1,t.y-=U,t),r.y>.8&&t.y<1-1/c&&n(1,t.y+=U,t),ti({gl:h,cellsTex:_,worldDimensions:a,zoomLevel:c,pan:t}),l=requestAnimationFrame(E)}l=requestAnimationFrame(E)}let v;uo(()=>{f(),n(6,v=ni(document,"canvas",i).enableFullscreen),document.addEventListener("keydown",E=>{if(E.code==="Space"&&(n(5,b=!b),E.preventDefault()),E.code==="KeyF"){v();return}if(E.code==="KeyR"){x("random");return}if(E.code==="KeyE"){x("zero");return}if(E.code==="KeyI"){n(3,c++,c);return}if(E.code==="KeyS"){n(2,s=!s);return}if(E.code==="KeyO"){n(3,c=Math.max(c-1,1)),c===1&&(n(1,t.x=0,t),n(1,t.y=0,t));return}if(E.code==="KeyZ"){n(3,c=1),n(1,t.x=0,t),n(1,t.y=0,t);return}});const W=document.getElementById("canvas");if(!W)throw new Error("Canvas unavailable");W.addEventListener("mousemove",E=>{const U=W.getBoundingClientRect(),Ee=W.width/U.width,Ae=W.height/U.height,N={x:(E.clientX-U.left)*Ee,y:(E.clientY-U.top)*Ae};r.x=N.x/i.width,r.y=N.y/i.height}),W.addEventListener("mousedown",E=>{E.preventDefault(),E.button===0?u=1:E.button===2&&(u=2)}),W.addEventListener("mouseup",E=>{E.preventDefault(),u=0}),W.addEventListener("contextmenu",E=>(E.preventDefault(),!1))});const x=W=>{n(0,a.width=Math.min(a.width,i.width),a),n(0,a.height=Math.min(a.height,i.height),a);const E=Lt(h,{mode:W,worldDimensions:a,initialDensity:d});_=Ft(h,{cellsTex:E.cellsTex,texDimensions:a})},C=()=>n(5,b=!b),I=()=>n(2,s=!s),k=()=>n(3,c+=1),H=()=>{n(3,c=Math.max(c-1,1)),c===1&&(n(1,t.x=0,t),n(1,t.y=0,t))},$=()=>n(3,c=1),P=()=>f(),V=()=>x("random"),ee=()=>x("zero");function te(){d=we(this.value),n(4,d)}const ne=()=>x("random");function Z(){a.width=we(this.value),n(0,a)}const j=()=>x("random");function ae(){a.height=we(this.value),n(0,a)}return[a,t,s,c,d,b,v,i,f,x,C,I,k,H,$,P,V,ee,te,ne,Z,j,ae]}let ci=class extends Ke{constructor(o){super(),qe(this,o,si,ui,Ze,{})}};const li=["VERTEX_SHADER","FRAGMENT_SHADER"];function di(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return fi(o),o}function fi(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function cn(e,o,n,i){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function zt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function ln(e,o,n,i,a){const r=[];for(let u=0;u<o.length;++u){const s=li[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=mi(e,o[u],s,a);if(!c)throw"Can not create shader";r.push(c)}const t=hi(e,r,n,i,a);if(!t)throw"Can not create program";return t}function mi(e,o,n,i){const a=i||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(r);return a(new Error("*** Error compiling shader '"+r+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(r),null}return r}function hi(e,o,n,i,a){const r=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,i?i[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return r("Error in program linking:"+s),e.deleteProgram(t),null}return t}function bi(e,o){o=o||1;const n=e.clientWidth*o|0,i=e.clientHeight*o|0;return e.width!==n||e.height!==i?(e.width=n,e.height=i,!0):!1}const pi=`precision mediump float;
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
`,xi=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,vi=`precision mediump float;
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
    gl_FragColor = vec4(0.3, blue, 0.8, 1.0) * alive;
}

`,_i=`precision mediump float;
uniform sampler2D u_texture;
uniform vec2 u_worldSize;
uniform float u_zoom;
uniform vec2 u_pan;
uniform float u_iteration;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    vec4 cell = texture2D(u_texture, texCoord);
    float alive = cell.x;
    float updatedAt = cell.z;
    float blue = updatedAt / float(u_iteration);
    gl_FragColor = vec4(blue, 0.0, 1.0, 1.0) * alive;
}

`;let Ne,Ge,So;const It=(e,o)=>{const{screenDimensions:n,mode:i}=o,{height:a,width:r}=n;let t=xi;if(i==="gradiant"?t=vi:i==="age_gradiant"&&(t=_i),Ge=ln(e,[pi,t]),Ne={positionLocation:e.getAttribLocation(Ge,"a_position"),textureLocation:e.getUniformLocation(Ge,"u_texture"),worldSizeLocation:e.getUniformLocation(Ge,"u_worldSize"),zoomLocation:e.getUniformLocation(Ge,"u_zoom"),panLocation:e.getUniformLocation(Ge,"u_pan"),iterationLocation:e.getUniformLocation(Ge,"u_iteration")},So=e.createBuffer(),!So)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,So),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,r,0,r,0,0,a,r,a]),e.STATIC_DRAW)},Ti=e=>{const{gl:o,cellsTex:n,worldDimensions:i,zoomLevel:a,pan:r,iteration:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(Ge),o.bindBuffer(o.ARRAY_BUFFER,So),o.enableVertexAttribArray(Ne.positionLocation),o.vertexAttribPointer(Ne.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(Ne.textureLocation,0),o.uniform2f(Ne.worldSizeLocation,i.width,i.height),o.uniform1f(Ne.zoomLocation,Math.max(a,1)),o.uniform2f(Ne.panLocation,r.x,r.y),o.uniform1f(Ne.iterationLocation,t),o.drawArrays(o.TRIANGLES,0,6)};function Pt(e,o){const{worldDimensions:n,initialDensity:i,mode:a}=o;let r=i;r>1&&(r=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"&&(u=u.map(c=>Math.random()<r?1:0)),{cellsTex:cn(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const gi=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,wi=`precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;
uniform vec2 uMouseCoordinates;
uniform int uMouseMode; // 0 do nothing; 1 draw; 2 erase
uniform int uInfiniteSource; // 0 do nothing; 1 generate cells
uniform float uIteration;

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
    float updatedAt = cell.z;

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
        if (uMouseMode == 1 && gold_noise(texcoord, 121234.0 + uIteration) < 0.1) {
            nextAlive = 1.0;
        } else if (uMouseMode == 2) {
            nextAlive = 0.0;
        }
    }

    if (uInfiniteSource == 1 && distance(texcoord, vec2(0.5, 0.5)) < 0.02) {
        if (gold_noise(texcoord, 155790.0 + uIteration) < 0.05) {
            nextAlive = 1.0;
        }
    }


    if (alive != nextAlive) {
        updatedAt = uIteration;
    }

    gl_FragColor = vec4(nextAlive, id, updatedAt, 0.0);
}
`;let De,$e,rt,wo,Qo,Mt,Ut,bo,yo;const Bt=(e,o)=>{const{cellsTex:n,texDimensions:i}=o;return $e=ln(e,[gi,wi]),De={uInputTextureLocation:e.getUniformLocation($e,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation($e,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation($e,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation($e,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation($e,"uInfiniteSource"),uIterationLocation:e.getUniformLocation($e,"uIteration"),positionLocation:e.getAttribLocation($e,"aPosition")},rt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,rt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),wo=n,Qo=cn(e,null,i.width,i.height),Mt=zt(e,wo),Ut=zt(e,Qo),bo={fb:Mt,tex:wo},yo={fb:Ut,tex:Qo},wo},Ei=e=>{const{gl:o,worldDimensions:n,screenDimensions:i,mouseCoordinates:a,mouseMode:r,infiniteSource:t,iteration:u}=e;o.bindFramebuffer(o.FRAMEBUFFER,yo.fb),o.viewport(0,0,i.width,i.height),o.bindBuffer(o.ARRAY_BUFFER,rt),o.enableVertexAttribArray(De.positionLocation),o.vertexAttribPointer(De.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,bo.tex),o.useProgram($e),o.uniform1i(De.uInputTextureLocation,0),o.uniform2f(De.uTextureSizeLocation,n.width,n.height),o.uniform2f(De.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(De.uMouseModeLocation,r),o.uniform1i(De.uInfiniteSourceLocation,t?1:0),o.uniform1f(De.uIterationLocation,u),o.drawArrays(o.TRIANGLES,0,6);{const s=bo;bo=yo,yo=s}return bo.tex};function Ai(e){let o;return{c(){o=g("canvas"),this.h()},l(n){o=w(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),D(o).forEach(p),this.h()},h(){T(o,"id","canvas"),ao(o,"background-color","black"),T(o,"width",e[0].width),T(o,"height",e[0].height),T(o,"class","svelte-1b0ol19")},m(n,i){y(n,o,i)},p:O,i:O,o:O,d(n){n&&p(o)}}}function Ri(e){const o={x:0,y:0};let n=0,i,a;const r={width:window.innerWidth-50,height:window.innerHeight-10},t={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>h("random"),"Empty grid":()=>h("zero"),"Initial density":.05,"World width":r.width,"World height":r.height,Cells:(r.width*r.height).toString(),"Zoom level":1,"Pan reset":()=>{t.x=0,t.y=0},"Reload progam":()=>_()},s=async()=>{const l=await Xo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),f=new l.GUI;f.add(u,"Pause").listen(),f.add(u,"Infinite source").listen(),f.add(u,"TimeInSeconds").listen(),f.add(u,"Iteration").listen(),f.add(u,"fps").listen(),f.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>It(c,{screenDimensions:r,mode:u["Draw mode"]})),f.add(u,"Reset grid"),f.add(u,"Empty grid"),f.add(u,"Initial density",0,1,.01).onFinishChange(()=>h("random")),f.add(u,"World width",1,r.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),h("random")}),f.add(u,"World height",1,r.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),h("random")}),f.add(u,"Cells").listen(),f.add(u,"Zoom level",1,10),f.add(u,"Pan reset"),f.add(u,"Reload progam")};let c,d,b;function _(){i=Date.now()/1e3,cancelAnimationFrame(b),c=di(),bi(c.canvas);const l=Pt(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=Bt(c,{cellsTex:l.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),It(c,{screenDimensions:r,mode:u["Draw mode"]});function f(){if(!u.Pause){const x=Date.now()/1e3,C=x-a;u.fps=1/C,a=x,u.TimeInSeconds=x-i,u.Iteration++,d=Ei({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:r,mouseCoordinates:o,mouseMode:n,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const v=.005;return o.x<.1&&t.x>=v&&(t.x-=v),o.x>.9&&t.x<1-1/u["Zoom level"]&&(t.x+=v),o.y<.1&&t.y>=v&&(t.y-=v),o.y>.9&&t.y<1-1/u["Zoom level"]&&(t.y+=v),Ti({gl:c,cellsTex:d,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:t,iteration:u.Iteration}),b=requestAnimationFrame(f)}b=requestAnimationFrame(f)}uo(()=>{_(),s(),document.addEventListener("keydown",f=>{if(f.code==="Space"&&(u.Pause=!u.Pause,f.preventDefault()),f.code==="KeyR"){h("random");return}if(f.code==="KeyE"){h("zero");return}if(f.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const l=document.getElementById("canvas");if(!l)throw new Error("Canvas unavailable");l.addEventListener("mousemove",f=>{const v=l.getBoundingClientRect(),x=l.width/v.width,C=l.height/v.height,I={x:(f.clientX-v.left)*x,y:(f.clientY-v.top)*C};o.x=I.x/r.width,o.y=I.y/r.height}),l.addEventListener("mousedown",f=>{f.preventDefault(),f.button===0?n=1:f.button===2&&(n=2)}),l.addEventListener("mouseup",f=>{f.preventDefault(),n=0}),l.addEventListener("contextmenu",f=>(f.preventDefault(),!1))});const h=l=>{u.Iteration=0,u.TimeInSeconds=0;const f=Pt(c,{mode:l,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=Bt(c,{cellsTex:f.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[r]}let Ci=class extends Ke{constructor(o){super(),qe(this,o,Ri,Ai,Ze,{})}};const Di=["VERTEX_SHADER","FRAGMENT_SHADER"];function $i(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return Li(o),o}function Li(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function dn(e,o,n,i){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function Nt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function fn(e,o,n,i,a){const r=[];for(let u=0;u<o.length;++u){const s=Di[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Si(e,o[u],s,a);if(!c)throw"Can not create shader";r.push(c)}const t=yi(e,r,n,i,a);if(!t)throw"Can not create program";return t}function Si(e,o,n,i){const a=i||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(r);return a(new Error("*** Error compiling shader '"+r+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(r),null}return r}function yi(e,o,n,i,a){const r=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,i?i[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return r("Error in program linking:"+s),e.deleteProgram(t),null}return t}function Fi(e,o){o=o||1;const n=e.clientWidth*o|0,i=e.clientHeight*o|0;return e.width!==n||e.height!==i?(e.width=n,e.height=i,!0):!1}function mn(e,o){const{worldDimensions:n,initialDensity:i,mode:a}=o;let r=i;r>1&&(r=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"&&(u=u.map(c=>Math.random()<r?1:0)),{cellsTex:dn(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const zi=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Ii=`precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;
uniform vec2 uMouseCoordinates;
uniform int uMouseMode; // 0 do nothing; 1 draw; 2 erase
uniform int uInfiniteSource; // 0 do nothing; 1 generate cells
uniform int uPause; // 1 Don't compute game of life rules but compute other decisions like source and mouse;
                    // 0 Also compute game of life rules
uniform float uIteration;

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

float getNextState(vec2 texcoord, vec4 cell) {
    float alive = cell.x;

    if (uPause == 1) {
        return alive;
    }

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

    if (alive == 1.0 && (aliveNeighbors == 2.0 || aliveNeighbors == 3.0)) {
        return 1.0;
    } else if (alive == 0.0 && aliveNeighbors == 3.0) {
        return 1.0;
    }
    return 0.0;
}

float getSourceDecision(vec2 texcoord, float currentDecision) {
    if (uPause == 1 || uInfiniteSource == 0 || distance(texcoord, vec2(0.5, 0.5)) > 0.02) {
        return currentDecision;
    }
    if (gold_noise(texcoord, 155790.0 + uIteration) < 0.05) {
        return 1.0;
    }
    return currentDecision;
}

float getMouseDecision(vec2 texcoord, float currentDecision) {
    if (uMouseMode == 0) {
        return currentDecision;
    }
    if (distance(texcoord, uMouseCoordinates) < 0.02) {
        if (uMouseMode == 1 && gold_noise(texcoord, 121234.0 + uIteration) < 0.1) {
            return 1.0;
        } else if (uMouseMode == 2) {
            return 0.0;
        }
    }
    return currentDecision;
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / uTextureSize;
    vec4 cell = texture2D(uInputTexture, texcoord);
    float alive = cell.x;
    float id = cell.y;
    float updatedAt = cell.z;

    // Each decision function needs the previous decision in case
    // the decision is to do nothing
    float golDecision = getNextState(texcoord, cell);
    float sourceDecision = getSourceDecision(texcoord, golDecision);
    float finalDecision = getMouseDecision(texcoord, sourceDecision);

    if (alive != finalDecision) {
        updatedAt = uIteration;
    }

    gl_FragColor = vec4(finalDecision, id, updatedAt, 0.0);
}
`;let fe,me,at,Eo,et,Gt,Wt,po,Fo;const hn=(e,o)=>{const{cellsTex:n,texDimensions:i}=o;return me=fn(e,[zi,Ii]),fe={uInputTextureLocation:e.getUniformLocation(me,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(me,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(me,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(me,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(me,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(me,"uIteration"),uPauseLocation:e.getUniformLocation(me,"uPause"),positionLocation:e.getAttribLocation(me,"aPosition")},at=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,at),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Eo=n,et=dn(e,null,i.width,i.height),Gt=Nt(e,Eo),Wt=Nt(e,et),po={fb:Gt,tex:Eo},Fo={fb:Wt,tex:et},Eo},Pi=e=>{const{gl:o,worldDimensions:n,screenDimensions:i,mouseCoordinates:a,mouseMode:r,infiniteSource:t,iteration:u,pause:s}=e;o.bindFramebuffer(o.FRAMEBUFFER,Fo.fb),o.viewport(0,0,i.width,i.height),o.bindBuffer(o.ARRAY_BUFFER,at),o.enableVertexAttribArray(fe.positionLocation),o.vertexAttribPointer(fe.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,po.tex),o.useProgram(me),o.uniform1i(fe.uInputTextureLocation,0),o.uniform2f(fe.uTextureSizeLocation,n.width,n.height),o.uniform2f(fe.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(fe.uMouseModeLocation,r),o.uniform1i(fe.uInfiniteSourceLocation,t?1:0),o.uniform1f(fe.uIterationLocation,u),o.uniform1i(fe.uPauseLocation,s?1:0),o.drawArrays(o.TRIANGLES,0,6);{const c=po;po=Fo,Fo=c}return po.tex},Mi=`precision mediump float;
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
`,Ui=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Bi=`precision mediump float;
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
    gl_FragColor = vec4(0.3, blue, 0.8, 1.0) * alive;
}

`,Ni=`precision mediump float;
uniform sampler2D u_texture;
uniform vec2 u_worldSize;
uniform float u_zoom;
uniform vec2 u_pan;
uniform float u_iteration;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    vec4 cell = texture2D(u_texture, texCoord);
    float alive = cell.x;
    float updatedAt = cell.z;
    float blue = updatedAt / float(u_iteration);
    gl_FragColor = vec4(blue, 0.0, 1.0, 1.0) * alive;
}

`;let We,Xe,zo;const bn=(e,o)=>{const{screenDimensions:n,mode:i}=o,{height:a,width:r}=n;let t=Ui;if(i==="gradiant"?t=Bi:i==="age_gradiant"&&(t=Ni),Xe=fn(e,[Mi,t]),We={positionLocation:e.getAttribLocation(Xe,"a_position"),textureLocation:e.getUniformLocation(Xe,"u_texture"),worldSizeLocation:e.getUniformLocation(Xe,"u_worldSize"),zoomLocation:e.getUniformLocation(Xe,"u_zoom"),panLocation:e.getUniformLocation(Xe,"u_pan"),iterationLocation:e.getUniformLocation(Xe,"u_iteration")},zo=e.createBuffer(),!zo)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,zo),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,r,0,r,0,0,a,r,a]),e.STATIC_DRAW)},Gi=e=>{const{gl:o,cellsTex:n,worldDimensions:i,zoomLevel:a,pan:r,iteration:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(Xe),o.bindBuffer(o.ARRAY_BUFFER,zo),o.enableVertexAttribArray(We.positionLocation),o.vertexAttribPointer(We.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(We.textureLocation,0),o.uniform2f(We.worldSizeLocation,i.width,i.height),o.uniform1f(We.zoomLocation,Math.max(a,1)),o.uniform2f(We.panLocation,r.x,r.y),o.uniform1f(We.iterationLocation,t),o.drawArrays(o.TRIANGLES,0,6)};let _e,No;function Wi(e){const{drawMode:o,initialDensity:n,screenDimensions:i,worldDimensions:a}=e;_e=$i(),Fi(_e.canvas);const r=mn(_e,{mode:"random",worldDimensions:a,initialDensity:n});No=hn(_e,{cellsTex:r.cellsTex,texDimensions:a}),bn(_e,{screenDimensions:i,mode:o})}function Xi(e){const{infiniteSource:o,iteration:n,mouseCoordinates:i,mouseMode:a,pause:r,pan:t,screenDimensions:u,worldDimensions:s,zoomLevel:c}=e;No=Pi({gl:_e,worldDimensions:s,screenDimensions:u,mouseCoordinates:i,mouseMode:a,infiniteSource:o,iteration:n,pause:r}),Gi({gl:_e,cellsTex:No,worldDimensions:s,zoomLevel:c,pan:t,iteration:n})}const Oi=e=>{const{worldDimensions:o,mode:n,initialDensity:i}=e,a=mn(_e,{mode:n,worldDimensions:o,initialDensity:i});No=hn(_e,{cellsTex:a.cellsTex,texDimensions:o})},ki=e=>{bn(_e,{screenDimensions:e.screenDimensions,mode:e.drawMode})};function Hi(e){let o;return{c(){o=g("canvas"),this.h()},l(n){o=w(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),D(o).forEach(p),this.h()},h(){T(o,"id","canvas"),ao(o,"background-color","black"),T(o,"width",e[0].width),T(o,"height",e[0].height),T(o,"class","svelte-1b0ol19")},m(n,i){y(n,o,i)},p:O,i:O,o:O,d(n){n&&p(o)}}}function Vi(e){const o={x:0,y:0};let n=0,i,a=0;const r={width:window.innerWidth-50,height:window.innerHeight-10},t={program:{pause:!1,infiniteSource:!0,drawMode:"age_gradiant",reloadProgram:()=>d()},simulation:{iteration:0,timeInSeconds:0,fps:0},grid:{resetGrid:()=>_("random"),emptyGrid:()=>_("zero"),initialDensity:.5,worldWidth:r.width,worldHeight:r.height,nbCells:(r.width*r.height).toString()},zoom:{x:0,y:0,xController:null,yController:null,level:1,previousLevel:1}},u=async()=>{const h=await Xo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI,f=l.addFolder("Program");f.open(),f.add(t.program,"pause").name("Pause").listen(),f.add(t.program,"infiniteSource").name("Infinite Source").listen(),f.add(t.program,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>ki({screenDimensions:r,drawMode:t.program.drawMode})),f.add(t.program,"reloadProgram").name("Reload program");const v=l.addFolder("Simulation");v.open(),v.add(t.simulation,"timeInSeconds").name("Time (s)").listen(),v.add(t.simulation,"iteration").name("Iteration").listen(),v.add(t.simulation,"fps").listen();const x=l.addFolder("Grid");x.open(),x.add(t.grid,"resetGrid").name("Reset grid"),x.add(t.grid,"emptyGrid").name("Empty grid"),x.add(t.grid,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>_("random")),x.add(t.grid,"worldWidth",1,r.width,1).name("World width").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),x.add(t.grid,"worldHeight",1,r.height,1).name("World height").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),x.add(t.grid,"nbCells").name("Cells count").listen();const C=l.addFolder("Zoom");C.open(),C.add(t.zoom,"level",1,10).name("Level").onChange(function(I){const k=I-t.zoom.previousLevel;if(!t.zoom.xController||!t.zoom.yController||k===0)return;const H=1-1/t.zoom.previousLevel,$=1-1/I;t.zoom.xController.max($),t.zoom.xController.min(0),t.zoom.yController.max($),t.zoom.yController.min(0);const P={x:t.zoom.x/H,y:t.zoom.y/H};t.zoom.x=$*P.x||$/2,t.zoom.y=$*P.y||$/2,t.zoom.previousLevel=I}),t.zoom.xController=C.add(t.zoom,"x",0,0,.01).name("X offset").listen(),t.zoom.yController=C.add(t.zoom,"y",0,0,.01).name("Y offset").listen()},s=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space"&&(t.program.pause=!t.program.pause,l.preventDefault()),l.code==="KeyR"){_("random");return}if(l.code==="KeyE"){_("zero");return}if(l.code==="KeyS"){t.program.infiniteSource=!t.program.infiniteSource;return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const f=h.getBoundingClientRect(),v=h.width/f.width,x=h.height/f.height,C={x:(l.clientX-f.left)*v,y:(l.clientY-f.top)*x};o.x=C.x/r.width,o.y=C.y/r.height}),setInterval(()=>{o.x<.1&&t.zoom.x>=.005&&(t.zoom.x-=.005),o.x>.9&&t.zoom.x<1-1/t.zoom.level&&(t.zoom.x+=.005),o.y<.1&&t.zoom.y>=.005&&(t.zoom.y-=.005),o.y>.9&&t.zoom.y<1-1/t.zoom.level&&(t.zoom.y+=.005)},50),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?n=1:l.button===2&&(n=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),n=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))};let c;const d=()=>{Wi({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},screenDimensions:r,drawMode:t.program.drawMode}),cancelAnimationFrame(c),i=Date.now()/1e3,b()},b=()=>{const h=Date.now()/1e3,l=h-a;a=h,t.simulation.fps=1/l,t.program.pause||(t.simulation.timeInSeconds=h-i,t.simulation.iteration++),Xi({infiniteSource:t.program.infiniteSource,iteration:t.simulation.iteration,mouseCoordinates:o,mouseMode:n,pause:t.program.pause,pan:{x:t.zoom.x,y:t.zoom.y},screenDimensions:r,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},zoomLevel:t.zoom.level}),c=requestAnimationFrame(b)},_=h=>{t.simulation.iteration=0,t.simulation.timeInSeconds=0,Oi({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},mode:h})};return uo(()=>{u(),s(),d()}),[r]}let Yi=class extends Ke{constructor(o){super(),qe(this,o,Vi,Hi,Ze,{})}};const Ki=e=>e.split("").reduce((o,n)=>o.length===0?(o.push(n),o):(n.match(/\d/)&&o[o.length-1]?.match(/\d/)?o[o.length-1]=o[o.length-1]+n:o.push(n),o),[]),qi=e=>{const o=[];if(!e.length)throw new Error("No line items to tokenize");let n={};for(let i=0;i<e.length;i++){const a=e[i],r=a.match(/^\d+$/);if(!r&&!["o","b","$","!"].includes(a))throw new Error(`Invalid configuration item ${a}`);if(r){if(n.count)throw new Error(`Invalid configuration. Two consecutive numbers ${n.count}, ${a}`);n.count=Number(a)}else{if(n.tag)throw new Error(`Invalid configuration. Something went wrong with tokenization at item ${a}, index ${i}`);if(n.count||(n.count=1),a==="!")return o;n.tag=a,o.push(n),n={}}}throw new Error("Invalid configuration. No ending character")},Zi=e=>{const{properties:o,tokens:n}=e,i=[[]];for(;n.length;){const{count:a,tag:r}=n.shift();if(r==="!")throw new Error("Invalid token. ! should not have been sent here");if(r==="$"){for(let t=0;t<a;t++)if(i.push([]),i.length>o.y)throw new Error("Invalid token. Vertical dimensions mismatch")}else for(let t=0;t<a;t++)i[i.length-1].push(r==="b"?0:1)}for(;i.length<o.y;)i.push(new Array(o.x).fill(0));for(let a=0;a<i.length;a++)for(;i[a].length<o.x;)i[a].push(0);return i},ji=e=>{const o=e.replaceAll(" ","").split(",").reduce((n,i)=>{const[a,r]=i.split("=");return r.match(/^\d+$/)?n[a]=Number(r):n[a]=r,n},{x:0,y:0});if(!o.x||!o.y)throw new Error("Invalid pattern file: no dimensions");return o},Ji=e=>{const o=e.replaceAll(`\r
`,`
`).split(`
`).filter(s=>s!=="").filter(s=>!s.match(/^#/)),n=o.shift(),i=o.join("");if(!n||!o)throw new Error("Invalid pattern file");const a=ji(n),r=Ki(i),t=qi(r),u=Zi({properties:a,tokens:t});return{width:a.x,height:a.y,pattern:u}},Qi=`#N Big glider\r
#O Dean Hickerson\r
#C The first known diagonal spaceship other than the glider. Has period 4 and speed c/4.\r
#C www.conwaylife.com/wiki/index.php?title=Big_glider\r
x = 18, y = 18, rule = B3/S23\r
3b3o12b$3bo2b3o9b$4bobo11b$2o7bo8b$obo4bo2bo7b$o8b2o7b$b2o15b$bo2bo5bo\r
b2o4b$bo9b2obo3b$3bobo6b2o2bob$4b2obo4b2o3bo$8bo7bob$7b4o3bobob$7bob2o\r
3b4o$8bo3b2obo2b$13b2o3b$9bob3o4b$10bo2bo!`,er=`#N Candelabra\r
#O Charles Trawick\r
#C A period 3 oscillator.\r
#C www.conwaylife.com/wiki/index.php?title=Candelabra\r
x = 16, y = 6, rule = B3/S23\r
4b2o4b2o4b$bo2bo6bo2bob$obobo6bobobo$bo2bob4obo2bob$4bobo2bobo4b$5bo4b\r
o!`,or=`#N 131c31climber.rle\r
#C https://conwaylife.com/wiki/(13,1)c/31_Pseudo-B_climber\r
#C https://www.conwaylife.com/patterns/131c31climber.rle\r
x = 37, y = 108, rule = B3/S23\r
o$b2o$2o19$8bo$6bobo$7b2o19$13bobo$14b2o$14bo17$24bo$23b3o$23bob2o$24b\r
o2bo$25b2o$25bo2$22b2o$21bo2$20bobo2bo$20bob3obo$19b3ob2obo$20bobo$20b\r
3o$21bo8$29bo$27bobo$28b2o19$34bobo$35b2o$35bo!`,tr=`#N E-heptomino\r
#O Unknown\r
#C https://conwaylife.com/wiki/E-heptomino\r
#C https://conwaylife.com/patterns/eheptomino.rle\r
x = 4, y = 3, rule = B3/S23\r
b3o$2o$b2o!`,nr=`#N gardenofeden5x45.rle\r
#O Steven Eker, 2016\r
#C https://conwaylife.com/wiki/Garden_of_Eden_5%C3%9745\r
#C https://www.conwaylife.com/patterns/gardenofeden5x45.rle\r
x = 45, y = 5, rule = B3/S23\r
2obobo2bob3obo2b3ob7o2b6o2bobobobo$b2obob2obobobobobob3obobobobobobob\r
3obobobo$2b2ob2o2b4o2b6o2b6o2b5ob5obo$b2obob2obobobobobob3obobobobobob\r
ob3obobobo$2obobo2bob3obo2b3ob7o2b6o2bobobobo!`,ir=`#N Glider\r
#O Richard K. Guy\r
#C The smallest, most common, and first discovered spaceship. Diagonal, has period 4 and speed c/4.\r
#C www.conwaylife.com/wiki/index.php?title=Glider\r
x = 3, y = 3, rule = B3/S23\r
bob$2bo$3o!`,rr=`#N Gliders by the dozen\r
#C A methuselah with lifespan 184 that emits exactly 12 gliders over the course of its evolution.\r
#C www.conwaylife.com/wiki/index.php?title=Gliders_by_the_dozen\r
x = 5, y = 3, rule = 23/3\r
2o2bo$o3bo$o2b2o!`,ar=`#N Glider loop\r
#C A pattern in which two gliders are bounced back and forth along an \r
#C ever-lengthening track.\r
#C www.conwaylife.com/wiki/index.php?title=Glider_loop\r
x = 73, y = 150, rule = b3/s23\r
45bo27b$37b3o5bo27b$36bo2b2o3bobo26b$35bo5bo3bo27b$41bo3bo27b$36b2o2bo\r
32b$25b2o11b2o33b$25b2o46b6$61bo11b$17b2o40b2ob2o9b$17b2o42bo11b3$59b\r
2o12b$58bo2bo11b$51bo5bo3b2o10b$51bo5bo4bo10b$9b2o40bo6bo3bo10b$9b2o\r
37bob3obo3bo2bo11b$48b5obo5bo12b$48bobo22b$52b2o17bob$52b2o9b3o5bob$\r
52bo9bo2b2o3bobo$51b2o8bo5bo3bob$46b2o3bo15bo3bob$17b3o31bo10b2o2bo6b$\r
20bo29b2obo10b2o7b$15b2o4bo30bo20b$18bo3bo50b$14bo4bo2bo50b$14bo3bo3bo\r
50b$14b3obob2o51b$18bo54b$14b4o7b3o45b$14b2o8bo3bo44b$24bo4bo28bo14b$\r
26bo3bo25b2o9b2o4b$23b3obo2bo24b2o8b3obo3b$22bo7bo23bo10bo3bo3b$22bobo\r
3bo26b5o5bob2o4b$21b2obo3bo27bo10bo5b$21b2ob3o46b5$63b2o8b$63b2o8b4$\r
43b3o27b$46bo26b$41b2o4bo25b$44bo3bo6b2o16b$40bo4bo2bo6b2o16b$40bo3bo\r
3bo24b$40b3obob2o25b$44bo28b$40b4o29b$40b2o31b2$47b2o24b$47b2o24b2$33b\r
o39b$33bobo37b$33b2o38b3$38b2o33b$37bobo33b$39bo33b2$24b2o47b$24b2o47b\r
2$31b2o40b$29b4o40b$28bo44b$25b2obob3o40b$24bo3bo3bo40b$16b2o6bo2bo4bo\r
40b$16b2o6bo3bo44b$25bo4b2o41b$26bo46b$27b3o43b4$8b2o63b$8b2o63b5$46b\r
3ob2o21b$5bo10bo27bo3bob2o21b$4b2obo5b5o26bo3bobo22b$3bo3bo10bo23bo7bo\r
22b$3bob3o8b2o24bo2bob3o23b$4b2o9b2o25bo3bo26b$14bo28bo4bo24b$44bo3bo\r
8b2o14b$45b3o7b4o14b$54bo18b$51b2obob3o14b$50bo3bo3bo14b$50bo2bo4bo14b\r
$50bo3bo18b$20bo30bo4b2o15b$7b2o10bob2o29bo20b$6bo2b2o10bo31b3o17b$bo\r
3bo15bo3b2o46b$bo3bo5bo8b2o51b$obo3b2o2bo9bo52b$bo5b3o9b2o52b$bo17b2o\r
52b$22bobo48b$12bo5bob5o48b$11bo2bo3bob3obo37b2o9b$10bo3bo6bo40b2o9b$\r
10bo4bo5bo51b$10b2o3bo5bo51b$11bo2bo58b$12b2o59b3$11bo42b2o17b$9b2ob2o\r
40b2o17b$11bo61b6$46b2o25b$33b2o11b2o25b$32bo2b2o36b$27bo3bo41b$27bo3b\r
o5bo35b$26bobo3b2o2bo36b$27bo5b3o37b$27bo!`,ur=`#N Laputa\r
#O Rich Schroeppel\r
#C A period 2 oscillator found in September 1992.\r
#C www.conwaylife.com/wiki/index.php?title=Laputa\r
x = 12, y = 7, rule = B3/S23\r
3b2ob2o4b$\r
3b2obo3b2o$\r
8bo2bo$\r
b6ob3ob$\r
o2bobo6b$\r
2o3bob2o3b$\r
4b2ob2o!\r
`,Xt={bigglider:Qi,candelabra:er,climber131c31:or,eheptomino:tr,gardenofeden5x45:nr,glider:ir,glidersbythedozen:rr,gliderLoop:ar,laputa:ur},pn=e=>{if(!Xt[e])throw new Error(`Invalid configuration name ${e}`);return Ji(Xt[e])},sr=["VERTEX_SHADER","FRAGMENT_SHADER"];function cr(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return lr(o),o}function lr(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function xn(e,o,n,i){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function Ot(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function vn(e,o,n,i,a){const r=[];for(let u=0;u<o.length;++u){const s=sr[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=dr(e,o[u],s,a);if(!c)throw"Can not create shader";r.push(c)}const t=fr(e,r,n,i,a);if(!t)throw"Can not create program";return t}function dr(e,o,n,i){const a=i||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(r);return a(new Error("*** Error compiling shader '"+r+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(r),null}return r}function fr(e,o,n,i,a){const r=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,i?i[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return r("Error in program linking:"+s),e.deleteProgram(t),null}return t}function mr(e,o){o=o||1;const n=e.clientWidth*o|0,i=e.clientHeight*o|0;return e.width!==n||e.height!==i?(e.width=n,e.height=i,!0):!1}function _n(e,o){const{worldDimensions:n,initialDensity:i,configuration:a}=o;let r=i;r>1&&(r=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"?u=u.map(c=>Math.random()<r?1:0):a!=="empty"&&(u=hr({cells:u,insertPosition:{x:Math.floor(n.width/2),y:Math.floor(n.height/2)},worldDimensions:n,configurationName:a})),{cellsTex:xn(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const hr=e=>{const{cells:o,insertPosition:n,worldDimensions:i,configurationName:a}=e,r=pn(a);if(i.width<r.width||i.height<r.height)throw new Error("World is too small for this configuration");if(n.x+r.width>i.width||n.y+r.height>i.height)throw new Error("Configuration can be imported at this point");for(let t=0;t<r.height;t++)for(let u=0;u<r.width;u++){const s=(n.y+t)*i.width+(n.x+u);o[s]=r.pattern[t][u]}return o},br=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,pr=`precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;
uniform vec2 uMouseCoordinates;
uniform int uMouseMode; // 0 do nothing; 1 draw; 2 erase
uniform int uInfiniteSource; // 0 do nothing; 1 generate cells
uniform int uPause; // 1 Don't compute game of life rules but compute other decisions like source and mouse;
                    // 0 Also compute game of life rules
uniform float uIteration;

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

float getNextState(vec2 texcoord, vec4 cell) {
    float alive = cell.x;

    if (uPause == 1) {
        return alive;
    }

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

    if (alive == 1.0 && (aliveNeighbors == 2.0 || aliveNeighbors == 3.0)) {
        return 1.0;
    } else if (alive == 0.0 && aliveNeighbors == 3.0) {
        return 1.0;
    }
    return 0.0;
}

float getSourceDecision(vec2 texcoord, float currentDecision) {
    if (uPause == 1 || uInfiniteSource == 0 || distance(texcoord, vec2(0.5, 0.5)) > 0.02) {
        return currentDecision;
    }
    if (gold_noise(texcoord, 155790.0 + uIteration) < 0.05) {
        return 1.0;
    }
    return currentDecision;
}

float getMouseDecision(vec2 texcoord, float currentDecision) {
    if (uMouseMode == 0) {
        return currentDecision;
    }
    if (distance(texcoord, uMouseCoordinates) < 0.02) {
        if (uMouseMode == 1 && gold_noise(texcoord, 121234.0 + uIteration) < 0.1) {
            return 1.0;
        } else if (uMouseMode == 2) {
            return 0.0;
        }
    }
    return currentDecision;
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / uTextureSize;
    vec4 cell = texture2D(uInputTexture, texcoord);
    float alive = cell.x;
    float id = cell.y;
    float updatedAt = cell.z;

    // Each decision function needs the previous decision in case
    // the decision is to do nothing
    float golDecision = getNextState(texcoord, cell);
    float sourceDecision = getSourceDecision(texcoord, golDecision);
    float finalDecision = getMouseDecision(texcoord, sourceDecision);

    if (alive != finalDecision) {
        updatedAt = uIteration;
    }

    gl_FragColor = vec4(finalDecision, id, updatedAt, 0.0);
}
`;let he,be,ut,Ao,ot,kt,Ht,xo,Io;const Tn=(e,o)=>{const{cellsTex:n,texDimensions:i}=o;return be=vn(e,[br,pr]),he={uInputTextureLocation:e.getUniformLocation(be,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(be,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(be,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(be,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(be,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(be,"uIteration"),uPauseLocation:e.getUniformLocation(be,"uPause"),positionLocation:e.getAttribLocation(be,"aPosition")},ut=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,ut),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Ao=n,ot=xn(e,null,i.width,i.height),kt=Ot(e,Ao),Ht=Ot(e,ot),xo={fb:kt,tex:Ao},Io={fb:Ht,tex:ot},Ao},xr=e=>{const{gl:o,worldDimensions:n,screenDimensions:i,mouseCoordinates:a,mouseMode:r,infiniteSource:t,iteration:u,pause:s}=e;o.bindFramebuffer(o.FRAMEBUFFER,Io.fb),o.viewport(0,0,i.width,i.height),o.bindBuffer(o.ARRAY_BUFFER,ut),o.enableVertexAttribArray(he.positionLocation),o.vertexAttribPointer(he.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,xo.tex),o.useProgram(be),o.uniform1i(he.uInputTextureLocation,0),o.uniform2f(he.uTextureSizeLocation,n.width,n.height),o.uniform2f(he.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(he.uMouseModeLocation,r),o.uniform1i(he.uInfiniteSourceLocation,t?1:0),o.uniform1f(he.uIterationLocation,u),o.uniform1i(he.uPauseLocation,s?1:0),o.drawArrays(o.TRIANGLES,0,6);{const c=xo;xo=Io,Io=c}return xo.tex},vr=`precision mediump float;
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
`,_r=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Tr=`precision mediump float;
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
    gl_FragColor = vec4(0.3, blue, 0.8, 1.0) * alive;
}

`,gr=`precision mediump float;
uniform sampler2D u_texture;
uniform vec2 u_worldSize;
uniform float u_zoom;
uniform vec2 u_pan;
uniform float u_iteration;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    vec4 cell = texture2D(u_texture, texCoord);
    float alive = cell.x;
    float updatedAt = cell.z;
    float blue = updatedAt / float(u_iteration);
    gl_FragColor = vec4(blue, 0.0, 1.0, 1.0) * alive;
}

`;let Oe,ke,Po;const gn=(e,o)=>{const{screenDimensions:n,mode:i}=o,{height:a,width:r}=n;let t=_r;if(i==="gradiant"?t=Tr:i==="age_gradiant"&&(t=gr),ke=vn(e,[vr,t]),Oe={positionLocation:e.getAttribLocation(ke,"a_position"),textureLocation:e.getUniformLocation(ke,"u_texture"),worldSizeLocation:e.getUniformLocation(ke,"u_worldSize"),zoomLocation:e.getUniformLocation(ke,"u_zoom"),panLocation:e.getUniformLocation(ke,"u_pan"),iterationLocation:e.getUniformLocation(ke,"u_iteration")},Po=e.createBuffer(),!Po)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Po),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,r,0,r,0,0,a,r,a]),e.STATIC_DRAW)},wr=e=>{const{gl:o,cellsTex:n,worldDimensions:i,zoomLevel:a,pan:r,iteration:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(ke),o.bindBuffer(o.ARRAY_BUFFER,Po),o.enableVertexAttribArray(Oe.positionLocation),o.vertexAttribPointer(Oe.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(Oe.textureLocation,0),o.uniform2f(Oe.worldSizeLocation,i.width,i.height),o.uniform1f(Oe.zoomLocation,Math.max(a,1)),o.uniform2f(Oe.panLocation,r.x,r.y),o.uniform1f(Oe.iterationLocation,t),o.drawArrays(o.TRIANGLES,0,6)};let Te,Go;function Er(e){const{drawMode:o,initialDensity:n,screenDimensions:i,worldDimensions:a}=e;Te=cr(),mr(Te.canvas);const r=_n(Te,{configuration:"random",worldDimensions:a,initialDensity:n});Go=Tn(Te,{cellsTex:r.cellsTex,texDimensions:a}),gn(Te,{screenDimensions:i,mode:o})}function Ar(e){const{infiniteSource:o,iteration:n,mouseCoordinates:i,mouseMode:a,pause:r,pan:t,screenDimensions:u,worldDimensions:s,zoomLevel:c}=e;Go=xr({gl:Te,worldDimensions:s,screenDimensions:u,mouseCoordinates:i,mouseMode:a,infiniteSource:o,iteration:n,pause:r}),wr({gl:Te,cellsTex:Go,worldDimensions:s,zoomLevel:c,pan:t,iteration:n})}const Rr=e=>{const{worldDimensions:o,configuration:n,initialDensity:i}=e,a=_n(Te,{configuration:n,worldDimensions:o,initialDensity:i});Go=Tn(Te,{cellsTex:a.cellsTex,texDimensions:o})},Cr=e=>{gn(Te,{screenDimensions:e.screenDimensions,mode:e.drawMode})};function Dr(e){let o;return{c(){o=g("canvas"),this.h()},l(n){o=w(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),D(o).forEach(p),this.h()},h(){T(o,"id","canvas"),ao(o,"background-color","black"),T(o,"width",e[0].width),T(o,"height",e[0].height),T(o,"class","svelte-1b0ol19")},m(n,i){y(n,o,i)},p:O,i:O,o:O,d(n){n&&p(o)}}}function $r(e){const o={x:0,y:0};let n=0,i,a=0;const r={width:window.innerWidth-50,height:window.innerHeight-10},t={program:{pause:!0,infiniteSource:!1,drawMode:"age_gradiant",reloadProgram:()=>d()},simulation:{iteration:0,timeInSeconds:0,fps:0},grid:{configName:"random",initialDensity:.5,worldWidth:r.width,worldHeight:r.height,nbCells:(r.width*r.height).toString()},zoom:{x:0,y:0,xController:null,yController:null,level:1,previousLevel:1}},u=async()=>{const h=await Xo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.domElement.setAttribute("style","background-color: black");const f=l.addFolder("Program");f.open(),f.add(t.program,"pause").name("Pause").listen(),f.add(t.program,"infiniteSource").name("Infinite Source").listen(),f.add(t.program,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>Cr({screenDimensions:r,drawMode:t.program.drawMode})),f.add(t.program,"reloadProgram").name("Reload program");const v=l.addFolder("Simulation");v.open(),v.add(t.simulation,"timeInSeconds").name("Time (s)").listen(),v.add(t.simulation,"iteration").name("Iteration").listen(),v.add(t.simulation,"fps").listen();const x=l.addFolder("Grid");x.open(),x.add(t.grid,"configName",{Random:"random",Empty:"empty","131c31 Climber":"climber131c31","Big Glider":"bigglider",Candelabra:"candelabra","E-heptomino":"eheptomino","Garden of Eden 5x45":"gardenofeden5x45",Glider:"glider","Glider by the dozen":"glidersbythedozen","Glider loop":"gliderLoop",Laputa:"laputa"}).name("Configuration").onFinishChange(()=>_(t.grid.configName)),x.add(t.grid,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>_("random")),x.add(t.grid,"worldWidth",1,r.width,1).name("World width").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),x.add(t.grid,"worldHeight",1,r.height,1).name("World height").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),x.add(t.grid,"nbCells").name("Cells count").listen();const C=l.addFolder("Zoom");C.open(),C.add(t.zoom,"level",1,10).name("Level").onChange(function(I){const k=I-t.zoom.previousLevel;if(!t.zoom.xController||!t.zoom.yController||k===0)return;const H=1-1/t.zoom.previousLevel,$=1-1/I;t.zoom.xController.max($),t.zoom.xController.min(0),t.zoom.yController.max($),t.zoom.yController.min(0);const P={x:t.zoom.x/H,y:t.zoom.y/H};t.zoom.x=$*P.x||$/2,t.zoom.y=$*P.y||$/2,t.zoom.previousLevel=I}),t.zoom.xController=C.add(t.zoom,"x",0,0,.01).name("X offset").listen(),t.zoom.yController=C.add(t.zoom,"y",0,0,.01).name("Y offset").listen()},s=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space"&&(t.program.pause=!t.program.pause,l.preventDefault()),l.code==="KeyR"){_("random");return}if(l.code==="KeyE"){_("empty");return}if(l.code==="KeyS"){t.program.infiniteSource=!t.program.infiniteSource;return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const f=h.getBoundingClientRect(),v=h.width/f.width,x=h.height/f.height,C={x:(l.clientX-f.left)*v,y:(l.clientY-f.top)*x};o.x=C.x/r.width,o.y=C.y/r.height}),setInterval(()=>{o.x<.1&&t.zoom.x>=.005&&(t.zoom.x-=.005),o.x>.9&&t.zoom.x<1-1/t.zoom.level&&(t.zoom.x+=.005),o.y<.1&&t.zoom.y>=.005&&(t.zoom.y-=.005),o.y>.9&&t.zoom.y<1-1/t.zoom.level&&(t.zoom.y+=.005)},50),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?n=1:l.button===2&&(n=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),n=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))};let c;const d=()=>{Er({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},screenDimensions:r,drawMode:t.program.drawMode}),cancelAnimationFrame(c),i=Date.now()/1e3,b()},b=()=>{const h=Date.now()/1e3,l=h-a;a=h,t.simulation.fps=1/l,t.program.pause||(t.simulation.timeInSeconds=h-i,t.simulation.iteration++),Ar({infiniteSource:t.program.infiniteSource,iteration:t.simulation.iteration,mouseCoordinates:o,mouseMode:n,pause:t.program.pause,pan:{x:t.zoom.x,y:t.zoom.y},screenDimensions:r,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},zoomLevel:t.zoom.level}),c=requestAnimationFrame(b)},_=h=>{t.simulation.iteration=0,t.simulation.timeInSeconds=0,Rr({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},configuration:h})};return uo(()=>{u(),s(),d()}),[r]}let Lr=class extends Ke{constructor(o){super(),qe(this,o,$r,Dr,Ze,{})}};const Sr=["VERTEX_SHADER","FRAGMENT_SHADER"];function yr(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return Fr(o),o}function Fr(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function wn(e,o,n,i){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function Vt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function En(e,o,n,i,a){const r=[];for(let u=0;u<o.length;++u){const s=Sr[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=zr(e,o[u],s,a);if(!c)throw"Can not create shader";r.push(c)}const t=Ir(e,r,n,i,a);if(!t)throw"Can not create program";return t}function zr(e,o,n,i){const a=i||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(r);return a(new Error("*** Error compiling shader '"+r+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(r),null}return r}function Ir(e,o,n,i,a){const r=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,i?i[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return r("Error in program linking:"+s),e.deleteProgram(t),null}return t}function Pr(e,o){o=o||1;const n=e.clientWidth*o|0,i=e.clientHeight*o|0;return e.width!==n||e.height!==i?(e.width=n,e.height=i,!0):!1}function An(e,o){const{worldDimensions:n,initialDensity:i,configuration:a}=o;let r=i;r>1&&(r=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"?u=u.map(c=>Math.random()<r?1:0):a!=="empty"&&(u=Mr({cells:u,insertPosition:{x:Math.floor(n.width/2),y:Math.floor(n.height/2)},worldDimensions:n,configurationName:a})),{cellsTex:wn(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const Mr=e=>{const{cells:o,insertPosition:n,worldDimensions:i,configurationName:a}=e,r=pn(a);if(i.width<r.width||i.height<r.height)throw new Error("World is too small for this configuration");if(n.x+r.width>i.width||n.y+r.height>i.height)throw new Error("Configuration can be imported at this point");for(let t=0;t<r.height;t++)for(let u=0;u<r.width;u++){const s=(n.y+t)*i.width+(n.x+u);o[s]=r.pattern[t][u]}return o},Ur=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Br=`precision highp float;

uniform sampler2D uInputTexture;
uniform vec2 uTextureSize;
uniform vec2 uMouseCoordinates;
uniform int uMouseMode; // 0 do nothing; 1 draw; 2 erase
uniform int uInfiniteSource; // 0 do nothing; 1 generate cells
uniform int uPause; // 1 Don't compute game of life rules but compute other decisions like source and mouse;
                    // 0 Also compute game of life rules
uniform float uIteration;

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

float getNextState(vec2 texcoord, vec4 cell) {
    float alive = cell.x;

    if (uPause == 1) {
        return alive;
    }

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

    if (alive == 1.0 && (aliveNeighbors == 2.0 || aliveNeighbors == 3.0)) {
        return 1.0;
    } else if (alive == 0.0 && aliveNeighbors == 3.0) {
        return 1.0;
    }
    return 0.0;
}

float getSourceDecision(vec2 texcoord, float currentDecision) {
    if (uPause == 1 || uInfiniteSource == 0 || distance(texcoord, vec2(0.5, 0.5)) > 0.02) {
        return currentDecision;
    }
    if (gold_noise(texcoord, 155790.0 + uIteration) < 0.05) {
        return 1.0;
    }
    return currentDecision;
}

float getMouseDecision(vec2 texcoord, float currentDecision) {
    if (uMouseMode == 0) {
        return currentDecision;
    }
    if (distance(texcoord, uMouseCoordinates) < 0.02) {
        if (uMouseMode == 1 && gold_noise(texcoord, 121234.0 + uIteration) < 0.1) {
            return 1.0;
        } else if (uMouseMode == 2) {
            return 0.0;
        }
    }
    return currentDecision;
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / uTextureSize;
    vec4 cell = texture2D(uInputTexture, texcoord);
    float alive = cell.x;
    float id = cell.y;
    float updatedAt = cell.z;

    // Each decision function needs the previous decision in case
    // the decision is to do nothing
    float golDecision = getNextState(texcoord, cell);
    float sourceDecision = getSourceDecision(texcoord, golDecision);
    float finalDecision = getMouseDecision(texcoord, sourceDecision);

    if (alive != finalDecision) {
        updatedAt = uIteration;
    }

    gl_FragColor = vec4(finalDecision, id, updatedAt, 0.0);
}
`;let pe,xe,st,Ro,tt,Yt,Kt,vo,Mo;const Rn=(e,o)=>{const{cellsTex:n,texDimensions:i}=o;return xe=En(e,[Ur,Br]),pe={uInputTextureLocation:e.getUniformLocation(xe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(xe,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(xe,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(xe,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(xe,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(xe,"uIteration"),uPauseLocation:e.getUniformLocation(xe,"uPause"),positionLocation:e.getAttribLocation(xe,"aPosition")},st=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,st),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Ro=n,tt=wn(e,null,i.width,i.height),Yt=Vt(e,Ro),Kt=Vt(e,tt),vo={fb:Yt,tex:Ro},Mo={fb:Kt,tex:tt},Ro},Nr=e=>{const{gl:o,worldDimensions:n,screenDimensions:i,mouseCoordinates:a,mouseMode:r,infiniteSource:t,iteration:u,pause:s}=e;o.bindFramebuffer(o.FRAMEBUFFER,Mo.fb),o.viewport(0,0,i.width,i.height),o.bindBuffer(o.ARRAY_BUFFER,st),o.enableVertexAttribArray(pe.positionLocation),o.vertexAttribPointer(pe.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,vo.tex),o.useProgram(xe),o.uniform1i(pe.uInputTextureLocation,0),o.uniform2f(pe.uTextureSizeLocation,n.width,n.height),o.uniform2f(pe.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(pe.uMouseModeLocation,r),o.uniform1i(pe.uInfiniteSourceLocation,t?1:0),o.uniform1f(pe.uIterationLocation,u),o.uniform1i(pe.uPauseLocation,s?1:0),o.drawArrays(o.TRIANGLES,0,6);{const c=vo;vo=Mo,Mo=c}return vo.tex},Gr=`precision mediump float;
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
`,Wr=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Xr=`precision mediump float;
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
    gl_FragColor = vec4(0.3, blue, 0.8, 1.0) * alive;
}

`,Or=`precision mediump float;
uniform sampler2D u_texture;
uniform vec2 u_worldSize;
uniform float u_zoom;
uniform vec2 u_pan;
uniform float u_iteration;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    vec4 cell = texture2D(u_texture, texCoord);
    float alive = cell.x;
    float updatedAt = cell.z;
    float blue = updatedAt / float(u_iteration);
    gl_FragColor = vec4(blue, 0.0, 1.0, 1.0) * alive;
}

`;let He,Ve,Uo;const Cn=(e,o)=>{const{screenDimensions:n,mode:i}=o,{height:a,width:r}=n;let t=Wr;if(i==="gradiant"?t=Xr:i==="age_gradiant"&&(t=Or),Ve=En(e,[Gr,t]),He={positionLocation:e.getAttribLocation(Ve,"a_position"),textureLocation:e.getUniformLocation(Ve,"u_texture"),worldSizeLocation:e.getUniformLocation(Ve,"u_worldSize"),zoomLocation:e.getUniformLocation(Ve,"u_zoom"),panLocation:e.getUniformLocation(Ve,"u_pan"),iterationLocation:e.getUniformLocation(Ve,"u_iteration")},Uo=e.createBuffer(),!Uo)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Uo),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,r,0,r,0,0,a,r,a]),e.STATIC_DRAW)},kr=e=>{const{gl:o,cellsTex:n,worldDimensions:i,zoomLevel:a,pan:r,iteration:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(Ve),o.bindBuffer(o.ARRAY_BUFFER,Uo),o.enableVertexAttribArray(He.positionLocation),o.vertexAttribPointer(He.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(He.textureLocation,0),o.uniform2f(He.worldSizeLocation,i.width,i.height),o.uniform1f(He.zoomLocation,Math.max(a,1)),o.uniform2f(He.panLocation,r.x,r.y),o.uniform1f(He.iterationLocation,t),o.drawArrays(o.TRIANGLES,0,6)};let ge,Wo;function Hr(e){const{drawMode:o,initialDensity:n,screenDimensions:i,worldDimensions:a}=e;ge=yr(),Pr(ge.canvas);const r=An(ge,{configuration:"random",worldDimensions:a,initialDensity:n});Wo=Rn(ge,{cellsTex:r.cellsTex,texDimensions:a}),Cn(ge,{screenDimensions:i,mode:o})}function Vr(e){const{infiniteSource:o,iteration:n,mouseCoordinates:i,mouseMode:a,pause:r,pan:t,screenDimensions:u,worldDimensions:s,zoomLevel:c}=e;Wo=Nr({gl:ge,worldDimensions:s,screenDimensions:u,mouseCoordinates:i,mouseMode:a,infiniteSource:o,iteration:n,pause:r}),kr({gl:ge,cellsTex:Wo,worldDimensions:s,zoomLevel:c,pan:t,iteration:n})}const Yr=e=>{const{worldDimensions:o,configuration:n,initialDensity:i}=e,a=An(ge,{configuration:n,worldDimensions:o,initialDensity:i});Wo=Rn(ge,{cellsTex:a.cellsTex,texDimensions:o})},Kr=e=>{Cn(ge,{screenDimensions:e.screenDimensions,mode:e.drawMode})};function qr(e){let o;return{c(){o=g("canvas"),this.h()},l(n){o=w(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),D(o).forEach(p),this.h()},h(){T(o,"id","canvas"),ao(o,"background-color","black"),T(o,"width",e[0].width),T(o,"height",e[0].height),T(o,"class","svelte-1b0ol19")},m(n,i){y(n,o,i)},p:O,i:O,o:O,d(n){n&&p(o)}}}function Zr(e){const o={x:0,y:0};let n=0,i,a=0;const r={width:window.innerWidth-50,height:window.innerHeight-10},t={program:{pause:!0,infiniteSource:!1,drawMode:"age_gradiant",reloadProgram:()=>d()},simulation:{iteration:0,timeInSeconds:0,fps:0},grid:{configName:"random",initialDensity:.5,worldWidth:r.width,worldHeight:r.height,nbCells:(r.width*r.height).toString()},zoom:{x:0,y:0,xController:null,yController:null,level:1,previousLevel:1}},u=async()=>{const h=await Xo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.domElement.setAttribute("style","background-color: black");const f=l.addFolder("Program");f.open(),f.add(t.program,"pause").name("Pause").listen(),f.add(t.program,"infiniteSource").name("Infinite Source").listen(),f.add(t.program,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>Kr({screenDimensions:r,drawMode:t.program.drawMode})),f.add(t.program,"reloadProgram").name("Reload program");const v=l.addFolder("Simulation");v.open(),v.add(t.simulation,"timeInSeconds").name("Time (s)").listen(),v.add(t.simulation,"iteration").name("Iteration").listen(),v.add(t.simulation,"fps").listen();const x=l.addFolder("Grid");x.open(),x.add(t.grid,"configName",{Random:"random",Empty:"empty","131c31 Climber":"climber131c31","Big Glider":"bigglider",Candelabra:"candelabra","E-heptomino":"eheptomino","Garden of Eden 5x45":"gardenofeden5x45",Glider:"glider","Glider by the dozen":"glidersbythedozen","Glider loop":"gliderLoop",Laputa:"laputa"}).name("Configuration").onFinishChange(()=>_(t.grid.configName)),x.add(t.grid,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>_("random")),x.add(t.grid,"worldWidth",1,r.width,1).name("World width").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),x.add(t.grid,"worldHeight",1,r.height,1).name("World height").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),x.add(t.grid,"nbCells").name("Cells count").listen();const C=l.addFolder("Zoom");C.open(),C.add(t.zoom,"level",1,10).name("Level").onChange(function(I){const k=I-t.zoom.previousLevel;if(!t.zoom.xController||!t.zoom.yController||k===0)return;const H=1-1/t.zoom.previousLevel,$=1-1/I;t.zoom.xController.max($),t.zoom.xController.min(0),t.zoom.yController.max($),t.zoom.yController.min(0);const P={x:t.zoom.x/H,y:t.zoom.y/H};t.zoom.x=$*P.x||$/2,t.zoom.y=$*P.y||$/2,t.zoom.previousLevel=I}),t.zoom.xController=C.add(t.zoom,"x",0,0,.01).name("X offset").listen(),t.zoom.yController=C.add(t.zoom,"y",0,0,.01).name("Y offset").listen()},s=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space"&&(t.program.pause=!t.program.pause,l.preventDefault()),l.code==="KeyR"){_("random");return}if(l.code==="KeyE"){_("empty");return}if(l.code==="KeyS"){t.program.infiniteSource=!t.program.infiniteSource;return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const f=h.getBoundingClientRect(),v=h.width/f.width,x=h.height/f.height,C={x:(l.clientX-f.left)*v,y:(l.clientY-f.top)*x};o.x=C.x/r.width,o.y=C.y/r.height}),setInterval(()=>{o.x<.1&&t.zoom.x>=.005&&(t.zoom.x-=.005),o.x>.9&&t.zoom.x<1-1/t.zoom.level&&(t.zoom.x+=.005),o.y<.1&&t.zoom.y>=.005&&(t.zoom.y-=.005),o.y>.9&&t.zoom.y<1-1/t.zoom.level&&(t.zoom.y+=.005)},50),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?n=1:l.button===2&&(n=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),n=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))};let c;const d=()=>{Hr({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},screenDimensions:r,drawMode:t.program.drawMode}),cancelAnimationFrame(c),i=Date.now()/1e3,b()},b=()=>{const h=Date.now()/1e3,l=h-a;a=h,t.simulation.fps=1/l,t.program.pause||(t.simulation.timeInSeconds=h-i,t.simulation.iteration++),Vr({infiniteSource:t.program.infiniteSource,iteration:t.simulation.iteration,mouseCoordinates:o,mouseMode:n,pause:t.program.pause,pan:{x:t.zoom.x,y:t.zoom.y},screenDimensions:r,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},zoomLevel:t.zoom.level}),c=requestAnimationFrame(b)},_=h=>{t.simulation.iteration=0,t.simulation.timeInSeconds=0,Yr({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},configuration:h})};return uo(()=>{u(),s(),d()}),[r]}class jr extends Ke{constructor(o){super(),qe(this,o,Zr,qr,Ze,{})}}function qt(e,o,n){const i=e.slice();return i[1]=o[n],i}function Zt(e,o,n){const i=e.slice();return i[1]=o[n],i}function Jr(e){let o;return{c(){o=A("About")},l(n){o=R(n,"About")},m(n,i){y(n,o,i)},d(n){n&&p(o)}}}function Qr(e){let o=e[1].title+"",n;return{c(){n=A(o)},l(i){n=R(i,o)},m(i,a){y(i,n,a)},p:O,d(i){i&&p(n)}}}function jt(e){let o,n;return o=new nn({props:{$$slots:{default:[Qr]},$$scope:{ctx:e}}}),{c(){Se(o.$$.fragment)},l(i){Ye(o.$$.fragment,i)},m(i,a){ye(o,i,a),n=!0},p(i,a){const r={};a&64&&(r.$$scope={dirty:a,ctx:i}),o.$set(r)},i(i){n||(q(o.$$.fragment,i),n=!0)},o(i){Q(o.$$.fragment,i),n=!1},d(i){Fe(o,i)}}}function ea(e){let o,n,i,a;o=new nn({props:{$$slots:{default:[Jr]},$$scope:{ctx:e}}});let r=e[0],t=[];for(let s=0;s<r.length;s+=1)t[s]=jt(Zt(e,r,s));const u=s=>Q(t[s],1,1,()=>{t[s]=null});return{c(){Se(o.$$.fragment),n=L();for(let s=0;s<t.length;s+=1)t[s].c();i=Bo()},l(s){Ye(o.$$.fragment,s),n=S(s);for(let c=0;c<t.length;c+=1)t[c].l(s);i=Bo()},m(s,c){ye(o,s,c),y(s,n,c);for(let d=0;d<t.length;d+=1)t[d].m(s,c);y(s,i,c),a=!0},p(s,c){const d={};if(c&64&&(d.$$scope={dirty:c,ctx:s}),o.$set(d),c&1){r=s[0];let b;for(b=0;b<r.length;b+=1){const _=Zt(s,r,b);t[b]?(t[b].p(_,c),q(t[b],1)):(t[b]=jt(_),t[b].c(),q(t[b],1),t[b].m(i.parentNode,i))}for(ct(),b=r.length;b<t.length;b+=1)u(b);lt()}},i(s){if(!a){q(o.$$.fragment,s);for(let c=0;c<r.length;c+=1)q(t[c]);a=!0}},o(s){Q(o.$$.fragment,s),t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)Q(t[c]);a=!1},d(s){Fe(o,s),s&&p(n),on(t,s),s&&p(i)}}}function oa(e){let o,n,i,a,r,t,u;return{c(){o=g("p"),n=A("Experiments running Conway's Game of Life in WebGL shaders."),i=L(),a=g("p"),r=A("List of patterns available "),t=g("a"),u=A("in the wiki"),this.h()},l(s){o=w(s,"P",{});var c=D(o);n=R(c,"Experiments running Conway's Game of Life in WebGL shaders."),c.forEach(p),i=S(s),a=w(s,"P",{});var d=D(a);r=R(d,"List of patterns available "),t=w(d,"A",{target:!0,href:!0});var b=D(t);u=R(b,"in the wiki"),b.forEach(p),d.forEach(p),this.h()},h(){T(t,"target","none"),T(t,"href","https://conwaylife.com/wiki/Category:Patterns")},m(s,c){y(s,o,c),m(o,n),y(s,i,c),y(s,a,c),m(a,r),m(a,t),m(t,u)},p:O,d(s){s&&p(o),s&&p(i),s&&p(a)}}}function ta(e){let o,n,i;var a=e[1].component;function r(t){return{}}return a&&(o=wt(a,r())),{c(){o&&Se(o.$$.fragment),n=L()},l(t){o&&Ye(o.$$.fragment,t),n=S(t)},m(t,u){o&&ye(o,t,u),y(t,n,u),i=!0},p(t,u){if(a!==(a=t[1].component)){if(o){ct();const s=o;Q(s.$$.fragment,1,0,()=>{Fe(s,1)}),lt()}a?(o=wt(a,r()),Se(o.$$.fragment),q(o.$$.fragment,1),ye(o,n.parentNode,n)):o=null}},i(t){i||(o&&q(o.$$.fragment,t),i=!0)},o(t){o&&Q(o.$$.fragment,t),i=!1},d(t){o&&Fe(o,t),t&&p(n)}}}function Jt(e){let o,n;return o=new tn({props:{$$slots:{default:[ta]},$$scope:{ctx:e}}}),{c(){Se(o.$$.fragment)},l(i){Ye(o.$$.fragment,i)},m(i,a){ye(o,i,a),n=!0},p(i,a){const r={};a&64&&(r.$$scope={dirty:a,ctx:i}),o.$set(r)},i(i){n||(q(o.$$.fragment,i),n=!0)},o(i){Q(o.$$.fragment,i),n=!1},d(i){Fe(o,i)}}}function na(e){let o,n,i,a,r,t;o=new $n({props:{$$slots:{default:[ea]},$$scope:{ctx:e}}}),i=new tn({props:{$$slots:{default:[oa]},$$scope:{ctx:e}}});let u=e[0],s=[];for(let d=0;d<u.length;d+=1)s[d]=Jt(qt(e,u,d));const c=d=>Q(s[d],1,1,()=>{s[d]=null});return{c(){Se(o.$$.fragment),n=L(),Se(i.$$.fragment),a=L();for(let d=0;d<s.length;d+=1)s[d].c();r=Bo()},l(d){Ye(o.$$.fragment,d),n=S(d),Ye(i.$$.fragment,d),a=S(d);for(let b=0;b<s.length;b+=1)s[b].l(d);r=Bo()},m(d,b){ye(o,d,b),y(d,n,b),ye(i,d,b),y(d,a,b);for(let _=0;_<s.length;_+=1)s[_].m(d,b);y(d,r,b),t=!0},p(d,b){const _={};b&64&&(_.$$scope={dirty:b,ctx:d}),o.$set(_);const h={};if(b&64&&(h.$$scope={dirty:b,ctx:d}),i.$set(h),b&1){u=d[0];let l;for(l=0;l<u.length;l+=1){const f=qt(d,u,l);s[l]?(s[l].p(f,b),q(s[l],1)):(s[l]=Jt(f),s[l].c(),q(s[l],1),s[l].m(r.parentNode,r))}for(ct(),l=u.length;l<s.length;l+=1)c(l);lt()}},i(d){if(!t){q(o.$$.fragment,d),q(i.$$.fragment,d);for(let b=0;b<u.length;b+=1)q(s[b]);t=!0}},o(d){Q(o.$$.fragment,d),Q(i.$$.fragment,d),s=s.filter(Boolean);for(let b=0;b<s.length;b+=1)Q(s[b]);t=!1},d(d){Fe(o,d),d&&p(n),Fe(i,d),d&&p(a),on(s,d),d&&p(r)}}}function ia(e){let o,n,i;return n=new Dn({props:{$$slots:{default:[na]},$$scope:{ctx:e}}}),{c(){o=g("div"),Se(n.$$.fragment)},l(a){o=w(a,"DIV",{});var r=D(o);Ye(n.$$.fragment,r),r.forEach(p)},m(a,r){y(a,o,r),ye(n,o,null),i=!0},p(a,[r]){const t={};r&64&&(t.$$scope={dirty:r,ctx:a}),n.$set(t)},i(a){i||(q(n.$$.fragment,a),i=!0)},o(a){Q(n.$$.fragment,a),i=!1},d(a){a&&p(o),Fe(n)}}}function ra(e){return[[{title:"V6",component:jr},{title:"V5",component:Lr},{title:"V4",component:Yi},{title:"V3",component:Ci},{title:"V2",component:ci},{title:"V1",component:Hn}]]}class aa extends Ke{constructor(o){super(),qe(this,o,ra,ia,Ze,{})}}function ua(e){let o,n;return o=new aa({}),{c(){Se(o.$$.fragment)},l(i){Ye(o.$$.fragment,i)},m(i,a){ye(o,i,a),n=!0},p:O,i(i){n||(q(o.$$.fragment,i),n=!0)},o(i){Q(o.$$.fragment,i),n=!1},d(i){Fe(o,i)}}}class pa extends Ke{constructor(o){super(),qe(this,o,null,ua,Ze,{})}}export{pa as default};
