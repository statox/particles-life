import{S as oe,i as ie,s as re,C as nt,k as R,l as F,m as y,h as f,n as b,b as x,K as se,E as ot,F as it,G as rt,f as M,t as N,H as ke,R as nn,o as pe,j as on,Q as rn,T as Nt,U as Ht,A as an,V as sn,g as cn,d as ln,q as S,a as P,r as C,c as B,D as T,B as G,p as De,O as ue,u as tt,P as me,M as jt,w as z,x as k,y as V,z as Y}from"../../../chunks/index-ff9e742a.js";import{w as qe}from"../../../chunks/index-84a8d4d9.js";let fn=1;function Kt(){return`svelte-tabs-${fn++}`}function un(t){let e,o,n,r;const a=t[4].default,s=nt(a,t,t[3],null);return{c(){e=R("div"),s&&s.c(),this.h()},l(i){e=F(i,"DIV",{class:!0});var l=y(e);s&&s.l(l),l.forEach(f),this.h()},h(){b(e,"class","svelte-tabs")},m(i,l){x(i,e,l),s&&s.m(e,null),o=!0,n||(r=se(e,"keydown",t[1]),n=!0)},p(i,[l]){s&&s.p&&(!o||l&8)&&ot(s,a,i,i[3],o?rt(a,i[3],l,null):it(i[3]),null)},i(i){o||(M(s,i),o=!0)},o(i){N(s,i),o=!1},d(i){i&&f(e),s&&s.d(i),n=!1,r()}}}const Ft={};function mn(t,e,o){const n=t.indexOf(e);t.splice(n,1),o.update(r=>r===e?t[n]||t[t.length-1]:r)}function dn(t,e,o){let n,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const i=[],l=[],c=[],d=qe({}),v=qe({}),$=qe(null);ke(t,$,_=>o(5,n=_));const p=qe(null);function h(_,E,u){_.push(E),u.update(g=>g||E),rn(()=>mn(_,E,u))}function A(_){const E=l.indexOf(_);$.set(_),p.set(c[E])}nn(Ft,{registerTab(_){h(l,_,$)},registerTabElement(_){i.push(_)},registerPanel(_){h(c,_,p)},selectTab:A,selectedTab:$,selectedPanel:p,controls:d,labeledBy:v}),pe(()=>{A(l[s])}),on(()=>{for(let _=0;_<l.length;_++)d.update(E=>({...E,[l[_].id]:c[_].id})),v.update(E=>({...E,[c[_].id]:l[_].id}))});async function w(_){if(_.target.classList.contains("svelte-tabs__tab")){let E=l.indexOf(n);switch(_.key){case"ArrowRight":E+=1,E>l.length-1&&(E=0),A(l[E]),i[E].focus();break;case"ArrowLeft":E-=1,E<0&&(E=l.length-1),A(l[E]),i[E].focus()}}}return t.$$set=_=>{"initialSelectedIndex"in _&&o(2,s=_.initialSelectedIndex),"$$scope"in _&&o(3,a=_.$$scope)},[$,w,s,a,r]}class pn extends oe{constructor(e){super(),ie(this,e,dn,un,re,{initialSelectedIndex:2})}}function hn(t){let e,o,n,r,a,s;const i=t[9].default,l=nt(i,t,t[8],null);return{c(){e=R("li"),l&&l.c(),this.h()},l(c){e=F(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=y(e);l&&l.l(d),d.forEach(f),this.h()},h(){b(e,"role","tab"),b(e,"id",t[3].id),b(e,"aria-controls",o=t[2][t[3].id]),b(e,"aria-selected",t[1]),b(e,"tabindex",n=t[1]?0:-1),b(e,"class","svelte-tabs__tab svelte-1fbofsd"),Nt(e,"svelte-tabs__selected",t[1])},m(c,d){x(c,e,d),l&&l.m(e,null),t[10](e),r=!0,a||(s=se(e,"click",t[11]),a=!0)},p(c,[d]){l&&l.p&&(!r||d&256)&&ot(l,i,c,c[8],r?rt(i,c[8],d,null):it(c[8]),null),(!r||d&4&&o!==(o=c[2][c[3].id]))&&b(e,"aria-controls",o),(!r||d&2)&&b(e,"aria-selected",c[1]),(!r||d&2&&n!==(n=c[1]?0:-1))&&b(e,"tabindex",n),(!r||d&2)&&Nt(e,"svelte-tabs__selected",c[1])},i(c){r||(M(l,c),r=!0)},o(c){N(l,c),r=!1},d(c){c&&f(e),l&&l.d(c),t[10](null),a=!1,s()}}}function _n(t,e,o){let n,r,{$$slots:a={},$$scope:s}=e,i;const l={id:Kt()},{registerTab:c,registerTabElement:d,selectTab:v,selectedTab:$,controls:p}=Ht(Ft);ke(t,$,_=>o(7,n=_)),ke(t,p,_=>o(2,r=_));let h;c(l),pe(async()=>{await an(),d(i)});function A(_){sn[_?"unshift":"push"](()=>{i=_,o(0,i)})}const w=()=>v(l);return t.$$set=_=>{"$$scope"in _&&o(8,s=_.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(1,h=n===l)},[i,h,r,l,v,$,p,n,s,a,A,w]}class _e extends oe{constructor(e){super(),ie(this,e,_n,hn,re,{})}}function vn(t){let e,o;const n=t[1].default,r=nt(n,t,t[0],null);return{c(){e=R("ul"),r&&r.c(),this.h()},l(a){e=F(a,"UL",{role:!0,class:!0});var s=y(e);r&&r.l(s),s.forEach(f),this.h()},h(){b(e,"role","tablist"),b(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){x(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){r&&r.p&&(!o||s&1)&&ot(r,n,a,a[0],o?rt(n,a[0],s,null):it(a[0]),null)},i(a){o||(M(r,a),o=!0)},o(a){N(r,a),o=!1},d(a){a&&f(e),r&&r.d(a)}}}function Tn(t,e,o){let{$$slots:n={},$$scope:r}=e;return t.$$set=a=>{"$$scope"in a&&o(0,r=a.$$scope)},[r,n]}class xn extends oe{constructor(e){super(),ie(this,e,Tn,vn,re,{})}}function Ot(t){let e;const o=t[6].default,n=nt(o,t,t[5],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&32)&&ot(n,o,r,r[5],e?rt(o,r[5],a,null):it(r[5]),null)},i(r){e||(M(n,r),e=!0)},o(r){N(n,r),e=!1},d(r){n&&n.d(r)}}}function $n(t){let e,o,n,r=t[1]===t[2]&&Ot(t);return{c(){e=R("div"),r&&r.c(),this.h()},l(a){e=F(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=y(e);r&&r.l(s),s.forEach(f),this.h()},h(){b(e,"id",t[2].id),b(e,"aria-labelledby",o=t[0][t[2].id]),b(e,"class","svelte-tabs__tab-panel svelte-epfyet"),b(e,"role","tabpanel")},m(a,s){x(a,e,s),r&&r.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&M(r,1)):(r=Ot(a),r.c(),M(r,1),r.m(e,null)):r&&(cn(),N(r,1,1,()=>{r=null}),ln()),(!n||s&1&&o!==(o=a[0][a[2].id]))&&b(e,"aria-labelledby",o)},i(a){n||(M(r),n=!0)},o(a){N(r),n=!1},d(a){a&&f(e),r&&r.d()}}}function An(t,e,o){let n,r,{$$slots:a={},$$scope:s}=e;const i={id:Kt()},{registerPanel:l,selectedPanel:c,labeledBy:d}=Ht(Ft);return ke(t,c,v=>o(1,r=v)),ke(t,d,v=>o(0,n=v)),l(i),t.$$set=v=>{"$$scope"in v&&o(5,s=v.$$scope)},[n,r,i,c,d,s,a]}class ve extends oe{constructor(e){super(),ie(this,e,An,$n,re,{})}}const bn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Dt(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return at(e),e}function at(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function de(t,e,o,n){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function be(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function ae(t,e,o,n,r){const a=[];for(let i=0;i<e.length;++i){const l=bn[i]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=En(t,e[i],l,r);if(!c)throw"Can not create shader";a.push(c)}const s=gn(t,a,o,n,r);if(!s)throw"Can not create program";return s}function En(t,e,o,n){const r=n||console.log,a=t.createShader(o);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const i=t.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+i+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(a),null}return a}function gn(t,e,o,n,r){const a=r||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){t.attachShader(s,l)}),o&&o.forEach(function(l,c){t.bindAttribLocation(s,n?n[c]:c,l)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const l=t.getProgramInfoLog(s);return a("Error in program linking:"+l),t.deleteProgram(s),null}return s}function ne(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}function wn(t){let e,o,n,r,a,s,i,l,c,d,v,$;return{c(){e=R("p"),o=S(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=P(),r=R("p"),a=S(`It is reusing the code from
    `),s=R("a"),i=S(`this site
    `),l=S("."),c=P(),d=R("ul"),v=P(),$=R("canvas"),this.h()},l(p){e=F(p,"P",{});var h=y(e);o=C(h,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),h.forEach(f),n=B(p),r=F(p,"P",{});var A=y(r);a=C(A,`It is reusing the code from
    `),s=F(A,"A",{target:!0,href:!0});var w=y(s);i=C(w,`this site
    `),w.forEach(f),l=C(A,"."),A.forEach(f),c=B(p),d=F(p,"UL",{id:!0}),y(d).forEach(f),v=B(p),$=F(p,"CANVAS",{id:!0}),y($).forEach(f),this.h()},h(){b(s,"target","none"),b(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),b(d,"id","result"),b($,"id","canvas")},m(p,h){x(p,e,h),T(e,o),x(p,n,h),x(p,r,h),T(r,a),T(r,s),T(s,i),T(r,l),x(p,c,h),x(p,d,h),x(p,v,h),x(p,$,h)},p:G,i:G,o:G,d(p){p&&f(e),p&&f(n),p&&f(r),p&&f(c),p&&f(d),p&&f(v),p&&f($)}}}function Rn(t){const e=document.createElement("li");e.textContent=t.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(e)}function Fn(t){function e(){const o=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const i=s.getContext("webgl");if(!i)throw"Coulndt get context";const l=ae(i,[o,n]);if(!l)throw"Could not get program";const c=i.getAttribLocation(l,"position"),d=i.getUniformLocation(l,"srcTex"),v=i.getUniformLocation(l,"srcDimensions"),$=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,$),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(c),i.vertexAttribPointer(c,2,i.FLOAT,!1,0,0);const p=3,h=3,A=i.createTexture();i.bindTexture(i.TEXTURE_2D,A),i.pixelStorei(i.UNPACK_ALIGNMENT,1),i.texImage2D(i.TEXTURE_2D,0,i.LUMINANCE,p,h,0,i.LUMINANCE,i.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.useProgram(l),i.uniform1i(d,0),i.uniform2f(v,p,h),i.drawArrays(i.TRIANGLES,0,6);const w=new Uint8Array(3*3*4);i.readPixels(0,0,3,3,i.RGBA,i.UNSIGNED_BYTE,w);for(let _=0;_<3*3;++_)Rn(w[_*4])}return pe(e),[]}class Dn extends oe{constructor(e){super(),ie(this,e,Fn,wn,re,{})}}const Un=Float32Array;function Qt(t,e,o,n,r,a){const s=new Un(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-o),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(o+n)/(o-n),s[14]=(r+a)/(r-a),s[15]=1,s}function yn(t){let e,o,n,r,a,s,i;return{c(){e=R("p"),o=S(`This is the simple particles simulation from
    `),n=R("a"),r=S("webglfundamentals"),a=S(" directly copied in a svelte component."),s=P(),i=R("canvas"),this.h()},l(l){e=F(l,"P",{});var c=y(e);o=C(c,`This is the simple particles simulation from
    `),n=F(c,"A",{target:!0,href:!0});var d=y(n);r=C(d,"webglfundamentals"),d.forEach(f),a=C(c," directly copied in a svelte component."),c.forEach(f),s=B(l),i=F(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(i).forEach(f),this.h()},h(){b(n,"target","none"),b(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),b(i,"id","canvas"),De(i,"background-color","black"),b(i,"width","800"),b(i,"height","600")},m(l,c){x(l,e,c),T(e,o),T(e,n),T(n,r),T(e,a),x(l,s,c),x(l,i,c)},p:G,i:G,o:G,d(l){l&&f(e),l&&f(s),l&&f(i)}}}function Ln(t){function e(){const o=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const i=s.getContext("webgl");if(!i)throw"gl undefined";if(!i.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!i.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=ae(i,[o,n]),v=ae(i,[r,a]);if(!d||!v)throw"Can not create programs";const $={position:i.getAttribLocation(d,"position"),positionTex:i.getUniformLocation(d,"positionTex"),velocityTex:i.getUniformLocation(d,"velocityTex"),texDimensions:i.getUniformLocation(d,"texDimensions"),canvasDimensions:i.getUniformLocation(d,"canvasDimensions"),deltaTime:i.getUniformLocation(d,"deltaTime")},p={id:i.getAttribLocation(v,"id"),positionTex:i.getUniformLocation(v,"positionTex"),texDimensions:i.getUniformLocation(v,"texDimensions"),matrix:i.getUniformLocation(v,"matrix")},h=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,h),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW);const A=300,w=20,_=A*w,E=new Array(_).fill(0).map((U,J)=>J),u=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,u),i.bufferData(i.ARRAY_BUFFER,new Float32Array(E),i.STATIC_DRAW),ne(i.canvas);const g=(U,J)=>(J===void 0&&(J=U,U=0),Math.random()*(J-U)+U),m=new Float32Array(E.map(U=>[g(s.width),g(s.height),0,0]).flat()),D=new Float32Array(E.map(U=>[g(-300,300),g(-300,300),0,0]).flat());function W(U,J,te,$e){const Ue=U.createTexture();return U.bindTexture(U.TEXTURE_2D,Ue),U.texImage2D(U.TEXTURE_2D,0,U.RGBA,te,$e,0,U.RGBA,U.FLOAT,J),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MAG_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_S,U.CLAMP_TO_EDGE),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_T,U.CLAMP_TO_EDGE),Ue}const H=W(i,D,A,w),j=W(i,m,A,w),O=W(i,null,A,w);if(!j||!O)throw"Can not create position textures";function q(U,J){const te=U.createFramebuffer();return U.bindFramebuffer(U.FRAMEBUFFER,te),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,J,0),te}const Q=q(i,j),L=q(i,O);let X={fb:Q,tex:j},ee={fb:L,tex:O},K=0;function he(U){if(!i)return;U*=.001;const J=U-K;K=U,ne(i.canvas),i.bindFramebuffer(i.FRAMEBUFFER,ee.fb),i.viewport(0,0,A,w),i.bindBuffer(i.ARRAY_BUFFER,h),i.enableVertexAttribArray($.position),i.vertexAttribPointer($.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,X.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,H),i.useProgram(d),i.uniform1i($.positionTex,0),i.uniform1i($.velocityTex,1),i.uniform2f($.texDimensions,A,w),i.uniform2f($.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f($.deltaTime,J),i.drawArrays(i.TRIANGLES,0,6),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,u),i.enableVertexAttribArray(p.id),i.vertexAttribPointer(p.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,ee.tex),i.useProgram(v),i.uniform2f(p.texDimensions,A,A),i.uniform1i(p.positionTex,0),i.uniformMatrix4fv(p.matrix,!1,Qt(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,_);{const te=X;X=ee,ee=te}requestAnimationFrame(he)}requestAnimationFrame(he)}return pe(()=>e()),[]}class Pn extends oe{constructor(e){super(),ie(this,e,Ln,yn,re,{})}}const He=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Bn(t,e,o,n){const r=t*e,a=new Array(r).fill(0).map((l,c)=>c),s=new Float32Array(a.map(l=>[He(o),He(n),0,0]).flat()),i=new Float32Array(a.map(l=>[He(-300,300),He(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:i}}const Sn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Cn=`precision highp float;

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

`,In=`  attribute float id;
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

`,Mn=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Nn(t){let e,o,n,r,a,s,i;return{c(){e=R("p"),o=S(`This is the simple particles simulation from
    `),n=R("a"),r=S("webglfundamentals"),a=S(" with the shader code extracted into separate files."),s=P(),i=R("canvas"),this.h()},l(l){e=F(l,"P",{});var c=y(e);o=C(c,`This is the simple particles simulation from
    `),n=F(c,"A",{target:!0,href:!0});var d=y(n);r=C(d,"webglfundamentals"),d.forEach(f),a=C(c," with the shader code extracted into separate files."),c.forEach(f),s=B(l),i=F(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(i).forEach(f),this.h()},h(){b(n,"target","none"),b(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),b(i,"id","canvas"),De(i,"background-color","black"),b(i,"width","800"),b(i,"height","600")},m(l,c){x(l,e,c),T(e,o),T(e,n),T(n,r),T(e,a),x(l,s,c),x(l,i,c)},p:G,i:G,o:G,d(l){l&&f(e),l&&f(s),l&&f(i)}}}function On(t){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";at(a);const s=ae(a,[Sn,Cn]),i=ae(a,[In,Mn]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},c={id:a.getAttribLocation(i,"id"),positionTex:a.getUniformLocation(i,"positionTex"),texDimensions:a.getUniformLocation(i,"texDimensions"),matrix:a.getUniformLocation(i,"matrix")},d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const v=300,$=20,{numParticles:p,ids:h,positions:A,velocities:w}=Bn(v,$,r.width,r.height),_=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,_),a.bufferData(a.ARRAY_BUFFER,new Float32Array(h),a.STATIC_DRAW),ne(a.canvas);const E=de(a,w,v,$),u=de(a,A,v,$),g=de(a,null,v,$),m=be(a,u),D=be(a,g);let W={fb:m,tex:u},H={fb:D,tex:g},j=0;function O(q){if(!a||!d||!_)throw"Undefined params to render";q*=.001;const Q=q-j;j=q,ne(a.canvas),n(a,H,v,$,d,l,W,E,s,Q),o(a,v,_,c,H,i,p);{const L=W;W=H,H=L}requestAnimationFrame(O)}requestAnimationFrame(O)}const o=(r,a,s,i,l,c,d)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(i.id),r.vertexAttribPointer(i.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,l.tex),r.useProgram(c),r.uniform2f(i.texDimensions,a,a),r.uniform1i(i.positionTex,0),r.uniformMatrix4fv(i.matrix,!1,Qt(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,d)},n=(r,a,s,i,l,c,d,v,$,p)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,i),r.bindBuffer(r.ARRAY_BUFFER,l),r.enableVertexAttribArray(c.position),r.vertexAttribPointer(c.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,d.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,v),r.useProgram($),r.uniform1i(c.positionTex,0),r.uniform1i(c.velocityTex,1),r.uniform2f(c.texDimensions,s,i),r.uniform2f(c.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(c.deltaTime,p),r.drawArrays(r.TRIANGLES,0,6)};return pe(()=>e()),[]}class Xn extends oe{constructor(e){super(),ie(this,e,On,Nn,re,{})}}const zn=`attribute vec2 a_position;

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
`,kn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Vn(t){let e,o,n,r,a,s,i,l,c,d,v,$;return{c(){e=R("p"),o=S(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=R("code"),r=S("requestAnimationFrame"),a=S(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=P(),i=R("canvas"),l=P(),c=R("button"),d=S("Add position"),this.h()},l(p){e=F(p,"P",{});var h=y(e);o=C(h,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=F(h,"CODE",{});var A=y(n);r=C(A,"requestAnimationFrame"),A.forEach(f),a=C(h,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),h.forEach(f),s=B(p),i=F(p,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(i).forEach(f),l=B(p),c=F(p,"BUTTON",{});var w=y(c);d=C(w,"Add position"),w.forEach(f),this.h()},h(){b(i,"id","canvas"),De(i,"background-color","black"),b(i,"width","800"),b(i,"height","600")},m(p,h){x(p,e,h),T(e,o),T(e,n),T(n,r),T(e,a),x(p,s,h),x(p,i,h),x(p,l,h),x(p,c,h),T(c,d),v||($=se(c,"click",t[1]),v=!0)},p:G,i:G,o:G,d(p){p&&f(e),p&&f(s),p&&f(i),p&&f(l),p&&f(c),v=!1,$()}}}function Yn(t){const e=[50,50,50,150,150,150,150,50,200,200];function o(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";at(s);const i=ae(s,[zn,kn]);ne(s.canvas);const l=s.getAttribLocation(i,"a_position"),c=s.getUniformLocation(i,"u_resolution"),d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function v(){if(!s)throw"Undefined params to render";for(let u=0;u<=e.length-2;u+=2)e[u]=(e[u]+Math.random()*2-1)%s.canvas.width,e[u+1]=(e[u+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),ne(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(i),s.uniform2f(c,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,d);const $=2,p=s.FLOAT,h=!1,A=0,w=0;s.vertexAttribPointer(l,$,p,h,A,w);var _=s.POINTS,E=e.length/2;s.drawArrays(_,w,E),requestAnimationFrame(v)}requestAnimationFrame(v)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return pe(()=>o()),[n,()=>n()]}class Wn extends oe{constructor(e){super(),ie(this,e,Yn,Vn,re,{})}}const Gn=`attribute float id;
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
`,qn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Ce,Ie;const Hn=t=>{Ie=ae(t,[Gn,qn]),Ce={idAttributeLocation:t.getAttribLocation(Ie,"id"),texDimensionsUniformLocation:t.getUniformLocation(Ie,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ie,"u_resolution")}},jn=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t;ne(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Ie),e.uniform2f(Ce.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ce.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Ce.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,i=e.FLOAT,l=!1,c=0,d=0;e.vertexAttribPointer(Ce.idAttributeLocation,s,i,l,c,d);const v=e.POINTS,$=r.length;e.drawArrays(v,d,$)};function Kn(t){let e,o,n,r,a,s,i;return{c(){e=R("p"),o=S("Create an array of render-size positions. Store this array in a texture. In each "),n=R("code"),r=S("requestAnimationFrame"),a=S(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=P(),i=R("canvas"),this.h()},l(l){e=F(l,"P",{});var c=y(e);o=C(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=F(c,"CODE",{});var d=y(n);r=C(d,"requestAnimationFrame"),d.forEach(f),a=C(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(f),s=B(l),i=F(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(i).forEach(f),this.h()},h(){b(i,"id","canvas"),De(i,"background-color","black"),b(i,"width",Jt),b(i,"height",Zt)},m(l,c){x(l,e,c),T(e,o),T(e,n),T(n,r),T(e,a),x(l,s,c),x(l,i,c)},p:G,i:G,o:G,d(l){l&&f(e),l&&f(s),l&&f(i)}}}const Jt=800,Zt=600;function Qn(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const n=o.getContext("webgl");if(!n)throw"gl undefined";at(n),ne(n.canvas),Hn(n);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(i=>[Math.random()*Jt,Math.random()*Zt,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let l=0;l<=a.length-2;l+=2)a[l]=(a[l]+Math.random()*2-1)%n.canvas.width,a[l+1]=(a[l+1]+Math.random()*0+1)%n.canvas.height;const i=de(n,new Float32Array(a),3,3);jn({gl:n,positionTex:i,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return pe(()=>e()),[]}let Jn=class extends oe{constructor(e){super(),ie(this,e,Qn,Kn,re,{})}};const Zn=`attribute float id;
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
`,eo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Me,Ne,Tt;const to=(t,e)=>{Ne=ae(t,[Zn,eo]),Me={idAttributeLocation:t.getAttribLocation(Ne,"id"),texDimensionsUniformLocation:t.getUniformLocation(Ne,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ne,"u_resolution")},Tt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Tt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},no=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t;ne(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Tt),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Ne),e.uniform2f(Me.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Me.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Me.idAttributeLocation);const a=1,s=e.FLOAT,i=!1,l=0,c=0;e.vertexAttribPointer(Me.idAttributeLocation,a,s,i,l,c),e.drawArrays(e.POINTS,c,r.length)};function oo(t,e){const o=new Array(t).fill(0).map((a,s)=>s),n=o.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:o.length,height:1};return{ids:o,positions:n,texDimensions:r}}const io=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ro=`precision highp float;

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

`;let Le,Pe,xt,pt,ht,Xt,zt,Oe,Je;const ao=(t,e)=>{const{positions:o,texDimensions:n}=e;Pe=ae(t,[io,ro]),Le={positionAttributeLocation:t.getAttribLocation(Pe,"position"),positionTexLocation:t.getUniformLocation(Pe,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(Pe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Pe,"u_resolution")},xt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,xt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),pt=de(t,new Float32Array(o),n.width,n.height),ht=de(t,null,n.width,n.height),Xt=be(t,pt),zt=be(t,ht),Oe={fb:Xt,tex:pt},Je={fb:zt,tex:ht}},so=t=>{const{gl:e,texDimensions:o}=t;e.bindFramebuffer(e.FRAMEBUFFER,Je.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,xt),e.enableVertexAttribArray(Le.positionAttributeLocation),e.vertexAttribPointer(Le.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Oe.tex),e.useProgram(Pe),e.uniform1i(Le.positionTexLocation,0),e.uniform2f(Le.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Le.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Oe;Oe=Je,Je=n}return Oe.tex};function co(t){let e,o,n,r,a,s,i,l,c,d,v,$,p;return{c(){e=R("p"),o=S("Create an array of render-size positions. Store this array in a texture."),n=P(),r=R("p"),a=S("Create 2 textures which will be used to update the positions with a shader. In each "),s=R("code"),i=S("requestAnimationFrame"),l=S(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=P(),d=R("p"),v=S("Finally switch the two textures to read and write in the updated textures"),$=P(),p=R("canvas"),this.h()},l(h){e=F(h,"P",{});var A=y(e);o=C(A,"Create an array of render-size positions. Store this array in a texture."),A.forEach(f),n=B(h),r=F(h,"P",{});var w=y(r);a=C(w,"Create 2 textures which will be used to update the positions with a shader. In each "),s=F(w,"CODE",{});var _=y(s);i=C(_,"requestAnimationFrame"),_.forEach(f),l=C(w,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),w.forEach(f),c=B(h),d=F(h,"P",{});var E=y(d);v=C(E,"Finally switch the two textures to read and write in the updated textures"),E.forEach(f),$=B(h),p=F(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(p).forEach(f),this.h()},h(){b(p,"id","canvas"),De(p,"background-color","black"),b(p,"width",en),b(p,"height",tn)},m(h,A){x(h,e,A),T(e,o),x(h,n,A),x(h,r,A),T(r,a),T(r,s),T(s,i),T(r,l),x(h,c,A),x(h,d,A),T(d,v),x(h,$,A),x(h,p,A)},p:G,i:G,o:G,d(h){h&&f(e),h&&f(n),h&&f(r),h&&f(c),h&&f(d),h&&f($),h&&f(p)}}}const en=800,tn=600;function lo(t){function e(){const o=Dt();ne(o.canvas);const{ids:n,positions:r,texDimensions:a}=oo(100,{width:en,height:tn});to(o,n),ao(o,{positions:r,texDimensions:a});function s(){ne(o.canvas);const i=so({gl:o,texDimensions:a});no({gl:o,positionTex:i,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return pe(()=>e()),[]}let fo=class extends oe{constructor(e){super(),ie(this,e,lo,co,re,{})}};const uo=`attribute float id;
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
`,mo=`precision mediump float;
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
`;let ge,Be,$t,At;const po=(t,e)=>{const{ids:o,colors:n}=e;Be=ae(t,[uo,mo]),ge={idAttributeLocation:t.getAttribLocation(Be,"id"),colorAttributeLocation:t.getAttribLocation(Be,"color"),texDimensionsUniformLocation:t.getUniformLocation(Be,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Be,"u_resolution")},$t=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,$t),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),At=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,At),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},ho=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t,a=1,s=e.FLOAT,i=!1,l=0,c=0;ne(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,$t),e.vertexAttribPointer(ge.idAttributeLocation,a,s,i,l,c),e.enableVertexAttribArray(ge.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,At),e.vertexAttribPointer(ge.colorAttributeLocation,a,s,i,l,c),e.enableVertexAttribArray(ge.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Be),e.uniform2f(ge.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ge.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,r.length)};function _o(t,e){const o=t.width*t.height,n=new Array(o).fill(0).map((s,i)=>i),r=new Array(o).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:l,y:c}=vo(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:r}}const vo=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,r=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:r,y:a}},To=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,xo=`precision highp float;

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

`;let we,Re,bt,je,_t,kt,Vt,Xe,Ze,Ke;const $o=(t,e)=>{const{positions:o,texDimensions:n}=e;return Re=ae(t,[To,xo]),we={positionAttributeLocation:t.getAttribLocation(Re,"position"),positionTexLocation:t.getUniformLocation(Re,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(Re,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Re,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Re,"u_resolution")},bt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,bt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),je=de(t,new Float32Array(o),n.width,n.height),_t=de(t,null,n.width,n.height),kt=be(t,je),Vt=be(t,_t),Xe={fb:kt,tex:je},Ze={fb:Vt,tex:_t},je},Ao=t=>{const{gl:e,texDimensions:o}=t,n=Date.now();Ke||(Ke=n-1);const r=n-Ke;Ke=n,e.bindFramebuffer(e.FRAMEBUFFER,Ze.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,bt),e.enableVertexAttribArray(we.positionAttributeLocation),e.vertexAttribPointer(we.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Xe.tex),e.useProgram(Re),e.uniform1i(we.positionTexLocation,0),e.uniform1f(we.deltaTimeUniformLocation,r),e.uniform2f(we.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(we.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=Xe;Xe=Ze,Ze=a}return Xe.tex};function bo(t){let e,o,n,r,a,s,i,l,c,d,v=t[2]?"Play":"Pause",$,p,h,A=t[1]?"Normal Speed":"Slow Mo",w,_,E,u,g=t[4].width*t[4].height+"",m,D,W,H,j,O,q,Q;return{c(){e=R("p"),o=S("Same principle with a shader to update positions and a shader to draw particles."),n=P(),r=R("p"),a=S(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=P(),i=R("canvas"),l=P(),c=R("div"),d=R("button"),$=S(v),p=P(),h=R("button"),w=S(A),_=P(),E=R("span"),u=S("particles: "),m=S(g),D=P(),W=R("label"),H=S("Smooth steps"),j=P(),O=R("input"),this.h()},l(L){e=F(L,"P",{});var X=y(e);o=C(X,"Same principle with a shader to update positions and a shader to draw particles."),X.forEach(f),n=B(L),r=F(L,"P",{});var ee=y(r);a=C(ee,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ee.forEach(f),s=B(L),i=F(L,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(i).forEach(f),l=B(L),c=F(L,"DIV",{});var K=y(c);d=F(K,"BUTTON",{});var he=y(d);$=C(he,v),he.forEach(f),p=B(K),h=F(K,"BUTTON",{});var U=y(h);w=C(U,A),U.forEach(f),_=B(K),E=F(K,"SPAN",{});var J=y(E);u=C(J,"particles: "),m=C(J,g),J.forEach(f),D=B(K),W=F(K,"LABEL",{for:!0});var te=y(W);H=C(te,"Smooth steps"),te.forEach(f),j=B(K),O=F(K,"INPUT",{type:!0,min:!0}),K.forEach(f),this.h()},h(){b(i,"id","canvas"),De(i,"background-color","black"),b(i,"width",t[3].width),b(i,"height",t[3].height),b(W,"for","steps"),b(O,"type","number"),b(O,"min",0)},m(L,X){x(L,e,X),T(e,o),x(L,n,X),x(L,r,X),T(r,a),x(L,s,X),x(L,i,X),x(L,l,X),x(L,c,X),T(c,d),T(d,$),T(c,p),T(c,h),T(h,w),T(c,_),T(c,E),T(E,u),T(E,m),T(c,D),T(c,W),T(W,H),T(c,j),T(c,O),ue(O,t[0]),q||(Q=[se(d,"click",t[5]),se(h,"click",t[6]),se(O,"input",t[7])],q=!0)},p(L,[X]){X&4&&v!==(v=L[2]?"Play":"Pause")&&tt($,v),X&2&&A!==(A=L[1]?"Normal Speed":"Slow Mo")&&tt(w,A),X&1&&me(O.value)!==L[0]&&ue(O,L[0])},i:G,o:G,d(L){L&&f(e),L&&f(n),L&&f(r),L&&f(s),L&&f(i),L&&f(l),L&&f(c),q=!1,jt(Q)}}}function Eo(t,e,o){const n={width:800,height:600},r={width:100,height:100};let a=1,s=!1,i=!0;function l(){const $=Dt();ne($.canvas);const{ids:p,positions:h,colors:A}=_o(r,{width:n.width,height:n.height});po($,{ids:p,colors:A,texDimensions:r});let w=$o($,{positions:h,texDimensions:r});function _(){if(ne($.canvas),!i)for(let E=0;E<a;E++)w=Ao({gl:$,texDimensions:r});return ho({gl:$,positionTex:w,textureDimension:r,ids:p}),i?requestAnimationFrame(_):s?setTimeout(()=>requestAnimationFrame(_),1e3):requestAnimationFrame(_)}requestAnimationFrame(_)}pe(()=>l());const c=()=>o(2,i=!i),d=()=>o(1,s=!s);function v(){a=me(this.value),o(0,a)}return[a,s,i,n,r,c,d,v]}class go extends oe{constructor(e){super(),ie(this,e,Eo,bo,re,{})}}const wo=`attribute float id;
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
    gl_PointSize = 5.0;
    v_color = color;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,Ro=`precision mediump float;
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
`;let Fe,Se,Et,gt;const Fo=(t,e)=>{const{ids:o,colors:n}=e;Se=ae(t,[wo,Ro]),Fe={idAttributeLocation:t.getAttribLocation(Se,"id"),colorAttributeLocation:t.getAttribLocation(Se,"color"),texDimensionsUniformLocation:t.getUniformLocation(Se,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Se,"u_resolution")},Et=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Et),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),gt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,gt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Do=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t,a=1,s=e.FLOAT,i=!1,l=0,c=0;ne(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Et),e.vertexAttribPointer(Fe.idAttributeLocation,a,s,i,l,c),e.enableVertexAttribArray(Fe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,gt),e.vertexAttribPointer(Fe.colorAttributeLocation,a,s,i,l,c),e.enableVertexAttribArray(Fe.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Se),e.uniform2f(Fe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Fe.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,r.length)};function Uo(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,r=e.width*e.height,a=new Array(r).fill(0).map((l,c)=>c),s=new Array(r).fill(0).map(l=>Math.floor(Math.random()*4)),i=a.map(l=>{if(n==="disk"){const{x:d,y:v}=Lo(o,20);return[d,v,0,0]}if(n==="square"){const{x:d,y:v}=yo(o,550);return[d,v,0,0]}if(n==="idDiagonal"){const{x:c,y:d}=Po(o,l,a.length);return[c,d,0,0]}if(n==="sinusoidal"){const{x:c,y:d}=Yt(o,l,a.length,{x:1,y:5});return[c,d,0,0]}if(n==="circle"){const{x:c,y:d}=Yt(o,l,a.length,{x:1,y:1});return[c,d,0,0]}}).flat();return{ids:a,positions:i,texDimensions:e,colors:s}}const yo=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Lo=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,r=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:r,y:a}},Po=(t,e,o)=>{const n=wt(e,0,o,0,t.width,!1),r=wt(e,0,o,0,t.height,!1);return{x:n,y:r}},Yt=(t,e,o,n)=>{const r=wt(e,0,o,0,1,!0)*2*Math.PI,a=n.x,i=Math.cos(a*r)*200+t.width/2,l=n.y,d=Math.sin(l*r)*200+t.height/2;return{x:i,y:d}},wt=function(t,e,o,n,r,a){const s=(t-e)/(o-e)*(r-n)+n;return a?n<r?Wt(s,n,r):Wt(s,r,n):s},Wt=function(t,e,o){return Math.max(Math.min(t,o),e)},Bo=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,So=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;
uniform float interactionRange;
uniform float deltaTime;
uniform float drag;

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
            if (mag < interactionRange) {
                float diffCoef = 1.0 / mag;
                if (mag < 1.0) {
                    diffCoef = 1.0;
                }
                direction = direction + (diff * diffCoef);
            }
        }
    }
    direction = (direction * deltaTime) / drag;

    vec2 newPosition = euclideanModulo(position + direction, u_resolution);

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let Te,xe,Rt,Qe,vt,Gt,qt,ze,et;const Co=(t,e)=>{const{positions:o,texDimensions:n}=e;return xe=ae(t,[Bo,So]),Te={positionAttributeLocation:t.getAttribLocation(xe,"position"),positionTexLocation:t.getUniformLocation(xe,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(xe,"interactionRange"),dragUniformLocation:t.getUniformLocation(xe,"drag"),deltaTimeUniformLocation:t.getUniformLocation(xe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(xe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(xe,"u_resolution")},Rt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Rt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Qe=de(t,new Float32Array(o),n.width,n.height),vt=de(t,null,n.width,n.height),Gt=be(t,Qe),qt=be(t,vt),ze={fb:Gt,tex:Qe},et={fb:qt,tex:vt},Qe},Io=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:r,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,et.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Rt),e.enableVertexAttribArray(Te.positionAttributeLocation),e.vertexAttribPointer(Te.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ze.tex),e.useProgram(xe),e.uniform1i(Te.positionTexLocation,0),e.uniform1f(Te.dragUniformLocation,r),e.uniform1f(Te.interactionRangeUniformLocation,n),e.uniform1f(Te.deltaTimeUniformLocation,a),e.uniform2f(Te.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Te.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=ze;ze=et,et=s}return ze.tex};function Mo(t){let e,o,n,r,a,s,i,l,c,d,v=t[2]?"Play":"Pause",$,p,h,A=t[1]?"Normal Speed":"Slow Mo",w,_,E,u,g=t[5].width*t[5].height+"",m,D,W,H,j,O,q,Q,L,X,ee,K,he,U,J,te,$e,Ue,st,ce,ct,Ee,ye,lt,ft,le,ut,Ve,mt,Ut;return{c(){e=R("p"),o=S("Same principle with a shader to update positions and a shader to draw particles."),n=P(),r=R("p"),a=S(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=P(),i=R("canvas"),l=P(),c=R("div"),d=R("button"),$=S(v),p=P(),h=R("button"),w=S(A),_=P(),E=R("span"),u=S("particles: "),m=S(g),D=P(),W=R("label"),H=S("Smooth steps"),j=P(),O=R("input"),q=P(),Q=R("div"),L=R("ul"),X=R("li"),ee=R("label"),K=S("Interaction Range"),he=P(),U=R("input"),J=P(),te=R("li"),$e=R("label"),Ue=S("Drag"),st=P(),ce=R("input"),ct=P(),Ee=R("li"),ye=R("label"),lt=S("Time step"),ft=P(),le=R("input"),ut=P(),Ve=R("ul"),this.h()},l(I){e=F(I,"P",{});var Z=y(e);o=C(Z,"Same principle with a shader to update positions and a shader to draw particles."),Z.forEach(f),n=B(I),r=F(I,"P",{});var yt=y(r);a=C(yt,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),yt.forEach(f),s=B(I),i=F(I,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(i).forEach(f),l=B(I),c=F(I,"DIV",{});var fe=y(c);d=F(fe,"BUTTON",{});var Lt=y(d);$=C(Lt,v),Lt.forEach(f),p=B(fe),h=F(fe,"BUTTON",{});var Pt=y(h);w=C(Pt,A),Pt.forEach(f),_=B(fe),E=F(fe,"SPAN",{});var dt=y(E);u=C(dt,"particles: "),m=C(dt,g),dt.forEach(f),D=B(fe),W=F(fe,"LABEL",{for:!0});var Bt=y(W);H=C(Bt,"Smooth steps"),Bt.forEach(f),j=B(fe),O=F(fe,"INPUT",{type:!0,min:!0}),fe.forEach(f),q=B(I),Q=F(I,"DIV",{});var St=y(Q);L=F(St,"UL",{});var Ae=y(L);X=F(Ae,"LI",{});var Ye=y(X);ee=F(Ye,"LABEL",{for:!0});var Ct=y(ee);K=C(Ct,"Interaction Range"),Ct.forEach(f),he=B(Ye),U=F(Ye,"INPUT",{id:!0,type:!0,min:!0}),Ye.forEach(f),J=B(Ae),te=F(Ae,"LI",{});var We=y(te);$e=F(We,"LABEL",{for:!0});var It=y($e);Ue=C(It,"Drag"),It.forEach(f),st=B(We),ce=F(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(f),ct=B(Ae),Ee=F(Ae,"LI",{});var Ge=y(Ee);ye=F(Ge,"LABEL",{for:!0});var Mt=y(ye);lt=C(Mt,"Time step"),Mt.forEach(f),ft=B(Ge),le=F(Ge,"INPUT",{id:!0,type:!0,min:!0}),Ge.forEach(f),ut=B(Ae),Ve=F(Ae,"UL",{}),y(Ve).forEach(f),Ae.forEach(f),St.forEach(f),this.h()},h(){b(i,"id","canvas"),De(i,"background-color","black"),b(i,"width",t[4].width),b(i,"height",t[4].height),b(W,"for","steps"),b(O,"type","number"),b(O,"min",0),b(ee,"for","interactionRange"),b(U,"id","interactionRange"),b(U,"type","number"),b(U,"min",0),b($e,"for","drag"),b(ce,"id","drag"),b(ce,"type","number"),b(ce,"min",0),b(ye,"for","deltaTime"),b(le,"id","deltaTime"),b(le,"type","number"),b(le,"min",0)},m(I,Z){x(I,e,Z),T(e,o),x(I,n,Z),x(I,r,Z),T(r,a),x(I,s,Z),x(I,i,Z),x(I,l,Z),x(I,c,Z),T(c,d),T(d,$),T(c,p),T(c,h),T(h,w),T(c,_),T(c,E),T(E,u),T(E,m),T(c,D),T(c,W),T(W,H),T(c,j),T(c,O),ue(O,t[0]),x(I,q,Z),x(I,Q,Z),T(Q,L),T(L,X),T(X,ee),T(ee,K),T(X,he),T(X,U),ue(U,t[3].interactionRange),T(L,J),T(L,te),T(te,$e),T($e,Ue),T(te,st),T(te,ce),ue(ce,t[3].drag),T(L,ct),T(L,Ee),T(Ee,ye),T(ye,lt),T(Ee,ft),T(Ee,le),ue(le,t[3].timeStep),T(L,ut),T(L,Ve),mt||(Ut=[se(d,"click",t[6]),se(h,"click",t[7]),se(O,"input",t[8]),se(U,"input",t[9]),se(ce,"input",t[10]),se(le,"input",t[11])],mt=!0)},p(I,[Z]){Z&4&&v!==(v=I[2]?"Play":"Pause")&&tt($,v),Z&2&&A!==(A=I[1]?"Normal Speed":"Slow Mo")&&tt(w,A),Z&1&&me(O.value)!==I[0]&&ue(O,I[0]),Z&8&&me(U.value)!==I[3].interactionRange&&ue(U,I[3].interactionRange),Z&8&&me(ce.value)!==I[3].drag&&ue(ce,I[3].drag),Z&8&&me(le.value)!==I[3].timeStep&&ue(le,I[3].timeStep)},i:G,o:G,d(I){I&&f(e),I&&f(n),I&&f(r),I&&f(s),I&&f(i),I&&f(l),I&&f(c),I&&f(q),I&&f(Q),mt=!1,jt(Ut)}}}function No(t,e,o){const n={width:800,height:600},r={width:10,height:10};let a=1,s=!1,i=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const w=Dt();ne(w.canvas);const{ids:_,positions:E,colors:u}=Uo({texDimensions:r,screenDimensions:{width:n.width,height:n.height},mode:"circle"});Fo(w,{ids:_,colors:u,texDimensions:r});let g=Co(w,{positions:E,texDimensions:r});function m(){if(ne(w.canvas),!i)for(let D=0;D<a;D++)g=Io({gl:w,texDimensions:r,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Do({gl:w,positionTex:g,textureDimension:r,ids:_}),i?requestAnimationFrame(m):s?setTimeout(()=>requestAnimationFrame(m),1e3):requestAnimationFrame(m)}requestAnimationFrame(m)}pe(()=>c());const d=()=>o(2,i=!i),v=()=>o(1,s=!s);function $(){a=me(this.value),o(0,a)}function p(){l.interactionRange=me(this.value),o(3,l)}function h(){l.drag=me(this.value),o(3,l)}function A(){l.timeStep=me(this.value),o(3,l)}return[a,s,i,l,n,r,d,v,$,p,h,A]}class Oo extends oe{constructor(e){super(),ie(this,e,No,Mo,re,{})}}function Xo(t){let e;return{c(){e=S("About")},l(o){e=C(o,"About")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function zo(t){let e;return{c(){e=S("Test 1")},l(o){e=C(o,"Test 1")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function ko(t){let e;return{c(){e=S("Test 2")},l(o){e=C(o,"Test 2")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Vo(t){let e;return{c(){e=S("Test 3")},l(o){e=C(o,"Test 3")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Yo(t){let e;return{c(){e=S("Test 4")},l(o){e=C(o,"Test 4")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Wo(t){let e;return{c(){e=S("Test 5")},l(o){e=C(o,"Test 5")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Go(t){let e;return{c(){e=S("Test 6")},l(o){e=C(o,"Test 6")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function qo(t){let e;return{c(){e=S("Test 7")},l(o){e=C(o,"Test 7")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Ho(t){let e;return{c(){e=S("Test 8")},l(o){e=C(o,"Test 8")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function jo(t){let e,o,n,r,a,s,i,l,c,d,v,$,p,h,A,w,_,E;return e=new _e({props:{$$slots:{default:[Xo]},$$scope:{ctx:t}}}),n=new _e({props:{$$slots:{default:[zo]},$$scope:{ctx:t}}}),a=new _e({props:{$$slots:{default:[ko]},$$scope:{ctx:t}}}),i=new _e({props:{$$slots:{default:[Vo]},$$scope:{ctx:t}}}),c=new _e({props:{$$slots:{default:[Yo]},$$scope:{ctx:t}}}),v=new _e({props:{$$slots:{default:[Wo]},$$scope:{ctx:t}}}),p=new _e({props:{$$slots:{default:[Go]},$$scope:{ctx:t}}}),A=new _e({props:{$$slots:{default:[qo]},$$scope:{ctx:t}}}),_=new _e({props:{$$slots:{default:[Ho]},$$scope:{ctx:t}}}),{c(){z(e.$$.fragment),o=P(),z(n.$$.fragment),r=P(),z(a.$$.fragment),s=P(),z(i.$$.fragment),l=P(),z(c.$$.fragment),d=P(),z(v.$$.fragment),$=P(),z(p.$$.fragment),h=P(),z(A.$$.fragment),w=P(),z(_.$$.fragment)},l(u){k(e.$$.fragment,u),o=B(u),k(n.$$.fragment,u),r=B(u),k(a.$$.fragment,u),s=B(u),k(i.$$.fragment,u),l=B(u),k(c.$$.fragment,u),d=B(u),k(v.$$.fragment,u),$=B(u),k(p.$$.fragment,u),h=B(u),k(A.$$.fragment,u),w=B(u),k(_.$$.fragment,u)},m(u,g){V(e,u,g),x(u,o,g),V(n,u,g),x(u,r,g),V(a,u,g),x(u,s,g),V(i,u,g),x(u,l,g),V(c,u,g),x(u,d,g),V(v,u,g),x(u,$,g),V(p,u,g),x(u,h,g),V(A,u,g),x(u,w,g),V(_,u,g),E=!0},p(u,g){const m={};g&1&&(m.$$scope={dirty:g,ctx:u}),e.$set(m);const D={};g&1&&(D.$$scope={dirty:g,ctx:u}),n.$set(D);const W={};g&1&&(W.$$scope={dirty:g,ctx:u}),a.$set(W);const H={};g&1&&(H.$$scope={dirty:g,ctx:u}),i.$set(H);const j={};g&1&&(j.$$scope={dirty:g,ctx:u}),c.$set(j);const O={};g&1&&(O.$$scope={dirty:g,ctx:u}),v.$set(O);const q={};g&1&&(q.$$scope={dirty:g,ctx:u}),p.$set(q);const Q={};g&1&&(Q.$$scope={dirty:g,ctx:u}),A.$set(Q);const L={};g&1&&(L.$$scope={dirty:g,ctx:u}),_.$set(L)},i(u){E||(M(e.$$.fragment,u),M(n.$$.fragment,u),M(a.$$.fragment,u),M(i.$$.fragment,u),M(c.$$.fragment,u),M(v.$$.fragment,u),M(p.$$.fragment,u),M(A.$$.fragment,u),M(_.$$.fragment,u),E=!0)},o(u){N(e.$$.fragment,u),N(n.$$.fragment,u),N(a.$$.fragment,u),N(i.$$.fragment,u),N(c.$$.fragment,u),N(v.$$.fragment,u),N(p.$$.fragment,u),N(A.$$.fragment,u),N(_.$$.fragment,u),E=!1},d(u){Y(e,u),u&&f(o),Y(n,u),u&&f(r),Y(a,u),u&&f(s),Y(i,u),u&&f(l),Y(c,u),u&&f(d),Y(v,u),u&&f($),Y(p,u),u&&f(h),Y(A,u),u&&f(w),Y(_,u)}}}function Ko(t){let e,o;return{c(){e=R("p"),o=S("This page is an experiment to run simulation on the GPU.")},l(n){e=F(n,"P",{});var r=y(e);o=C(r,"This page is an experiment to run simulation on the GPU."),r.forEach(f)},m(n,r){x(n,e,r),T(e,o)},p:G,d(n){n&&f(e)}}}function Qo(t){let e,o;return e=new Dn({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function Jo(t){let e,o;return e=new Pn({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function Zo(t){let e,o;return e=new Xn({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function ei(t){let e,o;return e=new Wn({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function ti(t){let e,o;return e=new Jn({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function ni(t){let e,o;return e=new fo({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function oi(t){let e,o;return e=new go({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function ii(t){let e,o;return e=new Oo({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}function ri(t){let e,o,n,r,a,s,i,l,c,d,v,$,p,h,A,w,_,E,u,g;return e=new xn({props:{$$slots:{default:[jo]},$$scope:{ctx:t}}}),n=new ve({props:{$$slots:{default:[Ko]},$$scope:{ctx:t}}}),a=new ve({props:{$$slots:{default:[Qo]},$$scope:{ctx:t}}}),i=new ve({props:{$$slots:{default:[Jo]},$$scope:{ctx:t}}}),c=new ve({props:{$$slots:{default:[Zo]},$$scope:{ctx:t}}}),v=new ve({props:{$$slots:{default:[ei]},$$scope:{ctx:t}}}),p=new ve({props:{$$slots:{default:[ti]},$$scope:{ctx:t}}}),A=new ve({props:{$$slots:{default:[ni]},$$scope:{ctx:t}}}),_=new ve({props:{$$slots:{default:[oi]},$$scope:{ctx:t}}}),u=new ve({props:{$$slots:{default:[ii]},$$scope:{ctx:t}}}),{c(){z(e.$$.fragment),o=P(),z(n.$$.fragment),r=P(),z(a.$$.fragment),s=P(),z(i.$$.fragment),l=P(),z(c.$$.fragment),d=P(),z(v.$$.fragment),$=P(),z(p.$$.fragment),h=P(),z(A.$$.fragment),w=P(),z(_.$$.fragment),E=P(),z(u.$$.fragment)},l(m){k(e.$$.fragment,m),o=B(m),k(n.$$.fragment,m),r=B(m),k(a.$$.fragment,m),s=B(m),k(i.$$.fragment,m),l=B(m),k(c.$$.fragment,m),d=B(m),k(v.$$.fragment,m),$=B(m),k(p.$$.fragment,m),h=B(m),k(A.$$.fragment,m),w=B(m),k(_.$$.fragment,m),E=B(m),k(u.$$.fragment,m)},m(m,D){V(e,m,D),x(m,o,D),V(n,m,D),x(m,r,D),V(a,m,D),x(m,s,D),V(i,m,D),x(m,l,D),V(c,m,D),x(m,d,D),V(v,m,D),x(m,$,D),V(p,m,D),x(m,h,D),V(A,m,D),x(m,w,D),V(_,m,D),x(m,E,D),V(u,m,D),g=!0},p(m,D){const W={};D&1&&(W.$$scope={dirty:D,ctx:m}),e.$set(W);const H={};D&1&&(H.$$scope={dirty:D,ctx:m}),n.$set(H);const j={};D&1&&(j.$$scope={dirty:D,ctx:m}),a.$set(j);const O={};D&1&&(O.$$scope={dirty:D,ctx:m}),i.$set(O);const q={};D&1&&(q.$$scope={dirty:D,ctx:m}),c.$set(q);const Q={};D&1&&(Q.$$scope={dirty:D,ctx:m}),v.$set(Q);const L={};D&1&&(L.$$scope={dirty:D,ctx:m}),p.$set(L);const X={};D&1&&(X.$$scope={dirty:D,ctx:m}),A.$set(X);const ee={};D&1&&(ee.$$scope={dirty:D,ctx:m}),_.$set(ee);const K={};D&1&&(K.$$scope={dirty:D,ctx:m}),u.$set(K)},i(m){g||(M(e.$$.fragment,m),M(n.$$.fragment,m),M(a.$$.fragment,m),M(i.$$.fragment,m),M(c.$$.fragment,m),M(v.$$.fragment,m),M(p.$$.fragment,m),M(A.$$.fragment,m),M(_.$$.fragment,m),M(u.$$.fragment,m),g=!0)},o(m){N(e.$$.fragment,m),N(n.$$.fragment,m),N(a.$$.fragment,m),N(i.$$.fragment,m),N(c.$$.fragment,m),N(v.$$.fragment,m),N(p.$$.fragment,m),N(A.$$.fragment,m),N(_.$$.fragment,m),N(u.$$.fragment,m),g=!1},d(m){Y(e,m),m&&f(o),Y(n,m),m&&f(r),Y(a,m),m&&f(s),Y(i,m),m&&f(l),Y(c,m),m&&f(d),Y(v,m),m&&f($),Y(p,m),m&&f(h),Y(A,m),m&&f(w),Y(_,m),m&&f(E),Y(u,m)}}}function ai(t){let e,o,n;return o=new pn({props:{$$slots:{default:[ri]},$$scope:{ctx:t}}}),{c(){e=R("div"),z(o.$$.fragment)},l(r){e=F(r,"DIV",{});var a=y(e);k(o.$$.fragment,a),a.forEach(f)},m(r,a){x(r,e,a),V(o,e,null),n=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),o.$set(s)},i(r){n||(M(o.$$.fragment,r),n=!0)},o(r){N(o.$$.fragment,r),n=!1},d(r){r&&f(e),Y(o)}}}class si extends oe{constructor(e){super(),ie(this,e,null,ai,re,{})}}function ci(t){let e,o;return e=new si({}),{c(){z(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){V(e,n,r),o=!0},p:G,i(n){o||(M(e.$$.fragment,n),o=!0)},o(n){N(e.$$.fragment,n),o=!1},d(n){Y(e,n)}}}class di extends oe{constructor(e){super(),ie(this,e,null,ci,re,{})}}export{di as default};
