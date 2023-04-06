import{S as He,i as Ye,s as Ke,k as v,a as C,q as w,l as T,m as b,h as p,c as D,r as A,n as g,p as _t,b as I,D as f,O as de,K as $,R as Ao,u as Ae,P as fe,B as j,M as bo,o as vt,w as be,x as Ue,y as ge,f as V,t as q,z as Re,e as xt,g as zt,d as Ut,L as go,v as Kt}from"../../../chunks/index-46ced799.js";import{T as Uo,a as Bo,b as Ro,c as Lo}from"../../../chunks/TabPanel-3f95d051.js";import{_ as So}from"../../../chunks/preload-helper-41c905a7.js";const Mo=["VERTEX_SHADER","FRAGMENT_SHADER"];function No(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Wo(t),t}function Wo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Co(e,t,o,n){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function Zt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Do(e,t,o,n,i){const a=[];for(let u=0;u<t.length;++u){const s=Mo[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Xo(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const r=Go(e,a,o,n,i);if(!r)throw"Can not create program";return r}function Xo(e,t,o,n){const i=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function Go(e,t,o,n,i){const a=i||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(s){e.attachShader(r,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(r,n?n[c]:c,s)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const s=e.getProgramInfoLog(r);return a("Error in program linking:"+s),e.deleteProgram(r),null}return r}function Oo(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const ko=`attribute vec2 a_position;
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

`,Vo=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let Ze,qe,st;const Ho=(e,t)=>{const{screenDimensions:o}=t,{height:n,width:i}=o;if(qe=Do(e,[ko,Vo]),Ze={positionLocation:e.getAttribLocation(qe,"a_position"),textureLocation:e.getUniformLocation(qe,"u_texture"),worldSizeLocation:e.getUniformLocation(qe,"u_worldSize")},st=e.createBuffer(),!st)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,st),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,n,i,0,i,0,0,n,i,n]),e.STATIC_DRAW)},Yo=e=>{const{gl:t,cellsTex:o,worldDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(qe),t.bindBuffer(t.ARRAY_BUFFER,st),t.enableVertexAttribArray(Ze.positionLocation),t.vertexAttribPointer(Ze.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ze.textureLocation,0),t.uniform2f(Ze.worldSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6)};function Ko(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:i,disableFullscreen:n}}function qt(e,t){const{worldDimensions:o}=t,n=o.width*o.height,i=new Array(n).fill(0).map(r=>Math.random()<.5?1:0);return{cellsTex:Co(e,new Float32Array(i.map(r=>[r,0,0,0]).flat()),o.width,o.height)}}const Zo=` attribute vec2 aPosition;

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
`;let je,Je,It,rt,St,jt,Jt,Qe,ct;const Qt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Je=Do(e,[Zo,qo]),je={uInputTextureLocation:e.getUniformLocation(Je,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Je,"uTextureSize"),positionLocation:e.getAttribLocation(Je,"aPosition")},It=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,It),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),rt=o,St=Co(e,null,n.width,n.height),jt=Zt(e,rt),Jt=Zt(e,St),Qe={fb:jt,tex:rt},ct={fb:Jt,tex:St},rt},jo=e=>{const{gl:t,worldDimensions:o,screenDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,ct.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,It),t.enableVertexAttribArray(je.positionLocation),t.vertexAttribPointer(je.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Qe.tex),t.useProgram(Je),t.uniform1i(je.uInputTextureLocation,0),t.uniform2f(je.uTextureSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6);{const i=Qe;Qe=ct,ct=i}return Qe.tex};function Jo(e){let t,o,n,i,a=e[1]?"Play":"Pause",r,u,s,c,d,m,L=e[0].width+"",E,h,l=e[0].height+"",x,R,N=e[0].width*e[0].height+"",X,J,me,Z,G,W,Q,te,oe,H,Y,ie,B,_,P,he,pe,z,Be,ae,ue,Me,O,k,xe;return{c(){t=v("canvas"),o=C(),n=v("div"),i=v("button"),r=w(a),u=w(" (Space)"),s=C(),c=v("div"),d=v("span"),m=w("World "),E=w(L),h=w(" x "),x=w(l),R=w(" ("),X=w(N),J=w(" cells)"),me=C(),Z=v("button"),G=w("Reload program"),W=C(),Q=v("button"),te=w("Fullscreen (f)"),oe=C(),H=v("div"),Y=v("button"),ie=w("Reset world (r)"),B=C(),_=v("span"),P=v("label"),he=w("World: width"),pe=C(),z=v("input"),Be=C(),ae=v("label"),ue=w("height"),Me=C(),O=v("input"),this.h()},l(S){t=T(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(p),o=D(S),n=T(S,"DIV",{});var U=b(n);i=T(U,"BUTTON",{});var se=b(i);r=A(se,a),u=A(se," (Space)"),se.forEach(p),U.forEach(p),s=D(S),c=T(S,"DIV",{});var ce=b(c);d=T(ce,"SPAN",{});var ee=b(d);m=A(ee,"World "),E=A(ee,L),h=A(ee," x "),x=A(ee,l),R=A(ee," ("),X=A(ee,N),J=A(ee," cells)"),ee.forEach(p),me=D(ce),Z=T(ce,"BUTTON",{});var le=b(Z);G=A(le,"Reload program"),le.forEach(p),W=D(ce),Q=T(ce,"BUTTON",{});var _e=b(Q);te=A(_e,"Fullscreen (f)"),_e.forEach(p),ce.forEach(p),oe=D(S),H=T(S,"DIV",{});var Le=b(H);Y=T(Le,"BUTTON",{});var Xe=b(Y);ie=A(Xe,"Reset world (r)"),Xe.forEach(p),B=D(Le),_=T(Le,"SPAN",{});var M=b(_);P=T(M,"LABEL",{for:!0});var Ge=b(P);he=A(Ge,"World: width"),Ge.forEach(p),pe=D(M),z=T(M,"INPUT",{id:!0,type:!0,min:!0}),Be=D(M),ae=T(M,"LABEL",{for:!0});var K=b(ae);ue=A(K,"height"),K.forEach(p),Me=D(M),O=T(M,"INPUT",{id:!0,type:!0,min:!0}),M.forEach(p),Le.forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[3].width),g(t,"height",e[3].height),g(P,"for","worldWidth"),g(z,"id","worldWidth"),g(z,"type","number"),g(z,"min",0),g(ae,"for","worldHeight"),g(O,"id","worldHeight"),g(O,"type","number"),g(O,"min",0)},m(S,U){I(S,t,U),I(S,o,U),I(S,n,U),f(n,i),f(i,r),f(i,u),I(S,s,U),I(S,c,U),f(c,d),f(d,m),f(d,E),f(d,h),f(d,x),f(d,R),f(d,X),f(d,J),f(c,me),f(c,Z),f(Z,G),f(c,W),f(c,Q),f(Q,te),I(S,oe,U),I(S,H,U),f(H,Y),f(Y,ie),f(H,B),f(H,_),f(_,P),f(P,he),f(_,pe),f(_,z),de(z,e[0].width),f(_,Be),f(_,ae),f(ae,ue),f(_,Me),f(_,O),de(O,e[0].height),k||(xe=[$(i,"click",e[6]),$(Z,"click",e[7]),$(Q,"click",function(){Ao(e[2])&&e[2].apply(this,arguments)}),$(Y,"click",e[5]),$(z,"change",e[5]),$(z,"input",e[8]),$(O,"change",e[5]),$(O,"input",e[9])],k=!0)},p(S,[U]){e=S,U&2&&a!==(a=e[1]?"Play":"Pause")&&Ae(r,a),U&1&&L!==(L=e[0].width+"")&&Ae(E,L),U&1&&l!==(l=e[0].height+"")&&Ae(x,l),U&1&&N!==(N=e[0].width*e[0].height+"")&&Ae(X,N),U&1&&fe(z.value)!==e[0].width&&de(z,e[0].width),U&1&&fe(O.value)!==e[0].height&&de(O,e[0].height)},i:j,o:j,d(S){S&&p(t),S&&p(o),S&&p(n),S&&p(s),S&&p(c),S&&p(oe),S&&p(H),k=!1,bo(xe)}}}function Qo(e,t,o){const n={width:1600,height:900},i={width:1600,height:900};let a=!0,r,u,s;function c(){cancelAnimationFrame(s),u=No(),Oo(u.canvas);const x=qt(u,{worldDimensions:i});r=Qt(u,{cellsTex:x.cellsTex,texDimensions:i}),Ho(u,{screenDimensions:n});function R(){return a||(r=jo({gl:u,worldDimensions:i,screenDimensions:n})),Yo({gl:u,cellsTex:r,worldDimensions:i}),s=requestAnimationFrame(R)}s=requestAnimationFrame(R)}let d;vt(()=>{c(),o(2,d=Ko(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",x=>{if(x.code==="Space"&&(o(1,a=!a),x.preventDefault()),x.code==="KeyF"){d();return}if(x.code==="KeyR"){m();return}})});const m=()=>{o(0,i.width=Math.min(i.width,n.width),i),o(0,i.height=Math.min(i.height,n.height),i);const x=qt(u,{worldDimensions:i});r=Qt(u,{cellsTex:x.cellsTex,texDimensions:i})},L=()=>o(1,a=!a),E=()=>c();function h(){i.width=fe(this.value),o(0,i)}function l(){i.height=fe(this.value),o(0,i)}return[i,a,d,n,c,m,L,E,h,l]}class en extends He{constructor(t){super(),Ye(this,t,Qo,Jo,Ke,{})}}const tn=["VERTEX_SHADER","FRAGMENT_SHADER"];function on(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return nn(t),t}function nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Fo(e,t,o,n){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function eo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Io(e,t,o,n,i){const a=[];for(let u=0;u<t.length;++u){const s=tn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=rn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const r=an(e,a,o,n,i);if(!r)throw"Can not create program";return r}function rn(e,t,o,n){const i=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function an(e,t,o,n,i){const a=i||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(s){e.attachShader(r,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(r,n?n[c]:c,s)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const s=e.getProgramInfoLog(r);return a("Error in program linking:"+s),e.deleteProgram(r),null}return r}function un(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const sn=`precision mediump float;
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

`;let Ne,We,lt;const dn=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:i,width:a}=o;let r=cn;if(n==="gradiant"&&(r=ln),We=Io(e,[sn,r]),Ne={positionLocation:e.getAttribLocation(We,"a_position"),textureLocation:e.getUniformLocation(We,"u_texture"),worldSizeLocation:e.getUniformLocation(We,"u_worldSize"),zoomLocation:e.getUniformLocation(We,"u_zoom"),panLocation:e.getUniformLocation(We,"u_pan")},lt=e.createBuffer(),!lt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,lt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},fn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:i,pan:a}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(We),t.bindBuffer(t.ARRAY_BUFFER,lt),t.enableVertexAttribArray(Ne.positionLocation),t.vertexAttribPointer(Ne.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ne.textureLocation,0),t.uniform2f(Ne.worldSizeLocation,n.width,n.height),t.uniform1f(Ne.zoomLocation,Math.max(i,1)),t.uniform2f(Ne.panLocation,a.x,a.y),t.drawArrays(t.TRIANGLES,0,6)};function mn(e,t,o){function n(){const a=e.getElementById(t);a&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),a.width=o.width,a.height=o.height)}function i(){const a=e.getElementById(t);a&&(e.fullscreenElement||a.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:i,disableFullscreen:n}}function to(e,t){const{worldDimensions:o,initialDensity:n,mode:i}=t;let a=n;a>1&&(a=1);const r=o.width*o.height;let u=new Array(r).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:Fo(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),o.width,o.height)}}const hn=` attribute vec2 aPosition;

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
`;let Fe,Ie,yt,it,Ct,oo,no,et,dt;const ro=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Ie=Io(e,[hn,pn]),Fe={uInputTextureLocation:e.getUniformLocation(Ie,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ie,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Ie,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Ie,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Ie,"uInfiniteSource"),positionLocation:e.getAttribLocation(Ie,"aPosition")},yt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,yt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),it=o,Ct=Fo(e,null,n.width,n.height),oo=eo(e,it),no=eo(e,Ct),et={fb:oo,tex:it},dt={fb:no,tex:Ct},it},xn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:i,mouseMode:a,infiniteSource:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,dt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,yt),t.enableVertexAttribArray(Fe.positionLocation),t.vertexAttribPointer(Fe.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,et.tex),t.useProgram(Ie),t.uniform1i(Fe.uInputTextureLocation,0),t.uniform2f(Fe.uTextureSizeLocation,o.width,o.height),t.uniform2f(Fe.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Fe.uMouseModeLocation,a),t.uniform1i(Fe.uInfiniteSourceLocation,r?1:0),t.drawArrays(t.TRIANGLES,0,6);{const u=et;et=dt,dt=u}return et.tex};function _n(e){let t,o,n,i,a=e[5]?"Play":"Pause",r,u,s,c,d=e[2]?"Disable":"Enable",m,L,E,h,l,x,R,N,X,J,me,Z,G,W,Q,te=e[0].width+"",oe,H,Y=e[0].height+"",ie,B,_=e[0].width*e[0].height+"",P,he,pe,z,Be,ae,ue,Me,O,k,xe,S,U,se,ce,ee,le,_e,Le,Xe,M,Ge,K,Oe,Tt,Et,ne,wt,ke,At,bt,re,gt,Bt;return{c(){t=v("canvas"),o=C(),n=v("div"),i=v("button"),r=w(a),u=w(" (Space)"),s=C(),c=v("button"),m=w(d),L=w(" constant cells generation (E)"),E=C(),h=v("button"),l=w("Zoom in (I)"),x=C(),R=v("button"),N=w("Zoom out (O)"),X=C(),J=v("button"),me=w("Reset zoom (Z)"),Z=C(),G=v("div"),W=v("span"),Q=w("World "),oe=w(te),H=w(" x "),ie=w(Y),B=w(" ("),P=w(_),he=w(" cells)"),pe=C(),z=v("button"),Be=w("Reload program"),ae=C(),ue=v("button"),Me=w("Fullscreen (f)"),O=C(),k=v("div"),xe=v("button"),S=w("Reset world (R)"),U=C(),se=v("button"),ce=w("Empty world (E)"),ee=C(),le=v("span"),_e=v("label"),Le=w("Initial density [0-1]"),Xe=C(),M=v("input"),Ge=C(),K=v("span"),Oe=v("label"),Tt=w("World: width"),Et=C(),ne=v("input"),wt=C(),ke=v("label"),At=w("height"),bt=C(),re=v("input"),this.h()},l(y){t=T(y,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(p),o=D(y),n=T(y,"DIV",{});var F=b(n);i=T(F,"BUTTON",{});var Rt=b(i);r=A(Rt,a),u=A(Rt," (Space)"),Rt.forEach(p),s=D(F),c=T(F,"BUTTON",{});var Lt=b(c);m=A(Lt,d),L=A(Lt," constant cells generation (E)"),Lt.forEach(p),E=D(F),h=T(F,"BUTTON",{});var Mt=b(h);l=A(Mt,"Zoom in (I)"),Mt.forEach(p),x=D(F),R=T(F,"BUTTON",{});var Nt=b(R);N=A(Nt,"Zoom out (O)"),Nt.forEach(p),X=D(F),J=T(F,"BUTTON",{});var Wt=b(J);me=A(Wt,"Reset zoom (Z)"),Wt.forEach(p),F.forEach(p),Z=D(y),G=T(y,"DIV",{});var Ve=b(G);W=T(Ve,"SPAN",{});var Se=b(W);Q=A(Se,"World "),oe=A(Se,te),H=A(Se," x "),ie=A(Se,Y),B=A(Se," ("),P=A(Se,_),he=A(Se," cells)"),Se.forEach(p),pe=D(Ve),z=T(Ve,"BUTTON",{});var Xt=b(z);Be=A(Xt,"Reload program"),Xt.forEach(p),ae=D(Ve),ue=T(Ve,"BUTTON",{});var Gt=b(ue);Me=A(Gt,"Fullscreen (f)"),Gt.forEach(p),Ve.forEach(p),O=D(y),k=T(y,"DIV",{});var Ce=b(k);xe=T(Ce,"BUTTON",{});var Ot=b(xe);S=A(Ot,"Reset world (R)"),Ot.forEach(p),U=D(Ce),se=T(Ce,"BUTTON",{});var kt=b(se);ce=A(kt,"Empty world (E)"),kt.forEach(p),ee=D(Ce),le=T(Ce,"SPAN",{});var nt=b(le);_e=T(nt,"LABEL",{for:!0});var Vt=b(_e);Le=A(Vt,"Initial density [0-1]"),Vt.forEach(p),Xe=D(nt),M=T(nt,"INPUT",{id:!0,type:!0,min:!0,max:!0}),nt.forEach(p),Ge=D(Ce),K=T(Ce,"SPAN",{});var De=b(K);Oe=T(De,"LABEL",{for:!0});var Ht=b(Oe);Tt=A(Ht,"World: width"),Ht.forEach(p),Et=D(De),ne=T(De,"INPUT",{id:!0,type:!0,min:!0}),wt=D(De),ke=T(De,"LABEL",{for:!0});var Yt=b(ke);At=A(Yt,"height"),Yt.forEach(p),bt=D(De),re=T(De,"INPUT",{id:!0,type:!0,min:!0}),De.forEach(p),Ce.forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[7].width),g(t,"height",e[7].height),g(_e,"for","initialDensity"),g(M,"id","initialDensity"),g(M,"type","number"),g(M,"min",0),g(M,"max",1),g(Oe,"for","worldWidth"),g(ne,"id","worldWidth"),g(ne,"type","number"),g(ne,"min",0),g(ke,"for","worldHeight"),g(re,"id","worldHeight"),g(re,"type","number"),g(re,"min",0)},m(y,F){I(y,t,F),I(y,o,F),I(y,n,F),f(n,i),f(i,r),f(i,u),f(n,s),f(n,c),f(c,m),f(c,L),f(n,E),f(n,h),f(h,l),f(n,x),f(n,R),f(R,N),f(n,X),f(n,J),f(J,me),I(y,Z,F),I(y,G,F),f(G,W),f(W,Q),f(W,oe),f(W,H),f(W,ie),f(W,B),f(W,P),f(W,he),f(G,pe),f(G,z),f(z,Be),f(G,ae),f(G,ue),f(ue,Me),I(y,O,F),I(y,k,F),f(k,xe),f(xe,S),f(k,U),f(k,se),f(se,ce),f(k,ee),f(k,le),f(le,_e),f(_e,Le),f(le,Xe),f(le,M),de(M,e[4]),f(k,Ge),f(k,K),f(K,Oe),f(Oe,Tt),f(K,Et),f(K,ne),de(ne,e[0].width),f(K,wt),f(K,ke),f(ke,At),f(K,bt),f(K,re),de(re,e[0].height),gt||(Bt=[$(i,"click",e[10]),$(c,"click",e[11]),$(h,"click",e[12]),$(R,"click",e[13]),$(J,"click",e[14]),$(z,"click",e[15]),$(ue,"click",function(){Ao(e[6])&&e[6].apply(this,arguments)}),$(xe,"click",e[16]),$(se,"click",e[17]),$(M,"input",e[18]),$(ne,"change",e[19]),$(ne,"input",e[20]),$(re,"change",e[21]),$(re,"input",e[22])],gt=!0)},p(y,[F]){e=y,F&32&&a!==(a=e[5]?"Play":"Pause")&&Ae(r,a),F&4&&d!==(d=e[2]?"Disable":"Enable")&&Ae(m,d),F&1&&te!==(te=e[0].width+"")&&Ae(oe,te),F&1&&Y!==(Y=e[0].height+"")&&Ae(ie,Y),F&1&&_!==(_=e[0].width*e[0].height+"")&&Ae(P,_),F&16&&fe(M.value)!==e[4]&&de(M,e[4]),F&1&&fe(ne.value)!==e[0].width&&de(ne,e[0].width),F&1&&fe(re.value)!==e[0].height&&de(re,e[0].height)},i:j,o:j,d(y){y&&p(t),y&&p(o),y&&p(n),y&&p(Z),y&&p(G),y&&p(O),y&&p(k),gt=!1,bo(Bt)}}}function vn(e,t,o){const n={width:1200,height:900},i={width:1200,height:900},a={x:-100,y:-100},r={x:0,y:0};let u=0,s=!0,c=1,d=.05,m=!0,L,E,h;function l(){cancelAnimationFrame(h),E=on(),un(E.canvas);const B=to(E,{mode:"random",worldDimensions:i,initialDensity:d});L=ro(E,{cellsTex:B.cellsTex,texDimensions:i}),dn(E,{screenDimensions:n,mode:"gradiant"});function _(){m||(L=xn({gl:E,worldDimensions:i,screenDimensions:n,mouseCoordinates:a,mouseMode:u,infiniteSource:s}));const P=.005;return a.x<.2&&r.x>=P&&o(1,r.x-=P,r),a.x>.8&&r.x<1-1/c&&o(1,r.x+=P,r),a.y<.2&&r.y>=P&&o(1,r.y-=P,r),a.y>.8&&r.y<1-1/c&&o(1,r.y+=P,r),fn({gl:E,cellsTex:L,worldDimensions:i,zoomLevel:c,pan:r}),h=requestAnimationFrame(_)}h=requestAnimationFrame(_)}let x;vt(()=>{l(),o(6,x=mn(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",_=>{if(_.code==="Space"&&(o(5,m=!m),_.preventDefault()),_.code==="KeyF"){x();return}if(_.code==="KeyR"){R("random");return}if(_.code==="KeyE"){R("zero");return}if(_.code==="KeyI"){o(3,c++,c);return}if(_.code==="KeyS"){o(2,s=!s);return}if(_.code==="KeyO"){o(3,c=Math.max(c-1,1)),c===1&&(o(1,r.x=0,r),o(1,r.y=0,r));return}if(_.code==="KeyZ"){o(3,c=1),o(1,r.x=0,r),o(1,r.y=0,r);return}});const B=document.getElementById("canvas");if(!B)throw new Error("Canvas unavailable");B.addEventListener("mousemove",_=>{const P=B.getBoundingClientRect(),he=B.width/P.width,pe=B.height/P.height,z={x:(_.clientX-P.left)*he,y:(_.clientY-P.top)*pe};a.x=z.x/n.width,a.y=z.y/n.height}),B.addEventListener("mousedown",_=>{_.preventDefault(),_.button===0?u=1:_.button===2&&(u=2)}),B.addEventListener("mouseup",_=>{_.preventDefault(),u=0}),B.addEventListener("contextmenu",_=>(_.preventDefault(),!1))});const R=B=>{o(0,i.width=Math.min(i.width,n.width),i),o(0,i.height=Math.min(i.height,n.height),i);const _=to(E,{mode:B,worldDimensions:i,initialDensity:d});L=ro(E,{cellsTex:_.cellsTex,texDimensions:i})},N=()=>o(5,m=!m),X=()=>o(2,s=!s),J=()=>o(3,c+=1),me=()=>{o(3,c=Math.max(c-1,1)),c===1&&(o(1,r.x=0,r),o(1,r.y=0,r))},Z=()=>o(3,c=1),G=()=>l(),W=()=>R("random"),Q=()=>R("zero");function te(){d=fe(this.value),o(4,d)}const oe=()=>R("random");function H(){i.width=fe(this.value),o(0,i)}const Y=()=>R("random");function ie(){i.height=fe(this.value),o(0,i)}return[i,r,s,c,d,m,x,n,l,R,N,X,J,me,Z,G,W,Q,te,oe,H,Y,ie]}class Tn extends He{constructor(t){super(),Ye(this,t,vn,_n,Ke,{})}}const En=["VERTEX_SHADER","FRAGMENT_SHADER"];function wn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return An(t),t}function An(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function yo(e,t,o,n){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function io(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Po(e,t,o,n,i){const a=[];for(let u=0;u<t.length;++u){const s=En[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=bn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const r=gn(e,a,o,n,i);if(!r)throw"Can not create program";return r}function bn(e,t,o,n){const i=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function gn(e,t,o,n,i){const a=i||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(s){e.attachShader(r,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(r,n?n[c]:c,s)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const s=e.getProgramInfoLog(r);return a("Error in program linking:"+s),e.deleteProgram(r),null}return r}function Rn(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const Ln=`precision mediump float;
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
`,Cn=`precision mediump float;
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

`,Dn=`precision mediump float;
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

`;let ye,Pe,ft;const ao=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:i,width:a}=o;let r=Sn;if(n==="gradiant"?r=Cn:n==="age_gradiant"&&(r=Dn),Pe=Po(e,[Ln,r]),ye={positionLocation:e.getAttribLocation(Pe,"a_position"),textureLocation:e.getUniformLocation(Pe,"u_texture"),worldSizeLocation:e.getUniformLocation(Pe,"u_worldSize"),zoomLocation:e.getUniformLocation(Pe,"u_zoom"),panLocation:e.getUniformLocation(Pe,"u_pan"),iterationLocation:e.getUniformLocation(Pe,"u_iteration")},ft=e.createBuffer(),!ft)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ft),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Fn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:i,pan:a,iteration:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Pe),t.bindBuffer(t.ARRAY_BUFFER,ft),t.enableVertexAttribArray(ye.positionLocation),t.vertexAttribPointer(ye.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(ye.textureLocation,0),t.uniform2f(ye.worldSizeLocation,n.width,n.height),t.uniform1f(ye.zoomLocation,Math.max(i,1)),t.uniform2f(ye.panLocation,a.x,a.y),t.uniform1f(ye.iterationLocation,r),t.drawArrays(t.TRIANGLES,0,6)};function uo(e,t){const{worldDimensions:o,initialDensity:n,mode:i}=t;let a=n;a>1&&(a=1);const r=o.width*o.height;let u=new Array(r).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:yo(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),o.width,o.height)}}const In=` attribute vec2 aPosition;

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
`;let ve,Te,Pt,at,Dt,so,co,tt,mt;const lo=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Te=Po(e,[In,yn]),ve={uInputTextureLocation:e.getUniformLocation(Te,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Te,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Te,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Te,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Te,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(Te,"uIteration"),positionLocation:e.getAttribLocation(Te,"aPosition")},Pt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Pt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),at=o,Dt=yo(e,null,n.width,n.height),so=io(e,at),co=io(e,Dt),tt={fb:so,tex:at},mt={fb:co,tex:Dt},at},Pn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:i,mouseMode:a,infiniteSource:r,iteration:u}=e;t.bindFramebuffer(t.FRAMEBUFFER,mt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,Pt),t.enableVertexAttribArray(ve.positionLocation),t.vertexAttribPointer(ve.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,tt.tex),t.useProgram(Te),t.uniform1i(ve.uInputTextureLocation,0),t.uniform2f(ve.uTextureSizeLocation,o.width,o.height),t.uniform2f(ve.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(ve.uMouseModeLocation,a),t.uniform1i(ve.uInfiniteSourceLocation,r?1:0),t.uniform1f(ve.uIterationLocation,u),t.drawArrays(t.TRIANGLES,0,6);{const s=tt;tt=mt,mt=s}return tt.tex};function $n(e){let t;return{c(){t=v("canvas"),this.h()},l(o){t=T(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),b(t).forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[0].width),g(t,"height",e[0].height),g(t,"class","svelte-1b0ol19")},m(o,n){I(o,t,n)},p:j,i:j,o:j,d(o){o&&p(t)}}}function zn(e){const t={x:0,y:0};let o=0,n,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},r={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>E("random"),"Empty grid":()=>E("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,"Pan reset":()=>{r.x=0,r.y=0},"Reload progam":()=>L()},s=async()=>{const h=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.add(u,"Pause").listen(),l.add(u,"Infinite source").listen(),l.add(u,"TimeInSeconds").listen(),l.add(u,"Iteration").listen(),l.add(u,"fps").listen(),l.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>ao(c,{screenDimensions:a,mode:u["Draw mode"]})),l.add(u,"Reset grid"),l.add(u,"Empty grid"),l.add(u,"Initial density",0,1,.01).onFinishChange(()=>E("random")),l.add(u,"World width",1,a.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"World height",1,a.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"Cells").listen(),l.add(u,"Zoom level",1,10),l.add(u,"Pan reset"),l.add(u,"Reload progam")};let c,d,m;function L(){n=Date.now()/1e3,cancelAnimationFrame(m),c=wn(),Rn(c.canvas);const h=uo(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=lo(c,{cellsTex:h.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),ao(c,{screenDimensions:a,mode:u["Draw mode"]});function l(){if(!u.Pause){const R=Date.now()/1e3,N=R-i;u.fps=1/N,i=R,u.TimeInSeconds=R-n,u.Iteration++,d=Pn({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:o,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const x=.005;return t.x<.1&&r.x>=x&&(r.x-=x),t.x>.9&&r.x<1-1/u["Zoom level"]&&(r.x+=x),t.y<.1&&r.y>=x&&(r.y-=x),t.y>.9&&r.y<1-1/u["Zoom level"]&&(r.y+=x),Fn({gl:c,cellsTex:d,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:r,iteration:u.Iteration}),m=requestAnimationFrame(l)}m=requestAnimationFrame(l)}vt(()=>{L(),s(),document.addEventListener("keydown",l=>{if(l.code==="Space"&&(u.Pause=!u.Pause,l.preventDefault()),l.code==="KeyR"){E("random");return}if(l.code==="KeyE"){E("zero");return}if(l.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const x=h.getBoundingClientRect(),R=h.width/x.width,N=h.height/x.height,X={x:(l.clientX-x.left)*R,y:(l.clientY-x.top)*N};t.x=X.x/a.width,t.y=X.y/a.height}),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?o=1:l.button===2&&(o=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),o=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))});const E=h=>{u.Iteration=0,u.TimeInSeconds=0;const l=uo(c,{mode:h,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=lo(c,{cellsTex:l.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[a]}class Un extends He{constructor(t){super(),Ye(this,t,zn,$n,Ke,{})}}const Bn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Mn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Nn(t),t}function Nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function $o(e,t,o,n){const i=e.createTexture();if(!i)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}function fo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function zo(e,t,o,n,i){const a=[];for(let u=0;u<t.length;++u){const s=Bn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Wn(e,t[u],s,i);if(!c)throw"Can not create shader";a.push(c)}const r=Xn(e,a,o,n,i);if(!r)throw"Can not create program";return r}function Wn(e,t,o,n){const i=n||console.log,a=e.createShader(o);if(!a)throw"Could not load shader";if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+u+`
`+t.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(a),null}return a}function Xn(e,t,o,n,i){const a=i||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(s){e.attachShader(r,s)}),o&&o.forEach(function(s,c){e.bindAttribLocation(r,n?n[c]:c,s)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const s=e.getProgramInfoLog(r);return a("Error in program linking:"+s),e.deleteProgram(r),null}return r}function Gn(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const On=`precision mediump float;
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
`,Vn=`precision mediump float;
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

`,Hn=`precision mediump float;
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

`;let $e,ze,ht;const mo=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:i,width:a}=o;let r=kn;if(n==="gradiant"?r=Vn:n==="age_gradiant"&&(r=Hn),ze=zo(e,[On,r]),$e={positionLocation:e.getAttribLocation(ze,"a_position"),textureLocation:e.getUniformLocation(ze,"u_texture"),worldSizeLocation:e.getUniformLocation(ze,"u_worldSize"),zoomLocation:e.getUniformLocation(ze,"u_zoom"),panLocation:e.getUniformLocation(ze,"u_pan"),iterationLocation:e.getUniformLocation(ze,"u_iteration")},ht=e.createBuffer(),!ht)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ht),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,i,a,0,a,0,0,i,a,i]),e.STATIC_DRAW)},Yn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:i,pan:a,iteration:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(ze),t.bindBuffer(t.ARRAY_BUFFER,ht),t.enableVertexAttribArray($e.positionLocation),t.vertexAttribPointer($e.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i($e.textureLocation,0),t.uniform2f($e.worldSizeLocation,n.width,n.height),t.uniform1f($e.zoomLocation,Math.max(i,1)),t.uniform2f($e.panLocation,a.x,a.y),t.uniform1f($e.iterationLocation,r),t.drawArrays(t.TRIANGLES,0,6)};function ho(e,t){const{worldDimensions:o,initialDensity:n,mode:i}=t;let a=n;a>1&&(a=1);const r=o.width*o.height;let u=new Array(r).fill(0);return i==="random"&&(u=u.map(c=>Math.random()<a?1:0)),{cellsTex:$o(e,new Float32Array(u.map((c,d)=>[c,d,0,0]).flat()),o.width,o.height)}}const Kn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Zn=`precision highp float;

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
`;let Ee,we,$t,ut,Ft,po,xo,ot,pt;const _o=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return we=zo(e,[Kn,Zn]),Ee={uInputTextureLocation:e.getUniformLocation(we,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(we,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(we,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(we,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(we,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(we,"uIteration"),positionLocation:e.getAttribLocation(we,"aPosition")},$t=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,$t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ut=o,Ft=$o(e,null,n.width,n.height),po=fo(e,ut),xo=fo(e,Ft),ot={fb:po,tex:ut},pt={fb:xo,tex:Ft},ut},qn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:i,mouseMode:a,infiniteSource:r,iteration:u}=e;t.bindFramebuffer(t.FRAMEBUFFER,pt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,$t),t.enableVertexAttribArray(Ee.positionLocation),t.vertexAttribPointer(Ee.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ot.tex),t.useProgram(we),t.uniform1i(Ee.uInputTextureLocation,0),t.uniform2f(Ee.uTextureSizeLocation,o.width,o.height),t.uniform2f(Ee.uMouseCoordinatesLocation,i.x,i.y),t.uniform1i(Ee.uMouseModeLocation,a),t.uniform1i(Ee.uInfiniteSourceLocation,r?1:0),t.uniform1f(Ee.uIterationLocation,u),t.drawArrays(t.TRIANGLES,0,6);{const s=ot;ot=pt,pt=s}return ot.tex};function jn(e){let t;return{c(){t=v("canvas"),this.h()},l(o){t=T(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),b(t).forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[0].width),g(t,"height",e[0].height),g(t,"class","svelte-1b0ol19")},m(o,n){I(o,t,n)},p:j,i:j,o:j,d(o){o&&p(t)}}}function Jn(e){const t={x:0,y:0};let o=0,n,i;const a={width:window.innerWidth-50,height:window.innerHeight-10},r={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>E("random"),"Empty grid":()=>E("zero"),"Initial density":.05,"World width":a.width,"World height":a.height,Cells:(a.width*a.height).toString(),"Zoom level":1,"Pan reset":()=>{r.x=0,r.y=0},"Reload progam":()=>L()},s=async()=>{const h=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),l=new h.GUI;l.add(u,"Pause").listen(),l.add(u,"Infinite source").listen(),l.add(u,"TimeInSeconds").listen(),l.add(u,"Iteration").listen(),l.add(u,"fps").listen(),l.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>mo(c,{screenDimensions:a,mode:u["Draw mode"]})),l.add(u,"Reset grid"),l.add(u,"Empty grid"),l.add(u,"Initial density",0,1,.01).onFinishChange(()=>E("random")),l.add(u,"World width",1,a.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"World height",1,a.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),E("random")}),l.add(u,"Cells").listen(),l.add(u,"Zoom level",1,10),l.add(u,"Pan reset"),l.add(u,"Reload progam")};let c,d,m;function L(){n=Date.now()/1e3,cancelAnimationFrame(m),c=Mn(),Gn(c.canvas);const h=ho(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=_o(c,{cellsTex:h.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),mo(c,{screenDimensions:a,mode:u["Draw mode"]});function l(){if(!u.Pause){const R=Date.now()/1e3,N=R-i;u.fps=1/N,i=R,u.TimeInSeconds=R-n,u.Iteration++,d=qn({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:a,mouseCoordinates:t,mouseMode:o,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const x=.005;return t.x<.1&&r.x>=x&&(r.x-=x),t.x>.9&&r.x<1-1/u["Zoom level"]&&(r.x+=x),t.y<.1&&r.y>=x&&(r.y-=x),t.y>.9&&r.y<1-1/u["Zoom level"]&&(r.y+=x),Yn({gl:c,cellsTex:d,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:r,iteration:u.Iteration}),m=requestAnimationFrame(l)}m=requestAnimationFrame(l)}vt(()=>{L(),s(),document.addEventListener("keydown",l=>{if(l.code==="Space"&&(u.Pause=!u.Pause,l.preventDefault()),l.code==="KeyR"){E("random");return}if(l.code==="KeyE"){E("zero");return}if(l.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const h=document.getElementById("canvas");if(!h)throw new Error("Canvas unavailable");h.addEventListener("mousemove",l=>{const x=h.getBoundingClientRect(),R=h.width/x.width,N=h.height/x.height,X={x:(l.clientX-x.left)*R,y:(l.clientY-x.top)*N};t.x=X.x/a.width,t.y=X.y/a.height}),h.addEventListener("mousedown",l=>{l.preventDefault(),l.button===0?o=1:l.button===2&&(o=2)}),h.addEventListener("mouseup",l=>{l.preventDefault(),o=0}),h.addEventListener("contextmenu",l=>(l.preventDefault(),!1))});const E=h=>{u.Iteration=0,u.TimeInSeconds=0;const l=ho(c,{mode:h,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});d=_o(c,{cellsTex:l.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[a]}class Qn extends He{constructor(t){super(),Ye(this,t,Jn,jn,Ke,{})}}function vo(e,t,o){const n=e.slice();return n[1]=t[o],n}function To(e,t,o){const n=e.slice();return n[1]=t[o],n}function er(e){let t;return{c(){t=w("About")},l(o){t=A(o,"About")},m(o,n){I(o,t,n)},d(o){o&&p(t)}}}function tr(e){let t=e[1].title+"",o;return{c(){o=w(t)},l(n){o=A(n,t)},m(n,i){I(n,o,i)},p:j,d(n){n&&p(o)}}}function Eo(e){let t,o;return t=new Lo({props:{$$slots:{default:[tr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(n){Ue(t.$$.fragment,n)},m(n,i){ge(t,n,i),o=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),t.$set(a)},i(n){o||(V(t.$$.fragment,n),o=!0)},o(n){q(t.$$.fragment,n),o=!1},d(n){Re(t,n)}}}function or(e){let t,o,n,i;t=new Lo({props:{$$slots:{default:[er]},$$scope:{ctx:e}}});let a=e[0],r=[];for(let s=0;s<a.length;s+=1)r[s]=Eo(To(e,a,s));const u=s=>q(r[s],1,1,()=>{r[s]=null});return{c(){be(t.$$.fragment),o=C();for(let s=0;s<r.length;s+=1)r[s].c();n=xt()},l(s){Ue(t.$$.fragment,s),o=D(s);for(let c=0;c<r.length;c+=1)r[c].l(s);n=xt()},m(s,c){ge(t,s,c),I(s,o,c);for(let d=0;d<r.length;d+=1)r[d].m(s,c);I(s,n,c),i=!0},p(s,c){const d={};if(c&64&&(d.$$scope={dirty:c,ctx:s}),t.$set(d),c&1){a=s[0];let m;for(m=0;m<a.length;m+=1){const L=To(s,a,m);r[m]?(r[m].p(L,c),V(r[m],1)):(r[m]=Eo(L),r[m].c(),V(r[m],1),r[m].m(n.parentNode,n))}for(zt(),m=a.length;m<r.length;m+=1)u(m);Ut()}},i(s){if(!i){V(t.$$.fragment,s);for(let c=0;c<a.length;c+=1)V(r[c]);i=!0}},o(s){q(t.$$.fragment,s),r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)q(r[c]);i=!1},d(s){Re(t,s),s&&p(o),go(r,s),s&&p(n)}}}function nr(e){let t,o;return{c(){t=v("p"),o=w("Experiments running Conway's Game of Life in WebGL shaders.")},l(n){t=T(n,"P",{});var i=b(t);o=A(i,"Experiments running Conway's Game of Life in WebGL shaders."),i.forEach(p)},m(n,i){I(n,t,i),f(t,o)},p:j,d(n){n&&p(t)}}}function rr(e){let t,o,n;var i=e[1].component;function a(r){return{}}return i&&(t=Kt(i,a())),{c(){t&&be(t.$$.fragment),o=C()},l(r){t&&Ue(t.$$.fragment,r),o=D(r)},m(r,u){t&&ge(t,r,u),I(r,o,u),n=!0},p(r,u){if(i!==(i=r[1].component)){if(t){zt();const s=t;q(s.$$.fragment,1,0,()=>{Re(s,1)}),Ut()}i?(t=Kt(i,a()),be(t.$$.fragment),V(t.$$.fragment,1),ge(t,o.parentNode,o)):t=null}},i(r){n||(t&&V(t.$$.fragment,r),n=!0)},o(r){t&&q(t.$$.fragment,r),n=!1},d(r){t&&Re(t,r),r&&p(o)}}}function wo(e){let t,o;return t=new Ro({props:{$$slots:{default:[rr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(n){Ue(t.$$.fragment,n)},m(n,i){ge(t,n,i),o=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),t.$set(a)},i(n){o||(V(t.$$.fragment,n),o=!0)},o(n){q(t.$$.fragment,n),o=!1},d(n){Re(t,n)}}}function ir(e){let t,o,n,i,a,r;t=new Bo({props:{$$slots:{default:[or]},$$scope:{ctx:e}}}),n=new Ro({props:{$$slots:{default:[nr]},$$scope:{ctx:e}}});let u=e[0],s=[];for(let d=0;d<u.length;d+=1)s[d]=wo(vo(e,u,d));const c=d=>q(s[d],1,1,()=>{s[d]=null});return{c(){be(t.$$.fragment),o=C(),be(n.$$.fragment),i=C();for(let d=0;d<s.length;d+=1)s[d].c();a=xt()},l(d){Ue(t.$$.fragment,d),o=D(d),Ue(n.$$.fragment,d),i=D(d);for(let m=0;m<s.length;m+=1)s[m].l(d);a=xt()},m(d,m){ge(t,d,m),I(d,o,m),ge(n,d,m),I(d,i,m);for(let L=0;L<s.length;L+=1)s[L].m(d,m);I(d,a,m),r=!0},p(d,m){const L={};m&64&&(L.$$scope={dirty:m,ctx:d}),t.$set(L);const E={};if(m&64&&(E.$$scope={dirty:m,ctx:d}),n.$set(E),m&1){u=d[0];let h;for(h=0;h<u.length;h+=1){const l=vo(d,u,h);s[h]?(s[h].p(l,m),V(s[h],1)):(s[h]=wo(l),s[h].c(),V(s[h],1),s[h].m(a.parentNode,a))}for(zt(),h=u.length;h<s.length;h+=1)c(h);Ut()}},i(d){if(!r){V(t.$$.fragment,d),V(n.$$.fragment,d);for(let m=0;m<u.length;m+=1)V(s[m]);r=!0}},o(d){q(t.$$.fragment,d),q(n.$$.fragment,d),s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)q(s[m]);r=!1},d(d){Re(t,d),d&&p(o),Re(n,d),d&&p(i),go(s,d),d&&p(a)}}}function ar(e){let t,o,n;return o=new Uo({props:{$$slots:{default:[ir]},$$scope:{ctx:e}}}),{c(){t=v("div"),be(o.$$.fragment)},l(i){t=T(i,"DIV",{});var a=b(t);Ue(o.$$.fragment,a),a.forEach(p)},m(i,a){I(i,t,a),ge(o,t,null),n=!0},p(i,[a]){const r={};a&64&&(r.$$scope={dirty:a,ctx:i}),o.$set(r)},i(i){n||(V(o.$$.fragment,i),n=!0)},o(i){q(o.$$.fragment,i),n=!1},d(i){i&&p(t),Re(o)}}}function ur(e){return[[{title:"V4",component:Qn},{title:"V3",component:Un},{title:"V2",component:Tn},{title:"V1",component:en}]]}class sr extends He{constructor(t){super(),Ye(this,t,ur,ar,Ke,{})}}function cr(e){let t,o;return t=new sr({}),{c(){be(t.$$.fragment)},l(n){Ue(t.$$.fragment,n)},m(n,i){ge(t,n,i),o=!0},p:j,i(n){o||(V(t.$$.fragment,n),o=!0)},o(n){q(t.$$.fragment,n),o=!1},d(n){Re(t,n)}}}class mr extends He{constructor(t){super(),Ye(this,t,null,cr,Ke,{})}}export{mr as default};
