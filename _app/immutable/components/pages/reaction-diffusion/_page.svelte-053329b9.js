import{S as ee,i as te,s as ne,k as $,l as C,m as z,h as _,n as S,b as F,X as ft,B as O,Y as $e,o as le,w as Z,x as J,y as j,f as M,t as H,z as Q,Q as se,K as R,Z as re,M as ve,q as D,a as V,r as k,c as K,U as Be,D as h,u as ae,g as Se,d as ye,I as je,J as we,L as De,N as Qe,O as ce,P as de,_ as Ce,e as Ae,v as ze}from"../../../chunks/index-2107b80f.js";import{T as ut,a as ct,b as Je,c as et}from"../../../chunks/TabPanel-dec752e3.js";import{_ as xe}from"../../../chunks/preload-helper-41c905a7.js";import{R as ge}from"../../../chunks/regl-89b00fbf.js";import{b as tt}from"../../../chunks/paths-b4419565.js";function mt(t){let e,n,o;return{c(){e=$("div"),this.h()},l(r){e=C(r,"DIV",{style:!0,class:!0}),z(e).forEach(_),this.h()},h(){S(e,"style",t[0]),S(e,"class","m-0")},m(r,i){F(r,e,i),n||(o=ft(t[1].call(null,e)),n=!0)},p(r,[i]){i&1&&S(e,"style",r[0])},i:O,o:O,d(r){r&&_(e),n=!1,o()}}}function pt(t,e){return e.forEach(([n,o])=>t[n]=o),t}function vt(t,e,n){let{target:o=void 0}=e,{sketch:r=void 0}=e,{parentDivStyle:i="display: block;"}=e,{debug:a=!1}=e,f;const l=$e(),m={ref(){l("ref",o)},instance(){l("instance",f)}};function s(u){return n(2,o=u),{destroy(){n(2,o=void 0)}}}return le(async()=>{const u=await xe(()=>import("../../../chunks/p5.min-b96f42d1.js").then(x=>x.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:c}=u,p=Object.entries(u).filter(([x,w])=>w instanceof Function&&x[0]!=="_"&&x!=="default");a&&console.log("available p5 native classes",p),f=new c(x=>(x=pt(x,p),a&&console.log("p5 instance",x),window._p5Instance=x,r(x)),o),m.ref(),m.instance()}),t.$$set=u=>{"target"in u&&n(2,o=u.target),"sketch"in u&&n(3,r=u.sketch),"parentDivStyle"in u&&n(0,i=u.parentDivStyle),"debug"in u&&n(4,a=u.debug)},[i,s,o,r,a]}class be extends ee{constructor(e){super(),te(this,e,vt,mt,ne,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const dt=t=>{const e=[];for(let a=0;a<t.height;a++){e.push([]);for(let f=0;f<t.width;f++)e[e.length-1].push({A:1,B:0})}const n=5,o=5,r=Math.floor(t.width/2),i=Math.floor(t.height/2);for(let a=i-o;a<i+o;a++)for(let f=r-n;f<r+n;f++)e[a][f].B=1;return e},xt=(t,e)=>{const n={width:t.width/e[0].length,height:t.height/e.length};for(let o=0;o<e.length;o++)for(let r=0;r<e[0].length;r++){const{A:i,B:a}=e[o][r];t.fill(i*255,a*255,0),t.rect(r*n.width,o*n.height,n.width,n.height)}},gt=1,ht=.5,Le=.055,_t=.062,Et=t=>{const e=[];for(let n=0;n<t.length;n++){e.push([]);for(let o=0;o<t[0].length;o++){const{A:r,B:i}=t[n][o],a=Re(t,{x:o,y:n},"A"),f=Re(t,{x:o,y:n},"B"),l=r+(gt*a-r*i*i+Le*(1-r)),m=i+(ht*f+r*i*i-(_t+Le)*i);e[n].push({A:l,B:m})}}return e},Re=(t,e,n)=>{const o=St(t,e);let r=0;for(const i of o){const{coord:a,weight:f}=i;r+=t[a.y][a.x][n]*f}return r},St=(t,e)=>{const{x:n,y:o}=e,r=t[0].length,i=t.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},f={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},u={coord:{x:n<r-1?n+1:0,y:o},weight:.2},c={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,f,l,m,s,u,c,v,p]};function yt(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function bt(t){const e={width:200,height:200};let n;return[r=>{let i;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),i=dt(e)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Et(i);xt(n,i)}}]}let wt=class extends ee{constructor(e){super(),te(this,e,bt,yt,ne,{})}},Y,fe;const At=t=>{Y=[],fe=[];for(let i=0;i<t.height;i++){Y.push([]),fe.push([]);for(let a=0;a<t.width;a++)Y[Y.length-1].push({A:1,B:0}),fe[Y.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(t.width/2),r=Math.floor(t.height/2);for(let i=r-n;i<r+n;i++)for(let a=o-e;a<o+e;a++)Y[i][a].B=1;return Y},Dt=t=>{const e={width:t.width/Y[0].length,height:t.height/Y.length};for(let n=0;n<Y.length;n++)for(let o=0;o<Y[0].length;o++){const{A:r,B:i}=Y[n][o];t.fill(r*255,i*255,0),t.rect(o*e.width,n*e.height,e.width,e.height)}},kt=1,Bt=.5,Pe=.055,$t=.062,Ct=()=>{for(let e=0;e<Y.length;e++)for(let n=0;n<Y[0].length;n++){const{A:o,B:r}=Y[e][n],i=Ie(Y,{x:n,y:e},"A"),a=Ie(Y,{x:n,y:e},"B"),f=o+(kt*i-o*r*r+Pe*(1-o)),l=r+(Bt*a+o*r*r-($t+Pe)*r);fe[e][n]={A:f,B:l}}const t=Y;return Y=fe,fe=t,Y},Ie=(t,e,n)=>{const o=zt(t,e);let r=0;for(const i of o){const{coord:a,weight:f}=i;r+=t[a.y][a.x][n]*f}return r},zt=(t,e)=>{const{x:n,y:o}=e,r=t[0].length,i=t.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},f={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},u={coord:{x:n<r-1?n+1:0,y:o},weight:.2},c={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,f,l,m,s,u,c,v,p]};function Lt(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Rt(t){const e={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),At(e)},r.draw=()=>{for(let i=0;i<5;i++)Ct();Dt(n)}}]}let Pt=class extends ee{constructor(e){super(),te(this,e,Rt,Lt,ne,{})}},U,ue;const It=t=>{U=[],ue=[];for(let i=0;i<t.height;i++){U.push([]),ue.push([]);for(let a=0;a<t.width;a++)U[U.length-1].push({A:1,B:0}),ue[U.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(t.width/2),r=Math.floor(t.height/2);for(let i=r-n;i<r+n;i++)for(let a=o-e;a<o+e;a++)U[i][a].B=1;return U},Tt=t=>{const e={width:t.width/U[0].length,height:t.height/U.length};for(let n=0;n<U.length;n++)for(let o=0;o<U[0].length;o++){const{A:r,B:i}=U[n][o];t.fill(r*255,i*255,0),t.rect(o*e.width,n*e.height,e.width,e.height)}},Ft=1,Mt=.5,Te=.055,Vt=.062,Kt=()=>{for(let e=0;e<U.length;e++)for(let n=0;n<U[0].length;n++){const{A:o,B:r}=U[e][n],i=Fe(U,{x:n,y:e},"A"),a=Fe(U,{x:n,y:e},"B"),f=o+(Ft*i-o*r*r+Te*(1-o)),l=r+(Mt*a+o*r*r-(Vt+Te)*r);ue[e][n]={A:f,B:l}}const t=U;return U=ue,ue=t,U},Fe=(t,e,n)=>{const o=Ht(t,e);let r=0;for(const i of o){const{coord:a,weight:f}=i;r+=t[a.y][a.x][n]*f}return r},Ht=(t,e)=>{const{x:n,y:o}=e,r=t[0].length,i=t.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},f={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},u={coord:{x:n<r-1?n+1:0,y:o},weight:.2},c={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,f,l,m,s,u,c,v,p]};function Ot(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Nt(t){const e={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),It(e)},r.draw=()=>{for(let i=0;i<5;i++)Kt();Tt(n)}}]}let Yt=class extends ee{constructor(e){super(),te(this,e,Nt,Ot,ne,{})}};function Ut(t){let e;return{c(){e=$("canvas"),this.h()},l(n){e=C(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(e).forEach(_),this.h()},h(){S(e,"id","canvas"),S(e,"width",t[0].width),S(e,"height",t[0].height),S(e,"class","svelte-1b0ol19")},m(n,o){F(n,e,o)},p:O,i:O,o:O,d(n){n&&_(e)}}}function Wt(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,o=n*.05,r=Array(n*n).fill(0).map((i,a)=>{const f=Math.floor(a/n),l=a%n;return Math.hypot(n/2-l,n/2-f)<o?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return le(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i}),f=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
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
}`,framebuffer:s=>f[(s.tick+1)%2]}),m=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:s})=>f[s%2]},depth:{enable:!1},count:3});a.frame(()=>{m(()=>{a.draw(),l()})})}),[e]}let Xt=class extends ee{constructor(e){super(),te(this,e,Wt,Ut,ne,{})}};const qt=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),f=i%t;return Math.hypot(t/2-f,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Gt=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),Zt=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),_e=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function jt(t){let e;return{c(){e=$("canvas"),this.h()},l(n){e=C(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(e).forEach(_),this.h()},h(){S(e,"id","canvas"),S(e,"width",t[0].width),S(e,"height",t[0].height),S(e,"class","svelte-1b0ol19")},m(n,o){F(n,e,o)},p:O,i:O,o:O,d(n){n&&_(e)}}}function Qt(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},o={iteration:0},r={f:_e[n.presetParams].f,k:_e[n.presetParams].k};let i,a;const f=async()=>{const s=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new s.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const u=_e.reduce((p,x,w)=>(p[x.name]=w,p),{});i.add(n,"presetParams",u).onFinishChange(()=>{r.f=_e[n.presetParams].f,r.k=_e[n.presetParams].k});const c={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",c).onFinishChange(n.reset);const v=i.add(o,"iteration").listen();v.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",s=>{if(s.code==="Space")return n.pause=!n.pause,s.preventDefault();if(s.code==="KeyR")return m(),s.preventDefault()})},m=()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");a&&a.destroy(),a=ge({extensions:["OES_texture_float"],canvas:s}),o.iteration=0;const u=2**11;let c;n.initialConditions==="randomSpots"?c=Gt(u,.001):n.initialConditions==="middleCircleAndRandomSpots"?c=qt(u,.005,.05):c=Zt(u,.02);const v=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:u,data:c,wrap:"repeat",type:"float"}),depthStencil:!1})),p=a({frag:`
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
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${u})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${u})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${u})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${u})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${u})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${u})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${u})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${u})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${u})).rg * 0.05;

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
}`,framebuffer:w=>v[(w.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),x=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:w})=>v[w%2]},depth:{enable:!1},count:3});a.frame(()=>{x(()=>{a.draw(),!n.pause&&(o.iteration++,p({Da:1,Db:.5,...r}))})})};return le(()=>{f(),l(),m()}),se(()=>{i.destroy(),a.destroy()}),[e]}let Jt=class extends ee{constructor(e){super(),te(this,e,Qt,jt,ne,{})}};const en=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),f=i%t;return Math.hypot(t/2-f,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},tn=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),nn=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),Ee=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],on=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,rn=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,an=`precision mediump float;

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
`;function ln(t){let e,n,o;return{c(){e=$("canvas"),this.h()},l(r){e=C(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(e).forEach(_),this.h()},h(){S(e,"id","canvas"),S(e,"width",t[0].width),S(e,"height",t[0].height),S(e,"class","svelte-1b0ol19")},m(r,i){F(r,e,i),n||(o=[R(e,"mousemove",t[1]),R(e,"mousedown",re(t[2])),R(e,"mouseup",t[2]),R(e,"contextmenu",re(sn))],n=!0)},p:O,i:O,o:O,d(r){r&&_(e),n=!1,ve(o)}}}const ke=11,sn=t=>t;function fn(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>s(),pause:!1},o={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:Ee[n.presetParams].f,k:Ee[n.presetParams].k};let a,f;const l=async()=>{const v=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new v.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const p=Ee.reduce((y,E,L)=>(y[E.name]=L,y),{});a.add(n,"presetParams",p).onFinishChange(()=>{i.f=Ee[n.presetParams].f,i.k=Ee[n.presetParams].k});const x={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",x).onFinishChange(n.reset);const w=a.add(r,"iteration").listen();w.domElement.style.pointerEvents="none",a.add(o,"penSize",1,ke,1).name("Pen size")},m=()=>{document.addEventListener("keydown",v=>{if(v.code==="Space")return n.pause=!n.pause,v.preventDefault();if(v.code==="KeyR")return s(),v.preventDefault()})},s=()=>{const v=document.getElementById("canvas");if(!v)throw new Error("Canvas container not ready");f&&f.destroy(),f=ge({extensions:["OES_texture_float"],canvas:v}),r.iteration=0;const p=2**ke;let x;n.initialConditions==="randomSpots"?x=tn(p,.001):n.initialConditions==="middleCircleAndRandomSpots"?x=en(p,.005,.05):x=nn(p,.02);const w=Array(2).fill(0).map(()=>f.framebuffer({color:f.texture({radius:p,data:x,wrap:"repeat",type:"float"}),depthStencil:!1})),y=f({frag:an,framebuffer:L=>w[(L.tick+1)%2],uniforms:{Da:f.prop("Da"),Db:f.prop("Db"),f:f.prop("f"),k:f.prop("k"),radius:p,pauseSimulation:f.prop("pauseSimulation"),mousePosition:f.prop("mousePosition"),penRadius:f.prop("penRadius"),penIsActive:f.prop("penIsActive"),eraserIsActive:f.prop("eraserIsActive")}}),E=f({frag:rn,vert:on,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:L})=>w[L%2]},depth:{enable:!1},count:3});f.frame(()=>{E(()=>{f.draw(),n.pause||r.iteration++,y({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[o.x,o.y],penRadius:1/2**(ke-o.penSize),penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...i})})})},u=v=>{if(!v.currentTarget)throw new Error("No target for the onmousemove event");if(!v.currentTarget.width||!v.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:x}=v,{width:w,height:y}=v.currentTarget,E=p/w,L=(y-x)/y;o.x=E,o.y=L},c=v=>{if(![0,2].includes(v.button)||!["mouseup","mousedown"].includes(v.type))return;let p=v.type==="mousedown";v.button===0&&(o.pressedLeft=p),v.button===2&&(o.pressedRight=p)};return le(()=>{l(),m(),s()}),se(()=>{a.destroy(),f.destroy()}),[e,u,c]}let un=class extends ee{constructor(e){super(),te(this,e,fn,ln,ne,{})}};const me=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"STX 1",type:"N.A",f:.0353,k:.0614},{name:"STX 2",type:"N.A",f:.0201,k:.0602},{name:"STX 2",type:"N.A",f:.0181,k:.0435},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Me(t,e,n){const o=t.slice();return o[17]=e[n],o}function Ve(t){let e,n,o,r,i,a,f,l,m,s=me,u=[];for(let c=0;c<s.length;c+=1)u[c]=Ke(Me(t,s,c));return a=new be({props:{sketch:t[4]}}),{c(){e=$("div"),n=D("Select f and k parameters on the map of use a preset"),o=V(),r=$("select");for(let c=0;c<u.length;c+=1)u[c].c();i=V(),Z(a.$$.fragment),this.h()},l(c){e=C(c,"DIV",{});var v=z(e);n=k(v,"Select f and k parameters on the map of use a preset"),v.forEach(_),o=K(c),r=C(c,"SELECT",{class:!0});var p=z(r);for(let x=0;x<u.length;x+=1)u[x].l(p);p.forEach(_),i=K(c),J(a.$$.fragment,c),this.h()},h(){S(r,"class","full-width svelte-1qznlxf"),t[0]===void 0&&je(()=>t[6].call(r))},m(c,v){F(c,e,v),h(e,n),F(c,o,v),F(c,r,v);for(let p=0;p<u.length;p+=1)u[p].m(r,null);we(r,t[0]),F(c,i,v),j(a,c,v),f=!0,l||(m=[R(r,"change",t[6]),R(r,"change",t[7])],l=!0)},p(c,v){if(v&0){s=me;let p;for(p=0;p<s.length;p+=1){const x=Me(c,s,p);u[p]?u[p].p(x,v):(u[p]=Ke(x),u[p].c(),u[p].m(r,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=s.length}v&1&&we(r,c[0])},i(c){f||(M(a.$$.fragment,c),f=!0)},o(c){H(a.$$.fragment,c),f=!1},d(c){c&&_(e),c&&_(o),c&&_(r),De(u,c),c&&_(i),Q(a,c),l=!1,ve(m)}}}function Ke(t){let e,n=t[17].type+"",o,r,i=t[17].name+"",a,f,l=t[17].f+"",m,s,u=t[17].k+"",c,v;return{c(){e=$("option"),o=D(n),r=D(" - "),a=D(i),f=D(" (f/k "),m=D(l),s=D(" / "),c=D(u),v=D(`)
                `),this.h()},l(p){e=C(p,"OPTION",{});var x=z(e);o=k(x,n),r=k(x," - "),a=k(x,i),f=k(x," (f/k "),m=k(x,l),s=k(x," / "),c=k(x,u),v=k(x,`)
                `),x.forEach(_),this.h()},h(){e.__value=t[17],e.value=e.__value},m(p,x){F(p,e,x),h(e,o),h(e,r),h(e,a),h(e,f),h(e,m),h(e,s),h(e,c),h(e,v)},p:O,d(p){p&&_(e)}}}function cn(t){let e,n,o=t[1]?"Close":"F/K selection",r,i,a,f,l,m=t[1]&&Ve(t);return{c(){e=$("div"),n=$("button"),r=D(o),i=V(),m&&m.c(),this.h()},l(s){e=C(s,"DIV",{id:!0,class:!0});var u=z(e);n=C(u,"BUTTON",{class:!0,id:!0});var c=z(n);r=k(c,o),c.forEach(_),i=K(u),m&&m.l(u),u.forEach(_),this.h()},h(){S(n,"class","full-width svelte-1qznlxf"),S(n,"id","toggleButton"),S(e,"id","container"),S(e,"class","svelte-1qznlxf"),Be(e,"no-cursor",t[2])},m(s,u){F(s,e,u),h(e,n),h(n,r),h(e,i),m&&m.m(e,null),a=!0,f||(l=R(n,"click",t[5]),f=!0)},p(s,[u]){(!a||u&2)&&o!==(o=s[1]?"Close":"F/K selection")&&ae(r,o),s[1]?m?(m.p(s,u),u&2&&M(m,1)):(m=Ve(s),m.c(),M(m,1),m.m(e,null)):m&&(Se(),H(m,1,1,()=>{m=null}),ye()),(!a||u&4)&&Be(e,"no-cursor",s[2])},i(s){a||(M(m),a=!0)},o(s){H(m),a=!1},d(s){s&&_(e),m&&m.d(),f=!1,l()}}}function mn(t,e,n){const o=$e();let r=me[0],i=!0;const a=[0,.12],f=[.03,.07],l=g=>{const{f:d,k:b}=g,B=p.map(b,f[0],f[1],0,p.width),A=p.map(d,a[0],a[1],p.height,0);return{x:B,y:A}},m=g=>{const{x:d,y:b}=g,B=p.map(b,p.height,0,a[0],a[1]),A=p.map(d,0,p.width,f[0],f[1]);return{f:B,k:A}},s=g=>{const d=g.mouseX,b=g.mouseY;if(d<0||b<0||d>g.width||b>g.height)return;const{f:B,k:A}=m({x:g.mouseX,y:g.mouseY});n(0,r={f:B,k:A,name:"custom",type:"manual"}),o("fkupdated",r)},u=g=>{g.noStroke();const d=g.textSize();for(const b of me){const{x:B,y:A}=l({f:b.f,k:b.k}),P=b.f===r.f&&b.k===r.k;g.circle(B,A,3),g.textSize(P?d*2:d),g.fill(P?[240,240,150]:[255,255,255]),g.text(b.name,B-g.textWidth(b.name)/2,A-10)}},c=g=>{g.noFill(),g.stroke("red");const{x:d,y:b}=l(r);g.text("F",10,b>10?b-5:b+15),g.line(0,b,g.width,b),g.text("K",d<g.width-10?d+5:d-15,g.height-10),g.line(d,0,d,g.height),g.circle(d,b,10)},v=g=>{const{f:d,k:b}=r,B=`F: ${d.toFixed(4)}`,A=`K: ${b.toFixed(4)}`,P=g.textSize(),N=g.height*.05;g.textStyle(g.BOLD),g.textSize(N),g.fill("white"),g.stroke(0),g.strokeWeight(1),g.text(B,g.width*.05,g.textSize()),g.text(A,g.width*.05,g.textSize()+g.textSize()+6),g.textStyle(g.NORMAL),g.textSize(P)};let p,x=!1;const w=g=>{p=g;let d;g.preload=()=>{d=g.loadImage(tt+"/parameters_map.png")},g.setup=()=>{g.createCanvas(400,400),g.frameRate(55)},g.draw=()=>{g.background(255),g.tint(150,190),g.image(d,0,0,g.width,g.height),u(g),c(g),v(g),n(2,x=!1),g.mouseIsPressed&&(s(g),n(2,x=!0))}},y=()=>{n(1,i=!i),i||p.remove()};se(()=>p?.remove());function E(){r=Qe(this),n(0,r)}return[r,i,x,o,w,y,E,()=>o("fkupdated",r)]}class pn extends ee{constructor(e){super(),te(this,e,mn,cn,ne,{})}}const vn=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,dn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,xn=`precision mediump float;

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
`,gn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,hn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,_n=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,En=`precision mediump float;

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
`,Sn=`// Colors scheme inspired by Robert Munafo described here:
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
`,yn=`// Colors scheme inspired by Robert Munafo described here:
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
`,bn=`precision mediump float;

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
`,wn=`precision mediump float;

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
`,An=`precision mediump float;

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
`,Dn=`precision mediump float;

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
`,kn=`precision mediump float;

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
`,Bn=`precision mediump float;

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

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap(1.0 - (A-0.4)*(1.0/0.6));


    if (A > 0.6) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,$n=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/transform_seismic.frag
float colormap_f(float x) {
    return ((-2010.0 * x + 2502.5950459) * x - 481.763180924) / 255.0;
}

float colormap_red(float x) {
    if (x < 0.0) {
        return 3.0 / 255.0;
    } else if (x < 0.238) {
        return ((-1810.0 * x + 414.49) * x + 3.87702) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return (344441250.0 / 323659.0 * x - 23422005.0 / 92474.0) / 255.0;
    } else if (x < 25851.0 / 34402.0) {
        return 1.0;
    } else if (x <= 1.0) {
        return (-688.04 * x + 772.02) / 255.0;
    } else {
        return 83.0 / 255.0;
    }
}

float colormap_green(float x) {
    if (x < 0.0) {
        return 0.0;
    } else if (x < 0.238) {
        return 0.0;
    } else if (x < 51611.0 / 108060.0) {
        return colormap_f(x);
    } else if (x < 0.739376978894039) {
        float xx = x - 51611.0 / 108060.0;
        return ((-914.74 * xx - 734.72) * xx + 255.) / 255.0;
    } else {
        return 0.0;
    }
}

float colormap_blue(float x) {
    if (x < 0.0) {
        return 19.0 / 255.0;
    } else if (x < 0.238) {
        float xx = x - 0.238;
        return (((1624.6 * xx + 1191.4) * xx + 1180.2) * xx + 255.0) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return 1.0;
    } else if (x < 174.5 / 256.0) {
        return (-951.67322673866 * x + 709.532730938451) / 255.0;
    } else if (x < 0.745745353439206) {
        return (-705.250074130877 * x + 559.620050530617) / 255.0;
    } else if (x <= 1.0) {
        return ((-399.29 * x + 655.71) * x - 233.25) / 255.0;
    } else {
        return 23.0 / 255.0;
    }
}

vec4 colormap(float x) {
    return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
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
`,Cn=`precision mediump float;

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
`,W={},zn=t=>{const e={vert:vn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}};W.raw=t({frag:dn,...e}),W.A_transform_seismic=t({frag:$n,...e}),W.A_gradiant1=t({frag:bn,...e}),W.A_gradiant2=t({frag:wn,...e}),W.A_MATLAB_cool=t({frag:An,...e}),W.A_IDL_CB_RdBu=t({frag:Dn,...e}),W.A_IDL_CB_RdYiBu=t({frag:kn,...e}),W.A_IDL_CB_BuYiRd=t({frag:Bn,...e}),W.B_IDL_CB_RdYiBu=t({frag:Cn,...e}),W.grayscale=t({frag:gn,...e}),W.blackwhite=t({frag:hn,...e}),W.whiteblack=t({frag:_n,...e}),W.timebasedblue=t({frag:xn,...e}),W.lerp=t({frag:En,...e}),W.mrob=t({frag:Sn,...e}),W.redblue=t({frag:yn,...e})},Ln=t=>{const{colorMode:e,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=t;(W[e]||W.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},Rn=`precision mediump float;

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
`,Pn=`precision mediump float;

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
`;let nt;const In=(t,e)=>{nt=t({frag:Rn,vert:Pn,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,f:t.prop("f"),k:t.prop("k"),radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive"),eraserIsActive:t.prop("eraserIsActive"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},Tn=t=>{const{inputBuffer:e,outputBuffer:n,pauseSimulation:o,mouseState:r,simulationParameters:i,worldSize:a}=t;nt({inputBuffer:e,outputBuffer:n,pauseSimulation:o,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(a-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...i})},Fn=(t,e)=>t==="randomSpots"?Kn(e,.001):t==="middleCircleAndRandomSpots"?Mn(e,.005,.05):t==="empty"?Vn(e):Hn(e,.02),Mn=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),f=i%t;return Math.hypot(t/2-f,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Vn=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),Kn=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),Hn=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),On=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,Nn=`precision highp float;

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
`;let ot;const Yn=t=>{ot=t({vert:On,frag:Nn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},Un=t=>{const{inputBuffer:e,outputBuffer:n,zoomState:o}=t;ot({inputBuffer:e,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},Wn=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Xn=`precision mediump float;

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
`;let rt;const qn=t=>{rt=t({frag:Xn,vert:Wn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}})},Gn=t=>{const{inputBuffer:e,mouseState:n,outputBuffer:o,worldSize:r}=t;rt({inputBuffer:e,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},Zn=t=>{const{controls:e,info:n,mouseState:o,simulationParameters:r}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const f=2**n.worldSize,l=Fn(e.initialConditions,f),m=()=>a.framebuffer({color:a.texture({radius:f,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(m),u=Array(2).fill(0).map(m);return In(a,f),zn(a),Yn(a),qn(a),a.frame(()=>{e.pause||n.iteration++;let c=s[(n.iteration+1)%2];for(let v=0;v<e.speed;v++){n.iteration++;const p=s[n.iteration%2];c=s[(n.iteration+1)%2],Tn({inputBuffer:p,outputBuffer:c,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:o,simulationParameters:r})}jn({inputTexture:c,graphicsTextures:u,controls:e,info:n,mouseState:o})}),a},jn=t=>{const{inputTexture:e,graphicsTextures:n,controls:o,info:r,mouseState:i}=t;let a=0;a++;const f=e,l=n[a%2];if(Ln({colorMode:o.colors,inputBuffer:f,iteration:r.iteration,outputBuffer:l,zoomState:i}),o.grid){a++;const u=n[(a+1)%2],c=n[a%2];Un({inputBuffer:u,outputBuffer:c,zoomState:i})}a++;const m=n[(a+1)%2],s=null;Gn({mouseState:i,worldSize:r.worldSize,inputBuffer:m,outputBuffer:s})},He=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top,{width:i,height:a}=e,f=o/i,l=(a-r)/a;return{x:f,y:l}};const{window:Qn}=Ce;function Jn(t){let e,n,o,r,i,a,f,l,m,s,u,c,v,p=2**t[0].worldSize+"",x,w,y=2**t[0].worldSize+"",E,L,g=2**(t[0].worldSize+1)+"",d,b,B,A,P,N,ie;return n=new pn({}),n.$on("fkupdated",t[7]),{c(){e=$("main"),Z(n.$$.fragment),o=V(),r=$("div"),i=V(),a=$("div"),f=$("label"),l=D("World Size:"),m=V(),s=$("input"),u=V(),c=$("span"),v=D("("),x=D(p),w=D(" x "),E=D(y),L=D(" : "),d=D(g),b=D(")"),B=V(),A=$("canvas"),this.h()},l(I){e=C(I,"MAIN",{});var T=z(e);J(n.$$.fragment,T),o=K(T),r=C(T,"DIV",{id:!0,class:!0}),z(r).forEach(_),i=K(T),a=C(T,"DIV",{});var oe=z(a);f=C(oe,"LABEL",{for:!0});var he=z(f);l=k(he,"World Size:"),he.forEach(_),m=K(oe),s=C(oe,"INPUT",{id:!0,type:!0,step:!0}),u=K(oe),c=C(oe,"SPAN",{});var q=z(c);v=k(q,"("),x=k(q,p),w=k(q," x "),E=k(q,y),L=k(q," : "),d=k(q,g),b=k(q,")"),q.forEach(_),oe.forEach(_),B=K(T),A=C(T,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(A).forEach(_),T.forEach(_),this.h()},h(){S(r,"id","datgui-container"),S(r,"class","svelte-18zf5fr"),S(f,"for","worldSize"),S(s,"id","worldSize"),S(s,"type","number"),S(s,"step","1"),S(A,"id","canvas"),S(A,"width",t[1].width),S(A,"height",t[1].height),S(A,"class","svelte-18zf5fr")},m(I,T){F(I,e,T),j(n,e,null),h(e,o),h(e,r),h(e,i),h(e,a),h(a,f),h(f,l),h(a,m),h(a,s),ce(s,t[0].worldSize),h(a,u),h(a,c),h(c,v),h(c,x),h(c,w),h(c,E),h(c,L),h(c,d),h(c,b),h(e,B),h(e,A),P=!0,N||(ie=[R(Qn,"keydown",t[2]),R(s,"input",t[8]),R(s,"change",t[6]),R(A,"mousemove",t[4]),R(A,"mousedown",re(t[5])),R(A,"mouseup",t[5]),R(A,"wheel",t[3]),R(A,"keydown",re(t[2])),R(A,"contextmenu",re(eo))],N=!0)},p(I,[T]){T&1&&de(s.value)!==I[0].worldSize&&ce(s,I[0].worldSize),(!P||T&1)&&p!==(p=2**I[0].worldSize+"")&&ae(x,p),(!P||T&1)&&y!==(y=2**I[0].worldSize+"")&&ae(E,y),(!P||T&1)&&g!==(g=2**(I[0].worldSize+1)+"")&&ae(d,g)},i(I){P||(M(n.$$.fragment,I),P=!0)},o(I){H(n.$$.fragment,I),P=!1},d(I){I&&_(e),Q(n),N=!1,ve(ie)}}}const eo=t=>t;function to(t,e,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>x(),pause:!1,grid:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:8},f={f:me[0].f,k:me[0].k};let l,m;const s=async()=>{const E=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new E.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const L=document.getElementById("datgui-container");if(!L)throw new Error("Gui container not ready");L.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",g).onFinishChange(r.reset).name("Initial conditions");const d=l.add(a,"iteration").listen();d.domElement.style.pointerEvents="none",l.add(r,"speed",1,200).name("Simulation speed"),l.add(i,"penSize",0,a.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},u=E=>{if(E.code==="Space"){r.pause=!r.pause,E.preventDefault();return}if(E.code==="KeyR"&&!E.getModifierState("Control")){x(),E.preventDefault();return}},c=E=>{if(!E.getModifierState("Control"))return;const L=He(E);i.panX=L.x,i.panY=L.y,E.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),E.preventDefault()},v=E=>{const L=He(E);i.x=L.x,i.y=L.y},p=E=>{if(![0,2].includes(E.button)||!["mouseup","mousedown"].includes(E.type))return;let L=E.type==="mousedown";E.button===0&&(i.pressedLeft=L),E.button===2&&(i.pressedRight=L)},x=()=>{isNaN(a.worldSize)||(a.worldSize>11&&n(0,a.worldSize=11,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),s(),m=Zn({controls:r,info:a,mouseState:i,simulationParameters:f}))},w=E=>{f.f=E.detail.f,f.k=E.detail.k};le(()=>{x()}),se(()=>{l.destroy(),m.destroy()});function y(){a.worldSize=de(this.value),n(0,a)}return[a,o,u,c,v,p,x,w,y]}let no=class extends ee{constructor(e){super(),te(this,e,to,Jn,ne,{})}};const oo=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,ro=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,ao=`precision mediump float;

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
`,io=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,lo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,so=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,fo=`precision mediump float;

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
`,uo=`// Colors scheme inspired by Robert Munafo described here:
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
`,co=`// Colors scheme inspired by Robert Munafo described here:
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
`,mo=`precision mediump float;

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
`,po=`precision mediump float;

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
`,vo=`precision mediump float;

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
`,xo=`precision mediump float;

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
`,go=`precision mediump float;

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
`,ho=`precision mediump float;

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
`,G={},_o=t=>{const e={vert:oo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),prevState:t.prop("inputBuffer")}};G.raw=t({frag:ro,...e}),G.A_gradiant1=t({frag:mo,...e}),G.A_gradiant2=t({frag:po,...e}),G.A_MATLAB_cool=t({frag:vo,...e}),G.A_IDL_CB_RdBu=t({frag:xo,...e}),G.A_IDL_CB_RdYiBu=t({frag:go,...e}),G.B_IDL_CB_RdYiBu=t({frag:ho,...e}),G.grayscale=t({frag:io,...e}),G.blackwhite=t({frag:lo,...e}),G.whiteblack=t({frag:so,...e}),G.timebasedblue=t({frag:ao,...e}),G.lerp=t({frag:fo,...e}),G.mrob=t({frag:uo,...e}),G.redblue=t({frag:co,...e})},Eo=t=>{const{colorMode:e,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=t;(G[e]||G.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},So=`precision mediump float;

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
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`,yo=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
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
    mouseUv = mousePosition;
    scaledPenRadius = penRadius;
    gl_Position = vec4(position, 0, 1);
}
`;let at;const bo=(t,e)=>{at=t({frag:So,vert:yo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]],fk:(n,o)=>{const{maxF:r,minF:i,maxK:a,minK:f}=o.simulationParameters;return[[i,a],[i,f],[r,a],[r,a],[i,f],[r,f]]}},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive")}})},wo=t=>{const{inputBuffer:e,outputBuffer:n,simulationParameters:o,pauseSimulation:r,mouseState:i,worldSize:a}=t;at({inputBuffer:e,outputBuffer:n,pauseSimulation:r,zoomLevel:i.zoomLevel,pan:[i.panX,i.panY],mousePosition:[i.x,i.y],penRadius:1/2**(a-i.penSize),penDensity:i.penDensity,penIsActive:i.pressedLeft,eraserIsActive:i.pressedRight,simulationParameters:o})},Ao=(t,e)=>t==="randomSpots"?ko(e,.001):t==="middleCircleAndRandomSpots"?Do(e,.005,.05):t==="empty"||t==="full"?Oe(e):Bo(e,.02),Do=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),f=i%t;return Math.hypot(t/2-f,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Oe=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),ko=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),Bo=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),$o=t=>{const{controls:e,info:n,mouseState:o,simulationParameters:r}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const f=2**n.worldSize,l=Ao(e.initialConditions,f),m=()=>a.framebuffer({color:a.texture({radius:f,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(m);return bo(a,f),_o(a),a.frame(()=>{e.pause||n.iteration++;let u=s[(n.iteration+1)%2];for(let c=0;c<e.speed;c++){n.iteration++;const v=s[n.iteration%2];u=s[(n.iteration+1)%2],wo({inputBuffer:v,outputBuffer:u,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:o,simulationParameters:r})}Eo({colorMode:e.colors,inputBuffer:u,iteration:n.iteration,outputBuffer:null,zoomState:o})}),a},Ne=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top,{width:i,height:a}=e,f=o/i,l=(a-r)/a;return{x:f,y:l}};const{window:Co}=Ce;function zo(t){let e,n,o,r,i,a,f,l,m,s,u,c;return{c(){e=$("main"),n=$("div"),o=V(),r=$("div"),i=$("label"),a=D("World Size:"),f=V(),l=$("input"),m=V(),s=$("canvas"),this.h()},l(v){e=C(v,"MAIN",{});var p=z(e);n=C(p,"DIV",{id:!0,class:!0}),z(n).forEach(_),o=K(p),r=C(p,"DIV",{});var x=z(r);i=C(x,"LABEL",{for:!0});var w=z(i);a=k(w,"World Size:"),w.forEach(_),f=K(x),l=C(x,"INPUT",{id:!0,type:!0,step:!0}),x.forEach(_),m=K(p),s=C(p,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(s).forEach(_),p.forEach(_),this.h()},h(){S(n,"id","datgui-container"),S(n,"class","svelte-198vt5w"),S(i,"for","worldSize"),S(l,"id","worldSize"),S(l,"type","number"),S(l,"step","1"),S(s,"id","canvas"),S(s,"width",t[1].width),S(s,"height",t[1].height),S(s,"class","svelte-198vt5w")},m(v,p){F(v,e,p),h(e,n),h(e,o),h(e,r),h(r,i),h(i,a),h(r,f),h(r,l),ce(l,t[0].worldSize),h(e,m),h(e,s),u||(c=[R(Co,"keydown",t[2]),R(l,"input",t[7]),R(l,"change",t[6]),R(s,"mousemove",t[4]),R(s,"mousedown",re(t[5])),R(s,"mouseup",t[5]),R(s,"wheel",t[3]),R(s,"keydown",re(t[2])),R(s,"contextmenu",re(Lo))],u=!0)},p(v,[p]){p&1&&de(l.value)!==v[0].worldSize&&ce(l,v[0].worldSize)},i:O,o:O,d(v){v&&_(e),u=!1,ve(c)}}}const Lo=t=>t;function Ro(t,e,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"blackwhite",initialConditions:"full",reset:()=>x(),pause:!1,grid:!1,speed:10},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:12,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:12},f={minK:.02,maxK:.07,minF:0,maxF:.12};let l,m;const s=async()=>{const y=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new y.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const E=document.getElementById("datgui-container");if(!E)throw new Error("Gui container not ready");E.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const L={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty",Full:"full"};l.add(r,"initialConditions",L).onFinishChange(r.reset).name("Initial conditions");const g=l.add(a,"iteration").listen();g.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(i,"penSize",0,a.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(f,"minK",0,f.maxK),l.add(f,"maxK",f.minK,1),l.add(f,"minF",0,f.maxF),l.add(f,"maxF",f.minF,1)},u=y=>{if(y.code==="Space"){r.pause=!r.pause,y.preventDefault();return}if(y.code==="KeyR"&&!y.getModifierState("Control")){x(),y.preventDefault();return}},c=y=>{if(!y.getModifierState("Control"))return;const E=Ne(y);i.panX=E.x,i.panY=E.y,y.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),y.preventDefault()},v=y=>{const E=Ne(y);i.x=E.x,i.y=E.y},p=y=>{if(![0,2].includes(y.button)||!["mouseup","mousedown"].includes(y.type))return;let E=y.type==="mousedown";y.button===0&&(i.pressedLeft=E),y.button===2&&(i.pressedRight=E)},x=()=>{isNaN(a.worldSize)||(a.worldSize>12&&n(0,a.worldSize=12,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),s(),m=$o({controls:r,info:a,mouseState:i,simulationParameters:f}))};le(()=>{x()}),se(()=>{l.destroy(),m.destroy()});function w(){a.worldSize=de(this.value),n(0,a)}return[a,o,u,c,v,p,x,w]}let Po=class extends ee{constructor(e){super(),te(this,e,Ro,zo,ne,{})}};const pe=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"STX 1",type:"N.A",f:.0353,k:.0614},{name:"STX 2",type:"N.A",f:.0201,k:.0602},{name:"STX 2",type:"N.A",f:.0181,k:.0435},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Ye(t,e,n){const o=t.slice();return o[18]=e[n],o}function Ue(t){let e,n,o,r,i,a,f,l,m,s=pe,u=[];for(let c=0;c<s.length;c+=1)u[c]=We(Ye(t,s,c));return a=new be({props:{sketch:t[3]}}),{c(){e=$("div"),n=D("Select f and k parameters on the map of use a preset"),o=V(),r=$("select");for(let c=0;c<u.length;c+=1)u[c].c();i=V(),Z(a.$$.fragment),this.h()},l(c){e=C(c,"DIV",{});var v=z(e);n=k(v,"Select f and k parameters on the map of use a preset"),v.forEach(_),o=K(c),r=C(c,"SELECT",{class:!0});var p=z(r);for(let x=0;x<u.length;x+=1)u[x].l(p);p.forEach(_),i=K(c),J(a.$$.fragment,c),this.h()},h(){S(r,"class","full-width svelte-1qznlxf"),t[0]===void 0&&je(()=>t[5].call(r))},m(c,v){F(c,e,v),h(e,n),F(c,o,v),F(c,r,v);for(let p=0;p<u.length;p+=1)u[p].m(r,null);we(r,t[0]),F(c,i,v),j(a,c,v),f=!0,l||(m=[R(r,"change",t[5]),R(r,"change",t[6])],l=!0)},p(c,v){if(v&0){s=pe;let p;for(p=0;p<s.length;p+=1){const x=Ye(c,s,p);u[p]?u[p].p(x,v):(u[p]=We(x),u[p].c(),u[p].m(r,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=s.length}v&1&&we(r,c[0])},i(c){f||(M(a.$$.fragment,c),f=!0)},o(c){H(a.$$.fragment,c),f=!1},d(c){c&&_(e),c&&_(o),c&&_(r),De(u,c),c&&_(i),Q(a,c),l=!1,ve(m)}}}function We(t){let e,n=t[18].type+"",o,r,i=t[18].name+"",a,f,l=t[18].f+"",m,s,u=t[18].k+"",c,v;return{c(){e=$("option"),o=D(n),r=D(" - "),a=D(i),f=D(" (f/k "),m=D(l),s=D(" / "),c=D(u),v=D(`)
                `),this.h()},l(p){e=C(p,"OPTION",{});var x=z(e);o=k(x,n),r=k(x," - "),a=k(x,i),f=k(x," (f/k "),m=k(x,l),s=k(x," / "),c=k(x,u),v=k(x,`)
                `),x.forEach(_),this.h()},h(){e.__value=t[18],e.value=e.__value},m(p,x){F(p,e,x),h(e,o),h(e,r),h(e,a),h(e,f),h(e,m),h(e,s),h(e,c),h(e,v)},p:O,d(p){p&&_(e)}}}function Io(t){let e,n,o=t[1]?"Close":"F/K selection",r,i,a,f,l,m=t[1]&&Ue(t);return{c(){e=$("div"),n=$("button"),r=D(o),i=V(),m&&m.c(),this.h()},l(s){e=C(s,"DIV",{id:!0,class:!0});var u=z(e);n=C(u,"BUTTON",{class:!0,id:!0});var c=z(n);r=k(c,o),c.forEach(_),i=K(u),m&&m.l(u),u.forEach(_),this.h()},h(){S(n,"class","full-width svelte-1qznlxf"),S(n,"id","toggleButton"),S(e,"id","container"),S(e,"class","svelte-1qznlxf"),Be(e,"no-cursor",To)},m(s,u){F(s,e,u),h(e,n),h(n,r),h(e,i),m&&m.m(e,null),a=!0,f||(l=R(n,"click",t[4]),f=!0)},p(s,[u]){(!a||u&2)&&o!==(o=s[1]?"Close":"F/K selection")&&ae(r,o),s[1]?m?(m.p(s,u),u&2&&M(m,1)):(m=Ue(s),m.c(),M(m,1),m.m(e,null)):m&&(Se(),H(m,1,1,()=>{m=null}),ye())},i(s){a||(M(m),a=!0)},o(s){H(m),a=!1},d(s){s&&_(e),m&&m.d(),f=!1,l()}}}let To=!1;function Fo(t,e){let n=!1,o=1/0,r=null;for(let i=0;i<e.length;i++){const a=e[i],f=e[(i+1)%e.length];if(t[0]===a[0]&&t[1]===a[1])return t;a[1]>t[1]!=f[1]>t[1]&&t[0]<(f[0]-a[0])*(t[1]-a[1])/(f[1]-a[1])+a[0]&&(n=!n);const m=Mo(t,a,f);m<o&&(o=m,r=Vo(t,a,f))}if(n)return t;if(!r)throw new Error("Now closest point found");return r}function Mo(t,e,n){const o=[n[0]-e[0],n[1]-e[1]],r=[t[0]-e[0],t[1]-e[1]],i=o[0]*r[0]+o[1]*r[1],a=o[0]*o[0]+o[1]*o[1],f=i/a;let l;return f<0?l=e:f>1?l=n:l=[e[0]+f*o[0],e[1]+f*o[1]],Math.sqrt((t[0]-l[0])**2+(t[1]-l[1])**2)}function Vo(t,e,n){const o=[n[0]-e[0],n[1]-e[1]],r=[t[0]-e[0],t[1]-e[1]],i=o[0]*r[0]+o[1]*r[1],a=o[0]*o[0]+o[1]*o[1],f=i/a;let l;return f<0?l=e:f>1?l=n:l=[e[0]+f*o[0],e[1]+f*o[1]],l}function Ko(t,e,n){const o=$e();let r=pe[0],i=!0;const a=[0,.12],f=[.03,.07],l=[{f:.1045,k:.0553},{f:.0829,k:.0582},{f:.0664,k:.0595},{f:.0511,k:.0594},{f:.0307,k:.0549},{f:.017,k:.0467},{f:.005,k:.0335},{f:.0076,k:.0472},{f:.0166,k:.0594},{f:.0277,k:.0657},{f:.046,k:.0675},{f:.0757,k:.0643},{f:.0949,k:.0594}],m=d=>{const{f:b,k:B}=d,A=w.map(B,f[0],f[1],0,w.width),P=w.map(b,a[0],a[1],w.height,0);return{x:A,y:P}},s=d=>{d.noStroke();const b=d.textSize();for(const B of pe){const{x:A,y:P}=m({f:B.f,k:B.k}),N=B.f===r.f&&B.k===r.k;d.circle(A,P,3),d.textSize(N?b*2:b),d.fill(N?[240,240,150]:[255,255,255]),d.text(B.name,A-d.textWidth(B.name)/2,P-10)}},u=d=>{d.noFill(),d.stroke("red"),d.strokeWeight(1);const{x:b,y:B}=m(r);d.text("F",10,B>10?B-5:B+15),d.line(0,B,d.width,B),d.text("K",b<d.width-10?b+5:b-15,d.height-10),d.line(b,0,b,d.height),d.circle(b,B,10)},c=d=>{const{f:b,k:B}=r,A=`F: ${b.toFixed(4)}`,P=`K: ${B.toFixed(4)}`,N=d.textSize(),ie=d.height*.05;d.textStyle(d.BOLD),d.textSize(ie),d.fill("white"),d.stroke(0),d.strokeWeight(1),d.text(A,d.width*.05,d.textSize()),d.text(P,d.width*.05,d.textSize()+d.textSize()+6),d.textStyle(d.NORMAL),d.textSize(N)},v=d=>{for(let b=0;b<l.length;b++){const{x:B,y:A}=m(l[b]),{x:P,y:N}=m(l[(b+1)%l.length]);d.fill("white"),d.stroke("white"),d.strokeWeight(1),d.circle(B,A,3),d.circle(P,N,3),d.line(B,A,P,N)}},p=()=>{const d=[r.f,r.k],b=l.map(A=>[A.f,A.k]),B=Fo(d,b);n(0,r.f=B[0],r),n(0,r.k=B[1],r)},x=()=>{let{f:d,k:b}=r;const B=w.noise(w.frameCount*.01),A=w.noise(5321+w.frameCount*.01),N=Math.random()<.97?.001:.01;d=d+(A*2-1)*(a[1]-a[0])*N,b=b+(B*2-1)*(f[1]-f[0])*N,n(0,r={f:d,k:b,name:"custom",type:"manual"}),p(),o("fkupdated",r)};let w;const y=d=>{w=d;let b;d.preload=()=>{b=d.loadImage(tt+"/parameters_map.png")},d.setup=()=>{d.createCanvas(400,400),d.frameRate(55)},d.draw=()=>{d.background(255),d.tint(150,190),d.image(b,0,0,d.width,d.height),s(d),v(d),u(d),c(d),x()}},E=()=>{n(1,i=!i),i||w.remove()};se(()=>w?.remove());function L(){r=Qe(this),n(0,r)}return[r,i,o,y,E,L,()=>o("fkupdated",r)]}class Ho extends ee{constructor(e){super(),te(this,e,Ko,Io,ne,{})}}const Oo=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,No=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Yo=`precision mediump float;

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
`,Uo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Wo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Xo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,qo=`precision mediump float;

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
`,Go=`// Colors scheme inspired by Robert Munafo described here:
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
`,Zo=`// Colors scheme inspired by Robert Munafo described here:
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
`,jo=`precision mediump float;

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
`,Qo=`precision mediump float;

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
`,Jo=`precision mediump float;

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
`,er=`precision mediump float;

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
`,tr=`precision mediump float;

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
`,nr=`precision mediump float;

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

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap(1.0 - (A-0.4)*(1.0/0.6));


    if (A > 0.6) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,or=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/transform_seismic.frag
float colormap_f(float x) {
    return ((-2010.0 * x + 2502.5950459) * x - 481.763180924) / 255.0;
}

float colormap_red(float x) {
    if (x < 0.0) {
        return 3.0 / 255.0;
    } else if (x < 0.238) {
        return ((-1810.0 * x + 414.49) * x + 3.87702) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return (344441250.0 / 323659.0 * x - 23422005.0 / 92474.0) / 255.0;
    } else if (x < 25851.0 / 34402.0) {
        return 1.0;
    } else if (x <= 1.0) {
        return (-688.04 * x + 772.02) / 255.0;
    } else {
        return 83.0 / 255.0;
    }
}

float colormap_green(float x) {
    if (x < 0.0) {
        return 0.0;
    } else if (x < 0.238) {
        return 0.0;
    } else if (x < 51611.0 / 108060.0) {
        return colormap_f(x);
    } else if (x < 0.739376978894039) {
        float xx = x - 51611.0 / 108060.0;
        return ((-914.74 * xx - 734.72) * xx + 255.) / 255.0;
    } else {
        return 0.0;
    }
}

float colormap_blue(float x) {
    if (x < 0.0) {
        return 19.0 / 255.0;
    } else if (x < 0.238) {
        float xx = x - 0.238;
        return (((1624.6 * xx + 1191.4) * xx + 1180.2) * xx + 255.0) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return 1.0;
    } else if (x < 174.5 / 256.0) {
        return (-951.67322673866 * x + 709.532730938451) / 255.0;
    } else if (x < 0.745745353439206) {
        return (-705.250074130877 * x + 559.620050530617) / 255.0;
    } else if (x <= 1.0) {
        return ((-399.29 * x + 655.71) * x - 233.25) / 255.0;
    } else {
        return 23.0 / 255.0;
    }
}

vec4 colormap(float x) {
    return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
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
`,rr=`precision mediump float;

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
`,X={},ar=t=>{const e={vert:Oo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}};X.raw=t({frag:No,...e}),X.A_transform_seismic=t({frag:or,...e}),X.A_gradiant1=t({frag:jo,...e}),X.A_gradiant2=t({frag:Qo,...e}),X.A_MATLAB_cool=t({frag:Jo,...e}),X.A_IDL_CB_RdBu=t({frag:er,...e}),X.A_IDL_CB_RdYiBu=t({frag:tr,...e}),X.A_IDL_CB_BuYiRd=t({frag:nr,...e}),X.B_IDL_CB_RdYiBu=t({frag:rr,...e}),X.grayscale=t({frag:Uo,...e}),X.blackwhite=t({frag:Wo,...e}),X.whiteblack=t({frag:Xo,...e}),X.timebasedblue=t({frag:Yo,...e}),X.lerp=t({frag:qo,...e}),X.mrob=t({frag:Go,...e}),X.redblue=t({frag:Zo,...e})},ir=t=>{const{colorMode:e,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=t;(X[e]||X.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},lr=`precision mediump float;

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
`,sr=`precision mediump float;

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
`;let it;const fr=(t,e)=>{it=t({frag:lr,vert:sr,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,f:t.prop("f"),k:t.prop("k"),radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive"),eraserIsActive:t.prop("eraserIsActive"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},ur=t=>{const{inputBuffer:e,outputBuffer:n,pauseSimulation:o,mouseState:r,simulationParameters:i,worldSize:a}=t;it({inputBuffer:e,outputBuffer:n,pauseSimulation:o,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(a-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...i})},cr=(t,e)=>t==="randomSpots"?vr(e,.001):t==="middleCircleAndRandomSpots"?mr(e,.005,.05):t==="empty"?pr(e):dr(e,.02),mr=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),f=i%t;return Math.hypot(t/2-f,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},pr=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),vr=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),dr=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),xr=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,gr=`precision highp float;

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
`;let lt;const hr=t=>{lt=t({vert:xr,frag:gr,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},_r=t=>{const{inputBuffer:e,outputBuffer:n,zoomState:o}=t;lt({inputBuffer:e,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},Er=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Sr=`precision mediump float;

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
`;let st;const yr=t=>{st=t({frag:Sr,vert:Er,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}})},br=t=>{const{inputBuffer:e,mouseState:n,outputBuffer:o,worldSize:r}=t;st({inputBuffer:e,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},wr=t=>{const{controls:e,info:n,mouseState:o,simulationParameters:r}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const f=2**n.worldSize,l=cr(e.initialConditions,f),m=()=>a.framebuffer({color:a.texture({radius:f,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(m),u=Array(2).fill(0).map(m);return fr(a,f),ar(a),hr(a),yr(a),a.frame(()=>{e.pause||n.iteration++;let c=s[(n.iteration+1)%2];for(let v=0;v<e.speed;v++){n.iteration++;const p=s[n.iteration%2];c=s[(n.iteration+1)%2],ur({inputBuffer:p,outputBuffer:c,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:o,simulationParameters:r})}Ar({inputTexture:c,graphicsTextures:u,controls:e,info:n,mouseState:o})}),a},Ar=t=>{const{inputTexture:e,graphicsTextures:n,controls:o,info:r,mouseState:i}=t;let a=0;a++;const f=e;let l=n[a%2];if(!o.grid&&!o.pen&&(l=null),ir({colorMode:o.colors,inputBuffer:f,iteration:r.iteration,outputBuffer:l,zoomState:i}),o.grid){a++;const m=n[(a+1)%2];let s=n[a%2];o.pen||(s=null),_r({inputBuffer:m,outputBuffer:s,zoomState:i})}if(o.pen){a++;const m=n[(a+1)%2],s=null;br({mouseState:i,worldSize:r.worldSize,inputBuffer:m,outputBuffer:s})}};const{window:Dr}=Ce;function kr(t){let e,n,o,r,i,a,f,l,m,s,u,c,v,p=2**t[0].worldSize+"",x,w,y=2**t[0].worldSize+"",E,L,g=2**(t[0].worldSize+1)+"",d,b,B,A,P,N,ie;return n=new Ho({}),n.$on("fkupdated",t[4]),{c(){e=$("main"),Z(n.$$.fragment),o=V(),r=$("div"),i=V(),a=$("div"),f=$("label"),l=D("World Size:"),m=V(),s=$("input"),u=V(),c=$("span"),v=D("("),x=D(p),w=D(" x "),E=D(y),L=D(" : "),d=D(g),b=D(")"),B=V(),A=$("canvas"),this.h()},l(I){e=C(I,"MAIN",{});var T=z(e);J(n.$$.fragment,T),o=K(T),r=C(T,"DIV",{id:!0,class:!0}),z(r).forEach(_),i=K(T),a=C(T,"DIV",{});var oe=z(a);f=C(oe,"LABEL",{for:!0});var he=z(f);l=k(he,"World Size:"),he.forEach(_),m=K(oe),s=C(oe,"INPUT",{id:!0,type:!0,step:!0}),u=K(oe),c=C(oe,"SPAN",{});var q=z(c);v=k(q,"("),x=k(q,p),w=k(q," x "),E=k(q,y),L=k(q," : "),d=k(q,g),b=k(q,")"),q.forEach(_),oe.forEach(_),B=K(T),A=C(T,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(A).forEach(_),T.forEach(_),this.h()},h(){S(r,"id","datgui-container"),S(r,"class","svelte-18zf5fr"),S(f,"for","worldSize"),S(s,"id","worldSize"),S(s,"type","number"),S(s,"step","1"),S(A,"id","canvas"),S(A,"width",t[1].width),S(A,"height",t[1].height),S(A,"class","svelte-18zf5fr")},m(I,T){F(I,e,T),j(n,e,null),h(e,o),h(e,r),h(e,i),h(e,a),h(a,f),h(f,l),h(a,m),h(a,s),ce(s,t[0].worldSize),h(a,u),h(a,c),h(c,v),h(c,x),h(c,w),h(c,E),h(c,L),h(c,d),h(c,b),h(e,B),h(e,A),P=!0,N||(ie=[R(Dr,"keydown",t[2]),R(s,"input",t[5]),R(s,"change",t[3]),R(A,"contextmenu",re(Br))],N=!0)},p(I,[T]){T&1&&de(s.value)!==I[0].worldSize&&ce(s,I[0].worldSize),(!P||T&1)&&p!==(p=2**I[0].worldSize+"")&&ae(x,p),(!P||T&1)&&y!==(y=2**I[0].worldSize+"")&&ae(E,y),(!P||T&1)&&g!==(g=2**(I[0].worldSize+1)+"")&&ae(d,g)},i(I){P||(M(n.$$.fragment,I),P=!0)},o(I){H(n.$$.fragment,I),P=!1},d(I){I&&_(e),Q(n),N=!1,ve(ie)}}}const Br=t=>t;function $r(t,e,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>p(),pause:!1,grid:!1,pen:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:8},f={f:pe[0].f,k:pe[0].k};let l,m;const s=async()=>{const y=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new y.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const E=document.getElementById("datgui-container");if(!E)throw new Error("Gui container not ready");E.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"pen").name("Show pen"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const L={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",L).onFinishChange(r.reset).name("Initial conditions");const g=l.add(a,"iteration").listen();g.domElement.style.pointerEvents="none",l.add(r,"speed",1,200).name("Simulation speed").listen(),l.add(i,"penSize",0,a.worldSize).name("Pen size").listen(),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},u=y=>{if(y.code==="Space"){r.pause=!r.pause,y.preventDefault();return}if(y.code==="KeyR"&&!y.getModifierState("Control")){p(),y.preventDefault();return}};let c;const v=()=>{i.x=Math.random(),i.y=Math.random(),i.penSize=Math.random()*3,i.pressedLeft=!0,setTimeout(()=>i.pressedLeft=!1,500),c=setTimeout(v,Math.random()*5e3)},p=()=>{isNaN(a.worldSize)||(a.worldSize>11&&n(0,a.worldSize=11,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),s(),m=wr({controls:r,info:a,mouseState:i,simulationParameters:f}),c&&clearTimeout(c),v())},x=y=>{f.f=y.detail.f,f.k=y.detail.k,f.f>.03?r.speed=50:r.speed=2};le(()=>{p()}),se(()=>{l.destroy(),m.destroy()});function w(){a.worldSize=de(this.value),n(0,a)}return[a,o,u,p,x,w]}class Cr extends ee{constructor(e){super(),te(this,e,$r,kr,ne,{})}}function Xe(t,e,n){const o=t.slice();return o[1]=e[n],o}function qe(t,e,n){const o=t.slice();return o[1]=e[n],o}function zr(t){let e;return{c(){e=D("About")},l(n){e=k(n,"About")},m(n,o){F(n,e,o)},d(n){n&&_(e)}}}function Lr(t){let e=t[1].title+"",n;return{c(){n=D(e)},l(o){n=k(o,e)},m(o,r){F(o,n,r)},p:O,d(o){o&&_(n)}}}function Ge(t){let e,n;return e=new et({props:{$$slots:{default:[Lr]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Rr(t){let e,n,o,r;e=new et({props:{$$slots:{default:[zr]},$$scope:{ctx:t}}});let i=t[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=Ge(qe(t,i,l));const f=l=>H(a[l],1,1,()=>{a[l]=null});return{c(){Z(e.$$.fragment),n=V();for(let l=0;l<a.length;l+=1)a[l].c();o=Ae()},l(l){J(e.$$.fragment,l),n=K(l);for(let m=0;m<a.length;m+=1)a[m].l(l);o=Ae()},m(l,m){j(e,l,m),F(l,n,m);for(let s=0;s<a.length;s+=1)a[s].m(l,m);F(l,o,m),r=!0},p(l,m){const s={};if(m&64&&(s.$$scope={dirty:m,ctx:l}),e.$set(s),m&1){i=l[0];let u;for(u=0;u<i.length;u+=1){const c=qe(l,i,u);a[u]?(a[u].p(c,m),M(a[u],1)):(a[u]=Ge(c),a[u].c(),M(a[u],1),a[u].m(o.parentNode,o))}for(Se(),u=i.length;u<a.length;u+=1)f(u);ye()}},i(l){if(!r){M(e.$$.fragment,l);for(let m=0;m<i.length;m+=1)M(a[m]);r=!0}},o(l){H(e.$$.fragment,l),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)H(a[m]);r=!1},d(l){Q(e,l),l&&_(n),De(a,l),l&&_(o)}}}function Pr(t){let e,n,o,r,i,a,f,l,m,s,u,c;return{c(){e=$("p"),n=D("Experiments with "),o=$("a"),r=D("Reaction-diffusion systems"),i=V(),a=$("p"),f=D("The code is based on "),l=$("a"),m=D("this tutorial"),s=D(`
                but reimplemented in a glsl shader with
                `),u=$("a"),c=D("regl"),this.h()},l(v){e=C(v,"P",{});var p=z(e);n=k(p,"Experiments with "),o=C(p,"A",{href:!0,target:!0});var x=z(o);r=k(x,"Reaction-diffusion systems"),x.forEach(_),p.forEach(_),i=K(v),a=C(v,"P",{});var w=z(a);f=k(w,"The code is based on "),l=C(w,"A",{href:!0,target:!0});var y=z(l);m=k(y,"this tutorial"),y.forEach(_),s=k(w,`
                but reimplemented in a glsl shader with
                `),u=C(w,"A",{href:!0,target:!0});var E=z(u);c=k(E,"regl"),E.forEach(_),w.forEach(_),this.h()},h(){S(o,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),S(o,"target","none"),S(l,"href","https://karlsims.com/rd.html"),S(l,"target","none"),S(u,"href","https://github.com/regl-project/regl"),S(u,"target","none")},m(v,p){F(v,e,p),h(e,n),h(e,o),h(o,r),F(v,i,p),F(v,a,p),h(a,f),h(a,l),h(l,m),h(a,s),h(a,u),h(u,c)},p:O,d(v){v&&_(e),v&&_(i),v&&_(a)}}}function Ir(t){let e,n,o;var r=t[1].component;function i(a){return{}}return r&&(e=ze(r,i())),{c(){e&&Z(e.$$.fragment),n=V()},l(a){e&&J(e.$$.fragment,a),n=K(a)},m(a,f){e&&j(e,a,f),F(a,n,f),o=!0},p(a,f){if(r!==(r=a[1].component)){if(e){Se();const l=e;H(l.$$.fragment,1,0,()=>{Q(l,1)}),ye()}r?(e=ze(r,i()),Z(e.$$.fragment),M(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}},i(a){o||(e&&M(e.$$.fragment,a),o=!0)},o(a){e&&H(e.$$.fragment,a),o=!1},d(a){e&&Q(e,a),a&&_(n)}}}function Ze(t){let e,n;return e=new Je({props:{$$slots:{default:[Ir]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Tr(t){let e,n,o,r,i,a;e=new ct({props:{$$slots:{default:[Rr]},$$scope:{ctx:t}}}),o=new Je({props:{$$slots:{default:[Pr]},$$scope:{ctx:t}}});let f=t[0],l=[];for(let s=0;s<f.length;s+=1)l[s]=Ze(Xe(t,f,s));const m=s=>H(l[s],1,1,()=>{l[s]=null});return{c(){Z(e.$$.fragment),n=V(),Z(o.$$.fragment),r=V();for(let s=0;s<l.length;s+=1)l[s].c();i=Ae()},l(s){J(e.$$.fragment,s),n=K(s),J(o.$$.fragment,s),r=K(s);for(let u=0;u<l.length;u+=1)l[u].l(s);i=Ae()},m(s,u){j(e,s,u),F(s,n,u),j(o,s,u),F(s,r,u);for(let c=0;c<l.length;c+=1)l[c].m(s,u);F(s,i,u),a=!0},p(s,u){const c={};u&64&&(c.$$scope={dirty:u,ctx:s}),e.$set(c);const v={};if(u&64&&(v.$$scope={dirty:u,ctx:s}),o.$set(v),u&1){f=s[0];let p;for(p=0;p<f.length;p+=1){const x=Xe(s,f,p);l[p]?(l[p].p(x,u),M(l[p],1)):(l[p]=Ze(x),l[p].c(),M(l[p],1),l[p].m(i.parentNode,i))}for(Se(),p=f.length;p<l.length;p+=1)m(p);ye()}},i(s){if(!a){M(e.$$.fragment,s),M(o.$$.fragment,s);for(let u=0;u<f.length;u+=1)M(l[u]);a=!0}},o(s){H(e.$$.fragment,s),H(o.$$.fragment,s),l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)H(l[u]);a=!1},d(s){Q(e,s),s&&_(n),Q(o,s),s&&_(r),De(l,s),s&&_(i)}}}function Fr(t){let e,n,o;return n=new ut({props:{$$slots:{default:[Tr]},$$scope:{ctx:t}}}),{c(){e=$("div"),Z(n.$$.fragment)},l(r){e=C(r,"DIV",{});var i=z(e);J(n.$$.fragment,i),i.forEach(_)},m(r,i){F(r,e,i),j(n,e,null),o=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),n.$set(a)},i(r){o||(M(n.$$.fragment,r),o=!0)},o(r){H(n.$$.fragment,r),o=!1},d(r){r&&_(e),Q(n)}}}function Mr(t){return[[{title:"Auto visualizer",component:Cr},{title:"V7",component:no},{title:"Parameters map",component:Po},{title:"V6",component:un},{title:"V5",component:Jt},{title:"V4",component:Xt},{title:"V3",component:Yt},{title:"V2",component:Pt},{title:"V1",component:wt}]]}class Vr extends ee{constructor(e){super(),te(this,e,Mr,Fr,ne,{})}}function Kr(t){let e,n;return e=new Vr({}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}class e0 extends ee{constructor(e){super(),te(this,e,null,Kr,ne,{})}}export{e0 as default};
