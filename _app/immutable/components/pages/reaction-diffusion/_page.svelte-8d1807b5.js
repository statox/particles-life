import{S as M,i as T,s as F,k as P,l as E,m as L,h as g,n as y,b as k,X as Dt,B as b,Y as xt,o as j,w as B,x as I,y as C,f as w,t as D,z as R,Q as rt,K as V,Z as J,M as $t,a as H,e as tt,c as Q,g as at,d as it,L as _t,q as N,r as O,D as W,v as lt}from"../../../chunks/index-8c90984f.js";import{T as At,a as Bt,b as bt,c as St}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as et}from"../../../chunks/preload-helper-41c905a7.js";import{R as nt}from"../../../chunks/regl-89b00fbf.js";function Ct(o){let t,e,n;return{c(){t=P("div"),this.h()},l(r){t=E(r,"DIV",{style:!0,class:!0}),L(t).forEach(g),this.h()},h(){y(t,"style",o[0]),y(t,"class","m-0")},m(r,i){k(r,t,i),e||(n=Dt(o[1].call(null,t)),e=!0)},p(r,[i]){i&1&&y(t,"style",r[0])},i:b,o:b,d(r){r&&g(t),e=!1,n()}}}function Rt(o,t){return t.forEach(([e,n])=>o[e]=n),o}function Pt(o,t,e){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,s;const l=xt(),m={ref(){l("ref",n)},instance(){l("instance",s)}};function c(f){return e(2,n=f),{destroy(){e(2,n=void 0)}}}return j(async()=>{const f=await et(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:h}=f,p=Object.entries(f).filter(([d,v])=>v instanceof Function&&d[0]!=="_"&&d!=="default");a&&console.log("available p5 native classes",p),s=new h(d=>(d=Rt(d,p),a&&console.log("p5 instance",d),window._p5Instance=d,r(d)),n),m.ref(),m.instance()}),o.$$set=f=>{"target"in f&&e(2,n=f.target),"sketch"in f&&e(3,r=f.sketch),"parentDivStyle"in f&&e(0,i=f.parentDivStyle),"debug"in f&&e(4,a=f.debug)},[i,c,n,r,a]}class st extends M{constructor(t){super(),T(this,t,Pt,Ct,F,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Et=o=>{const t=[];for(let a=0;a<o.height;a++){t.push([]);for(let s=0;s<o.width;s++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let s=r-e;s<r+e;s++)t[a][s].B=1;return t},Lt=(o,t)=>{const e={width:o.width/t[0].length,height:o.height/t.length};for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[n][r];o.fill(i*255,a*255,0),o.rect(r*e.width,n*e.height,e.width,e.height)}},It=1,Mt=.5,ft=.055,Tt=.062,Ft=o=>{const t=[];for(let e=0;e<o.length;e++){t.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[e][n],a=ct(o,{x:n,y:e},"A"),s=ct(o,{x:n,y:e},"B"),l=r+(It*a-r*i*i+ft*(1-r)),m=i+(Mt*s+r*i*i-(Tt+ft)*i);t[e].push({A:l,B:m})}}return t},ct=(o,t,e)=>{const n=Wt(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},Wt=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,c,f,h,u,p]};function Nt(o){let t,e;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(n){I(t.$$.fragment,n)},m(n,r){C(t,n,r),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function Ot(o){const t={width:200,height:200};let e;return[r=>{let i;r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),i=Et(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Ft(i);Lt(e,i)}}]}let Vt=class extends M{constructor(t){super(),T(this,t,Ot,Nt,F,{})}},$,G;const zt=o=>{$=[],G=[];for(let i=0;i<o.height;i++){$.push([]),G.push([]);for(let a=0;a<o.width;a++)$[$.length-1].push({A:1,B:0}),G[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)$[i][a].B=1;return $},Xt=o=>{const t={width:o.width/$[0].length,height:o.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:r,B:i}=$[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},Gt=1,Ut=.5,ut=.055,Kt=.062,Yt=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:r}=$[t][e],i=pt($,{x:e,y:t},"A"),a=pt($,{x:e,y:t},"B"),s=n+(Gt*i-n*r*r+ut*(1-n)),l=r+(Ut*a+n*r*r-(Kt+ut)*r);G[t][e]={A:s,B:l}}const o=$;return $=G,G=o,$},pt=(o,t,e)=>{const n=Zt(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},Zt=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,c,f,h,u,p]};function Ht(o){let t,e;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(n){I(t.$$.fragment,n)},m(n,r){C(t,n,r),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function Qt(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),zt(t)},r.draw=()=>{for(let i=0;i<5;i++)Yt();Xt(e)}}]}let jt=class extends M{constructor(t){super(),T(this,t,Qt,Ht,F,{})}},_,U;const qt=o=>{_=[],U=[];for(let i=0;i<o.height;i++){_.push([]),U.push([]);for(let a=0;a<o.width;a++)_[_.length-1].push({A:1,B:0}),U[_.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)_[i][a].B=1;return _},Jt=o=>{const t={width:o.width/_[0].length,height:o.height/_.length};for(let e=0;e<_.length;e++)for(let n=0;n<_[0].length;n++){const{A:r,B:i}=_[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},te=1,ee=.5,mt=.055,ne=.062,oe=()=>{for(let t=0;t<_.length;t++)for(let e=0;e<_[0].length;e++){const{A:n,B:r}=_[t][e],i=dt(_,{x:e,y:t},"A"),a=dt(_,{x:e,y:t},"B"),s=n+(te*i-n*r*r+mt*(1-n)),l=r+(ee*a+n*r*r-(ne+mt)*r);U[t][e]={A:s,B:l}}const o=_;return _=U,U=o,_},dt=(o,t,e)=>{const n=re(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},re=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,c,f,h,u,p]};function ae(o){let t,e;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(n){I(t.$$.fragment,n)},m(n,r){C(t,n,r),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function ie(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),qt(t)},r.draw=()=>{for(let i=0;i<5;i++)oe();Jt(e)}}]}let se=class extends M{constructor(t){super(),T(this,t,ie,ae,F,{})}};function le(o){let t;return{c(){t=P("canvas"),this.h()},l(e){t=E(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(e,n){k(e,t,n)},p:b,i:b,o:b,d(e){e&&g(t)}}}function fe(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,r=Array(e*e).fill(0).map((i,a)=>{const s=Math.floor(a/e),l=a%e;return Math.hypot(e/2-l,e/2-s)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return j(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=nt({extensions:["OES_texture_float"],canvas:i}),s=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
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
}`,framebuffer:c=>s[(c.tick+1)%2]}),m=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>s[c%2]},depth:{enable:!1},count:3});a.frame(()=>{m(()=>{a.draw(),l()})})}),[t]}let ce=class extends M{constructor(t){super(),T(this,t,fe,le,F,{})}};const ue=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},pe=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),me=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),K=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function de(o){let t;return{c(){t=P("canvas"),this.h()},l(e){t=E(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(e,n){k(e,t,n)},p:b,i:b,o:b,d(e){e&&g(t)}}}function he(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},n={iteration:0},r={f:K[e.presetParams].f,k:K[e.presetParams].k};let i,a;const s=async()=>{const c=await et(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new c.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(e,"pause").name("Pause"),i.add(e,"reset").name("Reset simulation");const f=K.reduce((p,d,v)=>(p[d.name]=v,p),{});i.add(e,"presetParams",f).onFinishChange(()=>{r.f=K[e.presetParams].f,r.k=K[e.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(e,"initialConditions",h).onFinishChange(e.reset);const u=i.add(n,"iteration").listen();u.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return e.pause=!e.pause,c.preventDefault();if(c.code==="KeyR")return m(),c.preventDefault()})},m=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");a&&a.destroy(),a=nt({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const f=2**11;let h;e.initialConditions==="randomSpots"?h=pe(f,.001):e.initialConditions==="middleCircleAndRandomSpots"?h=ue(f,.005,.05):h=me(f,.02);const u=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:f,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),p=a({frag:`
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
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${f})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${f})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${f})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${f})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${f})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${f})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${f})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${f})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${f})).rg * 0.05;

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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:v})=>u[v%2]},depth:{enable:!1},count:3});a.frame(()=>{d(()=>{a.draw(),!e.pause&&(n.iteration++,p({Da:1,Db:.5,...r}))})})};return j(()=>{s(),l(),m()}),rt(()=>{i.destroy(),a.destroy()}),[t]}let ve=class extends M{constructor(t){super(),T(this,t,he,de,F,{})}};const ge=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ye=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),$e=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),Y=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],_e=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,be=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,Se=`precision mediump float;

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
`;function we(o){let t,e,n;return{c(){t=P("canvas"),this.h()},l(r){t=E(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(r,i){k(r,t,i),e||(n=[V(t,"mousemove",o[1]),V(t,"mousedown",J(o[2])),V(t,"mouseup",o[2]),V(t,"contextmenu",J(ke))],e=!0)},p:b,i:b,o:b,d(r){r&&g(t),e=!1,$t(n)}}}const ot=11,ke=o=>o;function De(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>c(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:Y[e.presetParams].f,k:Y[e.presetParams].k};let a,s;const l=async()=>{const u=await et(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const p=Y.reduce((S,x,A)=>(S[x.name]=A,S),{});a.add(e,"presetParams",p).onFinishChange(()=>{i.f=Y[e.presetParams].f,i.k=Y[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",d).onFinishChange(e.reset);const v=a.add(r,"iteration").listen();v.domElement.style.pointerEvents="none",a.add(n,"penSize",1,ot,1).name("Pen size")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return e.pause=!e.pause,u.preventDefault();if(u.code==="KeyR")return c(),u.preventDefault()})},c=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=nt({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**ot;let d;e.initialConditions==="randomSpots"?d=ye(p,.001):e.initialConditions==="middleCircleAndRandomSpots"?d=ge(p,.005,.05):d=$e(p,.02);const v=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),S=s({frag:Se,framebuffer:A=>v[(A.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}}),x=s({frag:be,vert:_e,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:A})=>v[A%2]},depth:{enable:!1},count:3});s.frame(()=>{x(()=>{s.draw(),e.pause||r.iteration++,S({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(ot-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},f=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:d}=u,{width:v,height:S}=u.currentTarget,x=p/v,A=(S-d)/S;n.x=x,n.y=A},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return j(()=>{l(),m(),c()}),rt(()=>{a.destroy(),s.destroy()}),[t,f,h]}let xe=class extends M{constructor(t){super(),T(this,t,De,we,F,{})}};const Ae=(o,t)=>o==="randomSpots"?Re(t,.001):o==="middleCircleAndRandomSpots"?Be(t,.005,.05):o==="empty"?Ce(t):Pe(t,.02),Be=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Ce=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Re=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Pe=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),Z=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],X=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
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
uniform float penDensity;

varying vec2 uv;

// https://thebookofshaders.com/10/
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

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


    float rnd = random(uv);
    if (penIsActive && rnd < penDensity && distance(uv, mousePosition) < penRadius) {
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (eraserIsActive && rnd < penDensity && distance(uv, mousePosition) < penRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`,Le=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Ie=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float PI = 3.14159265359;
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = sin(iteration*PI/180.0);
    if (val < 0.0) {
        val = -1.0 * val;
    }
    gl_FragColor = vec4(A, B, val, 1.0);
}
`,Me=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Te=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Fe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,z={},We=(o,t,e)=>{z.raw=o({frag:Le,vert:X,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.grayscale=o({frag:Me,vert:X,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.blackwhite=o({frag:Te,vert:X,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.whiteblack=o({frag:Fe,vert:X,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.timebasedblue=o({frag:Ie,vert:X,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}})},Ne=(o,t)=>{(z[o]||z.raw)({iteration:t.iteration})};let wt;const Oe=(o,t)=>{wt=o({frag:`
    precision highp float;

    uniform sampler2D prevState;
    uniform vec2 mousePosition;
    uniform float penRadius;

    varying vec2 uv;

    void main() {
        vec4 color = texture2D(prevState, uv);

        float d = distance(uv, mousePosition);
        if (
            (d >= penRadius && d <= penRadius + 0.001) ||
            (uv.x >= mousePosition.x - 0.001 && uv.x <= mousePosition.x + 0.001 && uv.y >= mousePosition.y - 0.01 && uv.y <= mousePosition.y + 0.01) ||
            (uv.x >= mousePosition.x - 0.01 && uv.x <= mousePosition.x + 0.01 && uv.y >= mousePosition.y - 0.001 && uv.y <= mousePosition.y + 0.001)
        ) {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        } else {
            gl_FragColor = color;
        }
    }`,vert:`
    precision mediump float;
    attribute vec2 position;
    varying vec2 uv;
    void main() {
        uv = 0.5 * (position + 1.0);
        gl_Position = vec4( position.x, position.y, 0, 1);
    }`,attributes:{position:[[-1,-1],[-1,1],[1,-1],[1,-1],[-1,1],[1,1]]},uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),prevState:t},depth:{enable:!1},primitive:"triangles",count:6})},Ve=(o,t)=>{wt({mousePosition:[o.x,o.y],penRadius:1/2**(t-o.penSize)})};function ze(o){let t,e,n;return{c(){t=P("canvas"),this.h()},l(r){t=E(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(t).forEach(g),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-fc0fp8")},m(r,i){k(r,t,i),e||(n=[V(t,"mousemove",o[1]),V(t,"mousedown",J(o[2])),V(t,"mouseup",o[2]),V(t,"contextmenu",J(Xe))],e=!0)},p:b,i:b,o:b,d(r){r&&g(t),e=!1,$t(n)}}}const q=11,Xe=o=>o;function Ge(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,colors:"blackwhite",initialConditions:"randomSpots",reset:()=>c(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:7,penDensity:.3},r={iteration:0},i={f:Z[e.presetParams].f,k:Z[e.presetParams].k};let a,s;const l=async()=>{const u=await et(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation"),a.add(e,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue"]);const p=Z.reduce((S,x,A)=>(S[x.name]=A,S),{});a.add(e,"presetParams",p).onFinishChange(()=>{i.f=Z[e.presetParams].f,i.k=Z[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};a.add(e,"initialConditions",d).onFinishChange(e.reset);const v=a.add(r,"iteration").listen();v.domElement.style.pointerEvents="none",a.add(n,"penSize",1,q).name("Pen size"),a.add(n,"penDensity",0,1).name("Pen density")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return e.pause=!e.pause,u.preventDefault();if(u.code==="KeyR")return c(),u.preventDefault()})},c=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=nt({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**q;let d=Ae(e.initialConditions,p);const v=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),S=s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1});We(s,v,S),Oe(s,S);const x=s({frag:Ee,vert:X,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:A=>v[(A.tick+1)%2],uniforms:{prevState:A=>v[A.tick%2],Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penDensity:s.prop("penDensity"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}});s.frame(()=>{e.pause||r.iteration++,x({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(q-n.penSize),penDensity:n.penDensity,penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i}),Ne(e.colors,r),Ve(n,q)})},f=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var p=u.currentTarget.getBoundingClientRect();const d=u.clientX-p.left,v=u.clientY-p.top,{width:S,height:x}=u.currentTarget,A=d/S,kt=(x-v)/x;n.x=A,n.y=kt},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return j(()=>{l(),m(),c()}),rt(()=>{a.destroy(),s.destroy()}),[t,f,h]}class Ue extends M{constructor(t){super(),T(this,t,Ge,ze,F,{})}}function ht(o,t,e){const n=o.slice();return n[1]=t[e],n}function vt(o,t,e){const n=o.slice();return n[1]=t[e],n}function Ke(o){let t;return{c(){t=N("About")},l(e){t=O(e,"About")},m(e,n){k(e,t,n)},d(e){e&&g(t)}}}function Ye(o){let t=o[1].title+"",e;return{c(){e=N(t)},l(n){e=O(n,t)},m(n,r){k(n,e,r)},p:b,d(n){n&&g(e)}}}function gt(o){let t,e;return t=new St({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(n){I(t.$$.fragment,n)},m(n,r){C(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function Ze(o){let t,e,n,r;t=new St({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=gt(vt(o,i,l));const s=l=>D(a[l],1,1,()=>{a[l]=null});return{c(){B(t.$$.fragment),e=H();for(let l=0;l<a.length;l+=1)a[l].c();n=tt()},l(l){I(t.$$.fragment,l),e=Q(l);for(let m=0;m<a.length;m+=1)a[m].l(l);n=tt()},m(l,m){C(t,l,m),k(l,e,m);for(let c=0;c<a.length;c+=1)a[c].m(l,m);k(l,n,m),r=!0},p(l,m){const c={};if(m&64&&(c.$$scope={dirty:m,ctx:l}),t.$set(c),m&1){i=l[0];let f;for(f=0;f<i.length;f+=1){const h=vt(l,i,f);a[f]?(a[f].p(h,m),w(a[f],1)):(a[f]=gt(h),a[f].c(),w(a[f],1),a[f].m(n.parentNode,n))}for(at(),f=i.length;f<a.length;f+=1)s(f);it()}},i(l){if(!r){w(t.$$.fragment,l);for(let m=0;m<i.length;m+=1)w(a[m]);r=!0}},o(l){D(t.$$.fragment,l),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)D(a[m]);r=!1},d(l){R(t,l),l&&g(e),_t(a,l),l&&g(n)}}}function He(o){let t,e,n,r,i,a,s,l,m,c,f,h;return{c(){t=P("p"),e=N("Experiments with "),n=P("a"),r=N("Reaction-diffusion systems"),i=H(),a=P("p"),s=N("The code is based on "),l=P("a"),m=N("this tutorial"),c=N(`
                but reimplemented in a glsl shader with
                `),f=P("a"),h=N("regl"),this.h()},l(u){t=E(u,"P",{});var p=L(t);e=O(p,"Experiments with "),n=E(p,"A",{href:!0,target:!0});var d=L(n);r=O(d,"Reaction-diffusion systems"),d.forEach(g),p.forEach(g),i=Q(u),a=E(u,"P",{});var v=L(a);s=O(v,"The code is based on "),l=E(v,"A",{href:!0,target:!0});var S=L(l);m=O(S,"this tutorial"),S.forEach(g),c=O(v,`
                but reimplemented in a glsl shader with
                `),f=E(v,"A",{href:!0,target:!0});var x=L(f);h=O(x,"regl"),x.forEach(g),v.forEach(g),this.h()},h(){y(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),y(n,"target","none"),y(l,"href","https://karlsims.com/rd.html"),y(l,"target","none"),y(f,"href","https://github.com/regl-project/regl"),y(f,"target","none")},m(u,p){k(u,t,p),W(t,e),W(t,n),W(n,r),k(u,i,p),k(u,a,p),W(a,s),W(a,l),W(l,m),W(a,c),W(a,f),W(f,h)},p:b,d(u){u&&g(t),u&&g(i),u&&g(a)}}}function Qe(o){let t,e,n;var r=o[1].component;function i(a){return{}}return r&&(t=lt(r,i())),{c(){t&&B(t.$$.fragment),e=H()},l(a){t&&I(t.$$.fragment,a),e=Q(a)},m(a,s){t&&C(t,a,s),k(a,e,s),n=!0},p(a,s){if(r!==(r=a[1].component)){if(t){at();const l=t;D(l.$$.fragment,1,0,()=>{R(l,1)}),it()}r?(t=lt(r,i()),B(t.$$.fragment),w(t.$$.fragment,1),C(t,e.parentNode,e)):t=null}},i(a){n||(t&&w(t.$$.fragment,a),n=!0)},o(a){t&&D(t.$$.fragment,a),n=!1},d(a){t&&R(t,a),a&&g(e)}}}function yt(o){let t,e;return t=new bt({props:{$$slots:{default:[Qe]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(n){I(t.$$.fragment,n)},m(n,r){C(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}function je(o){let t,e,n,r,i,a;t=new Bt({props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}}),n=new bt({props:{$$slots:{default:[He]},$$scope:{ctx:o}}});let s=o[0],l=[];for(let c=0;c<s.length;c+=1)l[c]=yt(ht(o,s,c));const m=c=>D(l[c],1,1,()=>{l[c]=null});return{c(){B(t.$$.fragment),e=H(),B(n.$$.fragment),r=H();for(let c=0;c<l.length;c+=1)l[c].c();i=tt()},l(c){I(t.$$.fragment,c),e=Q(c),I(n.$$.fragment,c),r=Q(c);for(let f=0;f<l.length;f+=1)l[f].l(c);i=tt()},m(c,f){C(t,c,f),k(c,e,f),C(n,c,f),k(c,r,f);for(let h=0;h<l.length;h+=1)l[h].m(c,f);k(c,i,f),a=!0},p(c,f){const h={};f&64&&(h.$$scope={dirty:f,ctx:c}),t.$set(h);const u={};if(f&64&&(u.$$scope={dirty:f,ctx:c}),n.$set(u),f&1){s=c[0];let p;for(p=0;p<s.length;p+=1){const d=ht(c,s,p);l[p]?(l[p].p(d,f),w(l[p],1)):(l[p]=yt(d),l[p].c(),w(l[p],1),l[p].m(i.parentNode,i))}for(at(),p=s.length;p<l.length;p+=1)m(p);it()}},i(c){if(!a){w(t.$$.fragment,c),w(n.$$.fragment,c);for(let f=0;f<s.length;f+=1)w(l[f]);a=!0}},o(c){D(t.$$.fragment,c),D(n.$$.fragment,c),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)D(l[f]);a=!1},d(c){R(t,c),c&&g(e),R(n,c),c&&g(r),_t(l,c),c&&g(i)}}}function qe(o){let t,e,n;return e=new At({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),{c(){t=P("div"),B(e.$$.fragment)},l(r){t=E(r,"DIV",{});var i=L(t);I(e.$$.fragment,i),i.forEach(g)},m(r,i){k(r,t,i),C(e,t,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){r&&g(t),R(e)}}}function Je(o){return[[{title:"V7",component:Ue},{title:"V6",component:xe},{title:"V5",component:ve},{title:"V4",component:ce},{title:"V3",component:se},{title:"V2",component:jt},{title:"V1",component:Vt}]]}class tn extends M{constructor(t){super(),T(this,t,Je,qe,F,{})}}function en(o){let t,e;return t=new tn({}),{c(){B(t.$$.fragment)},l(n){I(t.$$.fragment,n)},m(n,r){C(t,n,r),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){R(t,n)}}}class mn extends M{constructor(t){super(),T(this,t,null,en,F,{})}}export{mn as default};
