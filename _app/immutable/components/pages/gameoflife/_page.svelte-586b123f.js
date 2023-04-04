import{S as Ie,i as Ue,s as Be,k as m,a as R,q as T,l as p,m as v,h as d,c as F,r as _,n as b,p as Ne,b as U,D as a,O as Q,K as C,u as Z,P as ne,B as ve,M as Oe,o as Xe,R as Me,w as Ge,x as We,y as ke,f as Ve,t as $e,z as He}from"../../../chunks/index-46ced799.js";const qe=["VERTEX_SHADER","FRAGMENT_SHADER"];function Ye(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Ke(t),t}function Ke(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ye(e,t,n,o){const r=e.createTexture();if(!r)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,o,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function Le(e,t){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),n}function ze(e,t,n,o,r){const i=[];for(let f=0;f<t.length;++f){const l=qe[f]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=je(e,t[f],l,r);if(!c)throw"Can not create shader";i.push(c)}const u=Je(e,i,n,o,r);if(!u)throw"Can not create program";return u}function je(e,t,n,o){const r=o||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const f=e.getShaderInfoLog(i);return r(new Error("*** Error compiling shader '"+i+"':"+f+`
`+t.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),e.deleteShader(i),null}return i}function Je(e,t,n,o,r){const i=r||console.log,u=e.createProgram();if(!u)throw"Could not create program";if(t.forEach(function(l){e.attachShader(u,l)}),n&&n.forEach(function(l,c){e.bindAttribLocation(u,o?o[c]:c,l)}),e.linkProgram(u),!e.getProgramParameter(u,e.LINK_STATUS)){const l=e.getProgramInfoLog(u);return i("Error in program linking:"+l),e.deleteProgram(u),null}return u}function Qe(e,t){t=t||1;const n=e.clientWidth*t|0,o=e.clientHeight*t|0;return e.width!==n||e.height!==o?(e.width=n,e.height=o,!0):!1}const Ze=`attribute vec2 a_position;
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

`,et=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let V,$,te;const tt=(e,t)=>{const{screenDimensions:n}=t,{height:o,width:r}=n;if($=ze(e,[Ze,et]),V={positionLocation:e.getAttribLocation($,"a_position"),textureLocation:e.getUniformLocation($,"u_texture"),worldSizeLocation:e.getUniformLocation($,"u_worldSize")},te=e.createBuffer(),!te)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,te),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,o,r,0,r,0,0,o,r,o]),e.STATIC_DRAW)},ot=e=>{const{gl:t,cellsTex:n,worldDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,n),t.useProgram($),t.bindBuffer(t.ARRAY_BUFFER,te),t.enableVertexAttribArray(V.positionLocation),t.vertexAttribPointer(V.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(V.textureLocation,0),t.uniform2f(V.worldSizeLocation,o.width,o.height),t.drawArrays(t.TRIANGLES,0,6)};function nt(e,t,n){function o(){const i=e.getElementById(t);i&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),i.width=n.width,i.height=n.height)}function r(){const i=e.getElementById(t);i&&(e.fullscreenElement||i.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&o()}),{enableFullscreen:r,disableFullscreen:o}}function De(e,t){const{worldDimensions:n}=t,o=n.width*n.height,r=new Array(o).fill(0).map(u=>Math.random()<.5?1:0);return{cellsTex:ye(e,new Float32Array(r.map(u=>[u,0,0,0]).flat()),n.width,n.height)}}const rt=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,it=`precision highp float;

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
`;let H,q,Ee,ee,_e,ge,Ce,Y,oe;const Pe=(e,t)=>{const{cellsTex:n,texDimensions:o}=t;return q=ze(e,[rt,it]),H={uInputTextureLocation:e.getUniformLocation(q,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(q,"uTextureSize"),positionLocation:e.getAttribLocation(q,"aPosition")},Ee=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Ee),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ee=n,_e=ye(e,null,o.width,o.height),ge=Le(e,ee),Ce=Le(e,_e),Y={fb:ge,tex:ee},oe={fb:Ce,tex:_e},ee},at=e=>{const{gl:t,worldDimensions:n,screenDimensions:o}=e;t.bindFramebuffer(t.FRAMEBUFFER,oe.fb),t.viewport(0,0,o.width,o.height),t.bindBuffer(t.ARRAY_BUFFER,Ee),t.enableVertexAttribArray(H.positionLocation),t.vertexAttribPointer(H.positionLocation,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Y.tex),t.useProgram(q),t.uniform1i(H.uInputTextureLocation,0),t.uniform2f(H.uTextureSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLE_STRIP,0,4);{const r=Y;Y=oe,oe=r}return Y.tex};function ut(e){let t,n,o,r,i=e[1]?"Play":"Pause",u,f,l,c,B,P=e[0].width+"",y,k,I=e[0].height+"",z,w,S=e[0].width*e[0].height+"",K,re,ie,N,ae,ue,O,se,j,L,X,le,ce,E,M,fe,de,x,he,G,me,pe,A,Te,xe;return{c(){t=m("canvas"),n=R(),o=m("div"),r=m("button"),u=T(i),f=R(),l=m("div"),c=m("span"),B=T("World "),y=T(P),k=T(" x "),z=T(I),w=T(" ("),K=T(S),re=T(" cells)"),ie=R(),N=m("button"),ae=T("Reload program"),ue=R(),O=m("button"),se=T("Fullscreen"),j=R(),L=m("div"),X=m("button"),le=T("Reset world"),ce=R(),E=m("span"),M=m("label"),fe=T("World: width"),de=R(),x=m("input"),he=R(),G=m("label"),me=T("height"),pe=R(),A=m("input"),this.h()},l(s){t=p(s,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),v(t).forEach(d),n=F(s),o=p(s,"DIV",{});var h=v(o);r=p(h,"BUTTON",{});var Ae=v(r);u=_(Ae,i),Ae.forEach(d),h.forEach(d),f=F(s),l=p(s,"DIV",{});var W=v(l);c=p(W,"SPAN",{});var D=v(c);B=_(D,"World "),y=_(D,P),k=_(D," x "),z=_(D,I),w=_(D," ("),K=_(D,S),re=_(D," cells)"),D.forEach(d),ie=F(W),N=p(W,"BUTTON",{});var be=v(N);ae=_(be,"Reload program"),be.forEach(d),ue=F(W),O=p(W,"BUTTON",{});var we=v(O);se=_(we,"Fullscreen"),we.forEach(d),W.forEach(d),j=F(s),L=p(s,"DIV",{});var J=v(L);X=p(J,"BUTTON",{});var Re=v(X);le=_(Re,"Reset world"),Re.forEach(d),ce=F(J),E=p(J,"SPAN",{});var g=v(E);M=p(g,"LABEL",{for:!0});var Fe=v(M);fe=_(Fe,"World: width"),Fe.forEach(d),de=F(g),x=p(g,"INPUT",{id:!0,type:!0,min:!0}),he=F(g),G=p(g,"LABEL",{for:!0});var Se=v(G);me=_(Se,"height"),Se.forEach(d),pe=F(g),A=p(g,"INPUT",{id:!0,type:!0,min:!0}),g.forEach(d),J.forEach(d),this.h()},h(){b(t,"id","canvas"),Ne(t,"background-color","black"),b(t,"width",e[3].width),b(t,"height",e[3].height),b(M,"for","worldWidth"),b(x,"id","worldWidth"),b(x,"type","number"),b(x,"min",0),b(G,"for","worldHeight"),b(A,"id","worldHeight"),b(A,"type","number"),b(A,"min",0)},m(s,h){U(s,t,h),U(s,n,h),U(s,o,h),a(o,r),a(r,u),U(s,f,h),U(s,l,h),a(l,c),a(c,B),a(c,y),a(c,k),a(c,z),a(c,w),a(c,K),a(c,re),a(l,ie),a(l,N),a(N,ae),a(l,ue),a(l,O),a(O,se),U(s,j,h),U(s,L,h),a(L,X),a(X,le),a(L,ce),a(L,E),a(E,M),a(M,fe),a(E,de),a(E,x),Q(x,e[0].width),a(E,he),a(E,G),a(G,me),a(E,pe),a(E,A),Q(A,e[0].height),Te||(xe=[C(r,"click",e[6]),C(N,"click",e[7]),C(O,"click",function(){Me(e[2])&&e[2].apply(this,arguments)}),C(X,"click",e[5]),C(x,"change",e[5]),C(x,"input",e[8]),C(A,"change",e[5]),C(A,"input",e[9])],Te=!0)},p(s,[h]){e=s,h&2&&i!==(i=e[1]?"Play":"Pause")&&Z(u,i),h&1&&P!==(P=e[0].width+"")&&Z(y,P),h&1&&I!==(I=e[0].height+"")&&Z(z,I),h&1&&S!==(S=e[0].width*e[0].height+"")&&Z(K,S),h&1&&ne(x.value)!==e[0].width&&Q(x,e[0].width),h&1&&ne(A.value)!==e[0].height&&Q(A,e[0].height)},i:ve,o:ve,d(s){s&&d(t),s&&d(n),s&&d(o),s&&d(f),s&&d(l),s&&d(j),s&&d(L),Te=!1,Oe(xe)}}}function st(e,t,n){const o={width:1600,height:900},r={width:800,height:450};let i=!0,u,f,l;function c(){cancelAnimationFrame(l),f=Ye(),Qe(f.canvas);const w=De(f,{worldDimensions:r});u=Pe(f,{cellsTex:w.cellsTex,texDimensions:r}),tt(f,{screenDimensions:o});function S(){return i||(u=at({gl:f,worldDimensions:r,screenDimensions:o})),ot({gl:f,cellsTex:u,worldDimensions:r}),l=requestAnimationFrame(S)}l=requestAnimationFrame(S)}let B;Xe(()=>{c(),n(2,B=nt(document,"canvas",o).enableFullscreen),document.addEventListener("keydown",w=>{w.code==="Space"&&(n(1,i=!i),w.preventDefault())})});const P=()=>{n(0,r.width=Math.min(r.width,o.width),r),n(0,r.height=Math.min(r.height,o.height),r);const w=De(f,{worldDimensions:r});u=Pe(f,{cellsTex:w.cellsTex,texDimensions:r})},y=()=>n(1,i=!i),k=()=>c();function I(){r.width=ne(this.value),n(0,r)}function z(){r.height=ne(this.value),n(0,r)}return[r,i,B,o,c,P,y,k,I,z]}class lt extends Ie{constructor(t){super(),Ue(this,t,st,ut,Be,{})}}function ct(e){let t,n;return t=new lt({}),{c(){Ge(t.$$.fragment)},l(o){We(t.$$.fragment,o)},m(o,r){ke(t,o,r),n=!0},p:ve,i(o){n||(Ve(t.$$.fragment,o),n=!0)},o(o){$e(t.$$.fragment,o),n=!1},d(o){He(t,o)}}}class dt extends Ie{constructor(t){super(),Ue(this,t,null,ct,Be,{})}}export{dt as default};
