import{S as j,i as Q,s as J,k as w,l as A,m as C,h as x,n as S,b as R,X as Qt,B as F,Y as Yt,o as it,w as U,x as q,y as X,f as I,t as M,z as G,Q as ut,K as z,Z as et,M as gt,q as D,a as O,r as $,c as H,U as At,D as _,u as pt,g as ht,d as xt,I as Jt,J as Dt,L as Et,N as te,O as vt,P as _t,_ as Wt,e as dt,v as $t}from"../../../chunks/index-2107b80f.js";import{T as ee,a as ne,b as Ut,c as Xt}from"../../../chunks/TabPanel-dec752e3.js";import{_ as ft}from"../../../chunks/preload-helper-41c905a7.js";import{R as mt}from"../../../chunks/regl-89b00fbf.js";import{b as oe}from"../../../chunks/paths-b4419565.js";function re(e){let t,n,o;return{c(){t=w("div"),this.h()},l(r){t=A(r,"DIV",{style:!0,class:!0}),C(t).forEach(x),this.h()},h(){S(t,"style",e[0]),S(t,"class","m-0")},m(r,i){R(r,t,i),n||(o=Qt(e[1].call(null,t)),n=!0)},p(r,[i]){i&1&&S(t,"style",r[0])},i:F,o:F,d(r){r&&x(t),n=!1,o()}}}function ae(e,t){return t.forEach(([n,o])=>e[n]=o),e}function ie(e,t,n){let{target:o=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,c;const l=Yt(),p={ref(){l("ref",o)},instance(){l("instance",c)}};function s(u){return n(2,o=u),{destroy(){n(2,o=void 0)}}}return it(async()=>{const u=await ft(()=>import("../../../chunks/p5.min-b96f42d1.js").then(g=>g.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:m}=u,f=Object.entries(u).filter(([g,E])=>E instanceof Function&&g[0]!=="_"&&g!=="default");a&&console.log("available p5 native classes",f),c=new m(g=>(g=ae(g,f),a&&console.log("p5 instance",g),window._p5Instance=g,r(g)),o),p.ref(),p.instance()}),e.$$set=u=>{"target"in u&&n(2,o=u.target),"sketch"in u&&n(3,r=u.sketch),"parentDivStyle"in u&&n(0,i=u.parentDivStyle),"debug"in u&&n(4,a=u.debug)},[i,s,o,r,a]}class St extends j{constructor(t){super(),Q(this,t,ie,re,J,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const le=e=>{const t=[];for(let a=0;a<e.height;a++){t.push([]);for(let c=0;c<e.width;c++)t[t.length-1].push({A:1,B:0})}const n=5,o=5,r=Math.floor(e.width/2),i=Math.floor(e.height/2);for(let a=i-o;a<i+o;a++)for(let c=r-n;c<r+n;c++)t[a][c].B=1;return t},se=(e,t)=>{const n={width:e.width/t[0].length,height:e.height/t.length};for(let o=0;o<t.length;o++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[o][r];e.fill(i*255,a*255,0),e.rect(r*n.width,o*n.height,n.width,n.height)}},ce=1,ue=.5,Bt=.055,fe=.062,me=e=>{const t=[];for(let n=0;n<e.length;n++){t.push([]);for(let o=0;o<e[0].length;o++){const{A:r,B:i}=e[n][o],a=kt(e,{x:o,y:n},"A"),c=kt(e,{x:o,y:n},"B"),l=r+(ce*a-r*i*i+Bt*(1-r)),p=i+(ue*c+r*i*i-(fe+Bt)*i);t[n].push({A:l,B:p})}}return t},kt=(e,t,n)=>{const o=pe(e,t);let r=0;for(const i of o){const{coord:a,weight:c}=i;r+=e[a.y][a.x][n]*c}return r},pe=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,i=e.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},c={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},p={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},u={coord:{x:n<r-1?n+1:0,y:o},weight:.2},m={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},f={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,c,l,p,s,u,m,v,f]};function ve(e){let t,n;return t=new St({props:{sketch:e[0]}}),{c(){U(t.$$.fragment)},l(o){q(t.$$.fragment,o)},m(o,r){X(t,o,r),n=!0},p:F,i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){M(t.$$.fragment,o),n=!1},d(o){G(t,o)}}}function de(e){const t={width:200,height:200};let n;return[r=>{let i;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),i=le(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=me(i);se(n,i)}}]}let ge=class extends j{constructor(t){super(),Q(this,t,de,ve,J,{})}},P,ot;const he=e=>{P=[],ot=[];for(let i=0;i<e.height;i++){P.push([]),ot.push([]);for(let a=0;a<e.width;a++)P[P.length-1].push({A:1,B:0}),ot[P.length-1].push({A:1,B:0})}const t=5,n=5,o=Math.floor(e.width/2),r=Math.floor(e.height/2);for(let i=r-n;i<r+n;i++)for(let a=o-t;a<o+t;a++)P[i][a].B=1;return P},xe=e=>{const t={width:e.width/P[0].length,height:e.height/P.length};for(let n=0;n<P.length;n++)for(let o=0;o<P[0].length;o++){const{A:r,B:i}=P[n][o];e.fill(r*255,i*255,0),e.rect(o*t.width,n*t.height,t.width,t.height)}},_e=1,Se=.5,Ct=.055,ye=.062,Ee=()=>{for(let t=0;t<P.length;t++)for(let n=0;n<P[0].length;n++){const{A:o,B:r}=P[t][n],i=Lt(P,{x:n,y:t},"A"),a=Lt(P,{x:n,y:t},"B"),c=o+(_e*i-o*r*r+Ct*(1-o)),l=r+(Se*a+o*r*r-(ye+Ct)*r);ot[t][n]={A:c,B:l}}const e=P;return P=ot,ot=e,P},Lt=(e,t,n)=>{const o=be(e,t);let r=0;for(const i of o){const{coord:a,weight:c}=i;r+=e[a.y][a.x][n]*c}return r},be=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,i=e.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},c={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},p={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},u={coord:{x:n<r-1?n+1:0,y:o},weight:.2},m={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},f={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,c,l,p,s,u,m,v,f]};function we(e){let t,n;return t=new St({props:{sketch:e[0]}}),{c(){U(t.$$.fragment)},l(o){q(t.$$.fragment,o)},m(o,r){X(t,o,r),n=!0},p:F,i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){M(t.$$.fragment,o),n=!1},d(o){G(t,o)}}}function Ae(e){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),he(t)},r.draw=()=>{for(let i=0;i<5;i++)Ee();xe(n)}}]}let De=class extends j{constructor(t){super(),Q(this,t,Ae,we,J,{})}},T,rt;const $e=e=>{T=[],rt=[];for(let i=0;i<e.height;i++){T.push([]),rt.push([]);for(let a=0;a<e.width;a++)T[T.length-1].push({A:1,B:0}),rt[T.length-1].push({A:1,B:0})}const t=5,n=5,o=Math.floor(e.width/2),r=Math.floor(e.height/2);for(let i=r-n;i<r+n;i++)for(let a=o-t;a<o+t;a++)T[i][a].B=1;return T},Be=e=>{const t={width:e.width/T[0].length,height:e.height/T.length};for(let n=0;n<T.length;n++)for(let o=0;o<T[0].length;o++){const{A:r,B:i}=T[n][o];e.fill(r*255,i*255,0),e.rect(o*t.width,n*t.height,t.width,t.height)}},ke=1,Ce=.5,zt=.055,Le=.062,ze=()=>{for(let t=0;t<T.length;t++)for(let n=0;n<T[0].length;n++){const{A:o,B:r}=T[t][n],i=Rt(T,{x:n,y:t},"A"),a=Rt(T,{x:n,y:t},"B"),c=o+(ke*i-o*r*r+zt*(1-o)),l=r+(Ce*a+o*r*r-(Le+zt)*r);rt[t][n]={A:c,B:l}}const e=T;return T=rt,rt=e,T},Rt=(e,t,n)=>{const o=Re(e,t);let r=0;for(const i of o){const{coord:a,weight:c}=i;r+=e[a.y][a.x][n]*c}return r},Re=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,i=e.length,a={coord:{x:n>0?n-1:r-1,y:o>0?o-1:i-1},weight:.05},c={coord:{x:n,y:o>0?o-1:i-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:i-1},weight:.05},p={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},u={coord:{x:n<r-1?n+1:0,y:o},weight:.2},m={coord:{x:n>0?n-1:r-1,y:o<i-1?o+1:0},weight:.05},v={coord:{x:n,y:o<i-1?o+1:0},weight:.2},f={coord:{x:n<r-1?n+1:0,y:o<i-1?o+1:0},weight:.05};return[a,c,l,p,s,u,m,v,f]};function Ie(e){let t,n;return t=new St({props:{sketch:e[0]}}),{c(){U(t.$$.fragment)},l(o){q(t.$$.fragment,o)},m(o,r){X(t,o,r),n=!0},p:F,i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){M(t.$$.fragment,o),n=!1},d(o){G(t,o)}}}function Pe(e){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),$e(t)},r.draw=()=>{for(let i=0;i<5;i++)ze();Be(n)}}]}let Te=class extends j{constructor(t){super(),Q(this,t,Pe,Ie,J,{})}};function Me(e){let t;return{c(){t=w("canvas"),this.h()},l(n){t=A(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(t).forEach(x),this.h()},h(){S(t,"id","canvas"),S(t,"width",e[0].width),S(t,"height",e[0].height),S(t,"class","svelte-1b0ol19")},m(n,o){R(n,t,o)},p:F,i:F,o:F,d(n){n&&x(t)}}}function Fe(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,o=n*.05,r=Array(n*n).fill(0).map((i,a)=>{const c=Math.floor(a/n),l=a%n;return Math.hypot(n/2-l,n/2-c)<o?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return it(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=mt({extensions:["OES_texture_float"],canvas:i}),c=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
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
}`,framebuffer:s=>c[(s.tick+1)%2]}),p=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:s})=>c[s%2]},depth:{enable:!1},count:3});a.frame(()=>{p(()=>{a.draw(),l()})})}),[t]}let Ve=class extends j{constructor(t){super(),Q(this,t,Fe,Me,J,{})}};const Ke=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,i)=>{const a=Math.floor(i/e),c=i%e;return Math.hypot(e/2-c,e/2-a)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Oe=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),He=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),i=o%e;return Math.hypot(e/2-i,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),st=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Ne(e){let t;return{c(){t=w("canvas"),this.h()},l(n){t=A(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(t).forEach(x),this.h()},h(){S(t,"id","canvas"),S(t,"width",e[0].width),S(t,"height",e[0].height),S(t,"class","svelte-1b0ol19")},m(n,o){R(n,t,o)},p:F,i:F,o:F,d(n){n&&x(t)}}}function Ye(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>p(),pause:!1},o={iteration:0},r={f:st[n.presetParams].f,k:st[n.presetParams].k};let i,a;const c=async()=>{const s=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new s.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const u=st.reduce((f,g,E)=>(f[g.name]=E,f),{});i.add(n,"presetParams",u).onFinishChange(()=>{r.f=st[n.presetParams].f,r.k=st[n.presetParams].k});const m={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",m).onFinishChange(n.reset);const v=i.add(o,"iteration").listen();v.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",s=>{if(s.code==="Space")return n.pause=!n.pause,s.preventDefault();if(s.code==="KeyR")return p(),s.preventDefault()})},p=()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");a&&a.destroy(),a=mt({extensions:["OES_texture_float"],canvas:s}),o.iteration=0;const u=2**11;let m;n.initialConditions==="randomSpots"?m=Oe(u,.001):n.initialConditions==="middleCircleAndRandomSpots"?m=Ke(u,.005,.05):m=He(u,.02);const v=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:u,data:m,wrap:"repeat",type:"float"}),depthStencil:!1})),f=a({frag:`
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
}`,framebuffer:E=>v[(E.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),g=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:E})=>v[E%2]},depth:{enable:!1},count:3});a.frame(()=>{g(()=>{a.draw(),!n.pause&&(o.iteration++,f({Da:1,Db:.5,...r}))})})};return it(()=>{c(),l(),p()}),ut(()=>{i.destroy(),a.destroy()}),[t]}let We=class extends j{constructor(t){super(),Q(this,t,Ye,Ne,J,{})}};const Ue=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,i)=>{const a=Math.floor(i/e),c=i%e;return Math.hypot(e/2-c,e/2-a)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Xe=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ge=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),i=o%e;return Math.hypot(e/2-i,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),ct=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],qe=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ze=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,je=`precision mediump float;

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
`;function Qe(e){let t,n,o;return{c(){t=w("canvas"),this.h()},l(r){t=A(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(t).forEach(x),this.h()},h(){S(t,"id","canvas"),S(t,"width",e[0].width),S(t,"height",e[0].height),S(t,"class","svelte-1b0ol19")},m(r,i){R(r,t,i),n||(o=[z(t,"mousemove",e[1]),z(t,"mousedown",et(e[2])),z(t,"mouseup",e[2]),z(t,"contextmenu",et(Je))],n=!0)},p:F,i:F,o:F,d(r){r&&x(t),n=!1,gt(o)}}}const yt=11,Je=e=>e;function tn(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>s(),pause:!1},o={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:ct[n.presetParams].f,k:ct[n.presetParams].k};let a,c;const l=async()=>{const v=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new v.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const f=ct.reduce((y,h,B)=>(y[h.name]=B,y),{});a.add(n,"presetParams",f).onFinishChange(()=>{i.f=ct[n.presetParams].f,i.k=ct[n.presetParams].k});const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",g).onFinishChange(n.reset);const E=a.add(r,"iteration").listen();E.domElement.style.pointerEvents="none",a.add(o,"penSize",1,yt,1).name("Pen size")},p=()=>{document.addEventListener("keydown",v=>{if(v.code==="Space")return n.pause=!n.pause,v.preventDefault();if(v.code==="KeyR")return s(),v.preventDefault()})},s=()=>{const v=document.getElementById("canvas");if(!v)throw new Error("Canvas container not ready");c&&c.destroy(),c=mt({extensions:["OES_texture_float"],canvas:v}),r.iteration=0;const f=2**yt;let g;n.initialConditions==="randomSpots"?g=Xe(f,.001):n.initialConditions==="middleCircleAndRandomSpots"?g=Ue(f,.005,.05):g=Ge(f,.02);const E=Array(2).fill(0).map(()=>c.framebuffer({color:c.texture({radius:f,data:g,wrap:"repeat",type:"float"}),depthStencil:!1})),y=c({frag:je,framebuffer:B=>E[(B.tick+1)%2],uniforms:{Da:c.prop("Da"),Db:c.prop("Db"),f:c.prop("f"),k:c.prop("k"),radius:f,pauseSimulation:c.prop("pauseSimulation"),mousePosition:c.prop("mousePosition"),penRadius:c.prop("penRadius"),penIsActive:c.prop("penIsActive"),eraserIsActive:c.prop("eraserIsActive")}}),h=c({frag:Ze,vert:qe,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:B})=>E[B%2]},depth:{enable:!1},count:3});c.frame(()=>{h(()=>{c.draw(),n.pause||r.iteration++,y({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[o.x,o.y],penRadius:1/2**(yt-o.penSize),penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...i})})})},u=v=>{if(!v.currentTarget)throw new Error("No target for the onmousemove event");if(!v.currentTarget.width||!v.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:f,y:g}=v,{width:E,height:y}=v.currentTarget,h=f/E,B=(y-g)/y;o.x=h,o.y=B},m=v=>{if(![0,2].includes(v.button)||!["mouseup","mousedown"].includes(v.type))return;let f=v.type==="mousedown";v.button===0&&(o.pressedLeft=f),v.button===2&&(o.pressedRight=f)};return it(()=>{l(),p(),s()}),ut(()=>{a.destroy(),c.destroy()}),[t,u,m]}let en=class extends j{constructor(t){super(),Q(this,t,tn,Qe,J,{})}};const at=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Test 1",type:"Unknown",f:.0353,k:.0614},{name:"Never full population",type:"Unknown",f:.0201,k:.0602},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function It(e,t,n){const o=e.slice();return o[17]=t[n],o}function Pt(e){let t,n,o,r,i,a,c,l,p,s=at,u=[];for(let m=0;m<s.length;m+=1)u[m]=Tt(It(e,s,m));return a=new St({props:{sketch:e[4]}}),{c(){t=w("div"),n=D("Select f and k parameters on the map of use a preset"),o=O(),r=w("select");for(let m=0;m<u.length;m+=1)u[m].c();i=O(),U(a.$$.fragment),this.h()},l(m){t=A(m,"DIV",{});var v=C(t);n=$(v,"Select f and k parameters on the map of use a preset"),v.forEach(x),o=H(m),r=A(m,"SELECT",{class:!0});var f=C(r);for(let g=0;g<u.length;g+=1)u[g].l(f);f.forEach(x),i=H(m),q(a.$$.fragment,m),this.h()},h(){S(r,"class","full-width svelte-1qznlxf"),e[0]===void 0&&Jt(()=>e[6].call(r))},m(m,v){R(m,t,v),_(t,n),R(m,o,v),R(m,r,v);for(let f=0;f<u.length;f+=1)u[f].m(r,null);Dt(r,e[0]),R(m,i,v),X(a,m,v),c=!0,l||(p=[z(r,"change",e[6]),z(r,"change",e[7])],l=!0)},p(m,v){if(v&0){s=at;let f;for(f=0;f<s.length;f+=1){const g=It(m,s,f);u[f]?u[f].p(g,v):(u[f]=Tt(g),u[f].c(),u[f].m(r,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=s.length}v&1&&Dt(r,m[0])},i(m){c||(I(a.$$.fragment,m),c=!0)},o(m){M(a.$$.fragment,m),c=!1},d(m){m&&x(t),m&&x(o),m&&x(r),Et(u,m),m&&x(i),G(a,m),l=!1,gt(p)}}}function Tt(e){let t,n=e[17].type+"",o,r,i=e[17].name+"",a,c,l=e[17].f+"",p,s,u=e[17].k+"",m,v;return{c(){t=w("option"),o=D(n),r=D(" - "),a=D(i),c=D(" (f/k "),p=D(l),s=D(" / "),m=D(u),v=D(`)
                `),this.h()},l(f){t=A(f,"OPTION",{});var g=C(t);o=$(g,n),r=$(g," - "),a=$(g,i),c=$(g," (f/k "),p=$(g,l),s=$(g," / "),m=$(g,u),v=$(g,`)
                `),g.forEach(x),this.h()},h(){t.__value=e[17],t.value=t.__value},m(f,g){R(f,t,g),_(t,o),_(t,r),_(t,a),_(t,c),_(t,p),_(t,s),_(t,m),_(t,v)},p:F,d(f){f&&x(t)}}}function nn(e){let t,n,o=e[1]?"Close":"F/K selection",r,i,a,c,l,p=e[1]&&Pt(e);return{c(){t=w("div"),n=w("button"),r=D(o),i=O(),p&&p.c(),this.h()},l(s){t=A(s,"DIV",{id:!0,class:!0});var u=C(t);n=A(u,"BUTTON",{class:!0,id:!0});var m=C(n);r=$(m,o),m.forEach(x),i=H(u),p&&p.l(u),u.forEach(x),this.h()},h(){S(n,"class","full-width svelte-1qznlxf"),S(n,"id","toggleButton"),S(t,"id","container"),S(t,"class","svelte-1qznlxf"),At(t,"no-cursor",e[2])},m(s,u){R(s,t,u),_(t,n),_(n,r),_(t,i),p&&p.m(t,null),a=!0,c||(l=z(n,"click",e[5]),c=!0)},p(s,[u]){(!a||u&2)&&o!==(o=s[1]?"Close":"F/K selection")&&pt(r,o),s[1]?p?(p.p(s,u),u&2&&I(p,1)):(p=Pt(s),p.c(),I(p,1),p.m(t,null)):p&&(ht(),M(p,1,1,()=>{p=null}),xt()),(!a||u&4)&&At(t,"no-cursor",s[2])},i(s){a||(I(p),a=!0)},o(s){M(p),a=!1},d(s){s&&x(t),p&&p.d(),c=!1,l()}}}function on(e,t,n){const o=Yt();let r=at[0],i=!0;const a=[0,.12],c=[.03,.07],l=d=>{const{f:b,k}=d,W=f.map(k,c[0],c[1],0,f.width),L=f.map(b,a[0],a[1],f.height,0);return{x:W,y:L}},p=d=>{const{x:b,y:k}=d,W=f.map(k,f.height,0,a[0],a[1]),L=f.map(b,0,f.width,c[0],c[1]);return{f:W,k:L}},s=d=>{const b=d.mouseX,k=d.mouseY;if(b<0||k<0||b>d.width||k>d.height)return;const{f:W,k:L}=p({x:d.mouseX,y:d.mouseY});n(0,r={f:W,k:L,name:"custom",type:"manual"}),o("fkupdated",r)},u=d=>{d.noStroke();const b=d.textSize();for(const k of at){const{x:W,y:L}=l({f:k.f,k:k.k}),Z=k.f===r.f&&k.k===r.k;d.circle(W,L,3),d.textSize(Z?b*2:b),d.fill(Z?[240,240,150]:[255,255,255]),d.text(k.name,W-d.textWidth(k.name)/2,L-10)}},m=d=>{d.noFill(),d.stroke("red");const{x:b,y:k}=l(r);d.text("F",10,k>10?k-5:k+15),d.line(0,k,d.width,k),d.text("K",b<d.width-10?b+5:b-15,d.height-10),d.line(b,0,b,d.height),d.circle(b,k,10)},v=d=>{const{f:b,k}=r,W=`F: ${b.toFixed(4)}`,L=`K: ${k.toFixed(4)}`,Z=d.textSize(),lt=d.height*.05;d.textStyle(d.BOLD),d.textSize(lt),d.fill("white"),d.stroke(0),d.strokeWeight(1),d.text(W,d.width*.05,d.textSize()),d.text(L,d.width*.05,d.textSize()+d.textSize()+6),d.textStyle(d.NORMAL),d.textSize(Z)};let f,g=!1;const E=d=>{f=d;let b;d.preload=()=>{b=d.loadImage(oe+"/parameters_map.png")},d.setup=()=>{d.createCanvas(400,400),d.frameRate(55)},d.draw=()=>{d.background(255),d.tint(150,190),d.image(b,0,0,d.width,d.height),u(d),m(d),v(d),n(2,g=!1),d.mouseIsPressed&&(s(d),n(2,g=!0))}},y=()=>{n(1,i=!i),i||f.remove()};ut(()=>f?.remove());function h(){r=te(this),n(0,r)}return[r,i,g,o,E,y,h,()=>o("fkupdated",r)]}class rn extends j{constructor(t){super(),Q(this,t,on,nn,J,{})}}const an=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,ln=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,sn=`precision mediump float;

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
`,cn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,un=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,fn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,mn=`precision mediump float;

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
`,pn=`// Colors scheme inspired by Robert Munafo described here:
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
`,vn=`// Colors scheme inspired by Robert Munafo described here:
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
`,dn=`precision mediump float;

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
`,gn=`precision mediump float;

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
`,hn=`precision mediump float;

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
`,xn=`precision mediump float;

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
`,_n=`precision mediump float;

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
`,Sn=`precision mediump float;

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
`,V={},yn=e=>{const t={vert:an,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{iteration:e.prop("iteration"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}};V.raw=e({frag:ln,...t}),V.A_gradiant1=e({frag:dn,...t}),V.A_gradiant2=e({frag:gn,...t}),V.A_MATLAB_cool=e({frag:hn,...t}),V.A_IDL_CB_RdBu=e({frag:xn,...t}),V.A_IDL_CB_RdYiBu=e({frag:_n,...t}),V.B_IDL_CB_RdYiBu=e({frag:Sn,...t}),V.grayscale=e({frag:cn,...t}),V.blackwhite=e({frag:un,...t}),V.whiteblack=e({frag:fn,...t}),V.timebasedblue=e({frag:sn,...t}),V.lerp=e({frag:mn,...t}),V.mrob=e({frag:pn,...t}),V.redblue=e({frag:vn,...t})},En=e=>{const{colorMode:t,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=e;(V[t]||V.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},bn=`precision mediump float;

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
`,wn=`precision mediump float;

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
`;let Gt;const An=(e,t)=>{Gt=e({frag:bn,vert:wn,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),Da:1,Db:.5,f:e.prop("f"),k:e.prop("k"),radius:t,pauseSimulation:e.prop("pauseSimulation"),mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),penDensity:e.prop("penDensity"),penIsActive:e.prop("penIsActive"),eraserIsActive:e.prop("eraserIsActive"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},Dn=e=>{const{inputBuffer:t,outputBuffer:n,pauseSimulation:o,mouseState:r,simulationParameters:i,worldSize:a}=e;Gt({inputBuffer:t,outputBuffer:n,pauseSimulation:o,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(a-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...i})},$n=(e,t)=>e==="randomSpots"?Cn(t,.001):e==="middleCircleAndRandomSpots"?Bn(t,.005,.05):e==="empty"?kn(t):Ln(t,.02),Bn=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,i)=>{const a=Math.floor(i/e),c=i%e;return Math.hypot(e/2-c,e/2-a)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},kn=e=>Array(e*e).fill(0).map(()=>[0,0,0,1]).flat(),Cn=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ln=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),i=o%e;return Math.hypot(e/2-i,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),zn=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,Rn=`precision highp float;

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
`;let qt;const In=e=>{qt=e({vert:zn,frag:Rn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},Pn=e=>{const{inputBuffer:t,outputBuffer:n,zoomState:o}=e;qt({inputBuffer:t,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},Tn=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Mn=`precision mediump float;

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
`;let Zt;const Fn=e=>{Zt=e({frag:Mn,vert:Tn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}})},Vn=e=>{const{inputBuffer:t,mouseState:n,outputBuffer:o,worldSize:r}=e;Zt({inputBuffer:t,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},Kn=e=>{const{controls:t,info:n,mouseState:o,simulationParameters:r}=e,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=mt({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const c=2**n.worldSize,l=$n(t.initialConditions,c),p=()=>a.framebuffer({color:a.texture({radius:c,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(p),u=Array(2).fill(0).map(p);return An(a,c),yn(a),In(a),Fn(a),a.frame(()=>{t.pause||n.iteration++;let m=s[(n.iteration+1)%2];for(let v=0;v<t.speed;v++){n.iteration++;const f=s[n.iteration%2];m=s[(n.iteration+1)%2],Dn({inputBuffer:f,outputBuffer:m,worldSize:n.worldSize,pauseSimulation:t.pause,mouseState:o,simulationParameters:r})}On({inputTexture:m,graphicsTextures:u,controls:t,info:n,mouseState:o})}),a},On=e=>{const{inputTexture:t,graphicsTextures:n,controls:o,info:r,mouseState:i}=e;let a=0;a++;const c=t,l=n[a%2];if(En({colorMode:o.colors,inputBuffer:c,iteration:r.iteration,outputBuffer:l,zoomState:i}),o.grid){a++;const u=n[(a+1)%2],m=n[a%2];Pn({inputBuffer:u,outputBuffer:m,zoomState:i})}a++;const p=n[(a+1)%2],s=null;Vn({mouseState:i,worldSize:r.worldSize,inputBuffer:p,outputBuffer:s})},Mt=e=>{if(!e.currentTarget)throw new Error("Event has no currentTarget");const t=e.currentTarget,n=t.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,{width:i,height:a}=t,c=o/i,l=(a-r)/a;return{x:c,y:l}};const{window:Hn}=Wt;function Nn(e){let t,n,o,r,i,a,c,l,p,s,u,m,v,f=2**e[0].worldSize+"",g,E,y=2**e[0].worldSize+"",h,B,d=2**(e[0].worldSize+1)+"",b,k,W,L,Z,lt,bt;return n=new rn({}),n.$on("fkupdated",e[7]),{c(){t=w("main"),U(n.$$.fragment),o=O(),r=w("div"),i=O(),a=w("div"),c=w("label"),l=D("World Size:"),p=O(),s=w("input"),u=O(),m=w("span"),v=D("("),g=D(f),E=D(" x "),h=D(y),B=D(" : "),b=D(d),k=D(")"),W=O(),L=w("canvas"),this.h()},l(N){t=A(N,"MAIN",{});var Y=C(t);q(n.$$.fragment,Y),o=H(Y),r=A(Y,"DIV",{id:!0,class:!0}),C(r).forEach(x),i=H(Y),a=A(Y,"DIV",{});var nt=C(a);c=A(nt,"LABEL",{for:!0});var wt=C(c);l=$(wt,"World Size:"),wt.forEach(x),p=H(nt),s=A(nt,"INPUT",{id:!0,type:!0,step:!0}),u=H(nt),m=A(nt,"SPAN",{});var tt=C(m);v=$(tt,"("),g=$(tt,f),E=$(tt," x "),h=$(tt,y),B=$(tt," : "),b=$(tt,d),k=$(tt,")"),tt.forEach(x),nt.forEach(x),W=H(Y),L=A(Y,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(L).forEach(x),Y.forEach(x),this.h()},h(){S(r,"id","datgui-container"),S(r,"class","svelte-18zf5fr"),S(c,"for","worldSize"),S(s,"id","worldSize"),S(s,"type","number"),S(s,"step","1"),S(L,"id","canvas"),S(L,"width",e[1].width),S(L,"height",e[1].height),S(L,"class","svelte-18zf5fr")},m(N,Y){R(N,t,Y),X(n,t,null),_(t,o),_(t,r),_(t,i),_(t,a),_(a,c),_(c,l),_(a,p),_(a,s),vt(s,e[0].worldSize),_(a,u),_(a,m),_(m,v),_(m,g),_(m,E),_(m,h),_(m,B),_(m,b),_(m,k),_(t,W),_(t,L),Z=!0,lt||(bt=[z(Hn,"keydown",e[2]),z(s,"input",e[8]),z(s,"change",e[6]),z(L,"mousemove",e[4]),z(L,"mousedown",et(e[5])),z(L,"mouseup",e[5]),z(L,"wheel",e[3]),z(L,"keydown",et(e[2])),z(L,"contextmenu",et(Yn))],lt=!0)},p(N,[Y]){Y&1&&_t(s.value)!==N[0].worldSize&&vt(s,N[0].worldSize),(!Z||Y&1)&&f!==(f=2**N[0].worldSize+"")&&pt(g,f),(!Z||Y&1)&&y!==(y=2**N[0].worldSize+"")&&pt(h,y),(!Z||Y&1)&&d!==(d=2**(N[0].worldSize+1)+"")&&pt(b,d)},i(N){Z||(I(n.$$.fragment,N),Z=!0)},o(N){M(n.$$.fragment,N),Z=!1},d(N){N&&x(t),G(n),lt=!1,gt(bt)}}}const Yn=e=>e;function Wn(e,t,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_IDL_CB_RdYiBu",initialConditions:"middleCircleAndRandomSpots",reset:()=>g(),pause:!1,grid:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:8},c={f:at[0].f,k:at[0].k};let l,p;const s=async()=>{const h=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new h.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const B=document.getElementById("datgui-container");if(!B)throw new Error("Gui container not ready");B.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",d).onFinishChange(r.reset).name("Initial conditions");const b=l.add(a,"iteration").listen();b.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(i,"penSize",0,a.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},u=h=>{if(h.code==="Space"){r.pause=!r.pause,h.preventDefault();return}if(h.code==="KeyR"&&!h.getModifierState("Control")){g(),h.preventDefault();return}},m=h=>{if(!h.getModifierState("Control"))return;const B=Mt(h);i.panX=B.x,i.panY=B.y,h.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),h.preventDefault()},v=h=>{const B=Mt(h);i.x=B.x,i.y=B.y},f=h=>{if(![0,2].includes(h.button)||!["mouseup","mousedown"].includes(h.type))return;let B=h.type==="mousedown";h.button===0&&(i.pressedLeft=B),h.button===2&&(i.pressedRight=B)},g=()=>{isNaN(a.worldSize)||(a.worldSize>11&&n(0,a.worldSize=11,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),p?.destroy(),s(),p=Kn({controls:r,info:a,mouseState:i,simulationParameters:c}))},E=h=>{c.f=h.detail.f,c.k=h.detail.k};it(()=>{g()}),ut(()=>{l.destroy(),p.destroy()});function y(){a.worldSize=_t(this.value),n(0,a)}return[a,o,u,m,v,f,g,E,y]}let Un=class extends j{constructor(t){super(),Q(this,t,Wn,Nn,J,{})}};const Xn=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Gn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,qn=`precision mediump float;

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
`,Zn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,jn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Qn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Jn=`precision mediump float;

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
`,to=`// Colors scheme inspired by Robert Munafo described here:
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
`,eo=`// Colors scheme inspired by Robert Munafo described here:
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
`,no=`precision mediump float;

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
`,oo=`precision mediump float;

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
`,ro=`precision mediump float;

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
`,ao=`precision mediump float;

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
`,io=`precision mediump float;

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
`,lo=`precision mediump float;

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
`,K={},so=e=>{const t={vert:Xn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{iteration:e.prop("iteration"),prevState:e.prop("inputBuffer")}};K.raw=e({frag:Gn,...t}),K.A_gradiant1=e({frag:no,...t}),K.A_gradiant2=e({frag:oo,...t}),K.A_MATLAB_cool=e({frag:ro,...t}),K.A_IDL_CB_RdBu=e({frag:ao,...t}),K.A_IDL_CB_RdYiBu=e({frag:io,...t}),K.B_IDL_CB_RdYiBu=e({frag:lo,...t}),K.grayscale=e({frag:Zn,...t}),K.blackwhite=e({frag:jn,...t}),K.whiteblack=e({frag:Qn,...t}),K.timebasedblue=e({frag:qn,...t}),K.lerp=e({frag:Jn,...t}),K.mrob=e({frag:to,...t}),K.redblue=e({frag:eo,...t})},co=e=>{const{colorMode:t,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:i}=e;(K[t]||K.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},uo=`precision mediump float;

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
`,fo=`precision mediump float;

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
`;let jt;const mo=(e,t)=>{jt=e({frag:uo,vert:fo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]],fk:(n,o)=>{const{maxF:r,minF:i,maxK:a,minK:c}=o.simulationParameters;return[[i,a],[i,c],[r,a],[r,a],[i,c],[r,c]]}},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),Da:1,Db:.5,radius:t,pauseSimulation:e.prop("pauseSimulation"),mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),penDensity:e.prop("penDensity"),penIsActive:e.prop("penIsActive")}})},po=e=>{const{inputBuffer:t,outputBuffer:n,simulationParameters:o,pauseSimulation:r,mouseState:i,worldSize:a}=e;jt({inputBuffer:t,outputBuffer:n,pauseSimulation:r,zoomLevel:i.zoomLevel,pan:[i.panX,i.panY],mousePosition:[i.x,i.y],penRadius:1/2**(a-i.penSize),penDensity:i.penDensity,penIsActive:i.pressedLeft,eraserIsActive:i.pressedRight,simulationParameters:o})},vo=(e,t)=>e==="randomSpots"?ho(t,.001):e==="middleCircleAndRandomSpots"?go(t,.005,.05):e==="empty"||e==="full"?Ft(t):xo(t,.02),go=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,i)=>{const a=Math.floor(i/e),c=i%e;return Math.hypot(e/2-c,e/2-a)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Ft=e=>Array(e*e).fill(0).map(()=>[0,0,0,1]).flat(),ho=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),xo=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),i=o%e;return Math.hypot(e/2-i,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),_o=e=>{const{controls:t,info:n,mouseState:o,simulationParameters:r}=e,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=mt({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const c=2**n.worldSize,l=vo(t.initialConditions,c),p=()=>a.framebuffer({color:a.texture({radius:c,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(p);return mo(a,c),so(a),a.frame(()=>{t.pause||n.iteration++;let u=s[(n.iteration+1)%2];for(let m=0;m<t.speed;m++){n.iteration++;const v=s[n.iteration%2];u=s[(n.iteration+1)%2],po({inputBuffer:v,outputBuffer:u,worldSize:n.worldSize,pauseSimulation:t.pause,mouseState:o,simulationParameters:r})}co({colorMode:t.colors,inputBuffer:u,iteration:n.iteration,outputBuffer:null,zoomState:o})}),a},Vt=e=>{if(!e.currentTarget)throw new Error("Event has no currentTarget");const t=e.currentTarget,n=t.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,{width:i,height:a}=t,c=o/i,l=(a-r)/a;return{x:c,y:l}};const{window:So}=Wt;function yo(e){let t,n,o,r,i,a,c,l,p,s,u,m;return{c(){t=w("main"),n=w("div"),o=O(),r=w("div"),i=w("label"),a=D("World Size:"),c=O(),l=w("input"),p=O(),s=w("canvas"),this.h()},l(v){t=A(v,"MAIN",{});var f=C(t);n=A(f,"DIV",{id:!0,class:!0}),C(n).forEach(x),o=H(f),r=A(f,"DIV",{});var g=C(r);i=A(g,"LABEL",{for:!0});var E=C(i);a=$(E,"World Size:"),E.forEach(x),c=H(g),l=A(g,"INPUT",{id:!0,type:!0,step:!0}),g.forEach(x),p=H(f),s=A(f,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(s).forEach(x),f.forEach(x),this.h()},h(){S(n,"id","datgui-container"),S(n,"class","svelte-198vt5w"),S(i,"for","worldSize"),S(l,"id","worldSize"),S(l,"type","number"),S(l,"step","1"),S(s,"id","canvas"),S(s,"width",e[1].width),S(s,"height",e[1].height),S(s,"class","svelte-198vt5w")},m(v,f){R(v,t,f),_(t,n),_(t,o),_(t,r),_(r,i),_(i,a),_(r,c),_(r,l),vt(l,e[0].worldSize),_(t,p),_(t,s),u||(m=[z(So,"keydown",e[2]),z(l,"input",e[7]),z(l,"change",e[6]),z(s,"mousemove",e[4]),z(s,"mousedown",et(e[5])),z(s,"mouseup",e[5]),z(s,"wheel",e[3]),z(s,"keydown",et(e[2])),z(s,"contextmenu",et(Eo))],u=!0)},p(v,[f]){f&1&&_t(l.value)!==v[0].worldSize&&vt(l,v[0].worldSize)},i:F,o:F,d(v){v&&x(t),u=!1,gt(m)}}}const Eo=e=>e;function bo(e,t,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"blackwhite",initialConditions:"full",reset:()=>g(),pause:!1,grid:!1,speed:10},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:12,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},a={iteration:0,worldSize:12},c={minK:.02,maxK:.07,minF:0,maxF:.12};let l,p;const s=async()=>{const y=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new y.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const h=document.getElementById("datgui-container");if(!h)throw new Error("Gui container not ready");h.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const B={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty",Full:"full"};l.add(r,"initialConditions",B).onFinishChange(r.reset).name("Initial conditions");const d=l.add(a,"iteration").listen();d.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(i,"penSize",0,a.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(c,"minK",0,c.maxK),l.add(c,"maxK",c.minK,1),l.add(c,"minF",0,c.maxF),l.add(c,"maxF",c.minF,1)},u=y=>{if(y.code==="Space"){r.pause=!r.pause,y.preventDefault();return}if(y.code==="KeyR"&&!y.getModifierState("Control")){g(),y.preventDefault();return}},m=y=>{if(!y.getModifierState("Control"))return;const h=Vt(y);i.panX=h.x,i.panY=h.y,y.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),y.preventDefault()},v=y=>{const h=Vt(y);i.x=h.x,i.y=h.y},f=y=>{if(![0,2].includes(y.button)||!["mouseup","mousedown"].includes(y.type))return;let h=y.type==="mousedown";y.button===0&&(i.pressedLeft=h),y.button===2&&(i.pressedRight=h)},g=()=>{isNaN(a.worldSize)||(a.worldSize>12&&n(0,a.worldSize=12,a),a.worldSize<1&&n(0,a.worldSize=1,a),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),p?.destroy(),s(),p=_o({controls:r,info:a,mouseState:i,simulationParameters:c}))};it(()=>{g()}),ut(()=>{l.destroy(),p.destroy()});function E(){a.worldSize=_t(this.value),n(0,a)}return[a,o,u,m,v,f,g,E]}class wo extends j{constructor(t){super(),Q(this,t,bo,yo,J,{})}}function Kt(e,t,n){const o=e.slice();return o[1]=t[n],o}function Ot(e,t,n){const o=e.slice();return o[1]=t[n],o}function Ao(e){let t;return{c(){t=D("About")},l(n){t=$(n,"About")},m(n,o){R(n,t,o)},d(n){n&&x(t)}}}function Do(e){let t=e[1].title+"",n;return{c(){n=D(t)},l(o){n=$(o,t)},m(o,r){R(o,n,r)},p:F,d(o){o&&x(n)}}}function Ht(e){let t,n;return t=new Xt({props:{$$slots:{default:[Do]},$$scope:{ctx:e}}}),{c(){U(t.$$.fragment)},l(o){q(t.$$.fragment,o)},m(o,r){X(t,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),t.$set(i)},i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){M(t.$$.fragment,o),n=!1},d(o){G(t,o)}}}function $o(e){let t,n,o,r;t=new Xt({props:{$$slots:{default:[Ao]},$$scope:{ctx:e}}});let i=e[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=Ht(Ot(e,i,l));const c=l=>M(a[l],1,1,()=>{a[l]=null});return{c(){U(t.$$.fragment),n=O();for(let l=0;l<a.length;l+=1)a[l].c();o=dt()},l(l){q(t.$$.fragment,l),n=H(l);for(let p=0;p<a.length;p+=1)a[p].l(l);o=dt()},m(l,p){X(t,l,p),R(l,n,p);for(let s=0;s<a.length;s+=1)a[s].m(l,p);R(l,o,p),r=!0},p(l,p){const s={};if(p&64&&(s.$$scope={dirty:p,ctx:l}),t.$set(s),p&1){i=l[0];let u;for(u=0;u<i.length;u+=1){const m=Ot(l,i,u);a[u]?(a[u].p(m,p),I(a[u],1)):(a[u]=Ht(m),a[u].c(),I(a[u],1),a[u].m(o.parentNode,o))}for(ht(),u=i.length;u<a.length;u+=1)c(u);xt()}},i(l){if(!r){I(t.$$.fragment,l);for(let p=0;p<i.length;p+=1)I(a[p]);r=!0}},o(l){M(t.$$.fragment,l),a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)M(a[p]);r=!1},d(l){G(t,l),l&&x(n),Et(a,l),l&&x(o)}}}function Bo(e){let t,n,o,r,i,a,c,l,p,s,u,m;return{c(){t=w("p"),n=D("Experiments with "),o=w("a"),r=D("Reaction-diffusion systems"),i=O(),a=w("p"),c=D("The code is based on "),l=w("a"),p=D("this tutorial"),s=D(`
                but reimplemented in a glsl shader with
                `),u=w("a"),m=D("regl"),this.h()},l(v){t=A(v,"P",{});var f=C(t);n=$(f,"Experiments with "),o=A(f,"A",{href:!0,target:!0});var g=C(o);r=$(g,"Reaction-diffusion systems"),g.forEach(x),f.forEach(x),i=H(v),a=A(v,"P",{});var E=C(a);c=$(E,"The code is based on "),l=A(E,"A",{href:!0,target:!0});var y=C(l);p=$(y,"this tutorial"),y.forEach(x),s=$(E,`
                but reimplemented in a glsl shader with
                `),u=A(E,"A",{href:!0,target:!0});var h=C(u);m=$(h,"regl"),h.forEach(x),E.forEach(x),this.h()},h(){S(o,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),S(o,"target","none"),S(l,"href","https://karlsims.com/rd.html"),S(l,"target","none"),S(u,"href","https://github.com/regl-project/regl"),S(u,"target","none")},m(v,f){R(v,t,f),_(t,n),_(t,o),_(o,r),R(v,i,f),R(v,a,f),_(a,c),_(a,l),_(l,p),_(a,s),_(a,u),_(u,m)},p:F,d(v){v&&x(t),v&&x(i),v&&x(a)}}}function ko(e){let t,n,o;var r=e[1].component;function i(a){return{}}return r&&(t=$t(r,i())),{c(){t&&U(t.$$.fragment),n=O()},l(a){t&&q(t.$$.fragment,a),n=H(a)},m(a,c){t&&X(t,a,c),R(a,n,c),o=!0},p(a,c){if(r!==(r=a[1].component)){if(t){ht();const l=t;M(l.$$.fragment,1,0,()=>{G(l,1)}),xt()}r?(t=$t(r,i()),U(t.$$.fragment),I(t.$$.fragment,1),X(t,n.parentNode,n)):t=null}},i(a){o||(t&&I(t.$$.fragment,a),o=!0)},o(a){t&&M(t.$$.fragment,a),o=!1},d(a){t&&G(t,a),a&&x(n)}}}function Nt(e){let t,n;return t=new Ut({props:{$$slots:{default:[ko]},$$scope:{ctx:e}}}),{c(){U(t.$$.fragment)},l(o){q(t.$$.fragment,o)},m(o,r){X(t,o,r),n=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),t.$set(i)},i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){M(t.$$.fragment,o),n=!1},d(o){G(t,o)}}}function Co(e){let t,n,o,r,i,a;t=new ne({props:{$$slots:{default:[$o]},$$scope:{ctx:e}}}),o=new Ut({props:{$$slots:{default:[Bo]},$$scope:{ctx:e}}});let c=e[0],l=[];for(let s=0;s<c.length;s+=1)l[s]=Nt(Kt(e,c,s));const p=s=>M(l[s],1,1,()=>{l[s]=null});return{c(){U(t.$$.fragment),n=O(),U(o.$$.fragment),r=O();for(let s=0;s<l.length;s+=1)l[s].c();i=dt()},l(s){q(t.$$.fragment,s),n=H(s),q(o.$$.fragment,s),r=H(s);for(let u=0;u<l.length;u+=1)l[u].l(s);i=dt()},m(s,u){X(t,s,u),R(s,n,u),X(o,s,u),R(s,r,u);for(let m=0;m<l.length;m+=1)l[m].m(s,u);R(s,i,u),a=!0},p(s,u){const m={};u&64&&(m.$$scope={dirty:u,ctx:s}),t.$set(m);const v={};if(u&64&&(v.$$scope={dirty:u,ctx:s}),o.$set(v),u&1){c=s[0];let f;for(f=0;f<c.length;f+=1){const g=Kt(s,c,f);l[f]?(l[f].p(g,u),I(l[f],1)):(l[f]=Nt(g),l[f].c(),I(l[f],1),l[f].m(i.parentNode,i))}for(ht(),f=c.length;f<l.length;f+=1)p(f);xt()}},i(s){if(!a){I(t.$$.fragment,s),I(o.$$.fragment,s);for(let u=0;u<c.length;u+=1)I(l[u]);a=!0}},o(s){M(t.$$.fragment,s),M(o.$$.fragment,s),l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)M(l[u]);a=!1},d(s){G(t,s),s&&x(n),G(o,s),s&&x(r),Et(l,s),s&&x(i)}}}function Lo(e){let t,n,o;return n=new ee({props:{$$slots:{default:[Co]},$$scope:{ctx:e}}}),{c(){t=w("div"),U(n.$$.fragment)},l(r){t=A(r,"DIV",{});var i=C(t);q(n.$$.fragment,i),i.forEach(x)},m(r,i){R(r,t,i),X(n,t,null),o=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),n.$set(a)},i(r){o||(I(n.$$.fragment,r),o=!0)},o(r){M(n.$$.fragment,r),o=!1},d(r){r&&x(t),G(n)}}}function zo(e){return[[{title:"Parameters map",component:wo},{title:"V7",component:Un},{title:"V6",component:en},{title:"V5",component:We},{title:"V4",component:Ve},{title:"V3",component:Te},{title:"V2",component:De},{title:"V1",component:ge}]]}class Ro extends j{constructor(t){super(),Q(this,t,zo,Lo,J,{})}}function Io(e){let t,n;return t=new Ro({}),{c(){U(t.$$.fragment)},l(o){q(t.$$.fragment,o)},m(o,r){X(t,o,r),n=!0},p:F,i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){M(t.$$.fragment,o),n=!1},d(o){G(t,o)}}}class Xo extends j{constructor(t){super(),Q(this,t,null,Io,J,{})}}export{Xo as default};