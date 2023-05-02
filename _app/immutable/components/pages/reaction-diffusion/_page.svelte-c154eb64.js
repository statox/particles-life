import{S as M,i as T,s as F,k as R,l as L,m as I,h as v,n as y,b as D,X as kt,B as S,Y as Dt,o as j,w as x,x as P,y as B,f as b,t as A,z as C,Q as rt,K as V,Z as q,M as $t,a as H,e as J,c as Q,g as at,d as it,L as _t,q as N,r as O,D as W,v as lt}from"../../../chunks/index-8c90984f.js";import{T as At,a as xt,b as St,c as bt}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as tt}from"../../../chunks/preload-helper-41c905a7.js";import{R as et}from"../../../chunks/regl-89b00fbf.js";function Bt(o){let t,e,n;return{c(){t=R("div"),this.h()},l(r){t=L(r,"DIV",{style:!0,class:!0}),I(t).forEach(v),this.h()},h(){y(t,"style",o[0]),y(t,"class","m-0")},m(r,i){D(r,t,i),e||(n=kt(o[1].call(null,t)),e=!0)},p(r,[i]){i&1&&y(t,"style",r[0])},i:S,o:S,d(r){r&&v(t),e=!1,n()}}}function Ct(o,t){return t.forEach(([e,n])=>o[e]=n),o}function Et(o,t,e){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:a=!1}=t,s;const l=Dt(),m={ref(){l("ref",n)},instance(){l("instance",s)}};function f(c){return e(2,n=c),{destroy(){e(2,n=void 0)}}}return j(async()=>{const c=await tt(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:h}=c,p=Object.entries(c).filter(([d,g])=>g instanceof Function&&d[0]!=="_"&&d!=="default");a&&console.log("available p5 native classes",p),s=new h(d=>(d=Ct(d,p),a&&console.log("p5 instance",d),window._p5Instance=d,r(d)),n),m.ref(),m.instance()}),o.$$set=c=>{"target"in c&&e(2,n=c.target),"sketch"in c&&e(3,r=c.sketch),"parentDivStyle"in c&&e(0,i=c.parentDivStyle),"debug"in c&&e(4,a=c.debug)},[i,f,n,r,a]}class st extends M{constructor(t){super(),T(this,t,Et,Bt,F,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Rt=o=>{const t=[];for(let a=0;a<o.height;a++){t.push([]);for(let s=0;s<o.width;s++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,r=Math.floor(o.width/2),i=Math.floor(o.height/2);for(let a=i-n;a<i+n;a++)for(let s=r-e;s<r+e;s++)t[a][s].B=1;return t},Lt=(o,t)=>{const e={width:o.width/t[0].length,height:o.height/t.length};for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++){const{A:i,B:a}=t[n][r];o.fill(i*255,a*255,0),o.rect(r*e.width,n*e.height,e.width,e.height)}},It=1,Pt=.5,ct=.055,Mt=.062,Tt=o=>{const t=[];for(let e=0;e<o.length;e++){t.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:i}=o[e][n],a=ft(o,{x:n,y:e},"A"),s=ft(o,{x:n,y:e},"B"),l=r+(It*a-r*i*i+ct*(1-r)),m=i+(Pt*s+r*i*i-(Mt+ct)*i);t[e].push({A:l,B:m})}}return t},ft=(o,t,e)=>{const n=Ft(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},Ft=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},f={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function Wt(o){let t,e;return t=new st({props:{sketch:o[0]}}),{c(){x(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,r){B(t,n,r),e=!0},p:S,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}function Nt(o){const t={width:200,height:200};let e;return[r=>{let i;r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),i=Rt(t)},r.draw=()=>{r.background(0);for(let a=0;a<20;a++)i=Tt(i);Lt(e,i)}}]}let Ot=class extends M{constructor(t){super(),T(this,t,Nt,Wt,F,{})}},$,G;const Vt=o=>{$=[],G=[];for(let i=0;i<o.height;i++){$.push([]),G.push([]);for(let a=0;a<o.width;a++)$[$.length-1].push({A:1,B:0}),G[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)$[i][a].B=1;return $},Xt=o=>{const t={width:o.width/$[0].length,height:o.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:r,B:i}=$[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},zt=1,Gt=.5,ut=.055,Ut=.062,Kt=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:r}=$[t][e],i=pt($,{x:e,y:t},"A"),a=pt($,{x:e,y:t},"B"),s=n+(zt*i-n*r*r+ut*(1-n)),l=r+(Gt*a+n*r*r-(Ut+ut)*r);G[t][e]={A:s,B:l}}const o=$;return $=G,G=o,$},pt=(o,t,e)=>{const n=Yt(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},Yt=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},f={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function Zt(o){let t,e;return t=new st({props:{sketch:o[0]}}),{c(){x(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,r){B(t,n,r),e=!0},p:S,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}function Ht(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),Vt(t)},r.draw=()=>{for(let i=0;i<5;i++)Kt();Xt(e)}}]}let Qt=class extends M{constructor(t){super(),T(this,t,Ht,Zt,F,{})}},_,U;const jt=o=>{_=[],U=[];for(let i=0;i<o.height;i++){_.push([]),U.push([]);for(let a=0;a<o.width;a++)_[_.length-1].push({A:1,B:0}),U[_.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let i=r-e;i<r+e;i++)for(let a=n-t;a<n+t;a++)_[i][a].B=1;return _},qt=o=>{const t={width:o.width/_[0].length,height:o.height/_.length};for(let e=0;e<_.length;e++)for(let n=0;n<_[0].length;n++){const{A:r,B:i}=_[e][n];o.fill(r*255,i*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},Jt=1,te=.5,mt=.055,ee=.062,ne=()=>{for(let t=0;t<_.length;t++)for(let e=0;e<_[0].length;e++){const{A:n,B:r}=_[t][e],i=dt(_,{x:e,y:t},"A"),a=dt(_,{x:e,y:t},"B"),s=n+(Jt*i-n*r*r+mt*(1-n)),l=r+(te*a+n*r*r-(ee+mt)*r);U[t][e]={A:s,B:l}}const o=_;return _=U,U=o,_},dt=(o,t,e)=>{const n=oe(o,t);let r=0;for(const i of n){const{coord:a,weight:s}=i;r+=o[a.y][a.x][e]*s}return r},oe=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,i=o.length,a={coord:{x:e>0?e-1:r-1,y:n>0?n-1:i-1},weight:.05},s={coord:{x:e,y:n>0?n-1:i-1},weight:.2},l={coord:{x:e<r-1?e+1:0,y:n>0?n-1:i-1},weight:.05},m={coord:{x:e>0?e-1:r-1,y:n},weight:.2},f={coord:{x:e,y:n},weight:-1},c={coord:{x:e<r-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:r-1,y:n<i-1?n+1:0},weight:.05},u={coord:{x:e,y:n<i-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<i-1?n+1:0},weight:.05};return[a,s,l,m,f,c,h,u,p]};function re(o){let t,e;return t=new st({props:{sketch:o[0]}}),{c(){x(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,r){B(t,n,r),e=!0},p:S,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}function ae(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),jt(t)},r.draw=()=>{for(let i=0;i<5;i++)ne();qt(e)}}]}let ie=class extends M{constructor(t){super(),T(this,t,ae,re,F,{})}};function se(o){let t;return{c(){t=R("canvas"),this.h()},l(e){t=L(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(v),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(e,n){D(e,t,n)},p:S,i:S,o:S,d(e){e&&v(t)}}}function le(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,r=Array(e*e).fill(0).map((i,a)=>{const s=Math.floor(a/e),l=a%e;return Math.hypot(e/2-l,e/2-s)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return j(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const a=et({extensions:["OES_texture_float"],canvas:i}),s=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=a({frag:`
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
}`,framebuffer:f=>s[(f.tick+1)%2]}),m=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:f})=>s[f%2]},depth:{enable:!1},count:3});a.frame(()=>{m(()=>{a.draw(),l()})})}),[t]}let ce=class extends M{constructor(t){super(),T(this,t,le,se,F,{})}};const fe=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ue=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),pe=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),K=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function me(o){let t;return{c(){t=R("canvas"),this.h()},l(e){t=L(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(v),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(e,n){D(e,t,n)},p:S,i:S,o:S,d(e){e&&v(t)}}}function de(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},n={iteration:0},r={f:K[e.presetParams].f,k:K[e.presetParams].k};let i,a;const s=async()=>{const f=await tt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new f.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(r,"f").name("Feed rate").listen(),i.add(r,"k").name("Kill rate").listen(),i.add(e,"pause").name("Pause"),i.add(e,"reset").name("Reset simulation");const c=K.reduce((p,d,g)=>(p[d.name]=g,p),{});i.add(e,"presetParams",c).onFinishChange(()=>{r.f=K[e.presetParams].f,r.k=K[e.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(e,"initialConditions",h).onFinishChange(e.reset);const u=i.add(n,"iteration").listen();u.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",f=>{if(f.code==="Space")return e.pause=!e.pause,f.preventDefault();if(f.code==="KeyR")return m(),f.preventDefault()})},m=()=>{const f=document.getElementById("canvas");if(!f)throw new Error("Canvas container not ready");a&&a.destroy(),a=et({extensions:["OES_texture_float"],canvas:f}),n.iteration=0;const c=2**11;let h;e.initialConditions==="randomSpots"?h=ue(c,.001):e.initialConditions==="middleCircleAndRandomSpots"?h=fe(c,.005,.05):h=pe(c,.02);const u=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:c,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),p=a({frag:`
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
}`,framebuffer:g=>u[(g.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),d=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:g})=>u[g%2]},depth:{enable:!1},count:3});a.frame(()=>{d(()=>{a.draw(),!e.pause&&(n.iteration++,p({Da:1,Db:.5,...r}))})})};return j(()=>{s(),l(),m()}),rt(()=>{i.destroy(),a.destroy()}),[t]}let he=class extends M{constructor(t){super(),T(this,t,de,me,F,{})}};const ge=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ve=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ye=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),Y=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],$e=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,_e=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,Se=`precision mediump float;

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
`;function be(o){let t,e,n;return{c(){t=R("canvas"),this.h()},l(r){t=L(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(v),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(r,i){D(r,t,i),e||(n=[V(t,"mousemove",o[1]),V(t,"mousedown",q(o[2])),V(t,"mouseup",o[2]),V(t,"contextmenu",q(we))],e=!0)},p:S,i:S,o:S,d(r){r&&v(t),e=!1,$t(n)}}}const nt=11,we=o=>o;function ke(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},i={f:Y[e.presetParams].f,k:Y[e.presetParams].k};let a,s;const l=async()=>{const u=await tt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const p=Y.reduce((w,k,E)=>(w[k.name]=E,w),{});a.add(e,"presetParams",p).onFinishChange(()=>{i.f=Y[e.presetParams].f,i.k=Y[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",d).onFinishChange(e.reset);const g=a.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",a.add(n,"penSize",1,nt,1).name("Pen size")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return e.pause=!e.pause,u.preventDefault();if(u.code==="KeyR")return f(),u.preventDefault()})},f=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=et({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**nt;let d;e.initialConditions==="randomSpots"?d=ve(p,.001):e.initialConditions==="middleCircleAndRandomSpots"?d=ge(p,.005,.05):d=ye(p,.02);const g=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),w=s({frag:Se,framebuffer:E=>g[(E.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}}),k=s({frag:_e,vert:$e,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:E})=>g[E%2]},depth:{enable:!1},count:3});s.frame(()=>{k(()=>{s.draw(),e.pause||r.iteration++,w({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(nt-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i})})})},c=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:d}=u,{width:g,height:w}=u.currentTarget,k=p/g,E=(w-d)/w;n.x=k,n.y=E},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return j(()=>{l(),m(),f()}),rt(()=>{a.destroy(),s.destroy()}),[t,c,h]}let De=class extends M{constructor(t){super(),T(this,t,ke,be,F,{})}};const Ae=(o,t)=>o==="randomSpots"?Ce(t,.001):o==="middleCircleAndRandomSpots"?xe(t,.005,.05):o==="empty"?Be(t):Ee(t,.02),xe=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,i)=>{const a=Math.floor(i/o),s=i%o;return Math.hypot(o/2-s,o/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Be=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Ce=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Ee=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),i=n%o;return Math.hypot(o/2-i,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),Z=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],z=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Re=`precision mediump float;

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
`,Le=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Ie=`precision mediump float;

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
`,Pe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Me=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Te=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,X={},Fe=(o,t)=>{X.raw=o({frag:Le,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),X.grayscale=o({frag:Pe,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),X.blackwhite=o({frag:Me,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),X.whiteblack=o({frag:Te,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),X.timebasedblue=o({frag:Ie,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}})},We=(o,t)=>{(X[o]||X.raw)({iteration:t.iteration})};function Ne(o){let t,e,n;return{c(){t=R("canvas"),this.h()},l(r){t=L(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(t).forEach(v),this.h()},h(){y(t,"id","canvas"),y(t,"width",o[0].width),y(t,"height",o[0].height),y(t,"class","svelte-1b0ol19")},m(r,i){D(r,t,i),e||(n=[V(t,"mousemove",o[1]),V(t,"mousedown",q(o[2])),V(t,"mouseup",o[2]),V(t,"contextmenu",q(Oe))],e=!0)},p:S,i:S,o:S,d(r){r&&v(t),e=!1,$t(n)}}}const ot=11,Oe=o=>o;function Ve(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,colors:"blackwhite",initialConditions:"randomSpots",reset:()=>f(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:9,penDensity:.3},r={iteration:0},i={f:Z[e.presetParams].f,k:Z[e.presetParams].k};let a,s;const l=async()=>{const u=await tt(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(i,"f").name("Feed rate").listen(),a.add(i,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation"),a.add(e,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue"]);const p=Z.reduce((w,k,E)=>(w[k.name]=E,w),{});a.add(e,"presetParams",p).onFinishChange(()=>{i.f=Z[e.presetParams].f,i.k=Z[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};a.add(e,"initialConditions",d).onFinishChange(e.reset);const g=a.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",a.add(n,"penSize",1,ot,1).name("Pen size"),a.add(n,"penDensity",0,1).name("Pen density")},m=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return e.pause=!e.pause,u.preventDefault();if(u.code==="KeyR")return f(),u.preventDefault()})},f=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");s&&s.destroy(),s=et({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**ot;let d=Ae(e.initialConditions,p);const g=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:p,data:d,wrap:"repeat",type:"float"}),depthStencil:!1}));Fe(s,g);const w=s({frag:Re,vert:z,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:k=>g[(k.tick+1)%2],uniforms:{prevState:k=>g[k.tick%2],Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:p,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penDensity:s.prop("penDensity"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}});s.frame(()=>{e.pause||r.iteration++,w({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(ot-n.penSize),penDensity:n.penDensity,penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...i}),We(e.colors,r)})},c=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var p=u.currentTarget.getBoundingClientRect();const d=u.clientX-p.left,g=u.clientY-p.top,{width:w,height:k}=u.currentTarget,E=d/w,wt=(k-g)/k;n.x=E,n.y=wt},h=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return j(()=>{l(),m(),f()}),rt(()=>{a.destroy(),s.destroy()}),[t,c,h]}class Xe extends M{constructor(t){super(),T(this,t,Ve,Ne,F,{})}}function ht(o,t,e){const n=o.slice();return n[1]=t[e],n}function gt(o,t,e){const n=o.slice();return n[1]=t[e],n}function ze(o){let t;return{c(){t=N("About")},l(e){t=O(e,"About")},m(e,n){D(e,t,n)},d(e){e&&v(t)}}}function Ge(o){let t=o[1].title+"",e;return{c(){e=N(t)},l(n){e=O(n,t)},m(n,r){D(n,e,r)},p:S,d(n){n&&v(e)}}}function vt(o){let t,e;return t=new bt({props:{$$slots:{default:[Ge]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,r){B(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}function Ue(o){let t,e,n,r;t=new bt({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}});let i=o[0],a=[];for(let l=0;l<i.length;l+=1)a[l]=vt(gt(o,i,l));const s=l=>A(a[l],1,1,()=>{a[l]=null});return{c(){x(t.$$.fragment),e=H();for(let l=0;l<a.length;l+=1)a[l].c();n=J()},l(l){P(t.$$.fragment,l),e=Q(l);for(let m=0;m<a.length;m+=1)a[m].l(l);n=J()},m(l,m){B(t,l,m),D(l,e,m);for(let f=0;f<a.length;f+=1)a[f].m(l,m);D(l,n,m),r=!0},p(l,m){const f={};if(m&64&&(f.$$scope={dirty:m,ctx:l}),t.$set(f),m&1){i=l[0];let c;for(c=0;c<i.length;c+=1){const h=gt(l,i,c);a[c]?(a[c].p(h,m),b(a[c],1)):(a[c]=vt(h),a[c].c(),b(a[c],1),a[c].m(n.parentNode,n))}for(at(),c=i.length;c<a.length;c+=1)s(c);it()}},i(l){if(!r){b(t.$$.fragment,l);for(let m=0;m<i.length;m+=1)b(a[m]);r=!0}},o(l){A(t.$$.fragment,l),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)A(a[m]);r=!1},d(l){C(t,l),l&&v(e),_t(a,l),l&&v(n)}}}function Ke(o){let t,e,n,r,i,a,s,l,m,f,c,h;return{c(){t=R("p"),e=N("Experiments with "),n=R("a"),r=N("Reaction-diffusion systems"),i=H(),a=R("p"),s=N("The code is based on "),l=R("a"),m=N("this tutorial"),f=N(`
                but reimplemented in a glsl shader with
                `),c=R("a"),h=N("regl"),this.h()},l(u){t=L(u,"P",{});var p=I(t);e=O(p,"Experiments with "),n=L(p,"A",{href:!0,target:!0});var d=I(n);r=O(d,"Reaction-diffusion systems"),d.forEach(v),p.forEach(v),i=Q(u),a=L(u,"P",{});var g=I(a);s=O(g,"The code is based on "),l=L(g,"A",{href:!0,target:!0});var w=I(l);m=O(w,"this tutorial"),w.forEach(v),f=O(g,`
                but reimplemented in a glsl shader with
                `),c=L(g,"A",{href:!0,target:!0});var k=I(c);h=O(k,"regl"),k.forEach(v),g.forEach(v),this.h()},h(){y(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),y(n,"target","none"),y(l,"href","https://karlsims.com/rd.html"),y(l,"target","none"),y(c,"href","https://github.com/regl-project/regl"),y(c,"target","none")},m(u,p){D(u,t,p),W(t,e),W(t,n),W(n,r),D(u,i,p),D(u,a,p),W(a,s),W(a,l),W(l,m),W(a,f),W(a,c),W(c,h)},p:S,d(u){u&&v(t),u&&v(i),u&&v(a)}}}function Ye(o){let t,e,n;var r=o[1].component;function i(a){return{}}return r&&(t=lt(r,i())),{c(){t&&x(t.$$.fragment),e=H()},l(a){t&&P(t.$$.fragment,a),e=Q(a)},m(a,s){t&&B(t,a,s),D(a,e,s),n=!0},p(a,s){if(r!==(r=a[1].component)){if(t){at();const l=t;A(l.$$.fragment,1,0,()=>{C(l,1)}),it()}r?(t=lt(r,i()),x(t.$$.fragment),b(t.$$.fragment,1),B(t,e.parentNode,e)):t=null}},i(a){n||(t&&b(t.$$.fragment,a),n=!0)},o(a){t&&A(t.$$.fragment,a),n=!1},d(a){t&&C(t,a),a&&v(e)}}}function yt(o){let t,e;return t=new St({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,r){B(t,n,r),e=!0},p(n,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}function Ze(o){let t,e,n,r,i,a;t=new xt({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),n=new St({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}});let s=o[0],l=[];for(let f=0;f<s.length;f+=1)l[f]=yt(ht(o,s,f));const m=f=>A(l[f],1,1,()=>{l[f]=null});return{c(){x(t.$$.fragment),e=H(),x(n.$$.fragment),r=H();for(let f=0;f<l.length;f+=1)l[f].c();i=J()},l(f){P(t.$$.fragment,f),e=Q(f),P(n.$$.fragment,f),r=Q(f);for(let c=0;c<l.length;c+=1)l[c].l(f);i=J()},m(f,c){B(t,f,c),D(f,e,c),B(n,f,c),D(f,r,c);for(let h=0;h<l.length;h+=1)l[h].m(f,c);D(f,i,c),a=!0},p(f,c){const h={};c&64&&(h.$$scope={dirty:c,ctx:f}),t.$set(h);const u={};if(c&64&&(u.$$scope={dirty:c,ctx:f}),n.$set(u),c&1){s=f[0];let p;for(p=0;p<s.length;p+=1){const d=ht(f,s,p);l[p]?(l[p].p(d,c),b(l[p],1)):(l[p]=yt(d),l[p].c(),b(l[p],1),l[p].m(i.parentNode,i))}for(at(),p=s.length;p<l.length;p+=1)m(p);it()}},i(f){if(!a){b(t.$$.fragment,f),b(n.$$.fragment,f);for(let c=0;c<s.length;c+=1)b(l[c]);a=!0}},o(f){A(t.$$.fragment,f),A(n.$$.fragment,f),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)A(l[c]);a=!1},d(f){C(t,f),f&&v(e),C(n,f),f&&v(r),_t(l,f),f&&v(i)}}}function He(o){let t,e,n;return e=new At({props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}}),{c(){t=R("div"),x(e.$$.fragment)},l(r){t=L(r,"DIV",{});var i=I(t);P(e.$$.fragment,i),i.forEach(v)},m(r,i){D(r,t,i),B(e,t,null),n=!0},p(r,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){r&&v(t),C(e)}}}function Qe(o){return[[{title:"V7",component:Xe},{title:"V6",component:De},{title:"V5",component:he},{title:"V4",component:ce},{title:"V3",component:ie},{title:"V2",component:Qt},{title:"V1",component:Ot}]]}class je extends M{constructor(t){super(),T(this,t,Qe,He,F,{})}}function qe(o){let t,e;return t=new je({}),{c(){x(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,r){B(t,n,r),e=!0},p:S,i(n){e||(b(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}class fn extends M{constructor(t){super(),T(this,t,null,qe,F,{})}}export{fn as default};
