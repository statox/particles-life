import{S as be,i as ge,s as we,C as Yt,k as T,l as x,m as E,h as f,n as _,b as w,K as fe,E as Vt,F as Wt,G as qt,f as k,t as V,H as Et,R as Zn,o as Be,j as eo,Q as to,T as Dn,U as qn,A as no,V as oo,g as io,d as ro,q as B,a as F,r as I,c as D,D as u,B as ue,p as Qe,O as ie,u as tt,P as re,M as Gt,w as K,x as Q,y as J,z as Z}from"../../../chunks/index-ff9e742a.js";import{w as Lt}from"../../../chunks/index-84a8d4d9.js";let ao=1;function Gn(){return`svelte-tabs-${ao++}`}function so(t){let e,o,n,i;const a=t[4].default,s=Yt(a,t,t[3],null);return{c(){e=T("div"),s&&s.c(),this.h()},l(r){e=x(r,"DIV",{class:!0});var c=E(e);s&&s.l(c),c.forEach(f),this.h()},h(){_(e,"class","svelte-tabs")},m(r,c){w(r,e,c),s&&s.m(e,null),o=!0,n||(i=fe(e,"keydown",t[1]),n=!0)},p(r,[c]){s&&s.p&&(!o||c&8)&&Vt(s,a,r,r[3],o?qt(a,r[3],c,null):Wt(r[3]),null)},i(r){o||(k(s,r),o=!0)},o(r){V(s,r),o=!1},d(r){r&&f(e),s&&s.d(r),n=!1,i()}}}const xn={};function lo(t,e,o){const n=t.indexOf(e);t.splice(n,1),o.update(i=>i===e?t[n]||t[t.length-1]:i)}function co(t,e,o){let n,{$$slots:i={},$$scope:a}=e,{initialSelectedIndex:s=0}=e;const r=[],c=[],l=[],m=Lt({}),v=Lt({}),b=Lt(null);Et(t,b,$=>o(5,n=$));const h=Lt(null);function g($,P,N){$.push(P),N.update(z=>z||P),to(()=>lo($,P,N))}function R($){const P=c.indexOf($);b.set($),h.set(l[P])}Zn(xn,{registerTab($){g(c,$,b)},registerTabElement($){r.push($)},registerPanel($){g(l,$,h)},selectTab:R,selectedTab:b,selectedPanel:h,controls:m,labeledBy:v}),Be(()=>{R(c[s])}),eo(()=>{for(let $=0;$<c.length;$++)m.update(P=>({...P,[c[$].id]:l[$].id})),v.update(P=>({...P,[l[$].id]:c[$].id}))});async function y($){if($.target.classList.contains("svelte-tabs__tab")){let P=c.indexOf(n);switch($.key){case"ArrowRight":P+=1,P>c.length-1&&(P=0),R(c[P]),r[P].focus();break;case"ArrowLeft":P-=1,P<0&&(P=c.length-1),R(c[P]),r[P].focus()}}}return t.$$set=$=>{"initialSelectedIndex"in $&&o(2,s=$.initialSelectedIndex),"$$scope"in $&&o(3,a=$.$$scope)},[b,y,s,a,i]}class fo extends be{constructor(e){super(),ge(this,e,co,so,we,{initialSelectedIndex:2})}}function uo(t){let e,o,n,i,a,s;const r=t[9].default,c=Yt(r,t,t[8],null);return{c(){e=T("li"),c&&c.c(),this.h()},l(l){e=x(l,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=E(e);c&&c.l(m),m.forEach(f),this.h()},h(){_(e,"role","tab"),_(e,"id",t[3].id),_(e,"aria-controls",o=t[2][t[3].id]),_(e,"aria-selected",t[1]),_(e,"tabindex",n=t[1]?0:-1),_(e,"class","svelte-tabs__tab svelte-1fbofsd"),Dn(e,"svelte-tabs__selected",t[1])},m(l,m){w(l,e,m),c&&c.m(e,null),t[10](e),i=!0,a||(s=fe(e,"click",t[11]),a=!0)},p(l,[m]){c&&c.p&&(!i||m&256)&&Vt(c,r,l,l[8],i?qt(r,l[8],m,null):Wt(l[8]),null),(!i||m&4&&o!==(o=l[2][l[3].id]))&&_(e,"aria-controls",o),(!i||m&2)&&_(e,"aria-selected",l[1]),(!i||m&2&&n!==(n=l[1]?0:-1))&&_(e,"tabindex",n),(!i||m&2)&&Dn(e,"svelte-tabs__selected",l[1])},i(l){i||(k(c,l),i=!0)},o(l){V(c,l),i=!1},d(l){l&&f(e),c&&c.d(l),t[10](null),a=!1,s()}}}function mo(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e,r;const c={id:Gn()},{registerTab:l,registerTabElement:m,selectTab:v,selectedTab:b,controls:h}=qn(xn);Et(t,b,$=>o(7,n=$)),Et(t,h,$=>o(2,i=$));let g;l(c),Be(async()=>{await no(),m(r)});function R($){oo[$?"unshift":"push"](()=>{r=$,o(0,r)})}const y=()=>v(c);return t.$$set=$=>{"$$scope"in $&&o(8,s=$.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(1,g=n===c)},[r,g,i,c,v,b,h,n,s,a,R,y]}class Ne extends be{constructor(e){super(),ge(this,e,mo,uo,we,{})}}function po(t){let e,o;const n=t[1].default,i=Yt(n,t,t[0],null);return{c(){e=T("ul"),i&&i.c(),this.h()},l(a){e=x(a,"UL",{role:!0,class:!0});var s=E(e);i&&i.l(s),s.forEach(f),this.h()},h(){_(e,"role","tablist"),_(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(a,s){w(a,e,s),i&&i.m(e,null),o=!0},p(a,[s]){i&&i.p&&(!o||s&1)&&Vt(i,n,a,a[0],o?qt(n,a[0],s,null):Wt(a[0]),null)},i(a){o||(k(i,a),o=!0)},o(a){V(i,a),o=!1},d(a){a&&f(e),i&&i.d(a)}}}function ho(t,e,o){let{$$slots:n={},$$scope:i}=e;return t.$$set=a=>{"$$scope"in a&&o(0,i=a.$$scope)},[i,n]}class vo extends be{constructor(e){super(),ge(this,e,ho,po,we,{})}}function Un(t){let e;const o=t[6].default,n=Yt(o,t,t[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,a){n&&n.m(i,a),e=!0},p(i,a){n&&n.p&&(!e||a&32)&&Vt(n,o,i,i[5],e?qt(o,i[5],a,null):Wt(i[5]),null)},i(i){e||(k(n,i),e=!0)},o(i){V(n,i),e=!1},d(i){n&&n.d(i)}}}function _o(t){let e,o,n,i=t[1]===t[2]&&Un(t);return{c(){e=T("div"),i&&i.c(),this.h()},l(a){e=x(a,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=E(e);i&&i.l(s),s.forEach(f),this.h()},h(){_(e,"id",t[2].id),_(e,"aria-labelledby",o=t[0][t[2].id]),_(e,"class","svelte-tabs__tab-panel svelte-epfyet"),_(e,"role","tabpanel")},m(a,s){w(a,e,s),i&&i.m(e,null),n=!0},p(a,[s]){a[1]===a[2]?i?(i.p(a,s),s&2&&k(i,1)):(i=Un(a),i.c(),k(i,1),i.m(e,null)):i&&(io(),V(i,1,1,()=>{i=null}),ro()),(!n||s&1&&o!==(o=a[0][a[2].id]))&&_(e,"aria-labelledby",o)},i(a){n||(k(i),n=!0)},o(a){V(i),n=!1},d(a){a&&f(e),i&&i.d()}}}function To(t,e,o){let n,i,{$$slots:a={},$$scope:s}=e;const r={id:Gn()},{registerPanel:c,selectedPanel:l,labeledBy:m}=qn(xn);return Et(t,l,v=>o(1,i=v)),Et(t,m,v=>o(0,n=v)),c(r),t.$$set=v=>{"$$scope"in v&&o(5,s=v.$$scope)},[n,i,r,l,m,s,a]}class Oe extends be{constructor(e){super(),ge(this,e,To,_o,we,{})}}const xo=["VERTEX_SHADER","FRAGMENT_SHADER"];function Rt(){const t=document.getElementById("canvas");if(!t)throw"canvas undefined";const e=t.getContext("webgl");if(!e)throw"gl undefined";return Ht(e),e}function Ht(t){if(!t.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!t.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders"}function Fe(t,e,o,n){const i=t.createTexture();if(!i)throw"Can not create texture";return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,o,n,0,t.RGBA,t.FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i}function Pe(t,e){const o=t.createFramebuffer();if(!o)throw"Can not create frame buffer";return t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),o}function Ae(t,e,o,n,i){const a=[];for(let r=0;r<e.length;++r){const c=xo[r]==="VERTEX_SHADER"?t.VERTEX_SHADER:t.FRAGMENT_SHADER,l=$o(t,e[r],c,i);if(!l)throw"Can not create shader";a.push(l)}const s=Ao(t,a,o,n,i);if(!s)throw"Can not create program";return s}function $o(t,e,o,n){const i=n||console.log,a=t.createShader(o);if(!a)throw"Could not load shader";if(t.shaderSource(a,e),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);return i(new Error("*** Error compiling shader '"+a+"':"+r+`
`+e.split(`
`).map((c,l)=>`${l+1}: ${c}`).join(`
`))),t.deleteShader(a),null}return a}function Ao(t,e,o,n,i){const a=i||console.log,s=t.createProgram();if(!s)throw"Could not create program";if(e.forEach(function(c){t.attachShader(s,c)}),o&&o.forEach(function(c,l){t.bindAttribLocation(s,n?n[l]:l,c)}),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const c=t.getProgramInfoLog(s);return a("Error in program linking:"+c),t.deleteProgram(s),null}return s}function he(t,e){e=e||1;const o=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==o||t.height!==n?(t.width=o,t.height=n,!0):!1}function bo(t){let e,o,n,i,a,s,r,c,l,m,v,b;return{c(){e=T("p"),o=B(`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),n=F(),i=T("p"),a=B(`It is reusing the code from
    `),s=T("a"),r=B(`this site
    `),c=B("."),l=F(),m=T("ul"),v=F(),b=T("canvas"),this.h()},l(h){e=x(h,"P",{});var g=E(e);o=I(g,`This is not super impressive but this page takes 9 integers and uses a compute shader to
    multiply them by two. It's a first step!`),g.forEach(f),n=D(h),i=x(h,"P",{});var R=E(i);a=I(R,`It is reusing the code from
    `),s=x(R,"A",{target:!0,href:!0});var y=E(s);r=I(y,`this site
    `),y.forEach(f),c=I(R,"."),R.forEach(f),l=D(h),m=x(h,"UL",{id:!0}),E(m).forEach(f),v=D(h),b=x(h,"CANVAS",{id:!0}),E(b).forEach(f),this.h()},h(){_(s,"target","none"),_(s,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),_(m,"id","result"),_(b,"id","canvas")},m(h,g){w(h,e,g),u(e,o),w(h,n,g),w(h,i,g),u(i,a),u(i,s),u(s,r),u(i,c),w(h,l,g),w(h,m,g),w(h,v,g),w(h,b,g)},p:ue,i:ue,o:ue,d(h){h&&f(e),h&&f(n),h&&f(i),h&&f(l),h&&f(m),h&&f(v),h&&f(b)}}}function go(t){const e=document.createElement("li");e.textContent=t.toString();const o=document.getElementById("result");if(!o)throw"result element undefined";o.appendChild(e)}function wo(t){function e(){const o=`
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
    `,s=document.createElement("canvas");s.width=3,s.height=3;const r=s.getContext("webgl");if(!r)throw"Coulndt get context";const c=Ae(r,[o,n]);if(!c)throw"Could not get program";const l=r.getAttribLocation(c,"position"),m=r.getUniformLocation(c,"srcTex"),v=r.getUniformLocation(c,"srcDimensions"),b=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,b),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(l),r.vertexAttribPointer(l,2,r.FLOAT,!1,0,0);const h=3,g=3,R=r.createTexture();r.bindTexture(r.TEXTURE_2D,R),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,h,g,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([1,2,3,4,5,6,70,80,90])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.useProgram(c),r.uniform1i(m,0),r.uniform2f(v,h,g),r.drawArrays(r.TRIANGLES,0,6);const y=new Uint8Array(3*3*4);r.readPixels(0,0,3,3,r.RGBA,r.UNSIGNED_BYTE,y);for(let $=0;$<3*3;++$)go(y[$*4])}return Be(e),[]}class Eo extends be{constructor(e){super(),ge(this,e,wo,bo,we,{})}}const Ro=Float32Array;function Hn(t,e,o,n,i,a){const s=new Ro(16);return s[0]=2/(e-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-o),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(i-a),s[11]=0,s[12]=(t+e)/(t-e),s[13]=(o+n)/(o-n),s[14]=(i+a)/(i-a),s[15]=1,s}function Fo(t){let e,o,n,i,a,s,r;return{c(){e=T("p"),o=B(`This is the simple particles simulation from
    `),n=T("a"),i=B("webglfundamentals"),a=B(" directly copied in a svelte component."),s=F(),r=T("canvas"),this.h()},l(c){e=x(c,"P",{});var l=E(e);o=I(l,`This is the simple particles simulation from
    `),n=x(l,"A",{target:!0,href:!0});var m=E(n);i=I(m,"webglfundamentals"),m.forEach(f),a=I(l," directly copied in a svelte component."),l.forEach(f),s=D(c),r=x(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(f),this.h()},h(){_(n,"target","none"),_(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),_(r,"id","canvas"),Qe(r,"background-color","black"),_(r,"width","800"),_(r,"height","600")},m(c,l){w(c,e,l),u(e,o),u(e,n),u(n,i),u(e,a),w(c,s,l),w(c,r,l)},p:ue,i:ue,o:ue,d(c){c&&f(e),c&&f(s),c&&f(r)}}}function Do(t){function e(){const o=`
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
  `,s=document.getElementById("canvas");if(!s)throw"canvas undefined";const r=s.getContext("webgl");if(!r)throw"gl undefined";if(!r.getExtension("OES_texture_float"))throw alert("Need OES_texture_float"),"Need OES_texture_float";if(!r.getExtension("WEBGL_color_buffer_float"))throw alert("Need WEBGL_color_buffer_float"),"Need WEBGL_color_buffer_float";if(r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<1)throw alert("Can not use textures in vertex shaders"),"Can not use textures in vertex shaders";const m=Ae(r,[o,n]),v=Ae(r,[i,a]);if(!m||!v)throw"Can not create programs";const b={position:r.getAttribLocation(m,"position"),positionTex:r.getUniformLocation(m,"positionTex"),velocityTex:r.getUniformLocation(m,"velocityTex"),texDimensions:r.getUniformLocation(m,"texDimensions"),canvasDimensions:r.getUniformLocation(m,"canvasDimensions"),deltaTime:r.getUniformLocation(m,"deltaTime")},h={id:r.getAttribLocation(v,"id"),positionTex:r.getUniformLocation(v,"positionTex"),texDimensions:r.getUniformLocation(v,"texDimensions"),matrix:r.getUniformLocation(v,"matrix")},g=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,g),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);const R=300,y=20,$=R*y,P=new Array($).fill(0).map((U,ne)=>ne),N=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,N),r.bufferData(r.ARRAY_BUFFER,new Float32Array(P),r.STATIC_DRAW),he(r.canvas);const z=(U,ne)=>(ne===void 0&&(ne=U,U=0),Math.random()*(ne-U)+U),O=new Float32Array(P.map(U=>[z(s.width),z(s.height),0,0]).flat()),W=new Float32Array(P.map(U=>[z(-300,300),z(-300,300),0,0]).flat());function d(U,ne,le,oe){const xe=U.createTexture();return U.bindTexture(U.TEXTURE_2D,xe),U.texImage2D(U.TEXTURE_2D,0,U.RGBA,le,oe,0,U.RGBA,U.FLOAT,ne),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MAG_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_S,U.CLAMP_TO_EDGE),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_WRAP_T,U.CLAMP_TO_EDGE),xe}const L=d(r,W,R,y),p=d(r,O,R,y),A=d(r,null,R,y);if(!p||!A)throw"Can not create position textures";function H(U,ne){const le=U.createFramebuffer();return U.bindFramebuffer(U.FRAMEBUFFER,le),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ne,0),le}const te=H(r,p),S=H(r,A);let Y={fb:te,tex:p},G={fb:S,tex:A},q=0;function ae(U){if(!r)return;U*=.001;const ne=U-q;q=U,he(r.canvas),r.bindFramebuffer(r.FRAMEBUFFER,G.fb),r.viewport(0,0,R,y),r.bindBuffer(r.ARRAY_BUFFER,g),r.enableVertexAttribArray(b.position),r.vertexAttribPointer(b.position,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Y.tex),r.activeTexture(r.TEXTURE0+1),r.bindTexture(r.TEXTURE_2D,L),r.useProgram(m),r.uniform1i(b.positionTex,0),r.uniform1i(b.velocityTex,1),r.uniform2f(b.texDimensions,R,y),r.uniform2f(b.canvasDimensions,r.canvas.width,r.canvas.height),r.uniform1f(b.deltaTime,ne),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height),r.bindBuffer(r.ARRAY_BUFFER,N),r.enableVertexAttribArray(h.id),r.vertexAttribPointer(h.id,1,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,G.tex),r.useProgram(v),r.uniform2f(h.texDimensions,R,R),r.uniform1i(h.positionTex,0),r.uniformMatrix4fv(h.matrix,!1,Hn(0,r.canvas.width,0,r.canvas.height,-1,1)),r.drawArrays(r.POINTS,0,$);{const le=Y;Y=G,G=le}requestAnimationFrame(ae)}requestAnimationFrame(ae)}return Be(()=>e()),[]}class Uo extends be{constructor(e){super(),ge(this,e,Do,Fo,we,{})}}const Pt=(t,e)=>(e===void 0&&(e=t,t=0),Math.random()*(e-t)+t);function yo(t,e,o,n){const i=t*e,a=new Array(i).fill(0).map((c,l)=>l),s=new Float32Array(a.map(c=>[Pt(o),Pt(n),0,0]).flat()),r=new Float32Array(a.map(c=>[Pt(-300,300),Pt(-300,300),0,0]).flat());return{numParticles:i,ids:new Float32Array(a),positions:s,velocities:r}}const Lo=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,Po=`precision highp float;

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

`,Bo=`  attribute float id;
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

`,Io=`precision highp float;
void main() {
    gl_FragColor = vec4(0.2, 0.4, 0.9, 0.5);
}

`;function So(t){let e,o,n,i,a,s,r;return{c(){e=T("p"),o=B(`This is the simple particles simulation from
    `),n=T("a"),i=B("webglfundamentals"),a=B(" with the shader code extracted into separate files."),s=F(),r=T("canvas"),this.h()},l(c){e=x(c,"P",{});var l=E(e);o=I(l,`This is the simple particles simulation from
    `),n=x(l,"A",{target:!0,href:!0});var m=E(n);i=I(m,"webglfundamentals"),m.forEach(f),a=I(l," with the shader code extracted into separate files."),l.forEach(f),s=D(c),r=x(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(f),this.h()},h(){_(n,"target","none"),_(n,"href","https://webglfundamentals.org/webgl/lessons/webgl-gpgpu.html"),_(r,"id","canvas"),Qe(r,"background-color","black"),_(r,"width","800"),_(r,"height","600")},m(c,l){w(c,e,l),u(e,o),u(e,n),u(n,i),u(e,a),w(c,s,l),w(c,r,l)},p:ue,i:ue,o:ue,d(c){c&&f(e),c&&f(s),c&&f(r)}}}function Co(t){function e(){const i=document.getElementById("canvas");if(!i)throw"canvas undefined";const a=i.getContext("webgl");if(!a)throw"gl undefined";Ht(a);const s=Ae(a,[Lo,Po]),r=Ae(a,[Bo,Io]),c={position:a.getAttribLocation(s,"position"),positionTex:a.getUniformLocation(s,"positionTex"),velocityTex:a.getUniformLocation(s,"velocityTex"),texDimensions:a.getUniformLocation(s,"texDimensions"),canvasDimensions:a.getUniformLocation(s,"canvasDimensions"),deltaTime:a.getUniformLocation(s,"deltaTime")},l={id:a.getAttribLocation(r,"id"),positionTex:a.getUniformLocation(r,"positionTex"),texDimensions:a.getUniformLocation(r,"texDimensions"),matrix:a.getUniformLocation(r,"matrix")},m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);const v=300,b=20,{numParticles:h,ids:g,positions:R,velocities:y}=yo(v,b,i.width,i.height),$=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,$),a.bufferData(a.ARRAY_BUFFER,new Float32Array(g),a.STATIC_DRAW),he(a.canvas);const P=Fe(a,y,v,b),N=Fe(a,R,v,b),z=Fe(a,null,v,b),O=Pe(a,N),W=Pe(a,z);let d={fb:O,tex:N},L={fb:W,tex:z},p=0;function A(H){if(!a||!m||!$)throw"Undefined params to render";H*=.001;const te=H-p;p=H,he(a.canvas),n(a,L,v,b,m,c,d,P,s,te),o(a,v,$,l,L,r,h);{const S=d;d=L,L=S}requestAnimationFrame(A)}requestAnimationFrame(A)}const o=(i,a,s,r,c,l,m)=>{i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height),i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(r.id),i.vertexAttribPointer(r.id,1,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,c.tex),i.useProgram(l),i.uniform2f(r.texDimensions,a,a),i.uniform1i(r.positionTex,0),i.uniformMatrix4fv(r.matrix,!1,Hn(0,i.canvas.width,0,i.canvas.height,-1,1)),i.drawArrays(i.POINTS,0,m)},n=(i,a,s,r,c,l,m,v,b,h)=>{i.bindFramebuffer(i.FRAMEBUFFER,a.fb),i.viewport(0,0,s,r),i.bindBuffer(i.ARRAY_BUFFER,c),i.enableVertexAttribArray(l.position),i.vertexAttribPointer(l.position,2,i.FLOAT,!1,0,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,m.tex),i.activeTexture(i.TEXTURE0+1),i.bindTexture(i.TEXTURE_2D,v),i.useProgram(b),i.uniform1i(l.positionTex,0),i.uniform1i(l.velocityTex,1),i.uniform2f(l.texDimensions,s,r),i.uniform2f(l.canvasDimensions,i.canvas.width,i.canvas.height),i.uniform1f(l.deltaTime,h),i.drawArrays(i.TRIANGLES,0,6)};return Be(()=>e()),[]}class Mo extends be{constructor(e){super(),ge(this,e,Co,So,we,{})}}const No=`attribute vec2 a_position;

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
`,Oo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;function zo(t){let e,o,n,i,a,s,r,c,l,m,v,b;return{c(){e=T("p"),o=B(`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=T("code"),i=B("requestAnimationFrame"),a=B(` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),s=F(),r=T("canvas"),c=F(),l=T("button"),m=B("Add position"),this.h()},l(h){e=x(h,"P",{});var g=E(e);o=I(g,`Create an array of render-size positions. Bind this array to a buffer in the shader program. In
    each `),n=x(g,"CODE",{});var R=E(n);i=I(R,"requestAnimationFrame"),R.forEach(f),a=I(g,` update the positions randomly with javascript and use the
    shader program to render each position as a point.`),g.forEach(f),s=D(h),r=x(h,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(f),c=D(h),l=x(h,"BUTTON",{});var y=E(l);m=I(y,"Add position"),y.forEach(f),this.h()},h(){_(r,"id","canvas"),Qe(r,"background-color","black"),_(r,"width","800"),_(r,"height","600")},m(h,g){w(h,e,g),u(e,o),u(e,n),u(n,i),u(e,a),w(h,s,g),w(h,r,g),w(h,c,g),w(h,l,g),u(l,m),v||(b=fe(l,"click",t[1]),v=!0)},p:ue,i:ue,o:ue,d(h){h&&f(e),h&&f(s),h&&f(r),h&&f(c),h&&f(l),v=!1,b()}}}function Xo(t){const e=[50,50,50,150,150,150,150,50,200,200];function o(){const a=document.getElementById("canvas");if(!a)throw"canvas undefined";const s=a.getContext("webgl");if(!s)throw"gl undefined";Ht(s);const r=Ae(s,[No,Oo]);he(s.canvas);const c=s.getAttribLocation(r,"a_position"),l=s.getUniformLocation(r,"u_resolution"),m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW);function v(){if(!s)throw"Undefined params to render";for(let N=0;N<=e.length-2;N+=2)e[N]=(e[N]+Math.random()*2-1)%s.canvas.width,e[N+1]=(e[N+1]+Math.random()*0+1)%s.canvas.height;s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),he(s.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(r),s.uniform2f(l,s.canvas.width,s.canvas.height),s.enableVertexAttribArray(c),s.bindBuffer(s.ARRAY_BUFFER,m);const b=2,h=s.FLOAT,g=!1,R=0,y=0;s.vertexAttribPointer(c,b,h,g,R,y);var $=s.POINTS,P=e.length/2;s.drawArrays($,y,P),requestAnimationFrame(v)}requestAnimationFrame(v)}const n=()=>{e.push(Math.random()*800),e.push(Math.random()*600)};return Be(()=>o()),[n,()=>n()]}class ko extends be{constructor(e){super(),ge(this,e,Xo,zo,we,{})}}const Yo=`attribute float id;
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
`,Vo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let vt,_t;const Wo=t=>{_t=Ae(t,[Yo,Vo]),vt={idAttributeLocation:t.getAttribLocation(_t,"id"),texDimensionsUniformLocation:t.getUniformLocation(_t,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(_t,"u_resolution")}},qo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;he(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(_t),e.uniform2f(vt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(vt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(vt.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,a);const s=1,r=e.FLOAT,c=!1,l=0,m=0;e.vertexAttribPointer(vt.idAttributeLocation,s,r,c,l,m);const v=e.POINTS,b=i.length;e.drawArrays(v,m,b)};function Go(t){let e,o,n,i,a,s,r;return{c(){e=T("p"),o=B("Create an array of render-size positions. Store this array in a texture. In each "),n=T("code"),i=B("requestAnimationFrame"),a=B(` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),s=F(),r=T("canvas"),this.h()},l(c){e=x(c,"P",{});var l=E(e);o=I(l,"Create an array of render-size positions. Store this array in a texture. In each "),n=x(l,"CODE",{});var m=E(n);i=I(m,"requestAnimationFrame"),m.forEach(f),a=I(l,` update the positions randomly with javascript and create a new texture holding the positions then
    use a shader to render the texture.`),l.forEach(f),s=D(c),r=x(c,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(f),this.h()},h(){_(r,"id","canvas"),Qe(r,"background-color","black"),_(r,"width",jn),_(r,"height",Kn)},m(c,l){w(c,e,l),u(e,o),u(e,n),u(n,i),u(e,a),w(c,s,l),w(c,r,l)},p:ue,i:ue,o:ue,d(c){c&&f(e),c&&f(s),c&&f(r)}}}const jn=800,Kn=600;function Ho(t){function e(){const o=document.getElementById("canvas");if(!o)throw"canvas undefined";const n=o.getContext("webgl");if(!n)throw"gl undefined";Ht(n),he(n.canvas),Wo(n);const i=[0,1,2,3,4,5,6,7,8,9],a=i.map(r=>[Math.random()*jn,Math.random()*Kn,0,0]).flat();function s(){if(!n)throw"Undefined params to render";for(let c=0;c<=a.length-2;c+=2)a[c]=(a[c]+Math.random()*2-1)%n.canvas.width,a[c+1]=(a[c+1]+Math.random()*0+1)%n.canvas.height;const r=Fe(n,new Float32Array(a),3,3);qo({gl:n,positionTex:r,textureDimension:{width:3,height:3},ids:i}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Be(()=>e()),[]}let jo=class extends be{constructor(e){super(),ge(this,e,Ho,Go,we,{})}};const Ko=`attribute float id;
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
`,Qo=`precision mediump float;

void main() {
    gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0);
}
`;let Tt,xt,tn;const Jo=(t,e)=>{xt=Ae(t,[Ko,Qo]),Tt={idAttributeLocation:t.getAttribLocation(xt,"id"),texDimensionsUniformLocation:t.getUniformLocation(xt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(xt,"u_resolution")},tn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,tn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW)},Zo=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,tn),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(xt),e.uniform2f(Tt.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(Tt.texDimensionsUniformLocation,n.width,n.height),e.enableVertexAttribArray(Tt.idAttributeLocation);const a=1,s=e.FLOAT,r=!1,c=0,l=0;e.vertexAttribPointer(Tt.idAttributeLocation,a,s,r,c,l),e.drawArrays(e.POINTS,l,i.length)};function ei(t,e){const o=new Array(t).fill(0).map((a,s)=>s),n=o.map(a=>[Math.random()*e.width,Math.random()*e.height,0,0]).flat(),i={width:o.length,height:1};return{ids:o,positions:n,texDimensions:i}}const ti=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,ni=`precision highp float;

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

`;let ct,ft,nn,jt,Kt,yn,Ln,$t,Nt;const oi=(t,e)=>{const{positions:o,texDimensions:n}=e;ft=Ae(t,[ti,ni]),ct={positionAttributeLocation:t.getAttribLocation(ft,"position"),positionTexLocation:t.getUniformLocation(ft,"positionTex"),texDimensionsUniformLocation:t.getUniformLocation(ft,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ft,"u_resolution")},nn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,nn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),jt=Fe(t,new Float32Array(o),n.width,n.height),Kt=Fe(t,null,n.width,n.height),yn=Pe(t,jt),Ln=Pe(t,Kt),$t={fb:yn,tex:jt},Nt={fb:Ln,tex:Kt}},ii=t=>{const{gl:e,texDimensions:o}=t;e.bindFramebuffer(e.FRAMEBUFFER,Nt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,nn),e.enableVertexAttribArray(ct.positionAttributeLocation),e.vertexAttribPointer(ct.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,$t.tex),e.useProgram(ft),e.uniform1i(ct.positionTexLocation,0),e.uniform2f(ct.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(ct.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const n=$t;$t=Nt,Nt=n}return $t.tex};function ri(t){let e,o,n,i,a,s,r,c,l,m,v,b,h;return{c(){e=T("p"),o=B("Create an array of render-size positions. Store this array in a texture."),n=F(),i=T("p"),a=B("Create 2 textures which will be used to update the positions with a shader. In each "),s=T("code"),r=B("requestAnimationFrame"),c=B(` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),l=F(),m=T("p"),v=B("Finally switch the two textures to read and write in the updated textures"),b=F(),h=T("canvas"),this.h()},l(g){e=x(g,"P",{});var R=E(e);o=I(R,"Create an array of render-size positions. Store this array in a texture."),R.forEach(f),n=D(g),i=x(g,"P",{});var y=E(i);a=I(y,"Create 2 textures which will be used to update the positions with a shader. In each "),s=x(y,"CODE",{});var $=E(s);r=I($,"requestAnimationFrame"),$.forEach(f),c=I(y,` update the positions with the simple shader reading from the first texture and writing to the new
    one. Then use the drawing shader to render the new texture to the canvas.`),y.forEach(f),l=D(g),m=x(g,"P",{});var P=E(m);v=I(P,"Finally switch the two textures to read and write in the updated textures"),P.forEach(f),b=D(g),h=x(g,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(h).forEach(f),this.h()},h(){_(h,"id","canvas"),Qe(h,"background-color","black"),_(h,"width",Qn),_(h,"height",Jn)},m(g,R){w(g,e,R),u(e,o),w(g,n,R),w(g,i,R),u(i,a),u(i,s),u(s,r),u(i,c),w(g,l,R),w(g,m,R),u(m,v),w(g,b,R),w(g,h,R)},p:ue,i:ue,o:ue,d(g){g&&f(e),g&&f(n),g&&f(i),g&&f(l),g&&f(m),g&&f(b),g&&f(h)}}}const Qn=800,Jn=600;function ai(t){function e(){const o=Rt();he(o.canvas);const{ids:n,positions:i,texDimensions:a}=ei(100,{width:Qn,height:Jn});Jo(o,n),oi(o,{positions:i,texDimensions:a});function s(){he(o.canvas);const r=ii({gl:o,texDimensions:a});Zo({gl:o,positionTex:r,textureDimension:a,ids:n}),requestAnimationFrame(s)}requestAnimationFrame(s)}return Be(()=>e()),[]}let si=class extends be{constructor(e){super(),ge(this,e,ai,ri,we,{})}};const li=`attribute float id;
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
`,ci=`precision mediump float;
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
`;let ot,ut,on,rn;const fi=(t,e)=>{const{ids:o,colors:n}=e;ut=Ae(t,[li,ci]),ot={idAttributeLocation:t.getAttribLocation(ut,"id"),colorAttributeLocation:t.getAttribLocation(ut,"color"),texDimensionsUniformLocation:t.getUniformLocation(ut,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(ut,"u_resolution")},on=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,on),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),rn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,rn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},ui=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,c=0,l=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,on),e.vertexAttribPointer(ot.idAttributeLocation,a,s,r,c,l),e.enableVertexAttribArray(ot.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,rn),e.vertexAttribPointer(ot.colorAttributeLocation,a,s,r,c,l),e.enableVertexAttribArray(ot.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(ut),e.uniform2f(ot.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(ot.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,i.length)};function mi(t,e){const o=t.width*t.height,n=new Array(o).fill(0).map((s,r)=>r),i=new Array(o).fill(0).map(s=>Math.floor(Math.random()*4)),a=n.map(s=>{{const{x:c,y:l}=di(e,20);return[c,l,0,0]}}).flat();return{ids:n,positions:a,texDimensions:t,colors:i}}const di=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},pi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,hi=`precision highp float;

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

`;let it,rt,an,Bt,Qt,Pn,Bn,At,Ot,It;const vi=(t,e)=>{const{positions:o,texDimensions:n}=e;return rt=Ae(t,[pi,hi]),it={positionAttributeLocation:t.getAttribLocation(rt,"position"),positionTexLocation:t.getUniformLocation(rt,"positionTex"),deltaTimeUniformLocation:t.getUniformLocation(rt,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(rt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(rt,"u_resolution")},an=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,an),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Bt=Fe(t,new Float32Array(o),n.width,n.height),Qt=Fe(t,null,n.width,n.height),Pn=Pe(t,Bt),Bn=Pe(t,Qt),At={fb:Pn,tex:Bt},Ot={fb:Bn,tex:Qt},Bt},_i=t=>{const{gl:e,texDimensions:o}=t,n=Date.now();It||(It=n-1);const i=n-It;It=n,e.bindFramebuffer(e.FRAMEBUFFER,Ot.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,an),e.enableVertexAttribArray(it.positionAttributeLocation),e.vertexAttribPointer(it.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,At.tex),e.useProgram(rt),e.uniform1i(it.positionTexLocation,0),e.uniform1f(it.deltaTimeUniformLocation,i),e.uniform2f(it.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(it.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const a=At;At=Ot,Ot=a}return At.tex};function Ti(t){let e,o,n,i,a,s,r,c,l,m,v=t[2]?"Play":"Pause",b,h,g,R=t[1]?"Normal Speed":"Slow Mo",y,$,P,N,z=t[4].width*t[4].height+"",O,W,d,L,p,A,H,te;return{c(){e=T("p"),o=B("Same principle with a shader to update positions and a shader to draw particles."),n=F(),i=T("p"),a=B(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=F(),r=T("canvas"),c=F(),l=T("div"),m=T("button"),b=B(v),h=F(),g=T("button"),y=B(R),$=F(),P=T("span"),N=B("particles: "),O=B(z),W=F(),d=T("label"),L=B("Smooth steps"),p=F(),A=T("input"),this.h()},l(S){e=x(S,"P",{});var Y=E(e);o=I(Y,"Same principle with a shader to update positions and a shader to draw particles."),Y.forEach(f),n=D(S),i=x(S,"P",{});var G=E(i);a=I(G,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),G.forEach(f),s=D(S),r=x(S,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(f),c=D(S),l=x(S,"DIV",{});var q=E(l);m=x(q,"BUTTON",{});var ae=E(m);b=I(ae,v),ae.forEach(f),h=D(q),g=x(q,"BUTTON",{});var U=E(g);y=I(U,R),U.forEach(f),$=D(q),P=x(q,"SPAN",{});var ne=E(P);N=I(ne,"particles: "),O=I(ne,z),ne.forEach(f),W=D(q),d=x(q,"LABEL",{for:!0});var le=E(d);L=I(le,"Smooth steps"),le.forEach(f),p=D(q),A=x(q,"INPUT",{type:!0,min:!0}),q.forEach(f),this.h()},h(){_(r,"id","canvas"),Qe(r,"background-color","black"),_(r,"width",t[3].width),_(r,"height",t[3].height),_(d,"for","steps"),_(A,"type","number"),_(A,"min",0)},m(S,Y){w(S,e,Y),u(e,o),w(S,n,Y),w(S,i,Y),u(i,a),w(S,s,Y),w(S,r,Y),w(S,c,Y),w(S,l,Y),u(l,m),u(m,b),u(l,h),u(l,g),u(g,y),u(l,$),u(l,P),u(P,N),u(P,O),u(l,W),u(l,d),u(d,L),u(l,p),u(l,A),ie(A,t[0]),H||(te=[fe(m,"click",t[5]),fe(g,"click",t[6]),fe(A,"input",t[7])],H=!0)},p(S,[Y]){Y&4&&v!==(v=S[2]?"Play":"Pause")&&tt(b,v),Y&2&&R!==(R=S[1]?"Normal Speed":"Slow Mo")&&tt(y,R),Y&1&&re(A.value)!==S[0]&&ie(A,S[0])},i:ue,o:ue,d(S){S&&f(e),S&&f(n),S&&f(i),S&&f(s),S&&f(r),S&&f(c),S&&f(l),H=!1,Gt(te)}}}function xi(t,e,o){const n={width:800,height:600},i={width:100,height:100};let a=1,s=!1,r=!0;function c(){const b=Rt();he(b.canvas);const{ids:h,positions:g,colors:R}=mi(i,{width:n.width,height:n.height});fi(b,{ids:h,colors:R,texDimensions:i});let y=vi(b,{positions:g,texDimensions:i});function $(){if(he(b.canvas),!r)for(let P=0;P<a;P++)y=_i({gl:b,texDimensions:i});return ui({gl:b,positionTex:y,textureDimension:i,ids:h}),r?requestAnimationFrame($):s?setTimeout(()=>requestAnimationFrame($),1e3):requestAnimationFrame($)}requestAnimationFrame($)}Be(()=>c());const l=()=>o(2,r=!r),m=()=>o(1,s=!s);function v(){a=re(this.value),o(0,a)}return[a,s,r,n,i,l,m,v]}class $i extends be{constructor(e){super(),ge(this,e,xi,Ti,we,{})}}const Ai=`attribute float id;
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
`,bi=`precision mediump float;
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
`;let at,mt,sn,ln;const gi=(t,e)=>{const{ids:o,colors:n}=e;mt=Ae(t,[Ai,bi]),at={idAttributeLocation:t.getAttribLocation(mt,"id"),colorAttributeLocation:t.getAttribLocation(mt,"color"),texDimensionsUniformLocation:t.getUniformLocation(mt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(mt,"u_resolution")},sn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,sn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),ln=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,ln),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},wi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,c=0,l=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,sn),e.vertexAttribPointer(at.idAttributeLocation,a,s,r,c,l),e.enableVertexAttribArray(at.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,ln),e.vertexAttribPointer(at.colorAttributeLocation,a,s,r,c,l),e.enableVertexAttribArray(at.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(mt),e.uniform2f(at.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(at.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,i.length)};function Ei(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((c,l)=>l),s=new Array(i).fill(0).map(c=>Math.floor(Math.random()*4)),r=a.map(c=>{if(n==="disk"){const{x:m,y:v}=Fi(o,20);return[m,v,0,0]}if(n==="square"){const{x:m,y:v}=Ri(o,550);return[m,v,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=Di(o,c,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=In(o,c,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=In(o,c,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Ri=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Fi=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},Di=(t,e,o)=>{const n=cn(e,0,o,0,t.width,!1),i=cn(e,0,o,0,t.height,!1);return{x:n,y:i}},In=(t,e,o,n)=>{const i=cn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,c=n.y,m=Math.sin(c*i)*200+t.height/2;return{x:r,y:m}},cn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?Sn(s,n,i):Sn(s,i,n):s},Sn=function(t,e,o){return Math.max(Math.min(t,o),e)},Ui=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,yi=`precision highp float;

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

`;let We,qe,fn,St,Jt,Cn,Mn,bt,zt;const Li=(t,e)=>{const{positions:o,texDimensions:n}=e;return qe=Ae(t,[Ui,yi]),We={positionAttributeLocation:t.getAttribLocation(qe,"position"),positionTexLocation:t.getUniformLocation(qe,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(qe,"interactionRange"),dragUniformLocation:t.getUniformLocation(qe,"drag"),deltaTimeUniformLocation:t.getUniformLocation(qe,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(qe,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(qe,"u_resolution")},fn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,fn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),St=Fe(t,new Float32Array(o),n.width,n.height),Jt=Fe(t,null,n.width,n.height),Cn=Pe(t,St),Mn=Pe(t,Jt),bt={fb:Cn,tex:St},zt={fb:Mn,tex:Jt},St},Pi=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,zt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,fn),e.enableVertexAttribArray(We.positionAttributeLocation),e.vertexAttribPointer(We.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,bt.tex),e.useProgram(qe),e.uniform1i(We.positionTexLocation,0),e.uniform1f(We.dragUniformLocation,i),e.uniform1f(We.interactionRangeUniformLocation,n),e.uniform1f(We.deltaTimeUniformLocation,a),e.uniform2f(We.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(We.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=bt;bt=zt,zt=s}return bt.tex};function Bi(t){let e,o,n,i,a,s,r,c,l,m,v=t[2]?"Play":"Pause",b,h,g,R=t[1]?"Normal Speed":"Slow Mo",y,$,P,N,z=t[5].width*t[5].height+"",O,W,d,L,p,A,H,te,S,Y,G,q,ae,U,ne,le,oe,xe,_e,de,Ie,Ee,ce,Se,Te,pe,Ce,Ue,me,ze;return{c(){e=T("p"),o=B("Same principle with a shader to update positions and a shader to draw particles."),n=F(),i=T("p"),a=B(`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),s=F(),r=T("canvas"),c=F(),l=T("div"),m=T("button"),b=B(v),h=F(),g=T("button"),y=B(R),$=F(),P=T("span"),N=B("particles: "),O=B(z),W=F(),d=T("label"),L=B("Smooth steps"),p=F(),A=T("input"),H=F(),te=T("div"),S=T("ul"),Y=T("li"),G=T("label"),q=B("Interaction Range"),ae=F(),U=T("input"),ne=F(),le=T("li"),oe=T("label"),xe=B("Drag"),_e=F(),de=T("input"),Ie=F(),Ee=T("li"),ce=T("label"),Se=B("Time step"),Te=F(),pe=T("input"),Ce=F(),Ue=T("ul"),this.h()},l(M){e=x(M,"P",{});var se=E(e);o=I(se,"Same principle with a shader to update positions and a shader to draw particles."),se.forEach(f),n=D(M),i=x(M,"P",{});var ke=E(i);a=I(ke,`This time the update shader iterate through the texture to compute the distance of the particle
    to each other particle and if they are too close it pushes them appart.`),ke.forEach(f),s=D(M),r=x(M,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(r).forEach(f),c=D(M),l=x(M,"DIV",{});var C=E(l);m=x(C,"BUTTON",{});var j=E(m);b=I(j,v),j.forEach(f),h=D(C),g=x(C,"BUTTON",{});var Ye=E(g);y=I(Ye,R),Ye.forEach(f),$=D(C),P=x(C,"SPAN",{});var De=E(P);N=I(De,"particles: "),O=I(De,z),De.forEach(f),W=D(C),d=x(C,"LABEL",{for:!0});var $e=E(d);L=I($e,"Smooth steps"),$e.forEach(f),p=D(C),A=x(C,"INPUT",{type:!0,min:!0}),C.forEach(f),H=D(M),te=x(M,"DIV",{});var Ve=E(te);S=x(Ve,"UL",{});var ve=E(S);Y=x(ve,"LI",{});var ye=E(Y);G=x(ye,"LABEL",{for:!0});var Xe=E(G);q=I(Xe,"Interaction Range"),Xe.forEach(f),ae=D(ye),U=x(ye,"INPUT",{id:!0,type:!0,min:!0}),ye.forEach(f),ne=D(ve),le=x(ve,"LI",{});var Me=E(le);oe=x(Me,"LABEL",{for:!0});var Re=E(oe);xe=I(Re,"Drag"),Re.forEach(f),_e=D(Me),de=x(Me,"INPUT",{id:!0,type:!0,min:!0}),Me.forEach(f),Ie=D(ve),Ee=x(ve,"LI",{});var X=E(Ee);ce=x(X,"LABEL",{for:!0});var ee=E(ce);Se=I(ee,"Time step"),ee.forEach(f),Te=D(X),pe=x(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(f),Ce=D(ve),Ue=x(ve,"UL",{}),E(Ue).forEach(f),ve.forEach(f),Ve.forEach(f),this.h()},h(){_(r,"id","canvas"),Qe(r,"background-color","black"),_(r,"width",t[4].width),_(r,"height",t[4].height),_(d,"for","steps"),_(A,"type","number"),_(A,"min",0),_(G,"for","interactionRange"),_(U,"id","interactionRange"),_(U,"type","number"),_(U,"min",0),_(oe,"for","drag"),_(de,"id","drag"),_(de,"type","number"),_(de,"min",0),_(ce,"for","deltaTime"),_(pe,"id","deltaTime"),_(pe,"type","number"),_(pe,"min",0)},m(M,se){w(M,e,se),u(e,o),w(M,n,se),w(M,i,se),u(i,a),w(M,s,se),w(M,r,se),w(M,c,se),w(M,l,se),u(l,m),u(m,b),u(l,h),u(l,g),u(g,y),u(l,$),u(l,P),u(P,N),u(P,O),u(l,W),u(l,d),u(d,L),u(l,p),u(l,A),ie(A,t[0]),w(M,H,se),w(M,te,se),u(te,S),u(S,Y),u(Y,G),u(G,q),u(Y,ae),u(Y,U),ie(U,t[3].interactionRange),u(S,ne),u(S,le),u(le,oe),u(oe,xe),u(le,_e),u(le,de),ie(de,t[3].drag),u(S,Ie),u(S,Ee),u(Ee,ce),u(ce,Se),u(Ee,Te),u(Ee,pe),ie(pe,t[3].timeStep),u(S,Ce),u(S,Ue),me||(ze=[fe(m,"click",t[6]),fe(g,"click",t[7]),fe(A,"input",t[8]),fe(U,"input",t[9]),fe(de,"input",t[10]),fe(pe,"input",t[11])],me=!0)},p(M,[se]){se&4&&v!==(v=M[2]?"Play":"Pause")&&tt(b,v),se&2&&R!==(R=M[1]?"Normal Speed":"Slow Mo")&&tt(y,R),se&1&&re(A.value)!==M[0]&&ie(A,M[0]),se&8&&re(U.value)!==M[3].interactionRange&&ie(U,M[3].interactionRange),se&8&&re(de.value)!==M[3].drag&&ie(de,M[3].drag),se&8&&re(pe.value)!==M[3].timeStep&&ie(pe,M[3].timeStep)},i:ue,o:ue,d(M){M&&f(e),M&&f(n),M&&f(i),M&&f(s),M&&f(r),M&&f(c),M&&f(l),M&&f(H),M&&f(te),me=!1,Gt(ze)}}}function Ii(t,e,o){const n={width:800,height:600},i={width:10,height:10};let a=1,s=!1,r=!0;const c={interactionRange:70,drag:1e3,timeStep:10};function l(){const y=Rt();he(y.canvas);const{ids:$,positions:P,colors:N}=Ei({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"circle"});gi(y,{ids:$,colors:N,texDimensions:i});let z=Li(y,{positions:P,texDimensions:i});function O(){if(he(y.canvas),!r)for(let W=0;W<a;W++)z=Pi({gl:y,texDimensions:i,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return wi({gl:y,positionTex:z,textureDimension:i,ids:$}),r?requestAnimationFrame(O):s?setTimeout(()=>requestAnimationFrame(O),1e3):requestAnimationFrame(O)}requestAnimationFrame(O)}Be(()=>l());const m=()=>o(2,r=!r),v=()=>o(1,s=!s);function b(){a=re(this.value),o(0,a)}function h(){c.interactionRange=re(this.value),o(3,c)}function g(){c.drag=re(this.value),o(3,c)}function R(){c.timeStep=re(this.value),o(3,c)}return[a,s,r,c,n,i,m,v,b,h,g,R]}class Si extends be{constructor(e){super(),ge(this,e,Ii,Bi,we,{})}}const Ci=`attribute float id;
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
`,Mi=`precision mediump float;
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
`;let st,dt,un,mn;const Ni=(t,e)=>{const{ids:o,colors:n}=e;dt=Ae(t,[Ci,Mi]),st={idAttributeLocation:t.getAttribLocation(dt,"id"),colorAttributeLocation:t.getAttribLocation(dt,"color"),texDimensionsUniformLocation:t.getUniformLocation(dt,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(dt,"u_resolution")},un=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,un),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),mn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,mn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},Oi=t=>{const{gl:e,positionTex:o,textureDimension:n,ids:i}=t,a=1,s=e.FLOAT,r=!1,c=0,l=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,un),e.vertexAttribPointer(st.idAttributeLocation,a,s,r,c,l),e.enableVertexAttribArray(st.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,mn),e.vertexAttribPointer(st.colorAttributeLocation,a,s,r,c,l),e.enableVertexAttribArray(st.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(dt),e.uniform2f(st.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.uniform2f(st.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,l,i.length)};function zi(t){const{texDimensions:e,screenDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((c,l)=>l),s=new Array(i).fill(0).map(c=>Math.floor(Math.random()*4)),r=a.map(c=>{if(n==="random"){const{x:l,y:m}=Xi(o);return[l,m,0,0]}if(n==="disk"){const{x:m,y:v}=Yi(o,200);return[m,v,0,0]}if(n==="square"){const{x:m,y:v}=ki(o,300);return[m,v,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=Vi(o,c,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=Nn(o,c,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=Nn(o,c,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const Xi=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},ki=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},Yi=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},Vi=(t,e,o)=>{const n=dn(e,0,o,0,t.width,!1),i=dn(e,0,o,0,t.height,!1);return{x:n,y:i}},Nn=(t,e,o,n)=>{const i=dn(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,c=n.y,m=Math.sin(c*i)*200+t.height/2;return{x:r,y:m}},dn=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?On(s,n,i):On(s,i,n):s},On=function(t,e,o){return Math.max(Math.min(t,o),e)},Wi=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,qi=`precision highp float;

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

`;let Ge,He,pn,Ct,Zt,zn,Xn,gt,Xt;const Gi=(t,e)=>{const{positions:o,texDimensions:n}=e,i=qi.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return He=Ae(t,[Wi,i]),Ge={positionAttributeLocation:t.getAttribLocation(He,"position"),positionTexLocation:t.getUniformLocation(He,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(He,"interactionRange"),dragUniformLocation:t.getUniformLocation(He,"drag"),deltaTimeUniformLocation:t.getUniformLocation(He,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(He,"texDimensions"),resolutionUniformLocation:t.getUniformLocation(He,"u_resolution")},pn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,pn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Ct=Fe(t,new Float32Array(o),n.width,n.height),Zt=Fe(t,null,n.width,n.height),zn=Pe(t,Ct),Xn=Pe(t,Zt),gt={fb:zn,tex:Ct},Xt={fb:Xn,tex:Zt},Ct},Hi=t=>{const{gl:e,texDimensions:o,interactionRange:n,drag:i,deltaTime:a}=t;e.bindFramebuffer(e.FRAMEBUFFER,Xt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,pn),e.enableVertexAttribArray(Ge.positionAttributeLocation),e.vertexAttribPointer(Ge.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,gt.tex),e.useProgram(He),e.uniform1i(Ge.positionTexLocation,0),e.uniform1f(Ge.dragUniformLocation,i),e.uniform1f(Ge.interactionRangeUniformLocation,n),e.uniform1f(Ge.deltaTimeUniformLocation,a),e.uniform2f(Ge.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(Ge.resolutionUniformLocation,e.canvas.width,e.canvas.height),e.drawArrays(e.TRIANGLES,0,6);{const s=gt;gt=Xt,Xt=s}return gt.tex};function ji(t){let e,o,n,i,a,s,r,c,l,m,v,b,h,g=t[2]?"Play":"Pause",R,y,$,P=t[1]?"Normal Speed":"Slow Mo",N,z,O,W,d=t[5].width*t[5].height+"",L,p,A,H,te,S,Y,G,q,ae,U,ne,le,oe,xe,_e,de,Ie,Ee,ce,Se,Te,pe,Ce,Ue,me,ze,M,se,ke;return{c(){e=T("p"),o=B("This could be a kind of water simulation."),n=F(),i=T("p"),a=B(`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),s=F(),r=T("p"),c=B("For now creating vertical walls create a bug so we warp the horizontal coordinates."),l=F(),m=T("canvas"),v=F(),b=T("div"),h=T("button"),R=B(g),y=F(),$=T("button"),N=B(P),z=F(),O=T("span"),W=B("particles: "),L=B(d),p=F(),A=T("label"),H=B("Smooth steps"),te=F(),S=T("input"),Y=F(),G=T("div"),q=T("ul"),ae=T("li"),U=T("label"),ne=B("Interaction Range"),le=F(),oe=T("input"),xe=F(),_e=T("li"),de=T("label"),Ie=B("Drag"),Ee=F(),ce=T("input"),Se=F(),Te=T("li"),pe=T("label"),Ce=B("Time step"),Ue=F(),me=T("input"),ze=F(),M=T("ul"),this.h()},l(C){e=x(C,"P",{});var j=E(e);o=I(j,"This could be a kind of water simulation."),j.forEach(f),n=D(C),i=x(C,"P",{});var Ye=E(i);a=I(Ye,`Here we added a gravity force to the shader which pulls cells apart and we can experiment with
    different values of the parameters.`),Ye.forEach(f),s=D(C),r=x(C,"P",{});var De=E(r);c=I(De,"For now creating vertical walls create a bug so we warp the horizontal coordinates."),De.forEach(f),l=D(C),m=x(C,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(m).forEach(f),v=D(C),b=x(C,"DIV",{});var $e=E(b);h=x($e,"BUTTON",{});var Ve=E(h);R=I(Ve,g),Ve.forEach(f),y=D($e),$=x($e,"BUTTON",{});var ve=E($);N=I(ve,P),ve.forEach(f),z=D($e),O=x($e,"SPAN",{});var ye=E(O);W=I(ye,"particles: "),L=I(ye,d),ye.forEach(f),p=D($e),A=x($e,"LABEL",{for:!0});var Xe=E(A);H=I(Xe,"Smooth steps"),Xe.forEach(f),te=D($e),S=x($e,"INPUT",{type:!0,min:!0}),$e.forEach(f),Y=D(C),G=x(C,"DIV",{});var Me=E(G);q=x(Me,"UL",{});var Re=E(q);ae=x(Re,"LI",{});var X=E(ae);U=x(X,"LABEL",{for:!0});var ee=E(U);ne=I(ee,"Interaction Range"),ee.forEach(f),le=D(X),oe=x(X,"INPUT",{id:!0,type:!0,min:!0}),X.forEach(f),xe=D(Re),_e=x(Re,"LI",{});var nt=E(_e);de=x(nt,"LABEL",{for:!0});var pt=E(de);Ie=I(pt,"Drag"),pt.forEach(f),Ee=D(nt),ce=x(nt,"INPUT",{id:!0,type:!0,min:!0}),nt.forEach(f),Se=D(Re),Te=x(Re,"LI",{});var Je=E(Te);pe=x(Je,"LABEL",{for:!0});var ht=E(pe);Ce=I(ht,"Time step"),ht.forEach(f),Ue=D(Je),me=x(Je,"INPUT",{id:!0,type:!0,min:!0}),Je.forEach(f),ze=D(Re),M=x(Re,"UL",{}),E(M).forEach(f),Re.forEach(f),Me.forEach(f),this.h()},h(){_(m,"id","canvas"),Qe(m,"background-color","black"),_(m,"width",t[4].width),_(m,"height",t[4].height),_(A,"for","steps"),_(S,"type","number"),_(S,"min",0),_(U,"for","interactionRange"),_(oe,"id","interactionRange"),_(oe,"type","number"),_(oe,"min",0),_(de,"for","drag"),_(ce,"id","drag"),_(ce,"type","number"),_(ce,"min",0),_(pe,"for","deltaTime"),_(me,"id","deltaTime"),_(me,"type","number"),_(me,"min",0)},m(C,j){w(C,e,j),u(e,o),w(C,n,j),w(C,i,j),u(i,a),w(C,s,j),w(C,r,j),u(r,c),w(C,l,j),w(C,m,j),w(C,v,j),w(C,b,j),u(b,h),u(h,R),u(b,y),u(b,$),u($,N),u(b,z),u(b,O),u(O,W),u(O,L),u(b,p),u(b,A),u(A,H),u(b,te),u(b,S),ie(S,t[0]),w(C,Y,j),w(C,G,j),u(G,q),u(q,ae),u(ae,U),u(U,ne),u(ae,le),u(ae,oe),ie(oe,t[3].interactionRange),u(q,xe),u(q,_e),u(_e,de),u(de,Ie),u(_e,Ee),u(_e,ce),ie(ce,t[3].drag),u(q,Se),u(q,Te),u(Te,pe),u(pe,Ce),u(Te,Ue),u(Te,me),ie(me,t[3].timeStep),u(q,ze),u(q,M),se||(ke=[fe(h,"click",t[6]),fe($,"click",t[7]),fe(S,"input",t[8]),fe(oe,"input",t[9]),fe(ce,"input",t[10]),fe(me,"input",t[11])],se=!0)},p(C,[j]){j&4&&g!==(g=C[2]?"Play":"Pause")&&tt(R,g),j&2&&P!==(P=C[1]?"Normal Speed":"Slow Mo")&&tt(N,P),j&1&&re(S.value)!==C[0]&&ie(S,C[0]),j&8&&re(oe.value)!==C[3].interactionRange&&ie(oe,C[3].interactionRange),j&8&&re(ce.value)!==C[3].drag&&ie(ce,C[3].drag),j&8&&re(me.value)!==C[3].timeStep&&ie(me,C[3].timeStep)},i:ue,o:ue,d(C){C&&f(e),C&&f(n),C&&f(i),C&&f(s),C&&f(r),C&&f(l),C&&f(m),C&&f(v),C&&f(b),C&&f(Y),C&&f(G),se=!1,Gt(ke)}}}function Ki(t,e,o){const n={width:800,height:600},i={width:500,height:20};let a=1,s=!1,r=!0;const c={interactionRange:6,drag:5,timeStep:10};function l(){const y=Rt();he(y.canvas);const{ids:$,positions:P,colors:N}=zi({texDimensions:i,screenDimensions:{width:n.width,height:n.height},mode:"disk"});Ni(y,{ids:$,colors:N,texDimensions:i});let z=Gi(y,{positions:P,texDimensions:i});function O(){if(he(y.canvas),!r)for(let W=0;W<a;W++)z=Hi({gl:y,texDimensions:i,interactionRange:c.interactionRange,drag:c.drag,deltaTime:c.timeStep});return Oi({gl:y,positionTex:z,textureDimension:i,ids:$}),r?requestAnimationFrame(O):s?setTimeout(()=>requestAnimationFrame(O),1e3):requestAnimationFrame(O)}requestAnimationFrame(O)}Be(()=>l());const m=()=>o(2,r=!r),v=()=>o(1,s=!s);function b(){a=re(this.value),o(0,a)}function h(){c.interactionRange=re(this.value),o(3,c)}function g(){c.drag=re(this.value),o(3,c)}function R(){c.timeStep=re(this.value),o(3,c)}return[a,s,r,c,n,i,m,v,b,h,g,R]}class Qi extends be{constructor(e){super(),ge(this,e,Ki,ji,we,{})}}const Ji=`attribute float id;
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
`,Zi=`precision mediump float;
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
`;let et,lt,hn,vn;const er=(t,e)=>{const{ids:o,colors:n}=e;lt=Ae(t,[Ji,Zi]),et={idAttributeLocation:t.getAttribLocation(lt,"id"),colorAttributeLocation:t.getAttribLocation(lt,"color"),sizeUniformLocation:t.getUniformLocation(lt,"size"),texDimensionsUniformLocation:t.getUniformLocation(lt,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(lt,"worldDimensions")},hn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,hn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),vn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,vn),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW)},tr=t=>{const{gl:e,positionTex:o,texDimensions:n,worldDimensions:i,particlesSize:a,ids:s}=t,r=1,c=e.FLOAT,l=!1,m=0,v=0;he(e.canvas),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,hn),e.vertexAttribPointer(et.idAttributeLocation,r,c,l,m,v),e.enableVertexAttribArray(et.idAttributeLocation),e.bindBuffer(e.ARRAY_BUFFER,vn),e.vertexAttribPointer(et.colorAttributeLocation,r,c,l,m,v),e.enableVertexAttribArray(et.colorAttributeLocation),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o),e.useProgram(lt),e.uniform1f(et.sizeUniformLocation,a),e.uniform2f(et.worldDimensionsUniformLocation,i.width,i.height),e.uniform2f(et.texDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.POINTS,v,s.length)};function nr(t){const{texDimensions:e,worldDimensions:o,mode:n}=t,i=e.width*e.height,a=new Array(i).fill(0).map((c,l)=>l),s=new Array(i).fill(0).map(c=>Math.floor(Math.random()*4)),r=a.map(c=>{if(n==="random"){const{x:l,y:m}=or(o);return[l,m,0,0]}if(n==="disk"){const{x:m,y:v}=rr(o,200);return[m,v,0,0]}if(n==="square"){const{x:m,y:v}=ir(o,300);return[m,v,0,0]}if(n==="idDiagonal"){const{x:l,y:m}=ar(o,c,a.length);return[l,m,0,0]}if(n==="sinusoidal"){const{x:l,y:m}=kn(o,c,a.length,{x:1,y:5});return[l,m,0,0]}if(n==="circle"){const{x:l,y:m}=kn(o,c,a.length,{x:1,y:1});return[l,m,0,0]}}).flat();return{ids:a,positions:r,texDimensions:e,colors:s}}const or=t=>{const e=20+Math.random()*(t.width-40),o=Math.random()*(t.height-150);return{x:e,y:o}},ir=(t,e)=>{const o=Math.random()*e-e/2+t.width/2,n=Math.random()*e-e/2+t.height/2;return{x:o,y:n}},rr=(t,e)=>{const o=e*Math.random(),n=Math.random()*2*Math.PI,i=o*Math.cos(n)+t.width/2,a=o*Math.sin(n)+t.height/2;return{x:i,y:a}},ar=(t,e,o)=>{const n=_n(e,0,o,0,t.width,!1),i=_n(e,0,o,0,t.height,!1);return{x:n,y:i}},kn=(t,e,o,n)=>{const i=_n(e,0,o,0,1,!0)*2*Math.PI,a=n.x,r=Math.cos(a*i)*200+t.width/2,c=n.y,m=Math.sin(c*i)*200+t.height/2;return{x:r,y:m}},_n=function(t,e,o,n,i,a){const s=(t-e)/(o-e)*(i-n)+n;return a?n<i?Yn(s,n,i):Yn(s,i,n):s},Yn=function(t,e,o){return Math.max(Math.min(t,o),e)},sr=`attribute vec4 position;
void main() {
    gl_Position = position;
}
`,lr=`precision highp float;

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

`;let je,Ke,Tn,Mt,en,Vn,Wn,wt,kt;const cr=(t,e)=>{const{positions:o,texDimensions:n}=e,i=lr.replace("{{TEX_WIDTH}}",n.width.toFixed(1)).replace("{{TEX_HEIGHT}}",n.height.toFixed(1));return Ke=Ae(t,[sr,i]),je={positionAttributeLocation:t.getAttribLocation(Ke,"position"),positionTexLocation:t.getUniformLocation(Ke,"positionTex"),interactionRangeUniformLocation:t.getUniformLocation(Ke,"interactionRange"),dragUniformLocation:t.getUniformLocation(Ke,"drag"),deltaTimeUniformLocation:t.getUniformLocation(Ke,"deltaTime"),texDimensionsUniformLocation:t.getUniformLocation(Ke,"texDimensions"),worldDimensionsUniformLocation:t.getUniformLocation(Ke,"worldDimensions")},Tn=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,Tn),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),Mt=Fe(t,new Float32Array(o),n.width,n.height),en=Fe(t,null,n.width,n.height),Vn=Pe(t,Mt),Wn=Pe(t,en),wt={fb:Vn,tex:Mt},kt={fb:Wn,tex:en},Mt},fr=t=>{const{gl:e,texDimensions:o,worldDimensions:n,interactionRange:i,drag:a,deltaTime:s}=t;e.bindFramebuffer(e.FRAMEBUFFER,kt.fb),e.viewport(0,0,o.width,o.height),e.bindBuffer(e.ARRAY_BUFFER,Tn),e.enableVertexAttribArray(je.positionAttributeLocation),e.vertexAttribPointer(je.positionAttributeLocation,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,wt.tex),e.useProgram(Ke),e.uniform1i(je.positionTexLocation,0),e.uniform1f(je.dragUniformLocation,a),e.uniform1f(je.interactionRangeUniformLocation,i),e.uniform1f(je.deltaTimeUniformLocation,s),e.uniform2f(je.texDimensionsUniformLocation,o.width,o.height),e.uniform2f(je.worldDimensionsUniformLocation,n.width,n.height),e.drawArrays(e.TRIANGLES,0,6);{const r=wt;wt=kt,kt=r}return wt.tex};function ur(t){let e,o,n,i,a=t[3]?"Play":"Pause",s,r,c,l=t[2]?"Normal Speed":"Slow Mo",m,v,b,h,g=t[6].width*t[6].height+"",R,y,$,P,N,z,O,W,d,L,p,A,H,te,S,Y,G,q,ae,U,ne,le,oe,xe,_e,de,Ie,Ee,ce,Se,Te,pe,Ce,Ue,me,ze,M,se,ke,C,j,Ye,De,$e,Ve,ve,ye,Xe,Me,Re;return{c(){e=T("canvas"),o=F(),n=T("div"),i=T("button"),s=B(a),r=F(),c=T("button"),m=B(l),v=F(),b=T("span"),h=B("particles: "),R=B(g),y=F(),$=T("label"),P=B("Smooth steps"),N=F(),z=T("input"),O=F(),W=T("button"),d=B("Reset"),L=F(),p=T("div"),A=T("ul"),H=T("li"),te=T("label"),S=B("Interaction Range"),Y=F(),G=T("input"),q=F(),ae=T("li"),U=T("label"),ne=B("Drag"),le=F(),oe=T("input"),xe=F(),_e=T("li"),de=T("label"),Ie=B("Time step"),Ee=F(),ce=T("input"),Se=F(),Te=T("li"),pe=T("label"),Ce=B("Particles size"),Ue=F(),me=T("input"),ze=F(),M=T("li"),se=T("label"),ke=B("World: width"),C=F(),j=T("input"),Ye=F(),De=T("label"),$e=B("height"),Ve=F(),ve=T("input"),ye=F(),Xe=T("ul"),this.h()},l(X){e=x(X,"CANVAS",{id:!0,style:!0,width:!0,height:!0}),E(e).forEach(f),o=D(X),n=x(X,"DIV",{});var ee=E(n);i=x(ee,"BUTTON",{});var nt=E(i);s=I(nt,a),nt.forEach(f),r=D(ee),c=x(ee,"BUTTON",{});var pt=E(c);m=I(pt,l),pt.forEach(f),v=D(ee),b=x(ee,"SPAN",{});var Je=E(b);h=I(Je,"particles: "),R=I(Je,g),Je.forEach(f),y=D(ee),$=x(ee,"LABEL",{for:!0});var ht=E($);P=I(ht,"Smooth steps"),ht.forEach(f),N=D(ee),z=x(ee,"INPUT",{type:!0,min:!0}),O=D(ee),W=x(ee,"BUTTON",{});var $n=E(W);d=I($n,"Reset"),$n.forEach(f),ee.forEach(f),L=D(X),p=x(X,"DIV",{});var An=E(p);A=x(An,"UL",{});var Le=E(A);H=x(Le,"LI",{});var Ft=E(H);te=x(Ft,"LABEL",{for:!0});var bn=E(te);S=I(bn,"Interaction Range"),bn.forEach(f),Y=D(Ft),G=x(Ft,"INPUT",{id:!0,type:!0,min:!0}),Ft.forEach(f),q=D(Le),ae=x(Le,"LI",{});var Dt=E(ae);U=x(Dt,"LABEL",{for:!0});var gn=E(U);ne=I(gn,"Drag"),gn.forEach(f),le=D(Dt),oe=x(Dt,"INPUT",{id:!0,type:!0,min:!0}),Dt.forEach(f),xe=D(Le),_e=x(Le,"LI",{});var Ut=E(_e);de=x(Ut,"LABEL",{for:!0});var wn=E(de);Ie=I(wn,"Time step"),wn.forEach(f),Ee=D(Ut),ce=x(Ut,"INPUT",{id:!0,type:!0,min:!0}),Ut.forEach(f),Se=D(Le),Te=x(Le,"LI",{});var yt=E(Te);pe=x(yt,"LABEL",{for:!0});var En=E(pe);Ce=I(En,"Particles size"),En.forEach(f),Ue=D(yt),me=x(yt,"INPUT",{id:!0,type:!0,min:!0}),yt.forEach(f),ze=D(Le),M=x(Le,"LI",{});var Ze=E(M);se=x(Ze,"LABEL",{for:!0});var Rn=E(se);ke=I(Rn,"World: width"),Rn.forEach(f),C=D(Ze),j=x(Ze,"INPUT",{id:!0,type:!0,min:!0}),Ye=D(Ze),De=x(Ze,"LABEL",{for:!0});var Fn=E(De);$e=I(Fn,"height"),Fn.forEach(f),Ve=D(Ze),ve=x(Ze,"INPUT",{id:!0,type:!0,min:!0}),Ze.forEach(f),ye=D(Le),Xe=x(Le,"UL",{}),E(Xe).forEach(f),Le.forEach(f),An.forEach(f),this.h()},h(){_(e,"id","canvas"),Qe(e,"background-color","black"),_(e,"width",t[5].width),_(e,"height",t[5].height),_($,"for","steps"),_(z,"type","number"),_(z,"min",0),_(te,"for","interactionRange"),_(G,"id","interactionRange"),_(G,"type","number"),_(G,"min",0),_(U,"for","drag"),_(oe,"id","drag"),_(oe,"type","number"),_(oe,"min",0),_(de,"for","deltaTime"),_(ce,"id","deltaTime"),_(ce,"type","number"),_(ce,"min",0),_(pe,"for","particlesSize"),_(me,"id","particlesSize"),_(me,"type","number"),_(me,"min",0),_(se,"for","worldWidth"),_(j,"id","worldWidth"),_(j,"type","number"),_(j,"min",0),_(De,"for","worldHeight"),_(ve,"id","worldHeight"),_(ve,"type","number"),_(ve,"min",0)},m(X,ee){w(X,e,ee),w(X,o,ee),w(X,n,ee),u(n,i),u(i,s),u(n,r),u(n,c),u(c,m),u(n,v),u(n,b),u(b,h),u(b,R),u(n,y),u(n,$),u($,P),u(n,N),u(n,z),ie(z,t[1]),u(n,O),u(n,W),u(W,d),w(X,L,ee),w(X,p,ee),u(p,A),u(A,H),u(H,te),u(te,S),u(H,Y),u(H,G),ie(G,t[4].interactionRange),u(A,q),u(A,ae),u(ae,U),u(U,ne),u(ae,le),u(ae,oe),ie(oe,t[4].drag),u(A,xe),u(A,_e),u(_e,de),u(de,Ie),u(_e,Ee),u(_e,ce),ie(ce,t[4].timeStep),u(A,Se),u(A,Te),u(Te,pe),u(pe,Ce),u(Te,Ue),u(Te,me),ie(me,t[4].particlesSize),u(A,ze),u(A,M),u(M,se),u(se,ke),u(M,C),u(M,j),ie(j,t[0].width),u(M,Ye),u(M,De),u(De,$e),u(M,Ve),u(M,ve),ie(ve,t[0].height),u(A,ye),u(A,Xe),Me||(Re=[fe(i,"click",t[8]),fe(c,"click",t[9]),fe(z,"input",t[10]),fe(W,"click",t[11]),fe(G,"input",t[12]),fe(oe,"input",t[13]),fe(ce,"input",t[14]),fe(me,"input",t[15]),fe(j,"input",t[16]),fe(ve,"input",t[17])],Me=!0)},p(X,[ee]){ee&8&&a!==(a=X[3]?"Play":"Pause")&&tt(s,a),ee&4&&l!==(l=X[2]?"Normal Speed":"Slow Mo")&&tt(m,l),ee&2&&re(z.value)!==X[1]&&ie(z,X[1]),ee&16&&re(G.value)!==X[4].interactionRange&&ie(G,X[4].interactionRange),ee&16&&re(oe.value)!==X[4].drag&&ie(oe,X[4].drag),ee&16&&re(ce.value)!==X[4].timeStep&&ie(ce,X[4].timeStep),ee&16&&re(me.value)!==X[4].particlesSize&&ie(me,X[4].particlesSize),ee&1&&re(j.value)!==X[0].width&&ie(j,X[0].width),ee&1&&re(ve.value)!==X[0].height&&ie(ve,X[0].height)},i:ue,o:ue,d(X){X&&f(e),X&&f(o),X&&f(n),X&&f(L),X&&f(p),Me=!1,Gt(Re)}}}function mr(t,e,o){const n={width:800,height:600},i={width:1600,height:1200},a={width:200,height:20};let s=1,r=!1,c=!0;const l={interactionRange:6,drag:5,timeStep:10,particlesSize:4};let m,v;function b(){cancelAnimationFrame(v),m=Rt(),he(m.canvas);const{ids:d,positions:L,colors:p}=nr({texDimensions:a,worldDimensions:i,mode:"disk"});er(m,{ids:d,colors:p,texDimensions:a});let A=cr(m,{positions:L,texDimensions:a});function H(){if(he(m.canvas),!c)for(let te=0;te<s;te++)A=fr({gl:m,texDimensions:a,worldDimensions:i,interactionRange:l.interactionRange,drag:l.drag,deltaTime:l.timeStep});return tr({gl:m,positionTex:A,texDimensions:a,worldDimensions:i,particlesSize:l.particlesSize,ids:d}),r?setTimeout(()=>v=requestAnimationFrame(H),1e3):v=requestAnimationFrame(H)}v=requestAnimationFrame(H)}Be(()=>b());const h=()=>o(3,c=!c),g=()=>o(2,r=!r);function R(){s=re(this.value),o(1,s)}const y=()=>b();function $(){l.interactionRange=re(this.value),o(4,l)}function P(){l.drag=re(this.value),o(4,l)}function N(){l.timeStep=re(this.value),o(4,l)}function z(){l.particlesSize=re(this.value),o(4,l)}function O(){i.width=re(this.value),o(0,i)}function W(){i.height=re(this.value),o(0,i)}return[i,s,r,c,l,n,a,b,h,g,R,y,$,P,N,z,O,W]}class dr extends be{constructor(e){super(),ge(this,e,mr,ur,we,{})}}function pr(t){let e;return{c(){e=B("About")},l(o){e=I(o,"About")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function hr(t){let e;return{c(){e=B("Test 1")},l(o){e=I(o,"Test 1")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function vr(t){let e;return{c(){e=B("Test 2")},l(o){e=I(o,"Test 2")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function _r(t){let e;return{c(){e=B("Test 3")},l(o){e=I(o,"Test 3")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function Tr(t){let e;return{c(){e=B("Test 4")},l(o){e=I(o,"Test 4")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function xr(t){let e;return{c(){e=B("Test 5")},l(o){e=I(o,"Test 5")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function $r(t){let e;return{c(){e=B("Test 6")},l(o){e=I(o,"Test 6")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function Ar(t){let e;return{c(){e=B("Test 7")},l(o){e=I(o,"Test 7")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function br(t){let e;return{c(){e=B("Test 8")},l(o){e=I(o,"Test 8")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function gr(t){let e;return{c(){e=B("Test 9")},l(o){e=I(o,"Test 9")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function wr(t){let e;return{c(){e=B("Test 10")},l(o){e=I(o,"Test 10")},m(o,n){w(o,e,n)},d(o){o&&f(e)}}}function Er(t){let e,o,n,i,a,s,r,c,l,m,v,b,h,g,R,y,$,P,N,z,O,W;return e=new Ne({props:{$$slots:{default:[pr]},$$scope:{ctx:t}}}),n=new Ne({props:{$$slots:{default:[hr]},$$scope:{ctx:t}}}),a=new Ne({props:{$$slots:{default:[vr]},$$scope:{ctx:t}}}),r=new Ne({props:{$$slots:{default:[_r]},$$scope:{ctx:t}}}),l=new Ne({props:{$$slots:{default:[Tr]},$$scope:{ctx:t}}}),v=new Ne({props:{$$slots:{default:[xr]},$$scope:{ctx:t}}}),h=new Ne({props:{$$slots:{default:[$r]},$$scope:{ctx:t}}}),R=new Ne({props:{$$slots:{default:[Ar]},$$scope:{ctx:t}}}),$=new Ne({props:{$$slots:{default:[br]},$$scope:{ctx:t}}}),N=new Ne({props:{$$slots:{default:[gr]},$$scope:{ctx:t}}}),O=new Ne({props:{$$slots:{default:[wr]},$$scope:{ctx:t}}}),{c(){K(e.$$.fragment),o=F(),K(n.$$.fragment),i=F(),K(a.$$.fragment),s=F(),K(r.$$.fragment),c=F(),K(l.$$.fragment),m=F(),K(v.$$.fragment),b=F(),K(h.$$.fragment),g=F(),K(R.$$.fragment),y=F(),K($.$$.fragment),P=F(),K(N.$$.fragment),z=F(),K(O.$$.fragment)},l(d){Q(e.$$.fragment,d),o=D(d),Q(n.$$.fragment,d),i=D(d),Q(a.$$.fragment,d),s=D(d),Q(r.$$.fragment,d),c=D(d),Q(l.$$.fragment,d),m=D(d),Q(v.$$.fragment,d),b=D(d),Q(h.$$.fragment,d),g=D(d),Q(R.$$.fragment,d),y=D(d),Q($.$$.fragment,d),P=D(d),Q(N.$$.fragment,d),z=D(d),Q(O.$$.fragment,d)},m(d,L){J(e,d,L),w(d,o,L),J(n,d,L),w(d,i,L),J(a,d,L),w(d,s,L),J(r,d,L),w(d,c,L),J(l,d,L),w(d,m,L),J(v,d,L),w(d,b,L),J(h,d,L),w(d,g,L),J(R,d,L),w(d,y,L),J($,d,L),w(d,P,L),J(N,d,L),w(d,z,L),J(O,d,L),W=!0},p(d,L){const p={};L&1&&(p.$$scope={dirty:L,ctx:d}),e.$set(p);const A={};L&1&&(A.$$scope={dirty:L,ctx:d}),n.$set(A);const H={};L&1&&(H.$$scope={dirty:L,ctx:d}),a.$set(H);const te={};L&1&&(te.$$scope={dirty:L,ctx:d}),r.$set(te);const S={};L&1&&(S.$$scope={dirty:L,ctx:d}),l.$set(S);const Y={};L&1&&(Y.$$scope={dirty:L,ctx:d}),v.$set(Y);const G={};L&1&&(G.$$scope={dirty:L,ctx:d}),h.$set(G);const q={};L&1&&(q.$$scope={dirty:L,ctx:d}),R.$set(q);const ae={};L&1&&(ae.$$scope={dirty:L,ctx:d}),$.$set(ae);const U={};L&1&&(U.$$scope={dirty:L,ctx:d}),N.$set(U);const ne={};L&1&&(ne.$$scope={dirty:L,ctx:d}),O.$set(ne)},i(d){W||(k(e.$$.fragment,d),k(n.$$.fragment,d),k(a.$$.fragment,d),k(r.$$.fragment,d),k(l.$$.fragment,d),k(v.$$.fragment,d),k(h.$$.fragment,d),k(R.$$.fragment,d),k($.$$.fragment,d),k(N.$$.fragment,d),k(O.$$.fragment,d),W=!0)},o(d){V(e.$$.fragment,d),V(n.$$.fragment,d),V(a.$$.fragment,d),V(r.$$.fragment,d),V(l.$$.fragment,d),V(v.$$.fragment,d),V(h.$$.fragment,d),V(R.$$.fragment,d),V($.$$.fragment,d),V(N.$$.fragment,d),V(O.$$.fragment,d),W=!1},d(d){Z(e,d),d&&f(o),Z(n,d),d&&f(i),Z(a,d),d&&f(s),Z(r,d),d&&f(c),Z(l,d),d&&f(m),Z(v,d),d&&f(b),Z(h,d),d&&f(g),Z(R,d),d&&f(y),Z($,d),d&&f(P),Z(N,d),d&&f(z),Z(O,d)}}}function Rr(t){let e,o;return{c(){e=T("p"),o=B("This page is an experiment to run simulation on the GPU.")},l(n){e=x(n,"P",{});var i=E(e);o=I(i,"This page is an experiment to run simulation on the GPU."),i.forEach(f)},m(n,i){w(n,e,i),u(e,o)},p:ue,d(n){n&&f(e)}}}function Fr(t){let e,o;return e=new Eo({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Dr(t){let e,o;return e=new Uo({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Ur(t){let e,o;return e=new Mo({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function yr(t){let e,o;return e=new ko({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Lr(t){let e,o;return e=new jo({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Pr(t){let e,o;return e=new si({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Br(t){let e,o;return e=new $i({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Ir(t){let e,o;return e=new Si({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Sr(t){let e,o;return e=new Qi({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Cr(t){let e,o;return e=new dr({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}function Mr(t){let e,o,n,i,a,s,r,c,l,m,v,b,h,g,R,y,$,P,N,z,O,W,d,L;return e=new vo({props:{$$slots:{default:[Er]},$$scope:{ctx:t}}}),n=new Oe({props:{$$slots:{default:[Rr]},$$scope:{ctx:t}}}),a=new Oe({props:{$$slots:{default:[Fr]},$$scope:{ctx:t}}}),r=new Oe({props:{$$slots:{default:[Dr]},$$scope:{ctx:t}}}),l=new Oe({props:{$$slots:{default:[Ur]},$$scope:{ctx:t}}}),v=new Oe({props:{$$slots:{default:[yr]},$$scope:{ctx:t}}}),h=new Oe({props:{$$slots:{default:[Lr]},$$scope:{ctx:t}}}),R=new Oe({props:{$$slots:{default:[Pr]},$$scope:{ctx:t}}}),$=new Oe({props:{$$slots:{default:[Br]},$$scope:{ctx:t}}}),N=new Oe({props:{$$slots:{default:[Ir]},$$scope:{ctx:t}}}),O=new Oe({props:{$$slots:{default:[Sr]},$$scope:{ctx:t}}}),d=new Oe({props:{$$slots:{default:[Cr]},$$scope:{ctx:t}}}),{c(){K(e.$$.fragment),o=F(),K(n.$$.fragment),i=F(),K(a.$$.fragment),s=F(),K(r.$$.fragment),c=F(),K(l.$$.fragment),m=F(),K(v.$$.fragment),b=F(),K(h.$$.fragment),g=F(),K(R.$$.fragment),y=F(),K($.$$.fragment),P=F(),K(N.$$.fragment),z=F(),K(O.$$.fragment),W=F(),K(d.$$.fragment)},l(p){Q(e.$$.fragment,p),o=D(p),Q(n.$$.fragment,p),i=D(p),Q(a.$$.fragment,p),s=D(p),Q(r.$$.fragment,p),c=D(p),Q(l.$$.fragment,p),m=D(p),Q(v.$$.fragment,p),b=D(p),Q(h.$$.fragment,p),g=D(p),Q(R.$$.fragment,p),y=D(p),Q($.$$.fragment,p),P=D(p),Q(N.$$.fragment,p),z=D(p),Q(O.$$.fragment,p),W=D(p),Q(d.$$.fragment,p)},m(p,A){J(e,p,A),w(p,o,A),J(n,p,A),w(p,i,A),J(a,p,A),w(p,s,A),J(r,p,A),w(p,c,A),J(l,p,A),w(p,m,A),J(v,p,A),w(p,b,A),J(h,p,A),w(p,g,A),J(R,p,A),w(p,y,A),J($,p,A),w(p,P,A),J(N,p,A),w(p,z,A),J(O,p,A),w(p,W,A),J(d,p,A),L=!0},p(p,A){const H={};A&1&&(H.$$scope={dirty:A,ctx:p}),e.$set(H);const te={};A&1&&(te.$$scope={dirty:A,ctx:p}),n.$set(te);const S={};A&1&&(S.$$scope={dirty:A,ctx:p}),a.$set(S);const Y={};A&1&&(Y.$$scope={dirty:A,ctx:p}),r.$set(Y);const G={};A&1&&(G.$$scope={dirty:A,ctx:p}),l.$set(G);const q={};A&1&&(q.$$scope={dirty:A,ctx:p}),v.$set(q);const ae={};A&1&&(ae.$$scope={dirty:A,ctx:p}),h.$set(ae);const U={};A&1&&(U.$$scope={dirty:A,ctx:p}),R.$set(U);const ne={};A&1&&(ne.$$scope={dirty:A,ctx:p}),$.$set(ne);const le={};A&1&&(le.$$scope={dirty:A,ctx:p}),N.$set(le);const oe={};A&1&&(oe.$$scope={dirty:A,ctx:p}),O.$set(oe);const xe={};A&1&&(xe.$$scope={dirty:A,ctx:p}),d.$set(xe)},i(p){L||(k(e.$$.fragment,p),k(n.$$.fragment,p),k(a.$$.fragment,p),k(r.$$.fragment,p),k(l.$$.fragment,p),k(v.$$.fragment,p),k(h.$$.fragment,p),k(R.$$.fragment,p),k($.$$.fragment,p),k(N.$$.fragment,p),k(O.$$.fragment,p),k(d.$$.fragment,p),L=!0)},o(p){V(e.$$.fragment,p),V(n.$$.fragment,p),V(a.$$.fragment,p),V(r.$$.fragment,p),V(l.$$.fragment,p),V(v.$$.fragment,p),V(h.$$.fragment,p),V(R.$$.fragment,p),V($.$$.fragment,p),V(N.$$.fragment,p),V(O.$$.fragment,p),V(d.$$.fragment,p),L=!1},d(p){Z(e,p),p&&f(o),Z(n,p),p&&f(i),Z(a,p),p&&f(s),Z(r,p),p&&f(c),Z(l,p),p&&f(m),Z(v,p),p&&f(b),Z(h,p),p&&f(g),Z(R,p),p&&f(y),Z($,p),p&&f(P),Z(N,p),p&&f(z),Z(O,p),p&&f(W),Z(d,p)}}}function Nr(t){let e,o,n;return o=new fo({props:{$$slots:{default:[Mr]},$$scope:{ctx:t}}}),{c(){e=T("div"),K(o.$$.fragment)},l(i){e=x(i,"DIV",{});var a=E(e);Q(o.$$.fragment,a),a.forEach(f)},m(i,a){w(i,e,a),J(o,e,null),n=!0},p(i,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:i}),o.$set(s)},i(i){n||(k(o.$$.fragment,i),n=!0)},o(i){V(o.$$.fragment,i),n=!1},d(i){i&&f(e),Z(o)}}}class Or extends be{constructor(e){super(),ge(this,e,null,Nr,we,{})}}function zr(t){let e,o;return e=new Or({}),{c(){K(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){J(e,n,i),o=!0},p:ue,i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){Z(e,n)}}}class Wr extends be{constructor(e){super(),ge(this,e,null,zr,we,{})}}export{Wr as default};
