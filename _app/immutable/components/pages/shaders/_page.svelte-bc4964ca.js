import{S as J,i as Z,s as ee,C as Le,k as g,l as D,m as y,h as m,n as w,b as x,K as he,E as Be,F as Se,G as Ce,f as U,t as P,H as Re,R as ut,o as ie,j as mt,Q as dt,T as qe,U as tt,A as pt,V as ht,g as _t,d as Tt,q as L,a as S,r as B,c as C,D as R,B as z,p as Te,O as He,u as je,P as nt,M as $t,w as I,x as M,y as N,z as X}from"../../../chunks/index-ff9e742a.js";import{w as Fe}from"../../../chunks/index-84a8d4d9.js";let vt=1;function ot(){return`svelte-tabs-${vt++}`}function xt(t){let e,i,o,r;const a=t[4].default,s=Le(a,t,t[3],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(n){e=D(n,"DIV",{class:!0});var l=y(e);s&&s.l(l),l.forEach(m),this.h()},h(){w(e,"class","svelte-tabs")},m(n,l){x(n,e,l),s&&s.m(e,null),i=!0,o||(r=he(e,"keydown",t[1]),o=!0)},p(n,[l]){s&&s.p&&(!i||l&8)&&Be(s,a,n,n[3],i?Ce(a,n[3],l,null):Se(n[3]),null)},i(n){i||(U(s,n),i=!0)},o(n){P(s,n),i=!1},d(n){n&&m(e),s&&s.d(n),o=!1,r()}}}const Ye={};function At(t,e,i){const o=t.indexOf(e);t.splice(o,1),i.update(r=>r===e?t[o]||t[t.length-1]:r)}function bt(t,e,i){let o,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const n=[],l=[],f=[],d=Fe({}),h=Fe({}),$=Fe(null);Re(t,$,c=>i(5,o=c));const _=Fe(null);function T(c,p,u){c.push(p),u.update(A=>A||p),dt(()=>At(c,p,u))}function v(c){const p=l.indexOf(c);$.set(c),_.set(f[p])}ut(Ye,{registerTab(c){T(l,c,$)},registerTabElement(c){n.push(c)},registerPanel(c){T(f,c,_)},selectTab:v,selectedTab:$,selectedPanel:_,controls:d,labeledBy:h}),ie(()=>{v(l[s])}),mt(()=>{for(let c=0;c<l.length;c++)d.update(p=>({...p,[l[c].id]:f[c].id})),h.update(p=>({...p,[f[c].id]:l[c].id}))});async function E(c){if(c.target.classList.contains("svelte-tabs__tab")){let p=l.indexOf(o);switch(c.key){case"ArrowRight":p+=1,p>l.length-1&&(p=0),v(l[p]),n[p].focus();break;case"ArrowLeft":p-=1,p<0&&(p=l.length-1),v(l[p]),n[p].focus()}}}return t.$$set=c=>{"initialSelectedIndex"in c&&i(2,s=c.initialSelectedIndex),"$$scope"in c&&i(3,a=c.$$scope)},[$,E,s,a,r]}class Et extends J{constructor(e){super(),Z(this,e,bt,xt,ee,{initialSelectedIndex:2})}}function wt(t){let e,i,o,r,a,s;const n=t[9].default,l=Le(n,t,t[8],null);return{c(){e=g("li"),l&&l.c(),this.h()},l(f){e=D(f,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=y(e);l&&l.l(d),d.forEach(m),this.h()},h(){w(e,"role","tab"),w(e,"id",t[3].id),w(e,"aria-controls",i=t[2][t[3].id]),w(e,"aria-selected",t[1]),w(e,"tabindex",o=t[1]?0:-1),w(e,"class","svelte-tabs__tab svelte-1fbofsd"),qe(e,"svelte-tabs__selected",t[1])},m(f,d){x(f,e,d),l&&l.m(e,null),t[10](e),r=!0,a||(s=he(e,"click",t[11]),a=!0)},p(f,[d]){l&&l.p&&(!r||d&256)&&Be(l,n,f,f[8],r?Ce(n,f[8],d,null):Se(f[8]),null),(!r||d&4&&i!==(i=f[2][f[3].id]))&&w(e,"aria-controls",i),(!r||d&2)&&w(e,"aria-selected",f[1]),(!r||d&2&&o!==(o=f[1]?0:-1))&&w(e,"tabindex",o),(!r||d&2)&&qe(e,"svelte-tabs__selected",f[1])},i(f){r||(U(l,f),r=!0)},o(f){P(l,f),r=!1},d(f){f&&m(e),l&&l.d(f),t[10](null),a=!1,s()}}}function Rt(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e,n;const l={id:ot()},{registerTab:f,registerTabElement:d,selectTab:h,selectedTab:$,controls:_}=tt(Ye);Re(t,$,c=>i(7,o=c)),Re(t,_,c=>i(2,r=c));let T;f(l),ie(async()=>{await pt(),d(n)});function v(c){ht[c?"unshift":"push"](()=>{n=c,i(0,n)})}const E=()=>h(l);return t.$$set=c=>{"$$scope"in c&&i(8,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,T=o===l)},[n,T,r,l,h,$,_,o,s,a,v,E]}class re extends J{constructor(e){super(),Z(this,e,Rt,wt,ee,{})}}function Ft(t){let e,i;const o=t[1].default,r=Le(o,t,t[0],null);return{c(){e=g("ul"),r&&r.c(),this.h()},l(a){e=D(a,"UL",{role:!0,class:!0});var s=y(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"role","tablist"),w(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){x(a,e,s),r&&r.m(e,null),i=!0},p(a,[s]){r&&r.p&&(!i||s&1)&&Be(r,o,a,a[0],i?Ce(o,a[0],s,null):Se(a[0]),null)},i(a){i||(U(r,a),i=!0)},o(a){P(r,a),i=!1},d(a){a&&m(e),r&&r.d(a)}}}function gt(t,e,i){let{$$slots:o={},$$scope:r}=e;return t.$$set=a=>{"$$scope"in a&&i(0,r=a.$$scope)},[r,o]}class Dt extends J{constructor(e){super(),Z(this,e,gt,Ft,ee,{})}}function Ke(t){let e;const i=t[6].default,o=Le(i,t,t[5],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,a){o&&o.m(r,a),e=!0},p(r,a){o&&o.p&&(!e||a&32)&&Be(o,i,r,r[5],e?Ce(i,r[5],a,null):Se(r[5]),null)},i(r){e||(U(o,r),e=!0)},o(r){P(o,r),e=!1},d(r){o&&o.d(r)}}}function Ut(t){let e,i,o,r=t[1]===t[2]&&Ke(t);return{c(){e=g("div"),r&&r.c(),this.h()},l(a){e=D(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=y(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"id",t[2].id),w(e,"aria-labelledby",i=t[0][t[2].id]),w(e,"class","svelte-tabs__tab-panel svelte-epfyet"),w(e,"role","tabpanel")},m(a,s){x(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&U(r,1)):(r=Ke(a),r.c(),U(r,1),r.m(e,null)):r&&(_t(),P(r,1,1,()=>{r=null}),Tt()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&w(e,"aria-labelledby",i)},i(a){o||(U(r),o=!0)},o(a){P(r),o=!1},d(a){a&&m(e),r&&r.d()}}}function yt(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e;const n={id:ot()},{registerPanel:l,selectedPanel:f,labeledBy:d}=tt(Ye);return Re(t,f,h=>i(1,r=h)),Re(t,d,h=>i(0,o=h)),l(n),t.$$set=h=>{"$$scope"in h&&i(5,s=h.$$scope)},[o,r,n,f,d,s,a]}class se extends J{constructor(e){super(),Z(this,e,yt,Ut,ee,{})}}const Pt=["VERTEX_SHADER","FRAGMENT_SHADER"];function it(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Ie(e),e}function Ie(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ae(t,e,i,o){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,o,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function _e(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function te(t,e,i,o,r){const a=[];for(let n=0;n<e.length;++n){const l=Pt[n]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,f=Lt(t,e[n],l,r);if(!f)throw"Can not create shader";a.push(f)}const s=Bt(t,a,i,o,r);if(!s)throw"Can not create program";return s}function Lt(t,e,i,o){const r=o||console.log,a=t.createShader(i);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+n+`
`+e.split(`
`).map((l,f)=>`${f+1}: ${l}`).join(`
`))),t.deleteShader(a),null}return a}function Bt(t,e,i,o,r){const a=r||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){t.attachShader(s,l)}),i&&i.forEach(function(l,f){t.bindAttribLocation(s,o?o[f]:f,l)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const l=t.getProgramInfoLog(s);return a("Error in program linking:"+l),t.deleteProgram(s),null}return s}function q(t,e){e=e||1;const i=t.clientWidth*e|0,o=t.clientHeight*e|0;return t.width!==i||t.height!==o?(t.width=i,t.height=o,!0):!1}function St(t){let e,i,o,r,a,s;return{c(){e=g("p"),i=L(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=S(),r=g("ul"),a=S(),s=g("canvas"),this.h()},l(n){e=D(n,"P",{});var l=y(e);i=B(l,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),l.forEach(m),o=C(n),r=D(n,"UL",{id:!0}),y(r).forEach(m),a=C(n),s=D(n,"CANVAS",{id:!0}),y(s).forEach(m),this.h()},h(){w(r,"id","result"),w(s,"id","canvas")},m(n,l){x(n,e,l),R(e,i),x(n,o,l),x(n,r,l),x(n,a,l),x(n,s,l)},p:z,i:z,o:z,d(n){n&&m(e),n&&m(o),n&&m(r),n&&m(a),n&&m(s)}}}function Ct(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function It(t){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const n=s.getContext("webgl");if(!n)throw"Coulndt get context";const l=te(n,[i,o]);if(!l)throw"Could not get program";const f=n.getAttribLocation(l,"position"),d=n.getUniformLocation(l,"srcTex"),h=n.getUniformLocation(l,"srcDimensions"),$=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,$),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(f),n.vertexAttribPointer(f,2,n.FLOAT,!1,0,0);const _=3,T=3,v=n.createTexture();n.bindTexture(n.TEXTURE_2D,v),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,_,T,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.useProgram(l),n.uniform1i(d,0),n.uniform2f(h,_,T),n.drawArrays(n.TRIANGLES,0,6);const E=new Uint8Array(3*3*4);n.readPixels(0,0,3,3,n.RGBA,n.UNSIGNED_BYTE,E);for(let c=0;c<3*3;++c)Ct(E[c*4])}return ie(e),[]}class Mt extends J{constructor(e){super(),Z(this,e,It,St,ee,{})}}const Nt=Float32Array;function rt(t,e,i,o,r,a){const s=new Nt(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(i+o)/(i-o),s[14]=(r+a)/(r-a),s[15]=1,s}function Xt(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(m),this.h()},h(){w(e,"id","canvas"),Te(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){x(i,e,o)},p:z,i:z,o:z,d(i){i&&m(e)}}}function Ot(t){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const n=s.getContext("webgl");if(!n)throw"gl undefined";if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=te(n,[i,o]),h=te(n,[r,a]);if(!d||!h)throw"Can not create programs";const $={position:n.getAttribLocation(d,"position"),positionTex:n.getUniformLocation(d,"positionTex"),velocityTex:n.getUniformLocation(d,"velocityTex"),texDimensions:n.getUniformLocation(d,"texDimensions"),canvasDimensions:n.getUniformLocation(d,"canvasDimensions"),deltaTime:n.getUniformLocation(d,"deltaTime")},_={id:n.getAttribLocation(h,"id"),positionTex:n.getUniformLocation(h,"positionTex"),texDimensions:n.getUniformLocation(h,"texDimensions"),matrix:n.getUniformLocation(h,"matrix")},T=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,T),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW);const v=300,E=20,c=v*E,p=new Array(c).fill(0).map((b,G)=>G),u=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,u),n.bufferData(n.ARRAY_BUFFER,new Float32Array(p),n.STATIC_DRAW),q(n.canvas);const A=(b,G)=>(G===void 0&&(G=b,b=0),Math.random()*(G-b)+b),H=new Float32Array(p.map(b=>[A(s.width),A(s.height),0,0]).flat()),j=new Float32Array(p.map(b=>[A(-300,300),A(-300,300),0,0]).flat());function V(b,G,oe,lt){const Ge=b.createTexture();return b.bindTexture(b.TEXTURE_2D,Ge),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,oe,lt,0,b.RGBA,b.FLOAT,G),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),Ge}const W=V(n,j,v,E),Y=V(n,H,v,E),O=V(n,null,v,E);if(!Y||!O)throw"Can not create position textures";function K(b,G){const oe=b.createFramebuffer();return b.bindFramebuffer(b.FRAMEBUFFER,oe),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,G,0),oe}const ne=K(n,Y),F=K(n,O);let k={fb:ne,tex:Y},ce={fb:F,tex:O},Q=0;function $e(b){if(!n)return;b*=.001;const G=b-Q;Q=b,q(n.canvas),n.bindFramebuffer(n.FRAMEBUFFER,ce.fb),n.viewport(0,0,v,E),n.bindBuffer(n.ARRAY_BUFFER,T),n.enableVertexAttribArray($.position),n.vertexAttribPointer($.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,k.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,W),n.useProgram(d),n.uniform1i($.positionTex,0),n.uniform1i($.velocityTex,1),n.uniform2f($.texDimensions,v,E),n.uniform2f($.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f($.deltaTime,G),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,u),n.enableVertexAttribArray(_.id),n.vertexAttribPointer(_.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,ce.tex),n.useProgram(h),n.uniform2f(_.texDimensions,v,v),n.uniform1i(_.positionTex,0),n.uniformMatrix4fv(_.matrix,!1,rt(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,c);{const oe=k;k=ce,ce=oe}requestAnimationFrame($e)}requestAnimationFrame($e)}return ie(()=>e()),[]}class zt extends J{constructor(e){super(),Z(this,e,Ot,Xt,ee,{})}}const ge=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Vt(t,e,i,o){const r=t*e,a=new Array(r).fill(0).map((l,f)=>f),s=new Float32Array(a.map(l=>[ge(i),ge(o),0,0]).flat()),n=new Float32Array(a.map(l=>[ge(-300,300),ge(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:n}}const kt=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Wt=`precision highp float;

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

`,Yt=`  attribute float id;
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

`,Gt=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function qt(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(m),this.h()},h(){w(e,"id","canvas"),Te(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){x(i,e,o)},p:z,i:z,o:z,d(i){i&&m(e)}}}function Ht(t){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";Ie(a);const s=te(a,[kt,Wt]),n=te(a,[Yt,Gt]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},f={id:a.getAttribLocation(n,"id"),positionTex:a.getUniformLocation(n,"positionTex"),texDimensions:a.getUniformLocation(n,"texDimensions"),matrix:a.getUniformLocation(n,"matrix")},d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const h=300,$=20,{numParticles:_,ids:T,positions:v,velocities:E}=Vt(h,$,r.width,r.height),c=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array(T),a.STATIC_DRAW),q(a.canvas);const p=ae(a,E,h,$),u=ae(a,v,h,$),A=ae(a,null,h,$),H=_e(a,u),j=_e(a,A);let V={fb:H,tex:u},W={fb:j,tex:A},Y=0;function O(K){if(!a||!d||!c)throw"Undefined params to render";K*=.001;const ne=K-Y;Y=K,q(a.canvas),o(a,W,h,$,d,l,V,p,s,ne),i(a,h,c,f,W,n,_);{const F=V;V=W,W=F}requestAnimationFrame(O)}requestAnimationFrame(O)}const i=(r,a,s,n,l,f,d)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(n.id),r.vertexAttribPointer(n.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,l.tex),r.useProgram(f),r.uniform2f(n.texDimensions,a,a),r.uniform1i(n.positionTex,0),r.uniformMatrix4fv(n.matrix,!1,rt(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,d)},o=(r,a,s,n,l,f,d,h,$,_)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,n),r.bindBuffer(r.ARRAY_BUFFER,l),r.enableVertexAttribArray(f.position),r.vertexAttribPointer(f.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,d.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,h),r.useProgram($),r.uniform1i(f.positionTex,0),r.uniform1i(f.velocityTex,1),r.uniform2f(f.texDimensions,s,n),r.uniform2f(f.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(f.deltaTime,_),r.drawArrays(r.TRIANGLES,0,6)};return ie(()=>e()),[]}class jt extends J{constructor(e){super(),Z(this,e,Ht,qt,ee,{})}}const Kt=`attribute vec2 a_position;

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
`,Qt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Jt(t){let e,i,o,r,a,s,n,l,f,d,h,$;return{c(){e=g("p"),i=L(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=g("code"),r=L("requestAnimationFrame"),a=L(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=S(),n=g("canvas"),l=S(),f=g("button"),d=L("Add position"),this.h()},l(_){e=D(_,"P",{});var T=y(e);i=B(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=D(T,"CODE",{});var v=y(o);r=B(v,"requestAnimationFrame"),v.forEach(m),a=B(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(m),s=C(_),n=D(_,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(n).forEach(m),l=C(_),f=D(_,"BUTTON",{});var E=y(f);d=B(E,"Add position"),E.forEach(m),this.h()},h(){w(n,"id","canvas"),Te(n,"background-color","black"),w(n,"width","800"),w(n,"height","600")},m(_,T){x(_,e,T),R(e,i),R(e,o),R(o,r),R(e,a),x(_,s,T),x(_,n,T),x(_,l,T),x(_,f,T),R(f,d),h||($=he(f,"click",t[1]),h=!0)},p:z,i:z,o:z,d(_){_&&m(e),_&&m(s),_&&m(n),_&&m(l),_&&m(f),h=!1,$()}}}function Zt(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Ie(s);const n=te(s,[Kt,Qt]);q(s.canvas);const l=s.getAttribLocation(n,"a_position"),f=s.getUniformLocation(n,"u_resolution"),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function h(){if(!s)throw"Undefined params to render";for(let u=0;u<=e.length-2;u+=2)e[u]=(e[u]+Math.random()*2-1)%s.canvas.width,e[u+1]=(e[u+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),q(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(n),s.uniform2f(f,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,d);const $=2,_=s.FLOAT,T=!1,v=0,E=0;s.vertexAttribPointer(l,$,_,T,v,E);var c=s.POINTS,p=e.length/2;s.drawArrays(c,E,p),requestAnimationFrame(h)}requestAnimationFrame(h)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return ie(()=>i()),[o,()=>o()]}class en extends J{constructor(e){super(),Z(this,e,Zt,Jt,ee,{})}}const tn=`attribute float id;
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
`,nn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let ve,xe;const on=t=>{xe=te(t,[tn,nn]),ve={idAttributeLocation:t.getAttribLocation(xe,"id"),texDimensionsUniformLocation:t.getUniformLocation(xe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(xe,"u_resolution")}},rn=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;q(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(xe),e.uniform2f(ve.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ve.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(ve.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,n=e.FLOAT,l=!1,f=0,d=0;e.vertexAttribPointer(ve.idAttributeLocation,s,n,l,f,d);const h=e.POINTS,$=r.length;e.drawArrays(h,d,$)};function sn(t){let e,i,o,r,a,s,n;return{c(){e=g("p"),i=L("Create an array of render-size positions. Store this array in a texture. In each "),o=g("code"),r=L("requestAnimationFrame"),a=L(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=S(),n=g("canvas"),this.h()},l(l){e=D(l,"P",{});var f=y(e);i=B(f,"Create an array of render-size positions. Store this array in a texture. In each "),o=D(f,"CODE",{});var d=y(o);r=B(d,"requestAnimationFrame"),d.forEach(m),a=B(f,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),f.forEach(m),s=C(l),n=D(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(n).forEach(m),this.h()},h(){w(n,"id","canvas"),Te(n,"background-color","black"),w(n,"width",st),w(n,"height",at)},m(l,f){x(l,e,f),R(e,i),R(e,o),R(o,r),R(e,a),x(l,s,f),x(l,n,f)},p:z,i:z,o:z,d(l){l&&m(e),l&&m(s),l&&m(n)}}}const st=800,at=600;function an(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const o=i.getContext("webgl");if(!o)throw"gl undefined";Ie(o),q(o.canvas),on(o);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(n=>[Math.random()*st,Math.random()*at,0,0]).flat();function s(){if(!o)throw"Undefined params to render";for(let l=0;l<=a.length-2;l+=2)a[l]=(a[l]+Math.random()*2-1)%o.canvas.width,a[l+1]=(a[l+1]+Math.random()*0+1)%o.canvas.height;const n=ae(o,new Float32Array(a),3,3);rn({gl:o,positionTex:n,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return ie(()=>e()),[]}let cn=class extends J{constructor(e){super(),Z(this,e,an,sn,ee,{})}};const fn=`attribute float id;
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
`,ln=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Ae,be,Oe;const un=(t,e)=>{be=te(t,[fn,ln]),Ae={idAttributeLocation:t.getAttribLocation(be,"id"),texDimensionsUniformLocation:t.getUniformLocation(be,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(be,"u_resolution")},Oe=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Oe),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},mn=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;q(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Oe),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(be),e.uniform2f(Ae.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ae.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(Ae.idAttributeLocation);const a=1,s=e.FLOAT,n=!1,l=0,f=0;e.vertexAttribPointer(Ae.idAttributeLocation,a,s,n,l,f),e.drawArrays(e.POINTS,f,r.length)};function dn(t,e){const i=new Array(t).fill(0).map((a,s)=>s),o=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const pn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,hn=`precision highp float;

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

`;let me,de,ze,Me,Ne,Qe,Je,Ee,ye;const _n=(t,e)=>{const{positions:i,texDimensions:o}=e;de=te(t,[pn,hn]),me={positionAttributeLocation:t.getAttribLocation(de,"position"),positionTexLocation:t.getUniformLocation(de,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(de,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(de,"u_resolution")},ze=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ze),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Me=ae(t,new Float32Array(i),o.width,o.height),Ne=ae(t,null,o.width,o.height),Qe=_e(t,Me),Je=_e(t,Ne),Ee={fb:Qe,tex:Me},ye={fb:Je,tex:Ne}},Tn=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,ye.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,ze),e.enableVertexAttribArray(me.positionAttributeLocation),e.vertexAttribPointer(me.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ee.tex),e.useProgram(de),e.uniform1i(me.positionTexLocation,0),e.uniform2f(me.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(me.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=Ee;Ee=ye,ye=o}return Ee.tex};function $n(t){let e,i,o,r,a,s,n,l,f,d,h,$,_;return{c(){e=g("p"),i=L("Create an array of render-size positions. Store this array in a texture."),o=S(),r=g("p"),a=L("Create 2 textures which will be used to update the positions with a shader. In each "),s=g("code"),n=L("requestAnimationFrame"),l=L(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),f=S(),d=g("p"),h=L("Finally switch the two textures to read and write in the updated textures"),$=S(),_=g("canvas"),this.h()},l(T){e=D(T,"P",{});var v=y(e);i=B(v,"Create an array of render-size positions. Store this array in a texture."),v.forEach(m),o=C(T),r=D(T,"P",{});var E=y(r);a=B(E,"Create 2 textures which will be used to update the positions with a shader. In each "),s=D(E,"CODE",{});var c=y(s);n=B(c,"requestAnimationFrame"),c.forEach(m),l=B(E,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),E.forEach(m),f=C(T),d=D(T,"P",{});var p=y(d);h=B(p,"Finally switch the two textures to read and write in the updated textures"),p.forEach(m),$=C(T),_=D(T,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(_).forEach(m),this.h()},h(){w(_,"id","canvas"),Te(_,"background-color","black"),w(_,"width",ct),w(_,"height",ft)},m(T,v){x(T,e,v),R(e,i),x(T,o,v),x(T,r,v),R(r,a),R(r,s),R(s,n),R(r,l),x(T,f,v),x(T,d,v),R(d,h),x(T,$,v),x(T,_,v)},p:z,i:z,o:z,d(T){T&&m(e),T&&m(o),T&&m(r),T&&m(f),T&&m(d),T&&m($),T&&m(_)}}}const ct=800,ft=600;function vn(t){function e(){const i=it();q(i.canvas);const{ids:o,positions:r,texDimensions:a}=dn(100,{width:ct,height:ft});un(i,o),_n(i,{positions:r,texDimensions:a});function s(){q(i.canvas);const n=Tn({gl:i,texDimensions:a});mn({gl:i,positionTex:n,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return ie(()=>e()),[]}let xn=class extends J{constructor(e){super(),Z(this,e,vn,$n,ee,{})}};const An=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;

varying float v_color;
varying float v_id;

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
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,bn=`precision mediump float;
varying float v_color;
varying float v_id;

void main() {
    if (v_id < 0.1) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        return;
    }
    if (v_id > 0.45 && v_id < 0.55) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        return;
    }
    if (v_id > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        return;
    }
    gl_FragColor = vec4(v_id, 1.0, v_id, 1.0);

    // if (v_color == 0.0) {
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 0.3);
    // } else if (v_color == 1.0){
    //     gl_FragColor = vec4(0.0, 1.0, 0.0, 0.3);
    // } else if (v_color == 2.0){
    //     gl_FragColor = vec4(0.0, 0.0, 1.0, 0.3);
    // } else if (v_color == 3.0){
    //     gl_FragColor = vec4(1.0, 1.0, 0.0, 0.3);
    // }
}
`;let fe,pe,Ve,ke;const En=(t,e)=>{const{ids:i,colors:o}=e;pe=te(t,[An,bn]),fe={idAttributeLocation:t.getAttribLocation(pe,"id"),colorAttributeLocation:t.getAttribLocation(pe,"color"),texDimensionsUniformLocation:t.getUniformLocation(pe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(pe,"u_resolution")},Ve=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ve),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),ke=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ke),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW)},wn=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t,a=1,s=e.FLOAT,n=!1,l=0,f=0;q(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Ve),e.vertexAttribPointer(fe.idAttributeLocation,a,s,n,l,f),e.enableVertexAttribArray(fe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,ke),e.vertexAttribPointer(fe.colorAttributeLocation,a,s,n,l,f),e.enableVertexAttribArray(fe.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(pe),e.uniform2f(fe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(fe.texDimensionsUniformLocation,o.width,o.height),e.drawArrays(e.POINTS,f,r.length)};function Rn(t,e){const i=t.width*t.height,o=new Array(i).fill(0).map((s,n)=>n),r=new Array(i).fill(0).map(s=>Math.floor(Math.random()*4)),a=o.map(s=>{{const{x:l,y:f}=Fn(e,20);return[l,f,0,0]}}).flat();return{ids:o,positions:a,texDimensions:t,colors:r}}const Fn=(t,e)=>{const i=e*Math.random(),o=Math.random()*2*Math.PI,r=i*Math.cos(o)+t.width/2,a=i*Math.sin(o)+t.height/2;return{x:r,y:a}},gn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Dn=`precision highp float;

#define MIN_DISTANCE 9.0

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;
uniform float deltaTime;

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
            if (mag < MIN_DISTANCE) {
                if (mag == 0.0) {
                    mag = 1.0e-10;
                }
                direction = direction + (diff * 10.0/mag);
            }
        }
    }
    direction = (direction * 0.0001) * deltaTime;

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let le,ue,We,De,Xe,Ze,et,we,Pe,Ue;const Un=(t,e)=>{const{positions:i,texDimensions:o}=e;return ue=te(t,[gn,Dn]),le={positionAttributeLocation:t.getAttribLocation(ue,"position"),positionTexLocation:t.getUniformLocation(ue,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(ue,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ue,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ue,"u_resolution")},We=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,We),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),De=ae(t,new Float32Array(i),o.width,o.height),Xe=ae(t,null,o.width,o.height),Ze=_e(t,De),et=_e(t,Xe),we={fb:Ze,tex:De},Pe={fb:et,tex:Xe},De},yn=t=>{const{gl:e,texDimensions:i}=t,o=Date.now();Ue||(Ue=o-1);const r=o-Ue;Ue=o,e.bindFramebuffer(e.FRAMEBUFFER,Pe.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,We),e.enableVertexAttribArray(le.positionAttributeLocation),e.vertexAttribPointer(le.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,we.tex),e.useProgram(ue),e.uniform1i(le.positionTexLocation,0),e.uniform1f(le.deltaTimeUniformLocation,r),e.uniform2f(le.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(le.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=we;we=Pe,Pe=a}return we.tex};function Pn(t){let e,i,o,r,a,s,n,l,f,d,h=t[2]?"Play":"Pause",$,_,T,v=t[1]?"Normal Speed":"Slow Mo",E,c,p,u,A=t[4].width*t[4].height+"",H,j,V,W,Y,O,K,ne;return{c(){e=g("p"),i=L("Same principle with a shader to update positions and a shader to draw particles."),o=S(),r=g("p"),a=L(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=S(),n=g("canvas"),l=S(),f=g("div"),d=g("button"),$=L(h),_=S(),T=g("button"),E=L(v),c=S(),p=g("span"),u=L("particles: "),H=L(A),j=S(),V=g("label"),W=L("Smooth steps"),Y=S(),O=g("input"),this.h()},l(F){e=D(F,"P",{});var k=y(e);i=B(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(m),o=C(F),r=D(F,"P",{});var ce=y(r);a=B(ce,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ce.forEach(m),s=C(F),n=D(F,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(n).forEach(m),l=C(F),f=D(F,"DIV",{});var Q=y(f);d=D(Q,"BUTTON",{});var $e=y(d);$=B($e,h),$e.forEach(m),_=C(Q),T=D(Q,"BUTTON",{});var b=y(T);E=B(b,v),b.forEach(m),c=C(Q),p=D(Q,"SPAN",{});var G=y(p);u=B(G,"particles: "),H=B(G,A),G.forEach(m),j=C(Q),V=D(Q,"LABEL",{for:!0});var oe=y(V);W=B(oe,"Smooth steps"),oe.forEach(m),Y=C(Q),O=D(Q,"INPUT",{type:!0,min:!0}),Q.forEach(m),this.h()},h(){w(n,"id","canvas"),Te(n,"background-color","black"),w(n,"width",t[3].width),w(n,"height",t[3].height),w(V,"for","steps"),w(O,"type","number"),w(O,"min",0)},m(F,k){x(F,e,k),R(e,i),x(F,o,k),x(F,r,k),R(r,a),x(F,s,k),x(F,n,k),x(F,l,k),x(F,f,k),R(f,d),R(d,$),R(f,_),R(f,T),R(T,E),R(f,c),R(f,p),R(p,u),R(p,H),R(f,j),R(f,V),R(V,W),R(f,Y),R(f,O),He(O,t[0]),K||(ne=[he(d,"click",t[5]),he(T,"click",t[6]),he(O,"input",t[7])],K=!0)},p(F,[k]){k&4&&h!==(h=F[2]?"Play":"Pause")&&je($,h),k&2&&v!==(v=F[1]?"Normal Speed":"Slow Mo")&&je(E,v),k&1&&nt(O.value)!==F[0]&&He(O,F[0])},i:z,o:z,d(F){F&&m(e),F&&m(o),F&&m(r),F&&m(s),F&&m(n),F&&m(l),F&&m(f),K=!1,$t(ne)}}}function Ln(t,e,i){const o={width:800,height:600},r={width:100,height:100};let a=1,s=!1,n=!0;function l(){const $=it();q($.canvas);const{ids:_,positions:T,colors:v}=Rn(r,{width:o.width,height:o.height});En($,{ids:_,colors:v,texDimensions:r});let E=Un($,{positions:T,texDimensions:r});function c(){if(q($.canvas),!n)for(let p=0;p<a;p++)E=yn({gl:$,texDimensions:r});return wn({gl:$,positionTex:E,textureDimension:r,ids:_}),n?requestAnimationFrame(c):s?setTimeout(()=>requestAnimationFrame(c),1e3):requestAnimationFrame(c)}requestAnimationFrame(c)}ie(()=>l());const f=()=>i(2,n=!n),d=()=>i(1,s=!s);function h(){a=nt(this.value),i(0,a)}return[a,s,n,o,r,f,d,h]}class Bn extends J{constructor(e){super(),Z(this,e,Ln,Pn,ee,{})}}function Sn(t){let e;return{c(){e=L("About")},l(i){e=B(i,"About")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function Cn(t){let e;return{c(){e=L("Test 1")},l(i){e=B(i,"Test 1")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function In(t){let e;return{c(){e=L("Test 2")},l(i){e=B(i,"Test 2")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function Mn(t){let e;return{c(){e=L("Test 3")},l(i){e=B(i,"Test 3")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function Nn(t){let e;return{c(){e=L("Test 4")},l(i){e=B(i,"Test 4")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function Xn(t){let e;return{c(){e=L("Test 5")},l(i){e=B(i,"Test 5")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function On(t){let e;return{c(){e=L("Test 6")},l(i){e=B(i,"Test 6")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function zn(t){let e;return{c(){e=L("Test 7")},l(i){e=B(i,"Test 7")},m(i,o){x(i,e,o)},d(i){i&&m(e)}}}function Vn(t){let e,i,o,r,a,s,n,l,f,d,h,$,_,T,v,E;return e=new re({props:{$$slots:{default:[Sn]},$$scope:{ctx:t}}}),o=new re({props:{$$slots:{default:[Cn]},$$scope:{ctx:t}}}),a=new re({props:{$$slots:{default:[In]},$$scope:{ctx:t}}}),n=new re({props:{$$slots:{default:[Mn]},$$scope:{ctx:t}}}),f=new re({props:{$$slots:{default:[Nn]},$$scope:{ctx:t}}}),h=new re({props:{$$slots:{default:[Xn]},$$scope:{ctx:t}}}),_=new re({props:{$$slots:{default:[On]},$$scope:{ctx:t}}}),v=new re({props:{$$slots:{default:[zn]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment),i=S(),I(o.$$.fragment),r=S(),I(a.$$.fragment),s=S(),I(n.$$.fragment),l=S(),I(f.$$.fragment),d=S(),I(h.$$.fragment),$=S(),I(_.$$.fragment),T=S(),I(v.$$.fragment)},l(c){M(e.$$.fragment,c),i=C(c),M(o.$$.fragment,c),r=C(c),M(a.$$.fragment,c),s=C(c),M(n.$$.fragment,c),l=C(c),M(f.$$.fragment,c),d=C(c),M(h.$$.fragment,c),$=C(c),M(_.$$.fragment,c),T=C(c),M(v.$$.fragment,c)},m(c,p){N(e,c,p),x(c,i,p),N(o,c,p),x(c,r,p),N(a,c,p),x(c,s,p),N(n,c,p),x(c,l,p),N(f,c,p),x(c,d,p),N(h,c,p),x(c,$,p),N(_,c,p),x(c,T,p),N(v,c,p),E=!0},p(c,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:c}),e.$set(u);const A={};p&1&&(A.$$scope={dirty:p,ctx:c}),o.$set(A);const H={};p&1&&(H.$$scope={dirty:p,ctx:c}),a.$set(H);const j={};p&1&&(j.$$scope={dirty:p,ctx:c}),n.$set(j);const V={};p&1&&(V.$$scope={dirty:p,ctx:c}),f.$set(V);const W={};p&1&&(W.$$scope={dirty:p,ctx:c}),h.$set(W);const Y={};p&1&&(Y.$$scope={dirty:p,ctx:c}),_.$set(Y);const O={};p&1&&(O.$$scope={dirty:p,ctx:c}),v.$set(O)},i(c){E||(U(e.$$.fragment,c),U(o.$$.fragment,c),U(a.$$.fragment,c),U(n.$$.fragment,c),U(f.$$.fragment,c),U(h.$$.fragment,c),U(_.$$.fragment,c),U(v.$$.fragment,c),E=!0)},o(c){P(e.$$.fragment,c),P(o.$$.fragment,c),P(a.$$.fragment,c),P(n.$$.fragment,c),P(f.$$.fragment,c),P(h.$$.fragment,c),P(_.$$.fragment,c),P(v.$$.fragment,c),E=!1},d(c){X(e,c),c&&m(i),X(o,c),c&&m(r),X(a,c),c&&m(s),X(n,c),c&&m(l),X(f,c),c&&m(d),X(h,c),c&&m($),X(_,c),c&&m(T),X(v,c)}}}function kn(t){let e,i,o,r,a,s,n,l;return{c(){e=g("p"),i=L("This page is an experiment to run simulation on the GPU."),o=S(),r=g("p"),a=L(`I am copying code from
                `),s=g("a"),n=L("this site"),l=L(`
                and adding basic typings for typescript.`),this.h()},l(f){e=D(f,"P",{});var d=y(e);i=B(d,"This page is an experiment to run simulation on the GPU."),d.forEach(m),o=C(f),r=D(f,"P",{});var h=y(r);a=B(h,`I am copying code from
                `),s=D(h,"A",{target:!0,href:!0});var $=y(s);n=B($,"this site"),$.forEach(m),l=B(h,`
                and adding basic typings for typescript.`),h.forEach(m),this.h()},h(){w(s,"target","none"),w(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(f,d){x(f,e,d),R(e,i),x(f,o,d),x(f,r,d),R(r,a),R(r,s),R(s,n),R(r,l)},p:z,d(f){f&&m(e),f&&m(o),f&&m(r)}}}function Wn(t){let e,i;return e=new Mt({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Yn(t){let e,i;return e=new zt({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Gn(t){let e,i;return e=new jt({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function qn(t){let e,i;return e=new en({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Hn(t){let e,i;return e=new cn({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function jn(t){let e,i;return e=new xn({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Kn(t){let e,i;return e=new Bn({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}function Qn(t){let e,i,o,r,a,s,n,l,f,d,h,$,_,T,v,E,c,p;return e=new Dt({props:{$$slots:{default:[Vn]},$$scope:{ctx:t}}}),o=new se({props:{$$slots:{default:[kn]},$$scope:{ctx:t}}}),a=new se({props:{$$slots:{default:[Wn]},$$scope:{ctx:t}}}),n=new se({props:{$$slots:{default:[Yn]},$$scope:{ctx:t}}}),f=new se({props:{$$slots:{default:[Gn]},$$scope:{ctx:t}}}),h=new se({props:{$$slots:{default:[qn]},$$scope:{ctx:t}}}),_=new se({props:{$$slots:{default:[Hn]},$$scope:{ctx:t}}}),v=new se({props:{$$slots:{default:[jn]},$$scope:{ctx:t}}}),c=new se({props:{$$slots:{default:[Kn]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment),i=S(),I(o.$$.fragment),r=S(),I(a.$$.fragment),s=S(),I(n.$$.fragment),l=S(),I(f.$$.fragment),d=S(),I(h.$$.fragment),$=S(),I(_.$$.fragment),T=S(),I(v.$$.fragment),E=S(),I(c.$$.fragment)},l(u){M(e.$$.fragment,u),i=C(u),M(o.$$.fragment,u),r=C(u),M(a.$$.fragment,u),s=C(u),M(n.$$.fragment,u),l=C(u),M(f.$$.fragment,u),d=C(u),M(h.$$.fragment,u),$=C(u),M(_.$$.fragment,u),T=C(u),M(v.$$.fragment,u),E=C(u),M(c.$$.fragment,u)},m(u,A){N(e,u,A),x(u,i,A),N(o,u,A),x(u,r,A),N(a,u,A),x(u,s,A),N(n,u,A),x(u,l,A),N(f,u,A),x(u,d,A),N(h,u,A),x(u,$,A),N(_,u,A),x(u,T,A),N(v,u,A),x(u,E,A),N(c,u,A),p=!0},p(u,A){const H={};A&1&&(H.$$scope={dirty:A,ctx:u}),e.$set(H);const j={};A&1&&(j.$$scope={dirty:A,ctx:u}),o.$set(j);const V={};A&1&&(V.$$scope={dirty:A,ctx:u}),a.$set(V);const W={};A&1&&(W.$$scope={dirty:A,ctx:u}),n.$set(W);const Y={};A&1&&(Y.$$scope={dirty:A,ctx:u}),f.$set(Y);const O={};A&1&&(O.$$scope={dirty:A,ctx:u}),h.$set(O);const K={};A&1&&(K.$$scope={dirty:A,ctx:u}),_.$set(K);const ne={};A&1&&(ne.$$scope={dirty:A,ctx:u}),v.$set(ne);const F={};A&1&&(F.$$scope={dirty:A,ctx:u}),c.$set(F)},i(u){p||(U(e.$$.fragment,u),U(o.$$.fragment,u),U(a.$$.fragment,u),U(n.$$.fragment,u),U(f.$$.fragment,u),U(h.$$.fragment,u),U(_.$$.fragment,u),U(v.$$.fragment,u),U(c.$$.fragment,u),p=!0)},o(u){P(e.$$.fragment,u),P(o.$$.fragment,u),P(a.$$.fragment,u),P(n.$$.fragment,u),P(f.$$.fragment,u),P(h.$$.fragment,u),P(_.$$.fragment,u),P(v.$$.fragment,u),P(c.$$.fragment,u),p=!1},d(u){X(e,u),u&&m(i),X(o,u),u&&m(r),X(a,u),u&&m(s),X(n,u),u&&m(l),X(f,u),u&&m(d),X(h,u),u&&m($),X(_,u),u&&m(T),X(v,u),u&&m(E),X(c,u)}}}function Jn(t){let e,i,o;return i=new Et({props:{$$slots:{default:[Qn]},$$scope:{ctx:t}}}),{c(){e=g("div"),I(i.$$.fragment)},l(r){e=D(r,"DIV",{});var a=y(e);M(i.$$.fragment,a),a.forEach(m)},m(r,a){x(r,e,a),N(i,e,null),o=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),i.$set(s)},i(r){o||(U(i.$$.fragment,r),o=!0)},o(r){P(i.$$.fragment,r),o=!1},d(r){r&&m(e),X(i)}}}class Zn extends J{constructor(e){super(),Z(this,e,null,Jn,ee,{})}}function eo(t){let e,i;return e=new Zn({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){N(e,o,r),i=!0},p:z,i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){X(e,o)}}}class ro extends J{constructor(e){super(),Z(this,e,null,eo,ee,{})}}export{ro as default};
