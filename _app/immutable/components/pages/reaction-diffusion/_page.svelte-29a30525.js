import{S as ee,i as te,s as ne,k as C,l as z,m as R,h as E,n as S,b as T,X as ft,B as O,Y as $e,o as le,w as Z,x as J,y as j,f as M,t as H,z as Q,Q as se,K as L,Z as re,M as ve,q as D,a as V,r as B,c as K,U as ke,D as _,u as ae,g as Se,d as ye,I as Qe,J as we,L as De,N as Je,O as ce,P as de,_ as Ce,e as Ae,v as ze}from"../../../chunks/index-2107b80f.js";import{T as ct,a as mt,b as et,c as tt}from"../../../chunks/TabPanel-dec752e3.js";import{_ as xe}from"../../../chunks/preload-helper-41c905a7.js";import{R as ge}from"../../../chunks/regl-89b00fbf.js";import{b as nt}from"../../../chunks/paths-b4419565.js";function pt(t){let e,n,o;return{c(){e=C("div"),this.h()},l(r){e=z(r,"DIV",{style:!0,class:!0}),R(e).forEach(E),this.h()},h(){S(e,"style",t[0]),S(e,"class","m-0")},m(r,i){T(r,e,i),n||(o=ft(t[1].call(null,e)),n=!0)},p(r,[i]){i&1&&S(e,"style",r[0])},i:O,o:O,d(r){r&&E(e),n=!1,o()}}}function vt(t,e){return e.forEach(([n,o])=>t[n]=o),t}function dt(t,e,n){let{target:o=void 0}=e,{sketch:r=void 0}=e,{parentDivStyle:i="display: block;"}=e,{debug:a=!1}=e,s;const l=$e(),m={ref(){l("ref",o)},instance(){l("instance",s)}};function u(f){return n(2,o=f),{destroy(){n(2,o=void 0)}}}return le(async()=>{const f=await xe(()=>import("../../../chunks/p5.min-b96f42d1.js").then(x=>x.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:c}=f,p=Object.entries(f).filter(([x,w])=>w instanceof Function&&x[0]!=="_"&&x!=="default");a&&console.log("available p5 native classes",p),s=new c(x=>(x=vt(x,p),a&&console.log("p5 instance",x),window._p5Instance=x,r(x)),o),m.ref(),m.instance()}),t.$$set=f=>{"target"in f&&n(2,o=f.target),"sketch"in f&&n(3,r=f.sketch),"parentDivStyle"in f&&n(0,i=f.parentDivStyle),"debug"in f&&n(4,a=f.debug)},[i,u,o,r,a]}class be extends ee{constructor(e){super(),te(this,e,dt,pt,ne,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const xt=t=>{const e=[];for(let a=0;a<t.height;a++){e.push([]);for(let s=0;s<t.width;s++)e[e.length-1].push({A:1,B:0})}const n=5,o=5,r=Math.floor(t.width/2),i=Math.floor(t.height/2);for(let a=i-o;a<i+o;a++)for(let s=r-n;s<r+n;s++)e[a][s].B=1;return e},gt=(t,e)=>{const n={width:t.width/e[0].length,height:t.height/e.length};for(let o=0;o<e.length;o++)for(let r=0;r<e[0].length;r++){const{A:i,B:a}=e[o][r];t.fill(i*255,a*255,0),t.rect(r*n.width,o*n.height,n.width,n.height)}},ht=1,_t=.5,Le=.055,Et=.062,St=t=>{const e=[];for(let n=0;n<t.length;n++){e.push([]);for(let o=0;o<t[0].length;o++){const{A:r,B:i}=t[n][o],a=Re(t,{x:o,y:n},"A"),s=Re(t,{x:o,y:n},"B"),l=r+(ht*a-r*i*i+Le*(1-r)),m=i+(_t*s+r*i*i-(Et+Le)*i);e[n].push({A:l,B:m})}}return e},Re=(t,e,n)=>{const o=yt(t,e);let r=0;for(const i of o){const{coord:a,weight:s}=i;r+=t[a.y][a.x][n]*s}return r},yt=(t,e)=>{const{x:n,y:o}=e,r=t[0].length,i=t.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},s={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:o},weight:.2},u={coord:{x:n,y:o},weight:-1},f={coord:{x:n<r-1?n+1:0,y:o},weight:.2},c={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,s,l,m,u,f,c,v,p]};function bt(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function wt(t){const e={width:200,height:200};let n;return[r=>{let i;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),i=xt(e)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=St(i);gt(n,i)}}]}let At=class extends ee{constructor(e){super(),te(this,e,wt,bt,ne,{})}},Y,ue;const Dt=t=>{Y=[],ue=[];for(let i=0;i<t.height;i++){Y.push([]),ue.push([]);for(let a=0;a<t.width;a++)Y[Y.length-1].push({A:1,B:0}),ue[Y.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(t.width/2),r=Math.floor(t.height/2);for(let i=r-n;i<r+n;i++)for(let a=o-e;a<o+e;a++)Y[i][a].B=1;return Y},Bt=t=>{const e={width:t.width/Y[0].length,height:t.height/Y.length};for(let n=0;n<Y.length;n++)for(let o=0;o<Y[0].length;o++){const{A:r,B:i}=Y[n][o];t.fill(r*255,i*255,0),t.rect(o*e.width,n*e.height,e.width,e.height)}},kt=1,$t=.5,Pe=.055,Ct=.062,zt=()=>{for(let e=0;e<Y.length;e++)for(let n=0;n<Y[0].length;n++){const{A:o,B:r}=Y[e][n],i=Ie(Y,{x:n,y:e},"A"),a=Ie(Y,{x:n,y:e},"B"),s=o+(kt*i-o*r*r+Pe*(1-o)),l=r+($t*a+o*r*r-(Ct+Pe)*r);ue[e][n]={A:s,B:l}}const t=Y;return Y=ue,ue=t,Y},Ie=(t,e,n)=>{const o=Lt(t,e);let r=0;for(const i of o){const{coord:a,weight:s}=i;r+=t[a.y][a.x][n]*s}return r},Lt=(t,e)=>{const{x:n,y:o}=e,r=t[0].length,i=t.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},s={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:o},weight:.2},u={coord:{x:n,y:o},weight:-1},f={coord:{x:n<r-1?n+1:0,y:o},weight:.2},c={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,s,l,m,u,f,c,v,p]};function Rt(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Pt(t){const e={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),Dt(e)},r.draw=()=>{for(let i=0;i<5;i++)zt();Bt(n)}}]}let It=class extends ee{constructor(e){super(),te(this,e,Pt,Rt,ne,{})}},N,fe;const Tt=t=>{N=[],fe=[];for(let i=0;i<t.height;i++){N.push([]),fe.push([]);for(let a=0;a<t.width;a++)N[N.length-1].push({A:1,B:0}),fe[N.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(t.width/2),r=Math.floor(t.height/2);for(let i=r-n;i<r+n;i++)for(let a=o-e;a<o+e;a++)N[i][a].B=1;return N},Ft=t=>{const e={width:t.width/N[0].length,height:t.height/N.length};for(let n=0;n<N.length;n++)for(let o=0;o<N[0].length;o++){const{A:r,B:i}=N[n][o];t.fill(r*255,i*255,0),t.rect(o*e.width,n*e.height,e.width,e.height)}},Mt=1,Vt=.5,Te=.055,Kt=.062,Ht=()=>{for(let e=0;e<N.length;e++)for(let n=0;n<N[0].length;n++){const{A:o,B:r}=N[e][n],i=Fe(N,{x:n,y:e},"A"),a=Fe(N,{x:n,y:e},"B"),s=o+(Mt*i-o*r*r+Te*(1-o)),l=r+(Vt*a+o*r*r-(Kt+Te)*r);fe[e][n]={A:s,B:l}}const t=N;return N=fe,fe=t,N},Fe=(t,e,n)=>{const o=Ot(t,e);let r=0;for(const i of o){const{coord:a,weight:s}=i;r+=t[a.y][a.x][n]*s}return r},Ot=(t,e)=>{const{x:n,y:o}=e,r=t[0].length,i=t.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},s={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:o},weight:.2},u={coord:{x:n,y:o},weight:-1},f={coord:{x:n<r-1?n+1:0,y:o},weight:.2},c={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,s,l,m,u,f,c,v,p]};function Yt(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Nt(t){const e={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),Tt(e)},r.draw=()=>{for(let i=0;i<5;i++)Ht();Ft(n)}}]}let Ut=class extends ee{constructor(e){super(),te(this,e,Nt,Yt,ne,{})}};function Wt(t){let e;return{c(){e=C("canvas"),this.h()},l(n){e=z(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(E),this.h()},h(){S(e,"id","canvas"),S(e,"width",t[0].width),S(e,"height",t[0].height),S(e,"class","svelte-1b0ol19")},m(n,o){T(n,e,o)},p:O,i:O,o:O,d(n){n&&E(e)}}}function Xt(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,o=n*.05,r=Array(n*n).fill(0).map((i,a)=>{const s=Math.floor(a/n),l=a%n;return Math.hypot(n/2-l,n/2-s)<o?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return le(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i}),s=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
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
}`,framebuffer:u=>s[(u.tick+1)%2]}),m=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:u})=>s[u%2]},depth:{enable:!1},count:3});a.frame(()=>{m(()=>{a.draw(),l()})})}),[e]}let qt=class extends ee{constructor(e){super(),te(this,e,Xt,Wt,ne,{})}};const Gt=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Zt=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),jt=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),_e=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Qt(t){let e;return{c(){e=C("canvas"),this.h()},l(n){e=z(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(E),this.h()},h(){S(e,"id","canvas"),S(e,"width",t[0].width),S(e,"height",t[0].height),S(e,"class","svelte-1b0ol19")},m(n,o){T(n,e,o)},p:O,i:O,o:O,d(n){n&&E(e)}}}function Jt(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},o={iteration:0},r={f:_e[n.presetParams].f,k:_e[n.presetParams].k};let i,a;const s=async()=>{const u=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new u.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const f=_e.reduce((p,x,w)=>(p[x.name]=w,p),{});i.add(n,"presetParams",f).onFinishChange(()=>{r.f=_e[n.presetParams].f,r.k=_e[n.presetParams].k});const c={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",c).onFinishChange(n.reset);const v=i.add(o,"iteration").listen();v.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return n.pause=!n.pause,u.preventDefault();if(u.code==="KeyR")return m(),u.preventDefault()})},m=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");a&&a.destroy(),a=ge({extensions:["OES_texture_float"],canvas:u}),o.iteration=0;const f=2**11;let c;n.initialConditions==="randomSpots"?c=Zt(f,.001):n.initialConditions==="middleCircleAndRandomSpots"?c=Gt(f,.005,.05):c=jt(f,.02);const v=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:f,data:c,wrap:"repeat",type:"float"}),depthStencil:!1})),p=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:w})=>v[w%2]},depth:{enable:!1},count:3});a.frame(()=>{x(()=>{a.draw(),!n.pause&&(o.iteration++,p({Da:1,Db:.5,...r}))})})};return le(()=>{s(),l(),m()}),se(()=>{i.destroy(),a.destroy()}),[e]}let en=class extends ee{constructor(e){super(),te(this,e,Jt,Qt,ne,{})}};const tn=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},nn=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),on=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),Ee=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],rn=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,an=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,ln=`precision mediump float;

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
`;function sn(t){let e,n,o;return{c(){e=C("canvas"),this.h()},l(r){e=z(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(E),this.h()},h(){S(e,"id","canvas"),S(e,"width",t[0].width),S(e,"height",t[0].height),S(e,"class","svelte-1b0ol19")},m(r,i){T(r,e,i),n||(o=[L(e,"mousemove",t[1]),L(e,"mousedown",re(t[2])),L(e,"mouseup",t[2]),L(e,"contextmenu",re(un))],n=!0)},p:O,i:O,o:O,d(r){r&&E(e),n=!1,ve(o)}}}const Be=11,un=t=>t;function fn(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>u(),pause:!1},o={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:Ee[n.presetParams].f,k:Ee[n.presetParams].k};let a,s;const l=async()=>{const v=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new v.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const p=Ee.reduce((A,h,k)=>(A[h.name]=k,A),{});a.add(n,"presetParams",p).onFinishChange(()=>{i.f=Ee[n.presetParams].f,i.k=Ee[n.presetParams].k});const x={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",x).onFinishChange(n.reset);const w=a.add(r,"iteration").listen();w.domElement.style.pointerEvents="none",a.add(o,"penSize",1,Be,1).name("Pen size")},m=()=>{document.addEventListener("keydown",v=>{if(v.code==="Space")return n.pause=!n.pause,v.preventDefault();if(v.code==="KeyR")return u(),v.preventDefault()})},u=()=>{const v=document.getElementById("canvas");if(!v)throw new Error("Canvas container not ready");s&&s.destroy(),s=ge({extensions:["OES_texture_float"],canvas:v}),r.iteration=0;const p=2**Be;let x;n.initialConditions==="randomSpots"?x=nn(p,.001):n.initialConditions==="middleCircleAndRandomSpots"?x=tn(p,.005,.05):x=on(p,.02);const w=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:x,wrap:"repeat",type:"float"}),depthStencil:!1})),A=s({frag:ln,framebuffer:k=>w[(k.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}}),h=s({frag:an,vert:rn,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:k})=>w[k%2]},depth:{enable:!1},count:3});s.frame(()=>{h(()=>{s.draw(),n.pause||r.iteration++,A({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[o.x,o.y],penRadius:1/2**(Be-o.penSize),penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...i})})})},f=v=>{if(!v.currentTarget)throw new Error("No target for the onmousemove event");if(!v.currentTarget.width||!v.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:x}=v,{width:w,height:A}=v.currentTarget,h=p/w,k=(A-x)/A;o.x=h,o.y=k},c=v=>{if(![0,2].includes(v.button)||!["mouseup","mousedown"].includes(v.type))return;let p=v.type==="mousedown";v.button===0&&(o.pressedLeft=p),v.button===2&&(o.pressedRight=p)};return le(()=>{l(),m(),u()}),se(()=>{a.destroy(),s.destroy()}),[e,f,c]}let cn=class extends ee{constructor(e){super(),te(this,e,fn,sn,ne,{})}};const me=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"STX 1",type:"N.A",f:.0353,k:.0614},{name:"STX 2",type:"N.A",f:.0201,k:.0602},{name:"STX 2",type:"N.A",f:.0181,k:.0435},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Me(t,e,n){const o=t.slice();return o[17]=e[n],o}function Ve(t){let e,n,o,r,i,a,s,l,m,u=me,f=[];for(let c=0;c<u.length;c+=1)f[c]=Ke(Me(t,u,c));return a=new be({props:{sketch:t[4]}}),{c(){e=C("div"),n=D("Select f and k parameters on the map of use a preset"),o=V(),r=C("select");for(let c=0;c<f.length;c+=1)f[c].c();i=V(),Z(a.$$.fragment),this.h()},l(c){e=z(c,"DIV",{});var v=R(e);n=B(v,"Select f and k parameters on the map of use a preset"),v.forEach(E),o=K(c),r=z(c,"SELECT",{class:!0});var p=R(r);for(let x=0;x<f.length;x+=1)f[x].l(p);p.forEach(E),i=K(c),J(a.$$.fragment,c),this.h()},h(){S(r,"class","full-width svelte-1qznlxf"),t[0]===void 0&&Qe(()=>t[6].call(r))},m(c,v){T(c,e,v),_(e,n),T(c,o,v),T(c,r,v);for(let p=0;p<f.length;p+=1)f[p].m(r,null);we(r,t[0]),T(c,i,v),j(a,c,v),s=!0,l||(m=[L(r,"change",t[6]),L(r,"change",t[7])],l=!0)},p(c,v){if(v&0){u=me;let p;for(p=0;p<u.length;p+=1){const x=Me(c,u,p);f[p]?f[p].p(x,v):(f[p]=Ke(x),f[p].c(),f[p].m(r,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=u.length}v&1&&we(r,c[0])},i(c){s||(M(a.$$.fragment,c),s=!0)},o(c){H(a.$$.fragment,c),s=!1},d(c){c&&E(e),c&&E(o),c&&E(r),De(f,c),c&&E(i),Q(a,c),l=!1,ve(m)}}}function Ke(t){let e,n=t[17].type+"",o,r,i=t[17].name+"",a,s,l=t[17].f+"",m,u,f=t[17].k+"",c,v;return{c(){e=C("option"),o=D(n),r=D(" - "),a=D(i),s=D(" (f/k "),m=D(l),u=D(" / "),c=D(f),v=D(`)
                `),this.h()},l(p){e=z(p,"OPTION",{});var x=R(e);o=B(x,n),r=B(x," - "),a=B(x,i),s=B(x," (f/k "),m=B(x,l),u=B(x," / "),c=B(x,f),v=B(x,`)
                `),x.forEach(E),this.h()},h(){e.__value=t[17],e.value=e.__value},m(p,x){T(p,e,x),_(e,o),_(e,r),_(e,a),_(e,s),_(e,m),_(e,u),_(e,c),_(e,v)},p:O,d(p){p&&E(e)}}}function mn(t){let e,n,o=t[1]?"Close":"F/K selection",r,i,a,s,l,m=t[1]&&Ve(t);return{c(){e=C("div"),n=C("button"),r=D(o),i=V(),m&&m.c(),this.h()},l(u){e=z(u,"DIV",{id:!0,class:!0});var f=R(e);n=z(f,"BUTTON",{class:!0,id:!0});var c=R(n);r=B(c,o),c.forEach(E),i=K(f),m&&m.l(f),f.forEach(E),this.h()},h(){S(n,"class","full-width svelte-1qznlxf"),S(n,"id","toggleButton"),S(e,"id","container"),S(e,"class","svelte-1qznlxf"),ke(e,"no-cursor",t[2])},m(u,f){T(u,e,f),_(e,n),_(n,r),_(e,i),m&&m.m(e,null),a=!0,s||(l=L(n,"click",t[5]),s=!0)},p(u,[f]){(!a||f&2)&&o!==(o=u[1]?"Close":"F/K selection")&&ae(r,o),u[1]?m?(m.p(u,f),f&2&&M(m,1)):(m=Ve(u),m.c(),M(m,1),m.m(e,null)):m&&(Se(),H(m,1,1,()=>{m=null}),ye()),(!a||f&4)&&ke(e,"no-cursor",u[2])},i(u){a||(M(m),a=!0)},o(u){H(m),a=!1},d(u){u&&E(e),m&&m.d(),s=!1,l()}}}function pn(t,e,n){const o=$e();let r=me[0],i=!0;const a=[0,.12],s=[.03,.07],l=g=>{const{f:d,k:y}=g,$=p.map(y,s[0],s[1],0,p.width),b=p.map(d,a[0],a[1],p.height,0);return{x:$,y:b}},m=g=>{const{x:d,y}=g,$=p.map(y,p.height,0,a[0],a[1]),b=p.map(d,0,p.width,s[0],s[1]);return{f:$,k:b}},u=g=>{const d=g.mouseX,y=g.mouseY;if(d<0||y<0||d>g.width||y>g.height)return;const{f:$,k:b}=m({x:g.mouseX,y:g.mouseY});n(0,r={f:$,k:b,name:"custom",type:"manual"}),o("fkupdated",r)},f=g=>{g.noStroke();const d=g.textSize();for(const y of me){const{x:$,y:b}=l({f:y.f,k:y.k}),F=y.f===r.f&&y.k===r.k;g.circle($,b,3),g.textSize(F?d*2:d),g.fill(F?[240,240,150]:[255,255,255]),g.text(y.name,$-g.textWidth(y.name)/2,b-10)}},c=g=>{g.noFill(),g.stroke("red");const{x:d,y}=l(r);g.text("F",10,y>10?y-5:y+15),g.line(0,y,g.width,y),g.text("K",d<g.width-10?d+5:d-15,g.height-10),g.line(d,0,d,g.height),g.circle(d,y,10)},v=g=>{const{f:d,k:y}=r,$=`F: ${d.toFixed(4)}`,b=`K: ${y.toFixed(4)}`,F=g.textSize(),X=g.height*.05;g.textStyle(g.BOLD),g.textSize(X),g.fill("white"),g.stroke(0),g.strokeWeight(1),g.text($,g.width*.05,g.textSize()),g.text(b,g.width*.05,g.textSize()+g.textSize()+6),g.textStyle(g.NORMAL),g.textSize(F)};let p,x=!1;const w=g=>{p=g;let d;g.preload=()=>{d=g.loadImage(nt+"/parameters_map.png")},g.setup=()=>{g.createCanvas(400,400),g.frameRate(55)},g.draw=()=>{g.background(255),g.tint(150,190),g.image(d,0,0,g.width,g.height),f(g),c(g),v(g),n(2,x=!1),g.mouseIsPressed&&(u(g),n(2,x=!0))}},A=()=>{n(1,i=!i),i||p.remove()};se(()=>p?.remove());function h(){r=Je(this),n(0,r)}return[r,i,x,o,w,A,h,()=>o("fkupdated",r)]}class vn extends ee{constructor(e){super(),te(this,e,pn,mn,ne,{})}}const dn=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,xn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,gn=`precision mediump float;

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
`,hn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,_n=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,En=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Sn=`precision mediump float;

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

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,bn=`// Colors scheme inspired by Robert Munafo described here:
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
`,wn=`precision mediump float;

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
`,An=`precision mediump float;

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
`,Dn=`precision mediump float;

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
`,Bn=`precision mediump float;

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
`,$n=`precision mediump float;

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
`,Cn=`precision mediump float;

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
`,zn=`precision mediump float;

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
`,U={},Ln=t=>{const e={vert:dn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}};U.raw=t({frag:xn,...e}),U.A_transform_seismic=t({frag:Cn,...e}),U.A_gradiant1=t({frag:wn,...e}),U.A_gradiant2=t({frag:An,...e}),U.A_MATLAB_cool=t({frag:Dn,...e}),U.A_IDL_CB_RdBu=t({frag:Bn,...e}),U.A_IDL_CB_RdYiBu=t({frag:kn,...e}),U.A_IDL_CB_BuYiRd=t({frag:$n,...e}),U.B_IDL_CB_RdYiBu=t({frag:zn,...e}),U.grayscale=t({frag:hn,...e}),U.blackwhite=t({frag:_n,...e}),U.whiteblack=t({frag:En,...e}),U.timebasedblue=t({frag:gn,...e}),U.lerp=t({frag:Sn,...e}),U.mrob=t({frag:yn,...e}),U.redblue=t({frag:bn,...e})},Rn=t=>{const{colorMode:e,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=t;(U[e]||U.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},Pn=`precision mediump float;

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
`,In=`precision mediump float;

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
`;let ot;const Tn=(t,e)=>{ot=t({frag:Pn,vert:In,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,f:t.prop("f"),k:t.prop("k"),radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive"),eraserIsActive:t.prop("eraserIsActive"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},Fn=t=>{const{inputBuffer:e,outputBuffer:n,pauseSimulation:o,mouseState:r,simulationParameters:i,worldSize:a}=t;ot({inputBuffer:e,outputBuffer:n,pauseSimulation:o,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(a-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...i})},Mn=(t,e)=>t==="randomSpots"?Hn(e,.001):t==="middleCircleAndRandomSpots"?Vn(e,.005,.05):t==="empty"?Kn(e):On(e,.02),Vn=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Kn=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),Hn=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),On=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),Yn=`precision highp float;

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
`;let rt;const Un=t=>{rt=t({vert:Yn,frag:Nn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},Wn=t=>{const{inputBuffer:e,outputBuffer:n,zoomState:o}=t;rt({inputBuffer:e,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},Xn=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,qn=`precision mediump float;

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
`;let at;const Gn=t=>{at=t({frag:qn,vert:Xn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}})},Zn=t=>{const{inputBuffer:e,mouseState:n,outputBuffer:o,worldSize:r}=t;at({inputBuffer:e,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},jn=t=>{const{controls:e,info:n,mouseState:o,simulationParameters:r}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const s=2**n.worldSize,l=Mn(e.initialConditions,s),m=()=>a.framebuffer({color:a.texture({radius:s,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),u=Array(2).fill(0).map(m),f=Array(2).fill(0).map(m);return Tn(a,s),Ln(a),Un(a),Gn(a),a.frame(()=>{e.pause||n.iteration++;let c=u[(n.iteration+1)%2];for(let v=0;v<e.speed;v++){n.iteration++;const p=u[n.iteration%2];c=u[(n.iteration+1)%2],Fn({inputBuffer:p,outputBuffer:c,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:o,simulationParameters:r})}Qn({inputTexture:c,graphicsTextures:f,controls:e,info:n,mouseState:o})}),a},Qn=t=>{const{inputTexture:e,graphicsTextures:n,controls:o,info:r,mouseState:i}=t;let a=0;a++;const s=e,l=n[a%2];if(Rn({colorMode:o.colors,inputBuffer:s,iteration:r.iteration,outputBuffer:l,zoomState:i}),o.grid){a++;const f=n[(a+1)%2],c=n[a%2];Wn({inputBuffer:f,outputBuffer:c,zoomState:i})}a++;const m=n[(a+1)%2],u=null;Zn({mouseState:i,worldSize:r.worldSize,inputBuffer:m,outputBuffer:u})},He=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top,{width:i,height:a}=e,s=o/i,l=(a-r)/a;return{x:s,y:l}};const{window:Jn}=Ce;function eo(t){let e,n,o,r,i,a,s,l,m,u,f,c,v,p=2**t[0].worldSize+"",x,w,A=2**t[0].worldSize+"",h,k,g=2**(t[0].worldSize+1)+"",d,y,$,b,F,X,ie;return n=new vn({}),n.$on("fkupdated",t[7]),{c(){e=C("main"),Z(n.$$.fragment),o=V(),r=C("div"),i=V(),a=C("div"),s=C("label"),l=D("World Size:"),m=V(),u=C("input"),f=V(),c=C("span"),v=D("("),x=D(p),w=D(" x "),h=D(A),k=D(" : "),d=D(g),y=D(")"),$=V(),b=C("canvas"),this.h()},l(P){e=z(P,"MAIN",{});var I=R(e);J(n.$$.fragment,I),o=K(I),r=z(I,"DIV",{id:!0,class:!0}),R(r).forEach(E),i=K(I),a=z(I,"DIV",{});var oe=R(a);s=z(oe,"LABEL",{for:!0});var he=R(s);l=B(he,"World Size:"),he.forEach(E),m=K(oe),u=z(oe,"INPUT",{id:!0,type:!0,step:!0}),f=K(oe),c=z(oe,"SPAN",{});var q=R(c);v=B(q,"("),x=B(q,p),w=B(q," x "),h=B(q,A),k=B(q," : "),d=B(q,g),y=B(q,")"),q.forEach(E),oe.forEach(E),$=K(I),b=z(I,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(b).forEach(E),I.forEach(E),this.h()},h(){S(r,"id","datgui-container"),S(r,"class","svelte-18zf5fr"),S(s,"for","worldSize"),S(u,"id","worldSize"),S(u,"type","number"),S(u,"step","1"),S(b,"id","canvas"),S(b,"width",t[1].width),S(b,"height",t[1].height),S(b,"class","svelte-18zf5fr")},m(P,I){T(P,e,I),j(n,e,null),_(e,o),_(e,r),_(e,i),_(e,a),_(a,s),_(s,l),_(a,m),_(a,u),ce(u,t[0].worldSize),_(a,f),_(a,c),_(c,v),_(c,x),_(c,w),_(c,h),_(c,k),_(c,d),_(c,y),_(e,$),_(e,b),F=!0,X||(ie=[L(Jn,"keydown",t[2]),L(u,"input",t[8]),L(u,"change",t[6]),L(b,"mousemove",t[4]),L(b,"mousedown",re(t[5])),L(b,"mouseup",t[5]),L(b,"wheel",t[3]),L(b,"keydown",re(t[2])),L(b,"contextmenu",re(to))],X=!0)},p(P,[I]){I&1&&de(u.value)!==P[0].worldSize&&ce(u,P[0].worldSize),(!F||I&1)&&p!==(p=2**P[0].worldSize+"")&&ae(x,p),(!F||I&1)&&A!==(A=2**P[0].worldSize+"")&&ae(h,A),(!F||I&1)&&g!==(g=2**(P[0].worldSize+1)+"")&&ae(d,g)},i(P){F||(M(n.$$.fragment,P),F=!0)},o(P){H(n.$$.fragment,P),F=!1},d(P){P&&E(e),Q(n),X=!1,ve(ie)}}}const to=t=>t;function no(t,e,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>x(),pause:!1,grid:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:8},s={f:me[0].f,k:me[0].k};let l,m;const u=async()=>{const h=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new h.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const k=document.getElementById("datgui-container");if(!k)throw new Error("Gui container not ready");k.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",g).onFinishChange(r.reset).name("Initial conditions");const d=l.add(a,"iteration").listen();d.domElement.style.pointerEvents="none",l.add(r,"speed",1,200).name("Simulation speed"),l.add(i,"penSize",0,a.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},f=h=>{if(h.code==="Space"){r.pause=!r.pause,h.preventDefault();return}if(h.code==="KeyR"&&!h.getModifierState("Control")){x(),h.preventDefault();return}},c=h=>{if(!h.getModifierState("Control"))return;const k=He(h);i.panX=k.x,i.panY=k.y,h.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),h.preventDefault()},v=h=>{const k=He(h);i.x=k.x,i.y=k.y},p=h=>{if(![0,2].includes(h.button)||!["mouseup","mousedown"].includes(h.type))return;let k=h.type==="mousedown";h.button===0&&(i.pressedLeft=k),h.button===2&&(i.pressedRight=k)},x=()=>{isNaN(a.worldSize)||(a.worldSize>11&&n(0,a.worldSize=11,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),u(),m=jn({controls:r,info:a,mouseState:i,simulationParameters:s}))},w=h=>{s.f=h.detail.f,s.k=h.detail.k};le(()=>{x()}),se(()=>{l.destroy(),m.destroy()});function A(){a.worldSize=de(this.value),n(0,a)}return[a,o,f,c,v,p,x,w,A]}let oo=class extends ee{constructor(e){super(),te(this,e,no,eo,ne,{})}};const ro=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,ao=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,io=`precision mediump float;

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
`,lo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,so=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,uo=`precision mediump float;

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

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,mo=`// Colors scheme inspired by Robert Munafo described here:
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
`,po=`precision mediump float;

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
`,vo=`precision mediump float;

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
`,xo=`precision mediump float;

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
`,go=`precision mediump float;

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

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,_o=`precision mediump float;

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
`,G={},Eo=t=>{const e={vert:ro,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),prevState:t.prop("inputBuffer")}};G.raw=t({frag:ao,...e}),G.A_gradiant1=t({frag:po,...e}),G.A_gradiant2=t({frag:vo,...e}),G.A_MATLAB_cool=t({frag:xo,...e}),G.A_IDL_CB_RdBu=t({frag:go,...e}),G.A_IDL_CB_RdYiBu=t({frag:ho,...e}),G.B_IDL_CB_RdYiBu=t({frag:_o,...e}),G.grayscale=t({frag:lo,...e}),G.blackwhite=t({frag:so,...e}),G.whiteblack=t({frag:uo,...e}),G.timebasedblue=t({frag:io,...e}),G.lerp=t({frag:fo,...e}),G.mrob=t({frag:co,...e}),G.redblue=t({frag:mo,...e})},So=t=>{const{colorMode:e,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=t;(G[e]||G.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},yo=`precision mediump float;

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
`,bo=`precision mediump float;

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
`;let it;const wo=(t,e)=>{it=t({frag:yo,vert:bo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]],fk:(n,o)=>{const{maxF:r,minF:i,maxK:a,minK:s}=o.simulationParameters;return[[i,a],[i,s],[r,a],[r,a],[i,s],[r,s]]}},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive")}})},Ao=t=>{const{inputBuffer:e,outputBuffer:n,simulationParameters:o,pauseSimulation:r,mouseState:i,worldSize:a}=t;it({inputBuffer:e,outputBuffer:n,pauseSimulation:r,zoomLevel:i.zoomLevel,pan:[i.panX,i.panY],mousePosition:[i.x,i.y],penRadius:1/2**(a-i.penSize),penDensity:i.penDensity,penIsActive:i.pressedLeft,eraserIsActive:i.pressedRight,simulationParameters:o})},Do=(t,e)=>t==="randomSpots"?ko(e,.001):t==="middleCircleAndRandomSpots"?Bo(e,.005,.05):t==="empty"||t==="full"?Oe(e):$o(e,.02),Bo=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Oe=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),ko=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),$o=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),Co=t=>{const{controls:e,info:n,mouseState:o,simulationParameters:r}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const s=2**n.worldSize,l=Do(e.initialConditions,s),m=()=>a.framebuffer({color:a.texture({radius:s,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),u=Array(2).fill(0).map(m);return wo(a,s),Eo(a),a.frame(()=>{e.pause||n.iteration++;let f=u[(n.iteration+1)%2];for(let c=0;c<e.speed;c++){n.iteration++;const v=u[n.iteration%2];f=u[(n.iteration+1)%2],Ao({inputBuffer:v,outputBuffer:f,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:o,simulationParameters:r})}So({colorMode:e.colors,inputBuffer:f,iteration:n.iteration,outputBuffer:null,zoomState:o})}),a},Ye=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top,{width:i,height:a}=e,s=o/i,l=(a-r)/a;return{x:s,y:l}};const{window:zo}=Ce;function Lo(t){let e,n,o,r,i,a,s,l,m,u,f,c;return{c(){e=C("main"),n=C("div"),o=V(),r=C("div"),i=C("label"),a=D("World Size:"),s=V(),l=C("input"),m=V(),u=C("canvas"),this.h()},l(v){e=z(v,"MAIN",{});var p=R(e);n=z(p,"DIV",{id:!0,class:!0}),R(n).forEach(E),o=K(p),r=z(p,"DIV",{});var x=R(r);i=z(x,"LABEL",{for:!0});var w=R(i);a=B(w,"World Size:"),w.forEach(E),s=K(x),l=z(x,"INPUT",{id:!0,type:!0,step:!0}),x.forEach(E),m=K(p),u=z(p,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(u).forEach(E),p.forEach(E),this.h()},h(){S(n,"id","datgui-container"),S(n,"class","svelte-198vt5w"),S(i,"for","worldSize"),S(l,"id","worldSize"),S(l,"type","number"),S(l,"step","1"),S(u,"id","canvas"),S(u,"width",t[1].width),S(u,"height",t[1].height),S(u,"class","svelte-198vt5w")},m(v,p){T(v,e,p),_(e,n),_(e,o),_(e,r),_(r,i),_(i,a),_(r,s),_(r,l),ce(l,t[0].worldSize),_(e,m),_(e,u),f||(c=[L(zo,"keydown",t[2]),L(l,"input",t[7]),L(l,"change",t[6]),L(u,"mousemove",t[4]),L(u,"mousedown",re(t[5])),L(u,"mouseup",t[5]),L(u,"wheel",t[3]),L(u,"keydown",re(t[2])),L(u,"contextmenu",re(Ro))],f=!0)},p(v,[p]){p&1&&de(l.value)!==v[0].worldSize&&ce(l,v[0].worldSize)},i:O,o:O,d(v){v&&E(e),f=!1,ve(c)}}}const Ro=t=>t;function Po(t,e,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"blackwhite",initialConditions:"full",reset:()=>x(),pause:!1,grid:!1,speed:10},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:12,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:12},s={minK:.02,maxK:.07,minF:0,maxF:.12};let l,m;const u=async()=>{const A=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new A.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const h=document.getElementById("datgui-container");if(!h)throw new Error("Gui container not ready");h.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const k={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty",Full:"full"};l.add(r,"initialConditions",k).onFinishChange(r.reset).name("Initial conditions");const g=l.add(a,"iteration").listen();g.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(i,"penSize",0,a.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(s,"minK",0,s.maxK),l.add(s,"maxK",s.minK,1),l.add(s,"minF",0,s.maxF),l.add(s,"maxF",s.minF,1)},f=A=>{if(A.code==="Space"){r.pause=!r.pause,A.preventDefault();return}if(A.code==="KeyR"&&!A.getModifierState("Control")){x(),A.preventDefault();return}},c=A=>{if(!A.getModifierState("Control"))return;const h=Ye(A);i.panX=h.x,i.panY=h.y,A.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),A.preventDefault()},v=A=>{const h=Ye(A);i.x=h.x,i.y=h.y},p=A=>{if(![0,2].includes(A.button)||!["mouseup","mousedown"].includes(A.type))return;let h=A.type==="mousedown";A.button===0&&(i.pressedLeft=h),A.button===2&&(i.pressedRight=h)},x=()=>{isNaN(a.worldSize)||(a.worldSize>12&&n(0,a.worldSize=12,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),u(),m=Co({controls:r,info:a,mouseState:i,simulationParameters:s}))};le(()=>{x()}),se(()=>{l.destroy(),m.destroy()});function w(){a.worldSize=de(this.value),n(0,a)}return[a,o,f,c,v,p,x,w]}let Io=class extends ee{constructor(e){super(),te(this,e,Po,Lo,ne,{})}};const pe=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"STX 1",type:"N.A",f:.0353,k:.0614},{name:"STX 2",type:"N.A",f:.0201,k:.0602},{name:"STX 2",type:"N.A",f:.0181,k:.0435},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Ne(t,e,n){const o=t.slice();return o[18]=e[n],o}function Ue(t){let e,n,o,r,i,a,s,l,m,u=pe,f=[];for(let c=0;c<u.length;c+=1)f[c]=We(Ne(t,u,c));return a=new be({props:{sketch:t[3]}}),{c(){e=C("div"),n=D("Select f and k parameters on the map of use a preset"),o=V(),r=C("select");for(let c=0;c<f.length;c+=1)f[c].c();i=V(),Z(a.$$.fragment),this.h()},l(c){e=z(c,"DIV",{});var v=R(e);n=B(v,"Select f and k parameters on the map of use a preset"),v.forEach(E),o=K(c),r=z(c,"SELECT",{class:!0});var p=R(r);for(let x=0;x<f.length;x+=1)f[x].l(p);p.forEach(E),i=K(c),J(a.$$.fragment,c),this.h()},h(){S(r,"class","full-width svelte-1qznlxf"),t[0]===void 0&&Qe(()=>t[5].call(r))},m(c,v){T(c,e,v),_(e,n),T(c,o,v),T(c,r,v);for(let p=0;p<f.length;p+=1)f[p].m(r,null);we(r,t[0]),T(c,i,v),j(a,c,v),s=!0,l||(m=[L(r,"change",t[5]),L(r,"change",t[6])],l=!0)},p(c,v){if(v&0){u=pe;let p;for(p=0;p<u.length;p+=1){const x=Ne(c,u,p);f[p]?f[p].p(x,v):(f[p]=We(x),f[p].c(),f[p].m(r,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=u.length}v&1&&we(r,c[0])},i(c){s||(M(a.$$.fragment,c),s=!0)},o(c){H(a.$$.fragment,c),s=!1},d(c){c&&E(e),c&&E(o),c&&E(r),De(f,c),c&&E(i),Q(a,c),l=!1,ve(m)}}}function We(t){let e,n=t[18].type+"",o,r,i=t[18].name+"",a,s,l=t[18].f+"",m,u,f=t[18].k+"",c,v;return{c(){e=C("option"),o=D(n),r=D(" - "),a=D(i),s=D(" (f/k "),m=D(l),u=D(" / "),c=D(f),v=D(`)
                `),this.h()},l(p){e=z(p,"OPTION",{});var x=R(e);o=B(x,n),r=B(x," - "),a=B(x,i),s=B(x," (f/k "),m=B(x,l),u=B(x," / "),c=B(x,f),v=B(x,`)
                `),x.forEach(E),this.h()},h(){e.__value=t[18],e.value=e.__value},m(p,x){T(p,e,x),_(e,o),_(e,r),_(e,a),_(e,s),_(e,m),_(e,u),_(e,c),_(e,v)},p:O,d(p){p&&E(e)}}}function To(t){let e,n,o=t[1]?"Close":"F/K selection",r,i,a,s,l,m=t[1]&&Ue(t);return{c(){e=C("div"),n=C("button"),r=D(o),i=V(),m&&m.c(),this.h()},l(u){e=z(u,"DIV",{id:!0,class:!0});var f=R(e);n=z(f,"BUTTON",{class:!0,id:!0});var c=R(n);r=B(c,o),c.forEach(E),i=K(f),m&&m.l(f),f.forEach(E),this.h()},h(){S(n,"class","full-width svelte-1qznlxf"),S(n,"id","toggleButton"),S(e,"id","container"),S(e,"class","svelte-1qznlxf"),ke(e,"no-cursor",Fo)},m(u,f){T(u,e,f),_(e,n),_(n,r),_(e,i),m&&m.m(e,null),a=!0,s||(l=L(n,"click",t[4]),s=!0)},p(u,[f]){(!a||f&2)&&o!==(o=u[1]?"Close":"F/K selection")&&ae(r,o),u[1]?m?(m.p(u,f),f&2&&M(m,1)):(m=Ue(u),m.c(),M(m,1),m.m(e,null)):m&&(Se(),H(m,1,1,()=>{m=null}),ye())},i(u){a||(M(m),a=!0)},o(u){H(m),a=!1},d(u){u&&E(e),m&&m.d(),s=!1,l()}}}let Fo=!1;function Mo(t,e){let n=!1,o=1/0,r=null;for(let i=0;i<e.length;i++){const a=e[i],s=e[(i+1)%e.length];if(t[0]===a[0]&&t[1]===a[1])return t;a[1]>t[1]!=s[1]>t[1]&&t[0]<(s[0]-a[0])*(t[1]-a[1])/(s[1]-a[1])+a[0]&&(n=!n);const m=Vo(t,a,s);m<o&&(o=m,r=Ko(t,a,s))}if(n)return t;if(!r)throw new Error("Now closest point found");return r}function Vo(t,e,n){const o=[n[0]-e[0],n[1]-e[1]],r=[t[0]-e[0],t[1]-e[1]],i=o[0]*r[0]+o[1]*r[1],a=o[0]*o[0]+o[1]*o[1],s=i/a;let l;return s<0?l=e:s>1?l=n:l=[e[0]+s*o[0],e[1]+s*o[1]],Math.sqrt((t[0]-l[0])**2+(t[1]-l[1])**2)}function Ko(t,e,n){const o=[n[0]-e[0],n[1]-e[1]],r=[t[0]-e[0],t[1]-e[1]],i=o[0]*r[0]+o[1]*r[1],a=o[0]*o[0]+o[1]*o[1],s=i/a;let l;return s<0?l=e:s>1?l=n:l=[e[0]+s*o[0],e[1]+s*o[1]],l}function Ho(t,e,n){const o=$e();let r=pe[0],i=!0;const a=[0,.12],s=[.03,.07],l=[{f:.0949,k:.0594},{f:.046,k:.0615},{f:.017,k:.0467},{f:.005,k:.0335},{f:.0046,k:.0462},{f:.0166,k:.0594},{f:.0277,k:.0657},{f:.046,k:.0675},{f:.0757,k:.0643}],m=d=>{const{f:y,k:$}=d,b=w.map($,s[0],s[1],0,w.width),F=w.map(y,a[0],a[1],w.height,0);return{x:b,y:F}},u=d=>{d.noStroke();const y=d.textSize();for(const $ of pe){const{x:b,y:F}=m({f:$.f,k:$.k}),X=$.f===r.f&&$.k===r.k;d.circle(b,F,3),d.textSize(X?y*2:y),d.fill(X?[240,240,150]:[255,255,255]),d.text($.name,b-d.textWidth($.name)/2,F-10)}},f=d=>{d.noFill(),d.stroke("red"),d.strokeWeight(1);const{x:y,y:$}=m(r);d.text("F",10,$>10?$-5:$+15),d.line(0,$,d.width,$),d.text("K",y<d.width-10?y+5:y-15,d.height-10),d.line(y,0,y,d.height),d.circle(y,$,10)},c=d=>{const{f:y,k:$}=r,b=`F: ${y.toFixed(4)}`,F=`K: ${$.toFixed(4)}`,X=d.textSize(),ie=d.height*.05;d.textStyle(d.BOLD),d.textSize(ie),d.fill("white"),d.stroke(0),d.strokeWeight(1),d.text(b,d.width*.05,d.textSize()),d.text(F,d.width*.05,d.textSize()+d.textSize()+6),d.textStyle(d.NORMAL),d.textSize(X)},v=d=>{for(let y=0;y<l.length;y++){const{x:$,y:b}=m(l[y]),{x:F,y:X}=m(l[(y+1)%l.length]);d.fill("green"),d.stroke("green"),d.strokeWeight(3),d.circle($,b,10),d.circle(F,X,10),d.line($,b,F,X)}},p=()=>{const d=[r.f,r.k],y=l.map(b=>[b.f,b.k]),$=Mo(d,y);n(0,r.f=$[0],r),n(0,r.k=$[1],r)},x=()=>{let{f:d,k:y}=r;const $=w.noise(w.frameCount*.005),b=w.noise(5321+w.frameCount*.005);d=d+($*2-1)*(a[1]-a[0])*.001,y=y+(b*2-1)*(a[1]-a[0])*.001,n(0,r={f:d,k:y,name:"custom",type:"manual"}),p(),o("fkupdated",r)};let w;const A=d=>{w=d;let y;d.preload=()=>{y=d.loadImage(nt+"/parameters_map.png")},d.setup=()=>{d.createCanvas(400,400),d.frameRate(55)},d.draw=()=>{d.background(255),d.tint(150,190),d.image(y,0,0,d.width,d.height),u(d),v(d),f(d),c(d),x()}},h=()=>{n(1,i=!i),i||w.remove()};se(()=>w?.remove());function k(){r=Je(this),n(0,r)}return[r,i,o,A,h,k,()=>o("fkupdated",r)]}class Oo extends ee{constructor(e){super(),te(this,e,Ho,To,ne,{})}}const Yo=`precision mediump float;
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

`,Uo=`precision mediump float;

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
`,Wo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Xo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,qo=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Go=`precision mediump float;

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

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,jo=`// Colors scheme inspired by Robert Munafo described here:
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
`,Qo=`precision mediump float;

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
`,Jo=`precision mediump float;

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
`,er=`precision mediump float;

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
`,tr=`precision mediump float;

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
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,or=`precision mediump float;

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
`,rr=`precision mediump float;

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
`,ar=`precision mediump float;

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
`,W={},ir=t=>{const e={vert:Yo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}};W.raw=t({frag:No,...e}),W.A_transform_seismic=t({frag:rr,...e}),W.A_gradiant1=t({frag:Qo,...e}),W.A_gradiant2=t({frag:Jo,...e}),W.A_MATLAB_cool=t({frag:er,...e}),W.A_IDL_CB_RdBu=t({frag:tr,...e}),W.A_IDL_CB_RdYiBu=t({frag:nr,...e}),W.A_IDL_CB_BuYiRd=t({frag:or,...e}),W.B_IDL_CB_RdYiBu=t({frag:ar,...e}),W.grayscale=t({frag:Wo,...e}),W.blackwhite=t({frag:Xo,...e}),W.whiteblack=t({frag:qo,...e}),W.timebasedblue=t({frag:Uo,...e}),W.lerp=t({frag:Go,...e}),W.mrob=t({frag:Zo,...e}),W.redblue=t({frag:jo,...e})},lr=t=>{const{colorMode:e,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=t;(W[e]||W.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},sr=`precision mediump float;

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
`,ur=`precision mediump float;

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
`;let lt;const fr=(t,e)=>{lt=t({frag:sr,vert:ur,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,f:t.prop("f"),k:t.prop("k"),radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive"),eraserIsActive:t.prop("eraserIsActive"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},cr=t=>{const{inputBuffer:e,outputBuffer:n,pauseSimulation:o,mouseState:r,simulationParameters:i,worldSize:a}=t;lt({inputBuffer:e,outputBuffer:n,pauseSimulation:o,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(a-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...i})},mr=(t,e)=>t==="randomSpots"?dr(e,.001):t==="middleCircleAndRandomSpots"?pr(e,.005,.05):t==="empty"?vr(e):xr(e,.02),pr=(t,e,n)=>{const o=t*n;return Array(t*t).fill(0).map((r,i)=>{const a=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-a)<o?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},vr=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),dr=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),xr=(t,e)=>Array(t*t).fill(0).map((n,o)=>{const r=Math.floor(o/t),i=o%t;return Math.hypot(t/2-i,t/2-r)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),gr=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,hr=`precision highp float;

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
`;let st;const _r=t=>{st=t({vert:gr,frag:hr,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},Er=t=>{const{inputBuffer:e,outputBuffer:n,zoomState:o}=t;st({inputBuffer:e,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},Sr=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,yr=`precision mediump float;

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
`;let ut;const br=t=>{ut=t({frag:yr,vert:Sr,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}})},wr=t=>{const{inputBuffer:e,mouseState:n,outputBuffer:o,worldSize:r}=t;ut({inputBuffer:e,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},Ar=t=>{const{controls:e,info:n,mouseState:o,simulationParameters:r}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=ge({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const s=2**n.worldSize,l=mr(e.initialConditions,s),m=()=>a.framebuffer({color:a.texture({radius:s,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),u=Array(2).fill(0).map(m),f=Array(2).fill(0).map(m);return fr(a,s),ir(a),_r(a),br(a),a.frame(()=>{e.pause||n.iteration++;let c=u[(n.iteration+1)%2];for(let v=0;v<e.speed;v++){n.iteration++;const p=u[n.iteration%2];c=u[(n.iteration+1)%2],cr({inputBuffer:p,outputBuffer:c,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:o,simulationParameters:r})}Dr({inputTexture:c,graphicsTextures:f,controls:e,info:n,mouseState:o})}),a},Dr=t=>{const{inputTexture:e,graphicsTextures:n,controls:o,info:r,mouseState:i}=t;let a=0;a++;const s=e,l=n[a%2];if(lr({colorMode:o.colors,inputBuffer:s,iteration:r.iteration,outputBuffer:l,zoomState:i}),o.grid){a++;const f=n[(a+1)%2],c=n[a%2];Er({inputBuffer:f,outputBuffer:c,zoomState:i})}a++;const m=n[(a+1)%2],u=null;wr({mouseState:i,worldSize:r.worldSize,inputBuffer:m,outputBuffer:u})},Xe=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top,{width:i,height:a}=e,s=o/i,l=(a-r)/a;return{x:s,y:l}};const{window:Br}=Ce;function kr(t){let e,n,o,r,i,a,s,l,m,u,f,c,v,p=2**t[0].worldSize+"",x,w,A=2**t[0].worldSize+"",h,k,g=2**(t[0].worldSize+1)+"",d,y,$,b,F,X,ie;return n=new Oo({}),n.$on("fkupdated",t[7]),{c(){e=C("main"),Z(n.$$.fragment),o=V(),r=C("div"),i=V(),a=C("div"),s=C("label"),l=D("World Size:"),m=V(),u=C("input"),f=V(),c=C("span"),v=D("("),x=D(p),w=D(" x "),h=D(A),k=D(" : "),d=D(g),y=D(")"),$=V(),b=C("canvas"),this.h()},l(P){e=z(P,"MAIN",{});var I=R(e);J(n.$$.fragment,I),o=K(I),r=z(I,"DIV",{id:!0,class:!0}),R(r).forEach(E),i=K(I),a=z(I,"DIV",{});var oe=R(a);s=z(oe,"LABEL",{for:!0});var he=R(s);l=B(he,"World Size:"),he.forEach(E),m=K(oe),u=z(oe,"INPUT",{id:!0,type:!0,step:!0}),f=K(oe),c=z(oe,"SPAN",{});var q=R(c);v=B(q,"("),x=B(q,p),w=B(q," x "),h=B(q,A),k=B(q," : "),d=B(q,g),y=B(q,")"),q.forEach(E),oe.forEach(E),$=K(I),b=z(I,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(b).forEach(E),I.forEach(E),this.h()},h(){S(r,"id","datgui-container"),S(r,"class","svelte-18zf5fr"),S(s,"for","worldSize"),S(u,"id","worldSize"),S(u,"type","number"),S(u,"step","1"),S(b,"id","canvas"),S(b,"width",t[1].width),S(b,"height",t[1].height),S(b,"class","svelte-18zf5fr")},m(P,I){T(P,e,I),j(n,e,null),_(e,o),_(e,r),_(e,i),_(e,a),_(a,s),_(s,l),_(a,m),_(a,u),ce(u,t[0].worldSize),_(a,f),_(a,c),_(c,v),_(c,x),_(c,w),_(c,h),_(c,k),_(c,d),_(c,y),_(e,$),_(e,b),F=!0,X||(ie=[L(Br,"keydown",t[2]),L(u,"input",t[8]),L(u,"change",t[6]),L(b,"mousemove",t[4]),L(b,"mousedown",re(t[5])),L(b,"mouseup",t[5]),L(b,"wheel",t[3]),L(b,"keydown",re(t[2])),L(b,"contextmenu",re($r))],X=!0)},p(P,[I]){I&1&&de(u.value)!==P[0].worldSize&&ce(u,P[0].worldSize),(!F||I&1)&&p!==(p=2**P[0].worldSize+"")&&ae(x,p),(!F||I&1)&&A!==(A=2**P[0].worldSize+"")&&ae(h,A),(!F||I&1)&&g!==(g=2**(P[0].worldSize+1)+"")&&ae(d,g)},i(P){F||(M(n.$$.fragment,P),F=!0)},o(P){H(n.$$.fragment,P),F=!1},d(P){P&&E(e),Q(n),X=!1,ve(ie)}}}const $r=t=>t;function Cr(t,e,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>x(),pause:!1,grid:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:8},s={f:pe[0].f,k:pe[0].k};let l,m;const u=async()=>{const h=await xe(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new h.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const k=document.getElementById("datgui-container");if(!k)throw new Error("Gui container not ready");k.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",g).onFinishChange(r.reset).name("Initial conditions");const d=l.add(a,"iteration").listen();d.domElement.style.pointerEvents="none",l.add(r,"speed",1,200).name("Simulation speed"),l.add(i,"penSize",0,a.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},f=h=>{if(h.code==="Space"){r.pause=!r.pause,h.preventDefault();return}if(h.code==="KeyR"&&!h.getModifierState("Control")){x(),h.preventDefault();return}},c=h=>{if(!h.getModifierState("Control"))return;const k=Xe(h);i.panX=k.x,i.panY=k.y,h.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),h.preventDefault()},v=h=>{const k=Xe(h);i.x=k.x,i.y=k.y},p=h=>{if(![0,2].includes(h.button)||!["mouseup","mousedown"].includes(h.type))return;let k=h.type==="mousedown";h.button===0&&(i.pressedLeft=k),h.button===2&&(i.pressedRight=k)},x=()=>{isNaN(a.worldSize)||(a.worldSize>11&&n(0,a.worldSize=11,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),u(),m=Ar({controls:r,info:a,mouseState:i,simulationParameters:s}))},w=h=>{s.f=h.detail.f,s.k=h.detail.k};le(()=>{x()}),se(()=>{l.destroy(),m.destroy()});function A(){a.worldSize=de(this.value),n(0,a)}return[a,o,f,c,v,p,x,w,A]}class zr extends ee{constructor(e){super(),te(this,e,Cr,kr,ne,{})}}function qe(t,e,n){const o=t.slice();return o[1]=e[n],o}function Ge(t,e,n){const o=t.slice();return o[1]=e[n],o}function Lr(t){let e;return{c(){e=D("About")},l(n){e=B(n,"About")},m(n,o){T(n,e,o)},d(n){n&&E(e)}}}function Rr(t){let e=t[1].title+"",n;return{c(){n=D(e)},l(o){n=B(o,e)},m(o,r){T(o,n,r)},p:O,d(o){o&&E(n)}}}function Ze(t){let e,n;return e=new tt({props:{$$slots:{default:[Rr]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Pr(t){let e,n,o,r;e=new tt({props:{$$slots:{default:[Lr]},$$scope:{ctx:t}}});let i=t[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=Ze(Ge(t,i,l));const s=l=>H(a[l],1,1,()=>{a[l]=null});return{c(){Z(e.$$.fragment),n=V();for(let l=0;l<a.length;l+=1)a[l].c();o=Ae()},l(l){J(e.$$.fragment,l),n=K(l);for(let m=0;m<a.length;m+=1)a[m].l(l);o=Ae()},m(l,m){j(e,l,m),T(l,n,m);for(let u=0;u<a.length;u+=1)a[u].m(l,m);T(l,o,m),r=!0},p(l,m){const u={};if(m&64&&(u.$$scope={dirty:m,ctx:l}),e.$set(u),m&1){i=l[0];let f;for(f=0;f<i.length;f+=1){const c=Ge(l,i,f);a[f]?(a[f].p(c,m),M(a[f],1)):(a[f]=Ze(c),a[f].c(),M(a[f],1),a[f].m(o.parentNode,o))}for(Se(),f=i.length;f<a.length;f+=1)s(f);ye()}},i(l){if(!r){M(e.$$.fragment,l);for(let m=0;m<i.length;m+=1)M(a[m]);r=!0}},o(l){H(e.$$.fragment,l),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)H(a[m]);r=!1},d(l){Q(e,l),l&&E(n),De(a,l),l&&E(o)}}}function Ir(t){let e,n,o,r,i,a,s,l,m,u,f,c;return{c(){e=C("p"),n=D("Experiments with "),o=C("a"),r=D("Reaction-diffusion systems"),i=V(),a=C("p"),s=D("The code is based on "),l=C("a"),m=D("this tutorial"),u=D(`
                but reimplemented in a glsl shader with
                `),f=C("a"),c=D("regl"),this.h()},l(v){e=z(v,"P",{});var p=R(e);n=B(p,"Experiments with "),o=z(p,"A",{href:!0,target:!0});var x=R(o);r=B(x,"Reaction-diffusion systems"),x.forEach(E),p.forEach(E),i=K(v),a=z(v,"P",{});var w=R(a);s=B(w,"The code is based on "),l=z(w,"A",{href:!0,target:!0});var A=R(l);m=B(A,"this tutorial"),A.forEach(E),u=B(w,`
                but reimplemented in a glsl shader with
                `),f=z(w,"A",{href:!0,target:!0});var h=R(f);c=B(h,"regl"),h.forEach(E),w.forEach(E),this.h()},h(){S(o,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),S(o,"target","none"),S(l,"href","https://karlsims.com/rd.html"),S(l,"target","none"),S(f,"href","https://github.com/regl-project/regl"),S(f,"target","none")},m(v,p){T(v,e,p),_(e,n),_(e,o),_(o,r),T(v,i,p),T(v,a,p),_(a,s),_(a,l),_(l,m),_(a,u),_(a,f),_(f,c)},p:O,d(v){v&&E(e),v&&E(i),v&&E(a)}}}function Tr(t){let e,n,o;var r=t[1].component;function i(a){return{}}return r&&(e=ze(r,i())),{c(){e&&Z(e.$$.fragment),n=V()},l(a){e&&J(e.$$.fragment,a),n=K(a)},m(a,s){e&&j(e,a,s),T(a,n,s),o=!0},p(a,s){if(r!==(r=a[1].component)){if(e){Se();const l=e;H(l.$$.fragment,1,0,()=>{Q(l,1)}),ye()}r?(e=ze(r,i()),Z(e.$$.fragment),M(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}},i(a){o||(e&&M(e.$$.fragment,a),o=!0)},o(a){e&&H(e.$$.fragment,a),o=!1},d(a){e&&Q(e,a),a&&E(n)}}}function je(t){let e,n;return e=new et({props:{$$slots:{default:[Tr]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}function Fr(t){let e,n,o,r,i,a;e=new mt({props:{$$slots:{default:[Pr]},$$scope:{ctx:t}}}),o=new et({props:{$$slots:{default:[Ir]},$$scope:{ctx:t}}});let s=t[0],l=[];for(let u=0;u<s.length;u+=1)l[u]=je(qe(t,s,u));const m=u=>H(l[u],1,1,()=>{l[u]=null});return{c(){Z(e.$$.fragment),n=V(),Z(o.$$.fragment),r=V();for(let u=0;u<l.length;u+=1)l[u].c();i=Ae()},l(u){J(e.$$.fragment,u),n=K(u),J(o.$$.fragment,u),r=K(u);for(let f=0;f<l.length;f+=1)l[f].l(u);i=Ae()},m(u,f){j(e,u,f),T(u,n,f),j(o,u,f),T(u,r,f);for(let c=0;c<l.length;c+=1)l[c].m(u,f);T(u,i,f),a=!0},p(u,f){const c={};f&64&&(c.$$scope={dirty:f,ctx:u}),e.$set(c);const v={};if(f&64&&(v.$$scope={dirty:f,ctx:u}),o.$set(v),f&1){s=u[0];let p;for(p=0;p<s.length;p+=1){const x=qe(u,s,p);l[p]?(l[p].p(x,f),M(l[p],1)):(l[p]=je(x),l[p].c(),M(l[p],1),l[p].m(i.parentNode,i))}for(Se(),p=s.length;p<l.length;p+=1)m(p);ye()}},i(u){if(!a){M(e.$$.fragment,u),M(o.$$.fragment,u);for(let f=0;f<s.length;f+=1)M(l[f]);a=!0}},o(u){H(e.$$.fragment,u),H(o.$$.fragment,u),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)H(l[f]);a=!1},d(u){Q(e,u),u&&E(n),Q(o,u),u&&E(r),De(l,u),u&&E(i)}}}function Mr(t){let e,n,o;return n=new ct({props:{$$slots:{default:[Fr]},$$scope:{ctx:t}}}),{c(){e=C("div"),Z(n.$$.fragment)},l(r){e=z(r,"DIV",{});var i=R(e);J(n.$$.fragment,i),i.forEach(E)},m(r,i){T(r,e,i),j(n,e,null),o=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),n.$set(a)},i(r){o||(M(n.$$.fragment,r),o=!0)},o(r){H(n.$$.fragment,r),o=!1},d(r){r&&E(e),Q(n)}}}function Vr(t){return[[{title:"Auto visualizer",component:zr},{title:"V7",component:oo},{title:"Parameters map",component:Io},{title:"V6",component:cn},{title:"V5",component:en},{title:"V4",component:qt},{title:"V3",component:Ut},{title:"V2",component:It},{title:"V1",component:At}]]}class Kr extends ee{constructor(e){super(),te(this,e,Vr,Mr,ne,{})}}function Hr(t){let e,n;return e=new Kr({}),{c(){Z(e.$$.fragment)},l(o){J(e.$$.fragment,o)},m(o,r){j(e,o,r),n=!0},p:O,i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){H(e.$$.fragment,o),n=!1},d(o){Q(e,o)}}}class t0 extends ee{constructor(e){super(),te(this,e,null,Hr,ne,{})}}export{t0 as default};
