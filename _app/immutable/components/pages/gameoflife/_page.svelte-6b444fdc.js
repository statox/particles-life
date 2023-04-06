import{S as Ve,i as Ye,s as Ze,k as v,a as D,q as w,l as T,m as b,h as p,c as C,r as A,n as g,p as _t,b as I,D as f,O as me,K as $,R as Ao,u as Ae,P as he,B as j,M as bo,o as vt,w as be,x as ze,y as ge,f as H,t as q,z as Re,e as xt,g as Ut,d as zt,L as go,v as Zt}from"../../../chunks/index-46ced799.js";import{T as zo,a as Mo,b as Ro,c as Lo}from"../../../chunks/TabPanel-3f95d051.js";import{_ as So}from"../../../chunks/preload-helper-41c905a7.js";const Bo=["VERTEX_SHADER","FRAGMENT_SHADER"];function No(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Wo(t),t}function Wo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Do(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function Kt(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Co(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Bo[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Xo(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=Go(e,a,n,r,i);if(!o)throw"Can not create program";return o}function Xo(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function Go(e,t,n,r,i){const a=i||console.log,o=e.createProgram();if(!o)throw"Could not create program";if(t.forEach(function(s){e.attachShader(o,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(o,r?r[c]:c,s)}),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o);return a("Error in program linking:"+s),e.deleteProgram(o),null}return o}function Oo(e,t){t=t||1;const n=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const ko=`attribute vec2 a_position;
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
`;let Ke,qe,st;const Vo=(e,t)=>{const{screenDimensions:n}=t,{height:r,width:i}=n;if(qe=Co(e,[ko,Ho]),Ke={positionLocation:e.getAttribLocation(qe,"a_position"),textureLocation:e.getUniformLocation(qe,"u_texture"),worldSizeLocation:e.getUniformLocation(qe,"u_worldSize")},st=e.createBuffer(),!st)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,st),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,i,0,i,0,0,r,i,r]),e.STATIC_DRAW)},Yo=e=>{const{gl:t,cellsTex:n,worldDimensions:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(qe),t.bindBuffer(t.ARRAY_BUFFER,st),t.enableVertexAttribArray(Ke.positionLocation),t.vertexAttribPointer(Ke.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ke.textureLocation,0),t.uniform2f(Ke.worldSizeLocation,r.width,r.height),t.drawArrays(t.TRIANGLES,0,6)};function Zo(e,t,n){function r(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:i,disableFullscreen:r}}function qt(e,t){const{worldDimensions:n}=t,r=n.width*n.height,i=new Array(r).fill(0).map(o=>Math.random()<.5?1:0);return{cellsTex:Do(e,new Float32Array(i.map(o=>[o,0,0,0]).flat()),n.width,n.height)}}const Ko=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,qo=`precision highp float;

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
`;let je,Je,It,rt,St,jt,Jt,Qe,ct;const Qt=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return Je=Co(e,[Ko,qo]),je={uInputTextureLocation:e.getUniformLocation(Je,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Je,"uTextureSize"),positionLocation:e.getAttribLocation(Je,"aPosition")},It=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,It),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),rt=n,St=Do(e,null,r.width,r.height),jt=Kt(e,rt),Jt=Kt(e,St),Qe={fb:jt,tex:rt},ct={fb:Jt,tex:St},rt},jo=e=>{const{gl:t,worldDimensions:n,screenDimensions:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,ct.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,It),t.enableVertexAttribArray(je.positionLocation),t.vertexAttribPointer(je.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Qe.tex),t.useProgram(Je),t.uniform1i(je.uInputTextureLocation,0),t.uniform2f(je.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6);{const i=Qe;Qe=ct,ct=i}return Qe.tex};function Jo(e){let t,n,r,i,a=e[1]?"Play":"Pause",o,u,s,c,d,m,L=e[0].width+"",E,h,l=e[0].height+"",x,R,M=e[0].width*e[0].height+"",X,J,pe,K,G,W,Q,te,oe,V,Y,ie,B,_,P,xe,_e,U,Me,ae,ue,Be,O,k,ve;return{c(){t=v("canvas"),n=D(),r=v("div"),i=v("button"),o=w(a),u=w(" (Space)"),s=D(),c=v("div"),d=v("span"),m=w("World "),E=w(L),h=w(" x "),x=w(l),R=w(" ("),X=w(M),J=w(" cells)"),pe=D(),K=v("button"),G=w("Reload program"),W=D(),Q=v("button"),te=w("Fullscreen (f)"),oe=D(),V=v("div"),Y=v("button"),ie=w("Reset world (r)"),B=D(),_=v("span"),P=v("label"),xe=w("World: width"),_e=D(),U=v("input"),Me=D(),ae=v("label"),ue=w("height"),Be=D(),O=v("input"),this.h()},l(S){t=T(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(p),n=C(S),r=T(S,"DIV",{});var z=b(r);i=T(z,"BUTTON",{});var se=b(i);o=A(se,a),u=A(se," (Space)"),se.forEach(p),z.forEach(p),s=C(S),c=T(S,"DIV",{});var ce=b(c);d=T(ce,"SPAN",{});var ee=b(d);m=A(ee,"World "),E=A(ee,L),h=A(ee," x "),x=A(ee,l),R=A(ee," ("),X=A(ee,M),J=A(ee," cells)"),ee.forEach(p),pe=C(ce),K=T(ce,"BUTTON",{});var le=b(K);G=A(le,"Reload program"),le.forEach(p),W=C(ce),Q=T(ce,"BUTTON",{});var Te=b(Q);te=A(Te,"Fullscreen (f)"),Te.forEach(p),ce.forEach(p),oe=C(S),V=T(S,"DIV",{});var Le=b(V);Y=T(Le,"BUTTON",{});var Xe=b(Y);ie=A(Xe,"Reset world (r)"),Xe.forEach(p),B=C(Le),_=T(Le,"SPAN",{});var N=b(_);P=T(N,"LABEL",{for:!0});var Ge=b(P);xe=A(Ge,"World: width"),Ge.forEach(p),_e=C(N),U=T(N,"INPUT",{id:!0,type:!0,min:!0}),Me=C(N),ae=T(N,"LABEL",{for:!0});var Z=b(ae);ue=A(Z,"height"),Z.forEach(p),Be=C(N),O=T(N,"INPUT",{id:!0,type:!0,min:!0}),N.forEach(p),Le.forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[3].width),g(t,"height",e[3].height),g(P,"for","worldWidth"),g(U,"id","worldWidth"),g(U,"type","number"),g(U,"min",0),g(ae,"for","worldHeight"),g(O,"id","worldHeight"),g(O,"type","number"),g(O,"min",0)},m(S,z){I(S,t,z),I(S,n,z),I(S,r,z),f(r,i),f(i,o),f(i,u),I(S,s,z),I(S,c,z),f(c,d),f(d,m),f(d,E),f(d,h),f(d,x),f(d,R),f(d,X),f(d,J),f(c,pe),f(c,K),f(K,G),f(c,W),f(c,Q),f(Q,te),I(S,oe,z),I(S,V,z),f(V,Y),f(Y,ie),f(V,B),f(V,_),f(_,P),f(P,xe),f(_,_e),f(_,U),me(U,e[0].width),f(_,Me),f(_,ae),f(ae,ue),f(_,Be),f(_,O),me(O,e[0].height),k||(ve=[$(i,"click",e[6]),$(K,"click",e[7]),$(Q,"click",function(){Ao(e[2])&&e[2].apply(this,arguments)}),$(Y,"click",e[5]),$(U,"change",e[5]),$(U,"input",e[8]),$(O,"change",e[5]),$(O,"input",e[9])],k=!0)},p(S,[z]){e=S,z&2&&a!==(a=e[1]?"Play":"Pause")&&Ae(o,a),z&1&&L!==(L=e[0].width+"")&&Ae(E,L),z&1&&l!==(l=e[0].height+"")&&Ae(x,l),z&1&&M!==(M=e[0].width*e[0].height+"")&&Ae(X,M),z&1&&he(U.value)!==e[0].width&&me(U,e[0].width),z&1&&he(O.value)!==e[0].height&&me(O,e[0].height)},i:j,o:j,d(S){S&&p(t),S&&p(n),S&&p(r),S&&p(s),S&&p(c),S&&p(oe),S&&p(V),k=!1,bo(ve)}}}function Qo(e,t,n){const r={width:1600,height:900},i={width:1600,height:900};let a=!0,o,u,s;function c(){cancelAnimationFrame(s),u=No(),Oo(u.canvas);const x=qt(u,{worldDimensions:i});o=Qt(u,{cellsTex:x.cellsTex,texDimensions:i}),Vo(u,{screenDimensions:r});function R(){return a||(o=jo({gl:u,worldDimensions:i,screenDimensions:r})),Yo({gl:u,cellsTex:o,worldDimensions:i}),s=requestAnimationFrame(R)}s=requestAnimationFrame(R)}let d;vt(()=>{c(),n(2,d=Zo(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",x=>{if(x.code==="Space"&&(n(1,a=!a),x.preventDefault()),x.code==="KeyF"){d();return}if(x.code==="KeyR"){m();return}})});const m=()=>{n(0,i.width=Math.min(i.width,r.width),i),n(0,i.height=Math.min(i.height,r.height),i);const x=qt(u,{worldDimensions:i});o=Qt(u,{cellsTex:x.cellsTex,texDimensions:i})},L=()=>n(1,a=!a),E=()=>c();function h(){i.width=he(this.value),n(0,i)}function l(){i.height=he(this.value),n(0,i)}return[i,a,d,r,c,m,L,E,h,l]}let en=class extends Ve{constructor(t){super(),Ye(this,t,Qo,Jo,Ze,{})}};const tn=["VERTEX_SHADER","FRAGMENT_SHADER"];function on(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return nn(t),t}function nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Fo(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function eo(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Io(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=tn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=rn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=an(e,a,n,r,i);if(!o)throw"Can not create program";return o}function rn(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
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

`;let Ne,We,lt;const dn=(e,t)=>{const{screenDimensions:n,mode:r}=t,{height:i,width:a}=n;let o=cn;if(r==="gradiant"&&(o=ln),We=Io(e,[sn,o]),Ne={positionLocation:e.getAttribLocation(We,"a_position"),textureLocation:e.getUniformLocation(We,"u_texture"),worldSizeLocation:e.getUniformLocation(We,"u_worldSize"),zoomLocation:e.getUniformLocation(We,"u_zoom"),panLocation:e.getUniformLocation(We,"u_pan")},lt=e.createBuffer(),!lt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,lt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},fn=e=>{const{gl:t,cellsTex:n,worldDimensions:r,zoomLevel:i,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(We),t.bindBuffer(t.ARRAY_BUFFER,lt),t.enableVertexAttribArray(Ne.positionLocation),t.vertexAttribPointer(Ne.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ne.textureLocation,0),t.uniform2f(Ne.worldSizeLocation,r.width,r.height),t.uniform1f(Ne.zoomLocation,Math.max(i,1)),t.uniform2f(Ne.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function mn(e,t,n){function r(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=n.width,a.height=n.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:i,disableFullscreen:r}}function to(e,t){const{worldDimensions:n,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const o=n.width*n.height;let u=new Array(o).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:Fo(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const hn=` attribute vec2 aPosition;

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
`;let Fe,Ie,yt,it,Dt,oo,no,et,dt;const ro=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return Ie=Io(e,[hn,pn]),Fe={uInputTextureLocation:e.getUniformLocation(Ie,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ie,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Ie,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Ie,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Ie,"uInfiniteSource"),positionLocation:e.getAttribLocation(Ie,"aPosition")},yt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,yt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),it=n,Dt=Fo(e,null,r.width,r.height),oo=eo(e,it),no=eo(e,Dt),et={fb:oo,tex:it},dt={fb:no,tex:Dt},it},xn=e=>{const{gl:t,worldDimensions:n,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,dt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,yt),t.enableVertexAttribArray(Fe.positionLocation),t.vertexAttribPointer(Fe.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,et.tex),t.useProgram(Ie),t.uniform1i(Fe.uInputTextureLocation,0),t.uniform2f(Fe.uTextureSizeLocation,n.width,n.height),t.uniform2f(Fe.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Fe.uMouseModeLocation,a),t.uniform1i(Fe.uInfiniteSourceLocation,o?1:0),t.drawArrays(t.TRIANGLES,0,6);{const u=et;et=dt,dt=u}return et.tex};function _n(e){let t,n,r,i,a=e[5]?"Play":"Pause",o,u,s,c,d=e[2]?"Disable":"Enable",m,L,E,h,l,x,R,M,X,J,pe,K,G,W,Q,te=e[0].width+"",oe,V,Y=e[0].height+"",ie,B,_=e[0].width*e[0].height+"",P,xe,_e,U,Me,ae,ue,Be,O,k,ve,S,z,se,ce,ee,le,Te,Le,Xe,N,Ge,Z,Oe,Tt,Et,ne,wt,ke,At,bt,re,gt,Mt;return{c(){t=v("canvas"),n=D(),r=v("div"),i=v("button"),o=w(a),u=w(" (Space)"),s=D(),c=v("button"),m=w(d),L=w(" constant cells generation (E)"),E=D(),h=v("button"),l=w("Zoom in (I)"),x=D(),R=v("button"),M=w("Zoom out (O)"),X=D(),J=v("button"),pe=w("Reset zoom (Z)"),K=D(),G=v("div"),W=v("span"),Q=w("World "),oe=w(te),V=w(" x "),ie=w(Y),B=w(" ("),P=w(_),xe=w(" cells)"),_e=D(),U=v("button"),Me=w("Reload program"),ae=D(),ue=v("button"),Be=w("Fullscreen (f)"),O=D(),k=v("div"),ve=v("button"),S=w("Reset world (R)"),z=D(),se=v("button"),ce=w("Empty world (E)"),ee=D(),le=v("span"),Te=v("label"),Le=w("Initial density [0-1]"),Xe=D(),N=v("input"),Ge=D(),Z=v("span"),Oe=v("label"),Tt=w("World: width"),Et=D(),ne=v("input"),wt=D(),ke=v("label"),At=w("height"),bt=D(),re=v("input"),this.h()},l(y){t=T(y,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(p),n=C(y),r=T(y,"DIV",{});var F=b(r);i=T(F,"BUTTON",{});var Rt=b(i);o=A(Rt,a),u=A(Rt," (Space)"),Rt.forEach(p),s=C(F),c=T(F,"BUTTON",{});var Lt=b(c);m=A(Lt,d),L=A(Lt," constant cells generation (E)"),Lt.forEach(p),E=C(F),h=T(F,"BUTTON",{});var Bt=b(h);l=A(Bt,"Zoom in (I)"),Bt.forEach(p),x=C(F),R=T(F,"BUTTON",{});var Nt=b(R);M=A(Nt,"Zoom out (O)"),Nt.forEach(p),X=C(F),J=T(F,"BUTTON",{});var Wt=b(J);pe=A(Wt,"Reset zoom (Z)"),Wt.forEach(p),F.forEach(p),K=C(y),G=T(y,"DIV",{});var He=b(G);W=T(He,"SPAN",{});var Se=b(W);Q=A(Se,"World "),oe=A(Se,te),V=A(Se," x "),ie=A(Se,Y),B=A(Se," ("),P=A(Se,_),xe=A(Se," cells)"),Se.forEach(p),_e=C(He),U=T(He,"BUTTON",{});var Xt=b(U);Me=A(Xt,"Reload program"),Xt.forEach(p),ae=C(He),ue=T(He,"BUTTON",{});var Gt=b(ue);Be=A(Gt,"Fullscreen (f)"),Gt.forEach(p),He.forEach(p),O=C(y),k=T(y,"DIV",{});var De=b(k);ve=T(De,"BUTTON",{});var Ot=b(ve);S=A(Ot,"Reset world (R)"),Ot.forEach(p),z=C(De),se=T(De,"BUTTON",{});var kt=b(se);ce=A(kt,"Empty world (E)"),kt.forEach(p),ee=C(De),le=T(De,"SPAN",{});var nt=b(le);Te=T(nt,"LABEL",{for:!0});var Ht=b(Te);Le=A(Ht,"Initial density [0-1]"),Ht.forEach(p),Xe=C(nt),N=T(nt,"INPUT",{id:!0,type:!0,min:!0,max:!0}),nt.forEach(p),Ge=C(De),Z=T(De,"SPAN",{});var Ce=b(Z);Oe=T(Ce,"LABEL",{for:!0});var Vt=b(Oe);Tt=A(Vt,"World: width"),Vt.forEach(p),Et=C(Ce),ne=T(Ce,"INPUT",{id:!0,type:!0,min:!0}),wt=C(Ce),ke=T(Ce,"LABEL",{for:!0});var Yt=b(ke);At=A(Yt,"height"),Yt.forEach(p),bt=C(Ce),re=T(Ce,"INPUT",{id:!0,type:!0,min:!0}),Ce.forEach(p),De.forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[7].width),g(t,"height",e[7].height),g(Te,"for","initialDensity"),g(N,"id","initialDensity"),g(N,"type","number"),g(N,"min",0),g(N,"max",1),g(Oe,"for","worldWidth"),g(ne,"id","worldWidth"),g(ne,"type","number"),g(ne,"min",0),g(ke,"for","worldHeight"),g(re,"id","worldHeight"),g(re,"type","number"),g(re,"min",0)},m(y,F){I(y,t,F),I(y,n,F),I(y,r,F),f(r,i),f(i,o),f(i,u),f(r,s),f(r,c),f(c,m),f(c,L),f(r,E),f(r,h),f(h,l),f(r,x),f(r,R),f(R,M),f(r,X),f(r,J),f(J,pe),I(y,K,F),I(y,G,F),f(G,W),f(W,Q),f(W,oe),f(W,V),f(W,ie),f(W,B),f(W,P),f(W,xe),f(G,_e),f(G,U),f(U,Me),f(G,ae),f(G,ue),f(ue,Be),I(y,O,F),I(y,k,F),f(k,ve),f(ve,S),f(k,z),f(k,se),f(se,ce),f(k,ee),f(k,le),f(le,Te),f(Te,Le),f(le,Xe),f(le,N),me(N,e[4]),f(k,Ge),f(k,Z),f(Z,Oe),f(Oe,Tt),f(Z,Et),f(Z,ne),me(ne,e[0].width),f(Z,wt),f(Z,ke),f(ke,At),f(Z,bt),f(Z,re),me(re,e[0].height),gt||(Mt=[$(i,"click",e[10]),$(c,"click",e[11]),$(h,"click",e[12]),$(R,"click",e[13]),$(J,"click",e[14]),$(U,"click",e[15]),$(ue,"click",function(){Ao(e[6])&&e[6].apply(this,arguments)}),$(ve,"click",e[16]),$(se,"click",e[17]),$(N,"input",e[18]),$(ne,"change",e[19]),$(ne,"input",e[20]),$(re,"change",e[21]),$(re,"input",e[22])],gt=!0)},p(y,[F]){e=y,F&32&&a!==(a=e[5]?"Play":"Pause")&&Ae(o,a),F&4&&d!==(d=e[2]?"Disable":"Enable")&&Ae(m,d),F&1&&te!==(te=e[0].width+"")&&Ae(oe,te),F&1&&Y!==(Y=e[0].height+"")&&Ae(ie,Y),F&1&&_!==(_=e[0].width*e[0].height+"")&&Ae(P,_),F&16&&he(N.value)!==e[4]&&me(N,e[4]),F&1&&he(ne.value)!==e[0].width&&me(ne,e[0].width),F&1&&he(re.value)!==e[0].height&&me(re,e[0].height)},i:j,o:j,d(y){y&&p(t),y&&p(n),y&&p(r),y&&p(K),y&&p(G),y&&p(O),y&&p(k),gt=!1,bo(Mt)}}}function vn(e,t,n){const r={width:1200,height:900},i={width:1200,height:900},a={x:-100,y:-100},o={x:0,y:0};let u=0,s=!0,c=1,d=.05,m=!0,L,E,h;function l(){cancelAnimationFrame(h),E=on(),un(E.canvas);const B=to(E,{mode:"random",worldDimensions:i,initialDensity:d});L=ro(E,{cellsTex:B.cellsTex,texDimensions:i}),dn(E,{screenDimensions:r,mode:"gradiant"});function _(){m||(L=xn({gl:E,worldDimensions:i,screenDimensions:r,mouseCoordinates:a,mouseMode:u,infiniteSource:s}));const P=.005;return a.x<.2&&o.x>=P&&n(1,o.x-=P,o),a.x>.8&&o.x<1-1/c&&n(1,o.x+=P,o),a.y<.2&&o.y>=P&&n(1,o.y-=P,o),a.y>.8&&o.y<1-1/c&&n(1,o.y+=P,o),fn({gl:E,cellsTex:L,worldDimensions:i,zoomLevel:c,pan:o}),h=requestAnimationFrame(_)}h=requestAnimationFrame(_)}let x;vt(()=>{l(),n(6,x=mn(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",_=>{if(_.code==="Space"&&(n(5,m=!m),_.preventDefault()),_.code==="KeyF"){x();return}if(_.code==="KeyR"){R("random");return}if(_.code==="KeyE"){R("zero");return}if(_.code==="KeyI"){n(3,c++,c);return}if(_.code==="KeyS"){n(2,s=!s);return}if(_.code==="KeyO"){n(3,c=Math.max(c-1,1)),c===1&&(n(1,o.x=0,o),n(1,o.y=0,o));return}if(_.code==="KeyZ"){n(3,c=1),n(1,o.x=0,o),n(1,o.y=0,o);return}});const B=document.getElementById("canvas");if(!B)throw new Error("Canvas unavailable");B.addEventListener("mousemove",_=>{const P=B.getBoundingClientRect(),xe=B.width/P.width,_e=B.height/P.height,U={x:(_.clientX-P.left)*xe,y:(_.clientY-P.top)*_e};a.x=U.x/r.width,a.y=U.y/r.height}),B.addEventListener("mousedown",_=>{_.preventDefault(),_.button===0?u=1:_.button===2&&(u=2)}),B.addEventListener("mouseup",_=>{_.preventDefault(),u=0}),B.addEventListener("contextmenu",_=>(_.preventDefault(),!1))});const R=B=>{n(0,i.width=Math.min(i.width,r.width),i),n(0,i.height=Math.min(i.height,r.height),i);const _=to(E,{mode:B,worldDimensions:i,initialDensity:d});L=ro(E,{cellsTex:_.cellsTex,texDimensions:i})},M=()=>n(5,m=!m),X=()=>n(2,s=!s),J=()=>n(3,c+=1),pe=()=>{n(3,c=Math.max(c-1,1)),c===1&&(n(1,o.x=0,o),n(1,o.y=0,o))},K=()=>n(3,c=1),G=()=>l(),W=()=>R("random"),Q=()=>R("zero");function te(){d=he(this.value),n(4,d)}const oe=()=>R("random");function V(){i.width=he(this.value),n(0,i)}const Y=()=>R("random");function ie(){i.height=he(this.value),n(0,i)}return[i,o,s,c,d,m,x,r,l,R,M,X,J,pe,K,G,W,Q,te,oe,V,Y,ie]}let Tn=class extends Ve{constructor(t){super(),Ye(this,t,vn,_n,Ze,{})}};const En=["VERTEX_SHADER","FRAGMENT_SHADER"];function wn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return An(t),t}function An(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function yo(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function io(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Po(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=En[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=bn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=gn(e,a,n,r,i);if(!o)throw"Can not create program";return o}function bn(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
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

`;let ye,Pe,ft;const ao=(e,t)=>{const{screenDimensions:n,mode:r}=t,{height:i,width:a}=n;let o=Sn;if(r==="gradiant"?o=Dn:r==="age_gradiant"&&(o=Cn),Pe=Po(e,[Ln,o]),ye={positionLocation:e.getAttribLocation(Pe,"a_position"),textureLocation:e.getUniformLocation(Pe,"u_texture"),worldSizeLocation:e.getUniformLocation(Pe,"u_worldSize"),zoomLocation:e.getUniformLocation(Pe,"u_zoom"),panLocation:e.getUniformLocation(Pe,"u_pan"),iterationLocation:e.getUniformLocation(Pe,"u_iteration")},ft=e.createBuffer(),!ft)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ft),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Fn=e=>{const{gl:t,cellsTex:n,worldDimensions:r,zoomLevel:i,pan:a,iteration:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Pe),t.bindBuffer(t.ARRAY_BUFFER,ft),t.enableVertexAttribArray(ye.positionLocation),t.vertexAttribPointer(ye.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(ye.textureLocation,0),t.uniform2f(ye.worldSizeLocation,r.width,r.height),t.uniform1f(ye.zoomLocation,Math.max(i,1)),t.uniform2f(ye.panLocation,a.x,a.y),t.uniform1f(ye.iterationLocation,o),t.drawArrays(t.TRIANGLES,0,6)};function uo(e,t){const{worldDimensions:n,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const o=n.width*n.height;let u=new Array(o).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:yo(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const In=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,yn=`precision highp float;

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
`;let Ee,we,Pt,at,Ct,so,co,tt,mt;const lo=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return we=Po(e,[In,yn]),Ee={uInputTextureLocation:e.getUniformLocation(we,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(we,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(we,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(we,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(we,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(we,"uIteration"),positionLocation:e.getAttribLocation(we,"aPosition")},Pt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Pt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),at=n,Ct=yo(e,null,r.width,r.height),so=io(e,at),co=io(e,Ct),tt={fb:so,tex:at},mt={fb:co,tex:Ct},at},Pn=e=>{const{gl:t,worldDimensions:n,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:o,iteration:u}=e;t.bindFramebuffer(t.FRAMEBUFFER,mt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,Pt),t.enableVertexAttribArray(Ee.positionLocation),t.vertexAttribPointer(Ee.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,tt.tex),t.useProgram(we),t.uniform1i(Ee.uInputTextureLocation,0),t.uniform2f(Ee.uTextureSizeLocation,n.width,n.height),t.uniform2f(Ee.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Ee.uMouseModeLocation,a),t.uniform1i(Ee.uInfiniteSourceLocation,o?1:0),t.uniform1f(Ee.uIterationLocation,u),t.drawArrays(t.TRIANGLES,0,6);{const s=tt;tt=mt,mt=s}return tt.tex};function $n(e){let t;return{c(){t=v("canvas"),this.h()},l(n){t=T(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),b(t).forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[0].width),g(t,"height",e[0].height),g(t,"class","svelte-1b0ol19")},m(n,r){I(n,t,r)},p:j,i:j,o:j,d(n){n&&p(t)}}}function Un(e){const t={x:0,y:0};let n=0,r,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},o={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>E("random"),"Empty grid":()=>E("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,"Pan reset":()=>{o.x=0,o.y=0},"Reload progam":()=>L()},s=async()=>{const h=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.add(u,"Pause").listen(),l.add(u,"Infinite source").listen(),l.add(u,"TimeInSeconds").listen(),l.add(u,"Iteration").listen(),l.add(u,"fps").listen(),l.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>ao(c,{screenDimensions:a,mode:u["Draw mode"]})),l.add(u,"Reset grid"),l.add(u,"Empty grid"),l.add(u,"Initial density",0,1,.01).onFinishChange(()=>E("random")),l.add(u,"World width",1,a.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"World height",1,a.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"Cells").listen(),l.add(u,"Zoom level",1,10),l.add(u,"Pan reset"),l.add(u,"Reload progam")};let c,d,m;function L(){r=Date.now()/1e3,cancelAnimationFrame(m),c=wn(),Rn(c.canvas);const h=uo(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=lo(c,{cellsTex:h.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),ao(c,{screenDimensions:a,mode:u["Draw mode"]});function l(){if(!u.Pause){const R=Date.now()/1e3,M=R-i;u.fps=1/M,i=R,u.TimeInSeconds=R-r,u.Iteration++,d=Pn({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:n,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const x=.005;return t.x<.1&&o.x>=x&&(o.x-=x),t.x>.9&&o.x<1-1/u["Zoom level"]&&(o.x+=x),t.y<.1&&o.y>=x&&(o.y-=x),t.y>.9&&o.y<1-1/u["Zoom level"]&&(o.y+=x),Fn({gl:c,cellsTex:d,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:o,iteration:u.Iteration}),m=requestAnimationFrame(l)}m=requestAnimationFrame(l)}vt(()=>{L(),s(),document.addEventListener("keydown",l=>{if(l.code==="Space"&&(u.Pause=!u.Pause,l.preventDefault()),l.code==="KeyR"){E("random");return}if(l.code==="KeyE"){E("zero");return}if(l.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const x=h.getBoundingClientRect(),R=h.width/x.width,M=h.height/x.height,X={x:(l.clientX-x.left)*R,y:(l.clientY-x.top)*M};t.x=X.x/a.width,t.y=X.y/a.height}),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?n=1:l.button===2&&(n=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),n=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))});const E=h=>{u.Iteration=0,u.TimeInSeconds=0;const l=uo(c,{mode:h,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=lo(c,{cellsTex:l.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[a]}let zn=class extends Ve{constructor(t){super(),Ye(this,t,Un,$n,Ze,{})}};const Mn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Bn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Nn(t),t}function Nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function $o(e,t,n,r){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function fo(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function Uo(e,t,n,r,i){const a=[];for(let u=0;u<t.length;++u){const s=Mn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Wn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const o=Xn(e,a,n,r,i);if(!o)throw"Can not create program";return o}function Wn(e,t,n,r){const i=r||console.log,a=e.createShader(n);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function Xn(e,t,n,r,i){const a=i||console.log,o=e.createProgram();if(!o)throw"Could not create program";if(t.forEach(function(s){e.attachShader(o,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(o,r?r[c]:c,s)}),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o);return a("Error in program linking:"+s),e.deleteProgram(o),null}return o}function Gn(e,t){t=t||1;const n=e.clientWidth*t|0,r=e.clientHeight*t|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const On=`precision mediump float;
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

`;let $e,Ue,ht;const mo=(e,t)=>{const{screenDimensions:n,mode:r}=t,{height:i,width:a}=n;let o=kn;if(r==="gradiant"?o=Hn:r==="age_gradiant"&&(o=Vn),Ue=Uo(e,[On,o]),$e={positionLocation:e.getAttribLocation(Ue,"a_position"),textureLocation:e.getUniformLocation(Ue,"u_texture"),worldSizeLocation:e.getUniformLocation(Ue,"u_worldSize"),zoomLocation:e.getUniformLocation(Ue,"u_zoom"),panLocation:e.getUniformLocation(Ue,"u_pan"),iterationLocation:e.getUniformLocation(Ue,"u_iteration")},ht=e.createBuffer(),!ht)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ht),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Yn=e=>{const{gl:t,cellsTex:n,worldDimensions:r,zoomLevel:i,pan:a,iteration:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram(Ue),t.bindBuffer(t.ARRAY_BUFFER,ht),t.enableVertexAttribArray($e.positionLocation),t.vertexAttribPointer($e.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i($e.textureLocation,0),t.uniform2f($e.worldSizeLocation,r.width,r.height),t.uniform1f($e.zoomLocation,Math.max(i,1)),t.uniform2f($e.panLocation,a.x,a.y),t.uniform1f($e.iterationLocation,o),t.drawArrays(t.TRIANGLES,0,6)};function ho(e,t){const{worldDimensions:n,initialDensity:r,mode:i}=t;let a=r;a>1&&(a=1);const o=n.width*n.height;let u=new Array(o).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:$o(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),n.width,n.height)}}const Zn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Kn=`precision highp float;

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
`;let de,fe,$t,ut,Ft,po,xo,ot,pt;const _o=(e,t)=>{const{cellsTex:n,texDimensions:r}=t;return fe=Uo(e,[Zn,Kn]),de={uInputTextureLocation:e.getUniformLocation(fe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(fe,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(fe,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(fe,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(fe,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(fe,"uIteration"),uPauseLocation:e.getUniformLocation(fe,"uPause"),positionLocation:e.getAttribLocation(fe,"aPosition")},$t=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,$t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ut=n,Ft=$o(e,null,r.width,r.height),po=fo(e,ut),xo=fo(e,Ft),ot={fb:po,tex:ut},pt={fb:xo,tex:Ft},ut},qn=e=>{const{gl:t,worldDimensions:n,screenDimensions:r,mouseCoordinates:i,mouseMode:a,infiniteSource:o,iteration:u,pause:s}=e;t.bindFramebuffer(t.FRAMEBUFFER,pt.fb),t.viewport(0,0,r.width,r.height),t.bindBuffer(t.ARRAY_BUFFER,$t),t.enableVertexAttribArray(de.positionLocation),t.vertexAttribPointer(de.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ot.tex),t.useProgram(fe),t.uniform1i(de.uInputTextureLocation,0),t.uniform2f(de.uTextureSizeLocation,n.width,n.height),t.uniform2f(de.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(de.uMouseModeLocation,a),t.uniform1i(de.uInfiniteSourceLocation,o?1:0),t.uniform1f(de.uIterationLocation,u),t.uniform1i(de.uPauseLocation,s?1:0),t.drawArrays(t.TRIANGLES,0,6);{const c=ot;ot=pt,pt=c}return ot.tex};function jn(e){let t;return{c(){t=v("canvas"),this.h()},l(n){t=T(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),b(t).forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[0].width),g(t,"height",e[0].height),g(t,"class","svelte-1b0ol19")},m(n,r){I(n,t,r)},p:j,i:j,o:j,d(n){n&&p(t)}}}function Jn(e){const t={x:0,y:0};let n=0,r,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},o={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>E("random"),"Empty grid":()=>E("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,previousZoomLevel:1,Pan:{x:0,y:0,xController:null,yController:null},"Reload progam":()=>L()},u=async()=>{const h=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.add(o,"Pause").listen(),l.add(o,"Infinite source").listen(),l.add(o,"TimeInSeconds").listen(),l.add(o,"Iteration").listen(),l.add(o,"fps").listen(),l.add(o,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>mo(c,{screenDimensions:a,mode:o["Draw mode"]})),l.add(o,"Reset grid"),l.add(o,"Empty grid"),l.add(o,"Initial density",0,1,.01).onFinishChange(()=>E("random")),l.add(o,"World width",1,a.width,1).onFinishChange(()=>{o.Cells=(o["World height"]*o["World width"]).toString(),E("random")}),l.add(o,"World height",1,a.height,1).onFinishChange(()=>{o.Cells=(o["World height"]*o["World width"]).toString(),E("random")}),l.add(o,"Cells").listen(),l.add(o,"Zoom level",1,10).onChange(R=>{const M=R-o.previousZoomLevel;o.previousZoomLevel=R,!(!o.Pan?.xController||!o.Pan?.yController||M===0)&&(o.Pan.xController.max(1-1/o["Zoom level"]),o.Pan.yController.max(1-1/o["Zoom level"]),console.log({levelDiff:M}))});const x=l.addFolder("Pan");o.Pan.xController=x.add(o.Pan,"x",0,0,.01).listen(),o.Pan.yController=x.add(o.Pan,"y",0,0,.01).listen(),x.open(),l.add(o,"Reload progam")},s=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space"&&(o.Pause=!o.Pause,l.preventDefault()),l.code==="KeyR"){E("random");return}if(l.code==="KeyE"){E("zero");return}if(l.code==="KeyS"){o["Infinite source"]=!o["Infinite source"];return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const x=h.getBoundingClientRect(),R=h.width/x.width,M=h.height/x.height,X={x:(l.clientX-x.left)*R,y:(l.clientY-x.top)*M};t.x=X.x/a.width,t.y=X.y/a.height}),setInterval(()=>{t.x<.1&&o.Pan.x>=.005&&(o.Pan.x-=.005),t.x>.9&&o.Pan.x<1-1/o["Zoom level"]&&(o.Pan.x+=.005),t.y<.1&&o.Pan.y>=.005&&(o.Pan.y-=.005),t.y>.9&&o.Pan.y<1-1/o["Zoom level"]&&(o.Pan.y+=.005)},50),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?n=1:l.button===2&&(n=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),n=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))};let c,d,m;function L(){r=Date.now()/1e3,cancelAnimationFrame(m),c=Bn(),Gn(c.canvas);const h=ho(c,{mode:"random",worldDimensions:{width:o["World width"],height:o["World height"]},initialDensity:o["Initial density"]});d=_o(c,{cellsTex:h.cellsTex,texDimensions:{width:o["World width"],height:o["World height"]}}),mo(c,{screenDimensions:a,mode:o["Draw mode"]});function l(){if(!o.Pause){const x=Date.now()/1e3,R=x-i;o.fps=1/R,i=x,o.TimeInSeconds=x-r,o.Iteration++}return d=qn({gl:c,worldDimensions:{width:o["World width"],height:o["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:n,infiniteSource:o["Infinite source"],iteration:o.Iteration,pause:o.Pause}),Yn({gl:c,cellsTex:d,worldDimensions:{width:o["World width"],height:o["World height"]},zoomLevel:o["Zoom level"],pan:o.Pan,iteration:o.Iteration}),m=requestAnimationFrame(l)}m=requestAnimationFrame(l)}vt(()=>{L(),u(),s()});const E=h=>{o.Iteration=0,o.TimeInSeconds=0;const l=ho(c,{mode:h,worldDimensions:{width:o["World width"],height:o["World height"]},initialDensity:o["Initial density"]});d=_o(c,{cellsTex:l.cellsTex,texDimensions:{width:o["World width"],height:o["World height"]}})};return[a]}class Qn extends Ve{constructor(t){super(),Ye(this,t,Jn,jn,Ze,{})}}function vo(e,t,n){const r=e.slice();return r[1]=t[n],r}function To(e,t,n){const r=e.slice();return r[1]=t[n],r}function er(e){let t;return{c(){t=w("About")},l(n){t=A(n,"About")},m(n,r){I(n,t,r)},d(n){n&&p(t)}}}function tr(e){let t=e[1].title+"",n;return{c(){n=w(t)},l(r){n=A(r,t)},m(r,i){I(r,n,i)},p:j,d(r){r&&p(n)}}}function Eo(e){let t,n;return t=new Lo({props:{$$slots:{default:[tr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){ze(t.$$.fragment,r)},m(r,i){ge(t,r,i),n=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){n||(H(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){Re(t,r)}}}function or(e){let t,n,r,i;t=new Lo({props:{$$slots:{default:[er]},$$scope:{ctx:e}}});let a=e[0],o=[];for(let s=0;s<a.length;s+=1)o[s]=Eo(To(e,a,s));const u=s=>q(o[s],1,1,()=>{o[s]=null});return{c(){be(t.$$.fragment),n=D();for(let s=0;s<o.length;s+=1)o[s].c();r=xt()},l(s){ze(t.$$.fragment,s),n=C(s);for(let c=0;c<o.length;c+=1)o[c].l(s);r=xt()},m(s,c){ge(t,s,c),I(s,n,c);for(let d=0;d<o.length;d+=1)o[d].m(s,c);I(s,r,c),i=!0},p(s,c){const d={};if(c&64&&(d.$$scope={dirty:c,ctx:s}),t.$set(d),c&1){a=s[0];let m;for(m=0;m<a.length;m+=1){const L=To(s,a,m);o[m]?(o[m].p(L,c),H(o[m],1)):(o[m]=Eo(L),o[m].c(),H(o[m],1),o[m].m(r.parentNode,r))}for(Ut(),m=a.length;m<o.length;m+=1)u(m);zt()}},i(s){if(!i){H(t.$$.fragment,s);for(let c=0;c<a.length;c+=1)H(o[c]);i=!0}},o(s){q(t.$$.fragment,s),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)q(o[c]);i=!1},d(s){Re(t,s),s&&p(n),go(o,s),s&&p(r)}}}function nr(e){let t,n;return{c(){t=v("p"),n=w("Experiments running Conway's Game of Life in WebGL shaders.")},l(r){t=T(r,"P",{});var i=b(t);n=A(i,"Experiments running Conway's Game of Life in WebGL shaders."),i.forEach(p)},m(r,i){I(r,t,i),f(t,n)},p:j,d(r){r&&p(t)}}}function rr(e){let t,n,r;var i=e[1].component;function a(o){return{}}return i&&(t=Zt(i,a())),{c(){t&&be(t.$$.fragment),n=D()},l(o){t&&ze(t.$$.fragment,o),n=C(o)},m(o,u){t&&ge(t,o,u),I(o,n,u),r=!0},p(o,u){if(i!==(i=o[1].component)){if(t){Ut();const s=t;q(s.$$.fragment,1,0,()=>{Re(s,1)}),zt()}i?(t=Zt(i,a()),be(t.$$.fragment),H(t.$$.fragment,1),ge(t,n.parentNode,n)):t=null}},i(o){r||(t&&H(t.$$.fragment,o),r=!0)},o(o){t&&q(t.$$.fragment,o),r=!1},d(o){t&&Re(t,o),o&&p(n)}}}function wo(e){let t,n;return t=new Ro({props:{$$slots:{default:[rr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(r){ze(t.$$.fragment,r)},m(r,i){ge(t,r,i),n=!0},p(r,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){n||(H(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){Re(t,r)}}}function ir(e){let t,n,r,i,a,o;t=new Mo({props:{$$slots:{default:[or]},$$scope:{ctx:e}}}),r=new Ro({props:{$$slots:{default:[nr]},$$scope:{ctx:e}}});let u=e[0],s=[];for(let d=0;d<u.length;d+=1)s[d]=wo(vo(e,u,d));const c=d=>q(s[d],1,1,()=>{s[d]=null});return{c(){be(t.$$.fragment),n=D(),be(r.$$.fragment),i=D();for(let d=0;d<s.length;d+=1)s[d].c();a=xt()},l(d){ze(t.$$.fragment,d),n=C(d),ze(r.$$.fragment,d),i=C(d);for(let m=0;m<s.length;m+=1)s[m].l(d);a=xt()},m(d,m){ge(t,d,m),I(d,n,m),ge(r,d,m),I(d,i,m);for(let L=0;L<s.length;L+=1)s[L].m(d,m);I(d,a,m),o=!0},p(d,m){const L={};m&64&&(L.$$scope={dirty:m,ctx:d}),t.$set(L);const E={};if(m&64&&(E.$$scope={dirty:m,ctx:d}),r.$set(E),m&1){u=d[0];let h;for(h=0;h<u.length;h+=1){const l=vo(d,u,h);s[h]?(s[h].p(l,m),H(s[h],1)):(s[h]=wo(l),s[h].c(),H(s[h],1),s[h].m(a.parentNode,a))}for(Ut(),h=u.length;h<s.length;h+=1)c(h);zt()}},i(d){if(!o){H(t.$$.fragment,d),H(r.$$.fragment,d);for(let m=0;m<u.length;m+=1)H(s[m]);o=!0}},o(d){q(t.$$.fragment,d),q(r.$$.fragment,d),s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)q(s[m]);o=!1},d(d){Re(t,d),d&&p(n),Re(r,d),d&&p(i),go(s,d),d&&p(a)}}}function ar(e){let t,n,r;return n=new zo({props:{$$slots:{default:[ir]},$$scope:{ctx:e}}}),{c(){t=v("div"),be(n.$$.fragment)},l(i){t=T(i,"DIV",{});var a=b(t);ze(n.$$.fragment,a),a.forEach(p)},m(i,a){I(i,t,a),ge(n,t,null),r=!0},p(i,[a]){const o={};a&64&&(o.$$scope={dirty:a,ctx:i}),n.$set(o)},i(i){r||(H(n.$$.fragment,i),r=!0)},o(i){q(n.$$.fragment,i),r=!1},d(i){i&&p(t),Re(n)}}}function ur(e){return[[{title:"V4",component:Qn},{title:"V3",component:zn},{title:"V2",component:Tn},{title:"V1",component:en}]]}class sr extends Ve{constructor(t){super(),Ye(this,t,ur,ar,Ze,{})}}function cr(e){let t,n;return t=new sr({}),{c(){be(t.$$.fragment)},l(r){ze(t.$$.fragment,r)},m(r,i){ge(t,r,i),n=!0},p:j,i(r){n||(H(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){Re(t,r)}}}class xr extends Ve{constructor(t){super(),Ye(this,t,null,cr,Ze,{})}}export{xr as default};
