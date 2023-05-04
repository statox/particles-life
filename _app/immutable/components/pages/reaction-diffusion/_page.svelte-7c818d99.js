import{S as K,i as U,s as X,k as L,l as C,m as R,h as g,n as _,b as k,X as Me,B as P,Y as Le,o as te,w as I,x as O,y as M,f as x,t as z,z as T,Q as oe,K as E,Z as ee,M as fe,q as F,a as N,r as V,c as W,D as $,u as Te,g as re,d as ae,I as Fe,J as pe,L as ue,N as Ve,O as me,P as Ce,_ as Oe,e as ne,v as de}from"../../../chunks/index-2107b80f.js";import{T as Ne,a as We,b as ze,c as Re}from"../../../chunks/TabPanel-dec752e3.js";import{_ as ie}from"../../../chunks/preload-helper-41c905a7.js";import{R as se}from"../../../chunks/regl-89b00fbf.js";import{b as Ke}from"../../../chunks/paths-b4419565.js";function Ue(o){let e,t,n;return{c(){e=L("div"),this.h()},l(r){e=C(r,"DIV",{style:!0,class:!0}),R(e).forEach(g),this.h()},h(){_(e,"style",o[0]),_(e,"class","m-0")},m(r,i){k(r,e,i),t||(n=Me(o[1].call(null,e)),t=!0)},p(r,[i]){i&1&&_(e,"style",r[0])},i:P,o:P,d(r){r&&g(e),t=!1,n()}}}function Xe(o,e){return e.forEach(([t,n])=>o[t]=n),o}function He(o,e,t){let{target:n=void 0}=e,{sketch:r=void 0}=e,{parentDivStyle:i="display: block;"}=e,{debug:a=!1}=e,u;const s=Le(),f={ref(){s("ref",n)},instance(){s("instance",u)}};function c(l){return t(2,n=l),{destroy(){t(2,n=void 0)}}}return te(async()=>{const l=await ie(()=>import("../../../chunks/p5.min-b96f42d1.js").then(h=>h.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:d}=l,m=Object.entries(l).filter(([h,S])=>S instanceof Function&&h[0]!=="_"&&h!=="default");a&&console.log("available p5 native classes",m),u=new d(h=>(h=Xe(h,m),a&&console.log("p5 instance",h),window._p5Instance=h,r(h)),n),f.ref(),f.instance()}),o.$$set=l=>{"target"in l&&t(2,n=l.target),"sketch"in l&&t(3,r=l.sketch),"parentDivStyle"in l&&t(0,i=l.parentDivStyle),"debug"in l&&t(4,a=l.debug)},[i,c,n,r,a]}class le extends K{constructor(e){super(),U(this,e,He,Ue,X,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Ye=o=>{const e=[];for(let a=0;a<o.height;a++){e.push([]);for(let u=0;u<o.width;u++)e[e.length-1].push({A:1,B:0})}const t=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let u=r-t;u<r+t;u++)e[a][u].B=1;return e},Ge=(o,e)=>{const t={width:o.width/e[0].length,height:o.height/e.length};for(let n=0;n<e.length;n++)for(let r=0;r<e[0].length;r++){const{A:i,B:a}=e[n][r];o.fill(i*255,a*255,0),o.rect(r*t.width,n*t.height,t.width,t.height)}},qe=1,Ze=.5,ve=.055,je=.062,Qe=o=>{const e=[];for(let t=0;t<o.length;t++){e.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[t][n],a=he(o,{x:n,y:t},"A"),u=he(o,{x:n,y:t},"B"),s=r+(qe*a-r*i*i+ve*(1-r)),f=i+(Ze*u+r*i*i-(je+ve)*i);e[t].push({A:s,B:f})}}return e},he=(o,e,t)=>{const n=Je(o,e);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][t]*u}return r},Je=(o,e)=>{const{x:t,y:n}=e,r=o[0].length,i=o.length,a={coord:{x:t>0?t-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:t,y:n>0?n-1:i-1},weight:.2},s={coord:{x:t<r-1?t+1:0,y:n>0?n-1:i-1},weight:.05},f={coord:{x:t>0?t-1:r-1,y:n},weight:.2},c={coord:{x:t,y:n},weight:-1},l={coord:{x:t<r-1?t+1:0,y:n},weight:.2},d={coord:{x:t>0?t-1:r-1,y:n<i-1?n+1:0},weight:.05},v={coord:{x:t,y:n<i-1?n+1:0},weight:.2},m={coord:{x:t<r-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,s,f,c,l,d,v,m]};function et(o){let e,t;return e=new le({props:{sketch:o[0]}}),{c(){I(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p:P,i(n){t||(x(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function tt(o){const e={width:200,height:200};let t;return[r=>{let i;r.setup=()=>{t=r,r.createCanvas(500,500),r.noStroke(),i=Ye(e)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Qe(i);Ge(t,i)}}]}let nt=class extends K{constructor(e){super(),U(this,e,tt,et,X,{})}},A,q;const ot=o=>{A=[],q=[];for(let i=0;i<o.height;i++){A.push([]),q.push([]);for(let a=0;a<o.width;a++)A[A.length-1].push({A:1,B:0}),q[A.length-1].push({A:1,B:0})}const e=5,t=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-t;i<r+t;i++)for(let a=n-e;a<n+e;a++)A[i][a].B=1;return A},rt=o=>{const e={width:o.width/A[0].length,height:o.height/A.length};for(let t=0;t<A.length;t++)for(let n=0;n<A[0].length;n++){const{A:r,B:i}=A[t][n];o.fill(r*255,i*255,0),o.rect(n*e.width,t*e.height,e.width,e.height)}},at=1,it=.5,ge=.055,st=.062,lt=()=>{for(let e=0;e<A.length;e++)for(let t=0;t<A[0].length;t++){const{A:n,B:r}=A[e][t],i=ye(A,{x:t,y:e},"A"),a=ye(A,{x:t,y:e},"B"),u=n+(at*i-n*r*r+ge*(1-n)),s=r+(it*a+n*r*r-(st+ge)*r);q[e][t]={A:u,B:s}}const o=A;return A=q,q=o,A},ye=(o,e,t)=>{const n=ct(o,e);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][t]*u}return r},ct=(o,e)=>{const{x:t,y:n}=e,r=o[0].length,i=o.length,a={coord:{x:t>0?t-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:t,y:n>0?n-1:i-1},weight:.2},s={coord:{x:t<r-1?t+1:0,y:n>0?n-1:i-1},weight:.05},f={coord:{x:t>0?t-1:r-1,y:n},weight:.2},c={coord:{x:t,y:n},weight:-1},l={coord:{x:t<r-1?t+1:0,y:n},weight:.2},d={coord:{x:t>0?t-1:r-1,y:n<i-1?n+1:0},weight:.05},v={coord:{x:t,y:n<i-1?n+1:0},weight:.2},m={coord:{x:t<r-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,s,f,c,l,d,v,m]};function ft(o){let e,t;return e=new le({props:{sketch:o[0]}}),{c(){I(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p:P,i(n){t||(x(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function ut(o){const e={width:200,height:200};let t;return[r=>{r.setup=()=>{t=r,r.createCanvas(500,500),r.noStroke(),ot(e)},r.draw=()=>{for(let i=0;i<5;i++)lt();rt(t)}}]}let pt=class extends K{constructor(e){super(),U(this,e,ut,ft,X,{})}},B,Z;const mt=o=>{B=[],Z=[];for(let i=0;i<o.height;i++){B.push([]),Z.push([]);for(let a=0;a<o.width;a++)B[B.length-1].push({A:1,B:0}),Z[B.length-1].push({A:1,B:0})}const e=5,t=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-t;i<r+t;i++)for(let a=n-e;a<n+e;a++)B[i][a].B=1;return B},dt=o=>{const e={width:o.width/B[0].length,height:o.height/B.length};for(let t=0;t<B.length;t++)for(let n=0;n<B[0].length;n++){const{A:r,B:i}=B[t][n];o.fill(r*255,i*255,0),o.rect(n*e.width,t*e.height,e.width,e.height)}},vt=1,ht=.5,Se=.055,gt=.062,yt=()=>{for(let e=0;e<B.length;e++)for(let t=0;t<B[0].length;t++){const{A:n,B:r}=B[e][t],i=_e(B,{x:t,y:e},"A"),a=_e(B,{x:t,y:e},"B"),u=n+(vt*i-n*r*r+Se*(1-n)),s=r+(ht*a+n*r*r-(gt+Se)*r);Z[e][t]={A:u,B:s}}const o=B;return B=Z,Z=o,B},_e=(o,e,t)=>{const n=St(o,e);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][t]*u}return r},St=(o,e)=>{const{x:t,y:n}=e,r=o[0].length,i=o.length,a={coord:{x:t>0?t-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:t,y:n>0?n-1:i-1},weight:.2},s={coord:{x:t<r-1?t+1:0,y:n>0?n-1:i-1},weight:.05},f={coord:{x:t>0?t-1:r-1,y:n},weight:.2},c={coord:{x:t,y:n},weight:-1},l={coord:{x:t<r-1?t+1:0,y:n},weight:.2},d={coord:{x:t>0?t-1:r-1,y:n<i-1?n+1:0},weight:.05},v={coord:{x:t,y:n<i-1?n+1:0},weight:.2},m={coord:{x:t<r-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,s,f,c,l,d,v,m]};function _t(o){let e,t;return e=new le({props:{sketch:o[0]}}),{c(){I(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p:P,i(n){t||(x(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function wt(o){const e={width:200,height:200};let t;return[r=>{r.setup=()=>{t=r,r.createCanvas(500,500),r.noStroke(),mt(e)},r.draw=()=>{for(let i=0;i<5;i++)yt();dt(t)}}]}let $t=class extends K{constructor(e){super(),U(this,e,wt,_t,X,{})}};function bt(o){let e;return{c(){e=L("canvas"),this.h()},l(t){e=C(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(g),this.h()},h(){_(e,"id","canvas"),_(e,"width",o[0].width),_(e,"height",o[0].height),_(e,"class","svelte-1b0ol19")},m(t,n){k(t,e,n)},p:P,i:P,o:P,d(t){t&&g(e)}}}function xt(o){const e={width:window.innerWidth-50,height:window.innerHeight-10},t=2**10,n=t*.05,r=Array(t*t).fill(0).map((i,a)=>{const u=Math.floor(a/t),s=a%t;return Math.hypot(t/2-s,t/2-u)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return te(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=se({extensions:["OES_texture_float"],canvas:i}),u=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:t,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),s=a({frag:`
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
}`,framebuffer:c=>u[(c.tick+1)%2]}),f=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>u[c%2]},depth:{enable:!1},count:3});a.frame(()=>{f(()=>{a.draw(),s()})})}),[e]}let kt=class extends K{constructor(e){super(),U(this,e,xt,bt,X,{})}};const Dt=(o,e,t)=>{const n=o*t;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},At=(o,e)=>Array(o*o).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),Bt=(o,e)=>Array(o*o).fill(0).map((t,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<e*o?[0,1,0,1]:[1,0,0,1]}).flat(),Q=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Lt(o){let e;return{c(){e=L("canvas"),this.h()},l(t){e=C(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(g),this.h()},h(){_(e,"id","canvas"),_(e,"width",o[0].width),_(e,"height",o[0].height),_(e,"class","svelte-1b0ol19")},m(t,n){k(t,e,n)},p:P,i:P,o:P,d(t){t&&g(e)}}}function Ct(o){const e={width:window.innerWidth-50,height:window.innerHeight-10},t={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={iteration:0},r={f:Q[t.presetParams].f,k:Q[t.presetParams].k};let i,a;const u=async()=>{const c=await ie(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new c.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(t,"pause").name("Pause"),i.add(t,"reset").name("Reset simulation");const l=Q.reduce((m,h,S)=>(m[h.name]=S,m),{});i.add(t,"presetParams",l).onFinishChange(()=>{r.f=Q[t.presetParams].f,r.k=Q[t.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(t,"initialConditions",d).onFinishChange(t.reset);const v=i.add(n,"iteration").listen();v.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return t.pause=!t.pause,c.preventDefault();if(c.code==="KeyR")return f(),c.preventDefault()})},f=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");a&&a.destroy(),a=se({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const l=2**11;let d;t.initialConditions==="randomSpots"?d=At(l,.001):t.initialConditions==="middleCircleAndRandomSpots"?d=Dt(l,.005,.05):d=Bt(l,.02);const v=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:l,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),m=a({frag:`
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
}`,framebuffer:S=>v[(S.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),h=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:S})=>v[S%2]},depth:{enable:!1},count:3});a.frame(()=>{h(()=>{a.draw(),!t.pause&&(n.iteration++,m({Da:1,Db:.5,...r}))})})};return te(()=>{u(),s(),f()}),oe(()=>{i.destroy(),a.destroy()}),[e]}let zt=class extends K{constructor(e){super(),U(this,e,Ct,Lt,X,{})}};const Rt=(o,e,t)=>{const n=o*t;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Pt=(o,e)=>Array(o*o).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),Et=(o,e)=>Array(o*o).fill(0).map((t,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<e*o?[0,1,0,1]:[1,0,0,1]}).flat(),J=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],It=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Mt=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,Tt=`precision mediump float;

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
`;function Ft(o){let e,t,n;return{c(){e=L("canvas"),this.h()},l(r){e=C(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(g),this.h()},h(){_(e,"id","canvas"),_(e,"width",o[0].width),_(e,"height",o[0].height),_(e,"class","svelte-1b0ol19")},m(r,i){k(r,e,i),t||(n=[E(e,"mousemove",o[1]),E(e,"mousedown",ee(o[2])),E(e,"mouseup",o[2]),E(e,"contextmenu",ee(Vt))],t=!0)},p:P,i:P,o:P,d(r){r&&g(e),t=!1,fe(n)}}}const ce=11,Vt=o=>o;function Ot(o){const e={width:window.innerWidth-50,height:window.innerHeight-10},t={presetParams:4,initialConditions:"randomSpots",reset:()=>c(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:J[t.presetParams].f,k:J[t.presetParams].k};let a,u;const s=async()=>{const v=await ie(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new v.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(t,"pause").name("Pause"),a.add(t,"reset").name("Reset simulation");const m=J.reduce((w,y,p)=>(w[y.name]=p,w),{});a.add(t,"presetParams",m).onFinishChange(()=>{i.f=J[t.presetParams].f,i.k=J[t.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(t,"initialConditions",h).onFinishChange(t.reset);const S=a.add(r,"iteration").listen();S.domElement.style.pointerEvents="none",a.add(n,"penSize",1,ce,1).name("Pen size")},f=()=>{document.addEventListener("keydown",v=>{if(v.code==="Space")return t.pause=!t.pause,v.preventDefault();if(v.code==="KeyR")return c(),v.preventDefault()})},c=()=>{const v=document.getElementById("canvas");if(!v)throw new Error("Canvas container not ready");u&&u.destroy(),u=se({extensions:["OES_texture_float"],canvas:v}),r.iteration=0;const m=2**ce;let h;t.initialConditions==="randomSpots"?h=Pt(m,.001):t.initialConditions==="middleCircleAndRandomSpots"?h=Rt(m,.005,.05):h=Et(m,.02);const S=Array(2).fill(0).map(()=>u.framebuffer({color:u.texture({radius:m,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),w=u({frag:Tt,framebuffer:p=>S[(p.tick+1)%2],uniforms:{Da:u.prop("Da"),Db:u.prop("Db"),f:u.prop("f"),k:u.prop("k"),radius:m,pauseSimulation:u.prop("pauseSimulation"),mousePosition:u.prop("mousePosition"),penRadius:u.prop("penRadius"),penIsActive:u.prop("penIsActive"),eraserIsActive:u.prop("eraserIsActive")}}),y=u({frag:Mt,vert:It,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:p})=>S[p%2]},depth:{enable:!1},count:3});u.frame(()=>{y(()=>{u.draw(),t.pause||r.iteration++,w({Da:1,Db:.5,pauseSimulation:t.pause,mousePosition:[n.x,n.y],penRadius:1/2**(ce-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},l=v=>{if(!v.currentTarget)throw new Error("No target for the onmousemove event");if(!v.currentTarget.width||!v.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:m,y:h}=v,{width:S,height:w}=v.currentTarget,y=m/S,p=(w-h)/w;n.x=y,n.y=p},d=v=>{if(![0,2].includes(v.button)||!["mouseup","mousedown"].includes(v.type))return;let m=v.type==="mousedown";v.button===0&&(n.pressedLeft=m),v.button===2&&(n.pressedRight=m)};return te(()=>{s(),f(),c()}),oe(()=>{a.destroy(),u.destroy()}),[e,l,d]}let Nt=class extends K{constructor(e){super(),U(this,e,Ot,Ft,X,{})}};const j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function we(o,e,t){const n=o.slice();return n[16]=e[t],n}function $e(o){let e,t,n,r,i,a,u=j,s=[];for(let f=0;f<u.length;f+=1)s[f]=be(we(o,u,f));return n=new le({props:{sketch:o[3]}}),{c(){e=L("select");for(let f=0;f<s.length;f+=1)s[f].c();t=N(),I(n.$$.fragment),this.h()},l(f){e=C(f,"SELECT",{class:!0});var c=R(e);for(let l=0;l<s.length;l+=1)s[l].l(c);c.forEach(g),t=W(f),O(n.$$.fragment,f),this.h()},h(){_(e,"class","full-width svelte-x05r1k"),o[0]===void 0&&Fe(()=>o[5].call(e))},m(f,c){k(f,e,c);for(let l=0;l<s.length;l+=1)s[l].m(e,null);pe(e,o[0]),k(f,t,c),M(n,f,c),r=!0,i||(a=[E(e,"change",o[5]),E(e,"change",o[6])],i=!0)},p(f,c){if(c&0){u=j;let l;for(l=0;l<u.length;l+=1){const d=we(f,u,l);s[l]?s[l].p(d,c):(s[l]=be(d),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=u.length}c&1&&pe(e,f[0])},i(f){r||(x(n.$$.fragment,f),r=!0)},o(f){z(n.$$.fragment,f),r=!1},d(f){f&&g(e),ue(s,f),f&&g(t),T(n,f),i=!1,fe(a)}}}function be(o){let e,t=o[16].type+"",n,r,i=o[16].name+"",a,u;return{c(){e=L("option"),n=F(t),r=F(" - "),a=F(i),u=N(),this.h()},l(s){e=C(s,"OPTION",{});var f=R(e);n=V(f,t),r=V(f," - "),a=V(f,i),u=W(f),f.forEach(g),this.h()},h(){e.__value=o[16],e.value=e.__value},m(s,f){k(s,e,f),$(e,n),$(e,r),$(e,a),$(e,u)},p:P,d(s){s&&g(e)}}}function Wt(o){let e,t,n=o[1]?"Close":"F/K selection",r,i,a,u,s,f=o[1]&&$e(o);return{c(){e=L("div"),t=L("button"),r=F(n),i=N(),f&&f.c(),this.h()},l(c){e=C(c,"DIV",{id:!0,class:!0});var l=R(e);t=C(l,"BUTTON",{class:!0,id:!0});var d=R(t);r=V(d,n),d.forEach(g),i=W(l),f&&f.l(l),l.forEach(g),this.h()},h(){_(t,"class","full-width svelte-x05r1k"),_(t,"id","toggleButton"),_(e,"id","container"),_(e,"class","svelte-x05r1k")},m(c,l){k(c,e,l),$(e,t),$(t,r),$(e,i),f&&f.m(e,null),a=!0,u||(s=E(t,"click",o[4]),u=!0)},p(c,[l]){(!a||l&2)&&n!==(n=c[1]?"Close":"F/K selection")&&Te(r,n),c[1]?f?(f.p(c,l),l&2&&x(f,1)):(f=$e(c),f.c(),x(f,1),f.m(e,null)):f&&(re(),z(f,1,1,()=>{f=null}),ae())},i(c){a||(x(f),a=!0)},o(c){z(f),a=!1},d(c){c&&g(e),f&&f.d(),u=!1,s()}}}function Kt(o,e,t){const n=Le();let r=j[0],i=!1;const a=[.01,.09],u=[.01,.08],s=p=>{const{f:b,k:D}=p,H=m.map(D,u[0],u[1],0,m.width),G=m.map(b,a[0],a[1],0,m.height);return{x:H,y:G}},f=p=>{const{x:b,y:D}=p,H=m.map(D,0,m.height,a[0],a[1]),G=m.map(b,0,m.width,u[0],u[1]);return{f:H,k:G}},c=p=>{const b=p.mouseX,D=p.mouseY;if(b<0||D<0||b>p.width||D>p.height)return;const{f:H,k:G}=f({x:p.mouseX,y:p.mouseY});t(0,r={f:H,k:G,name:"custom",type:"manual"}),n("fkupdated",r)},l=p=>{p.fill("blue");for(const b of j){const{x:D,y:H}=s({f:b.f,k:b.k});p.circle(D,H,8),p.text(b.name,D-p.textWidth(b.name)/2,H-10)}},d=p=>{p.fill("red");const{x:b,y:D}=s(r);p.text("F",10,D>10?D-5:D+15),p.line(0,D,p.width,D),p.text("K",b<p.width-10?b+5:b-15,p.height-10),p.line(b,0,b,p.height),p.circle(b,D,10)},v=p=>{const{f:b,k:D}=r,H=`F: ${b.toFixed(4)}`,G=`K: ${D.toFixed(4)}`;p.fill("red"),p.text(H,p.width*.05,p.height/2),p.text(G,p.width*.05,p.height/2+p.textSize()+6)};let m;const h=p=>{m=p;let b;p.preload=()=>{b=p.loadImage(Ke+"/pearson-space.png")},p.setup=()=>{p.createCanvas(500,500),p.frameRate(25)},p.draw=()=>{p.background(255),p.tint(150,80),p.image(b,0,0,p.width,p.height),l(p),d(p),v(p),p.mouseIsPressed&&c(p)}},S=()=>{t(1,i=!i),i||m.remove()};oe(()=>m?.remove());function w(){r=Ve(this),t(0,r)}return[r,i,n,h,S,w,()=>n("fkupdated",r)]}class Ut extends K{constructor(e){super(),U(this,e,Kt,Wt,X,{})}}const Xt=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ht=`precision mediump float;

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
        (uv.x >= mousePosition.x - 0.01 && uv.x <= mousePosition.x + 0.01 && uv.y >= mousePosition.y - 0.001 && uv.y <= mousePosition.y + 0.001))
    {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    } else {
        gl_FragColor = color;
    }
}
`;let Pe;const Yt=o=>{Pe=o({frag:Ht,vert:Xt,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:o.prop("outputBuffer"),uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan"),prevState:o.prop("inputBuffer")}})},Gt=o=>{const{inputBuffer:e,mouseState:t,outputBuffer:n,worldSize:r}=o;Pe({inputBuffer:e,outputBuffer:n,mousePosition:[t.x,t.y],penRadius:1/2**(r-t.penSize),zoomLevel:t.zoomLevel,pan:[t.panX,t.panY]})},qt=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,Zt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,jt=`precision mediump float;

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
`,Qt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Jt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,en=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,tn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    // vec3 color1 = vec3(1.0, 0.0, 0.0);
    // vec3 color2 = vec3(0.0, 1.0, 0.0);
    // vec3 result = color1 * A + color2 * B;

    vec3 color1RGB = vec3(0.639, 0.941, 0.717);
    vec3 color2RGB = vec3(0.929, 0.082, 0.705);

    vec3 color1HSV = rgb2hsv(color1RGB);
    vec3 color2HSV = rgb2hsv(color2RGB);

    float color1Offset = (cos(iteration * 0.001) + 1.0) * 0.5;
    float color1newH = 0.5 * (color1HSV.x + color1Offset);
    vec3 color1newHSV = vec3(color1newH, color1HSV.g, color1HSV.b);

    float color2Offset = (cos(iteration * 0.002)) * 0.5;
    float color2newH = 0.5 * (color2HSV.x + color2Offset + 0.33);
    vec3 color2newHSV = vec3(color2newH, color2HSV.g, color2HSV.b);


    vec3 resultHSV = color1newHSV * A + color2newHSV * B;
    vec3 result = hsv2rgb(resultHSV);

    gl_FragColor = vec4(result, 1.0);
}
`,nn=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,on=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec3 color1 = vec3(0.0, 0.0, 1.0);
    vec3 color2 = vec3(1.0, 0.0, 0.0);
    vec3 result = vec3(A, 0.0, 1.0-A);

    gl_FragColor = vec4(result, 1.0);
}
`,Y={},rn=o=>{const e={vert:qt,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:o.prop("outputBuffer"),uniforms:{iteration:o.prop("iteration"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan"),prevState:o.prop("inputBuffer")}};Y.raw=o({frag:Zt,...e}),Y.grayscale=o({frag:Qt,...e}),Y.blackwhite=o({frag:Jt,...e}),Y.whiteblack=o({frag:en,...e}),Y.timebasedblue=o({frag:jt,...e}),Y.lerp=o({frag:tn,...e}),Y.mrob=o({frag:nn,...e}),Y.redblue=o({frag:on,...e})},an=o=>{const{colorMode:e,inputBuffer:t,iteration:n,outputBuffer:r,zoomState:i}=o;(Y[e]||Y.raw)({inputBuffer:t,iteration:n,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},sn=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

uniform bool penIsActive;
uniform bool eraserIsActive;
uniform float penDensity;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

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
    if (penIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (eraserIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`,ln=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
uniform float penRadius;

attribute vec2 position;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

void main() {
    uv = 0.5 * (position + 1.0);
    mouseUv = (mousePosition * zoomLevel) + pan * (1.0 - zoomLevel);
    scaledPenRadius = penRadius * zoomLevel;
    gl_Position = vec4(position, 0, 1);
}
`;let Ee;const cn=(o,e)=>{Ee=o({frag:sn,vert:ln,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:o.prop("outputBuffer"),uniforms:{prevState:o.prop("inputBuffer"),Da:1,Db:.5,f:o.prop("f"),k:o.prop("k"),radius:e,pauseSimulation:o.prop("pauseSimulation"),mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),penDensity:o.prop("penDensity"),penIsActive:o.prop("penIsActive"),eraserIsActive:o.prop("eraserIsActive"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan")}})},fn=o=>{const{inputBuffer:e,outputBuffer:t,pauseSimulation:n,mouseState:r,simulationParameters:i,worldSize:a}=o;Ee({inputBuffer:e,outputBuffer:t,pauseSimulation:n,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(a-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...i})},un=(o,e)=>o==="randomSpots"?dn(e,.001):o==="middleCircleAndRandomSpots"?pn(e,.005,.05):o==="empty"?mn(e):vn(e,.02),pn=(o,e,t)=>{const n=o*t;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},mn=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),dn=(o,e)=>Array(o*o).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),vn=(o,e)=>Array(o*o).fill(0).map((t,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<e*o?[0,1,0,1]:[1,0,0,1]}).flat(),hn=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,gn=`precision highp float;

uniform sampler2D prevState;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    float division = 10.0;
    float column = mod(uv.x, 1.0 / division);
    float c = column * division;

    float row = mod(uv.y, 1.0 / division);
    float r = row * division;

    // I haven't found a way to compare the value to an exact value
    // Might be a precision issue, or just that I'm missing something
    if (c < 0.05 || r < 0.05) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
       gl_FragColor = color;
    }
}
`;let Ie;const yn=o=>{Ie=o({vert:hn,frag:gn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:o.prop("outputBuffer"),uniforms:{prevState:o.prop("inputBuffer"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan")}})},Sn=o=>{const{inputBuffer:e,outputBuffer:t,zoomState:n}=o;Ie({inputBuffer:e,outputBuffer:t,zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},_n=o=>{const{controls:e,info:t,mouseState:n,simulationParameters:r}=o,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=se({extensions:["OES_texture_float"],canvas:i});t.iteration=0;const u=2**t.worldSize,s=un(e.initialConditions,u),f=()=>a.framebuffer({color:a.texture({radius:u,data:s,wrap:"repeat",type:"float"}),depthStencil:!1}),c=Array(2).fill(0).map(f),l=Array(2).fill(0).map(f);cn(a,u),rn(a),yn(a),Yt(a);let d=0;return a.frame(()=>{e.pause||t.iteration++;let v=c[(d+1)%2];for(let m=0;m<e.speed;m++){d++;const h=c[d%2];v=c[(d+1)%2],fn({inputBuffer:h,outputBuffer:v,worldSize:t.worldSize,pauseSimulation:e.pause,mouseState:n,simulationParameters:r})}wn({inputTexture:v,graphicsTextures:l,controls:e,info:t,mouseState:n})}),a},wn=o=>{const{inputTexture:e,graphicsTextures:t,controls:n,info:r,mouseState:i}=o;let a=0;a++;const u=e,s=t[a%2];if(an({colorMode:n.colors,inputBuffer:u,iteration:r.iteration,outputBuffer:s,zoomState:i}),n.grid){a++;const l=t[(a+1)%2],d=t[a%2];Sn({inputBuffer:l,outputBuffer:d,zoomState:i})}a++;const f=t[(a+1)%2],c=null;Gt({mouseState:i,worldSize:r.worldSize,inputBuffer:f,outputBuffer:c})},xe=o=>{if(!o.currentTarget)throw new Error("Event has no currentTarget");const e=o.currentTarget,t=e.getBoundingClientRect(),n=o.clientX-t.left,r=o.clientY-t.top,{width:i,height:a}=e,u=n/i,s=(a-r)/a;return{x:u,y:s}};const{window:$n}=Oe;function bn(o){let e,t,n,r,i,a,u,s,f,c,l,d,v,m,h;return t=new Ut({}),t.$on("fkupdated",o[7]),{c(){e=L("main"),I(t.$$.fragment),n=N(),r=L("div"),i=N(),a=L("div"),u=L("label"),s=F("World Size:"),f=N(),c=L("input"),l=N(),d=L("canvas"),this.h()},l(S){e=C(S,"MAIN",{});var w=R(e);O(t.$$.fragment,w),n=W(w),r=C(w,"DIV",{id:!0,class:!0}),R(r).forEach(g),i=W(w),a=C(w,"DIV",{});var y=R(a);u=C(y,"LABEL",{for:!0});var p=R(u);s=V(p,"World Size:"),p.forEach(g),f=W(y),c=C(y,"INPUT",{id:!0,type:!0,step:!0}),y.forEach(g),l=W(w),d=C(w,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(d).forEach(g),w.forEach(g),this.h()},h(){_(r,"id","datgui-container"),_(r,"class","svelte-vkas0b"),_(u,"for","worldSize"),_(c,"id","worldSize"),_(c,"type","number"),_(c,"step","1"),_(d,"id","canvas"),_(d,"width",o[1].width),_(d,"height",o[1].height),_(d,"class","svelte-vkas0b")},m(S,w){k(S,e,w),M(t,e,null),$(e,n),$(e,r),$(e,i),$(e,a),$(a,u),$(u,s),$(a,f),$(a,c),me(c,o[0].worldSize),$(e,l),$(e,d),v=!0,m||(h=[E($n,"keydown",o[2]),E(c,"input",o[8]),E(c,"change",o[6]),E(d,"mousemove",o[4]),E(d,"mousedown",ee(o[5])),E(d,"mouseup",o[5]),E(d,"wheel",o[3]),E(d,"keydown",ee(o[2])),E(d,"contextmenu",ee(xn))],m=!0)},p(S,[w]){w&1&&Ce(c.value)!==S[0].worldSize&&me(c,S[0].worldSize)},i(S){v||(x(t.$$.fragment,S),v=!0)},o(S){z(t.$$.fragment,S),v=!1},d(S){S&&g(e),T(t),m=!1,fe(h)}}}const xn=o=>o;function kn(o,e,t){const n={width:window.innerWidth-50,height:window.innerHeight-10},r={colors:"mrob",initialConditions:"randomSpots",reset:()=>h(),pause:!1,grid:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:9},u={f:j[0].f,k:j[0].k};let s,f;const c=async()=>{const y=await ie(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new y.GUI({autoPlace:!1,closeOnTop:!0}),s.domElement.id="datgui";const p=document.getElementById("datgui-container");if(!p)throw new Error("Gui container not ready");p.appendChild(s.domElement),s.add(r,"pause").name("Pause"),s.add(r,"grid").name("Debug grid"),s.add(r,"reset").name("Reset simulation"),s.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue"]).name("Color scheme");const b={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};s.add(r,"initialConditions",b).onFinishChange(r.reset).name("Initial conditions");const D=s.add(a,"iteration").listen();D.domElement.style.pointerEvents="none",s.add(r,"speed",1,500).name("Simulation speed"),s.add(i,"penSize",0,a.worldSize).name("Pen size"),s.add(i,"penDensity",0,1).name("Pen density"),s.add(i,"zoomLevel",0,1).name("Zoom level").listen(),s.add(i,"panX",0,1).name("pan x").listen(),s.add(i,"panY",0,1).name("pan y").listen()},l=y=>{if(y.code==="Space"){r.pause=!r.pause,y.preventDefault();return}if(y.code==="KeyR"&&!y.getModifierState("Control")){h(),y.preventDefault();return}},d=y=>{if(!y.getModifierState("Control"))return;const p=xe(y);i.panX=p.x,i.panY=p.y,y.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),y.preventDefault()},v=y=>{const p=xe(y);i.x=p.x,i.y=p.y},m=y=>{if(![0,2].includes(y.button)||!["mouseup","mousedown"].includes(y.type))return;let p=y.type==="mousedown";y.button===0&&(i.pressedLeft=p),y.button===2&&(i.pressedRight=p)},h=()=>{isNaN(a.worldSize)||(a.worldSize>11&&t(0,a.worldSize=11,a),a.worldSize<1&&t(0,a.worldSize=1,a),s&&(document.getElementById(s.domElement.id)?.remove(),s.destroy()),f?.destroy(),c(),f=_n({controls:r,info:a,mouseState:i,simulationParameters:u}))},S=y=>{u.f=y.detail.f,u.k=y.detail.k};te(()=>{h()}),oe(()=>{s.destroy(),f.destroy()});function w(){a.worldSize=Ce(this.value),t(0,a)}return[a,n,l,d,v,m,h,S,w]}class Dn extends K{constructor(e){super(),U(this,e,kn,bn,X,{})}}function ke(o,e,t){const n=o.slice();return n[1]=e[t],n}function De(o,e,t){const n=o.slice();return n[1]=e[t],n}function An(o){let e;return{c(){e=F("About")},l(t){e=V(t,"About")},m(t,n){k(t,e,n)},d(t){t&&g(e)}}}function Bn(o){let e=o[1].title+"",t;return{c(){t=F(e)},l(n){t=V(n,e)},m(n,r){k(n,t,r)},p:P,d(n){n&&g(t)}}}function Ae(o){let e,t;return e=new Re({props:{$$slots:{default:[Bn]},$$scope:{ctx:o}}}),{c(){I(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(x(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function Ln(o){let e,t,n,r;e=new Re({props:{$$slots:{default:[An]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let s=0;s<i.length;s+=1)a[s]=Ae(De(o,i,s));const u=s=>z(a[s],1,1,()=>{a[s]=null});return{c(){I(e.$$.fragment),t=N();for(let s=0;s<a.length;s+=1)a[s].c();n=ne()},l(s){O(e.$$.fragment,s),t=W(s);for(let f=0;f<a.length;f+=1)a[f].l(s);n=ne()},m(s,f){M(e,s,f),k(s,t,f);for(let c=0;c<a.length;c+=1)a[c].m(s,f);k(s,n,f),r=!0},p(s,f){const c={};if(f&64&&(c.$$scope={dirty:f,ctx:s}),e.$set(c),f&1){i=s[0];let l;for(l=0;l<i.length;l+=1){const d=De(s,i,l);a[l]?(a[l].p(d,f),x(a[l],1)):(a[l]=Ae(d),a[l].c(),x(a[l],1),a[l].m(n.parentNode,n))}for(re(),l=i.length;l<a.length;l+=1)u(l);ae()}},i(s){if(!r){x(e.$$.fragment,s);for(let f=0;f<i.length;f+=1)x(a[f]);r=!0}},o(s){z(e.$$.fragment,s),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)z(a[f]);r=!1},d(s){T(e,s),s&&g(t),ue(a,s),s&&g(n)}}}function Cn(o){let e,t,n,r,i,a,u,s,f,c,l,d;return{c(){e=L("p"),t=F("Experiments with "),n=L("a"),r=F("Reaction-diffusion systems"),i=N(),a=L("p"),u=F("The code is based on "),s=L("a"),f=F("this tutorial"),c=F(`
                but reimplemented in a glsl shader with
                `),l=L("a"),d=F("regl"),this.h()},l(v){e=C(v,"P",{});var m=R(e);t=V(m,"Experiments with "),n=C(m,"A",{href:!0,target:!0});var h=R(n);r=V(h,"Reaction-diffusion systems"),h.forEach(g),m.forEach(g),i=W(v),a=C(v,"P",{});var S=R(a);u=V(S,"The code is based on "),s=C(S,"A",{href:!0,target:!0});var w=R(s);f=V(w,"this tutorial"),w.forEach(g),c=V(S,`
                but reimplemented in a glsl shader with
                `),l=C(S,"A",{href:!0,target:!0});var y=R(l);d=V(y,"regl"),y.forEach(g),S.forEach(g),this.h()},h(){_(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),_(n,"target","none"),_(s,"href","https://karlsims.com/rd.html"),_(s,"target","none"),_(l,"href","https://github.com/regl-project/regl"),_(l,"target","none")},m(v,m){k(v,e,m),$(e,t),$(e,n),$(n,r),k(v,i,m),k(v,a,m),$(a,u),$(a,s),$(s,f),$(a,c),$(a,l),$(l,d)},p:P,d(v){v&&g(e),v&&g(i),v&&g(a)}}}function zn(o){let e,t,n;var r=o[1].component;function i(a){return{}}return r&&(e=de(r,i())),{c(){e&&I(e.$$.fragment),t=N()},l(a){e&&O(e.$$.fragment,a),t=W(a)},m(a,u){e&&M(e,a,u),k(a,t,u),n=!0},p(a,u){if(r!==(r=a[1].component)){if(e){re();const s=e;z(s.$$.fragment,1,0,()=>{T(s,1)}),ae()}r?(e=de(r,i()),I(e.$$.fragment),x(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}},i(a){n||(e&&x(e.$$.fragment,a),n=!0)},o(a){e&&z(e.$$.fragment,a),n=!1},d(a){e&&T(e,a),a&&g(t)}}}function Be(o){let e,t;return e=new ze({props:{$$slots:{default:[zn]},$$scope:{ctx:o}}}),{c(){I(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(x(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function Rn(o){let e,t,n,r,i,a;e=new We({props:{$$slots:{default:[Ln]},$$scope:{ctx:o}}}),n=new ze({props:{$$slots:{default:[Cn]},$$scope:{ctx:o}}});let u=o[0],s=[];for(let c=0;c<u.length;c+=1)s[c]=Be(ke(o,u,c));const f=c=>z(s[c],1,1,()=>{s[c]=null});return{c(){I(e.$$.fragment),t=N(),I(n.$$.fragment),r=N();for(let c=0;c<s.length;c+=1)s[c].c();i=ne()},l(c){O(e.$$.fragment,c),t=W(c),O(n.$$.fragment,c),r=W(c);for(let l=0;l<s.length;l+=1)s[l].l(c);i=ne()},m(c,l){M(e,c,l),k(c,t,l),M(n,c,l),k(c,r,l);for(let d=0;d<s.length;d+=1)s[d].m(c,l);k(c,i,l),a=!0},p(c,l){const d={};l&64&&(d.$$scope={dirty:l,ctx:c}),e.$set(d);const v={};if(l&64&&(v.$$scope={dirty:l,ctx:c}),n.$set(v),l&1){u=c[0];let m;for(m=0;m<u.length;m+=1){const h=ke(c,u,m);s[m]?(s[m].p(h,l),x(s[m],1)):(s[m]=Be(h),s[m].c(),x(s[m],1),s[m].m(i.parentNode,i))}for(re(),m=u.length;m<s.length;m+=1)f(m);ae()}},i(c){if(!a){x(e.$$.fragment,c),x(n.$$.fragment,c);for(let l=0;l<u.length;l+=1)x(s[l]);a=!0}},o(c){z(e.$$.fragment,c),z(n.$$.fragment,c),s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)z(s[l]);a=!1},d(c){T(e,c),c&&g(t),T(n,c),c&&g(r),ue(s,c),c&&g(i)}}}function Pn(o){let e,t,n;return t=new Ne({props:{$$slots:{default:[Rn]},$$scope:{ctx:o}}}),{c(){e=L("div"),I(t.$$.fragment)},l(r){e=C(r,"DIV",{});var i=R(e);O(t.$$.fragment,i),i.forEach(g)},m(r,i){k(r,e,i),M(t,e,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){n||(x(t.$$.fragment,r),n=!0)},o(r){z(t.$$.fragment,r),n=!1},d(r){r&&g(e),T(t)}}}function En(o){return[[{title:"V7",component:Dn},{title:"V6",component:Nt},{title:"V5",component:zt},{title:"V4",component:kt},{title:"V3",component:$t},{title:"V2",component:pt},{title:"V1",component:nt}]]}class In extends K{constructor(e){super(),U(this,e,En,Pn,X,{})}}function Mn(o){let e,t;return e=new In({}),{c(){I(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p:P,i(n){t||(x(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}class Gn extends K{constructor(e){super(),U(this,e,null,Mn,X,{})}}export{Gn as default};
