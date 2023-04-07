import{S as Ve,i as Ye,s as Ke,k as v,a as D,q as w,l as T,m as g,h as p,c as C,r as A,n as R,p as _t,b as y,D as f,O as he,K as $,R as Ao,u as Ae,P as pe,B as J,M as bo,o as vt,w as be,x as Ue,y as ge,f as V,t as j,z as Re,e as xt,g as zt,d as Ut,L as go,v as Kt}from"../../../chunks/index-46ced799.js";import{T as Uo,a as Mo,b as Ro,c as Lo}from"../../../chunks/TabPanel-3f95d051.js";import{_ as So}from"../../../chunks/preload-helper-41c905a7.js";const Bo=["VERTEX_SHADER","FRAGMENT_SHADER"];function No(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Wo(t),t}function Wo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Do(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function qt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Co(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Bo[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Go(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=Xo(e,a,n,r,i);if(!o)throw"Can not create program";return o}function Go(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function Xo(e,t,n,r,i){const a=i||console.log,o=e.createProgram();if(!o)throw"Could not create program";if(t.forEach(function(s){e.attachShader(o,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(o,r?r[c]:c,s)}),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o);return a("Error in program linking:"+s),e.deleteProgram(o),null}return o}function Oo(e,t){t=t||1;const n=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const ko=`attribute vec2 a_position;
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

`,Ho=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let qe,Ze,st;const Vo=(e,t)=>{const{screenDimensions:n}=t,{height:r,width:i}=n;if(Ze=Co(e,[ko,Ho]),qe={positionLocation:e.getAttribLocation(Ze,"a_position"),textureLocation:e.getUniformLocation(Ze,"u_texture"),worldSizeLocation:e.getUniformLocation(Ze,"u_worldSize")},st=e.createBuffer(),!st)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,st),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,i,0,i,0,0,r,i,r]),e.STATIC_DRAW)},Yo=e=>{const{gl:t,cellsTex:n,worldDimensions:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Ze),t.bindBuffer(t.ARRAY_BUFFER,st),t.enableVertexAttribArray(qe.positionLocation),t.vertexAttribPointer(qe.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(qe.textureLocation,0),t.uniform2f(qe.worldSizeLocation,r.width,r.height),t.drawArrays(t.TRIANGLES,0,6)};function Ko(e,t,n){function r(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:i,disableFullscreen:r}}function Zt(e,t){const{worldDimensions:n}=t,r=n.width*n.height,i=new Array(r).fill(0).map(o=>Math.random()<.5?1:0);return{cellsTex:Do(e,new Float32Array(i.map(o=>[o,0,0,0]).flat()),n.width,n.height)}}const qo=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Zo=`precision highp float;

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
`;let je,Je,yt,rt,St,jt,Jt,Qe,ct;const Qt=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return Je=Co(e,[qo,Zo]),je={uInputTextureLocation:e.getUniformLocation(Je,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Je,"uTextureSize"),positionLocation:e.getAttribLocation(Je,"aPosition")},yt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,yt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),rt=n,St=Do(e,null,r.width,r.height),jt=qt(e,rt),Jt=qt(e,St),Qe={fb:jt,tex:rt},ct={fb:Jt,tex:St},rt},jo=e=>{const{gl:t,worldDimensions:n,screenDimensions:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,ct.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,yt),t.enableVertexAttribArray(je.positionLocation),t.vertexAttribPointer(je.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Qe.tex),t.useProgram(Je),t.uniform1i(je.uInputTextureLocation,0),t.uniform2f(je.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const i=Qe;Qe=ct,ct=i}return Qe.tex};function Jo(e){let t,n,r,i,a=e[1]?"Play":"Pause",o,u,s,c,d,m,L=e[0].width+"",E,h,l=e[0].height+"",x,b,N=e[0].width*e[0].height+"",W,G,Q,Z,O,X,ee,oe,ne,Y,K,ae,M,_,P,xe,_e,z,Me,ue,se,Be,k,H,ve;return{c(){t=v("canvas"),n=D(),r=v("div"),i=v("button"),o=w(a),u=w(" (Space)"),s=D(),c=v("div"),d=v("span"),m=w("World "),E=w(L),h=w(" x "),x=w(l),b=w(" ("),W=w(N),G=w(" cells)"),Q=D(),Z=v("button"),O=w("Reload program"),X=D(),ee=v("button"),oe=w("Fullscreen (f)"),ne=D(),Y=v("div"),K=v("button"),ae=w("Reset world (r)"),M=D(),_=v("span"),P=v("label"),xe=w("World: width"),_e=D(),z=v("input"),Me=D(),ue=v("label"),se=w("height"),Be=D(),k=v("input"),this.h()},l(S){t=T(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),g(t).forEach(p),n=C(S),r=T(S,"DIV",{});var U=g(r);i=T(U,"BUTTON",{});var ce=g(i);o=A(ce,a),u=A(ce," (Space)"),ce.forEach(p),U.forEach(p),s=C(S),c=T(S,"DIV",{});var le=g(c);d=T(le,"SPAN",{});var te=g(d);m=A(te,"World "),E=A(te,L),h=A(te," x "),x=A(te,l),b=A(te," ("),W=A(te,N),G=A(te," cells)"),te.forEach(p),Q=C(le),Z=T(le,"BUTTON",{});var de=g(Z);O=A(de,"Reload program"),de.forEach(p),X=C(le),ee=T(le,"BUTTON",{});var Te=g(ee);oe=A(Te,"Fullscreen (f)"),Te.forEach(p),le.forEach(p),ne=C(S),Y=T(S,"DIV",{});var Le=g(Y);K=T(Le,"BUTTON",{});var Ge=g(K);ae=A(Ge,"Reset world (r)"),Ge.forEach(p),M=C(Le),_=T(Le,"SPAN",{});var B=g(_);P=T(B,"LABEL",{for:!0});var Xe=g(P);xe=A(Xe,"World: width"),Xe.forEach(p),_e=C(B),z=T(B,"INPUT",{id:!0,type:!0,min:!0}),Me=C(B),ue=T(B,"LABEL",{for:!0});var q=g(ue);se=A(q,"height"),q.forEach(p),Be=C(B),k=T(B,"INPUT",{id:!0,type:!0,min:!0}),B.forEach(p),Le.forEach(p),this.h()},h(){R(t,"id","canvas"),_t(t,"background-color","black"),R(t,"width",e[3].width),R(t,"height",e[3].height),R(P,"for","worldWidth"),R(z,"id","worldWidth"),R(z,"type","number"),R(z,"min",0),R(ue,"for","worldHeight"),R(k,"id","worldHeight"),R(k,"type","number"),R(k,"min",0)},m(S,U){y(S,t,U),y(S,n,U),y(S,r,U),f(r,i),f(i,o),f(i,u),y(S,s,U),y(S,c,U),f(c,d),f(d,m),f(d,E),f(d,h),f(d,x),f(d,b),f(d,W),f(d,G),f(c,Q),f(c,Z),f(Z,O),f(c,X),f(c,ee),f(ee,oe),y(S,ne,U),y(S,Y,U),f(Y,K),f(K,ae),f(Y,M),f(Y,_),f(_,P),f(P,xe),f(_,_e),f(_,z),he(z,e[0].width),f(_,Me),f(_,ue),f(ue,se),f(_,Be),f(_,k),he(k,e[0].height),H||(ve=[$(i,"click",e[6]),$(Z,"click",e[7]),$(ee,"click",function(){Ao(e[2])&&e[2].apply(this,arguments)}),$(K,"click",e[5]),$(z,"change",e[5]),$(z,"input",e[8]),$(k,"change",e[5]),$(k,"input",e[9])],H=!0)},p(S,[U]){e=S,U&2&&a!==(a=e[1]?"Play":"Pause")&&Ae(o,a),U&1&&L!==(L=e[0].width+"")&&Ae(E,L),U&1&&l!==(l=e[0].height+"")&&Ae(x,l),U&1&&N!==(N=e[0].width*e[0].height+"")&&Ae(W,N),U&1&&pe(z.value)!==e[0].width&&he(z,e[0].width),U&1&&pe(k.value)!==e[0].height&&he(k,e[0].height)},i:J,o:J,d(S){S&&p(t),S&&p(n),S&&p(r),S&&p(s),S&&p(c),S&&p(ne),S&&p(Y),H=!1,bo(ve)}}}function Qo(e,t,n){const r={width:1600,height:900},i={width:1600,height:900};let a=!0,o,u,s;function c(){cancelAnimationFrame(s),u=No(),Oo(u.canvas);const x=Zt(u,{worldDimensions:i});o=Qt(u,{cellsTex:x.cellsTex,texDimensions:i}),Vo(u,{screenDimensions:r});function b(){return a||(o=jo({gl:u,worldDimensions:i,screenDimensions:r})),Yo({gl:u,cellsTex:o,worldDimensions:i}),s=requestAnimationFrame(b)}s=requestAnimationFrame(b)}let d;vt(()=>{c(),n(2,d=Ko(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",x=>{if(x.code==="Space"&&(n(1,a=!a),x.preventDefault()),x.code==="KeyF"){d();return}if(x.code==="KeyR"){m();return}})});const m=()=>{n(0,i.width=Math.min(i.width,r.width),i),n(0,i.height=Math.min(i.height,r.height),i);const x=Zt(u,{worldDimensions:i});o=Qt(u,{cellsTex:x.cellsTex,texDimensions:i})},L=()=>n(1,a=!a),E=()=>c();function h(){i.width=pe(this.value),n(0,i)}function l(){i.height=pe(this.value),n(0,i)}return[i,a,d,r,c,m,L,E,h,l]}let en=class extends Ve{constructor(t){super(),Ye(this,t,Qo,Jo,Ke,{})}};const tn=["VERTEX_SHADER","FRAGMENT_SHADER"];function on(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return nn(t),t}function nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Fo(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function eo(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function yo(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=tn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=rn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=an(e,a,n,r,i);if(!o)throw"Can not create program";return o}function rn(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function an(e,t,n,r,i){const a=i||console.log,o=e.createProgram();if(!o)throw"Could not create program";if(t.forEach(function(s){e.attachShader(o,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(o,r?r[c]:c,s)}),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o);return a("Error in program linking:"+s),e.deleteProgram(o),null}return o}function un(e,t){t=t||1;const n=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const sn=`precision mediump float;
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
`,cn=`precision mediump float;
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

`;let Ne,We,lt;const dn=(e,t)=>{const{screenDimensions:n,mode:r}=t,{height:i,width:a}=n;let o=cn;if(r==="gradiant"&&(o=ln),We=yo(e,[sn,o]),Ne={positionLocation:e.getAttribLocation(We,"a_position"),textureLocation:e.getUniformLocation(We,"u_texture"),worldSizeLocation:e.getUniformLocation(We,"u_worldSize"),zoomLocation:e.getUniformLocation(We,"u_zoom"),panLocation:e.getUniformLocation(We,"u_pan")},lt=e.createBuffer(),!lt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,lt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},fn=e=>{const{gl:t,cellsTex:n,worldDimensions:r,zoomLevel:i,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(We),t.bindBuffer(t.ARRAY_BUFFER,lt),t.enableVertexAttribArray(Ne.positionLocation),t.vertexAttribPointer(Ne.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ne.textureLocation,0),t.uniform2f(Ne.worldSizeLocation,r.width,r.height),t.uniform1f(Ne.zoomLocation,Math.max(i,1)),t.uniform2f(Ne.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function mn(e,t,n){function r(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:i,disableFullscreen:r}}function to(e,t){const{worldDimensions:n,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const o=n.width*n.height;let u=new Array(o).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:Fo(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const hn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,pn=`precision highp float;

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
`;let Fe,ye,It,it,Dt,oo,no,et,dt;const ro=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return ye=yo(e,[hn,pn]),Fe={uInputTextureLocation:e.getUniformLocation(ye,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ye,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(ye,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(ye,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(ye,"uInfiniteSource"),positionLocation:e.getAttribLocation(ye,"aPosition")},It=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,It),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),it=n,Dt=Fo(e,null,r.width,r.height),oo=eo(e,it),no=eo(e,Dt),et={fb:oo,tex:it},dt={fb:no,tex:Dt},it},xn=e=>{const{gl:t,worldDimensions:n,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,dt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,It),t.enableVertexAttribArray(Fe.positionLocation),t.vertexAttribPointer(Fe.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,et.tex),t.useProgram(ye),t.uniform1i(Fe.uInputTextureLocation,0),t.uniform2f(Fe.uTextureSizeLocation,n.width,n.height),t.uniform2f(Fe.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Fe.uMouseModeLocation,a),t.uniform1i(Fe.uInfiniteSourceLocation,o?1:0),t.drawArrays(t.TRIANGLES,0,6);{const u=et;et=dt,dt=u}return et.tex};function _n(e){let t,n,r,i,a=e[5]?"Play":"Pause",o,u,s,c,d=e[2]?"Disable":"Enable",m,L,E,h,l,x,b,N,W,G,Q,Z,O,X,ee,oe=e[0].width+"",ne,Y,K=e[0].height+"",ae,M,_=e[0].width*e[0].height+"",P,xe,_e,z,Me,ue,se,Be,k,H,ve,S,U,ce,le,te,de,Te,Le,Ge,B,Xe,q,Oe,Tt,Et,re,wt,ke,At,bt,ie,gt,Mt;return{c(){t=v("canvas"),n=D(),r=v("div"),i=v("button"),o=w(a),u=w(" (Space)"),s=D(),c=v("button"),m=w(d),L=w(" constant cells generation (E)"),E=D(),h=v("button"),l=w("Zoom in (I)"),x=D(),b=v("button"),N=w("Zoom out (O)"),W=D(),G=v("button"),Q=w("Reset zoom (Z)"),Z=D(),O=v("div"),X=v("span"),ee=w("World "),ne=w(oe),Y=w(" x "),ae=w(K),M=w(" ("),P=w(_),xe=w(" cells)"),_e=D(),z=v("button"),Me=w("Reload program"),ue=D(),se=v("button"),Be=w("Fullscreen (f)"),k=D(),H=v("div"),ve=v("button"),S=w("Reset world (R)"),U=D(),ce=v("button"),le=w("Empty world (E)"),te=D(),de=v("span"),Te=v("label"),Le=w("Initial density [0-1]"),Ge=D(),B=v("input"),Xe=D(),q=v("span"),Oe=v("label"),Tt=w("World: width"),Et=D(),re=v("input"),wt=D(),ke=v("label"),At=w("height"),bt=D(),ie=v("input"),this.h()},l(I){t=T(I,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),g(t).forEach(p),n=C(I),r=T(I,"DIV",{});var F=g(r);i=T(F,"BUTTON",{});var Rt=g(i);o=A(Rt,a),u=A(Rt," (Space)"),Rt.forEach(p),s=C(F),c=T(F,"BUTTON",{});var Lt=g(c);m=A(Lt,d),L=A(Lt," constant cells generation (E)"),Lt.forEach(p),E=C(F),h=T(F,"BUTTON",{});var Bt=g(h);l=A(Bt,"Zoom in (I)"),Bt.forEach(p),x=C(F),b=T(F,"BUTTON",{});var Nt=g(b);N=A(Nt,"Zoom out (O)"),Nt.forEach(p),W=C(F),G=T(F,"BUTTON",{});var Wt=g(G);Q=A(Wt,"Reset zoom (Z)"),Wt.forEach(p),F.forEach(p),Z=C(I),O=T(I,"DIV",{});var He=g(O);X=T(He,"SPAN",{});var Se=g(X);ee=A(Se,"World "),ne=A(Se,oe),Y=A(Se," x "),ae=A(Se,K),M=A(Se," ("),P=A(Se,_),xe=A(Se," cells)"),Se.forEach(p),_e=C(He),z=T(He,"BUTTON",{});var Gt=g(z);Me=A(Gt,"Reload program"),Gt.forEach(p),ue=C(He),se=T(He,"BUTTON",{});var Xt=g(se);Be=A(Xt,"Fullscreen (f)"),Xt.forEach(p),He.forEach(p),k=C(I),H=T(I,"DIV",{});var De=g(H);ve=T(De,"BUTTON",{});var Ot=g(ve);S=A(Ot,"Reset world (R)"),Ot.forEach(p),U=C(De),ce=T(De,"BUTTON",{});var kt=g(ce);le=A(kt,"Empty world (E)"),kt.forEach(p),te=C(De),de=T(De,"SPAN",{});var nt=g(de);Te=T(nt,"LABEL",{for:!0});var Ht=g(Te);Le=A(Ht,"Initial density [0-1]"),Ht.forEach(p),Ge=C(nt),B=T(nt,"INPUT",{id:!0,type:!0,min:!0,max:!0}),nt.forEach(p),Xe=C(De),q=T(De,"SPAN",{});var Ce=g(q);Oe=T(Ce,"LABEL",{for:!0});var Vt=g(Oe);Tt=A(Vt,"World: width"),Vt.forEach(p),Et=C(Ce),re=T(Ce,"INPUT",{id:!0,type:!0,min:!0}),wt=C(Ce),ke=T(Ce,"LABEL",{for:!0});var Yt=g(ke);At=A(Yt,"height"),Yt.forEach(p),bt=C(Ce),ie=T(Ce,"INPUT",{id:!0,type:!0,min:!0}),Ce.forEach(p),De.forEach(p),this.h()},h(){R(t,"id","canvas"),_t(t,"background-color","black"),R(t,"width",e[7].width),R(t,"height",e[7].height),R(Te,"for","initialDensity"),R(B,"id","initialDensity"),R(B,"type","number"),R(B,"min",0),R(B,"max",1),R(Oe,"for","worldWidth"),R(re,"id","worldWidth"),R(re,"type","number"),R(re,"min",0),R(ke,"for","worldHeight"),R(ie,"id","worldHeight"),R(ie,"type","number"),R(ie,"min",0)},m(I,F){y(I,t,F),y(I,n,F),y(I,r,F),f(r,i),f(i,o),f(i,u),f(r,s),f(r,c),f(c,m),f(c,L),f(r,E),f(r,h),f(h,l),f(r,x),f(r,b),f(b,N),f(r,W),f(r,G),f(G,Q),y(I,Z,F),y(I,O,F),f(O,X),f(X,ee),f(X,ne),f(X,Y),f(X,ae),f(X,M),f(X,P),f(X,xe),f(O,_e),f(O,z),f(z,Me),f(O,ue),f(O,se),f(se,Be),y(I,k,F),y(I,H,F),f(H,ve),f(ve,S),f(H,U),f(H,ce),f(ce,le),f(H,te),f(H,de),f(de,Te),f(Te,Le),f(de,Ge),f(de,B),he(B,e[4]),f(H,Xe),f(H,q),f(q,Oe),f(Oe,Tt),f(q,Et),f(q,re),he(re,e[0].width),f(q,wt),f(q,ke),f(ke,At),f(q,bt),f(q,ie),he(ie,e[0].height),gt||(Mt=[$(i,"click",e[10]),$(c,"click",e[11]),$(h,"click",e[12]),$(b,"click",e[13]),$(G,"click",e[14]),$(z,"click",e[15]),$(se,"click",function(){Ao(e[6])&&e[6].apply(this,arguments)}),$(ve,"click",e[16]),$(ce,"click",e[17]),$(B,"input",e[18]),$(re,"change",e[19]),$(re,"input",e[20]),$(ie,"change",e[21]),$(ie,"input",e[22])],gt=!0)},p(I,[F]){e=I,F&32&&a!==(a=e[5]?"Play":"Pause")&&Ae(o,a),F&4&&d!==(d=e[2]?"Disable":"Enable")&&Ae(m,d),F&1&&oe!==(oe=e[0].width+"")&&Ae(ne,oe),F&1&&K!==(K=e[0].height+"")&&Ae(ae,K),F&1&&_!==(_=e[0].width*e[0].height+"")&&Ae(P,_),F&16&&pe(B.value)!==e[4]&&he(B,e[4]),F&1&&pe(re.value)!==e[0].width&&he(re,e[0].width),F&1&&pe(ie.value)!==e[0].height&&he(ie,e[0].height)},i:J,o:J,d(I){I&&p(t),I&&p(n),I&&p(r),I&&p(Z),I&&p(O),I&&p(k),I&&p(H),gt=!1,bo(Mt)}}}function vn(e,t,n){const r={width:1200,height:900},i={width:1200,height:900},a={x:-100,y:-100},o={x:0,y:0};let u=0,s=!0,c=1,d=.05,m=!0,L,E,h;function l(){cancelAnimationFrame(h),E=on(),un(E.canvas);const M=to(E,{mode:"random",worldDimensions:i,initialDensity:d});L=ro(E,{cellsTex:M.cellsTex,texDimensions:i}),dn(E,{screenDimensions:r,mode:"gradiant"});function _(){m||(L=xn({gl:E,worldDimensions:i,screenDimensions:r,mouseCoordinates:a,mouseMode:u,infiniteSource:s}));const P=.005;return a.x<.2&&o.x>=P&&n(1,o.x-=P,o),a.x>.8&&o.x<1-1/c&&n(1,o.x+=P,o),a.y<.2&&o.y>=P&&n(1,o.y-=P,o),a.y>.8&&o.y<1-1/c&&n(1,o.y+=P,o),fn({gl:E,cellsTex:L,worldDimensions:i,zoomLevel:c,pan:o}),h=requestAnimationFrame(_)}h=requestAnimationFrame(_)}let x;vt(()=>{l(),n(6,x=mn(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",_=>{if(_.code==="Space"&&(n(5,m=!m),_.preventDefault()),_.code==="KeyF"){x();return}if(_.code==="KeyR"){b("random");return}if(_.code==="KeyE"){b("zero");return}if(_.code==="KeyI"){n(3,c++,c);return}if(_.code==="KeyS"){n(2,s=!s);return}if(_.code==="KeyO"){n(3,c=Math.max(c-1,1)),c===1&&(n(1,o.x=0,o),n(1,o.y=0,o));return}if(_.code==="KeyZ"){n(3,c=1),n(1,o.x=0,o),n(1,o.y=0,o);return}});const M=document.getElementById("canvas");if(!M)throw new Error("Canvas unavailable");M.addEventListener("mousemove",_=>{const P=M.getBoundingClientRect(),xe=M.width/P.width,_e=M.height/P.height,z={x:(_.clientX-P.left)*xe,y:(_.clientY-P.top)*_e};a.x=z.x/r.width,a.y=z.y/r.height}),M.addEventListener("mousedown",_=>{_.preventDefault(),_.button===0?u=1:_.button===2&&(u=2)}),M.addEventListener("mouseup",_=>{_.preventDefault(),u=0}),M.addEventListener("contextmenu",_=>(_.preventDefault(),!1))});const b=M=>{n(0,i.width=Math.min(i.width,r.width),i),n(0,i.height=Math.min(i.height,r.height),i);const _=to(E,{mode:M,worldDimensions:i,initialDensity:d});L=ro(E,{cellsTex:_.cellsTex,texDimensions:i})},N=()=>n(5,m=!m),W=()=>n(2,s=!s),G=()=>n(3,c+=1),Q=()=>{n(3,c=Math.max(c-1,1)),c===1&&(n(1,o.x=0,o),n(1,o.y=0,o))},Z=()=>n(3,c=1),O=()=>l(),X=()=>b("random"),ee=()=>b("zero");function oe(){d=pe(this.value),n(4,d)}const ne=()=>b("random");function Y(){i.width=pe(this.value),n(0,i)}const K=()=>b("random");function ae(){i.height=pe(this.value),n(0,i)}return[i,o,s,c,d,m,x,r,l,b,N,W,G,Q,Z,O,X,ee,oe,ne,Y,K,ae]}let Tn=class extends Ve{constructor(t){super(),Ye(this,t,vn,_n,Ke,{})}};const En=["VERTEX_SHADER","FRAGMENT_SHADER"];function wn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return An(t),t}function An(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Io(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function io(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Po(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=En[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=bn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=gn(e,a,n,r,i);if(!o)throw"Can not create program";return o}function bn(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function gn(e,t,n,r,i){const a=i||console.log,o=e.createProgram();if(!o)throw"Could not create program";if(t.forEach(function(s){e.attachShader(o,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(o,r?r[c]:c,s)}),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o);return a("Error in program linking:"+s),e.deleteProgram(o),null}return o}function Rn(e,t){t=t||1;const n=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const Ln=`precision mediump float;
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
`,Sn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Dn=`precision mediump float;
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

`,Cn=`precision mediump float;
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

`;let Ie,Pe,ft;const ao=(e,t)=>{const{screenDimensions:n,mode:r}=t,{height:i,width:a}=n;let o=Sn;if(r==="gradiant"?o=Dn:r==="age_gradiant"&&(o=Cn),Pe=Po(e,[Ln,o]),Ie={positionLocation:e.getAttribLocation(Pe,"a_position"),textureLocation:e.getUniformLocation(Pe,"u_texture"),worldSizeLocation:e.getUniformLocation(Pe,"u_worldSize"),zoomLocation:e.getUniformLocation(Pe,"u_zoom"),panLocation:e.getUniformLocation(Pe,"u_pan"),iterationLocation:e.getUniformLocation(Pe,"u_iteration")},ft=e.createBuffer(),!ft)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ft),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Fn=e=>{const{gl:t,cellsTex:n,worldDimensions:r,zoomLevel:i,pan:a,iteration:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Pe),t.bindBuffer(t.ARRAY_BUFFER,ft),t.enableVertexAttribArray(Ie.positionLocation),t.vertexAttribPointer(Ie.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ie.textureLocation,0),t.uniform2f(Ie.worldSizeLocation,r.width,r.height),t.uniform1f(Ie.zoomLocation,Math.max(i,1)),t.uniform2f(Ie.panLocation,a.x,a.y),t.uniform1f(Ie.iterationLocation,o),t.drawArrays(t.TRIANGLES,0,6)};function uo(e,t){const{worldDimensions:n,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const o=n.width*n.height;let u=new Array(o).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:Io(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const yn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,In=`precision highp float;

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
`;let Ee,we,Pt,at,Ct,so,co,tt,mt;const lo=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return we=Po(e,[yn,In]),Ee={uInputTextureLocation:e.getUniformLocation(we,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(we,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(we,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(we,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(we,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(we,"uIteration"),positionLocation:e.getAttribLocation(we,"aPosition")},Pt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Pt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),at=n,Ct=Io(e,null,r.width,r.height),so=io(e,at),co=io(e,Ct),tt={fb:so,tex:at},mt={fb:co,tex:Ct},at},Pn=e=>{const{gl:t,worldDimensions:n,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:o,iteration:u}=e;t.bindFramebuffer(t.FRAMEBUFFER,mt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,Pt),t.enableVertexAttribArray(Ee.positionLocation),t.vertexAttribPointer(Ee.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,tt.tex),t.useProgram(we),t.uniform1i(Ee.uInputTextureLocation,0),t.uniform2f(Ee.uTextureSizeLocation,n.width,n.height),t.uniform2f(Ee.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Ee.uMouseModeLocation,a),t.uniform1i(Ee.uInfiniteSourceLocation,o?1:0),t.uniform1f(Ee.uIterationLocation,u),t.drawArrays(t.TRIANGLES,0,6);{const s=tt;tt=mt,mt=s}return tt.tex};function $n(e){let t;return{c(){t=v("canvas"),this.h()},l(n){t=T(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),g(t).forEach(p),this.h()},h(){R(t,"id","canvas"),_t(t,"background-color","black"),R(t,"width",e[0].width),R(t,"height",e[0].height),R(t,"class","svelte-1b0ol19")},m(n,r){y(n,t,r)},p:J,i:J,o:J,d(n){n&&p(t)}}}function zn(e){const t={x:0,y:0};let n=0,r,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},o={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>E("random"),"Empty grid":()=>E("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,"Pan reset":()=>{o.x=0,o.y=0},"Reload progam":()=>L()},s=async()=>{const h=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.add(u,"Pause").listen(),l.add(u,"Infinite source").listen(),l.add(u,"TimeInSeconds").listen(),l.add(u,"Iteration").listen(),l.add(u,"fps").listen(),l.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>ao(c,{screenDimensions:a,mode:u["Draw mode"]})),l.add(u,"Reset grid"),l.add(u,"Empty grid"),l.add(u,"Initial density",0,1,.01).onFinishChange(()=>E("random")),l.add(u,"World width",1,a.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"World height",1,a.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"Cells").listen(),l.add(u,"Zoom level",1,10),l.add(u,"Pan reset"),l.add(u,"Reload progam")};let c,d,m;function L(){r=Date.now()/1e3,cancelAnimationFrame(m),c=wn(),Rn(c.canvas);const h=uo(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=lo(c,{cellsTex:h.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),ao(c,{screenDimensions:a,mode:u["Draw mode"]});function l(){if(!u.Pause){const b=Date.now()/1e3,N=b-i;u.fps=1/N,i=b,u.TimeInSeconds=b-r,u.Iteration++,d=Pn({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:n,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const x=.005;return t.x<.1&&o.x>=x&&(o.x-=x),t.x>.9&&o.x<1-1/u["Zoom level"]&&(o.x+=x),t.y<.1&&o.y>=x&&(o.y-=x),t.y>.9&&o.y<1-1/u["Zoom level"]&&(o.y+=x),Fn({gl:c,cellsTex:d,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:o,iteration:u.Iteration}),m=requestAnimationFrame(l)}m=requestAnimationFrame(l)}vt(()=>{L(),s(),document.addEventListener("keydown",l=>{if(l.code==="Space"&&(u.Pause=!u.Pause,l.preventDefault()),l.code==="KeyR"){E("random");return}if(l.code==="KeyE"){E("zero");return}if(l.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const x=h.getBoundingClientRect(),b=h.width/x.width,N=h.height/x.height,W={x:(l.clientX-x.left)*b,y:(l.clientY-x.top)*N};t.x=W.x/a.width,t.y=W.y/a.height}),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?n=1:l.button===2&&(n=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),n=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))});const E=h=>{u.Iteration=0,u.TimeInSeconds=0;const l=uo(c,{mode:h,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=lo(c,{cellsTex:l.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[a]}let Un=class extends Ve{constructor(t){super(),Ye(this,t,zn,$n,Ke,{})}};const Mn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Bn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Nn(t),t}function Nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function $o(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function fo(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function zo(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Mn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Wn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=Gn(e,a,n,r,i);if(!o)throw"Can not create program";return o}function Wn(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function Gn(e,t,n,r,i){const a=i||console.log,o=e.createProgram();if(!o)throw"Could not create program";if(t.forEach(function(s){e.attachShader(o,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(o,r?r[c]:c,s)}),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o);return a("Error in program linking:"+s),e.deleteProgram(o),null}return o}function Xn(e,t){t=t||1;const n=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const On=`precision mediump float;
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
`,kn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,Hn=`precision mediump float;
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

`,Vn=`precision mediump float;
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

`;let $e,ze,ht;const mo=(e,t)=>{const{screenDimensions:n,mode:r}=t,{height:i,width:a}=n;let o=kn;if(r==="gradiant"?o=Hn:r==="age_gradiant"&&(o=Vn),ze=zo(e,[On,o]),$e={positionLocation:e.getAttribLocation(ze,"a_position"),textureLocation:e.getUniformLocation(ze,"u_texture"),worldSizeLocation:e.getUniformLocation(ze,"u_worldSize"),zoomLocation:e.getUniformLocation(ze,"u_zoom"),panLocation:e.getUniformLocation(ze,"u_pan"),iterationLocation:e.getUniformLocation(ze,"u_iteration")},ht=e.createBuffer(),!ht)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ht),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Yn=e=>{const{gl:t,cellsTex:n,worldDimensions:r,zoomLevel:i,pan:a,iteration:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(ze),t.bindBuffer(t.ARRAY_BUFFER,ht),t.enableVertexAttribArray($e.positionLocation),t.vertexAttribPointer($e.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i($e.textureLocation,0),t.uniform2f($e.worldSizeLocation,r.width,r.height),t.uniform1f($e.zoomLocation,Math.max(i,1)),t.uniform2f($e.panLocation,a.x,a.y),t.uniform1f($e.iterationLocation,o),t.drawArrays(t.TRIANGLES,0,6)};function ho(e,t){const{worldDimensions:n,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const o=n.width*n.height;let u=new Array(o).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:$o(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const Kn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,qn=`precision highp float;

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
`;let fe,me,$t,ut,Ft,po,xo,ot,pt;const _o=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return me=zo(e,[Kn,qn]),fe={uInputTextureLocation:e.getUniformLocation(me,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(me,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(me,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(me,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(me,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(me,"uIteration"),uPauseLocation:e.getUniformLocation(me,"uPause"),positionLocation:e.getAttribLocation(me,"aPosition")},$t=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,$t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ut=n,Ft=$o(e,null,r.width,r.height),po=fo(e,ut),xo=fo(e,Ft),ot={fb:po,tex:ut},pt={fb:xo,tex:Ft},ut},Zn=e=>{const{gl:t,worldDimensions:n,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:o,iteration:u,pause:s}=e;t.bindFramebuffer(t.FRAMEBUFFER,pt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,$t),t.enableVertexAttribArray(fe.positionLocation),t.vertexAttribPointer(fe.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ot.tex),t.useProgram(me),t.uniform1i(fe.uInputTextureLocation,0),t.uniform2f(fe.uTextureSizeLocation,n.width,n.height),t.uniform2f(fe.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(fe.uMouseModeLocation,a),t.uniform1i(fe.uInfiniteSourceLocation,o?1:0),t.uniform1f(fe.uIterationLocation,u),t.uniform1i(fe.uPauseLocation,s?1:0),t.drawArrays(t.TRIANGLES,0,6);{const c=ot;ot=pt,pt=c}return ot.tex};function jn(e){let t;return{c(){t=v("canvas"),this.h()},l(n){t=T(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),g(t).forEach(p),this.h()},h(){R(t,"id","canvas"),_t(t,"background-color","black"),R(t,"width",e[0].width),R(t,"height",e[0].height),R(t,"class","svelte-1b0ol19")},m(n,r){y(n,t,r)},p:J,i:J,o:J,d(n){n&&p(t)}}}function Jn(e){const t={x:0,y:0};let n=0,r,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},o={pause:!1,infiniteSource:!0,iteration:0,timeInSeconds:0,fps:0,drawMode:"age_gradiant",reloadProgram:()=>L(),resetGrid:()=>E("random"),emptyGrid:()=>E("zero"),initialDensity:.5,worldWidth:a.width,worldHeight:a.height,nbCells:(a.width*a.height).toString(),zoomLevel:1,previousZoomLevel:1,pan:{x:0,y:0,xController:null,yController:null}},u=async()=>{const h=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.add(o,"pause").name("Pause").listen(),l.add(o,"infiniteSource").name("Infinite Source").listen(),l.add(o,"timeInSeconds").name("Time (s)").listen(),l.add(o,"iteration").name("Iteration").listen(),l.add(o,"fps").listen(),l.add(o,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>mo(c,{screenDimensions:a,mode:o.drawMode})),l.add(o,"resetGrid").name("Reset grid"),l.add(o,"emptyGrid").name("Empty grid"),l.add(o,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>E("random")),l.add(o,"worldWidth",1,a.width,1).name("World width").onFinishChange(()=>{o.nbCells=(o.worldHeight*o.worldWidth).toString(),E("random")}),l.add(o,"worldHeight",1,a.height,1).name("World height").onFinishChange(()=>{o.nbCells=(o.worldHeight*o.worldWidth).toString(),E("random")}),l.add(o,"nbCells").name("Cells count").listen(),l.add(o,"zoomLevel",1,10).name("Zoom level").onChange(function(b){const N=b-o.previousZoomLevel;if(!o.pan?.xController||!o.pan?.yController||N===0)return;const W=1-1/o.previousZoomLevel,G=1-1/b;o.pan.xController.max(G),o.pan.xController.min(0),o.pan.yController.max(G),o.pan.yController.min(0);const Q={x:o.pan.x/W,y:o.pan.y/W};o.pan.x=G*Q.x||G/2,o.pan.y=G*Q.y||G/2,o.previousZoomLevel=b});const x=l.addFolder("Pan");o.pan.xController=x.add(o.pan,"x",0,0,.01).listen(),o.pan.yController=x.add(o.pan,"y",0,0,.01).listen(),x.open(),l.add(o,"reloadProgram").name("Reload program")},s=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space"&&(o.pause=!o.pause,l.preventDefault()),l.code==="KeyR"){E("random");return}if(l.code==="KeyE"){E("zero");return}if(l.code==="KeyS"){o.infiniteSource=!o.infiniteSource;return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const x=h.getBoundingClientRect(),b=h.width/x.width,N=h.height/x.height,W={x:(l.clientX-x.left)*b,y:(l.clientY-x.top)*N};t.x=W.x/a.width,t.y=W.y/a.height}),setInterval(()=>{t.x<.1&&o.pan.x>=.005&&(o.pan.x-=.005),t.x>.9&&o.pan.x<1-1/o.zoomLevel&&(o.pan.x+=.005),t.y<.1&&o.pan.y>=.005&&(o.pan.y-=.005),t.y>.9&&o.pan.y<1-1/o.zoomLevel&&(o.pan.y+=.005)},50),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?n=1:l.button===2&&(n=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),n=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))};let c,d,m;function L(){r=Date.now()/1e3,cancelAnimationFrame(m),c=Bn(),Xn(c.canvas);const h=ho(c,{mode:"random",worldDimensions:{width:o.worldWidth,height:o.worldHeight},initialDensity:o.initialDensity});d=_o(c,{cellsTex:h.cellsTex,texDimensions:{width:o.worldWidth,height:o.worldHeight}}),mo(c,{screenDimensions:a,mode:o.drawMode});function l(){if(!o.pause){const x=Date.now()/1e3,b=x-i;o.fps=1/b,i=x,o.timeInSeconds=x-r,o.iteration++}return d=Zn({gl:c,worldDimensions:{width:o.worldWidth,height:o.worldHeight},screenDimensions:a,mouseCoordinates:t,mouseMode:n,infiniteSource:o.infiniteSource,iteration:o.iteration,pause:o.pause}),Yn({gl:c,cellsTex:d,worldDimensions:{width:o.worldWidth,height:o.worldHeight},zoomLevel:o.zoomLevel,pan:o.pan,iteration:o.iteration}),m=requestAnimationFrame(l)}m=requestAnimationFrame(l)}vt(()=>{L(),u(),s()});const E=h=>{o.iteration=0,o.timeInSeconds=0;const l=ho(c,{mode:h,worldDimensions:{width:o.worldWidth,height:o.worldHeight},initialDensity:o.initialDensity});d=_o(c,{cellsTex:l.cellsTex,texDimensions:{width:o.worldWidth,height:o.worldHeight}})};return[a]}class Qn extends Ve{constructor(t){super(),Ye(this,t,Jn,jn,Ke,{})}}function vo(e,t,n){const r=e.slice();return r[1]=t[n],r}function To(e,t,n){const r=e.slice();return r[1]=t[n],r}function er(e){let t;return{c(){t=w("About")},l(n){t=A(n,"About")},m(n,r){y(n,t,r)},d(n){n&&p(t)}}}function tr(e){let t=e[1].title+"",n;return{c(){n=w(t)},l(r){n=A(r,t)},m(r,i){y(r,n,i)},p:J,d(r){r&&p(n)}}}function Eo(e){let t,n;return t=new Lo({props:{$$slots:{default:[tr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){Ue(t.$$.fragment,r)},m(r,i){ge(t,r,i),n=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){j(t.$$.fragment,r),n=!1},d(r){Re(t,r)}}}function or(e){let t,n,r,i;t=new Lo({props:{$$slots:{default:[er]},$$scope:{ctx:e}}});let a=e[0],o=[];for(let s=0;s<a.length;s+=1)o[s]=Eo(To(e,a,s));const u=s=>j(o[s],1,1,()=>{o[s]=null});return{c(){be(t.$$.fragment),n=D();for(let s=0;s<o.length;s+=1)o[s].c();r=xt()},l(s){Ue(t.$$.fragment,s),n=C(s);for(let c=0;c<o.length;c+=1)o[c].l(s);r=xt()},m(s,c){ge(t,s,c),y(s,n,c);for(let d=0;d<o.length;d+=1)o[d].m(s,c);y(s,r,c),i=!0},p(s,c){const d={};if(c&64&&(d.$$scope={dirty:c,ctx:s}),t.$set(d),c&1){a=s[0];let m;for(m=0;m<a.length;m+=1){const L=To(s,a,m);o[m]?(o[m].p(L,c),V(o[m],1)):(o[m]=Eo(L),o[m].c(),V(o[m],1),o[m].m(r.parentNode,r))}for(zt(),m=a.length;m<o.length;m+=1)u(m);Ut()}},i(s){if(!i){V(t.$$.fragment,s);for(let c=0;c<a.length;c+=1)V(o[c]);i=!0}},o(s){j(t.$$.fragment,s),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)j(o[c]);i=!1},d(s){Re(t,s),s&&p(n),go(o,s),s&&p(r)}}}function nr(e){let t,n;return{c(){t=v("p"),n=w("Experiments running Conway's Game of Life in WebGL shaders.")},l(r){t=T(r,"P",{});var i=g(t);n=A(i,"Experiments running Conway's Game of Life in WebGL shaders."),i.forEach(p)},m(r,i){y(r,t,i),f(t,n)},p:J,d(r){r&&p(t)}}}function rr(e){let t,n,r;var i=e[1].component;function a(o){return{}}return i&&(t=Kt(i,a())),{c(){t&&be(t.$$.fragment),n=D()},l(o){t&&Ue(t.$$.fragment,o),n=C(o)},m(o,u){t&&ge(t,o,u),y(o,n,u),r=!0},p(o,u){if(i!==(i=o[1].component)){if(t){zt();const s=t;j(s.$$.fragment,1,0,()=>{Re(s,1)}),Ut()}i?(t=Kt(i,a()),be(t.$$.fragment),V(t.$$.fragment,1),ge(t,n.parentNode,n)):t=null}},i(o){r||(t&&V(t.$$.fragment,o),r=!0)},o(o){t&&j(t.$$.fragment,o),r=!1},d(o){t&&Re(t,o),o&&p(n)}}}function wo(e){let t,n;return t=new Ro({props:{$$slots:{default:[rr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){Ue(t.$$.fragment,r)},m(r,i){ge(t,r,i),n=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){j(t.$$.fragment,r),n=!1},d(r){Re(t,r)}}}function ir(e){let t,n,r,i,a,o;t=new Mo({props:{$$slots:{default:[or]},$$scope:{ctx:e}}}),r=new Ro({props:{$$slots:{default:[nr]},$$scope:{ctx:e}}});let u=e[0],s=[];for(let d=0;d<u.length;d+=1)s[d]=wo(vo(e,u,d));const c=d=>j(s[d],1,1,()=>{s[d]=null});return{c(){be(t.$$.fragment),n=D(),be(r.$$.fragment),i=D();for(let d=0;d<s.length;d+=1)s[d].c();a=xt()},l(d){Ue(t.$$.fragment,d),n=C(d),Ue(r.$$.fragment,d),i=C(d);for(let m=0;m<s.length;m+=1)s[m].l(d);a=xt()},m(d,m){ge(t,d,m),y(d,n,m),ge(r,d,m),y(d,i,m);for(let L=0;L<s.length;L+=1)s[L].m(d,m);y(d,a,m),o=!0},p(d,m){const L={};m&64&&(L.$$scope={dirty:m,ctx:d}),t.$set(L);const E={};if(m&64&&(E.$$scope={dirty:m,ctx:d}),r.$set(E),m&1){u=d[0];let h;for(h=0;h<u.length;h+=1){const l=vo(d,u,h);s[h]?(s[h].p(l,m),V(s[h],1)):(s[h]=wo(l),s[h].c(),V(s[h],1),s[h].m(a.parentNode,a))}for(zt(),h=u.length;h<s.length;h+=1)c(h);Ut()}},i(d){if(!o){V(t.$$.fragment,d),V(r.$$.fragment,d);for(let m=0;m<u.length;m+=1)V(s[m]);o=!0}},o(d){j(t.$$.fragment,d),j(r.$$.fragment,d),s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)j(s[m]);o=!1},d(d){Re(t,d),d&&p(n),Re(r,d),d&&p(i),go(s,d),d&&p(a)}}}function ar(e){let t,n,r;return n=new Uo({props:{$$slots:{default:[ir]},$$scope:{ctx:e}}}),{c(){t=v("div"),be(n.$$.fragment)},l(i){t=T(i,"DIV",{});var a=g(t);Ue(n.$$.fragment,a),a.forEach(p)},m(i,a){y(i,t,a),ge(n,t,null),r=!0},p(i,[a]){const o={};a&64&&(o.$$scope={dirty:a,ctx:i}),n.$set(o)},i(i){r||(V(n.$$.fragment,i),r=!0)},o(i){j(n.$$.fragment,i),r=!1},d(i){i&&p(t),Re(n)}}}function ur(e){return[[{title:"V4",component:Qn},{title:"V3",component:Un},{title:"V2",component:Tn},{title:"V1",component:en}]]}class sr extends Ve{constructor(t){super(),Ye(this,t,ur,ar,Ke,{})}}function cr(e){let t,n;return t=new sr({}),{c(){be(t.$$.fragment)},l(r){Ue(t.$$.fragment,r)},m(r,i){ge(t,r,i),n=!0},p:J,i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){j(t.$$.fragment,r),n=!1},d(r){Re(t,r)}}}class xr extends Ve{constructor(t){super(),Ye(this,t,null,cr,Ke,{})}}export{xr as default};
