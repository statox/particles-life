import{S as Z,i as ee,s as te,C as ke,k as U,l as y,m as B,h as l,n as R,b as $,K as fe,E as Ve,F as Ye,G as We,f as M,t as N,H as ye,R as Ft,o as se,j as Rt,Q as Dt,T as ft,U as vt,A as Ut,V as yt,g as Pt,d as Lt,q as P,a as S,r as L,c as C,D as E,B as G,p as Te,O as Xe,u as ze,P as Ge,M as Tt,w as X,x as z,y as k,z as V}from"../../../chunks/index-ff9e742a.js";import{w as Pe}from"../../../chunks/index-84a8d4d9.js";let Bt=1;function xt(){return`svelte-tabs-${Bt++}`}function St(t){let e,i,n,r;const s=t[4].default,a=ke(s,t,t[3],null);return{c(){e=U("div"),a&&a.c(),this.h()},l(o){e=y(o,"DIV",{class:!0});var f=B(e);a&&a.l(f),f.forEach(l),this.h()},h(){R(e,"class","svelte-tabs")},m(o,f){$(o,e,f),a&&a.m(e,null),i=!0,n||(r=fe(e,"keydown",t[1]),n=!0)},p(o,[f]){a&&a.p&&(!i||f&8)&&Ve(a,s,o,o[3],i?We(s,o[3],f,null):Ye(o[3]),null)},i(o){i||(M(a,o),i=!0)},o(o){N(a,o),i=!1},d(o){o&&l(e),a&&a.d(o),n=!1,r()}}}const st={};function Ct(t,e,i){const n=t.indexOf(e);t.splice(n,1),i.update(r=>r===e?t[n]||t[t.length-1]:r)}function It(t,e,i){let n,{$$slots:r={},$$scope:s}=e,{initialSelectedIndex:a=0}=e;const o=[],f=[],c=[],p=Pe({}),v=Pe({}),T=Pe(null);ye(t,T,h=>i(5,n=h));const d=Pe(null);function _(h,b,u){h.push(b),u.update(w=>w||b),Dt(()=>Ct(h,b,u))}function x(h){const b=f.indexOf(h);T.set(h),d.set(c[b])}Ft(st,{registerTab(h){_(f,h,T)},registerTabElement(h){o.push(h)},registerPanel(h){_(c,h,d)},selectTab:x,selectedTab:T,selectedPanel:d,controls:p,labeledBy:v}),se(()=>{x(f[a])}),Rt(()=>{for(let h=0;h<f.length;h++)p.update(b=>({...b,[f[h].id]:c[h].id})),v.update(b=>({...b,[c[h].id]:f[h].id}))});async function g(h){if(h.target.classList.contains("svelte-tabs__tab")){let b=f.indexOf(n);switch(h.key){case"ArrowRight":b+=1,b>f.length-1&&(b=0),x(f[b]),o[b].focus();break;case"ArrowLeft":b-=1,b<0&&(b=f.length-1),x(f[b]),o[b].focus()}}}return t.$$set=h=>{"initialSelectedIndex"in h&&i(2,a=h.initialSelectedIndex),"$$scope"in h&&i(3,s=h.$$scope)},[T,g,a,s,r]}class Mt extends Z{constructor(e){super(),ee(this,e,It,St,te,{initialSelectedIndex:2})}}function Nt(t){let e,i,n,r,s,a;const o=t[9].default,f=ke(o,t,t[8],null);return{c(){e=U("li"),f&&f.c(),this.h()},l(c){e=y(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var p=B(e);f&&f.l(p),p.forEach(l),this.h()},h(){R(e,"role","tab"),R(e,"id",t[3].id),R(e,"aria-controls",i=t[2][t[3].id]),R(e,"aria-selected",t[1]),R(e,"tabindex",n=t[1]?0:-1),R(e,"class","svelte-tabs__tab svelte-1fbofsd"),ft(e,"svelte-tabs__selected",t[1])},m(c,p){$(c,e,p),f&&f.m(e,null),t[10](e),r=!0,s||(a=fe(e,"click",t[11]),s=!0)},p(c,[p]){f&&f.p&&(!r||p&256)&&Ve(f,o,c,c[8],r?We(o,c[8],p,null):Ye(c[8]),null),(!r||p&4&&i!==(i=c[2][c[3].id]))&&R(e,"aria-controls",i),(!r||p&2)&&R(e,"aria-selected",c[1]),(!r||p&2&&n!==(n=c[1]?0:-1))&&R(e,"tabindex",n),(!r||p&2)&&ft(e,"svelte-tabs__selected",c[1])},i(c){r||(M(f,c),r=!0)},o(c){N(f,c),r=!1},d(c){c&&l(e),f&&f.d(c),t[10](null),s=!1,a()}}}function Ot(t,e,i){let n,r,{$$slots:s={},$$scope:a}=e,o;const f={id:xt()},{registerTab:c,registerTabElement:p,selectTab:v,selectedTab:T,controls:d}=vt(st);ye(t,T,h=>i(7,n=h)),ye(t,d,h=>i(2,r=h));let _;c(f),se(async()=>{await Ut(),p(o)});function x(h){yt[h?"unshift":"push"](()=>{o=h,i(0,o)})}const g=()=>v(f);return t.$$set=h=>{"$$scope"in h&&i(8,a=h.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&i(1,_=n===f)},[o,_,r,f,v,T,d,n,a,s,x,g]}class ae extends Z{constructor(e){super(),ee(this,e,Ot,Nt,te,{})}}function Xt(t){let e,i;const n=t[1].default,r=ke(n,t,t[0],null);return{c(){e=U("ul"),r&&r.c(),this.h()},l(s){e=y(s,"UL",{role:!0,class:!0});var a=B(e);r&&r.l(a),a.forEach(l),this.h()},h(){R(e,"role","tablist"),R(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,a){$(s,e,a),r&&r.m(e,null),i=!0},p(s,[a]){r&&r.p&&(!i||a&1)&&Ve(r,n,s,s[0],i?We(n,s[0],a,null):Ye(s[0]),null)},i(s){i||(M(r,s),i=!0)},o(s){N(r,s),i=!1},d(s){s&&l(e),r&&r.d(s)}}}function zt(t,e,i){let{$$slots:n={},$$scope:r}=e;return t.$$set=s=>{"$$scope"in s&&i(0,r=s.$$scope)},[r,n]}class kt extends Z{constructor(e){super(),ee(this,e,zt,Xt,te,{})}}function lt(t){let e;const i=t[6].default,n=ke(i,t,t[5],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&32)&&Ve(n,i,r,r[5],e?We(i,r[5],s,null):Ye(r[5]),null)},i(r){e||(M(n,r),e=!0)},o(r){N(n,r),e=!1},d(r){n&&n.d(r)}}}function Vt(t){let e,i,n,r=t[1]===t[2]&&lt(t);return{c(){e=U("div"),r&&r.c(),this.h()},l(s){e=y(s,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=B(e);r&&r.l(a),a.forEach(l),this.h()},h(){R(e,"id",t[2].id),R(e,"aria-labelledby",i=t[0][t[2].id]),R(e,"class","svelte-tabs__tab-panel svelte-epfyet"),R(e,"role","tabpanel")},m(s,a){$(s,e,a),r&&r.m(e,null),n=!0},p(s,[a]){s[1]===s[2]?r?(r.p(s,a),a&2&&M(r,1)):(r=lt(s),r.c(),M(r,1),r.m(e,null)):r&&(Pt(),N(r,1,1,()=>{r=null}),Lt()),(!n||a&1&&i!==(i=s[0][s[2].id]))&&R(e,"aria-labelledby",i)},i(s){n||(M(r),n=!0)},o(s){N(r),n=!1},d(s){s&&l(e),r&&r.d()}}}function Yt(t,e,i){let n,r,{$$slots:s={},$$scope:a}=e;const o={id:xt()},{registerPanel:f,selectedPanel:c,labeledBy:p}=vt(st);return ye(t,c,v=>i(1,r=v)),ye(t,p,v=>i(0,n=v)),f(o),t.$$set=v=>{"$$scope"in v&&i(5,a=v.$$scope)},[n,r,o,c,p,a,s]}class ce extends Z{constructor(e){super(),ee(this,e,Yt,Vt,te,{})}}const Wt=["VERTEX_SHADER","FRAGMENT_SHADER"];function at(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return qe(e),e}function qe(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function re(t,e,i,n){const r=t.createTexture();if(!r)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}function ue(t,e){const i=t.createFramebuffer();if(!i)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),i}function oe(t,e,i,n,r){const s=[];for(let o=0;o<e.length;++o){const f=Wt[o]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,c=Gt(t,e[o],f,r);if(!c)throw"Can not create shader";s.push(c)}const a=qt(t,s,i,n,r);if(!a)throw"Can not create program";return a}function Gt(t,e,i,n){const r=n||console.log,s=t.createShader(i);if(!s)throw"Could not load shader";if(t.shaderSource(s,e),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(s);return r(new Error("*** Error compiling shader '"+s+"':"+o+`
`+e.split(`
`).map((f,c)=>`${c+1}: ${f}`).join(`
`))),t.deleteShader(s),null}return s}function qt(t,e,i,n,r){const s=r||console.log,a=t.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(f){t.attachShader(a,f)}),i&&i.forEach(function(f,c){t.bindAttribLocation(a,n?n[c]:c,f)}),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const f=t.getProgramInfoLog(a);return s("Error in program linking:"+f),t.deleteProgram(a),null}return a}function Q(t,e){e=e||1;const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}function Ht(t){let e,i,n,r,s,a,o,f,c,p,v,T;return{c(){e=U("p"),i=P(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=S(),r=U("p"),s=P(`It is reusing the code from
    `),a=U("a"),o=P(`this site
    `),f=P("."),c=S(),p=U("ul"),v=S(),T=U("canvas"),this.h()},l(d){e=y(d,"P",{});var _=B(e);i=L(_,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),_.forEach(l),n=C(d),r=y(d,"P",{});var x=B(r);s=L(x,`It is reusing the code from
    `),a=y(x,"A",{target:!0,href:!0});var g=B(a);o=L(g,`this site
    `),g.forEach(l),f=L(x,"."),x.forEach(l),c=C(d),p=y(d,"UL",{id:!0}),B(p).forEach(l),v=C(d),T=y(d,"CANVAS",{id:!0}),B(T).forEach(l),this.h()},h(){R(a,"target","none"),R(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),R(p,"id","result"),R(T,"id","canvas")},m(d,_){$(d,e,_),E(e,i),$(d,n,_),$(d,r,_),E(r,s),E(r,a),E(a,o),E(r,f),$(d,c,_),$(d,p,_),$(d,v,_),$(d,T,_)},p:G,i:G,o:G,d(d){d&&l(e),d&&l(n),d&&l(r),d&&l(c),d&&l(p),d&&l(v),d&&l(T)}}}function jt(t){const e=document.createElement("li");e.textContent=t.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Kt(t){function e(){const i=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=3;const o=a.getContext("webgl");if(!o)throw"Coulndt get context";const f=oe(o,[i,n]);if(!f)throw"Could not get program";const c=o.getAttribLocation(f,"position"),p=o.getUniformLocation(f,"srcTex"),v=o.getUniformLocation(f,"srcDimensions"),T=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,T),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),o.STATIC_DRAW),o.enableVertexAttribArray(c),o.vertexAttribPointer(c,2,o.FLOAT,!1,0,0);const d=3,_=3,x=o.createTexture();o.bindTexture(o.TEXTURE_2D,x),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texImage2D(o.TEXTURE_2D,0,o.LUMINANCE,d,_,0,o.LUMINANCE,o.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.useProgram(f),o.uniform1i(p,0),o.uniform2f(v,d,_),o.drawArrays(o.TRIANGLES,0,6);const g=new Uint8Array(3*3*4);o.readPixels(0,0,3,3,o.RGBA,o.UNSIGNED_BYTE,g);for(let h=0;h<3*3;++h)jt(g[h*4])}return se(e),[]}class Qt extends Z{constructor(e){super(),ee(this,e,Kt,Ht,te,{})}}const Jt=Float32Array;function $t(t,e,i,n,r,s){const a=new Jt(16);return a[0]=2/(e-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-i),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(r-s),a[11]=0,a[12]=(t+e)/(t-e),a[13]=(i+n)/(i-n),a[14]=(r+s)/(r-s),a[15]=1,a}function Zt(t){let e,i,n,r,s,a,o;return{c(){e=U("p"),i=P(`This is the simple particles simulation from
    `),n=U("a"),r=P("webglfundamentals"),s=P(" directly copied in a svelte component."),a=S(),o=U("canvas"),this.h()},l(f){e=y(f,"P",{});var c=B(e);i=L(c,`This is the simple particles simulation from
    `),n=y(c,"A",{target:!0,href:!0});var p=B(n);r=L(p,"webglfundamentals"),p.forEach(l),s=L(c," directly copied in a svelte component."),c.forEach(l),a=C(f),o=y(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(o).forEach(l),this.h()},h(){R(n,"target","none"),R(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),R(o,"id","canvas"),Te(o,"background-color","black"),R(o,"width","800"),R(o,"height","600")},m(f,c){$(f,e,c),E(e,i),E(e,n),E(n,r),E(e,s),$(f,a,c),$(f,o,c)},p:G,i:G,o:G,d(f){f&&l(e),f&&l(a),f&&l(o)}}}function en(t){function e(){const i=`
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
  `,s=`
  precision highp float;
  void main() {
    gl_FragColor = vec4(0.4, 0.2, 0.9, 0.5);
  }
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const o=a.getContext("webgl");if(!o)throw"gl undefined";if(!o.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!o.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const p=oe(o,[i,n]),v=oe(o,[r,s]);if(!p||!v)throw"Can not create programs";const T={position:o.getAttribLocation(p,"position"),positionTex:o.getUniformLocation(p,"positionTex"),velocityTex:o.getUniformLocation(p,"velocityTex"),texDimensions:o.getUniformLocation(p,"texDimensions"),canvasDimensions:o.getUniformLocation(p,"canvasDimensions"),deltaTime:o.getUniformLocation(p,"deltaTime")},d={id:o.getAttribLocation(v,"id"),positionTex:o.getUniformLocation(v,"positionTex"),texDimensions:o.getUniformLocation(v,"texDimensions"),matrix:o.getUniformLocation(v,"matrix")},_=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,_),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),o.STATIC_DRAW);const x=300,g=20,h=x*g,b=new Array(h).fill(0).map((D,K)=>K),u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,new Float32Array(b),o.STATIC_DRAW),Q(o.canvas);const w=(D,K)=>(K===void 0&&(K=D,D=0),Math.random()*(K-D)+D),m=new Float32Array(b.map(D=>[w(a.width),w(a.height),0,0]).flat()),F=new Float32Array(b.map(D=>[w(-300,300),w(-300,300),0,0]).flat());function Y(D,K,ie,gt){const ct=D.createTexture();return D.bindTexture(D.TEXTURE_2D,ct),D.texImage2D(D.TEXTURE_2D,0,D.RGBA,ie,gt,0,D.RGBA,D.FLOAT,K),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_S,D.CLAMP_TO_EDGE),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_T,D.CLAMP_TO_EDGE),ct}const q=Y(o,F,x,g),H=Y(o,m,x,g),O=Y(o,null,x,g);if(!H||!O)throw"Can not create position textures";function j(D,K){const ie=D.createFramebuffer();return D.bindFramebuffer(D.FRAMEBUFFER,ie),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,K,0),ie}const J=j(o,H),A=j(o,O);let I={fb:J,tex:H},ne={fb:A,tex:O},W=0;function le(D){if(!o)return;D*=.001;const K=D-W;W=D,Q(o.canvas),o.bindFramebuffer(o.FRAMEBUFFER,ne.fb),o.viewport(0,0,x,g),o.bindBuffer(o.ARRAY_BUFFER,_),o.enableVertexAttribArray(T.position),o.vertexAttribPointer(T.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,I.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,q),o.useProgram(p),o.uniform1i(T.positionTex,0),o.uniform1i(T.velocityTex,1),o.uniform2f(T.texDimensions,x,g),o.uniform2f(T.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(T.deltaTime,K),o.drawArrays(o.TRIANGLES,0,6),o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,u),o.enableVertexAttribArray(d.id),o.vertexAttribPointer(d.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,ne.tex),o.useProgram(v),o.uniform2f(d.texDimensions,x,x),o.uniform1i(d.positionTex,0),o.uniformMatrix4fv(d.matrix,!1,$t(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,h);{const ie=I;I=ne,ne=ie}requestAnimationFrame(le)}requestAnimationFrame(le)}return se(()=>e()),[]}class tn extends Z{constructor(e){super(),ee(this,e,en,Zt,te,{})}}const Le=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function nn(t,e,i,n){const r=t*e,s=new Array(r).fill(0).map((f,c)=>c),a=new Float32Array(s.map(f=>[Le(i),Le(n),0,0]).flat()),o=new Float32Array(s.map(f=>[Le(-300,300),Le(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(s),positions:a,velocities:o}}const on=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,rn=`precision highp float;

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

`,sn=`  attribute float id;
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

`,an=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function cn(t){let e,i,n,r,s,a,o;return{c(){e=U("p"),i=P(`This is the simple particles simulation from
    `),n=U("a"),r=P("webglfundamentals"),s=P(" with the shader code extracted into separate files."),a=S(),o=U("canvas"),this.h()},l(f){e=y(f,"P",{});var c=B(e);i=L(c,`This is the simple particles simulation from
    `),n=y(c,"A",{target:!0,href:!0});var p=B(n);r=L(p,"webglfundamentals"),p.forEach(l),s=L(c," with the shader code extracted into separate files."),c.forEach(l),a=C(f),o=y(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(o).forEach(l),this.h()},h(){R(n,"target","none"),R(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),R(o,"id","canvas"),Te(o,"background-color","black"),R(o,"width","800"),R(o,"height","600")},m(f,c){$(f,e,c),E(e,i),E(e,n),E(n,r),E(e,s),$(f,a,c),$(f,o,c)},p:G,i:G,o:G,d(f){f&&l(e),f&&l(a),f&&l(o)}}}function fn(t){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const s=r.getContext("webgl");if(!s)throw"gl undefined";qe(s);const a=oe(s,[on,rn]),o=oe(s,[sn,an]),f={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},c={id:s.getAttribLocation(o,"id"),positionTex:s.getUniformLocation(o,"positionTex"),texDimensions:s.getUniformLocation(o,"texDimensions"),matrix:s.getUniformLocation(o,"matrix")},p=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,p),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const v=300,T=20,{numParticles:d,ids:_,positions:x,velocities:g}=nn(v,T,r.width,r.height),h=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,h),s.bufferData(s.ARRAY_BUFFER,new Float32Array(_),s.STATIC_DRAW),Q(s.canvas);const b=re(s,g,v,T),u=re(s,x,v,T),w=re(s,null,v,T),m=ue(s,u),F=ue(s,w);let Y={fb:m,tex:u},q={fb:F,tex:w},H=0;function O(j){if(!s||!p||!h)throw"Undefined params to render";j*=.001;const J=j-H;H=j,Q(s.canvas),n(s,q,v,T,p,f,Y,b,a,J),i(s,v,h,c,q,o,d);{const A=Y;Y=q,q=A}requestAnimationFrame(O)}requestAnimationFrame(O)}const i=(r,s,a,o,f,c,p)=>{r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,a),r.enableVertexAttribArray(o.id),r.vertexAttribPointer(o.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,f.tex),r.useProgram(c),r.uniform2f(o.texDimensions,s,s),r.uniform1i(o.positionTex,0),r.uniformMatrix4fv(o.matrix,!1,$t(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,p)},n=(r,s,a,o,f,c,p,v,T,d)=>{r.bindFramebuffer(r.FRAMEBUFFER,s.fb),r.viewport(0,0,a,o),r.bindBuffer(r.ARRAY_BUFFER,f),r.enableVertexAttribArray(c.position),r.vertexAttribPointer(c.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,p.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,v),r.useProgram(T),r.uniform1i(c.positionTex,0),r.uniform1i(c.velocityTex,1),r.uniform2f(c.texDimensions,a,o),r.uniform2f(c.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(c.deltaTime,d),r.drawArrays(r.TRIANGLES,0,6)};return se(()=>e()),[]}class ln extends Z{constructor(e){super(),ee(this,e,fn,cn,te,{})}}const un=`attribute vec2 a_position;

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
`,mn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function dn(t){let e,i,n,r,s,a,o,f,c,p,v,T;return{c(){e=U("p"),i=P(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=U("code"),r=P("requestAnimationFrame"),s=P(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),a=S(),o=U("canvas"),f=S(),c=U("button"),p=P("Add position"),this.h()},l(d){e=y(d,"P",{});var _=B(e);i=L(_,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=y(_,"CODE",{});var x=B(n);r=L(x,"requestAnimationFrame"),x.forEach(l),s=L(_,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),_.forEach(l),a=C(d),o=y(d,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(o).forEach(l),f=C(d),c=y(d,"BUTTON",{});var g=B(c);p=L(g,"Add position"),g.forEach(l),this.h()},h(){R(o,"id","canvas"),Te(o,"background-color","black"),R(o,"width","800"),R(o,"height","600")},m(d,_){$(d,e,_),E(e,i),E(e,n),E(n,r),E(e,s),$(d,a,_),$(d,o,_),$(d,f,_),$(d,c,_),E(c,p),v||(T=fe(c,"click",t[1]),v=!0)},p:G,i:G,o:G,d(d){d&&l(e),d&&l(a),d&&l(o),d&&l(f),d&&l(c),v=!1,T()}}}function pn(t){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const s=document.getElementById("canvas");if(!s)throw"canvas undefined";const a=s.getContext("webgl");if(!a)throw"gl undefined";qe(a);const o=oe(a,[un,mn]);Q(a.canvas);const f=a.getAttribLocation(o,"a_position"),c=a.getUniformLocation(o,"u_resolution"),p=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,p),a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW);function v(){if(!a)throw"Undefined params to render";for(let u=0;u<=e.length-2;u+=2)e[u]=(e[u]+Math.random()*2-1)%a.canvas.width,e[u+1]=(e[u+1]+Math.random()*0+1)%a.canvas.height;a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW),Q(a.canvas),a.viewport(0,0,a.canvas.width,a.canvas.height),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(o),a.uniform2f(c,a.canvas.width,a.canvas.height),a.enableVertexAttribArray(f),a.bindBuffer(a.ARRAY_BUFFER,p);const T=2,d=a.FLOAT,_=!1,x=0,g=0;a.vertexAttribPointer(f,T,d,_,x,g);var h=a.POINTS,b=e.length/2;a.drawArrays(h,g,b),requestAnimationFrame(v)}requestAnimationFrame(v)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return se(()=>i()),[n,()=>n()]}class hn extends Z{constructor(e){super(),ee(this,e,pn,dn,te,{})}}const _n=`attribute float id;
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
`,vn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Ee,we;const Tn=t=>{we=oe(t,[_n,vn]),Ee={idAttributeLocation:t.getAttribLocation(we,"id"),texDimensionsUniformLocation:t.getUniformLocation(we,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(we,"u_resolution")}},xn=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:r}=t;Q(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(we),e.uniform2f(Ee.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Ee.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Ee.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,s);const a=1,o=e.FLOAT,f=!1,c=0,p=0;e.vertexAttribPointer(Ee.idAttributeLocation,a,o,f,c,p);const v=e.POINTS,T=r.length;e.drawArrays(v,p,T)};function $n(t){let e,i,n,r,s,a,o;return{c(){e=U("p"),i=P("Create an array of render-size positions. Store this array in a texture. In each "),n=U("code"),r=P("requestAnimationFrame"),s=P(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),a=S(),o=U("canvas"),this.h()},l(f){e=y(f,"P",{});var c=B(e);i=L(c,"Create an array of render-size positions. Store this array in a texture. In each "),n=y(c,"CODE",{});var p=B(n);r=L(p,"requestAnimationFrame"),p.forEach(l),s=L(c,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),c.forEach(l),a=C(f),o=y(f,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(o).forEach(l),this.h()},h(){R(o,"id","canvas"),Te(o,"background-color","black"),R(o,"width",At),R(o,"height",bt)},m(f,c){$(f,e,c),E(e,i),E(e,n),E(n,r),E(e,s),$(f,a,c),$(f,o,c)},p:G,i:G,o:G,d(f){f&&l(e),f&&l(a),f&&l(o)}}}const At=800,bt=600;function An(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";qe(n),Q(n.canvas),Tn(n);const r=[0,1,2,3,4,5,6,7,8,9],s=r.map(o=>[Math.random()*At,Math.random()*bt,0,0]).flat();function a(){if(!n)throw"Undefined params to render";for(let f=0;f<=s.length-2;f+=2)s[f]=(s[f]+Math.random()*2-1)%n.canvas.width,s[f+1]=(s[f+1]+Math.random()*0+1)%n.canvas.height;const o=re(n,new Float32Array(s),3,3);xn({gl:n,positionTex:o,textureDimension:{width:3,height:3},ids:r}),requestAnimationFrame(a)}requestAnimationFrame(a)}return se(()=>e()),[]}let bn=class extends Z{constructor(e){super(),ee(this,e,An,$n,te,{})}};const En=`attribute float id;
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
`,wn=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let ge,Fe,Je;const gn=(t,e)=>{Fe=oe(t,[En,wn]),ge={idAttributeLocation:t.getAttribLocation(Fe,"id"),texDimensionsUniformLocation:t.getUniformLocation(Fe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Fe,"u_resolution")},Je=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Je),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Fn=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:r}=t;Q(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,Je),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Fe),e.uniform2f(ge.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ge.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(ge.idAttributeLocation);const s=1,a=e.FLOAT,o=!1,f=0,c=0;e.vertexAttribPointer(ge.idAttributeLocation,s,a,o,f,c),e.drawArrays(e.POINTS,c,r.length)};function Rn(t,e){const i=new Array(t).fill(0).map((s,a)=>a),n=i.map(s=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),r={width:i.length,height:1};return{ids:i,positions:n,texDimensions:r}}const Dn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Un=`precision highp float;

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

`;let xe,$e,Ze,He,je,ut,mt,Re,Me;const yn=(t,e)=>{const{positions:i,texDimensions:n}=e;$e=oe(t,[Dn,Un]),xe={positionAttributeLocation:t.getAttribLocation($e,"position"),positionTexLocation:t.getUniformLocation($e,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation($e,"texDimensions"),resolutionUniformLocation:t.getUniformLocation($e,"u_resolution")},Ze=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Ze),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),He=re(t,new Float32Array(i),n.width,n.height),je=re(t,null,n.width,n.height),ut=ue(t,He),mt=ue(t,je),Re={fb:ut,tex:He},Me={fb:mt,tex:je}},Pn=t=>{const{gl:e,texDimensions:i}=t;e.bindFramebuffer(e.FRAMEBUFFER,Me.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,Ze),e.enableVertexAttribArray(xe.positionAttributeLocation),e.vertexAttribPointer(xe.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Re.tex),e.useProgram($e),e.uniform1i(xe.positionTexLocation,0),e.uniform2f(xe.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(xe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=Re;Re=Me,Me=n}return Re.tex};function Ln(t){let e,i,n,r,s,a,o,f,c,p,v,T,d;return{c(){e=U("p"),i=P("Create an array of render-size positions. Store this array in a texture."),n=S(),r=U("p"),s=P("Create 2 textures which will be used to update the positions with a shader. In each "),a=U("code"),o=P("requestAnimationFrame"),f=P(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),c=S(),p=U("p"),v=P("Finally switch the two textures to read and write in the updated textures"),T=S(),d=U("canvas"),this.h()},l(_){e=y(_,"P",{});var x=B(e);i=L(x,"Create an array of render-size positions. Store this array in a texture."),x.forEach(l),n=C(_),r=y(_,"P",{});var g=B(r);s=L(g,"Create 2 textures which will be used to update the positions with a shader. In each "),a=y(g,"CODE",{});var h=B(a);o=L(h,"requestAnimationFrame"),h.forEach(l),f=L(g,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),g.forEach(l),c=C(_),p=y(_,"P",{});var b=B(p);v=L(b,"Finally switch the two textures to read and write in the updated textures"),b.forEach(l),T=C(_),d=y(_,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(d).forEach(l),this.h()},h(){R(d,"id","canvas"),Te(d,"background-color","black"),R(d,"width",Et),R(d,"height",wt)},m(_,x){$(_,e,x),E(e,i),$(_,n,x),$(_,r,x),E(r,s),E(r,a),E(a,o),E(r,f),$(_,c,x),$(_,p,x),E(p,v),$(_,T,x),$(_,d,x)},p:G,i:G,o:G,d(_){_&&l(e),_&&l(n),_&&l(r),_&&l(c),_&&l(p),_&&l(T),_&&l(d)}}}const Et=800,wt=600;function Bn(t){function e(){const i=at();Q(i.canvas);const{ids:n,positions:r,texDimensions:s}=Rn(100,{width:Et,height:wt});gn(i,n),yn(i,{positions:r,texDimensions:s});function a(){Q(i.canvas);const o=Pn({gl:i,texDimensions:s});Fn({gl:i,positionTex:o,textureDimension:s,ids:n}),requestAnimationFrame(a)}requestAnimationFrame(a)}return se(()=>e()),[]}let Sn=class extends Z{constructor(e){super(),ee(this,e,Bn,Ln,te,{})}};const Cn=`attribute float id;
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
`,In=`precision mediump float;
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
`;let me,Ae,et,tt;const Mn=(t,e)=>{const{ids:i,colors:n}=e;Ae=oe(t,[Cn,In]),me={idAttributeLocation:t.getAttribLocation(Ae,"id"),colorAttributeLocation:t.getAttribLocation(Ae,"color"),texDimensionsUniformLocation:t.getUniformLocation(Ae,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(Ae,"u_resolution")},et=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,et),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),tt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,tt),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Nn=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:r}=t,s=1,a=e.FLOAT,o=!1,f=0,c=0;Q(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,et),e.vertexAttribPointer(me.idAttributeLocation,s,a,o,f,c),e.enableVertexAttribArray(me.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,tt),e.vertexAttribPointer(me.colorAttributeLocation,s,a,o,f,c),e.enableVertexAttribArray(me.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(Ae),e.uniform2f(me.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(me.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,r.length)};function On(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((a,o)=>o),r=new Array(i).fill(0).map(a=>Math.floor(Math.random()*4)),s=n.map(a=>{{const{x:f,y:c}=Xn(e,20);return[f,c,0,0]}}).flat();return{ids:n,positions:s,texDimensions:t,colors:r}}const Xn=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,r=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:r,y:s}},zn=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,kn=`precision highp float;

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

`;let de,pe,nt,Be,Ke,dt,pt,De,Ne,Se;const Vn=(t,e)=>{const{positions:i,texDimensions:n}=e;return pe=oe(t,[zn,kn]),de={positionAttributeLocation:t.getAttribLocation(pe,"position"),positionTexLocation:t.getUniformLocation(pe,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(pe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(pe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(pe,"u_resolution")},nt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,nt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Be=re(t,new Float32Array(i),n.width,n.height),Ke=re(t,null,n.width,n.height),dt=ue(t,Be),pt=ue(t,Ke),De={fb:dt,tex:Be},Ne={fb:pt,tex:Ke},Be},Yn=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();Se||(Se=n-1);const r=n-Se;Se=n,e.bindFramebuffer(e.FRAMEBUFFER,Ne.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,nt),e.enableVertexAttribArray(de.positionAttributeLocation),e.vertexAttribPointer(de.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,De.tex),e.useProgram(pe),e.uniform1i(de.positionTexLocation,0),e.uniform1f(de.deltaTimeUniformLocation,r),e.uniform2f(de.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(de.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=De;De=Ne,Ne=s}return De.tex};function Wn(t){let e,i,n,r,s,a,o,f,c,p,v=t[2]?"Play":"Pause",T,d,_,x=t[1]?"Normal Speed":"Slow Mo",g,h,b,u,w=t[4].width*t[4].height+"",m,F,Y,q,H,O,j,J;return{c(){e=U("p"),i=P("Same principle with a shader to update positions and a shader to draw particles."),n=S(),r=U("p"),s=P(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=S(),o=U("canvas"),f=S(),c=U("div"),p=U("button"),T=P(v),d=S(),_=U("button"),g=P(x),h=S(),b=U("span"),u=P("particles: "),m=P(w),F=S(),Y=U("label"),q=P("Smooth steps"),H=S(),O=U("input"),this.h()},l(A){e=y(A,"P",{});var I=B(e);i=L(I,"Same principle with a shader to update positions and a shader to draw particles."),I.forEach(l),n=C(A),r=y(A,"P",{});var ne=B(r);s=L(ne,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ne.forEach(l),a=C(A),o=y(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(o).forEach(l),f=C(A),c=y(A,"DIV",{});var W=B(c);p=y(W,"BUTTON",{});var le=B(p);T=L(le,v),le.forEach(l),d=C(W),_=y(W,"BUTTON",{});var D=B(_);g=L(D,x),D.forEach(l),h=C(W),b=y(W,"SPAN",{});var K=B(b);u=L(K,"particles: "),m=L(K,w),K.forEach(l),F=C(W),Y=y(W,"LABEL",{for:!0});var ie=B(Y);q=L(ie,"Smooth steps"),ie.forEach(l),H=C(W),O=y(W,"INPUT",{type:!0,min:!0}),W.forEach(l),this.h()},h(){R(o,"id","canvas"),Te(o,"background-color","black"),R(o,"width",t[3].width),R(o,"height",t[3].height),R(Y,"for","steps"),R(O,"type","number"),R(O,"min",0)},m(A,I){$(A,e,I),E(e,i),$(A,n,I),$(A,r,I),E(r,s),$(A,a,I),$(A,o,I),$(A,f,I),$(A,c,I),E(c,p),E(p,T),E(c,d),E(c,_),E(_,g),E(c,h),E(c,b),E(b,u),E(b,m),E(c,F),E(c,Y),E(Y,q),E(c,H),E(c,O),Xe(O,t[0]),j||(J=[fe(p,"click",t[5]),fe(_,"click",t[6]),fe(O,"input",t[7])],j=!0)},p(A,[I]){I&4&&v!==(v=A[2]?"Play":"Pause")&&ze(T,v),I&2&&x!==(x=A[1]?"Normal Speed":"Slow Mo")&&ze(g,x),I&1&&Ge(O.value)!==A[0]&&Xe(O,A[0])},i:G,o:G,d(A){A&&l(e),A&&l(n),A&&l(r),A&&l(a),A&&l(o),A&&l(f),A&&l(c),j=!1,Tt(J)}}}function Gn(t,e,i){const n={width:800,height:600},r={width:100,height:100};let s=1,a=!1,o=!0;function f(){const T=at();Q(T.canvas);const{ids:d,positions:_,colors:x}=On(r,{width:n.width,height:n.height});Mn(T,{ids:d,colors:x,texDimensions:r});let g=Vn(T,{positions:_,texDimensions:r});function h(){if(Q(T.canvas),!o)for(let b=0;b<s;b++)g=Yn({gl:T,texDimensions:r});return Nn({gl:T,positionTex:g,textureDimension:r,ids:d}),o?requestAnimationFrame(h):a?setTimeout(()=>requestAnimationFrame(h),1e3):requestAnimationFrame(h)}requestAnimationFrame(h)}se(()=>f());const c=()=>i(2,o=!o),p=()=>i(1,a=!a);function v(){s=Ge(this.value),i(0,s)}return[s,a,o,n,r,c,p,v]}class qn extends Z{constructor(e){super(),ee(this,e,Gn,Wn,te,{})}}const Hn=`attribute float id;
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
`,jn=`precision mediump float;
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
`;let he,be,ot,it;const Kn=(t,e)=>{const{ids:i,colors:n}=e;be=oe(t,[Hn,jn]),he={idAttributeLocation:t.getAttribLocation(be,"id"),colorAttributeLocation:t.getAttribLocation(be,"color"),texDimensionsUniformLocation:t.getUniformLocation(be,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(be,"u_resolution")},ot=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ot),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),it=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,it),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Qn=t=>{const{gl:e,positionTex:i,textureDimension:n,ids:r}=t,s=1,a=e.FLOAT,o=!1,f=0,c=0;Q(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,ot),e.vertexAttribPointer(he.idAttributeLocation,s,a,o,f,c),e.enableVertexAttribArray(he.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,it),e.vertexAttribPointer(he.colorAttributeLocation,s,a,o,f,c),e.enableVertexAttribArray(he.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(be),e.uniform2f(he.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(he.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,c,r.length)};function Jn(t,e){const i=t.width*t.height,n=new Array(i).fill(0).map((a,o)=>o),r=new Array(i).fill(0).map(a=>Math.floor(Math.random()*4)),s=n.map(a=>{{const{x:f,y:c}=Zn(e,20);return[f,c,0,0]}}).flat();return{ids:n,positions:s,texDimensions:t,colors:r}}const Zn=(t,e)=>{const i=e*Math.random(),n=Math.random()*2*Math.PI,r=i*Math.cos(n)+t.width/2,s=i*Math.sin(n)+t.height/2;return{x:r,y:s}},eo=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,to=`precision highp float;

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

`;let _e,ve,rt,Ce,Qe,ht,_t,Ue,Oe,Ie;const no=(t,e)=>{const{positions:i,texDimensions:n}=e;return ve=oe(t,[eo,to]),_e={positionAttributeLocation:t.getAttribLocation(ve,"position"),positionTexLocation:t.getUniformLocation(ve,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(ve,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(ve,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ve,"u_resolution")},rt=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,rt),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ce=re(t,new Float32Array(i),n.width,n.height),Qe=re(t,null,n.width,n.height),ht=ue(t,Ce),_t=ue(t,Qe),Ue={fb:ht,tex:Ce},Oe={fb:_t,tex:Qe},Ce},oo=t=>{const{gl:e,texDimensions:i}=t,n=Date.now();Ie||(Ie=n-1);const r=n-Ie;Ie=n,e.bindFramebuffer(e.FRAMEBUFFER,Oe.fb),e.viewport(0,0,i.width,i.height),e.bindBuffer(e.ARRAY_BUFFER,rt),e.enableVertexAttribArray(_e.positionAttributeLocation),e.vertexAttribPointer(_e.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ue.tex),e.useProgram(ve),e.uniform1i(_e.positionTexLocation,0),e.uniform1f(_e.deltaTimeUniformLocation,r),e.uniform2f(_e.texDimensionsUniformLocation,i.width,i.height),e.uniform2f(_e.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=Ue;Ue=Oe,Oe=s}return Ue.tex};function io(t){let e,i,n,r,s,a,o,f,c,p,v=t[2]?"Play":"Pause",T,d,_,x=t[1]?"Normal Speed":"Slow Mo",g,h,b,u,w=t[4].width*t[4].height+"",m,F,Y,q,H,O,j,J;return{c(){e=U("p"),i=P("Same principle with a shader to update positions and a shader to draw particles."),n=S(),r=U("p"),s=P(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),a=S(),o=U("canvas"),f=S(),c=U("div"),p=U("button"),T=P(v),d=S(),_=U("button"),g=P(x),h=S(),b=U("span"),u=P("particles: "),m=P(w),F=S(),Y=U("label"),q=P("Smooth steps"),H=S(),O=U("input"),this.h()},l(A){e=y(A,"P",{});var I=B(e);i=L(I,"Same principle with a shader to update positions and a shader to draw particles."),I.forEach(l),n=C(A),r=y(A,"P",{});var ne=B(r);s=L(ne,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ne.forEach(l),a=C(A),o=y(A,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),B(o).forEach(l),f=C(A),c=y(A,"DIV",{});var W=B(c);p=y(W,"BUTTON",{});var le=B(p);T=L(le,v),le.forEach(l),d=C(W),_=y(W,"BUTTON",{});var D=B(_);g=L(D,x),D.forEach(l),h=C(W),b=y(W,"SPAN",{});var K=B(b);u=L(K,"particles: "),m=L(K,w),K.forEach(l),F=C(W),Y=y(W,"LABEL",{for:!0});var ie=B(Y);q=L(ie,"Smooth steps"),ie.forEach(l),H=C(W),O=y(W,"INPUT",{type:!0,min:!0}),W.forEach(l),this.h()},h(){R(o,"id","canvas"),Te(o,"background-color","black"),R(o,"width",t[3].width),R(o,"height",t[3].height),R(Y,"for","steps"),R(O,"type","number"),R(O,"min",0)},m(A,I){$(A,e,I),E(e,i),$(A,n,I),$(A,r,I),E(r,s),$(A,a,I),$(A,o,I),$(A,f,I),$(A,c,I),E(c,p),E(p,T),E(c,d),E(c,_),E(_,g),E(c,h),E(c,b),E(b,u),E(b,m),E(c,F),E(c,Y),E(Y,q),E(c,H),E(c,O),Xe(O,t[0]),j||(J=[fe(p,"click",t[5]),fe(_,"click",t[6]),fe(O,"input",t[7])],j=!0)},p(A,[I]){I&4&&v!==(v=A[2]?"Play":"Pause")&&ze(T,v),I&2&&x!==(x=A[1]?"Normal Speed":"Slow Mo")&&ze(g,x),I&1&&Ge(O.value)!==A[0]&&Xe(O,A[0])},i:G,o:G,d(A){A&&l(e),A&&l(n),A&&l(r),A&&l(a),A&&l(o),A&&l(f),A&&l(c),j=!1,Tt(J)}}}function ro(t,e,i){const n={width:800,height:600},r={width:100,height:100};let s=1,a=!1,o=!0;function f(){const T=at();Q(T.canvas);const{ids:d,positions:_,colors:x}=Jn(r,{width:n.width,height:n.height});Kn(T,{ids:d,colors:x,texDimensions:r});let g=no(T,{positions:_,texDimensions:r});function h(){if(Q(T.canvas),!o)for(let b=0;b<s;b++)g=oo({gl:T,texDimensions:r});return Qn({gl:T,positionTex:g,textureDimension:r,ids:d}),o?requestAnimationFrame(h):a?setTimeout(()=>requestAnimationFrame(h),1e3):requestAnimationFrame(h)}requestAnimationFrame(h)}se(()=>f());const c=()=>i(2,o=!o),p=()=>i(1,a=!a);function v(){s=Ge(this.value),i(0,s)}return[s,a,o,n,r,c,p,v]}class so extends Z{constructor(e){super(),ee(this,e,ro,io,te,{})}}function ao(t){let e;return{c(){e=P("About")},l(i){e=L(i,"About")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function co(t){let e;return{c(){e=P("Test 1")},l(i){e=L(i,"Test 1")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function fo(t){let e;return{c(){e=P("Test 2")},l(i){e=L(i,"Test 2")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function lo(t){let e;return{c(){e=P("Test 3")},l(i){e=L(i,"Test 3")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function uo(t){let e;return{c(){e=P("Test 4")},l(i){e=L(i,"Test 4")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function mo(t){let e;return{c(){e=P("Test 5")},l(i){e=L(i,"Test 5")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function po(t){let e;return{c(){e=P("Test 6")},l(i){e=L(i,"Test 6")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function ho(t){let e;return{c(){e=P("Test 7")},l(i){e=L(i,"Test 7")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function _o(t){let e;return{c(){e=P("Test 8")},l(i){e=L(i,"Test 8")},m(i,n){$(i,e,n)},d(i){i&&l(e)}}}function vo(t){let e,i,n,r,s,a,o,f,c,p,v,T,d,_,x,g,h,b;return e=new ae({props:{$$slots:{default:[ao]},$$scope:{ctx:t}}}),n=new ae({props:{$$slots:{default:[co]},$$scope:{ctx:t}}}),s=new ae({props:{$$slots:{default:[fo]},$$scope:{ctx:t}}}),o=new ae({props:{$$slots:{default:[lo]},$$scope:{ctx:t}}}),c=new ae({props:{$$slots:{default:[uo]},$$scope:{ctx:t}}}),v=new ae({props:{$$slots:{default:[mo]},$$scope:{ctx:t}}}),d=new ae({props:{$$slots:{default:[po]},$$scope:{ctx:t}}}),x=new ae({props:{$$slots:{default:[ho]},$$scope:{ctx:t}}}),h=new ae({props:{$$slots:{default:[_o]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment),i=S(),X(n.$$.fragment),r=S(),X(s.$$.fragment),a=S(),X(o.$$.fragment),f=S(),X(c.$$.fragment),p=S(),X(v.$$.fragment),T=S(),X(d.$$.fragment),_=S(),X(x.$$.fragment),g=S(),X(h.$$.fragment)},l(u){z(e.$$.fragment,u),i=C(u),z(n.$$.fragment,u),r=C(u),z(s.$$.fragment,u),a=C(u),z(o.$$.fragment,u),f=C(u),z(c.$$.fragment,u),p=C(u),z(v.$$.fragment,u),T=C(u),z(d.$$.fragment,u),_=C(u),z(x.$$.fragment,u),g=C(u),z(h.$$.fragment,u)},m(u,w){k(e,u,w),$(u,i,w),k(n,u,w),$(u,r,w),k(s,u,w),$(u,a,w),k(o,u,w),$(u,f,w),k(c,u,w),$(u,p,w),k(v,u,w),$(u,T,w),k(d,u,w),$(u,_,w),k(x,u,w),$(u,g,w),k(h,u,w),b=!0},p(u,w){const m={};w&1&&(m.$$scope={dirty:w,ctx:u}),e.$set(m);const F={};w&1&&(F.$$scope={dirty:w,ctx:u}),n.$set(F);const Y={};w&1&&(Y.$$scope={dirty:w,ctx:u}),s.$set(Y);const q={};w&1&&(q.$$scope={dirty:w,ctx:u}),o.$set(q);const H={};w&1&&(H.$$scope={dirty:w,ctx:u}),c.$set(H);const O={};w&1&&(O.$$scope={dirty:w,ctx:u}),v.$set(O);const j={};w&1&&(j.$$scope={dirty:w,ctx:u}),d.$set(j);const J={};w&1&&(J.$$scope={dirty:w,ctx:u}),x.$set(J);const A={};w&1&&(A.$$scope={dirty:w,ctx:u}),h.$set(A)},i(u){b||(M(e.$$.fragment,u),M(n.$$.fragment,u),M(s.$$.fragment,u),M(o.$$.fragment,u),M(c.$$.fragment,u),M(v.$$.fragment,u),M(d.$$.fragment,u),M(x.$$.fragment,u),M(h.$$.fragment,u),b=!0)},o(u){N(e.$$.fragment,u),N(n.$$.fragment,u),N(s.$$.fragment,u),N(o.$$.fragment,u),N(c.$$.fragment,u),N(v.$$.fragment,u),N(d.$$.fragment,u),N(x.$$.fragment,u),N(h.$$.fragment,u),b=!1},d(u){V(e,u),u&&l(i),V(n,u),u&&l(r),V(s,u),u&&l(a),V(o,u),u&&l(f),V(c,u),u&&l(p),V(v,u),u&&l(T),V(d,u),u&&l(_),V(x,u),u&&l(g),V(h,u)}}}function To(t){let e,i;return{c(){e=U("p"),i=P("This page is an experiment to run simulation on the GPU.")},l(n){e=y(n,"P",{});var r=B(e);i=L(r,"This page is an experiment to run simulation on the GPU."),r.forEach(l)},m(n,r){$(n,e,r),E(e,i)},p:G,d(n){n&&l(e)}}}function xo(t){let e,i;return e=new Qt({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function $o(t){let e,i;return e=new tn({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function Ao(t){let e,i;return e=new ln({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function bo(t){let e,i;return e=new hn({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function Eo(t){let e,i;return e=new bn({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function wo(t){let e,i;return e=new Sn({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function go(t){let e,i;return e=new qn({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function Fo(t){let e,i;return e=new so({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}function Ro(t){let e,i,n,r,s,a,o,f,c,p,v,T,d,_,x,g,h,b,u,w;return e=new kt({props:{$$slots:{default:[vo]},$$scope:{ctx:t}}}),n=new ce({props:{$$slots:{default:[To]},$$scope:{ctx:t}}}),s=new ce({props:{$$slots:{default:[xo]},$$scope:{ctx:t}}}),o=new ce({props:{$$slots:{default:[$o]},$$scope:{ctx:t}}}),c=new ce({props:{$$slots:{default:[Ao]},$$scope:{ctx:t}}}),v=new ce({props:{$$slots:{default:[bo]},$$scope:{ctx:t}}}),d=new ce({props:{$$slots:{default:[Eo]},$$scope:{ctx:t}}}),x=new ce({props:{$$slots:{default:[wo]},$$scope:{ctx:t}}}),h=new ce({props:{$$slots:{default:[go]},$$scope:{ctx:t}}}),u=new ce({props:{$$slots:{default:[Fo]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment),i=S(),X(n.$$.fragment),r=S(),X(s.$$.fragment),a=S(),X(o.$$.fragment),f=S(),X(c.$$.fragment),p=S(),X(v.$$.fragment),T=S(),X(d.$$.fragment),_=S(),X(x.$$.fragment),g=S(),X(h.$$.fragment),b=S(),X(u.$$.fragment)},l(m){z(e.$$.fragment,m),i=C(m),z(n.$$.fragment,m),r=C(m),z(s.$$.fragment,m),a=C(m),z(o.$$.fragment,m),f=C(m),z(c.$$.fragment,m),p=C(m),z(v.$$.fragment,m),T=C(m),z(d.$$.fragment,m),_=C(m),z(x.$$.fragment,m),g=C(m),z(h.$$.fragment,m),b=C(m),z(u.$$.fragment,m)},m(m,F){k(e,m,F),$(m,i,F),k(n,m,F),$(m,r,F),k(s,m,F),$(m,a,F),k(o,m,F),$(m,f,F),k(c,m,F),$(m,p,F),k(v,m,F),$(m,T,F),k(d,m,F),$(m,_,F),k(x,m,F),$(m,g,F),k(h,m,F),$(m,b,F),k(u,m,F),w=!0},p(m,F){const Y={};F&1&&(Y.$$scope={dirty:F,ctx:m}),e.$set(Y);const q={};F&1&&(q.$$scope={dirty:F,ctx:m}),n.$set(q);const H={};F&1&&(H.$$scope={dirty:F,ctx:m}),s.$set(H);const O={};F&1&&(O.$$scope={dirty:F,ctx:m}),o.$set(O);const j={};F&1&&(j.$$scope={dirty:F,ctx:m}),c.$set(j);const J={};F&1&&(J.$$scope={dirty:F,ctx:m}),v.$set(J);const A={};F&1&&(A.$$scope={dirty:F,ctx:m}),d.$set(A);const I={};F&1&&(I.$$scope={dirty:F,ctx:m}),x.$set(I);const ne={};F&1&&(ne.$$scope={dirty:F,ctx:m}),h.$set(ne);const W={};F&1&&(W.$$scope={dirty:F,ctx:m}),u.$set(W)},i(m){w||(M(e.$$.fragment,m),M(n.$$.fragment,m),M(s.$$.fragment,m),M(o.$$.fragment,m),M(c.$$.fragment,m),M(v.$$.fragment,m),M(d.$$.fragment,m),M(x.$$.fragment,m),M(h.$$.fragment,m),M(u.$$.fragment,m),w=!0)},o(m){N(e.$$.fragment,m),N(n.$$.fragment,m),N(s.$$.fragment,m),N(o.$$.fragment,m),N(c.$$.fragment,m),N(v.$$.fragment,m),N(d.$$.fragment,m),N(x.$$.fragment,m),N(h.$$.fragment,m),N(u.$$.fragment,m),w=!1},d(m){V(e,m),m&&l(i),V(n,m),m&&l(r),V(s,m),m&&l(a),V(o,m),m&&l(f),V(c,m),m&&l(p),V(v,m),m&&l(T),V(d,m),m&&l(_),V(x,m),m&&l(g),V(h,m),m&&l(b),V(u,m)}}}function Do(t){let e,i,n;return i=new Mt({props:{$$slots:{default:[Ro]},$$scope:{ctx:t}}}),{c(){e=U("div"),X(i.$$.fragment)},l(r){e=y(r,"DIV",{});var s=B(e);z(i.$$.fragment,s),s.forEach(l)},m(r,s){$(r,e,s),k(i,e,null),n=!0},p(r,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:r}),i.$set(a)},i(r){n||(M(i.$$.fragment,r),n=!0)},o(r){N(i.$$.fragment,r),n=!1},d(r){r&&l(e),V(i)}}}class Uo extends Z{constructor(e){super(),ee(this,e,null,Do,te,{})}}function yo(t){let e,i;return e=new Uo({}),{c(){X(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,r){k(e,n,r),i=!0},p:G,i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){N(e.$$.fragment,n),i=!1},d(n){V(e,n)}}}class Co extends Z{constructor(e){super(),ee(this,e,null,yo,te,{})}}export{Co as default};
