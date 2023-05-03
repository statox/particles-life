import{S as U,i as X,s as G,k as R,l as E,m as P,h as y,n as b,b as k,X as Ft,B as C,Y as Et,o as nt,w as M,x as O,y as T,f as w,t as B,z as F,Q as it,K as V,Z as rt,M as mt,q as N,a as K,r as W,c as H,I as Vt,D as S,J as ht,u as Nt,g as st,d as lt,L as dt,N as Wt,O as vt,P as Pt,e as at,v as gt}from"../../../chunks/index-8c90984f.js";import{T as Ot,a as zt,b as Lt,c as It}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as ct}from"../../../chunks/preload-helper-41c905a7.js";import{R as ft}from"../../../chunks/regl-89b00fbf.js";import{b as Kt}from"../../../chunks/paths-b4419565.js";function Ht(o){let t,n,e;return{c(){t=R("div"),this.h()},l(r){t=E(r,"DIV",{style:!0,class:!0}),P(t).forEach(y),this.h()},h(){b(t,"style",o[0]),b(t,"class","m-0")},m(r,i){k(r,t,i),n||(e=Ft(o[1].call(null,t)),n=!0)},p(r,[i]){i&1&&b(t,"style",r[0])},i:C,o:C,d(r){r&&y(t),n=!1,e()}}}function Ut(o,t){return t.forEach(([n,e])=>o[n]=e),o}function Xt(o,t,n){let{target:e=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,c;const s=Et(),d={ref(){s("ref",e)},instance(){s("instance",c)}};function l(f){return n(2,e=f),{destroy(){n(2,e=void 0)}}}return nt(async()=>{const f=await ct(()=>import("../../../chunks/p5.min-b96f42d1.js").then(v=>v.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:h}=f,u=Object.entries(f).filter(([v,g])=>g instanceof Function&&v[0]!=="_"&&v!=="default");a&&console.log("available p5 native classes",u),c=new h(v=>(v=Ut(v,u),a&&console.log("p5 instance",v),window._p5Instance=v,r(v)),e),d.ref(),d.instance()}),o.$$set=f=>{"target"in f&&n(2,e=f.target),"sketch"in f&&n(3,r=f.sketch),"parentDivStyle"in f&&n(0,i=f.parentDivStyle),"debug"in f&&n(4,a=f.debug)},[i,l,e,r,a]}class ut extends U{constructor(t){super(),X(this,t,Xt,Ht,G,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Gt=o=>{const t=[];for(let a=0;a<o.height;a++){t.push([]);for(let c=0;c<o.width;c++)t[t.length-1].push({A:1,B:0})}const n=5,e=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-e;a<i+e;a++)for(let c=r-n;c<r+n;c++)t[a][c].B=1;return t},Yt=(o,t)=>{const n={width:o.width/t[0].length,height:o.height/t.length};for(let e=0;e<t.length;e++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[e][r];o.fill(i*255,a*255,0),o.rect(r*n.width,e*n.height,n.width,n.height)}},qt=1,Zt=.5,yt=.055,Qt=.062,jt=o=>{const t=[];for(let n=0;n<o.length;n++){t.push([]);for(let e=0;e<o[0].length;e++){const{A:r,B:i}=o[n][e],a=_t(o,{x:e,y:n},"A"),c=_t(o,{x:e,y:n},"B"),s=r+(qt*a-r*i*i+yt*(1-r)),d=i+(Zt*c+r*i*i-(Qt+yt)*i);t[n].push({A:s,B:d})}}return t},_t=(o,t,n)=>{const e=Jt(o,t);let r=0;for(const i of e){const{coord:a,weight:c}=i;r+=o[a.y][a.x][n]*c}return r},Jt=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,i=o.length,a={coord:{x:n>0?n-1:r-1,y:e>0?e-1:i-1},weight:.05},c={coord:{x:n,y:e>0?e-1:i-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:i-1},weight:.05},d={coord:{x:n>0?n-1:r-1,y:e},weight:.2},l={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},h={coord:{x:n>0?n-1:r-1,y:e<i-1?e+1:0},weight:.05},p={coord:{x:n,y:e<i-1?e+1:0},weight:.2},u={coord:{x:n<r-1?n+1:0,y:e<i-1?e+1:0},weight:.05};return[a,c,s,d,l,f,h,p,u]};function te(o){let t,n;return t=new ut({props:{sketch:o[0]}}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){T(t,e,r),n=!0},p:C,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function ee(o){const t={width:200,height:200};let n;return[r=>{let i;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),i=Gt(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=jt(i);Yt(n,i)}}]}let ne=class extends U{constructor(t){super(),X(this,t,ee,te,G,{})}},D,Z;const oe=o=>{D=[],Z=[];for(let i=0;i<o.height;i++){D.push([]),Z.push([]);for(let a=0;a<o.width;a++)D[D.length-1].push({A:1,B:0}),Z[D.length-1].push({A:1,B:0})}const t=5,n=5,e=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-n;i<r+n;i++)for(let a=e-t;a<e+t;a++)D[i][a].B=1;return D},re=o=>{const t={width:o.width/D[0].length,height:o.height/D.length};for(let n=0;n<D.length;n++)for(let e=0;e<D[0].length;e++){const{A:r,B:i}=D[n][e];o.fill(r*255,i*255,0),o.rect(e*t.width,n*t.height,t.width,t.height)}},ae=1,ie=.5,bt=.055,se=.062,le=()=>{for(let t=0;t<D.length;t++)for(let n=0;n<D[0].length;n++){const{A:e,B:r}=D[t][n],i=$t(D,{x:n,y:t},"A"),a=$t(D,{x:n,y:t},"B"),c=e+(ae*i-e*r*r+bt*(1-e)),s=r+(ie*a+e*r*r-(se+bt)*r);Z[t][n]={A:c,B:s}}const o=D;return D=Z,Z=o,D},$t=(o,t,n)=>{const e=ce(o,t);let r=0;for(const i of e){const{coord:a,weight:c}=i;r+=o[a.y][a.x][n]*c}return r},ce=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,i=o.length,a={coord:{x:n>0?n-1:r-1,y:e>0?e-1:i-1},weight:.05},c={coord:{x:n,y:e>0?e-1:i-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:i-1},weight:.05},d={coord:{x:n>0?n-1:r-1,y:e},weight:.2},l={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},h={coord:{x:n>0?n-1:r-1,y:e<i-1?e+1:0},weight:.05},p={coord:{x:n,y:e<i-1?e+1:0},weight:.2},u={coord:{x:n<r-1?n+1:0,y:e<i-1?e+1:0},weight:.05};return[a,c,s,d,l,f,h,p,u]};function fe(o){let t,n;return t=new ut({props:{sketch:o[0]}}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){T(t,e,r),n=!0},p:C,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function ue(o){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),oe(t)},r.draw=()=>{for(let i=0;i<5;i++)le();re(n)}}]}let pe=class extends U{constructor(t){super(),X(this,t,ue,fe,G,{})}},A,Q;const me=o=>{A=[],Q=[];for(let i=0;i<o.height;i++){A.push([]),Q.push([]);for(let a=0;a<o.width;a++)A[A.length-1].push({A:1,B:0}),Q[A.length-1].push({A:1,B:0})}const t=5,n=5,e=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-n;i<r+n;i++)for(let a=e-t;a<e+t;a++)A[i][a].B=1;return A},de=o=>{const t={width:o.width/A[0].length,height:o.height/A.length};for(let n=0;n<A.length;n++)for(let e=0;e<A[0].length;e++){const{A:r,B:i}=A[n][e];o.fill(r*255,i*255,0),o.rect(e*t.width,n*t.height,t.width,t.height)}},he=1,ve=.5,wt=.055,ge=.062,ye=()=>{for(let t=0;t<A.length;t++)for(let n=0;n<A[0].length;n++){const{A:e,B:r}=A[t][n],i=St(A,{x:n,y:t},"A"),a=St(A,{x:n,y:t},"B"),c=e+(he*i-e*r*r+wt*(1-e)),s=r+(ve*a+e*r*r-(ge+wt)*r);Q[t][n]={A:c,B:s}}const o=A;return A=Q,Q=o,A},St=(o,t,n)=>{const e=_e(o,t);let r=0;for(const i of e){const{coord:a,weight:c}=i;r+=o[a.y][a.x][n]*c}return r},_e=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,i=o.length,a={coord:{x:n>0?n-1:r-1,y:e>0?e-1:i-1},weight:.05},c={coord:{x:n,y:e>0?e-1:i-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:i-1},weight:.05},d={coord:{x:n>0?n-1:r-1,y:e},weight:.2},l={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},h={coord:{x:n>0?n-1:r-1,y:e<i-1?e+1:0},weight:.05},p={coord:{x:n,y:e<i-1?e+1:0},weight:.2},u={coord:{x:n<r-1?n+1:0,y:e<i-1?e+1:0},weight:.05};return[a,c,s,d,l,f,h,p,u]};function be(o){let t,n;return t=new ut({props:{sketch:o[0]}}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){T(t,e,r),n=!0},p:C,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function $e(o){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),me(t)},r.draw=()=>{for(let i=0;i<5;i++)ye();de(n)}}]}let we=class extends U{constructor(t){super(),X(this,t,$e,be,G,{})}};function Se(o){let t;return{c(){t=R("canvas"),this.h()},l(n){t=E(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(t).forEach(y),this.h()},h(){b(t,"id","canvas"),b(t,"width",o[0].width),b(t,"height",o[0].height),b(t,"class","svelte-1b0ol19")},m(n,e){k(n,t,e)},p:C,i:C,o:C,d(n){n&&y(t)}}}function ke(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,e=n*.05,r=Array(n*n).fill(0).map((i,a)=>{const c=Math.floor(a/n),s=a%n;return Math.hypot(n/2-s,n/2-c)<e?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return nt(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ft({extensions:["OES_texture_float"],canvas:i}),c=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),s=a({frag:`
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${n})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${n})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${n})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${n})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${n})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${n})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${n})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${n})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${n})).rg * 0.05;

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
}`,framebuffer:l=>c[(l.tick+1)%2]}),d=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:l})=>c[l%2]},depth:{enable:!1},count:3});a.frame(()=>{d(()=>{a.draw(),s()})})}),[t]}let xe=class extends U{constructor(t){super(),X(this,t,ke,Se,G,{})}};const De=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),c=i%o;return Math.hypot(o/2-c,o/2-a)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Ae=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Be=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),i=e%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),tt=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Ce(o){let t;return{c(){t=R("canvas"),this.h()},l(n){t=E(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(t).forEach(y),this.h()},h(){b(t,"id","canvas"),b(t,"width",o[0].width),b(t,"height",o[0].height),b(t,"class","svelte-1b0ol19")},m(n,e){k(n,t,e)},p:C,i:C,o:C,d(n){n&&y(t)}}}function Re(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>d(),pause:!1},e={iteration:0},r={f:tt[n.presetParams].f,k:tt[n.presetParams].k};let i,a;const c=async()=>{const l=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new l.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const f=tt.reduce((u,v,g)=>(u[v.name]=g,u),{});i.add(n,"presetParams",f).onFinishChange(()=>{r.f=tt[n.presetParams].f,r.k=tt[n.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",h).onFinishChange(n.reset);const p=i.add(e,"iteration").listen();p.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space")return n.pause=!n.pause,l.preventDefault();if(l.code==="KeyR")return d(),l.preventDefault()})},d=()=>{const l=document.getElementById("canvas");if(!l)throw new Error("Canvas container not ready");a&&a.destroy(),a=ft({extensions:["OES_texture_float"],canvas:l}),e.iteration=0;const f=2**11;let h;n.initialConditions==="randomSpots"?h=Ae(f,.001):n.initialConditions==="middleCircleAndRandomSpots"?h=De(f,.005,.05):h=Be(f,.02);const p=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:f,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),u=a({frag:`
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
}`,framebuffer:g=>p[(g.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),v=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:g})=>p[g%2]},depth:{enable:!1},count:3});a.frame(()=>{v(()=>{a.draw(),!n.pause&&(e.iteration++,u({Da:1,Db:.5,...r}))})})};return nt(()=>{c(),s(),d()}),it(()=>{i.destroy(),a.destroy()}),[t]}let Ee=class extends U{constructor(t){super(),X(this,t,Re,Ce,G,{})}};const Pe=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),c=i%o;return Math.hypot(o/2-c,o/2-a)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Le=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ie=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),i=e%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),et=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Me=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Te=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,Fe=`precision mediump float;

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
`;function Ve(o){let t,n,e;return{c(){t=R("canvas"),this.h()},l(r){t=E(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(t).forEach(y),this.h()},h(){b(t,"id","canvas"),b(t,"width",o[0].width),b(t,"height",o[0].height),b(t,"class","svelte-1b0ol19")},m(r,i){k(r,t,i),n||(e=[V(t,"mousemove",o[1]),V(t,"mousedown",rt(o[2])),V(t,"mouseup",o[2]),V(t,"contextmenu",rt(Ne))],n=!0)},p:C,i:C,o:C,d(r){r&&y(t),n=!1,mt(e)}}}const pt=11,Ne=o=>o;function We(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>l(),pause:!1},e={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:et[n.presetParams].f,k:et[n.presetParams].k};let a,c;const s=async()=>{const p=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new p.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const u=et.reduce((x,I,m)=>(x[I.name]=m,x),{});a.add(n,"presetParams",u).onFinishChange(()=>{i.f=et[n.presetParams].f,i.k=et[n.presetParams].k});const v={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",v).onFinishChange(n.reset);const g=a.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",a.add(e,"penSize",1,pt,1).name("Pen size")},d=()=>{document.addEventListener("keydown",p=>{if(p.code==="Space")return n.pause=!n.pause,p.preventDefault();if(p.code==="KeyR")return l(),p.preventDefault()})},l=()=>{const p=document.getElementById("canvas");if(!p)throw new Error("Canvas container not ready");c&&c.destroy(),c=ft({extensions:["OES_texture_float"],canvas:p}),r.iteration=0;const u=2**pt;let v;n.initialConditions==="randomSpots"?v=Le(u,.001):n.initialConditions==="middleCircleAndRandomSpots"?v=Pe(u,.005,.05):v=Ie(u,.02);const g=Array(2).fill(0).map(()=>c.framebuffer({color:c.texture({radius:u,data:v,wrap:"repeat",type:"float"}),depthStencil:!1})),x=c({frag:Fe,framebuffer:m=>g[(m.tick+1)%2],uniforms:{Da:c.prop("Da"),Db:c.prop("Db"),f:c.prop("f"),k:c.prop("k"),radius:u,pauseSimulation:c.prop("pauseSimulation"),mousePosition:c.prop("mousePosition"),penRadius:c.prop("penRadius"),penIsActive:c.prop("penIsActive"),eraserIsActive:c.prop("eraserIsActive")}}),I=c({frag:Te,vert:Me,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:m})=>g[m%2]},depth:{enable:!1},count:3});c.frame(()=>{I(()=>{c.draw(),n.pause||r.iteration++,x({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[e.x,e.y],penRadius:1/2**(pt-e.penSize),penIsActive:e.pressedLeft,eraserIsActive:e.pressedRight,...i})})})},f=p=>{if(!p.currentTarget)throw new Error("No target for the onmousemove event");if(!p.currentTarget.width||!p.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:u,y:v}=p,{width:g,height:x}=p.currentTarget,I=u/g,m=(x-v)/x;e.x=I,e.y=m},h=p=>{if(![0,2].includes(p.button)||!["mouseup","mousedown"].includes(p.type))return;let u=p.type==="mousedown";p.button===0&&(e.pressedLeft=u),p.button===2&&(e.pressedRight=u)};return nt(()=>{s(),d(),l()}),it(()=>{a.destroy(),c.destroy()}),[t,f,h]}let Oe=class extends U{constructor(t){super(),X(this,t,We,Ve,G,{})}};const j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function kt(o,t,n){const e=o.slice();return e[16]=t[n],e}function xt(o){let t,n=o[16].type+"",e,r,i=o[16].name+"",a,c;return{c(){t=R("option"),e=N(n),r=N(" - "),a=N(i),c=K(),this.h()},l(s){t=E(s,"OPTION",{});var d=P(t);e=W(d,n),r=W(d," - "),a=W(d,i),c=H(d),d.forEach(y),this.h()},h(){t.__value=o[16],t.value=t.__value},m(s,d){k(s,t,d),S(t,e),S(t,r),S(t,a),S(t,c)},p:C,d(s){s&&y(t)}}}function Dt(o){let t,n;return t=new ut({props:{sketch:o[3]}}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){T(t,e,r),n=!0},p:C,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function ze(o){let t,n,e=o[1]?"Close":"F/K selection",r,i,a,c,s,d,l,f=j,h=[];for(let u=0;u<f.length;u+=1)h[u]=xt(kt(o,f,u));let p=o[1]&&Dt(o);return{c(){t=R("div"),n=R("button"),r=N(e),i=K(),a=R("select");for(let u=0;u<h.length;u+=1)h[u].c();c=K(),p&&p.c(),this.h()},l(u){t=E(u,"DIV",{id:!0,class:!0});var v=P(t);n=E(v,"BUTTON",{class:!0,id:!0});var g=P(n);r=W(g,e),g.forEach(y),i=H(v),a=E(v,"SELECT",{class:!0});var x=P(a);for(let I=0;I<h.length;I+=1)h[I].l(x);x.forEach(y),c=H(v),p&&p.l(v),v.forEach(y),this.h()},h(){b(n,"class","full-width svelte-x05r1k"),b(n,"id","toggleButton"),b(a,"class","full-width svelte-x05r1k"),o[0]===void 0&&Vt(()=>o[5].call(a)),b(t,"id","container"),b(t,"class","svelte-x05r1k")},m(u,v){k(u,t,v),S(t,n),S(n,r),S(t,i),S(t,a);for(let g=0;g<h.length;g+=1)h[g].m(a,null);ht(a,o[0]),S(t,c),p&&p.m(t,null),s=!0,d||(l=[V(n,"click",o[4]),V(a,"change",o[5]),V(a,"change",o[6])],d=!0)},p(u,[v]){if((!s||v&2)&&e!==(e=u[1]?"Close":"F/K selection")&&Nt(r,e),v&0){f=j;let g;for(g=0;g<f.length;g+=1){const x=kt(u,f,g);h[g]?h[g].p(x,v):(h[g]=xt(x),h[g].c(),h[g].m(a,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=f.length}v&1&&ht(a,u[0]),u[1]?p?(p.p(u,v),v&2&&w(p,1)):(p=Dt(u),p.c(),w(p,1),p.m(t,null)):p&&(st(),B(p,1,1,()=>{p=null}),lt())},i(u){s||(w(p),s=!0)},o(u){B(p),s=!1},d(u){u&&y(t),dt(h,u),p&&p.d(),d=!1,mt(l)}}}function Ke(o,t,n){const e=Et();let r=j[0],i=!0;const a=[.01,.09],c=[.01,.08],s=m=>{const{f:_,k:$}=m,L=u.map($,c[0],c[1],0,u.width),z=u.map(_,a[0],a[1],0,u.height);return{x:L,y:z}},d=m=>{const{x:_,y:$}=m,L=u.map($,0,u.height,a[0],a[1]),z=u.map(_,0,u.width,c[0],c[1]);return{f:L,k:z}},l=m=>{const _=m.mouseX,$=m.mouseY;if(_<0||$<0||_>m.width||$>m.height)return;const{f:L,k:z}=d({x:m.mouseX,y:m.mouseY});n(0,r={f:L,k:z,name:"custom",type:"manual"}),e("fkupdated",r)},f=m=>{m.fill("blue");for(const _ of j){const{x:$,y:L}=s({f:_.f,k:_.k});m.circle($,L,8),m.text(_.name,$-m.textWidth(_.name)/2,L-10)}},h=m=>{m.fill("red");const{x:_,y:$}=s(r);m.text("F",10,$>10?$-5:$+15),m.line(0,$,m.width,$),m.text("K",_<m.width-10?_+5:_-15,m.height-10),m.line(_,0,_,m.height),m.circle(_,$,10)},p=m=>{const{f:_,k:$}=r,L=`F: ${_.toFixed(4)}`,z=`K: ${$.toFixed(4)}`;m.fill("red"),m.text(L,m.width*.05,m.height/2),m.text(z,m.width*.05,m.height/2+m.textSize()+6)};let u;const v=m=>{let _;m.preload=()=>{_=m.loadImage(Kt+"/pearson-space.png")},m.setup=()=>{u=m,m.createCanvas(500,500),m.frameRate(25)},m.draw=()=>{m.background(255),m.tint(150,80),m.image(_,0,0,m.width,m.height),f(m),h(m),p(m),m.mouseIsPressed&&l(m)}},g=()=>{n(1,i=!i),i||u.remove()};it(()=>u.remove());function x(){r=Wt(this),n(0,r)}return[r,i,e,v,g,x,()=>e("fkupdated",r)]}class He extends U{constructor(t){super(),X(this,t,Ke,ze,G,{})}}const Ue=(o,t)=>o==="randomSpots"?Ye(t,.001):o==="middleCircleAndRandomSpots"?Xe(t,.005,.05):o==="empty"?Ge(t):qe(t,.02),Xe=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),c=i%o;return Math.hypot(o/2-c,o/2-a)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Ge=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Ye=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),qe=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),i=e%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),Y=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ze=`precision mediump float;

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
`,Qe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,je=`precision mediump float;

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
`,Je=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,tn=`precision mediump float;

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
`,nn=`precision mediump float;

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

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,rn=`// Colors scheme inspired by Robert Munafo described here:
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
`,q={},an=(o,t,n)=>{q.raw=o({frag:Qe,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),q.grayscale=o({frag:Je,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),q.blackwhite=o({frag:tn,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),q.whiteblack=o({frag:en,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),q.timebasedblue=o({frag:je,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),q.lerp=o({frag:nn,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),q.mrob=o({frag:on,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),q.redblue=o({frag:rn,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}})},sn=(o,t)=>{(q[o]||q.raw)({iteration:t.iteration})};let Mt;const ln=(o,t)=>{Mt=o({frag:`
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
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
        } else {
            gl_FragColor = color;
        }
    }`,vert:Y,attributes:{position:[[-1,-1],[-1,1],[1,-1],[1,-1],[-1,1],[1,1]]},uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),prevState:t},depth:{enable:!1},primitive:"triangles",count:6})},cn=(o,t)=>{Mt({mousePosition:[o.x,o.y],penRadius:1/2**(t-o.penSize)})};function fn(o){let t,n,e,r,i,a,c,s,d,l,f,h;return t=new He({}),t.$on("fkupdated",o[5]),{c(){M(t.$$.fragment),n=K(),e=R("div"),r=R("label"),i=N("World Size:"),a=K(),c=R("input"),s=K(),d=R("canvas"),this.h()},l(p){O(t.$$.fragment,p),n=H(p),e=E(p,"DIV",{});var u=P(e);r=E(u,"LABEL",{for:!0});var v=P(r);i=W(v,"World Size:"),v.forEach(y),a=H(u),c=E(u,"INPUT",{id:!0,type:!0,step:!0}),u.forEach(y),s=H(p),d=E(p,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),P(d).forEach(y),this.h()},h(){b(r,"for","worldSize"),b(c,"id","worldSize"),b(c,"type","number"),b(c,"step","1"),b(d,"id","canvas"),b(d,"width",o[1].width),b(d,"height",o[1].height),b(d,"class","svelte-fc0fp8")},m(p,u){T(t,p,u),k(p,n,u),k(p,e,u),S(e,r),S(r,i),S(e,a),S(e,c),vt(c,o[0]),k(p,s,u),k(p,d,u),l=!0,f||(h=[V(c,"input",o[6]),V(c,"change",o[4]),V(d,"mousemove",o[2]),V(d,"mousedown",rt(o[3])),V(d,"mouseup",o[3]),V(d,"contextmenu",rt(un))],f=!0)},p(p,[u]){u&1&&Pt(c.value)!==p[0]&&vt(c,p[0])},i(p){l||(w(t.$$.fragment,p),l=!0)},o(p){B(t.$$.fragment,p),l=!1},d(p){F(t,p),p&&y(n),p&&y(e),p&&y(s),p&&y(d),f=!1,mt(h)}}}const un=o=>o;function pn(o,t,n){const e={width:window.innerWidth-50,height:window.innerHeight-10};let r=8;const i={colors:"mrob",initialConditions:"randomSpots",reset:()=>p(),pause:!1},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3},c={iteration:0},s={f:j[0].f,k:j[0].k};let d,l;const f=async()=>{const m=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);d=new m.GUI,d.domElement.setAttribute("style","background-color: black"),d.add(i,"pause").name("Pause"),d.add(i,"reset").name("Reset simulation"),d.add(i,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue"]);const _={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};d.add(i,"initialConditions",_).onFinishChange(i.reset);const $=d.add(c,"iteration").listen();$.domElement.style.pointerEvents="none",d.add(a,"penSize",0,r).name("Pen size"),d.add(a,"penDensity",0,1).name("Pen density")},h=()=>{document.addEventListener("keydown",m=>{if(m.code==="Space")return i.pause=!i.pause,m.preventDefault();if(m.code==="KeyR")return p(),m.preventDefault()})},p=()=>{const m=document.getElementById("canvas");if(!m)throw new Error("Canvas container not ready");l&&l.destroy(),l=ft({extensions:["OES_texture_float"],canvas:m}),c.iteration=0;const _=2**r;let $=Ue(i.initialConditions,_);const L=Array(2).fill(0).map(()=>l.framebuffer({color:l.texture({radius:_,data:$,wrap:"repeat",type:"float"}),depthStencil:!1})),z=l.framebuffer({color:l.texture({radius:_,data:$,wrap:"repeat",type:"float"}),depthStencil:!1});an(l,L,z),ln(l,z);const ot=l({frag:Ze,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:J=>L[(J.tick+1)%2],uniforms:{prevState:J=>L[J.tick%2],Da:l.prop("Da"),Db:l.prop("Db"),f:l.prop("f"),k:l.prop("k"),radius:_,pauseSimulation:l.prop("pauseSimulation"),mousePosition:l.prop("mousePosition"),penRadius:l.prop("penRadius"),penDensity:l.prop("penDensity"),penIsActive:l.prop("penIsActive"),eraserIsActive:l.prop("eraserIsActive")}});l.frame(()=>{i.pause||c.iteration++,ot({Da:1,Db:.5,pauseSimulation:i.pause,mousePosition:[a.x,a.y],penRadius:1/2**(r-a.penSize),penDensity:a.penDensity,penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,...s}),sn(i.colors,c),cn(a,r)})},u=m=>{if(!m.currentTarget)throw new Error("No target for the onmousemove event");if(!m.currentTarget.width||!m.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var _=m.currentTarget.getBoundingClientRect();const $=m.clientX-_.left,L=m.clientY-_.top,{width:z,height:ot}=m.currentTarget,J=$/z,Tt=(ot-L)/ot;a.x=J,a.y=Tt},v=m=>{if(![0,2].includes(m.button)||!["mouseup","mousedown"].includes(m.type))return;let _=m.type==="mousedown";m.button===0&&(a.pressedLeft=_),m.button===2&&(a.pressedRight=_)},g=()=>{isNaN(r)||(r>11&&n(0,r=11),r<1&&n(0,r=1),d?.destroy(),l?.destroy(),f(),p())},x=m=>{s.f=m.detail.f,s.k=m.detail.k};nt(()=>{f(),h(),p()}),it(()=>{d.destroy(),l.destroy()});function I(){r=Pt(this.value),n(0,r)}return[r,e,u,v,g,x,I]}class mn extends U{constructor(t){super(),X(this,t,pn,fn,G,{})}}function At(o,t,n){const e=o.slice();return e[1]=t[n],e}function Bt(o,t,n){const e=o.slice();return e[1]=t[n],e}function dn(o){let t;return{c(){t=N("About")},l(n){t=W(n,"About")},m(n,e){k(n,t,e)},d(n){n&&y(t)}}}function hn(o){let t=o[1].title+"",n;return{c(){n=N(t)},l(e){n=W(e,t)},m(e,r){k(e,n,r)},p:C,d(e){e&&y(n)}}}function Ct(o){let t,n;return t=new It({props:{$$slots:{default:[hn]},$$scope:{ctx:o}}}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){T(t,e,r),n=!0},p(e,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function vn(o){let t,n,e,r;t=new It({props:{$$slots:{default:[dn]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let s=0;s<i.length;s+=1)a[s]=Ct(Bt(o,i,s));const c=s=>B(a[s],1,1,()=>{a[s]=null});return{c(){M(t.$$.fragment),n=K();for(let s=0;s<a.length;s+=1)a[s].c();e=at()},l(s){O(t.$$.fragment,s),n=H(s);for(let d=0;d<a.length;d+=1)a[d].l(s);e=at()},m(s,d){T(t,s,d),k(s,n,d);for(let l=0;l<a.length;l+=1)a[l].m(s,d);k(s,e,d),r=!0},p(s,d){const l={};if(d&64&&(l.$$scope={dirty:d,ctx:s}),t.$set(l),d&1){i=s[0];let f;for(f=0;f<i.length;f+=1){const h=Bt(s,i,f);a[f]?(a[f].p(h,d),w(a[f],1)):(a[f]=Ct(h),a[f].c(),w(a[f],1),a[f].m(e.parentNode,e))}for(st(),f=i.length;f<a.length;f+=1)c(f);lt()}},i(s){if(!r){w(t.$$.fragment,s);for(let d=0;d<i.length;d+=1)w(a[d]);r=!0}},o(s){B(t.$$.fragment,s),a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)B(a[d]);r=!1},d(s){F(t,s),s&&y(n),dt(a,s),s&&y(e)}}}function gn(o){let t,n,e,r,i,a,c,s,d,l,f,h;return{c(){t=R("p"),n=N("Experiments with "),e=R("a"),r=N("Reaction-diffusion systems"),i=K(),a=R("p"),c=N("The code is based on "),s=R("a"),d=N("this tutorial"),l=N(`
                but reimplemented in a glsl shader with
                `),f=R("a"),h=N("regl"),this.h()},l(p){t=E(p,"P",{});var u=P(t);n=W(u,"Experiments with "),e=E(u,"A",{href:!0,target:!0});var v=P(e);r=W(v,"Reaction-diffusion systems"),v.forEach(y),u.forEach(y),i=H(p),a=E(p,"P",{});var g=P(a);c=W(g,"The code is based on "),s=E(g,"A",{href:!0,target:!0});var x=P(s);d=W(x,"this tutorial"),x.forEach(y),l=W(g,`
                but reimplemented in a glsl shader with
                `),f=E(g,"A",{href:!0,target:!0});var I=P(f);h=W(I,"regl"),I.forEach(y),g.forEach(y),this.h()},h(){b(e,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),b(e,"target","none"),b(s,"href","https://karlsims.com/rd.html"),b(s,"target","none"),b(f,"href","https://github.com/regl-project/regl"),b(f,"target","none")},m(p,u){k(p,t,u),S(t,n),S(t,e),S(e,r),k(p,i,u),k(p,a,u),S(a,c),S(a,s),S(s,d),S(a,l),S(a,f),S(f,h)},p:C,d(p){p&&y(t),p&&y(i),p&&y(a)}}}function yn(o){let t,n,e;var r=o[1].component;function i(a){return{}}return r&&(t=gt(r,i())),{c(){t&&M(t.$$.fragment),n=K()},l(a){t&&O(t.$$.fragment,a),n=H(a)},m(a,c){t&&T(t,a,c),k(a,n,c),e=!0},p(a,c){if(r!==(r=a[1].component)){if(t){st();const s=t;B(s.$$.fragment,1,0,()=>{F(s,1)}),lt()}r?(t=gt(r,i()),M(t.$$.fragment),w(t.$$.fragment,1),T(t,n.parentNode,n)):t=null}},i(a){e||(t&&w(t.$$.fragment,a),e=!0)},o(a){t&&B(t.$$.fragment,a),e=!1},d(a){t&&F(t,a),a&&y(n)}}}function Rt(o){let t,n;return t=new Lt({props:{$$slots:{default:[yn]},$$scope:{ctx:o}}}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){T(t,e,r),n=!0},p(e,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function _n(o){let t,n,e,r,i,a;t=new zt({props:{$$slots:{default:[vn]},$$scope:{ctx:o}}}),e=new Lt({props:{$$slots:{default:[gn]},$$scope:{ctx:o}}});let c=o[0],s=[];for(let l=0;l<c.length;l+=1)s[l]=Rt(At(o,c,l));const d=l=>B(s[l],1,1,()=>{s[l]=null});return{c(){M(t.$$.fragment),n=K(),M(e.$$.fragment),r=K();for(let l=0;l<s.length;l+=1)s[l].c();i=at()},l(l){O(t.$$.fragment,l),n=H(l),O(e.$$.fragment,l),r=H(l);for(let f=0;f<s.length;f+=1)s[f].l(l);i=at()},m(l,f){T(t,l,f),k(l,n,f),T(e,l,f),k(l,r,f);for(let h=0;h<s.length;h+=1)s[h].m(l,f);k(l,i,f),a=!0},p(l,f){const h={};f&64&&(h.$$scope={dirty:f,ctx:l}),t.$set(h);const p={};if(f&64&&(p.$$scope={dirty:f,ctx:l}),e.$set(p),f&1){c=l[0];let u;for(u=0;u<c.length;u+=1){const v=At(l,c,u);s[u]?(s[u].p(v,f),w(s[u],1)):(s[u]=Rt(v),s[u].c(),w(s[u],1),s[u].m(i.parentNode,i))}for(st(),u=c.length;u<s.length;u+=1)d(u);lt()}},i(l){if(!a){w(t.$$.fragment,l),w(e.$$.fragment,l);for(let f=0;f<c.length;f+=1)w(s[f]);a=!0}},o(l){B(t.$$.fragment,l),B(e.$$.fragment,l),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)B(s[f]);a=!1},d(l){F(t,l),l&&y(n),F(e,l),l&&y(r),dt(s,l),l&&y(i)}}}function bn(o){let t,n,e;return n=new Ot({props:{$$slots:{default:[_n]},$$scope:{ctx:o}}}),{c(){t=R("div"),M(n.$$.fragment)},l(r){t=E(r,"DIV",{});var i=P(t);O(n.$$.fragment,i),i.forEach(y)},m(r,i){k(r,t,i),T(n,t,null),e=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),n.$set(a)},i(r){e||(w(n.$$.fragment,r),e=!0)},o(r){B(n.$$.fragment,r),e=!1},d(r){r&&y(t),F(n)}}}function $n(o){return[[{title:"V7",component:mn},{title:"V6",component:Oe},{title:"V5",component:Ee},{title:"V4",component:xe},{title:"V3",component:we},{title:"V2",component:pe},{title:"V1",component:ne}]]}class wn extends U{constructor(t){super(),X(this,t,$n,bn,G,{})}}function Sn(o){let t,n;return t=new wn({}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){T(t,e,r),n=!0},p:C,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}class Mn extends U{constructor(t){super(),X(this,t,null,Sn,G,{})}}export{Mn as default};
