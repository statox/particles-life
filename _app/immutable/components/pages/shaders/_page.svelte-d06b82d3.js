import{S as M,i as G,s as O,C as re,k as g,l as P,m as y,h as _,n as T,b as $,K as ve,E as se,F as ae,G as ce,f as b,t as v,H as j,R as Ue,o as J,j as ge,Q as Pe,T as he,U as Ae,A as ye,V as Se,g as Be,d as Le,q as X,a as L,r as N,c as C,D as K,B,p as Re,w as D,x as w,y as F,z as U}from"../../../chunks/index-ff9e742a.js";import{w as ee}from"../../../chunks/index-84a8d4d9.js";let Ce=1;function De(){return`svelte-tabs-${Ce++}`}function Ie(o){let e,i,r,n;const s=o[4].default,a=re(s,o,o[3],null);return{c(){e=g("div"),a&&a.c(),this.h()},l(t){e=P(t,"DIV",{class:!0});var f=y(e);a&&a.l(f),f.forEach(_),this.h()},h(){T(e,"class","svelte-tabs")},m(t,f){$(t,e,f),a&&a.m(e,null),i=!0,r||(n=ve(e,"keydown",o[1]),r=!0)},p(t,[f]){a&&a.p&&(!i||f&8)&&se(a,s,t,t[3],i?ce(s,t[3],f,null):ae(t[3]),null)},i(t){i||(b(a,t),i=!0)},o(t){v(a,t),i=!1},d(t){t&&_(e),a&&a.d(t),r=!1,n()}}}const _e={};function Xe(o,e,i){const r=o.indexOf(e);o.splice(r,1),i.update(n=>n===e?o[r]||o[o.length-1]:n)}function Ne(o,e,i){let r,{$$slots:n={},$$scope:s}=e,{initialSelectedIndex:a=0}=e;const t=[],f=[],c=[],u=ee({}),l=ee({}),m=ee(null);j(o,m,d=>i(5,r=d));const h=ee(null);function A(d,E,W){d.push(E),W.update(I=>I||E),Pe(()=>Xe(d,E,W))}function x(d){const E=f.indexOf(d);m.set(d),h.set(c[E])}Ue(_e,{registerTab(d){A(f,d,m)},registerTabElement(d){t.push(d)},registerPanel(d){A(c,d,h)},selectTab:x,selectedTab:m,selectedPanel:h,controls:u,labeledBy:l}),J(()=>{x(f[a])}),ge(()=>{for(let d=0;d<f.length;d++)u.update(E=>({...E,[f[d].id]:c[d].id})),l.update(E=>({...E,[c[d].id]:f[d].id}))});async function R(d){if(d.target.classList.contains("svelte-tabs__tab")){let E=f.indexOf(r);switch(d.key){case"ArrowRight":E+=1,E>f.length-1&&(E=0),x(f[E]),t[E].focus();break;case"ArrowLeft":E-=1,E<0&&(E=f.length-1),x(f[E]),t[E].focus()}}}return o.$$set=d=>{"initialSelectedIndex"in d&&i(2,a=d.initialSelectedIndex),"$$scope"in d&&i(3,s=d.$$scope)},[m,R,a,s,n]}class Me extends M{constructor(e){super(),G(this,e,Ne,Ie,O,{initialSelectedIndex:2})}}function Ge(o){let e,i,r,n,s,a;const t=o[9].default,f=re(t,o,o[8],null);return{c(){e=g("li"),f&&f.c(),this.h()},l(c){e=P(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=y(e);f&&f.l(u),u.forEach(_),this.h()},h(){T(e,"role","tab"),T(e,"id",o[3].id),T(e,"aria-controls",i=o[2][o[3].id]),T(e,"aria-selected",o[1]),T(e,"tabindex",r=o[1]?0:-1),T(e,"class","svelte-tabs__tab svelte-1fbofsd"),he(e,"svelte-tabs__selected",o[1])},m(c,u){$(c,e,u),f&&f.m(e,null),o[10](e),n=!0,s||(a=ve(e,"click",o[11]),s=!0)},p(c,[u]){f&&f.p&&(!n||u&256)&&se(f,t,c,c[8],n?ce(t,c[8],u,null):ae(c[8]),null),(!n||u&4&&i!==(i=c[2][c[3].id]))&&T(e,"aria-controls",i),(!n||u&2)&&T(e,"aria-selected",c[1]),(!n||u&2&&r!==(r=c[1]?0:-1))&&T(e,"tabindex",r),(!n||u&2)&&he(e,"svelte-tabs__selected",c[1])},i(c){n||(b(f,c),n=!0)},o(c){v(f,c),n=!1},d(c){c&&_(e),f&&f.d(c),o[10](null),s=!1,a()}}}function Oe(o,e,i){let r,n,{$$slots:s={},$$scope:a}=e,t;const f={id:De()},{registerTab:c,registerTabElement:u,selectTab:l,selectedTab:m,controls:h}=Ae(_e);j(o,m,d=>i(7,r=d)),j(o,h,d=>i(2,n=d));let A;c(f),J(async()=>{await ye(),u(t)});function x(d){Se[d?"unshift":"push"](()=>{t=d,i(0,t)})}const R=()=>l(f);return o.$$set=d=>{"$$scope"in d&&i(8,a=d.$$scope)},o.$$.update=()=>{o.$$.dirty&128&&i(1,A=r===f)},[t,A,n,f,l,m,h,r,a,s,x,R]}class te extends M{constructor(e){super(),G(this,e,Oe,Ge,O,{})}}function We(o){let e,i;const r=o[1].default,n=re(r,o,o[0],null);return{c(){e=g("ul"),n&&n.c(),this.h()},l(s){e=P(s,"UL",{role:!0,class:!0});var a=y(e);n&&n.l(a),a.forEach(_),this.h()},h(){T(e,"role","tablist"),T(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,a){$(s,e,a),n&&n.m(e,null),i=!0},p(s,[a]){n&&n.p&&(!i||a&1)&&se(n,r,s,s[0],i?ce(r,s[0],a,null):ae(s[0]),null)},i(s){i||(b(n,s),i=!0)},o(s){v(n,s),i=!1},d(s){s&&_(e),n&&n.d(s)}}}function ke(o,e,i){let{$$slots:r={},$$scope:n}=e;return o.$$set=s=>{"$$scope"in s&&i(0,n=s.$$scope)},[n,r]}class Ve extends M{constructor(e){super(),G(this,e,ke,We,O,{})}}function xe(o){let e;const i=o[6].default,r=re(i,o,o[5],null);return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,s){r&&r.m(n,s),e=!0},p(n,s){r&&r.p&&(!e||s&32)&&se(r,i,n,n[5],e?ce(i,n[5],s,null):ae(n[5]),null)},i(n){e||(b(r,n),e=!0)},o(n){v(r,n),e=!1},d(n){r&&r.d(n)}}}function Ye(o){let e,i,r,n=o[1]===o[2]&&xe(o);return{c(){e=g("div"),n&&n.c(),this.h()},l(s){e=P(s,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=y(e);n&&n.l(a),a.forEach(_),this.h()},h(){T(e,"id",o[2].id),T(e,"aria-labelledby",i=o[0][o[2].id]),T(e,"class","svelte-tabs__tab-panel svelte-epfyet"),T(e,"role","tabpanel")},m(s,a){$(s,e,a),n&&n.m(e,null),r=!0},p(s,[a]){s[1]===s[2]?n?(n.p(s,a),a&2&&b(n,1)):(n=xe(s),n.c(),b(n,1),n.m(e,null)):n&&(Be(),v(n,1,1,()=>{n=null}),Le()),(!r||a&1&&i!==(i=s[0][s[2].id]))&&T(e,"aria-labelledby",i)},i(s){r||(b(n),r=!0)},o(s){v(n),r=!1},d(s){s&&_(e),n&&n.d()}}}function He(o,e,i){let r,n,{$$slots:s={},$$scope:a}=e;const t={id:De()},{registerPanel:f,selectedPanel:c,labeledBy:u}=Ae(_e);return j(o,c,l=>i(1,n=l)),j(o,u,l=>i(0,r=l)),f(t),o.$$set=l=>{"$$scope"in l&&i(5,a=l.$$scope)},[r,n,t,c,u,a,s]}class ne extends M{constructor(e){super(),G(this,e,He,Ye,O,{})}}const ze=["VERTEX_SHADER","FRAGMENT_SHADER"];function qe(o){if(!o.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!o.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function pe(o,e,i,r){const n=o.createTexture();if(!n)throw"Can not create texture";return o.bindTexture(o.TEXTURE_2D,n),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,i,r,0,o.RGBA,o.FLOAT,e),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),n}function be(o,e){const i=o.createFramebuffer();if(!i)throw"Can not create frame buffer";return o.bindFramebuffer(o.FRAMEBUFFER,i),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),i}function Q(o,e,i,r,n){const s=[];for(let t=0;t<e.length;++t){const f=Ke(o,e[t],o[ze[t]],n);if(!f)throw"Can not create shader";s.push(f)}const a=je(o,s,i,r,n);if(!a)throw"Can not create program";return a}function Ke(o,e,i,r){const n=r||console.log,s=o.createShader(i);if(!s)throw"Could not load shader";if(o.shaderSource(s,e),o.compileShader(s),!o.getShaderParameter(s,o.COMPILE_STATUS)){const t=o.getShaderInfoLog(s);return n(new Error("*** Error compiling shader '"+s+"':"+t+`
`+e.split(`
`).map((f,c)=>`${c+1}: ${f}`).join(`
`))),o.deleteShader(s),null}return s}function je(o,e,i,r,n){const s=n||console.log,a=o.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(f){o.attachShader(a,f)}),i&&i.forEach(function(f,c){o.bindAttribLocation(a,r?r[c]:c,f)}),o.linkProgram(a),!o.getProgramParameter(a,o.LINK_STATUS)){const f=o.getProgramInfoLog(a);return s("Error in program linking:"+f),o.deleteProgram(a),null}return a}function ie(o,e){e=e||1;const i=o.clientWidth*e|0,r=o.clientHeight*e|0;return o.width!==i||o.height!==r?(o.width=i,o.height=r,!0):!1}function Qe(o){let e,i,r,n,s,a;return{c(){e=g("p"),i=X(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),r=L(),n=g("ul"),s=L(),a=g("canvas"),this.h()},l(t){e=P(t,"P",{});var f=y(e);i=N(f,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),f.forEach(_),r=C(t),n=P(t,"UL",{id:!0}),y(n).forEach(_),s=C(t),a=P(t,"CANVAS",{id:!0}),y(a).forEach(_),this.h()},h(){T(n,"id","result"),T(a,"id","canvas")},m(t,f){$(t,e,f),K(e,i),$(t,r,f),$(t,n,f),$(t,s,f),$(t,a,f)},p:B,i:B,o:B,d(t){t&&_(e),t&&_(r),t&&_(n),t&&_(s),t&&_(a)}}}function Je(o){const e=document.createElement("li");e.textContent=o.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Ze(o){function e(){const i=`
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `,r=`
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `,a=document.createElement("canvas");a.width=3,a.height=3;const t=a.getContext("webgl");if(!t)throw"Coulndt get context";const f=Q(t,[i,r]);if(!f)throw"Could not get program";const c=t.getAttribLocation(f,"position"),u=t.getUniformLocation(f,"srcTex"),l=t.getUniformLocation(f,"srcDimensions"),m=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,m),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0);const h=3,A=3,x=t.createTexture();t.bindTexture(t.TEXTURE_2D,x),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,h,A,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(f),t.uniform1i(u,0),t.uniform2f(l,h,A),t.drawArrays(t.TRIANGLES,0,6);const R=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,R);for(let d=0;d<3*3;++d)Je(R[d*4])}return J(e),[]}class et extends M{constructor(e){super(),G(this,e,Ze,Qe,O,{})}}const tt=Float32Array;function we(o,e,i,r,n,s){const a=new tt(16);return a[0]=2/(e-o),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(r-i),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(n-s),a[11]=0,a[12]=(o+e)/(o-e),a[13]=(i+r)/(i-r),a[14]=(n+s)/(n-s),a[15]=1,a}function nt(o){let e;return{c(){e=g("canvas"),this.h()},l(i){e=P(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(_),this.h()},h(){T(e,"id","canvas"),Re(e,"background-color","black"),T(e,"width","800"),T(e,"height","600")},m(i,r){$(i,e,r)},p:B,i:B,o:B,d(i){i&&_(e)}}}function ot(o){function e(){const i=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,r=`
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
  `,s=`
  precision highp float;
  void main() {
    gl_FragColor = vec4(0.4, 0.2, 0.9, 0.5);
  }
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const t=a.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=Q(t,[i,r]),l=Q(t,[n,s]);if(!u||!l)throw"Can not create programs";const m={position:t.getAttribLocation(u,"position"),positionTex:t.getUniformLocation(u,"positionTex"),velocityTex:t.getUniformLocation(u,"velocityTex"),texDimensions:t.getUniformLocation(u,"texDimensions"),canvasDimensions:t.getUniformLocation(u,"canvasDimensions"),deltaTime:t.getUniformLocation(u,"deltaTime")},h={id:t.getAttribLocation(l,"id"),positionTex:t.getUniformLocation(l,"positionTex"),texDimensions:t.getUniformLocation(l,"texDimensions"),matrix:t.getUniformLocation(l,"matrix")},A=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,A),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const x=300,R=20,d=x*R,E=new Array(d).fill(0).map((p,S)=>S),W=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,W),t.bufferData(t.ARRAY_BUFFER,new Float32Array(E),t.STATIC_DRAW),ie(t.canvas);const I=(p,S)=>(S===void 0&&(S=p,p=0),Math.random()*(S-p)+p),fe=new Float32Array(E.map(p=>[I(a.width),I(a.height),0,0]).flat()),le=new Float32Array(E.map(p=>[I(-300,300),I(-300,300),0,0]).flat());function k(p,S,q,Fe){const $e=p.createTexture();return p.bindTexture(p.TEXTURE_2D,$e),p.texImage2D(p.TEXTURE_2D,0,p.RGBA,q,Fe,0,p.RGBA,p.FLOAT,S),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.NEAREST),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.NEAREST),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),$e}const V=k(t,le,x,R),Y=k(t,fe,x,R),H=k(t,null,x,R);if(!Y||!H)throw"Can not create position textures";function z(p,S){const q=p.createFramebuffer();return p.bindFramebuffer(p.FRAMEBUFFER,q),p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,S,0),q}const ue=z(t,Y),me=z(t,H);let de={fb:ue,tex:Y},Z={fb:me,tex:H},Te=0;function Ee(p){if(!t)return;p*=.001;const S=p-Te;Te=p,ie(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,Z.fb),t.viewport(0,0,x,R),t.bindBuffer(t.ARRAY_BUFFER,A),t.enableVertexAttribArray(m.position),t.vertexAttribPointer(m.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,de.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,V),t.useProgram(u),t.uniform1i(m.positionTex,0),t.uniform1i(m.velocityTex,1),t.uniform2f(m.texDimensions,x,R),t.uniform2f(m.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(m.deltaTime,S),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,W),t.enableVertexAttribArray(h.id),t.vertexAttribPointer(h.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Z.tex),t.useProgram(l),t.uniform2f(h.texDimensions,x,x),t.uniform1i(h.positionTex,0),t.uniformMatrix4fv(h.matrix,!1,we(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,d);{const q=de;de=Z,Z=q}requestAnimationFrame(Ee)}requestAnimationFrame(Ee)}return J(()=>e()),[]}class it extends M{constructor(e){super(),G(this,e,ot,nt,O,{})}}const oe=(o,e)=>(e===void 0&&(e=o,o=0),Math.random()*(e-o)+o);function rt(o,e,i,r){const n=o*e,s=new Array(n).fill(0).map((f,c)=>c),a=new Float32Array(s.map(f=>[oe(i),oe(r),0,0]).flat()),t=new Float32Array(s.map(f=>[oe(-300,300),oe(-300,300),0,0]).flat());return{numParticles:n,ids:new Float32Array(s),positions:a,velocities:t}}const st=`attribute vec4 position;
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

`;function lt(o){let e;return{c(){e=g("canvas"),this.h()},l(i){e=P(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(_),this.h()},h(){T(e,"id","canvas"),Re(e,"background-color","black"),T(e,"width","800"),T(e,"height","600")},m(i,r){$(i,e,r)},p:B,i:B,o:B,d(i){i&&_(e)}}}function ut(o){function e(){const n=document.getElementById("canvas");if(!n)throw"canvas undefined";const s=n.getContext("webgl");if(!s)throw"gl undefined";qe(s);const a=Q(s,[st,at]),t=Q(s,[ct,ft]),f={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},c={id:s.getAttribLocation(t,"id"),positionTex:s.getUniformLocation(t,"positionTex"),texDimensions:s.getUniformLocation(t,"texDimensions"),matrix:s.getUniformLocation(t,"matrix")},u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const l=300,m=20,{numParticles:h,ids:A,positions:x,velocities:R}=rt(l,m,n.width,n.height),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(A),s.STATIC_DRAW),ie(s.canvas);const E=pe(s,R,l,m),W=pe(s,x,l,m),I=pe(s,null,l,m),fe=be(s,W),le=be(s,I);let k={fb:fe,tex:W},V={fb:le,tex:I},Y=0;function H(z){if(!s||!u||!d)throw"Undefined params to render";z*=.001;const ue=z-Y;Y=z,ie(s.canvas),r(s,V,l,m,u,f,k,E,a,ue),i(s,l,d,c,V,t,h);{const me=k;k=V,V=me}requestAnimationFrame(H)}requestAnimationFrame(H)}const i=(n,s,a,t,f,c,u)=>{n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(t.id),n.vertexAttribPointer(t.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.tex),n.useProgram(c),n.uniform2f(t.texDimensions,s,s),n.uniform1i(t.positionTex,0),n.uniformMatrix4fv(t.matrix,!1,we(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,u)},r=(n,s,a,t,f,c,u,l,m,h)=>{n.bindFramebuffer(n.FRAMEBUFFER,s.fb),n.viewport(0,0,a,t),n.bindBuffer(n.ARRAY_BUFFER,f),n.enableVertexAttribArray(c.position),n.vertexAttribPointer(c.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,l),n.useProgram(m),n.uniform1i(c.positionTex,0),n.uniform1i(c.velocityTex,1),n.uniform2f(c.texDimensions,a,t),n.uniform2f(c.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f(c.deltaTime,h),n.drawArrays(n.TRIANGLES,0,6)};return J(()=>e()),[]}class mt extends M{constructor(e){super(),G(this,e,ut,lt,O,{})}}function dt(o){let e;return{c(){e=X("About")},l(i){e=N(i,"About")},m(i,r){$(i,e,r)},d(i){i&&_(e)}}}function pt(o){let e;return{c(){e=X("Simple counter")},l(i){e=N(i,"Simple counter")},m(i,r){$(i,e,r)},d(i){i&&_(e)}}}function _t(o){let e;return{c(){e=X("Particles")},l(i){e=N(i,"Particles")},m(i,r){$(i,e,r)},d(i){i&&_(e)}}}function Tt(o){let e;return{c(){e=X("Particles 2")},l(i){e=N(i,"Particles 2")},m(i,r){$(i,e,r)},d(i){i&&_(e)}}}function Et(o){let e,i,r,n,s,a,t,f;return e=new te({props:{$$slots:{default:[dt]},$$scope:{ctx:o}}}),r=new te({props:{$$slots:{default:[pt]},$$scope:{ctx:o}}}),s=new te({props:{$$slots:{default:[_t]},$$scope:{ctx:o}}}),t=new te({props:{$$slots:{default:[Tt]},$$scope:{ctx:o}}}),{c(){D(e.$$.fragment),i=L(),D(r.$$.fragment),n=L(),D(s.$$.fragment),a=L(),D(t.$$.fragment)},l(c){w(e.$$.fragment,c),i=C(c),w(r.$$.fragment,c),n=C(c),w(s.$$.fragment,c),a=C(c),w(t.$$.fragment,c)},m(c,u){F(e,c,u),$(c,i,u),F(r,c,u),$(c,n,u),F(s,c,u),$(c,a,u),F(t,c,u),f=!0},p(c,u){const l={};u&1&&(l.$$scope={dirty:u,ctx:c}),e.$set(l);const m={};u&1&&(m.$$scope={dirty:u,ctx:c}),r.$set(m);const h={};u&1&&(h.$$scope={dirty:u,ctx:c}),s.$set(h);const A={};u&1&&(A.$$scope={dirty:u,ctx:c}),t.$set(A)},i(c){f||(b(e.$$.fragment,c),b(r.$$.fragment,c),b(s.$$.fragment,c),b(t.$$.fragment,c),f=!0)},o(c){v(e.$$.fragment,c),v(r.$$.fragment,c),v(s.$$.fragment,c),v(t.$$.fragment,c),f=!1},d(c){U(e,c),c&&_(i),U(r,c),c&&_(n),U(s,c),c&&_(a),U(t,c)}}}function $t(o){let e,i,r,n,s,a,t,f;return{c(){e=g("p"),i=X("This page is an experiment to run simulation on the GPU."),r=L(),n=g("p"),s=X(`I am copying code from
                `),a=g("a"),t=X("this site"),f=X(`
                and adding basic typings for typescript.`),this.h()},l(c){e=P(c,"P",{});var u=y(e);i=N(u,"This page is an experiment to run simulation on the GPU."),u.forEach(_),r=C(c),n=P(c,"P",{});var l=y(n);s=N(l,`I am copying code from
                `),a=P(l,"A",{target:!0,href:!0});var m=y(a);t=N(m,"this site"),m.forEach(_),f=N(l,`
                and adding basic typings for typescript.`),l.forEach(_),this.h()},h(){T(a,"target","none"),T(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(c,u){$(c,e,u),K(e,i),$(c,r,u),$(c,n,u),K(n,s),K(n,a),K(a,t),K(n,f)},p:B,d(c){c&&_(e),c&&_(r),c&&_(n)}}}function ht(o){let e,i;return e=new et({}),{c(){D(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},i(r){i||(b(e.$$.fragment,r),i=!0)},o(r){v(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}function xt(o){let e,i;return e=new it({}),{c(){D(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},i(r){i||(b(e.$$.fragment,r),i=!0)},o(r){v(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}function bt(o){let e,i;return e=new mt({}),{c(){D(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},i(r){i||(b(e.$$.fragment,r),i=!0)},o(r){v(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}function vt(o){let e,i,r,n,s,a,t,f,c,u;return e=new Ve({props:{$$slots:{default:[Et]},$$scope:{ctx:o}}}),r=new ne({props:{$$slots:{default:[$t]},$$scope:{ctx:o}}}),s=new ne({props:{$$slots:{default:[ht]},$$scope:{ctx:o}}}),t=new ne({props:{$$slots:{default:[xt]},$$scope:{ctx:o}}}),c=new ne({props:{$$slots:{default:[bt]},$$scope:{ctx:o}}}),{c(){D(e.$$.fragment),i=L(),D(r.$$.fragment),n=L(),D(s.$$.fragment),a=L(),D(t.$$.fragment),f=L(),D(c.$$.fragment)},l(l){w(e.$$.fragment,l),i=C(l),w(r.$$.fragment,l),n=C(l),w(s.$$.fragment,l),a=C(l),w(t.$$.fragment,l),f=C(l),w(c.$$.fragment,l)},m(l,m){F(e,l,m),$(l,i,m),F(r,l,m),$(l,n,m),F(s,l,m),$(l,a,m),F(t,l,m),$(l,f,m),F(c,l,m),u=!0},p(l,m){const h={};m&1&&(h.$$scope={dirty:m,ctx:l}),e.$set(h);const A={};m&1&&(A.$$scope={dirty:m,ctx:l}),r.$set(A);const x={};m&1&&(x.$$scope={dirty:m,ctx:l}),s.$set(x);const R={};m&1&&(R.$$scope={dirty:m,ctx:l}),t.$set(R);const d={};m&1&&(d.$$scope={dirty:m,ctx:l}),c.$set(d)},i(l){u||(b(e.$$.fragment,l),b(r.$$.fragment,l),b(s.$$.fragment,l),b(t.$$.fragment,l),b(c.$$.fragment,l),u=!0)},o(l){v(e.$$.fragment,l),v(r.$$.fragment,l),v(s.$$.fragment,l),v(t.$$.fragment,l),v(c.$$.fragment,l),u=!1},d(l){U(e,l),l&&_(i),U(r,l),l&&_(n),U(s,l),l&&_(a),U(t,l),l&&_(f),U(c,l)}}}function At(o){let e,i,r;return i=new Me({props:{$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){e=g("div"),D(i.$$.fragment)},l(n){e=P(n,"DIV",{});var s=y(e);w(i.$$.fragment,s),s.forEach(_)},m(n,s){$(n,e,s),F(i,e,null),r=!0},p(n,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:n}),i.$set(a)},i(n){r||(b(i.$$.fragment,n),r=!0)},o(n){v(i.$$.fragment,n),r=!1},d(n){n&&_(e),U(i)}}}class Rt extends M{constructor(e){super(),G(this,e,null,At,O,{})}}function Dt(o){let e,i;return e=new Rt({}),{c(){D(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},p:B,i(r){i||(b(e.$$.fragment,r),i=!0)},o(r){v(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}class Ut extends M{constructor(e){super(),G(this,e,null,Dt,O,{})}}export{Ut as default};
