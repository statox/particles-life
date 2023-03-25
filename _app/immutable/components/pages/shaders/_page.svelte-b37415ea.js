import{S as Ce,i as Me,s as Ne,C as En,k as p,l as v,m as _,h as d,n as h,b as U,K as W,E as Rn,F as Fn,G as yn,f as Re,t as Ie,H as Zt,R as hi,o as Ge,j as pi,Q as vi,T as wo,U as ti,A as _i,V as Ti,g as Dn,d as Ln,q as F,a as g,r as y,c as A,D as f,B as de,p as ot,O as S,u as et,P as C,M as kt,I as xi,J as Eo,L as co,N as bi,w as pt,x as Dt,y as vt,z as _t,e as wn,v as Ro}from"../../../chunks/index-ff9e742a.js";import{w as sn}from"../../../chunks/index-84a8d4d9.js";let gi=1;function ni(){return`svelte-tabs-${gi++}`}function Ai(t){let e,i,n,o;const s=t[4].default,a=En(s,t,t[3],null);return{c(){e=p("div"),a&&a.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=_(e);a&&a.l(l),l.forEach(d),this.h()},h(){h(e,"class","svelte-tabs")},m(r,l){U(r,e,l),a&&a.m(e,null),i=!0,n||(o=W(e,"keydown",t[1]),n=!0)},p(r,[l]){a&&a.p&&(!i||l&8)&&Rn(a,s,r,r[3],i?yn(s,r[3],l,null):Fn(r[3]),null)},i(r){i||(Re(a,r),i=!0)},o(r){Ie(a,r),i=!1},d(r){r&&d(e),a&&a.d(r),n=!1,o()}}}const fo={};function wi(t,e,i){const n=t.indexOf(e);t.splice(n,1),i.update(o=>o===e?t[n]||t[t.length-1]:o)}function Ei(t,e,i){let n,{$$slots:o={},$$scope:s}=e,{initialSelectedIndex:a=0}=e;const r=[],l=[],c=[],u=sn({}),m=sn({}),T=sn(null);Zt(t,T,E=>i(5,n=E));const x=sn(null);function b(E,I,Y){E.push(I),Y.update(N=>N||I),vi(()=>wi(E,I,Y))}function L(E){const I=l.indexOf(E);T.set(E),x.set(c[I])}hi(fo,{registerTab(E){b(l,E,T)},registerTabElement(E){r.push(E)},registerPanel(E){b(c,E,x)},selectTab:L,selectedTab:T,selectedPanel:x,controls:u,labeledBy:m}),Ge(()=>{L(l[a])}),pi(()=>{for(let E=0;E<l.length;E++)u.update(I=>({...I,[l[E].id]:c[E].id})),m.update(I=>({...I,[c[E].id]:l[E].id}))});async function B(E){if(E.target.classList.contains("svelte-tabs__tab")){let I=l.indexOf(n);switch(E.key){case"ArrowRight":I+=1,I>l.length-1&&(I=0),L(l[I]),r[I].focus();break;case"ArrowLeft":I-=1,I<0&&(I=l.length-1),L(l[I]),r[I].focus()}}}return t.$$set=E=>{"initialSelectedIndex"in E&&i(2,a=E.initialSelectedIndex),"$$scope"in E&&i(3,s=E.$$scope)},[T,B,a,s,o]}class Ri extends Ce{constructor(e){super(),Me(this,e,Ei,Ai,Ne,{initialSelectedIndex:2})}}function Fi(t){let e,i,n,o,s,a;const r=t[9].default,l=En(r,t,t[8],null);return{c(){e=p("li"),l&&l.c(),this.h()},l(c){e=v(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=_(e);l&&l.l(u),u.forEach(d),this.h()},h(){h(e,"role","tab"),h(e,"id",t[3].id),h(e,"aria-controls",i=t[2][t[3].id]),h(e,"aria-selected",t[1]),h(e,"tabindex",n=t[1]?0:-1),h(e,"class","svelte-tabs__tab svelte-1fbofsd"),wo(e,"svelte-tabs__selected",t[1])},m(c,u){U(c,e,u),l&&l.m(e,null),t[10](e),o=!0,s||(a=W(e,"click",t[11]),s=!0)},p(c,[u]){l&&l.p&&(!o||u&256)&&Rn(l,r,c,c[8],o?yn(r,c[8],u,null):Fn(c[8]),null),(!o||u&4&&i!==(i=c[2][c[3].id]))&&h(e,"aria-controls",i),(!o||u&2)&&h(e,"aria-selected",c[1]),(!o||u&2&&n!==(n=c[1]?0:-1))&&h(e,"tabindex",n),(!o||u&2)&&wo(e,"svelte-tabs__selected",c[1])},i(c){o||(Re(l,c),o=!0)},o(c){Ie(l,c),o=!1},d(c){c&&d(e),l&&l.d(c),t[10](null),s=!1,a()}}}function yi(t,e,i){let n,o,{$$slots:s={},$$scope:a}=e,r;const l={id:ni()},{registerTab:c,registerTabElement:u,selectTab:m,selectedTab:T,controls:x}=ti(fo);Zt(t,T,E=>i(7,n=E)),Zt(t,x,E=>i(2,o=E));let b;c(l),Ge(async()=>{await _i(),u(r)});function L(E){Ti[E?"unshift":"push"](()=>{r=E,i(0,r)})}const B=()=>m(l);return t.$$set=E=>{"$$scope"in E&&i(8,a=E.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,b=n===l)},[r,b,o,l,m,T,x,n,a,s,L,B]}class oi extends Ce{constructor(e){super(),Me(this,e,yi,Fi,Ne,{})}}function Di(t){let e,i;const n=t[1].default,o=En(n,t,t[0],null);return{c(){e=p("ul"),o&&o.c(),this.h()},l(s){e=v(s,"UL",{role:!0,class:!0});var a=_(e);o&&o.l(a),a.forEach(d),this.h()},h(){h(e,"role","tablist"),h(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,a){U(s,e,a),o&&o.m(e,null),i=!0},p(s,[a]){o&&o.p&&(!i||a&1)&&Rn(o,n,s,s[0],i?yn(n,s[0],a,null):Fn(s[0]),null)},i(s){i||(Re(o,s),i=!0)},o(s){Ie(o,s),i=!1},d(s){s&&d(e),o&&o.d(s)}}}function Li(t,e,i){let{$$slots:n={},$$scope:o}=e;return t.$$set=s=>{"$$scope"in s&&i(0,o=s.$$scope)},[o,n]}class Ui extends Ce{constructor(e){super(),Me(this,e,Li,Di,Ne,{})}}function Fo(t){let e;const i=t[6].default,n=En(i,t,t[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,s){n&&n.m(o,s),e=!0},p(o,s){n&&n.p&&(!e||s&32)&&Rn(n,i,o,o[5],e?yn(i,o[5],s,null):Fn(o[5]),null)},i(o){e||(Re(n,o),e=!0)},o(o){Ie(n,o),e=!1},d(o){n&&n.d(o)}}}function Pi(t){let e,i,n,o=t[1]===t[2]&&Fo(t);return{c(){e=p("div"),o&&o.c(),this.h()},l(s){e=v(s,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=_(e);o&&o.l(a),a.forEach(d),this.h()},h(){h(e,"id",t[2].id),h(e,"aria-labelledby",i=t[0][t[2].id]),h(e,"class","svelte-tabs__tab-panel svelte-epfyet"),h(e,"role","tabpanel")},m(s,a){U(s,e,a),o&&o.m(e,null),n=!0},p(s,[a]){s[1]===s[2]?o?(o.p(s,a),a&2&&Re(o,1)):(o=Fo(s),o.c(),Re(o,1),o.m(e,null)):o&&(Dn(),Ie(o,1,1,()=>{o=null}),Ln()),(!n||a&1&&i!==(i=s[0][s[2].id]))&&h(e,"aria-labelledby",i)},i(s){n||(Re(o),n=!0)},o(s){Ie(o),n=!1},d(s){s&&d(e),o&&o.d()}}}function Bi(t,e,i){let n,o,{$$slots:s={},$$scope:a}=e;const r={id:ni()},{registerPanel:l,selectedPanel:c,labeledBy:u}=ti(fo);return Zt(t,c,m=>i(1,o=m)),Zt(t,u,m=>i(0,n=m)),l(r),t.$$set=m=>{"$$scope"in m&&i(5,a=m.$$scope)},[n,o,r,c,u,a,s]}class ii extends Ce{constructor(e){super(),Me(this,e,Bi,Pi,Ne,{})}}const Ii=["VERTEX_SHADER","FRAGMENT_SHADER"];function St(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Un(e),e}function Un(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Fe(t,e,i,n){const o=t.createTexture();if(!o)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o}function Ve(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function De(t,e,i,n,o){const s=[];for(let r=0;r<e.length;++r){const l=Ii[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=$i(t,e[r],l,o);if(!c)throw"Can not create shader";s.push(c)}const a=Si(t,s,i,n,o);if(!a)throw"Can not create program";return a}function $i(t,e,i,n){const o=n||console.log,s=t.createShader(i);if(!s)throw"Could not load shader";if(t.shaderSource(s,e),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(s);return o(new Error("*** Error compiling shader '"+s+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(s),null}return s}function Si(t,e,i,n,o){const s=o||console.log,a=t.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(l){t.attachShader(a,l)}),i&&i.forEach(function(l,c){t.bindAttribLocation(a,n?n[c]:c,l)}),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const l=t.getProgramInfoLog(a);return s("Error in program linking:"+l),t.deleteProgram(a),null}return a}function Te(t,e){e=e||1;const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}function Ci(t){let e,i,n,o,s,a,r,l,c,u,m,T;return{c(){e=p("p"),i=F(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=g(),o=p("p"),s=F(`It is reusing the code from
    `),a=p("a"),r=F(`this site
    `),l=F("."),c=g(),u=p("ul"),m=g(),T=p("canvas"),this.h()},l(x){e=v(x,"P",{});var b=_(e);i=y(b,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),b.forEach(d),n=A(x),o=v(x,"P",{});var L=_(o);s=y(L,`It is reusing the code from
    `),a=v(L,"A",{target:!0,href:!0});var B=_(a);r=y(B,`this site
    `),B.forEach(d),l=y(L,"."),L.forEach(d),c=A(x),u=v(x,"UL",{id:!0}),_(u).forEach(d),m=A(x),T=v(x,"CANVAS",{id:!0}),_(T).forEach(d),this.h()},h(){h(a,"target","none"),h(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(u,"id","result"),h(T,"id","canvas")},m(x,b){U(x,e,b),f(e,i),U(x,n,b),U(x,o,b),f(o,s),f(o,a),f(a,r),f(o,l),U(x,c,b),U(x,u,b),U(x,m,b),U(x,T,b)},p:de,i:de,o:de,d(x){x&&d(e),x&&d(n),x&&d(o),x&&d(c),x&&d(u),x&&d(m),x&&d(T)}}}function Mi(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Ni(t){function e(){const i=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=3;const r=a.getContext("webgl");if(!r)throw"Coulndt get context";const l=De(r,[i,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),u=r.getUniformLocation(l,"srcTex"),m=r.getUniformLocation(l,"srcDimensions"),T=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,T),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const x=3,b=3,L=r.createTexture();r.bindTexture(r.TEXTURE_2D,L),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,x,b,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(u,0),r.uniform2f(m,x,b),r.drawArrays(r.TRIANGLES,0,6);const B=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,B);for(let E=0;E<3*3;++E)Mi(B[E*4])}return Ge(e),[]}class zi extends Ce{constructor(e){super(),Me(this,e,Ni,Ci,Ne,{})}}const Oi=Float32Array;function ri(t,e,i,n,o,s){const a=new Oi(16);return a[0]=2/(e-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-i),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-s),a[11]=0,a[12]=(t+e)/(t-e),a[13]=(i+n)/(i-n),a[14]=(o+s)/(o-s),a[15]=1,a}function ki(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=F(`This is the simple particles simulation from
    `),n=p("a"),o=F("webglfundamentals"),s=F(" directly copied in a svelte component."),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=y(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=_(n);o=y(u,"webglfundamentals"),u.forEach(d),s=y(c," directly copied in a svelte component."),c.forEach(d),a=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),ot(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){U(l,e,c),f(e,i),f(e,n),f(n,o),f(e,s),U(l,a,c),U(l,r,c)},p:de,i:de,o:de,d(l){l&&d(e),l&&d(a),l&&d(r)}}}function Xi(t){function e(){const i=`
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
  `,s=`
  precision highp float;
  void main() {
    gl_FragColor = vec4(0.4, 0.2, 0.9, 0.5);
  }
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const r=a.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=De(r,[i,n]),m=De(r,[o,s]);if(!u||!m)throw"Can not create programs";const T={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},x={id:r.getAttribLocation(m,"id"),positionTex:r.getUniformLocation(m,"positionTex"),texDimensions:r.getUniformLocation(m,"texDimensions"),matrix:r.getUniformLocation(m,"matrix")},b=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,b),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const L=300,B=20,E=L*B,I=new Array(E).fill(0).map((R,ce)=>ce),Y=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,Y),r.bufferData(r.ARRAY_BUFFER,new Float32Array(I),r.STATIC_DRAW),Te(r.canvas);const N=(R,ce)=>(ce===void 0&&(ce=R,R=0),Math.random()*(ce-R)+R),j=new Float32Array(I.map(R=>[N(a.width),N(a.height),0,0]).flat()),J=new Float32Array(I.map(R=>[N(-300,300),N(-300,300),0,0]).flat());function q(R,ce,ee,re){const we=R.createTexture();return R.bindTexture(R.TEXTURE_2D,we),R.texImage2D(R.TEXTURE_2D,0,R.RGBA,ee,re,0,R.RGBA,R.FLOAT,ce),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MAG_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),we}const ie=q(r,J,L,B),Q=q(r,j,L,B),z=q(r,null,L,B);if(!Q||!z)throw"Can not create position textures";function ne(R,ce){const ee=R.createFramebuffer();return R.bindFramebuffer(R.FRAMEBUFFER,ee),R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ce,0),ee}const G=ne(r,Q),w=ne(r,z);let M={fb:G,tex:Q},Z={fb:w,tex:z},oe=0;function _e(R){if(!r)return;R*=.001;const ce=R-oe;oe=R,Te(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,Z.fb),r.viewport(0,0,L,B),r.bindBuffer(r.ARRAY_BUFFER,b),r.enableVertexAttribArray(T.position),r.vertexAttribPointer(T.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,M.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,ie),r.useProgram(u),r.uniform1i(T.positionTex,0),r.uniform1i(T.velocityTex,1),r.uniform2f(T.texDimensions,L,B),r.uniform2f(T.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(T.deltaTime,ce),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,Y),r.enableVertexAttribArray(x.id),r.vertexAttribPointer(x.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Z.tex),r.useProgram(m),r.uniform2f(x.texDimensions,L,L),r.uniform1i(x.positionTex,0),r.uniformMatrix4fv(x.matrix,!1,ri(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,E);{const ee=M;M=Z,Z=ee}requestAnimationFrame(_e)}requestAnimationFrame(_e)}return Ge(()=>e()),[]}class Wi extends Ce{constructor(e){super(),Me(this,e,Xi,ki,Ne,{})}}const ln=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Yi(t,e,i,n){const o=t*e,s=new Array(o).fill(0).map((l,c)=>c),a=new Float32Array(s.map(l=>[ln(i),ln(n),0,0]).flat()),r=new Float32Array(s.map(l=>[ln(-300,300),ln(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(s),positions:a,velocities:r}}const Vi=`attribute vec4 position;
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

`;function ji(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=F(`This is the simple particles simulation from
    `),n=p("a"),o=F("webglfundamentals"),s=F(" with the shader code extracted into separate files."),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=y(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=_(n);o=y(u,"webglfundamentals"),u.forEach(d),s=y(c," with the shader code extracted into separate files."),c.forEach(d),a=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),ot(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){U(l,e,c),f(e,i),f(e,n),f(n,o),f(e,s),U(l,a,c),U(l,r,c)},p:de,i:de,o:de,d(l){l&&d(e),l&&d(a),l&&d(r)}}}function Ki(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const s=o.getContext("webgl");if(!s)throw"gl undefined";Un(s);const a=De(s,[Vi,Hi]),r=De(s,[qi,Gi]),l={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},c={id:s.getAttribLocation(r,"id"),positionTex:s.getUniformLocation(r,"positionTex"),texDimensions:s.getUniformLocation(r,"texDimensions"),matrix:s.getUniformLocation(r,"matrix")},u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const m=300,T=20,{numParticles:x,ids:b,positions:L,velocities:B}=Yi(m,T,o.width,o.height),E=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,E),s.bufferData(s.ARRAY_BUFFER,new Float32Array(b),s.STATIC_DRAW),Te(s.canvas);const I=Fe(s,B,m,T),Y=Fe(s,L,m,T),N=Fe(s,null,m,T),j=Ve(s,Y),J=Ve(s,N);let q={fb:j,tex:Y},ie={fb:J,tex:N},Q=0;function z(ne){if(!s||!u||!E)throw"Undefined params to render";ne*=.001;const G=ne-Q;Q=ne,Te(s.canvas),n(s,ie,m,T,u,l,q,I,a,G),i(s,m,E,c,ie,r,x);{const w=q;q=ie,ie=w}requestAnimationFrame(z)}requestAnimationFrame(z)}const i=(o,s,a,r,l,c,u)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,a),o.enableVertexAttribArray(r.id),o.vertexAttribPointer(r.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,l.tex),o.useProgram(c),o.uniform2f(r.texDimensions,s,s),o.uniform1i(r.positionTex,0),o.uniformMatrix4fv(r.matrix,!1,ri(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,u)},n=(o,s,a,r,l,c,u,m,T,x)=>{o.bindFramebuffer(o.FRAMEBUFFER,s.fb),o.viewport(0,0,a,r),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(c.position),o.vertexAttribPointer(c.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,u.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,m),o.useProgram(T),o.uniform1i(c.positionTex,0),o.uniform1i(c.velocityTex,1),o.uniform2f(c.texDimensions,a,r),o.uniform2f(c.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(c.deltaTime,x),o.drawArrays(o.TRIANGLES,0,6)};return Ge(()=>e()),[]}class Ji extends Ce{constructor(e){super(),Me(this,e,Ki,ji,Ne,{})}}const Qi=`attribute vec2 a_position;

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
`;function er(t){let e,i,n,o,s,a,r,l,c,u,m,T;return{c(){e=p("p"),i=F(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=p("code"),o=F("requestAnimationFrame"),s=F(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),a=g(),r=p("canvas"),l=g(),c=p("button"),u=F("Add position"),this.h()},l(x){e=v(x,"P",{});var b=_(e);i=y(b,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=v(b,"CODE",{});var L=_(n);o=y(L,"requestAnimationFrame"),L.forEach(d),s=y(b,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),b.forEach(d),a=A(x),r=v(x,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=A(x),c=v(x,"BUTTON",{});var B=_(c);u=y(B,"Add position"),B.forEach(d),this.h()},h(){h(r,"id","canvas"),ot(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(x,b){U(x,e,b),f(e,i),f(e,n),f(n,o),f(e,s),U(x,a,b),U(x,r,b),U(x,l,b),U(x,c,b),f(c,u),m||(T=W(c,"click",t[1]),m=!0)},p:de,i:de,o:de,d(x){x&&d(e),x&&d(a),x&&d(r),x&&d(l),x&&d(c),m=!1,T()}}}function tr(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const s=document.getElementById("canvas");if(!s)throw"canvas undefined";const a=s.getContext("webgl");if(!a)throw"gl undefined";Un(a);const r=De(a,[Qi,Zi]);Te(a.canvas);const l=a.getAttribLocation(r,"a_position"),c=a.getUniformLocation(r,"u_resolution"),u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW);function m(){if(!a)throw"Undefined params to render";for(let Y=0;Y<=e.length-2;Y+=2)e[Y]=(e[Y]+Math.random()*2-1)%a.canvas.width,e[Y+1]=(e[Y+1]+Math.random()*0+1)%a.canvas.height;a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW),Te(a.canvas),a.viewport(0,0,a.canvas.width,a.canvas.height),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(r),a.uniform2f(c,a.canvas.width,a.canvas.height),a.enableVertexAttribArray(l),a.bindBuffer(a.ARRAY_BUFFER,u);const T=2,x=a.FLOAT,b=!1,L=0,B=0;a.vertexAttribPointer(l,T,x,b,L,B);var E=a.POINTS,I=e.length/2;a.drawArrays(E,B,I),requestAnimationFrame(m)}requestAnimationFrame(m)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Ge(()=>i()),[n,()=>n()]}class nr extends Ce{constructor(e){super(),Me(this,e,tr,er,Ne,{})}}const or=`attribute float id;
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
`;let Xt,Wt;const rr=t=>{Wt=De(t,[or,ir]),Xt={idAttributeLocation:t.getAttribLocation(Wt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Wt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Wt,"u_resolution")}},ar=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;Te(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Wt),e.uniform2f(Xt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Xt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Xt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,s);const a=1,r=e.FLOAT,l=!1,c=0,u=0;e.vertexAttribPointer(Xt.idAttributeLocation,a,r,l,c,u);const m=e.POINTS,T=o.length;e.drawArrays(m,u,T)};function sr(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=F("Create an array of render-size positions. Store this array in a texture. In each "),n=p("code"),o=F("requestAnimationFrame"),s=F(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=y(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=v(c,"CODE",{});var u=_(n);o=y(u,"requestAnimationFrame"),u.forEach(d),s=y(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(d),a=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(r,"id","canvas"),ot(r,"background-color","black"),h(r,"width",ai),h(r,"height",si)},m(l,c){U(l,e,c),f(e,i),f(e,n),f(n,o),f(e,s),U(l,a,c),U(l,r,c)},p:de,i:de,o:de,d(l){l&&d(e),l&&d(a),l&&d(r)}}}const ai=800,si=600;function lr(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";Un(n),Te(n.canvas),rr(n);const o=[0,1,2,3,4,5,6,7,8,9],s=o.map(r=>[Math.random()*ai,Math.random()*si,0,0]).flat();function a(){if(!n)throw"Undefined params to render";for(let l=0;l<=s.length-2;l+=2)s[l]=(s[l]+Math.random()*2-1)%n.canvas.width,s[l+1]=(s[l+1]+Math.random()*0+1)%n.canvas.height;const r=Fe(n,new Float32Array(s),3,3);ar({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(a)}requestAnimationFrame(a)}return Ge(()=>e()),[]}let cr=class extends Ce{constructor(e){super(),Me(this,e,lr,sr,Ne,{})}};const fr=`attribute float id;
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
`;let Yt,Vt,On;const dr=(t,e)=>{Vt=De(t,[fr,ur]),Yt={idAttributeLocation:t.getAttribLocation(Vt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Vt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Vt,"u_resolution")},On=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,On),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},mr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,On),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Vt),e.uniform2f(Yt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Yt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Yt.idAttributeLocation);const s=1,a=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(Yt.idAttributeLocation,s,a,r,l,c),e.drawArrays(e.POINTS,c,o.length)};function hr(t,e){const i=new Array(t).fill(0).map((s,a)=>a),n=i.map(s=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),o={width:i.length,height:1};return{ids:i,positions:n,texDimensions:o}}const pr=`attribute vec4 position;
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

`;let Ct,Mt,kn,Bn,In,yo,Do,Ht,vn;const _r=(t,e)=>{const{positions:i,texDimensions:n}=e;Mt=De(t,[pr,vr]),Ct={positionAttributeLocation:t.getAttribLocation(Mt,"position"),positionTexLocation:t.getUniformLocation(Mt,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(Mt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Mt,"u_resolution")},kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Bn=Fe(t,new Float32Array(i),n.width,n.height),In=Fe(t,null,n.width,n.height),yo=Ve(t,Bn),Do=Ve(t,In),Ht={fb:yo,tex:Bn},vn={fb:Do,tex:In}},Tr=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,vn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,kn),e.enableVertexAttribArray(Ct.positionAttributeLocation),e.vertexAttribPointer(Ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ht.tex),e.useProgram(Mt),e.uniform1i(Ct.positionTexLocation,0),e.uniform2f(Ct.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Ht;Ht=vn,vn=n}return Ht.tex};function xr(t){let e,i,n,o,s,a,r,l,c,u,m,T,x;return{c(){e=p("p"),i=F("Create an array of render-size positions. Store this array in a texture."),n=g(),o=p("p"),s=F("Create 2 textures which will be used to update the positions with a shader. In each "),a=p("code"),r=F("requestAnimationFrame"),l=F(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=g(),u=p("p"),m=F("Finally switch the two textures to read and write in the updated textures"),T=g(),x=p("canvas"),this.h()},l(b){e=v(b,"P",{});var L=_(e);i=y(L,"Create an array of render-size positions. Store this array in a texture."),L.forEach(d),n=A(b),o=v(b,"P",{});var B=_(o);s=y(B,"Create 2 textures which will be used to update the positions with a shader. In each "),a=v(B,"CODE",{});var E=_(a);r=y(E,"requestAnimationFrame"),E.forEach(d),l=y(B,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),B.forEach(d),c=A(b),u=v(b,"P",{});var I=_(u);m=y(I,"Finally switch the two textures to read and write in the updated textures"),I.forEach(d),T=A(b),x=v(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(x).forEach(d),this.h()},h(){h(x,"id","canvas"),ot(x,"background-color","black"),h(x,"width",li),h(x,"height",ci)},m(b,L){U(b,e,L),f(e,i),U(b,n,L),U(b,o,L),f(o,s),f(o,a),f(a,r),f(o,l),U(b,c,L),U(b,u,L),f(u,m),U(b,T,L),U(b,x,L)},p:de,i:de,o:de,d(b){b&&d(e),b&&d(n),b&&d(o),b&&d(c),b&&d(u),b&&d(T),b&&d(x)}}}const li=800,ci=600;function br(t){function e(){const i=St();Te(i.canvas);const{ids:n,positions:o,texDimensions:s}=hr(100,{width:li,height:ci});dr(i,n),_r(i,{positions:o,texDimensions:s});function a(){Te(i.canvas);const r=Tr({gl:i,texDimensions:s});mr({gl:i,positionTex:r,textureDimension:s,ids:n}),requestAnimationFrame(a)}requestAnimationFrame(a)}return Ge(()=>e()),[]}let gr=class extends Ce{constructor(e){super(),Me(this,e,br,xr,Ne,{})}};const Ar=`attribute float id;
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
`;let Lt,Nt,Xn,Wn;const Er=(t,e)=>{const{ids:i,colors:n}=e;Nt=De(t,[Ar,wr]),Lt={idAttributeLocation:t.getAttribLocation(Nt,"id"),colorAttributeLocation:t.getAttribLocation(Nt,"color"),texDimensionsUniformLocation:t.getUniformLocation(Nt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Nt,"u_resolution")},Xn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Xn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Wn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Wn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Rr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Xn),e.vertexAttribPointer(Lt.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(Lt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Wn),e.vertexAttribPointer(Lt.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(Lt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Nt),e.uniform2f(Lt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Lt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function Fr(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((a,r)=>r),o=new Array(i).fill(0).map(a=>Math.floor(Math.random()*4)),s=n.map(a=>{{const{x:l,y:c}=yr(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:s,texDimensions:t,colors:o}}const yr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},Dr=`attribute vec4 position;
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

`;let Ut,Pt,Yn,cn,$n,Lo,Uo,qt,_n,fn;const Ur=(t,e)=>{const{positions:i,texDimensions:n}=e;return Pt=De(t,[Dr,Lr]),Ut={positionAttributeLocation:t.getAttribLocation(Pt,"position"),positionTexLocation:t.getUniformLocation(Pt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(Pt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Pt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Pt,"u_resolution")},Yn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Yn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),cn=Fe(t,new Float32Array(i),n.width,n.height),$n=Fe(t,null,n.width,n.height),Lo=Ve(t,cn),Uo=Ve(t,$n),qt={fb:Lo,tex:cn},_n={fb:Uo,tex:$n},cn},Pr=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();fn||(fn=n-1);const o=n-fn;fn=n,e.bindFramebuffer(e.FRAMEBUFFER,_n.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Yn),e.enableVertexAttribArray(Ut.positionAttributeLocation),e.vertexAttribPointer(Ut.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,qt.tex),e.useProgram(Pt),e.uniform1i(Ut.positionTexLocation,0),e.uniform1f(Ut.deltaTimeUniformLocation,o),e.uniform2f(Ut.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=qt;qt=_n,_n=s}return qt.tex};function Br(t){let e,i,n,o,s,a,r,l,c,u,m=t[2]?"Play":"Pause",T,x,b,L=t[1]?"Normal Speed":"Slow Mo",B,E,I,Y,N=t[4].width*t[4].height+"",j,J,q,ie,Q,z,ne,G;return{c(){e=p("p"),i=F("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),s=F(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),T=F(m),x=g(),b=p("button"),B=F(L),E=g(),I=p("span"),Y=F("particles: "),j=F(N),J=g(),q=p("label"),ie=F("Smooth steps"),Q=g(),z=p("input"),this.h()},l(w){e=v(w,"P",{});var M=_(e);i=y(M,"Same principle with a shader to update positions and a shader to draw particles."),M.forEach(d),n=A(w),o=v(w,"P",{});var Z=_(o);s=y(Z,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Z.forEach(d),a=A(w),r=v(w,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=A(w),c=v(w,"DIV",{});var oe=_(c);u=v(oe,"BUTTON",{});var _e=_(u);T=y(_e,m),_e.forEach(d),x=A(oe),b=v(oe,"BUTTON",{});var R=_(b);B=y(R,L),R.forEach(d),E=A(oe),I=v(oe,"SPAN",{});var ce=_(I);Y=y(ce,"particles: "),j=y(ce,N),ce.forEach(d),J=A(oe),q=v(oe,"LABEL",{for:!0});var ee=_(q);ie=y(ee,"Smooth steps"),ee.forEach(d),Q=A(oe),z=v(oe,"INPUT",{type:!0,min:!0}),oe.forEach(d),this.h()},h(){h(r,"id","canvas"),ot(r,"background-color","black"),h(r,"width",t[3].width),h(r,"height",t[3].height),h(q,"for","steps"),h(z,"type","number"),h(z,"min",0)},m(w,M){U(w,e,M),f(e,i),U(w,n,M),U(w,o,M),f(o,s),U(w,a,M),U(w,r,M),U(w,l,M),U(w,c,M),f(c,u),f(u,T),f(c,x),f(c,b),f(b,B),f(c,E),f(c,I),f(I,Y),f(I,j),f(c,J),f(c,q),f(q,ie),f(c,Q),f(c,z),S(z,t[0]),ne||(G=[W(u,"click",t[5]),W(b,"click",t[6]),W(z,"input",t[7])],ne=!0)},p(w,[M]){M&4&&m!==(m=w[2]?"Play":"Pause")&&et(T,m),M&2&&L!==(L=w[1]?"Normal Speed":"Slow Mo")&&et(B,L),M&1&&C(z.value)!==w[0]&&S(z,w[0])},i:de,o:de,d(w){w&&d(e),w&&d(n),w&&d(o),w&&d(a),w&&d(r),w&&d(l),w&&d(c),ne=!1,kt(G)}}}function Ir(t,e,i){const n={width:800,height:600},o={width:100,height:100};let s=1,a=!1,r=!0;function l(){const T=St();Te(T.canvas);const{ids:x,positions:b,colors:L}=Fr(o,{width:n.width,height:n.height});Er(T,{ids:x,colors:L,texDimensions:o});let B=Ur(T,{positions:b,texDimensions:o});function E(){if(Te(T.canvas),!r)for(let I=0;I<s;I++)B=Pr({gl:T,texDimensions:o});return Rr({gl:T,positionTex:B,textureDimension:o,ids:x}),r?requestAnimationFrame(E):a?setTimeout(()=>requestAnimationFrame(E),1e3):requestAnimationFrame(E)}requestAnimationFrame(E)}Ge(()=>l());const c=()=>i(2,r=!r),u=()=>i(1,a=!a);function m(){s=C(this.value),i(0,s)}return[s,a,r,n,o,c,u,m]}class $r extends Ce{constructor(e){super(),Me(this,e,Ir,Br,Ne,{})}}const Sr=`attribute float id;
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
`;let Bt,zt,Vn,Hn;const Mr=(t,e)=>{const{ids:i,colors:n}=e;zt=De(t,[Sr,Cr]),Bt={idAttributeLocation:t.getAttribLocation(zt,"id"),colorAttributeLocation:t.getAttribLocation(zt,"color"),texDimensionsUniformLocation:t.getUniformLocation(zt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(zt,"u_resolution")},Vn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Vn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Hn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Hn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Nr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Vn),e.vertexAttribPointer(Bt.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(Bt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Hn),e.vertexAttribPointer(Bt.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(Bt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(zt),e.uniform2f(Bt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Bt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function zr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="disk"){const{x:u,y:m}=kr(i,20);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Or(i,550);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Xr(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Po(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Po(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Or=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},kr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},Xr=(t,e,i)=>{const n=qn(e,0,i,0,t.width,!1),o=qn(e,0,i,0,t.height,!1);return{x:n,y:o}},Po=(t,e,i,n)=>{const o=qn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},qn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?Bo(a,n,o):Bo(a,o,n):a},Bo=function(t,e,i){return Math.max(Math.min(t,i),e)},Wr=`attribute vec4 position;
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

`;let ct,ft,Gn,un,Sn,Io,$o,Gt,Tn;const Vr=(t,e)=>{const{positions:i,texDimensions:n}=e;return ft=De(t,[Wr,Yr]),ct={positionAttributeLocation:t.getAttribLocation(ft,"position"),positionTexLocation:t.getUniformLocation(ft,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ft,"interactionRange"),dragUniformLocation:t.getUniformLocation(ft,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ft,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ft,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ft,"u_resolution")},Gn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),un=Fe(t,new Float32Array(i),n.width,n.height),Sn=Fe(t,null,n.width,n.height),Io=Ve(t,un),$o=Ve(t,Sn),Gt={fb:Io,tex:un},Tn={fb:$o,tex:Sn},un},Hr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,Tn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Gn),e.enableVertexAttribArray(ct.positionAttributeLocation),e.vertexAttribPointer(ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Gt.tex),e.useProgram(ft),e.uniform1i(ct.positionTexLocation,0),e.uniform1f(ct.dragUniformLocation,o),e.uniform1f(ct.interactionRangeUniformLocation,n),e.uniform1f(ct.deltaTimeUniformLocation,s),e.uniform2f(ct.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=Gt;Gt=Tn,Tn=a}return Gt.tex};function qr(t){let e,i,n,o,s,a,r,l,c,u,m=t[2]?"Play":"Pause",T,x,b,L=t[1]?"Normal Speed":"Slow Mo",B,E,I,Y,N=t[5].width*t[5].height+"",j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,$e;return{c(){e=p("p"),i=F("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),s=F(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),T=F(m),x=g(),b=p("button"),B=F(L),E=g(),I=p("span"),Y=F("particles: "),j=F(N),J=g(),q=p("label"),ie=F("Smooth steps"),Q=g(),z=p("input"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("ul"),this.h()},l(O){e=v(O,"P",{});var k=_(e);i=y(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(d),n=A(O),o=v(O,"P",{});var ze=_(o);s=y(ze,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ze.forEach(d),a=A(O),r=v(O,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=A(O),c=v(O,"DIV",{});var D=_(c);u=v(D,"BUTTON",{});var te=_(u);T=y(te,m),te.forEach(d),x=A(D),b=v(D,"BUTTON",{});var Oe=_(b);B=y(Oe,L),Oe.forEach(d),E=A(D),I=v(D,"SPAN",{});var Se=_(I);Y=y(Se,"particles: "),j=y(Se,N),Se.forEach(d),J=A(D),q=v(D,"LABEL",{for:!0});var K=_(q);ie=y(K,"Smooth steps"),K.forEach(d),Q=A(D),z=v(D,"INPUT",{type:!0,min:!0}),D.forEach(d),ne=A(O),G=v(O,"DIV",{});var ke=_(G);w=v(ke,"UL",{});var le=_(w);M=v(le,"LI",{});var ge=_(M);Z=v(ge,"LABEL",{for:!0});var Xe=_(Z);oe=y(Xe,"Interaction Range"),Xe.forEach(d),_e=A(ge),R=v(ge,"INPUT",{id:!0,type:!0,min:!0}),ge.forEach(d),ce=A(le),ee=v(le,"LI",{});var me=_(ee);re=v(me,"LABEL",{for:!0});var pe=_(re);we=y(pe,"Drag"),pe.forEach(d),xe=A(me),V=v(me,"INPUT",{id:!0,type:!0,min:!0}),me.forEach(d),Ue=A(le),fe=v(le,"LI",{});var Ae=_(fe);ae=v(Ae,"LABEL",{for:!0});var Le=_(ae);Pe=y(Le,"Time step"),Le.forEach(d),be=A(Ae),H=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),Be=A(le),he=v(le,"UL",{}),_(he).forEach(d),le.forEach(d),ke.forEach(d),this.h()},h(){h(r,"id","canvas"),ot(r,"background-color","black"),h(r,"width",t[4].width),h(r,"height",t[4].height),h(q,"for","steps"),h(z,"type","number"),h(z,"min",0),h(Z,"for","interactionRange"),h(R,"id","interactionRange"),h(R,"type","number"),h(R,"min",0),h(re,"for","drag"),h(V,"id","drag"),h(V,"type","number"),h(V,"min",0),h(ae,"for","deltaTime"),h(H,"id","deltaTime"),h(H,"type","number"),h(H,"min",0)},m(O,k){U(O,e,k),f(e,i),U(O,n,k),U(O,o,k),f(o,s),U(O,a,k),U(O,r,k),U(O,l,k),U(O,c,k),f(c,u),f(u,T),f(c,x),f(c,b),f(b,B),f(c,E),f(c,I),f(I,Y),f(I,j),f(c,J),f(c,q),f(q,ie),f(c,Q),f(c,z),S(z,t[0]),U(O,ne,k),U(O,G,k),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[3].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[3].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[3].timeStep),f(w,Be),f(w,he),ue||($e=[W(u,"click",t[6]),W(b,"click",t[7]),W(z,"input",t[8]),W(R,"input",t[9]),W(V,"input",t[10]),W(H,"input",t[11])],ue=!0)},p(O,[k]){k&4&&m!==(m=O[2]?"Play":"Pause")&&et(T,m),k&2&&L!==(L=O[1]?"Normal Speed":"Slow Mo")&&et(B,L),k&1&&C(z.value)!==O[0]&&S(z,O[0]),k&8&&C(R.value)!==O[3].interactionRange&&S(R,O[3].interactionRange),k&8&&C(V.value)!==O[3].drag&&S(V,O[3].drag),k&8&&C(H.value)!==O[3].timeStep&&S(H,O[3].timeStep)},i:de,o:de,d(O){O&&d(e),O&&d(n),O&&d(o),O&&d(a),O&&d(r),O&&d(l),O&&d(c),O&&d(ne),O&&d(G),ue=!1,kt($e)}}}function Gr(t,e,i){const n={width:800,height:600},o={width:10,height:10};let s=1,a=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const B=St();Te(B.canvas);const{ids:E,positions:I,colors:Y}=zr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"circle"});Mr(B,{ids:E,colors:Y,texDimensions:o});let N=Vr(B,{positions:I,texDimensions:o});function j(){if(Te(B.canvas),!r)for(let J=0;J<s;J++)N=Hr({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Nr({gl:B,positionTex:N,textureDimension:o,ids:E}),r?requestAnimationFrame(j):a?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}Ge(()=>c());const u=()=>i(2,r=!r),m=()=>i(1,a=!a);function T(){s=C(this.value),i(0,s)}function x(){l.interactionRange=C(this.value),i(3,l)}function b(){l.drag=C(this.value),i(3,l)}function L(){l.timeStep=C(this.value),i(3,l)}return[s,a,r,l,n,o,u,m,T,x,b,L]}class jr extends Ce{constructor(e){super(),Me(this,e,Gr,qr,Ne,{})}}const Kr=`attribute float id;
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
`;let It,Ot,jn,Kn;const Qr=(t,e)=>{const{ids:i,colors:n}=e;Ot=De(t,[Kr,Jr]),It={idAttributeLocation:t.getAttribLocation(Ot,"id"),colorAttributeLocation:t.getAttribLocation(Ot,"color"),texDimensionsUniformLocation:t.getUniformLocation(Ot,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ot,"u_resolution")},jn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,jn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Zr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,jn),e.vertexAttribPointer(It.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(It.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Kn),e.vertexAttribPointer(It.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(It.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Ot),e.uniform2f(It.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(It.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function ea(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:u}=ta(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=oa(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=na(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=ia(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=So(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=So(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const ta=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},na=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},oa=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},ia=(t,e,i)=>{const n=Jn(e,0,i,0,t.width,!1),o=Jn(e,0,i,0,t.height,!1);return{x:n,y:o}},So=(t,e,i,n)=>{const o=Jn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Jn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?Co(a,n,o):Co(a,o,n):a},Co=function(t,e,i){return Math.max(Math.min(t,i),e)},ra=`attribute vec4 position;
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

`;let ut,dt,Qn,dn,Cn,Mo,No,jt,xn;const sa=(t,e)=>{const{positions:i,texDimensions:n}=e,o=aa.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return dt=De(t,[ra,o]),ut={positionAttributeLocation:t.getAttribLocation(dt,"position"),positionTexLocation:t.getUniformLocation(dt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(dt,"interactionRange"),dragUniformLocation:t.getUniformLocation(dt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(dt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},Qn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Qn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),dn=Fe(t,new Float32Array(i),n.width,n.height),Cn=Fe(t,null,n.width,n.height),Mo=Ve(t,dn),No=Ve(t,Cn),jt={fb:Mo,tex:dn},xn={fb:No,tex:Cn},dn},la=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,xn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Qn),e.enableVertexAttribArray(ut.positionAttributeLocation),e.vertexAttribPointer(ut.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,jt.tex),e.useProgram(dt),e.uniform1i(ut.positionTexLocation,0),e.uniform1f(ut.dragUniformLocation,o),e.uniform1f(ut.interactionRangeUniformLocation,n),e.uniform1f(ut.deltaTimeUniformLocation,s),e.uniform2f(ut.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=jt;jt=xn,xn=a}return jt.tex};function ca(t){let e,i,n,o,s,a,r,l,c,u,m,T,x,b=t[2]?"Play":"Pause",L,B,E,I=t[1]?"Normal Speed":"Slow Mo",Y,N,j,J,q=t[5].width*t[5].height+"",ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,$e,O,k,ze;return{c(){e=p("p"),i=F("This could be a kind of water simulation."),n=g(),o=p("p"),s=F(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),a=g(),r=p("p"),l=F("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=g(),u=p("canvas"),m=g(),T=p("div"),x=p("button"),L=F(b),B=g(),E=p("button"),Y=F(I),N=g(),j=p("span"),J=F("particles: "),ie=F(q),Q=g(),z=p("label"),ne=F("Smooth steps"),G=g(),w=p("input"),M=g(),Z=p("div"),oe=p("ul"),_e=p("li"),R=p("label"),ce=F("Interaction Range"),ee=g(),re=p("input"),we=g(),xe=p("li"),V=p("label"),Ue=F("Drag"),fe=g(),ae=p("input"),Pe=g(),be=p("li"),H=p("label"),Be=F("Time step"),he=g(),ue=p("input"),$e=g(),O=p("ul"),this.h()},l(D){e=v(D,"P",{});var te=_(e);i=y(te,"This could be a kind of water simulation."),te.forEach(d),n=A(D),o=v(D,"P",{});var Oe=_(o);s=y(Oe,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Oe.forEach(d),a=A(D),r=v(D,"P",{});var Se=_(r);l=y(Se,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Se.forEach(d),c=A(D),u=v(D,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(u).forEach(d),m=A(D),T=v(D,"DIV",{});var K=_(T);x=v(K,"BUTTON",{});var ke=_(x);L=y(ke,b),ke.forEach(d),B=A(K),E=v(K,"BUTTON",{});var le=_(E);Y=y(le,I),le.forEach(d),N=A(K),j=v(K,"SPAN",{});var ge=_(j);J=y(ge,"particles: "),ie=y(ge,q),ge.forEach(d),Q=A(K),z=v(K,"LABEL",{for:!0});var Xe=_(z);ne=y(Xe,"Smooth steps"),Xe.forEach(d),G=A(K),w=v(K,"INPUT",{type:!0,min:!0}),K.forEach(d),M=A(D),Z=v(D,"DIV",{});var me=_(Z);oe=v(me,"UL",{});var pe=_(oe);_e=v(pe,"LI",{});var Ae=_(_e);R=v(Ae,"LABEL",{for:!0});var Le=_(R);ce=y(Le,"Interaction Range"),Le.forEach(d),ee=A(Ae),re=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),we=A(pe),xe=v(pe,"LI",{});var qe=_(xe);V=v(qe,"LABEL",{for:!0});var P=_(V);Ue=y(P,"Drag"),P.forEach(d),fe=A(qe),ae=v(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(d),Pe=A(pe),be=v(pe,"LI",{});var $=_(be);H=v($,"LABEL",{for:!0});var Ee=_(H);Be=y(Ee,"Time step"),Ee.forEach(d),he=A($),ue=v($,"INPUT",{id:!0,type:!0,min:!0}),$.forEach(d),$e=A(pe),O=v(pe,"UL",{}),_(O).forEach(d),pe.forEach(d),me.forEach(d),this.h()},h(){h(u,"id","canvas"),ot(u,"background-color","black"),h(u,"width",t[4].width),h(u,"height",t[4].height),h(z,"for","steps"),h(w,"type","number"),h(w,"min",0),h(R,"for","interactionRange"),h(re,"id","interactionRange"),h(re,"type","number"),h(re,"min",0),h(V,"for","drag"),h(ae,"id","drag"),h(ae,"type","number"),h(ae,"min",0),h(H,"for","deltaTime"),h(ue,"id","deltaTime"),h(ue,"type","number"),h(ue,"min",0)},m(D,te){U(D,e,te),f(e,i),U(D,n,te),U(D,o,te),f(o,s),U(D,a,te),U(D,r,te),f(r,l),U(D,c,te),U(D,u,te),U(D,m,te),U(D,T,te),f(T,x),f(x,L),f(T,B),f(T,E),f(E,Y),f(T,N),f(T,j),f(j,J),f(j,ie),f(T,Q),f(T,z),f(z,ne),f(T,G),f(T,w),S(w,t[0]),U(D,M,te),U(D,Z,te),f(Z,oe),f(oe,_e),f(_e,R),f(R,ce),f(_e,ee),f(_e,re),S(re,t[3].interactionRange),f(oe,we),f(oe,xe),f(xe,V),f(V,Ue),f(xe,fe),f(xe,ae),S(ae,t[3].drag),f(oe,Pe),f(oe,be),f(be,H),f(H,Be),f(be,he),f(be,ue),S(ue,t[3].timeStep),f(oe,$e),f(oe,O),k||(ze=[W(x,"click",t[6]),W(E,"click",t[7]),W(w,"input",t[8]),W(re,"input",t[9]),W(ae,"input",t[10]),W(ue,"input",t[11])],k=!0)},p(D,[te]){te&4&&b!==(b=D[2]?"Play":"Pause")&&et(L,b),te&2&&I!==(I=D[1]?"Normal Speed":"Slow Mo")&&et(Y,I),te&1&&C(w.value)!==D[0]&&S(w,D[0]),te&8&&C(re.value)!==D[3].interactionRange&&S(re,D[3].interactionRange),te&8&&C(ae.value)!==D[3].drag&&S(ae,D[3].drag),te&8&&C(ue.value)!==D[3].timeStep&&S(ue,D[3].timeStep)},i:de,o:de,d(D){D&&d(e),D&&d(n),D&&d(o),D&&d(a),D&&d(r),D&&d(c),D&&d(u),D&&d(m),D&&d(T),D&&d(M),D&&d(Z),k=!1,kt(ze)}}}function fa(t,e,i){const n={width:800,height:600},o={width:500,height:20};let s=1,a=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const B=St();Te(B.canvas);const{ids:E,positions:I,colors:Y}=ea({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Qr(B,{ids:E,colors:Y,texDimensions:o});let N=sa(B,{positions:I,texDimensions:o});function j(){if(Te(B.canvas),!r)for(let J=0;J<s;J++)N=la({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Zr({gl:B,positionTex:N,textureDimension:o,ids:E}),r?requestAnimationFrame(j):a?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}Ge(()=>c());const u=()=>i(2,r=!r),m=()=>i(1,a=!a);function T(){s=C(this.value),i(0,s)}function x(){l.interactionRange=C(this.value),i(3,l)}function b(){l.drag=C(this.value),i(3,l)}function L(){l.timeStep=C(this.value),i(3,l)}return[s,a,r,l,n,o,u,m,T,x,b,L]}class ua extends Ce{constructor(e){super(),Me(this,e,fa,ca,Ne,{})}}const da=`attribute float id;
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
`;let wt,$t,Zn,eo;const ha=(t,e)=>{const{ids:i,colors:n}=e;$t=De(t,[da,ma]),wt={idAttributeLocation:t.getAttribLocation($t,"id"),colorAttributeLocation:t.getAttribLocation($t,"color"),sizeUniformLocation:t.getUniformLocation($t,"size"),texDimensionsUniformLocation:t.getUniformLocation($t,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation($t,"worldDimensions")},Zn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Zn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),eo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,eo),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},pa=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:s,ids:a}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Zn),e.vertexAttribPointer(wt.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(wt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,eo),e.vertexAttribPointer(wt.colorAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(wt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram($t),e.uniform1f(wt.sizeUniformLocation,s),e.uniform2f(wt.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(wt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,m,a.length)};function va(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:u}=_a(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=xa(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Ta(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=ba(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=zo(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=zo(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const _a=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Ta=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},xa=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},ba=(t,e,i)=>{const n=to(e,0,i,0,t.width,!1),o=to(e,0,i,0,t.height,!1);return{x:n,y:o}},zo=(t,e,i,n)=>{const o=to(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},to=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?Oo(a,n,o):Oo(a,o,n):a},Oo=function(t,e,i){return Math.max(Math.min(t,i),e)},ga=`attribute vec4 position;
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

`;let mt,ht,no,mn,Mn,ko,Xo,Kt,bn;const wa=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Aa.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return ht=De(t,[ga,o]),mt={positionAttributeLocation:t.getAttribLocation(ht,"position"),positionTexLocation:t.getUniformLocation(ht,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ht,"interactionRange"),dragUniformLocation:t.getUniformLocation(ht,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ht,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ht,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(ht,"worldDimensions")},no=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,no),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),mn=Fe(t,new Float32Array(i),n.width,n.height),Mn=Fe(t,null,n.width,n.height),ko=Ve(t,mn),Xo=Ve(t,Mn),Kt={fb:ko,tex:mn},bn={fb:Xo,tex:Mn},mn},Ea=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,bn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,no),e.enableVertexAttribArray(mt.positionAttributeLocation),e.vertexAttribPointer(mt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Kt.tex),e.useProgram(ht),e.uniform1i(mt.positionTexLocation,0),e.uniform1f(mt.dragUniformLocation,s),e.uniform1f(mt.interactionRangeUniformLocation,o),e.uniform1f(mt.deltaTimeUniformLocation,a),e.uniform2f(mt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(mt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Kt;Kt=bn,bn=r}return Kt.tex};function Ra(t){let e,i,n,o,s,a,r,l=t[3]?"Play":"Pause",c,u,m,T=t[2]?"Normal Speed":"Slow Mo",x,b,L,B,E=t[6].width*t[6].height+"",I,Y,N,j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,$e,O,k,ze,D,te,Oe,Se,K,ke,le,ge,Xe,me,pe,Ae,Le,qe;return{c(){e=p("p"),i=F(`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),n=g(),o=p("canvas"),s=g(),a=p("div"),r=p("button"),c=F(l),u=g(),m=p("button"),x=F(T),b=g(),L=p("span"),B=F("particles: "),I=F(E),Y=g(),N=p("label"),j=F("Smooth steps"),J=g(),q=p("input"),ie=g(),Q=p("button"),z=F("Reset"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("li"),ue=p("label"),$e=F("Particles size"),O=g(),k=p("input"),ze=g(),D=p("li"),te=p("label"),Oe=F("World: width"),Se=g(),K=p("input"),ke=g(),le=p("label"),ge=F("height"),Xe=g(),me=p("input"),pe=g(),Ae=p("ul"),this.h()},l(P){e=v(P,"P",{});var $=_(e);i=y($,`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),$.forEach(d),n=A(P),o=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(o).forEach(d),s=A(P),a=v(P,"DIV",{});var Ee=_(a);r=v(Ee,"BUTTON",{});var je=_(r);c=y(je,l),je.forEach(d),u=A(Ee),m=v(Ee,"BUTTON",{});var Ke=_(m);x=y(Ke,T),Ke.forEach(d),b=A(Ee),L=v(Ee,"SPAN",{});var it=_(L);B=y(it,"particles: "),I=y(it,E),it.forEach(d),Y=A(Ee),N=v(Ee,"LABEL",{for:!0});var st=_(N);j=y(st,"Smooth steps"),st.forEach(d),J=A(Ee),q=v(Ee,"INPUT",{type:!0,min:!0}),ie=A(Ee),Q=v(Ee,"BUTTON",{});var He=_(Q);z=y(He,"Reset"),He.forEach(d),Ee.forEach(d),ne=A(P),G=v(P,"DIV",{});var lt=_(G);w=v(lt,"UL",{});var ve=_(w);M=v(ve,"LI",{});var Je=_(M);Z=v(Je,"LABEL",{for:!0});var Tt=_(Z);oe=y(Tt,"Interaction Range"),Tt.forEach(d),_e=A(Je),R=v(Je,"INPUT",{id:!0,type:!0,min:!0}),Je.forEach(d),ce=A(ve),ee=v(ve,"LI",{});var tt=_(ee);re=v(tt,"LABEL",{for:!0});var nt=_(re);we=y(nt,"Drag"),nt.forEach(d),xe=A(tt),V=v(tt,"INPUT",{id:!0,type:!0,min:!0}),tt.forEach(d),Ue=A(ve),fe=v(ve,"LI",{});var X=_(fe);ae=v(X,"LABEL",{for:!0});var se=_(ae);Pe=y(se,"Time step"),se.forEach(d),be=A(X),H=v(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(d),Be=A(ve),he=v(ve,"LI",{});var We=_(he);ue=v(We,"LABEL",{for:!0});var xt=_(ue);$e=y(xt,"Particles size"),xt.forEach(d),O=A(We),k=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),ze=A(ve),D=v(ve,"LI",{});var ye=_(D);te=v(ye,"LABEL",{for:!0});var bt=_(te);Oe=y(bt,"World: width"),bt.forEach(d),Se=A(ye),K=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ke=A(ye),le=v(ye,"LABEL",{for:!0});var gt=_(le);ge=y(gt,"height"),gt.forEach(d),Xe=A(ye),me=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ye.forEach(d),pe=A(ve),Ae=v(ve,"UL",{}),_(Ae).forEach(d),ve.forEach(d),lt.forEach(d),this.h()},h(){h(o,"id","canvas"),ot(o,"background-color","black"),h(o,"width",t[5].width),h(o,"height",t[5].height),h(N,"for","steps"),h(q,"type","number"),h(q,"min",0),h(Z,"for","interactionRange"),h(R,"id","interactionRange"),h(R,"type","number"),h(R,"min",0),h(re,"for","drag"),h(V,"id","drag"),h(V,"type","number"),h(V,"min",0),h(ae,"for","deltaTime"),h(H,"id","deltaTime"),h(H,"type","number"),h(H,"min",0),h(ue,"for","particlesSize"),h(k,"id","particlesSize"),h(k,"type","number"),h(k,"min",0),h(te,"for","worldWidth"),h(K,"id","worldWidth"),h(K,"type","number"),h(K,"min",0),h(le,"for","worldHeight"),h(me,"id","worldHeight"),h(me,"type","number"),h(me,"min",0)},m(P,$){U(P,e,$),f(e,i),U(P,n,$),U(P,o,$),U(P,s,$),U(P,a,$),f(a,r),f(r,c),f(a,u),f(a,m),f(m,x),f(a,b),f(a,L),f(L,B),f(L,I),f(a,Y),f(a,N),f(N,j),f(a,J),f(a,q),S(q,t[1]),f(a,ie),f(a,Q),f(Q,z),U(P,ne,$),U(P,G,$),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[4].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[4].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[4].timeStep),f(w,Be),f(w,he),f(he,ue),f(ue,$e),f(he,O),f(he,k),S(k,t[4].particlesSize),f(w,ze),f(w,D),f(D,te),f(te,Oe),f(D,Se),f(D,K),S(K,t[0].width),f(D,ke),f(D,le),f(le,ge),f(D,Xe),f(D,me),S(me,t[0].height),f(w,pe),f(w,Ae),Le||(qe=[W(r,"click",t[8]),W(m,"click",t[9]),W(q,"input",t[10]),W(Q,"click",t[11]),W(R,"input",t[12]),W(V,"input",t[13]),W(H,"input",t[14]),W(k,"input",t[15]),W(K,"input",t[16]),W(me,"input",t[17])],Le=!0)},p(P,[$]){$&8&&l!==(l=P[3]?"Play":"Pause")&&et(c,l),$&4&&T!==(T=P[2]?"Normal Speed":"Slow Mo")&&et(x,T),$&2&&C(q.value)!==P[1]&&S(q,P[1]),$&16&&C(R.value)!==P[4].interactionRange&&S(R,P[4].interactionRange),$&16&&C(V.value)!==P[4].drag&&S(V,P[4].drag),$&16&&C(H.value)!==P[4].timeStep&&S(H,P[4].timeStep),$&16&&C(k.value)!==P[4].particlesSize&&S(k,P[4].particlesSize),$&1&&C(K.value)!==P[0].width&&S(K,P[0].width),$&1&&C(me.value)!==P[0].height&&S(me,P[0].height)},i:de,o:de,d(P){P&&d(e),P&&d(n),P&&d(o),P&&d(s),P&&d(a),P&&d(ne),P&&d(G),Le=!1,kt(qe)}}}function Fa(t,e,i){const n={width:800,height:600},o={width:1200,height:500},s={width:200,height:20};let a=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:20};let u,m;function T(){cancelAnimationFrame(m),u=St(),Te(u.canvas);const{ids:q,positions:ie,colors:Q}=va({texDimensions:s,worldDimensions:o,mode:"disk"});ha(u,{ids:q,colors:Q,texDimensions:s});let z=wa(u,{positions:ie,texDimensions:s});function ne(){if(Te(u.canvas),!l)for(let G=0;G<a;G++)z=Ea({gl:u,texDimensions:s,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return pa({gl:u,positionTex:z,texDimensions:s,worldDimensions:o,particlesSize:c.particlesSize,ids:q}),r?setTimeout(()=>m=requestAnimationFrame(ne),1e3):m=requestAnimationFrame(ne)}m=requestAnimationFrame(ne)}Ge(()=>T());const x=()=>i(3,l=!l),b=()=>i(2,r=!r);function L(){a=C(this.value),i(1,a)}const B=()=>T();function E(){c.interactionRange=C(this.value),i(4,c)}function I(){c.drag=C(this.value),i(4,c)}function Y(){c.timeStep=C(this.value),i(4,c)}function N(){c.particlesSize=C(this.value),i(4,c)}function j(){o.width=C(this.value),i(0,o)}function J(){o.height=C(this.value),i(0,o)}return[o,a,r,l,c,n,s,T,x,b,L,B,E,I,Y,N,j,J]}class ya extends Ce{constructor(e){super(),Me(this,e,Fa,Ra,Ne,{})}}const Da=`attribute float id;

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
`;let Et,Rt,oo,fi;const Ua=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;Rt=De(t,[Da,La]),Et={idAttributeLocation:t.getAttribLocation(Rt,"id"),sizeUniformLocation:t.getUniformLocation(Rt,"size"),texDimensionsUniformLocation:t.getUniformLocation(Rt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Rt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Rt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Rt,"colorTex")},oo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,oo),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const s=n.map(a=>[a,0,0,0]).flat();fi=Fe(t,new Float32Array(s),o.width,o.height)},Pa=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:s,ids:a}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,oo),e.vertexAttribPointer(Et.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(Et.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,fi),e.useProgram(Rt),e.uniform1f(Et.sizeUniformLocation,s),e.uniform2f(Et.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(Et.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Et.positionTexUniformLocation,0),e.uniform1i(Et.colorTexUniformLocation,1),e.drawArrays(e.POINTS,m,a.length)};function Ba(t,e,i){function n(){const s=t.getElementById(e);s&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),s.width=i.width,s.height=i.height)}function o(){const s=t.getElementById(e);s&&(t.fullscreenElement||s.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function Ia(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*3)),r=s.map(l=>{if(n==="random"){const{x:c,y:u}=$a(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=Ca(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Sa(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Ma(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Wo(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Wo(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const $a=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Sa=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Ca=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},Ma=(t,e,i)=>{const n=io(e,0,i,0,t.width,!1),o=io(e,0,i,0,t.height,!1);return{x:n,y:o}},Wo=(t,e,i,n)=>{const o=io(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},io=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?Yo(a,n,o):Yo(a,o,n):a},Yo=function(t,e,i){return Math.max(Math.min(t,i),e)},Na=`attribute vec4 position;
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

`;let rt,at,ro,hn,Nn,Vo,Ho,Jt,gn,ui;const Oa=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,s=za.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));at=De(t,[Na,s]),rt={positionAttributeLocation:t.getAttribLocation(at,"position"),interactionRangeUniformLocation:t.getUniformLocation(at,"interactionRange"),dragUniformLocation:t.getUniformLocation(at,"drag"),deltaTimeUniformLocation:t.getUniformLocation(at,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(at,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(at,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(at,"positionTex"),colorTexUniformLocation:t.getUniformLocation(at,"colorTex")},ro=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ro),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),hn=Fe(t,new Float32Array(i),o.width,o.height),Nn=Fe(t,null,o.width,o.height);const a=n.map(r=>[r,0,0,0]).flat();return ui=Fe(t,new Float32Array(a),o.width,o.height),Vo=Ve(t,hn),Ho=Ve(t,Nn),Jt={fb:Vo,tex:hn},gn={fb:Ho,tex:Nn},hn},ka=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,gn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,ro),e.enableVertexAttribArray(rt.positionAttributeLocation),e.vertexAttribPointer(rt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Jt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ui),e.useProgram(at),e.uniform1i(rt.positionTexUniformLocation,0),e.uniform1i(rt.colorTexUniformLocation,1),e.uniform1f(rt.dragUniformLocation,s),e.uniform1f(rt.interactionRangeUniformLocation,o),e.uniform1f(rt.deltaTimeUniformLocation,a),e.uniform2f(rt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(rt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Jt;Jt=gn,gn=r}return Jt.tex};function Xa(t){let e,i,n,o,s=t[3]?"Play":"Pause",a,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,m,T,x,b=t[6].width*t[6].height+"",L,B,E,I,Y,N,j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,$e,O,k,ze,D,te,Oe,Se,K,ke,le,ge,Xe,me,pe,Ae,Le,qe;return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),a=F(s),r=g(),l=p("button"),u=F(c),m=g(),T=p("span"),x=F("particles: "),L=F(b),B=g(),E=p("label"),I=F("Smooth steps"),Y=g(),N=p("input"),j=g(),J=p("button"),q=F("Reset"),ie=g(),Q=p("button"),z=F("Fullscreen"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("li"),ue=p("label"),$e=F("Particles size"),O=g(),k=p("input"),ze=g(),D=p("li"),te=p("label"),Oe=F("World: width"),Se=g(),K=p("input"),ke=g(),le=p("label"),ge=F("height"),Xe=g(),me=p("input"),pe=g(),Ae=p("ul"),this.h()},l(P){e=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(e).forEach(d),i=A(P),n=v(P,"DIV",{});var $=_(n);o=v($,"BUTTON",{});var Ee=_(o);a=y(Ee,s),Ee.forEach(d),r=A($),l=v($,"BUTTON",{});var je=_(l);u=y(je,c),je.forEach(d),m=A($),T=v($,"SPAN",{});var Ke=_(T);x=y(Ke,"particles: "),L=y(Ke,b),Ke.forEach(d),B=A($),E=v($,"LABEL",{for:!0});var it=_(E);I=y(it,"Smooth steps"),it.forEach(d),Y=A($),N=v($,"INPUT",{type:!0,min:!0}),j=A($),J=v($,"BUTTON",{});var st=_(J);q=y(st,"Reset"),st.forEach(d),ie=A($),Q=v($,"BUTTON",{});var He=_(Q);z=y(He,"Fullscreen"),He.forEach(d),$.forEach(d),ne=A(P),G=v(P,"DIV",{});var lt=_(G);w=v(lt,"UL",{});var ve=_(w);M=v(ve,"LI",{});var Je=_(M);Z=v(Je,"LABEL",{for:!0});var Tt=_(Z);oe=y(Tt,"Interaction Range"),Tt.forEach(d),_e=A(Je),R=v(Je,"INPUT",{id:!0,type:!0,min:!0}),Je.forEach(d),ce=A(ve),ee=v(ve,"LI",{});var tt=_(ee);re=v(tt,"LABEL",{for:!0});var nt=_(re);we=y(nt,"Drag"),nt.forEach(d),xe=A(tt),V=v(tt,"INPUT",{id:!0,type:!0,min:!0}),tt.forEach(d),Ue=A(ve),fe=v(ve,"LI",{});var X=_(fe);ae=v(X,"LABEL",{for:!0});var se=_(ae);Pe=y(se,"Time step"),se.forEach(d),be=A(X),H=v(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(d),Be=A(ve),he=v(ve,"LI",{});var We=_(he);ue=v(We,"LABEL",{for:!0});var xt=_(ue);$e=y(xt,"Particles size"),xt.forEach(d),O=A(We),k=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),ze=A(ve),D=v(ve,"LI",{});var ye=_(D);te=v(ye,"LABEL",{for:!0});var bt=_(te);Oe=y(bt,"World: width"),bt.forEach(d),Se=A(ye),K=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ke=A(ye),le=v(ye,"LABEL",{for:!0});var gt=_(le);ge=y(gt,"height"),gt.forEach(d),Xe=A(ye),me=v(ye,"INPUT",{id:!0,type:!0,min:!0}),ye.forEach(d),pe=A(ve),Ae=v(ve,"UL",{}),_(Ae).forEach(d),ve.forEach(d),lt.forEach(d),this.h()},h(){h(e,"id","canvas"),ot(e,"background-color","black"),h(e,"width",t[5].width),h(e,"height",t[5].height),h(E,"for","steps"),h(N,"type","number"),h(N,"min",0),h(Z,"for","interactionRange"),h(R,"id","interactionRange"),h(R,"type","number"),h(R,"min",0),h(re,"for","drag"),h(V,"id","drag"),h(V,"type","number"),h(V,"min",0),h(ae,"for","deltaTime"),h(H,"id","deltaTime"),h(H,"type","number"),h(H,"min",0),h(ue,"for","particlesSize"),h(k,"id","particlesSize"),h(k,"type","number"),h(k,"min",0),h(te,"for","worldWidth"),h(K,"id","worldWidth"),h(K,"type","number"),h(K,"min",0),h(le,"for","worldHeight"),h(me,"id","worldHeight"),h(me,"type","number"),h(me,"min",0)},m(P,$){U(P,e,$),U(P,i,$),U(P,n,$),f(n,o),f(o,a),f(n,r),f(n,l),f(l,u),f(n,m),f(n,T),f(T,x),f(T,L),f(n,B),f(n,E),f(E,I),f(n,Y),f(n,N),S(N,t[1]),f(n,j),f(n,J),f(J,q),f(n,ie),f(n,Q),f(Q,z),U(P,ne,$),U(P,G,$),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[4].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[4].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[4].timeStep),f(w,Be),f(w,he),f(he,ue),f(ue,$e),f(he,O),f(he,k),S(k,t[4].particlesSize),f(w,ze),f(w,D),f(D,te),f(te,Oe),f(D,Se),f(D,K),S(K,t[0].width),f(D,ke),f(D,le),f(le,ge),f(D,Xe),f(D,me),S(me,t[0].height),f(w,pe),f(w,Ae),Le||(qe=[W(o,"click",t[9]),W(l,"click",t[10]),W(N,"input",t[11]),W(J,"click",t[12]),W(Q,"click",t[8]),W(R,"input",t[13]),W(V,"input",t[14]),W(H,"input",t[15]),W(k,"input",t[16]),W(K,"input",t[17]),W(me,"input",t[18])],Le=!0)},p(P,[$]){$&8&&s!==(s=P[3]?"Play":"Pause")&&et(a,s),$&4&&c!==(c=P[2]?"Normal Speed":"Slow Mo")&&et(u,c),$&2&&C(N.value)!==P[1]&&S(N,P[1]),$&16&&C(R.value)!==P[4].interactionRange&&S(R,P[4].interactionRange),$&16&&C(V.value)!==P[4].drag&&S(V,P[4].drag),$&16&&C(H.value)!==P[4].timeStep&&S(H,P[4].timeStep),$&16&&C(k.value)!==P[4].particlesSize&&S(k,P[4].particlesSize),$&1&&C(K.value)!==P[0].width&&S(K,P[0].width),$&1&&C(me.value)!==P[0].height&&S(me,P[0].height)},i:de,o:de,d(P){P&&d(e),P&&d(i),P&&d(n),P&&d(ne),P&&d(G),Le=!1,kt(qe)}}}function Wa(t,e,i){const n={width:800,height:600},o={width:800,height:600},s={width:500,height:10};let a=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let u,m;function T(){cancelAnimationFrame(m),u=St(),Te(u.canvas);const{ids:ie,positions:Q,colors:z}=Ia({texDimensions:s,worldDimensions:o,mode:"disk"});Ua(u,{ids:ie,colors:z,texDimensions:s});let ne=Oa(u,{positions:Q,colors:z,texDimensions:s});function G(){if(!l)for(let w=0;w<a;w++)ne=ka({gl:u,texDimensions:s,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Pa({gl:u,positionTex:ne,texDimensions:s,worldDimensions:o,particlesSize:c.particlesSize,ids:ie}),r?setTimeout(()=>m=requestAnimationFrame(G),1e3):m=requestAnimationFrame(G)}m=requestAnimationFrame(G)}const{enableFullscreen:x}=Ba(document,"canvas",n);document.addEventListener("keydown",ie=>{ie.code==="Space"&&(i(3,l=!l),ie.preventDefault())}),Ge(()=>T());const b=()=>i(3,l=!l),L=()=>i(2,r=!r);function B(){a=C(this.value),i(1,a)}const E=()=>T();function I(){c.interactionRange=C(this.value),i(4,c)}function Y(){c.drag=C(this.value),i(4,c)}function N(){c.timeStep=C(this.value),i(4,c)}function j(){c.particlesSize=C(this.value),i(4,c)}function J(){o.width=C(this.value),i(0,o)}function q(){o.height=C(this.value),i(0,o)}return[o,a,r,l,c,n,s,T,x,b,L,B,E,I,Y,N,j,J,q]}class Ya extends Ce{constructor(e){super(),Me(this,e,Wa,Xa,Ne,{})}}const Va=`attribute float id;

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
`;let Ft,yt,ao,di;const qa=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;yt=De(t,[Va,Ha]),Ft={idAttributeLocation:t.getAttribLocation(yt,"id"),sizeUniformLocation:t.getUniformLocation(yt,"size"),texDimensionsUniformLocation:t.getUniformLocation(yt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(yt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(yt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(yt,"colorTex")},ao=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ao),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const s=n.map(a=>[a,0,0,0]).flat();di=Fe(t,new Float32Array(s),o.width,o.height)},Ga=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:s,ids:a}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;Te(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,ao),e.vertexAttribPointer(Ft.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(Ft.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,di),e.useProgram(yt),e.uniform1f(Ft.sizeUniformLocation,s),e.uniform2f(Ft.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(Ft.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Ft.positionTexUniformLocation,0),e.uniform1i(Ft.colorTexUniformLocation,1),e.drawArrays(e.POINTS,m,a.length)};function ja(t,e,i){function n(){const s=t.getElementById(e);s&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),s.width=i.width,s.height=i.height)}function o(){const s=t.getElementById(e);s&&(t.fullscreenElement||s.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function Ka(t){const{texDimensions:e,worldDimensions:i,mode:n,nbColors:o}=t,s=e.width*e.height,a=new Array(s).fill(0).map((c,u)=>u),r=new Array(s).fill(0).map(c=>Math.floor(Math.random()*o)),l=a.map(c=>{if(n==="random"){const{x:u,y:m}=Ja(i);return[u,m,0,0]}if(n==="mesh"){const{x:u,y:m}=ns(i,c,s);return[u,m,0,0]}if(n==="disk"){const u=Math.min(i.width,i.height)*.3,{x:m,y:T}=Za(i,u);return[m,T,0,0]}if(n==="disk_offset"){const{x:T,y:x}=es(i,100,-150);return[T,x,0,0]}if(n==="square"){const{x:m,y:T}=Qa(i,300);return[m,T,0,0]}if(n==="idDiagonal"){const{x:u,y:m}=ts(i,c,a.length);return[u,m,0,0]}if(n==="sinusoidal"){const{x:u,y:m}=qo(i,c,a.length,{x:1,y:5});return[u,m,0,0]}if(n==="circle"){const{x:u,y:m}=qo(i,c,a.length,{x:1,y:1});return[u,m,0,0]}}).flat();return{ids:a,positions:l,texDimensions:e,colors:r}}const Ja=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Qa=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Za=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},es=(t,e,i)=>{const n=e*Math.random(),o=Math.random()*2*Math.PI,s=n*Math.cos(o)+t.width/2,a=n*Math.sin(o)+t.height/2;return{x:s+i,y:a}},ts=(t,e,i)=>{const n=so(e,0,i,0,t.width,!1),o=so(e,0,i,0,t.height,!1);return{x:n,y:o}},qo=(t,e,i,n)=>{const o=so(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},ns=(t,e,i)=>{const n=Math.sqrt(i),o=Math.ceil(i/n),s=t.width/o,a=t.height/n,r=e%o*s+s/2,l=Math.floor(e/o)*a+a/2;return{x:r,y:l}},so=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?Go(a,n,o):Go(a,o,n):a},Go=function(t,e,i){return Math.max(Math.min(t,i),e)},os=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,is=`precision highp float;

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

vec2 getNewPosition(float wallsMode, vec2 position, vec2 direction) {
    if (wallsMode == 0.0) {
        // Wrapped world
        return newPosition_wrapWorld(position, direction);
    }

    if (wallsMode == 1.0) {
        // Box
        return newPosition_box(position, direction);
    }

    // Bottom wall - horizontal wrap
    return newPosition_bottomWall(position, direction);
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
                // if (color == otherColor) {
                //     colorCoef = 2.0;
                // }

                direction = direction + (diff * diffCoef * colorCoef);
            }
        }
    }
    direction = (direction * deltaTime) / drag;
    direction = direction + gravity * gravityFactor;

    vec2 newPosition = getNewPosition(wallsMode, position, direction);

    gl_FragColor = vec4(newPosition, 0, 1);
}
`;let Qe,Ze,lo,pn,zn,jo,Ko,Qt,An,mi;const rs=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,s=is.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));Ze=De(t,[os,s]),Qe={positionAttributeLocation:t.getAttribLocation(Ze,"position"),wallsModeUniformLocation:t.getUniformLocation(Ze,"wallsMode"),gravityFactorUniformLocation:t.getUniformLocation(Ze,"gravityFactor"),interactionRangeUniformLocation:t.getUniformLocation(Ze,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ze,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ze,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ze,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Ze,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Ze,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Ze,"colorTex")},lo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,lo),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),pn=Fe(t,new Float32Array(i),o.width,o.height),zn=Fe(t,null,o.width,o.height);const a=n.map(r=>[r,0,0,0]).flat();return mi=Fe(t,new Float32Array(a),o.width,o.height),jo=Ve(t,pn),Ko=Ve(t,zn),Qt={fb:jo,tex:pn},An={fb:Ko,tex:zn},pn},as=t=>{const{gl:e,texDimensions:i,worldDimensions:n,wallsMode:o,gravityFactor:s,interactionRange:a,drag:r,deltaTime:l}=t;e.bindFramebuffer(e.FRAMEBUFFER,An.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,lo),e.enableVertexAttribArray(Qe.positionAttributeLocation),e.vertexAttribPointer(Qe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Qt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,mi),e.useProgram(Ze),e.uniform1i(Qe.positionTexUniformLocation,0),e.uniform1i(Qe.colorTexUniformLocation,1);const u={wraped:0,box:1,bottom_wall:2}[o];e.uniform1f(Qe.wallsModeUniformLocation,u),e.uniform1f(Qe.gravityFactorUniformLocation,s),e.uniform1f(Qe.dragUniformLocation,r),e.uniform1f(Qe.interactionRangeUniformLocation,a),e.uniform1f(Qe.deltaTimeUniformLocation,l),e.uniform2f(Qe.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Qe.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const m=Qt;Qt=An,An=m}return Qt.tex};function ss(t,e,i){const n=t.slice();return n[23]=e[i],n}function ls(t){let e,i;return{c(){e=p("option"),i=F(t[23]),this.h()},l(n){e=v(n,"OPTION",{});var o=_(e);i=y(o,t[23]),o.forEach(d),this.h()},h(){e.__value=t[23],e.value=e.__value},m(n,o){U(n,e,o),f(e,i)},p:de,d(n){n&&d(e)}}}function cs(t){let e,i,n,o,s=t[3]?"Play":"Pause",a,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,m,T,x,b=t[6].width*t[6].height+"",L,B,E,I,Y,N,j,J,q,ie,Q,z,ne,G,w,M,Z,oe,_e,R,ce,ee,re,we,xe,V,Ue,fe,ae,Pe,be,H,Be,he,ue,$e,O,k,ze,D,te,Oe,Se,K,ke,le,ge,Xe,me,pe,Ae,Le,qe,P,$,Ee,je,Ke,it,st,He,lt,ve,Je,Tt,tt=["box","wraped","bottom_wall"],nt=[];for(let X=0;X<3;X+=1)nt[X]=ls(ss(t,tt,X));return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),a=F(s),r=g(),l=p("button"),u=F(c),m=g(),T=p("span"),x=F("particles: "),L=F(b),B=g(),E=p("label"),I=F("Smooth steps"),Y=g(),N=p("input"),j=g(),J=p("button"),q=F("Reset"),ie=g(),Q=p("button"),z=F("Fullscreen"),ne=g(),G=p("div"),w=p("ul"),M=p("li"),Z=p("label"),oe=F("Interaction Range"),_e=g(),R=p("input"),ce=g(),ee=p("li"),re=p("label"),we=F("Drag"),xe=g(),V=p("input"),Ue=g(),fe=p("li"),ae=p("label"),Pe=F("Time step"),be=g(),H=p("input"),Be=g(),he=p("li"),ue=p("label"),$e=F("Gravity factor"),O=g(),k=p("input"),ze=g(),D=p("li"),te=p("label"),Oe=F("Particles size"),Se=g(),K=p("input"),ke=g(),le=p("li"),ge=p("label"),Xe=F("World: width"),me=g(),pe=p("input"),Ae=g(),Le=p("label"),qe=F("height"),P=g(),$=p("input"),Ee=g(),je=p("li"),Ke=p("label"),it=F("Walls mode"),st=g(),He=p("select");for(let X=0;X<3;X+=1)nt[X].c();lt=g(),ve=p("ul"),this.h()},l(X){e=v(X,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(e).forEach(d),i=A(X),n=v(X,"DIV",{});var se=_(n);o=v(se,"BUTTON",{});var We=_(o);a=y(We,s),We.forEach(d),r=A(se),l=v(se,"BUTTON",{});var xt=_(l);u=y(xt,c),xt.forEach(d),m=A(se),T=v(se,"SPAN",{});var ye=_(T);x=y(ye,"particles: "),L=y(ye,b),ye.forEach(d),B=A(se),E=v(se,"LABEL",{for:!0});var bt=_(E);I=y(bt,"Smooth steps"),bt.forEach(d),Y=A(se),N=v(se,"INPUT",{type:!0,min:!0}),j=A(se),J=v(se,"BUTTON",{});var gt=_(J);q=y(gt,"Reset"),gt.forEach(d),ie=A(se),Q=v(se,"BUTTON",{});var uo=_(Q);z=y(uo,"Fullscreen"),uo.forEach(d),se.forEach(d),ne=A(X),G=v(X,"DIV",{});var mo=_(G);w=v(mo,"UL",{});var Ye=_(w);M=v(Ye,"LI",{});var en=_(M);Z=v(en,"LABEL",{for:!0});var ho=_(Z);oe=y(ho,"Interaction Range"),ho.forEach(d),_e=A(en),R=v(en,"INPUT",{id:!0,type:!0,min:!0}),en.forEach(d),ce=A(Ye),ee=v(Ye,"LI",{});var tn=_(ee);re=v(tn,"LABEL",{for:!0});var po=_(re);we=y(po,"Drag"),po.forEach(d),xe=A(tn),V=v(tn,"INPUT",{id:!0,type:!0,min:!0}),tn.forEach(d),Ue=A(Ye),fe=v(Ye,"LI",{});var nn=_(fe);ae=v(nn,"LABEL",{for:!0});var vo=_(ae);Pe=y(vo,"Time step"),vo.forEach(d),be=A(nn),H=v(nn,"INPUT",{id:!0,type:!0,min:!0}),nn.forEach(d),Be=A(Ye),he=v(Ye,"LI",{});var on=_(he);ue=v(on,"LABEL",{for:!0});var _o=_(ue);$e=y(_o,"Gravity factor"),_o.forEach(d),O=A(on),k=v(on,"INPUT",{id:!0,type:!0,min:!0,max:!0}),on.forEach(d),ze=A(Ye),D=v(Ye,"LI",{});var rn=_(D);te=v(rn,"LABEL",{for:!0});var To=_(te);Oe=y(To,"Particles size"),To.forEach(d),Se=A(rn),K=v(rn,"INPUT",{id:!0,type:!0,min:!0}),rn.forEach(d),ke=A(Ye),le=v(Ye,"LI",{});var At=_(le);ge=v(At,"LABEL",{for:!0});var xo=_(ge);Xe=y(xo,"World: width"),xo.forEach(d),me=A(At),pe=v(At,"INPUT",{id:!0,type:!0,min:!0}),Ae=A(At),Le=v(At,"LABEL",{for:!0});var bo=_(Le);qe=y(bo,"height"),bo.forEach(d),P=A(At),$=v(At,"INPUT",{id:!0,type:!0,min:!0}),At.forEach(d),Ee=A(Ye),je=v(Ye,"LI",{});var an=_(je);Ke=v(an,"LABEL",{for:!0});var go=_(Ke);it=y(go,"Walls mode"),go.forEach(d),st=A(an),He=v(an,"SELECT",{});var Ao=_(He);for(let Pn=0;Pn<3;Pn+=1)nt[Pn].l(Ao);Ao.forEach(d),an.forEach(d),lt=A(Ye),ve=v(Ye,"UL",{}),_(ve).forEach(d),Ye.forEach(d),mo.forEach(d),this.h()},h(){h(e,"id","canvas"),ot(e,"background-color","black"),h(e,"width",t[5].width),h(e,"height",t[5].height),h(E,"for","steps"),h(N,"type","number"),h(N,"min",0),h(Z,"for","interactionRange"),h(R,"id","interactionRange"),h(R,"type","number"),h(R,"min",0),h(re,"for","drag"),h(V,"id","drag"),h(V,"type","number"),h(V,"min",0),h(ae,"for","deltaTime"),h(H,"id","deltaTime"),h(H,"type","number"),h(H,"min",0),h(ue,"for","gravityFactor"),h(k,"id","gravityFactor"),h(k,"type","number"),h(k,"min",-5),h(k,"max",5),h(te,"for","particlesSize"),h(K,"id","particlesSize"),h(K,"type","number"),h(K,"min",0),h(ge,"for","worldWidth"),h(pe,"id","worldWidth"),h(pe,"type","number"),h(pe,"min",0),h(Le,"for","worldHeight"),h($,"id","worldHeight"),h($,"type","number"),h($,"min",0),h(Ke,"for","wallsMode"),t[4].wallsMode===void 0&&xi(()=>t[20].call(He))},m(X,se){U(X,e,se),U(X,i,se),U(X,n,se),f(n,o),f(o,a),f(n,r),f(n,l),f(l,u),f(n,m),f(n,T),f(T,x),f(T,L),f(n,B),f(n,E),f(E,I),f(n,Y),f(n,N),S(N,t[1]),f(n,j),f(n,J),f(J,q),f(n,ie),f(n,Q),f(Q,z),U(X,ne,se),U(X,G,se),f(G,w),f(w,M),f(M,Z),f(Z,oe),f(M,_e),f(M,R),S(R,t[4].interactionRange),f(w,ce),f(w,ee),f(ee,re),f(re,we),f(ee,xe),f(ee,V),S(V,t[4].drag),f(w,Ue),f(w,fe),f(fe,ae),f(ae,Pe),f(fe,be),f(fe,H),S(H,t[4].timeStep),f(w,Be),f(w,he),f(he,ue),f(ue,$e),f(he,O),f(he,k),S(k,t[4].gravityFactor),f(w,ze),f(w,D),f(D,te),f(te,Oe),f(D,Se),f(D,K),S(K,t[4].particlesSize),f(w,ke),f(w,le),f(le,ge),f(ge,Xe),f(le,me),f(le,pe),S(pe,t[0].width),f(le,Ae),f(le,Le),f(Le,qe),f(le,P),f(le,$),S($,t[0].height),f(w,Ee),f(w,je),f(je,Ke),f(Ke,it),f(je,st),f(je,He);for(let We=0;We<3;We+=1)nt[We].m(He,null);Eo(He,t[4].wallsMode),f(w,lt),f(w,ve),Je||(Tt=[W(o,"click",t[9]),W(l,"click",t[10]),W(N,"input",t[11]),W(J,"click",t[12]),W(Q,"click",t[8]),W(R,"input",t[13]),W(V,"input",t[14]),W(H,"input",t[15]),W(k,"input",t[16]),W(K,"input",t[17]),W(pe,"input",t[18]),W($,"input",t[19]),W(He,"change",t[20])],Je=!0)},p(X,[se]){se&8&&s!==(s=X[3]?"Play":"Pause")&&et(a,s),se&4&&c!==(c=X[2]?"Normal Speed":"Slow Mo")&&et(u,c),se&2&&C(N.value)!==X[1]&&S(N,X[1]),se&16&&C(R.value)!==X[4].interactionRange&&S(R,X[4].interactionRange),se&16&&C(V.value)!==X[4].drag&&S(V,X[4].drag),se&16&&C(H.value)!==X[4].timeStep&&S(H,X[4].timeStep),se&16&&C(k.value)!==X[4].gravityFactor&&S(k,X[4].gravityFactor),se&16&&C(K.value)!==X[4].particlesSize&&S(K,X[4].particlesSize),se&1&&C(pe.value)!==X[0].width&&S(pe,X[0].width),se&1&&C($.value)!==X[0].height&&S($,X[0].height),se&16&&Eo(He,X[4].wallsMode)},i:de,o:de,d(X){X&&d(e),X&&d(i),X&&d(n),X&&d(ne),X&&d(G),co(nt,X),Je=!1,kt(Tt)}}}function fs(t,e,i){const n={width:800,height:600},o={width:800,height:600},s={width:500,height:10};let a=10,r=!1,l=!0;const c={interactionRange:10,drag:5,timeStep:10,particlesSize:3,gravityFactor:0,wallsMode:"wraped"};let u,m;function T(){cancelAnimationFrame(m),u=St(),Te(u.canvas);const{ids:z,positions:ne,colors:G}=Ka({texDimensions:s,worldDimensions:o,mode:"mesh",nbColors:1});qa(u,{ids:z,colors:G,texDimensions:s});let w=rs(u,{positions:ne,colors:G,texDimensions:s});function M(){if(!l)for(let Z=0;Z<a;Z++)w=as({gl:u,texDimensions:s,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep,gravityFactor:c.gravityFactor,wallsMode:c.wallsMode});return Ga({gl:u,positionTex:w,texDimensions:s,worldDimensions:o,particlesSize:c.particlesSize,ids:z}),r?setTimeout(()=>m=requestAnimationFrame(M),1e3):m=requestAnimationFrame(M)}m=requestAnimationFrame(M)}const{enableFullscreen:x}=ja(document,"canvas",n);document.addEventListener("keydown",z=>{z.code==="Space"&&(i(3,l=!l),z.preventDefault())}),Ge(()=>T());const b=()=>i(3,l=!l),L=()=>i(2,r=!r);function B(){a=C(this.value),i(1,a)}const E=()=>T();function I(){c.interactionRange=C(this.value),i(4,c)}function Y(){c.drag=C(this.value),i(4,c)}function N(){c.timeStep=C(this.value),i(4,c)}function j(){c.gravityFactor=C(this.value),i(4,c)}function J(){c.particlesSize=C(this.value),i(4,c)}function q(){o.width=C(this.value),i(0,o)}function ie(){o.height=C(this.value),i(0,o)}function Q(){c.wallsMode=bi(this),i(4,c)}return[o,a,r,l,c,n,s,T,x,b,L,B,E,I,Y,N,j,J,q,ie,Q]}class us extends Ce{constructor(e){super(),Me(this,e,fs,cs,Ne,{})}}function Jo(t,e,i){const n=t.slice();return n[1]=e[i],n}function Qo(t,e,i){const n=t.slice();return n[1]=e[i],n}function ds(t){let e;return{c(){e=F("About")},l(i){e=y(i,"About")},m(i,n){U(i,e,n)},d(i){i&&d(e)}}}function ms(t){let e=t[1].title+"",i;return{c(){i=F(e)},l(n){i=y(n,e)},m(n,o){U(n,i,o)},p:de,d(n){n&&d(i)}}}function Zo(t){let e,i;return e=new oi({props:{$$slots:{default:[ms]},$$scope:{ctx:t}}}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,o){vt(e,n,o),i=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){i||(Re(e.$$.fragment,n),i=!0)},o(n){Ie(e.$$.fragment,n),i=!1},d(n){_t(e,n)}}}function hs(t){let e,i,n,o;e=new oi({props:{$$slots:{default:[ds]},$$scope:{ctx:t}}});let s=t[0],a=[];for(let l=0;l<s.length;l+=1)a[l]=Zo(Qo(t,s,l));const r=l=>Ie(a[l],1,1,()=>{a[l]=null});return{c(){pt(e.$$.fragment),i=g();for(let l=0;l<a.length;l+=1)a[l].c();n=wn()},l(l){Dt(e.$$.fragment,l),i=A(l);for(let c=0;c<a.length;c+=1)a[c].l(l);n=wn()},m(l,c){vt(e,l,c),U(l,i,c);for(let u=0;u<a.length;u+=1)a[u].m(l,c);U(l,n,c),o=!0},p(l,c){const u={};if(c&64&&(u.$$scope={dirty:c,ctx:l}),e.$set(u),c&1){s=l[0];let m;for(m=0;m<s.length;m+=1){const T=Qo(l,s,m);a[m]?(a[m].p(T,c),Re(a[m],1)):(a[m]=Zo(T),a[m].c(),Re(a[m],1),a[m].m(n.parentNode,n))}for(Dn(),m=s.length;m<a.length;m+=1)r(m);Ln()}},i(l){if(!o){Re(e.$$.fragment,l);for(let c=0;c<s.length;c+=1)Re(a[c]);o=!0}},o(l){Ie(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)Ie(a[c]);o=!1},d(l){_t(e,l),l&&d(i),co(a,l),l&&d(n)}}}function ps(t){let e,i;return{c(){e=p("p"),i=F("This page is an experiment to run simulation on the GPU.")},l(n){e=v(n,"P",{});var o=_(e);i=y(o,"This page is an experiment to run simulation on the GPU."),o.forEach(d)},m(n,o){U(n,e,o),f(e,i)},p:de,d(n){n&&d(e)}}}function vs(t){let e,i,n;var o=t[1].component;function s(a){return{}}return o&&(e=Ro(o,s())),{c(){e&&pt(e.$$.fragment),i=g()},l(a){e&&Dt(e.$$.fragment,a),i=A(a)},m(a,r){e&&vt(e,a,r),U(a,i,r),n=!0},p(a,r){if(o!==(o=a[1].component)){if(e){Dn();const l=e;Ie(l.$$.fragment,1,0,()=>{_t(l,1)}),Ln()}o?(e=Ro(o,s()),pt(e.$$.fragment),Re(e.$$.fragment,1),vt(e,i.parentNode,i)):e=null}},i(a){n||(e&&Re(e.$$.fragment,a),n=!0)},o(a){e&&Ie(e.$$.fragment,a),n=!1},d(a){e&&_t(e,a),a&&d(i)}}}function ei(t){let e,i;return e=new ii({props:{$$slots:{default:[vs]},$$scope:{ctx:t}}}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,o){vt(e,n,o),i=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){i||(Re(e.$$.fragment,n),i=!0)},o(n){Ie(e.$$.fragment,n),i=!1},d(n){_t(e,n)}}}function _s(t){let e,i,n,o,s,a;e=new Ui({props:{$$slots:{default:[hs]},$$scope:{ctx:t}}}),n=new ii({props:{$$slots:{default:[ps]},$$scope:{ctx:t}}});let r=t[0],l=[];for(let u=0;u<r.length;u+=1)l[u]=ei(Jo(t,r,u));const c=u=>Ie(l[u],1,1,()=>{l[u]=null});return{c(){pt(e.$$.fragment),i=g(),pt(n.$$.fragment),o=g();for(let u=0;u<l.length;u+=1)l[u].c();s=wn()},l(u){Dt(e.$$.fragment,u),i=A(u),Dt(n.$$.fragment,u),o=A(u);for(let m=0;m<l.length;m+=1)l[m].l(u);s=wn()},m(u,m){vt(e,u,m),U(u,i,m),vt(n,u,m),U(u,o,m);for(let T=0;T<l.length;T+=1)l[T].m(u,m);U(u,s,m),a=!0},p(u,m){const T={};m&64&&(T.$$scope={dirty:m,ctx:u}),e.$set(T);const x={};if(m&64&&(x.$$scope={dirty:m,ctx:u}),n.$set(x),m&1){r=u[0];let b;for(b=0;b<r.length;b+=1){const L=Jo(u,r,b);l[b]?(l[b].p(L,m),Re(l[b],1)):(l[b]=ei(L),l[b].c(),Re(l[b],1),l[b].m(s.parentNode,s))}for(Dn(),b=r.length;b<l.length;b+=1)c(b);Ln()}},i(u){if(!a){Re(e.$$.fragment,u),Re(n.$$.fragment,u);for(let m=0;m<r.length;m+=1)Re(l[m]);a=!0}},o(u){Ie(e.$$.fragment,u),Ie(n.$$.fragment,u),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)Ie(l[m]);a=!1},d(u){_t(e,u),u&&d(i),_t(n,u),u&&d(o),co(l,u),u&&d(s)}}}function Ts(t){let e,i,n;return i=new Ri({props:{$$slots:{default:[_s]},$$scope:{ctx:t}}}),{c(){e=p("div"),pt(i.$$.fragment)},l(o){e=v(o,"DIV",{});var s=_(e);Dt(i.$$.fragment,s),s.forEach(d)},m(o,s){U(o,e,s),vt(i,e,null),n=!0},p(o,[s]){const a={};s&64&&(a.$$scope={dirty:s,ctx:o}),i.$set(a)},i(o){n||(Re(i.$$.fragment,o),n=!0)},o(o){Ie(i.$$.fragment,o),n=!1},d(o){o&&d(e),_t(i)}}}function xs(t){return[[{title:"test 1",component:zi},{title:"test 2",component:Wi},{title:"test 3",component:Ji},{title:"test 4",component:nr},{title:"test 5",component:cr},{title:"test 6",component:gr},{title:"test 7",component:$r},{title:"test 8",component:jr},{title:"test 9",component:ua},{title:"test 10",component:ya},{title:"test 11",component:Ya},{title:"test 12",component:us}]]}class bs extends Ce{constructor(e){super(),Me(this,e,xs,Ts,Ne,{})}}function gs(t){let e,i;return e=new bs({}),{c(){pt(e.$$.fragment)},l(n){Dt(e.$$.fragment,n)},m(n,o){vt(e,n,o),i=!0},p:de,i(n){i||(Re(e.$$.fragment,n),i=!0)},o(n){Ie(e.$$.fragment,n),i=!1},d(n){_t(e,n)}}}class Fs extends Ce{constructor(e){super(),Me(this,e,null,gs,Ne,{})}}export{Fs as default};
