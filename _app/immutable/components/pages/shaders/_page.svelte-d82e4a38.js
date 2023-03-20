import{S as pe,i as he,s as _e,C as wt,k as E,l as w,m as D,h as f,n as A,b as x,K as se,E as Rt,F as Ft,G as Dt,f as z,t as k,H as pt,R as xn,o as xe,j as $n,Q as An,T as Qt,U as mn,A as bn,V as gn,g as En,d as wn,q as I,a as P,r as C,c as B,D as p,B as Z,p as Pe,O as ae,u as Ke,P as le,M as jt,w as V,x as W,y as G,z as q}from"../../../chunks/index-ff9e742a.js";import{w as ht}from"../../../chunks/index-84a8d4d9.js";let Rn=1;function dn(){return`svelte-tabs-${Rn++}`}function Fn(t){let e,o,n,r;const a=t[4].default,s=wt(a,t,t[3],null);return{c(){e=E("div"),s&&s.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var c=D(e);s&&s.l(c),c.forEach(f),this.h()},h(){A(e,"class","svelte-tabs")},m(i,c){x(i,e,c),s&&s.m(e,null),o=!0,n||(r=se(e,"keydown",t[1]),n=!0)},p(i,[c]){s&&s.p&&(!o||c&8)&&Rt(s,a,i,i[3],o?Dt(a,i[3],c,null):Ft(i[3]),null)},i(i){o||(z(s,i),o=!0)},o(i){k(s,i),o=!1},d(i){i&&f(e),s&&s.d(i),n=!1,r()}}}const Kt={};function Dn(t,e,o){const n=t.indexOf(e);t.splice(n,1),o.update(r=>r===e?t[n]||t[t.length-1]:r)}function Un(t,e,o){let n,{$$slots:r={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const i=[],c=[],l=[],m=ht({}),_=ht({}),b=ht(null);pt(t,b,T=>o(5,n=T));const h=ht(null);function v(T,U,M){T.push(U),M.update(Y=>Y||U),An(()=>Dn(T,U,M))}function $(T){const U=c.indexOf(T);b.set(T),h.set(l[U])}xn(Kt,{registerTab(T){v(c,T,b)},registerTabElement(T){i.push(T)},registerPanel(T){v(l,T,h)},selectTab:$,selectedTab:b,selectedPanel:h,controls:m,labeledBy:_}),xe(()=>{$(c[s])}),$n(()=>{for(let T=0;T<c.length;T++)m.update(U=>({...U,[c[T].id]:l[T].id})),_.update(U=>({...U,[l[T].id]:c[T].id}))});async function F(T){if(T.target.classList.contains("svelte-tabs__tab")){let U=c.indexOf(n);switch(T.key){case"ArrowRight":U+=1,U>c.length-1&&(U=0),$(c[U]),i[U].focus();break;case"ArrowLeft":U-=1,U<0&&(U=c.length-1),$(c[U]),i[U].focus()}}}return t.$$set=T=>{"initialSelectedIndex"in T&&o(2,s=T.initialSelectedIndex),"$$scope"in T&&o(3,a=T.$$scope)},[b,F,s,a,r]}class yn extends pe{constructor(e){super(),he(this,e,Un,Fn,_e,{initialSelectedIndex:2})}}function Ln(t){let e,o,n,r,a,s;const i=t[9].default,c=wt(i,t,t[8],null);return{c(){e=E("li"),c&&c.c(),this.h()},l(l){e=w(l,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=D(e);c&&c.l(m),m.forEach(f),this.h()},h(){A(e,"role","tab"),A(e,"id",t[3].id),A(e,"aria-controls",o=t[2][t[3].id]),A(e,"aria-selected",t[1]),A(e,"tabindex",n=t[1]?0:-1),A(e,"class","svelte-tabs__tab svelte-1fbofsd"),Qt(e,"svelte-tabs__selected",t[1])},m(l,m){x(l,e,m),c&&c.m(e,null),t[10](e),r=!0,a||(s=se(e,"click",t[11]),a=!0)},p(l,[m]){c&&c.p&&(!r||m&256)&&Rt(c,i,l,l[8],r?Dt(i,l[8],m,null):Ft(l[8]),null),(!r||m&4&&o!==(o=l[2][l[3].id]))&&A(e,"aria-controls",o),(!r||m&2)&&A(e,"aria-selected",l[1]),(!r||m&2&&n!==(n=l[1]?0:-1))&&A(e,"tabindex",n),(!r||m&2)&&Qt(e,"svelte-tabs__selected",l[1])},i(l){r||(z(c,l),r=!0)},o(l){k(c,l),r=!1},d(l){l&&f(e),c&&c.d(l),t[10](null),a=!1,s()}}}function Pn(t,e,o){let n,r,{$$slots:a={},$$scope:s}=e,i;const c={id:dn()},{registerTab:l,registerTabElement:m,selectTab:_,selectedTab:b,controls:h}=mn(Kt);pt(t,b,T=>o(7,n=T)),pt(t,h,T=>o(2,r=T));let v;l(c),xe(async()=>{await bn(),m(i)});function $(T){gn[T?"unshift":"push"](()=>{i=T,o(0,i)})}const F=()=>_(c);return t.$$set=T=>{"$$scope"in T&&o(8,s=T.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(1,v=n===c)},[i,v,r,c,_,b,h,n,s,a,$,F]}class Ae extends pe{constructor(e){super(),he(this,e,Pn,Ln,_e,{})}}function Bn(t){let e,o;const n=t[1].default,r=wt(n,t,t[0],null);return{c(){e=E("ul"),r&&r.c(),this.h()},l(a){e=w(a,"UL",{role:!0,class:!0});var s=D(e);r&&r.l(s),s.forEach(f),this.h()},h(){A(e,"role","tablist"),A(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){x(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){r&&r.p&&(!o||s&1)&&Rt(r,n,a,a[0],o?Dt(n,a[0],s,null):Ft(a[0]),null)},i(a){o||(z(r,a),o=!0)},o(a){k(r,a),o=!1},d(a){a&&f(e),r&&r.d(a)}}}function Sn(t,e,o){let{$$slots:n={},$$scope:r}=e;return t.$$set=a=>{"$$scope"in a&&o(0,r=a.$$scope)},[r,n]}class In extends pe{constructor(e){super(),he(this,e,Sn,Bn,_e,{})}}function Jt(t){let e;const o=t[6].default,n=wt(o,t,t[5],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&32)&&Rt(n,o,r,r[5],e?Dt(o,r[5],a,null):Ft(r[5]),null)},i(r){e||(z(n,r),e=!0)},o(r){k(n,r),e=!1},d(r){n&&n.d(r)}}}function Cn(t){let e,o,n,r=t[1]===t[2]&&Jt(t);return{c(){e=E("div"),r&&r.c(),this.h()},l(a){e=w(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=D(e);r&&r.l(s),s.forEach(f),this.h()},h(){A(e,"id",t[2].id),A(e,"aria-labelledby",o=t[0][t[2].id]),A(e,"class","svelte-tabs__tab-panel svelte-epfyet"),A(e,"role","tabpanel")},m(a,s){x(a,e,s),r&&r.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&z(r,1)):(r=Jt(a),r.c(),z(r,1),r.m(e,null)):r&&(En(),k(r,1,1,()=>{r=null}),wn()),(!n||s&1&&o!==(o=a[0][a[2].id]))&&A(e,"aria-labelledby",o)},i(a){n||(z(r),n=!0)},o(a){k(r),n=!1},d(a){a&&f(e),r&&r.d()}}}function Mn(t,e,o){let n,r,{$$slots:a={},$$scope:s}=e;const i={id:dn()},{registerPanel:c,selectedPanel:l,labeledBy:m}=mn(Kt);return pt(t,l,_=>o(1,r=_)),pt(t,m,_=>o(0,n=_)),c(i),t.$$set=_=>{"$$scope"in _&&o(5,s=_.$$scope)},[n,r,i,l,m,s,a]}class be extends pe{constructor(e){super(),he(this,e,Mn,Cn,_e,{})}}const Nn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Ut(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return yt(e),e}function yt(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Te(t,e,o,n){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function ge(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function de(t,e,o,n,r){const a=[];for(let i=0;i<e.length;++i){const c=Nn[i]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,l=On(t,e[i],c,r);if(!l)throw"Can not create shader";a.push(l)}const s=Xn(t,a,o,n,r);if(!s)throw"Can not create program";return s}function On(t,e,o,n){const r=n||console.log,a=t.createShader(o);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const i=t.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+i+`
`+e.split(`
`).map((c,l)=>`${l+1}: ${c}`).join(`
`))),t.deleteShader(a),null}return a}function Xn(t,e,o,n,r){const a=r||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(c){t.attachShader(s,c)}),o&&o.forEach(function(c,l){t.bindAttribLocation(s,n?n[l]:l,c)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const c=t.getProgramInfoLog(s);return a("Error in program linking:"+c),t.deleteProgram(s),null}return s}function re(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}function zn(t){let e,o,n,r,a,s,i,c,l,m,_,b;return{c(){e=E("p"),o=I(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=P(),r=E("p"),a=I(`It is reusing the code from
    `),s=E("a"),i=I(`this site
    `),c=I("."),l=P(),m=E("ul"),_=P(),b=E("canvas"),this.h()},l(h){e=w(h,"P",{});var v=D(e);o=C(v,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),v.forEach(f),n=B(h),r=w(h,"P",{});var $=D(r);a=C($,`It is reusing the code from
    `),s=w($,"A",{target:!0,href:!0});var F=D(s);i=C(F,`this site
    `),F.forEach(f),c=C($,"."),$.forEach(f),l=B(h),m=w(h,"UL",{id:!0}),D(m).forEach(f),_=B(h),b=w(h,"CANVAS",{id:!0}),D(b).forEach(f),this.h()},h(){A(s,"target","none"),A(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),A(m,"id","result"),A(b,"id","canvas")},m(h,v){x(h,e,v),p(e,o),x(h,n,v),x(h,r,v),p(r,a),p(r,s),p(s,i),p(r,c),x(h,l,v),x(h,m,v),x(h,_,v),x(h,b,v)},p:Z,i:Z,o:Z,d(h){h&&f(e),h&&f(n),h&&f(r),h&&f(l),h&&f(m),h&&f(_),h&&f(b)}}}function kn(t){const e=document.createElement("li");e.textContent=t.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(e)}function Yn(t){function e(){const o=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const i=s.getContext("webgl");if(!i)throw"Coulndt get context";const c=de(i,[o,n]);if(!c)throw"Could not get program";const l=i.getAttribLocation(c,"position"),m=i.getUniformLocation(c,"srcTex"),_=i.getUniformLocation(c,"srcDimensions"),b=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,b),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(l),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0);const h=3,v=3,$=i.createTexture();i.bindTexture(i.TEXTURE_2D,$),i.pixelStorei(i.UNPACK_ALIGNMENT,1),i.texImage2D(i.TEXTURE_2D,0,i.LUMINANCE,h,v,0,i.LUMINANCE,i.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.useProgram(c),i.uniform1i(m,0),i.uniform2f(_,h,v),i.drawArrays(i.TRIANGLES,0,6);const F=new Uint8Array(3*3*4);i.readPixels(0,0,3,3,i.RGBA,i.UNSIGNED_BYTE,F);for(let T=0;T<3*3;++T)kn(F[T*4])}return xe(e),[]}class Vn extends pe{constructor(e){super(),he(this,e,Yn,zn,_e,{})}}const Wn=Float32Array;function pn(t,e,o,n,r,a){const s=new Wn(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-o),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(o+n)/(o-n),s[14]=(r+a)/(r-a),s[15]=1,s}function Gn(t){let e,o,n,r,a,s,i;return{c(){e=E("p"),o=I(`This is the simple particles simulation from
    `),n=E("a"),r=I("webglfundamentals"),a=I(" directly copied in a svelte component."),s=P(),i=E("canvas"),this.h()},l(c){e=w(c,"P",{});var l=D(e);o=C(l,`This is the simple particles simulation from
    `),n=w(l,"A",{target:!0,href:!0});var m=D(n);r=C(m,"webglfundamentals"),m.forEach(f),a=C(l," directly copied in a svelte component."),l.forEach(f),s=B(c),i=w(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(i).forEach(f),this.h()},h(){A(n,"target","none"),A(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),A(i,"id","canvas"),Pe(i,"background-color","black"),A(i,"width","800"),A(i,"height","600")},m(c,l){x(c,e,l),p(e,o),p(e,n),p(n,r),p(e,a),x(c,s,l),x(c,i,l)},p:Z,i:Z,o:Z,d(c){c&&f(e),c&&f(s),c&&f(i)}}}function qn(t){function e(){const o=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const i=s.getContext("webgl");if(!i)throw"gl undefined";if(!i.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!i.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const m=de(i,[o,n]),_=de(i,[r,a]);if(!m||!_)throw"Can not create programs";const b={position:i.getAttribLocation(m,"position"),positionTex:i.getUniformLocation(m,"positionTex"),velocityTex:i.getUniformLocation(m,"velocityTex"),texDimensions:i.getUniformLocation(m,"texDimensions"),canvasDimensions:i.getUniformLocation(m,"canvasDimensions"),deltaTime:i.getUniformLocation(m,"deltaTime")},h={id:i.getAttribLocation(_,"id"),positionTex:i.getUniformLocation(_,"positionTex"),texDimensions:i.getUniformLocation(_,"texDimensions"),matrix:i.getUniformLocation(_,"matrix")},v=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,v),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW);const $=300,F=20,T=$*F,U=new Array(T).fill(0).map((R,J)=>J),M=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,M),i.bufferData(i.ARRAY_BUFFER,new Float32Array(U),i.STATIC_DRAW),re(i.canvas);const Y=(R,J)=>(J===void 0&&(J=R,R=0),Math.random()*(J-R)+R),d=new Float32Array(U.map(R=>[Y(s.width),Y(s.height),0,0]).flat()),y=new Float32Array(U.map(R=>[Y(-300,300),Y(-300,300),0,0]).flat());function u(R,J,ee,ue){const $e=R.createTexture();return R.bindTexture(R.TEXTURE_2D,$e),R.texImage2D(R.TEXTURE_2D,0,R.RGBA,ee,ue,0,R.RGBA,R.FLOAT,J),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MAG_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),$e}const L=u(i,y,$,F),te=u(i,d,$,F),N=u(i,null,$,F);if(!te||!N)throw"Can not create position textures";function K(R,J){const ee=R.createFramebuffer();return R.bindFramebuffer(R.FRAMEBUFFER,ee),R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,J,0),ee}const Q=K(i,te),S=K(i,N);let O={fb:Q,tex:te},H={fb:S,tex:N},j=0;function fe(R){if(!i)return;R*=.001;const J=R-j;j=R,re(i.canvas),i.bindFramebuffer(i.FRAMEBUFFER,H.fb),i.viewport(0,0,$,F),i.bindBuffer(i.ARRAY_BUFFER,v),i.enableVertexAttribArray(b.position),i.vertexAttribPointer(b.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,O.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,L),i.useProgram(m),i.uniform1i(b.positionTex,0),i.uniform1i(b.velocityTex,1),i.uniform2f(b.texDimensions,$,F),i.uniform2f(b.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f(b.deltaTime,J),i.drawArrays(i.TRIANGLES,0,6),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,M),i.enableVertexAttribArray(h.id),i.vertexAttribPointer(h.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,H.tex),i.useProgram(_),i.uniform2f(h.texDimensions,$,$),i.uniform1i(h.positionTex,0),i.uniformMatrix4fv(h.matrix,!1,pn(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,T);{const ee=O;O=H,H=ee}requestAnimationFrame(fe)}requestAnimationFrame(fe)}return xe(()=>e()),[]}class Hn extends pe{constructor(e){super(),he(this,e,qn,Gn,_e,{})}}const _t=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function jn(t,e,o,n){const r=t*e,a=new Array(r).fill(0).map((c,l)=>l),s=new Float32Array(a.map(c=>[_t(o),_t(n),0,0]).flat()),i=new Float32Array(a.map(c=>[_t(-300,300),_t(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:i}}const Kn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Qn=`precision highp float;

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

`,Jn=`  attribute float id;
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

`,Zn=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function eo(t){let e,o,n,r,a,s,i;return{c(){e=E("p"),o=I(`This is the simple particles simulation from
    `),n=E("a"),r=I("webglfundamentals"),a=I(" with the shader code extracted into separate files."),s=P(),i=E("canvas"),this.h()},l(c){e=w(c,"P",{});var l=D(e);o=C(l,`This is the simple particles simulation from
    `),n=w(l,"A",{target:!0,href:!0});var m=D(n);r=C(m,"webglfundamentals"),m.forEach(f),a=C(l," with the shader code extracted into separate files."),l.forEach(f),s=B(c),i=w(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(i).forEach(f),this.h()},h(){A(n,"target","none"),A(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),A(i,"id","canvas"),Pe(i,"background-color","black"),A(i,"width","800"),A(i,"height","600")},m(c,l){x(c,e,l),p(e,o),p(e,n),p(n,r),p(e,a),x(c,s,l),x(c,i,l)},p:Z,i:Z,o:Z,d(c){c&&f(e),c&&f(s),c&&f(i)}}}function to(t){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const a=r.getContext("webgl");if(!a)throw"gl undefined";yt(a);const s=de(a,[Kn,Qn]),i=de(a,[Jn,Zn]),c={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},l={id:a.getAttribLocation(i,"id"),positionTex:a.getUniformLocation(i,"positionTex"),texDimensions:a.getUniformLocation(i,"texDimensions"),matrix:a.getUniformLocation(i,"matrix")},m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const _=300,b=20,{numParticles:h,ids:v,positions:$,velocities:F}=jn(_,b,r.width,r.height),T=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,T),a.bufferData(a.ARRAY_BUFFER,new Float32Array(v),a.STATIC_DRAW),re(a.canvas);const U=Te(a,F,_,b),M=Te(a,$,_,b),Y=Te(a,null,_,b),d=ge(a,M),y=ge(a,Y);let u={fb:d,tex:M},L={fb:y,tex:Y},te=0;function N(K){if(!a||!m||!T)throw"Undefined params to render";K*=.001;const Q=K-te;te=K,re(a.canvas),n(a,L,_,b,m,c,u,U,s,Q),o(a,_,T,l,L,i,h);{const S=u;u=L,L=S}requestAnimationFrame(N)}requestAnimationFrame(N)}const o=(r,a,s,i,c,l,m)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,s),r.enableVertexAttribArray(i.id),r.vertexAttribPointer(i.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,c.tex),r.useProgram(l),r.uniform2f(i.texDimensions,a,a),r.uniform1i(i.positionTex,0),r.uniformMatrix4fv(i.matrix,!1,pn(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,m)},n=(r,a,s,i,c,l,m,_,b,h)=>{r.bindFramebuffer(r.FRAMEBUFFER,a.fb),r.viewport(0,0,s,i),r.bindBuffer(r.ARRAY_BUFFER,c),r.enableVertexAttribArray(l.position),r.vertexAttribPointer(l.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,m.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,_),r.useProgram(b),r.uniform1i(l.positionTex,0),r.uniform1i(l.velocityTex,1),r.uniform2f(l.texDimensions,s,i),r.uniform2f(l.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(l.deltaTime,h),r.drawArrays(r.TRIANGLES,0,6)};return xe(()=>e()),[]}class no extends pe{constructor(e){super(),he(this,e,to,eo,_e,{})}}const oo=`attribute vec2 a_position;

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
`,io=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function ro(t){let e,o,n,r,a,s,i,c,l,m,_,b;return{c(){e=E("p"),o=I(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=E("code"),r=I("requestAnimationFrame"),a=I(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=P(),i=E("canvas"),c=P(),l=E("button"),m=I("Add position"),this.h()},l(h){e=w(h,"P",{});var v=D(e);o=C(v,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=w(v,"CODE",{});var $=D(n);r=C($,"requestAnimationFrame"),$.forEach(f),a=C(v,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),v.forEach(f),s=B(h),i=w(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(i).forEach(f),c=B(h),l=w(h,"BUTTON",{});var F=D(l);m=C(F,"Add position"),F.forEach(f),this.h()},h(){A(i,"id","canvas"),Pe(i,"background-color","black"),A(i,"width","800"),A(i,"height","600")},m(h,v){x(h,e,v),p(e,o),p(e,n),p(n,r),p(e,a),x(h,s,v),x(h,i,v),x(h,c,v),x(h,l,v),p(l,m),_||(b=se(l,"click",t[1]),_=!0)},p:Z,i:Z,o:Z,d(h){h&&f(e),h&&f(s),h&&f(i),h&&f(c),h&&f(l),_=!1,b()}}}function ao(t){const e=[50,50,50,150,150,150,150,50,200,200];function o(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";yt(s);const i=de(s,[oo,io]);re(s.canvas);const c=s.getAttribLocation(i,"a_position"),l=s.getUniformLocation(i,"u_resolution"),m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function _(){if(!s)throw"Undefined params to render";for(let M=0;M<=e.length-2;M+=2)e[M]=(e[M]+Math.random()*2-1)%s.canvas.width,e[M+1]=(e[M+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),re(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(i),s.uniform2f(l,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(c),s.bindBuffer(s.ARRAY_BUFFER,m);const b=2,h=s.FLOAT,v=!1,$=0,F=0;s.vertexAttribPointer(c,b,h,v,$,F);var T=s.POINTS,U=e.length/2;s.drawArrays(T,F,U),requestAnimationFrame(_)}requestAnimationFrame(_)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return xe(()=>o()),[n,()=>n()]}class so extends pe{constructor(e){super(),he(this,e,ao,ro,_e,{})}}const lo=`attribute float id;
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
`,co=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let at,st;const fo=t=>{st=de(t,[lo,co]),at={idAttributeLocation:t.getAttribLocation(st,"id"),texDimensionsUniformLocation:t.getUniformLocation(st,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(st,"u_resolution")}},uo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t;re(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(st),e.uniform2f(at.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(at.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(at.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,i=e.FLOAT,c=!1,l=0,m=0;e.vertexAttribPointer(at.idAttributeLocation,s,i,c,l,m);const _=e.POINTS,b=r.length;e.drawArrays(_,m,b)};function mo(t){let e,o,n,r,a,s,i;return{c(){e=E("p"),o=I("Create an array of render-size positions. Store this array in a texture. In each "),n=E("code"),r=I("requestAnimationFrame"),a=I(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=P(),i=E("canvas"),this.h()},l(c){e=w(c,"P",{});var l=D(e);o=C(l,"Create an array of render-size positions. Store this array in a texture. In each "),n=w(l,"CODE",{});var m=D(n);r=C(m,"requestAnimationFrame"),m.forEach(f),a=C(l,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),l.forEach(f),s=B(c),i=w(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(i).forEach(f),this.h()},h(){A(i,"id","canvas"),Pe(i,"background-color","black"),A(i,"width",hn),A(i,"height",_n)},m(c,l){x(c,e,l),p(e,o),p(e,n),p(n,r),p(e,a),x(c,s,l),x(c,i,l)},p:Z,i:Z,o:Z,d(c){c&&f(e),c&&f(s),c&&f(i)}}}const hn=800,_n=600;function po(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const n=o.getContext("webgl");if(!n)throw"gl undefined";yt(n),re(n.canvas),fo(n);const r=[0,1,2,3,4,5,6,7,8,9],a=r.map(i=>[Math.random()*hn,Math.random()*_n,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let c=0;c<=a.length-2;c+=2)a[c]=(a[c]+Math.random()*2-1)%n.canvas.width,a[c+1]=(a[c+1]+Math.random()*0+1)%n.canvas.height;const i=Te(n,new Float32Array(a),3,3);uo({gl:n,positionTex:i,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(s)}requestAnimationFrame(s)}return xe(()=>e()),[]}let ho=class extends pe{constructor(e){super(),he(this,e,po,mo,_e,{})}};const _o=`attribute float id;
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
`,vo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let lt,ct,Ct;const To=(t,e)=>{ct=de(t,[_o,vo]),lt={idAttributeLocation:t.getAttribLocation(ct,"id"),texDimensionsUniformLocation:t.getUniformLocation(ct,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ct,"u_resolution")},Ct=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ct),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},xo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t;re(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Ct),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(ct),e.uniform2f(lt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(lt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(lt.idAttributeLocation);const a=1,s=e.FLOAT,i=!1,c=0,l=0;e.vertexAttribPointer(lt.idAttributeLocation,a,s,i,c,l),e.drawArrays(e.POINTS,l,r.length)};function $o(t,e){const o=new Array(t).fill(0).map((a,s)=>s),n=o.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:o.length,height:1};return{ids:o,positions:n,texDimensions:r}}const Ao=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,bo=`precision highp float;

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

`;let We,Ge,Mt,Lt,Pt,Zt,en,ft,At;const go=(t,e)=>{const{positions:o,texDimensions:n}=e;Ge=de(t,[Ao,bo]),We={positionAttributeLocation:t.getAttribLocation(Ge,"position"),positionTexLocation:t.getUniformLocation(Ge,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(Ge,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ge,"u_resolution")},Mt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Mt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Lt=Te(t,new Float32Array(o),n.width,n.height),Pt=Te(t,null,n.width,n.height),Zt=ge(t,Lt),en=ge(t,Pt),ft={fb:Zt,tex:Lt},At={fb:en,tex:Pt}},Eo=t=>{const{gl:e,texDimensions:o}=t;e.bindFramebuffer(e.FRAMEBUFFER,At.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Mt),e.enableVertexAttribArray(We.positionAttributeLocation),e.vertexAttribPointer(We.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ft.tex),e.useProgram(Ge),e.uniform1i(We.positionTexLocation,0),e.uniform2f(We.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(We.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=ft;ft=At,At=n}return ft.tex};function wo(t){let e,o,n,r,a,s,i,c,l,m,_,b,h;return{c(){e=E("p"),o=I("Create an array of render-size positions. Store this array in a texture."),n=P(),r=E("p"),a=I("Create 2 textures which will be used to update the positions with a shader. In each "),s=E("code"),i=I("requestAnimationFrame"),c=I(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),l=P(),m=E("p"),_=I("Finally switch the two textures to read and write in the updated textures"),b=P(),h=E("canvas"),this.h()},l(v){e=w(v,"P",{});var $=D(e);o=C($,"Create an array of render-size positions. Store this array in a texture."),$.forEach(f),n=B(v),r=w(v,"P",{});var F=D(r);a=C(F,"Create 2 textures which will be used to update the positions with a shader. In each "),s=w(F,"CODE",{});var T=D(s);i=C(T,"requestAnimationFrame"),T.forEach(f),c=C(F,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),F.forEach(f),l=B(v),m=w(v,"P",{});var U=D(m);_=C(U,"Finally switch the two textures to read and write in the updated textures"),U.forEach(f),b=B(v),h=w(v,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(h).forEach(f),this.h()},h(){A(h,"id","canvas"),Pe(h,"background-color","black"),A(h,"width",vn),A(h,"height",Tn)},m(v,$){x(v,e,$),p(e,o),x(v,n,$),x(v,r,$),p(r,a),p(r,s),p(s,i),p(r,c),x(v,l,$),x(v,m,$),p(m,_),x(v,b,$),x(v,h,$)},p:Z,i:Z,o:Z,d(v){v&&f(e),v&&f(n),v&&f(r),v&&f(l),v&&f(m),v&&f(b),v&&f(h)}}}const vn=800,Tn=600;function Ro(t){function e(){const o=Ut();re(o.canvas);const{ids:n,positions:r,texDimensions:a}=$o(100,{width:vn,height:Tn});To(o,n),go(o,{positions:r,texDimensions:a});function s(){re(o.canvas);const i=Eo({gl:o,texDimensions:a});xo({gl:o,positionTex:i,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return xe(()=>e()),[]}let Fo=class extends pe{constructor(e){super(),he(this,e,Ro,wo,_e,{})}};const Do=`attribute float id;
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
`,Uo=`precision mediump float;
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
`;let Xe,qe,Nt,Ot;const yo=(t,e)=>{const{ids:o,colors:n}=e;qe=de(t,[Do,Uo]),Xe={idAttributeLocation:t.getAttribLocation(qe,"id"),colorAttributeLocation:t.getAttribLocation(qe,"color"),texDimensionsUniformLocation:t.getUniformLocation(qe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(qe,"u_resolution")},Nt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Nt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Ot=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ot),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Lo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t,a=1,s=e.FLOAT,i=!1,c=0,l=0;re(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Nt),e.vertexAttribPointer(Xe.idAttributeLocation,a,s,i,c,l),e.enableVertexAttribArray(Xe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Ot),e.vertexAttribPointer(Xe.colorAttributeLocation,a,s,i,c,l),e.enableVertexAttribArray(Xe.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(qe),e.uniform2f(Xe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Xe.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,r.length)};function Po(t,e){const o=t.width*t.height,n=new Array(o).fill(0).map((s,i)=>i),r=new Array(o).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:c,y:l}=Bo(e,20);return[c,l,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:r}}const Bo=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,r=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:r,y:a}},So=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Io=`precision highp float;

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

`;let ze,ke,Xt,vt,Bt,tn,nn,ut,bt,Tt;const Co=(t,e)=>{const{positions:o,texDimensions:n}=e;return ke=de(t,[So,Io]),ze={positionAttributeLocation:t.getAttribLocation(ke,"position"),positionTexLocation:t.getUniformLocation(ke,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(ke,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ke,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ke,"u_resolution")},Xt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Xt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),vt=Te(t,new Float32Array(o),n.width,n.height),Bt=Te(t,null,n.width,n.height),tn=ge(t,vt),nn=ge(t,Bt),ut={fb:tn,tex:vt},bt={fb:nn,tex:Bt},vt},Mo=t=>{const{gl:e,texDimensions:o}=t,n=Date.now();Tt||(Tt=n-1);const r=n-Tt;Tt=n,e.bindFramebuffer(e.FRAMEBUFFER,bt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Xt),e.enableVertexAttribArray(ze.positionAttributeLocation),e.vertexAttribPointer(ze.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ut.tex),e.useProgram(ke),e.uniform1i(ze.positionTexLocation,0),e.uniform1f(ze.deltaTimeUniformLocation,r),e.uniform2f(ze.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ze.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=ut;ut=bt,bt=a}return ut.tex};function No(t){let e,o,n,r,a,s,i,c,l,m,_=t[2]?"Play":"Pause",b,h,v,$=t[1]?"Normal Speed":"Slow Mo",F,T,U,M,Y=t[4].width*t[4].height+"",d,y,u,L,te,N,K,Q;return{c(){e=E("p"),o=I("Same principle with a shader to update positions and a shader to draw particles."),n=P(),r=E("p"),a=I(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=P(),i=E("canvas"),c=P(),l=E("div"),m=E("button"),b=I(_),h=P(),v=E("button"),F=I($),T=P(),U=E("span"),M=I("particles: "),d=I(Y),y=P(),u=E("label"),L=I("Smooth steps"),te=P(),N=E("input"),this.h()},l(S){e=w(S,"P",{});var O=D(e);o=C(O,"Same principle with a shader to update positions and a shader to draw particles."),O.forEach(f),n=B(S),r=w(S,"P",{});var H=D(r);a=C(H,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),H.forEach(f),s=B(S),i=w(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(i).forEach(f),c=B(S),l=w(S,"DIV",{});var j=D(l);m=w(j,"BUTTON",{});var fe=D(m);b=C(fe,_),fe.forEach(f),h=B(j),v=w(j,"BUTTON",{});var R=D(v);F=C(R,$),R.forEach(f),T=B(j),U=w(j,"SPAN",{});var J=D(U);M=C(J,"particles: "),d=C(J,Y),J.forEach(f),y=B(j),u=w(j,"LABEL",{for:!0});var ee=D(u);L=C(ee,"Smooth steps"),ee.forEach(f),te=B(j),N=w(j,"INPUT",{type:!0,min:!0}),j.forEach(f),this.h()},h(){A(i,"id","canvas"),Pe(i,"background-color","black"),A(i,"width",t[3].width),A(i,"height",t[3].height),A(u,"for","steps"),A(N,"type","number"),A(N,"min",0)},m(S,O){x(S,e,O),p(e,o),x(S,n,O),x(S,r,O),p(r,a),x(S,s,O),x(S,i,O),x(S,c,O),x(S,l,O),p(l,m),p(m,b),p(l,h),p(l,v),p(v,F),p(l,T),p(l,U),p(U,M),p(U,d),p(l,y),p(l,u),p(u,L),p(l,te),p(l,N),ae(N,t[0]),K||(Q=[se(m,"click",t[5]),se(v,"click",t[6]),se(N,"input",t[7])],K=!0)},p(S,[O]){O&4&&_!==(_=S[2]?"Play":"Pause")&&Ke(b,_),O&2&&$!==($=S[1]?"Normal Speed":"Slow Mo")&&Ke(F,$),O&1&&le(N.value)!==S[0]&&ae(N,S[0])},i:Z,o:Z,d(S){S&&f(e),S&&f(n),S&&f(r),S&&f(s),S&&f(i),S&&f(c),S&&f(l),K=!1,jt(Q)}}}function Oo(t,e,o){const n={width:800,height:600},r={width:100,height:100};let a=1,s=!1,i=!0;function c(){const b=Ut();re(b.canvas);const{ids:h,positions:v,colors:$}=Po(r,{width:n.width,height:n.height});yo(b,{ids:h,colors:$,texDimensions:r});let F=Co(b,{positions:v,texDimensions:r});function T(){if(re(b.canvas),!i)for(let U=0;U<a;U++)F=Mo({gl:b,texDimensions:r});return Lo({gl:b,positionTex:F,textureDimension:r,ids:h}),i?requestAnimationFrame(T):s?setTimeout(()=>requestAnimationFrame(T),1e3):requestAnimationFrame(T)}requestAnimationFrame(T)}xe(()=>c());const l=()=>o(2,i=!i),m=()=>o(1,s=!s);function _(){a=le(this.value),o(0,a)}return[a,s,i,n,r,l,m,_]}class Xo extends pe{constructor(e){super(),he(this,e,Oo,No,_e,{})}}const zo=`attribute float id;
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
`,ko=`precision mediump float;
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
`;let Ye,He,zt,kt;const Yo=(t,e)=>{const{ids:o,colors:n}=e;He=de(t,[zo,ko]),Ye={idAttributeLocation:t.getAttribLocation(He,"id"),colorAttributeLocation:t.getAttribLocation(He,"color"),texDimensionsUniformLocation:t.getUniformLocation(He,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(He,"u_resolution")},zt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,zt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),kt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,kt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Vo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t,a=1,s=e.FLOAT,i=!1,c=0,l=0;re(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,zt),e.vertexAttribPointer(Ye.idAttributeLocation,a,s,i,c,l),e.enableVertexAttribArray(Ye.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,kt),e.vertexAttribPointer(Ye.colorAttributeLocation,a,s,i,c,l),e.enableVertexAttribArray(Ye.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(He),e.uniform2f(Ye.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ye.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,r.length)};function Wo(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,r=e.width*e.height,a=new Array(r).fill(0).map((c,l)=>l),s=new Array(r).fill(0).map(c=>Math.floor(Math.random()*4)),i=a.map(c=>{if(n==="disk"){const{x:m,y:_}=qo(o,20);return[m,_,0,0]}if(n==="square"){const{x:m,y:_}=Go(o,550);return[m,_,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=Ho(o,c,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=on(o,c,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=on(o,c,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:i,texDimensions:e,colors:s}}const Go=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},qo=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,r=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:r,y:a}},Ho=(t,e,o)=>{const n=Yt(e,0,o,0,t.width,!1),r=Yt(e,0,o,0,t.height,!1);return{x:n,y:r}},on=(t,e,o,n)=>{const r=Yt(e,0,o,0,1,!0)*2*Math.PI,a=n.x,i=Math.cos(a*r)*200+t.width/2,c=n.y,m=Math.sin(c*r)*200+t.height/2;return{x:i,y:m}},Yt=function(t,e,o,n,r,a){const s=(t-e)/(o-e)*(r-n)+n;return a?n<r?rn(s,n,r):rn(s,r,n):s},rn=function(t,e,o){return Math.max(Math.min(t,o),e)},jo=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Ko=`precision highp float;

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

`;let De,Ue,Vt,xt,St,an,sn,mt,gt;const Qo=(t,e)=>{const{positions:o,texDimensions:n}=e;return Ue=de(t,[jo,Ko]),De={positionAttributeLocation:t.getAttribLocation(Ue,"position"),positionTexLocation:t.getUniformLocation(Ue,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ue,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ue,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ue,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ue,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ue,"u_resolution")},Vt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Vt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),xt=Te(t,new Float32Array(o),n.width,n.height),St=Te(t,null,n.width,n.height),an=ge(t,xt),sn=ge(t,St),mt={fb:an,tex:xt},gt={fb:sn,tex:St},xt},Jo=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:r,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,gt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Vt),e.enableVertexAttribArray(De.positionAttributeLocation),e.vertexAttribPointer(De.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,mt.tex),e.useProgram(Ue),e.uniform1i(De.positionTexLocation,0),e.uniform1f(De.dragUniformLocation,r),e.uniform1f(De.interactionRangeUniformLocation,n),e.uniform1f(De.deltaTimeUniformLocation,a),e.uniform2f(De.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(De.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=mt;mt=gt,gt=s}return mt.tex};function Zo(t){let e,o,n,r,a,s,i,c,l,m,_=t[2]?"Play":"Pause",b,h,v,$=t[1]?"Normal Speed":"Slow Mo",F,T,U,M,Y=t[5].width*t[5].height+"",d,y,u,L,te,N,K,Q,S,O,H,j,fe,R,J,ee,ue,$e,Be,ne,Se,me,ve,Ie,Ce,oe,Me,Ee,Ne,Qe;return{c(){e=E("p"),o=I("Same principle with a shader to update positions and a shader to draw particles."),n=P(),r=E("p"),a=I(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=P(),i=E("canvas"),c=P(),l=E("div"),m=E("button"),b=I(_),h=P(),v=E("button"),F=I($),T=P(),U=E("span"),M=I("particles: "),d=I(Y),y=P(),u=E("label"),L=I("Smooth steps"),te=P(),N=E("input"),K=P(),Q=E("div"),S=E("ul"),O=E("li"),H=E("label"),j=I("Interaction Range"),fe=P(),R=E("input"),J=P(),ee=E("li"),ue=E("label"),$e=I("Drag"),Be=P(),ne=E("input"),Se=P(),me=E("li"),ve=E("label"),Ie=I("Time step"),Ce=P(),oe=E("input"),Me=P(),Ee=E("ul"),this.h()},l(g){e=w(g,"P",{});var X=D(e);o=C(X,"Same principle with a shader to update positions and a shader to draw particles."),X.forEach(f),n=B(g),r=w(g,"P",{});var Je=D(r);a=C(Je,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Je.forEach(f),s=B(g),i=w(g,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(i).forEach(f),c=B(g),l=w(g,"DIV",{});var ie=D(l);m=w(ie,"BUTTON",{});var Ze=D(m);b=C(Ze,_),Ze.forEach(f),h=B(ie),v=w(ie,"BUTTON",{});var et=D(v);F=C(et,$),et.forEach(f),T=B(ie),U=w(ie,"SPAN",{});var Oe=D(U);M=C(Oe,"particles: "),d=C(Oe,Y),Oe.forEach(f),y=B(ie),u=w(ie,"LABEL",{for:!0});var tt=D(u);L=C(tt,"Smooth steps"),tt.forEach(f),te=B(ie),N=w(ie,"INPUT",{type:!0,min:!0}),ie.forEach(f),K=B(g),Q=w(g,"DIV",{});var nt=D(Q);S=w(nt,"UL",{});var ce=D(S);O=w(ce,"LI",{});var we=D(O);H=w(we,"LABEL",{for:!0});var ot=D(H);j=C(ot,"Interaction Range"),ot.forEach(f),fe=B(we),R=w(we,"INPUT",{id:!0,type:!0,min:!0}),we.forEach(f),J=B(ce),ee=w(ce,"LI",{});var Re=D(ee);ue=w(Re,"LABEL",{for:!0});var it=D(ue);$e=C(it,"Drag"),it.forEach(f),Be=B(Re),ne=w(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(f),Se=B(ce),me=w(ce,"LI",{});var Fe=D(me);ve=w(Fe,"LABEL",{for:!0});var rt=D(ve);Ie=C(rt,"Time step"),rt.forEach(f),Ce=B(Fe),oe=w(Fe,"INPUT",{id:!0,type:!0,min:!0}),Fe.forEach(f),Me=B(ce),Ee=w(ce,"UL",{}),D(Ee).forEach(f),ce.forEach(f),nt.forEach(f),this.h()},h(){A(i,"id","canvas"),Pe(i,"background-color","black"),A(i,"width",t[4].width),A(i,"height",t[4].height),A(u,"for","steps"),A(N,"type","number"),A(N,"min",0),A(H,"for","interactionRange"),A(R,"id","interactionRange"),A(R,"type","number"),A(R,"min",0),A(ue,"for","drag"),A(ne,"id","drag"),A(ne,"type","number"),A(ne,"min",0),A(ve,"for","deltaTime"),A(oe,"id","deltaTime"),A(oe,"type","number"),A(oe,"min",0)},m(g,X){x(g,e,X),p(e,o),x(g,n,X),x(g,r,X),p(r,a),x(g,s,X),x(g,i,X),x(g,c,X),x(g,l,X),p(l,m),p(m,b),p(l,h),p(l,v),p(v,F),p(l,T),p(l,U),p(U,M),p(U,d),p(l,y),p(l,u),p(u,L),p(l,te),p(l,N),ae(N,t[0]),x(g,K,X),x(g,Q,X),p(Q,S),p(S,O),p(O,H),p(H,j),p(O,fe),p(O,R),ae(R,t[3].interactionRange),p(S,J),p(S,ee),p(ee,ue),p(ue,$e),p(ee,Be),p(ee,ne),ae(ne,t[3].drag),p(S,Se),p(S,me),p(me,ve),p(ve,Ie),p(me,Ce),p(me,oe),ae(oe,t[3].timeStep),p(S,Me),p(S,Ee),Ne||(Qe=[se(m,"click",t[6]),se(v,"click",t[7]),se(N,"input",t[8]),se(R,"input",t[9]),se(ne,"input",t[10]),se(oe,"input",t[11])],Ne=!0)},p(g,[X]){X&4&&_!==(_=g[2]?"Play":"Pause")&&Ke(b,_),X&2&&$!==($=g[1]?"Normal Speed":"Slow Mo")&&Ke(F,$),X&1&&le(N.value)!==g[0]&&ae(N,g[0]),X&8&&le(R.value)!==g[3].interactionRange&&ae(R,g[3].interactionRange),X&8&&le(ne.value)!==g[3].drag&&ae(ne,g[3].drag),X&8&&le(oe.value)!==g[3].timeStep&&ae(oe,g[3].timeStep)},i:Z,o:Z,d(g){g&&f(e),g&&f(n),g&&f(r),g&&f(s),g&&f(i),g&&f(c),g&&f(l),g&&f(K),g&&f(Q),Ne=!1,jt(Qe)}}}function ei(t,e,o){const n={width:800,height:600},r={width:10,height:10};let a=1,s=!1,i=!0;const c={interactionRange:70,drag:1e3,timeStep:10};function l(){const F=Ut();re(F.canvas);const{ids:T,positions:U,colors:M}=Wo({texDimensions:r,screenDimensions:{width:n.width,height:n.height},mode:"circle"});Yo(F,{ids:T,colors:M,texDimensions:r});let Y=Qo(F,{positions:U,texDimensions:r});function d(){if(re(F.canvas),!i)for(let y=0;y<a;y++)Y=Jo({gl:F,texDimensions:r,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Vo({gl:F,positionTex:Y,textureDimension:r,ids:T}),i?requestAnimationFrame(d):s?setTimeout(()=>requestAnimationFrame(d),1e3):requestAnimationFrame(d)}requestAnimationFrame(d)}xe(()=>l());const m=()=>o(2,i=!i),_=()=>o(1,s=!s);function b(){a=le(this.value),o(0,a)}function h(){c.interactionRange=le(this.value),o(3,c)}function v(){c.drag=le(this.value),o(3,c)}function $(){c.timeStep=le(this.value),o(3,c)}return[a,s,i,c,n,r,m,_,b,h,v,$]}class ti extends pe{constructor(e){super(),he(this,e,ei,Zo,_e,{})}}const ni=`attribute float id;
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
`,oi=`precision mediump float;
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
`;let Ve,je,Wt,Gt;const ii=(t,e)=>{const{ids:o,colors:n}=e;je=de(t,[ni,oi]),Ve={idAttributeLocation:t.getAttribLocation(je,"id"),colorAttributeLocation:t.getAttribLocation(je,"color"),texDimensionsUniformLocation:t.getUniformLocation(je,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(je,"u_resolution")},Wt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Wt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),Gt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Gt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},ri=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:r}=t,a=1,s=e.FLOAT,i=!1,c=0,l=0;re(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Wt),e.vertexAttribPointer(Ve.idAttributeLocation,a,s,i,c,l),e.enableVertexAttribArray(Ve.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,Gt),e.vertexAttribPointer(Ve.colorAttributeLocation,a,s,i,c,l),e.enableVertexAttribArray(Ve.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(je),e.uniform2f(Ve.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ve.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,r.length)};function ai(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,r=e.width*e.height,a=new Array(r).fill(0).map((c,l)=>l),s=new Array(r).fill(0).map(c=>Math.floor(Math.random()*4)),i=a.map(c=>{if(n==="disk"){const{x:m,y:_}=li(o,20);return[m,_,0,0]}if(n==="square"){const{x:m,y:_}=si(o,550);return[m,_,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=ci(o,c,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=ln(o,c,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=ln(o,c,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:i,texDimensions:e,colors:s}}const si=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},li=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,r=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:r,y:a}},ci=(t,e,o)=>{const n=qt(e,0,o,0,t.width,!1),r=qt(e,0,o,0,t.height,!1);return{x:n,y:r}},ln=(t,e,o,n)=>{const r=qt(e,0,o,0,1,!0)*2*Math.PI,a=n.x,i=Math.cos(a*r)*200+t.width/2,c=n.y,m=Math.sin(c*r)*200+t.height/2;return{x:i,y:m}},qt=function(t,e,o,n,r,a){const s=(t-e)/(o-e)*(r-n)+n;return a?n<r?cn(s,n,r):cn(s,r,n):s},cn=function(t,e,o){return Math.max(Math.min(t,o),e)},fi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ui=`precision highp float;

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

`;let ye,Le,Ht,$t,It,fn,un,dt,Et;const mi=(t,e)=>{const{positions:o,texDimensions:n}=e;return Le=de(t,[fi,ui]),ye={positionAttributeLocation:t.getAttribLocation(Le,"position"),positionTexLocation:t.getUniformLocation(Le,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Le,"interactionRange"),dragUniformLocation:t.getUniformLocation(Le,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Le,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Le,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Le,"u_resolution")},Ht=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ht),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),$t=Te(t,new Float32Array(o),n.width,n.height),It=Te(t,null,n.width,n.height),fn=ge(t,$t),un=ge(t,It),dt={fb:fn,tex:$t},Et={fb:un,tex:It},$t},di=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:r,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Et.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Ht),e.enableVertexAttribArray(ye.positionAttributeLocation),e.vertexAttribPointer(ye.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,dt.tex),e.useProgram(Le),e.uniform1i(ye.positionTexLocation,0),e.uniform1f(ye.dragUniformLocation,r),e.uniform1f(ye.interactionRangeUniformLocation,n),e.uniform1f(ye.deltaTimeUniformLocation,a),e.uniform2f(ye.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ye.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=dt;dt=Et,Et=s}return dt.tex};function pi(t){let e,o,n,r,a,s,i,c,l,m,_=t[2]?"Play":"Pause",b,h,v,$=t[1]?"Normal Speed":"Slow Mo",F,T,U,M,Y=t[5].width*t[5].height+"",d,y,u,L,te,N,K,Q,S,O,H,j,fe,R,J,ee,ue,$e,Be,ne,Se,me,ve,Ie,Ce,oe,Me,Ee,Ne,Qe;return{c(){e=E("p"),o=I("Same principle with a shader to update positions and a shader to draw particles."),n=P(),r=E("p"),a=I(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=P(),i=E("canvas"),c=P(),l=E("div"),m=E("button"),b=I(_),h=P(),v=E("button"),F=I($),T=P(),U=E("span"),M=I("particles: "),d=I(Y),y=P(),u=E("label"),L=I("Smooth steps"),te=P(),N=E("input"),K=P(),Q=E("div"),S=E("ul"),O=E("li"),H=E("label"),j=I("Interaction Range"),fe=P(),R=E("input"),J=P(),ee=E("li"),ue=E("label"),$e=I("Drag"),Be=P(),ne=E("input"),Se=P(),me=E("li"),ve=E("label"),Ie=I("Time step"),Ce=P(),oe=E("input"),Me=P(),Ee=E("ul"),this.h()},l(g){e=w(g,"P",{});var X=D(e);o=C(X,"Same principle with a shader to update positions and a shader to draw particles."),X.forEach(f),n=B(g),r=w(g,"P",{});var Je=D(r);a=C(Je,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),Je.forEach(f),s=B(g),i=w(g,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),D(i).forEach(f),c=B(g),l=w(g,"DIV",{});var ie=D(l);m=w(ie,"BUTTON",{});var Ze=D(m);b=C(Ze,_),Ze.forEach(f),h=B(ie),v=w(ie,"BUTTON",{});var et=D(v);F=C(et,$),et.forEach(f),T=B(ie),U=w(ie,"SPAN",{});var Oe=D(U);M=C(Oe,"particles: "),d=C(Oe,Y),Oe.forEach(f),y=B(ie),u=w(ie,"LABEL",{for:!0});var tt=D(u);L=C(tt,"Smooth steps"),tt.forEach(f),te=B(ie),N=w(ie,"INPUT",{type:!0,min:!0}),ie.forEach(f),K=B(g),Q=w(g,"DIV",{});var nt=D(Q);S=w(nt,"UL",{});var ce=D(S);O=w(ce,"LI",{});var we=D(O);H=w(we,"LABEL",{for:!0});var ot=D(H);j=C(ot,"Interaction Range"),ot.forEach(f),fe=B(we),R=w(we,"INPUT",{id:!0,type:!0,min:!0}),we.forEach(f),J=B(ce),ee=w(ce,"LI",{});var Re=D(ee);ue=w(Re,"LABEL",{for:!0});var it=D(ue);$e=C(it,"Drag"),it.forEach(f),Be=B(Re),ne=w(Re,"INPUT",{id:!0,type:!0,min:!0}),Re.forEach(f),Se=B(ce),me=w(ce,"LI",{});var Fe=D(me);ve=w(Fe,"LABEL",{for:!0});var rt=D(ve);Ie=C(rt,"Time step"),rt.forEach(f),Ce=B(Fe),oe=w(Fe,"INPUT",{id:!0,type:!0,min:!0}),Fe.forEach(f),Me=B(ce),Ee=w(ce,"UL",{}),D(Ee).forEach(f),ce.forEach(f),nt.forEach(f),this.h()},h(){A(i,"id","canvas"),Pe(i,"background-color","black"),A(i,"width",t[4].width),A(i,"height",t[4].height),A(u,"for","steps"),A(N,"type","number"),A(N,"min",0),A(H,"for","interactionRange"),A(R,"id","interactionRange"),A(R,"type","number"),A(R,"min",0),A(ue,"for","drag"),A(ne,"id","drag"),A(ne,"type","number"),A(ne,"min",0),A(ve,"for","deltaTime"),A(oe,"id","deltaTime"),A(oe,"type","number"),A(oe,"min",0)},m(g,X){x(g,e,X),p(e,o),x(g,n,X),x(g,r,X),p(r,a),x(g,s,X),x(g,i,X),x(g,c,X),x(g,l,X),p(l,m),p(m,b),p(l,h),p(l,v),p(v,F),p(l,T),p(l,U),p(U,M),p(U,d),p(l,y),p(l,u),p(u,L),p(l,te),p(l,N),ae(N,t[0]),x(g,K,X),x(g,Q,X),p(Q,S),p(S,O),p(O,H),p(H,j),p(O,fe),p(O,R),ae(R,t[3].interactionRange),p(S,J),p(S,ee),p(ee,ue),p(ue,$e),p(ee,Be),p(ee,ne),ae(ne,t[3].drag),p(S,Se),p(S,me),p(me,ve),p(ve,Ie),p(me,Ce),p(me,oe),ae(oe,t[3].timeStep),p(S,Me),p(S,Ee),Ne||(Qe=[se(m,"click",t[6]),se(v,"click",t[7]),se(N,"input",t[8]),se(R,"input",t[9]),se(ne,"input",t[10]),se(oe,"input",t[11])],Ne=!0)},p(g,[X]){X&4&&_!==(_=g[2]?"Play":"Pause")&&Ke(b,_),X&2&&$!==($=g[1]?"Normal Speed":"Slow Mo")&&Ke(F,$),X&1&&le(N.value)!==g[0]&&ae(N,g[0]),X&8&&le(R.value)!==g[3].interactionRange&&ae(R,g[3].interactionRange),X&8&&le(ne.value)!==g[3].drag&&ae(ne,g[3].drag),X&8&&le(oe.value)!==g[3].timeStep&&ae(oe,g[3].timeStep)},i:Z,o:Z,d(g){g&&f(e),g&&f(n),g&&f(r),g&&f(s),g&&f(i),g&&f(c),g&&f(l),g&&f(K),g&&f(Q),Ne=!1,jt(Qe)}}}function hi(t,e,o){const n={width:800,height:600},r={width:10,height:10};let a=1,s=!1,i=!0;const c={interactionRange:70,drag:1e3,timeStep:10};function l(){const F=Ut();re(F.canvas);const{ids:T,positions:U,colors:M}=ai({texDimensions:r,screenDimensions:{width:n.width,height:n.height},mode:"circle"});ii(F,{ids:T,colors:M,texDimensions:r});let Y=mi(F,{positions:U,texDimensions:r});function d(){if(re(F.canvas),!i)for(let y=0;y<a;y++)Y=di({gl:F,texDimensions:r,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return ri({gl:F,positionTex:Y,textureDimension:r,ids:T}),i?requestAnimationFrame(d):s?setTimeout(()=>requestAnimationFrame(d),1e3):requestAnimationFrame(d)}requestAnimationFrame(d)}xe(()=>l());const m=()=>o(2,i=!i),_=()=>o(1,s=!s);function b(){a=le(this.value),o(0,a)}function h(){c.interactionRange=le(this.value),o(3,c)}function v(){c.drag=le(this.value),o(3,c)}function $(){c.timeStep=le(this.value),o(3,c)}return[a,s,i,c,n,r,m,_,b,h,v,$]}class _i extends pe{constructor(e){super(),he(this,e,hi,pi,_e,{})}}function vi(t){let e;return{c(){e=I("About")},l(o){e=C(o,"About")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Ti(t){let e;return{c(){e=I("Test 1")},l(o){e=C(o,"Test 1")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function xi(t){let e;return{c(){e=I("Test 2")},l(o){e=C(o,"Test 2")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function $i(t){let e;return{c(){e=I("Test 3")},l(o){e=C(o,"Test 3")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Ai(t){let e;return{c(){e=I("Test 4")},l(o){e=C(o,"Test 4")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function bi(t){let e;return{c(){e=I("Test 5")},l(o){e=C(o,"Test 5")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function gi(t){let e;return{c(){e=I("Test 6")},l(o){e=C(o,"Test 6")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Ei(t){let e;return{c(){e=I("Test 7")},l(o){e=C(o,"Test 7")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function wi(t){let e;return{c(){e=I("Test 8")},l(o){e=C(o,"Test 8")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Ri(t){let e;return{c(){e=I("Test 9")},l(o){e=C(o,"Test 9")},m(o,n){x(o,e,n)},d(o){o&&f(e)}}}function Fi(t){let e,o,n,r,a,s,i,c,l,m,_,b,h,v,$,F,T,U,M,Y;return e=new Ae({props:{$$slots:{default:[vi]},$$scope:{ctx:t}}}),n=new Ae({props:{$$slots:{default:[Ti]},$$scope:{ctx:t}}}),a=new Ae({props:{$$slots:{default:[xi]},$$scope:{ctx:t}}}),i=new Ae({props:{$$slots:{default:[$i]},$$scope:{ctx:t}}}),l=new Ae({props:{$$slots:{default:[Ai]},$$scope:{ctx:t}}}),_=new Ae({props:{$$slots:{default:[bi]},$$scope:{ctx:t}}}),h=new Ae({props:{$$slots:{default:[gi]},$$scope:{ctx:t}}}),$=new Ae({props:{$$slots:{default:[Ei]},$$scope:{ctx:t}}}),T=new Ae({props:{$$slots:{default:[wi]},$$scope:{ctx:t}}}),M=new Ae({props:{$$slots:{default:[Ri]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment),o=P(),V(n.$$.fragment),r=P(),V(a.$$.fragment),s=P(),V(i.$$.fragment),c=P(),V(l.$$.fragment),m=P(),V(_.$$.fragment),b=P(),V(h.$$.fragment),v=P(),V($.$$.fragment),F=P(),V(T.$$.fragment),U=P(),V(M.$$.fragment)},l(d){W(e.$$.fragment,d),o=B(d),W(n.$$.fragment,d),r=B(d),W(a.$$.fragment,d),s=B(d),W(i.$$.fragment,d),c=B(d),W(l.$$.fragment,d),m=B(d),W(_.$$.fragment,d),b=B(d),W(h.$$.fragment,d),v=B(d),W($.$$.fragment,d),F=B(d),W(T.$$.fragment,d),U=B(d),W(M.$$.fragment,d)},m(d,y){G(e,d,y),x(d,o,y),G(n,d,y),x(d,r,y),G(a,d,y),x(d,s,y),G(i,d,y),x(d,c,y),G(l,d,y),x(d,m,y),G(_,d,y),x(d,b,y),G(h,d,y),x(d,v,y),G($,d,y),x(d,F,y),G(T,d,y),x(d,U,y),G(M,d,y),Y=!0},p(d,y){const u={};y&1&&(u.$$scope={dirty:y,ctx:d}),e.$set(u);const L={};y&1&&(L.$$scope={dirty:y,ctx:d}),n.$set(L);const te={};y&1&&(te.$$scope={dirty:y,ctx:d}),a.$set(te);const N={};y&1&&(N.$$scope={dirty:y,ctx:d}),i.$set(N);const K={};y&1&&(K.$$scope={dirty:y,ctx:d}),l.$set(K);const Q={};y&1&&(Q.$$scope={dirty:y,ctx:d}),_.$set(Q);const S={};y&1&&(S.$$scope={dirty:y,ctx:d}),h.$set(S);const O={};y&1&&(O.$$scope={dirty:y,ctx:d}),$.$set(O);const H={};y&1&&(H.$$scope={dirty:y,ctx:d}),T.$set(H);const j={};y&1&&(j.$$scope={dirty:y,ctx:d}),M.$set(j)},i(d){Y||(z(e.$$.fragment,d),z(n.$$.fragment,d),z(a.$$.fragment,d),z(i.$$.fragment,d),z(l.$$.fragment,d),z(_.$$.fragment,d),z(h.$$.fragment,d),z($.$$.fragment,d),z(T.$$.fragment,d),z(M.$$.fragment,d),Y=!0)},o(d){k(e.$$.fragment,d),k(n.$$.fragment,d),k(a.$$.fragment,d),k(i.$$.fragment,d),k(l.$$.fragment,d),k(_.$$.fragment,d),k(h.$$.fragment,d),k($.$$.fragment,d),k(T.$$.fragment,d),k(M.$$.fragment,d),Y=!1},d(d){q(e,d),d&&f(o),q(n,d),d&&f(r),q(a,d),d&&f(s),q(i,d),d&&f(c),q(l,d),d&&f(m),q(_,d),d&&f(b),q(h,d),d&&f(v),q($,d),d&&f(F),q(T,d),d&&f(U),q(M,d)}}}function Di(t){let e,o;return{c(){e=E("p"),o=I("This page is an experiment to run simulation on the GPU.")},l(n){e=w(n,"P",{});var r=D(e);o=C(r,"This page is an experiment to run simulation on the GPU."),r.forEach(f)},m(n,r){x(n,e,r),p(e,o)},p:Z,d(n){n&&f(e)}}}function Ui(t){let e,o;return e=new Vn({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function yi(t){let e,o;return e=new Hn({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Li(t){let e,o;return e=new no({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Pi(t){let e,o;return e=new so({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Bi(t){let e,o;return e=new ho({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Si(t){let e,o;return e=new Fo({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Ii(t){let e,o;return e=new Xo({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Ci(t){let e,o;return e=new ti({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Mi(t){let e,o;return e=new _i({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function Ni(t){let e,o,n,r,a,s,i,c,l,m,_,b,h,v,$,F,T,U,M,Y,d,y;return e=new In({props:{$$slots:{default:[Fi]},$$scope:{ctx:t}}}),n=new be({props:{$$slots:{default:[Di]},$$scope:{ctx:t}}}),a=new be({props:{$$slots:{default:[Ui]},$$scope:{ctx:t}}}),i=new be({props:{$$slots:{default:[yi]},$$scope:{ctx:t}}}),l=new be({props:{$$slots:{default:[Li]},$$scope:{ctx:t}}}),_=new be({props:{$$slots:{default:[Pi]},$$scope:{ctx:t}}}),h=new be({props:{$$slots:{default:[Bi]},$$scope:{ctx:t}}}),$=new be({props:{$$slots:{default:[Si]},$$scope:{ctx:t}}}),T=new be({props:{$$slots:{default:[Ii]},$$scope:{ctx:t}}}),M=new be({props:{$$slots:{default:[Ci]},$$scope:{ctx:t}}}),d=new be({props:{$$slots:{default:[Mi]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment),o=P(),V(n.$$.fragment),r=P(),V(a.$$.fragment),s=P(),V(i.$$.fragment),c=P(),V(l.$$.fragment),m=P(),V(_.$$.fragment),b=P(),V(h.$$.fragment),v=P(),V($.$$.fragment),F=P(),V(T.$$.fragment),U=P(),V(M.$$.fragment),Y=P(),V(d.$$.fragment)},l(u){W(e.$$.fragment,u),o=B(u),W(n.$$.fragment,u),r=B(u),W(a.$$.fragment,u),s=B(u),W(i.$$.fragment,u),c=B(u),W(l.$$.fragment,u),m=B(u),W(_.$$.fragment,u),b=B(u),W(h.$$.fragment,u),v=B(u),W($.$$.fragment,u),F=B(u),W(T.$$.fragment,u),U=B(u),W(M.$$.fragment,u),Y=B(u),W(d.$$.fragment,u)},m(u,L){G(e,u,L),x(u,o,L),G(n,u,L),x(u,r,L),G(a,u,L),x(u,s,L),G(i,u,L),x(u,c,L),G(l,u,L),x(u,m,L),G(_,u,L),x(u,b,L),G(h,u,L),x(u,v,L),G($,u,L),x(u,F,L),G(T,u,L),x(u,U,L),G(M,u,L),x(u,Y,L),G(d,u,L),y=!0},p(u,L){const te={};L&1&&(te.$$scope={dirty:L,ctx:u}),e.$set(te);const N={};L&1&&(N.$$scope={dirty:L,ctx:u}),n.$set(N);const K={};L&1&&(K.$$scope={dirty:L,ctx:u}),a.$set(K);const Q={};L&1&&(Q.$$scope={dirty:L,ctx:u}),i.$set(Q);const S={};L&1&&(S.$$scope={dirty:L,ctx:u}),l.$set(S);const O={};L&1&&(O.$$scope={dirty:L,ctx:u}),_.$set(O);const H={};L&1&&(H.$$scope={dirty:L,ctx:u}),h.$set(H);const j={};L&1&&(j.$$scope={dirty:L,ctx:u}),$.$set(j);const fe={};L&1&&(fe.$$scope={dirty:L,ctx:u}),T.$set(fe);const R={};L&1&&(R.$$scope={dirty:L,ctx:u}),M.$set(R);const J={};L&1&&(J.$$scope={dirty:L,ctx:u}),d.$set(J)},i(u){y||(z(e.$$.fragment,u),z(n.$$.fragment,u),z(a.$$.fragment,u),z(i.$$.fragment,u),z(l.$$.fragment,u),z(_.$$.fragment,u),z(h.$$.fragment,u),z($.$$.fragment,u),z(T.$$.fragment,u),z(M.$$.fragment,u),z(d.$$.fragment,u),y=!0)},o(u){k(e.$$.fragment,u),k(n.$$.fragment,u),k(a.$$.fragment,u),k(i.$$.fragment,u),k(l.$$.fragment,u),k(_.$$.fragment,u),k(h.$$.fragment,u),k($.$$.fragment,u),k(T.$$.fragment,u),k(M.$$.fragment,u),k(d.$$.fragment,u),y=!1},d(u){q(e,u),u&&f(o),q(n,u),u&&f(r),q(a,u),u&&f(s),q(i,u),u&&f(c),q(l,u),u&&f(m),q(_,u),u&&f(b),q(h,u),u&&f(v),q($,u),u&&f(F),q(T,u),u&&f(U),q(M,u),u&&f(Y),q(d,u)}}}function Oi(t){let e,o,n;return o=new yn({props:{$$slots:{default:[Ni]},$$scope:{ctx:t}}}),{c(){e=E("div"),V(o.$$.fragment)},l(r){e=w(r,"DIV",{});var a=D(e);W(o.$$.fragment,a),a.forEach(f)},m(r,a){x(r,e,a),G(o,e,null),n=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),o.$set(s)},i(r){n||(z(o.$$.fragment,r),n=!0)},o(r){k(o.$$.fragment,r),n=!1},d(r){r&&f(e),q(o)}}}class Xi extends pe{constructor(e){super(),he(this,e,null,Oi,_e,{})}}function zi(t){let e,o;return e=new Xi({}),{c(){V(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,r){G(e,n,r),o=!0},p:Z,i(n){o||(z(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}class Gi extends pe{constructor(e){super(),he(this,e,null,zi,_e,{})}}export{Gi as default};
