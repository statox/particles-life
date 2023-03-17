import{S as J,i as Z,s as ee,C as ye,k as g,l as D,m as P,h as m,n as w,b as v,K as he,E as Le,F as Be,G as Se,f as U,t as y,H as Re,R as ut,o as ie,j as lt,Q as mt,T as Ge,U as et,A as dt,V as pt,g as ht,d as _t,q as L,a as S,r as B,c as C,D as R,B as z,p as Te,O as qe,u as He,P as tt,M as Tt,w as I,x as M,y as X,z as O}from"../../../chunks/index-ff9e742a.js";import{w as Fe}from"../../../chunks/index-84a8d4d9.js";let $t=1;function nt(){return`svelte-tabs-${$t++}`}function xt(t){let e,i,o,r;const a=t[4].default,s=ye(a,t,t[3],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(n){e=D(n,"DIV",{class:!0});var u=P(e);s&&s.l(u),u.forEach(m),this.h()},h(){w(e,"class","svelte-tabs")},m(n,u){v(n,e,u),s&&s.m(e,null),i=!0,o||(r=he(e,"keydown",t[1]),o=!0)},p(n,[u]){s&&s.p&&(!i||u&8)&&Le(s,a,n,n[3],i?Se(a,n[3],u,null):Be(n[3]),null)},i(n){i||(U(s,n),i=!0)},o(n){y(s,n),i=!1},d(n){n&&m(e),s&&s.d(n),o=!1,r()}}}const We={};function vt(t,e,i){const o=t.indexOf(e);t.splice(o,1),i.update(r=>r===e?t[o]||t[t.length-1]:r)}function At(t,e,i){let o,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const n=[],u=[],f=[],d=Fe({}),h=Fe({}),$=Fe(null);Re(t,$,c=>i(5,o=c));const _=Fe(null);function T(c,p,l){c.push(p),l.update(A=>A||p),mt(()=>vt(c,p,l))}function x(c){const p=u.indexOf(c);$.set(c),_.set(f[p])}ut(We,{registerTab(c){T(u,c,$)},registerTabElement(c){n.push(c)},registerPanel(c){T(f,c,_)},selectTab:x,selectedTab:$,selectedPanel:_,controls:d,labeledBy:h}),ie(()=>{x(u[s])}),lt(()=>{for(let c=0;c<u.length;c++)d.update(p=>({...p,[u[c].id]:f[c].id})),h.update(p=>({...p,[f[c].id]:u[c].id}))});async function E(c){if(c.target.classList.contains("svelte-tabs__tab")){let p=u.indexOf(o);switch(c.key){case"ArrowRight":p+=1,p>u.length-1&&(p=0),x(u[p]),n[p].focus();break;case"ArrowLeft":p-=1,p<0&&(p=u.length-1),x(u[p]),n[p].focus()}}}return t.$$set=c=>{"initialSelectedIndex"in c&&i(2,s=c.initialSelectedIndex),"$$scope"in c&&i(3,a=c.$$scope)},[$,E,s,a,r]}class bt extends J{constructor(e){super(),Z(this,e,At,xt,ee,{initialSelectedIndex:2})}}function Et(t){let e,i,o,r,a,s;const n=t[9].default,u=ye(n,t,t[8],null);return{c(){e=g("li"),u&&u.c(),this.h()},l(f){e=D(f,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=P(e);u&&u.l(d),d.forEach(m),this.h()},h(){w(e,"role","tab"),w(e,"id",t[3].id),w(e,"aria-controls",i=t[2][t[3].id]),w(e,"aria-selected",t[1]),w(e,"tabindex",o=t[1]?0:-1),w(e,"class","svelte-tabs__tab svelte-1fbofsd"),Ge(e,"svelte-tabs__selected",t[1])},m(f,d){v(f,e,d),u&&u.m(e,null),t[10](e),r=!0,a||(s=he(e,"click",t[11]),a=!0)},p(f,[d]){u&&u.p&&(!r||d&256)&&Le(u,n,f,f[8],r?Se(n,f[8],d,null):Be(f[8]),null),(!r||d&4&&i!==(i=f[2][f[3].id]))&&w(e,"aria-controls",i),(!r||d&2)&&w(e,"aria-selected",f[1]),(!r||d&2&&o!==(o=f[1]?0:-1))&&w(e,"tabindex",o),(!r||d&2)&&Ge(e,"svelte-tabs__selected",f[1])},i(f){r||(U(u,f),r=!0)},o(f){y(u,f),r=!1},d(f){f&&m(e),u&&u.d(f),t[10](null),a=!1,s()}}}function wt(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e,n;const u={id:nt()},{registerTab:f,registerTabElement:d,selectTab:h,selectedTab:$,controls:_}=et(We);Re(t,$,c=>i(7,o=c)),Re(t,_,c=>i(2,r=c));let T;f(u),ie(async()=>{await dt(),d(n)});function x(c){pt[c?"unshift":"push"](()=>{n=c,i(0,n)})}const E=()=>h(u);return t.$$set=c=>{"$$scope"in c&&i(8,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,T=o===u)},[n,T,r,u,h,$,_,o,s,a,x,E]}class re extends J{constructor(e){super(),Z(this,e,wt,Et,ee,{})}}function Rt(t){let e,i;const o=t[1].default,r=ye(o,t,t[0],null);return{c(){e=g("ul"),r&&r.c(),this.h()},l(a){e=D(a,"UL",{role:!0,class:!0});var s=P(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"role","tablist"),w(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){v(a,e,s),r&&r.m(e,null),i=!0},p(a,[s]){r&&r.p&&(!i||s&1)&&Le(r,o,a,a[0],i?Se(o,a[0],s,null):Be(a[0]),null)},i(a){i||(U(r,a),i=!0)},o(a){y(r,a),i=!1},d(a){a&&m(e),r&&r.d(a)}}}function Ft(t,e,i){let{$$slots:o={},$$scope:r}=e;return t.$$set=a=>{"$$scope"in a&&i(0,r=a.$$scope)},[r,o]}class gt extends J{constructor(e){super(),Z(this,e,Ft,Rt,ee,{})}}function je(t){let e;const i=t[6].default,o=ye(i,t,t[5],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,a){o&&o.m(r,a),e=!0},p(r,a){o&&o.p&&(!e||a&32)&&Le(o,i,r,r[5],e?Se(i,r[5],a,null):Be(r[5]),null)},i(r){e||(U(o,r),e=!0)},o(r){y(o,r),e=!1},d(r){o&&o.d(r)}}}function Dt(t){let e,i,o,r=t[1]===t[2]&&je(t);return{c(){e=g("div"),r&&r.c(),this.h()},l(a){e=D(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=P(e);r&&r.l(s),s.forEach(m),this.h()},h(){w(e,"id",t[2].id),w(e,"aria-labelledby",i=t[0][t[2].id]),w(e,"class","svelte-tabs__tab-panel svelte-epfyet"),w(e,"role","tabpanel")},m(a,s){v(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&U(r,1)):(r=je(a),r.c(),U(r,1),r.m(e,null)):r&&(ht(),y(r,1,1,()=>{r=null}),_t()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&w(e,"aria-labelledby",i)},i(a){o||(U(r),o=!0)},o(a){y(r),o=!1},d(a){a&&m(e),r&&r.d()}}}function Ut(t,e,i){let o,r,{$$slots:a={},$$scope:s}=e;const n={id:nt()},{registerPanel:u,selectedPanel:f,labeledBy:d}=et(We);return Re(t,f,h=>i(1,r=h)),Re(t,d,h=>i(0,o=h)),u(n),t.$$set=h=>{"$$scope"in h&&i(5,s=h.$$scope)},[o,r,n,f,d,s,a]}class se extends J{constructor(e){super(),Z(this,e,Ut,Dt,ee,{})}}const Pt=["VERTEX_SHADER","FRAGMENT_SHADER"];function ot(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Ce(e),e}function Ce(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ae(t,e,i,o){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,o,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function _e(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function te(t,e,i,o,r){const a=[];for(let n=0;n<e.length;++n){const u=Pt[n]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,f=yt(t,e[n],u,r);if(!f)throw"Can not create shader";a.push(f)}const s=Lt(t,a,i,o,r);if(!s)throw"Can not create program";return s}function yt(t,e,i,o){const r=o||console.log,a=t.createShader(i);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+n+`
`+e.split(`
`).map((u,f)=>`${f+1}: ${u}`).join(`
`))),t.deleteShader(a),null}return a}function Lt(t,e,i,o,r){const a=r||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(u){t.attachShader(s,u)}),i&&i.forEach(function(u,f){t.bindAttribLocation(s,o?o[f]:f,u)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const u=t.getProgramInfoLog(s);return a("Error in program linking:"+u),t.deleteProgram(s),null}return s}function q(t,e){e=e||1;const i=t.clientWidth*e|0,o=t.clientHeight*e|0;return t.width!==i||t.height!==o?(t.width=i,t.height=o,!0):!1}function Bt(t){let e,i,o,r,a,s;return{c(){e=g("p"),i=L(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=S(),r=g("ul"),a=S(),s=g("canvas"),this.h()},l(n){e=D(n,"P",{});var u=P(e);i=B(u,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),u.forEach(m),o=C(n),r=D(n,"UL",{id:!0}),P(r).forEach(m),a=C(n),s=D(n,"CANVAS",{id:!0}),P(s).forEach(m),this.h()},h(){w(r,"id","result"),w(s,"id","canvas")},m(n,u){v(n,e,u),R(e,i),v(n,o,u),v(n,r,u),v(n,a,u),v(n,s,u)},p:z,i:z,o:z,d(n){n&&m(e),n&&m(o),n&&m(r),n&&m(a),n&&m(s)}}}function St(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Ct(t){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const n=s.getContext("webgl");if(!n)throw"Coulndt get context";const u=te(n,[i,o]);if(!u)throw"Could not get program";const f=n.getAttribLocation(u,"position"),d=n.getUniformLocation(u,"srcTex"),h=n.getUniformLocation(u,"srcDimensions"),$=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,$),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(f),n.vertexAttribPointer(f,2,n.FLOAT,!1,0,0);const _=3,T=3,x=n.createTexture();n.bindTexture(n.TEXTURE_2D,x),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,_,T,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.useProgram(u),n.uniform1i(d,0),n.uniform2f(h,_,T),n.drawArrays(n.TRIANGLES,0,6);const E=new Uint8Array(3*3*4);n.readPixels(0,0,3,3,n.RGBA,n.UNSIGNED_BYTE,E);for(let c=0;c<3*3;++c)St(E[c*4])}return ie(e),[]}class It extends J{constructor(e){super(),Z(this,e,Ct,Bt,ee,{})}}const Mt=Float32Array;function it(t,e,i,o,r,a){const s=new Mt(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(i+o)/(i-o),s[14]=(r+a)/(r-a),s[15]=1,s}function Xt(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(e).forEach(m),this.h()},h(){w(e,"id","canvas"),Te(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){v(i,e,o)},p:z,i:z,o:z,d(i){i&&m(e)}}}function Ot(t){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const n=s.getContext("webgl");if(!n)throw"gl undefined";if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=te(n,[i,o]),h=te(n,[r,a]);if(!d||!h)throw"Can not create programs";const $={position:n.getAttribLocation(d,"position"),positionTex:n.getUniformLocation(d,"positionTex"),velocityTex:n.getUniformLocation(d,"velocityTex"),texDimensions:n.getUniformLocation(d,"texDimensions"),canvasDimensions:n.getUniformLocation(d,"canvasDimensions"),deltaTime:n.getUniformLocation(d,"deltaTime")},_={id:n.getAttribLocation(h,"id"),positionTex:n.getUniformLocation(h,"positionTex"),texDimensions:n.getUniformLocation(h,"texDimensions"),matrix:n.getUniformLocation(h,"matrix")},T=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,T),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW);const x=300,E=20,c=x*E,p=new Array(c).fill(0).map((b,G)=>G),l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,new Float32Array(p),n.STATIC_DRAW),q(n.canvas);const A=(b,G)=>(G===void 0&&(G=b,b=0),Math.random()*(G-b)+b),H=new Float32Array(p.map(b=>[A(s.width),A(s.height),0,0]).flat()),j=new Float32Array(p.map(b=>[A(-300,300),A(-300,300),0,0]).flat());function V(b,G,oe,ft){const Ye=b.createTexture();return b.bindTexture(b.TEXTURE_2D,Ye),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,oe,ft,0,b.RGBA,b.FLOAT,G),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),Ye}const W=V(n,j,x,E),Y=V(n,H,x,E),N=V(n,null,x,E);if(!Y||!N)throw"Can not create position textures";function K(b,G){const oe=b.createFramebuffer();return b.bindFramebuffer(b.FRAMEBUFFER,oe),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,G,0),oe}const ne=K(n,Y),F=K(n,N);let k={fb:ne,tex:Y},ce={fb:F,tex:N},Q=0;function $e(b){if(!n)return;b*=.001;const G=b-Q;Q=b,q(n.canvas),n.bindFramebuffer(n.FRAMEBUFFER,ce.fb),n.viewport(0,0,x,E),n.bindBuffer(n.ARRAY_BUFFER,T),n.enableVertexAttribArray($.position),n.vertexAttribPointer($.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,k.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,W),n.useProgram(d),n.uniform1i($.positionTex,0),n.uniform1i($.velocityTex,1),n.uniform2f($.texDimensions,x,E),n.uniform2f($.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f($.deltaTime,G),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,l),n.enableVertexAttribArray(_.id),n.vertexAttribPointer(_.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,ce.tex),n.useProgram(h),n.uniform2f(_.texDimensions,x,x),n.uniform1i(_.positionTex,0),n.uniformMatrix4fv(_.matrix,!1,it(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,c);{const oe=k;k=ce,ce=oe}requestAnimationFrame($e)}requestAnimationFrame($e)}return ie(()=>e()),[]}class Nt extends J{constructor(e){super(),Z(this,e,Ot,Xt,ee,{})}}const ge=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function zt(t,e,i,o){const r=t*e,a=new Array(r).fill(0).map((u,f)=>f),s=new Float32Array(a.map(u=>[ge(i),ge(o),0,0]).flat()),n=new Float32Array(a.map(u=>[ge(-300,300),ge(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:n}}const Vt=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,kt=`precision highp float;

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

`,Wt=`  attribute float id;
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

`,Yt=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Gt(t){let e;return{c(){e=g("canvas"),this.h()},l(i){e=D(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(e).forEach(m),this.h()},h(){w(e,"id","canvas"),Te(e,"background-color","black"),w(e,"width","800"),w(e,"height","600")},m(i,o){v(i,e,o)},p:z,i:z,o:z,d(i){i&&m(e)}}}function qt(t){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";Ce(a);const s=te(a,[Vt,kt]),n=te(a,[Wt,Yt]),u={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},f={id:a.getAttribLocation(n,"id"),positionTex:a.getUniformLocation(n,"positionTex"),texDimensions:a.getUniformLocation(n,"texDimensions"),matrix:a.getUniformLocation(n,"matrix")},d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const h=300,$=20,{numParticles:_,ids:T,positions:x,velocities:E}=zt(h,$,r.width,r.height),c=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array(T),a.STATIC_DRAW),q(a.canvas);const p=ae(a,E,h,$),l=ae(a,x,h,$),A=ae(a,null,h,$),H=_e(a,l),j=_e(a,A);let V={fb:H,tex:l},W={fb:j,tex:A},Y=0;function N(K){if(!a||!d||!c)throw"Undefined params to render";K*=.001;const ne=K-Y;Y=K,q(a.canvas),o(a,W,h,$,d,u,V,p,s,ne),i(a,h,c,f,W,n,_);{const F=V;V=W,W=F}requestAnimationFrame(N)}requestAnimationFrame(N)}const i=(r,a,s,n,u,f,d)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(n.id),r.vertexAttribPointer(n.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,u.tex),r.useProgram(f),r.uniform2f(n.texDimensions,a,a),r.uniform1i(n.positionTex,0),r.uniformMatrix4fv(n.matrix,!1,it(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,d)},o=(r,a,s,n,u,f,d,h,$,_)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,n),r.bindBuffer(r.ARRAY_BUFFER,u),r.enableVertexAttribArray(f.position),r.vertexAttribPointer(f.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,d.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,h),r.useProgram($),r.uniform1i(f.positionTex,0),r.uniform1i(f.velocityTex,1),r.uniform2f(f.texDimensions,s,n),r.uniform2f(f.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(f.deltaTime,_),r.drawArrays(r.TRIANGLES,0,6)};return ie(()=>e()),[]}class Ht extends J{constructor(e){super(),Z(this,e,qt,Gt,ee,{})}}const jt=`attribute vec2 a_position;

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
`,Kt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Qt(t){let e,i,o,r,a,s,n,u,f,d,h,$;return{c(){e=g("p"),i=L(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=g("code"),r=L("requestAnimationFrame"),a=L(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=S(),n=g("canvas"),u=S(),f=g("button"),d=L("Add position"),this.h()},l(_){e=D(_,"P",{});var T=P(e);i=B(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=D(T,"CODE",{});var x=P(o);r=B(x,"requestAnimationFrame"),x.forEach(m),a=B(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(m),s=C(_),n=D(_,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(n).forEach(m),u=C(_),f=D(_,"BUTTON",{});var E=P(f);d=B(E,"Add position"),E.forEach(m),this.h()},h(){w(n,"id","canvas"),Te(n,"background-color","black"),w(n,"width","800"),w(n,"height","600")},m(_,T){v(_,e,T),R(e,i),R(e,o),R(o,r),R(e,a),v(_,s,T),v(_,n,T),v(_,u,T),v(_,f,T),R(f,d),h||($=he(f,"click",t[1]),h=!0)},p:z,i:z,o:z,d(_){_&&m(e),_&&m(s),_&&m(n),_&&m(u),_&&m(f),h=!1,$()}}}function Jt(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Ce(s);const n=te(s,[jt,Kt]);q(s.canvas);const u=s.getAttribLocation(n,"a_position"),f=s.getUniformLocation(n,"u_resolution"),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function h(){if(!s)throw"Undefined params to render";for(let l=0;l<=e.length-2;l+=2)e[l]=(e[l]+Math.random()*2-1)%s.canvas.width,e[l+1]=(e[l+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),q(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(n),s.uniform2f(f,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(u),s.bindBuffer(s.ARRAY_BUFFER,d);const $=2,_=s.FLOAT,T=!1,x=0,E=0;s.vertexAttribPointer(u,$,_,T,x,E);var c=s.POINTS,p=e.length/2;s.drawArrays(c,E,p),requestAnimationFrame(h)}requestAnimationFrame(h)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return ie(()=>i()),[o,()=>o()]}class Zt extends J{constructor(e){super(),Z(this,e,Jt,Qt,ee,{})}}const en=`attribute float id;
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
`,tn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let xe,ve;const nn=t=>{ve=te(t,[en,tn]),xe={idAttributeLocation:t.getAttribLocation(ve,"id"),texDimensionsUniformLocation:t.getUniformLocation(ve,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ve,"u_resolution")}},on=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;q(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(ve),e.uniform2f(xe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(xe.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(xe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,n=e.FLOAT,u=!1,f=0,d=0;e.vertexAttribPointer(xe.idAttributeLocation,s,n,u,f,d);const h=e.POINTS,$=r.length;e.drawArrays(h,d,$)};function rn(t){let e,i,o,r,a,s,n;return{c(){e=g("p"),i=L("Create an array of render-size positions. Store this array in a texture. In each "),o=g("code"),r=L("requestAnimationFrame"),a=L(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=S(),n=g("canvas"),this.h()},l(u){e=D(u,"P",{});var f=P(e);i=B(f,"Create an array of render-size positions. Store this array in a texture. In each "),o=D(f,"CODE",{});var d=P(o);r=B(d,"requestAnimationFrame"),d.forEach(m),a=B(f,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),f.forEach(m),s=C(u),n=D(u,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(n).forEach(m),this.h()},h(){w(n,"id","canvas"),Te(n,"background-color","black"),w(n,"width",rt),w(n,"height",st)},m(u,f){v(u,e,f),R(e,i),R(e,o),R(o,r),R(e,a),v(u,s,f),v(u,n,f)},p:z,i:z,o:z,d(u){u&&m(e),u&&m(s),u&&m(n)}}}const rt=800,st=600;function sn(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const o=i.getContext("webgl");if(!o)throw"gl undefined";Ce(o),q(o.canvas),nn(o);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(n=>[Math.random()*rt,Math.random()*st,0,0]).flat();function s(){if(!o)throw"Undefined params to render";for(let u=0;u<=a.length-2;u+=2)a[u]=(a[u]+Math.random()*2-1)%o.canvas.width,a[u+1]=(a[u+1]+Math.random()*0+1)%o.canvas.height;const n=ae(o,new Float32Array(a),3,3);on({gl:o,positionTex:n,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return ie(()=>e()),[]}let an=class extends J{constructor(e){super(),Z(this,e,sn,rn,ee,{})}};const cn=`attribute float id;
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
`,fn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Ae,be,Oe;const un=(t,e)=>{be=te(t,[cn,fn]),Ae={idAttributeLocation:t.getAttribLocation(be,"id"),texDimensionsUniformLocation:t.getUniformLocation(be,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(be,"u_resolution")},Oe=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Oe),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},ln=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t;q(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Oe),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(be),e.uniform2f(Ae.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ae.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(Ae.idAttributeLocation);const a=1,s=e.FLOAT,n=!1,u=0,f=0;e.vertexAttribPointer(Ae.idAttributeLocation,a,s,n,u,f),e.drawArrays(e.POINTS,f,r.length)};function mn(t,e){const i=new Array(t).fill(0).map((a,s)=>s),o=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:o,texDimensions:r}}const dn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,pn=`precision highp float;

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

`;let ue,le,Ne,Ie,Me,Ke,Qe,Ee,Ue;const hn=(t,e)=>{const{positions:i,texDimensions:o}=e;le=te(t,[dn,pn]),ue={positionAttributeLocation:t.getAttribLocation(le,"position"),positionTexLocation:t.getUniformLocation(le,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(le,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(le,"u_resolution")},Ne=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ne),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ie=ae(t,new Float32Array(i),o.width,o.height),Me=ae(t,null,o.width,o.height),Ke=_e(t,Ie),Qe=_e(t,Me),Ee={fb:Ke,tex:Ie},Ue={fb:Qe,tex:Me}},_n=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,Ue.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Ne),e.enableVertexAttribArray(ue.positionAttributeLocation),e.vertexAttribPointer(ue.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ee.tex),e.useProgram(le),e.uniform1i(ue.positionTexLocation,0),e.uniform2f(ue.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ue.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=Ee;Ee=Ue,Ue=o}return Ee.tex};function Tn(t){let e,i,o,r,a,s,n,u,f,d,h,$,_;return{c(){e=g("p"),i=L("Create an array of render-size positions. Store this array in a texture."),o=S(),r=g("p"),a=L("Create 2 textures which will be used to update the positions with a shader. In each "),s=g("code"),n=L("requestAnimationFrame"),u=L(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),f=S(),d=g("p"),h=L("Finally switch the two textures to read and write in the updated textures"),$=S(),_=g("canvas"),this.h()},l(T){e=D(T,"P",{});var x=P(e);i=B(x,"Create an array of render-size positions. Store this array in a texture."),x.forEach(m),o=C(T),r=D(T,"P",{});var E=P(r);a=B(E,"Create 2 textures which will be used to update the positions with a shader. In each "),s=D(E,"CODE",{});var c=P(s);n=B(c,"requestAnimationFrame"),c.forEach(m),u=B(E,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),E.forEach(m),f=C(T),d=D(T,"P",{});var p=P(d);h=B(p,"Finally switch the two textures to read and write in the updated textures"),p.forEach(m),$=C(T),_=D(T,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(_).forEach(m),this.h()},h(){w(_,"id","canvas"),Te(_,"background-color","black"),w(_,"width",at),w(_,"height",ct)},m(T,x){v(T,e,x),R(e,i),v(T,o,x),v(T,r,x),R(r,a),R(r,s),R(s,n),R(r,u),v(T,f,x),v(T,d,x),R(d,h),v(T,$,x),v(T,_,x)},p:z,i:z,o:z,d(T){T&&m(e),T&&m(o),T&&m(r),T&&m(f),T&&m(d),T&&m($),T&&m(_)}}}const at=800,ct=600;function $n(t){function e(){const i=ot();q(i.canvas);const{ids:o,positions:r,texDimensions:a}=mn(100,{width:at,height:ct});un(i,o),hn(i,{positions:r,texDimensions:a});function s(){q(i.canvas);const n=_n({gl:i,texDimensions:a});ln({gl:i,positionTex:n,textureDimension:a,ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return ie(()=>e()),[]}let xn=class extends J{constructor(e){super(),Z(this,e,$n,Tn,ee,{})}};const vn=`attribute float id;
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
`,An=`precision mediump float;
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
`;let fe,me,ze,Ve;const bn=(t,e)=>{const{ids:i,colors:o}=e;me=te(t,[vn,An]),fe={idAttributeLocation:t.getAttribLocation(me,"id"),colorAttributeLocation:t.getAttribLocation(me,"color"),texDimensionsUniformLocation:t.getUniformLocation(me,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(me,"u_resolution")},ze=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ze),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Ve=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ve),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW)},En=t=>{const{gl:e,positionTex:i,textureDimension:o,ids:r}=t,a=1,s=e.FLOAT,n=!1,u=0,f=0;q(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,ze),e.vertexAttribPointer(fe.idAttributeLocation,a,s,n,u,f),e.enableVertexAttribArray(fe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Ve),e.vertexAttribPointer(fe.colorAttributeLocation,a,s,n,u,f),e.enableVertexAttribArray(fe.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(me),e.uniform2f(fe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(fe.texDimensionsUniformLocation,o.width,o.height),e.drawArrays(e.POINTS,f,r.length)};function wn(t,e){const i=t.width*t.height,o=new Array(i).fill(0).map((s,n)=>n),r=new Array(i).fill(0).map(s=>Math.floor(Math.random()*4)),a=o.map(s=>{{const{x:u,y:f}=Rn(e,20);return[u,f,0,0]}}).flat();return{ids:o,positions:a,texDimensions:t,colors:r}}const Rn=(t,e)=>{const i=e*Math.random(),o=Math.random()*2*Math.PI,r=i*Math.cos(o)+t.width/2,a=i*Math.sin(o)+t.height/2;return{x:r,y:a}},Fn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,gn=`precision highp float;

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

`;let de,pe,ke,De,Xe,Je,Ze,we,Pe;const Dn=(t,e)=>{const{positions:i,texDimensions:o}=e;return pe=te(t,[Fn,gn]),de={positionAttributeLocation:t.getAttribLocation(pe,"position"),positionTexLocation:t.getUniformLocation(pe,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(pe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(pe,"u_resolution")},ke=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ke),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),De=ae(t,new Float32Array(i),o.width,o.height),Xe=ae(t,null,o.width,o.height),Je=_e(t,De),Ze=_e(t,Xe),we={fb:Je,tex:De},Pe={fb:Ze,tex:Xe},De},Un=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,Pe.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,ke),e.enableVertexAttribArray(de.positionAttributeLocation),e.vertexAttribPointer(de.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,we.tex),e.useProgram(pe),e.uniform1i(de.positionTexLocation,0),e.uniform2f(de.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(de.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const o=we;we=Pe,Pe=o}return we.tex};function Pn(t){let e,i,o,r,a,s,n,u,f,d,h=t[2]?"Play":"Pause",$,_,T,x=t[1]?"Normal Speed":"Slow Mo",E,c,p,l,A=t[4].width*t[4].height+"",H,j,V,W,Y,N,K,ne;return{c(){e=g("p"),i=L("Same principle with a shader to update positions and a shader to draw particles."),o=S(),r=g("p"),a=L(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=S(),n=g("canvas"),u=S(),f=g("div"),d=g("button"),$=L(h),_=S(),T=g("button"),E=L(x),c=S(),p=g("span"),l=L("particles: "),H=L(A),j=S(),V=g("label"),W=L("Smooth steps"),Y=S(),N=g("input"),this.h()},l(F){e=D(F,"P",{});var k=P(e);i=B(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(m),o=C(F),r=D(F,"P",{});var ce=P(r);a=B(ce,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ce.forEach(m),s=C(F),n=D(F,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(n).forEach(m),u=C(F),f=D(F,"DIV",{});var Q=P(f);d=D(Q,"BUTTON",{});var $e=P(d);$=B($e,h),$e.forEach(m),_=C(Q),T=D(Q,"BUTTON",{});var b=P(T);E=B(b,x),b.forEach(m),c=C(Q),p=D(Q,"SPAN",{});var G=P(p);l=B(G,"particles: "),H=B(G,A),G.forEach(m),j=C(Q),V=D(Q,"LABEL",{for:!0});var oe=P(V);W=B(oe,"Smooth steps"),oe.forEach(m),Y=C(Q),N=D(Q,"INPUT",{type:!0,min:!0}),Q.forEach(m),this.h()},h(){w(n,"id","canvas"),Te(n,"background-color","black"),w(n,"width",t[3].width),w(n,"height",t[3].height),w(V,"for","steps"),w(N,"type","number"),w(N,"min",0)},m(F,k){v(F,e,k),R(e,i),v(F,o,k),v(F,r,k),R(r,a),v(F,s,k),v(F,n,k),v(F,u,k),v(F,f,k),R(f,d),R(d,$),R(f,_),R(f,T),R(T,E),R(f,c),R(f,p),R(p,l),R(p,H),R(f,j),R(f,V),R(V,W),R(f,Y),R(f,N),qe(N,t[0]),K||(ne=[he(d,"click",t[5]),he(T,"click",t[6]),he(N,"input",t[7])],K=!0)},p(F,[k]){k&4&&h!==(h=F[2]?"Play":"Pause")&&He($,h),k&2&&x!==(x=F[1]?"Normal Speed":"Slow Mo")&&He(E,x),k&1&&tt(N.value)!==F[0]&&qe(N,F[0])},i:z,o:z,d(F){F&&m(e),F&&m(o),F&&m(r),F&&m(s),F&&m(n),F&&m(u),F&&m(f),K=!1,Tt(ne)}}}function yn(t,e,i){const o={width:800,height:600},r={width:100,height:100};let a=1,s=!1,n=!0;function u(){const $=ot();q($.canvas);const{ids:_,positions:T,colors:x}=wn(r,{width:o.width,height:o.height});bn($,{ids:_,colors:x,texDimensions:r});let E=Dn($,{positions:T,texDimensions:r});function c(){if(q($.canvas),!n)for(let p=0;p<a;p++)E=Un({gl:$,texDimensions:r});return En({gl:$,positionTex:E,textureDimension:r,ids:_}),n?requestAnimationFrame(c):s?setTimeout(()=>requestAnimationFrame(c),1e3):requestAnimationFrame(c)}requestAnimationFrame(c)}ie(()=>u());const f=()=>i(2,n=!n),d=()=>i(1,s=!s);function h(){a=tt(this.value),i(0,a)}return[a,s,n,o,r,f,d,h]}class Ln extends J{constructor(e){super(),Z(this,e,yn,Pn,ee,{})}}function Bn(t){let e;return{c(){e=L("About")},l(i){e=B(i,"About")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Sn(t){let e;return{c(){e=L("Simple counter")},l(i){e=B(i,"Simple counter")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Cn(t){let e;return{c(){e=L("Particles")},l(i){e=B(i,"Particles")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function In(t){let e;return{c(){e=L("Particles 2")},l(i){e=B(i,"Particles 2")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Mn(t){let e;return{c(){e=L("Positions Buffer")},l(i){e=B(i,"Positions Buffer")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Xn(t){let e;return{c(){e=L("Positions Texture")},l(i){e=B(i,"Positions Texture")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function On(t){let e;return{c(){e=L("Positions Texture Draw & Update")},l(i){e=B(i,"Positions Texture Draw & Update")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function Nn(t){let e;return{c(){e=L("Positions Texture Advanced shader")},l(i){e=B(i,"Positions Texture Advanced shader")},m(i,o){v(i,e,o)},d(i){i&&m(e)}}}function zn(t){let e,i,o,r,a,s,n,u,f,d,h,$,_,T,x,E;return e=new re({props:{$$slots:{default:[Bn]},$$scope:{ctx:t}}}),o=new re({props:{$$slots:{default:[Sn]},$$scope:{ctx:t}}}),a=new re({props:{$$slots:{default:[Cn]},$$scope:{ctx:t}}}),n=new re({props:{$$slots:{default:[In]},$$scope:{ctx:t}}}),f=new re({props:{$$slots:{default:[Mn]},$$scope:{ctx:t}}}),h=new re({props:{$$slots:{default:[Xn]},$$scope:{ctx:t}}}),_=new re({props:{$$slots:{default:[On]},$$scope:{ctx:t}}}),x=new re({props:{$$slots:{default:[Nn]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment),i=S(),I(o.$$.fragment),r=S(),I(a.$$.fragment),s=S(),I(n.$$.fragment),u=S(),I(f.$$.fragment),d=S(),I(h.$$.fragment),$=S(),I(_.$$.fragment),T=S(),I(x.$$.fragment)},l(c){M(e.$$.fragment,c),i=C(c),M(o.$$.fragment,c),r=C(c),M(a.$$.fragment,c),s=C(c),M(n.$$.fragment,c),u=C(c),M(f.$$.fragment,c),d=C(c),M(h.$$.fragment,c),$=C(c),M(_.$$.fragment,c),T=C(c),M(x.$$.fragment,c)},m(c,p){X(e,c,p),v(c,i,p),X(o,c,p),v(c,r,p),X(a,c,p),v(c,s,p),X(n,c,p),v(c,u,p),X(f,c,p),v(c,d,p),X(h,c,p),v(c,$,p),X(_,c,p),v(c,T,p),X(x,c,p),E=!0},p(c,p){const l={};p&1&&(l.$$scope={dirty:p,ctx:c}),e.$set(l);const A={};p&1&&(A.$$scope={dirty:p,ctx:c}),o.$set(A);const H={};p&1&&(H.$$scope={dirty:p,ctx:c}),a.$set(H);const j={};p&1&&(j.$$scope={dirty:p,ctx:c}),n.$set(j);const V={};p&1&&(V.$$scope={dirty:p,ctx:c}),f.$set(V);const W={};p&1&&(W.$$scope={dirty:p,ctx:c}),h.$set(W);const Y={};p&1&&(Y.$$scope={dirty:p,ctx:c}),_.$set(Y);const N={};p&1&&(N.$$scope={dirty:p,ctx:c}),x.$set(N)},i(c){E||(U(e.$$.fragment,c),U(o.$$.fragment,c),U(a.$$.fragment,c),U(n.$$.fragment,c),U(f.$$.fragment,c),U(h.$$.fragment,c),U(_.$$.fragment,c),U(x.$$.fragment,c),E=!0)},o(c){y(e.$$.fragment,c),y(o.$$.fragment,c),y(a.$$.fragment,c),y(n.$$.fragment,c),y(f.$$.fragment,c),y(h.$$.fragment,c),y(_.$$.fragment,c),y(x.$$.fragment,c),E=!1},d(c){O(e,c),c&&m(i),O(o,c),c&&m(r),O(a,c),c&&m(s),O(n,c),c&&m(u),O(f,c),c&&m(d),O(h,c),c&&m($),O(_,c),c&&m(T),O(x,c)}}}function Vn(t){let e,i,o,r,a,s,n,u;return{c(){e=g("p"),i=L("This page is an experiment to run simulation on the GPU."),o=S(),r=g("p"),a=L(`I am copying code from
                `),s=g("a"),n=L("this site"),u=L(`
                and adding basic typings for typescript.`),this.h()},l(f){e=D(f,"P",{});var d=P(e);i=B(d,"This page is an experiment to run simulation on the GPU."),d.forEach(m),o=C(f),r=D(f,"P",{});var h=P(r);a=B(h,`I am copying code from
                `),s=D(h,"A",{target:!0,href:!0});var $=P(s);n=B($,"this site"),$.forEach(m),u=B(h,`
                and adding basic typings for typescript.`),h.forEach(m),this.h()},h(){w(s,"target","none"),w(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(f,d){v(f,e,d),R(e,i),v(f,o,d),v(f,r,d),R(r,a),R(r,s),R(s,n),R(r,u)},p:z,d(f){f&&m(e),f&&m(o),f&&m(r)}}}function kn(t){let e,i;return e=new It({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}function Wn(t){let e,i;return e=new Nt({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}function Yn(t){let e,i;return e=new Ht({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}function Gn(t){let e,i;return e=new Zt({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}function qn(t){let e,i;return e=new an({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}function Hn(t){let e,i;return e=new xn({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}function jn(t){let e,i;return e=new Ln({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}function Kn(t){let e,i,o,r,a,s,n,u,f,d,h,$,_,T,x,E,c,p;return e=new gt({props:{$$slots:{default:[zn]},$$scope:{ctx:t}}}),o=new se({props:{$$slots:{default:[Vn]},$$scope:{ctx:t}}}),a=new se({props:{$$slots:{default:[kn]},$$scope:{ctx:t}}}),n=new se({props:{$$slots:{default:[Wn]},$$scope:{ctx:t}}}),f=new se({props:{$$slots:{default:[Yn]},$$scope:{ctx:t}}}),h=new se({props:{$$slots:{default:[Gn]},$$scope:{ctx:t}}}),_=new se({props:{$$slots:{default:[qn]},$$scope:{ctx:t}}}),x=new se({props:{$$slots:{default:[Hn]},$$scope:{ctx:t}}}),c=new se({props:{$$slots:{default:[jn]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment),i=S(),I(o.$$.fragment),r=S(),I(a.$$.fragment),s=S(),I(n.$$.fragment),u=S(),I(f.$$.fragment),d=S(),I(h.$$.fragment),$=S(),I(_.$$.fragment),T=S(),I(x.$$.fragment),E=S(),I(c.$$.fragment)},l(l){M(e.$$.fragment,l),i=C(l),M(o.$$.fragment,l),r=C(l),M(a.$$.fragment,l),s=C(l),M(n.$$.fragment,l),u=C(l),M(f.$$.fragment,l),d=C(l),M(h.$$.fragment,l),$=C(l),M(_.$$.fragment,l),T=C(l),M(x.$$.fragment,l),E=C(l),M(c.$$.fragment,l)},m(l,A){X(e,l,A),v(l,i,A),X(o,l,A),v(l,r,A),X(a,l,A),v(l,s,A),X(n,l,A),v(l,u,A),X(f,l,A),v(l,d,A),X(h,l,A),v(l,$,A),X(_,l,A),v(l,T,A),X(x,l,A),v(l,E,A),X(c,l,A),p=!0},p(l,A){const H={};A&1&&(H.$$scope={dirty:A,ctx:l}),e.$set(H);const j={};A&1&&(j.$$scope={dirty:A,ctx:l}),o.$set(j);const V={};A&1&&(V.$$scope={dirty:A,ctx:l}),a.$set(V);const W={};A&1&&(W.$$scope={dirty:A,ctx:l}),n.$set(W);const Y={};A&1&&(Y.$$scope={dirty:A,ctx:l}),f.$set(Y);const N={};A&1&&(N.$$scope={dirty:A,ctx:l}),h.$set(N);const K={};A&1&&(K.$$scope={dirty:A,ctx:l}),_.$set(K);const ne={};A&1&&(ne.$$scope={dirty:A,ctx:l}),x.$set(ne);const F={};A&1&&(F.$$scope={dirty:A,ctx:l}),c.$set(F)},i(l){p||(U(e.$$.fragment,l),U(o.$$.fragment,l),U(a.$$.fragment,l),U(n.$$.fragment,l),U(f.$$.fragment,l),U(h.$$.fragment,l),U(_.$$.fragment,l),U(x.$$.fragment,l),U(c.$$.fragment,l),p=!0)},o(l){y(e.$$.fragment,l),y(o.$$.fragment,l),y(a.$$.fragment,l),y(n.$$.fragment,l),y(f.$$.fragment,l),y(h.$$.fragment,l),y(_.$$.fragment,l),y(x.$$.fragment,l),y(c.$$.fragment,l),p=!1},d(l){O(e,l),l&&m(i),O(o,l),l&&m(r),O(a,l),l&&m(s),O(n,l),l&&m(u),O(f,l),l&&m(d),O(h,l),l&&m($),O(_,l),l&&m(T),O(x,l),l&&m(E),O(c,l)}}}function Qn(t){let e,i,o;return i=new bt({props:{$$slots:{default:[Kn]},$$scope:{ctx:t}}}),{c(){e=g("div"),I(i.$$.fragment)},l(r){e=D(r,"DIV",{});var a=P(e);M(i.$$.fragment,a),a.forEach(m)},m(r,a){v(r,e,a),X(i,e,null),o=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),i.$set(s)},i(r){o||(U(i.$$.fragment,r),o=!0)},o(r){y(i.$$.fragment,r),o=!1},d(r){r&&m(e),O(i)}}}class Jn extends J{constructor(e){super(),Z(this,e,null,Qn,ee,{})}}function Zn(t){let e,i;return e=new Jn({}),{c(){I(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,r){X(e,o,r),i=!0},p:z,i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){y(e.$$.fragment,o),i=!1},d(o){O(e,o)}}}class io extends J{constructor(e){super(),Z(this,e,null,Zn,ee,{})}}export{io as default};
