import{S as Me,i as ze,s as Ne,C as xn,k as p,l as v,m as T,h as d,n as m,b as L,K as k,E as gn,F as bn,G as An,f as Fe,t as Ie,H as Jt,R as ti,o as qe,j as ni,Q as oi,T as co,U as Xo,A as ii,V as ri,g as En,d as wn,q as F,a as b,r as y,c as A,D as f,B as me,p as et,O as S,u as Qe,P as C,M as Ot,w as mt,x as yt,y as ht,z as pt,e as _n,L as ko,v as fo}from"../../../chunks/index-ff9e742a.js";import{w as tn}from"../../../chunks/index-84a8d4d9.js";let ai=1;function Wo(){return`svelte-tabs-${ai++}`}function si(t){let e,i,n,o;const a=t[4].default,s=xn(a,t,t[3],null);return{c(){e=p("div"),s&&s.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=T(e);s&&s.l(l),l.forEach(d),this.h()},h(){m(e,"class","svelte-tabs")},m(r,l){L(r,e,l),s&&s.m(e,null),i=!0,n||(o=k(e,"keydown",t[1]),n=!0)},p(r,[l]){s&&s.p&&(!i||l&8)&&gn(s,a,r,r[3],i?An(a,r[3],l,null):bn(r[3]),null)},i(r){i||(Fe(s,r),i=!0)},o(r){Ie(s,r),i=!1},d(r){r&&d(e),s&&s.d(r),n=!1,o()}}}const oo={};function li(t,e,i){const n=t.indexOf(e);t.splice(n,1),i.update(o=>o===e?t[n]||t[t.length-1]:o)}function ci(t,e,i){let n,{$$slots:o={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const r=[],l=[],c=[],u=tn({}),h=tn({}),_=tn(null);Jt(t,_,w=>i(5,n=w));const g=tn(null);function x(w,$,W){w.push($),W.update(M=>M||$),oi(()=>li(w,$,W))}function U(w){const $=l.indexOf(w);_.set(w),g.set(c[$])}ti(oo,{registerTab(w){x(l,w,_)},registerTabElement(w){r.push(w)},registerPanel(w){x(c,w,g)},selectTab:U,selectedTab:_,selectedPanel:g,controls:u,labeledBy:h}),qe(()=>{U(l[s])}),ni(()=>{for(let w=0;w<l.length;w++)u.update($=>({...$,[l[w].id]:c[w].id})),h.update($=>({...$,[c[w].id]:l[w].id}))});async function B(w){if(w.target.classList.contains("svelte-tabs__tab")){let $=l.indexOf(n);switch(w.key){case"ArrowRight":$+=1,$>l.length-1&&($=0),U(l[$]),r[$].focus();break;case"ArrowLeft":$-=1,$<0&&($=l.length-1),U(l[$]),r[$].focus()}}}return t.$$set=w=>{"initialSelectedIndex"in w&&i(2,s=w.initialSelectedIndex),"$$scope"in w&&i(3,a=w.$$scope)},[_,B,s,a,o]}class fi extends Me{constructor(e){super(),ze(this,e,ci,si,Ne,{initialSelectedIndex:2})}}function ui(t){let e,i,n,o,a,s;const r=t[9].default,l=xn(r,t,t[8],null);return{c(){e=p("li"),l&&l.c(),this.h()},l(c){e=v(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=T(e);l&&l.l(u),u.forEach(d),this.h()},h(){m(e,"role","tab"),m(e,"id",t[3].id),m(e,"aria-controls",i=t[2][t[3].id]),m(e,"aria-selected",t[1]),m(e,"tabindex",n=t[1]?0:-1),m(e,"class","svelte-tabs__tab svelte-1fbofsd"),co(e,"svelte-tabs__selected",t[1])},m(c,u){L(c,e,u),l&&l.m(e,null),t[10](e),o=!0,a||(s=k(e,"click",t[11]),a=!0)},p(c,[u]){l&&l.p&&(!o||u&256)&&gn(l,r,c,c[8],o?An(r,c[8],u,null):bn(c[8]),null),(!o||u&4&&i!==(i=c[2][c[3].id]))&&m(e,"aria-controls",i),(!o||u&2)&&m(e,"aria-selected",c[1]),(!o||u&2&&n!==(n=c[1]?0:-1))&&m(e,"tabindex",n),(!o||u&2)&&co(e,"svelte-tabs__selected",c[1])},i(c){o||(Fe(l,c),o=!0)},o(c){Ie(l,c),o=!1},d(c){c&&d(e),l&&l.d(c),t[10](null),a=!1,s()}}}function di(t,e,i){let n,o,{$$slots:a={},$$scope:s}=e,r;const l={id:Wo()},{registerTab:c,registerTabElement:u,selectTab:h,selectedTab:_,controls:g}=Xo(oo);Jt(t,_,w=>i(7,n=w)),Jt(t,g,w=>i(2,o=w));let x;c(l),qe(async()=>{await ii(),u(r)});function U(w){ri[w?"unshift":"push"](()=>{r=w,i(0,r)})}const B=()=>h(l);return t.$$set=w=>{"$$scope"in w&&i(8,s=w.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,x=n===l)},[r,x,o,l,h,_,g,n,s,a,U,B]}class Yo extends Me{constructor(e){super(),ze(this,e,di,ui,Ne,{})}}function mi(t){let e,i;const n=t[1].default,o=xn(n,t,t[0],null);return{c(){e=p("ul"),o&&o.c(),this.h()},l(a){e=v(a,"UL",{role:!0,class:!0});var s=T(e);o&&o.l(s),s.forEach(d),this.h()},h(){m(e,"role","tablist"),m(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){L(a,e,s),o&&o.m(e,null),i=!0},p(a,[s]){o&&o.p&&(!i||s&1)&&gn(o,n,a,a[0],i?An(n,a[0],s,null):bn(a[0]),null)},i(a){i||(Fe(o,a),i=!0)},o(a){Ie(o,a),i=!1},d(a){a&&d(e),o&&o.d(a)}}}function hi(t,e,i){let{$$slots:n={},$$scope:o}=e;return t.$$set=a=>{"$$scope"in a&&i(0,o=a.$$scope)},[o,n]}class pi extends Me{constructor(e){super(),ze(this,e,hi,mi,Ne,{})}}function uo(t){let e;const i=t[6].default,n=xn(i,t,t[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,a){n&&n.m(o,a),e=!0},p(o,a){n&&n.p&&(!e||a&32)&&gn(n,i,o,o[5],e?An(i,o[5],a,null):bn(o[5]),null)},i(o){e||(Fe(n,o),e=!0)},o(o){Ie(n,o),e=!1},d(o){n&&n.d(o)}}}function vi(t){let e,i,n,o=t[1]===t[2]&&uo(t);return{c(){e=p("div"),o&&o.c(),this.h()},l(a){e=v(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=T(e);o&&o.l(s),s.forEach(d),this.h()},h(){m(e,"id",t[2].id),m(e,"aria-labelledby",i=t[0][t[2].id]),m(e,"class","svelte-tabs__tab-panel svelte-epfyet"),m(e,"role","tabpanel")},m(a,s){L(a,e,s),o&&o.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?o?(o.p(a,s),s&2&&Fe(o,1)):(o=uo(a),o.c(),Fe(o,1),o.m(e,null)):o&&(En(),Ie(o,1,1,()=>{o=null}),wn()),(!n||s&1&&i!==(i=a[0][a[2].id]))&&m(e,"aria-labelledby",i)},i(a){n||(Fe(o),n=!0)},o(a){Ie(o),n=!1},d(a){a&&d(e),o&&o.d()}}}function Ti(t,e,i){let n,o,{$$slots:a={},$$scope:s}=e;const r={id:Wo()},{registerPanel:l,selectedPanel:c,labeledBy:u}=Xo(oo);return Jt(t,c,h=>i(1,o=h)),Jt(t,u,h=>i(0,n=h)),l(r),t.$$set=h=>{"$$scope"in h&&i(5,s=h.$$scope)},[n,o,r,c,u,s,a]}class Vo extends Me{constructor(e){super(),ze(this,e,Ti,vi,Ne,{})}}const _i=["VERTEX_SHADER","FRAGMENT_SHADER"];function It(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Rn(e),e}function Rn(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ye(t,e,i,n){const o=t.createTexture();if(!o)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o}function Ye(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function De(t,e,i,n,o){const a=[];for(let r=0;r<e.length;++r){const l=_i[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=xi(t,e[r],l,o);if(!c)throw"Can not create shader";a.push(c)}const s=gi(t,a,i,n,o);if(!s)throw"Can not create program";return s}function xi(t,e,i,n){const o=n||console.log,a=t.createShader(i);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);return o(new Error("*** Error compiling shader '"+a+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(a),null}return a}function gi(t,e,i,n,o){const a=o||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){t.attachShader(s,l)}),i&&i.forEach(function(l,c){t.bindAttribLocation(s,n?n[c]:c,l)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const l=t.getProgramInfoLog(s);return a("Error in program linking:"+l),t.deleteProgram(s),null}return s}function _e(t,e){e=e||1;const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}function bi(t){let e,i,n,o,a,s,r,l,c,u,h,_;return{c(){e=p("p"),i=F(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=b(),o=p("p"),a=F(`It is reusing the code from
    `),s=p("a"),r=F(`this site
    `),l=F("."),c=b(),u=p("ul"),h=b(),_=p("canvas"),this.h()},l(g){e=v(g,"P",{});var x=T(e);i=y(x,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),x.forEach(d),n=A(g),o=v(g,"P",{});var U=T(o);a=y(U,`It is reusing the code from
    `),s=v(U,"A",{target:!0,href:!0});var B=T(s);r=y(B,`this site
    `),B.forEach(d),l=y(U,"."),U.forEach(d),c=A(g),u=v(g,"UL",{id:!0}),T(u).forEach(d),h=A(g),_=v(g,"CANVAS",{id:!0}),T(_).forEach(d),this.h()},h(){m(s,"target","none"),m(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),m(u,"id","result"),m(_,"id","canvas")},m(g,x){L(g,e,x),f(e,i),L(g,n,x),L(g,o,x),f(o,a),f(o,s),f(s,r),f(o,l),L(g,c,x),L(g,u,x),L(g,h,x),L(g,_,x)},p:me,i:me,o:me,d(g){g&&d(e),g&&d(n),g&&d(o),g&&d(c),g&&d(u),g&&d(h),g&&d(_)}}}function Ai(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Ei(t){function e(){const i=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const r=s.getContext("webgl");if(!r)throw"Coulndt get context";const l=De(r,[i,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),u=r.getUniformLocation(l,"srcTex"),h=r.getUniformLocation(l,"srcDimensions"),_=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,_),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const g=3,x=3,U=r.createTexture();r.bindTexture(r.TEXTURE_2D,U),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,g,x,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(u,0),r.uniform2f(h,g,x),r.drawArrays(r.TRIANGLES,0,6);const B=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,B);for(let w=0;w<3*3;++w)Ai(B[w*4])}return qe(e),[]}class wi extends Me{constructor(e){super(),ze(this,e,Ei,bi,Ne,{})}}const Ri=Float32Array;function Ho(t,e,i,n,o,a){const s=new Ri(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(o-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(i+n)/(i-n),s[14]=(o+a)/(o-a),s[15]=1,s}function Fi(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=F(`This is the simple particles simulation from
    `),n=p("a"),o=F("webglfundamentals"),a=F(" directly copied in a svelte component."),s=b(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=T(e);i=y(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=T(n);o=y(u,"webglfundamentals"),u.forEach(d),a=y(c," directly copied in a svelte component."),c.forEach(d),s=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),this.h()},h(){m(n,"target","none"),m(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),m(r,"id","canvas"),et(r,"background-color","black"),m(r,"width","800"),m(r,"height","600")},m(l,c){L(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),L(l,s,c),L(l,r,c)},p:me,i:me,o:me,d(l){l&&d(e),l&&d(s),l&&d(r)}}}function yi(t){function e(){const i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const r=s.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=De(r,[i,n]),h=De(r,[o,a]);if(!u||!h)throw"Can not create programs";const _={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},g={id:r.getAttribLocation(h,"id"),positionTex:r.getUniformLocation(h,"positionTex"),texDimensions:r.getUniformLocation(h,"texDimensions"),matrix:r.getUniformLocation(h,"matrix")},x=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const U=300,B=20,w=U*B,$=new Array(w).fill(0).map((R,ce)=>ce),W=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,W),r.bufferData(r.ARRAY_BUFFER,new Float32Array($),r.STATIC_DRAW),_e(r.canvas);const M=(R,ce)=>(ce===void 0&&(ce=R,R=0),Math.random()*(ce-R)+R),j=new Float32Array($.map(R=>[M(s.width),M(s.height),0,0]).flat()),Q=new Float32Array($.map(R=>[M(-300,300),M(-300,300),0,0]).flat());function H(R,ce,J,re){const Ee=R.createTexture();return R.bindTexture(R.TEXTURE_2D,Ee),R.texImage2D(R.TEXTURE_2D,0,R.RGBA,J,re,0,R.RGBA,R.FLOAT,ce),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MAG_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),Ee}const ie=H(r,Q,U,B),q=H(r,j,U,B),X=H(r,null,U,B);if(!q||!X)throw"Can not create position textures";function ee(R,ce){const J=R.createFramebuffer();return R.bindFramebuffer(R.FRAMEBUFFER,J),R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ce,0),J}const G=ee(r,q),E=ee(r,X);let z={fb:G,tex:q},te={fb:E,tex:X},oe=0;function ve(R){if(!r)return;R*=.001;const ce=R-oe;oe=R,_e(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,te.fb),r.viewport(0,0,U,B),r.bindBuffer(r.ARRAY_BUFFER,x),r.enableVertexAttribArray(_.position),r.vertexAttribPointer(_.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,z.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,ie),r.useProgram(u),r.uniform1i(_.positionTex,0),r.uniform1i(_.velocityTex,1),r.uniform2f(_.texDimensions,U,B),r.uniform2f(_.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(_.deltaTime,ce),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,W),r.enableVertexAttribArray(g.id),r.vertexAttribPointer(g.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,te.tex),r.useProgram(h),r.uniform2f(g.texDimensions,U,U),r.uniform1i(g.positionTex,0),r.uniformMatrix4fv(g.matrix,!1,Ho(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,w);{const J=z;z=te,te=J}requestAnimationFrame(ve)}requestAnimationFrame(ve)}return qe(()=>e()),[]}class Di extends Me{constructor(e){super(),ze(this,e,yi,Fi,Ne,{})}}const nn=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function Ui(t,e,i,n){const o=t*e,a=new Array(o).fill(0).map((l,c)=>c),s=new Float32Array(a.map(l=>[nn(i),nn(n),0,0]).flat()),r=new Float32Array(a.map(l=>[nn(-300,300),nn(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(a),positions:s,velocities:r}}const Li=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Pi=`precision highp float;

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

`,Bi=`  attribute float id;
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

`,$i=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Ii(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=F(`This is the simple particles simulation from
    `),n=p("a"),o=F("webglfundamentals"),a=F(" with the shader code extracted into separate files."),s=b(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=T(e);i=y(c,`This is the simple particles simulation from
    `),n=v(c,"A",{target:!0,href:!0});var u=T(n);o=y(u,"webglfundamentals"),u.forEach(d),a=y(c," with the shader code extracted into separate files."),c.forEach(d),s=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),this.h()},h(){m(n,"target","none"),m(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),m(r,"id","canvas"),et(r,"background-color","black"),m(r,"width","800"),m(r,"height","600")},m(l,c){L(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),L(l,s,c),L(l,r,c)},p:me,i:me,o:me,d(l){l&&d(e),l&&d(s),l&&d(r)}}}function Si(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const a=o.getContext("webgl");if(!a)throw"gl undefined";Rn(a);const s=De(a,[Li,Pi]),r=De(a,[Bi,$i]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},c={id:a.getAttribLocation(r,"id"),positionTex:a.getUniformLocation(r,"positionTex"),texDimensions:a.getUniformLocation(r,"texDimensions"),matrix:a.getUniformLocation(r,"matrix")},u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const h=300,_=20,{numParticles:g,ids:x,positions:U,velocities:B}=Ui(h,_,o.width,o.height),w=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,w),a.bufferData(a.ARRAY_BUFFER,new Float32Array(x),a.STATIC_DRAW),_e(a.canvas);const $=ye(a,B,h,_),W=ye(a,U,h,_),M=ye(a,null,h,_),j=Ye(a,W),Q=Ye(a,M);let H={fb:j,tex:W},ie={fb:Q,tex:M},q=0;function X(ee){if(!a||!u||!w)throw"Undefined params to render";ee*=.001;const G=ee-q;q=ee,_e(a.canvas),n(a,ie,h,_,u,l,H,$,s,G),i(a,h,w,c,ie,r,g);{const E=H;H=ie,ie=E}requestAnimationFrame(X)}requestAnimationFrame(X)}const i=(o,a,s,r,l,c,u)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,s),o.enableVertexAttribArray(r.id),o.vertexAttribPointer(r.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,l.tex),o.useProgram(c),o.uniform2f(r.texDimensions,a,a),o.uniform1i(r.positionTex,0),o.uniformMatrix4fv(r.matrix,!1,Ho(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,u)},n=(o,a,s,r,l,c,u,h,_,g)=>{o.bindFramebuffer(o.FRAMEBUFFER,a.fb),o.viewport(0,0,s,r),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(c.position),o.vertexAttribPointer(c.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,u.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,h),o.useProgram(_),o.uniform1i(c.positionTex,0),o.uniform1i(c.velocityTex,1),o.uniform2f(c.texDimensions,s,r),o.uniform2f(c.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(c.deltaTime,g),o.drawArrays(o.TRIANGLES,0,6)};return qe(()=>e()),[]}class Ci extends Me{constructor(e){super(),ze(this,e,Si,Ii,Ne,{})}}const Mi=`attribute vec2 a_position;

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
`,zi=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Ni(t){let e,i,n,o,a,s,r,l,c,u,h,_;return{c(){e=p("p"),i=F(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=p("code"),o=F("requestAnimationFrame"),a=F(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=b(),r=p("canvas"),l=b(),c=p("button"),u=F("Add position"),this.h()},l(g){e=v(g,"P",{});var x=T(e);i=y(x,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=v(x,"CODE",{});var U=T(n);o=y(U,"requestAnimationFrame"),U.forEach(d),a=y(x,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),x.forEach(d),s=A(g),r=v(g,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),l=A(g),c=v(g,"BUTTON",{});var B=T(c);u=y(B,"Add position"),B.forEach(d),this.h()},h(){m(r,"id","canvas"),et(r,"background-color","black"),m(r,"width","800"),m(r,"height","600")},m(g,x){L(g,e,x),f(e,i),f(e,n),f(n,o),f(e,a),L(g,s,x),L(g,r,x),L(g,l,x),L(g,c,x),f(c,u),h||(_=k(c,"click",t[1]),h=!0)},p:me,i:me,o:me,d(g){g&&d(e),g&&d(s),g&&d(r),g&&d(l),g&&d(c),h=!1,_()}}}function Oi(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Rn(s);const r=De(s,[Mi,zi]);_e(s.canvas);const l=s.getAttribLocation(r,"a_position"),c=s.getUniformLocation(r,"u_resolution"),u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function h(){if(!s)throw"Undefined params to render";for(let W=0;W<=e.length-2;W+=2)e[W]=(e[W]+Math.random()*2-1)%s.canvas.width,e[W+1]=(e[W+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),_e(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(r),s.uniform2f(c,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,u);const _=2,g=s.FLOAT,x=!1,U=0,B=0;s.vertexAttribPointer(l,_,g,x,U,B);var w=s.POINTS,$=e.length/2;s.drawArrays(w,B,$),requestAnimationFrame(h)}requestAnimationFrame(h)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return qe(()=>i()),[n,()=>n()]}class Xi extends Me{constructor(e){super(),ze(this,e,Oi,Ni,Ne,{})}}const ki=`attribute float id;
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
`,Wi=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Xt,kt;const Yi=t=>{kt=De(t,[ki,Wi]),Xt={idAttributeLocation:t.getAttribLocation(kt,"id"),texDimensionsUniformLocation:t.getUniformLocation(kt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(kt,"u_resolution")}},Vi=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;_e(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(kt),e.uniform2f(Xt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Xt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Xt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,r=e.FLOAT,l=!1,c=0,u=0;e.vertexAttribPointer(Xt.idAttributeLocation,s,r,l,c,u);const h=e.POINTS,_=o.length;e.drawArrays(h,u,_)};function Hi(t){let e,i,n,o,a,s,r;return{c(){e=p("p"),i=F("Create an array of render-size positions. Store this array in a texture. In each "),n=p("code"),o=F("requestAnimationFrame"),a=F(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=b(),r=p("canvas"),this.h()},l(l){e=v(l,"P",{});var c=T(e);i=y(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=v(c,"CODE",{});var u=T(n);o=y(u,"requestAnimationFrame"),u.forEach(d),a=y(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(d),s=A(l),r=v(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),this.h()},h(){m(r,"id","canvas"),et(r,"background-color","black"),m(r,"width",qo),m(r,"height",Go)},m(l,c){L(l,e,c),f(e,i),f(e,n),f(n,o),f(e,a),L(l,s,c),L(l,r,c)},p:me,i:me,o:me,d(l){l&&d(e),l&&d(s),l&&d(r)}}}const qo=800,Go=600;function qi(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";Rn(n),_e(n.canvas),Yi(n);const o=[0,1,2,3,4,5,6,7,8,9],a=o.map(r=>[Math.random()*qo,Math.random()*Go,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let l=0;l<=a.length-2;l+=2)a[l]=(a[l]+Math.random()*2-1)%n.canvas.width,a[l+1]=(a[l+1]+Math.random()*0+1)%n.canvas.height;const r=ye(n,new Float32Array(a),3,3);Vi({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(s)}requestAnimationFrame(s)}return qe(()=>e()),[]}let Gi=class extends Me{constructor(e){super(),ze(this,e,qi,Hi,Ne,{})}};const ji=`attribute float id;
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
`,Ki=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Wt,Yt,In;const Qi=(t,e)=>{Yt=De(t,[ji,Ki]),Wt={idAttributeLocation:t.getAttribLocation(Yt,"id"),texDimensionsUniformLocation:t.getUniformLocation(Yt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Yt,"u_resolution")},In=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,In),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Ji=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t;_e(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,In),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Yt),e.uniform2f(Wt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Wt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Wt.idAttributeLocation);const a=1,s=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(Wt.idAttributeLocation,a,s,r,l,c),e.drawArrays(e.POINTS,c,o.length)};function Zi(t,e){const i=new Array(t).fill(0).map((a,s)=>s),n=i.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),o={width:i.length,height:1};return{ids:i,positions:n,texDimensions:o}}const er=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,tr=`precision highp float;

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

`;let St,Ct,Sn,Fn,yn,mo,ho,Vt,un;const nr=(t,e)=>{const{positions:i,texDimensions:n}=e;Ct=De(t,[er,tr]),St={positionAttributeLocation:t.getAttribLocation(Ct,"position"),positionTexLocation:t.getUniformLocation(Ct,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(Ct,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ct,"u_resolution")},Sn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Sn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Fn=ye(t,new Float32Array(i),n.width,n.height),yn=ye(t,null,n.width,n.height),mo=Ye(t,Fn),ho=Ye(t,yn),Vt={fb:mo,tex:Fn},un={fb:ho,tex:yn}},or=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,un.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Sn),e.enableVertexAttribArray(St.positionAttributeLocation),e.vertexAttribPointer(St.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Vt.tex),e.useProgram(Ct),e.uniform1i(St.positionTexLocation,0),e.uniform2f(St.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(St.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Vt;Vt=un,un=n}return Vt.tex};function ir(t){let e,i,n,o,a,s,r,l,c,u,h,_,g;return{c(){e=p("p"),i=F("Create an array of render-size positions. Store this array in a texture."),n=b(),o=p("p"),a=F("Create 2 textures which will be used to update the positions with a shader. In each "),s=p("code"),r=F("requestAnimationFrame"),l=F(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=b(),u=p("p"),h=F("Finally switch the two textures to read and write in the updated textures"),_=b(),g=p("canvas"),this.h()},l(x){e=v(x,"P",{});var U=T(e);i=y(U,"Create an array of render-size positions. Store this array in a texture."),U.forEach(d),n=A(x),o=v(x,"P",{});var B=T(o);a=y(B,"Create 2 textures which will be used to update the positions with a shader. In each "),s=v(B,"CODE",{});var w=T(s);r=y(w,"requestAnimationFrame"),w.forEach(d),l=y(B,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),B.forEach(d),c=A(x),u=v(x,"P",{});var $=T(u);h=y($,"Finally switch the two textures to read and write in the updated textures"),$.forEach(d),_=A(x),g=v(x,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(g).forEach(d),this.h()},h(){m(g,"id","canvas"),et(g,"background-color","black"),m(g,"width",jo),m(g,"height",Ko)},m(x,U){L(x,e,U),f(e,i),L(x,n,U),L(x,o,U),f(o,a),f(o,s),f(s,r),f(o,l),L(x,c,U),L(x,u,U),f(u,h),L(x,_,U),L(x,g,U)},p:me,i:me,o:me,d(x){x&&d(e),x&&d(n),x&&d(o),x&&d(c),x&&d(u),x&&d(_),x&&d(g)}}}const jo=800,Ko=600;function rr(t){function e(){const i=It();_e(i.canvas);const{ids:n,positions:o,texDimensions:a}=Zi(100,{width:jo,height:Ko});Qi(i,n),nr(i,{positions:o,texDimensions:a});function s(){_e(i.canvas);const r=or({gl:i,texDimensions:a});Ji({gl:i,positionTex:r,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return qe(()=>e()),[]}let ar=class extends Me{constructor(e){super(),ze(this,e,rr,ir,Ne,{})}};const sr=`attribute float id;
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
`,lr=`precision mediump float;
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
`;let Dt,Mt,Cn,Mn;const cr=(t,e)=>{const{ids:i,colors:n}=e;Mt=De(t,[sr,lr]),Dt={idAttributeLocation:t.getAttribLocation(Mt,"id"),colorAttributeLocation:t.getAttribLocation(Mt,"color"),texDimensionsUniformLocation:t.getUniformLocation(Mt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Mt,"u_resolution")},Cn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Cn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Mn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Mn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},fr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;_e(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Cn),e.vertexAttribPointer(Dt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Dt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Mn),e.vertexAttribPointer(Dt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Dt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Mt),e.uniform2f(Dt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Dt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function ur(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((s,r)=>r),o=new Array(i).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:l,y:c}=dr(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:o}}const dr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},mr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,hr=`precision highp float;

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

`;let Ut,Lt,zn,on,Dn,po,vo,Ht,dn,rn;const pr=(t,e)=>{const{positions:i,texDimensions:n}=e;return Lt=De(t,[mr,hr]),Ut={positionAttributeLocation:t.getAttribLocation(Lt,"position"),positionTexLocation:t.getUniformLocation(Lt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(Lt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Lt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Lt,"u_resolution")},zn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,zn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),on=ye(t,new Float32Array(i),n.width,n.height),Dn=ye(t,null,n.width,n.height),po=Ye(t,on),vo=Ye(t,Dn),Ht={fb:po,tex:on},dn={fb:vo,tex:Dn},on},vr=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();rn||(rn=n-1);const o=n-rn;rn=n,e.bindFramebuffer(e.FRAMEBUFFER,dn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,zn),e.enableVertexAttribArray(Ut.positionAttributeLocation),e.vertexAttribPointer(Ut.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ht.tex),e.useProgram(Lt),e.uniform1i(Ut.positionTexLocation,0),e.uniform1f(Ut.deltaTimeUniformLocation,o),e.uniform2f(Ut.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Ut.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=Ht;Ht=dn,dn=a}return Ht.tex};function Tr(t){let e,i,n,o,a,s,r,l,c,u,h=t[2]?"Play":"Pause",_,g,x,U=t[1]?"Normal Speed":"Slow Mo",B,w,$,W,M=t[4].width*t[4].height+"",j,Q,H,ie,q,X,ee,G;return{c(){e=p("p"),i=F("Same principle with a shader to update positions and a shader to draw particles."),n=b(),o=p("p"),a=F(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=b(),r=p("canvas"),l=b(),c=p("div"),u=p("button"),_=F(h),g=b(),x=p("button"),B=F(U),w=b(),$=p("span"),W=F("particles: "),j=F(M),Q=b(),H=p("label"),ie=F("Smooth steps"),q=b(),X=p("input"),this.h()},l(E){e=v(E,"P",{});var z=T(e);i=y(z,"Same principle with a shader to update positions and a shader to draw particles."),z.forEach(d),n=A(E),o=v(E,"P",{});var te=T(o);a=y(te,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),te.forEach(d),s=A(E),r=v(E,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),l=A(E),c=v(E,"DIV",{});var oe=T(c);u=v(oe,"BUTTON",{});var ve=T(u);_=y(ve,h),ve.forEach(d),g=A(oe),x=v(oe,"BUTTON",{});var R=T(x);B=y(R,U),R.forEach(d),w=A(oe),$=v(oe,"SPAN",{});var ce=T($);W=y(ce,"particles: "),j=y(ce,M),ce.forEach(d),Q=A(oe),H=v(oe,"LABEL",{for:!0});var J=T(H);ie=y(J,"Smooth steps"),J.forEach(d),q=A(oe),X=v(oe,"INPUT",{type:!0,min:!0}),oe.forEach(d),this.h()},h(){m(r,"id","canvas"),et(r,"background-color","black"),m(r,"width",t[3].width),m(r,"height",t[3].height),m(H,"for","steps"),m(X,"type","number"),m(X,"min",0)},m(E,z){L(E,e,z),f(e,i),L(E,n,z),L(E,o,z),f(o,a),L(E,s,z),L(E,r,z),L(E,l,z),L(E,c,z),f(c,u),f(u,_),f(c,g),f(c,x),f(x,B),f(c,w),f(c,$),f($,W),f($,j),f(c,Q),f(c,H),f(H,ie),f(c,q),f(c,X),S(X,t[0]),ee||(G=[k(u,"click",t[5]),k(x,"click",t[6]),k(X,"input",t[7])],ee=!0)},p(E,[z]){z&4&&h!==(h=E[2]?"Play":"Pause")&&Qe(_,h),z&2&&U!==(U=E[1]?"Normal Speed":"Slow Mo")&&Qe(B,U),z&1&&C(X.value)!==E[0]&&S(X,E[0])},i:me,o:me,d(E){E&&d(e),E&&d(n),E&&d(o),E&&d(s),E&&d(r),E&&d(l),E&&d(c),ee=!1,Ot(G)}}}function _r(t,e,i){const n={width:800,height:600},o={width:100,height:100};let a=1,s=!1,r=!0;function l(){const _=It();_e(_.canvas);const{ids:g,positions:x,colors:U}=ur(o,{width:n.width,height:n.height});cr(_,{ids:g,colors:U,texDimensions:o});let B=pr(_,{positions:x,texDimensions:o});function w(){if(_e(_.canvas),!r)for(let $=0;$<a;$++)B=vr({gl:_,texDimensions:o});return fr({gl:_,positionTex:B,textureDimension:o,ids:g}),r?requestAnimationFrame(w):s?setTimeout(()=>requestAnimationFrame(w),1e3):requestAnimationFrame(w)}requestAnimationFrame(w)}qe(()=>l());const c=()=>i(2,r=!r),u=()=>i(1,s=!s);function h(){a=C(this.value),i(0,a)}return[a,s,r,n,o,c,u,h]}class xr extends Me{constructor(e){super(),ze(this,e,_r,Tr,Ne,{})}}const gr=`attribute float id;
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
`,br=`precision mediump float;
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
`;let Pt,zt,Nn,On;const Ar=(t,e)=>{const{ids:i,colors:n}=e;zt=De(t,[gr,br]),Pt={idAttributeLocation:t.getAttribLocation(zt,"id"),colorAttributeLocation:t.getAttribLocation(zt,"color"),texDimensionsUniformLocation:t.getUniformLocation(zt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(zt,"u_resolution")},Nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),On=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,On),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Er=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;_e(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Nn),e.vertexAttribPointer(Pt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Pt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,On),e.vertexAttribPointer(Pt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Pt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(zt),e.uniform2f(Pt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Pt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function wr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="disk"){const{x:u,y:h}=Fr(i,20);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=Rr(i,550);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=yr(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=To(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=To(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Rr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},Fr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},yr=(t,e,i)=>{const n=Xn(e,0,i,0,t.width,!1),o=Xn(e,0,i,0,t.height,!1);return{x:n,y:o}},To=(t,e,i,n)=>{const o=Xn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Xn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?_o(s,n,o):_o(s,o,n):s},_o=function(t,e,i){return Math.max(Math.min(t,i),e)},Dr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Ur=`precision highp float;

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

`;let st,lt,kn,an,Un,xo,go,qt,mn;const Lr=(t,e)=>{const{positions:i,texDimensions:n}=e;return lt=De(t,[Dr,Ur]),st={positionAttributeLocation:t.getAttribLocation(lt,"position"),positionTexLocation:t.getUniformLocation(lt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(lt,"interactionRange"),dragUniformLocation:t.getUniformLocation(lt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(lt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(lt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(lt,"u_resolution")},kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),an=ye(t,new Float32Array(i),n.width,n.height),Un=ye(t,null,n.width,n.height),xo=Ye(t,an),go=Ye(t,Un),qt={fb:xo,tex:an},mn={fb:go,tex:Un},an},Pr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,mn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,kn),e.enableVertexAttribArray(st.positionAttributeLocation),e.vertexAttribPointer(st.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,qt.tex),e.useProgram(lt),e.uniform1i(st.positionTexLocation,0),e.uniform1f(st.dragUniformLocation,o),e.uniform1f(st.interactionRangeUniformLocation,n),e.uniform1f(st.deltaTimeUniformLocation,a),e.uniform2f(st.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(st.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=qt;qt=mn,mn=s}return qt.tex};function Br(t){let e,i,n,o,a,s,r,l,c,u,h=t[2]?"Play":"Pause",_,g,x,U=t[1]?"Normal Speed":"Slow Mo",B,w,$,W,M=t[5].width*t[5].height+"",j,Q,H,ie,q,X,ee,G,E,z,te,oe,ve,R,ce,J,re,Ee,xe,Y,Pe,fe,ae,Be,ge,V,$e,he,ue,Se;return{c(){e=p("p"),i=F("Same principle with a shader to update positions and a shader to draw particles."),n=b(),o=p("p"),a=F(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=b(),r=p("canvas"),l=b(),c=p("div"),u=p("button"),_=F(h),g=b(),x=p("button"),B=F(U),w=b(),$=p("span"),W=F("particles: "),j=F(M),Q=b(),H=p("label"),ie=F("Smooth steps"),q=b(),X=p("input"),ee=b(),G=p("div"),E=p("ul"),z=p("li"),te=p("label"),oe=F("Interaction Range"),ve=b(),R=p("input"),ce=b(),J=p("li"),re=p("label"),Ee=F("Drag"),xe=b(),Y=p("input"),Pe=b(),fe=p("li"),ae=p("label"),Be=F("Time step"),ge=b(),V=p("input"),$e=b(),he=p("ul"),this.h()},l(N){e=v(N,"P",{});var O=T(e);i=y(O,"Same principle with a shader to update positions and a shader to draw particles."),O.forEach(d),n=A(N),o=v(N,"P",{});var Oe=T(o);a=y(Oe,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Oe.forEach(d),s=A(N),r=v(N,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(r).forEach(d),l=A(N),c=v(N,"DIV",{});var D=T(c);u=v(D,"BUTTON",{});var Z=T(u);_=y(Z,h),Z.forEach(d),g=A(D),x=v(D,"BUTTON",{});var Xe=T(x);B=y(Xe,U),Xe.forEach(d),w=A(D),$=v(D,"SPAN",{});var Ce=T($);W=y(Ce,"particles: "),j=y(Ce,M),Ce.forEach(d),Q=A(D),H=v(D,"LABEL",{for:!0});var K=T(H);ie=y(K,"Smooth steps"),K.forEach(d),q=A(D),X=v(D,"INPUT",{type:!0,min:!0}),D.forEach(d),ee=A(N),G=v(N,"DIV",{});var ke=T(G);E=v(ke,"UL",{});var se=T(E);z=v(se,"LI",{});var be=T(z);te=v(be,"LABEL",{for:!0});var We=T(te);oe=y(We,"Interaction Range"),We.forEach(d),ve=A(be),R=v(be,"INPUT",{id:!0,type:!0,min:!0}),be.forEach(d),ce=A(se),J=v(se,"LI",{});var de=T(J);re=v(de,"LABEL",{for:!0});var pe=T(re);Ee=y(pe,"Drag"),pe.forEach(d),xe=A(de),Y=v(de,"INPUT",{id:!0,type:!0,min:!0}),de.forEach(d),Pe=A(se),fe=v(se,"LI",{});var Ae=T(fe);ae=v(Ae,"LABEL",{for:!0});var Ue=T(ae);Be=y(Ue,"Time step"),Ue.forEach(d),ge=A(Ae),V=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),$e=A(se),he=v(se,"UL",{}),T(he).forEach(d),se.forEach(d),ke.forEach(d),this.h()},h(){m(r,"id","canvas"),et(r,"background-color","black"),m(r,"width",t[4].width),m(r,"height",t[4].height),m(H,"for","steps"),m(X,"type","number"),m(X,"min",0),m(te,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(Y,"id","drag"),m(Y,"type","number"),m(Y,"min",0),m(ae,"for","deltaTime"),m(V,"id","deltaTime"),m(V,"type","number"),m(V,"min",0)},m(N,O){L(N,e,O),f(e,i),L(N,n,O),L(N,o,O),f(o,a),L(N,s,O),L(N,r,O),L(N,l,O),L(N,c,O),f(c,u),f(u,_),f(c,g),f(c,x),f(x,B),f(c,w),f(c,$),f($,W),f($,j),f(c,Q),f(c,H),f(H,ie),f(c,q),f(c,X),S(X,t[0]),L(N,ee,O),L(N,G,O),f(G,E),f(E,z),f(z,te),f(te,oe),f(z,ve),f(z,R),S(R,t[3].interactionRange),f(E,ce),f(E,J),f(J,re),f(re,Ee),f(J,xe),f(J,Y),S(Y,t[3].drag),f(E,Pe),f(E,fe),f(fe,ae),f(ae,Be),f(fe,ge),f(fe,V),S(V,t[3].timeStep),f(E,$e),f(E,he),ue||(Se=[k(u,"click",t[6]),k(x,"click",t[7]),k(X,"input",t[8]),k(R,"input",t[9]),k(Y,"input",t[10]),k(V,"input",t[11])],ue=!0)},p(N,[O]){O&4&&h!==(h=N[2]?"Play":"Pause")&&Qe(_,h),O&2&&U!==(U=N[1]?"Normal Speed":"Slow Mo")&&Qe(B,U),O&1&&C(X.value)!==N[0]&&S(X,N[0]),O&8&&C(R.value)!==N[3].interactionRange&&S(R,N[3].interactionRange),O&8&&C(Y.value)!==N[3].drag&&S(Y,N[3].drag),O&8&&C(V.value)!==N[3].timeStep&&S(V,N[3].timeStep)},i:me,o:me,d(N){N&&d(e),N&&d(n),N&&d(o),N&&d(s),N&&d(r),N&&d(l),N&&d(c),N&&d(ee),N&&d(G),ue=!1,Ot(Se)}}}function $r(t,e,i){const n={width:800,height:600},o={width:10,height:10};let a=1,s=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const B=It();_e(B.canvas);const{ids:w,positions:$,colors:W}=wr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"circle"});Ar(B,{ids:w,colors:W,texDimensions:o});let M=Lr(B,{positions:$,texDimensions:o});function j(){if(_e(B.canvas),!r)for(let Q=0;Q<a;Q++)M=Pr({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Er({gl:B,positionTex:M,textureDimension:o,ids:w}),r?requestAnimationFrame(j):s?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}qe(()=>c());const u=()=>i(2,r=!r),h=()=>i(1,s=!s);function _(){a=C(this.value),i(0,a)}function g(){l.interactionRange=C(this.value),i(3,l)}function x(){l.drag=C(this.value),i(3,l)}function U(){l.timeStep=C(this.value),i(3,l)}return[a,s,r,l,n,o,u,h,_,g,x,U]}class Ir extends Me{constructor(e){super(),ze(this,e,$r,Br,Ne,{})}}const Sr=`attribute float id;
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
`;let Bt,Nt,Wn,Yn;const Mr=(t,e)=>{const{ids:i,colors:n}=e;Nt=De(t,[Sr,Cr]),Bt={idAttributeLocation:t.getAttribLocation(Nt,"id"),colorAttributeLocation:t.getAttribLocation(Nt,"color"),texDimensionsUniformLocation:t.getUniformLocation(Nt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Nt,"u_resolution")},Wn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Wn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Yn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Yn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},zr=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;_e(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Wn),e.vertexAttribPointer(Bt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Bt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Yn),e.vertexAttribPointer(Bt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Bt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Nt),e.uniform2f(Bt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Bt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,o.length)};function Nr(t){const{texDimensions:e,screenDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Or(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=kr(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=Xr(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Wr(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=bo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=bo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Or=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Xr=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},kr=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Wr=(t,e,i)=>{const n=Vn(e,0,i,0,t.width,!1),o=Vn(e,0,i,0,t.height,!1);return{x:n,y:o}},bo=(t,e,i,n)=>{const o=Vn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Vn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Ao(s,n,o):Ao(s,o,n):s},Ao=function(t,e,i){return Math.max(Math.min(t,i),e)},Yr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Vr=`precision highp float;

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

`;let ct,ft,Hn,sn,Ln,Eo,wo,Gt,hn;const Hr=(t,e)=>{const{positions:i,texDimensions:n}=e,o=Vr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return ft=De(t,[Yr,o]),ct={positionAttributeLocation:t.getAttribLocation(ft,"position"),positionTexLocation:t.getUniformLocation(ft,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ft,"interactionRange"),dragUniformLocation:t.getUniformLocation(ft,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ft,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ft,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ft,"u_resolution")},Hn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Hn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),sn=ye(t,new Float32Array(i),n.width,n.height),Ln=ye(t,null,n.width,n.height),Eo=Ye(t,sn),wo=Ye(t,Ln),Gt={fb:Eo,tex:sn},hn={fb:wo,tex:Ln},sn},qr=t=>{const{gl:e,texDimensions:i,interactionRange:n,drag:o,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,hn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Hn),e.enableVertexAttribArray(ct.positionAttributeLocation),e.vertexAttribPointer(ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Gt.tex),e.useProgram(ft),e.uniform1i(ct.positionTexLocation,0),e.uniform1f(ct.dragUniformLocation,o),e.uniform1f(ct.interactionRangeUniformLocation,n),e.uniform1f(ct.deltaTimeUniformLocation,a),e.uniform2f(ct.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Gt;Gt=hn,hn=s}return Gt.tex};function Gr(t){let e,i,n,o,a,s,r,l,c,u,h,_,g,x=t[2]?"Play":"Pause",U,B,w,$=t[1]?"Normal Speed":"Slow Mo",W,M,j,Q,H=t[5].width*t[5].height+"",ie,q,X,ee,G,E,z,te,oe,ve,R,ce,J,re,Ee,xe,Y,Pe,fe,ae,Be,ge,V,$e,he,ue,Se,N,O,Oe;return{c(){e=p("p"),i=F("This could be a kind of water simulation."),n=b(),o=p("p"),a=F(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),s=b(),r=p("p"),l=F("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=b(),u=p("canvas"),h=b(),_=p("div"),g=p("button"),U=F(x),B=b(),w=p("button"),W=F($),M=b(),j=p("span"),Q=F("particles: "),ie=F(H),q=b(),X=p("label"),ee=F("Smooth steps"),G=b(),E=p("input"),z=b(),te=p("div"),oe=p("ul"),ve=p("li"),R=p("label"),ce=F("Interaction Range"),J=b(),re=p("input"),Ee=b(),xe=p("li"),Y=p("label"),Pe=F("Drag"),fe=b(),ae=p("input"),Be=b(),ge=p("li"),V=p("label"),$e=F("Time step"),he=b(),ue=p("input"),Se=b(),N=p("ul"),this.h()},l(D){e=v(D,"P",{});var Z=T(e);i=y(Z,"This could be a kind of water simulation."),Z.forEach(d),n=A(D),o=v(D,"P",{});var Xe=T(o);a=y(Xe,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Xe.forEach(d),s=A(D),r=v(D,"P",{});var Ce=T(r);l=y(Ce,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Ce.forEach(d),c=A(D),u=v(D,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(u).forEach(d),h=A(D),_=v(D,"DIV",{});var K=T(_);g=v(K,"BUTTON",{});var ke=T(g);U=y(ke,x),ke.forEach(d),B=A(K),w=v(K,"BUTTON",{});var se=T(w);W=y(se,$),se.forEach(d),M=A(K),j=v(K,"SPAN",{});var be=T(j);Q=y(be,"particles: "),ie=y(be,H),be.forEach(d),q=A(K),X=v(K,"LABEL",{for:!0});var We=T(X);ee=y(We,"Smooth steps"),We.forEach(d),G=A(K),E=v(K,"INPUT",{type:!0,min:!0}),K.forEach(d),z=A(D),te=v(D,"DIV",{});var de=T(te);oe=v(de,"UL",{});var pe=T(oe);ve=v(pe,"LI",{});var Ae=T(ve);R=v(Ae,"LABEL",{for:!0});var Ue=T(R);ce=y(Ue,"Interaction Range"),Ue.forEach(d),J=A(Ae),re=v(Ae,"INPUT",{id:!0,type:!0,min:!0}),Ae.forEach(d),Ee=A(pe),xe=v(pe,"LI",{});var Ve=T(xe);Y=v(Ve,"LABEL",{for:!0});var P=T(Y);Pe=y(P,"Drag"),P.forEach(d),fe=A(Ve),ae=v(Ve,"INPUT",{id:!0,type:!0,min:!0}),Ve.forEach(d),Be=A(pe),ge=v(pe,"LI",{});var I=T(ge);V=v(I,"LABEL",{for:!0});var we=T(V);$e=y(we,"Time step"),we.forEach(d),he=A(I),ue=v(I,"INPUT",{id:!0,type:!0,min:!0}),I.forEach(d),Se=A(pe),N=v(pe,"UL",{}),T(N).forEach(d),pe.forEach(d),de.forEach(d),this.h()},h(){m(u,"id","canvas"),et(u,"background-color","black"),m(u,"width",t[4].width),m(u,"height",t[4].height),m(X,"for","steps"),m(E,"type","number"),m(E,"min",0),m(R,"for","interactionRange"),m(re,"id","interactionRange"),m(re,"type","number"),m(re,"min",0),m(Y,"for","drag"),m(ae,"id","drag"),m(ae,"type","number"),m(ae,"min",0),m(V,"for","deltaTime"),m(ue,"id","deltaTime"),m(ue,"type","number"),m(ue,"min",0)},m(D,Z){L(D,e,Z),f(e,i),L(D,n,Z),L(D,o,Z),f(o,a),L(D,s,Z),L(D,r,Z),f(r,l),L(D,c,Z),L(D,u,Z),L(D,h,Z),L(D,_,Z),f(_,g),f(g,U),f(_,B),f(_,w),f(w,W),f(_,M),f(_,j),f(j,Q),f(j,ie),f(_,q),f(_,X),f(X,ee),f(_,G),f(_,E),S(E,t[0]),L(D,z,Z),L(D,te,Z),f(te,oe),f(oe,ve),f(ve,R),f(R,ce),f(ve,J),f(ve,re),S(re,t[3].interactionRange),f(oe,Ee),f(oe,xe),f(xe,Y),f(Y,Pe),f(xe,fe),f(xe,ae),S(ae,t[3].drag),f(oe,Be),f(oe,ge),f(ge,V),f(V,$e),f(ge,he),f(ge,ue),S(ue,t[3].timeStep),f(oe,Se),f(oe,N),O||(Oe=[k(g,"click",t[6]),k(w,"click",t[7]),k(E,"input",t[8]),k(re,"input",t[9]),k(ae,"input",t[10]),k(ue,"input",t[11])],O=!0)},p(D,[Z]){Z&4&&x!==(x=D[2]?"Play":"Pause")&&Qe(U,x),Z&2&&$!==($=D[1]?"Normal Speed":"Slow Mo")&&Qe(W,$),Z&1&&C(E.value)!==D[0]&&S(E,D[0]),Z&8&&C(re.value)!==D[3].interactionRange&&S(re,D[3].interactionRange),Z&8&&C(ae.value)!==D[3].drag&&S(ae,D[3].drag),Z&8&&C(ue.value)!==D[3].timeStep&&S(ue,D[3].timeStep)},i:me,o:me,d(D){D&&d(e),D&&d(n),D&&d(o),D&&d(s),D&&d(r),D&&d(c),D&&d(u),D&&d(h),D&&d(_),D&&d(z),D&&d(te),O=!1,Ot(Oe)}}}function jr(t,e,i){const n={width:800,height:600},o={width:500,height:20};let a=1,s=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const B=It();_e(B.canvas);const{ids:w,positions:$,colors:W}=Nr({texDimensions:o,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Mr(B,{ids:w,colors:W,texDimensions:o});let M=Hr(B,{positions:$,texDimensions:o});function j(){if(_e(B.canvas),!r)for(let Q=0;Q<a;Q++)M=qr({gl:B,texDimensions:o,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return zr({gl:B,positionTex:M,textureDimension:o,ids:w}),r?requestAnimationFrame(j):s?setTimeout(()=>requestAnimationFrame(j),1e3):requestAnimationFrame(j)}requestAnimationFrame(j)}qe(()=>c());const u=()=>i(2,r=!r),h=()=>i(1,s=!s);function _(){a=C(this.value),i(0,a)}function g(){l.interactionRange=C(this.value),i(3,l)}function x(){l.drag=C(this.value),i(3,l)}function U(){l.timeStep=C(this.value),i(3,l)}return[a,s,r,l,n,o,u,h,_,g,x,U]}class Kr extends Me{constructor(e){super(),ze(this,e,jr,Gr,Ne,{})}}const Qr=`attribute float id;
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
`,Jr=`precision mediump float;
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
`;let At,$t,qn,Gn;const Zr=(t,e)=>{const{ids:i,colors:n}=e;$t=De(t,[Qr,Jr]),At={idAttributeLocation:t.getAttribLocation($t,"id"),colorAttributeLocation:t.getAttribLocation($t,"color"),sizeUniformLocation:t.getUniformLocation($t,"size"),texDimensionsUniformLocation:t.getUniformLocation($t,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation($t,"worldDimensions")},qn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,qn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),Gn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},ea=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,h=0;_e(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,qn),e.vertexAttribPointer(At.idAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(At.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Gn),e.vertexAttribPointer(At.colorAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(At.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram($t),e.uniform1f(At.sizeUniformLocation,a),e.uniform2f(At.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(At.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,h,s.length)};function ta(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=na(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=ia(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=oa(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=ra(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Ro(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Ro(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const na=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},oa=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},ia=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},ra=(t,e,i)=>{const n=jn(e,0,i,0,t.width,!1),o=jn(e,0,i,0,t.height,!1);return{x:n,y:o}},Ro=(t,e,i,n)=>{const o=jn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},jn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Fo(s,n,o):Fo(s,o,n):s},Fo=function(t,e,i){return Math.max(Math.min(t,i),e)},aa=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,sa=`precision highp float;

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

`;let ut,dt,Kn,ln,Pn,yo,Do,jt,pn;const la=(t,e)=>{const{positions:i,texDimensions:n}=e,o=sa.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return dt=De(t,[aa,o]),ut={positionAttributeLocation:t.getAttribLocation(dt,"position"),positionTexLocation:t.getUniformLocation(dt,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(dt,"interactionRange"),dragUniformLocation:t.getUniformLocation(dt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(dt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(dt,"worldDimensions")},Kn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Kn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),ln=ye(t,new Float32Array(i),n.width,n.height),Pn=ye(t,null,n.width,n.height),yo=Ye(t,ln),Do=Ye(t,Pn),jt={fb:yo,tex:ln},pn={fb:Do,tex:Pn},ln},ca=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,pn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Kn),e.enableVertexAttribArray(ut.positionAttributeLocation),e.vertexAttribPointer(ut.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,jt.tex),e.useProgram(dt),e.uniform1i(ut.positionTexLocation,0),e.uniform1f(ut.dragUniformLocation,a),e.uniform1f(ut.interactionRangeUniformLocation,o),e.uniform1f(ut.deltaTimeUniformLocation,s),e.uniform2f(ut.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(ut.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=jt;jt=pn,pn=r}return jt.tex};function fa(t){let e,i,n,o,a,s,r,l=t[3]?"Play":"Pause",c,u,h,_=t[2]?"Normal Speed":"Slow Mo",g,x,U,B,w=t[6].width*t[6].height+"",$,W,M,j,Q,H,ie,q,X,ee,G,E,z,te,oe,ve,R,ce,J,re,Ee,xe,Y,Pe,fe,ae,Be,ge,V,$e,he,ue,Se,N,O,Oe,D,Z,Xe,Ce,K,ke,se,be,We,de,pe,Ae,Ue,Ve;return{c(){e=p("p"),i=F(`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),n=b(),o=p("canvas"),a=b(),s=p("div"),r=p("button"),c=F(l),u=b(),h=p("button"),g=F(_),x=b(),U=p("span"),B=F("particles: "),$=F(w),W=b(),M=p("label"),j=F("Smooth steps"),Q=b(),H=p("input"),ie=b(),q=p("button"),X=F("Reset"),ee=b(),G=p("div"),E=p("ul"),z=p("li"),te=p("label"),oe=F("Interaction Range"),ve=b(),R=p("input"),ce=b(),J=p("li"),re=p("label"),Ee=F("Drag"),xe=b(),Y=p("input"),Pe=b(),fe=p("li"),ae=p("label"),Be=F("Time step"),ge=b(),V=p("input"),$e=b(),he=p("li"),ue=p("label"),Se=F("Particles size"),N=b(),O=p("input"),Oe=b(),D=p("li"),Z=p("label"),Xe=F("World: width"),Ce=b(),K=p("input"),ke=b(),se=p("label"),be=F("height"),We=b(),de=p("input"),pe=b(),Ae=p("ul"),this.h()},l(P){e=v(P,"P",{});var I=T(e);i=y(I,`Add parameters to the simulation. The dimensions of the world in which the particles evolve can
    be changed as well as their size. With larger particles size the effect looks more like a fluid.`),I.forEach(d),n=A(P),o=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(o).forEach(d),a=A(P),s=v(P,"DIV",{});var we=T(s);r=v(we,"BUTTON",{});var tt=T(r);c=y(tt,l),tt.forEach(d),u=A(we),h=v(we,"BUTTON",{});var nt=T(h);g=y(nt,_),nt.forEach(d),x=A(we),U=v(we,"SPAN",{});var at=T(U);B=y(at,"particles: "),$=y(at,w),at.forEach(d),W=A(we),M=v(we,"LABEL",{for:!0});var ne=T(M);j=y(ne,"Smooth steps"),ne.forEach(d),Q=A(we),H=v(we,"INPUT",{type:!0,min:!0}),ie=A(we),q=v(we,"BUTTON",{});var le=T(q);X=y(le,"Reset"),le.forEach(d),we.forEach(d),ee=A(P),G=v(P,"DIV",{});var vt=T(G);E=v(vt,"UL",{});var Te=T(E);z=v(Te,"LI",{});var Ge=T(z);te=v(Ge,"LABEL",{for:!0});var Tt=T(te);oe=y(Tt,"Interaction Range"),Tt.forEach(d),ve=A(Ge),R=v(Ge,"INPUT",{id:!0,type:!0,min:!0}),Ge.forEach(d),ce=A(Te),J=v(Te,"LI",{});var je=T(J);re=v(je,"LABEL",{for:!0});var _t=T(re);Ee=y(_t,"Drag"),_t.forEach(d),xe=A(je),Y=v(je,"INPUT",{id:!0,type:!0,min:!0}),je.forEach(d),Pe=A(Te),fe=v(Te,"LI",{});var Ke=T(fe);ae=v(Ke,"LABEL",{for:!0});var Le=T(ae);Be=y(Le,"Time step"),Le.forEach(d),ge=A(Ke),V=v(Ke,"INPUT",{id:!0,type:!0,min:!0}),Ke.forEach(d),$e=A(Te),he=v(Te,"LI",{});var He=T(he);ue=v(He,"LABEL",{for:!0});var xt=T(ue);Se=y(xt,"Particles size"),xt.forEach(d),N=A(He),O=v(He,"INPUT",{id:!0,type:!0,min:!0}),He.forEach(d),Oe=A(Te),D=v(Te,"LI",{});var Re=T(D);Z=v(Re,"LABEL",{for:!0});var gt=T(Z);Xe=y(gt,"World: width"),gt.forEach(d),Ce=A(Re),K=v(Re,"INPUT",{id:!0,type:!0,min:!0}),ke=A(Re),se=v(Re,"LABEL",{for:!0});var ot=T(se);be=y(ot,"height"),ot.forEach(d),We=A(Re),de=v(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(d),pe=A(Te),Ae=v(Te,"UL",{}),T(Ae).forEach(d),Te.forEach(d),vt.forEach(d),this.h()},h(){m(o,"id","canvas"),et(o,"background-color","black"),m(o,"width",t[5].width),m(o,"height",t[5].height),m(M,"for","steps"),m(H,"type","number"),m(H,"min",0),m(te,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(Y,"id","drag"),m(Y,"type","number"),m(Y,"min",0),m(ae,"for","deltaTime"),m(V,"id","deltaTime"),m(V,"type","number"),m(V,"min",0),m(ue,"for","particlesSize"),m(O,"id","particlesSize"),m(O,"type","number"),m(O,"min",0),m(Z,"for","worldWidth"),m(K,"id","worldWidth"),m(K,"type","number"),m(K,"min",0),m(se,"for","worldHeight"),m(de,"id","worldHeight"),m(de,"type","number"),m(de,"min",0)},m(P,I){L(P,e,I),f(e,i),L(P,n,I),L(P,o,I),L(P,a,I),L(P,s,I),f(s,r),f(r,c),f(s,u),f(s,h),f(h,g),f(s,x),f(s,U),f(U,B),f(U,$),f(s,W),f(s,M),f(M,j),f(s,Q),f(s,H),S(H,t[1]),f(s,ie),f(s,q),f(q,X),L(P,ee,I),L(P,G,I),f(G,E),f(E,z),f(z,te),f(te,oe),f(z,ve),f(z,R),S(R,t[4].interactionRange),f(E,ce),f(E,J),f(J,re),f(re,Ee),f(J,xe),f(J,Y),S(Y,t[4].drag),f(E,Pe),f(E,fe),f(fe,ae),f(ae,Be),f(fe,ge),f(fe,V),S(V,t[4].timeStep),f(E,$e),f(E,he),f(he,ue),f(ue,Se),f(he,N),f(he,O),S(O,t[4].particlesSize),f(E,Oe),f(E,D),f(D,Z),f(Z,Xe),f(D,Ce),f(D,K),S(K,t[0].width),f(D,ke),f(D,se),f(se,be),f(D,We),f(D,de),S(de,t[0].height),f(E,pe),f(E,Ae),Ue||(Ve=[k(r,"click",t[8]),k(h,"click",t[9]),k(H,"input",t[10]),k(q,"click",t[11]),k(R,"input",t[12]),k(Y,"input",t[13]),k(V,"input",t[14]),k(O,"input",t[15]),k(K,"input",t[16]),k(de,"input",t[17])],Ue=!0)},p(P,[I]){I&8&&l!==(l=P[3]?"Play":"Pause")&&Qe(c,l),I&4&&_!==(_=P[2]?"Normal Speed":"Slow Mo")&&Qe(g,_),I&2&&C(H.value)!==P[1]&&S(H,P[1]),I&16&&C(R.value)!==P[4].interactionRange&&S(R,P[4].interactionRange),I&16&&C(Y.value)!==P[4].drag&&S(Y,P[4].drag),I&16&&C(V.value)!==P[4].timeStep&&S(V,P[4].timeStep),I&16&&C(O.value)!==P[4].particlesSize&&S(O,P[4].particlesSize),I&1&&C(K.value)!==P[0].width&&S(K,P[0].width),I&1&&C(de.value)!==P[0].height&&S(de,P[0].height)},i:me,o:me,d(P){P&&d(e),P&&d(n),P&&d(o),P&&d(a),P&&d(s),P&&d(ee),P&&d(G),Ue=!1,Ot(Ve)}}}function ua(t,e,i){const n={width:800,height:600},o={width:1200,height:500},a={width:200,height:20};let s=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:20};let u,h;function _(){cancelAnimationFrame(h),u=It(),_e(u.canvas);const{ids:H,positions:ie,colors:q}=ta({texDimensions:a,worldDimensions:o,mode:"disk"});Zr(u,{ids:H,colors:q,texDimensions:a});let X=la(u,{positions:ie,texDimensions:a});function ee(){if(_e(u.canvas),!l)for(let G=0;G<s;G++)X=ca({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return ea({gl:u,positionTex:X,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:H}),r?setTimeout(()=>h=requestAnimationFrame(ee),1e3):h=requestAnimationFrame(ee)}h=requestAnimationFrame(ee)}qe(()=>_());const g=()=>i(3,l=!l),x=()=>i(2,r=!r);function U(){s=C(this.value),i(1,s)}const B=()=>_();function w(){c.interactionRange=C(this.value),i(4,c)}function $(){c.drag=C(this.value),i(4,c)}function W(){c.timeStep=C(this.value),i(4,c)}function M(){c.particlesSize=C(this.value),i(4,c)}function j(){o.width=C(this.value),i(0,o)}function Q(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,_,g,x,U,B,w,$,W,M,j,Q]}class da extends Me{constructor(e){super(),ze(this,e,ua,fa,Ne,{})}}const ma=`attribute float id;

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
`,ha=`precision mediump float;
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
`;let Et,wt,Qn,Qo;const pa=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;wt=De(t,[ma,ha]),Et={idAttributeLocation:t.getAttribLocation(wt,"id"),sizeUniformLocation:t.getUniformLocation(wt,"size"),texDimensionsUniformLocation:t.getUniformLocation(wt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(wt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(wt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(wt,"colorTex")},Qn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Qn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const a=n.map(s=>[s,0,0,0]).flat();Qo=ye(t,new Float32Array(a),o.width,o.height)},va=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,h=0;_e(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Qn),e.vertexAttribPointer(Et.idAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(Et.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Qo),e.useProgram(wt),e.uniform1f(Et.sizeUniformLocation,a),e.uniform2f(Et.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(Et.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Et.positionTexUniformLocation,0),e.uniform1i(Et.colorTexUniformLocation,1),e.drawArrays(e.POINTS,h,s.length)};function Ta(t,e,i){function n(){const a=t.getElementById(e);a&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),a.width=i.width,a.height=i.height)}function o(){const a=t.getElementById(e);a&&(t.fullscreenElement||a.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function _a(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*3)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=xa(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=ba(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=ga(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Aa(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Uo(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Uo(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const xa=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},ga=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},ba=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Aa=(t,e,i)=>{const n=Jn(e,0,i,0,t.width,!1),o=Jn(e,0,i,0,t.height,!1);return{x:n,y:o}},Uo=(t,e,i,n)=>{const o=Jn(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},Jn=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Lo(s,n,o):Lo(s,o,n):s},Lo=function(t,e,i){return Math.max(Math.min(t,i),e)},Ea=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,wa=`precision highp float;

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

`;let it,rt,Zn,cn,Bn,Po,Bo,Kt,vn,Jo;const Ra=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,a=wa.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));rt=De(t,[Ea,a]),it={positionAttributeLocation:t.getAttribLocation(rt,"position"),interactionRangeUniformLocation:t.getUniformLocation(rt,"interactionRange"),dragUniformLocation:t.getUniformLocation(rt,"drag"),deltaTimeUniformLocation:t.getUniformLocation(rt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(rt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(rt,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(rt,"positionTex"),colorTexUniformLocation:t.getUniformLocation(rt,"colorTex")},Zn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Zn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),cn=ye(t,new Float32Array(i),o.width,o.height),Bn=ye(t,null,o.width,o.height);const s=n.map(r=>[r,0,0,0]).flat();return Jo=ye(t,new Float32Array(s),o.width,o.height),Po=Ye(t,cn),Bo=Ye(t,Bn),Kt={fb:Po,tex:cn},vn={fb:Bo,tex:Bn},cn},Fa=t=>{const{gl:e,texDimensions:i,worldDimensions:n,interactionRange:o,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,vn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Zn),e.enableVertexAttribArray(it.positionAttributeLocation),e.vertexAttribPointer(it.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Kt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Jo),e.useProgram(rt),e.uniform1i(it.positionTexUniformLocation,0),e.uniform1i(it.colorTexUniformLocation,1),e.uniform1f(it.dragUniformLocation,a),e.uniform1f(it.interactionRangeUniformLocation,o),e.uniform1f(it.deltaTimeUniformLocation,s),e.uniform2f(it.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(it.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=Kt;Kt=vn,vn=r}return Kt.tex};function ya(t){let e,i,n,o,a=t[3]?"Play":"Pause",s,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,h,_,g,x=t[6].width*t[6].height+"",U,B,w,$,W,M,j,Q,H,ie,q,X,ee,G,E,z,te,oe,ve,R,ce,J,re,Ee,xe,Y,Pe,fe,ae,Be,ge,V,$e,he,ue,Se,N,O,Oe,D,Z,Xe,Ce,K,ke,se,be,We,de,pe,Ae,Ue,Ve;return{c(){e=p("canvas"),i=b(),n=p("div"),o=p("button"),s=F(a),r=b(),l=p("button"),u=F(c),h=b(),_=p("span"),g=F("particles: "),U=F(x),B=b(),w=p("label"),$=F("Smooth steps"),W=b(),M=p("input"),j=b(),Q=p("button"),H=F("Reset"),ie=b(),q=p("button"),X=F("Fullscreen"),ee=b(),G=p("div"),E=p("ul"),z=p("li"),te=p("label"),oe=F("Interaction Range"),ve=b(),R=p("input"),ce=b(),J=p("li"),re=p("label"),Ee=F("Drag"),xe=b(),Y=p("input"),Pe=b(),fe=p("li"),ae=p("label"),Be=F("Time step"),ge=b(),V=p("input"),$e=b(),he=p("li"),ue=p("label"),Se=F("Particles size"),N=b(),O=p("input"),Oe=b(),D=p("li"),Z=p("label"),Xe=F("World: width"),Ce=b(),K=p("input"),ke=b(),se=p("label"),be=F("height"),We=b(),de=p("input"),pe=b(),Ae=p("ul"),this.h()},l(P){e=v(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(e).forEach(d),i=A(P),n=v(P,"DIV",{});var I=T(n);o=v(I,"BUTTON",{});var we=T(o);s=y(we,a),we.forEach(d),r=A(I),l=v(I,"BUTTON",{});var tt=T(l);u=y(tt,c),tt.forEach(d),h=A(I),_=v(I,"SPAN",{});var nt=T(_);g=y(nt,"particles: "),U=y(nt,x),nt.forEach(d),B=A(I),w=v(I,"LABEL",{for:!0});var at=T(w);$=y(at,"Smooth steps"),at.forEach(d),W=A(I),M=v(I,"INPUT",{type:!0,min:!0}),j=A(I),Q=v(I,"BUTTON",{});var ne=T(Q);H=y(ne,"Reset"),ne.forEach(d),ie=A(I),q=v(I,"BUTTON",{});var le=T(q);X=y(le,"Fullscreen"),le.forEach(d),I.forEach(d),ee=A(P),G=v(P,"DIV",{});var vt=T(G);E=v(vt,"UL",{});var Te=T(E);z=v(Te,"LI",{});var Ge=T(z);te=v(Ge,"LABEL",{for:!0});var Tt=T(te);oe=y(Tt,"Interaction Range"),Tt.forEach(d),ve=A(Ge),R=v(Ge,"INPUT",{id:!0,type:!0,min:!0}),Ge.forEach(d),ce=A(Te),J=v(Te,"LI",{});var je=T(J);re=v(je,"LABEL",{for:!0});var _t=T(re);Ee=y(_t,"Drag"),_t.forEach(d),xe=A(je),Y=v(je,"INPUT",{id:!0,type:!0,min:!0}),je.forEach(d),Pe=A(Te),fe=v(Te,"LI",{});var Ke=T(fe);ae=v(Ke,"LABEL",{for:!0});var Le=T(ae);Be=y(Le,"Time step"),Le.forEach(d),ge=A(Ke),V=v(Ke,"INPUT",{id:!0,type:!0,min:!0}),Ke.forEach(d),$e=A(Te),he=v(Te,"LI",{});var He=T(he);ue=v(He,"LABEL",{for:!0});var xt=T(ue);Se=y(xt,"Particles size"),xt.forEach(d),N=A(He),O=v(He,"INPUT",{id:!0,type:!0,min:!0}),He.forEach(d),Oe=A(Te),D=v(Te,"LI",{});var Re=T(D);Z=v(Re,"LABEL",{for:!0});var gt=T(Z);Xe=y(gt,"World: width"),gt.forEach(d),Ce=A(Re),K=v(Re,"INPUT",{id:!0,type:!0,min:!0}),ke=A(Re),se=v(Re,"LABEL",{for:!0});var ot=T(se);be=y(ot,"height"),ot.forEach(d),We=A(Re),de=v(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(d),pe=A(Te),Ae=v(Te,"UL",{}),T(Ae).forEach(d),Te.forEach(d),vt.forEach(d),this.h()},h(){m(e,"id","canvas"),et(e,"background-color","black"),m(e,"width",t[5].width),m(e,"height",t[5].height),m(w,"for","steps"),m(M,"type","number"),m(M,"min",0),m(te,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(Y,"id","drag"),m(Y,"type","number"),m(Y,"min",0),m(ae,"for","deltaTime"),m(V,"id","deltaTime"),m(V,"type","number"),m(V,"min",0),m(ue,"for","particlesSize"),m(O,"id","particlesSize"),m(O,"type","number"),m(O,"min",0),m(Z,"for","worldWidth"),m(K,"id","worldWidth"),m(K,"type","number"),m(K,"min",0),m(se,"for","worldHeight"),m(de,"id","worldHeight"),m(de,"type","number"),m(de,"min",0)},m(P,I){L(P,e,I),L(P,i,I),L(P,n,I),f(n,o),f(o,s),f(n,r),f(n,l),f(l,u),f(n,h),f(n,_),f(_,g),f(_,U),f(n,B),f(n,w),f(w,$),f(n,W),f(n,M),S(M,t[1]),f(n,j),f(n,Q),f(Q,H),f(n,ie),f(n,q),f(q,X),L(P,ee,I),L(P,G,I),f(G,E),f(E,z),f(z,te),f(te,oe),f(z,ve),f(z,R),S(R,t[4].interactionRange),f(E,ce),f(E,J),f(J,re),f(re,Ee),f(J,xe),f(J,Y),S(Y,t[4].drag),f(E,Pe),f(E,fe),f(fe,ae),f(ae,Be),f(fe,ge),f(fe,V),S(V,t[4].timeStep),f(E,$e),f(E,he),f(he,ue),f(ue,Se),f(he,N),f(he,O),S(O,t[4].particlesSize),f(E,Oe),f(E,D),f(D,Z),f(Z,Xe),f(D,Ce),f(D,K),S(K,t[0].width),f(D,ke),f(D,se),f(se,be),f(D,We),f(D,de),S(de,t[0].height),f(E,pe),f(E,Ae),Ue||(Ve=[k(o,"click",t[9]),k(l,"click",t[10]),k(M,"input",t[11]),k(Q,"click",t[12]),k(q,"click",t[8]),k(R,"input",t[13]),k(Y,"input",t[14]),k(V,"input",t[15]),k(O,"input",t[16]),k(K,"input",t[17]),k(de,"input",t[18])],Ue=!0)},p(P,[I]){I&8&&a!==(a=P[3]?"Play":"Pause")&&Qe(s,a),I&4&&c!==(c=P[2]?"Normal Speed":"Slow Mo")&&Qe(u,c),I&2&&C(M.value)!==P[1]&&S(M,P[1]),I&16&&C(R.value)!==P[4].interactionRange&&S(R,P[4].interactionRange),I&16&&C(Y.value)!==P[4].drag&&S(Y,P[4].drag),I&16&&C(V.value)!==P[4].timeStep&&S(V,P[4].timeStep),I&16&&C(O.value)!==P[4].particlesSize&&S(O,P[4].particlesSize),I&1&&C(K.value)!==P[0].width&&S(K,P[0].width),I&1&&C(de.value)!==P[0].height&&S(de,P[0].height)},i:me,o:me,d(P){P&&d(e),P&&d(i),P&&d(n),P&&d(ee),P&&d(G),Ue=!1,Ot(Ve)}}}function Da(t,e,i){const n={width:800,height:600},o={width:800,height:600},a={width:500,height:10};let s=10,r=!1,l=!0;const c={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let u,h;function _(){cancelAnimationFrame(h),u=It(),_e(u.canvas);const{ids:ie,positions:q,colors:X}=_a({texDimensions:a,worldDimensions:o,mode:"disk"});pa(u,{ids:ie,colors:X,texDimensions:a});let ee=Ra(u,{positions:q,colors:X,texDimensions:a});function G(){if(!l)for(let E=0;E<s;E++)ee=Fa({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return va({gl:u,positionTex:ee,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:ie}),r?setTimeout(()=>h=requestAnimationFrame(G),1e3):h=requestAnimationFrame(G)}h=requestAnimationFrame(G)}const{enableFullscreen:g}=Ta(document,"canvas",n);document.addEventListener("keydown",ie=>{ie.code==="Space"&&(i(3,l=!l),ie.preventDefault())}),qe(()=>_());const x=()=>i(3,l=!l),U=()=>i(2,r=!r);function B(){s=C(this.value),i(1,s)}const w=()=>_();function $(){c.interactionRange=C(this.value),i(4,c)}function W(){c.drag=C(this.value),i(4,c)}function M(){c.timeStep=C(this.value),i(4,c)}function j(){c.particlesSize=C(this.value),i(4,c)}function Q(){o.width=C(this.value),i(0,o)}function H(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,_,g,x,U,B,w,$,W,M,j,Q,H]}class Ua extends Me{constructor(e){super(),ze(this,e,Da,ya,Ne,{})}}const La=`attribute float id;

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
`,Pa=`precision mediump float;
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
`;let Rt,Ft,eo,Zo;const Ba=(t,e)=>{const{ids:i,colors:n,texDimensions:o}=e;Ft=De(t,[La,Pa]),Rt={idAttributeLocation:t.getAttribLocation(Ft,"id"),sizeUniformLocation:t.getUniformLocation(Ft,"size"),texDimensionsUniformLocation:t.getUniformLocation(Ft,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Ft,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Ft,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Ft,"colorTex")},eo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,eo),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const a=n.map(s=>[s,0,0,0]).flat();Zo=ye(t,new Float32Array(a),o.width,o.height)},$a=t=>{const{gl:e,positionTex:i,texDimensions:n,worldDimensions:o,particlesSize:a,ids:s}=t,r=1,l=e.FLOAT,c=!1,u=0,h=0;_e(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,eo),e.vertexAttribPointer(Rt.idAttributeLocation,r,l,c,u,h),e.enableVertexAttribArray(Rt.idAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Zo),e.useProgram(Ft),e.uniform1f(Rt.sizeUniformLocation,a),e.uniform2f(Rt.worldDimensionsUniformLocation,o.width,o.height),e.uniform2f(Rt.texDimensionsUniformLocation,n.width,n.height),e.uniform1i(Rt.positionTexUniformLocation,0),e.uniform1i(Rt.colorTexUniformLocation,1),e.drawArrays(e.POINTS,h,s.length)};function Ia(t,e,i){function n(){const a=t.getElementById(e);a&&(t.fullscreenElement&&t.exitFullscreen&&t.exitFullscreen(),a.width=i.width,a.height=i.height)}function o(){const a=t.getElementById(e);a&&(t.fullscreenElement||a.requestFullscreen())}return t.addEventListener("fullscreenchange",()=>{t.fullscreenElement===null&&n()}),{enableFullscreen:o,disableFullscreen:n}}function Sa(t){const{texDimensions:e,worldDimensions:i,mode:n}=t,o=e.width*e.height,a=new Array(o).fill(0).map((l,c)=>c),s=new Array(o).fill(0).map(l=>Math.floor(Math.random()*3)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Ca(i);return[c,u,0,0]}if(n==="disk"){const{x:u,y:h}=za(i,200);return[u,h,0,0]}if(n==="square"){const{x:u,y:h}=Ma(i,300);return[u,h,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=Na(i,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=$o(i,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=$o(i,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Ca=t=>{const e=20+Math.random()*(t.width-40),i=Math.random()*(t.height-150);return{x:e,y:i}},Ma=(t,e)=>{const i=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:i,y:n}},za=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,o=i*Math.cos(n)+t.width/2,a=i*Math.sin(n)+t.height/2;return{x:o,y:a}},Na=(t,e,i)=>{const n=to(e,0,i,0,t.width,!1),o=to(e,0,i,0,t.height,!1);return{x:n,y:o}},$o=(t,e,i,n)=>{const o=to(e,0,i,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*o)*200+t.width/2,l=n.y,u=Math.sin(l*o)*200+t.height/2;return{x:r,y:u}},to=function(t,e,i,n,o,a){const s=(t-e)/(i-e)*(o-n)+n;return a?n<o?Io(s,n,o):Io(s,o,n):s},Io=function(t,e,i){return Math.max(Math.min(t,i),e)},Oa=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Xa=`precision highp float;

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
    direction = direction + gravity * gravityFactor;

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

`;let Je,Ze,no,fn,$n,So,Co,Qt,Tn,ei;const ka=(t,e)=>{const{positions:i,colors:n,texDimensions:o}=e,a=Xa.replace("{{TEX_WIDTH}}",o.width.toFixed(1)).replace("{{TEX_HEIGHT}}",o.height.toFixed(1));Ze=De(t,[Oa,a]),Je={positionAttributeLocation:t.getAttribLocation(Ze,"position"),gravityFactorUniformLocation:t.getUniformLocation(Ze,"gravityFactor"),interactionRangeUniformLocation:t.getUniformLocation(Ze,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ze,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ze,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ze,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Ze,"worldDimensions"),positionTexUniformLocation:t.getUniformLocation(Ze,"positionTex"),colorTexUniformLocation:t.getUniformLocation(Ze,"colorTex")},no=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,no),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),fn=ye(t,new Float32Array(i),o.width,o.height),$n=ye(t,null,o.width,o.height);const s=n.map(r=>[r,0,0,0]).flat();return ei=ye(t,new Float32Array(s),o.width,o.height),So=Ye(t,fn),Co=Ye(t,$n),Qt={fb:So,tex:fn},Tn={fb:Co,tex:$n},fn},Wa=t=>{const{gl:e,texDimensions:i,worldDimensions:n,gravityFactor:o,interactionRange:a,drag:s,deltaTime:r}=t;e.bindFramebuffer(e.FRAMEBUFFER,Tn.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,no),e.enableVertexAttribArray(Je.positionAttributeLocation),e.vertexAttribPointer(Je.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Qt.tex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ei),e.useProgram(Ze),e.uniform1i(Je.positionTexUniformLocation,0),e.uniform1i(Je.colorTexUniformLocation,1),e.uniform1f(Je.gravityFactorUniformLocation,o),e.uniform1f(Je.dragUniformLocation,s),e.uniform1f(Je.interactionRangeUniformLocation,a),e.uniform1f(Je.deltaTimeUniformLocation,r),e.uniform2f(Je.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(Je.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const l=Qt;Qt=Tn,Tn=l}return Qt.tex};function Ya(t){let e,i,n,o,a=t[3]?"Play":"Pause",s,r,l,c=t[2]?"Normal Speed":"Slow Mo",u,h,_,g,x=t[6].width*t[6].height+"",U,B,w,$,W,M,j,Q,H,ie,q,X,ee,G,E,z,te,oe,ve,R,ce,J,re,Ee,xe,Y,Pe,fe,ae,Be,ge,V,$e,he,ue,Se,N,O,Oe,D,Z,Xe,Ce,K,ke,se,be,We,de,pe,Ae,Ue,Ve,P,I,we,tt,nt,at;return{c(){e=p("canvas"),i=b(),n=p("div"),o=p("button"),s=F(a),r=b(),l=p("button"),u=F(c),h=b(),_=p("span"),g=F("particles: "),U=F(x),B=b(),w=p("label"),$=F("Smooth steps"),W=b(),M=p("input"),j=b(),Q=p("button"),H=F("Reset"),ie=b(),q=p("button"),X=F("Fullscreen"),ee=b(),G=p("div"),E=p("ul"),z=p("li"),te=p("label"),oe=F("Interaction Range"),ve=b(),R=p("input"),ce=b(),J=p("li"),re=p("label"),Ee=F("Drag"),xe=b(),Y=p("input"),Pe=b(),fe=p("li"),ae=p("label"),Be=F("Time step"),ge=b(),V=p("input"),$e=b(),he=p("li"),ue=p("label"),Se=F("Gravity factor"),N=b(),O=p("input"),Oe=b(),D=p("li"),Z=p("label"),Xe=F("Particles size"),Ce=b(),K=p("input"),ke=b(),se=p("li"),be=p("label"),We=F("World: width"),de=b(),pe=p("input"),Ae=b(),Ue=p("label"),Ve=F("height"),P=b(),I=p("input"),we=b(),tt=p("ul"),this.h()},l(ne){e=v(ne,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),T(e).forEach(d),i=A(ne),n=v(ne,"DIV",{});var le=T(n);o=v(le,"BUTTON",{});var vt=T(o);s=y(vt,a),vt.forEach(d),r=A(le),l=v(le,"BUTTON",{});var Te=T(l);u=y(Te,c),Te.forEach(d),h=A(le),_=v(le,"SPAN",{});var Ge=T(_);g=y(Ge,"particles: "),U=y(Ge,x),Ge.forEach(d),B=A(le),w=v(le,"LABEL",{for:!0});var Tt=T(w);$=y(Tt,"Smooth steps"),Tt.forEach(d),W=A(le),M=v(le,"INPUT",{type:!0,min:!0}),j=A(le),Q=v(le,"BUTTON",{});var je=T(Q);H=y(je,"Reset"),je.forEach(d),ie=A(le),q=v(le,"BUTTON",{});var _t=T(q);X=y(_t,"Fullscreen"),_t.forEach(d),le.forEach(d),ee=A(ne),G=v(ne,"DIV",{});var Ke=T(G);E=v(Ke,"UL",{});var Le=T(E);z=v(Le,"LI",{});var He=T(z);te=v(He,"LABEL",{for:!0});var xt=T(te);oe=y(xt,"Interaction Range"),xt.forEach(d),ve=A(He),R=v(He,"INPUT",{id:!0,type:!0,min:!0}),He.forEach(d),ce=A(Le),J=v(Le,"LI",{});var Re=T(J);re=v(Re,"LABEL",{for:!0});var gt=T(re);Ee=y(gt,"Drag"),gt.forEach(d),xe=A(Re),Y=v(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(d),Pe=A(Le),fe=v(Le,"LI",{});var ot=T(fe);ae=v(ot,"LABEL",{for:!0});var io=T(ae);Be=y(io,"Time step"),io.forEach(d),ge=A(ot),V=v(ot,"INPUT",{id:!0,type:!0,min:!0}),ot.forEach(d),$e=A(Le),he=v(Le,"LI",{});var Zt=T(he);ue=v(Zt,"LABEL",{for:!0});var ro=T(ue);Se=y(ro,"Gravity factor"),ro.forEach(d),N=A(Zt),O=v(Zt,"INPUT",{id:!0,type:!0,min:!0,max:!0}),Zt.forEach(d),Oe=A(Le),D=v(Le,"LI",{});var en=T(D);Z=v(en,"LABEL",{for:!0});var ao=T(Z);Xe=y(ao,"Particles size"),ao.forEach(d),Ce=A(en),K=v(en,"INPUT",{id:!0,type:!0,min:!0}),en.forEach(d),ke=A(Le),se=v(Le,"LI",{});var bt=T(se);be=v(bt,"LABEL",{for:!0});var so=T(be);We=y(so,"World: width"),so.forEach(d),de=A(bt),pe=v(bt,"INPUT",{id:!0,type:!0,min:!0}),Ae=A(bt),Ue=v(bt,"LABEL",{for:!0});var lo=T(Ue);Ve=y(lo,"height"),lo.forEach(d),P=A(bt),I=v(bt,"INPUT",{id:!0,type:!0,min:!0}),bt.forEach(d),we=A(Le),tt=v(Le,"UL",{}),T(tt).forEach(d),Le.forEach(d),Ke.forEach(d),this.h()},h(){m(e,"id","canvas"),et(e,"background-color","black"),m(e,"width",t[5].width),m(e,"height",t[5].height),m(w,"for","steps"),m(M,"type","number"),m(M,"min",0),m(te,"for","interactionRange"),m(R,"id","interactionRange"),m(R,"type","number"),m(R,"min",0),m(re,"for","drag"),m(Y,"id","drag"),m(Y,"type","number"),m(Y,"min",0),m(ae,"for","deltaTime"),m(V,"id","deltaTime"),m(V,"type","number"),m(V,"min",0),m(ue,"for","gravityFactor"),m(O,"id","gravityFactor"),m(O,"type","number"),m(O,"min",-5),m(O,"max",5),m(Z,"for","particlesSize"),m(K,"id","particlesSize"),m(K,"type","number"),m(K,"min",0),m(be,"for","worldWidth"),m(pe,"id","worldWidth"),m(pe,"type","number"),m(pe,"min",0),m(Ue,"for","worldHeight"),m(I,"id","worldHeight"),m(I,"type","number"),m(I,"min",0)},m(ne,le){L(ne,e,le),L(ne,i,le),L(ne,n,le),f(n,o),f(o,s),f(n,r),f(n,l),f(l,u),f(n,h),f(n,_),f(_,g),f(_,U),f(n,B),f(n,w),f(w,$),f(n,W),f(n,M),S(M,t[1]),f(n,j),f(n,Q),f(Q,H),f(n,ie),f(n,q),f(q,X),L(ne,ee,le),L(ne,G,le),f(G,E),f(E,z),f(z,te),f(te,oe),f(z,ve),f(z,R),S(R,t[4].interactionRange),f(E,ce),f(E,J),f(J,re),f(re,Ee),f(J,xe),f(J,Y),S(Y,t[4].drag),f(E,Pe),f(E,fe),f(fe,ae),f(ae,Be),f(fe,ge),f(fe,V),S(V,t[4].timeStep),f(E,$e),f(E,he),f(he,ue),f(ue,Se),f(he,N),f(he,O),S(O,t[4].gravityFactor),f(E,Oe),f(E,D),f(D,Z),f(Z,Xe),f(D,Ce),f(D,K),S(K,t[4].particlesSize),f(E,ke),f(E,se),f(se,be),f(be,We),f(se,de),f(se,pe),S(pe,t[0].width),f(se,Ae),f(se,Ue),f(Ue,Ve),f(se,P),f(se,I),S(I,t[0].height),f(E,we),f(E,tt),nt||(at=[k(o,"click",t[9]),k(l,"click",t[10]),k(M,"input",t[11]),k(Q,"click",t[12]),k(q,"click",t[8]),k(R,"input",t[13]),k(Y,"input",t[14]),k(V,"input",t[15]),k(O,"input",t[16]),k(K,"input",t[17]),k(pe,"input",t[18]),k(I,"input",t[19])],nt=!0)},p(ne,[le]){le&8&&a!==(a=ne[3]?"Play":"Pause")&&Qe(s,a),le&4&&c!==(c=ne[2]?"Normal Speed":"Slow Mo")&&Qe(u,c),le&2&&C(M.value)!==ne[1]&&S(M,ne[1]),le&16&&C(R.value)!==ne[4].interactionRange&&S(R,ne[4].interactionRange),le&16&&C(Y.value)!==ne[4].drag&&S(Y,ne[4].drag),le&16&&C(V.value)!==ne[4].timeStep&&S(V,ne[4].timeStep),le&16&&C(O.value)!==ne[4].gravityFactor&&S(O,ne[4].gravityFactor),le&16&&C(K.value)!==ne[4].particlesSize&&S(K,ne[4].particlesSize),le&1&&C(pe.value)!==ne[0].width&&S(pe,ne[0].width),le&1&&C(I.value)!==ne[0].height&&S(I,ne[0].height)},i:me,o:me,d(ne){ne&&d(e),ne&&d(i),ne&&d(n),ne&&d(ee),ne&&d(G),nt=!1,Ot(at)}}}function Va(t,e,i){const n={width:800,height:600},o={width:1600,height:1200},a={width:500,height:10};let s=10,r=!1,l=!0;const c={interactionRange:30,drag:5,timeStep:10,particlesSize:6,gravityFactor:1};let u,h;function _(){cancelAnimationFrame(h),u=It(),_e(u.canvas);const{ids:q,positions:X,colors:ee}=Sa({texDimensions:a,worldDimensions:o,mode:"random"});Ba(u,{ids:q,colors:ee,texDimensions:a});let G=ka(u,{positions:X,colors:ee,texDimensions:a});function E(){if(!l)for(let z=0;z<s;z++)G=Wa({gl:u,texDimensions:a,worldDimensions:o,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep,gravityFactor:c.gravityFactor});return $a({gl:u,positionTex:G,texDimensions:a,worldDimensions:o,particlesSize:c.particlesSize,ids:q}),r?setTimeout(()=>h=requestAnimationFrame(E),1e3):h=requestAnimationFrame(E)}h=requestAnimationFrame(E)}const{enableFullscreen:g}=Ia(document,"canvas",n);document.addEventListener("keydown",q=>{q.code==="Space"&&(i(3,l=!l),q.preventDefault())}),qe(()=>_());const x=()=>i(3,l=!l),U=()=>i(2,r=!r);function B(){s=C(this.value),i(1,s)}const w=()=>_();function $(){c.interactionRange=C(this.value),i(4,c)}function W(){c.drag=C(this.value),i(4,c)}function M(){c.timeStep=C(this.value),i(4,c)}function j(){c.gravityFactor=C(this.value),i(4,c)}function Q(){c.particlesSize=C(this.value),i(4,c)}function H(){o.width=C(this.value),i(0,o)}function ie(){o.height=C(this.value),i(0,o)}return[o,s,r,l,c,n,a,_,g,x,U,B,w,$,W,M,j,Q,H,ie]}class Ha extends Me{constructor(e){super(),ze(this,e,Va,Ya,Ne,{})}}function Mo(t,e,i){const n=t.slice();return n[1]=e[i],n}function zo(t,e,i){const n=t.slice();return n[1]=e[i],n}function qa(t){let e;return{c(){e=F("About")},l(i){e=y(i,"About")},m(i,n){L(i,e,n)},d(i){i&&d(e)}}}function Ga(t){let e=t[1].title+"",i;return{c(){i=F(e)},l(n){i=y(n,e)},m(n,o){L(n,i,o)},p:me,d(n){n&&d(i)}}}function No(t){let e,i;return e=new Yo({props:{$$slots:{default:[Ga]},$$scope:{ctx:t}}}),{c(){mt(e.$$.fragment)},l(n){yt(e.$$.fragment,n)},m(n,o){ht(e,n,o),i=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){i||(Fe(e.$$.fragment,n),i=!0)},o(n){Ie(e.$$.fragment,n),i=!1},d(n){pt(e,n)}}}function ja(t){let e,i,n,o;e=new Yo({props:{$$slots:{default:[qa]},$$scope:{ctx:t}}});let a=t[0],s=[];for(let l=0;l<a.length;l+=1)s[l]=No(zo(t,a,l));const r=l=>Ie(s[l],1,1,()=>{s[l]=null});return{c(){mt(e.$$.fragment),i=b();for(let l=0;l<s.length;l+=1)s[l].c();n=_n()},l(l){yt(e.$$.fragment,l),i=A(l);for(let c=0;c<s.length;c+=1)s[c].l(l);n=_n()},m(l,c){ht(e,l,c),L(l,i,c);for(let u=0;u<s.length;u+=1)s[u].m(l,c);L(l,n,c),o=!0},p(l,c){const u={};if(c&64&&(u.$$scope={dirty:c,ctx:l}),e.$set(u),c&1){a=l[0];let h;for(h=0;h<a.length;h+=1){const _=zo(l,a,h);s[h]?(s[h].p(_,c),Fe(s[h],1)):(s[h]=No(_),s[h].c(),Fe(s[h],1),s[h].m(n.parentNode,n))}for(En(),h=a.length;h<s.length;h+=1)r(h);wn()}},i(l){if(!o){Fe(e.$$.fragment,l);for(let c=0;c<a.length;c+=1)Fe(s[c]);o=!0}},o(l){Ie(e.$$.fragment,l),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)Ie(s[c]);o=!1},d(l){pt(e,l),l&&d(i),ko(s,l),l&&d(n)}}}function Ka(t){let e,i;return{c(){e=p("p"),i=F("This page is an experiment to run simulation on the GPU.")},l(n){e=v(n,"P",{});var o=T(e);i=y(o,"This page is an experiment to run simulation on the GPU."),o.forEach(d)},m(n,o){L(n,e,o),f(e,i)},p:me,d(n){n&&d(e)}}}function Qa(t){let e,i,n;var o=t[1].component;function a(s){return{}}return o&&(e=fo(o,a())),{c(){e&&mt(e.$$.fragment),i=b()},l(s){e&&yt(e.$$.fragment,s),i=A(s)},m(s,r){e&&ht(e,s,r),L(s,i,r),n=!0},p(s,r){if(o!==(o=s[1].component)){if(e){En();const l=e;Ie(l.$$.fragment,1,0,()=>{pt(l,1)}),wn()}o?(e=fo(o,a()),mt(e.$$.fragment),Fe(e.$$.fragment,1),ht(e,i.parentNode,i)):e=null}},i(s){n||(e&&Fe(e.$$.fragment,s),n=!0)},o(s){e&&Ie(e.$$.fragment,s),n=!1},d(s){e&&pt(e,s),s&&d(i)}}}function Oo(t){let e,i;return e=new Vo({props:{$$slots:{default:[Qa]},$$scope:{ctx:t}}}),{c(){mt(e.$$.fragment)},l(n){yt(e.$$.fragment,n)},m(n,o){ht(e,n,o),i=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){i||(Fe(e.$$.fragment,n),i=!0)},o(n){Ie(e.$$.fragment,n),i=!1},d(n){pt(e,n)}}}function Ja(t){let e,i,n,o,a,s;e=new pi({props:{$$slots:{default:[ja]},$$scope:{ctx:t}}}),n=new Vo({props:{$$slots:{default:[Ka]},$$scope:{ctx:t}}});let r=t[0],l=[];for(let u=0;u<r.length;u+=1)l[u]=Oo(Mo(t,r,u));const c=u=>Ie(l[u],1,1,()=>{l[u]=null});return{c(){mt(e.$$.fragment),i=b(),mt(n.$$.fragment),o=b();for(let u=0;u<l.length;u+=1)l[u].c();a=_n()},l(u){yt(e.$$.fragment,u),i=A(u),yt(n.$$.fragment,u),o=A(u);for(let h=0;h<l.length;h+=1)l[h].l(u);a=_n()},m(u,h){ht(e,u,h),L(u,i,h),ht(n,u,h),L(u,o,h);for(let _=0;_<l.length;_+=1)l[_].m(u,h);L(u,a,h),s=!0},p(u,h){const _={};h&64&&(_.$$scope={dirty:h,ctx:u}),e.$set(_);const g={};if(h&64&&(g.$$scope={dirty:h,ctx:u}),n.$set(g),h&1){r=u[0];let x;for(x=0;x<r.length;x+=1){const U=Mo(u,r,x);l[x]?(l[x].p(U,h),Fe(l[x],1)):(l[x]=Oo(U),l[x].c(),Fe(l[x],1),l[x].m(a.parentNode,a))}for(En(),x=r.length;x<l.length;x+=1)c(x);wn()}},i(u){if(!s){Fe(e.$$.fragment,u),Fe(n.$$.fragment,u);for(let h=0;h<r.length;h+=1)Fe(l[h]);s=!0}},o(u){Ie(e.$$.fragment,u),Ie(n.$$.fragment,u),l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)Ie(l[h]);s=!1},d(u){pt(e,u),u&&d(i),pt(n,u),u&&d(o),ko(l,u),u&&d(a)}}}function Za(t){let e,i,n;return i=new fi({props:{$$slots:{default:[Ja]},$$scope:{ctx:t}}}),{c(){e=p("div"),mt(i.$$.fragment)},l(o){e=v(o,"DIV",{});var a=T(e);yt(i.$$.fragment,a),a.forEach(d)},m(o,a){L(o,e,a),ht(i,e,null),n=!0},p(o,[a]){const s={};a&64&&(s.$$scope={dirty:a,ctx:o}),i.$set(s)},i(o){n||(Fe(i.$$.fragment,o),n=!0)},o(o){Ie(i.$$.fragment,o),n=!1},d(o){o&&d(e),pt(i)}}}function es(t){return[[{title:"test 1",component:wi},{title:"test 2",component:Di},{title:"test 3",component:Ci},{title:"test 4",component:Xi},{title:"test 5",component:Gi},{title:"test 6",component:ar},{title:"test 7",component:xr},{title:"test 8",component:Ir},{title:"test 9",component:Kr},{title:"test 10",component:da},{title:"test 11",component:Ua},{title:"test 12",component:Ha}]]}class ts extends Me{constructor(e){super(),ze(this,e,es,Za,Ne,{})}}function ns(t){let e,i;return e=new ts({}),{c(){mt(e.$$.fragment)},l(n){yt(e.$$.fragment,n)},m(n,o){ht(e,n,o),i=!0},p:me,i(n){i||(Fe(e.$$.fragment,n),i=!0)},o(n){Ie(e.$$.fragment,n),i=!1},d(n){pt(e,n)}}}class ss extends Me{constructor(e){super(),ze(this,e,null,ns,Ne,{})}}export{ss as default};
