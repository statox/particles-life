import{S as Ye,i as Ke,s as qe,k as T,a as S,q as w,l as E,m as R,h as p,c as C,r as g,n as L,p as Tt,b as y,D as d,O as he,K as $,R as wo,u as Ae,P as xe,B as J,M as go,o as Et,w as be,x as Me,y as Re,f as V,t as j,z as Le,e as _t,g as Mt,d as Bt,L as Ao,v as Zt}from"../../../chunks/index-46ced799.js";import{T as Bo,a as No,b as bo,c as Ro}from"../../../chunks/TabPanel-3f95d051.js";import{_ as Lo}from"../../../chunks/preload-helper-41c905a7.js";const Wo=["VERTEX_SHADER","FRAGMENT_SHADER"];function Go(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Xo(t),t}function Xo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Do(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function jt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function So(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Wo[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Oo(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=ko(e,a,o,r,i);if(!n)throw"Can not create program";return n}function Oo(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function ko(e,t,o,r,i){const a=i||console.log,n=e.createProgram();if(!n)throw"Could not create program";if(t.forEach(function(s){e.attachShader(n,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(n,r?r[c]:c,s)}),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){const s=e.getProgramInfoLog(n);return a("Error in program linking:"+s),e.deleteProgram(n),null}return n}function Ho(e,t){t=t||1;const o=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==o||e.height!==r?(e.width=o,e.height=r,!0):!1}const Vo=`attribute vec2 a_position;
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

`,Yo=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let Ze,je,ct;const Ko=(e,t)=>{const{screenDimensions:o}=t,{height:r,width:i}=o;if(je=So(e,[Vo,Yo]),Ze={positionLocation:e.getAttribLocation(je,"a_position"),textureLocation:e.getUniformLocation(je,"u_texture"),worldSizeLocation:e.getUniformLocation(je,"u_worldSize")},ct=e.createBuffer(),!ct)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ct),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,i,0,i,0,0,r,i,r]),e.STATIC_DRAW)},qo=e=>{const{gl:t,cellsTex:o,worldDimensions:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(je),t.bindBuffer(t.ARRAY_BUFFER,ct),t.enableVertexAttribArray(Ze.positionLocation),t.vertexAttribPointer(Ze.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ze.textureLocation,0),t.uniform2f(Ze.worldSizeLocation,r.width,r.height),t.drawArrays(t.TRIANGLES,0,6)};function Zo(e,t,o){function r(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:i,disableFullscreen:r}}function Jt(e,t){const{worldDimensions:o}=t,r=o.width*o.height,i=new Array(r).fill(0).map(n=>Math.random()<.5?1:0);return{cellsTex:Do(e,new Float32Array(i.map(n=>[n,0,0,0]).flat()),o.width,o.height)}}const jo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Jo=`precision highp float;

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
`;let Je,Qe,zt,it,Ct,Qt,eo,et,lt;const to=(e,t)=>{const{cellsTex:o,texDimensions:r}=t;return Qe=So(e,[jo,Jo]),Je={uInputTextureLocation:e.getUniformLocation(Qe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Qe,"uTextureSize"),positionLocation:e.getAttribLocation(Qe,"aPosition")},zt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,zt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),it=o,Ct=Do(e,null,r.width,r.height),Qt=jt(e,it),eo=jt(e,Ct),et={fb:Qt,tex:it},lt={fb:eo,tex:Ct},it},Qo=e=>{const{gl:t,worldDimensions:o,screenDimensions:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,lt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,zt),t.enableVertexAttribArray(Je.positionLocation),t.vertexAttribPointer(Je.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,et.tex),t.useProgram(Qe),t.uniform1i(Je.uInputTextureLocation,0),t.uniform2f(Je.uTextureSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6);{const i=et;et=lt,lt=i}return et.tex};function en(e){let t,o,r,i,a=e[1]?"Play":"Pause",n,u,s,c,l,m,A=e[0].width+"",x,f,h=e[0].height+"",v,b,z=e[0].width*e[0].height+"",X,Y,Q,B,G,O,ee,oe,ne,K,q,ae,N,_,P,_e,ve,U,Be,ue,se,Ne,k,H,Te;return{c(){t=T("canvas"),o=S(),r=T("div"),i=T("button"),n=w(a),u=w(" (Space)"),s=S(),c=T("div"),l=T("span"),m=w("World "),x=w(A),f=w(" x "),v=w(h),b=w(" ("),X=w(z),Y=w(" cells)"),Q=S(),B=T("button"),G=w("Reload program"),O=S(),ee=T("button"),oe=w("Fullscreen (f)"),ne=S(),K=T("div"),q=T("button"),ae=w("Reset world (r)"),N=S(),_=T("span"),P=T("label"),_e=w("World: width"),ve=S(),U=T("input"),Be=S(),ue=T("label"),se=w("height"),Ne=S(),k=T("input"),this.h()},l(D){t=E(D,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(t).forEach(p),o=C(D),r=E(D,"DIV",{});var M=R(r);i=E(M,"BUTTON",{});var ce=R(i);n=g(ce,a),u=g(ce," (Space)"),ce.forEach(p),M.forEach(p),s=C(D),c=E(D,"DIV",{});var le=R(c);l=E(le,"SPAN",{});var te=R(l);m=g(te,"World "),x=g(te,A),f=g(te," x "),v=g(te,h),b=g(te," ("),X=g(te,z),Y=g(te," cells)"),te.forEach(p),Q=C(le),B=E(le,"BUTTON",{});var de=R(B);G=g(de,"Reload program"),de.forEach(p),O=C(le),ee=E(le,"BUTTON",{});var Ee=R(ee);oe=g(Ee,"Fullscreen (f)"),Ee.forEach(p),le.forEach(p),ne=C(D),K=E(D,"DIV",{});var De=R(K);q=E(De,"BUTTON",{});var Xe=R(q);ae=g(Xe,"Reset world (r)"),Xe.forEach(p),N=C(De),_=E(De,"SPAN",{});var W=R(_);P=E(W,"LABEL",{for:!0});var Oe=R(P);_e=g(Oe,"World: width"),Oe.forEach(p),ve=C(W),U=E(W,"INPUT",{id:!0,type:!0,min:!0}),Be=C(W),ue=E(W,"LABEL",{for:!0});var Z=R(ue);se=g(Z,"height"),Z.forEach(p),Ne=C(W),k=E(W,"INPUT",{id:!0,type:!0,min:!0}),W.forEach(p),De.forEach(p),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[3].width),L(t,"height",e[3].height),L(P,"for","worldWidth"),L(U,"id","worldWidth"),L(U,"type","number"),L(U,"min",0),L(ue,"for","worldHeight"),L(k,"id","worldHeight"),L(k,"type","number"),L(k,"min",0)},m(D,M){y(D,t,M),y(D,o,M),y(D,r,M),d(r,i),d(i,n),d(i,u),y(D,s,M),y(D,c,M),d(c,l),d(l,m),d(l,x),d(l,f),d(l,v),d(l,b),d(l,X),d(l,Y),d(c,Q),d(c,B),d(B,G),d(c,O),d(c,ee),d(ee,oe),y(D,ne,M),y(D,K,M),d(K,q),d(q,ae),d(K,N),d(K,_),d(_,P),d(P,_e),d(_,ve),d(_,U),he(U,e[0].width),d(_,Be),d(_,ue),d(ue,se),d(_,Ne),d(_,k),he(k,e[0].height),H||(Te=[$(i,"click",e[6]),$(B,"click",e[7]),$(ee,"click",function(){wo(e[2])&&e[2].apply(this,arguments)}),$(q,"click",e[5]),$(U,"change",e[5]),$(U,"input",e[8]),$(k,"change",e[5]),$(k,"input",e[9])],H=!0)},p(D,[M]){e=D,M&2&&a!==(a=e[1]?"Play":"Pause")&&Ae(n,a),M&1&&A!==(A=e[0].width+"")&&Ae(x,A),M&1&&h!==(h=e[0].height+"")&&Ae(v,h),M&1&&z!==(z=e[0].width*e[0].height+"")&&Ae(X,z),M&1&&xe(U.value)!==e[0].width&&he(U,e[0].width),M&1&&xe(k.value)!==e[0].height&&he(k,e[0].height)},i:J,o:J,d(D){D&&p(t),D&&p(o),D&&p(r),D&&p(s),D&&p(c),D&&p(ne),D&&p(K),H=!1,go(Te)}}}function tn(e,t,o){const r={width:1600,height:900},i={width:1600,height:900};let a=!0,n,u,s;function c(){cancelAnimationFrame(s),u=Go(),Ho(u.canvas);const v=Jt(u,{worldDimensions:i});n=to(u,{cellsTex:v.cellsTex,texDimensions:i}),Ko(u,{screenDimensions:r});function b(){return a||(n=Qo({gl:u,worldDimensions:i,screenDimensions:r})),qo({gl:u,cellsTex:n,worldDimensions:i}),s=requestAnimationFrame(b)}s=requestAnimationFrame(b)}let l;Et(()=>{c(),o(2,l=Zo(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",v=>{if(v.code==="Space"&&(o(1,a=!a),v.preventDefault()),v.code==="KeyF"){l();return}if(v.code==="KeyR"){m();return}})});const m=()=>{o(0,i.width=Math.min(i.width,r.width),i),o(0,i.height=Math.min(i.height,r.height),i);const v=Jt(u,{worldDimensions:i});n=to(u,{cellsTex:v.cellsTex,texDimensions:i})},A=()=>o(1,a=!a),x=()=>c();function f(){i.width=xe(this.value),o(0,i)}function h(){i.height=xe(this.value),o(0,i)}return[i,a,l,r,c,m,A,x,f,h]}let on=class extends Ye{constructor(t){super(),Ke(this,t,tn,en,qe,{})}};const nn=["VERTEX_SHADER","FRAGMENT_SHADER"];function rn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return an(t),t}function an(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Co(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function oo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Fo(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=nn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=un(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=sn(e,a,o,r,i);if(!n)throw"Can not create program";return n}function un(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function sn(e,t,o,r,i){const a=i||console.log,n=e.createProgram();if(!n)throw"Could not create program";if(t.forEach(function(s){e.attachShader(n,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(n,r?r[c]:c,s)}),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){const s=e.getProgramInfoLog(n);return a("Error in program linking:"+s),e.deleteProgram(n),null}return n}function cn(e,t){t=t||1;const o=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==o||e.height!==r?(e.width=o,e.height=r,!0):!1}const ln=`precision mediump float;
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
`,dn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,fn=`precision mediump float;
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

`;let We,Ge,dt;const mn=(e,t)=>{const{screenDimensions:o,mode:r}=t,{height:i,width:a}=o;let n=dn;if(r==="gradiant"&&(n=fn),Ge=Fo(e,[ln,n]),We={positionLocation:e.getAttribLocation(Ge,"a_position"),textureLocation:e.getUniformLocation(Ge,"u_texture"),worldSizeLocation:e.getUniformLocation(Ge,"u_worldSize"),zoomLocation:e.getUniformLocation(Ge,"u_zoom"),panLocation:e.getUniformLocation(Ge,"u_pan")},dt=e.createBuffer(),!dt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,dt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},hn=e=>{const{gl:t,cellsTex:o,worldDimensions:r,zoomLevel:i,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ge),t.bindBuffer(t.ARRAY_BUFFER,dt),t.enableVertexAttribArray(We.positionLocation),t.vertexAttribPointer(We.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(We.textureLocation,0),t.uniform2f(We.worldSizeLocation,r.width,r.height),t.uniform1f(We.zoomLocation,Math.max(i,1)),t.uniform2f(We.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function pn(e,t,o){function r(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:i,disableFullscreen:r}}function no(e,t){const{worldDimensions:o,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const n=o.width*o.height;let u=new Array(n).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:Co(e,new Float32Array(u.map((c,l)=>[c,l,0,0]).flat()),o.width,o.height)}}const xn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,_n=`precision highp float;

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
`;let ye,Ie,Pt,at,Ft,ro,io,tt,ft;const ao=(e,t)=>{const{cellsTex:o,texDimensions:r}=t;return Ie=Fo(e,[xn,_n]),ye={uInputTextureLocation:e.getUniformLocation(Ie,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ie,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Ie,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Ie,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Ie,"uInfiniteSource"),positionLocation:e.getAttribLocation(Ie,"aPosition")},Pt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Pt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),at=o,Ft=Co(e,null,r.width,r.height),ro=oo(e,at),io=oo(e,Ft),tt={fb:ro,tex:at},ft={fb:io,tex:Ft},at},vn=e=>{const{gl:t,worldDimensions:o,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,ft.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,Pt),t.enableVertexAttribArray(ye.positionLocation),t.vertexAttribPointer(ye.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,tt.tex),t.useProgram(Ie),t.uniform1i(ye.uInputTextureLocation,0),t.uniform2f(ye.uTextureSizeLocation,o.width,o.height),t.uniform2f(ye.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(ye.uMouseModeLocation,a),t.uniform1i(ye.uInfiniteSourceLocation,n?1:0),t.drawArrays(t.TRIANGLES,0,6);{const u=tt;tt=ft,ft=u}return tt.tex};function Tn(e){let t,o,r,i,a=e[5]?"Play":"Pause",n,u,s,c,l=e[2]?"Disable":"Enable",m,A,x,f,h,v,b,z,X,Y,Q,B,G,O,ee,oe=e[0].width+"",ne,K,q=e[0].height+"",ae,N,_=e[0].width*e[0].height+"",P,_e,ve,U,Be,ue,se,Ne,k,H,Te,D,M,ce,le,te,de,Ee,De,Xe,W,Oe,Z,ke,wt,gt,re,At,He,bt,Rt,ie,Lt,Nt;return{c(){t=T("canvas"),o=S(),r=T("div"),i=T("button"),n=w(a),u=w(" (Space)"),s=S(),c=T("button"),m=w(l),A=w(" constant cells generation (E)"),x=S(),f=T("button"),h=w("Zoom in (I)"),v=S(),b=T("button"),z=w("Zoom out (O)"),X=S(),Y=T("button"),Q=w("Reset zoom (Z)"),B=S(),G=T("div"),O=T("span"),ee=w("World "),ne=w(oe),K=w(" x "),ae=w(q),N=w(" ("),P=w(_),_e=w(" cells)"),ve=S(),U=T("button"),Be=w("Reload program"),ue=S(),se=T("button"),Ne=w("Fullscreen (f)"),k=S(),H=T("div"),Te=T("button"),D=w("Reset world (R)"),M=S(),ce=T("button"),le=w("Empty world (E)"),te=S(),de=T("span"),Ee=T("label"),De=w("Initial density [0-1]"),Xe=S(),W=T("input"),Oe=S(),Z=T("span"),ke=T("label"),wt=w("World: width"),gt=S(),re=T("input"),At=S(),He=T("label"),bt=w("height"),Rt=S(),ie=T("input"),this.h()},l(I){t=E(I,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(t).forEach(p),o=C(I),r=E(I,"DIV",{});var F=R(r);i=E(F,"BUTTON",{});var Dt=R(i);n=g(Dt,a),u=g(Dt," (Space)"),Dt.forEach(p),s=C(F),c=E(F,"BUTTON",{});var St=R(c);m=g(St,l),A=g(St," constant cells generation (E)"),St.forEach(p),x=C(F),f=E(F,"BUTTON",{});var Wt=R(f);h=g(Wt,"Zoom in (I)"),Wt.forEach(p),v=C(F),b=E(F,"BUTTON",{});var Gt=R(b);z=g(Gt,"Zoom out (O)"),Gt.forEach(p),X=C(F),Y=E(F,"BUTTON",{});var Xt=R(Y);Q=g(Xt,"Reset zoom (Z)"),Xt.forEach(p),F.forEach(p),B=C(I),G=E(I,"DIV",{});var Ve=R(G);O=E(Ve,"SPAN",{});var Se=R(O);ee=g(Se,"World "),ne=g(Se,oe),K=g(Se," x "),ae=g(Se,q),N=g(Se," ("),P=g(Se,_),_e=g(Se," cells)"),Se.forEach(p),ve=C(Ve),U=E(Ve,"BUTTON",{});var Ot=R(U);Be=g(Ot,"Reload program"),Ot.forEach(p),ue=C(Ve),se=E(Ve,"BUTTON",{});var kt=R(se);Ne=g(kt,"Fullscreen (f)"),kt.forEach(p),Ve.forEach(p),k=C(I),H=E(I,"DIV",{});var Ce=R(H);Te=E(Ce,"BUTTON",{});var Ht=R(Te);D=g(Ht,"Reset world (R)"),Ht.forEach(p),M=C(Ce),ce=E(Ce,"BUTTON",{});var Vt=R(ce);le=g(Vt,"Empty world (E)"),Vt.forEach(p),te=C(Ce),de=E(Ce,"SPAN",{});var rt=R(de);Ee=E(rt,"LABEL",{for:!0});var Yt=R(Ee);De=g(Yt,"Initial density [0-1]"),Yt.forEach(p),Xe=C(rt),W=E(rt,"INPUT",{id:!0,type:!0,min:!0,max:!0}),rt.forEach(p),Oe=C(Ce),Z=E(Ce,"SPAN",{});var Fe=R(Z);ke=E(Fe,"LABEL",{for:!0});var Kt=R(ke);wt=g(Kt,"World: width"),Kt.forEach(p),gt=C(Fe),re=E(Fe,"INPUT",{id:!0,type:!0,min:!0}),At=C(Fe),He=E(Fe,"LABEL",{for:!0});var qt=R(He);bt=g(qt,"height"),qt.forEach(p),Rt=C(Fe),ie=E(Fe,"INPUT",{id:!0,type:!0,min:!0}),Fe.forEach(p),Ce.forEach(p),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[7].width),L(t,"height",e[7].height),L(Ee,"for","initialDensity"),L(W,"id","initialDensity"),L(W,"type","number"),L(W,"min",0),L(W,"max",1),L(ke,"for","worldWidth"),L(re,"id","worldWidth"),L(re,"type","number"),L(re,"min",0),L(He,"for","worldHeight"),L(ie,"id","worldHeight"),L(ie,"type","number"),L(ie,"min",0)},m(I,F){y(I,t,F),y(I,o,F),y(I,r,F),d(r,i),d(i,n),d(i,u),d(r,s),d(r,c),d(c,m),d(c,A),d(r,x),d(r,f),d(f,h),d(r,v),d(r,b),d(b,z),d(r,X),d(r,Y),d(Y,Q),y(I,B,F),y(I,G,F),d(G,O),d(O,ee),d(O,ne),d(O,K),d(O,ae),d(O,N),d(O,P),d(O,_e),d(G,ve),d(G,U),d(U,Be),d(G,ue),d(G,se),d(se,Ne),y(I,k,F),y(I,H,F),d(H,Te),d(Te,D),d(H,M),d(H,ce),d(ce,le),d(H,te),d(H,de),d(de,Ee),d(Ee,De),d(de,Xe),d(de,W),he(W,e[4]),d(H,Oe),d(H,Z),d(Z,ke),d(ke,wt),d(Z,gt),d(Z,re),he(re,e[0].width),d(Z,At),d(Z,He),d(He,bt),d(Z,Rt),d(Z,ie),he(ie,e[0].height),Lt||(Nt=[$(i,"click",e[10]),$(c,"click",e[11]),$(f,"click",e[12]),$(b,"click",e[13]),$(Y,"click",e[14]),$(U,"click",e[15]),$(se,"click",function(){wo(e[6])&&e[6].apply(this,arguments)}),$(Te,"click",e[16]),$(ce,"click",e[17]),$(W,"input",e[18]),$(re,"change",e[19]),$(re,"input",e[20]),$(ie,"change",e[21]),$(ie,"input",e[22])],Lt=!0)},p(I,[F]){e=I,F&32&&a!==(a=e[5]?"Play":"Pause")&&Ae(n,a),F&4&&l!==(l=e[2]?"Disable":"Enable")&&Ae(m,l),F&1&&oe!==(oe=e[0].width+"")&&Ae(ne,oe),F&1&&q!==(q=e[0].height+"")&&Ae(ae,q),F&1&&_!==(_=e[0].width*e[0].height+"")&&Ae(P,_),F&16&&xe(W.value)!==e[4]&&he(W,e[4]),F&1&&xe(re.value)!==e[0].width&&he(re,e[0].width),F&1&&xe(ie.value)!==e[0].height&&he(ie,e[0].height)},i:J,o:J,d(I){I&&p(t),I&&p(o),I&&p(r),I&&p(B),I&&p(G),I&&p(k),I&&p(H),Lt=!1,go(Nt)}}}function En(e,t,o){const r={width:1200,height:900},i={width:1200,height:900},a={x:-100,y:-100},n={x:0,y:0};let u=0,s=!0,c=1,l=.05,m=!0,A,x,f;function h(){cancelAnimationFrame(f),x=rn(),cn(x.canvas);const N=no(x,{mode:"random",worldDimensions:i,initialDensity:l});A=ao(x,{cellsTex:N.cellsTex,texDimensions:i}),mn(x,{screenDimensions:r,mode:"gradiant"});function _(){m||(A=vn({gl:x,worldDimensions:i,screenDimensions:r,mouseCoordinates:a,mouseMode:u,infiniteSource:s}));const P=.005;return a.x<.2&&n.x>=P&&o(1,n.x-=P,n),a.x>.8&&n.x<1-1/c&&o(1,n.x+=P,n),a.y<.2&&n.y>=P&&o(1,n.y-=P,n),a.y>.8&&n.y<1-1/c&&o(1,n.y+=P,n),hn({gl:x,cellsTex:A,worldDimensions:i,zoomLevel:c,pan:n}),f=requestAnimationFrame(_)}f=requestAnimationFrame(_)}let v;Et(()=>{h(),o(6,v=pn(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",_=>{if(_.code==="Space"&&(o(5,m=!m),_.preventDefault()),_.code==="KeyF"){v();return}if(_.code==="KeyR"){b("random");return}if(_.code==="KeyE"){b("zero");return}if(_.code==="KeyI"){o(3,c++,c);return}if(_.code==="KeyS"){o(2,s=!s);return}if(_.code==="KeyO"){o(3,c=Math.max(c-1,1)),c===1&&(o(1,n.x=0,n),o(1,n.y=0,n));return}if(_.code==="KeyZ"){o(3,c=1),o(1,n.x=0,n),o(1,n.y=0,n);return}});const N=document.getElementById("canvas");if(!N)throw new Error("Canvas unavailable");N.addEventListener("mousemove",_=>{const P=N.getBoundingClientRect(),_e=N.width/P.width,ve=N.height/P.height,U={x:(_.clientX-P.left)*_e,y:(_.clientY-P.top)*ve};a.x=U.x/r.width,a.y=U.y/r.height}),N.addEventListener("mousedown",_=>{_.preventDefault(),_.button===0?u=1:_.button===2&&(u=2)}),N.addEventListener("mouseup",_=>{_.preventDefault(),u=0}),N.addEventListener("contextmenu",_=>(_.preventDefault(),!1))});const b=N=>{o(0,i.width=Math.min(i.width,r.width),i),o(0,i.height=Math.min(i.height,r.height),i);const _=no(x,{mode:N,worldDimensions:i,initialDensity:l});A=ao(x,{cellsTex:_.cellsTex,texDimensions:i})},z=()=>o(5,m=!m),X=()=>o(2,s=!s),Y=()=>o(3,c+=1),Q=()=>{o(3,c=Math.max(c-1,1)),c===1&&(o(1,n.x=0,n),o(1,n.y=0,n))},B=()=>o(3,c=1),G=()=>h(),O=()=>b("random"),ee=()=>b("zero");function oe(){l=xe(this.value),o(4,l)}const ne=()=>b("random");function K(){i.width=xe(this.value),o(0,i)}const q=()=>b("random");function ae(){i.height=xe(this.value),o(0,i)}return[i,n,s,c,l,m,v,r,h,b,z,X,Y,Q,B,G,O,ee,oe,ne,K,q,ae]}let wn=class extends Ye{constructor(t){super(),Ke(this,t,En,Tn,qe,{})}};const gn=["VERTEX_SHADER","FRAGMENT_SHADER"];function An(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return bn(t),t}function bn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function yo(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function uo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Io(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=gn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Rn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=Ln(e,a,o,r,i);if(!n)throw"Can not create program";return n}function Rn(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function Ln(e,t,o,r,i){const a=i||console.log,n=e.createProgram();if(!n)throw"Could not create program";if(t.forEach(function(s){e.attachShader(n,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(n,r?r[c]:c,s)}),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){const s=e.getProgramInfoLog(n);return a("Error in program linking:"+s),e.deleteProgram(n),null}return n}function Dn(e,t){t=t||1;const o=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==o||e.height!==r?(e.width=o,e.height=r,!0):!1}const Sn=`precision mediump float;
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
`,Cn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Fn=`precision mediump float;
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

`,yn=`precision mediump float;
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

`;let ze,Pe,mt;const so=(e,t)=>{const{screenDimensions:o,mode:r}=t,{height:i,width:a}=o;let n=Cn;if(r==="gradiant"?n=Fn:r==="age_gradiant"&&(n=yn),Pe=Io(e,[Sn,n]),ze={positionLocation:e.getAttribLocation(Pe,"a_position"),textureLocation:e.getUniformLocation(Pe,"u_texture"),worldSizeLocation:e.getUniformLocation(Pe,"u_worldSize"),zoomLocation:e.getUniformLocation(Pe,"u_zoom"),panLocation:e.getUniformLocation(Pe,"u_pan"),iterationLocation:e.getUniformLocation(Pe,"u_iteration")},mt=e.createBuffer(),!mt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,mt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},In=e=>{const{gl:t,cellsTex:o,worldDimensions:r,zoomLevel:i,pan:a,iteration:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Pe),t.bindBuffer(t.ARRAY_BUFFER,mt),t.enableVertexAttribArray(ze.positionLocation),t.vertexAttribPointer(ze.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(ze.textureLocation,0),t.uniform2f(ze.worldSizeLocation,r.width,r.height),t.uniform1f(ze.zoomLocation,Math.max(i,1)),t.uniform2f(ze.panLocation,a.x,a.y),t.uniform1f(ze.iterationLocation,n),t.drawArrays(t.TRIANGLES,0,6)};function co(e,t){const{worldDimensions:o,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const n=o.width*o.height;let u=new Array(n).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:yo(e,new Float32Array(u.map((c,l)=>[c,l,0,0]).flat()),o.width,o.height)}}const zn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Pn=`precision highp float;

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
`;let we,ge,$t,ut,yt,lo,fo,ot,ht;const mo=(e,t)=>{const{cellsTex:o,texDimensions:r}=t;return ge=Io(e,[zn,Pn]),we={uInputTextureLocation:e.getUniformLocation(ge,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ge,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(ge,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(ge,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(ge,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(ge,"uIteration"),positionLocation:e.getAttribLocation(ge,"aPosition")},$t=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,$t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ut=o,yt=yo(e,null,r.width,r.height),lo=uo(e,ut),fo=uo(e,yt),ot={fb:lo,tex:ut},ht={fb:fo,tex:yt},ut},$n=e=>{const{gl:t,worldDimensions:o,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:n,iteration:u}=e;t.bindFramebuffer(t.FRAMEBUFFER,ht.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,$t),t.enableVertexAttribArray(we.positionLocation),t.vertexAttribPointer(we.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ot.tex),t.useProgram(ge),t.uniform1i(we.uInputTextureLocation,0),t.uniform2f(we.uTextureSizeLocation,o.width,o.height),t.uniform2f(we.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(we.uMouseModeLocation,a),t.uniform1i(we.uInfiniteSourceLocation,n?1:0),t.uniform1f(we.uIterationLocation,u),t.drawArrays(t.TRIANGLES,0,6);{const s=ot;ot=ht,ht=s}return ot.tex};function Un(e){let t;return{c(){t=T("canvas"),this.h()},l(o){t=E(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),R(t).forEach(p),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[0].width),L(t,"height",e[0].height),L(t,"class","svelte-1b0ol19")},m(o,r){y(o,t,r)},p:J,i:J,o:J,d(o){o&&p(t)}}}function Mn(e){const t={x:0,y:0};let o=0,r,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},n={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>x("random"),"Empty grid":()=>x("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,"Pan reset":()=>{n.x=0,n.y=0},"Reload progam":()=>A()},s=async()=>{const f=await Lo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),h=new f.GUI;h.add(u,"Pause").listen(),h.add(u,"Infinite source").listen(),h.add(u,"TimeInSeconds").listen(),h.add(u,"Iteration").listen(),h.add(u,"fps").listen(),h.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>so(c,{screenDimensions:a,mode:u["Draw mode"]})),h.add(u,"Reset grid"),h.add(u,"Empty grid"),h.add(u,"Initial density",0,1,.01).onFinishChange(()=>x("random")),h.add(u,"World width",1,a.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),x("random")}),h.add(u,"World height",1,a.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),x("random")}),h.add(u,"Cells").listen(),h.add(u,"Zoom level",1,10),h.add(u,"Pan reset"),h.add(u,"Reload progam")};let c,l,m;function A(){r=Date.now()/1e3,cancelAnimationFrame(m),c=An(),Dn(c.canvas);const f=co(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});l=mo(c,{cellsTex:f.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),so(c,{screenDimensions:a,mode:u["Draw mode"]});function h(){if(!u.Pause){const b=Date.now()/1e3,z=b-i;u.fps=1/z,i=b,u.TimeInSeconds=b-r,u.Iteration++,l=$n({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:o,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const v=.005;return t.x<.1&&n.x>=v&&(n.x-=v),t.x>.9&&n.x<1-1/u["Zoom level"]&&(n.x+=v),t.y<.1&&n.y>=v&&(n.y-=v),t.y>.9&&n.y<1-1/u["Zoom level"]&&(n.y+=v),In({gl:c,cellsTex:l,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:n,iteration:u.Iteration}),m=requestAnimationFrame(h)}m=requestAnimationFrame(h)}Et(()=>{A(),s(),document.addEventListener("keydown",h=>{if(h.code==="Space"&&(u.Pause=!u.Pause,h.preventDefault()),h.code==="KeyR"){x("random");return}if(h.code==="KeyE"){x("zero");return}if(h.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const f=document.getElementById("canvas");if(!f)throw new Error("Canvas unavailable");f.addEventListener("mousemove",h=>{const v=f.getBoundingClientRect(),b=f.width/v.width,z=f.height/v.height,X={x:(h.clientX-v.left)*b,y:(h.clientY-v.top)*z};t.x=X.x/a.width,t.y=X.y/a.height}),f.addEventListener("mousedown",h=>{h.preventDefault(),h.button===0?o=1:h.button===2&&(o=2)}),f.addEventListener("mouseup",h=>{h.preventDefault(),o=0}),f.addEventListener("contextmenu",h=>(h.preventDefault(),!1))});const x=f=>{u.Iteration=0,u.TimeInSeconds=0;const h=co(c,{mode:f,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});l=mo(c,{cellsTex:h.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[a]}let Bn=class extends Ye{constructor(t){super(),Ke(this,t,Mn,Un,qe,{})}};const Nn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Wn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Gn(t),t}function Gn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function zo(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function ho(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Po(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Nn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Xn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=On(e,a,o,r,i);if(!n)throw"Can not create program";return n}function Xn(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function On(e,t,o,r,i){const a=i||console.log,n=e.createProgram();if(!n)throw"Could not create program";if(t.forEach(function(s){e.attachShader(n,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(n,r?r[c]:c,s)}),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){const s=e.getProgramInfoLog(n);return a("Error in program linking:"+s),e.deleteProgram(n),null}return n}function kn(e,t){t=t||1;const o=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==o||e.height!==r?(e.width=o,e.height=r,!0):!1}function $o(e,t){const{worldDimensions:o,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const n=o.width*o.height;let u=new Array(n).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:zo(e,new Float32Array(u.map((c,l)=>[c,l,0,0]).flat()),o.width,o.height)}}const Hn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Vn=`precision highp float;

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
`;let fe,me,Ut,st,It,po,xo,nt,pt;const Uo=(e,t)=>{const{cellsTex:o,texDimensions:r}=t;return me=Po(e,[Hn,Vn]),fe={uInputTextureLocation:e.getUniformLocation(me,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(me,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(me,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(me,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(me,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(me,"uIteration"),uPauseLocation:e.getUniformLocation(me,"uPause"),positionLocation:e.getAttribLocation(me,"aPosition")},Ut=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Ut),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),st=o,It=zo(e,null,r.width,r.height),po=ho(e,st),xo=ho(e,It),nt={fb:po,tex:st},pt={fb:xo,tex:It},st},Yn=e=>{const{gl:t,worldDimensions:o,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:n,iteration:u,pause:s}=e;t.bindFramebuffer(t.FRAMEBUFFER,pt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,Ut),t.enableVertexAttribArray(fe.positionLocation),t.vertexAttribPointer(fe.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,nt.tex),t.useProgram(me),t.uniform1i(fe.uInputTextureLocation,0),t.uniform2f(fe.uTextureSizeLocation,o.width,o.height),t.uniform2f(fe.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(fe.uMouseModeLocation,a),t.uniform1i(fe.uInfiniteSourceLocation,n?1:0),t.uniform1f(fe.uIterationLocation,u),t.uniform1i(fe.uPauseLocation,s?1:0),t.drawArrays(t.TRIANGLES,0,6);{const c=nt;nt=pt,pt=c}return nt.tex},Kn=`precision mediump float;
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
`,qn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Zn=`precision mediump float;
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

`,jn=`precision mediump float;
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

`;let $e,Ue,xt;const Mo=(e,t)=>{const{screenDimensions:o,mode:r}=t,{height:i,width:a}=o;let n=qn;if(r==="gradiant"?n=Zn:r==="age_gradiant"&&(n=jn),Ue=Po(e,[Kn,n]),$e={positionLocation:e.getAttribLocation(Ue,"a_position"),textureLocation:e.getUniformLocation(Ue,"u_texture"),worldSizeLocation:e.getUniformLocation(Ue,"u_worldSize"),zoomLocation:e.getUniformLocation(Ue,"u_zoom"),panLocation:e.getUniformLocation(Ue,"u_pan"),iterationLocation:e.getUniformLocation(Ue,"u_iteration")},xt=e.createBuffer(),!xt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,xt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Jn=e=>{const{gl:t,cellsTex:o,worldDimensions:r,zoomLevel:i,pan:a,iteration:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ue),t.bindBuffer(t.ARRAY_BUFFER,xt),t.enableVertexAttribArray($e.positionLocation),t.vertexAttribPointer($e.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i($e.textureLocation,0),t.uniform2f($e.worldSizeLocation,r.width,r.height),t.uniform1f($e.zoomLocation,Math.max(i,1)),t.uniform2f($e.panLocation,a.x,a.y),t.uniform1f($e.iterationLocation,n),t.drawArrays(t.TRIANGLES,0,6)};let pe,vt;function Qn(e){const{drawMode:t,initialDensity:o,screenDimensions:r,worldDimensions:i}=e;pe=Wn(),kn(pe.canvas);const a=$o(pe,{mode:"random",worldDimensions:i,initialDensity:o});vt=Uo(pe,{cellsTex:a.cellsTex,texDimensions:i}),Mo(pe,{screenDimensions:r,mode:t})}function er(e){const{infiniteSource:t,iteration:o,mouseCoordinates:r,mouseMode:i,pause:a,pan:n,screenDimensions:u,worldDimensions:s,zoomLevel:c}=e;vt=Yn({gl:pe,worldDimensions:s,screenDimensions:u,mouseCoordinates:r,mouseMode:i,infiniteSource:t,iteration:o,pause:a}),Jn({gl:pe,cellsTex:vt,worldDimensions:s,zoomLevel:c,pan:n,iteration:o})}const tr=e=>{const{worldDimensions:t,mode:o,initialDensity:r}=e,i=$o(pe,{mode:o,worldDimensions:t,initialDensity:r});vt=Uo(pe,{cellsTex:i.cellsTex,texDimensions:t})},or=e=>{Mo(pe,{screenDimensions:e.screenDimensions,mode:e.drawMode})};function nr(e){let t;return{c(){t=T("canvas"),this.h()},l(o){t=E(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),R(t).forEach(p),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[0].width),L(t,"height",e[0].height),L(t,"class","svelte-1b0ol19")},m(o,r){y(o,t,r)},p:J,i:J,o:J,d(o){o&&p(t)}}}function rr(e){const t={x:0,y:0};let o=0,r,i=0;const a={width:window.innerWidth-50,height:window.innerHeight-10},n={program:{pause:!1,infiniteSource:!0,drawMode:"age_gradiant",reloadProgram:()=>l()},simulation:{iteration:0,timeInSeconds:0,fps:0},grid:{resetGrid:()=>A("random"),emptyGrid:()=>A("zero"),initialDensity:.5,worldWidth:a.width,worldHeight:a.height,nbCells:(a.width*a.height).toString()},zoom:{x:0,y:0,xController:null,yController:null,level:1,previousLevel:1}},u=async()=>{const x=await Lo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),f=new x.GUI,h=f.addFolder("Program");h.open(),h.add(n.program,"pause").name("Pause").listen(),h.add(n.program,"infiniteSource").name("Infinite Source").listen(),h.add(n.program,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>or({screenDimensions:a,drawMode:n.program.drawMode})),h.add(n.program,"reloadProgram").name("Reload program");const v=f.addFolder("Simulation");v.open(),v.add(n.simulation,"timeInSeconds").name("Time (s)").listen(),v.add(n.simulation,"iteration").name("Iteration").listen(),v.add(n.simulation,"fps").listen();const b=f.addFolder("Grid");b.open(),b.add(n.grid,"resetGrid").name("Reset grid"),b.add(n.grid,"emptyGrid").name("Empty grid"),b.add(n.grid,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>A("random")),b.add(n.grid,"worldWidth",1,a.width,1).name("World width").onFinishChange(()=>{n.grid.nbCells=(n.grid.worldHeight*n.grid.worldWidth).toString(),A("random")}),b.add(n.grid,"worldHeight",1,a.height,1).name("World height").onFinishChange(()=>{n.grid.nbCells=(n.grid.worldHeight*n.grid.worldWidth).toString(),A("random")}),b.add(n.grid,"nbCells").name("Cells count").listen();const z=f.addFolder("Zoom");z.open(),z.add(n.zoom,"level",1,10).name("Level").onChange(function(X){const Y=X-n.zoom.previousLevel;if(!n.zoom.xController||!n.zoom.yController||Y===0)return;const Q=1-1/n.zoom.previousLevel,B=1-1/X;n.zoom.xController.max(B),n.zoom.xController.min(0),n.zoom.yController.max(B),n.zoom.yController.min(0);const G={x:n.zoom.x/Q,y:n.zoom.y/Q};n.zoom.x=B*G.x||B/2,n.zoom.y=B*G.y||B/2,n.zoom.previousLevel=X}),n.zoom.xController=z.add(n.zoom,"x",0,0,.01).name("X offset").listen(),n.zoom.yController=z.add(n.zoom,"y",0,0,.01).name("Y offset").listen()},s=()=>{document.addEventListener("keydown",f=>{if(f.code==="Space"&&(n.program.pause=!n.program.pause,f.preventDefault()),f.code==="KeyR"){A("random");return}if(f.code==="KeyE"){A("zero");return}if(f.code==="KeyS"){n.program.infiniteSource=!n.program.infiniteSource;return}});const x=document.getElementById("canvas");if(!x)throw new Error("Canvas unavailable");x.addEventListener("mousemove",f=>{const h=x.getBoundingClientRect(),v=x.width/h.width,b=x.height/h.height,z={x:(f.clientX-h.left)*v,y:(f.clientY-h.top)*b};t.x=z.x/a.width,t.y=z.y/a.height}),setInterval(()=>{t.x<.1&&n.zoom.x>=.005&&(n.zoom.x-=.005),t.x>.9&&n.zoom.x<1-1/n.zoom.level&&(n.zoom.x+=.005),t.y<.1&&n.zoom.y>=.005&&(n.zoom.y-=.005),t.y>.9&&n.zoom.y<1-1/n.zoom.level&&(n.zoom.y+=.005)},50),x.addEventListener("mousedown",f=>{f.preventDefault(),f.button===0?o=1:f.button===2&&(o=2)}),x.addEventListener("mouseup",f=>{f.preventDefault(),o=0}),x.addEventListener("contextmenu",f=>(f.preventDefault(),!1))};let c;const l=()=>{Qn({initialDensity:n.grid.initialDensity,worldDimensions:{width:n.grid.worldWidth,height:n.grid.worldHeight},screenDimensions:a,drawMode:n.program.drawMode}),cancelAnimationFrame(c),r=Date.now()/1e3,m()},m=()=>{const x=Date.now()/1e3,f=x-i;i=x,n.simulation.fps=1/f,n.program.pause||(n.simulation.timeInSeconds=x-r,n.simulation.iteration++),er({infiniteSource:n.program.infiniteSource,iteration:n.simulation.iteration,mouseCoordinates:t,mouseMode:o,pause:n.program.pause,pan:{x:n.zoom.x,y:n.zoom.y},screenDimensions:a,worldDimensions:{width:n.grid.worldWidth,height:n.grid.worldHeight},zoomLevel:n.zoom.level}),c=requestAnimationFrame(m)},A=x=>{n.simulation.iteration=0,n.simulation.timeInSeconds=0,tr({initialDensity:n.grid.initialDensity,worldDimensions:{width:n.grid.worldWidth,height:n.grid.worldHeight},mode:x})};return Et(()=>{u(),s(),l()}),[a]}class ir extends Ye{constructor(t){super(),Ke(this,t,rr,nr,qe,{})}}function _o(e,t,o){const r=e.slice();return r[1]=t[o],r}function vo(e,t,o){const r=e.slice();return r[1]=t[o],r}function ar(e){let t;return{c(){t=w("About")},l(o){t=g(o,"About")},m(o,r){y(o,t,r)},d(o){o&&p(t)}}}function ur(e){let t=e[1].title+"",o;return{c(){o=w(t)},l(r){o=g(r,t)},m(r,i){y(r,o,i)},p:J,d(r){r&&p(o)}}}function To(e){let t,o;return t=new Ro({props:{$$slots:{default:[ur]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){Me(t.$$.fragment,r)},m(r,i){Re(t,r,i),o=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){o||(V(t.$$.fragment,r),o=!0)},o(r){j(t.$$.fragment,r),o=!1},d(r){Le(t,r)}}}function sr(e){let t,o,r,i;t=new Ro({props:{$$slots:{default:[ar]},$$scope:{ctx:e}}});let a=e[0],n=[];for(let s=0;s<a.length;s+=1)n[s]=To(vo(e,a,s));const u=s=>j(n[s],1,1,()=>{n[s]=null});return{c(){be(t.$$.fragment),o=S();for(let s=0;s<n.length;s+=1)n[s].c();r=_t()},l(s){Me(t.$$.fragment,s),o=C(s);for(let c=0;c<n.length;c+=1)n[c].l(s);r=_t()},m(s,c){Re(t,s,c),y(s,o,c);for(let l=0;l<n.length;l+=1)n[l].m(s,c);y(s,r,c),i=!0},p(s,c){const l={};if(c&64&&(l.$$scope={dirty:c,ctx:s}),t.$set(l),c&1){a=s[0];let m;for(m=0;m<a.length;m+=1){const A=vo(s,a,m);n[m]?(n[m].p(A,c),V(n[m],1)):(n[m]=To(A),n[m].c(),V(n[m],1),n[m].m(r.parentNode,r))}for(Mt(),m=a.length;m<n.length;m+=1)u(m);Bt()}},i(s){if(!i){V(t.$$.fragment,s);for(let c=0;c<a.length;c+=1)V(n[c]);i=!0}},o(s){j(t.$$.fragment,s),n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)j(n[c]);i=!1},d(s){Le(t,s),s&&p(o),Ao(n,s),s&&p(r)}}}function cr(e){let t,o;return{c(){t=T("p"),o=w("Experiments running Conway's Game of Life in WebGL shaders.")},l(r){t=E(r,"P",{});var i=R(t);o=g(i,"Experiments running Conway's Game of Life in WebGL shaders."),i.forEach(p)},m(r,i){y(r,t,i),d(t,o)},p:J,d(r){r&&p(t)}}}function lr(e){let t,o,r;var i=e[1].component;function a(n){return{}}return i&&(t=Zt(i,a())),{c(){t&&be(t.$$.fragment),o=S()},l(n){t&&Me(t.$$.fragment,n),o=C(n)},m(n,u){t&&Re(t,n,u),y(n,o,u),r=!0},p(n,u){if(i!==(i=n[1].component)){if(t){Mt();const s=t;j(s.$$.fragment,1,0,()=>{Le(s,1)}),Bt()}i?(t=Zt(i,a()),be(t.$$.fragment),V(t.$$.fragment,1),Re(t,o.parentNode,o)):t=null}},i(n){r||(t&&V(t.$$.fragment,n),r=!0)},o(n){t&&j(t.$$.fragment,n),r=!1},d(n){t&&Le(t,n),n&&p(o)}}}function Eo(e){let t,o;return t=new bo({props:{$$slots:{default:[lr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){Me(t.$$.fragment,r)},m(r,i){Re(t,r,i),o=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){o||(V(t.$$.fragment,r),o=!0)},o(r){j(t.$$.fragment,r),o=!1},d(r){Le(t,r)}}}function dr(e){let t,o,r,i,a,n;t=new No({props:{$$slots:{default:[sr]},$$scope:{ctx:e}}}),r=new bo({props:{$$slots:{default:[cr]},$$scope:{ctx:e}}});let u=e[0],s=[];for(let l=0;l<u.length;l+=1)s[l]=Eo(_o(e,u,l));const c=l=>j(s[l],1,1,()=>{s[l]=null});return{c(){be(t.$$.fragment),o=S(),be(r.$$.fragment),i=S();for(let l=0;l<s.length;l+=1)s[l].c();a=_t()},l(l){Me(t.$$.fragment,l),o=C(l),Me(r.$$.fragment,l),i=C(l);for(let m=0;m<s.length;m+=1)s[m].l(l);a=_t()},m(l,m){Re(t,l,m),y(l,o,m),Re(r,l,m),y(l,i,m);for(let A=0;A<s.length;A+=1)s[A].m(l,m);y(l,a,m),n=!0},p(l,m){const A={};m&64&&(A.$$scope={dirty:m,ctx:l}),t.$set(A);const x={};if(m&64&&(x.$$scope={dirty:m,ctx:l}),r.$set(x),m&1){u=l[0];let f;for(f=0;f<u.length;f+=1){const h=_o(l,u,f);s[f]?(s[f].p(h,m),V(s[f],1)):(s[f]=Eo(h),s[f].c(),V(s[f],1),s[f].m(a.parentNode,a))}for(Mt(),f=u.length;f<s.length;f+=1)c(f);Bt()}},i(l){if(!n){V(t.$$.fragment,l),V(r.$$.fragment,l);for(let m=0;m<u.length;m+=1)V(s[m]);n=!0}},o(l){j(t.$$.fragment,l),j(r.$$.fragment,l),s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)j(s[m]);n=!1},d(l){Le(t,l),l&&p(o),Le(r,l),l&&p(i),Ao(s,l),l&&p(a)}}}function fr(e){let t,o,r;return o=new Bo({props:{$$slots:{default:[dr]},$$scope:{ctx:e}}}),{c(){t=T("div"),be(o.$$.fragment)},l(i){t=E(i,"DIV",{});var a=R(t);Me(o.$$.fragment,a),a.forEach(p)},m(i,a){y(i,t,a),Re(o,t,null),r=!0},p(i,[a]){const n={};a&64&&(n.$$scope={dirty:a,ctx:i}),o.$set(n)},i(i){r||(V(o.$$.fragment,i),r=!0)},o(i){j(o.$$.fragment,i),r=!1},d(i){i&&p(t),Le(o)}}}function mr(e){return[[{title:"V4",component:ir},{title:"V3",component:Bn},{title:"V2",component:wn},{title:"V1",component:on}]]}class hr extends Ye{constructor(t){super(),Ke(this,t,mr,fr,qe,{})}}function pr(e){let t,o;return t=new hr({}),{c(){be(t.$$.fragment)},l(r){Me(t.$$.fragment,r)},m(r,i){Re(t,r,i),o=!0},p:J,i(r){o||(V(t.$$.fragment,r),o=!0)},o(r){j(t.$$.fragment,r),o=!1},d(r){Le(t,r)}}}class gr extends Ye{constructor(t){super(),Ke(this,t,null,pr,qe,{})}}export{gr as default};
