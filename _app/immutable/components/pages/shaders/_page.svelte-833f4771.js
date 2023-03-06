import{S as N,i as M,s as G,C as ue,k as g,l as P,m as y,h as p,n as E,b as $,K as ve,E as me,F as de,G as _e,f as A,t as R,H as Z,R as Ue,o as te,j as ge,Q as Pe,T as $e,U as Ae,A as ye,V as Se,g as Be,d as Le,q as I,a as L,r as X,c as C,D as K,B,p as Re,w,x as D,y as F,z as U}from"../../../chunks/index-ff9e742a.js";import{w as se}from"../../../chunks/index-84a8d4d9.js";let Ce=1;function we(){return`svelte-tabs-${Ce++}`}function Ie(o){let e,i,r,n;const a=o[4].default,c=ue(a,o,o[3],null);return{c(){e=g("div"),c&&c.c(),this.h()},l(t){e=P(t,"DIV",{class:!0});var f=y(e);c&&c.l(f),f.forEach(p),this.h()},h(){E(e,"class","svelte-tabs")},m(t,f){$(t,e,f),c&&c.m(e,null),i=!0,r||(n=ve(e,"keydown",o[1]),r=!0)},p(t,[f]){c&&c.p&&(!i||f&8)&&me(c,a,t,t[3],i?_e(a,t[3],f,null):de(t[3]),null)},i(t){i||(A(c,t),i=!0)},o(t){R(c,t),i=!1},d(t){t&&p(e),c&&c.d(t),r=!1,n()}}}const Ee={};function Xe(o,e,i){const r=o.indexOf(e);o.splice(r,1),i.update(n=>n===e?o[r]||o[o.length-1]:n)}function Ne(o,e,i){let r,{$$slots:n={},$$scope:a}=e,{initialSelectedIndex:c=0}=e;const t=[],f=[],s=[],u=se({}),l=se({}),d=se(null);Z(o,d,m=>i(5,r=m));const x=se(null);function v(m,h,k){m.push(h),k.update(O=>O||h),Pe(()=>Xe(m,h,k))}function T(m){const h=f.indexOf(m);d.set(m),x.set(s[h])}Ue(Ee,{registerTab(m){v(f,m,d)},registerTabElement(m){t.push(m)},registerPanel(m){v(s,m,x)},selectTab:T,selectedTab:d,selectedPanel:x,controls:u,labeledBy:l}),te(()=>{T(f[c])}),ge(()=>{for(let m=0;m<f.length;m++)u.update(h=>({...h,[f[m].id]:s[m].id})),l.update(h=>({...h,[s[m].id]:f[m].id}))});async function b(m){if(m.target.classList.contains("svelte-tabs__tab")){let h=f.indexOf(r);switch(m.key){case"ArrowRight":h+=1,h>f.length-1&&(h=0),T(f[h]),t[h].focus();break;case"ArrowLeft":h-=1,h<0&&(h=f.length-1),T(f[h]),t[h].focus()}}}return o.$$set=m=>{"initialSelectedIndex"in m&&i(2,c=m.initialSelectedIndex),"$$scope"in m&&i(3,a=m.$$scope)},[d,b,c,a,n]}class Me extends N{constructor(e){super(),M(this,e,Ne,Ie,G,{initialSelectedIndex:2})}}function Ge(o){let e,i,r,n,a,c;const t=o[9].default,f=ue(t,o,o[8],null);return{c(){e=g("li"),f&&f.c(),this.h()},l(s){e=P(s,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=y(e);f&&f.l(u),u.forEach(p),this.h()},h(){E(e,"role","tab"),E(e,"id",o[3].id),E(e,"aria-controls",i=o[2][o[3].id]),E(e,"aria-selected",o[1]),E(e,"tabindex",r=o[1]?0:-1),E(e,"class","svelte-tabs__tab svelte-1fbofsd"),$e(e,"svelte-tabs__selected",o[1])},m(s,u){$(s,e,u),f&&f.m(e,null),o[10](e),n=!0,a||(c=ve(e,"click",o[11]),a=!0)},p(s,[u]){f&&f.p&&(!n||u&256)&&me(f,t,s,s[8],n?_e(t,s[8],u,null):de(s[8]),null),(!n||u&4&&i!==(i=s[2][s[3].id]))&&E(e,"aria-controls",i),(!n||u&2)&&E(e,"aria-selected",s[1]),(!n||u&2&&r!==(r=s[1]?0:-1))&&E(e,"tabindex",r),(!n||u&2)&&$e(e,"svelte-tabs__selected",s[1])},i(s){n||(A(f,s),n=!0)},o(s){R(f,s),n=!1},d(s){s&&p(e),f&&f.d(s),o[10](null),a=!1,c()}}}function Oe(o,e,i){let r,n,{$$slots:a={},$$scope:c}=e,t;const f={id:we()},{registerTab:s,registerTabElement:u,selectTab:l,selectedTab:d,controls:x}=Ae(Ee);Z(o,d,m=>i(7,r=m)),Z(o,x,m=>i(2,n=m));let v;s(f),te(async()=>{await ye(),u(t)});function T(m){Se[m?"unshift":"push"](()=>{t=m,i(0,t)})}const b=()=>l(f);return o.$$set=m=>{"$$scope"in m&&i(8,c=m.$$scope)},o.$$.update=()=>{o.$$.dirty&128&&i(1,v=r===f)},[t,v,n,f,l,d,x,r,c,a,T,b]}class ae extends N{constructor(e){super(),M(this,e,Oe,Ge,G,{})}}function We(o){let e,i;const r=o[1].default,n=ue(r,o,o[0],null);return{c(){e=g("ul"),n&&n.c(),this.h()},l(a){e=P(a,"UL",{role:!0,class:!0});var c=y(e);n&&n.l(c),c.forEach(p),this.h()},h(){E(e,"role","tablist"),E(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,c){$(a,e,c),n&&n.m(e,null),i=!0},p(a,[c]){n&&n.p&&(!i||c&1)&&me(n,r,a,a[0],i?_e(r,a[0],c,null):de(a[0]),null)},i(a){i||(A(n,a),i=!0)},o(a){R(n,a),i=!1},d(a){a&&p(e),n&&n.d(a)}}}function ke(o,e,i){let{$$slots:r={},$$scope:n}=e;return o.$$set=a=>{"$$scope"in a&&i(0,n=a.$$scope)},[n,r]}class Ve extends N{constructor(e){super(),M(this,e,ke,We,G,{})}}function xe(o){let e;const i=o[6].default,r=ue(i,o,o[5],null);return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,a){r&&r.m(n,a),e=!0},p(n,a){r&&r.p&&(!e||a&32)&&me(r,i,n,n[5],e?_e(i,n[5],a,null):de(n[5]),null)},i(n){e||(A(r,n),e=!0)},o(n){R(r,n),e=!1},d(n){r&&r.d(n)}}}function Ye(o){let e,i,r,n=o[1]===o[2]&&xe(o);return{c(){e=g("div"),n&&n.c(),this.h()},l(a){e=P(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var c=y(e);n&&n.l(c),c.forEach(p),this.h()},h(){E(e,"id",o[2].id),E(e,"aria-labelledby",i=o[0][o[2].id]),E(e,"class","svelte-tabs__tab-panel svelte-epfyet"),E(e,"role","tabpanel")},m(a,c){$(a,e,c),n&&n.m(e,null),r=!0},p(a,[c]){a[1]===a[2]?n?(n.p(a,c),c&2&&A(n,1)):(n=xe(a),n.c(),A(n,1),n.m(e,null)):n&&(Be(),R(n,1,1,()=>{n=null}),Le()),(!r||c&1&&i!==(i=a[0][a[2].id]))&&E(e,"aria-labelledby",i)},i(a){r||(A(n),r=!0)},o(a){R(n),r=!1},d(a){a&&p(e),n&&n.d()}}}function He(o,e,i){let r,n,{$$slots:a={},$$scope:c}=e;const t={id:we()},{registerPanel:f,selectedPanel:s,labeledBy:u}=Ae(Ee);return Z(o,s,l=>i(1,n=l)),Z(o,u,l=>i(0,r=l)),f(t),o.$$set=l=>{"$$scope"in l&&i(5,c=l.$$scope)},[r,n,t,s,u,c,a]}class ce extends N{constructor(e){super(),M(this,e,He,Ye,G,{})}}const ze=["VERTEX_SHADER","FRAGMENT_SHADER"];function qe(o){if(!o.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!o.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Te(o,e,i,r){const n=o.createTexture();if(!n)throw"Can not create texture";return o.bindTexture(o.TEXTURE_2D,n),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,i,r,0,o.RGBA,o.FLOAT,e),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),n}function be(o,e){const i=o.createFramebuffer();if(!i)throw"Can not create frame buffer";return o.bindFramebuffer(o.FRAMEBUFFER,i),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),i}function ee(o,e,i,r,n){const a=[];for(let t=0;t<e.length;++t){const f=Ke(o,e[t],o[ze[t]],n);if(!f)throw"Can not create shader";a.push(f)}const c=je(o,a,i,r,n);if(!c)throw"Can not create program";return c}function Ke(o,e,i,r){const n=r||console.log,a=o.createShader(i);if(!a)throw"Could not load shader";if(o.shaderSource(a,e),o.compileShader(a),!o.getShaderParameter(a,o.COMPILE_STATUS)){const t=o.getShaderInfoLog(a);return n(new Error("*** Error compiling shader '"+a+"':"+t+`
`+e.split(`
`).map((f,s)=>`${s+1}: ${f}`).join(`
`))),o.deleteShader(a),null}return a}function je(o,e,i,r,n){const a=n||console.log,c=o.createProgram();if(!c)throw"Could not create program";if(e.forEach(function(f){o.attachShader(c,f)}),i&&i.forEach(function(f,s){o.bindAttribLocation(c,r?r[s]:s,f)}),o.linkProgram(c),!o.getProgramParameter(c,o.LINK_STATUS)){const f=o.getProgramInfoLog(c);return a("Error in program linking:"+f),o.deleteProgram(c),null}return c}function le(o,e){e=e||1;const i=o.clientWidth*e|0,r=o.clientHeight*e|0;return o.width!==i||o.height!==r?(o.width=i,o.height=r,!0):!1}function Qe(o){let e,i,r,n,a,c;return{c(){e=g("p"),i=I(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),r=L(),n=g("ul"),a=L(),c=g("canvas"),this.h()},l(t){e=P(t,"P",{});var f=y(e);i=X(f,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),f.forEach(p),r=C(t),n=P(t,"UL",{id:!0}),y(n).forEach(p),a=C(t),c=P(t,"CANVAS",{id:!0}),y(c).forEach(p),this.h()},h(){E(n,"id","result"),E(c,"id","canvas")},m(t,f){$(t,e,f),K(e,i),$(t,r,f),$(t,n,f),$(t,a,f),$(t,c,f)},p:B,i:B,o:B,d(t){t&&p(e),t&&p(r),t&&p(n),t&&p(a),t&&p(c)}}}function Je(o){const e=document.createElement("li");e.textContent=o.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function Ze(o){function e(){const i=`
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `,r=`
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `,c=document.createElement("canvas");c.width=3,c.height=3;const t=c.getContext("webgl");if(!t)throw"Coulndt get context";const f=ee(t,[i,r]);if(!f)throw"Could not get program";const s=t.getAttribLocation(f,"position"),u=t.getUniformLocation(f,"srcTex"),l=t.getUniformLocation(f,"srcDimensions"),d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);const x=3,v=3,T=t.createTexture();t.bindTexture(t.TEXTURE_2D,T),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,x,v,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(f),t.uniform1i(u,0),t.uniform2f(l,x,v),t.drawArrays(t.TRIANGLES,0,6);const b=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,b);for(let m=0;m<3*3;++m)Je(b[m*4])}return te(e),[]}class et extends N{constructor(e){super(),M(this,e,Ze,Qe,G,{})}}const tt=Float32Array;function De(o,e,i,r,n,a){const c=new tt(16);return c[0]=2/(e-o),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(r-i),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=2/(n-a),c[11]=0,c[12]=(o+e)/(o-e),c[13]=(i+r)/(i-r),c[14]=(n+a)/(n-a),c[15]=1,c}function nt(o){let e;return{c(){e=g("canvas"),this.h()},l(i){e=P(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(p),this.h()},h(){E(e,"id","canvas"),Re(e,"background-color","black"),E(e,"width","800"),E(e,"height","600")},m(i,r){$(i,e,r)},p:B,i:B,o:B,d(i){i&&p(e)}}}function ot(o){function e(){const i=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,r=`
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
  `,n=`
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
  `,c=document.getElementById("canvas");if(!c)throw"canvas undefined";const t=c.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=ee(t,[i,r]),l=ee(t,[n,a]);if(!u||!l)throw"Can not create programs";const d={position:t.getAttribLocation(u,"position"),positionTex:t.getUniformLocation(u,"positionTex"),velocityTex:t.getUniformLocation(u,"velocityTex"),texDimensions:t.getUniformLocation(u,"texDimensions"),canvasDimensions:t.getUniformLocation(u,"canvasDimensions"),deltaTime:t.getUniformLocation(u,"deltaTime")},x={id:t.getAttribLocation(l,"id"),positionTex:t.getUniformLocation(l,"positionTex"),texDimensions:t.getUniformLocation(l,"texDimensions"),matrix:t.getUniformLocation(l,"matrix")},v=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,v),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const T=300,b=20,m=T*b,h=new Array(m).fill(0).map((_,S)=>S),k=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,k),t.bufferData(t.ARRAY_BUFFER,new Float32Array(h),t.STATIC_DRAW),le(t.canvas);const O=(_,S)=>(S===void 0&&(S=_,_=0),Math.random()*(S-_)+_),j=new Float32Array(h.map(_=>[O(c.width),O(c.height),0,0]).flat()),pe=new Float32Array(h.map(_=>[O(-300,300),O(-300,300),0,0]).flat());function V(_,S,q,Fe){const he=_.createTexture();return _.bindTexture(_.TEXTURE_2D,he),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,q,Fe,0,_.RGBA,_.FLOAT,S),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),he}const ne=V(t,pe,T,b),Q=V(t,j,T,b),J=V(t,null,T,b);if(!Q||!J)throw"Can not create position textures";function Y(_,S){const q=_.createFramebuffer();return _.bindFramebuffer(_.FRAMEBUFFER,q),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,S,0),q}const H=Y(t,Q),oe=Y(t,J);let z={fb:H,tex:Q},W={fb:oe,tex:J},ie=0;function re(_){if(!t)return;_*=.001;const S=_-ie;ie=_,le(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,W.fb),t.viewport(0,0,T,b),t.bindBuffer(t.ARRAY_BUFFER,v),t.enableVertexAttribArray(d.position),t.vertexAttribPointer(d.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,z.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,ne),t.useProgram(u),t.uniform1i(d.positionTex,0),t.uniform1i(d.velocityTex,1),t.uniform2f(d.texDimensions,T,b),t.uniform2f(d.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(d.deltaTime,S),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,k),t.enableVertexAttribArray(x.id),t.vertexAttribPointer(x.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,W.tex),t.useProgram(l),t.uniform2f(x.texDimensions,T,T),t.uniform1i(x.positionTex,0),t.uniformMatrix4fv(x.matrix,!1,De(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,m);{const q=z;z=W,W=q}requestAnimationFrame(re)}requestAnimationFrame(re)}return te(()=>e()),[]}class it extends N{constructor(e){super(),M(this,e,ot,nt,G,{})}}const fe=(o,e)=>(e===void 0&&(e=o,o=0),Math.random()*(e-o)+o);function rt(o,e,i,r){const n=o*e,a=new Array(n).fill(0).map((f,s)=>s),c=new Float32Array(a.map(f=>[fe(i),fe(r),0,0]).flat()),t=new Float32Array(a.map(f=>[fe(-300,300),fe(-300,300),0,0]).flat());return{numParticles:n,ids:new Float32Array(a),positions:c,velocities:t}}function st(o){let e;return{c(){e=g("canvas"),this.h()},l(i){e=P(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(p),this.h()},h(){E(e,"id","canvas"),Re(e,"background-color","black"),E(e,"width","800"),E(e,"height","600")},m(i,r){$(i,e,r)},p:B,i:B,o:B,d(i){i&&p(e)}}}function at(o){function e(){const n=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,a=`
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
    //vec2 velocity = texture2D(velocityTex, texcoord).xy;
    vec2 velocity = vec2(0.0, -100);
    vec2 newPosition = euclideanModulo(position + velocity * deltaTime, canvasDimensions);

    gl_FragColor = vec4(newPosition, 0, 1);
  }
  `,c=`
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
  `,t=`
  precision highp float;
  void main() {
    gl_FragColor = vec4(0.4, 0.2, 0.9, 0.5);
  }
  `,f=document.getElementById("canvas");if(!f)throw"canvas undefined";const s=f.getContext("webgl");if(!s)throw"gl undefined";qe(s);const u=ee(s,[n,a]),l=ee(s,[c,t]),d={position:s.getAttribLocation(u,"position"),positionTex:s.getUniformLocation(u,"positionTex"),velocityTex:s.getUniformLocation(u,"velocityTex"),texDimensions:s.getUniformLocation(u,"texDimensions"),canvasDimensions:s.getUniformLocation(u,"canvasDimensions"),deltaTime:s.getUniformLocation(u,"deltaTime")},x={id:s.getAttribLocation(l,"id"),positionTex:s.getUniformLocation(l,"positionTex"),texDimensions:s.getUniformLocation(l,"texDimensions"),matrix:s.getUniformLocation(l,"matrix")},v=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,v),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const T=300,b=20,{numParticles:m,ids:h,positions:k,velocities:O}=rt(T,b,f.width,f.height),j=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,j),s.bufferData(s.ARRAY_BUFFER,new Float32Array(h),s.STATIC_DRAW),le(s.canvas);const pe=Te(s,O,T,b),V=Te(s,k,T,b),ne=Te(s,null,T,b),Q=be(s,V),J=be(s,ne);let Y={fb:Q,tex:V},H={fb:J,tex:ne},oe=0;function z(W){if(!s||!v||!j)throw"Undefined params to render";W*=.001;const ie=W-oe;oe=W,le(s.canvas),r(s,H,T,b,v,d,Y,pe,u,ie),i(s,T,j,x,H,l,m);{const re=Y;Y=H,H=re}requestAnimationFrame(z)}requestAnimationFrame(z)}const i=(n,a,c,t,f,s,u)=>{n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height),n.bindBuffer(n.ARRAY_BUFFER,c),n.enableVertexAttribArray(t.id),n.vertexAttribPointer(t.id,1,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.tex),n.useProgram(s),n.uniform2f(t.texDimensions,a,a),n.uniform1i(t.positionTex,0),n.uniformMatrix4fv(t.matrix,!1,De(0,n.canvas.width,0,n.canvas.height,-1,1)),n.drawArrays(n.POINTS,0,u)},r=(n,a,c,t,f,s,u,l,d,x)=>{n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,c,t),n.bindBuffer(n.ARRAY_BUFFER,f),n.enableVertexAttribArray(s.position),n.vertexAttribPointer(s.position,2,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.tex),n.activeTexture(n.TEXTURE0+1),n.bindTexture(n.TEXTURE_2D,l),n.useProgram(d),n.uniform1i(s.positionTex,0),n.uniform1i(s.velocityTex,1),n.uniform2f(s.texDimensions,c,t),n.uniform2f(s.canvasDimensions,n.canvas.width,n.canvas.height),n.uniform1f(s.deltaTime,x),n.drawArrays(n.TRIANGLES,0,6)};return te(()=>e()),[]}class ct extends N{constructor(e){super(),M(this,e,at,st,G,{})}}function ft(o){let e;return{c(){e=I("About")},l(i){e=X(i,"About")},m(i,r){$(i,e,r)},d(i){i&&p(e)}}}function lt(o){let e;return{c(){e=I("Simple counter")},l(i){e=X(i,"Simple counter")},m(i,r){$(i,e,r)},d(i){i&&p(e)}}}function ut(o){let e;return{c(){e=I("Particles")},l(i){e=X(i,"Particles")},m(i,r){$(i,e,r)},d(i){i&&p(e)}}}function mt(o){let e;return{c(){e=I("Particles 2")},l(i){e=X(i,"Particles 2")},m(i,r){$(i,e,r)},d(i){i&&p(e)}}}function dt(o){let e,i,r,n,a,c,t,f;return e=new ae({props:{$$slots:{default:[ft]},$$scope:{ctx:o}}}),r=new ae({props:{$$slots:{default:[lt]},$$scope:{ctx:o}}}),a=new ae({props:{$$slots:{default:[ut]},$$scope:{ctx:o}}}),t=new ae({props:{$$slots:{default:[mt]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment),i=L(),w(r.$$.fragment),n=L(),w(a.$$.fragment),c=L(),w(t.$$.fragment)},l(s){D(e.$$.fragment,s),i=C(s),D(r.$$.fragment,s),n=C(s),D(a.$$.fragment,s),c=C(s),D(t.$$.fragment,s)},m(s,u){F(e,s,u),$(s,i,u),F(r,s,u),$(s,n,u),F(a,s,u),$(s,c,u),F(t,s,u),f=!0},p(s,u){const l={};u&1&&(l.$$scope={dirty:u,ctx:s}),e.$set(l);const d={};u&1&&(d.$$scope={dirty:u,ctx:s}),r.$set(d);const x={};u&1&&(x.$$scope={dirty:u,ctx:s}),a.$set(x);const v={};u&1&&(v.$$scope={dirty:u,ctx:s}),t.$set(v)},i(s){f||(A(e.$$.fragment,s),A(r.$$.fragment,s),A(a.$$.fragment,s),A(t.$$.fragment,s),f=!0)},o(s){R(e.$$.fragment,s),R(r.$$.fragment,s),R(a.$$.fragment,s),R(t.$$.fragment,s),f=!1},d(s){U(e,s),s&&p(i),U(r,s),s&&p(n),U(a,s),s&&p(c),U(t,s)}}}function _t(o){let e,i,r,n,a,c,t,f;return{c(){e=g("p"),i=I("This page is an experiment to run simulation on the GPU."),r=L(),n=g("p"),a=I(`I am copying code from
                `),c=g("a"),t=I("this site"),f=I(`
                and adding basic typings for typescript.`),this.h()},l(s){e=P(s,"P",{});var u=y(e);i=X(u,"This page is an experiment to run simulation on the GPU."),u.forEach(p),r=C(s),n=P(s,"P",{});var l=y(n);a=X(l,`I am copying code from
                `),c=P(l,"A",{target:!0,href:!0});var d=y(c);t=X(d,"this site"),d.forEach(p),f=X(l,`
                and adding basic typings for typescript.`),l.forEach(p),this.h()},h(){E(c,"target","none"),E(c,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(s,u){$(s,e,u),K(e,i),$(s,r,u),$(s,n,u),K(n,a),K(n,c),K(c,t),K(n,f)},p:B,d(s){s&&p(e),s&&p(r),s&&p(n)}}}function pt(o){let e,i;return e=new et({}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},i(r){i||(A(e.$$.fragment,r),i=!0)},o(r){R(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}function Tt(o){let e,i;return e=new it({}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},i(r){i||(A(e.$$.fragment,r),i=!0)},o(r){R(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}function Et(o){let e,i;return e=new ct({}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},i(r){i||(A(e.$$.fragment,r),i=!0)},o(r){R(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}function ht(o){let e,i,r,n,a,c,t,f,s,u;return e=new Ve({props:{$$slots:{default:[dt]},$$scope:{ctx:o}}}),r=new ce({props:{$$slots:{default:[_t]},$$scope:{ctx:o}}}),a=new ce({props:{$$slots:{default:[pt]},$$scope:{ctx:o}}}),t=new ce({props:{$$slots:{default:[Tt]},$$scope:{ctx:o}}}),s=new ce({props:{$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment),i=L(),w(r.$$.fragment),n=L(),w(a.$$.fragment),c=L(),w(t.$$.fragment),f=L(),w(s.$$.fragment)},l(l){D(e.$$.fragment,l),i=C(l),D(r.$$.fragment,l),n=C(l),D(a.$$.fragment,l),c=C(l),D(t.$$.fragment,l),f=C(l),D(s.$$.fragment,l)},m(l,d){F(e,l,d),$(l,i,d),F(r,l,d),$(l,n,d),F(a,l,d),$(l,c,d),F(t,l,d),$(l,f,d),F(s,l,d),u=!0},p(l,d){const x={};d&1&&(x.$$scope={dirty:d,ctx:l}),e.$set(x);const v={};d&1&&(v.$$scope={dirty:d,ctx:l}),r.$set(v);const T={};d&1&&(T.$$scope={dirty:d,ctx:l}),a.$set(T);const b={};d&1&&(b.$$scope={dirty:d,ctx:l}),t.$set(b);const m={};d&1&&(m.$$scope={dirty:d,ctx:l}),s.$set(m)},i(l){u||(A(e.$$.fragment,l),A(r.$$.fragment,l),A(a.$$.fragment,l),A(t.$$.fragment,l),A(s.$$.fragment,l),u=!0)},o(l){R(e.$$.fragment,l),R(r.$$.fragment,l),R(a.$$.fragment,l),R(t.$$.fragment,l),R(s.$$.fragment,l),u=!1},d(l){U(e,l),l&&p(i),U(r,l),l&&p(n),U(a,l),l&&p(c),U(t,l),l&&p(f),U(s,l)}}}function $t(o){let e,i,r;return i=new Me({props:{$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){e=g("div"),w(i.$$.fragment)},l(n){e=P(n,"DIV",{});var a=y(e);D(i.$$.fragment,a),a.forEach(p)},m(n,a){$(n,e,a),F(i,e,null),r=!0},p(n,[a]){const c={};a&1&&(c.$$scope={dirty:a,ctx:n}),i.$set(c)},i(n){r||(A(i.$$.fragment,n),r=!0)},o(n){R(i.$$.fragment,n),r=!1},d(n){n&&p(e),U(i)}}}class xt extends N{constructor(e){super(),M(this,e,null,$t,G,{})}}function bt(o){let e,i;return e=new xt({}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,n){F(e,r,n),i=!0},p:B,i(r){i||(A(e.$$.fragment,r),i=!0)},o(r){R(e.$$.fragment,r),i=!1},d(r){U(e,r)}}}class Rt extends N{constructor(e){super(),M(this,e,null,bt,G,{})}}export{Rt as default};
