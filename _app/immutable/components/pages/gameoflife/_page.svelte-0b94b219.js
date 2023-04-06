import{S as qe,i as Ze,s as je,k as _,a as L,q as v,l as x,m as w,h as m,c as S,r as E,n as A,p as At,b as F,D as c,O as ce,K as $,R as io,u as Te,P as fe,B as de,M as ao,o as Rt,w as ve,x as Fe,y as Ee,f as G,t as q,z as be,e as lt,g as gt,d as Lt,L as uo,v as Mt}from"../../../chunks/index-46ced799.js";import{T as xo,a as To,b as lo,c as so}from"../../../chunks/TabPanel-3f95d051.js";import{_ as vo}from"../../../chunks/preload-helper-41c905a7.js";const Eo=["VERTEX_SHADER","FRAGMENT_SHADER"];function bo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return wo(t),t}function wo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function co(e,t,o,n){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function Nt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function fo(e,t,o,n,i){const a=[];for(let f=0;f<t.length;++f){const u=Eo[f]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=Ao(e,t[f],u,i);if(!l)throw"Can not create shader";a.push(l)}const r=Ro(e,a,o,n,i);if(!r)throw"Can not create program";return r}function Ao(e,t,o,n){const i=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const f=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+f+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(a),null}return a}function Ro(e,t,o,n,i){const a=i||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(u){e.attachShader(r,u)}),o&&o.forEach(function(u,l){e.bindAttribLocation(r,n?n[l]:l,u)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const u=e.getProgramInfoLog(r);return a("Error in program linking:"+u),e.deleteProgram(r),null}return r}function go(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const Lo=`attribute vec2 a_position;
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

`,So=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let Oe,Ge,ot;const Co=(e,t)=>{const{screenDimensions:o}=t,{height:n,width:i}=o;if(Ge=fo(e,[Lo,So]),Oe={positionLocation:e.getAttribLocation(Ge,"a_position"),textureLocation:e.getUniformLocation(Ge,"u_texture"),worldSizeLocation:e.getUniformLocation(Ge,"u_worldSize")},ot=e.createBuffer(),!ot)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ot),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,n,i,0,i,0,0,n,i,n]),e.STATIC_DRAW)},Do=e=>{const{gl:t,cellsTex:o,worldDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ge),t.bindBuffer(t.ARRAY_BUFFER,ot),t.enableVertexAttribArray(Oe.positionLocation),t.vertexAttribPointer(Oe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Oe.textureLocation,0),t.uniform2f(Oe.worldSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6)};function Fo(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:i,disableFullscreen:n}}function Wt(e,t){const{worldDimensions:o}=t,n=o.width*o.height,i=new Array(n).fill(0).map(r=>Math.random()<.5?1:0);return{cellsTex:co(e,new Float32Array(i.map(r=>[r,0,0,0]).flat()),o.width,o.height)}}const yo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Io=`precision highp float;

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
`;let ke,Ve,Et,Qe,xt,Xt,Ot,He,nt;const Gt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Ve=fo(e,[yo,Io]),ke={uInputTextureLocation:e.getUniformLocation(Ve,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ve,"uTextureSize"),positionLocation:e.getAttribLocation(Ve,"aPosition")},Et=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Et),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Qe=o,xt=co(e,null,n.width,n.height),Xt=Nt(e,Qe),Ot=Nt(e,xt),He={fb:Xt,tex:Qe},nt={fb:Ot,tex:xt},Qe},Po=e=>{const{gl:t,worldDimensions:o,screenDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,nt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,Et),t.enableVertexAttribArray(ke.positionLocation),t.vertexAttribPointer(ke.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,He.tex),t.useProgram(Ve),t.uniform1i(ke.uInputTextureLocation,0),t.uniform2f(ke.uTextureSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6);{const i=He;He=nt,nt=i}return He.tex};function $o(e){let t,o,n,i,a=e[1]?"Play":"Pause",r,f,u,l,s,h,b=e[0].width+"",T,d,R=e[0].height+"",y,I,k=e[0].width*e[0].height+"",ne,Z,he,K,W,N,j,Q,ee,V,H,re,B,p,P,me,pe,U,ye,ie,ae,Ie,X,O,_e;return{c(){t=_("canvas"),o=L(),n=_("div"),i=_("button"),r=v(a),f=v(" (Space)"),u=L(),l=_("div"),s=_("span"),h=v("World "),T=v(b),d=v(" x "),y=v(R),I=v(" ("),ne=v(k),Z=v(" cells)"),he=L(),K=_("button"),W=v("Reload program"),N=L(),j=_("button"),Q=v("Fullscreen (f)"),ee=L(),V=_("div"),H=_("button"),re=v("Reset world (r)"),B=L(),p=_("span"),P=_("label"),me=v("World: width"),pe=L(),U=_("input"),ye=L(),ie=_("label"),ae=v("height"),Ie=L(),X=_("input"),this.h()},l(g){t=x(g,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(t).forEach(m),o=S(g),n=x(g,"DIV",{});var z=w(n);i=x(z,"BUTTON",{});var ue=w(i);r=E(ue,a),f=E(ue," (Space)"),ue.forEach(m),z.forEach(m),u=S(g),l=x(g,"DIV",{});var le=w(l);s=x(le,"SPAN",{});var J=w(s);h=E(J,"World "),T=E(J,b),d=E(J," x "),y=E(J,R),I=E(J," ("),ne=E(J,k),Z=E(J," cells)"),J.forEach(m),he=S(le),K=x(le,"BUTTON",{});var se=w(K);W=E(se,"Reload program"),se.forEach(m),N=S(le),j=x(le,"BUTTON",{});var xe=w(j);Q=E(xe,"Fullscreen (f)"),xe.forEach(m),le.forEach(m),ee=S(g),V=x(g,"DIV",{});var we=w(V);H=x(we,"BUTTON",{});var Be=w(H);re=E(Be,"Reset world (r)"),Be.forEach(m),B=S(we),p=x(we,"SPAN",{});var M=w(p);P=x(M,"LABEL",{for:!0});var Me=w(P);me=E(Me,"World: width"),Me.forEach(m),pe=S(M),U=x(M,"INPUT",{id:!0,type:!0,min:!0}),ye=S(M),ie=x(M,"LABEL",{for:!0});var Y=w(ie);ae=E(Y,"height"),Y.forEach(m),Ie=S(M),X=x(M,"INPUT",{id:!0,type:!0,min:!0}),M.forEach(m),we.forEach(m),this.h()},h(){A(t,"id","canvas"),At(t,"background-color","black"),A(t,"width",e[3].width),A(t,"height",e[3].height),A(P,"for","worldWidth"),A(U,"id","worldWidth"),A(U,"type","number"),A(U,"min",0),A(ie,"for","worldHeight"),A(X,"id","worldHeight"),A(X,"type","number"),A(X,"min",0)},m(g,z){F(g,t,z),F(g,o,z),F(g,n,z),c(n,i),c(i,r),c(i,f),F(g,u,z),F(g,l,z),c(l,s),c(s,h),c(s,T),c(s,d),c(s,y),c(s,I),c(s,ne),c(s,Z),c(l,he),c(l,K),c(K,W),c(l,N),c(l,j),c(j,Q),F(g,ee,z),F(g,V,z),c(V,H),c(H,re),c(V,B),c(V,p),c(p,P),c(P,me),c(p,pe),c(p,U),ce(U,e[0].width),c(p,ye),c(p,ie),c(ie,ae),c(p,Ie),c(p,X),ce(X,e[0].height),O||(_e=[$(i,"click",e[6]),$(K,"click",e[7]),$(j,"click",function(){io(e[2])&&e[2].apply(this,arguments)}),$(H,"click",e[5]),$(U,"change",e[5]),$(U,"input",e[8]),$(X,"change",e[5]),$(X,"input",e[9])],O=!0)},p(g,[z]){e=g,z&2&&a!==(a=e[1]?"Play":"Pause")&&Te(r,a),z&1&&b!==(b=e[0].width+"")&&Te(T,b),z&1&&R!==(R=e[0].height+"")&&Te(y,R),z&1&&k!==(k=e[0].width*e[0].height+"")&&Te(ne,k),z&1&&fe(U.value)!==e[0].width&&ce(U,e[0].width),z&1&&fe(X.value)!==e[0].height&&ce(X,e[0].height)},i:de,o:de,d(g){g&&m(t),g&&m(o),g&&m(n),g&&m(u),g&&m(l),g&&m(ee),g&&m(V),O=!1,ao(_e)}}}function Uo(e,t,o){const n={width:1600,height:900},i={width:1600,height:900};let a=!0,r,f,u;function l(){cancelAnimationFrame(u),f=bo(),go(f.canvas);const y=Wt(f,{worldDimensions:i});r=Gt(f,{cellsTex:y.cellsTex,texDimensions:i}),Co(f,{screenDimensions:n});function I(){return a||(r=Po({gl:f,worldDimensions:i,screenDimensions:n})),Do({gl:f,cellsTex:r,worldDimensions:i}),u=requestAnimationFrame(I)}u=requestAnimationFrame(I)}let s;Rt(()=>{l(),o(2,s=Fo(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",y=>{if(y.code==="Space"&&(o(1,a=!a),y.preventDefault()),y.code==="KeyF"){s();return}if(y.code==="KeyR"){h();return}})});const h=()=>{o(0,i.width=Math.min(i.width,n.width),i),o(0,i.height=Math.min(i.height,n.height),i);const y=Wt(f,{worldDimensions:i});r=Gt(f,{cellsTex:y.cellsTex,texDimensions:i})},b=()=>o(1,a=!a),T=()=>l();function d(){i.width=fe(this.value),o(0,i)}function R(){i.height=fe(this.value),o(0,i)}return[i,a,s,n,l,h,b,T,d,R]}class zo extends qe{constructor(t){super(),Ze(this,t,Uo,$o,je,{})}}const Bo=["VERTEX_SHADER","FRAGMENT_SHADER"];function Mo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return No(t),t}function No(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ho(e,t,o,n){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function kt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function mo(e,t,o,n,i){const a=[];for(let f=0;f<t.length;++f){const u=Bo[f]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=Wo(e,t[f],u,i);if(!l)throw"Can not create shader";a.push(l)}const r=Xo(e,a,o,n,i);if(!r)throw"Can not create program";return r}function Wo(e,t,o,n){const i=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const f=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+f+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(a),null}return a}function Xo(e,t,o,n,i){const a=i||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(u){e.attachShader(r,u)}),o&&o.forEach(function(u,l){e.bindAttribLocation(r,n?n[l]:l,u)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const u=e.getProgramInfoLog(r);return a("Error in program linking:"+u),e.deleteProgram(r),null}return r}function Oo(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const Go=`precision mediump float;
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
`,ko=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Vo=`precision mediump float;
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

`;let Pe,$e,rt;const Ho=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:i,width:a}=o;let r=ko;if(n==="gradiant"&&(r=Vo),$e=mo(e,[Go,r]),Pe={positionLocation:e.getAttribLocation($e,"a_position"),textureLocation:e.getUniformLocation($e,"u_texture"),worldSizeLocation:e.getUniformLocation($e,"u_worldSize"),zoomLocation:e.getUniformLocation($e,"u_zoom"),panLocation:e.getUniformLocation($e,"u_pan")},rt=e.createBuffer(),!rt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,rt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Yo=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:i,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram($e),t.bindBuffer(t.ARRAY_BUFFER,rt),t.enableVertexAttribArray(Pe.positionLocation),t.vertexAttribPointer(Pe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Pe.textureLocation,0),t.uniform2f(Pe.worldSizeLocation,n.width,n.height),t.uniform1f(Pe.zoomLocation,Math.max(i,1)),t.uniform2f(Pe.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function Ko(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:i,disableFullscreen:n}}function Vt(e,t){const{worldDimensions:o,initialDensity:n,mode:i}=t;let a=n;a>1&&(a=1);const r=o.width*o.height;let f=new Array(r).fill(0);return i==="random"&&(f=f.map(l=>Math.random()<a?1:0)),{cellsTex:ho(e,new Float32Array(f.map((l,s)=>[l,s,0,0]).flat()),o.width,o.height)}}const qo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Zo=`precision highp float;

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
`;let Le,Se,bt,et,Tt,Ht,Yt,Ye,it;const Kt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Se=mo(e,[qo,Zo]),Le={uInputTextureLocation:e.getUniformLocation(Se,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Se,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Se,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Se,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Se,"uInfiniteSource"),positionLocation:e.getAttribLocation(Se,"aPosition")},bt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,bt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),et=o,Tt=ho(e,null,n.width,n.height),Ht=kt(e,et),Yt=kt(e,Tt),Ye={fb:Ht,tex:et},it={fb:Yt,tex:Tt},et},jo=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:i,mouseMode:a,infiniteSource:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,it.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,bt),t.enableVertexAttribArray(Le.positionLocation),t.vertexAttribPointer(Le.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ye.tex),t.useProgram(Se),t.uniform1i(Le.uInputTextureLocation,0),t.uniform2f(Le.uTextureSizeLocation,o.width,o.height),t.uniform2f(Le.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Le.uMouseModeLocation,a),t.uniform1i(Le.uInfiniteSourceLocation,r?1:0),t.drawArrays(t.TRIANGLES,0,6);{const f=Ye;Ye=it,it=f}return Ye.tex};function Jo(e){let t,o,n,i,a=e[5]?"Play":"Pause",r,f,u,l,s=e[2]?"Disable":"Enable",h,b,T,d,R,y,I,k,ne,Z,he,K,W,N,j,Q=e[0].width+"",ee,V,H=e[0].height+"",re,B,p=e[0].width*e[0].height+"",P,me,pe,U,ye,ie,ae,Ie,X,O,_e,g,z,ue,le,J,se,xe,we,Be,M,Me,Y,Ne,st,ct,te,ft,We,dt,ht,oe,mt,St;return{c(){t=_("canvas"),o=L(),n=_("div"),i=_("button"),r=v(a),f=v(" (Space)"),u=L(),l=_("button"),h=v(s),b=v(" constant cells generation (E)"),T=L(),d=_("button"),R=v("Zoom in (I)"),y=L(),I=_("button"),k=v("Zoom out (O)"),ne=L(),Z=_("button"),he=v("Reset zoom (Z)"),K=L(),W=_("div"),N=_("span"),j=v("World "),ee=v(Q),V=v(" x "),re=v(H),B=v(" ("),P=v(p),me=v(" cells)"),pe=L(),U=_("button"),ye=v("Reload program"),ie=L(),ae=_("button"),Ie=v("Fullscreen (f)"),X=L(),O=_("div"),_e=_("button"),g=v("Reset world (R)"),z=L(),ue=_("button"),le=v("Empty world (E)"),J=L(),se=_("span"),xe=_("label"),we=v("Initial density [0-1]"),Be=L(),M=_("input"),Me=L(),Y=_("span"),Ne=_("label"),st=v("World: width"),ct=L(),te=_("input"),ft=L(),We=_("label"),dt=v("height"),ht=L(),oe=_("input"),this.h()},l(D){t=x(D,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(t).forEach(m),o=S(D),n=x(D,"DIV",{});var C=w(n);i=x(C,"BUTTON",{});var pt=w(i);r=E(pt,a),f=E(pt," (Space)"),pt.forEach(m),u=S(C),l=x(C,"BUTTON",{});var _t=w(l);h=E(_t,s),b=E(_t," constant cells generation (E)"),_t.forEach(m),T=S(C),d=x(C,"BUTTON",{});var Ct=w(d);R=E(Ct,"Zoom in (I)"),Ct.forEach(m),y=S(C),I=x(C,"BUTTON",{});var Dt=w(I);k=E(Dt,"Zoom out (O)"),Dt.forEach(m),ne=S(C),Z=x(C,"BUTTON",{});var Ft=w(Z);he=E(Ft,"Reset zoom (Z)"),Ft.forEach(m),C.forEach(m),K=S(D),W=x(D,"DIV",{});var Xe=w(W);N=x(Xe,"SPAN",{});var Ae=w(N);j=E(Ae,"World "),ee=E(Ae,Q),V=E(Ae," x "),re=E(Ae,H),B=E(Ae," ("),P=E(Ae,p),me=E(Ae," cells)"),Ae.forEach(m),pe=S(Xe),U=x(Xe,"BUTTON",{});var yt=w(U);ye=E(yt,"Reload program"),yt.forEach(m),ie=S(Xe),ae=x(Xe,"BUTTON",{});var It=w(ae);Ie=E(It,"Fullscreen (f)"),It.forEach(m),Xe.forEach(m),X=S(D),O=x(D,"DIV",{});var Re=w(O);_e=x(Re,"BUTTON",{});var Pt=w(_e);g=E(Pt,"Reset world (R)"),Pt.forEach(m),z=S(Re),ue=x(Re,"BUTTON",{});var $t=w(ue);le=E($t,"Empty world (E)"),$t.forEach(m),J=S(Re),se=x(Re,"SPAN",{});var Je=w(se);xe=x(Je,"LABEL",{for:!0});var Ut=w(xe);we=E(Ut,"Initial density [0-1]"),Ut.forEach(m),Be=S(Je),M=x(Je,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Je.forEach(m),Me=S(Re),Y=x(Re,"SPAN",{});var ge=w(Y);Ne=x(ge,"LABEL",{for:!0});var zt=w(Ne);st=E(zt,"World: width"),zt.forEach(m),ct=S(ge),te=x(ge,"INPUT",{id:!0,type:!0,min:!0}),ft=S(ge),We=x(ge,"LABEL",{for:!0});var Bt=w(We);dt=E(Bt,"height"),Bt.forEach(m),ht=S(ge),oe=x(ge,"INPUT",{id:!0,type:!0,min:!0}),ge.forEach(m),Re.forEach(m),this.h()},h(){A(t,"id","canvas"),At(t,"background-color","black"),A(t,"width",e[7].width),A(t,"height",e[7].height),A(xe,"for","initialDensity"),A(M,"id","initialDensity"),A(M,"type","number"),A(M,"min",0),A(M,"max",1),A(Ne,"for","worldWidth"),A(te,"id","worldWidth"),A(te,"type","number"),A(te,"min",0),A(We,"for","worldHeight"),A(oe,"id","worldHeight"),A(oe,"type","number"),A(oe,"min",0)},m(D,C){F(D,t,C),F(D,o,C),F(D,n,C),c(n,i),c(i,r),c(i,f),c(n,u),c(n,l),c(l,h),c(l,b),c(n,T),c(n,d),c(d,R),c(n,y),c(n,I),c(I,k),c(n,ne),c(n,Z),c(Z,he),F(D,K,C),F(D,W,C),c(W,N),c(N,j),c(N,ee),c(N,V),c(N,re),c(N,B),c(N,P),c(N,me),c(W,pe),c(W,U),c(U,ye),c(W,ie),c(W,ae),c(ae,Ie),F(D,X,C),F(D,O,C),c(O,_e),c(_e,g),c(O,z),c(O,ue),c(ue,le),c(O,J),c(O,se),c(se,xe),c(xe,we),c(se,Be),c(se,M),ce(M,e[4]),c(O,Me),c(O,Y),c(Y,Ne),c(Ne,st),c(Y,ct),c(Y,te),ce(te,e[0].width),c(Y,ft),c(Y,We),c(We,dt),c(Y,ht),c(Y,oe),ce(oe,e[0].height),mt||(St=[$(i,"click",e[10]),$(l,"click",e[11]),$(d,"click",e[12]),$(I,"click",e[13]),$(Z,"click",e[14]),$(U,"click",e[15]),$(ae,"click",function(){io(e[6])&&e[6].apply(this,arguments)}),$(_e,"click",e[16]),$(ue,"click",e[17]),$(M,"input",e[18]),$(te,"change",e[19]),$(te,"input",e[20]),$(oe,"change",e[21]),$(oe,"input",e[22])],mt=!0)},p(D,[C]){e=D,C&32&&a!==(a=e[5]?"Play":"Pause")&&Te(r,a),C&4&&s!==(s=e[2]?"Disable":"Enable")&&Te(h,s),C&1&&Q!==(Q=e[0].width+"")&&Te(ee,Q),C&1&&H!==(H=e[0].height+"")&&Te(re,H),C&1&&p!==(p=e[0].width*e[0].height+"")&&Te(P,p),C&16&&fe(M.value)!==e[4]&&ce(M,e[4]),C&1&&fe(te.value)!==e[0].width&&ce(te,e[0].width),C&1&&fe(oe.value)!==e[0].height&&ce(oe,e[0].height)},i:de,o:de,d(D){D&&m(t),D&&m(o),D&&m(n),D&&m(K),D&&m(W),D&&m(X),D&&m(O),mt=!1,ao(St)}}}function Qo(e,t,o){const n={width:1200,height:900},i={width:1200,height:900},a={x:-100,y:-100},r={x:0,y:0};let f=0,u=!0,l=1,s=.05,h=!0,b,T,d;function R(){cancelAnimationFrame(d),T=Mo(),Oo(T.canvas);const B=Vt(T,{mode:"random",worldDimensions:i,initialDensity:s});b=Kt(T,{cellsTex:B.cellsTex,texDimensions:i}),Ho(T,{screenDimensions:n,mode:"gradiant"});function p(){h||(b=jo({gl:T,worldDimensions:i,screenDimensions:n,mouseCoordinates:a,mouseMode:f,infiniteSource:u}));const P=.005;return a.x<.2&&r.x>=P&&o(1,r.x-=P,r),a.x>.8&&r.x<1-1/l&&o(1,r.x+=P,r),a.y<.2&&r.y>=P&&o(1,r.y-=P,r),a.y>.8&&r.y<1-1/l&&o(1,r.y+=P,r),Yo({gl:T,cellsTex:b,worldDimensions:i,zoomLevel:l,pan:r}),d=requestAnimationFrame(p)}d=requestAnimationFrame(p)}let y;Rt(()=>{R(),o(6,y=Ko(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",p=>{if(p.code==="Space"&&(o(5,h=!h),p.preventDefault()),p.code==="KeyF"){y();return}if(p.code==="KeyR"){I("random");return}if(p.code==="KeyE"){I("zero");return}if(p.code==="KeyI"){o(3,l++,l);return}if(p.code==="KeyS"){o(2,u=!u);return}if(p.code==="KeyO"){o(3,l=Math.max(l-1,1)),l===1&&(o(1,r.x=0,r),o(1,r.y=0,r));return}if(p.code==="KeyZ"){o(3,l=1),o(1,r.x=0,r),o(1,r.y=0,r);return}});const B=document.getElementById("canvas");if(!B)throw new Error("Canvas unavailable");B.addEventListener("mousemove",p=>{const P=B.getBoundingClientRect(),me=B.width/P.width,pe=B.height/P.height,U={x:(p.clientX-P.left)*me,y:(p.clientY-P.top)*pe};a.x=U.x/n.width,a.y=U.y/n.height}),B.addEventListener("mousedown",p=>{p.preventDefault(),p.button===0?f=1:p.button===2&&(f=2)}),B.addEventListener("mouseup",p=>{p.preventDefault(),f=0}),B.addEventListener("contextmenu",p=>(p.preventDefault(),!1))});const I=B=>{o(0,i.width=Math.min(i.width,n.width),i),o(0,i.height=Math.min(i.height,n.height),i);const p=Vt(T,{mode:B,worldDimensions:i,initialDensity:s});b=Kt(T,{cellsTex:p.cellsTex,texDimensions:i})},k=()=>o(5,h=!h),ne=()=>o(2,u=!u),Z=()=>o(3,l+=1),he=()=>{o(3,l=Math.max(l-1,1)),l===1&&(o(1,r.x=0,r),o(1,r.y=0,r))},K=()=>o(3,l=1),W=()=>R(),N=()=>I("random"),j=()=>I("zero");function Q(){s=fe(this.value),o(4,s)}const ee=()=>I("random");function V(){i.width=fe(this.value),o(0,i)}const H=()=>I("random");function re(){i.height=fe(this.value),o(0,i)}return[i,r,u,l,s,h,y,n,R,I,k,ne,Z,he,K,W,N,j,Q,ee,V,H,re]}class en extends qe{constructor(t){super(),Ze(this,t,Qo,Jo,je,{})}}const tn=["VERTEX_SHADER","FRAGMENT_SHADER"];function on(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return nn(t),t}function nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function po(e,t,o,n){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function qt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function _o(e,t,o,n,i){const a=[];for(let f=0;f<t.length;++f){const u=tn[f]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=rn(e,t[f],u,i);if(!l)throw"Can not create shader";a.push(l)}const r=an(e,a,o,n,i);if(!r)throw"Can not create program";return r}function rn(e,t,o,n){const i=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const f=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+f+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(a),null}return a}function an(e,t,o,n,i){const a=i||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(u){e.attachShader(r,u)}),o&&o.forEach(function(u,l){e.bindAttribLocation(r,n?n[l]:l,u)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const u=e.getProgramInfoLog(r);return a("Error in program linking:"+u),e.deleteProgram(r),null}return r}function un(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const ln=`precision mediump float;
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
`,sn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,cn=`precision mediump float;
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

`;let Ue,ze,at;const Zt=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:i,width:a}=o;let r=sn;if(n==="gradiant"&&(r=cn),ze=_o(e,[ln,r]),Ue={positionLocation:e.getAttribLocation(ze,"a_position"),textureLocation:e.getUniformLocation(ze,"u_texture"),worldSizeLocation:e.getUniformLocation(ze,"u_worldSize"),zoomLocation:e.getUniformLocation(ze,"u_zoom"),panLocation:e.getUniformLocation(ze,"u_pan")},at=e.createBuffer(),!at)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,at),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},fn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:i,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(ze),t.bindBuffer(t.ARRAY_BUFFER,at),t.enableVertexAttribArray(Ue.positionLocation),t.vertexAttribPointer(Ue.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ue.textureLocation,0),t.uniform2f(Ue.worldSizeLocation,n.width,n.height),t.uniform1f(Ue.zoomLocation,Math.max(i,1)),t.uniform2f(Ue.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function jt(e,t){const{worldDimensions:o,initialDensity:n,mode:i}=t;let a=n;a>1&&(a=1);const r=o.width*o.height;let f=new Array(r).fill(0);return i==="random"&&(f=f.map(l=>Math.random()<a?1:0)),{cellsTex:po(e,new Float32Array(f.map((l,s)=>[l,s,0,0]).flat()),o.width,o.height)}}const dn=` attribute vec2 aPosition;

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
`;let Ce,De,wt,tt,vt,Jt,Qt,Ke,ut;const eo=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return De=_o(e,[dn,hn]),Ce={uInputTextureLocation:e.getUniformLocation(De,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(De,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(De,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(De,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(De,"uInfiniteSource"),positionLocation:e.getAttribLocation(De,"aPosition")},wt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,wt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),tt=o,vt=po(e,null,n.width,n.height),Jt=qt(e,tt),Qt=qt(e,vt),Ke={fb:Jt,tex:tt},ut={fb:Qt,tex:vt},tt},mn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:i,mouseMode:a,infiniteSource:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,ut.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,wt),t.enableVertexAttribArray(Ce.positionLocation),t.vertexAttribPointer(Ce.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ke.tex),t.useProgram(De),t.uniform1i(Ce.uInputTextureLocation,0),t.uniform2f(Ce.uTextureSizeLocation,o.width,o.height),t.uniform2f(Ce.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Ce.uMouseModeLocation,a),t.uniform1i(Ce.uInfiniteSourceLocation,r?1:0),t.drawArrays(t.TRIANGLES,0,6);{const f=Ke;Ke=ut,ut=f}return Ke.tex};function pn(e){let t;return{c(){t=_("canvas"),this.h()},l(o){t=x(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),w(t).forEach(m),this.h()},h(){A(t,"id","canvas"),At(t,"background-color","black"),A(t,"width",e[0].width),A(t,"height",e[0].height),A(t,"class","svelte-1b0ol19")},m(o,n){F(o,t,n)},p:de,i:de,o:de,d(o){o&&m(t)}}}function _n(e){const t={x:0,y:0};let o=0,n;const i={width:window.innerWidth-50,height:window.innerHeight-10},a={x:0,y:0},r={Pause:!0,"Infinite source":!0,Iteration:0,TimeInSeconds:0,"Draw mode":"white","Reset grid":()=>b("random"),"Empty grid":()=>b("zero"),"Initial density":.05,"World width":i.width,"World height":i.height,Cells:(i.width*i.height).toString(),"Zoom level":1,"Pan reset":()=>{a.x=0,a.y=0},"Reload progam":()=>h()},f=async()=>{const T=await vo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),d=new T.GUI;d.add(r,"Pause").listen(),d.add(r,"Infinite source").listen(),d.add(r,"TimeInSeconds").listen(),d.add(r,"Iteration").listen(),d.add(r,"Draw mode",{White:"white",Gradiant:"gradiant"}).onFinishChange(()=>Zt(u,{screenDimensions:i,mode:r["Draw mode"]})),d.add(r,"Reset grid"),d.add(r,"Empty grid"),d.add(r,"Initial density",0,1,.01).onFinishChange(()=>b("random")),d.add(r,"World width",1,i.width,1).onFinishChange(()=>{r.Cells=(r["World height"]*r["World width"]).toString(),b("random")}),d.add(r,"World height",1,i.height,1).onFinishChange(()=>{r.Cells=(r["World height"]*r["World width"]).toString(),b("random")}),d.add(r,"Cells").listen(),d.add(r,"Zoom level",1,10),d.add(r,"Pan reset"),d.add(r,"Reload progam")};let u,l,s;function h(){n=Date.now(),cancelAnimationFrame(s),u=on(),un(u.canvas);const T=jt(u,{mode:"random",worldDimensions:{width:r["World width"],height:r["World height"]},initialDensity:r["Initial density"]});l=eo(u,{cellsTex:T.cellsTex,texDimensions:{width:r["World width"],height:r["World height"]}}),Zt(u,{screenDimensions:i,mode:r["Draw mode"]});function d(){r.Pause||(r.TimeInSeconds=(Date.now()-n)/1e3,r.Iteration++,l=mn({gl:u,worldDimensions:{width:r["World width"],height:r["World height"]},screenDimensions:i,mouseCoordinates:t,mouseMode:o,infiniteSource:r["Infinite source"]}));const R=.005;return t.x<.1&&a.x>=R&&(a.x-=R),t.x>.9&&a.x<1-1/r["Zoom level"]&&(a.x+=R),t.y<.1&&a.y>=R&&(a.y-=R),t.y>.9&&a.y<1-1/r["Zoom level"]&&(a.y+=R),fn({gl:u,cellsTex:l,worldDimensions:{width:r["World width"],height:r["World height"]},zoomLevel:r["Zoom level"],pan:a}),s=requestAnimationFrame(d)}s=requestAnimationFrame(d)}Rt(()=>{h(),f(),document.addEventListener("keydown",d=>{if(d.code==="Space"&&(r.Pause=!r.Pause,d.preventDefault()),d.code==="KeyR"){b("random");return}if(d.code==="KeyE"){b("zero");return}if(d.code==="KeyS"){r["Infinite source"]=!r["Infinite source"];return}});const T=document.getElementById("canvas");if(!T)throw new Error("Canvas unavailable");T.addEventListener("mousemove",d=>{const R=T.getBoundingClientRect(),y=T.width/R.width,I=T.height/R.height,k={x:(d.clientX-R.left)*y,y:(d.clientY-R.top)*I};t.x=k.x/i.width,t.y=k.y/i.height}),T.addEventListener("mousedown",d=>{d.preventDefault(),d.button===0?o=1:d.button===2&&(o=2)}),T.addEventListener("mouseup",d=>{d.preventDefault(),o=0}),T.addEventListener("contextmenu",d=>(d.preventDefault(),!1))});const b=T=>{const d=jt(u,{mode:T,worldDimensions:{width:r["World width"],height:r["World height"]},initialDensity:r["Initial density"]});l=eo(u,{cellsTex:d.cellsTex,texDimensions:{width:r["World width"],height:r["World height"]}})};return[i]}class xn extends qe{constructor(t){super(),Ze(this,t,_n,pn,je,{})}}function to(e,t,o){const n=e.slice();return n[1]=t[o],n}function oo(e,t,o){const n=e.slice();return n[1]=t[o],n}function Tn(e){let t;return{c(){t=v("About")},l(o){t=E(o,"About")},m(o,n){F(o,t,n)},d(o){o&&m(t)}}}function vn(e){let t=e[1].title+"",o;return{c(){o=v(t)},l(n){o=E(n,t)},m(n,i){F(n,o,i)},p:de,d(n){n&&m(o)}}}function no(e){let t,o;return t=new so({props:{$$slots:{default:[vn]},$$scope:{ctx:e}}}),{c(){ve(t.$$.fragment)},l(n){Fe(t.$$.fragment,n)},m(n,i){Ee(t,n,i),o=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),t.$set(a)},i(n){o||(G(t.$$.fragment,n),o=!0)},o(n){q(t.$$.fragment,n),o=!1},d(n){be(t,n)}}}function En(e){let t,o,n,i;t=new so({props:{$$slots:{default:[Tn]},$$scope:{ctx:e}}});let a=e[0],r=[];for(let u=0;u<a.length;u+=1)r[u]=no(oo(e,a,u));const f=u=>q(r[u],1,1,()=>{r[u]=null});return{c(){ve(t.$$.fragment),o=L();for(let u=0;u<r.length;u+=1)r[u].c();n=lt()},l(u){Fe(t.$$.fragment,u),o=S(u);for(let l=0;l<r.length;l+=1)r[l].l(u);n=lt()},m(u,l){Ee(t,u,l),F(u,o,l);for(let s=0;s<r.length;s+=1)r[s].m(u,l);F(u,n,l),i=!0},p(u,l){const s={};if(l&64&&(s.$$scope={dirty:l,ctx:u}),t.$set(s),l&1){a=u[0];let h;for(h=0;h<a.length;h+=1){const b=oo(u,a,h);r[h]?(r[h].p(b,l),G(r[h],1)):(r[h]=no(b),r[h].c(),G(r[h],1),r[h].m(n.parentNode,n))}for(gt(),h=a.length;h<r.length;h+=1)f(h);Lt()}},i(u){if(!i){G(t.$$.fragment,u);for(let l=0;l<a.length;l+=1)G(r[l]);i=!0}},o(u){q(t.$$.fragment,u),r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)q(r[l]);i=!1},d(u){be(t,u),u&&m(o),uo(r,u),u&&m(n)}}}function bn(e){let t,o;return{c(){t=_("p"),o=v("Experiments running Conway's Game of Life in WebGL shaders.")},l(n){t=x(n,"P",{});var i=w(t);o=E(i,"Experiments running Conway's Game of Life in WebGL shaders."),i.forEach(m)},m(n,i){F(n,t,i),c(t,o)},p:de,d(n){n&&m(t)}}}function wn(e){let t,o,n;var i=e[1].component;function a(r){return{}}return i&&(t=Mt(i,a())),{c(){t&&ve(t.$$.fragment),o=L()},l(r){t&&Fe(t.$$.fragment,r),o=S(r)},m(r,f){t&&Ee(t,r,f),F(r,o,f),n=!0},p(r,f){if(i!==(i=r[1].component)){if(t){gt();const u=t;q(u.$$.fragment,1,0,()=>{be(u,1)}),Lt()}i?(t=Mt(i,a()),ve(t.$$.fragment),G(t.$$.fragment,1),Ee(t,o.parentNode,o)):t=null}},i(r){n||(t&&G(t.$$.fragment,r),n=!0)},o(r){t&&q(t.$$.fragment,r),n=!1},d(r){t&&be(t,r),r&&m(o)}}}function ro(e){let t,o;return t=new lo({props:{$$slots:{default:[wn]},$$scope:{ctx:e}}}),{c(){ve(t.$$.fragment)},l(n){Fe(t.$$.fragment,n)},m(n,i){Ee(t,n,i),o=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),t.$set(a)},i(n){o||(G(t.$$.fragment,n),o=!0)},o(n){q(t.$$.fragment,n),o=!1},d(n){be(t,n)}}}function An(e){let t,o,n,i,a,r;t=new To({props:{$$slots:{default:[En]},$$scope:{ctx:e}}}),n=new lo({props:{$$slots:{default:[bn]},$$scope:{ctx:e}}});let f=e[0],u=[];for(let s=0;s<f.length;s+=1)u[s]=ro(to(e,f,s));const l=s=>q(u[s],1,1,()=>{u[s]=null});return{c(){ve(t.$$.fragment),o=L(),ve(n.$$.fragment),i=L();for(let s=0;s<u.length;s+=1)u[s].c();a=lt()},l(s){Fe(t.$$.fragment,s),o=S(s),Fe(n.$$.fragment,s),i=S(s);for(let h=0;h<u.length;h+=1)u[h].l(s);a=lt()},m(s,h){Ee(t,s,h),F(s,o,h),Ee(n,s,h),F(s,i,h);for(let b=0;b<u.length;b+=1)u[b].m(s,h);F(s,a,h),r=!0},p(s,h){const b={};h&64&&(b.$$scope={dirty:h,ctx:s}),t.$set(b);const T={};if(h&64&&(T.$$scope={dirty:h,ctx:s}),n.$set(T),h&1){f=s[0];let d;for(d=0;d<f.length;d+=1){const R=to(s,f,d);u[d]?(u[d].p(R,h),G(u[d],1)):(u[d]=ro(R),u[d].c(),G(u[d],1),u[d].m(a.parentNode,a))}for(gt(),d=f.length;d<u.length;d+=1)l(d);Lt()}},i(s){if(!r){G(t.$$.fragment,s),G(n.$$.fragment,s);for(let h=0;h<f.length;h+=1)G(u[h]);r=!0}},o(s){q(t.$$.fragment,s),q(n.$$.fragment,s),u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)q(u[h]);r=!1},d(s){be(t,s),s&&m(o),be(n,s),s&&m(i),uo(u,s),s&&m(a)}}}function Rn(e){let t,o,n;return o=new xo({props:{$$slots:{default:[An]},$$scope:{ctx:e}}}),{c(){t=_("div"),ve(o.$$.fragment)},l(i){t=x(i,"DIV",{});var a=w(t);Fe(o.$$.fragment,a),a.forEach(m)},m(i,a){F(i,t,a),Ee(o,t,null),n=!0},p(i,[a]){const r={};a&64&&(r.$$scope={dirty:a,ctx:i}),o.$set(r)},i(i){n||(G(o.$$.fragment,i),n=!0)},o(i){q(o.$$.fragment,i),n=!1},d(i){i&&m(t),be(o)}}}function gn(e){return[[{title:"V1",component:zo},{title:"V2",component:en},{title:"V3",component:xn}]]}class Ln extends qe{constructor(t){super(),Ze(this,t,gn,Rn,je,{})}}function Sn(e){let t,o;return t=new Ln({}),{c(){ve(t.$$.fragment)},l(n){Fe(t.$$.fragment,n)},m(n,i){Ee(t,n,i),o=!0},p:de,i(n){o||(G(t.$$.fragment,n),o=!0)},o(n){q(t.$$.fragment,n),o=!1},d(n){be(t,n)}}}class yn extends qe{constructor(t){super(),Ze(this,t,null,Sn,je,{})}}export{yn as default};
