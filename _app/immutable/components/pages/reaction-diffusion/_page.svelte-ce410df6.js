import{S as N,i as K,s as z,k as C,l as P,m as E,h as y,n as w,b as $,X as Lt,B as A,Y as It,o as ot,w as I,x as V,y as M,f as S,t as D,z as T,Q as it,K as W,Z as rt,M as Dt,q as U,a as G,r as X,c as q,D as B,u as Mt,g as st,d as lt,O as pt,P as At,e as at,L as Bt,v as dt}from"../../../chunks/index-8c90984f.js";import{T as Tt,a as Ft,b as Ct,c as Pt}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as ct}from"../../../chunks/preload-helper-41c905a7.js";import{R as ft}from"../../../chunks/regl-89b00fbf.js";import{b as Vt}from"../../../chunks/paths-b4419565.js";function Wt(o){let t,e,n;return{c(){t=C("div"),this.h()},l(r){t=P(r,"DIV",{style:!0,class:!0}),E(t).forEach(y),this.h()},h(){w(t,"style",o[0]),w(t,"class","m-0")},m(r,i){$(r,t,i),e||(n=Lt(o[1].call(null,t)),e=!0)},p(r,[i]){i&1&&w(t,"style",r[0])},i:A,o:A,d(r){r&&y(t),e=!1,n()}}}function Nt(o,t){return t.forEach(([e,n])=>o[e]=n),o}function Kt(o,t,e){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,f;const l=It(),u={ref(){l("ref",n)},instance(){l("instance",f)}};function s(c){return e(2,n=c),{destroy(){e(2,n=void 0)}}}return ot(async()=>{const c=await ct(()=>import("../../../chunks/p5.min-b96f42d1.js").then(v=>v.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:g}=c,d=Object.entries(c).filter(([v,_])=>_ instanceof Function&&v[0]!=="_"&&v!=="default");a&&console.log("available p5 native classes",d),f=new g(v=>(v=Nt(v,d),a&&console.log("p5 instance",v),window._p5Instance=v,r(v)),n),u.ref(),u.instance()}),o.$$set=c=>{"target"in c&&e(2,n=c.target),"sketch"in c&&e(3,r=c.sketch),"parentDivStyle"in c&&e(0,i=c.parentDivStyle),"debug"in c&&e(4,a=c.debug)},[i,s,n,r,a]}class ut extends N{constructor(t){super(),K(this,t,Kt,Wt,z,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const zt=o=>{const t=[];for(let a=0;a<o.height;a++){t.push([]);for(let f=0;f<o.width;f++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let f=r-e;f<r+e;f++)t[a][f].B=1;return t},Ot=(o,t)=>{const e={width:o.width/t[0].length,height:o.height/t.length};for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[n][r];o.fill(i*255,a*255,0),o.rect(r*e.width,n*e.height,e.width,e.height)}},Ht=1,Ut=.5,ht=.055,Xt=.062,Gt=o=>{const t=[];for(let e=0;e<o.length;e++){t.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[e][n],a=vt(o,{x:n,y:e},"A"),f=vt(o,{x:n,y:e},"B"),l=r+(Ht*a-r*i*i+ht*(1-r)),u=i+(Ut*f+r*i*i-(Xt+ht)*i);t[e].push({A:l,B:u})}}return t},vt=(o,t,e)=>{const n=qt(o,t);let r=0;for(const i of n){const{coord:a,weight:f}=i;r+=o[a.y][a.x][e]*f}return r},qt=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},f={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e>0?e-1:r-1,y:n},weight:.2},s={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},m={coord:{x:e,y:n<i-1?n+1:0},weight:.2},d={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,f,l,u,s,c,g,m,d]};function Yt(o){let t,e;return t=new ut({props:{sketch:o[0]}}),{c(){I(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:A,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function Zt(o){const t={width:200,height:200};let e;return[r=>{let i;r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),i=zt(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Gt(i);Ot(e,i)}}]}let Qt=class extends N{constructor(t){super(),K(this,t,Zt,Yt,z,{})}},k,J;const jt=o=>{k=[],J=[];for(let i=0;i<o.height;i++){k.push([]),J.push([]);for(let a=0;a<o.width;a++)k[k.length-1].push({A:1,B:0}),J[k.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)k[i][a].B=1;return k},Jt=o=>{const t={width:o.width/k[0].length,height:o.height/k.length};for(let e=0;e<k.length;e++)for(let n=0;n<k[0].length;n++){const{A:r,B:i}=k[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},te=1,ee=.5,gt=.055,ne=.062,oe=()=>{for(let t=0;t<k.length;t++)for(let e=0;e<k[0].length;e++){const{A:n,B:r}=k[t][e],i=yt(k,{x:e,y:t},"A"),a=yt(k,{x:e,y:t},"B"),f=n+(te*i-n*r*r+gt*(1-n)),l=r+(ee*a+n*r*r-(ne+gt)*r);J[t][e]={A:f,B:l}}const o=k;return k=J,J=o,k},yt=(o,t,e)=>{const n=re(o,t);let r=0;for(const i of n){const{coord:a,weight:f}=i;r+=o[a.y][a.x][e]*f}return r},re=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},f={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e>0?e-1:r-1,y:n},weight:.2},s={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},m={coord:{x:e,y:n<i-1?n+1:0},weight:.2},d={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,f,l,u,s,c,g,m,d]};function ae(o){let t,e;return t=new ut({props:{sketch:o[0]}}),{c(){I(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:A,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function ie(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),jt(t)},r.draw=()=>{for(let i=0;i<5;i++)oe();Jt(e)}}]}let se=class extends N{constructor(t){super(),K(this,t,ie,ae,z,{})}},x,tt;const le=o=>{x=[],tt=[];for(let i=0;i<o.height;i++){x.push([]),tt.push([]);for(let a=0;a<o.width;a++)x[x.length-1].push({A:1,B:0}),tt[x.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)x[i][a].B=1;return x},ce=o=>{const t={width:o.width/x[0].length,height:o.height/x.length};for(let e=0;e<x.length;e++)for(let n=0;n<x[0].length;n++){const{A:r,B:i}=x[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},fe=1,ue=.5,bt=.055,me=.062,pe=()=>{for(let t=0;t<x.length;t++)for(let e=0;e<x[0].length;e++){const{A:n,B:r}=x[t][e],i=wt(x,{x:e,y:t},"A"),a=wt(x,{x:e,y:t},"B"),f=n+(fe*i-n*r*r+bt*(1-n)),l=r+(ue*a+n*r*r-(me+bt)*r);tt[t][e]={A:f,B:l}}const o=x;return x=tt,tt=o,x},wt=(o,t,e)=>{const n=de(o,t);let r=0;for(const i of n){const{coord:a,weight:f}=i;r+=o[a.y][a.x][e]*f}return r},de=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},f={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e>0?e-1:r-1,y:n},weight:.2},s={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},m={coord:{x:e,y:n<i-1?n+1:0},weight:.2},d={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,f,l,u,s,c,g,m,d]};function he(o){let t,e;return t=new ut({props:{sketch:o[0]}}),{c(){I(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:A,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function ve(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),le(t)},r.draw=()=>{for(let i=0;i<5;i++)pe();ce(e)}}]}let ge=class extends N{constructor(t){super(),K(this,t,ve,he,z,{})}};function ye(o){let t;return{c(){t=C("canvas"),this.h()},l(e){t=P(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(t).forEach(y),this.h()},h(){w(t,"id","canvas"),w(t,"width",o[0].width),w(t,"height",o[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){$(e,t,n)},p:A,i:A,o:A,d(e){e&&y(t)}}}function be(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,r=Array(e*e).fill(0).map((i,a)=>{const f=Math.floor(a/e),l=a%e;return Math.hypot(e/2-l,e/2-f)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return ot(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ft({extensions:["OES_texture_float"],canvas:i}),f=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
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
}`,framebuffer:s=>f[(s.tick+1)%2]}),u=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:s})=>f[s%2]},depth:{enable:!1},count:3});a.frame(()=>{u(()=>{a.draw(),l()})})}),[t]}let we=class extends N{constructor(t){super(),K(this,t,be,ye,z,{})}};const _e=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),f=i%o;return Math.hypot(o/2-f,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Se=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),$e=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),et=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function ke(o){let t;return{c(){t=C("canvas"),this.h()},l(e){t=P(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(t).forEach(y),this.h()},h(){w(t,"id","canvas"),w(t,"width",o[0].width),w(t,"height",o[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){$(e,t,n)},p:A,i:A,o:A,d(e){e&&y(t)}}}function xe(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>u(),pause:!1},n={iteration:0},r={f:et[e.presetParams].f,k:et[e.presetParams].k};let i,a;const f=async()=>{const s=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new s.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(e,"pause").name("Pause"),i.add(e,"reset").name("Reset simulation");const c=et.reduce((d,v,_)=>(d[v.name]=_,d),{});i.add(e,"presetParams",c).onFinishChange(()=>{r.f=et[e.presetParams].f,r.k=et[e.presetParams].k});const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(e,"initialConditions",g).onFinishChange(e.reset);const m=i.add(n,"iteration").listen();m.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",s=>{if(s.code==="Space")return e.pause=!e.pause,s.preventDefault();if(s.code==="KeyR")return u(),s.preventDefault()})},u=()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");a&&a.destroy(),a=ft({extensions:["OES_texture_float"],canvas:s}),n.iteration=0;const c=2**11;let g;e.initialConditions==="randomSpots"?g=Se(c,.001):e.initialConditions==="middleCircleAndRandomSpots"?g=_e(c,.005,.05):g=$e(c,.02);const m=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:c,data:g,wrap:"repeat",type:"float"}),depthStencil:!1})),d=a({frag:`
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
}`,framebuffer:_=>m[(_.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),v=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:_})=>m[_%2]},depth:{enable:!1},count:3});a.frame(()=>{v(()=>{a.draw(),!e.pause&&(n.iteration++,d({Da:1,Db:.5,...r}))})})};return ot(()=>{f(),l(),u()}),it(()=>{i.destroy(),a.destroy()}),[t]}let De=class extends N{constructor(t){super(),K(this,t,xe,ke,z,{})}};const Ae=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),f=i%o;return Math.hypot(o/2-f,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Be=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ce=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),nt=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Pe=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Re=`precision mediump float;
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
`;function Le(o){let t,e,n;return{c(){t=C("canvas"),this.h()},l(r){t=P(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(t).forEach(y),this.h()},h(){w(t,"id","canvas"),w(t,"width",o[0].width),w(t,"height",o[0].height),w(t,"class","svelte-1b0ol19")},m(r,i){$(r,t,i),e||(n=[W(t,"mousemove",o[1]),W(t,"mousedown",rt(o[2])),W(t,"mouseup",o[2]),W(t,"contextmenu",rt(Ie))],e=!0)},p:A,i:A,o:A,d(r){r&&y(t),e=!1,Dt(n)}}}const mt=11,Ie=o=>o;function Me(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>s(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:nt[e.presetParams].f,k:nt[e.presetParams].k};let a,f;const l=async()=>{const m=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new m.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const d=nt.reduce((L,p,h)=>(L[p.name]=h,L),{});a.add(e,"presetParams",d).onFinishChange(()=>{i.f=nt[e.presetParams].f,i.k=nt[e.presetParams].k});const v={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",v).onFinishChange(e.reset);const _=a.add(r,"iteration").listen();_.domElement.style.pointerEvents="none",a.add(n,"penSize",1,mt,1).name("Pen size")},u=()=>{document.addEventListener("keydown",m=>{if(m.code==="Space")return e.pause=!e.pause,m.preventDefault();if(m.code==="KeyR")return s(),m.preventDefault()})},s=()=>{const m=document.getElementById("canvas");if(!m)throw new Error("Canvas container not ready");f&&f.destroy(),f=ft({extensions:["OES_texture_float"],canvas:m}),r.iteration=0;const d=2**mt;let v;e.initialConditions==="randomSpots"?v=Be(d,.001):e.initialConditions==="middleCircleAndRandomSpots"?v=Ae(d,.005,.05):v=Ce(d,.02);const _=Array(2).fill(0).map(()=>f.framebuffer({color:f.texture({radius:d,data:v,wrap:"repeat",type:"float"}),depthStencil:!1})),L=f({frag:Ee,framebuffer:h=>_[(h.tick+1)%2],uniforms:{Da:f.prop("Da"),Db:f.prop("Db"),f:f.prop("f"),k:f.prop("k"),radius:d,pauseSimulation:f.prop("pauseSimulation"),mousePosition:f.prop("mousePosition"),penRadius:f.prop("penRadius"),penIsActive:f.prop("penIsActive"),eraserIsActive:f.prop("eraserIsActive")}}),p=f({frag:Re,vert:Pe,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:h})=>_[h%2]},depth:{enable:!1},count:3});f.frame(()=>{p(()=>{f.draw(),e.pause||r.iteration++,L({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(mt-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},c=m=>{if(!m.currentTarget)throw new Error("No target for the onmousemove event");if(!m.currentTarget.width||!m.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:d,y:v}=m,{width:_,height:L}=m.currentTarget,p=d/_,h=(L-v)/L;n.x=p,n.y=h},g=m=>{if(![0,2].includes(m.button)||!["mouseup","mousedown"].includes(m.type))return;let d=m.type==="mousedown";m.button===0&&(n.pressedLeft=d),m.button===2&&(n.pressedRight=d)};return ot(()=>{l(),u(),s()}),it(()=>{a.destroy(),f.destroy()}),[t,c,g]}let Te=class extends N{constructor(t){super(),K(this,t,Me,Le,z,{})}};const j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"epsilon",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function _t(o){let t,e;return t=new ut({props:{sketch:o[1]}}),{c(){I(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:A,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function Fe(o){let t,e,n=o[0]?"Close":"F/K selection",r,i,a,f,l,u=o[0]&&_t(o);return{c(){t=C("div"),e=C("button"),r=U(n),i=G(),u&&u.c(),this.h()},l(s){t=P(s,"DIV",{id:!0,class:!0});var c=E(t);e=P(c,"BUTTON",{id:!0,class:!0});var g=E(e);r=X(g,n),g.forEach(y),i=q(c),u&&u.l(c),c.forEach(y),this.h()},h(){w(e,"id","toggleButton"),w(e,"class","svelte-wadqeg"),w(t,"id","container"),w(t,"class","svelte-wadqeg")},m(s,c){$(s,t,c),B(t,e),B(e,r),B(t,i),u&&u.m(t,null),a=!0,f||(l=W(e,"click",o[2]),f=!0)},p(s,[c]){(!a||c&1)&&n!==(n=s[0]?"Close":"F/K selection")&&Mt(r,n),s[0]?u?(u.p(s,c),c&1&&S(u,1)):(u=_t(s),u.c(),S(u,1),u.m(t,null)):u&&(st(),D(u,1,1,()=>{u=null}),lt())},i(s){a||(S(u),a=!0)},o(s){D(u),a=!1},d(s){s&&y(t),u&&u.d(),f=!1,l()}}}function Ve(o,t,e){let{f:n}=t,{k:r}=t,{onUpdateParams:i}=t,a=!0;const f=[.01,.09],l=[.01,.08],u=p=>{const{f:h,k:b}=p,R=v.map(b,l[0],l[1],0,v.width),F=v.map(h,f[0],f[1],0,v.height);return{x:R,y:F}},s=p=>{const{x:h,y:b}=p,R=v.map(b,0,v.height,f[0],f[1]),F=v.map(h,0,v.width,l[0],l[1]);return{f:R,k:F}},c=p=>{const h=p.mouseX,b=p.mouseY;if(h<0||b<0||h>p.width||b>p.height)return;const{f:R,k:F}=s({x:p.mouseX,y:p.mouseY});i({f:R,k:F})},g=p=>{p.fill("blue");for(const h of j){const{x:b,y:R}=u({f:h.f,k:h.k});p.circle(b,R,8),p.text(h.name,b-p.textWidth(h.name)/2,R-10)}},m=p=>{p.fill("red");const{x:h,y:b}=u({f:n,k:r});p.text("F",10,b>10?b-5:b+15),p.line(0,b,p.width,b),p.text("K",h<p.width-10?h+5:h-15,p.height-10),p.line(h,0,h,p.height),p.circle(h,b,10)},d=p=>{const h=`F: ${n.toFixed(4)}`,b=`K: ${r.toFixed(4)}`;p.fill("red"),p.text(h,p.width*.05,p.height/2),p.text(b,p.width*.05,p.height/2+p.textSize()+6)};let v;const _=p=>{let h;p.preload=()=>{h=p.loadImage(Vt+"/pearson-space.png")},p.setup=()=>{v=p,p.createCanvas(500,500),p.frameRate(25)},p.draw=()=>{p.background(255),p.tint(150,80),p.image(h,0,0,p.width,p.height),g(p),m(p),d(p),p.mouseIsPressed&&c(p)}},L=()=>{e(0,a=!a),a||v.remove()};return it(()=>v.remove()),o.$$set=p=>{"f"in p&&e(3,n=p.f),"k"in p&&e(4,r=p.k),"onUpdateParams"in p&&e(5,i=p.onUpdateParams)},[a,_,L,n,r,i]}class We extends N{constructor(t){super(),K(this,t,Ve,Fe,z,{f:3,k:4,onUpdateParams:5})}}const Ne=(o,t)=>o==="randomSpots"?Oe(t,.001):o==="middleCircleAndRandomSpots"?Ke(t,.005,.05):o==="empty"?ze(t):He(t,.02),Ke=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),f=i%o;return Math.hypot(o/2-f,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ze=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Oe=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),He=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),O=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ue=`precision mediump float;

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
`,Xe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Ge=`precision mediump float;

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
`,qe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Ye=`precision mediump float;

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
`,Qe=`precision mediump float;

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
`,je=`// Colors scheme inspired by Robert Munafo described here:
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
`,H={},tn=(o,t,e)=>{H.raw=o({frag:Xe,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),H.grayscale=o({frag:qe,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),H.blackwhite=o({frag:Ye,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),H.whiteblack=o({frag:Ze,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),H.timebasedblue=o({frag:Ge,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),H.lerp=o({frag:Qe,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),H.mrob=o({frag:je,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),H.redblue=o({frag:Je,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}})},en=(o,t)=>{(H[o]||H.raw)({iteration:t.iteration})};let Rt;const nn=(o,t)=>{Rt=o({frag:`
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
    }`,vert:O,attributes:{position:[[-1,-1],[-1,1],[1,-1],[1,-1],[-1,1],[1,1]]},uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),prevState:t},depth:{enable:!1},primitive:"triangles",count:6})},on=(o,t)=>{Rt({mousePosition:[o.x,o.y],penRadius:1/2**(t-o.penSize)})};function rn(o){let t,e,n,r,i,a,f,l,u,s,c,g;return t=new We({props:{f:o[1].f,k:o[1].k,onUpdateParams:o[6]}}),{c(){I(t.$$.fragment),e=G(),n=C("div"),r=C("label"),i=U("World Size:"),a=G(),f=C("input"),l=G(),u=C("canvas"),this.h()},l(m){V(t.$$.fragment,m),e=q(m),n=P(m,"DIV",{});var d=E(n);r=P(d,"LABEL",{for:!0});var v=E(r);i=X(v,"World Size:"),v.forEach(y),a=q(d),f=P(d,"INPUT",{id:!0,type:!0,step:!0}),d.forEach(y),l=q(m),u=P(m,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(u).forEach(y),this.h()},h(){w(r,"for","worldSize"),w(f,"id","worldSize"),w(f,"type","number"),w(f,"step","1"),w(u,"id","canvas"),w(u,"width",o[2].width),w(u,"height",o[2].height),w(u,"class","svelte-fc0fp8")},m(m,d){M(t,m,d),$(m,e,d),$(m,n,d),B(n,r),B(r,i),B(n,a),B(n,f),pt(f,o[0]),$(m,l,d),$(m,u,d),s=!0,c||(g=[W(f,"input",o[7]),W(f,"change",o[5]),W(u,"mousemove",o[3]),W(u,"mousedown",rt(o[4])),W(u,"mouseup",o[4]),W(u,"contextmenu",rt(an))],c=!0)},p(m,[d]){const v={};d&2&&(v.f=m[1].f),d&2&&(v.k=m[1].k),d&2&&(v.onUpdateParams=m[6]),t.$set(v),d&1&&At(f.value)!==m[0]&&pt(f,m[0])},i(m){s||(S(t.$$.fragment,m),s=!0)},o(m){D(t.$$.fragment,m),s=!1},d(m){T(t,m),m&&y(e),m&&y(n),m&&y(l),m&&y(u),c=!1,Dt(g)}}}const an=o=>o;function sn(o,t,e){const n={width:window.innerWidth-50,height:window.innerHeight-10};let r=8;const i={presetParams:4,colors:"mrob",initialConditions:"randomSpots",reset:()=>m(),pause:!1},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3},f={iteration:0},l={f:j[i.presetParams].f,k:j[i.presetParams].k};let u,s;const c=async()=>{const h=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);u=new h.GUI,u.domElement.setAttribute("style","background-color: black"),u.add(l,"f").name("Feed rate").listen(),u.add(l,"k").name("Kill rate").listen(),u.add(i,"pause").name("Pause"),u.add(i,"reset").name("Reset simulation"),u.add(i,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue"]);const b=j.reduce((Y,Q,Z)=>(Y[Q.name]=Z,Y),{});u.add(i,"presetParams",b).onFinishChange(()=>{e(1,l.f=j[i.presetParams].f,l),e(1,l.k=j[i.presetParams].k,l)});const R={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};u.add(i,"initialConditions",R).onFinishChange(i.reset);const F=u.add(f,"iteration").listen();F.domElement.style.pointerEvents="none",u.add(a,"penSize",0,r).name("Pen size"),u.add(a,"penDensity",0,1).name("Pen density")},g=()=>{document.addEventListener("keydown",h=>{if(h.code==="Space")return i.pause=!i.pause,h.preventDefault();if(h.code==="KeyR")return m(),h.preventDefault()})},m=()=>{const h=document.getElementById("canvas");if(!h)throw new Error("Canvas container not ready");s&&s.destroy(),s=ft({extensions:["OES_texture_float"],canvas:h}),f.iteration=0;const b=2**r;let R=Ne(i.initialConditions,b);const F=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:b,data:R,wrap:"repeat",type:"float"}),depthStencil:!1})),Y=s.framebuffer({color:s.texture({radius:b,data:R,wrap:"repeat",type:"float"}),depthStencil:!1});tn(s,F,Y),nn(s,Y);const Q=s({frag:Ue,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:Z=>F[(Z.tick+1)%2],uniforms:{prevState:Z=>F[Z.tick%2],Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:b,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penDensity:s.prop("penDensity"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}});s.frame(()=>{i.pause||f.iteration++,Q({Da:1,Db:.5,pauseSimulation:i.pause,mousePosition:[a.x,a.y],penRadius:1/2**(r-a.penSize),penDensity:a.penDensity,penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,...l}),en(i.colors,f),on(a,r)})},d=h=>{if(!h.currentTarget)throw new Error("No target for the onmousemove event");if(!h.currentTarget.width||!h.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var b=h.currentTarget.getBoundingClientRect();const R=h.clientX-b.left,F=h.clientY-b.top,{width:Y,height:Q}=h.currentTarget,Z=R/Y,Et=(Q-F)/Q;a.x=Z,a.y=Et},v=h=>{if(![0,2].includes(h.button)||!["mouseup","mousedown"].includes(h.type))return;let b=h.type==="mousedown";h.button===0&&(a.pressedLeft=b),h.button===2&&(a.pressedRight=b)},_=()=>{isNaN(r)||(r>11&&e(0,r=11),r<1&&e(0,r=1),u?.destroy(),s?.destroy(),c(),m())};ot(()=>{c(),g(),m()}),it(()=>{u.destroy(),s.destroy()});const L=({f:h,k:b})=>{e(1,l.f=h,l),e(1,l.k=b,l)};function p(){r=At(this.value),e(0,r)}return[r,l,n,d,v,_,L,p]}class ln extends N{constructor(t){super(),K(this,t,sn,rn,z,{})}}function St(o,t,e){const n=o.slice();return n[1]=t[e],n}function $t(o,t,e){const n=o.slice();return n[1]=t[e],n}function cn(o){let t;return{c(){t=U("About")},l(e){t=X(e,"About")},m(e,n){$(e,t,n)},d(e){e&&y(t)}}}function fn(o){let t=o[1].title+"",e;return{c(){e=U(t)},l(n){e=X(n,t)},m(n,r){$(n,e,r)},p:A,d(n){n&&y(e)}}}function kt(o){let t,e;return t=new Pt({props:{$$slots:{default:[fn]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function un(o){let t,e,n,r;t=new Pt({props:{$$slots:{default:[cn]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=kt($t(o,i,l));const f=l=>D(a[l],1,1,()=>{a[l]=null});return{c(){I(t.$$.fragment),e=G();for(let l=0;l<a.length;l+=1)a[l].c();n=at()},l(l){V(t.$$.fragment,l),e=q(l);for(let u=0;u<a.length;u+=1)a[u].l(l);n=at()},m(l,u){M(t,l,u),$(l,e,u);for(let s=0;s<a.length;s+=1)a[s].m(l,u);$(l,n,u),r=!0},p(l,u){const s={};if(u&64&&(s.$$scope={dirty:u,ctx:l}),t.$set(s),u&1){i=l[0];let c;for(c=0;c<i.length;c+=1){const g=$t(l,i,c);a[c]?(a[c].p(g,u),S(a[c],1)):(a[c]=kt(g),a[c].c(),S(a[c],1),a[c].m(n.parentNode,n))}for(st(),c=i.length;c<a.length;c+=1)f(c);lt()}},i(l){if(!r){S(t.$$.fragment,l);for(let u=0;u<i.length;u+=1)S(a[u]);r=!0}},o(l){D(t.$$.fragment,l),a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)D(a[u]);r=!1},d(l){T(t,l),l&&y(e),Bt(a,l),l&&y(n)}}}function mn(o){let t,e,n,r,i,a,f,l,u,s,c,g;return{c(){t=C("p"),e=U("Experiments with "),n=C("a"),r=U("Reaction-diffusion systems"),i=G(),a=C("p"),f=U("The code is based on "),l=C("a"),u=U("this tutorial"),s=U(`
                but reimplemented in a glsl shader with
                `),c=C("a"),g=U("regl"),this.h()},l(m){t=P(m,"P",{});var d=E(t);e=X(d,"Experiments with "),n=P(d,"A",{href:!0,target:!0});var v=E(n);r=X(v,"Reaction-diffusion systems"),v.forEach(y),d.forEach(y),i=q(m),a=P(m,"P",{});var _=E(a);f=X(_,"The code is based on "),l=P(_,"A",{href:!0,target:!0});var L=E(l);u=X(L,"this tutorial"),L.forEach(y),s=X(_,`
                but reimplemented in a glsl shader with
                `),c=P(_,"A",{href:!0,target:!0});var p=E(c);g=X(p,"regl"),p.forEach(y),_.forEach(y),this.h()},h(){w(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),w(n,"target","none"),w(l,"href","https://karlsims.com/rd.html"),w(l,"target","none"),w(c,"href","https://github.com/regl-project/regl"),w(c,"target","none")},m(m,d){$(m,t,d),B(t,e),B(t,n),B(n,r),$(m,i,d),$(m,a,d),B(a,f),B(a,l),B(l,u),B(a,s),B(a,c),B(c,g)},p:A,d(m){m&&y(t),m&&y(i),m&&y(a)}}}function pn(o){let t,e,n;var r=o[1].component;function i(a){return{}}return r&&(t=dt(r,i())),{c(){t&&I(t.$$.fragment),e=G()},l(a){t&&V(t.$$.fragment,a),e=q(a)},m(a,f){t&&M(t,a,f),$(a,e,f),n=!0},p(a,f){if(r!==(r=a[1].component)){if(t){st();const l=t;D(l.$$.fragment,1,0,()=>{T(l,1)}),lt()}r?(t=dt(r,i()),I(t.$$.fragment),S(t.$$.fragment,1),M(t,e.parentNode,e)):t=null}},i(a){n||(t&&S(t.$$.fragment,a),n=!0)},o(a){t&&D(t.$$.fragment,a),n=!1},d(a){t&&T(t,a),a&&y(e)}}}function xt(o){let t,e;return t=new Ct({props:{$$slots:{default:[pn]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function dn(o){let t,e,n,r,i,a;t=new Ft({props:{$$slots:{default:[un]},$$scope:{ctx:o}}}),n=new Ct({props:{$$slots:{default:[mn]},$$scope:{ctx:o}}});let f=o[0],l=[];for(let s=0;s<f.length;s+=1)l[s]=xt(St(o,f,s));const u=s=>D(l[s],1,1,()=>{l[s]=null});return{c(){I(t.$$.fragment),e=G(),I(n.$$.fragment),r=G();for(let s=0;s<l.length;s+=1)l[s].c();i=at()},l(s){V(t.$$.fragment,s),e=q(s),V(n.$$.fragment,s),r=q(s);for(let c=0;c<l.length;c+=1)l[c].l(s);i=at()},m(s,c){M(t,s,c),$(s,e,c),M(n,s,c),$(s,r,c);for(let g=0;g<l.length;g+=1)l[g].m(s,c);$(s,i,c),a=!0},p(s,c){const g={};c&64&&(g.$$scope={dirty:c,ctx:s}),t.$set(g);const m={};if(c&64&&(m.$$scope={dirty:c,ctx:s}),n.$set(m),c&1){f=s[0];let d;for(d=0;d<f.length;d+=1){const v=St(s,f,d);l[d]?(l[d].p(v,c),S(l[d],1)):(l[d]=xt(v),l[d].c(),S(l[d],1),l[d].m(i.parentNode,i))}for(st(),d=f.length;d<l.length;d+=1)u(d);lt()}},i(s){if(!a){S(t.$$.fragment,s),S(n.$$.fragment,s);for(let c=0;c<f.length;c+=1)S(l[c]);a=!0}},o(s){D(t.$$.fragment,s),D(n.$$.fragment,s),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)D(l[c]);a=!1},d(s){T(t,s),s&&y(e),T(n,s),s&&y(r),Bt(l,s),s&&y(i)}}}function hn(o){let t,e,n;return e=new Tt({props:{$$slots:{default:[dn]},$$scope:{ctx:o}}}),{c(){t=C("div"),I(e.$$.fragment)},l(r){t=P(r,"DIV",{});var i=E(t);V(e.$$.fragment,i),i.forEach(y)},m(r,i){$(r,t,i),M(e,t,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){r&&y(t),T(e)}}}function vn(o){return[[{title:"V7",component:ln},{title:"V6",component:Te},{title:"V5",component:De},{title:"V4",component:we},{title:"V3",component:ge},{title:"V2",component:se},{title:"V1",component:Qt}]]}class gn extends N{constructor(t){super(),K(this,t,vn,hn,z,{})}}function yn(o){let t,e;return t=new gn({}),{c(){I(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:A,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}class Pn extends N{constructor(t){super(),K(this,t,null,yn,z,{})}}export{Pn as default};
