import{S as Ce,i as Me,s as Ne,C as En,k as p,l as v,m as _,h as d,n as m,b as U,K as W,E as Rn,F as Fn,G as yn,f as Re,t as $e,H as Zt,R as hi,o as Ge,j as pi,Q as vi,T as wo,U as ti,A as _i,V as Ti,g as Dn,d as Ln,q as F,a as g,r as y,c as A,D as f,B as de,p as ot,O as S,u as et,P as C,M as kt,I as xi,J as Eo,L as co,N as bi,w as pt,x as Dt,y as vt,z as _t,e as wn,v as Ro}from"../../../chunks/index-ff9e742a.js";import{w as sn}from"../../../chunks/index-84a8d4d9.js";let gi=1;function ni(){return`svelte-tabs-${gi++}`}function Ai(t){let e,i,n,o;const a=t[4].default,s=En(a,t,t[3],null);return{c(){e=p("div"),s&&s.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=_(e);s&&s.l(l),l.forEach(d),this.h()},h(){m(e,"class","svelte-tabs")},m(r,l){U(r,e,l),s&&s.m(e,null),i=!0,n||(o=W(e,"keydown",t[1]),n=!0)},p(r,[l]){s&&s.p&&(!i||l&8)&&Rn(s,a,r,r[3],i?yn(a,r[3],l,null):Fn(r[3]),null)},i(r){i||(Re(s,r),i=!0)},o(r){$e(s,r),i=!1},d(r){r&&d(e),s&&s.d(r),n=!1,o()}}}const fo={};function wi(t,e,i){const n=t.indexOf(e);t.splice(n,1),i.update(o=>o===e?t[n]||t[t.length-1]:o)}function Ei(t,e,i){let n,{$$slots:o={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const r=[],l=[],c=[],u=sn({}),h=sn({}),T=sn(null);Zt(t,T,E=>i(5,n=E));const b=sn(null);function x(E,$,Y){E.push($),Y.update(N=>N||$),vi(()=>wi(E,$,Y))}function L(E){const $=l.indexOf(E);T.set(E),b.set(c[$])}hi(fo,{registerTab(E){x(l,E,T)},registerTabElement(E){r.push(E)},registerPanel(E){x(c,E,b)},selectTab:L,selectedTab:T,selectedPanel:b,controls:u,labeledBy:h}),Ge(()=>{L(l[s])}),pi(()=>{for(let E=0;E<l.length;E++)u.update($=>({...$,[l[E].id]:c[E].id})),h.update($=>({...$,[c[E].id]:l[E].id}))});async function B(E){if(E.target.classList.contains("svelte-tabs__tab")){let $=l.indexOf(n);switch(E.key){case"ArrowRight":$+=1,$>l.length-1&&($=0),L(l[$]),r[$].focus();break;case"ArrowLeft":$-=1,$<0&&($=l.length-1),L(l[$]),r[$].focus()}}}return t.$$set=E=>{"initialSelectedIndex"in E&&i(2,s=E.initialSelectedIndex),"$$scope"in E&&i(3,a=E.$$scope)},[T,B,s,a,o]}class Ri extends Ce{constructor(e){super(),Me(this,e,Ei,Ai,Ne,{initialSelectedIndex:2})}}function Fi(t){let e,i,n,o,a,s;const r=t[9].default,l=En(r,t,t[8],null);return{c(){e=p("li"),l&&l.c(),this.h()},l(c){e=v(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=_(e);l&&l.l(u),u.forEach(d),this.h()},h(){m(e,"role","tab"),m(e,"id",t[3].id),m(e,"aria-controls",i=t[2][t[3].id]),m(e,"aria-selected",t[1]),m(e,"tabindex",n=t[1]?0:-1),m(e,"class","svelte-tabs__tab svelte-1fbofsd"),wo(e,"svelte-tabs__selected",t[1])},m(c,u){U(c,e,u),l&&l.m(e,null),t[10](e),o=!0,a||(s=W(e,"click",t[11]),a=!0)},p(c,[u]){l&&l.p&&(!o||u&256)&&Rn(l,r,c,c[8],o?yn(r,c[8],u,null):Fn(c[8]),null),(!o||u&4&&i!==(i=c[2][c[3].id]))&&m(e,"aria-controls",i),(!o||u&2)&&m(e,"aria-selected",c[1]),(!o||u&2&&n!==(n=c[1]?0:-1))&&m(e,"tabindex",n),(!o||u&2)&&wo(e,"svelte-tabs__selected",c[1])},i(c){o||(Re(l,c),o=!0)},o(c){$e(l,c),o=!1},d(c){c&&d(e),l&&l.d(c),t[10](null),a=!1,s()}}}function yi(t,e,i){let n,o,{$$slots:a={},$$scope:s}=e,r;const l={id:ni()},{registerTab:c,registerTabElement:u,selectTab:h,selectedTab:T,controls:b}=ti(fo);Zt(t,T,E=>i(7,n=E)),Zt(t,b,E=>i(2,o=E));let x;c(l),Ge(async()=>{await _i(),u(r)});function L(E){Ti[E?"unshift":"push"](()=>{r=E,i(0,r)})}const B=()=>h(l);return t.$$set=E=>{"$$scope"in E&&i(8,s=E.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,x=n===l)},[r,x,o,l,h,T,b,n,s,a,L,B]}class oi extends Ce{constructor(e){super(),Me(this,e,yi,Fi,Ne,{})}}function Di(t){let e,i;const n=t[1].default,o=En(n,t,t[0],null);return{c(){e=p("ul"),o&&o.c(),this.h()},l(a){e=v(a,"UL",{role:!0,class:!0});var s=_(e);o&&o.l(s),s.forEach(d),this.h()},h(){m(e,"role","tablist"),m(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){U(a,e,s),o&&o.m(e,null),i=!0},p(a,[s]){o&&o.p&&(!i||s&1)&&Rn(o,n,a,a[0],i?yn(n,a[0],s,null):Fn(a[0]),null)},i(a){i||(Re(o,a),i=!0)},o(a){$e(o,a),i=!1},d(a){a&&d(e),o&&o.d(a)}}}function Li(t,e,i){let{$$slots:n={},$$scope:o}=e;return t.$$set=a=>{"$$scope"in a&&i(0,o=a.$$scope)},[o,n]}class Ui extends Ce{constructor(e){super(),Me(this,e,Li,Di,Ne,{})}}function Fo(t){let e;const i=t[6].default,n=En(i,t,t[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,a){n&&n.m(o,a),e=!0},p(o,a){n&&n.p&&(!e||a&32)&&Rn(n,i,o,o[5],e?yn(i,o[5],a,null):Fn(o[5]),null)},i(o){e||(Re(n,o),e=!0)},o(o){$e(n,o),e=!1},d(o){n&&n.d(o)}}}function Pi(t){let e,i,n,o=t[1]===t[2]&&Fo(t);return{c(){e=p("div"),o&&o.c(),this.h()},l(a){e=v(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=_(e);o&&o.l(s),s.forEach(d),this.h()},h(){m(e,"id",t[2].id),m(e,"aria-labelledby",i=t[0][t[2].id]),m(e,"class","svelte-tabs__tab-panel svelte-epfyet"),m(e,"role","tabpanel")},m(a,s){U(a,e,s),o&&o.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?o?(o.p(a,s),s&2&&Re(o,1)):(o=Fo(a),o.c(),Re(o,1),o.m(e,null)):o&&(Dn(),$e(o,1,1,()=>{o=null}),Ln()),(!n||s&1&&i!==(i=a[0][a[2].id]))&&m(e,"aria-labelledby",i)},i(a){n||(Re(o),n=!0)},o(a){$e(o),n=!1},d(a){a&&d(e),o&&o.d()}}}function Bi(t,e,i){let n,o,{$$slots:a={},$$scope:s}=e;const r={id:ni()},{registerPanel:l,selectedPanel:c,labeledBy:u}=ti(fo);return Zt(t,c,h=>i(1,o=h)),Zt(t,u,h=>i(0,n=h)),l(r),t.$$set=h=>{"$$scope"in h&&i(5,s=h.$$scope)},[n,o,r,c,u,s,a]}class ii extends Ce{constructor(e){super(),Me(this,e,Bi,Pi,Ne,{})}}const $i=["VERTEX_SHADER","FRAGMENT_SHADER"];function St(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Un(e),e}function Un(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Fe(t,e,i,n){const o=t.createTexture();if(!o)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o}function Ve(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function De(t,e,i,n,o){const a=[];for(let r=0;r<e.length;++r){const l=$i[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=Ii(t,e[r],l,o);if(!c)throw"Can not create shader";a.push(c)}const s=Si(t,a,i,n,o);if(!s)throw"Can not create program";return s}function Ii(t,e,i,n){const o=n||console.log,a=t.createShader(i);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);return o(new Error("*** Error compiling shader '"+a+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(a),null}return a}function Si(t,e,i,n,o){const a=o||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){t.attachShader(s,l)}),i&&i.forEach(function(l,c){t.bindAttribLocation(s,n?n[c]:c,l)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const l=t.getProgramInfoLog(s);return a("Error in program linking:"+l),t.deleteProgram(s),null}return s}function Te(t,e){e=e||1;const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}function Ci(t){let e,i,n,o,a,s,r,l,c,u,h,T;return{c(){e=p("p"),i=F(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=g(),o=p("p"),a=F(`It is reusing the code from
    `),s=p("a"),r=F(`this site
    `),l=F("."),c=g(),u=p("ul"),h=g(),T=p("canvas"),this.h()},l(b){e=v(b,"P",{});var x=_(e);i=y(x,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),x.forEach(d),n=A(b),o=v(b,"P",{});var L=_(o);a=y(L,`It is reusing the code from
    `),s=v(L,"A",{target:!0,href:!0});var B=_(s);r=y(B,`this site
    `),B.forEach(d),l=y(L,"."),L.forEach(d),c=A(b),u=v(b,"UL",{id:!0}),_(u).forEach(d),h=A(b),T=v(b,"CANVAS",{id:!0}),_(T).forEach(d),this.h()},h(){m(s,"target","none"),m(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),m(u,"id","result"),m(T,"id","canvas")},m(b,x){U(b,e,x),f(e,i),U(b,n,x),U(b,o,x),f(o,a),f(o,s),f(s,r),f(o,l),U(b,c,x),U(b,u,x),U(b,h,x),U(b,T,x)},p:de,i:de,o:de,d(b){b&&d(e),b&&d(n),b&&d(o),b&&d(c),b&&d(u),b&&d(h),b&&d(T)}}}function Mi(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Ni(t){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const r=s.getContext("webgl");if(!r)throw"Coulndt get context";const l=De(r,[i,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),u=r.getUniformLocation(l,"srcTex"),h=r.getUniformLocation(l,"srcDimensions"),T=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,T),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const b=3,x=3,L=r.createTexture();r.bindTexture(r.TEXTURE_2D,L),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,b,x,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(u,0),r.uniform2f(h,b,x),r.drawArrays(r.TRIANGLES,0,6);const B=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,B);for(let E=0;E<3*3;++E)Mi(B[E*4])}return Ge(e),[]}class zi extends Ce{constructor(e){super(),Me(this,e,Ni,Ci,Ne,{})}}const Oi=Float32Array;function ri(t,e,i,n,o,a){const s=new Oi(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(o-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(i+n)/(i-n),s[14]=(o+a)/(o-a),s[15]=1,s}function ki(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=F(`This is the simple particles simulation from
    `),n=p("a"),o=F("webglfundamentals"),a=F(" directly copied in a svelte component."),s=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=y(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=_(n);o=y(u,"webglfundamentals"),u.forEach(d),a=y(c," directly copied in a svelte component."),c.forEach(d),s=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){m(n,"target","none"),m(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),m(r,"id","canvas"),ot(r,"background-color","black"),m(r,"width","800"),m(r,"height","600")},m(l,c){U(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),U(l,s,c),U(l,r,c)},p:de,i:de,o:de,d(l){l&&d(e),l&&d(s),l&&d(r)}}}function Xi(t){function e(){const i=`
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
  `,o=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const r=s.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=De(r,[i,n]),h=De(r,[o,a]);if(!u||!h)throw"Can not create programs";const T={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},b={id:r.getAttribLocation(h,"id"),positionTex:r.getUniformLocation(h,"positionTex"),texDimensions:r.getUniformLocation(h,"texDimensions"),matrix:r.getUniformLocation(h,"matrix")},x=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const L=300,B=20,E=L*B,$=new Array(E).fill(0).map((R,ce)=>ce),Y=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,Y),r.bufferData(r.ARRAY_BUFFER,new Float32Array($),r.STATIC_DRAW),Te(r.canvas);const N=(R,ce)=>(ce===void 0&&(ce=R,R=0),Math.random()*(ce-R)+R),j=new Float32Array($.map(R=>[N(s.width),N(s.height),0,0]).flat()),J=new Float32Array($.map(R=>[N(-300,300),N(-300,300),0,0]).flat());function q(R,ce,ee,re){const we=R.createTexture();return R.bindTexture(R.TEXTURE_2D,we),R.texImage2D(R.TEXTURE_2D,0,R.RGBA,ee,re,0,R.RGBA,R.FLOAT,ce),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MAG_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),we}const ie=q(r,J,L,B),Q=q(r,j,L,B),z=q(r,null,L,B);if(!Q||!z)throw"Can not create position textures";function ne(R,ce){const ee=R.createFramebuffer();return R.bindFramebuffer(R.FRAMEBUFFER,ee),R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ce,0),ee}const G=ne(r,Q),w=ne(r,z);let M={fb:G,tex:Q},Z={fb:w,tex:z},oe=0;function _e(R){if(!r)return;R*=.001;const ce=R-oe;oe=R,Te(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,Z.fb),r.viewport(0,0,L,B),r.bindBuffer(r.ARRAY_BUFFER,x),r.enableVertexAttribArray(T.position),r.vertexAttribPointer(T.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,M.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,ie),r.useProgram(u),r.uniform1i(T.positionTex,0),r.uniform1i(T.velocityTex,1),r.uniform2f(T.texDimensions,L,B),r.uniform2f(T.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(T.deltaTime,ce),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,Y),r.enableVertexAttribArray(b.id),r.vertexAttribPointer(b.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Z.tex),r.useProgram(h),r.uniform2f(b.texDimensions,L,L),r.uniform1i(b.positionTex,0),r.uniformMatrix4fv(b.matrix,!1,ri(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,E);{const ee=M;M=Z,Z=ee}requestAnimationFrame(_e)}requestAnimationFrame(_e)}return Ge(()=>e()),[]}class Wi extends Ce{constructor(e){super(),Me(this,e,Xi,ki,Ne,{})}}const ln=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Yi(t,e,i,n){const o=t*e,a=new Array(o).fill(0).map((l,c)=>c),s=new Float32Array(a.map(l=>[ln(i),ln(n),0,0]).flat()),r=new Float32Array(a.map(l=>[ln(-300,300),ln(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(a),positions:s,velocities:r}}const Vi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Hi=`precision highp float;

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

`,qi=`  attribute float id;
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

`,Gi=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function ji(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=F(`This is the simple particles simulation from
    `),n=p("a"),o=F("webglfundamentals"),a=F(" with the shader code extracted into separate files."),s=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=y(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=_(n);o=y(u,"webglfundamentals"),u.forEach(d),a=y(c," with the shader code extracted into separate files."),c.forEach(d),s=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){m(n,"target","none"),m(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),m(r,"id","canvas"),ot(r,"background-color","black"),m(r,"width","800"),m(r,"height","600")},m(l,c){U(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),U(l,s,c),U(l,r,c)},p:de,i:de,o:de,d(l){l&&d(e),l&&d(s),l&&d(r)}}}function Ki(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const a=o.getContext("webgl");if(!a)throw"gl undefined";Un(a);const s=De(a,[Vi,Hi]),r=De(a,[qi,Gi]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},c={id:a.getAttribLocation(r,"id"),positionTex:a.getUniformLocation(r,"positionTex"),texDimensions:a.getUniformLocation(r,"texDimensions"),matrix:a.getUniformLocation(r,"matrix")},u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const h=300,T=20,{numParticles:b,ids:x,positions:L,velocities:B}=Yi(h,T,o.width,o.height),E=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,E),a.bufferData(a.ARRAY_BUFFER,new Float32Array(x),a.STATIC_DRAW),Te(a.canvas);const $=Fe(a,B,h,T),Y=Fe(a,L,h,T),N=Fe(a,null,h,T),j=Ve(a,Y),J=Ve(a,N);let q={fb:j,tex:Y},ie={fb:J,tex:N},Q=0;function z(ne){if(!a||!u||!E)throw"Undefined params to render";ne*=.001;const G=ne-Q;Q=ne,Te(a.canvas),n(a,ie,h,T,u,l,q,$,s,G),i(a,h,E,c,ie,r,b);{const w=q;q=ie,ie=w}requestAnimationFrame(z)}requestAnimationFrame(z)}const i=(o,a,s,r,l,c,u)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,s),o.enableVertexAttribArray(r.id),o.vertexAttribPointer(r.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,l.tex),o.useProgram(c),o.uniform2f(r.texDimensions,a,a),o.uniform1i(r.positionTex,0),o.uniformMatrix4fv(r.matrix,!1,ri(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,u)},n=(o,a,s,r,l,c,u,h,T,b)=>{o.bindFramebuffer(o.FRAMEBUFFER,a.fb),o.viewport(0,0,s,r),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(c.position),o.vertexAttribPointer(c.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,u.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,h),o.useProgram(T),o.uniform1i(c.positionTex,0),o.uniform1i(c.velocityTex,1),o.uniform2f(c.texDimensions,s,r),o.uniform2f(c.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(c.deltaTime,b),o.drawArrays(o.TRIANGLES,0,6)};return Ge(()=>e()),[]}class Ji extends Ce{constructor(e){super(),Me(this,e,Ki,ji,Ne,{})}}const Qi=`attribute vec2 a_position;

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
`,Zi=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function er(t){let e,i,n,o,a,s,r,l,c,u,h,T;return{c(){e=p("p"),i=F(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=p("code"),o=F("requestAnimationFrame"),a=F(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=g(),r=p("canvas"),l=g(),c=p("button"),u=F("Add position"),this.h()},l(b){e=v(b,"P",{});var x=_(e);i=y(x,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=v(x,"CODE",{});var L=_(n);o=y(L,"requestAnimationFrame"),L.forEach(d),a=y(x,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),x.forEach(d),s=A(b),r=v(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=A(b),c=v(b,"BUTTON",{});var B=_(c);u=y(B,"Add position"),B.forEach(d),this.h()},h(){m(r,"id","canvas"),ot(r,"background-color","black"),m(r,"width","800"),m(r,"height","600")},m(b,x){U(b,e,x),f(e,i),f(e,n),f(n,o),f(e,a),U(b,s,x),U(b,r,x),U(b,l,x),U(b,c,x),f(c,u),h||(T=W(c,"click",t[1]),h=!0)},p:de,i:de,o:de,d(b){b&&d(e),b&&d(s),b&&d(r),b&&d(l),b&&d(c),h=!1,T()}}}function tr(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Un(s);const r=De(s,[Qi,Zi]);Te(s.canvas);const l=s.getAttribLocation(r,"a_position"),c=s.getUniformLocation(r,"u_resolution"),u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function h(){if(!s)throw"Undefined params to render";for(let Y=0;Y<=e.length-2;Y+=2)e[Y]=(e[Y]+Math.random()*2-1)%s.canvas.width,e[Y+1]=(e[Y+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),Te(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(r),s.uniform2f(c,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,u);const T=2,b=s.FLOAT,x=!1,L=0,B=0;s.vertexAttribPointer(l,T,b,x,L,B);var E=s.POINTS,$=e.length/2;s.drawArrays(E,B,$),requestAnimationFrame(h)}requestAnimationFrame(h)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Ge(()=>i()),[n,()=>n()]}class nr extends Ce{constructor(e){super(),Me(this,e,tr,er,Ne,{})}}const or=`attribute float id;
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
`,ir=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Xt,Wt;const rr=t=>{Wt=De(t,[or,ir]),Xt={idAttributeLocation:t.getAttribLocation(Wt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Wt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Wt,"u_resolution")}},ar=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;Te(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Wt),e.uniform2f(Xt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Xt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Xt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,r=e.FLOAT,l=!1,c=0,u=0;e.vertexAttribPointer(Xt.idAttributeLocation,s,r,l,c,u);const h=e.POINTS,T=o.length;e.drawArrays(h,u,T)};function sr(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=F("Create an array of render-size positions. Store this array in a texture. In each "),n=p("code"),o=F("requestAnimationFrame"),a=F(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=y(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=v(c,"CODE",{});var u=_(n);o=y(u,"requestAnimationFrame"),u.forEach(d),a=y(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(d),s=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){m(r,"id","canvas"),ot(r,"background-color","black"),m(r,"width",ai),m(r,"height",si)},m(l,c){U(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),U(l,s,c),U(l,r,c)},p:de,i:de,o:de,d(l){l&&d(e),l&&d(s),l&&d(r)}}}const ai=800,si=600;function lr(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";Un(n),Te(n.canvas),rr(n);const o=[0,1,2,3,4,5,6,7,8,9],a=o.map(r=>[Math.random()*ai,Math.random()*si,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let l=0;l<=a.length-2;l+=2)a[l]=(a[l]+Math.random()*2-1)%n.canvas.width,a[l+1]=(a[l+1]+Math.random()*0+1)%n.canvas.height;const r=Fe(n,new Float32Array(a),3,3);ar({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Ge(()=>e()),[]}let cr=class extends Ce{constructor(e){super(),Me(this,e,lr,sr,Ne,{})}};const fr=`attribute float id;
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
`,ur=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Yt,Vt,On;const dr=(t,e)=>{Vt=De(t,[fr,ur]),Yt={idAttributeLocation:t.getAttribLocation(Vt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Vt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Vt,"u_resolution")},On=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,On),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},mr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,On),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Vt),e.uniform2f(Yt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Yt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Yt.idAttributeLocation);const a=1,s=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(Yt.idAttributeLocation,a,s,r,l,c),e.drawArrays(e.POINTS,c,o.length)};function hr(t,e){const i=new Array(t).fill(0).map((a,s)=>s),n=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),o={width:i.length,height:1};return{ids:i,positions:n,texDimensions:o}}const pr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,vr=`precision highp float;

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

`;let Ct,Mt,kn,Bn,$n,yo,Do,Ht,vn;const _r=(t,e)=>{const{positions:i,texDimensions:n}=e;Mt=De(t,[pr,vr]),Ct={positionAttributeLocation:t.getAttribLocation(Mt,"position"),positionTexLocation:t.getUniformLocation(Mt,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(Mt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Mt,"u_resolution")},kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Bn=Fe(t,new Float32Array(i),n.width,n.height),$n=Fe(t,null,n.width,n.height),yo=Ve(t,Bn),Do=Ve(t,$n),Ht={fb:yo,tex:Bn},vn={fb:Do,tex:$n}},Tr=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,vn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,kn),e.enableVertexAttribArray(Ct.positionAttributeLocation),e.vertexAttribPointer(Ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ht.tex),e.useProgram(Mt),e.uniform1i(Ct.positionTexLocation,0),e.uniform2f(Ct.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Ht;Ht=vn,vn=n}return Ht.tex};function xr(t){let e,i,n,o,a,s,r,l,c,u,h,T,b;return{c(){e=p("p"),i=F("Create an array of render-size positions. Store this array in a texture."),n=g(),o=p("p"),a=F("Create 2 textures which will be used to update the positions with a shader. In each "),s=p("code"),r=F("requestAnimationFrame"),l=F(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=g(),u=p("p"),h=F("Finally switch the two textures to read and write in the updated textures"),T=g(),b=p("canvas"),this.h()},l(x){e=v(x,"P",{});var L=_(e);i=y(L,"Create an array of render-size positions. Store this array in a texture."),L.forEach(d),n=A(x),o=v(x,"P",{});var B=_(o);a=y(B,"Create 2 textures which will be used to update the positions with a shader. In each "),s=v(B,"CODE",{});var E=_(s);r=y(E,"requestAnimationFrame"),E.forEach(d),l=y(B,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),B.forEach(d),c=A(x),u=v(x,"P",{});var $=_(u);h=y($,"Finally switch the two textures to read and write in the updated textures"),$.forEach(d),T=A(x),b=v(x,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(b).forEach(d),this.h()},h(){m(b,"id","canvas"),ot(b,"background-color","black"),m(b,"width",li),m(b,"height",ci)},m(x,L){U(x,e,L),f(e,i),U(x,n,L),U(x,o,L),f(o,a),f(o,s),f(s,r),f(o,l),U(x,c,L),U(x,u,L),f(u,h),U(x,T,L),U(x,b,L)},p:de,i:de,o:de,d(x){x&&d(e),x&&d(n),x&&d(o),x&&d(c),x&&d(u),x&&d(T),x&&d(b)}}}const li=800,ci=600;function br(t){function e(){const i=St();Te(i.canvas);const{ids:n,positions:o,texDimensions:a}=hr(100,{width:li,height:ci});dr(i,n),_r(i,{positions:o,texDimensions:a});function s(){Te(i.canvas);const r=Tr({gl:i,texDimensions:a});mr({gl:i,positionTex:r,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Ge(()=>e()),[]}let gr=class extends Ce{constructor(e){super(),Me(this,e,br,xr,Ne,{})}};const Ar=`attribute float id;
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
`,wr=`precision mediump float;
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
`;let Lt,Nt,Xn,Wn;const Er=(t,e)=>{const{ids:i,colors:n}=e;Nt=De(t,[Ar,wr]),Lt={idAttributeLocation:t.getAttribLocation(Nt,"id"),colorAttributeLocation:t.getAttribLocation(Nt,"color"),texDimensionsUniformLocation:t.getUniformLocation(Nt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Nt,"u_resolution")},Xn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Xn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Wn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Wn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Rr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Xn),e.vertexAttribPointer(Lt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Lt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Wn),e.vertexAttribPointer(Lt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Lt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Nt),e.uniform2f(Lt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Lt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function Fr(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((s,r)=>r),o=new Array(i).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:l,y:c}=yr(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:o}}const yr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Dr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Lr=`precision highp float;

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

`;let Ut,Pt,Yn,cn,In,Lo,Uo,qt,_n,fn;const Ur=(t,e)=>{const{positions:i,texDimensions:n}=e;return Pt=De(t,[Dr,Lr]),Ut={positionAttributeLocation:t.getAttribLocation(Pt,"position"),positionTexLocation:t.getUniformLocation(Pt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(Pt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Pt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Pt,"u_resolution")},Yn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Yn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),cn=Fe(t,new Float32Array(i),n.width,n.height),In=Fe(t,null,n.width,n.height),Lo=Ve(t,cn),Uo=Ve(t,In),qt={fb:Lo,tex:cn},_n={fb:Uo,tex:In},cn},Pr=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();fn||(fn=n-1);const o=n-fn;fn=n,e.bindFramebuffer(e.FRAMEBUFFER,_n.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Yn),e.enableVertexAttribArray(Ut.positionAttributeLocation),e.vertexAttribPointer(Ut.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,qt.tex),e.useProgram(Pt),e.uniform1i(Ut.positionTexLocation,0),e.uniform1f(Ut.deltaTimeUniformLocation,o),e.uniform2f(Ut.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=qt;qt=_n,_n=a}return qt.tex};function Br(t){let e,i,n,o,a,s,r,l,c,u,h=t[2]?"Play":"Pause",T,b,x,L=t[1]?"Normal Speed":"Slow Mo",B,E,$,Y,N=t[4].width*t[4].height+"",j,J,q,ie,Q,z,ne,G;return{c(){e=p("p"),i=F("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),a=F(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),T=F(h),b=g(),x=p("button"),B=F(L),E=g(),$=p("span"),Y=F("particles: "),j=F(N),J=g(),q=p("label"),ie=F("Smooth steps"),Q=g(),z=p("input"),this.h()},l(w){e=v(w,"P",{});var M=_(e);i=y(M,"Same principle with a shader to update positions and a shader to draw particles."),M.forEach(d),n=A(w),o=v(w,"P",{});var Z=_(o);a=y(Z,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Z.forEach(d),s=A(w),r=v(w,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=A(w),c=v(w,"DIV",{});var oe=_(c);u=v(oe,"BUTTON",{});var _e=_(u);T=y(_e,h),_e.forEach(d),b=A(oe),x=v(oe,"BUTTON",{});var R=_(x);B=y(R,L),R.forEach(d),E=A(oe),$=v(oe,"SPAN",{});var ce=_($);Y=y(ce,"particles: "),j=y(ce,N),ce.forEach(d),J=A(oe),q=v(oe,"LABEL",{for:!0});var ee=_(q);ie=y(ee,"Smooth steps"),ee.forEach(d),Q=A(oe),z=v(oe,"INPUT",{type:!0,min:!0}),oe.forEach(d),this.h()},h(){m(r,"id","canvas"),ot(r,"background-color","black"),m(r,"width",t[3].width),m(r,"height",t[3].height),m(q,"for","steps"),m(z,"type","number"),m(z,"min",0)},m(w,M){U(w,e,M),f(e,i),U(w,n,M),U(w,o,M),f(o,a),U(w,s,M),U(w,r,M),U(w,l,M),U(w,c,M),f(c,u),f(u,T),f(c,b),f(c,x),f(x,B),f(c,E),f(c,$),f($,Y),f($,j),f(c,J),f(c,q),f(q,ie),f(c,Q),f(c,z),S(z,t[0]),ne||(G=[W(u,"click",t[5]),W(x,"click",t[6]),W(z,"input",t[7])],ne=!0)},p(w,[M]){M&4&&h!==(h=w[2]?"Play":"Pause")&&et(T,h),M&2&&L!==(L=w[1]?"Normal Speed":"Slow Mo")&&et(B,L),M&1&&C(z.value)!==w[0]&&S(z,w[0])},i:de,o:de,d(w){w&&d(e),w&&d(n),w&&d(o),w&&d(s),w&&d(r),w&&d(l),w&&d(c),ne=!1,kt(G)}}}function $r(t,e,i){const n={width:800,height:600},o={width:100,height:100};let a=1,s=!1,r=!0;function l(){const T=St();Te(T.canvas);const{ids:b,positions:x,colors:L}=Fr(o,{width:n.width,height:n.height});Er(T,{ids:b,colors:L,texDimensions:o});let B=Ur(T,{positions:x,texDimensions:o});function E(){if(Te(T.canvas),!r)for(let $=0;$<a;$++)B=Pr({gl:T,texDimensions:o});return Rr({gl:T,positionTex:B,textureDimension:o,ids:b}),r?requestAnimationFrame(E):s?setTimeout(()=>requestAnimationFrame(E),1e3):requestAnimationFrame(E)}requestAnimationFrame(E)}Ge(()=>l());const c=()=>i(2,r=!r),u=()=>i(1,s=!s);function h(){a=C(this.value),i(0,a)}return[a,s,r,n,o,c,u,h]}class Ir extends Ce{constructor(e){super(),Me(this,e,$r,Br,Ne,{})}}const Sr=`attribute float id;
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
`,Cr=`precision mediump float;
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
`;let Bt,zt,Vn,Hn;const Mr=(t,e)=>{const{ids:i,colors:n}=e;zt=De(t,[Sr,Cr]),Bt={idAttributeLocation:t.getAttribLocation(zt,"id"),colorAttributeLocation:t.getAttribLocation(zt,"color"),texDimensionsUniformLocation:t.getUniformLocation(zt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(zt,"u_resolution")},Vn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Vn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Hn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Hn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Nr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Vn),e.vertexAttribPointer(Bt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Bt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Hn),e.vertexAttribPointer(Bt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Bt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(zt),e.uniform2f(Bt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Bt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function zr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="disk"){const{x:u,y:h}=kr(i,20);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=Or(i,550);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Xr(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Po(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Po(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Or=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},kr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Xr=(t,e,i)=>{const n=qn(e,0,i,0,t.width,!1),o=qn(e,0,i,0,t.height,!1);return{x:n,y:o}},Po=(t,e,i,n)=>{const o=qn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},qn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Bo(s,n,o):Bo(s,o,n):s},Bo=function(t,e,i){return Math.max(Math.min(t,i),e)},Wr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Yr=`precision highp float;

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

`;let ct,ft,Gn,un,Sn,$o,Io,Gt,Tn;const Vr=(t,e)=>{const{positions:i,texDimensions:n}=e;return ft=De(t,[Wr,Yr]),ct={positionAttributeLocation:t.getAttribLocation(ft,"position"),positionTexLocation:t.getUniformLocation(ft,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ft,"interactionRange"),dragUniformLocation:t.getUniformLocation(ft,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ft,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ft,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ft,"u_resolution")},Gn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),un=Fe(t,new Float32Array(i),n.width,n.height),Sn=Fe(t,null,n.width,n.height),$o=Ve(t,un),Io=Ve(t,Sn),Gt={fb:$o,tex:un},Tn={fb:Io,tex:Sn},un},Hr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Tn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Gn),e.enableVertexAttribArray(ct.positionAttributeLocation),e.vertexAttribPointer(ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Gt.tex),e.useProgram(ft),e.uniform1i(ct.positionTexLocation,0),e.uniform1f(ct.dragUniformLocation,o),e.uniform1f(ct.interactionRangeUniformLocation,n),e.uniform1f(ct.deltaTimeUniformLocation,a),e.uniform2f(ct.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Gt;Gt=Tn,Tn=s}return Gt.tex};function qr(t){let e,i,n,o,a,s,r,l,c,u,h=t[2]?"Play":"Pause",T,b,x,L=t[1]?"Normal Speed":"Slow Mo",B,E,$,Y,N=t[5].width*t[5].height+"",j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,Ie;return{c(){e=p("p"),i=F("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),a=F(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),T=F(h),b=g(),x=p("button"),B=F(L),E=g(),$=p("span"),Y=F("particles: "),j=F(N),J=g(),q=p("label"),ie=F("Smooth steps"),Q=g(),z=p("input"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("ul"),this.h()},l(O){e=v(O,"P",{});var k=_(e);i=y(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(d),n=A(O),o=v(O,"P",{});var ze=_(o);a=y(ze,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ze.forEach(d),s=A(O),r=v(O,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=A(O),c=v(O,"DIV",{});var D=_(c);u=v(D,"BUTTON",{});var te=_(u);T=y(te,h),te.forEach(d),b=A(D),x=v(D,"BUTTON",{});var Oe=_(x);B=y(Oe,L),Oe.forEach(d),E=A(D),$=v(D,"SPAN",{});var Se=_($);Y=y(Se,"particles: "),j=y(Se,N),Se.forEach(d),J=A(D),q=v(D,"LABEL",{for:!0});var K=_(q);ie=y(K,"Smooth steps"),K.forEach(d),Q=A(D),z=v(D,"INPUT",{type:!0,min:!0}),D.forEach(d),ne=A(O),G=v(O,"DIV",{});var ke=_(G);w=v(ke,"UL",{});var le=_(w);M=v(le,"LI",{});var ge=_(M);Z=v(ge,"LABEL",{for:!0});var Xe=_(Z);oe=y(Xe,"Interaction Range"),Xe.forEach(d),_e=A(ge),R=v(ge,"INPUT",{id:!0,type:!0,min:!0}),ge.forEach(d),ce=A(le),ee=v(le,"LI",{});var me=_(ee);re=v(me,"LABEL",{for:!0});var pe=_(re);we=y(pe,"Drag"),pe.forEach(d),xe=A(me),V=v(me,"INPUT",{id:!0,type:!0,min:!0}),me.forEach(d),Ue=A(le),fe=v(le,"LI",{});var Ae=_(fe);ae=v(Ae,"LABEL",{for:!0});var Le=_(ae);Pe=y(Le,"Time step"),Le.forEach(d),be=A(Ae),H=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),Be=A(le),he=v(le,"UL",{}),_(he).forEach(d),le.forEach(d),ke.forEach(d),this.h()},h(){m(r,"id","canvas"),ot(r,"background-color","black"),m(r,"width",t[4].width),m(r,"height",t[4].height),m(q,"for","steps"),m(z,"type","number"),m(z,"min",0),m(Z,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(V,"id","drag"),m(V,"type","number"),m(V,"min",0),m(ae,"for","deltaTime"),m(H,"id","deltaTime"),m(H,"type","number"),m(H,"min",0)},m(O,k){U(O,e,k),f(e,i),U(O,n,k),U(O,o,k),f(o,a),U(O,s,k),U(O,r,k),U(O,l,k),U(O,c,k),f(c,u),f(u,T),f(c,b),f(c,x),f(x,B),f(c,E),f(c,$),f($,Y),f($,j),f(c,J),f(c,q),f(q,ie),f(c,Q),f(c,z),S(z,t[0]),U(O,ne,k),U(O,G,k),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[3].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[3].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[3].timeStep),f(w,Be),f(w,he),ue||(Ie=[W(u,"click",t[6]),W(x,"click",t[7]),W(z,"input",t[8]),W(R,"input",t[9]),W(V,"input",t[10]),W(H,"input",t[11])],ue=!0)},p(O,[k]){k&4&&h!==(h=O[2]?"Play":"Pause")&&et(T,h),k&2&&L!==(L=O[1]?"Normal Speed":"Slow Mo")&&et(B,L),k&1&&C(z.value)!==O[0]&&S(z,O[0]),k&8&&C(R.value)!==O[3].interactionRange&&S(R,O[3].interactionRange),k&8&&C(V.value)!==O[3].drag&&S(V,O[3].drag),k&8&&C(H.value)!==O[3].timeStep&&S(H,O[3].timeStep)},i:de,o:de,d(O){O&&d(e),O&&d(n),O&&d(o),O&&d(s),O&&d(r),O&&d(l),O&&d(c),O&&d(ne),O&&d(G),ue=!1,kt(Ie)}}}function Gr(t,e,i){const n={width:800,height:600},o={width:10,height:10};let a=1,s=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const B=St();Te(B.canvas);const{ids:E,positions:$,colors:Y}=zr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"circle"});Mr(B,{ids:E,colors:Y,texDimensions:o});let N=Vr(B,{positions:$,texDimensions:o});function j(){if(Te(B.canvas),!r)for(let J=0;J<a;J++)N=Hr({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Nr({gl:B,positionTex:N,textureDimension:o,ids:E}),r?requestAnimationFrame(j):s?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}Ge(()=>c());const u=()=>i(2,r=!r),h=()=>i(1,s=!s);function T(){a=C(this.value),i(0,a)}function b(){l.interactionRange=C(this.value),i(3,l)}function x(){l.drag=C(this.value),i(3,l)}function L(){l.timeStep=C(this.value),i(3,l)}return[a,s,r,l,n,o,u,h,T,b,x,L]}class jr extends Ce{constructor(e){super(),Me(this,e,Gr,qr,Ne,{})}}const Kr=`attribute float id;
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
`,Jr=`precision mediump float;
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
`;let $t,Ot,jn,Kn;const Qr=(t,e)=>{const{ids:i,colors:n}=e;Ot=De(t,[Kr,Jr]),$t={idAttributeLocation:t.getAttribLocation(Ot,"id"),colorAttributeLocation:t.getAttribLocation(Ot,"color"),texDimensionsUniformLocation:t.getUniformLocation(Ot,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ot,"u_resolution")},jn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,jn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Zr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,jn),e.vertexAttribPointer($t.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray($t.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Kn),e.vertexAttribPointer($t.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray($t.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Ot),e.uniform2f($t.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f($t.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function ea(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=ta(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=oa(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=na(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=ia(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=So(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=So(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const ta=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},na=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},oa=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},ia=(t,e,i)=>{const n=Jn(e,0,i,0,t.width,!1),o=Jn(e,0,i,0,t.height,!1);return{x:n,y:o}},So=(t,e,i,n)=>{const o=Jn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Jn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Co(s,n,o):Co(s,o,n):s},Co=function(t,e,i){return Math.max(Math.min(t,i),e)},ra=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,aa=`precision highp float;

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

`;let ut,dt,Qn,dn,Cn,Mo,No,jt,xn;const sa=(t,e)=>{const{positions:i,texDimensions:n}=e,o=aa.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return dt=De(t,[ra,o]),ut={positionAttributeLocation:t.getAttribLocation(dt,"position"),positionTexLocation:t.getUniformLocation(dt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(dt,"interactionRange"),dragUniformLocation:t.getUniformLocation(dt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(dt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},Qn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Qn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),dn=Fe(t,new Float32Array(i),n.width,n.height),Cn=Fe(t,null,n.width,n.height),Mo=Ve(t,dn),No=Ve(t,Cn),jt={fb:Mo,tex:dn},xn={fb:No,tex:Cn},dn},la=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,xn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Qn),e.enableVertexAttribArray(ut.positionAttributeLocation),e.vertexAttribPointer(ut.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,jt.tex),e.useProgram(dt),e.uniform1i(ut.positionTexLocation,0),e.uniform1f(ut.dragUniformLocation,o),e.uniform1f(ut.interactionRangeUniformLocation,n),e.uniform1f(ut.deltaTimeUniformLocation,a),e.uniform2f(ut.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=jt;jt=xn,xn=s}return jt.tex};function ca(t){let e,i,n,o,a,s,r,l,c,u,h,T,b,x=t[2]?"Play":"Pause",L,B,E,$=t[1]?"Normal Speed":"Slow Mo",Y,N,j,J,q=t[5].width*t[5].height+"",ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,Ie,O,k,ze;return{c(){e=p("p"),i=F("This could be a kind of water simulation."),n=g(),o=p("p"),a=F(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),s=g(),r=p("p"),l=F("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=g(),u=p("canvas"),h=g(),T=p("div"),b=p("button"),L=F(x),B=g(),E=p("button"),Y=F($),N=g(),j=p("span"),J=F("particles: "),ie=F(q),Q=g(),z=p("label"),ne=F("Smooth steps"),G=g(),w=p("input"),M=g(),Z=p("div"),oe=p("ul"),_e=p("li"),R=p("label"),ce=F("Interaction Range"),ee=g(),re=p("input"),we=g(),xe=p("li"),V=p("label"),Ue=F("Drag"),fe=g(),ae=p("input"),Pe=g(),be=p("li"),H=p("label"),Be=F("Time step"),he=g(),ue=p("input"),Ie=g(),O=p("ul"),this.h()},l(D){e=v(D,"P",{});var te=_(e);i=y(te,"This could be a kind of water simulation."),te.forEach(d),n=A(D),o=v(D,"P",{});var Oe=_(o);a=y(Oe,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Oe.forEach(d),s=A(D),r=v(D,"P",{});var Se=_(r);l=y(Se,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Se.forEach(d),c=A(D),u=v(D,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(u).forEach(d),h=A(D),T=v(D,"DIV",{});var K=_(T);b=v(K,"BUTTON",{});var ke=_(b);L=y(ke,x),ke.forEach(d),B=A(K),E=v(K,"BUTTON",{});var le=_(E);Y=y(le,$),le.forEach(d),N=A(K),j=v(K,"SPAN",{});var ge=_(j);J=y(ge,"particles: "),ie=y(ge,q),ge.forEach(d),Q=A(K),z=v(K,"LABEL",{for:!0});var Xe=_(z);ne=y(Xe,"Smooth steps"),Xe.forEach(d),G=A(K),w=v(K,"INPUT",{type:!0,min:!0}),K.forEach(d),M=A(D),Z=v(D,"DIV",{});var me=_(Z);oe=v(me,"UL",{});var pe=_(oe);_e=v(pe,"LI",{});var Ae=_(_e);R=v(Ae,"LABEL",{for:!0});var Le=_(R);ce=y(Le,"Interaction Range"),Le.forEach(d),ee=A(Ae),re=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),we=A(pe),xe=v(pe,"LI",{});var qe=_(xe);V=v(qe,"LABEL",{for:!0});var P=_(V);Ue=y(P,"Drag"),P.forEach(d),fe=A(qe),ae=v(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(d),Pe=A(pe),be=v(pe,"LI",{});var I=_(be);H=v(I,"LABEL",{for:!0});var Ee=_(H);Be=y(Ee,"Time step"),Ee.forEach(d),he=A(I),ue=v(I,"INPUT",{id:!0,type:!0,min:!0}),I.forEach(d),Ie=A(pe),O=v(pe,"UL",{}),_(O).forEach(d),pe.forEach(d),me.forEach(d),this.h()},h(){m(u,"id","canvas"),ot(u,"background-color","black"),m(u,"width",t[4].width),m(u,"height",t[4].height),m(z,"for","steps"),m(w,"type","number"),m(w,"min",0),m(R,"for","interactionRange"),m(re,"id","interactionRange"),m(re,"type","number"),m(re,"min",0),m(V,"for","drag"),m(ae,"id","drag"),m(ae,"type","number"),m(ae,"min",0),m(H,"for","deltaTime"),m(ue,"id","deltaTime"),m(ue,"type","number"),m(ue,"min",0)},m(D,te){U(D,e,te),f(e,i),U(D,n,te),U(D,o,te),f(o,a),U(D,s,te),U(D,r,te),f(r,l),U(D,c,te),U(D,u,te),U(D,h,te),U(D,T,te),f(T,b),f(b,L),f(T,B),f(T,E),f(E,Y),f(T,N),f(T,j),f(j,J),f(j,ie),f(T,Q),f(T,z),f(z,ne),f(T,G),f(T,w),S(w,t[0]),U(D,M,te),U(D,Z,te),f(Z,oe),f(oe,_e),f(_e,R),f(R,ce),f(_e,ee),f(_e,re),S(re,t[3].interactionRange),f(oe,we),f(oe,xe),f(xe,V),f(V,Ue),f(xe,fe),f(xe,ae),S(ae,t[3].drag),f(oe,Pe),f(oe,be),f(be,H),f(H,Be),f(be,he),f(be,ue),S(ue,t[3].timeStep),f(oe,Ie),f(oe,O),k||(ze=[W(b,"click",t[6]),W(E,"click",t[7]),W(w,"input",t[8]),W(re,"input",t[9]),W(ae,"input",t[10]),W(ue,"input",t[11])],k=!0)},p(D,[te]){te&4&&x!==(x=D[2]?"Play":"Pause")&&et(L,x),te&2&&$!==($=D[1]?"Normal Speed":"Slow Mo")&&et(Y,$),te&1&&C(w.value)!==D[0]&&S(w,D[0]),te&8&&C(re.value)!==D[3].interactionRange&&S(re,D[3].interactionRange),te&8&&C(ae.value)!==D[3].drag&&S(ae,D[3].drag),te&8&&C(ue.value)!==D[3].timeStep&&S(ue,D[3].timeStep)},i:de,o:de,d(D){D&&d(e),D&&d(n),D&&d(o),D&&d(s),D&&d(r),D&&d(c),D&&d(u),D&&d(h),D&&d(T),D&&d(M),D&&d(Z),k=!1,kt(ze)}}}function fa(t,e,i){const n={width:800,height:600},o={width:500,height:20};let a=1,s=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const B=St();Te(B.canvas);const{ids:E,positions:$,colors:Y}=ea({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Qr(B,{ids:E,colors:Y,texDimensions:o});let N=sa(B,{positions:$,texDimensions:o});function j(){if(Te(B.canvas),!r)for(let J=0;J<a;J++)N=la({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Zr({gl:B,positionTex:N,textureDimension:o,ids:E}),r?requestAnimationFrame(j):s?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}Ge(()=>c());const u=()=>i(2,r=!r),h=()=>i(1,s=!s);function T(){a=C(this.value),i(0,a)}function b(){l.interactionRange=C(this.value),i(3,l)}function x(){l.drag=C(this.value),i(3,l)}function L(){l.timeStep=C(this.value),i(3,l)}return[a,s,r,l,n,o,u,h,T,b,x,L]}class ua extends Ce{constructor(e){super(),Me(this,e,fa,ca,Ne,{})}}const da=`attribute float id;
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
`,ma=`precision mediump float;
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
`;let wt,It,Zn,eo;const ha=(t,e)=>{const{ids:i,colors:n}=e;It=De(t,[da,ma]),wt={idAttributeLocation:t.getAttribLocation(It,"id"),colorAttributeLocation:t.getAttribLocation(It,"color"),sizeUniformLocation:t.getUniformLocation(It,"size"),texDimensionsUniformLocation:t.getUniformLocation(It,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(It,"worldDimensions")},Zn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Zn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),eo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,eo),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},pa=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,h=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Zn),e.vertexAttribPointer(wt.idAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(wt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,eo),e.vertexAttribPointer(wt.colorAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(wt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(It),e.uniform1f(wt.sizeUniformLocation,a),e.uniform2f(wt.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(wt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,h,s.length)};function va(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=_a(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=xa(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=Ta(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=ba(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=zo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=zo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const _a=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Ta=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},xa=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},ba=(t,e,i)=>{const n=to(e,0,i,0,t.width,!1),o=to(e,0,i,0,t.height,!1);return{x:n,y:o}},zo=(t,e,i,n)=>{const o=to(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},to=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Oo(s,n,o):Oo(s,o,n):s},Oo=function(t,e,i){return Math.max(Math.min(t,i),e)},ga=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Aa=`precision highp float;

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

`;let mt,ht,no,mn,Mn,ko,Xo,Kt,bn;const wa=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Aa.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return ht=De(t,[ga,o]),mt={positionAttributeLocation:t.getAttribLocation(ht,"position"),positionTexLocation:t.getUniformLocation(ht,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ht,"interactionRange"),dragUniformLocation:t.getUniformLocation(ht,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ht,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ht,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(ht,"worldDimensions")},no=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,no),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),mn=Fe(t,new Float32Array(i),n.width,n.height),Mn=Fe(t,null,n.width,n.height),ko=Ve(t,mn),Xo=Ve(t,Mn),Kt={fb:ko,tex:mn},bn={fb:Xo,tex:Mn},mn},Ea=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,bn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,no),e.enableVertexAttribArray(mt.positionAttributeLocation),e.vertexAttribPointer(mt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Kt.tex),e.useProgram(ht),e.uniform1i(mt.positionTexLocation,0),e.uniform1f(mt.dragUniformLocation,a),e.uniform1f(mt.interactionRangeUniformLocation,o),e.uniform1f(mt.deltaTimeUniformLocation,s),e.uniform2f(mt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(mt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Kt;Kt=bn,bn=r}return Kt.tex};function Ra(t){let e,i,n,o,a,s,r,l=t[3]?"Play":"Pause",c,u,h,T=t[2]?"Normal Speed":"Slow Mo",b,x,L,B,E=t[6].width*t[6].height+"",$,Y,N,j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,Ie,O,k,ze,D,te,Oe,Se,K,ke,le,ge,Xe,me,pe,Ae,Le,qe;return{c(){e=p("p"),i=F(`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),n=g(),o=p("canvas"),a=g(),s=p("div"),r=p("button"),c=F(l),u=g(),h=p("button"),b=F(T),x=g(),L=p("span"),B=F("particles: "),$=F(E),Y=g(),N=p("label"),j=F("Smooth steps"),J=g(),q=p("input"),ie=g(),Q=p("button"),z=F("Reset"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("li"),ue=p("label"),Ie=F("Particles size"),O=g(),k=p("input"),ze=g(),D=p("li"),te=p("label"),Oe=F("World: width"),Se=g(),K=p("input"),ke=g(),le=p("label"),ge=F("height"),Xe=g(),me=p("input"),pe=g(),Ae=p("ul"),this.h()},l(P){e=v(P,"P",{});var I=_(e);i=y(I,`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),I.forEach(d),n=A(P),o=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(o).forEach(d),a=A(P),s=v(P,"DIV",{});var Ee=_(s);r=v(Ee,"BUTTON",{});var je=_(r);c=y(je,l),je.forEach(d),u=A(Ee),h=v(Ee,"BUTTON",{});var Ke=_(h);b=y(Ke,T),Ke.forEach(d),x=A(Ee),L=v(Ee,"SPAN",{});var it=_(L);B=y(it,"particles: "),$=y(it,E),it.forEach(d),Y=A(Ee),N=v(Ee,"LABEL",{for:!0});var st=_(N);j=y(st,"Smooth steps"),st.forEach(d),J=A(Ee),q=v(Ee,"INPUT",{type:!0,min:!0}),ie=A(Ee),Q=v(Ee,"BUTTON",{});var He=_(Q);z=y(He,"Reset"),He.forEach(d),Ee.forEach(d),ne=A(P),G=v(P,"DIV",{});var lt=_(G);w=v(lt,"UL",{});var ve=_(w);M=v(ve,"LI",{});var Je=_(M);Z=v(Je,"LABEL",{for:!0});var Tt=_(Z);oe=y(Tt,"Interaction Range"),Tt.forEach(d),_e=A(Je),R=v(Je,"INPUT",{id:!0,type:!0,min:!0}),Je.forEach(d),ce=A(ve),ee=v(ve,"LI",{});var tt=_(ee);re=v(tt,"LABEL",{for:!0});var nt=_(re);we=y(nt,"Drag"),nt.forEach(d),xe=A(tt),V=v(tt,"INPUT",{id:!0,type:!0,min:!0}),tt.forEach(d),Ue=A(ve),fe=v(ve,"LI",{});var X=_(fe);ae=v(X,"LABEL",{for:!0});var se=_(ae);Pe=y(se,"Time step"),se.forEach(d),be=A(X),H=v(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(d),Be=A(ve),he=v(ve,"LI",{});var We=_(he);ue=v(We,"LABEL",{for:!0});var xt=_(ue);Ie=y(xt,"Particles size"),xt.forEach(d),O=A(We),k=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),ze=A(ve),D=v(ve,"LI",{});var ye=_(D);te=v(ye,"LABEL",{for:!0});var bt=_(te);Oe=y(bt,"World: width"),bt.forEach(d),Se=A(ye),K=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ke=A(ye),le=v(ye,"LABEL",{for:!0});var gt=_(le);ge=y(gt,"height"),gt.forEach(d),Xe=A(ye),me=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ye.forEach(d),pe=A(ve),Ae=v(ve,"UL",{}),_(Ae).forEach(d),ve.forEach(d),lt.forEach(d),this.h()},h(){m(o,"id","canvas"),ot(o,"background-color","black"),m(o,"width",t[5].width),m(o,"height",t[5].height),m(N,"for","steps"),m(q,"type","number"),m(q,"min",0),m(Z,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(V,"id","drag"),m(V,"type","number"),m(V,"min",0),m(ae,"for","deltaTime"),m(H,"id","deltaTime"),m(H,"type","number"),m(H,"min",0),m(ue,"for","particlesSize"),m(k,"id","particlesSize"),m(k,"type","number"),m(k,"min",0),m(te,"for","worldWidth"),m(K,"id","worldWidth"),m(K,"type","number"),m(K,"min",0),m(le,"for","worldHeight"),m(me,"id","worldHeight"),m(me,"type","number"),m(me,"min",0)},m(P,I){U(P,e,I),f(e,i),U(P,n,I),U(P,o,I),U(P,a,I),U(P,s,I),f(s,r),f(r,c),f(s,u),f(s,h),f(h,b),f(s,x),f(s,L),f(L,B),f(L,$),f(s,Y),f(s,N),f(N,j),f(s,J),f(s,q),S(q,t[1]),f(s,ie),f(s,Q),f(Q,z),U(P,ne,I),U(P,G,I),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[4].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[4].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[4].timeStep),f(w,Be),f(w,he),f(he,ue),f(ue,Ie),f(he,O),f(he,k),S(k,t[4].particlesSize),f(w,ze),f(w,D),f(D,te),f(te,Oe),f(D,Se),f(D,K),S(K,t[0].width),f(D,ke),f(D,le),f(le,ge),f(D,Xe),f(D,me),S(me,t[0].height),f(w,pe),f(w,Ae),Le||(qe=[W(r,"click",t[8]),W(h,"click",t[9]),W(q,"input",t[10]),W(Q,"click",t[11]),W(R,"input",t[12]),W(V,"input",t[13]),W(H,"input",t[14]),W(k,"input",t[15]),W(K,"input",t[16]),W(me,"input",t[17])],Le=!0)},p(P,[I]){I&8&&l!==(l=P[3]?"Play":"Pause")&&et(c,l),I&4&&T!==(T=P[2]?"Normal Speed":"Slow Mo")&&et(b,T),I&2&&C(q.value)!==P[1]&&S(q,P[1]),I&16&&C(R.value)!==P[4].interactionRange&&S(R,P[4].interactionRange),I&16&&C(V.value)!==P[4].drag&&S(V,P[4].drag),I&16&&C(H.value)!==P[4].timeStep&&S(H,P[4].timeStep),I&16&&C(k.value)!==P[4].particlesSize&&S(k,P[4].particlesSize),I&1&&C(K.value)!==P[0].width&&S(K,P[0].width),I&1&&C(me.value)!==P[0].height&&S(me,P[0].height)},i:de,o:de,d(P){P&&d(e),P&&d(n),P&&d(o),P&&d(a),P&&d(s),P&&d(ne),P&&d(G),Le=!1,kt(qe)}}}function Fa(t,e,i){const n={width:800,height:600},o={width:1200,height:500},a={width:200,height:20};let s=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:20};let u,h;function T(){cancelAnimationFrame(h),u=St(),Te(u.canvas);const{ids:q,positions:ie,colors:Q}=va({texDimensions:a,worldDimensions:o,mode:"disk"});ha(u,{ids:q,colors:Q,texDimensions:a});let z=wa(u,{positions:ie,texDimensions:a});function ne(){if(Te(u.canvas),!l)for(let G=0;G<s;G++)z=Ea({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return pa({gl:u,positionTex:z,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:q}),r?setTimeout(()=>h=requestAnimationFrame(ne),1e3):h=requestAnimationFrame(ne)}h=requestAnimationFrame(ne)}Ge(()=>T());const b=()=>i(3,l=!l),x=()=>i(2,r=!r);function L(){s=C(this.value),i(1,s)}const B=()=>T();function E(){c.interactionRange=C(this.value),i(4,c)}function $(){c.drag=C(this.value),i(4,c)}function Y(){c.timeStep=C(this.value),i(4,c)}function N(){c.particlesSize=C(this.value),i(4,c)}function j(){o.width=C(this.value),i(0,o)}function J(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,T,b,x,L,B,E,$,Y,N,j,J]}class ya extends Ce{constructor(e){super(),Me(this,e,Fa,Ra,Ne,{})}}const Da=`attribute float id;

uniform float size;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;

uniform sampler2D positionTex;
uniform sampler2D colorTex;

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
    // pull the color from the texture
    float colorFromTex = getValueFrom2DTextureAs1DArray(colorTex, texDimensions, id).x;

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
    v_color = colorFromTex;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,La=`precision mediump float;
varying float v_color;
varying float v_id;

const float u_radius = 0.5; // The radius of the particles

void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5)); // Calculate the distance to the center
    if (dist > u_radius) { // If outside the circle, discard the fragment
        discard;
    }

    // if (v_color == 0.0) {
    //     gl_FragColor = vec4(1.0, 0.3, 0.6, 1.0);
    // } else {
    //     gl_FragColor = vec4(0.6, 0.3, 1.0, 1.0);
    // }

    if (v_color == 0.0) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else if (v_color == 1.0) {
        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    } else if (v_color == 2.0) {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    } else {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }

}
`;let Et,Rt,oo,fi;const Ua=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;Rt=De(t,[Da,La]),Et={idAttributeLocation:t.getAttribLocation(Rt,"id"),sizeUniformLocation:t.getUniformLocation(Rt,"size"),texDimensionsUniformLocation:t.getUniformLocation(Rt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Rt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Rt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Rt,"colorTex")},oo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,oo),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const a=n.map(s=>[s,0,0,0]).flat();fi=Fe(t,new Float32Array(a),o.width,o.height)},Pa=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,h=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,oo),e.vertexAttribPointer(Et.idAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(Et.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,fi),e.useProgram(Rt),e.uniform1f(Et.sizeUniformLocation,a),e.uniform2f(Et.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(Et.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Et.positionTexUniformLocation,0),e.uniform1i(Et.colorTexUniformLocation,1),e.drawArrays(e.POINTS,h,s.length)};function Ba(t,e,i){function n(){const a=t.getElementById(e);a&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),a.width=i.width,a.height=i.height)}function o(){const a=t.getElementById(e);a&&(t.fullscreenElement||a.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function $a(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*3)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Ia(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=Ca(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=Sa(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Ma(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Wo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Wo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Ia=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Sa=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Ca=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Ma=(t,e,i)=>{const n=io(e,0,i,0,t.width,!1),o=io(e,0,i,0,t.height,!1);return{x:n,y:o}},Wo=(t,e,i,n)=>{const o=io(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},io=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Yo(s,n,o):Yo(s,o,n):s},Yo=function(t,e,i){return Math.max(Math.min(t,i),e)},Na=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,za=`precision highp float;

uniform float interactionRange;
uniform float drag;
uniform float deltaTime;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;

uniform sampler2D positionTex;
uniform sampler2D colorTex;

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
    float color = texture2D(colorTex, texcoord).x;

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
    direction = (direction * deltaTime * color) / drag;
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

`;let rt,at,ro,hn,Nn,Vo,Ho,Jt,gn,ui;const Oa=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,a=za.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));at=De(t,[Na,a]),rt={positionAttributeLocation:t.getAttribLocation(at,"position"),interactionRangeUniformLocation:t.getUniformLocation(at,"interactionRange"),dragUniformLocation:t.getUniformLocation(at,"drag"),deltaTimeUniformLocation:t.getUniformLocation(at,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(at,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(at,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(at,"positionTex"),colorTexUniformLocation:t.getUniformLocation(at,"colorTex")},ro=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ro),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),hn=Fe(t,new Float32Array(i),o.width,o.height),Nn=Fe(t,null,o.width,o.height);const s=n.map(r=>[r,0,0,0]).flat();return ui=Fe(t,new Float32Array(s),o.width,o.height),Vo=Ve(t,hn),Ho=Ve(t,Nn),Jt={fb:Vo,tex:hn},gn={fb:Ho,tex:Nn},hn},ka=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,gn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,ro),e.enableVertexAttribArray(rt.positionAttributeLocation),e.vertexAttribPointer(rt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Jt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ui),e.useProgram(at),e.uniform1i(rt.positionTexUniformLocation,0),e.uniform1i(rt.colorTexUniformLocation,1),e.uniform1f(rt.dragUniformLocation,a),e.uniform1f(rt.interactionRangeUniformLocation,o),e.uniform1f(rt.deltaTimeUniformLocation,s),e.uniform2f(rt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(rt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Jt;Jt=gn,gn=r}return Jt.tex};function Xa(t){let e,i,n,o,a=t[3]?"Play":"Pause",s,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,h,T,b,x=t[6].width*t[6].height+"",L,B,E,$,Y,N,j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,Ie,O,k,ze,D,te,Oe,Se,K,ke,le,ge,Xe,me,pe,Ae,Le,qe;return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),s=F(a),r=g(),l=p("button"),u=F(c),h=g(),T=p("span"),b=F("particles: "),L=F(x),B=g(),E=p("label"),$=F("Smooth steps"),Y=g(),N=p("input"),j=g(),J=p("button"),q=F("Reset"),ie=g(),Q=p("button"),z=F("Fullscreen"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("li"),ue=p("label"),Ie=F("Particles size"),O=g(),k=p("input"),ze=g(),D=p("li"),te=p("label"),Oe=F("World: width"),Se=g(),K=p("input"),ke=g(),le=p("label"),ge=F("height"),Xe=g(),me=p("input"),pe=g(),Ae=p("ul"),this.h()},l(P){e=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(e).forEach(d),i=A(P),n=v(P,"DIV",{});var I=_(n);o=v(I,"BUTTON",{});var Ee=_(o);s=y(Ee,a),Ee.forEach(d),r=A(I),l=v(I,"BUTTON",{});var je=_(l);u=y(je,c),je.forEach(d),h=A(I),T=v(I,"SPAN",{});var Ke=_(T);b=y(Ke,"particles: "),L=y(Ke,x),Ke.forEach(d),B=A(I),E=v(I,"LABEL",{for:!0});var it=_(E);$=y(it,"Smooth steps"),it.forEach(d),Y=A(I),N=v(I,"INPUT",{type:!0,min:!0}),j=A(I),J=v(I,"BUTTON",{});var st=_(J);q=y(st,"Reset"),st.forEach(d),ie=A(I),Q=v(I,"BUTTON",{});var He=_(Q);z=y(He,"Fullscreen"),He.forEach(d),I.forEach(d),ne=A(P),G=v(P,"DIV",{});var lt=_(G);w=v(lt,"UL",{});var ve=_(w);M=v(ve,"LI",{});var Je=_(M);Z=v(Je,"LABEL",{for:!0});var Tt=_(Z);oe=y(Tt,"Interaction Range"),Tt.forEach(d),_e=A(Je),R=v(Je,"INPUT",{id:!0,type:!0,min:!0}),Je.forEach(d),ce=A(ve),ee=v(ve,"LI",{});var tt=_(ee);re=v(tt,"LABEL",{for:!0});var nt=_(re);we=y(nt,"Drag"),nt.forEach(d),xe=A(tt),V=v(tt,"INPUT",{id:!0,type:!0,min:!0}),tt.forEach(d),Ue=A(ve),fe=v(ve,"LI",{});var X=_(fe);ae=v(X,"LABEL",{for:!0});var se=_(ae);Pe=y(se,"Time step"),se.forEach(d),be=A(X),H=v(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(d),Be=A(ve),he=v(ve,"LI",{});var We=_(he);ue=v(We,"LABEL",{for:!0});var xt=_(ue);Ie=y(xt,"Particles size"),xt.forEach(d),O=A(We),k=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),ze=A(ve),D=v(ve,"LI",{});var ye=_(D);te=v(ye,"LABEL",{for:!0});var bt=_(te);Oe=y(bt,"World: width"),bt.forEach(d),Se=A(ye),K=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ke=A(ye),le=v(ye,"LABEL",{for:!0});var gt=_(le);ge=y(gt,"height"),gt.forEach(d),Xe=A(ye),me=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ye.forEach(d),pe=A(ve),Ae=v(ve,"UL",{}),_(Ae).forEach(d),ve.forEach(d),lt.forEach(d),this.h()},h(){m(e,"id","canvas"),ot(e,"background-color","black"),m(e,"width",t[5].width),m(e,"height",t[5].height),m(E,"for","steps"),m(N,"type","number"),m(N,"min",0),m(Z,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(V,"id","drag"),m(V,"type","number"),m(V,"min",0),m(ae,"for","deltaTime"),m(H,"id","deltaTime"),m(H,"type","number"),m(H,"min",0),m(ue,"for","particlesSize"),m(k,"id","particlesSize"),m(k,"type","number"),m(k,"min",0),m(te,"for","worldWidth"),m(K,"id","worldWidth"),m(K,"type","number"),m(K,"min",0),m(le,"for","worldHeight"),m(me,"id","worldHeight"),m(me,"type","number"),m(me,"min",0)},m(P,I){U(P,e,I),U(P,i,I),U(P,n,I),f(n,o),f(o,s),f(n,r),f(n,l),f(l,u),f(n,h),f(n,T),f(T,b),f(T,L),f(n,B),f(n,E),f(E,$),f(n,Y),f(n,N),S(N,t[1]),f(n,j),f(n,J),f(J,q),f(n,ie),f(n,Q),f(Q,z),U(P,ne,I),U(P,G,I),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[4].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[4].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[4].timeStep),f(w,Be),f(w,he),f(he,ue),f(ue,Ie),f(he,O),f(he,k),S(k,t[4].particlesSize),f(w,ze),f(w,D),f(D,te),f(te,Oe),f(D,Se),f(D,K),S(K,t[0].width),f(D,ke),f(D,le),f(le,ge),f(D,Xe),f(D,me),S(me,t[0].height),f(w,pe),f(w,Ae),Le||(qe=[W(o,"click",t[9]),W(l,"click",t[10]),W(N,"input",t[11]),W(J,"click",t[12]),W(Q,"click",t[8]),W(R,"input",t[13]),W(V,"input",t[14]),W(H,"input",t[15]),W(k,"input",t[16]),W(K,"input",t[17]),W(me,"input",t[18])],Le=!0)},p(P,[I]){I&8&&a!==(a=P[3]?"Play":"Pause")&&et(s,a),I&4&&c!==(c=P[2]?"Normal Speed":"Slow Mo")&&et(u,c),I&2&&C(N.value)!==P[1]&&S(N,P[1]),I&16&&C(R.value)!==P[4].interactionRange&&S(R,P[4].interactionRange),I&16&&C(V.value)!==P[4].drag&&S(V,P[4].drag),I&16&&C(H.value)!==P[4].timeStep&&S(H,P[4].timeStep),I&16&&C(k.value)!==P[4].particlesSize&&S(k,P[4].particlesSize),I&1&&C(K.value)!==P[0].width&&S(K,P[0].width),I&1&&C(me.value)!==P[0].height&&S(me,P[0].height)},i:de,o:de,d(P){P&&d(e),P&&d(i),P&&d(n),P&&d(ne),P&&d(G),Le=!1,kt(qe)}}}function Wa(t,e,i){const n={width:800,height:600},o={width:800,height:600},a={width:500,height:10};let s=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let u,h;function T(){cancelAnimationFrame(h),u=St(),Te(u.canvas);const{ids:ie,positions:Q,colors:z}=$a({texDimensions:a,worldDimensions:o,mode:"disk"});Ua(u,{ids:ie,colors:z,texDimensions:a});let ne=Oa(u,{positions:Q,colors:z,texDimensions:a});function G(){if(!l)for(let w=0;w<s;w++)ne=ka({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Pa({gl:u,positionTex:ne,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:ie}),r?setTimeout(()=>h=requestAnimationFrame(G),1e3):h=requestAnimationFrame(G)}h=requestAnimationFrame(G)}const{enableFullscreen:b}=Ba(document,"canvas",n);document.addEventListener("keydown",ie=>{ie.code==="Space"&&(i(3,l=!l),ie.preventDefault())}),Ge(()=>T());const x=()=>i(3,l=!l),L=()=>i(2,r=!r);function B(){s=C(this.value),i(1,s)}const E=()=>T();function $(){c.interactionRange=C(this.value),i(4,c)}function Y(){c.drag=C(this.value),i(4,c)}function N(){c.timeStep=C(this.value),i(4,c)}function j(){c.particlesSize=C(this.value),i(4,c)}function J(){o.width=C(this.value),i(0,o)}function q(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,T,b,x,L,B,E,$,Y,N,j,J,q]}class Ya extends Ce{constructor(e){super(),Me(this,e,Wa,Xa,Ne,{})}}const Va=`attribute float id;

uniform float size;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;

uniform sampler2D positionTex;
uniform sampler2D colorTex;

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
    // pull the color from the texture
    float colorFromTex = getValueFrom2DTextureAs1DArray(colorTex, texDimensions, id).x;

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
    v_color = colorFromTex;
    v_id = id / (texDimensions.x * texDimensions.y);
}
`,Ha=`precision mediump float;
varying float v_color;
varying float v_id;

const float u_radius = 0.5; // The radius of the particles

void main() {
    float dist = length(gl_PointCoord - vec2(0.5, 0.5)); // Calculate the distance to the center
    if (dist > u_radius) { // If outside the circle, discard the fragment
        discard;
    }

    if (v_color == 0.0) {
        gl_FragColor = vec4(0.21, 0.64, 0.84, 1.0);
    } else if (v_color == 1.0) {
        gl_FragColor = vec4(0.84, 0.21, 0.64, 1.0);
    } else if (v_color == 2.0) {
        gl_FragColor = vec4(0.64, 0.84, 0.21, 1.0);
    } else {
        // Should not happen
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }

}
`;let Ft,yt,ao,di;const qa=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;yt=De(t,[Va,Ha]),Ft={idAttributeLocation:t.getAttribLocation(yt,"id"),sizeUniformLocation:t.getUniformLocation(yt,"size"),texDimensionsUniformLocation:t.getUniformLocation(yt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(yt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(yt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(yt,"colorTex")},ao=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ao),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const a=n.map(s=>[s,0,0,0]).flat();di=Fe(t,new Float32Array(a),o.width,o.height)},Ga=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,h=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,ao),e.vertexAttribPointer(Ft.idAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(Ft.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,di),e.useProgram(yt),e.uniform1f(Ft.sizeUniformLocation,a),e.uniform2f(Ft.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(Ft.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Ft.positionTexUniformLocation,0),e.uniform1i(Ft.colorTexUniformLocation,1),e.drawArrays(e.POINTS,h,s.length)};function ja(t,e,i){function n(){const a=t.getElementById(e);a&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),a.width=i.width,a.height=i.height)}function o(){const a=t.getElementById(e);a&&(t.fullscreenElement||a.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function Ka(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*3)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Ja(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=Za(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=Qa(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=es(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=qo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=qo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Ja=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Qa=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Za=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},es=(t,e,i)=>{const n=so(e,0,i,0,t.width,!1),o=so(e,0,i,0,t.height,!1);return{x:n,y:o}},qo=(t,e,i,n)=>{const o=so(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},so=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Go(s,n,o):Go(s,o,n):s},Go=function(t,e,i){return Math.max(Math.min(t,i),e)},ts=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ns=`precision highp float;

uniform float wallsMode;    // 0.0: wraped 1.0: box 2.0: bottom wall
uniform float gravityFactor;
uniform float interactionRange;
uniform float drag;
uniform float deltaTime;
uniform vec2 texDimensions;
uniform vec2 worldDimensions;

uniform sampler2D positionTex;
uniform sampler2D colorTex;

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

vec2 newPosition_box(vec2 position, vec2 direction) {
    vec2 newPosition = position + direction;
    if (newPosition.y >= worldDimensions.y - 5.0) {
        newPosition.y = worldDimensions.y - 7.0;
    } else if (newPosition.y <  5.0) {
        newPosition.y = 7.0;
    }

    if (newPosition.x >= worldDimensions.x - 5.0) {
        newPosition.x = worldDimensions.x - 7.0;
    } else if (newPosition.x <  5.0) {
        newPosition.x = 7.0;
    }
    return newPosition;
}

vec2 newPosition_bottomWall(vec2 position, vec2 direction) {
    vec2 newPosition = position + direction;
    newPosition.x = euclideanModulo(position.x + direction.x, worldDimensions.x);
    if (newPosition.y >= worldDimensions.y - 5.0) {
        newPosition.y = worldDimensions.y - 7.0;
    }
    return newPosition;
}

vec2 newPosition_wrapWorld(vec2 position, vec2 direction) {
    return euclideanModulo(position + direction, worldDimensions);
}

void main() {
    vec2 texcoord = gl_FragCoord.xy / texDimensions;
    vec2 position = texture2D(positionTex, texcoord).xy;
    float color = texture2D(colorTex, texcoord).x;

    vec2 direction = vec2(0.0, 0.0);

    // Iterate on the texture coordinates to compare with each other cell

    for (float y=0.0; y<1.0; y += 1.0 / texHeight) {
        for (float x=0.0; x<1.0; x += 1.0 / texWidth) {
            vec2 otherTextCoord = vec2(x, y);
            vec2 otherPosition = texture2D(positionTex, otherTextCoord).xy;
            float otherColor = texture2D(colorTex, otherTextCoord).x;

            vec2 diff = position - otherPosition;
            float mag = length(diff);
            if (mag < interactionRange) {
                float diffCoef = 1.0 / mag;
                if (mag < 1.0) {
                    diffCoef = 1.0;
                }

                float colorCoef = 1.0;
                if (color == otherColor) {
                    colorCoef = 2.0;
                }

                direction = direction + (diff * diffCoef * colorCoef);
            }
        }
    }
    direction = (direction * deltaTime) / drag;
    direction = direction + gravity * gravityFactor;

    vec2 newPosition = position + direction;

    if (wallsMode == 0.0) {
        // Wrapped world
        newPosition = newPosition_wrapWorld(position, direction);
    } else if (wallsMode == 1.0) {
        // Box
        newPosition = newPosition_box(position, direction);
    } else {
        // Bottom wall - horizontal wrap
        newPosition = newPosition_bottomWall(position, direction);
    }

    gl_FragColor = vec4(newPosition, 0, 1);
}
`;let Qe,Ze,lo,pn,zn,jo,Ko,Qt,An,mi;const os=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,a=ns.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));Ze=De(t,[ts,a]),Qe={positionAttributeLocation:t.getAttribLocation(Ze,"position"),wallsModeUniformLocation:t.getUniformLocation(Ze,"wallsMode"),gravityFactorUniformLocation:t.getUniformLocation(Ze,"gravityFactor"),interactionRangeUniformLocation:t.getUniformLocation(Ze,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ze,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ze,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ze,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Ze,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Ze,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Ze,"colorTex")},lo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,lo),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),pn=Fe(t,new Float32Array(i),o.width,o.height),zn=Fe(t,null,o.width,o.height);const s=n.map(r=>[r,0,0,0]).flat();return mi=Fe(t,new Float32Array(s),o.width,o.height),jo=Ve(t,pn),Ko=Ve(t,zn),Qt={fb:jo,tex:pn},An={fb:Ko,tex:zn},pn},is=t=>{const{gl:e,texDimensions:i,worldDimensions:n,wallsMode:o,gravityFactor:a,interactionRange:s,drag:r,deltaTime:l}=t;e.bindFramebuffer(e.FRAMEBUFFER,An.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,lo),e.enableVertexAttribArray(Qe.positionAttributeLocation),e.vertexAttribPointer(Qe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Qt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,mi),e.useProgram(Ze),e.uniform1i(Qe.positionTexUniformLocation,0),e.uniform1i(Qe.colorTexUniformLocation,1);const u={wraped:0,box:1,bottom_wall:2}[o];e.uniform1f(Qe.wallsModeUniformLocation,u),e.uniform1f(Qe.gravityFactorUniformLocation,a),e.uniform1f(Qe.dragUniformLocation,r),e.uniform1f(Qe.interactionRangeUniformLocation,s),e.uniform1f(Qe.deltaTimeUniformLocation,l),e.uniform2f(Qe.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Qe.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const h=Qt;Qt=An,An=h}return Qt.tex};function rs(t,e,i){const n=t.slice();return n[23]=e[i],n}function as(t){let e,i;return{c(){e=p("option"),i=F(t[23]),this.h()},l(n){e=v(n,"OPTION",{});var o=_(e);i=y(o,t[23]),o.forEach(d),this.h()},h(){e.__value=t[23],e.value=e.__value},m(n,o){U(n,e,o),f(e,i)},p:de,d(n){n&&d(e)}}}function ss(t){let e,i,n,o,a=t[3]?"Play":"Pause",s,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,h,T,b,x=t[6].width*t[6].height+"",L,B,E,$,Y,N,j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,Ie,O,k,ze,D,te,Oe,Se,K,ke,le,ge,Xe,me,pe,Ae,Le,qe,P,I,Ee,je,Ke,it,st,He,lt,ve,Je,Tt,tt=["box","wraped","bottom_wall"],nt=[];for(let X=0;X<3;X+=1)nt[X]=as(rs(t,tt,X));return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),s=F(a),r=g(),l=p("button"),u=F(c),h=g(),T=p("span"),b=F("particles: "),L=F(x),B=g(),E=p("label"),$=F("Smooth steps"),Y=g(),N=p("input"),j=g(),J=p("button"),q=F("Reset"),ie=g(),Q=p("button"),z=F("Fullscreen"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("li"),ue=p("label"),Ie=F("Gravity factor"),O=g(),k=p("input"),ze=g(),D=p("li"),te=p("label"),Oe=F("Particles size"),Se=g(),K=p("input"),ke=g(),le=p("li"),ge=p("label"),Xe=F("World: width"),me=g(),pe=p("input"),Ae=g(),Le=p("label"),qe=F("height"),P=g(),I=p("input"),Ee=g(),je=p("li"),Ke=p("label"),it=F("Walls mode"),st=g(),He=p("select");for(let X=0;X<3;X+=1)nt[X].c();lt=g(),ve=p("ul"),this.h()},l(X){e=v(X,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(e).forEach(d),i=A(X),n=v(X,"DIV",{});var se=_(n);o=v(se,"BUTTON",{});var We=_(o);s=y(We,a),We.forEach(d),r=A(se),l=v(se,"BUTTON",{});var xt=_(l);u=y(xt,c),xt.forEach(d),h=A(se),T=v(se,"SPAN",{});var ye=_(T);b=y(ye,"particles: "),L=y(ye,x),ye.forEach(d),B=A(se),E=v(se,"LABEL",{for:!0});var bt=_(E);$=y(bt,"Smooth steps"),bt.forEach(d),Y=A(se),N=v(se,"INPUT",{type:!0,min:!0}),j=A(se),J=v(se,"BUTTON",{});var gt=_(J);q=y(gt,"Reset"),gt.forEach(d),ie=A(se),Q=v(se,"BUTTON",{});var uo=_(Q);z=y(uo,"Fullscreen"),uo.forEach(d),se.forEach(d),ne=A(X),G=v(X,"DIV",{});var mo=_(G);w=v(mo,"UL",{});var Ye=_(w);M=v(Ye,"LI",{});var en=_(M);Z=v(en,"LABEL",{for:!0});var ho=_(Z);oe=y(ho,"Interaction Range"),ho.forEach(d),_e=A(en),R=v(en,"INPUT",{id:!0,type:!0,min:!0}),en.forEach(d),ce=A(Ye),ee=v(Ye,"LI",{});var tn=_(ee);re=v(tn,"LABEL",{for:!0});var po=_(re);we=y(po,"Drag"),po.forEach(d),xe=A(tn),V=v(tn,"INPUT",{id:!0,type:!0,min:!0}),tn.forEach(d),Ue=A(Ye),fe=v(Ye,"LI",{});var nn=_(fe);ae=v(nn,"LABEL",{for:!0});var vo=_(ae);Pe=y(vo,"Time step"),vo.forEach(d),be=A(nn),H=v(nn,"INPUT",{id:!0,type:!0,min:!0}),nn.forEach(d),Be=A(Ye),he=v(Ye,"LI",{});var on=_(he);ue=v(on,"LABEL",{for:!0});var _o=_(ue);Ie=y(_o,"Gravity factor"),_o.forEach(d),O=A(on),k=v(on,"INPUT",{id:!0,type:!0,min:!0,max:!0}),on.forEach(d),ze=A(Ye),D=v(Ye,"LI",{});var rn=_(D);te=v(rn,"LABEL",{for:!0});var To=_(te);Oe=y(To,"Particles size"),To.forEach(d),Se=A(rn),K=v(rn,"INPUT",{id:!0,type:!0,min:!0}),rn.forEach(d),ke=A(Ye),le=v(Ye,"LI",{});var At=_(le);ge=v(At,"LABEL",{for:!0});var xo=_(ge);Xe=y(xo,"World: width"),xo.forEach(d),me=A(At),pe=v(At,"INPUT",{id:!0,type:!0,min:!0}),Ae=A(At),Le=v(At,"LABEL",{for:!0});var bo=_(Le);qe=y(bo,"height"),bo.forEach(d),P=A(At),I=v(At,"INPUT",{id:!0,type:!0,min:!0}),At.forEach(d),Ee=A(Ye),je=v(Ye,"LI",{});var an=_(je);Ke=v(an,"LABEL",{for:!0});var go=_(Ke);it=y(go,"Walls mode"),go.forEach(d),st=A(an),He=v(an,"SELECT",{});var Ao=_(He);for(let Pn=0;Pn<3;Pn+=1)nt[Pn].l(Ao);Ao.forEach(d),an.forEach(d),lt=A(Ye),ve=v(Ye,"UL",{}),_(ve).forEach(d),Ye.forEach(d),mo.forEach(d),this.h()},h(){m(e,"id","canvas"),ot(e,"background-color","black"),m(e,"width",t[5].width),m(e,"height",t[5].height),m(E,"for","steps"),m(N,"type","number"),m(N,"min",0),m(Z,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(V,"id","drag"),m(V,"type","number"),m(V,"min",0),m(ae,"for","deltaTime"),m(H,"id","deltaTime"),m(H,"type","number"),m(H,"min",0),m(ue,"for","gravityFactor"),m(k,"id","gravityFactor"),m(k,"type","number"),m(k,"min",-5),m(k,"max",5),m(te,"for","particlesSize"),m(K,"id","particlesSize"),m(K,"type","number"),m(K,"min",0),m(ge,"for","worldWidth"),m(pe,"id","worldWidth"),m(pe,"type","number"),m(pe,"min",0),m(Le,"for","worldHeight"),m(I,"id","worldHeight"),m(I,"type","number"),m(I,"min",0),m(Ke,"for","wallsMode"),t[4].wallsMode===void 0&&xi(()=>t[20].call(He))},m(X,se){U(X,e,se),U(X,i,se),U(X,n,se),f(n,o),f(o,s),f(n,r),f(n,l),f(l,u),f(n,h),f(n,T),f(T,b),f(T,L),f(n,B),f(n,E),f(E,$),f(n,Y),f(n,N),S(N,t[1]),f(n,j),f(n,J),f(J,q),f(n,ie),f(n,Q),f(Q,z),U(X,ne,se),U(X,G,se),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[4].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[4].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[4].timeStep),f(w,Be),f(w,he),f(he,ue),f(ue,Ie),f(he,O),f(he,k),S(k,t[4].gravityFactor),f(w,ze),f(w,D),f(D,te),f(te,Oe),f(D,Se),f(D,K),S(K,t[4].particlesSize),f(w,ke),f(w,le),f(le,ge),f(ge,Xe),f(le,me),f(le,pe),S(pe,t[0].width),f(le,Ae),f(le,Le),f(Le,qe),f(le,P),f(le,I),S(I,t[0].height),f(w,Ee),f(w,je),f(je,Ke),f(Ke,it),f(je,st),f(je,He);for(let We=0;We<3;We+=1)nt[We].m(He,null);Eo(He,t[4].wallsMode),f(w,lt),f(w,ve),Je||(Tt=[W(o,"click",t[9]),W(l,"click",t[10]),W(N,"input",t[11]),W(J,"click",t[12]),W(Q,"click",t[8]),W(R,"input",t[13]),W(V,"input",t[14]),W(H,"input",t[15]),W(k,"input",t[16]),W(K,"input",t[17]),W(pe,"input",t[18]),W(I,"input",t[19]),W(He,"change",t[20])],Je=!0)},p(X,[se]){se&8&&a!==(a=X[3]?"Play":"Pause")&&et(s,a),se&4&&c!==(c=X[2]?"Normal Speed":"Slow Mo")&&et(u,c),se&2&&C(N.value)!==X[1]&&S(N,X[1]),se&16&&C(R.value)!==X[4].interactionRange&&S(R,X[4].interactionRange),se&16&&C(V.value)!==X[4].drag&&S(V,X[4].drag),se&16&&C(H.value)!==X[4].timeStep&&S(H,X[4].timeStep),se&16&&C(k.value)!==X[4].gravityFactor&&S(k,X[4].gravityFactor),se&16&&C(K.value)!==X[4].particlesSize&&S(K,X[4].particlesSize),se&1&&C(pe.value)!==X[0].width&&S(pe,X[0].width),se&1&&C(I.value)!==X[0].height&&S(I,X[0].height),se&16&&Eo(He,X[4].wallsMode)},i:de,o:de,d(X){X&&d(e),X&&d(i),X&&d(n),X&&d(ne),X&&d(G),co(nt,X),Je=!1,kt(Tt)}}}function ls(t,e,i){const n={width:800,height:600},o={width:800,height:600},a={width:500,height:10};let s=10,r=!1,l=!0;const c={interactionRange:10,drag:5,timeStep:10,particlesSize:3,gravityFactor:0,wallsMode:"box"};let u,h;function T(){cancelAnimationFrame(h),u=St(),Te(u.canvas);const{ids:z,positions:ne,colors:G}=Ka({texDimensions:a,worldDimensions:o,mode:"disk"});qa(u,{ids:z,colors:G,texDimensions:a});let w=os(u,{positions:ne,colors:G,texDimensions:a});function M(){if(!l)for(let Z=0;Z<s;Z++)w=is({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep,gravityFactor:c.gravityFactor,wallsMode:c.wallsMode});return Ga({gl:u,positionTex:w,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:z}),r?setTimeout(()=>h=requestAnimationFrame(M),1e3):h=requestAnimationFrame(M)}h=requestAnimationFrame(M)}const{enableFullscreen:b}=ja(document,"canvas",n);document.addEventListener("keydown",z=>{z.code==="Space"&&(i(3,l=!l),z.preventDefault())}),Ge(()=>T());const x=()=>i(3,l=!l),L=()=>i(2,r=!r);function B(){s=C(this.value),i(1,s)}const E=()=>T();function $(){c.interactionRange=C(this.value),i(4,c)}function Y(){c.drag=C(this.value),i(4,c)}function N(){c.timeStep=C(this.value),i(4,c)}function j(){c.gravityFactor=C(this.value),i(4,c)}function J(){c.particlesSize=C(this.value),i(4,c)}function q(){o.width=C(this.value),i(0,o)}function ie(){o.height=C(this.value),i(0,o)}function Q(){c.wallsMode=bi(this),i(4,c)}return[o,s,r,l,c,n,a,T,b,x,L,B,E,$,Y,N,j,J,q,ie,Q]}class cs extends Ce{constructor(e){super(),Me(this,e,ls,ss,Ne,{})}}function Jo(t,e,i){const n=t.slice();return n[1]=e[i],n}function Qo(t,e,i){const n=t.slice();return n[1]=e[i],n}function fs(t){let e;return{c(){e=F("About")},l(i){e=y(i,"About")},m(i,n){U(i,e,n)},d(i){i&&d(e)}}}function us(t){let e=t[1].title+"",i;return{c(){i=F(e)},l(n){i=y(n,e)},m(n,o){U(n,i,o)},p:de,d(n){n&&d(i)}}}function Zo(t){let e,i;return e=new oi({props:{$$slots:{default:[us]},$$scope:{ctx:t}}}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,o){vt(e,n,o),i=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){i||(Re(e.$$.fragment,n),i=!0)},o(n){$e(e.$$.fragment,n),i=!1},d(n){_t(e,n)}}}function ds(t){let e,i,n,o;e=new oi({props:{$$slots:{default:[fs]},$$scope:{ctx:t}}});let a=t[0],s=[];for(let l=0;l<a.length;l+=1)s[l]=Zo(Qo(t,a,l));const r=l=>$e(s[l],1,1,()=>{s[l]=null});return{c(){pt(e.$$.fragment),i=g();for(let l=0;l<s.length;l+=1)s[l].c();n=wn()},l(l){Dt(e.$$.fragment,l),i=A(l);for(let c=0;c<s.length;c+=1)s[c].l(l);n=wn()},m(l,c){vt(e,l,c),U(l,i,c);for(let u=0;u<s.length;u+=1)s[u].m(l,c);U(l,n,c),o=!0},p(l,c){const u={};if(c&64&&(u.$$scope={dirty:c,ctx:l}),e.$set(u),c&1){a=l[0];let h;for(h=0;h<a.length;h+=1){const T=Qo(l,a,h);s[h]?(s[h].p(T,c),Re(s[h],1)):(s[h]=Zo(T),s[h].c(),Re(s[h],1),s[h].m(n.parentNode,n))}for(Dn(),h=a.length;h<s.length;h+=1)r(h);Ln()}},i(l){if(!o){Re(e.$$.fragment,l);for(let c=0;c<a.length;c+=1)Re(s[c]);o=!0}},o(l){$e(e.$$.fragment,l),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$e(s[c]);o=!1},d(l){_t(e,l),l&&d(i),co(s,l),l&&d(n)}}}function ms(t){let e,i;return{c(){e=p("p"),i=F("This page is an experiment to run simulation on the GPU.")},l(n){e=v(n,"P",{});var o=_(e);i=y(o,"This page is an experiment to run simulation on the GPU."),o.forEach(d)},m(n,o){U(n,e,o),f(e,i)},p:de,d(n){n&&d(e)}}}function hs(t){let e,i,n;var o=t[1].component;function a(s){return{}}return o&&(e=Ro(o,a())),{c(){e&&pt(e.$$.fragment),i=g()},l(s){e&&Dt(e.$$.fragment,s),i=A(s)},m(s,r){e&&vt(e,s,r),U(s,i,r),n=!0},p(s,r){if(o!==(o=s[1].component)){if(e){Dn();const l=e;$e(l.$$.fragment,1,0,()=>{_t(l,1)}),Ln()}o?(e=Ro(o,a()),pt(e.$$.fragment),Re(e.$$.fragment,1),vt(e,i.parentNode,i)):e=null}},i(s){n||(e&&Re(e.$$.fragment,s),n=!0)},o(s){e&&$e(e.$$.fragment,s),n=!1},d(s){e&&_t(e,s),s&&d(i)}}}function ei(t){let e,i;return e=new ii({props:{$$slots:{default:[hs]},$$scope:{ctx:t}}}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,o){vt(e,n,o),i=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){i||(Re(e.$$.fragment,n),i=!0)},o(n){$e(e.$$.fragment,n),i=!1},d(n){_t(e,n)}}}function ps(t){let e,i,n,o,a,s;e=new Ui({props:{$$slots:{default:[ds]},$$scope:{ctx:t}}}),n=new ii({props:{$$slots:{default:[ms]},$$scope:{ctx:t}}});let r=t[0],l=[];for(let u=0;u<r.length;u+=1)l[u]=ei(Jo(t,r,u));const c=u=>$e(l[u],1,1,()=>{l[u]=null});return{c(){pt(e.$$.fragment),i=g(),pt(n.$$.fragment),o=g();for(let u=0;u<l.length;u+=1)l[u].c();a=wn()},l(u){Dt(e.$$.fragment,u),i=A(u),Dt(n.$$.fragment,u),o=A(u);for(let h=0;h<l.length;h+=1)l[h].l(u);a=wn()},m(u,h){vt(e,u,h),U(u,i,h),vt(n,u,h),U(u,o,h);for(let T=0;T<l.length;T+=1)l[T].m(u,h);U(u,a,h),s=!0},p(u,h){const T={};h&64&&(T.$$scope={dirty:h,ctx:u}),e.$set(T);const b={};if(h&64&&(b.$$scope={dirty:h,ctx:u}),n.$set(b),h&1){r=u[0];let x;for(x=0;x<r.length;x+=1){const L=Jo(u,r,x);l[x]?(l[x].p(L,h),Re(l[x],1)):(l[x]=ei(L),l[x].c(),Re(l[x],1),l[x].m(a.parentNode,a))}for(Dn(),x=r.length;x<l.length;x+=1)c(x);Ln()}},i(u){if(!s){Re(e.$$.fragment,u),Re(n.$$.fragment,u);for(let h=0;h<r.length;h+=1)Re(l[h]);s=!0}},o(u){$e(e.$$.fragment,u),$e(n.$$.fragment,u),l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)$e(l[h]);s=!1},d(u){_t(e,u),u&&d(i),_t(n,u),u&&d(o),co(l,u),u&&d(a)}}}function vs(t){let e,i,n;return i=new Ri({props:{$$slots:{default:[ps]},$$scope:{ctx:t}}}),{c(){e=p("div"),pt(i.$$.fragment)},l(o){e=v(o,"DIV",{});var a=_(e);Dt(i.$$.fragment,a),a.forEach(d)},m(o,a){U(o,e,a),vt(i,e,null),n=!0},p(o,[a]){const s={};a&64&&(s.$$scope={dirty:a,ctx:o}),i.$set(s)},i(o){n||(Re(i.$$.fragment,o),n=!0)},o(o){$e(i.$$.fragment,o),n=!1},d(o){o&&d(e),_t(i)}}}function _s(t){return[[{title:"test 1",component:zi},{title:"test 2",component:Wi},{title:"test 3",component:Ji},{title:"test 4",component:nr},{title:"test 5",component:cr},{title:"test 6",component:gr},{title:"test 7",component:Ir},{title:"test 8",component:jr},{title:"test 9",component:ua},{title:"test 10",component:ya},{title:"test 11",component:Ya},{title:"test 12",component:cs}]]}class Ts extends Ce{constructor(e){super(),Me(this,e,_s,vs,Ne,{})}}function xs(t){let e,i;return e=new Ts({}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,o){vt(e,n,o),i=!0},p:de,i(n){i||(Re(e.$$.fragment,n),i=!0)},o(n){$e(e.$$.fragment,n),i=!1},d(n){_t(e,n)}}}class Es extends Ce{constructor(e){super(),Me(this,e,null,xs,Ne,{})}}export{Es as default};
