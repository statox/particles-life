import{S as qe,i as Ze,s as je,k as x,a as S,q as v,l as T,m as b,h,c as C,r as E,n as R,p as At,b as I,D as f,O as ce,K as $,R as io,u as Te,P as fe,B as de,M as ao,o as Rt,w as ve,x as Fe,y as Ee,f as k,t as Z,z as be,e as lt,g as gt,d as Lt,L as uo,v as Mt}from"../../../chunks/index-46ced799.js";import{T as xo,a as To,b as lo,c as so}from"../../../chunks/TabPanel-3f95d051.js";import{_ as vo}from"../../../chunks/preload-helper-41c905a7.js";const Eo=["VERTEX_SHADER","FRAGMENT_SHADER"];function bo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return wo(t),t}function wo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function co(e,t,o,n){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function Nt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function fo(e,t,o,n,r){const a=[];for(let u=0;u<t.length;++u){const l=Eo[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=Ao(e,t[u],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=Ro(e,a,o,n,r);if(!i)throw"Can not create program";return i}function Ao(e,t,o,n){const r=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function Ro(e,t,o,n,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),o&&o.forEach(function(l,s){e.bindAttribLocation(i,n?n[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function go(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const Lo=`attribute vec2 a_position;
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
`;let Oe,Ge,ot;const Co=(e,t)=>{const{screenDimensions:o}=t,{height:n,width:r}=o;if(Ge=fo(e,[Lo,So]),Oe={positionLocation:e.getAttribLocation(Ge,"a_position"),textureLocation:e.getUniformLocation(Ge,"u_texture"),worldSizeLocation:e.getUniformLocation(Ge,"u_worldSize")},ot=e.createBuffer(),!ot)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ot),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,n,r,0,r,0,0,n,r,n]),e.STATIC_DRAW)},Do=e=>{const{gl:t,cellsTex:o,worldDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ge),t.bindBuffer(t.ARRAY_BUFFER,ot),t.enableVertexAttribArray(Oe.positionLocation),t.vertexAttribPointer(Oe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Oe.textureLocation,0),t.uniform2f(Oe.worldSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6)};function Fo(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:r,disableFullscreen:n}}function Wt(e,t){const{worldDimensions:o}=t,n=o.width*o.height,r=new Array(n).fill(0).map(i=>Math.random()<.5?1:0);return{cellsTex:co(e,new Float32Array(r.map(i=>[i,0,0,0]).flat()),o.width,o.height)}}const yo=` attribute vec2 aPosition;

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
`;let ke,Ve,Et,Qe,xt,Xt,Ot,He,nt;const Gt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Ve=fo(e,[yo,Io]),ke={uInputTextureLocation:e.getUniformLocation(Ve,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ve,"uTextureSize"),positionLocation:e.getAttribLocation(Ve,"aPosition")},Et=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Et),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),Qe=o,xt=co(e,null,n.width,n.height),Xt=Nt(e,Qe),Ot=Nt(e,xt),He={fb:Xt,tex:Qe},nt={fb:Ot,tex:xt},Qe},Po=e=>{const{gl:t,worldDimensions:o,screenDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,nt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,Et),t.enableVertexAttribArray(ke.positionLocation),t.vertexAttribPointer(ke.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,He.tex),t.useProgram(Ve),t.uniform1i(ke.uInputTextureLocation,0),t.uniform2f(ke.uTextureSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6);{const r=He;He=nt,nt=r}return He.tex};function $o(e){let t,o,n,r,a=e[1]?"Play":"Pause",i,u,l,s,c,d,g=e[0].width+"",A,p,m=e[0].height+"",w,F,G=e[0].width*e[0].height+"",K,j,he,q,W,N,J,ee,te,V,H,re,B,_,P,me,pe,U,ye,ie,ae,Ie,X,O,_e;return{c(){t=x("canvas"),o=S(),n=x("div"),r=x("button"),i=v(a),u=v(" (Space)"),l=S(),s=x("div"),c=x("span"),d=v("World "),A=v(g),p=v(" x "),w=v(m),F=v(" ("),K=v(G),j=v(" cells)"),he=S(),q=x("button"),W=v("Reload program"),N=S(),J=x("button"),ee=v("Fullscreen (f)"),te=S(),V=x("div"),H=x("button"),re=v("Reset world (r)"),B=S(),_=x("span"),P=x("label"),me=v("World: width"),pe=S(),U=x("input"),ye=S(),ie=x("label"),ae=v("height"),Ie=S(),X=x("input"),this.h()},l(L){t=T(L,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(h),o=C(L),n=T(L,"DIV",{});var z=b(n);r=T(z,"BUTTON",{});var ue=b(r);i=E(ue,a),u=E(ue," (Space)"),ue.forEach(h),z.forEach(h),l=C(L),s=T(L,"DIV",{});var le=b(s);c=T(le,"SPAN",{});var Q=b(c);d=E(Q,"World "),A=E(Q,g),p=E(Q," x "),w=E(Q,m),F=E(Q," ("),K=E(Q,G),j=E(Q," cells)"),Q.forEach(h),he=C(le),q=T(le,"BUTTON",{});var se=b(q);W=E(se,"Reload program"),se.forEach(h),N=C(le),J=T(le,"BUTTON",{});var xe=b(J);ee=E(xe,"Fullscreen (f)"),xe.forEach(h),le.forEach(h),te=C(L),V=T(L,"DIV",{});var we=b(V);H=T(we,"BUTTON",{});var Be=b(H);re=E(Be,"Reset world (r)"),Be.forEach(h),B=C(we),_=T(we,"SPAN",{});var M=b(_);P=T(M,"LABEL",{for:!0});var Me=b(P);me=E(Me,"World: width"),Me.forEach(h),pe=C(M),U=T(M,"INPUT",{id:!0,type:!0,min:!0}),ye=C(M),ie=T(M,"LABEL",{for:!0});var Y=b(ie);ae=E(Y,"height"),Y.forEach(h),Ie=C(M),X=T(M,"INPUT",{id:!0,type:!0,min:!0}),M.forEach(h),we.forEach(h),this.h()},h(){R(t,"id","canvas"),At(t,"background-color","black"),R(t,"width",e[3].width),R(t,"height",e[3].height),R(P,"for","worldWidth"),R(U,"id","worldWidth"),R(U,"type","number"),R(U,"min",0),R(ie,"for","worldHeight"),R(X,"id","worldHeight"),R(X,"type","number"),R(X,"min",0)},m(L,z){I(L,t,z),I(L,o,z),I(L,n,z),f(n,r),f(r,i),f(r,u),I(L,l,z),I(L,s,z),f(s,c),f(c,d),f(c,A),f(c,p),f(c,w),f(c,F),f(c,K),f(c,j),f(s,he),f(s,q),f(q,W),f(s,N),f(s,J),f(J,ee),I(L,te,z),I(L,V,z),f(V,H),f(H,re),f(V,B),f(V,_),f(_,P),f(P,me),f(_,pe),f(_,U),ce(U,e[0].width),f(_,ye),f(_,ie),f(ie,ae),f(_,Ie),f(_,X),ce(X,e[0].height),O||(_e=[$(r,"click",e[6]),$(q,"click",e[7]),$(J,"click",function(){io(e[2])&&e[2].apply(this,arguments)}),$(H,"click",e[5]),$(U,"change",e[5]),$(U,"input",e[8]),$(X,"change",e[5]),$(X,"input",e[9])],O=!0)},p(L,[z]){e=L,z&2&&a!==(a=e[1]?"Play":"Pause")&&Te(i,a),z&1&&g!==(g=e[0].width+"")&&Te(A,g),z&1&&m!==(m=e[0].height+"")&&Te(w,m),z&1&&G!==(G=e[0].width*e[0].height+"")&&Te(K,G),z&1&&fe(U.value)!==e[0].width&&ce(U,e[0].width),z&1&&fe(X.value)!==e[0].height&&ce(X,e[0].height)},i:de,o:de,d(L){L&&h(t),L&&h(o),L&&h(n),L&&h(l),L&&h(s),L&&h(te),L&&h(V),O=!1,ao(_e)}}}function Uo(e,t,o){const n={width:1600,height:900},r={width:1600,height:900};let a=!0,i,u,l;function s(){cancelAnimationFrame(l),u=bo(),go(u.canvas);const w=Wt(u,{worldDimensions:r});i=Gt(u,{cellsTex:w.cellsTex,texDimensions:r}),Co(u,{screenDimensions:n});function F(){return a||(i=Po({gl:u,worldDimensions:r,screenDimensions:n})),Do({gl:u,cellsTex:i,worldDimensions:r}),l=requestAnimationFrame(F)}l=requestAnimationFrame(F)}let c;Rt(()=>{s(),o(2,c=Fo(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",w=>{if(w.code==="Space"&&(o(1,a=!a),w.preventDefault()),w.code==="KeyF"){c();return}if(w.code==="KeyR"){d();return}})});const d=()=>{o(0,r.width=Math.min(r.width,n.width),r),o(0,r.height=Math.min(r.height,n.height),r);const w=Wt(u,{worldDimensions:r});i=Gt(u,{cellsTex:w.cellsTex,texDimensions:r})},g=()=>o(1,a=!a),A=()=>s();function p(){r.width=fe(this.value),o(0,r)}function m(){r.height=fe(this.value),o(0,r)}return[r,a,c,n,s,d,g,A,p,m]}class zo extends qe{constructor(t){super(),Ze(this,t,Uo,$o,je,{})}}const Bo=["VERTEX_SHADER","FRAGMENT_SHADER"];function Mo(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return No(t),t}function No(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ho(e,t,o,n){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function kt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function mo(e,t,o,n,r){const a=[];for(let u=0;u<t.length;++u){const l=Bo[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=Wo(e,t[u],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=Xo(e,a,o,n,r);if(!i)throw"Can not create program";return i}function Wo(e,t,o,n){const r=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function Xo(e,t,o,n,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),o&&o.forEach(function(l,s){e.bindAttribLocation(i,n?n[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function Oo(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const Go=`precision mediump float;
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

`;let Pe,$e,rt;const Ho=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:r,width:a}=o;let i=ko;if(n==="gradiant"&&(i=Vo),$e=mo(e,[Go,i]),Pe={positionLocation:e.getAttribLocation($e,"a_position"),textureLocation:e.getUniformLocation($e,"u_texture"),worldSizeLocation:e.getUniformLocation($e,"u_worldSize"),zoomLocation:e.getUniformLocation($e,"u_zoom"),panLocation:e.getUniformLocation($e,"u_pan")},rt=e.createBuffer(),!rt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,rt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},Yo=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:r,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram($e),t.bindBuffer(t.ARRAY_BUFFER,rt),t.enableVertexAttribArray(Pe.positionLocation),t.vertexAttribPointer(Pe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Pe.textureLocation,0),t.uniform2f(Pe.worldSizeLocation,n.width,n.height),t.uniform1f(Pe.zoomLocation,Math.max(r,1)),t.uniform2f(Pe.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function Ko(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function r(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:r,disableFullscreen:n}}function Vt(e,t){const{worldDimensions:o,initialDensity:n,mode:r}=t;let a=n;a>1&&(a=1);const i=o.width*o.height;let u=new Array(i).fill(0);return r==="random"&&(u=u.map(s=>Math.random()<a?1:0)),{cellsTex:ho(e,new Float32Array(u.map((s,c)=>[s,c,0,0]).flat()),o.width,o.height)}}const qo=` attribute vec2 aPosition;

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
`;let Le,Se,bt,et,Tt,Ht,Yt,Ye,it;const Kt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Se=mo(e,[qo,Zo]),Le={uInputTextureLocation:e.getUniformLocation(Se,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Se,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Se,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Se,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Se,"uInfiniteSource"),positionLocation:e.getAttribLocation(Se,"aPosition")},bt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,bt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),et=o,Tt=ho(e,null,n.width,n.height),Ht=kt(e,et),Yt=kt(e,Tt),Ye={fb:Ht,tex:et},it={fb:Yt,tex:Tt},et},jo=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:r,mouseMode:a,infiniteSource:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,it.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,bt),t.enableVertexAttribArray(Le.positionLocation),t.vertexAttribPointer(Le.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ye.tex),t.useProgram(Se),t.uniform1i(Le.uInputTextureLocation,0),t.uniform2f(Le.uTextureSizeLocation,o.width,o.height),t.uniform2f(Le.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(Le.uMouseModeLocation,a),t.uniform1i(Le.uInfiniteSourceLocation,i?1:0),t.drawArrays(t.TRIANGLES,0,6);{const u=Ye;Ye=it,it=u}return Ye.tex};function Jo(e){let t,o,n,r,a=e[5]?"Play":"Pause",i,u,l,s,c=e[2]?"Disable":"Enable",d,g,A,p,m,w,F,G,K,j,he,q,W,N,J,ee=e[0].width+"",te,V,H=e[0].height+"",re,B,_=e[0].width*e[0].height+"",P,me,pe,U,ye,ie,ae,Ie,X,O,_e,L,z,ue,le,Q,se,xe,we,Be,M,Me,Y,Ne,st,ct,oe,ft,We,dt,ht,ne,mt,St;return{c(){t=x("canvas"),o=S(),n=x("div"),r=x("button"),i=v(a),u=v(" (Space)"),l=S(),s=x("button"),d=v(c),g=v(" constant cells generation (E)"),A=S(),p=x("button"),m=v("Zoom in (I)"),w=S(),F=x("button"),G=v("Zoom out (O)"),K=S(),j=x("button"),he=v("Reset zoom (Z)"),q=S(),W=x("div"),N=x("span"),J=v("World "),te=v(ee),V=v(" x "),re=v(H),B=v(" ("),P=v(_),me=v(" cells)"),pe=S(),U=x("button"),ye=v("Reload program"),ie=S(),ae=x("button"),Ie=v("Fullscreen (f)"),X=S(),O=x("div"),_e=x("button"),L=v("Reset world (R)"),z=S(),ue=x("button"),le=v("Empty world (E)"),Q=S(),se=x("span"),xe=x("label"),we=v("Initial density [0-1]"),Be=S(),M=x("input"),Me=S(),Y=x("span"),Ne=x("label"),st=v("World: width"),ct=S(),oe=x("input"),ft=S(),We=x("label"),dt=v("height"),ht=S(),ne=x("input"),this.h()},l(y){t=T(y,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(h),o=C(y),n=T(y,"DIV",{});var D=b(n);r=T(D,"BUTTON",{});var pt=b(r);i=E(pt,a),u=E(pt," (Space)"),pt.forEach(h),l=C(D),s=T(D,"BUTTON",{});var _t=b(s);d=E(_t,c),g=E(_t," constant cells generation (E)"),_t.forEach(h),A=C(D),p=T(D,"BUTTON",{});var Ct=b(p);m=E(Ct,"Zoom in (I)"),Ct.forEach(h),w=C(D),F=T(D,"BUTTON",{});var Dt=b(F);G=E(Dt,"Zoom out (O)"),Dt.forEach(h),K=C(D),j=T(D,"BUTTON",{});var Ft=b(j);he=E(Ft,"Reset zoom (Z)"),Ft.forEach(h),D.forEach(h),q=C(y),W=T(y,"DIV",{});var Xe=b(W);N=T(Xe,"SPAN",{});var Ae=b(N);J=E(Ae,"World "),te=E(Ae,ee),V=E(Ae," x "),re=E(Ae,H),B=E(Ae," ("),P=E(Ae,_),me=E(Ae," cells)"),Ae.forEach(h),pe=C(Xe),U=T(Xe,"BUTTON",{});var yt=b(U);ye=E(yt,"Reload program"),yt.forEach(h),ie=C(Xe),ae=T(Xe,"BUTTON",{});var It=b(ae);Ie=E(It,"Fullscreen (f)"),It.forEach(h),Xe.forEach(h),X=C(y),O=T(y,"DIV",{});var Re=b(O);_e=T(Re,"BUTTON",{});var Pt=b(_e);L=E(Pt,"Reset world (R)"),Pt.forEach(h),z=C(Re),ue=T(Re,"BUTTON",{});var $t=b(ue);le=E($t,"Empty world (E)"),$t.forEach(h),Q=C(Re),se=T(Re,"SPAN",{});var Je=b(se);xe=T(Je,"LABEL",{for:!0});var Ut=b(xe);we=E(Ut,"Initial density [0-1]"),Ut.forEach(h),Be=C(Je),M=T(Je,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Je.forEach(h),Me=C(Re),Y=T(Re,"SPAN",{});var ge=b(Y);Ne=T(ge,"LABEL",{for:!0});var zt=b(Ne);st=E(zt,"World: width"),zt.forEach(h),ct=C(ge),oe=T(ge,"INPUT",{id:!0,type:!0,min:!0}),ft=C(ge),We=T(ge,"LABEL",{for:!0});var Bt=b(We);dt=E(Bt,"height"),Bt.forEach(h),ht=C(ge),ne=T(ge,"INPUT",{id:!0,type:!0,min:!0}),ge.forEach(h),Re.forEach(h),this.h()},h(){R(t,"id","canvas"),At(t,"background-color","black"),R(t,"width",e[7].width),R(t,"height",e[7].height),R(xe,"for","initialDensity"),R(M,"id","initialDensity"),R(M,"type","number"),R(M,"min",0),R(M,"max",1),R(Ne,"for","worldWidth"),R(oe,"id","worldWidth"),R(oe,"type","number"),R(oe,"min",0),R(We,"for","worldHeight"),R(ne,"id","worldHeight"),R(ne,"type","number"),R(ne,"min",0)},m(y,D){I(y,t,D),I(y,o,D),I(y,n,D),f(n,r),f(r,i),f(r,u),f(n,l),f(n,s),f(s,d),f(s,g),f(n,A),f(n,p),f(p,m),f(n,w),f(n,F),f(F,G),f(n,K),f(n,j),f(j,he),I(y,q,D),I(y,W,D),f(W,N),f(N,J),f(N,te),f(N,V),f(N,re),f(N,B),f(N,P),f(N,me),f(W,pe),f(W,U),f(U,ye),f(W,ie),f(W,ae),f(ae,Ie),I(y,X,D),I(y,O,D),f(O,_e),f(_e,L),f(O,z),f(O,ue),f(ue,le),f(O,Q),f(O,se),f(se,xe),f(xe,we),f(se,Be),f(se,M),ce(M,e[4]),f(O,Me),f(O,Y),f(Y,Ne),f(Ne,st),f(Y,ct),f(Y,oe),ce(oe,e[0].width),f(Y,ft),f(Y,We),f(We,dt),f(Y,ht),f(Y,ne),ce(ne,e[0].height),mt||(St=[$(r,"click",e[10]),$(s,"click",e[11]),$(p,"click",e[12]),$(F,"click",e[13]),$(j,"click",e[14]),$(U,"click",e[15]),$(ae,"click",function(){io(e[6])&&e[6].apply(this,arguments)}),$(_e,"click",e[16]),$(ue,"click",e[17]),$(M,"input",e[18]),$(oe,"change",e[19]),$(oe,"input",e[20]),$(ne,"change",e[21]),$(ne,"input",e[22])],mt=!0)},p(y,[D]){e=y,D&32&&a!==(a=e[5]?"Play":"Pause")&&Te(i,a),D&4&&c!==(c=e[2]?"Disable":"Enable")&&Te(d,c),D&1&&ee!==(ee=e[0].width+"")&&Te(te,ee),D&1&&H!==(H=e[0].height+"")&&Te(re,H),D&1&&_!==(_=e[0].width*e[0].height+"")&&Te(P,_),D&16&&fe(M.value)!==e[4]&&ce(M,e[4]),D&1&&fe(oe.value)!==e[0].width&&ce(oe,e[0].width),D&1&&fe(ne.value)!==e[0].height&&ce(ne,e[0].height)},i:de,o:de,d(y){y&&h(t),y&&h(o),y&&h(n),y&&h(q),y&&h(W),y&&h(X),y&&h(O),mt=!1,ao(St)}}}function Qo(e,t,o){const n={width:1200,height:900},r={width:1200,height:900},a={x:-100,y:-100},i={x:0,y:0};let u=0,l=!0,s=1,c=.05,d=!0,g,A,p;function m(){cancelAnimationFrame(p),A=Mo(),Oo(A.canvas);const B=Vt(A,{mode:"random",worldDimensions:r,initialDensity:c});g=Kt(A,{cellsTex:B.cellsTex,texDimensions:r}),Ho(A,{screenDimensions:n,mode:"gradiant"});function _(){d||(g=jo({gl:A,worldDimensions:r,screenDimensions:n,mouseCoordinates:a,mouseMode:u,infiniteSource:l}));const P=.005;return a.x<.2&&i.x>=P&&o(1,i.x-=P,i),a.x>.8&&i.x<1-1/s&&o(1,i.x+=P,i),a.y<.2&&i.y>=P&&o(1,i.y-=P,i),a.y>.8&&i.y<1-1/s&&o(1,i.y+=P,i),Yo({gl:A,cellsTex:g,worldDimensions:r,zoomLevel:s,pan:i}),p=requestAnimationFrame(_)}p=requestAnimationFrame(_)}let w;Rt(()=>{m(),o(6,w=Ko(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",_=>{if(_.code==="Space"&&(o(5,d=!d),_.preventDefault()),_.code==="KeyF"){w();return}if(_.code==="KeyR"){F("random");return}if(_.code==="KeyE"){F("zero");return}if(_.code==="KeyI"){o(3,s++,s);return}if(_.code==="KeyS"){o(2,l=!l);return}if(_.code==="KeyO"){o(3,s=Math.max(s-1,1)),s===1&&(o(1,i.x=0,i),o(1,i.y=0,i));return}if(_.code==="KeyZ"){o(3,s=1),o(1,i.x=0,i),o(1,i.y=0,i);return}});const B=document.getElementById("canvas");if(!B)throw new Error("Canvas unavailable");B.addEventListener("mousemove",_=>{const P=B.getBoundingClientRect(),me=B.width/P.width,pe=B.height/P.height,U={x:(_.clientX-P.left)*me,y:(_.clientY-P.top)*pe};a.x=U.x/n.width,a.y=U.y/n.height}),B.addEventListener("mousedown",_=>{_.preventDefault(),_.button===0?u=1:_.button===2&&(u=2)}),B.addEventListener("mouseup",_=>{_.preventDefault(),u=0}),B.addEventListener("contextmenu",_=>(_.preventDefault(),!1))});const F=B=>{o(0,r.width=Math.min(r.width,n.width),r),o(0,r.height=Math.min(r.height,n.height),r);const _=Vt(A,{mode:B,worldDimensions:r,initialDensity:c});g=Kt(A,{cellsTex:_.cellsTex,texDimensions:r})},G=()=>o(5,d=!d),K=()=>o(2,l=!l),j=()=>o(3,s+=1),he=()=>{o(3,s=Math.max(s-1,1)),s===1&&(o(1,i.x=0,i),o(1,i.y=0,i))},q=()=>o(3,s=1),W=()=>m(),N=()=>F("random"),J=()=>F("zero");function ee(){c=fe(this.value),o(4,c)}const te=()=>F("random");function V(){r.width=fe(this.value),o(0,r)}const H=()=>F("random");function re(){r.height=fe(this.value),o(0,r)}return[r,i,l,s,c,d,w,n,m,F,G,K,j,he,q,W,N,J,ee,te,V,H,re]}class en extends qe{constructor(t){super(),Ze(this,t,Qo,Jo,je,{})}}const tn=["VERTEX_SHADER","FRAGMENT_SHADER"];function on(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return nn(t),t}function nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function po(e,t,o,n){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function qt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function _o(e,t,o,n,r){const a=[];for(let u=0;u<t.length;++u){const l=tn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=rn(e,t[u],l,r);if(!s)throw"Can not create shader";a.push(s)}const i=an(e,a,o,n,r);if(!i)throw"Can not create program";return i}function rn(e,t,o,n){const r=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((l,s)=>`${s+1}: ${l}`).join(`
`))),e.deleteShader(a),null}return a}function an(e,t,o,n,r){const a=r||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(l){e.attachShader(i,l)}),o&&o.forEach(function(l,s){e.bindAttribLocation(i,n?n[s]:s,l)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const l=e.getProgramInfoLog(i);return a("Error in program linking:"+l),e.deleteProgram(i),null}return i}function un(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const ln=`precision mediump float;
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
    gl_FragColor = vec4(0.3, blue, 0.8, 1.0) * alive;
}

`;let Ue,ze,at;const Zt=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:r,width:a}=o;let i=sn;if(n==="gradiant"&&(i=cn),ze=_o(e,[ln,i]),Ue={positionLocation:e.getAttribLocation(ze,"a_position"),textureLocation:e.getUniformLocation(ze,"u_texture"),worldSizeLocation:e.getUniformLocation(ze,"u_worldSize"),zoomLocation:e.getUniformLocation(ze,"u_zoom"),panLocation:e.getUniformLocation(ze,"u_pan")},at=e.createBuffer(),!at)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,at),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},fn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:r,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(ze),t.bindBuffer(t.ARRAY_BUFFER,at),t.enableVertexAttribArray(Ue.positionLocation),t.vertexAttribPointer(Ue.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ue.textureLocation,0),t.uniform2f(Ue.worldSizeLocation,n.width,n.height),t.uniform1f(Ue.zoomLocation,Math.max(r,1)),t.uniform2f(Ue.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function jt(e,t){const{worldDimensions:o,initialDensity:n,mode:r}=t;let a=n;a>1&&(a=1);const i=o.width*o.height;let u=new Array(i).fill(0);return r==="random"&&(u=u.map(s=>Math.random()<a?1:0)),{cellsTex:po(e,new Float32Array(u.map((s,c)=>[s,c,0,0]).flat()),o.width,o.height)}}const dn=` attribute vec2 aPosition;

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
`;let Ce,De,wt,tt,vt,Jt,Qt,Ke,ut;const eo=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return De=_o(e,[dn,hn]),Ce={uInputTextureLocation:e.getUniformLocation(De,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(De,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(De,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(De,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(De,"uInfiniteSource"),positionLocation:e.getAttribLocation(De,"aPosition")},wt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,wt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),tt=o,vt=po(e,null,n.width,n.height),Jt=qt(e,tt),Qt=qt(e,vt),Ke={fb:Jt,tex:tt},ut={fb:Qt,tex:vt},tt},mn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:r,mouseMode:a,infiniteSource:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,ut.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,wt),t.enableVertexAttribArray(Ce.positionLocation),t.vertexAttribPointer(Ce.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ke.tex),t.useProgram(De),t.uniform1i(Ce.uInputTextureLocation,0),t.uniform2f(Ce.uTextureSizeLocation,o.width,o.height),t.uniform2f(Ce.uMouseCoordinatesLocation,r.x,r.y),t.uniform1i(Ce.uMouseModeLocation,a),t.uniform1i(Ce.uInfiniteSourceLocation,i?1:0),t.drawArrays(t.TRIANGLES,0,6);{const u=Ke;Ke=ut,ut=u}return Ke.tex};function pn(e){let t;return{c(){t=x("canvas"),this.h()},l(o){t=T(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),b(t).forEach(h),this.h()},h(){R(t,"id","canvas"),At(t,"background-color","black"),R(t,"width",e[0].width),R(t,"height",e[0].height),R(t,"class","svelte-1b0ol19")},m(o,n){I(o,t,n)},p:de,i:de,o:de,d(o){o&&h(t)}}}function _n(e){const t={x:0,y:0};let o=0,n,r;const a={width:window.innerWidth-50,height:window.innerHeight-10},i={x:0,y:0},u={Pause:!0,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"white","Reset grid":()=>A("random"),"Empty grid":()=>A("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,"Pan reset":()=>{i.x=0,i.y=0},"Reload progam":()=>g()},l=async()=>{const p=await vo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),m=new p.GUI;m.add(u,"Pause").listen(),m.add(u,"Infinite source").listen(),m.add(u,"TimeInSeconds").listen(),m.add(u,"Iteration").listen(),m.add(u,"fps").listen(),m.add(u,"Draw mode",{White:"white",Gradiant:"gradiant"}).onFinishChange(()=>Zt(s,{screenDimensions:a,mode:u["Draw mode"]})),m.add(u,"Reset grid"),m.add(u,"Empty grid"),m.add(u,"Initial density",0,1,.01).onFinishChange(()=>A("random")),m.add(u,"World width",1,a.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),A("random")}),m.add(u,"World height",1,a.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),A("random")}),m.add(u,"Cells").listen(),m.add(u,"Zoom level",1,10),m.add(u,"Pan reset"),m.add(u,"Reload progam")};let s,c,d;function g(){n=Date.now()/1e3,cancelAnimationFrame(d),s=on(),un(s.canvas);const p=jt(s,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});c=eo(s,{cellsTex:p.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),Zt(s,{screenDimensions:a,mode:u["Draw mode"]});function m(){if(!u.Pause){const F=Date.now()/1e3,G=F-r;u.fps=1/G,r=F,u.TimeInSeconds=(Date.now()-n)/1e3,u.Iteration++,c=mn({gl:s,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:o,infiniteSource:u["Infinite source"]})}const w=.005;return t.x<.1&&i.x>=w&&(i.x-=w),t.x>.9&&i.x<1-1/u["Zoom level"]&&(i.x+=w),t.y<.1&&i.y>=w&&(i.y-=w),t.y>.9&&i.y<1-1/u["Zoom level"]&&(i.y+=w),fn({gl:s,cellsTex:c,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:i}),d=requestAnimationFrame(m)}d=requestAnimationFrame(m)}Rt(()=>{g(),l(),document.addEventListener("keydown",m=>{if(m.code==="Space"&&(u.Pause=!u.Pause,m.preventDefault()),m.code==="KeyR"){A("random");return}if(m.code==="KeyE"){A("zero");return}if(m.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const p=document.getElementById("canvas");if(!p)throw new Error("Canvas unavailable");p.addEventListener("mousemove",m=>{const w=p.getBoundingClientRect(),F=p.width/w.width,G=p.height/w.height,K={x:(m.clientX-w.left)*F,y:(m.clientY-w.top)*G};t.x=K.x/a.width,t.y=K.y/a.height}),p.addEventListener("mousedown",m=>{m.preventDefault(),m.button===0?o=1:m.button===2&&(o=2)}),p.addEventListener("mouseup",m=>{m.preventDefault(),o=0}),p.addEventListener("contextmenu",m=>(m.preventDefault(),!1))});const A=p=>{const m=jt(s,{mode:p,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});c=eo(s,{cellsTex:m.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[a]}class xn extends qe{constructor(t){super(),Ze(this,t,_n,pn,je,{})}}function to(e,t,o){const n=e.slice();return n[1]=t[o],n}function oo(e,t,o){const n=e.slice();return n[1]=t[o],n}function Tn(e){let t;return{c(){t=v("About")},l(o){t=E(o,"About")},m(o,n){I(o,t,n)},d(o){o&&h(t)}}}function vn(e){let t=e[1].title+"",o;return{c(){o=v(t)},l(n){o=E(n,t)},m(n,r){I(n,o,r)},p:de,d(n){n&&h(o)}}}function no(e){let t,o;return t=new so({props:{$$slots:{default:[vn]},$$scope:{ctx:e}}}),{c(){ve(t.$$.fragment)},l(n){Fe(t.$$.fragment,n)},m(n,r){Ee(t,n,r),o=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){o||(k(t.$$.fragment,n),o=!0)},o(n){Z(t.$$.fragment,n),o=!1},d(n){be(t,n)}}}function En(e){let t,o,n,r;t=new so({props:{$$slots:{default:[Tn]},$$scope:{ctx:e}}});let a=e[0],i=[];for(let l=0;l<a.length;l+=1)i[l]=no(oo(e,a,l));const u=l=>Z(i[l],1,1,()=>{i[l]=null});return{c(){ve(t.$$.fragment),o=S();for(let l=0;l<i.length;l+=1)i[l].c();n=lt()},l(l){Fe(t.$$.fragment,l),o=C(l);for(let s=0;s<i.length;s+=1)i[s].l(l);n=lt()},m(l,s){Ee(t,l,s),I(l,o,s);for(let c=0;c<i.length;c+=1)i[c].m(l,s);I(l,n,s),r=!0},p(l,s){const c={};if(s&64&&(c.$$scope={dirty:s,ctx:l}),t.$set(c),s&1){a=l[0];let d;for(d=0;d<a.length;d+=1){const g=oo(l,a,d);i[d]?(i[d].p(g,s),k(i[d],1)):(i[d]=no(g),i[d].c(),k(i[d],1),i[d].m(n.parentNode,n))}for(gt(),d=a.length;d<i.length;d+=1)u(d);Lt()}},i(l){if(!r){k(t.$$.fragment,l);for(let s=0;s<a.length;s+=1)k(i[s]);r=!0}},o(l){Z(t.$$.fragment,l),i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)Z(i[s]);r=!1},d(l){be(t,l),l&&h(o),uo(i,l),l&&h(n)}}}function bn(e){let t,o;return{c(){t=x("p"),o=v("Experiments running Conway's Game of Life in WebGL shaders.")},l(n){t=T(n,"P",{});var r=b(t);o=E(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(h)},m(n,r){I(n,t,r),f(t,o)},p:de,d(n){n&&h(t)}}}function wn(e){let t,o,n;var r=e[1].component;function a(i){return{}}return r&&(t=Mt(r,a())),{c(){t&&ve(t.$$.fragment),o=S()},l(i){t&&Fe(t.$$.fragment,i),o=C(i)},m(i,u){t&&Ee(t,i,u),I(i,o,u),n=!0},p(i,u){if(r!==(r=i[1].component)){if(t){gt();const l=t;Z(l.$$.fragment,1,0,()=>{be(l,1)}),Lt()}r?(t=Mt(r,a()),ve(t.$$.fragment),k(t.$$.fragment,1),Ee(t,o.parentNode,o)):t=null}},i(i){n||(t&&k(t.$$.fragment,i),n=!0)},o(i){t&&Z(t.$$.fragment,i),n=!1},d(i){t&&be(t,i),i&&h(o)}}}function ro(e){let t,o;return t=new lo({props:{$$slots:{default:[wn]},$$scope:{ctx:e}}}),{c(){ve(t.$$.fragment)},l(n){Fe(t.$$.fragment,n)},m(n,r){Ee(t,n,r),o=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){o||(k(t.$$.fragment,n),o=!0)},o(n){Z(t.$$.fragment,n),o=!1},d(n){be(t,n)}}}function An(e){let t,o,n,r,a,i;t=new To({props:{$$slots:{default:[En]},$$scope:{ctx:e}}}),n=new lo({props:{$$slots:{default:[bn]},$$scope:{ctx:e}}});let u=e[0],l=[];for(let c=0;c<u.length;c+=1)l[c]=ro(to(e,u,c));const s=c=>Z(l[c],1,1,()=>{l[c]=null});return{c(){ve(t.$$.fragment),o=S(),ve(n.$$.fragment),r=S();for(let c=0;c<l.length;c+=1)l[c].c();a=lt()},l(c){Fe(t.$$.fragment,c),o=C(c),Fe(n.$$.fragment,c),r=C(c);for(let d=0;d<l.length;d+=1)l[d].l(c);a=lt()},m(c,d){Ee(t,c,d),I(c,o,d),Ee(n,c,d),I(c,r,d);for(let g=0;g<l.length;g+=1)l[g].m(c,d);I(c,a,d),i=!0},p(c,d){const g={};d&64&&(g.$$scope={dirty:d,ctx:c}),t.$set(g);const A={};if(d&64&&(A.$$scope={dirty:d,ctx:c}),n.$set(A),d&1){u=c[0];let p;for(p=0;p<u.length;p+=1){const m=to(c,u,p);l[p]?(l[p].p(m,d),k(l[p],1)):(l[p]=ro(m),l[p].c(),k(l[p],1),l[p].m(a.parentNode,a))}for(gt(),p=u.length;p<l.length;p+=1)s(p);Lt()}},i(c){if(!i){k(t.$$.fragment,c),k(n.$$.fragment,c);for(let d=0;d<u.length;d+=1)k(l[d]);i=!0}},o(c){Z(t.$$.fragment,c),Z(n.$$.fragment,c),l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)Z(l[d]);i=!1},d(c){be(t,c),c&&h(o),be(n,c),c&&h(r),uo(l,c),c&&h(a)}}}function Rn(e){let t,o,n;return o=new xo({props:{$$slots:{default:[An]},$$scope:{ctx:e}}}),{c(){t=x("div"),ve(o.$$.fragment)},l(r){t=T(r,"DIV",{});var a=b(t);Fe(o.$$.fragment,a),a.forEach(h)},m(r,a){I(r,t,a),Ee(o,t,null),n=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),o.$set(i)},i(r){n||(k(o.$$.fragment,r),n=!0)},o(r){Z(o.$$.fragment,r),n=!1},d(r){r&&h(t),be(o)}}}function gn(e){return[[{title:"V1",component:zo},{title:"V2",component:en},{title:"V3",component:xn}]]}class Ln extends qe{constructor(t){super(),Ze(this,t,gn,Rn,je,{})}}function Sn(e){let t,o;return t=new Ln({}),{c(){ve(t.$$.fragment)},l(n){Fe(t.$$.fragment,n)},m(n,r){Ee(t,n,r),o=!0},p:de,i(n){o||(k(t.$$.fragment,n),o=!0)},o(n){Z(t.$$.fragment,n),o=!1},d(n){be(t,n)}}}class yn extends qe{constructor(t){super(),Ze(this,t,null,Sn,je,{})}}export{yn as default};
