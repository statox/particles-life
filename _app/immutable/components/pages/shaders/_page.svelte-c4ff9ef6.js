import{S as G,i as k,s as V,C as le,k as y,l as P,m as B,h as p,n as A,b as x,K as $e,E as ue,F as me,G as de,f as b,t as R,H as re,R as Se,o as H,j as Le,Q as Ce,T as Re,U as Fe,A as Ie,V as Xe,g as Me,d as Ne,q as S,a as C,r as L,c as I,D as N,B as X,p as pe,w,x as F,y as D,z as U}from"../../../chunks/index-ff9e742a.js";import{w as ae}from"../../../chunks/index-84a8d4d9.js";let Oe=1;function De(){return`svelte-tabs-${Oe++}`}function Ge(r){let e,i,o,n;const a=r[4].default,s=le(a,r,r[3],null);return{c(){e=y("div"),s&&s.c(),this.h()},l(t){e=P(t,"DIV",{class:!0});var c=B(e);s&&s.l(c),c.forEach(p),this.h()},h(){A(e,"class","svelte-tabs")},m(t,c){x(t,e,c),s&&s.m(e,null),i=!0,o||(n=$e(e,"keydown",r[1]),o=!0)},p(t,[c]){s&&s.p&&(!i||c&8)&&ue(s,a,t,t[3],i?de(a,t[3],c,null):me(t[3]),null)},i(t){i||(b(s,t),i=!0)},o(t){R(s,t),i=!1},d(t){t&&p(e),s&&s.d(t),o=!1,n()}}}const ve={};function ke(r,e,i){const o=r.indexOf(e);r.splice(o,1),i.update(n=>n===e?r[o]||r[r.length-1]:n)}function Ve(r,e,i){let o,{$$slots:n={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const t=[],c=[],f=[],m=ae({}),d=ae({}),$=ae(null);re(r,$,_=>i(5,o=_));const l=ae(null);function T(_,E,g){_.push(E),g.update(M=>M||E),Ce(()=>ke(_,E,g))}function u(_){const E=c.indexOf(_);$.set(_),l.set(f[E])}Se(ve,{registerTab(_){T(c,_,$)},registerTabElement(_){t.push(_)},registerPanel(_){T(f,_,l)},selectTab:u,selectedTab:$,selectedPanel:l,controls:m,labeledBy:d}),H(()=>{u(c[s])}),Le(()=>{for(let _=0;_<c.length;_++)m.update(E=>({...E,[c[_].id]:f[_].id})),d.update(E=>({...E,[f[_].id]:c[_].id}))});async function h(_){if(_.target.classList.contains("svelte-tabs__tab")){let E=c.indexOf(o);switch(_.key){case"ArrowRight":E+=1,E>c.length-1&&(E=0),u(c[E]),t[E].focus();break;case"ArrowLeft":E-=1,E<0&&(E=c.length-1),u(c[E]),t[E].focus()}}}return r.$$set=_=>{"initialSelectedIndex"in _&&i(2,s=_.initialSelectedIndex),"$$scope"in _&&i(3,a=_.$$scope)},[$,h,s,a,n]}class We extends G{constructor(e){super(),k(this,e,Ve,Ge,V,{initialSelectedIndex:2})}}function ze(r){let e,i,o,n,a,s;const t=r[9].default,c=le(t,r,r[8],null);return{c(){e=y("li"),c&&c.c(),this.h()},l(f){e=P(f,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=B(e);c&&c.l(m),m.forEach(p),this.h()},h(){A(e,"role","tab"),A(e,"id",r[3].id),A(e,"aria-controls",i=r[2][r[3].id]),A(e,"aria-selected",r[1]),A(e,"tabindex",o=r[1]?0:-1),A(e,"class","svelte-tabs__tab svelte-1fbofsd"),Re(e,"svelte-tabs__selected",r[1])},m(f,m){x(f,e,m),c&&c.m(e,null),r[10](e),n=!0,a||(s=$e(e,"click",r[11]),a=!0)},p(f,[m]){c&&c.p&&(!n||m&256)&&ue(c,t,f,f[8],n?de(t,f[8],m,null):me(f[8]),null),(!n||m&4&&i!==(i=f[2][f[3].id]))&&A(e,"aria-controls",i),(!n||m&2)&&A(e,"aria-selected",f[1]),(!n||m&2&&o!==(o=f[1]?0:-1))&&A(e,"tabindex",o),(!n||m&2)&&Re(e,"svelte-tabs__selected",f[1])},i(f){n||(b(c,f),n=!0)},o(f){R(c,f),n=!1},d(f){f&&p(e),c&&c.d(f),r[10](null),a=!1,s()}}}function Ye(r,e,i){let o,n,{$$slots:a={},$$scope:s}=e,t;const c={id:De()},{registerTab:f,registerTabElement:m,selectTab:d,selectedTab:$,controls:l}=Fe(ve);re(r,$,_=>i(7,o=_)),re(r,l,_=>i(2,n=_));let T;f(c),H(async()=>{await Ie(),m(t)});function u(_){Xe[_?"unshift":"push"](()=>{t=_,i(0,t)})}const h=()=>d(c);return r.$$set=_=>{"$$scope"in _&&i(8,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&128&&i(1,T=o===c)},[t,T,n,c,d,$,l,o,s,a,u,h]}class te extends G{constructor(e){super(),k(this,e,Ye,ze,V,{})}}function He(r){let e,i;const o=r[1].default,n=le(o,r,r[0],null);return{c(){e=y("ul"),n&&n.c(),this.h()},l(a){e=P(a,"UL",{role:!0,class:!0});var s=B(e);n&&n.l(s),s.forEach(p),this.h()},h(){A(e,"role","tablist"),A(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){x(a,e,s),n&&n.m(e,null),i=!0},p(a,[s]){n&&n.p&&(!i||s&1)&&ue(n,o,a,a[0],i?de(o,a[0],s,null):me(a[0]),null)},i(a){i||(b(n,a),i=!0)},o(a){R(n,a),i=!1},d(a){a&&p(e),n&&n.d(a)}}}function qe(r,e,i){let{$$slots:o={},$$scope:n}=e;return r.$$set=a=>{"$$scope"in a&&i(0,n=a.$$scope)},[n,o]}class je extends G{constructor(e){super(),k(this,e,qe,He,V,{})}}function ge(r){let e;const i=r[6].default,o=le(i,r,r[5],null);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,a){o&&o.m(n,a),e=!0},p(n,a){o&&o.p&&(!e||a&32)&&ue(o,i,n,n[5],e?de(i,n[5],a,null):me(n[5]),null)},i(n){e||(b(o,n),e=!0)},o(n){R(o,n),e=!1},d(n){o&&o.d(n)}}}function Ke(r){let e,i,o,n=r[1]===r[2]&&ge(r);return{c(){e=y("div"),n&&n.c(),this.h()},l(a){e=P(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=B(e);n&&n.l(s),s.forEach(p),this.h()},h(){A(e,"id",r[2].id),A(e,"aria-labelledby",i=r[0][r[2].id]),A(e,"class","svelte-tabs__tab-panel svelte-epfyet"),A(e,"role","tabpanel")},m(a,s){x(a,e,s),n&&n.m(e,null),o=!0},p(a,[s]){a[1]===a[2]?n?(n.p(a,s),s&2&&b(n,1)):(n=ge(a),n.c(),b(n,1),n.m(e,null)):n&&(Me(),R(n,1,1,()=>{n=null}),Ne()),(!o||s&1&&i!==(i=a[0][a[2].id]))&&A(e,"aria-labelledby",i)},i(a){o||(b(n),o=!0)},o(a){R(n),o=!1},d(a){a&&p(e),n&&n.d()}}}function Qe(r,e,i){let o,n,{$$slots:a={},$$scope:s}=e;const t={id:De()},{registerPanel:c,selectedPanel:f,labeledBy:m}=Fe(ve);return re(r,f,d=>i(1,n=d)),re(r,m,d=>i(0,o=d)),c(t),r.$$set=d=>{"$$scope"in d&&i(5,s=d.$$scope)},[o,n,t,f,m,s,a]}class ne extends G{constructor(e){super(),k(this,e,Qe,Ke,V,{})}}const Je=["VERTEX_SHADER","FRAGMENT_SHADER"];function xe(r){if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function fe(r,e,i,o){const n=r.createTexture();if(!n)throw"Can not create texture";return r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,i,o,0,r.RGBA,r.FLOAT,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),n}function we(r,e){const i=r.createFramebuffer();if(!i)throw"Can not create frame buffer";return r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0),i}function Y(r,e,i,o,n){const a=[];for(let t=0;t<e.length;++t){const c=Je[t]==="VERTEX_SHADER"?r.VERTEX_SHADER:r.FRAGMENT_SHADER,f=Ze(r,e[t],c,n);if(!f)throw"Can not create shader";a.push(f)}const s=et(r,a,i,o,n);if(!s)throw"Can not create program";return s}function Ze(r,e,i,o){const n=o||console.log,a=r.createShader(i);if(!a)throw"Could not load shader";if(r.shaderSource(a,e),r.compileShader(a),!r.getShaderParameter(a,r.COMPILE_STATUS)){const t=r.getShaderInfoLog(a);return n(new Error("*** Error compiling shader '"+a+"':"+t+`
`+e.split(`
`).map((c,f)=>`${f+1}: ${c}`).join(`
`))),r.deleteShader(a),null}return a}function et(r,e,i,o,n){const a=n||console.log,s=r.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(c){r.attachShader(s,c)}),i&&i.forEach(function(c,f){r.bindAttribLocation(s,o?o[f]:f,c)}),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS)){const c=r.getProgramInfoLog(s);return a("Error in program linking:"+c),r.deleteProgram(s),null}return s}function z(r,e){e=e||1;const i=r.clientWidth*e|0,o=r.clientHeight*e|0;return r.width!==i||r.height!==o?(r.width=i,r.height=o,!0):!1}function tt(r){let e,i,o,n,a,s;return{c(){e=y("p"),i=S(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),o=C(),n=y("ul"),a=C(),s=y("canvas"),this.h()},l(t){e=P(t,"P",{});var c=B(e);i=L(c,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),c.forEach(p),o=I(t),n=P(t,"UL",{id:!0}),B(n).forEach(p),a=I(t),s=P(t,"CANVAS",{id:!0}),B(s).forEach(p),this.h()},h(){A(n,"id","result"),A(s,"id","canvas")},m(t,c){x(t,e,c),N(e,i),x(t,o,c),x(t,n,c),x(t,a,c),x(t,s,c)},p:X,i:X,o:X,d(t){t&&p(e),t&&p(o),t&&p(n),t&&p(a),t&&p(s)}}}function nt(r){const e=document.createElement("li");e.textContent=r.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function ot(r){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const t=s.getContext("webgl");if(!t)throw"Coulndt get context";const c=Y(t,[i,o]);if(!c)throw"Could not get program";const f=t.getAttribLocation(c,"position"),m=t.getUniformLocation(c,"srcTex"),d=t.getUniformLocation(c,"srcDimensions"),$=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,$),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(f),t.vertexAttribPointer(f,2,t.FLOAT,!1,0,0);const l=3,T=3,u=t.createTexture();t.bindTexture(t.TEXTURE_2D,u),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,l,T,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(c),t.uniform1i(m,0),t.uniform2f(d,l,T),t.drawArrays(t.TRIANGLES,0,6);const h=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,h);for(let _=0;_<3*3;++_)nt(h[_*4])}return H(e),[]}class it extends G{constructor(e){super(),k(this,e,ot,tt,V,{})}}const rt=Float32Array;function Ue(r,e,i,o,n,a){const s=new rt(16);return s[0]=2/(e-r),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(o-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(n-a),s[11]=0,s[12]=(r+e)/(r-e),s[13]=(i+o)/(i-o),s[14]=(n+a)/(n-a),s[15]=1,s}function st(r){let e;return{c(){e=y("canvas"),this.h()},l(i){e=P(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(e).forEach(p),this.h()},h(){A(e,"id","canvas"),pe(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(i,o){x(i,e,o)},p:X,i:X,o:X,d(i){i&&p(e)}}}function at(r){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const t=s.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const m=Y(t,[i,o]),d=Y(t,[n,a]);if(!m||!d)throw"Can not create programs";const $={position:t.getAttribLocation(m,"position"),positionTex:t.getUniformLocation(m,"positionTex"),velocityTex:t.getUniformLocation(m,"velocityTex"),texDimensions:t.getUniformLocation(m,"texDimensions"),canvasDimensions:t.getUniformLocation(m,"canvasDimensions"),deltaTime:t.getUniformLocation(m,"deltaTime")},l={id:t.getAttribLocation(d,"id"),positionTex:t.getUniformLocation(d,"positionTex"),texDimensions:t.getUniformLocation(d,"texDimensions"),matrix:t.getUniformLocation(d,"matrix")},T=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,T),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const u=300,h=20,_=u*h,E=new Array(_).fill(0).map((v,O)=>O),g=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,g),t.bufferData(t.ARRAY_BUFFER,new Float32Array(E),t.STATIC_DRAW),z(t.canvas);const M=(v,O)=>(O===void 0&&(O=v,v=0),Math.random()*(O-v)+v),q=new Float32Array(E.map(v=>[M(s.width),M(s.height),0,0]).flat()),j=new Float32Array(E.map(v=>[M(-300,300),M(-300,300),0,0]).flat());function W(v,O,ee,Be){const be=v.createTexture();return v.bindTexture(v.TEXTURE_2D,be),v.texImage2D(v.TEXTURE_2D,0,v.RGBA,ee,Be,0,v.RGBA,v.FLOAT,O),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE),be}const K=W(t,j,u,h),Q=W(t,q,u,h),J=W(t,null,u,h);if(!Q||!J)throw"Can not create position textures";function Z(v,O){const ee=v.createFramebuffer();return v.bindFramebuffer(v.FRAMEBUFFER,ee),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,O,0),ee}const _e=Z(t,Q),Te=Z(t,J);let he={fb:_e,tex:Q},se={fb:Te,tex:J},Ee=0;function Ae(v){if(!t)return;v*=.001;const O=v-Ee;Ee=v,z(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,se.fb),t.viewport(0,0,u,h),t.bindBuffer(t.ARRAY_BUFFER,T),t.enableVertexAttribArray($.position),t.vertexAttribPointer($.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,he.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,K),t.useProgram(m),t.uniform1i($.positionTex,0),t.uniform1i($.velocityTex,1),t.uniform2f($.texDimensions,u,h),t.uniform2f($.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f($.deltaTime,O),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,g),t.enableVertexAttribArray(l.id),t.vertexAttribPointer(l.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,se.tex),t.useProgram(d),t.uniform2f(l.texDimensions,u,u),t.uniform1i(l.positionTex,0),t.uniformMatrix4fv(l.matrix,!1,Ue(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,_);{const ee=he;he=se,se=ee}requestAnimationFrame(Ae)}requestAnimationFrame(Ae)}return H(()=>e()),[]}class ct extends G{constructor(e){super(),k(this,e,at,st,V,{})}}const ce=(r,e)=>(e===void 0&&(e=r,r=0),Math.random()*(e-r)+r);function ft(r,e,i,o){const n=r*e,a=new Array(n).fill(0).map((c,f)=>f),s=new Float32Array(a.map(c=>[ce(i),ce(o),0,0]).flat()),t=new Float32Array(a.map(c=>[ce(-300,300),ce(-300,300),0,0]).flat());return{numParticles:n,ids:new Float32Array(a),positions:s,velocities:t}}const lt=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ut=`precision highp float;

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

`,mt=`  attribute float id;
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

`,dt=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function pt(r){let e;return{c(){e=y("canvas"),this.h()},l(i){e=P(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(e).forEach(p),this.h()},h(){A(e,"id","canvas"),pe(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(i,o){x(i,e,o)},p:X,i:X,o:X,d(i){i&&p(e)}}}function _t(r){function e(){const n=document.getElementById("canvas");if(!n)throw"canvas undefined";const a=n.getContext("webgl");if(!a)throw"gl undefined";xe(a);const s=Y(a,[lt,ut]),t=Y(a,[mt,dt]),c={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},f={id:a.getAttribLocation(t,"id"),positionTex:a.getUniformLocation(t,"positionTex"),texDimensions:a.getUniformLocation(t,"texDimensions"),matrix:a.getUniformLocation(t,"matrix")},m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const d=300,$=20,{numParticles:l,ids:T,positions:u,velocities:h}=ft(d,$,n.width,n.height),_=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,_),a.bufferData(a.ARRAY_BUFFER,new Float32Array(T),a.STATIC_DRAW),z(a.canvas);const E=fe(a,h,d,$),g=fe(a,u,d,$),M=fe(a,null,d,$),q=we(a,g),j=we(a,M);let W={fb:q,tex:g},K={fb:j,tex:M},Q=0;function J(Z){if(!a||!m||!_)throw"Undefined params to render";Z*=.001;const _e=Z-Q;Q=Z,z(a.canvas),o(a,K,d,$,m,c,W,E,s,_e),i(a,d,_,f,K,t,l);{const Te=W;W=K,K=Te}requestAnimationFrame(J)}requestAnimationFrame(J)}const i=(n,a,s,t,c,f,m)=>{n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.id),n.vertexAttribPointer(t.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c.tex),n.useProgram(f),n.uniform2f(t.texDimensions,a,a),n.uniform1i(t.positionTex,0),n.uniformMatrix4fv(t.matrix,!1,Ue(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,m)},o=(n,a,s,t,c,f,m,d,$,l)=>{n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,s,t),n.bindBuffer(n.ARRAY_BUFFER,c),n.enableVertexAttribArray(f.position),n.vertexAttribPointer(f.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,m.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,d),n.useProgram($),n.uniform1i(f.positionTex,0),n.uniform1i(f.velocityTex,1),n.uniform2f(f.texDimensions,s,t),n.uniform2f(f.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f(f.deltaTime,l),n.drawArrays(n.TRIANGLES,0,6)};return H(()=>e()),[]}class Tt extends G{constructor(e){super(),k(this,e,_t,pt,V,{})}}const ht=`attribute vec2 a_position;

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
`,$t=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function vt(r){let e,i,o,n,a,s,t,c,f,m,d,$;return{c(){e=y("p"),i=S(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=y("code"),n=S("requestAnimationFrame"),a=S(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=C(),t=y("canvas"),c=C(),f=y("button"),m=S("Add position"),this.h()},l(l){e=P(l,"P",{});var T=B(e);i=L(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),o=P(T,"CODE",{});var u=B(o);n=L(u,"requestAnimationFrame"),u.forEach(p),a=L(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(p),s=I(l),t=P(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(t).forEach(p),c=I(l),f=P(l,"BUTTON",{});var h=B(f);m=L(h,"Add position"),h.forEach(p),this.h()},h(){A(t,"id","canvas"),pe(t,"background-color","black"),A(t,"width","800"),A(t,"height","600")},m(l,T){x(l,e,T),N(e,i),N(e,o),N(o,n),N(e,a),x(l,s,T),x(l,t,T),x(l,c,T),x(l,f,T),N(f,m),d||($=$e(f,"click",r[1]),d=!0)},p:X,i:X,o:X,d(l){l&&p(e),l&&p(s),l&&p(t),l&&p(c),l&&p(f),d=!1,$()}}}function xt(r){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";xe(s);const t=Y(s,[ht,$t]);z(s.canvas);const c=s.getAttribLocation(t,"a_position"),f=s.getUniformLocation(t,"u_resolution"),m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function d(){if(!s)throw"Undefined params to render";for(let g=0;g<=e.length-2;g+=2)e[g]=(e[g]+Math.random()*2-1)%s.canvas.width,e[g+1]=(e[g+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),z(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(t),s.uniform2f(f,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(c),s.bindBuffer(s.ARRAY_BUFFER,m);const $=2,l=s.FLOAT,T=!1,u=0,h=0;s.vertexAttribPointer(c,$,l,T,u,h);var _=s.POINTS,E=e.length/2;s.drawArrays(_,h,E),requestAnimationFrame(d)}requestAnimationFrame(d)}const o=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return H(()=>i()),[o,()=>o()]}class Et extends G{constructor(e){super(),k(this,e,xt,vt,V,{})}}const At=`attribute float id;
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
`,bt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let oe,ie;const Rt=r=>{ie=Y(r,[At,bt]),oe={idAttributeLocation:r.getAttribLocation(ie,"id"),texDimensionsUniformLocation:r.getUniformLocation(ie,"texDimensions"),resolutionUniformLocation:r.getUniformLocation(ie,"u_resolution")}},gt=r=>{const{gl:e,positionTex:i,textureDimension:o,ids:n}=r;z(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(n),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(ie),e.uniform2f(oe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(oe.texDimensionsUniformLocation,o.width,o.height),e.enableVertexAttribArray(oe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,t=e.FLOAT,c=!1,f=0,m=0;e.vertexAttribPointer(oe.idAttributeLocation,s,t,c,f,m);const d=e.POINTS,$=n.length;e.drawArrays(d,m,$)};function wt(r){let e,i,o,n,a,s,t;return{c(){e=y("p"),i=S("Create an array of render-size positions. Store this array in a texture. In each "),o=y("code"),n=S("requestAnimationFrame"),a=S(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=C(),t=y("canvas"),this.h()},l(c){e=P(c,"P",{});var f=B(e);i=L(f,"Create an array of render-size positions. Store this array in a texture. In each "),o=P(f,"CODE",{});var m=B(o);n=L(m,"requestAnimationFrame"),m.forEach(p),a=L(f,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),f.forEach(p),s=I(c),t=P(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(t).forEach(p),this.h()},h(){A(t,"id","canvas"),pe(t,"background-color","black"),A(t,"width",ye),A(t,"height",Pe)},m(c,f){x(c,e,f),N(e,i),N(e,o),N(o,n),N(e,a),x(c,s,f),x(c,t,f)},p:X,i:X,o:X,d(c){c&&p(e),c&&p(s),c&&p(t)}}}const ye=800,Pe=600;function Ft(r){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const o=i.getContext("webgl");if(!o)throw"gl undefined";xe(o),z(o.canvas),Rt(o);const n=[0,1,2,3,4,5,6,7,8,9],a=n.map(t=>[Math.random()*ye,Math.random()*Pe,0,0]).flat();function s(){if(!o)throw"Undefined params to render";for(let c=0;c<=a.length-2;c+=2)a[c]=(a[c]+Math.random()*2-1)%o.canvas.width,a[c+1]=(a[c+1]+Math.random()*0+1)%o.canvas.height;const t=fe(o,new Float32Array(a),3,3);gt({gl:o,positionTex:t,textureDimension:{width:3,height:3},ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return H(()=>e()),[]}class Dt extends G{constructor(e){super(),k(this,e,Ft,wt,V,{})}}function Ut(r){let e;return{c(){e=S("About")},l(i){e=L(i,"About")},m(i,o){x(i,e,o)},d(i){i&&p(e)}}}function yt(r){let e;return{c(){e=S("Simple counter")},l(i){e=L(i,"Simple counter")},m(i,o){x(i,e,o)},d(i){i&&p(e)}}}function Pt(r){let e;return{c(){e=S("Particles")},l(i){e=L(i,"Particles")},m(i,o){x(i,e,o)},d(i){i&&p(e)}}}function Bt(r){let e;return{c(){e=S("Particles 2")},l(i){e=L(i,"Particles 2")},m(i,o){x(i,e,o)},d(i){i&&p(e)}}}function St(r){let e;return{c(){e=S("Positions Buffer")},l(i){e=L(i,"Positions Buffer")},m(i,o){x(i,e,o)},d(i){i&&p(e)}}}function Lt(r){let e;return{c(){e=S("Positions Texture")},l(i){e=L(i,"Positions Texture")},m(i,o){x(i,e,o)},d(i){i&&p(e)}}}function Ct(r){let e,i,o,n,a,s,t,c,f,m,d,$;return e=new te({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}}}),o=new te({props:{$$slots:{default:[yt]},$$scope:{ctx:r}}}),a=new te({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),t=new te({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}}}),f=new te({props:{$$slots:{default:[St]},$$scope:{ctx:r}}}),d=new te({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment),i=C(),w(o.$$.fragment),n=C(),w(a.$$.fragment),s=C(),w(t.$$.fragment),c=C(),w(f.$$.fragment),m=C(),w(d.$$.fragment)},l(l){F(e.$$.fragment,l),i=I(l),F(o.$$.fragment,l),n=I(l),F(a.$$.fragment,l),s=I(l),F(t.$$.fragment,l),c=I(l),F(f.$$.fragment,l),m=I(l),F(d.$$.fragment,l)},m(l,T){D(e,l,T),x(l,i,T),D(o,l,T),x(l,n,T),D(a,l,T),x(l,s,T),D(t,l,T),x(l,c,T),D(f,l,T),x(l,m,T),D(d,l,T),$=!0},p(l,T){const u={};T&1&&(u.$$scope={dirty:T,ctx:l}),e.$set(u);const h={};T&1&&(h.$$scope={dirty:T,ctx:l}),o.$set(h);const _={};T&1&&(_.$$scope={dirty:T,ctx:l}),a.$set(_);const E={};T&1&&(E.$$scope={dirty:T,ctx:l}),t.$set(E);const g={};T&1&&(g.$$scope={dirty:T,ctx:l}),f.$set(g);const M={};T&1&&(M.$$scope={dirty:T,ctx:l}),d.$set(M)},i(l){$||(b(e.$$.fragment,l),b(o.$$.fragment,l),b(a.$$.fragment,l),b(t.$$.fragment,l),b(f.$$.fragment,l),b(d.$$.fragment,l),$=!0)},o(l){R(e.$$.fragment,l),R(o.$$.fragment,l),R(a.$$.fragment,l),R(t.$$.fragment,l),R(f.$$.fragment,l),R(d.$$.fragment,l),$=!1},d(l){U(e,l),l&&p(i),U(o,l),l&&p(n),U(a,l),l&&p(s),U(t,l),l&&p(c),U(f,l),l&&p(m),U(d,l)}}}function It(r){let e,i,o,n,a,s,t,c;return{c(){e=y("p"),i=S("This page is an experiment to run simulation on the GPU."),o=C(),n=y("p"),a=S(`I am copying code from
                `),s=y("a"),t=S("this site"),c=S(`
                and adding basic typings for typescript.`),this.h()},l(f){e=P(f,"P",{});var m=B(e);i=L(m,"This page is an experiment to run simulation on the GPU."),m.forEach(p),o=I(f),n=P(f,"P",{});var d=B(n);a=L(d,`I am copying code from
                `),s=P(d,"A",{target:!0,href:!0});var $=B(s);t=L($,"this site"),$.forEach(p),c=L(d,`
                and adding basic typings for typescript.`),d.forEach(p),this.h()},h(){A(s,"target","none"),A(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(f,m){x(f,e,m),N(e,i),x(f,o,m),x(f,n,m),N(n,a),N(n,s),N(s,t),N(n,c)},p:X,d(f){f&&p(e),f&&p(o),f&&p(n)}}}function Xt(r){let e,i;return e=new it({}),{c(){w(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,n){D(e,o,n),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}function Mt(r){let e,i;return e=new ct({}),{c(){w(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,n){D(e,o,n),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}function Nt(r){let e,i;return e=new Tt({}),{c(){w(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,n){D(e,o,n),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}function Ot(r){let e,i;return e=new Et({}),{c(){w(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,n){D(e,o,n),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}function Gt(r){let e,i;return e=new Dt({}),{c(){w(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,n){D(e,o,n),i=!0},i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}function kt(r){let e,i,o,n,a,s,t,c,f,m,d,$,l,T;return e=new je({props:{$$slots:{default:[Ct]},$$scope:{ctx:r}}}),o=new ne({props:{$$slots:{default:[It]},$$scope:{ctx:r}}}),a=new ne({props:{$$slots:{default:[Xt]},$$scope:{ctx:r}}}),t=new ne({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),f=new ne({props:{$$slots:{default:[Nt]},$$scope:{ctx:r}}}),d=new ne({props:{$$slots:{default:[Ot]},$$scope:{ctx:r}}}),l=new ne({props:{$$slots:{default:[Gt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment),i=C(),w(o.$$.fragment),n=C(),w(a.$$.fragment),s=C(),w(t.$$.fragment),c=C(),w(f.$$.fragment),m=C(),w(d.$$.fragment),$=C(),w(l.$$.fragment)},l(u){F(e.$$.fragment,u),i=I(u),F(o.$$.fragment,u),n=I(u),F(a.$$.fragment,u),s=I(u),F(t.$$.fragment,u),c=I(u),F(f.$$.fragment,u),m=I(u),F(d.$$.fragment,u),$=I(u),F(l.$$.fragment,u)},m(u,h){D(e,u,h),x(u,i,h),D(o,u,h),x(u,n,h),D(a,u,h),x(u,s,h),D(t,u,h),x(u,c,h),D(f,u,h),x(u,m,h),D(d,u,h),x(u,$,h),D(l,u,h),T=!0},p(u,h){const _={};h&1&&(_.$$scope={dirty:h,ctx:u}),e.$set(_);const E={};h&1&&(E.$$scope={dirty:h,ctx:u}),o.$set(E);const g={};h&1&&(g.$$scope={dirty:h,ctx:u}),a.$set(g);const M={};h&1&&(M.$$scope={dirty:h,ctx:u}),t.$set(M);const q={};h&1&&(q.$$scope={dirty:h,ctx:u}),f.$set(q);const j={};h&1&&(j.$$scope={dirty:h,ctx:u}),d.$set(j);const W={};h&1&&(W.$$scope={dirty:h,ctx:u}),l.$set(W)},i(u){T||(b(e.$$.fragment,u),b(o.$$.fragment,u),b(a.$$.fragment,u),b(t.$$.fragment,u),b(f.$$.fragment,u),b(d.$$.fragment,u),b(l.$$.fragment,u),T=!0)},o(u){R(e.$$.fragment,u),R(o.$$.fragment,u),R(a.$$.fragment,u),R(t.$$.fragment,u),R(f.$$.fragment,u),R(d.$$.fragment,u),R(l.$$.fragment,u),T=!1},d(u){U(e,u),u&&p(i),U(o,u),u&&p(n),U(a,u),u&&p(s),U(t,u),u&&p(c),U(f,u),u&&p(m),U(d,u),u&&p($),U(l,u)}}}function Vt(r){let e,i,o;return i=new We({props:{$$slots:{default:[kt]},$$scope:{ctx:r}}}),{c(){e=y("div"),w(i.$$.fragment)},l(n){e=P(n,"DIV",{});var a=B(e);F(i.$$.fragment,a),a.forEach(p)},m(n,a){x(n,e,a),D(i,e,null),o=!0},p(n,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:n}),i.$set(s)},i(n){o||(b(i.$$.fragment,n),o=!0)},o(n){R(i.$$.fragment,n),o=!1},d(n){n&&p(e),U(i)}}}class Wt extends G{constructor(e){super(),k(this,e,null,Vt,V,{})}}function zt(r){let e,i;return e=new Wt({}),{c(){w(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,n){D(e,o,n),i=!0},p:X,i(o){i||(b(e.$$.fragment,o),i=!0)},o(o){R(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}class qt extends G{constructor(e){super(),k(this,e,null,zt,V,{})}}export{qt as default};
