import{S as T,i as F,s as V,k as L,l as I,m as M,h as w,n as $,b as D,X as Bt,B as A,Y as Ct,o as tt,w as B,x as E,y as C,f as x,t as k,z as P,Q as rt,K as H,Z as nt,M as St,a as Z,c as Q,e as ot,g as ct,d as ft,L as _t,q as O,r as z,D as W,v as ut}from"../../../chunks/index-8c90984f.js";import{T as Pt,a as Rt,b as xt,c as kt}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as at}from"../../../chunks/preload-helper-41c905a7.js";import{R as it}from"../../../chunks/regl-89b00fbf.js";function Et(o){let t,n,e;return{c(){t=L("div"),this.h()},l(r){t=I(r,"DIV",{style:!0,class:!0}),M(t).forEach(w),this.h()},h(){$(t,"style",o[0]),$(t,"class","m-0")},m(r,a){D(r,t,a),n||(e=Bt(o[1].call(null,t)),n=!0)},p(r,[a]){a&1&&$(t,"style",r[0])},i:A,o:A,d(r){r&&w(t),n=!1,e()}}}function Lt(o,t){return t.forEach(([n,e])=>o[n]=e),o}function It(o,t,n){let{target:e=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:a="display: block;"}=t,{debug:i=!1}=t,l;const s=Ct(),m={ref(){s("ref",e)},instance(){s("instance",l)}};function u(f){return n(2,e=f),{destroy(){n(2,e=void 0)}}}return tt(async()=>{const f=await at(()=>import("../../../chunks/p5.min-b96f42d1.js").then(y=>y.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:v}=f,p=Object.entries(f).filter(([y,c])=>c instanceof Function&&y[0]!=="_"&&y!=="default");i&&console.log("available p5 native classes",p),l=new v(y=>(y=Lt(y,p),i&&console.log("p5 instance",y),window._p5Instance=y,r(y)),e),m.ref(),m.instance()}),o.$$set=f=>{"target"in f&&n(2,e=f.target),"sketch"in f&&n(3,r=f.sketch),"parentDivStyle"in f&&n(0,a=f.parentDivStyle),"debug"in f&&n(4,i=f.debug)},[a,u,e,r,i]}class st extends T{constructor(t){super(),F(this,t,It,Et,V,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Mt=o=>{const t=[];for(let i=0;i<o.height;i++){t.push([]);for(let l=0;l<o.width;l++)t[t.length-1].push({A:1,B:0})}const n=5,e=5,r=Math.floor(o.width/2),a=Math.floor(o.height/2);for(let i=a-e;i<a+e;i++)for(let l=r-n;l<r+n;l++)t[i][l].B=1;return t},Tt=(o,t)=>{const n={width:o.width/t[0].length,height:o.height/t.length};for(let e=0;e<t.length;e++)for(let r=0;r<t[0].length;r++){const{A:a,B:i}=t[e][r];o.fill(a*255,i*255,0),o.rect(r*n.width,e*n.height,n.width,n.height)}},Ft=1,Vt=.5,mt=.055,Wt=.062,Nt=o=>{const t=[];for(let n=0;n<o.length;n++){t.push([]);for(let e=0;e<o[0].length;e++){const{A:r,B:a}=o[n][e],i=pt(o,{x:e,y:n},"A"),l=pt(o,{x:e,y:n},"B"),s=r+(Ft*i-r*a*a+mt*(1-r)),m=a+(Vt*l+r*a*a-(Wt+mt)*a);t[n].push({A:s,B:m})}}return t},pt=(o,t,n)=>{const e=Kt(o,t);let r=0;for(const a of e){const{coord:i,weight:l}=a;r+=o[i.y][i.x][n]*l}return r},Kt=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,a=o.length,i={coord:{x:n>0?n-1:r-1,y:e>0?e-1:a-1},weight:.05},l={coord:{x:n,y:e>0?e-1:a-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:a-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:e},weight:.2},u={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},v={coord:{x:n>0?n-1:r-1,y:e<a-1?e+1:0},weight:.05},d={coord:{x:n,y:e<a-1?e+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:e<a-1?e+1:0},weight:.05};return[i,l,s,m,u,f,v,d,p]};function Ot(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:A,i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function zt(o){const t={width:200,height:200};let n;return[r=>{let a;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),a=Mt(t)},r.draw=()=>{r.background(0);for(let i=0;i<20;i++)a=Nt(a);Tt(n,a)}}]}let Ht=class extends T{constructor(t){super(),F(this,t,zt,Ot,V,{})}},S,Y;const Ut=o=>{S=[],Y=[];for(let a=0;a<o.height;a++){S.push([]),Y.push([]);for(let i=0;i<o.width;i++)S[S.length-1].push({A:1,B:0}),Y[S.length-1].push({A:1,B:0})}const t=5,n=5,e=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let a=r-n;a<r+n;a++)for(let i=e-t;i<e+t;i++)S[a][i].B=1;return S},Xt=o=>{const t={width:o.width/S[0].length,height:o.height/S.length};for(let n=0;n<S.length;n++)for(let e=0;e<S[0].length;e++){const{A:r,B:a}=S[n][e];o.fill(r*255,a*255,0),o.rect(e*t.width,n*t.height,t.width,t.height)}},Gt=1,Yt=.5,dt=.055,qt=.062,Zt=()=>{for(let t=0;t<S.length;t++)for(let n=0;n<S[0].length;n++){const{A:e,B:r}=S[t][n],a=ht(S,{x:n,y:t},"A"),i=ht(S,{x:n,y:t},"B"),l=e+(Gt*a-e*r*r+dt*(1-e)),s=r+(Yt*i+e*r*r-(qt+dt)*r);Y[t][n]={A:l,B:s}}const o=S;return S=Y,Y=o,S},ht=(o,t,n)=>{const e=Qt(o,t);let r=0;for(const a of e){const{coord:i,weight:l}=a;r+=o[i.y][i.x][n]*l}return r},Qt=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,a=o.length,i={coord:{x:n>0?n-1:r-1,y:e>0?e-1:a-1},weight:.05},l={coord:{x:n,y:e>0?e-1:a-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:a-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:e},weight:.2},u={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},v={coord:{x:n>0?n-1:r-1,y:e<a-1?e+1:0},weight:.05},d={coord:{x:n,y:e<a-1?e+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:e<a-1?e+1:0},weight:.05};return[i,l,s,m,u,f,v,d,p]};function jt(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:A,i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Jt(o){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),Ut(t)},r.draw=()=>{for(let a=0;a<5;a++)Zt();Xt(n)}}]}let te=class extends T{constructor(t){super(),F(this,t,Jt,jt,V,{})}},_,q;const ee=o=>{_=[],q=[];for(let a=0;a<o.height;a++){_.push([]),q.push([]);for(let i=0;i<o.width;i++)_[_.length-1].push({A:1,B:0}),q[_.length-1].push({A:1,B:0})}const t=5,n=5,e=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let a=r-n;a<r+n;a++)for(let i=e-t;i<e+t;i++)_[a][i].B=1;return _},ne=o=>{const t={width:o.width/_[0].length,height:o.height/_.length};for(let n=0;n<_.length;n++)for(let e=0;e<_[0].length;e++){const{A:r,B:a}=_[n][e];o.fill(r*255,a*255,0),o.rect(e*t.width,n*t.height,t.width,t.height)}},oe=1,re=.5,vt=.055,ae=.062,ie=()=>{for(let t=0;t<_.length;t++)for(let n=0;n<_[0].length;n++){const{A:e,B:r}=_[t][n],a=gt(_,{x:n,y:t},"A"),i=gt(_,{x:n,y:t},"B"),l=e+(oe*a-e*r*r+vt*(1-e)),s=r+(re*i+e*r*r-(ae+vt)*r);q[t][n]={A:l,B:s}}const o=_;return _=q,q=o,_},gt=(o,t,n)=>{const e=se(o,t);let r=0;for(const a of e){const{coord:i,weight:l}=a;r+=o[i.y][i.x][n]*l}return r},se=(o,t)=>{const{x:n,y:e}=t,r=o[0].length,a=o.length,i={coord:{x:n>0?n-1:r-1,y:e>0?e-1:a-1},weight:.05},l={coord:{x:n,y:e>0?e-1:a-1},weight:.2},s={coord:{x:n<r-1?n+1:0,y:e>0?e-1:a-1},weight:.05},m={coord:{x:n>0?n-1:r-1,y:e},weight:.2},u={coord:{x:n,y:e},weight:-1},f={coord:{x:n<r-1?n+1:0,y:e},weight:.2},v={coord:{x:n>0?n-1:r-1,y:e<a-1?e+1:0},weight:.05},d={coord:{x:n,y:e<a-1?e+1:0},weight:.2},p={coord:{x:n<r-1?n+1:0,y:e<a-1?e+1:0},weight:.05};return[i,l,s,m,u,f,v,d,p]};function le(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:A,i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function ce(o){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),ee(t)},r.draw=()=>{for(let a=0;a<5;a++)ie();ne(n)}}]}let fe=class extends T{constructor(t){super(),F(this,t,ce,le,V,{})}};function ue(o){let t;return{c(){t=L("canvas"),this.h()},l(n){t=I(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(w),this.h()},h(){$(t,"id","canvas"),$(t,"width",o[0].width),$(t,"height",o[0].height),$(t,"class","svelte-1b0ol19")},m(n,e){D(n,t,e)},p:A,i:A,o:A,d(n){n&&w(t)}}}function me(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,e=n*.05,r=Array(n*n).fill(0).map((a,i)=>{const l=Math.floor(i/n),s=i%n;return Math.hypot(n/2-s,n/2-l)<e?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return tt(()=>{const a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=it({extensions:["OES_texture_float"],canvas:a}),l=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),s=i({frag:`
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
}`,framebuffer:u=>l[(u.tick+1)%2]}),m=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:u})=>l[u%2]},depth:{enable:!1},count:3});i.frame(()=>{m(()=>{i.draw(),s()})})}),[t]}let pe=class extends T{constructor(t){super(),F(this,t,me,ue,V,{})}};const de=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),l=a%o;return Math.hypot(o/2-l,o/2-i)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},he=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ve=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),a=e%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function ge(o){let t;return{c(){t=L("canvas"),this.h()},l(n){t=I(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(w),this.h()},h(){$(t,"id","canvas"),$(t,"width",o[0].width),$(t,"height",o[0].height),$(t,"class","svelte-1b0ol19")},m(n,e){D(n,t,e)},p:A,i:A,o:A,d(n){n&&w(t)}}}function ye(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},e={iteration:0},r={f:j[n.presetParams].f,k:j[n.presetParams].k};let a,i;const l=async()=>{const u=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new u.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(r,"f").name("Feed rate").listen(),a.add(r,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const f=j.reduce((p,y,c)=>(p[y.name]=c,p),{});a.add(n,"presetParams",f).onFinishChange(()=>{r.f=j[n.presetParams].f,r.k=j[n.presetParams].k});const v={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",v).onFinishChange(n.reset);const d=a.add(e,"iteration").listen();d.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return n.pause=!n.pause,u.preventDefault();if(u.code==="KeyR")return m(),u.preventDefault()})},m=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");i&&i.destroy(),i=it({extensions:["OES_texture_float"],canvas:u}),e.iteration=0;const f=2**11;let v;n.initialConditions==="randomSpots"?v=he(f,.001):n.initialConditions==="middleCircleAndRandomSpots"?v=de(f,.005,.05):v=ve(f,.02);const d=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:f,data:v,wrap:"repeat",type:"float"}),depthStencil:!1})),p=i({frag:`
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
}`,framebuffer:c=>d[(c.tick+1)%2],uniforms:{Da:i.prop("Da"),Db:i.prop("Db"),f:i.prop("f"),k:i.prop("k")}}),y=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>d[c%2]},depth:{enable:!1},count:3});i.frame(()=>{y(()=>{i.draw(),!n.pause&&(e.iteration++,p({Da:1,Db:.5,...r}))})})};return tt(()=>{l(),s(),m()}),rt(()=>{a.destroy(),i.destroy()}),[t]}let we=class extends T{constructor(t){super(),F(this,t,ye,ge,V,{})}};const $e=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),l=a%o;return Math.hypot(o/2-l,o/2-i)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},be=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Se=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),a=e%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),J=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],_e=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,xe=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,ke=`precision mediump float;

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
`;function De(o){let t,n,e;return{c(){t=L("canvas"),this.h()},l(r){t=I(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(w),this.h()},h(){$(t,"id","canvas"),$(t,"width",o[0].width),$(t,"height",o[0].height),$(t,"class","svelte-1b0ol19")},m(r,a){D(r,t,a),n||(e=[H(t,"mousemove",o[1]),H(t,"mousedown",nt(o[2])),H(t,"mouseup",o[2]),H(t,"contextmenu",nt(Ae))],n=!0)},p:A,i:A,o:A,d(r){r&&w(t),n=!1,St(e)}}}const lt=11,Ae=o=>o;function Be(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>u(),pause:!1},e={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},a={f:J[n.presetParams].f,k:J[n.presetParams].k};let i,l;const s=async()=>{const d=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new d.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(a,"f").name("Feed rate").listen(),i.add(a,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const p=J.reduce((h,g,b)=>(h[g.name]=b,h),{});i.add(n,"presetParams",p).onFinishChange(()=>{a.f=J[n.presetParams].f,a.k=J[n.presetParams].k});const y={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",y).onFinishChange(n.reset);const c=i.add(r,"iteration").listen();c.domElement.style.pointerEvents="none",i.add(e,"penSize",1,lt,1).name("Pen size")},m=()=>{document.addEventListener("keydown",d=>{if(d.code==="Space")return n.pause=!n.pause,d.preventDefault();if(d.code==="KeyR")return u(),d.preventDefault()})},u=()=>{const d=document.getElementById("canvas");if(!d)throw new Error("Canvas container not ready");l&&l.destroy(),l=it({extensions:["OES_texture_float"],canvas:d}),r.iteration=0;const p=2**lt;let y;n.initialConditions==="randomSpots"?y=be(p,.001):n.initialConditions==="middleCircleAndRandomSpots"?y=$e(p,.005,.05):y=Se(p,.02);const c=Array(2).fill(0).map(()=>l.framebuffer({color:l.texture({radius:p,data:y,wrap:"repeat",type:"float"}),depthStencil:!1})),h=l({frag:ke,framebuffer:b=>c[(b.tick+1)%2],uniforms:{Da:l.prop("Da"),Db:l.prop("Db"),f:l.prop("f"),k:l.prop("k"),radius:p,pauseSimulation:l.prop("pauseSimulation"),mousePosition:l.prop("mousePosition"),penRadius:l.prop("penRadius"),penIsActive:l.prop("penIsActive"),eraserIsActive:l.prop("eraserIsActive")}}),g=l({frag:xe,vert:_e,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:b})=>c[b%2]},depth:{enable:!1},count:3});l.frame(()=>{g(()=>{l.draw(),n.pause||r.iteration++,h({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[e.x,e.y],penRadius:1/2**(lt-e.penSize),penIsActive:e.pressedLeft,eraserIsActive:e.pressedRight,...a})})})},f=d=>{if(!d.currentTarget)throw new Error("No target for the onmousemove event");if(!d.currentTarget.width||!d.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y}=d,{width:c,height:h}=d.currentTarget,g=p/c,b=(h-y)/h;e.x=g,e.y=b},v=d=>{if(![0,2].includes(d.button)||!["mouseup","mousedown"].includes(d.type))return;let p=d.type==="mousedown";d.button===0&&(e.pressedLeft=p),d.button===2&&(e.pressedRight=p)};return tt(()=>{s(),m(),u()}),rt(()=>{i.destroy(),l.destroy()}),[t,f,v]}let Ce=class extends T{constructor(t){super(),F(this,t,Be,De,V,{})}};const G=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"epsilon",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Pe(o){let t,n;return t=new st({props:{sketch:o[0]}}),{c(){B(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:A,i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Re(o,t,n){let{f:e}=t,{k:r}=t,{onUpdateParams:a}=t;const i=[.01,.09],l=[.01,.08],s=c=>{const{f:h,k:g}=c,b=p.map(g,l[0],l[1],0,p.width),R=p.map(h,i[0],i[1],0,p.height);return{x:b,y:R}},m=c=>{const{x:h,y:g}=c,b=p.map(g,0,p.height,i[0],i[1]),R=p.map(h,0,p.width,l[0],l[1]);return{f:b,k:R}},u=c=>{const h=c.mouseX,g=c.mouseY;if(h<0||g<0||h>c.width||g>c.height)return;const{f:b,k:R}=m({x:c.mouseX,y:c.mouseY});a({f:b,k:R})},f=c=>{c.fill("blue");for(const h of G){const{x:g,y:b}=s({f:h.f,k:h.k});c.circle(g,b,8),c.text(h.name,g-c.textWidth(h.name)/2,b-10)}},v=c=>{c.fill("red");const{x:h,y:g}=s({f:e,k:r});c.text("F",10,g>10?g-5:g+15),c.line(0,g,c.width,g),c.text("K",h<c.width-10?h+5:h-15,c.height-10),c.line(h,0,h,c.height),c.circle(h,g,10)},d=c=>{const h=`F: ${e.toFixed(4)}`,g=`K: ${r.toFixed(4)}`;c.fill("red"),c.text(h,c.width*.05,c.height/2),c.text(g,c.width*.05,c.height/2+c.textSize()+6)};let p;const y=c=>{let h;c.preload=()=>{h=c.loadImage("/pearson-space.png")},c.setup=()=>{p=c,c.createCanvas(500,500)},c.draw=()=>{c.background(255),c.tint(150,80),c.image(h,0,0,c.width,c.height),f(c),v(c),d(c),c.mouseIsPressed&&u(c)}};return rt(()=>p.remove()),o.$$set=c=>{"f"in c&&n(1,e=c.f),"k"in c&&n(2,r=c.k),"onUpdateParams"in c&&n(3,a=c.onUpdateParams)},[y,e,r,a]}class Ee extends T{constructor(t){super(),F(this,t,Re,Pe,V,{f:1,k:2,onUpdateParams:3})}}const Le=(o,t)=>o==="randomSpots"?Te(t,.001):o==="middleCircleAndRandomSpots"?Ie(t,.005,.05):o==="empty"?Me(t):Fe(t,.02),Ie=(o,t,n)=>{const e=o*n;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),l=a%o;return Math.hypot(o/2-l,o/2-i)<e?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Me=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Te=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Fe=(o,t)=>Array(o*o).fill(0).map((n,e)=>{const r=Math.floor(e/o),a=e%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),N=`precision mediump float;
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
`,Ke=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Oe=`precision mediump float;

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
`,He=`precision mediump float;

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
`,Ue=`// Colors scheme inspired by Robert Munafo described here:
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
`,K={},Xe=(o,t,n)=>{K.raw=o({frag:We,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),K.grayscale=o({frag:Ke,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),K.blackwhite=o({frag:Oe,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),K.whiteblack=o({frag:ze,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),K.timebasedblue=o({frag:Ne,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),K.lerp=o({frag:He,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}}),K.mrob=o({frag:Ue,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:n,uniforms:{iteration:o.prop("iteration"),prevState:e=>t[(e.tick+1)%2]}})},Ge=(o,t)=>{(K[o]||K.raw)({iteration:t.iteration})};let Dt;const Ye=(o,t)=>{Dt=o({frag:`
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
    }`,vert:N,attributes:{position:[[-1,-1],[-1,1],[1,-1],[1,-1],[-1,1],[1,1]]},uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),prevState:t},depth:{enable:!1},primitive:"triangles",count:6})},qe=(o,t)=>{Dt({mousePosition:[o.x,o.y],penRadius:1/2**(t-o.penSize)})};function Ze(o){let t,n,e,r,a,i;return t=new Ee({props:{f:o[0].f,k:o[0].k,onUpdateParams:o[4]}}),{c(){B(t.$$.fragment),n=Z(),e=L("canvas"),this.h()},l(l){E(t.$$.fragment,l),n=Q(l),e=I(l,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(e).forEach(w),this.h()},h(){$(e,"id","canvas"),$(e,"width",o[1].width),$(e,"height",o[1].height),$(e,"class","svelte-fc0fp8")},m(l,s){C(t,l,s),D(l,n,s),D(l,e,s),r=!0,a||(i=[H(e,"mousemove",o[2]),H(e,"mousedown",nt(o[3])),H(e,"mouseup",o[3]),H(e,"contextmenu",nt(Qe))],a=!0)},p(l,[s]){const m={};s&1&&(m.f=l[0].f),s&1&&(m.k=l[0].k),s&1&&(m.onUpdateParams=l[4]),t.$set(m)},i(l){r||(x(t.$$.fragment,l),r=!0)},o(l){k(t.$$.fragment,l),r=!1},d(l){P(t,l),l&&w(n),l&&w(e),a=!1,St(i)}}}const et=11,Qe=o=>o;function je(o,t,n){const e={width:window.innerWidth-50,height:window.innerHeight-10},r={presetParams:4,colors:"lerp",initialConditions:"randomSpots",reset:()=>v(),pause:!1},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3},i={iteration:0},l={f:G[r.presetParams].f,k:G[r.presetParams].k};let s,m;const u=async()=>{const c=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new c.GUI,s.domElement.setAttribute("style","background-color: black"),s.add(l,"f").name("Feed rate").listen(),s.add(l,"k").name("Kill rate").listen(),s.add(r,"pause").name("Pause"),s.add(r,"reset").name("Reset simulation"),s.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob"]);const h=G.reduce((R,X,U)=>(R[X.name]=U,R),{});s.add(r,"presetParams",h).onFinishChange(()=>{n(0,l.f=G[r.presetParams].f,l),n(0,l.k=G[r.presetParams].k,l)});const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};s.add(r,"initialConditions",g).onFinishChange(r.reset);const b=s.add(i,"iteration").listen();b.domElement.style.pointerEvents="none",s.add(a,"penSize",1,et).name("Pen size"),s.add(a,"penDensity",0,1).name("Pen density")},f=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return r.pause=!r.pause,c.preventDefault();if(c.code==="KeyR")return v(),c.preventDefault()})},v=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");m&&m.destroy(),m=it({extensions:["OES_texture_float"],canvas:c}),i.iteration=0;const h=2**et;let g=Le(r.initialConditions,h);const b=Array(2).fill(0).map(()=>m.framebuffer({color:m.texture({radius:h,data:g,wrap:"repeat",type:"float"}),depthStencil:!1})),R=m.framebuffer({color:m.texture({radius:h,data:g,wrap:"repeat",type:"float"}),depthStencil:!1});Xe(m,b,R),Ye(m,R);const X=m({frag:Ve,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:U=>b[(U.tick+1)%2],uniforms:{prevState:U=>b[U.tick%2],Da:m.prop("Da"),Db:m.prop("Db"),f:m.prop("f"),k:m.prop("k"),radius:h,pauseSimulation:m.prop("pauseSimulation"),mousePosition:m.prop("mousePosition"),penRadius:m.prop("penRadius"),penDensity:m.prop("penDensity"),penIsActive:m.prop("penIsActive"),eraserIsActive:m.prop("eraserIsActive")}});m.frame(()=>{r.pause||i.iteration++,X({Da:1,Db:.5,pauseSimulation:r.pause,mousePosition:[a.x,a.y],penRadius:1/2**(et-a.penSize),penDensity:a.penDensity,penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,...l}),Ge(r.colors,i),qe(a,et)})},d=c=>{if(!c.currentTarget)throw new Error("No target for the onmousemove event");if(!c.currentTarget.width||!c.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var h=c.currentTarget.getBoundingClientRect();const g=c.clientX-h.left,b=c.clientY-h.top,{width:R,height:X}=c.currentTarget,U=g/R,At=(X-b)/X;a.x=U,a.y=At},p=c=>{if(![0,2].includes(c.button)||!["mouseup","mousedown"].includes(c.type))return;let h=c.type==="mousedown";c.button===0&&(a.pressedLeft=h),c.button===2&&(a.pressedRight=h)};return tt(()=>{u(),f(),v()}),rt(()=>{s.destroy(),m.destroy()}),[l,e,d,p,({f:c,k:h})=>{n(0,l.f=c,l),n(0,l.k=h,l)}]}class Je extends T{constructor(t){super(),F(this,t,je,Ze,V,{})}}function yt(o,t,n){const e=o.slice();return e[1]=t[n],e}function wt(o,t,n){const e=o.slice();return e[1]=t[n],e}function tn(o){let t;return{c(){t=O("About")},l(n){t=z(n,"About")},m(n,e){D(n,t,e)},d(n){n&&w(t)}}}function en(o){let t=o[1].title+"",n;return{c(){n=O(t)},l(e){n=z(e,t)},m(e,r){D(e,n,r)},p:A,d(e){e&&w(n)}}}function $t(o){let t,n;return t=new kt({props:{$$slots:{default:[en]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p(e,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function nn(o){let t,n,e,r;t=new kt({props:{$$slots:{default:[tn]},$$scope:{ctx:o}}});let a=o[0],i=[];for(let s=0;s<a.length;s+=1)i[s]=$t(wt(o,a,s));const l=s=>k(i[s],1,1,()=>{i[s]=null});return{c(){B(t.$$.fragment),n=Z();for(let s=0;s<i.length;s+=1)i[s].c();e=ot()},l(s){E(t.$$.fragment,s),n=Q(s);for(let m=0;m<i.length;m+=1)i[m].l(s);e=ot()},m(s,m){C(t,s,m),D(s,n,m);for(let u=0;u<i.length;u+=1)i[u].m(s,m);D(s,e,m),r=!0},p(s,m){const u={};if(m&64&&(u.$$scope={dirty:m,ctx:s}),t.$set(u),m&1){a=s[0];let f;for(f=0;f<a.length;f+=1){const v=wt(s,a,f);i[f]?(i[f].p(v,m),x(i[f],1)):(i[f]=$t(v),i[f].c(),x(i[f],1),i[f].m(e.parentNode,e))}for(ct(),f=a.length;f<i.length;f+=1)l(f);ft()}},i(s){if(!r){x(t.$$.fragment,s);for(let m=0;m<a.length;m+=1)x(i[m]);r=!0}},o(s){k(t.$$.fragment,s),i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)k(i[m]);r=!1},d(s){P(t,s),s&&w(n),_t(i,s),s&&w(e)}}}function on(o){let t,n,e,r,a,i,l,s,m,u,f,v;return{c(){t=L("p"),n=O("Experiments with "),e=L("a"),r=O("Reaction-diffusion systems"),a=Z(),i=L("p"),l=O("The code is based on "),s=L("a"),m=O("this tutorial"),u=O(`
                but reimplemented in a glsl shader with
                `),f=L("a"),v=O("regl"),this.h()},l(d){t=I(d,"P",{});var p=M(t);n=z(p,"Experiments with "),e=I(p,"A",{href:!0,target:!0});var y=M(e);r=z(y,"Reaction-diffusion systems"),y.forEach(w),p.forEach(w),a=Q(d),i=I(d,"P",{});var c=M(i);l=z(c,"The code is based on "),s=I(c,"A",{href:!0,target:!0});var h=M(s);m=z(h,"this tutorial"),h.forEach(w),u=z(c,`
                but reimplemented in a glsl shader with
                `),f=I(c,"A",{href:!0,target:!0});var g=M(f);v=z(g,"regl"),g.forEach(w),c.forEach(w),this.h()},h(){$(e,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),$(e,"target","none"),$(s,"href","https://karlsims.com/rd.html"),$(s,"target","none"),$(f,"href","https://github.com/regl-project/regl"),$(f,"target","none")},m(d,p){D(d,t,p),W(t,n),W(t,e),W(e,r),D(d,a,p),D(d,i,p),W(i,l),W(i,s),W(s,m),W(i,u),W(i,f),W(f,v)},p:A,d(d){d&&w(t),d&&w(a),d&&w(i)}}}function rn(o){let t,n,e;var r=o[1].component;function a(i){return{}}return r&&(t=ut(r,a())),{c(){t&&B(t.$$.fragment),n=Z()},l(i){t&&E(t.$$.fragment,i),n=Q(i)},m(i,l){t&&C(t,i,l),D(i,n,l),e=!0},p(i,l){if(r!==(r=i[1].component)){if(t){ct();const s=t;k(s.$$.fragment,1,0,()=>{P(s,1)}),ft()}r?(t=ut(r,a()),B(t.$$.fragment),x(t.$$.fragment,1),C(t,n.parentNode,n)):t=null}},i(i){e||(t&&x(t.$$.fragment,i),e=!0)},o(i){t&&k(t.$$.fragment,i),e=!1},d(i){t&&P(t,i),i&&w(n)}}}function bt(o){let t,n;return t=new xt({props:{$$slots:{default:[rn]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p(e,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function an(o){let t,n,e,r,a,i;t=new Rt({props:{$$slots:{default:[nn]},$$scope:{ctx:o}}}),e=new xt({props:{$$slots:{default:[on]},$$scope:{ctx:o}}});let l=o[0],s=[];for(let u=0;u<l.length;u+=1)s[u]=bt(yt(o,l,u));const m=u=>k(s[u],1,1,()=>{s[u]=null});return{c(){B(t.$$.fragment),n=Z(),B(e.$$.fragment),r=Z();for(let u=0;u<s.length;u+=1)s[u].c();a=ot()},l(u){E(t.$$.fragment,u),n=Q(u),E(e.$$.fragment,u),r=Q(u);for(let f=0;f<s.length;f+=1)s[f].l(u);a=ot()},m(u,f){C(t,u,f),D(u,n,f),C(e,u,f),D(u,r,f);for(let v=0;v<s.length;v+=1)s[v].m(u,f);D(u,a,f),i=!0},p(u,f){const v={};f&64&&(v.$$scope={dirty:f,ctx:u}),t.$set(v);const d={};if(f&64&&(d.$$scope={dirty:f,ctx:u}),e.$set(d),f&1){l=u[0];let p;for(p=0;p<l.length;p+=1){const y=yt(u,l,p);s[p]?(s[p].p(y,f),x(s[p],1)):(s[p]=bt(y),s[p].c(),x(s[p],1),s[p].m(a.parentNode,a))}for(ct(),p=l.length;p<s.length;p+=1)m(p);ft()}},i(u){if(!i){x(t.$$.fragment,u),x(e.$$.fragment,u);for(let f=0;f<l.length;f+=1)x(s[f]);i=!0}},o(u){k(t.$$.fragment,u),k(e.$$.fragment,u),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)k(s[f]);i=!1},d(u){P(t,u),u&&w(n),P(e,u),u&&w(r),_t(s,u),u&&w(a)}}}function sn(o){let t,n,e;return n=new Pt({props:{$$slots:{default:[an]},$$scope:{ctx:o}}}),{c(){t=L("div"),B(n.$$.fragment)},l(r){t=I(r,"DIV",{});var a=M(t);E(n.$$.fragment,a),a.forEach(w)},m(r,a){D(r,t,a),C(n,t,null),e=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),n.$set(i)},i(r){e||(x(n.$$.fragment,r),e=!0)},o(r){k(n.$$.fragment,r),e=!1},d(r){r&&w(t),P(n)}}}function ln(o){return[[{title:"V7",component:Je},{title:"V6",component:Ce},{title:"V5",component:we},{title:"V4",component:pe},{title:"V3",component:fe},{title:"V2",component:te},{title:"V1",component:Ht}]]}class cn extends T{constructor(t){super(),F(this,t,ln,sn,V,{})}}function fn(o){let t,n;return t=new cn({}),{c(){B(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){C(t,e,r),n=!0},p:A,i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}class bn extends T{constructor(t){super(),F(this,t,null,fn,V,{})}}export{bn as default};
