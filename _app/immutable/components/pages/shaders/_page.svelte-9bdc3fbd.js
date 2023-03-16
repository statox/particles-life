import{S as Y,i as G,s as q,C as Fe,k as g,l as D,m as U,h as m,n as w,b as v,K as ge,E as De,F as Ue,G as Pe,f as R,t as F,H as ve,R as at,o as Z,j as ct,Q as ft,T as Ge,U as Je,A as ut,V as lt,g as mt,d as dt,q as P,a as B,r as y,c as S,D as L,B as N,p as de,u as pt,w as C,x as I,y as M,z as X}from"../../../chunks/index-ff9e742a.js";import{w as be}from"../../../chunks/index-84a8d4d9.js";let ht=1;function Ze(){return`svelte-tabs-${ht++}`}function _t(t){let e,i,o,r;const a=t[4].default,s=Fe(a,t,t[3],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(n){e=D(n,"DIV",{class:!0});var f=U(e);s&&s.l(f),f.forEach(m),this.h()},h(){w(e,"class","svelte-tabs")},m(n,f){v(n,e,f),s&&s.m(e,null),i=!0,o||(r=ge(e,"keydown",t[1]),o=!0)},p(n,[f]){s&&s.p&&(!i||f&8)&&De(s,a,n,n[3],i?Pe(a,n[3],f,null):Ue(n[3]),null)},i(n){i||(R(s,n),i=!0)},o(n){F(s,n),i=!1},d(n){n&&m(e),s&&s.d(n),o=!1,r()}}}const Ve={};function Tt(t,e,i){const o=t.indexOf(e);t.splice(o,1),i.update(r=>r===e?t[o]||t[t.length-1]:r)}function $t(t,e,i){let o,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const n=[],f=[],u=[],d=be({}),h=be({}),x=be(null);ve(t,x,c=>i(5,o=c));const _=be(null);function $(c,T,l){c.push(T),l.update(p=>p||T),ft(()=>Tt(c,T,l))}function A(c){const T=f.indexOf(c);x.set(c),_.set(u[T])}at(Ve,{registerTab(c){$(f,c,x)},registerTabElement(c){n.push(c)},registerPanel(c){$(u,c,_)},selectTab:A,selectedTab:x,selectedPanel:_,controls:d,labeledBy:h}),Z(()=>{A(f[s])}),ct(()=>{for(let c=0;c<f.length;c++)d.update(T=>({...T,[f[c].id]:u[c].id})),h.update(T=>({...T,[u[c].id]:f[c].id}))});async function E(c){if(c.target.classList.contains("svelte-tabs__tab")){let T=f.indexOf(o);switch(c.key){case"ArrowRight":T+=1,T>f.length-1&&(T=0),A(f[T]),n[T].focus();break;case"ArrowLeft":T-=1,T<0&&(T=f.length-1),A(f[T]),n[T].focus()}}}return t.$$set=c=>{"initialSelectedIndex"in c&&i(2,s=c.initialSelectedIndex),"$$scope"in c&&i(3,a=c.$$scope)},[x,E,s,a,r]}class xt extends Y{constructor(e){super(),G(this,e,$t,_t,q,{initialSelectedIndex:2})}}function vt(t){let e,i,o,r,a,s;const n=t[9].default,f=Fe(n,t,t[8],null);return{c(){e=g("li"),f&&f.c(),this.h()},l(u){e=D(u,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=U(e);f&&f.l(d),d.forEach(m),this.h()},h(){w(e,"role","tab"),w(e,"id",t[3].id),w(e,"aria-controls",i=t[2][t[3].id]),w(e,"aria-selected",t[1]),w(e,"tabindex",o=t[1]?0:-1),w(e,"class","svelte-tabs__tab svelte-1fbofsd"),Ge(e,"svelte-tabs__selected",t[1])},m(u,d){v(u,e,d),f&&f.m(e,null),t[10](e),r=!0,a||(s=ge(e,"click",t[11]),a=!0)},p(u,[d]){f&&f.p&&(!r||d&256)&&De(f,n,u,u[8],r?Pe(n,u[8],d,null):Ue(u[8]),null),(!r||d&4&&i!==(i=u[2][u[3].id]))&&w(e,"aria-controls",i),(!r||d&2)&&w(e,"aria-selected",u[1]),(!r||d&2&&o!==(o=u[1]?0:-1))&&w(e,"tabindex",o),(!r||d&2)&&Ge(e,"svelte-tabs__selected",u[1])},i(u){r||(R(f,u),r=!0)},o(u){F(f,u),r=!1},d(u){u&&m(e),f&&f.d(u),t[10](null),a=!1,s()}}}function At(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e,n;const f={id:Ze()},{registerTab:u,registerTabElement:d,selectTab:h,selectedTab:x,controls:_}=Je(Ve);ve(t,x,c=>i(7,o=c)),ve(t,_,c=>i(2,r=c));let $;u(f),Z(async()=>{await ut(),d(n)});function A(c){lt[c?"unshift":"push"](()=>{n=c,i(0,n)})}const E=()=>h(f);return t.$$set=c=>{"$$scope"in c&&i(8,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,$=o===f)},[n,$,r,f,h,x,_,o,s,a,A,E]}class ee extends Y{constructor(e){super(),G(this,e,At,vt,q,{})}}function bt(t){let e,i;const o=t[1].default,r=Fe(o,t,t[0],null);return{c(){e=g("ul"),r&&r.c(),this.h()},l(a){e=D(a,"UL",{role:!0,class:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"role","tablist"),w(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){v(a,e,s),r&&r.m(e,null),i=!0},p(a,[s]){r&&r.p&&(!i||s&1)&&De(r,o,a,a[0],i?Pe(o,a[0],s,null):Ue(a[0]),null)},i(a){i||(R(r,a),i=!0)},o(a){F(r,a),i=!1},d(a){a&&m(e),r&&r.d(a)}}}function Et(t,e,i){let{$$slots:o={},$$scope:r}=e;return t.$$set=a=>{"$$scope"in a&&i(0,r=a.$$scope)},[r,o]}class wt extends Y{constructor(e){super(),G(this,e,Et,bt,q,{})}}function qe(t){let e;const i=t[6].default,o=Fe(i,t,t[5],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,a){o&&o.m(r,a),e=!0},p(r,a){o&&o.p&&(!e||a&32)&&De(o,i,r,r[5],e?Pe(i,r[5],a,null):Ue(r[5]),null)},i(r){e||(R(o,r),e=!0)},o(r){F(o,r),e=!1},d(r){o&&o.d(r)}}}function Rt(t){let e,i,o,r=t[1]===t[2]&&qe(t);return{c(){e=g("div"),r&&r.c(),this.h()},l(a){e=D(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"id",t[2].id),w(e,"aria-labelledby",i=t[0][t[2].id]),w(e,"class","svelte-tabs__tab-panel svelte-epfyet"),w(e,"role","tabpanel")},m(a,s){v(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&R(r,1)):(r=qe(a),r.c(),R(r,1),r.m(e,null)):r&&(mt(),F(r,1,1,()=>{r=null}),dt()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&w(e,"aria-labelledby",i)},i(a){o||(R(r),o=!0)},o(a){F(r),o=!1},d(a){a&&m(e),r&&r.d()}}}function Ft(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e;const n={id:Ze()},{registerPanel:f,selectedPanel:u,labeledBy:d}=Je(Ve);return ve(t,u,h=>i(1,r=h)),ve(t,d,h=>i(0,o=h)),f(n),t.$$set=h=>{"$$scope"in h&&i(5,s=h.$$scope)},[o,r,n,u,d,s,a]}class te extends Y{constructor(e){super(),G(this,e,Ft,Rt,q,{})}}const gt=["VERTEX_SHADER","FRAGMENT_SHADER"];function et(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return ye(e),e}function ye(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ne(t,e,i,o){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,o,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function me(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function Q(t,e,i,o,r){const a=[];for(let n=0;n<e.length;++n){const f=gt[n]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,u=Dt(t,e[n],f,r);if(!u)throw"Can not create shader";a.push(u)}const s=Ut(t,a,i,o,r);if(!s)throw"Can not create program";return s}function Dt(t,e,i,o){const r=o||console.log,a=t.createShader(i);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+n+`
`+e.split(`
`).map((f,u)=>`${u+1}: ${f}`).join(`
`))),t.deleteShader(a),null}return a}function Ut(t,e,i,o,r){const a=r||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(f){t.attachShader(s,f)}),i&&i.forEach(function(f,u){t.bindAttribLocation(s,o?o[u]:u,f)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const f=t.getProgramInfoLog(s);return a("Error in program linking:"+f),t.deleteProgram(s),null}return s}function k(t,e){e=e||1;const i=t.clientWidth*e|0,o=t.clientHeight*e|0;return t.width!==i||t.height!==o?(t.width=i,t.height=o,!0):!1}function Pt(t){let e,i,o,r,a,s;return{c(){e=g("p"),i=P(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=B(),r=g("ul"),a=B(),s=g("canvas"),this.h()},l(n){e=D(n,"P",{});var f=U(e);i=y(f,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),f.forEach(m),o=S(n),r=D(n,"UL",{id:!0}),U(r).forEach(m),a=S(n),s=D(n,"CANVAS",{id:!0}),U(s).forEach(m),this.h()},h(){w(r,"id","result"),w(s,"id","canvas")},m(n,f){v(n,e,f),L(e,i),v(n,o,f),v(n,r,f),v(n,a,f),v(n,s,f)},p:N,i:N,o:N,d(n){n&&m(e),n&&m(o),n&&m(r),n&&m(a),n&&m(s)}}}function yt(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Lt(t){function e(){const i=`
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `,o=`
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `,s=document.createElement("canvas");s.width=3,s.height=3;const n=s.getContext("webgl");if(!n)throw"Coulndt get context";const f=Q(n,[i,o]);if(!f)throw"Could not get program";const u=n.getAttribLocation(f,"position"),d=n.getUniformLocation(f,"srcTex"),h=n.getUniformLocation(f,"srcDimensions"),x=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,x),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(u),n.vertexAttribPointer(u,2,n.FLOAT,!1,0,0);const _=3,$=3,A=n.createTexture();n.bindTexture(n.TEXTURE_2D,A),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,_,$,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.useProgram(f),n.uniform1i(d,0),n.uniform2f(h,_,$),n.drawArrays(n.TRIANGLES,0,6);const E=new Uint8Array(3*3*4);n.readPixels(0,0,3,3,n.RGBA,n.UNSIGNED_BYTE,E);for(let c=0;c<3*3;++c)yt(E[c*4])}return Z(e),[]}class Bt extends Y{constructor(e){super(),G(this,e,Lt,Pt,q,{})}}const St=Float32Array;function tt(t,e,i,o,r,a){const s=new St(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(i+o)/(i-o),s[14]=(r+a)/(r-a),s[15]=1,s}function Ct(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){w(e,"id","canvas"),de(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){v(i,e,o)},p:N,i:N,o:N,d(i){i&&m(e)}}}function It(t){function e(){const i=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,o=`
  precision highp float;

  uniform sampler2D positionTex;
  uniform sampler2D velocityTex;
  uniform vec2 texDimensions;
  uniform vec2 canvasDimensions;
  uniform float deltaTime;

  vec2 euclideanModulo(vec2 n, vec2 m) {
  	return mod(mod(n, m) + m, m);
  }

  void main() {
    // there will be one velocity per position
    // so the velocity texture and position texture
    // are the same size.

    // further, we're generating new positions
    // so we know our destination is the same size
    // as our source so we only need one set of 
    // shared texture dimensions

    // compute texcoord from gl_FragCoord;
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    
    vec2 position = texture2D(positionTex, texcoord).xy;
    vec2 velocity = texture2D(velocityTex, texcoord).xy;
    vec2 newPosition = euclideanModulo(position + velocity * deltaTime, canvasDimensions);

    gl_FragColor = vec4(newPosition, 0, 1);
  }
  `,r=`
  attribute float id;
  uniform sampler2D positionTex;
  uniform vec2 texDimensions;
  uniform mat4 matrix;

  vec4 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord);
  }

  void main() {
    // pull the position from the texture
    vec4 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // do the common matrix math
    gl_Position = matrix * vec4(position.xy, 0, 1);
    gl_PointSize = 10.0;
  }
  `,a=`
  precision highp float;
  void main() {
    gl_FragColor = vec4(0.4, 0.2, 0.9, 0.5);
  }
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const n=s.getContext("webgl");if(!n)throw"gl undefined";if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=Q(n,[i,o]),h=Q(n,[r,a]);if(!d||!h)throw"Can not create programs";const x={position:n.getAttribLocation(d,"position"),positionTex:n.getUniformLocation(d,"positionTex"),velocityTex:n.getUniformLocation(d,"velocityTex"),texDimensions:n.getUniformLocation(d,"texDimensions"),canvasDimensions:n.getUniformLocation(d,"canvasDimensions"),deltaTime:n.getUniformLocation(d,"deltaTime")},_={id:n.getAttribLocation(h,"id"),positionTex:n.getUniformLocation(h,"positionTex"),texDimensions:n.getUniformLocation(h,"texDimensions"),matrix:n.getUniformLocation(h,"matrix")},$=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,$),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW);const A=300,E=20,c=A*E,T=new Array(c).fill(0).map((b,K)=>K),l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,new Float32Array(T),n.STATIC_DRAW),k(n.canvas);const p=(b,K)=>(K===void 0&&(K=b,b=0),Math.random()*(K-b)+b),O=new Float32Array(T.map(b=>[p(s.width),p(s.height),0,0]).flat()),H=new Float32Array(T.map(b=>[p(-300,300),p(-300,300),0,0]).flat());function z(b,K,se,st){const Ye=b.createTexture();return b.bindTexture(b.TEXTURE_2D,Ye),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,se,st,0,b.RGBA,b.FLOAT,K),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),Ye}const W=z(n,H,A,E),V=z(n,O,A,E),j=z(n,null,A,E);if(!V||!j)throw"Can not create position textures";function J(b,K){const se=b.createFramebuffer();return b.bindFramebuffer(b.FRAMEBUFFER,se),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,K,0),se}const ie=J(n,V),re=J(n,j);let Le={fb:ie,tex:V},Ae={fb:re,tex:j},We=0;function ke(b){if(!n)return;b*=.001;const K=b-We;We=b,k(n.canvas),n.bindFramebuffer(n.FRAMEBUFFER,Ae.fb),n.viewport(0,0,A,E),n.bindBuffer(n.ARRAY_BUFFER,$),n.enableVertexAttribArray(x.position),n.vertexAttribPointer(x.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,Le.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,W),n.useProgram(d),n.uniform1i(x.positionTex,0),n.uniform1i(x.velocityTex,1),n.uniform2f(x.texDimensions,A,E),n.uniform2f(x.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f(x.deltaTime,K),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,l),n.enableVertexAttribArray(_.id),n.vertexAttribPointer(_.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,Ae.tex),n.useProgram(h),n.uniform2f(_.texDimensions,A,A),n.uniform1i(_.positionTex,0),n.uniformMatrix4fv(_.matrix,!1,tt(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,c);{const se=Le;Le=Ae,Ae=se}requestAnimationFrame(ke)}requestAnimationFrame(ke)}return Z(()=>e()),[]}class Mt extends Y{constructor(e){super(),G(this,e,It,Ct,q,{})}}const Ee=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Xt(t,e,i,o){const r=t*e,a=new Array(r).fill(0).map((f,u)=>u),s=new Float32Array(a.map(f=>[Ee(i),Ee(o),0,0]).flat()),n=new Float32Array(a.map(f=>[Ee(-300,300),Ee(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:n}}const Ot=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Nt=`precision highp float;

uniform sampler2D positionTex;
uniform sampler2D velocityTex;
uniform vec2 texDimensions;
uniform vec2 canvasDimensions;
uniform float deltaTime;

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

void main() {
    // there will be one velocity per position
    // so the velocity texture and position texture
    // are the same size.

    // further, we're generating new positions
    // so we know our destination is the same size
    // as our source so we only need one set of 
    // shared texture dimensions

    // compute texcoord from gl_FragCoord;
    vec2 texcoord = gl_FragCoord.xy / texDimensions;

    vec2 position = texture2D(positionTex, texcoord).xy;
    //vec2 velocity = texture2D(velocityTex, texcoord).xy;
    vec2 velocity = vec2(0.0, -100);
    vec2 newPosition = euclideanModulo(position + velocity * deltaTime, canvasDimensions);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`,zt=`  attribute float id;
  uniform sampler2D positionTex;
  uniform vec2 texDimensions;
  uniform mat4 matrix;

  vec4 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord);
  }

  void main() {
    // pull the position from the texture
    vec4 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // do the common matrix math
    gl_Position = matrix * vec4(position.xy, 0, 1);
    gl_PointSize = 10.0;
  }

`,Vt=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Wt(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){w(e,"id","canvas"),de(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){v(i,e,o)},p:N,i:N,o:N,d(i){i&&m(e)}}}function kt(t){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";ye(a);const s=Q(a,[Ot,Nt]),n=Q(a,[zt,Vt]),f={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},u={id:a.getAttribLocation(n,"id"),positionTex:a.getUniformLocation(n,"positionTex"),texDimensions:a.getUniformLocation(n,"texDimensions"),matrix:a.getUniformLocation(n,"matrix")},d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const h=300,x=20,{numParticles:_,ids:$,positions:A,velocities:E}=Xt(h,x,r.width,r.height),c=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array($),a.STATIC_DRAW),k(a.canvas);const T=ne(a,E,h,x),l=ne(a,A,h,x),p=ne(a,null,h,x),O=me(a,l),H=me(a,p);let z={fb:O,tex:l},W={fb:H,tex:p},V=0;function j(J){if(!a||!d||!c)throw"Undefined params to render";J*=.001;const ie=J-V;V=J,k(a.canvas),o(a,W,h,x,d,f,z,T,s,ie),i(a,h,c,u,W,n,_);{const re=z;z=W,W=re}requestAnimationFrame(j)}requestAnimationFrame(j)}const i=(r,a,s,n,f,u,d)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(n.id),r.vertexAttribPointer(n.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,f.tex),r.useProgram(u),r.uniform2f(n.texDimensions,a,a),r.uniform1i(n.positionTex,0),r.uniformMatrix4fv(n.matrix,!1,tt(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,d)},o=(r,a,s,n,f,u,d,h,x,_)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,n),r.bindBuffer(r.ARRAY_BUFFER,f),r.enableVertexAttribArray(u.position),r.vertexAttribPointer(u.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,d.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,h),r.useProgram(x),r.uniform1i(u.positionTex,0),r.uniform1i(u.velocityTex,1),r.uniform2f(u.texDimensions,s,n),r.uniform2f(u.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(u.deltaTime,_),r.drawArrays(r.TRIANGLES,0,6)};return Z(()=>e()),[]}class Yt extends Y{constructor(e){super(),G(this,e,kt,Wt,q,{})}}const Gt=`attribute vec2 a_position;

uniform vec2 u_resolution;

// all shaders have a main function
void main() {
    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = a_position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 10.0;
}
`,qt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Ht(t){let e,i,o,r,a,s,n,f,u,d,h,x;return{c(){e=g("p"),i=P(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=B(),n=g("canvas"),f=B(),u=g("button"),d=P("Add position"),this.h()},l(_){e=D(_,"P",{});var $=U(e);i=y($,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=D($,"CODE",{});var A=U(o);r=y(A,"requestAnimationFrame"),A.forEach(m),a=y($,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),$.forEach(m),s=S(_),n=D(_,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(n).forEach(m),f=S(_),u=D(_,"BUTTON",{});var E=U(u);d=y(E,"Add position"),E.forEach(m),this.h()},h(){w(n,"id","canvas"),de(n,"background-color","black"),w(n,"width","800"),w(n,"height","600")},m(_,$){v(_,e,$),L(e,i),L(e,o),L(o,r),L(e,a),v(_,s,$),v(_,n,$),v(_,f,$),v(_,u,$),L(u,d),h||(x=ge(u,"click",t[1]),h=!0)},p:N,i:N,o:N,d(_){_&&m(e),_&&m(s),_&&m(n),_&&m(f),_&&m(u),h=!1,x()}}}function jt(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";ye(s);const n=Q(s,[Gt,qt]);k(s.canvas);const f=s.getAttribLocation(n,"a_position"),u=s.getUniformLocation(n,"u_resolution"),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function h(){if(!s)throw"Undefined params to render";for(let l=0;l<=e.length-2;l+=2)e[l]=(e[l]+Math.random()*2-1)%s.canvas.width,e[l+1]=(e[l+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),k(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(n),s.uniform2f(u,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(f),s.bindBuffer(s.ARRAY_BUFFER,d);const x=2,_=s.FLOAT,$=!1,A=0,E=0;s.vertexAttribPointer(f,x,_,$,A,E);var c=s.POINTS,T=e.length/2;s.drawArrays(c,E,T),requestAnimationFrame(h)}requestAnimationFrame(h)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Z(()=>i()),[o,()=>o()]}class Kt extends Y{constructor(e){super(),G(this,e,jt,Ht,q,{})}}const Qt=`attribute float id;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 10.0;
}
`,Jt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let pe,he;const Zt=t=>{he=Q(t,[Qt,Jt]),pe={idAttributeLocation:t.getAttribLocation(he,"id"),texDimensionsUniformLocation:t.getUniformLocation(he,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(he,"u_resolution")}},en=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;k(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(he),e.uniform2f(pe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(pe.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(pe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,n=e.FLOAT,f=!1,u=0,d=0;e.vertexAttribPointer(pe.idAttributeLocation,s,n,f,u,d);const h=e.POINTS,x=r.length;e.drawArrays(h,d,x)};function tn(t){let e,i,o,r,a,s,n;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture. In each "),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=B(),n=g("canvas"),this.h()},l(f){e=D(f,"P",{});var u=U(e);i=y(u,"Create an array of render-size positions. Store this array in a texture. In each "),o=D(u,"CODE",{});var d=U(o);r=y(d,"requestAnimationFrame"),d.forEach(m),a=y(u,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),u.forEach(m),s=S(f),n=D(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(n).forEach(m),this.h()},h(){w(n,"id","canvas"),de(n,"background-color","black"),w(n,"width",nt),w(n,"height",ot)},m(f,u){v(f,e,u),L(e,i),L(e,o),L(o,r),L(e,a),v(f,s,u),v(f,n,u)},p:N,i:N,o:N,d(f){f&&m(e),f&&m(s),f&&m(n)}}}const nt=800,ot=600;function nn(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const o=i.getContext("webgl");if(!o)throw"gl undefined";ye(o),k(o.canvas),Zt(o);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(n=>[Math.random()*nt,Math.random()*ot,0,0]).flat();function s(){if(!o)throw"Undefined params to render";for(let f=0;f<=a.length-2;f+=2)a[f]=(a[f]+Math.random()*2-1)%o.canvas.width,a[f+1]=(a[f+1]+Math.random()*0+1)%o.canvas.height;const n=ne(o,new Float32Array(a),3,3);en({gl:o,positionTex:n,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let on=class extends Y{constructor(e){super(),G(this,e,nn,tn,q,{})}};const rn=`attribute float id;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 3.0;
}
`,sn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let _e,Te,Me;const an=(t,e)=>{Te=Q(t,[rn,sn]),_e={idAttributeLocation:t.getAttribLocation(Te,"id"),texDimensionsUniformLocation:t.getUniformLocation(Te,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Te,"u_resolution")},Me=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Me),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},cn=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;k(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Me),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Te),e.uniform2f(_e.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(_e.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(_e.idAttributeLocation);const a=1,s=e.FLOAT,n=!1,f=0,u=0;e.vertexAttribPointer(_e.idAttributeLocation,a,s,n,f,u),e.drawArrays(e.POINTS,u,r.length)};function fn(t,e){const i=new Array(t).fill(0).map((a,s)=>s),o=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const un=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ln=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    vec2 position = texture2D(positionTex, texcoord).xy;

    vec2 center = u_resolution / 2.0;
    vec2 direction = (center - position) / u_resolution;

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let ae,ce,Xe,Be,Se,He,je,$e,we;const mn=(t,e)=>{const{positions:i,texDimensions:o}=e;ce=Q(t,[un,ln]),ae={positionAttributeLocation:t.getAttribLocation(ce,"position"),positionTexLocation:t.getUniformLocation(ce,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(ce,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ce,"u_resolution")},Xe=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Xe),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Be=ne(t,new Float32Array(i),o.width,o.height),Se=ne(t,null,o.width,o.height),He=me(t,Be),je=me(t,Se),$e={fb:He,tex:Be},we={fb:je,tex:Se}},dn=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,we.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Xe),e.enableVertexAttribArray(ae.positionAttributeLocation),e.vertexAttribPointer(ae.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,$e.tex),e.useProgram(ce),e.uniform1i(ae.positionTexLocation,0),e.uniform2f(ae.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ae.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=$e;$e=we,we=o}return $e.tex};function pn(t){let e,i,o,r,a,s,n,f,u,d,h,x,_;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture."),o=B(),r=g("p"),a=P("Create 2 textures which will be used to update the positions with a shader. In each "),s=g("code"),n=P("requestAnimationFrame"),f=P(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),u=B(),d=g("p"),h=P("Finally switch the two textures to read and write in the updated textures"),x=B(),_=g("canvas"),this.h()},l($){e=D($,"P",{});var A=U(e);i=y(A,"Create an array of render-size positions. Store this array in a texture."),A.forEach(m),o=S($),r=D($,"P",{});var E=U(r);a=y(E,"Create 2 textures which will be used to update the positions with a shader. In each "),s=D(E,"CODE",{});var c=U(s);n=y(c,"requestAnimationFrame"),c.forEach(m),f=y(E,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),E.forEach(m),u=S($),d=D($,"P",{});var T=U(d);h=y(T,"Finally switch the two textures to read and write in the updated textures"),T.forEach(m),x=S($),_=D($,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(_).forEach(m),this.h()},h(){w(_,"id","canvas"),de(_,"background-color","black"),w(_,"width",it),w(_,"height",rt)},m($,A){v($,e,A),L(e,i),v($,o,A),v($,r,A),L(r,a),L(r,s),L(s,n),L(r,f),v($,u,A),v($,d,A),L(d,h),v($,x,A),v($,_,A)},p:N,i:N,o:N,d($){$&&m(e),$&&m(o),$&&m(r),$&&m(u),$&&m(d),$&&m(x),$&&m(_)}}}const it=800,rt=600;function hn(t){function e(){const i=et();k(i.canvas);const{ids:o,positions:r,texDimensions:a}=fn(100,{width:it,height:rt});an(i,o),mn(i,{positions:r,texDimensions:a});function s(){k(i.canvas);const n=dn({gl:i,texDimensions:a});cn({gl:i,positionTex:n,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let _n=class extends Y{constructor(e){super(),G(this,e,hn,pn,q,{})}};const Tn=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

varying float v_color;

vec2 getValueFrom2DTextureAs1DArray(sampler2D tex, vec2 dimensions, float index) {
    float y = floor(index / dimensions.x);
    float x = mod(index, dimensions.x);
    vec2 texcoord = (vec2(x, y) + 0.5) / dimensions;
    return texture2D(tex, texcoord).xy;
}

// all shaders have a main function
void main() {
    // pull the position from the texture
    vec2 position = getValueFrom2DTextureAs1DArray(positionTex, texDimensions, id);

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 2.0;
    v_color = color;
}
`,$n=`precision mediump float;
varying float v_color;

void main() {
    if (v_color == 0.0) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 0.3);
    } else if (v_color == 1.0){
        gl_FragColor = vec4(0.0, 1.0, 0.0, 0.3);
    } else if (v_color == 2.0){
        gl_FragColor = vec4(0.0, 0.0, 1.0, 0.3);
    } else if (v_color == 3.0){
        gl_FragColor = vec4(1.0, 1.0, 0.0, 0.3);
    }
}
`;let oe,fe,Oe,Ne;const xn=(t,e)=>{const{ids:i,colors:o}=e;fe=Q(t,[Tn,$n]),oe={idAttributeLocation:t.getAttribLocation(fe,"id"),colorAttributeLocation:t.getAttribLocation(fe,"color"),texDimensionsUniformLocation:t.getUniformLocation(fe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(fe,"u_resolution")},Oe=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Oe),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Ne=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ne),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW)},vn=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t,a=1,s=e.FLOAT,n=!1,f=0,u=0;k(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Oe),e.vertexAttribPointer(oe.idAttributeLocation,a,s,n,f,u),e.enableVertexAttribArray(oe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Ne),e.vertexAttribPointer(oe.colorAttributeLocation,a,s,n,f,u),e.enableVertexAttribArray(oe.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(fe),e.uniform2f(oe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(oe.texDimensionsUniformLocation,o.width,o.height),e.drawArrays(e.POINTS,u,r.length)};function An(t,e){const i=t.width*t.height,o=new Array(i).fill(0).map((s,n)=>n),r=new Array(i).fill(0).map(s=>Math.floor(Math.random()*4)),a=o.map(s=>[e.width/2+(Math.random()*100-50),e.height/2+(Math.random()*100-50),0,0]).flat();return{ids:o,positions:a,texDimensions:t,colors:r}}const bn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,En=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;

// We need to define the texture dimensions in constants
// because loops work only with constant values
const float texWidth = 100.0;
const float texHeight = 50.0;

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    vec2 position = texture2D(positionTex, texcoord).xy;

    vec2 direction = vec2(0.0, 0.0);

    // Iterate on the texture coordinates to compare with each other cell

    for (float y=0.0; y<1.0; y += 1.0 / texHeight) {
        for (float x=0.0; x<1.0; x += 1.0 / texWidth) {
            vec2 otherTextCoord = vec2(x, y);
            vec2 otherPosition = texture2D(positionTex, otherTextCoord).xy;

            vec2 diff = position - otherPosition;
            float mag = length(diff);
            if (mag < 9.0) {
                if (mag == 0.0) {
                    mag = 0.1;
                }
                direction = direction + (diff * 10.0/mag);
            }
        }
    }
    direction = direction * vec2(0.01, 0.01);

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let ue,le,ze,Ce,Ie,Ke,Qe,xe,Re;const wn=(t,e)=>{const{positions:i,texDimensions:o}=e;le=Q(t,[bn,En]),ue={positionAttributeLocation:t.getAttribLocation(le,"position"),positionTexLocation:t.getUniformLocation(le,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(le,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(le,"u_resolution")},ze=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ze),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ce=ne(t,new Float32Array(i),o.width,o.height),Ie=ne(t,null,o.width,o.height),Ke=me(t,Ce),Qe=me(t,Ie),xe={fb:Ke,tex:Ce},Re={fb:Qe,tex:Ie}},Rn=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,Re.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,ze),e.enableVertexAttribArray(ue.positionAttributeLocation),e.vertexAttribPointer(ue.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,xe.tex),e.useProgram(le),e.uniform1i(ue.positionTexLocation,0),e.uniform2f(ue.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ue.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=xe;xe=Re,Re=o}return xe.tex};function Fn(t){let e,i,o,r,a,s,n,f,u,d,h=t[0]?"Play":"Pause",x,_,$,A,E=t[2].width*t[2].height+"",c,T,l;return{c(){e=g("p"),i=P("Same principle with a shader to update positions and a shader to draw particles."),o=B(),r=g("p"),a=P(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=B(),n=g("canvas"),f=B(),u=g("div"),d=g("button"),x=P(h),_=B(),$=g("span"),A=P("particles: "),c=P(E),this.h()},l(p){e=D(p,"P",{});var O=U(e);i=y(O,"Same principle with a shader to update positions and a shader to draw particles."),O.forEach(m),o=S(p),r=D(p,"P",{});var H=U(r);a=y(H,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),H.forEach(m),s=S(p),n=D(p,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(n).forEach(m),f=S(p),u=D(p,"DIV",{});var z=U(u);d=D(z,"BUTTON",{});var W=U(d);x=y(W,h),W.forEach(m),_=S(z),$=D(z,"SPAN",{});var V=U($);A=y(V,"particles: "),c=y(V,E),V.forEach(m),z.forEach(m),this.h()},h(){w(n,"id","canvas"),de(n,"background-color","black"),w(n,"width",t[1].width),w(n,"height",t[1].height)},m(p,O){v(p,e,O),L(e,i),v(p,o,O),v(p,r,O),L(r,a),v(p,s,O),v(p,n,O),v(p,f,O),v(p,u,O),L(u,d),L(d,x),L(u,_),L(u,$),L($,A),L($,c),T||(l=ge(d,"click",t[3]),T=!0)},p(p,[O]){O&1&&h!==(h=p[0]?"Play":"Pause")&&pt(x,h)},i:N,o:N,d(p){p&&m(e),p&&m(o),p&&m(r),p&&m(s),p&&m(n),p&&m(f),p&&m(u),T=!1,l()}}}function gn(t,e,i){const o={width:800,height:600},r={width:100,height:50};let a=!0;function s(){const f=et();k(f.canvas);const{ids:u,positions:d,colors:h}=An(r,{width:o.width,height:o.height});xn(f,{ids:u,colors:h,texDimensions:r}),wn(f,{positions:d,texDimensions:r});let x;function _(){k(f.canvas),(!x||!a)&&(x=Rn({gl:f,texDimensions:r})),vn({gl:f,positionTex:x,textureDimension:r,ids:u}),requestAnimationFrame(_)}requestAnimationFrame(_)}return Z(()=>s()),[a,o,r,()=>i(0,a=!a)]}class Dn extends Y{constructor(e){super(),G(this,e,gn,Fn,q,{})}}function Un(t){let e;return{c(){e=P("About")},l(i){e=y(i,"About")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Pn(t){let e;return{c(){e=P("Simple counter")},l(i){e=y(i,"Simple counter")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function yn(t){let e;return{c(){e=P("Particles")},l(i){e=y(i,"Particles")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Ln(t){let e;return{c(){e=P("Particles 2")},l(i){e=y(i,"Particles 2")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Bn(t){let e;return{c(){e=P("Positions Buffer")},l(i){e=y(i,"Positions Buffer")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Sn(t){let e;return{c(){e=P("Positions Texture")},l(i){e=y(i,"Positions Texture")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Cn(t){let e;return{c(){e=P("Positions Texture Draw & Update")},l(i){e=y(i,"Positions Texture Draw & Update")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function In(t){let e;return{c(){e=P("Positions Texture Advanced shader")},l(i){e=y(i,"Positions Texture Advanced shader")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Mn(t){let e,i,o,r,a,s,n,f,u,d,h,x,_,$,A,E;return e=new ee({props:{$$slots:{default:[Un]},$$scope:{ctx:t}}}),o=new ee({props:{$$slots:{default:[Pn]},$$scope:{ctx:t}}}),a=new ee({props:{$$slots:{default:[yn]},$$scope:{ctx:t}}}),n=new ee({props:{$$slots:{default:[Ln]},$$scope:{ctx:t}}}),u=new ee({props:{$$slots:{default:[Bn]},$$scope:{ctx:t}}}),h=new ee({props:{$$slots:{default:[Sn]},$$scope:{ctx:t}}}),_=new ee({props:{$$slots:{default:[Cn]},$$scope:{ctx:t}}}),A=new ee({props:{$$slots:{default:[In]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment),i=B(),C(o.$$.fragment),r=B(),C(a.$$.fragment),s=B(),C(n.$$.fragment),f=B(),C(u.$$.fragment),d=B(),C(h.$$.fragment),x=B(),C(_.$$.fragment),$=B(),C(A.$$.fragment)},l(c){I(e.$$.fragment,c),i=S(c),I(o.$$.fragment,c),r=S(c),I(a.$$.fragment,c),s=S(c),I(n.$$.fragment,c),f=S(c),I(u.$$.fragment,c),d=S(c),I(h.$$.fragment,c),x=S(c),I(_.$$.fragment,c),$=S(c),I(A.$$.fragment,c)},m(c,T){M(e,c,T),v(c,i,T),M(o,c,T),v(c,r,T),M(a,c,T),v(c,s,T),M(n,c,T),v(c,f,T),M(u,c,T),v(c,d,T),M(h,c,T),v(c,x,T),M(_,c,T),v(c,$,T),M(A,c,T),E=!0},p(c,T){const l={};T&1&&(l.$$scope={dirty:T,ctx:c}),e.$set(l);const p={};T&1&&(p.$$scope={dirty:T,ctx:c}),o.$set(p);const O={};T&1&&(O.$$scope={dirty:T,ctx:c}),a.$set(O);const H={};T&1&&(H.$$scope={dirty:T,ctx:c}),n.$set(H);const z={};T&1&&(z.$$scope={dirty:T,ctx:c}),u.$set(z);const W={};T&1&&(W.$$scope={dirty:T,ctx:c}),h.$set(W);const V={};T&1&&(V.$$scope={dirty:T,ctx:c}),_.$set(V);const j={};T&1&&(j.$$scope={dirty:T,ctx:c}),A.$set(j)},i(c){E||(R(e.$$.fragment,c),R(o.$$.fragment,c),R(a.$$.fragment,c),R(n.$$.fragment,c),R(u.$$.fragment,c),R(h.$$.fragment,c),R(_.$$.fragment,c),R(A.$$.fragment,c),E=!0)},o(c){F(e.$$.fragment,c),F(o.$$.fragment,c),F(a.$$.fragment,c),F(n.$$.fragment,c),F(u.$$.fragment,c),F(h.$$.fragment,c),F(_.$$.fragment,c),F(A.$$.fragment,c),E=!1},d(c){X(e,c),c&&m(i),X(o,c),c&&m(r),X(a,c),c&&m(s),X(n,c),c&&m(f),X(u,c),c&&m(d),X(h,c),c&&m(x),X(_,c),c&&m($),X(A,c)}}}function Xn(t){let e,i,o,r,a,s,n,f;return{c(){e=g("p"),i=P("This page is an experiment to run simulation on the GPU."),o=B(),r=g("p"),a=P(`I am copying code from
                `),s=g("a"),n=P("this site"),f=P(`
                and adding basic typings for typescript.`),this.h()},l(u){e=D(u,"P",{});var d=U(e);i=y(d,"This page is an experiment to run simulation on the GPU."),d.forEach(m),o=S(u),r=D(u,"P",{});var h=U(r);a=y(h,`I am copying code from
                `),s=D(h,"A",{target:!0,href:!0});var x=U(s);n=y(x,"this site"),x.forEach(m),f=y(h,`
                and adding basic typings for typescript.`),h.forEach(m),this.h()},h(){w(s,"target","none"),w(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(u,d){v(u,e,d),L(e,i),v(u,o,d),v(u,r,d),L(r,a),L(r,s),L(s,n),L(r,f)},p:N,d(u){u&&m(e),u&&m(o),u&&m(r)}}}function On(t){let e,i;return e=new Bt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Nn(t){let e,i;return e=new Mt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function zn(t){let e,i;return e=new Yt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Vn(t){let e,i;return e=new Kt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Wn(t){let e,i;return e=new on({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function kn(t){let e,i;return e=new _n({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Yn(t){let e,i;return e=new Dn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Gn(t){let e,i,o,r,a,s,n,f,u,d,h,x,_,$,A,E,c,T;return e=new wt({props:{$$slots:{default:[Mn]},$$scope:{ctx:t}}}),o=new te({props:{$$slots:{default:[Xn]},$$scope:{ctx:t}}}),a=new te({props:{$$slots:{default:[On]},$$scope:{ctx:t}}}),n=new te({props:{$$slots:{default:[Nn]},$$scope:{ctx:t}}}),u=new te({props:{$$slots:{default:[zn]},$$scope:{ctx:t}}}),h=new te({props:{$$slots:{default:[Vn]},$$scope:{ctx:t}}}),_=new te({props:{$$slots:{default:[Wn]},$$scope:{ctx:t}}}),A=new te({props:{$$slots:{default:[kn]},$$scope:{ctx:t}}}),c=new te({props:{$$slots:{default:[Yn]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment),i=B(),C(o.$$.fragment),r=B(),C(a.$$.fragment),s=B(),C(n.$$.fragment),f=B(),C(u.$$.fragment),d=B(),C(h.$$.fragment),x=B(),C(_.$$.fragment),$=B(),C(A.$$.fragment),E=B(),C(c.$$.fragment)},l(l){I(e.$$.fragment,l),i=S(l),I(o.$$.fragment,l),r=S(l),I(a.$$.fragment,l),s=S(l),I(n.$$.fragment,l),f=S(l),I(u.$$.fragment,l),d=S(l),I(h.$$.fragment,l),x=S(l),I(_.$$.fragment,l),$=S(l),I(A.$$.fragment,l),E=S(l),I(c.$$.fragment,l)},m(l,p){M(e,l,p),v(l,i,p),M(o,l,p),v(l,r,p),M(a,l,p),v(l,s,p),M(n,l,p),v(l,f,p),M(u,l,p),v(l,d,p),M(h,l,p),v(l,x,p),M(_,l,p),v(l,$,p),M(A,l,p),v(l,E,p),M(c,l,p),T=!0},p(l,p){const O={};p&1&&(O.$$scope={dirty:p,ctx:l}),e.$set(O);const H={};p&1&&(H.$$scope={dirty:p,ctx:l}),o.$set(H);const z={};p&1&&(z.$$scope={dirty:p,ctx:l}),a.$set(z);const W={};p&1&&(W.$$scope={dirty:p,ctx:l}),n.$set(W);const V={};p&1&&(V.$$scope={dirty:p,ctx:l}),u.$set(V);const j={};p&1&&(j.$$scope={dirty:p,ctx:l}),h.$set(j);const J={};p&1&&(J.$$scope={dirty:p,ctx:l}),_.$set(J);const ie={};p&1&&(ie.$$scope={dirty:p,ctx:l}),A.$set(ie);const re={};p&1&&(re.$$scope={dirty:p,ctx:l}),c.$set(re)},i(l){T||(R(e.$$.fragment,l),R(o.$$.fragment,l),R(a.$$.fragment,l),R(n.$$.fragment,l),R(u.$$.fragment,l),R(h.$$.fragment,l),R(_.$$.fragment,l),R(A.$$.fragment,l),R(c.$$.fragment,l),T=!0)},o(l){F(e.$$.fragment,l),F(o.$$.fragment,l),F(a.$$.fragment,l),F(n.$$.fragment,l),F(u.$$.fragment,l),F(h.$$.fragment,l),F(_.$$.fragment,l),F(A.$$.fragment,l),F(c.$$.fragment,l),T=!1},d(l){X(e,l),l&&m(i),X(o,l),l&&m(r),X(a,l),l&&m(s),X(n,l),l&&m(f),X(u,l),l&&m(d),X(h,l),l&&m(x),X(_,l),l&&m($),X(A,l),l&&m(E),X(c,l)}}}function qn(t){let e,i,o;return i=new xt({props:{$$slots:{default:[Gn]},$$scope:{ctx:t}}}),{c(){e=g("div"),C(i.$$.fragment)},l(r){e=D(r,"DIV",{});var a=U(e);I(i.$$.fragment,a),a.forEach(m)},m(r,a){v(r,e,a),M(i,e,null),o=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),i.$set(s)},i(r){o||(R(i.$$.fragment,r),o=!0)},o(r){F(i.$$.fragment,r),o=!1},d(r){r&&m(e),X(i)}}}class Hn extends Y{constructor(e){super(),G(this,e,null,qn,q,{})}}function jn(t){let e,i;return e=new Hn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},p:N,i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}class eo extends Y{constructor(e){super(),G(this,e,null,jn,q,{})}}export{eo as default};
