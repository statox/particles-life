import{S as Te,i as xe,s as $e,C as St,k as x,l as $,m as w,h as f,n as T,b as g,K as fe,E as Ct,F as Mt,G as Nt,f as V,t as W,H as xt,R as On,o as Le,j as zn,Q as Xn,T as pn,U as Pn,A as kn,V as Yn,g as Vn,d as Wn,q as I,a as D,r as S,c as U,D as m,B as le,p as qe,O as ae,u as Je,P as se,M as Ot,w as G,x as H,y as j,z as K}from"../../../chunks/index-ff9e742a.js";import{w as gt}from"../../../chunks/index-84a8d4d9.js";let qn=1;function Bn(){return`svelte-tabs-${qn++}`}function Gn(t){let e,o,n,i;const a=t[4].default,s=St(a,t,t[3],null);return{c(){e=x("div"),s&&s.c(),this.h()},l(r){e=$(r,"DIV",{class:!0});var l=w(e);s&&s.l(l),l.forEach(f),this.h()},h(){T(e,"class","svelte-tabs")},m(r,l){g(r,e,l),s&&s.m(e,null),o=!0,n||(i=fe(e,"keydown",t[1]),n=!0)},p(r,[l]){s&&s.p&&(!o||l&8)&&Ct(s,a,r,r[3],o?Nt(a,r[3],l,null):Mt(r[3]),null)},i(r){o||(V(s,r),o=!0)},o(r){W(s,r),o=!1},d(r){r&&f(e),s&&s.d(r),n=!1,i()}}}const un={};function Hn(t,e,o){const n=t.indexOf(e);t.splice(n,1),o.update(i=>i===e?t[n]||t[t.length-1]:i)}function jn(t,e,o){let n,{$$slots:i={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const r=[],l=[],c=[],u=gt({}),_=gt({}),b=gt(null);xt(t,b,v=>o(5,n=v));const h=gt(null);function A(v,B,N){v.push(B),N.update(X=>X||B),Xn(()=>Hn(v,B,N))}function R(v){const B=l.indexOf(v);b.set(v),h.set(c[B])}On(un,{registerTab(v){A(l,v,b)},registerTabElement(v){r.push(v)},registerPanel(v){A(c,v,h)},selectTab:R,selectedTab:b,selectedPanel:h,controls:u,labeledBy:_}),Le(()=>{R(l[s])}),zn(()=>{for(let v=0;v<l.length;v++)u.update(B=>({...B,[l[v].id]:c[v].id})),_.update(B=>({...B,[c[v].id]:l[v].id}))});async function y(v){if(v.target.classList.contains("svelte-tabs__tab")){let B=l.indexOf(n);switch(v.key){case"ArrowRight":B+=1,B>l.length-1&&(B=0),R(l[B]),r[B].focus();break;case"ArrowLeft":B-=1,B<0&&(B=l.length-1),R(l[B]),r[B].focus()}}}return t.$$set=v=>{"initialSelectedIndex"in v&&o(2,s=v.initialSelectedIndex),"$$scope"in v&&o(3,a=v.$$scope)},[b,y,s,a,i]}class Kn extends Te{constructor(e){super(),xe(this,e,jn,Gn,$e,{initialSelectedIndex:2})}}function Qn(t){let e,o,n,i,a,s;const r=t[9].default,l=St(r,t,t[8],null);return{c(){e=x("li"),l&&l.c(),this.h()},l(c){e=$(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=w(e);l&&l.l(u),u.forEach(f),this.h()},h(){T(e,"role","tab"),T(e,"id",t[3].id),T(e,"aria-controls",o=t[2][t[3].id]),T(e,"aria-selected",t[1]),T(e,"tabindex",n=t[1]?0:-1),T(e,"class","svelte-tabs__tab svelte-1fbofsd"),pn(e,"svelte-tabs__selected",t[1])},m(c,u){g(c,e,u),l&&l.m(e,null),t[10](e),i=!0,a||(s=fe(e,"click",t[11]),a=!0)},p(c,[u]){l&&l.p&&(!i||u&256)&&Ct(l,r,c,c[8],i?Nt(r,c[8],u,null):Mt(c[8]),null),(!i||u&4&&o!==(o=c[2][c[3].id]))&&T(e,"aria-controls",o),(!i||u&2)&&T(e,"aria-selected",c[1]),(!i||u&2&&n!==(n=c[1]?0:-1))&&T(e,"tabindex",n),(!i||u&2)&&pn(e,"svelte-tabs__selected",c[1])},i(c){i||(V(l,c),i=!0)},o(c){W(l,c),i=!1},d(c){c&&f(e),l&&l.d(c),t[10](null),a=!1,s()}}}function Jn(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e,r;const l={id:Bn()},{registerTab:c,registerTabElement:u,selectTab:_,selectedTab:b,controls:h}=Pn(un);xt(t,b,v=>o(7,n=v)),xt(t,h,v=>o(2,i=v));let A;c(l),Le(async()=>{await kn(),u(r)});function R(v){Yn[v?"unshift":"push"](()=>{r=v,o(0,r)})}const y=()=>_(l);return t.$$set=v=>{"$$scope"in v&&o(8,s=v.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(1,A=n===l)},[r,A,i,l,_,b,h,n,s,a,R,y]}class Se extends Te{constructor(e){super(),xe(this,e,Jn,Qn,$e,{})}}function Zn(t){let e,o;const n=t[1].default,i=St(n,t,t[0],null);return{c(){e=x("ul"),i&&i.c(),this.h()},l(a){e=$(a,"UL",{role:!0,class:!0});var s=w(e);i&&i.l(s),s.forEach(f),this.h()},h(){T(e,"role","tablist"),T(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){g(a,e,s),i&&i.m(e,null),o=!0},p(a,[s]){i&&i.p&&(!o||s&1)&&Ct(i,n,a,a[0],o?Nt(n,a[0],s,null):Mt(a[0]),null)},i(a){o||(V(i,a),o=!0)},o(a){W(i,a),o=!1},d(a){a&&f(e),i&&i.d(a)}}}function eo(t,e,o){let{$$slots:n={},$$scope:i}=e;return t.$$set=a=>{"$$scope"in a&&o(0,i=a.$$scope)},[i,n]}class to extends Te{constructor(e){super(),xe(this,e,eo,Zn,$e,{})}}function hn(t){let e;const o=t[6].default,n=St(o,t,t[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,a){n&&n.m(i,a),e=!0},p(i,a){n&&n.p&&(!e||a&32)&&Ct(n,o,i,i[5],e?Nt(o,i[5],a,null):Mt(i[5]),null)},i(i){e||(V(n,i),e=!0)},o(i){W(n,i),e=!1},d(i){n&&n.d(i)}}}function no(t){let e,o,n,i=t[1]===t[2]&&hn(t);return{c(){e=x("div"),i&&i.c(),this.h()},l(a){e=$(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=w(e);i&&i.l(s),s.forEach(f),this.h()},h(){T(e,"id",t[2].id),T(e,"aria-labelledby",o=t[0][t[2].id]),T(e,"class","svelte-tabs__tab-panel svelte-epfyet"),T(e,"role","tabpanel")},m(a,s){g(a,e,s),i&&i.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?i?(i.p(a,s),s&2&&V(i,1)):(i=hn(a),i.c(),V(i,1),i.m(e,null)):i&&(Vn(),W(i,1,1,()=>{i=null}),Wn()),(!n||s&1&&o!==(o=a[0][a[2].id]))&&T(e,"aria-labelledby",o)},i(a){n||(V(i),n=!0)},o(a){W(i),n=!1},d(a){a&&f(e),i&&i.d()}}}function oo(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e;const r={id:Bn()},{registerPanel:l,selectedPanel:c,labeledBy:u}=Pn(un);return xt(t,c,_=>o(1,i=_)),xt(t,u,_=>o(0,n=_)),l(r),t.$$set=_=>{"$$scope"in _&&o(5,s=_.$$scope)},[n,i,r,c,u,s,a]}class Ce extends Te{constructor(e){super(),xe(this,e,oo,no,$e,{})}}const io=["VERTEX_SHADER","FRAGMENT_SHADER"];function $t(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return zt(e),e}function zt(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Re(t,e,o,n){const i=t.createTexture();if(!i)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i}function ye(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function _e(t,e,o,n,i){const a=[];for(let r=0;r<e.length;++r){const l=io[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=ro(t,e[r],l,i);if(!c)throw"Can not create shader";a.push(c)}const s=ao(t,a,o,n,i);if(!s)throw"Can not create program";return s}function ro(t,e,o,n){const i=n||console.log,a=t.createShader(o);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(a),null}return a}function ao(t,e,o,n,i){const a=i||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){t.attachShader(s,l)}),o&&o.forEach(function(l,c){t.bindAttribLocation(s,n?n[c]:c,l)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const l=t.getProgramInfoLog(s);return a("Error in program linking:"+l),t.deleteProgram(s),null}return s}function de(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}function so(t){let e,o,n,i,a,s,r,l,c,u,_,b;return{c(){e=x("p"),o=I(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=D(),i=x("p"),a=I(`It is reusing the code from
    `),s=x("a"),r=I(`this site
    `),l=I("."),c=D(),u=x("ul"),_=D(),b=x("canvas"),this.h()},l(h){e=$(h,"P",{});var A=w(e);o=S(A,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),A.forEach(f),n=U(h),i=$(h,"P",{});var R=w(i);a=S(R,`It is reusing the code from
    `),s=$(R,"A",{target:!0,href:!0});var y=w(s);r=S(y,`this site
    `),y.forEach(f),l=S(R,"."),R.forEach(f),c=U(h),u=$(h,"UL",{id:!0}),w(u).forEach(f),_=U(h),b=$(h,"CANVAS",{id:!0}),w(b).forEach(f),this.h()},h(){T(s,"target","none"),T(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),T(u,"id","result"),T(b,"id","canvas")},m(h,A){g(h,e,A),m(e,o),g(h,n,A),g(h,i,A),m(i,a),m(i,s),m(s,r),m(i,l),g(h,c,A),g(h,u,A),g(h,_,A),g(h,b,A)},p:le,i:le,o:le,d(h){h&&f(e),h&&f(n),h&&f(i),h&&f(c),h&&f(u),h&&f(_),h&&f(b)}}}function lo(t){const e=document.createElement("li");e.textContent=t.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(e)}function co(t){function e(){const o=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const r=s.getContext("webgl");if(!r)throw"Coulndt get context";const l=_e(r,[o,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),u=r.getUniformLocation(l,"srcTex"),_=r.getUniformLocation(l,"srcDimensions"),b=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,b),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const h=3,A=3,R=r.createTexture();r.bindTexture(r.TEXTURE_2D,R),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,h,A,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(u,0),r.uniform2f(_,h,A),r.drawArrays(r.TRIANGLES,0,6);const y=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,y);for(let v=0;v<3*3;++v)lo(y[v*4])}return Le(e),[]}class fo extends Te{constructor(e){super(),xe(this,e,co,so,$e,{})}}const uo=Float32Array;function In(t,e,o,n,i,a){const s=new uo(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-o),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(i-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(o+n)/(o-n),s[14]=(i+a)/(i-a),s[15]=1,s}function mo(t){let e,o,n,i,a,s,r;return{c(){e=x("p"),o=I(`This is the simple particles simulation from
    `),n=x("a"),i=I("webglfundamentals"),a=I(" directly copied in a svelte component."),s=D(),r=x("canvas"),this.h()},l(l){e=$(l,"P",{});var c=w(e);o=S(c,`This is the simple particles simulation from
    `),n=$(c,"A",{target:!0,href:!0});var u=w(n);i=S(u,"webglfundamentals"),u.forEach(f),a=S(c," directly copied in a svelte component."),c.forEach(f),s=U(l),r=$(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(r).forEach(f),this.h()},h(){T(n,"target","none"),T(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),T(r,"id","canvas"),qe(r,"background-color","black"),T(r,"width","800"),T(r,"height","600")},m(l,c){g(l,e,c),m(e,o),m(e,n),m(n,i),m(e,a),g(l,s,c),g(l,r,c)},p:le,i:le,o:le,d(l){l&&f(e),l&&f(s),l&&f(r)}}}function po(t){function e(){const o=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const r=s.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=_e(r,[o,n]),_=_e(r,[i,a]);if(!u||!_)throw"Can not create programs";const b={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},h={id:r.getAttribLocation(_,"id"),positionTex:r.getUniformLocation(_,"positionTex"),texDimensions:r.getUniformLocation(_,"texDimensions"),matrix:r.getUniformLocation(_,"matrix")},A=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,A),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const R=300,y=20,v=R*y,B=new Array(v).fill(0).map((F,Z)=>Z),N=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,N),r.bufferData(r.ARRAY_BUFFER,new Float32Array(B),r.STATIC_DRAW),de(r.canvas);const X=(F,Z)=>(Z===void 0&&(Z=F,F=0),Math.random()*(Z-F)+F),O=new Float32Array(B.map(F=>[X(s.width),X(s.height),0,0]).flat()),Y=new Float32Array(B.map(F=>[X(-300,300),X(-300,300),0,0]).flat());function d(F,Z,ee,ne){const ve=F.createTexture();return F.bindTexture(F.TEXTURE_2D,ve),F.texImage2D(F.TEXTURE_2D,0,F.RGBA,ee,ne,0,F.RGBA,F.FLOAT,Z),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_S,F.CLAMP_TO_EDGE),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_T,F.CLAMP_TO_EDGE),ve}const L=d(r,Y,R,y),p=d(r,O,R,y),E=d(r,null,R,y);if(!p||!E)throw"Can not create position textures";function te(F,Z){const ee=F.createFramebuffer();return F.bindFramebuffer(F.FRAMEBUFFER,ee),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Z,0),ee}const Q=te(r,p),C=te(r,E);let k={fb:Q,tex:p},J={fb:C,tex:E},q=0;function ce(F){if(!r)return;F*=.001;const Z=F-q;q=F,de(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,J.fb),r.viewport(0,0,R,y),r.bindBuffer(r.ARRAY_BUFFER,A),r.enableVertexAttribArray(b.position),r.vertexAttribPointer(b.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,k.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,L),r.useProgram(u),r.uniform1i(b.positionTex,0),r.uniform1i(b.velocityTex,1),r.uniform2f(b.texDimensions,R,y),r.uniform2f(b.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(b.deltaTime,Z),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,N),r.enableVertexAttribArray(h.id),r.vertexAttribPointer(h.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,J.tex),r.useProgram(_),r.uniform2f(h.texDimensions,R,R),r.uniform1i(h.positionTex,0),r.uniformMatrix4fv(h.matrix,!1,In(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,v);{const ee=k;k=J,J=ee}requestAnimationFrame(ce)}requestAnimationFrame(ce)}return Le(()=>e()),[]}class ho extends Te{constructor(e){super(),xe(this,e,po,mo,$e,{})}}const Et=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function vo(t,e,o,n){const i=t*e,a=new Array(i).fill(0).map((l,c)=>c),s=new Float32Array(a.map(l=>[Et(o),Et(n),0,0]).flat()),r=new Float32Array(a.map(l=>[Et(-300,300),Et(-300,300),0,0]).flat());return{numParticles:i,ids:new Float32Array(a),positions:s,velocities:r}}const _o=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,To=`precision highp float;

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

`,xo=`  attribute float id;
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

`,$o=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Ao(t){let e,o,n,i,a,s,r;return{c(){e=x("p"),o=I(`This is the simple particles simulation from
    `),n=x("a"),i=I("webglfundamentals"),a=I(" with the shader code extracted into separate files."),s=D(),r=x("canvas"),this.h()},l(l){e=$(l,"P",{});var c=w(e);o=S(c,`This is the simple particles simulation from
    `),n=$(c,"A",{target:!0,href:!0});var u=w(n);i=S(u,"webglfundamentals"),u.forEach(f),a=S(c," with the shader code extracted into separate files."),c.forEach(f),s=U(l),r=$(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(r).forEach(f),this.h()},h(){T(n,"target","none"),T(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),T(r,"id","canvas"),qe(r,"background-color","black"),T(r,"width","800"),T(r,"height","600")},m(l,c){g(l,e,c),m(e,o),m(e,n),m(n,i),m(e,a),g(l,s,c),g(l,r,c)},p:le,i:le,o:le,d(l){l&&f(e),l&&f(s),l&&f(r)}}}function bo(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const a=i.getContext("webgl");if(!a)throw"gl undefined";zt(a);const s=_e(a,[_o,To]),r=_e(a,[xo,$o]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},c={id:a.getAttribLocation(r,"id"),positionTex:a.getUniformLocation(r,"positionTex"),texDimensions:a.getUniformLocation(r,"texDimensions"),matrix:a.getUniformLocation(r,"matrix")},u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const _=300,b=20,{numParticles:h,ids:A,positions:R,velocities:y}=vo(_,b,i.width,i.height),v=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,v),a.bufferData(a.ARRAY_BUFFER,new Float32Array(A),a.STATIC_DRAW),de(a.canvas);const B=Re(a,y,_,b),N=Re(a,R,_,b),X=Re(a,null,_,b),O=ye(a,N),Y=ye(a,X);let d={fb:O,tex:N},L={fb:Y,tex:X},p=0;function E(te){if(!a||!u||!v)throw"Undefined params to render";te*=.001;const Q=te-p;p=te,de(a.canvas),n(a,L,_,b,u,l,d,B,s,Q),o(a,_,v,c,L,r,h);{const C=d;d=L,L=C}requestAnimationFrame(E)}requestAnimationFrame(E)}const o=(i,a,s,r,l,c,u)=>{i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(r.id),i.vertexAttribPointer(r.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,l.tex),i.useProgram(c),i.uniform2f(r.texDimensions,a,a),i.uniform1i(r.positionTex,0),i.uniformMatrix4fv(r.matrix,!1,In(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,u)},n=(i,a,s,r,l,c,u,_,b,h)=>{i.bindFramebuffer(i.FRAMEBUFFER,a.fb),i.viewport(0,0,s,r),i.bindBuffer(i.ARRAY_BUFFER,l),i.enableVertexAttribArray(c.position),i.vertexAttribPointer(c.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,u.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,_),i.useProgram(b),i.uniform1i(c.positionTex,0),i.uniform1i(c.velocityTex,1),i.uniform2f(c.texDimensions,s,r),i.uniform2f(c.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f(c.deltaTime,h),i.drawArrays(i.TRIANGLES,0,6)};return Le(()=>e()),[]}class go extends Te{constructor(e){super(),xe(this,e,bo,Ao,$e,{})}}const Eo=`attribute vec2 a_position;

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
`,wo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function Ro(t){let e,o,n,i,a,s,r,l,c,u,_,b;return{c(){e=x("p"),o=I(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=x("code"),i=I("requestAnimationFrame"),a=I(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=D(),r=x("canvas"),l=D(),c=x("button"),u=I("Add position"),this.h()},l(h){e=$(h,"P",{});var A=w(e);o=S(A,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=$(A,"CODE",{});var R=w(n);i=S(R,"requestAnimationFrame"),R.forEach(f),a=S(A,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),A.forEach(f),s=U(h),r=$(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(r).forEach(f),l=U(h),c=$(h,"BUTTON",{});var y=w(c);u=S(y,"Add position"),y.forEach(f),this.h()},h(){T(r,"id","canvas"),qe(r,"background-color","black"),T(r,"width","800"),T(r,"height","600")},m(h,A){g(h,e,A),m(e,o),m(e,n),m(n,i),m(e,a),g(h,s,A),g(h,r,A),g(h,l,A),g(h,c,A),m(c,u),_||(b=fe(c,"click",t[1]),_=!0)},p:le,i:le,o:le,d(h){h&&f(e),h&&f(s),h&&f(r),h&&f(l),h&&f(c),_=!1,b()}}}function Fo(t){const e=[50,50,50,150,150,150,150,50,200,200];function o(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";zt(s);const r=_e(s,[Eo,wo]);de(s.canvas);const l=s.getAttribLocation(r,"a_position"),c=s.getUniformLocation(r,"u_resolution"),u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function _(){if(!s)throw"Undefined params to render";for(let N=0;N<=e.length-2;N+=2)e[N]=(e[N]+Math.random()*2-1)%s.canvas.width,e[N+1]=(e[N+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),de(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(r),s.uniform2f(c,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,u);const b=2,h=s.FLOAT,A=!1,R=0,y=0;s.vertexAttribPointer(l,b,h,A,R,y);var v=s.POINTS,B=e.length/2;s.drawArrays(v,y,B),requestAnimationFrame(_)}requestAnimationFrame(_)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Le(()=>o()),[n,()=>n()]}class Do extends Te{constructor(e){super(),xe(this,e,Fo,Ro,$e,{})}}const Uo=`attribute float id;
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
`,yo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let ft,ut;const Lo=t=>{ut=_e(t,[Uo,yo]),ft={idAttributeLocation:t.getAttribLocation(ut,"id"),texDimensionsUniformLocation:t.getUniformLocation(ut,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ut,"u_resolution")}},Po=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;de(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(ut),e.uniform2f(ft.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ft.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(ft.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,r=e.FLOAT,l=!1,c=0,u=0;e.vertexAttribPointer(ft.idAttributeLocation,s,r,l,c,u);const _=e.POINTS,b=i.length;e.drawArrays(_,u,b)};function Bo(t){let e,o,n,i,a,s,r;return{c(){e=x("p"),o=I("Create an array of render-size positions. Store this array in a texture. In each "),n=x("code"),i=I("requestAnimationFrame"),a=I(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=D(),r=x("canvas"),this.h()},l(l){e=$(l,"P",{});var c=w(e);o=S(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=$(c,"CODE",{});var u=w(n);i=S(u,"requestAnimationFrame"),u.forEach(f),a=S(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(f),s=U(l),r=$(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(r).forEach(f),this.h()},h(){T(r,"id","canvas"),qe(r,"background-color","black"),T(r,"width",Sn),T(r,"height",Cn)},m(l,c){g(l,e,c),m(e,o),m(e,n),m(n,i),m(e,a),g(l,s,c),g(l,r,c)},p:le,i:le,o:le,d(l){l&&f(e),l&&f(s),l&&f(r)}}}const Sn=800,Cn=600;function Io(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const n=o.getContext("webgl");if(!n)throw"gl undefined";zt(n),de(n.canvas),Lo(n);const i=[0,1,2,3,4,5,6,7,8,9],a=i.map(r=>[Math.random()*Sn,Math.random()*Cn,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let l=0;l<=a.length-2;l+=2)a[l]=(a[l]+Math.random()*2-1)%n.canvas.width,a[l+1]=(a[l+1]+Math.random()*0+1)%n.canvas.height;const r=Re(n,new Float32Array(a),3,3);Po({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:i}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Le(()=>e()),[]}let So=class extends Te{constructor(e){super(),xe(this,e,Io,Bo,$e,{})}};const Co=`attribute float id;
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
`,Mo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let mt,dt,Gt;const No=(t,e)=>{dt=_e(t,[Co,Mo]),mt={idAttributeLocation:t.getAttribLocation(dt,"id"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},Gt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Oo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;de(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Gt),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(dt),e.uniform2f(mt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(mt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(mt.idAttributeLocation);const a=1,s=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(mt.idAttributeLocation,a,s,r,l,c),e.drawArrays(e.POINTS,c,i.length)};function zo(t,e){const o=new Array(t).fill(0).map((a,s)=>s),n=o.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),i={width:o.length,height:1};return{ids:o,positions:n,texDimensions:i}}const Xo=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ko=`precision highp float;

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

`;let rt,at,Ht,Xt,kt,vn,_n,pt,yt;const Yo=(t,e)=>{const{positions:o,texDimensions:n}=e;at=_e(t,[Xo,ko]),rt={positionAttributeLocation:t.getAttribLocation(at,"position"),positionTexLocation:t.getUniformLocation(at,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(at,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(at,"u_resolution")},Ht=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ht),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Xt=Re(t,new Float32Array(o),n.width,n.height),kt=Re(t,null,n.width,n.height),vn=ye(t,Xt),_n=ye(t,kt),pt={fb:vn,tex:Xt},yt={fb:_n,tex:kt}},Vo=t=>{const{gl:e,texDimensions:o}=t;e.bindFramebuffer(e.FRAMEBUFFER,yt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Ht),e.enableVertexAttribArray(rt.positionAttributeLocation),e.vertexAttribPointer(rt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,pt.tex),e.useProgram(at),e.uniform1i(rt.positionTexLocation,0),e.uniform2f(rt.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(rt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=pt;pt=yt,yt=n}return pt.tex};function Wo(t){let e,o,n,i,a,s,r,l,c,u,_,b,h;return{c(){e=x("p"),o=I("Create an array of render-size positions. Store this array in a texture."),n=D(),i=x("p"),a=I("Create 2 textures which will be used to update the positions with a shader. In each "),s=x("code"),r=I("requestAnimationFrame"),l=I(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=D(),u=x("p"),_=I("Finally switch the two textures to read and write in the updated textures"),b=D(),h=x("canvas"),this.h()},l(A){e=$(A,"P",{});var R=w(e);o=S(R,"Create an array of render-size positions. Store this array in a texture."),R.forEach(f),n=U(A),i=$(A,"P",{});var y=w(i);a=S(y,"Create 2 textures which will be used to update the positions with a shader. In each "),s=$(y,"CODE",{});var v=w(s);r=S(v,"requestAnimationFrame"),v.forEach(f),l=S(y,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),y.forEach(f),c=U(A),u=$(A,"P",{});var B=w(u);_=S(B,"Finally switch the two textures to read and write in the updated textures"),B.forEach(f),b=U(A),h=$(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(h).forEach(f),this.h()},h(){T(h,"id","canvas"),qe(h,"background-color","black"),T(h,"width",Mn),T(h,"height",Nn)},m(A,R){g(A,e,R),m(e,o),g(A,n,R),g(A,i,R),m(i,a),m(i,s),m(s,r),m(i,l),g(A,c,R),g(A,u,R),m(u,_),g(A,b,R),g(A,h,R)},p:le,i:le,o:le,d(A){A&&f(e),A&&f(n),A&&f(i),A&&f(c),A&&f(u),A&&f(b),A&&f(h)}}}const Mn=800,Nn=600;function qo(t){function e(){const o=$t();de(o.canvas);const{ids:n,positions:i,texDimensions:a}=zo(100,{width:Mn,height:Nn});No(o,n),Yo(o,{positions:i,texDimensions:a});function s(){de(o.canvas);const r=Vo({gl:o,texDimensions:a});Oo({gl:o,positionTex:r,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Le(()=>e()),[]}let Go=class extends Te{constructor(e){super(),xe(this,e,qo,Wo,$e,{})}};const Ho=`attribute float id;
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
`,jo=`precision mediump float;
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
`;let Ze,st,jt,Kt;const Ko=(t,e)=>{const{ids:o,colors:n}=e;st=_e(t,[Ho,jo]),Ze={idAttributeLocation:t.getAttribLocation(st,"id"),colorAttributeLocation:t.getAttribLocation(st,"color"),texDimensionsUniformLocation:t.getUniformLocation(st,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(st,"u_resolution")},jt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,jt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Kt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Kt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Qo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;de(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,jt),e.vertexAttribPointer(Ze.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Ze.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Kt),e.vertexAttribPointer(Ze.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Ze.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(st),e.uniform2f(Ze.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ze.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function Jo(t,e){const o=t.width*t.height,n=new Array(o).fill(0).map((s,r)=>r),i=new Array(o).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:l,y:c}=Zo(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:i}}const Zo=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},ei=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ti=`precision highp float;

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

`;let et,tt,Qt,wt,Yt,Tn,xn,ht,Lt,Rt;const ni=(t,e)=>{const{positions:o,texDimensions:n}=e;return tt=_e(t,[ei,ti]),et={positionAttributeLocation:t.getAttribLocation(tt,"position"),positionTexLocation:t.getUniformLocation(tt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(tt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(tt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(tt,"u_resolution")},Qt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Qt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),wt=Re(t,new Float32Array(o),n.width,n.height),Yt=Re(t,null,n.width,n.height),Tn=ye(t,wt),xn=ye(t,Yt),ht={fb:Tn,tex:wt},Lt={fb:xn,tex:Yt},wt},oi=t=>{const{gl:e,texDimensions:o}=t,n=Date.now();Rt||(Rt=n-1);const i=n-Rt;Rt=n,e.bindFramebuffer(e.FRAMEBUFFER,Lt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Qt),e.enableVertexAttribArray(et.positionAttributeLocation),e.vertexAttribPointer(et.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ht.tex),e.useProgram(tt),e.uniform1i(et.positionTexLocation,0),e.uniform1f(et.deltaTimeUniformLocation,i),e.uniform2f(et.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(et.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=ht;ht=Lt,Lt=a}return ht.tex};function ii(t){let e,o,n,i,a,s,r,l,c,u,_=t[2]?"Play":"Pause",b,h,A,R=t[1]?"Normal Speed":"Slow Mo",y,v,B,N,X=t[4].width*t[4].height+"",O,Y,d,L,p,E,te,Q;return{c(){e=x("p"),o=I("Same principle with a shader to update positions and a shader to draw particles."),n=D(),i=x("p"),a=I(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=D(),r=x("canvas"),l=D(),c=x("div"),u=x("button"),b=I(_),h=D(),A=x("button"),y=I(R),v=D(),B=x("span"),N=I("particles: "),O=I(X),Y=D(),d=x("label"),L=I("Smooth steps"),p=D(),E=x("input"),this.h()},l(C){e=$(C,"P",{});var k=w(e);o=S(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(f),n=U(C),i=$(C,"P",{});var J=w(i);a=S(J,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),J.forEach(f),s=U(C),r=$(C,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(r).forEach(f),l=U(C),c=$(C,"DIV",{});var q=w(c);u=$(q,"BUTTON",{});var ce=w(u);b=S(ce,_),ce.forEach(f),h=U(q),A=$(q,"BUTTON",{});var F=w(A);y=S(F,R),F.forEach(f),v=U(q),B=$(q,"SPAN",{});var Z=w(B);N=S(Z,"particles: "),O=S(Z,X),Z.forEach(f),Y=U(q),d=$(q,"LABEL",{for:!0});var ee=w(d);L=S(ee,"Smooth steps"),ee.forEach(f),p=U(q),E=$(q,"INPUT",{type:!0,min:!0}),q.forEach(f),this.h()},h(){T(r,"id","canvas"),qe(r,"background-color","black"),T(r,"width",t[3].width),T(r,"height",t[3].height),T(d,"for","steps"),T(E,"type","number"),T(E,"min",0)},m(C,k){g(C,e,k),m(e,o),g(C,n,k),g(C,i,k),m(i,a),g(C,s,k),g(C,r,k),g(C,l,k),g(C,c,k),m(c,u),m(u,b),m(c,h),m(c,A),m(A,y),m(c,v),m(c,B),m(B,N),m(B,O),m(c,Y),m(c,d),m(d,L),m(c,p),m(c,E),ae(E,t[0]),te||(Q=[fe(u,"click",t[5]),fe(A,"click",t[6]),fe(E,"input",t[7])],te=!0)},p(C,[k]){k&4&&_!==(_=C[2]?"Play":"Pause")&&Je(b,_),k&2&&R!==(R=C[1]?"Normal Speed":"Slow Mo")&&Je(y,R),k&1&&se(E.value)!==C[0]&&ae(E,C[0])},i:le,o:le,d(C){C&&f(e),C&&f(n),C&&f(i),C&&f(s),C&&f(r),C&&f(l),C&&f(c),te=!1,Ot(Q)}}}function ri(t,e,o){const n={width:800,height:600},i={width:100,height:100};let a=1,s=!1,r=!0;function l(){const b=$t();de(b.canvas);const{ids:h,positions:A,colors:R}=Jo(i,{width:n.width,height:n.height});Ko(b,{ids:h,colors:R,texDimensions:i});let y=ni(b,{positions:A,texDimensions:i});function v(){if(de(b.canvas),!r)for(let B=0;B<a;B++)y=oi({gl:b,texDimensions:i});return Qo({gl:b,positionTex:y,textureDimension:i,ids:h}),r?requestAnimationFrame(v):s?setTimeout(()=>requestAnimationFrame(v),1e3):requestAnimationFrame(v)}requestAnimationFrame(v)}Le(()=>l());const c=()=>o(2,r=!r),u=()=>o(1,s=!s);function _(){a=se(this.value),o(0,a)}return[a,s,r,n,i,c,u,_]}class ai extends Te{constructor(e){super(),xe(this,e,ri,ii,$e,{})}}const si=`attribute float id;
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
`,li=`precision mediump float;
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
`;let nt,lt,Jt,Zt;const ci=(t,e)=>{const{ids:o,colors:n}=e;lt=_e(t,[si,li]),nt={idAttributeLocation:t.getAttribLocation(lt,"id"),colorAttributeLocation:t.getAttribLocation(lt,"color"),texDimensionsUniformLocation:t.getUniformLocation(lt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(lt,"u_resolution")},Jt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Jt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Zt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Zt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},fi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;de(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Jt),e.vertexAttribPointer(nt.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(nt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Zt),e.vertexAttribPointer(nt.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(nt.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(lt),e.uniform2f(nt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(nt.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function ui(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((l,c)=>c),s=new Array(i).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="disk"){const{x:u,y:_}=di(o,20);return[u,_,0,0]}if(n==="square"){const{x:u,y:_}=mi(o,550);return[u,_,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=pi(o,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=$n(o,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=$n(o,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const mi=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},di=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},pi=(t,e,o)=>{const n=en(e,0,o,0,t.width,!1),i=en(e,0,o,0,t.height,!1);return{x:n,y:i}},$n=(t,e,o,n)=>{const i=en(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,l=n.y,u=Math.sin(l*i)*200+t.height/2;return{x:r,y:u}},en=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?An(s,n,i):An(s,i,n):s},An=function(t,e,o){return Math.max(Math.min(t,o),e)},hi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,vi=`precision highp float;

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

`;let ze,Xe,tn,Ft,Vt,bn,gn,vt,Pt;const _i=(t,e)=>{const{positions:o,texDimensions:n}=e;return Xe=_e(t,[hi,vi]),ze={positionAttributeLocation:t.getAttribLocation(Xe,"position"),positionTexLocation:t.getUniformLocation(Xe,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Xe,"interactionRange"),dragUniformLocation:t.getUniformLocation(Xe,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Xe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Xe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Xe,"u_resolution")},tn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,tn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ft=Re(t,new Float32Array(o),n.width,n.height),Vt=Re(t,null,n.width,n.height),bn=ye(t,Ft),gn=ye(t,Vt),vt={fb:bn,tex:Ft},Pt={fb:gn,tex:Vt},Ft},Ti=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Pt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,tn),e.enableVertexAttribArray(ze.positionAttributeLocation),e.vertexAttribPointer(ze.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,vt.tex),e.useProgram(Xe),e.uniform1i(ze.positionTexLocation,0),e.uniform1f(ze.dragUniformLocation,i),e.uniform1f(ze.interactionRangeUniformLocation,n),e.uniform1f(ze.deltaTimeUniformLocation,a),e.uniform2f(ze.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ze.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=vt;vt=Pt,Pt=s}return vt.tex};function xi(t){let e,o,n,i,a,s,r,l,c,u,_=t[2]?"Play":"Pause",b,h,A,R=t[1]?"Normal Speed":"Slow Mo",y,v,B,N,X=t[5].width*t[5].height+"",O,Y,d,L,p,E,te,Q,C,k,J,q,ce,F,Z,ee,ne,ve,Ae,oe,Pe,pe,ue,Be,be,ie,Ie,Fe,he,Ne;return{c(){e=x("p"),o=I("Same principle with a shader to update positions and a shader to draw particles."),n=D(),i=x("p"),a=I(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=D(),r=x("canvas"),l=D(),c=x("div"),u=x("button"),b=I(_),h=D(),A=x("button"),y=I(R),v=D(),B=x("span"),N=I("particles: "),O=I(X),Y=D(),d=x("label"),L=I("Smooth steps"),p=D(),E=x("input"),te=D(),Q=x("div"),C=x("ul"),k=x("li"),J=x("label"),q=I("Interaction Range"),ce=D(),F=x("input"),Z=D(),ee=x("li"),ne=x("label"),ve=I("Drag"),Ae=D(),oe=x("input"),Pe=D(),pe=x("li"),ue=x("label"),Be=I("Time step"),be=D(),ie=x("input"),Ie=D(),Fe=x("ul"),this.h()},l(P){e=$(P,"P",{});var z=w(e);o=S(z,"Same principle with a shader to update positions and a shader to draw particles."),z.forEach(f),n=U(P),i=$(P,"P",{});var Ge=w(i);a=S(Ge,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Ge.forEach(f),s=U(P),r=$(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(r).forEach(f),l=U(P),c=$(P,"DIV",{});var M=w(c);u=$(M,"BUTTON",{});var re=w(u);b=S(re,_),re.forEach(f),h=U(M),A=$(M,"BUTTON",{});var He=w(A);y=S(He,R),He.forEach(f),v=U(M),B=$(M,"SPAN",{});var Oe=w(B);N=S(Oe,"particles: "),O=S(Oe,X),Oe.forEach(f),Y=U(M),d=$(M,"LABEL",{for:!0});var me=w(d);L=S(me,"Smooth steps"),me.forEach(f),p=U(M),E=$(M,"INPUT",{type:!0,min:!0}),M.forEach(f),te=U(P),Q=$(P,"DIV",{});var Me=w(Q);C=$(Me,"UL",{});var ge=w(C);k=$(ge,"LI",{});var De=w(k);J=$(De,"LABEL",{for:!0});var je=w(J);q=S(je,"Interaction Range"),je.forEach(f),ce=U(De),F=$(De,"INPUT",{id:!0,type:!0,min:!0}),De.forEach(f),Z=U(ge),ee=$(ge,"LI",{});var Ue=w(ee);ne=$(Ue,"LABEL",{for:!0});var Ee=w(ne);ve=S(Ee,"Drag"),Ee.forEach(f),Ae=U(Ue),oe=$(Ue,"INPUT",{id:!0,type:!0,min:!0}),Ue.forEach(f),Pe=U(ge),pe=$(ge,"LI",{});var we=w(pe);ue=$(we,"LABEL",{for:!0});var Ke=w(ue);Be=S(Ke,"Time step"),Ke.forEach(f),be=U(we),ie=$(we,"INPUT",{id:!0,type:!0,min:!0}),we.forEach(f),Ie=U(ge),Fe=$(ge,"UL",{}),w(Fe).forEach(f),ge.forEach(f),Me.forEach(f),this.h()},h(){T(r,"id","canvas"),qe(r,"background-color","black"),T(r,"width",t[4].width),T(r,"height",t[4].height),T(d,"for","steps"),T(E,"type","number"),T(E,"min",0),T(J,"for","interactionRange"),T(F,"id","interactionRange"),T(F,"type","number"),T(F,"min",0),T(ne,"for","drag"),T(oe,"id","drag"),T(oe,"type","number"),T(oe,"min",0),T(ue,"for","deltaTime"),T(ie,"id","deltaTime"),T(ie,"type","number"),T(ie,"min",0)},m(P,z){g(P,e,z),m(e,o),g(P,n,z),g(P,i,z),m(i,a),g(P,s,z),g(P,r,z),g(P,l,z),g(P,c,z),m(c,u),m(u,b),m(c,h),m(c,A),m(A,y),m(c,v),m(c,B),m(B,N),m(B,O),m(c,Y),m(c,d),m(d,L),m(c,p),m(c,E),ae(E,t[0]),g(P,te,z),g(P,Q,z),m(Q,C),m(C,k),m(k,J),m(J,q),m(k,ce),m(k,F),ae(F,t[3].interactionRange),m(C,Z),m(C,ee),m(ee,ne),m(ne,ve),m(ee,Ae),m(ee,oe),ae(oe,t[3].drag),m(C,Pe),m(C,pe),m(pe,ue),m(ue,Be),m(pe,be),m(pe,ie),ae(ie,t[3].timeStep),m(C,Ie),m(C,Fe),he||(Ne=[fe(u,"click",t[6]),fe(A,"click",t[7]),fe(E,"input",t[8]),fe(F,"input",t[9]),fe(oe,"input",t[10]),fe(ie,"input",t[11])],he=!0)},p(P,[z]){z&4&&_!==(_=P[2]?"Play":"Pause")&&Je(b,_),z&2&&R!==(R=P[1]?"Normal Speed":"Slow Mo")&&Je(y,R),z&1&&se(E.value)!==P[0]&&ae(E,P[0]),z&8&&se(F.value)!==P[3].interactionRange&&ae(F,P[3].interactionRange),z&8&&se(oe.value)!==P[3].drag&&ae(oe,P[3].drag),z&8&&se(ie.value)!==P[3].timeStep&&ae(ie,P[3].timeStep)},i:le,o:le,d(P){P&&f(e),P&&f(n),P&&f(i),P&&f(s),P&&f(r),P&&f(l),P&&f(c),P&&f(te),P&&f(Q),he=!1,Ot(Ne)}}}function $i(t,e,o){const n={width:800,height:600},i={width:10,height:10};let a=1,s=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const y=$t();de(y.canvas);const{ids:v,positions:B,colors:N}=ui({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"circle"});ci(y,{ids:v,colors:N,texDimensions:i});let X=_i(y,{positions:B,texDimensions:i});function O(){if(de(y.canvas),!r)for(let Y=0;Y<a;Y++)X=Ti({gl:y,texDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return fi({gl:y,positionTex:X,textureDimension:i,ids:v}),r?requestAnimationFrame(O):s?setTimeout(()=>requestAnimationFrame(O),1e3):requestAnimationFrame(O)}requestAnimationFrame(O)}Le(()=>c());const u=()=>o(2,r=!r),_=()=>o(1,s=!s);function b(){a=se(this.value),o(0,a)}function h(){l.interactionRange=se(this.value),o(3,l)}function A(){l.drag=se(this.value),o(3,l)}function R(){l.timeStep=se(this.value),o(3,l)}return[a,s,r,l,n,i,u,_,b,h,A,R]}class Ai extends Te{constructor(e){super(),xe(this,e,$i,xi,$e,{})}}const bi=`attribute float id;
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
`,gi=`precision mediump float;
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
`;let ot,ct,nn,on;const Ei=(t,e)=>{const{ids:o,colors:n}=e;ct=_e(t,[bi,gi]),ot={idAttributeLocation:t.getAttribLocation(ct,"id"),colorAttributeLocation:t.getAttribLocation(ct,"color"),texDimensionsUniformLocation:t.getUniformLocation(ct,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ct,"u_resolution")},nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),on=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,on),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},wi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;de(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,nn),e.vertexAttribPointer(ot.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(ot.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,on),e.vertexAttribPointer(ot.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(ot.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(ct),e.uniform2f(ot.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ot.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function Ri(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((l,c)=>c),s=new Array(i).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Fi(o);return[c,u,0,0]}if(n==="disk"){const{x:u,y:_}=Ui(o,200);return[u,_,0,0]}if(n==="square"){const{x:u,y:_}=Di(o,300);return[u,_,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=yi(o,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=En(o,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=En(o,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Fi=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Di=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Ui=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},yi=(t,e,o)=>{const n=rn(e,0,o,0,t.width,!1),i=rn(e,0,o,0,t.height,!1);return{x:n,y:i}},En=(t,e,o,n)=>{const i=rn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,l=n.y,u=Math.sin(l*i)*200+t.height/2;return{x:r,y:u}},rn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?wn(s,n,i):wn(s,i,n):s},wn=function(t,e,o){return Math.max(Math.min(t,o),e)},Li=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Pi=`precision highp float;

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

`;let ke,Ye,an,Dt,Wt,Rn,Fn,_t,Bt;const Bi=(t,e)=>{const{positions:o,texDimensions:n}=e,i=Pi.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return Ye=_e(t,[Li,i]),ke={positionAttributeLocation:t.getAttribLocation(Ye,"position"),positionTexLocation:t.getUniformLocation(Ye,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ye,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ye,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ye,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ye,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ye,"u_resolution")},an=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,an),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Dt=Re(t,new Float32Array(o),n.width,n.height),Wt=Re(t,null,n.width,n.height),Rn=ye(t,Dt),Fn=ye(t,Wt),_t={fb:Rn,tex:Dt},Bt={fb:Fn,tex:Wt},Dt},Ii=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Bt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,an),e.enableVertexAttribArray(ke.positionAttributeLocation),e.vertexAttribPointer(ke.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,_t.tex),e.useProgram(Ye),e.uniform1i(ke.positionTexLocation,0),e.uniform1f(ke.dragUniformLocation,i),e.uniform1f(ke.interactionRangeUniformLocation,n),e.uniform1f(ke.deltaTimeUniformLocation,a),e.uniform2f(ke.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ke.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=_t;_t=Bt,Bt=s}return _t.tex};function Si(t){let e,o,n,i,a,s,r,l,c,u,_,b,h,A=t[2]?"Play":"Pause",R,y,v,B=t[1]?"Normal Speed":"Slow Mo",N,X,O,Y,d=t[5].width*t[5].height+"",L,p,E,te,Q,C,k,J,q,ce,F,Z,ee,ne,ve,Ae,oe,Pe,pe,ue,Be,be,ie,Ie,Fe,he,Ne,P,z,Ge;return{c(){e=x("p"),o=I("This could be a kind of water simulation."),n=D(),i=x("p"),a=I(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),s=D(),r=x("p"),l=I("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=D(),u=x("canvas"),_=D(),b=x("div"),h=x("button"),R=I(A),y=D(),v=x("button"),N=I(B),X=D(),O=x("span"),Y=I("particles: "),L=I(d),p=D(),E=x("label"),te=I("Smooth steps"),Q=D(),C=x("input"),k=D(),J=x("div"),q=x("ul"),ce=x("li"),F=x("label"),Z=I("Interaction Range"),ee=D(),ne=x("input"),ve=D(),Ae=x("li"),oe=x("label"),Pe=I("Drag"),pe=D(),ue=x("input"),Be=D(),be=x("li"),ie=x("label"),Ie=I("Time step"),Fe=D(),he=x("input"),Ne=D(),P=x("ul"),this.h()},l(M){e=$(M,"P",{});var re=w(e);o=S(re,"This could be a kind of water simulation."),re.forEach(f),n=U(M),i=$(M,"P",{});var He=w(i);a=S(He,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),He.forEach(f),s=U(M),r=$(M,"P",{});var Oe=w(r);l=S(Oe,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),Oe.forEach(f),c=U(M),u=$(M,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(u).forEach(f),_=U(M),b=$(M,"DIV",{});var me=w(b);h=$(me,"BUTTON",{});var Me=w(h);R=S(Me,A),Me.forEach(f),y=U(me),v=$(me,"BUTTON",{});var ge=w(v);N=S(ge,B),ge.forEach(f),X=U(me),O=$(me,"SPAN",{});var De=w(O);Y=S(De,"particles: "),L=S(De,d),De.forEach(f),p=U(me),E=$(me,"LABEL",{for:!0});var je=w(E);te=S(je,"Smooth steps"),je.forEach(f),Q=U(me),C=$(me,"INPUT",{type:!0,min:!0}),me.forEach(f),k=U(M),J=$(M,"DIV",{});var Ue=w(J);q=$(Ue,"UL",{});var Ee=w(q);ce=$(Ee,"LI",{});var we=w(ce);F=$(we,"LABEL",{for:!0});var Ke=w(F);Z=S(Ke,"Interaction Range"),Ke.forEach(f),ee=U(we),ne=$(we,"INPUT",{id:!0,type:!0,min:!0}),we.forEach(f),ve=U(Ee),Ae=$(Ee,"LI",{});var At=w(Ae);oe=$(At,"LABEL",{for:!0});var mn=w(oe);Pe=S(mn,"Drag"),mn.forEach(f),pe=U(At),ue=$(At,"INPUT",{id:!0,type:!0,min:!0}),At.forEach(f),Be=U(Ee),be=$(Ee,"LI",{});var bt=w(be);ie=$(bt,"LABEL",{for:!0});var dn=w(ie);Ie=S(dn,"Time step"),dn.forEach(f),Fe=U(bt),he=$(bt,"INPUT",{id:!0,type:!0,min:!0}),bt.forEach(f),Ne=U(Ee),P=$(Ee,"UL",{}),w(P).forEach(f),Ee.forEach(f),Ue.forEach(f),this.h()},h(){T(u,"id","canvas"),qe(u,"background-color","black"),T(u,"width",t[4].width),T(u,"height",t[4].height),T(E,"for","steps"),T(C,"type","number"),T(C,"min",0),T(F,"for","interactionRange"),T(ne,"id","interactionRange"),T(ne,"type","number"),T(ne,"min",0),T(oe,"for","drag"),T(ue,"id","drag"),T(ue,"type","number"),T(ue,"min",0),T(ie,"for","deltaTime"),T(he,"id","deltaTime"),T(he,"type","number"),T(he,"min",0)},m(M,re){g(M,e,re),m(e,o),g(M,n,re),g(M,i,re),m(i,a),g(M,s,re),g(M,r,re),m(r,l),g(M,c,re),g(M,u,re),g(M,_,re),g(M,b,re),m(b,h),m(h,R),m(b,y),m(b,v),m(v,N),m(b,X),m(b,O),m(O,Y),m(O,L),m(b,p),m(b,E),m(E,te),m(b,Q),m(b,C),ae(C,t[0]),g(M,k,re),g(M,J,re),m(J,q),m(q,ce),m(ce,F),m(F,Z),m(ce,ee),m(ce,ne),ae(ne,t[3].interactionRange),m(q,ve),m(q,Ae),m(Ae,oe),m(oe,Pe),m(Ae,pe),m(Ae,ue),ae(ue,t[3].drag),m(q,Be),m(q,be),m(be,ie),m(ie,Ie),m(be,Fe),m(be,he),ae(he,t[3].timeStep),m(q,Ne),m(q,P),z||(Ge=[fe(h,"click",t[6]),fe(v,"click",t[7]),fe(C,"input",t[8]),fe(ne,"input",t[9]),fe(ue,"input",t[10]),fe(he,"input",t[11])],z=!0)},p(M,[re]){re&4&&A!==(A=M[2]?"Play":"Pause")&&Je(R,A),re&2&&B!==(B=M[1]?"Normal Speed":"Slow Mo")&&Je(N,B),re&1&&se(C.value)!==M[0]&&ae(C,M[0]),re&8&&se(ne.value)!==M[3].interactionRange&&ae(ne,M[3].interactionRange),re&8&&se(ue.value)!==M[3].drag&&ae(ue,M[3].drag),re&8&&se(he.value)!==M[3].timeStep&&ae(he,M[3].timeStep)},i:le,o:le,d(M){M&&f(e),M&&f(n),M&&f(i),M&&f(s),M&&f(r),M&&f(c),M&&f(u),M&&f(_),M&&f(b),M&&f(k),M&&f(J),z=!1,Ot(Ge)}}}function Ci(t,e,o){const n={width:800,height:600},i={width:500,height:20};let a=1,s=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const y=$t();de(y.canvas);const{ids:v,positions:B,colors:N}=Ri({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Ei(y,{ids:v,colors:N,texDimensions:i});let X=Bi(y,{positions:B,texDimensions:i});function O(){if(de(y.canvas),!r)for(let Y=0;Y<a;Y++)X=Ii({gl:y,texDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return wi({gl:y,positionTex:X,textureDimension:i,ids:v}),r?requestAnimationFrame(O):s?setTimeout(()=>requestAnimationFrame(O),1e3):requestAnimationFrame(O)}requestAnimationFrame(O)}Le(()=>c());const u=()=>o(2,r=!r),_=()=>o(1,s=!s);function b(){a=se(this.value),o(0,a)}function h(){l.interactionRange=se(this.value),o(3,l)}function A(){l.drag=se(this.value),o(3,l)}function R(){l.timeStep=se(this.value),o(3,l)}return[a,s,r,l,n,i,u,_,b,h,A,R]}class Mi extends Te{constructor(e){super(),xe(this,e,Ci,Si,$e,{})}}const Ni=`attribute float id;
attribute float color;
uniform sampler2D positionTex;
uniform vec2 texDimensions;

uniform vec2 u_resolution;
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
    vec2 zeroToOne = position / u_resolution;
 
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
`,Oi=`precision mediump float;
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
`;let Qe,it,sn,ln;const zi=(t,e)=>{const{ids:o,colors:n}=e;it=_e(t,[Ni,Oi]),Qe={idAttributeLocation:t.getAttribLocation(it,"id"),colorAttributeLocation:t.getAttribLocation(it,"color"),sizeUniformLocation:t.getUniformLocation(it,"size"),texDimensionsUniformLocation:t.getUniformLocation(it,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(it,"u_resolution")},sn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,sn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),ln=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ln),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Xi=t=>{const{gl:e,positionTex:o,textureDimension:n,particlesSize:i,ids:a}=t,s=1,r=e.FLOAT,l=!1,c=0,u=0;de(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,sn),e.vertexAttribPointer(Qe.idAttributeLocation,s,r,l,c,u),e.enableVertexAttribArray(Qe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,ln),e.vertexAttribPointer(Qe.colorAttributeLocation,s,r,l,c,u),e.enableVertexAttribArray(Qe.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(it),e.uniform1f(Qe.sizeUniformLocation,i),e.uniform2f(Qe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Qe.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,u,a.length)};function ki(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((l,c)=>c),s=new Array(i).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Yi(o);return[c,u,0,0]}if(n==="disk"){const{x:u,y:_}=Wi(o,200);return[u,_,0,0]}if(n==="square"){const{x:u,y:_}=Vi(o,300);return[u,_,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=qi(o,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Dn(o,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Dn(o,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Yi=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Vi=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Wi=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},qi=(t,e,o)=>{const n=cn(e,0,o,0,t.width,!1),i=cn(e,0,o,0,t.height,!1);return{x:n,y:i}},Dn=(t,e,o,n)=>{const i=cn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,l=n.y,u=Math.sin(l*i)*200+t.height/2;return{x:r,y:u}},cn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?Un(s,n,i):Un(s,i,n):s},Un=function(t,e,o){return Math.max(Math.min(t,o),e)},Gi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Hi=`precision highp float;

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

`;let Ve,We,fn,Ut,qt,yn,Ln,Tt,It;const ji=(t,e)=>{const{positions:o,texDimensions:n}=e,i=Hi.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return We=_e(t,[Gi,i]),Ve={positionAttributeLocation:t.getAttribLocation(We,"position"),positionTexLocation:t.getUniformLocation(We,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(We,"interactionRange"),dragUniformLocation:t.getUniformLocation(We,"drag"),deltaTimeUniformLocation:t.getUniformLocation(We,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(We,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(We,"u_resolution")},fn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,fn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ut=Re(t,new Float32Array(o),n.width,n.height),qt=Re(t,null,n.width,n.height),yn=ye(t,Ut),Ln=ye(t,qt),Tt={fb:yn,tex:Ut},It={fb:Ln,tex:qt},Ut},Ki=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,It.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,fn),e.enableVertexAttribArray(Ve.positionAttributeLocation),e.vertexAttribPointer(Ve.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Tt.tex),e.useProgram(We),e.uniform1i(Ve.positionTexLocation,0),e.uniform1f(Ve.dragUniformLocation,i),e.uniform1f(Ve.interactionRangeUniformLocation,n),e.uniform1f(Ve.deltaTimeUniformLocation,a),e.uniform2f(Ve.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Ve.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Tt;Tt=It,It=s}return Tt.tex};function Qi(t){let e,o,n,i,a=t[2]?"Play":"Pause",s,r,l,c=t[1]?"Normal Speed":"Slow Mo",u,_,b,h,A=t[5].width*t[5].height+"",R,y,v,B,N,X,O,Y,d,L,p,E,te,Q,C,k,J,q,ce,F,Z,ee,ne,ve,Ae,oe,Pe,pe,ue,Be,be,ie,Ie,Fe,he,Ne;return{c(){e=x("canvas"),o=D(),n=x("div"),i=x("button"),s=I(a),r=D(),l=x("button"),u=I(c),_=D(),b=x("span"),h=I("particles: "),R=I(A),y=D(),v=x("label"),B=I("Smooth steps"),N=D(),X=x("input"),O=D(),Y=x("div"),d=x("ul"),L=x("li"),p=x("label"),E=I("Interaction Range"),te=D(),Q=x("input"),C=D(),k=x("li"),J=x("label"),q=I("Drag"),ce=D(),F=x("input"),Z=D(),ee=x("li"),ne=x("label"),ve=I("Time step"),Ae=D(),oe=x("input"),Pe=D(),pe=x("li"),ue=x("label"),Be=I("Particles size"),be=D(),ie=x("input"),Ie=D(),Fe=x("ul"),this.h()},l(P){e=$(P,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),w(e).forEach(f),o=U(P),n=$(P,"DIV",{});var z=w(n);i=$(z,"BUTTON",{});var Ge=w(i);s=S(Ge,a),Ge.forEach(f),r=U(z),l=$(z,"BUTTON",{});var M=w(l);u=S(M,c),M.forEach(f),_=U(z),b=$(z,"SPAN",{});var re=w(b);h=S(re,"particles: "),R=S(re,A),re.forEach(f),y=U(z),v=$(z,"LABEL",{for:!0});var He=w(v);B=S(He,"Smooth steps"),He.forEach(f),N=U(z),X=$(z,"INPUT",{type:!0,min:!0}),z.forEach(f),O=U(P),Y=$(P,"DIV",{});var Oe=w(Y);d=$(Oe,"UL",{});var me=w(d);L=$(me,"LI",{});var Me=w(L);p=$(Me,"LABEL",{for:!0});var ge=w(p);E=S(ge,"Interaction Range"),ge.forEach(f),te=U(Me),Q=$(Me,"INPUT",{id:!0,type:!0,min:!0}),Me.forEach(f),C=U(me),k=$(me,"LI",{});var De=w(k);J=$(De,"LABEL",{for:!0});var je=w(J);q=S(je,"Drag"),je.forEach(f),ce=U(De),F=$(De,"INPUT",{id:!0,type:!0,min:!0}),De.forEach(f),Z=U(me),ee=$(me,"LI",{});var Ue=w(ee);ne=$(Ue,"LABEL",{for:!0});var Ee=w(ne);ve=S(Ee,"Time step"),Ee.forEach(f),Ae=U(Ue),oe=$(Ue,"INPUT",{id:!0,type:!0,min:!0}),Ue.forEach(f),Pe=U(me),pe=$(me,"LI",{});var we=w(pe);ue=$(we,"LABEL",{for:!0});var Ke=w(ue);Be=S(Ke,"Particles size"),Ke.forEach(f),be=U(we),ie=$(we,"INPUT",{id:!0,type:!0,min:!0}),we.forEach(f),Ie=U(me),Fe=$(me,"UL",{}),w(Fe).forEach(f),me.forEach(f),Oe.forEach(f),this.h()},h(){T(e,"id","canvas"),qe(e,"background-color","black"),T(e,"width",t[4].width),T(e,"height",t[4].height),T(v,"for","steps"),T(X,"type","number"),T(X,"min",0),T(p,"for","interactionRange"),T(Q,"id","interactionRange"),T(Q,"type","number"),T(Q,"min",0),T(J,"for","drag"),T(F,"id","drag"),T(F,"type","number"),T(F,"min",0),T(ne,"for","deltaTime"),T(oe,"id","deltaTime"),T(oe,"type","number"),T(oe,"min",0),T(ue,"for","particlesSize"),T(ie,"id","particlesSize"),T(ie,"type","number"),T(ie,"min",0)},m(P,z){g(P,e,z),g(P,o,z),g(P,n,z),m(n,i),m(i,s),m(n,r),m(n,l),m(l,u),m(n,_),m(n,b),m(b,h),m(b,R),m(n,y),m(n,v),m(v,B),m(n,N),m(n,X),ae(X,t[0]),g(P,O,z),g(P,Y,z),m(Y,d),m(d,L),m(L,p),m(p,E),m(L,te),m(L,Q),ae(Q,t[3].interactionRange),m(d,C),m(d,k),m(k,J),m(J,q),m(k,ce),m(k,F),ae(F,t[3].drag),m(d,Z),m(d,ee),m(ee,ne),m(ne,ve),m(ee,Ae),m(ee,oe),ae(oe,t[3].timeStep),m(d,Pe),m(d,pe),m(pe,ue),m(ue,Be),m(pe,be),m(pe,ie),ae(ie,t[3].particlesSize),m(d,Ie),m(d,Fe),he||(Ne=[fe(i,"click",t[6]),fe(l,"click",t[7]),fe(X,"input",t[8]),fe(Q,"input",t[9]),fe(F,"input",t[10]),fe(oe,"input",t[11]),fe(ie,"input",t[12])],he=!0)},p(P,[z]){z&4&&a!==(a=P[2]?"Play":"Pause")&&Je(s,a),z&2&&c!==(c=P[1]?"Normal Speed":"Slow Mo")&&Je(u,c),z&1&&se(X.value)!==P[0]&&ae(X,P[0]),z&8&&se(Q.value)!==P[3].interactionRange&&ae(Q,P[3].interactionRange),z&8&&se(F.value)!==P[3].drag&&ae(F,P[3].drag),z&8&&se(oe.value)!==P[3].timeStep&&ae(oe,P[3].timeStep),z&8&&se(ie.value)!==P[3].particlesSize&&ae(ie,P[3].particlesSize)},i:le,o:le,d(P){P&&f(e),P&&f(o),P&&f(n),P&&f(O),P&&f(Y),he=!1,Ot(Ne)}}}function Ji(t,e,o){const n={width:800,height:600},i={width:500,height:20};let a=1,s=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10,particlesSize:15};function c(){const v=$t();de(v.canvas);const{ids:B,positions:N,colors:X}=ki({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"disk"});zi(v,{ids:B,colors:X,texDimensions:i});let O=ji(v,{positions:N,texDimensions:i});function Y(){if(de(v.canvas),!r)for(let d=0;d<a;d++)O=Ki({gl:v,texDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return Xi({gl:v,positionTex:O,textureDimension:i,particlesSize:l.particlesSize,ids:B}),r?requestAnimationFrame(Y):s?setTimeout(()=>requestAnimationFrame(Y),1e3):requestAnimationFrame(Y)}requestAnimationFrame(Y)}Le(()=>c());const u=()=>o(2,r=!r),_=()=>o(1,s=!s);function b(){a=se(this.value),o(0,a)}function h(){l.interactionRange=se(this.value),o(3,l)}function A(){l.drag=se(this.value),o(3,l)}function R(){l.timeStep=se(this.value),o(3,l)}function y(){l.particlesSize=se(this.value),o(3,l)}return[a,s,r,l,n,i,u,_,b,h,A,R,y]}class Zi extends Te{constructor(e){super(),xe(this,e,Ji,Qi,$e,{})}}function er(t){let e;return{c(){e=I("About")},l(o){e=S(o,"About")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function tr(t){let e;return{c(){e=I("Test 1")},l(o){e=S(o,"Test 1")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function nr(t){let e;return{c(){e=I("Test 2")},l(o){e=S(o,"Test 2")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function or(t){let e;return{c(){e=I("Test 3")},l(o){e=S(o,"Test 3")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function ir(t){let e;return{c(){e=I("Test 4")},l(o){e=S(o,"Test 4")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function rr(t){let e;return{c(){e=I("Test 5")},l(o){e=S(o,"Test 5")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function ar(t){let e;return{c(){e=I("Test 6")},l(o){e=S(o,"Test 6")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function sr(t){let e;return{c(){e=I("Test 7")},l(o){e=S(o,"Test 7")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function lr(t){let e;return{c(){e=I("Test 8")},l(o){e=S(o,"Test 8")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function cr(t){let e;return{c(){e=I("Test 9")},l(o){e=S(o,"Test 9")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function fr(t){let e;return{c(){e=I("Test 10")},l(o){e=S(o,"Test 10")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function ur(t){let e,o,n,i,a,s,r,l,c,u,_,b,h,A,R,y,v,B,N,X,O,Y;return e=new Se({props:{$$slots:{default:[er]},$$scope:{ctx:t}}}),n=new Se({props:{$$slots:{default:[tr]},$$scope:{ctx:t}}}),a=new Se({props:{$$slots:{default:[nr]},$$scope:{ctx:t}}}),r=new Se({props:{$$slots:{default:[or]},$$scope:{ctx:t}}}),c=new Se({props:{$$slots:{default:[ir]},$$scope:{ctx:t}}}),_=new Se({props:{$$slots:{default:[rr]},$$scope:{ctx:t}}}),h=new Se({props:{$$slots:{default:[ar]},$$scope:{ctx:t}}}),R=new Se({props:{$$slots:{default:[sr]},$$scope:{ctx:t}}}),v=new Se({props:{$$slots:{default:[lr]},$$scope:{ctx:t}}}),N=new Se({props:{$$slots:{default:[cr]},$$scope:{ctx:t}}}),O=new Se({props:{$$slots:{default:[fr]},$$scope:{ctx:t}}}),{c(){G(e.$$.fragment),o=D(),G(n.$$.fragment),i=D(),G(a.$$.fragment),s=D(),G(r.$$.fragment),l=D(),G(c.$$.fragment),u=D(),G(_.$$.fragment),b=D(),G(h.$$.fragment),A=D(),G(R.$$.fragment),y=D(),G(v.$$.fragment),B=D(),G(N.$$.fragment),X=D(),G(O.$$.fragment)},l(d){H(e.$$.fragment,d),o=U(d),H(n.$$.fragment,d),i=U(d),H(a.$$.fragment,d),s=U(d),H(r.$$.fragment,d),l=U(d),H(c.$$.fragment,d),u=U(d),H(_.$$.fragment,d),b=U(d),H(h.$$.fragment,d),A=U(d),H(R.$$.fragment,d),y=U(d),H(v.$$.fragment,d),B=U(d),H(N.$$.fragment,d),X=U(d),H(O.$$.fragment,d)},m(d,L){j(e,d,L),g(d,o,L),j(n,d,L),g(d,i,L),j(a,d,L),g(d,s,L),j(r,d,L),g(d,l,L),j(c,d,L),g(d,u,L),j(_,d,L),g(d,b,L),j(h,d,L),g(d,A,L),j(R,d,L),g(d,y,L),j(v,d,L),g(d,B,L),j(N,d,L),g(d,X,L),j(O,d,L),Y=!0},p(d,L){const p={};L&1&&(p.$$scope={dirty:L,ctx:d}),e.$set(p);const E={};L&1&&(E.$$scope={dirty:L,ctx:d}),n.$set(E);const te={};L&1&&(te.$$scope={dirty:L,ctx:d}),a.$set(te);const Q={};L&1&&(Q.$$scope={dirty:L,ctx:d}),r.$set(Q);const C={};L&1&&(C.$$scope={dirty:L,ctx:d}),c.$set(C);const k={};L&1&&(k.$$scope={dirty:L,ctx:d}),_.$set(k);const J={};L&1&&(J.$$scope={dirty:L,ctx:d}),h.$set(J);const q={};L&1&&(q.$$scope={dirty:L,ctx:d}),R.$set(q);const ce={};L&1&&(ce.$$scope={dirty:L,ctx:d}),v.$set(ce);const F={};L&1&&(F.$$scope={dirty:L,ctx:d}),N.$set(F);const Z={};L&1&&(Z.$$scope={dirty:L,ctx:d}),O.$set(Z)},i(d){Y||(V(e.$$.fragment,d),V(n.$$.fragment,d),V(a.$$.fragment,d),V(r.$$.fragment,d),V(c.$$.fragment,d),V(_.$$.fragment,d),V(h.$$.fragment,d),V(R.$$.fragment,d),V(v.$$.fragment,d),V(N.$$.fragment,d),V(O.$$.fragment,d),Y=!0)},o(d){W(e.$$.fragment,d),W(n.$$.fragment,d),W(a.$$.fragment,d),W(r.$$.fragment,d),W(c.$$.fragment,d),W(_.$$.fragment,d),W(h.$$.fragment,d),W(R.$$.fragment,d),W(v.$$.fragment,d),W(N.$$.fragment,d),W(O.$$.fragment,d),Y=!1},d(d){K(e,d),d&&f(o),K(n,d),d&&f(i),K(a,d),d&&f(s),K(r,d),d&&f(l),K(c,d),d&&f(u),K(_,d),d&&f(b),K(h,d),d&&f(A),K(R,d),d&&f(y),K(v,d),d&&f(B),K(N,d),d&&f(X),K(O,d)}}}function mr(t){let e,o;return{c(){e=x("p"),o=I("This page is an experiment to run simulation on the GPU.")},l(n){e=$(n,"P",{});var i=w(e);o=S(i,"This page is an experiment to run simulation on the GPU."),i.forEach(f)},m(n,i){g(n,e,i),m(e,o)},p:le,d(n){n&&f(e)}}}function dr(t){let e,o;return e=new fo({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function pr(t){let e,o;return e=new ho({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function hr(t){let e,o;return e=new go({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function vr(t){let e,o;return e=new Do({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function _r(t){let e,o;return e=new So({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Tr(t){let e,o;return e=new Go({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function xr(t){let e,o;return e=new ai({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function $r(t){let e,o;return e=new Ai({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function Ar(t){let e,o;return e=new Mi({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function br(t){let e,o;return e=new Zi({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}function gr(t){let e,o,n,i,a,s,r,l,c,u,_,b,h,A,R,y,v,B,N,X,O,Y,d,L;return e=new to({props:{$$slots:{default:[ur]},$$scope:{ctx:t}}}),n=new Ce({props:{$$slots:{default:[mr]},$$scope:{ctx:t}}}),a=new Ce({props:{$$slots:{default:[dr]},$$scope:{ctx:t}}}),r=new Ce({props:{$$slots:{default:[pr]},$$scope:{ctx:t}}}),c=new Ce({props:{$$slots:{default:[hr]},$$scope:{ctx:t}}}),_=new Ce({props:{$$slots:{default:[vr]},$$scope:{ctx:t}}}),h=new Ce({props:{$$slots:{default:[_r]},$$scope:{ctx:t}}}),R=new Ce({props:{$$slots:{default:[Tr]},$$scope:{ctx:t}}}),v=new Ce({props:{$$slots:{default:[xr]},$$scope:{ctx:t}}}),N=new Ce({props:{$$slots:{default:[$r]},$$scope:{ctx:t}}}),O=new Ce({props:{$$slots:{default:[Ar]},$$scope:{ctx:t}}}),d=new Ce({props:{$$slots:{default:[br]},$$scope:{ctx:t}}}),{c(){G(e.$$.fragment),o=D(),G(n.$$.fragment),i=D(),G(a.$$.fragment),s=D(),G(r.$$.fragment),l=D(),G(c.$$.fragment),u=D(),G(_.$$.fragment),b=D(),G(h.$$.fragment),A=D(),G(R.$$.fragment),y=D(),G(v.$$.fragment),B=D(),G(N.$$.fragment),X=D(),G(O.$$.fragment),Y=D(),G(d.$$.fragment)},l(p){H(e.$$.fragment,p),o=U(p),H(n.$$.fragment,p),i=U(p),H(a.$$.fragment,p),s=U(p),H(r.$$.fragment,p),l=U(p),H(c.$$.fragment,p),u=U(p),H(_.$$.fragment,p),b=U(p),H(h.$$.fragment,p),A=U(p),H(R.$$.fragment,p),y=U(p),H(v.$$.fragment,p),B=U(p),H(N.$$.fragment,p),X=U(p),H(O.$$.fragment,p),Y=U(p),H(d.$$.fragment,p)},m(p,E){j(e,p,E),g(p,o,E),j(n,p,E),g(p,i,E),j(a,p,E),g(p,s,E),j(r,p,E),g(p,l,E),j(c,p,E),g(p,u,E),j(_,p,E),g(p,b,E),j(h,p,E),g(p,A,E),j(R,p,E),g(p,y,E),j(v,p,E),g(p,B,E),j(N,p,E),g(p,X,E),j(O,p,E),g(p,Y,E),j(d,p,E),L=!0},p(p,E){const te={};E&1&&(te.$$scope={dirty:E,ctx:p}),e.$set(te);const Q={};E&1&&(Q.$$scope={dirty:E,ctx:p}),n.$set(Q);const C={};E&1&&(C.$$scope={dirty:E,ctx:p}),a.$set(C);const k={};E&1&&(k.$$scope={dirty:E,ctx:p}),r.$set(k);const J={};E&1&&(J.$$scope={dirty:E,ctx:p}),c.$set(J);const q={};E&1&&(q.$$scope={dirty:E,ctx:p}),_.$set(q);const ce={};E&1&&(ce.$$scope={dirty:E,ctx:p}),h.$set(ce);const F={};E&1&&(F.$$scope={dirty:E,ctx:p}),R.$set(F);const Z={};E&1&&(Z.$$scope={dirty:E,ctx:p}),v.$set(Z);const ee={};E&1&&(ee.$$scope={dirty:E,ctx:p}),N.$set(ee);const ne={};E&1&&(ne.$$scope={dirty:E,ctx:p}),O.$set(ne);const ve={};E&1&&(ve.$$scope={dirty:E,ctx:p}),d.$set(ve)},i(p){L||(V(e.$$.fragment,p),V(n.$$.fragment,p),V(a.$$.fragment,p),V(r.$$.fragment,p),V(c.$$.fragment,p),V(_.$$.fragment,p),V(h.$$.fragment,p),V(R.$$.fragment,p),V(v.$$.fragment,p),V(N.$$.fragment,p),V(O.$$.fragment,p),V(d.$$.fragment,p),L=!0)},o(p){W(e.$$.fragment,p),W(n.$$.fragment,p),W(a.$$.fragment,p),W(r.$$.fragment,p),W(c.$$.fragment,p),W(_.$$.fragment,p),W(h.$$.fragment,p),W(R.$$.fragment,p),W(v.$$.fragment,p),W(N.$$.fragment,p),W(O.$$.fragment,p),W(d.$$.fragment,p),L=!1},d(p){K(e,p),p&&f(o),K(n,p),p&&f(i),K(a,p),p&&f(s),K(r,p),p&&f(l),K(c,p),p&&f(u),K(_,p),p&&f(b),K(h,p),p&&f(A),K(R,p),p&&f(y),K(v,p),p&&f(B),K(N,p),p&&f(X),K(O,p),p&&f(Y),K(d,p)}}}function Er(t){let e,o,n;return o=new Kn({props:{$$slots:{default:[gr]},$$scope:{ctx:t}}}),{c(){e=x("div"),G(o.$$.fragment)},l(i){e=$(i,"DIV",{});var a=w(e);H(o.$$.fragment,a),a.forEach(f)},m(i,a){g(i,e,a),j(o,e,null),n=!0},p(i,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:i}),o.$set(s)},i(i){n||(V(o.$$.fragment,i),n=!0)},o(i){W(o.$$.fragment,i),n=!1},d(i){i&&f(e),K(o)}}}class wr extends Te{constructor(e){super(),xe(this,e,null,Er,$e,{})}}function Rr(t){let e,o;return e=new wr({}),{c(){G(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){j(e,n,i),o=!0},p:le,i(n){o||(V(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){K(e,n)}}}class Lr extends Te{constructor(e){super(),xe(this,e,null,Rr,$e,{})}}export{Lr as default};
