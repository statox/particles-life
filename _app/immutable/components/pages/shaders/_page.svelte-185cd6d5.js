import{S as N,i as M,s as G,C as ce,k as P,l as U,m as y,h as _,n as E,b as $,K as ve,E as fe,F as ue,G as me,f as v,t as A,H as J,R as De,o as ee,j as Pe,Q as Ue,T as $e,U as Ae,A as ye,V as Le,g as Se,d as Be,q as I,a as B,r as X,c as C,D as z,B as S,p as ge,w as R,x as w,y as F,z as D}from"../../../chunks/index-ff9e742a.js";import{w as ie}from"../../../chunks/index-84a8d4d9.js";let Ce=1;function Re(){return`svelte-tabs-${Ce++}`}function Ie(n){let t,o,i,r;const a=n[4].default,s=ce(a,n,n[3],null);return{c(){t=P("div"),s&&s.c(),this.h()},l(e){t=U(e,"DIV",{class:!0});var c=y(t);s&&s.l(c),c.forEach(_),this.h()},h(){E(t,"class","svelte-tabs")},m(e,c){$(e,t,c),s&&s.m(t,null),o=!0,i||(r=ve(t,"keydown",n[1]),i=!0)},p(e,[c]){s&&s.p&&(!o||c&8)&&fe(s,a,e,e[3],o?me(a,e[3],c,null):ue(e[3]),null)},i(e){o||(v(s,e),o=!0)},o(e){A(s,e),o=!1},d(e){e&&_(t),s&&s.d(e),i=!1,r()}}}const _e={};function Xe(n,t,o){const i=n.indexOf(t);n.splice(i,1),o.update(r=>r===t?n[i]||n[n.length-1]:r)}function Ne(n,t,o){let i,{$$slots:r={},$$scope:a}=t,{initialSelectedIndex:s=0}=t;const e=[],c=[],l=[],u=ie({}),f=ie({}),d=ie(null);J(n,d,m=>o(5,i=m));const T=ie(null);function x(m,h,O){m.push(h),O.update(W=>W||h),Ue(()=>Xe(m,h,O))}function b(m){const h=c.indexOf(m);d.set(m),T.set(l[h])}De(_e,{registerTab(m){x(c,m,d)},registerTabElement(m){e.push(m)},registerPanel(m){x(l,m,T)},selectTab:b,selectedTab:d,selectedPanel:T,controls:u,labeledBy:f}),ee(()=>{b(c[s])}),Pe(()=>{for(let m=0;m<c.length;m++)u.update(h=>({...h,[c[m].id]:l[m].id})),f.update(h=>({...h,[l[m].id]:c[m].id}))});async function g(m){if(m.target.classList.contains("svelte-tabs__tab")){let h=c.indexOf(i);switch(m.key){case"ArrowRight":h+=1,h>c.length-1&&(h=0),b(c[h]),e[h].focus();break;case"ArrowLeft":h-=1,h<0&&(h=c.length-1),b(c[h]),e[h].focus()}}}return n.$$set=m=>{"initialSelectedIndex"in m&&o(2,s=m.initialSelectedIndex),"$$scope"in m&&o(3,a=m.$$scope)},[d,g,s,a,r]}class Me extends N{constructor(t){super(),M(this,t,Ne,Ie,G,{initialSelectedIndex:2})}}function Ge(n){let t,o,i,r,a,s;const e=n[9].default,c=ce(e,n,n[8],null);return{c(){t=P("li"),c&&c.c(),this.h()},l(l){t=U(l,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var u=y(t);c&&c.l(u),u.forEach(_),this.h()},h(){E(t,"role","tab"),E(t,"id",n[3].id),E(t,"aria-controls",o=n[2][n[3].id]),E(t,"aria-selected",n[1]),E(t,"tabindex",i=n[1]?0:-1),E(t,"class","svelte-tabs__tab svelte-1fbofsd"),$e(t,"svelte-tabs__selected",n[1])},m(l,u){$(l,t,u),c&&c.m(t,null),n[10](t),r=!0,a||(s=ve(t,"click",n[11]),a=!0)},p(l,[u]){c&&c.p&&(!r||u&256)&&fe(c,e,l,l[8],r?me(e,l[8],u,null):ue(l[8]),null),(!r||u&4&&o!==(o=l[2][l[3].id]))&&E(t,"aria-controls",o),(!r||u&2)&&E(t,"aria-selected",l[1]),(!r||u&2&&i!==(i=l[1]?0:-1))&&E(t,"tabindex",i),(!r||u&2)&&$e(t,"svelte-tabs__selected",l[1])},i(l){r||(v(c,l),r=!0)},o(l){A(c,l),r=!1},d(l){l&&_(t),c&&c.d(l),n[10](null),a=!1,s()}}}function Oe(n,t,o){let i,r,{$$slots:a={},$$scope:s}=t,e;const c={id:Re()},{registerTab:l,registerTabElement:u,selectTab:f,selectedTab:d,controls:T}=Ae(_e);J(n,d,m=>o(7,i=m)),J(n,T,m=>o(2,r=m));let x;l(c),ee(async()=>{await ye(),u(e)});function b(m){Le[m?"unshift":"push"](()=>{e=m,o(0,e)})}const g=()=>f(c);return n.$$set=m=>{"$$scope"in m&&o(8,s=m.$$scope)},n.$$.update=()=>{n.$$.dirty&128&&o(1,x=i===c)},[e,x,r,c,f,d,T,i,s,a,b,g]}class re extends N{constructor(t){super(),M(this,t,Oe,Ge,G,{})}}function We(n){let t,o;const i=n[1].default,r=ce(i,n,n[0],null);return{c(){t=P("ul"),r&&r.c(),this.h()},l(a){t=U(a,"UL",{role:!0,class:!0});var s=y(t);r&&r.l(s),s.forEach(_),this.h()},h(){E(t,"role","tablist"),E(t,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){$(a,t,s),r&&r.m(t,null),o=!0},p(a,[s]){r&&r.p&&(!o||s&1)&&fe(r,i,a,a[0],o?me(i,a[0],s,null):ue(a[0]),null)},i(a){o||(v(r,a),o=!0)},o(a){A(r,a),o=!1},d(a){a&&_(t),r&&r.d(a)}}}function ke(n,t,o){let{$$slots:i={},$$scope:r}=t;return n.$$set=a=>{"$$scope"in a&&o(0,r=a.$$scope)},[r,i]}class Ve extends N{constructor(t){super(),M(this,t,ke,We,G,{})}}function xe(n){let t;const o=n[6].default,i=ce(o,n,n[5],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,a){i&&i.m(r,a),t=!0},p(r,a){i&&i.p&&(!t||a&32)&&fe(i,o,r,r[5],t?me(o,r[5],a,null):ue(r[5]),null)},i(r){t||(v(i,r),t=!0)},o(r){A(i,r),t=!1},d(r){i&&i.d(r)}}}function Ye(n){let t,o,i,r=n[1]===n[2]&&xe(n);return{c(){t=P("div"),r&&r.c(),this.h()},l(a){t=U(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=y(t);r&&r.l(s),s.forEach(_),this.h()},h(){E(t,"id",n[2].id),E(t,"aria-labelledby",o=n[0][n[2].id]),E(t,"class","svelte-tabs__tab-panel svelte-epfyet"),E(t,"role","tabpanel")},m(a,s){$(a,t,s),r&&r.m(t,null),i=!0},p(a,[s]){a[1]===a[2]?r?(r.p(a,s),s&2&&v(r,1)):(r=xe(a),r.c(),v(r,1),r.m(t,null)):r&&(Se(),A(r,1,1,()=>{r=null}),Be()),(!i||s&1&&o!==(o=a[0][a[2].id]))&&E(t,"aria-labelledby",o)},i(a){i||(v(r),i=!0)},o(a){A(r),i=!1},d(a){a&&_(t),r&&r.d()}}}function He(n,t,o){let i,r,{$$slots:a={},$$scope:s}=t;const e={id:Re()},{registerPanel:c,selectedPanel:l,labeledBy:u}=Ae(_e);return J(n,l,f=>o(1,r=f)),J(n,u,f=>o(0,i=f)),c(e),n.$$set=f=>{"$$scope"in f&&o(5,s=f.$$scope)},[i,r,e,l,u,s,a]}class se extends N{constructor(t){super(),M(this,t,He,Ye,G,{})}}const ze=["VERTEX_SHADER","FRAGMENT_SHADER"];function qe(n){if(!n.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!n.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function pe(n,t,o,i){const r=n.createTexture();if(!r)throw"Can not create texture";return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,o,i,0,n.RGBA,n.FLOAT,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}function be(n,t){const o=n.createFramebuffer();if(!o)throw"Can not create frame buffer";return n.bindFramebuffer(n.FRAMEBUFFER,o),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0),o}function Z(n,t,o,i,r){const a=[];for(let e=0;e<t.length;++e){const c=Ke(n,t[e],n[ze[e]],r);if(!c)throw"Can not create shader";a.push(c)}const s=je(n,a,o,i,r);if(!s)throw"Can not create program";return s}function Ke(n,t,o,i){const r=i||console.log,a=n.createShader(o);if(!a)throw"Could not load shader";if(n.shaderSource(a,t),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS)){const e=n.getShaderInfoLog(a);return r(new Error("*** Error compiling shader '"+a+"':"+e+`
`+t.split(`
`).map((c,l)=>`${l+1}: ${c}`).join(`
`))),n.deleteShader(a),null}return a}function je(n,t,o,i,r){const a=r||console.log,s=n.createProgram();if(!s)throw"Could not create program";if(t.forEach(function(c){n.attachShader(s,c)}),o&&o.forEach(function(c,l){n.bindAttribLocation(s,i?i[l]:l,c)}),n.linkProgram(s),!n.getProgramParameter(s,n.LINK_STATUS)){const c=n.getProgramInfoLog(s);return a("Error in program linking:"+c),n.deleteProgram(s),null}return s}function le(n,t){t=t||1;const o=n.clientWidth*t|0,i=n.clientHeight*t|0;return n.width!==o||n.height!==i?(n.width=o,n.height=i,!0):!1}function Qe(n){let t,o,i,r,a,s;return{c(){t=P("p"),o=I(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),i=B(),r=P("ul"),a=B(),s=P("canvas"),this.h()},l(e){t=U(e,"P",{});var c=y(t);o=X(c,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),c.forEach(_),i=C(e),r=U(e,"UL",{id:!0}),y(r).forEach(_),a=C(e),s=U(e,"CANVAS",{id:!0}),y(s).forEach(_),this.h()},h(){E(r,"id","result"),E(s,"id","canvas")},m(e,c){$(e,t,c),z(t,o),$(e,i,c),$(e,r,c),$(e,a,c),$(e,s,c)},p:S,i:S,o:S,d(e){e&&_(t),e&&_(i),e&&_(r),e&&_(a),e&&_(s)}}}function Je(n){const t=document.createElement("li");t.textContent=n.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(t)}function Ze(n){function t(){const o=`
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
    `,i=`
    precision highp float;

    uniform sampler2D srcTex;
    uniform vec2 srcDimensions;

    void main() {
      vec2 texcoord = gl_FragCoord.xy / srcDimensions;
      vec4 value = texture2D(srcTex, texcoord);
      gl_FragColor = value * 2.0;
    }
    `,s=document.createElement("canvas");s.width=3,s.height=3;const e=s.getContext("webgl");if(!e)throw"Coulndt get context";const c=Z(e,[o,i]);if(!c)throw"Could not get program";const l=e.getAttribLocation(c,"position"),u=e.getUniformLocation(c,"srcTex"),f=e.getUniformLocation(c,"srcDimensions"),d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);const T=3,x=3,b=e.createTexture();e.bindTexture(e.TEXTURE_2D,b),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,T,x,0,e.LUMINANCE,e.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.useProgram(c),e.uniform1i(u,0),e.uniform2f(f,T,x),e.drawArrays(e.TRIANGLES,0,6);const g=new Uint8Array(3*3*4);e.readPixels(0,0,3,3,e.RGBA,e.UNSIGNED_BYTE,g);for(let m=0;m<3*3;++m)Je(g[m*4])}return ee(t),[]}class et extends N{constructor(t){super(),M(this,t,Ze,Qe,G,{})}}const tt=Float32Array;function we(n,t,o,i,r,a){const s=new tt(16);return s[0]=2/(t-n),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(i-o),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-a),s[11]=0,s[12]=(n+t)/(n-t),s[13]=(o+i)/(o-i),s[14]=(r+a)/(r-a),s[15]=1,s}function nt(n){let t;return{c(){t=P("canvas"),this.h()},l(o){t=U(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(t).forEach(_),this.h()},h(){E(t,"id","canvas"),ge(t,"background-color","black"),E(t,"width","800"),E(t,"height","600")},m(o,i){$(o,t,i)},p:S,i:S,o:S,d(o){o&&_(t)}}}function ot(n){function t(){const o=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const e=s.getContext("webgl");if(!e)throw"gl undefined";if(!e.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!e.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const u=Z(e,[o,i]),f=Z(e,[r,a]);if(!u||!f)throw"Can not create programs";const d={position:e.getAttribLocation(u,"position"),positionTex:e.getUniformLocation(u,"positionTex"),velocityTex:e.getUniformLocation(u,"velocityTex"),texDimensions:e.getUniformLocation(u,"texDimensions"),canvasDimensions:e.getUniformLocation(u,"canvasDimensions"),deltaTime:e.getUniformLocation(u,"deltaTime")},T={id:e.getAttribLocation(f,"id"),positionTex:e.getUniformLocation(f,"positionTex"),texDimensions:e.getUniformLocation(f,"texDimensions"),matrix:e.getUniformLocation(f,"matrix")},x=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,x),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const b=300,g=20,m=b*g,h=new Array(m).fill(0).map((p,L)=>L),O=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,O),e.bufferData(e.ARRAY_BUFFER,new Float32Array(h),e.STATIC_DRAW),le(e.canvas);const W=(p,L)=>(L===void 0&&(L=p,p=0),Math.random()*(L-p)+p),te=new Float32Array(h.map(p=>[W(s.width),W(s.height),0,0]).flat()),ne=new Float32Array(h.map(p=>[W(-300,300),W(-300,300),0,0]).flat());function q(p,L,H,Fe){const he=p.createTexture();return p.bindTexture(p.TEXTURE_2D,he),p.texImage2D(p.TEXTURE_2D,0,p.RGBA,H,Fe,0,p.RGBA,p.FLOAT,L),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.NEAREST),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.NEAREST),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),he}const de=q(e,ne,b,g),V=q(e,te,b,g),k=q(e,null,b,g);if(!V||!k)throw"Can not create position textures";function K(p,L){const H=p.createFramebuffer();return p.bindFramebuffer(p.FRAMEBUFFER,H),p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,L,0),H}const oe=K(e,V),j=K(e,k);let Q={fb:oe,tex:V},Y={fb:j,tex:k},Te=0;function Ee(p){if(!e)return;p*=.001;const L=p-Te;Te=p,le(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,Y.fb),e.viewport(0,0,b,g),e.bindBuffer(e.ARRAY_BUFFER,x),e.enableVertexAttribArray(d.position),e.vertexAttribPointer(d.position,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Q.tex),e.activeTexture(e.TEXTURE0+1),e.bindTexture(e.TEXTURE_2D,de),e.useProgram(u),e.uniform1i(d.positionTex,0),e.uniform1i(d.velocityTex,1),e.uniform2f(d.texDimensions,b,g),e.uniform2f(d.canvasDimensions,e.canvas.width,e.canvas.height),e.uniform1f(d.deltaTime,L),e.drawArrays(e.TRIANGLES,0,6),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.bindBuffer(e.ARRAY_BUFFER,O),e.enableVertexAttribArray(T.id),e.vertexAttribPointer(T.id,1,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Y.tex),e.useProgram(f),e.uniform2f(T.texDimensions,b,b),e.uniform1i(T.positionTex,0),e.uniformMatrix4fv(T.matrix,!1,we(0,e.canvas.width,0,e.canvas.height,-1,1)),e.drawArrays(e.POINTS,0,m);{const H=Q;Q=Y,Y=H}requestAnimationFrame(Ee)}requestAnimationFrame(Ee)}return ee(()=>t()),[]}class it extends N{constructor(t){super(),M(this,t,ot,nt,G,{})}}const ae=(n,t)=>(t===void 0&&(t=n,n=0),Math.random()*(t-n)+n);function rt(n,t,o,i){const r=n*t,a=new Array(r).fill(0).map((c,l)=>l),s=new Float32Array(a.map(c=>[ae(o),ae(i),0,0]).flat()),e=new Float32Array(a.map(c=>[ae(-300,300),ae(-300,300),0,0]).flat());return{numParticles:r,ids:new Float32Array(a),positions:s,velocities:e}}function st(n){let t;return{c(){t=P("canvas"),this.h()},l(o){t=U(o,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(t).forEach(_),this.h()},h(){E(t,"id","canvas"),ge(t,"background-color","black"),E(t,"width","800"),E(t,"height","600")},m(o,i){$(o,t,i)},p:S,i:S,o:S,d(o){o&&_(t)}}}function at(n){function t(){const o=`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
  `,i=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const e=s.getContext("webgl");if(!e)throw"gl undefined";qe(e);const c=Z(e,[o,i]),l=Z(e,[r,a]),u={position:e.getAttribLocation(c,"position"),positionTex:e.getUniformLocation(c,"positionTex"),velocityTex:e.getUniformLocation(c,"velocityTex"),texDimensions:e.getUniformLocation(c,"texDimensions"),canvasDimensions:e.getUniformLocation(c,"canvasDimensions"),deltaTime:e.getUniformLocation(c,"deltaTime")},f={id:e.getAttribLocation(l,"id"),positionTex:e.getUniformLocation(l,"positionTex"),texDimensions:e.getUniformLocation(l,"texDimensions"),matrix:e.getUniformLocation(l,"matrix")},d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const T=300,x=20,{numParticles:b,ids:g,positions:m,velocities:h}=rt(T,x,s.width,s.height),O=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,O),e.bufferData(e.ARRAY_BUFFER,new Float32Array(g),e.STATIC_DRAW),le(e.canvas);const W=pe(e,h,T,x),te=pe(e,m,T,x),ne=pe(e,null,T,x),q=be(e,te),de=be(e,ne);let V={fb:q,tex:te},k={fb:de,tex:ne},K=0;function oe(j){if(!e)return;j*=.001;const Q=j-K;K=j,le(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,k.fb),e.viewport(0,0,T,x),e.bindBuffer(e.ARRAY_BUFFER,d),e.enableVertexAttribArray(u.position),e.vertexAttribPointer(u.position,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,V.tex),e.activeTexture(e.TEXTURE0+1),e.bindTexture(e.TEXTURE_2D,W),e.useProgram(c),e.uniform1i(u.positionTex,0),e.uniform1i(u.velocityTex,1),e.uniform2f(u.texDimensions,T,x),e.uniform2f(u.canvasDimensions,e.canvas.width,e.canvas.height),e.uniform1f(u.deltaTime,Q),e.drawArrays(e.TRIANGLES,0,6),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.bindBuffer(e.ARRAY_BUFFER,O),e.enableVertexAttribArray(f.id),e.vertexAttribPointer(f.id,1,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,k.tex),e.useProgram(l),e.uniform2f(f.texDimensions,T,T),e.uniform1i(f.positionTex,0),e.uniformMatrix4fv(f.matrix,!1,we(0,e.canvas.width,0,e.canvas.height,-1,1)),e.drawArrays(e.POINTS,0,b);{const Y=V;V=k,k=Y}requestAnimationFrame(oe)}requestAnimationFrame(oe)}return ee(()=>t()),[]}class lt extends N{constructor(t){super(),M(this,t,at,st,G,{})}}function ct(n){let t;return{c(){t=I("About")},l(o){t=X(o,"About")},m(o,i){$(o,t,i)},d(o){o&&_(t)}}}function ft(n){let t;return{c(){t=I("Simple counter")},l(o){t=X(o,"Simple counter")},m(o,i){$(o,t,i)},d(o){o&&_(t)}}}function ut(n){let t;return{c(){t=I("Particles")},l(o){t=X(o,"Particles")},m(o,i){$(o,t,i)},d(o){o&&_(t)}}}function mt(n){let t;return{c(){t=I("Particles 2")},l(o){t=X(o,"Particles 2")},m(o,i){$(o,t,i)},d(o){o&&_(t)}}}function dt(n){let t,o,i,r,a,s,e,c;return t=new re({props:{$$slots:{default:[ct]},$$scope:{ctx:n}}}),i=new re({props:{$$slots:{default:[ft]},$$scope:{ctx:n}}}),a=new re({props:{$$slots:{default:[ut]},$$scope:{ctx:n}}}),e=new re({props:{$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){R(t.$$.fragment),o=B(),R(i.$$.fragment),r=B(),R(a.$$.fragment),s=B(),R(e.$$.fragment)},l(l){w(t.$$.fragment,l),o=C(l),w(i.$$.fragment,l),r=C(l),w(a.$$.fragment,l),s=C(l),w(e.$$.fragment,l)},m(l,u){F(t,l,u),$(l,o,u),F(i,l,u),$(l,r,u),F(a,l,u),$(l,s,u),F(e,l,u),c=!0},p(l,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:l}),t.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:l}),i.$set(d);const T={};u&1&&(T.$$scope={dirty:u,ctx:l}),a.$set(T);const x={};u&1&&(x.$$scope={dirty:u,ctx:l}),e.$set(x)},i(l){c||(v(t.$$.fragment,l),v(i.$$.fragment,l),v(a.$$.fragment,l),v(e.$$.fragment,l),c=!0)},o(l){A(t.$$.fragment,l),A(i.$$.fragment,l),A(a.$$.fragment,l),A(e.$$.fragment,l),c=!1},d(l){D(t,l),l&&_(o),D(i,l),l&&_(r),D(a,l),l&&_(s),D(e,l)}}}function pt(n){let t,o,i,r,a,s,e,c;return{c(){t=P("p"),o=I("This page is an experiment to run simulation on the GPU."),i=B(),r=P("p"),a=I(`I am copying code from
                `),s=P("a"),e=I("this site"),c=I(`
                and adding basic typings for typescript.`),this.h()},l(l){t=U(l,"P",{});var u=y(t);o=X(u,"This page is an experiment to run simulation on the GPU."),u.forEach(_),i=C(l),r=U(l,"P",{});var f=y(r);a=X(f,`I am copying code from
                `),s=U(f,"A",{target:!0,href:!0});var d=y(s);e=X(d,"this site"),d.forEach(_),c=X(f,`
                and adding basic typings for typescript.`),f.forEach(_),this.h()},h(){E(s,"target","none"),E(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(l,u){$(l,t,u),z(t,o),$(l,i,u),$(l,r,u),z(r,a),z(r,s),z(s,e),z(r,c)},p:S,d(l){l&&_(t),l&&_(i),l&&_(r)}}}function _t(n){let t,o;return t=new et({}),{c(){R(t.$$.fragment)},l(i){w(t.$$.fragment,i)},m(i,r){F(t,i,r),o=!0},i(i){o||(v(t.$$.fragment,i),o=!0)},o(i){A(t.$$.fragment,i),o=!1},d(i){D(t,i)}}}function Tt(n){let t,o;return t=new it({}),{c(){R(t.$$.fragment)},l(i){w(t.$$.fragment,i)},m(i,r){F(t,i,r),o=!0},i(i){o||(v(t.$$.fragment,i),o=!0)},o(i){A(t.$$.fragment,i),o=!1},d(i){D(t,i)}}}function Et(n){let t,o;return t=new lt({}),{c(){R(t.$$.fragment)},l(i){w(t.$$.fragment,i)},m(i,r){F(t,i,r),o=!0},i(i){o||(v(t.$$.fragment,i),o=!0)},o(i){A(t.$$.fragment,i),o=!1},d(i){D(t,i)}}}function ht(n){let t,o,i,r,a,s,e,c,l,u;return t=new Ve({props:{$$slots:{default:[dt]},$$scope:{ctx:n}}}),i=new se({props:{$$slots:{default:[pt]},$$scope:{ctx:n}}}),a=new se({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}}),e=new se({props:{$$slots:{default:[Tt]},$$scope:{ctx:n}}}),l=new se({props:{$$slots:{default:[Et]},$$scope:{ctx:n}}}),{c(){R(t.$$.fragment),o=B(),R(i.$$.fragment),r=B(),R(a.$$.fragment),s=B(),R(e.$$.fragment),c=B(),R(l.$$.fragment)},l(f){w(t.$$.fragment,f),o=C(f),w(i.$$.fragment,f),r=C(f),w(a.$$.fragment,f),s=C(f),w(e.$$.fragment,f),c=C(f),w(l.$$.fragment,f)},m(f,d){F(t,f,d),$(f,o,d),F(i,f,d),$(f,r,d),F(a,f,d),$(f,s,d),F(e,f,d),$(f,c,d),F(l,f,d),u=!0},p(f,d){const T={};d&1&&(T.$$scope={dirty:d,ctx:f}),t.$set(T);const x={};d&1&&(x.$$scope={dirty:d,ctx:f}),i.$set(x);const b={};d&1&&(b.$$scope={dirty:d,ctx:f}),a.$set(b);const g={};d&1&&(g.$$scope={dirty:d,ctx:f}),e.$set(g);const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),l.$set(m)},i(f){u||(v(t.$$.fragment,f),v(i.$$.fragment,f),v(a.$$.fragment,f),v(e.$$.fragment,f),v(l.$$.fragment,f),u=!0)},o(f){A(t.$$.fragment,f),A(i.$$.fragment,f),A(a.$$.fragment,f),A(e.$$.fragment,f),A(l.$$.fragment,f),u=!1},d(f){D(t,f),f&&_(o),D(i,f),f&&_(r),D(a,f),f&&_(s),D(e,f),f&&_(c),D(l,f)}}}function $t(n){let t,o,i;return o=new Me({props:{$$slots:{default:[ht]},$$scope:{ctx:n}}}),{c(){t=P("div"),R(o.$$.fragment)},l(r){t=U(r,"DIV",{});var a=y(t);w(o.$$.fragment,a),a.forEach(_)},m(r,a){$(r,t,a),F(o,t,null),i=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),o.$set(s)},i(r){i||(v(o.$$.fragment,r),i=!0)},o(r){A(o.$$.fragment,r),i=!1},d(r){r&&_(t),D(o)}}}class xt extends N{constructor(t){super(),M(this,t,null,$t,G,{})}}function bt(n){let t,o;return t=new xt({}),{c(){R(t.$$.fragment)},l(i){w(t.$$.fragment,i)},m(i,r){F(t,i,r),o=!0},p:S,i(i){o||(v(t.$$.fragment,i),o=!0)},o(i){A(t.$$.fragment,i),o=!1},d(i){D(t,i)}}}class gt extends N{constructor(t){super(),M(this,t,null,bt,G,{})}}export{gt as default};
