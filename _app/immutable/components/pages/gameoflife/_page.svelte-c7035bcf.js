import{S as Ve,i as Ye,s as Ke,k as v,a as D,q as w,l as T,m as b,h as p,c as C,r as A,n as g,p as _t,b as I,D as d,O as me,K as $,R as Ao,u as Ae,P as he,B as J,M as bo,o as vt,w as be,x as ze,y as ge,f as V,t as j,z as Re,e as xt,g as Ut,d as zt,L as go,v as Kt}from"../../../chunks/index-46ced799.js";import{T as zo,a as Mo,b as Ro,c as Lo}from"../../../chunks/TabPanel-3f95d051.js";import{_ as So}from"../../../chunks/preload-helper-41c905a7.js";const Bo=["VERTEX_SHADER","FRAGMENT_SHADER"];function No(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Wo(t),t}function Wo(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Do(e,t,o,n){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function Zt(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Co(e,t,o,n,a){const u=[];for(let i=0;i<t.length;++i){const c=Bo[i]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=Xo(e,t[i],c,a);if(!s)throw"Can not create shader";u.push(s)}const r=Go(e,u,o,n,a);if(!r)throw"Can not create program";return r}function Xo(e,t,o,n){const a=n||console.log,u=e.createShader(o);if(!u)throw"Could not load shader";if(e.shaderSource(u,t),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS)){const i=e.getShaderInfoLog(u);return a(new Error("*** Error compiling shader '"+u+"':"+i+`
`+t.split(`
`).map((c,s)=>`${s+1}: ${c}`).join(`
`))),e.deleteShader(u),null}return u}function Go(e,t,o,n,a){const u=a||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(c){e.attachShader(r,c)}),o&&o.forEach(function(c,s){e.bindAttribLocation(r,n?n[s]:s,c)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const c=e.getProgramInfoLog(r);return u("Error in program linking:"+c),e.deleteProgram(r),null}return r}function Oo(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const ko=`attribute vec2 a_position;
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
`;let Ze,qe,ct;const Vo=(e,t)=>{const{screenDimensions:o}=t,{height:n,width:a}=o;if(qe=Co(e,[ko,Ho]),Ze={positionLocation:e.getAttribLocation(qe,"a_position"),textureLocation:e.getUniformLocation(qe,"u_texture"),worldSizeLocation:e.getUniformLocation(qe,"u_worldSize")},ct=e.createBuffer(),!ct)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ct),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,n,a,0,a,0,0,n,a,n]),e.STATIC_DRAW)},Yo=e=>{const{gl:t,cellsTex:o,worldDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(qe),t.bindBuffer(t.ARRAY_BUFFER,ct),t.enableVertexAttribArray(Ze.positionLocation),t.vertexAttribPointer(Ze.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ze.textureLocation,0),t.uniform2f(Ze.worldSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6)};function Ko(e,t,o){function n(){const u=e.getElementById(t);u&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),u.width=o.width,u.height=o.height)}function a(){const u=e.getElementById(t);u&&(e.fullscreenElement||u.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:a,disableFullscreen:n}}function qt(e,t){const{worldDimensions:o}=t,n=o.width*o.height,a=new Array(n).fill(0).map(r=>Math.random()<.5?1:0);return{cellsTex:Do(e,new Float32Array(a.map(r=>[r,0,0,0]).flat()),o.width,o.height)}}const Zo=` attribute vec2 aPosition;

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
`;let je,Je,It,rt,St,jt,Jt,Qe,st;const Qt=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Je=Co(e,[Zo,qo]),je={uInputTextureLocation:e.getUniformLocation(Je,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Je,"uTextureSize"),positionLocation:e.getAttribLocation(Je,"aPosition")},It=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,It),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),rt=o,St=Do(e,null,n.width,n.height),jt=Zt(e,rt),Jt=Zt(e,St),Qe={fb:jt,tex:rt},st={fb:Jt,tex:St},rt},jo=e=>{const{gl:t,worldDimensions:o,screenDimensions:n}=e;t.bindFramebuffer(t.FRAMEBUFFER,st.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,It),t.enableVertexAttribArray(je.positionLocation),t.vertexAttribPointer(je.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Qe.tex),t.useProgram(Je),t.uniform1i(je.uInputTextureLocation,0),t.uniform2f(je.uTextureSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6);{const a=Qe;Qe=st,st=a}return Qe.tex};function Jo(e){let t,o,n,a,u=e[1]?"Play":"Pause",r,i,c,s,l,h,L=e[0].width+"",R,x,f=e[0].height+"",m,E,U=e[0].width*e[0].height+"",W,H,pe,q,G,X,Q,te,oe,Y,K,ie,B,_,P,xe,_e,z,Me,ae,ue,Be,O,k,ve;return{c(){t=v("canvas"),o=D(),n=v("div"),a=v("button"),r=w(u),i=w(" (Space)"),c=D(),s=v("div"),l=v("span"),h=w("World "),R=w(L),x=w(" x "),m=w(f),E=w(" ("),W=w(U),H=w(" cells)"),pe=D(),q=v("button"),G=w("Reload program"),X=D(),Q=v("button"),te=w("Fullscreen (f)"),oe=D(),Y=v("div"),K=v("button"),ie=w("Reset world (r)"),B=D(),_=v("span"),P=v("label"),xe=w("World: width"),_e=D(),z=v("input"),Me=D(),ae=v("label"),ue=w("height"),Be=D(),O=v("input"),this.h()},l(S){t=T(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(p),o=C(S),n=T(S,"DIV",{});var M=b(n);a=T(M,"BUTTON",{});var ce=b(a);r=A(ce,u),i=A(ce," (Space)"),ce.forEach(p),M.forEach(p),c=C(S),s=T(S,"DIV",{});var se=b(s);l=T(se,"SPAN",{});var ee=b(l);h=A(ee,"World "),R=A(ee,L),x=A(ee," x "),m=A(ee,f),E=A(ee," ("),W=A(ee,U),H=A(ee," cells)"),ee.forEach(p),pe=C(se),q=T(se,"BUTTON",{});var le=b(q);G=A(le,"Reload program"),le.forEach(p),X=C(se),Q=T(se,"BUTTON",{});var Te=b(Q);te=A(Te,"Fullscreen (f)"),Te.forEach(p),se.forEach(p),oe=C(S),Y=T(S,"DIV",{});var Le=b(Y);K=T(Le,"BUTTON",{});var Xe=b(K);ie=A(Xe,"Reset world (r)"),Xe.forEach(p),B=C(Le),_=T(Le,"SPAN",{});var N=b(_);P=T(N,"LABEL",{for:!0});var Ge=b(P);xe=A(Ge,"World: width"),Ge.forEach(p),_e=C(N),z=T(N,"INPUT",{id:!0,type:!0,min:!0}),Me=C(N),ae=T(N,"LABEL",{for:!0});var Z=b(ae);ue=A(Z,"height"),Z.forEach(p),Be=C(N),O=T(N,"INPUT",{id:!0,type:!0,min:!0}),N.forEach(p),Le.forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[3].width),g(t,"height",e[3].height),g(P,"for","worldWidth"),g(z,"id","worldWidth"),g(z,"type","number"),g(z,"min",0),g(ae,"for","worldHeight"),g(O,"id","worldHeight"),g(O,"type","number"),g(O,"min",0)},m(S,M){I(S,t,M),I(S,o,M),I(S,n,M),d(n,a),d(a,r),d(a,i),I(S,c,M),I(S,s,M),d(s,l),d(l,h),d(l,R),d(l,x),d(l,m),d(l,E),d(l,W),d(l,H),d(s,pe),d(s,q),d(q,G),d(s,X),d(s,Q),d(Q,te),I(S,oe,M),I(S,Y,M),d(Y,K),d(K,ie),d(Y,B),d(Y,_),d(_,P),d(P,xe),d(_,_e),d(_,z),me(z,e[0].width),d(_,Me),d(_,ae),d(ae,ue),d(_,Be),d(_,O),me(O,e[0].height),k||(ve=[$(a,"click",e[6]),$(q,"click",e[7]),$(Q,"click",function(){Ao(e[2])&&e[2].apply(this,arguments)}),$(K,"click",e[5]),$(z,"change",e[5]),$(z,"input",e[8]),$(O,"change",e[5]),$(O,"input",e[9])],k=!0)},p(S,[M]){e=S,M&2&&u!==(u=e[1]?"Play":"Pause")&&Ae(r,u),M&1&&L!==(L=e[0].width+"")&&Ae(R,L),M&1&&f!==(f=e[0].height+"")&&Ae(m,f),M&1&&U!==(U=e[0].width*e[0].height+"")&&Ae(W,U),M&1&&he(z.value)!==e[0].width&&me(z,e[0].width),M&1&&he(O.value)!==e[0].height&&me(O,e[0].height)},i:J,o:J,d(S){S&&p(t),S&&p(o),S&&p(n),S&&p(c),S&&p(s),S&&p(oe),S&&p(Y),k=!1,bo(ve)}}}function Qo(e,t,o){const n={width:1600,height:900},a={width:1600,height:900};let u=!0,r,i,c;function s(){cancelAnimationFrame(c),i=No(),Oo(i.canvas);const m=qt(i,{worldDimensions:a});r=Qt(i,{cellsTex:m.cellsTex,texDimensions:a}),Vo(i,{screenDimensions:n});function E(){return u||(r=jo({gl:i,worldDimensions:a,screenDimensions:n})),Yo({gl:i,cellsTex:r,worldDimensions:a}),c=requestAnimationFrame(E)}c=requestAnimationFrame(E)}let l;vt(()=>{s(),o(2,l=Ko(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",m=>{if(m.code==="Space"&&(o(1,u=!u),m.preventDefault()),m.code==="KeyF"){l();return}if(m.code==="KeyR"){h();return}})});const h=()=>{o(0,a.width=Math.min(a.width,n.width),a),o(0,a.height=Math.min(a.height,n.height),a);const m=qt(i,{worldDimensions:a});r=Qt(i,{cellsTex:m.cellsTex,texDimensions:a})},L=()=>o(1,u=!u),R=()=>s();function x(){a.width=he(this.value),o(0,a)}function f(){a.height=he(this.value),o(0,a)}return[a,u,l,n,s,h,L,R,x,f]}let en=class extends Ve{constructor(t){super(),Ye(this,t,Qo,Jo,Ke,{})}};const tn=["VERTEX_SHADER","FRAGMENT_SHADER"];function on(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return nn(t),t}function nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Fo(e,t,o,n){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function eo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Io(e,t,o,n,a){const u=[];for(let i=0;i<t.length;++i){const c=tn[i]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=rn(e,t[i],c,a);if(!s)throw"Can not create shader";u.push(s)}const r=an(e,u,o,n,a);if(!r)throw"Can not create program";return r}function rn(e,t,o,n){const a=n||console.log,u=e.createShader(o);if(!u)throw"Could not load shader";if(e.shaderSource(u,t),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS)){const i=e.getShaderInfoLog(u);return a(new Error("*** Error compiling shader '"+u+"':"+i+`
`+t.split(`
`).map((c,s)=>`${s+1}: ${c}`).join(`
`))),e.deleteShader(u),null}return u}function an(e,t,o,n,a){const u=a||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(c){e.attachShader(r,c)}),o&&o.forEach(function(c,s){e.bindAttribLocation(r,n?n[s]:s,c)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const c=e.getProgramInfoLog(r);return u("Error in program linking:"+c),e.deleteProgram(r),null}return r}function un(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const cn=`precision mediump float;
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

`;let Ne,We,lt;const dn=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:a,width:u}=o;let r=sn;if(n==="gradiant"&&(r=ln),We=Io(e,[cn,r]),Ne={positionLocation:e.getAttribLocation(We,"a_position"),textureLocation:e.getUniformLocation(We,"u_texture"),worldSizeLocation:e.getUniformLocation(We,"u_worldSize"),zoomLocation:e.getUniformLocation(We,"u_zoom"),panLocation:e.getUniformLocation(We,"u_pan")},lt=e.createBuffer(),!lt)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,lt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,u,0,u,0,0,a,u,a]),e.STATIC_DRAW)},fn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:a,pan:u}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(We),t.bindBuffer(t.ARRAY_BUFFER,lt),t.enableVertexAttribArray(Ne.positionLocation),t.vertexAttribPointer(Ne.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(Ne.textureLocation,0),t.uniform2f(Ne.worldSizeLocation,n.width,n.height),t.uniform1f(Ne.zoomLocation,Math.max(a,1)),t.uniform2f(Ne.panLocation,u.x,u.y),t.drawArrays(t.TRIANGLES,0,6)};function mn(e,t,o){function n(){const u=e.getElementById(t);u&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),u.width=o.width,u.height=o.height)}function a(){const u=e.getElementById(t);u&&(e.fullscreenElement||u.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:a,disableFullscreen:n}}function to(e,t){const{worldDimensions:o,initialDensity:n,mode:a}=t;let u=n;u>1&&(u=1);const r=o.width*o.height;let i=new Array(r).fill(0);return a==="random"&&(i=i.map(s=>Math.random()<u?1:0)),{cellsTex:Fo(e,new Float32Array(i.map((s,l)=>[s,l,0,0]).flat()),o.width,o.height)}}const hn=` attribute vec2 aPosition;

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
`;let Fe,Ie,yt,it,Dt,oo,no,et,dt;const ro=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return Ie=Io(e,[hn,pn]),Fe={uInputTextureLocation:e.getUniformLocation(Ie,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Ie,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Ie,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Ie,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Ie,"uInfiniteSource"),positionLocation:e.getAttribLocation(Ie,"aPosition")},yt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,yt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),it=o,Dt=Fo(e,null,n.width,n.height),oo=eo(e,it),no=eo(e,Dt),et={fb:oo,tex:it},dt={fb:no,tex:Dt},it},xn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:a,mouseMode:u,infiniteSource:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,dt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,yt),t.enableVertexAttribArray(Fe.positionLocation),t.vertexAttribPointer(Fe.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,et.tex),t.useProgram(Ie),t.uniform1i(Fe.uInputTextureLocation,0),t.uniform2f(Fe.uTextureSizeLocation,o.width,o.height),t.uniform2f(Fe.uMouseCoordinatesLocation,a.x,a.y),t.uniform1i(Fe.uMouseModeLocation,u),t.uniform1i(Fe.uInfiniteSourceLocation,r?1:0),t.drawArrays(t.TRIANGLES,0,6);{const i=et;et=dt,dt=i}return et.tex};function _n(e){let t,o,n,a,u=e[5]?"Play":"Pause",r,i,c,s,l=e[2]?"Disable":"Enable",h,L,R,x,f,m,E,U,W,H,pe,q,G,X,Q,te=e[0].width+"",oe,Y,K=e[0].height+"",ie,B,_=e[0].width*e[0].height+"",P,xe,_e,z,Me,ae,ue,Be,O,k,ve,S,M,ce,se,ee,le,Te,Le,Xe,N,Ge,Z,Oe,Tt,Et,ne,wt,ke,At,bt,re,gt,Mt;return{c(){t=v("canvas"),o=D(),n=v("div"),a=v("button"),r=w(u),i=w(" (Space)"),c=D(),s=v("button"),h=w(l),L=w(" constant cells generation (E)"),R=D(),x=v("button"),f=w("Zoom in (I)"),m=D(),E=v("button"),U=w("Zoom out (O)"),W=D(),H=v("button"),pe=w("Reset zoom (Z)"),q=D(),G=v("div"),X=v("span"),Q=w("World "),oe=w(te),Y=w(" x "),ie=w(K),B=w(" ("),P=w(_),xe=w(" cells)"),_e=D(),z=v("button"),Me=w("Reload program"),ae=D(),ue=v("button"),Be=w("Fullscreen (f)"),O=D(),k=v("div"),ve=v("button"),S=w("Reset world (R)"),M=D(),ce=v("button"),se=w("Empty world (E)"),ee=D(),le=v("span"),Te=v("label"),Le=w("Initial density [0-1]"),Xe=D(),N=v("input"),Ge=D(),Z=v("span"),Oe=v("label"),Tt=w("World: width"),Et=D(),ne=v("input"),wt=D(),ke=v("label"),At=w("height"),bt=D(),re=v("input"),this.h()},l(y){t=T(y,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),b(t).forEach(p),o=C(y),n=T(y,"DIV",{});var F=b(n);a=T(F,"BUTTON",{});var Rt=b(a);r=A(Rt,u),i=A(Rt," (Space)"),Rt.forEach(p),c=C(F),s=T(F,"BUTTON",{});var Lt=b(s);h=A(Lt,l),L=A(Lt," constant cells generation (E)"),Lt.forEach(p),R=C(F),x=T(F,"BUTTON",{});var Bt=b(x);f=A(Bt,"Zoom in (I)"),Bt.forEach(p),m=C(F),E=T(F,"BUTTON",{});var Nt=b(E);U=A(Nt,"Zoom out (O)"),Nt.forEach(p),W=C(F),H=T(F,"BUTTON",{});var Wt=b(H);pe=A(Wt,"Reset zoom (Z)"),Wt.forEach(p),F.forEach(p),q=C(y),G=T(y,"DIV",{});var He=b(G);X=T(He,"SPAN",{});var Se=b(X);Q=A(Se,"World "),oe=A(Se,te),Y=A(Se," x "),ie=A(Se,K),B=A(Se," ("),P=A(Se,_),xe=A(Se," cells)"),Se.forEach(p),_e=C(He),z=T(He,"BUTTON",{});var Xt=b(z);Me=A(Xt,"Reload program"),Xt.forEach(p),ae=C(He),ue=T(He,"BUTTON",{});var Gt=b(ue);Be=A(Gt,"Fullscreen (f)"),Gt.forEach(p),He.forEach(p),O=C(y),k=T(y,"DIV",{});var De=b(k);ve=T(De,"BUTTON",{});var Ot=b(ve);S=A(Ot,"Reset world (R)"),Ot.forEach(p),M=C(De),ce=T(De,"BUTTON",{});var kt=b(ce);se=A(kt,"Empty world (E)"),kt.forEach(p),ee=C(De),le=T(De,"SPAN",{});var nt=b(le);Te=T(nt,"LABEL",{for:!0});var Ht=b(Te);Le=A(Ht,"Initial density [0-1]"),Ht.forEach(p),Xe=C(nt),N=T(nt,"INPUT",{id:!0,type:!0,min:!0,max:!0}),nt.forEach(p),Ge=C(De),Z=T(De,"SPAN",{});var Ce=b(Z);Oe=T(Ce,"LABEL",{for:!0});var Vt=b(Oe);Tt=A(Vt,"World: width"),Vt.forEach(p),Et=C(Ce),ne=T(Ce,"INPUT",{id:!0,type:!0,min:!0}),wt=C(Ce),ke=T(Ce,"LABEL",{for:!0});var Yt=b(ke);At=A(Yt,"height"),Yt.forEach(p),bt=C(Ce),re=T(Ce,"INPUT",{id:!0,type:!0,min:!0}),Ce.forEach(p),De.forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[7].width),g(t,"height",e[7].height),g(Te,"for","initialDensity"),g(N,"id","initialDensity"),g(N,"type","number"),g(N,"min",0),g(N,"max",1),g(Oe,"for","worldWidth"),g(ne,"id","worldWidth"),g(ne,"type","number"),g(ne,"min",0),g(ke,"for","worldHeight"),g(re,"id","worldHeight"),g(re,"type","number"),g(re,"min",0)},m(y,F){I(y,t,F),I(y,o,F),I(y,n,F),d(n,a),d(a,r),d(a,i),d(n,c),d(n,s),d(s,h),d(s,L),d(n,R),d(n,x),d(x,f),d(n,m),d(n,E),d(E,U),d(n,W),d(n,H),d(H,pe),I(y,q,F),I(y,G,F),d(G,X),d(X,Q),d(X,oe),d(X,Y),d(X,ie),d(X,B),d(X,P),d(X,xe),d(G,_e),d(G,z),d(z,Me),d(G,ae),d(G,ue),d(ue,Be),I(y,O,F),I(y,k,F),d(k,ve),d(ve,S),d(k,M),d(k,ce),d(ce,se),d(k,ee),d(k,le),d(le,Te),d(Te,Le),d(le,Xe),d(le,N),me(N,e[4]),d(k,Ge),d(k,Z),d(Z,Oe),d(Oe,Tt),d(Z,Et),d(Z,ne),me(ne,e[0].width),d(Z,wt),d(Z,ke),d(ke,At),d(Z,bt),d(Z,re),me(re,e[0].height),gt||(Mt=[$(a,"click",e[10]),$(s,"click",e[11]),$(x,"click",e[12]),$(E,"click",e[13]),$(H,"click",e[14]),$(z,"click",e[15]),$(ue,"click",function(){Ao(e[6])&&e[6].apply(this,arguments)}),$(ve,"click",e[16]),$(ce,"click",e[17]),$(N,"input",e[18]),$(ne,"change",e[19]),$(ne,"input",e[20]),$(re,"change",e[21]),$(re,"input",e[22])],gt=!0)},p(y,[F]){e=y,F&32&&u!==(u=e[5]?"Play":"Pause")&&Ae(r,u),F&4&&l!==(l=e[2]?"Disable":"Enable")&&Ae(h,l),F&1&&te!==(te=e[0].width+"")&&Ae(oe,te),F&1&&K!==(K=e[0].height+"")&&Ae(ie,K),F&1&&_!==(_=e[0].width*e[0].height+"")&&Ae(P,_),F&16&&he(N.value)!==e[4]&&me(N,e[4]),F&1&&he(ne.value)!==e[0].width&&me(ne,e[0].width),F&1&&he(re.value)!==e[0].height&&me(re,e[0].height)},i:J,o:J,d(y){y&&p(t),y&&p(o),y&&p(n),y&&p(q),y&&p(G),y&&p(O),y&&p(k),gt=!1,bo(Mt)}}}function vn(e,t,o){const n={width:1200,height:900},a={width:1200,height:900},u={x:-100,y:-100},r={x:0,y:0};let i=0,c=!0,s=1,l=.05,h=!0,L,R,x;function f(){cancelAnimationFrame(x),R=on(),un(R.canvas);const B=to(R,{mode:"random",worldDimensions:a,initialDensity:l});L=ro(R,{cellsTex:B.cellsTex,texDimensions:a}),dn(R,{screenDimensions:n,mode:"gradiant"});function _(){h||(L=xn({gl:R,worldDimensions:a,screenDimensions:n,mouseCoordinates:u,mouseMode:i,infiniteSource:c}));const P=.005;return u.x<.2&&r.x>=P&&o(1,r.x-=P,r),u.x>.8&&r.x<1-1/s&&o(1,r.x+=P,r),u.y<.2&&r.y>=P&&o(1,r.y-=P,r),u.y>.8&&r.y<1-1/s&&o(1,r.y+=P,r),fn({gl:R,cellsTex:L,worldDimensions:a,zoomLevel:s,pan:r}),x=requestAnimationFrame(_)}x=requestAnimationFrame(_)}let m;vt(()=>{f(),o(6,m=mn(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",_=>{if(_.code==="Space"&&(o(5,h=!h),_.preventDefault()),_.code==="KeyF"){m();return}if(_.code==="KeyR"){E("random");return}if(_.code==="KeyE"){E("zero");return}if(_.code==="KeyI"){o(3,s++,s);return}if(_.code==="KeyS"){o(2,c=!c);return}if(_.code==="KeyO"){o(3,s=Math.max(s-1,1)),s===1&&(o(1,r.x=0,r),o(1,r.y=0,r));return}if(_.code==="KeyZ"){o(3,s=1),o(1,r.x=0,r),o(1,r.y=0,r);return}});const B=document.getElementById("canvas");if(!B)throw new Error("Canvas unavailable");B.addEventListener("mousemove",_=>{const P=B.getBoundingClientRect(),xe=B.width/P.width,_e=B.height/P.height,z={x:(_.clientX-P.left)*xe,y:(_.clientY-P.top)*_e};u.x=z.x/n.width,u.y=z.y/n.height}),B.addEventListener("mousedown",_=>{_.preventDefault(),_.button===0?i=1:_.button===2&&(i=2)}),B.addEventListener("mouseup",_=>{_.preventDefault(),i=0}),B.addEventListener("contextmenu",_=>(_.preventDefault(),!1))});const E=B=>{o(0,a.width=Math.min(a.width,n.width),a),o(0,a.height=Math.min(a.height,n.height),a);const _=to(R,{mode:B,worldDimensions:a,initialDensity:l});L=ro(R,{cellsTex:_.cellsTex,texDimensions:a})},U=()=>o(5,h=!h),W=()=>o(2,c=!c),H=()=>o(3,s+=1),pe=()=>{o(3,s=Math.max(s-1,1)),s===1&&(o(1,r.x=0,r),o(1,r.y=0,r))},q=()=>o(3,s=1),G=()=>f(),X=()=>E("random"),Q=()=>E("zero");function te(){l=he(this.value),o(4,l)}const oe=()=>E("random");function Y(){a.width=he(this.value),o(0,a)}const K=()=>E("random");function ie(){a.height=he(this.value),o(0,a)}return[a,r,c,s,l,h,m,n,f,E,U,W,H,pe,q,G,X,Q,te,oe,Y,K,ie]}let Tn=class extends Ve{constructor(t){super(),Ye(this,t,vn,_n,Ke,{})}};const En=["VERTEX_SHADER","FRAGMENT_SHADER"];function wn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return An(t),t}function An(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function yo(e,t,o,n){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function io(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Po(e,t,o,n,a){const u=[];for(let i=0;i<t.length;++i){const c=En[i]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=bn(e,t[i],c,a);if(!s)throw"Can not create shader";u.push(s)}const r=gn(e,u,o,n,a);if(!r)throw"Can not create program";return r}function bn(e,t,o,n){const a=n||console.log,u=e.createShader(o);if(!u)throw"Could not load shader";if(e.shaderSource(u,t),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS)){const i=e.getShaderInfoLog(u);return a(new Error("*** Error compiling shader '"+u+"':"+i+`
`+t.split(`
`).map((c,s)=>`${s+1}: ${c}`).join(`
`))),e.deleteShader(u),null}return u}function gn(e,t,o,n,a){const u=a||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(c){e.attachShader(r,c)}),o&&o.forEach(function(c,s){e.bindAttribLocation(r,n?n[s]:s,c)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const c=e.getProgramInfoLog(r);return u("Error in program linking:"+c),e.deleteProgram(r),null}return r}function Rn(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const Ln=`precision mediump float;
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

`;let ye,Pe,ft;const ao=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:a,width:u}=o;let r=Sn;if(n==="gradiant"?r=Dn:n==="age_gradiant"&&(r=Cn),Pe=Po(e,[Ln,r]),ye={positionLocation:e.getAttribLocation(Pe,"a_position"),textureLocation:e.getUniformLocation(Pe,"u_texture"),worldSizeLocation:e.getUniformLocation(Pe,"u_worldSize"),zoomLocation:e.getUniformLocation(Pe,"u_zoom"),panLocation:e.getUniformLocation(Pe,"u_pan"),iterationLocation:e.getUniformLocation(Pe,"u_iteration")},ft=e.createBuffer(),!ft)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ft),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,u,0,u,0,0,a,u,a]),e.STATIC_DRAW)},Fn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:a,pan:u,iteration:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Pe),t.bindBuffer(t.ARRAY_BUFFER,ft),t.enableVertexAttribArray(ye.positionLocation),t.vertexAttribPointer(ye.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(ye.textureLocation,0),t.uniform2f(ye.worldSizeLocation,n.width,n.height),t.uniform1f(ye.zoomLocation,Math.max(a,1)),t.uniform2f(ye.panLocation,u.x,u.y),t.uniform1f(ye.iterationLocation,r),t.drawArrays(t.TRIANGLES,0,6)};function uo(e,t){const{worldDimensions:o,initialDensity:n,mode:a}=t;let u=n;u>1&&(u=1);const r=o.width*o.height;let i=new Array(r).fill(0);return a==="random"&&(i=i.map(s=>Math.random()<u?1:0)),{cellsTex:yo(e,new Float32Array(i.map((s,l)=>[s,l,0,0]).flat()),o.width,o.height)}}const In=` attribute vec2 aPosition;

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
`;let Ee,we,Pt,at,Ct,co,so,tt,mt;const lo=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return we=Po(e,[In,yn]),Ee={uInputTextureLocation:e.getUniformLocation(we,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(we,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(we,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(we,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(we,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(we,"uIteration"),positionLocation:e.getAttribLocation(we,"aPosition")},Pt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Pt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),at=o,Ct=yo(e,null,n.width,n.height),co=io(e,at),so=io(e,Ct),tt={fb:co,tex:at},mt={fb:so,tex:Ct},at},Pn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:a,mouseMode:u,infiniteSource:r,iteration:i}=e;t.bindFramebuffer(t.FRAMEBUFFER,mt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,Pt),t.enableVertexAttribArray(Ee.positionLocation),t.vertexAttribPointer(Ee.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,tt.tex),t.useProgram(we),t.uniform1i(Ee.uInputTextureLocation,0),t.uniform2f(Ee.uTextureSizeLocation,o.width,o.height),t.uniform2f(Ee.uMouseCoordinatesLocation,a.x,a.y),t.uniform1i(Ee.uMouseModeLocation,u),t.uniform1i(Ee.uInfiniteSourceLocation,r?1:0),t.uniform1f(Ee.uIterationLocation,i),t.drawArrays(t.TRIANGLES,0,6);{const c=tt;tt=mt,mt=c}return tt.tex};function $n(e){let t;return{c(){t=v("canvas"),this.h()},l(o){t=T(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),b(t).forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[0].width),g(t,"height",e[0].height),g(t,"class","svelte-1b0ol19")},m(o,n){I(o,t,n)},p:J,i:J,o:J,d(o){o&&p(t)}}}function Un(e){const t={x:0,y:0};let o=0,n,a;const u={width:window.innerWidth-50,height:window.innerHeight-10},r={x:0,y:0},i={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>R("random"),"Empty grid":()=>R("zero"),"Initial density":.05,"World width":u.width,"World height":u.height,Cells:(u.width*u.height).toString(),"Zoom level":1,"Pan reset":()=>{r.x=0,r.y=0},"Reload progam":()=>L()},c=async()=>{const x=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),f=new x.GUI;f.add(i,"Pause").listen(),f.add(i,"Infinite source").listen(),f.add(i,"TimeInSeconds").listen(),f.add(i,"Iteration").listen(),f.add(i,"fps").listen(),f.add(i,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>ao(s,{screenDimensions:u,mode:i["Draw mode"]})),f.add(i,"Reset grid"),f.add(i,"Empty grid"),f.add(i,"Initial density",0,1,.01).onFinishChange(()=>R("random")),f.add(i,"World width",1,u.width,1).onFinishChange(()=>{i.Cells=(i["World height"]*i["World width"]).toString(),R("random")}),f.add(i,"World height",1,u.height,1).onFinishChange(()=>{i.Cells=(i["World height"]*i["World width"]).toString(),R("random")}),f.add(i,"Cells").listen(),f.add(i,"Zoom level",1,10),f.add(i,"Pan reset"),f.add(i,"Reload progam")};let s,l,h;function L(){n=Date.now()/1e3,cancelAnimationFrame(h),s=wn(),Rn(s.canvas);const x=uo(s,{mode:"random",worldDimensions:{width:i["World width"],height:i["World height"]},initialDensity:i["Initial density"]});l=lo(s,{cellsTex:x.cellsTex,texDimensions:{width:i["World width"],height:i["World height"]}}),ao(s,{screenDimensions:u,mode:i["Draw mode"]});function f(){if(!i.Pause){const E=Date.now()/1e3,U=E-a;i.fps=1/U,a=E,i.TimeInSeconds=E-n,i.Iteration++,l=Pn({gl:s,worldDimensions:{width:i["World width"],height:i["World height"]},screenDimensions:u,mouseCoordinates:t,mouseMode:o,infiniteSource:i["Infinite source"],iteration:i.Iteration})}const m=.005;return t.x<.1&&r.x>=m&&(r.x-=m),t.x>.9&&r.x<1-1/i["Zoom level"]&&(r.x+=m),t.y<.1&&r.y>=m&&(r.y-=m),t.y>.9&&r.y<1-1/i["Zoom level"]&&(r.y+=m),Fn({gl:s,cellsTex:l,worldDimensions:{width:i["World width"],height:i["World height"]},zoomLevel:i["Zoom level"],pan:r,iteration:i.Iteration}),h=requestAnimationFrame(f)}h=requestAnimationFrame(f)}vt(()=>{L(),c(),document.addEventListener("keydown",f=>{if(f.code==="Space"&&(i.Pause=!i.Pause,f.preventDefault()),f.code==="KeyR"){R("random");return}if(f.code==="KeyE"){R("zero");return}if(f.code==="KeyS"){i["Infinite source"]=!i["Infinite source"];return}});const x=document.getElementById("canvas");if(!x)throw new Error("Canvas unavailable");x.addEventListener("mousemove",f=>{const m=x.getBoundingClientRect(),E=x.width/m.width,U=x.height/m.height,W={x:(f.clientX-m.left)*E,y:(f.clientY-m.top)*U};t.x=W.x/u.width,t.y=W.y/u.height}),x.addEventListener("mousedown",f=>{f.preventDefault(),f.button===0?o=1:f.button===2&&(o=2)}),x.addEventListener("mouseup",f=>{f.preventDefault(),o=0}),x.addEventListener("contextmenu",f=>(f.preventDefault(),!1))});const R=x=>{i.Iteration=0,i.TimeInSeconds=0;const f=uo(s,{mode:x,worldDimensions:{width:i["World width"],height:i["World height"]},initialDensity:i["Initial density"]});l=lo(s,{cellsTex:f.cellsTex,texDimensions:{width:i["World width"],height:i["World height"]}})};return[u]}let zn=class extends Ve{constructor(t){super(),Ye(this,t,Un,$n,Ke,{})}};const Mn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Bn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Nn(t),t}function Nn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function $o(e,t,o,n){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function fo(e,t){const o=e.createFramebuffer();if(!o)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),o}function Uo(e,t,o,n,a){const u=[];for(let i=0;i<t.length;++i){const c=Mn[i]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,s=Wn(e,t[i],c,a);if(!s)throw"Can not create shader";u.push(s)}const r=Xn(e,u,o,n,a);if(!r)throw"Can not create program";return r}function Wn(e,t,o,n){const a=n||console.log,u=e.createShader(o);if(!u)throw"Could not load shader";if(e.shaderSource(u,t),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS)){const i=e.getShaderInfoLog(u);return a(new Error("*** Error compiling shader '"+u+"':"+i+`
`+t.split(`
`).map((c,s)=>`${s+1}: ${c}`).join(`
`))),e.deleteShader(u),null}return u}function Xn(e,t,o,n,a){const u=a||console.log,r=e.createProgram();if(!r)throw"Could not create program";if(t.forEach(function(c){e.attachShader(r,c)}),o&&o.forEach(function(c,s){e.bindAttribLocation(r,n?n[s]:s,c)}),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const c=e.getProgramInfoLog(r);return u("Error in program linking:"+c),e.deleteProgram(r),null}return r}function Gn(e,t){t=t||1;const o=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==o||e.height!==n?(e.width=o,e.height=n,!0):!1}const On=`precision mediump float;
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

`;let $e,Ue,ht;const mo=(e,t)=>{const{screenDimensions:o,mode:n}=t,{height:a,width:u}=o;let r=kn;if(n==="gradiant"?r=Hn:n==="age_gradiant"&&(r=Vn),Ue=Uo(e,[On,r]),$e={positionLocation:e.getAttribLocation(Ue,"a_position"),textureLocation:e.getUniformLocation(Ue,"u_texture"),worldSizeLocation:e.getUniformLocation(Ue,"u_worldSize"),zoomLocation:e.getUniformLocation(Ue,"u_zoom"),panLocation:e.getUniformLocation(Ue,"u_pan"),iterationLocation:e.getUniformLocation(Ue,"u_iteration")},ht=e.createBuffer(),!ht)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,ht),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,u,0,u,0,0,a,u,a]),e.STATIC_DRAW)},Yn=e=>{const{gl:t,cellsTex:o,worldDimensions:n,zoomLevel:a,pan:u,iteration:r}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,o),t.useProgram(Ue),t.bindBuffer(t.ARRAY_BUFFER,ht),t.enableVertexAttribArray($e.positionLocation),t.vertexAttribPointer($e.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i($e.textureLocation,0),t.uniform2f($e.worldSizeLocation,n.width,n.height),t.uniform1f($e.zoomLocation,Math.max(a,1)),t.uniform2f($e.panLocation,u.x,u.y),t.uniform1f($e.iterationLocation,r),t.drawArrays(t.TRIANGLES,0,6)};function ho(e,t){const{worldDimensions:o,initialDensity:n,mode:a}=t;let u=n;u>1&&(u=1);const r=o.width*o.height;let i=new Array(r).fill(0);return a==="random"&&(i=i.map(s=>Math.random()<u?1:0)),{cellsTex:$o(e,new Float32Array(i.map((s,l)=>[s,l,0,0]).flat()),o.width,o.height)}}const Kn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Zn=`precision highp float;

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
`;let de,fe,$t,ut,Ft,po,xo,ot,pt;const _o=(e,t)=>{const{cellsTex:o,texDimensions:n}=t;return fe=Uo(e,[Kn,Zn]),de={uInputTextureLocation:e.getUniformLocation(fe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(fe,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(fe,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(fe,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(fe,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(fe,"uIteration"),uPauseLocation:e.getUniformLocation(fe,"uPause"),positionLocation:e.getAttribLocation(fe,"aPosition")},$t=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,$t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ut=o,Ft=$o(e,null,n.width,n.height),po=fo(e,ut),xo=fo(e,Ft),ot={fb:po,tex:ut},pt={fb:xo,tex:Ft},ut},qn=e=>{const{gl:t,worldDimensions:o,screenDimensions:n,mouseCoordinates:a,mouseMode:u,infiniteSource:r,iteration:i,pause:c}=e;t.bindFramebuffer(t.FRAMEBUFFER,pt.fb),t.viewport(0,0,n.width,n.height),t.bindBuffer(t.ARRAY_BUFFER,$t),t.enableVertexAttribArray(de.positionLocation),t.vertexAttribPointer(de.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ot.tex),t.useProgram(fe),t.uniform1i(de.uInputTextureLocation,0),t.uniform2f(de.uTextureSizeLocation,o.width,o.height),t.uniform2f(de.uMouseCoordinatesLocation,a.x,a.y),t.uniform1i(de.uMouseModeLocation,u),t.uniform1i(de.uInfiniteSourceLocation,r?1:0),t.uniform1f(de.uIterationLocation,i),t.uniform1i(de.uPauseLocation,c?1:0),t.drawArrays(t.TRIANGLES,0,6);{const s=ot;ot=pt,pt=s}return ot.tex};function jn(e){let t;return{c(){t=v("canvas"),this.h()},l(o){t=T(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),b(t).forEach(p),this.h()},h(){g(t,"id","canvas"),_t(t,"background-color","black"),g(t,"width",e[0].width),g(t,"height",e[0].height),g(t,"class","svelte-1b0ol19")},m(o,n){I(o,t,n)},p:J,i:J,o:J,d(o){o&&p(t)}}}function Jn(e){const t={x:0,y:0};let o=0,n,a;const u={width:window.innerWidth-50,height:window.innerHeight-10},r={x:0,y:0},i={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>x("random"),"Empty grid":()=>x("zero"),"Initial density":.05,"World width":u.width,"World height":u.height,Cells:(u.width*u.height).toString(),"Zoom level":1,"Pan reset":()=>{r.x=0,r.y=0},"Reload progam":()=>R()},c=async()=>{const f=await So(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),m=new f.GUI;m.add(i,"Pause").listen(),m.add(i,"Infinite source").listen(),m.add(i,"TimeInSeconds").listen(),m.add(i,"Iteration").listen(),m.add(i,"fps").listen(),m.add(i,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>mo(l,{screenDimensions:u,mode:i["Draw mode"]})),m.add(i,"Reset grid"),m.add(i,"Empty grid"),m.add(i,"Initial density",0,1,.01).onFinishChange(()=>x("random")),m.add(i,"World width",1,u.width,1).onFinishChange(()=>{i.Cells=(i["World height"]*i["World width"]).toString(),x("random")}),m.add(i,"World height",1,u.height,1).onFinishChange(()=>{i.Cells=(i["World height"]*i["World width"]).toString(),x("random")}),m.add(i,"Cells").listen(),m.add(i,"Zoom level",1,10),m.add(i,"Pan reset"),m.add(i,"Reload progam")},s=()=>{document.addEventListener("keydown",m=>{if(m.code==="Space"&&(i.Pause=!i.Pause,m.preventDefault()),m.code==="KeyR"){x("random");return}if(m.code==="KeyE"){x("zero");return}if(m.code==="KeyS"){i["Infinite source"]=!i["Infinite source"];return}});const f=document.getElementById("canvas");if(!f)throw new Error("Canvas unavailable");f.addEventListener("mousemove",m=>{const E=f.getBoundingClientRect(),U=f.width/E.width,W=f.height/E.height,H={x:(m.clientX-E.left)*U,y:(m.clientY-E.top)*W};t.x=H.x/u.width,t.y=H.y/u.height}),f.addEventListener("mousedown",m=>{m.preventDefault(),m.button===0?o=1:m.button===2&&(o=2)}),f.addEventListener("mouseup",m=>{m.preventDefault(),o=0}),f.addEventListener("contextmenu",m=>(m.preventDefault(),!1))};let l,h,L;function R(){n=Date.now()/1e3,cancelAnimationFrame(L),l=Bn(),Gn(l.canvas);const f=ho(l,{mode:"random",worldDimensions:{width:i["World width"],height:i["World height"]},initialDensity:i["Initial density"]});h=_o(l,{cellsTex:f.cellsTex,texDimensions:{width:i["World width"],height:i["World height"]}}),mo(l,{screenDimensions:u,mode:i["Draw mode"]});function m(){if(!i.Pause){const U=Date.now()/1e3,W=U-a;i.fps=1/W,a=U,i.TimeInSeconds=U-n,i.Iteration++}h=qn({gl:l,worldDimensions:{width:i["World width"],height:i["World height"]},screenDimensions:u,mouseCoordinates:t,mouseMode:o,infiniteSource:i["Infinite source"],iteration:i.Iteration,pause:i.Pause});const E=.005;return t.x<.1&&r.x>=E&&(r.x-=E),t.x>.9&&r.x<1-1/i["Zoom level"]&&(r.x+=E),t.y<.1&&r.y>=E&&(r.y-=E),t.y>.9&&r.y<1-1/i["Zoom level"]&&(r.y+=E),Yn({gl:l,cellsTex:h,worldDimensions:{width:i["World width"],height:i["World height"]},zoomLevel:i["Zoom level"],pan:r,iteration:i.Iteration}),L=requestAnimationFrame(m)}L=requestAnimationFrame(m)}vt(()=>{R(),c(),s()});const x=f=>{i.Iteration=0,i.TimeInSeconds=0;const m=ho(l,{mode:f,worldDimensions:{width:i["World width"],height:i["World height"]},initialDensity:i["Initial density"]});h=_o(l,{cellsTex:m.cellsTex,texDimensions:{width:i["World width"],height:i["World height"]}})};return[u]}class Qn extends Ve{constructor(t){super(),Ye(this,t,Jn,jn,Ke,{})}}function vo(e,t,o){const n=e.slice();return n[1]=t[o],n}function To(e,t,o){const n=e.slice();return n[1]=t[o],n}function er(e){let t;return{c(){t=w("About")},l(o){t=A(o,"About")},m(o,n){I(o,t,n)},d(o){o&&p(t)}}}function tr(e){let t=e[1].title+"",o;return{c(){o=w(t)},l(n){o=A(n,t)},m(n,a){I(n,o,a)},p:J,d(n){n&&p(o)}}}function Eo(e){let t,o;return t=new Lo({props:{$$slots:{default:[tr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(n){ze(t.$$.fragment,n)},m(n,a){ge(t,n,a),o=!0},p(n,a){const u={};a&64&&(u.$$scope={dirty:a,ctx:n}),t.$set(u)},i(n){o||(V(t.$$.fragment,n),o=!0)},o(n){j(t.$$.fragment,n),o=!1},d(n){Re(t,n)}}}function or(e){let t,o,n,a;t=new Lo({props:{$$slots:{default:[er]},$$scope:{ctx:e}}});let u=e[0],r=[];for(let c=0;c<u.length;c+=1)r[c]=Eo(To(e,u,c));const i=c=>j(r[c],1,1,()=>{r[c]=null});return{c(){be(t.$$.fragment),o=D();for(let c=0;c<r.length;c+=1)r[c].c();n=xt()},l(c){ze(t.$$.fragment,c),o=C(c);for(let s=0;s<r.length;s+=1)r[s].l(c);n=xt()},m(c,s){ge(t,c,s),I(c,o,s);for(let l=0;l<r.length;l+=1)r[l].m(c,s);I(c,n,s),a=!0},p(c,s){const l={};if(s&64&&(l.$$scope={dirty:s,ctx:c}),t.$set(l),s&1){u=c[0];let h;for(h=0;h<u.length;h+=1){const L=To(c,u,h);r[h]?(r[h].p(L,s),V(r[h],1)):(r[h]=Eo(L),r[h].c(),V(r[h],1),r[h].m(n.parentNode,n))}for(Ut(),h=u.length;h<r.length;h+=1)i(h);zt()}},i(c){if(!a){V(t.$$.fragment,c);for(let s=0;s<u.length;s+=1)V(r[s]);a=!0}},o(c){j(t.$$.fragment,c),r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)j(r[s]);a=!1},d(c){Re(t,c),c&&p(o),go(r,c),c&&p(n)}}}function nr(e){let t,o;return{c(){t=v("p"),o=w("Experiments running Conway's Game of Life in WebGL shaders.")},l(n){t=T(n,"P",{});var a=b(t);o=A(a,"Experiments running Conway's Game of Life in WebGL shaders."),a.forEach(p)},m(n,a){I(n,t,a),d(t,o)},p:J,d(n){n&&p(t)}}}function rr(e){let t,o,n;var a=e[1].component;function u(r){return{}}return a&&(t=Kt(a,u())),{c(){t&&be(t.$$.fragment),o=D()},l(r){t&&ze(t.$$.fragment,r),o=C(r)},m(r,i){t&&ge(t,r,i),I(r,o,i),n=!0},p(r,i){if(a!==(a=r[1].component)){if(t){Ut();const c=t;j(c.$$.fragment,1,0,()=>{Re(c,1)}),zt()}a?(t=Kt(a,u()),be(t.$$.fragment),V(t.$$.fragment,1),ge(t,o.parentNode,o)):t=null}},i(r){n||(t&&V(t.$$.fragment,r),n=!0)},o(r){t&&j(t.$$.fragment,r),n=!1},d(r){t&&Re(t,r),r&&p(o)}}}function wo(e){let t,o;return t=new Ro({props:{$$slots:{default:[rr]},$$scope:{ctx:e}}}),{c(){be(t.$$.fragment)},l(n){ze(t.$$.fragment,n)},m(n,a){ge(t,n,a),o=!0},p(n,a){const u={};a&64&&(u.$$scope={dirty:a,ctx:n}),t.$set(u)},i(n){o||(V(t.$$.fragment,n),o=!0)},o(n){j(t.$$.fragment,n),o=!1},d(n){Re(t,n)}}}function ir(e){let t,o,n,a,u,r;t=new Mo({props:{$$slots:{default:[or]},$$scope:{ctx:e}}}),n=new Ro({props:{$$slots:{default:[nr]},$$scope:{ctx:e}}});let i=e[0],c=[];for(let l=0;l<i.length;l+=1)c[l]=wo(vo(e,i,l));const s=l=>j(c[l],1,1,()=>{c[l]=null});return{c(){be(t.$$.fragment),o=D(),be(n.$$.fragment),a=D();for(let l=0;l<c.length;l+=1)c[l].c();u=xt()},l(l){ze(t.$$.fragment,l),o=C(l),ze(n.$$.fragment,l),a=C(l);for(let h=0;h<c.length;h+=1)c[h].l(l);u=xt()},m(l,h){ge(t,l,h),I(l,o,h),ge(n,l,h),I(l,a,h);for(let L=0;L<c.length;L+=1)c[L].m(l,h);I(l,u,h),r=!0},p(l,h){const L={};h&64&&(L.$$scope={dirty:h,ctx:l}),t.$set(L);const R={};if(h&64&&(R.$$scope={dirty:h,ctx:l}),n.$set(R),h&1){i=l[0];let x;for(x=0;x<i.length;x+=1){const f=vo(l,i,x);c[x]?(c[x].p(f,h),V(c[x],1)):(c[x]=wo(f),c[x].c(),V(c[x],1),c[x].m(u.parentNode,u))}for(Ut(),x=i.length;x<c.length;x+=1)s(x);zt()}},i(l){if(!r){V(t.$$.fragment,l),V(n.$$.fragment,l);for(let h=0;h<i.length;h+=1)V(c[h]);r=!0}},o(l){j(t.$$.fragment,l),j(n.$$.fragment,l),c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)j(c[h]);r=!1},d(l){Re(t,l),l&&p(o),Re(n,l),l&&p(a),go(c,l),l&&p(u)}}}function ar(e){let t,o,n;return o=new zo({props:{$$slots:{default:[ir]},$$scope:{ctx:e}}}),{c(){t=v("div"),be(o.$$.fragment)},l(a){t=T(a,"DIV",{});var u=b(t);ze(o.$$.fragment,u),u.forEach(p)},m(a,u){I(a,t,u),ge(o,t,null),n=!0},p(a,[u]){const r={};u&64&&(r.$$scope={dirty:u,ctx:a}),o.$set(r)},i(a){n||(V(o.$$.fragment,a),n=!0)},o(a){j(o.$$.fragment,a),n=!1},d(a){a&&p(t),Re(o)}}}function ur(e){return[[{title:"V4",component:Qn},{title:"V3",component:zn},{title:"V2",component:Tn},{title:"V1",component:en}]]}class cr extends Ve{constructor(t){super(),Ye(this,t,ur,ar,Ke,{})}}function sr(e){let t,o;return t=new cr({}),{c(){be(t.$$.fragment)},l(n){ze(t.$$.fragment,n)},m(n,a){ge(t,n,a),o=!0},p:J,i(n){o||(V(t.$$.fragment,n),o=!0)},o(n){j(t.$$.fragment,n),o=!1},d(n){Re(t,n)}}}class xr extends Ve{constructor(t){super(),Ye(this,t,null,sr,Ke,{})}}export{xr as default};
