import{S as F,i as V,s as W,k as C,l as P,m as M,h as b,n as S,b as D,X as Et,B,Y as Lt,o as ot,w as R,x as T,y as E,f as k,t as A,z as L,Q as it,K,Z as rt,M as kt,a as U,q as O,c as X,r as H,D as I,O as pt,P as Dt,e as at,g as ut,d as mt,L as At,v as dt}from"../../../chunks/index-8c90984f.js";import{T as It,a as Mt,b as Bt,c as Ct}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as st}from"../../../chunks/preload-helper-41c905a7.js";import{R as lt}from"../../../chunks/regl-89b00fbf.js";function Tt(o){let t,e,n;return{c(){t=C("div"),this.h()},l(r){t=P(r,"DIV",{style:!0,class:!0}),M(t).forEach(b),this.h()},h(){S(t,"style",o[0]),S(t,"class","m-0")},m(r,a){D(r,t,a),e||(n=Et(o[1].call(null,t)),e=!0)},p(r,[a]){a&1&&S(t,"style",r[0])},i:B,o:B,d(r){r&&b(t),e=!1,n()}}}function Ft(o,t){return t.forEach(([e,n])=>o[e]=n),o}function Vt(o,t,e){let{target:n=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:a="display: block;"}=t,{debug:i=!1}=t,c;const s=Lt(),d={ref(){s("ref",n)},instance(){s("instance",c)}};function l(f){return e(2,n=f),{destroy(){e(2,n=void 0)}}}return ot(async()=>{const f=await st(()=>import("../../../chunks/p5.min-b96f42d1.js").then(v=>v.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:g}=f,p=Object.entries(f).filter(([v,m])=>m instanceof Function&&v[0]!=="_"&&v!=="default");i&&console.log("available p5 native classes",p),c=new g(v=>(v=Ft(v,p),i&&console.log("p5 instance",v),window._p5Instance=v,r(v)),n),d.ref(),d.instance()}),o.$$set=f=>{"target"in f&&e(2,n=f.target),"sketch"in f&&e(3,r=f.sketch),"parentDivStyle"in f&&e(0,a=f.parentDivStyle),"debug"in f&&e(4,i=f.debug)},[a,l,n,r,i]}class ct extends F{constructor(t){super(),V(this,t,Vt,Tt,W,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const Wt=o=>{const t=[];for(let i=0;i<o.height;i++){t.push([]);for(let c=0;c<o.width;c++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,r=Math.floor(o.width/2),a=Math.floor(o.height/2);for(let i=a-n;i<a+n;i++)for(let c=r-e;c<r+e;c++)t[i][c].B=1;return t},Nt=(o,t)=>{const e={width:o.width/t[0].length,height:o.height/t.length};for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++){const{A:a,B:i}=t[n][r];o.fill(a*255,i*255,0),o.rect(r*e.width,n*e.height,e.width,e.height)}},zt=1,Kt=.5,ht=.055,Ot=.062,Ht=o=>{const t=[];for(let e=0;e<o.length;e++){t.push([]);for(let n=0;n<o[0].length;n++){const{A:r,B:a}=o[e][n],i=vt(o,{x:n,y:e},"A"),c=vt(o,{x:n,y:e},"B"),s=r+(zt*i-r*a*a+ht*(1-r)),d=a+(Kt*c+r*a*a-(Ot+ht)*a);t[e].push({A:s,B:d})}}return t},vt=(o,t,e)=>{const n=Ut(o,t);let r=0;for(const a of n){const{coord:i,weight:c}=a;r+=o[i.y][i.x][e]*c}return r},Ut=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,a=o.length,i={coord:{x:e>0?e-1:r-1,y:n>0?n-1:a-1},weight:.05},c={coord:{x:e,y:n>0?n-1:a-1},weight:.2},s={coord:{x:e<r-1?e+1:0,y:n>0?n-1:a-1},weight:.05},d={coord:{x:e>0?e-1:r-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:r-1,y:n<a-1?n+1:0},weight:.05},u={coord:{x:e,y:n<a-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<a-1?n+1:0},weight:.05};return[i,c,s,d,l,f,g,u,p]};function Xt(o){let t,e;return t=new ct({props:{sketch:o[0]}}),{c(){R(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:B,i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}function Gt(o){const t={width:200,height:200};let e;return[r=>{let a;r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),a=Wt(t)},r.draw=()=>{r.background(0);for(let i=0;i<20;i++)a=Ht(a);Nt(e,a)}}]}let Yt=class extends F{constructor(t){super(),V(this,t,Gt,Xt,W,{})}},$,J;const qt=o=>{$=[],J=[];for(let a=0;a<o.height;a++){$.push([]),J.push([]);for(let i=0;i<o.width;i++)$[$.length-1].push({A:1,B:0}),J[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let a=r-e;a<r+e;a++)for(let i=n-t;i<n+t;i++)$[a][i].B=1;return $},Zt=o=>{const t={width:o.width/$[0].length,height:o.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:r,B:a}=$[e][n];o.fill(r*255,a*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},Qt=1,jt=.5,gt=.055,Jt=.062,te=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:r}=$[t][e],a=yt($,{x:e,y:t},"A"),i=yt($,{x:e,y:t},"B"),c=n+(Qt*a-n*r*r+gt*(1-n)),s=r+(jt*i+n*r*r-(Jt+gt)*r);J[t][e]={A:c,B:s}}const o=$;return $=J,J=o,$},yt=(o,t,e)=>{const n=ee(o,t);let r=0;for(const a of n){const{coord:i,weight:c}=a;r+=o[i.y][i.x][e]*c}return r},ee=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,a=o.length,i={coord:{x:e>0?e-1:r-1,y:n>0?n-1:a-1},weight:.05},c={coord:{x:e,y:n>0?n-1:a-1},weight:.2},s={coord:{x:e<r-1?e+1:0,y:n>0?n-1:a-1},weight:.05},d={coord:{x:e>0?e-1:r-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:r-1,y:n<a-1?n+1:0},weight:.05},u={coord:{x:e,y:n<a-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<a-1?n+1:0},weight:.05};return[i,c,s,d,l,f,g,u,p]};function ne(o){let t,e;return t=new ct({props:{sketch:o[0]}}),{c(){R(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:B,i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}function oe(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),qt(t)},r.draw=()=>{for(let a=0;a<5;a++)te();Zt(e)}}]}let re=class extends F{constructor(t){super(),V(this,t,oe,ne,W,{})}},x,tt;const ae=o=>{x=[],tt=[];for(let a=0;a<o.height;a++){x.push([]),tt.push([]);for(let i=0;i<o.width;i++)x[x.length-1].push({A:1,B:0}),tt[x.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(o.width/2),r=Math.floor(o.height/2);for(let a=r-e;a<r+e;a++)for(let i=n-t;i<n+t;i++)x[a][i].B=1;return x},ie=o=>{const t={width:o.width/x[0].length,height:o.height/x.length};for(let e=0;e<x.length;e++)for(let n=0;n<x[0].length;n++){const{A:r,B:a}=x[e][n];o.fill(r*255,a*255,0),o.rect(n*t.width,e*t.height,t.width,t.height)}},se=1,le=.5,bt=.055,ce=.062,fe=()=>{for(let t=0;t<x.length;t++)for(let e=0;e<x[0].length;e++){const{A:n,B:r}=x[t][e],a=wt(x,{x:e,y:t},"A"),i=wt(x,{x:e,y:t},"B"),c=n+(se*a-n*r*r+bt*(1-n)),s=r+(le*i+n*r*r-(ce+bt)*r);tt[t][e]={A:c,B:s}}const o=x;return x=tt,tt=o,x},wt=(o,t,e)=>{const n=ue(o,t);let r=0;for(const a of n){const{coord:i,weight:c}=a;r+=o[i.y][i.x][e]*c}return r},ue=(o,t)=>{const{x:e,y:n}=t,r=o[0].length,a=o.length,i={coord:{x:e>0?e-1:r-1,y:n>0?n-1:a-1},weight:.05},c={coord:{x:e,y:n>0?n-1:a-1},weight:.2},s={coord:{x:e<r-1?e+1:0,y:n>0?n-1:a-1},weight:.05},d={coord:{x:e>0?e-1:r-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},f={coord:{x:e<r-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:r-1,y:n<a-1?n+1:0},weight:.05},u={coord:{x:e,y:n<a-1?n+1:0},weight:.2},p={coord:{x:e<r-1?e+1:0,y:n<a-1?n+1:0},weight:.05};return[i,c,s,d,l,f,g,u,p]};function me(o){let t,e;return t=new ct({props:{sketch:o[0]}}),{c(){R(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:B,i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}function pe(o){const t={width:200,height:200};let e;return[r=>{r.setup=()=>{e=r,r.createCanvas(500,500),r.noStroke(),ae(t)},r.draw=()=>{for(let a=0;a<5;a++)fe();ie(e)}}]}let de=class extends F{constructor(t){super(),V(this,t,pe,me,W,{})}};function he(o){let t;return{c(){t=C("canvas"),this.h()},l(e){t=P(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(b),this.h()},h(){S(t,"id","canvas"),S(t,"width",o[0].width),S(t,"height",o[0].height),S(t,"class","svelte-1b0ol19")},m(e,n){D(e,t,n)},p:B,i:B,o:B,d(e){e&&b(t)}}}function ve(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,r=Array(e*e).fill(0).map((a,i)=>{const c=Math.floor(i/e),s=i%e;return Math.hypot(e/2-s,e/2-c)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return ot(()=>{const a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=lt({extensions:["OES_texture_float"],canvas:a}),c=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:e,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),s=i({frag:`
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
}`,framebuffer:l=>c[(l.tick+1)%2]}),d=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:l})=>c[l%2]},depth:{enable:!1},count:3});i.frame(()=>{d(()=>{i.draw(),s()})})}),[t]}let ge=class extends F{constructor(t){super(),V(this,t,ve,he,W,{})}};const ye=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),c=a%o;return Math.hypot(o/2-c,o/2-i)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},be=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),we=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),a=n%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),et=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Se(o){let t;return{c(){t=C("canvas"),this.h()},l(e){t=P(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(b),this.h()},h(){S(t,"id","canvas"),S(t,"width",o[0].width),S(t,"height",o[0].height),S(t,"class","svelte-1b0ol19")},m(e,n){D(e,t,n)},p:B,i:B,o:B,d(e){e&&b(t)}}}function _e(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>d(),pause:!1},n={iteration:0},r={f:et[e.presetParams].f,k:et[e.presetParams].k};let a,i;const c=async()=>{const l=await st(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new l.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(r,"f").name("Feed rate").listen(),a.add(r,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const f=et.reduce((p,v,m)=>(p[v.name]=m,p),{});a.add(e,"presetParams",f).onFinishChange(()=>{r.f=et[e.presetParams].f,r.k=et[e.presetParams].k});const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",g).onFinishChange(e.reset);const u=a.add(n,"iteration").listen();u.domElement.style.pointerEvents="none"},s=()=>{document.addEventListener("keydown",l=>{if(l.code==="Space")return e.pause=!e.pause,l.preventDefault();if(l.code==="KeyR")return d(),l.preventDefault()})},d=()=>{const l=document.getElementById("canvas");if(!l)throw new Error("Canvas container not ready");i&&i.destroy(),i=lt({extensions:["OES_texture_float"],canvas:l}),n.iteration=0;const f=2**11;let g;e.initialConditions==="randomSpots"?g=be(f,.001):e.initialConditions==="middleCircleAndRandomSpots"?g=ye(f,.005,.05):g=we(f,.02);const u=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:f,data:g,wrap:"repeat",type:"float"}),depthStencil:!1})),p=i({frag:`
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
}`,framebuffer:m=>u[(m.tick+1)%2],uniforms:{Da:i.prop("Da"),Db:i.prop("Db"),f:i.prop("f"),k:i.prop("k")}}),v=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:m})=>u[m%2]},depth:{enable:!1},count:3});i.frame(()=>{v(()=>{i.draw(),!e.pause&&(n.iteration++,p({Da:1,Db:.5,...r}))})})};return ot(()=>{c(),s(),d()}),it(()=>{a.destroy(),i.destroy()}),[t]}let $e=class extends F{constructor(t){super(),V(this,t,_e,Se,W,{})}};const xe=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),c=a%o;return Math.hypot(o/2-c,o/2-i)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},ke=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),De=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),a=n%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),nt=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Ae=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Be=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,Ce=`precision mediump float;

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
`;function Pe(o){let t,e,n;return{c(){t=C("canvas"),this.h()},l(r){t=P(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(b),this.h()},h(){S(t,"id","canvas"),S(t,"width",o[0].width),S(t,"height",o[0].height),S(t,"class","svelte-1b0ol19")},m(r,a){D(r,t,a),e||(n=[K(t,"mousemove",o[1]),K(t,"mousedown",rt(o[2])),K(t,"mouseup",o[2]),K(t,"contextmenu",rt(Re))],e=!0)},p:B,i:B,o:B,d(r){r&&b(t),e=!1,kt(n)}}}const ft=11,Re=o=>o;function Ee(o){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>l(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},a={f:nt[e.presetParams].f,k:nt[e.presetParams].k};let i,c;const s=async()=>{const u=await st(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new u.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(a,"f").name("Feed rate").listen(),i.add(a,"k").name("Kill rate").listen(),i.add(e,"pause").name("Pause"),i.add(e,"reset").name("Reset simulation");const p=nt.reduce((y,w,h)=>(y[w.name]=h,y),{});i.add(e,"presetParams",p).onFinishChange(()=>{a.f=nt[e.presetParams].f,a.k=nt[e.presetParams].k});const v={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(e,"initialConditions",v).onFinishChange(e.reset);const m=i.add(r,"iteration").listen();m.domElement.style.pointerEvents="none",i.add(n,"penSize",1,ft,1).name("Pen size")},d=()=>{document.addEventListener("keydown",u=>{if(u.code==="Space")return e.pause=!e.pause,u.preventDefault();if(u.code==="KeyR")return l(),u.preventDefault()})},l=()=>{const u=document.getElementById("canvas");if(!u)throw new Error("Canvas container not ready");c&&c.destroy(),c=lt({extensions:["OES_texture_float"],canvas:u}),r.iteration=0;const p=2**ft;let v;e.initialConditions==="randomSpots"?v=ke(p,.001):e.initialConditions==="middleCircleAndRandomSpots"?v=xe(p,.005,.05):v=De(p,.02);const m=Array(2).fill(0).map(()=>c.framebuffer({color:c.texture({radius:p,data:v,wrap:"repeat",type:"float"}),depthStencil:!1})),y=c({frag:Ce,framebuffer:h=>m[(h.tick+1)%2],uniforms:{Da:c.prop("Da"),Db:c.prop("Db"),f:c.prop("f"),k:c.prop("k"),radius:p,pauseSimulation:c.prop("pauseSimulation"),mousePosition:c.prop("mousePosition"),penRadius:c.prop("penRadius"),penIsActive:c.prop("penIsActive"),eraserIsActive:c.prop("eraserIsActive")}}),w=c({frag:Be,vert:Ae,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:h})=>m[h%2]},depth:{enable:!1},count:3});c.frame(()=>{w(()=>{c.draw(),e.pause||r.iteration++,y({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(ft-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...a})})})},f=u=>{if(!u.currentTarget)throw new Error("No target for the onmousemove event");if(!u.currentTarget.width||!u.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:p,y:v}=u,{width:m,height:y}=u.currentTarget,w=p/m,h=(y-v)/y;n.x=w,n.y=h},g=u=>{if(![0,2].includes(u.button)||!["mouseup","mousedown"].includes(u.type))return;let p=u.type==="mousedown";u.button===0&&(n.pressedLeft=p),u.button===2&&(n.pressedRight=p)};return ot(()=>{s(),d(),l()}),it(()=>{i.destroy(),c.destroy()}),[t,f,g]}let Le=class extends F{constructor(t){super(),V(this,t,Ee,Pe,W,{})}};const j=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"epsilon",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Ie(o){let t,e;return t=new ct({props:{sketch:o[0]}}),{c(){R(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:B,i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}function Me(o,t,e){let{f:n}=t,{k:r}=t,{onUpdateParams:a}=t;const i=[.01,.09],c=[.01,.08],s=m=>{const{f:y,k:w}=m,h=p.map(w,c[0],c[1],0,p.width),_=p.map(y,i[0],i[1],0,p.height);return{x:h,y:_}},d=m=>{const{x:y,y:w}=m,h=p.map(w,0,p.height,i[0],i[1]),_=p.map(y,0,p.width,c[0],c[1]);return{f:h,k:_}},l=m=>{const y=m.mouseX,w=m.mouseY;if(y<0||w<0||y>m.width||w>m.height)return;const{f:h,k:_}=d({x:m.mouseX,y:m.mouseY});a({f:h,k:_})},f=m=>{m.fill("blue");for(const y of j){const{x:w,y:h}=s({f:y.f,k:y.k});m.circle(w,h,8),m.text(y.name,w-m.textWidth(y.name)/2,h-10)}},g=m=>{m.fill("red");const{x:y,y:w}=s({f:n,k:r});m.text("F",10,w>10?w-5:w+15),m.line(0,w,m.width,w),m.text("K",y<m.width-10?y+5:y-15,m.height-10),m.line(y,0,y,m.height),m.circle(y,w,10)},u=m=>{const y=`F: ${n.toFixed(4)}`,w=`K: ${r.toFixed(4)}`;m.fill("red"),m.text(y,m.width*.05,m.height/2),m.text(w,m.width*.05,m.height/2+m.textSize()+6)};let p;const v=m=>{let y;m.preload=()=>{y=m.loadImage("/pearson-space.png")},m.setup=()=>{p=m,m.createCanvas(500,500)},m.draw=()=>{m.background(255),m.tint(150,80),m.image(y,0,0,m.width,m.height),f(m),g(m),u(m),m.mouseIsPressed&&l(m)}};return it(()=>p.remove()),o.$$set=m=>{"f"in m&&e(1,n=m.f),"k"in m&&e(2,r=m.k),"onUpdateParams"in m&&e(3,a=m.onUpdateParams)},[v,n,r,a]}class Te extends F{constructor(t){super(),V(this,t,Me,Ie,W,{f:1,k:2,onUpdateParams:3})}}const Fe=(o,t)=>o==="randomSpots"?Ne(t,.001):o==="middleCircleAndRandomSpots"?Ve(t,.005,.05):o==="empty"?We(t):ze(t,.02),Ve=(o,t,e)=>{const n=o*e;return Array(o*o).fill(0).map((r,a)=>{const i=Math.floor(a/o),c=a%o;return Math.hypot(o/2-c,o/2-i)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},We=o=>Array(o*o).fill(0).map(()=>[0,0,0,1]).flat(),Ne=(o,t)=>Array(o*o).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ze=(o,t)=>Array(o*o).fill(0).map((e,n)=>{const r=Math.floor(n/o),a=n%o;return Math.hypot(o/2-a,o/2-r)<t*o?[0,1,0,1]:[1,0,0,1]}).flat(),N=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ke=`precision mediump float;

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
`,Oe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,He=`precision mediump float;

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
`,Ue=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Xe=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Ge=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Ye=`precision mediump float;

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
`,qe=`// Colors scheme inspired by Robert Munafo described here:
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
`,Ze=`// Colors scheme inspired by Robert Munafo described here:
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
`,z={},Qe=(o,t,e)=>{z.raw=o({frag:Oe,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.grayscale=o({frag:Ue,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.blackwhite=o({frag:Xe,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.whiteblack=o({frag:Ge,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.timebasedblue=o({frag:He,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.lerp=o({frag:Ye,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.mrob=o({frag:qe,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}}),z.redblue=o({frag:Ze,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e,uniforms:{iteration:o.prop("iteration"),prevState:n=>t[(n.tick+1)%2]}})},je=(o,t)=>{(z[o]||z.raw)({iteration:t.iteration})};let Pt;const Je=(o,t)=>{Pt=o({frag:`
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
    }`,vert:N,attributes:{position:[[-1,-1],[-1,1],[1,-1],[1,-1],[-1,1],[1,1]]},uniforms:{mousePosition:o.prop("mousePosition"),penRadius:o.prop("penRadius"),prevState:t},depth:{enable:!1},primitive:"triangles",count:6})},tn=(o,t)=>{Pt({mousePosition:[o.x,o.y],penRadius:1/2**(t-o.penSize)})};function en(o){let t,e,n,r,a,i,c,s,d,l,f,g;return t=new Te({props:{f:o[1].f,k:o[1].k,onUpdateParams:o[6]}}),{c(){R(t.$$.fragment),e=U(),n=C("div"),r=C("label"),a=O("World Size:"),i=U(),c=C("input"),s=U(),d=C("canvas"),this.h()},l(u){T(t.$$.fragment,u),e=X(u),n=P(u,"DIV",{});var p=M(n);r=P(p,"LABEL",{for:!0});var v=M(r);a=H(v,"World Size:"),v.forEach(b),i=X(p),c=P(p,"INPUT",{id:!0,type:!0,step:!0}),p.forEach(b),s=X(u),d=P(u,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(d).forEach(b),this.h()},h(){S(r,"for","worldSize"),S(c,"id","worldSize"),S(c,"type","number"),S(c,"step","1"),S(d,"id","canvas"),S(d,"width",o[2].width),S(d,"height",o[2].height),S(d,"class","svelte-fc0fp8")},m(u,p){E(t,u,p),D(u,e,p),D(u,n,p),I(n,r),I(r,a),I(n,i),I(n,c),pt(c,o[0]),D(u,s,p),D(u,d,p),l=!0,f||(g=[K(c,"input",o[7]),K(c,"change",o[5]),K(d,"mousemove",o[3]),K(d,"mousedown",rt(o[4])),K(d,"mouseup",o[4]),K(d,"contextmenu",rt(nn))],f=!0)},p(u,[p]){const v={};p&2&&(v.f=u[1].f),p&2&&(v.k=u[1].k),p&2&&(v.onUpdateParams=u[6]),t.$set(v),p&1&&Dt(c.value)!==u[0]&&pt(c,u[0])},i(u){l||(k(t.$$.fragment,u),l=!0)},o(u){A(t.$$.fragment,u),l=!1},d(u){L(t,u),u&&b(e),u&&b(n),u&&b(s),u&&b(d),f=!1,kt(g)}}}const nn=o=>o;function on(o,t,e){const n={width:window.innerWidth-50,height:window.innerHeight-10};let r=8;const a={presetParams:4,colors:"mrob",initialConditions:"randomSpots",reset:()=>u(),pause:!1},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3},c={iteration:0},s={f:j[a.presetParams].f,k:j[a.presetParams].k};let d,l;const f=async()=>{const h=await st(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);d=new h.GUI,d.domElement.setAttribute("style","background-color: black"),d.add(s,"f").name("Feed rate").listen(),d.add(s,"k").name("Kill rate").listen(),d.add(a,"pause").name("Pause"),d.add(a,"reset").name("Reset simulation"),d.add(a,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue"]);const _=j.reduce((Y,Q,q)=>(Y[Q.name]=q,Y),{});d.add(a,"presetParams",_).onFinishChange(()=>{e(1,s.f=j[a.presetParams].f,s),e(1,s.k=j[a.presetParams].k,s)});const Z={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};d.add(a,"initialConditions",Z).onFinishChange(a.reset);const G=d.add(c,"iteration").listen();G.domElement.style.pointerEvents="none",d.add(i,"penSize",0,r).name("Pen size"),d.add(i,"penDensity",0,1).name("Pen density")},g=()=>{document.addEventListener("keydown",h=>{if(h.code==="Space")return a.pause=!a.pause,h.preventDefault();if(h.code==="KeyR")return u(),h.preventDefault()})},u=()=>{const h=document.getElementById("canvas");if(!h)throw new Error("Canvas container not ready");l&&l.destroy(),l=lt({extensions:["OES_texture_float"],canvas:h}),c.iteration=0;const _=2**r;let Z=Fe(a.initialConditions,_);const G=Array(2).fill(0).map(()=>l.framebuffer({color:l.texture({radius:_,data:Z,wrap:"repeat",type:"float"}),depthStencil:!1})),Y=l.framebuffer({color:l.texture({radius:_,data:Z,wrap:"repeat",type:"float"}),depthStencil:!1});Qe(l,G,Y),Je(l,Y);const Q=l({frag:Ke,vert:N,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:q=>G[(q.tick+1)%2],uniforms:{prevState:q=>G[q.tick%2],Da:l.prop("Da"),Db:l.prop("Db"),f:l.prop("f"),k:l.prop("k"),radius:_,pauseSimulation:l.prop("pauseSimulation"),mousePosition:l.prop("mousePosition"),penRadius:l.prop("penRadius"),penDensity:l.prop("penDensity"),penIsActive:l.prop("penIsActive"),eraserIsActive:l.prop("eraserIsActive")}});l.frame(()=>{a.pause||c.iteration++,Q({Da:1,Db:.5,pauseSimulation:a.pause,mousePosition:[i.x,i.y],penRadius:1/2**(r-i.penSize),penDensity:i.penDensity,penIsActive:i.pressedLeft,eraserIsActive:i.pressedRight,...s}),je(a.colors,c),tn(i,r)})},p=h=>{if(!h.currentTarget)throw new Error("No target for the onmousemove event");if(!h.currentTarget.width||!h.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");var _=h.currentTarget.getBoundingClientRect();const Z=h.clientX-_.left,G=h.clientY-_.top,{width:Y,height:Q}=h.currentTarget,q=Z/Y,Rt=(Q-G)/Q;i.x=q,i.y=Rt},v=h=>{if(![0,2].includes(h.button)||!["mouseup","mousedown"].includes(h.type))return;let _=h.type==="mousedown";h.button===0&&(i.pressedLeft=_),h.button===2&&(i.pressedRight=_)},m=()=>{isNaN(r)||(r>11&&e(0,r=11),r<1&&e(0,r=1),d?.destroy(),l?.destroy(),f(),u())};ot(()=>{f(),g(),u()}),it(()=>{d.destroy(),l.destroy()});const y=({f:h,k:_})=>{e(1,s.f=h,s),e(1,s.k=_,s)};function w(){r=Dt(this.value),e(0,r)}return[r,s,n,p,v,m,y,w]}class rn extends F{constructor(t){super(),V(this,t,on,en,W,{})}}function St(o,t,e){const n=o.slice();return n[1]=t[e],n}function _t(o,t,e){const n=o.slice();return n[1]=t[e],n}function an(o){let t;return{c(){t=O("About")},l(e){t=H(e,"About")},m(e,n){D(e,t,n)},d(e){e&&b(t)}}}function sn(o){let t=o[1].title+"",e;return{c(){e=O(t)},l(n){e=H(n,t)},m(n,r){D(n,e,r)},p:B,d(n){n&&b(e)}}}function $t(o){let t,e;return t=new Ct({props:{$$slots:{default:[sn]},$$scope:{ctx:o}}}),{c(){R(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}function ln(o){let t,e,n,r;t=new Ct({props:{$$slots:{default:[an]},$$scope:{ctx:o}}});let a=o[0],i=[];for(let s=0;s<a.length;s+=1)i[s]=$t(_t(o,a,s));const c=s=>A(i[s],1,1,()=>{i[s]=null});return{c(){R(t.$$.fragment),e=U();for(let s=0;s<i.length;s+=1)i[s].c();n=at()},l(s){T(t.$$.fragment,s),e=X(s);for(let d=0;d<i.length;d+=1)i[d].l(s);n=at()},m(s,d){E(t,s,d),D(s,e,d);for(let l=0;l<i.length;l+=1)i[l].m(s,d);D(s,n,d),r=!0},p(s,d){const l={};if(d&64&&(l.$$scope={dirty:d,ctx:s}),t.$set(l),d&1){a=s[0];let f;for(f=0;f<a.length;f+=1){const g=_t(s,a,f);i[f]?(i[f].p(g,d),k(i[f],1)):(i[f]=$t(g),i[f].c(),k(i[f],1),i[f].m(n.parentNode,n))}for(ut(),f=a.length;f<i.length;f+=1)c(f);mt()}},i(s){if(!r){k(t.$$.fragment,s);for(let d=0;d<a.length;d+=1)k(i[d]);r=!0}},o(s){A(t.$$.fragment,s),i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)A(i[d]);r=!1},d(s){L(t,s),s&&b(e),At(i,s),s&&b(n)}}}function cn(o){let t,e,n,r,a,i,c,s,d,l,f,g;return{c(){t=C("p"),e=O("Experiments with "),n=C("a"),r=O("Reaction-diffusion systems"),a=U(),i=C("p"),c=O("The code is based on "),s=C("a"),d=O("this tutorial"),l=O(`
                but reimplemented in a glsl shader with
                `),f=C("a"),g=O("regl"),this.h()},l(u){t=P(u,"P",{});var p=M(t);e=H(p,"Experiments with "),n=P(p,"A",{href:!0,target:!0});var v=M(n);r=H(v,"Reaction-diffusion systems"),v.forEach(b),p.forEach(b),a=X(u),i=P(u,"P",{});var m=M(i);c=H(m,"The code is based on "),s=P(m,"A",{href:!0,target:!0});var y=M(s);d=H(y,"this tutorial"),y.forEach(b),l=H(m,`
                but reimplemented in a glsl shader with
                `),f=P(m,"A",{href:!0,target:!0});var w=M(f);g=H(w,"regl"),w.forEach(b),m.forEach(b),this.h()},h(){S(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),S(n,"target","none"),S(s,"href","https://karlsims.com/rd.html"),S(s,"target","none"),S(f,"href","https://github.com/regl-project/regl"),S(f,"target","none")},m(u,p){D(u,t,p),I(t,e),I(t,n),I(n,r),D(u,a,p),D(u,i,p),I(i,c),I(i,s),I(s,d),I(i,l),I(i,f),I(f,g)},p:B,d(u){u&&b(t),u&&b(a),u&&b(i)}}}function fn(o){let t,e,n;var r=o[1].component;function a(i){return{}}return r&&(t=dt(r,a())),{c(){t&&R(t.$$.fragment),e=U()},l(i){t&&T(t.$$.fragment,i),e=X(i)},m(i,c){t&&E(t,i,c),D(i,e,c),n=!0},p(i,c){if(r!==(r=i[1].component)){if(t){ut();const s=t;A(s.$$.fragment,1,0,()=>{L(s,1)}),mt()}r?(t=dt(r,a()),R(t.$$.fragment),k(t.$$.fragment,1),E(t,e.parentNode,e)):t=null}},i(i){n||(t&&k(t.$$.fragment,i),n=!0)},o(i){t&&A(t.$$.fragment,i),n=!1},d(i){t&&L(t,i),i&&b(e)}}}function xt(o){let t,e;return t=new Bt({props:{$$slots:{default:[fn]},$$scope:{ctx:o}}}),{c(){R(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}function un(o){let t,e,n,r,a,i;t=new Mt({props:{$$slots:{default:[ln]},$$scope:{ctx:o}}}),n=new Bt({props:{$$slots:{default:[cn]},$$scope:{ctx:o}}});let c=o[0],s=[];for(let l=0;l<c.length;l+=1)s[l]=xt(St(o,c,l));const d=l=>A(s[l],1,1,()=>{s[l]=null});return{c(){R(t.$$.fragment),e=U(),R(n.$$.fragment),r=U();for(let l=0;l<s.length;l+=1)s[l].c();a=at()},l(l){T(t.$$.fragment,l),e=X(l),T(n.$$.fragment,l),r=X(l);for(let f=0;f<s.length;f+=1)s[f].l(l);a=at()},m(l,f){E(t,l,f),D(l,e,f),E(n,l,f),D(l,r,f);for(let g=0;g<s.length;g+=1)s[g].m(l,f);D(l,a,f),i=!0},p(l,f){const g={};f&64&&(g.$$scope={dirty:f,ctx:l}),t.$set(g);const u={};if(f&64&&(u.$$scope={dirty:f,ctx:l}),n.$set(u),f&1){c=l[0];let p;for(p=0;p<c.length;p+=1){const v=St(l,c,p);s[p]?(s[p].p(v,f),k(s[p],1)):(s[p]=xt(v),s[p].c(),k(s[p],1),s[p].m(a.parentNode,a))}for(ut(),p=c.length;p<s.length;p+=1)d(p);mt()}},i(l){if(!i){k(t.$$.fragment,l),k(n.$$.fragment,l);for(let f=0;f<c.length;f+=1)k(s[f]);i=!0}},o(l){A(t.$$.fragment,l),A(n.$$.fragment,l),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)A(s[f]);i=!1},d(l){L(t,l),l&&b(e),L(n,l),l&&b(r),At(s,l),l&&b(a)}}}function mn(o){let t,e,n;return e=new It({props:{$$slots:{default:[un]},$$scope:{ctx:o}}}),{c(){t=C("div"),R(e.$$.fragment)},l(r){t=P(r,"DIV",{});var a=M(t);T(e.$$.fragment,a),a.forEach(b)},m(r,a){D(r,t,a),E(e,t,null),n=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),e.$set(i)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){r&&b(t),L(e)}}}function pn(o){return[[{title:"V7",component:rn},{title:"V6",component:Le},{title:"V5",component:$e},{title:"V4",component:ge},{title:"V3",component:de},{title:"V2",component:re},{title:"V1",component:Yt}]]}class dn extends F{constructor(t){super(),V(this,t,pn,mn,W,{})}}function hn(o){let t,e;return t=new dn({}),{c(){R(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,r){E(t,n,r),e=!0},p:B,i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}class Dn extends F{constructor(t){super(),V(this,t,null,hn,W,{})}}export{Dn as default};
