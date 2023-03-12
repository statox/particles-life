import{S as G,i as W,s as k,C as re,k as U,l as P,m as y,h as _,n as E,b as h,K as Ae,E as se,F as ae,G as ce,f as b,t as R,H as te,R as Ue,o as J,j as Pe,Q as ye,T as ve,U as Re,A as Be,V as Se,g as Le,d as Ce,q as C,a as S,r as I,c as L,D as O,B,p as _e,w,x as F,y as g,z as D}from"../../../chunks/index-ff9e742a.js";import{w as oe}from"../../../chunks/index-84a8d4d9.js";let Ie=1;function we(){return`svelte-tabs-${Ie++}`}function Xe(i){let e,r,n,o;const s=i[4].default,a=re(s,i,i[3],null);return{c(){e=U("div"),a&&a.c(),this.h()},l(t){e=P(t,"DIV",{class:!0});var c=y(e);a&&a.l(c),c.forEach(_),this.h()},h(){E(e,"class","svelte-tabs")},m(t,c){h(t,e,c),a&&a.m(e,null),r=!0,n||(o=Ae(e,"keydown",i[1]),n=!0)},p(t,[c]){a&&a.p&&(!r||c&8)&&se(a,s,t,t[3],r?ce(s,t[3],c,null):ae(t[3]),null)},i(t){r||(b(a,t),r=!0)},o(t){R(a,t),r=!1},d(t){t&&_(e),a&&a.d(t),n=!1,o()}}}const Te={};function Ne(i,e,r){const n=i.indexOf(e);i.splice(n,1),r.update(o=>o===e?i[n]||i[i.length-1]:o)}function Me(i,e,r){let n,{$$slots:o={},$$scope:s}=e,{initialSelectedIndex:a=0}=e;const t=[],c=[],f=[],d=oe({}),l=oe({}),p=oe(null);te(i,p,m=>r(5,n=m));const u=oe(null);function T(m,v,N){m.push(v),N.update(X=>X||v),ye(()=>Ne(m,v,N))}function x(m){const v=c.indexOf(m);p.set(m),u.set(f[v])}Ue(Te,{registerTab(m){T(c,m,p)},registerTabElement(m){t.push(m)},registerPanel(m){T(f,m,u)},selectTab:x,selectedTab:p,selectedPanel:u,controls:d,labeledBy:l}),J(()=>{x(c[a])}),Pe(()=>{for(let m=0;m<c.length;m++)d.update(v=>({...v,[c[m].id]:f[m].id})),l.update(v=>({...v,[f[m].id]:c[m].id}))});async function A(m){if(m.target.classList.contains("svelte-tabs__tab")){let v=c.indexOf(n);switch(m.key){case"ArrowRight":v+=1,v>c.length-1&&(v=0),x(c[v]),t[v].focus();break;case"ArrowLeft":v-=1,v<0&&(v=c.length-1),x(c[v]),t[v].focus()}}}return i.$$set=m=>{"initialSelectedIndex"in m&&r(2,a=m.initialSelectedIndex),"$$scope"in m&&r(3,s=m.$$scope)},[p,A,a,s,o]}class Oe extends G{constructor(e){super(),W(this,e,Me,Xe,k,{initialSelectedIndex:2})}}function Ge(i){let e,r,n,o,s,a;const t=i[9].default,c=re(t,i,i[8],null);return{c(){e=U("li"),c&&c.c(),this.h()},l(f){e=P(f,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=y(e);c&&c.l(d),d.forEach(_),this.h()},h(){E(e,"role","tab"),E(e,"id",i[3].id),E(e,"aria-controls",r=i[2][i[3].id]),E(e,"aria-selected",i[1]),E(e,"tabindex",n=i[1]?0:-1),E(e,"class","svelte-tabs__tab svelte-1fbofsd"),ve(e,"svelte-tabs__selected",i[1])},m(f,d){h(f,e,d),c&&c.m(e,null),i[10](e),o=!0,s||(a=Ae(e,"click",i[11]),s=!0)},p(f,[d]){c&&c.p&&(!o||d&256)&&se(c,t,f,f[8],o?ce(t,f[8],d,null):ae(f[8]),null),(!o||d&4&&r!==(r=f[2][f[3].id]))&&E(e,"aria-controls",r),(!o||d&2)&&E(e,"aria-selected",f[1]),(!o||d&2&&n!==(n=f[1]?0:-1))&&E(e,"tabindex",n),(!o||d&2)&&ve(e,"svelte-tabs__selected",f[1])},i(f){o||(b(c,f),o=!0)},o(f){R(c,f),o=!1},d(f){f&&_(e),c&&c.d(f),i[10](null),s=!1,a()}}}function We(i,e,r){let n,o,{$$slots:s={},$$scope:a}=e,t;const c={id:we()},{registerTab:f,registerTabElement:d,selectTab:l,selectedTab:p,controls:u}=Re(Te);te(i,p,m=>r(7,n=m)),te(i,u,m=>r(2,o=m));let T;f(c),J(async()=>{await Be(),d(t)});function x(m){Se[m?"unshift":"push"](()=>{t=m,r(0,t)})}const A=()=>l(c);return i.$$set=m=>{"$$scope"in m&&r(8,a=m.$$scope)},i.$$.update=()=>{i.$$.dirty&128&&r(1,T=n===c)},[t,T,o,c,l,p,u,n,a,s,x,A]}class Z extends G{constructor(e){super(),W(this,e,We,Ge,k,{})}}function ke(i){let e,r;const n=i[1].default,o=re(n,i,i[0],null);return{c(){e=U("ul"),o&&o.c(),this.h()},l(s){e=P(s,"UL",{role:!0,class:!0});var a=y(e);o&&o.l(a),a.forEach(_),this.h()},h(){E(e,"role","tablist"),E(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,a){h(s,e,a),o&&o.m(e,null),r=!0},p(s,[a]){o&&o.p&&(!r||a&1)&&se(o,n,s,s[0],r?ce(n,s[0],a,null):ae(s[0]),null)},i(s){r||(b(o,s),r=!0)},o(s){R(o,s),r=!1},d(s){s&&_(e),o&&o.d(s)}}}function Ve(i,e,r){let{$$slots:n={},$$scope:o}=e;return i.$$set=s=>{"$$scope"in s&&r(0,o=s.$$scope)},[o,n]}class Ye extends G{constructor(e){super(),W(this,e,Ve,ke,k,{})}}function xe(i){let e;const r=i[6].default,n=re(r,i,i[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,s){n&&n.m(o,s),e=!0},p(o,s){n&&n.p&&(!e||s&32)&&se(n,r,o,o[5],e?ce(r,o[5],s,null):ae(o[5]),null)},i(o){e||(b(n,o),e=!0)},o(o){R(n,o),e=!1},d(o){n&&n.d(o)}}}function ze(i){let e,r,n,o=i[1]===i[2]&&xe(i);return{c(){e=U("div"),o&&o.c(),this.h()},l(s){e=P(s,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=y(e);o&&o.l(a),a.forEach(_),this.h()},h(){E(e,"id",i[2].id),E(e,"aria-labelledby",r=i[0][i[2].id]),E(e,"class","svelte-tabs__tab-panel svelte-epfyet"),E(e,"role","tabpanel")},m(s,a){h(s,e,a),o&&o.m(e,null),n=!0},p(s,[a]){s[1]===s[2]?o?(o.p(s,a),a&2&&b(o,1)):(o=xe(s),o.c(),b(o,1),o.m(e,null)):o&&(Le(),R(o,1,1,()=>{o=null}),Ce()),(!n||a&1&&r!==(r=s[0][s[2].id]))&&E(e,"aria-labelledby",r)},i(s){n||(b(o),n=!0)},o(s){R(o),n=!1},d(s){s&&_(e),o&&o.d()}}}function He(i,e,r){let n,o,{$$slots:s={},$$scope:a}=e;const t={id:we()},{registerPanel:c,selectedPanel:f,labeledBy:d}=Re(Te);return te(i,f,l=>r(1,o=l)),te(i,d,l=>r(0,n=l)),c(t),i.$$set=l=>{"$$scope"in l&&r(5,a=l.$$scope)},[n,o,t,f,d,a,s]}class ee extends G{constructor(e){super(),W(this,e,He,ze,k,{})}}const qe=["VERTEX_SHADER","FRAGMENT_SHADER"];function Fe(i){if(!i.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!i.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function pe(i,e,r,n){const o=i.createTexture();if(!o)throw"Can not create texture";return i.bindTexture(i.TEXTURE_2D,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,r,n,0,i.RGBA,i.FLOAT,e),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),o}function be(i,e){const r=i.createFramebuffer();if(!r)throw"Can not create frame buffer";return i.bindFramebuffer(i.FRAMEBUFFER,r),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,e,0),r}function K(i,e,r,n,o){const s=[];for(let t=0;t<e.length;++t){const c=qe[t]==="VERTEX_SHADER"?i.VERTEX_SHADER:i.FRAGMENT_SHADER,f=je(i,e[t],c,o);if(!f)throw"Can not create shader";s.push(f)}const a=Ke(i,s,r,n,o);if(!a)throw"Can not create program";return a}function je(i,e,r,n){const o=n||console.log,s=i.createShader(r);if(!s)throw"Could not load shader";if(i.shaderSource(s,e),i.compileShader(s),!i.getShaderParameter(s,i.COMPILE_STATUS)){const t=i.getShaderInfoLog(s);return o(new Error("*** Error compiling shader '"+s+"':"+t+`
`+e.split(`
`).map((c,f)=>`${f+1}: ${c}`).join(`
`))),i.deleteShader(s),null}return s}function Ke(i,e,r,n,o){const s=o||console.log,a=i.createProgram();if(!a)throw"Could not create program";if(e.forEach(function(c){i.attachShader(a,c)}),r&&r.forEach(function(c,f){i.bindAttribLocation(a,n?n[f]:f,c)}),i.linkProgram(a),!i.getProgramParameter(a,i.LINK_STATUS)){const c=i.getProgramInfoLog(a);return s("Error in program linking:"+c),i.deleteProgram(a),null}return a}function Q(i,e){e=e||1;const r=i.clientWidth*e|0,n=i.clientHeight*e|0;return i.width!==r||i.height!==n?(i.width=r,i.height=n,!0):!1}function Qe(i){let e,r,n,o,s,a;return{c(){e=U("p"),r=C(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=S(),o=U("ul"),s=S(),a=U("canvas"),this.h()},l(t){e=P(t,"P",{});var c=y(e);r=I(c,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),c.forEach(_),n=L(t),o=P(t,"UL",{id:!0}),y(o).forEach(_),s=L(t),a=P(t,"CANVAS",{id:!0}),y(a).forEach(_),this.h()},h(){E(o,"id","result"),E(a,"id","canvas")},m(t,c){h(t,e,c),O(e,r),h(t,n,c),h(t,o,c),h(t,s,c),h(t,a,c)},p:B,i:B,o:B,d(t){t&&_(e),t&&_(n),t&&_(o),t&&_(s),t&&_(a)}}}function Je(i){const e=document.createElement("li");e.textContent=i.toString();const r=document.getElementById("result");if(!r)throw"result element undefined";r.appendChild(e)}function Ze(i){function e(){const r=`
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
    `,a=document.createElement("canvas");a.width=3,a.height=3;const t=a.getContext("webgl");if(!t)throw"Coulndt get context";const c=K(t,[r,n]);if(!c)throw"Could not get program";const f=t.getAttribLocation(c,"position"),d=t.getUniformLocation(c,"srcTex"),l=t.getUniformLocation(c,"srcDimensions"),p=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,p),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(f),t.vertexAttribPointer(f,2,t.FLOAT,!1,0,0);const u=3,T=3,x=t.createTexture();t.bindTexture(t.TEXTURE_2D,x),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,u,T,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.useProgram(c),t.uniform1i(d,0),t.uniform2f(l,u,T),t.drawArrays(t.TRIANGLES,0,6);const A=new Uint8Array(3*3*4);t.readPixels(0,0,3,3,t.RGBA,t.UNSIGNED_BYTE,A);for(let m=0;m<3*3;++m)Je(A[m*4])}return J(e),[]}class et extends G{constructor(e){super(),W(this,e,Ze,Qe,k,{})}}const tt=Float32Array;function ge(i,e,r,n,o,s){const a=new tt(16);return a[0]=2/(e-i),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-r),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-s),a[11]=0,a[12]=(i+e)/(i-e),a[13]=(r+n)/(r-n),a[14]=(o+s)/(o-s),a[15]=1,a}function nt(i){let e;return{c(){e=U("canvas"),this.h()},l(r){e=P(r,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(_),this.h()},h(){E(e,"id","canvas"),_e(e,"background-color","black"),E(e,"width","800"),E(e,"height","600")},m(r,n){h(r,e,n)},p:B,i:B,o:B,d(r){r&&_(e)}}}function ot(i){function e(){const r=`
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
  `,a=document.getElementById("canvas");if(!a)throw"canvas undefined";const t=a.getContext("webgl");if(!t)throw"gl undefined";if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const d=K(t,[r,n]),l=K(t,[o,s]);if(!d||!l)throw"Can not create programs";const p={position:t.getAttribLocation(d,"position"),positionTex:t.getUniformLocation(d,"positionTex"),velocityTex:t.getUniformLocation(d,"velocityTex"),texDimensions:t.getUniformLocation(d,"texDimensions"),canvasDimensions:t.getUniformLocation(d,"canvasDimensions"),deltaTime:t.getUniformLocation(d,"deltaTime")},u={id:t.getAttribLocation(l,"id"),positionTex:t.getUniformLocation(l,"positionTex"),texDimensions:t.getUniformLocation(l,"texDimensions"),matrix:t.getUniformLocation(l,"matrix")},T=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,T),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const x=300,A=20,m=x*A,v=new Array(m).fill(0).map(($,M)=>M),N=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,N),t.bufferData(t.ARRAY_BUFFER,new Float32Array(v),t.STATIC_DRAW),Q(t.canvas);const X=($,M)=>(M===void 0&&(M=$,$=0),Math.random()*(M-$)+$),fe=new Float32Array(v.map($=>[X(a.width),X(a.height),0,0]).flat()),le=new Float32Array(v.map($=>[X(-300,300),X(-300,300),0,0]).flat());function V($,M,j,De){const Ee=$.createTexture();return $.bindTexture($.TEXTURE_2D,Ee),$.texImage2D($.TEXTURE_2D,0,$.RGBA,j,De,0,$.RGBA,$.FLOAT,M),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.NEAREST),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.NEAREST),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),Ee}const Y=V(t,le,x,A),z=V(t,fe,x,A),H=V(t,null,x,A);if(!z||!H)throw"Can not create position textures";function q($,M){const j=$.createFramebuffer();return $.bindFramebuffer($.FRAMEBUFFER,j),$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,M,0),j}const ue=q(t,z),me=q(t,H);let de={fb:ue,tex:z},ne={fb:me,tex:H},$e=0;function he($){if(!t)return;$*=.001;const M=$-$e;$e=$,Q(t.canvas),t.bindFramebuffer(t.FRAMEBUFFER,ne.fb),t.viewport(0,0,x,A),t.bindBuffer(t.ARRAY_BUFFER,T),t.enableVertexAttribArray(p.position),t.vertexAttribPointer(p.position,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,de.tex),t.activeTexture(t.TEXTURE0+1),t.bindTexture(t.TEXTURE_2D,Y),t.useProgram(d),t.uniform1i(p.positionTex,0),t.uniform1i(p.velocityTex,1),t.uniform2f(p.texDimensions,x,A),t.uniform2f(p.canvasDimensions,t.canvas.width,t.canvas.height),t.uniform1f(p.deltaTime,M),t.drawArrays(t.TRIANGLES,0,6),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.canvas.width,t.canvas.height),t.bindBuffer(t.ARRAY_BUFFER,N),t.enableVertexAttribArray(u.id),t.vertexAttribPointer(u.id,1,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ne.tex),t.useProgram(l),t.uniform2f(u.texDimensions,x,x),t.uniform1i(u.positionTex,0),t.uniformMatrix4fv(u.matrix,!1,ge(0,t.canvas.width,0,t.canvas.height,-1,1)),t.drawArrays(t.POINTS,0,m);{const j=de;de=ne,ne=j}requestAnimationFrame(he)}requestAnimationFrame(he)}return J(()=>e()),[]}class it extends G{constructor(e){super(),W(this,e,ot,nt,k,{})}}const ie=(i,e)=>(e===void 0&&(e=i,i=0),Math.random()*(e-i)+i);function rt(i,e,r,n){const o=i*e,s=new Array(o).fill(0).map((c,f)=>f),a=new Float32Array(s.map(c=>[ie(r),ie(n),0,0]).flat()),t=new Float32Array(s.map(c=>[ie(-300,300),ie(-300,300),0,0]).flat());return{numParticles:o,ids:new Float32Array(s),positions:a,velocities:t}}const st=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,at=`precision highp float;

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

`,ct=`  attribute float id;
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

`,ft=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function lt(i){let e;return{c(){e=U("canvas"),this.h()},l(r){e=P(r,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(e).forEach(_),this.h()},h(){E(e,"id","canvas"),_e(e,"background-color","black"),E(e,"width","800"),E(e,"height","600")},m(r,n){h(r,e,n)},p:B,i:B,o:B,d(r){r&&_(e)}}}function ut(i){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const s=o.getContext("webgl");if(!s)throw"gl undefined";Fe(s);const a=K(s,[st,at]),t=K(s,[ct,ft]),c={position:s.getAttribLocation(a,"position"),positionTex:s.getUniformLocation(a,"positionTex"),velocityTex:s.getUniformLocation(a,"velocityTex"),texDimensions:s.getUniformLocation(a,"texDimensions"),canvasDimensions:s.getUniformLocation(a,"canvasDimensions"),deltaTime:s.getUniformLocation(a,"deltaTime")},f={id:s.getAttribLocation(t,"id"),positionTex:s.getUniformLocation(t,"positionTex"),texDimensions:s.getUniformLocation(t,"texDimensions"),matrix:s.getUniformLocation(t,"matrix")},d=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,d),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW);const l=300,p=20,{numParticles:u,ids:T,positions:x,velocities:A}=rt(l,p,o.width,o.height),m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array(T),s.STATIC_DRAW),Q(s.canvas);const v=pe(s,A,l,p),N=pe(s,x,l,p),X=pe(s,null,l,p),fe=be(s,N),le=be(s,X);let V={fb:fe,tex:N},Y={fb:le,tex:X},z=0;function H(q){if(!s||!d||!m)throw"Undefined params to render";q*=.001;const ue=q-z;z=q,Q(s.canvas),n(s,Y,l,p,d,c,V,v,a,ue),r(s,l,m,f,Y,t,u);{const me=V;V=Y,Y=me}requestAnimationFrame(H)}requestAnimationFrame(H)}const r=(o,s,a,t,c,f,d)=>{o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.bindBuffer(o.ARRAY_BUFFER,a),o.enableVertexAttribArray(t.id),o.vertexAttribPointer(t.id,1,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,c.tex),o.useProgram(f),o.uniform2f(t.texDimensions,s,s),o.uniform1i(t.positionTex,0),o.uniformMatrix4fv(t.matrix,!1,ge(0,o.canvas.width,0,o.canvas.height,-1,1)),o.drawArrays(o.POINTS,0,d)},n=(o,s,a,t,c,f,d,l,p,u)=>{o.bindFramebuffer(o.FRAMEBUFFER,s.fb),o.viewport(0,0,a,t),o.bindBuffer(o.ARRAY_BUFFER,c),o.enableVertexAttribArray(f.position),o.vertexAttribPointer(f.position,2,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,d.tex),o.activeTexture(o.TEXTURE0+1),o.bindTexture(o.TEXTURE_2D,l),o.useProgram(p),o.uniform1i(f.positionTex,0),o.uniform1i(f.velocityTex,1),o.uniform2f(f.texDimensions,a,t),o.uniform2f(f.canvasDimensions,o.canvas.width,o.canvas.height),o.uniform1f(f.deltaTime,u),o.drawArrays(o.TRIANGLES,0,6)};return J(()=>e()),[]}class mt extends G{constructor(e){super(),W(this,e,ut,lt,k,{})}}const dt=`attribute vec2 a_position;

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
`,pt=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function _t(i){let e,r,n,o,s,a,t;return{c(){e=U("p"),r=C(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=U("code"),o=C("requestAnimationFrame"),s=C(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),a=S(),t=U("canvas"),this.h()},l(c){e=P(c,"P",{});var f=y(e);r=I(f,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=P(f,"CODE",{});var d=y(n);o=I(d,"requestAnimationFrame"),d.forEach(_),s=I(f,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),f.forEach(_),a=L(c),t=P(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),y(t).forEach(_),this.h()},h(){E(t,"id","canvas"),_e(t,"background-color","black"),E(t,"width","800"),E(t,"height","600")},m(c,f){h(c,e,f),O(e,r),O(e,n),O(n,o),O(e,s),h(c,a,f),h(c,t,f)},p:B,i:B,o:B,d(c){c&&_(e),c&&_(a),c&&_(t)}}}function Tt(i){function e(){const r=document.getElementById("canvas");if(!r)throw"canvas undefined";const n=r.getContext("webgl");if(!n)throw"gl undefined";Fe(n);const o=K(n,[dt,pt]);Q(n.canvas);const s=n.getAttribLocation(o,"a_position"),a=n.getUniformLocation(o,"u_resolution"),t=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t);const c=[50,50,50,150,150,150,150,50,200,200];n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW);function f(){if(!n)throw"Undefined params to render";for(let m=0;m<=c.length-2;m+=2)c[m]=(c[m]+Math.random()*2-1)%n.canvas.width,c[m+1]=(c[m+1]+Math.random()*0+1)%n.canvas.height;n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW),Q(n.canvas),n.viewport(0,0,n.canvas.width,n.canvas.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(o),n.uniform2f(a,n.canvas.width,n.canvas.height),n.enableVertexAttribArray(s),n.bindBuffer(n.ARRAY_BUFFER,t);const d=2,l=n.FLOAT,p=!1,u=0,T=0;n.vertexAttribPointer(s,d,l,p,u,T);var x=n.POINTS,A=5;n.drawArrays(x,T,A),requestAnimationFrame(f)}requestAnimationFrame(f)}return J(()=>e()),[]}class $t extends G{constructor(e){super(),W(this,e,Tt,_t,k,{})}}function ht(i){let e;return{c(){e=C("About")},l(r){e=I(r,"About")},m(r,n){h(r,e,n)},d(r){r&&_(e)}}}function Et(i){let e;return{c(){e=C("Simple counter")},l(r){e=I(r,"Simple counter")},m(r,n){h(r,e,n)},d(r){r&&_(e)}}}function vt(i){let e;return{c(){e=C("Particles")},l(r){e=I(r,"Particles")},m(r,n){h(r,e,n)},d(r){r&&_(e)}}}function xt(i){let e;return{c(){e=C("Particles 2")},l(r){e=I(r,"Particles 2")},m(r,n){h(r,e,n)},d(r){r&&_(e)}}}function bt(i){let e;return{c(){e=C("Positions Buffer")},l(r){e=I(r,"Positions Buffer")},m(r,n){h(r,e,n)},d(r){r&&_(e)}}}function At(i){let e,r,n,o,s,a,t,c,f,d;return e=new Z({props:{$$slots:{default:[ht]},$$scope:{ctx:i}}}),n=new Z({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),s=new Z({props:{$$slots:{default:[vt]},$$scope:{ctx:i}}}),t=new Z({props:{$$slots:{default:[xt]},$$scope:{ctx:i}}}),f=new Z({props:{$$slots:{default:[bt]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment),r=S(),w(n.$$.fragment),o=S(),w(s.$$.fragment),a=S(),w(t.$$.fragment),c=S(),w(f.$$.fragment)},l(l){F(e.$$.fragment,l),r=L(l),F(n.$$.fragment,l),o=L(l),F(s.$$.fragment,l),a=L(l),F(t.$$.fragment,l),c=L(l),F(f.$$.fragment,l)},m(l,p){g(e,l,p),h(l,r,p),g(n,l,p),h(l,o,p),g(s,l,p),h(l,a,p),g(t,l,p),h(l,c,p),g(f,l,p),d=!0},p(l,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:l}),e.$set(u);const T={};p&1&&(T.$$scope={dirty:p,ctx:l}),n.$set(T);const x={};p&1&&(x.$$scope={dirty:p,ctx:l}),s.$set(x);const A={};p&1&&(A.$$scope={dirty:p,ctx:l}),t.$set(A);const m={};p&1&&(m.$$scope={dirty:p,ctx:l}),f.$set(m)},i(l){d||(b(e.$$.fragment,l),b(n.$$.fragment,l),b(s.$$.fragment,l),b(t.$$.fragment,l),b(f.$$.fragment,l),d=!0)},o(l){R(e.$$.fragment,l),R(n.$$.fragment,l),R(s.$$.fragment,l),R(t.$$.fragment,l),R(f.$$.fragment,l),d=!1},d(l){D(e,l),l&&_(r),D(n,l),l&&_(o),D(s,l),l&&_(a),D(t,l),l&&_(c),D(f,l)}}}function Rt(i){let e,r,n,o,s,a,t,c;return{c(){e=U("p"),r=C("This page is an experiment to run simulation on the GPU."),n=S(),o=U("p"),s=C(`I am copying code from
                `),a=U("a"),t=C("this site"),c=C(`
                and adding basic typings for typescript.`),this.h()},l(f){e=P(f,"P",{});var d=y(e);r=I(d,"This page is an experiment to run simulation on the GPU."),d.forEach(_),n=L(f),o=P(f,"P",{});var l=y(o);s=I(l,`I am copying code from
                `),a=P(l,"A",{target:!0,href:!0});var p=y(a);t=I(p,"this site"),p.forEach(_),c=I(l,`
                and adding basic typings for typescript.`),l.forEach(_),this.h()},h(){E(a,"target","none"),E(a,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html")},m(f,d){h(f,e,d),O(e,r),h(f,n,d),h(f,o,d),O(o,s),O(o,a),O(a,t),O(o,c)},p:B,d(f){f&&_(e),f&&_(n),f&&_(o)}}}function wt(i){let e,r;return e=new et({}),{c(){w(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,o){g(e,n,o),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){R(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function Ft(i){let e,r;return e=new it({}),{c(){w(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,o){g(e,n,o),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){R(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function gt(i){let e,r;return e=new mt({}),{c(){w(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,o){g(e,n,o),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){R(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function Dt(i){let e,r;return e=new $t({}),{c(){w(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,o){g(e,n,o),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){R(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function Ut(i){let e,r,n,o,s,a,t,c,f,d,l,p;return e=new Ye({props:{$$slots:{default:[At]},$$scope:{ctx:i}}}),n=new ee({props:{$$slots:{default:[Rt]},$$scope:{ctx:i}}}),s=new ee({props:{$$slots:{default:[wt]},$$scope:{ctx:i}}}),t=new ee({props:{$$slots:{default:[Ft]},$$scope:{ctx:i}}}),f=new ee({props:{$$slots:{default:[gt]},$$scope:{ctx:i}}}),l=new ee({props:{$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment),r=S(),w(n.$$.fragment),o=S(),w(s.$$.fragment),a=S(),w(t.$$.fragment),c=S(),w(f.$$.fragment),d=S(),w(l.$$.fragment)},l(u){F(e.$$.fragment,u),r=L(u),F(n.$$.fragment,u),o=L(u),F(s.$$.fragment,u),a=L(u),F(t.$$.fragment,u),c=L(u),F(f.$$.fragment,u),d=L(u),F(l.$$.fragment,u)},m(u,T){g(e,u,T),h(u,r,T),g(n,u,T),h(u,o,T),g(s,u,T),h(u,a,T),g(t,u,T),h(u,c,T),g(f,u,T),h(u,d,T),g(l,u,T),p=!0},p(u,T){const x={};T&1&&(x.$$scope={dirty:T,ctx:u}),e.$set(x);const A={};T&1&&(A.$$scope={dirty:T,ctx:u}),n.$set(A);const m={};T&1&&(m.$$scope={dirty:T,ctx:u}),s.$set(m);const v={};T&1&&(v.$$scope={dirty:T,ctx:u}),t.$set(v);const N={};T&1&&(N.$$scope={dirty:T,ctx:u}),f.$set(N);const X={};T&1&&(X.$$scope={dirty:T,ctx:u}),l.$set(X)},i(u){p||(b(e.$$.fragment,u),b(n.$$.fragment,u),b(s.$$.fragment,u),b(t.$$.fragment,u),b(f.$$.fragment,u),b(l.$$.fragment,u),p=!0)},o(u){R(e.$$.fragment,u),R(n.$$.fragment,u),R(s.$$.fragment,u),R(t.$$.fragment,u),R(f.$$.fragment,u),R(l.$$.fragment,u),p=!1},d(u){D(e,u),u&&_(r),D(n,u),u&&_(o),D(s,u),u&&_(a),D(t,u),u&&_(c),D(f,u),u&&_(d),D(l,u)}}}function Pt(i){let e,r,n;return r=new Oe({props:{$$slots:{default:[Ut]},$$scope:{ctx:i}}}),{c(){e=U("div"),w(r.$$.fragment)},l(o){e=P(o,"DIV",{});var s=y(e);F(r.$$.fragment,s),s.forEach(_)},m(o,s){h(o,e,s),g(r,e,null),n=!0},p(o,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:o}),r.$set(a)},i(o){n||(b(r.$$.fragment,o),n=!0)},o(o){R(r.$$.fragment,o),n=!1},d(o){o&&_(e),D(r)}}}class yt extends G{constructor(e){super(),W(this,e,null,Pt,k,{})}}function Bt(i){let e,r;return e=new yt({}),{c(){w(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,o){g(e,n,o),r=!0},p:B,i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){R(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}class Ct extends G{constructor(e){super(),W(this,e,null,Bt,k,{})}}export{Ct as default};
