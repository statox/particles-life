import{S as P,i as T,s as W,k as L,l as C,m as I,h as g,n as y,b as k,X as bt,B as w,Y as St,o as Q,w as B,x as M,y as E,f as b,t as D,z as R,Q as nt,K as V,Z as H,M as vt,a as Y,e as j,c as Z,g as ot,d as rt,L as yt,q as O,r as F,D as N,v as it}from"../../../chunks/index-8c90984f.js";import{T as kt,a as Dt,b as $t,c as _t}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as q}from"../../../chunks/preload-helper-41c905a7.js";import{R as J}from"../../../chunks/regl-89b00fbf.js";function At(o){let t,e,n;return{c(){t=L("div"),this.h()},l(r){t=C(r,"DIV",{style:!0,class:!0}),I(t).forEach(g),this.h()},h(){y(t,"style",o[0]),y(t,"class","m-0")},m(r,i){k(r,t,i),e||(n=bt(o[1].call(null,t)),e=!0)},p(r,[i]){i&1&&y(t,"style",r[0])},i:w,o:w,d(r){r&&g(t),e=!1,n()}}}function xt(o,t){return t.forEach(([e,n])=>o[e]=n),o}function Bt(o,t,e){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,s;const l=St(),m={ref(){l("ref",n)},instance(){l("instance",s)}};function f(c){return e(2,n=c),{destroy(){e(2,n=void 0)}}}return Q(async()=>{const c=await q(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:h}=c,p=Object.entries(c).filter(([d,v])=>v instanceof Function&&d[0]!=="_"&&d!=="default");a&&console.log("available p5 native classes",p),s=new h(d=>(d=xt(d,p),a&&console.log("p5 instance",d),window._p5Instance=d,r(d)),n),m.ref(),m.instance()}),o.$$set=c=>{"target"in c&&e(2,n=c.target),"sketch"in c&&e(3,r=c.sketch),"parentDivStyle"in c&&e(0,i=c.parentDivStyle),"debug"in c&&e(4,a=c.debug)},[i,f,n,r,a]}class at extends P{constructor(t){super(),T(this,t,Bt,At,W,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Et=o=>{const t=[];for(let a=0;a<o.height;a++){t.push([]);for(let s=0;s<o.width;s++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let s=r-e;s<r+e;s++)t[a][s].B=1;return t},Rt=(o,t)=>{const e={width:o.width/t[0].length,height:o.height/t.length};for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[n][r];o.fill(i*255,a*255,0),o.rect(r*e.width,n*e.height,e.width,e.height)}},Lt=1,Ct=.5,st=.055,It=.062,Mt=o=>{const t=[];for(let e=0;e<o.length;e++){t.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[e][n],a=lt(o,{x:n,y:e},"A"),s=lt(o,{x:n,y:e},"B"),l=r+(Lt*a-r*i*i+st*(1-r)),m=i+(Ct*s+r*i*i-(It+st)*i);t[e].push({A:l,B:m})}}return t},lt=(o,t,e)=>{const n=Pt(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},Pt=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},f={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function Tt(o){let t,e;return t=new at({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(n){M(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:w,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function Wt(o){const t={width:200,height:200};let e;return[r=>{let i;r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),i=Et(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Mt(i);Rt(e,i)}}]}let Nt=class extends P{constructor(t){super(),T(this,t,Wt,Tt,W,{})}},$,X;const Ot=o=>{$=[],X=[];for(let i=0;i<o.height;i++){$.push([]),X.push([]);for(let a=0;a<o.width;a++)$[$.length-1].push({A:1,B:0}),X[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)$[i][a].B=1;return $},Ft=o=>{const t={width:o.width/$[0].length,height:o.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:r,B:i}=$[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},Vt=1,Xt=.5,ct=.055,zt=.062,Gt=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:r}=$[t][e],i=ft($,{x:e,y:t},"A"),a=ft($,{x:e,y:t},"B"),s=n+(Vt*i-n*r*r+ct*(1-n)),l=r+(Xt*a+n*r*r-(zt+ct)*r);X[t][e]={A:s,B:l}}const o=$;return $=X,X=o,$},ft=(o,t,e)=>{const n=Ut(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},Ut=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},f={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function Kt(o){let t,e;return t=new at({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(n){M(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:w,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function Yt(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),Ot(t)},r.draw=()=>{for(let i=0;i<5;i++)Gt();Ft(e)}}]}let Zt=class extends P{constructor(t){super(),T(this,t,Yt,Kt,W,{})}},_,z;const Qt=o=>{_=[],z=[];for(let i=0;i<o.height;i++){_.push([]),z.push([]);for(let a=0;a<o.width;a++)_[_.length-1].push({A:1,B:0}),z[_.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)_[i][a].B=1;return _},Ht=o=>{const t={width:o.width/_[0].length,height:o.height/_.length};for(let e=0;e<_.length;e++)for(let n=0;n<_[0].length;n++){const{A:r,B:i}=_[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},jt=1,qt=.5,ut=.055,Jt=.062,te=()=>{for(let t=0;t<_.length;t++)for(let e=0;e<_[0].length;e++){const{A:n,B:r}=_[t][e],i=pt(_,{x:e,y:t},"A"),a=pt(_,{x:e,y:t},"B"),s=n+(jt*i-n*r*r+ut*(1-n)),l=r+(qt*a+n*r*r-(Jt+ut)*r);z[t][e]={A:s,B:l}}const o=_;return _=z,z=o,_},pt=(o,t,e)=>{const n=ee(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},ee=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},f={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function ne(o){let t,e;return t=new at({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(n){M(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:w,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function oe(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),Qt(t)},r.draw=()=>{for(let i=0;i<5;i++)te();Ht(e)}}]}let re=class extends P{constructor(t){super(),T(this,t,oe,ne,W,{})}};function ae(o){let t;return{c(){t=L("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(e,n){k(e,t,n)},p:w,i:w,o:w,d(e){e&&g(t)}}}function ie(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,r=Array(e*e).fill(0).map((i,a)=>{const s=Math.floor(a/e),l=a%e;return Math.hypot(e/2-l,e/2-s)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return Q(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=J({extensions:["OES_texture_float"],canvas:i}),s=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
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
}`,framebuffer:f=>s[(f.tick+1)%2]}),m=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:f})=>s[f%2]},depth:{enable:!1},count:3});a.frame(()=>{m(()=>{a.draw(),l()})})}),[t]}let se=class extends P{constructor(t){super(),T(this,t,ie,ae,W,{})}};const le=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ce=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),fe=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),G=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function ue(o){let t;return{c(){t=L("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(e,n){k(e,t,n)},p:w,i:w,o:w,d(e){e&&g(t)}}}function pe(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},n={iteration:0},r={f:G[e.presetParams].f,k:G[e.presetParams].k};let i,a;const s=async()=>{const f=await q(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new f.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(e,"pause").name("Pause"),i.add(e,"reset").name("Reset simulation");const c=G.reduce((p,d,v)=>(p[d.name]=v,p),{});i.add(e,"presetParams",c).onFinishChange(()=>{r.f=G[e.presetParams].f,r.k=G[e.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(e,"initialConditions",h).onFinishChange(e.reset);const u=i.add(n,"iteration").listen();u.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",f=>{if(f.code==="Space")return e.pause=!e.pause,f.preventDefault();if(f.code==="KeyR")return m(),f.preventDefault()})},m=()=>{const f=document.getElementById("canvas");if(!f)throw new Error("Canvas container not ready");a&&a.destroy(),a=J({extensions:["OES_texture_float"],canvas:f}),n.iteration=0;const c=2**11;let h;e.initialConditions==="randomSpots"?h=ce(c,.001):e.initialConditions==="middleCircleAndRandomSpots"?h=le(c,.005,.05):h=fe(c,.02);const u=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:c,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),p=a({frag:`
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
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${c})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${c})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${c})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${c})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${c})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${c})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${c})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${c})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${c})).rg * 0.05;

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
}`,framebuffer:v=>u[(v.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),d=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:v})=>u[v%2]},depth:{enable:!1},count:3});a.frame(()=>{d(()=>{a.draw(),!e.pause&&(n.iteration++,p({Da:1,Db:.5,...r}))})})};return Q(()=>{s(),l(),m()}),nt(()=>{i.destroy(),a.destroy()}),[t]}let me=class extends P{constructor(t){super(),T(this,t,pe,ue,W,{})}};const de=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},he=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ge=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),U=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],ve=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,ye=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,$e=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

uniform vec2 mousePosition;
uniform bool penIsActive;
uniform bool eraserIsActive;
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
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (eraserIsActive && distance(uv, mousePosition) < penRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`;function _e(o){let t,e,n;return{c(){t=L("canvas"),this.h()},l(r){t=C(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(r,i){k(r,t,i),e||(n=[V(t,"mousemove",o[1]),V(t,"mousedown",H(o[2])),V(t,"mouseup",o[2]),V(t,"contextmenu",H(we))],e=!0)},p:w,i:w,o:w,d(r){r&&g(t),e=!1,vt(n)}}}const tt=11,we=o=>o;function be(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:U[e.presetParams].f,k:U[e.presetParams].k};let a,s;const l=async()=>{const u=await q(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const p=U.reduce((S,A,x)=>(S[A.name]=x,S),{});a.add(e,"presetParams",p).onFinishChange(()=>{i.f=U[e.presetParams].f,i.k=U[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",d).onFinishChange(e.reset);const v=a.add(r,"iteration").listen();v.domElement.style.pointerEvents="none",a.add(n,"penSize",1,tt,1).name("Pen size")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return e.pause=!e.pause,u.preventDefault();if(u.code==="KeyR")return f(),u.preventDefault()})},f=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=J({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**tt;let d;e.initialConditions==="randomSpots"?d=he(p,.001):e.initialConditions==="middleCircleAndRandomSpots"?d=de(p,.005,.05):d=ge(p,.02);const v=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),S=s({frag:$e,framebuffer:x=>v[(x.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}}),A=s({frag:ye,vert:ve,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:x})=>v[x%2]},depth:{enable:!1},count:3});s.frame(()=>{A(()=>{s.draw(),e.pause||r.iteration++,S({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(tt-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},c=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:d}=u,{width:v,height:S}=u.currentTarget,A=p/v,x=(S-d)/S;n.x=A,n.y=x},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return Q(()=>{l(),m(),f()}),nt(()=>{a.destroy(),s.destroy()}),[t,c,h]}let Se=class extends P{constructor(t){super(),T(this,t,be,_e,W,{})}};const ke=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},De=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ae=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),K=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],xe=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Be=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,Ee=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

uniform vec2 mousePosition;
uniform bool penIsActive;
uniform bool eraserIsActive;
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
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (eraserIsActive && distance(uv, mousePosition) < penRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`;function Re(o){let t,e,n;return{c(){t=L("canvas"),this.h()},l(r){t=C(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(r,i){k(r,t,i),e||(n=[V(t,"mousemove",o[1]),V(t,"mousedown",H(o[2])),V(t,"mouseup",o[2]),V(t,"contextmenu",H(Le))],e=!0)},p:w,i:w,o:w,d(r){r&&g(t),e=!1,vt(n)}}}const et=11,Le=o=>o;function Ce(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:K[e.presetParams].f,k:K[e.presetParams].k};let a,s;const l=async()=>{const u=await q(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const p=K.reduce((S,A,x)=>(S[A.name]=x,S),{});a.add(e,"presetParams",p).onFinishChange(()=>{i.f=K[e.presetParams].f,i.k=K[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",d).onFinishChange(e.reset);const v=a.add(r,"iteration").listen();v.domElement.style.pointerEvents="none",a.add(n,"penSize",1,et,1).name("Pen size")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return e.pause=!e.pause,u.preventDefault();if(u.code==="KeyR")return f(),u.preventDefault()})},f=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=J({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**et;let d;e.initialConditions==="randomSpots"?d=De(p,.001):e.initialConditions==="middleCircleAndRandomSpots"?d=ke(p,.005,.05):d=Ae(p,.02);const v=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),S=s({frag:Ee,framebuffer:x=>v[(x.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}}),A=s({frag:Be,vert:xe,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:x})=>v[x%2]},depth:{enable:!1},count:3});s.frame(()=>{A(()=>{e.pause||r.iteration++,S({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(et-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i}),s.draw()})})},c=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var p=u.currentTarget.getBoundingClientRect();const d=u.clientX-p.left,v=u.clientY-p.top,{width:S,height:A}=u.currentTarget,x=d/S,wt=(A-v)/A;n.x=x,n.y=wt},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return Q(()=>{l(),m(),f()}),nt(()=>{a.destroy(),s.destroy()}),[t,c,h]}class Ie extends P{constructor(t){super(),T(this,t,Ce,Re,W,{})}}function mt(o,t,e){const n=o.slice();return n[1]=t[e],n}function dt(o,t,e){const n=o.slice();return n[1]=t[e],n}function Me(o){let t;return{c(){t=O("About")},l(e){t=F(e,"About")},m(e,n){k(e,t,n)},d(e){e&&g(t)}}}function Pe(o){let t=o[1].title+"",e;return{c(){e=O(t)},l(n){e=F(n,t)},m(n,r){k(n,e,r)},p:w,d(n){n&&g(e)}}}function ht(o){let t,e;return t=new _t({props:{$$slots:{default:[Pe]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(n){M(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function Te(o){let t,e,n,r;t=new _t({props:{$$slots:{default:[Me]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=ht(dt(o,i,l));const s=l=>D(a[l],1,1,()=>{a[l]=null});return{c(){B(t.$$.fragment),e=Y();for(let l=0;l<a.length;l+=1)a[l].c();n=j()},l(l){M(t.$$.fragment,l),e=Z(l);for(let m=0;m<a.length;m+=1)a[m].l(l);n=j()},m(l,m){E(t,l,m),k(l,e,m);for(let f=0;f<a.length;f+=1)a[f].m(l,m);k(l,n,m),r=!0},p(l,m){const f={};if(m&64&&(f.$$scope={dirty:m,ctx:l}),t.$set(f),m&1){i=l[0];let c;for(c=0;c<i.length;c+=1){const h=dt(l,i,c);a[c]?(a[c].p(h,m),b(a[c],1)):(a[c]=ht(h),a[c].c(),b(a[c],1),a[c].m(n.parentNode,n))}for(ot(),c=i.length;c<a.length;c+=1)s(c);rt()}},i(l){if(!r){b(t.$$.fragment,l);for(let m=0;m<i.length;m+=1)b(a[m]);r=!0}},o(l){D(t.$$.fragment,l),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)D(a[m]);r=!1},d(l){R(t,l),l&&g(e),yt(a,l),l&&g(n)}}}function We(o){let t,e,n,r,i,a,s,l,m,f,c,h;return{c(){t=L("p"),e=O("Experiments with "),n=L("a"),r=O("Reaction-diffusion systems"),i=Y(),a=L("p"),s=O("The code is based on "),l=L("a"),m=O("this tutorial"),f=O(`
                but reimplemented in a glsl shader with
                `),c=L("a"),h=O("regl"),this.h()},l(u){t=C(u,"P",{});var p=I(t);e=F(p,"Experiments with "),n=C(p,"A",{href:!0,target:!0});var d=I(n);r=F(d,"Reaction-diffusion systems"),d.forEach(g),p.forEach(g),i=Z(u),a=C(u,"P",{});var v=I(a);s=F(v,"The code is based on "),l=C(v,"A",{href:!0,target:!0});var S=I(l);m=F(S,"this tutorial"),S.forEach(g),f=F(v,`
                but reimplemented in a glsl shader with
                `),c=C(v,"A",{href:!0,target:!0});var A=I(c);h=F(A,"regl"),A.forEach(g),v.forEach(g),this.h()},h(){y(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),y(n,"target","none"),y(l,"href","https://karlsims.com/rd.html"),y(l,"target","none"),y(c,"href","https://github.com/regl-project/regl"),y(c,"target","none")},m(u,p){k(u,t,p),N(t,e),N(t,n),N(n,r),k(u,i,p),k(u,a,p),N(a,s),N(a,l),N(l,m),N(a,f),N(a,c),N(c,h)},p:w,d(u){u&&g(t),u&&g(i),u&&g(a)}}}function Ne(o){let t,e,n;var r=o[1].component;function i(a){return{}}return r&&(t=it(r,i())),{c(){t&&B(t.$$.fragment),e=Y()},l(a){t&&M(t.$$.fragment,a),e=Z(a)},m(a,s){t&&E(t,a,s),k(a,e,s),n=!0},p(a,s){if(r!==(r=a[1].component)){if(t){ot();const l=t;D(l.$$.fragment,1,0,()=>{R(l,1)}),rt()}r?(t=it(r,i()),B(t.$$.fragment),b(t.$$.fragment,1),E(t,e.parentNode,e)):t=null}},i(a){n||(t&&b(t.$$.fragment,a),n=!0)},o(a){t&&D(t.$$.fragment,a),n=!1},d(a){t&&R(t,a),a&&g(e)}}}function gt(o){let t,e;return t=new $t({props:{$$slots:{default:[Ne]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(n){M(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function Oe(o){let t,e,n,r,i,a;t=new Dt({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),n=new $t({props:{$$slots:{default:[We]},$$scope:{ctx:o}}});let s=o[0],l=[];for(let f=0;f<s.length;f+=1)l[f]=gt(mt(o,s,f));const m=f=>D(l[f],1,1,()=>{l[f]=null});return{c(){B(t.$$.fragment),e=Y(),B(n.$$.fragment),r=Y();for(let f=0;f<l.length;f+=1)l[f].c();i=j()},l(f){M(t.$$.fragment,f),e=Z(f),M(n.$$.fragment,f),r=Z(f);for(let c=0;c<l.length;c+=1)l[c].l(f);i=j()},m(f,c){E(t,f,c),k(f,e,c),E(n,f,c),k(f,r,c);for(let h=0;h<l.length;h+=1)l[h].m(f,c);k(f,i,c),a=!0},p(f,c){const h={};c&64&&(h.$$scope={dirty:c,ctx:f}),t.$set(h);const u={};if(c&64&&(u.$$scope={dirty:c,ctx:f}),n.$set(u),c&1){s=f[0];let p;for(p=0;p<s.length;p+=1){const d=mt(f,s,p);l[p]?(l[p].p(d,c),b(l[p],1)):(l[p]=gt(d),l[p].c(),b(l[p],1),l[p].m(i.parentNode,i))}for(ot(),p=s.length;p<l.length;p+=1)m(p);rt()}},i(f){if(!a){b(t.$$.fragment,f),b(n.$$.fragment,f);for(let c=0;c<s.length;c+=1)b(l[c]);a=!0}},o(f){D(t.$$.fragment,f),D(n.$$.fragment,f),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)D(l[c]);a=!1},d(f){R(t,f),f&&g(e),R(n,f),f&&g(r),yt(l,f),f&&g(i)}}}function Fe(o){let t,e,n;return e=new kt({props:{$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){t=L("div"),B(e.$$.fragment)},l(r){t=C(r,"DIV",{});var i=I(t);M(e.$$.fragment,i),i.forEach(g)},m(r,i){k(r,t,i),E(e,t,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){r&&g(t),R(e)}}}function Ve(o){return[[{title:"V7",component:Ie},{title:"V6",component:Se},{title:"V5",component:me},{title:"V4",component:se},{title:"V3",component:re},{title:"V2",component:Zt},{title:"V1",component:Nt}]]}class Xe extends P{constructor(t){super(),T(this,t,Ve,Fe,W,{})}}function ze(o){let t,e;return t=new Xe({}),{c(){B(t.$$.fragment)},l(n){M(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:w,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}class tn extends P{constructor(t){super(),T(this,t,null,ze,W,{})}}export{tn as default};
