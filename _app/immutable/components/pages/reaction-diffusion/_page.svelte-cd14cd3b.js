import{S as T,i as W,s as F,k as L,l as I,m as P,h as v,n as y,b as k,X as At,B as S,Y as xt,o as j,w as C,x as M,y as E,f as w,t as D,z as R,Q as at,K as X,Z as q,M as _t,a as H,e as J,c as Q,g as it,d as st,L as St,q as O,r as V,D as N,v as ct}from"../../../chunks/index-8c90984f.js";import{T as Bt,a as Ct,b as wt,c as bt}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as tt}from"../../../chunks/preload-helper-41c905a7.js";import{R as et}from"../../../chunks/regl-89b00fbf.js";function Et(o){let e,t,n;return{c(){e=L("div"),this.h()},l(r){e=I(r,"DIV",{style:!0,class:!0}),P(e).forEach(v),this.h()},h(){y(e,"style",o[0]),y(e,"class","m-0")},m(r,i){k(r,e,i),t||(n=At(o[1].call(null,e)),t=!0)},p(r,[i]){i&1&&y(e,"style",r[0])},i:S,o:S,d(r){r&&v(e),t=!1,n()}}}function Rt(o,e){return e.forEach(([t,n])=>o[t]=n),o}function Lt(o,e,t){let{target:n=void 0}=e,{sketch:r=void 0}=e,{parentDivStyle:i="display: block;"}=e,{debug:a=!1}=e,s;const l=xt(),m={ref(){l("ref",n)},instance(){l("instance",s)}};function f(c){return t(2,n=c),{destroy(){t(2,n=void 0)}}}return j(async()=>{const c=await tt(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:h}=c,p=Object.entries(c).filter(([d,g])=>g instanceof Function&&d[0]!=="_"&&d!=="default");a&&console.log("available p5 native classes",p),s=new h(d=>(d=Rt(d,p),a&&console.log("p5 instance",d),window._p5Instance=d,r(d)),n),m.ref(),m.instance()}),o.$$set=c=>{"target"in c&&t(2,n=c.target),"sketch"in c&&t(3,r=c.sketch),"parentDivStyle"in c&&t(0,i=c.parentDivStyle),"debug"in c&&t(4,a=c.debug)},[i,f,n,r,a]}class lt extends T{constructor(e){super(),W(this,e,Lt,Et,F,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const It=o=>{const e=[];for(let a=0;a<o.height;a++){e.push([]);for(let s=0;s<o.width;s++)e[e.length-1].push({A:1,B:0})}const t=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let s=r-t;s<r+t;s++)e[a][s].B=1;return e},Pt=(o,e)=>{const t={width:o.width/e[0].length,height:o.height/e.length};for(let n=0;n<e.length;n++)for(let r=0;r<e[0].length;r++){const{A:i,B:a}=e[n][r];o.fill(i*255,a*255,0),o.rect(r*t.width,n*t.height,t.width,t.height)}},Mt=1,Tt=.5,ft=.055,Wt=.062,Ft=o=>{const e=[];for(let t=0;t<o.length;t++){e.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[t][n],a=ut(o,{x:n,y:t},"A"),s=ut(o,{x:n,y:t},"B"),l=r+(Mt*a-r*i*i+ft*(1-r)),m=i+(Tt*s+r*i*i-(Wt+ft)*i);e[t].push({A:l,B:m})}}return e},ut=(o,e,t)=>{const n=Nt(o,e);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][t]*s}return r},Nt=(o,e)=>{const{x:t,y:n}=e,r=o[0].length,i=o.length,a={coord:{x:t>0?t-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:t,y:n>0?n-1:i-1},weight:.2},l={coord:{x:t<r-1?t+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:t>0?t-1:r-1,y:n},weight:.2},f={coord:{x:t,y:n},weight:-1},c={coord:{x:t<r-1?t+1:0,y:n},weight:.2},h={coord:{x:t>0?t-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:t,y:n<i-1?n+1:0},weight:.2},p={coord:{x:t<r-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function Ot(o){let e,t;return e=new lt({props:{sketch:o[0]}}),{c(){C(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,r){E(e,n,r),t=!0},p:S,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function Vt(o){const e={width:200,height:200};let t;return[r=>{let i;r.setup=()=>{t=r,r.createCanvas(500,500),r.noStroke(),i=It(e)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Ft(i);Pt(t,i)}}]}let Xt=class extends T{constructor(e){super(),W(this,e,Vt,Ot,F,{})}},$,G;const zt=o=>{$=[],G=[];for(let i=0;i<o.height;i++){$.push([]),G.push([]);for(let a=0;a<o.width;a++)$[$.length-1].push({A:1,B:0}),G[$.length-1].push({A:1,B:0})}const e=5,t=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-t;i<r+t;i++)for(let a=n-e;a<n+e;a++)$[i][a].B=1;return $},Gt=o=>{const e={width:o.width/$[0].length,height:o.height/$.length};for(let t=0;t<$.length;t++)for(let n=0;n<$[0].length;n++){const{A:r,B:i}=$[t][n];o.fill(r*255,i*255,0),o.rect(n*e.width,t*e.height,e.width,e.height)}},Ut=1,Kt=.5,pt=.055,Yt=.062,Zt=()=>{for(let e=0;e<$.length;e++)for(let t=0;t<$[0].length;t++){const{A:n,B:r}=$[e][t],i=mt($,{x:t,y:e},"A"),a=mt($,{x:t,y:e},"B"),s=n+(Ut*i-n*r*r+pt*(1-n)),l=r+(Kt*a+n*r*r-(Yt+pt)*r);G[e][t]={A:s,B:l}}const o=$;return $=G,G=o,$},mt=(o,e,t)=>{const n=Ht(o,e);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][t]*s}return r},Ht=(o,e)=>{const{x:t,y:n}=e,r=o[0].length,i=o.length,a={coord:{x:t>0?t-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:t,y:n>0?n-1:i-1},weight:.2},l={coord:{x:t<r-1?t+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:t>0?t-1:r-1,y:n},weight:.2},f={coord:{x:t,y:n},weight:-1},c={coord:{x:t<r-1?t+1:0,y:n},weight:.2},h={coord:{x:t>0?t-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:t,y:n<i-1?n+1:0},weight:.2},p={coord:{x:t<r-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function Qt(o){let e,t;return e=new lt({props:{sketch:o[0]}}),{c(){C(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,r){E(e,n,r),t=!0},p:S,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function jt(o){const e={width:200,height:200};let t;return[r=>{r.setup=()=>{t=r,r.createCanvas(500,500),r.noStroke(),zt(e)},r.draw=()=>{for(let i=0;i<5;i++)Zt();Gt(t)}}]}let qt=class extends T{constructor(e){super(),W(this,e,jt,Qt,F,{})}},_,U;const Jt=o=>{_=[],U=[];for(let i=0;i<o.height;i++){_.push([]),U.push([]);for(let a=0;a<o.width;a++)_[_.length-1].push({A:1,B:0}),U[_.length-1].push({A:1,B:0})}const e=5,t=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-t;i<r+t;i++)for(let a=n-e;a<n+e;a++)_[i][a].B=1;return _},te=o=>{const e={width:o.width/_[0].length,height:o.height/_.length};for(let t=0;t<_.length;t++)for(let n=0;n<_[0].length;n++){const{A:r,B:i}=_[t][n];o.fill(r*255,i*255,0),o.rect(n*e.width,t*e.height,e.width,e.height)}},ee=1,ne=.5,dt=.055,oe=.062,re=()=>{for(let e=0;e<_.length;e++)for(let t=0;t<_[0].length;t++){const{A:n,B:r}=_[e][t],i=ht(_,{x:t,y:e},"A"),a=ht(_,{x:t,y:e},"B"),s=n+(ee*i-n*r*r+dt*(1-n)),l=r+(ne*a+n*r*r-(oe+dt)*r);U[e][t]={A:s,B:l}}const o=_;return _=U,U=o,_},ht=(o,e,t)=>{const n=ae(o,e);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][t]*s}return r},ae=(o,e)=>{const{x:t,y:n}=e,r=o[0].length,i=o.length,a={coord:{x:t>0?t-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:t,y:n>0?n-1:i-1},weight:.2},l={coord:{x:t<r-1?t+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:t>0?t-1:r-1,y:n},weight:.2},f={coord:{x:t,y:n},weight:-1},c={coord:{x:t<r-1?t+1:0,y:n},weight:.2},h={coord:{x:t>0?t-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:t,y:n<i-1?n+1:0},weight:.2},p={coord:{x:t<r-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function ie(o){let e,t;return e=new lt({props:{sketch:o[0]}}),{c(){C(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,r){E(e,n,r),t=!0},p:S,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function se(o){const e={width:200,height:200};let t;return[r=>{r.setup=()=>{t=r,r.createCanvas(500,500),r.noStroke(),Jt(e)},r.draw=()=>{for(let i=0;i<5;i++)re();te(t)}}]}let le=class extends T{constructor(e){super(),W(this,e,se,ie,F,{})}};function ce(o){let e;return{c(){e=L("canvas"),this.h()},l(t){e=I(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(e).forEach(v),this.h()},h(){y(e,"id","canvas"),y(e,"width",o[0].width),y(e,"height",o[0].height),y(e,"class","svelte-1b0ol19")},m(t,n){k(t,e,n)},p:S,i:S,o:S,d(t){t&&v(e)}}}function fe(o){const e={width:window.innerWidth-50,height:window.innerHeight-10},t=2**10,n=t*.05,r=Array(t*t).fill(0).map((i,a)=>{const s=Math.floor(a/t),l=a%t;return Math.hypot(t/2-l,t/2-s)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return j(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=et({extensions:["OES_texture_float"],canvas:i}),s=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:t,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${t})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${t})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${t})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${t})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${t})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${t})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${t})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${t})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${t})).rg * 0.05;

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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:f})=>s[f%2]},depth:{enable:!1},count:3});a.frame(()=>{m(()=>{a.draw(),l()})})}),[e]}let ue=class extends T{constructor(e){super(),W(this,e,fe,ce,F,{})}};const pe=(o,e,t)=>{const n=o*t;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},me=(o,e)=>Array(o*o).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),de=(o,e)=>Array(o*o).fill(0).map((t,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<e*o?[0,1,0,1]:[1,0,0,1]}).flat(),K=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function he(o){let e;return{c(){e=L("canvas"),this.h()},l(t){e=I(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(e).forEach(v),this.h()},h(){y(e,"id","canvas"),y(e,"width",o[0].width),y(e,"height",o[0].height),y(e,"class","svelte-1b0ol19")},m(t,n){k(t,e,n)},p:S,i:S,o:S,d(t){t&&v(e)}}}function ge(o){const e={width:window.innerWidth-50,height:window.innerHeight-10},t={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},n={iteration:0},r={f:K[t.presetParams].f,k:K[t.presetParams].k};let i,a;const s=async()=>{const f=await tt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new f.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(t,"pause").name("Pause"),i.add(t,"reset").name("Reset simulation");const c=K.reduce((p,d,g)=>(p[d.name]=g,p),{});i.add(t,"presetParams",c).onFinishChange(()=>{r.f=K[t.presetParams].f,r.k=K[t.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(t,"initialConditions",h).onFinishChange(t.reset);const u=i.add(n,"iteration").listen();u.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",f=>{if(f.code==="Space")return t.pause=!t.pause,f.preventDefault();if(f.code==="KeyR")return m(),f.preventDefault()})},m=()=>{const f=document.getElementById("canvas");if(!f)throw new Error("Canvas container not ready");a&&a.destroy(),a=et({extensions:["OES_texture_float"],canvas:f}),n.iteration=0;const c=2**11;let h;t.initialConditions==="randomSpots"?h=me(c,.001):t.initialConditions==="middleCircleAndRandomSpots"?h=pe(c,.005,.05):h=de(c,.02);const u=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:c,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),p=a({frag:`
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
}`,framebuffer:g=>u[(g.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),d=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:g})=>u[g%2]},depth:{enable:!1},count:3});a.frame(()=>{d(()=>{a.draw(),!t.pause&&(n.iteration++,p({Da:1,Db:.5,...r}))})})};return j(()=>{s(),l(),m()}),at(()=>{i.destroy(),a.destroy()}),[e]}let ve=class extends T{constructor(e){super(),W(this,e,ge,he,F,{})}};const ye=(o,e,t)=>{const n=o*t;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},$e=(o,e)=>Array(o*o).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),_e=(o,e)=>Array(o*o).fill(0).map((t,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<e*o?[0,1,0,1]:[1,0,0,1]}).flat(),Y=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Se=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,we=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,be=`precision mediump float;

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
`;function ke(o){let e,t,n;return{c(){e=L("canvas"),this.h()},l(r){e=I(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(e).forEach(v),this.h()},h(){y(e,"id","canvas"),y(e,"width",o[0].width),y(e,"height",o[0].height),y(e,"class","svelte-1b0ol19")},m(r,i){k(r,e,i),t||(n=[X(e,"mousemove",o[1]),X(e,"mousedown",q(o[2])),X(e,"mouseup",o[2]),X(e,"contextmenu",q(De))],t=!0)},p:S,i:S,o:S,d(r){r&&v(e),t=!1,_t(n)}}}const ot=11,De=o=>o;function Ae(o){const e={width:window.innerWidth-50,height:window.innerHeight-10},t={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:Y[t.presetParams].f,k:Y[t.presetParams].k};let a,s;const l=async()=>{const u=await tt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(t,"pause").name("Pause"),a.add(t,"reset").name("Reset simulation");const p=Y.reduce((b,A,x)=>(b[A.name]=x,b),{});a.add(t,"presetParams",p).onFinishChange(()=>{i.f=Y[t.presetParams].f,i.k=Y[t.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(t,"initialConditions",d).onFinishChange(t.reset);const g=a.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",a.add(n,"penSize",1,ot,1).name("Pen size")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return t.pause=!t.pause,u.preventDefault();if(u.code==="KeyR")return f(),u.preventDefault()})},f=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=et({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**ot;let d;t.initialConditions==="randomSpots"?d=$e(p,.001):t.initialConditions==="middleCircleAndRandomSpots"?d=ye(p,.005,.05):d=_e(p,.02);const g=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),b=s({frag:be,framebuffer:x=>g[(x.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}}),A=s({frag:we,vert:Se,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:x})=>g[x%2]},depth:{enable:!1},count:3});s.frame(()=>{A(()=>{s.draw(),t.pause||r.iteration++,b({Da:1,Db:.5,pauseSimulation:t.pause,mousePosition:[n.x,n.y],penRadius:1/2**(ot-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},c=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:d}=u,{width:g,height:b}=u.currentTarget,A=p/g,x=(b-d)/b;n.x=A,n.y=x},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return j(()=>{l(),m(),f()}),at(()=>{a.destroy(),s.destroy()}),[e,c,h]}let xe=class extends T{constructor(e){super(),W(this,e,Ae,ke,F,{})}};const Be=(o,e,t)=>{const n=o*t;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Ce=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Ee=(o,e)=>Array(o*o).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),Re=(o,e)=>Array(o*o).fill(0).map((t,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<e*o?[0,1,0,1]:[1,0,0,1]}).flat(),Z=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],z=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Le=`precision mediump float;

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
`,Ie=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Pe=`precision mediump float;

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
`,We=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`;function Fe(o){let e,t,n;return{c(){e=L("canvas"),this.h()},l(r){e=I(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(e).forEach(v),this.h()},h(){y(e,"id","canvas"),y(e,"width",o[0].width),y(e,"height",o[0].height),y(e,"class","svelte-1b0ol19")},m(r,i){k(r,e,i),t||(n=[X(e,"mousemove",o[1]),X(e,"mousedown",q(o[2])),X(e,"mouseup",o[2]),X(e,"contextmenu",q(Ne))],t=!0)},p:S,i:S,o:S,d(r){r&&v(e),t=!1,_t(n)}}}const rt=11,Ne=o=>o;function Oe(o){const e={width:window.innerWidth-50,height:window.innerHeight-10},t={presetParams:4,colors:"blackWhite",initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:9,penDensity:.3},r={iteration:0},i={f:Z[t.presetParams].f,k:Z[t.presetParams].k};let a,s;const l=async()=>{const u=await tt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(t,"pause").name("Pause"),a.add(t,"reset").name("Reset simulation"),a.add(t,"colors",["grayscale","blackWhite","whiteBlack","raw","timeBasedBlue"]);const p=Z.reduce((b,A,x)=>(b[A.name]=x,b),{});a.add(t,"presetParams",p).onFinishChange(()=>{i.f=Z[t.presetParams].f,i.k=Z[t.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};a.add(t,"initialConditions",d).onFinishChange(t.reset);const g=a.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",a.add(n,"penSize",1,rt,1).name("Pen size"),a.add(n,"penDensity",0,1).name("Pen density")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return t.pause=!t.pause,u.preventDefault();if(u.code==="KeyR")return f(),u.preventDefault()})},f=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=et({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**rt;let d;t.initialConditions==="randomSpots"?d=Ee(p,.001):t.initialConditions==="middleCircleAndRandomSpots"?d=Be(p,.005,.05):t.initialConditions==="empty"?d=Ce(p):d=Re(p,.02);const g=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),b=s({frag:Ie,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:s.prop("iteration"),prevState:B=>g[(B.tick+1)%2]}}),A=s({frag:Me,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:s.prop("iteration"),prevState:B=>g[(B.tick+1)%2]}}),x=s({frag:Te,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:s.prop("iteration"),prevState:B=>g[(B.tick+1)%2]}}),nt=s({frag:We,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:s.prop("iteration"),prevState:B=>g[(B.tick+1)%2]}}),kt=s({frag:Pe,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:s.prop("iteration"),prevState:B=>g[(B.tick+1)%2]}}),Dt=s({frag:Le,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:B=>g[(B.tick+1)%2],uniforms:{prevState:B=>g[B.tick%2],Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penDensity:s.prop("penDensity"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}});s.frame(()=>{t.pause||r.iteration++,Dt({Da:1,Db:.5,pauseSimulation:t.pause,mousePosition:[n.x,n.y],penRadius:1/2**(rt-n.penSize),penDensity:n.penDensity,penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i}),t.colors==="grayscale"?A({iteration:r.iteration}):t.colors==="timeBasedBlue"?kt({iteration:r.iteration}):t.colors==="blackWhite"?x({iteration:r.iteration}):t.colors==="whiteBlack"?nt({iteration:r.iteration}):b({iteration:r.iteration})})},c=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var p=u.currentTarget.getBoundingClientRect();const d=u.clientX-p.left,g=u.clientY-p.top,{width:b,height:A}=u.currentTarget,x=d/b,nt=(A-g)/A;n.x=x,n.y=nt},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return j(()=>{l(),m(),f()}),at(()=>{a.destroy(),s.destroy()}),[e,c,h]}class Ve extends T{constructor(e){super(),W(this,e,Oe,Fe,F,{})}}function gt(o,e,t){const n=o.slice();return n[1]=e[t],n}function vt(o,e,t){const n=o.slice();return n[1]=e[t],n}function Xe(o){let e;return{c(){e=O("About")},l(t){e=V(t,"About")},m(t,n){k(t,e,n)},d(t){t&&v(e)}}}function ze(o){let e=o[1].title+"",t;return{c(){t=O(e)},l(n){t=V(n,e)},m(n,r){k(n,t,r)},p:S,d(n){n&&v(t)}}}function yt(o){let e,t;return e=new bt({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,r){E(e,n,r),t=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function Ge(o){let e,t,n,r;e=new bt({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=yt(vt(o,i,l));const s=l=>D(a[l],1,1,()=>{a[l]=null});return{c(){C(e.$$.fragment),t=H();for(let l=0;l<a.length;l+=1)a[l].c();n=J()},l(l){M(e.$$.fragment,l),t=Q(l);for(let m=0;m<a.length;m+=1)a[m].l(l);n=J()},m(l,m){E(e,l,m),k(l,t,m);for(let f=0;f<a.length;f+=1)a[f].m(l,m);k(l,n,m),r=!0},p(l,m){const f={};if(m&64&&(f.$$scope={dirty:m,ctx:l}),e.$set(f),m&1){i=l[0];let c;for(c=0;c<i.length;c+=1){const h=vt(l,i,c);a[c]?(a[c].p(h,m),w(a[c],1)):(a[c]=yt(h),a[c].c(),w(a[c],1),a[c].m(n.parentNode,n))}for(it(),c=i.length;c<a.length;c+=1)s(c);st()}},i(l){if(!r){w(e.$$.fragment,l);for(let m=0;m<i.length;m+=1)w(a[m]);r=!0}},o(l){D(e.$$.fragment,l),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)D(a[m]);r=!1},d(l){R(e,l),l&&v(t),St(a,l),l&&v(n)}}}function Ue(o){let e,t,n,r,i,a,s,l,m,f,c,h;return{c(){e=L("p"),t=O("Experiments with "),n=L("a"),r=O("Reaction-diffusion systems"),i=H(),a=L("p"),s=O("The code is based on "),l=L("a"),m=O("this tutorial"),f=O(`
                but reimplemented in a glsl shader with
                `),c=L("a"),h=O("regl"),this.h()},l(u){e=I(u,"P",{});var p=P(e);t=V(p,"Experiments with "),n=I(p,"A",{href:!0,target:!0});var d=P(n);r=V(d,"Reaction-diffusion systems"),d.forEach(v),p.forEach(v),i=Q(u),a=I(u,"P",{});var g=P(a);s=V(g,"The code is based on "),l=I(g,"A",{href:!0,target:!0});var b=P(l);m=V(b,"this tutorial"),b.forEach(v),f=V(g,`
                but reimplemented in a glsl shader with
                `),c=I(g,"A",{href:!0,target:!0});var A=P(c);h=V(A,"regl"),A.forEach(v),g.forEach(v),this.h()},h(){y(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),y(n,"target","none"),y(l,"href","https://karlsims.com/rd.html"),y(l,"target","none"),y(c,"href","https://github.com/regl-project/regl"),y(c,"target","none")},m(u,p){k(u,e,p),N(e,t),N(e,n),N(n,r),k(u,i,p),k(u,a,p),N(a,s),N(a,l),N(l,m),N(a,f),N(a,c),N(c,h)},p:S,d(u){u&&v(e),u&&v(i),u&&v(a)}}}function Ke(o){let e,t,n;var r=o[1].component;function i(a){return{}}return r&&(e=ct(r,i())),{c(){e&&C(e.$$.fragment),t=H()},l(a){e&&M(e.$$.fragment,a),t=Q(a)},m(a,s){e&&E(e,a,s),k(a,t,s),n=!0},p(a,s){if(r!==(r=a[1].component)){if(e){it();const l=e;D(l.$$.fragment,1,0,()=>{R(l,1)}),st()}r?(e=ct(r,i()),C(e.$$.fragment),w(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}},i(a){n||(e&&w(e.$$.fragment,a),n=!0)},o(a){e&&D(e.$$.fragment,a),n=!1},d(a){e&&R(e,a),a&&v(t)}}}function $t(o){let e,t;return e=new wt({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,r){E(e,n,r),t=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function Ye(o){let e,t,n,r,i,a;e=new Ct({props:{$$slots:{default:[Ge]},$$scope:{ctx:o}}}),n=new wt({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}});let s=o[0],l=[];for(let f=0;f<s.length;f+=1)l[f]=$t(gt(o,s,f));const m=f=>D(l[f],1,1,()=>{l[f]=null});return{c(){C(e.$$.fragment),t=H(),C(n.$$.fragment),r=H();for(let f=0;f<l.length;f+=1)l[f].c();i=J()},l(f){M(e.$$.fragment,f),t=Q(f),M(n.$$.fragment,f),r=Q(f);for(let c=0;c<l.length;c+=1)l[c].l(f);i=J()},m(f,c){E(e,f,c),k(f,t,c),E(n,f,c),k(f,r,c);for(let h=0;h<l.length;h+=1)l[h].m(f,c);k(f,i,c),a=!0},p(f,c){const h={};c&64&&(h.$$scope={dirty:c,ctx:f}),e.$set(h);const u={};if(c&64&&(u.$$scope={dirty:c,ctx:f}),n.$set(u),c&1){s=f[0];let p;for(p=0;p<s.length;p+=1){const d=gt(f,s,p);l[p]?(l[p].p(d,c),w(l[p],1)):(l[p]=$t(d),l[p].c(),w(l[p],1),l[p].m(i.parentNode,i))}for(it(),p=s.length;p<l.length;p+=1)m(p);st()}},i(f){if(!a){w(e.$$.fragment,f),w(n.$$.fragment,f);for(let c=0;c<s.length;c+=1)w(l[c]);a=!0}},o(f){D(e.$$.fragment,f),D(n.$$.fragment,f),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)D(l[c]);a=!1},d(f){R(e,f),f&&v(t),R(n,f),f&&v(r),St(l,f),f&&v(i)}}}function Ze(o){let e,t,n;return t=new Bt({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){e=L("div"),C(t.$$.fragment)},l(r){e=I(r,"DIV",{});var i=P(e);M(t.$$.fragment,i),i.forEach(v)},m(r,i){k(r,e,i),E(t,e,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){D(t.$$.fragment,r),n=!1},d(r){r&&v(e),R(t)}}}function He(o){return[[{title:"V7",component:Ve},{title:"V6",component:xe},{title:"V5",component:ve},{title:"V4",component:ue},{title:"V3",component:le},{title:"V2",component:qt},{title:"V1",component:Xt}]]}class Qe extends T{constructor(e){super(),W(this,e,He,Ze,F,{})}}function je(o){let e,t;return e=new Qe({}),{c(){C(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,r){E(e,n,r),t=!0},p:S,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}class cn extends T{constructor(e){super(),W(this,e,null,je,F,{})}}export{cn as default};
