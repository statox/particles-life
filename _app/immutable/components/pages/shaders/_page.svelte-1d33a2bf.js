import{S as V,i as W,s as G,C as Fe,k as g,l as D,m as U,h as m,n as E,b as T,K as Ne,E as ge,F as De,G as Ue,f as R,t as F,H as ve,R as ct,o as Z,j as ft,Q as ut,T as Ye,U as Qe,A as lt,V as mt,g as dt,d as pt,q as P,a as I,r as y,c as X,D as M,B as O,p as le,w as L,x as B,y as S,z as C}from"../../../chunks/index-ff9e742a.js";import{w as be}from"../../../chunks/index-84a8d4d9.js";let ht=1;function Je(){return`svelte-tabs-${ht++}`}function xt(n){let e,i,o,r;const a=n[4].default,s=Fe(a,n,n[3],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(t){e=D(t,"DIV",{class:!0});var c=U(e);s&&s.l(c),c.forEach(m),this.h()},h(){E(e,"class","svelte-tabs")},m(t,c){T(t,e,c),s&&s.m(e,null),i=!0,o||(r=Ne(e,"keydown",n[1]),o=!0)},p(t,[c]){s&&s.p&&(!i||c&8)&&ge(s,a,t,t[3],i?Ue(a,t[3],c,null):De(t[3]),null)},i(t){i||(R(s,t),i=!0)},o(t){F(s,t),i=!1},d(t){t&&m(e),s&&s.d(t),o=!1,r()}}}const ze={};function _t(n,e,i){const o=n.indexOf(e);n.splice(o,1),i.update(r=>r===e?n[o]||n[n.length-1]:r)}function Tt(n,e,i){let o,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const t=[],c=[],u=[],d=be({}),x=be({}),v=be(null);ve(n,v,f=>i(5,o=f));const h=be(null);function _(f,p,l){f.push(p),l.update(A=>A||p),ut(()=>_t(f,p,l))}function $(f){const p=c.indexOf(f);v.set(f),h.set(u[p])}ct(ze,{registerTab(f){_(c,f,v)},registerTabElement(f){t.push(f)},registerPanel(f){_(u,f,h)},selectTab:$,selectedTab:v,selectedPanel:h,controls:d,labeledBy:x}),Z(()=>{$(c[s])}),ft(()=>{for(let f=0;f<c.length;f++)d.update(p=>({...p,[c[f].id]:u[f].id})),x.update(p=>({...p,[u[f].id]:c[f].id}))});async function w(f){if(f.target.classList.contains("svelte-tabs__tab")){let p=c.indexOf(o);switch(f.key){case"ArrowRight":p+=1,p>c.length-1&&(p=0),$(c[p]),t[p].focus();break;case"ArrowLeft":p-=1,p<0&&(p=c.length-1),$(c[p]),t[p].focus()}}}return n.$$set=f=>{"initialSelectedIndex"in f&&i(2,s=f.initialSelectedIndex),"$$scope"in f&&i(3,a=f.$$scope)},[v,w,s,a,r]}class $t extends V{constructor(e){super(),W(this,e,Tt,xt,G,{initialSelectedIndex:2})}}function vt(n){let e,i,o,r,a,s;const t=n[9].default,c=Fe(t,n,n[8],null);return{c(){e=g("li"),c&&c.c(),this.h()},l(u){e=D(u,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=U(e);c&&c.l(d),d.forEach(m),this.h()},h(){E(e,"role","tab"),E(e,"id",n[3].id),E(e,"aria-controls",i=n[2][n[3].id]),E(e,"aria-selected",n[1]),E(e,"tabindex",o=n[1]?0:-1),E(e,"class","svelte-tabs__tab svelte-1fbofsd"),Ye(e,"svelte-tabs__selected",n[1])},m(u,d){T(u,e,d),c&&c.m(e,null),n[10](e),r=!0,a||(s=Ne(e,"click",n[11]),a=!0)},p(u,[d]){c&&c.p&&(!r||d&256)&&ge(c,t,u,u[8],r?Ue(t,u[8],d,null):De(u[8]),null),(!r||d&4&&i!==(i=u[2][u[3].id]))&&E(e,"aria-controls",i),(!r||d&2)&&E(e,"aria-selected",u[1]),(!r||d&2&&o!==(o=u[1]?0:-1))&&E(e,"tabindex",o),(!r||d&2)&&Ye(e,"svelte-tabs__selected",u[1])},i(u){r||(R(c,u),r=!0)},o(u){F(c,u),r=!1},d(u){u&&m(e),c&&c.d(u),n[10](null),a=!1,s()}}}function At(n,e,i){let o,r,{$$slots:a={},$$scope:s}=e,t;const c={id:Je()},{registerTab:u,registerTabElement:d,selectTab:x,selectedTab:v,controls:h}=Qe(ze);ve(n,v,f=>i(7,o=f)),ve(n,h,f=>i(2,r=f));let _;u(c),Z(async()=>{await lt(),d(t)});function $(f){mt[f?"unshift":"push"](()=>{t=f,i(0,t)})}const w=()=>x(c);return n.$$set=f=>{"$$scope"in f&&i(8,s=f.$$scope)},n.$$.update=()=>{n.$$.dirty&128&&i(1,_=o===c)},[t,_,r,c,x,v,h,o,s,a,$,w]}class ee extends V{constructor(e){super(),W(this,e,At,vt,G,{})}}function bt(n){let e,i;const o=n[1].default,r=Fe(o,n,n[0],null);return{c(){e=g("ul"),r&&r.c(),this.h()},l(a){e=D(a,"UL",{role:!0,class:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){E(e,"role","tablist"),E(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){T(a,e,s),r&&r.m(e,null),i=!0},p(a,[s]){r&&r.p&&(!i||s&1)&&ge(r,o,a,a[0],i?Ue(o,a[0],s,null):De(a[0]),null)},i(a){i||(R(r,a),i=!0)},o(a){F(r,a),i=!1},d(a){a&&m(e),r&&r.d(a)}}}function Et(n,e,i){let{$$slots:o={},$$scope:r}=e;return n.$$set=a=>{"$$scope"in a&&i(0,r=a.$$scope)},[r,o]}class wt extends V{constructor(e){super(),W(this,e,Et,bt,G,{})}}function ke(n){let e;const i=n[6].default,o=Fe(i,n,n[5],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,a){o&&o.m(r,a),e=!0},p(r,a){o&&o.p&&(!e||a&32)&&ge(o,i,r,r[5],e?Ue(i,r[5],a,null):De(r[5]),null)},i(r){e||(R(o,r),e=!0)},o(r){F(o,r),e=!1},d(r){o&&o.d(r)}}}function Rt(n){let e,i,o,r=n[1]===n[2]&&ke(n);return{c(){e=g("div"),r&&r.c(),this.h()},l(a){e=D(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=U(e);r&&r.l(s),s.forEach(m),this.h()},h(){E(e,"id",n[2].id),E(e,"aria-labelledby",i=n[0][n[2].id]),E(e,"class","svelte-tabs__tab-panel svelte-epfyet"),E(e,"role","tabpanel")},m(a,s){T(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&R(r,1)):(r=ke(a),r.c(),R(r,1),r.m(e,null)):r&&(dt(),F(r,1,1,()=>{r=null}),pt()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&E(e,"aria-labelledby",i)},i(a){o||(R(r),o=!0)},o(a){F(r),o=!1},d(a){a&&m(e),r&&r.d()}}}function Ft(n,e,i){let o,r,{$$slots:a={},$$scope:s}=e;const t={id:Je()},{registerPanel:c,selectedPanel:u,labeledBy:d}=Qe(ze);return ve(n,u,x=>i(1,r=x)),ve(n,d,x=>i(0,o=x)),c(t),n.$$set=x=>{"$$scope"in x&&i(5,s=x.$$scope)},[o,r,t,u,d,s,a]}class te extends V{constructor(e){super(),W(this,e,Ft,Rt,G,{})}}const gt=["VERTEX_SHADER","FRAGMENT_SHADER"];function Ze(){const n=document.getElementById("canvas");if(!n)throw"canvas undefined";const e=n.getContext("webgl");if(!e)throw"gl undefined";return Pe(e),e}function Pe(n){if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ne(n,e,i,o){const r=n.createTexture();if(!r)throw"Can not create texture";return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,i,o,0,n.RGBA,n.FLOAT,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}function ue(n,e){const i=n.createFramebuffer();if(!i)throw"Can not create frame buffer";return n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0),i}function j(n,e,i,o,r){const a=[];for(let t=0;t<e.length;++t){const c=gt[t]==="VERTEX_SHADER"?n.VERTEX_SHADER:n.FRAGMENT_SHADER,u=Dt(n,e[t],c,r);if(!u)throw"Can not create shader";a.push(u)}const s=Ut(n,a,i,o,r);if(!s)throw"Can not create program";return s}function Dt(n,e,i,o){const r=o||console.log,a=n.createShader(i);if(!a)throw"Could not load shader";if(n.shaderSource(a,e),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS)){const t=n.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+t+`
`+e.split(`
`).map((c,u)=>`${u+1}: ${c}`).join(`
`))),n.deleteShader(a),null}return a}function Ut(n,e,i,o,r){const a=r||console.log,s=n.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(c){n.attachShader(s,c)}),i&&i.forEach(function(c,u){n.bindAttribLocation(s,o?o[u]:u,c)}),n.linkProgram(s),!n.getProgramParameter(s,n.LINK_STATUS)){const c=n.getProgramInfoLog(s);return a("Error in program linking:"+c),n.deleteProgram(s),null}return s}function N(n,e){e=e||1;const i=n.clientWidth*e|0,o=n.clientHeight*e|0;return n.width!==i||n.height!==o?(n.width=i,n.height=o,!0):!1}function Pt(n){let e,i,o,r,a,s;return{c(){e=g("p"),i=P(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=I(),r=g("ul"),a=I(),s=g("canvas"),this.h()},l(t){e=D(t,"P",{});var c=U(e);i=y(c,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),c.forEach(m),o=X(t),r=D(t,"UL",{id:!0}),U(r).forEach(m),a=X(t),s=D(t,"CANVAS",{id:!0}),U(s).forEach(m),this.h()},h(){E(r,"id","result"),E(s,"id","canvas")},m(t,c){T(t,e,c),M(e,i),T(t,o,c),T(t,r,c),T(t,a,c),T(t,s,c)},p:O,i:O,o:O,d(t){t&&m(e),t&&m(o),t&&m(r),t&&m(a),t&&m(s)}}}function yt(n){const e=document.createElement("li");e.textContent=n.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Lt(n){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const t=s.getContext("webgl");if(!t)throw"Coulndt get context";const c=j(t,[i,o]);if(!c)throw"Could not get program";const u=t.getAttribLocation(c,"position"),d=t.getUniformLocation(c,"srcTex"),x=t.getUniformLocation(c,"srcDimensions"),v=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,v),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0);const h=3,_=3,$=t.createTexture();t.bindTexture(t.TEXTURE_2D,$),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,h,_,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(c),t.uniform1i(d,0),t.uniform2f(x,h,_),t.drawArrays(t.TRIANGLES,0,6);const w=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,w);for(let f=0;f<3*3;++f)yt(w[f*4])}return Z(e),[]}class Bt extends V{constructor(e){super(),W(this,e,Lt,Pt,G,{})}}const St=Float32Array;function et(n,e,i,o,r,a){const s=new St(16);return s[0]=2/(e-n),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(n+e)/(n-e),s[13]=(i+o)/(i-o),s[14]=(r+a)/(r-a),s[15]=1,s}function Ct(n){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){E(e,"id","canvas"),le(e,"background-color","black"),E(e,"width","800"),E(e,"height","600")},m(i,o){T(i,e,o)},p:O,i:O,o:O,d(i){i&&m(e)}}}function It(n){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const t=s.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=j(t,[i,o]),x=j(t,[r,a]);if(!d||!x)throw"Can not create programs";const v={position:t.getAttribLocation(d,"position"),positionTex:t.getUniformLocation(d,"positionTex"),velocityTex:t.getUniformLocation(d,"velocityTex"),texDimensions:t.getUniformLocation(d,"texDimensions"),canvasDimensions:t.getUniformLocation(d,"canvasDimensions"),deltaTime:t.getUniformLocation(d,"deltaTime")},h={id:t.getAttribLocation(x,"id"),positionTex:t.getUniformLocation(x,"positionTex"),texDimensions:t.getUniformLocation(x,"texDimensions"),matrix:t.getUniformLocation(x,"matrix")},_=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,_),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const $=300,w=20,f=$*w,p=new Array(f).fill(0).map((b,H)=>H),l=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,l),t.bufferData(t.ARRAY_BUFFER,new Float32Array(p),t.STATIC_DRAW),N(t.canvas);const A=(b,H)=>(H===void 0&&(H=b,b=0),Math.random()*(H-b)+b),K=new Float32Array(p.map(b=>[A(s.width),A(s.height),0,0]).flat()),Q=new Float32Array(p.map(b=>[A(-300,300),A(-300,300),0,0]).flat());function z(b,H,re,at){const Ge=b.createTexture();return b.bindTexture(b.TEXTURE_2D,Ge),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,re,at,0,b.RGBA,b.FLOAT,H),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),Ge}const Y=z(t,Q,$,w),k=z(t,K,$,w),q=z(t,null,$,w);if(!k||!q)throw"Can not create position textures";function J(b,H){const re=b.createFramebuffer();return b.bindFramebuffer(b.FRAMEBUFFER,re),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,H,0),re}const oe=J(t,k),ie=J(t,q);let ye={fb:oe,tex:k},Ae={fb:ie,tex:q},Ve=0;function We(b){if(!t)return;b*=.001;const H=b-Ve;Ve=b,N(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,Ae.fb),t.viewport(0,0,$,w),t.bindBuffer(t.ARRAY_BUFFER,_),t.enableVertexAttribArray(v.position),t.vertexAttribPointer(v.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ye.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,Y),t.useProgram(d),t.uniform1i(v.positionTex,0),t.uniform1i(v.velocityTex,1),t.uniform2f(v.texDimensions,$,w),t.uniform2f(v.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(v.deltaTime,H),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,l),t.enableVertexAttribArray(h.id),t.vertexAttribPointer(h.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Ae.tex),t.useProgram(x),t.uniform2f(h.texDimensions,$,$),t.uniform1i(h.positionTex,0),t.uniformMatrix4fv(h.matrix,!1,et(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,f);{const re=ye;ye=Ae,Ae=re}requestAnimationFrame(We)}requestAnimationFrame(We)}return Z(()=>e()),[]}class Xt extends V{constructor(e){super(),W(this,e,It,Ct,G,{})}}const Ee=(n,e)=>(e===void 0&&(e=n,n=0),Math.random()*(e-n)+n);function Mt(n,e,i,o){const r=n*e,a=new Array(r).fill(0).map((c,u)=>u),s=new Float32Array(a.map(c=>[Ee(i),Ee(o),0,0]).flat()),t=new Float32Array(a.map(c=>[Ee(-300,300),Ee(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:t}}const Ot=`attribute vec4 position;
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

`;function Wt(n){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(e).forEach(m),this.h()},h(){E(e,"id","canvas"),le(e,"background-color","black"),E(e,"width","800"),E(e,"height","600")},m(i,o){T(i,e,o)},p:O,i:O,o:O,d(i){i&&m(e)}}}function Gt(n){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";Pe(a);const s=j(a,[Ot,Nt]),t=j(a,[zt,Vt]),c={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},u={id:a.getAttribLocation(t,"id"),positionTex:a.getUniformLocation(t,"positionTex"),texDimensions:a.getUniformLocation(t,"texDimensions"),matrix:a.getUniformLocation(t,"matrix")},d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const x=300,v=20,{numParticles:h,ids:_,positions:$,velocities:w}=Mt(x,v,r.width,r.height),f=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,f),a.bufferData(a.ARRAY_BUFFER,new Float32Array(_),a.STATIC_DRAW),N(a.canvas);const p=ne(a,w,x,v),l=ne(a,$,x,v),A=ne(a,null,x,v),K=ue(a,l),Q=ue(a,A);let z={fb:K,tex:l},Y={fb:Q,tex:A},k=0;function q(J){if(!a||!d||!f)throw"Undefined params to render";J*=.001;const oe=J-k;k=J,N(a.canvas),o(a,Y,x,v,d,c,z,p,s,oe),i(a,x,f,u,Y,t,h);{const ie=z;z=Y,Y=ie}requestAnimationFrame(q)}requestAnimationFrame(q)}const i=(r,a,s,t,c,u,d)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(t.id),r.vertexAttribPointer(t.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,c.tex),r.useProgram(u),r.uniform2f(t.texDimensions,a,a),r.uniform1i(t.positionTex,0),r.uniformMatrix4fv(t.matrix,!1,et(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,d)},o=(r,a,s,t,c,u,d,x,v,h)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,t),r.bindBuffer(r.ARRAY_BUFFER,c),r.enableVertexAttribArray(u.position),r.vertexAttribPointer(u.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,d.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,x),r.useProgram(v),r.uniform1i(u.positionTex,0),r.uniform1i(u.velocityTex,1),r.uniform2f(u.texDimensions,s,t),r.uniform2f(u.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(u.deltaTime,h),r.drawArrays(r.TRIANGLES,0,6)};return Z(()=>e()),[]}class Yt extends V{constructor(e){super(),W(this,e,Gt,Wt,G,{})}}const kt=`attribute vec2 a_position;

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
`;function Ht(n){let e,i,o,r,a,s,t,c,u,d,x,v;return{c(){e=g("p"),i=P(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=I(),t=g("canvas"),c=I(),u=g("button"),d=P("Add position"),this.h()},l(h){e=D(h,"P",{});var _=U(e);i=y(_,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=D(_,"CODE",{});var $=U(o);r=y($,"requestAnimationFrame"),$.forEach(m),a=y(_,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),_.forEach(m),s=X(h),t=D(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(t).forEach(m),c=X(h),u=D(h,"BUTTON",{});var w=U(u);d=y(w,"Add position"),w.forEach(m),this.h()},h(){E(t,"id","canvas"),le(t,"background-color","black"),E(t,"width","800"),E(t,"height","600")},m(h,_){T(h,e,_),M(e,i),M(e,o),M(o,r),M(e,a),T(h,s,_),T(h,t,_),T(h,c,_),T(h,u,_),M(u,d),x||(v=Ne(u,"click",n[1]),x=!0)},p:O,i:O,o:O,d(h){h&&m(e),h&&m(s),h&&m(t),h&&m(c),h&&m(u),x=!1,v()}}}function jt(n){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Pe(s);const t=j(s,[kt,qt]);N(s.canvas);const c=s.getAttribLocation(t,"a_position"),u=s.getUniformLocation(t,"u_resolution"),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function x(){if(!s)throw"Undefined params to render";for(let l=0;l<=e.length-2;l+=2)e[l]=(e[l]+Math.random()*2-1)%s.canvas.width,e[l+1]=(e[l+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),N(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(t),s.uniform2f(u,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(c),s.bindBuffer(s.ARRAY_BUFFER,d);const v=2,h=s.FLOAT,_=!1,$=0,w=0;s.vertexAttribPointer(c,v,h,_,$,w);var f=s.POINTS,p=e.length/2;s.drawArrays(f,w,p),requestAnimationFrame(x)}requestAnimationFrame(x)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Z(()=>i()),[o,()=>o()]}class Kt extends V{constructor(e){super(),W(this,e,jt,Ht,G,{})}}const Qt=`attribute float id;
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
`;let me,de;const Zt=n=>{de=j(n,[Qt,Jt]),me={idAttributeLocation:n.getAttribLocation(de,"id"),texDimensionsUniformLocation:n.getUniformLocation(de,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(de,"u_resolution")}},en=n=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=n;N(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(de),e.uniform2f(me.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(me.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(me.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,t=e.FLOAT,c=!1,u=0,d=0;e.vertexAttribPointer(me.idAttributeLocation,s,t,c,u,d);const x=e.POINTS,v=r.length;e.drawArrays(x,d,v)};function tn(n){let e,i,o,r,a,s,t;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture. In each "),o=g("code"),r=P("requestAnimationFrame"),a=P(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=I(),t=g("canvas"),this.h()},l(c){e=D(c,"P",{});var u=U(e);i=y(u,"Create an array of render-size positions. Store this array in a texture. In each "),o=D(u,"CODE",{});var d=U(o);r=y(d,"requestAnimationFrame"),d.forEach(m),a=y(u,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),u.forEach(m),s=X(c),t=D(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(t).forEach(m),this.h()},h(){E(t,"id","canvas"),le(t,"background-color","black"),E(t,"width",tt),E(t,"height",nt)},m(c,u){T(c,e,u),M(e,i),M(e,o),M(o,r),M(e,a),T(c,s,u),T(c,t,u)},p:O,i:O,o:O,d(c){c&&m(e),c&&m(s),c&&m(t)}}}const tt=800,nt=600;function nn(n){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const o=i.getContext("webgl");if(!o)throw"gl undefined";Pe(o),N(o.canvas),Zt(o);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(t=>[Math.random()*tt,Math.random()*nt,0,0]).flat();function s(){if(!o)throw"Undefined params to render";for(let c=0;c<=a.length-2;c+=2)a[c]=(a[c]+Math.random()*2-1)%o.canvas.width,a[c+1]=(a[c+1]+Math.random()*0+1)%o.canvas.height;const t=ne(o,new Float32Array(a),3,3);en({gl:o,positionTex:t,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let on=class extends V{constructor(e){super(),W(this,e,nn,tn,G,{})}};const rn=`attribute float id;
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
`;let pe,he,Ie;const an=(n,e)=>{he=j(n,[rn,sn]),pe={idAttributeLocation:n.getAttribLocation(he,"id"),texDimensionsUniformLocation:n.getUniformLocation(he,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(he,"u_resolution")},Ie=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Ie),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW)},cn=n=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=n;N(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Ie),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(he),e.uniform2f(pe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(pe.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(pe.idAttributeLocation);const a=1,s=e.FLOAT,t=!1,c=0,u=0;e.vertexAttribPointer(pe.idAttributeLocation,a,s,t,c,u),e.drawArrays(e.POINTS,u,r.length)};function fn(n,e){const i=new Array(n).fill(0).map((a,s)=>s),o=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const un=`attribute vec4 position;
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

`;let se,ae,Xe,Le,Be,qe,He,xe,we;const mn=(n,e)=>{const{positions:i,texDimensions:o}=e;ae=j(n,[un,ln]),se={positionAttributeLocation:n.getAttribLocation(ae,"position"),positionTexLocation:n.getUniformLocation(ae,"positionTex"),texDimensionsUniformLocation:n.getUniformLocation(ae,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(ae,"u_resolution")},Xe=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Xe),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),Le=ne(n,new Float32Array(i),o.width,o.height),Be=ne(n,null,o.width,o.height),qe=ue(n,Le),He=ue(n,Be),xe={fb:qe,tex:Le},we={fb:He,tex:Be}},dn=n=>{const{gl:e,texDimensions:i}=n;e.bindFramebuffer(e.FRAMEBUFFER,we.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Xe),e.enableVertexAttribArray(se.positionAttributeLocation),e.vertexAttribPointer(se.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,xe.tex),e.useProgram(ae),e.uniform1i(se.positionTexLocation,0),e.uniform2f(se.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(se.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=xe;xe=we,we=o}return xe.tex};function pn(n){let e,i,o,r,a,s,t,c,u,d,x,v,h;return{c(){e=g("p"),i=P("Create an array of render-size positions. Store this array in a texture."),o=I(),r=g("p"),a=P("Create 2 textures which will be used to update the positions with a shader. In each "),s=g("code"),t=P("requestAnimationFrame"),c=P(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),u=I(),d=g("p"),x=P("Finally switch the two textures to read and write in the updated textures"),v=I(),h=g("canvas"),this.h()},l(_){e=D(_,"P",{});var $=U(e);i=y($,"Create an array of render-size positions. Store this array in a texture."),$.forEach(m),o=X(_),r=D(_,"P",{});var w=U(r);a=y(w,"Create 2 textures which will be used to update the positions with a shader. In each "),s=D(w,"CODE",{});var f=U(s);t=y(f,"requestAnimationFrame"),f.forEach(m),c=y(w,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),w.forEach(m),u=X(_),d=D(_,"P",{});var p=U(d);x=y(p,"Finally switch the two textures to read and write in the updated textures"),p.forEach(m),v=X(_),h=D(_,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(h).forEach(m),this.h()},h(){E(h,"id","canvas"),le(h,"background-color","black"),E(h,"width",ot),E(h,"height",it)},m(_,$){T(_,e,$),M(e,i),T(_,o,$),T(_,r,$),M(r,a),M(r,s),M(s,t),M(r,c),T(_,u,$),T(_,d,$),M(d,x),T(_,v,$),T(_,h,$)},p:O,i:O,o:O,d(_){_&&m(e),_&&m(o),_&&m(r),_&&m(u),_&&m(d),_&&m(v),_&&m(h)}}}const ot=800,it=600;function hn(n){function e(){const i=Ze();N(i.canvas);const{ids:o,positions:r,texDimensions:a}=fn(100,{width:ot,height:it});an(i,o),mn(i,{positions:r,texDimensions:a});function s(){N(i.canvas);const t=dn({gl:i,texDimensions:a});cn({gl:i,positionTex:t,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}let xn=class extends V{constructor(e){super(),W(this,e,hn,pn,G,{})}};const _n=`attribute float id;
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
`,Tn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let _e,Te,Me;const $n=(n,e)=>{Te=j(n,[_n,Tn]),_e={idAttributeLocation:n.getAttribLocation(Te,"id"),texDimensionsUniformLocation:n.getUniformLocation(Te,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(Te,"u_resolution")},Me=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Me),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW)},vn=n=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=n;N(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Me),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Te),e.uniform2f(_e.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(_e.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(_e.idAttributeLocation);const a=1,s=e.FLOAT,t=!1,c=0,u=0;e.vertexAttribPointer(_e.idAttributeLocation,a,s,t,c,u),e.drawArrays(e.POINTS,u,r.length)};function An(n,e){const i=new Array(n).fill(0).map((a,s)=>s),o=i.map(a=>[e.width/2+Math.random()*10,e.height/2+Math.random()*10,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const bn=`attribute vec4 position;
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
    vec2 direction = vec2(0.0, 0.0);

    // Iterate on the texture coordinates to compare with each other cell
    const float texWidth = 600.0;
    for (float x=0.0; x<1.0; x += 1.0 / texWidth) {
        vec2 otherTextCoord = vec2(x, 0.5);
        vec2 otherPosition = texture2D(positionTex, otherTextCoord).xy;

        vec2 diff = position - otherPosition;
        float mag = length(diff);
        if (mag < 20.0) {
            direction = direction + diff;
        }
    }
    direction = direction * vec2(0.01, 0.01);

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let ce,fe,Oe,Se,Ce,je,Ke,$e,Re;const wn=(n,e)=>{const{positions:i,texDimensions:o}=e;fe=j(n,[bn,En]),ce={positionAttributeLocation:n.getAttribLocation(fe,"position"),positionTexLocation:n.getUniformLocation(fe,"positionTex"),texDimensionsUniformLocation:n.getUniformLocation(fe,"texDimensions"),resolutionUniformLocation:n.getUniformLocation(fe,"u_resolution")},Oe=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,Oe),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),Se=ne(n,new Float32Array(i),o.width,o.height),Ce=ne(n,null,o.width,o.height),je=ue(n,Se),Ke=ue(n,Ce),$e={fb:je,tex:Se},Re={fb:Ke,tex:Ce}},Rn=n=>{const{gl:e,texDimensions:i}=n;e.bindFramebuffer(e.FRAMEBUFFER,Re.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Oe),e.enableVertexAttribArray(ce.positionAttributeLocation),e.vertexAttribPointer(ce.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,$e.tex),e.useProgram(fe),e.uniform1i(ce.positionTexLocation,0),e.uniform2f(ce.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ce.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=$e;$e=Re,Re=o}return $e.tex};function Fn(n){let e,i,o,r,a,s,t;return{c(){e=g("p"),i=P("Same principle with a shader to update positions and a shader to draw particles."),o=I(),r=g("p"),a=P(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=I(),t=g("canvas"),this.h()},l(c){e=D(c,"P",{});var u=U(e);i=y(u,"Same principle with a shader to update positions and a shader to draw particles."),u.forEach(m),o=X(c),r=D(c,"P",{});var d=U(r);a=y(d,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),d.forEach(m),s=X(c),t=D(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),U(t).forEach(m),this.h()},h(){E(t,"id","canvas"),le(t,"background-color","black"),E(t,"width",rt),E(t,"height",st)},m(c,u){T(c,e,u),M(e,i),T(c,o,u),T(c,r,u),M(r,a),T(c,s,u),T(c,t,u)},p:O,i:O,o:O,d(c){c&&m(e),c&&m(o),c&&m(r),c&&m(s),c&&m(t)}}}const rt=800,st=600;function gn(n){function e(){const i=Ze();N(i.canvas);const{ids:o,positions:r,texDimensions:a}=An(600,{width:rt,height:st});$n(i,o),wn(i,{positions:r,texDimensions:a});function s(){N(i.canvas);const t=Rn({gl:i,texDimensions:a});vn({gl:i,positionTex:t,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Z(()=>e()),[]}class Dn extends V{constructor(e){super(),W(this,e,gn,Fn,G,{})}}function Un(n){let e;return{c(){e=P("About")},l(i){e=y(i,"About")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Pn(n){let e;return{c(){e=P("Simple counter")},l(i){e=y(i,"Simple counter")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function yn(n){let e;return{c(){e=P("Particles")},l(i){e=y(i,"Particles")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Ln(n){let e;return{c(){e=P("Particles 2")},l(i){e=y(i,"Particles 2")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Bn(n){let e;return{c(){e=P("Positions Buffer")},l(i){e=y(i,"Positions Buffer")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Sn(n){let e;return{c(){e=P("Positions Texture")},l(i){e=y(i,"Positions Texture")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Cn(n){let e;return{c(){e=P("Positions Texture Draw & Update")},l(i){e=y(i,"Positions Texture Draw & Update")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function In(n){let e;return{c(){e=P("Positions Texture Advanced shader")},l(i){e=y(i,"Positions Texture Advanced shader")},m(i,o){T(i,e,o)},d(i){i&&m(e)}}}function Xn(n){let e,i,o,r,a,s,t,c,u,d,x,v,h,_,$,w;return e=new ee({props:{$$slots:{default:[Un]},$$scope:{ctx:n}}}),o=new ee({props:{$$slots:{default:[Pn]},$$scope:{ctx:n}}}),a=new ee({props:{$$slots:{default:[yn]},$$scope:{ctx:n}}}),t=new ee({props:{$$slots:{default:[Ln]},$$scope:{ctx:n}}}),u=new ee({props:{$$slots:{default:[Bn]},$$scope:{ctx:n}}}),x=new ee({props:{$$slots:{default:[Sn]},$$scope:{ctx:n}}}),h=new ee({props:{$$slots:{default:[Cn]},$$scope:{ctx:n}}}),$=new ee({props:{$$slots:{default:[In]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),i=I(),L(o.$$.fragment),r=I(),L(a.$$.fragment),s=I(),L(t.$$.fragment),c=I(),L(u.$$.fragment),d=I(),L(x.$$.fragment),v=I(),L(h.$$.fragment),_=I(),L($.$$.fragment)},l(f){B(e.$$.fragment,f),i=X(f),B(o.$$.fragment,f),r=X(f),B(a.$$.fragment,f),s=X(f),B(t.$$.fragment,f),c=X(f),B(u.$$.fragment,f),d=X(f),B(x.$$.fragment,f),v=X(f),B(h.$$.fragment,f),_=X(f),B($.$$.fragment,f)},m(f,p){S(e,f,p),T(f,i,p),S(o,f,p),T(f,r,p),S(a,f,p),T(f,s,p),S(t,f,p),T(f,c,p),S(u,f,p),T(f,d,p),S(x,f,p),T(f,v,p),S(h,f,p),T(f,_,p),S($,f,p),w=!0},p(f,p){const l={};p&1&&(l.$$scope={dirty:p,ctx:f}),e.$set(l);const A={};p&1&&(A.$$scope={dirty:p,ctx:f}),o.$set(A);const K={};p&1&&(K.$$scope={dirty:p,ctx:f}),a.$set(K);const Q={};p&1&&(Q.$$scope={dirty:p,ctx:f}),t.$set(Q);const z={};p&1&&(z.$$scope={dirty:p,ctx:f}),u.$set(z);const Y={};p&1&&(Y.$$scope={dirty:p,ctx:f}),x.$set(Y);const k={};p&1&&(k.$$scope={dirty:p,ctx:f}),h.$set(k);const q={};p&1&&(q.$$scope={dirty:p,ctx:f}),$.$set(q)},i(f){w||(R(e.$$.fragment,f),R(o.$$.fragment,f),R(a.$$.fragment,f),R(t.$$.fragment,f),R(u.$$.fragment,f),R(x.$$.fragment,f),R(h.$$.fragment,f),R($.$$.fragment,f),w=!0)},o(f){F(e.$$.fragment,f),F(o.$$.fragment,f),F(a.$$.fragment,f),F(t.$$.fragment,f),F(u.$$.fragment,f),F(x.$$.fragment,f),F(h.$$.fragment,f),F($.$$.fragment,f),w=!1},d(f){C(e,f),f&&m(i),C(o,f),f&&m(r),C(a,f),f&&m(s),C(t,f),f&&m(c),C(u,f),f&&m(d),C(x,f),f&&m(v),C(h,f),f&&m(_),C($,f)}}}function Mn(n){let e,i,o,r,a,s,t,c;return{c(){e=g("p"),i=P("This page is an experiment to run simulation on the GPU."),o=I(),r=g("p"),a=P(`I am copying code from
                `),s=g("a"),t=P("this site"),c=P(`
                and adding basic typings for typescript.`),this.h()},l(u){e=D(u,"P",{});var d=U(e);i=y(d,"This page is an experiment to run simulation on the GPU."),d.forEach(m),o=X(u),r=D(u,"P",{});var x=U(r);a=y(x,`I am copying code from
                `),s=D(x,"A",{target:!0,href:!0});var v=U(s);t=y(v,"this site"),v.forEach(m),c=y(x,`
                and adding basic typings for typescript.`),x.forEach(m),this.h()},h(){E(s,"target","none"),E(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(u,d){T(u,e,d),M(e,i),T(u,o,d),T(u,r,d),M(r,a),M(r,s),M(s,t),M(r,c)},p:O,d(u){u&&m(e),u&&m(o),u&&m(r)}}}function On(n){let e,i;return e=new Bt({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}function Nn(n){let e,i;return e=new Xt({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}function zn(n){let e,i;return e=new Yt({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}function Vn(n){let e,i;return e=new Kt({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}function Wn(n){let e,i;return e=new on({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}function Gn(n){let e,i;return e=new xn({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}function Yn(n){let e,i;return e=new Dn({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}function kn(n){let e,i,o,r,a,s,t,c,u,d,x,v,h,_,$,w,f,p;return e=new wt({props:{$$slots:{default:[Xn]},$$scope:{ctx:n}}}),o=new te({props:{$$slots:{default:[Mn]},$$scope:{ctx:n}}}),a=new te({props:{$$slots:{default:[On]},$$scope:{ctx:n}}}),t=new te({props:{$$slots:{default:[Nn]},$$scope:{ctx:n}}}),u=new te({props:{$$slots:{default:[zn]},$$scope:{ctx:n}}}),x=new te({props:{$$slots:{default:[Vn]},$$scope:{ctx:n}}}),h=new te({props:{$$slots:{default:[Wn]},$$scope:{ctx:n}}}),$=new te({props:{$$slots:{default:[Gn]},$$scope:{ctx:n}}}),f=new te({props:{$$slots:{default:[Yn]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),i=I(),L(o.$$.fragment),r=I(),L(a.$$.fragment),s=I(),L(t.$$.fragment),c=I(),L(u.$$.fragment),d=I(),L(x.$$.fragment),v=I(),L(h.$$.fragment),_=I(),L($.$$.fragment),w=I(),L(f.$$.fragment)},l(l){B(e.$$.fragment,l),i=X(l),B(o.$$.fragment,l),r=X(l),B(a.$$.fragment,l),s=X(l),B(t.$$.fragment,l),c=X(l),B(u.$$.fragment,l),d=X(l),B(x.$$.fragment,l),v=X(l),B(h.$$.fragment,l),_=X(l),B($.$$.fragment,l),w=X(l),B(f.$$.fragment,l)},m(l,A){S(e,l,A),T(l,i,A),S(o,l,A),T(l,r,A),S(a,l,A),T(l,s,A),S(t,l,A),T(l,c,A),S(u,l,A),T(l,d,A),S(x,l,A),T(l,v,A),S(h,l,A),T(l,_,A),S($,l,A),T(l,w,A),S(f,l,A),p=!0},p(l,A){const K={};A&1&&(K.$$scope={dirty:A,ctx:l}),e.$set(K);const Q={};A&1&&(Q.$$scope={dirty:A,ctx:l}),o.$set(Q);const z={};A&1&&(z.$$scope={dirty:A,ctx:l}),a.$set(z);const Y={};A&1&&(Y.$$scope={dirty:A,ctx:l}),t.$set(Y);const k={};A&1&&(k.$$scope={dirty:A,ctx:l}),u.$set(k);const q={};A&1&&(q.$$scope={dirty:A,ctx:l}),x.$set(q);const J={};A&1&&(J.$$scope={dirty:A,ctx:l}),h.$set(J);const oe={};A&1&&(oe.$$scope={dirty:A,ctx:l}),$.$set(oe);const ie={};A&1&&(ie.$$scope={dirty:A,ctx:l}),f.$set(ie)},i(l){p||(R(e.$$.fragment,l),R(o.$$.fragment,l),R(a.$$.fragment,l),R(t.$$.fragment,l),R(u.$$.fragment,l),R(x.$$.fragment,l),R(h.$$.fragment,l),R($.$$.fragment,l),R(f.$$.fragment,l),p=!0)},o(l){F(e.$$.fragment,l),F(o.$$.fragment,l),F(a.$$.fragment,l),F(t.$$.fragment,l),F(u.$$.fragment,l),F(x.$$.fragment,l),F(h.$$.fragment,l),F($.$$.fragment,l),F(f.$$.fragment,l),p=!1},d(l){C(e,l),l&&m(i),C(o,l),l&&m(r),C(a,l),l&&m(s),C(t,l),l&&m(c),C(u,l),l&&m(d),C(x,l),l&&m(v),C(h,l),l&&m(_),C($,l),l&&m(w),C(f,l)}}}function qn(n){let e,i,o;return i=new $t({props:{$$slots:{default:[kn]},$$scope:{ctx:n}}}),{c(){e=g("div"),L(i.$$.fragment)},l(r){e=D(r,"DIV",{});var a=U(e);B(i.$$.fragment,a),a.forEach(m)},m(r,a){T(r,e,a),S(i,e,null),o=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),i.$set(s)},i(r){o||(R(i.$$.fragment,r),o=!0)},o(r){F(i.$$.fragment,r),o=!1},d(r){r&&m(e),C(i)}}}class Hn extends V{constructor(e){super(),W(this,e,null,qn,G,{})}}function jn(n){let e,i;return e=new Hn({}),{c(){L(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){S(e,o,r),i=!0},p:O,i(o){i||(R(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){C(e,o)}}}class eo extends V{constructor(e){super(),W(this,e,null,jn,G,{})}}export{eo as default};
