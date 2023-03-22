import{S as $e,i as Ie,s as Se,C as vn,k as p,l as v,m as T,h as d,n as h,b as B,K as V,E as Tn,F as _n,G as xn,f as ge,t as Le,H as Qt,R as qo,o as He,j as Go,Q as jo,T as to,U as $o,A as Ko,V as Qo,g as An,d as bn,q as D,a as g,r as U,c as w,D as f,B as ue,p as je,O as S,u as Ge,P as C,M as Nt,w as lt,x as Ft,y as ct,z as ft,e as pn,L as Io,v as no}from"../../../chunks/index-ff9e742a.js";import{w as Jt}from"../../../chunks/index-84a8d4d9.js";let Jo=1;function So(){return`svelte-tabs-${Jo++}`}function Zo(t){let e,i,n,o;const a=t[4].default,s=vn(a,t,t[3],null);return{c(){e=p("div"),s&&s.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=T(e);s&&s.l(l),l.forEach(d),this.h()},h(){h(e,"class","svelte-tabs")},m(r,l){B(r,e,l),s&&s.m(e,null),i=!0,n||(o=V(e,"keydown",t[1]),n=!0)},p(r,[l]){s&&s.p&&(!i||l&8)&&Tn(s,a,r,r[3],i?xn(a,r[3],l,null):_n(r[3]),null)},i(r){i||(ge(s,r),i=!0)},o(r){Le(s,r),i=!1},d(r){r&&d(e),s&&s.d(r),n=!1,o()}}}const eo={};function ei(t,e,i){const n=t.indexOf(e);t.splice(n,1),i.update(o=>o===e?t[n]||t[t.length-1]:o)}function ti(t,e,i){let n,{$$slots:o={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const r=[],l=[],c=[],u=Jt({}),m=Jt({}),_=Jt(null);Qt(t,_,R=>i(5,n=R));const A=Jt(null);function x(R,I,k){R.push(I),k.update(M=>M||I),jo(()=>ei(R,I,k))}function L(R){const I=l.indexOf(R);_.set(R),A.set(c[I])}qo(eo,{registerTab(R){x(l,R,_)},registerTabElement(R){r.push(R)},registerPanel(R){x(c,R,A)},selectTab:L,selectedTab:_,selectedPanel:A,controls:u,labeledBy:m}),He(()=>{L(l[s])}),Go(()=>{for(let R=0;R<l.length;R++)u.update(I=>({...I,[l[R].id]:c[R].id})),m.update(I=>({...I,[c[R].id]:l[R].id}))});async function $(R){if(R.target.classList.contains("svelte-tabs__tab")){let I=l.indexOf(n);switch(R.key){case"ArrowRight":I+=1,I>l.length-1&&(I=0),L(l[I]),r[I].focus();break;case"ArrowLeft":I-=1,I<0&&(I=l.length-1),L(l[I]),r[I].focus()}}}return t.$$set=R=>{"initialSelectedIndex"in R&&i(2,s=R.initialSelectedIndex),"$$scope"in R&&i(3,a=R.$$scope)},[_,$,s,a,o]}class ni extends $e{constructor(e){super(),Ie(this,e,ti,Zo,Se,{initialSelectedIndex:2})}}function oi(t){let e,i,n,o,a,s;const r=t[9].default,l=vn(r,t,t[8],null);return{c(){e=p("li"),l&&l.c(),this.h()},l(c){e=v(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=T(e);l&&l.l(u),u.forEach(d),this.h()},h(){h(e,"role","tab"),h(e,"id",t[3].id),h(e,"aria-controls",i=t[2][t[3].id]),h(e,"aria-selected",t[1]),h(e,"tabindex",n=t[1]?0:-1),h(e,"class","svelte-tabs__tab svelte-1fbofsd"),to(e,"svelte-tabs__selected",t[1])},m(c,u){B(c,e,u),l&&l.m(e,null),t[10](e),o=!0,a||(s=V(e,"click",t[11]),a=!0)},p(c,[u]){l&&l.p&&(!o||u&256)&&Tn(l,r,c,c[8],o?xn(r,c[8],u,null):_n(c[8]),null),(!o||u&4&&i!==(i=c[2][c[3].id]))&&h(e,"aria-controls",i),(!o||u&2)&&h(e,"aria-selected",c[1]),(!o||u&2&&n!==(n=c[1]?0:-1))&&h(e,"tabindex",n),(!o||u&2)&&to(e,"svelte-tabs__selected",c[1])},i(c){o||(ge(l,c),o=!0)},o(c){Le(l,c),o=!1},d(c){c&&d(e),l&&l.d(c),t[10](null),a=!1,s()}}}function ii(t,e,i){let n,o,{$$slots:a={},$$scope:s}=e,r;const l={id:So()},{registerTab:c,registerTabElement:u,selectTab:m,selectedTab:_,controls:A}=$o(eo);Qt(t,_,R=>i(7,n=R)),Qt(t,A,R=>i(2,o=R));let x;c(l),He(async()=>{await Ko(),u(r)});function L(R){Qo[R?"unshift":"push"](()=>{r=R,i(0,r)})}const $=()=>m(l);return t.$$set=R=>{"$$scope"in R&&i(8,s=R.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,x=n===l)},[r,x,o,l,m,_,A,n,s,a,L,$]}class Co extends $e{constructor(e){super(),Ie(this,e,ii,oi,Se,{})}}function ri(t){let e,i;const n=t[1].default,o=vn(n,t,t[0],null);return{c(){e=p("ul"),o&&o.c(),this.h()},l(a){e=v(a,"UL",{role:!0,class:!0});var s=T(e);o&&o.l(s),s.forEach(d),this.h()},h(){h(e,"role","tablist"),h(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){B(a,e,s),o&&o.m(e,null),i=!0},p(a,[s]){o&&o.p&&(!i||s&1)&&Tn(o,n,a,a[0],i?xn(n,a[0],s,null):_n(a[0]),null)},i(a){i||(ge(o,a),i=!0)},o(a){Le(o,a),i=!1},d(a){a&&d(e),o&&o.d(a)}}}function ai(t,e,i){let{$$slots:n={},$$scope:o}=e;return t.$$set=a=>{"$$scope"in a&&i(0,o=a.$$scope)},[o,n]}class si extends $e{constructor(e){super(),Ie(this,e,ai,ri,Se,{})}}function oo(t){let e;const i=t[6].default,n=vn(i,t,t[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,a){n&&n.m(o,a),e=!0},p(o,a){n&&n.p&&(!e||a&32)&&Tn(n,i,o,o[5],e?xn(i,o[5],a,null):_n(o[5]),null)},i(o){e||(ge(n,o),e=!0)},o(o){Le(n,o),e=!1},d(o){n&&n.d(o)}}}function li(t){let e,i,n,o=t[1]===t[2]&&oo(t);return{c(){e=p("div"),o&&o.c(),this.h()},l(a){e=v(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=T(e);o&&o.l(s),s.forEach(d),this.h()},h(){h(e,"id",t[2].id),h(e,"aria-labelledby",i=t[0][t[2].id]),h(e,"class","svelte-tabs__tab-panel svelte-epfyet"),h(e,"role","tabpanel")},m(a,s){B(a,e,s),o&&o.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?o?(o.p(a,s),s&2&&ge(o,1)):(o=oo(a),o.c(),ge(o,1),o.m(e,null)):o&&(An(),Le(o,1,1,()=>{o=null}),bn()),(!n||s&1&&i!==(i=a[0][a[2].id]))&&h(e,"aria-labelledby",i)},i(a){n||(ge(o),n=!0)},o(a){Le(o),n=!1},d(a){a&&d(e),o&&o.d()}}}function ci(t,e,i){let n,o,{$$slots:a={},$$scope:s}=e;const r={id:So()},{registerPanel:l,selectedPanel:c,labeledBy:u}=$o(eo);return Qt(t,c,m=>i(1,o=m)),Qt(t,u,m=>i(0,n=m)),l(r),t.$$set=m=>{"$$scope"in m&&i(5,s=m.$$scope)},[n,o,r,c,u,s,a]}class Mo extends $e{constructor(e){super(),Ie(this,e,ci,li,Se,{})}}const fi=["VERTEX_SHADER","FRAGMENT_SHADER"];function $t(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return gn(e),e}function gn(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function we(t,e,i,n){const o=t.createTexture();if(!o)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o}function Xe(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function Re(t,e,i,n,o){const a=[];for(let r=0;r<e.length;++r){const l=fi[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=ui(t,e[r],l,o);if(!c)throw"Can not create shader";a.push(c)}const s=di(t,a,i,n,o);if(!s)throw"Can not create program";return s}function ui(t,e,i,n){const o=n||console.log,a=t.createShader(i);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);return o(new Error("*** Error compiling shader '"+a+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(a),null}return a}function di(t,e,i,n,o){const a=o||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){t.attachShader(s,l)}),i&&i.forEach(function(l,c){t.bindAttribLocation(s,n?n[c]:c,l)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const l=t.getProgramInfoLog(s);return a("Error in program linking:"+l),t.deleteProgram(s),null}return s}function pe(t,e){e=e||1;const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}function mi(t){let e,i,n,o,a,s,r,l,c,u,m,_;return{c(){e=p("p"),i=D(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=g(),o=p("p"),a=D(`It is reusing the code from
    `),s=p("a"),r=D(`this site
    `),l=D("."),c=g(),u=p("ul"),m=g(),_=p("canvas"),this.h()},l(A){e=v(A,"P",{});var x=T(e);i=U(x,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),x.forEach(d),n=w(A),o=v(A,"P",{});var L=T(o);a=U(L,`It is reusing the code from
    `),s=v(L,"A",{target:!0,href:!0});var $=T(s);r=U($,`this site
    `),$.forEach(d),l=U(L,"."),L.forEach(d),c=w(A),u=v(A,"UL",{id:!0}),T(u).forEach(d),m=w(A),_=v(A,"CANVAS",{id:!0}),T(_).forEach(d),this.h()},h(){h(s,"target","none"),h(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(u,"id","result"),h(_,"id","canvas")},m(A,x){B(A,e,x),f(e,i),B(A,n,x),B(A,o,x),f(o,a),f(o,s),f(s,r),f(o,l),B(A,c,x),B(A,u,x),B(A,m,x),B(A,_,x)},p:ue,i:ue,o:ue,d(A){A&&d(e),A&&d(n),A&&d(o),A&&d(c),A&&d(u),A&&d(m),A&&d(_)}}}function hi(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function pi(t){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const r=s.getContext("webgl");if(!r)throw"Coulndt get context";const l=Re(r,[i,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),u=r.getUniformLocation(l,"srcTex"),m=r.getUniformLocation(l,"srcDimensions"),_=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,_),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const A=3,x=3,L=r.createTexture();r.bindTexture(r.TEXTURE_2D,L),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,A,x,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(u,0),r.uniform2f(m,A,x),r.drawArrays(r.TRIANGLES,0,6);const $=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,$);for(let R=0;R<3*3;++R)hi($[R*4])}return He(e),[]}class vi extends $e{constructor(e){super(),Ie(this,e,pi,mi,Se,{})}}const Ti=Float32Array;function zo(t,e,i,n,o,a){const s=new Ti(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(o-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(i+n)/(i-n),s[14]=(o+a)/(o-a),s[15]=1,s}function _i(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=D(`This is the simple particles simulation from
    `),n=p("a"),o=D("webglfundamentals"),a=D(" directly copied in a svelte component."),s=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=T(e);i=U(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=T(n);o=U(u,"webglfundamentals"),u.forEach(d),a=U(c," directly copied in a svelte component."),c.forEach(d),s=w(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),je(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){B(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),B(l,s,c),B(l,r,c)},p:ue,i:ue,o:ue,d(l){l&&d(e),l&&d(s),l&&d(r)}}}function xi(t){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const r=s.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=Re(r,[i,n]),m=Re(r,[o,a]);if(!u||!m)throw"Can not create programs";const _={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},A={id:r.getAttribLocation(m,"id"),positionTex:r.getUniformLocation(m,"positionTex"),texDimensions:r.getUniformLocation(m,"texDimensions"),matrix:r.getUniformLocation(m,"matrix")},x=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const L=300,$=20,R=L*$,I=new Array(R).fill(0).map((F,le)=>le),k=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,k),r.bufferData(r.ARRAY_BUFFER,new Float32Array(I),r.STATIC_DRAW),pe(r.canvas);const M=(F,le)=>(le===void 0&&(le=F,F=0),Math.random()*(le-F)+F),G=new Float32Array(I.map(F=>[M(s.width),M(s.height),0,0]).flat()),K=new Float32Array(I.map(F=>[M(-300,300),M(-300,300),0,0]).flat());function H(F,le,J,ie){const be=F.createTexture();return F.bindTexture(F.TEXTURE_2D,be),F.texImage2D(F.TEXTURE_2D,0,F.RGBA,J,ie,0,F.RGBA,F.FLOAT,le),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_S,F.CLAMP_TO_EDGE),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_T,F.CLAMP_TO_EDGE),be}const ee=H(r,K,L,$),Q=H(r,G,L,$),X=H(r,null,L,$);if(!Q||!X)throw"Can not create position textures";function te(F,le){const J=F.createFramebuffer();return F.bindFramebuffer(F.FRAMEBUFFER,J),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le,0),J}const q=te(r,Q),E=te(r,X);let O={fb:q,tex:Q},ne={fb:E,tex:X},oe=0;function he(F){if(!r)return;F*=.001;const le=F-oe;oe=F,pe(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,ne.fb),r.viewport(0,0,L,$),r.bindBuffer(r.ARRAY_BUFFER,x),r.enableVertexAttribArray(_.position),r.vertexAttribPointer(_.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,O.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,ee),r.useProgram(u),r.uniform1i(_.positionTex,0),r.uniform1i(_.velocityTex,1),r.uniform2f(_.texDimensions,L,$),r.uniform2f(_.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(_.deltaTime,le),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,k),r.enableVertexAttribArray(A.id),r.vertexAttribPointer(A.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,ne.tex),r.useProgram(m),r.uniform2f(A.texDimensions,L,L),r.uniform1i(A.positionTex,0),r.uniformMatrix4fv(A.matrix,!1,zo(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,R);{const J=O;O=ne,ne=J}requestAnimationFrame(he)}requestAnimationFrame(he)}return He(()=>e()),[]}class Ai extends $e{constructor(e){super(),Ie(this,e,xi,_i,Se,{})}}const Zt=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function bi(t,e,i,n){const o=t*e,a=new Array(o).fill(0).map((l,c)=>c),s=new Float32Array(a.map(l=>[Zt(i),Zt(n),0,0]).flat()),r=new Float32Array(a.map(l=>[Zt(-300,300),Zt(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(a),positions:s,velocities:r}}const gi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,wi=`precision highp float;

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

`,Ei=`  attribute float id;
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

`,Ri=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Fi(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=D(`This is the simple particles simulation from
    `),n=p("a"),o=D("webglfundamentals"),a=D(" with the shader code extracted into separate files."),s=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=T(e);i=U(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=T(n);o=U(u,"webglfundamentals"),u.forEach(d),a=U(c," with the shader code extracted into separate files."),c.forEach(d),s=w(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),this.h()},h(){h(n,"target","none"),h(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),h(r,"id","canvas"),je(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(l,c){B(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),B(l,s,c),B(l,r,c)},p:ue,i:ue,o:ue,d(l){l&&d(e),l&&d(s),l&&d(r)}}}function yi(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const a=o.getContext("webgl");if(!a)throw"gl undefined";gn(a);const s=Re(a,[gi,wi]),r=Re(a,[Ei,Ri]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},c={id:a.getAttribLocation(r,"id"),positionTex:a.getUniformLocation(r,"positionTex"),texDimensions:a.getUniformLocation(r,"texDimensions"),matrix:a.getUniformLocation(r,"matrix")},u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const m=300,_=20,{numParticles:A,ids:x,positions:L,velocities:$}=bi(m,_,o.width,o.height),R=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,R),a.bufferData(a.ARRAY_BUFFER,new Float32Array(x),a.STATIC_DRAW),pe(a.canvas);const I=we(a,$,m,_),k=we(a,L,m,_),M=we(a,null,m,_),G=Xe(a,k),K=Xe(a,M);let H={fb:G,tex:k},ee={fb:K,tex:M},Q=0;function X(te){if(!a||!u||!R)throw"Undefined params to render";te*=.001;const q=te-Q;Q=te,pe(a.canvas),n(a,ee,m,_,u,l,H,I,s,q),i(a,m,R,c,ee,r,A);{const E=H;H=ee,ee=E}requestAnimationFrame(X)}requestAnimationFrame(X)}const i=(o,a,s,r,l,c,u)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,s),o.enableVertexAttribArray(r.id),o.vertexAttribPointer(r.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,l.tex),o.useProgram(c),o.uniform2f(r.texDimensions,a,a),o.uniform1i(r.positionTex,0),o.uniformMatrix4fv(r.matrix,!1,zo(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,u)},n=(o,a,s,r,l,c,u,m,_,A)=>{o.bindFramebuffer(o.FRAMEBUFFER,a.fb),o.viewport(0,0,s,r),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(c.position),o.vertexAttribPointer(c.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,u.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,m),o.useProgram(_),o.uniform1i(c.positionTex,0),o.uniform1i(c.velocityTex,1),o.uniform2f(c.texDimensions,s,r),o.uniform2f(c.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(c.deltaTime,A),o.drawArrays(o.TRIANGLES,0,6)};return He(()=>e()),[]}class Di extends $e{constructor(e){super(),Ie(this,e,yi,Fi,Se,{})}}const Ui=`attribute vec2 a_position;

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
`,Li=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Pi(t){let e,i,n,o,a,s,r,l,c,u,m,_;return{c(){e=p("p"),i=D(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=p("code"),o=D("requestAnimationFrame"),a=D(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=g(),r=p("canvas"),l=g(),c=p("button"),u=D("Add position"),this.h()},l(A){e=v(A,"P",{});var x=T(e);i=U(x,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=v(x,"CODE",{});var L=T(n);o=U(L,"requestAnimationFrame"),L.forEach(d),a=U(x,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),x.forEach(d),s=w(A),r=v(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),l=w(A),c=v(A,"BUTTON",{});var $=T(c);u=U($,"Add position"),$.forEach(d),this.h()},h(){h(r,"id","canvas"),je(r,"background-color","black"),h(r,"width","800"),h(r,"height","600")},m(A,x){B(A,e,x),f(e,i),f(e,n),f(n,o),f(e,a),B(A,s,x),B(A,r,x),B(A,l,x),B(A,c,x),f(c,u),m||(_=V(c,"click",t[1]),m=!0)},p:ue,i:ue,o:ue,d(A){A&&d(e),A&&d(s),A&&d(r),A&&d(l),A&&d(c),m=!1,_()}}}function Bi(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";gn(s);const r=Re(s,[Ui,Li]);pe(s.canvas);const l=s.getAttribLocation(r,"a_position"),c=s.getUniformLocation(r,"u_resolution"),u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function m(){if(!s)throw"Undefined params to render";for(let k=0;k<=e.length-2;k+=2)e[k]=(e[k]+Math.random()*2-1)%s.canvas.width,e[k+1]=(e[k+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),pe(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(r),s.uniform2f(c,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,u);const _=2,A=s.FLOAT,x=!1,L=0,$=0;s.vertexAttribPointer(l,_,A,x,L,$);var R=s.POINTS,I=e.length/2;s.drawArrays(R,$,I),requestAnimationFrame(m)}requestAnimationFrame(m)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return He(()=>i()),[n,()=>n()]}class $i extends $e{constructor(e){super(),Ie(this,e,Bi,Pi,Se,{})}}const Ii=`attribute float id;
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
`,Si=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Ot,Xt;const Ci=t=>{Xt=Re(t,[Ii,Si]),Ot={idAttributeLocation:t.getAttribLocation(Xt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Xt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Xt,"u_resolution")}},Mi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;pe(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Xt),e.uniform2f(Ot.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ot.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Ot.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,r=e.FLOAT,l=!1,c=0,u=0;e.vertexAttribPointer(Ot.idAttributeLocation,s,r,l,c,u);const m=e.POINTS,_=o.length;e.drawArrays(m,u,_)};function zi(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=D("Create an array of render-size positions. Store this array in a texture. In each "),n=p("code"),o=D("requestAnimationFrame"),a=D(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=g(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=T(e);i=U(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=v(c,"CODE",{});var u=T(n);o=U(u,"requestAnimationFrame"),u.forEach(d),a=U(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(d),s=w(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),this.h()},h(){h(r,"id","canvas"),je(r,"background-color","black"),h(r,"width",No),h(r,"height",Oo)},m(l,c){B(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),B(l,s,c),B(l,r,c)},p:ue,i:ue,o:ue,d(l){l&&d(e),l&&d(s),l&&d(r)}}}const No=800,Oo=600;function Ni(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";gn(n),pe(n.canvas),Ci(n);const o=[0,1,2,3,4,5,6,7,8,9],a=o.map(r=>[Math.random()*No,Math.random()*Oo,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let l=0;l<=a.length-2;l+=2)a[l]=(a[l]+Math.random()*2-1)%n.canvas.width,a[l+1]=(a[l+1]+Math.random()*0+1)%n.canvas.height;const r=we(n,new Float32Array(a),3,3);Mi({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return He(()=>e()),[]}let Oi=class extends $e{constructor(e){super(),Ie(this,e,Ni,zi,Se,{})}};const Xi=`attribute float id;
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
`,ki=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let kt,Wt,Pn;const Wi=(t,e)=>{Wt=Re(t,[Xi,ki]),kt={idAttributeLocation:t.getAttribLocation(Wt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Wt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Wt,"u_resolution")},Pn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Pn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Yi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Pn),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Wt),e.uniform2f(kt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(kt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(kt.idAttributeLocation);const a=1,s=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(kt.idAttributeLocation,a,s,r,l,c),e.drawArrays(e.POINTS,c,o.length)};function Vi(t,e){const i=new Array(t).fill(0).map((a,s)=>s),n=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),o={width:i.length,height:1};return{ids:i,positions:n,texDimensions:o}}const Hi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,qi=`precision highp float;

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

`;let It,St,Bn,wn,En,io,ro,Yt,ln;const Gi=(t,e)=>{const{positions:i,texDimensions:n}=e;St=Re(t,[Hi,qi]),It={positionAttributeLocation:t.getAttribLocation(St,"position"),positionTexLocation:t.getUniformLocation(St,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(St,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(St,"u_resolution")},Bn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Bn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),wn=we(t,new Float32Array(i),n.width,n.height),En=we(t,null,n.width,n.height),io=Xe(t,wn),ro=Xe(t,En),Yt={fb:io,tex:wn},ln={fb:ro,tex:En}},ji=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,ln.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Bn),e.enableVertexAttribArray(It.positionAttributeLocation),e.vertexAttribPointer(It.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Yt.tex),e.useProgram(St),e.uniform1i(It.positionTexLocation,0),e.uniform2f(It.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(It.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Yt;Yt=ln,ln=n}return Yt.tex};function Ki(t){let e,i,n,o,a,s,r,l,c,u,m,_,A;return{c(){e=p("p"),i=D("Create an array of render-size positions. Store this array in a texture."),n=g(),o=p("p"),a=D("Create 2 textures which will be used to update the positions with a shader. In each "),s=p("code"),r=D("requestAnimationFrame"),l=D(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=g(),u=p("p"),m=D("Finally switch the two textures to read and write in the updated textures"),_=g(),A=p("canvas"),this.h()},l(x){e=v(x,"P",{});var L=T(e);i=U(L,"Create an array of render-size positions. Store this array in a texture."),L.forEach(d),n=w(x),o=v(x,"P",{});var $=T(o);a=U($,"Create 2 textures which will be used to update the positions with a shader. In each "),s=v($,"CODE",{});var R=T(s);r=U(R,"requestAnimationFrame"),R.forEach(d),l=U($,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),$.forEach(d),c=w(x),u=v(x,"P",{});var I=T(u);m=U(I,"Finally switch the two textures to read and write in the updated textures"),I.forEach(d),_=w(x),A=v(x,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(A).forEach(d),this.h()},h(){h(A,"id","canvas"),je(A,"background-color","black"),h(A,"width",Xo),h(A,"height",ko)},m(x,L){B(x,e,L),f(e,i),B(x,n,L),B(x,o,L),f(o,a),f(o,s),f(s,r),f(o,l),B(x,c,L),B(x,u,L),f(u,m),B(x,_,L),B(x,A,L)},p:ue,i:ue,o:ue,d(x){x&&d(e),x&&d(n),x&&d(o),x&&d(c),x&&d(u),x&&d(_),x&&d(A)}}}const Xo=800,ko=600;function Qi(t){function e(){const i=$t();pe(i.canvas);const{ids:n,positions:o,texDimensions:a}=Vi(100,{width:Xo,height:ko});Wi(i,n),Gi(i,{positions:o,texDimensions:a});function s(){pe(i.canvas);const r=ji({gl:i,texDimensions:a});Yi({gl:i,positionTex:r,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return He(()=>e()),[]}let Ji=class extends $e{constructor(e){super(),Ie(this,e,Qi,Ki,Se,{})}};const Zi=`attribute float id;
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
`,er=`precision mediump float;
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
`;let yt,Ct,$n,In;const tr=(t,e)=>{const{ids:i,colors:n}=e;Ct=Re(t,[Zi,er]),yt={idAttributeLocation:t.getAttribLocation(Ct,"id"),colorAttributeLocation:t.getAttribLocation(Ct,"color"),texDimensionsUniformLocation:t.getUniformLocation(Ct,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ct,"u_resolution")},$n=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,$n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),In=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,In),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},nr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,$n),e.vertexAttribPointer(yt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(yt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,In),e.vertexAttribPointer(yt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(yt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Ct),e.uniform2f(yt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(yt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function or(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((s,r)=>r),o=new Array(i).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:l,y:c}=ir(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:o}}const ir=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},rr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ar=`precision highp float;

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

`;let Dt,Ut,Sn,en,Rn,ao,so,Vt,cn,tn;const sr=(t,e)=>{const{positions:i,texDimensions:n}=e;return Ut=Re(t,[rr,ar]),Dt={positionAttributeLocation:t.getAttribLocation(Ut,"position"),positionTexLocation:t.getUniformLocation(Ut,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(Ut,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ut,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ut,"u_resolution")},Sn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Sn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),en=we(t,new Float32Array(i),n.width,n.height),Rn=we(t,null,n.width,n.height),ao=Xe(t,en),so=Xe(t,Rn),Vt={fb:ao,tex:en},cn={fb:so,tex:Rn},en},lr=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();tn||(tn=n-1);const o=n-tn;tn=n,e.bindFramebuffer(e.FRAMEBUFFER,cn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Sn),e.enableVertexAttribArray(Dt.positionAttributeLocation),e.vertexAttribPointer(Dt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Vt.tex),e.useProgram(Ut),e.uniform1i(Dt.positionTexLocation,0),e.uniform1f(Dt.deltaTimeUniformLocation,o),e.uniform2f(Dt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Dt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=Vt;Vt=cn,cn=a}return Vt.tex};function cr(t){let e,i,n,o,a,s,r,l,c,u,m=t[2]?"Play":"Pause",_,A,x,L=t[1]?"Normal Speed":"Slow Mo",$,R,I,k,M=t[4].width*t[4].height+"",G,K,H,ee,Q,X,te,q;return{c(){e=p("p"),i=D("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),a=D(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),_=D(m),A=g(),x=p("button"),$=D(L),R=g(),I=p("span"),k=D("particles: "),G=D(M),K=g(),H=p("label"),ee=D("Smooth steps"),Q=g(),X=p("input"),this.h()},l(E){e=v(E,"P",{});var O=T(e);i=U(O,"Same principle with a shader to update positions and a shader to draw particles."),O.forEach(d),n=w(E),o=v(E,"P",{});var ne=T(o);a=U(ne,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ne.forEach(d),s=w(E),r=v(E,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),l=w(E),c=v(E,"DIV",{});var oe=T(c);u=v(oe,"BUTTON",{});var he=T(u);_=U(he,m),he.forEach(d),A=w(oe),x=v(oe,"BUTTON",{});var F=T(x);$=U(F,L),F.forEach(d),R=w(oe),I=v(oe,"SPAN",{});var le=T(I);k=U(le,"particles: "),G=U(le,M),le.forEach(d),K=w(oe),H=v(oe,"LABEL",{for:!0});var J=T(H);ee=U(J,"Smooth steps"),J.forEach(d),Q=w(oe),X=v(oe,"INPUT",{type:!0,min:!0}),oe.forEach(d),this.h()},h(){h(r,"id","canvas"),je(r,"background-color","black"),h(r,"width",t[3].width),h(r,"height",t[3].height),h(H,"for","steps"),h(X,"type","number"),h(X,"min",0)},m(E,O){B(E,e,O),f(e,i),B(E,n,O),B(E,o,O),f(o,a),B(E,s,O),B(E,r,O),B(E,l,O),B(E,c,O),f(c,u),f(u,_),f(c,A),f(c,x),f(x,$),f(c,R),f(c,I),f(I,k),f(I,G),f(c,K),f(c,H),f(H,ee),f(c,Q),f(c,X),S(X,t[0]),te||(q=[V(u,"click",t[5]),V(x,"click",t[6]),V(X,"input",t[7])],te=!0)},p(E,[O]){O&4&&m!==(m=E[2]?"Play":"Pause")&&Ge(_,m),O&2&&L!==(L=E[1]?"Normal Speed":"Slow Mo")&&Ge($,L),O&1&&C(X.value)!==E[0]&&S(X,E[0])},i:ue,o:ue,d(E){E&&d(e),E&&d(n),E&&d(o),E&&d(s),E&&d(r),E&&d(l),E&&d(c),te=!1,Nt(q)}}}function fr(t,e,i){const n={width:800,height:600},o={width:100,height:100};let a=1,s=!1,r=!0;function l(){const _=$t();pe(_.canvas);const{ids:A,positions:x,colors:L}=or(o,{width:n.width,height:n.height});tr(_,{ids:A,colors:L,texDimensions:o});let $=sr(_,{positions:x,texDimensions:o});function R(){if(pe(_.canvas),!r)for(let I=0;I<a;I++)$=lr({gl:_,texDimensions:o});return nr({gl:_,positionTex:$,textureDimension:o,ids:A}),r?requestAnimationFrame(R):s?setTimeout(()=>requestAnimationFrame(R),1e3):requestAnimationFrame(R)}requestAnimationFrame(R)}He(()=>l());const c=()=>i(2,r=!r),u=()=>i(1,s=!s);function m(){a=C(this.value),i(0,a)}return[a,s,r,n,o,c,u,m]}class ur extends $e{constructor(e){super(),Ie(this,e,fr,cr,Se,{})}}const dr=`attribute float id;
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
`,mr=`precision mediump float;
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
`;let Lt,Mt,Cn,Mn;const hr=(t,e)=>{const{ids:i,colors:n}=e;Mt=Re(t,[dr,mr]),Lt={idAttributeLocation:t.getAttribLocation(Mt,"id"),colorAttributeLocation:t.getAttribLocation(Mt,"color"),texDimensionsUniformLocation:t.getUniformLocation(Mt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Mt,"u_resolution")},Cn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Cn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Mn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Mn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},pr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Cn),e.vertexAttribPointer(Lt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Lt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Mn),e.vertexAttribPointer(Lt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Lt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Mt),e.uniform2f(Lt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Lt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function vr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="disk"){const{x:u,y:m}=_r(i,20);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Tr(i,550);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=xr(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=lo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=lo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Tr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},_r=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},xr=(t,e,i)=>{const n=zn(e,0,i,0,t.width,!1),o=zn(e,0,i,0,t.height,!1);return{x:n,y:o}},lo=(t,e,i,n)=>{const o=zn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},zn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?co(s,n,o):co(s,o,n):s},co=function(t,e,i){return Math.max(Math.min(t,i),e)},Ar=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,br=`precision highp float;

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

`;let nt,ot,Nn,nn,Fn,fo,uo,Ht,fn;const gr=(t,e)=>{const{positions:i,texDimensions:n}=e;return ot=Re(t,[Ar,br]),nt={positionAttributeLocation:t.getAttribLocation(ot,"position"),positionTexLocation:t.getUniformLocation(ot,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ot,"interactionRange"),dragUniformLocation:t.getUniformLocation(ot,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ot,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ot,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ot,"u_resolution")},Nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),nn=we(t,new Float32Array(i),n.width,n.height),Fn=we(t,null,n.width,n.height),fo=Xe(t,nn),uo=Xe(t,Fn),Ht={fb:fo,tex:nn},fn={fb:uo,tex:Fn},nn},wr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,fn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Nn),e.enableVertexAttribArray(nt.positionAttributeLocation),e.vertexAttribPointer(nt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ht.tex),e.useProgram(ot),e.uniform1i(nt.positionTexLocation,0),e.uniform1f(nt.dragUniformLocation,o),e.uniform1f(nt.interactionRangeUniformLocation,n),e.uniform1f(nt.deltaTimeUniformLocation,a),e.uniform2f(nt.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(nt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Ht;Ht=fn,fn=s}return Ht.tex};function Er(t){let e,i,n,o,a,s,r,l,c,u,m=t[2]?"Play":"Pause",_,A,x,L=t[1]?"Normal Speed":"Slow Mo",$,R,I,k,M=t[5].width*t[5].height+"",G,K,H,ee,Q,X,te,q,E,O,ne,oe,he,F,le,J,ie,be,_e,W,ye,ce,ae,De,xe,Y,Ue,de,fe,Pe;return{c(){e=p("p"),i=D("Same principle with a shader to update positions and a shader to draw particles."),n=g(),o=p("p"),a=D(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=g(),r=p("canvas"),l=g(),c=p("div"),u=p("button"),_=D(m),A=g(),x=p("button"),$=D(L),R=g(),I=p("span"),k=D("particles: "),G=D(M),K=g(),H=p("label"),ee=D("Smooth steps"),Q=g(),X=p("input"),te=g(),q=p("div"),E=p("ul"),O=p("li"),ne=p("label"),oe=D("Interaction Range"),he=g(),F=p("input"),le=g(),J=p("li"),ie=p("label"),be=D("Drag"),_e=g(),W=p("input"),ye=g(),ce=p("li"),ae=p("label"),De=D("Time step"),xe=g(),Y=p("input"),Ue=g(),de=p("ul"),this.h()},l(z){e=v(z,"P",{});var N=T(e);i=U(N,"Same principle with a shader to update positions and a shader to draw particles."),N.forEach(d),n=w(z),o=v(z,"P",{});var Ce=T(o);a=U(Ce,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Ce.forEach(d),s=w(z),r=v(z,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),l=w(z),c=v(z,"DIV",{});var y=T(c);u=v(y,"BUTTON",{});var Z=T(u);_=U(Z,m),Z.forEach(d),A=w(y),x=v(y,"BUTTON",{});var Me=T(x);$=U(Me,L),Me.forEach(d),R=w(y),I=v(y,"SPAN",{});var Be=T(I);k=U(Be,"particles: "),G=U(Be,M),Be.forEach(d),K=w(y),H=v(y,"LABEL",{for:!0});var j=T(H);ee=U(j,"Smooth steps"),j.forEach(d),Q=w(y),X=v(y,"INPUT",{type:!0,min:!0}),y.forEach(d),te=w(z),q=v(z,"DIV",{});var ze=T(q);E=v(ze,"UL",{});var me=T(E);O=v(me,"LI",{});var Fe=T(O);ne=v(Fe,"LABEL",{for:!0});var Ne=T(ne);oe=U(Ne,"Interaction Range"),Ne.forEach(d),he=w(Fe),F=v(Fe,"INPUT",{id:!0,type:!0,min:!0}),Fe.forEach(d),le=w(me),J=v(me,"LI",{});var re=T(J);ie=v(re,"LABEL",{for:!0});var Ae=T(ie);be=U(Ae,"Drag"),Ae.forEach(d),_e=w(re),W=v(re,"INPUT",{id:!0,type:!0,min:!0}),re.forEach(d),ye=w(me),ce=v(me,"LI",{});var Te=T(ce);ae=v(Te,"LABEL",{for:!0});var Oe=T(ae);De=U(Oe,"Time step"),Oe.forEach(d),xe=w(Te),Y=v(Te,"INPUT",{id:!0,type:!0,min:!0}),Te.forEach(d),Ue=w(me),de=v(me,"UL",{}),T(de).forEach(d),me.forEach(d),ze.forEach(d),this.h()},h(){h(r,"id","canvas"),je(r,"background-color","black"),h(r,"width",t[4].width),h(r,"height",t[4].height),h(H,"for","steps"),h(X,"type","number"),h(X,"min",0),h(ne,"for","interactionRange"),h(F,"id","interactionRange"),h(F,"type","number"),h(F,"min",0),h(ie,"for","drag"),h(W,"id","drag"),h(W,"type","number"),h(W,"min",0),h(ae,"for","deltaTime"),h(Y,"id","deltaTime"),h(Y,"type","number"),h(Y,"min",0)},m(z,N){B(z,e,N),f(e,i),B(z,n,N),B(z,o,N),f(o,a),B(z,s,N),B(z,r,N),B(z,l,N),B(z,c,N),f(c,u),f(u,_),f(c,A),f(c,x),f(x,$),f(c,R),f(c,I),f(I,k),f(I,G),f(c,K),f(c,H),f(H,ee),f(c,Q),f(c,X),S(X,t[0]),B(z,te,N),B(z,q,N),f(q,E),f(E,O),f(O,ne),f(ne,oe),f(O,he),f(O,F),S(F,t[3].interactionRange),f(E,le),f(E,J),f(J,ie),f(ie,be),f(J,_e),f(J,W),S(W,t[3].drag),f(E,ye),f(E,ce),f(ce,ae),f(ae,De),f(ce,xe),f(ce,Y),S(Y,t[3].timeStep),f(E,Ue),f(E,de),fe||(Pe=[V(u,"click",t[6]),V(x,"click",t[7]),V(X,"input",t[8]),V(F,"input",t[9]),V(W,"input",t[10]),V(Y,"input",t[11])],fe=!0)},p(z,[N]){N&4&&m!==(m=z[2]?"Play":"Pause")&&Ge(_,m),N&2&&L!==(L=z[1]?"Normal Speed":"Slow Mo")&&Ge($,L),N&1&&C(X.value)!==z[0]&&S(X,z[0]),N&8&&C(F.value)!==z[3].interactionRange&&S(F,z[3].interactionRange),N&8&&C(W.value)!==z[3].drag&&S(W,z[3].drag),N&8&&C(Y.value)!==z[3].timeStep&&S(Y,z[3].timeStep)},i:ue,o:ue,d(z){z&&d(e),z&&d(n),z&&d(o),z&&d(s),z&&d(r),z&&d(l),z&&d(c),z&&d(te),z&&d(q),fe=!1,Nt(Pe)}}}function Rr(t,e,i){const n={width:800,height:600},o={width:10,height:10};let a=1,s=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const $=$t();pe($.canvas);const{ids:R,positions:I,colors:k}=vr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"circle"});hr($,{ids:R,colors:k,texDimensions:o});let M=gr($,{positions:I,texDimensions:o});function G(){if(pe($.canvas),!r)for(let K=0;K<a;K++)M=wr({gl:$,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return pr({gl:$,positionTex:M,textureDimension:o,ids:R}),r?requestAnimationFrame(G):s?setTimeout(()=>requestAnimationFrame(G),1e3):requestAnimationFrame(G)}requestAnimationFrame(G)}He(()=>c());const u=()=>i(2,r=!r),m=()=>i(1,s=!s);function _(){a=C(this.value),i(0,a)}function A(){l.interactionRange=C(this.value),i(3,l)}function x(){l.drag=C(this.value),i(3,l)}function L(){l.timeStep=C(this.value),i(3,l)}return[a,s,r,l,n,o,u,m,_,A,x,L]}class Fr extends $e{constructor(e){super(),Ie(this,e,Rr,Er,Se,{})}}const yr=`attribute float id;
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
`,Dr=`precision mediump float;
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
`;let Pt,zt,On,Xn;const Ur=(t,e)=>{const{ids:i,colors:n}=e;zt=Re(t,[yr,Dr]),Pt={idAttributeLocation:t.getAttribLocation(zt,"id"),colorAttributeLocation:t.getAttribLocation(zt,"color"),texDimensionsUniformLocation:t.getUniformLocation(zt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(zt,"u_resolution")},On=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,On),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Xn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Xn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Lr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,On),e.vertexAttribPointer(Pt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Pt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Xn),e.vertexAttribPointer(Pt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Pt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(zt),e.uniform2f(Pt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Pt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function Pr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Br(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=Ir(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=$r(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Sr(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=mo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=mo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Br=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},$r=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Ir=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Sr=(t,e,i)=>{const n=kn(e,0,i,0,t.width,!1),o=kn(e,0,i,0,t.height,!1);return{x:n,y:o}},mo=(t,e,i,n)=>{const o=kn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},kn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?ho(s,n,o):ho(s,o,n):s},ho=function(t,e,i){return Math.max(Math.min(t,i),e)},Cr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Mr=`precision highp float;

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

`;let it,rt,Wn,on,yn,po,vo,qt,un;const zr=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Mr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return rt=Re(t,[Cr,o]),it={positionAttributeLocation:t.getAttribLocation(rt,"position"),positionTexLocation:t.getUniformLocation(rt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(rt,"interactionRange"),dragUniformLocation:t.getUniformLocation(rt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(rt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(rt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(rt,"u_resolution")},Wn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Wn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),on=we(t,new Float32Array(i),n.width,n.height),yn=we(t,null,n.width,n.height),po=Xe(t,on),vo=Xe(t,yn),qt={fb:po,tex:on},un={fb:vo,tex:yn},on},Nr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,un.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Wn),e.enableVertexAttribArray(it.positionAttributeLocation),e.vertexAttribPointer(it.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,qt.tex),e.useProgram(rt),e.uniform1i(it.positionTexLocation,0),e.uniform1f(it.dragUniformLocation,o),e.uniform1f(it.interactionRangeUniformLocation,n),e.uniform1f(it.deltaTimeUniformLocation,a),e.uniform2f(it.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(it.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=qt;qt=un,un=s}return qt.tex};function Or(t){let e,i,n,o,a,s,r,l,c,u,m,_,A,x=t[2]?"Play":"Pause",L,$,R,I=t[1]?"Normal Speed":"Slow Mo",k,M,G,K,H=t[5].width*t[5].height+"",ee,Q,X,te,q,E,O,ne,oe,he,F,le,J,ie,be,_e,W,ye,ce,ae,De,xe,Y,Ue,de,fe,Pe,z,N,Ce;return{c(){e=p("p"),i=D("This could be a kind of water simulation."),n=g(),o=p("p"),a=D(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),s=g(),r=p("p"),l=D("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=g(),u=p("canvas"),m=g(),_=p("div"),A=p("button"),L=D(x),$=g(),R=p("button"),k=D(I),M=g(),G=p("span"),K=D("particles: "),ee=D(H),Q=g(),X=p("label"),te=D("Smooth steps"),q=g(),E=p("input"),O=g(),ne=p("div"),oe=p("ul"),he=p("li"),F=p("label"),le=D("Interaction Range"),J=g(),ie=p("input"),be=g(),_e=p("li"),W=p("label"),ye=D("Drag"),ce=g(),ae=p("input"),De=g(),xe=p("li"),Y=p("label"),Ue=D("Time step"),de=g(),fe=p("input"),Pe=g(),z=p("ul"),this.h()},l(y){e=v(y,"P",{});var Z=T(e);i=U(Z,"This could be a kind of water simulation."),Z.forEach(d),n=w(y),o=v(y,"P",{});var Me=T(o);a=U(Me,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Me.forEach(d),s=w(y),r=v(y,"P",{});var Be=T(r);l=U(Be,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Be.forEach(d),c=w(y),u=v(y,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(u).forEach(d),m=w(y),_=v(y,"DIV",{});var j=T(_);A=v(j,"BUTTON",{});var ze=T(A);L=U(ze,x),ze.forEach(d),$=w(j),R=v(j,"BUTTON",{});var me=T(R);k=U(me,I),me.forEach(d),M=w(j),G=v(j,"SPAN",{});var Fe=T(G);K=U(Fe,"particles: "),ee=U(Fe,H),Fe.forEach(d),Q=w(j),X=v(j,"LABEL",{for:!0});var Ne=T(X);te=U(Ne,"Smooth steps"),Ne.forEach(d),q=w(j),E=v(j,"INPUT",{type:!0,min:!0}),j.forEach(d),O=w(y),ne=v(y,"DIV",{});var re=T(ne);oe=v(re,"UL",{});var Ae=T(oe);he=v(Ae,"LI",{});var Te=T(he);F=v(Te,"LABEL",{for:!0});var Oe=T(F);le=U(Oe,"Interaction Range"),Oe.forEach(d),J=w(Te),ie=v(Te,"INPUT",{id:!0,type:!0,min:!0}),Te.forEach(d),be=w(Ae),_e=v(Ae,"LI",{});var qe=T(_e);W=v(qe,"LABEL",{for:!0});var b=T(W);ye=U(b,"Drag"),b.forEach(d),ce=w(qe),ae=v(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(d),De=w(Ae),xe=v(Ae,"LI",{});var P=T(xe);Y=v(P,"LABEL",{for:!0});var Ee=T(Y);Ue=U(Ee,"Time step"),Ee.forEach(d),de=w(P),fe=v(P,"INPUT",{id:!0,type:!0,min:!0}),P.forEach(d),Pe=w(Ae),z=v(Ae,"UL",{}),T(z).forEach(d),Ae.forEach(d),re.forEach(d),this.h()},h(){h(u,"id","canvas"),je(u,"background-color","black"),h(u,"width",t[4].width),h(u,"height",t[4].height),h(X,"for","steps"),h(E,"type","number"),h(E,"min",0),h(F,"for","interactionRange"),h(ie,"id","interactionRange"),h(ie,"type","number"),h(ie,"min",0),h(W,"for","drag"),h(ae,"id","drag"),h(ae,"type","number"),h(ae,"min",0),h(Y,"for","deltaTime"),h(fe,"id","deltaTime"),h(fe,"type","number"),h(fe,"min",0)},m(y,Z){B(y,e,Z),f(e,i),B(y,n,Z),B(y,o,Z),f(o,a),B(y,s,Z),B(y,r,Z),f(r,l),B(y,c,Z),B(y,u,Z),B(y,m,Z),B(y,_,Z),f(_,A),f(A,L),f(_,$),f(_,R),f(R,k),f(_,M),f(_,G),f(G,K),f(G,ee),f(_,Q),f(_,X),f(X,te),f(_,q),f(_,E),S(E,t[0]),B(y,O,Z),B(y,ne,Z),f(ne,oe),f(oe,he),f(he,F),f(F,le),f(he,J),f(he,ie),S(ie,t[3].interactionRange),f(oe,be),f(oe,_e),f(_e,W),f(W,ye),f(_e,ce),f(_e,ae),S(ae,t[3].drag),f(oe,De),f(oe,xe),f(xe,Y),f(Y,Ue),f(xe,de),f(xe,fe),S(fe,t[3].timeStep),f(oe,Pe),f(oe,z),N||(Ce=[V(A,"click",t[6]),V(R,"click",t[7]),V(E,"input",t[8]),V(ie,"input",t[9]),V(ae,"input",t[10]),V(fe,"input",t[11])],N=!0)},p(y,[Z]){Z&4&&x!==(x=y[2]?"Play":"Pause")&&Ge(L,x),Z&2&&I!==(I=y[1]?"Normal Speed":"Slow Mo")&&Ge(k,I),Z&1&&C(E.value)!==y[0]&&S(E,y[0]),Z&8&&C(ie.value)!==y[3].interactionRange&&S(ie,y[3].interactionRange),Z&8&&C(ae.value)!==y[3].drag&&S(ae,y[3].drag),Z&8&&C(fe.value)!==y[3].timeStep&&S(fe,y[3].timeStep)},i:ue,o:ue,d(y){y&&d(e),y&&d(n),y&&d(o),y&&d(s),y&&d(r),y&&d(c),y&&d(u),y&&d(m),y&&d(_),y&&d(O),y&&d(ne),N=!1,Nt(Ce)}}}function Xr(t,e,i){const n={width:800,height:600},o={width:500,height:20};let a=1,s=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const $=$t();pe($.canvas);const{ids:R,positions:I,colors:k}=Pr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Ur($,{ids:R,colors:k,texDimensions:o});let M=zr($,{positions:I,texDimensions:o});function G(){if(pe($.canvas),!r)for(let K=0;K<a;K++)M=Nr({gl:$,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Lr({gl:$,positionTex:M,textureDimension:o,ids:R}),r?requestAnimationFrame(G):s?setTimeout(()=>requestAnimationFrame(G),1e3):requestAnimationFrame(G)}requestAnimationFrame(G)}He(()=>c());const u=()=>i(2,r=!r),m=()=>i(1,s=!s);function _(){a=C(this.value),i(0,a)}function A(){l.interactionRange=C(this.value),i(3,l)}function x(){l.drag=C(this.value),i(3,l)}function L(){l.timeStep=C(this.value),i(3,l)}return[a,s,r,l,n,o,u,m,_,A,x,L]}class kr extends $e{constructor(e){super(),Ie(this,e,Xr,Or,Se,{})}}const Wr=`attribute float id;
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
`,Yr=`precision mediump float;
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
`;let bt,Bt,Yn,Vn;const Vr=(t,e)=>{const{ids:i,colors:n}=e;Bt=Re(t,[Wr,Yr]),bt={idAttributeLocation:t.getAttribLocation(Bt,"id"),colorAttributeLocation:t.getAttribLocation(Bt,"color"),sizeUniformLocation:t.getUniformLocation(Bt,"size"),texDimensionsUniformLocation:t.getUniformLocation(Bt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Bt,"worldDimensions")},Yn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Yn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Vn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Vn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Hr=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Yn),e.vertexAttribPointer(bt.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(bt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Vn),e.vertexAttribPointer(bt.colorAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(bt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Bt),e.uniform1f(bt.sizeUniformLocation,a),e.uniform2f(bt.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(bt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,m,s.length)};function qr(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Gr(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=Kr(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=jr(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Qr(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=To(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=To(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Gr=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},jr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Kr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Qr=(t,e,i)=>{const n=Hn(e,0,i,0,t.width,!1),o=Hn(e,0,i,0,t.height,!1);return{x:n,y:o}},To=(t,e,i,n)=>{const o=Hn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Hn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?_o(s,n,o):_o(s,o,n):s},_o=function(t,e,i){return Math.max(Math.min(t,i),e)},Jr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Zr=`precision highp float;

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

`;let at,st,qn,rn,Dn,xo,Ao,Gt,dn;const ea=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Zr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return st=Re(t,[Jr,o]),at={positionAttributeLocation:t.getAttribLocation(st,"position"),positionTexLocation:t.getUniformLocation(st,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(st,"interactionRange"),dragUniformLocation:t.getUniformLocation(st,"drag"),deltaTimeUniformLocation:t.getUniformLocation(st,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(st,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(st,"worldDimensions")},qn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,qn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),rn=we(t,new Float32Array(i),n.width,n.height),Dn=we(t,null,n.width,n.height),xo=Xe(t,rn),Ao=Xe(t,Dn),Gt={fb:xo,tex:rn},dn={fb:Ao,tex:Dn},rn},ta=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,dn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,qn),e.enableVertexAttribArray(at.positionAttributeLocation),e.vertexAttribPointer(at.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Gt.tex),e.useProgram(st),e.uniform1i(at.positionTexLocation,0),e.uniform1f(at.dragUniformLocation,a),e.uniform1f(at.interactionRangeUniformLocation,o),e.uniform1f(at.deltaTimeUniformLocation,s),e.uniform2f(at.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(at.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Gt;Gt=dn,dn=r}return Gt.tex};function na(t){let e,i,n,o,a,s,r,l=t[3]?"Play":"Pause",c,u,m,_=t[2]?"Normal Speed":"Slow Mo",A,x,L,$,R=t[6].width*t[6].height+"",I,k,M,G,K,H,ee,Q,X,te,q,E,O,ne,oe,he,F,le,J,ie,be,_e,W,ye,ce,ae,De,xe,Y,Ue,de,fe,Pe,z,N,Ce,y,Z,Me,Be,j,ze,me,Fe,Ne,re,Ae,Te,Oe,qe;return{c(){e=p("p"),i=D(`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),n=g(),o=p("canvas"),a=g(),s=p("div"),r=p("button"),c=D(l),u=g(),m=p("button"),A=D(_),x=g(),L=p("span"),$=D("particles: "),I=D(R),k=g(),M=p("label"),G=D("Smooth steps"),K=g(),H=p("input"),ee=g(),Q=p("button"),X=D("Reset"),te=g(),q=p("div"),E=p("ul"),O=p("li"),ne=p("label"),oe=D("Interaction Range"),he=g(),F=p("input"),le=g(),J=p("li"),ie=p("label"),be=D("Drag"),_e=g(),W=p("input"),ye=g(),ce=p("li"),ae=p("label"),De=D("Time step"),xe=g(),Y=p("input"),Ue=g(),de=p("li"),fe=p("label"),Pe=D("Particles size"),z=g(),N=p("input"),Ce=g(),y=p("li"),Z=p("label"),Me=D("World: width"),Be=g(),j=p("input"),ze=g(),me=p("label"),Fe=D("height"),Ne=g(),re=p("input"),Ae=g(),Te=p("ul"),this.h()},l(b){e=v(b,"P",{});var P=T(e);i=U(P,`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),P.forEach(d),n=w(b),o=v(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(o).forEach(d),a=w(b),s=v(b,"DIV",{});var Ee=T(s);r=v(Ee,"BUTTON",{});var ut=T(r);c=U(ut,l),ut.forEach(d),u=w(Ee),m=v(Ee,"BUTTON",{});var Ke=T(m);A=U(Ke,_),Ke.forEach(d),x=w(Ee),L=v(Ee,"SPAN",{});var tt=T(L);$=U(tt,"particles: "),I=U(tt,R),tt.forEach(d),k=w(Ee),M=v(Ee,"LABEL",{for:!0});var dt=T(M);G=U(dt,"Smooth steps"),dt.forEach(d),K=w(Ee),H=v(Ee,"INPUT",{type:!0,min:!0}),ee=w(Ee),Q=v(Ee,"BUTTON",{});var mt=T(Q);X=U(mt,"Reset"),mt.forEach(d),Ee.forEach(d),te=w(b),q=v(b,"DIV",{});var ht=T(q);E=v(ht,"UL",{});var se=T(E);O=v(se,"LI",{});var ke=T(O);ne=v(ke,"LABEL",{for:!0});var pt=T(ne);oe=U(pt,"Interaction Range"),pt.forEach(d),he=w(ke),F=v(ke,"INPUT",{id:!0,type:!0,min:!0}),ke.forEach(d),le=w(se),J=v(se,"LI",{});var We=T(J);ie=v(We,"LABEL",{for:!0});var vt=T(ie);be=U(vt,"Drag"),vt.forEach(d),_e=w(We),W=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),ye=w(se),ce=v(se,"LI",{});var Ye=T(ce);ae=v(Ye,"LABEL",{for:!0});var Tt=T(ae);De=U(Tt,"Time step"),Tt.forEach(d),xe=w(Ye),Y=v(Ye,"INPUT",{id:!0,type:!0,min:!0}),Ye.forEach(d),Ue=w(se),de=v(se,"LI",{});var Ve=T(de);fe=v(Ve,"LABEL",{for:!0});var _t=T(fe);Pe=U(_t,"Particles size"),_t.forEach(d),z=w(Ve),N=v(Ve,"INPUT",{id:!0,type:!0,min:!0}),Ve.forEach(d),Ce=w(se),y=v(se,"LI",{});var ve=T(y);Z=v(ve,"LABEL",{for:!0});var xt=T(Z);Me=U(xt,"World: width"),xt.forEach(d),Be=w(ve),j=v(ve,"INPUT",{id:!0,type:!0,min:!0}),ze=w(ve),me=v(ve,"LABEL",{for:!0});var At=T(me);Fe=U(At,"height"),At.forEach(d),Ne=w(ve),re=v(ve,"INPUT",{id:!0,type:!0,min:!0}),ve.forEach(d),Ae=w(se),Te=v(se,"UL",{}),T(Te).forEach(d),se.forEach(d),ht.forEach(d),this.h()},h(){h(o,"id","canvas"),je(o,"background-color","black"),h(o,"width",t[5].width),h(o,"height",t[5].height),h(M,"for","steps"),h(H,"type","number"),h(H,"min",0),h(ne,"for","interactionRange"),h(F,"id","interactionRange"),h(F,"type","number"),h(F,"min",0),h(ie,"for","drag"),h(W,"id","drag"),h(W,"type","number"),h(W,"min",0),h(ae,"for","deltaTime"),h(Y,"id","deltaTime"),h(Y,"type","number"),h(Y,"min",0),h(fe,"for","particlesSize"),h(N,"id","particlesSize"),h(N,"type","number"),h(N,"min",0),h(Z,"for","worldWidth"),h(j,"id","worldWidth"),h(j,"type","number"),h(j,"min",0),h(me,"for","worldHeight"),h(re,"id","worldHeight"),h(re,"type","number"),h(re,"min",0)},m(b,P){B(b,e,P),f(e,i),B(b,n,P),B(b,o,P),B(b,a,P),B(b,s,P),f(s,r),f(r,c),f(s,u),f(s,m),f(m,A),f(s,x),f(s,L),f(L,$),f(L,I),f(s,k),f(s,M),f(M,G),f(s,K),f(s,H),S(H,t[1]),f(s,ee),f(s,Q),f(Q,X),B(b,te,P),B(b,q,P),f(q,E),f(E,O),f(O,ne),f(ne,oe),f(O,he),f(O,F),S(F,t[4].interactionRange),f(E,le),f(E,J),f(J,ie),f(ie,be),f(J,_e),f(J,W),S(W,t[4].drag),f(E,ye),f(E,ce),f(ce,ae),f(ae,De),f(ce,xe),f(ce,Y),S(Y,t[4].timeStep),f(E,Ue),f(E,de),f(de,fe),f(fe,Pe),f(de,z),f(de,N),S(N,t[4].particlesSize),f(E,Ce),f(E,y),f(y,Z),f(Z,Me),f(y,Be),f(y,j),S(j,t[0].width),f(y,ze),f(y,me),f(me,Fe),f(y,Ne),f(y,re),S(re,t[0].height),f(E,Ae),f(E,Te),Oe||(qe=[V(r,"click",t[8]),V(m,"click",t[9]),V(H,"input",t[10]),V(Q,"click",t[11]),V(F,"input",t[12]),V(W,"input",t[13]),V(Y,"input",t[14]),V(N,"input",t[15]),V(j,"input",t[16]),V(re,"input",t[17])],Oe=!0)},p(b,[P]){P&8&&l!==(l=b[3]?"Play":"Pause")&&Ge(c,l),P&4&&_!==(_=b[2]?"Normal Speed":"Slow Mo")&&Ge(A,_),P&2&&C(H.value)!==b[1]&&S(H,b[1]),P&16&&C(F.value)!==b[4].interactionRange&&S(F,b[4].interactionRange),P&16&&C(W.value)!==b[4].drag&&S(W,b[4].drag),P&16&&C(Y.value)!==b[4].timeStep&&S(Y,b[4].timeStep),P&16&&C(N.value)!==b[4].particlesSize&&S(N,b[4].particlesSize),P&1&&C(j.value)!==b[0].width&&S(j,b[0].width),P&1&&C(re.value)!==b[0].height&&S(re,b[0].height)},i:ue,o:ue,d(b){b&&d(e),b&&d(n),b&&d(o),b&&d(a),b&&d(s),b&&d(te),b&&d(q),Oe=!1,Nt(qe)}}}function oa(t,e,i){const n={width:800,height:600},o={width:1200,height:500},a={width:200,height:20};let s=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:20};let u,m;function _(){cancelAnimationFrame(m),u=$t(),pe(u.canvas);const{ids:H,positions:ee,colors:Q}=qr({texDimensions:a,worldDimensions:o,mode:"disk"});Vr(u,{ids:H,colors:Q,texDimensions:a});let X=ea(u,{positions:ee,texDimensions:a});function te(){if(pe(u.canvas),!l)for(let q=0;q<s;q++)X=ta({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Hr({gl:u,positionTex:X,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:H}),r?setTimeout(()=>m=requestAnimationFrame(te),1e3):m=requestAnimationFrame(te)}m=requestAnimationFrame(te)}He(()=>_());const A=()=>i(3,l=!l),x=()=>i(2,r=!r);function L(){s=C(this.value),i(1,s)}const $=()=>_();function R(){c.interactionRange=C(this.value),i(4,c)}function I(){c.drag=C(this.value),i(4,c)}function k(){c.timeStep=C(this.value),i(4,c)}function M(){c.particlesSize=C(this.value),i(4,c)}function G(){o.width=C(this.value),i(0,o)}function K(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,_,A,x,L,$,R,I,k,M,G,K]}class ia extends $e{constructor(e){super(),Ie(this,e,oa,na,Se,{})}}const ra=`attribute float id;

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
`,aa=`precision mediump float;
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
`;let gt,wt,Gn,Wo;const sa=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;wt=Re(t,[ra,aa]),gt={idAttributeLocation:t.getAttribLocation(wt,"id"),sizeUniformLocation:t.getUniformLocation(wt,"size"),texDimensionsUniformLocation:t.getUniformLocation(wt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(wt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(wt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(wt,"colorTex")},Gn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const a=n.map(s=>[s,0,0,0]).flat();Wo=we(t,new Float32Array(a),o.width,o.height)},la=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Gn),e.vertexAttribPointer(gt.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(gt.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Wo),e.useProgram(wt),e.uniform1f(gt.sizeUniformLocation,a),e.uniform2f(gt.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(gt.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(gt.positionTexUniformLocation,0),e.uniform1i(gt.colorTexUniformLocation,1),e.drawArrays(e.POINTS,m,s.length)};function ca(t,e,i){function n(){const a=t.getElementById(e);a&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),a.width=i.width,a.height=i.height)}function o(){const a=t.getElementById(e);a&&(t.fullscreenElement||a.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function fa(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*3)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=ua(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=ma(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=da(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=ha(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=bo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=bo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const ua=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},da=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},ma=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},ha=(t,e,i)=>{const n=jn(e,0,i,0,t.width,!1),o=jn(e,0,i,0,t.height,!1);return{x:n,y:o}},bo=(t,e,i,n)=>{const o=jn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},jn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?go(s,n,o):go(s,o,n):s},go=function(t,e,i){return Math.max(Math.min(t,i),e)},pa=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,va=`precision highp float;

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

`;let Qe,Je,Kn,an,Un,wo,Eo,jt,mn,Yo;const Ta=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,a=va.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));Je=Re(t,[pa,a]),Qe={positionAttributeLocation:t.getAttribLocation(Je,"position"),interactionRangeUniformLocation:t.getUniformLocation(Je,"interactionRange"),dragUniformLocation:t.getUniformLocation(Je,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Je,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Je,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Je,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Je,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Je,"colorTex")},Kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),an=we(t,new Float32Array(i),o.width,o.height),Un=we(t,null,o.width,o.height);const s=n.map(r=>[r,0,0,0]).flat();return Yo=we(t,new Float32Array(s),o.width,o.height),wo=Xe(t,an),Eo=Xe(t,Un),jt={fb:wo,tex:an},mn={fb:Eo,tex:Un},an},_a=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,mn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Kn),e.enableVertexAttribArray(Qe.positionAttributeLocation),e.vertexAttribPointer(Qe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,jt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Yo),e.useProgram(Je),e.uniform1i(Qe.positionTexUniformLocation,0),e.uniform1i(Qe.colorTexUniformLocation,1),e.uniform1f(Qe.dragUniformLocation,a),e.uniform1f(Qe.interactionRangeUniformLocation,o),e.uniform1f(Qe.deltaTimeUniformLocation,s),e.uniform2f(Qe.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Qe.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=jt;jt=mn,mn=r}return jt.tex};function xa(t){let e,i,n,o,a=t[3]?"Play":"Pause",s,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,m,_,A,x=t[6].width*t[6].height+"",L,$,R,I,k,M,G,K,H,ee,Q,X,te,q,E,O,ne,oe,he,F,le,J,ie,be,_e,W,ye,ce,ae,De,xe,Y,Ue,de,fe,Pe,z,N,Ce,y,Z,Me,Be,j,ze,me,Fe,Ne,re,Ae,Te,Oe,qe;return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),s=D(a),r=g(),l=p("button"),u=D(c),m=g(),_=p("span"),A=D("particles: "),L=D(x),$=g(),R=p("label"),I=D("Smooth steps"),k=g(),M=p("input"),G=g(),K=p("button"),H=D("Reset"),ee=g(),Q=p("button"),X=D("Fullscreen"),te=g(),q=p("div"),E=p("ul"),O=p("li"),ne=p("label"),oe=D("Interaction Range"),he=g(),F=p("input"),le=g(),J=p("li"),ie=p("label"),be=D("Drag"),_e=g(),W=p("input"),ye=g(),ce=p("li"),ae=p("label"),De=D("Time step"),xe=g(),Y=p("input"),Ue=g(),de=p("li"),fe=p("label"),Pe=D("Particles size"),z=g(),N=p("input"),Ce=g(),y=p("li"),Z=p("label"),Me=D("World: width"),Be=g(),j=p("input"),ze=g(),me=p("label"),Fe=D("height"),Ne=g(),re=p("input"),Ae=g(),Te=p("ul"),this.h()},l(b){e=v(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(e).forEach(d),i=w(b),n=v(b,"DIV",{});var P=T(n);o=v(P,"BUTTON",{});var Ee=T(o);s=U(Ee,a),Ee.forEach(d),r=w(P),l=v(P,"BUTTON",{});var ut=T(l);u=U(ut,c),ut.forEach(d),m=w(P),_=v(P,"SPAN",{});var Ke=T(_);A=U(Ke,"particles: "),L=U(Ke,x),Ke.forEach(d),$=w(P),R=v(P,"LABEL",{for:!0});var tt=T(R);I=U(tt,"Smooth steps"),tt.forEach(d),k=w(P),M=v(P,"INPUT",{type:!0,min:!0}),G=w(P),K=v(P,"BUTTON",{});var dt=T(K);H=U(dt,"Reset"),dt.forEach(d),ee=w(P),Q=v(P,"BUTTON",{});var mt=T(Q);X=U(mt,"Fullscreen"),mt.forEach(d),P.forEach(d),te=w(b),q=v(b,"DIV",{});var ht=T(q);E=v(ht,"UL",{});var se=T(E);O=v(se,"LI",{});var ke=T(O);ne=v(ke,"LABEL",{for:!0});var pt=T(ne);oe=U(pt,"Interaction Range"),pt.forEach(d),he=w(ke),F=v(ke,"INPUT",{id:!0,type:!0,min:!0}),ke.forEach(d),le=w(se),J=v(se,"LI",{});var We=T(J);ie=v(We,"LABEL",{for:!0});var vt=T(ie);be=U(vt,"Drag"),vt.forEach(d),_e=w(We),W=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),ye=w(se),ce=v(se,"LI",{});var Ye=T(ce);ae=v(Ye,"LABEL",{for:!0});var Tt=T(ae);De=U(Tt,"Time step"),Tt.forEach(d),xe=w(Ye),Y=v(Ye,"INPUT",{id:!0,type:!0,min:!0}),Ye.forEach(d),Ue=w(se),de=v(se,"LI",{});var Ve=T(de);fe=v(Ve,"LABEL",{for:!0});var _t=T(fe);Pe=U(_t,"Particles size"),_t.forEach(d),z=w(Ve),N=v(Ve,"INPUT",{id:!0,type:!0,min:!0}),Ve.forEach(d),Ce=w(se),y=v(se,"LI",{});var ve=T(y);Z=v(ve,"LABEL",{for:!0});var xt=T(Z);Me=U(xt,"World: width"),xt.forEach(d),Be=w(ve),j=v(ve,"INPUT",{id:!0,type:!0,min:!0}),ze=w(ve),me=v(ve,"LABEL",{for:!0});var At=T(me);Fe=U(At,"height"),At.forEach(d),Ne=w(ve),re=v(ve,"INPUT",{id:!0,type:!0,min:!0}),ve.forEach(d),Ae=w(se),Te=v(se,"UL",{}),T(Te).forEach(d),se.forEach(d),ht.forEach(d),this.h()},h(){h(e,"id","canvas"),je(e,"background-color","black"),h(e,"width",t[5].width),h(e,"height",t[5].height),h(R,"for","steps"),h(M,"type","number"),h(M,"min",0),h(ne,"for","interactionRange"),h(F,"id","interactionRange"),h(F,"type","number"),h(F,"min",0),h(ie,"for","drag"),h(W,"id","drag"),h(W,"type","number"),h(W,"min",0),h(ae,"for","deltaTime"),h(Y,"id","deltaTime"),h(Y,"type","number"),h(Y,"min",0),h(fe,"for","particlesSize"),h(N,"id","particlesSize"),h(N,"type","number"),h(N,"min",0),h(Z,"for","worldWidth"),h(j,"id","worldWidth"),h(j,"type","number"),h(j,"min",0),h(me,"for","worldHeight"),h(re,"id","worldHeight"),h(re,"type","number"),h(re,"min",0)},m(b,P){B(b,e,P),B(b,i,P),B(b,n,P),f(n,o),f(o,s),f(n,r),f(n,l),f(l,u),f(n,m),f(n,_),f(_,A),f(_,L),f(n,$),f(n,R),f(R,I),f(n,k),f(n,M),S(M,t[1]),f(n,G),f(n,K),f(K,H),f(n,ee),f(n,Q),f(Q,X),B(b,te,P),B(b,q,P),f(q,E),f(E,O),f(O,ne),f(ne,oe),f(O,he),f(O,F),S(F,t[4].interactionRange),f(E,le),f(E,J),f(J,ie),f(ie,be),f(J,_e),f(J,W),S(W,t[4].drag),f(E,ye),f(E,ce),f(ce,ae),f(ae,De),f(ce,xe),f(ce,Y),S(Y,t[4].timeStep),f(E,Ue),f(E,de),f(de,fe),f(fe,Pe),f(de,z),f(de,N),S(N,t[4].particlesSize),f(E,Ce),f(E,y),f(y,Z),f(Z,Me),f(y,Be),f(y,j),S(j,t[0].width),f(y,ze),f(y,me),f(me,Fe),f(y,Ne),f(y,re),S(re,t[0].height),f(E,Ae),f(E,Te),Oe||(qe=[V(o,"click",t[9]),V(l,"click",t[10]),V(M,"input",t[11]),V(K,"click",t[12]),V(Q,"click",t[8]),V(F,"input",t[13]),V(W,"input",t[14]),V(Y,"input",t[15]),V(N,"input",t[16]),V(j,"input",t[17]),V(re,"input",t[18])],Oe=!0)},p(b,[P]){P&8&&a!==(a=b[3]?"Play":"Pause")&&Ge(s,a),P&4&&c!==(c=b[2]?"Normal Speed":"Slow Mo")&&Ge(u,c),P&2&&C(M.value)!==b[1]&&S(M,b[1]),P&16&&C(F.value)!==b[4].interactionRange&&S(F,b[4].interactionRange),P&16&&C(W.value)!==b[4].drag&&S(W,b[4].drag),P&16&&C(Y.value)!==b[4].timeStep&&S(Y,b[4].timeStep),P&16&&C(N.value)!==b[4].particlesSize&&S(N,b[4].particlesSize),P&1&&C(j.value)!==b[0].width&&S(j,b[0].width),P&1&&C(re.value)!==b[0].height&&S(re,b[0].height)},i:ue,o:ue,d(b){b&&d(e),b&&d(i),b&&d(n),b&&d(te),b&&d(q),Oe=!1,Nt(qe)}}}function Aa(t,e,i){const n={width:800,height:600},o={width:800,height:600},a={width:500,height:10};let s=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let u,m;function _(){cancelAnimationFrame(m),u=$t(),pe(u.canvas);const{ids:ee,positions:Q,colors:X}=fa({texDimensions:a,worldDimensions:o,mode:"disk"});sa(u,{ids:ee,colors:X,texDimensions:a});let te=Ta(u,{positions:Q,colors:X,texDimensions:a});function q(){if(!l)for(let E=0;E<s;E++)te=_a({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return la({gl:u,positionTex:te,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:ee}),r?setTimeout(()=>m=requestAnimationFrame(q),1e3):m=requestAnimationFrame(q)}m=requestAnimationFrame(q)}const{enableFullscreen:A}=ca(document,"canvas",n);document.addEventListener("keydown",ee=>{ee.code==="Space"&&(i(3,l=!l),ee.preventDefault())}),He(()=>_());const x=()=>i(3,l=!l),L=()=>i(2,r=!r);function $(){s=C(this.value),i(1,s)}const R=()=>_();function I(){c.interactionRange=C(this.value),i(4,c)}function k(){c.drag=C(this.value),i(4,c)}function M(){c.timeStep=C(this.value),i(4,c)}function G(){c.particlesSize=C(this.value),i(4,c)}function K(){o.width=C(this.value),i(0,o)}function H(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,_,A,x,L,$,R,I,k,M,G,K,H]}class ba extends $e{constructor(e){super(),Ie(this,e,Aa,xa,Se,{})}}const ga=`attribute float id;

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
`,wa=`precision mediump float;
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
`;let Et,Rt,Qn,Vo;const Ea=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;Rt=Re(t,[ga,wa]),Et={idAttributeLocation:t.getAttribLocation(Rt,"id"),sizeUniformLocation:t.getUniformLocation(Rt,"size"),texDimensionsUniformLocation:t.getUniformLocation(Rt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Rt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Rt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Rt,"colorTex")},Qn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Qn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const a=n.map(s=>[s,0,0,0]).flat();Vo=we(t,new Float32Array(a),o.width,o.height)},Ra=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,m=0;pe(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Qn),e.vertexAttribPointer(Et.idAttributeLocation,r,l,c,u,m),e.enableVertexAttribArray(Et.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Vo),e.useProgram(Rt),e.uniform1f(Et.sizeUniformLocation,a),e.uniform2f(Et.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(Et.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Et.positionTexUniformLocation,0),e.uniform1i(Et.colorTexUniformLocation,1),e.drawArrays(e.POINTS,m,s.length)};function Fa(t,e,i){function n(){const a=t.getElementById(e);a&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),a.width=i.width,a.height=i.height)}function o(){const a=t.getElementById(e);a&&(t.fullscreenElement||a.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function ya(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*3)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Da(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:m}=La(i,200);return[u,m,0,0]}if(n==="square"){const{x:u,y:m}=Ua(i,300);return[u,m,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Pa(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Ro(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Ro(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Da=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Ua=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},La=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Pa=(t,e,i)=>{const n=Jn(e,0,i,0,t.width,!1),o=Jn(e,0,i,0,t.height,!1);return{x:n,y:o}},Ro=(t,e,i,n)=>{const o=Jn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Jn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Fo(s,n,o):Fo(s,o,n):s},Fo=function(t,e,i){return Math.max(Math.min(t,i),e)},Ba=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,$a=`precision highp float;

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

// const vec2 gravity = vec2(0.0, 0.5);
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
                    colorCoef = -1.0;
                }

                direction = direction + (diff * diffCoef * colorCoef);
            }
        }
    }
    direction = (direction * deltaTime) / drag;
    direction = direction + gravity;

    vec2 newPosition = position + direction;
    // newPosition.x = euclideanModulo(position.x + direction.x, worldDimensions.x);
    newPosition = euclideanModulo(position + direction, worldDimensions);

    // if (newPosition.y >= worldDimensions.y - 5.0) {
    //     newPosition.y = worldDimensions.y - 7.0;
    // }

    // if (newPosition.x >= worldDimensions.x - 5.0) {
    //     newPosition.x = worldDimensions.x - 7.0;
    // }

    // if (newPosition.x <  5.0) {
    //     newPosition.x = 7.0;
    // }

    gl_FragColor = vec4(newPosition, 0, 1);
}

`;let Ze,et,Zn,sn,Ln,yo,Do,Kt,hn,Ho;const Ia=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,a=$a.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));et=Re(t,[Ba,a]),Ze={positionAttributeLocation:t.getAttribLocation(et,"position"),interactionRangeUniformLocation:t.getUniformLocation(et,"interactionRange"),dragUniformLocation:t.getUniformLocation(et,"drag"),deltaTimeUniformLocation:t.getUniformLocation(et,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(et,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(et,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(et,"positionTex"),colorTexUniformLocation:t.getUniformLocation(et,"colorTex")},Zn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Zn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),sn=we(t,new Float32Array(i),o.width,o.height),Ln=we(t,null,o.width,o.height);const s=n.map(r=>[r,0,0,0]).flat();return Ho=we(t,new Float32Array(s),o.width,o.height),yo=Xe(t,sn),Do=Xe(t,Ln),Kt={fb:yo,tex:sn},hn={fb:Do,tex:Ln},sn},Sa=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,hn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Zn),e.enableVertexAttribArray(Ze.positionAttributeLocation),e.vertexAttribPointer(Ze.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Kt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Ho),e.useProgram(et),e.uniform1i(Ze.positionTexUniformLocation,0),e.uniform1i(Ze.colorTexUniformLocation,1),e.uniform1f(Ze.dragUniformLocation,a),e.uniform1f(Ze.interactionRangeUniformLocation,o),e.uniform1f(Ze.deltaTimeUniformLocation,s),e.uniform2f(Ze.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ze.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Kt;Kt=hn,hn=r}return Kt.tex};function Ca(t){let e,i,n,o,a=t[3]?"Play":"Pause",s,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,m,_,A,x=t[6].width*t[6].height+"",L,$,R,I,k,M,G,K,H,ee,Q,X,te,q,E,O,ne,oe,he,F,le,J,ie,be,_e,W,ye,ce,ae,De,xe,Y,Ue,de,fe,Pe,z,N,Ce,y,Z,Me,Be,j,ze,me,Fe,Ne,re,Ae,Te,Oe,qe;return{c(){e=p("canvas"),i=g(),n=p("div"),o=p("button"),s=D(a),r=g(),l=p("button"),u=D(c),m=g(),_=p("span"),A=D("particles: "),L=D(x),$=g(),R=p("label"),I=D("Smooth steps"),k=g(),M=p("input"),G=g(),K=p("button"),H=D("Reset"),ee=g(),Q=p("button"),X=D("Fullscreen"),te=g(),q=p("div"),E=p("ul"),O=p("li"),ne=p("label"),oe=D("Interaction Range"),he=g(),F=p("input"),le=g(),J=p("li"),ie=p("label"),be=D("Drag"),_e=g(),W=p("input"),ye=g(),ce=p("li"),ae=p("label"),De=D("Time step"),xe=g(),Y=p("input"),Ue=g(),de=p("li"),fe=p("label"),Pe=D("Particles size"),z=g(),N=p("input"),Ce=g(),y=p("li"),Z=p("label"),Me=D("World: width"),Be=g(),j=p("input"),ze=g(),me=p("label"),Fe=D("height"),Ne=g(),re=p("input"),Ae=g(),Te=p("ul"),this.h()},l(b){e=v(b,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(e).forEach(d),i=w(b),n=v(b,"DIV",{});var P=T(n);o=v(P,"BUTTON",{});var Ee=T(o);s=U(Ee,a),Ee.forEach(d),r=w(P),l=v(P,"BUTTON",{});var ut=T(l);u=U(ut,c),ut.forEach(d),m=w(P),_=v(P,"SPAN",{});var Ke=T(_);A=U(Ke,"particles: "),L=U(Ke,x),Ke.forEach(d),$=w(P),R=v(P,"LABEL",{for:!0});var tt=T(R);I=U(tt,"Smooth steps"),tt.forEach(d),k=w(P),M=v(P,"INPUT",{type:!0,min:!0}),G=w(P),K=v(P,"BUTTON",{});var dt=T(K);H=U(dt,"Reset"),dt.forEach(d),ee=w(P),Q=v(P,"BUTTON",{});var mt=T(Q);X=U(mt,"Fullscreen"),mt.forEach(d),P.forEach(d),te=w(b),q=v(b,"DIV",{});var ht=T(q);E=v(ht,"UL",{});var se=T(E);O=v(se,"LI",{});var ke=T(O);ne=v(ke,"LABEL",{for:!0});var pt=T(ne);oe=U(pt,"Interaction Range"),pt.forEach(d),he=w(ke),F=v(ke,"INPUT",{id:!0,type:!0,min:!0}),ke.forEach(d),le=w(se),J=v(se,"LI",{});var We=T(J);ie=v(We,"LABEL",{for:!0});var vt=T(ie);be=U(vt,"Drag"),vt.forEach(d),_e=w(We),W=v(We,"INPUT",{id:!0,type:!0,min:!0}),We.forEach(d),ye=w(se),ce=v(se,"LI",{});var Ye=T(ce);ae=v(Ye,"LABEL",{for:!0});var Tt=T(ae);De=U(Tt,"Time step"),Tt.forEach(d),xe=w(Ye),Y=v(Ye,"INPUT",{id:!0,type:!0,min:!0}),Ye.forEach(d),Ue=w(se),de=v(se,"LI",{});var Ve=T(de);fe=v(Ve,"LABEL",{for:!0});var _t=T(fe);Pe=U(_t,"Particles size"),_t.forEach(d),z=w(Ve),N=v(Ve,"INPUT",{id:!0,type:!0,min:!0}),Ve.forEach(d),Ce=w(se),y=v(se,"LI",{});var ve=T(y);Z=v(ve,"LABEL",{for:!0});var xt=T(Z);Me=U(xt,"World: width"),xt.forEach(d),Be=w(ve),j=v(ve,"INPUT",{id:!0,type:!0,min:!0}),ze=w(ve),me=v(ve,"LABEL",{for:!0});var At=T(me);Fe=U(At,"height"),At.forEach(d),Ne=w(ve),re=v(ve,"INPUT",{id:!0,type:!0,min:!0}),ve.forEach(d),Ae=w(se),Te=v(se,"UL",{}),T(Te).forEach(d),se.forEach(d),ht.forEach(d),this.h()},h(){h(e,"id","canvas"),je(e,"background-color","black"),h(e,"width",t[5].width),h(e,"height",t[5].height),h(R,"for","steps"),h(M,"type","number"),h(M,"min",0),h(ne,"for","interactionRange"),h(F,"id","interactionRange"),h(F,"type","number"),h(F,"min",0),h(ie,"for","drag"),h(W,"id","drag"),h(W,"type","number"),h(W,"min",0),h(ae,"for","deltaTime"),h(Y,"id","deltaTime"),h(Y,"type","number"),h(Y,"min",0),h(fe,"for","particlesSize"),h(N,"id","particlesSize"),h(N,"type","number"),h(N,"min",0),h(Z,"for","worldWidth"),h(j,"id","worldWidth"),h(j,"type","number"),h(j,"min",0),h(me,"for","worldHeight"),h(re,"id","worldHeight"),h(re,"type","number"),h(re,"min",0)},m(b,P){B(b,e,P),B(b,i,P),B(b,n,P),f(n,o),f(o,s),f(n,r),f(n,l),f(l,u),f(n,m),f(n,_),f(_,A),f(_,L),f(n,$),f(n,R),f(R,I),f(n,k),f(n,M),S(M,t[1]),f(n,G),f(n,K),f(K,H),f(n,ee),f(n,Q),f(Q,X),B(b,te,P),B(b,q,P),f(q,E),f(E,O),f(O,ne),f(ne,oe),f(O,he),f(O,F),S(F,t[4].interactionRange),f(E,le),f(E,J),f(J,ie),f(ie,be),f(J,_e),f(J,W),S(W,t[4].drag),f(E,ye),f(E,ce),f(ce,ae),f(ae,De),f(ce,xe),f(ce,Y),S(Y,t[4].timeStep),f(E,Ue),f(E,de),f(de,fe),f(fe,Pe),f(de,z),f(de,N),S(N,t[4].particlesSize),f(E,Ce),f(E,y),f(y,Z),f(Z,Me),f(y,Be),f(y,j),S(j,t[0].width),f(y,ze),f(y,me),f(me,Fe),f(y,Ne),f(y,re),S(re,t[0].height),f(E,Ae),f(E,Te),Oe||(qe=[V(o,"click",t[9]),V(l,"click",t[10]),V(M,"input",t[11]),V(K,"click",t[12]),V(Q,"click",t[8]),V(F,"input",t[13]),V(W,"input",t[14]),V(Y,"input",t[15]),V(N,"input",t[16]),V(j,"input",t[17]),V(re,"input",t[18])],Oe=!0)},p(b,[P]){P&8&&a!==(a=b[3]?"Play":"Pause")&&Ge(s,a),P&4&&c!==(c=b[2]?"Normal Speed":"Slow Mo")&&Ge(u,c),P&2&&C(M.value)!==b[1]&&S(M,b[1]),P&16&&C(F.value)!==b[4].interactionRange&&S(F,b[4].interactionRange),P&16&&C(W.value)!==b[4].drag&&S(W,b[4].drag),P&16&&C(Y.value)!==b[4].timeStep&&S(Y,b[4].timeStep),P&16&&C(N.value)!==b[4].particlesSize&&S(N,b[4].particlesSize),P&1&&C(j.value)!==b[0].width&&S(j,b[0].width),P&1&&C(re.value)!==b[0].height&&S(re,b[0].height)},i:ue,o:ue,d(b){b&&d(e),b&&d(i),b&&d(n),b&&d(te),b&&d(q),Oe=!1,Nt(qe)}}}function Ma(t,e,i){const n={width:800,height:600},o={width:1600,height:1200},a={width:500,height:10};let s=10,r=!1,l=!0;const c={interactionRange:30,drag:5,timeStep:10,particlesSize:6};let u,m;function _(){cancelAnimationFrame(m),u=$t(),pe(u.canvas);const{ids:ee,positions:Q,colors:X}=ya({texDimensions:a,worldDimensions:o,mode:"random"});Ea(u,{ids:ee,colors:X,texDimensions:a});let te=Ia(u,{positions:Q,colors:X,texDimensions:a});function q(){if(!l)for(let E=0;E<s;E++)te=Sa({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Ra({gl:u,positionTex:te,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:ee}),r?setTimeout(()=>m=requestAnimationFrame(q),1e3):m=requestAnimationFrame(q)}m=requestAnimationFrame(q)}const{enableFullscreen:A}=Fa(document,"canvas",n);document.addEventListener("keydown",ee=>{ee.code==="Space"&&(i(3,l=!l),ee.preventDefault())}),He(()=>_());const x=()=>i(3,l=!l),L=()=>i(2,r=!r);function $(){s=C(this.value),i(1,s)}const R=()=>_();function I(){c.interactionRange=C(this.value),i(4,c)}function k(){c.drag=C(this.value),i(4,c)}function M(){c.timeStep=C(this.value),i(4,c)}function G(){c.particlesSize=C(this.value),i(4,c)}function K(){o.width=C(this.value),i(0,o)}function H(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,_,A,x,L,$,R,I,k,M,G,K,H]}class za extends $e{constructor(e){super(),Ie(this,e,Ma,Ca,Se,{})}}function Uo(t,e,i){const n=t.slice();return n[1]=e[i],n}function Lo(t,e,i){const n=t.slice();return n[1]=e[i],n}function Na(t){let e;return{c(){e=D("About")},l(i){e=U(i,"About")},m(i,n){B(i,e,n)},d(i){i&&d(e)}}}function Oa(t){let e=t[1].title+"",i;return{c(){i=D(e)},l(n){i=U(n,e)},m(n,o){B(n,i,o)},p:ue,d(n){n&&d(i)}}}function Po(t){let e,i;return e=new Co({props:{$$slots:{default:[Oa]},$$scope:{ctx:t}}}),{c(){lt(e.$$.fragment)},l(n){Ft(e.$$.fragment,n)},m(n,o){ct(e,n,o),i=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){i||(ge(e.$$.fragment,n),i=!0)},o(n){Le(e.$$.fragment,n),i=!1},d(n){ft(e,n)}}}function Xa(t){let e,i,n,o;e=new Co({props:{$$slots:{default:[Na]},$$scope:{ctx:t}}});let a=t[0],s=[];for(let l=0;l<a.length;l+=1)s[l]=Po(Lo(t,a,l));const r=l=>Le(s[l],1,1,()=>{s[l]=null});return{c(){lt(e.$$.fragment),i=g();for(let l=0;l<s.length;l+=1)s[l].c();n=pn()},l(l){Ft(e.$$.fragment,l),i=w(l);for(let c=0;c<s.length;c+=1)s[c].l(l);n=pn()},m(l,c){ct(e,l,c),B(l,i,c);for(let u=0;u<s.length;u+=1)s[u].m(l,c);B(l,n,c),o=!0},p(l,c){const u={};if(c&64&&(u.$$scope={dirty:c,ctx:l}),e.$set(u),c&1){a=l[0];let m;for(m=0;m<a.length;m+=1){const _=Lo(l,a,m);s[m]?(s[m].p(_,c),ge(s[m],1)):(s[m]=Po(_),s[m].c(),ge(s[m],1),s[m].m(n.parentNode,n))}for(An(),m=a.length;m<s.length;m+=1)r(m);bn()}},i(l){if(!o){ge(e.$$.fragment,l);for(let c=0;c<a.length;c+=1)ge(s[c]);o=!0}},o(l){Le(e.$$.fragment,l),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)Le(s[c]);o=!1},d(l){ft(e,l),l&&d(i),Io(s,l),l&&d(n)}}}function ka(t){let e,i;return{c(){e=p("p"),i=D("This page is an experiment to run simulation on the GPU.")},l(n){e=v(n,"P",{});var o=T(e);i=U(o,"This page is an experiment to run simulation on the GPU."),o.forEach(d)},m(n,o){B(n,e,o),f(e,i)},p:ue,d(n){n&&d(e)}}}function Wa(t){let e,i,n;var o=t[1].component;function a(s){return{}}return o&&(e=no(o,a())),{c(){e&&lt(e.$$.fragment),i=g()},l(s){e&&Ft(e.$$.fragment,s),i=w(s)},m(s,r){e&&ct(e,s,r),B(s,i,r),n=!0},p(s,r){if(o!==(o=s[1].component)){if(e){An();const l=e;Le(l.$$.fragment,1,0,()=>{ft(l,1)}),bn()}o?(e=no(o,a()),lt(e.$$.fragment),ge(e.$$.fragment,1),ct(e,i.parentNode,i)):e=null}},i(s){n||(e&&ge(e.$$.fragment,s),n=!0)},o(s){e&&Le(e.$$.fragment,s),n=!1},d(s){e&&ft(e,s),s&&d(i)}}}function Bo(t){let e,i;return e=new Mo({props:{$$slots:{default:[Wa]},$$scope:{ctx:t}}}),{c(){lt(e.$$.fragment)},l(n){Ft(e.$$.fragment,n)},m(n,o){ct(e,n,o),i=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){i||(ge(e.$$.fragment,n),i=!0)},o(n){Le(e.$$.fragment,n),i=!1},d(n){ft(e,n)}}}function Ya(t){let e,i,n,o,a,s;e=new si({props:{$$slots:{default:[Xa]},$$scope:{ctx:t}}}),n=new Mo({props:{$$slots:{default:[ka]},$$scope:{ctx:t}}});let r=t[0],l=[];for(let u=0;u<r.length;u+=1)l[u]=Bo(Uo(t,r,u));const c=u=>Le(l[u],1,1,()=>{l[u]=null});return{c(){lt(e.$$.fragment),i=g(),lt(n.$$.fragment),o=g();for(let u=0;u<l.length;u+=1)l[u].c();a=pn()},l(u){Ft(e.$$.fragment,u),i=w(u),Ft(n.$$.fragment,u),o=w(u);for(let m=0;m<l.length;m+=1)l[m].l(u);a=pn()},m(u,m){ct(e,u,m),B(u,i,m),ct(n,u,m),B(u,o,m);for(let _=0;_<l.length;_+=1)l[_].m(u,m);B(u,a,m),s=!0},p(u,m){const _={};m&64&&(_.$$scope={dirty:m,ctx:u}),e.$set(_);const A={};if(m&64&&(A.$$scope={dirty:m,ctx:u}),n.$set(A),m&1){r=u[0];let x;for(x=0;x<r.length;x+=1){const L=Uo(u,r,x);l[x]?(l[x].p(L,m),ge(l[x],1)):(l[x]=Bo(L),l[x].c(),ge(l[x],1),l[x].m(a.parentNode,a))}for(An(),x=r.length;x<l.length;x+=1)c(x);bn()}},i(u){if(!s){ge(e.$$.fragment,u),ge(n.$$.fragment,u);for(let m=0;m<r.length;m+=1)ge(l[m]);s=!0}},o(u){Le(e.$$.fragment,u),Le(n.$$.fragment,u),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)Le(l[m]);s=!1},d(u){ft(e,u),u&&d(i),ft(n,u),u&&d(o),Io(l,u),u&&d(a)}}}function Va(t){let e,i,n;return i=new ni({props:{$$slots:{default:[Ya]},$$scope:{ctx:t}}}),{c(){e=p("div"),lt(i.$$.fragment)},l(o){e=v(o,"DIV",{});var a=T(e);Ft(i.$$.fragment,a),a.forEach(d)},m(o,a){B(o,e,a),ct(i,e,null),n=!0},p(o,[a]){const s={};a&64&&(s.$$scope={dirty:a,ctx:o}),i.$set(s)},i(o){n||(ge(i.$$.fragment,o),n=!0)},o(o){Le(i.$$.fragment,o),n=!1},d(o){o&&d(e),ft(i)}}}function Ha(t){return[[{title:"test 1",component:vi},{title:"test 2",component:Ai},{title:"test 3",component:Di},{title:"test 4",component:$i},{title:"test 5",component:Oi},{title:"test 6",component:Ji},{title:"test 7",component:ur},{title:"test 8",component:Fr},{title:"test 9",component:kr},{title:"test 10",component:ia},{title:"test 11",component:ba},{title:"test 12",component:za}]]}class qa extends $e{constructor(e){super(),Ie(this,e,Ha,Va,Se,{})}}function Ga(t){let e,i;return e=new qa({}),{c(){lt(e.$$.fragment)},l(n){Ft(e.$$.fragment,n)},m(n,o){ct(e,n,o),i=!0},p:ue,i(n){i||(ge(e.$$.fragment,n),i=!0)},o(n){Le(e.$$.fragment,n),i=!1},d(n){ft(e,n)}}}class Za extends $e{constructor(e){super(),Ie(this,e,null,Ga,Se,{})}}export{Za as default};
