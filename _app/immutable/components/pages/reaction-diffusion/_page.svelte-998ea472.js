import{S as X,i as U,s as G,k as B,l as C,m as L,h as v,n as _,b as w,X as zt,B as R,Y as Lt,o as nt,w as I,x as W,y as M,f as S,t as A,z as T,Q as it,K as z,Z as rt,M as mt,q as V,a as K,r as N,c as H,D as x,u as Vt,g as st,d as lt,I as Nt,J as ht,L as dt,N as Wt,O as vt,P as Et,e as at,v as gt}from"../../../chunks/index-8c90984f.js";import{T as Ot,a as Kt,b as Pt,c as It}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as ct}from"../../../chunks/preload-helper-41c905a7.js";import{R as ft}from"../../../chunks/regl-89b00fbf.js";import{b as Ht}from"../../../chunks/paths-b4419565.js";function Xt(o){let t,e,n;return{c(){t=B("div"),this.h()},l(r){t=C(r,"DIV",{style:!0,class:!0}),L(t).forEach(v),this.h()},h(){_(t,"style",o[0]),_(t,"class","m-0")},m(r,i){w(r,t,i),e||(n=zt(o[1].call(null,t)),e=!0)},p(r,[i]){i&1&&_(t,"style",r[0])},i:R,o:R,d(r){r&&v(t),e=!1,n()}}}function Ut(o,t){return t.forEach(([e,n])=>o[e]=n),o}function Gt(o,t,e){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,u;const c=Lt(),s={ref(){c("ref",n)},instance(){c("instance",u)}};function l(f){return e(2,n=f),{destroy(){e(2,n=void 0)}}}return nt(async()=>{const f=await ct(()=>import("../../../chunks/p5.min-b96f42d1.js").then(g=>g.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:h}=f,d=Object.entries(f).filter(([g,$])=>$ instanceof Function&&g[0]!=="_"&&g!=="default");a&&console.log("available p5 native classes",d),u=new h(g=>(g=Ut(g,d),a&&console.log("p5 instance",g),window._p5Instance=g,r(g)),n),s.ref(),s.instance()}),o.$$set=f=>{"target"in f&&e(2,n=f.target),"sketch"in f&&e(3,r=f.sketch),"parentDivStyle"in f&&e(0,i=f.parentDivStyle),"debug"in f&&e(4,a=f.debug)},[i,l,n,r,a]}class ut extends X{constructor(t){super(),U(this,t,Gt,Xt,G,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Yt=o=>{const t=[];for(let a=0;a<o.height;a++){t.push([]);for(let u=0;u<o.width;u++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let u=r-e;u<r+e;u++)t[a][u].B=1;return t},qt=(o,t)=>{const e={width:o.width/t[0].length,height:o.height/t.length};for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[n][r];o.fill(i*255,a*255,0),o.rect(r*e.width,n*e.height,e.width,e.height)}},Zt=1,Qt=.5,yt=.055,jt=.062,Jt=o=>{const t=[];for(let e=0;e<o.length;e++){t.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[e][n],a=_t(o,{x:n,y:e},"A"),u=_t(o,{x:n,y:e},"B"),c=r+(Zt*a-r*i*i+yt*(1-r)),s=i+(Qt*u+r*i*i-(jt+yt)*i);t[e].push({A:c,B:s})}}return t},_t=(o,t,e)=>{const n=te(o,t);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][e]*u}return r},te=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e,y:n>0?n-1:i-1},weight:.2},c={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e>0?e-1:r-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},m={coord:{x:e,y:n<i-1?n+1:0},weight:.2},d={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,c,s,l,f,h,m,d]};function ee(o){let t,e;return t=new ut({props:{sketch:o[0]}}),{c(){I(t.$$.fragment)},l(n){W(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:R,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function ne(o){const t={width:200,height:200};let e;return[r=>{let i;r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),i=Yt(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Jt(i);qt(e,i)}}]}let oe=class extends X{constructor(t){super(),U(this,t,ne,ee,G,{})}},k,Z;const re=o=>{k=[],Z=[];for(let i=0;i<o.height;i++){k.push([]),Z.push([]);for(let a=0;a<o.width;a++)k[k.length-1].push({A:1,B:0}),Z[k.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)k[i][a].B=1;return k},ae=o=>{const t={width:o.width/k[0].length,height:o.height/k.length};for(let e=0;e<k.length;e++)for(let n=0;n<k[0].length;n++){const{A:r,B:i}=k[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},ie=1,se=.5,bt=.055,le=.062,ce=()=>{for(let t=0;t<k.length;t++)for(let e=0;e<k[0].length;e++){const{A:n,B:r}=k[t][e],i=$t(k,{x:e,y:t},"A"),a=$t(k,{x:e,y:t},"B"),u=n+(ie*i-n*r*r+bt*(1-n)),c=r+(se*a+n*r*r-(le+bt)*r);Z[t][e]={A:u,B:c}}const o=k;return k=Z,Z=o,k},$t=(o,t,e)=>{const n=fe(o,t);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][e]*u}return r},fe=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e,y:n>0?n-1:i-1},weight:.2},c={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e>0?e-1:r-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},m={coord:{x:e,y:n<i-1?n+1:0},weight:.2},d={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,c,s,l,f,h,m,d]};function ue(o){let t,e;return t=new ut({props:{sketch:o[0]}}),{c(){I(t.$$.fragment)},l(n){W(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:R,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function pe(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),re(t)},r.draw=()=>{for(let i=0;i<5;i++)ce();ae(e)}}]}let me=class extends X{constructor(t){super(),U(this,t,pe,ue,G,{})}},D,Q;const de=o=>{D=[],Q=[];for(let i=0;i<o.height;i++){D.push([]),Q.push([]);for(let a=0;a<o.width;a++)D[D.length-1].push({A:1,B:0}),Q[D.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)D[i][a].B=1;return D},he=o=>{const t={width:o.width/D[0].length,height:o.height/D.length};for(let e=0;e<D.length;e++)for(let n=0;n<D[0].length;n++){const{A:r,B:i}=D[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},ve=1,ge=.5,wt=.055,ye=.062,_e=()=>{for(let t=0;t<D.length;t++)for(let e=0;e<D[0].length;e++){const{A:n,B:r}=D[t][e],i=St(D,{x:e,y:t},"A"),a=St(D,{x:e,y:t},"B"),u=n+(ve*i-n*r*r+wt*(1-n)),c=r+(ge*a+n*r*r-(ye+wt)*r);Q[t][e]={A:u,B:c}}const o=D;return D=Q,Q=o,D},St=(o,t,e)=>{const n=be(o,t);let r=0;for(const i of n){const{coord:a,weight:u}=i;r+=o[a.y][a.x][e]*u}return r},be=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},u={coord:{x:e,y:n>0?n-1:i-1},weight:.2},c={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e>0?e-1:r-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},m={coord:{x:e,y:n<i-1?n+1:0},weight:.2},d={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,u,c,s,l,f,h,m,d]};function $e(o){let t,e;return t=new ut({props:{sketch:o[0]}}),{c(){I(t.$$.fragment)},l(n){W(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:R,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function we(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),de(t)},r.draw=()=>{for(let i=0;i<5;i++)_e();he(e)}}]}let Se=class extends X{constructor(t){super(),U(this,t,we,$e,G,{})}};function xe(o){let t;return{c(){t=B("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(t).forEach(v),this.h()},h(){_(t,"id","canvas"),_(t,"width",o[0].width),_(t,"height",o[0].height),_(t,"class","svelte-1b0ol19")},m(e,n){w(e,t,n)},p:R,i:R,o:R,d(e){e&&v(t)}}}function ke(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,r=Array(e*e).fill(0).map((i,a)=>{const u=Math.floor(a/e),c=a%e;return Math.hypot(e/2-c,e/2-u)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return nt(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ft({extensions:["OES_texture_float"],canvas:i}),u=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),c=a({frag:`
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
}`,framebuffer:l=>u[(l.tick+1)%2]}),s=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:l})=>u[l%2]},depth:{enable:!1},count:3});a.frame(()=>{s(()=>{a.draw(),c()})})}),[t]}let De=class extends X{constructor(t){super(),U(this,t,ke,xe,G,{})}};const Ae=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Be=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ce=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),tt=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Re(o){let t;return{c(){t=B("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(t).forEach(v),this.h()},h(){_(t,"id","canvas"),_(t,"width",o[0].width),_(t,"height",o[0].height),_(t,"class","svelte-1b0ol19")},m(e,n){w(e,t,n)},p:R,i:R,o:R,d(e){e&&v(t)}}}function Le(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>s(),pause:!1},n={iteration:0},r={f:tt[e.presetParams].f,k:tt[e.presetParams].k};let i,a;const u=async()=>{const l=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new l.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(e,"pause").name("Pause"),i.add(e,"reset").name("Reset simulation");const f=tt.reduce((d,g,$)=>(d[g.name]=$,d),{});i.add(e,"presetParams",f).onFinishChange(()=>{r.f=tt[e.presetParams].f,r.k=tt[e.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(e,"initialConditions",h).onFinishChange(e.reset);const m=i.add(n,"iteration").listen();m.domElement.style.pointerEvents="none"},c=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space")return e.pause=!e.pause,l.preventDefault();if(l.code==="KeyR")return s(),l.preventDefault()})},s=()=>{const l=document.getElementById("canvas");if(!l)throw new Error("Canvas container not ready");a&&a.destroy(),a=ft({extensions:["OES_texture_float"],canvas:l}),n.iteration=0;const f=2**11;let h;e.initialConditions==="randomSpots"?h=Be(f,.001):e.initialConditions==="middleCircleAndRandomSpots"?h=Ae(f,.005,.05):h=Ce(f,.02);const m=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:f,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),d=a({frag:`
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
}`,framebuffer:$=>m[($.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),g=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:$})=>m[$%2]},depth:{enable:!1},count:3});a.frame(()=>{g(()=>{a.draw(),!e.pause&&(n.iteration++,d({Da:1,Db:.5,...r}))})})};return nt(()=>{u(),c(),s()}),it(()=>{i.destroy(),a.destroy()}),[t]}let Ee=class extends X{constructor(t){super(),U(this,t,Le,Re,G,{})}};const Pe=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Ie=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Me=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),et=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Te=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Fe=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,ze=`precision mediump float;

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
`;function Ve(o){let t,e,n;return{c(){t=B("canvas"),this.h()},l(r){t=C(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(t).forEach(v),this.h()},h(){_(t,"id","canvas"),_(t,"width",o[0].width),_(t,"height",o[0].height),_(t,"class","svelte-1b0ol19")},m(r,i){w(r,t,i),e||(n=[z(t,"mousemove",o[1]),z(t,"mousedown",rt(o[2])),z(t,"mouseup",o[2]),z(t,"contextmenu",rt(Ne))],e=!0)},p:R,i:R,o:R,d(r){r&&v(t),e=!1,mt(n)}}}const pt=11,Ne=o=>o;function We(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>l(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:et[e.presetParams].f,k:et[e.presetParams].k};let a,u;const c=async()=>{const m=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new m.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const d=et.reduce((P,O,p)=>(P[O.name]=p,P),{});a.add(e,"presetParams",d).onFinishChange(()=>{i.f=et[e.presetParams].f,i.k=et[e.presetParams].k});const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",g).onFinishChange(e.reset);const $=a.add(r,"iteration").listen();$.domElement.style.pointerEvents="none",a.add(n,"penSize",1,pt,1).name("Pen size")},s=()=>{document.addEventListener("keydown",m=>{if(m.code==="Space")return e.pause=!e.pause,m.preventDefault();if(m.code==="KeyR")return l(),m.preventDefault()})},l=()=>{const m=document.getElementById("canvas");if(!m)throw new Error("Canvas container not ready");u&&u.destroy(),u=ft({extensions:["OES_texture_float"],canvas:m}),r.iteration=0;const d=2**pt;let g;e.initialConditions==="randomSpots"?g=Ie(d,.001):e.initialConditions==="middleCircleAndRandomSpots"?g=Pe(d,.005,.05):g=Me(d,.02);const $=Array(2).fill(0).map(()=>u.framebuffer({color:u.texture({radius:d,data:g,wrap:"repeat",type:"float"}),depthStencil:!1})),P=u({frag:ze,framebuffer:p=>$[(p.tick+1)%2],uniforms:{Da:u.prop("Da"),Db:u.prop("Db"),f:u.prop("f"),k:u.prop("k"),radius:d,pauseSimulation:u.prop("pauseSimulation"),mousePosition:u.prop("mousePosition"),penRadius:u.prop("penRadius"),penIsActive:u.prop("penIsActive"),eraserIsActive:u.prop("eraserIsActive")}}),O=u({frag:Fe,vert:Te,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:p})=>$[p%2]},depth:{enable:!1},count:3});u.frame(()=>{O(()=>{u.draw(),e.pause||r.iteration++,P({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(pt-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},f=m=>{if(!m.currentTarget)throw new Error("No target for the onmousemove event");if(!m.currentTarget.width||!m.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:d,y:g}=m,{width:$,height:P}=m.currentTarget,O=d/$,p=(P-g)/P;n.x=O,n.y=p},h=m=>{if(![0,2].includes(m.button)||!["mouseup","mousedown"].includes(m.type))return;let d=m.type==="mousedown";m.button===0&&(n.pressedLeft=d),m.button===2&&(n.pressedRight=d)};return nt(()=>{c(),s(),l()}),it(()=>{a.destroy(),u.destroy()}),[t,f,h]}let Oe=class extends X{constructor(t){super(),U(this,t,We,Ve,G,{})}};const j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function xt(o,t,e){const n=o.slice();return n[16]=t[e],n}function kt(o){let t,e,n,r,i,a,u=j,c=[];for(let s=0;s<u.length;s+=1)c[s]=Dt(xt(o,u,s));return n=new ut({props:{sketch:o[3]}}),{c(){t=B("select");for(let s=0;s<c.length;s+=1)c[s].c();e=K(),I(n.$$.fragment),this.h()},l(s){t=C(s,"SELECT",{class:!0});var l=L(t);for(let f=0;f<c.length;f+=1)c[f].l(l);l.forEach(v),e=H(s),W(n.$$.fragment,s),this.h()},h(){_(t,"class","full-width svelte-x05r1k"),o[0]===void 0&&Nt(()=>o[5].call(t))},m(s,l){w(s,t,l);for(let f=0;f<c.length;f+=1)c[f].m(t,null);ht(t,o[0]),w(s,e,l),M(n,s,l),r=!0,i||(a=[z(t,"change",o[5]),z(t,"change",o[6])],i=!0)},p(s,l){if(l&0){u=j;let f;for(f=0;f<u.length;f+=1){const h=xt(s,u,f);c[f]?c[f].p(h,l):(c[f]=Dt(h),c[f].c(),c[f].m(t,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=u.length}l&1&&ht(t,s[0])},i(s){r||(S(n.$$.fragment,s),r=!0)},o(s){A(n.$$.fragment,s),r=!1},d(s){s&&v(t),dt(c,s),s&&v(e),T(n,s),i=!1,mt(a)}}}function Dt(o){let t,e=o[16].type+"",n,r,i=o[16].name+"",a,u;return{c(){t=B("option"),n=V(e),r=V(" - "),a=V(i),u=K(),this.h()},l(c){t=C(c,"OPTION",{});var s=L(t);n=N(s,e),r=N(s," - "),a=N(s,i),u=H(s),s.forEach(v),this.h()},h(){t.__value=o[16],t.value=t.__value},m(c,s){w(c,t,s),x(t,n),x(t,r),x(t,a),x(t,u)},p:R,d(c){c&&v(t)}}}function Ke(o){let t,e,n=o[1]?"Close":"F/K selection",r,i,a,u,c,s=o[1]&&kt(o);return{c(){t=B("div"),e=B("button"),r=V(n),i=K(),s&&s.c(),this.h()},l(l){t=C(l,"DIV",{id:!0,class:!0});var f=L(t);e=C(f,"BUTTON",{class:!0,id:!0});var h=L(e);r=N(h,n),h.forEach(v),i=H(f),s&&s.l(f),f.forEach(v),this.h()},h(){_(e,"class","full-width svelte-x05r1k"),_(e,"id","toggleButton"),_(t,"id","container"),_(t,"class","svelte-x05r1k")},m(l,f){w(l,t,f),x(t,e),x(e,r),x(t,i),s&&s.m(t,null),a=!0,u||(c=z(e,"click",o[4]),u=!0)},p(l,[f]){(!a||f&2)&&n!==(n=l[1]?"Close":"F/K selection")&&Vt(r,n),l[1]?s?(s.p(l,f),f&2&&S(s,1)):(s=kt(l),s.c(),S(s,1),s.m(t,null)):s&&(st(),A(s,1,1,()=>{s=null}),lt())},i(l){a||(S(s),a=!0)},o(l){A(s),a=!1},d(l){l&&v(t),s&&s.d(),u=!1,c()}}}function He(o,t,e){const n=Lt();let r=j[0],i=!1;const a=[.01,.09],u=[.01,.08],c=p=>{const{f:y,k:b}=p,E=d.map(b,u[0],u[1],0,d.width),F=d.map(y,a[0],a[1],0,d.height);return{x:E,y:F}},s=p=>{const{x:y,y:b}=p,E=d.map(b,0,d.height,a[0],a[1]),F=d.map(y,0,d.width,u[0],u[1]);return{f:E,k:F}},l=p=>{const y=p.mouseX,b=p.mouseY;if(y<0||b<0||y>p.width||b>p.height)return;const{f:E,k:F}=s({x:p.mouseX,y:p.mouseY});e(0,r={f:E,k:F,name:"custom",type:"manual"}),n("fkupdated",r)},f=p=>{p.fill("blue");for(const y of j){const{x:b,y:E}=c({f:y.f,k:y.k});p.circle(b,E,8),p.text(y.name,b-p.textWidth(y.name)/2,E-10)}},h=p=>{p.fill("red");const{x:y,y:b}=c(r);p.text("F",10,b>10?b-5:b+15),p.line(0,b,p.width,b),p.text("K",y<p.width-10?y+5:y-15,p.height-10),p.line(y,0,y,p.height),p.circle(y,b,10)},m=p=>{const{f:y,k:b}=r,E=`F: ${y.toFixed(4)}`,F=`K: ${b.toFixed(4)}`;p.fill("red"),p.text(E,p.width*.05,p.height/2),p.text(F,p.width*.05,p.height/2+p.textSize()+6)};let d;const g=p=>{let y;p.preload=()=>{y=p.loadImage(Ht+"/pearson-space.png")},p.setup=()=>{d=p,p.createCanvas(500,500),p.frameRate(25)},p.draw=()=>{p.background(255),p.tint(150,80),p.image(y,0,0,p.width,p.height),f(p),h(p),m(p),p.mouseIsPressed&&l(p)}},$=()=>{e(1,i=!i),i||d.remove()};it(()=>d.remove());function P(){r=Wt(this),e(0,r)}return[r,i,n,g,$,P,()=>n("fkupdated",r)]}class Xe extends X{constructor(t){super(),U(this,t,He,Ke,G,{})}}const Ue=(o,t)=>o==="randomSpots"?qe(t,.001):o==="middleCircleAndRandomSpots"?Ge(t,.005,.05):o==="empty"?Ye(t):Ze(t,.02),Ge=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),u=i%o;return Math.hypot(o/2-u,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Ye=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),qe=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ze=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),Y=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Qe=`precision mediump float;

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
`,je=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Je=`precision mediump float;

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
`,tn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,en=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,nn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,on=`precision mediump float;

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

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,an=`// Colors scheme inspired by Robert Munafo described here:
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
`,q={},sn=(o,t,e)=>{q.raw=o({frag:je,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),q.grayscale=o({frag:tn,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),q.blackwhite=o({frag:en,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),q.whiteblack=o({frag:nn,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),q.timebasedblue=o({frag:Je,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),q.lerp=o({frag:on,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),q.mrob=o({frag:rn,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),q.redblue=o({frag:an,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}})},ln=(o,t)=>{(q[o]||q.raw)({iteration:t.iteration})},cn=`precision highp float;

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
`;let Mt;const fn=(o,t)=>{Mt=o({frag:cn,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),prevState:t},depth:{enable:!1},primitive:"triangles",count:3})},un=(o,t)=>{Mt({mousePosition:[o.x,o.y],penRadius:1/2**(t-o.penSize)})},pn=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,mn=`precision highp float;

uniform sampler2D prevState;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    if (mod(uv.r, 0.1) < 0.001 || mod(uv.g, 0.1) < 0.001) {
        gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0);
    } else {
        gl_FragColor = color;
    }
}
`;let Tt;const dn=(o,t)=>{Tt=o({frag:mn,vert:pn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},uniforms:{zoomLevel:o.prop("zoomLevel"),pan:o.prop("pan"),prevState:t},primitive:"triangles",count:6})},hn=o=>{Tt({zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})};function vn(o){let t,e,n,r,i,a,u,c,s,l,f,h;return t=new Xe({}),t.$on("fkupdated",o[5]),{c(){I(t.$$.fragment),e=K(),n=B("div"),r=B("label"),i=V("World Size:"),a=K(),u=B("input"),c=K(),s=B("canvas"),this.h()},l(m){W(t.$$.fragment,m),e=H(m),n=C(m,"DIV",{});var d=L(n);r=C(d,"LABEL",{for:!0});var g=L(r);i=N(g,"World Size:"),g.forEach(v),a=H(d),u=C(d,"INPUT",{id:!0,type:!0,step:!0}),d.forEach(v),c=H(m),s=C(m,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),L(s).forEach(v),this.h()},h(){_(r,"for","worldSize"),_(u,"id","worldSize"),_(u,"type","number"),_(u,"step","1"),_(s,"id","canvas"),_(s,"width",o[1].width),_(s,"height",o[1].height),_(s,"class","svelte-xd2v0u")},m(m,d){M(t,m,d),w(m,e,d),w(m,n,d),x(n,r),x(r,i),x(n,a),x(n,u),vt(u,o[0]),w(m,c,d),w(m,s,d),l=!0,f||(h=[z(u,"input",o[6]),z(u,"change",o[4]),z(s,"mousemove",o[2]),z(s,"mousedown",rt(o[3])),z(s,"mouseup",o[3]),z(s,"contextmenu",rt(gn))],f=!0)},p(m,[d]){d&1&&Et(u.value)!==m[0]&&vt(u,m[0])},i(m){l||(S(t.$$.fragment,m),l=!0)},o(m){A(t.$$.fragment,m),l=!1},d(m){T(t,m),m&&v(e),m&&v(n),m&&v(c),m&&v(s),f=!1,mt(h)}}}const gn=o=>o;function yn(o,t,e){const n={width:window.innerWidth-50,height:window.innerHeight-10};let r=11;const i={colors:"mrob",initialConditions:"randomSpots",reset:()=>m(),pause:!1},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},u={iteration:0},c={f:j[0].f,k:j[0].k};let s,l;const f=async()=>{const p=await ct(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new p.GUI,s.domElement.setAttribute("style","background-color: black"),s.add(i,"pause").name("Pause"),s.add(i,"reset").name("Reset simulation"),s.add(i,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue"]);const y={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};s.add(i,"initialConditions",y).onFinishChange(i.reset);const b=s.add(u,"iteration").listen();b.domElement.style.pointerEvents="none",s.add(a,"penSize",0,r).name("Pen size"),s.add(a,"penDensity",0,1).name("Pen density"),s.add(a,"zoomLevel",0,1).name("Zoom level"),s.add(a,"panX",0,1).name("pan x"),s.add(a,"panY",0,1).name("pan y")},h=()=>{document.addEventListener("keydown",p=>{if(p.code==="Space")return i.pause=!i.pause,p.preventDefault();if(p.code==="KeyR")return m(),p.preventDefault()})},m=()=>{const p=document.getElementById("canvas");if(!p)throw new Error("Canvas container not ready");l&&l.destroy(),l=ft({extensions:["OES_texture_float"],canvas:p}),u.iteration=0;const y=2**r;let b=Ue(i.initialConditions,y);const E=Array(2).fill(0).map(()=>l.framebuffer({color:l.texture({radius:y,data:b,wrap:"repeat",type:"float"}),depthStencil:!1})),F=l.framebuffer({color:l.texture({radius:y,data:b,wrap:"repeat",type:"float"}),depthStencil:!1});sn(l,E,F),fn(l,F),dn(l,F);const ot=l({frag:Qe,vert:Y,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:J=>E[(J.tick+1)%2],uniforms:{prevState:J=>E[J.tick%2],Da:l.prop("Da"),Db:l.prop("Db"),f:l.prop("f"),k:l.prop("k"),radius:y,pauseSimulation:l.prop("pauseSimulation"),mousePosition:l.prop("mousePosition"),penRadius:l.prop("penRadius"),penDensity:l.prop("penDensity"),penIsActive:l.prop("penIsActive"),eraserIsActive:l.prop("eraserIsActive")}});l.frame(()=>{i.pause||u.iteration++,ot({Da:1,Db:.5,pauseSimulation:i.pause,mousePosition:[a.x,a.y],penRadius:1/2**(r-a.penSize),penDensity:a.penDensity,penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,...c}),ln(i.colors,u),un(a,r),hn(a)})},d=p=>{if(!p.currentTarget)throw new Error("No target for the onmousemove event");if(!p.currentTarget.width||!p.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var y=p.currentTarget.getBoundingClientRect();const b=p.clientX-y.left,E=p.clientY-y.top,{width:F,height:ot}=p.currentTarget,J=b/F,Ft=(ot-E)/ot;a.x=J,a.y=Ft},g=p=>{if(![0,2].includes(p.button)||!["mouseup","mousedown"].includes(p.type))return;let y=p.type==="mousedown";p.button===0&&(a.pressedLeft=y),p.button===2&&(a.pressedRight=y)},$=()=>{isNaN(r)||(r>11&&e(0,r=11),r<1&&e(0,r=1),s?.destroy(),l?.destroy(),f(),m())},P=p=>{c.f=p.detail.f,c.k=p.detail.k};nt(()=>{f(),h(),m()}),it(()=>{s.destroy(),l.destroy()});function O(){r=Et(this.value),e(0,r)}return[r,n,d,g,$,P,O]}class _n extends X{constructor(t){super(),U(this,t,yn,vn,G,{})}}function At(o,t,e){const n=o.slice();return n[1]=t[e],n}function Bt(o,t,e){const n=o.slice();return n[1]=t[e],n}function bn(o){let t;return{c(){t=V("About")},l(e){t=N(e,"About")},m(e,n){w(e,t,n)},d(e){e&&v(t)}}}function $n(o){let t=o[1].title+"",e;return{c(){e=V(t)},l(n){e=N(n,t)},m(n,r){w(n,e,r)},p:R,d(n){n&&v(e)}}}function Ct(o){let t,e;return t=new It({props:{$$slots:{default:[$n]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment)},l(n){W(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function wn(o){let t,e,n,r;t=new It({props:{$$slots:{default:[bn]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let c=0;c<i.length;c+=1)a[c]=Ct(Bt(o,i,c));const u=c=>A(a[c],1,1,()=>{a[c]=null});return{c(){I(t.$$.fragment),e=K();for(let c=0;c<a.length;c+=1)a[c].c();n=at()},l(c){W(t.$$.fragment,c),e=H(c);for(let s=0;s<a.length;s+=1)a[s].l(c);n=at()},m(c,s){M(t,c,s),w(c,e,s);for(let l=0;l<a.length;l+=1)a[l].m(c,s);w(c,n,s),r=!0},p(c,s){const l={};if(s&64&&(l.$$scope={dirty:s,ctx:c}),t.$set(l),s&1){i=c[0];let f;for(f=0;f<i.length;f+=1){const h=Bt(c,i,f);a[f]?(a[f].p(h,s),S(a[f],1)):(a[f]=Ct(h),a[f].c(),S(a[f],1),a[f].m(n.parentNode,n))}for(st(),f=i.length;f<a.length;f+=1)u(f);lt()}},i(c){if(!r){S(t.$$.fragment,c);for(let s=0;s<i.length;s+=1)S(a[s]);r=!0}},o(c){A(t.$$.fragment,c),a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)A(a[s]);r=!1},d(c){T(t,c),c&&v(e),dt(a,c),c&&v(n)}}}function Sn(o){let t,e,n,r,i,a,u,c,s,l,f,h;return{c(){t=B("p"),e=V("Experiments with "),n=B("a"),r=V("Reaction-diffusion systems"),i=K(),a=B("p"),u=V("The code is based on "),c=B("a"),s=V("this tutorial"),l=V(`
                but reimplemented in a glsl shader with
                `),f=B("a"),h=V("regl"),this.h()},l(m){t=C(m,"P",{});var d=L(t);e=N(d,"Experiments with "),n=C(d,"A",{href:!0,target:!0});var g=L(n);r=N(g,"Reaction-diffusion systems"),g.forEach(v),d.forEach(v),i=H(m),a=C(m,"P",{});var $=L(a);u=N($,"The code is based on "),c=C($,"A",{href:!0,target:!0});var P=L(c);s=N(P,"this tutorial"),P.forEach(v),l=N($,`
                but reimplemented in a glsl shader with
                `),f=C($,"A",{href:!0,target:!0});var O=L(f);h=N(O,"regl"),O.forEach(v),$.forEach(v),this.h()},h(){_(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),_(n,"target","none"),_(c,"href","https://karlsims.com/rd.html"),_(c,"target","none"),_(f,"href","https://github.com/regl-project/regl"),_(f,"target","none")},m(m,d){w(m,t,d),x(t,e),x(t,n),x(n,r),w(m,i,d),w(m,a,d),x(a,u),x(a,c),x(c,s),x(a,l),x(a,f),x(f,h)},p:R,d(m){m&&v(t),m&&v(i),m&&v(a)}}}function xn(o){let t,e,n;var r=o[1].component;function i(a){return{}}return r&&(t=gt(r,i())),{c(){t&&I(t.$$.fragment),e=K()},l(a){t&&W(t.$$.fragment,a),e=H(a)},m(a,u){t&&M(t,a,u),w(a,e,u),n=!0},p(a,u){if(r!==(r=a[1].component)){if(t){st();const c=t;A(c.$$.fragment,1,0,()=>{T(c,1)}),lt()}r?(t=gt(r,i()),I(t.$$.fragment),S(t.$$.fragment,1),M(t,e.parentNode,e)):t=null}},i(a){n||(t&&S(t.$$.fragment,a),n=!0)},o(a){t&&A(t.$$.fragment,a),n=!1},d(a){t&&T(t,a),a&&v(e)}}}function Rt(o){let t,e;return t=new Pt({props:{$$slots:{default:[xn]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment)},l(n){W(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function kn(o){let t,e,n,r,i,a;t=new Kt({props:{$$slots:{default:[wn]},$$scope:{ctx:o}}}),n=new Pt({props:{$$slots:{default:[Sn]},$$scope:{ctx:o}}});let u=o[0],c=[];for(let l=0;l<u.length;l+=1)c[l]=Rt(At(o,u,l));const s=l=>A(c[l],1,1,()=>{c[l]=null});return{c(){I(t.$$.fragment),e=K(),I(n.$$.fragment),r=K();for(let l=0;l<c.length;l+=1)c[l].c();i=at()},l(l){W(t.$$.fragment,l),e=H(l),W(n.$$.fragment,l),r=H(l);for(let f=0;f<c.length;f+=1)c[f].l(l);i=at()},m(l,f){M(t,l,f),w(l,e,f),M(n,l,f),w(l,r,f);for(let h=0;h<c.length;h+=1)c[h].m(l,f);w(l,i,f),a=!0},p(l,f){const h={};f&64&&(h.$$scope={dirty:f,ctx:l}),t.$set(h);const m={};if(f&64&&(m.$$scope={dirty:f,ctx:l}),n.$set(m),f&1){u=l[0];let d;for(d=0;d<u.length;d+=1){const g=At(l,u,d);c[d]?(c[d].p(g,f),S(c[d],1)):(c[d]=Rt(g),c[d].c(),S(c[d],1),c[d].m(i.parentNode,i))}for(st(),d=u.length;d<c.length;d+=1)s(d);lt()}},i(l){if(!a){S(t.$$.fragment,l),S(n.$$.fragment,l);for(let f=0;f<u.length;f+=1)S(c[f]);a=!0}},o(l){A(t.$$.fragment,l),A(n.$$.fragment,l),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)A(c[f]);a=!1},d(l){T(t,l),l&&v(e),T(n,l),l&&v(r),dt(c,l),l&&v(i)}}}function Dn(o){let t,e,n;return e=new Ot({props:{$$slots:{default:[kn]},$$scope:{ctx:o}}}),{c(){t=B("div"),I(e.$$.fragment)},l(r){t=C(r,"DIV",{});var i=L(t);W(e.$$.fragment,i),i.forEach(v)},m(r,i){w(r,t,i),M(e,t,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){r&&v(t),T(e)}}}function An(o){return[[{title:"V7",component:_n},{title:"V6",component:Oe},{title:"V5",component:Ee},{title:"V4",component:De},{title:"V3",component:Se},{title:"V2",component:me},{title:"V1",component:oe}]]}class Bn extends X{constructor(t){super(),U(this,t,An,Dn,G,{})}}function Cn(o){let t,e;return t=new Bn({}),{c(){I(t.$$.fragment)},l(n){W(t.$$.fragment,n)},m(n,r){M(t,n,r),e=!0},p:R,i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}class Wn extends X{constructor(t){super(),U(this,t,null,Cn,G,{})}}export{Wn as default};
