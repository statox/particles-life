import{S as xe,i as $e,s as Ae,C as St,k as $,l as A,m as R,h as f,n as b,b as g,K as ue,E as Ct,F as Mt,G as Nt,f as z,t as W,H as xt,R as On,o as we,j as Xn,Q as kn,T as pn,U as Pn,A as zn,V as Yn,g as Vn,d as Wn,q as B,a as U,r as I,c as y,D as m,B as se,p as Ve,O as ce,u as Ge,P as fe,M as Ot,w as H,x as j,y as K,z as Q}from"../../../chunks/index-ff9e742a.js";import{w as gt}from"../../../chunks/index-84a8d4d9.js";let qn=1;function Bn(){return`svelte-tabs-${qn++}`}function Gn(t){let e,o,n,i;const a=t[4].default,s=St(a,t,t[3],null);return{c(){e=$("div"),s&&s.c(),this.h()},l(r){e=A(r,"DIV",{class:!0});var l=R(e);s&&s.l(l),l.forEach(f),this.h()},h(){b(e,"class","svelte-tabs")},m(r,l){g(r,e,l),s&&s.m(e,null),o=!0,n||(i=ue(e,"keydown",t[1]),n=!0)},p(r,[l]){s&&s.p&&(!o||l&8)&&Ct(s,a,r,r[3],o?Nt(a,r[3],l,null):Mt(r[3]),null)},i(r){o||(z(s,r),o=!0)},o(r){W(s,r),o=!1},d(r){r&&f(e),s&&s.d(r),n=!1,i()}}}const un={};function Hn(t,e,o){const n=t.indexOf(e);t.splice(n,1),o.update(i=>i===e?t[n]||t[t.length-1]:i)}function jn(t,e,o){let n,{$$slots:i={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const r=[],l=[],c=[],u=gt({}),_=gt({}),x=gt(null);xt(t,x,v=>o(5,n=v));const h=gt(null);function T(v,P,M){v.push(P),M.update(O=>O||P),kn(()=>Hn(v,P,M))}function w(v){const P=l.indexOf(v);x.set(v),h.set(c[P])}On(un,{registerTab(v){T(l,v,x)},registerTabElement(v){r.push(v)},registerPanel(v){T(c,v,h)},selectTab:w,selectedTab:x,selectedPanel:h,controls:u,labeledBy:_}),we(()=>{w(l[s])}),Xn(()=>{for(let v=0;v<l.length;v++)u.update(P=>({...P,[l[v].id]:c[v].id})),_.update(P=>({...P,[c[v].id]:l[v].id}))});async function D(v){if(v.target.classList.contains("svelte-tabs__tab")){let P=l.indexOf(n);switch(v.key){case"ArrowRight":P+=1,P>l.length-1&&(P=0),w(l[P]),r[P].focus();break;case"ArrowLeft":P-=1,P<0&&(P=l.length-1),w(l[P]),r[P].focus()}}}return t.$$set=v=>{"initialSelectedIndex"in v&&o(2,s=v.initialSelectedIndex),"$$scope"in v&&o(3,a=v.$$scope)},[x,D,s,a,i]}class Kn extends xe{constructor(e){super(),$e(this,e,jn,Gn,Ae,{initialSelectedIndex:2})}}function Qn(t){let e,o,n,i,a,s;const r=t[9].default,l=St(r,t,t[8],null);return{c(){e=$("li"),l&&l.c(),this.h()},l(c){e=A(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=R(e);l&&l.l(u),u.forEach(f),this.h()},h(){b(e,"role","tab"),b(e,"id",t[3].id),b(e,"aria-controls",o=t[2][t[3].id]),b(e,"aria-selected",t[1]),b(e,"tabindex",n=t[1]?0:-1),b(e,"class","svelte-tabs__tab svelte-1fbofsd"),pn(e,"svelte-tabs__selected",t[1])},m(c,u){g(c,e,u),l&&l.m(e,null),t[10](e),i=!0,a||(s=ue(e,"click",t[11]),a=!0)},p(c,[u]){l&&l.p&&(!i||u&256)&&Ct(l,r,c,c[8],i?Nt(r,c[8],u,null):Mt(c[8]),null),(!i||u&4&&o!==(o=c[2][c[3].id]))&&b(e,"aria-controls",o),(!i||u&2)&&b(e,"aria-selected",c[1]),(!i||u&2&&n!==(n=c[1]?0:-1))&&b(e,"tabindex",n),(!i||u&2)&&pn(e,"svelte-tabs__selected",c[1])},i(c){i||(z(l,c),i=!0)},o(c){W(l,c),i=!1},d(c){c&&f(e),l&&l.d(c),t[10](null),a=!1,s()}}}function Jn(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e,r;const l={id:Bn()},{registerTab:c,registerTabElement:u,selectTab:_,selectedTab:x,controls:h}=Pn(un);xt(t,x,v=>o(7,n=v)),xt(t,h,v=>o(2,i=v));let T;c(l),we(async()=>{await zn(),u(r)});function w(v){Yn[v?"unshift":"push"](()=>{r=v,o(0,r)})}const D=()=>_(l);return t.$$set=v=>{"$$scope"in v&&o(8,s=v.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(1,T=n===l)},[r,T,i,l,_,x,h,n,s,a,w,D]}class Le extends xe{constructor(e){super(),$e(this,e,Jn,Qn,Ae,{})}}function Zn(t){let e,o;const n=t[1].default,i=St(n,t,t[0],null);return{c(){e=$("ul"),i&&i.c(),this.h()},l(a){e=A(a,"UL",{role:!0,class:!0});var s=R(e);i&&i.l(s),s.forEach(f),this.h()},h(){b(e,"role","tablist"),b(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){g(a,e,s),i&&i.m(e,null),o=!0},p(a,[s]){i&&i.p&&(!o||s&1)&&Ct(i,n,a,a[0],o?Nt(n,a[0],s,null):Mt(a[0]),null)},i(a){o||(z(i,a),o=!0)},o(a){W(i,a),o=!1},d(a){a&&f(e),i&&i.d(a)}}}function eo(t,e,o){let{$$slots:n={},$$scope:i}=e;return t.$$set=a=>{"$$scope"in a&&o(0,i=a.$$scope)},[i,n]}class to extends xe{constructor(e){super(),$e(this,e,eo,Zn,Ae,{})}}function hn(t){let e;const o=t[6].default,n=St(o,t,t[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,a){n&&n.m(i,a),e=!0},p(i,a){n&&n.p&&(!e||a&32)&&Ct(n,o,i,i[5],e?Nt(o,i[5],a,null):Mt(i[5]),null)},i(i){e||(z(n,i),e=!0)},o(i){W(n,i),e=!1},d(i){n&&n.d(i)}}}function no(t){let e,o,n,i=t[1]===t[2]&&hn(t);return{c(){e=$("div"),i&&i.c(),this.h()},l(a){e=A(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=R(e);i&&i.l(s),s.forEach(f),this.h()},h(){b(e,"id",t[2].id),b(e,"aria-labelledby",o=t[0][t[2].id]),b(e,"class","svelte-tabs__tab-panel svelte-epfyet"),b(e,"role","tabpanel")},m(a,s){g(a,e,s),i&&i.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?i?(i.p(a,s),s&2&&z(i,1)):(i=hn(a),i.c(),z(i,1),i.m(e,null)):i&&(Vn(),W(i,1,1,()=>{i=null}),Wn()),(!n||s&1&&o!==(o=a[0][a[2].id]))&&b(e,"aria-labelledby",o)},i(a){n||(z(i),n=!0)},o(a){W(i),n=!1},d(a){a&&f(e),i&&i.d()}}}function oo(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e;const r={id:Bn()},{registerPanel:l,selectedPanel:c,labeledBy:u}=Pn(un);return xt(t,c,_=>o(1,i=_)),xt(t,u,_=>o(0,n=_)),l(r),t.$$set=_=>{"$$scope"in _&&o(5,s=_.$$scope)},[n,i,r,c,u,s,a]}class Pe extends xe{constructor(e){super(),$e(this,e,oo,no,Ae,{})}}const io=["VERTEX_SHADER","FRAGMENT_SHADER"];function $t(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Xt(e),e}function Xt(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ge(t,e,o,n){const i=t.createTexture();if(!i)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i}function Ee(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function ve(t,e,o,n,i){const a=[];for(let r=0;r<e.length;++r){const l=io[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=ro(t,e[r],l,i);if(!c)throw"Can not create shader";a.push(c)}const s=ao(t,a,o,n,i);if(!s)throw"Can not create program";return s}function ro(t,e,o,n){const i=n||console.log,a=t.createShader(o);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+r+`
`+e.split(`
`).map((l,c)=>`${c+1}: ${l}`).join(`
`))),t.deleteShader(a),null}return a}function ao(t,e,o,n,i){const a=i||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(l){t.attachShader(s,l)}),o&&o.forEach(function(l,c){t.bindAttribLocation(s,n?n[c]:c,l)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const l=t.getProgramInfoLog(s);return a("Error in program linking:"+l),t.deleteProgram(s),null}return s}function me(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}function so(t){let e,o,n,i,a,s,r,l,c,u,_,x;return{c(){e=$("p"),o=B(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=U(),i=$("p"),a=B(`It is reusing the code from
    `),s=$("a"),r=B(`this site
    `),l=B("."),c=U(),u=$("ul"),_=U(),x=$("canvas"),this.h()},l(h){e=A(h,"P",{});var T=R(e);o=I(T,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),T.forEach(f),n=y(h),i=A(h,"P",{});var w=R(i);a=I(w,`It is reusing the code from
    `),s=A(w,"A",{target:!0,href:!0});var D=R(s);r=I(D,`this site
    `),D.forEach(f),l=I(w,"."),w.forEach(f),c=y(h),u=A(h,"UL",{id:!0}),R(u).forEach(f),_=y(h),x=A(h,"CANVAS",{id:!0}),R(x).forEach(f),this.h()},h(){b(s,"target","none"),b(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),b(u,"id","result"),b(x,"id","canvas")},m(h,T){g(h,e,T),m(e,o),g(h,n,T),g(h,i,T),m(i,a),m(i,s),m(s,r),m(i,l),g(h,c,T),g(h,u,T),g(h,_,T),g(h,x,T)},p:se,i:se,o:se,d(h){h&&f(e),h&&f(n),h&&f(i),h&&f(c),h&&f(u),h&&f(_),h&&f(x)}}}function lo(t){const e=document.createElement("li");e.textContent=t.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(e)}function co(t){function e(){const o=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const r=s.getContext("webgl");if(!r)throw"Coulndt get context";const l=ve(r,[o,n]);if(!l)throw"Could not get program";const c=r.getAttribLocation(l,"position"),u=r.getUniformLocation(l,"srcTex"),_=r.getUniformLocation(l,"srcDimensions"),x=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(c),r.vertexAttribPointer(c,2,r.FLOAT,!1,0,0);const h=3,T=3,w=r.createTexture();r.bindTexture(r.TEXTURE_2D,w),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,h,T,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(l),r.uniform1i(u,0),r.uniform2f(_,h,T),r.drawArrays(r.TRIANGLES,0,6);const D=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,D);for(let v=0;v<3*3;++v)lo(D[v*4])}return we(e),[]}class fo extends xe{constructor(e){super(),$e(this,e,co,so,Ae,{})}}const uo=Float32Array;function In(t,e,o,n,i,a){const s=new uo(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-o),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(i-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(o+n)/(o-n),s[14]=(i+a)/(i-a),s[15]=1,s}function mo(t){let e,o,n,i,a,s,r;return{c(){e=$("p"),o=B(`This is the simple particles simulation from
    `),n=$("a"),i=B("webglfundamentals"),a=B(" directly copied in a svelte component."),s=U(),r=$("canvas"),this.h()},l(l){e=A(l,"P",{});var c=R(e);o=I(c,`This is the simple particles simulation from
    `),n=A(c,"A",{target:!0,href:!0});var u=R(n);i=I(u,"webglfundamentals"),u.forEach(f),a=I(c," directly copied in a svelte component."),c.forEach(f),s=y(l),r=A(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(r).forEach(f),this.h()},h(){b(n,"target","none"),b(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),b(r,"id","canvas"),Ve(r,"background-color","black"),b(r,"width","800"),b(r,"height","600")},m(l,c){g(l,e,c),m(e,o),m(e,n),m(n,i),m(e,a),g(l,s,c),g(l,r,c)},p:se,i:se,o:se,d(l){l&&f(e),l&&f(s),l&&f(r)}}}function po(t){function e(){const o=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const r=s.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=ve(r,[o,n]),_=ve(r,[i,a]);if(!u||!_)throw"Can not create programs";const x={position:r.getAttribLocation(u,"position"),positionTex:r.getUniformLocation(u,"positionTex"),velocityTex:r.getUniformLocation(u,"velocityTex"),texDimensions:r.getUniformLocation(u,"texDimensions"),canvasDimensions:r.getUniformLocation(u,"canvasDimensions"),deltaTime:r.getUniformLocation(u,"deltaTime")},h={id:r.getAttribLocation(_,"id"),positionTex:r.getUniformLocation(_,"positionTex"),texDimensions:r.getUniformLocation(_,"texDimensions"),matrix:r.getUniformLocation(_,"matrix")},T=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,T),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const w=300,D=20,v=w*D,P=new Array(v).fill(0).map((F,ee)=>ee),M=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,M),r.bufferData(r.ARRAY_BUFFER,new Float32Array(P),r.STATIC_DRAW),me(r.canvas);const O=(F,ee)=>(ee===void 0&&(ee=F,F=0),Math.random()*(ee-F)+F),N=new Float32Array(P.map(F=>[O(s.width),O(s.height),0,0]).flat()),Y=new Float32Array(P.map(F=>[O(-300,300),O(-300,300),0,0]).flat());function d(F,ee,te,ie){const he=F.createTexture();return F.bindTexture(F.TEXTURE_2D,he),F.texImage2D(F.TEXTURE_2D,0,F.RGBA,te,ie,0,F.RGBA,F.FLOAT,ee),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_S,F.CLAMP_TO_EDGE),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_T,F.CLAMP_TO_EDGE),he}const L=d(r,Y,w,D),p=d(r,N,w,D),E=d(r,null,w,D);if(!p||!E)throw"Can not create position textures";function oe(F,ee){const te=F.createFramebuffer();return F.bindFramebuffer(F.FRAMEBUFFER,te),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ee,0),te}const J=oe(r,p),S=oe(r,E);let k={fb:J,tex:p},Z={fb:S,tex:E},G=0;function le(F){if(!r)return;F*=.001;const ee=F-G;G=F,me(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,Z.fb),r.viewport(0,0,w,D),r.bindBuffer(r.ARRAY_BUFFER,T),r.enableVertexAttribArray(x.position),r.vertexAttribPointer(x.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,k.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,L),r.useProgram(u),r.uniform1i(x.positionTex,0),r.uniform1i(x.velocityTex,1),r.uniform2f(x.texDimensions,w,D),r.uniform2f(x.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(x.deltaTime,ee),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,M),r.enableVertexAttribArray(h.id),r.vertexAttribPointer(h.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Z.tex),r.useProgram(_),r.uniform2f(h.texDimensions,w,w),r.uniform1i(h.positionTex,0),r.uniformMatrix4fv(h.matrix,!1,In(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,v);{const te=k;k=Z,Z=te}requestAnimationFrame(le)}requestAnimationFrame(le)}return we(()=>e()),[]}class ho extends xe{constructor(e){super(),$e(this,e,po,mo,Ae,{})}}const Et=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function vo(t,e,o,n){const i=t*e,a=new Array(i).fill(0).map((l,c)=>c),s=new Float32Array(a.map(l=>[Et(o),Et(n),0,0]).flat()),r=new Float32Array(a.map(l=>[Et(-300,300),Et(-300,300),0,0]).flat());return{numParticles:i,ids:new Float32Array(a),positions:s,velocities:r}}const _o=`attribute vec4 position;
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

`;function Ao(t){let e,o,n,i,a,s,r;return{c(){e=$("p"),o=B(`This is the simple particles simulation from
    `),n=$("a"),i=B("webglfundamentals"),a=B(" with the shader code extracted into separate files."),s=U(),r=$("canvas"),this.h()},l(l){e=A(l,"P",{});var c=R(e);o=I(c,`This is the simple particles simulation from
    `),n=A(c,"A",{target:!0,href:!0});var u=R(n);i=I(u,"webglfundamentals"),u.forEach(f),a=I(c," with the shader code extracted into separate files."),c.forEach(f),s=y(l),r=A(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(r).forEach(f),this.h()},h(){b(n,"target","none"),b(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),b(r,"id","canvas"),Ve(r,"background-color","black"),b(r,"width","800"),b(r,"height","600")},m(l,c){g(l,e,c),m(e,o),m(e,n),m(n,i),m(e,a),g(l,s,c),g(l,r,c)},p:se,i:se,o:se,d(l){l&&f(e),l&&f(s),l&&f(r)}}}function bo(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const a=i.getContext("webgl");if(!a)throw"gl undefined";Xt(a);const s=ve(a,[_o,To]),r=ve(a,[xo,$o]),l={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},c={id:a.getAttribLocation(r,"id"),positionTex:a.getUniformLocation(r,"positionTex"),texDimensions:a.getUniformLocation(r,"texDimensions"),matrix:a.getUniformLocation(r,"matrix")},u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const _=300,x=20,{numParticles:h,ids:T,positions:w,velocities:D}=vo(_,x,i.width,i.height),v=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,v),a.bufferData(a.ARRAY_BUFFER,new Float32Array(T),a.STATIC_DRAW),me(a.canvas);const P=ge(a,D,_,x),M=ge(a,w,_,x),O=ge(a,null,_,x),N=Ee(a,M),Y=Ee(a,O);let d={fb:N,tex:M},L={fb:Y,tex:O},p=0;function E(oe){if(!a||!u||!v)throw"Undefined params to render";oe*=.001;const J=oe-p;p=oe,me(a.canvas),n(a,L,_,x,u,l,d,P,s,J),o(a,_,v,c,L,r,h);{const S=d;d=L,L=S}requestAnimationFrame(E)}requestAnimationFrame(E)}const o=(i,a,s,r,l,c,u)=>{i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(r.id),i.vertexAttribPointer(r.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,l.tex),i.useProgram(c),i.uniform2f(r.texDimensions,a,a),i.uniform1i(r.positionTex,0),i.uniformMatrix4fv(r.matrix,!1,In(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,u)},n=(i,a,s,r,l,c,u,_,x,h)=>{i.bindFramebuffer(i.FRAMEBUFFER,a.fb),i.viewport(0,0,s,r),i.bindBuffer(i.ARRAY_BUFFER,l),i.enableVertexAttribArray(c.position),i.vertexAttribPointer(c.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,u.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,_),i.useProgram(x),i.uniform1i(c.positionTex,0),i.uniform1i(c.velocityTex,1),i.uniform2f(c.texDimensions,s,r),i.uniform2f(c.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f(c.deltaTime,h),i.drawArrays(i.TRIANGLES,0,6)};return we(()=>e()),[]}class go extends xe{constructor(e){super(),$e(this,e,bo,Ao,Ae,{})}}const Eo=`attribute vec2 a_position;

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
`;function Ro(t){let e,o,n,i,a,s,r,l,c,u,_,x;return{c(){e=$("p"),o=B(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=$("code"),i=B("requestAnimationFrame"),a=B(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=U(),r=$("canvas"),l=U(),c=$("button"),u=B("Add position"),this.h()},l(h){e=A(h,"P",{});var T=R(e);o=I(T,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=A(T,"CODE",{});var w=R(n);i=I(w,"requestAnimationFrame"),w.forEach(f),a=I(T,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),T.forEach(f),s=y(h),r=A(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(r).forEach(f),l=y(h),c=A(h,"BUTTON",{});var D=R(c);u=I(D,"Add position"),D.forEach(f),this.h()},h(){b(r,"id","canvas"),Ve(r,"background-color","black"),b(r,"width","800"),b(r,"height","600")},m(h,T){g(h,e,T),m(e,o),m(e,n),m(n,i),m(e,a),g(h,s,T),g(h,r,T),g(h,l,T),g(h,c,T),m(c,u),_||(x=ue(c,"click",t[1]),_=!0)},p:se,i:se,o:se,d(h){h&&f(e),h&&f(s),h&&f(r),h&&f(l),h&&f(c),_=!1,x()}}}function Fo(t){const e=[50,50,50,150,150,150,150,50,200,200];function o(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Xt(s);const r=ve(s,[Eo,wo]);me(s.canvas);const l=s.getAttribLocation(r,"a_position"),c=s.getUniformLocation(r,"u_resolution"),u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function _(){if(!s)throw"Undefined params to render";for(let M=0;M<=e.length-2;M+=2)e[M]=(e[M]+Math.random()*2-1)%s.canvas.width,e[M+1]=(e[M+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),me(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(r),s.uniform2f(c,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(l),s.bindBuffer(s.ARRAY_BUFFER,u);const x=2,h=s.FLOAT,T=!1,w=0,D=0;s.vertexAttribPointer(l,x,h,T,w,D);var v=s.POINTS,P=e.length/2;s.drawArrays(v,D,P),requestAnimationFrame(_)}requestAnimationFrame(_)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return we(()=>o()),[n,()=>n()]}class Do extends xe{constructor(e){super(),$e(this,e,Fo,Ro,Ae,{})}}const Uo=`attribute float id;
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
`;let ft,ut;const Lo=t=>{ut=ve(t,[Uo,yo]),ft={idAttributeLocation:t.getAttribLocation(ut,"id"),texDimensionsUniformLocation:t.getUniformLocation(ut,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ut,"u_resolution")}},Po=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;me(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(ut),e.uniform2f(ft.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ft.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(ft.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,r=e.FLOAT,l=!1,c=0,u=0;e.vertexAttribPointer(ft.idAttributeLocation,s,r,l,c,u);const _=e.POINTS,x=i.length;e.drawArrays(_,u,x)};function Bo(t){let e,o,n,i,a,s,r;return{c(){e=$("p"),o=B("Create an array of render-size positions. Store this array in a texture. In each "),n=$("code"),i=B("requestAnimationFrame"),a=B(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=U(),r=$("canvas"),this.h()},l(l){e=A(l,"P",{});var c=R(e);o=I(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=A(c,"CODE",{});var u=R(n);i=I(u,"requestAnimationFrame"),u.forEach(f),a=I(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(f),s=y(l),r=A(l,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(r).forEach(f),this.h()},h(){b(r,"id","canvas"),Ve(r,"background-color","black"),b(r,"width",Sn),b(r,"height",Cn)},m(l,c){g(l,e,c),m(e,o),m(e,n),m(n,i),m(e,a),g(l,s,c),g(l,r,c)},p:se,i:se,o:se,d(l){l&&f(e),l&&f(s),l&&f(r)}}}const Sn=800,Cn=600;function Io(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const n=o.getContext("webgl");if(!n)throw"gl undefined";Xt(n),me(n.canvas),Lo(n);const i=[0,1,2,3,4,5,6,7,8,9],a=i.map(r=>[Math.random()*Sn,Math.random()*Cn,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let l=0;l<=a.length-2;l+=2)a[l]=(a[l]+Math.random()*2-1)%n.canvas.width,a[l+1]=(a[l+1]+Math.random()*0+1)%n.canvas.height;const r=ge(n,new Float32Array(a),3,3);Po({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:i}),requestAnimationFrame(s)}requestAnimationFrame(s)}return we(()=>e()),[]}let So=class extends xe{constructor(e){super(),$e(this,e,Io,Bo,Ae,{})}};const Co=`attribute float id;
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
`;let mt,dt,Gt;const No=(t,e)=>{dt=ve(t,[Co,Mo]),mt={idAttributeLocation:t.getAttribLocation(dt,"id"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},Gt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Oo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Gt),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(dt),e.uniform2f(mt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(mt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(mt.idAttributeLocation);const a=1,s=e.FLOAT,r=!1,l=0,c=0;e.vertexAttribPointer(mt.idAttributeLocation,a,s,r,l,c),e.drawArrays(e.POINTS,c,i.length)};function Xo(t,e){const o=new Array(t).fill(0).map((a,s)=>s),n=o.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),i={width:o.length,height:1};return{ids:o,positions:n,texDimensions:i}}const ko=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,zo=`precision highp float;

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

`;let tt,nt,Ht,kt,zt,vn,_n,pt,yt;const Yo=(t,e)=>{const{positions:o,texDimensions:n}=e;nt=ve(t,[ko,zo]),tt={positionAttributeLocation:t.getAttribLocation(nt,"position"),positionTexLocation:t.getUniformLocation(nt,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(nt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(nt,"u_resolution")},Ht=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ht),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),kt=ge(t,new Float32Array(o),n.width,n.height),zt=ge(t,null,n.width,n.height),vn=Ee(t,kt),_n=Ee(t,zt),pt={fb:vn,tex:kt},yt={fb:_n,tex:zt}},Vo=t=>{const{gl:e,texDimensions:o}=t;e.bindFramebuffer(e.FRAMEBUFFER,yt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Ht),e.enableVertexAttribArray(tt.positionAttributeLocation),e.vertexAttribPointer(tt.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,pt.tex),e.useProgram(nt),e.uniform1i(tt.positionTexLocation,0),e.uniform2f(tt.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(tt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=pt;pt=yt,yt=n}return pt.tex};function Wo(t){let e,o,n,i,a,s,r,l,c,u,_,x,h;return{c(){e=$("p"),o=B("Create an array of render-size positions. Store this array in a texture."),n=U(),i=$("p"),a=B("Create 2 textures which will be used to update the positions with a shader. In each "),s=$("code"),r=B("requestAnimationFrame"),l=B(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=U(),u=$("p"),_=B("Finally switch the two textures to read and write in the updated textures"),x=U(),h=$("canvas"),this.h()},l(T){e=A(T,"P",{});var w=R(e);o=I(w,"Create an array of render-size positions. Store this array in a texture."),w.forEach(f),n=y(T),i=A(T,"P",{});var D=R(i);a=I(D,"Create 2 textures which will be used to update the positions with a shader. In each "),s=A(D,"CODE",{});var v=R(s);r=I(v,"requestAnimationFrame"),v.forEach(f),l=I(D,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),D.forEach(f),c=y(T),u=A(T,"P",{});var P=R(u);_=I(P,"Finally switch the two textures to read and write in the updated textures"),P.forEach(f),x=y(T),h=A(T,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(h).forEach(f),this.h()},h(){b(h,"id","canvas"),Ve(h,"background-color","black"),b(h,"width",Mn),b(h,"height",Nn)},m(T,w){g(T,e,w),m(e,o),g(T,n,w),g(T,i,w),m(i,a),m(i,s),m(s,r),m(i,l),g(T,c,w),g(T,u,w),m(u,_),g(T,x,w),g(T,h,w)},p:se,i:se,o:se,d(T){T&&f(e),T&&f(n),T&&f(i),T&&f(c),T&&f(u),T&&f(x),T&&f(h)}}}const Mn=800,Nn=600;function qo(t){function e(){const o=$t();me(o.canvas);const{ids:n,positions:i,texDimensions:a}=Xo(100,{width:Mn,height:Nn});No(o,n),Yo(o,{positions:i,texDimensions:a});function s(){me(o.canvas);const r=Vo({gl:o,texDimensions:a});Oo({gl:o,positionTex:r,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return we(()=>e()),[]}let Go=class extends xe{constructor(e){super(),$e(this,e,qo,Wo,Ae,{})}};const Ho=`attribute float id;
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
`;let je,ot,jt,Kt;const Ko=(t,e)=>{const{ids:o,colors:n}=e;ot=ve(t,[Ho,jo]),je={idAttributeLocation:t.getAttribLocation(ot,"id"),colorAttributeLocation:t.getAttribLocation(ot,"color"),texDimensionsUniformLocation:t.getUniformLocation(ot,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ot,"u_resolution")},jt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,jt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Kt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Kt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Qo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,jt),e.vertexAttribPointer(je.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(je.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Kt),e.vertexAttribPointer(je.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(je.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(ot),e.uniform2f(je.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(je.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function Jo(t,e){const o=t.width*t.height,n=new Array(o).fill(0).map((s,r)=>r),i=new Array(o).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:l,y:c}=Zo(e,20);return[l,c,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:i}}const Zo=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},ei=`attribute vec4 position;
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

`;let Ke,Qe,Qt,wt,Yt,Tn,xn,ht,Lt,Rt;const ni=(t,e)=>{const{positions:o,texDimensions:n}=e;return Qe=ve(t,[ei,ti]),Ke={positionAttributeLocation:t.getAttribLocation(Qe,"position"),positionTexLocation:t.getUniformLocation(Qe,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(Qe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Qe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Qe,"u_resolution")},Qt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Qt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),wt=ge(t,new Float32Array(o),n.width,n.height),Yt=ge(t,null,n.width,n.height),Tn=Ee(t,wt),xn=Ee(t,Yt),ht={fb:Tn,tex:wt},Lt={fb:xn,tex:Yt},wt},oi=t=>{const{gl:e,texDimensions:o}=t,n=Date.now();Rt||(Rt=n-1);const i=n-Rt;Rt=n,e.bindFramebuffer(e.FRAMEBUFFER,Lt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Qt),e.enableVertexAttribArray(Ke.positionAttributeLocation),e.vertexAttribPointer(Ke.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ht.tex),e.useProgram(Qe),e.uniform1i(Ke.positionTexLocation,0),e.uniform1f(Ke.deltaTimeUniformLocation,i),e.uniform2f(Ke.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Ke.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=ht;ht=Lt,Lt=a}return ht.tex};function ii(t){let e,o,n,i,a,s,r,l,c,u,_=t[2]?"Play":"Pause",x,h,T,w=t[1]?"Normal Speed":"Slow Mo",D,v,P,M,O=t[4].width*t[4].height+"",N,Y,d,L,p,E,oe,J;return{c(){e=$("p"),o=B("Same principle with a shader to update positions and a shader to draw particles."),n=U(),i=$("p"),a=B(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=U(),r=$("canvas"),l=U(),c=$("div"),u=$("button"),x=B(_),h=U(),T=$("button"),D=B(w),v=U(),P=$("span"),M=B("particles: "),N=B(O),Y=U(),d=$("label"),L=B("Smooth steps"),p=U(),E=$("input"),this.h()},l(S){e=A(S,"P",{});var k=R(e);o=I(k,"Same principle with a shader to update positions and a shader to draw particles."),k.forEach(f),n=y(S),i=A(S,"P",{});var Z=R(i);a=I(Z,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Z.forEach(f),s=y(S),r=A(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(r).forEach(f),l=y(S),c=A(S,"DIV",{});var G=R(c);u=A(G,"BUTTON",{});var le=R(u);x=I(le,_),le.forEach(f),h=y(G),T=A(G,"BUTTON",{});var F=R(T);D=I(F,w),F.forEach(f),v=y(G),P=A(G,"SPAN",{});var ee=R(P);M=I(ee,"particles: "),N=I(ee,O),ee.forEach(f),Y=y(G),d=A(G,"LABEL",{for:!0});var te=R(d);L=I(te,"Smooth steps"),te.forEach(f),p=y(G),E=A(G,"INPUT",{type:!0,min:!0}),G.forEach(f),this.h()},h(){b(r,"id","canvas"),Ve(r,"background-color","black"),b(r,"width",t[3].width),b(r,"height",t[3].height),b(d,"for","steps"),b(E,"type","number"),b(E,"min",0)},m(S,k){g(S,e,k),m(e,o),g(S,n,k),g(S,i,k),m(i,a),g(S,s,k),g(S,r,k),g(S,l,k),g(S,c,k),m(c,u),m(u,x),m(c,h),m(c,T),m(T,D),m(c,v),m(c,P),m(P,M),m(P,N),m(c,Y),m(c,d),m(d,L),m(c,p),m(c,E),ce(E,t[0]),oe||(J=[ue(u,"click",t[5]),ue(T,"click",t[6]),ue(E,"input",t[7])],oe=!0)},p(S,[k]){k&4&&_!==(_=S[2]?"Play":"Pause")&&Ge(x,_),k&2&&w!==(w=S[1]?"Normal Speed":"Slow Mo")&&Ge(D,w),k&1&&fe(E.value)!==S[0]&&ce(E,S[0])},i:se,o:se,d(S){S&&f(e),S&&f(n),S&&f(i),S&&f(s),S&&f(r),S&&f(l),S&&f(c),oe=!1,Ot(J)}}}function ri(t,e,o){const n={width:800,height:600},i={width:100,height:100};let a=1,s=!1,r=!0;function l(){const x=$t();me(x.canvas);const{ids:h,positions:T,colors:w}=Jo(i,{width:n.width,height:n.height});Ko(x,{ids:h,colors:w,texDimensions:i});let D=ni(x,{positions:T,texDimensions:i});function v(){if(me(x.canvas),!r)for(let P=0;P<a;P++)D=oi({gl:x,texDimensions:i});return Qo({gl:x,positionTex:D,textureDimension:i,ids:h}),r?requestAnimationFrame(v):s?setTimeout(()=>requestAnimationFrame(v),1e3):requestAnimationFrame(v)}requestAnimationFrame(v)}we(()=>l());const c=()=>o(2,r=!r),u=()=>o(1,s=!s);function _(){a=fe(this.value),o(0,a)}return[a,s,r,n,i,c,u,_]}class ai extends xe{constructor(e){super(),$e(this,e,ri,ii,Ae,{})}}const si=`attribute float id;
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
`;let Je,it,Jt,Zt;const ci=(t,e)=>{const{ids:o,colors:n}=e;it=ve(t,[si,li]),Je={idAttributeLocation:t.getAttribLocation(it,"id"),colorAttributeLocation:t.getAttribLocation(it,"color"),texDimensionsUniformLocation:t.getUniformLocation(it,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(it,"u_resolution")},Jt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Jt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Zt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Zt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},fi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Jt),e.vertexAttribPointer(Je.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Je.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Zt),e.vertexAttribPointer(Je.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Je.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(it),e.uniform2f(Je.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Je.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function ui(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((l,c)=>c),s=new Array(i).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="disk"){const{x:u,y:_}=di(o,20);return[u,_,0,0]}if(n==="square"){const{x:u,y:_}=mi(o,550);return[u,_,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=pi(o,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=$n(o,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=$n(o,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const mi=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},di=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},pi=(t,e,o)=>{const n=en(e,0,o,0,t.width,!1),i=en(e,0,o,0,t.height,!1);return{x:n,y:i}},$n=(t,e,o,n)=>{const i=en(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,l=n.y,u=Math.sin(l*i)*200+t.height/2;return{x:r,y:u}},en=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?An(s,n,i):An(s,i,n):s},An=function(t,e,o){return Math.max(Math.min(t,o),e)},hi=`attribute vec4 position;
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

`;let Ne,Oe,tn,Ft,Vt,bn,gn,vt,Pt;const _i=(t,e)=>{const{positions:o,texDimensions:n}=e;return Oe=ve(t,[hi,vi]),Ne={positionAttributeLocation:t.getAttribLocation(Oe,"position"),positionTexLocation:t.getUniformLocation(Oe,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Oe,"interactionRange"),dragUniformLocation:t.getUniformLocation(Oe,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Oe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Oe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Oe,"u_resolution")},tn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,tn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ft=ge(t,new Float32Array(o),n.width,n.height),Vt=ge(t,null,n.width,n.height),bn=Ee(t,Ft),gn=Ee(t,Vt),vt={fb:bn,tex:Ft},Pt={fb:gn,tex:Vt},Ft},Ti=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Pt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,tn),e.enableVertexAttribArray(Ne.positionAttributeLocation),e.vertexAttribPointer(Ne.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,vt.tex),e.useProgram(Oe),e.uniform1i(Ne.positionTexLocation,0),e.uniform1f(Ne.dragUniformLocation,i),e.uniform1f(Ne.interactionRangeUniformLocation,n),e.uniform1f(Ne.deltaTimeUniformLocation,a),e.uniform2f(Ne.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Ne.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=vt;vt=Pt,Pt=s}return vt.tex};function xi(t){let e,o,n,i,a,s,r,l,c,u,_=t[2]?"Play":"Pause",x,h,T,w=t[1]?"Normal Speed":"Slow Mo",D,v,P,M,O=t[5].width*t[5].height+"",N,Y,d,L,p,E,oe,J,S,k,Z,G,le,F,ee,te,ie,he,be,ae,Re,_e,de,Be,q,V,Ie,Fe,pe,Ce;return{c(){e=$("p"),o=B("Same principle with a shader to update positions and a shader to draw particles."),n=U(),i=$("p"),a=B(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=U(),r=$("canvas"),l=U(),c=$("div"),u=$("button"),x=B(_),h=U(),T=$("button"),D=B(w),v=U(),P=$("span"),M=B("particles: "),N=B(O),Y=U(),d=$("label"),L=B("Smooth steps"),p=U(),E=$("input"),oe=U(),J=$("div"),S=$("ul"),k=$("li"),Z=$("label"),G=B("Interaction Range"),le=U(),F=$("input"),ee=U(),te=$("li"),ie=$("label"),he=B("Drag"),be=U(),ae=$("input"),Re=U(),_e=$("li"),de=$("label"),Be=B("Time step"),q=U(),V=$("input"),Ie=U(),Fe=$("ul"),this.h()},l(X){e=A(X,"P",{});var ne=R(e);o=I(ne,"Same principle with a shader to update positions and a shader to draw particles."),ne.forEach(f),n=y(X),i=A(X,"P",{});var Se=R(i);a=I(Se,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Se.forEach(f),s=y(X),r=A(X,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(r).forEach(f),l=y(X),c=A(X,"DIV",{});var C=R(c);u=A(C,"BUTTON",{});var re=R(u);x=I(re,_),re.forEach(f),h=y(C),T=A(C,"BUTTON",{});var We=R(T);D=I(We,w),We.forEach(f),v=y(C),P=A(C,"SPAN",{});var De=R(P);M=I(De,"particles: "),N=I(De,O),De.forEach(f),Y=y(C),d=A(C,"LABEL",{for:!0});var Te=R(d);L=I(Te,"Smooth steps"),Te.forEach(f),p=y(C),E=A(C,"INPUT",{type:!0,min:!0}),C.forEach(f),oe=y(X),J=A(X,"DIV",{});var st=R(J);S=A(st,"UL",{});var Ue=R(S);k=A(Ue,"LI",{});var qe=R(k);Z=A(qe,"LABEL",{for:!0});var lt=R(Z);G=I(lt,"Interaction Range"),lt.forEach(f),le=y(qe),F=A(qe,"INPUT",{id:!0,type:!0,min:!0}),qe.forEach(f),ee=y(Ue),te=A(Ue,"LI",{});var He=R(te);ie=A(He,"LABEL",{for:!0});var ye=R(ie);he=I(ye,"Drag"),ye.forEach(f),be=y(He),ae=A(He,"INPUT",{id:!0,type:!0,min:!0}),He.forEach(f),Re=y(Ue),_e=A(Ue,"LI",{});var Me=R(_e);de=A(Me,"LABEL",{for:!0});var ct=R(de);Be=I(ct,"Time step"),ct.forEach(f),q=y(Me),V=A(Me,"INPUT",{id:!0,type:!0,min:!0}),Me.forEach(f),Ie=y(Ue),Fe=A(Ue,"UL",{}),R(Fe).forEach(f),Ue.forEach(f),st.forEach(f),this.h()},h(){b(r,"id","canvas"),Ve(r,"background-color","black"),b(r,"width",t[4].width),b(r,"height",t[4].height),b(d,"for","steps"),b(E,"type","number"),b(E,"min",0),b(Z,"for","interactionRange"),b(F,"id","interactionRange"),b(F,"type","number"),b(F,"min",0),b(ie,"for","drag"),b(ae,"id","drag"),b(ae,"type","number"),b(ae,"min",0),b(de,"for","deltaTime"),b(V,"id","deltaTime"),b(V,"type","number"),b(V,"min",0)},m(X,ne){g(X,e,ne),m(e,o),g(X,n,ne),g(X,i,ne),m(i,a),g(X,s,ne),g(X,r,ne),g(X,l,ne),g(X,c,ne),m(c,u),m(u,x),m(c,h),m(c,T),m(T,D),m(c,v),m(c,P),m(P,M),m(P,N),m(c,Y),m(c,d),m(d,L),m(c,p),m(c,E),ce(E,t[0]),g(X,oe,ne),g(X,J,ne),m(J,S),m(S,k),m(k,Z),m(Z,G),m(k,le),m(k,F),ce(F,t[3].interactionRange),m(S,ee),m(S,te),m(te,ie),m(ie,he),m(te,be),m(te,ae),ce(ae,t[3].drag),m(S,Re),m(S,_e),m(_e,de),m(de,Be),m(_e,q),m(_e,V),ce(V,t[3].timeStep),m(S,Ie),m(S,Fe),pe||(Ce=[ue(u,"click",t[6]),ue(T,"click",t[7]),ue(E,"input",t[8]),ue(F,"input",t[9]),ue(ae,"input",t[10]),ue(V,"input",t[11])],pe=!0)},p(X,[ne]){ne&4&&_!==(_=X[2]?"Play":"Pause")&&Ge(x,_),ne&2&&w!==(w=X[1]?"Normal Speed":"Slow Mo")&&Ge(D,w),ne&1&&fe(E.value)!==X[0]&&ce(E,X[0]),ne&8&&fe(F.value)!==X[3].interactionRange&&ce(F,X[3].interactionRange),ne&8&&fe(ae.value)!==X[3].drag&&ce(ae,X[3].drag),ne&8&&fe(V.value)!==X[3].timeStep&&ce(V,X[3].timeStep)},i:se,o:se,d(X){X&&f(e),X&&f(n),X&&f(i),X&&f(s),X&&f(r),X&&f(l),X&&f(c),X&&f(oe),X&&f(J),pe=!1,Ot(Ce)}}}function $i(t,e,o){const n={width:800,height:600},i={width:10,height:10};let a=1,s=!1,r=!0;const l={interactionRange:70,drag:1e3,timeStep:10};function c(){const D=$t();me(D.canvas);const{ids:v,positions:P,colors:M}=ui({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"circle"});ci(D,{ids:v,colors:M,texDimensions:i});let O=_i(D,{positions:P,texDimensions:i});function N(){if(me(D.canvas),!r)for(let Y=0;Y<a;Y++)O=Ti({gl:D,texDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return fi({gl:D,positionTex:O,textureDimension:i,ids:v}),r?requestAnimationFrame(N):s?setTimeout(()=>requestAnimationFrame(N),1e3):requestAnimationFrame(N)}requestAnimationFrame(N)}we(()=>c());const u=()=>o(2,r=!r),_=()=>o(1,s=!s);function x(){a=fe(this.value),o(0,a)}function h(){l.interactionRange=fe(this.value),o(3,l)}function T(){l.drag=fe(this.value),o(3,l)}function w(){l.timeStep=fe(this.value),o(3,l)}return[a,s,r,l,n,i,u,_,x,h,T,w]}class Ai extends xe{constructor(e){super(),$e(this,e,$i,xi,Ae,{})}}const bi=`attribute float id;
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
`;let Ze,rt,nn,on;const Ei=(t,e)=>{const{ids:o,colors:n}=e;rt=ve(t,[bi,gi]),Ze={idAttributeLocation:t.getAttribLocation(rt,"id"),colorAttributeLocation:t.getAttribLocation(rt,"color"),texDimensionsUniformLocation:t.getUniformLocation(rt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(rt,"u_resolution")},nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),on=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,on),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},wi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,nn),e.vertexAttribPointer(Ze.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Ze.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,on),e.vertexAttribPointer(Ze.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(Ze.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(rt),e.uniform2f(Ze.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ze.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function Ri(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((l,c)=>c),s=new Array(i).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Fi(o);return[c,u,0,0]}if(n==="disk"){const{x:u,y:_}=Ui(o,200);return[u,_,0,0]}if(n==="square"){const{x:u,y:_}=Di(o,300);return[u,_,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=yi(o,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=En(o,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=En(o,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Fi=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Di=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Ui=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},yi=(t,e,o)=>{const n=rn(e,0,o,0,t.width,!1),i=rn(e,0,o,0,t.height,!1);return{x:n,y:i}},En=(t,e,o,n)=>{const i=rn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,l=n.y,u=Math.sin(l*i)*200+t.height/2;return{x:r,y:u}},rn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?wn(s,n,i):wn(s,i,n):s},wn=function(t,e,o){return Math.max(Math.min(t,o),e)},Li=`attribute vec4 position;
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

`;let Xe,ke,an,Dt,Wt,Rn,Fn,_t,Bt;const Bi=(t,e)=>{const{positions:o,texDimensions:n}=e,i=Pi.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return ke=ve(t,[Li,i]),Xe={positionAttributeLocation:t.getAttribLocation(ke,"position"),positionTexLocation:t.getUniformLocation(ke,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(ke,"interactionRange"),dragUniformLocation:t.getUniformLocation(ke,"drag"),deltaTimeUniformLocation:t.getUniformLocation(ke,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ke,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ke,"u_resolution")},an=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,an),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Dt=ge(t,new Float32Array(o),n.width,n.height),Wt=ge(t,null,n.width,n.height),Rn=Ee(t,Dt),Fn=Ee(t,Wt),_t={fb:Rn,tex:Dt},Bt={fb:Fn,tex:Wt},Dt},Ii=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Bt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,an),e.enableVertexAttribArray(Xe.positionAttributeLocation),e.vertexAttribPointer(Xe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,_t.tex),e.useProgram(ke),e.uniform1i(Xe.positionTexLocation,0),e.uniform1f(Xe.dragUniformLocation,i),e.uniform1f(Xe.interactionRangeUniformLocation,n),e.uniform1f(Xe.deltaTimeUniformLocation,a),e.uniform2f(Xe.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Xe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=_t;_t=Bt,Bt=s}return _t.tex};function Si(t){let e,o,n,i,a,s,r,l,c,u,_,x,h,T=t[2]?"Play":"Pause",w,D,v,P=t[1]?"Normal Speed":"Slow Mo",M,O,N,Y,d=t[5].width*t[5].height+"",L,p,E,oe,J,S,k,Z,G,le,F,ee,te,ie,he,be,ae,Re,_e,de,Be,q,V,Ie,Fe,pe,Ce,X,ne,Se;return{c(){e=$("p"),o=B("This could be a kind of water simulation."),n=U(),i=$("p"),a=B(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),s=U(),r=$("p"),l=B("For now creating vertical walls create a bug so we warp the horizontal coordinates."),c=U(),u=$("canvas"),_=U(),x=$("div"),h=$("button"),w=B(T),D=U(),v=$("button"),M=B(P),O=U(),N=$("span"),Y=B("particles: "),L=B(d),p=U(),E=$("label"),oe=B("Smooth steps"),J=U(),S=$("input"),k=U(),Z=$("div"),G=$("ul"),le=$("li"),F=$("label"),ee=B("Interaction Range"),te=U(),ie=$("input"),he=U(),be=$("li"),ae=$("label"),Re=B("Drag"),_e=U(),de=$("input"),Be=U(),q=$("li"),V=$("label"),Ie=B("Time step"),Fe=U(),pe=$("input"),Ce=U(),X=$("ul"),this.h()},l(C){e=A(C,"P",{});var re=R(e);o=I(re,"This could be a kind of water simulation."),re.forEach(f),n=y(C),i=A(C,"P",{});var We=R(i);a=I(We,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),We.forEach(f),s=y(C),r=A(C,"P",{});var De=R(r);l=I(De,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),De.forEach(f),c=y(C),u=A(C,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(u).forEach(f),_=y(C),x=A(C,"DIV",{});var Te=R(x);h=A(Te,"BUTTON",{});var st=R(h);w=I(st,T),st.forEach(f),D=y(Te),v=A(Te,"BUTTON",{});var Ue=R(v);M=I(Ue,P),Ue.forEach(f),O=y(Te),N=A(Te,"SPAN",{});var qe=R(N);Y=I(qe,"particles: "),L=I(qe,d),qe.forEach(f),p=y(Te),E=A(Te,"LABEL",{for:!0});var lt=R(E);oe=I(lt,"Smooth steps"),lt.forEach(f),J=y(Te),S=A(Te,"INPUT",{type:!0,min:!0}),Te.forEach(f),k=y(C),Z=A(C,"DIV",{});var He=R(Z);G=A(He,"UL",{});var ye=R(G);le=A(ye,"LI",{});var Me=R(le);F=A(Me,"LABEL",{for:!0});var ct=R(F);ee=I(ct,"Interaction Range"),ct.forEach(f),te=y(Me),ie=A(Me,"INPUT",{id:!0,type:!0,min:!0}),Me.forEach(f),he=y(ye),be=A(ye,"LI",{});var At=R(be);ae=A(At,"LABEL",{for:!0});var mn=R(ae);Re=I(mn,"Drag"),mn.forEach(f),_e=y(At),de=A(At,"INPUT",{id:!0,type:!0,min:!0}),At.forEach(f),Be=y(ye),q=A(ye,"LI",{});var bt=R(q);V=A(bt,"LABEL",{for:!0});var dn=R(V);Ie=I(dn,"Time step"),dn.forEach(f),Fe=y(bt),pe=A(bt,"INPUT",{id:!0,type:!0,min:!0}),bt.forEach(f),Ce=y(ye),X=A(ye,"UL",{}),R(X).forEach(f),ye.forEach(f),He.forEach(f),this.h()},h(){b(u,"id","canvas"),Ve(u,"background-color","black"),b(u,"width",t[4].width),b(u,"height",t[4].height),b(E,"for","steps"),b(S,"type","number"),b(S,"min",0),b(F,"for","interactionRange"),b(ie,"id","interactionRange"),b(ie,"type","number"),b(ie,"min",0),b(ae,"for","drag"),b(de,"id","drag"),b(de,"type","number"),b(de,"min",0),b(V,"for","deltaTime"),b(pe,"id","deltaTime"),b(pe,"type","number"),b(pe,"min",0)},m(C,re){g(C,e,re),m(e,o),g(C,n,re),g(C,i,re),m(i,a),g(C,s,re),g(C,r,re),m(r,l),g(C,c,re),g(C,u,re),g(C,_,re),g(C,x,re),m(x,h),m(h,w),m(x,D),m(x,v),m(v,M),m(x,O),m(x,N),m(N,Y),m(N,L),m(x,p),m(x,E),m(E,oe),m(x,J),m(x,S),ce(S,t[0]),g(C,k,re),g(C,Z,re),m(Z,G),m(G,le),m(le,F),m(F,ee),m(le,te),m(le,ie),ce(ie,t[3].interactionRange),m(G,he),m(G,be),m(be,ae),m(ae,Re),m(be,_e),m(be,de),ce(de,t[3].drag),m(G,Be),m(G,q),m(q,V),m(V,Ie),m(q,Fe),m(q,pe),ce(pe,t[3].timeStep),m(G,Ce),m(G,X),ne||(Se=[ue(h,"click",t[6]),ue(v,"click",t[7]),ue(S,"input",t[8]),ue(ie,"input",t[9]),ue(de,"input",t[10]),ue(pe,"input",t[11])],ne=!0)},p(C,[re]){re&4&&T!==(T=C[2]?"Play":"Pause")&&Ge(w,T),re&2&&P!==(P=C[1]?"Normal Speed":"Slow Mo")&&Ge(M,P),re&1&&fe(S.value)!==C[0]&&ce(S,C[0]),re&8&&fe(ie.value)!==C[3].interactionRange&&ce(ie,C[3].interactionRange),re&8&&fe(de.value)!==C[3].drag&&ce(de,C[3].drag),re&8&&fe(pe.value)!==C[3].timeStep&&ce(pe,C[3].timeStep)},i:se,o:se,d(C){C&&f(e),C&&f(n),C&&f(i),C&&f(s),C&&f(r),C&&f(c),C&&f(u),C&&f(_),C&&f(x),C&&f(k),C&&f(Z),ne=!1,Ot(Se)}}}function Ci(t,e,o){const n={width:800,height:600},i={width:500,height:20};let a=1,s=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const D=$t();me(D.canvas);const{ids:v,positions:P,colors:M}=Ri({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Ei(D,{ids:v,colors:M,texDimensions:i});let O=Bi(D,{positions:P,texDimensions:i});function N(){if(me(D.canvas),!r)for(let Y=0;Y<a;Y++)O=Ii({gl:D,texDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return wi({gl:D,positionTex:O,textureDimension:i,ids:v}),r?requestAnimationFrame(N):s?setTimeout(()=>requestAnimationFrame(N),1e3):requestAnimationFrame(N)}requestAnimationFrame(N)}we(()=>c());const u=()=>o(2,r=!r),_=()=>o(1,s=!s);function x(){a=fe(this.value),o(0,a)}function h(){l.interactionRange=fe(this.value),o(3,l)}function T(){l.drag=fe(this.value),o(3,l)}function w(){l.timeStep=fe(this.value),o(3,l)}return[a,s,r,l,n,i,u,_,x,h,T,w]}class Mi extends xe{constructor(e){super(),$e(this,e,Ci,Si,Ae,{})}}const Ni=`attribute float id;
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
`,Oi=`precision mediump float;
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
`;let et,at,sn,ln;const Xi=(t,e)=>{const{ids:o,colors:n}=e;at=ve(t,[Ni,Oi]),et={idAttributeLocation:t.getAttribLocation(at,"id"),colorAttributeLocation:t.getAttribLocation(at,"color"),texDimensionsUniformLocation:t.getUniformLocation(at,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(at,"u_resolution")},sn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,sn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),ln=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ln),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},ki=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,l=0,c=0;me(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,sn),e.vertexAttribPointer(et.idAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(et.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,ln),e.vertexAttribPointer(et.colorAttributeLocation,a,s,r,l,c),e.enableVertexAttribArray(et.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(at),e.uniform2f(et.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(et.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,i.length)};function zi(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((l,c)=>c),s=new Array(i).fill(0).map(l=>Math.floor(Math.random()*4)),r=a.map(l=>{if(n==="random"){const{x:c,y:u}=Yi(o);return[c,u,0,0]}if(n==="disk"){const{x:u,y:_}=Wi(o,200);return[u,_,0,0]}if(n==="square"){const{x:u,y:_}=Vi(o,300);return[u,_,0,0]}if(n==="idDiagonal"){const{x:c,y:u}=qi(o,l,a.length);return[c,u,0,0]}if(n==="sinusoidal"){const{x:c,y:u}=Dn(o,l,a.length,{x:1,y:5});return[c,u,0,0]}if(n==="circle"){const{x:c,y:u}=Dn(o,l,a.length,{x:1,y:1});return[c,u,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Yi=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},Vi=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Wi=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},qi=(t,e,o)=>{const n=cn(e,0,o,0,t.width,!1),i=cn(e,0,o,0,t.height,!1);return{x:n,y:i}},Dn=(t,e,o,n)=>{const i=cn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,l=n.y,u=Math.sin(l*i)*200+t.height/2;return{x:r,y:u}},cn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?Un(s,n,i):Un(s,i,n):s},Un=function(t,e,o){return Math.max(Math.min(t,o),e)},Gi=`attribute vec4 position;
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

`;let ze,Ye,fn,Ut,qt,yn,Ln,Tt,It;const ji=(t,e)=>{const{positions:o,texDimensions:n}=e,i=Hi.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return Ye=ve(t,[Gi,i]),ze={positionAttributeLocation:t.getAttribLocation(Ye,"position"),positionTexLocation:t.getUniformLocation(Ye,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ye,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ye,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ye,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ye,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ye,"u_resolution")},fn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,fn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ut=ge(t,new Float32Array(o),n.width,n.height),qt=ge(t,null,n.width,n.height),yn=Ee(t,Ut),Ln=Ee(t,qt),Tt={fb:yn,tex:Ut},It={fb:Ln,tex:qt},Ut},Ki=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,It.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,fn),e.enableVertexAttribArray(ze.positionAttributeLocation),e.vertexAttribPointer(ze.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Tt.tex),e.useProgram(Ye),e.uniform1i(ze.positionTexLocation,0),e.uniform1f(ze.dragUniformLocation,i),e.uniform1f(ze.interactionRangeUniformLocation,n),e.uniform1f(ze.deltaTimeUniformLocation,a),e.uniform2f(ze.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ze.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Tt;Tt=It,It=s}return Tt.tex};function Qi(t){let e,o,n,i,a=t[2]?"Play":"Pause",s,r,l,c=t[1]?"Normal Speed":"Slow Mo",u,_,x,h,T=t[5].width*t[5].height+"",w,D,v,P,M,O,N,Y,d,L,p,E,oe,J,S,k,Z,G,le,F,ee,te,ie,he,be,ae,Re,_e,de,Be;return{c(){e=$("canvas"),o=U(),n=$("div"),i=$("button"),s=B(a),r=U(),l=$("button"),u=B(c),_=U(),x=$("span"),h=B("particles: "),w=B(T),D=U(),v=$("label"),P=B("Smooth steps"),M=U(),O=$("input"),N=U(),Y=$("div"),d=$("ul"),L=$("li"),p=$("label"),E=B("Interaction Range"),oe=U(),J=$("input"),S=U(),k=$("li"),Z=$("label"),G=B("Drag"),le=U(),F=$("input"),ee=U(),te=$("li"),ie=$("label"),he=B("Time step"),be=U(),ae=$("input"),Re=U(),_e=$("ul"),this.h()},l(q){e=A(q,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),R(e).forEach(f),o=y(q),n=A(q,"DIV",{});var V=R(n);i=A(V,"BUTTON",{});var Ie=R(i);s=I(Ie,a),Ie.forEach(f),r=y(V),l=A(V,"BUTTON",{});var Fe=R(l);u=I(Fe,c),Fe.forEach(f),_=y(V),x=A(V,"SPAN",{});var pe=R(x);h=I(pe,"particles: "),w=I(pe,T),pe.forEach(f),D=y(V),v=A(V,"LABEL",{for:!0});var Ce=R(v);P=I(Ce,"Smooth steps"),Ce.forEach(f),M=y(V),O=A(V,"INPUT",{type:!0,min:!0}),V.forEach(f),N=y(q),Y=A(q,"DIV",{});var X=R(Y);d=A(X,"UL",{});var ne=R(d);L=A(ne,"LI",{});var Se=R(L);p=A(Se,"LABEL",{for:!0});var C=R(p);E=I(C,"Interaction Range"),C.forEach(f),oe=y(Se),J=A(Se,"INPUT",{id:!0,type:!0,min:!0}),Se.forEach(f),S=y(ne),k=A(ne,"LI",{});var re=R(k);Z=A(re,"LABEL",{for:!0});var We=R(Z);G=I(We,"Drag"),We.forEach(f),le=y(re),F=A(re,"INPUT",{id:!0,type:!0,min:!0}),re.forEach(f),ee=y(ne),te=A(ne,"LI",{});var De=R(te);ie=A(De,"LABEL",{for:!0});var Te=R(ie);he=I(Te,"Time step"),Te.forEach(f),be=y(De),ae=A(De,"INPUT",{id:!0,type:!0,min:!0}),De.forEach(f),Re=y(ne),_e=A(ne,"UL",{}),R(_e).forEach(f),ne.forEach(f),X.forEach(f),this.h()},h(){b(e,"id","canvas"),Ve(e,"background-color","black"),b(e,"width",t[4].width),b(e,"height",t[4].height),b(v,"for","steps"),b(O,"type","number"),b(O,"min",0),b(p,"for","interactionRange"),b(J,"id","interactionRange"),b(J,"type","number"),b(J,"min",0),b(Z,"for","drag"),b(F,"id","drag"),b(F,"type","number"),b(F,"min",0),b(ie,"for","deltaTime"),b(ae,"id","deltaTime"),b(ae,"type","number"),b(ae,"min",0)},m(q,V){g(q,e,V),g(q,o,V),g(q,n,V),m(n,i),m(i,s),m(n,r),m(n,l),m(l,u),m(n,_),m(n,x),m(x,h),m(x,w),m(n,D),m(n,v),m(v,P),m(n,M),m(n,O),ce(O,t[0]),g(q,N,V),g(q,Y,V),m(Y,d),m(d,L),m(L,p),m(p,E),m(L,oe),m(L,J),ce(J,t[3].interactionRange),m(d,S),m(d,k),m(k,Z),m(Z,G),m(k,le),m(k,F),ce(F,t[3].drag),m(d,ee),m(d,te),m(te,ie),m(ie,he),m(te,be),m(te,ae),ce(ae,t[3].timeStep),m(d,Re),m(d,_e),de||(Be=[ue(i,"click",t[6]),ue(l,"click",t[7]),ue(O,"input",t[8]),ue(J,"input",t[9]),ue(F,"input",t[10]),ue(ae,"input",t[11])],de=!0)},p(q,[V]){V&4&&a!==(a=q[2]?"Play":"Pause")&&Ge(s,a),V&2&&c!==(c=q[1]?"Normal Speed":"Slow Mo")&&Ge(u,c),V&1&&fe(O.value)!==q[0]&&ce(O,q[0]),V&8&&fe(J.value)!==q[3].interactionRange&&ce(J,q[3].interactionRange),V&8&&fe(F.value)!==q[3].drag&&ce(F,q[3].drag),V&8&&fe(ae.value)!==q[3].timeStep&&ce(ae,q[3].timeStep)},i:se,o:se,d(q){q&&f(e),q&&f(o),q&&f(n),q&&f(N),q&&f(Y),de=!1,Ot(Be)}}}function Ji(t,e,o){const n={width:800,height:600},i={width:500,height:20};let a=1,s=!1,r=!0;const l={interactionRange:6,drag:5,timeStep:10};function c(){const D=$t();me(D.canvas);const{ids:v,positions:P,colors:M}=zi({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Xi(D,{ids:v,colors:M,texDimensions:i});let O=ji(D,{positions:P,texDimensions:i});function N(){if(me(D.canvas),!r)for(let Y=0;Y<a;Y++)O=Ki({gl:D,texDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return ki({gl:D,positionTex:O,textureDimension:i,ids:v}),r?requestAnimationFrame(N):s?setTimeout(()=>requestAnimationFrame(N),1e3):requestAnimationFrame(N)}requestAnimationFrame(N)}we(()=>c());const u=()=>o(2,r=!r),_=()=>o(1,s=!s);function x(){a=fe(this.value),o(0,a)}function h(){l.interactionRange=fe(this.value),o(3,l)}function T(){l.drag=fe(this.value),o(3,l)}function w(){l.timeStep=fe(this.value),o(3,l)}return[a,s,r,l,n,i,u,_,x,h,T,w]}class Zi extends xe{constructor(e){super(),$e(this,e,Ji,Qi,Ae,{})}}function er(t){let e;return{c(){e=B("About")},l(o){e=I(o,"About")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function tr(t){let e;return{c(){e=B("Test 1")},l(o){e=I(o,"Test 1")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function nr(t){let e;return{c(){e=B("Test 2")},l(o){e=I(o,"Test 2")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function or(t){let e;return{c(){e=B("Test 3")},l(o){e=I(o,"Test 3")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function ir(t){let e;return{c(){e=B("Test 4")},l(o){e=I(o,"Test 4")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function rr(t){let e;return{c(){e=B("Test 5")},l(o){e=I(o,"Test 5")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function ar(t){let e;return{c(){e=B("Test 6")},l(o){e=I(o,"Test 6")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function sr(t){let e;return{c(){e=B("Test 7")},l(o){e=I(o,"Test 7")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function lr(t){let e;return{c(){e=B("Test 8")},l(o){e=I(o,"Test 8")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function cr(t){let e;return{c(){e=B("Test 9")},l(o){e=I(o,"Test 9")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function fr(t){let e;return{c(){e=B("Test 10")},l(o){e=I(o,"Test 10")},m(o,n){g(o,e,n)},d(o){o&&f(e)}}}function ur(t){let e,o,n,i,a,s,r,l,c,u,_,x,h,T,w,D,v,P,M,O,N,Y;return e=new Le({props:{$$slots:{default:[er]},$$scope:{ctx:t}}}),n=new Le({props:{$$slots:{default:[tr]},$$scope:{ctx:t}}}),a=new Le({props:{$$slots:{default:[nr]},$$scope:{ctx:t}}}),r=new Le({props:{$$slots:{default:[or]},$$scope:{ctx:t}}}),c=new Le({props:{$$slots:{default:[ir]},$$scope:{ctx:t}}}),_=new Le({props:{$$slots:{default:[rr]},$$scope:{ctx:t}}}),h=new Le({props:{$$slots:{default:[ar]},$$scope:{ctx:t}}}),w=new Le({props:{$$slots:{default:[sr]},$$scope:{ctx:t}}}),v=new Le({props:{$$slots:{default:[lr]},$$scope:{ctx:t}}}),M=new Le({props:{$$slots:{default:[cr]},$$scope:{ctx:t}}}),N=new Le({props:{$$slots:{default:[fr]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment),o=U(),H(n.$$.fragment),i=U(),H(a.$$.fragment),s=U(),H(r.$$.fragment),l=U(),H(c.$$.fragment),u=U(),H(_.$$.fragment),x=U(),H(h.$$.fragment),T=U(),H(w.$$.fragment),D=U(),H(v.$$.fragment),P=U(),H(M.$$.fragment),O=U(),H(N.$$.fragment)},l(d){j(e.$$.fragment,d),o=y(d),j(n.$$.fragment,d),i=y(d),j(a.$$.fragment,d),s=y(d),j(r.$$.fragment,d),l=y(d),j(c.$$.fragment,d),u=y(d),j(_.$$.fragment,d),x=y(d),j(h.$$.fragment,d),T=y(d),j(w.$$.fragment,d),D=y(d),j(v.$$.fragment,d),P=y(d),j(M.$$.fragment,d),O=y(d),j(N.$$.fragment,d)},m(d,L){K(e,d,L),g(d,o,L),K(n,d,L),g(d,i,L),K(a,d,L),g(d,s,L),K(r,d,L),g(d,l,L),K(c,d,L),g(d,u,L),K(_,d,L),g(d,x,L),K(h,d,L),g(d,T,L),K(w,d,L),g(d,D,L),K(v,d,L),g(d,P,L),K(M,d,L),g(d,O,L),K(N,d,L),Y=!0},p(d,L){const p={};L&1&&(p.$$scope={dirty:L,ctx:d}),e.$set(p);const E={};L&1&&(E.$$scope={dirty:L,ctx:d}),n.$set(E);const oe={};L&1&&(oe.$$scope={dirty:L,ctx:d}),a.$set(oe);const J={};L&1&&(J.$$scope={dirty:L,ctx:d}),r.$set(J);const S={};L&1&&(S.$$scope={dirty:L,ctx:d}),c.$set(S);const k={};L&1&&(k.$$scope={dirty:L,ctx:d}),_.$set(k);const Z={};L&1&&(Z.$$scope={dirty:L,ctx:d}),h.$set(Z);const G={};L&1&&(G.$$scope={dirty:L,ctx:d}),w.$set(G);const le={};L&1&&(le.$$scope={dirty:L,ctx:d}),v.$set(le);const F={};L&1&&(F.$$scope={dirty:L,ctx:d}),M.$set(F);const ee={};L&1&&(ee.$$scope={dirty:L,ctx:d}),N.$set(ee)},i(d){Y||(z(e.$$.fragment,d),z(n.$$.fragment,d),z(a.$$.fragment,d),z(r.$$.fragment,d),z(c.$$.fragment,d),z(_.$$.fragment,d),z(h.$$.fragment,d),z(w.$$.fragment,d),z(v.$$.fragment,d),z(M.$$.fragment,d),z(N.$$.fragment,d),Y=!0)},o(d){W(e.$$.fragment,d),W(n.$$.fragment,d),W(a.$$.fragment,d),W(r.$$.fragment,d),W(c.$$.fragment,d),W(_.$$.fragment,d),W(h.$$.fragment,d),W(w.$$.fragment,d),W(v.$$.fragment,d),W(M.$$.fragment,d),W(N.$$.fragment,d),Y=!1},d(d){Q(e,d),d&&f(o),Q(n,d),d&&f(i),Q(a,d),d&&f(s),Q(r,d),d&&f(l),Q(c,d),d&&f(u),Q(_,d),d&&f(x),Q(h,d),d&&f(T),Q(w,d),d&&f(D),Q(v,d),d&&f(P),Q(M,d),d&&f(O),Q(N,d)}}}function mr(t){let e,o;return{c(){e=$("p"),o=B("This page is an experiment to run simulation on the GPU.")},l(n){e=A(n,"P",{});var i=R(e);o=I(i,"This page is an experiment to run simulation on the GPU."),i.forEach(f)},m(n,i){g(n,e,i),m(e,o)},p:se,d(n){n&&f(e)}}}function dr(t){let e,o;return e=new fo({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function pr(t){let e,o;return e=new ho({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function hr(t){let e,o;return e=new go({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function vr(t){let e,o;return e=new Do({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function _r(t){let e,o;return e=new So({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function Tr(t){let e,o;return e=new Go({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function xr(t){let e,o;return e=new ai({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function $r(t){let e,o;return e=new Ai({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function Ar(t){let e,o;return e=new Mi({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function br(t){let e,o;return e=new Zi({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function gr(t){let e,o,n,i,a,s,r,l,c,u,_,x,h,T,w,D,v,P,M,O,N,Y,d,L;return e=new to({props:{$$slots:{default:[ur]},$$scope:{ctx:t}}}),n=new Pe({props:{$$slots:{default:[mr]},$$scope:{ctx:t}}}),a=new Pe({props:{$$slots:{default:[dr]},$$scope:{ctx:t}}}),r=new Pe({props:{$$slots:{default:[pr]},$$scope:{ctx:t}}}),c=new Pe({props:{$$slots:{default:[hr]},$$scope:{ctx:t}}}),_=new Pe({props:{$$slots:{default:[vr]},$$scope:{ctx:t}}}),h=new Pe({props:{$$slots:{default:[_r]},$$scope:{ctx:t}}}),w=new Pe({props:{$$slots:{default:[Tr]},$$scope:{ctx:t}}}),v=new Pe({props:{$$slots:{default:[xr]},$$scope:{ctx:t}}}),M=new Pe({props:{$$slots:{default:[$r]},$$scope:{ctx:t}}}),N=new Pe({props:{$$slots:{default:[Ar]},$$scope:{ctx:t}}}),d=new Pe({props:{$$slots:{default:[br]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment),o=U(),H(n.$$.fragment),i=U(),H(a.$$.fragment),s=U(),H(r.$$.fragment),l=U(),H(c.$$.fragment),u=U(),H(_.$$.fragment),x=U(),H(h.$$.fragment),T=U(),H(w.$$.fragment),D=U(),H(v.$$.fragment),P=U(),H(M.$$.fragment),O=U(),H(N.$$.fragment),Y=U(),H(d.$$.fragment)},l(p){j(e.$$.fragment,p),o=y(p),j(n.$$.fragment,p),i=y(p),j(a.$$.fragment,p),s=y(p),j(r.$$.fragment,p),l=y(p),j(c.$$.fragment,p),u=y(p),j(_.$$.fragment,p),x=y(p),j(h.$$.fragment,p),T=y(p),j(w.$$.fragment,p),D=y(p),j(v.$$.fragment,p),P=y(p),j(M.$$.fragment,p),O=y(p),j(N.$$.fragment,p),Y=y(p),j(d.$$.fragment,p)},m(p,E){K(e,p,E),g(p,o,E),K(n,p,E),g(p,i,E),K(a,p,E),g(p,s,E),K(r,p,E),g(p,l,E),K(c,p,E),g(p,u,E),K(_,p,E),g(p,x,E),K(h,p,E),g(p,T,E),K(w,p,E),g(p,D,E),K(v,p,E),g(p,P,E),K(M,p,E),g(p,O,E),K(N,p,E),g(p,Y,E),K(d,p,E),L=!0},p(p,E){const oe={};E&1&&(oe.$$scope={dirty:E,ctx:p}),e.$set(oe);const J={};E&1&&(J.$$scope={dirty:E,ctx:p}),n.$set(J);const S={};E&1&&(S.$$scope={dirty:E,ctx:p}),a.$set(S);const k={};E&1&&(k.$$scope={dirty:E,ctx:p}),r.$set(k);const Z={};E&1&&(Z.$$scope={dirty:E,ctx:p}),c.$set(Z);const G={};E&1&&(G.$$scope={dirty:E,ctx:p}),_.$set(G);const le={};E&1&&(le.$$scope={dirty:E,ctx:p}),h.$set(le);const F={};E&1&&(F.$$scope={dirty:E,ctx:p}),w.$set(F);const ee={};E&1&&(ee.$$scope={dirty:E,ctx:p}),v.$set(ee);const te={};E&1&&(te.$$scope={dirty:E,ctx:p}),M.$set(te);const ie={};E&1&&(ie.$$scope={dirty:E,ctx:p}),N.$set(ie);const he={};E&1&&(he.$$scope={dirty:E,ctx:p}),d.$set(he)},i(p){L||(z(e.$$.fragment,p),z(n.$$.fragment,p),z(a.$$.fragment,p),z(r.$$.fragment,p),z(c.$$.fragment,p),z(_.$$.fragment,p),z(h.$$.fragment,p),z(w.$$.fragment,p),z(v.$$.fragment,p),z(M.$$.fragment,p),z(N.$$.fragment,p),z(d.$$.fragment,p),L=!0)},o(p){W(e.$$.fragment,p),W(n.$$.fragment,p),W(a.$$.fragment,p),W(r.$$.fragment,p),W(c.$$.fragment,p),W(_.$$.fragment,p),W(h.$$.fragment,p),W(w.$$.fragment,p),W(v.$$.fragment,p),W(M.$$.fragment,p),W(N.$$.fragment,p),W(d.$$.fragment,p),L=!1},d(p){Q(e,p),p&&f(o),Q(n,p),p&&f(i),Q(a,p),p&&f(s),Q(r,p),p&&f(l),Q(c,p),p&&f(u),Q(_,p),p&&f(x),Q(h,p),p&&f(T),Q(w,p),p&&f(D),Q(v,p),p&&f(P),Q(M,p),p&&f(O),Q(N,p),p&&f(Y),Q(d,p)}}}function Er(t){let e,o,n;return o=new Kn({props:{$$slots:{default:[gr]},$$scope:{ctx:t}}}),{c(){e=$("div"),H(o.$$.fragment)},l(i){e=A(i,"DIV",{});var a=R(e);j(o.$$.fragment,a),a.forEach(f)},m(i,a){g(i,e,a),K(o,e,null),n=!0},p(i,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:i}),o.$set(s)},i(i){n||(z(o.$$.fragment,i),n=!0)},o(i){W(o.$$.fragment,i),n=!1},d(i){i&&f(e),Q(o)}}}class wr extends xe{constructor(e){super(),$e(this,e,null,Er,Ae,{})}}function Rr(t){let e,o;return e=new wr({}),{c(){H(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,i){K(e,n,i),o=!0},p:se,i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){W(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}class Lr extends xe{constructor(e){super(),$e(this,e,null,Rr,Ae,{})}}export{Lr as default};
