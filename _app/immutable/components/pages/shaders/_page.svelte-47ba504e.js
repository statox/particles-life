import{S as z,i as G,s as V,C as de,k as U,l as y,m as P,h as d,n as A,b as x,K as Ee,E as pe,F as _e,G as he,f as b,t as R,H as ce,R as Xe,o as J,j as Me,Q as Oe,T as we,U as Ue,A as Ne,V as ze,g as Ge,d as Ve,q as B,a as C,r as L,c as I,D as M,B as X,p as fe,w as g,x as w,y as F,z as D}from"../../../chunks/index-ff9e742a.js";import{w as le}from"../../../chunks/index-84a8d4d9.js";let ke=1;function ye(){return`svelte-tabs-${ke++}`}function We(r){let e,i,n,o;const s=r[4].default,a=de(s,r,r[3],null);return{c(){e=U("div"),a&&a.c(),this.h()},l(t){e=y(t,"DIV",{class:!0});var c=P(e);a&&a.l(c),c.forEach(d),this.h()},h(){A(e,"class","svelte-tabs")},m(t,c){x(t,e,c),a&&a.m(e,null),i=!0,n||(o=Ee(e,"keydown",r[1]),n=!0)},p(t,[c]){a&&a.p&&(!i||c&8)&&pe(a,s,t,t[3],i?he(s,t[3],c,null):_e(t[3]),null)},i(t){i||(b(a,t),i=!0)},o(t){R(a,t),i=!1},d(t){t&&d(e),a&&a.d(t),n=!1,o()}}}const Ae={};function Ye(r,e,i){const n=r.indexOf(e);r.splice(n,1),i.update(o=>o===e?r[n]||r[r.length-1]:o)}function qe(r,e,i){let n,{$$slots:o={},$$scope:s}=e,{initialSelectedIndex:a=0}=e;const t=[],c=[],u=[],m=le({}),p=le({}),T=le(null);ce(r,T,f=>i(5,n=f));const h=le(null);function E(f,_,S){f.push(_),S.update(O=>O||_),Oe(()=>Ye(f,_,S))}function l(f){const _=c.indexOf(f);T.set(f),h.set(u[_])}Xe(Ae,{registerTab(f){E(c,f,T)},registerTabElement(f){t.push(f)},registerPanel(f){E(u,f,h)},selectTab:l,selectedTab:T,selectedPanel:h,controls:m,labeledBy:p}),J(()=>{l(c[a])}),Me(()=>{for(let f=0;f<c.length;f++)m.update(_=>({..._,[c[f].id]:u[f].id})),p.update(_=>({..._,[u[f].id]:c[f].id}))});async function $(f){if(f.target.classList.contains("svelte-tabs__tab")){let _=c.indexOf(n);switch(f.key){case"ArrowRight":_+=1,_>c.length-1&&(_=0),l(c[_]),t[_].focus();break;case"ArrowLeft":_-=1,_<0&&(_=c.length-1),l(c[_]),t[_].focus()}}}return r.$$set=f=>{"initialSelectedIndex"in f&&i(2,a=f.initialSelectedIndex),"$$scope"in f&&i(3,s=f.$$scope)},[T,$,a,s,o]}class He extends z{constructor(e){super(),G(this,e,qe,We,V,{initialSelectedIndex:2})}}function je(r){let e,i,n,o,s,a;const t=r[9].default,c=de(t,r,r[8],null);return{c(){e=U("li"),c&&c.c(),this.h()},l(u){e=y(u,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=P(e);c&&c.l(m),m.forEach(d),this.h()},h(){A(e,"role","tab"),A(e,"id",r[3].id),A(e,"aria-controls",i=r[2][r[3].id]),A(e,"aria-selected",r[1]),A(e,"tabindex",n=r[1]?0:-1),A(e,"class","svelte-tabs__tab svelte-1fbofsd"),we(e,"svelte-tabs__selected",r[1])},m(u,m){x(u,e,m),c&&c.m(e,null),r[10](e),o=!0,s||(a=Ee(e,"click",r[11]),s=!0)},p(u,[m]){c&&c.p&&(!o||m&256)&&pe(c,t,u,u[8],o?he(t,u[8],m,null):_e(u[8]),null),(!o||m&4&&i!==(i=u[2][u[3].id]))&&A(e,"aria-controls",i),(!o||m&2)&&A(e,"aria-selected",u[1]),(!o||m&2&&n!==(n=u[1]?0:-1))&&A(e,"tabindex",n),(!o||m&2)&&we(e,"svelte-tabs__selected",u[1])},i(u){o||(b(c,u),o=!0)},o(u){R(c,u),o=!1},d(u){u&&d(e),c&&c.d(u),r[10](null),s=!1,a()}}}function Ke(r,e,i){let n,o,{$$slots:s={},$$scope:a}=e,t;const c={id:ye()},{registerTab:u,registerTabElement:m,selectTab:p,selectedTab:T,controls:h}=Ue(Ae);ce(r,T,f=>i(7,n=f)),ce(r,h,f=>i(2,o=f));let E;u(c),J(async()=>{await Ne(),m(t)});function l(f){ze[f?"unshift":"push"](()=>{t=f,i(0,t)})}const $=()=>p(c);return r.$$set=f=>{"$$scope"in f&&i(8,a=f.$$scope)},r.$$.update=()=>{r.$$.dirty&128&&i(1,E=n===c)},[t,E,o,c,p,T,h,n,a,s,l,$]}class Z extends z{constructor(e){super(),G(this,e,Ke,je,V,{})}}function Qe(r){let e,i;const n=r[1].default,o=de(n,r,r[0],null);return{c(){e=U("ul"),o&&o.c(),this.h()},l(s){e=y(s,"UL",{role:!0,class:!0});var a=P(e);o&&o.l(a),a.forEach(d),this.h()},h(){A(e,"role","tablist"),A(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,a){x(s,e,a),o&&o.m(e,null),i=!0},p(s,[a]){o&&o.p&&(!i||a&1)&&pe(o,n,s,s[0],i?he(n,s[0],a,null):_e(s[0]),null)},i(s){i||(b(o,s),i=!0)},o(s){R(o,s),i=!1},d(s){s&&d(e),o&&o.d(s)}}}function Je(r,e,i){let{$$slots:n={},$$scope:o}=e;return r.$$set=s=>{"$$scope"in s&&i(0,o=s.$$scope)},[o,n]}class Ze extends z{constructor(e){super(),G(this,e,Je,Qe,V,{})}}function Fe(r){let e;const i=r[6].default,n=de(i,r,r[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,s){n&&n.m(o,s),e=!0},p(o,s){n&&n.p&&(!e||s&32)&&pe(n,i,o,o[5],e?he(i,o[5],s,null):_e(o[5]),null)},i(o){e||(b(n,o),e=!0)},o(o){R(n,o),e=!1},d(o){n&&n.d(o)}}}function et(r){let e,i,n,o=r[1]===r[2]&&Fe(r);return{c(){e=U("div"),o&&o.c(),this.h()},l(s){e=y(s,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=P(e);o&&o.l(a),a.forEach(d),this.h()},h(){A(e,"id",r[2].id),A(e,"aria-labelledby",i=r[0][r[2].id]),A(e,"class","svelte-tabs__tab-panel svelte-epfyet"),A(e,"role","tabpanel")},m(s,a){x(s,e,a),o&&o.m(e,null),n=!0},p(s,[a]){s[1]===s[2]?o?(o.p(s,a),a&2&&b(o,1)):(o=Fe(s),o.c(),b(o,1),o.m(e,null)):o&&(Ge(),R(o,1,1,()=>{o=null}),Ve()),(!n||a&1&&i!==(i=s[0][s[2].id]))&&A(e,"aria-labelledby",i)},i(s){n||(b(o),n=!0)},o(s){R(o),n=!1},d(s){s&&d(e),o&&o.d()}}}function tt(r,e,i){let n,o,{$$slots:s={},$$scope:a}=e;const t={id:ye()},{registerPanel:c,selectedPanel:u,labeledBy:m}=Ue(Ae);return ce(r,u,p=>i(1,o=p)),ce(r,m,p=>i(0,n=p)),c(t),r.$$set=p=>{"$$scope"in p&&i(5,a=p.$$scope)},[n,o,t,u,m,a,s]}class ee extends z{constructor(e){super(),G(this,e,tt,et,V,{})}}const nt=["VERTEX_SHADER","FRAGMENT_SHADER"];function $e(r){if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function ae(r,e,i,n){const o=r.createTexture();if(!o)throw"Can not create texture";return r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,i,n,0,r.RGBA,r.FLOAT,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),o}function De(r,e){const i=r.createFramebuffer();if(!i)throw"Can not create frame buffer";return r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0),i}function Q(r,e,i,n,o){const s=[];for(let t=0;t<e.length;++t){const c=nt[t]==="VERTEX_SHADER"?r.VERTEX_SHADER:r.FRAGMENT_SHADER,u=ot(r,e[t],c,o);if(!u)throw"Can not create shader";s.push(u)}const a=it(r,s,i,n,o);if(!a)throw"Can not create program";return a}function ot(r,e,i,n){const o=n||console.log,s=r.createShader(i);if(!s)throw"Could not load shader";if(r.shaderSource(s,e),r.compileShader(s),!r.getShaderParameter(s,r.COMPILE_STATUS)){const t=r.getShaderInfoLog(s);return o(new Error("*** Error compiling shader '"+s+"':"+t+`
`+e.split(`
`).map((c,u)=>`${u+1}: ${c}`).join(`
`))),r.deleteShader(s),null}return s}function it(r,e,i,n,o){const s=o||console.log,a=r.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(c){r.attachShader(a,c)}),i&&i.forEach(function(c,u){r.bindAttribLocation(a,n?n[u]:u,c)}),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS)){const c=r.getProgramInfoLog(a);return s("Error in program linking:"+c),r.deleteProgram(a),null}return a}function W(r,e){e=e||1;const i=r.clientWidth*e|0,n=r.clientHeight*e|0;return r.width!==i||r.height!==n?(r.width=i,r.height=n,!0):!1}function rt(r){let e,i,n,o,s,a;return{c(){e=U("p"),i=B(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=C(),o=U("ul"),s=C(),a=U("canvas"),this.h()},l(t){e=y(t,"P",{});var c=P(e);i=L(c,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),c.forEach(d),n=I(t),o=y(t,"UL",{id:!0}),P(o).forEach(d),s=I(t),a=y(t,"CANVAS",{id:!0}),P(a).forEach(d),this.h()},h(){A(o,"id","result"),A(a,"id","canvas")},m(t,c){x(t,e,c),M(e,i),x(t,n,c),x(t,o,c),x(t,s,c),x(t,a,c)},p:X,i:X,o:X,d(t){t&&d(e),t&&d(n),t&&d(o),t&&d(s),t&&d(a)}}}function st(r){const e=document.createElement("li");e.textContent=r.toString();const i=document.getElementById("result");if(!i)throw"result element undefined";i.appendChild(e)}function at(r){function e(){const i=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=3;const t=a.getContext("webgl");if(!t)throw"Coulndt get context";const c=Q(t,[i,n]);if(!c)throw"Could not get program";const u=t.getAttribLocation(c,"position"),m=t.getUniformLocation(c,"srcTex"),p=t.getUniformLocation(c,"srcDimensions"),T=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,T),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0);const h=3,E=3,l=t.createTexture();t.bindTexture(t.TEXTURE_2D,l),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,h,E,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(c),t.uniform1i(m,0),t.uniform2f(p,h,E),t.drawArrays(t.TRIANGLES,0,6);const $=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,$);for(let f=0;f<3*3;++f)st($[f*4])}return J(e),[]}class ct extends z{constructor(e){super(),G(this,e,at,rt,V,{})}}const ft=Float32Array;function Pe(r,e,i,n,o,s){const a=new ft(16);return a[0]=2/(e-r),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-i),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-s),a[11]=0,a[12]=(r+e)/(r-e),a[13]=(i+n)/(i-n),a[14]=(o+s)/(o-s),a[15]=1,a}function ut(r){let e;return{c(){e=U("canvas"),this.h()},l(i){e=y(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(e).forEach(d),this.h()},h(){A(e,"id","canvas"),fe(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(i,n){x(i,e,n)},p:X,i:X,o:X,d(i){i&&d(e)}}}function lt(r){function e(){const i=`
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
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const t=a.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const m=Q(t,[i,n]),p=Q(t,[o,s]);if(!m||!p)throw"Can not create programs";const T={position:t.getAttribLocation(m,"position"),positionTex:t.getUniformLocation(m,"positionTex"),velocityTex:t.getUniformLocation(m,"velocityTex"),texDimensions:t.getUniformLocation(m,"texDimensions"),canvasDimensions:t.getUniformLocation(m,"canvasDimensions"),deltaTime:t.getUniformLocation(m,"deltaTime")},h={id:t.getAttribLocation(p,"id"),positionTex:t.getUniformLocation(p,"positionTex"),texDimensions:t.getUniformLocation(p,"texDimensions"),matrix:t.getUniformLocation(p,"matrix")},E=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,E),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const l=300,$=20,f=l*$,_=new Array(f).fill(0).map((v,k)=>k),S=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,S),t.bufferData(t.ARRAY_BUFFER,new Float32Array(_),t.STATIC_DRAW),W(t.canvas);const O=(v,k)=>(k===void 0&&(k=v,v=0),Math.random()*(k-v)+v),Y=new Float32Array(_.map(v=>[O(a.width),O(a.height),0,0]).flat()),q=new Float32Array(_.map(v=>[O(-300,300),O(-300,300),0,0]).flat());function N(v,k,ne,Ie){const ge=v.createTexture();return v.bindTexture(v.TEXTURE_2D,ge),v.texImage2D(v.TEXTURE_2D,0,v.RGBA,ne,Ie,0,v.RGBA,v.FLOAT,k),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE),ge}const H=N(t,q,l,$),j=N(t,Y,l,$),K=N(t,null,l,$);if(!j||!K)throw"Can not create position textures";function te(v,k){const ne=v.createFramebuffer();return v.bindFramebuffer(v.FRAMEBUFFER,ne),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,k,0),ne}const Te=te(t,j),xe=te(t,K);let ve={fb:Te,tex:j},ue={fb:xe,tex:K},be=0;function Re(v){if(!t)return;v*=.001;const k=v-be;be=v,W(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,ue.fb),t.viewport(0,0,l,$),t.bindBuffer(t.ARRAY_BUFFER,E),t.enableVertexAttribArray(T.position),t.vertexAttribPointer(T.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ve.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,H),t.useProgram(m),t.uniform1i(T.positionTex,0),t.uniform1i(T.velocityTex,1),t.uniform2f(T.texDimensions,l,$),t.uniform2f(T.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(T.deltaTime,k),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,S),t.enableVertexAttribArray(h.id),t.vertexAttribPointer(h.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ue.tex),t.useProgram(p),t.uniform2f(h.texDimensions,l,l),t.uniform1i(h.positionTex,0),t.uniformMatrix4fv(h.matrix,!1,Pe(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,f);{const ne=ve;ve=ue,ue=ne}requestAnimationFrame(Re)}requestAnimationFrame(Re)}return J(()=>e()),[]}class mt extends z{constructor(e){super(),G(this,e,lt,ut,V,{})}}const me=(r,e)=>(e===void 0&&(e=r,r=0),Math.random()*(e-r)+r);function dt(r,e,i,n){const o=r*e,s=new Array(o).fill(0).map((c,u)=>u),a=new Float32Array(s.map(c=>[me(i),me(n),0,0]).flat()),t=new Float32Array(s.map(c=>[me(-300,300),me(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(s),positions:a,velocities:t}}const pt=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,_t=`precision highp float;

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

`,ht=`  attribute float id;
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

`,$t=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function Tt(r){let e;return{c(){e=U("canvas"),this.h()},l(i){e=y(i,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(e).forEach(d),this.h()},h(){A(e,"id","canvas"),fe(e,"background-color","black"),A(e,"width","800"),A(e,"height","600")},m(i,n){x(i,e,n)},p:X,i:X,o:X,d(i){i&&d(e)}}}function xt(r){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const s=o.getContext("webgl");if(!s)throw"gl undefined";$e(s);const a=Q(s,[pt,_t]),t=Q(s,[ht,$t]),c={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},u={id:s.getAttribLocation(t,"id"),positionTex:s.getUniformLocation(t,"positionTex"),texDimensions:s.getUniformLocation(t,"texDimensions"),matrix:s.getUniformLocation(t,"matrix")},m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const p=300,T=20,{numParticles:h,ids:E,positions:l,velocities:$}=dt(p,T,o.width,o.height),f=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,f),s.bufferData(s.ARRAY_BUFFER,new Float32Array(E),s.STATIC_DRAW),W(s.canvas);const _=ae(s,$,p,T),S=ae(s,l,p,T),O=ae(s,null,p,T),Y=De(s,S),q=De(s,O);let N={fb:Y,tex:S},H={fb:q,tex:O},j=0;function K(te){if(!s||!m||!f)throw"Undefined params to render";te*=.001;const Te=te-j;j=te,W(s.canvas),n(s,H,p,T,m,c,N,_,a,Te),i(s,p,f,u,H,t,h);{const xe=N;N=H,H=xe}requestAnimationFrame(K)}requestAnimationFrame(K)}const i=(o,s,a,t,c,u,m)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,a),o.enableVertexAttribArray(t.id),o.vertexAttribPointer(t.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,c.tex),o.useProgram(u),o.uniform2f(t.texDimensions,s,s),o.uniform1i(t.positionTex,0),o.uniformMatrix4fv(t.matrix,!1,Pe(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,m)},n=(o,s,a,t,c,u,m,p,T,h)=>{o.bindFramebuffer(o.FRAMEBUFFER,s.fb),o.viewport(0,0,a,t),o.bindBuffer(o.ARRAY_BUFFER,c),o.enableVertexAttribArray(u.position),o.vertexAttribPointer(u.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,m.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,p),o.useProgram(T),o.uniform1i(u.positionTex,0),o.uniform1i(u.velocityTex,1),o.uniform2f(u.texDimensions,a,t),o.uniform2f(u.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(u.deltaTime,h),o.drawArrays(o.TRIANGLES,0,6)};return J(()=>e()),[]}class vt extends z{constructor(e){super(),G(this,e,xt,Tt,V,{})}}const Et=`attribute vec2 a_position;

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
`,At=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function bt(r){let e,i,n,o,s,a,t,c,u,m,p,T;return{c(){e=U("p"),i=B(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=U("code"),o=B("requestAnimationFrame"),s=B(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),a=C(),t=U("canvas"),c=C(),u=U("button"),m=B("Add position"),this.h()},l(h){e=y(h,"P",{});var E=P(e);i=L(E,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=y(E,"CODE",{});var l=P(n);o=L(l,"requestAnimationFrame"),l.forEach(d),s=L(E,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),E.forEach(d),a=I(h),t=y(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(t).forEach(d),c=I(h),u=y(h,"BUTTON",{});var $=P(u);m=L($,"Add position"),$.forEach(d),this.h()},h(){A(t,"id","canvas"),fe(t,"background-color","black"),A(t,"width","800"),A(t,"height","600")},m(h,E){x(h,e,E),M(e,i),M(e,n),M(n,o),M(e,s),x(h,a,E),x(h,t,E),x(h,c,E),x(h,u,E),M(u,m),p||(T=Ee(u,"click",r[1]),p=!0)},p:X,i:X,o:X,d(h){h&&d(e),h&&d(a),h&&d(t),h&&d(c),h&&d(u),p=!1,T()}}}function Rt(r){const e=[50,50,50,150,150,150,150,50,200,200];function i(){const s=document.getElementById("canvas");if(!s)throw"canvas undefined";const a=s.getContext("webgl");if(!a)throw"gl undefined";$e(a);const t=Q(a,[Et,At]);W(a.canvas);const c=a.getAttribLocation(t,"a_position"),u=a.getUniformLocation(t,"u_resolution"),m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW);function p(){if(!a)throw"Undefined params to render";for(let S=0;S<=e.length-2;S+=2)e[S]=(e[S]+Math.random()*2-1)%a.canvas.width,e[S+1]=(e[S+1]+Math.random()*0+1)%a.canvas.height;a.bufferData(a.ARRAY_BUFFER,new Float32Array(e),a.STATIC_DRAW),W(a.canvas),a.viewport(0,0,a.canvas.width,a.canvas.height),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(t),a.uniform2f(u,a.canvas.width,a.canvas.height),a.enableVertexAttribArray(c),a.bindBuffer(a.ARRAY_BUFFER,m);const T=2,h=a.FLOAT,E=!1,l=0,$=0;a.vertexAttribPointer(c,T,h,E,l,$);var f=a.POINTS,_=e.length/2;a.drawArrays(f,$,_),requestAnimationFrame(p)}requestAnimationFrame(p)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return J(()=>i()),[n,()=>n()]}class gt extends z{constructor(e){super(),G(this,e,Rt,bt,V,{})}}const wt=`attribute float id;
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
`,Ft=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let oe,ie;const Dt=r=>{ie=Q(r,[wt,Ft]),oe={idAttributeLocation:r.getAttribLocation(ie,"id"),texDimensionsUniformLocation:r.getUniformLocation(ie,"texDimensions"),resolutionUniformLocation:r.getUniformLocation(ie,"u_resolution")}},Ut=r=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=r;W(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(ie),e.uniform2f(oe.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(oe.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(oe.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,s);const a=1,t=e.FLOAT,c=!1,u=0,m=0;e.vertexAttribPointer(oe.idAttributeLocation,a,t,c,u,m);const p=e.POINTS,T=o.length;e.drawArrays(p,m,T)};function yt(r){let e,i,n,o,s,a,t;return{c(){e=U("p"),i=B("Create an array of render-size positions. Store this array in a texture. In each "),n=U("code"),o=B("requestAnimationFrame"),s=B(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),a=C(),t=U("canvas"),this.h()},l(c){e=y(c,"P",{});var u=P(e);i=L(u,"Create an array of render-size positions. Store this array in a texture. In each "),n=y(u,"CODE",{});var m=P(n);o=L(m,"requestAnimationFrame"),m.forEach(d),s=L(u,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),u.forEach(d),a=I(c),t=y(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(t).forEach(d),this.h()},h(){A(t,"id","canvas"),fe(t,"background-color","black"),A(t,"width",Be),A(t,"height",Le)},m(c,u){x(c,e,u),M(e,i),M(e,n),M(n,o),M(e,s),x(c,a,u),x(c,t,u)},p:X,i:X,o:X,d(c){c&&d(e),c&&d(a),c&&d(t)}}}const Be=800,Le=600;function Pt(r){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";$e(n),W(n.canvas),Dt(n);const o=[0,1,2,3,4,5,6,7,8,9],s=o.map(t=>[Math.random()*Be,Math.random()*Le,0,0]).flat();function a(){if(!n)throw"Undefined params to render";for(let c=0;c<=s.length-2;c+=2)s[c]=(s[c]+Math.random()*2-1)%n.canvas.width,s[c+1]=(s[c+1]+Math.random()*0+1)%n.canvas.height;const t=ae(n,new Float32Array(s),3,3);Ut({gl:n,positionTex:t,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(a)}requestAnimationFrame(a)}return J(()=>e()),[]}let Bt=class extends z{constructor(e){super(),G(this,e,Pt,yt,V,{})}};const Lt=`attribute float id;
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
`,St=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let re,se;const Ct=r=>{se=Q(r,[Lt,St]),re={idAttributeLocation:r.getAttribLocation(se,"id"),texDimensionsUniformLocation:r.getUniformLocation(se,"texDimensions"),resolutionUniformLocation:r.getUniformLocation(se,"u_resolution")}},It=r=>{const{gl:e,positionTex:i,textureDimension:n,ids:o}=r;W(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.useProgram(se),e.uniform2f(re.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(re.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(re.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,s);const a=1,t=e.FLOAT,c=!1,u=0,m=0;e.vertexAttribPointer(re.idAttributeLocation,a,t,c,u,m);const p=e.POINTS,T=o.length;e.drawArrays(p,m,T)};function Xt(r){let e,i,n,o,s,a,t;return{c(){e=U("p"),i=B("Create an array of render-size positions. Store this array in a texture. In each "),n=U("code"),o=B("requestAnimationFrame"),s=B(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),a=C(),t=U("canvas"),this.h()},l(c){e=y(c,"P",{});var u=P(e);i=L(u,"Create an array of render-size positions. Store this array in a texture. In each "),n=y(u,"CODE",{});var m=P(n);o=L(m,"requestAnimationFrame"),m.forEach(d),s=L(u,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),u.forEach(d),a=I(c),t=y(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),P(t).forEach(d),this.h()},h(){A(t,"id","canvas"),fe(t,"background-color","black"),A(t,"width",Se),A(t,"height",Ce)},m(c,u){x(c,e,u),M(e,i),M(e,n),M(n,o),M(e,s),x(c,a,u),x(c,t,u)},p:X,i:X,o:X,d(c){c&&d(e),c&&d(a),c&&d(t)}}}const Se=800,Ce=600;function Mt(r){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const n=i.getContext("webgl");if(!n)throw"gl undefined";$e(n),W(n.canvas),Ct(n);const o=[0,1,2,3,4,5,6,7,8,9],s=o.map(t=>[Math.random()*Se,Math.random()*Ce,0,0]).flat();function a(){if(!n)throw"Undefined params to render";for(let c=0;c<=s.length-2;c+=2)s[c]=(s[c]+Math.random()*2-1)%n.canvas.width,s[c+1]=(s[c+1]+Math.random()*0+1)%n.canvas.height;const t=ae(n,new Float32Array(s),3,3);It({gl:n,positionTex:t,textureDimension:{width:3,height:3},ids:o}),requestAnimationFrame(a)}requestAnimationFrame(a)}return J(()=>e()),[]}class Ot extends z{constructor(e){super(),G(this,e,Mt,Xt,V,{})}}function Nt(r){let e;return{c(){e=B("About")},l(i){e=L(i,"About")},m(i,n){x(i,e,n)},d(i){i&&d(e)}}}function zt(r){let e;return{c(){e=B("Simple counter")},l(i){e=L(i,"Simple counter")},m(i,n){x(i,e,n)},d(i){i&&d(e)}}}function Gt(r){let e;return{c(){e=B("Particles")},l(i){e=L(i,"Particles")},m(i,n){x(i,e,n)},d(i){i&&d(e)}}}function Vt(r){let e;return{c(){e=B("Particles 2")},l(i){e=L(i,"Particles 2")},m(i,n){x(i,e,n)},d(i){i&&d(e)}}}function kt(r){let e;return{c(){e=B("Positions Buffer")},l(i){e=L(i,"Positions Buffer")},m(i,n){x(i,e,n)},d(i){i&&d(e)}}}function Wt(r){let e;return{c(){e=B("Positions Texture")},l(i){e=L(i,"Positions Texture")},m(i,n){x(i,e,n)},d(i){i&&d(e)}}}function Yt(r){let e;return{c(){e=B("Positions Texture Draw & Update")},l(i){e=L(i,"Positions Texture Draw & Update")},m(i,n){x(i,e,n)},d(i){i&&d(e)}}}function qt(r){let e,i,n,o,s,a,t,c,u,m,p,T,h,E;return e=new Z({props:{$$slots:{default:[Nt]},$$scope:{ctx:r}}}),n=new Z({props:{$$slots:{default:[zt]},$$scope:{ctx:r}}}),s=new Z({props:{$$slots:{default:[Gt]},$$scope:{ctx:r}}}),t=new Z({props:{$$slots:{default:[Vt]},$$scope:{ctx:r}}}),u=new Z({props:{$$slots:{default:[kt]},$$scope:{ctx:r}}}),p=new Z({props:{$$slots:{default:[Wt]},$$scope:{ctx:r}}}),h=new Z({props:{$$slots:{default:[Yt]},$$scope:{ctx:r}}}),{c(){g(e.$$.fragment),i=C(),g(n.$$.fragment),o=C(),g(s.$$.fragment),a=C(),g(t.$$.fragment),c=C(),g(u.$$.fragment),m=C(),g(p.$$.fragment),T=C(),g(h.$$.fragment)},l(l){w(e.$$.fragment,l),i=I(l),w(n.$$.fragment,l),o=I(l),w(s.$$.fragment,l),a=I(l),w(t.$$.fragment,l),c=I(l),w(u.$$.fragment,l),m=I(l),w(p.$$.fragment,l),T=I(l),w(h.$$.fragment,l)},m(l,$){F(e,l,$),x(l,i,$),F(n,l,$),x(l,o,$),F(s,l,$),x(l,a,$),F(t,l,$),x(l,c,$),F(u,l,$),x(l,m,$),F(p,l,$),x(l,T,$),F(h,l,$),E=!0},p(l,$){const f={};$&1&&(f.$$scope={dirty:$,ctx:l}),e.$set(f);const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),n.$set(_);const S={};$&1&&(S.$$scope={dirty:$,ctx:l}),s.$set(S);const O={};$&1&&(O.$$scope={dirty:$,ctx:l}),t.$set(O);const Y={};$&1&&(Y.$$scope={dirty:$,ctx:l}),u.$set(Y);const q={};$&1&&(q.$$scope={dirty:$,ctx:l}),p.$set(q);const N={};$&1&&(N.$$scope={dirty:$,ctx:l}),h.$set(N)},i(l){E||(b(e.$$.fragment,l),b(n.$$.fragment,l),b(s.$$.fragment,l),b(t.$$.fragment,l),b(u.$$.fragment,l),b(p.$$.fragment,l),b(h.$$.fragment,l),E=!0)},o(l){R(e.$$.fragment,l),R(n.$$.fragment,l),R(s.$$.fragment,l),R(t.$$.fragment,l),R(u.$$.fragment,l),R(p.$$.fragment,l),R(h.$$.fragment,l),E=!1},d(l){D(e,l),l&&d(i),D(n,l),l&&d(o),D(s,l),l&&d(a),D(t,l),l&&d(c),D(u,l),l&&d(m),D(p,l),l&&d(T),D(h,l)}}}function Ht(r){let e,i,n,o,s,a,t,c;return{c(){e=U("p"),i=B("This page is an experiment to run simulation on the GPU."),n=C(),o=U("p"),s=B(`I am copying code from
                `),a=U("a"),t=B("this site"),c=B(`
                and adding basic typings for typescript.`),this.h()},l(u){e=y(u,"P",{});var m=P(e);i=L(m,"This page is an experiment to run simulation on the GPU."),m.forEach(d),n=I(u),o=y(u,"P",{});var p=P(o);s=L(p,`I am copying code from
                `),a=y(p,"A",{target:!0,href:!0});var T=P(a);t=L(T,"this site"),T.forEach(d),c=L(p,`
                and adding basic typings for typescript.`),p.forEach(d),this.h()},h(){A(a,"target","none"),A(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(u,m){x(u,e,m),M(e,i),x(u,n,m),x(u,o,m),M(o,s),M(o,a),M(a,t),M(o,c)},p:X,d(u){u&&d(e),u&&d(n),u&&d(o)}}}function jt(r){let e,i;return e=new ct({}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){F(e,n,o),i=!0},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function Kt(r){let e,i;return e=new mt({}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){F(e,n,o),i=!0},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function Qt(r){let e,i;return e=new vt({}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){F(e,n,o),i=!0},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function Jt(r){let e,i;return e=new gt({}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){F(e,n,o),i=!0},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function Zt(r){let e,i;return e=new Bt({}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){F(e,n,o),i=!0},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function en(r){let e,i;return e=new Ot({}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){F(e,n,o),i=!0},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function tn(r){let e,i,n,o,s,a,t,c,u,m,p,T,h,E,l,$;return e=new Ze({props:{$$slots:{default:[qt]},$$scope:{ctx:r}}}),n=new ee({props:{$$slots:{default:[Ht]},$$scope:{ctx:r}}}),s=new ee({props:{$$slots:{default:[jt]},$$scope:{ctx:r}}}),t=new ee({props:{$$slots:{default:[Kt]},$$scope:{ctx:r}}}),u=new ee({props:{$$slots:{default:[Qt]},$$scope:{ctx:r}}}),p=new ee({props:{$$slots:{default:[Jt]},$$scope:{ctx:r}}}),h=new ee({props:{$$slots:{default:[Zt]},$$scope:{ctx:r}}}),l=new ee({props:{$$slots:{default:[en]},$$scope:{ctx:r}}}),{c(){g(e.$$.fragment),i=C(),g(n.$$.fragment),o=C(),g(s.$$.fragment),a=C(),g(t.$$.fragment),c=C(),g(u.$$.fragment),m=C(),g(p.$$.fragment),T=C(),g(h.$$.fragment),E=C(),g(l.$$.fragment)},l(f){w(e.$$.fragment,f),i=I(f),w(n.$$.fragment,f),o=I(f),w(s.$$.fragment,f),a=I(f),w(t.$$.fragment,f),c=I(f),w(u.$$.fragment,f),m=I(f),w(p.$$.fragment,f),T=I(f),w(h.$$.fragment,f),E=I(f),w(l.$$.fragment,f)},m(f,_){F(e,f,_),x(f,i,_),F(n,f,_),x(f,o,_),F(s,f,_),x(f,a,_),F(t,f,_),x(f,c,_),F(u,f,_),x(f,m,_),F(p,f,_),x(f,T,_),F(h,f,_),x(f,E,_),F(l,f,_),$=!0},p(f,_){const S={};_&1&&(S.$$scope={dirty:_,ctx:f}),e.$set(S);const O={};_&1&&(O.$$scope={dirty:_,ctx:f}),n.$set(O);const Y={};_&1&&(Y.$$scope={dirty:_,ctx:f}),s.$set(Y);const q={};_&1&&(q.$$scope={dirty:_,ctx:f}),t.$set(q);const N={};_&1&&(N.$$scope={dirty:_,ctx:f}),u.$set(N);const H={};_&1&&(H.$$scope={dirty:_,ctx:f}),p.$set(H);const j={};_&1&&(j.$$scope={dirty:_,ctx:f}),h.$set(j);const K={};_&1&&(K.$$scope={dirty:_,ctx:f}),l.$set(K)},i(f){$||(b(e.$$.fragment,f),b(n.$$.fragment,f),b(s.$$.fragment,f),b(t.$$.fragment,f),b(u.$$.fragment,f),b(p.$$.fragment,f),b(h.$$.fragment,f),b(l.$$.fragment,f),$=!0)},o(f){R(e.$$.fragment,f),R(n.$$.fragment,f),R(s.$$.fragment,f),R(t.$$.fragment,f),R(u.$$.fragment,f),R(p.$$.fragment,f),R(h.$$.fragment,f),R(l.$$.fragment,f),$=!1},d(f){D(e,f),f&&d(i),D(n,f),f&&d(o),D(s,f),f&&d(a),D(t,f),f&&d(c),D(u,f),f&&d(m),D(p,f),f&&d(T),D(h,f),f&&d(E),D(l,f)}}}function nn(r){let e,i,n;return i=new He({props:{$$slots:{default:[tn]},$$scope:{ctx:r}}}),{c(){e=U("div"),g(i.$$.fragment)},l(o){e=y(o,"DIV",{});var s=P(e);w(i.$$.fragment,s),s.forEach(d)},m(o,s){x(o,e,s),F(i,e,null),n=!0},p(o,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:o}),i.$set(a)},i(o){n||(b(i.$$.fragment,o),n=!0)},o(o){R(i.$$.fragment,o),n=!1},d(o){o&&d(e),D(i)}}}class on extends z{constructor(e){super(),G(this,e,null,nn,V,{})}}function rn(r){let e,i;return e=new on({}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){F(e,n,o),i=!0},p:X,i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){R(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}class fn extends z{constructor(e){super(),G(this,e,null,rn,V,{})}}export{fn as default};
