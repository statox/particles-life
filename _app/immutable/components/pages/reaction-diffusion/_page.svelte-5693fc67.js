import{S as W,i as U,s as X,k as w,l as A,m as $,h as y,n as _,b as k,X as Ot,B as P,Y as zt,o as tt,w as H,x as N,y as O,f as B,t as R,z as Y,Q as ot,K as D,Z as q,M as st,q as V,a as M,r as K,c as F,D as b,u as Yt,g as ut,d as ct,I as Nt,J as dt,L as vt,N as Wt,O as it,P as ft,_ as Rt,e as lt,v as gt}from"../../../chunks/index-2107b80f.js";import{T as Ut,a as Xt,b as Pt,c as It}from"../../../chunks/TabPanel-dec752e3.js";import{_ as rt}from"../../../chunks/preload-helper-41c905a7.js";import{R as at}from"../../../chunks/regl-89b00fbf.js";import{b as Gt}from"../../../chunks/paths-b4419565.js";function qt(e){let t,n,o;return{c(){t=w("div"),this.h()},l(r){t=A(r,"DIV",{style:!0,class:!0}),$(t).forEach(y),this.h()},h(){_(t,"style",e[0]),_(t,"class","m-0")},m(r,a){k(r,t,a),n||(o=Ot(e[1].call(null,t)),n=!0)},p(r,[a]){a&1&&_(t,"style",r[0])},i:P,o:P,d(r){r&&y(t),n=!1,o()}}}function Zt(e,t){return t.forEach(([n,o])=>e[n]=o),e}function jt(e,t,n){let{target:o=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:a="display: block;"}=t,{debug:i=!1}=t,u;const l=zt(),f={ref(){l("ref",o)},instance(){l("instance",u)}};function s(c){return n(2,o=c),{destroy(){n(2,o=void 0)}}}return tt(async()=>{const c=await rt(()=>import("../../../chunks/p5.min-b96f42d1.js").then(h=>h.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:d}=c,p=Object.entries(c).filter(([h,S])=>S instanceof Function&&h[0]!=="_"&&h!=="default");i&&console.log("available p5 native classes",p),u=new d(h=>(h=Zt(h,p),i&&console.log("p5 instance",h),window._p5Instance=h,r(h)),o),f.ref(),f.instance()}),e.$$set=c=>{"target"in c&&n(2,o=c.target),"sketch"in c&&n(3,r=c.sketch),"parentDivStyle"in c&&n(0,a=c.parentDivStyle),"debug"in c&&n(4,i=c.debug)},[a,s,o,r,i]}class pt extends W{constructor(t){super(),U(this,t,jt,qt,X,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Qt=e=>{const t=[];for(let i=0;i<e.height;i++){t.push([]);for(let u=0;u<e.width;u++)t[t.length-1].push({A:1,B:0})}const n=5,o=5,r=Math.floor(e.width/2),a=Math.floor(e.height/2);for(let i=a-o;i<a+o;i++)for(let u=r-n;u<r+n;u++)t[i][u].B=1;return t},Jt=(e,t)=>{const n={width:e.width/t[0].length,height:e.height/t.length};for(let o=0;o<t.length;o++)for(let r=0;r<t[0].length;r++){const{A:a,B:i}=t[o][r];e.fill(a*255,i*255,0),e.rect(r*n.width,o*n.height,n.width,n.height)}},te=1,ee=.5,ht=.055,ne=.062,oe=e=>{const t=[];for(let n=0;n<e.length;n++){t.push([]);for(let o=0;o<e[0].length;o++){const{A:r,B:a}=e[n][o],i=xt(e,{x:o,y:n},"A"),u=xt(e,{x:o,y:n},"B"),l=r+(te*i-r*a*a+ht*(1-r)),f=a+(ee*u+r*a*a-(ne+ht)*a);t[n].push({A:l,B:f})}}return t},xt=(e,t,n)=>{const o=re(e,t);let r=0;for(const a of o){const{coord:i,weight:u}=a;r+=e[i.y][i.x][n]*u}return r},re=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,a=e.length,i={coord:{x:n>0?n-1:r-1,y:o>0?o-1:a-1},weight:.05},u={coord:{x:n,y:o>0?o-1:a-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:a-1},weight:.05},f={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},c={coord:{x:n<r-1?n+1:0,y:o},weight:.2},d={coord:{x:n>0?n-1:r-1,y:o<a-1?o+1:0},weight:.05},v={coord:{x:n,y:o<a-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<a-1?o+1:0},weight:.05};return[i,u,l,f,s,c,d,v,p]};function ae(e){let t,n;return t=new pt({props:{sketch:e[0]}}),{c(){H(t.$$.fragment)},l(o){N(t.$$.fragment,o)},m(o,r){O(t,o,r),n=!0},p:P,i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function ie(e){const t={width:200,height:200};let n;return[r=>{let a;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),a=Qt(t)},r.draw=()=>{r.background(0);for(let i=0;i<20;i++)a=oe(a);Jt(n,a)}}]}let le=class extends W{constructor(t){super(),U(this,t,ie,ae,X,{})}},L,j;const se=e=>{L=[],j=[];for(let a=0;a<e.height;a++){L.push([]),j.push([]);for(let i=0;i<e.width;i++)L[L.length-1].push({A:1,B:0}),j[L.length-1].push({A:1,B:0})}const t=5,n=5,o=Math.floor(e.width/2),r=Math.floor(e.height/2);for(let a=r-n;a<r+n;a++)for(let i=o-t;i<o+t;i++)L[a][i].B=1;return L},ue=e=>{const t={width:e.width/L[0].length,height:e.height/L.length};for(let n=0;n<L.length;n++)for(let o=0;o<L[0].length;o++){const{A:r,B:a}=L[n][o];e.fill(r*255,a*255,0),e.rect(o*t.width,n*t.height,t.width,t.height)}},ce=1,fe=.5,_t=.055,pe=.062,me=()=>{for(let t=0;t<L.length;t++)for(let n=0;n<L[0].length;n++){const{A:o,B:r}=L[t][n],a=yt(L,{x:n,y:t},"A"),i=yt(L,{x:n,y:t},"B"),u=o+(ce*a-o*r*r+_t*(1-o)),l=r+(fe*i+o*r*r-(pe+_t)*r);j[t][n]={A:u,B:l}}const e=L;return L=j,j=e,L},yt=(e,t,n)=>{const o=ve(e,t);let r=0;for(const a of o){const{coord:i,weight:u}=a;r+=e[i.y][i.x][n]*u}return r},ve=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,a=e.length,i={coord:{x:n>0?n-1:r-1,y:o>0?o-1:a-1},weight:.05},u={coord:{x:n,y:o>0?o-1:a-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:a-1},weight:.05},f={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},c={coord:{x:n<r-1?n+1:0,y:o},weight:.2},d={coord:{x:n>0?n-1:r-1,y:o<a-1?o+1:0},weight:.05},v={coord:{x:n,y:o<a-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<a-1?o+1:0},weight:.05};return[i,u,l,f,s,c,d,v,p]};function de(e){let t,n;return t=new pt({props:{sketch:e[0]}}),{c(){H(t.$$.fragment)},l(o){N(t.$$.fragment,o)},m(o,r){O(t,o,r),n=!0},p:P,i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function ge(e){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),se(t)},r.draw=()=>{for(let a=0;a<5;a++)me();ue(n)}}]}let he=class extends W{constructor(t){super(),U(this,t,ge,de,X,{})}},z,Q;const xe=e=>{z=[],Q=[];for(let a=0;a<e.height;a++){z.push([]),Q.push([]);for(let i=0;i<e.width;i++)z[z.length-1].push({A:1,B:0}),Q[z.length-1].push({A:1,B:0})}const t=5,n=5,o=Math.floor(e.width/2),r=Math.floor(e.height/2);for(let a=r-n;a<r+n;a++)for(let i=o-t;i<o+t;i++)z[a][i].B=1;return z},_e=e=>{const t={width:e.width/z[0].length,height:e.height/z.length};for(let n=0;n<z.length;n++)for(let o=0;o<z[0].length;o++){const{A:r,B:a}=z[n][o];e.fill(r*255,a*255,0),e.rect(o*t.width,n*t.height,t.width,t.height)}},ye=1,Se=.5,St=.055,be=.062,Ee=()=>{for(let t=0;t<z.length;t++)for(let n=0;n<z[0].length;n++){const{A:o,B:r}=z[t][n],a=bt(z,{x:n,y:t},"A"),i=bt(z,{x:n,y:t},"B"),u=o+(ye*a-o*r*r+St*(1-o)),l=r+(Se*i+o*r*r-(be+St)*r);Q[t][n]={A:u,B:l}}const e=z;return z=Q,Q=e,z},bt=(e,t,n)=>{const o=we(e,t);let r=0;for(const a of o){const{coord:i,weight:u}=a;r+=e[i.y][i.x][n]*u}return r},we=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,a=e.length,i={coord:{x:n>0?n-1:r-1,y:o>0?o-1:a-1},weight:.05},u={coord:{x:n,y:o>0?o-1:a-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:a-1},weight:.05},f={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},c={coord:{x:n<r-1?n+1:0,y:o},weight:.2},d={coord:{x:n>0?n-1:r-1,y:o<a-1?o+1:0},weight:.05},v={coord:{x:n,y:o<a-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<a-1?o+1:0},weight:.05};return[i,u,l,f,s,c,d,v,p]};function Ae(e){let t,n;return t=new pt({props:{sketch:e[0]}}),{c(){H(t.$$.fragment)},l(o){N(t.$$.fragment,o)},m(o,r){O(t,o,r),n=!0},p:P,i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function De(e){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),xe(t)},r.draw=()=>{for(let a=0;a<5;a++)Ee();_e(n)}}]}let $e=class extends W{constructor(t){super(),U(this,t,De,Ae,X,{})}};function Be(e){let t;return{c(){t=w("canvas"),this.h()},l(n){t=A(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),$(t).forEach(y),this.h()},h(){_(t,"id","canvas"),_(t,"width",e[0].width),_(t,"height",e[0].height),_(t,"class","svelte-1b0ol19")},m(n,o){k(n,t,o)},p:P,i:P,o:P,d(n){n&&y(t)}}}function ke(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,o=n*.05,r=Array(n*n).fill(0).map((a,i)=>{const u=Math.floor(i/n),l=i%n;return Math.hypot(n/2-l,n/2-u)<o?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return tt(()=>{const a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=at({extensions:["OES_texture_float"],canvas:a}),u=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=i({frag:`
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
}`,framebuffer:s=>u[(s.tick+1)%2]}),f=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:s})=>u[s%2]},depth:{enable:!1},count:3});i.frame(()=>{f(()=>{i.draw(),l()})})}),[t]}let Ce=class extends W{constructor(t){super(),U(this,t,ke,Be,X,{})}};const Le=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ze=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Re=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),et=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Pe(e){let t;return{c(){t=w("canvas"),this.h()},l(n){t=A(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),$(t).forEach(y),this.h()},h(){_(t,"id","canvas"),_(t,"width",e[0].width),_(t,"height",e[0].height),_(t,"class","svelte-1b0ol19")},m(n,o){k(n,t,o)},p:P,i:P,o:P,d(n){n&&y(t)}}}function Ie(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},o={iteration:0},r={f:et[n.presetParams].f,k:et[n.presetParams].k};let a,i;const u=async()=>{const s=await rt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new s.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(r,"f").name("Feed rate").listen(),a.add(r,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const c=et.reduce((p,h,S)=>(p[h.name]=S,p),{});a.add(n,"presetParams",c).onFinishChange(()=>{r.f=et[n.presetParams].f,r.k=et[n.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",d).onFinishChange(n.reset);const v=a.add(o,"iteration").listen();v.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",s=>{if(s.code==="Space")return n.pause=!n.pause,s.preventDefault();if(s.code==="KeyR")return f(),s.preventDefault()})},f=()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");i&&i.destroy(),i=at({extensions:["OES_texture_float"],canvas:s}),o.iteration=0;const c=2**11;let d;n.initialConditions==="randomSpots"?d=ze(c,.001):n.initialConditions==="middleCircleAndRandomSpots"?d=Le(c,.005,.05):d=Re(c,.02);const v=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:c,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),p=i({frag:`
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
}`,framebuffer:S=>v[(S.tick+1)%2],uniforms:{Da:i.prop("Da"),Db:i.prop("Db"),f:i.prop("f"),k:i.prop("k")}}),h=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:S})=>v[S%2]},depth:{enable:!1},count:3});i.frame(()=>{h(()=>{i.draw(),!n.pause&&(o.iteration++,p({Da:1,Db:.5,...r}))})})};return tt(()=>{u(),l(),f()}),ot(()=>{a.destroy(),i.destroy()}),[t]}let Te=class extends W{constructor(t){super(),U(this,t,Ie,Pe,X,{})}};const Me=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Fe=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ve=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),nt=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Ke=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,He=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,Oe=`precision mediump float;

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
`;function Ye(e){let t,n,o;return{c(){t=w("canvas"),this.h()},l(r){t=A(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),$(t).forEach(y),this.h()},h(){_(t,"id","canvas"),_(t,"width",e[0].width),_(t,"height",e[0].height),_(t,"class","svelte-1b0ol19")},m(r,a){k(r,t,a),n||(o=[D(t,"mousemove",e[1]),D(t,"mousedown",q(e[2])),D(t,"mouseup",e[2]),D(t,"contextmenu",q(Ne))],n=!0)},p:P,i:P,o:P,d(r){r&&y(t),n=!1,st(o)}}}const mt=11,Ne=e=>e;function We(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>s(),pause:!1},o={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},a={f:nt[n.presetParams].f,k:nt[n.presetParams].k};let i,u;const l=async()=>{const v=await rt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new v.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(a,"f").name("Feed rate").listen(),i.add(a,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const p=nt.reduce((x,g,m)=>(x[g.name]=m,x),{});i.add(n,"presetParams",p).onFinishChange(()=>{a.f=nt[n.presetParams].f,a.k=nt[n.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",h).onFinishChange(n.reset);const S=i.add(r,"iteration").listen();S.domElement.style.pointerEvents="none",i.add(o,"penSize",1,mt,1).name("Pen size")},f=()=>{document.addEventListener("keydown",v=>{if(v.code==="Space")return n.pause=!n.pause,v.preventDefault();if(v.code==="KeyR")return s(),v.preventDefault()})},s=()=>{const v=document.getElementById("canvas");if(!v)throw new Error("Canvas container not ready");u&&u.destroy(),u=at({extensions:["OES_texture_float"],canvas:v}),r.iteration=0;const p=2**mt;let h;n.initialConditions==="randomSpots"?h=Fe(p,.001):n.initialConditions==="middleCircleAndRandomSpots"?h=Me(p,.005,.05):h=Ve(p,.02);const S=Array(2).fill(0).map(()=>u.framebuffer({color:u.texture({radius:p,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),x=u({frag:Oe,framebuffer:m=>S[(m.tick+1)%2],uniforms:{Da:u.prop("Da"),Db:u.prop("Db"),f:u.prop("f"),k:u.prop("k"),radius:p,pauseSimulation:u.prop("pauseSimulation"),mousePosition:u.prop("mousePosition"),penRadius:u.prop("penRadius"),penIsActive:u.prop("penIsActive"),eraserIsActive:u.prop("eraserIsActive")}}),g=u({frag:He,vert:Ke,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:m})=>S[m%2]},depth:{enable:!1},count:3});u.frame(()=>{g(()=>{u.draw(),n.pause||r.iteration++,x({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[o.x,o.y],penRadius:1/2**(mt-o.penSize),penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...a})})})},c=v=>{if(!v.currentTarget)throw new Error("No target for the onmousemove event");if(!v.currentTarget.width||!v.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:h}=v,{width:S,height:x}=v.currentTarget,g=p/S,m=(x-h)/x;o.x=g,o.y=m},d=v=>{if(![0,2].includes(v.button)||!["mouseup","mousedown"].includes(v.type))return;let p=v.type==="mousedown";v.button===0&&(o.pressedLeft=p),v.button===2&&(o.pressedRight=p)};return tt(()=>{l(),f(),s()}),ot(()=>{i.destroy(),u.destroy()}),[t,c,d]}let Ue=class extends W{constructor(t){super(),U(this,t,We,Ye,X,{})}};const J=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Test 1",type:"Unknown",f:.0353,k:.0614},{name:"Never full population",type:"Unknown",f:.0201,k:.0602},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Et(e,t,n){const o=e.slice();return o[16]=t[n],o}function wt(e){let t,n,o,r,a,i,u=J,l=[];for(let f=0;f<u.length;f+=1)l[f]=At(Et(e,u,f));return o=new pt({props:{sketch:e[3]}}),{c(){t=w("select");for(let f=0;f<l.length;f+=1)l[f].c();n=M(),H(o.$$.fragment),this.h()},l(f){t=A(f,"SELECT",{class:!0});var s=$(t);for(let c=0;c<l.length;c+=1)l[c].l(s);s.forEach(y),n=F(f),N(o.$$.fragment,f),this.h()},h(){_(t,"class","full-width svelte-x05r1k"),e[0]===void 0&&Nt(()=>e[5].call(t))},m(f,s){k(f,t,s);for(let c=0;c<l.length;c+=1)l[c].m(t,null);dt(t,e[0]),k(f,n,s),O(o,f,s),r=!0,a||(i=[D(t,"change",e[5]),D(t,"change",e[6])],a=!0)},p(f,s){if(s&0){u=J;let c;for(c=0;c<u.length;c+=1){const d=Et(f,u,c);l[c]?l[c].p(d,s):(l[c]=At(d),l[c].c(),l[c].m(t,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=u.length}s&1&&dt(t,f[0])},i(f){r||(B(o.$$.fragment,f),r=!0)},o(f){R(o.$$.fragment,f),r=!1},d(f){f&&y(t),vt(l,f),f&&y(n),Y(o,f),a=!1,st(i)}}}function At(e){let t,n=e[16].type+"",o,r,a=e[16].name+"",i,u;return{c(){t=w("option"),o=V(n),r=V(" - "),i=V(a),u=M(),this.h()},l(l){t=A(l,"OPTION",{});var f=$(t);o=K(f,n),r=K(f," - "),i=K(f,a),u=F(f),f.forEach(y),this.h()},h(){t.__value=e[16],t.value=t.__value},m(l,f){k(l,t,f),b(t,o),b(t,r),b(t,i),b(t,u)},p:P,d(l){l&&y(t)}}}function Xe(e){let t,n,o=e[1]?"Close":"F/K selection",r,a,i,u,l,f=e[1]&&wt(e);return{c(){t=w("div"),n=w("button"),r=V(o),a=M(),f&&f.c(),this.h()},l(s){t=A(s,"DIV",{id:!0,class:!0});var c=$(t);n=A(c,"BUTTON",{class:!0,id:!0});var d=$(n);r=K(d,o),d.forEach(y),a=F(c),f&&f.l(c),c.forEach(y),this.h()},h(){_(n,"class","full-width svelte-x05r1k"),_(n,"id","toggleButton"),_(t,"id","container"),_(t,"class","svelte-x05r1k")},m(s,c){k(s,t,c),b(t,n),b(n,r),b(t,a),f&&f.m(t,null),i=!0,u||(l=D(n,"click",e[4]),u=!0)},p(s,[c]){(!i||c&2)&&o!==(o=s[1]?"Close":"F/K selection")&&Yt(r,o),s[1]?f?(f.p(s,c),c&2&&B(f,1)):(f=wt(s),f.c(),B(f,1),f.m(t,null)):f&&(ut(),R(f,1,1,()=>{f=null}),ct())},i(s){i||(B(f),i=!0)},o(s){R(f),i=!1},d(s){s&&y(t),f&&f.d(),u=!1,l()}}}function Ge(e,t,n){const o=zt();let r=J[0],a=!1;const i=[0,.11],u=[.03,.08],l=m=>{const{f:E,k:C}=m,G=p.map(C,u[0],u[1],0,p.width),Z=p.map(E,i[0],i[1],0,p.height);return{x:G,y:Z}},f=m=>{const{x:E,y:C}=m,G=p.map(C,0,p.height,i[0],i[1]),Z=p.map(E,0,p.width,u[0],u[1]);return{f:G,k:Z}},s=m=>{const E=m.mouseX,C=m.mouseY;if(E<0||C<0||E>m.width||C>m.height)return;const{f:G,k:Z}=f({x:m.mouseX,y:m.mouseY});n(0,r={f:G,k:Z,name:"custom",type:"manual"}),o("fkupdated",r)},c=m=>{m.fill(96,91,239);for(const E of J){const{x:C,y:G}=l({f:E.f,k:E.k});m.circle(C,G,8),m.text(E.name,C-m.textWidth(E.name)/2,G-10)}},d=m=>{m.fill("red");const{x:E,y:C}=l(r);m.text("F",10,C>10?C-5:C+15),m.line(0,C,m.width,C),m.text("K",E<m.width-10?E+5:E-15,m.height-10),m.line(E,0,E,m.height),m.circle(E,C,10)},v=m=>{const{f:E,k:C}=r,G=`F: ${E.toFixed(4)}`,Z=`K: ${C.toFixed(4)}`;m.fill("red"),m.text(G,m.width*.05,m.height/2),m.text(Z,m.width*.05,m.height/2+m.textSize()+6)};let p;const h=m=>{p=m;let E;m.preload=()=>{E=m.loadImage(Gt+"/my_parameters_map.png")},m.setup=()=>{m.createCanvas(400,400),m.frameRate(25)},m.draw=()=>{m.background(255),m.tint(150,80),m.image(E,0,0,m.width,m.height),c(m),d(m),v(m),m.mouseIsPressed&&s(m)}},S=()=>{n(1,a=!a),a||p.remove()};ot(()=>p?.remove());function x(){r=Wt(this),n(0,r)}return[r,a,o,h,S,x,()=>o("fkupdated",r)]}class qe extends W{constructor(t){super(),U(this,t,Ge,Xe,X,{})}}const Ze=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
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

`,Qe=`precision mediump float;

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
`,an=`precision mediump float;

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
`,ln=`precision mediump float;

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
`,sn=`precision mediump float;

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
`,un=`precision mediump float;

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
`,cn=`precision mediump float;

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
`,fn=`precision mediump float;

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

    vec4 softColor = colormap((B-0.1)*(1.0/0.9));


    if (B < 0.1) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,I={},pn=e=>{const t={vert:Ze,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{iteration:e.prop("iteration"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}};I.raw=e({frag:je,...t}),I.A_gradiant1=e({frag:an,...t}),I.A_gradiant2=e({frag:ln,...t}),I.A_MATLAB_cool=e({frag:sn,...t}),I.A_IDL_CB_RdBu=e({frag:un,...t}),I.A_IDL_CB_RdYiBu=e({frag:cn,...t}),I.B_IDL_CB_RdYiBu=e({frag:fn,...t}),I.grayscale=e({frag:Je,...t}),I.blackwhite=e({frag:tn,...t}),I.whiteblack=e({frag:en,...t}),I.timebasedblue=e({frag:Qe,...t}),I.lerp=e({frag:nn,...t}),I.mrob=e({frag:on,...t}),I.redblue=e({frag:rn,...t})},mn=e=>{const{colorMode:t,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:a}=e;(I[t]||I.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[a.panX,a.panY],zoomLevel:a.zoomLevel})},vn=`precision mediump float;

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
`,dn=`precision mediump float;

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
`;let Tt;const gn=(e,t)=>{Tt=e({frag:vn,vert:dn,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),Da:1,Db:.5,f:e.prop("f"),k:e.prop("k"),radius:t,pauseSimulation:e.prop("pauseSimulation"),mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),penDensity:e.prop("penDensity"),penIsActive:e.prop("penIsActive"),eraserIsActive:e.prop("eraserIsActive"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},hn=e=>{const{inputBuffer:t,outputBuffer:n,pauseSimulation:o,mouseState:r,simulationParameters:a,worldSize:i}=e;Tt({inputBuffer:t,outputBuffer:n,pauseSimulation:o,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(i-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...a})},xn=(e,t)=>e==="randomSpots"?Sn(t,.001):e==="middleCircleAndRandomSpots"?_n(t,.005,.05):e==="empty"?yn(t):bn(t,.02),_n=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},yn=e=>Array(e*e).fill(0).map(()=>[0,0,0,1]).flat(),Sn=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),bn=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),En=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,wn=`precision highp float;

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
`;let Mt;const An=e=>{Mt=e({vert:En,frag:wn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},Dn=e=>{const{inputBuffer:t,outputBuffer:n,zoomState:o}=e;Mt({inputBuffer:t,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},$n=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Bn=`precision mediump float;

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
`;let Ft;const kn=e=>{Ft=e({frag:Bn,vert:$n,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}})},Cn=e=>{const{inputBuffer:t,mouseState:n,outputBuffer:o,worldSize:r}=e;Ft({inputBuffer:t,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},Ln=e=>{const{controls:t,info:n,mouseState:o,simulationParameters:r}=e,a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=at({extensions:["OES_texture_float"],canvas:a});n.iteration=0;const u=2**n.worldSize,l=xn(t.initialConditions,u),f=()=>i.framebuffer({color:i.texture({radius:u,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(f),c=Array(2).fill(0).map(f);return gn(i,u),pn(i),An(i),kn(i),i.frame(()=>{t.pause||n.iteration++;let d=s[(n.iteration+1)%2];for(let v=0;v<t.speed;v++){n.iteration++;const p=s[n.iteration%2];d=s[(n.iteration+1)%2],hn({inputBuffer:p,outputBuffer:d,worldSize:n.worldSize,pauseSimulation:t.pause,mouseState:o,simulationParameters:r})}zn({inputTexture:d,graphicsTextures:c,controls:t,info:n,mouseState:o})}),i},zn=e=>{const{inputTexture:t,graphicsTextures:n,controls:o,info:r,mouseState:a}=e;let i=0;i++;const u=t,l=n[i%2];if(mn({colorMode:o.colors,inputBuffer:u,iteration:r.iteration,outputBuffer:l,zoomState:a}),o.grid){i++;const c=n[(i+1)%2],d=n[i%2];Dn({inputBuffer:c,outputBuffer:d,zoomState:a})}i++;const f=n[(i+1)%2],s=null;Cn({mouseState:a,worldSize:r.worldSize,inputBuffer:f,outputBuffer:s})},Dt=e=>{if(!e.currentTarget)throw new Error("Event has no currentTarget");const t=e.currentTarget,n=t.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,{width:a,height:i}=t,u=o/a,l=(i-r)/i;return{x:u,y:l}};const{window:Rn}=Rt;function Pn(e){let t,n,o,r,a,i,u,l,f,s,c,d,v,p,h;return n=new qe({}),n.$on("fkupdated",e[7]),{c(){t=w("main"),H(n.$$.fragment),o=M(),r=w("div"),a=M(),i=w("div"),u=w("label"),l=V("World Size:"),f=M(),s=w("input"),c=M(),d=w("canvas"),this.h()},l(S){t=A(S,"MAIN",{});var x=$(t);N(n.$$.fragment,x),o=F(x),r=A(x,"DIV",{id:!0,class:!0}),$(r).forEach(y),a=F(x),i=A(x,"DIV",{});var g=$(i);u=A(g,"LABEL",{for:!0});var m=$(u);l=K(m,"World Size:"),m.forEach(y),f=F(g),s=A(g,"INPUT",{id:!0,type:!0,step:!0}),g.forEach(y),c=F(x),d=A(x,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),$(d).forEach(y),x.forEach(y),this.h()},h(){_(r,"id","datgui-container"),_(r,"class","svelte-18zf5fr"),_(u,"for","worldSize"),_(s,"id","worldSize"),_(s,"type","number"),_(s,"step","1"),_(d,"id","canvas"),_(d,"width",e[1].width),_(d,"height",e[1].height),_(d,"class","svelte-18zf5fr")},m(S,x){k(S,t,x),O(n,t,null),b(t,o),b(t,r),b(t,a),b(t,i),b(i,u),b(u,l),b(i,f),b(i,s),it(s,e[0].worldSize),b(t,c),b(t,d),v=!0,p||(h=[D(Rn,"keydown",e[2]),D(s,"input",e[8]),D(s,"change",e[6]),D(d,"mousemove",e[4]),D(d,"mousedown",q(e[5])),D(d,"mouseup",e[5]),D(d,"wheel",e[3]),D(d,"keydown",q(e[2])),D(d,"contextmenu",q(In))],p=!0)},p(S,[x]){x&1&&ft(s.value)!==S[0].worldSize&&it(s,S[0].worldSize)},i(S){v||(B(n.$$.fragment,S),v=!0)},o(S){R(n.$$.fragment,S),v=!1},d(S){S&&y(t),Y(n),p=!1,st(h)}}}const In=e=>e;function Tn(e,t,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_IDL_CB_RdYiBu",initialConditions:"middleCircleAndRandomSpots",reset:()=>h(),pause:!1,grid:!1,speed:50},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},i={iteration:0,worldSize:9},u={f:J[0].f,k:J[0].k};let l,f;const s=async()=>{const g=await rt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new g.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const m=document.getElementById("datgui-container");if(!m)throw new Error("Gui container not ready");m.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const E={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",E).onFinishChange(r.reset).name("Initial conditions");const C=l.add(i,"iteration").listen();C.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(a,"penSize",0,i.worldSize).name("Pen size"),l.add(a,"penDensity",0,1).name("Pen density"),l.add(a,"zoomLevel",0,1).name("Zoom level").listen(),l.add(a,"panX",0,1).name("pan x").listen(),l.add(a,"panY",0,1).name("pan y").listen()},c=g=>{if(g.code==="Space"){r.pause=!r.pause,g.preventDefault();return}if(g.code==="KeyR"&&!g.getModifierState("Control")){h(),g.preventDefault();return}},d=g=>{if(!g.getModifierState("Control"))return;const m=Dt(g);a.panX=m.x,a.panY=m.y,g.deltaY>0?a.zoomLevel*=1+a.zoomLevel/2:a.zoomLevel*=1-a.zoomLevel/2,a.zoomLevel>1&&(a.zoomLevel=1),a.zoomLevel<0&&(a.zoomLevel=0),g.preventDefault()},v=g=>{const m=Dt(g);a.x=m.x,a.y=m.y},p=g=>{if(![0,2].includes(g.button)||!["mouseup","mousedown"].includes(g.type))return;let m=g.type==="mousedown";g.button===0&&(a.pressedLeft=m),g.button===2&&(a.pressedRight=m)},h=()=>{isNaN(i.worldSize)||(i.worldSize>11&&n(0,i.worldSize=11,i),i.worldSize<1&&n(0,i.worldSize=1,i),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),f?.destroy(),s(),f=Ln({controls:r,info:i,mouseState:a,simulationParameters:u}))},S=g=>{u.f=g.detail.f,u.k=g.detail.k};tt(()=>{h()}),ot(()=>{l.destroy(),f.destroy()});function x(){i.worldSize=ft(this.value),n(0,i)}return[i,o,c,d,v,p,h,S,x]}let Mn=class extends W{constructor(t){super(),U(this,t,Tn,Pn,X,{})}};const Fn=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,Vn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Kn=`precision mediump float;

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
`,Hn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,On=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Yn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Nn=`precision mediump float;

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
`,Wn=`// Colors scheme inspired by Robert Munafo described here:
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
`,Un=`// Colors scheme inspired by Robert Munafo described here:
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
`,Xn=`precision mediump float;

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
`,Gn=`precision mediump float;

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
`,qn=`precision mediump float;

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
`,Zn=`precision mediump float;

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
`,jn=`precision mediump float;

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
`,Qn=`precision mediump float;

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

    vec4 softColor = colormap((B-0.1)*(1.0/0.9));


    if (B < 0.1) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,T={},Jn=e=>{const t={vert:Fn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{iteration:e.prop("iteration"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}};T.raw=e({frag:Vn,...t}),T.A_gradiant1=e({frag:Xn,...t}),T.A_gradiant2=e({frag:Gn,...t}),T.A_MATLAB_cool=e({frag:qn,...t}),T.A_IDL_CB_RdBu=e({frag:Zn,...t}),T.A_IDL_CB_RdYiBu=e({frag:jn,...t}),T.B_IDL_CB_RdYiBu=e({frag:Qn,...t}),T.grayscale=e({frag:Hn,...t}),T.blackwhite=e({frag:On,...t}),T.whiteblack=e({frag:Yn,...t}),T.timebasedblue=e({frag:Kn,...t}),T.lerp=e({frag:Nn,...t}),T.mrob=e({frag:Wn,...t}),T.redblue=e({frag:Un,...t})},to=e=>{const{colorMode:t,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:a}=e;(T[t]||T.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[a.panX,a.panY],zoomLevel:a.zoomLevel})},eo=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;

varying vec2 v_fk;

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

    float f = v_fk.x;
    float k = v_fk.y;

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
`,no=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
uniform float penRadius;

attribute vec2 position;
attribute vec2 fk;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;
varying vec2 v_fk;

void main() {
    uv = 0.5 * (position + 1.0);
    v_fk = fk;
    mouseUv = (mousePosition * zoomLevel) + pan * (1.0 - zoomLevel);
    scaledPenRadius = penRadius * zoomLevel;
    gl_Position = vec4(position, 0, 1);
}
`;let Vt;const oo=(e,t)=>{Vt=e({frag:eo,vert:no,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]],fk:(n,o)=>{const{maxF:r,minF:a,maxK:i,minK:u}=o.simulationParameters;return[[r,i],[r,u],[a,i],[a,i],[r,u],[a,u]]}},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),Da:1,Db:.5,radius:t,pauseSimulation:e.prop("pauseSimulation"),mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),penDensity:e.prop("penDensity"),penIsActive:e.prop("penIsActive"),eraserIsActive:e.prop("eraserIsActive"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},ro=e=>{const{inputBuffer:t,outputBuffer:n,simulationParameters:o,pauseSimulation:r,mouseState:a,worldSize:i}=e;Vt({inputBuffer:t,outputBuffer:n,pauseSimulation:r,zoomLevel:a.zoomLevel,pan:[a.panX,a.panY],mousePosition:[a.x,a.y],penRadius:1/2**(i-a.penSize),penDensity:a.penDensity,penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,simulationParameters:o})},ao=(e,t)=>e==="randomSpots"?so(t,.001):e==="middleCircleAndRandomSpots"?io(t,.005,.05):e==="empty"?lo(t):uo(t,.02),io=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},lo=e=>Array(e*e).fill(0).map(()=>[0,0,0,1]).flat(),so=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),uo=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),co=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,fo=`precision highp float;

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
`;let Kt;const po=e=>{Kt=e({vert:co,frag:fo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},mo=e=>{const{inputBuffer:t,outputBuffer:n,zoomState:o}=e;Kt({inputBuffer:t,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},vo=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,go=`precision mediump float;

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
`;let Ht;const ho=e=>{Ht=e({frag:go,vert:vo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}})},xo=e=>{const{inputBuffer:t,mouseState:n,outputBuffer:o,worldSize:r}=e;Ht({inputBuffer:t,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},_o=e=>{const{controls:t,info:n,mouseState:o,simulationParameters:r}=e,a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=at({extensions:["OES_texture_float"],canvas:a});n.iteration=0;const u=2**n.worldSize,l=ao(t.initialConditions,u),f=()=>i.framebuffer({color:i.texture({radius:u,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(f),c=Array(2).fill(0).map(f);return oo(i,u),Jn(i),po(i),ho(i),i.frame(()=>{t.pause||n.iteration++;let d=s[(n.iteration+1)%2];for(let v=0;v<t.speed;v++){n.iteration++;const p=s[n.iteration%2];d=s[(n.iteration+1)%2],ro({inputBuffer:p,outputBuffer:d,worldSize:n.worldSize,pauseSimulation:t.pause,mouseState:o,simulationParameters:r})}yo({inputTexture:d,graphicsTextures:c,controls:t,info:n,mouseState:o})}),i},yo=e=>{const{inputTexture:t,graphicsTextures:n,controls:o,info:r,mouseState:a}=e;let i=0;i++;const u=t,l=n[i%2];if(to({colorMode:o.colors,inputBuffer:u,iteration:r.iteration,outputBuffer:l,zoomState:a}),o.grid){i++;const c=n[(i+1)%2],d=n[i%2];mo({inputBuffer:c,outputBuffer:d,zoomState:a})}i++;const f=n[(i+1)%2],s=null;xo({mouseState:a,worldSize:r.worldSize,inputBuffer:f,outputBuffer:s})},$t=e=>{if(!e.currentTarget)throw new Error("Event has no currentTarget");const t=e.currentTarget,n=t.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,{width:a,height:i}=t,u=o/a,l=(i-r)/i;return{x:u,y:l}};const{window:So}=Rt;function bo(e){let t,n,o,r,a,i,u,l,f,s,c,d;return{c(){t=w("main"),n=w("div"),o=M(),r=w("div"),a=w("label"),i=V("World Size:"),u=M(),l=w("input"),f=M(),s=w("canvas"),this.h()},l(v){t=A(v,"MAIN",{});var p=$(t);n=A(p,"DIV",{id:!0,class:!0}),$(n).forEach(y),o=F(p),r=A(p,"DIV",{});var h=$(r);a=A(h,"LABEL",{for:!0});var S=$(a);i=K(S,"World Size:"),S.forEach(y),u=F(h),l=A(h,"INPUT",{id:!0,type:!0,step:!0}),h.forEach(y),f=F(p),s=A(p,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),$(s).forEach(y),p.forEach(y),this.h()},h(){_(n,"id","datgui-container"),_(n,"class","svelte-18zf5fr"),_(a,"for","worldSize"),_(l,"id","worldSize"),_(l,"type","number"),_(l,"step","1"),_(s,"id","canvas"),_(s,"width",e[1].width),_(s,"height",e[1].height),_(s,"class","svelte-18zf5fr")},m(v,p){k(v,t,p),b(t,n),b(t,o),b(t,r),b(r,a),b(a,i),b(r,u),b(r,l),it(l,e[0].worldSize),b(t,f),b(t,s),c||(d=[D(So,"keydown",e[2]),D(l,"input",e[7]),D(l,"change",e[6]),D(s,"mousemove",e[4]),D(s,"mousedown",q(e[5])),D(s,"mouseup",e[5]),D(s,"wheel",e[3]),D(s,"keydown",q(e[2])),D(s,"contextmenu",q(Eo))],c=!0)},p(v,[p]){p&1&&ft(l.value)!==v[0].worldSize&&it(l,v[0].worldSize)},i:P,o:P,d(v){v&&y(t),c=!1,st(d)}}}const Eo=e=>e;function wo(e,t,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"blackwhite",initialConditions:"empty",reset:()=>h(),pause:!1,grid:!1,speed:6},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:6.5,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},i={iteration:0,worldSize:10},u={minK:.03,maxK:.08,minF:0,maxF:.11};let l,f;const s=async()=>{const x=await rt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new x.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const g=document.getElementById("datgui-container");if(!g)throw new Error("Gui container not ready");g.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const m={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",m).onFinishChange(r.reset).name("Initial conditions");const E=l.add(i,"iteration").listen();E.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(a,"penSize",0,i.worldSize).name("Pen size"),l.add(a,"penDensity",0,1).name("Pen density"),l.add(u,"minK",0,u.maxK),l.add(u,"maxK",u.minK,1),l.add(u,"minF",0,u.maxF),l.add(u,"maxF",u.minF,1)},c=x=>{if(x.code==="Space"){r.pause=!r.pause,x.preventDefault();return}if(x.code==="KeyR"&&!x.getModifierState("Control")){h(),x.preventDefault();return}},d=x=>{if(!x.getModifierState("Control"))return;const g=$t(x);a.panX=g.x,a.panY=g.y,x.deltaY>0?a.zoomLevel*=1+a.zoomLevel/2:a.zoomLevel*=1-a.zoomLevel/2,a.zoomLevel>1&&(a.zoomLevel=1),a.zoomLevel<0&&(a.zoomLevel=0),x.preventDefault()},v=x=>{const g=$t(x);a.x=g.x,a.y=g.y},p=x=>{if(![0,2].includes(x.button)||!["mouseup","mousedown"].includes(x.type))return;let g=x.type==="mousedown";x.button===0&&(a.pressedLeft=g),x.button===2&&(a.pressedRight=g)},h=()=>{isNaN(i.worldSize)||(i.worldSize>11&&n(0,i.worldSize=11,i),i.worldSize<1&&n(0,i.worldSize=1,i),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),f?.destroy(),s(),f=_o({controls:r,info:i,mouseState:a,simulationParameters:u}))};tt(()=>{h()}),ot(()=>{l.destroy(),f.destroy()});function S(){i.worldSize=ft(this.value),n(0,i)}return[i,o,c,d,v,p,h,S]}class Ao extends W{constructor(t){super(),U(this,t,wo,bo,X,{})}}function Bt(e,t,n){const o=e.slice();return o[1]=t[n],o}function kt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Do(e){let t;return{c(){t=V("About")},l(n){t=K(n,"About")},m(n,o){k(n,t,o)},d(n){n&&y(t)}}}function $o(e){let t=e[1].title+"",n;return{c(){n=V(t)},l(o){n=K(o,t)},m(o,r){k(o,n,r)},p:P,d(o){o&&y(n)}}}function Ct(e){let t,n;return t=new It({props:{$$slots:{default:[$o]},$$scope:{ctx:e}}}),{c(){H(t.$$.fragment)},l(o){N(t.$$.fragment,o)},m(o,r){O(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function Bo(e){let t,n,o,r;t=new It({props:{$$slots:{default:[Do]},$$scope:{ctx:e}}});let a=e[0],i=[];for(let l=0;l<a.length;l+=1)i[l]=Ct(kt(e,a,l));const u=l=>R(i[l],1,1,()=>{i[l]=null});return{c(){H(t.$$.fragment),n=M();for(let l=0;l<i.length;l+=1)i[l].c();o=lt()},l(l){N(t.$$.fragment,l),n=F(l);for(let f=0;f<i.length;f+=1)i[f].l(l);o=lt()},m(l,f){O(t,l,f),k(l,n,f);for(let s=0;s<i.length;s+=1)i[s].m(l,f);k(l,o,f),r=!0},p(l,f){const s={};if(f&64&&(s.$$scope={dirty:f,ctx:l}),t.$set(s),f&1){a=l[0];let c;for(c=0;c<a.length;c+=1){const d=kt(l,a,c);i[c]?(i[c].p(d,f),B(i[c],1)):(i[c]=Ct(d),i[c].c(),B(i[c],1),i[c].m(o.parentNode,o))}for(ut(),c=a.length;c<i.length;c+=1)u(c);ct()}},i(l){if(!r){B(t.$$.fragment,l);for(let f=0;f<a.length;f+=1)B(i[f]);r=!0}},o(l){R(t.$$.fragment,l),i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)R(i[f]);r=!1},d(l){Y(t,l),l&&y(n),vt(i,l),l&&y(o)}}}function ko(e){let t,n,o,r,a,i,u,l,f,s,c,d;return{c(){t=w("p"),n=V("Experiments with "),o=w("a"),r=V("Reaction-diffusion systems"),a=M(),i=w("p"),u=V("The code is based on "),l=w("a"),f=V("this tutorial"),s=V(`
                but reimplemented in a glsl shader with
                `),c=w("a"),d=V("regl"),this.h()},l(v){t=A(v,"P",{});var p=$(t);n=K(p,"Experiments with "),o=A(p,"A",{href:!0,target:!0});var h=$(o);r=K(h,"Reaction-diffusion systems"),h.forEach(y),p.forEach(y),a=F(v),i=A(v,"P",{});var S=$(i);u=K(S,"The code is based on "),l=A(S,"A",{href:!0,target:!0});var x=$(l);f=K(x,"this tutorial"),x.forEach(y),s=K(S,`
                but reimplemented in a glsl shader with
                `),c=A(S,"A",{href:!0,target:!0});var g=$(c);d=K(g,"regl"),g.forEach(y),S.forEach(y),this.h()},h(){_(o,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),_(o,"target","none"),_(l,"href","https://karlsims.com/rd.html"),_(l,"target","none"),_(c,"href","https://github.com/regl-project/regl"),_(c,"target","none")},m(v,p){k(v,t,p),b(t,n),b(t,o),b(o,r),k(v,a,p),k(v,i,p),b(i,u),b(i,l),b(l,f),b(i,s),b(i,c),b(c,d)},p:P,d(v){v&&y(t),v&&y(a),v&&y(i)}}}function Co(e){let t,n,o;var r=e[1].component;function a(i){return{}}return r&&(t=gt(r,a())),{c(){t&&H(t.$$.fragment),n=M()},l(i){t&&N(t.$$.fragment,i),n=F(i)},m(i,u){t&&O(t,i,u),k(i,n,u),o=!0},p(i,u){if(r!==(r=i[1].component)){if(t){ut();const l=t;R(l.$$.fragment,1,0,()=>{Y(l,1)}),ct()}r?(t=gt(r,a()),H(t.$$.fragment),B(t.$$.fragment,1),O(t,n.parentNode,n)):t=null}},i(i){o||(t&&B(t.$$.fragment,i),o=!0)},o(i){t&&R(t.$$.fragment,i),o=!1},d(i){t&&Y(t,i),i&&y(n)}}}function Lt(e){let t,n;return t=new Pt({props:{$$slots:{default:[Co]},$$scope:{ctx:e}}}),{c(){H(t.$$.fragment)},l(o){N(t.$$.fragment,o)},m(o,r){O(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function Lo(e){let t,n,o,r,a,i;t=new Xt({props:{$$slots:{default:[Bo]},$$scope:{ctx:e}}}),o=new Pt({props:{$$slots:{default:[ko]},$$scope:{ctx:e}}});let u=e[0],l=[];for(let s=0;s<u.length;s+=1)l[s]=Lt(Bt(e,u,s));const f=s=>R(l[s],1,1,()=>{l[s]=null});return{c(){H(t.$$.fragment),n=M(),H(o.$$.fragment),r=M();for(let s=0;s<l.length;s+=1)l[s].c();a=lt()},l(s){N(t.$$.fragment,s),n=F(s),N(o.$$.fragment,s),r=F(s);for(let c=0;c<l.length;c+=1)l[c].l(s);a=lt()},m(s,c){O(t,s,c),k(s,n,c),O(o,s,c),k(s,r,c);for(let d=0;d<l.length;d+=1)l[d].m(s,c);k(s,a,c),i=!0},p(s,c){const d={};c&64&&(d.$$scope={dirty:c,ctx:s}),t.$set(d);const v={};if(c&64&&(v.$$scope={dirty:c,ctx:s}),o.$set(v),c&1){u=s[0];let p;for(p=0;p<u.length;p+=1){const h=Bt(s,u,p);l[p]?(l[p].p(h,c),B(l[p],1)):(l[p]=Lt(h),l[p].c(),B(l[p],1),l[p].m(a.parentNode,a))}for(ut(),p=u.length;p<l.length;p+=1)f(p);ct()}},i(s){if(!i){B(t.$$.fragment,s),B(o.$$.fragment,s);for(let c=0;c<u.length;c+=1)B(l[c]);i=!0}},o(s){R(t.$$.fragment,s),R(o.$$.fragment,s),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)R(l[c]);i=!1},d(s){Y(t,s),s&&y(n),Y(o,s),s&&y(r),vt(l,s),s&&y(a)}}}function zo(e){let t,n,o;return n=new Ut({props:{$$slots:{default:[Lo]},$$scope:{ctx:e}}}),{c(){t=w("div"),H(n.$$.fragment)},l(r){t=A(r,"DIV",{});var a=$(t);N(n.$$.fragment,a),a.forEach(y)},m(r,a){k(r,t,a),O(n,t,null),o=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),n.$set(i)},i(r){o||(B(n.$$.fragment,r),o=!0)},o(r){R(n.$$.fragment,r),o=!1},d(r){r&&y(t),Y(n)}}}function Ro(e){return[[{title:"Parameters map",component:Ao},{title:"V7",component:Mn},{title:"V6",component:Ue},{title:"V5",component:Te},{title:"V4",component:Ce},{title:"V3",component:$e},{title:"V2",component:he},{title:"V1",component:le}]]}class Po extends W{constructor(t){super(),U(this,t,Ro,zo,X,{})}}function Io(e){let t,n;return t=new Po({}),{c(){H(t.$$.fragment)},l(o){N(t.$$.fragment,o)},m(o,r){O(t,o,r),n=!0},p:P,i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}class Go extends W{constructor(t){super(),U(this,t,null,Io,X,{})}}export{Go as default};
