import{S as Ye,i as Ke,s as qe,k as g,a as D,q as A,l as w,m as $,h as b,c as C,r as R,n as E,p as lo,b as y,D as f,O as pe,K as M,R as Bt,u as $e,P as _e,B as Y,M as Nt,o as fo,w as Le,x as Xe,y as De,f as q,t as Q,z as Ce,e as Co,g as Zo,d as jo,L as Gt,v as lt}from"../../../chunks/index-46ced799.js";import{T as an,a as un,b as Wt,c as Xt}from"../../../chunks/TabPanel-3f95d051.js";import{_ as Jo}from"../../../chunks/preload-helper-41c905a7.js";const sn=["VERTEX_SHADER","FRAGMENT_SHADER"];function cn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return ln(o),o}function ln(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Ot(e,o,n,r){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function dt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function kt(e,o,n,r,a){const i=[];for(let u=0;u<o.length;++u){const s=sn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=dn(e,o[u],s,a);if(!c)throw"Can not create shader";i.push(c)}const t=fn(e,i,n,r,a);if(!t)throw"Can not create program";return t}function dn(e,o,n,r){const a=r||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,o),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(i);return a(new Error("*** Error compiling shader '"+i+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(i),null}return i}function fn(e,o,n,r,a){const i=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,r?r[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return i("Error in program linking:"+s),e.deleteProgram(t),null}return t}function mn(e,o){o=o||1;const n=e.clientWidth*o|0,r=e.clientHeight*o|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const hn=`attribute vec2 a_position;
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

`,bn=`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texcoord;

void main() {
    float alive = texture2D(u_texture, v_texcoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`;let oo,to,_o;const pn=(e,o)=>{const{screenDimensions:n}=o,{height:r,width:a}=n;if(to=kt(e,[hn,bn]),oo={positionLocation:e.getAttribLocation(to,"a_position"),textureLocation:e.getUniformLocation(to,"u_texture"),worldSizeLocation:e.getUniformLocation(to,"u_worldSize")},_o=e.createBuffer(),!_o)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,_o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,r,a,0,a,0,0,r,a,r]),e.STATIC_DRAW)},xn=e=>{const{gl:o,cellsTex:n,worldDimensions:r}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(to),o.bindBuffer(o.ARRAY_BUFFER,_o),o.enableVertexAttribArray(oo.positionLocation),o.vertexAttribPointer(oo.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(oo.textureLocation,0),o.uniform2f(oo.worldSizeLocation,r.width,r.height),o.drawArrays(o.TRIANGLES,0,6)};function vn(e,o,n){function r(){const i=e.getElementById(o);i&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),i.width=n.width,i.height=n.height)}function a(){const i=e.getElementById(o);i&&(e.fullscreenElement||i.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:a,disableFullscreen:r}}function ft(e,o){const{worldDimensions:n}=o,r=n.width*n.height,a=new Array(r).fill(0).map(t=>Math.random()<.5?1:0);return{cellsTex:Ot(e,new Float32Array(a.map(t=>[t,0,0,0]).flat()),n.width,n.height)}}const _n=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Tn=`precision highp float;

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
`;let no,ro,Ho,ho,Go,mt,ht,io,To;const bt=(e,o)=>{const{cellsTex:n,texDimensions:r}=o;return ro=kt(e,[_n,Tn]),no={uInputTextureLocation:e.getUniformLocation(ro,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(ro,"uTextureSize"),positionLocation:e.getAttribLocation(ro,"aPosition")},Ho=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Ho),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),ho=n,Go=Ot(e,null,r.width,r.height),mt=dt(e,ho),ht=dt(e,Go),io={fb:mt,tex:ho},To={fb:ht,tex:Go},ho},gn=e=>{const{gl:o,worldDimensions:n,screenDimensions:r}=e;o.bindFramebuffer(o.FRAMEBUFFER,To.fb),o.viewport(0,0,r.width,r.height),o.bindBuffer(o.ARRAY_BUFFER,Ho),o.enableVertexAttribArray(no.positionLocation),o.vertexAttribPointer(no.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,io.tex),o.useProgram(ro),o.uniform1i(no.uInputTextureLocation,0),o.uniform2f(no.uTextureSizeLocation,n.width,n.height),o.drawArrays(o.TRIANGLES,0,6);{const a=io;io=To,To=a}return io.tex};function wn(e){let o,n,r,a,i=e[1]?"Play":"Pause",t,u,s,c,l,h,_=e[0].width+"",p,d,m=e[0].height+"",x,v,L=e[0].width*e[0].height+"",B,k,K,F,U,O,ee,te,ne,Z,j,ae,W,T,P,Te,ge,N,Oe,ue,se,ke,H,V,we;return{c(){o=g("canvas"),n=D(),r=g("div"),a=g("button"),t=A(i),u=A(" (Space)"),s=D(),c=g("div"),l=g("span"),h=A("World "),p=A(_),d=A(" x "),x=A(m),v=A(" ("),B=A(L),k=A(" cells)"),K=D(),F=g("button"),U=A("Reload program"),O=D(),ee=g("button"),te=A("Fullscreen (f)"),ne=D(),Z=g("div"),j=g("button"),ae=A("Reset world (r)"),W=D(),T=g("span"),P=g("label"),Te=A("World: width"),ge=D(),N=g("input"),Oe=D(),ue=g("label"),se=A("height"),ke=D(),H=g("input"),this.h()},l(S){o=w(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),$(o).forEach(b),n=C(S),r=w(S,"DIV",{});var G=$(r);a=w(G,"BUTTON",{});var ce=$(a);t=R(ce,i),u=R(ce," (Space)"),ce.forEach(b),G.forEach(b),s=C(S),c=w(S,"DIV",{});var le=$(c);l=w(le,"SPAN",{});var oe=$(l);h=R(oe,"World "),p=R(oe,_),d=R(oe," x "),x=R(oe,m),v=R(oe," ("),B=R(oe,L),k=R(oe," cells)"),oe.forEach(b),K=C(le),F=w(le,"BUTTON",{});var de=$(F);U=R(de,"Reload program"),de.forEach(b),O=C(le),ee=w(le,"BUTTON",{});var Ee=$(ee);te=R(Ee,"Fullscreen (f)"),Ee.forEach(b),le.forEach(b),ne=C(S),Z=w(S,"DIV",{});var Se=$(Z);j=w(Se,"BUTTON",{});var Ze=$(j);ae=R(Ze,"Reset world (r)"),Ze.forEach(b),W=C(Se),T=w(Se,"SPAN",{});var X=$(T);P=w(X,"LABEL",{for:!0});var je=$(P);Te=R(je,"World: width"),je.forEach(b),ge=C(X),N=w(X,"INPUT",{id:!0,type:!0,min:!0}),Oe=C(X),ue=w(X,"LABEL",{for:!0});var J=$(ue);se=R(J,"height"),J.forEach(b),ke=C(X),H=w(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(b),Se.forEach(b),this.h()},h(){E(o,"id","canvas"),lo(o,"background-color","black"),E(o,"width",e[3].width),E(o,"height",e[3].height),E(P,"for","worldWidth"),E(N,"id","worldWidth"),E(N,"type","number"),E(N,"min",0),E(ue,"for","worldHeight"),E(H,"id","worldHeight"),E(H,"type","number"),E(H,"min",0)},m(S,G){y(S,o,G),y(S,n,G),y(S,r,G),f(r,a),f(a,t),f(a,u),y(S,s,G),y(S,c,G),f(c,l),f(l,h),f(l,p),f(l,d),f(l,x),f(l,v),f(l,B),f(l,k),f(c,K),f(c,F),f(F,U),f(c,O),f(c,ee),f(ee,te),y(S,ne,G),y(S,Z,G),f(Z,j),f(j,ae),f(Z,W),f(Z,T),f(T,P),f(P,Te),f(T,ge),f(T,N),pe(N,e[0].width),f(T,Oe),f(T,ue),f(ue,se),f(T,ke),f(T,H),pe(H,e[0].height),V||(we=[M(a,"click",e[6]),M(F,"click",e[7]),M(ee,"click",function(){Bt(e[2])&&e[2].apply(this,arguments)}),M(j,"click",e[5]),M(N,"change",e[5]),M(N,"input",e[8]),M(H,"change",e[5]),M(H,"input",e[9])],V=!0)},p(S,[G]){e=S,G&2&&i!==(i=e[1]?"Play":"Pause")&&$e(t,i),G&1&&_!==(_=e[0].width+"")&&$e(p,_),G&1&&m!==(m=e[0].height+"")&&$e(x,m),G&1&&L!==(L=e[0].width*e[0].height+"")&&$e(B,L),G&1&&_e(N.value)!==e[0].width&&pe(N,e[0].width),G&1&&_e(H.value)!==e[0].height&&pe(H,e[0].height)},i:Y,o:Y,d(S){S&&b(o),S&&b(n),S&&b(r),S&&b(s),S&&b(c),S&&b(ne),S&&b(Z),V=!1,Nt(we)}}}function En(e,o,n){const r={width:1600,height:900},a={width:1600,height:900};let i=!0,t,u,s;function c(){cancelAnimationFrame(s),u=cn(),mn(u.canvas);const x=ft(u,{worldDimensions:a});t=bt(u,{cellsTex:x.cellsTex,texDimensions:a}),pn(u,{screenDimensions:r});function v(){return i||(t=gn({gl:u,worldDimensions:a,screenDimensions:r})),xn({gl:u,cellsTex:t,worldDimensions:a}),s=requestAnimationFrame(v)}s=requestAnimationFrame(v)}let l;fo(()=>{c(),n(2,l=vn(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",x=>{if(x.code==="Space"&&(n(1,i=!i),x.preventDefault()),x.code==="KeyF"){l();return}if(x.code==="KeyR"){h();return}})});const h=()=>{n(0,a.width=Math.min(a.width,r.width),a),n(0,a.height=Math.min(a.height,r.height),a);const x=ft(u,{worldDimensions:a});t=bt(u,{cellsTex:x.cellsTex,texDimensions:a})},_=()=>n(1,i=!i),p=()=>c();function d(){a.width=_e(this.value),n(0,a)}function m(){a.height=_e(this.value),n(0,a)}return[a,i,l,r,c,h,_,p,d,m]}let An=class extends Ye{constructor(o){super(),Ke(this,o,En,wn,qe,{})}};const Rn=["VERTEX_SHADER","FRAGMENT_SHADER"];function $n(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return Ln(o),o}function Ln(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Ht(e,o,n,r){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function pt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function Vt(e,o,n,r,a){const i=[];for(let u=0;u<o.length;++u){const s=Rn[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Dn(e,o[u],s,a);if(!c)throw"Can not create shader";i.push(c)}const t=Cn(e,i,n,r,a);if(!t)throw"Can not create program";return t}function Dn(e,o,n,r){const a=r||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,o),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(i);return a(new Error("*** Error compiling shader '"+i+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(i),null}return i}function Cn(e,o,n,r,a){const i=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,r?r[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return i("Error in program linking:"+s),e.deleteProgram(t),null}return t}function Sn(e,o){o=o||1;const n=e.clientWidth*o|0,r=e.clientHeight*o|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const yn=`precision mediump float;
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
`,Fn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,In=`precision mediump float;
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

`;let He,Ve,go;const zn=(e,o)=>{const{screenDimensions:n,mode:r}=o,{height:a,width:i}=n;let t=Fn;if(r==="gradiant"&&(t=In),Ve=Vt(e,[yn,t]),He={positionLocation:e.getAttribLocation(Ve,"a_position"),textureLocation:e.getUniformLocation(Ve,"u_texture"),worldSizeLocation:e.getUniformLocation(Ve,"u_worldSize"),zoomLocation:e.getUniformLocation(Ve,"u_zoom"),panLocation:e.getUniformLocation(Ve,"u_pan")},go=e.createBuffer(),!go)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,go),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,i,0,i,0,0,a,i,a]),e.STATIC_DRAW)},Pn=e=>{const{gl:o,cellsTex:n,worldDimensions:r,zoomLevel:a,pan:i}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(Ve),o.bindBuffer(o.ARRAY_BUFFER,go),o.enableVertexAttribArray(He.positionLocation),o.vertexAttribPointer(He.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(He.textureLocation,0),o.uniform2f(He.worldSizeLocation,r.width,r.height),o.uniform1f(He.zoomLocation,Math.max(a,1)),o.uniform2f(He.panLocation,i.x,i.y),o.drawArrays(o.TRIANGLES,0,6)};function Un(e,o,n){function r(){const i=e.getElementById(o);i&&(e.fullscreenElement&&e.exitFullscreen&&e.exitFullscreen(),i.width=n.width,i.height=n.height)}function a(){const i=e.getElementById(o);i&&(e.fullscreenElement||i.requestFullscreen())}return e.addEventListener("fullscreenchange",()=>{e.fullscreenElement===null&&r()}),{enableFullscreen:a,disableFullscreen:r}}function xt(e,o){const{worldDimensions:n,initialDensity:r,mode:a}=o;let i=r;i>1&&(i=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"&&(u=u.map(c=>Math.random()<i?1:0)),{cellsTex:Ht(e,new Float32Array(u.map((c,l)=>[c,l,0,0]).flat()),n.width,n.height)}}const Mn=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Bn=`precision highp float;

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
`;let ze,Pe,Vo,bo,Wo,vt,_t,ao,wo;const Tt=(e,o)=>{const{cellsTex:n,texDimensions:r}=o;return Pe=Vt(e,[Mn,Bn]),ze={uInputTextureLocation:e.getUniformLocation(Pe,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Pe,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Pe,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Pe,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Pe,"uInfiniteSource"),positionLocation:e.getAttribLocation(Pe,"aPosition")},Vo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Vo),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),bo=n,Wo=Ht(e,null,r.width,r.height),vt=pt(e,bo),_t=pt(e,Wo),ao={fb:vt,tex:bo},wo={fb:_t,tex:Wo},bo},Nn=e=>{const{gl:o,worldDimensions:n,screenDimensions:r,mouseCoordinates:a,mouseMode:i,infiniteSource:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,wo.fb),o.viewport(0,0,r.width,r.height),o.bindBuffer(o.ARRAY_BUFFER,Vo),o.enableVertexAttribArray(ze.positionLocation),o.vertexAttribPointer(ze.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,ao.tex),o.useProgram(Pe),o.uniform1i(ze.uInputTextureLocation,0),o.uniform2f(ze.uTextureSizeLocation,n.width,n.height),o.uniform2f(ze.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(ze.uMouseModeLocation,i),o.uniform1i(ze.uInfiniteSourceLocation,t?1:0),o.drawArrays(o.TRIANGLES,0,6);{const u=ao;ao=wo,wo=u}return ao.tex};function Gn(e){let o,n,r,a,i=e[5]?"Play":"Pause",t,u,s,c,l=e[2]?"Disable":"Enable",h,_,p,d,m,x,v,L,B,k,K,F,U,O,ee,te=e[0].width+"",ne,Z,j=e[0].height+"",ae,W,T=e[0].width*e[0].height+"",P,Te,ge,N,Oe,ue,se,ke,H,V,we,S,G,ce,le,oe,de,Ee,Se,Ze,X,je,J,Je,Fo,Io,re,zo,Qe,Po,Uo,ie,Mo,Qo;return{c(){o=g("canvas"),n=D(),r=g("div"),a=g("button"),t=A(i),u=A(" (Space)"),s=D(),c=g("button"),h=A(l),_=A(" constant cells generation (E)"),p=D(),d=g("button"),m=A("Zoom in (I)"),x=D(),v=g("button"),L=A("Zoom out (O)"),B=D(),k=g("button"),K=A("Reset zoom (Z)"),F=D(),U=g("div"),O=g("span"),ee=A("World "),ne=A(te),Z=A(" x "),ae=A(j),W=A(" ("),P=A(T),Te=A(" cells)"),ge=D(),N=g("button"),Oe=A("Reload program"),ue=D(),se=g("button"),ke=A("Fullscreen (f)"),H=D(),V=g("div"),we=g("button"),S=A("Reset world (R)"),G=D(),ce=g("button"),le=A("Empty world (E)"),oe=D(),de=g("span"),Ee=g("label"),Se=A("Initial density [0-1]"),Ze=D(),X=g("input"),je=D(),J=g("span"),Je=g("label"),Fo=A("World: width"),Io=D(),re=g("input"),zo=D(),Qe=g("label"),Po=A("height"),Uo=D(),ie=g("input"),this.h()},l(z){o=w(z,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),$(o).forEach(b),n=C(z),r=w(z,"DIV",{});var I=$(r);a=w(I,"BUTTON",{});var Bo=$(a);t=R(Bo,i),u=R(Bo," (Space)"),Bo.forEach(b),s=C(I),c=w(I,"BUTTON",{});var No=$(c);h=R(No,l),_=R(No," constant cells generation (E)"),No.forEach(b),p=C(I),d=w(I,"BUTTON",{});var et=$(d);m=R(et,"Zoom in (I)"),et.forEach(b),x=C(I),v=w(I,"BUTTON",{});var ot=$(v);L=R(ot,"Zoom out (O)"),ot.forEach(b),B=C(I),k=w(I,"BUTTON",{});var tt=$(k);K=R(tt,"Reset zoom (Z)"),tt.forEach(b),I.forEach(b),F=C(z),U=w(z,"DIV",{});var eo=$(U);O=w(eo,"SPAN",{});var ye=$(O);ee=R(ye,"World "),ne=R(ye,te),Z=R(ye," x "),ae=R(ye,j),W=R(ye," ("),P=R(ye,T),Te=R(ye," cells)"),ye.forEach(b),ge=C(eo),N=w(eo,"BUTTON",{});var nt=$(N);Oe=R(nt,"Reload program"),nt.forEach(b),ue=C(eo),se=w(eo,"BUTTON",{});var rt=$(se);ke=R(rt,"Fullscreen (f)"),rt.forEach(b),eo.forEach(b),H=C(z),V=w(z,"DIV",{});var Fe=$(V);we=w(Fe,"BUTTON",{});var it=$(we);S=R(it,"Reset world (R)"),it.forEach(b),G=C(Fe),ce=w(Fe,"BUTTON",{});var at=$(ce);le=R(at,"Empty world (E)"),at.forEach(b),oe=C(Fe),de=w(Fe,"SPAN",{});var mo=$(de);Ee=w(mo,"LABEL",{for:!0});var ut=$(Ee);Se=R(ut,"Initial density [0-1]"),ut.forEach(b),Ze=C(mo),X=w(mo,"INPUT",{id:!0,type:!0,min:!0,max:!0}),mo.forEach(b),je=C(Fe),J=w(Fe,"SPAN",{});var Ie=$(J);Je=w(Ie,"LABEL",{for:!0});var st=$(Je);Fo=R(st,"World: width"),st.forEach(b),Io=C(Ie),re=w(Ie,"INPUT",{id:!0,type:!0,min:!0}),zo=C(Ie),Qe=w(Ie,"LABEL",{for:!0});var ct=$(Qe);Po=R(ct,"height"),ct.forEach(b),Uo=C(Ie),ie=w(Ie,"INPUT",{id:!0,type:!0,min:!0}),Ie.forEach(b),Fe.forEach(b),this.h()},h(){E(o,"id","canvas"),lo(o,"background-color","black"),E(o,"width",e[7].width),E(o,"height",e[7].height),E(Ee,"for","initialDensity"),E(X,"id","initialDensity"),E(X,"type","number"),E(X,"min",0),E(X,"max",1),E(Je,"for","worldWidth"),E(re,"id","worldWidth"),E(re,"type","number"),E(re,"min",0),E(Qe,"for","worldHeight"),E(ie,"id","worldHeight"),E(ie,"type","number"),E(ie,"min",0)},m(z,I){y(z,o,I),y(z,n,I),y(z,r,I),f(r,a),f(a,t),f(a,u),f(r,s),f(r,c),f(c,h),f(c,_),f(r,p),f(r,d),f(d,m),f(r,x),f(r,v),f(v,L),f(r,B),f(r,k),f(k,K),y(z,F,I),y(z,U,I),f(U,O),f(O,ee),f(O,ne),f(O,Z),f(O,ae),f(O,W),f(O,P),f(O,Te),f(U,ge),f(U,N),f(N,Oe),f(U,ue),f(U,se),f(se,ke),y(z,H,I),y(z,V,I),f(V,we),f(we,S),f(V,G),f(V,ce),f(ce,le),f(V,oe),f(V,de),f(de,Ee),f(Ee,Se),f(de,Ze),f(de,X),pe(X,e[4]),f(V,je),f(V,J),f(J,Je),f(Je,Fo),f(J,Io),f(J,re),pe(re,e[0].width),f(J,zo),f(J,Qe),f(Qe,Po),f(J,Uo),f(J,ie),pe(ie,e[0].height),Mo||(Qo=[M(a,"click",e[10]),M(c,"click",e[11]),M(d,"click",e[12]),M(v,"click",e[13]),M(k,"click",e[14]),M(N,"click",e[15]),M(se,"click",function(){Bt(e[6])&&e[6].apply(this,arguments)}),M(we,"click",e[16]),M(ce,"click",e[17]),M(X,"input",e[18]),M(re,"change",e[19]),M(re,"input",e[20]),M(ie,"change",e[21]),M(ie,"input",e[22])],Mo=!0)},p(z,[I]){e=z,I&32&&i!==(i=e[5]?"Play":"Pause")&&$e(t,i),I&4&&l!==(l=e[2]?"Disable":"Enable")&&$e(h,l),I&1&&te!==(te=e[0].width+"")&&$e(ne,te),I&1&&j!==(j=e[0].height+"")&&$e(ae,j),I&1&&T!==(T=e[0].width*e[0].height+"")&&$e(P,T),I&16&&_e(X.value)!==e[4]&&pe(X,e[4]),I&1&&_e(re.value)!==e[0].width&&pe(re,e[0].width),I&1&&_e(ie.value)!==e[0].height&&pe(ie,e[0].height)},i:Y,o:Y,d(z){z&&b(o),z&&b(n),z&&b(r),z&&b(F),z&&b(U),z&&b(H),z&&b(V),Mo=!1,Nt(Qo)}}}function Wn(e,o,n){const r={width:1200,height:900},a={width:1200,height:900},i={x:-100,y:-100},t={x:0,y:0};let u=0,s=!0,c=1,l=.05,h=!0,_,p,d;function m(){cancelAnimationFrame(d),p=$n(),Sn(p.canvas);const W=xt(p,{mode:"random",worldDimensions:a,initialDensity:l});_=Tt(p,{cellsTex:W.cellsTex,texDimensions:a}),zn(p,{screenDimensions:r,mode:"gradiant"});function T(){h||(_=Nn({gl:p,worldDimensions:a,screenDimensions:r,mouseCoordinates:i,mouseMode:u,infiniteSource:s}));const P=.005;return i.x<.2&&t.x>=P&&n(1,t.x-=P,t),i.x>.8&&t.x<1-1/c&&n(1,t.x+=P,t),i.y<.2&&t.y>=P&&n(1,t.y-=P,t),i.y>.8&&t.y<1-1/c&&n(1,t.y+=P,t),Pn({gl:p,cellsTex:_,worldDimensions:a,zoomLevel:c,pan:t}),d=requestAnimationFrame(T)}d=requestAnimationFrame(T)}let x;fo(()=>{m(),n(6,x=Un(document,"canvas",r).enableFullscreen),document.addEventListener("keydown",T=>{if(T.code==="Space"&&(n(5,h=!h),T.preventDefault()),T.code==="KeyF"){x();return}if(T.code==="KeyR"){v("random");return}if(T.code==="KeyE"){v("zero");return}if(T.code==="KeyI"){n(3,c++,c);return}if(T.code==="KeyS"){n(2,s=!s);return}if(T.code==="KeyO"){n(3,c=Math.max(c-1,1)),c===1&&(n(1,t.x=0,t),n(1,t.y=0,t));return}if(T.code==="KeyZ"){n(3,c=1),n(1,t.x=0,t),n(1,t.y=0,t);return}});const W=document.getElementById("canvas");if(!W)throw new Error("Canvas unavailable");W.addEventListener("mousemove",T=>{const P=W.getBoundingClientRect(),Te=W.width/P.width,ge=W.height/P.height,N={x:(T.clientX-P.left)*Te,y:(T.clientY-P.top)*ge};i.x=N.x/r.width,i.y=N.y/r.height}),W.addEventListener("mousedown",T=>{T.preventDefault(),T.button===0?u=1:T.button===2&&(u=2)}),W.addEventListener("mouseup",T=>{T.preventDefault(),u=0}),W.addEventListener("contextmenu",T=>(T.preventDefault(),!1))});const v=W=>{n(0,a.width=Math.min(a.width,r.width),a),n(0,a.height=Math.min(a.height,r.height),a);const T=xt(p,{mode:W,worldDimensions:a,initialDensity:l});_=Tt(p,{cellsTex:T.cellsTex,texDimensions:a})},L=()=>n(5,h=!h),B=()=>n(2,s=!s),k=()=>n(3,c+=1),K=()=>{n(3,c=Math.max(c-1,1)),c===1&&(n(1,t.x=0,t),n(1,t.y=0,t))},F=()=>n(3,c=1),U=()=>m(),O=()=>v("random"),ee=()=>v("zero");function te(){l=_e(this.value),n(4,l)}const ne=()=>v("random");function Z(){a.width=_e(this.value),n(0,a)}const j=()=>v("random");function ae(){a.height=_e(this.value),n(0,a)}return[a,t,s,c,l,h,x,r,m,v,L,B,k,K,F,U,O,ee,te,ne,Z,j,ae]}let Xn=class extends Ye{constructor(o){super(),Ke(this,o,Wn,Gn,qe,{})}};const On=["VERTEX_SHADER","FRAGMENT_SHADER"];function kn(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return Hn(o),o}function Hn(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Yt(e,o,n,r){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function gt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function Kt(e,o,n,r,a){const i=[];for(let u=0;u<o.length;++u){const s=On[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Vn(e,o[u],s,a);if(!c)throw"Can not create shader";i.push(c)}const t=Yn(e,i,n,r,a);if(!t)throw"Can not create program";return t}function Vn(e,o,n,r){const a=r||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,o),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(i);return a(new Error("*** Error compiling shader '"+i+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(i),null}return i}function Yn(e,o,n,r,a){const i=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,r?r[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return i("Error in program linking:"+s),e.deleteProgram(t),null}return t}function Kn(e,o){o=o||1;const n=e.clientWidth*o|0,r=e.clientHeight*o|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}const qn=`precision mediump float;
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
`,Zn=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,jn=`precision mediump float;
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

`,Jn=`precision mediump float;
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

`;let Ue,Me,Eo;const wt=(e,o)=>{const{screenDimensions:n,mode:r}=o,{height:a,width:i}=n;let t=Zn;if(r==="gradiant"?t=jn:r==="age_gradiant"&&(t=Jn),Me=Kt(e,[qn,t]),Ue={positionLocation:e.getAttribLocation(Me,"a_position"),textureLocation:e.getUniformLocation(Me,"u_texture"),worldSizeLocation:e.getUniformLocation(Me,"u_worldSize"),zoomLocation:e.getUniformLocation(Me,"u_zoom"),panLocation:e.getUniformLocation(Me,"u_pan"),iterationLocation:e.getUniformLocation(Me,"u_iteration")},Eo=e.createBuffer(),!Eo)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Eo),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,i,0,i,0,0,a,i,a]),e.STATIC_DRAW)},Qn=e=>{const{gl:o,cellsTex:n,worldDimensions:r,zoomLevel:a,pan:i,iteration:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(Me),o.bindBuffer(o.ARRAY_BUFFER,Eo),o.enableVertexAttribArray(Ue.positionLocation),o.vertexAttribPointer(Ue.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(Ue.textureLocation,0),o.uniform2f(Ue.worldSizeLocation,r.width,r.height),o.uniform1f(Ue.zoomLocation,Math.max(a,1)),o.uniform2f(Ue.panLocation,i.x,i.y),o.uniform1f(Ue.iterationLocation,t),o.drawArrays(o.TRIANGLES,0,6)};function Et(e,o){const{worldDimensions:n,initialDensity:r,mode:a}=o;let i=r;i>1&&(i=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"&&(u=u.map(c=>Math.random()<i?1:0)),{cellsTex:Yt(e,new Float32Array(u.map((c,l)=>[c,l,0,0]).flat()),n.width,n.height)}}const er=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,or=`precision highp float;

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
`;let Ae,Re,Yo,po,Xo,At,Rt,uo,Ao;const $t=(e,o)=>{const{cellsTex:n,texDimensions:r}=o;return Re=Kt(e,[er,or]),Ae={uInputTextureLocation:e.getUniformLocation(Re,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(Re,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(Re,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(Re,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(Re,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(Re,"uIteration"),positionLocation:e.getAttribLocation(Re,"aPosition")},Yo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Yo),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),po=n,Xo=Yt(e,null,r.width,r.height),At=gt(e,po),Rt=gt(e,Xo),uo={fb:At,tex:po},Ao={fb:Rt,tex:Xo},po},tr=e=>{const{gl:o,worldDimensions:n,screenDimensions:r,mouseCoordinates:a,mouseMode:i,infiniteSource:t,iteration:u}=e;o.bindFramebuffer(o.FRAMEBUFFER,Ao.fb),o.viewport(0,0,r.width,r.height),o.bindBuffer(o.ARRAY_BUFFER,Yo),o.enableVertexAttribArray(Ae.positionLocation),o.vertexAttribPointer(Ae.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,uo.tex),o.useProgram(Re),o.uniform1i(Ae.uInputTextureLocation,0),o.uniform2f(Ae.uTextureSizeLocation,n.width,n.height),o.uniform2f(Ae.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(Ae.uMouseModeLocation,i),o.uniform1i(Ae.uInfiniteSourceLocation,t?1:0),o.uniform1f(Ae.uIterationLocation,u),o.drawArrays(o.TRIANGLES,0,6);{const s=uo;uo=Ao,Ao=s}return uo.tex};function nr(e){let o;return{c(){o=g("canvas"),this.h()},l(n){o=w(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),$(o).forEach(b),this.h()},h(){E(o,"id","canvas"),lo(o,"background-color","black"),E(o,"width",e[0].width),E(o,"height",e[0].height),E(o,"class","svelte-1b0ol19")},m(n,r){y(n,o,r)},p:Y,i:Y,o:Y,d(n){n&&b(o)}}}function rr(e){const o={x:0,y:0};let n=0,r,a;const i={width:window.innerWidth-50,height:window.innerHeight-10},t={x:0,y:0},u={Pause:!1,"Infinite source":!0,Iteration:0,TimeInSeconds:0,fps:0,"Draw mode":"age_gradiant","Reset grid":()=>p("random"),"Empty grid":()=>p("zero"),"Initial density":.05,"World width":i.width,"World height":i.height,Cells:(i.width*i.height).toString(),"Zoom level":1,"Pan reset":()=>{t.x=0,t.y=0},"Reload progam":()=>_()},s=async()=>{const d=await Jo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),m=new d.GUI;m.add(u,"Pause").listen(),m.add(u,"Infinite source").listen(),m.add(u,"TimeInSeconds").listen(),m.add(u,"Iteration").listen(),m.add(u,"fps").listen(),m.add(u,"Draw mode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).onFinishChange(()=>wt(c,{screenDimensions:i,mode:u["Draw mode"]})),m.add(u,"Reset grid"),m.add(u,"Empty grid"),m.add(u,"Initial density",0,1,.01).onFinishChange(()=>p("random")),m.add(u,"World width",1,i.width,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),p("random")}),m.add(u,"World height",1,i.height,1).onFinishChange(()=>{u.Cells=(u["World height"]*u["World width"]).toString(),p("random")}),m.add(u,"Cells").listen(),m.add(u,"Zoom level",1,10),m.add(u,"Pan reset"),m.add(u,"Reload progam")};let c,l,h;function _(){r=Date.now()/1e3,cancelAnimationFrame(h),c=kn(),Kn(c.canvas);const d=Et(c,{mode:"random",worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});l=$t(c,{cellsTex:d.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}}),wt(c,{screenDimensions:i,mode:u["Draw mode"]});function m(){if(!u.Pause){const v=Date.now()/1e3,L=v-a;u.fps=1/L,a=v,u.TimeInSeconds=v-r,u.Iteration++,l=tr({gl:c,worldDimensions:{width:u["World width"],height:u["World height"]},screenDimensions:i,mouseCoordinates:o,mouseMode:n,infiniteSource:u["Infinite source"],iteration:u.Iteration})}const x=.005;return o.x<.1&&t.x>=x&&(t.x-=x),o.x>.9&&t.x<1-1/u["Zoom level"]&&(t.x+=x),o.y<.1&&t.y>=x&&(t.y-=x),o.y>.9&&t.y<1-1/u["Zoom level"]&&(t.y+=x),Qn({gl:c,cellsTex:l,worldDimensions:{width:u["World width"],height:u["World height"]},zoomLevel:u["Zoom level"],pan:t,iteration:u.Iteration}),h=requestAnimationFrame(m)}h=requestAnimationFrame(m)}fo(()=>{_(),s(),document.addEventListener("keydown",m=>{if(m.code==="Space"&&(u.Pause=!u.Pause,m.preventDefault()),m.code==="KeyR"){p("random");return}if(m.code==="KeyE"){p("zero");return}if(m.code==="KeyS"){u["Infinite source"]=!u["Infinite source"];return}});const d=document.getElementById("canvas");if(!d)throw new Error("Canvas unavailable");d.addEventListener("mousemove",m=>{const x=d.getBoundingClientRect(),v=d.width/x.width,L=d.height/x.height,B={x:(m.clientX-x.left)*v,y:(m.clientY-x.top)*L};o.x=B.x/i.width,o.y=B.y/i.height}),d.addEventListener("mousedown",m=>{m.preventDefault(),m.button===0?n=1:m.button===2&&(n=2)}),d.addEventListener("mouseup",m=>{m.preventDefault(),n=0}),d.addEventListener("contextmenu",m=>(m.preventDefault(),!1))});const p=d=>{u.Iteration=0,u.TimeInSeconds=0;const m=Et(c,{mode:d,worldDimensions:{width:u["World width"],height:u["World height"]},initialDensity:u["Initial density"]});l=$t(c,{cellsTex:m.cellsTex,texDimensions:{width:u["World width"],height:u["World height"]}})};return[i]}let ir=class extends Ye{constructor(o){super(),Ke(this,o,rr,nr,qe,{})}};const ar=["VERTEX_SHADER","FRAGMENT_SHADER"];function ur(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return sr(o),o}function sr(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function qt(e,o,n,r){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function Lt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function Zt(e,o,n,r,a){const i=[];for(let u=0;u<o.length;++u){const s=ar[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=cr(e,o[u],s,a);if(!c)throw"Can not create shader";i.push(c)}const t=lr(e,i,n,r,a);if(!t)throw"Can not create program";return t}function cr(e,o,n,r){const a=r||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,o),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(i);return a(new Error("*** Error compiling shader '"+i+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(i),null}return i}function lr(e,o,n,r,a){const i=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,r?r[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return i("Error in program linking:"+s),e.deleteProgram(t),null}return t}function dr(e,o){o=o||1;const n=e.clientWidth*o|0,r=e.clientHeight*o|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}function jt(e,o){const{worldDimensions:n,initialDensity:r,mode:a}=o;let i=r;i>1&&(i=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"&&(u=u.map(c=>Math.random()<i?1:0)),{cellsTex:qt(e,new Float32Array(u.map((c,l)=>[c,l,0,0]).flat()),n.width,n.height)}}const fr=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,mr=`precision highp float;

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
`;let fe,me,Ko,xo,Oo,Dt,Ct,so,Ro;const Jt=(e,o)=>{const{cellsTex:n,texDimensions:r}=o;return me=Zt(e,[fr,mr]),fe={uInputTextureLocation:e.getUniformLocation(me,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(me,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(me,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(me,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(me,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(me,"uIteration"),uPauseLocation:e.getUniformLocation(me,"uPause"),positionLocation:e.getAttribLocation(me,"aPosition")},Ko=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Ko),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),xo=n,Oo=qt(e,null,r.width,r.height),Dt=Lt(e,xo),Ct=Lt(e,Oo),so={fb:Dt,tex:xo},Ro={fb:Ct,tex:Oo},xo},hr=e=>{const{gl:o,worldDimensions:n,screenDimensions:r,mouseCoordinates:a,mouseMode:i,infiniteSource:t,iteration:u,pause:s}=e;o.bindFramebuffer(o.FRAMEBUFFER,Ro.fb),o.viewport(0,0,r.width,r.height),o.bindBuffer(o.ARRAY_BUFFER,Ko),o.enableVertexAttribArray(fe.positionLocation),o.vertexAttribPointer(fe.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,so.tex),o.useProgram(me),o.uniform1i(fe.uInputTextureLocation,0),o.uniform2f(fe.uTextureSizeLocation,n.width,n.height),o.uniform2f(fe.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(fe.uMouseModeLocation,i),o.uniform1i(fe.uInfiniteSourceLocation,t?1:0),o.uniform1f(fe.uIterationLocation,u),o.uniform1i(fe.uPauseLocation,s?1:0),o.drawArrays(o.TRIANGLES,0,6);{const c=so;so=Ro,Ro=c}return so.tex},br=`precision mediump float;
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
`,pr=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,xr=`precision mediump float;
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

`,vr=`precision mediump float;
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

`;let Be,Ne,$o;const Qt=(e,o)=>{const{screenDimensions:n,mode:r}=o,{height:a,width:i}=n;let t=pr;if(r==="gradiant"?t=xr:r==="age_gradiant"&&(t=vr),Ne=Zt(e,[br,t]),Be={positionLocation:e.getAttribLocation(Ne,"a_position"),textureLocation:e.getUniformLocation(Ne,"u_texture"),worldSizeLocation:e.getUniformLocation(Ne,"u_worldSize"),zoomLocation:e.getUniformLocation(Ne,"u_zoom"),panLocation:e.getUniformLocation(Ne,"u_pan"),iterationLocation:e.getUniformLocation(Ne,"u_iteration")},$o=e.createBuffer(),!$o)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,$o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,i,0,i,0,0,a,i,a]),e.STATIC_DRAW)},_r=e=>{const{gl:o,cellsTex:n,worldDimensions:r,zoomLevel:a,pan:i,iteration:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(Ne),o.bindBuffer(o.ARRAY_BUFFER,$o),o.enableVertexAttribArray(Be.positionLocation),o.vertexAttribPointer(Be.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(Be.textureLocation,0),o.uniform2f(Be.worldSizeLocation,r.width,r.height),o.uniform1f(Be.zoomLocation,Math.max(a,1)),o.uniform2f(Be.panLocation,i.x,i.y),o.uniform1f(Be.iterationLocation,t),o.drawArrays(o.TRIANGLES,0,6)};let xe,So;function Tr(e){const{drawMode:o,initialDensity:n,screenDimensions:r,worldDimensions:a}=e;xe=ur(),dr(xe.canvas);const i=jt(xe,{mode:"random",worldDimensions:a,initialDensity:n});So=Jt(xe,{cellsTex:i.cellsTex,texDimensions:a}),Qt(xe,{screenDimensions:r,mode:o})}function gr(e){const{infiniteSource:o,iteration:n,mouseCoordinates:r,mouseMode:a,pause:i,pan:t,screenDimensions:u,worldDimensions:s,zoomLevel:c}=e;So=hr({gl:xe,worldDimensions:s,screenDimensions:u,mouseCoordinates:r,mouseMode:a,infiniteSource:o,iteration:n,pause:i}),_r({gl:xe,cellsTex:So,worldDimensions:s,zoomLevel:c,pan:t,iteration:n})}const wr=e=>{const{worldDimensions:o,mode:n,initialDensity:r}=e,a=jt(xe,{mode:n,worldDimensions:o,initialDensity:r});So=Jt(xe,{cellsTex:a.cellsTex,texDimensions:o})},Er=e=>{Qt(xe,{screenDimensions:e.screenDimensions,mode:e.drawMode})};function Ar(e){let o;return{c(){o=g("canvas"),this.h()},l(n){o=w(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),$(o).forEach(b),this.h()},h(){E(o,"id","canvas"),lo(o,"background-color","black"),E(o,"width",e[0].width),E(o,"height",e[0].height),E(o,"class","svelte-1b0ol19")},m(n,r){y(n,o,r)},p:Y,i:Y,o:Y,d(n){n&&b(o)}}}function Rr(e){const o={x:0,y:0};let n=0,r,a=0;const i={width:window.innerWidth-50,height:window.innerHeight-10},t={program:{pause:!1,infiniteSource:!0,drawMode:"age_gradiant",reloadProgram:()=>l()},simulation:{iteration:0,timeInSeconds:0,fps:0},grid:{resetGrid:()=>_("random"),emptyGrid:()=>_("zero"),initialDensity:.5,worldWidth:i.width,worldHeight:i.height,nbCells:(i.width*i.height).toString()},zoom:{x:0,y:0,xController:null,yController:null,level:1,previousLevel:1}},u=async()=>{const p=await Jo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),d=new p.GUI,m=d.addFolder("Program");m.open(),m.add(t.program,"pause").name("Pause").listen(),m.add(t.program,"infiniteSource").name("Infinite Source").listen(),m.add(t.program,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>Er({screenDimensions:i,drawMode:t.program.drawMode})),m.add(t.program,"reloadProgram").name("Reload program");const x=d.addFolder("Simulation");x.open(),x.add(t.simulation,"timeInSeconds").name("Time (s)").listen(),x.add(t.simulation,"iteration").name("Iteration").listen(),x.add(t.simulation,"fps").listen();const v=d.addFolder("Grid");v.open(),v.add(t.grid,"resetGrid").name("Reset grid"),v.add(t.grid,"emptyGrid").name("Empty grid"),v.add(t.grid,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>_("random")),v.add(t.grid,"worldWidth",1,i.width,1).name("World width").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),v.add(t.grid,"worldHeight",1,i.height,1).name("World height").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),v.add(t.grid,"nbCells").name("Cells count").listen();const L=d.addFolder("Zoom");L.open(),L.add(t.zoom,"level",1,10).name("Level").onChange(function(B){const k=B-t.zoom.previousLevel;if(!t.zoom.xController||!t.zoom.yController||k===0)return;const K=1-1/t.zoom.previousLevel,F=1-1/B;t.zoom.xController.max(F),t.zoom.xController.min(0),t.zoom.yController.max(F),t.zoom.yController.min(0);const U={x:t.zoom.x/K,y:t.zoom.y/K};t.zoom.x=F*U.x||F/2,t.zoom.y=F*U.y||F/2,t.zoom.previousLevel=B}),t.zoom.xController=L.add(t.zoom,"x",0,0,.01).name("X offset").listen(),t.zoom.yController=L.add(t.zoom,"y",0,0,.01).name("Y offset").listen()},s=()=>{document.addEventListener("keydown",d=>{if(d.code==="Space"&&(t.program.pause=!t.program.pause,d.preventDefault()),d.code==="KeyR"){_("random");return}if(d.code==="KeyE"){_("zero");return}if(d.code==="KeyS"){t.program.infiniteSource=!t.program.infiniteSource;return}});const p=document.getElementById("canvas");if(!p)throw new Error("Canvas unavailable");p.addEventListener("mousemove",d=>{const m=p.getBoundingClientRect(),x=p.width/m.width,v=p.height/m.height,L={x:(d.clientX-m.left)*x,y:(d.clientY-m.top)*v};o.x=L.x/i.width,o.y=L.y/i.height}),setInterval(()=>{o.x<.1&&t.zoom.x>=.005&&(t.zoom.x-=.005),o.x>.9&&t.zoom.x<1-1/t.zoom.level&&(t.zoom.x+=.005),o.y<.1&&t.zoom.y>=.005&&(t.zoom.y-=.005),o.y>.9&&t.zoom.y<1-1/t.zoom.level&&(t.zoom.y+=.005)},50),p.addEventListener("mousedown",d=>{d.preventDefault(),d.button===0?n=1:d.button===2&&(n=2)}),p.addEventListener("mouseup",d=>{d.preventDefault(),n=0}),p.addEventListener("contextmenu",d=>(d.preventDefault(),!1))};let c;const l=()=>{Tr({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},screenDimensions:i,drawMode:t.program.drawMode}),cancelAnimationFrame(c),r=Date.now()/1e3,h()},h=()=>{const p=Date.now()/1e3,d=p-a;a=p,t.simulation.fps=1/d,t.program.pause||(t.simulation.timeInSeconds=p-r,t.simulation.iteration++),gr({infiniteSource:t.program.infiniteSource,iteration:t.simulation.iteration,mouseCoordinates:o,mouseMode:n,pause:t.program.pause,pan:{x:t.zoom.x,y:t.zoom.y},screenDimensions:i,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},zoomLevel:t.zoom.level}),c=requestAnimationFrame(h)},_=p=>{t.simulation.iteration=0,t.simulation.timeInSeconds=0,wr({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},mode:p})};return fo(()=>{u(),s(),l()}),[i]}let $r=class extends Ye{constructor(o){super(),Ke(this,o,Rr,Ar,qe,{})}};const Lr=e=>e.split("").reduce((o,n)=>o.length===0?(o.push(n),o):(n.match(/\d/)&&o[o.length-1]?.match(/\d/)?o[o.length-1]=o[o.length-1]+n:o.push(n),o),[]),Dr=e=>{const o=[];if(!e.length)throw new Error("No line items to tokenize");let n={};for(let r=0;r<e.length;r++){const a=e[r],i=a.match(/^\d+$/);if(!i&&!["o","b","$","!"].includes(a))throw new Error(`Invalid configuration item ${a}`);if(i){if(n.count)throw new Error(`Invalid configuration. Two consecutive numbers ${n.count}, ${a}`);n.count=Number(a)}else{if(n.tag)throw new Error(`Invalid configuration. Something went wrong with tokenization at item ${a}, index ${r}`);if(n.count||(n.count=1),a==="!")return o;n.tag=a,o.push(n),n={}}}throw new Error("Invalid configuration. No ending character")},Cr=e=>{const{properties:o,tokens:n}=e,r=[[]];for(;n.length;){const{count:a,tag:i}=n.shift();if(i==="!")throw new Error("Invalid token. ! should not have been sent here");if(i==="$"){for(let t=0;t<a;t++)if(r.push([]),r.length>o.y)throw new Error("Invalid token. Vertical dimensions mismatch")}else for(let t=0;t<a;t++)r[r.length-1].push(i==="b"?0:1)}for(;r.length<o.y;)r.push(new Array(o.x).fill(0));for(let a=0;a<r.length;a++)for(;r[a].length<o.x;)r[a].push(0);return r},Sr=e=>{const o=e.replaceAll(" ","").split(",").reduce((n,r)=>{const[a,i]=r.split("=");return i.match(/^\d+$/)?n[a]=Number(i):n[a]=i,n},{x:0,y:0});if(!o.x||!o.y)throw new Error("Invalid pattern file: no dimensions");return o},yr=e=>{const o=e.replaceAll(`\r
`,`
`).split(`
`).filter(s=>s!=="").filter(s=>!s.match(/^#/)),n=o.shift(),r=o.join("");if(!n||!o)throw new Error("Invalid pattern file");const a=Sr(n),i=Lr(r),t=Dr(i),u=Cr({properties:a,tokens:t});return{width:a.x,height:a.y,pattern:u}},Fr=`#N Glider\r
#O Richard K. Guy\r
#C The smallest, most common, and first discovered spaceship. Diagonal, has period 4 and speed c/4.\r
#C www.conwaylife.com/wiki/index.php?title=Glider\r
x = 3, y = 3, rule = B3/S23\r
bob$2bo$3o!`,Ir=`#N Laputa\r
#O Rich Schroeppel\r
#C A period 2 oscillator found in September 1992.\r
#C www.conwaylife.com/wiki/index.php?title=Laputa\r
x = 12, y = 7, rule = B3/S23\r
3b2ob2o4b$\r
3b2obo3b2o$\r
8bo2bo$\r
b6ob3ob$\r
o2bobo6b$\r
2o3bob2o3b$\r
4b2ob2o!\r
`,zr=`#N Glider loop\r
#C A pattern in which two gliders are bounced back and forth along an \r
#C ever-lengthening track.\r
#C www.conwaylife.com/wiki/index.php?title=Glider_loop\r
x = 73, y = 150, rule = b3/s23\r
45bo27b$37b3o5bo27b$36bo2b2o3bobo26b$35bo5bo3bo27b$41bo3bo27b$36b2o2bo\r
32b$25b2o11b2o33b$25b2o46b6$61bo11b$17b2o40b2ob2o9b$17b2o42bo11b3$59b\r
2o12b$58bo2bo11b$51bo5bo3b2o10b$51bo5bo4bo10b$9b2o40bo6bo3bo10b$9b2o\r
37bob3obo3bo2bo11b$48b5obo5bo12b$48bobo22b$52b2o17bob$52b2o9b3o5bob$\r
52bo9bo2b2o3bobo$51b2o8bo5bo3bob$46b2o3bo15bo3bob$17b3o31bo10b2o2bo6b$\r
20bo29b2obo10b2o7b$15b2o4bo30bo20b$18bo3bo50b$14bo4bo2bo50b$14bo3bo3bo\r
50b$14b3obob2o51b$18bo54b$14b4o7b3o45b$14b2o8bo3bo44b$24bo4bo28bo14b$\r
26bo3bo25b2o9b2o4b$23b3obo2bo24b2o8b3obo3b$22bo7bo23bo10bo3bo3b$22bobo\r
3bo26b5o5bob2o4b$21b2obo3bo27bo10bo5b$21b2ob3o46b5$63b2o8b$63b2o8b4$\r
43b3o27b$46bo26b$41b2o4bo25b$44bo3bo6b2o16b$40bo4bo2bo6b2o16b$40bo3bo\r
3bo24b$40b3obob2o25b$44bo28b$40b4o29b$40b2o31b2$47b2o24b$47b2o24b2$33b\r
o39b$33bobo37b$33b2o38b3$38b2o33b$37bobo33b$39bo33b2$24b2o47b$24b2o47b\r
2$31b2o40b$29b4o40b$28bo44b$25b2obob3o40b$24bo3bo3bo40b$16b2o6bo2bo4bo\r
40b$16b2o6bo3bo44b$25bo4b2o41b$26bo46b$27b3o43b4$8b2o63b$8b2o63b5$46b\r
3ob2o21b$5bo10bo27bo3bob2o21b$4b2obo5b5o26bo3bobo22b$3bo3bo10bo23bo7bo\r
22b$3bob3o8b2o24bo2bob3o23b$4b2o9b2o25bo3bo26b$14bo28bo4bo24b$44bo3bo\r
8b2o14b$45b3o7b4o14b$54bo18b$51b2obob3o14b$50bo3bo3bo14b$50bo2bo4bo14b\r
$50bo3bo18b$20bo30bo4b2o15b$7b2o10bob2o29bo20b$6bo2b2o10bo31b3o17b$bo\r
3bo15bo3b2o46b$bo3bo5bo8b2o51b$obo3b2o2bo9bo52b$bo5b3o9b2o52b$bo17b2o\r
52b$22bobo48b$12bo5bob5o48b$11bo2bo3bob3obo37b2o9b$10bo3bo6bo40b2o9b$\r
10bo4bo5bo51b$10b2o3bo5bo51b$11bo2bo58b$12b2o59b3$11bo42b2o17b$9b2ob2o\r
40b2o17b$11bo61b6$46b2o25b$33b2o11b2o25b$32bo2b2o36b$27bo3bo41b$27bo3b\r
o5bo35b$26bobo3b2o2bo36b$27bo5b3o37b$27bo!`,Pr=`#N 131c31climber.rle\r
#C https://conwaylife.com/wiki/(13,1)c/31_Pseudo-B_climber\r
#C https://www.conwaylife.com/patterns/131c31climber.rle\r
x = 37, y = 108, rule = B3/S23\r
o$b2o$2o19$8bo$6bobo$7b2o19$13bobo$14b2o$14bo17$24bo$23b3o$23bob2o$24b\r
o2bo$25b2o$25bo2$22b2o$21bo2$20bobo2bo$20bob3obo$19b3ob2obo$20bobo$20b\r
3o$21bo8$29bo$27bobo$28b2o19$34bobo$35b2o$35bo!`,St={glider:Fr,laputa:Ir,gliderLoop:zr,climber131c31:Pr},Ur=e=>{if(!St[e])throw new Error(`Invalid configuration name ${e}`);return yr(St[e])},Mr=["VERTEX_SHADER","FRAGMENT_SHADER"];function Br(){const e=document.getElementById("canvas");if(!e)throw"canvas undefined";const o=e.getContext("webgl");if(!o)throw"gl undefined";return Nr(o),o}function Nr(e){if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function en(e,o,n,r){const a=e.createTexture();if(!a)throw"Can not create texture";return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,r,0,e.RGBA,e.FLOAT,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a}function yt(e,o){const n=e.createFramebuffer();if(!n)throw"Can not create frame buffer";return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),n}function on(e,o,n,r,a){const i=[];for(let u=0;u<o.length;++u){const s=Mr[u]==="VERTEX_SHADER"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,c=Gr(e,o[u],s,a);if(!c)throw"Can not create shader";i.push(c)}const t=Wr(e,i,n,r,a);if(!t)throw"Can not create program";return t}function Gr(e,o,n,r){const a=r||console.log,i=e.createShader(n);if(!i)throw"Could not load shader";if(e.shaderSource(i,o),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(i);return a(new Error("*** Error compiling shader '"+i+"':"+u+`
`+o.split(`
`).map((s,c)=>`${c+1}: ${s}`).join(`
`))),e.deleteShader(i),null}return i}function Wr(e,o,n,r,a){const i=a||console.log,t=e.createProgram();if(!t)throw"Could not create program";if(o.forEach(function(s){e.attachShader(t,s)}),n&&n.forEach(function(s,c){e.bindAttribLocation(t,r?r[c]:c,s)}),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){const s=e.getProgramInfoLog(t);return i("Error in program linking:"+s),e.deleteProgram(t),null}return t}function Xr(e,o){o=o||1;const n=e.clientWidth*o|0,r=e.clientHeight*o|0;return e.width!==n||e.height!==r?(e.width=n,e.height=r,!0):!1}function tn(e,o){const{worldDimensions:n,initialDensity:r,configuration:a}=o;let i=r;i>1&&(i=1);const t=n.width*n.height;let u=new Array(t).fill(0);return a==="random"?u=u.map(c=>Math.random()<i?1:0):a!=="empty"&&(u=Or({cells:u,insertPosition:{x:Math.floor(n.width/2),y:Math.floor(n.height/2)},worldDimensions:n,configurationName:a})),{cellsTex:en(e,new Float32Array(u.map((c,l)=>[c,l,0,0]).flat()),n.width,n.height)}}const Or=e=>{const{cells:o,insertPosition:n,worldDimensions:r,configurationName:a}=e,i=Ur(a);if(r.width<i.width||r.height<i.height)throw new Error("World is too small for this configuration");if(n.x+i.width>r.width||n.y+i.height>r.height)throw new Error("Configuration can be imported at this point");for(let t=0;t<i.height;t++)for(let u=0;u<i.width;u++){const s=(n.y+t)*r.width+(n.x+u);o[s]=i.pattern[t][u]}return o},kr=` attribute vec2 aPosition;

 void main() {
   gl_Position = vec4(aPosition, 0.0, 1.0);
 }
`,Hr=`precision highp float;

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
`;let he,be,qo,vo,ko,Ft,It,co,Lo;const nn=(e,o)=>{const{cellsTex:n,texDimensions:r}=o;return be=on(e,[kr,Hr]),he={uInputTextureLocation:e.getUniformLocation(be,"uInputTexture"),uTextureSizeLocation:e.getUniformLocation(be,"uTextureSize"),uMouseCoordinatesLocation:e.getUniformLocation(be,"uMouseCoordinates"),uMouseModeLocation:e.getUniformLocation(be,"uMouseMode"),uInfiniteSourceLocation:e.getUniformLocation(be,"uInfiniteSource"),uIterationLocation:e.getUniformLocation(be,"uIteration"),uPauseLocation:e.getUniformLocation(be,"uPause"),positionLocation:e.getAttribLocation(be,"aPosition")},qo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,qo),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),vo=n,ko=en(e,null,r.width,r.height),Ft=yt(e,vo),It=yt(e,ko),co={fb:Ft,tex:vo},Lo={fb:It,tex:ko},vo},Vr=e=>{const{gl:o,worldDimensions:n,screenDimensions:r,mouseCoordinates:a,mouseMode:i,infiniteSource:t,iteration:u,pause:s}=e;o.bindFramebuffer(o.FRAMEBUFFER,Lo.fb),o.viewport(0,0,r.width,r.height),o.bindBuffer(o.ARRAY_BUFFER,qo),o.enableVertexAttribArray(he.positionLocation),o.vertexAttribPointer(he.positionLocation,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,co.tex),o.useProgram(be),o.uniform1i(he.uInputTextureLocation,0),o.uniform2f(he.uTextureSizeLocation,n.width,n.height),o.uniform2f(he.uMouseCoordinatesLocation,a.x,a.y),o.uniform1i(he.uMouseModeLocation,i),o.uniform1i(he.uInfiniteSourceLocation,t?1:0),o.uniform1f(he.uIterationLocation,u),o.uniform1i(he.uPauseLocation,s?1:0),o.drawArrays(o.TRIANGLES,0,6);{const c=co;co=Lo,Lo=c}return co.tex},Yr=`precision mediump float;
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
`,Kr=`precision mediump float;
uniform sampler2D u_texture;
uniform float u_zoom;
uniform vec2 u_pan;

varying vec2 v_texcoord;

void main() {
    vec2 texCoord = (v_texcoord / u_zoom) + u_pan;

    float alive = texture2D(u_texture, texCoord).x;
    gl_FragColor = vec4(alive, alive, alive, 1.0);
}
`,qr=`precision mediump float;
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

`,Zr=`precision mediump float;
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

`;let Ge,We,Do;const rn=(e,o)=>{const{screenDimensions:n,mode:r}=o,{height:a,width:i}=n;let t=Kr;if(r==="gradiant"?t=qr:r==="age_gradiant"&&(t=Zr),We=on(e,[Yr,t]),Ge={positionLocation:e.getAttribLocation(We,"a_position"),textureLocation:e.getUniformLocation(We,"u_texture"),worldSizeLocation:e.getUniformLocation(We,"u_worldSize"),zoomLocation:e.getUniformLocation(We,"u_zoom"),panLocation:e.getUniformLocation(We,"u_pan"),iterationLocation:e.getUniformLocation(We,"u_iteration")},Do=e.createBuffer(),!Do)throw new Error("cant create buffer");e.bindBuffer(e.ARRAY_BUFFER,Do),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,0,a,i,0,i,0,0,a,i,a]),e.STATIC_DRAW)},jr=e=>{const{gl:o,cellsTex:n,worldDimensions:r,zoomLevel:a,pan:i,iteration:t}=e;o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,n),o.useProgram(We),o.bindBuffer(o.ARRAY_BUFFER,Do),o.enableVertexAttribArray(Ge.positionLocation),o.vertexAttribPointer(Ge.positionLocation,2,o.FLOAT,!1,0,0),o.uniform1i(Ge.textureLocation,0),o.uniform2f(Ge.worldSizeLocation,r.width,r.height),o.uniform1f(Ge.zoomLocation,Math.max(a,1)),o.uniform2f(Ge.panLocation,i.x,i.y),o.uniform1f(Ge.iterationLocation,t),o.drawArrays(o.TRIANGLES,0,6)};let ve,yo;function Jr(e){const{drawMode:o,initialDensity:n,screenDimensions:r,worldDimensions:a}=e;ve=Br(),Xr(ve.canvas);const i=tn(ve,{configuration:"random",worldDimensions:a,initialDensity:n});yo=nn(ve,{cellsTex:i.cellsTex,texDimensions:a}),rn(ve,{screenDimensions:r,mode:o})}function Qr(e){const{infiniteSource:o,iteration:n,mouseCoordinates:r,mouseMode:a,pause:i,pan:t,screenDimensions:u,worldDimensions:s,zoomLevel:c}=e;yo=Vr({gl:ve,worldDimensions:s,screenDimensions:u,mouseCoordinates:r,mouseMode:a,infiniteSource:o,iteration:n,pause:i}),jr({gl:ve,cellsTex:yo,worldDimensions:s,zoomLevel:c,pan:t,iteration:n})}const ei=e=>{const{worldDimensions:o,configuration:n,initialDensity:r}=e,a=tn(ve,{configuration:n,worldDimensions:o,initialDensity:r});yo=nn(ve,{cellsTex:a.cellsTex,texDimensions:o})},oi=e=>{rn(ve,{screenDimensions:e.screenDimensions,mode:e.drawMode})};function ti(e){let o;return{c(){o=g("canvas"),this.h()},l(n){o=w(n,"CANVAS",{id:!0,style:!0,width:!0,height:!0,class:!0}),$(o).forEach(b),this.h()},h(){E(o,"id","canvas"),lo(o,"background-color","black"),E(o,"width",e[0].width),E(o,"height",e[0].height),E(o,"class","svelte-1b0ol19")},m(n,r){y(n,o,r)},p:Y,i:Y,o:Y,d(n){n&&b(o)}}}function ni(e){const o={x:0,y:0};let n=0,r,a=0;const i={width:window.innerWidth-50,height:window.innerHeight-10},t={program:{pause:!0,infiniteSource:!1,drawMode:"age_gradiant",reloadProgram:()=>l()},simulation:{iteration:0,timeInSeconds:0,fps:0},grid:{configName:"random",initialDensity:.5,worldWidth:i.width,worldHeight:i.height,nbCells:(i.width*i.height).toString()},zoom:{x:0,y:0,xController:null,yController:null,level:1,previousLevel:1}},u=async()=>{const p=await Jo(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url),d=new p.GUI;d.domElement.setAttribute("style","background-color: black");const m=d.addFolder("Program");m.open(),m.add(t.program,"pause").name("Pause").listen(),m.add(t.program,"infiniteSource").name("Infinite Source").listen(),m.add(t.program,"drawMode",{White:"white","Age Gradiant":"age_gradiant","Position Gradiant":"gradiant"}).name("Drawing mode").onFinishChange(()=>oi({screenDimensions:i,drawMode:t.program.drawMode})),m.add(t.program,"reloadProgram").name("Reload program");const x=d.addFolder("Simulation");x.open(),x.add(t.simulation,"timeInSeconds").name("Time (s)").listen(),x.add(t.simulation,"iteration").name("Iteration").listen(),x.add(t.simulation,"fps").listen();const v=d.addFolder("Grid");v.open(),v.add(t.grid,"configName",{Random:"random",Empty:"empty",Glider:"glider",Laputa:"laputa","Glider loop":"gliderLoop","131c31 Climber":"climber131c31"}).name("Configuration").onFinishChange(()=>_(t.grid.configName)),v.add(t.grid,"initialDensity",0,1,.01).name("Initial density").onFinishChange(()=>_("random")),v.add(t.grid,"worldWidth",1,i.width,1).name("World width").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),v.add(t.grid,"worldHeight",1,i.height,1).name("World height").onFinishChange(()=>{t.grid.nbCells=(t.grid.worldHeight*t.grid.worldWidth).toString(),_("random")}),v.add(t.grid,"nbCells").name("Cells count").listen();const L=d.addFolder("Zoom");L.open(),L.add(t.zoom,"level",1,10).name("Level").onChange(function(B){const k=B-t.zoom.previousLevel;if(!t.zoom.xController||!t.zoom.yController||k===0)return;const K=1-1/t.zoom.previousLevel,F=1-1/B;t.zoom.xController.max(F),t.zoom.xController.min(0),t.zoom.yController.max(F),t.zoom.yController.min(0);const U={x:t.zoom.x/K,y:t.zoom.y/K};t.zoom.x=F*U.x||F/2,t.zoom.y=F*U.y||F/2,t.zoom.previousLevel=B}),t.zoom.xController=L.add(t.zoom,"x",0,0,.01).name("X offset").listen(),t.zoom.yController=L.add(t.zoom,"y",0,0,.01).name("Y offset").listen()},s=()=>{document.addEventListener("keydown",d=>{if(d.code==="Space"&&(t.program.pause=!t.program.pause,d.preventDefault()),d.code==="KeyR"){_("random");return}if(d.code==="KeyE"){_("empty");return}if(d.code==="KeyS"){t.program.infiniteSource=!t.program.infiniteSource;return}});const p=document.getElementById("canvas");if(!p)throw new Error("Canvas unavailable");p.addEventListener("mousemove",d=>{const m=p.getBoundingClientRect(),x=p.width/m.width,v=p.height/m.height,L={x:(d.clientX-m.left)*x,y:(d.clientY-m.top)*v};o.x=L.x/i.width,o.y=L.y/i.height}),setInterval(()=>{o.x<.1&&t.zoom.x>=.005&&(t.zoom.x-=.005),o.x>.9&&t.zoom.x<1-1/t.zoom.level&&(t.zoom.x+=.005),o.y<.1&&t.zoom.y>=.005&&(t.zoom.y-=.005),o.y>.9&&t.zoom.y<1-1/t.zoom.level&&(t.zoom.y+=.005)},50),p.addEventListener("mousedown",d=>{d.preventDefault(),d.button===0?n=1:d.button===2&&(n=2)}),p.addEventListener("mouseup",d=>{d.preventDefault(),n=0}),p.addEventListener("contextmenu",d=>(d.preventDefault(),!1))};let c;const l=()=>{Jr({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},screenDimensions:i,drawMode:t.program.drawMode}),cancelAnimationFrame(c),r=Date.now()/1e3,h()},h=()=>{const p=Date.now()/1e3,d=p-a;a=p,t.simulation.fps=1/d,t.program.pause||(t.simulation.timeInSeconds=p-r,t.simulation.iteration++),Qr({infiniteSource:t.program.infiniteSource,iteration:t.simulation.iteration,mouseCoordinates:o,mouseMode:n,pause:t.program.pause,pan:{x:t.zoom.x,y:t.zoom.y},screenDimensions:i,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},zoomLevel:t.zoom.level}),c=requestAnimationFrame(h)},_=p=>{t.simulation.iteration=0,t.simulation.timeInSeconds=0,ei({initialDensity:t.grid.initialDensity,worldDimensions:{width:t.grid.worldWidth,height:t.grid.worldHeight},configuration:p})};return fo(()=>{u(),s(),l()}),[i]}class ri extends Ye{constructor(o){super(),Ke(this,o,ni,ti,qe,{})}}function zt(e,o,n){const r=e.slice();return r[1]=o[n],r}function Pt(e,o,n){const r=e.slice();return r[1]=o[n],r}function ii(e){let o;return{c(){o=A("About")},l(n){o=R(n,"About")},m(n,r){y(n,o,r)},d(n){n&&b(o)}}}function ai(e){let o=e[1].title+"",n;return{c(){n=A(o)},l(r){n=R(r,o)},m(r,a){y(r,n,a)},p:Y,d(r){r&&b(n)}}}function Ut(e){let o,n;return o=new Xt({props:{$$slots:{default:[ai]},$$scope:{ctx:e}}}),{c(){Le(o.$$.fragment)},l(r){Xe(o.$$.fragment,r)},m(r,a){De(o,r,a),n=!0},p(r,a){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),o.$set(i)},i(r){n||(q(o.$$.fragment,r),n=!0)},o(r){Q(o.$$.fragment,r),n=!1},d(r){Ce(o,r)}}}function ui(e){let o,n,r,a;o=new Xt({props:{$$slots:{default:[ii]},$$scope:{ctx:e}}});let i=e[0],t=[];for(let s=0;s<i.length;s+=1)t[s]=Ut(Pt(e,i,s));const u=s=>Q(t[s],1,1,()=>{t[s]=null});return{c(){Le(o.$$.fragment),n=D();for(let s=0;s<t.length;s+=1)t[s].c();r=Co()},l(s){Xe(o.$$.fragment,s),n=C(s);for(let c=0;c<t.length;c+=1)t[c].l(s);r=Co()},m(s,c){De(o,s,c),y(s,n,c);for(let l=0;l<t.length;l+=1)t[l].m(s,c);y(s,r,c),a=!0},p(s,c){const l={};if(c&64&&(l.$$scope={dirty:c,ctx:s}),o.$set(l),c&1){i=s[0];let h;for(h=0;h<i.length;h+=1){const _=Pt(s,i,h);t[h]?(t[h].p(_,c),q(t[h],1)):(t[h]=Ut(_),t[h].c(),q(t[h],1),t[h].m(r.parentNode,r))}for(Zo(),h=i.length;h<t.length;h+=1)u(h);jo()}},i(s){if(!a){q(o.$$.fragment,s);for(let c=0;c<i.length;c+=1)q(t[c]);a=!0}},o(s){Q(o.$$.fragment,s),t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)Q(t[c]);a=!1},d(s){Ce(o,s),s&&b(n),Gt(t,s),s&&b(r)}}}function si(e){let o,n,r,a,i,t,u;return{c(){o=g("p"),n=A("Experiments running Conway's Game of Life in WebGL shaders."),r=D(),a=g("p"),i=A("List of patterns available "),t=g("a"),u=A("in the wiki"),this.h()},l(s){o=w(s,"P",{});var c=$(o);n=R(c,"Experiments running Conway's Game of Life in WebGL shaders."),c.forEach(b),r=C(s),a=w(s,"P",{});var l=$(a);i=R(l,"List of patterns available "),t=w(l,"A",{target:!0,href:!0});var h=$(t);u=R(h,"in the wiki"),h.forEach(b),l.forEach(b),this.h()},h(){E(t,"target","none"),E(t,"href","https://conwaylife.com/wiki/Category:Patterns")},m(s,c){y(s,o,c),f(o,n),y(s,r,c),y(s,a,c),f(a,i),f(a,t),f(t,u)},p:Y,d(s){s&&b(o),s&&b(r),s&&b(a)}}}function ci(e){let o,n,r;var a=e[1].component;function i(t){return{}}return a&&(o=lt(a,i())),{c(){o&&Le(o.$$.fragment),n=D()},l(t){o&&Xe(o.$$.fragment,t),n=C(t)},m(t,u){o&&De(o,t,u),y(t,n,u),r=!0},p(t,u){if(a!==(a=t[1].component)){if(o){Zo();const s=o;Q(s.$$.fragment,1,0,()=>{Ce(s,1)}),jo()}a?(o=lt(a,i()),Le(o.$$.fragment),q(o.$$.fragment,1),De(o,n.parentNode,n)):o=null}},i(t){r||(o&&q(o.$$.fragment,t),r=!0)},o(t){o&&Q(o.$$.fragment,t),r=!1},d(t){o&&Ce(o,t),t&&b(n)}}}function Mt(e){let o,n;return o=new Wt({props:{$$slots:{default:[ci]},$$scope:{ctx:e}}}),{c(){Le(o.$$.fragment)},l(r){Xe(o.$$.fragment,r)},m(r,a){De(o,r,a),n=!0},p(r,a){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),o.$set(i)},i(r){n||(q(o.$$.fragment,r),n=!0)},o(r){Q(o.$$.fragment,r),n=!1},d(r){Ce(o,r)}}}function li(e){let o,n,r,a,i,t;o=new un({props:{$$slots:{default:[ui]},$$scope:{ctx:e}}}),r=new Wt({props:{$$slots:{default:[si]},$$scope:{ctx:e}}});let u=e[0],s=[];for(let l=0;l<u.length;l+=1)s[l]=Mt(zt(e,u,l));const c=l=>Q(s[l],1,1,()=>{s[l]=null});return{c(){Le(o.$$.fragment),n=D(),Le(r.$$.fragment),a=D();for(let l=0;l<s.length;l+=1)s[l].c();i=Co()},l(l){Xe(o.$$.fragment,l),n=C(l),Xe(r.$$.fragment,l),a=C(l);for(let h=0;h<s.length;h+=1)s[h].l(l);i=Co()},m(l,h){De(o,l,h),y(l,n,h),De(r,l,h),y(l,a,h);for(let _=0;_<s.length;_+=1)s[_].m(l,h);y(l,i,h),t=!0},p(l,h){const _={};h&64&&(_.$$scope={dirty:h,ctx:l}),o.$set(_);const p={};if(h&64&&(p.$$scope={dirty:h,ctx:l}),r.$set(p),h&1){u=l[0];let d;for(d=0;d<u.length;d+=1){const m=zt(l,u,d);s[d]?(s[d].p(m,h),q(s[d],1)):(s[d]=Mt(m),s[d].c(),q(s[d],1),s[d].m(i.parentNode,i))}for(Zo(),d=u.length;d<s.length;d+=1)c(d);jo()}},i(l){if(!t){q(o.$$.fragment,l),q(r.$$.fragment,l);for(let h=0;h<u.length;h+=1)q(s[h]);t=!0}},o(l){Q(o.$$.fragment,l),Q(r.$$.fragment,l),s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)Q(s[h]);t=!1},d(l){Ce(o,l),l&&b(n),Ce(r,l),l&&b(a),Gt(s,l),l&&b(i)}}}function di(e){let o,n,r;return n=new an({props:{$$slots:{default:[li]},$$scope:{ctx:e}}}),{c(){o=g("div"),Le(n.$$.fragment)},l(a){o=w(a,"DIV",{});var i=$(o);Xe(n.$$.fragment,i),i.forEach(b)},m(a,i){y(a,o,i),De(n,o,null),r=!0},p(a,[i]){const t={};i&64&&(t.$$scope={dirty:i,ctx:a}),n.$set(t)},i(a){r||(q(n.$$.fragment,a),r=!0)},o(a){Q(n.$$.fragment,a),r=!1},d(a){a&&b(o),Ce(n)}}}function fi(e){return[[{title:"V4",component:$r},{title:"V3",component:ir},{title:"V2",component:Xn},{title:"V1",component:An},{title:"V5",component:ri}]]}class mi extends Ye{constructor(o){super(),Ke(this,o,fi,di,qe,{})}}function hi(e){let o,n;return o=new mi({}),{c(){Le(o.$$.fragment)},l(r){Xe(o.$$.fragment,r)},m(r,a){De(o,r,a),n=!0},p:Y,i(r){n||(q(o.$$.fragment,r),n=!0)},o(r){Q(o.$$.fragment,r),n=!1},d(r){Ce(o,r)}}}class wi extends Ye{constructor(o){super(),Ke(this,o,null,hi,qe,{})}}export{wi as default};
