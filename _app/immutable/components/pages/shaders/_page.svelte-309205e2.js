import{S as Fe,i as ye,s as De,C as an,k as p,l as v,m as _,h as d,n as h,b as F,K as j,E as sn,F as ln,G as cn,f as Te,t as Ae,H as kt,R as Uo,o as We,j as Lo,Q as Po,T as Vn,U as xo,A as Bo,V as $o,g as fn,d as un,q as y,a as g,r as D,c as E,D as u,B as le,p as He,O as N,u as Ve,P as z,M as Wt,w as ot,x as ct,y as it,z as rt,e as rn,L as Ao,v as Hn}from"../../../chunks/index-ff9e742a.js";import{w as Yt}from"../../../chunks/index-84a8d4d9.js";let Io=1;function bo(){return`svelte-tabs-${Io++}`}function So(t){let e,i,n,o;const s=t[4].default,a=an(s,t,t[3],null);return{c(){e=p("div"),a&&a.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=_(e);a&&a.l(l),l.forEach(d),this.h()},h(){h(e,"class","svelte-tabs")},m(r,l){F(r,e,l),a&&a.m(e,null),i=!0,n||(o=j(e,"keydown",t[1]),n=!0)},p(r,[l]){a&&a.p&&(!i||l&8)&&sn(a,s,r,r[3],i?cn(s,r[3],l,null):ln(r[3]),null)},i(r){i||(Te(a,r),i=!0)},o(r){Ae(a,r),i=!1},d(r){r&&d(e),a&&a.d(r),n=!1,o()}}}const Xn={};function Co(t,e,i){const n=t.indexOf(e);t.splice(n,1),i.update(o=>o===e?t[n]||t[t.length-1]:o)}function Mo(t,e,i){let n,{$$slots:o={},$$scope:s}=e,{initialSelectedIndex:a=0}=e;const r=[],l=[],c=[],f=Yt({}),m=Yt({}),x=Yt(null);kt(t,x,b=>i(5,n=b));const A=Yt(null);function T(b,B,O){b.push(B),O.update(C=>C||B),Po(()=>Co(b,B,O))}function R(b){const B=l.indexOf(b);x.set(b),A.set(c[B])}Uo(Xn,{registerTab(b){T(l,b,x)},registerTabElement(b){r.push(b)},registerPanel(b){T(c,b,A)},selectTab:R,selectedTab:x,selectedPanel:A,controls:f,labeledBy:m}),We(()=>{R(l[a])}),Lo(()=>{for(let b=0;b<l.length;b++)f.update(B=>({...B,[l[b].id]:c[b].id})),m.update(B=>({...B,[c[b].id]:l[b].id}))});async function P(b){if(b.target.classList.contains("svelte-tabs__tab")){let B=l.indexOf(n);switch(b.key){case"ArrowRight":B+=1,B>l.length-1&&(B=0),R(l[B]),r[B].focus();break;case"ArrowLeft":B-=1,B<0&&(B=l.length-1),R(l[B]),r[B].focus()}}}return t.$$set=b=>{"initialSelectedIndex"in b&&i(2,a=b.initialSelectedIndex),"$$scope"in b&&i(3,s=b.$$scope)},[x,P,a,s,o]}class No extends Fe{constructor(e){super(),ye(this,e,Mo,So,De,{initialSelectedIndex:2})}}function zo(t){let e,i,n,o,s,a;const r=t[9].default,l=an(r,t,t[8],null);return{c(){e=p("li"),l&&l.c(),this.h()},l(c){e=v(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var f=_(e);l&&l.l(f),f.forEach(d),this.h()},h(){h(e,"role","tab"),h(e,"id",t[3].id),h(e,"aria-controls",i=t[2][t[3].id]),h(e,"aria-selected",t[1]),h(e,"tabindex",n=t[1]?0:-1),h(e,"class","svelte-tabs__tab svelte-1fbofsd"),Vn(e,"svelte-tabs__selected",t[1])},m(c,f){F(c,e,f),l&&l.m(e,null),t[10](e),o=!0,s||(a=j(e,"click",t[11]),s=!0)},p(c,[f]){l&&l.p&&(!o||f&256)&&sn(l,r,c,c[8],o?cn(r,c[8],f,null):ln(c[8]),null),(!o||f&4&&i!==(i=c[2][c[3].id]))&&h(e,"aria-controls",i),(!o||f&2)&&h(e,"aria-selected",c[1]),(!o||f&2&&n!==(n=c[1]?0:-1))&&h(e,"tabindex",n),(!o||f&2)&&Vn(e,"svelte-tabs__selected",c[1])},i(c){o||(Te(l,c),o=!0)},o(c){Ae(l,c),o=!1},d(c){c&&d(e),l&&l.d(c),t[10](null),s=!1,a()}}}function Oo(t,e,i){let n,o,{$$slots:s={},$$scope:a}=e,r;const l={id:bo()},{registerTab:c,registerTabElement:f,selectTab:m,selectedTab:x,controls:A}=xo(Xn);kt(t,x,b=>i(7,n=b)),kt(t,A,b=>i(2,o=b));let T;c(l),We(async()=>{await Bo(),f(r)});function R(b){$o[b?"unshift":"push"](()=>{r=b,i(0,r)})}const P=()=>m(l);return t.$$set=b=>{"$$scope"in b&&i(8,a=b.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,T=n===l)},[r,T,o,l,m,x,A,n,a,s,R,P]}class go extends Fe{constructor(e){super(),ye(this,e,Oo,zo,De,{})}}function Xo(t){let e,i;const n=t[1].default,o=an(n,t,t[0],null);return{c(){e=p("ul"),o&&o.c(),this.h()},l(s){e=v(s,"UL",{role:!0,class:!0});var a=_(e);o&&o.l(a),a.forEach(d),this.h()},h(){h(e,"role","tablist"),h(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,a){F(s,e,a),o&&o.m(e,null),i=!0},p(s,[a]){o&&o.p&&(!i||a&1)&&sn(o,n,s,s[0],i?cn(n,s[0],a,null):ln(s[0]),null)},i(s){i||(Te(o,s),i=!0)},o(s){Ae(o,s),i=!1},d(s){s&&d(e),o&&o.d(s)}}}function ko(t,e,i){let{$$slots:n={},$$scope:o}=e;return t.$$set=s=>{"$$scope"in s&&i(0,o=s.$$scope)},[o,n]}class Wo extends Fe{constructor(e){super(),ye(this,e,ko,Xo,De,{})}}function qn(t){let e;const i=t[6].default,n=an(i,t,t[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,s){n&&n.m(o,s),e=!0},p(o,s){n&&n.p&&(!e||s&32)&&sn(n,i,o,o[5],e?cn(i,o[5],s,null):ln(o[5]),null)},i(o){e||(Te(n,o),e=!0)},o(o){Ae(n,o),e=!1},d(o){n&&n.d(o)}}}function Yo(t){let e,i,n,o=t[1]===t[2]&&qn(t);return{c(){e=p("div"),o&&o.c(),this.h()},l(s){e=v(s,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=_(e);o&&o.l(a),a.forEach(d),this.h()},h(){h(e,"id",t[2].id),h(e,"aria-labelledby",i=t[0][t[2].id]),h(e,"class","svelte-tabs__tab-panel svelte-epfyet"),h(e,"role","tabpanel")},m(s,a){F(s,e,a),o&&o.m(e,null),n=!0},p(s,[a]){s[1]===s[2]?o?(o.p(s,a),a&2&&Te(o,1)):(o=qn(s),o.c(),Te(o,1),o.m(e,null)):o&&(fn(),Ae(o,1,1,()=>{o=null}),un()),(!n||a&1&&i!==(i=s[0][s[2].id]))&&h(e,"aria-labelledby",i)},i(s){n||(Te(o),n=!0)},o(s){Ae(o),n=!1},d(s){s&&d(e),o&&o.d()}}}function Vo(t,e,i){let n,o,{$$slots:s={},$$scope:a}=e;const r={id:bo()},{registerPanel:l,selectedPanel:c,labeledBy:f}=xo(Xn);return kt(t,c,m=>i(1,o=m)),kt(t,f,m=>i(0,n=m)),l(r),t.$$set=m=>{"$$scope"in m&&i(5,a=m.$$scope)},[n,o,r,c,f,a,s]}class Eo extends Fe{constructor(e){super(),ye(this,e,Vo,Yo,De,{})}}const Ho=["VERTEX_SHADER","FRAGMENT_SHADER"];function Rt(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return dn(e),e}function dn(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Pe(t,e,i,n){const o=t.createTexture();if(!o)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o}function Ne(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function be(t,e,i,n,o){const s=[];for(let r=0;r<e.length;++r){const l=Ho[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=qo(t,e[r],l,o);if(!c)throw"Can not create shader";s.push(c)}const a=Go(t,s,i,n,o);if(!a)throw"Can not create program";return a}function qo(t,e,i,n){const o=n||console.log,s=t.createShader(i);if(!s)throw"Could not load shader";if(t.shaderSource(s,e),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(s);return o(new Error("*** Error compiling shader '"+s+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(s),null}return s}function Go(t,e,i,n,o){const s=o||console.log,a=t.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(l){t.attachShader(a,l)}),i&&i.forEach(function(l,c){t.bindAttribLocation(a,n?n[c]:c,l)}),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const l=t.getProgramInfoLog(a);return s("Error in program linking:"+l),t.deleteProgram(a),null}return a}function me(t,e){e=e||1;const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}function jo(t){let e,i,n,o,s,a,r,l,c,f,m,x;return{c(){e=p("p"),i=y(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=g(),o=p("p"),s=y(`It is reusing the code from
    `),a=p("a"),r=y(`this site
    `),l=y("."),c=g(),f=p("ul"),m=g(),x=p("canvas"),this.h()},l(A){e=v(A,"P",{});var T=_(e);i=D(T,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),T.forEach(d),n=E(A),o=v(A,"P",{});var R=_(o);s=D(R,`It is reusing the code from
    `),a=v(R,"A",{target:!0,href:!0});var P=_(a);r=D(P,`this site
    `),P.forEach(d),l=D(R,"."),R.forEach(d),c=E(A),f=v(A,"UL",{id:!0}),_(f).forEach(d),m=E(A),x=v(A,"CANVAS",{id:!0}),_(x).forEach(d),this.h()},h(){h(a,"target","none"),h(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(f,"id","result"),h(x,"id","canvas")},m(A,T){F(A,e,T),u(e,i),F(A,n,T),F(A,o,T),u(o,s),u(o,a),u(a,r),u(o,l),F(A,c,T),F(A,f,T),F(A,m,T),F(A,x,T)},p:le,i:le,o:le,d(A){A&&d(e),A&&d(n),A&&d(o),A&&d(c),A&&d(f),A&&d(m),A&&d(x)}}}function Ko(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Qo(t){function e(){const i=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=3;const r=a.getContext("webgl");if(!r)throw"Coulndt get context";const l=be(r,[i,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),f=r.getUniformLocation(l,"srcTex"),m=r.getUniformLocation(l,"srcDimensions"),x=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const A=3,T=3,R=r.createTexture();r.bindTexture(r.TEXTURE_2D,R),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,A,T,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(f,0),r.uniform2f(m,A,T),r.drawArrays(r.TRIANGLES,0,6);const P=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,P);for(let b=0;b<3*3;++b)Ko(P[b*4])}return We(e),[]}class Jo extends Fe{constructor(e){super(),ye(this,e,Qo,jo,De,{})}}const Zo=Float32Array;function wo(t,e,i,n,o,s){const a=new Zo(16);return a[0]=2/(e-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-i),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-s),a[11]=0,a[12]=(t+e)/(t-e),a[13]=(i+n)/(i-n),a[14]=(o+s)/(o-s),a[15]=1,a}function ei(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=y(`This is the simple particles simulation from
    `),n=p("a"),o=y("webglfundamentals"),s=y(" directly copied in a svelte component."),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=D(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var f=_(n);o=D(f,"webglfundamentals"),f.forEach(d),s=D(c," directly copied in a svelte component."),c.forEach(d),a=E(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),He(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){F(l,e,c),u(e,i),u(e,n),u(n,o),u(e,s),F(l,a,c),F(l,r,c)},p:le,i:le,o:le,d(l){l&&d(e),l&&d(a),l&&d(r)}}}function ti(t){function e(){const i=`
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
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const r=a.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const f=be(r,[i,n]),m=be(r,[o,s]);if(!f||!m)throw"Can not create programs";const x={position:r.getAttribLocation(f,"position"),positionTex:r.getUniformLocation(f,"positionTex"),velocityTex:r.getUniformLocation(f,"velocityTex"),texDimensions:r.getUniformLocation(f,"texDimensions"),canvasDimensions:r.getUniformLocation(f,"canvasDimensions"),deltaTime:r.getUniformLocation(f,"deltaTime")},A={id:r.getAttribLocation(m,"id"),positionTex:r.getUniformLocation(m,"positionTex"),texDimensions:r.getUniformLocation(m,"texDimensions"),matrix:r.getUniformLocation(m,"matrix")},T=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,T),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const R=300,P=20,b=R*P,B=new Array(b).fill(0).map((w,se)=>se),O=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,O),r.bufferData(r.ARRAY_BUFFER,new Float32Array(B),r.STATIC_DRAW),me(r.canvas);const C=(w,se)=>(se===void 0&&(se=w,w=0),Math.random()*(se-w)+w),V=new Float32Array(B.map(w=>[C(a.width),C(a.height),0,0]).flat()),Z=new Float32Array(B.map(w=>[C(-300,300),C(-300,300),0,0]).flat());function X(w,se,ie,J){const ge=w.createTexture();return w.bindTexture(w.TEXTURE_2D,ge),w.texImage2D(w.TEXTURE_2D,0,w.RGBA,ie,J,0,w.RGBA,w.FLOAT,se),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_S,w.CLAMP_TO_EDGE),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_T,w.CLAMP_TO_EDGE),ge}const ae=X(r,Z,R,P),ee=X(r,V,R,P),I=X(r,null,R,P);if(!ee||!I)throw"Can not create position textures";function H(w,se){const ie=w.createFramebuffer();return w.bindFramebuffer(w.FRAMEBUFFER,ie),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,se,0),ie}const K=H(r,ee),U=H(r,I);let k={fb:K,tex:ee},q={fb:U,tex:I},Q=0;function ce(w){if(!r)return;w*=.001;const se=w-Q;Q=w,me(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,q.fb),r.viewport(0,0,R,P),r.bindBuffer(r.ARRAY_BUFFER,T),r.enableVertexAttribArray(x.position),r.vertexAttribPointer(x.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,k.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,ae),r.useProgram(f),r.uniform1i(x.positionTex,0),r.uniform1i(x.velocityTex,1),r.uniform2f(x.texDimensions,R,P),r.uniform2f(x.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(x.deltaTime,se),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,O),r.enableVertexAttribArray(A.id),r.vertexAttribPointer(A.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,q.tex),r.useProgram(m),r.uniform2f(A.texDimensions,R,R),r.uniform1i(A.positionTex,0),r.uniformMatrix4fv(A.matrix,!1,wo(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,b);{const ie=k;k=q,q=ie}requestAnimationFrame(ce)}requestAnimationFrame(ce)}return We(()=>e()),[]}class ni extends Fe{constructor(e){super(),ye(this,e,ti,ei,De,{})}}const Vt=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function oi(t,e,i,n){const o=t*e,s=new Array(o).fill(0).map((l,c)=>c),a=new Float32Array(s.map(l=>[Vt(i),Vt(n),0,0]).flat()),r=new Float32Array(s.map(l=>[Vt(-300,300),Vt(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(s),positions:a,velocities:r}}const ii=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ri=`precision highp float;

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

`,ai=`  attribute float id;
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

`,si=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function li(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=y(`This is the simple particles simulation from
    `),n=p("a"),o=y("webglfundamentals"),s=y(" with the shader code extracted into separate files."),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=D(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var f=_(n);o=D(f,"webglfundamentals"),f.forEach(d),s=D(c," with the shader code extracted into separate files."),c.forEach(d),a=E(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),He(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){F(l,e,c),u(e,i),u(e,n),u(n,o),u(e,s),F(l,a,c),F(l,r,c)},p:le,i:le,o:le,d(l){l&&d(e),l&&d(a),l&&d(r)}}}function ci(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const s=o.getContext("webgl");if(!s)throw"gl undefined";dn(s);const a=be(s,[ii,ri]),r=be(s,[ai,si]),l={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},c={id:s.getAttribLocation(r,"id"),positionTex:s.getUniformLocation(r,"positionTex"),texDimensions:s.getUniformLocation(r,"texDimensions"),matrix:s.getUniformLocation(r,"matrix")},f=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,f),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const m=300,x=20,{numParticles:A,ids:T,positions:R,velocities:P}=oi(m,x,o.width,o.height),b=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,b),s.bufferData(s.ARRAY_BUFFER,new Float32Array(T),s.STATIC_DRAW),me(s.canvas);const B=Pe(s,P,m,x),O=Pe(s,R,m,x),C=Pe(s,null,m,x),V=Ne(s,O),Z=Ne(s,C);let X={fb:V,tex:O},ae={fb:Z,tex:C},ee=0;function I(H){if(!s||!f||!b)throw"Undefined params to render";H*=.001;const K=H-ee;ee=H,me(s.canvas),n(s,ae,m,x,f,l,X,B,a,K),i(s,m,b,c,ae,r,A);{const U=X;X=ae,ae=U}requestAnimationFrame(I)}requestAnimationFrame(I)}const i=(o,s,a,r,l,c,f)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,a),o.enableVertexAttribArray(r.id),o.vertexAttribPointer(r.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,l.tex),o.useProgram(c),o.uniform2f(r.texDimensions,s,s),o.uniform1i(r.positionTex,0),o.uniformMatrix4fv(r.matrix,!1,wo(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,f)},n=(o,s,a,r,l,c,f,m,x,A)=>{o.bindFramebuffer(o.FRAMEBUFFER,s.fb),o.viewport(0,0,a,r),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(c.position),o.vertexAttribPointer(c.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,f.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,m),o.useProgram(x),o.uniform1i(c.positionTex,0),o.uniform1i(c.velocityTex,1),o.uniform2f(c.texDimensions,a,r),o.uniform2f(c.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(c.deltaTime,A),o.drawArrays(o.TRIANGLES,0,6)};return We(()=>e()),[]}class fi extends Fe{constructor(e){super(),ye(this,e,ci,li,De,{})}}const ui=`attribute vec2 a_position;

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
`,di=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function mi(t){let e,i,n,o,s,a,r,l,c,f,m,x;return{c(){e=p("p"),i=y(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=p("code"),o=y("requestAnimationFrame"),s=y(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),a=g(),r=p("canvas"),l=g(),c=p("button"),f=y("Add position"),this.h()},l(A){e=v(A,"P",{});var T=_(e);i=D(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=v(T,"CODE",{});var R=_(n);o=D(R,"requestAnimationFrame"),R.forEach(d),s=D(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(d),a=E(A),r=v(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=E(A),c=v(A,"BUTTON",{});var P=_(c);f=D(P,"Add position"),P.forEach(d),this.h()},h(){h(r,"id","canvas"),He(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(A,T){F(A,e,T),u(e,i),u(e,n),u(n,o),u(e,s),F(A,a,T),F(A,r,T),F(A,l,T),F(A,c,T),u(c,f),m||(x=j(c,"click",t[1]),m=!0)},p:le,i:le,o:le,d(A){A&&d(e),A&&d(a),A&&d(r),A&&d(l),A&&d(c),m=!1,x()}}}function hi(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const s=document.getElementById("canvas");if(!s)throw"canvas undefined";const a=s.getContext("webgl");if(!a)throw"gl undefined";dn(a);const r=be(a,[ui,di]);me(a.canvas);const l=a.getAttribLocation(r,"a_position"),c=a.getUniformLocation(r,"u_resolution"),f=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,f),a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW);function m(){if(!a)throw"Undefined params to render";for(let O=0;O<=e.length-2;O+=2)e[O]=(e[O]+Math.random()*2-1)%a.canvas.width,e[O+1]=(e[O+1]+Math.random()*0+1)%a.canvas.height;a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW),me(a.canvas),a.viewport(0,0,a.canvas.width,a.canvas.height),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(r),a.uniform2f(c,a.canvas.width,a.canvas.height),a.enableVertexAttribArray(l),a.bindBuffer(a.ARRAY_BUFFER,f);const x=2,A=a.FLOAT,T=!1,R=0,P=0;a.vertexAttribPointer(l,x,A,T,R,P);var b=a.POINTS,B=e.length/2;a.drawArrays(b,P,B),requestAnimationFrame(m)}requestAnimationFrame(m)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return We(()=>i()),[n,()=>n()]}class pi extends Fe{constructor(e){super(),ye(this,e,hi,mi,De,{})}}const vi=`attribute float id;
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
`,_i=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Bt,$t;const Ti=t=>{$t=be(t,[vi,_i]),Bt={idAttributeLocation:t.getAttribLocation($t,"id"),texDimensionsUniformLocation:t.getUniformLocation($t,"texDimensions"),resolutionUniformLocation:t.getUniformLocation($t,"u_resolution")}},xi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;me(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram($t),e.uniform2f(Bt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Bt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Bt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,s);const a=1,r=e.FLOAT,l=!1,c=0,f=0;e.vertexAttribPointer(Bt.idAttributeLocation,a,r,l,c,f);const m=e.POINTS,x=o.length;e.drawArrays(m,f,x)};function Ai(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=y("Create an array of render-size positions. Store this array in a texture. In each "),n=p("code"),o=y("requestAnimationFrame"),s=y(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=D(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=v(c,"CODE",{});var f=_(n);o=D(f,"requestAnimationFrame"),f.forEach(d),s=D(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(d),a=E(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(r,"id","canvas"),He(r,"background-color","black"),h(r,"width",Ro),h(r,"height",Fo)},m(l,c){F(l,e,c),u(e,i),u(e,n),u(n,o),u(e,s),F(l,a,c),F(l,r,c)},p:le,i:le,o:le,d(l){l&&d(e),l&&d(a),l&&d(r)}}}const Ro=800,Fo=600;function bi(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";dn(n),me(n.canvas),Ti(n);const o=[0,1,2,3,4,5,6,7,8,9],s=o.map(r=>[Math.random()*Ro,Math.random()*Fo,0,0]).flat();function a(){if(!n)throw"Undefined params to render";for(let l=0;l<=s.length-2;l+=2)s[l]=(s[l]+Math.random()*2-1)%n.canvas.width,s[l+1]=(s[l+1]+Math.random()*0+1)%n.canvas.height;const r=Pe(n,new Float32Array(s),3,3);xi({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(a)}requestAnimationFrame(a)}return We(()=>e()),[]}let gi=class extends Fe{constructor(e){super(),ye(this,e,bi,Ai,De,{})}};const Ei=`attribute float id;
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
`,wi=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let It,St,An;const Ri=(t,e)=>{St=be(t,[Ei,wi]),It={idAttributeLocation:t.getAttribLocation(St,"id"),texDimensionsUniformLocation:t.getUniformLocation(St,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(St,"u_resolution")},An=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,An),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Fi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,An),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(St),e.uniform2f(It.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(It.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(It.idAttributeLocation);const s=1,a=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(It.idAttributeLocation,s,a,r,l,c),e.drawArrays(e.POINTS,c,o.length)};function yi(t,e){const i=new Array(t).fill(0).map((s,a)=>a),n=i.map(s=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),o={width:i.length,height:1};return{ids:i,positions:n,texDimensions:o}}const Di=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Ui=`precision highp float;

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

`;let At,bt,bn,mn,hn,Gn,jn,Ct,Jt;const Li=(t,e)=>{const{positions:i,texDimensions:n}=e;bt=be(t,[Di,Ui]),At={positionAttributeLocation:t.getAttribLocation(bt,"position"),positionTexLocation:t.getUniformLocation(bt,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(bt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(bt,"u_resolution")},bn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,bn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),mn=Pe(t,new Float32Array(i),n.width,n.height),hn=Pe(t,null,n.width,n.height),Gn=Ne(t,mn),jn=Ne(t,hn),Ct={fb:Gn,tex:mn},Jt={fb:jn,tex:hn}},Pi=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,Jt.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,bn),e.enableVertexAttribArray(At.positionAttributeLocation),e.vertexAttribPointer(At.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ct.tex),e.useProgram(bt),e.uniform1i(At.positionTexLocation,0),e.uniform2f(At.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(At.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Ct;Ct=Jt,Jt=n}return Ct.tex};function Bi(t){let e,i,n,o,s,a,r,l,c,f,m,x,A;return{c(){e=p("p"),i=y("Create an array of render-size positions. Store this array in a texture."),n=g(),o=p("p"),s=y("Create 2 textures which will be used to update the positions with a shader. In each "),a=p("code"),r=y("requestAnimationFrame"),l=y(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=g(),f=p("p"),m=y("Finally switch the two textures to read and write in the updated textures"),x=g(),A=p("canvas"),this.h()},l(T){e=v(T,"P",{});var R=_(e);i=D(R,"Create an array of render-size positions. Store this array in a texture."),R.forEach(d),n=E(T),o=v(T,"P",{});var P=_(o);s=D(P,"Create 2 textures which will be used to update the positions with a shader. In each "),a=v(P,"CODE",{});var b=_(a);r=D(b,"requestAnimationFrame"),b.forEach(d),l=D(P,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),P.forEach(d),c=E(T),f=v(T,"P",{});var B=_(f);m=D(B,"Finally switch the two textures to read and write in the updated textures"),B.forEach(d),x=E(T),A=v(T,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(A).forEach(d),this.h()},h(){h(A,"id","canvas"),He(A,"background-color","black"),h(A,"width",yo),h(A,"height",Do)},m(T,R){F(T,e,R),u(e,i),F(T,n,R),F(T,o,R),u(o,s),u(o,a),u(a,r),u(o,l),F(T,c,R),F(T,f,R),u(f,m),F(T,x,R),F(T,A,R)},p:le,i:le,o:le,d(T){T&&d(e),T&&d(n),T&&d(o),T&&d(c),T&&d(f),T&&d(x),T&&d(A)}}}const yo=800,Do=600;function $i(t){function e(){const i=Rt();me(i.canvas);const{ids:n,positions:o,texDimensions:s}=yi(100,{width:yo,height:Do});Ri(i,n),Li(i,{positions:o,texDimensions:s});function a(){me(i.canvas);const r=Pi({gl:i,texDimensions:s});Fi({gl:i,positionTex:r,textureDimension:s,ids:n}),requestAnimationFrame(a)}requestAnimationFrame(a)}return We(()=>e()),[]}let Ii=class extends Fe{constructor(e){super(),ye(this,e,$i,Bi,De,{})}};const Si=`attribute float id;
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
`,Ci=`precision mediump float;
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
`;let mt,gt,gn,En;const Mi=(t,e)=>{const{ids:i,colors:n}=e;gt=be(t,[Si,Ci]),mt={idAttributeLocation:t.getAttribLocation(gt,"id"),colorAttributeLocation:t.getAttribLocation(gt,"color"),texDimensionsUniformLocation:t.getUniformLocation(gt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(gt,"u_resolution")},gn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,gn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),En=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,En),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Ni=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,gn),e.vertexAttribPointer(mt.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(mt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,En),e.vertexAttribPointer(mt.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(mt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(gt),e.uniform2f(mt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(mt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function zi(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((a,r)=>r),o=new Array(i).fill(0).map(a=>Math.floor(Math.random()*4)),s=n.map(a=>{{const{x:l,y:c}=Oi(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:s,texDimensions:t,colors:o}}const Oi=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},Xi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ki=`precision highp float;

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

`;let ht,pt,wn,Ht,pn,Kn,Qn,Mt,Zt,qt;const Wi=(t,e)=>{const{positions:i,texDimensions:n}=e;return pt=be(t,[Xi,ki]),ht={positionAttributeLocation:t.getAttribLocation(pt,"position"),positionTexLocation:t.getUniformLocation(pt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(pt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(pt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(pt,"u_resolution")},wn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,wn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ht=Pe(t,new Float32Array(i),n.width,n.height),pn=Pe(t,null,n.width,n.height),Kn=Ne(t,Ht),Qn=Ne(t,pn),Mt={fb:Kn,tex:Ht},Zt={fb:Qn,tex:pn},Ht},Yi=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();qt||(qt=n-1);const o=n-qt;qt=n,e.bindFramebuffer(e.FRAMEBUFFER,Zt.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,wn),e.enableVertexAttribArray(ht.positionAttributeLocation),e.vertexAttribPointer(ht.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Mt.tex),e.useProgram(pt),e.uniform1i(ht.positionTexLocation,0),e.uniform1f(ht.deltaTimeUniformLocation,o),e.uniform2f(ht.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ht.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Mt;Mt=Zt,Zt=s}return Mt.tex};function Vi(t){let e,i,n,o,s,a,r,l,c,f,m=t[2]?"Play":"Pause",x,A,T,R=t[1]?"Normal Speed":"Slow Mo",P,b,B,O,C=t[4].width*t[4].height+"",V,Z,X,ae,ee,I,H,K;return{c(){e=p("p"),i=y("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),s=y(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=g(),r=p("canvas"),l=g(),c=p("div"),f=p("button"),x=y(m),A=g(),T=p("button"),P=y(R),b=g(),B=p("span"),O=y("particles: "),V=y(C),Z=g(),X=p("label"),ae=y("Smooth steps"),ee=g(),I=p("input"),this.h()},l(U){e=v(U,"P",{});var k=_(e);i=D(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(d),n=E(U),o=v(U,"P",{});var q=_(o);s=D(q,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),q.forEach(d),a=E(U),r=v(U,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=E(U),c=v(U,"DIV",{});var Q=_(c);f=v(Q,"BUTTON",{});var ce=_(f);x=D(ce,m),ce.forEach(d),A=E(Q),T=v(Q,"BUTTON",{});var w=_(T);P=D(w,R),w.forEach(d),b=E(Q),B=v(Q,"SPAN",{});var se=_(B);O=D(se,"particles: "),V=D(se,C),se.forEach(d),Z=E(Q),X=v(Q,"LABEL",{for:!0});var ie=_(X);ae=D(ie,"Smooth steps"),ie.forEach(d),ee=E(Q),I=v(Q,"INPUT",{type:!0,min:!0}),Q.forEach(d),this.h()},h(){h(r,"id","canvas"),He(r,"background-color","black"),h(r,"width",t[3].width),h(r,"height",t[3].height),h(X,"for","steps"),h(I,"type","number"),h(I,"min",0)},m(U,k){F(U,e,k),u(e,i),F(U,n,k),F(U,o,k),u(o,s),F(U,a,k),F(U,r,k),F(U,l,k),F(U,c,k),u(c,f),u(f,x),u(c,A),u(c,T),u(T,P),u(c,b),u(c,B),u(B,O),u(B,V),u(c,Z),u(c,X),u(X,ae),u(c,ee),u(c,I),N(I,t[0]),H||(K=[j(f,"click",t[5]),j(T,"click",t[6]),j(I,"input",t[7])],H=!0)},p(U,[k]){k&4&&m!==(m=U[2]?"Play":"Pause")&&Ve(x,m),k&2&&R!==(R=U[1]?"Normal Speed":"Slow Mo")&&Ve(P,R),k&1&&z(I.value)!==U[0]&&N(I,U[0])},i:le,o:le,d(U){U&&d(e),U&&d(n),U&&d(o),U&&d(a),U&&d(r),U&&d(l),U&&d(c),H=!1,Wt(K)}}}function Hi(t,e,i){const n={width:800,height:600},o={width:100,height:100};let s=1,a=!1,r=!0;function l(){const x=Rt();me(x.canvas);const{ids:A,positions:T,colors:R}=zi(o,{width:n.width,height:n.height});Mi(x,{ids:A,colors:R,texDimensions:o});let P=Wi(x,{positions:T,texDimensions:o});function b(){if(me(x.canvas),!r)for(let B=0;B<s;B++)P=Yi({gl:x,texDimensions:o});return Ni({gl:x,positionTex:P,textureDimension:o,ids:A}),r?requestAnimationFrame(b):a?setTimeout(()=>requestAnimationFrame(b),1e3):requestAnimationFrame(b)}requestAnimationFrame(b)}We(()=>l());const c=()=>i(2,r=!r),f=()=>i(1,a=!a);function m(){s=z(this.value),i(0,s)}return[s,a,r,n,o,c,f,m]}class qi extends Fe{constructor(e){super(),ye(this,e,Hi,Vi,De,{})}}const Gi=`attribute float id;
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
`,ji=`precision mediump float;
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
`;let vt,Et,Rn,Fn;const Ki=(t,e)=>{const{ids:i,colors:n}=e;Et=be(t,[Gi,ji]),vt={idAttributeLocation:t.getAttribLocation(Et,"id"),colorAttributeLocation:t.getAttribLocation(Et,"color"),texDimensionsUniformLocation:t.getUniformLocation(Et,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Et,"u_resolution")},Rn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Rn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Fn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Fn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Qi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Rn),e.vertexAttribPointer(vt.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(vt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Fn),e.vertexAttribPointer(vt.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(vt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Et),e.uniform2f(vt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(vt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function Ji(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="disk"){const{x:f,y:m}=er(i,20);return[f,m,0,0]}if(n==="square"){const{x:f,y:m}=Zi(i,550);return[f,m,0,0]}if(n==="idDiagonal"){const{x:c,y:f}=tr(i,l,s.length);return[c,f,0,0]}if(n==="sinusoidal"){const{x:c,y:f}=Jn(i,l,s.length,{x:1,y:5});return[c,f,0,0]}if(n==="circle"){const{x:c,y:f}=Jn(i,l,s.length,{x:1,y:1});return[c,f,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Zi=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},er=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},tr=(t,e,i)=>{const n=yn(e,0,i,0,t.width,!1),o=yn(e,0,i,0,t.height,!1);return{x:n,y:o}},Jn=(t,e,i,n)=>{const o=yn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,f=Math.sin(l*o)*200+t.height/2;return{x:r,y:f}},yn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?Zn(a,n,o):Zn(a,o,n):a},Zn=function(t,e,i){return Math.max(Math.min(t,i),e)},nr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,or=`precision highp float;

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

`;let je,Ke,Dn,Gt,vn,eo,to,Nt,en;const ir=(t,e)=>{const{positions:i,texDimensions:n}=e;return Ke=be(t,[nr,or]),je={positionAttributeLocation:t.getAttribLocation(Ke,"position"),positionTexLocation:t.getUniformLocation(Ke,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ke,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ke,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ke,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ke,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ke,"u_resolution")},Dn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Dn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Gt=Pe(t,new Float32Array(i),n.width,n.height),vn=Pe(t,null,n.width,n.height),eo=Ne(t,Gt),to=Ne(t,vn),Nt={fb:eo,tex:Gt},en={fb:to,tex:vn},Gt},rr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,en.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Dn),e.enableVertexAttribArray(je.positionAttributeLocation),e.vertexAttribPointer(je.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Nt.tex),e.useProgram(Ke),e.uniform1i(je.positionTexLocation,0),e.uniform1f(je.dragUniformLocation,o),e.uniform1f(je.interactionRangeUniformLocation,n),e.uniform1f(je.deltaTimeUniformLocation,s),e.uniform2f(je.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(je.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=Nt;Nt=en,en=a}return Nt.tex};function ar(t){let e,i,n,o,s,a,r,l,c,f,m=t[2]?"Play":"Pause",x,A,T,R=t[1]?"Normal Speed":"Slow Mo",P,b,B,O,C=t[5].width*t[5].height+"",V,Z,X,ae,ee,I,H,K,U,k,q,Q,ce,w,se,ie,J,ge,he,te,Be,pe,ne,$e,ve,oe,Ie,xe,re,Ce;return{c(){e=p("p"),i=y("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),s=y(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=g(),r=p("canvas"),l=g(),c=p("div"),f=p("button"),x=y(m),A=g(),T=p("button"),P=y(R),b=g(),B=p("span"),O=y("particles: "),V=y(C),Z=g(),X=p("label"),ae=y("Smooth steps"),ee=g(),I=p("input"),H=g(),K=p("div"),U=p("ul"),k=p("li"),q=p("label"),Q=y("Interaction Range"),ce=g(),w=p("input"),se=g(),ie=p("li"),J=p("label"),ge=y("Drag"),he=g(),te=p("input"),Be=g(),pe=p("li"),ne=p("label"),$e=y("Time step"),ve=g(),oe=p("input"),Ie=g(),xe=p("ul"),this.h()},l($){e=v($,"P",{});var Y=_(e);i=D(Y,"Same principle with a shader to update positions and a shader to draw particles."),Y.forEach(d),n=E($),o=v($,"P",{});var ze=_(o);s=D(ze,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ze.forEach(d),a=E($),r=v($,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=E($),c=v($,"DIV",{});var L=_(c);f=v(L,"BUTTON",{});var W=_(f);x=D(W,m),W.forEach(d),A=E(L),T=v(L,"BUTTON",{});var Oe=_(T);P=D(Oe,R),Oe.forEach(d),b=E(L),B=v(L,"SPAN",{});var Re=_(B);O=D(Re,"particles: "),V=D(Re,C),Re.forEach(d),Z=E(L),X=v(L,"LABEL",{for:!0});var de=_(X);ae=D(de,"Smooth steps"),de.forEach(d),ee=E(L),I=v(L,"INPUT",{type:!0,min:!0}),L.forEach(d),H=E($),K=v($,"DIV",{});var Xe=_(K);U=v(Xe,"UL",{});var fe=_(U);k=v(fe,"LI",{});var Ue=_(k);q=v(Ue,"LABEL",{for:!0});var Me=_(q);Q=D(Me,"Interaction Range"),Me.forEach(d),ce=E(Ue),w=v(Ue,"INPUT",{id:!0,type:!0,min:!0}),Ue.forEach(d),se=E(fe),ie=v(fe,"LI",{});var _e=_(ie);J=v(_e,"LABEL",{for:!0});var Ee=_(J);ge=D(Ee,"Drag"),Ee.forEach(d),he=E(_e),te=v(_e,"INPUT",{id:!0,type:!0,min:!0}),_e.forEach(d),Be=E(fe),pe=v(fe,"LI",{});var S=_(pe);ne=v(S,"LABEL",{for:!0});var G=_(ne);$e=D(G,"Time step"),G.forEach(d),ve=E(S),oe=v(S,"INPUT",{id:!0,type:!0,min:!0}),S.forEach(d),Ie=E(fe),xe=v(fe,"UL",{}),_(xe).forEach(d),fe.forEach(d),Xe.forEach(d),this.h()},h(){h(r,"id","canvas"),He(r,"background-color","black"),h(r,"width",t[4].width),h(r,"height",t[4].height),h(X,"for","steps"),h(I,"type","number"),h(I,"min",0),h(q,"for","interactionRange"),h(w,"id","interactionRange"),h(w,"type","number"),h(w,"min",0),h(J,"for","drag"),h(te,"id","drag"),h(te,"type","number"),h(te,"min",0),h(ne,"for","deltaTime"),h(oe,"id","deltaTime"),h(oe,"type","number"),h(oe,"min",0)},m($,Y){F($,e,Y),u(e,i),F($,n,Y),F($,o,Y),u(o,s),F($,a,Y),F($,r,Y),F($,l,Y),F($,c,Y),u(c,f),u(f,x),u(c,A),u(c,T),u(T,P),u(c,b),u(c,B),u(B,O),u(B,V),u(c,Z),u(c,X),u(X,ae),u(c,ee),u(c,I),N(I,t[0]),F($,H,Y),F($,K,Y),u(K,U),u(U,k),u(k,q),u(q,Q),u(k,ce),u(k,w),N(w,t[3].interactionRange),u(U,se),u(U,ie),u(ie,J),u(J,ge),u(ie,he),u(ie,te),N(te,t[3].drag),u(U,Be),u(U,pe),u(pe,ne),u(ne,$e),u(pe,ve),u(pe,oe),N(oe,t[3].timeStep),u(U,Ie),u(U,xe),re||(Ce=[j(f,"click",t[6]),j(T,"click",t[7]),j(I,"input",t[8]),j(w,"input",t[9]),j(te,"input",t[10]),j(oe,"input",t[11])],re=!0)},p($,[Y]){Y&4&&m!==(m=$[2]?"Play":"Pause")&&Ve(x,m),Y&2&&R!==(R=$[1]?"Normal Speed":"Slow Mo")&&Ve(P,R),Y&1&&z(I.value)!==$[0]&&N(I,$[0]),Y&8&&z(w.value)!==$[3].interactionRange&&N(w,$[3].interactionRange),Y&8&&z(te.value)!==$[3].drag&&N(te,$[3].drag),Y&8&&z(oe.value)!==$[3].timeStep&&N(oe,$[3].timeStep)},i:le,o:le,d($){$&&d(e),$&&d(n),$&&d(o),$&&d(a),$&&d(r),$&&d(l),$&&d(c),$&&d(H),$&&d(K),re=!1,Wt(Ce)}}}function sr(t,e,i){const n={width:800,height:600},o={width:10,height:10};let s=1,a=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const P=Rt();me(P.canvas);const{ids:b,positions:B,colors:O}=Ji({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"circle"});Ki(P,{ids:b,colors:O,texDimensions:o});let C=ir(P,{positions:B,texDimensions:o});function V(){if(me(P.canvas),!r)for(let Z=0;Z<s;Z++)C=rr({gl:P,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Qi({gl:P,positionTex:C,textureDimension:o,ids:b}),r?requestAnimationFrame(V):a?setTimeout(()=>requestAnimationFrame(V),1e3):requestAnimationFrame(V)}requestAnimationFrame(V)}We(()=>c());const f=()=>i(2,r=!r),m=()=>i(1,a=!a);function x(){s=z(this.value),i(0,s)}function A(){l.interactionRange=z(this.value),i(3,l)}function T(){l.drag=z(this.value),i(3,l)}function R(){l.timeStep=z(this.value),i(3,l)}return[s,a,r,l,n,o,f,m,x,A,T,R]}class lr extends Fe{constructor(e){super(),ye(this,e,sr,ar,De,{})}}const cr=`attribute float id;
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
`,fr=`precision mediump float;
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
`;let _t,wt,Un,Ln;const ur=(t,e)=>{const{ids:i,colors:n}=e;wt=be(t,[cr,fr]),_t={idAttributeLocation:t.getAttribLocation(wt,"id"),colorAttributeLocation:t.getAttribLocation(wt,"color"),texDimensionsUniformLocation:t.getUniformLocation(wt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(wt,"u_resolution")},Un=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Un),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Ln=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ln),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},dr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Un),e.vertexAttribPointer(_t.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(_t.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Ln),e.vertexAttribPointer(_t.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(_t.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(wt),e.uniform2f(_t.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(_t.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function mr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:f}=hr(i);return[c,f,0,0]}if(n==="disk"){const{x:f,y:m}=vr(i,200);return[f,m,0,0]}if(n==="square"){const{x:f,y:m}=pr(i,300);return[f,m,0,0]}if(n==="idDiagonal"){const{x:c,y:f}=_r(i,l,s.length);return[c,f,0,0]}if(n==="sinusoidal"){const{x:c,y:f}=no(i,l,s.length,{x:1,y:5});return[c,f,0,0]}if(n==="circle"){const{x:c,y:f}=no(i,l,s.length,{x:1,y:1});return[c,f,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const hr=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},pr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},vr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},_r=(t,e,i)=>{const n=Pn(e,0,i,0,t.width,!1),o=Pn(e,0,i,0,t.height,!1);return{x:n,y:o}},no=(t,e,i,n)=>{const o=Pn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,f=Math.sin(l*o)*200+t.height/2;return{x:r,y:f}},Pn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?oo(a,n,o):oo(a,o,n):a},oo=function(t,e,i){return Math.max(Math.min(t,i),e)},Tr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,xr=`precision highp float;

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

`;let Qe,Je,Bn,jt,_n,io,ro,zt,tn;const Ar=(t,e)=>{const{positions:i,texDimensions:n}=e,o=xr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return Je=be(t,[Tr,o]),Qe={positionAttributeLocation:t.getAttribLocation(Je,"position"),positionTexLocation:t.getUniformLocation(Je,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Je,"interactionRange"),dragUniformLocation:t.getUniformLocation(Je,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Je,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Je,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Je,"u_resolution")},Bn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Bn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),jt=Pe(t,new Float32Array(i),n.width,n.height),_n=Pe(t,null,n.width,n.height),io=Ne(t,jt),ro=Ne(t,_n),zt={fb:io,tex:jt},tn={fb:ro,tex:_n},jt},br=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,tn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Bn),e.enableVertexAttribArray(Qe.positionAttributeLocation),e.vertexAttribPointer(Qe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,zt.tex),e.useProgram(Je),e.uniform1i(Qe.positionTexLocation,0),e.uniform1f(Qe.dragUniformLocation,o),e.uniform1f(Qe.interactionRangeUniformLocation,n),e.uniform1f(Qe.deltaTimeUniformLocation,s),e.uniform2f(Qe.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Qe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=zt;zt=tn,tn=a}return zt.tex};function gr(t){let e,i,n,o,s,a,r,l,c,f,m,x,A,T=t[2]?"Play":"Pause",R,P,b,B=t[1]?"Normal Speed":"Slow Mo",O,C,V,Z,X=t[5].width*t[5].height+"",ae,ee,I,H,K,U,k,q,Q,ce,w,se,ie,J,ge,he,te,Be,pe,ne,$e,ve,oe,Ie,xe,re,Ce,$,Y,ze;return{c(){e=p("p"),i=y("This could be a kind of water simulation."),n=g(),o=p("p"),s=y(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),a=g(),r=p("p"),l=y("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=g(),f=p("canvas"),m=g(),x=p("div"),A=p("button"),R=y(T),P=g(),b=p("button"),O=y(B),C=g(),V=p("span"),Z=y("particles: "),ae=y(X),ee=g(),I=p("label"),H=y("Smooth steps"),K=g(),U=p("input"),k=g(),q=p("div"),Q=p("ul"),ce=p("li"),w=p("label"),se=y("Interaction Range"),ie=g(),J=p("input"),ge=g(),he=p("li"),te=p("label"),Be=y("Drag"),pe=g(),ne=p("input"),$e=g(),ve=p("li"),oe=p("label"),Ie=y("Time step"),xe=g(),re=p("input"),Ce=g(),$=p("ul"),this.h()},l(L){e=v(L,"P",{});var W=_(e);i=D(W,"This could be a kind of water simulation."),W.forEach(d),n=E(L),o=v(L,"P",{});var Oe=_(o);s=D(Oe,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Oe.forEach(d),a=E(L),r=v(L,"P",{});var Re=_(r);l=D(Re,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Re.forEach(d),c=E(L),f=v(L,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(f).forEach(d),m=E(L),x=v(L,"DIV",{});var de=_(x);A=v(de,"BUTTON",{});var Xe=_(A);R=D(Xe,T),Xe.forEach(d),P=E(de),b=v(de,"BUTTON",{});var fe=_(b);O=D(fe,B),fe.forEach(d),C=E(de),V=v(de,"SPAN",{});var Ue=_(V);Z=D(Ue,"particles: "),ae=D(Ue,X),Ue.forEach(d),ee=E(de),I=v(de,"LABEL",{for:!0});var Me=_(I);H=D(Me,"Smooth steps"),Me.forEach(d),K=E(de),U=v(de,"INPUT",{type:!0,min:!0}),de.forEach(d),k=E(L),q=v(L,"DIV",{});var _e=_(q);Q=v(_e,"UL",{});var Ee=_(Q);ce=v(Ee,"LI",{});var S=_(ce);w=v(S,"LABEL",{for:!0});var G=_(w);se=D(G,"Interaction Range"),G.forEach(d),ie=E(S),J=v(S,"INPUT",{id:!0,type:!0,min:!0}),S.forEach(d),ge=E(Ee),he=v(Ee,"LI",{});var Ye=_(he);te=v(Ye,"LABEL",{for:!0});var M=_(te);Be=D(M,"Drag"),M.forEach(d),pe=E(Ye),ne=v(Ye,"INPUT",{id:!0,type:!0,min:!0}),Ye.forEach(d),$e=E(Ee),ve=v(Ee,"LI",{});var ue=_(ve);oe=v(ue,"LABEL",{for:!0});var we=_(oe);Ie=D(we,"Time step"),we.forEach(d),xe=E(ue),re=v(ue,"INPUT",{id:!0,type:!0,min:!0}),ue.forEach(d),Ce=E(Ee),$=v(Ee,"UL",{}),_($).forEach(d),Ee.forEach(d),_e.forEach(d),this.h()},h(){h(f,"id","canvas"),He(f,"background-color","black"),h(f,"width",t[4].width),h(f,"height",t[4].height),h(I,"for","steps"),h(U,"type","number"),h(U,"min",0),h(w,"for","interactionRange"),h(J,"id","interactionRange"),h(J,"type","number"),h(J,"min",0),h(te,"for","drag"),h(ne,"id","drag"),h(ne,"type","number"),h(ne,"min",0),h(oe,"for","deltaTime"),h(re,"id","deltaTime"),h(re,"type","number"),h(re,"min",0)},m(L,W){F(L,e,W),u(e,i),F(L,n,W),F(L,o,W),u(o,s),F(L,a,W),F(L,r,W),u(r,l),F(L,c,W),F(L,f,W),F(L,m,W),F(L,x,W),u(x,A),u(A,R),u(x,P),u(x,b),u(b,O),u(x,C),u(x,V),u(V,Z),u(V,ae),u(x,ee),u(x,I),u(I,H),u(x,K),u(x,U),N(U,t[0]),F(L,k,W),F(L,q,W),u(q,Q),u(Q,ce),u(ce,w),u(w,se),u(ce,ie),u(ce,J),N(J,t[3].interactionRange),u(Q,ge),u(Q,he),u(he,te),u(te,Be),u(he,pe),u(he,ne),N(ne,t[3].drag),u(Q,$e),u(Q,ve),u(ve,oe),u(oe,Ie),u(ve,xe),u(ve,re),N(re,t[3].timeStep),u(Q,Ce),u(Q,$),Y||(ze=[j(A,"click",t[6]),j(b,"click",t[7]),j(U,"input",t[8]),j(J,"input",t[9]),j(ne,"input",t[10]),j(re,"input",t[11])],Y=!0)},p(L,[W]){W&4&&T!==(T=L[2]?"Play":"Pause")&&Ve(R,T),W&2&&B!==(B=L[1]?"Normal Speed":"Slow Mo")&&Ve(O,B),W&1&&z(U.value)!==L[0]&&N(U,L[0]),W&8&&z(J.value)!==L[3].interactionRange&&N(J,L[3].interactionRange),W&8&&z(ne.value)!==L[3].drag&&N(ne,L[3].drag),W&8&&z(re.value)!==L[3].timeStep&&N(re,L[3].timeStep)},i:le,o:le,d(L){L&&d(e),L&&d(n),L&&d(o),L&&d(a),L&&d(r),L&&d(c),L&&d(f),L&&d(m),L&&d(x),L&&d(k),L&&d(q),Y=!1,Wt(ze)}}}function Er(t,e,i){const n={width:800,height:600},o={width:500,height:20};let s=1,a=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const P=Rt();me(P.canvas);const{ids:b,positions:B,colors:O}=mr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"disk"});ur(P,{ids:b,colors:O,texDimensions:o});let C=Ar(P,{positions:B,texDimensions:o});function V(){if(me(P.canvas),!r)for(let Z=0;Z<s;Z++)C=br({gl:P,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return dr({gl:P,positionTex:C,textureDimension:o,ids:b}),r?requestAnimationFrame(V):a?setTimeout(()=>requestAnimationFrame(V),1e3):requestAnimationFrame(V)}requestAnimationFrame(V)}We(()=>c());const f=()=>i(2,r=!r),m=()=>i(1,a=!a);function x(){s=z(this.value),i(0,s)}function A(){l.interactionRange=z(this.value),i(3,l)}function T(){l.drag=z(this.value),i(3,l)}function R(){l.timeStep=z(this.value),i(3,l)}return[s,a,r,l,n,o,f,m,x,A,T,R]}class wr extends Fe{constructor(e){super(),ye(this,e,Er,gr,De,{})}}const Rr=`attribute float id;
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
`,Fr=`precision mediump float;
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
`;let st,Tt,$n,In;const yr=(t,e)=>{const{ids:i,colors:n}=e;Tt=be(t,[Rr,Fr]),st={idAttributeLocation:t.getAttribLocation(Tt,"id"),colorAttributeLocation:t.getAttribLocation(Tt,"color"),sizeUniformLocation:t.getUniformLocation(Tt,"size"),texDimensionsUniformLocation:t.getUniformLocation(Tt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Tt,"worldDimensions")},$n=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,$n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),In=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,In),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Dr=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:s,ids:a}=t,r=1,l=e.FLOAT,c=!1,f=0,m=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,$n),e.vertexAttribPointer(st.idAttributeLocation,r,l,c,f,m),e.enableVertexAttribArray(st.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,In),e.vertexAttribPointer(st.colorAttributeLocation,r,l,c,f,m),e.enableVertexAttribArray(st.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Tt),e.uniform1f(st.sizeUniformLocation,s),e.uniform2f(st.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(st.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,m,a.length)};function Ur(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:f}=Lr(i);return[c,f,0,0]}if(n==="disk"){const{x:f,y:m}=Br(i,200);return[f,m,0,0]}if(n==="square"){const{x:f,y:m}=Pr(i,300);return[f,m,0,0]}if(n==="idDiagonal"){const{x:c,y:f}=$r(i,l,s.length);return[c,f,0,0]}if(n==="sinusoidal"){const{x:c,y:f}=ao(i,l,s.length,{x:1,y:5});return[c,f,0,0]}if(n==="circle"){const{x:c,y:f}=ao(i,l,s.length,{x:1,y:1});return[c,f,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Lr=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Pr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Br=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},$r=(t,e,i)=>{const n=Sn(e,0,i,0,t.width,!1),o=Sn(e,0,i,0,t.height,!1);return{x:n,y:o}},ao=(t,e,i,n)=>{const o=Sn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,f=Math.sin(l*o)*200+t.height/2;return{x:r,y:f}},Sn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?so(a,n,o):so(a,o,n):a},so=function(t,e,i){return Math.max(Math.min(t,i),e)},Ir=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Sr=`precision highp float;

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

`;let Ze,et,Cn,Kt,Tn,lo,co,Ot,nn;const Cr=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Sr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return et=be(t,[Ir,o]),Ze={positionAttributeLocation:t.getAttribLocation(et,"position"),positionTexLocation:t.getUniformLocation(et,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(et,"interactionRange"),dragUniformLocation:t.getUniformLocation(et,"drag"),deltaTimeUniformLocation:t.getUniformLocation(et,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(et,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(et,"worldDimensions")},Cn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Cn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Kt=Pe(t,new Float32Array(i),n.width,n.height),Tn=Pe(t,null,n.width,n.height),lo=Ne(t,Kt),co=Ne(t,Tn),Ot={fb:lo,tex:Kt},nn={fb:co,tex:Tn},Kt},Mr=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,nn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Cn),e.enableVertexAttribArray(Ze.positionAttributeLocation),e.vertexAttribPointer(Ze.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ot.tex),e.useProgram(et),e.uniform1i(Ze.positionTexLocation,0),e.uniform1f(Ze.dragUniformLocation,s),e.uniform1f(Ze.interactionRangeUniformLocation,o),e.uniform1f(Ze.deltaTimeUniformLocation,a),e.uniform2f(Ze.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ze.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Ot;Ot=nn,nn=r}return Ot.tex};function Nr(t){let e,i,n,o,s,a,r,l=t[3]?"Play":"Pause",c,f,m,x=t[2]?"Normal Speed":"Slow Mo",A,T,R,P,b=t[6].width*t[6].height+"",B,O,C,V,Z,X,ae,ee,I,H,K,U,k,q,Q,ce,w,se,ie,J,ge,he,te,Be,pe,ne,$e,ve,oe,Ie,xe,re,Ce,$,Y,ze,L,W,Oe,Re,de,Xe,fe,Ue,Me,_e,Ee,S,G,Ye;return{c(){e=p("p"),i=y(`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),n=g(),o=p("canvas"),s=g(),a=p("div"),r=p("button"),c=y(l),f=g(),m=p("button"),A=y(x),T=g(),R=p("span"),P=y("particles: "),B=y(b),O=g(),C=p("label"),V=y("Smooth steps"),Z=g(),X=p("input"),ae=g(),ee=p("button"),I=y("Reset"),H=g(),K=p("div"),U=p("ul"),k=p("li"),q=p("label"),Q=y("Interaction Range"),ce=g(),w=p("input"),se=g(),ie=p("li"),J=p("label"),ge=y("Drag"),he=g(),te=p("input"),Be=g(),pe=p("li"),ne=p("label"),$e=y("Time step"),ve=g(),oe=p("input"),Ie=g(),xe=p("li"),re=p("label"),Ce=y("Particles size"),$=g(),Y=p("input"),ze=g(),L=p("li"),W=p("label"),Oe=y("World: width"),Re=g(),de=p("input"),Xe=g(),fe=p("label"),Ue=y("height"),Me=g(),_e=p("input"),Ee=g(),S=p("ul"),this.h()},l(M){e=v(M,"P",{});var ue=_(e);i=D(ue,`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),ue.forEach(d),n=E(M),o=v(M,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(o).forEach(d),s=E(M),a=v(M,"DIV",{});var we=_(a);r=v(we,"BUTTON",{});var Ft=_(r);c=D(Ft,l),Ft.forEach(d),f=E(we),m=v(we,"BUTTON",{});var yt=_(m);A=D(yt,x),yt.forEach(d),T=E(we),R=v(we,"SPAN",{});var Le=_(R);P=D(Le,"particles: "),B=D(Le,b),Le.forEach(d),O=E(we),C=v(we,"LABEL",{for:!0});var ft=_(C);V=D(ft,"Smooth steps"),ft.forEach(d),Z=E(we),X=v(we,"INPUT",{type:!0,min:!0}),ae=E(we),ee=v(we,"BUTTON",{});var Dt=_(ee);I=D(Dt,"Reset"),Dt.forEach(d),we.forEach(d),H=E(M),K=v(M,"DIV",{});var ut=_(K);U=v(ut,"UL",{});var Se=_(U);k=v(Se,"LI",{});var qe=_(k);q=v(qe,"LABEL",{for:!0});var Ut=_(q);Q=D(Ut,"Interaction Range"),Ut.forEach(d),ce=E(qe),w=v(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(d),se=E(Se),ie=v(Se,"LI",{});var Ge=_(ie);J=v(Ge,"LABEL",{for:!0});var Lt=_(J);ge=D(Lt,"Drag"),Lt.forEach(d),he=E(Ge),te=v(Ge,"INPUT",{id:!0,type:!0,min:!0}),Ge.forEach(d),Be=E(Se),pe=v(Se,"LI",{});var ke=_(pe);ne=v(ke,"LABEL",{for:!0});var Pt=_(ne);$e=D(Pt,"Time step"),Pt.forEach(d),ve=E(ke),oe=v(ke,"INPUT",{id:!0,type:!0,min:!0}),ke.forEach(d),Ie=E(Se),xe=v(Se,"LI",{});var dt=_(xe);re=v(dt,"LABEL",{for:!0});var kn=_(re);Ce=D(kn,"Particles size"),kn.forEach(d),$=E(dt),Y=v(dt,"INPUT",{id:!0,type:!0,min:!0}),dt.forEach(d),ze=E(Se),L=v(Se,"LI",{});var at=_(L);W=v(at,"LABEL",{for:!0});var Wn=_(W);Oe=D(Wn,"World: width"),Wn.forEach(d),Re=E(at),de=v(at,"INPUT",{id:!0,type:!0,min:!0}),Xe=E(at),fe=v(at,"LABEL",{for:!0});var Yn=_(fe);Ue=D(Yn,"height"),Yn.forEach(d),Me=E(at),_e=v(at,"INPUT",{id:!0,type:!0,min:!0}),at.forEach(d),Ee=E(Se),S=v(Se,"UL",{}),_(S).forEach(d),Se.forEach(d),ut.forEach(d),this.h()},h(){h(o,"id","canvas"),He(o,"background-color","black"),h(o,"width",t[5].width),h(o,"height",t[5].height),h(C,"for","steps"),h(X,"type","number"),h(X,"min",0),h(q,"for","interactionRange"),h(w,"id","interactionRange"),h(w,"type","number"),h(w,"min",0),h(J,"for","drag"),h(te,"id","drag"),h(te,"type","number"),h(te,"min",0),h(ne,"for","deltaTime"),h(oe,"id","deltaTime"),h(oe,"type","number"),h(oe,"min",0),h(re,"for","particlesSize"),h(Y,"id","particlesSize"),h(Y,"type","number"),h(Y,"min",0),h(W,"for","worldWidth"),h(de,"id","worldWidth"),h(de,"type","number"),h(de,"min",0),h(fe,"for","worldHeight"),h(_e,"id","worldHeight"),h(_e,"type","number"),h(_e,"min",0)},m(M,ue){F(M,e,ue),u(e,i),F(M,n,ue),F(M,o,ue),F(M,s,ue),F(M,a,ue),u(a,r),u(r,c),u(a,f),u(a,m),u(m,A),u(a,T),u(a,R),u(R,P),u(R,B),u(a,O),u(a,C),u(C,V),u(a,Z),u(a,X),N(X,t[1]),u(a,ae),u(a,ee),u(ee,I),F(M,H,ue),F(M,K,ue),u(K,U),u(U,k),u(k,q),u(q,Q),u(k,ce),u(k,w),N(w,t[4].interactionRange),u(U,se),u(U,ie),u(ie,J),u(J,ge),u(ie,he),u(ie,te),N(te,t[4].drag),u(U,Be),u(U,pe),u(pe,ne),u(ne,$e),u(pe,ve),u(pe,oe),N(oe,t[4].timeStep),u(U,Ie),u(U,xe),u(xe,re),u(re,Ce),u(xe,$),u(xe,Y),N(Y,t[4].particlesSize),u(U,ze),u(U,L),u(L,W),u(W,Oe),u(L,Re),u(L,de),N(de,t[0].width),u(L,Xe),u(L,fe),u(fe,Ue),u(L,Me),u(L,_e),N(_e,t[0].height),u(U,Ee),u(U,S),G||(Ye=[j(r,"click",t[8]),j(m,"click",t[9]),j(X,"input",t[10]),j(ee,"click",t[11]),j(w,"input",t[12]),j(te,"input",t[13]),j(oe,"input",t[14]),j(Y,"input",t[15]),j(de,"input",t[16]),j(_e,"input",t[17])],G=!0)},p(M,[ue]){ue&8&&l!==(l=M[3]?"Play":"Pause")&&Ve(c,l),ue&4&&x!==(x=M[2]?"Normal Speed":"Slow Mo")&&Ve(A,x),ue&2&&z(X.value)!==M[1]&&N(X,M[1]),ue&16&&z(w.value)!==M[4].interactionRange&&N(w,M[4].interactionRange),ue&16&&z(te.value)!==M[4].drag&&N(te,M[4].drag),ue&16&&z(oe.value)!==M[4].timeStep&&N(oe,M[4].timeStep),ue&16&&z(Y.value)!==M[4].particlesSize&&N(Y,M[4].particlesSize),ue&1&&z(de.value)!==M[0].width&&N(de,M[0].width),ue&1&&z(_e.value)!==M[0].height&&N(_e,M[0].height)},i:le,o:le,d(M){M&&d(e),M&&d(n),M&&d(o),M&&d(s),M&&d(a),M&&d(H),M&&d(K),G=!1,Wt(Ye)}}}function zr(t,e,i){const n={width:800,height:600},o={width:1200,height:500},s={width:200,height:20};let a=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:20};let f,m;function x(){cancelAnimationFrame(m),f=Rt(),me(f.canvas);const{ids:X,positions:ae,colors:ee}=Ur({texDimensions:s,worldDimensions:o,mode:"disk"});yr(f,{ids:X,colors:ee,texDimensions:s});let I=Cr(f,{positions:ae,texDimensions:s});function H(){if(me(f.canvas),!l)for(let K=0;K<a;K++)I=Mr({gl:f,texDimensions:s,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Dr({gl:f,positionTex:I,texDimensions:s,worldDimensions:o,particlesSize:c.particlesSize,ids:X}),r?setTimeout(()=>m=requestAnimationFrame(H),1e3):m=requestAnimationFrame(H)}m=requestAnimationFrame(H)}We(()=>x());const A=()=>i(3,l=!l),T=()=>i(2,r=!r);function R(){a=z(this.value),i(1,a)}const P=()=>x();function b(){c.interactionRange=z(this.value),i(4,c)}function B(){c.drag=z(this.value),i(4,c)}function O(){c.timeStep=z(this.value),i(4,c)}function C(){c.particlesSize=z(this.value),i(4,c)}function V(){o.width=z(this.value),i(0,o)}function Z(){o.height=z(this.value),i(0,o)}return[o,a,r,l,c,n,s,x,A,T,R,P,b,B,O,C,V,Z]}class Or extends Fe{constructor(e){super(),ye(this,e,zr,Nr,De,{})}}const Xr=`attribute float id;
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
`,kr=`precision mediump float;
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
`;let lt,xt,Mn,Nn;const Wr=(t,e)=>{const{ids:i,colors:n}=e;xt=be(t,[Xr,kr]),lt={idAttributeLocation:t.getAttribLocation(xt,"id"),colorAttributeLocation:t.getAttribLocation(xt,"color"),sizeUniformLocation:t.getUniformLocation(xt,"size"),texDimensionsUniformLocation:t.getUniformLocation(xt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(xt,"worldDimensions")},Mn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Mn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Yr=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:s,ids:a}=t,r=1,l=e.FLOAT,c=!1,f=0,m=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Mn),e.vertexAttribPointer(lt.idAttributeLocation,r,l,c,f,m),e.enableVertexAttribArray(lt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Nn),e.vertexAttribPointer(lt.colorAttributeLocation,r,l,c,f,m),e.enableVertexAttribArray(lt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(xt),e.uniform1f(lt.sizeUniformLocation,s),e.uniform2f(lt.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(lt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,m,a.length)};function Vr(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:f}=Hr(i);return[c,f,0,0]}if(n==="disk"){const{x:f,y:m}=Gr(i,200);return[f,m,0,0]}if(n==="square"){const{x:f,y:m}=qr(i,300);return[f,m,0,0]}if(n==="idDiagonal"){const{x:c,y:f}=jr(i,l,s.length);return[c,f,0,0]}if(n==="sinusoidal"){const{x:c,y:f}=fo(i,l,s.length,{x:1,y:5});return[c,f,0,0]}if(n==="circle"){const{x:c,y:f}=fo(i,l,s.length,{x:1,y:1});return[c,f,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Hr=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},qr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Gr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},jr=(t,e,i)=>{const n=zn(e,0,i,0,t.width,!1),o=zn(e,0,i,0,t.height,!1);return{x:n,y:o}},fo=(t,e,i,n)=>{const o=zn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,f=Math.sin(l*o)*200+t.height/2;return{x:r,y:f}},zn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?uo(a,n,o):uo(a,o,n):a},uo=function(t,e,i){return Math.max(Math.min(t,i),e)},Kr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Qr=`precision highp float;

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

`;let tt,nt,On,Qt,xn,mo,ho,Xt,on;const Jr=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Qr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return nt=be(t,[Kr,o]),tt={positionAttributeLocation:t.getAttribLocation(nt,"position"),positionTexLocation:t.getUniformLocation(nt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(nt,"interactionRange"),dragUniformLocation:t.getUniformLocation(nt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(nt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(nt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(nt,"worldDimensions")},On=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,On),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Qt=Pe(t,new Float32Array(i),n.width,n.height),xn=Pe(t,null,n.width,n.height),mo=Ne(t,Qt),ho=Ne(t,xn),Xt={fb:mo,tex:Qt},on={fb:ho,tex:xn},Qt},Zr=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,on.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,On),e.enableVertexAttribArray(tt.positionAttributeLocation),e.vertexAttribPointer(tt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Xt.tex),e.useProgram(nt),e.uniform1i(tt.positionTexLocation,0),e.uniform1f(tt.dragUniformLocation,s),e.uniform1f(tt.interactionRangeUniformLocation,o),e.uniform1f(tt.deltaTimeUniformLocation,a),e.uniform2f(tt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(tt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Xt;Xt=on,on=r}return Xt.tex};function ea(t){let e,i,n,o,s=t[3]?"Play":"Pause",a,r,l,c=t[2]?"Normal Speed":"Slow Mo",f,m,x,A,T=t[6].width*t[6].height+"",R,P,b,B,O,C,V,Z,X,ae,ee,I,H,K,U,k,q,Q,ce,w,se,ie,J,ge,he,te,Be,pe,ne,$e,ve,oe,Ie,xe,re,Ce,$,Y,ze,L,W,Oe,Re,de,Xe,fe,Ue,Me,_e,Ee;return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),a=y(s),r=g(),l=p("button"),f=y(c),m=g(),x=p("span"),A=y("particles: "),R=y(T),P=g(),b=p("label"),B=y("Smooth steps"),O=g(),C=p("input"),V=g(),Z=p("button"),X=y("Reset"),ae=g(),ee=p("div"),I=p("ul"),H=p("li"),K=p("label"),U=y("Interaction Range"),k=g(),q=p("input"),Q=g(),ce=p("li"),w=p("label"),se=y("Drag"),ie=g(),J=p("input"),ge=g(),he=p("li"),te=p("label"),Be=y("Time step"),pe=g(),ne=p("input"),$e=g(),ve=p("li"),oe=p("label"),Ie=y("Particles size"),xe=g(),re=p("input"),Ce=g(),$=p("li"),Y=p("label"),ze=y("World: width"),L=g(),W=p("input"),Oe=g(),Re=p("label"),de=y("height"),Xe=g(),fe=p("input"),Ue=g(),Me=p("ul"),this.h()},l(S){e=v(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(e).forEach(d),i=E(S),n=v(S,"DIV",{});var G=_(n);o=v(G,"BUTTON",{});var Ye=_(o);a=D(Ye,s),Ye.forEach(d),r=E(G),l=v(G,"BUTTON",{});var M=_(l);f=D(M,c),M.forEach(d),m=E(G),x=v(G,"SPAN",{});var ue=_(x);A=D(ue,"particles: "),R=D(ue,T),ue.forEach(d),P=E(G),b=v(G,"LABEL",{for:!0});var we=_(b);B=D(we,"Smooth steps"),we.forEach(d),O=E(G),C=v(G,"INPUT",{type:!0,min:!0}),V=E(G),Z=v(G,"BUTTON",{});var Ft=_(Z);X=D(Ft,"Reset"),Ft.forEach(d),G.forEach(d),ae=E(S),ee=v(S,"DIV",{});var yt=_(ee);I=v(yt,"UL",{});var Le=_(I);H=v(Le,"LI",{});var ft=_(H);K=v(ft,"LABEL",{for:!0});var Dt=_(K);U=D(Dt,"Interaction Range"),Dt.forEach(d),k=E(ft),q=v(ft,"INPUT",{id:!0,type:!0,min:!0}),ft.forEach(d),Q=E(Le),ce=v(Le,"LI",{});var ut=_(ce);w=v(ut,"LABEL",{for:!0});var Se=_(w);se=D(Se,"Drag"),Se.forEach(d),ie=E(ut),J=v(ut,"INPUT",{id:!0,type:!0,min:!0}),ut.forEach(d),ge=E(Le),he=v(Le,"LI",{});var qe=_(he);te=v(qe,"LABEL",{for:!0});var Ut=_(te);Be=D(Ut,"Time step"),Ut.forEach(d),pe=E(qe),ne=v(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(d),$e=E(Le),ve=v(Le,"LI",{});var Ge=_(ve);oe=v(Ge,"LABEL",{for:!0});var Lt=_(oe);Ie=D(Lt,"Particles size"),Lt.forEach(d),xe=E(Ge),re=v(Ge,"INPUT",{id:!0,type:!0,min:!0}),Ge.forEach(d),Ce=E(Le),$=v(Le,"LI",{});var ke=_($);Y=v(ke,"LABEL",{for:!0});var Pt=_(Y);ze=D(Pt,"World: width"),Pt.forEach(d),L=E(ke),W=v(ke,"INPUT",{id:!0,type:!0,min:!0}),Oe=E(ke),Re=v(ke,"LABEL",{for:!0});var dt=_(Re);de=D(dt,"height"),dt.forEach(d),Xe=E(ke),fe=v(ke,"INPUT",{id:!0,type:!0,min:!0}),ke.forEach(d),Ue=E(Le),Me=v(Le,"UL",{}),_(Me).forEach(d),Le.forEach(d),yt.forEach(d),this.h()},h(){h(e,"id","canvas"),He(e,"background-color","black"),h(e,"width",t[5].width),h(e,"height",t[5].height),h(b,"for","steps"),h(C,"type","number"),h(C,"min",0),h(K,"for","interactionRange"),h(q,"id","interactionRange"),h(q,"type","number"),h(q,"min",0),h(w,"for","drag"),h(J,"id","drag"),h(J,"type","number"),h(J,"min",0),h(te,"for","deltaTime"),h(ne,"id","deltaTime"),h(ne,"type","number"),h(ne,"min",0),h(oe,"for","particlesSize"),h(re,"id","particlesSize"),h(re,"type","number"),h(re,"min",0),h(Y,"for","worldWidth"),h(W,"id","worldWidth"),h(W,"type","number"),h(W,"min",0),h(Re,"for","worldHeight"),h(fe,"id","worldHeight"),h(fe,"type","number"),h(fe,"min",0)},m(S,G){F(S,e,G),F(S,i,G),F(S,n,G),u(n,o),u(o,a),u(n,r),u(n,l),u(l,f),u(n,m),u(n,x),u(x,A),u(x,R),u(n,P),u(n,b),u(b,B),u(n,O),u(n,C),N(C,t[1]),u(n,V),u(n,Z),u(Z,X),F(S,ae,G),F(S,ee,G),u(ee,I),u(I,H),u(H,K),u(K,U),u(H,k),u(H,q),N(q,t[4].interactionRange),u(I,Q),u(I,ce),u(ce,w),u(w,se),u(ce,ie),u(ce,J),N(J,t[4].drag),u(I,ge),u(I,he),u(he,te),u(te,Be),u(he,pe),u(he,ne),N(ne,t[4].timeStep),u(I,$e),u(I,ve),u(ve,oe),u(oe,Ie),u(ve,xe),u(ve,re),N(re,t[4].particlesSize),u(I,Ce),u(I,$),u($,Y),u(Y,ze),u($,L),u($,W),N(W,t[0].width),u($,Oe),u($,Re),u(Re,de),u($,Xe),u($,fe),N(fe,t[0].height),u(I,Ue),u(I,Me),_e||(Ee=[j(o,"click",t[8]),j(l,"click",t[9]),j(C,"input",t[10]),j(Z,"click",t[11]),j(q,"input",t[12]),j(J,"input",t[13]),j(ne,"input",t[14]),j(re,"input",t[15]),j(W,"input",t[16]),j(fe,"input",t[17])],_e=!0)},p(S,[G]){G&8&&s!==(s=S[3]?"Play":"Pause")&&Ve(a,s),G&4&&c!==(c=S[2]?"Normal Speed":"Slow Mo")&&Ve(f,c),G&2&&z(C.value)!==S[1]&&N(C,S[1]),G&16&&z(q.value)!==S[4].interactionRange&&N(q,S[4].interactionRange),G&16&&z(J.value)!==S[4].drag&&N(J,S[4].drag),G&16&&z(ne.value)!==S[4].timeStep&&N(ne,S[4].timeStep),G&16&&z(re.value)!==S[4].particlesSize&&N(re,S[4].particlesSize),G&1&&z(W.value)!==S[0].width&&N(W,S[0].width),G&1&&z(fe.value)!==S[0].height&&N(fe,S[0].height)},i:le,o:le,d(S){S&&d(e),S&&d(i),S&&d(n),S&&d(ae),S&&d(ee),_e=!1,Wt(Ee)}}}function ta(t,e,i){const n={width:800,height:600},o={width:1200,height:500},s={width:200,height:20};let a=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let f,m;function x(){cancelAnimationFrame(m),f=Rt(),me(f.canvas);const{ids:X,positions:ae,colors:ee}=Vr({texDimensions:s,worldDimensions:o,mode:"sinusoidal"});Wr(f,{ids:X,colors:ee,texDimensions:s});let I=Jr(f,{positions:ae,texDimensions:s});function H(){if(!l)for(let K=0;K<a;K++)I=Zr({gl:f,texDimensions:s,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Yr({gl:f,positionTex:I,texDimensions:s,worldDimensions:o,particlesSize:c.particlesSize,ids:X}),r?setTimeout(()=>m=requestAnimationFrame(H),1e3):m=requestAnimationFrame(H)}m=requestAnimationFrame(H)}We(()=>x());const A=()=>i(3,l=!l),T=()=>i(2,r=!r);function R(){a=z(this.value),i(1,a)}const P=()=>x();function b(){c.interactionRange=z(this.value),i(4,c)}function B(){c.drag=z(this.value),i(4,c)}function O(){c.timeStep=z(this.value),i(4,c)}function C(){c.particlesSize=z(this.value),i(4,c)}function V(){o.width=z(this.value),i(0,o)}function Z(){o.height=z(this.value),i(0,o)}return[o,a,r,l,c,n,s,x,A,T,R,P,b,B,O,C,V,Z]}class na extends Fe{constructor(e){super(),ye(this,e,ta,ea,De,{})}}function po(t,e,i){const n=t.slice();return n[1]=e[i],n}function vo(t,e,i){const n=t.slice();return n[1]=e[i],n}function oa(t){let e;return{c(){e=y("About")},l(i){e=D(i,"About")},m(i,n){F(i,e,n)},d(i){i&&d(e)}}}function ia(t){let e=t[1].title+"",i;return{c(){i=y(e)},l(n){i=D(n,e)},m(n,o){F(n,i,o)},p:le,d(n){n&&d(i)}}}function _o(t){let e,i;return e=new go({props:{$$slots:{default:[ia]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,o){it(e,n,o),i=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){i||(Te(e.$$.fragment,n),i=!0)},o(n){Ae(e.$$.fragment,n),i=!1},d(n){rt(e,n)}}}function ra(t){let e,i,n,o;e=new go({props:{$$slots:{default:[oa]},$$scope:{ctx:t}}});let s=t[0],a=[];for(let l=0;l<s.length;l+=1)a[l]=_o(vo(t,s,l));const r=l=>Ae(a[l],1,1,()=>{a[l]=null});return{c(){ot(e.$$.fragment),i=g();for(let l=0;l<a.length;l+=1)a[l].c();n=rn()},l(l){ct(e.$$.fragment,l),i=E(l);for(let c=0;c<a.length;c+=1)a[c].l(l);n=rn()},m(l,c){it(e,l,c),F(l,i,c);for(let f=0;f<a.length;f+=1)a[f].m(l,c);F(l,n,c),o=!0},p(l,c){const f={};if(c&64&&(f.$$scope={dirty:c,ctx:l}),e.$set(f),c&1){s=l[0];let m;for(m=0;m<s.length;m+=1){const x=vo(l,s,m);a[m]?(a[m].p(x,c),Te(a[m],1)):(a[m]=_o(x),a[m].c(),Te(a[m],1),a[m].m(n.parentNode,n))}for(fn(),m=s.length;m<a.length;m+=1)r(m);un()}},i(l){if(!o){Te(e.$$.fragment,l);for(let c=0;c<s.length;c+=1)Te(a[c]);o=!0}},o(l){Ae(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)Ae(a[c]);o=!1},d(l){rt(e,l),l&&d(i),Ao(a,l),l&&d(n)}}}function aa(t){let e,i;return{c(){e=p("p"),i=y("This page is an experiment to run simulation on the GPU.")},l(n){e=v(n,"P",{});var o=_(e);i=D(o,"This page is an experiment to run simulation on the GPU."),o.forEach(d)},m(n,o){F(n,e,o),u(e,i)},p:le,d(n){n&&d(e)}}}function sa(t){let e,i,n;var o=t[1].component;function s(a){return{}}return o&&(e=Hn(o,s())),{c(){e&&ot(e.$$.fragment),i=g()},l(a){e&&ct(e.$$.fragment,a),i=E(a)},m(a,r){e&&it(e,a,r),F(a,i,r),n=!0},p(a,r){if(o!==(o=a[1].component)){if(e){fn();const l=e;Ae(l.$$.fragment,1,0,()=>{rt(l,1)}),un()}o?(e=Hn(o,s()),ot(e.$$.fragment),Te(e.$$.fragment,1),it(e,i.parentNode,i)):e=null}},i(a){n||(e&&Te(e.$$.fragment,a),n=!0)},o(a){e&&Ae(e.$$.fragment,a),n=!1},d(a){e&&rt(e,a),a&&d(i)}}}function To(t){let e,i;return e=new Eo({props:{$$slots:{default:[sa]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,o){it(e,n,o),i=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){i||(Te(e.$$.fragment,n),i=!0)},o(n){Ae(e.$$.fragment,n),i=!1},d(n){rt(e,n)}}}function la(t){let e,i,n,o,s,a;e=new Wo({props:{$$slots:{default:[ra]},$$scope:{ctx:t}}}),n=new Eo({props:{$$slots:{default:[aa]},$$scope:{ctx:t}}});let r=t[0],l=[];for(let f=0;f<r.length;f+=1)l[f]=To(po(t,r,f));const c=f=>Ae(l[f],1,1,()=>{l[f]=null});return{c(){ot(e.$$.fragment),i=g(),ot(n.$$.fragment),o=g();for(let f=0;f<l.length;f+=1)l[f].c();s=rn()},l(f){ct(e.$$.fragment,f),i=E(f),ct(n.$$.fragment,f),o=E(f);for(let m=0;m<l.length;m+=1)l[m].l(f);s=rn()},m(f,m){it(e,f,m),F(f,i,m),it(n,f,m),F(f,o,m);for(let x=0;x<l.length;x+=1)l[x].m(f,m);F(f,s,m),a=!0},p(f,m){const x={};m&64&&(x.$$scope={dirty:m,ctx:f}),e.$set(x);const A={};if(m&64&&(A.$$scope={dirty:m,ctx:f}),n.$set(A),m&1){r=f[0];let T;for(T=0;T<r.length;T+=1){const R=po(f,r,T);l[T]?(l[T].p(R,m),Te(l[T],1)):(l[T]=To(R),l[T].c(),Te(l[T],1),l[T].m(s.parentNode,s))}for(fn(),T=r.length;T<l.length;T+=1)c(T);un()}},i(f){if(!a){Te(e.$$.fragment,f),Te(n.$$.fragment,f);for(let m=0;m<r.length;m+=1)Te(l[m]);a=!0}},o(f){Ae(e.$$.fragment,f),Ae(n.$$.fragment,f),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)Ae(l[m]);a=!1},d(f){rt(e,f),f&&d(i),rt(n,f),f&&d(o),Ao(l,f),f&&d(s)}}}function ca(t){let e,i,n;return i=new No({props:{$$slots:{default:[la]},$$scope:{ctx:t}}}),{c(){e=p("div"),ot(i.$$.fragment)},l(o){e=v(o,"DIV",{});var s=_(e);ct(i.$$.fragment,s),s.forEach(d)},m(o,s){F(o,e,s),it(i,e,null),n=!0},p(o,[s]){const a={};s&64&&(a.$$scope={dirty:s,ctx:o}),i.$set(a)},i(o){n||(Te(i.$$.fragment,o),n=!0)},o(o){Ae(i.$$.fragment,o),n=!1},d(o){o&&d(e),rt(i)}}}function fa(t){return[[{title:"test 1",component:Jo},{title:"test 2",component:ni},{title:"test 3",component:fi},{title:"test 4",component:pi},{title:"test 5",component:gi},{title:"test 6",component:Ii},{title:"test 7",component:qi},{title:"test 8",component:lr},{title:"test 9",component:wr},{title:"test 10",component:Or},{title:"test 11",component:na}]]}class ua extends Fe{constructor(e){super(),ye(this,e,fa,ca,De,{})}}function da(t){let e,i;return e=new ua({}),{c(){ot(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,o){it(e,n,o),i=!0},p:le,i(n){i||(Te(e.$$.fragment,n),i=!0)},o(n){Ae(e.$$.fragment,n),i=!1},d(n){rt(e,n)}}}class _a extends Fe{constructor(e){super(),ye(this,e,null,da,De,{})}}export{_a as default};
