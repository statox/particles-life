import{S as ge,i as we,s as Ee,C as Xt,k as T,l as x,m as E,h as c,n as v,b as g,K as me,E as kt,F as Yt,G as Vt,f as k,t as Y,H as wt,R as jn,o as Be,j as Kn,Q as Qn,T as wn,U as kn,A as Jn,V as Zn,g as eo,d as to,q as B,a as F,r as I,c as D,D as u,B as ce,p as Qe,O as oe,u as et,P as ie,M as Wt,w as q,x as H,y as j,z as K}from"../../../chunks/index-ff9e742a.js";import{w as Ut}from"../../../chunks/index-84a8d4d9.js";let no=1;function Yn(){return`svelte-tabs-${no++}`}function oo(t){let e,o,n,i;const a=t[4].default,s=Xt(a,t,t[3],null);return{c(){e=T("div"),s&&s.c(),this.h()},l(r){e=x(r,"DIV",{class:!0});var f=E(e);s&&s.l(f),f.forEach(c),this.h()},h(){v(e,"class","svelte-tabs")},m(r,f){g(r,e,f),s&&s.m(e,null),o=!0,n||(i=me(e,"keydown",t[1]),n=!0)},p(r,[f]){s&&s.p&&(!o||f&8)&&kt(s,a,r,r[3],o?Vt(a,r[3],f,null):Yt(r[3]),null)},i(r){o||(k(s,r),o=!0)},o(r){Y(s,r),o=!1},d(r){r&&c(e),s&&s.d(r),n=!1,i()}}}const _n={};function io(t,e,o){const n=t.indexOf(e);t.splice(n,1),o.update(i=>i===e?t[n]||t[t.length-1]:i)}function ro(t,e,o){let n,{$$slots:i={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const r=[],f=[],l=[],m=Ut({}),_=Ut({}),b=Ut(null);wt(t,b,$=>o(5,n=$));const h=Ut(null);function A($,P,M){$.push(P),M.update(O=>O||P),Qn(()=>io($,P,M))}function R($){const P=f.indexOf($);b.set($),h.set(l[P])}jn(_n,{registerTab($){A(f,$,b)},registerTabElement($){r.push($)},registerPanel($){A(l,$,h)},selectTab:R,selectedTab:b,selectedPanel:h,controls:m,labeledBy:_}),Be(()=>{R(f[s])}),Kn(()=>{for(let $=0;$<f.length;$++)m.update(P=>({...P,[f[$].id]:l[$].id})),_.update(P=>({...P,[l[$].id]:f[$].id}))});async function L($){if($.target.classList.contains("svelte-tabs__tab")){let P=f.indexOf(n);switch($.key){case"ArrowRight":P+=1,P>f.length-1&&(P=0),R(f[P]),r[P].focus();break;case"ArrowLeft":P-=1,P<0&&(P=f.length-1),R(f[P]),r[P].focus()}}}return t.$$set=$=>{"initialSelectedIndex"in $&&o(2,s=$.initialSelectedIndex),"$$scope"in $&&o(3,a=$.$$scope)},[b,L,s,a,i]}class ao extends ge{constructor(e){super(),we(this,e,ro,oo,Ee,{initialSelectedIndex:2})}}function so(t){let e,o,n,i,a,s;const r=t[9].default,f=Xt(r,t,t[8],null);return{c(){e=T("li"),f&&f.c(),this.h()},l(l){e=x(l,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=E(e);f&&f.l(m),m.forEach(c),this.h()},h(){v(e,"role","tab"),v(e,"id",t[3].id),v(e,"aria-controls",o=t[2][t[3].id]),v(e,"aria-selected",t[1]),v(e,"tabindex",n=t[1]?0:-1),v(e,"class","svelte-tabs__tab svelte-1fbofsd"),wn(e,"svelte-tabs__selected",t[1])},m(l,m){g(l,e,m),f&&f.m(e,null),t[10](e),i=!0,a||(s=me(e,"click",t[11]),a=!0)},p(l,[m]){f&&f.p&&(!i||m&256)&&kt(f,r,l,l[8],i?Vt(r,l[8],m,null):Yt(l[8]),null),(!i||m&4&&o!==(o=l[2][l[3].id]))&&v(e,"aria-controls",o),(!i||m&2)&&v(e,"aria-selected",l[1]),(!i||m&2&&n!==(n=l[1]?0:-1))&&v(e,"tabindex",n),(!i||m&2)&&wn(e,"svelte-tabs__selected",l[1])},i(l){i||(k(f,l),i=!0)},o(l){Y(f,l),i=!1},d(l){l&&c(e),f&&f.d(l),t[10](null),a=!1,s()}}}function lo(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e,r;const f={id:Yn()},{registerTab:l,registerTabElement:m,selectTab:_,selectedTab:b,controls:h}=kn(_n);wt(t,b,$=>o(7,n=$)),wt(t,h,$=>o(2,i=$));let A;l(f),Be(async()=>{await Jn(),m(r)});function R($){Zn[$?"unshift":"push"](()=>{r=$,o(0,r)})}const L=()=>_(f);return t.$$set=$=>{"$$scope"in $&&o(8,s=$.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(1,A=n===f)},[r,A,i,f,_,b,h,n,s,a,R,L]}class Ne extends ge{constructor(e){super(),we(this,e,lo,so,Ee,{})}}function fo(t){let e,o;const n=t[1].default,i=Xt(n,t,t[0],null);return{c(){e=T("ul"),i&&i.c(),this.h()},l(a){e=x(a,"UL",{role:!0,class:!0});var s=E(e);i&&i.l(s),s.forEach(c),this.h()},h(){v(e,"role","tablist"),v(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){g(a,e,s),i&&i.m(e,null),o=!0},p(a,[s]){i&&i.p&&(!o||s&1)&&kt(i,n,a,a[0],o?Vt(n,a[0],s,null):Yt(a[0]),null)},i(a){o||(k(i,a),o=!0)},o(a){Y(i,a),o=!1},d(a){a&&c(e),i&&i.d(a)}}}function co(t,e,o){let{$$slots:n={},$$scope:i}=e;return t.$$set=a=>{"$$scope"in a&&o(0,i=a.$$scope)},[i,n]}class uo extends ge{constructor(e){super(),we(this,e,co,fo,Ee,{})}}function En(t){let e;const o=t[6].default,n=Xt(o,t,t[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,a){n&&n.m(i,a),e=!0},p(i,a){n&&n.p&&(!e||a&32)&&kt(n,o,i,i[5],e?Vt(o,i[5],a,null):Yt(i[5]),null)},i(i){e||(k(n,i),e=!0)},o(i){Y(n,i),e=!1},d(i){n&&n.d(i)}}}function mo(t){let e,o,n,i=t[1]===t[2]&&En(t);return{c(){e=T("div"),i&&i.c(),this.h()},l(a){e=x(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=E(e);i&&i.l(s),s.forEach(c),this.h()},h(){v(e,"id",t[2].id),v(e,"aria-labelledby",o=t[0][t[2].id]),v(e,"class","svelte-tabs__tab-panel svelte-epfyet"),v(e,"role","tabpanel")},m(a,s){g(a,e,s),i&&i.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?i?(i.p(a,s),s&2&&k(i,1)):(i=En(a),i.c(),k(i,1),i.m(e,null)):i&&(eo(),Y(i,1,1,()=>{i=null}),to()),(!n||s&1&&o!==(o=a[0][a[2].id]))&&v(e,"aria-labelledby",o)},i(a){n||(k(i),n=!0)},o(a){Y(i),n=!1},d(a){a&&c(e),i&&i.d()}}}function po(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e;const r={id:Yn()},{registerPanel:f,selectedPanel:l,labeledBy:m}=kn(_n);return wt(t,l,_=>o(1,i=_)),wt(t,m,_=>o(0,n=_)),f(r),t.$$set=_=>{"$$scope"in _&&o(5,s=_.$$scope)},[n,i,r,l,m,s,a]}class Oe extends ge{constructor(e){super(),we(this,e,po,mo,Ee,{})}}const ho=["VERTEX_SHADER","FRAGMENT_SHADER"];function Et(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Gt(e),e}function Gt(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ye(t,e,o,n){const i=t.createTexture();if(!i)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i}function Pe(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function be(t,e,o,n,i){const a=[];for(let r=0;r<e.length;++r){const f=ho[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,l=vo(t,e[r],f,i);if(!l)throw"Can not create shader";a.push(l)}const s=_o(t,a,o,n,i);if(!s)throw"Can not create program";return s}function vo(t,e,o,n){const i=n||console.log,a=t.createShader(o);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+r+`
`+e.split(`
`).map((f,l)=>`${l+1}: ${f}`).join(`
`))),t.deleteShader(a),null}return a}function _o(t,e,o,n,i){const a=i||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(f){t.attachShader(s,f)}),o&&o.forEach(function(f,l){t.bindAttribLocation(s,n?n[l]:l,f)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const f=t.getProgramInfoLog(s);return a("Error in program linking:"+f),t.deleteProgram(s),null}return s}function pe(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}function To(t){let e,o,n,i,a,s,r,f,l,m,_,b;return{c(){e=T("p"),o=B(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=F(),i=T("p"),a=B(`It is reusing the code from
    `),s=T("a"),r=B(`this site
    `),f=B("."),l=F(),m=T("ul"),_=F(),b=T("canvas"),this.h()},l(h){e=x(h,"P",{});var A=E(e);o=I(A,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),A.forEach(c),n=D(h),i=x(h,"P",{});var R=E(i);a=I(R,`It is reusing the code from
    `),s=x(R,"A",{target:!0,href:!0});var L=E(s);r=I(L,`this site
    `),L.forEach(c),f=I(R,"."),R.forEach(c),l=D(h),m=x(h,"UL",{id:!0}),E(m).forEach(c),_=D(h),b=x(h,"CANVAS",{id:!0}),E(b).forEach(c),this.h()},h(){v(s,"target","none"),v(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),v(m,"id","result"),v(b,"id","canvas")},m(h,A){g(h,e,A),u(e,o),g(h,n,A),g(h,i,A),u(i,a),u(i,s),u(s,r),u(i,f),g(h,l,A),g(h,m,A),g(h,_,A),g(h,b,A)},p:ce,i:ce,o:ce,d(h){h&&c(e),h&&c(n),h&&c(i),h&&c(l),h&&c(m),h&&c(_),h&&c(b)}}}function xo(t){const e=document.createElement("li");e.textContent=t.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(e)}function $o(t){function e(){const o=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const r=s.getContext("webgl");if(!r)throw"Coulndt get context";const f=be(r,[o,n]);if(!f)throw"Could not get program";const l=r.getAttribLocation(f,"position"),m=r.getUniformLocation(f,"srcTex"),_=r.getUniformLocation(f,"srcDimensions"),b=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,b),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(l),r.vertexAttribPointer(l,2,r.FLOAT,!1,0,0);const h=3,A=3,R=r.createTexture();r.bindTexture(r.TEXTURE_2D,R),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,h,A,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(f),r.uniform1i(m,0),r.uniform2f(_,h,A),r.drawArrays(r.TRIANGLES,0,6);const L=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,L);for(let $=0;$<3*3;++$)xo(L[$*4])}return Be(e),[]}class Ao extends ge{constructor(e){super(),we(this,e,$o,To,Ee,{})}}const bo=Float32Array;function Vn(t,e,o,n,i,a){const s=new bo(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-o),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(i-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(o+n)/(o-n),s[14]=(i+a)/(i-a),s[15]=1,s}function go(t){let e,o,n,i,a,s,r;return{c(){e=T("p"),o=B(`This is the simple particles simulation from
    `),n=T("a"),i=B("webglfundamentals"),a=B(" directly copied in a svelte component."),s=F(),r=T("canvas"),this.h()},l(f){e=x(f,"P",{});var l=E(e);o=I(l,`This is the simple particles simulation from
    `),n=x(l,"A",{target:!0,href:!0});var m=E(n);i=I(m,"webglfundamentals"),m.forEach(c),a=I(l," directly copied in a svelte component."),l.forEach(c),s=D(f),r=x(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(c),this.h()},h(){v(n,"target","none"),v(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),v(r,"id","canvas"),Qe(r,"background-color","black"),v(r,"width","800"),v(r,"height","600")},m(f,l){g(f,e,l),u(e,o),u(e,n),u(n,i),u(e,a),g(f,s,l),g(f,r,l)},p:ce,i:ce,o:ce,d(f){f&&c(e),f&&c(s),f&&c(r)}}}function wo(t){function e(){const o=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const r=s.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const m=be(r,[o,n]),_=be(r,[i,a]);if(!m||!_)throw"Can not create programs";const b={position:r.getAttribLocation(m,"position"),positionTex:r.getUniformLocation(m,"positionTex"),velocityTex:r.getUniformLocation(m,"velocityTex"),texDimensions:r.getUniformLocation(m,"texDimensions"),canvasDimensions:r.getUniformLocation(m,"canvasDimensions"),deltaTime:r.getUniformLocation(m,"deltaTime")},h={id:r.getAttribLocation(_,"id"),positionTex:r.getUniformLocation(_,"positionTex"),texDimensions:r.getUniformLocation(_,"texDimensions"),matrix:r.getUniformLocation(_,"matrix")},A=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,A),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const R=300,L=20,$=R*L,P=new Array($).fill(0).map((U,te)=>te),M=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,M),r.bufferData(r.ARRAY_BUFFER,new Float32Array(P),r.STATIC_DRAW),pe(r.canvas);const O=(U,te)=>(te===void 0&&(te=U,U=0),Math.random()*(te-U)+U),N=new Float32Array(P.map(U=>[O(s.width),O(s.height),0,0]).flat()),V=new Float32Array(P.map(U=>[O(-300,300),O(-300,300),0,0]).flat());function d(U,te,ne,ae){const Te=U.createTexture();return U.bindTexture(U.TEXTURE_2D,Te),U.texImage2D(U.TEXTURE_2D,0,U.RGBA,ne,ae,0,U.RGBA,U.FLOAT,te),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MAG_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_S,U.CLAMP_TO_EDGE),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_T,U.CLAMP_TO_EDGE),Te}const y=d(r,V,R,L),p=d(r,N,R,L),w=d(r,null,R,L);if(!p||!w)throw"Can not create position textures";function re(U,te){const ne=U.createFramebuffer();return U.bindFramebuffer(U.FRAMEBUFFER,ne),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,te,0),ne}const Q=re(r,p),S=re(r,w);let X={fb:Q,tex:p},J={fb:S,tex:w},G=0;function ue(U){if(!r)return;U*=.001;const te=U-G;G=U,pe(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,J.fb),r.viewport(0,0,R,L),r.bindBuffer(r.ARRAY_BUFFER,A),r.enableVertexAttribArray(b.position),r.vertexAttribPointer(b.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,X.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,y),r.useProgram(m),r.uniform1i(b.positionTex,0),r.uniform1i(b.velocityTex,1),r.uniform2f(b.texDimensions,R,L),r.uniform2f(b.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(b.deltaTime,te),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,M),r.enableVertexAttribArray(h.id),r.vertexAttribPointer(h.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,J.tex),r.useProgram(_),r.uniform2f(h.texDimensions,R,R),r.uniform1i(h.positionTex,0),r.uniformMatrix4fv(h.matrix,!1,Vn(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,$);{const ne=X;X=J,J=ne}requestAnimationFrame(ue)}requestAnimationFrame(ue)}return Be(()=>e()),[]}class Eo extends ge{constructor(e){super(),we(this,e,wo,go,Ee,{})}}const yt=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Ro(t,e,o,n){const i=t*e,a=new Array(i).fill(0).map((f,l)=>l),s=new Float32Array(a.map(f=>[yt(o),yt(n),0,0]).flat()),r=new Float32Array(a.map(f=>[yt(-300,300),yt(-300,300),0,0]).flat());return{numParticles:i,ids:new Float32Array(a),positions:s,velocities:r}}const Fo=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Do=`precision highp float;

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

`,Uo=`  attribute float id;
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

`,yo=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Lo(t){let e,o,n,i,a,s,r;return{c(){e=T("p"),o=B(`This is the simple particles simulation from
    `),n=T("a"),i=B("webglfundamentals"),a=B(" with the shader code extracted into separate files."),s=F(),r=T("canvas"),this.h()},l(f){e=x(f,"P",{});var l=E(e);o=I(l,`This is the simple particles simulation from
    `),n=x(l,"A",{target:!0,href:!0});var m=E(n);i=I(m,"webglfundamentals"),m.forEach(c),a=I(l," with the shader code extracted into separate files."),l.forEach(c),s=D(f),r=x(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(c),this.h()},h(){v(n,"target","none"),v(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),v(r,"id","canvas"),Qe(r,"background-color","black"),v(r,"width","800"),v(r,"height","600")},m(f,l){g(f,e,l),u(e,o),u(e,n),u(n,i),u(e,a),g(f,s,l),g(f,r,l)},p:ce,i:ce,o:ce,d(f){f&&c(e),f&&c(s),f&&c(r)}}}function Po(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const a=i.getContext("webgl");if(!a)throw"gl undefined";Gt(a);const s=be(a,[Fo,Do]),r=be(a,[Uo,yo]),f={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},l={id:a.getAttribLocation(r,"id"),positionTex:a.getUniformLocation(r,"positionTex"),texDimensions:a.getUniformLocation(r,"texDimensions"),matrix:a.getUniformLocation(r,"matrix")},m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const _=300,b=20,{numParticles:h,ids:A,positions:R,velocities:L}=Ro(_,b,i.width,i.height),$=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,$),a.bufferData(a.ARRAY_BUFFER,new Float32Array(A),a.STATIC_DRAW),pe(a.canvas);const P=ye(a,L,_,b),M=ye(a,R,_,b),O=ye(a,null,_,b),N=Pe(a,M),V=Pe(a,O);let d={fb:N,tex:M},y={fb:V,tex:O},p=0;function w(re){if(!a||!m||!$)throw"Undefined params to render";re*=.001;const Q=re-p;p=re,pe(a.canvas),n(a,y,_,b,m,f,d,P,s,Q),o(a,_,$,l,y,r,h);{const S=d;d=y,y=S}requestAnimationFrame(w)}requestAnimationFrame(w)}const o=(i,a,s,r,f,l,m)=>{i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(r.id),i.vertexAttribPointer(r.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,f.tex),i.useProgram(l),i.uniform2f(r.texDimensions,a,a),i.uniform1i(r.positionTex,0),i.uniformMatrix4fv(r.matrix,!1,Vn(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,m)},n=(i,a,s,r,f,l,m,_,b,h)=>{i.bindFramebuffer(i.FRAMEBUFFER,a.fb),i.viewport(0,0,s,r),i.bindBuffer(i.ARRAY_BUFFER,f),i.enableVertexAttribArray(l.position),i.vertexAttribPointer(l.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,m.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,_),i.useProgram(b),i.uniform1i(l.positionTex,0),i.uniform1i(l.velocityTex,1),i.uniform2f(l.texDimensions,s,r),i.uniform2f(l.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f(l.deltaTime,h),i.drawArrays(i.TRIANGLES,0,6)};return Be(()=>e()),[]}class Bo extends ge{constructor(e){super(),we(this,e,Po,Lo,Ee,{})}}const Io=`attribute vec2 a_position;

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
`,So=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Co(t){let e,o,n,i,a,s,r,f,l,m,_,b;return{c(){e=T("p"),o=B(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=T("code"),i=B("requestAnimationFrame"),a=B(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=F(),r=T("canvas"),f=F(),l=T("button"),m=B("Add position"),this.h()},l(h){e=x(h,"P",{});var A=E(e);o=I(A,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=x(A,"CODE",{});var R=E(n);i=I(R,"requestAnimationFrame"),R.forEach(c),a=I(A,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),A.forEach(c),s=D(h),r=x(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(c),f=D(h),l=x(h,"BUTTON",{});var L=E(l);m=I(L,"Add position"),L.forEach(c),this.h()},h(){v(r,"id","canvas"),Qe(r,"background-color","black"),v(r,"width","800"),v(r,"height","600")},m(h,A){g(h,e,A),u(e,o),u(e,n),u(n,i),u(e,a),g(h,s,A),g(h,r,A),g(h,f,A),g(h,l,A),u(l,m),_||(b=me(l,"click",t[1]),_=!0)},p:ce,i:ce,o:ce,d(h){h&&c(e),h&&c(s),h&&c(r),h&&c(f),h&&c(l),_=!1,b()}}}function Mo(t){const e=[50,50,50,150,150,150,150,50,200,200];function o(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Gt(s);const r=be(s,[Io,So]);pe(s.canvas);const f=s.getAttribLocation(r,"a_position"),l=s.getUniformLocation(r,"u_resolution"),m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function _(){if(!s)throw"Undefined params to render";for(let M=0;M<=e.length-2;M+=2)e[M]=(e[M]+Math.random()*2-1)%s.canvas.width,e[M+1]=(e[M+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),pe(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(r),s.uniform2f(l,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(f),s.bindBuffer(s.ARRAY_BUFFER,m);const b=2,h=s.FLOAT,A=!1,R=0,L=0;s.vertexAttribPointer(f,b,h,A,R,L);var $=s.POINTS,P=e.length/2;s.drawArrays($,L,P),requestAnimationFrame(_)}requestAnimationFrame(_)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Be(()=>o()),[n,()=>n()]}class No extends ge{constructor(e){super(),we(this,e,Mo,Co,Ee,{})}}const Oo=`attribute float id;
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
`,zo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let ht,vt;const Xo=t=>{vt=be(t,[Oo,zo]),ht={idAttributeLocation:t.getAttribLocation(vt,"id"),texDimensionsUniformLocation:t.getUniformLocation(vt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(vt,"u_resolution")}},ko=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;pe(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(vt),e.uniform2f(ht.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ht.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(ht.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,r=e.FLOAT,f=!1,l=0,m=0;e.vertexAttribPointer(ht.idAttributeLocation,s,r,f,l,m);const _=e.POINTS,b=i.length;e.drawArrays(_,m,b)};function Yo(t){let e,o,n,i,a,s,r;return{c(){e=T("p"),o=B("Create an array of render-size positions. Store this array in a texture. In each "),n=T("code"),i=B("requestAnimationFrame"),a=B(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=F(),r=T("canvas"),this.h()},l(f){e=x(f,"P",{});var l=E(e);o=I(l,"Create an array of render-size positions. Store this array in a texture. In each "),n=x(l,"CODE",{});var m=E(n);i=I(m,"requestAnimationFrame"),m.forEach(c),a=I(l,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),l.forEach(c),s=D(f),r=x(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(c),this.h()},h(){v(r,"id","canvas"),Qe(r,"background-color","black"),v(r,"width",Wn),v(r,"height",Gn)},m(f,l){g(f,e,l),u(e,o),u(e,n),u(n,i),u(e,a),g(f,s,l),g(f,r,l)},p:ce,i:ce,o:ce,d(f){f&&c(e),f&&c(s),f&&c(r)}}}const Wn=800,Gn=600;function Vo(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const n=o.getContext("webgl");if(!n)throw"gl undefined";Gt(n),pe(n.canvas),Xo(n);const i=[0,1,2,3,4,5,6,7,8,9],a=i.map(r=>[Math.random()*Wn,Math.random()*Gn,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let f=0;f<=a.length-2;f+=2)a[f]=(a[f]+Math.random()*2-1)%n.canvas.width,a[f+1]=(a[f+1]+Math.random()*0+1)%n.canvas.height;const r=ye(n,new Float32Array(a),3,3);ko({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:i}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Be(()=>e()),[]}let Wo=class extends ge{constructor(e){super(),we(this,e,Vo,Yo,Ee,{})}};const Go=`attribute float id;
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
`,qo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let _t,Tt,Zt;const Ho=(t,e)=>{Tt=be(t,[Go,qo]),_t={idAttributeLocation:t.getAttribLocation(Tt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Tt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Tt,"u_resolution")},Zt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Zt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},jo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Zt),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(Tt),e.uniform2f(_t.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(_t.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(_t.idAttributeLocation);const a=1,s=e.FLOAT,r=!1,f=0,l=0;e.vertexAttribPointer(_t.idAttributeLocation,a,s,r,f,l),e.drawArrays(e.POINTS,l,i.length)};function Ko(t,e){const o=new Array(t).fill(0).map((a,s)=>s),n=o.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),i={width:o.length,height:1};return{ids:o,positions:n,texDimensions:i}}const Qo=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Jo=`precision highp float;

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

`;let ft,ct,en,qt,Ht,Rn,Fn,xt,Ct;const Zo=(t,e)=>{const{positions:o,texDimensions:n}=e;ct=be(t,[Qo,Jo]),ft={positionAttributeLocation:t.getAttribLocation(ct,"position"),positionTexLocation:t.getUniformLocation(ct,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(ct,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ct,"u_resolution")},en=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,en),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),qt=ye(t,new Float32Array(o),n.width,n.height),Ht=ye(t,null,n.width,n.height),Rn=Pe(t,qt),Fn=Pe(t,Ht),xt={fb:Rn,tex:qt},Ct={fb:Fn,tex:Ht}},ei=t=>{const{gl:e,texDimensions:o}=t;e.bindFramebuffer(e.FRAMEBUFFER,Ct.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,en),e.enableVertexAttribArray(ft.positionAttributeLocation),e.vertexAttribPointer(ft.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,xt.tex),e.useProgram(ct),e.uniform1i(ft.positionTexLocation,0),e.uniform2f(ft.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ft.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=xt;xt=Ct,Ct=n}return xt.tex};function ti(t){let e,o,n,i,a,s,r,f,l,m,_,b,h;return{c(){e=T("p"),o=B("Create an array of render-size positions. Store this array in a texture."),n=F(),i=T("p"),a=B("Create 2 textures which will be used to update the positions with a shader. In each "),s=T("code"),r=B("requestAnimationFrame"),f=B(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),l=F(),m=T("p"),_=B("Finally switch the two textures to read and write in the updated textures"),b=F(),h=T("canvas"),this.h()},l(A){e=x(A,"P",{});var R=E(e);o=I(R,"Create an array of render-size positions. Store this array in a texture."),R.forEach(c),n=D(A),i=x(A,"P",{});var L=E(i);a=I(L,"Create 2 textures which will be used to update the positions with a shader. In each "),s=x(L,"CODE",{});var $=E(s);r=I($,"requestAnimationFrame"),$.forEach(c),f=I(L,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),L.forEach(c),l=D(A),m=x(A,"P",{});var P=E(m);_=I(P,"Finally switch the two textures to read and write in the updated textures"),P.forEach(c),b=D(A),h=x(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(h).forEach(c),this.h()},h(){v(h,"id","canvas"),Qe(h,"background-color","black"),v(h,"width",qn),v(h,"height",Hn)},m(A,R){g(A,e,R),u(e,o),g(A,n,R),g(A,i,R),u(i,a),u(i,s),u(s,r),u(i,f),g(A,l,R),g(A,m,R),u(m,_),g(A,b,R),g(A,h,R)},p:ce,i:ce,o:ce,d(A){A&&c(e),A&&c(n),A&&c(i),A&&c(l),A&&c(m),A&&c(b),A&&c(h)}}}const qn=800,Hn=600;function ni(t){function e(){const o=Et();pe(o.canvas);const{ids:n,positions:i,texDimensions:a}=Ko(100,{width:qn,height:Hn});Ho(o,n),Zo(o,{positions:i,texDimensions:a});function s(){pe(o.canvas);const r=ei({gl:o,texDimensions:a});jo({gl:o,positionTex:r,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Be(()=>e()),[]}let oi=class extends ge{constructor(e){super(),we(this,e,ni,ti,Ee,{})}};const ii=`attribute float id;
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
`,ri=`precision mediump float;
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
`;let ot,ut,tn,nn;const ai=(t,e)=>{const{ids:o,colors:n}=e;ut=be(t,[ii,ri]),ot={idAttributeLocation:t.getAttribLocation(ut,"id"),colorAttributeLocation:t.getAttribLocation(ut,"color"),texDimensionsUniformLocation:t.getUniformLocation(ut,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ut,"u_resolution")},tn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,tn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},si=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,f=0,l=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,tn),e.vertexAttribPointer(ot.idAttributeLocation,a,s,r,f,l),e.enableVertexAttribArray(ot.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,nn),e.vertexAttribPointer(ot.colorAttributeLocation,a,s,r,f,l),e.enableVertexAttribArray(ot.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(ut),e.uniform2f(ot.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ot.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,i.length)};function li(t,e){const o=t.width*t.height,n=new Array(o).fill(0).map((s,r)=>r),i=new Array(o).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:f,y:l}=fi(e,20);return[f,l,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:i}}const fi=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},ci=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ui=`precision highp float;

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

`;let it,rt,on,Lt,jt,Dn,Un,$t,Mt,Pt;const mi=(t,e)=>{const{positions:o,texDimensions:n}=e;return rt=be(t,[ci,ui]),it={positionAttributeLocation:t.getAttribLocation(rt,"position"),positionTexLocation:t.getUniformLocation(rt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(rt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(rt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(rt,"u_resolution")},on=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,on),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Lt=ye(t,new Float32Array(o),n.width,n.height),jt=ye(t,null,n.width,n.height),Dn=Pe(t,Lt),Un=Pe(t,jt),$t={fb:Dn,tex:Lt},Mt={fb:Un,tex:jt},Lt},di=t=>{const{gl:e,texDimensions:o}=t,n=Date.now();Pt||(Pt=n-1);const i=n-Pt;Pt=n,e.bindFramebuffer(e.FRAMEBUFFER,Mt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,on),e.enableVertexAttribArray(it.positionAttributeLocation),e.vertexAttribPointer(it.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,$t.tex),e.useProgram(rt),e.uniform1i(it.positionTexLocation,0),e.uniform1f(it.deltaTimeUniformLocation,i),e.uniform2f(it.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(it.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=$t;$t=Mt,Mt=a}return $t.tex};function pi(t){let e,o,n,i,a,s,r,f,l,m,_=t[2]?"Play":"Pause",b,h,A,R=t[1]?"Normal Speed":"Slow Mo",L,$,P,M,O=t[4].width*t[4].height+"",N,V,d,y,p,w,re,Q;return{c(){e=T("p"),o=B("Same principle with a shader to update positions and a shader to draw particles."),n=F(),i=T("p"),a=B(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=F(),r=T("canvas"),f=F(),l=T("div"),m=T("button"),b=B(_),h=F(),A=T("button"),L=B(R),$=F(),P=T("span"),M=B("particles: "),N=B(O),V=F(),d=T("label"),y=B("Smooth steps"),p=F(),w=T("input"),this.h()},l(S){e=x(S,"P",{});var X=E(e);o=I(X,"Same principle with a shader to update positions and a shader to draw particles."),X.forEach(c),n=D(S),i=x(S,"P",{});var J=E(i);a=I(J,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),J.forEach(c),s=D(S),r=x(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(c),f=D(S),l=x(S,"DIV",{});var G=E(l);m=x(G,"BUTTON",{});var ue=E(m);b=I(ue,_),ue.forEach(c),h=D(G),A=x(G,"BUTTON",{});var U=E(A);L=I(U,R),U.forEach(c),$=D(G),P=x(G,"SPAN",{});var te=E(P);M=I(te,"particles: "),N=I(te,O),te.forEach(c),V=D(G),d=x(G,"LABEL",{for:!0});var ne=E(d);y=I(ne,"Smooth steps"),ne.forEach(c),p=D(G),w=x(G,"INPUT",{type:!0,min:!0}),G.forEach(c),this.h()},h(){v(r,"id","canvas"),Qe(r,"background-color","black"),v(r,"width",t[3].width),v(r,"height",t[3].height),v(d,"for","steps"),v(w,"type","number"),v(w,"min",0)},m(S,X){g(S,e,X),u(e,o),g(S,n,X),g(S,i,X),u(i,a),g(S,s,X),g(S,r,X),g(S,f,X),g(S,l,X),u(l,m),u(m,b),u(l,h),u(l,A),u(A,L),u(l,$),u(l,P),u(P,M),u(P,N),u(l,V),u(l,d),u(d,y),u(l,p),u(l,w),oe(w,t[0]),re||(Q=[me(m,"click",t[5]),me(A,"click",t[6]),me(w,"input",t[7])],re=!0)},p(S,[X]){X&4&&_!==(_=S[2]?"Play":"Pause")&&et(b,_),X&2&&R!==(R=S[1]?"Normal Speed":"Slow Mo")&&et(L,R),X&1&&ie(w.value)!==S[0]&&oe(w,S[0])},i:ce,o:ce,d(S){S&&c(e),S&&c(n),S&&c(i),S&&c(s),S&&c(r),S&&c(f),S&&c(l),re=!1,Wt(Q)}}}function hi(t,e,o){const n={width:800,height:600},i={width:100,height:100};let a=1,s=!1,r=!0;function f(){const b=Et();pe(b.canvas);const{ids:h,positions:A,colors:R}=li(i,{width:n.width,height:n.height});ai(b,{ids:h,colors:R,texDimensions:i});let L=mi(b,{positions:A,texDimensions:i});function $(){if(pe(b.canvas),!r)for(let P=0;P<a;P++)L=di({gl:b,texDimensions:i});return si({gl:b,positionTex:L,textureDimension:i,ids:h}),r?requestAnimationFrame($):s?setTimeout(()=>requestAnimationFrame($),1e3):requestAnimationFrame($)}requestAnimationFrame($)}Be(()=>f());const l=()=>o(2,r=!r),m=()=>o(1,s=!s);function _(){a=ie(this.value),o(0,a)}return[a,s,r,n,i,l,m,_]}class vi extends ge{constructor(e){super(),we(this,e,hi,pi,Ee,{})}}const _i=`attribute float id;
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
`,Ti=`precision mediump float;
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
`;let at,mt,rn,an;const xi=(t,e)=>{const{ids:o,colors:n}=e;mt=be(t,[_i,Ti]),at={idAttributeLocation:t.getAttribLocation(mt,"id"),colorAttributeLocation:t.getAttribLocation(mt,"color"),texDimensionsUniformLocation:t.getUniformLocation(mt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(mt,"u_resolution")},rn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,rn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),an=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,an),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},$i=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,f=0,l=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,rn),e.vertexAttribPointer(at.idAttributeLocation,a,s,r,f,l),e.enableVertexAttribArray(at.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,an),e.vertexAttribPointer(at.colorAttributeLocation,a,s,r,f,l),e.enableVertexAttribArray(at.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(mt),e.uniform2f(at.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(at.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,i.length)};function Ai(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((f,l)=>l),s=new Array(i).fill(0).map(f=>Math.floor(Math.random()*4)),r=a.map(f=>{if(n==="disk"){const{x:m,y:_}=gi(o,20);return[m,_,0,0]}if(n==="square"){const{x:m,y:_}=bi(o,550);return[m,_,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=wi(o,f,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=yn(o,f,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=yn(o,f,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const bi=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},gi=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},wi=(t,e,o)=>{const n=sn(e,0,o,0,t.width,!1),i=sn(e,0,o,0,t.height,!1);return{x:n,y:i}},yn=(t,e,o,n)=>{const i=sn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,f=n.y,m=Math.sin(f*i)*200+t.height/2;return{x:r,y:m}},sn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?Ln(s,n,i):Ln(s,i,n):s},Ln=function(t,e,o){return Math.max(Math.min(t,o),e)},Ei=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Ri=`precision highp float;

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

`;let We,Ge,ln,Bt,Kt,Pn,Bn,At,Nt;const Fi=(t,e)=>{const{positions:o,texDimensions:n}=e;return Ge=be(t,[Ei,Ri]),We={positionAttributeLocation:t.getAttribLocation(Ge,"position"),positionTexLocation:t.getUniformLocation(Ge,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ge,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ge,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ge,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ge,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ge,"u_resolution")},ln=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ln),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Bt=ye(t,new Float32Array(o),n.width,n.height),Kt=ye(t,null,n.width,n.height),Pn=Pe(t,Bt),Bn=Pe(t,Kt),At={fb:Pn,tex:Bt},Nt={fb:Bn,tex:Kt},Bt},Di=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Nt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,ln),e.enableVertexAttribArray(We.positionAttributeLocation),e.vertexAttribPointer(We.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,At.tex),e.useProgram(Ge),e.uniform1i(We.positionTexLocation,0),e.uniform1f(We.dragUniformLocation,i),e.uniform1f(We.interactionRangeUniformLocation,n),e.uniform1f(We.deltaTimeUniformLocation,a),e.uniform2f(We.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(We.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=At;At=Nt,Nt=s}return At.tex};function Ui(t){let e,o,n,i,a,s,r,f,l,m,_=t[2]?"Play":"Pause",b,h,A,R=t[1]?"Normal Speed":"Slow Mo",L,$,P,M,O=t[5].width*t[5].height+"",N,V,d,y,p,w,re,Q,S,X,J,G,ue,U,te,ne,ae,Te,Re,se,Ie,_e,de,Se,Fe,le,Ce,ve,he,ze;return{c(){e=T("p"),o=B("Same principle with a shader to update positions and a shader to draw particles."),n=F(),i=T("p"),a=B(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=F(),r=T("canvas"),f=F(),l=T("div"),m=T("button"),b=B(_),h=F(),A=T("button"),L=B(R),$=F(),P=T("span"),M=B("particles: "),N=B(O),V=F(),d=T("label"),y=B("Smooth steps"),p=F(),w=T("input"),re=F(),Q=T("div"),S=T("ul"),X=T("li"),J=T("label"),G=B("Interaction Range"),ue=F(),U=T("input"),te=F(),ne=T("li"),ae=T("label"),Te=B("Drag"),Re=F(),se=T("input"),Ie=F(),_e=T("li"),de=T("label"),Se=B("Time step"),Fe=F(),le=T("input"),Ce=F(),ve=T("ul"),this.h()},l(z){e=x(z,"P",{});var Z=E(e);o=I(Z,"Same principle with a shader to update positions and a shader to draw particles."),Z.forEach(c),n=D(z),i=x(z,"P",{});var ke=E(i);a=I(ke,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ke.forEach(c),s=D(z),r=x(z,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(c),f=D(z),l=x(z,"DIV",{});var C=E(l);m=x(C,"BUTTON",{});var fe=E(m);b=I(fe,_),fe.forEach(c),h=D(C),A=x(C,"BUTTON",{});var Ye=E(A);L=I(Ye,R),Ye.forEach(c),$=D(C),P=x(C,"SPAN",{});var xe=E(P);M=I(xe,"particles: "),N=I(xe,O),xe.forEach(c),V=D(C),d=x(C,"LABEL",{for:!0});var $e=E(d);y=I($e,"Smooth steps"),$e.forEach(c),p=D(C),w=x(C,"INPUT",{type:!0,min:!0}),C.forEach(c),re=D(z),Q=x(z,"DIV",{});var Xe=E(Q);S=x(Xe,"UL",{});var De=E(S);X=x(De,"LI",{});var Me=E(X);J=x(Me,"LABEL",{for:!0});var W=E(J);G=I(W,"Interaction Range"),W.forEach(c),ue=D(Me),U=x(Me,"INPUT",{id:!0,type:!0,min:!0}),Me.forEach(c),te=D(De),ne=x(De,"LI",{});var ee=E(ne);ae=x(ee,"LABEL",{for:!0});var Ue=E(ae);Te=I(Ue,"Drag"),Ue.forEach(c),Re=D(ee),se=x(ee,"INPUT",{id:!0,type:!0,min:!0}),ee.forEach(c),Ie=D(De),_e=x(De,"LI",{});var Le=E(_e);de=x(Le,"LABEL",{for:!0});var Ve=E(de);Se=I(Ve,"Time step"),Ve.forEach(c),Fe=D(Le),le=x(Le,"INPUT",{id:!0,type:!0,min:!0}),Le.forEach(c),Ce=D(De),ve=x(De,"UL",{}),E(ve).forEach(c),De.forEach(c),Xe.forEach(c),this.h()},h(){v(r,"id","canvas"),Qe(r,"background-color","black"),v(r,"width",t[4].width),v(r,"height",t[4].height),v(d,"for","steps"),v(w,"type","number"),v(w,"min",0),v(J,"for","interactionRange"),v(U,"id","interactionRange"),v(U,"type","number"),v(U,"min",0),v(ae,"for","drag"),v(se,"id","drag"),v(se,"type","number"),v(se,"min",0),v(de,"for","deltaTime"),v(le,"id","deltaTime"),v(le,"type","number"),v(le,"min",0)},m(z,Z){g(z,e,Z),u(e,o),g(z,n,Z),g(z,i,Z),u(i,a),g(z,s,Z),g(z,r,Z),g(z,f,Z),g(z,l,Z),u(l,m),u(m,b),u(l,h),u(l,A),u(A,L),u(l,$),u(l,P),u(P,M),u(P,N),u(l,V),u(l,d),u(d,y),u(l,p),u(l,w),oe(w,t[0]),g(z,re,Z),g(z,Q,Z),u(Q,S),u(S,X),u(X,J),u(J,G),u(X,ue),u(X,U),oe(U,t[3].interactionRange),u(S,te),u(S,ne),u(ne,ae),u(ae,Te),u(ne,Re),u(ne,se),oe(se,t[3].drag),u(S,Ie),u(S,_e),u(_e,de),u(de,Se),u(_e,Fe),u(_e,le),oe(le,t[3].timeStep),u(S,Ce),u(S,ve),he||(ze=[me(m,"click",t[6]),me(A,"click",t[7]),me(w,"input",t[8]),me(U,"input",t[9]),me(se,"input",t[10]),me(le,"input",t[11])],he=!0)},p(z,[Z]){Z&4&&_!==(_=z[2]?"Play":"Pause")&&et(b,_),Z&2&&R!==(R=z[1]?"Normal Speed":"Slow Mo")&&et(L,R),Z&1&&ie(w.value)!==z[0]&&oe(w,z[0]),Z&8&&ie(U.value)!==z[3].interactionRange&&oe(U,z[3].interactionRange),Z&8&&ie(se.value)!==z[3].drag&&oe(se,z[3].drag),Z&8&&ie(le.value)!==z[3].timeStep&&oe(le,z[3].timeStep)},i:ce,o:ce,d(z){z&&c(e),z&&c(n),z&&c(i),z&&c(s),z&&c(r),z&&c(f),z&&c(l),z&&c(re),z&&c(Q),he=!1,Wt(ze)}}}function yi(t,e,o){const n={width:800,height:600},i={width:10,height:10};let a=1,s=!1,r=!0;const f={interactionRange:70,drag:1e3,timeStep:10};function l(){const L=Et();pe(L.canvas);const{ids:$,positions:P,colors:M}=Ai({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"circle"});xi(L,{ids:$,colors:M,texDimensions:i});let O=Fi(L,{positions:P,texDimensions:i});function N(){if(pe(L.canvas),!r)for(let V=0;V<a;V++)O=Di({gl:L,texDimensions:i,interactionRange:f.interactionRange,drag:f.drag,deltaTime:f.timeStep});return $i({gl:L,positionTex:O,textureDimension:i,ids:$}),r?requestAnimationFrame(N):s?setTimeout(()=>requestAnimationFrame(N),1e3):requestAnimationFrame(N)}requestAnimationFrame(N)}Be(()=>l());const m=()=>o(2,r=!r),_=()=>o(1,s=!s);function b(){a=ie(this.value),o(0,a)}function h(){f.interactionRange=ie(this.value),o(3,f)}function A(){f.drag=ie(this.value),o(3,f)}function R(){f.timeStep=ie(this.value),o(3,f)}return[a,s,r,f,n,i,m,_,b,h,A,R]}class Li extends ge{constructor(e){super(),we(this,e,yi,Ui,Ee,{})}}const Pi=`attribute float id;
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
`,Bi=`precision mediump float;
varying float v_color;
varying float v_id;

void main() {
    // if (v_id < 0.1) {
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    //     return;
    // }
    // if (v_id > 0.45 && v_id < 0.55) {
    //     gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
    //     return;
    // }
    // if (v_id > 0.9) {
    //     gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    //     return;
    // }
    gl_FragColor = vec4(0.2, 0.2, v_id, 1.0);
    gl_FragColor = vec4(0.2, 0.2, 1.0, 1.0);

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
`;let st,dt,fn,cn;const Ii=(t,e)=>{const{ids:o,colors:n}=e;dt=be(t,[Pi,Bi]),st={idAttributeLocation:t.getAttribLocation(dt,"id"),colorAttributeLocation:t.getAttribLocation(dt,"color"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},fn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,fn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),cn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,cn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Si=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,f=0,l=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,fn),e.vertexAttribPointer(st.idAttributeLocation,a,s,r,f,l),e.enableVertexAttribArray(st.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,cn),e.vertexAttribPointer(st.colorAttributeLocation,a,s,r,f,l),e.enableVertexAttribArray(st.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(dt),e.uniform2f(st.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(st.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,i.length)};function Ci(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((f,l)=>l),s=new Array(i).fill(0).map(f=>Math.floor(Math.random()*4)),r=a.map(f=>{if(n==="random"){const{x:l,y:m}=Mi(o);return[l,m,0,0]}if(n==="disk"){const{x:m,y:_}=Oi(o,200);return[m,_,0,0]}if(n==="square"){const{x:m,y:_}=Ni(o,300);return[m,_,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=zi(o,f,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=In(o,f,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=In(o,f,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Mi=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Ni=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Oi=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},zi=(t,e,o)=>{const n=un(e,0,o,0,t.width,!1),i=un(e,0,o,0,t.height,!1);return{x:n,y:i}},In=(t,e,o,n)=>{const i=un(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,f=n.y,m=Math.sin(f*i)*200+t.height/2;return{x:r,y:m}},un=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?Sn(s,n,i):Sn(s,i,n):s},Sn=function(t,e,o){return Math.max(Math.min(t,o),e)},Xi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ki=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 u_resolution;
uniform float interactionRange;
uniform float deltaTime;
uniform float drag;

// We need to define the texture dimensions in constants
// because loops work only with constant values
const float texWidth = {{TEX_WIDTH}};
const float texHeight = {{TEX_HEIGHT}};

const vec2 gravity = vec2(0.0, 0.5);

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

float euclideanModulo(float n, float m) {
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
    direction = direction + gravity;

    vec2 newPosition = position + direction;
    newPosition.x = euclideanModulo(position.x + direction.x, u_resolution.x);

    if (newPosition.y >= u_resolution.y - 5.0) {
        newPosition.y = u_resolution.y - 7.0;
    }

    // if (newPosition.x >= u_resolution.x - 5.0) {
    //     newPosition.x = u_resolution.x - 7.0;
    // }

    // if (newPosition.x <  5.0) {
    //     newPosition.x = 7.0;
    // }

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let qe,He,mn,It,Qt,Cn,Mn,bt,Ot;const Yi=(t,e)=>{const{positions:o,texDimensions:n}=e,i=ki.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return He=be(t,[Xi,i]),qe={positionAttributeLocation:t.getAttribLocation(He,"position"),positionTexLocation:t.getUniformLocation(He,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(He,"interactionRange"),dragUniformLocation:t.getUniformLocation(He,"drag"),deltaTimeUniformLocation:t.getUniformLocation(He,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(He,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(He,"u_resolution")},mn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,mn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),It=ye(t,new Float32Array(o),n.width,n.height),Qt=ye(t,null,n.width,n.height),Cn=Pe(t,It),Mn=Pe(t,Qt),bt={fb:Cn,tex:It},Ot={fb:Mn,tex:Qt},It},Vi=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Ot.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,mn),e.enableVertexAttribArray(qe.positionAttributeLocation),e.vertexAttribPointer(qe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,bt.tex),e.useProgram(He),e.uniform1i(qe.positionTexLocation,0),e.uniform1f(qe.dragUniformLocation,i),e.uniform1f(qe.interactionRangeUniformLocation,n),e.uniform1f(qe.deltaTimeUniformLocation,a),e.uniform2f(qe.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(qe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=bt;bt=Ot,Ot=s}return bt.tex};function Wi(t){let e,o,n,i,a,s,r,f,l,m,_,b,h,A=t[2]?"Play":"Pause",R,L,$,P=t[1]?"Normal Speed":"Slow Mo",M,O,N,V,d=t[5].width*t[5].height+"",y,p,w,re,Q,S,X,J,G,ue,U,te,ne,ae,Te,Re,se,Ie,_e,de,Se,Fe,le,Ce,ve,he,ze,z,Z,ke;return{c(){e=T("p"),o=B("This could be a kind of water simulation."),n=F(),i=T("p"),a=B(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),s=F(),r=T("p"),f=B("For now creating vertical walls create a bug so we warp the horizontal coordinates."),l=F(),m=T("canvas"),_=F(),b=T("div"),h=T("button"),R=B(A),L=F(),$=T("button"),M=B(P),O=F(),N=T("span"),V=B("particles: "),y=B(d),p=F(),w=T("label"),re=B("Smooth steps"),Q=F(),S=T("input"),X=F(),J=T("div"),G=T("ul"),ue=T("li"),U=T("label"),te=B("Interaction Range"),ne=F(),ae=T("input"),Te=F(),Re=T("li"),se=T("label"),Ie=B("Drag"),_e=F(),de=T("input"),Se=F(),Fe=T("li"),le=T("label"),Ce=B("Time step"),ve=F(),he=T("input"),ze=F(),z=T("ul"),this.h()},l(C){e=x(C,"P",{});var fe=E(e);o=I(fe,"This could be a kind of water simulation."),fe.forEach(c),n=D(C),i=x(C,"P",{});var Ye=E(i);a=I(Ye,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Ye.forEach(c),s=D(C),r=x(C,"P",{});var xe=E(r);f=I(xe,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),xe.forEach(c),l=D(C),m=x(C,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(m).forEach(c),_=D(C),b=x(C,"DIV",{});var $e=E(b);h=x($e,"BUTTON",{});var Xe=E(h);R=I(Xe,A),Xe.forEach(c),L=D($e),$=x($e,"BUTTON",{});var De=E($);M=I(De,P),De.forEach(c),O=D($e),N=x($e,"SPAN",{});var Me=E(N);V=I(Me,"particles: "),y=I(Me,d),Me.forEach(c),p=D($e),w=x($e,"LABEL",{for:!0});var W=E(w);re=I(W,"Smooth steps"),W.forEach(c),Q=D($e),S=x($e,"INPUT",{type:!0,min:!0}),$e.forEach(c),X=D(C),J=x(C,"DIV",{});var ee=E(J);G=x(ee,"UL",{});var Ue=E(G);ue=x(Ue,"LI",{});var Le=E(ue);U=x(Le,"LABEL",{for:!0});var Ve=E(U);te=I(Ve,"Interaction Range"),Ve.forEach(c),ne=D(Le),ae=x(Le,"INPUT",{id:!0,type:!0,min:!0}),Le.forEach(c),Te=D(Ue),Re=x(Ue,"LI",{});var tt=E(Re);se=x(tt,"LABEL",{for:!0});var pt=E(se);Ie=I(pt,"Drag"),pt.forEach(c),_e=D(tt),de=x(tt,"INPUT",{id:!0,type:!0,min:!0}),tt.forEach(c),Se=D(Ue),Fe=x(Ue,"LI",{});var Ae=E(Fe);le=x(Ae,"LABEL",{for:!0});var nt=E(le);Ce=I(nt,"Time step"),nt.forEach(c),ve=D(Ae),he=x(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(c),ze=D(Ue),z=x(Ue,"UL",{}),E(z).forEach(c),Ue.forEach(c),ee.forEach(c),this.h()},h(){v(m,"id","canvas"),Qe(m,"background-color","black"),v(m,"width",t[4].width),v(m,"height",t[4].height),v(w,"for","steps"),v(S,"type","number"),v(S,"min",0),v(U,"for","interactionRange"),v(ae,"id","interactionRange"),v(ae,"type","number"),v(ae,"min",0),v(se,"for","drag"),v(de,"id","drag"),v(de,"type","number"),v(de,"min",0),v(le,"for","deltaTime"),v(he,"id","deltaTime"),v(he,"type","number"),v(he,"min",0)},m(C,fe){g(C,e,fe),u(e,o),g(C,n,fe),g(C,i,fe),u(i,a),g(C,s,fe),g(C,r,fe),u(r,f),g(C,l,fe),g(C,m,fe),g(C,_,fe),g(C,b,fe),u(b,h),u(h,R),u(b,L),u(b,$),u($,M),u(b,O),u(b,N),u(N,V),u(N,y),u(b,p),u(b,w),u(w,re),u(b,Q),u(b,S),oe(S,t[0]),g(C,X,fe),g(C,J,fe),u(J,G),u(G,ue),u(ue,U),u(U,te),u(ue,ne),u(ue,ae),oe(ae,t[3].interactionRange),u(G,Te),u(G,Re),u(Re,se),u(se,Ie),u(Re,_e),u(Re,de),oe(de,t[3].drag),u(G,Se),u(G,Fe),u(Fe,le),u(le,Ce),u(Fe,ve),u(Fe,he),oe(he,t[3].timeStep),u(G,ze),u(G,z),Z||(ke=[me(h,"click",t[6]),me($,"click",t[7]),me(S,"input",t[8]),me(ae,"input",t[9]),me(de,"input",t[10]),me(he,"input",t[11])],Z=!0)},p(C,[fe]){fe&4&&A!==(A=C[2]?"Play":"Pause")&&et(R,A),fe&2&&P!==(P=C[1]?"Normal Speed":"Slow Mo")&&et(M,P),fe&1&&ie(S.value)!==C[0]&&oe(S,C[0]),fe&8&&ie(ae.value)!==C[3].interactionRange&&oe(ae,C[3].interactionRange),fe&8&&ie(de.value)!==C[3].drag&&oe(de,C[3].drag),fe&8&&ie(he.value)!==C[3].timeStep&&oe(he,C[3].timeStep)},i:ce,o:ce,d(C){C&&c(e),C&&c(n),C&&c(i),C&&c(s),C&&c(r),C&&c(l),C&&c(m),C&&c(_),C&&c(b),C&&c(X),C&&c(J),Z=!1,Wt(ke)}}}function Gi(t,e,o){const n={width:800,height:600},i={width:500,height:20};let a=1,s=!1,r=!0;const f={interactionRange:6,drag:5,timeStep:10};function l(){const L=Et();pe(L.canvas);const{ids:$,positions:P,colors:M}=Ci({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Ii(L,{ids:$,colors:M,texDimensions:i});let O=Yi(L,{positions:P,texDimensions:i});function N(){if(pe(L.canvas),!r)for(let V=0;V<a;V++)O=Vi({gl:L,texDimensions:i,interactionRange:f.interactionRange,drag:f.drag,deltaTime:f.timeStep});return Si({gl:L,positionTex:O,textureDimension:i,ids:$}),r?requestAnimationFrame(N):s?setTimeout(()=>requestAnimationFrame(N),1e3):requestAnimationFrame(N)}requestAnimationFrame(N)}Be(()=>l());const m=()=>o(2,r=!r),_=()=>o(1,s=!s);function b(){a=ie(this.value),o(0,a)}function h(){f.interactionRange=ie(this.value),o(3,f)}function A(){f.drag=ie(this.value),o(3,f)}function R(){f.timeStep=ie(this.value),o(3,f)}return[a,s,r,f,n,i,m,_,b,h,A,R]}class qi extends ge{constructor(e){super(),we(this,e,Gi,Wi,Ee,{})}}const Hi=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 worldDimensions;
uniform float size;


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
    vec2 zeroToOne = position / worldDimensions;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // Translate to have 0, 0 on top left
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = size;
    v_color = color;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,ji=`precision mediump float;
varying float v_color;
varying float v_id;

const float u_radius = 0.5; // The radius of the particles

void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5)); // Calculate the distance to the center
    if (dist > u_radius) { // If outside the circle, discard the fragment
        discard;
    }
    gl_FragColor = vec4(0.2, 0.2, 1.0, 0.4);
}
`;let Ze,lt,dn,pn;const Ki=(t,e)=>{const{ids:o,colors:n}=e;lt=be(t,[Hi,ji]),Ze={idAttributeLocation:t.getAttribLocation(lt,"id"),colorAttributeLocation:t.getAttribLocation(lt,"color"),sizeUniformLocation:t.getUniformLocation(lt,"size"),texDimensionsUniformLocation:t.getUniformLocation(lt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(lt,"worldDimensions")},dn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,dn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),pn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,pn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Qi=t=>{const{gl:e,positionTex:o,texDimensions:n,worldDimensions:i,particlesSize:a,ids:s}=t,r=1,f=e.FLOAT,l=!1,m=0,_=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,dn),e.vertexAttribPointer(Ze.idAttributeLocation,r,f,l,m,_),e.enableVertexAttribArray(Ze.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,pn),e.vertexAttribPointer(Ze.colorAttributeLocation,r,f,l,m,_),e.enableVertexAttribArray(Ze.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(lt),e.uniform1f(Ze.sizeUniformLocation,a),e.uniform2f(Ze.worldDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ze.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,_,s.length)};function Ji(t){const{texDimensions:e,worldDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((f,l)=>l),s=new Array(i).fill(0).map(f=>Math.floor(Math.random()*4)),r=a.map(f=>{if(n==="random"){const{x:l,y:m}=Zi(o);return[l,m,0,0]}if(n==="disk"){const{x:m,y:_}=tr(o,200);return[m,_,0,0]}if(n==="square"){const{x:m,y:_}=er(o,300);return[m,_,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=nr(o,f,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=Nn(o,f,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=Nn(o,f,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Zi=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},er=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},tr=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},nr=(t,e,o)=>{const n=hn(e,0,o,0,t.width,!1),i=hn(e,0,o,0,t.height,!1);return{x:n,y:i}},Nn=(t,e,o,n)=>{const i=hn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,f=n.y,m=Math.sin(f*i)*200+t.height/2;return{x:r,y:m}},hn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?On(s,n,i):On(s,i,n):s},On=function(t,e,o){return Math.max(Math.min(t,o),e)},or=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ir=`precision highp float;

uniform sampler2D positionTex;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;
uniform float interactionRange;
uniform float deltaTime;
uniform float drag;

// We need to define the texture dimensions in constants
// because loops work only with constant values
const float texWidth = {{TEX_WIDTH}};
const float texHeight = {{TEX_HEIGHT}};

const vec2 gravity = vec2(0.0, 0.5);

vec2 euclideanModulo(vec2 n, vec2 m) {
    return mod(mod(n, m) + m, m);
}

float euclideanModulo(float n, float m) {
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
    direction = direction + gravity;

    vec2 newPosition = position + direction;
    newPosition.x = euclideanModulo(position.x + direction.x, worldDimensions.x);

    if (newPosition.y >= worldDimensions.y - 5.0) {
        newPosition.y = worldDimensions.y - 7.0;
    }

    // if (newPosition.x >= worldDimensions.x - 5.0) {
    //     newPosition.x = worldDimensions.x - 7.0;
    // }

    // if (newPosition.x <  5.0) {
    //     newPosition.x = 7.0;
    // }

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let je,Ke,vn,St,Jt,zn,Xn,gt,zt;const rr=(t,e)=>{const{positions:o,texDimensions:n}=e,i=ir.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return Ke=be(t,[or,i]),je={positionAttributeLocation:t.getAttribLocation(Ke,"position"),positionTexLocation:t.getUniformLocation(Ke,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ke,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ke,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ke,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ke,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Ke,"worldDimensions")},vn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,vn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),St=ye(t,new Float32Array(o),n.width,n.height),Jt=ye(t,null,n.width,n.height),zn=Pe(t,St),Xn=Pe(t,Jt),gt={fb:zn,tex:St},zt={fb:Xn,tex:Jt},St},ar=t=>{const{gl:e,texDimensions:o,worldDimensions:n,interactionRange:i,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,zt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,vn),e.enableVertexAttribArray(je.positionAttributeLocation),e.vertexAttribPointer(je.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,gt.tex),e.useProgram(Ke),e.uniform1i(je.positionTexLocation,0),e.uniform1f(je.dragUniformLocation,a),e.uniform1f(je.interactionRangeUniformLocation,i),e.uniform1f(je.deltaTimeUniformLocation,s),e.uniform2f(je.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(je.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=gt;gt=zt,zt=r}return gt.tex};function sr(t){let e,o,n,i,a=t[3]?"Play":"Pause",s,r,f,l=t[2]?"Normal Speed":"Slow Mo",m,_,b,h,A=t[6].width*t[6].height+"",R,L,$,P,M,O,N,V,d,y,p,w,re,Q,S,X,J,G,ue,U,te,ne,ae,Te,Re,se,Ie,_e,de,Se,Fe,le,Ce,ve,he,ze,z,Z,ke,C,fe,Ye,xe,$e,Xe,De,Me;return{c(){e=T("canvas"),o=F(),n=T("div"),i=T("button"),s=B(a),r=F(),f=T("button"),m=B(l),_=F(),b=T("span"),h=B("particles: "),R=B(A),L=F(),$=T("label"),P=B("Smooth steps"),M=F(),O=T("input"),N=F(),V=T("div"),d=T("ul"),y=T("li"),p=T("label"),w=B("Interaction Range"),re=F(),Q=T("input"),S=F(),X=T("li"),J=T("label"),G=B("Drag"),ue=F(),U=T("input"),te=F(),ne=T("li"),ae=T("label"),Te=B("Time step"),Re=F(),se=T("input"),Ie=F(),_e=T("li"),de=T("label"),Se=B("Particles size"),Fe=F(),le=T("input"),Ce=F(),ve=T("li"),he=T("label"),ze=B("World: width"),z=F(),Z=T("input"),ke=F(),C=T("label"),fe=B("height"),Ye=F(),xe=T("input"),$e=F(),Xe=T("ul"),this.h()},l(W){e=x(W,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(e).forEach(c),o=D(W),n=x(W,"DIV",{});var ee=E(n);i=x(ee,"BUTTON",{});var Ue=E(i);s=I(Ue,a),Ue.forEach(c),r=D(ee),f=x(ee,"BUTTON",{});var Le=E(f);m=I(Le,l),Le.forEach(c),_=D(ee),b=x(ee,"SPAN",{});var Ve=E(b);h=I(Ve,"particles: "),R=I(Ve,A),Ve.forEach(c),L=D(ee),$=x(ee,"LABEL",{for:!0});var tt=E($);P=I(tt,"Smooth steps"),tt.forEach(c),M=D(ee),O=x(ee,"INPUT",{type:!0,min:!0}),ee.forEach(c),N=D(W),V=x(W,"DIV",{});var pt=E(V);d=x(pt,"UL",{});var Ae=E(d);y=x(Ae,"LI",{});var nt=E(y);p=x(nt,"LABEL",{for:!0});var Tn=E(p);w=I(Tn,"Interaction Range"),Tn.forEach(c),re=D(nt),Q=x(nt,"INPUT",{id:!0,type:!0,min:!0}),nt.forEach(c),S=D(Ae),X=x(Ae,"LI",{});var Rt=E(X);J=x(Rt,"LABEL",{for:!0});var xn=E(J);G=I(xn,"Drag"),xn.forEach(c),ue=D(Rt),U=x(Rt,"INPUT",{id:!0,type:!0,min:!0}),Rt.forEach(c),te=D(Ae),ne=x(Ae,"LI",{});var Ft=E(ne);ae=x(Ft,"LABEL",{for:!0});var $n=E(ae);Te=I($n,"Time step"),$n.forEach(c),Re=D(Ft),se=x(Ft,"INPUT",{id:!0,type:!0,min:!0}),Ft.forEach(c),Ie=D(Ae),_e=x(Ae,"LI",{});var Dt=E(_e);de=x(Dt,"LABEL",{for:!0});var An=E(de);Se=I(An,"Particles size"),An.forEach(c),Fe=D(Dt),le=x(Dt,"INPUT",{id:!0,type:!0,min:!0}),Dt.forEach(c),Ce=D(Ae),ve=x(Ae,"LI",{});var Je=E(ve);he=x(Je,"LABEL",{for:!0});var bn=E(he);ze=I(bn,"World: width"),bn.forEach(c),z=D(Je),Z=x(Je,"INPUT",{id:!0,type:!0,min:!0}),ke=D(Je),C=x(Je,"LABEL",{for:!0});var gn=E(C);fe=I(gn,"height"),gn.forEach(c),Ye=D(Je),xe=x(Je,"INPUT",{id:!0,type:!0,min:!0}),Je.forEach(c),$e=D(Ae),Xe=x(Ae,"UL",{}),E(Xe).forEach(c),Ae.forEach(c),pt.forEach(c),this.h()},h(){v(e,"id","canvas"),Qe(e,"background-color","black"),v(e,"width",t[5].width),v(e,"height",t[5].height),v($,"for","steps"),v(O,"type","number"),v(O,"min",0),v(p,"for","interactionRange"),v(Q,"id","interactionRange"),v(Q,"type","number"),v(Q,"min",0),v(J,"for","drag"),v(U,"id","drag"),v(U,"type","number"),v(U,"min",0),v(ae,"for","deltaTime"),v(se,"id","deltaTime"),v(se,"type","number"),v(se,"min",0),v(de,"for","particlesSize"),v(le,"id","particlesSize"),v(le,"type","number"),v(le,"min",0),v(he,"for","worldWidth"),v(Z,"id","worldWidth"),v(Z,"type","number"),v(Z,"min",0),v(C,"for","worldHeight"),v(xe,"id","worldHeight"),v(xe,"type","number"),v(xe,"min",0)},m(W,ee){g(W,e,ee),g(W,o,ee),g(W,n,ee),u(n,i),u(i,s),u(n,r),u(n,f),u(f,m),u(n,_),u(n,b),u(b,h),u(b,R),u(n,L),u(n,$),u($,P),u(n,M),u(n,O),oe(O,t[1]),g(W,N,ee),g(W,V,ee),u(V,d),u(d,y),u(y,p),u(p,w),u(y,re),u(y,Q),oe(Q,t[4].interactionRange),u(d,S),u(d,X),u(X,J),u(J,G),u(X,ue),u(X,U),oe(U,t[4].drag),u(d,te),u(d,ne),u(ne,ae),u(ae,Te),u(ne,Re),u(ne,se),oe(se,t[4].timeStep),u(d,Ie),u(d,_e),u(_e,de),u(de,Se),u(_e,Fe),u(_e,le),oe(le,t[4].particlesSize),u(d,Ce),u(d,ve),u(ve,he),u(he,ze),u(ve,z),u(ve,Z),oe(Z,t[0].width),u(ve,ke),u(ve,C),u(C,fe),u(ve,Ye),u(ve,xe),oe(xe,t[0].height),u(d,$e),u(d,Xe),De||(Me=[me(i,"click",t[7]),me(f,"click",t[8]),me(O,"input",t[9]),me(Q,"input",t[10]),me(U,"input",t[11]),me(se,"input",t[12]),me(le,"input",t[13]),me(Z,"input",t[14]),me(xe,"input",t[15])],De=!0)},p(W,[ee]){ee&8&&a!==(a=W[3]?"Play":"Pause")&&et(s,a),ee&4&&l!==(l=W[2]?"Normal Speed":"Slow Mo")&&et(m,l),ee&2&&ie(O.value)!==W[1]&&oe(O,W[1]),ee&16&&ie(Q.value)!==W[4].interactionRange&&oe(Q,W[4].interactionRange),ee&16&&ie(U.value)!==W[4].drag&&oe(U,W[4].drag),ee&16&&ie(se.value)!==W[4].timeStep&&oe(se,W[4].timeStep),ee&16&&ie(le.value)!==W[4].particlesSize&&oe(le,W[4].particlesSize),ee&1&&ie(Z.value)!==W[0].width&&oe(Z,W[0].width),ee&1&&ie(xe.value)!==W[0].height&&oe(xe,W[0].height)},i:ce,o:ce,d(W){W&&c(e),W&&c(o),W&&c(n),W&&c(N),W&&c(V),De=!1,Wt(Me)}}}function lr(t,e,o){const n={width:800,height:600},i={width:1600,height:1200},a={width:200,height:20};let s=1,r=!1,f=!0;const l={interactionRange:6,drag:5,timeStep:10,particlesSize:4};function m(){const O=Et();pe(O.canvas);const{ids:N,positions:V,colors:d}=Ji({texDimensions:a,worldDimensions:i,mode:"disk"});Ki(O,{ids:N,colors:d,texDimensions:a});let y=rr(O,{positions:V,texDimensions:a});function p(){if(pe(O.canvas),!f)for(let w=0;w<s;w++)y=ar({gl:O,texDimensions:a,worldDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Qi({gl:O,positionTex:y,texDimensions:a,worldDimensions:i,particlesSize:l.particlesSize,ids:N}),r?setTimeout(()=>requestAnimationFrame(p),1e3):requestAnimationFrame(p)}requestAnimationFrame(p)}Be(()=>m());const _=()=>o(3,f=!f),b=()=>o(2,r=!r);function h(){s=ie(this.value),o(1,s)}function A(){l.interactionRange=ie(this.value),o(4,l)}function R(){l.drag=ie(this.value),o(4,l)}function L(){l.timeStep=ie(this.value),o(4,l)}function $(){l.particlesSize=ie(this.value),o(4,l)}function P(){i.width=ie(this.value),o(0,i)}function M(){i.height=ie(this.value),o(0,i)}return[i,s,r,f,l,n,a,_,b,h,A,R,L,$,P,M]}class fr extends ge{constructor(e){super(),we(this,e,lr,sr,Ee,{})}}function cr(t){let e;return{c(){e=B("About")},l(o){e=I(o,"About")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function ur(t){let e;return{c(){e=B("Test 1")},l(o){e=I(o,"Test 1")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function mr(t){let e;return{c(){e=B("Test 2")},l(o){e=I(o,"Test 2")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function dr(t){let e;return{c(){e=B("Test 3")},l(o){e=I(o,"Test 3")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function pr(t){let e;return{c(){e=B("Test 4")},l(o){e=I(o,"Test 4")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function hr(t){let e;return{c(){e=B("Test 5")},l(o){e=I(o,"Test 5")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function vr(t){let e;return{c(){e=B("Test 6")},l(o){e=I(o,"Test 6")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function _r(t){let e;return{c(){e=B("Test 7")},l(o){e=I(o,"Test 7")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function Tr(t){let e;return{c(){e=B("Test 8")},l(o){e=I(o,"Test 8")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function xr(t){let e;return{c(){e=B("Test 9")},l(o){e=I(o,"Test 9")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function $r(t){let e;return{c(){e=B("Test 10")},l(o){e=I(o,"Test 10")},m(o,n){g(o,e,n)},d(o){o&&c(e)}}}function Ar(t){let e,o,n,i,a,s,r,f,l,m,_,b,h,A,R,L,$,P,M,O,N,V;return e=new Ne({props:{$$slots:{default:[cr]},$$scope:{ctx:t}}}),n=new Ne({props:{$$slots:{default:[ur]},$$scope:{ctx:t}}}),a=new Ne({props:{$$slots:{default:[mr]},$$scope:{ctx:t}}}),r=new Ne({props:{$$slots:{default:[dr]},$$scope:{ctx:t}}}),l=new Ne({props:{$$slots:{default:[pr]},$$scope:{ctx:t}}}),_=new Ne({props:{$$slots:{default:[hr]},$$scope:{ctx:t}}}),h=new Ne({props:{$$slots:{default:[vr]},$$scope:{ctx:t}}}),R=new Ne({props:{$$slots:{default:[_r]},$$scope:{ctx:t}}}),$=new Ne({props:{$$slots:{default:[Tr]},$$scope:{ctx:t}}}),M=new Ne({props:{$$slots:{default:[xr]},$$scope:{ctx:t}}}),N=new Ne({props:{$$slots:{default:[$r]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment),o=F(),q(n.$$.fragment),i=F(),q(a.$$.fragment),s=F(),q(r.$$.fragment),f=F(),q(l.$$.fragment),m=F(),q(_.$$.fragment),b=F(),q(h.$$.fragment),A=F(),q(R.$$.fragment),L=F(),q($.$$.fragment),P=F(),q(M.$$.fragment),O=F(),q(N.$$.fragment)},l(d){H(e.$$.fragment,d),o=D(d),H(n.$$.fragment,d),i=D(d),H(a.$$.fragment,d),s=D(d),H(r.$$.fragment,d),f=D(d),H(l.$$.fragment,d),m=D(d),H(_.$$.fragment,d),b=D(d),H(h.$$.fragment,d),A=D(d),H(R.$$.fragment,d),L=D(d),H($.$$.fragment,d),P=D(d),H(M.$$.fragment,d),O=D(d),H(N.$$.fragment,d)},m(d,y){j(e,d,y),g(d,o,y),j(n,d,y),g(d,i,y),j(a,d,y),g(d,s,y),j(r,d,y),g(d,f,y),j(l,d,y),g(d,m,y),j(_,d,y),g(d,b,y),j(h,d,y),g(d,A,y),j(R,d,y),g(d,L,y),j($,d,y),g(d,P,y),j(M,d,y),g(d,O,y),j(N,d,y),V=!0},p(d,y){const p={};y&1&&(p.$$scope={dirty:y,ctx:d}),e.$set(p);const w={};y&1&&(w.$$scope={dirty:y,ctx:d}),n.$set(w);const re={};y&1&&(re.$$scope={dirty:y,ctx:d}),a.$set(re);const Q={};y&1&&(Q.$$scope={dirty:y,ctx:d}),r.$set(Q);const S={};y&1&&(S.$$scope={dirty:y,ctx:d}),l.$set(S);const X={};y&1&&(X.$$scope={dirty:y,ctx:d}),_.$set(X);const J={};y&1&&(J.$$scope={dirty:y,ctx:d}),h.$set(J);const G={};y&1&&(G.$$scope={dirty:y,ctx:d}),R.$set(G);const ue={};y&1&&(ue.$$scope={dirty:y,ctx:d}),$.$set(ue);const U={};y&1&&(U.$$scope={dirty:y,ctx:d}),M.$set(U);const te={};y&1&&(te.$$scope={dirty:y,ctx:d}),N.$set(te)},i(d){V||(k(e.$$.fragment,d),k(n.$$.fragment,d),k(a.$$.fragment,d),k(r.$$.fragment,d),k(l.$$.fragment,d),k(_.$$.fragment,d),k(h.$$.fragment,d),k(R.$$.fragment,d),k($.$$.fragment,d),k(M.$$.fragment,d),k(N.$$.fragment,d),V=!0)},o(d){Y(e.$$.fragment,d),Y(n.$$.fragment,d),Y(a.$$.fragment,d),Y(r.$$.fragment,d),Y(l.$$.fragment,d),Y(_.$$.fragment,d),Y(h.$$.fragment,d),Y(R.$$.fragment,d),Y($.$$.fragment,d),Y(M.$$.fragment,d),Y(N.$$.fragment,d),V=!1},d(d){K(e,d),d&&c(o),K(n,d),d&&c(i),K(a,d),d&&c(s),K(r,d),d&&c(f),K(l,d),d&&c(m),K(_,d),d&&c(b),K(h,d),d&&c(A),K(R,d),d&&c(L),K($,d),d&&c(P),K(M,d),d&&c(O),K(N,d)}}}function br(t){let e,o;return{c(){e=T("p"),o=B("This page is an experiment to run simulation on the GPU.")},l(n){e=x(n,"P",{});var i=E(e);o=I(i,"This page is an experiment to run simulation on the GPU."),i.forEach(c)},m(n,i){g(n,e,i),u(e,o)},p:ce,d(n){n&&c(e)}}}function gr(t){let e,o;return e=new Ao({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function wr(t){let e,o;return e=new Eo({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Er(t){let e,o;return e=new Bo({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Rr(t){let e,o;return e=new No({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Fr(t){let e,o;return e=new Wo({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Dr(t){let e,o;return e=new oi({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Ur(t){let e,o;return e=new vi({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function yr(t){let e,o;return e=new Li({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Lr(t){let e,o;return e=new qi({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Pr(t){let e,o;return e=new fr({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Br(t){let e,o,n,i,a,s,r,f,l,m,_,b,h,A,R,L,$,P,M,O,N,V,d,y;return e=new uo({props:{$$slots:{default:[Ar]},$$scope:{ctx:t}}}),n=new Oe({props:{$$slots:{default:[br]},$$scope:{ctx:t}}}),a=new Oe({props:{$$slots:{default:[gr]},$$scope:{ctx:t}}}),r=new Oe({props:{$$slots:{default:[wr]},$$scope:{ctx:t}}}),l=new Oe({props:{$$slots:{default:[Er]},$$scope:{ctx:t}}}),_=new Oe({props:{$$slots:{default:[Rr]},$$scope:{ctx:t}}}),h=new Oe({props:{$$slots:{default:[Fr]},$$scope:{ctx:t}}}),R=new Oe({props:{$$slots:{default:[Dr]},$$scope:{ctx:t}}}),$=new Oe({props:{$$slots:{default:[Ur]},$$scope:{ctx:t}}}),M=new Oe({props:{$$slots:{default:[yr]},$$scope:{ctx:t}}}),N=new Oe({props:{$$slots:{default:[Lr]},$$scope:{ctx:t}}}),d=new Oe({props:{$$slots:{default:[Pr]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment),o=F(),q(n.$$.fragment),i=F(),q(a.$$.fragment),s=F(),q(r.$$.fragment),f=F(),q(l.$$.fragment),m=F(),q(_.$$.fragment),b=F(),q(h.$$.fragment),A=F(),q(R.$$.fragment),L=F(),q($.$$.fragment),P=F(),q(M.$$.fragment),O=F(),q(N.$$.fragment),V=F(),q(d.$$.fragment)},l(p){H(e.$$.fragment,p),o=D(p),H(n.$$.fragment,p),i=D(p),H(a.$$.fragment,p),s=D(p),H(r.$$.fragment,p),f=D(p),H(l.$$.fragment,p),m=D(p),H(_.$$.fragment,p),b=D(p),H(h.$$.fragment,p),A=D(p),H(R.$$.fragment,p),L=D(p),H($.$$.fragment,p),P=D(p),H(M.$$.fragment,p),O=D(p),H(N.$$.fragment,p),V=D(p),H(d.$$.fragment,p)},m(p,w){j(e,p,w),g(p,o,w),j(n,p,w),g(p,i,w),j(a,p,w),g(p,s,w),j(r,p,w),g(p,f,w),j(l,p,w),g(p,m,w),j(_,p,w),g(p,b,w),j(h,p,w),g(p,A,w),j(R,p,w),g(p,L,w),j($,p,w),g(p,P,w),j(M,p,w),g(p,O,w),j(N,p,w),g(p,V,w),j(d,p,w),y=!0},p(p,w){const re={};w&1&&(re.$$scope={dirty:w,ctx:p}),e.$set(re);const Q={};w&1&&(Q.$$scope={dirty:w,ctx:p}),n.$set(Q);const S={};w&1&&(S.$$scope={dirty:w,ctx:p}),a.$set(S);const X={};w&1&&(X.$$scope={dirty:w,ctx:p}),r.$set(X);const J={};w&1&&(J.$$scope={dirty:w,ctx:p}),l.$set(J);const G={};w&1&&(G.$$scope={dirty:w,ctx:p}),_.$set(G);const ue={};w&1&&(ue.$$scope={dirty:w,ctx:p}),h.$set(ue);const U={};w&1&&(U.$$scope={dirty:w,ctx:p}),R.$set(U);const te={};w&1&&(te.$$scope={dirty:w,ctx:p}),$.$set(te);const ne={};w&1&&(ne.$$scope={dirty:w,ctx:p}),M.$set(ne);const ae={};w&1&&(ae.$$scope={dirty:w,ctx:p}),N.$set(ae);const Te={};w&1&&(Te.$$scope={dirty:w,ctx:p}),d.$set(Te)},i(p){y||(k(e.$$.fragment,p),k(n.$$.fragment,p),k(a.$$.fragment,p),k(r.$$.fragment,p),k(l.$$.fragment,p),k(_.$$.fragment,p),k(h.$$.fragment,p),k(R.$$.fragment,p),k($.$$.fragment,p),k(M.$$.fragment,p),k(N.$$.fragment,p),k(d.$$.fragment,p),y=!0)},o(p){Y(e.$$.fragment,p),Y(n.$$.fragment,p),Y(a.$$.fragment,p),Y(r.$$.fragment,p),Y(l.$$.fragment,p),Y(_.$$.fragment,p),Y(h.$$.fragment,p),Y(R.$$.fragment,p),Y($.$$.fragment,p),Y(M.$$.fragment,p),Y(N.$$.fragment,p),Y(d.$$.fragment,p),y=!1},d(p){K(e,p),p&&c(o),K(n,p),p&&c(i),K(a,p),p&&c(s),K(r,p),p&&c(f),K(l,p),p&&c(m),K(_,p),p&&c(b),K(h,p),p&&c(A),K(R,p),p&&c(L),K($,p),p&&c(P),K(M,p),p&&c(O),K(N,p),p&&c(V),K(d,p)}}}function Ir(t){let e,o,n;return o=new ao({props:{$$slots:{default:[Br]},$$scope:{ctx:t}}}),{c(){e=T("div"),q(o.$$.fragment)},l(i){e=x(i,"DIV",{});var a=E(e);H(o.$$.fragment,a),a.forEach(c)},m(i,a){g(i,e,a),j(o,e,null),n=!0},p(i,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:i}),o.$set(s)},i(i){n||(k(o.$$.fragment,i),n=!0)},o(i){Y(o.$$.fragment,i),n=!1},d(i){i&&c(e),K(o)}}}class Sr extends ge{constructor(e){super(),we(this,e,null,Ir,Ee,{})}}function Cr(t){let e,o;return e=new Sr({}),{c(){q(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},p:ce,i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){Y(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}class Xr extends ge{constructor(e){super(),we(this,e,null,Cr,Ee,{})}}export{Xr as default};
