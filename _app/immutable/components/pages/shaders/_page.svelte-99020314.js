import{S as G,i as k,s as W,C as re,k as P,l as y,m as B,h as T,n as x,b as $,K as _e,E as se,F as ae,G as ce,f as A,t as R,H as te,R as Ue,o as J,j as Pe,Q as ye,T as xe,U as Re,A as Be,V as Se,g as Le,d as Ce,q as C,a as S,r as I,c as L,D as O,B as X,p as Te,w as F,x as g,y as D,z as U}from"../../../chunks/index-ff9e742a.js";import{w as oe}from"../../../chunks/index-84a8d4d9.js";let Ie=1;function we(){return`svelte-tabs-${Ie++}`}function Xe(o){let e,r,i,n;const a=o[4].default,s=re(a,o,o[3],null);return{c(){e=P("div"),s&&s.c(),this.h()},l(t){e=y(t,"DIV",{class:!0});var l=B(e);s&&s.l(l),l.forEach(T),this.h()},h(){x(e,"class","svelte-tabs")},m(t,l){$(t,e,l),s&&s.m(e,null),r=!0,i||(n=_e(e,"keydown",o[1]),i=!0)},p(t,[l]){s&&s.p&&(!r||l&8)&&se(s,a,t,t[3],r?ce(a,t[3],l,null):ae(t[3]),null)},i(t){r||(A(s,t),r=!0)},o(t){R(s,t),r=!1},d(t){t&&T(e),s&&s.d(t),i=!1,n()}}}const he={};function Me(o,e,r){const i=o.indexOf(e);o.splice(i,1),r.update(n=>n===e?o[i]||o[o.length-1]:n)}function Ne(o,e,r){let i,{$$slots:n={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const t=[],l=[],u=[],m=oe({}),c=oe({}),d=oe(null);te(o,d,p=>r(5,i=p));const f=oe(null);function _(p,E,w){p.push(E),w.update(M=>M||E),ye(()=>Me(p,E,w))}function v(p){const E=l.indexOf(p);d.set(p),f.set(u[E])}Ue(he,{registerTab(p){_(l,p,d)},registerTabElement(p){t.push(p)},registerPanel(p){_(u,p,f)},selectTab:v,selectedTab:d,selectedPanel:f,controls:m,labeledBy:c}),J(()=>{v(l[s])}),Pe(()=>{for(let p=0;p<l.length;p++)m.update(E=>({...E,[l[p].id]:u[p].id})),c.update(E=>({...E,[u[p].id]:l[p].id}))});async function b(p){if(p.target.classList.contains("svelte-tabs__tab")){let E=l.indexOf(i);switch(p.key){case"ArrowRight":E+=1,E>l.length-1&&(E=0),v(l[E]),t[E].focus();break;case"ArrowLeft":E-=1,E<0&&(E=l.length-1),v(l[E]),t[E].focus()}}}return o.$$set=p=>{"initialSelectedIndex"in p&&r(2,s=p.initialSelectedIndex),"$$scope"in p&&r(3,a=p.$$scope)},[d,b,s,a,n]}class Oe extends G{constructor(e){super(),k(this,e,Ne,Xe,W,{initialSelectedIndex:2})}}function Ge(o){let e,r,i,n,a,s;const t=o[9].default,l=re(t,o,o[8],null);return{c(){e=P("li"),l&&l.c(),this.h()},l(u){e=y(u,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=B(e);l&&l.l(m),m.forEach(T),this.h()},h(){x(e,"role","tab"),x(e,"id",o[3].id),x(e,"aria-controls",r=o[2][o[3].id]),x(e,"aria-selected",o[1]),x(e,"tabindex",i=o[1]?0:-1),x(e,"class","svelte-tabs__tab svelte-1fbofsd"),xe(e,"svelte-tabs__selected",o[1])},m(u,m){$(u,e,m),l&&l.m(e,null),o[10](e),n=!0,a||(s=_e(e,"click",o[11]),a=!0)},p(u,[m]){l&&l.p&&(!n||m&256)&&se(l,t,u,u[8],n?ce(t,u[8],m,null):ae(u[8]),null),(!n||m&4&&r!==(r=u[2][u[3].id]))&&x(e,"aria-controls",r),(!n||m&2)&&x(e,"aria-selected",u[1]),(!n||m&2&&i!==(i=u[1]?0:-1))&&x(e,"tabindex",i),(!n||m&2)&&xe(e,"svelte-tabs__selected",u[1])},i(u){n||(A(l,u),n=!0)},o(u){R(l,u),n=!1},d(u){u&&T(e),l&&l.d(u),o[10](null),a=!1,s()}}}function ke(o,e,r){let i,n,{$$slots:a={},$$scope:s}=e,t;const l={id:we()},{registerTab:u,registerTabElement:m,selectTab:c,selectedTab:d,controls:f}=Re(he);te(o,d,p=>r(7,i=p)),te(o,f,p=>r(2,n=p));let _;u(l),J(async()=>{await Be(),m(t)});function v(p){Se[p?"unshift":"push"](()=>{t=p,r(0,t)})}const b=()=>c(l);return o.$$set=p=>{"$$scope"in p&&r(8,s=p.$$scope)},o.$$.update=()=>{o.$$.dirty&128&&r(1,_=i===l)},[t,_,n,l,c,d,f,i,s,a,v,b]}class Z extends G{constructor(e){super(),k(this,e,ke,Ge,W,{})}}function We(o){let e,r;const i=o[1].default,n=re(i,o,o[0],null);return{c(){e=P("ul"),n&&n.c(),this.h()},l(a){e=y(a,"UL",{role:!0,class:!0});var s=B(e);n&&n.l(s),s.forEach(T),this.h()},h(){x(e,"role","tablist"),x(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){$(a,e,s),n&&n.m(e,null),r=!0},p(a,[s]){n&&n.p&&(!r||s&1)&&se(n,i,a,a[0],r?ce(i,a[0],s,null):ae(a[0]),null)},i(a){r||(A(n,a),r=!0)},o(a){R(n,a),r=!1},d(a){a&&T(e),n&&n.d(a)}}}function Ve(o,e,r){let{$$slots:i={},$$scope:n}=e;return o.$$set=a=>{"$$scope"in a&&r(0,n=a.$$scope)},[n,i]}class Ye extends G{constructor(e){super(),k(this,e,Ve,We,W,{})}}function be(o){let e;const r=o[6].default,i=re(r,o,o[5],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,a){i&&i.m(n,a),e=!0},p(n,a){i&&i.p&&(!e||a&32)&&se(i,r,n,n[5],e?ce(r,n[5],a,null):ae(n[5]),null)},i(n){e||(A(i,n),e=!0)},o(n){R(i,n),e=!1},d(n){i&&i.d(n)}}}function ze(o){let e,r,i,n=o[1]===o[2]&&be(o);return{c(){e=P("div"),n&&n.c(),this.h()},l(a){e=y(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=B(e);n&&n.l(s),s.forEach(T),this.h()},h(){x(e,"id",o[2].id),x(e,"aria-labelledby",r=o[0][o[2].id]),x(e,"class","svelte-tabs__tab-panel svelte-epfyet"),x(e,"role","tabpanel")},m(a,s){$(a,e,s),n&&n.m(e,null),i=!0},p(a,[s]){a[1]===a[2]?n?(n.p(a,s),s&2&&A(n,1)):(n=be(a),n.c(),A(n,1),n.m(e,null)):n&&(Le(),R(n,1,1,()=>{n=null}),Ce()),(!i||s&1&&r!==(r=a[0][a[2].id]))&&x(e,"aria-labelledby",r)},i(a){i||(A(n),i=!0)},o(a){R(n),i=!1},d(a){a&&T(e),n&&n.d()}}}function He(o,e,r){let i,n,{$$slots:a={},$$scope:s}=e;const t={id:we()},{registerPanel:l,selectedPanel:u,labeledBy:m}=Re(he);return te(o,u,c=>r(1,n=c)),te(o,m,c=>r(0,i=c)),l(t),o.$$set=c=>{"$$scope"in c&&r(5,s=c.$$scope)},[i,n,t,u,m,s,a]}class ee extends G{constructor(e){super(),k(this,e,He,ze,W,{})}}const qe=["VERTEX_SHADER","FRAGMENT_SHADER"];function Fe(o){if(!o.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!o.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function pe(o,e,r,i){const n=o.createTexture();if(!n)throw"Can not create texture";return o.bindTexture(o.TEXTURE_2D,n),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,r,i,0,o.RGBA,o.FLOAT,e),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),n}function Ae(o,e){const r=o.createFramebuffer();if(!r)throw"Can not create frame buffer";return o.bindFramebuffer(o.FRAMEBUFFER,r),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),r}function K(o,e,r,i,n){const a=[];for(let t=0;t<e.length;++t){const l=qe[t]==="VERTEX_SHADER"?o.VERTEX_SHADER:o.FRAGMENT_SHADER,u=je(o,e[t],l,n);if(!u)throw"Can not create shader";a.push(u)}const s=Ke(o,a,r,i,n);if(!s)throw"Can not create program";return s}function je(o,e,r,i){const n=i||console.log,a=o.createShader(r);if(!a)throw"Could not load shader";if(o.shaderSource(a,e),o.compileShader(a),!o.getShaderParameter(a,o.COMPILE_STATUS)){const t=o.getShaderInfoLog(a);return n(new Error("*** Error compiling shader '"+a+"':"+t+`
`+e.split(`
`).map((l,u)=>`${u+1}: ${l}`).join(`
`))),o.deleteShader(a),null}return a}function Ke(o,e,r,i,n){const a=n||console.log,s=o.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){o.attachShader(s,l)}),r&&r.forEach(function(l,u){o.bindAttribLocation(s,i?i[u]:u,l)}),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS)){const l=o.getProgramInfoLog(s);return a("Error in program linking:"+l),o.deleteProgram(s),null}return s}function Q(o,e){e=e||1;const r=o.clientWidth*e|0,i=o.clientHeight*e|0;return o.width!==r||o.height!==i?(o.width=r,o.height=i,!0):!1}function Qe(o){let e,r,i,n,a,s;return{c(){e=P("p"),r=C(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),i=S(),n=P("ul"),a=S(),s=P("canvas"),this.h()},l(t){e=y(t,"P",{});var l=B(e);r=I(l,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),l.forEach(T),i=L(t),n=y(t,"UL",{id:!0}),B(n).forEach(T),a=L(t),s=y(t,"CANVAS",{id:!0}),B(s).forEach(T),this.h()},h(){x(n,"id","result"),x(s,"id","canvas")},m(t,l){$(t,e,l),O(e,r),$(t,i,l),$(t,n,l),$(t,a,l),$(t,s,l)},p:X,i:X,o:X,d(t){t&&T(e),t&&T(i),t&&T(n),t&&T(a),t&&T(s)}}}function Je(o){const e=document.createElement("li");e.textContent=o.toString();const r=document.getElementById("result");if(!r)throw"result element undefined";r.appendChild(e)}function Ze(o){function e(){const r=`
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `,i=`
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `,s=document.createElement("canvas");s.width=3,s.height=3;const t=s.getContext("webgl");if(!t)throw"Coulndt get context";const l=K(t,[r,i]);if(!l)throw"Could not get program";const u=t.getAttribLocation(l,"position"),m=t.getUniformLocation(l,"srcTex"),c=t.getUniformLocation(l,"srcDimensions"),d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0);const f=3,_=3,v=t.createTexture();t.bindTexture(t.TEXTURE_2D,v),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,f,_,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(l),t.uniform1i(m,0),t.uniform2f(c,f,_),t.drawArrays(t.TRIANGLES,0,6);const b=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,b);for(let p=0;p<3*3;++p)Je(b[p*4])}return J(e),[]}class et extends G{constructor(e){super(),k(this,e,Ze,Qe,W,{})}}const tt=Float32Array;function ge(o,e,r,i,n,a){const s=new tt(16);return s[0]=2/(e-o),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(i-r),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(n-a),s[11]=0,s[12]=(o+e)/(o-e),s[13]=(r+i)/(r-i),s[14]=(n+a)/(n-a),s[15]=1,s}function nt(o){let e;return{c(){e=P("canvas"),this.h()},l(r){e=y(r,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(e).forEach(T),this.h()},h(){x(e,"id","canvas"),Te(e,"background-color","black"),x(e,"width","800"),x(e,"height","600")},m(r,i){$(r,e,i)},p:X,i:X,o:X,d(r){r&&T(e)}}}function ot(o){function e(){const r=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,i=`
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
  `,n=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const t=s.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const m=K(t,[r,i]),c=K(t,[n,a]);if(!m||!c)throw"Can not create programs";const d={position:t.getAttribLocation(m,"position"),positionTex:t.getUniformLocation(m,"positionTex"),velocityTex:t.getUniformLocation(m,"velocityTex"),texDimensions:t.getUniformLocation(m,"texDimensions"),canvasDimensions:t.getUniformLocation(m,"canvasDimensions"),deltaTime:t.getUniformLocation(m,"deltaTime")},f={id:t.getAttribLocation(c,"id"),positionTex:t.getUniformLocation(c,"positionTex"),texDimensions:t.getUniformLocation(c,"texDimensions"),matrix:t.getUniformLocation(c,"matrix")},_=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,_),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const v=300,b=20,p=v*b,E=new Array(p).fill(0).map((h,N)=>N),w=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,w),t.bufferData(t.ARRAY_BUFFER,new Float32Array(E),t.STATIC_DRAW),Q(t.canvas);const M=(h,N)=>(N===void 0&&(N=h,h=0),Math.random()*(N-h)+h),fe=new Float32Array(E.map(h=>[M(s.width),M(s.height),0,0]).flat()),le=new Float32Array(E.map(h=>[M(-300,300),M(-300,300),0,0]).flat());function V(h,N,j,De){const ve=h.createTexture();return h.bindTexture(h.TEXTURE_2D,ve),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,j,De,0,h.RGBA,h.FLOAT,N),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.NEAREST),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.NEAREST),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_S,h.CLAMP_TO_EDGE),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_T,h.CLAMP_TO_EDGE),ve}const Y=V(t,le,v,b),z=V(t,fe,v,b),H=V(t,null,v,b);if(!z||!H)throw"Can not create position textures";function q(h,N){const j=h.createFramebuffer();return h.bindFramebuffer(h.FRAMEBUFFER,j),h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,N,0),j}const ue=q(t,z),me=q(t,H);let de={fb:ue,tex:z},ne={fb:me,tex:H},$e=0;function Ee(h){if(!t)return;h*=.001;const N=h-$e;$e=h,Q(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,ne.fb),t.viewport(0,0,v,b),t.bindBuffer(t.ARRAY_BUFFER,_),t.enableVertexAttribArray(d.position),t.vertexAttribPointer(d.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,de.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,Y),t.useProgram(m),t.uniform1i(d.positionTex,0),t.uniform1i(d.velocityTex,1),t.uniform2f(d.texDimensions,v,b),t.uniform2f(d.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(d.deltaTime,N),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,w),t.enableVertexAttribArray(f.id),t.vertexAttribPointer(f.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ne.tex),t.useProgram(c),t.uniform2f(f.texDimensions,v,v),t.uniform1i(f.positionTex,0),t.uniformMatrix4fv(f.matrix,!1,ge(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,p);{const j=de;de=ne,ne=j}requestAnimationFrame(Ee)}requestAnimationFrame(Ee)}return J(()=>e()),[]}class it extends G{constructor(e){super(),k(this,e,ot,nt,W,{})}}const ie=(o,e)=>(e===void 0&&(e=o,o=0),Math.random()*(e-o)+o);function rt(o,e,r,i){const n=o*e,a=new Array(n).fill(0).map((l,u)=>u),s=new Float32Array(a.map(l=>[ie(r),ie(i),0,0]).flat()),t=new Float32Array(a.map(l=>[ie(-300,300),ie(-300,300),0,0]).flat());return{numParticles:n,ids:new Float32Array(a),positions:s,velocities:t}}const st=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,at=`precision highp float;

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

`,ct=`  attribute float id;
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

`,ft=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function lt(o){let e;return{c(){e=P("canvas"),this.h()},l(r){e=y(r,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(e).forEach(T),this.h()},h(){x(e,"id","canvas"),Te(e,"background-color","black"),x(e,"width","800"),x(e,"height","600")},m(r,i){$(r,e,i)},p:X,i:X,o:X,d(r){r&&T(e)}}}function ut(o){function e(){const n=document.getElementById("canvas");if(!n)throw"canvas undefined";const a=n.getContext("webgl");if(!a)throw"gl undefined";Fe(a);const s=K(a,[st,at]),t=K(a,[ct,ft]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},u={id:a.getAttribLocation(t,"id"),positionTex:a.getUniformLocation(t,"positionTex"),texDimensions:a.getUniformLocation(t,"texDimensions"),matrix:a.getUniformLocation(t,"matrix")},m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const c=300,d=20,{numParticles:f,ids:_,positions:v,velocities:b}=rt(c,d,n.width,n.height),p=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,p),a.bufferData(a.ARRAY_BUFFER,new Float32Array(_),a.STATIC_DRAW),Q(a.canvas);const E=pe(a,b,c,d),w=pe(a,v,c,d),M=pe(a,null,c,d),fe=Ae(a,w),le=Ae(a,M);let V={fb:fe,tex:w},Y={fb:le,tex:M},z=0;function H(q){if(!a||!m||!p)throw"Undefined params to render";q*=.001;const ue=q-z;z=q,Q(a.canvas),i(a,Y,c,d,m,l,V,E,s,ue),r(a,c,p,u,Y,t,f);{const me=V;V=Y,Y=me}requestAnimationFrame(H)}requestAnimationFrame(H)}const r=(n,a,s,t,l,u,m)=>{n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.id),n.vertexAttribPointer(t.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,l.tex),n.useProgram(u),n.uniform2f(t.texDimensions,a,a),n.uniform1i(t.positionTex,0),n.uniformMatrix4fv(t.matrix,!1,ge(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,m)},i=(n,a,s,t,l,u,m,c,d,f)=>{n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,s,t),n.bindBuffer(n.ARRAY_BUFFER,l),n.enableVertexAttribArray(u.position),n.vertexAttribPointer(u.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,m.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,c),n.useProgram(d),n.uniform1i(u.positionTex,0),n.uniform1i(u.velocityTex,1),n.uniform2f(u.texDimensions,s,t),n.uniform2f(u.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f(u.deltaTime,f),n.drawArrays(n.TRIANGLES,0,6)};return J(()=>e()),[]}class mt extends G{constructor(e){super(),k(this,e,ut,lt,W,{})}}const dt=`attribute vec2 a_position;

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
`,pt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function _t(o){let e,r,i,n,a,s,t,l,u,m,c,d;return{c(){e=P("p"),r=C(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),i=P("code"),n=C("requestAnimationFrame"),a=C(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=S(),t=P("canvas"),l=S(),u=P("button"),m=C("Add position"),this.h()},l(f){e=y(f,"P",{});var _=B(e);r=I(_,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),i=y(_,"CODE",{});var v=B(i);n=I(v,"requestAnimationFrame"),v.forEach(T),a=I(_,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),_.forEach(T),s=L(f),t=y(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(t).forEach(T),l=L(f),u=y(f,"BUTTON",{});var b=B(u);m=I(b,"Add position"),b.forEach(T),this.h()},h(){x(t,"id","canvas"),Te(t,"background-color","black"),x(t,"width","800"),x(t,"height","600")},m(f,_){$(f,e,_),O(e,r),O(e,i),O(i,n),O(e,a),$(f,s,_),$(f,t,_),$(f,l,_),$(f,u,_),O(u,m),c||(d=_e(u,"click",o[1]),c=!0)},p:X,i:X,o:X,d(f){f&&T(e),f&&T(s),f&&T(t),f&&T(l),f&&T(u),c=!1,d()}}}function Tt(o){const e=[50,50,50,150,150,150,150,50,200,200];function r(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Fe(s);const t=K(s,[dt,pt]);Q(s.canvas);const l=s.getAttribLocation(t,"a_position"),u=s.getUniformLocation(t,"u_resolution"),m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function c(){if(!s)throw"Undefined params to render";for(let w=0;w<=e.length-2;w+=2)e[w]=(e[w]+Math.random()*2-1)%s.canvas.width,e[w+1]=(e[w+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),Q(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(t),s.uniform2f(u,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,m);const d=2,f=s.FLOAT,_=!1,v=0,b=0;s.vertexAttribPointer(l,d,f,_,v,b);var p=s.POINTS,E=e.length/2;s.drawArrays(p,b,E),requestAnimationFrame(c)}requestAnimationFrame(c)}const i=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return J(()=>r()),[i,()=>i()]}class ht extends G{constructor(e){super(),k(this,e,Tt,_t,W,{})}}function $t(o){let e;return{c(){e=C("About")},l(r){e=I(r,"About")},m(r,i){$(r,e,i)},d(r){r&&T(e)}}}function Et(o){let e;return{c(){e=C("Simple counter")},l(r){e=I(r,"Simple counter")},m(r,i){$(r,e,i)},d(r){r&&T(e)}}}function vt(o){let e;return{c(){e=C("Particles")},l(r){e=I(r,"Particles")},m(r,i){$(r,e,i)},d(r){r&&T(e)}}}function xt(o){let e;return{c(){e=C("Particles 2")},l(r){e=I(r,"Particles 2")},m(r,i){$(r,e,i)},d(r){r&&T(e)}}}function bt(o){let e;return{c(){e=C("Positions Buffer")},l(r){e=I(r,"Positions Buffer")},m(r,i){$(r,e,i)},d(r){r&&T(e)}}}function At(o){let e,r,i,n,a,s,t,l,u,m;return e=new Z({props:{$$slots:{default:[$t]},$$scope:{ctx:o}}}),i=new Z({props:{$$slots:{default:[Et]},$$scope:{ctx:o}}}),a=new Z({props:{$$slots:{default:[vt]},$$scope:{ctx:o}}}),t=new Z({props:{$$slots:{default:[xt]},$$scope:{ctx:o}}}),u=new Z({props:{$$slots:{default:[bt]},$$scope:{ctx:o}}}),{c(){F(e.$$.fragment),r=S(),F(i.$$.fragment),n=S(),F(a.$$.fragment),s=S(),F(t.$$.fragment),l=S(),F(u.$$.fragment)},l(c){g(e.$$.fragment,c),r=L(c),g(i.$$.fragment,c),n=L(c),g(a.$$.fragment,c),s=L(c),g(t.$$.fragment,c),l=L(c),g(u.$$.fragment,c)},m(c,d){D(e,c,d),$(c,r,d),D(i,c,d),$(c,n,d),D(a,c,d),$(c,s,d),D(t,c,d),$(c,l,d),D(u,c,d),m=!0},p(c,d){const f={};d&1&&(f.$$scope={dirty:d,ctx:c}),e.$set(f);const _={};d&1&&(_.$$scope={dirty:d,ctx:c}),i.$set(_);const v={};d&1&&(v.$$scope={dirty:d,ctx:c}),a.$set(v);const b={};d&1&&(b.$$scope={dirty:d,ctx:c}),t.$set(b);const p={};d&1&&(p.$$scope={dirty:d,ctx:c}),u.$set(p)},i(c){m||(A(e.$$.fragment,c),A(i.$$.fragment,c),A(a.$$.fragment,c),A(t.$$.fragment,c),A(u.$$.fragment,c),m=!0)},o(c){R(e.$$.fragment,c),R(i.$$.fragment,c),R(a.$$.fragment,c),R(t.$$.fragment,c),R(u.$$.fragment,c),m=!1},d(c){U(e,c),c&&T(r),U(i,c),c&&T(n),U(a,c),c&&T(s),U(t,c),c&&T(l),U(u,c)}}}function Rt(o){let e,r,i,n,a,s,t,l;return{c(){e=P("p"),r=C("This page is an experiment to run simulation on the GPU."),i=S(),n=P("p"),a=C(`I am copying code from
                `),s=P("a"),t=C("this site"),l=C(`
                and adding basic typings for typescript.`),this.h()},l(u){e=y(u,"P",{});var m=B(e);r=I(m,"This page is an experiment to run simulation on the GPU."),m.forEach(T),i=L(u),n=y(u,"P",{});var c=B(n);a=I(c,`I am copying code from
                `),s=y(c,"A",{target:!0,href:!0});var d=B(s);t=I(d,"this site"),d.forEach(T),l=I(c,`
                and adding basic typings for typescript.`),c.forEach(T),this.h()},h(){x(s,"target","none"),x(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(u,m){$(u,e,m),O(e,r),$(u,i,m),$(u,n,m),O(n,a),O(n,s),O(s,t),O(n,l)},p:X,d(u){u&&T(e),u&&T(i),u&&T(n)}}}function wt(o){let e,r;return e=new et({}),{c(){F(e.$$.fragment)},l(i){g(e.$$.fragment,i)},m(i,n){D(e,i,n),r=!0},i(i){r||(A(e.$$.fragment,i),r=!0)},o(i){R(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function Ft(o){let e,r;return e=new it({}),{c(){F(e.$$.fragment)},l(i){g(e.$$.fragment,i)},m(i,n){D(e,i,n),r=!0},i(i){r||(A(e.$$.fragment,i),r=!0)},o(i){R(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function gt(o){let e,r;return e=new mt({}),{c(){F(e.$$.fragment)},l(i){g(e.$$.fragment,i)},m(i,n){D(e,i,n),r=!0},i(i){r||(A(e.$$.fragment,i),r=!0)},o(i){R(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function Dt(o){let e,r;return e=new ht({}),{c(){F(e.$$.fragment)},l(i){g(e.$$.fragment,i)},m(i,n){D(e,i,n),r=!0},i(i){r||(A(e.$$.fragment,i),r=!0)},o(i){R(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function Ut(o){let e,r,i,n,a,s,t,l,u,m,c,d;return e=new Ye({props:{$$slots:{default:[At]},$$scope:{ctx:o}}}),i=new ee({props:{$$slots:{default:[Rt]},$$scope:{ctx:o}}}),a=new ee({props:{$$slots:{default:[wt]},$$scope:{ctx:o}}}),t=new ee({props:{$$slots:{default:[Ft]},$$scope:{ctx:o}}}),u=new ee({props:{$$slots:{default:[gt]},$$scope:{ctx:o}}}),c=new ee({props:{$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){F(e.$$.fragment),r=S(),F(i.$$.fragment),n=S(),F(a.$$.fragment),s=S(),F(t.$$.fragment),l=S(),F(u.$$.fragment),m=S(),F(c.$$.fragment)},l(f){g(e.$$.fragment,f),r=L(f),g(i.$$.fragment,f),n=L(f),g(a.$$.fragment,f),s=L(f),g(t.$$.fragment,f),l=L(f),g(u.$$.fragment,f),m=L(f),g(c.$$.fragment,f)},m(f,_){D(e,f,_),$(f,r,_),D(i,f,_),$(f,n,_),D(a,f,_),$(f,s,_),D(t,f,_),$(f,l,_),D(u,f,_),$(f,m,_),D(c,f,_),d=!0},p(f,_){const v={};_&1&&(v.$$scope={dirty:_,ctx:f}),e.$set(v);const b={};_&1&&(b.$$scope={dirty:_,ctx:f}),i.$set(b);const p={};_&1&&(p.$$scope={dirty:_,ctx:f}),a.$set(p);const E={};_&1&&(E.$$scope={dirty:_,ctx:f}),t.$set(E);const w={};_&1&&(w.$$scope={dirty:_,ctx:f}),u.$set(w);const M={};_&1&&(M.$$scope={dirty:_,ctx:f}),c.$set(M)},i(f){d||(A(e.$$.fragment,f),A(i.$$.fragment,f),A(a.$$.fragment,f),A(t.$$.fragment,f),A(u.$$.fragment,f),A(c.$$.fragment,f),d=!0)},o(f){R(e.$$.fragment,f),R(i.$$.fragment,f),R(a.$$.fragment,f),R(t.$$.fragment,f),R(u.$$.fragment,f),R(c.$$.fragment,f),d=!1},d(f){U(e,f),f&&T(r),U(i,f),f&&T(n),U(a,f),f&&T(s),U(t,f),f&&T(l),U(u,f),f&&T(m),U(c,f)}}}function Pt(o){let e,r,i;return r=new Oe({props:{$$slots:{default:[Ut]},$$scope:{ctx:o}}}),{c(){e=P("div"),F(r.$$.fragment)},l(n){e=y(n,"DIV",{});var a=B(e);g(r.$$.fragment,a),a.forEach(T)},m(n,a){$(n,e,a),D(r,e,null),i=!0},p(n,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:n}),r.$set(s)},i(n){i||(A(r.$$.fragment,n),i=!0)},o(n){R(r.$$.fragment,n),i=!1},d(n){n&&T(e),U(r)}}}class yt extends G{constructor(e){super(),k(this,e,null,Pt,W,{})}}function Bt(o){let e,r;return e=new yt({}),{c(){F(e.$$.fragment)},l(i){g(e.$$.fragment,i)},m(i,n){D(e,i,n),r=!0},p:X,i(i){r||(A(e.$$.fragment,i),r=!0)},o(i){R(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}class Ct extends G{constructor(e){super(),k(this,e,null,Bt,W,{})}}export{Ct as default};
