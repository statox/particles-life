import{S as Ye,i as Ke,s as qe,k as E,a as S,q as g,l as w,m as R,h,c as C,r as A,n as L,p as Tt,b as y,D as d,O as he,K as P,R as wo,u as Ae,P as xe,B as Q,M as go,o as Et,w as be,x as Me,y as Re,f as K,t as J,z as Le,e as _t,g as Mt,d as Bt,L as Ao,v as Zt}from"../../../chunks/index-46ced799.js";import{T as Bo,a as No,b as bo,c as Ro}from"../../../chunks/TabPanel-3f95d051.js";import{_ as Lo}from"../../../chunks/preload-helper-41c905a7.js";const Wo=["VERTEX_SHADER","FRAGMENT_SHADER"];function Go(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Xo(t),t}function Xo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Do(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function jt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function So(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Wo[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Oo(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=ko(e,a,o,r,i);if(!n)throw"Can not create program";return n}function Oo(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
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
`;let Je,Qe,zt,it,Ct,Qt,eo,et,lt;const to=(e,t)=>{const{cellsTex:o,texDimensions:r}=t;return Qe=So(e,[jo,Jo]),Je={uInputTextureLocation:e.getUniformLocation(Qe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Qe,"uTextureSize"),positionLocation:e.getAttribLocation(Qe,"aPosition")},zt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,zt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),it=o,Ct=Do(e,null,r.width,r.height),Qt=jt(e,it),eo=jt(e,Ct),et={fb:Qt,tex:it},lt={fb:eo,tex:Ct},it},Qo=e=>{const{gl:t,worldDimensions:o,screenDimensions:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,lt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,zt),t.enableVertexAttribArray(Je.positionLocation),t.vertexAttribPointer(Je.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,et.tex),t.useProgram(Qe),t.uniform1i(Je.uInputTextureLocation,0),t.uniform2f(Je.uTextureSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6);{const i=et;et=lt,lt=i}return et.tex};function en(e){let t,o,r,i,a=e[1]?"Play":"Pause",n,u,s,c,l,f,_=e[0].width+"",x,p,m=e[0].height+"",v,b,N=e[0].width*e[0].height+"",V,Y,G,X,O,W,ee,oe,ne,q,Z,ae,M,T,z,_e,ve,$,Be,ue,se,Ne,k,H,Te;return{c(){t=E("canvas"),o=S(),r=E("div"),i=E("button"),n=g(a),u=g(" (Space)"),s=S(),c=E("div"),l=E("span"),f=g("World "),x=g(_),p=g(" x "),v=g(m),b=g(" ("),V=g(N),Y=g(" cells)"),G=S(),X=E("button"),O=g("Reload program"),W=S(),ee=E("button"),oe=g("Fullscreen (f)"),ne=S(),q=E("div"),Z=E("button"),ae=g("Reset world (r)"),M=S(),T=E("span"),z=E("label"),_e=g("World: width"),ve=S(),$=E("input"),Be=S(),ue=E("label"),se=g("height"),Ne=S(),k=E("input"),this.h()},l(D){t=w(D,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(t).forEach(h),o=C(D),r=w(D,"DIV",{});var U=R(r);i=w(U,"BUTTON",{});var ce=R(i);n=A(ce,a),u=A(ce," (Space)"),ce.forEach(h),U.forEach(h),s=C(D),c=w(D,"DIV",{});var le=R(c);l=w(le,"SPAN",{});var te=R(l);f=A(te,"World "),x=A(te,_),p=A(te," x "),v=A(te,m),b=A(te," ("),V=A(te,N),Y=A(te," cells)"),te.forEach(h),G=C(le),X=w(le,"BUTTON",{});var de=R(X);O=A(de,"Reload program"),de.forEach(h),W=C(le),ee=w(le,"BUTTON",{});var Ee=R(ee);oe=A(Ee,"Fullscreen (f)"),Ee.forEach(h),le.forEach(h),ne=C(D),q=w(D,"DIV",{});var De=R(q);Z=w(De,"BUTTON",{});var Xe=R(Z);ae=A(Xe,"Reset world (r)"),Xe.forEach(h),M=C(De),T=w(De,"SPAN",{});var B=R(T);z=w(B,"LABEL",{for:!0});var Oe=R(z);_e=A(Oe,"World: width"),Oe.forEach(h),ve=C(B),$=w(B,"INPUT",{id:!0,type:!0,min:!0}),Be=C(B),ue=w(B,"LABEL",{for:!0});var j=R(ue);se=A(j,"height"),j.forEach(h),Ne=C(B),k=w(B,"INPUT",{id:!0,type:!0,min:!0}),B.forEach(h),De.forEach(h),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[3].width),L(t,"height",e[3].height),L(z,"for","worldWidth"),L($,"id","worldWidth"),L($,"type","number"),L($,"min",0),L(ue,"for","worldHeight"),L(k,"id","worldHeight"),L(k,"type","number"),L(k,"min",0)},m(D,U){y(D,t,U),y(D,o,U),y(D,r,U),d(r,i),d(i,n),d(i,u),y(D,s,U),y(D,c,U),d(c,l),d(l,f),d(l,x),d(l,p),d(l,v),d(l,b),d(l,V),d(l,Y),d(c,G),d(c,X),d(X,O),d(c,W),d(c,ee),d(ee,oe),y(D,ne,U),y(D,q,U),d(q,Z),d(Z,ae),d(q,M),d(q,T),d(T,z),d(z,_e),d(T,ve),d(T,$),he($,e[0].width),d(T,Be),d(T,ue),d(ue,se),d(T,Ne),d(T,k),he(k,e[0].height),H||(Te=[P(i,"click",e[6]),P(X,"click",e[7]),P(ee,"click",function(){wo(e[2])&&e[2].apply(this,arguments)}),P(Z,"click",e[5]),P($,"change",e[5]),P($,"input",e[8]),P(k,"change",e[5]),P(k,"input",e[9])],H=!0)},p(D,[U]){e=D,U&2&&a!==(a=e[1]?"Play":"Pause")&&Ae(n,a),U&1&&_!==(_=e[0].width+"")&&Ae(x,_),U&1&&m!==(m=e[0].height+"")&&Ae(v,m),U&1&&N!==(N=e[0].width*e[0].height+"")&&Ae(V,N),U&1&&xe($.value)!==e[0].width&&he($,e[0].width),U&1&&xe(k.value)!==e[0].height&&he(k,e[0].height)},i:Q,o:Q,d(D){D&&h(t),D&&h(o),D&&h(r),D&&h(s),D&&h(c),D&&h(ne),D&&h(q),H=!1,go(Te)}}}function tn(e,t,o){const r={width:1600,height:900},i={width:1600,height:900};let a=!0,n,u,s;function c(){cancelAnimationFrame(s),u=Go(),Ho(u.canvas);const v=Jt(u,{worldDimensions:i});n=to(u,{cellsTex:v.cellsTex,texDimensions:i}),Ko(u,{screenDimensions:r});function b(){return a||(n=Qo({gl:u,worldDimensions:i,screenDimensions:r})),qo({gl:u,cellsTex:n,worldDimensions:i}),s=requestAnimationFrame(b)}s=requestAnimationFrame(b)}let l;Et(()=>{c(),o(2,l=Zo(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",v=>{if(v.code==="Space"&&(o(1,a=!a),v.preventDefault()),v.code==="KeyF"){l();return}if(v.code==="KeyR"){f();return}})});const f=()=>{o(0,i.width=Math.min(i.width,r.width),i),o(0,i.height=Math.min(i.height,r.height),i);const v=Jt(u,{worldDimensions:i});n=to(u,{cellsTex:v.cellsTex,texDimensions:i})},_=()=>o(1,a=!a),x=()=>c();function p(){i.width=xe(this.value),o(0,i)}function m(){i.height=xe(this.value),o(0,i)}return[i,a,l,r,c,f,_,x,p,m]}let on=class extends Ye{constructor(t){super(),Ke(this,t,tn,en,qe,{})}};const nn=["VERTEX_SHADER","FRAGMENT_SHADER"];function rn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return an(t),t}function an(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Co(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function oo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Fo(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=nn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=un(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=sn(e,a,o,r,i);if(!n)throw"Can not create program";return n}function un(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
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
`;let ye,Ie,Pt,at,Ft,ro,io,tt,ft;const ao=(e,t)=>{const{cellsTex:o,texDimensions:r}=t;return Ie=Fo(e,[xn,_n]),ye={uInputTextureLocation:e.getUniformLocation(Ie,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ie,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Ie,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Ie,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Ie,"uInfiniteSource"),positionLocation:e.getAttribLocation(Ie,"aPosition")},Pt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Pt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),at=o,Ft=Co(e,null,r.width,r.height),ro=oo(e,at),io=oo(e,Ft),tt={fb:ro,tex:at},ft={fb:io,tex:Ft},at},vn=e=>{const{gl:t,worldDimensions:o,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,ft.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,Pt),t.enableVertexAttribArray(ye.positionLocation),t.vertexAttribPointer(ye.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,tt.tex),t.useProgram(Ie),t.uniform1i(ye.uInputTextureLocation,0),t.uniform2f(ye.uTextureSizeLocation,o.width,o.height),t.uniform2f(ye.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(ye.uMouseModeLocation,a),t.uniform1i(ye.uInfiniteSourceLocation,n?1:0),t.drawArrays(t.TRIANGLES,0,6);{const u=tt;tt=ft,ft=u}return tt.tex};function Tn(e){let t,o,r,i,a=e[5]?"Play":"Pause",n,u,s,c,l=e[2]?"Disable":"Enable",f,_,x,p,m,v,b,N,V,Y,G,X,O,W,ee,oe=e[0].width+"",ne,q,Z=e[0].height+"",ae,M,T=e[0].width*e[0].height+"",z,_e,ve,$,Be,ue,se,Ne,k,H,Te,D,U,ce,le,te,de,Ee,De,Xe,B,Oe,j,ke,wt,gt,re,At,He,bt,Rt,ie,Lt,Nt;return{c(){t=E("canvas"),o=S(),r=E("div"),i=E("button"),n=g(a),u=g(" (Space)"),s=S(),c=E("button"),f=g(l),_=g(" constant cells generation (E)"),x=S(),p=E("button"),m=g("Zoom in (I)"),v=S(),b=E("button"),N=g("Zoom out (O)"),V=S(),Y=E("button"),G=g("Reset zoom (Z)"),X=S(),O=E("div"),W=E("span"),ee=g("World "),ne=g(oe),q=g(" x "),ae=g(Z),M=g(" ("),z=g(T),_e=g(" cells)"),ve=S(),$=E("button"),Be=g("Reload program"),ue=S(),se=E("button"),Ne=g("Fullscreen (f)"),k=S(),H=E("div"),Te=E("button"),D=g("Reset world (R)"),U=S(),ce=E("button"),le=g("Empty world (E)"),te=S(),de=E("span"),Ee=E("label"),De=g("Initial density [0-1]"),Xe=S(),B=E("input"),Oe=S(),j=E("span"),ke=E("label"),wt=g("World: width"),gt=S(),re=E("input"),At=S(),He=E("label"),bt=g("height"),Rt=S(),ie=E("input"),this.h()},l(I){t=w(I,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(t).forEach(h),o=C(I),r=w(I,"DIV",{});var F=R(r);i=w(F,"BUTTON",{});var Dt=R(i);n=A(Dt,a),u=A(Dt," (Space)"),Dt.forEach(h),s=C(F),c=w(F,"BUTTON",{});var St=R(c);f=A(St,l),_=A(St," constant cells generation (E)"),St.forEach(h),x=C(F),p=w(F,"BUTTON",{});var Wt=R(p);m=A(Wt,"Zoom in (I)"),Wt.forEach(h),v=C(F),b=w(F,"BUTTON",{});var Gt=R(b);N=A(Gt,"Zoom out (O)"),Gt.forEach(h),V=C(F),Y=w(F,"BUTTON",{});var Xt=R(Y);G=A(Xt,"Reset zoom (Z)"),Xt.forEach(h),F.forEach(h),X=C(I),O=w(I,"DIV",{});var Ve=R(O);W=w(Ve,"SPAN",{});var Se=R(W);ee=A(Se,"World "),ne=A(Se,oe),q=A(Se," x "),ae=A(Se,Z),M=A(Se," ("),z=A(Se,T),_e=A(Se," cells)"),Se.forEach(h),ve=C(Ve),$=w(Ve,"BUTTON",{});var Ot=R($);Be=A(Ot,"Reload program"),Ot.forEach(h),ue=C(Ve),se=w(Ve,"BUTTON",{});var kt=R(se);Ne=A(kt,"Fullscreen (f)"),kt.forEach(h),Ve.forEach(h),k=C(I),H=w(I,"DIV",{});var Ce=R(H);Te=w(Ce,"BUTTON",{});var Ht=R(Te);D=A(Ht,"Reset world (R)"),Ht.forEach(h),U=C(Ce),ce=w(Ce,"BUTTON",{});var Vt=R(ce);le=A(Vt,"Empty world (E)"),Vt.forEach(h),te=C(Ce),de=w(Ce,"SPAN",{});var rt=R(de);Ee=w(rt,"LABEL",{for:!0});var Yt=R(Ee);De=A(Yt,"Initial density [0-1]"),Yt.forEach(h),Xe=C(rt),B=w(rt,"INPUT",{id:!0,type:!0,min:!0,max:!0}),rt.forEach(h),Oe=C(Ce),j=w(Ce,"SPAN",{});var Fe=R(j);ke=w(Fe,"LABEL",{for:!0});var Kt=R(ke);wt=A(Kt,"World: width"),Kt.forEach(h),gt=C(Fe),re=w(Fe,"INPUT",{id:!0,type:!0,min:!0}),At=C(Fe),He=w(Fe,"LABEL",{for:!0});var qt=R(He);bt=A(qt,"height"),qt.forEach(h),Rt=C(Fe),ie=w(Fe,"INPUT",{id:!0,type:!0,min:!0}),Fe.forEach(h),Ce.forEach(h),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[7].width),L(t,"height",e[7].height),L(Ee,"for","initialDensity"),L(B,"id","initialDensity"),L(B,"type","number"),L(B,"min",0),L(B,"max",1),L(ke,"for","worldWidth"),L(re,"id","worldWidth"),L(re,"type","number"),L(re,"min",0),L(He,"for","worldHeight"),L(ie,"id","worldHeight"),L(ie,"type","number"),L(ie,"min",0)},m(I,F){y(I,t,F),y(I,o,F),y(I,r,F),d(r,i),d(i,n),d(i,u),d(r,s),d(r,c),d(c,f),d(c,_),d(r,x),d(r,p),d(p,m),d(r,v),d(r,b),d(b,N),d(r,V),d(r,Y),d(Y,G),y(I,X,F),y(I,O,F),d(O,W),d(W,ee),d(W,ne),d(W,q),d(W,ae),d(W,M),d(W,z),d(W,_e),d(O,ve),d(O,$),d($,Be),d(O,ue),d(O,se),d(se,Ne),y(I,k,F),y(I,H,F),d(H,Te),d(Te,D),d(H,U),d(H,ce),d(ce,le),d(H,te),d(H,de),d(de,Ee),d(Ee,De),d(de,Xe),d(de,B),he(B,e[4]),d(H,Oe),d(H,j),d(j,ke),d(ke,wt),d(j,gt),d(j,re),he(re,e[0].width),d(j,At),d(j,He),d(He,bt),d(j,Rt),d(j,ie),he(ie,e[0].height),Lt||(Nt=[P(i,"click",e[10]),P(c,"click",e[11]),P(p,"click",e[12]),P(b,"click",e[13]),P(Y,"click",e[14]),P($,"click",e[15]),P(se,"click",function(){wo(e[6])&&e[6].apply(this,arguments)}),P(Te,"click",e[16]),P(ce,"click",e[17]),P(B,"input",e[18]),P(re,"change",e[19]),P(re,"input",e[20]),P(ie,"change",e[21]),P(ie,"input",e[22])],Lt=!0)},p(I,[F]){e=I,F&32&&a!==(a=e[5]?"Play":"Pause")&&Ae(n,a),F&4&&l!==(l=e[2]?"Disable":"Enable")&&Ae(f,l),F&1&&oe!==(oe=e[0].width+"")&&Ae(ne,oe),F&1&&Z!==(Z=e[0].height+"")&&Ae(ae,Z),F&1&&T!==(T=e[0].width*e[0].height+"")&&Ae(z,T),F&16&&xe(B.value)!==e[4]&&he(B,e[4]),F&1&&xe(re.value)!==e[0].width&&he(re,e[0].width),F&1&&xe(ie.value)!==e[0].height&&he(ie,e[0].height)},i:Q,o:Q,d(I){I&&h(t),I&&h(o),I&&h(r),I&&h(X),I&&h(O),I&&h(k),I&&h(H),Lt=!1,go(Nt)}}}function En(e,t,o){const r={width:1200,height:900},i={width:1200,height:900},a={x:-100,y:-100},n={x:0,y:0};let u=0,s=!0,c=1,l=.05,f=!0,_,x,p;function m(){cancelAnimationFrame(p),x=rn(),cn(x.canvas);const M=no(x,{mode:"random",worldDimensions:i,initialDensity:l});_=ao(x,{cellsTex:M.cellsTex,texDimensions:i}),mn(x,{screenDimensions:r,mode:"gradiant"});function T(){f||(_=vn({gl:x,worldDimensions:i,screenDimensions:r,mouseCoordinates:a,mouseMode:u,infiniteSource:s}));const z=.005;return a.x<.2&&n.x>=z&&o(1,n.x-=z,n),a.x>.8&&n.x<1-1/c&&o(1,n.x+=z,n),a.y<.2&&n.y>=z&&o(1,n.y-=z,n),a.y>.8&&n.y<1-1/c&&o(1,n.y+=z,n),hn({gl:x,cellsTex:_,worldDimensions:i,zoomLevel:c,pan:n}),p=requestAnimationFrame(T)}p=requestAnimationFrame(T)}let v;Et(()=>{m(),o(6,v=pn(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",T=>{if(T.code==="Space"&&(o(5,f=!f),T.preventDefault()),T.code==="KeyF"){v();return}if(T.code==="KeyR"){b("random");return}if(T.code==="KeyE"){b("zero");return}if(T.code==="KeyI"){o(3,c++,c);return}if(T.code==="KeyS"){o(2,s=!s);return}if(T.code==="KeyO"){o(3,c=Math.max(c-1,1)),c===1&&(o(1,n.x=0,n),o(1,n.y=0,n));return}if(T.code==="KeyZ"){o(3,c=1),o(1,n.x=0,n),o(1,n.y=0,n);return}});const M=document.getElementById("canvas");if(!M)throw new Error("Canvas unavailable");M.addEventListener("mousemove",T=>{const z=M.getBoundingClientRect(),_e=M.width/z.width,ve=M.height/z.height,$={x:(T.clientX-z.left)*_e,y:(T.clientY-z.top)*ve};a.x=$.x/r.width,a.y=$.y/r.height}),M.addEventListener("mousedown",T=>{T.preventDefault(),T.button===0?u=1:T.button===2&&(u=2)}),M.addEventListener("mouseup",T=>{T.preventDefault(),u=0}),M.addEventListener("contextmenu",T=>(T.preventDefault(),!1))});const b=M=>{o(0,i.width=Math.min(i.width,r.width),i),o(0,i.height=Math.min(i.height,r.height),i);const T=no(x,{mode:M,worldDimensions:i,initialDensity:l});_=ao(x,{cellsTex:T.cellsTex,texDimensions:i})},N=()=>o(5,f=!f),V=()=>o(2,s=!s),Y=()=>o(3,c+=1),G=()=>{o(3,c=Math.max(c-1,1)),c===1&&(o(1,n.x=0,n),o(1,n.y=0,n))},X=()=>o(3,c=1),O=()=>m(),W=()=>b("random"),ee=()=>b("zero");function oe(){l=xe(this.value),o(4,l)}const ne=()=>b("random");function q(){i.width=xe(this.value),o(0,i)}const Z=()=>b("random");function ae(){i.height=xe(this.value),o(0,i)}return[i,n,s,c,l,f,v,r,m,b,N,V,Y,G,X,O,W,ee,oe,ne,q,Z,ae]}let wn=class extends Ye{constructor(t){super(),Ke(this,t,En,Tn,qe,{})}};const gn=["VERTEX_SHADER","FRAGMENT_SHADER"];function An(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return bn(t),t}function bn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function yo(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function uo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Io(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=gn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Rn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=Ln(e,a,o,r,i);if(!n)throw"Can not create program";return n}function Rn(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
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
`;let we,ge,$t,ut,yt,lo,fo,ot,ht;const mo=(e,t)=>{const{cellsTex:o,texDimensions:r}=t;return ge=Io(e,[zn,Pn]),we={uInputTextureLocation:e.getUniformLocation(ge,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ge,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(ge,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(ge,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(ge,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(ge,"uIteration"),positionLocation:e.getAttribLocation(ge,"aPosition")},$t=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,$t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ut=o,yt=yo(e,null,r.width,r.height),lo=uo(e,ut),fo=uo(e,yt),ot={fb:lo,tex:ut},ht={fb:fo,tex:yt},ut},$n=e=>{const{gl:t,worldDimensions:o,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:n,iteration:u}=e;t.bindFramebuffer(t.FRAMEBUFFER,ht.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,$t),t.enableVertexAttribArray(we.positionLocation),t.vertexAttribPointer(we.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ot.tex),t.useProgram(ge),t.uniform1i(we.uInputTextureLocation,0),t.uniform2f(we.uTextureSizeLocation,o.width,o.height),t.uniform2f(we.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(we.uMouseModeLocation,a),t.uniform1i(we.uInfiniteSourceLocation,n?1:0),t.uniform1f(we.uIterationLocation,u),t.drawArrays(t.TRIANGLES,0,6);{const s=ot;ot=ht,ht=s}return ot.tex};function Un(e){let t;return{c(){t=E("canvas"),this.h()},l(o){t=w(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),R(t).forEach(h),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[0].width),L(t,"height",e[0].height),L(t,"class","svelte-1b0ol19")},m(o,r){y(o,t,r)},p:Q,i:Q,o:Q,d(o){o&&h(t)}}}function Mn(e){const t={x:0,y:0};let o=0,r,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},n={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>x("random"),"Empty grid":()=>x("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,"Pan reset":()=>{n.x=0,n.y=0},"Reload progam":()=>_()},s=async()=>{const p=await Lo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),m=new p.GUI;m.add(u,"Pause").listen(),m.add(u,"Infinite source").listen(),m.add(u,"TimeInSeconds").listen(),m.add(u,"Iteration").listen(),m.add(u,"fps").listen(),m.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>so(c,{screenDimensions:a,mode:u["Draw mode"]})),m.add(u,"Reset grid"),m.add(u,"Empty grid"),m.add(u,"Initial density",0,1,.01).onFinishChange(()=>x("random")),m.add(u,"World width",1,a.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),x("random")}),m.add(u,"World height",1,a.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),x("random")}),m.add(u,"Cells").listen(),m.add(u,"Zoom level",1,10),m.add(u,"Pan reset"),m.add(u,"Reload progam")};let c,l,f;function _(){r=Date.now()/1e3,cancelAnimationFrame(f),c=An(),Dn(c.canvas);const p=co(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});l=mo(c,{cellsTex:p.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),so(c,{screenDimensions:a,mode:u["Draw mode"]});function m(){if(!u.Pause){const b=Date.now()/1e3,N=b-i;u.fps=1/N,i=b,u.TimeInSeconds=b-r,u.Iteration++,l=$n({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:o,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const v=.005;return t.x<.1&&n.x>=v&&(n.x-=v),t.x>.9&&n.x<1-1/u["Zoom level"]&&(n.x+=v),t.y<.1&&n.y>=v&&(n.y-=v),t.y>.9&&n.y<1-1/u["Zoom level"]&&(n.y+=v),In({gl:c,cellsTex:l,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:n,iteration:u.Iteration}),f=requestAnimationFrame(m)}f=requestAnimationFrame(m)}Et(()=>{_(),s(),document.addEventListener("keydown",m=>{if(m.code==="Space"&&(u.Pause=!u.Pause,m.preventDefault()),m.code==="KeyR"){x("random");return}if(m.code==="KeyE"){x("zero");return}if(m.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const p=document.getElementById("canvas");if(!p)throw new Error("Canvas unavailable");p.addEventListener("mousemove",m=>{const v=p.getBoundingClientRect(),b=p.width/v.width,N=p.height/v.height,V={x:(m.clientX-v.left)*b,y:(m.clientY-v.top)*N};t.x=V.x/a.width,t.y=V.y/a.height}),p.addEventListener("mousedown",m=>{m.preventDefault(),m.button===0?o=1:m.button===2&&(o=2)}),p.addEventListener("mouseup",m=>{m.preventDefault(),o=0}),p.addEventListener("contextmenu",m=>(m.preventDefault(),!1))});const x=p=>{u.Iteration=0,u.TimeInSeconds=0;const m=co(c,{mode:p,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});l=mo(c,{cellsTex:m.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[a]}let Bn=class extends Ye{constructor(t){super(),Ke(this,t,Mn,Un,qe,{})}};const Nn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Wn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Gn(t),t}function Gn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function zo(e,t,o,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function ho(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Po(e,t,o,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Nn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Xn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const n=On(e,a,o,r,i);if(!n)throw"Can not create program";return n}function Xn(e,t,o,r){const i=r||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
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

`;let $e,Ue,xt;const Mo=(e,t)=>{const{screenDimensions:o,mode:r}=t,{height:i,width:a}=o;let n=qn;if(r==="gradiant"?n=Zn:r==="age_gradiant"&&(n=jn),Ue=Po(e,[Kn,n]),$e={positionLocation:e.getAttribLocation(Ue,"a_position"),textureLocation:e.getUniformLocation(Ue,"u_texture"),worldSizeLocation:e.getUniformLocation(Ue,"u_worldSize"),zoomLocation:e.getUniformLocation(Ue,"u_zoom"),panLocation:e.getUniformLocation(Ue,"u_pan"),iterationLocation:e.getUniformLocation(Ue,"u_iteration")},xt=e.createBuffer(),!xt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,xt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Jn=e=>{const{gl:t,cellsTex:o,worldDimensions:r,zoomLevel:i,pan:a,iteration:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ue),t.bindBuffer(t.ARRAY_BUFFER,xt),t.enableVertexAttribArray($e.positionLocation),t.vertexAttribPointer($e.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i($e.textureLocation,0),t.uniform2f($e.worldSizeLocation,r.width,r.height),t.uniform1f($e.zoomLocation,Math.max(i,1)),t.uniform2f($e.panLocation,a.x,a.y),t.uniform1f($e.iterationLocation,n),t.drawArrays(t.TRIANGLES,0,6)};let pe,vt;function Qn(e){const{drawMode:t,initialDensity:o,screenDimensions:r,worldDimensions:i}=e;pe=Wn(),kn(pe.canvas);const a=$o(pe,{mode:"random",worldDimensions:i,initialDensity:o});vt=Uo(pe,{cellsTex:a.cellsTex,texDimensions:i}),Mo(pe,{screenDimensions:r,mode:t})}function er(e){const{infiniteSource:t,iteration:o,mouseCoordinates:r,mouseMode:i,pause:a,pan:n,screenDimensions:u,worldDimensions:s,zoomLevel:c}=e;vt=Yn({gl:pe,worldDimensions:s,screenDimensions:u,mouseCoordinates:r,mouseMode:i,infiniteSource:t,iteration:o,pause:a}),Jn({gl:pe,cellsTex:vt,worldDimensions:s,zoomLevel:c,pan:n,iteration:o})}const tr=e=>{const{worldDimensions:t,mode:o,initialDensity:r}=e,i=$o(pe,{mode:o,worldDimensions:t,initialDensity:r});vt=Uo(pe,{cellsTex:i.cellsTex,texDimensions:t})},or=e=>{Mo(pe,{screenDimensions:e.screenDimensions,mode:e.drawMode})};function nr(e){let t;return{c(){t=E("canvas"),this.h()},l(o){t=w(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),R(t).forEach(h),this.h()},h(){L(t,"id","canvas"),Tt(t,"background-color","black"),L(t,"width",e[0].width),L(t,"height",e[0].height),L(t,"class","svelte-1b0ol19")},m(o,r){y(o,t,r)},p:Q,i:Q,o:Q,d(o){o&&h(t)}}}function rr(e){const t={x:0,y:0};let o=0,r,i=0;const a={width:window.innerWidth-50,height:window.innerHeight-10},n={program:{pause:!1,infiniteSource:!0,drawMode:"age_gradiant",reloadProgram:()=>l()},simulation:{iteration:0,timeInSeconds:0,fps:0},grid:{resetGrid:()=>f("random"),emptyGrid:()=>f("zero"),initialDensity:.5,worldWidth:a.width,worldHeight:a.height,nbCells:(a.width*a.height).toString()},zoom:{x:0,y:0,xController:null,yController:null,level:1,previousLevel:1}},u=async()=>{const _=await Lo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),x=new _.GUI,p=x.addFolder("Program");p.open(),p.add(n.program,"pause").name("Pause").listen(),p.add(n.program,"infiniteSource").name("Infinite Source").listen(),p.add(n.program,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>or({screenDimensions:a,drawMode:n.program.drawMode})),p.add(n.program,"reloadProgram").name("Reload program");const m=x.addFolder("Simulation");m.open(),m.add(n.simulation,"timeInSeconds").name("Time (s)").listen(),m.add(n.simulation,"iteration").name("Iteration").listen(),m.add(n.simulation,"fps").listen();const v=x.addFolder("Grid");v.open(),v.add(n.grid,"resetGrid").name("Reset grid"),v.add(n.grid,"emptyGrid").name("Empty grid"),v.add(n.grid,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>f("random")),v.add(n.grid,"worldWidth",1,a.width,1).name("World width").onFinishChange(()=>{n.grid.nbCells=(n.grid.worldHeight*n.grid.worldWidth).toString(),f("random")}),v.add(n.grid,"worldHeight",1,a.height,1).name("World height").onFinishChange(()=>{n.grid.nbCells=(n.grid.worldHeight*n.grid.worldWidth).toString(),f("random")}),v.add(n.grid,"nbCells").name("Cells count").listen();const b=x.addFolder("Zoom");b.open(),b.add(n.zoom,"level",1,10).name("Level").onChange(function(N){const V=N-n.zoom.previousLevel;if(!n.zoom.xController||!n.zoom.yController||V===0)return;const Y=1-1/n.zoom.previousLevel,G=1-1/N;n.zoom.xController.max(G),n.zoom.xController.min(0),n.zoom.yController.max(G),n.zoom.yController.min(0);const X={x:n.zoom.x/Y,y:n.zoom.y/Y};n.zoom.x=G*X.x||G/2,n.zoom.y=G*X.y||G/2,n.zoom.previousLevel=N}),n.zoom.xController=b.add(n.zoom,"x",0,0,.01).name("X offset").listen(),n.zoom.yController=b.add(n.zoom,"y",0,0,.01).name("Y offset").listen()},s=()=>{document.addEventListener("keydown",x=>{if(x.code==="Space"&&(n.program.pause=!n.program.pause,x.preventDefault()),x.code==="KeyR"){f("random");return}if(x.code==="KeyE"){f("zero");return}if(x.code==="KeyS"){n.program.infiniteSource=!n.program.infiniteSource;return}});const _=document.getElementById("canvas");if(!_)throw new Error("Canvas unavailable");_.addEventListener("mousemove",x=>{const p=_.getBoundingClientRect(),m=_.width/p.width,v=_.height/p.height,b={x:(x.clientX-p.left)*m,y:(x.clientY-p.top)*v};t.x=b.x/a.width,t.y=b.y/a.height}),setInterval(()=>{t.x<.1&&n.zoom.x>=.005&&(n.zoom.x-=.005),t.x>.9&&n.zoom.x<1-1/n.zoom.level&&(n.zoom.x+=.005),t.y<.1&&n.zoom.y>=.005&&(n.zoom.y-=.005),t.y>.9&&n.zoom.y<1-1/n.zoom.level&&(n.zoom.y+=.005)},50),_.addEventListener("mousedown",x=>{x.preventDefault(),x.button===0?o=1:x.button===2&&(o=2)}),_.addEventListener("mouseup",x=>{x.preventDefault(),o=0}),_.addEventListener("contextmenu",x=>(x.preventDefault(),!1))};let c;const l=()=>{Qn({initialDensity:n.grid.initialDensity,worldDimensions:{width:n.grid.worldWidth,height:n.grid.worldHeight},screenDimensions:a,drawMode:n.program.drawMode}),cancelAnimationFrame(c),r=Date.now()/1e3;const _=()=>{const x=Date.now()/1e3,p=x-i;i=x,n.simulation.fps=1/p,n.program.pause||(n.simulation.timeInSeconds=x-r,n.simulation.iteration++),er({infiniteSource:n.program.infiniteSource,iteration:n.simulation.iteration,mouseCoordinates:t,mouseMode:o,pause:n.program.pause,pan:{x:n.zoom.x,y:n.zoom.y},screenDimensions:a,worldDimensions:{width:n.grid.worldWidth,height:n.grid.worldHeight},zoomLevel:n.zoom.level}),c=requestAnimationFrame(_)};_()},f=_=>{n.simulation.iteration=0,n.simulation.timeInSeconds=0,tr({initialDensity:n.grid.initialDensity,worldDimensions:{width:n.grid.worldWidth,height:n.grid.worldHeight},mode:_})};return Et(()=>{u(),s(),l()}),[a]}class ir extends Ye{constructor(t){super(),Ke(this,t,rr,nr,qe,{})}}function _o(e,t,o){const r=e.slice();return r[1]=t[o],r}function vo(e,t,o){const r=e.slice();return r[1]=t[o],r}function ar(e){let t;return{c(){t=g("About")},l(o){t=A(o,"About")},m(o,r){y(o,t,r)},d(o){o&&h(t)}}}function ur(e){let t=e[1].title+"",o;return{c(){o=g(t)},l(r){o=A(r,t)},m(r,i){y(r,o,i)},p:Q,d(r){r&&h(o)}}}function To(e){let t,o;return t=new Ro({props:{$$slots:{default:[ur]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){Me(t.$$.fragment,r)},m(r,i){Re(t,r,i),o=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){o||(K(t.$$.fragment,r),o=!0)},o(r){J(t.$$.fragment,r),o=!1},d(r){Le(t,r)}}}function sr(e){let t,o,r,i;t=new Ro({props:{$$slots:{default:[ar]},$$scope:{ctx:e}}});let a=e[0],n=[];for(let s=0;s<a.length;s+=1)n[s]=To(vo(e,a,s));const u=s=>J(n[s],1,1,()=>{n[s]=null});return{c(){be(t.$$.fragment),o=S();for(let s=0;s<n.length;s+=1)n[s].c();r=_t()},l(s){Me(t.$$.fragment,s),o=C(s);for(let c=0;c<n.length;c+=1)n[c].l(s);r=_t()},m(s,c){Re(t,s,c),y(s,o,c);for(let l=0;l<n.length;l+=1)n[l].m(s,c);y(s,r,c),i=!0},p(s,c){const l={};if(c&64&&(l.$$scope={dirty:c,ctx:s}),t.$set(l),c&1){a=s[0];let f;for(f=0;f<a.length;f+=1){const _=vo(s,a,f);n[f]?(n[f].p(_,c),K(n[f],1)):(n[f]=To(_),n[f].c(),K(n[f],1),n[f].m(r.parentNode,r))}for(Mt(),f=a.length;f<n.length;f+=1)u(f);Bt()}},i(s){if(!i){K(t.$$.fragment,s);for(let c=0;c<a.length;c+=1)K(n[c]);i=!0}},o(s){J(t.$$.fragment,s),n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)J(n[c]);i=!1},d(s){Le(t,s),s&&h(o),Ao(n,s),s&&h(r)}}}function cr(e){let t,o;return{c(){t=E("p"),o=g("Experiments running Conway's Game of Life in WebGL shaders.")},l(r){t=w(r,"P",{});var i=R(t);o=A(i,"Experiments running Conway's Game of Life in WebGL shaders."),i.forEach(h)},m(r,i){y(r,t,i),d(t,o)},p:Q,d(r){r&&h(t)}}}function lr(e){let t,o,r;var i=e[1].component;function a(n){return{}}return i&&(t=Zt(i,a())),{c(){t&&be(t.$$.fragment),o=S()},l(n){t&&Me(t.$$.fragment,n),o=C(n)},m(n,u){t&&Re(t,n,u),y(n,o,u),r=!0},p(n,u){if(i!==(i=n[1].component)){if(t){Mt();const s=t;J(s.$$.fragment,1,0,()=>{Le(s,1)}),Bt()}i?(t=Zt(i,a()),be(t.$$.fragment),K(t.$$.fragment,1),Re(t,o.parentNode,o)):t=null}},i(n){r||(t&&K(t.$$.fragment,n),r=!0)},o(n){t&&J(t.$$.fragment,n),r=!1},d(n){t&&Le(t,n),n&&h(o)}}}function Eo(e){let t,o;return t=new bo({props:{$$slots:{default:[lr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){Me(t.$$.fragment,r)},m(r,i){Re(t,r,i),o=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){o||(K(t.$$.fragment,r),o=!0)},o(r){J(t.$$.fragment,r),o=!1},d(r){Le(t,r)}}}function dr(e){let t,o,r,i,a,n;t=new No({props:{$$slots:{default:[sr]},$$scope:{ctx:e}}}),r=new bo({props:{$$slots:{default:[cr]},$$scope:{ctx:e}}});let u=e[0],s=[];for(let l=0;l<u.length;l+=1)s[l]=Eo(_o(e,u,l));const c=l=>J(s[l],1,1,()=>{s[l]=null});return{c(){be(t.$$.fragment),o=S(),be(r.$$.fragment),i=S();for(let l=0;l<s.length;l+=1)s[l].c();a=_t()},l(l){Me(t.$$.fragment,l),o=C(l),Me(r.$$.fragment,l),i=C(l);for(let f=0;f<s.length;f+=1)s[f].l(l);a=_t()},m(l,f){Re(t,l,f),y(l,o,f),Re(r,l,f),y(l,i,f);for(let _=0;_<s.length;_+=1)s[_].m(l,f);y(l,a,f),n=!0},p(l,f){const _={};f&64&&(_.$$scope={dirty:f,ctx:l}),t.$set(_);const x={};if(f&64&&(x.$$scope={dirty:f,ctx:l}),r.$set(x),f&1){u=l[0];let p;for(p=0;p<u.length;p+=1){const m=_o(l,u,p);s[p]?(s[p].p(m,f),K(s[p],1)):(s[p]=Eo(m),s[p].c(),K(s[p],1),s[p].m(a.parentNode,a))}for(Mt(),p=u.length;p<s.length;p+=1)c(p);Bt()}},i(l){if(!n){K(t.$$.fragment,l),K(r.$$.fragment,l);for(let f=0;f<u.length;f+=1)K(s[f]);n=!0}},o(l){J(t.$$.fragment,l),J(r.$$.fragment,l),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)J(s[f]);n=!1},d(l){Le(t,l),l&&h(o),Le(r,l),l&&h(i),Ao(s,l),l&&h(a)}}}function fr(e){let t,o,r;return o=new Bo({props:{$$slots:{default:[dr]},$$scope:{ctx:e}}}),{c(){t=E("div"),be(o.$$.fragment)},l(i){t=w(i,"DIV",{});var a=R(t);Me(o.$$.fragment,a),a.forEach(h)},m(i,a){y(i,t,a),Re(o,t,null),r=!0},p(i,[a]){const n={};a&64&&(n.$$scope={dirty:a,ctx:i}),o.$set(n)},i(i){r||(K(o.$$.fragment,i),r=!0)},o(i){J(o.$$.fragment,i),r=!1},d(i){i&&h(t),Le(o)}}}function mr(e){return[[{title:"V4",component:ir},{title:"V3",component:Bn},{title:"V2",component:wn},{title:"V1",component:on}]]}class hr extends Ye{constructor(t){super(),Ke(this,t,mr,fr,qe,{})}}function pr(e){let t,o;return t=new hr({}),{c(){be(t.$$.fragment)},l(r){Me(t.$$.fragment,r)},m(r,i){Re(t,r,i),o=!0},p:Q,i(r){o||(K(t.$$.fragment,r),o=!0)},o(r){J(t.$$.fragment,r),o=!1},d(r){Le(t,r)}}}class gr extends Ye{constructor(t){super(),Ke(this,t,null,pr,qe,{})}}export{gr as default};
