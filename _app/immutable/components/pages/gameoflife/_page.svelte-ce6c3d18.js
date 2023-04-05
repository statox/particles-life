import{S as Se,i as De,s as Ce,k as x,a as R,q as v,l as b,m as w,h as d,c as F,r as $,n as P,p as tt,b as E,D as h,O as ae,K as X,R as nt,u as le,P as ce,B as ne,M as ot,o as rt,w as B,x as k,y as N,f as g,t as L,z,e as he,g as Pe,d as Ie,L as je,v as Oe}from"../../../chunks/index-46ced799.js";import{T as it,a as at,b as Je,c as Qe}from"../../../chunks/TabPanel-3f95d051.js";const lt=["VERTEX_SHADER","FRAGMENT_SHADER"];function st(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return ut(e),e}function ut(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Ze(t,e,o,n){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function Xe(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function et(t,e,o,n,r){const l=[];for(let c=0;c<e.length;++c){const i=lt[c]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,f=ft(t,e[c],i,r);if(!f)throw"Can not create shader";l.push(f)}const a=ct(t,l,o,n,r);if(!a)throw"Can not create program";return a}function ft(t,e,o,n){const r=n||console.log,l=t.createShader(o);if(!l)throw"Could not load shader";if(t.shaderSource(l,e),t.compileShader(l),!t.getShaderParameter(l,t.COMPILE_STATUS)){const c=t.getShaderInfoLog(l);return r(new Error("*** Error compiling shader '"+l+"':"+c+`
`+e.split(`
`).map((i,f)=>`${f+1}: ${i}`).join(`
`))),t.deleteShader(l),null}return l}function ct(t,e,o,n,r){const l=r||console.log,a=t.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(i){t.attachShader(a,i)}),o&&o.forEach(function(i,f){t.bindAttribLocation(a,n?n[f]:f,i)}),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const i=t.getProgramInfoLog(a);return l("Error in program linking:"+i),t.deleteProgram(a),null}return a}function ht(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}const dt=`attribute vec2 a_position;
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

`,mt=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let J,Q,ue;const pt=(t,e)=>{const{screenDimensions:o}=e,{height:n,width:r}=o;if(Q=et(t,[dt,mt]),J={positionLocation:t.getAttribLocation(Q,"a_position"),textureLocation:t.getUniformLocation(Q,"u_texture"),worldSizeLocation:t.getUniformLocation(Q,"u_worldSize")},ue=t.createBuffer(),!ue)throw new Error("cant create buffer");t.bindBuffer(t.ARRAY_BUFFER,ue),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,0,n,r,0,r,0,0,n,r,n]),t.STATIC_DRAW)},_t=t=>{const{gl:e,cellsTex:o,worldDimensions:n}=t;e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Q),e.bindBuffer(e.ARRAY_BUFFER,ue),e.enableVertexAttribArray(J.positionLocation),e.vertexAttribPointer(J.positionLocation,2,e.FLOAT,!1,0,0),e.uniform1i(J.textureLocation,0),e.uniform2f(J.worldSizeLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6)};function Tt(t,e,o){function n(){const l=t.getElementById(e);l&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),l.width=o.width,l.height=o.height)}function r(){const l=t.getElementById(e);l&&(t.fullscreenElement||l.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:r,disableFullscreen:n}}function ke(t,e){const{worldDimensions:o}=e,n=o.width*o.height,r=new Array(n).fill(0).map(a=>Math.random()<.5?1:0);return{cellsTex:Ze(t,new Float32Array(r.map(a=>[a,0,0,0]).flat()),o.width,o.height)}}const vt=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,$t=`precision highp float;

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
`;let Z,ee,Le,se,Fe,Me,We,te,fe;const Ve=(t,e)=>{const{cellsTex:o,texDimensions:n}=e;return ee=et(t,[vt,$t]),Z={uInputTextureLocation:t.getUniformLocation(ee,"uInputTexture"),uTextureSizeLocation:t.getUniformLocation(ee,"uTextureSize"),positionLocation:t.getAttribLocation(ee,"aPosition")},Le=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Le),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),se=o,Fe=Ze(t,null,n.width,n.height),Me=Xe(t,se),We=Xe(t,Fe),te={fb:Me,tex:se},fe={fb:We,tex:Fe},se},Et=t=>{const{gl:e,worldDimensions:o,screenDimensions:n}=t;e.bindFramebuffer(e.FRAMEBUFFER,fe.fb),e.viewport(0,0,n.width,n.height),e.bindBuffer(e.ARRAY_BUFFER,Le),e.enableVertexAttribArray(Z.positionLocation),e.vertexAttribPointer(Z.positionLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te.tex),e.useProgram(ee),e.uniform1i(Z.uInputTextureLocation,0),e.uniform2f(Z.uTextureSizeLocation,o.width,o.height),e.drawArrays(e.TRIANGLES,0,6);{const r=te;te=fe,fe=r}return te.tex};function xt(t){let e,o,n,r,l=t[1]?"Play":"Pause",a,c,i,f,s,u,_=t[0].width+"",U,p,I=t[0].height+"",A,M,j=t[0].width*t[0].height+"",oe,de,me,W,pe,_e,V,Te,re,y,H,ve,$e,S,q,Ee,xe,D,be,Y,ge,we,C,Ae,Ue;return{c(){e=x("canvas"),o=R(),n=x("div"),r=x("button"),a=v(l),c=v(" (Space)"),i=R(),f=x("div"),s=x("span"),u=v("World "),U=v(_),p=v(" x "),A=v(I),M=v(" ("),oe=v(j),de=v(" cells)"),me=R(),W=x("button"),pe=v("Reload program"),_e=R(),V=x("button"),Te=v("Fullscreen (f)"),re=R(),y=x("div"),H=x("button"),ve=v("Reset world (r)"),$e=R(),S=x("span"),q=x("label"),Ee=v("World: width"),xe=R(),D=x("input"),be=R(),Y=x("label"),ge=v("height"),we=R(),C=x("input"),this.h()},l(m){e=b(m,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(e).forEach(d),o=F(m),n=b(m,"DIV",{});var T=w(n);r=b(T,"BUTTON",{});var Re=w(r);a=$(Re,l),c=$(Re," (Space)"),Re.forEach(d),T.forEach(d),i=F(m),f=b(m,"DIV",{});var K=w(f);s=b(K,"SPAN",{});var G=w(s);u=$(G,"World "),U=$(G,_),p=$(G," x "),A=$(G,I),M=$(G," ("),oe=$(G,j),de=$(G," cells)"),G.forEach(d),me=F(K),W=b(K,"BUTTON",{});var Be=w(W);pe=$(Be,"Reload program"),Be.forEach(d),_e=F(K),V=b(K,"BUTTON",{});var Ne=w(V);Te=$(Ne,"Fullscreen (f)"),Ne.forEach(d),K.forEach(d),re=F(m),y=b(m,"DIV",{});var ie=w(y);H=b(ie,"BUTTON",{});var ze=w(H);ve=$(ze,"Reset world (r)"),ze.forEach(d),$e=F(ie),S=b(ie,"SPAN",{});var O=w(S);q=b(O,"LABEL",{for:!0});var ye=w(q);Ee=$(ye,"World: width"),ye.forEach(d),xe=F(O),D=b(O,"INPUT",{id:!0,type:!0,min:!0}),be=F(O),Y=b(O,"LABEL",{for:!0});var Ge=w(Y);ge=$(Ge,"height"),Ge.forEach(d),we=F(O),C=b(O,"INPUT",{id:!0,type:!0,min:!0}),O.forEach(d),ie.forEach(d),this.h()},h(){P(e,"id","canvas"),tt(e,"background-color","black"),P(e,"width",t[3].width),P(e,"height",t[3].height),P(q,"for","worldWidth"),P(D,"id","worldWidth"),P(D,"type","number"),P(D,"min",0),P(Y,"for","worldHeight"),P(C,"id","worldHeight"),P(C,"type","number"),P(C,"min",0)},m(m,T){E(m,e,T),E(m,o,T),E(m,n,T),h(n,r),h(r,a),h(r,c),E(m,i,T),E(m,f,T),h(f,s),h(s,u),h(s,U),h(s,p),h(s,A),h(s,M),h(s,oe),h(s,de),h(f,me),h(f,W),h(W,pe),h(f,_e),h(f,V),h(V,Te),E(m,re,T),E(m,y,T),h(y,H),h(H,ve),h(y,$e),h(y,S),h(S,q),h(q,Ee),h(S,xe),h(S,D),ae(D,t[0].width),h(S,be),h(S,Y),h(Y,ge),h(S,we),h(S,C),ae(C,t[0].height),Ae||(Ue=[X(r,"click",t[6]),X(W,"click",t[7]),X(V,"click",function(){nt(t[2])&&t[2].apply(this,arguments)}),X(H,"click",t[5]),X(D,"change",t[5]),X(D,"input",t[8]),X(C,"change",t[5]),X(C,"input",t[9])],Ae=!0)},p(m,[T]){t=m,T&2&&l!==(l=t[1]?"Play":"Pause")&&le(a,l),T&1&&_!==(_=t[0].width+"")&&le(U,_),T&1&&I!==(I=t[0].height+"")&&le(A,I),T&1&&j!==(j=t[0].width*t[0].height+"")&&le(oe,j),T&1&&ce(D.value)!==t[0].width&&ae(D,t[0].width),T&1&&ce(C.value)!==t[0].height&&ae(C,t[0].height)},i:ne,o:ne,d(m){m&&d(e),m&&d(o),m&&d(n),m&&d(i),m&&d(f),m&&d(re),m&&d(y),Ae=!1,ot(Ue)}}}function bt(t,e,o){const n={width:1600,height:900},r={width:1600,height:900};let l=!0,a,c,i;function f(){cancelAnimationFrame(i),c=st(),ht(c.canvas);const A=ke(c,{worldDimensions:r});a=Ve(c,{cellsTex:A.cellsTex,texDimensions:r}),pt(c,{screenDimensions:n});function M(){return l||(a=Et({gl:c,worldDimensions:r,screenDimensions:n})),_t({gl:c,cellsTex:a,worldDimensions:r}),i=requestAnimationFrame(M)}i=requestAnimationFrame(M)}let s;rt(()=>{f(),o(2,s=Tt(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",A=>{if(A.code==="Space"&&(o(1,l=!l),A.preventDefault()),A.code==="KeyF"){s();return}if(A.code==="KeyR"){u();return}})});const u=()=>{o(0,r.width=Math.min(r.width,n.width),r),o(0,r.height=Math.min(r.height,n.height),r);const A=ke(c,{worldDimensions:r});a=Ve(c,{cellsTex:A.cellsTex,texDimensions:r})},_=()=>o(1,l=!l),U=()=>f();function p(){r.width=ce(this.value),o(0,r)}function I(){r.height=ce(this.value),o(0,r)}return[r,l,s,n,f,u,_,U,p,I]}class gt extends Se{constructor(e){super(),De(this,e,bt,xt,Ce,{})}}function He(t,e,o){const n=t.slice();return n[1]=e[o],n}function qe(t,e,o){const n=t.slice();return n[1]=e[o],n}function wt(t){let e;return{c(){e=v("About")},l(o){e=$(o,"About")},m(o,n){E(o,e,n)},d(o){o&&d(e)}}}function At(t){let e=t[1].title+"",o;return{c(){o=v(e)},l(n){o=$(n,e)},m(n,r){E(n,o,r)},p:ne,d(n){n&&d(o)}}}function Ye(t){let e,o;return e=new Qe({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){N(e,n,r),o=!0},p(n,r){const l={};r&64&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){o||(g(e.$$.fragment,n),o=!0)},o(n){L(e.$$.fragment,n),o=!1},d(n){z(e,n)}}}function Rt(t){let e,o,n,r;e=new Qe({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}});let l=t[0],a=[];for(let i=0;i<l.length;i+=1)a[i]=Ye(qe(t,l,i));const c=i=>L(a[i],1,1,()=>{a[i]=null});return{c(){B(e.$$.fragment),o=R();for(let i=0;i<a.length;i+=1)a[i].c();n=he()},l(i){k(e.$$.fragment,i),o=F(i);for(let f=0;f<a.length;f+=1)a[f].l(i);n=he()},m(i,f){N(e,i,f),E(i,o,f);for(let s=0;s<a.length;s+=1)a[s].m(i,f);E(i,n,f),r=!0},p(i,f){const s={};if(f&64&&(s.$$scope={dirty:f,ctx:i}),e.$set(s),f&1){l=i[0];let u;for(u=0;u<l.length;u+=1){const _=qe(i,l,u);a[u]?(a[u].p(_,f),g(a[u],1)):(a[u]=Ye(_),a[u].c(),g(a[u],1),a[u].m(n.parentNode,n))}for(Pe(),u=l.length;u<a.length;u+=1)c(u);Ie()}},i(i){if(!r){g(e.$$.fragment,i);for(let f=0;f<l.length;f+=1)g(a[f]);r=!0}},o(i){L(e.$$.fragment,i),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)L(a[f]);r=!1},d(i){z(e,i),i&&d(o),je(a,i),i&&d(n)}}}function Ft(t){let e,o;return{c(){e=x("p"),o=v("Experiments running Conway's Game of Life in WebGL shaders.")},l(n){e=b(n,"P",{});var r=w(e);o=$(r,"Experiments running Conway's Game of Life in WebGL shaders."),r.forEach(d)},m(n,r){E(n,e,r),h(e,o)},p:ne,d(n){n&&d(e)}}}function Lt(t){let e,o,n;var r=t[1].component;function l(a){return{}}return r&&(e=Oe(r,l())),{c(){e&&B(e.$$.fragment),o=R()},l(a){e&&k(e.$$.fragment,a),o=F(a)},m(a,c){e&&N(e,a,c),E(a,o,c),n=!0},p(a,c){if(r!==(r=a[1].component)){if(e){Pe();const i=e;L(i.$$.fragment,1,0,()=>{z(i,1)}),Ie()}r?(e=Oe(r,l()),B(e.$$.fragment),g(e.$$.fragment,1),N(e,o.parentNode,o)):e=null}},i(a){n||(e&&g(e.$$.fragment,a),n=!0)},o(a){e&&L(e.$$.fragment,a),n=!1},d(a){e&&z(e,a),a&&d(o)}}}function Ke(t){let e,o;return e=new Je({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){N(e,n,r),o=!0},p(n,r){const l={};r&64&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){o||(g(e.$$.fragment,n),o=!0)},o(n){L(e.$$.fragment,n),o=!1},d(n){z(e,n)}}}function St(t){let e,o,n,r,l,a;e=new at({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),n=new Je({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}});let c=t[0],i=[];for(let s=0;s<c.length;s+=1)i[s]=Ke(He(t,c,s));const f=s=>L(i[s],1,1,()=>{i[s]=null});return{c(){B(e.$$.fragment),o=R(),B(n.$$.fragment),r=R();for(let s=0;s<i.length;s+=1)i[s].c();l=he()},l(s){k(e.$$.fragment,s),o=F(s),k(n.$$.fragment,s),r=F(s);for(let u=0;u<i.length;u+=1)i[u].l(s);l=he()},m(s,u){N(e,s,u),E(s,o,u),N(n,s,u),E(s,r,u);for(let _=0;_<i.length;_+=1)i[_].m(s,u);E(s,l,u),a=!0},p(s,u){const _={};u&64&&(_.$$scope={dirty:u,ctx:s}),e.$set(_);const U={};if(u&64&&(U.$$scope={dirty:u,ctx:s}),n.$set(U),u&1){c=s[0];let p;for(p=0;p<c.length;p+=1){const I=He(s,c,p);i[p]?(i[p].p(I,u),g(i[p],1)):(i[p]=Ke(I),i[p].c(),g(i[p],1),i[p].m(l.parentNode,l))}for(Pe(),p=c.length;p<i.length;p+=1)f(p);Ie()}},i(s){if(!a){g(e.$$.fragment,s),g(n.$$.fragment,s);for(let u=0;u<c.length;u+=1)g(i[u]);a=!0}},o(s){L(e.$$.fragment,s),L(n.$$.fragment,s),i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)L(i[u]);a=!1},d(s){z(e,s),s&&d(o),z(n,s),s&&d(r),je(i,s),s&&d(l)}}}function Dt(t){let e,o,n;return o=new it({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){e=x("div"),B(o.$$.fragment)},l(r){e=b(r,"DIV",{});var l=w(e);k(o.$$.fragment,l),l.forEach(d)},m(r,l){E(r,e,l),N(o,e,null),n=!0},p(r,[l]){const a={};l&64&&(a.$$scope={dirty:l,ctx:r}),o.$set(a)},i(r){n||(g(o.$$.fragment,r),n=!0)},o(r){L(o.$$.fragment,r),n=!1},d(r){r&&d(e),z(o)}}}function Ct(t){return[[{title:"V1",component:gt}]]}class Pt extends Se{constructor(e){super(),De(this,e,Ct,Dt,Ce,{})}}function It(t){let e,o;return e=new Pt({}),{c(){B(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){N(e,n,r),o=!0},p:ne,i(n){o||(g(e.$$.fragment,n),o=!0)},o(n){L(e.$$.fragment,n),o=!1},d(n){z(e,n)}}}class Nt extends Se{constructor(e){super(),De(this,e,null,It,Ce,{})}}export{Nt as default};
