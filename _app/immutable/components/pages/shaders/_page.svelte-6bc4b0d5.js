import{S as V,i as G,s as W,C as Fe,k as g,l as D,m as U,h as m,n as w,b as T,K as Ne,E as ge,F as De,G as Ue,f as R,t as F,H as ve,R as ct,o as Z,j as ft,Q as ut,T as Ye,U as Qe,A as lt,V as mt,g as dt,d as pt,q as P,a as L,r as y,c as B,D as S,B as O,p as le,w as C,x as I,y as X,z as M}from"../../../chunks/index-ff9e742a.js";import{w as be}from"../../../chunks/index-84a8d4d9.js";let ht=1;function Je(){return`svelte-tabs-${ht++}`}function _t(n){let e,i,o,r;const a=n[4].default,s=Fe(a,n,n[3],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(t){e=D(t,"DIV",{class:!0});var f=U(e);s&&s.l(f),f.forEach(m),this.h()},h(){w(e,"class","svelte-tabs")},m(t,f){T(t,e,f),s&&s.m(e,null),i=!0,o||(r=Ne(e,"keydown",n[1]),o=!0)},p(t,[f]){s&&s.p&&(!i||f&8)&&ge(s,a,t,t[3],i?Ue(a,t[3],f,null):De(t[3]),null)},i(t){i||(R(s,t),i=!0)},o(t){F(s,t),i=!1},d(t){t&&m(e),s&&s.d(t),o=!1,r()}}}const ze={};function xt(n,e,i){const o=n.indexOf(e);n.splice(o,1),i.update(r=>r===e?n[o]||n[n.length-1]:r)}function $t(n,e,i){let o,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const t=[],f=[],u=[],p=be({}),x=be({}),v=be(null);ve(n,v,c=>i(5,o=c));const h=be(null);function d(c,_,l){c.push(_),l.update(A=>A||_),ut(()=>xt(c,_,l))}function $(c){const _=f.indexOf(c);v.set(c),h.set(u[_])}ct(ze,{registerTab(c){d(f,c,v)},registerTabElement(c){t.push(c)},registerPanel(c){d(u,c,h)},selectTab:$,selectedTab:v,selectedPanel:h,controls:p,labeledBy:x}),Z(()=>{$(f[s])}),ft(()=>{for(let c=0;c<f.length;c++)p.update(_=>({..._,[f[c].id]:u[c].id})),x.update(_=>({..._,[u[c].id]:f[c].id}))});async function E(c){if(c.target.classList.contains("svelte-tabs__tab")){let _=f.indexOf(o);switch(c.key){case"ArrowRight":_+=1,_>f.length-1&&(_=0),$(f[_]),t[_].focus();break;case"ArrowLeft":_-=1,_<0&&(_=f.length-1),$(f[_]),t[_].focus()}}}return n.$$set=c=>{"initialSelectedIndex"in c&&i(2,s=c.initialSelectedIndex),"$$scope"in c&&i(3,a=c.$$scope)},[v,E,s,a,r]}class Tt extends V{constructor(e){super(),G(this,e,$t,_t,W,{initialSelectedIndex:2})}}function vt(n){let e,i,o,r,a,s;const t=n[9].default,f=Fe(t,n,n[8],null);return{c(){e=g("li"),f&&f.c(),this.h()},l(u){e=D(u,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var p=U(e);f&&f.l(p),p.forEach(m),this.h()},h(){w(e,"role","tab"),w(e,"id",n[3].id),w(e,"aria-controls",i=n[2][n[3].id]),w(e,"aria-selected",n[1]),w(e,"tabindex",o=n[1]?0:-1),w(e,"class","svelte-tabs__tab svelte-1fbofsd"),Ye(e,"svelte-tabs__selected",n[1])},m(u,p){T(u,e,p),f&&f.m(e,null),n[10](e),r=!0,a||(s=Ne(e,"click",n[11]),a=!0)},p(u,[p]){f&&f.p&&(!r||p&256)&&ge(f,t,u,u[8],r?Ue(t,u[8],p,null):De(u[8]),null),(!r||p&4&&i!==(i=u[2][u[3].id]))&&w(e,"aria-controls",i),(!r||p&2)&&w(e,"aria-selected",u[1]),(!r||p&2&&o!==(o=u[1]?0:-1))&&w(e,"tabindex",o),(!r||p&2)&&Ye(e,"svelte-tabs__selected",u[1])},i(u){r||(R(f,u),r=!0)},o(u){F(f,u),r=!1},d(u){u&&m(e),f&&f.d(u),n[10](null),a=!1,s()}}}function At(n,e,i){let o,r,{$$slots:a={},$$scope:s}=e,t;const f={id:Je()},{registerTab:u,registerTabElement:p,selectTab:x,selectedTab:v,controls:h}=Qe(ze);ve(n,v,c=>i(7,o=c)),ve(n,h,c=>i(2,r=c));let d;u(f),Z(async()=>{await lt(),p(t)});function $(c){mt[c?"unshift":"push"](()=>{t=c,i(0,t)})}const E=()=>x(f);return n.$$set=c=>{"$$scope"in c&&i(8,s=c.$$scope)},n.$$.update=()=>{n.$$.dirty&128&&i(1,d=o===f)},[t,d,r,f,x,v,h,o,s,a,$,E]}class ee extends V{constructor(e){super(),G(this,e,At,vt,W,{})}}function bt(n){let e,i;const o=n[1].default,r=Fe(o,n,n[0],null);return{c(){e=g("ul"),r&&r.c(),this.h()},l(a){e=D(a,"UL",{role:!0,class:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"role","tablist"),w(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){T(a,e,s),r&&r.m(e,null),i=!0},p(a,[s]){r&&r.p&&(!i||s&1)&&ge(r,o,a,a[0],i?Ue(o,a[0],s,null):De(a[0]),null)},i(a){i||(R(r,a),i=!0)},o(a){F(r,a),i=!1},d(a){a&&m(e),r&&r.d(a)}}}function Et(n,e,i){let{$$slots:o={},$$scope:r}=e;return n.$$set=a=>{"$$scope"in a&&i(0,r=a.$$scope)},[r,o]}class wt extends V{constructor(e){super(),G(this,e,Et,bt,W,{})}}function ke(n){let e;const i=n[6].default,o=Fe(i,n,n[5],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,a){o&&o.m(r,a),e=!0},p(r,a){o&&o.p&&(!e||a&32)&&ge(o,i,r,r[5],e?Ue(i,r[5],a,null):De(r[5]),null)},i(r){e||(R(o,r),e=!0)},o(r){F(o,r),e=!1},d(r){o&&o.d(r)}}}function Rt(n){let e,i,o,r=n[1]===n[2]&&ke(n);return{c(){e=g("div"),r&&r.c(),this.h()},l(a){e=D(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"id",n[2].id),w(e,"aria-labelledby",i=n[0][n[2].id]),w(e,"class","svelte-tabs__tab-panel svelte-epfyet"),w(e,"role","tabpanel")},m(a,s){T(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&R(r,1)):(r=ke(a),r.c(),R(r,1),r.m(e,null)):r&&(dt(),F(r,1,1,()=>{r=null}),pt()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&w(e,"aria-labelledby",i)},i(a){o||(R(r),o=!0)},o(a){F(r),o=!1},d(a){a&&m(e),r&&r.d()}}}function Ft(n,e,i){let o,r,{$$slots:a={},$$scope:s}=e;const t={id:Je()},{registerPanel:f,selectedPanel:u,labeledBy:p}=Qe(ze);return ve(n,u,x=>i(1,r=x)),ve(n,p,x=>i(0,o=x)),f(t),n.$$set=x=>{"$$scope"in x&&i(5,s=x.$$scope)},[o,r,t,u,p,s,a]}class te extends V{constructor(e){super(),G(this,e,Ft,Rt,W,{})}}const gt=["VERTEX_SHADER","FRAGMENT_SHADER"];function Ze(){const n=document.getElementById("canvas");if(!n)throw"canvas undefined";const e=n.getContext("webgl");if(!e)throw"gl undefined";return Pe(e),e}function Pe(n){if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ne(n,e,i,o){const r=n.createTexture();if(!r)throw"Can not create texture";return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,i,o,0,n.RGBA,n.FLOAT,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}function ue(n,e){const i=n.createFramebuffer();if(!i)throw"Can not create frame buffer";return n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0),i}function j(n,e,i,o,r){const a=[];for(let t=0;t<e.length;++t){const f=gt[t]==="VERTEX_SHADER"?n.VERTEX_SHADER:n.FRAGMENT_SHADER,u=Dt(n,e[t],f,r);if(!u)throw"Can not create shader";a.push(u)}const s=Ut(n,a,i,o,r);if(!s)throw"Can not create program";return s}function Dt(n,e,i,o){const r=o||console.log,a=n.createShader(i);if(!a)throw"Could not load shader";if(n.shaderSource(a,e),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS)){const t=n.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+t+`
`+e.split(`
`).map((f,u)=>`${u+1}: ${f}`).join(`
`))),n.deleteShader(a),null}return a}function Ut(n,e,i,o,r){const a=r||console.log,s=n.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(f){n.attachShader(s,f)}),i&&i.forEach(function(f,u){n.bindAttribLocation(s,o?o[u]:u,f)}),n.linkProgram(s),!n.getProgramParameter(s,n.LINK_STATUS)){const f=n.getProgramInfoLog(s);return a("Error in program linking:"+f),n.deleteProgram(s),null}return s}function N(n,e){e=e||1;const i=n.clientWidth*e|0,o=n.clientHeight*e|0;return n.width!==i||n.height!==o?(n.width=i,n.height=o,!0):!1}function Pt(n){let e,i,o,r,a,s;return{c(){e=g("p"),i=P(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=L(),r=g("ul"),a=L(),s=g("canvas"),this.h()},l(t){e=D(t,"P",{});var f=U(e);i=y(f,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),f.forEach(m),o=B(t),r=D(t,"UL",{id:!0}),U(r).forEach(m),a=B(t),s=D(t,"CANVAS",{id:!0}),U(s).forEach(m),this.h()},h(){w(r,"id","result"),w(s,"id","canvas")},m(t,f){T(t,e,f),S(e,i),T(t,o,f),T(t,r,f),T(t,a,f),T(t,s,f)},p:O,i:O,o:O,d(t){t&&m(e),t&&m(o),t&&m(r),t&&m(a),t&&m(s)}}}function yt(n){const e=document.createElement("li");e.textContent=n.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Lt(n){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const t=s.getContext("webgl");if(!t)throw"Coulndt get context";const f=j(t,[i,o]);if(!f)throw"Could not get program";const u=t.getAttribLocation(f,"position"),p=t.getUniformLocation(f,"srcTex"),x=t.getUniformLocation(f,"srcDimensions"),v=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,v),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0);const h=3,d=3,$=t.createTexture();t.bindTexture(t.TEXTURE_2D,$),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,h,d,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(f),t.uniform1i(p,0),t.uniform2f(x,h,d),t.drawArrays(t.TRIANGLES,0,6);const E=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,E);for(let c=0;c<3*3;++c)yt(E[c*4])}return Z(e),[]}class Bt extends V{constructor(e){super(),G(this,e,Lt,Pt,W,{})}}const St=Float32Array;function et(n,e,i,o,r,a){const s=new St(16);return s[0]=2/(e-n),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(n+e)/(n-e),s[13]=(i+o)/(i-o),s[14]=(r+a)/(r-a),s[15]=1,s}function Ct(n){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){w(e,"id","canvas"),le(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){T(i,e,o)},p:O,i:O,o:O,d(i){i&&m(e)}}}function It(n){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const t=s.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const p=j(t,[i,o]),x=j(t,[r,a]);if(!p||!x)throw"Can not create programs";const v={position:t.getAttribLocation(p,"position"),positionTex:t.getUniformLocation(p,"positionTex"),velocityTex:t.getUniformLocation(p,"velocityTex"),texDimensions:t.getUniformLocation(p,"texDimensions"),canvasDimensions:t.getUniformLocation(p,"canvasDimensions"),deltaTime:t.getUniformLocation(p,"deltaTime")},h={id:t.getAttribLocation(x,"id"),positionTex:t.getUniformLocation(x,"positionTex"),texDimensions:t.getUniformLocation(x,"texDimensions"),matrix:t.getUniformLocation(x,"matrix")},d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const $=300,E=20,c=$*E,_=new Array(c).fill(0).map((b,H)=>H),l=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,l),t.bufferData(t.ARRAY_BUFFER,new Float32Array(_),t.STATIC_DRAW),N(t.canvas);const A=(b,H)=>(H===void 0&&(H=b,b=0),Math.random()*(H-b)+b),K=new Float32Array(_.map(b=>[A(s.width),A(s.height),0,0]).flat()),Q=new Float32Array(_.map(b=>[A(-300,300),A(-300,300),0,0]).flat());function z(b,H,re,at){const We=b.createTexture();return b.bindTexture(b.TEXTURE_2D,We),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,re,at,0,b.RGBA,b.FLOAT,H),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),We}const Y=z(t,Q,$,E),k=z(t,K,$,E),q=z(t,null,$,E);if(!k||!q)throw"Can not create position textures";function J(b,H){const re=b.createFramebuffer();return b.bindFramebuffer(b.FRAMEBUFFER,re),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,H,0),re}const oe=J(t,k),ie=J(t,q);let ye={fb:oe,tex:k},Ae={fb:ie,tex:q},Ve=0;function Ge(b){if(!t)return;b*=.001;const H=b-Ve;Ve=b,N(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,Ae.fb),t.viewport(0,0,$,E),t.bindBuffer(t.ARRAY_BUFFER,d),t.enableVertexAttribArray(v.position),t.vertexAttribPointer(v.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ye.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,Y),t.useProgram(p),t.uniform1i(v.positionTex,0),t.uniform1i(v.velocityTex,1),t.uniform2f(v.texDimensions,$,E),t.uniform2f(v.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(v.deltaTime,H),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,l),t.enableVertexAttribArray(h.id),t.vertexAttribPointer(h.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ae.tex),t.useProgram(x),t.uniform2f(h.texDimensions,$,$),t.uniform1i(h.positionTex,0),t.uniformMatrix4fv(h.matrix,!1,et(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,c);{const re=ye;ye=Ae,Ae=re}requestAnimationFrame(Ge)}requestAnimationFrame(Ge)}return Z(()=>e()),[]}class Xt extends V{constructor(e){super(),G(this,e,It,Ct,W,{})}}const Ee=(n,e)=>(e===void 0&&(e=n,n=0),Math.random()*(e-n)+n);function Mt(n,e,i,o){const r=n*e,a=new Array(r).fill(0).map((f,u)=>u),s=new Float32Array(a.map(f=>[Ee(i),Ee(o),0,0]).flat()),t=new Float32Array(a.map(f=>[Ee(-300,300),Ee(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:t}}const Ot=`attribute vec4 position;
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

`;function Gt(n){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){w(e,"id","canvas"),le(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){T(i,e,o)},p:O,i:O,o:O,d(i){i&&m(e)}}}function Wt(n){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";Pe(a);const s=j(a,[Ot,Nt]),t=j(a,[zt,Vt]),f={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},u={id:a.getAttribLocation(t,"id"),positionTex:a.getUniformLocation(t,"positionTex"),texDimensions:a.getUniformLocation(t,"texDimensions"),matrix:a.getUniformLocation(t,"matrix")},p=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,p),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const x=300,v=20,{numParticles:h,ids:d,positions:$,velocities:E}=Mt(x,v,r.width,r.height),c=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array(d),a.STATIC_DRAW),N(a.canvas);const _=ne(a,E,x,v),l=ne(a,$,x,v),A=ne(a,null,x,v),K=ue(a,l),Q=ue(a,A);let z={fb:K,tex:l},Y={fb:Q,tex:A},k=0;function q(J){if(!a||!p||!c)throw"Undefined params to render";J*=.001;const oe=J-k;k=J,N(a.canvas),o(a,Y,x,v,p,f,z,_,s,oe),i(a,x,c,u,Y,t,h);{const ie=z;z=Y,Y=ie}requestAnimationFrame(q)}requestAnimationFrame(q)}const i=(r,a,s,t,f,u,p)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(t.id),r.vertexAttribPointer(t.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,f.tex),r.useProgram(u),r.uniform2f(t.texDimensions,a,a),r.uniform1i(t.positionTex,0),r.uniformMatrix4fv(t.matrix,!1,et(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,p)},o=(r,a,s,t,f,u,p,x,v,h)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,t),r.bindBuffer(r.ARRAY_BUFFER,f),r.enableVertexAttribArray(u.position),r.vertexAttribPointer(u.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,p.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,x),r.useProgram(v),r.uniform1i(u.positionTex,0),r.uniform1i(u.velocityTex,1),r.uniform2f(u.texDimensions,s,t),r.uniform2f(u.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(u.deltaTime,h),r.drawArrays(r.TRIANGLES,0,6)};return Z(()=>e()),[]}class Yt extends V{constructor(e){super(),G(this,e,Wt,Gt,W,{})}}const kt=`attribute vec2 a_position;

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
`;function Ht(n){let e,i,o,r,a,s,t,f,u,p,x,v;return{c(){e=g("p"),i=P(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=L(),t=g("canvas"),f=L(),u=g("button"),p=P("Add position"),this.h()},l(h){e=D(h,"P",{});var d=U(e);i=y(d,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=D(d,"CODE",{});var $=U(o);r=y($,"requestAnimationFrame"),$.forEach(m),a=y(d,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),d.forEach(m),s=B(h),t=D(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(t).forEach(m),f=B(h),u=D(h,"BUTTON",{});var E=U(u);p=y(E,"Add position"),E.forEach(m),this.h()},h(){w(t,"id","canvas"),le(t,"background-color","black"),w(t,"width","800"),w(t,"height","600")},m(h,d){T(h,e,d),S(e,i),S(e,o),S(o,r),S(e,a),T(h,s,d),T(h,t,d),T(h,f,d),T(h,u,d),S(u,p),x||(v=Ne(u,"click",n[1]),x=!0)},p:O,i:O,o:O,d(h){h&&m(e),h&&m(s),h&&m(t),h&&m(f),h&&m(u),x=!1,v()}}}function jt(n){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Pe(s);const t=j(s,[kt,qt]);N(s.canvas);const f=s.getAttribLocation(t,"a_position"),u=s.getUniformLocation(t,"u_resolution"),p=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,p),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function x(){if(!s)throw"Undefined params to render";for(let l=0;l<=e.length-2;l+=2)e[l]=(e[l]+Math.random()*2-1)%s.canvas.width,e[l+1]=(e[l+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),N(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(t),s.uniform2f(u,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(f),s.bindBuffer(s.ARRAY_BUFFER,p);const v=2,h=s.FLOAT,d=!1,$=0,E=0;s.vertexAttribPointer(f,v,h,d,$,E);var c=s.POINTS,_=e.length/2;s.drawArrays(c,E,_),requestAnimationFrame(x)}requestAnimationFrame(x)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Z(()=>i()),[o,()=>o()]}class Kt extends V{constructor(e){super(),G(this,e,jt,Ht,W,{})}}const Qt=`attribute float id;
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
`;let me,de;const Zt=n=>{de=j(n,[Qt,Jt]),me={idAttributeLocation:n.getAttribLocation(de,"id"),texDimensionsUniformLocation:n.getUniformLocation(de,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(de,"u_resolution")}},en=n=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=n;N(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(de),e.uniform2f(me.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(me.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(me.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,t=e.FLOAT,f=!1,u=0,p=0;e.vertexAttribPointer(me.idAttributeLocation,s,t,f,u,p);const x=e.POINTS,v=r.length;e.drawArrays(x,p,v)};function tn(n){let e,i,o,r,a,s,t;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture. In each "),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=L(),t=g("canvas"),this.h()},l(f){e=D(f,"P",{});var u=U(e);i=y(u,"Create an array of render-size positions. Store this array in a texture. In each "),o=D(u,"CODE",{});var p=U(o);r=y(p,"requestAnimationFrame"),p.forEach(m),a=y(u,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),u.forEach(m),s=B(f),t=D(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(t).forEach(m),this.h()},h(){w(t,"id","canvas"),le(t,"background-color","black"),w(t,"width",tt),w(t,"height",nt)},m(f,u){T(f,e,u),S(e,i),S(e,o),S(o,r),S(e,a),T(f,s,u),T(f,t,u)},p:O,i:O,o:O,d(f){f&&m(e),f&&m(s),f&&m(t)}}}const tt=800,nt=600;function nn(n){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const o=i.getContext("webgl");if(!o)throw"gl undefined";Pe(o),N(o.canvas),Zt(o);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(t=>[Math.random()*tt,Math.random()*nt,0,0]).flat();function s(){if(!o)throw"Undefined params to render";for(let f=0;f<=a.length-2;f+=2)a[f]=(a[f]+Math.random()*2-1)%o.canvas.width,a[f+1]=(a[f+1]+Math.random()*0+1)%o.canvas.height;const t=ne(o,new Float32Array(a),3,3);en({gl:o,positionTex:t,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let on=class extends V{constructor(e){super(),G(this,e,nn,tn,W,{})}};const rn=`attribute float id;
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
`;let pe,he,Ie;const an=(n,e)=>{he=j(n,[rn,sn]),pe={idAttributeLocation:n.getAttribLocation(he,"id"),texDimensionsUniformLocation:n.getUniformLocation(he,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(he,"u_resolution")},Ie=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Ie),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW)},cn=n=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=n;N(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Ie),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(he),e.uniform2f(pe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(pe.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(pe.idAttributeLocation);const a=1,s=e.FLOAT,t=!1,f=0,u=0;e.vertexAttribPointer(pe.idAttributeLocation,a,s,t,f,u),e.drawArrays(e.POINTS,u,r.length)};function fn(n,e){const i=new Array(n).fill(0).map((a,s)=>s),o=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const un=`attribute vec4 position;
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

`;let se,ae,Xe,Le,Be,qe,He,_e,we;const mn=(n,e)=>{const{positions:i,texDimensions:o}=e;ae=j(n,[un,ln]),se={positionAttributeLocation:n.getAttribLocation(ae,"position"),positionTexLocation:n.getUniformLocation(ae,"positionTex"),texDimensionsUniformLocation:n.getUniformLocation(ae,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(ae,"u_resolution")},Xe=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Xe),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),Le=ne(n,new Float32Array(i),o.width,o.height),Be=ne(n,null,o.width,o.height),qe=ue(n,Le),He=ue(n,Be),_e={fb:qe,tex:Le},we={fb:He,tex:Be}},dn=n=>{const{gl:e,texDimensions:i}=n;e.bindFramebuffer(e.FRAMEBUFFER,we.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Xe),e.enableVertexAttribArray(se.positionAttributeLocation),e.vertexAttribPointer(se.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,_e.tex),e.useProgram(ae),e.uniform1i(se.positionTexLocation,0),e.uniform2f(se.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(se.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=_e;_e=we,we=o}return _e.tex};function pn(n){let e,i,o,r,a,s,t,f,u,p,x,v,h;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture."),o=L(),r=g("p"),a=P("Create 2 textures which will be used to update the positions with a shader. In each "),s=g("code"),t=P("requestAnimationFrame"),f=P(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),u=L(),p=g("p"),x=P("Finally switch the two textures to read and write in the updated textures"),v=L(),h=g("canvas"),this.h()},l(d){e=D(d,"P",{});var $=U(e);i=y($,"Create an array of render-size positions. Store this array in a texture."),$.forEach(m),o=B(d),r=D(d,"P",{});var E=U(r);a=y(E,"Create 2 textures which will be used to update the positions with a shader. In each "),s=D(E,"CODE",{});var c=U(s);t=y(c,"requestAnimationFrame"),c.forEach(m),f=y(E,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),E.forEach(m),u=B(d),p=D(d,"P",{});var _=U(p);x=y(_,"Finally switch the two textures to read and write in the updated textures"),_.forEach(m),v=B(d),h=D(d,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(h).forEach(m),this.h()},h(){w(h,"id","canvas"),le(h,"background-color","black"),w(h,"width",ot),w(h,"height",it)},m(d,$){T(d,e,$),S(e,i),T(d,o,$),T(d,r,$),S(r,a),S(r,s),S(s,t),S(r,f),T(d,u,$),T(d,p,$),S(p,x),T(d,v,$),T(d,h,$)},p:O,i:O,o:O,d(d){d&&m(e),d&&m(o),d&&m(r),d&&m(u),d&&m(p),d&&m(v),d&&m(h)}}}const ot=800,it=600;function hn(n){function e(){const i=Ze();N(i.canvas);const{ids:o,positions:r,texDimensions:a}=fn(100,{width:ot,height:it});an(i,o),mn(i,{positions:r,texDimensions:a});function s(){N(i.canvas);const t=dn({gl:i,texDimensions:a});cn({gl:i,positionTex:t,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let _n=class extends V{constructor(e){super(),G(this,e,hn,pn,W,{})}};const xn=`attribute float id;
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
`,$n=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let xe,$e,Me;const Tn=(n,e)=>{$e=j(n,[xn,$n]),xe={idAttributeLocation:n.getAttribLocation($e,"id"),texDimensionsUniformLocation:n.getUniformLocation($e,"texDimensions"),resolutionUniformLocation:n.getUniformLocation($e,"u_resolution")},Me=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Me),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW)},vn=n=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=n;N(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Me),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram($e),e.uniform2f(xe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(xe.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(xe.idAttributeLocation);const a=1,s=e.FLOAT,t=!1,f=0,u=0;e.vertexAttribPointer(xe.idAttributeLocation,a,s,t,f,u),e.drawArrays(e.POINTS,u,r.length)};function An(n,e){const i=new Array(n).fill(0).map((a,s)=>s),o=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const bn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,En=`precision highp float;

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

`;let ce,fe,Oe,Se,Ce,je,Ke,Te,Re;const wn=(n,e)=>{const{positions:i,texDimensions:o}=e;fe=j(n,[bn,En]),ce={positionAttributeLocation:n.getAttribLocation(fe,"position"),positionTexLocation:n.getUniformLocation(fe,"positionTex"),texDimensionsUniformLocation:n.getUniformLocation(fe,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(fe,"u_resolution")},Oe=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Oe),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),Se=ne(n,new Float32Array(i),o.width,o.height),Ce=ne(n,null,o.width,o.height),je=ue(n,Se),Ke=ue(n,Ce),Te={fb:je,tex:Se},Re={fb:Ke,tex:Ce}},Rn=n=>{const{gl:e,texDimensions:i}=n;e.bindFramebuffer(e.FRAMEBUFFER,Re.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Oe),e.enableVertexAttribArray(ce.positionAttributeLocation),e.vertexAttribPointer(ce.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Te.tex),e.useProgram(fe),e.uniform1i(ce.positionTexLocation,0),e.uniform2f(ce.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ce.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=Te;Te=Re,Re=o}return Te.tex};function Fn(n){let e,i,o,r,a,s,t,f,u,p,x,v,h;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture."),o=L(),r=g("p"),a=P("Create 2 textures which will be used to update the positions with a shader. In each "),s=g("code"),t=P("requestAnimationFrame"),f=P(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),u=L(),p=g("p"),x=P("Finally switch the two textures to read and write in the updated textures"),v=L(),h=g("canvas"),this.h()},l(d){e=D(d,"P",{});var $=U(e);i=y($,"Create an array of render-size positions. Store this array in a texture."),$.forEach(m),o=B(d),r=D(d,"P",{});var E=U(r);a=y(E,"Create 2 textures which will be used to update the positions with a shader. In each "),s=D(E,"CODE",{});var c=U(s);t=y(c,"requestAnimationFrame"),c.forEach(m),f=y(E,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),E.forEach(m),u=B(d),p=D(d,"P",{});var _=U(p);x=y(_,"Finally switch the two textures to read and write in the updated textures"),_.forEach(m),v=B(d),h=D(d,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(h).forEach(m),this.h()},h(){w(h,"id","canvas"),le(h,"background-color","black"),w(h,"width",rt),w(h,"height",st)},m(d,$){T(d,e,$),S(e,i),T(d,o,$),T(d,r,$),S(r,a),S(r,s),S(s,t),S(r,f),T(d,u,$),T(d,p,$),S(p,x),T(d,v,$),T(d,h,$)},p:O,i:O,o:O,d(d){d&&m(e),d&&m(o),d&&m(r),d&&m(u),d&&m(p),d&&m(v),d&&m(h)}}}const rt=800,st=600;function gn(n){function e(){const i=Ze();N(i.canvas);const{ids:o,positions:r,texDimensions:a}=An(100,{width:rt,height:st});Tn(i,o),wn(i,{positions:r,texDimensions:a});function s(){N(i.canvas);const t=Rn({gl:i,texDimensions:a});vn({gl:i,positionTex:t,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}class Dn extends V{constructor(e){super(),G(this,e,gn,Fn,W,{})}}function Un(n){let e;return{c(){e=P("About")},l(i){e=y(i,"About")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Pn(n){let e;return{c(){e=P("Simple counter")},l(i){e=y(i,"Simple counter")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function yn(n){let e;return{c(){e=P("Particles")},l(i){e=y(i,"Particles")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Ln(n){let e;return{c(){e=P("Particles 2")},l(i){e=y(i,"Particles 2")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Bn(n){let e;return{c(){e=P("Positions Buffer")},l(i){e=y(i,"Positions Buffer")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Sn(n){let e;return{c(){e=P("Positions Texture")},l(i){e=y(i,"Positions Texture")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Cn(n){let e;return{c(){e=P("Positions Texture Draw & Update")},l(i){e=y(i,"Positions Texture Draw & Update")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function In(n){let e;return{c(){e=P("Positions Texture Advanced shader")},l(i){e=y(i,"Positions Texture Advanced shader")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Xn(n){let e,i,o,r,a,s,t,f,u,p,x,v,h,d,$,E;return e=new ee({props:{$$slots:{default:[Un]},$$scope:{ctx:n}}}),o=new ee({props:{$$slots:{default:[Pn]},$$scope:{ctx:n}}}),a=new ee({props:{$$slots:{default:[yn]},$$scope:{ctx:n}}}),t=new ee({props:{$$slots:{default:[Ln]},$$scope:{ctx:n}}}),u=new ee({props:{$$slots:{default:[Bn]},$$scope:{ctx:n}}}),x=new ee({props:{$$slots:{default:[Sn]},$$scope:{ctx:n}}}),h=new ee({props:{$$slots:{default:[Cn]},$$scope:{ctx:n}}}),$=new ee({props:{$$slots:{default:[In]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),i=L(),C(o.$$.fragment),r=L(),C(a.$$.fragment),s=L(),C(t.$$.fragment),f=L(),C(u.$$.fragment),p=L(),C(x.$$.fragment),v=L(),C(h.$$.fragment),d=L(),C($.$$.fragment)},l(c){I(e.$$.fragment,c),i=B(c),I(o.$$.fragment,c),r=B(c),I(a.$$.fragment,c),s=B(c),I(t.$$.fragment,c),f=B(c),I(u.$$.fragment,c),p=B(c),I(x.$$.fragment,c),v=B(c),I(h.$$.fragment,c),d=B(c),I($.$$.fragment,c)},m(c,_){X(e,c,_),T(c,i,_),X(o,c,_),T(c,r,_),X(a,c,_),T(c,s,_),X(t,c,_),T(c,f,_),X(u,c,_),T(c,p,_),X(x,c,_),T(c,v,_),X(h,c,_),T(c,d,_),X($,c,_),E=!0},p(c,_){const l={};_&1&&(l.$$scope={dirty:_,ctx:c}),e.$set(l);const A={};_&1&&(A.$$scope={dirty:_,ctx:c}),o.$set(A);const K={};_&1&&(K.$$scope={dirty:_,ctx:c}),a.$set(K);const Q={};_&1&&(Q.$$scope={dirty:_,ctx:c}),t.$set(Q);const z={};_&1&&(z.$$scope={dirty:_,ctx:c}),u.$set(z);const Y={};_&1&&(Y.$$scope={dirty:_,ctx:c}),x.$set(Y);const k={};_&1&&(k.$$scope={dirty:_,ctx:c}),h.$set(k);const q={};_&1&&(q.$$scope={dirty:_,ctx:c}),$.$set(q)},i(c){E||(R(e.$$.fragment,c),R(o.$$.fragment,c),R(a.$$.fragment,c),R(t.$$.fragment,c),R(u.$$.fragment,c),R(x.$$.fragment,c),R(h.$$.fragment,c),R($.$$.fragment,c),E=!0)},o(c){F(e.$$.fragment,c),F(o.$$.fragment,c),F(a.$$.fragment,c),F(t.$$.fragment,c),F(u.$$.fragment,c),F(x.$$.fragment,c),F(h.$$.fragment,c),F($.$$.fragment,c),E=!1},d(c){M(e,c),c&&m(i),M(o,c),c&&m(r),M(a,c),c&&m(s),M(t,c),c&&m(f),M(u,c),c&&m(p),M(x,c),c&&m(v),M(h,c),c&&m(d),M($,c)}}}function Mn(n){let e,i,o,r,a,s,t,f;return{c(){e=g("p"),i=P("This page is an experiment to run simulation on the GPU."),o=L(),r=g("p"),a=P(`I am copying code from
                `),s=g("a"),t=P("this site"),f=P(`
                and adding basic typings for typescript.`),this.h()},l(u){e=D(u,"P",{});var p=U(e);i=y(p,"This page is an experiment to run simulation on the GPU."),p.forEach(m),o=B(u),r=D(u,"P",{});var x=U(r);a=y(x,`I am copying code from
                `),s=D(x,"A",{target:!0,href:!0});var v=U(s);t=y(v,"this site"),v.forEach(m),f=y(x,`
                and adding basic typings for typescript.`),x.forEach(m),this.h()},h(){w(s,"target","none"),w(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(u,p){T(u,e,p),S(e,i),T(u,o,p),T(u,r,p),S(r,a),S(r,s),S(s,t),S(r,f)},p:O,d(u){u&&m(e),u&&m(o),u&&m(r)}}}function On(n){let e,i;return e=new Bt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}function Nn(n){let e,i;return e=new Xt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}function zn(n){let e,i;return e=new Yt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}function Vn(n){let e,i;return e=new Kt({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}function Gn(n){let e,i;return e=new on({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}function Wn(n){let e,i;return e=new _n({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}function Yn(n){let e,i;return e=new Dn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}function kn(n){let e,i,o,r,a,s,t,f,u,p,x,v,h,d,$,E,c,_;return e=new wt({props:{$$slots:{default:[Xn]},$$scope:{ctx:n}}}),o=new te({props:{$$slots:{default:[Mn]},$$scope:{ctx:n}}}),a=new te({props:{$$slots:{default:[On]},$$scope:{ctx:n}}}),t=new te({props:{$$slots:{default:[Nn]},$$scope:{ctx:n}}}),u=new te({props:{$$slots:{default:[zn]},$$scope:{ctx:n}}}),x=new te({props:{$$slots:{default:[Vn]},$$scope:{ctx:n}}}),h=new te({props:{$$slots:{default:[Gn]},$$scope:{ctx:n}}}),$=new te({props:{$$slots:{default:[Wn]},$$scope:{ctx:n}}}),c=new te({props:{$$slots:{default:[Yn]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),i=L(),C(o.$$.fragment),r=L(),C(a.$$.fragment),s=L(),C(t.$$.fragment),f=L(),C(u.$$.fragment),p=L(),C(x.$$.fragment),v=L(),C(h.$$.fragment),d=L(),C($.$$.fragment),E=L(),C(c.$$.fragment)},l(l){I(e.$$.fragment,l),i=B(l),I(o.$$.fragment,l),r=B(l),I(a.$$.fragment,l),s=B(l),I(t.$$.fragment,l),f=B(l),I(u.$$.fragment,l),p=B(l),I(x.$$.fragment,l),v=B(l),I(h.$$.fragment,l),d=B(l),I($.$$.fragment,l),E=B(l),I(c.$$.fragment,l)},m(l,A){X(e,l,A),T(l,i,A),X(o,l,A),T(l,r,A),X(a,l,A),T(l,s,A),X(t,l,A),T(l,f,A),X(u,l,A),T(l,p,A),X(x,l,A),T(l,v,A),X(h,l,A),T(l,d,A),X($,l,A),T(l,E,A),X(c,l,A),_=!0},p(l,A){const K={};A&1&&(K.$$scope={dirty:A,ctx:l}),e.$set(K);const Q={};A&1&&(Q.$$scope={dirty:A,ctx:l}),o.$set(Q);const z={};A&1&&(z.$$scope={dirty:A,ctx:l}),a.$set(z);const Y={};A&1&&(Y.$$scope={dirty:A,ctx:l}),t.$set(Y);const k={};A&1&&(k.$$scope={dirty:A,ctx:l}),u.$set(k);const q={};A&1&&(q.$$scope={dirty:A,ctx:l}),x.$set(q);const J={};A&1&&(J.$$scope={dirty:A,ctx:l}),h.$set(J);const oe={};A&1&&(oe.$$scope={dirty:A,ctx:l}),$.$set(oe);const ie={};A&1&&(ie.$$scope={dirty:A,ctx:l}),c.$set(ie)},i(l){_||(R(e.$$.fragment,l),R(o.$$.fragment,l),R(a.$$.fragment,l),R(t.$$.fragment,l),R(u.$$.fragment,l),R(x.$$.fragment,l),R(h.$$.fragment,l),R($.$$.fragment,l),R(c.$$.fragment,l),_=!0)},o(l){F(e.$$.fragment,l),F(o.$$.fragment,l),F(a.$$.fragment,l),F(t.$$.fragment,l),F(u.$$.fragment,l),F(x.$$.fragment,l),F(h.$$.fragment,l),F($.$$.fragment,l),F(c.$$.fragment,l),_=!1},d(l){M(e,l),l&&m(i),M(o,l),l&&m(r),M(a,l),l&&m(s),M(t,l),l&&m(f),M(u,l),l&&m(p),M(x,l),l&&m(v),M(h,l),l&&m(d),M($,l),l&&m(E),M(c,l)}}}function qn(n){let e,i,o;return i=new Tt({props:{$$slots:{default:[kn]},$$scope:{ctx:n}}}),{c(){e=g("div"),C(i.$$.fragment)},l(r){e=D(r,"DIV",{});var a=U(e);I(i.$$.fragment,a),a.forEach(m)},m(r,a){T(r,e,a),X(i,e,null),o=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),i.$set(s)},i(r){o||(R(i.$$.fragment,r),o=!0)},o(r){F(i.$$.fragment,r),o=!1},d(r){r&&m(e),M(i)}}}class Hn extends V{constructor(e){super(),G(this,e,null,qn,W,{})}}function jn(n){let e,i;return e=new Hn({}),{c(){C(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},p:O,i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){M(e,o)}}}class eo extends V{constructor(e){super(),G(this,e,null,jn,W,{})}}export{eo as default};
