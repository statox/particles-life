import{S as R,i as P,s as I,k as E,l as L,m as C,h as d,n as v,b as D,X as ht,B as b,Y as dt,o as Y,w as S,x as B,y as x,f as w,t as k,z as A,Q as ft,a as X,e as U,c as G,g as K,d as z,L as ut,q as T,r as W,D as M,v as J}from"../../../chunks/index-2f3b6d71.js";import{T as gt,a as vt,b as mt,c as pt}from"../../../chunks/TabPanel-e2218539.js";import{_ as Q}from"../../../chunks/preload-helper-41c905a7.js";import{R as Z}from"../../../chunks/regl-89b00fbf.js";function $t(r){let e,t,n;return{c(){e=E("div"),this.h()},l(o){e=L(o,"DIV",{style:!0,class:!0}),C(e).forEach(d),this.h()},h(){v(e,"style",r[0]),v(e,"class","m-0")},m(o,i){D(o,e,i),t||(n=ht(r[1].call(null,e)),t=!0)},p(o,[i]){i&1&&v(e,"style",o[0])},i:b,o:b,d(o){o&&d(e),t=!1,n()}}}function yt(r,e){return e.forEach(([t,n])=>r[t]=n),r}function _t(r,e,t){let{target:n=void 0}=e,{sketch:o=void 0}=e,{parentDivStyle:i="display: block;"}=e,{debug:a=!1}=e,f;const s=dt(),u={ref(){s("ref",n)},instance(){s("instance",f)}};function c(l){return t(2,n=l),{destroy(){t(2,n=void 0)}}}return Y(async()=>{const l=await Q(()=>import("../../../chunks/p5.min-b96f42d1.js").then(g=>g.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:p}=l,m=Object.entries(l).filter(([g,_])=>_ instanceof Function&&g[0]!=="_"&&g!=="default");a&&console.log("available p5 native classes",m),f=new p(g=>(g=yt(g,m),a&&console.log("p5 instance",g),window._p5Instance=g,o(g)),n),u.ref(),u.instance()}),r.$$set=l=>{"target"in l&&t(2,n=l.target),"sketch"in l&&t(3,o=l.sketch),"parentDivStyle"in l&&t(0,i=l.parentDivStyle),"debug"in l&&t(4,a=l.debug)},[i,c,n,o,a]}class j extends R{constructor(e){super(),P(this,e,_t,$t,I,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const wt=r=>{const e=[];for(let a=0;a<r.height;a++){e.push([]);for(let f=0;f<r.width;f++)e[e.length-1].push({A:1,B:0})}const t=5,n=5,o=Math.floor(r.width/2),i=Math.floor(r.height/2);for(let a=i-n;a<i+n;a++)for(let f=o-t;f<o+t;f++)e[a][f].B=1;return e},bt=(r,e)=>{const t={width:r.width/e[0].length,height:r.height/e.length};for(let n=0;n<e.length;n++)for(let o=0;o<e[0].length;o++){const{A:i,B:a}=e[n][o];r.fill(i*255,a*255,0),r.rect(o*t.width,n*t.height,t.width,t.height)}},kt=1,Dt=.5,tt=.055,St=.062,xt=r=>{const e=[];for(let t=0;t<r.length;t++){e.push([]);for(let n=0;n<r[0].length;n++){const{A:o,B:i}=r[t][n],a=et(r,{x:n,y:t},"A"),f=et(r,{x:n,y:t},"B"),s=o+(kt*a-o*i*i+tt*(1-o)),u=i+(Dt*f+o*i*i-(St+tt)*i);e[t].push({A:s,B:u})}}return e},et=(r,e,t)=>{const n=At(r,e);let o=0;for(const i of n){const{coord:a,weight:f}=i;o+=r[a.y][a.x][t]*f}return o},At=(r,e)=>{const{x:t,y:n}=e,o=r[0].length,i=r.length,a={coord:{x:t>0?t-1:o-1,y:n>0?n-1:i-1},weight:.05},f={coord:{x:t,y:n>0?n-1:i-1},weight:.2},s={coord:{x:t<o-1?t+1:0,y:n>0?n-1:i-1},weight:.05},u={coord:{x:t>0?t-1:o-1,y:n},weight:.2},c={coord:{x:t,y:n},weight:-1},l={coord:{x:t<o-1?t+1:0,y:n},weight:.2},p={coord:{x:t>0?t-1:o-1,y:n<i-1?n+1:0},weight:.05},h={coord:{x:t,y:n<i-1?n+1:0},weight:.2},m={coord:{x:t<o-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,f,s,u,c,l,p,h,m]};function Bt(r){let e,t;return e=new j({props:{sketch:r[0]}}),{c(){S(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){x(e,n,o),t=!0},p:b,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Et(r){const e={width:200,height:200};let t;return[o=>{let i;o.setup=()=>{t=o,o.createCanvas(500,500),o.noStroke(),i=wt(e)},o.draw=()=>{o.background(0);for(let a=0;a<20;a++)i=xt(i);bt(t,i)}}]}let Lt=class extends R{constructor(e){super(),P(this,e,Et,Bt,I,{})}},$,N;const Ct=r=>{$=[],N=[];for(let i=0;i<r.height;i++){$.push([]),N.push([]);for(let a=0;a<r.width;a++)$[$.length-1].push({A:1,B:0}),N[$.length-1].push({A:1,B:0})}const e=5,t=5,n=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let i=o-t;i<o+t;i++)for(let a=n-e;a<n+e;a++)$[i][a].B=1;return $},Mt=r=>{const e={width:r.width/$[0].length,height:r.height/$.length};for(let t=0;t<$.length;t++)for(let n=0;n<$[0].length;n++){const{A:o,B:i}=$[t][n];r.fill(o*255,i*255,0),r.rect(n*e.width,t*e.height,e.width,e.height)}},Rt=1,Pt=.5,nt=.055,It=.062,Tt=()=>{for(let e=0;e<$.length;e++)for(let t=0;t<$[0].length;t++){const{A:n,B:o}=$[e][t],i=ot($,{x:t,y:e},"A"),a=ot($,{x:t,y:e},"B"),f=n+(Rt*i-n*o*o+nt*(1-n)),s=o+(Pt*a+n*o*o-(It+nt)*o);N[e][t]={A:f,B:s}}const r=$;return $=N,N=r,$},ot=(r,e,t)=>{const n=Wt(r,e);let o=0;for(const i of n){const{coord:a,weight:f}=i;o+=r[a.y][a.x][t]*f}return o},Wt=(r,e)=>{const{x:t,y:n}=e,o=r[0].length,i=r.length,a={coord:{x:t>0?t-1:o-1,y:n>0?n-1:i-1},weight:.05},f={coord:{x:t,y:n>0?n-1:i-1},weight:.2},s={coord:{x:t<o-1?t+1:0,y:n>0?n-1:i-1},weight:.05},u={coord:{x:t>0?t-1:o-1,y:n},weight:.2},c={coord:{x:t,y:n},weight:-1},l={coord:{x:t<o-1?t+1:0,y:n},weight:.2},p={coord:{x:t>0?t-1:o-1,y:n<i-1?n+1:0},weight:.05},h={coord:{x:t,y:n<i-1?n+1:0},weight:.2},m={coord:{x:t<o-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,f,s,u,c,l,p,h,m]};function Nt(r){let e,t;return e=new j({props:{sketch:r[0]}}),{c(){S(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){x(e,n,o),t=!0},p:b,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Ot(r){const e={width:200,height:200};let t;return[o=>{o.setup=()=>{t=o,o.createCanvas(500,500),o.noStroke(),Ct(e)},o.draw=()=>{for(let i=0;i<5;i++)Tt();Mt(t)}}]}let Vt=class extends R{constructor(e){super(),P(this,e,Ot,Nt,I,{})}},y,O;const Ft=r=>{y=[],O=[];for(let i=0;i<r.height;i++){y.push([]),O.push([]);for(let a=0;a<r.width;a++)y[y.length-1].push({A:1,B:0}),O[y.length-1].push({A:1,B:0})}const e=5,t=5,n=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let i=o-t;i<o+t;i++)for(let a=n-e;a<n+e;a++)y[i][a].B=1;return y},Xt=r=>{const e={width:r.width/y[0].length,height:r.height/y.length};for(let t=0;t<y.length;t++)for(let n=0;n<y[0].length;n++){const{A:o,B:i}=y[t][n];r.fill(o*255,i*255,0),r.rect(n*e.width,t*e.height,e.width,e.height)}},Gt=1,Ut=.5,rt=.055,Yt=.062,Kt=()=>{for(let e=0;e<y.length;e++)for(let t=0;t<y[0].length;t++){const{A:n,B:o}=y[e][t],i=at(y,{x:t,y:e},"A"),a=at(y,{x:t,y:e},"B"),f=n+(Gt*i-n*o*o+rt*(1-n)),s=o+(Ut*a+n*o*o-(Yt+rt)*o);O[e][t]={A:f,B:s}}const r=y;return y=O,O=r,y},at=(r,e,t)=>{const n=zt(r,e);let o=0;for(const i of n){const{coord:a,weight:f}=i;o+=r[a.y][a.x][t]*f}return o},zt=(r,e)=>{const{x:t,y:n}=e,o=r[0].length,i=r.length,a={coord:{x:t>0?t-1:o-1,y:n>0?n-1:i-1},weight:.05},f={coord:{x:t,y:n>0?n-1:i-1},weight:.2},s={coord:{x:t<o-1?t+1:0,y:n>0?n-1:i-1},weight:.05},u={coord:{x:t>0?t-1:o-1,y:n},weight:.2},c={coord:{x:t,y:n},weight:-1},l={coord:{x:t<o-1?t+1:0,y:n},weight:.2},p={coord:{x:t>0?t-1:o-1,y:n<i-1?n+1:0},weight:.05},h={coord:{x:t,y:n<i-1?n+1:0},weight:.2},m={coord:{x:t<o-1?t+1:0,y:n<i-1?n+1:0},weight:.05};return[a,f,s,u,c,l,p,h,m]};function Qt(r){let e,t;return e=new j({props:{sketch:r[0]}}),{c(){S(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){x(e,n,o),t=!0},p:b,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Zt(r){const e={width:200,height:200};let t;return[o=>{o.setup=()=>{t=o,o.createCanvas(500,500),o.noStroke(),Ft(e)},o.draw=()=>{for(let i=0;i<5;i++)Kt();Xt(t)}}]}let jt=class extends R{constructor(e){super(),P(this,e,Zt,Qt,I,{})}};function Ht(r){let e;return{c(){e=E("canvas"),this.h()},l(t){e=L(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(e).forEach(d),this.h()},h(){v(e,"id","canvas"),v(e,"width",r[0].width),v(e,"height",r[0].height),v(e,"class","svelte-1b0ol19")},m(t,n){D(t,e,n)},p:b,i:b,o:b,d(t){t&&d(e)}}}function qt(r){const e={width:window.innerWidth-50,height:window.innerHeight-10},t=2**10,n=t*.05,o=Array(t*t).fill(0).map((i,a)=>{const f=Math.floor(a/t),s=a%t;return Math.hypot(t/2-s,t/2-f)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return Y(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=Z({extensions:["OES_texture_float"],canvas:i}),f=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:t,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),s=a({frag:`
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
}`,framebuffer:c=>f[(c.tick+1)%2]}),u=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>f[c%2]},depth:{enable:!1},count:3});a.frame(()=>{u(()=>{a.draw(),s()})})}),[e]}let Jt=class extends R{constructor(e){super(),P(this,e,qt,Ht,I,{})}};const te=(r,e,t)=>{const n=r*t;return Array(r*r).fill(0).map((o,i)=>{const a=Math.floor(i/r),f=i%r;return Math.hypot(r/2-f,r/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},ee=(r,e)=>Array(r*r).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),ne=(r,e)=>Array(r*r).fill(0).map((t,n)=>{const o=Math.floor(n/r),i=n%r;return Math.hypot(r/2-i,r/2-o)<e*r?[0,1,0,1]:[1,0,0,1]}).flat(),V=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function oe(r){let e;return{c(){e=E("canvas"),this.h()},l(t){e=L(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(e).forEach(d),this.h()},h(){v(e,"id","canvas"),v(e,"width",r[0].width),v(e,"height",r[0].height),v(e,"class","svelte-1b0ol19")},m(t,n){D(t,e,n)},p:b,i:b,o:b,d(t){t&&d(e)}}}function re(r){const e={width:window.innerWidth-50,height:window.innerHeight-10},t={presetParams:4,initialConditions:"randomSpots",reset:()=>u(),pause:!1},n={iteration:0},o={f:V[t.presetParams].f,k:V[t.presetParams].k};let i,a;const f=async()=>{const c=await Q(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new c.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(o,"f").name("Feed rate").listen(),i.add(o,"k").name("Kill rate").listen(),i.add(t,"pause").name("Pause"),i.add(t,"reset").name("Reset simulation");const l=V.reduce((m,g,_)=>(m[g.name]=_,m),{});i.add(t,"presetParams",l).onFinishChange(()=>{o.f=V[t.presetParams].f,o.k=V[t.presetParams].k});const p={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(t,"initialConditions",p).onFinishChange(t.reset);const h=i.add(n,"iteration").listen();h.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return t.pause=!t.pause,c.preventDefault();if(c.code==="KeyR")return u(),c.preventDefault()})},u=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");a&&a.destroy(),a=Z({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const l=2**11;let p;t.initialConditions==="randomSpots"?p=ee(l,.001):t.initialConditions==="middleCircleAndRandomSpots"?p=te(l,.005,.05):p=ne(l,.02);const h=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:l,data:p,wrap:"repeat",type:"float"}),depthStencil:!1})),m=a({frag:`
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
}`,framebuffer:_=>h[(_.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),g=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:_})=>h[_%2]},depth:{enable:!1},count:3});a.frame(()=>{g(()=>{a.draw(),!t.pause&&(n.iteration++,m({Da:1,Db:.5,...o}))})})};return Y(()=>{f(),s(),u()}),ft(()=>{i.destroy(),a.destroy()}),[e]}let ae=class extends R{constructor(e){super(),P(this,e,re,oe,I,{})}};const ie=(r,e,t)=>{const n=r*t;return Array(r*r).fill(0).map((o,i)=>{const a=Math.floor(i/r),f=i%r;return Math.hypot(r/2-f,r/2-a)<n?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},se=(r,e)=>Array(r*r).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),le=(r,e)=>Array(r*r).fill(0).map((t,n)=>{const o=Math.floor(n/r),i=n%r;return Math.hypot(r/2-i,r/2-o)<e*r?[0,1,0,1]:[1,0,0,1]}).flat(),F=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],ce=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,fe=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,ue=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

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

    gl_FragColor = vec4(newA, newB, 0, 1);
}
`;function me(r){let e;return{c(){e=E("canvas"),this.h()},l(t){e=L(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(e).forEach(d),this.h()},h(){v(e,"id","canvas"),v(e,"width",r[0].width),v(e,"height",r[0].height),v(e,"class","svelte-1b0ol19")},m(t,n){D(t,e,n)},p:b,i:b,o:b,d(t){t&&d(e)}}}function pe(r){const e={width:window.innerWidth-50,height:window.innerHeight-10},t={presetParams:4,initialConditions:"randomSpots",reset:()=>u(),pause:!1},n={iteration:0},o={f:F[t.presetParams].f,k:F[t.presetParams].k};let i,a;const f=async()=>{const c=await Q(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new c.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(o,"f").name("Feed rate").listen(),i.add(o,"k").name("Kill rate").listen(),i.add(t,"pause").name("Pause"),i.add(t,"reset").name("Reset simulation");const l=F.reduce((m,g,_)=>(m[g.name]=_,m),{});i.add(t,"presetParams",l).onFinishChange(()=>{o.f=F[t.presetParams].f,o.k=F[t.presetParams].k});const p={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(t,"initialConditions",p).onFinishChange(t.reset);const h=i.add(n,"iteration").listen();h.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return t.pause=!t.pause,c.preventDefault();if(c.code==="KeyR")return u(),c.preventDefault()})},u=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");a&&a.destroy(),a=Z({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const l=2**11;let p;t.initialConditions==="randomSpots"?p=se(l,.001):t.initialConditions==="middleCircleAndRandomSpots"?p=ie(l,.005,.05):p=le(l,.02);const h=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:l,data:p,wrap:"repeat",type:"float"}),depthStencil:!1})),m=a({frag:ue,framebuffer:_=>h[(_.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k"),radius:l}}),g=a({frag:fe,vert:ce,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:_})=>h[_%2]},depth:{enable:!1},count:3});a.frame(()=>{g(()=>{a.draw(),!t.pause&&(n.iteration++,m({Da:1,Db:.5,...o}))})})};return Y(()=>{f(),s(),u()}),ft(()=>{i.destroy(),a.destroy()}),[e]}class he extends R{constructor(e){super(),P(this,e,pe,me,I,{})}}function it(r,e,t){const n=r.slice();return n[1]=e[t],n}function st(r,e,t){const n=r.slice();return n[1]=e[t],n}function de(r){let e;return{c(){e=T("About")},l(t){e=W(t,"About")},m(t,n){D(t,e,n)},d(t){t&&d(e)}}}function ge(r){let e=r[1].title+"",t;return{c(){t=T(e)},l(n){t=W(n,e)},m(n,o){D(n,t,o)},p:b,d(n){n&&d(t)}}}function lt(r){let e,t;return e=new pt({props:{$$slots:{default:[ge]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){x(e,n,o),t=!0},p(n,o){const i={};o&64&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function ve(r){let e,t,n,o;e=new pt({props:{$$slots:{default:[de]},$$scope:{ctx:r}}});let i=r[0],a=[];for(let s=0;s<i.length;s+=1)a[s]=lt(st(r,i,s));const f=s=>k(a[s],1,1,()=>{a[s]=null});return{c(){S(e.$$.fragment),t=X();for(let s=0;s<a.length;s+=1)a[s].c();n=U()},l(s){B(e.$$.fragment,s),t=G(s);for(let u=0;u<a.length;u+=1)a[u].l(s);n=U()},m(s,u){x(e,s,u),D(s,t,u);for(let c=0;c<a.length;c+=1)a[c].m(s,u);D(s,n,u),o=!0},p(s,u){const c={};if(u&64&&(c.$$scope={dirty:u,ctx:s}),e.$set(c),u&1){i=s[0];let l;for(l=0;l<i.length;l+=1){const p=st(s,i,l);a[l]?(a[l].p(p,u),w(a[l],1)):(a[l]=lt(p),a[l].c(),w(a[l],1),a[l].m(n.parentNode,n))}for(K(),l=i.length;l<a.length;l+=1)f(l);z()}},i(s){if(!o){w(e.$$.fragment,s);for(let u=0;u<i.length;u+=1)w(a[u]);o=!0}},o(s){k(e.$$.fragment,s),a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)k(a[u]);o=!1},d(s){A(e,s),s&&d(t),ut(a,s),s&&d(n)}}}function $e(r){let e,t,n,o,i,a,f,s,u,c,l,p;return{c(){e=E("p"),t=T("Experiments with "),n=E("a"),o=T("Reaction-diffusion systems"),i=X(),a=E("p"),f=T("The code is based on "),s=E("a"),u=T("this tutorial"),c=T(`
                but reimplemented in a glsl shader with
                `),l=E("a"),p=T("regl"),this.h()},l(h){e=L(h,"P",{});var m=C(e);t=W(m,"Experiments with "),n=L(m,"A",{href:!0,target:!0});var g=C(n);o=W(g,"Reaction-diffusion systems"),g.forEach(d),m.forEach(d),i=G(h),a=L(h,"P",{});var _=C(a);f=W(_,"The code is based on "),s=L(_,"A",{href:!0,target:!0});var H=C(s);u=W(H,"this tutorial"),H.forEach(d),c=W(_,`
                but reimplemented in a glsl shader with
                `),l=L(_,"A",{href:!0,target:!0});var q=C(l);p=W(q,"regl"),q.forEach(d),_.forEach(d),this.h()},h(){v(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),v(n,"target","none"),v(s,"href","https://karlsims.com/rd.html"),v(s,"target","none"),v(l,"href","https://github.com/regl-project/regl"),v(l,"target","none")},m(h,m){D(h,e,m),M(e,t),M(e,n),M(n,o),D(h,i,m),D(h,a,m),M(a,f),M(a,s),M(s,u),M(a,c),M(a,l),M(l,p)},p:b,d(h){h&&d(e),h&&d(i),h&&d(a)}}}function ye(r){let e,t,n;var o=r[1].component;function i(a){return{}}return o&&(e=J(o,i())),{c(){e&&S(e.$$.fragment),t=X()},l(a){e&&B(e.$$.fragment,a),t=G(a)},m(a,f){e&&x(e,a,f),D(a,t,f),n=!0},p(a,f){if(o!==(o=a[1].component)){if(e){K();const s=e;k(s.$$.fragment,1,0,()=>{A(s,1)}),z()}o?(e=J(o,i()),S(e.$$.fragment),w(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}},i(a){n||(e&&w(e.$$.fragment,a),n=!0)},o(a){e&&k(e.$$.fragment,a),n=!1},d(a){e&&A(e,a),a&&d(t)}}}function ct(r){let e,t;return e=new mt({props:{$$slots:{default:[ye]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){x(e,n,o),t=!0},p(n,o){const i={};o&64&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function _e(r){let e,t,n,o,i,a;e=new vt({props:{$$slots:{default:[ve]},$$scope:{ctx:r}}}),n=new mt({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}});let f=r[0],s=[];for(let c=0;c<f.length;c+=1)s[c]=ct(it(r,f,c));const u=c=>k(s[c],1,1,()=>{s[c]=null});return{c(){S(e.$$.fragment),t=X(),S(n.$$.fragment),o=X();for(let c=0;c<s.length;c+=1)s[c].c();i=U()},l(c){B(e.$$.fragment,c),t=G(c),B(n.$$.fragment,c),o=G(c);for(let l=0;l<s.length;l+=1)s[l].l(c);i=U()},m(c,l){x(e,c,l),D(c,t,l),x(n,c,l),D(c,o,l);for(let p=0;p<s.length;p+=1)s[p].m(c,l);D(c,i,l),a=!0},p(c,l){const p={};l&64&&(p.$$scope={dirty:l,ctx:c}),e.$set(p);const h={};if(l&64&&(h.$$scope={dirty:l,ctx:c}),n.$set(h),l&1){f=c[0];let m;for(m=0;m<f.length;m+=1){const g=it(c,f,m);s[m]?(s[m].p(g,l),w(s[m],1)):(s[m]=ct(g),s[m].c(),w(s[m],1),s[m].m(i.parentNode,i))}for(K(),m=f.length;m<s.length;m+=1)u(m);z()}},i(c){if(!a){w(e.$$.fragment,c),w(n.$$.fragment,c);for(let l=0;l<f.length;l+=1)w(s[l]);a=!0}},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)k(s[l]);a=!1},d(c){A(e,c),c&&d(t),A(n,c),c&&d(o),ut(s,c),c&&d(i)}}}function we(r){let e,t,n;return t=new gt({props:{$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){e=E("div"),S(t.$$.fragment)},l(o){e=L(o,"DIV",{});var i=C(e);B(t.$$.fragment,i),i.forEach(d)},m(o,i){D(o,e,i),x(t,e,null),n=!0},p(o,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:o}),t.$set(a)},i(o){n||(w(t.$$.fragment,o),n=!0)},o(o){k(t.$$.fragment,o),n=!1},d(o){o&&d(e),A(t)}}}function be(r){return[[{title:"V6",component:he},{title:"V5",component:ae},{title:"V4",component:Jt},{title:"V3",component:jt},{title:"V2",component:Vt},{title:"V1",component:Lt}]]}class ke extends R{constructor(e){super(),P(this,e,be,we,I,{})}}function De(r){let e,t;return e=new ke({}),{c(){S(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){x(e,n,o),t=!0},p:b,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}class Pe extends R{constructor(e){super(),P(this,e,null,De,I,{})}}export{Pe as default};
