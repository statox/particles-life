import{S as I,i as P,s as T,k as E,l as M,m as C,h as g,n as w,b,X as ut,B as x,Y as mt,o as G,w as D,x as B,y as S,f as _,t as y,z as A,Q as pt,a as X,e as Y,c as F,g as U,d as j,L as it,q as R,r as W,D as L,v as q}from"../../../chunks/index-2f3b6d71.js";import{T as gt,a as dt,b as lt,c as ct}from"../../../chunks/TabPanel-e2218539.js";import{_ as ft}from"../../../chunks/preload-helper-41c905a7.js";import{R as ht}from"../../../chunks/regl-89b00fbf.js";function $t(a){let t,e,n;return{c(){t=E("div"),this.h()},l(o){t=M(o,"DIV",{style:!0,class:!0}),C(t).forEach(g),this.h()},h(){w(t,"style",a[0]),w(t,"class","m-0")},m(o,s){b(o,t,s),e||(n=ut(a[1].call(null,t)),e=!0)},p(o,[s]){s&1&&w(t,"style",o[0])},i:x,o:x,d(o){o&&g(t),e=!1,n()}}}function vt(a,t){return t.forEach(([e,n])=>a[e]=n),a}function _t(a,t,e){let{target:n=void 0}=t,{sketch:o=void 0}=t,{parentDivStyle:s="display: block;"}=t,{debug:r=!1}=t,f;const i=mt(),h={ref(){i("ref",n)},instance(){i("instance",f)}};function c(l){return e(2,n=l),{destroy(){e(2,n=void 0)}}}return G(async()=>{const l=await ft(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:m}=l,u=Object.entries(l).filter(([d,k])=>k instanceof Function&&d[0]!=="_"&&d!=="default");r&&console.log("available p5 native classes",u),f=new m(d=>(d=vt(d,u),r&&console.log("p5 instance",d),window._p5Instance=d,o(d)),n),h.ref(),h.instance()}),a.$$set=l=>{"target"in l&&e(2,n=l.target),"sketch"in l&&e(3,o=l.sketch),"parentDivStyle"in l&&e(0,s=l.parentDivStyle),"debug"in l&&e(4,r=l.debug)},[s,c,n,o,r]}class z extends I{constructor(t){super(),P(this,t,_t,$t,T,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const wt=a=>{const t=[];for(let r=0;r<a.height;r++){t.push([]);for(let f=0;f<a.width;f++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(a.width/2),s=Math.floor(a.height/2);for(let r=s-n;r<s+n;r++)for(let f=o-e;f<o+e;f++)t[r][f].B=1;return t},yt=(a,t)=>{const e={width:a.width/t[0].length,height:a.height/t.length};for(let n=0;n<t.length;n++)for(let o=0;o<t[0].length;o++){const{A:s,B:r}=t[n][o];a.fill(s*255,r*255,0),a.rect(o*e.width,n*e.height,e.width,e.height)}},bt=1,xt=.5,H=.055,kt=.062,Dt=a=>{const t=[];for(let e=0;e<a.length;e++){t.push([]);for(let n=0;n<a[0].length;n++){const{A:o,B:s}=a[e][n],r=Z(a,{x:n,y:e},"A"),f=Z(a,{x:n,y:e},"B"),i=o+(bt*r-o*s*s+H*(1-o)),h=s+(xt*f+o*s*s-(kt+H)*s);t[e].push({A:i,B:h})}}return t},Z=(a,t,e)=>{const n=St(a,t);let o=0;for(const s of n){const{coord:r,weight:f}=s;o+=a[r.y][r.x][e]*f}return o},St=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,s=a.length,r={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},h={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},m={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},p={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[r,f,i,h,c,l,m,p,u]};function At(a){let t,e;return t=new z({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Bt(a){const t={width:200,height:200};let e;return[o=>{let s;o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),s=wt(t)},o.draw=()=>{o.background(0);for(let r=0;r<20;r++)s=Dt(s);yt(e,s)}}]}let Lt=class extends I{constructor(t){super(),P(this,t,Bt,At,T,{})}},$,N;const Et=a=>{$=[],N=[];for(let s=0;s<a.height;s++){$.push([]),N.push([]);for(let r=0;r<a.width;r++)$[$.length-1].push({A:1,B:0}),N[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(a.width/2),o=Math.floor(a.height/2);for(let s=o-e;s<o+e;s++)for(let r=n-t;r<n+t;r++)$[s][r].B=1;return $},Mt=a=>{const t={width:a.width/$[0].length,height:a.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:o,B:s}=$[e][n];a.fill(o*255,s*255,0),a.rect(n*t.width,e*t.height,t.width,t.height)}},Ct=1,Rt=.5,J=.055,Wt=.062,It=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:o}=$[t][e],s=tt($,{x:e,y:t},"A"),r=tt($,{x:e,y:t},"B"),f=n+(Ct*s-n*o*o+J*(1-n)),i=o+(Rt*r+n*o*o-(Wt+J)*o);N[t][e]={A:f,B:i}}const a=$;return $=N,N=a,$},tt=(a,t,e)=>{const n=Pt(a,t);let o=0;for(const s of n){const{coord:r,weight:f}=s;o+=a[r.y][r.x][e]*f}return o},Pt=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,s=a.length,r={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},h={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},m={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},p={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[r,f,i,h,c,l,m,p,u]};function Tt(a){let t,e;return t=new z({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Nt(a){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Et(t)},o.draw=()=>{for(let s=0;s<5;s++)It();Mt(e)}}]}let Ot=class extends I{constructor(t){super(),P(this,t,Nt,Tt,T,{})}},v,O;const Vt=a=>{v=[],O=[];for(let s=0;s<a.height;s++){v.push([]),O.push([]);for(let r=0;r<a.width;r++)v[v.length-1].push({A:1,B:0}),O[v.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(a.width/2),o=Math.floor(a.height/2);for(let s=o-e;s<o+e;s++)for(let r=n-t;r<n+t;r++)v[s][r].B=1;return v},Xt=a=>{const t={width:a.width/v[0].length,height:a.height/v.length};for(let e=0;e<v.length;e++)for(let n=0;n<v[0].length;n++){const{A:o,B:s}=v[e][n];a.fill(o*255,s*255,0),a.rect(n*t.width,e*t.height,t.width,t.height)}},Ft=1,Yt=.5,et=.055,Gt=.062,Ut=()=>{for(let t=0;t<v.length;t++)for(let e=0;e<v[0].length;e++){const{A:n,B:o}=v[t][e],s=nt(v,{x:e,y:t},"A"),r=nt(v,{x:e,y:t},"B"),f=n+(Ft*s-n*o*o+et*(1-n)),i=o+(Yt*r+n*o*o-(Gt+et)*o);O[t][e]={A:f,B:i}}const a=v;return v=O,O=a,v},nt=(a,t,e)=>{const n=jt(a,t);let o=0;for(const s of n){const{coord:r,weight:f}=s;o+=a[r.y][r.x][e]*f}return o},jt=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,s=a.length,r={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},h={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},m={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},p={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[r,f,i,h,c,l,m,p,u]};function zt(a){let t,e;return t=new z({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Kt(a){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Vt(t)},o.draw=()=>{for(let s=0;s<5;s++)Ut();Xt(e)}}]}let Qt=class extends I{constructor(t){super(),P(this,t,Kt,zt,T,{})}};function qt(a){let t;return{c(){t=E("canvas"),this.h()},l(e){t=M(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(t).forEach(g),this.h()},h(){w(t,"id","canvas"),w(t,"width",a[0].width),w(t,"height",a[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){b(e,t,n)},p:x,i:x,o:x,d(e){e&&g(t)}}}function Ht(a){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,o=Array(e*e).fill(0).map((s,r)=>{const f=Math.floor(r/e),i=r%e;return Math.hypot(e/2-i,e/2-f)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return G(()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");const r=ht({extensions:["OES_texture_float"],canvas:s}),f=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:e,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),i=r({frag:`
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
}`,framebuffer:c=>f[(c.tick+1)%2]}),h=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>f[c%2]},depth:{enable:!1},count:3});r.frame(()=>{h(()=>{r.draw(),i()})})}),[t]}let Zt=class extends I{constructor(t){super(),P(this,t,Ht,qt,T,{})}};const Jt=(a,t,e)=>{const n=a*e;return Array(a*a).fill(0).map((o,s)=>{const r=Math.floor(s/a),f=s%a;return Math.hypot(a/2-f,a/2-r)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},te=(a,t)=>Array(a*a).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ee=(a,t)=>Array(a*a).fill(0).map((e,n)=>{const o=Math.floor(n/a),s=n%a;return Math.hypot(a/2-s,a/2-o)<t*a?[0,1,0,1]:[1,0,0,1]}).flat(),V=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function ne(a){let t;return{c(){t=E("canvas"),this.h()},l(e){t=M(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(t).forEach(g),this.h()},h(){w(t,"id","canvas"),w(t,"width",a[0].width),w(t,"height",a[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){b(e,t,n)},p:x,i:x,o:x,d(e){e&&g(t)}}}function oe(a){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>h(),pause:!1},n={iteration:0},o={f:V[e.presetParams].f,k:V[e.presetParams].k};let s,r;const f=async()=>{const c=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new c.GUI,s.domElement.setAttribute("style","background-color: black"),s.add(o,"f").name("Feed rate").listen(),s.add(o,"k").name("Kill rate").listen(),s.add(e,"pause").name("Pause"),s.add(e,"reset").name("Reset simulation");const l=V.reduce((u,d,k)=>(u[d.name]=k,u),{});s.add(e,"presetParams",l).onFinishChange(()=>{o.f=V[e.presetParams].f,o.k=V[e.presetParams].k});const m={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};s.add(e,"initialConditions",m).onFinishChange(e.reset);const p=s.add(n,"iteration").listen();p.domElement.style.pointerEvents="none"},i=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return e.pause=!e.pause,c.preventDefault();if(c.code==="KeyR")return h(),c.preventDefault()})},h=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");r&&r.destroy(),r=ht({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const l=2**11;let m;e.initialConditions==="randomSpots"?m=te(l,.001):e.initialConditions==="middleCircleAndRandomSpots"?m=Jt(l,.005,.05):m=ee(l,.02);const p=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:l,data:m,wrap:"repeat",type:"float"}),depthStencil:!1})),u=r({frag:`
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
}`,framebuffer:k=>p[(k.tick+1)%2],uniforms:{Da:r.prop("Da"),Db:r.prop("Db"),f:r.prop("f"),k:r.prop("k")}}),d=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:k})=>p[k%2]},depth:{enable:!1},count:3});r.frame(()=>{d(()=>{r.draw(),!e.pause&&(n.iteration++,u({Da:1,Db:.5,...o}))})})};return G(()=>{f(),i(),h()}),pt(()=>{s.destroy(),r.destroy()}),[t]}class re extends I{constructor(t){super(),P(this,t,oe,ne,T,{})}}function ot(a,t,e){const n=a.slice();return n[1]=t[e],n}function rt(a,t,e){const n=a.slice();return n[1]=t[e],n}function ae(a){let t;return{c(){t=R("About")},l(e){t=W(e,"About")},m(e,n){b(e,t,n)},d(e){e&&g(t)}}}function se(a){let t=a[1].title+"",e;return{c(){e=R(t)},l(n){e=W(n,t)},m(n,o){b(n,e,o)},p:x,d(n){n&&g(e)}}}function at(a){let t,e;return t=new ct({props:{$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function ie(a){let t,e,n,o;t=new ct({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}});let s=a[0],r=[];for(let i=0;i<s.length;i+=1)r[i]=at(rt(a,s,i));const f=i=>y(r[i],1,1,()=>{r[i]=null});return{c(){D(t.$$.fragment),e=X();for(let i=0;i<r.length;i+=1)r[i].c();n=Y()},l(i){B(t.$$.fragment,i),e=F(i);for(let h=0;h<r.length;h+=1)r[h].l(i);n=Y()},m(i,h){S(t,i,h),b(i,e,h);for(let c=0;c<r.length;c+=1)r[c].m(i,h);b(i,n,h),o=!0},p(i,h){const c={};if(h&64&&(c.$$scope={dirty:h,ctx:i}),t.$set(c),h&1){s=i[0];let l;for(l=0;l<s.length;l+=1){const m=rt(i,s,l);r[l]?(r[l].p(m,h),_(r[l],1)):(r[l]=at(m),r[l].c(),_(r[l],1),r[l].m(n.parentNode,n))}for(U(),l=s.length;l<r.length;l+=1)f(l);j()}},i(i){if(!o){_(t.$$.fragment,i);for(let h=0;h<s.length;h+=1)_(r[h]);o=!0}},o(i){y(t.$$.fragment,i),r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)y(r[h]);o=!1},d(i){A(t,i),i&&g(e),it(r,i),i&&g(n)}}}function le(a){let t,e,n,o,s,r,f,i,h,c,l,m;return{c(){t=E("p"),e=R("Experiments with "),n=E("a"),o=R("Reaction-diffusion systems"),s=X(),r=E("p"),f=R("The code is based on "),i=E("a"),h=R("this tutorial"),c=R(`
                but reimplemented in a glsl shader with
                `),l=E("a"),m=R("regl"),this.h()},l(p){t=M(p,"P",{});var u=C(t);e=W(u,"Experiments with "),n=M(u,"A",{href:!0,target:!0});var d=C(n);o=W(d,"Reaction-diffusion systems"),d.forEach(g),u.forEach(g),s=F(p),r=M(p,"P",{});var k=C(r);f=W(k,"The code is based on "),i=M(k,"A",{href:!0,target:!0});var K=C(i);h=W(K,"this tutorial"),K.forEach(g),c=W(k,`
                but reimplemented in a glsl shader with
                `),l=M(k,"A",{href:!0,target:!0});var Q=C(l);m=W(Q,"regl"),Q.forEach(g),k.forEach(g),this.h()},h(){w(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),w(n,"target","none"),w(i,"href","https://karlsims.com/rd.html"),w(i,"target","none"),w(l,"href","https://github.com/regl-project/regl"),w(l,"target","none")},m(p,u){b(p,t,u),L(t,e),L(t,n),L(n,o),b(p,s,u),b(p,r,u),L(r,f),L(r,i),L(i,h),L(r,c),L(r,l),L(l,m)},p:x,d(p){p&&g(t),p&&g(s),p&&g(r)}}}function ce(a){let t,e,n;var o=a[1].component;function s(r){return{}}return o&&(t=q(o,s())),{c(){t&&D(t.$$.fragment),e=X()},l(r){t&&B(t.$$.fragment,r),e=F(r)},m(r,f){t&&S(t,r,f),b(r,e,f),n=!0},p(r,f){if(o!==(o=r[1].component)){if(t){U();const i=t;y(i.$$.fragment,1,0,()=>{A(i,1)}),j()}o?(t=q(o,s()),D(t.$$.fragment),_(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}},i(r){n||(t&&_(t.$$.fragment,r),n=!0)},o(r){t&&y(t.$$.fragment,r),n=!1},d(r){t&&A(t,r),r&&g(e)}}}function st(a){let t,e;return t=new lt({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function fe(a){let t,e,n,o,s,r;t=new dt({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}}),n=new lt({props:{$$slots:{default:[le]},$$scope:{ctx:a}}});let f=a[0],i=[];for(let c=0;c<f.length;c+=1)i[c]=st(ot(a,f,c));const h=c=>y(i[c],1,1,()=>{i[c]=null});return{c(){D(t.$$.fragment),e=X(),D(n.$$.fragment),o=X();for(let c=0;c<i.length;c+=1)i[c].c();s=Y()},l(c){B(t.$$.fragment,c),e=F(c),B(n.$$.fragment,c),o=F(c);for(let l=0;l<i.length;l+=1)i[l].l(c);s=Y()},m(c,l){S(t,c,l),b(c,e,l),S(n,c,l),b(c,o,l);for(let m=0;m<i.length;m+=1)i[m].m(c,l);b(c,s,l),r=!0},p(c,l){const m={};l&64&&(m.$$scope={dirty:l,ctx:c}),t.$set(m);const p={};if(l&64&&(p.$$scope={dirty:l,ctx:c}),n.$set(p),l&1){f=c[0];let u;for(u=0;u<f.length;u+=1){const d=ot(c,f,u);i[u]?(i[u].p(d,l),_(i[u],1)):(i[u]=st(d),i[u].c(),_(i[u],1),i[u].m(s.parentNode,s))}for(U(),u=f.length;u<i.length;u+=1)h(u);j()}},i(c){if(!r){_(t.$$.fragment,c),_(n.$$.fragment,c);for(let l=0;l<f.length;l+=1)_(i[l]);r=!0}},o(c){y(t.$$.fragment,c),y(n.$$.fragment,c),i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)y(i[l]);r=!1},d(c){A(t,c),c&&g(e),A(n,c),c&&g(o),it(i,c),c&&g(s)}}}function he(a){let t,e,n;return e=new gt({props:{$$slots:{default:[fe]},$$scope:{ctx:a}}}),{c(){t=E("div"),D(e.$$.fragment)},l(o){t=M(o,"DIV",{});var s=C(t);B(e.$$.fragment,s),s.forEach(g)},m(o,s){b(o,t,s),S(e,t,null),n=!0},p(o,[s]){const r={};s&64&&(r.$$scope={dirty:s,ctx:o}),e.$set(r)},i(o){n||(_(e.$$.fragment,o),n=!0)},o(o){y(e.$$.fragment,o),n=!1},d(o){o&&g(t),A(e)}}}function ue(a){return[[{title:"V5",component:re},{title:"V4",component:Zt},{title:"V3",component:Qt},{title:"V2",component:Ot},{title:"V1",component:Lt}]]}class me extends I{constructor(t){super(),P(this,t,ue,he,T,{})}}function pe(a){let t,e;return t=new me({}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}class xe extends I{constructor(t){super(),P(this,t,null,pe,T,{})}}export{xe as default};
