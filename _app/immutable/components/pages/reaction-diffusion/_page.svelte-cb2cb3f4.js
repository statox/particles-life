import{S as M,i as T,s as F,k as E,l as L,m as I,h as y,n as $,b as x,X as Bt,B as D,Y as Ct,o as tt,w as B,x as R,y as C,f as b,t as k,z as P,Q as rt,K as z,Z as nt,M as bt,a as Z,c as Q,e as ot,g as ct,d as ft,L as _t,q as W,r as N,D as V,v as ut}from"../../../chunks/index-8c90984f.js";import{T as Pt,a as Rt,b as kt,c as xt}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as at}from"../../../chunks/preload-helper-41c905a7.js";import{R as it}from"../../../chunks/regl-89b00fbf.js";function Et(o){let t,n,e;return{c(){t=E("div"),this.h()},l(r){t=L(r,"DIV",{style:!0,class:!0}),I(t).forEach(y),this.h()},h(){$(t,"style",o[0]),$(t,"class","m-0")},m(r,a){x(r,t,a),n||(e=Bt(o[1].call(null,t)),n=!0)},p(r,[a]){a&1&&$(t,"style",r[0])},i:D,o:D,d(r){r&&y(t),n=!1,e()}}}function Lt(o,t){return t.forEach(([n,e])=>o[n]=e),o}function It(o,t,n){let{target:e=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:a="display: block;"}=t,{debug:i=!1}=t,l;const s=Ct(),u={ref(){s("ref",e)},instance(){s("instance",l)}};function c(f){return n(2,e=f),{destroy(){n(2,e=void 0)}}}return tt(async()=>{const f=await at(()=>import("../../../chunks/p5.min-b96f42d1.js").then(v=>v.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:m}=f,p=Object.entries(f).filter(([v,h])=>h instanceof Function&&v[0]!=="_"&&v!=="default");i&&console.log("available p5 native classes",p),l=new m(v=>(v=Lt(v,p),i&&console.log("p5 instance",v),window._p5Instance=v,r(v)),e),u.ref(),u.instance()}),o.$$set=f=>{"target"in f&&n(2,e=f.target),"sketch"in f&&n(3,r=f.sketch),"parentDivStyle"in f&&n(0,a=f.parentDivStyle),"debug"in f&&n(4,i=f.debug)},[a,c,e,r,i]}class st extends M{constructor(t){super(),T(this,t,It,Et,F,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Mt=o=>{const t=[];for(let i=0;i<o.height;i++){t.push([]);for(let l=0;l<o.width;l++)t[t.length-1].push({A:1,B:0})}const n=5,e=5,r=Math.floor(o.width/2),a=Math.floor(o.height/2);for(let i=a-e;i<a+e;i++)for(let l=r-n;l<r+n;l++)t[i][l].B=1;return t},Tt=(o,t)=>{const n={width:o.width/t[0].length,height:o.height/t.length};for(let e=0;e<t.length;e++)for(let r=0;r<t[0].length;r++){const{A:a,B:i}=t[e][r];o.fill(a*255,i*255,0),o.rect(r*n.width,e*n.height,n.width,n.height)}},Ft=1,Vt=.5,mt=.055,Wt=.062,Nt=o=>{const t=[];for(let n=0;n<o.length;n++){t.push([]);for(let e=0;e<o[0].length;e++){const{A:r,B:a}=o[n][e],i=pt(o,{x:e,y:n},"A"),l=pt(o,{x:e,y:n},"B"),s=r+(Ft*i-r*a*a+mt*(1-r)),u=a+(Vt*l+r*a*a-(Wt+mt)*a);t[n].push({A:s,B:u})}}return t},pt=(o,t,n)=>{const e=Ot(o,t);let r=0;for(const a of e){const{coord:i,weight:l}=a;r+=o[i.y][i.x][n]*l}return r},Ot=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,a=o.length,i={coord:{x:n>0?n-1:r-1,y:e>0?e-1:a-1},weight:.05},l={coord:{x:n,y:e>0?e-1:a-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:a-1},weight:.05},u={coord:{x:n>0?n-1:r-1,y:e},weight:.2},c={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},m={coord:{x:n>0?n-1:r-1,y:e<a-1?e+1:0},weight:.05},d={coord:{x:n,y:e<a-1?e+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:e<a-1?e+1:0},weight:.05};return[i,l,s,u,c,f,m,d,p]};function Ht(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:D,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function zt(o){const t={width:200,height:200};let n;return[r=>{let a;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),a=Mt(t)},r.draw=()=>{r.background(0);for(let i=0;i<20;i++)a=Nt(a);Tt(n,a)}}]}let Kt=class extends M{constructor(t){super(),T(this,t,zt,Ht,F,{})}},w,Y;const Ut=o=>{w=[],Y=[];for(let a=0;a<o.height;a++){w.push([]),Y.push([]);for(let i=0;i<o.width;i++)w[w.length-1].push({A:1,B:0}),Y[w.length-1].push({A:1,B:0})}const t=5,n=5,e=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let a=r-n;a<r+n;a++)for(let i=e-t;i<e+t;i++)w[a][i].B=1;return w},Xt=o=>{const t={width:o.width/w[0].length,height:o.height/w.length};for(let n=0;n<w.length;n++)for(let e=0;e<w[0].length;e++){const{A:r,B:a}=w[n][e];o.fill(r*255,a*255,0),o.rect(e*t.width,n*t.height,t.width,t.height)}},Gt=1,Yt=.5,dt=.055,qt=.062,Zt=()=>{for(let t=0;t<w.length;t++)for(let n=0;n<w[0].length;n++){const{A:e,B:r}=w[t][n],a=ht(w,{x:n,y:t},"A"),i=ht(w,{x:n,y:t},"B"),l=e+(Gt*a-e*r*r+dt*(1-e)),s=r+(Yt*i+e*r*r-(qt+dt)*r);Y[t][n]={A:l,B:s}}const o=w;return w=Y,Y=o,w},ht=(o,t,n)=>{const e=Qt(o,t);let r=0;for(const a of e){const{coord:i,weight:l}=a;r+=o[i.y][i.x][n]*l}return r},Qt=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,a=o.length,i={coord:{x:n>0?n-1:r-1,y:e>0?e-1:a-1},weight:.05},l={coord:{x:n,y:e>0?e-1:a-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:a-1},weight:.05},u={coord:{x:n>0?n-1:r-1,y:e},weight:.2},c={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},m={coord:{x:n>0?n-1:r-1,y:e<a-1?e+1:0},weight:.05},d={coord:{x:n,y:e<a-1?e+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:e<a-1?e+1:0},weight:.05};return[i,l,s,u,c,f,m,d,p]};function jt(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:D,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Jt(o){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),Ut(t)},r.draw=()=>{for(let a=0;a<5;a++)Zt();Xt(n)}}]}let te=class extends M{constructor(t){super(),T(this,t,Jt,jt,F,{})}},S,q;const ee=o=>{S=[],q=[];for(let a=0;a<o.height;a++){S.push([]),q.push([]);for(let i=0;i<o.width;i++)S[S.length-1].push({A:1,B:0}),q[S.length-1].push({A:1,B:0})}const t=5,n=5,e=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let a=r-n;a<r+n;a++)for(let i=e-t;i<e+t;i++)S[a][i].B=1;return S},ne=o=>{const t={width:o.width/S[0].length,height:o.height/S.length};for(let n=0;n<S.length;n++)for(let e=0;e<S[0].length;e++){const{A:r,B:a}=S[n][e];o.fill(r*255,a*255,0),o.rect(e*t.width,n*t.height,t.width,t.height)}},oe=1,re=.5,vt=.055,ae=.062,ie=()=>{for(let t=0;t<S.length;t++)for(let n=0;n<S[0].length;n++){const{A:e,B:r}=S[t][n],a=gt(S,{x:n,y:t},"A"),i=gt(S,{x:n,y:t},"B"),l=e+(oe*a-e*r*r+vt*(1-e)),s=r+(re*i+e*r*r-(ae+vt)*r);q[t][n]={A:l,B:s}}const o=S;return S=q,q=o,S},gt=(o,t,n)=>{const e=se(o,t);let r=0;for(const a of e){const{coord:i,weight:l}=a;r+=o[i.y][i.x][n]*l}return r},se=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,a=o.length,i={coord:{x:n>0?n-1:r-1,y:e>0?e-1:a-1},weight:.05},l={coord:{x:n,y:e>0?e-1:a-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:a-1},weight:.05},u={coord:{x:n>0?n-1:r-1,y:e},weight:.2},c={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},m={coord:{x:n>0?n-1:r-1,y:e<a-1?e+1:0},weight:.05},d={coord:{x:n,y:e<a-1?e+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:e<a-1?e+1:0},weight:.05};return[i,l,s,u,c,f,m,d,p]};function le(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:D,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function ce(o){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),ee(t)},r.draw=()=>{for(let a=0;a<5;a++)ie();ne(n)}}]}let fe=class extends M{constructor(t){super(),T(this,t,ce,le,F,{})}};function ue(o){let t;return{c(){t=E("canvas"),this.h()},l(n){t=L(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(y),this.h()},h(){$(t,"id","canvas"),$(t,"width",o[0].width),$(t,"height",o[0].height),$(t,"class","svelte-1b0ol19")},m(n,e){x(n,t,e)},p:D,i:D,o:D,d(n){n&&y(t)}}}function me(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,e=n*.05,r=Array(n*n).fill(0).map((a,i)=>{const l=Math.floor(i/n),s=i%n;return Math.hypot(n/2-s,n/2-l)<e?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return tt(()=>{const a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=it({extensions:["OES_texture_float"],canvas:a}),l=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),s=i({frag:`
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
}`,framebuffer:c=>l[(c.tick+1)%2]}),u=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>l[c%2]},depth:{enable:!1},count:3});i.frame(()=>{u(()=>{i.draw(),s()})})}),[t]}let pe=class extends M{constructor(t){super(),T(this,t,me,ue,F,{})}};const de=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),l=a%o;return Math.hypot(o/2-l,o/2-i)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},he=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ve=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),a=e%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function ge(o){let t;return{c(){t=E("canvas"),this.h()},l(n){t=L(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(y),this.h()},h(){$(t,"id","canvas"),$(t,"width",o[0].width),$(t,"height",o[0].height),$(t,"class","svelte-1b0ol19")},m(n,e){x(n,t,e)},p:D,i:D,o:D,d(n){n&&y(t)}}}function ye(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>u(),pause:!1},e={iteration:0},r={f:j[n.presetParams].f,k:j[n.presetParams].k};let a,i;const l=async()=>{const c=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new c.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(r,"f").name("Feed rate").listen(),a.add(r,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const f=j.reduce((p,v,h)=>(p[v.name]=h,p),{});a.add(n,"presetParams",f).onFinishChange(()=>{r.f=j[n.presetParams].f,r.k=j[n.presetParams].k});const m={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",m).onFinishChange(n.reset);const d=a.add(e,"iteration").listen();d.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return n.pause=!n.pause,c.preventDefault();if(c.code==="KeyR")return u(),c.preventDefault()})},u=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");i&&i.destroy(),i=it({extensions:["OES_texture_float"],canvas:c}),e.iteration=0;const f=2**11;let m;n.initialConditions==="randomSpots"?m=he(f,.001):n.initialConditions==="middleCircleAndRandomSpots"?m=de(f,.005,.05):m=ve(f,.02);const d=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:f,data:m,wrap:"repeat",type:"float"}),depthStencil:!1})),p=i({frag:`
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
}`,framebuffer:h=>d[(h.tick+1)%2],uniforms:{Da:i.prop("Da"),Db:i.prop("Db"),f:i.prop("f"),k:i.prop("k")}}),v=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:h})=>d[h%2]},depth:{enable:!1},count:3});i.frame(()=>{v(()=>{i.draw(),!n.pause&&(e.iteration++,p({Da:1,Db:.5,...r}))})})};return tt(()=>{l(),s(),u()}),rt(()=>{a.destroy(),i.destroy()}),[t]}let $e=class extends M{constructor(t){super(),T(this,t,ye,ge,F,{})}};const we=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),l=a%o;return Math.hypot(o/2-l,o/2-i)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Se=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),be=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),a=e%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),J=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],_e=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,ke=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,xe=`precision mediump float;

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
`;function De(o){let t,n,e;return{c(){t=E("canvas"),this.h()},l(r){t=L(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(y),this.h()},h(){$(t,"id","canvas"),$(t,"width",o[0].width),$(t,"height",o[0].height),$(t,"class","svelte-1b0ol19")},m(r,a){x(r,t,a),n||(e=[z(t,"mousemove",o[1]),z(t,"mousedown",nt(o[2])),z(t,"mouseup",o[2]),z(t,"contextmenu",nt(Ae))],n=!0)},p:D,i:D,o:D,d(r){r&&y(t),n=!1,bt(e)}}}const lt=11,Ae=o=>o;function Be(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>c(),pause:!1},e={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},a={f:J[n.presetParams].f,k:J[n.presetParams].k};let i,l;const s=async()=>{const d=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new d.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(a,"f").name("Feed rate").listen(),i.add(a,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const p=J.reduce((g,_,A)=>(g[_.name]=A,g),{});i.add(n,"presetParams",p).onFinishChange(()=>{a.f=J[n.presetParams].f,a.k=J[n.presetParams].k});const v={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",v).onFinishChange(n.reset);const h=i.add(r,"iteration").listen();h.domElement.style.pointerEvents="none",i.add(e,"penSize",1,lt,1).name("Pen size")},u=()=>{document.addEventListener("keydown",d=>{if(d.code==="Space")return n.pause=!n.pause,d.preventDefault();if(d.code==="KeyR")return c(),d.preventDefault()})},c=()=>{const d=document.getElementById("canvas");if(!d)throw new Error("Canvas container not ready");l&&l.destroy(),l=it({extensions:["OES_texture_float"],canvas:d}),r.iteration=0;const p=2**lt;let v;n.initialConditions==="randomSpots"?v=Se(p,.001):n.initialConditions==="middleCircleAndRandomSpots"?v=we(p,.005,.05):v=be(p,.02);const h=Array(2).fill(0).map(()=>l.framebuffer({color:l.texture({radius:p,data:v,wrap:"repeat",type:"float"}),depthStencil:!1})),g=l({frag:xe,framebuffer:A=>h[(A.tick+1)%2],uniforms:{Da:l.prop("Da"),Db:l.prop("Db"),f:l.prop("f"),k:l.prop("k"),radius:p,pauseSimulation:l.prop("pauseSimulation"),mousePosition:l.prop("mousePosition"),penRadius:l.prop("penRadius"),penIsActive:l.prop("penIsActive"),eraserIsActive:l.prop("eraserIsActive")}}),_=l({frag:ke,vert:_e,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:A})=>h[A%2]},depth:{enable:!1},count:3});l.frame(()=>{_(()=>{l.draw(),n.pause||r.iteration++,g({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[e.x,e.y],penRadius:1/2**(lt-e.penSize),penIsActive:e.pressedLeft,eraserIsActive:e.pressedRight,...a})})})},f=d=>{if(!d.currentTarget)throw new Error("No target for the onmousemove event");if(!d.currentTarget.width||!d.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:v}=d,{width:h,height:g}=d.currentTarget,_=p/h,A=(g-v)/g;e.x=_,e.y=A},m=d=>{if(![0,2].includes(d.button)||!["mouseup","mousedown"].includes(d.type))return;let p=d.type==="mousedown";d.button===0&&(e.pressedLeft=p),d.button===2&&(e.pressedRight=p)};return tt(()=>{s(),u(),c()}),rt(()=>{i.destroy(),l.destroy()}),[t,f,m]}let Ce=class extends M{constructor(t){super(),T(this,t,Be,De,F,{})}};const G=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Pe(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:D,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Re(o,t,n){let{f:e}=t,{k:r}=t,{onUpdateParams:a}=t;const i=[.01,.09],l=[.01,.08],s=m=>{const{f:d,k:p}=m,v=c.map(p,l[0],l[1],0,c.width),h=c.map(d,i[0],i[1],0,c.height);return{x:v,y:h}},u=m=>{const{x:d,y:p}=m,v=c.map(p,0,c.height,i[0],i[1]),h=c.map(d,0,c.width,l[0],l[1]);return{f:v,k:h}};let c;const f=m=>{let d;m.preload=()=>{d=m.loadImage("/pearson-space.png")},m.setup=()=>{c=m,m.createCanvas(500,500)},m.draw=()=>{m.image(d,0,0,m.width,m.height),m.fill("red");for(const h of G){const{x:g,y:_}=s({f:h.f,k:h.k});m.circle(g,_,10),m.text(h.name,g-m.textWidth(h.name)/2,_-10)}m.fill("blue");const{x:p,y:v}=s({f:e,k:r});m.line(0,v,m.width,v),m.line(p,0,p,m.height),m.circle(p,v,10)},m.mousePressed=()=>{const p=m.mouseX,v=m.mouseY;if(p<0||v<0||p>m.width||v>m.height)return;const{f:h,k:g}=u({x:m.mouseX,y:m.mouseY});a({f:h,k:g})}};return rt(()=>c.remove()),o.$$set=m=>{"f"in m&&n(1,e=m.f),"k"in m&&n(2,r=m.k),"onUpdateParams"in m&&n(3,a=m.onUpdateParams)},[f,e,r,a]}class Ee extends M{constructor(t){super(),T(this,t,Re,Pe,F,{f:1,k:2,onUpdateParams:3})}}const Le=(o,t)=>o==="randomSpots"?Te(t,.001):o==="middleCircleAndRandomSpots"?Ie(t,.005,.05):o==="empty"?Me(t):Fe(t,.02),Ie=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),l=a%o;return Math.hypot(o/2-l,o/2-i)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Me=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Te=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Fe=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),a=e%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),O=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ve=`precision mediump float;

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
`,We=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Ne=`precision mediump float;

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
`,Oe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,He=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,ze=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Ke=`precision mediump float;

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
`,H={},Ue=(o,t,n)=>{H.raw=o({frag:We,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),H.grayscale=o({frag:Oe,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),H.blackwhite=o({frag:He,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),H.whiteblack=o({frag:ze,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),H.timebasedblue=o({frag:Ne,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),H.lerp=o({frag:Ke,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}})},Xe=(o,t)=>{(H[o]||H.raw)({iteration:t.iteration})};let Dt;const Ge=(o,t)=>{Dt=o({frag:`
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
    }`,vert:O,attributes:{position:[[-1,-1],[-1,1],[1,-1],[1,-1],[-1,1],[1,1]]},uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),prevState:t},depth:{enable:!1},primitive:"triangles",count:6})},Ye=(o,t)=>{Dt({mousePosition:[o.x,o.y],penRadius:1/2**(t-o.penSize)})};function qe(o){let t,n,e,r,a,i;return t=new Ee({props:{f:o[0].f,k:o[0].k,onUpdateParams:o[4]}}),{c(){B(t.$$.fragment),n=Z(),e=E("canvas"),this.h()},l(l){R(t.$$.fragment,l),n=Q(l),e=L(l,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(e).forEach(y),this.h()},h(){$(e,"id","canvas"),$(e,"width",o[1].width),$(e,"height",o[1].height),$(e,"class","svelte-fc0fp8")},m(l,s){C(t,l,s),x(l,n,s),x(l,e,s),r=!0,a||(i=[z(e,"mousemove",o[2]),z(e,"mousedown",nt(o[3])),z(e,"mouseup",o[3]),z(e,"contextmenu",nt(Ze))],a=!0)},p(l,[s]){const u={};s&1&&(u.f=l[0].f),s&1&&(u.k=l[0].k),s&1&&(u.onUpdateParams=l[4]),t.$set(u)},i(l){r||(b(t.$$.fragment,l),r=!0)},o(l){k(t.$$.fragment,l),r=!1},d(l){P(t,l),l&&y(n),l&&y(e),a=!1,bt(i)}}}const et=11,Ze=o=>o;function Qe(o,t,n){const e={width:window.innerWidth-50,height:window.innerHeight-10},r={presetParams:4,colors:"lerp",initialConditions:"randomSpots",reset:()=>m(),pause:!1},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3},i={iteration:0},l={f:G[r.presetParams].f,k:G[r.presetParams].k};let s,u;const c=async()=>{const h=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new h.GUI,s.domElement.setAttribute("style","background-color: black"),s.add(l,"f").name("Feed rate").listen(),s.add(l,"k").name("Kill rate").listen(),s.add(r,"pause").name("Pause"),s.add(r,"reset").name("Reset simulation"),s.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp"]);const g=G.reduce((K,X,U)=>(K[X.name]=U,K),{});s.add(r,"presetParams",g).onFinishChange(()=>{n(0,l.f=G[r.presetParams].f,l),n(0,l.k=G[r.presetParams].k,l)});const _={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};s.add(r,"initialConditions",_).onFinishChange(r.reset);const A=s.add(i,"iteration").listen();A.domElement.style.pointerEvents="none",s.add(a,"penSize",1,et).name("Pen size"),s.add(a,"penDensity",0,1).name("Pen density")},f=()=>{document.addEventListener("keydown",h=>{if(h.code==="Space")return r.pause=!r.pause,h.preventDefault();if(h.code==="KeyR")return m(),h.preventDefault()})},m=()=>{const h=document.getElementById("canvas");if(!h)throw new Error("Canvas container not ready");u&&u.destroy(),u=it({extensions:["OES_texture_float"],canvas:h}),i.iteration=0;const g=2**et;let _=Le(r.initialConditions,g);const A=Array(2).fill(0).map(()=>u.framebuffer({color:u.texture({radius:g,data:_,wrap:"repeat",type:"float"}),depthStencil:!1})),K=u.framebuffer({color:u.texture({radius:g,data:_,wrap:"repeat",type:"float"}),depthStencil:!1});Ue(u,A,K),Ge(u,K);const X=u({frag:Ve,vert:O,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:U=>A[(U.tick+1)%2],uniforms:{prevState:U=>A[U.tick%2],Da:u.prop("Da"),Db:u.prop("Db"),f:u.prop("f"),k:u.prop("k"),radius:g,pauseSimulation:u.prop("pauseSimulation"),mousePosition:u.prop("mousePosition"),penRadius:u.prop("penRadius"),penDensity:u.prop("penDensity"),penIsActive:u.prop("penIsActive"),eraserIsActive:u.prop("eraserIsActive")}});u.frame(()=>{r.pause||i.iteration++,X({Da:1,Db:.5,pauseSimulation:r.pause,mousePosition:[a.x,a.y],penRadius:1/2**(et-a.penSize),penDensity:a.penDensity,penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,...l}),Xe(r.colors,i),Ye(a,et)})},d=h=>{if(!h.currentTarget)throw new Error("No target for the onmousemove event");if(!h.currentTarget.width||!h.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var g=h.currentTarget.getBoundingClientRect();const _=h.clientX-g.left,A=h.clientY-g.top,{width:K,height:X}=h.currentTarget,U=_/K,At=(X-A)/X;a.x=U,a.y=At},p=h=>{if(![0,2].includes(h.button)||!["mouseup","mousedown"].includes(h.type))return;let g=h.type==="mousedown";h.button===0&&(a.pressedLeft=g),h.button===2&&(a.pressedRight=g)};return tt(()=>{c(),f(),m()}),rt(()=>{s.destroy(),u.destroy()}),[l,e,d,p,({f:h,k:g})=>{n(0,l.f=h,l),n(0,l.k=g,l)}]}class je extends M{constructor(t){super(),T(this,t,Qe,qe,F,{})}}function yt(o,t,n){const e=o.slice();return e[1]=t[n],e}function $t(o,t,n){const e=o.slice();return e[1]=t[n],e}function Je(o){let t;return{c(){t=W("About")},l(n){t=N(n,"About")},m(n,e){x(n,t,e)},d(n){n&&y(t)}}}function tn(o){let t=o[1].title+"",n;return{c(){n=W(t)},l(e){n=N(e,t)},m(e,r){x(e,n,r)},p:D,d(e){e&&y(n)}}}function wt(o){let t,n;return t=new xt({props:{$$slots:{default:[tn]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p(e,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function en(o){let t,n,e,r;t=new xt({props:{$$slots:{default:[Je]},$$scope:{ctx:o}}});let a=o[0],i=[];for(let s=0;s<a.length;s+=1)i[s]=wt($t(o,a,s));const l=s=>k(i[s],1,1,()=>{i[s]=null});return{c(){B(t.$$.fragment),n=Z();for(let s=0;s<i.length;s+=1)i[s].c();e=ot()},l(s){R(t.$$.fragment,s),n=Q(s);for(let u=0;u<i.length;u+=1)i[u].l(s);e=ot()},m(s,u){C(t,s,u),x(s,n,u);for(let c=0;c<i.length;c+=1)i[c].m(s,u);x(s,e,u),r=!0},p(s,u){const c={};if(u&64&&(c.$$scope={dirty:u,ctx:s}),t.$set(c),u&1){a=s[0];let f;for(f=0;f<a.length;f+=1){const m=$t(s,a,f);i[f]?(i[f].p(m,u),b(i[f],1)):(i[f]=wt(m),i[f].c(),b(i[f],1),i[f].m(e.parentNode,e))}for(ct(),f=a.length;f<i.length;f+=1)l(f);ft()}},i(s){if(!r){b(t.$$.fragment,s);for(let u=0;u<a.length;u+=1)b(i[u]);r=!0}},o(s){k(t.$$.fragment,s),i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)k(i[u]);r=!1},d(s){P(t,s),s&&y(n),_t(i,s),s&&y(e)}}}function nn(o){let t,n,e,r,a,i,l,s,u,c,f,m;return{c(){t=E("p"),n=W("Experiments with "),e=E("a"),r=W("Reaction-diffusion systems"),a=Z(),i=E("p"),l=W("The code is based on "),s=E("a"),u=W("this tutorial"),c=W(`
                but reimplemented in a glsl shader with
                `),f=E("a"),m=W("regl"),this.h()},l(d){t=L(d,"P",{});var p=I(t);n=N(p,"Experiments with "),e=L(p,"A",{href:!0,target:!0});var v=I(e);r=N(v,"Reaction-diffusion systems"),v.forEach(y),p.forEach(y),a=Q(d),i=L(d,"P",{});var h=I(i);l=N(h,"The code is based on "),s=L(h,"A",{href:!0,target:!0});var g=I(s);u=N(g,"this tutorial"),g.forEach(y),c=N(h,`
                but reimplemented in a glsl shader with
                `),f=L(h,"A",{href:!0,target:!0});var _=I(f);m=N(_,"regl"),_.forEach(y),h.forEach(y),this.h()},h(){$(e,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),$(e,"target","none"),$(s,"href","https://karlsims.com/rd.html"),$(s,"target","none"),$(f,"href","https://github.com/regl-project/regl"),$(f,"target","none")},m(d,p){x(d,t,p),V(t,n),V(t,e),V(e,r),x(d,a,p),x(d,i,p),V(i,l),V(i,s),V(s,u),V(i,c),V(i,f),V(f,m)},p:D,d(d){d&&y(t),d&&y(a),d&&y(i)}}}function on(o){let t,n,e;var r=o[1].component;function a(i){return{}}return r&&(t=ut(r,a())),{c(){t&&B(t.$$.fragment),n=Z()},l(i){t&&R(t.$$.fragment,i),n=Q(i)},m(i,l){t&&C(t,i,l),x(i,n,l),e=!0},p(i,l){if(r!==(r=i[1].component)){if(t){ct();const s=t;k(s.$$.fragment,1,0,()=>{P(s,1)}),ft()}r?(t=ut(r,a()),B(t.$$.fragment),b(t.$$.fragment,1),C(t,n.parentNode,n)):t=null}},i(i){e||(t&&b(t.$$.fragment,i),e=!0)},o(i){t&&k(t.$$.fragment,i),e=!1},d(i){t&&P(t,i),i&&y(n)}}}function St(o){let t,n;return t=new kt({props:{$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p(e,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function rn(o){let t,n,e,r,a,i;t=new Rt({props:{$$slots:{default:[en]},$$scope:{ctx:o}}}),e=new kt({props:{$$slots:{default:[nn]},$$scope:{ctx:o}}});let l=o[0],s=[];for(let c=0;c<l.length;c+=1)s[c]=St(yt(o,l,c));const u=c=>k(s[c],1,1,()=>{s[c]=null});return{c(){B(t.$$.fragment),n=Z(),B(e.$$.fragment),r=Z();for(let c=0;c<s.length;c+=1)s[c].c();a=ot()},l(c){R(t.$$.fragment,c),n=Q(c),R(e.$$.fragment,c),r=Q(c);for(let f=0;f<s.length;f+=1)s[f].l(c);a=ot()},m(c,f){C(t,c,f),x(c,n,f),C(e,c,f),x(c,r,f);for(let m=0;m<s.length;m+=1)s[m].m(c,f);x(c,a,f),i=!0},p(c,f){const m={};f&64&&(m.$$scope={dirty:f,ctx:c}),t.$set(m);const d={};if(f&64&&(d.$$scope={dirty:f,ctx:c}),e.$set(d),f&1){l=c[0];let p;for(p=0;p<l.length;p+=1){const v=yt(c,l,p);s[p]?(s[p].p(v,f),b(s[p],1)):(s[p]=St(v),s[p].c(),b(s[p],1),s[p].m(a.parentNode,a))}for(ct(),p=l.length;p<s.length;p+=1)u(p);ft()}},i(c){if(!i){b(t.$$.fragment,c),b(e.$$.fragment,c);for(let f=0;f<l.length;f+=1)b(s[f]);i=!0}},o(c){k(t.$$.fragment,c),k(e.$$.fragment,c),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)k(s[f]);i=!1},d(c){P(t,c),c&&y(n),P(e,c),c&&y(r),_t(s,c),c&&y(a)}}}function an(o){let t,n,e;return n=new Pt({props:{$$slots:{default:[rn]},$$scope:{ctx:o}}}),{c(){t=E("div"),B(n.$$.fragment)},l(r){t=L(r,"DIV",{});var a=I(t);R(n.$$.fragment,a),a.forEach(y)},m(r,a){x(r,t,a),C(n,t,null),e=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),n.$set(i)},i(r){e||(b(n.$$.fragment,r),e=!0)},o(r){k(n.$$.fragment,r),e=!1},d(r){r&&y(t),P(n)}}}function sn(o){return[[{title:"V7",component:je},{title:"V6",component:Ce},{title:"V5",component:$e},{title:"V4",component:pe},{title:"V3",component:fe},{title:"V2",component:te},{title:"V1",component:Kt}]]}class ln extends M{constructor(t){super(),T(this,t,sn,an,F,{})}}function cn(o){let t,n;return t=new ln({}),{c(){B(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:D,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}class wn extends M{constructor(t){super(),T(this,t,null,cn,F,{})}}export{wn as default};
