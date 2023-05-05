import{S as U,i as Y,s as H,k as B,l as C,m as R,h,n as _,b as A,X as Tt,B as z,Y as Bt,o as et,w as T,x as N,y as M,f as $,t as L,z as F,Q as ot,K as P,Z as tt,M as ft,q as V,a as W,r as O,c as K,D as b,u as Mt,g as rt,d as at,I as Ft,J as pt,L as ut,N as Vt,O as mt,P as Ct,_ as Ot,e as nt,v as dt}from"../../../chunks/index-2107b80f.js";import{T as Nt,a as Wt,b as Lt,c as Rt}from"../../../chunks/TabPanel-dec752e3.js";import{_ as it}from"../../../chunks/preload-helper-41c905a7.js";import{R as st}from"../../../chunks/regl-89b00fbf.js";import{b as Kt}from"../../../chunks/paths-b4419565.js";function Ut(o){let t,e,n;return{c(){t=B("div"),this.h()},l(r){t=C(r,"DIV",{style:!0,class:!0}),R(t).forEach(h),this.h()},h(){_(t,"style",o[0]),_(t,"class","m-0")},m(r,i){A(r,t,i),e||(n=Tt(o[1].call(null,t)),e=!0)},p(r,[i]){i&1&&_(t,"style",r[0])},i:z,o:z,d(r){r&&h(t),e=!1,n()}}}function Yt(o,t){return t.forEach(([e,n])=>o[e]=n),o}function Ht(o,t,e){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,u;const s=Bt(),f={ref(){s("ref",n)},instance(){s("instance",u)}};function c(l){return e(2,n=l),{destroy(){e(2,n=void 0)}}}return et(async()=>{const l=await it(()=>import("../../../chunks/p5.min-b96f42d1.js").then(g=>g.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:d}=l,m=Object.entries(l).filter(([g,y])=>y instanceof Function&&g[0]!=="_"&&g!=="default");a&&console.log("available p5 native classes",m),u=new d(g=>(g=Yt(g,m),a&&console.log("p5 instance",g),window._p5Instance=g,r(g)),n),f.ref(),f.instance()}),o.$$set=l=>{"target"in l&&e(2,n=l.target),"sketch"in l&&e(3,r=l.sketch),"parentDivStyle"in l&&e(0,i=l.parentDivStyle),"debug"in l&&e(4,a=l.debug)},[i,c,n,r,a]}class lt extends U{constructor(t){super(),Y(this,t,Ht,Ut,H,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Xt=o=>{const t=[];for(let a=0;a<o.height;a++){t.push([]);for(let u=0;u<o.width;u++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let u=r-e;u<r+e;u++)t[a][u].B=1;return t},Gt=(o,t)=>{const e={width:o.width/t[0].length,height:o.height/t.length};for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[n][r];o.fill(i*255,a*255,0),o.rect(r*e.width,n*e.height,e.width,e.height)}},qt=1,Zt=.5,vt=.055,jt=.062,Qt=o=>{const t=[];for(let e=0;e<o.length;e++){t.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[e][n],a=ht(o,{x:n,y:e},"A"),u=ht(o,{x:n,y:e},"B"),s=r+(qt*a-r*i*i+vt*(1-r)),f=i+(Zt*u+r*i*i-(jt+vt)*i);t[e].push({A:s,B:f})}}return t},ht=(o,t,e)=>{const n=Jt(o,t);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][e]*u}return r},Jt=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e,y:n>0?n-1:i-1},weight:.2},s={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},f={coord:{x:e>0?e-1:r-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<r-1?e+1:0,y:n},weight:.2},d={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},v={coord:{x:e,y:n<i-1?n+1:0},weight:.2},m={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,s,f,c,l,d,v,m]};function te(o){let t,e;return t=new lt({props:{sketch:o[0]}}),{c(){T(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:z,i(n){e||($(t.$$.fragment,n),e=!0)},o(n){L(t.$$.fragment,n),e=!1},d(n){F(t,n)}}}function ee(o){const t={width:200,height:200};let e;return[r=>{let i;r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),i=Xt(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Qt(i);Gt(e,i)}}]}let ne=class extends U{constructor(t){super(),Y(this,t,ee,te,H,{})}},D,q;const oe=o=>{D=[],q=[];for(let i=0;i<o.height;i++){D.push([]),q.push([]);for(let a=0;a<o.width;a++)D[D.length-1].push({A:1,B:0}),q[D.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)D[i][a].B=1;return D},re=o=>{const t={width:o.width/D[0].length,height:o.height/D.length};for(let e=0;e<D.length;e++)for(let n=0;n<D[0].length;n++){const{A:r,B:i}=D[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},ae=1,ie=.5,gt=.055,se=.062,le=()=>{for(let t=0;t<D.length;t++)for(let e=0;e<D[0].length;e++){const{A:n,B:r}=D[t][e],i=xt(D,{x:e,y:t},"A"),a=xt(D,{x:e,y:t},"B"),u=n+(ae*i-n*r*r+gt*(1-n)),s=r+(ie*a+n*r*r-(se+gt)*r);q[t][e]={A:u,B:s}}const o=D;return D=q,q=o,D},xt=(o,t,e)=>{const n=ce(o,t);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][e]*u}return r},ce=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e,y:n>0?n-1:i-1},weight:.2},s={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},f={coord:{x:e>0?e-1:r-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<r-1?e+1:0,y:n},weight:.2},d={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},v={coord:{x:e,y:n<i-1?n+1:0},weight:.2},m={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,s,f,c,l,d,v,m]};function fe(o){let t,e;return t=new lt({props:{sketch:o[0]}}),{c(){T(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:z,i(n){e||($(t.$$.fragment,n),e=!0)},o(n){L(t.$$.fragment,n),e=!1},d(n){F(t,n)}}}function ue(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),oe(t)},r.draw=()=>{for(let i=0;i<5;i++)le();re(e)}}]}let pe=class extends U{constructor(t){super(),Y(this,t,ue,fe,H,{})}},E,Z;const me=o=>{E=[],Z=[];for(let i=0;i<o.height;i++){E.push([]),Z.push([]);for(let a=0;a<o.width;a++)E[E.length-1].push({A:1,B:0}),Z[E.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)E[i][a].B=1;return E},de=o=>{const t={width:o.width/E[0].length,height:o.height/E.length};for(let e=0;e<E.length;e++)for(let n=0;n<E[0].length;n++){const{A:r,B:i}=E[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},ve=1,he=.5,yt=.055,ge=.062,xe=()=>{for(let t=0;t<E.length;t++)for(let e=0;e<E[0].length;e++){const{A:n,B:r}=E[t][e],i=_t(E,{x:e,y:t},"A"),a=_t(E,{x:e,y:t},"B"),u=n+(ve*i-n*r*r+yt*(1-n)),s=r+(he*a+n*r*r-(ge+yt)*r);Z[t][e]={A:u,B:s}}const o=E;return E=Z,Z=o,E},_t=(o,t,e)=>{const n=ye(o,t);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][e]*u}return r},ye=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e,y:n>0?n-1:i-1},weight:.2},s={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},f={coord:{x:e>0?e-1:r-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<r-1?e+1:0,y:n},weight:.2},d={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},v={coord:{x:e,y:n<i-1?n+1:0},weight:.2},m={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,s,f,c,l,d,v,m]};function _e(o){let t,e;return t=new lt({props:{sketch:o[0]}}),{c(){T(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:z,i(n){e||($(t.$$.fragment,n),e=!0)},o(n){L(t.$$.fragment,n),e=!1},d(n){F(t,n)}}}function Se(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),me(t)},r.draw=()=>{for(let i=0;i<5;i++)xe();de(e)}}]}let be=class extends U{constructor(t){super(),Y(this,t,Se,_e,H,{})}};function we(o){let t;return{c(){t=B("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(h),this.h()},h(){_(t,"id","canvas"),_(t,"width",o[0].width),_(t,"height",o[0].height),_(t,"class","svelte-1b0ol19")},m(e,n){A(e,t,n)},p:z,i:z,o:z,d(e){e&&h(t)}}}function $e(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,r=Array(e*e).fill(0).map((i,a)=>{const u=Math.floor(a/e),s=a%e;return Math.hypot(e/2-s,e/2-u)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return et(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=st({extensions:["OES_texture_float"],canvas:i}),u=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),s=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>u[c%2]},depth:{enable:!1},count:3});a.frame(()=>{f(()=>{a.draw(),s()})})}),[t]}let Ae=class extends U{constructor(t){super(),Y(this,t,$e,we,H,{})}};const ke=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},De=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ee=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),Q=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Be(o){let t;return{c(){t=B("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(h),this.h()},h(){_(t,"id","canvas"),_(t,"width",o[0].width),_(t,"height",o[0].height),_(t,"class","svelte-1b0ol19")},m(e,n){A(e,t,n)},p:z,i:z,o:z,d(e){e&&h(t)}}}function Ce(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={iteration:0},r={f:Q[e.presetParams].f,k:Q[e.presetParams].k};let i,a;const u=async()=>{const c=await it(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new c.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(e,"pause").name("Pause"),i.add(e,"reset").name("Reset simulation");const l=Q.reduce((m,g,y)=>(m[g.name]=y,m),{});i.add(e,"presetParams",l).onFinishChange(()=>{r.f=Q[e.presetParams].f,r.k=Q[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(e,"initialConditions",d).onFinishChange(e.reset);const v=i.add(n,"iteration").listen();v.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return e.pause=!e.pause,c.preventDefault();if(c.code==="KeyR")return f(),c.preventDefault()})},f=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");a&&a.destroy(),a=st({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const l=2**11;let d;e.initialConditions==="randomSpots"?d=De(l,.001):e.initialConditions==="middleCircleAndRandomSpots"?d=ke(l,.005,.05):d=Ee(l,.02);const v=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:l,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),m=a({frag:`
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
}`,framebuffer:y=>v[(y.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),g=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:y})=>v[y%2]},depth:{enable:!1},count:3});a.frame(()=>{g(()=>{a.draw(),!e.pause&&(n.iteration++,m({Da:1,Db:.5,...r}))})})};return et(()=>{u(),s(),f()}),ot(()=>{i.destroy(),a.destroy()}),[t]}let Le=class extends U{constructor(t){super(),Y(this,t,Ce,Be,H,{})}};const Re=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ze=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Pe=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),J=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Ie=`precision mediump float;
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
`,Me=`precision mediump float;

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
`;function Fe(o){let t,e,n;return{c(){t=B("canvas"),this.h()},l(r){t=C(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(h),this.h()},h(){_(t,"id","canvas"),_(t,"width",o[0].width),_(t,"height",o[0].height),_(t,"class","svelte-1b0ol19")},m(r,i){A(r,t,i),e||(n=[P(t,"mousemove",o[1]),P(t,"mousedown",tt(o[2])),P(t,"mouseup",o[2]),P(t,"contextmenu",tt(Ve))],e=!0)},p:z,i:z,o:z,d(r){r&&h(t),e=!1,ft(n)}}}const ct=11,Ve=o=>o;function Oe(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>c(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:J[e.presetParams].f,k:J[e.presetParams].k};let a,u;const s=async()=>{const v=await it(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new v.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const m=J.reduce((S,x,p)=>(S[x.name]=p,S),{});a.add(e,"presetParams",m).onFinishChange(()=>{i.f=J[e.presetParams].f,i.k=J[e.presetParams].k});const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",g).onFinishChange(e.reset);const y=a.add(r,"iteration").listen();y.domElement.style.pointerEvents="none",a.add(n,"penSize",1,ct,1).name("Pen size")},f=()=>{document.addEventListener("keydown",v=>{if(v.code==="Space")return e.pause=!e.pause,v.preventDefault();if(v.code==="KeyR")return c(),v.preventDefault()})},c=()=>{const v=document.getElementById("canvas");if(!v)throw new Error("Canvas container not ready");u&&u.destroy(),u=st({extensions:["OES_texture_float"],canvas:v}),r.iteration=0;const m=2**ct;let g;e.initialConditions==="randomSpots"?g=ze(m,.001):e.initialConditions==="middleCircleAndRandomSpots"?g=Re(m,.005,.05):g=Pe(m,.02);const y=Array(2).fill(0).map(()=>u.framebuffer({color:u.texture({radius:m,data:g,wrap:"repeat",type:"float"}),depthStencil:!1})),S=u({frag:Me,framebuffer:p=>y[(p.tick+1)%2],uniforms:{Da:u.prop("Da"),Db:u.prop("Db"),f:u.prop("f"),k:u.prop("k"),radius:m,pauseSimulation:u.prop("pauseSimulation"),mousePosition:u.prop("mousePosition"),penRadius:u.prop("penRadius"),penIsActive:u.prop("penIsActive"),eraserIsActive:u.prop("eraserIsActive")}}),x=u({frag:Te,vert:Ie,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:p})=>y[p%2]},depth:{enable:!1},count:3});u.frame(()=>{x(()=>{u.draw(),e.pause||r.iteration++,S({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(ct-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},l=v=>{if(!v.currentTarget)throw new Error("No target for the onmousemove event");if(!v.currentTarget.width||!v.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:m,y:g}=v,{width:y,height:S}=v.currentTarget,x=m/y,p=(S-g)/S;n.x=x,n.y=p},d=v=>{if(![0,2].includes(v.button)||!["mouseup","mousedown"].includes(v.type))return;let m=v.type==="mousedown";v.button===0&&(n.pressedLeft=m),v.button===2&&(n.pressedRight=m)};return et(()=>{s(),f(),c()}),ot(()=>{a.destroy(),u.destroy()}),[t,l,d]}let Ne=class extends U{constructor(t){super(),Y(this,t,Oe,Fe,H,{})}};const j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Test 1",type:"Unknown",f:.0353,k:.0614},{name:"Never full population",type:"Unknown",f:.0201,k:.0602},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function St(o,t,e){const n=o.slice();return n[16]=t[e],n}function bt(o){let t,e,n,r,i,a,u=j,s=[];for(let f=0;f<u.length;f+=1)s[f]=wt(St(o,u,f));return n=new lt({props:{sketch:o[3]}}),{c(){t=B("select");for(let f=0;f<s.length;f+=1)s[f].c();e=W(),T(n.$$.fragment),this.h()},l(f){t=C(f,"SELECT",{class:!0});var c=R(t);for(let l=0;l<s.length;l+=1)s[l].l(c);c.forEach(h),e=K(f),N(n.$$.fragment,f),this.h()},h(){_(t,"class","full-width svelte-x05r1k"),o[0]===void 0&&Ft(()=>o[5].call(t))},m(f,c){A(f,t,c);for(let l=0;l<s.length;l+=1)s[l].m(t,null);pt(t,o[0]),A(f,e,c),M(n,f,c),r=!0,i||(a=[P(t,"change",o[5]),P(t,"change",o[6])],i=!0)},p(f,c){if(c&0){u=j;let l;for(l=0;l<u.length;l+=1){const d=St(f,u,l);s[l]?s[l].p(d,c):(s[l]=wt(d),s[l].c(),s[l].m(t,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=u.length}c&1&&pt(t,f[0])},i(f){r||($(n.$$.fragment,f),r=!0)},o(f){L(n.$$.fragment,f),r=!1},d(f){f&&h(t),ut(s,f),f&&h(e),F(n,f),i=!1,ft(a)}}}function wt(o){let t,e=o[16].type+"",n,r,i=o[16].name+"",a,u;return{c(){t=B("option"),n=V(e),r=V(" - "),a=V(i),u=W(),this.h()},l(s){t=C(s,"OPTION",{});var f=R(t);n=O(f,e),r=O(f," - "),a=O(f,i),u=K(f),f.forEach(h),this.h()},h(){t.__value=o[16],t.value=t.__value},m(s,f){A(s,t,f),b(t,n),b(t,r),b(t,a),b(t,u)},p:z,d(s){s&&h(t)}}}function We(o){let t,e,n=o[1]?"Close":"F/K selection",r,i,a,u,s,f=o[1]&&bt(o);return{c(){t=B("div"),e=B("button"),r=V(n),i=W(),f&&f.c(),this.h()},l(c){t=C(c,"DIV",{id:!0,class:!0});var l=R(t);e=C(l,"BUTTON",{class:!0,id:!0});var d=R(e);r=O(d,n),d.forEach(h),i=K(l),f&&f.l(l),l.forEach(h),this.h()},h(){_(e,"class","full-width svelte-x05r1k"),_(e,"id","toggleButton"),_(t,"id","container"),_(t,"class","svelte-x05r1k")},m(c,l){A(c,t,l),b(t,e),b(e,r),b(t,i),f&&f.m(t,null),a=!0,u||(s=P(e,"click",o[4]),u=!0)},p(c,[l]){(!a||l&2)&&n!==(n=c[1]?"Close":"F/K selection")&&Mt(r,n),c[1]?f?(f.p(c,l),l&2&&$(f,1)):(f=bt(c),f.c(),$(f,1),f.m(t,null)):f&&(rt(),L(f,1,1,()=>{f=null}),at())},i(c){a||($(f),a=!0)},o(c){L(f),a=!1},d(c){c&&h(t),f&&f.d(),u=!1,s()}}}function Ke(o,t,e){const n=Bt();let r=j[0],i=!1;const a=[.01,.09],u=[.01,.08],s=p=>{const{f:w,k}=p,X=m.map(k,u[0],u[1],0,m.width),G=m.map(w,a[0],a[1],0,m.height);return{x:X,y:G}},f=p=>{const{x:w,y:k}=p,X=m.map(k,0,m.height,a[0],a[1]),G=m.map(w,0,m.width,u[0],u[1]);return{f:X,k:G}},c=p=>{const w=p.mouseX,k=p.mouseY;if(w<0||k<0||w>p.width||k>p.height)return;const{f:X,k:G}=f({x:p.mouseX,y:p.mouseY});e(0,r={f:X,k:G,name:"custom",type:"manual"}),n("fkupdated",r)},l=p=>{p.fill("blue");for(const w of j){const{x:k,y:X}=s({f:w.f,k:w.k});p.circle(k,X,8),p.text(w.name,k-p.textWidth(w.name)/2,X-10)}},d=p=>{p.fill("red");const{x:w,y:k}=s(r);p.text("F",10,k>10?k-5:k+15),p.line(0,k,p.width,k),p.text("K",w<p.width-10?w+5:w-15,p.height-10),p.line(w,0,w,p.height),p.circle(w,k,10)},v=p=>{const{f:w,k}=r,X=`F: ${w.toFixed(4)}`,G=`K: ${k.toFixed(4)}`;p.fill("red"),p.text(X,p.width*.05,p.height/2),p.text(G,p.width*.05,p.height/2+p.textSize()+6)};let m;const g=p=>{m=p;let w;p.preload=()=>{w=p.loadImage(Kt+"/pearson-space.png")},p.setup=()=>{p.createCanvas(300,300),p.frameRate(25)},p.draw=()=>{p.background(255),p.tint(150,80),p.image(w,0,0,p.width,p.height),l(p),d(p),v(p),p.mouseIsPressed&&c(p)}},y=()=>{e(1,i=!i),i||m.remove()};ot(()=>m?.remove());function S(){r=Vt(this),e(0,r)}return[r,i,n,g,y,S,()=>n("fkupdated",r)]}class Ue extends U{constructor(t){super(),Y(this,t,Ke,We,H,{})}}const Ye=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,He=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Xe=`precision mediump float;

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
`,Ge=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,qe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Ze=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,je=`precision mediump float;

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
`,Qe=`// Colors scheme inspired by Robert Munafo described here:
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
`,Je=`// Colors scheme inspired by Robert Munafo described here:
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
`,tn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    if (A > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else if (A > 0.4) {
        gl_FragColor = vec4(1.0 - A, 0.0, 0.0, 1.0);
    } else { 
        gl_FragColor = vec4(0.0, A, 0.0, 1.0);
    }
}
`,en=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 blue = vec4(0.0, 0.0, 1.0, 1.0);
    vec4 color = mix(blue, red, A);

    vec4 softRed = vec4(0.8588, 0.2824, 0.3765, 1.0);
    vec4 softBlue = vec4(0.2824, 0.3882, 0.8588, 1.0);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.6);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.4);
    vec4 softColor = mix(softBlue, softRed, 1.0-A);


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(color);
    }

}
`,nn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/MATLAB_cool.frag
float colormap_red(float x) {
    return (1.0 + 1.0 / 63.0) * x - 1.0 / 63.0;
}

float colormap_green(float x) {
    return -(1.0 + 1.0 / 63.0) * x + (1.0 + 1.0 / 63.0);
}

vec4 colormap(float x) {
    float r = clamp(colormap_red(x), 0.0, 1.0);
    float g = clamp(colormap_green(x), 0.0, 1.0);
    float b = 1.0;
    return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,on=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdBu.frag
float colormap_red(float x) {
	if (x < 0.09771832105856419) {
		return 7.60263247863246E+02 * x + 1.02931623931624E+02;
	} else if (x < 0.3017162107441106) {
		return (-2.54380938558548E+02 * x + 4.29911571188803E+02) * x + 1.37642085716717E+02;
	} else if (x < 0.4014205790737471) {
		return 8.67103448276151E+01 * x + 2.18034482758611E+02;
	} else if (x < 0.5019932233215039) {
		return -6.15461538461498E+01 * x + 2.77547692307680E+02;
	} else if (x < 0.5969483882550937) {
		return -3.77588522588624E+02 * x + 4.36198819698878E+02;
	} else if (x < 0.8046060096654594) {
		return (-6.51345897546620E+02 * x + 2.09780968434337E+02) * x + 3.17674951640855E+02;
	} else {
		return -3.08431855203590E+02 * x + 3.12956742081421E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09881640500975222) {
		return 2.41408547008547E+02 * x + 3.50427350427364E-01;
	} else if (x < 0.5000816285610199) {
		return ((((1.98531871433258E+04 * x - 2.64108262469187E+04) * x + 1.10991785969817E+04) * x - 1.92958444776211E+03) * x + 8.39569642882186E+02) * x - 4.82944517518776E+01;
	} else if (x < 0.8922355473041534) {
		return (((6.16712686949223E+03 * x - 1.59084026055125E+04) * x + 1.45172137257997E+04) * x - 5.80944127411621E+03) * x + 1.12477959061948E+03;
	} else {
		return -5.28313797313699E+02 * x + 5.78459299959206E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.1033699568661857) {
		return 1.30256410256410E+02 * x + 3.08518518518519E+01;
	} else if (x < 0.2037526071071625) {
		return 3.38458128078815E+02 * x + 9.33004926108412E+00;
	} else if (x < 0.2973267734050751) {
		return (-1.06345054944861E+02 * x + 5.93327252747168E+02) * x - 3.81852747252658E+01;
	} else if (x < 0.4029109179973602) {
		return 6.68959706959723E+02 * x - 7.00740740740798E+01;
	} else if (x < 0.5006715489526758) {
		return 4.87348695652202E+02 * x + 3.09898550724286E+00;
	} else if (x < 0.6004396902588283) {
		return -6.85799999999829E+01 * x + 2.81436666666663E+02;
	} else if (x < 0.702576607465744) {
		return -1.81331701891043E+02 * x + 3.49137263626287E+02;
	} else if (x < 0.9010407030582428) {
		return (2.06124143164576E+02 * x - 5.78166906665595E+02) * x + 5.26198653917172E+02;
	} else {
		return -7.36990769230737E+02 * x + 8.36652307692262E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,rn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,I={},an=o=>{const t={vert:Ye,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:o.prop("outputBuffer"),uniforms:{iteration:o.prop("iteration"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan"),prevState:o.prop("inputBuffer")}};I.raw=o({frag:He,...t}),I.A_gradiant1=o({frag:tn,...t}),I.A_gradiant2=o({frag:en,...t}),I.A_MATLAB_cool=o({frag:nn,...t}),I.A_IDL_CB_RdBu=o({frag:on,...t}),I.A_IDL_CB_RdYiBu=o({frag:rn,...t}),I.grayscale=o({frag:Ge,...t}),I.blackwhite=o({frag:qe,...t}),I.whiteblack=o({frag:Ze,...t}),I.timebasedblue=o({frag:Xe,...t}),I.lerp=o({frag:je,...t}),I.mrob=o({frag:Qe,...t}),I.redblue=o({frag:Je,...t})},sn=o=>{const{colorMode:t,inputBuffer:e,iteration:n,outputBuffer:r,zoomState:i}=o;(I[t]||I.raw)({inputBuffer:e,iteration:n,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},ln=`precision mediump float;

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
`,cn=`precision mediump float;

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
`;let zt;const fn=(o,t)=>{zt=o({frag:ln,vert:cn,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:o.prop("outputBuffer"),uniforms:{prevState:o.prop("inputBuffer"),Da:1,Db:.5,f:o.prop("f"),k:o.prop("k"),radius:t,pauseSimulation:o.prop("pauseSimulation"),mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),penDensity:o.prop("penDensity"),penIsActive:o.prop("penIsActive"),eraserIsActive:o.prop("eraserIsActive"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan")}})},un=o=>{const{inputBuffer:t,outputBuffer:e,pauseSimulation:n,mouseState:r,simulationParameters:i,worldSize:a}=o;zt({inputBuffer:t,outputBuffer:e,pauseSimulation:n,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(a-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...i})},pn=(o,t)=>o==="randomSpots"?vn(t,.001):o==="middleCircleAndRandomSpots"?mn(t,.005,.05):o==="empty"?dn(t):hn(t,.02),mn=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},dn=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),vn=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),hn=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),gn=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,xn=`precision highp float;

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
`;let Pt;const yn=o=>{Pt=o({vert:gn,frag:xn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:o.prop("outputBuffer"),uniforms:{prevState:o.prop("inputBuffer"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan")}})},_n=o=>{const{inputBuffer:t,outputBuffer:e,zoomState:n}=o;Pt({inputBuffer:t,outputBuffer:e,zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},Sn=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,bn=`precision mediump float;

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
`;let It;const wn=o=>{It=o({frag:bn,vert:Sn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:o.prop("outputBuffer"),uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan"),prevState:o.prop("inputBuffer")}})},$n=o=>{const{inputBuffer:t,mouseState:e,outputBuffer:n,worldSize:r}=o;It({inputBuffer:t,outputBuffer:n,mousePosition:[e.x,e.y],penRadius:1/2**(r-e.penSize),zoomLevel:e.zoomLevel,pan:[e.panX,e.panY]})},An=o=>{const{controls:t,info:e,mouseState:n,simulationParameters:r}=o,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=st({extensions:["OES_texture_float"],canvas:i});e.iteration=0;const u=2**e.worldSize,s=pn(t.initialConditions,u),f=()=>a.framebuffer({color:a.texture({radius:u,data:s,wrap:"repeat",type:"float"}),depthStencil:!1}),c=Array(2).fill(0).map(f),l=Array(2).fill(0).map(f);return fn(a,u),an(a),yn(a),wn(a),a.frame(()=>{t.pause||e.iteration++;let d=c[(e.iteration+1)%2];for(let v=0;v<t.speed;v++){e.iteration++;const m=c[e.iteration%2];d=c[(e.iteration+1)%2],un({inputBuffer:m,outputBuffer:d,worldSize:e.worldSize,pauseSimulation:t.pause,mouseState:n,simulationParameters:r})}kn({inputTexture:d,graphicsTextures:l,controls:t,info:e,mouseState:n})}),a},kn=o=>{const{inputTexture:t,graphicsTextures:e,controls:n,info:r,mouseState:i}=o;let a=0;a++;const u=t,s=e[a%2];if(sn({colorMode:n.colors,inputBuffer:u,iteration:r.iteration,outputBuffer:s,zoomState:i}),n.grid){a++;const l=e[(a+1)%2],d=e[a%2];_n({inputBuffer:l,outputBuffer:d,zoomState:i})}a++;const f=e[(a+1)%2],c=null;$n({mouseState:i,worldSize:r.worldSize,inputBuffer:f,outputBuffer:c})},$t=o=>{if(!o.currentTarget)throw new Error("Event has no currentTarget");const t=o.currentTarget,e=t.getBoundingClientRect(),n=o.clientX-e.left,r=o.clientY-e.top,{width:i,height:a}=t,u=n/i,s=(a-r)/a;return{x:u,y:s}};const{window:Dn}=Ot;function En(o){let t,e,n,r,i,a,u,s,f,c,l,d,v,m,g;return e=new Ue({}),e.$on("fkupdated",o[7]),{c(){t=B("main"),T(e.$$.fragment),n=W(),r=B("div"),i=W(),a=B("div"),u=B("label"),s=V("World Size:"),f=W(),c=B("input"),l=W(),d=B("canvas"),this.h()},l(y){t=C(y,"MAIN",{});var S=R(t);N(e.$$.fragment,S),n=K(S),r=C(S,"DIV",{id:!0,class:!0}),R(r).forEach(h),i=K(S),a=C(S,"DIV",{});var x=R(a);u=C(x,"LABEL",{for:!0});var p=R(u);s=O(p,"World Size:"),p.forEach(h),f=K(x),c=C(x,"INPUT",{id:!0,type:!0,step:!0}),x.forEach(h),l=K(S),d=C(S,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(d).forEach(h),S.forEach(h),this.h()},h(){_(r,"id","datgui-container"),_(r,"class","svelte-18zf5fr"),_(u,"for","worldSize"),_(c,"id","worldSize"),_(c,"type","number"),_(c,"step","1"),_(d,"id","canvas"),_(d,"width",o[1].width),_(d,"height",o[1].height),_(d,"class","svelte-18zf5fr")},m(y,S){A(y,t,S),M(e,t,null),b(t,n),b(t,r),b(t,i),b(t,a),b(a,u),b(u,s),b(a,f),b(a,c),mt(c,o[0].worldSize),b(t,l),b(t,d),v=!0,m||(g=[P(Dn,"keydown",o[2]),P(c,"input",o[8]),P(c,"change",o[6]),P(d,"mousemove",o[4]),P(d,"mousedown",tt(o[5])),P(d,"mouseup",o[5]),P(d,"wheel",o[3]),P(d,"keydown",tt(o[2])),P(d,"contextmenu",tt(Bn))],m=!0)},p(y,[S]){S&1&&Ct(c.value)!==y[0].worldSize&&mt(c,y[0].worldSize)},i(y){v||($(e.$$.fragment,y),v=!0)},o(y){L(e.$$.fragment,y),v=!1},d(y){y&&h(t),F(e),m=!1,ft(g)}}}const Bn=o=>o;function Cn(o,t,e){const n={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_IDL_CB_RdYiBu",initialConditions:"middleCircleAndRandomSpots",reset:()=>g(),pause:!1,grid:!1,speed:40},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:9},u={f:j[0].f,k:j[0].k};let s,f;const c=async()=>{const x=await it(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new x.GUI({autoPlace:!1,closeOnTop:!0}),s.domElement.id="datgui";const p=document.getElementById("datgui-container");if(!p)throw new Error("Gui container not ready");p.appendChild(s.domElement),s.add(r,"pause").name("Pause"),s.add(r,"grid").name("Debug grid"),s.add(r,"reset").name("Reset simulation"),s.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu"]).name("Color scheme");const w={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};s.add(r,"initialConditions",w).onFinishChange(r.reset).name("Initial conditions");const k=s.add(a,"iteration").listen();k.domElement.style.pointerEvents="none",s.add(r,"speed",1,500).name("Simulation speed"),s.add(i,"penSize",0,a.worldSize).name("Pen size"),s.add(i,"penDensity",0,1).name("Pen density"),s.add(i,"zoomLevel",0,1).name("Zoom level").listen(),s.add(i,"panX",0,1).name("pan x").listen(),s.add(i,"panY",0,1).name("pan y").listen()},l=x=>{if(x.code==="Space"){r.pause=!r.pause,x.preventDefault();return}if(x.code==="KeyR"&&!x.getModifierState("Control")){g(),x.preventDefault();return}},d=x=>{if(!x.getModifierState("Control"))return;const p=$t(x);i.panX=p.x,i.panY=p.y,x.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),x.preventDefault()},v=x=>{const p=$t(x);i.x=p.x,i.y=p.y},m=x=>{if(![0,2].includes(x.button)||!["mouseup","mousedown"].includes(x.type))return;let p=x.type==="mousedown";x.button===0&&(i.pressedLeft=p),x.button===2&&(i.pressedRight=p)},g=()=>{isNaN(a.worldSize)||(a.worldSize>11&&e(0,a.worldSize=11,a),a.worldSize<1&&e(0,a.worldSize=1,a),s&&(document.getElementById(s.domElement.id)?.remove(),s.destroy()),f?.destroy(),c(),f=An({controls:r,info:a,mouseState:i,simulationParameters:u}))},y=x=>{u.f=x.detail.f,u.k=x.detail.k};et(()=>{g()}),ot(()=>{s.destroy(),f.destroy()});function S(){a.worldSize=Ct(this.value),e(0,a)}return[a,n,l,d,v,m,g,y,S]}class Ln extends U{constructor(t){super(),Y(this,t,Cn,En,H,{})}}function At(o,t,e){const n=o.slice();return n[1]=t[e],n}function kt(o,t,e){const n=o.slice();return n[1]=t[e],n}function Rn(o){let t;return{c(){t=V("About")},l(e){t=O(e,"About")},m(e,n){A(e,t,n)},d(e){e&&h(t)}}}function zn(o){let t=o[1].title+"",e;return{c(){e=V(t)},l(n){e=O(n,t)},m(n,r){A(n,e,r)},p:z,d(n){n&&h(e)}}}function Dt(o){let t,e;return t=new Rt({props:{$$slots:{default:[zn]},$$scope:{ctx:o}}}),{c(){T(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||($(t.$$.fragment,n),e=!0)},o(n){L(t.$$.fragment,n),e=!1},d(n){F(t,n)}}}function Pn(o){let t,e,n,r;t=new Rt({props:{$$slots:{default:[Rn]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let s=0;s<i.length;s+=1)a[s]=Dt(kt(o,i,s));const u=s=>L(a[s],1,1,()=>{a[s]=null});return{c(){T(t.$$.fragment),e=W();for(let s=0;s<a.length;s+=1)a[s].c();n=nt()},l(s){N(t.$$.fragment,s),e=K(s);for(let f=0;f<a.length;f+=1)a[f].l(s);n=nt()},m(s,f){M(t,s,f),A(s,e,f);for(let c=0;c<a.length;c+=1)a[c].m(s,f);A(s,n,f),r=!0},p(s,f){const c={};if(f&64&&(c.$$scope={dirty:f,ctx:s}),t.$set(c),f&1){i=s[0];let l;for(l=0;l<i.length;l+=1){const d=kt(s,i,l);a[l]?(a[l].p(d,f),$(a[l],1)):(a[l]=Dt(d),a[l].c(),$(a[l],1),a[l].m(n.parentNode,n))}for(rt(),l=i.length;l<a.length;l+=1)u(l);at()}},i(s){if(!r){$(t.$$.fragment,s);for(let f=0;f<i.length;f+=1)$(a[f]);r=!0}},o(s){L(t.$$.fragment,s),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)L(a[f]);r=!1},d(s){F(t,s),s&&h(e),ut(a,s),s&&h(n)}}}function In(o){let t,e,n,r,i,a,u,s,f,c,l,d;return{c(){t=B("p"),e=V("Experiments with "),n=B("a"),r=V("Reaction-diffusion systems"),i=W(),a=B("p"),u=V("The code is based on "),s=B("a"),f=V("this tutorial"),c=V(`
                but reimplemented in a glsl shader with
                `),l=B("a"),d=V("regl"),this.h()},l(v){t=C(v,"P",{});var m=R(t);e=O(m,"Experiments with "),n=C(m,"A",{href:!0,target:!0});var g=R(n);r=O(g,"Reaction-diffusion systems"),g.forEach(h),m.forEach(h),i=K(v),a=C(v,"P",{});var y=R(a);u=O(y,"The code is based on "),s=C(y,"A",{href:!0,target:!0});var S=R(s);f=O(S,"this tutorial"),S.forEach(h),c=O(y,`
                but reimplemented in a glsl shader with
                `),l=C(y,"A",{href:!0,target:!0});var x=R(l);d=O(x,"regl"),x.forEach(h),y.forEach(h),this.h()},h(){_(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),_(n,"target","none"),_(s,"href","https://karlsims.com/rd.html"),_(s,"target","none"),_(l,"href","https://github.com/regl-project/regl"),_(l,"target","none")},m(v,m){A(v,t,m),b(t,e),b(t,n),b(n,r),A(v,i,m),A(v,a,m),b(a,u),b(a,s),b(s,f),b(a,c),b(a,l),b(l,d)},p:z,d(v){v&&h(t),v&&h(i),v&&h(a)}}}function Tn(o){let t,e,n;var r=o[1].component;function i(a){return{}}return r&&(t=dt(r,i())),{c(){t&&T(t.$$.fragment),e=W()},l(a){t&&N(t.$$.fragment,a),e=K(a)},m(a,u){t&&M(t,a,u),A(a,e,u),n=!0},p(a,u){if(r!==(r=a[1].component)){if(t){rt();const s=t;L(s.$$.fragment,1,0,()=>{F(s,1)}),at()}r?(t=dt(r,i()),T(t.$$.fragment),$(t.$$.fragment,1),M(t,e.parentNode,e)):t=null}},i(a){n||(t&&$(t.$$.fragment,a),n=!0)},o(a){t&&L(t.$$.fragment,a),n=!1},d(a){t&&F(t,a),a&&h(e)}}}function Et(o){let t,e;return t=new Lt({props:{$$slots:{default:[Tn]},$$scope:{ctx:o}}}),{c(){T(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||($(t.$$.fragment,n),e=!0)},o(n){L(t.$$.fragment,n),e=!1},d(n){F(t,n)}}}function Mn(o){let t,e,n,r,i,a;t=new Wt({props:{$$slots:{default:[Pn]},$$scope:{ctx:o}}}),n=new Lt({props:{$$slots:{default:[In]},$$scope:{ctx:o}}});let u=o[0],s=[];for(let c=0;c<u.length;c+=1)s[c]=Et(At(o,u,c));const f=c=>L(s[c],1,1,()=>{s[c]=null});return{c(){T(t.$$.fragment),e=W(),T(n.$$.fragment),r=W();for(let c=0;c<s.length;c+=1)s[c].c();i=nt()},l(c){N(t.$$.fragment,c),e=K(c),N(n.$$.fragment,c),r=K(c);for(let l=0;l<s.length;l+=1)s[l].l(c);i=nt()},m(c,l){M(t,c,l),A(c,e,l),M(n,c,l),A(c,r,l);for(let d=0;d<s.length;d+=1)s[d].m(c,l);A(c,i,l),a=!0},p(c,l){const d={};l&64&&(d.$$scope={dirty:l,ctx:c}),t.$set(d);const v={};if(l&64&&(v.$$scope={dirty:l,ctx:c}),n.$set(v),l&1){u=c[0];let m;for(m=0;m<u.length;m+=1){const g=At(c,u,m);s[m]?(s[m].p(g,l),$(s[m],1)):(s[m]=Et(g),s[m].c(),$(s[m],1),s[m].m(i.parentNode,i))}for(rt(),m=u.length;m<s.length;m+=1)f(m);at()}},i(c){if(!a){$(t.$$.fragment,c),$(n.$$.fragment,c);for(let l=0;l<u.length;l+=1)$(s[l]);a=!0}},o(c){L(t.$$.fragment,c),L(n.$$.fragment,c),s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)L(s[l]);a=!1},d(c){F(t,c),c&&h(e),F(n,c),c&&h(r),ut(s,c),c&&h(i)}}}function Fn(o){let t,e,n;return e=new Nt({props:{$$slots:{default:[Mn]},$$scope:{ctx:o}}}),{c(){t=B("div"),T(e.$$.fragment)},l(r){t=C(r,"DIV",{});var i=R(t);N(e.$$.fragment,i),i.forEach(h)},m(r,i){A(r,t,i),M(e,t,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){r&&h(t),F(e)}}}function Vn(o){return[[{title:"V7",component:Ln},{title:"V6",component:Ne},{title:"V5",component:Le},{title:"V4",component:Ae},{title:"V3",component:be},{title:"V2",component:pe},{title:"V1",component:ne}]]}class On extends U{constructor(t){super(),Y(this,t,Vn,Fn,H,{})}}function Nn(o){let t,e;return t=new On({}),{c(){T(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:z,i(n){e||($(t.$$.fragment,n),e=!0)},o(n){L(t.$$.fragment,n),e=!1},d(n){F(t,n)}}}class Jn extends U{constructor(t){super(),Y(this,t,null,Nn,H,{})}}export{Jn as default};
