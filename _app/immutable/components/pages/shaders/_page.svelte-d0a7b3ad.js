import{S as k,i as G,s as q,C as ge,k as g,l as D,m as U,h as m,n as w,b as $,K as De,E as Ue,F as Pe,G as ye,f as R,t as F,H as ve,R as ct,o as Z,j as ft,Q as ut,T as Ge,U as Ze,A as lt,V as mt,g as dt,d as pt,q as P,a as B,r as y,c as S,D as L,B as N,p as de,u as ht,w as C,x as I,y as M,z as X}from"../../../chunks/index-ff9e742a.js";import{w as be}from"../../../chunks/index-84a8d4d9.js";let _t=1;function et(){return`svelte-tabs-${_t++}`}function xt(t){let e,i,o,r;const a=t[4].default,s=ge(a,t,t[3],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(n){e=D(n,"DIV",{class:!0});var c=U(e);s&&s.l(c),c.forEach(m),this.h()},h(){w(e,"class","svelte-tabs")},m(n,c){$(n,e,c),s&&s.m(e,null),i=!0,o||(r=De(e,"keydown",t[1]),o=!0)},p(n,[c]){s&&s.p&&(!i||c&8)&&Ue(s,a,n,n[3],i?ye(a,n[3],c,null):Pe(n[3]),null)},i(n){i||(R(s,n),i=!0)},o(n){F(s,n),i=!1},d(n){n&&m(e),s&&s.d(n),o=!1,r()}}}const Ve={};function Tt(t,e,i){const o=t.indexOf(e);t.splice(o,1),i.update(r=>r===e?t[o]||t[t.length-1]:r)}function $t(t,e,i){let o,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const n=[],c=[],u=[],d=be({}),h=be({}),v=be(null);ve(t,v,f=>i(5,o=f));const _=be(null);function T(f,x,l){f.push(x),l.update(p=>p||x),ut(()=>Tt(f,x,l))}function A(f){const x=c.indexOf(f);v.set(f),_.set(u[x])}ct(Ve,{registerTab(f){T(c,f,v)},registerTabElement(f){n.push(f)},registerPanel(f){T(u,f,_)},selectTab:A,selectedTab:v,selectedPanel:_,controls:d,labeledBy:h}),Z(()=>{A(c[s])}),ft(()=>{for(let f=0;f<c.length;f++)d.update(x=>({...x,[c[f].id]:u[f].id})),h.update(x=>({...x,[u[f].id]:c[f].id}))});async function E(f){if(f.target.classList.contains("svelte-tabs__tab")){let x=c.indexOf(o);switch(f.key){case"ArrowRight":x+=1,x>c.length-1&&(x=0),A(c[x]),n[x].focus();break;case"ArrowLeft":x-=1,x<0&&(x=c.length-1),A(c[x]),n[x].focus()}}}return t.$$set=f=>{"initialSelectedIndex"in f&&i(2,s=f.initialSelectedIndex),"$$scope"in f&&i(3,a=f.$$scope)},[v,E,s,a,r]}class vt extends k{constructor(e){super(),G(this,e,$t,xt,q,{initialSelectedIndex:2})}}function At(t){let e,i,o,r,a,s;const n=t[9].default,c=ge(n,t,t[8],null);return{c(){e=g("li"),c&&c.c(),this.h()},l(u){e=D(u,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=U(e);c&&c.l(d),d.forEach(m),this.h()},h(){w(e,"role","tab"),w(e,"id",t[3].id),w(e,"aria-controls",i=t[2][t[3].id]),w(e,"aria-selected",t[1]),w(e,"tabindex",o=t[1]?0:-1),w(e,"class","svelte-tabs__tab svelte-1fbofsd"),Ge(e,"svelte-tabs__selected",t[1])},m(u,d){$(u,e,d),c&&c.m(e,null),t[10](e),r=!0,a||(s=De(e,"click",t[11]),a=!0)},p(u,[d]){c&&c.p&&(!r||d&256)&&Ue(c,n,u,u[8],r?ye(n,u[8],d,null):Pe(u[8]),null),(!r||d&4&&i!==(i=u[2][u[3].id]))&&w(e,"aria-controls",i),(!r||d&2)&&w(e,"aria-selected",u[1]),(!r||d&2&&o!==(o=u[1]?0:-1))&&w(e,"tabindex",o),(!r||d&2)&&Ge(e,"svelte-tabs__selected",u[1])},i(u){r||(R(c,u),r=!0)},o(u){F(c,u),r=!1},d(u){u&&m(e),c&&c.d(u),t[10](null),a=!1,s()}}}function bt(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e,n;const c={id:et()},{registerTab:u,registerTabElement:d,selectTab:h,selectedTab:v,controls:_}=Ze(Ve);ve(t,v,f=>i(7,o=f)),ve(t,_,f=>i(2,r=f));let T;u(c),Z(async()=>{await lt(),d(n)});function A(f){mt[f?"unshift":"push"](()=>{n=f,i(0,n)})}const E=()=>h(c);return t.$$set=f=>{"$$scope"in f&&i(8,s=f.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,T=o===c)},[n,T,r,c,h,v,_,o,s,a,A,E]}class ee extends k{constructor(e){super(),G(this,e,bt,At,q,{})}}function Et(t){let e,i;const o=t[1].default,r=ge(o,t,t[0],null);return{c(){e=g("ul"),r&&r.c(),this.h()},l(a){e=D(a,"UL",{role:!0,class:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"role","tablist"),w(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){$(a,e,s),r&&r.m(e,null),i=!0},p(a,[s]){r&&r.p&&(!i||s&1)&&Ue(r,o,a,a[0],i?ye(o,a[0],s,null):Pe(a[0]),null)},i(a){i||(R(r,a),i=!0)},o(a){F(r,a),i=!1},d(a){a&&m(e),r&&r.d(a)}}}function wt(t,e,i){let{$$slots:o={},$$scope:r}=e;return t.$$set=a=>{"$$scope"in a&&i(0,r=a.$$scope)},[r,o]}class Rt extends k{constructor(e){super(),G(this,e,wt,Et,q,{})}}function qe(t){let e;const i=t[6].default,o=ge(i,t,t[5],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,a){o&&o.m(r,a),e=!0},p(r,a){o&&o.p&&(!e||a&32)&&Ue(o,i,r,r[5],e?ye(i,r[5],a,null):Pe(r[5]),null)},i(r){e||(R(o,r),e=!0)},o(r){F(o,r),e=!1},d(r){o&&o.d(r)}}}function Ft(t){let e,i,o,r=t[1]===t[2]&&qe(t);return{c(){e=g("div"),r&&r.c(),this.h()},l(a){e=D(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"id",t[2].id),w(e,"aria-labelledby",i=t[0][t[2].id]),w(e,"class","svelte-tabs__tab-panel svelte-epfyet"),w(e,"role","tabpanel")},m(a,s){$(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&R(r,1)):(r=qe(a),r.c(),R(r,1),r.m(e,null)):r&&(dt(),F(r,1,1,()=>{r=null}),pt()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&w(e,"aria-labelledby",i)},i(a){o||(R(r),o=!0)},o(a){F(r),o=!1},d(a){a&&m(e),r&&r.d()}}}function gt(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e;const n={id:et()},{registerPanel:c,selectedPanel:u,labeledBy:d}=Ze(Ve);return ve(t,u,h=>i(1,r=h)),ve(t,d,h=>i(0,o=h)),c(n),t.$$set=h=>{"$$scope"in h&&i(5,s=h.$$scope)},[o,r,n,u,d,s,a]}class te extends k{constructor(e){super(),G(this,e,gt,Ft,q,{})}}const Dt=["VERTEX_SHADER","FRAGMENT_SHADER"];function tt(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Le(e),e}function Le(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ne(t,e,i,o){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,o,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function me(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function Q(t,e,i,o,r){const a=[];for(let n=0;n<e.length;++n){const c=Dt[n]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,u=Ut(t,e[n],c,r);if(!u)throw"Can not create shader";a.push(u)}const s=Pt(t,a,i,o,r);if(!s)throw"Can not create program";return s}function Ut(t,e,i,o){const r=o||console.log,a=t.createShader(i);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+n+`
`+e.split(`
`).map((c,u)=>`${u+1}: ${c}`).join(`
`))),t.deleteShader(a),null}return a}function Pt(t,e,i,o,r){const a=r||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(c){t.attachShader(s,c)}),i&&i.forEach(function(c,u){t.bindAttribLocation(s,o?o[u]:u,c)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const c=t.getProgramInfoLog(s);return a("Error in program linking:"+c),t.deleteProgram(s),null}return s}function Y(t,e){e=e||1;const i=t.clientWidth*e|0,o=t.clientHeight*e|0;return t.width!==i||t.height!==o?(t.width=i,t.height=o,!0):!1}function yt(t){let e,i,o,r,a,s;return{c(){e=g("p"),i=P(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=B(),r=g("ul"),a=B(),s=g("canvas"),this.h()},l(n){e=D(n,"P",{});var c=U(e);i=y(c,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),c.forEach(m),o=S(n),r=D(n,"UL",{id:!0}),U(r).forEach(m),a=S(n),s=D(n,"CANVAS",{id:!0}),U(s).forEach(m),this.h()},h(){w(r,"id","result"),w(s,"id","canvas")},m(n,c){$(n,e,c),L(e,i),$(n,o,c),$(n,r,c),$(n,a,c),$(n,s,c)},p:N,i:N,o:N,d(n){n&&m(e),n&&m(o),n&&m(r),n&&m(a),n&&m(s)}}}function Lt(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Bt(t){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const n=s.getContext("webgl");if(!n)throw"Coulndt get context";const c=Q(n,[i,o]);if(!c)throw"Could not get program";const u=n.getAttribLocation(c,"position"),d=n.getUniformLocation(c,"srcTex"),h=n.getUniformLocation(c,"srcDimensions"),v=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,v),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(u),n.vertexAttribPointer(u,2,n.FLOAT,!1,0,0);const _=3,T=3,A=n.createTexture();n.bindTexture(n.TEXTURE_2D,A),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,_,T,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.useProgram(c),n.uniform1i(d,0),n.uniform2f(h,_,T),n.drawArrays(n.TRIANGLES,0,6);const E=new Uint8Array(3*3*4);n.readPixels(0,0,3,3,n.RGBA,n.UNSIGNED_BYTE,E);for(let f=0;f<3*3;++f)Lt(E[f*4])}return Z(e),[]}class St extends k{constructor(e){super(),G(this,e,Bt,yt,q,{})}}const Ct=Float32Array;function nt(t,e,i,o,r,a){const s=new Ct(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(i+o)/(i-o),s[14]=(r+a)/(r-a),s[15]=1,s}function It(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){w(e,"id","canvas"),de(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){$(i,e,o)},p:N,i:N,o:N,d(i){i&&m(e)}}}function Mt(t){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const n=s.getContext("webgl");if(!n)throw"gl undefined";if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=Q(n,[i,o]),h=Q(n,[r,a]);if(!d||!h)throw"Can not create programs";const v={position:n.getAttribLocation(d,"position"),positionTex:n.getUniformLocation(d,"positionTex"),velocityTex:n.getUniformLocation(d,"velocityTex"),texDimensions:n.getUniformLocation(d,"texDimensions"),canvasDimensions:n.getUniformLocation(d,"canvasDimensions"),deltaTime:n.getUniformLocation(d,"deltaTime")},_={id:n.getAttribLocation(h,"id"),positionTex:n.getUniformLocation(h,"positionTex"),texDimensions:n.getUniformLocation(h,"texDimensions"),matrix:n.getUniformLocation(h,"matrix")},T=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,T),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW);const A=300,E=20,f=A*E,x=new Array(f).fill(0).map((b,K)=>K),l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,new Float32Array(x),n.STATIC_DRAW),Y(n.canvas);const p=(b,K)=>(K===void 0&&(K=b,b=0),Math.random()*(K-b)+b),O=new Float32Array(x.map(b=>[p(s.width),p(s.height),0,0]).flat()),H=new Float32Array(x.map(b=>[p(-300,300),p(-300,300),0,0]).flat());function z(b,K,se,at){const ke=b.createTexture();return b.bindTexture(b.TEXTURE_2D,ke),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,se,at,0,b.RGBA,b.FLOAT,K),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),ke}const W=z(n,H,A,E),V=z(n,O,A,E),j=z(n,null,A,E);if(!V||!j)throw"Can not create position textures";function J(b,K){const se=b.createFramebuffer();return b.bindFramebuffer(b.FRAMEBUFFER,se),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,K,0),se}const ie=J(n,V),re=J(n,j);let Be={fb:ie,tex:V},Ae={fb:re,tex:j},We=0;function Ye(b){if(!n)return;b*=.001;const K=b-We;We=b,Y(n.canvas),n.bindFramebuffer(n.FRAMEBUFFER,Ae.fb),n.viewport(0,0,A,E),n.bindBuffer(n.ARRAY_BUFFER,T),n.enableVertexAttribArray(v.position),n.vertexAttribPointer(v.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,Be.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,W),n.useProgram(d),n.uniform1i(v.positionTex,0),n.uniform1i(v.velocityTex,1),n.uniform2f(v.texDimensions,A,E),n.uniform2f(v.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f(v.deltaTime,K),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,l),n.enableVertexAttribArray(_.id),n.vertexAttribPointer(_.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,Ae.tex),n.useProgram(h),n.uniform2f(_.texDimensions,A,A),n.uniform1i(_.positionTex,0),n.uniformMatrix4fv(_.matrix,!1,nt(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,f);{const se=Be;Be=Ae,Ae=se}requestAnimationFrame(Ye)}requestAnimationFrame(Ye)}return Z(()=>e()),[]}class Xt extends k{constructor(e){super(),G(this,e,Mt,It,q,{})}}const Ee=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Ot(t,e,i,o){const r=t*e,a=new Array(r).fill(0).map((c,u)=>u),s=new Float32Array(a.map(c=>[Ee(i),Ee(o),0,0]).flat()),n=new Float32Array(a.map(c=>[Ee(-300,300),Ee(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:n}}const Nt=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,zt=`precision highp float;

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

`,Vt=`  attribute float id;
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

`,Wt=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Yt(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){w(e,"id","canvas"),de(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){$(i,e,o)},p:N,i:N,o:N,d(i){i&&m(e)}}}function kt(t){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";Le(a);const s=Q(a,[Nt,zt]),n=Q(a,[Vt,Wt]),c={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},u={id:a.getAttribLocation(n,"id"),positionTex:a.getUniformLocation(n,"positionTex"),texDimensions:a.getUniformLocation(n,"texDimensions"),matrix:a.getUniformLocation(n,"matrix")},d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const h=300,v=20,{numParticles:_,ids:T,positions:A,velocities:E}=Ot(h,v,r.width,r.height),f=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,f),a.bufferData(a.ARRAY_BUFFER,new Float32Array(T),a.STATIC_DRAW),Y(a.canvas);const x=ne(a,E,h,v),l=ne(a,A,h,v),p=ne(a,null,h,v),O=me(a,l),H=me(a,p);let z={fb:O,tex:l},W={fb:H,tex:p},V=0;function j(J){if(!a||!d||!f)throw"Undefined params to render";J*=.001;const ie=J-V;V=J,Y(a.canvas),o(a,W,h,v,d,c,z,x,s,ie),i(a,h,f,u,W,n,_);{const re=z;z=W,W=re}requestAnimationFrame(j)}requestAnimationFrame(j)}const i=(r,a,s,n,c,u,d)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(n.id),r.vertexAttribPointer(n.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,c.tex),r.useProgram(u),r.uniform2f(n.texDimensions,a,a),r.uniform1i(n.positionTex,0),r.uniformMatrix4fv(n.matrix,!1,nt(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,d)},o=(r,a,s,n,c,u,d,h,v,_)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,n),r.bindBuffer(r.ARRAY_BUFFER,c),r.enableVertexAttribArray(u.position),r.vertexAttribPointer(u.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,d.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,h),r.useProgram(v),r.uniform1i(u.positionTex,0),r.uniform1i(u.velocityTex,1),r.uniform2f(u.texDimensions,s,n),r.uniform2f(u.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(u.deltaTime,_),r.drawArrays(r.TRIANGLES,0,6)};return Z(()=>e()),[]}class Gt extends k{constructor(e){super(),G(this,e,kt,Yt,q,{})}}const qt=`attribute vec2 a_position;

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
`,Ht=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function jt(t){let e,i,o,r,a,s,n,c,u,d,h,v;return{c(){e=g("p"),i=P(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=B(),n=g("canvas"),c=B(),u=g("button"),d=P("Add position"),this.h()},l(_){e=D(_,"P",{});var T=U(e);i=y(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=D(T,"CODE",{});var A=U(o);r=y(A,"requestAnimationFrame"),A.forEach(m),a=y(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(m),s=S(_),n=D(_,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(n).forEach(m),c=S(_),u=D(_,"BUTTON",{});var E=U(u);d=y(E,"Add position"),E.forEach(m),this.h()},h(){w(n,"id","canvas"),de(n,"background-color","black"),w(n,"width","800"),w(n,"height","600")},m(_,T){$(_,e,T),L(e,i),L(e,o),L(o,r),L(e,a),$(_,s,T),$(_,n,T),$(_,c,T),$(_,u,T),L(u,d),h||(v=De(u,"click",t[1]),h=!0)},p:N,i:N,o:N,d(_){_&&m(e),_&&m(s),_&&m(n),_&&m(c),_&&m(u),h=!1,v()}}}function Kt(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Le(s);const n=Q(s,[qt,Ht]);Y(s.canvas);const c=s.getAttribLocation(n,"a_position"),u=s.getUniformLocation(n,"u_resolution"),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function h(){if(!s)throw"Undefined params to render";for(let l=0;l<=e.length-2;l+=2)e[l]=(e[l]+Math.random()*2-1)%s.canvas.width,e[l+1]=(e[l+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),Y(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(n),s.uniform2f(u,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(c),s.bindBuffer(s.ARRAY_BUFFER,d);const v=2,_=s.FLOAT,T=!1,A=0,E=0;s.vertexAttribPointer(c,v,_,T,A,E);var f=s.POINTS,x=e.length/2;s.drawArrays(f,E,x),requestAnimationFrame(h)}requestAnimationFrame(h)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Z(()=>i()),[o,()=>o()]}class Qt extends k{constructor(e){super(),G(this,e,Kt,jt,q,{})}}const Jt=`attribute float id;
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
`,Zt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let pe,he;const en=t=>{he=Q(t,[Jt,Zt]),pe={idAttributeLocation:t.getAttribLocation(he,"id"),texDimensionsUniformLocation:t.getUniformLocation(he,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(he,"u_resolution")}},tn=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;Y(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(he),e.uniform2f(pe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(pe.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(pe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,n=e.FLOAT,c=!1,u=0,d=0;e.vertexAttribPointer(pe.idAttributeLocation,s,n,c,u,d);const h=e.POINTS,v=r.length;e.drawArrays(h,d,v)};function nn(t){let e,i,o,r,a,s,n;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture. In each "),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=B(),n=g("canvas"),this.h()},l(c){e=D(c,"P",{});var u=U(e);i=y(u,"Create an array of render-size positions. Store this array in a texture. In each "),o=D(u,"CODE",{});var d=U(o);r=y(d,"requestAnimationFrame"),d.forEach(m),a=y(u,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),u.forEach(m),s=S(c),n=D(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(n).forEach(m),this.h()},h(){w(n,"id","canvas"),de(n,"background-color","black"),w(n,"width",ot),w(n,"height",it)},m(c,u){$(c,e,u),L(e,i),L(e,o),L(o,r),L(e,a),$(c,s,u),$(c,n,u)},p:N,i:N,o:N,d(c){c&&m(e),c&&m(s),c&&m(n)}}}const ot=800,it=600;function on(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const o=i.getContext("webgl");if(!o)throw"gl undefined";Le(o),Y(o.canvas),en(o);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(n=>[Math.random()*ot,Math.random()*it,0,0]).flat();function s(){if(!o)throw"Undefined params to render";for(let c=0;c<=a.length-2;c+=2)a[c]=(a[c]+Math.random()*2-1)%o.canvas.width,a[c+1]=(a[c+1]+Math.random()*0+1)%o.canvas.height;const n=ne(o,new Float32Array(a),3,3);tn({gl:o,positionTex:n,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let rn=class extends k{constructor(e){super(),G(this,e,on,nn,q,{})}};const sn=`attribute float id;
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
`,an=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let _e,xe,Me;const cn=(t,e)=>{xe=Q(t,[sn,an]),_e={idAttributeLocation:t.getAttribLocation(xe,"id"),texDimensionsUniformLocation:t.getUniformLocation(xe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(xe,"u_resolution")},Me=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Me),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},fn=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;Y(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Me),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(xe),e.uniform2f(_e.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(_e.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(_e.idAttributeLocation);const a=1,s=e.FLOAT,n=!1,c=0,u=0;e.vertexAttribPointer(_e.idAttributeLocation,a,s,n,c,u),e.drawArrays(e.POINTS,u,r.length)};function un(t,e){const i=new Array(t).fill(0).map((a,s)=>s),o=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const ln=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,mn=`precision highp float;

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

`;let ae,ce,Xe,Se,Ce,He,je,Te,Re;const dn=(t,e)=>{const{positions:i,texDimensions:o}=e;ce=Q(t,[ln,mn]),ae={positionAttributeLocation:t.getAttribLocation(ce,"position"),positionTexLocation:t.getUniformLocation(ce,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(ce,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ce,"u_resolution")},Xe=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Xe),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Se=ne(t,new Float32Array(i),o.width,o.height),Ce=ne(t,null,o.width,o.height),He=me(t,Se),je=me(t,Ce),Te={fb:He,tex:Se},Re={fb:je,tex:Ce}},pn=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,Re.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Xe),e.enableVertexAttribArray(ae.positionAttributeLocation),e.vertexAttribPointer(ae.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Te.tex),e.useProgram(ce),e.uniform1i(ae.positionTexLocation,0),e.uniform2f(ae.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ae.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=Te;Te=Re,Re=o}return Te.tex};function hn(t){let e,i,o,r,a,s,n,c,u,d,h,v,_;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture."),o=B(),r=g("p"),a=P("Create 2 textures which will be used to update the positions with a shader. In each "),s=g("code"),n=P("requestAnimationFrame"),c=P(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),u=B(),d=g("p"),h=P("Finally switch the two textures to read and write in the updated textures"),v=B(),_=g("canvas"),this.h()},l(T){e=D(T,"P",{});var A=U(e);i=y(A,"Create an array of render-size positions. Store this array in a texture."),A.forEach(m),o=S(T),r=D(T,"P",{});var E=U(r);a=y(E,"Create 2 textures which will be used to update the positions with a shader. In each "),s=D(E,"CODE",{});var f=U(s);n=y(f,"requestAnimationFrame"),f.forEach(m),c=y(E,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),E.forEach(m),u=S(T),d=D(T,"P",{});var x=U(d);h=y(x,"Finally switch the two textures to read and write in the updated textures"),x.forEach(m),v=S(T),_=D(T,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(_).forEach(m),this.h()},h(){w(_,"id","canvas"),de(_,"background-color","black"),w(_,"width",rt),w(_,"height",st)},m(T,A){$(T,e,A),L(e,i),$(T,o,A),$(T,r,A),L(r,a),L(r,s),L(s,n),L(r,c),$(T,u,A),$(T,d,A),L(d,h),$(T,v,A),$(T,_,A)},p:N,i:N,o:N,d(T){T&&m(e),T&&m(o),T&&m(r),T&&m(u),T&&m(d),T&&m(v),T&&m(_)}}}const rt=800,st=600;function _n(t){function e(){const i=tt();Y(i.canvas);const{ids:o,positions:r,texDimensions:a}=un(100,{width:rt,height:st});cn(i,o),dn(i,{positions:r,texDimensions:a});function s(){Y(i.canvas);const n=pn({gl:i,texDimensions:a});fn({gl:i,positionTex:n,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let xn=class extends k{constructor(e){super(),G(this,e,_n,hn,q,{})}};const Tn=`attribute float id;
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
`;let oe,fe,Oe,Ne;const vn=(t,e)=>{const{ids:i,colors:o}=e;fe=Q(t,[Tn,$n]),oe={idAttributeLocation:t.getAttribLocation(fe,"id"),colorAttributeLocation:t.getAttribLocation(fe,"color"),texDimensionsUniformLocation:t.getUniformLocation(fe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(fe,"u_resolution")},Oe=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Oe),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Ne=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ne),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW)},An=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t,a=1,s=e.FLOAT,n=!1,c=0,u=0;Y(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Oe),e.vertexAttribPointer(oe.idAttributeLocation,a,s,n,c,u),e.enableVertexAttribArray(oe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Ne),e.vertexAttribPointer(oe.colorAttributeLocation,a,s,n,c,u),e.enableVertexAttribArray(oe.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(fe),e.uniform2f(oe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(oe.texDimensionsUniformLocation,o.width,o.height),e.drawArrays(e.POINTS,u,r.length)};function bn(t,e){const i=t.width*t.height,o=new Array(i).fill(0).map((s,n)=>n),r=new Array(i).fill(0).map(s=>Math.floor(Math.random()*4)),a=o.map(s=>{{const{x:n,y:c}=En(e,s,o.length,{x:1,y:1});return[n,c,0,0]}}).flat();return{ids:o,positions:a,texDimensions:t,colors:r}}const En=(t,e,i,o)=>{const r=wn(e,0,i,0,1,!0)*2*Math.PI,a=o.x,n=Math.cos(a*r)*200+t.width/2,c=o.y,d=Math.sin(c*r)*200+t.height/2;return{x:n,y:d}},wn=function(t,e,i,o,r,a){const s=(t-e)/(i-e)*(r-o)+o;return a?o<r?Ke(s,o,r):Ke(s,r,o):s},Ke=function(t,e,i){return Math.max(Math.min(t,i),e)},Rn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Fn=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;

// We need to define the texture dimensions in constants
// because loops work only with constant values
const float texWidth = 100.0;
const float texHeight = 100.0;

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

`;let ue,le,ze,we,Ie,Qe,Je,$e,Fe;const gn=(t,e)=>{const{positions:i,texDimensions:o}=e;return le=Q(t,[Rn,Fn]),ue={positionAttributeLocation:t.getAttribLocation(le,"position"),positionTexLocation:t.getUniformLocation(le,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(le,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(le,"u_resolution")},ze=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ze),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),we=ne(t,new Float32Array(i),o.width,o.height),Ie=ne(t,null,o.width,o.height),Qe=me(t,we),Je=me(t,Ie),$e={fb:Qe,tex:we},Fe={fb:Je,tex:Ie},we},Dn=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,Fe.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,ze),e.enableVertexAttribArray(ue.positionAttributeLocation),e.vertexAttribPointer(ue.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,$e.tex),e.useProgram(le),e.uniform1i(ue.positionTexLocation,0),e.uniform2f(ue.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ue.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=$e;$e=Fe,Fe=o}return $e.tex};function Un(t){let e,i,o,r,a,s,n,c,u,d,h=t[0]?"Play":"Pause",v,_,T,A,E=t[2].width*t[2].height+"",f,x,l;return{c(){e=g("p"),i=P("Same principle with a shader to update positions and a shader to draw particles."),o=B(),r=g("p"),a=P(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=B(),n=g("canvas"),c=B(),u=g("div"),d=g("button"),v=P(h),_=B(),T=g("span"),A=P("particles: "),f=P(E),this.h()},l(p){e=D(p,"P",{});var O=U(e);i=y(O,"Same principle with a shader to update positions and a shader to draw particles."),O.forEach(m),o=S(p),r=D(p,"P",{});var H=U(r);a=y(H,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),H.forEach(m),s=S(p),n=D(p,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(n).forEach(m),c=S(p),u=D(p,"DIV",{});var z=U(u);d=D(z,"BUTTON",{});var W=U(d);v=y(W,h),W.forEach(m),_=S(z),T=D(z,"SPAN",{});var V=U(T);A=y(V,"particles: "),f=y(V,E),V.forEach(m),z.forEach(m),this.h()},h(){w(n,"id","canvas"),de(n,"background-color","black"),w(n,"width",t[1].width),w(n,"height",t[1].height)},m(p,O){$(p,e,O),L(e,i),$(p,o,O),$(p,r,O),L(r,a),$(p,s,O),$(p,n,O),$(p,c,O),$(p,u,O),L(u,d),L(d,v),L(u,_),L(u,T),L(T,A),L(T,f),x||(l=De(d,"click",t[3]),x=!0)},p(p,[O]){O&1&&h!==(h=p[0]?"Play":"Pause")&&ht(v,h)},i:N,o:N,d(p){p&&m(e),p&&m(o),p&&m(r),p&&m(s),p&&m(n),p&&m(c),p&&m(u),x=!1,l()}}}function Pn(t,e,i){const o={width:800,height:600},r={width:100,height:100};let a=!0;function s(){const c=tt();Y(c.canvas);const{ids:u,positions:d,colors:h}=bn(r,{width:o.width,height:o.height});vn(c,{ids:u,colors:h,texDimensions:r});let v=gn(c,{positions:d,texDimensions:r});function _(){if(Y(c.canvas),!a)for(let T=0;T<10;T++)v=Dn({gl:c,texDimensions:r});An({gl:c,positionTex:v,textureDimension:r,ids:u}),requestAnimationFrame(_)}requestAnimationFrame(_)}return Z(()=>s()),[a,o,r,()=>i(0,a=!a)]}class yn extends k{constructor(e){super(),G(this,e,Pn,Un,q,{})}}function Ln(t){let e;return{c(){e=P("About")},l(i){e=y(i,"About")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function Bn(t){let e;return{c(){e=P("Simple counter")},l(i){e=y(i,"Simple counter")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function Sn(t){let e;return{c(){e=P("Particles")},l(i){e=y(i,"Particles")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function Cn(t){let e;return{c(){e=P("Particles 2")},l(i){e=y(i,"Particles 2")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function In(t){let e;return{c(){e=P("Positions Buffer")},l(i){e=y(i,"Positions Buffer")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function Mn(t){let e;return{c(){e=P("Positions Texture")},l(i){e=y(i,"Positions Texture")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function Xn(t){let e;return{c(){e=P("Positions Texture Draw & Update")},l(i){e=y(i,"Positions Texture Draw & Update")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function On(t){let e;return{c(){e=P("Positions Texture Advanced shader")},l(i){e=y(i,"Positions Texture Advanced shader")},m(i,o){$(i,e,o)},d(i){i&&m(e)}}}function Nn(t){let e,i,o,r,a,s,n,c,u,d,h,v,_,T,A,E;return e=new ee({props:{$$slots:{default:[Ln]},$$scope:{ctx:t}}}),o=new ee({props:{$$slots:{default:[Bn]},$$scope:{ctx:t}}}),a=new ee({props:{$$slots:{default:[Sn]},$$scope:{ctx:t}}}),n=new ee({props:{$$slots:{default:[Cn]},$$scope:{ctx:t}}}),u=new ee({props:{$$slots:{default:[In]},$$scope:{ctx:t}}}),h=new ee({props:{$$slots:{default:[Mn]},$$scope:{ctx:t}}}),_=new ee({props:{$$slots:{default:[Xn]},$$scope:{ctx:t}}}),A=new ee({props:{$$slots:{default:[On]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment),i=B(),C(o.$$.fragment),r=B(),C(a.$$.fragment),s=B(),C(n.$$.fragment),c=B(),C(u.$$.fragment),d=B(),C(h.$$.fragment),v=B(),C(_.$$.fragment),T=B(),C(A.$$.fragment)},l(f){I(e.$$.fragment,f),i=S(f),I(o.$$.fragment,f),r=S(f),I(a.$$.fragment,f),s=S(f),I(n.$$.fragment,f),c=S(f),I(u.$$.fragment,f),d=S(f),I(h.$$.fragment,f),v=S(f),I(_.$$.fragment,f),T=S(f),I(A.$$.fragment,f)},m(f,x){M(e,f,x),$(f,i,x),M(o,f,x),$(f,r,x),M(a,f,x),$(f,s,x),M(n,f,x),$(f,c,x),M(u,f,x),$(f,d,x),M(h,f,x),$(f,v,x),M(_,f,x),$(f,T,x),M(A,f,x),E=!0},p(f,x){const l={};x&1&&(l.$$scope={dirty:x,ctx:f}),e.$set(l);const p={};x&1&&(p.$$scope={dirty:x,ctx:f}),o.$set(p);const O={};x&1&&(O.$$scope={dirty:x,ctx:f}),a.$set(O);const H={};x&1&&(H.$$scope={dirty:x,ctx:f}),n.$set(H);const z={};x&1&&(z.$$scope={dirty:x,ctx:f}),u.$set(z);const W={};x&1&&(W.$$scope={dirty:x,ctx:f}),h.$set(W);const V={};x&1&&(V.$$scope={dirty:x,ctx:f}),_.$set(V);const j={};x&1&&(j.$$scope={dirty:x,ctx:f}),A.$set(j)},i(f){E||(R(e.$$.fragment,f),R(o.$$.fragment,f),R(a.$$.fragment,f),R(n.$$.fragment,f),R(u.$$.fragment,f),R(h.$$.fragment,f),R(_.$$.fragment,f),R(A.$$.fragment,f),E=!0)},o(f){F(e.$$.fragment,f),F(o.$$.fragment,f),F(a.$$.fragment,f),F(n.$$.fragment,f),F(u.$$.fragment,f),F(h.$$.fragment,f),F(_.$$.fragment,f),F(A.$$.fragment,f),E=!1},d(f){X(e,f),f&&m(i),X(o,f),f&&m(r),X(a,f),f&&m(s),X(n,f),f&&m(c),X(u,f),f&&m(d),X(h,f),f&&m(v),X(_,f),f&&m(T),X(A,f)}}}function zn(t){let e,i,o,r,a,s,n,c;return{c(){e=g("p"),i=P("This page is an experiment to run simulation on the GPU."),o=B(),r=g("p"),a=P(`I am copying code from
                `),s=g("a"),n=P("this site"),c=P(`
                and adding basic typings for typescript.`),this.h()},l(u){e=D(u,"P",{});var d=U(e);i=y(d,"This page is an experiment to run simulation on the GPU."),d.forEach(m),o=S(u),r=D(u,"P",{});var h=U(r);a=y(h,`I am copying code from
                `),s=D(h,"A",{target:!0,href:!0});var v=U(s);n=y(v,"this site"),v.forEach(m),c=y(h,`
                and adding basic typings for typescript.`),h.forEach(m),this.h()},h(){w(s,"target","none"),w(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(u,d){$(u,e,d),L(e,i),$(u,o,d),$(u,r,d),L(r,a),L(r,s),L(s,n),L(r,c)},p:N,d(u){u&&m(e),u&&m(o),u&&m(r)}}}function Vn(t){let e,i;return e=new St({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Wn(t){let e,i;return e=new Xt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Yn(t){let e,i;return e=new Gt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function kn(t){let e,i;return e=new Qt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Gn(t){let e,i;return e=new rn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function qn(t){let e,i;return e=new xn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Hn(t){let e,i;return e=new yn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function jn(t){let e,i,o,r,a,s,n,c,u,d,h,v,_,T,A,E,f,x;return e=new Rt({props:{$$slots:{default:[Nn]},$$scope:{ctx:t}}}),o=new te({props:{$$slots:{default:[zn]},$$scope:{ctx:t}}}),a=new te({props:{$$slots:{default:[Vn]},$$scope:{ctx:t}}}),n=new te({props:{$$slots:{default:[Wn]},$$scope:{ctx:t}}}),u=new te({props:{$$slots:{default:[Yn]},$$scope:{ctx:t}}}),h=new te({props:{$$slots:{default:[kn]},$$scope:{ctx:t}}}),_=new te({props:{$$slots:{default:[Gn]},$$scope:{ctx:t}}}),A=new te({props:{$$slots:{default:[qn]},$$scope:{ctx:t}}}),f=new te({props:{$$slots:{default:[Hn]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment),i=B(),C(o.$$.fragment),r=B(),C(a.$$.fragment),s=B(),C(n.$$.fragment),c=B(),C(u.$$.fragment),d=B(),C(h.$$.fragment),v=B(),C(_.$$.fragment),T=B(),C(A.$$.fragment),E=B(),C(f.$$.fragment)},l(l){I(e.$$.fragment,l),i=S(l),I(o.$$.fragment,l),r=S(l),I(a.$$.fragment,l),s=S(l),I(n.$$.fragment,l),c=S(l),I(u.$$.fragment,l),d=S(l),I(h.$$.fragment,l),v=S(l),I(_.$$.fragment,l),T=S(l),I(A.$$.fragment,l),E=S(l),I(f.$$.fragment,l)},m(l,p){M(e,l,p),$(l,i,p),M(o,l,p),$(l,r,p),M(a,l,p),$(l,s,p),M(n,l,p),$(l,c,p),M(u,l,p),$(l,d,p),M(h,l,p),$(l,v,p),M(_,l,p),$(l,T,p),M(A,l,p),$(l,E,p),M(f,l,p),x=!0},p(l,p){const O={};p&1&&(O.$$scope={dirty:p,ctx:l}),e.$set(O);const H={};p&1&&(H.$$scope={dirty:p,ctx:l}),o.$set(H);const z={};p&1&&(z.$$scope={dirty:p,ctx:l}),a.$set(z);const W={};p&1&&(W.$$scope={dirty:p,ctx:l}),n.$set(W);const V={};p&1&&(V.$$scope={dirty:p,ctx:l}),u.$set(V);const j={};p&1&&(j.$$scope={dirty:p,ctx:l}),h.$set(j);const J={};p&1&&(J.$$scope={dirty:p,ctx:l}),_.$set(J);const ie={};p&1&&(ie.$$scope={dirty:p,ctx:l}),A.$set(ie);const re={};p&1&&(re.$$scope={dirty:p,ctx:l}),f.$set(re)},i(l){x||(R(e.$$.fragment,l),R(o.$$.fragment,l),R(a.$$.fragment,l),R(n.$$.fragment,l),R(u.$$.fragment,l),R(h.$$.fragment,l),R(_.$$.fragment,l),R(A.$$.fragment,l),R(f.$$.fragment,l),x=!0)},o(l){F(e.$$.fragment,l),F(o.$$.fragment,l),F(a.$$.fragment,l),F(n.$$.fragment,l),F(u.$$.fragment,l),F(h.$$.fragment,l),F(_.$$.fragment,l),F(A.$$.fragment,l),F(f.$$.fragment,l),x=!1},d(l){X(e,l),l&&m(i),X(o,l),l&&m(r),X(a,l),l&&m(s),X(n,l),l&&m(c),X(u,l),l&&m(d),X(h,l),l&&m(v),X(_,l),l&&m(T),X(A,l),l&&m(E),X(f,l)}}}function Kn(t){let e,i,o;return i=new vt({props:{$$slots:{default:[jn]},$$scope:{ctx:t}}}),{c(){e=g("div"),C(i.$$.fragment)},l(r){e=D(r,"DIV",{});var a=U(e);I(i.$$.fragment,a),a.forEach(m)},m(r,a){$(r,e,a),M(i,e,null),o=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),i.$set(s)},i(r){o||(R(i.$$.fragment,r),o=!0)},o(r){F(i.$$.fragment,r),o=!1},d(r){r&&m(e),X(i)}}}class Qn extends k{constructor(e){super(),G(this,e,null,Kn,q,{})}}function Jn(t){let e,i;return e=new Qn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){M(e,o,r),i=!0},p:N,i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}class oo extends k{constructor(e){super(),G(this,e,null,Jn,q,{})}}export{oo as default};
