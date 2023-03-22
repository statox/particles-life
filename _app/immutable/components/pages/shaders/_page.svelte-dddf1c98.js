import{S as Fe,i as ye,s as De,C as cn,k as p,l as v,m as _,h as d,n as h,b as D,K as H,E as un,F as fn,G as dn,f as ve,t as be,H as Vt,R as Uo,o as Xe,j as Lo,Q as Po,T as Vn,U as xo,A as Bo,V as $o,g as mn,d as hn,q as U,a as g,r as L,c as E,D as f,B as se,p as Ve,O as z,u as Ye,P as O,M as qt,w as it,x as ct,y as rt,z as at,e as ln,L as Ao,v as qn}from"../../../chunks/index-ff9e742a.js";import{w as Ht}from"../../../chunks/index-84a8d4d9.js";let Io=1;function bo(){return`svelte-tabs-${Io++}`}function So(t){let e,i,n,o;const s=t[4].default,a=cn(s,t,t[3],null);return{c(){e=p("div"),a&&a.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=_(e);a&&a.l(l),l.forEach(d),this.h()},h(){h(e,"class","svelte-tabs")},m(r,l){D(r,e,l),a&&a.m(e,null),i=!0,n||(o=H(e,"keydown",t[1]),n=!0)},p(r,[l]){a&&a.p&&(!i||l&8)&&un(a,s,r,r[3],i?dn(s,r[3],l,null):fn(r[3]),null)},i(r){i||(ve(a,r),i=!0)},o(r){be(a,r),i=!1},d(r){r&&d(e),a&&a.d(r),n=!1,o()}}}const Yn={};function Co(t,e,i){const n=t.indexOf(e);t.splice(n,1),i.update(o=>o===e?t[n]||t[t.length-1]:o)}function Mo(t,e,i){let n,{$$slots:o={},$$scope:s}=e,{initialSelectedIndex:a=0}=e;const r=[],l=[],c=[],u=Ht({}),m=Ht({}),x=Ht(null);Vt(t,x,b=>i(5,n=b));const A=Ht(null);function T(b,$,X){b.push($),X.update(M=>M||$),Po(()=>Co(b,$,X))}function F(b){const $=l.indexOf(b);x.set(b),A.set(c[$])}Uo(Yn,{registerTab(b){T(l,b,x)},registerTabElement(b){r.push(b)},registerPanel(b){T(c,b,A)},selectTab:F,selectedTab:x,selectedPanel:A,controls:u,labeledBy:m}),Xe(()=>{F(l[a])}),Lo(()=>{for(let b=0;b<l.length;b++)u.update($=>({...$,[l[b].id]:c[b].id})),m.update($=>({...$,[c[b].id]:l[b].id}))});async function B(b){if(b.target.classList.contains("svelte-tabs__tab")){let $=l.indexOf(n);switch(b.key){case"ArrowRight":$+=1,$>l.length-1&&($=0),F(l[$]),r[$].focus();break;case"ArrowLeft":$-=1,$<0&&($=l.length-1),F(l[$]),r[$].focus()}}}return t.$$set=b=>{"initialSelectedIndex"in b&&i(2,a=b.initialSelectedIndex),"$$scope"in b&&i(3,s=b.$$scope)},[x,B,a,s,o]}class No extends Fe{constructor(e){super(),ye(this,e,Mo,So,De,{initialSelectedIndex:2})}}function zo(t){let e,i,n,o,s,a;const r=t[9].default,l=cn(r,t,t[8],null);return{c(){e=p("li"),l&&l.c(),this.h()},l(c){e=v(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=_(e);l&&l.l(u),u.forEach(d),this.h()},h(){h(e,"role","tab"),h(e,"id",t[3].id),h(e,"aria-controls",i=t[2][t[3].id]),h(e,"aria-selected",t[1]),h(e,"tabindex",n=t[1]?0:-1),h(e,"class","svelte-tabs__tab svelte-1fbofsd"),Vn(e,"svelte-tabs__selected",t[1])},m(c,u){D(c,e,u),l&&l.m(e,null),t[10](e),o=!0,s||(a=H(e,"click",t[11]),s=!0)},p(c,[u]){l&&l.p&&(!o||u&256)&&un(l,r,c,c[8],o?dn(r,c[8],u,null):fn(c[8]),null),(!o||u&4&&i!==(i=c[2][c[3].id]))&&h(e,"aria-controls",i),(!o||u&2)&&h(e,"aria-selected",c[1]),(!o||u&2&&n!==(n=c[1]?0:-1))&&h(e,"tabindex",n),(!o||u&2)&&Vn(e,"svelte-tabs__selected",c[1])},i(c){o||(ve(l,c),o=!0)},o(c){be(l,c),o=!1},d(c){c&&d(e),l&&l.d(c),t[10](null),s=!1,a()}}}function Oo(t,e,i){let n,o,{$$slots:s={},$$scope:a}=e,r;const l={id:bo()},{registerTab:c,registerTabElement:u,selectTab:m,selectedTab:x,controls:A}=xo(Yn);Vt(t,x,b=>i(7,n=b)),Vt(t,A,b=>i(2,o=b));let T;c(l),Xe(async()=>{await Bo(),u(r)});function F(b){$o[b?"unshift":"push"](()=>{r=b,i(0,r)})}const B=()=>m(l);return t.$$set=b=>{"$$scope"in b&&i(8,a=b.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,T=n===l)},[r,T,o,l,m,x,A,n,a,s,F,B]}class go extends Fe{constructor(e){super(),ye(this,e,Oo,zo,De,{})}}function ko(t){let e,i;const n=t[1].default,o=cn(n,t,t[0],null);return{c(){e=p("ul"),o&&o.c(),this.h()},l(s){e=v(s,"UL",{role:!0,class:!0});var a=_(e);o&&o.l(a),a.forEach(d),this.h()},h(){h(e,"role","tablist"),h(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,a){D(s,e,a),o&&o.m(e,null),i=!0},p(s,[a]){o&&o.p&&(!i||a&1)&&un(o,n,s,s[0],i?dn(n,s[0],a,null):fn(s[0]),null)},i(s){i||(ve(o,s),i=!0)},o(s){be(o,s),i=!1},d(s){s&&d(e),o&&o.d(s)}}}function Xo(t,e,i){let{$$slots:n={},$$scope:o}=e;return t.$$set=s=>{"$$scope"in s&&i(0,o=s.$$scope)},[o,n]}class Wo extends Fe{constructor(e){super(),ye(this,e,Xo,ko,De,{})}}function Hn(t){let e;const i=t[6].default,n=cn(i,t,t[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,s){n&&n.m(o,s),e=!0},p(o,s){n&&n.p&&(!e||s&32)&&un(n,i,o,o[5],e?dn(i,o[5],s,null):fn(o[5]),null)},i(o){e||(ve(n,o),e=!0)},o(o){be(n,o),e=!1},d(o){n&&n.d(o)}}}function Yo(t){let e,i,n,o=t[1]===t[2]&&Hn(t);return{c(){e=p("div"),o&&o.c(),this.h()},l(s){e=v(s,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=_(e);o&&o.l(a),a.forEach(d),this.h()},h(){h(e,"id",t[2].id),h(e,"aria-labelledby",i=t[0][t[2].id]),h(e,"class","svelte-tabs__tab-panel svelte-epfyet"),h(e,"role","tabpanel")},m(s,a){D(s,e,a),o&&o.m(e,null),n=!0},p(s,[a]){s[1]===s[2]?o?(o.p(s,a),a&2&&ve(o,1)):(o=Hn(s),o.c(),ve(o,1),o.m(e,null)):o&&(mn(),be(o,1,1,()=>{o=null}),hn()),(!n||a&1&&i!==(i=s[0][s[2].id]))&&h(e,"aria-labelledby",i)},i(s){n||(ve(o),n=!0)},o(s){be(o),n=!1},d(s){s&&d(e),o&&o.d()}}}function Vo(t,e,i){let n,o,{$$slots:s={},$$scope:a}=e;const r={id:bo()},{registerPanel:l,selectedPanel:c,labeledBy:u}=xo(Yn);return Vt(t,c,m=>i(1,o=m)),Vt(t,u,m=>i(0,n=m)),l(r),t.$$set=m=>{"$$scope"in m&&i(5,a=m.$$scope)},[n,o,r,c,u,a,s]}class Eo extends Fe{constructor(e){super(),ye(this,e,Vo,Yo,De,{})}}const qo=["VERTEX_SHADER","FRAGMENT_SHADER"];function wt(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return pn(e),e}function pn(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Le(t,e,i,n){const o=t.createTexture();if(!o)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o}function Ce(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function ge(t,e,i,n,o){const s=[];for(let r=0;r<e.length;++r){const l=qo[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=Ho(t,e[r],l,o);if(!c)throw"Can not create shader";s.push(c)}const a=Go(t,s,i,n,o);if(!a)throw"Can not create program";return a}function Ho(t,e,i,n){const o=n||console.log,s=t.createShader(i);if(!s)throw"Could not load shader";if(t.shaderSource(s,e),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(s);return o(new Error("*** Error compiling shader '"+s+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(s),null}return s}function Go(t,e,i,n,o){const s=o||console.log,a=t.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(l){t.attachShader(a,l)}),i&&i.forEach(function(l,c){t.bindAttribLocation(a,n?n[c]:c,l)}),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const l=t.getProgramInfoLog(a);return s("Error in program linking:"+l),t.deleteProgram(a),null}return a}function he(t,e){e=e||1;const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}function jo(t){let e,i,n,o,s,a,r,l,c,u,m,x;return{c(){e=p("p"),i=U(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=g(),o=p("p"),s=U(`It is reusing the code from
    `),a=p("a"),r=U(`this site
    `),l=U("."),c=g(),u=p("ul"),m=g(),x=p("canvas"),this.h()},l(A){e=v(A,"P",{});var T=_(e);i=L(T,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),T.forEach(d),n=E(A),o=v(A,"P",{});var F=_(o);s=L(F,`It is reusing the code from
    `),a=v(F,"A",{target:!0,href:!0});var B=_(a);r=L(B,`this site
    `),B.forEach(d),l=L(F,"."),F.forEach(d),c=E(A),u=v(A,"UL",{id:!0}),_(u).forEach(d),m=E(A),x=v(A,"CANVAS",{id:!0}),_(x).forEach(d),this.h()},h(){h(a,"target","none"),h(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(u,"id","result"),h(x,"id","canvas")},m(A,T){D(A,e,T),f(e,i),D(A,n,T),D(A,o,T),f(o,s),f(o,a),f(a,r),f(o,l),D(A,c,T),D(A,u,T),D(A,m,T),D(A,x,T)},p:se,i:se,o:se,d(A){A&&d(e),A&&d(n),A&&d(o),A&&d(c),A&&d(u),A&&d(m),A&&d(x)}}}function Ko(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Qo(t){function e(){const i=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=3;const r=a.getContext("webgl");if(!r)throw"Coulndt get context";const l=ge(r,[i,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),u=r.getUniformLocation(l,"srcTex"),m=r.getUniformLocation(l,"srcDimensions"),x=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const A=3,T=3,F=r.createTexture();r.bindTexture(r.TEXTURE_2D,F),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,A,T,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(u,0),r.uniform2f(m,A,T),r.drawArrays(r.TRIANGLES,0,6);const B=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,B);for(let b=0;b<3*3;++b)Ko(B[b*4])}return Xe(e),[]}class Jo extends Fe{constructor(e){super(),ye(this,e,Qo,jo,De,{})}}const Zo=Float32Array;function wo(t,e,i,n,o,s){const a=new Zo(16);return a[0]=2/(e-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-i),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-s),a[11]=0,a[12]=(t+e)/(t-e),a[13]=(i+n)/(i-n),a[14]=(o+s)/(o-s),a[15]=1,a}function ei(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=U(`This is the simple particles simulation from
    `),n=p("a"),o=U("webglfundamentals"),s=U(" directly copied in a svelte component."),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=L(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=_(n);o=L(u,"webglfundamentals"),u.forEach(d),s=L(c," directly copied in a svelte component."),c.forEach(d),a=E(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),Ve(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){D(l,e,c),f(e,i),f(e,n),f(n,o),f(e,s),D(l,a,c),D(l,r,c)},p:se,i:se,o:se,d(l){l&&d(e),l&&d(a),l&&d(r)}}}function ti(t){function e(){const i=`
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
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const r=a.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=ge(r,[i,n]),m=ge(r,[o,s]);if(!u||!m)throw"Can not create programs";const x={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},A={id:r.getAttribLocation(m,"id"),positionTex:r.getUniformLocation(m,"positionTex"),texDimensions:r.getUniformLocation(m,"texDimensions"),matrix:r.getUniformLocation(m,"matrix")},T=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,T),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const F=300,B=20,b=F*B,$=new Array(b).fill(0).map((R,re)=>re),X=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,X),r.bufferData(r.ARRAY_BUFFER,new Float32Array($),r.STATIC_DRAW),he(r.canvas);const M=(R,re)=>(re===void 0&&(re=R,R=0),Math.random()*(re-R)+R),Y=new Float32Array($.map(R=>[M(a.width),M(a.height),0,0]).flat()),J=new Float32Array($.map(R=>[M(-300,300),M(-300,300),0,0]).flat());function W(R,re,Q,ie){const Ee=R.createTexture();return R.bindTexture(R.TEXTURE_2D,Ee),R.texImage2D(R.TEXTURE_2D,0,R.RGBA,Q,ie,0,R.RGBA,R.FLOAT,re),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MAG_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),Ee}const oe=W(r,J,F,B),Z=W(r,Y,F,B),N=W(r,null,F,B);if(!Z||!N)throw"Can not create position textures";function ee(R,re){const Q=R.createFramebuffer();return R.bindFramebuffer(R.FRAMEBUFFER,Q),R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,re,0),Q}const G=ee(r,Z),w=ee(r,N);let C={fb:G,tex:Z},te={fb:w,tex:N},K=0;function fe(R){if(!r)return;R*=.001;const re=R-K;K=R,he(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,te.fb),r.viewport(0,0,F,B),r.bindBuffer(r.ARRAY_BUFFER,T),r.enableVertexAttribArray(x.position),r.vertexAttribPointer(x.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,C.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,oe),r.useProgram(u),r.uniform1i(x.positionTex,0),r.uniform1i(x.velocityTex,1),r.uniform2f(x.texDimensions,F,B),r.uniform2f(x.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(x.deltaTime,re),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,X),r.enableVertexAttribArray(A.id),r.vertexAttribPointer(A.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,te.tex),r.useProgram(m),r.uniform2f(A.texDimensions,F,F),r.uniform1i(A.positionTex,0),r.uniformMatrix4fv(A.matrix,!1,wo(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,b);{const Q=C;C=te,te=Q}requestAnimationFrame(fe)}requestAnimationFrame(fe)}return Xe(()=>e()),[]}class ni extends Fe{constructor(e){super(),ye(this,e,ti,ei,De,{})}}const Gt=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function oi(t,e,i,n){const o=t*e,s=new Array(o).fill(0).map((l,c)=>c),a=new Float32Array(s.map(l=>[Gt(i),Gt(n),0,0]).flat()),r=new Float32Array(s.map(l=>[Gt(-300,300),Gt(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(s),positions:a,velocities:r}}const ii=`attribute vec4 position;
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

`;function li(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=U(`This is the simple particles simulation from
    `),n=p("a"),o=U("webglfundamentals"),s=U(" with the shader code extracted into separate files."),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=L(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=_(n);o=L(u,"webglfundamentals"),u.forEach(d),s=L(c," with the shader code extracted into separate files."),c.forEach(d),a=E(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),Ve(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){D(l,e,c),f(e,i),f(e,n),f(n,o),f(e,s),D(l,a,c),D(l,r,c)},p:se,i:se,o:se,d(l){l&&d(e),l&&d(a),l&&d(r)}}}function ci(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const s=o.getContext("webgl");if(!s)throw"gl undefined";pn(s);const a=ge(s,[ii,ri]),r=ge(s,[ai,si]),l={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},c={id:s.getAttribLocation(r,"id"),positionTex:s.getUniformLocation(r,"positionTex"),texDimensions:s.getUniformLocation(r,"texDimensions"),matrix:s.getUniformLocation(r,"matrix")},u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const m=300,x=20,{numParticles:A,ids:T,positions:F,velocities:B}=oi(m,x,o.width,o.height),b=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,b),s.bufferData(s.ARRAY_BUFFER,new Float32Array(T),s.STATIC_DRAW),he(s.canvas);const $=Le(s,B,m,x),X=Le(s,F,m,x),M=Le(s,null,m,x),Y=Ce(s,X),J=Ce(s,M);let W={fb:Y,tex:X},oe={fb:J,tex:M},Z=0;function N(ee){if(!s||!u||!b)throw"Undefined params to render";ee*=.001;const G=ee-Z;Z=ee,he(s.canvas),n(s,oe,m,x,u,l,W,$,a,G),i(s,m,b,c,oe,r,A);{const w=W;W=oe,oe=w}requestAnimationFrame(N)}requestAnimationFrame(N)}const i=(o,s,a,r,l,c,u)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,a),o.enableVertexAttribArray(r.id),o.vertexAttribPointer(r.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,l.tex),o.useProgram(c),o.uniform2f(r.texDimensions,s,s),o.uniform1i(r.positionTex,0),o.uniformMatrix4fv(r.matrix,!1,wo(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,u)},n=(o,s,a,r,l,c,u,m,x,A)=>{o.bindFramebuffer(o.FRAMEBUFFER,s.fb),o.viewport(0,0,a,r),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(c.position),o.vertexAttribPointer(c.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,u.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,m),o.useProgram(x),o.uniform1i(c.positionTex,0),o.uniform1i(c.velocityTex,1),o.uniform2f(c.texDimensions,a,r),o.uniform2f(c.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(c.deltaTime,A),o.drawArrays(o.TRIANGLES,0,6)};return Xe(()=>e()),[]}class ui extends Fe{constructor(e){super(),ye(this,e,ci,li,De,{})}}const fi=`attribute vec2 a_position;

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
`;function mi(t){let e,i,n,o,s,a,r,l,c,u,m,x;return{c(){e=p("p"),i=U(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=p("code"),o=U("requestAnimationFrame"),s=U(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),a=g(),r=p("canvas"),l=g(),c=p("button"),u=U("Add position"),this.h()},l(A){e=v(A,"P",{});var T=_(e);i=L(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=v(T,"CODE",{});var F=_(n);o=L(F,"requestAnimationFrame"),F.forEach(d),s=L(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(d),a=E(A),r=v(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=E(A),c=v(A,"BUTTON",{});var B=_(c);u=L(B,"Add position"),B.forEach(d),this.h()},h(){h(r,"id","canvas"),Ve(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(A,T){D(A,e,T),f(e,i),f(e,n),f(n,o),f(e,s),D(A,a,T),D(A,r,T),D(A,l,T),D(A,c,T),f(c,u),m||(x=H(c,"click",t[1]),m=!0)},p:se,i:se,o:se,d(A){A&&d(e),A&&d(a),A&&d(r),A&&d(l),A&&d(c),m=!1,x()}}}function hi(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const s=document.getElementById("canvas");if(!s)throw"canvas undefined";const a=s.getContext("webgl");if(!a)throw"gl undefined";pn(a);const r=ge(a,[fi,di]);he(a.canvas);const l=a.getAttribLocation(r,"a_position"),c=a.getUniformLocation(r,"u_resolution"),u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW);function m(){if(!a)throw"Undefined params to render";for(let X=0;X<=e.length-2;X+=2)e[X]=(e[X]+Math.random()*2-1)%a.canvas.width,e[X+1]=(e[X+1]+Math.random()*0+1)%a.canvas.height;a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW),he(a.canvas),a.viewport(0,0,a.canvas.width,a.canvas.height),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(r),a.uniform2f(c,a.canvas.width,a.canvas.height),a.enableVertexAttribArray(l),a.bindBuffer(a.ARRAY_BUFFER,u);const x=2,A=a.FLOAT,T=!1,F=0,B=0;a.vertexAttribPointer(l,x,A,T,F,B);var b=a.POINTS,$=e.length/2;a.drawArrays(b,B,$),requestAnimationFrame(m)}requestAnimationFrame(m)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Xe(()=>i()),[n,()=>n()]}class pi extends Fe{constructor(e){super(),ye(this,e,hi,mi,De,{})}}const vi=`attribute float id;
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
`;let St,Ct;const Ti=t=>{Ct=ge(t,[vi,_i]),St={idAttributeLocation:t.getAttribLocation(Ct,"id"),texDimensionsUniformLocation:t.getUniformLocation(Ct,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ct,"u_resolution")}},xi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;he(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Ct),e.uniform2f(St.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(St.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(St.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,s);const a=1,r=e.FLOAT,l=!1,c=0,u=0;e.vertexAttribPointer(St.idAttributeLocation,a,r,l,c,u);const m=e.POINTS,x=o.length;e.drawArrays(m,u,x)};function Ai(t){let e,i,n,o,s,a,r;return{c(){e=p("p"),i=U("Create an array of render-size positions. Store this array in a texture. In each "),n=p("code"),o=U("requestAnimationFrame"),s=U(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),a=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=_(e);i=L(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=v(c,"CODE",{});var u=_(n);o=L(u,"requestAnimationFrame"),u.forEach(d),s=L(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(d),a=E(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),this.h()},h(){h(r,"id","canvas"),Ve(r,"background-color","black"),h(r,"width",Ro),h(r,"height",Fo)},m(l,c){D(l,e,c),f(e,i),f(e,n),f(n,o),f(e,s),D(l,a,c),D(l,r,c)},p:se,i:se,o:se,d(l){l&&d(e),l&&d(a),l&&d(r)}}}const Ro=800,Fo=600;function bi(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";pn(n),he(n.canvas),Ti(n);const o=[0,1,2,3,4,5,6,7,8,9],s=o.map(r=>[Math.random()*Ro,Math.random()*Fo,0,0]).flat();function a(){if(!n)throw"Undefined params to render";for(let l=0;l<=s.length-2;l+=2)s[l]=(s[l]+Math.random()*2-1)%n.canvas.width,s[l+1]=(s[l+1]+Math.random()*0+1)%n.canvas.height;const r=Le(n,new Float32Array(s),3,3);xi({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(a)}requestAnimationFrame(a)}return Xe(()=>e()),[]}let gi=class extends Fe{constructor(e){super(),ye(this,e,bi,Ai,De,{})}};const Ei=`attribute float id;
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
`;let Mt,Nt,En;const Ri=(t,e)=>{Nt=ge(t,[Ei,wi]),Mt={idAttributeLocation:t.getAttribLocation(Nt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Nt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Nt,"u_resolution")},En=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,En),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Fi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,En),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Nt),e.uniform2f(Mt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Mt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Mt.idAttributeLocation);const s=1,a=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(Mt.idAttributeLocation,s,a,r,l,c),e.drawArrays(e.POINTS,c,o.length)};function yi(t,e){const i=new Array(t).fill(0).map((s,a)=>a),n=i.map(s=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),o={width:i.length,height:1};return{ids:i,positions:n,texDimensions:o}}const Di=`attribute vec4 position;
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

`;let xt,At,wn,vn,_n,Gn,jn,zt,tn;const Li=(t,e)=>{const{positions:i,texDimensions:n}=e;At=ge(t,[Di,Ui]),xt={positionAttributeLocation:t.getAttribLocation(At,"position"),positionTexLocation:t.getUniformLocation(At,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(At,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(At,"u_resolution")},wn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,wn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),vn=Le(t,new Float32Array(i),n.width,n.height),_n=Le(t,null,n.width,n.height),Gn=Ce(t,vn),jn=Ce(t,_n),zt={fb:Gn,tex:vn},tn={fb:jn,tex:_n}},Pi=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,tn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,wn),e.enableVertexAttribArray(xt.positionAttributeLocation),e.vertexAttribPointer(xt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,zt.tex),e.useProgram(At),e.uniform1i(xt.positionTexLocation,0),e.uniform2f(xt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(xt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=zt;zt=tn,tn=n}return zt.tex};function Bi(t){let e,i,n,o,s,a,r,l,c,u,m,x,A;return{c(){e=p("p"),i=U("Create an array of render-size positions. Store this array in a texture."),n=g(),o=p("p"),s=U("Create 2 textures which will be used to update the positions with a shader. In each "),a=p("code"),r=U("requestAnimationFrame"),l=U(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=g(),u=p("p"),m=U("Finally switch the two textures to read and write in the updated textures"),x=g(),A=p("canvas"),this.h()},l(T){e=v(T,"P",{});var F=_(e);i=L(F,"Create an array of render-size positions. Store this array in a texture."),F.forEach(d),n=E(T),o=v(T,"P",{});var B=_(o);s=L(B,"Create 2 textures which will be used to update the positions with a shader. In each "),a=v(B,"CODE",{});var b=_(a);r=L(b,"requestAnimationFrame"),b.forEach(d),l=L(B,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),B.forEach(d),c=E(T),u=v(T,"P",{});var $=_(u);m=L($,"Finally switch the two textures to read and write in the updated textures"),$.forEach(d),x=E(T),A=v(T,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(A).forEach(d),this.h()},h(){h(A,"id","canvas"),Ve(A,"background-color","black"),h(A,"width",yo),h(A,"height",Do)},m(T,F){D(T,e,F),f(e,i),D(T,n,F),D(T,o,F),f(o,s),f(o,a),f(a,r),f(o,l),D(T,c,F),D(T,u,F),f(u,m),D(T,x,F),D(T,A,F)},p:se,i:se,o:se,d(T){T&&d(e),T&&d(n),T&&d(o),T&&d(c),T&&d(u),T&&d(x),T&&d(A)}}}const yo=800,Do=600;function $i(t){function e(){const i=wt();he(i.canvas);const{ids:n,positions:o,texDimensions:s}=yi(100,{width:yo,height:Do});Ri(i,n),Li(i,{positions:o,texDimensions:s});function a(){he(i.canvas);const r=Pi({gl:i,texDimensions:s});Fi({gl:i,positionTex:r,textureDimension:s,ids:n}),requestAnimationFrame(a)}requestAnimationFrame(a)}return Xe(()=>e()),[]}let Ii=class extends Fe{constructor(e){super(),ye(this,e,$i,Bi,De,{})}};const Si=`attribute float id;
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
`;let ut,bt,Rn,Fn;const Mi=(t,e)=>{const{ids:i,colors:n}=e;bt=ge(t,[Si,Ci]),ut={idAttributeLocation:t.getAttribLocation(bt,"id"),colorAttributeLocation:t.getAttribLocation(bt,"color"),texDimensionsUniformLocation:t.getUniformLocation(bt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(bt,"u_resolution")},Rn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Rn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Fn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Fn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Ni=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Rn),e.vertexAttribPointer(ut.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(ut.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Fn),e.vertexAttribPointer(ut.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(ut.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(bt),e.uniform2f(ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ut.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function zi(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((a,r)=>r),o=new Array(i).fill(0).map(a=>Math.floor(Math.random()*4)),s=n.map(a=>{{const{x:l,y:c}=Oi(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:s,texDimensions:t,colors:o}}const Oi=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},ki=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Xi=`precision highp float;

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

`;let ft,dt,yn,jt,Tn,Kn,Qn,Ot,nn,Kt;const Wi=(t,e)=>{const{positions:i,texDimensions:n}=e;return dt=ge(t,[ki,Xi]),ft={positionAttributeLocation:t.getAttribLocation(dt,"position"),positionTexLocation:t.getUniformLocation(dt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(dt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},yn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,yn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),jt=Le(t,new Float32Array(i),n.width,n.height),Tn=Le(t,null,n.width,n.height),Kn=Ce(t,jt),Qn=Ce(t,Tn),Ot={fb:Kn,tex:jt},nn={fb:Qn,tex:Tn},jt},Yi=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();Kt||(Kt=n-1);const o=n-Kt;Kt=n,e.bindFramebuffer(e.FRAMEBUFFER,nn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,yn),e.enableVertexAttribArray(ft.positionAttributeLocation),e.vertexAttribPointer(ft.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ot.tex),e.useProgram(dt),e.uniform1i(ft.positionTexLocation,0),e.uniform1f(ft.deltaTimeUniformLocation,o),e.uniform2f(ft.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ft.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Ot;Ot=nn,nn=s}return Ot.tex};function Vi(t){let e,i,n,o,s,a,r,l,c,u,m=t[2]?"Play":"Pause",x,A,T,F=t[1]?"Normal Speed":"Slow Mo",B,b,$,X,M=t[4].width*t[4].height+"",Y,J,W,oe,Z,N,ee,G;return{c(){e=p("p"),i=U("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),s=U(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),x=U(m),A=g(),T=p("button"),B=U(F),b=g(),$=p("span"),X=U("particles: "),Y=U(M),J=g(),W=p("label"),oe=U("Smooth steps"),Z=g(),N=p("input"),this.h()},l(w){e=v(w,"P",{});var C=_(e);i=L(C,"Same principle with a shader to update positions and a shader to draw particles."),C.forEach(d),n=E(w),o=v(w,"P",{});var te=_(o);s=L(te,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),te.forEach(d),a=E(w),r=v(w,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=E(w),c=v(w,"DIV",{});var K=_(c);u=v(K,"BUTTON",{});var fe=_(u);x=L(fe,m),fe.forEach(d),A=E(K),T=v(K,"BUTTON",{});var R=_(T);B=L(R,F),R.forEach(d),b=E(K),$=v(K,"SPAN",{});var re=_($);X=L(re,"particles: "),Y=L(re,M),re.forEach(d),J=E(K),W=v(K,"LABEL",{for:!0});var Q=_(W);oe=L(Q,"Smooth steps"),Q.forEach(d),Z=E(K),N=v(K,"INPUT",{type:!0,min:!0}),K.forEach(d),this.h()},h(){h(r,"id","canvas"),Ve(r,"background-color","black"),h(r,"width",t[3].width),h(r,"height",t[3].height),h(W,"for","steps"),h(N,"type","number"),h(N,"min",0)},m(w,C){D(w,e,C),f(e,i),D(w,n,C),D(w,o,C),f(o,s),D(w,a,C),D(w,r,C),D(w,l,C),D(w,c,C),f(c,u),f(u,x),f(c,A),f(c,T),f(T,B),f(c,b),f(c,$),f($,X),f($,Y),f(c,J),f(c,W),f(W,oe),f(c,Z),f(c,N),z(N,t[0]),ee||(G=[H(u,"click",t[5]),H(T,"click",t[6]),H(N,"input",t[7])],ee=!0)},p(w,[C]){C&4&&m!==(m=w[2]?"Play":"Pause")&&Ye(x,m),C&2&&F!==(F=w[1]?"Normal Speed":"Slow Mo")&&Ye(B,F),C&1&&O(N.value)!==w[0]&&z(N,w[0])},i:se,o:se,d(w){w&&d(e),w&&d(n),w&&d(o),w&&d(a),w&&d(r),w&&d(l),w&&d(c),ee=!1,qt(G)}}}function qi(t,e,i){const n={width:800,height:600},o={width:100,height:100};let s=1,a=!1,r=!0;function l(){const x=wt();he(x.canvas);const{ids:A,positions:T,colors:F}=zi(o,{width:n.width,height:n.height});Mi(x,{ids:A,colors:F,texDimensions:o});let B=Wi(x,{positions:T,texDimensions:o});function b(){if(he(x.canvas),!r)for(let $=0;$<s;$++)B=Yi({gl:x,texDimensions:o});return Ni({gl:x,positionTex:B,textureDimension:o,ids:A}),r?requestAnimationFrame(b):a?setTimeout(()=>requestAnimationFrame(b),1e3):requestAnimationFrame(b)}requestAnimationFrame(b)}Xe(()=>l());const c=()=>i(2,r=!r),u=()=>i(1,a=!a);function m(){s=O(this.value),i(0,s)}return[s,a,r,n,o,c,u,m]}class Hi extends Fe{constructor(e){super(),ye(this,e,qi,Vi,De,{})}}const Gi=`attribute float id;
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
`;let mt,gt,Dn,Un;const Ki=(t,e)=>{const{ids:i,colors:n}=e;gt=ge(t,[Gi,ji]),mt={idAttributeLocation:t.getAttribLocation(gt,"id"),colorAttributeLocation:t.getAttribLocation(gt,"color"),texDimensionsUniformLocation:t.getUniformLocation(gt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(gt,"u_resolution")},Dn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Dn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Un=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Un),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Qi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Dn),e.vertexAttribPointer(mt.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(mt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Un),e.vertexAttribPointer(mt.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(mt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(gt),e.uniform2f(mt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(mt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function Ji(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="disk"){const{x:u,y:m}=er(i,20);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Zi(i,550);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=tr(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Jn(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Jn(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Zi=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},er=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},tr=(t,e,i)=>{const n=Ln(e,0,i,0,t.width,!1),o=Ln(e,0,i,0,t.height,!1);return{x:n,y:o}},Jn=(t,e,i,n)=>{const o=Ln(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Ln=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?Zn(a,n,o):Zn(a,o,n):a},Zn=function(t,e,i){return Math.max(Math.min(t,i),e)},nr=`attribute vec4 position;
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

`;let Ke,Qe,Pn,Qt,xn,eo,to,kt,on;const ir=(t,e)=>{const{positions:i,texDimensions:n}=e;return Qe=ge(t,[nr,or]),Ke={positionAttributeLocation:t.getAttribLocation(Qe,"position"),positionTexLocation:t.getUniformLocation(Qe,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Qe,"interactionRange"),dragUniformLocation:t.getUniformLocation(Qe,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Qe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Qe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Qe,"u_resolution")},Pn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Pn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Qt=Le(t,new Float32Array(i),n.width,n.height),xn=Le(t,null,n.width,n.height),eo=Ce(t,Qt),to=Ce(t,xn),kt={fb:eo,tex:Qt},on={fb:to,tex:xn},Qt},rr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,on.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Pn),e.enableVertexAttribArray(Ke.positionAttributeLocation),e.vertexAttribPointer(Ke.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,kt.tex),e.useProgram(Qe),e.uniform1i(Ke.positionTexLocation,0),e.uniform1f(Ke.dragUniformLocation,o),e.uniform1f(Ke.interactionRangeUniformLocation,n),e.uniform1f(Ke.deltaTimeUniformLocation,s),e.uniform2f(Ke.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ke.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=kt;kt=on,on=a}return kt.tex};function ar(t){let e,i,n,o,s,a,r,l,c,u,m=t[2]?"Play":"Pause",x,A,T,F=t[1]?"Normal Speed":"Slow Mo",B,b,$,X,M=t[5].width*t[5].height+"",Y,J,W,oe,Z,N,ee,G,w,C,te,K,fe,R,re,Q,ie,Ee,_e,V,Pe,ue,ae,Be,Te,q,$e,pe,ce,Ie;return{c(){e=p("p"),i=U("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),s=U(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),x=U(m),A=g(),T=p("button"),B=U(F),b=g(),$=p("span"),X=U("particles: "),Y=U(M),J=g(),W=p("label"),oe=U("Smooth steps"),Z=g(),N=p("input"),ee=g(),G=p("div"),w=p("ul"),C=p("li"),te=p("label"),K=U("Interaction Range"),fe=g(),R=p("input"),re=g(),Q=p("li"),ie=p("label"),Ee=U("Drag"),_e=g(),V=p("input"),Pe=g(),ue=p("li"),ae=p("label"),Be=U("Time step"),Te=g(),q=p("input"),$e=g(),pe=p("ul"),this.h()},l(S){e=v(S,"P",{});var k=_(e);i=L(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(d),n=E(S),o=v(S,"P",{});var Me=_(o);s=L(Me,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Me.forEach(d),a=E(S),r=v(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(r).forEach(d),l=E(S),c=v(S,"DIV",{});var y=_(c);u=v(y,"BUTTON",{});var j=_(u);x=L(j,m),j.forEach(d),A=E(y),T=v(y,"BUTTON",{});var Ne=_(T);B=L(Ne,F),Ne.forEach(d),b=E(y),$=v(y,"SPAN",{});var Se=_($);X=L(Se,"particles: "),Y=L(Se,M),Se.forEach(d),J=E(y),W=v(y,"LABEL",{for:!0});var ne=_(W);oe=L(ne,"Smooth steps"),ne.forEach(d),Z=E(y),N=v(y,"INPUT",{type:!0,min:!0}),y.forEach(d),ee=E(S),G=v(S,"DIV",{});var ze=_(G);w=v(ze,"UL",{});var de=_(w);C=v(de,"LI",{});var Ue=_(C);te=v(Ue,"LABEL",{for:!0});var Oe=_(te);K=L(Oe,"Interaction Range"),Oe.forEach(d),fe=E(Ue),R=v(Ue,"INPUT",{id:!0,type:!0,min:!0}),Ue.forEach(d),re=E(de),Q=v(de,"LI",{});var le=_(Q);ie=v(le,"LABEL",{for:!0});var xe=_(ie);Ee=L(xe,"Drag"),xe.forEach(d),_e=E(le),V=v(le,"INPUT",{id:!0,type:!0,min:!0}),le.forEach(d),Pe=E(de),ue=v(de,"LI",{});var Ae=_(ue);ae=v(Ae,"LABEL",{for:!0});var ke=_(ae);Be=L(ke,"Time step"),ke.forEach(d),Te=E(Ae),q=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),$e=E(de),pe=v(de,"UL",{}),_(pe).forEach(d),de.forEach(d),ze.forEach(d),this.h()},h(){h(r,"id","canvas"),Ve(r,"background-color","black"),h(r,"width",t[4].width),h(r,"height",t[4].height),h(W,"for","steps"),h(N,"type","number"),h(N,"min",0),h(te,"for","interactionRange"),h(R,"id","interactionRange"),h(R,"type","number"),h(R,"min",0),h(ie,"for","drag"),h(V,"id","drag"),h(V,"type","number"),h(V,"min",0),h(ae,"for","deltaTime"),h(q,"id","deltaTime"),h(q,"type","number"),h(q,"min",0)},m(S,k){D(S,e,k),f(e,i),D(S,n,k),D(S,o,k),f(o,s),D(S,a,k),D(S,r,k),D(S,l,k),D(S,c,k),f(c,u),f(u,x),f(c,A),f(c,T),f(T,B),f(c,b),f(c,$),f($,X),f($,Y),f(c,J),f(c,W),f(W,oe),f(c,Z),f(c,N),z(N,t[0]),D(S,ee,k),D(S,G,k),f(G,w),f(w,C),f(C,te),f(te,K),f(C,fe),f(C,R),z(R,t[3].interactionRange),f(w,re),f(w,Q),f(Q,ie),f(ie,Ee),f(Q,_e),f(Q,V),z(V,t[3].drag),f(w,Pe),f(w,ue),f(ue,ae),f(ae,Be),f(ue,Te),f(ue,q),z(q,t[3].timeStep),f(w,$e),f(w,pe),ce||(Ie=[H(u,"click",t[6]),H(T,"click",t[7]),H(N,"input",t[8]),H(R,"input",t[9]),H(V,"input",t[10]),H(q,"input",t[11])],ce=!0)},p(S,[k]){k&4&&m!==(m=S[2]?"Play":"Pause")&&Ye(x,m),k&2&&F!==(F=S[1]?"Normal Speed":"Slow Mo")&&Ye(B,F),k&1&&O(N.value)!==S[0]&&z(N,S[0]),k&8&&O(R.value)!==S[3].interactionRange&&z(R,S[3].interactionRange),k&8&&O(V.value)!==S[3].drag&&z(V,S[3].drag),k&8&&O(q.value)!==S[3].timeStep&&z(q,S[3].timeStep)},i:se,o:se,d(S){S&&d(e),S&&d(n),S&&d(o),S&&d(a),S&&d(r),S&&d(l),S&&d(c),S&&d(ee),S&&d(G),ce=!1,qt(Ie)}}}function sr(t,e,i){const n={width:800,height:600},o={width:10,height:10};let s=1,a=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const B=wt();he(B.canvas);const{ids:b,positions:$,colors:X}=Ji({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"circle"});Ki(B,{ids:b,colors:X,texDimensions:o});let M=ir(B,{positions:$,texDimensions:o});function Y(){if(he(B.canvas),!r)for(let J=0;J<s;J++)M=rr({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Qi({gl:B,positionTex:M,textureDimension:o,ids:b}),r?requestAnimationFrame(Y):a?setTimeout(()=>requestAnimationFrame(Y),1e3):requestAnimationFrame(Y)}requestAnimationFrame(Y)}Xe(()=>c());const u=()=>i(2,r=!r),m=()=>i(1,a=!a);function x(){s=O(this.value),i(0,s)}function A(){l.interactionRange=O(this.value),i(3,l)}function T(){l.drag=O(this.value),i(3,l)}function F(){l.timeStep=O(this.value),i(3,l)}return[s,a,r,l,n,o,u,m,x,A,T,F]}class lr extends Fe{constructor(e){super(),ye(this,e,sr,ar,De,{})}}const cr=`attribute float id;
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
`,ur=`precision mediump float;
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
`;let ht,Et,Bn,$n;const fr=(t,e)=>{const{ids:i,colors:n}=e;Et=ge(t,[cr,ur]),ht={idAttributeLocation:t.getAttribLocation(Et,"id"),colorAttributeLocation:t.getAttribLocation(Et,"color"),texDimensionsUniformLocation:t.getUniformLocation(Et,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Et,"u_resolution")},Bn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Bn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),$n=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,$n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},dr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,s=1,a=e.FLOAT,r=!1,l=0,c=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Bn),e.vertexAttribPointer(ht.idAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(ht.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,$n),e.vertexAttribPointer(ht.colorAttributeLocation,s,a,r,l,c),e.enableVertexAttribArray(ht.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Et),e.uniform2f(ht.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ht.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function mr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:u}=hr(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=vr(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=pr(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=_r(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=no(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=no(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const hr=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},pr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},vr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},_r=(t,e,i)=>{const n=In(e,0,i,0,t.width,!1),o=In(e,0,i,0,t.height,!1);return{x:n,y:o}},no=(t,e,i,n)=>{const o=In(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},In=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?oo(a,n,o):oo(a,o,n):a},oo=function(t,e,i){return Math.max(Math.min(t,i),e)},Tr=`attribute vec4 position;
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

`;let Je,Ze,Sn,Jt,An,io,ro,Xt,rn;const Ar=(t,e)=>{const{positions:i,texDimensions:n}=e,o=xr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return Ze=ge(t,[Tr,o]),Je={positionAttributeLocation:t.getAttribLocation(Ze,"position"),positionTexLocation:t.getUniformLocation(Ze,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ze,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ze,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ze,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ze,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ze,"u_resolution")},Sn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Sn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Jt=Le(t,new Float32Array(i),n.width,n.height),An=Le(t,null,n.width,n.height),io=Ce(t,Jt),ro=Ce(t,An),Xt={fb:io,tex:Jt},rn={fb:ro,tex:An},Jt},br=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,rn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Sn),e.enableVertexAttribArray(Je.positionAttributeLocation),e.vertexAttribPointer(Je.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Xt.tex),e.useProgram(Ze),e.uniform1i(Je.positionTexLocation,0),e.uniform1f(Je.dragUniformLocation,o),e.uniform1f(Je.interactionRangeUniformLocation,n),e.uniform1f(Je.deltaTimeUniformLocation,s),e.uniform2f(Je.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Je.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=Xt;Xt=rn,rn=a}return Xt.tex};function gr(t){let e,i,n,o,s,a,r,l,c,u,m,x,A,T=t[2]?"Play":"Pause",F,B,b,$=t[1]?"Normal Speed":"Slow Mo",X,M,Y,J,W=t[5].width*t[5].height+"",oe,Z,N,ee,G,w,C,te,K,fe,R,re,Q,ie,Ee,_e,V,Pe,ue,ae,Be,Te,q,$e,pe,ce,Ie,S,k,Me;return{c(){e=p("p"),i=U("This could be a kind of water simulation."),n=g(),o=p("p"),s=U(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),a=g(),r=p("p"),l=U("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=g(),u=p("canvas"),m=g(),x=p("div"),A=p("button"),F=U(T),B=g(),b=p("button"),X=U($),M=g(),Y=p("span"),J=U("particles: "),oe=U(W),Z=g(),N=p("label"),ee=U("Smooth steps"),G=g(),w=p("input"),C=g(),te=p("div"),K=p("ul"),fe=p("li"),R=p("label"),re=U("Interaction Range"),Q=g(),ie=p("input"),Ee=g(),_e=p("li"),V=p("label"),Pe=U("Drag"),ue=g(),ae=p("input"),Be=g(),Te=p("li"),q=p("label"),$e=U("Time step"),pe=g(),ce=p("input"),Ie=g(),S=p("ul"),this.h()},l(y){e=v(y,"P",{});var j=_(e);i=L(j,"This could be a kind of water simulation."),j.forEach(d),n=E(y),o=v(y,"P",{});var Ne=_(o);s=L(Ne,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Ne.forEach(d),a=E(y),r=v(y,"P",{});var Se=_(r);l=L(Se,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Se.forEach(d),c=E(y),u=v(y,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(u).forEach(d),m=E(y),x=v(y,"DIV",{});var ne=_(x);A=v(ne,"BUTTON",{});var ze=_(A);F=L(ze,T),ze.forEach(d),B=E(ne),b=v(ne,"BUTTON",{});var de=_(b);X=L(de,$),de.forEach(d),M=E(ne),Y=v(ne,"SPAN",{});var Ue=_(Y);J=L(Ue,"particles: "),oe=L(Ue,W),Ue.forEach(d),Z=E(ne),N=v(ne,"LABEL",{for:!0});var Oe=_(N);ee=L(Oe,"Smooth steps"),Oe.forEach(d),G=E(ne),w=v(ne,"INPUT",{type:!0,min:!0}),ne.forEach(d),C=E(y),te=v(y,"DIV",{});var le=_(te);K=v(le,"UL",{});var xe=_(K);fe=v(xe,"LI",{});var Ae=_(fe);R=v(Ae,"LABEL",{for:!0});var ke=_(R);re=L(ke,"Interaction Range"),ke.forEach(d),Q=E(Ae),ie=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),Ee=E(xe),_e=v(xe,"LI",{});var We=_(_e);V=v(We,"LABEL",{for:!0});var P=_(V);Pe=L(P,"Drag"),P.forEach(d),ue=E(We),ae=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),Be=E(xe),Te=v(xe,"LI",{});var I=_(Te);q=v(I,"LABEL",{for:!0});var we=_(q);$e=L(we,"Time step"),we.forEach(d),pe=E(I),ce=v(I,"INPUT",{id:!0,type:!0,min:!0}),I.forEach(d),Ie=E(xe),S=v(xe,"UL",{}),_(S).forEach(d),xe.forEach(d),le.forEach(d),this.h()},h(){h(u,"id","canvas"),Ve(u,"background-color","black"),h(u,"width",t[4].width),h(u,"height",t[4].height),h(N,"for","steps"),h(w,"type","number"),h(w,"min",0),h(R,"for","interactionRange"),h(ie,"id","interactionRange"),h(ie,"type","number"),h(ie,"min",0),h(V,"for","drag"),h(ae,"id","drag"),h(ae,"type","number"),h(ae,"min",0),h(q,"for","deltaTime"),h(ce,"id","deltaTime"),h(ce,"type","number"),h(ce,"min",0)},m(y,j){D(y,e,j),f(e,i),D(y,n,j),D(y,o,j),f(o,s),D(y,a,j),D(y,r,j),f(r,l),D(y,c,j),D(y,u,j),D(y,m,j),D(y,x,j),f(x,A),f(A,F),f(x,B),f(x,b),f(b,X),f(x,M),f(x,Y),f(Y,J),f(Y,oe),f(x,Z),f(x,N),f(N,ee),f(x,G),f(x,w),z(w,t[0]),D(y,C,j),D(y,te,j),f(te,K),f(K,fe),f(fe,R),f(R,re),f(fe,Q),f(fe,ie),z(ie,t[3].interactionRange),f(K,Ee),f(K,_e),f(_e,V),f(V,Pe),f(_e,ue),f(_e,ae),z(ae,t[3].drag),f(K,Be),f(K,Te),f(Te,q),f(q,$e),f(Te,pe),f(Te,ce),z(ce,t[3].timeStep),f(K,Ie),f(K,S),k||(Me=[H(A,"click",t[6]),H(b,"click",t[7]),H(w,"input",t[8]),H(ie,"input",t[9]),H(ae,"input",t[10]),H(ce,"input",t[11])],k=!0)},p(y,[j]){j&4&&T!==(T=y[2]?"Play":"Pause")&&Ye(F,T),j&2&&$!==($=y[1]?"Normal Speed":"Slow Mo")&&Ye(X,$),j&1&&O(w.value)!==y[0]&&z(w,y[0]),j&8&&O(ie.value)!==y[3].interactionRange&&z(ie,y[3].interactionRange),j&8&&O(ae.value)!==y[3].drag&&z(ae,y[3].drag),j&8&&O(ce.value)!==y[3].timeStep&&z(ce,y[3].timeStep)},i:se,o:se,d(y){y&&d(e),y&&d(n),y&&d(o),y&&d(a),y&&d(r),y&&d(c),y&&d(u),y&&d(m),y&&d(x),y&&d(C),y&&d(te),k=!1,qt(Me)}}}function Er(t,e,i){const n={width:800,height:600},o={width:500,height:20};let s=1,a=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const B=wt();he(B.canvas);const{ids:b,positions:$,colors:X}=mr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"disk"});fr(B,{ids:b,colors:X,texDimensions:o});let M=Ar(B,{positions:$,texDimensions:o});function Y(){if(he(B.canvas),!r)for(let J=0;J<s;J++)M=br({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return dr({gl:B,positionTex:M,textureDimension:o,ids:b}),r?requestAnimationFrame(Y):a?setTimeout(()=>requestAnimationFrame(Y),1e3):requestAnimationFrame(Y)}requestAnimationFrame(Y)}Xe(()=>c());const u=()=>i(2,r=!r),m=()=>i(1,a=!a);function x(){s=O(this.value),i(0,s)}function A(){l.interactionRange=O(this.value),i(3,l)}function T(){l.drag=O(this.value),i(3,l)}function F(){l.timeStep=O(this.value),i(3,l)}return[s,a,r,l,n,o,u,m,x,A,T,F]}class wr extends Fe{constructor(e){super(),ye(this,e,Er,gr,De,{})}}const Rr=`attribute float id;
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
`;let st,pt,Cn,Mn;const yr=(t,e)=>{const{ids:i,colors:n}=e;pt=ge(t,[Rr,Fr]),st={idAttributeLocation:t.getAttribLocation(pt,"id"),colorAttributeLocation:t.getAttribLocation(pt,"color"),sizeUniformLocation:t.getUniformLocation(pt,"size"),texDimensionsUniformLocation:t.getUniformLocation(pt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(pt,"worldDimensions")},Cn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Cn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Mn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Mn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Dr=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:s,ids:a}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Cn),e.vertexAttribPointer(st.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(st.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Mn),e.vertexAttribPointer(st.colorAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(st.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(pt),e.uniform1f(st.sizeUniformLocation,s),e.uniform2f(st.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(st.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,m,a.length)};function Ur(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:u}=Lr(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=Br(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Pr(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=$r(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=ao(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=ao(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Lr=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Pr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Br=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},$r=(t,e,i)=>{const n=Nn(e,0,i,0,t.width,!1),o=Nn(e,0,i,0,t.height,!1);return{x:n,y:o}},ao=(t,e,i,n)=>{const o=Nn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Nn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?so(a,n,o):so(a,o,n):a},so=function(t,e,i){return Math.max(Math.min(t,i),e)},Ir=`attribute vec4 position;
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

`;let et,tt,zn,Zt,bn,lo,co,Wt,an;const Cr=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Sr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return tt=ge(t,[Ir,o]),et={positionAttributeLocation:t.getAttribLocation(tt,"position"),positionTexLocation:t.getUniformLocation(tt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(tt,"interactionRange"),dragUniformLocation:t.getUniformLocation(tt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(tt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(tt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(tt,"worldDimensions")},zn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,zn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Zt=Le(t,new Float32Array(i),n.width,n.height),bn=Le(t,null,n.width,n.height),lo=Ce(t,Zt),co=Ce(t,bn),Wt={fb:lo,tex:Zt},an={fb:co,tex:bn},Zt},Mr=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,an.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,zn),e.enableVertexAttribArray(et.positionAttributeLocation),e.vertexAttribPointer(et.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Wt.tex),e.useProgram(tt),e.uniform1i(et.positionTexLocation,0),e.uniform1f(et.dragUniformLocation,s),e.uniform1f(et.interactionRangeUniformLocation,o),e.uniform1f(et.deltaTimeUniformLocation,a),e.uniform2f(et.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(et.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Wt;Wt=an,an=r}return Wt.tex};function Nr(t){let e,i,n,o,s,a,r,l=t[3]?"Play":"Pause",c,u,m,x=t[2]?"Normal Speed":"Slow Mo",A,T,F,B,b=t[6].width*t[6].height+"",$,X,M,Y,J,W,oe,Z,N,ee,G,w,C,te,K,fe,R,re,Q,ie,Ee,_e,V,Pe,ue,ae,Be,Te,q,$e,pe,ce,Ie,S,k,Me,y,j,Ne,Se,ne,ze,de,Ue,Oe,le,xe,Ae,ke,We;return{c(){e=p("p"),i=U(`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),n=g(),o=p("canvas"),s=g(),a=p("div"),r=p("button"),c=U(l),u=g(),m=p("button"),A=U(x),T=g(),F=p("span"),B=U("particles: "),$=U(b),X=g(),M=p("label"),Y=U("Smooth steps"),J=g(),W=p("input"),oe=g(),Z=p("button"),N=U("Reset"),ee=g(),G=p("div"),w=p("ul"),C=p("li"),te=p("label"),K=U("Interaction Range"),fe=g(),R=p("input"),re=g(),Q=p("li"),ie=p("label"),Ee=U("Drag"),_e=g(),V=p("input"),Pe=g(),ue=p("li"),ae=p("label"),Be=U("Time step"),Te=g(),q=p("input"),$e=g(),pe=p("li"),ce=p("label"),Ie=U("Particles size"),S=g(),k=p("input"),Me=g(),y=p("li"),j=p("label"),Ne=U("World: width"),Se=g(),ne=p("input"),ze=g(),de=p("label"),Ue=U("height"),Oe=g(),le=p("input"),xe=g(),Ae=p("ul"),this.h()},l(P){e=v(P,"P",{});var I=_(e);i=L(I,`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),I.forEach(d),n=E(P),o=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(o).forEach(d),s=E(P),a=v(P,"DIV",{});var we=_(a);r=v(we,"BUTTON",{});var Rt=_(r);c=L(Rt,l),Rt.forEach(d),u=E(we),m=v(we,"BUTTON",{});var _t=_(m);A=L(_t,x),_t.forEach(d),T=E(we),F=v(we,"SPAN",{});var Tt=_(F);B=L(Tt,"particles: "),$=L(Tt,b),Tt.forEach(d),X=E(we),M=v(we,"LABEL",{for:!0});var Ft=_(M);Y=L(Ft,"Smooth steps"),Ft.forEach(d),J=E(we),W=v(we,"INPUT",{type:!0,min:!0}),oe=E(we),Z=v(we,"BUTTON",{});var yt=_(Z);N=L(yt,"Reset"),yt.forEach(d),we.forEach(d),ee=E(P),G=v(P,"DIV",{});var Dt=_(G);w=v(Dt,"UL",{});var me=_(w);C=v(me,"LI",{});var qe=_(C);te=v(qe,"LABEL",{for:!0});var Ut=_(te);K=L(Ut,"Interaction Range"),Ut.forEach(d),fe=E(qe),R=v(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(d),re=E(me),Q=v(me,"LI",{});var He=_(Q);ie=v(He,"LABEL",{for:!0});var Lt=_(ie);Ee=L(Lt,"Drag"),Lt.forEach(d),_e=E(He),V=v(He,"INPUT",{id:!0,type:!0,min:!0}),He.forEach(d),Pe=E(me),ue=v(me,"LI",{});var Ge=_(ue);ae=v(Ge,"LABEL",{for:!0});var Pt=_(ae);Be=L(Pt,"Time step"),Pt.forEach(d),Te=E(Ge),q=v(Ge,"INPUT",{id:!0,type:!0,min:!0}),Ge.forEach(d),$e=E(me),pe=v(me,"LI",{});var je=_(pe);ce=v(je,"LABEL",{for:!0});var Bt=_(ce);Ie=L(Bt,"Particles size"),Bt.forEach(d),S=E(je),k=v(je,"INPUT",{id:!0,type:!0,min:!0}),je.forEach(d),Me=E(me),y=v(me,"LI",{});var Re=_(y);j=v(Re,"LABEL",{for:!0});var $t=_(j);Ne=L($t,"World: width"),$t.forEach(d),Se=E(Re),ne=v(Re,"INPUT",{id:!0,type:!0,min:!0}),ze=E(Re),de=v(Re,"LABEL",{for:!0});var It=_(de);Ue=L(It,"height"),It.forEach(d),Oe=E(Re),le=v(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(d),xe=E(me),Ae=v(me,"UL",{}),_(Ae).forEach(d),me.forEach(d),Dt.forEach(d),this.h()},h(){h(o,"id","canvas"),Ve(o,"background-color","black"),h(o,"width",t[5].width),h(o,"height",t[5].height),h(M,"for","steps"),h(W,"type","number"),h(W,"min",0),h(te,"for","interactionRange"),h(R,"id","interactionRange"),h(R,"type","number"),h(R,"min",0),h(ie,"for","drag"),h(V,"id","drag"),h(V,"type","number"),h(V,"min",0),h(ae,"for","deltaTime"),h(q,"id","deltaTime"),h(q,"type","number"),h(q,"min",0),h(ce,"for","particlesSize"),h(k,"id","particlesSize"),h(k,"type","number"),h(k,"min",0),h(j,"for","worldWidth"),h(ne,"id","worldWidth"),h(ne,"type","number"),h(ne,"min",0),h(de,"for","worldHeight"),h(le,"id","worldHeight"),h(le,"type","number"),h(le,"min",0)},m(P,I){D(P,e,I),f(e,i),D(P,n,I),D(P,o,I),D(P,s,I),D(P,a,I),f(a,r),f(r,c),f(a,u),f(a,m),f(m,A),f(a,T),f(a,F),f(F,B),f(F,$),f(a,X),f(a,M),f(M,Y),f(a,J),f(a,W),z(W,t[1]),f(a,oe),f(a,Z),f(Z,N),D(P,ee,I),D(P,G,I),f(G,w),f(w,C),f(C,te),f(te,K),f(C,fe),f(C,R),z(R,t[4].interactionRange),f(w,re),f(w,Q),f(Q,ie),f(ie,Ee),f(Q,_e),f(Q,V),z(V,t[4].drag),f(w,Pe),f(w,ue),f(ue,ae),f(ae,Be),f(ue,Te),f(ue,q),z(q,t[4].timeStep),f(w,$e),f(w,pe),f(pe,ce),f(ce,Ie),f(pe,S),f(pe,k),z(k,t[4].particlesSize),f(w,Me),f(w,y),f(y,j),f(j,Ne),f(y,Se),f(y,ne),z(ne,t[0].width),f(y,ze),f(y,de),f(de,Ue),f(y,Oe),f(y,le),z(le,t[0].height),f(w,xe),f(w,Ae),ke||(We=[H(r,"click",t[8]),H(m,"click",t[9]),H(W,"input",t[10]),H(Z,"click",t[11]),H(R,"input",t[12]),H(V,"input",t[13]),H(q,"input",t[14]),H(k,"input",t[15]),H(ne,"input",t[16]),H(le,"input",t[17])],ke=!0)},p(P,[I]){I&8&&l!==(l=P[3]?"Play":"Pause")&&Ye(c,l),I&4&&x!==(x=P[2]?"Normal Speed":"Slow Mo")&&Ye(A,x),I&2&&O(W.value)!==P[1]&&z(W,P[1]),I&16&&O(R.value)!==P[4].interactionRange&&z(R,P[4].interactionRange),I&16&&O(V.value)!==P[4].drag&&z(V,P[4].drag),I&16&&O(q.value)!==P[4].timeStep&&z(q,P[4].timeStep),I&16&&O(k.value)!==P[4].particlesSize&&z(k,P[4].particlesSize),I&1&&O(ne.value)!==P[0].width&&z(ne,P[0].width),I&1&&O(le.value)!==P[0].height&&z(le,P[0].height)},i:se,o:se,d(P){P&&d(e),P&&d(n),P&&d(o),P&&d(s),P&&d(a),P&&d(ee),P&&d(G),ke=!1,qt(We)}}}function zr(t,e,i){const n={width:800,height:600},o={width:1200,height:500},s={width:200,height:20};let a=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:20};let u,m;function x(){cancelAnimationFrame(m),u=wt(),he(u.canvas);const{ids:W,positions:oe,colors:Z}=Ur({texDimensions:s,worldDimensions:o,mode:"disk"});yr(u,{ids:W,colors:Z,texDimensions:s});let N=Cr(u,{positions:oe,texDimensions:s});function ee(){if(he(u.canvas),!l)for(let G=0;G<a;G++)N=Mr({gl:u,texDimensions:s,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Dr({gl:u,positionTex:N,texDimensions:s,worldDimensions:o,particlesSize:c.particlesSize,ids:W}),r?setTimeout(()=>m=requestAnimationFrame(ee),1e3):m=requestAnimationFrame(ee)}m=requestAnimationFrame(ee)}Xe(()=>x());const A=()=>i(3,l=!l),T=()=>i(2,r=!r);function F(){a=O(this.value),i(1,a)}const B=()=>x();function b(){c.interactionRange=O(this.value),i(4,c)}function $(){c.drag=O(this.value),i(4,c)}function X(){c.timeStep=O(this.value),i(4,c)}function M(){c.particlesSize=O(this.value),i(4,c)}function Y(){o.width=O(this.value),i(0,o)}function J(){o.height=O(this.value),i(0,o)}return[o,a,r,l,c,n,s,x,A,T,F,B,b,$,X,M,Y,J]}class Or extends Fe{constructor(e){super(),ye(this,e,zr,Nr,De,{})}}const kr=`attribute float id;
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
`,Xr=`precision mediump float;
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
`;let lt,vt,On,kn;const Wr=(t,e)=>{const{ids:i,colors:n}=e;vt=ge(t,[kr,Xr]),lt={idAttributeLocation:t.getAttribLocation(vt,"id"),colorAttributeLocation:t.getAttribLocation(vt,"color"),sizeUniformLocation:t.getUniformLocation(vt,"size"),texDimensionsUniformLocation:t.getUniformLocation(vt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(vt,"worldDimensions")},On=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,On),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Yr=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:s,ids:a}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,On),e.vertexAttribPointer(lt.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(lt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,kn),e.vertexAttribPointer(lt.colorAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(lt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(vt),e.uniform1f(lt.sizeUniformLocation,s),e.uniform2f(lt.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(lt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,m,a.length)};function Vr(t,e,i){function n(){const s=t.getElementById(e);s&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),s.width=i.width,s.height=i.height)}function o(){const s=t.getElementById(e);s&&(t.fullscreenElement||s.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function qr(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,s=new Array(o).fill(0).map((l,c)=>c),a=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=s.map(l=>{if(n==="random"){const{x:c,y:u}=Hr(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=jr(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Gr(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Kr(i,l,s.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=uo(i,l,s.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=uo(i,l,s.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:s,positions:r,texDimensions:e,colors:a}}const Hr=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Gr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},jr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:o,y:s}},Kr=(t,e,i)=>{const n=Xn(e,0,i,0,t.width,!1),o=Xn(e,0,i,0,t.height,!1);return{x:n,y:o}},uo=(t,e,i,n)=>{const o=Xn(e,0,i,0,1,!0)*2*Math.PI,s=n.x,r=Math.cos(s*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Xn=function(t,e,i,n,o,s){const a=(t-e)/(i-e)*(o-n)+n;return s?n<o?fo(a,n,o):fo(a,o,n):a},fo=function(t,e,i){return Math.max(Math.min(t,i),e)},Qr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Jr=`precision highp float;

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

`;let nt,ot,Wn,en,gn,mo,ho,Yt,sn;const Zr=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Jr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return ot=ge(t,[Qr,o]),nt={positionAttributeLocation:t.getAttribLocation(ot,"position"),positionTexLocation:t.getUniformLocation(ot,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ot,"interactionRange"),dragUniformLocation:t.getUniformLocation(ot,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ot,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ot,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(ot,"worldDimensions")},Wn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Wn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),en=Le(t,new Float32Array(i),n.width,n.height),gn=Le(t,null,n.width,n.height),mo=Ce(t,en),ho=Ce(t,gn),Yt={fb:mo,tex:en},sn={fb:ho,tex:gn},en},ea=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:s,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,sn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Wn),e.enableVertexAttribArray(nt.positionAttributeLocation),e.vertexAttribPointer(nt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Yt.tex),e.useProgram(ot),e.uniform1i(nt.positionTexLocation,0),e.uniform1f(nt.dragUniformLocation,s),e.uniform1f(nt.interactionRangeUniformLocation,o),e.uniform1f(nt.deltaTimeUniformLocation,a),e.uniform2f(nt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(nt.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Yt;Yt=sn,sn=r}return Yt.tex};function ta(t){let e,i,n,o,s=t[3]?"Play":"Pause",a,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,m,x,A,T=t[6].width*t[6].height+"",F,B,b,$,X,M,Y,J,W,oe,Z,N,ee,G,w,C,te,K,fe,R,re,Q,ie,Ee,_e,V,Pe,ue,ae,Be,Te,q,$e,pe,ce,Ie,S,k,Me,y,j,Ne,Se,ne,ze,de,Ue,Oe,le,xe,Ae,ke,We;return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),a=U(s),r=g(),l=p("button"),u=U(c),m=g(),x=p("span"),A=U("particles: "),F=U(T),B=g(),b=p("label"),$=U("Smooth steps"),X=g(),M=p("input"),Y=g(),J=p("button"),W=U("Reset"),oe=g(),Z=p("button"),N=U("Fullscreen"),ee=g(),G=p("div"),w=p("ul"),C=p("li"),te=p("label"),K=U("Interaction Range"),fe=g(),R=p("input"),re=g(),Q=p("li"),ie=p("label"),Ee=U("Drag"),_e=g(),V=p("input"),Pe=g(),ue=p("li"),ae=p("label"),Be=U("Time step"),Te=g(),q=p("input"),$e=g(),pe=p("li"),ce=p("label"),Ie=U("Particles size"),S=g(),k=p("input"),Me=g(),y=p("li"),j=p("label"),Ne=U("World: width"),Se=g(),ne=p("input"),ze=g(),de=p("label"),Ue=U("height"),Oe=g(),le=p("input"),xe=g(),Ae=p("ul"),this.h()},l(P){e=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),_(e).forEach(d),i=E(P),n=v(P,"DIV",{});var I=_(n);o=v(I,"BUTTON",{});var we=_(o);a=L(we,s),we.forEach(d),r=E(I),l=v(I,"BUTTON",{});var Rt=_(l);u=L(Rt,c),Rt.forEach(d),m=E(I),x=v(I,"SPAN",{});var _t=_(x);A=L(_t,"particles: "),F=L(_t,T),_t.forEach(d),B=E(I),b=v(I,"LABEL",{for:!0});var Tt=_(b);$=L(Tt,"Smooth steps"),Tt.forEach(d),X=E(I),M=v(I,"INPUT",{type:!0,min:!0}),Y=E(I),J=v(I,"BUTTON",{});var Ft=_(J);W=L(Ft,"Reset"),Ft.forEach(d),oe=E(I),Z=v(I,"BUTTON",{});var yt=_(Z);N=L(yt,"Fullscreen"),yt.forEach(d),I.forEach(d),ee=E(P),G=v(P,"DIV",{});var Dt=_(G);w=v(Dt,"UL",{});var me=_(w);C=v(me,"LI",{});var qe=_(C);te=v(qe,"LABEL",{for:!0});var Ut=_(te);K=L(Ut,"Interaction Range"),Ut.forEach(d),fe=E(qe),R=v(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(d),re=E(me),Q=v(me,"LI",{});var He=_(Q);ie=v(He,"LABEL",{for:!0});var Lt=_(ie);Ee=L(Lt,"Drag"),Lt.forEach(d),_e=E(He),V=v(He,"INPUT",{id:!0,type:!0,min:!0}),He.forEach(d),Pe=E(me),ue=v(me,"LI",{});var Ge=_(ue);ae=v(Ge,"LABEL",{for:!0});var Pt=_(ae);Be=L(Pt,"Time step"),Pt.forEach(d),Te=E(Ge),q=v(Ge,"INPUT",{id:!0,type:!0,min:!0}),Ge.forEach(d),$e=E(me),pe=v(me,"LI",{});var je=_(pe);ce=v(je,"LABEL",{for:!0});var Bt=_(ce);Ie=L(Bt,"Particles size"),Bt.forEach(d),S=E(je),k=v(je,"INPUT",{id:!0,type:!0,min:!0}),je.forEach(d),Me=E(me),y=v(me,"LI",{});var Re=_(y);j=v(Re,"LABEL",{for:!0});var $t=_(j);Ne=L($t,"World: width"),$t.forEach(d),Se=E(Re),ne=v(Re,"INPUT",{id:!0,type:!0,min:!0}),ze=E(Re),de=v(Re,"LABEL",{for:!0});var It=_(de);Ue=L(It,"height"),It.forEach(d),Oe=E(Re),le=v(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(d),xe=E(me),Ae=v(me,"UL",{}),_(Ae).forEach(d),me.forEach(d),Dt.forEach(d),this.h()},h(){h(e,"id","canvas"),Ve(e,"background-color","black"),h(e,"width",t[5].width),h(e,"height",t[5].height),h(b,"for","steps"),h(M,"type","number"),h(M,"min",0),h(te,"for","interactionRange"),h(R,"id","interactionRange"),h(R,"type","number"),h(R,"min",0),h(ie,"for","drag"),h(V,"id","drag"),h(V,"type","number"),h(V,"min",0),h(ae,"for","deltaTime"),h(q,"id","deltaTime"),h(q,"type","number"),h(q,"min",0),h(ce,"for","particlesSize"),h(k,"id","particlesSize"),h(k,"type","number"),h(k,"min",0),h(j,"for","worldWidth"),h(ne,"id","worldWidth"),h(ne,"type","number"),h(ne,"min",0),h(de,"for","worldHeight"),h(le,"id","worldHeight"),h(le,"type","number"),h(le,"min",0)},m(P,I){D(P,e,I),D(P,i,I),D(P,n,I),f(n,o),f(o,a),f(n,r),f(n,l),f(l,u),f(n,m),f(n,x),f(x,A),f(x,F),f(n,B),f(n,b),f(b,$),f(n,X),f(n,M),z(M,t[1]),f(n,Y),f(n,J),f(J,W),f(n,oe),f(n,Z),f(Z,N),D(P,ee,I),D(P,G,I),f(G,w),f(w,C),f(C,te),f(te,K),f(C,fe),f(C,R),z(R,t[4].interactionRange),f(w,re),f(w,Q),f(Q,ie),f(ie,Ee),f(Q,_e),f(Q,V),z(V,t[4].drag),f(w,Pe),f(w,ue),f(ue,ae),f(ae,Be),f(ue,Te),f(ue,q),z(q,t[4].timeStep),f(w,$e),f(w,pe),f(pe,ce),f(ce,Ie),f(pe,S),f(pe,k),z(k,t[4].particlesSize),f(w,Me),f(w,y),f(y,j),f(j,Ne),f(y,Se),f(y,ne),z(ne,t[0].width),f(y,ze),f(y,de),f(de,Ue),f(y,Oe),f(y,le),z(le,t[0].height),f(w,xe),f(w,Ae),ke||(We=[H(o,"click",t[9]),H(l,"click",t[10]),H(M,"input",t[11]),H(J,"click",t[12]),H(Z,"click",t[8]),H(R,"input",t[13]),H(V,"input",t[14]),H(q,"input",t[15]),H(k,"input",t[16]),H(ne,"input",t[17]),H(le,"input",t[18])],ke=!0)},p(P,[I]){I&8&&s!==(s=P[3]?"Play":"Pause")&&Ye(a,s),I&4&&c!==(c=P[2]?"Normal Speed":"Slow Mo")&&Ye(u,c),I&2&&O(M.value)!==P[1]&&z(M,P[1]),I&16&&O(R.value)!==P[4].interactionRange&&z(R,P[4].interactionRange),I&16&&O(V.value)!==P[4].drag&&z(V,P[4].drag),I&16&&O(q.value)!==P[4].timeStep&&z(q,P[4].timeStep),I&16&&O(k.value)!==P[4].particlesSize&&z(k,P[4].particlesSize),I&1&&O(ne.value)!==P[0].width&&z(ne,P[0].width),I&1&&O(le.value)!==P[0].height&&z(le,P[0].height)},i:se,o:se,d(P){P&&d(e),P&&d(i),P&&d(n),P&&d(ee),P&&d(G),ke=!1,qt(We)}}}function na(t,e,i){const n={width:800,height:600},o={width:1200,height:500},s={width:200,height:20};let a=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let u,m;function x(){cancelAnimationFrame(m),u=wt(),he(u.canvas);const{ids:oe,positions:Z,colors:N}=qr({texDimensions:s,worldDimensions:o,mode:"sinusoidal"});Wr(u,{ids:oe,colors:N,texDimensions:s});let ee=Zr(u,{positions:Z,texDimensions:s});function G(){if(!l)for(let w=0;w<a;w++)ee=ea({gl:u,texDimensions:s,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Yr({gl:u,positionTex:ee,texDimensions:s,worldDimensions:o,particlesSize:c.particlesSize,ids:oe}),r?setTimeout(()=>m=requestAnimationFrame(G),1e3):m=requestAnimationFrame(G)}m=requestAnimationFrame(G)}const{enableFullscreen:A}=Vr(document,"canvas",n);document.addEventListener("keydown",oe=>{oe.code==="Space"&&(i(3,l=!l),oe.preventDefault())}),Xe(()=>x());const T=()=>i(3,l=!l),F=()=>i(2,r=!r);function B(){a=O(this.value),i(1,a)}const b=()=>x();function $(){c.interactionRange=O(this.value),i(4,c)}function X(){c.drag=O(this.value),i(4,c)}function M(){c.timeStep=O(this.value),i(4,c)}function Y(){c.particlesSize=O(this.value),i(4,c)}function J(){o.width=O(this.value),i(0,o)}function W(){o.height=O(this.value),i(0,o)}return[o,a,r,l,c,n,s,x,A,T,F,B,b,$,X,M,Y,J,W]}class oa extends Fe{constructor(e){super(),ye(this,e,na,ta,De,{})}}function po(t,e,i){const n=t.slice();return n[1]=e[i],n}function vo(t,e,i){const n=t.slice();return n[1]=e[i],n}function ia(t){let e;return{c(){e=U("About")},l(i){e=L(i,"About")},m(i,n){D(i,e,n)},d(i){i&&d(e)}}}function ra(t){let e=t[1].title+"",i;return{c(){i=U(e)},l(n){i=L(n,e)},m(n,o){D(n,i,o)},p:se,d(n){n&&d(i)}}}function _o(t){let e,i;return e=new go({props:{$$slots:{default:[ra]},$$scope:{ctx:t}}}),{c(){it(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,o){rt(e,n,o),i=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){i||(ve(e.$$.fragment,n),i=!0)},o(n){be(e.$$.fragment,n),i=!1},d(n){at(e,n)}}}function aa(t){let e,i,n,o;e=new go({props:{$$slots:{default:[ia]},$$scope:{ctx:t}}});let s=t[0],a=[];for(let l=0;l<s.length;l+=1)a[l]=_o(vo(t,s,l));const r=l=>be(a[l],1,1,()=>{a[l]=null});return{c(){it(e.$$.fragment),i=g();for(let l=0;l<a.length;l+=1)a[l].c();n=ln()},l(l){ct(e.$$.fragment,l),i=E(l);for(let c=0;c<a.length;c+=1)a[c].l(l);n=ln()},m(l,c){rt(e,l,c),D(l,i,c);for(let u=0;u<a.length;u+=1)a[u].m(l,c);D(l,n,c),o=!0},p(l,c){const u={};if(c&64&&(u.$$scope={dirty:c,ctx:l}),e.$set(u),c&1){s=l[0];let m;for(m=0;m<s.length;m+=1){const x=vo(l,s,m);a[m]?(a[m].p(x,c),ve(a[m],1)):(a[m]=_o(x),a[m].c(),ve(a[m],1),a[m].m(n.parentNode,n))}for(mn(),m=s.length;m<a.length;m+=1)r(m);hn()}},i(l){if(!o){ve(e.$$.fragment,l);for(let c=0;c<s.length;c+=1)ve(a[c]);o=!0}},o(l){be(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)be(a[c]);o=!1},d(l){at(e,l),l&&d(i),Ao(a,l),l&&d(n)}}}function sa(t){let e,i;return{c(){e=p("p"),i=U("This page is an experiment to run simulation on the GPU.")},l(n){e=v(n,"P",{});var o=_(e);i=L(o,"This page is an experiment to run simulation on the GPU."),o.forEach(d)},m(n,o){D(n,e,o),f(e,i)},p:se,d(n){n&&d(e)}}}function la(t){let e,i,n;var o=t[1].component;function s(a){return{}}return o&&(e=qn(o,s())),{c(){e&&it(e.$$.fragment),i=g()},l(a){e&&ct(e.$$.fragment,a),i=E(a)},m(a,r){e&&rt(e,a,r),D(a,i,r),n=!0},p(a,r){if(o!==(o=a[1].component)){if(e){mn();const l=e;be(l.$$.fragment,1,0,()=>{at(l,1)}),hn()}o?(e=qn(o,s()),it(e.$$.fragment),ve(e.$$.fragment,1),rt(e,i.parentNode,i)):e=null}},i(a){n||(e&&ve(e.$$.fragment,a),n=!0)},o(a){e&&be(e.$$.fragment,a),n=!1},d(a){e&&at(e,a),a&&d(i)}}}function To(t){let e,i;return e=new Eo({props:{$$slots:{default:[la]},$$scope:{ctx:t}}}),{c(){it(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,o){rt(e,n,o),i=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){i||(ve(e.$$.fragment,n),i=!0)},o(n){be(e.$$.fragment,n),i=!1},d(n){at(e,n)}}}function ca(t){let e,i,n,o,s,a;e=new Wo({props:{$$slots:{default:[aa]},$$scope:{ctx:t}}}),n=new Eo({props:{$$slots:{default:[sa]},$$scope:{ctx:t}}});let r=t[0],l=[];for(let u=0;u<r.length;u+=1)l[u]=To(po(t,r,u));const c=u=>be(l[u],1,1,()=>{l[u]=null});return{c(){it(e.$$.fragment),i=g(),it(n.$$.fragment),o=g();for(let u=0;u<l.length;u+=1)l[u].c();s=ln()},l(u){ct(e.$$.fragment,u),i=E(u),ct(n.$$.fragment,u),o=E(u);for(let m=0;m<l.length;m+=1)l[m].l(u);s=ln()},m(u,m){rt(e,u,m),D(u,i,m),rt(n,u,m),D(u,o,m);for(let x=0;x<l.length;x+=1)l[x].m(u,m);D(u,s,m),a=!0},p(u,m){const x={};m&64&&(x.$$scope={dirty:m,ctx:u}),e.$set(x);const A={};if(m&64&&(A.$$scope={dirty:m,ctx:u}),n.$set(A),m&1){r=u[0];let T;for(T=0;T<r.length;T+=1){const F=po(u,r,T);l[T]?(l[T].p(F,m),ve(l[T],1)):(l[T]=To(F),l[T].c(),ve(l[T],1),l[T].m(s.parentNode,s))}for(mn(),T=r.length;T<l.length;T+=1)c(T);hn()}},i(u){if(!a){ve(e.$$.fragment,u),ve(n.$$.fragment,u);for(let m=0;m<r.length;m+=1)ve(l[m]);a=!0}},o(u){be(e.$$.fragment,u),be(n.$$.fragment,u),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)be(l[m]);a=!1},d(u){at(e,u),u&&d(i),at(n,u),u&&d(o),Ao(l,u),u&&d(s)}}}function ua(t){let e,i,n;return i=new No({props:{$$slots:{default:[ca]},$$scope:{ctx:t}}}),{c(){e=p("div"),it(i.$$.fragment)},l(o){e=v(o,"DIV",{});var s=_(e);ct(i.$$.fragment,s),s.forEach(d)},m(o,s){D(o,e,s),rt(i,e,null),n=!0},p(o,[s]){const a={};s&64&&(a.$$scope={dirty:s,ctx:o}),i.$set(a)},i(o){n||(ve(i.$$.fragment,o),n=!0)},o(o){be(i.$$.fragment,o),n=!1},d(o){o&&d(e),at(i)}}}function fa(t){return[[{title:"test 1",component:Jo},{title:"test 2",component:ni},{title:"test 3",component:ui},{title:"test 4",component:pi},{title:"test 5",component:gi},{title:"test 6",component:Ii},{title:"test 7",component:Hi},{title:"test 8",component:lr},{title:"test 9",component:wr},{title:"test 10",component:Or},{title:"test 11",component:oa}]]}class da extends Fe{constructor(e){super(),ye(this,e,fa,ua,De,{})}}function ma(t){let e,i;return e=new da({}),{c(){it(e.$$.fragment)},l(n){ct(e.$$.fragment,n)},m(n,o){rt(e,n,o),i=!0},p:se,i(n){i||(ve(e.$$.fragment,n),i=!0)},o(n){be(e.$$.fragment,n),i=!1},d(n){at(e,n)}}}class Ta extends Fe{constructor(e){super(),ye(this,e,null,ma,De,{})}}export{Ta as default};
