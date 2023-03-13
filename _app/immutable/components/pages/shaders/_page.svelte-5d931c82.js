import{S as k,i as W,s as V,C as ce,k as F,l as g,m as D,h as _,n as A,b as E,K as fe,E as le,F as ue,G as me,f as b,t as R,H as ie,R as Pe,o as q,j as Be,Q as Se,T as Ae,U as we,A as Le,V as Ce,g as Ie,d as Xe,q as S,a as C,r as L,c as I,D as N,B as M,p as de,w as U,x as y,y as P,z as B}from"../../../chunks/index-ff9e742a.js";import{w as se}from"../../../chunks/index-84a8d4d9.js";let Me=1;function Fe(){return`svelte-tabs-${Me++}`}function Ne(r){let e,i,o,t;const a=r[4].default,s=ce(a,r,r[3],null);return{c(){e=F("div"),s&&s.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var l=D(e);s&&s.l(l),l.forEach(_),this.h()},h(){A(e,"class","svelte-tabs")},m(n,l){E(n,e,l),s&&s.m(e,null),i=!0,o||(t=fe(e,"keydown",r[1]),o=!0)},p(n,[l]){s&&s.p&&(!i||l&8)&&le(s,a,n,n[3],i?me(a,n[3],l,null):ue(n[3]),null)},i(n){i||(b(s,n),i=!0)},o(n){R(s,n),i=!1},d(n){n&&_(e),s&&s.d(n),o=!1,t()}}}const he={};function Oe(r,e,i){const o=r.indexOf(e);r.splice(o,1),i.update(t=>t===e?r[o]||r[r.length-1]:t)}function Ge(r,e,i){let o,{$$slots:t={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const n=[],l=[],f=[],d=se({}),m=se({}),$=se(null);ie(r,$,T=>i(5,o=T));const c=se(null);function p(T,x,w){T.push(x),w.update(X=>X||x),Se(()=>Oe(T,x,w))}function u(T){const x=l.indexOf(T);$.set(T),c.set(f[x])}Pe(he,{registerTab(T){p(l,T,$)},registerTabElement(T){n.push(T)},registerPanel(T){p(f,T,c)},selectTab:u,selectedTab:$,selectedPanel:c,controls:d,labeledBy:m}),q(()=>{u(l[s])}),Be(()=>{for(let T=0;T<l.length;T++)d.update(x=>({...x,[l[T].id]:f[T].id})),m.update(x=>({...x,[f[T].id]:l[T].id}))});async function h(T){if(T.target.classList.contains("svelte-tabs__tab")){let x=l.indexOf(o);switch(T.key){case"ArrowRight":x+=1,x>l.length-1&&(x=0),u(l[x]),n[x].focus();break;case"ArrowLeft":x-=1,x<0&&(x=l.length-1),u(l[x]),n[x].focus()}}}return r.$$set=T=>{"initialSelectedIndex"in T&&i(2,s=T.initialSelectedIndex),"$$scope"in T&&i(3,a=T.$$scope)},[$,h,s,a,t]}class ke extends k{constructor(e){super(),W(this,e,Ge,Ne,V,{initialSelectedIndex:2})}}function We(r){let e,i,o,t,a,s;const n=r[9].default,l=ce(n,r,r[8],null);return{c(){e=F("li"),l&&l.c(),this.h()},l(f){e=g(f,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=D(e);l&&l.l(d),d.forEach(_),this.h()},h(){A(e,"role","tab"),A(e,"id",r[3].id),A(e,"aria-controls",i=r[2][r[3].id]),A(e,"aria-selected",r[1]),A(e,"tabindex",o=r[1]?0:-1),A(e,"class","svelte-tabs__tab svelte-1fbofsd"),Ae(e,"svelte-tabs__selected",r[1])},m(f,d){E(f,e,d),l&&l.m(e,null),r[10](e),t=!0,a||(s=fe(e,"click",r[11]),a=!0)},p(f,[d]){l&&l.p&&(!t||d&256)&&le(l,n,f,f[8],t?me(n,f[8],d,null):ue(f[8]),null),(!t||d&4&&i!==(i=f[2][f[3].id]))&&A(e,"aria-controls",i),(!t||d&2)&&A(e,"aria-selected",f[1]),(!t||d&2&&o!==(o=f[1]?0:-1))&&A(e,"tabindex",o),(!t||d&2)&&Ae(e,"svelte-tabs__selected",f[1])},i(f){t||(b(l,f),t=!0)},o(f){R(l,f),t=!1},d(f){f&&_(e),l&&l.d(f),r[10](null),a=!1,s()}}}function Ve(r,e,i){let o,t,{$$slots:a={},$$scope:s}=e,n;const l={id:Fe()},{registerTab:f,registerTabElement:d,selectTab:m,selectedTab:$,controls:c}=we(he);ie(r,$,T=>i(7,o=T)),ie(r,c,T=>i(2,t=T));let p;f(l),q(async()=>{await Le(),d(n)});function u(T){Ce[T?"unshift":"push"](()=>{n=T,i(0,n)})}const h=()=>m(l);return r.$$set=T=>{"$$scope"in T&&i(8,s=T.$$scope)},r.$$.update=()=>{r.$$.dirty&128&&i(1,p=o===l)},[n,p,t,l,m,$,c,o,s,a,u,h]}class te extends k{constructor(e){super(),W(this,e,Ve,We,V,{})}}function ze(r){let e,i;const o=r[1].default,t=ce(o,r,r[0],null);return{c(){e=F("ul"),t&&t.c(),this.h()},l(a){e=g(a,"UL",{role:!0,class:!0});var s=D(e);t&&t.l(s),s.forEach(_),this.h()},h(){A(e,"role","tablist"),A(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){E(a,e,s),t&&t.m(e,null),i=!0},p(a,[s]){t&&t.p&&(!i||s&1)&&le(t,o,a,a[0],i?me(o,a[0],s,null):ue(a[0]),null)},i(a){i||(b(t,a),i=!0)},o(a){R(t,a),i=!1},d(a){a&&_(e),t&&t.d(a)}}}function Ye(r,e,i){let{$$slots:o={},$$scope:t}=e;return r.$$set=a=>{"$$scope"in a&&i(0,t=a.$$scope)},[t,o]}class He extends k{constructor(e){super(),W(this,e,Ye,ze,V,{})}}function be(r){let e;const i=r[6].default,o=ce(i,r,r[5],null);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,a){o&&o.m(t,a),e=!0},p(t,a){o&&o.p&&(!e||a&32)&&le(o,i,t,t[5],e?me(i,t[5],a,null):ue(t[5]),null)},i(t){e||(b(o,t),e=!0)},o(t){R(o,t),e=!1},d(t){o&&o.d(t)}}}function qe(r){let e,i,o,t=r[1]===r[2]&&be(r);return{c(){e=F("div"),t&&t.c(),this.h()},l(a){e=g(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=D(e);t&&t.l(s),s.forEach(_),this.h()},h(){A(e,"id",r[2].id),A(e,"aria-labelledby",i=r[0][r[2].id]),A(e,"class","svelte-tabs__tab-panel svelte-epfyet"),A(e,"role","tabpanel")},m(a,s){E(a,e,s),t&&t.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?t?(t.p(a,s),s&2&&b(t,1)):(t=be(a),t.c(),b(t,1),t.m(e,null)):t&&(Ie(),R(t,1,1,()=>{t=null}),Xe()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&A(e,"aria-labelledby",i)},i(a){o||(b(t),o=!0)},o(a){R(t),o=!1},d(a){a&&_(e),t&&t.d()}}}function je(r,e,i){let o,t,{$$slots:a={},$$scope:s}=e;const n={id:Fe()},{registerPanel:l,selectedPanel:f,labeledBy:d}=we(he);return ie(r,f,m=>i(1,t=m)),ie(r,d,m=>i(0,o=m)),l(n),r.$$set=m=>{"$$scope"in m&&i(5,s=m.$$scope)},[o,t,n,f,d,s,a]}class ne extends k{constructor(e){super(),W(this,e,je,qe,V,{})}}const Ke=["VERTEX_SHADER","FRAGMENT_SHADER"];function $e(r){if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function oe(r,e,i,o){const t=r.createTexture();if(!t)throw"Can not create texture";return r.bindTexture(r.TEXTURE_2D,t),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,i,o,0,r.RGBA,r.FLOAT,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),t}function Re(r,e){const i=r.createFramebuffer();if(!i)throw"Can not create frame buffer";return r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0),i}function H(r,e,i,o,t){const a=[];for(let n=0;n<e.length;++n){const l=Ke[n]==="VERTEX_SHADER"?r.VERTEX_SHADER:r.FRAGMENT_SHADER,f=Qe(r,e[n],l,t);if(!f)throw"Can not create shader";a.push(f)}const s=Je(r,a,i,o,t);if(!s)throw"Can not create program";return s}function Qe(r,e,i,o){const t=o||console.log,a=r.createShader(i);if(!a)throw"Could not load shader";if(r.shaderSource(a,e),r.compileShader(a),!r.getShaderParameter(a,r.COMPILE_STATUS)){const n=r.getShaderInfoLog(a);return t(new Error("*** Error compiling shader '"+a+"':"+n+`
`+e.split(`
`).map((l,f)=>`${f+1}: ${l}`).join(`
`))),r.deleteShader(a),null}return a}function Je(r,e,i,o,t){const a=t||console.log,s=r.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){r.attachShader(s,l)}),i&&i.forEach(function(l,f){r.bindAttribLocation(s,o?o[f]:f,l)}),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS)){const l=r.getProgramInfoLog(s);return a("Error in program linking:"+l),r.deleteProgram(s),null}return s}function Y(r,e){e=e||1;const i=r.clientWidth*e|0,o=r.clientHeight*e|0;return r.width!==i||r.height!==o?(r.width=i,r.height=o,!0):!1}function Ze(r){let e,i,o,t,a,s;return{c(){e=F("p"),i=S(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=C(),t=F("ul"),a=C(),s=F("canvas"),this.h()},l(n){e=g(n,"P",{});var l=D(e);i=L(l,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),l.forEach(_),o=I(n),t=g(n,"UL",{id:!0}),D(t).forEach(_),a=I(n),s=g(n,"CANVAS",{id:!0}),D(s).forEach(_),this.h()},h(){A(t,"id","result"),A(s,"id","canvas")},m(n,l){E(n,e,l),N(e,i),E(n,o,l),E(n,t,l),E(n,a,l),E(n,s,l)},p:M,i:M,o:M,d(n){n&&_(e),n&&_(o),n&&_(t),n&&_(a),n&&_(s)}}}function et(r){const e=document.createElement("li");e.textContent=r.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function tt(r){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const n=s.getContext("webgl");if(!n)throw"Coulndt get context";const l=H(n,[i,o]);if(!l)throw"Could not get program";const f=n.getAttribLocation(l,"position"),d=n.getUniformLocation(l,"srcTex"),m=n.getUniformLocation(l,"srcDimensions"),$=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,$),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(f),n.vertexAttribPointer(f,2,n.FLOAT,!1,0,0);const c=3,p=3,u=n.createTexture();n.bindTexture(n.TEXTURE_2D,u),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,c,p,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.useProgram(l),n.uniform1i(d,0),n.uniform2f(m,c,p),n.drawArrays(n.TRIANGLES,0,6);const h=new Uint8Array(3*3*4);n.readPixels(0,0,3,3,n.RGBA,n.UNSIGNED_BYTE,h);for(let T=0;T<3*3;++T)et(h[T*4])}return q(e),[]}class nt extends k{constructor(e){super(),W(this,e,tt,Ze,V,{})}}const ot=Float32Array;function ge(r,e,i,o,t,a){const s=new ot(16);return s[0]=2/(e-r),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(t-a),s[11]=0,s[12]=(r+e)/(r-e),s[13]=(i+o)/(i-o),s[14]=(t+a)/(t-a),s[15]=1,s}function it(r){let e;return{c(){e=F("canvas"),this.h()},l(i){e=g(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(e).forEach(_),this.h()},h(){A(e,"id","canvas"),de(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(i,o){E(i,e,o)},p:M,i:M,o:M,d(i){i&&_(e)}}}function rt(r){function e(){const i=`
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
  `,t=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const n=s.getContext("webgl");if(!n)throw"gl undefined";if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=H(n,[i,o]),m=H(n,[t,a]);if(!d||!m)throw"Can not create programs";const $={position:n.getAttribLocation(d,"position"),positionTex:n.getUniformLocation(d,"positionTex"),velocityTex:n.getUniformLocation(d,"velocityTex"),texDimensions:n.getUniformLocation(d,"texDimensions"),canvasDimensions:n.getUniformLocation(d,"canvasDimensions"),deltaTime:n.getUniformLocation(d,"deltaTime")},c={id:n.getAttribLocation(m,"id"),positionTex:n.getUniformLocation(m,"positionTex"),texDimensions:n.getUniformLocation(m,"texDimensions"),matrix:n.getUniformLocation(m,"matrix")},p=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW);const u=300,h=20,T=u*h,x=new Array(T).fill(0).map((v,G)=>G),w=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,w),n.bufferData(n.ARRAY_BUFFER,new Float32Array(x),n.STATIC_DRAW),Y(n.canvas);const X=(v,G)=>(G===void 0&&(G=v,v=0),Math.random()*(G-v)+v),O=new Float32Array(x.map(v=>[X(s.width),X(s.height),0,0]).flat()),j=new Float32Array(x.map(v=>[X(-300,300),X(-300,300),0,0]).flat());function z(v,G,ee,ye){const xe=v.createTexture();return v.bindTexture(v.TEXTURE_2D,xe),v.texImage2D(v.TEXTURE_2D,0,v.RGBA,ee,ye,0,v.RGBA,v.FLOAT,G),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE),xe}const K=z(n,j,u,h),Q=z(n,O,u,h),J=z(n,null,u,h);if(!Q||!J)throw"Can not create position textures";function Z(v,G){const ee=v.createFramebuffer();return v.bindFramebuffer(v.FRAMEBUFFER,ee),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,G,0),ee}const pe=Z(n,Q),_e=Z(n,J);let Te={fb:pe,tex:Q},re={fb:_e,tex:J},ve=0;function Ee(v){if(!n)return;v*=.001;const G=v-ve;ve=v,Y(n.canvas),n.bindFramebuffer(n.FRAMEBUFFER,re.fb),n.viewport(0,0,u,h),n.bindBuffer(n.ARRAY_BUFFER,p),n.enableVertexAttribArray($.position),n.vertexAttribPointer($.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,Te.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,K),n.useProgram(d),n.uniform1i($.positionTex,0),n.uniform1i($.velocityTex,1),n.uniform2f($.texDimensions,u,h),n.uniform2f($.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f($.deltaTime,G),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,w),n.enableVertexAttribArray(c.id),n.vertexAttribPointer(c.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,re.tex),n.useProgram(m),n.uniform2f(c.texDimensions,u,u),n.uniform1i(c.positionTex,0),n.uniformMatrix4fv(c.matrix,!1,ge(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,T);{const ee=Te;Te=re,re=ee}requestAnimationFrame(Ee)}requestAnimationFrame(Ee)}return q(()=>e()),[]}class st extends k{constructor(e){super(),W(this,e,rt,it,V,{})}}const ae=(r,e)=>(e===void 0&&(e=r,r=0),Math.random()*(e-r)+r);function at(r,e,i,o){const t=r*e,a=new Array(t).fill(0).map((l,f)=>f),s=new Float32Array(a.map(l=>[ae(i),ae(o),0,0]).flat()),n=new Float32Array(a.map(l=>[ae(-300,300),ae(-300,300),0,0]).flat());return{numParticles:t,ids:new Float32Array(a),positions:s,velocities:n}}const ct=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ft=`precision highp float;

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

`,lt=`  attribute float id;
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

`,ut=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function mt(r){let e;return{c(){e=F("canvas"),this.h()},l(i){e=g(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(e).forEach(_),this.h()},h(){A(e,"id","canvas"),de(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(i,o){E(i,e,o)},p:M,i:M,o:M,d(i){i&&_(e)}}}function dt(r){function e(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const a=t.getContext("webgl");if(!a)throw"gl undefined";$e(a);const s=H(a,[ct,ft]),n=H(a,[lt,ut]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},f={id:a.getAttribLocation(n,"id"),positionTex:a.getUniformLocation(n,"positionTex"),texDimensions:a.getUniformLocation(n,"texDimensions"),matrix:a.getUniformLocation(n,"matrix")},d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const m=300,$=20,{numParticles:c,ids:p,positions:u,velocities:h}=at(m,$,t.width,t.height),T=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,T),a.bufferData(a.ARRAY_BUFFER,new Float32Array(p),a.STATIC_DRAW),Y(a.canvas);const x=oe(a,h,m,$),w=oe(a,u,m,$),X=oe(a,null,m,$),O=Re(a,w),j=Re(a,X);let z={fb:O,tex:w},K={fb:j,tex:X},Q=0;function J(Z){if(!a||!d||!T)throw"Undefined params to render";Z*=.001;const pe=Z-Q;Q=Z,Y(a.canvas),o(a,K,m,$,d,l,z,x,s,pe),i(a,m,T,f,K,n,c);{const _e=z;z=K,K=_e}requestAnimationFrame(J)}requestAnimationFrame(J)}const i=(t,a,s,n,l,f,d)=>{t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.id),t.vertexAttribPointer(n.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,l.tex),t.useProgram(f),t.uniform2f(n.texDimensions,a,a),t.uniform1i(n.positionTex,0),t.uniformMatrix4fv(n.matrix,!1,ge(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,d)},o=(t,a,s,n,l,f,d,m,$,c)=>{t.bindFramebuffer(t.FRAMEBUFFER,a.fb),t.viewport(0,0,s,n),t.bindBuffer(t.ARRAY_BUFFER,l),t.enableVertexAttribArray(f.position),t.vertexAttribPointer(f.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,d.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,m),t.useProgram($),t.uniform1i(f.positionTex,0),t.uniform1i(f.velocityTex,1),t.uniform2f(f.texDimensions,s,n),t.uniform2f(f.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(f.deltaTime,c),t.drawArrays(t.TRIANGLES,0,6)};return q(()=>e()),[]}class pt extends k{constructor(e){super(),W(this,e,dt,mt,V,{})}}const _t=`attribute vec2 a_position;

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
`,Tt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function ht(r){let e,i,o,t,a,s,n,l,f,d,m,$;return{c(){e=F("p"),i=S(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=F("code"),t=S("requestAnimationFrame"),a=S(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=C(),n=F("canvas"),l=C(),f=F("button"),d=S("Add position"),this.h()},l(c){e=g(c,"P",{});var p=D(e);i=L(p,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=g(p,"CODE",{});var u=D(o);t=L(u,"requestAnimationFrame"),u.forEach(_),a=L(p,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),p.forEach(_),s=I(c),n=g(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(n).forEach(_),l=I(c),f=g(c,"BUTTON",{});var h=D(f);d=L(h,"Add position"),h.forEach(_),this.h()},h(){A(n,"id","canvas"),de(n,"background-color","black"),A(n,"width","800"),A(n,"height","600")},m(c,p){E(c,e,p),N(e,i),N(e,o),N(o,t),N(e,a),E(c,s,p),E(c,n,p),E(c,l,p),E(c,f,p),N(f,d),m||($=fe(f,"click",r[1]),m=!0)},p:M,i:M,o:M,d(c){c&&_(e),c&&_(s),c&&_(n),c&&_(l),c&&_(f),m=!1,$()}}}function $t(r){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";$e(s);const n=H(s,[_t,Tt]);Y(s.canvas);const l=s.getAttribLocation(n,"a_position"),f=s.getUniformLocation(n,"u_resolution"),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function m(){if(!s)throw"Undefined params to render";for(let w=0;w<=e.length-2;w+=2)e[w]=(e[w]+Math.random()*2-1)%s.canvas.width,e[w+1]=(e[w+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),Y(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(n),s.uniform2f(f,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,d);const $=2,c=s.FLOAT,p=!1,u=0,h=0;s.vertexAttribPointer(l,$,c,p,u,h);var T=s.POINTS,x=e.length/2;s.drawArrays(T,h,x),requestAnimationFrame(m)}requestAnimationFrame(m)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return q(()=>i()),[o,()=>o()]}class vt extends k{constructor(e){super(),W(this,e,$t,ht,V,{})}}const Et=`attribute float id;
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
`,xt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function At(r){let e,i,o,t,a,s,n,l,f,d,m,$;return{c(){e=F("p"),i=S("Create an array of render-size positions. Store this array in a texture. In each "),o=F("code"),t=S("requestAnimationFrame"),a=S(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=C(),n=F("canvas"),l=C(),f=F("button"),d=S("Add position"),this.h()},l(c){e=g(c,"P",{});var p=D(e);i=L(p,"Create an array of render-size positions. Store this array in a texture. In each "),o=g(p,"CODE",{});var u=D(o);t=L(u,"requestAnimationFrame"),u.forEach(_),a=L(p,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),p.forEach(_),s=I(c),n=g(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(n).forEach(_),l=I(c),f=g(c,"BUTTON",{});var h=D(f);d=L(h,"Add position"),h.forEach(_),this.h()},h(){A(n,"id","canvas"),de(n,"background-color","black"),A(n,"width",De),A(n,"height",Ue)},m(c,p){E(c,e,p),N(e,i),N(e,o),N(o,t),N(e,a),E(c,s,p),E(c,n,p),E(c,l,p),E(c,f,p),N(f,d),m||($=fe(f,"click",r[0]),m=!0)},p:M,i:M,o:M,d(c){c&&_(e),c&&_(s),c&&_(n),c&&_(l),c&&_(f),m=!1,$()}}}const De=800,Ue=600;function bt(r){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const t=o.getContext("webgl");if(!t)throw"gl undefined";$e(t);const a=H(t,[Et,xt]);Y(t.canvas);const s=t.getAttribLocation(a,"id"),n=t.getUniformLocation(a,"texDimensions"),l=t.getUniformLocation(a,"u_resolution"),f=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,f);const d=[0,1,2,3,4,5,6,7,8,9];t.bufferData(t.ARRAY_BUFFER,new Float32Array(d),t.STATIC_DRAW);const m=d.map(p=>[Math.random()*De,Math.random()*Ue,0,0]).flat();let $=oe(t,new Float32Array(m),3,3);function c(){if(!t)throw"Undefined params to render";for(let O=0;O<=m.length-2;O+=2)m[O]=(m[O]+Math.random()*2-1)%t.canvas.width,m[O+1]=(m[O+1]+Math.random()*0+1)%t.canvas.height;$=oe(t,new Float32Array(m),3,3),t.bufferData(t.ARRAY_BUFFER,new Float32Array(d),t.STATIC_DRAW),Y(t.canvas),t.viewport(0,0,t.canvas.width,t.canvas.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,$),t.useProgram(a),t.uniform2f(l,t.canvas.width,t.canvas.height),t.uniform2f(n,3,3),t.enableVertexAttribArray(s),t.bindBuffer(t.ARRAY_BUFFER,f);const p=1,u=t.FLOAT,h=!1,T=0,x=0;t.vertexAttribPointer(s,p,u,h,T,x);var w=t.POINTS,X=d.length;t.drawArrays(w,x,X),requestAnimationFrame(c)}requestAnimationFrame(c)}return q(()=>e()),[()=>addPosition()]}class Rt extends k{constructor(e){super(),W(this,e,bt,At,V,{})}}function wt(r){let e;return{c(){e=S("About")},l(i){e=L(i,"About")},m(i,o){E(i,e,o)},d(i){i&&_(e)}}}function Ft(r){let e;return{c(){e=S("Simple counter")},l(i){e=L(i,"Simple counter")},m(i,o){E(i,e,o)},d(i){i&&_(e)}}}function gt(r){let e;return{c(){e=S("Particles")},l(i){e=L(i,"Particles")},m(i,o){E(i,e,o)},d(i){i&&_(e)}}}function Dt(r){let e;return{c(){e=S("Particles 2")},l(i){e=L(i,"Particles 2")},m(i,o){E(i,e,o)},d(i){i&&_(e)}}}function Ut(r){let e;return{c(){e=S("Positions Buffer")},l(i){e=L(i,"Positions Buffer")},m(i,o){E(i,e,o)},d(i){i&&_(e)}}}function yt(r){let e;return{c(){e=S("Positions Texture")},l(i){e=L(i,"Positions Texture")},m(i,o){E(i,e,o)},d(i){i&&_(e)}}}function Pt(r){let e,i,o,t,a,s,n,l,f,d,m,$;return e=new te({props:{$$slots:{default:[wt]},$$scope:{ctx:r}}}),o=new te({props:{$$slots:{default:[Ft]},$$scope:{ctx:r}}}),a=new te({props:{$$slots:{default:[gt]},$$scope:{ctx:r}}}),n=new te({props:{$$slots:{default:[Dt]},$$scope:{ctx:r}}}),f=new te({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}}}),m=new te({props:{$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){U(e.$$.fragment),i=C(),U(o.$$.fragment),t=C(),U(a.$$.fragment),s=C(),U(n.$$.fragment),l=C(),U(f.$$.fragment),d=C(),U(m.$$.fragment)},l(c){y(e.$$.fragment,c),i=I(c),y(o.$$.fragment,c),t=I(c),y(a.$$.fragment,c),s=I(c),y(n.$$.fragment,c),l=I(c),y(f.$$.fragment,c),d=I(c),y(m.$$.fragment,c)},m(c,p){P(e,c,p),E(c,i,p),P(o,c,p),E(c,t,p),P(a,c,p),E(c,s,p),P(n,c,p),E(c,l,p),P(f,c,p),E(c,d,p),P(m,c,p),$=!0},p(c,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:c}),e.$set(u);const h={};p&1&&(h.$$scope={dirty:p,ctx:c}),o.$set(h);const T={};p&1&&(T.$$scope={dirty:p,ctx:c}),a.$set(T);const x={};p&1&&(x.$$scope={dirty:p,ctx:c}),n.$set(x);const w={};p&1&&(w.$$scope={dirty:p,ctx:c}),f.$set(w);const X={};p&1&&(X.$$scope={dirty:p,ctx:c}),m.$set(X)},i(c){$||(b(e.$$.fragment,c),b(o.$$.fragment,c),b(a.$$.fragment,c),b(n.$$.fragment,c),b(f.$$.fragment,c),b(m.$$.fragment,c),$=!0)},o(c){R(e.$$.fragment,c),R(o.$$.fragment,c),R(a.$$.fragment,c),R(n.$$.fragment,c),R(f.$$.fragment,c),R(m.$$.fragment,c),$=!1},d(c){B(e,c),c&&_(i),B(o,c),c&&_(t),B(a,c),c&&_(s),B(n,c),c&&_(l),B(f,c),c&&_(d),B(m,c)}}}function Bt(r){let e,i,o,t,a,s,n,l;return{c(){e=F("p"),i=S("This page is an experiment to run simulation on the GPU."),o=C(),t=F("p"),a=S(`I am copying code from
                `),s=F("a"),n=S("this site"),l=S(`
                and adding basic typings for typescript.`),this.h()},l(f){e=g(f,"P",{});var d=D(e);i=L(d,"This page is an experiment to run simulation on the GPU."),d.forEach(_),o=I(f),t=g(f,"P",{});var m=D(t);a=L(m,`I am copying code from
                `),s=g(m,"A",{target:!0,href:!0});var $=D(s);n=L($,"this site"),$.forEach(_),l=L(m,`
                and adding basic typings for typescript.`),m.forEach(_),this.h()},h(){A(s,"target","none"),A(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(f,d){E(f,e,d),N(e,i),E(f,o,d),E(f,t,d),N(t,a),N(t,s),N(s,n),N(t,l)},p:M,d(f){f&&_(e),f&&_(o),f&&_(t)}}}function St(r){let e,i;return e=new nt({}),{c(){U(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,t){P(e,o,t),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){B(e,o)}}}function Lt(r){let e,i;return e=new st({}),{c(){U(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,t){P(e,o,t),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){B(e,o)}}}function Ct(r){let e,i;return e=new pt({}),{c(){U(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,t){P(e,o,t),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){B(e,o)}}}function It(r){let e,i;return e=new vt({}),{c(){U(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,t){P(e,o,t),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){B(e,o)}}}function Xt(r){let e,i;return e=new Rt({}),{c(){U(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,t){P(e,o,t),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){B(e,o)}}}function Mt(r){let e,i,o,t,a,s,n,l,f,d,m,$,c,p;return e=new He({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),o=new ne({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}}}),a=new ne({props:{$$slots:{default:[St]},$$scope:{ctx:r}}}),n=new ne({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),f=new ne({props:{$$slots:{default:[Ct]},$$scope:{ctx:r}}}),m=new ne({props:{$$slots:{default:[It]},$$scope:{ctx:r}}}),c=new ne({props:{$$slots:{default:[Xt]},$$scope:{ctx:r}}}),{c(){U(e.$$.fragment),i=C(),U(o.$$.fragment),t=C(),U(a.$$.fragment),s=C(),U(n.$$.fragment),l=C(),U(f.$$.fragment),d=C(),U(m.$$.fragment),$=C(),U(c.$$.fragment)},l(u){y(e.$$.fragment,u),i=I(u),y(o.$$.fragment,u),t=I(u),y(a.$$.fragment,u),s=I(u),y(n.$$.fragment,u),l=I(u),y(f.$$.fragment,u),d=I(u),y(m.$$.fragment,u),$=I(u),y(c.$$.fragment,u)},m(u,h){P(e,u,h),E(u,i,h),P(o,u,h),E(u,t,h),P(a,u,h),E(u,s,h),P(n,u,h),E(u,l,h),P(f,u,h),E(u,d,h),P(m,u,h),E(u,$,h),P(c,u,h),p=!0},p(u,h){const T={};h&1&&(T.$$scope={dirty:h,ctx:u}),e.$set(T);const x={};h&1&&(x.$$scope={dirty:h,ctx:u}),o.$set(x);const w={};h&1&&(w.$$scope={dirty:h,ctx:u}),a.$set(w);const X={};h&1&&(X.$$scope={dirty:h,ctx:u}),n.$set(X);const O={};h&1&&(O.$$scope={dirty:h,ctx:u}),f.$set(O);const j={};h&1&&(j.$$scope={dirty:h,ctx:u}),m.$set(j);const z={};h&1&&(z.$$scope={dirty:h,ctx:u}),c.$set(z)},i(u){p||(b(e.$$.fragment,u),b(o.$$.fragment,u),b(a.$$.fragment,u),b(n.$$.fragment,u),b(f.$$.fragment,u),b(m.$$.fragment,u),b(c.$$.fragment,u),p=!0)},o(u){R(e.$$.fragment,u),R(o.$$.fragment,u),R(a.$$.fragment,u),R(n.$$.fragment,u),R(f.$$.fragment,u),R(m.$$.fragment,u),R(c.$$.fragment,u),p=!1},d(u){B(e,u),u&&_(i),B(o,u),u&&_(t),B(a,u),u&&_(s),B(n,u),u&&_(l),B(f,u),u&&_(d),B(m,u),u&&_($),B(c,u)}}}function Nt(r){let e,i,o;return i=new ke({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),{c(){e=F("div"),U(i.$$.fragment)},l(t){e=g(t,"DIV",{});var a=D(e);y(i.$$.fragment,a),a.forEach(_)},m(t,a){E(t,e,a),P(i,e,null),o=!0},p(t,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:t}),i.$set(s)},i(t){o||(b(i.$$.fragment,t),o=!0)},o(t){R(i.$$.fragment,t),o=!1},d(t){t&&_(e),B(i)}}}class Ot extends k{constructor(e){super(),W(this,e,null,Nt,V,{})}}function Gt(r){let e,i;return e=new Ot({}),{c(){U(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,t){P(e,o,t),i=!0},p:M,i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){B(e,o)}}}class Vt extends k{constructor(e){super(),W(this,e,null,Gt,V,{})}}export{Vt as default};
