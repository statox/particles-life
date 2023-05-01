import{S as I,i as T,s as W,k as C,l as M,m as R,h as g,n as $,b as S,X as _t,B as b,Y as wt,o as H,w as x,x as L,y as A,f as w,t as k,z as B,Q as gt,K as q,M as bt,a as Z,e as j,c as Q,g as tt,d as et,L as vt,q as N,r as O,D as P,v as at}from"../../../chunks/index-2f3b6d71.js";import{T as kt,a as St,b as $t,c as yt}from"../../../chunks/TabPanel-e2218539.js";import{_ as nt}from"../../../chunks/preload-helper-41c905a7.js";import{R as ot}from"../../../chunks/regl-89b00fbf.js";function Dt(r){let t,e,n;return{c(){t=C("div"),this.h()},l(o){t=M(o,"DIV",{style:!0,class:!0}),R(t).forEach(g),this.h()},h(){$(t,"style",r[0]),$(t,"class","m-0")},m(o,a){S(o,t,a),e||(n=_t(r[1].call(null,t)),e=!0)},p(o,[a]){a&1&&$(t,"style",o[0])},i:b,o:b,d(o){o&&g(t),e=!1,n()}}}function xt(r,t){return t.forEach(([e,n])=>r[e]=n),r}function At(r,t,e){let{target:n=void 0}=t,{sketch:o=void 0}=t,{parentDivStyle:a="display: block;"}=t,{debug:s=!1}=t,u;const i=wt(),f={ref(){i("ref",n)},instance(){i("instance",u)}};function c(l){return e(2,n=l),{destroy(){e(2,n=void 0)}}}return H(async()=>{const l=await nt(()=>import("../../../chunks/p5.min-b96f42d1.js").then(v=>v.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:m}=l,p=Object.entries(l).filter(([v,h])=>h instanceof Function&&v[0]!=="_"&&v!=="default");s&&console.log("available p5 native classes",p),u=new m(v=>(v=xt(v,p),s&&console.log("p5 instance",v),window._p5Instance=v,o(v)),n),f.ref(),f.instance()}),r.$$set=l=>{"target"in l&&e(2,n=l.target),"sketch"in l&&e(3,o=l.sketch),"parentDivStyle"in l&&e(0,a=l.parentDivStyle),"debug"in l&&e(4,s=l.debug)},[a,c,n,o,s]}class rt extends I{constructor(t){super(),T(this,t,At,Dt,W,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Bt=r=>{const t=[];for(let s=0;s<r.height;s++){t.push([]);for(let u=0;u<r.width;u++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(r.width/2),a=Math.floor(r.height/2);for(let s=a-n;s<a+n;s++)for(let u=o-e;u<o+e;u++)t[s][u].B=1;return t},Et=(r,t)=>{const e={width:r.width/t[0].length,height:r.height/t.length};for(let n=0;n<t.length;n++)for(let o=0;o<t[0].length;o++){const{A:a,B:s}=t[n][o];r.fill(a*255,s*255,0),r.rect(o*e.width,n*e.height,e.width,e.height)}},Lt=1,Ct=.5,st=.055,Mt=.062,Rt=r=>{const t=[];for(let e=0;e<r.length;e++){t.push([]);for(let n=0;n<r[0].length;n++){const{A:o,B:a}=r[e][n],s=it(r,{x:n,y:e},"A"),u=it(r,{x:n,y:e},"B"),i=o+(Lt*s-o*a*a+st*(1-o)),f=a+(Ct*u+o*a*a-(Mt+st)*a);t[e].push({A:i,B:f})}}return t},it=(r,t,e)=>{const n=Pt(r,t);let o=0;for(const a of n){const{coord:s,weight:u}=a;o+=r[s.y][s.x][e]*u}return o},Pt=(r,t)=>{const{x:e,y:n}=t,o=r[0].length,a=r.length,s={coord:{x:e>0?e-1:o-1,y:n>0?n-1:a-1},weight:.05},u={coord:{x:e,y:n>0?n-1:a-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:a-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},m={coord:{x:e>0?e-1:o-1,y:n<a-1?n+1:0},weight:.05},d={coord:{x:e,y:n<a-1?n+1:0},weight:.2},p={coord:{x:e<o-1?e+1:0,y:n<a-1?n+1:0},weight:.05};return[s,u,i,f,c,l,m,d,p]};function It(r){let t,e;return t=new rt({props:{sketch:r[0]}}),{c(){x(t.$$.fragment)},l(n){L(t.$$.fragment,n)},m(n,o){A(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){k(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}function Tt(r){const t={width:200,height:200};let e;return[o=>{let a;o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),a=Bt(t)},o.draw=()=>{o.background(0);for(let s=0;s<20;s++)a=Rt(a);Et(e,a)}}]}let Wt=class extends I{constructor(t){super(),T(this,t,Tt,It,W,{})}},y,z;const Nt=r=>{y=[],z=[];for(let a=0;a<r.height;a++){y.push([]),z.push([]);for(let s=0;s<r.width;s++)y[y.length-1].push({A:1,B:0}),z[y.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let a=o-e;a<o+e;a++)for(let s=n-t;s<n+t;s++)y[a][s].B=1;return y},Ot=r=>{const t={width:r.width/y[0].length,height:r.height/y.length};for(let e=0;e<y.length;e++)for(let n=0;n<y[0].length;n++){const{A:o,B:a}=y[e][n];r.fill(o*255,a*255,0),r.rect(n*t.width,e*t.height,t.width,t.height)}},Vt=1,Ft=.5,lt=.055,Xt=.062,zt=()=>{for(let t=0;t<y.length;t++)for(let e=0;e<y[0].length;e++){const{A:n,B:o}=y[t][e],a=ct(y,{x:e,y:t},"A"),s=ct(y,{x:e,y:t},"B"),u=n+(Vt*a-n*o*o+lt*(1-n)),i=o+(Ft*s+n*o*o-(Xt+lt)*o);z[t][e]={A:u,B:i}}const r=y;return y=z,z=r,y},ct=(r,t,e)=>{const n=Gt(r,t);let o=0;for(const a of n){const{coord:s,weight:u}=a;o+=r[s.y][s.x][e]*u}return o},Gt=(r,t)=>{const{x:e,y:n}=t,o=r[0].length,a=r.length,s={coord:{x:e>0?e-1:o-1,y:n>0?n-1:a-1},weight:.05},u={coord:{x:e,y:n>0?n-1:a-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:a-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},m={coord:{x:e>0?e-1:o-1,y:n<a-1?n+1:0},weight:.05},d={coord:{x:e,y:n<a-1?n+1:0},weight:.2},p={coord:{x:e<o-1?e+1:0,y:n<a-1?n+1:0},weight:.05};return[s,u,i,f,c,l,m,d,p]};function Ut(r){let t,e;return t=new rt({props:{sketch:r[0]}}),{c(){x(t.$$.fragment)},l(n){L(t.$$.fragment,n)},m(n,o){A(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){k(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}function Yt(r){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Nt(t)},o.draw=()=>{for(let a=0;a<5;a++)zt();Ot(e)}}]}let Kt=class extends I{constructor(t){super(),T(this,t,Yt,Ut,W,{})}},_,G;const Zt=r=>{_=[],G=[];for(let a=0;a<r.height;a++){_.push([]),G.push([]);for(let s=0;s<r.width;s++)_[_.length-1].push({A:1,B:0}),G[_.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let a=o-e;a<o+e;a++)for(let s=n-t;s<n+t;s++)_[a][s].B=1;return _},Qt=r=>{const t={width:r.width/_[0].length,height:r.height/_.length};for(let e=0;e<_.length;e++)for(let n=0;n<_[0].length;n++){const{A:o,B:a}=_[e][n];r.fill(o*255,a*255,0),r.rect(n*t.width,e*t.height,t.width,t.height)}},jt=1,Ht=.5,ft=.055,qt=.062,Jt=()=>{for(let t=0;t<_.length;t++)for(let e=0;e<_[0].length;e++){const{A:n,B:o}=_[t][e],a=ut(_,{x:e,y:t},"A"),s=ut(_,{x:e,y:t},"B"),u=n+(jt*a-n*o*o+ft*(1-n)),i=o+(Ht*s+n*o*o-(qt+ft)*o);G[t][e]={A:u,B:i}}const r=_;return _=G,G=r,_},ut=(r,t,e)=>{const n=te(r,t);let o=0;for(const a of n){const{coord:s,weight:u}=a;o+=r[s.y][s.x][e]*u}return o},te=(r,t)=>{const{x:e,y:n}=t,o=r[0].length,a=r.length,s={coord:{x:e>0?e-1:o-1,y:n>0?n-1:a-1},weight:.05},u={coord:{x:e,y:n>0?n-1:a-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:a-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},m={coord:{x:e>0?e-1:o-1,y:n<a-1?n+1:0},weight:.05},d={coord:{x:e,y:n<a-1?n+1:0},weight:.2},p={coord:{x:e<o-1?e+1:0,y:n<a-1?n+1:0},weight:.05};return[s,u,i,f,c,l,m,d,p]};function ee(r){let t,e;return t=new rt({props:{sketch:r[0]}}),{c(){x(t.$$.fragment)},l(n){L(t.$$.fragment,n)},m(n,o){A(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){k(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}function ne(r){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Zt(t)},o.draw=()=>{for(let a=0;a<5;a++)Jt();Qt(e)}}]}let oe=class extends I{constructor(t){super(),T(this,t,ne,ee,W,{})}};function re(r){let t;return{c(){t=C("canvas"),this.h()},l(e){t=M(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(g),this.h()},h(){$(t,"id","canvas"),$(t,"width",r[0].width),$(t,"height",r[0].height),$(t,"class","svelte-1b0ol19")},m(e,n){S(e,t,n)},p:b,i:b,o:b,d(e){e&&g(t)}}}function ae(r){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,o=Array(e*e).fill(0).map((a,s)=>{const u=Math.floor(s/e),i=s%e;return Math.hypot(e/2-i,e/2-u)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return H(()=>{const a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const s=ot({extensions:["OES_texture_float"],canvas:a}),u=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:e,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),i=s({frag:`
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${e})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${e})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${e})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${e})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${e})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${e})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${e})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${e})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${e})).rg * 0.05;

    return r;
}

void main() {
    float Da = 1.0;
    float Db = 0.5;
    float f = 0.055;
    float k = 0.062;

    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec2 L = laplacianDiff();
    float La = L.r;
    float Lb = L.g;

    float newA = A + ((Da * La) - (A * B * B) + (f * (1.0 - A)));
    float newB = B + ((Db * Lb) + (A * B * B) - ((k + f) * B));

    gl_FragColor = vec4(newA, newB, 0, 1);
}`,framebuffer:c=>u[(c.tick+1)%2]}),f=s({frag:`
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;
void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}`,vert:`
precision mediump float;
attribute vec2 position;
varying vec2 uv;
void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>u[c%2]},depth:{enable:!1},count:3});s.frame(()=>{f(()=>{s.draw(),i()})})}),[t]}let se=class extends I{constructor(t){super(),T(this,t,ae,re,W,{})}};const ie=(r,t,e)=>{const n=r*e;return Array(r*r).fill(0).map((o,a)=>{const s=Math.floor(a/r),u=a%r;return Math.hypot(r/2-u,r/2-s)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},le=(r,t)=>Array(r*r).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ce=(r,t)=>Array(r*r).fill(0).map((e,n)=>{const o=Math.floor(n/r),a=n%r;return Math.hypot(r/2-a,r/2-o)<t*r?[0,1,0,1]:[1,0,0,1]}).flat(),Y=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function fe(r){let t;return{c(){t=C("canvas"),this.h()},l(e){t=M(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(g),this.h()},h(){$(t,"id","canvas"),$(t,"width",r[0].width),$(t,"height",r[0].height),$(t,"class","svelte-1b0ol19")},m(e,n){S(e,t,n)},p:b,i:b,o:b,d(e){e&&g(t)}}}function ue(r){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={iteration:0},o={f:Y[e.presetParams].f,k:Y[e.presetParams].k};let a,s;const u=async()=>{const c=await nt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new c.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(o,"f").name("Feed rate").listen(),a.add(o,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const l=Y.reduce((p,v,h)=>(p[v.name]=h,p),{});a.add(e,"presetParams",l).onFinishChange(()=>{o.f=Y[e.presetParams].f,o.k=Y[e.presetParams].k});const m={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",m).onFinishChange(e.reset);const d=a.add(n,"iteration").listen();d.domElement.style.pointerEvents="none"},i=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return e.pause=!e.pause,c.preventDefault();if(c.code==="KeyR")return f(),c.preventDefault()})},f=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");s&&s.destroy(),s=ot({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const l=2**11;let m;e.initialConditions==="randomSpots"?m=le(l,.001):e.initialConditions==="middleCircleAndRandomSpots"?m=ie(l,.005,.05):m=ce(l,.02);const d=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:l,data:m,wrap:"repeat",type:"float"}),depthStencil:!1})),p=s({frag:`
precision mediump float;

uniform sampler2D prevState;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${l})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${l})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${l})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${l})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${l})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${l})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${l})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${l})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${l})).rg * 0.05;

    return r;
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec2 L = laplacianDiff();
    float La = L.r;
    float Lb = L.g;

    float newA = A + ((Da * La) - (A * B * B) + (f * (1.0 - A)));
    float newB = B + ((Db * Lb) + (A * B * B) - ((k + f) * B));

    gl_FragColor = vec4(newA, newB, 0, 1);
}`,framebuffer:h=>d[(h.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k")}}),v=s({frag:`
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;
void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}`,vert:`
precision mediump float;
attribute vec2 position;
varying vec2 uv;
void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:h})=>d[h%2]},depth:{enable:!1},count:3});s.frame(()=>{v(()=>{s.draw(),!e.pause&&(n.iteration++,p({Da:1,Db:.5,...o}))})})};return H(()=>{u(),i(),f()}),gt(()=>{a.destroy(),s.destroy()}),[t]}let pe=class extends I{constructor(t){super(),T(this,t,ue,fe,W,{})}};const me=(r,t,e)=>{const n=r*e;return Array(r*r).fill(0).map((o,a)=>{const s=Math.floor(a/r),u=a%r;return Math.hypot(r/2-u,r/2-s)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},he=(r,t)=>Array(r*r).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),de=(r,t)=>Array(r*r).fill(0).map((e,n)=>{const o=Math.floor(n/r),a=n%r;return Math.hypot(r/2-a,r/2-o)<t*r?[0,1,0,1]:[1,0,0,1]}).flat(),K=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],ge=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,ve=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,$e=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

uniform vec2 mousePosition;
uniform bool penIsActive;
uniform float penRadius;

varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(radius)).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(radius)).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(radius)).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(radius)).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(radius)).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(radius)).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(radius)).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(radius)).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(radius)).rg * 0.05;

    return r;
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec2 L = laplacianDiff();
    float La = L.r;
    float Lb = L.g;

    float newA = A + ((Da * La) - (A * B * B) + (f * (1.0 - A)));
    float newB = B + ((Db * Lb) + (A * B * B) - ((k + f) * B));

    if (penIsActive && distance(uv, mousePosition) < penRadius) {
        newA = 0.0;
        newB = 1.0;
    }
    gl_FragColor = vec4(newA, newB, 0, 1);
}
`;function ye(r){let t,e,n;return{c(){t=C("canvas"),this.h()},l(o){t=M(o,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(g),this.h()},h(){$(t,"id","canvas"),$(t,"width",r[1].width),$(t,"height",r[1].height),$(t,"class","svelte-1b0ol19")},m(o,a){S(o,t,a),e||(n=[q(t,"mousemove",r[2]),q(t,"mousedown",r[3]),q(t,"mouseup",r[4])],e=!0)},p:b,i:b,o:b,d(o){o&&g(t),e=!1,bt(n)}}}const J=11;function _e(r,t,e){const n={width:window.innerWidth-50,height:window.innerHeight-10},o={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},a={pressed:!1,x:0,y:0,penSize:3},s={iteration:0},u={f:K[o.presetParams].f,k:K[o.presetParams].k};let i,f;const c=async()=>{const h=await nt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new h.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(u,"f").name("Feed rate").listen(),i.add(u,"k").name("Kill rate").listen(),i.add(o,"pause").name("Pause"),i.add(o,"reset").name("Reset simulation");const D=K.reduce((V,U,F)=>(V[U.name]=F,V),{});i.add(o,"presetParams",D).onFinishChange(()=>{u.f=K[o.presetParams].f,u.k=K[o.presetParams].k});const E={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(o,"initialConditions",E).onFinishChange(o.reset);const X=i.add(s,"iteration").listen();X.domElement.style.pointerEvents="none",i.add(a,"penSize",1,J,1).name("Pen size")},l=()=>{document.addEventListener("keydown",h=>{if(h.code==="Space")return o.pause=!o.pause,h.preventDefault();if(h.code==="KeyR")return m(),h.preventDefault()})},m=()=>{const h=document.getElementById("canvas");if(!h)throw new Error("Canvas container not ready");f&&f.destroy(),f=ot({extensions:["OES_texture_float"],canvas:h}),s.iteration=0;const D=2**J;let E;o.initialConditions==="randomSpots"?E=he(D,.001):o.initialConditions==="middleCircleAndRandomSpots"?E=me(D,.005,.05):E=de(D,.02);const X=Array(2).fill(0).map(()=>f.framebuffer({color:f.texture({radius:D,data:E,wrap:"repeat",type:"float"}),depthStencil:!1})),V=f({frag:$e,framebuffer:F=>X[(F.tick+1)%2],uniforms:{Da:f.prop("Da"),Db:f.prop("Db"),f:f.prop("f"),k:f.prop("k"),radius:D,mousePosition:f.prop("mousePosition"),penRadius:f.prop("penRadius"),penIsActive:f.prop("penIsActive")}}),U=f({frag:ve,vert:ge,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:F})=>X[F%2]},depth:{enable:!1},count:3});f.frame(()=>{U(()=>{f.draw(),!o.pause&&(s.iteration++,V({Da:1,Db:.5,mousePosition:[a.x,a.y],penRadius:1/2**(J-a.penSize),penIsActive:a.pressed,...u}))})})},d=h=>{if(!h.currentTarget)throw new Error("No target for the onmousemove event");if(!h.currentTarget.width||!h.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:D,y:E}=h,{width:X,height:V}=h.currentTarget,U=D/X,F=(V-E)/V;e(0,a.x=U,a),e(0,a.y=F,a)};return H(()=>{c(),l(),m()}),gt(()=>{i.destroy(),f.destroy()}),[a,n,d,()=>e(0,a.pressed=!0,a),()=>e(0,a.pressed=!1,a)]}class we extends I{constructor(t){super(),T(this,t,_e,ye,W,{})}}function pt(r,t,e){const n=r.slice();return n[1]=t[e],n}function mt(r,t,e){const n=r.slice();return n[1]=t[e],n}function be(r){let t;return{c(){t=N("About")},l(e){t=O(e,"About")},m(e,n){S(e,t,n)},d(e){e&&g(t)}}}function ke(r){let t=r[1].title+"",e;return{c(){e=N(t)},l(n){e=O(n,t)},m(n,o){S(n,e,o)},p:b,d(n){n&&g(e)}}}function ht(r){let t,e;return t=new yt({props:{$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){x(t.$$.fragment)},l(n){L(t.$$.fragment,n)},m(n,o){A(t,n,o),e=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){k(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}function Se(r){let t,e,n,o;t=new yt({props:{$$slots:{default:[be]},$$scope:{ctx:r}}});let a=r[0],s=[];for(let i=0;i<a.length;i+=1)s[i]=ht(mt(r,a,i));const u=i=>k(s[i],1,1,()=>{s[i]=null});return{c(){x(t.$$.fragment),e=Z();for(let i=0;i<s.length;i+=1)s[i].c();n=j()},l(i){L(t.$$.fragment,i),e=Q(i);for(let f=0;f<s.length;f+=1)s[f].l(i);n=j()},m(i,f){A(t,i,f),S(i,e,f);for(let c=0;c<s.length;c+=1)s[c].m(i,f);S(i,n,f),o=!0},p(i,f){const c={};if(f&64&&(c.$$scope={dirty:f,ctx:i}),t.$set(c),f&1){a=i[0];let l;for(l=0;l<a.length;l+=1){const m=mt(i,a,l);s[l]?(s[l].p(m,f),w(s[l],1)):(s[l]=ht(m),s[l].c(),w(s[l],1),s[l].m(n.parentNode,n))}for(tt(),l=a.length;l<s.length;l+=1)u(l);et()}},i(i){if(!o){w(t.$$.fragment,i);for(let f=0;f<a.length;f+=1)w(s[f]);o=!0}},o(i){k(t.$$.fragment,i),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)k(s[f]);o=!1},d(i){B(t,i),i&&g(e),vt(s,i),i&&g(n)}}}function De(r){let t,e,n,o,a,s,u,i,f,c,l,m;return{c(){t=C("p"),e=N("Experiments with "),n=C("a"),o=N("Reaction-diffusion systems"),a=Z(),s=C("p"),u=N("The code is based on "),i=C("a"),f=N("this tutorial"),c=N(`
                but reimplemented in a glsl shader with
                `),l=C("a"),m=N("regl"),this.h()},l(d){t=M(d,"P",{});var p=R(t);e=O(p,"Experiments with "),n=M(p,"A",{href:!0,target:!0});var v=R(n);o=O(v,"Reaction-diffusion systems"),v.forEach(g),p.forEach(g),a=Q(d),s=M(d,"P",{});var h=R(s);u=O(h,"The code is based on "),i=M(h,"A",{href:!0,target:!0});var D=R(i);f=O(D,"this tutorial"),D.forEach(g),c=O(h,`
                but reimplemented in a glsl shader with
                `),l=M(h,"A",{href:!0,target:!0});var E=R(l);m=O(E,"regl"),E.forEach(g),h.forEach(g),this.h()},h(){$(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),$(n,"target","none"),$(i,"href","https://karlsims.com/rd.html"),$(i,"target","none"),$(l,"href","https://github.com/regl-project/regl"),$(l,"target","none")},m(d,p){S(d,t,p),P(t,e),P(t,n),P(n,o),S(d,a,p),S(d,s,p),P(s,u),P(s,i),P(i,f),P(s,c),P(s,l),P(l,m)},p:b,d(d){d&&g(t),d&&g(a),d&&g(s)}}}function xe(r){let t,e,n;var o=r[1].component;function a(s){return{}}return o&&(t=at(o,a())),{c(){t&&x(t.$$.fragment),e=Z()},l(s){t&&L(t.$$.fragment,s),e=Q(s)},m(s,u){t&&A(t,s,u),S(s,e,u),n=!0},p(s,u){if(o!==(o=s[1].component)){if(t){tt();const i=t;k(i.$$.fragment,1,0,()=>{B(i,1)}),et()}o?(t=at(o,a()),x(t.$$.fragment),w(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}},i(s){n||(t&&w(t.$$.fragment,s),n=!0)},o(s){t&&k(t.$$.fragment,s),n=!1},d(s){t&&B(t,s),s&&g(e)}}}function dt(r){let t,e;return t=new $t({props:{$$slots:{default:[xe]},$$scope:{ctx:r}}}),{c(){x(t.$$.fragment)},l(n){L(t.$$.fragment,n)},m(n,o){A(t,n,o),e=!0},p(n,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){k(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}function Ae(r){let t,e,n,o,a,s;t=new St({props:{$$slots:{default:[Se]},$$scope:{ctx:r}}}),n=new $t({props:{$$slots:{default:[De]},$$scope:{ctx:r}}});let u=r[0],i=[];for(let c=0;c<u.length;c+=1)i[c]=dt(pt(r,u,c));const f=c=>k(i[c],1,1,()=>{i[c]=null});return{c(){x(t.$$.fragment),e=Z(),x(n.$$.fragment),o=Z();for(let c=0;c<i.length;c+=1)i[c].c();a=j()},l(c){L(t.$$.fragment,c),e=Q(c),L(n.$$.fragment,c),o=Q(c);for(let l=0;l<i.length;l+=1)i[l].l(c);a=j()},m(c,l){A(t,c,l),S(c,e,l),A(n,c,l),S(c,o,l);for(let m=0;m<i.length;m+=1)i[m].m(c,l);S(c,a,l),s=!0},p(c,l){const m={};l&64&&(m.$$scope={dirty:l,ctx:c}),t.$set(m);const d={};if(l&64&&(d.$$scope={dirty:l,ctx:c}),n.$set(d),l&1){u=c[0];let p;for(p=0;p<u.length;p+=1){const v=pt(c,u,p);i[p]?(i[p].p(v,l),w(i[p],1)):(i[p]=dt(v),i[p].c(),w(i[p],1),i[p].m(a.parentNode,a))}for(tt(),p=u.length;p<i.length;p+=1)f(p);et()}},i(c){if(!s){w(t.$$.fragment,c),w(n.$$.fragment,c);for(let l=0;l<u.length;l+=1)w(i[l]);s=!0}},o(c){k(t.$$.fragment,c),k(n.$$.fragment,c),i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)k(i[l]);s=!1},d(c){B(t,c),c&&g(e),B(n,c),c&&g(o),vt(i,c),c&&g(a)}}}function Be(r){let t,e,n;return e=new kt({props:{$$slots:{default:[Ae]},$$scope:{ctx:r}}}),{c(){t=C("div"),x(e.$$.fragment)},l(o){t=M(o,"DIV",{});var a=R(t);L(e.$$.fragment,a),a.forEach(g)},m(o,a){S(o,t,a),A(e,t,null),n=!0},p(o,[a]){const s={};a&64&&(s.$$scope={dirty:a,ctx:o}),e.$set(s)},i(o){n||(w(e.$$.fragment,o),n=!0)},o(o){k(e.$$.fragment,o),n=!1},d(o){o&&g(t),B(e)}}}function Ee(r){return[[{title:"V6",component:we},{title:"V5",component:pe},{title:"V4",component:se},{title:"V3",component:oe},{title:"V2",component:Kt},{title:"V1",component:Wt}]]}class Le extends I{constructor(t){super(),T(this,t,Ee,Be,W,{})}}function Ce(r){let t,e;return t=new Le({}),{c(){x(t.$$.fragment)},l(n){L(t.$$.fragment,n)},m(n,o){A(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){k(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}class Fe extends I{constructor(t){super(),T(this,t,null,Ce,W,{})}}export{Fe as default};
