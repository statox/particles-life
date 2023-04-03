import{S as te,i as ne,s as re,k as A,a as P,q as _,l as v,m as R,h as E,c as L,r as m,n as V,p as oe,b as q,D as c,K as N,u as ee,B as H,M as ae,o as ie,R as se,w as ce,x as le,y as ue,f as fe,t as de,z as he}from"../../../chunks/index-46ced799.js";const _e=["VERTEX_SHADER","FRAGMENT_SHADER"];function me(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const t=e.getContext("webgl");if(!t)throw"gl undefined";return Ee(t),t}function Ee(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Te(e,t,r,n){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,n,0,e.RGBA,e.FLOAT,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function pe(e,t,r,n,a){const o=[];for(let l=0;l<t.length;++l){const s=_e[l]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,u=we(e,t[l],s,a);if(!u)throw"Can not create shader";o.push(u)}const i=Ae(e,o,r,n,a);if(!i)throw"Can not create program";return i}function we(e,t,r,n){const a=n||console.log,o=e.createShader(r);if(!o)throw"Could not load shader";if(e.shaderSource(o,t),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){const l=e.getShaderInfoLog(o);return a(new Error("*** Error compiling shader '"+o+"':"+l+`
`+t.split(`
`).map((s,u)=>`${u+1}: ${s}`).join(`
`))),e.deleteShader(o),null}return o}function Ae(e,t,r,n,a){const o=a||console.log,i=e.createProgram();if(!i)throw"Could not create program";if(t.forEach(function(s){e.attachShader(i,s)}),r&&r.forEach(function(s,u){e.bindAttribLocation(i,n?n[u]:u,s)}),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const s=e.getProgramInfoLog(i);return o("Error in program linking:"+s),e.deleteProgram(i),null}return i}function ve(e,t){t=t||1;const r=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==r||e.height!==n?(e.width=r,e.height=n,!0):!1}const Re=`attribute vec2 a_position;
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

`,Se=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let D,g,k;const be=e=>{if(g=pe(e,[Re,Se]),D={positionLocation:e.getAttribLocation(g,"a_position"),textureLocation:e.getUniformLocation(g,"u_texture"),worldSizeLocation:e.getUniformLocation(g,"u_worldSize")},k=e.createBuffer(),!k)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,k),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,300,300,0,300,0,0,300,300,300]),e.STATIC_DRAW)},xe=e=>{const{gl:t,cellsTex:r,worldDimensions:n}=e;t.bindTexture(t.TEXTURE_2D,r),t.useProgram(g),t.bindBuffer(t.ARRAY_BUFFER,k),t.enableVertexAttribArray(D.positionLocation),t.vertexAttribPointer(D.positionLocation,2,t.FLOAT,!1,0,0),t.uniform1i(D.textureLocation,0),t.uniform2f(D.worldSizeLocation,n.width,n.height),t.drawArrays(t.TRIANGLES,0,6)};function Fe(e,t,r){function n(){const o=e.getElementById(t);o&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),o.width=r.width,o.height=r.height)}function a(){const o=e.getElementById(t);o&&(e.fullscreenElement||o.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&n()}),{enableFullscreen:a,disableFullscreen:n}}function Pe(e){const{worldDimensions:t}=e,r=t.width*t.height,n=new Array(r).fill(0).map((o,i)=>i),a=new Array(r).fill(0).map(o=>Math.random()<.5?1:0);return{ids:n,cells:a}}function Le(e){let t,r,n,a,o=e[1]?"Play":"Pause",i,l,s,u=e[0]?"Normal Speed":"Slow Mo",p,U,h,y,w=e[4].width+"",F,S,B=e[4].height+"",C,I,Y=e[4].width*e[4].height+"",X,O,G,b,M,z,x,W,$,K;return{c(){t=A("canvas"),r=P(),n=A("div"),a=A("button"),i=_(o),l=P(),s=A("button"),p=_(u),U=P(),h=A("span"),y=_("World "),F=_(w),S=_(" x "),C=_(B),I=_(" ("),X=_(Y),O=_(" cells)"),G=P(),b=A("button"),M=_("Reset"),z=P(),x=A("button"),W=_("Fullscreen"),this.h()},l(d){t=v(d,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(t).forEach(E),r=L(d),n=v(d,"DIV",{});var f=R(n);a=v(f,"BUTTON",{});var j=R(a);i=m(j,o),j.forEach(E),l=L(f),s=v(f,"BUTTON",{});var J=R(s);p=m(J,u),J.forEach(E),U=L(f),h=v(f,"SPAN",{});var T=R(h);y=m(T,"World "),F=m(T,w),S=m(T," x "),C=m(T,B),I=m(T," ("),X=m(T,Y),O=m(T," cells)"),T.forEach(E),G=L(f),b=v(f,"BUTTON",{});var Q=R(b);M=m(Q,"Reset"),Q.forEach(E),z=L(f),x=v(f,"BUTTON",{});var Z=R(x);W=m(Z,"Fullscreen"),Z.forEach(E),f.forEach(E),this.h()},h(){V(t,"id","canvas"),oe(t,"background-color","black"),V(t,"width",e[3].width),V(t,"height",e[3].height)},m(d,f){q(d,t,f),q(d,r,f),q(d,n,f),c(n,a),c(a,i),c(n,l),c(n,s),c(s,p),c(n,U),c(n,h),c(h,y),c(h,F),c(h,S),c(h,C),c(h,I),c(h,X),c(h,O),c(n,G),c(n,b),c(b,M),c(n,z),c(n,x),c(x,W),$||(K=[N(a,"click",e[6]),N(s,"click",e[7]),N(b,"click",e[8]),N(x,"click",function(){se(e[2])&&e[2].apply(this,arguments)})],$=!0)},p(d,[f]){e=d,f&2&&o!==(o=e[1]?"Play":"Pause")&&ee(i,o),f&1&&u!==(u=e[0]?"Normal Speed":"Slow Mo")&&ee(p,u)},i:H,o:H,d(d){d&&E(t),d&&E(r),d&&E(n),$=!1,ae(K)}}}function De(e,t,r){const n={width:300,height:300},a={width:10,height:10};let o=!1,i=!0,l,s;function u(){cancelAnimationFrame(s),l=me(),ve(l.canvas);const{cells:w}=Pe({worldDimensions:a});be(l);let F=Te(l,new Float32Array(w.map(B=>[B,0,0,0]).flat()),a.width,a.height);function S(){return xe({gl:l,cellsTex:F,worldDimensions:a}),s=requestAnimationFrame(S)}s=requestAnimationFrame(S)}let p;return ie(()=>{u(),r(2,p=Fe(document,"canvas",n).enableFullscreen),document.addEventListener("keydown",w=>{w.code==="Space"&&(r(1,i=!i),w.preventDefault())})}),[o,i,p,n,a,u,()=>r(1,i=!i),()=>r(0,o=!o),()=>u()]}class ge extends te{constructor(t){super(),ne(this,t,De,Le,re,{})}}function Ue(e){let t,r;return t=new ge({}),{c(){ce(t.$$.fragment)},l(n){le(t.$$.fragment,n)},m(n,a){ue(t,n,a),r=!0},p:H,i(n){r||(fe(t.$$.fragment,n),r=!0)},o(n){de(t.$$.fragment,n),r=!1},d(n){he(t,n)}}}class Be extends te{constructor(t){super(),ne(this,t,null,Ue,re,{})}}export{Be as default};
