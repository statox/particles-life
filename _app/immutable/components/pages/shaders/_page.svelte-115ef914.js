import{S as z,i as G,s as V,C as $e,k as R,l as F,m as g,h as d,n as A,b as v,K as Pe,E as xe,F as ve,G as Ee,f as b,t as w,H as le,R as qe,o as J,j as He,Q as je,T as Ce,U as Oe,A as Ke,V as Qe,g as Je,d as Ze,q as D,a as S,r as U,c as C,D as X,B as M,p as me,w as P,x as y,y as B,z as L}from"../../../chunks/index-ff9e742a.js";import{w as pe}from"../../../chunks/index-84a8d4d9.js";let et=1;function Ne(){return`svelte-tabs-${et++}`}function tt(o){let e,r,n,i;const a=o[4].default,s=$e(a,o,o[3],null);return{c(){e=R("div"),s&&s.c(),this.h()},l(t){e=F(t,"DIV",{class:!0});var f=g(e);s&&s.l(f),f.forEach(d),this.h()},h(){A(e,"class","svelte-tabs")},m(t,f){v(t,e,f),s&&s.m(e,null),r=!0,n||(i=Pe(e,"keydown",o[1]),n=!0)},p(t,[f]){s&&s.p&&(!r||f&8)&&xe(s,a,t,t[3],r?Ee(a,t[3],f,null):ve(t[3]),null)},i(t){r||(b(s,t),r=!0)},o(t){w(s,t),r=!1},d(t){t&&d(e),s&&s.d(t),n=!1,i()}}}const ye={};function nt(o,e,r){const n=o.indexOf(e);o.splice(n,1),r.update(i=>i===e?o[n]||o[o.length-1]:i)}function ot(o,e,r){let n,{$$slots:i={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const t=[],f=[],u=[],m=pe({}),_=pe({}),x=pe(null);le(o,x,c=>r(5,n=c));const p=pe(null);function T(c,h,I){c.push(h),I.update(O=>O||h),je(()=>nt(c,h,I))}function l(c){const h=f.indexOf(c);x.set(c),p.set(u[h])}qe(ye,{registerTab(c){T(f,c,x)},registerTabElement(c){t.push(c)},registerPanel(c){T(u,c,p)},selectTab:l,selectedTab:x,selectedPanel:p,controls:m,labeledBy:_}),J(()=>{l(f[s])}),He(()=>{for(let c=0;c<f.length;c++)m.update(h=>({...h,[f[c].id]:u[c].id})),_.update(h=>({...h,[u[c].id]:f[c].id}))});async function $(c){if(c.target.classList.contains("svelte-tabs__tab")){let h=f.indexOf(n);switch(c.key){case"ArrowRight":h+=1,h>f.length-1&&(h=0),l(f[h]),t[h].focus();break;case"ArrowLeft":h-=1,h<0&&(h=f.length-1),l(f[h]),t[h].focus()}}}return o.$$set=c=>{"initialSelectedIndex"in c&&r(2,s=c.initialSelectedIndex),"$$scope"in c&&r(3,a=c.$$scope)},[x,$,s,a,i]}class it extends z{constructor(e){super(),G(this,e,ot,tt,V,{initialSelectedIndex:2})}}function rt(o){let e,r,n,i,a,s;const t=o[9].default,f=$e(t,o,o[8],null);return{c(){e=R("li"),f&&f.c(),this.h()},l(u){e=F(u,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=g(e);f&&f.l(m),m.forEach(d),this.h()},h(){A(e,"role","tab"),A(e,"id",o[3].id),A(e,"aria-controls",r=o[2][o[3].id]),A(e,"aria-selected",o[1]),A(e,"tabindex",n=o[1]?0:-1),A(e,"class","svelte-tabs__tab svelte-1fbofsd"),Ce(e,"svelte-tabs__selected",o[1])},m(u,m){v(u,e,m),f&&f.m(e,null),o[10](e),i=!0,a||(s=Pe(e,"click",o[11]),a=!0)},p(u,[m]){f&&f.p&&(!i||m&256)&&xe(f,t,u,u[8],i?Ee(t,u[8],m,null):ve(u[8]),null),(!i||m&4&&r!==(r=u[2][u[3].id]))&&A(e,"aria-controls",r),(!i||m&2)&&A(e,"aria-selected",u[1]),(!i||m&2&&n!==(n=u[1]?0:-1))&&A(e,"tabindex",n),(!i||m&2)&&Ce(e,"svelte-tabs__selected",u[1])},i(u){i||(b(f,u),i=!0)},o(u){w(f,u),i=!1},d(u){u&&d(e),f&&f.d(u),o[10](null),a=!1,s()}}}function st(o,e,r){let n,i,{$$slots:a={},$$scope:s}=e,t;const f={id:Ne()},{registerTab:u,registerTabElement:m,selectTab:_,selectedTab:x,controls:p}=Oe(ye);le(o,x,c=>r(7,n=c)),le(o,p,c=>r(2,i=c));let T;u(f),J(async()=>{await Ke(),m(t)});function l(c){Qe[c?"unshift":"push"](()=>{t=c,r(0,t)})}const $=()=>_(f);return o.$$set=c=>{"$$scope"in c&&r(8,s=c.$$scope)},o.$$.update=()=>{o.$$.dirty&128&&r(1,T=n===f)},[t,T,i,f,_,x,p,n,s,a,l,$]}class Z extends z{constructor(e){super(),G(this,e,st,rt,V,{})}}function at(o){let e,r;const n=o[1].default,i=$e(n,o,o[0],null);return{c(){e=R("ul"),i&&i.c(),this.h()},l(a){e=F(a,"UL",{role:!0,class:!0});var s=g(e);i&&i.l(s),s.forEach(d),this.h()},h(){A(e,"role","tablist"),A(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){v(a,e,s),i&&i.m(e,null),r=!0},p(a,[s]){i&&i.p&&(!r||s&1)&&xe(i,n,a,a[0],r?Ee(n,a[0],s,null):ve(a[0]),null)},i(a){r||(b(i,a),r=!0)},o(a){w(i,a),r=!1},d(a){a&&d(e),i&&i.d(a)}}}function ct(o,e,r){let{$$slots:n={},$$scope:i}=e;return o.$$set=a=>{"$$scope"in a&&r(0,i=a.$$scope)},[i,n]}class ft extends z{constructor(e){super(),G(this,e,ct,at,V,{})}}function Ie(o){let e;const r=o[6].default,n=$e(r,o,o[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,a){n&&n.m(i,a),e=!0},p(i,a){n&&n.p&&(!e||a&32)&&xe(n,r,i,i[5],e?Ee(r,i[5],a,null):ve(i[5]),null)},i(i){e||(b(n,i),e=!0)},o(i){w(n,i),e=!1},d(i){n&&n.d(i)}}}function ut(o){let e,r,n,i=o[1]===o[2]&&Ie(o);return{c(){e=R("div"),i&&i.c(),this.h()},l(a){e=F(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=g(e);i&&i.l(s),s.forEach(d),this.h()},h(){A(e,"id",o[2].id),A(e,"aria-labelledby",r=o[0][o[2].id]),A(e,"class","svelte-tabs__tab-panel svelte-epfyet"),A(e,"role","tabpanel")},m(a,s){v(a,e,s),i&&i.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?i?(i.p(a,s),s&2&&b(i,1)):(i=Ie(a),i.c(),b(i,1),i.m(e,null)):i&&(Je(),w(i,1,1,()=>{i=null}),Ze()),(!n||s&1&&r!==(r=a[0][a[2].id]))&&A(e,"aria-labelledby",r)},i(a){n||(b(i),n=!0)},o(a){w(i),n=!1},d(a){a&&d(e),i&&i.d()}}}function lt(o,e,r){let n,i,{$$slots:a={},$$scope:s}=e;const t={id:Ne()},{registerPanel:f,selectedPanel:u,labeledBy:m}=Oe(ye);return le(o,u,_=>r(1,i=_)),le(o,m,_=>r(0,n=_)),f(t),o.$$set=_=>{"$$scope"in _&&r(5,s=_.$$scope)},[n,i,t,u,m,s,a]}class ee extends z{constructor(e){super(),G(this,e,lt,ut,V,{})}}const mt=["VERTEX_SHADER","FRAGMENT_SHADER"];function dt(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const e=o.getContext("webgl");if(!e)throw"gl undefined";return Ae(e),e}function Ae(o){if(!o.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!o.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function re(o,e,r,n){const i=o.createTexture();if(!i)throw"Can not create texture";return o.bindTexture(o.TEXTURE_2D,i),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,r,n,0,o.RGBA,o.FLOAT,e),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),i}function Te(o,e){const r=o.createFramebuffer();if(!r)throw"Can not create frame buffer";return o.bindFramebuffer(o.FRAMEBUFFER,r),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),r}function Q(o,e,r,n,i){const a=[];for(let t=0;t<e.length;++t){const f=mt[t]==="VERTEX_SHADER"?o.VERTEX_SHADER:o.FRAGMENT_SHADER,u=pt(o,e[t],f,i);if(!u)throw"Can not create shader";a.push(u)}const s=ht(o,a,r,n,i);if(!s)throw"Can not create program";return s}function pt(o,e,r,n){const i=n||console.log,a=o.createShader(r);if(!a)throw"Could not load shader";if(o.shaderSource(a,e),o.compileShader(a),!o.getShaderParameter(a,o.COMPILE_STATUS)){const t=o.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+t+`
`+e.split(`
`).map((f,u)=>`${u+1}: ${f}`).join(`
`))),o.deleteShader(a),null}return a}function ht(o,e,r,n,i){const a=i||console.log,s=o.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(f){o.attachShader(s,f)}),r&&r.forEach(function(f,u){o.bindAttribLocation(s,n?n[u]:u,f)}),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS)){const f=o.getProgramInfoLog(s);return a("Error in program linking:"+f),o.deleteProgram(s),null}return s}function k(o,e){e=e||1;const r=o.clientWidth*e|0,n=o.clientHeight*e|0;return o.width!==r||o.height!==n?(o.width=r,o.height=n,!0):!1}function _t(o){let e,r,n,i,a,s;return{c(){e=R("p"),r=D(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=S(),i=R("ul"),a=S(),s=R("canvas"),this.h()},l(t){e=F(t,"P",{});var f=g(e);r=U(f,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),f.forEach(d),n=C(t),i=F(t,"UL",{id:!0}),g(i).forEach(d),a=C(t),s=F(t,"CANVAS",{id:!0}),g(s).forEach(d),this.h()},h(){A(i,"id","result"),A(s,"id","canvas")},m(t,f){v(t,e,f),X(e,r),v(t,n,f),v(t,i,f),v(t,a,f),v(t,s,f)},p:M,i:M,o:M,d(t){t&&d(e),t&&d(n),t&&d(i),t&&d(a),t&&d(s)}}}function Tt(o){const e=document.createElement("li");e.textContent=o.toString();const r=document.getElementById("result");if(!r)throw"result element undefined";r.appendChild(e)}function $t(o){function e(){const r=`
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `,n=`
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `,s=document.createElement("canvas");s.width=3,s.height=3;const t=s.getContext("webgl");if(!t)throw"Coulndt get context";const f=Q(t,[r,n]);if(!f)throw"Could not get program";const u=t.getAttribLocation(f,"position"),m=t.getUniformLocation(f,"srcTex"),_=t.getUniformLocation(f,"srcDimensions"),x=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,x),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0);const p=3,T=3,l=t.createTexture();t.bindTexture(t.TEXTURE_2D,l),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,p,T,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(f),t.uniform1i(m,0),t.uniform2f(_,p,T),t.drawArrays(t.TRIANGLES,0,6);const $=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,$);for(let c=0;c<3*3;++c)Tt($[c*4])}return J(e),[]}class xt extends z{constructor(e){super(),G(this,e,$t,_t,V,{})}}const vt=Float32Array;function ze(o,e,r,n,i,a){const s=new vt(16);return s[0]=2/(e-o),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-r),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(i-a),s[11]=0,s[12]=(o+e)/(o-e),s[13]=(r+n)/(r-n),s[14]=(i+a)/(i-a),s[15]=1,s}function Et(o){let e;return{c(){e=R("canvas"),this.h()},l(r){e=F(r,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),g(e).forEach(d),this.h()},h(){A(e,"id","canvas"),me(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(r,n){v(r,e,n)},p:M,i:M,o:M,d(r){r&&d(e)}}}function At(o){function e(){const r=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,n=`
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
  `,i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const t=s.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const m=Q(t,[r,n]),_=Q(t,[i,a]);if(!m||!_)throw"Can not create programs";const x={position:t.getAttribLocation(m,"position"),positionTex:t.getUniformLocation(m,"positionTex"),velocityTex:t.getUniformLocation(m,"velocityTex"),texDimensions:t.getUniformLocation(m,"texDimensions"),canvasDimensions:t.getUniformLocation(m,"canvasDimensions"),deltaTime:t.getUniformLocation(m,"deltaTime")},p={id:t.getAttribLocation(_,"id"),positionTex:t.getUniformLocation(_,"positionTex"),texDimensions:t.getUniformLocation(_,"texDimensions"),matrix:t.getUniformLocation(_,"matrix")},T=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,T),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const l=300,$=20,c=l*$,h=new Array(c).fill(0).map((E,W)=>W),I=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,I),t.bufferData(t.ARRAY_BUFFER,new Float32Array(h),t.STATIC_DRAW),k(t.canvas);const O=(E,W)=>(W===void 0&&(W=E,E=0),Math.random()*(W-E)+E),Y=new Float32Array(h.map(E=>[O(s.width),O(s.height),0,0]).flat()),q=new Float32Array(h.map(E=>[O(-300,300),O(-300,300),0,0]).flat());function N(E,W,ne,Ye){const Se=E.createTexture();return E.bindTexture(E.TEXTURE_2D,Se),E.texImage2D(E.TEXTURE_2D,0,E.RGBA,ne,Ye,0,E.RGBA,E.FLOAT,W),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MAG_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),Se}const H=N(t,q,l,$),j=N(t,Y,l,$),K=N(t,null,l,$);if(!j||!K)throw"Can not create position textures";function te(E,W){const ne=E.createFramebuffer();return E.bindFramebuffer(E.FRAMEBUFFER,ne),E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,W,0),ne}const be=te(t,j),we=te(t,K);let Re={fb:be,tex:j},de={fb:we,tex:K},Be=0;function Le(E){if(!t)return;E*=.001;const W=E-Be;Be=E,k(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,de.fb),t.viewport(0,0,l,$),t.bindBuffer(t.ARRAY_BUFFER,T),t.enableVertexAttribArray(x.position),t.vertexAttribPointer(x.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Re.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,H),t.useProgram(m),t.uniform1i(x.positionTex,0),t.uniform1i(x.velocityTex,1),t.uniform2f(x.texDimensions,l,$),t.uniform2f(x.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(x.deltaTime,W),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,I),t.enableVertexAttribArray(p.id),t.vertexAttribPointer(p.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,de.tex),t.useProgram(_),t.uniform2f(p.texDimensions,l,l),t.uniform1i(p.positionTex,0),t.uniformMatrix4fv(p.matrix,!1,ze(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,c);{const ne=Re;Re=de,de=ne}requestAnimationFrame(Le)}requestAnimationFrame(Le)}return J(()=>e()),[]}class bt extends z{constructor(e){super(),G(this,e,At,Et,V,{})}}const he=(o,e)=>(e===void 0&&(e=o,o=0),Math.random()*(e-o)+o);function wt(o,e,r,n){const i=o*e,a=new Array(i).fill(0).map((f,u)=>u),s=new Float32Array(a.map(f=>[he(r),he(n),0,0]).flat()),t=new Float32Array(a.map(f=>[he(-300,300),he(-300,300),0,0]).flat());return{numParticles:i,ids:new Float32Array(a),positions:s,velocities:t}}const Rt=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Ft=`precision highp float;

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

`,gt=`  attribute float id;
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

`,Dt=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Ut(o){let e;return{c(){e=R("canvas"),this.h()},l(r){e=F(r,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),g(e).forEach(d),this.h()},h(){A(e,"id","canvas"),me(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(r,n){v(r,e,n)},p:M,i:M,o:M,d(r){r&&d(e)}}}function Pt(o){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const a=i.getContext("webgl");if(!a)throw"gl undefined";Ae(a);const s=Q(a,[Rt,Ft]),t=Q(a,[gt,Dt]),f={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},u={id:a.getAttribLocation(t,"id"),positionTex:a.getUniformLocation(t,"positionTex"),texDimensions:a.getUniformLocation(t,"texDimensions"),matrix:a.getUniformLocation(t,"matrix")},m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const _=300,x=20,{numParticles:p,ids:T,positions:l,velocities:$}=wt(_,x,i.width,i.height),c=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array(T),a.STATIC_DRAW),k(a.canvas);const h=re(a,$,_,x),I=re(a,l,_,x),O=re(a,null,_,x),Y=Te(a,I),q=Te(a,O);let N={fb:Y,tex:I},H={fb:q,tex:O},j=0;function K(te){if(!a||!m||!c)throw"Undefined params to render";te*=.001;const be=te-j;j=te,k(a.canvas),n(a,H,_,x,m,f,N,h,s,be),r(a,_,c,u,H,t,p);{const we=N;N=H,H=we}requestAnimationFrame(K)}requestAnimationFrame(K)}const r=(i,a,s,t,f,u,m)=>{i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(t.id),i.vertexAttribPointer(t.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,f.tex),i.useProgram(u),i.uniform2f(t.texDimensions,a,a),i.uniform1i(t.positionTex,0),i.uniformMatrix4fv(t.matrix,!1,ze(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,m)},n=(i,a,s,t,f,u,m,_,x,p)=>{i.bindFramebuffer(i.FRAMEBUFFER,a.fb),i.viewport(0,0,s,t),i.bindBuffer(i.ARRAY_BUFFER,f),i.enableVertexAttribArray(u.position),i.vertexAttribPointer(u.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,m.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,_),i.useProgram(x),i.uniform1i(u.positionTex,0),i.uniform1i(u.velocityTex,1),i.uniform2f(u.texDimensions,s,t),i.uniform2f(u.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f(u.deltaTime,p),i.drawArrays(i.TRIANGLES,0,6)};return J(()=>e()),[]}class yt extends z{constructor(e){super(),G(this,e,Pt,Ut,V,{})}}const Bt=`attribute vec2 a_position;

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
`,Lt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function St(o){let e,r,n,i,a,s,t,f,u,m,_,x;return{c(){e=R("p"),r=D(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=R("code"),i=D("requestAnimationFrame"),a=D(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=S(),t=R("canvas"),f=S(),u=R("button"),m=D("Add position"),this.h()},l(p){e=F(p,"P",{});var T=g(e);r=U(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=F(T,"CODE",{});var l=g(n);i=U(l,"requestAnimationFrame"),l.forEach(d),a=U(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(d),s=C(p),t=F(p,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),g(t).forEach(d),f=C(p),u=F(p,"BUTTON",{});var $=g(u);m=U($,"Add position"),$.forEach(d),this.h()},h(){A(t,"id","canvas"),me(t,"background-color","black"),A(t,"width","800"),A(t,"height","600")},m(p,T){v(p,e,T),X(e,r),X(e,n),X(n,i),X(e,a),v(p,s,T),v(p,t,T),v(p,f,T),v(p,u,T),X(u,m),_||(x=Pe(u,"click",o[1]),_=!0)},p:M,i:M,o:M,d(p){p&&d(e),p&&d(s),p&&d(t),p&&d(f),p&&d(u),_=!1,x()}}}function Ct(o){const e=[50,50,50,150,150,150,150,50,200,200];function r(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Ae(s);const t=Q(s,[Bt,Lt]);k(s.canvas);const f=s.getAttribLocation(t,"a_position"),u=s.getUniformLocation(t,"u_resolution"),m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function _(){if(!s)throw"Undefined params to render";for(let I=0;I<=e.length-2;I+=2)e[I]=(e[I]+Math.random()*2-1)%s.canvas.width,e[I+1]=(e[I+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),k(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(t),s.uniform2f(u,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(f),s.bindBuffer(s.ARRAY_BUFFER,m);const x=2,p=s.FLOAT,T=!1,l=0,$=0;s.vertexAttribPointer(f,x,p,T,l,$);var c=s.POINTS,h=e.length/2;s.drawArrays(c,$,h),requestAnimationFrame(_)}requestAnimationFrame(_)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return J(()=>r()),[n,()=>n()]}class It extends z{constructor(e){super(),G(this,e,Ct,St,V,{})}}const Xt=`attribute float id;
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
`,Mt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let se,ae;const Ot=o=>{ae=Q(o,[Xt,Mt]),se={idAttributeLocation:o.getAttribLocation(ae,"id"),texDimensionsUniformLocation:o.getUniformLocation(ae,"texDimensions"),resolutionUniformLocation:o.getUniformLocation(ae,"u_resolution")}},Nt=o=>{const{gl:e,positionTex:r,textureDimension:n,ids:i}=o;k(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.useProgram(ae),e.uniform2f(se.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(se.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(se.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,t=e.FLOAT,f=!1,u=0,m=0;e.vertexAttribPointer(se.idAttributeLocation,s,t,f,u,m);const _=e.POINTS,x=i.length;e.drawArrays(_,m,x)};function zt(o){let e,r,n,i,a,s,t;return{c(){e=R("p"),r=D("Create an array of render-size positions. Store this array in a texture. In each "),n=R("code"),i=D("requestAnimationFrame"),a=D(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=S(),t=R("canvas"),this.h()},l(f){e=F(f,"P",{});var u=g(e);r=U(u,"Create an array of render-size positions. Store this array in a texture. In each "),n=F(u,"CODE",{});var m=g(n);i=U(m,"requestAnimationFrame"),m.forEach(d),a=U(u,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),u.forEach(d),s=C(f),t=F(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),g(t).forEach(d),this.h()},h(){A(t,"id","canvas"),me(t,"background-color","black"),A(t,"width",Ge),A(t,"height",Ve)},m(f,u){v(f,e,u),X(e,r),X(e,n),X(n,i),X(e,a),v(f,s,u),v(f,t,u)},p:M,i:M,o:M,d(f){f&&d(e),f&&d(s),f&&d(t)}}}const Ge=800,Ve=600;function Gt(o){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const n=r.getContext("webgl");if(!n)throw"gl undefined";Ae(n),k(n.canvas),Ot(n);const i=[0,1,2,3,4,5,6,7,8,9],a=i.map(t=>[Math.random()*Ge,Math.random()*Ve,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let f=0;f<=a.length-2;f+=2)a[f]=(a[f]+Math.random()*2-1)%n.canvas.width,a[f+1]=(a[f+1]+Math.random()*0+1)%n.canvas.height;const t=re(n,new Float32Array(a),3,3);Nt({gl:n,positionTex:t,textureDimension:{width:3,height:3},ids:i}),requestAnimationFrame(s)}requestAnimationFrame(s)}return J(()=>e()),[]}let Vt=class extends z{constructor(e){super(),G(this,e,Gt,zt,V,{})}};const Wt=`attribute float id;
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
`,kt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let ce,fe,De;const Yt=(o,e)=>{fe=Q(o,[Wt,kt]),ce={idAttributeLocation:o.getAttribLocation(fe,"id"),texDimensionsUniformLocation:o.getUniformLocation(fe,"texDimensions"),resolutionUniformLocation:o.getUniformLocation(fe,"u_resolution")},De=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,De),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.STATIC_DRAW)},qt=o=>{const{gl:e,positionTex:r,textureDimension:n,ids:i}=o;k(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,De),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.useProgram(fe),e.uniform2f(ce.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ce.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(ce.idAttributeLocation);const a=1,s=e.FLOAT,t=!1,f=0,u=0;e.vertexAttribPointer(ce.idAttributeLocation,a,s,t,f,u),e.drawArrays(e.POINTS,u,i.length)},Ht=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,jt=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / texDimensions;

    vec2 position = texture2D(positionTex, texcoord).xy;
    vec2 newPosition = euclideanModulo(position + vec2(1.0, 0.0), u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let oe,ie,Ue,Fe,ge,Xe,Me,ue,_e;const Kt=(o,e)=>{const{positions:r,texDimensions:n}=e;ie=Q(o,[Ht,jt]),oe={positionAttributeLocation:o.getAttribLocation(ie,"position"),positionTexLocation:o.getUniformLocation(ie,"positionTex"),texDimensionsUniformLocation:o.getUniformLocation(ie,"texDimensions"),resolutionUniformLocation:o.getUniformLocation(ie,"u_resolution")},Ue=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,Ue),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),o.STATIC_DRAW),Fe=re(o,new Float32Array(r),n.width,n.height),ge=re(o,null,n.width,n.height),Xe=Te(o,Fe),Me=Te(o,ge),ue={fb:Xe,tex:Fe},_e={fb:Me,tex:ge}},Qt=o=>{const{gl:e,texDimensions:r}=o;e.bindFramebuffer(e.FRAMEBUFFER,_e.fb),e.viewport(0,0,r.width,r.height),e.bindBuffer(e.ARRAY_BUFFER,Ue),e.enableVertexAttribArray(oe.positionAttributeLocation),e.vertexAttribPointer(oe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ue.tex),e.useProgram(ie),e.uniform1i(oe.positionTexLocation,0),e.uniform2f(oe.texDimensionsUniformLocation,r.width,r.height),e.uniform2f(oe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=ue;ue=_e,_e=n}return ue.tex};function Jt(o){let e,r,n,i,a,s,t,f,u,m,_,x,p;return{c(){e=R("p"),r=D("Create an array of render-size positions. Store this array in a texture."),n=S(),i=R("p"),a=D("Create 2 textures which will be used to update the positions with a shader. In each "),s=R("code"),t=D("requestAnimationFrame"),f=D(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),u=S(),m=R("p"),_=D("Finally switch the two textures to read and write in the updated textures"),x=S(),p=R("canvas"),this.h()},l(T){e=F(T,"P",{});var l=g(e);r=U(l,"Create an array of render-size positions. Store this array in a texture."),l.forEach(d),n=C(T),i=F(T,"P",{});var $=g(i);a=U($,"Create 2 textures which will be used to update the positions with a shader. In each "),s=F($,"CODE",{});var c=g(s);t=U(c,"requestAnimationFrame"),c.forEach(d),f=U($,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),$.forEach(d),u=C(T),m=F(T,"P",{});var h=g(m);_=U(h,"Finally switch the two textures to read and write in the updated textures"),h.forEach(d),x=C(T),p=F(T,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),g(p).forEach(d),this.h()},h(){A(p,"id","canvas"),me(p,"background-color","black"),A(p,"width",We),A(p,"height",ke)},m(T,l){v(T,e,l),X(e,r),v(T,n,l),v(T,i,l),X(i,a),X(i,s),X(s,t),X(i,f),v(T,u,l),v(T,m,l),X(m,_),v(T,x,l),v(T,p,l)},p:M,i:M,o:M,d(T){T&&d(e),T&&d(n),T&&d(i),T&&d(u),T&&d(m),T&&d(x),T&&d(p)}}}const We=800,ke=600;function Zt(o){function e(){const r=dt(),n=[0,1,2,3,4,5,6,7,8];k(r.canvas);const i=n.map(t=>[Math.random()*We,Math.random()*ke,0,0]).flat(),a={width:3,height:3};Yt(r,n),Kt(r,{positions:i,texDimensions:a});function s(){k(r.canvas);const t=Qt({gl:r,texDimensions:a});qt({gl:r,positionTex:t,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return J(()=>e()),[]}class en extends z{constructor(e){super(),G(this,e,Zt,Jt,V,{})}}function tn(o){let e;return{c(){e=D("About")},l(r){e=U(r,"About")},m(r,n){v(r,e,n)},d(r){r&&d(e)}}}function nn(o){let e;return{c(){e=D("Simple counter")},l(r){e=U(r,"Simple counter")},m(r,n){v(r,e,n)},d(r){r&&d(e)}}}function on(o){let e;return{c(){e=D("Particles")},l(r){e=U(r,"Particles")},m(r,n){v(r,e,n)},d(r){r&&d(e)}}}function rn(o){let e;return{c(){e=D("Particles 2")},l(r){e=U(r,"Particles 2")},m(r,n){v(r,e,n)},d(r){r&&d(e)}}}function sn(o){let e;return{c(){e=D("Positions Buffer")},l(r){e=U(r,"Positions Buffer")},m(r,n){v(r,e,n)},d(r){r&&d(e)}}}function an(o){let e;return{c(){e=D("Positions Texture")},l(r){e=U(r,"Positions Texture")},m(r,n){v(r,e,n)},d(r){r&&d(e)}}}function cn(o){let e;return{c(){e=D("Positions Texture Draw & Update")},l(r){e=U(r,"Positions Texture Draw & Update")},m(r,n){v(r,e,n)},d(r){r&&d(e)}}}function fn(o){let e,r,n,i,a,s,t,f,u,m,_,x,p,T;return e=new Z({props:{$$slots:{default:[tn]},$$scope:{ctx:o}}}),n=new Z({props:{$$slots:{default:[nn]},$$scope:{ctx:o}}}),a=new Z({props:{$$slots:{default:[on]},$$scope:{ctx:o}}}),t=new Z({props:{$$slots:{default:[rn]},$$scope:{ctx:o}}}),u=new Z({props:{$$slots:{default:[sn]},$$scope:{ctx:o}}}),_=new Z({props:{$$slots:{default:[an]},$$scope:{ctx:o}}}),p=new Z({props:{$$slots:{default:[cn]},$$scope:{ctx:o}}}),{c(){P(e.$$.fragment),r=S(),P(n.$$.fragment),i=S(),P(a.$$.fragment),s=S(),P(t.$$.fragment),f=S(),P(u.$$.fragment),m=S(),P(_.$$.fragment),x=S(),P(p.$$.fragment)},l(l){y(e.$$.fragment,l),r=C(l),y(n.$$.fragment,l),i=C(l),y(a.$$.fragment,l),s=C(l),y(t.$$.fragment,l),f=C(l),y(u.$$.fragment,l),m=C(l),y(_.$$.fragment,l),x=C(l),y(p.$$.fragment,l)},m(l,$){B(e,l,$),v(l,r,$),B(n,l,$),v(l,i,$),B(a,l,$),v(l,s,$),B(t,l,$),v(l,f,$),B(u,l,$),v(l,m,$),B(_,l,$),v(l,x,$),B(p,l,$),T=!0},p(l,$){const c={};$&1&&(c.$$scope={dirty:$,ctx:l}),e.$set(c);const h={};$&1&&(h.$$scope={dirty:$,ctx:l}),n.$set(h);const I={};$&1&&(I.$$scope={dirty:$,ctx:l}),a.$set(I);const O={};$&1&&(O.$$scope={dirty:$,ctx:l}),t.$set(O);const Y={};$&1&&(Y.$$scope={dirty:$,ctx:l}),u.$set(Y);const q={};$&1&&(q.$$scope={dirty:$,ctx:l}),_.$set(q);const N={};$&1&&(N.$$scope={dirty:$,ctx:l}),p.$set(N)},i(l){T||(b(e.$$.fragment,l),b(n.$$.fragment,l),b(a.$$.fragment,l),b(t.$$.fragment,l),b(u.$$.fragment,l),b(_.$$.fragment,l),b(p.$$.fragment,l),T=!0)},o(l){w(e.$$.fragment,l),w(n.$$.fragment,l),w(a.$$.fragment,l),w(t.$$.fragment,l),w(u.$$.fragment,l),w(_.$$.fragment,l),w(p.$$.fragment,l),T=!1},d(l){L(e,l),l&&d(r),L(n,l),l&&d(i),L(a,l),l&&d(s),L(t,l),l&&d(f),L(u,l),l&&d(m),L(_,l),l&&d(x),L(p,l)}}}function un(o){let e,r,n,i,a,s,t,f;return{c(){e=R("p"),r=D("This page is an experiment to run simulation on the GPU."),n=S(),i=R("p"),a=D(`I am copying code from
                `),s=R("a"),t=D("this site"),f=D(`
                and adding basic typings for typescript.`),this.h()},l(u){e=F(u,"P",{});var m=g(e);r=U(m,"This page is an experiment to run simulation on the GPU."),m.forEach(d),n=C(u),i=F(u,"P",{});var _=g(i);a=U(_,`I am copying code from
                `),s=F(_,"A",{target:!0,href:!0});var x=g(s);t=U(x,"this site"),x.forEach(d),f=U(_,`
                and adding basic typings for typescript.`),_.forEach(d),this.h()},h(){A(s,"target","none"),A(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(u,m){v(u,e,m),X(e,r),v(u,n,m),v(u,i,m),X(i,a),X(i,s),X(s,t),X(i,f)},p:M,d(u){u&&d(e),u&&d(n),u&&d(i)}}}function ln(o){let e,r;return e=new xt({}),{c(){P(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){B(e,n,i),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){w(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}function mn(o){let e,r;return e=new bt({}),{c(){P(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){B(e,n,i),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){w(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}function dn(o){let e,r;return e=new yt({}),{c(){P(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){B(e,n,i),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){w(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}function pn(o){let e,r;return e=new It({}),{c(){P(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){B(e,n,i),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){w(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}function hn(o){let e,r;return e=new Vt({}),{c(){P(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){B(e,n,i),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){w(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}function _n(o){let e,r;return e=new en({}),{c(){P(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){B(e,n,i),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){w(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}function Tn(o){let e,r,n,i,a,s,t,f,u,m,_,x,p,T,l,$;return e=new ft({props:{$$slots:{default:[fn]},$$scope:{ctx:o}}}),n=new ee({props:{$$slots:{default:[un]},$$scope:{ctx:o}}}),a=new ee({props:{$$slots:{default:[ln]},$$scope:{ctx:o}}}),t=new ee({props:{$$slots:{default:[mn]},$$scope:{ctx:o}}}),u=new ee({props:{$$slots:{default:[dn]},$$scope:{ctx:o}}}),_=new ee({props:{$$slots:{default:[pn]},$$scope:{ctx:o}}}),p=new ee({props:{$$slots:{default:[hn]},$$scope:{ctx:o}}}),l=new ee({props:{$$slots:{default:[_n]},$$scope:{ctx:o}}}),{c(){P(e.$$.fragment),r=S(),P(n.$$.fragment),i=S(),P(a.$$.fragment),s=S(),P(t.$$.fragment),f=S(),P(u.$$.fragment),m=S(),P(_.$$.fragment),x=S(),P(p.$$.fragment),T=S(),P(l.$$.fragment)},l(c){y(e.$$.fragment,c),r=C(c),y(n.$$.fragment,c),i=C(c),y(a.$$.fragment,c),s=C(c),y(t.$$.fragment,c),f=C(c),y(u.$$.fragment,c),m=C(c),y(_.$$.fragment,c),x=C(c),y(p.$$.fragment,c),T=C(c),y(l.$$.fragment,c)},m(c,h){B(e,c,h),v(c,r,h),B(n,c,h),v(c,i,h),B(a,c,h),v(c,s,h),B(t,c,h),v(c,f,h),B(u,c,h),v(c,m,h),B(_,c,h),v(c,x,h),B(p,c,h),v(c,T,h),B(l,c,h),$=!0},p(c,h){const I={};h&1&&(I.$$scope={dirty:h,ctx:c}),e.$set(I);const O={};h&1&&(O.$$scope={dirty:h,ctx:c}),n.$set(O);const Y={};h&1&&(Y.$$scope={dirty:h,ctx:c}),a.$set(Y);const q={};h&1&&(q.$$scope={dirty:h,ctx:c}),t.$set(q);const N={};h&1&&(N.$$scope={dirty:h,ctx:c}),u.$set(N);const H={};h&1&&(H.$$scope={dirty:h,ctx:c}),_.$set(H);const j={};h&1&&(j.$$scope={dirty:h,ctx:c}),p.$set(j);const K={};h&1&&(K.$$scope={dirty:h,ctx:c}),l.$set(K)},i(c){$||(b(e.$$.fragment,c),b(n.$$.fragment,c),b(a.$$.fragment,c),b(t.$$.fragment,c),b(u.$$.fragment,c),b(_.$$.fragment,c),b(p.$$.fragment,c),b(l.$$.fragment,c),$=!0)},o(c){w(e.$$.fragment,c),w(n.$$.fragment,c),w(a.$$.fragment,c),w(t.$$.fragment,c),w(u.$$.fragment,c),w(_.$$.fragment,c),w(p.$$.fragment,c),w(l.$$.fragment,c),$=!1},d(c){L(e,c),c&&d(r),L(n,c),c&&d(i),L(a,c),c&&d(s),L(t,c),c&&d(f),L(u,c),c&&d(m),L(_,c),c&&d(x),L(p,c),c&&d(T),L(l,c)}}}function $n(o){let e,r,n;return r=new it({props:{$$slots:{default:[Tn]},$$scope:{ctx:o}}}),{c(){e=R("div"),P(r.$$.fragment)},l(i){e=F(i,"DIV",{});var a=g(e);y(r.$$.fragment,a),a.forEach(d)},m(i,a){v(i,e,a),B(r,e,null),n=!0},p(i,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:i}),r.$set(s)},i(i){n||(b(r.$$.fragment,i),n=!0)},o(i){w(r.$$.fragment,i),n=!1},d(i){i&&d(e),L(r)}}}class xn extends z{constructor(e){super(),G(this,e,null,$n,V,{})}}function vn(o){let e,r;return e=new xn({}),{c(){P(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){B(e,n,i),r=!0},p:M,i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){w(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}class wn extends z{constructor(e){super(),G(this,e,null,vn,V,{})}}export{wn as default};
