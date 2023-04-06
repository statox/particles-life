import{S as qe,i as Ze,s as je,k as T,a as g,q as E,l as v,m as w,h,c as L,r as b,n as A,p as At,b as F,D as f,O as ce,K as P,R as io,u as Te,P as fe,B as de,M as ao,o as Rt,w as ve,x as De,y as Ee,f as G,t as K,z as be,e as lt,g as gt,d as Lt,L as uo,v as Mt}from"../../../chunks/index-46ced799.js";import{T as xo,a as To,b as lo,c as so}from"../../../chunks/TabPanel-3f95d051.js";import{_ as vo}from"../../../chunks/preload-helper-41c905a7.js";const Eo=["VERTEX_SHADER","FRAGMENT_SHADER"];function bo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return wo(t),t}function wo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function co(e,t,n,o){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function Nt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function fo(e,t,n,o,i){const r=[];for(let c=0;c<t.length;++c){const u=Eo[c]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=Ao(e,t[c],u,i);if(!l)throw"Can not create shader";r.push(l)}const a=Ro(e,r,n,o,i);if(!a)throw"Can not create program";return a}function Ao(e,t,n,o){const i=o||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const c=e.getShaderInfoLog(r);return i(new Error("*** Error compiling shader '"+r+"':"+c+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(r),null}return r}function Ro(e,t,n,o,i){const r=i||console.log,a=e.createProgram();if(!a)throw"Could not create program";if(t.forEach(function(u){e.attachShader(a,u)}),n&&n.forEach(function(u,l){e.bindAttribLocation(a,o?o[l]:l,u)}),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const u=e.getProgramInfoLog(a);return r("Error in program linking:"+u),e.deleteProgram(a),null}return a}function go(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Lo=`attribute vec2 a_position;
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
`;let Oe,Ge,ot;const Co=(e,t)=>{const{screenDimensions:n}=t,{height:o,width:i}=n;if(Ge=fo(e,[Lo,So]),Oe={positionLocation:e.getAttribLocation(Ge,"a_position"),textureLocation:e.getUniformLocation(Ge,"u_texture"),worldSizeLocation:e.getUniformLocation(Ge,"u_worldSize")},ot=e.createBuffer(),!ot)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ot),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,o,i,0,i,0,0,o,i,o]),e.STATIC_DRAW)},Fo=e=>{const{gl:t,cellsTex:n,worldDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Ge),t.bindBuffer(t.ARRAY_BUFFER,ot),t.enableVertexAttribArray(Oe.positionLocation),t.vertexAttribPointer(Oe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Oe.textureLocation,0),t.uniform2f(Oe.worldSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6)};function Do(e,t,n){function o(){const r=e.getElementById(t);r&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),r.width=n.width,r.height=n.height)}function i(){const r=e.getElementById(t);r&&(e.fullscreenElement||r.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:i,disableFullscreen:o}}function Wt(e,t){const{worldDimensions:n}=t,o=n.width*n.height,i=new Array(o).fill(0).map(a=>Math.random()<.5?1:0);return{cellsTex:co(e,new Float32Array(i.map(a=>[a,0,0,0]).flat()),n.width,n.height)}}const yo=` attribute vec2 aPosition;

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
`;let ke,Ve,Et,Qe,xt,Xt,Ot,He,nt;const Gt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Ve=fo(e,[yo,Io]),ke={uInputTextureLocation:e.getUniformLocation(Ve,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ve,"uTextureSize"),positionLocation:e.getAttribLocation(Ve,"aPosition")},Et=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Et),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Qe=n,xt=co(e,null,o.width,o.height),Xt=Nt(e,Qe),Ot=Nt(e,xt),He={fb:Xt,tex:Qe},nt={fb:Ot,tex:xt},Qe},Po=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,nt.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,Et),t.enableVertexAttribArray(ke.positionLocation),t.vertexAttribPointer(ke.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,He.tex),t.useProgram(Ve),t.uniform1i(ke.uInputTextureLocation,0),t.uniform2f(ke.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const i=He;He=nt,nt=i}return He.tex};function $o(e){let t,n,o,i,r=e[1]?"Play":"Pause",a,c,u,l,s,d,x=e[0].width+"",m,p,z=e[0].height+"",y,D,J=e[0].width*e[0].height+"",ne,q,he,Y,W,N,Z,Q,ee,k,V,re,B,_,I,me,pe,$,ye,ie,ae,Ie,X,O,_e;return{c(){t=T("canvas"),n=g(),o=T("div"),i=T("button"),a=E(r),c=E(" (Space)"),u=g(),l=T("div"),s=T("span"),d=E("World "),m=E(x),p=E(" x "),y=E(z),D=E(" ("),ne=E(J),q=E(" cells)"),he=g(),Y=T("button"),W=E("Reload program"),N=g(),Z=T("button"),Q=E("Fullscreen (f)"),ee=g(),k=T("div"),V=T("button"),re=E("Reset world (r)"),B=g(),_=T("span"),I=T("label"),me=E("World: width"),pe=g(),$=T("input"),ye=g(),ie=T("label"),ae=E("height"),Ie=g(),X=T("input"),this.h()},l(R){t=v(R,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(t).forEach(h),n=L(R),o=v(R,"DIV",{});var U=w(o);i=v(U,"BUTTON",{});var ue=w(i);a=b(ue,r),c=b(ue," (Space)"),ue.forEach(h),U.forEach(h),u=L(R),l=v(R,"DIV",{});var le=w(l);s=v(le,"SPAN",{});var j=w(s);d=b(j,"World "),m=b(j,x),p=b(j," x "),y=b(j,z),D=b(j," ("),ne=b(j,J),q=b(j," cells)"),j.forEach(h),he=L(le),Y=v(le,"BUTTON",{});var se=w(Y);W=b(se,"Reload program"),se.forEach(h),N=L(le),Z=v(le,"BUTTON",{});var xe=w(Z);Q=b(xe,"Fullscreen (f)"),xe.forEach(h),le.forEach(h),ee=L(R),k=v(R,"DIV",{});var we=w(k);V=v(we,"BUTTON",{});var Be=w(V);re=b(Be,"Reset world (r)"),Be.forEach(h),B=L(we),_=v(we,"SPAN",{});var M=w(_);I=v(M,"LABEL",{for:!0});var Me=w(I);me=b(Me,"World: width"),Me.forEach(h),pe=L(M),$=v(M,"INPUT",{id:!0,type:!0,min:!0}),ye=L(M),ie=v(M,"LABEL",{for:!0});var H=w(ie);ae=b(H,"height"),H.forEach(h),Ie=L(M),X=v(M,"INPUT",{id:!0,type:!0,min:!0}),M.forEach(h),we.forEach(h),this.h()},h(){A(t,"id","canvas"),At(t,"background-color","black"),A(t,"width",e[3].width),A(t,"height",e[3].height),A(I,"for","worldWidth"),A($,"id","worldWidth"),A($,"type","number"),A($,"min",0),A(ie,"for","worldHeight"),A(X,"id","worldHeight"),A(X,"type","number"),A(X,"min",0)},m(R,U){F(R,t,U),F(R,n,U),F(R,o,U),f(o,i),f(i,a),f(i,c),F(R,u,U),F(R,l,U),f(l,s),f(s,d),f(s,m),f(s,p),f(s,y),f(s,D),f(s,ne),f(s,q),f(l,he),f(l,Y),f(Y,W),f(l,N),f(l,Z),f(Z,Q),F(R,ee,U),F(R,k,U),f(k,V),f(V,re),f(k,B),f(k,_),f(_,I),f(I,me),f(_,pe),f(_,$),ce($,e[0].width),f(_,ye),f(_,ie),f(ie,ae),f(_,Ie),f(_,X),ce(X,e[0].height),O||(_e=[P(i,"click",e[6]),P(Y,"click",e[7]),P(Z,"click",function(){io(e[2])&&e[2].apply(this,arguments)}),P(V,"click",e[5]),P($,"change",e[5]),P($,"input",e[8]),P(X,"change",e[5]),P(X,"input",e[9])],O=!0)},p(R,[U]){e=R,U&2&&r!==(r=e[1]?"Play":"Pause")&&Te(a,r),U&1&&x!==(x=e[0].width+"")&&Te(m,x),U&1&&z!==(z=e[0].height+"")&&Te(y,z),U&1&&J!==(J=e[0].width*e[0].height+"")&&Te(ne,J),U&1&&fe($.value)!==e[0].width&&ce($,e[0].width),U&1&&fe(X.value)!==e[0].height&&ce(X,e[0].height)},i:de,o:de,d(R){R&&h(t),R&&h(n),R&&h(o),R&&h(u),R&&h(l),R&&h(ee),R&&h(k),O=!1,ao(_e)}}}function Uo(e,t,n){const o={width:1600,height:900},i={width:1600,height:900};let r=!0,a,c,u;function l(){cancelAnimationFrame(u),c=bo(),go(c.canvas);const y=Wt(c,{worldDimensions:i});a=Gt(c,{cellsTex:y.cellsTex,texDimensions:i}),Co(c,{screenDimensions:o});function D(){return r||(a=Po({gl:c,worldDimensions:i,screenDimensions:o})),Fo({gl:c,cellsTex:a,worldDimensions:i}),u=requestAnimationFrame(D)}u=requestAnimationFrame(D)}let s;Rt(()=>{l(),n(2,s=Do(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",y=>{if(y.code==="Space"&&(n(1,r=!r),y.preventDefault()),y.code==="KeyF"){s();return}if(y.code==="KeyR"){d();return}})});const d=()=>{n(0,i.width=Math.min(i.width,o.width),i),n(0,i.height=Math.min(i.height,o.height),i);const y=Wt(c,{worldDimensions:i});a=Gt(c,{cellsTex:y.cellsTex,texDimensions:i})},x=()=>n(1,r=!r),m=()=>l();function p(){i.width=fe(this.value),n(0,i)}function z(){i.height=fe(this.value),n(0,i)}return[i,r,s,o,l,d,x,m,p,z]}class zo extends qe{constructor(t){super(),Ze(this,t,Uo,$o,je,{})}}const Bo=["VERTEX_SHADER","FRAGMENT_SHADER"];function Mo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return No(t),t}function No(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ho(e,t,n,o){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function kt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function mo(e,t,n,o,i){const r=[];for(let c=0;c<t.length;++c){const u=Bo[c]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=Wo(e,t[c],u,i);if(!l)throw"Can not create shader";r.push(l)}const a=Xo(e,r,n,o,i);if(!a)throw"Can not create program";return a}function Wo(e,t,n,o){const i=o||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const c=e.getShaderInfoLog(r);return i(new Error("*** Error compiling shader '"+r+"':"+c+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(r),null}return r}function Xo(e,t,n,o,i){const r=i||console.log,a=e.createProgram();if(!a)throw"Could not create program";if(t.forEach(function(u){e.attachShader(a,u)}),n&&n.forEach(function(u,l){e.bindAttribLocation(a,o?o[l]:l,u)}),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const u=e.getProgramInfoLog(a);return r("Error in program linking:"+u),e.deleteProgram(a),null}return a}function Oo(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Go=`precision mediump float;
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

`;let Pe,$e,rt;const Ho=(e,t)=>{const{screenDimensions:n,mode:o}=t,{height:i,width:r}=n;let a=ko;if(o==="gradiant"&&(a=Vo),$e=mo(e,[Go,a]),Pe={positionLocation:e.getAttribLocation($e,"a_position"),textureLocation:e.getUniformLocation($e,"u_texture"),worldSizeLocation:e.getUniformLocation($e,"u_worldSize"),zoomLocation:e.getUniformLocation($e,"u_zoom"),panLocation:e.getUniformLocation($e,"u_pan")},rt=e.createBuffer(),!rt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,rt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,r,0,r,0,0,i,r,i]),e.STATIC_DRAW)},Yo=e=>{const{gl:t,cellsTex:n,worldDimensions:o,zoomLevel:i,pan:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram($e),t.bindBuffer(t.ARRAY_BUFFER,rt),t.enableVertexAttribArray(Pe.positionLocation),t.vertexAttribPointer(Pe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Pe.textureLocation,0),t.uniform2f(Pe.worldSizeLocation,o.width,o.height),t.uniform1f(Pe.zoomLocation,Math.max(i,1)),t.uniform2f(Pe.panLocation,r.x,r.y),t.drawArrays(t.TRIANGLES,0,6)};function Ko(e,t,n){function o(){const r=e.getElementById(t);r&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),r.width=n.width,r.height=n.height)}function i(){const r=e.getElementById(t);r&&(e.fullscreenElement||r.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:i,disableFullscreen:o}}function Vt(e,t){const{worldDimensions:n,initialDensity:o,mode:i}=t;let r=o;r>1&&(r=1);const a=n.width*n.height;let c=new Array(a).fill(0);return i==="random"&&(c=c.map(l=>Math.random()<r?1:0)),{cellsTex:ho(e,new Float32Array(c.map((l,s)=>[l,s,0,0]).flat()),n.width,n.height)}}const qo=` attribute vec2 aPosition;

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
`;let Le,Se,bt,et,Tt,Ht,Yt,Ye,it;const Kt=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Se=mo(e,[qo,Zo]),Le={uInputTextureLocation:e.getUniformLocation(Se,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Se,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Se,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Se,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Se,"uInfiniteSource"),positionLocation:e.getAttribLocation(Se,"aPosition")},bt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,bt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),et=n,Tt=ho(e,null,o.width,o.height),Ht=kt(e,et),Yt=kt(e,Tt),Ye={fb:Ht,tex:et},it={fb:Yt,tex:Tt},et},jo=e=>{const{gl:t,worldDimensions:n,screenDimensions:o,mouseCoordinates:i,mouseMode:r,infiniteSource:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,it.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,bt),t.enableVertexAttribArray(Le.positionLocation),t.vertexAttribPointer(Le.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ye.tex),t.useProgram(Se),t.uniform1i(Le.uInputTextureLocation,0),t.uniform2f(Le.uTextureSizeLocation,n.width,n.height),t.uniform2f(Le.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Le.uMouseModeLocation,r),t.uniform1i(Le.uInfiniteSourceLocation,a?1:0),t.drawArrays(t.TRIANGLES,0,6);{const c=Ye;Ye=it,it=c}return Ye.tex};function Jo(e){let t,n,o,i,r=e[5]?"Play":"Pause",a,c,u,l,s=e[2]?"Disable":"Enable",d,x,m,p,z,y,D,J,ne,q,he,Y,W,N,Z,Q=e[0].width+"",ee,k,V=e[0].height+"",re,B,_=e[0].width*e[0].height+"",I,me,pe,$,ye,ie,ae,Ie,X,O,_e,R,U,ue,le,j,se,xe,we,Be,M,Me,H,Ne,st,ct,te,ft,We,dt,ht,oe,mt,St;return{c(){t=T("canvas"),n=g(),o=T("div"),i=T("button"),a=E(r),c=E(" (Space)"),u=g(),l=T("button"),d=E(s),x=E(" constant cells generation (E)"),m=g(),p=T("button"),z=E("Zoom in (I)"),y=g(),D=T("button"),J=E("Zoom out (O)"),ne=g(),q=T("button"),he=E("Reset zoom (Z)"),Y=g(),W=T("div"),N=T("span"),Z=E("World "),ee=E(Q),k=E(" x "),re=E(V),B=E(" ("),I=E(_),me=E(" cells)"),pe=g(),$=T("button"),ye=E("Reload program"),ie=g(),ae=T("button"),Ie=E("Fullscreen (f)"),X=g(),O=T("div"),_e=T("button"),R=E("Reset world (R)"),U=g(),ue=T("button"),le=E("Empty world (E)"),j=g(),se=T("span"),xe=T("label"),we=E("Initial density [0-1]"),Be=g(),M=T("input"),Me=g(),H=T("span"),Ne=T("label"),st=E("World: width"),ct=g(),te=T("input"),ft=g(),We=T("label"),dt=E("height"),ht=g(),oe=T("input"),this.h()},l(C){t=v(C,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(t).forEach(h),n=L(C),o=v(C,"DIV",{});var S=w(o);i=v(S,"BUTTON",{});var pt=w(i);a=b(pt,r),c=b(pt," (Space)"),pt.forEach(h),u=L(S),l=v(S,"BUTTON",{});var _t=w(l);d=b(_t,s),x=b(_t," constant cells generation (E)"),_t.forEach(h),m=L(S),p=v(S,"BUTTON",{});var Ct=w(p);z=b(Ct,"Zoom in (I)"),Ct.forEach(h),y=L(S),D=v(S,"BUTTON",{});var Ft=w(D);J=b(Ft,"Zoom out (O)"),Ft.forEach(h),ne=L(S),q=v(S,"BUTTON",{});var Dt=w(q);he=b(Dt,"Reset zoom (Z)"),Dt.forEach(h),S.forEach(h),Y=L(C),W=v(C,"DIV",{});var Xe=w(W);N=v(Xe,"SPAN",{});var Ae=w(N);Z=b(Ae,"World "),ee=b(Ae,Q),k=b(Ae," x "),re=b(Ae,V),B=b(Ae," ("),I=b(Ae,_),me=b(Ae," cells)"),Ae.forEach(h),pe=L(Xe),$=v(Xe,"BUTTON",{});var yt=w($);ye=b(yt,"Reload program"),yt.forEach(h),ie=L(Xe),ae=v(Xe,"BUTTON",{});var It=w(ae);Ie=b(It,"Fullscreen (f)"),It.forEach(h),Xe.forEach(h),X=L(C),O=v(C,"DIV",{});var Re=w(O);_e=v(Re,"BUTTON",{});var Pt=w(_e);R=b(Pt,"Reset world (R)"),Pt.forEach(h),U=L(Re),ue=v(Re,"BUTTON",{});var $t=w(ue);le=b($t,"Empty world (E)"),$t.forEach(h),j=L(Re),se=v(Re,"SPAN",{});var Je=w(se);xe=v(Je,"LABEL",{for:!0});var Ut=w(xe);we=b(Ut,"Initial density [0-1]"),Ut.forEach(h),Be=L(Je),M=v(Je,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Je.forEach(h),Me=L(Re),H=v(Re,"SPAN",{});var ge=w(H);Ne=v(ge,"LABEL",{for:!0});var zt=w(Ne);st=b(zt,"World: width"),zt.forEach(h),ct=L(ge),te=v(ge,"INPUT",{id:!0,type:!0,min:!0}),ft=L(ge),We=v(ge,"LABEL",{for:!0});var Bt=w(We);dt=b(Bt,"height"),Bt.forEach(h),ht=L(ge),oe=v(ge,"INPUT",{id:!0,type:!0,min:!0}),ge.forEach(h),Re.forEach(h),this.h()},h(){A(t,"id","canvas"),At(t,"background-color","black"),A(t,"width",e[7].width),A(t,"height",e[7].height),A(xe,"for","initialDensity"),A(M,"id","initialDensity"),A(M,"type","number"),A(M,"min",0),A(M,"max",1),A(Ne,"for","worldWidth"),A(te,"id","worldWidth"),A(te,"type","number"),A(te,"min",0),A(We,"for","worldHeight"),A(oe,"id","worldHeight"),A(oe,"type","number"),A(oe,"min",0)},m(C,S){F(C,t,S),F(C,n,S),F(C,o,S),f(o,i),f(i,a),f(i,c),f(o,u),f(o,l),f(l,d),f(l,x),f(o,m),f(o,p),f(p,z),f(o,y),f(o,D),f(D,J),f(o,ne),f(o,q),f(q,he),F(C,Y,S),F(C,W,S),f(W,N),f(N,Z),f(N,ee),f(N,k),f(N,re),f(N,B),f(N,I),f(N,me),f(W,pe),f(W,$),f($,ye),f(W,ie),f(W,ae),f(ae,Ie),F(C,X,S),F(C,O,S),f(O,_e),f(_e,R),f(O,U),f(O,ue),f(ue,le),f(O,j),f(O,se),f(se,xe),f(xe,we),f(se,Be),f(se,M),ce(M,e[4]),f(O,Me),f(O,H),f(H,Ne),f(Ne,st),f(H,ct),f(H,te),ce(te,e[0].width),f(H,ft),f(H,We),f(We,dt),f(H,ht),f(H,oe),ce(oe,e[0].height),mt||(St=[P(i,"click",e[10]),P(l,"click",e[11]),P(p,"click",e[12]),P(D,"click",e[13]),P(q,"click",e[14]),P($,"click",e[15]),P(ae,"click",function(){io(e[6])&&e[6].apply(this,arguments)}),P(_e,"click",e[16]),P(ue,"click",e[17]),P(M,"input",e[18]),P(te,"change",e[19]),P(te,"input",e[20]),P(oe,"change",e[21]),P(oe,"input",e[22])],mt=!0)},p(C,[S]){e=C,S&32&&r!==(r=e[5]?"Play":"Pause")&&Te(a,r),S&4&&s!==(s=e[2]?"Disable":"Enable")&&Te(d,s),S&1&&Q!==(Q=e[0].width+"")&&Te(ee,Q),S&1&&V!==(V=e[0].height+"")&&Te(re,V),S&1&&_!==(_=e[0].width*e[0].height+"")&&Te(I,_),S&16&&fe(M.value)!==e[4]&&ce(M,e[4]),S&1&&fe(te.value)!==e[0].width&&ce(te,e[0].width),S&1&&fe(oe.value)!==e[0].height&&ce(oe,e[0].height)},i:de,o:de,d(C){C&&h(t),C&&h(n),C&&h(o),C&&h(Y),C&&h(W),C&&h(X),C&&h(O),mt=!1,ao(St)}}}function Qo(e,t,n){const o={width:1200,height:900},i={width:1200,height:900},r={x:-100,y:-100},a={x:0,y:0};let c=0,u=!0,l=1,s=.05,d=!0,x,m,p;function z(){cancelAnimationFrame(p),m=Mo(),Oo(m.canvas);const B=Vt(m,{mode:"random",worldDimensions:i,initialDensity:s});x=Kt(m,{cellsTex:B.cellsTex,texDimensions:i}),Ho(m,{screenDimensions:o,mode:"gradiant"});function _(){d||(x=jo({gl:m,worldDimensions:i,screenDimensions:o,mouseCoordinates:r,mouseMode:c,infiniteSource:u}));const I=.005;return r.x<.2&&a.x>=I&&n(1,a.x-=I,a),r.x>.8&&a.x<1-1/l&&n(1,a.x+=I,a),r.y<.2&&a.y>=I&&n(1,a.y-=I,a),r.y>.8&&a.y<1-1/l&&n(1,a.y+=I,a),Yo({gl:m,cellsTex:x,worldDimensions:i,zoomLevel:l,pan:a}),p=requestAnimationFrame(_)}p=requestAnimationFrame(_)}let y;Rt(()=>{z(),n(6,y=Ko(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",_=>{if(_.code==="Space"&&(n(5,d=!d),_.preventDefault()),_.code==="KeyF"){y();return}if(_.code==="KeyR"){D("random");return}if(_.code==="KeyE"){D("zero");return}if(_.code==="KeyI"){n(3,l++,l);return}if(_.code==="KeyS"){n(2,u=!u);return}if(_.code==="KeyO"){n(3,l=Math.max(l-1,1)),l===1&&(n(1,a.x=0,a),n(1,a.y=0,a));return}if(_.code==="KeyZ"){n(3,l=1),n(1,a.x=0,a),n(1,a.y=0,a);return}});const B=document.getElementById("canvas");if(!B)throw new Error("Canvas unavailable");B.addEventListener("mousemove",_=>{const I=B.getBoundingClientRect(),me=B.width/I.width,pe=B.height/I.height,$={x:(_.clientX-I.left)*me,y:(_.clientY-I.top)*pe};r.x=$.x/o.width,r.y=$.y/o.height}),B.addEventListener("mousedown",_=>{_.preventDefault(),_.button===0?c=1:_.button===2&&(c=2)}),B.addEventListener("mouseup",_=>{_.preventDefault(),c=0}),B.addEventListener("contextmenu",_=>(_.preventDefault(),!1))});const D=B=>{n(0,i.width=Math.min(i.width,o.width),i),n(0,i.height=Math.min(i.height,o.height),i);const _=Vt(m,{mode:B,worldDimensions:i,initialDensity:s});x=Kt(m,{cellsTex:_.cellsTex,texDimensions:i})},J=()=>n(5,d=!d),ne=()=>n(2,u=!u),q=()=>n(3,l+=1),he=()=>{n(3,l=Math.max(l-1,1)),l===1&&(n(1,a.x=0,a),n(1,a.y=0,a))},Y=()=>n(3,l=1),W=()=>z(),N=()=>D("random"),Z=()=>D("zero");function Q(){s=fe(this.value),n(4,s)}const ee=()=>D("random");function k(){i.width=fe(this.value),n(0,i)}const V=()=>D("random");function re(){i.height=fe(this.value),n(0,i)}return[i,a,u,l,s,d,y,o,z,D,J,ne,q,he,Y,W,N,Z,Q,ee,k,V,re]}class en extends qe{constructor(t){super(),Ze(this,t,Qo,Jo,je,{})}}const tn=["VERTEX_SHADER","FRAGMENT_SHADER"];function on(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return nn(t),t}function nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function po(e,t,n,o){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function qt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function _o(e,t,n,o,i){const r=[];for(let c=0;c<t.length;++c){const u=tn[c]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,l=rn(e,t[c],u,i);if(!l)throw"Can not create shader";r.push(l)}const a=an(e,r,n,o,i);if(!a)throw"Can not create program";return a}function rn(e,t,n,o){const i=o||console.log,r=e.createShader(n);if(!r)throw"Could not load shader";if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const c=e.getShaderInfoLog(r);return i(new Error("*** Error compiling shader '"+r+"':"+c+`
`+t.split(`
`).map((u,l)=>`${l+1}: ${u}`).join(`
`))),e.deleteShader(r),null}return r}function an(e,t,n,o,i){const r=i||console.log,a=e.createProgram();if(!a)throw"Could not create program";if(t.forEach(function(u){e.attachShader(a,u)}),n&&n.forEach(function(u,l){e.bindAttribLocation(a,o?o[l]:l,u)}),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const u=e.getProgramInfoLog(a);return r("Error in program linking:"+u),e.deleteProgram(a),null}return a}function un(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const ln=`precision mediump float;
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

`;let Ue,ze,at;const Zt=(e,t)=>{const{screenDimensions:n,mode:o}=t,{height:i,width:r}=n;let a=sn;if(o==="gradiant"&&(a=cn),ze=_o(e,[ln,a]),Ue={positionLocation:e.getAttribLocation(ze,"a_position"),textureLocation:e.getUniformLocation(ze,"u_texture"),worldSizeLocation:e.getUniformLocation(ze,"u_worldSize"),zoomLocation:e.getUniformLocation(ze,"u_zoom"),panLocation:e.getUniformLocation(ze,"u_pan")},at=e.createBuffer(),!at)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,at),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,r,0,r,0,0,i,r,i]),e.STATIC_DRAW)},fn=e=>{const{gl:t,cellsTex:n,worldDimensions:o,zoomLevel:i,pan:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(ze),t.bindBuffer(t.ARRAY_BUFFER,at),t.enableVertexAttribArray(Ue.positionLocation),t.vertexAttribPointer(Ue.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ue.textureLocation,0),t.uniform2f(Ue.worldSizeLocation,o.width,o.height),t.uniform1f(Ue.zoomLocation,Math.max(i,1)),t.uniform2f(Ue.panLocation,r.x,r.y),t.drawArrays(t.TRIANGLES,0,6)};function jt(e,t){const{worldDimensions:n,initialDensity:o,mode:i}=t;let r=o;r>1&&(r=1);const a=n.width*n.height;let c=new Array(a).fill(0);return i==="random"&&(c=c.map(l=>Math.random()<r?1:0)),{cellsTex:po(e,new Float32Array(c.map((l,s)=>[l,s,0,0]).flat()),n.width,n.height)}}const dn=` attribute vec2 aPosition;

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
`;let Ce,Fe,wt,tt,vt,Jt,Qt,Ke,ut;const eo=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return Fe=_o(e,[dn,hn]),Ce={uInputTextureLocation:e.getUniformLocation(Fe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Fe,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Fe,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Fe,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Fe,"uInfiniteSource"),positionLocation:e.getAttribLocation(Fe,"aPosition")},wt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,wt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),tt=n,vt=po(e,null,o.width,o.height),Jt=qt(e,tt),Qt=qt(e,vt),Ke={fb:Jt,tex:tt},ut={fb:Qt,tex:vt},tt},mn=e=>{const{gl:t,worldDimensions:n,screenDimensions:o,mouseCoordinates:i,mouseMode:r,infiniteSource:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,ut.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,wt),t.enableVertexAttribArray(Ce.positionLocation),t.vertexAttribPointer(Ce.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ke.tex),t.useProgram(Fe),t.uniform1i(Ce.uInputTextureLocation,0),t.uniform2f(Ce.uTextureSizeLocation,n.width,n.height),t.uniform2f(Ce.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Ce.uMouseModeLocation,r),t.uniform1i(Ce.uInfiniteSourceLocation,a?1:0),t.drawArrays(t.TRIANGLES,0,6);{const c=Ke;Ke=ut,ut=c}return Ke.tex};function pn(e){let t;return{c(){t=T("canvas"),this.h()},l(n){t=v(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),w(t).forEach(h),this.h()},h(){A(t,"id","canvas"),At(t,"background-color","black"),A(t,"width",e[0].width),A(t,"height",e[0].height),A(t,"class","svelte-1b0ol19")},m(n,o){F(n,t,o)},p:de,i:de,o:de,d(n){n&&h(t)}}}function _n(e){const t={x:0,y:0};let n=0;const o={width:window.innerWidth-50,height:window.innerHeight-10},i={x:0,y:0},r={Pause:!0,"Infinite source":!0,"Draw mode":"white","Reset grid":()=>d("random"),"Empty grid":()=>d("zero"),"Initial density":.05,"World width":o.width,"World height":o.height,Cells:(o.width*o.height).toString(),"Zoom level":1,"Pan reset":()=>{i.x=0,i.y=0},"Reload progam":()=>s()},a=async()=>{const x=await vo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),m=new x.GUI;m.add(r,"Pause").listen(),m.add(r,"Infinite source").listen(),m.add(r,"Draw mode",{White:"white",Gradiant:"gradiant"}).onFinishChange(()=>Zt(c,{screenDimensions:o,mode:r["Draw mode"]})),m.add(r,"Reset grid"),m.add(r,"Empty grid"),m.add(r,"Initial density",0,1,.01).onFinishChange(()=>d("random")),m.add(r,"World width",1,o.width,1).onFinishChange(()=>{r.Cells=(r["World height"]*r["World width"]).toString(),d("random")}),m.add(r,"World height",1,o.height,1).onFinishChange(()=>{r.Cells=(r["World height"]*r["World width"]).toString(),d("random")}),m.add(r,"Cells").listen(),m.add(r,"Zoom level",1,10),m.add(r,"Pan reset"),m.add(r,"Reload progam")};let c,u,l;function s(){cancelAnimationFrame(l),c=on(),un(c.canvas);const x=jt(c,{mode:"random",worldDimensions:{width:r["World width"],height:r["World height"]},initialDensity:r["Initial density"]});u=eo(c,{cellsTex:x.cellsTex,texDimensions:{width:r["World width"],height:r["World height"]}}),Zt(c,{screenDimensions:o,mode:r["Draw mode"]});function m(){r.Pause||(u=mn({gl:c,worldDimensions:{width:r["World width"],height:r["World height"]},screenDimensions:o,mouseCoordinates:t,mouseMode:n,infiniteSource:r["Infinite source"]}));const p=.005;return t.x<.1&&i.x>=p&&(i.x-=p),t.x>.9&&i.x<1-1/r["Zoom level"]&&(i.x+=p),t.y<.1&&i.y>=p&&(i.y-=p),t.y>.9&&i.y<1-1/r["Zoom level"]&&(i.y+=p),fn({gl:c,cellsTex:u,worldDimensions:{width:r["World width"],height:r["World height"]},zoomLevel:r["Zoom level"],pan:i}),l=requestAnimationFrame(m)}l=requestAnimationFrame(m)}Rt(()=>{s(),a(),document.addEventListener("keydown",m=>{if(m.code==="Space"&&(r.Pause=!r.Pause,m.preventDefault()),m.code==="KeyR"){d("random");return}if(m.code==="KeyE"){d("zero");return}if(m.code==="KeyS"){r["Infinite source"]=!r["Infinite source"];return}});const x=document.getElementById("canvas");if(!x)throw new Error("Canvas unavailable");x.addEventListener("mousemove",m=>{const p=x.getBoundingClientRect(),z=x.width/p.width,y=x.height/p.height,D={x:(m.clientX-p.left)*z,y:(m.clientY-p.top)*y};t.x=D.x/o.width,t.y=D.y/o.height}),x.addEventListener("mousedown",m=>{m.preventDefault(),m.button===0?n=1:m.button===2&&(n=2)}),x.addEventListener("mouseup",m=>{m.preventDefault(),n=0}),x.addEventListener("contextmenu",m=>(m.preventDefault(),!1))});const d=x=>{const m=jt(c,{mode:x,worldDimensions:{width:r["World width"],height:r["World height"]},initialDensity:r["Initial density"]});u=eo(c,{cellsTex:m.cellsTex,texDimensions:{width:r["World width"],height:r["World height"]}})};return[o]}class xn extends qe{constructor(t){super(),Ze(this,t,_n,pn,je,{})}}function to(e,t,n){const o=e.slice();return o[1]=t[n],o}function oo(e,t,n){const o=e.slice();return o[1]=t[n],o}function Tn(e){let t;return{c(){t=E("About")},l(n){t=b(n,"About")},m(n,o){F(n,t,o)},d(n){n&&h(t)}}}function vn(e){let t=e[1].title+"",n;return{c(){n=E(t)},l(o){n=b(o,t)},m(o,i){F(o,n,i)},p:de,d(o){o&&h(n)}}}function no(e){let t,n;return t=new so({props:{$$slots:{default:[vn]},$$scope:{ctx:e}}}),{c(){ve(t.$$.fragment)},l(o){De(t.$$.fragment,o)},m(o,i){Ee(t,o,i),n=!0},p(o,i){const r={};i&64&&(r.$$scope={dirty:i,ctx:o}),t.$set(r)},i(o){n||(G(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){be(t,o)}}}function En(e){let t,n,o,i;t=new so({props:{$$slots:{default:[Tn]},$$scope:{ctx:e}}});let r=e[0],a=[];for(let u=0;u<r.length;u+=1)a[u]=no(oo(e,r,u));const c=u=>K(a[u],1,1,()=>{a[u]=null});return{c(){ve(t.$$.fragment),n=g();for(let u=0;u<a.length;u+=1)a[u].c();o=lt()},l(u){De(t.$$.fragment,u),n=L(u);for(let l=0;l<a.length;l+=1)a[l].l(u);o=lt()},m(u,l){Ee(t,u,l),F(u,n,l);for(let s=0;s<a.length;s+=1)a[s].m(u,l);F(u,o,l),i=!0},p(u,l){const s={};if(l&64&&(s.$$scope={dirty:l,ctx:u}),t.$set(s),l&1){r=u[0];let d;for(d=0;d<r.length;d+=1){const x=oo(u,r,d);a[d]?(a[d].p(x,l),G(a[d],1)):(a[d]=no(x),a[d].c(),G(a[d],1),a[d].m(o.parentNode,o))}for(gt(),d=r.length;d<a.length;d+=1)c(d);Lt()}},i(u){if(!i){G(t.$$.fragment,u);for(let l=0;l<r.length;l+=1)G(a[l]);i=!0}},o(u){K(t.$$.fragment,u),a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)K(a[l]);i=!1},d(u){be(t,u),u&&h(n),uo(a,u),u&&h(o)}}}function bn(e){let t,n;return{c(){t=T("p"),n=E("Experiments running Conway's Game of Life in WebGL shaders.")},l(o){t=v(o,"P",{});var i=w(t);n=b(i,"Experiments running Conway's Game of Life in WebGL shaders."),i.forEach(h)},m(o,i){F(o,t,i),f(t,n)},p:de,d(o){o&&h(t)}}}function wn(e){let t,n,o;var i=e[1].component;function r(a){return{}}return i&&(t=Mt(i,r())),{c(){t&&ve(t.$$.fragment),n=g()},l(a){t&&De(t.$$.fragment,a),n=L(a)},m(a,c){t&&Ee(t,a,c),F(a,n,c),o=!0},p(a,c){if(i!==(i=a[1].component)){if(t){gt();const u=t;K(u.$$.fragment,1,0,()=>{be(u,1)}),Lt()}i?(t=Mt(i,r()),ve(t.$$.fragment),G(t.$$.fragment,1),Ee(t,n.parentNode,n)):t=null}},i(a){o||(t&&G(t.$$.fragment,a),o=!0)},o(a){t&&K(t.$$.fragment,a),o=!1},d(a){t&&be(t,a),a&&h(n)}}}function ro(e){let t,n;return t=new lo({props:{$$slots:{default:[wn]},$$scope:{ctx:e}}}),{c(){ve(t.$$.fragment)},l(o){De(t.$$.fragment,o)},m(o,i){Ee(t,o,i),n=!0},p(o,i){const r={};i&64&&(r.$$scope={dirty:i,ctx:o}),t.$set(r)},i(o){n||(G(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){be(t,o)}}}function An(e){let t,n,o,i,r,a;t=new To({props:{$$slots:{default:[En]},$$scope:{ctx:e}}}),o=new lo({props:{$$slots:{default:[bn]},$$scope:{ctx:e}}});let c=e[0],u=[];for(let s=0;s<c.length;s+=1)u[s]=ro(to(e,c,s));const l=s=>K(u[s],1,1,()=>{u[s]=null});return{c(){ve(t.$$.fragment),n=g(),ve(o.$$.fragment),i=g();for(let s=0;s<u.length;s+=1)u[s].c();r=lt()},l(s){De(t.$$.fragment,s),n=L(s),De(o.$$.fragment,s),i=L(s);for(let d=0;d<u.length;d+=1)u[d].l(s);r=lt()},m(s,d){Ee(t,s,d),F(s,n,d),Ee(o,s,d),F(s,i,d);for(let x=0;x<u.length;x+=1)u[x].m(s,d);F(s,r,d),a=!0},p(s,d){const x={};d&64&&(x.$$scope={dirty:d,ctx:s}),t.$set(x);const m={};if(d&64&&(m.$$scope={dirty:d,ctx:s}),o.$set(m),d&1){c=s[0];let p;for(p=0;p<c.length;p+=1){const z=to(s,c,p);u[p]?(u[p].p(z,d),G(u[p],1)):(u[p]=ro(z),u[p].c(),G(u[p],1),u[p].m(r.parentNode,r))}for(gt(),p=c.length;p<u.length;p+=1)l(p);Lt()}},i(s){if(!a){G(t.$$.fragment,s),G(o.$$.fragment,s);for(let d=0;d<c.length;d+=1)G(u[d]);a=!0}},o(s){K(t.$$.fragment,s),K(o.$$.fragment,s),u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)K(u[d]);a=!1},d(s){be(t,s),s&&h(n),be(o,s),s&&h(i),uo(u,s),s&&h(r)}}}function Rn(e){let t,n,o;return n=new xo({props:{$$slots:{default:[An]},$$scope:{ctx:e}}}),{c(){t=T("div"),ve(n.$$.fragment)},l(i){t=v(i,"DIV",{});var r=w(t);De(n.$$.fragment,r),r.forEach(h)},m(i,r){F(i,t,r),Ee(n,t,null),o=!0},p(i,[r]){const a={};r&64&&(a.$$scope={dirty:r,ctx:i}),n.$set(a)},i(i){o||(G(n.$$.fragment,i),o=!0)},o(i){K(n.$$.fragment,i),o=!1},d(i){i&&h(t),be(n)}}}function gn(e){return[[{title:"V1",component:zo},{title:"V2",component:en},{title:"V3",component:xn}]]}class Ln extends qe{constructor(t){super(),Ze(this,t,gn,Rn,je,{})}}function Sn(e){let t,n;return t=new Ln({}),{c(){ve(t.$$.fragment)},l(o){De(t.$$.fragment,o)},m(o,i){Ee(t,o,i),n=!0},p:de,i(o){n||(G(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){be(t,o)}}}class yn extends qe{constructor(t){super(),Ze(this,t,null,Sn,je,{})}}export{yn as default};
