import{S as U,i as X,s as G,k as b,l as w,m as B,h as S,n as _,b as C,X as Wt,B as I,Y as Pt,o as et,w as H,x as W,y as N,f as k,t as R,z as Y,Q as rt,K as $,Z,M as ct,q as P,a as K,r as T,c as O,U as gt,D as E,u as Ut,g as ut,d as ft,I as Xt,J as ht,L as dt,N as Gt,O as lt,P as mt,_ as Tt,e as st,v as xt}from"../../../chunks/index-2107b80f.js";import{T as qt,a as Zt,b as Mt,c as Ft}from"../../../chunks/TabPanel-dec752e3.js";import{_ as at}from"../../../chunks/preload-helper-41c905a7.js";import{R as it}from"../../../chunks/regl-89b00fbf.js";import{b as jt}from"../../../chunks/paths-b4419565.js";function Qt(e){let t,n,o;return{c(){t=b("div"),this.h()},l(r){t=w(r,"DIV",{style:!0,class:!0}),B(t).forEach(S),this.h()},h(){_(t,"style",e[0]),_(t,"class","m-0")},m(r,a){C(r,t,a),n||(o=Wt(e[1].call(null,t)),n=!0)},p(r,[a]){a&1&&_(t,"style",r[0])},i:I,o:I,d(r){r&&S(t),n=!1,o()}}}function Jt(e,t){return t.forEach(([n,o])=>e[n]=o),e}function te(e,t,n){let{target:o=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:a="display: block;"}=t,{debug:i=!1}=t,u;const l=Pt(),f={ref(){l("ref",o)},instance(){l("instance",u)}};function s(c){return n(2,o=c),{destroy(){n(2,o=void 0)}}}return et(async()=>{const c=await at(()=>import("../../../chunks/p5.min-b96f42d1.js").then(g=>g.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:v}=c,m=Object.entries(c).filter(([g,y])=>y instanceof Function&&g[0]!=="_"&&g!=="default");i&&console.log("available p5 native classes",m),u=new v(g=>(g=Jt(g,m),i&&console.log("p5 instance",g),window._p5Instance=g,r(g)),o),f.ref(),f.instance()}),e.$$set=c=>{"target"in c&&n(2,o=c.target),"sketch"in c&&n(3,r=c.sketch),"parentDivStyle"in c&&n(0,a=c.parentDivStyle),"debug"in c&&n(4,i=c.debug)},[a,s,o,r,i]}class pt extends U{constructor(t){super(),X(this,t,te,Qt,G,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const ee=e=>{const t=[];for(let i=0;i<e.height;i++){t.push([]);for(let u=0;u<e.width;u++)t[t.length-1].push({A:1,B:0})}const n=5,o=5,r=Math.floor(e.width/2),a=Math.floor(e.height/2);for(let i=a-o;i<a+o;i++)for(let u=r-n;u<r+n;u++)t[i][u].B=1;return t},ne=(e,t)=>{const n={width:e.width/t[0].length,height:e.height/t.length};for(let o=0;o<t.length;o++)for(let r=0;r<t[0].length;r++){const{A:a,B:i}=t[o][r];e.fill(a*255,i*255,0),e.rect(r*n.width,o*n.height,n.width,n.height)}},oe=1,re=.5,_t=.055,ae=.062,ie=e=>{const t=[];for(let n=0;n<e.length;n++){t.push([]);for(let o=0;o<e[0].length;o++){const{A:r,B:a}=e[n][o],i=St(e,{x:o,y:n},"A"),u=St(e,{x:o,y:n},"B"),l=r+(oe*i-r*a*a+_t*(1-r)),f=a+(re*u+r*a*a-(ae+_t)*a);t[n].push({A:l,B:f})}}return t},St=(e,t,n)=>{const o=le(e,t);let r=0;for(const a of o){const{coord:i,weight:u}=a;r+=e[i.y][i.x][n]*u}return r},le=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,a=e.length,i={coord:{x:n>0?n-1:r-1,y:o>0?o-1:a-1},weight:.05},u={coord:{x:n,y:o>0?o-1:a-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:a-1},weight:.05},f={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},c={coord:{x:n<r-1?n+1:0,y:o},weight:.2},v={coord:{x:n>0?n-1:r-1,y:o<a-1?o+1:0},weight:.05},p={coord:{x:n,y:o<a-1?o+1:0},weight:.2},m={coord:{x:n<r-1?n+1:0,y:o<a-1?o+1:0},weight:.05};return[i,u,l,f,s,c,v,p,m]};function se(e){let t,n;return t=new pt({props:{sketch:e[0]}}),{c(){H(t.$$.fragment)},l(o){W(t.$$.fragment,o)},m(o,r){N(t,o,r),n=!0},p:I,i(o){n||(k(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function ce(e){const t={width:200,height:200};let n;return[r=>{let a;r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),a=ee(t)},r.draw=()=>{r.background(0);for(let i=0;i<20;i++)a=ie(a);ne(n,a)}}]}let ue=class extends U{constructor(t){super(),X(this,t,ce,se,G,{})}},L,Q;const fe=e=>{L=[],Q=[];for(let a=0;a<e.height;a++){L.push([]),Q.push([]);for(let i=0;i<e.width;i++)L[L.length-1].push({A:1,B:0}),Q[L.length-1].push({A:1,B:0})}const t=5,n=5,o=Math.floor(e.width/2),r=Math.floor(e.height/2);for(let a=r-n;a<r+n;a++)for(let i=o-t;i<o+t;i++)L[a][i].B=1;return L},me=e=>{const t={width:e.width/L[0].length,height:e.height/L.length};for(let n=0;n<L.length;n++)for(let o=0;o<L[0].length;o++){const{A:r,B:a}=L[n][o];e.fill(r*255,a*255,0),e.rect(o*t.width,n*t.height,t.width,t.height)}},pe=1,ve=.5,yt=.055,de=.062,ge=()=>{for(let t=0;t<L.length;t++)for(let n=0;n<L[0].length;n++){const{A:o,B:r}=L[t][n],a=Et(L,{x:n,y:t},"A"),i=Et(L,{x:n,y:t},"B"),u=o+(pe*a-o*r*r+yt*(1-o)),l=r+(ve*i+o*r*r-(de+yt)*r);Q[t][n]={A:u,B:l}}const e=L;return L=Q,Q=e,L},Et=(e,t,n)=>{const o=he(e,t);let r=0;for(const a of o){const{coord:i,weight:u}=a;r+=e[i.y][i.x][n]*u}return r},he=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,a=e.length,i={coord:{x:n>0?n-1:r-1,y:o>0?o-1:a-1},weight:.05},u={coord:{x:n,y:o>0?o-1:a-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:a-1},weight:.05},f={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},c={coord:{x:n<r-1?n+1:0,y:o},weight:.2},v={coord:{x:n>0?n-1:r-1,y:o<a-1?o+1:0},weight:.05},p={coord:{x:n,y:o<a-1?o+1:0},weight:.2},m={coord:{x:n<r-1?n+1:0,y:o<a-1?o+1:0},weight:.05};return[i,u,l,f,s,c,v,p,m]};function xe(e){let t,n;return t=new pt({props:{sketch:e[0]}}),{c(){H(t.$$.fragment)},l(o){W(t.$$.fragment,o)},m(o,r){N(t,o,r),n=!0},p:I,i(o){n||(k(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function _e(e){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),fe(t)},r.draw=()=>{for(let a=0;a<5;a++)ge();me(n)}}]}let Se=class extends U{constructor(t){super(),X(this,t,_e,xe,G,{})}},z,J;const ye=e=>{z=[],J=[];for(let a=0;a<e.height;a++){z.push([]),J.push([]);for(let i=0;i<e.width;i++)z[z.length-1].push({A:1,B:0}),J[z.length-1].push({A:1,B:0})}const t=5,n=5,o=Math.floor(e.width/2),r=Math.floor(e.height/2);for(let a=r-n;a<r+n;a++)for(let i=o-t;i<o+t;i++)z[a][i].B=1;return z},Ee=e=>{const t={width:e.width/z[0].length,height:e.height/z.length};for(let n=0;n<z.length;n++)for(let o=0;o<z[0].length;o++){const{A:r,B:a}=z[n][o];e.fill(r*255,a*255,0),e.rect(o*t.width,n*t.height,t.width,t.height)}},be=1,we=.5,bt=.055,Ae=.062,De=()=>{for(let t=0;t<z.length;t++)for(let n=0;n<z[0].length;n++){const{A:o,B:r}=z[t][n],a=wt(z,{x:n,y:t},"A"),i=wt(z,{x:n,y:t},"B"),u=o+(be*a-o*r*r+bt*(1-o)),l=r+(we*i+o*r*r-(Ae+bt)*r);J[t][n]={A:u,B:l}}const e=z;return z=J,J=e,z},wt=(e,t,n)=>{const o=$e(e,t);let r=0;for(const a of o){const{coord:i,weight:u}=a;r+=e[i.y][i.x][n]*u}return r},$e=(e,t)=>{const{x:n,y:o}=t,r=e[0].length,a=e.length,i={coord:{x:n>0?n-1:r-1,y:o>0?o-1:a-1},weight:.05},u={coord:{x:n,y:o>0?o-1:a-1},weight:.2},l={coord:{x:n<r-1?n+1:0,y:o>0?o-1:a-1},weight:.05},f={coord:{x:n>0?n-1:r-1,y:o},weight:.2},s={coord:{x:n,y:o},weight:-1},c={coord:{x:n<r-1?n+1:0,y:o},weight:.2},v={coord:{x:n>0?n-1:r-1,y:o<a-1?o+1:0},weight:.05},p={coord:{x:n,y:o<a-1?o+1:0},weight:.2},m={coord:{x:n<r-1?n+1:0,y:o<a-1?o+1:0},weight:.05};return[i,u,l,f,s,c,v,p,m]};function Be(e){let t,n;return t=new pt({props:{sketch:e[0]}}),{c(){H(t.$$.fragment)},l(o){W(t.$$.fragment,o)},m(o,r){N(t,o,r),n=!0},p:I,i(o){n||(k(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function ke(e){const t={width:200,height:200};let n;return[r=>{r.setup=()=>{n=r,r.createCanvas(500,500),r.noStroke(),ye(t)},r.draw=()=>{for(let a=0;a<5;a++)De();Ee(n)}}]}let Ce=class extends U{constructor(t){super(),X(this,t,ke,Be,G,{})}};function Le(e){let t;return{c(){t=b("canvas"),this.h()},l(n){t=w(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),B(t).forEach(S),this.h()},h(){_(t,"id","canvas"),_(t,"width",e[0].width),_(t,"height",e[0].height),_(t,"class","svelte-1b0ol19")},m(n,o){C(n,t,o)},p:I,i:I,o:I,d(n){n&&S(t)}}}function ze(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,o=n*.05,r=Array(n*n).fill(0).map((a,i)=>{const u=Math.floor(i/n),l=i%n;return Math.hypot(n/2-l,n/2-u)<o?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return et(()=>{const a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=it({extensions:["OES_texture_float"],canvas:a}),u=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:n,data:r,wrap:"repeat",type:"float"}),depthStencil:!1})),l=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:s})=>u[s%2]},depth:{enable:!1},count:3});i.frame(()=>{f(()=>{i.draw(),l()})})}),[t]}let Re=class extends U{constructor(t){super(),X(this,t,ze,Le,G,{})}};const Ie=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Pe=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),Te=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),nt=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Me(e){let t;return{c(){t=b("canvas"),this.h()},l(n){t=w(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),B(t).forEach(S),this.h()},h(){_(t,"id","canvas"),_(t,"width",e[0].width),_(t,"height",e[0].height),_(t,"class","svelte-1b0ol19")},m(n,o){C(n,t,o)},p:I,i:I,o:I,d(n){n&&S(t)}}}function Fe(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>f(),pause:!1},o={iteration:0},r={f:nt[n.presetParams].f,k:nt[n.presetParams].k};let a,i;const u=async()=>{const s=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new s.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(r,"f").name("Feed rate").listen(),a.add(r,"k").name("Kill rate").listen(),a.add(n,"pause").name("Pause"),a.add(n,"reset").name("Reset simulation");const c=nt.reduce((m,g,y)=>(m[g.name]=y,m),{});a.add(n,"presetParams",c).onFinishChange(()=>{r.f=nt[n.presetParams].f,r.k=nt[n.presetParams].k});const v={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(n,"initialConditions",v).onFinishChange(n.reset);const p=a.add(o,"iteration").listen();p.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",s=>{if(s.code==="Space")return n.pause=!n.pause,s.preventDefault();if(s.code==="KeyR")return f(),s.preventDefault()})},f=()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");i&&i.destroy(),i=it({extensions:["OES_texture_float"],canvas:s}),o.iteration=0;const c=2**11;let v;n.initialConditions==="randomSpots"?v=Pe(c,.001):n.initialConditions==="middleCircleAndRandomSpots"?v=Ie(c,.005,.05):v=Te(c,.02);const p=Array(2).fill(0).map(()=>i.framebuffer({color:i.texture({radius:c,data:v,wrap:"repeat",type:"float"}),depthStencil:!1})),m=i({frag:`
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
}`,framebuffer:y=>p[(y.tick+1)%2],uniforms:{Da:i.prop("Da"),Db:i.prop("Db"),f:i.prop("f"),k:i.prop("k")}}),g=i({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:y})=>p[y%2]},depth:{enable:!1},count:3});i.frame(()=>{g(()=>{i.draw(),!n.pause&&(o.iteration++,m({Da:1,Db:.5,...r}))})})};return et(()=>{u(),l(),f()}),rt(()=>{a.destroy(),i.destroy()}),[t]}let Ve=class extends U{constructor(t){super(),X(this,t,Fe,Me,G,{})}};const Ke=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},Oe=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),He=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),ot=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],Ne=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ye=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,We=`precision mediump float;

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
`;function Ue(e){let t,n,o;return{c(){t=b("canvas"),this.h()},l(r){t=w(r,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),B(t).forEach(S),this.h()},h(){_(t,"id","canvas"),_(t,"width",e[0].width),_(t,"height",e[0].height),_(t,"class","svelte-1b0ol19")},m(r,a){C(r,t,a),n||(o=[$(t,"mousemove",e[1]),$(t,"mousedown",Z(e[2])),$(t,"mouseup",e[2]),$(t,"contextmenu",Z(Xe))],n=!0)},p:I,i:I,o:I,d(r){r&&S(t),n=!1,ct(o)}}}const vt=11,Xe=e=>e;function Ge(e){const t={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>s(),pause:!1},o={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},r={iteration:0},a={f:ot[n.presetParams].f,k:ot[n.presetParams].k};let i,u;const l=async()=>{const p=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new p.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(a,"f").name("Feed rate").listen(),i.add(a,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const m=ot.reduce((x,h,A)=>(x[h.name]=A,x),{});i.add(n,"presetParams",m).onFinishChange(()=>{a.f=ot[n.presetParams].f,a.k=ot[n.presetParams].k});const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",g).onFinishChange(n.reset);const y=i.add(r,"iteration").listen();y.domElement.style.pointerEvents="none",i.add(o,"penSize",1,vt,1).name("Pen size")},f=()=>{document.addEventListener("keydown",p=>{if(p.code==="Space")return n.pause=!n.pause,p.preventDefault();if(p.code==="KeyR")return s(),p.preventDefault()})},s=()=>{const p=document.getElementById("canvas");if(!p)throw new Error("Canvas container not ready");u&&u.destroy(),u=it({extensions:["OES_texture_float"],canvas:p}),r.iteration=0;const m=2**vt;let g;n.initialConditions==="randomSpots"?g=Oe(m,.001):n.initialConditions==="middleCircleAndRandomSpots"?g=Ke(m,.005,.05):g=He(m,.02);const y=Array(2).fill(0).map(()=>u.framebuffer({color:u.texture({radius:m,data:g,wrap:"repeat",type:"float"}),depthStencil:!1})),x=u({frag:We,framebuffer:A=>y[(A.tick+1)%2],uniforms:{Da:u.prop("Da"),Db:u.prop("Db"),f:u.prop("f"),k:u.prop("k"),radius:m,pauseSimulation:u.prop("pauseSimulation"),mousePosition:u.prop("mousePosition"),penRadius:u.prop("penRadius"),penIsActive:u.prop("penIsActive"),eraserIsActive:u.prop("eraserIsActive")}}),h=u({frag:Ye,vert:Ne,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:A})=>y[A%2]},depth:{enable:!1},count:3});u.frame(()=>{h(()=>{u.draw(),n.pause||r.iteration++,x({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[o.x,o.y],penRadius:1/2**(vt-o.penSize),penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...a})})})},c=p=>{if(!p.currentTarget)throw new Error("No target for the onmousemove event");if(!p.currentTarget.width||!p.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:m,y:g}=p,{width:y,height:x}=p.currentTarget,h=m/y,A=(x-g)/x;o.x=h,o.y=A},v=p=>{if(![0,2].includes(p.button)||!["mouseup","mousedown"].includes(p.type))return;let m=p.type==="mousedown";p.button===0&&(o.pressedLeft=m),p.button===2&&(o.pressedRight=m)};return et(()=>{l(),f(),s()}),rt(()=>{i.destroy(),u.destroy()}),[t,c,v]}let qe=class extends U{constructor(t){super(),X(this,t,Ge,Ue,G,{})}};const tt=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Test 1",type:"Unknown",f:.0353,k:.0614},{name:"Never full population",type:"Unknown",f:.0201,k:.0602},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function At(e,t,n){const o=e.slice();return o[17]=t[n],o}function Dt(e){let t,n,o,r,a,i,u=tt,l=[];for(let f=0;f<u.length;f+=1)l[f]=$t(At(e,u,f));return o=new pt({props:{sketch:e[4]}}),{c(){t=b("select");for(let f=0;f<l.length;f+=1)l[f].c();n=K(),H(o.$$.fragment),this.h()},l(f){t=w(f,"SELECT",{class:!0});var s=B(t);for(let c=0;c<l.length;c+=1)l[c].l(s);s.forEach(S),n=O(f),W(o.$$.fragment,f),this.h()},h(){_(t,"class","full-width svelte-1qznlxf"),e[0]===void 0&&Xt(()=>e[6].call(t))},m(f,s){C(f,t,s);for(let c=0;c<l.length;c+=1)l[c].m(t,null);ht(t,e[0]),C(f,n,s),N(o,f,s),r=!0,a||(i=[$(t,"change",e[6]),$(t,"change",e[7])],a=!0)},p(f,s){if(s&0){u=tt;let c;for(c=0;c<u.length;c+=1){const v=At(f,u,c);l[c]?l[c].p(v,s):(l[c]=$t(v),l[c].c(),l[c].m(t,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=u.length}s&1&&ht(t,f[0])},i(f){r||(k(o.$$.fragment,f),r=!0)},o(f){R(o.$$.fragment,f),r=!1},d(f){f&&S(t),dt(l,f),f&&S(n),Y(o,f),a=!1,ct(i)}}}function $t(e){let t,n=e[17].type+"",o,r,a=e[17].name+"",i,u,l=e[17].f+"",f,s,c=e[17].k+"",v,p;return{c(){t=b("option"),o=P(n),r=P(" - "),i=P(a),u=P(" (f/k "),f=P(l),s=P(" / "),v=P(c),p=P(`)
                `),this.h()},l(m){t=w(m,"OPTION",{});var g=B(t);o=T(g,n),r=T(g," - "),i=T(g,a),u=T(g," (f/k "),f=T(g,l),s=T(g," / "),v=T(g,c),p=T(g,`)
                `),g.forEach(S),this.h()},h(){t.__value=e[17],t.value=t.__value},m(m,g){C(m,t,g),E(t,o),E(t,r),E(t,i),E(t,u),E(t,f),E(t,s),E(t,v),E(t,p)},p:I,d(m){m&&S(t)}}}function Ze(e){let t,n,o=e[1]?"Close":"F/K selection",r,a,i,u,l,f=e[1]&&Dt(e);return{c(){t=b("div"),n=b("button"),r=P(o),a=K(),f&&f.c(),this.h()},l(s){t=w(s,"DIV",{id:!0,class:!0});var c=B(t);n=w(c,"BUTTON",{class:!0,id:!0});var v=B(n);r=T(v,o),v.forEach(S),a=O(c),f&&f.l(c),c.forEach(S),this.h()},h(){_(n,"class","full-width svelte-1qznlxf"),_(n,"id","toggleButton"),_(t,"id","container"),_(t,"class","svelte-1qznlxf"),gt(t,"no-cursor",e[2])},m(s,c){C(s,t,c),E(t,n),E(n,r),E(t,a),f&&f.m(t,null),i=!0,u||(l=$(n,"click",e[5]),u=!0)},p(s,[c]){(!i||c&2)&&o!==(o=s[1]?"Close":"F/K selection")&&Ut(r,o),s[1]?f?(f.p(s,c),c&2&&k(f,1)):(f=Dt(s),f.c(),k(f,1),f.m(t,null)):f&&(ut(),R(f,1,1,()=>{f=null}),ft()),(!i||c&4)&&gt(t,"no-cursor",s[2])},i(s){i||(k(f),i=!0)},o(s){R(f),i=!1},d(s){s&&S(t),f&&f.d(),u=!1,l()}}}function je(e,t,n){const o=Pt();let r=tt[0],a=!0;const i=[0,.12],u=[.03,.07],l=d=>{const{f:D,k:M}=d,q=m.map(M,u[0],u[1],0,m.width),j=m.map(D,i[0],i[1],m.height,0);return{x:q,y:j}},f=d=>{const{x:D,y:M}=d,q=m.map(M,m.height,0,i[0],i[1]),j=m.map(D,0,m.width,u[0],u[1]);return{f:q,k:j}},s=d=>{const D=d.mouseX,M=d.mouseY;if(D<0||M<0||D>d.width||M>d.height)return;const{f:q,k:j}=f({x:d.mouseX,y:d.mouseY});n(0,r={f:q,k:j,name:"custom",type:"manual"}),o("fkupdated",r)},c=d=>{d.fill(96,91,239);for(const D of tt){const{x:M,y:q}=l({f:D.f,k:D.k});d.circle(M,q,8),d.text(D.name,M-d.textWidth(D.name)/2,q-10)}},v=d=>{d.noFill(),d.stroke("red");const{x:D,y:M}=l(r);d.text("F",10,M>10?M-5:M+15),d.line(0,M,d.width,M),d.text("K",D<d.width-10?D+5:D-15,d.height-10),d.line(D,0,D,d.height),d.circle(D,M,10)},p=d=>{const{f:D,k:M}=r,q=`F: ${D.toFixed(4)}`,j=`K: ${M.toFixed(4)}`,Nt=d.textSize(),Yt=d.height*.05;d.textStyle(d.BOLD),d.textSize(Yt),d.fill("white"),d.stroke(0),d.strokeWeight(1),d.text(q,d.width*.05,d.textSize()),d.text(j,d.width*.05,d.textSize()+d.textSize()+6),d.textStyle(d.NORMAL),d.textSize(Nt)};let m,g=!1;const y=d=>{m=d;let D;d.preload=()=>{D=d.loadImage(jt+"/parameters_map.png")},d.setup=()=>{d.createCanvas(400,400),d.frameRate(55)},d.draw=()=>{d.background(255),d.tint(150,190),d.image(D,0,0,d.width,d.height),c(d),v(d),p(d),n(2,g=!1),d.mouseIsPressed&&(s(d),n(2,g=!0))}},x=()=>{n(1,a=!a),a||m.remove()};rt(()=>m?.remove());function h(){r=Gt(this),n(0,r)}return[r,a,g,o,y,x,h,()=>o("fkupdated",r)]}class Qe extends U{constructor(t){super(),X(this,t,je,Ze,G,{})}}const Je=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,tn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,en=`precision mediump float;

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
`,nn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,on=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,rn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,an=`precision mediump float;

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
`,ln=`// Colors scheme inspired by Robert Munafo described here:
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
`,sn=`// Colors scheme inspired by Robert Munafo described here:
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
`,cn=`precision mediump float;

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
`,un=`precision mediump float;

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
`,fn=`precision mediump float;

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
`,mn=`precision mediump float;

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
`,pn=`precision mediump float;

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
`,vn=`precision mediump float;

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
`,F={},dn=e=>{const t={vert:Je,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{iteration:e.prop("iteration"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}};F.raw=e({frag:tn,...t}),F.A_gradiant1=e({frag:cn,...t}),F.A_gradiant2=e({frag:un,...t}),F.A_MATLAB_cool=e({frag:fn,...t}),F.A_IDL_CB_RdBu=e({frag:mn,...t}),F.A_IDL_CB_RdYiBu=e({frag:pn,...t}),F.B_IDL_CB_RdYiBu=e({frag:vn,...t}),F.grayscale=e({frag:nn,...t}),F.blackwhite=e({frag:on,...t}),F.whiteblack=e({frag:rn,...t}),F.timebasedblue=e({frag:en,...t}),F.lerp=e({frag:an,...t}),F.mrob=e({frag:ln,...t}),F.redblue=e({frag:sn,...t})},gn=e=>{const{colorMode:t,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:a}=e;(F[t]||F.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[a.panX,a.panY],zoomLevel:a.zoomLevel})},hn=`precision mediump float;

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
`,xn=`precision mediump float;

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
`;let Vt;const _n=(e,t)=>{Vt=e({frag:hn,vert:xn,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),Da:1,Db:.5,f:e.prop("f"),k:e.prop("k"),radius:t,pauseSimulation:e.prop("pauseSimulation"),mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),penDensity:e.prop("penDensity"),penIsActive:e.prop("penIsActive"),eraserIsActive:e.prop("eraserIsActive"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},Sn=e=>{const{inputBuffer:t,outputBuffer:n,pauseSimulation:o,mouseState:r,simulationParameters:a,worldSize:i}=e;Vt({inputBuffer:t,outputBuffer:n,pauseSimulation:o,zoomLevel:r.zoomLevel,pan:[r.panX,r.panY],mousePosition:[r.x,r.y],penRadius:1/2**(i-r.penSize),penDensity:r.penDensity,penIsActive:r.pressedLeft,eraserIsActive:r.pressedRight,...a})},yn=(e,t)=>e==="randomSpots"?wn(t,.001):e==="middleCircleAndRandomSpots"?En(t,.005,.05):e==="empty"?bn(t):An(t,.02),En=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},bn=e=>Array(e*e).fill(0).map(()=>[0,0,0,1]).flat(),wn=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),An=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),Dn=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,$n=`precision highp float;

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
`;let Kt;const Bn=e=>{Kt=e({vert:Dn,frag:$n,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan")}})},kn=e=>{const{inputBuffer:t,outputBuffer:n,zoomState:o}=e;Kt({inputBuffer:t,outputBuffer:n,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY]})},Cn=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Ln=`precision mediump float;

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
`;let Ot;const zn=e=>{Ot=e({frag:Ln,vert:Cn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),zoomLevel:e.prop("zoomLevel"),pan:e.prop("pan"),prevState:e.prop("inputBuffer")}})},Rn=e=>{const{inputBuffer:t,mouseState:n,outputBuffer:o,worldSize:r}=e;Ot({inputBuffer:t,outputBuffer:o,mousePosition:[n.x,n.y],penRadius:1/2**(r-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},In=e=>{const{controls:t,info:n,mouseState:o,simulationParameters:r}=e,a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=it({extensions:["OES_texture_float"],canvas:a});n.iteration=0;const u=2**n.worldSize,l=yn(t.initialConditions,u),f=()=>i.framebuffer({color:i.texture({radius:u,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(f),c=Array(2).fill(0).map(f);return _n(i,u),dn(i),Bn(i),zn(i),i.frame(()=>{t.pause||n.iteration++;let v=s[(n.iteration+1)%2];for(let p=0;p<t.speed;p++){n.iteration++;const m=s[n.iteration%2];v=s[(n.iteration+1)%2],Sn({inputBuffer:m,outputBuffer:v,worldSize:n.worldSize,pauseSimulation:t.pause,mouseState:o,simulationParameters:r})}Pn({inputTexture:v,graphicsTextures:c,controls:t,info:n,mouseState:o})}),i},Pn=e=>{const{inputTexture:t,graphicsTextures:n,controls:o,info:r,mouseState:a}=e;let i=0;i++;const u=t,l=n[i%2];if(gn({colorMode:o.colors,inputBuffer:u,iteration:r.iteration,outputBuffer:l,zoomState:a}),o.grid){i++;const c=n[(i+1)%2],v=n[i%2];kn({inputBuffer:c,outputBuffer:v,zoomState:a})}i++;const f=n[(i+1)%2],s=null;Rn({mouseState:a,worldSize:r.worldSize,inputBuffer:f,outputBuffer:s})},Bt=e=>{if(!e.currentTarget)throw new Error("Event has no currentTarget");const t=e.currentTarget,n=t.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,{width:a,height:i}=t,u=o/a,l=(i-r)/i;return{x:u,y:l}};const{window:Tn}=Tt;function Mn(e){let t,n,o,r,a,i,u,l,f,s,c,v,p,m,g;return n=new Qe({}),n.$on("fkupdated",e[7]),{c(){t=b("main"),H(n.$$.fragment),o=K(),r=b("div"),a=K(),i=b("div"),u=b("label"),l=P("World Size:"),f=K(),s=b("input"),c=K(),v=b("canvas"),this.h()},l(y){t=w(y,"MAIN",{});var x=B(t);W(n.$$.fragment,x),o=O(x),r=w(x,"DIV",{id:!0,class:!0}),B(r).forEach(S),a=O(x),i=w(x,"DIV",{});var h=B(i);u=w(h,"LABEL",{for:!0});var A=B(u);l=T(A,"World Size:"),A.forEach(S),f=O(h),s=w(h,"INPUT",{id:!0,type:!0,step:!0}),h.forEach(S),c=O(x),v=w(x,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),B(v).forEach(S),x.forEach(S),this.h()},h(){_(r,"id","datgui-container"),_(r,"class","svelte-18zf5fr"),_(u,"for","worldSize"),_(s,"id","worldSize"),_(s,"type","number"),_(s,"step","1"),_(v,"id","canvas"),_(v,"width",e[1].width),_(v,"height",e[1].height),_(v,"class","svelte-18zf5fr")},m(y,x){C(y,t,x),N(n,t,null),E(t,o),E(t,r),E(t,a),E(t,i),E(i,u),E(u,l),E(i,f),E(i,s),lt(s,e[0].worldSize),E(t,c),E(t,v),p=!0,m||(g=[$(Tn,"keydown",e[2]),$(s,"input",e[8]),$(s,"change",e[6]),$(v,"mousemove",e[4]),$(v,"mousedown",Z(e[5])),$(v,"mouseup",e[5]),$(v,"wheel",e[3]),$(v,"keydown",Z(e[2])),$(v,"contextmenu",Z(Fn))],m=!0)},p(y,[x]){x&1&&mt(s.value)!==y[0].worldSize&&lt(s,y[0].worldSize)},i(y){p||(k(n.$$.fragment,y),p=!0)},o(y){R(n.$$.fragment,y),p=!1},d(y){y&&S(t),Y(n),m=!1,ct(g)}}}const Fn=e=>e;function Vn(e,t,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"A_IDL_CB_RdYiBu",initialConditions:"middleCircleAndRandomSpots",reset:()=>g(),pause:!1,grid:!1,speed:50},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},i={iteration:0,worldSize:9},u={f:tt[0].f,k:tt[0].k};let l,f;const s=async()=>{const h=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new h.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const A=document.getElementById("datgui-container");if(!A)throw new Error("Gui container not ready");A.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(r,"initialConditions",d).onFinishChange(r.reset).name("Initial conditions");const D=l.add(i,"iteration").listen();D.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(a,"penSize",0,i.worldSize).name("Pen size"),l.add(a,"penDensity",0,1).name("Pen density"),l.add(a,"zoomLevel",0,1).name("Zoom level").listen(),l.add(a,"panX",0,1).name("pan x").listen(),l.add(a,"panY",0,1).name("pan y").listen()},c=h=>{if(h.code==="Space"){r.pause=!r.pause,h.preventDefault();return}if(h.code==="KeyR"&&!h.getModifierState("Control")){g(),h.preventDefault();return}},v=h=>{if(!h.getModifierState("Control"))return;const A=Bt(h);a.panX=A.x,a.panY=A.y,h.deltaY>0?a.zoomLevel*=1+a.zoomLevel/2:a.zoomLevel*=1-a.zoomLevel/2,a.zoomLevel>1&&(a.zoomLevel=1),a.zoomLevel<0&&(a.zoomLevel=0),h.preventDefault()},p=h=>{const A=Bt(h);a.x=A.x,a.y=A.y},m=h=>{if(![0,2].includes(h.button)||!["mouseup","mousedown"].includes(h.type))return;let A=h.type==="mousedown";h.button===0&&(a.pressedLeft=A),h.button===2&&(a.pressedRight=A)},g=()=>{isNaN(i.worldSize)||(i.worldSize>11&&n(0,i.worldSize=11,i),i.worldSize<1&&n(0,i.worldSize=1,i),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),f?.destroy(),s(),f=In({controls:r,info:i,mouseState:a,simulationParameters:u}))},y=h=>{u.f=h.detail.f,u.k=h.detail.k};et(()=>{g()}),rt(()=>{l.destroy(),f.destroy()});function x(){i.worldSize=mt(this.value),n(0,i)}return[i,o,c,v,p,m,g,y,x]}let Kn=class extends U{constructor(t){super(),X(this,t,Vn,Mn,G,{})}};const On=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Hn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Nn=`precision mediump float;

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
`,Yn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Wn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Un=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Xn=`precision mediump float;

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
`,Gn=`// Colors scheme inspired by Robert Munafo described here:
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
`,qn=`// Colors scheme inspired by Robert Munafo described here:
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
`,Zn=`precision mediump float;

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
`,jn=`precision mediump float;

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
`,Qn=`precision mediump float;

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
`,Jn=`precision mediump float;

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
`,to=`precision mediump float;

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
`,eo=`precision mediump float;

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
`,V={},no=e=>{const t={vert:On,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{iteration:e.prop("iteration"),prevState:e.prop("inputBuffer")}};V.raw=e({frag:Hn,...t}),V.A_gradiant1=e({frag:Zn,...t}),V.A_gradiant2=e({frag:jn,...t}),V.A_MATLAB_cool=e({frag:Qn,...t}),V.A_IDL_CB_RdBu=e({frag:Jn,...t}),V.A_IDL_CB_RdYiBu=e({frag:to,...t}),V.B_IDL_CB_RdYiBu=e({frag:eo,...t}),V.grayscale=e({frag:Yn,...t}),V.blackwhite=e({frag:Wn,...t}),V.whiteblack=e({frag:Un,...t}),V.timebasedblue=e({frag:Nn,...t}),V.lerp=e({frag:Xn,...t}),V.mrob=e({frag:Gn,...t}),V.redblue=e({frag:qn,...t})},oo=e=>{const{colorMode:t,inputBuffer:n,iteration:o,outputBuffer:r,zoomState:a}=e;(V[t]||V.raw)({inputBuffer:n,iteration:o,outputBuffer:r,pan:[a.panX,a.panY],zoomLevel:a.zoomLevel})},ro=`precision mediump float;

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
`,ao=`precision mediump float;

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
`;let Ht;const io=(e,t)=>{Ht=e({frag:ro,vert:ao,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]],fk:(n,o)=>{const{maxF:r,minF:a,maxK:i,minK:u}=o.simulationParameters;return[[a,i],[a,u],[r,i],[r,i],[a,u],[r,u]]}},count:6,framebuffer:e.prop("outputBuffer"),uniforms:{prevState:e.prop("inputBuffer"),Da:1,Db:.5,radius:t,pauseSimulation:e.prop("pauseSimulation"),mousePosition:e.prop("mousePosition"),penRadius:e.prop("penRadius"),penDensity:e.prop("penDensity"),penIsActive:e.prop("penIsActive")}})},lo=e=>{const{inputBuffer:t,outputBuffer:n,simulationParameters:o,pauseSimulation:r,mouseState:a,worldSize:i}=e;Ht({inputBuffer:t,outputBuffer:n,pauseSimulation:r,zoomLevel:a.zoomLevel,pan:[a.panX,a.panY],mousePosition:[a.x,a.y],penRadius:1/2**(i-a.penSize),penDensity:a.penDensity,penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,simulationParameters:o})},so=(e,t)=>e==="randomSpots"?uo(t,.001):e==="middleCircleAndRandomSpots"?co(t,.005,.05):e==="empty"||e==="full"?kt(t):fo(t,.02),co=(e,t,n)=>{const o=e*n;return Array(e*e).fill(0).map((r,a)=>{const i=Math.floor(a/e),u=a%e;return Math.hypot(e/2-u,e/2-i)<o?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},kt=e=>Array(e*e).fill(0).map(()=>[0,0,0,1]).flat(),uo=(e,t)=>Array(e*e).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),fo=(e,t)=>Array(e*e).fill(0).map((n,o)=>{const r=Math.floor(o/e),a=o%e;return Math.hypot(e/2-a,e/2-r)<t*e?[0,1,0,1]:[1,0,0,1]}).flat(),mo=e=>{const{controls:t,info:n,mouseState:o,simulationParameters:r}=e,a=document.getElementById("canvas");if(!a)throw new Error("Canvas container not ready");const i=it({extensions:["OES_texture_float"],canvas:a});n.iteration=0;const u=2**n.worldSize,l=so(t.initialConditions,u),f=()=>i.framebuffer({color:i.texture({radius:u,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),s=Array(2).fill(0).map(f);return io(i,u),no(i),i.frame(()=>{t.pause||n.iteration++;let c=s[(n.iteration+1)%2];for(let v=0;v<t.speed;v++){n.iteration++;const p=s[n.iteration%2];c=s[(n.iteration+1)%2],lo({inputBuffer:p,outputBuffer:c,worldSize:n.worldSize,pauseSimulation:t.pause,mouseState:o,simulationParameters:r})}oo({colorMode:t.colors,inputBuffer:c,iteration:n.iteration,outputBuffer:null,zoomState:o})}),i},Ct=e=>{if(!e.currentTarget)throw new Error("Event has no currentTarget");const t=e.currentTarget,n=t.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,{width:a,height:i}=t,u=o/a,l=(i-r)/i;return{x:u,y:l}};const{window:po}=Tt;function vo(e){let t,n,o,r,a,i,u,l,f,s,c,v;return{c(){t=b("main"),n=b("div"),o=K(),r=b("div"),a=b("label"),i=P("World Size:"),u=K(),l=b("input"),f=K(),s=b("canvas"),this.h()},l(p){t=w(p,"MAIN",{});var m=B(t);n=w(m,"DIV",{id:!0,class:!0}),B(n).forEach(S),o=O(m),r=w(m,"DIV",{});var g=B(r);a=w(g,"LABEL",{for:!0});var y=B(a);i=T(y,"World Size:"),y.forEach(S),u=O(g),l=w(g,"INPUT",{id:!0,type:!0,step:!0}),g.forEach(S),f=O(m),s=w(m,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),B(s).forEach(S),m.forEach(S),this.h()},h(){_(n,"id","datgui-container"),_(n,"class","svelte-198vt5w"),_(a,"for","worldSize"),_(l,"id","worldSize"),_(l,"type","number"),_(l,"step","1"),_(s,"id","canvas"),_(s,"width",e[1].width),_(s,"height",e[1].height),_(s,"class","svelte-198vt5w")},m(p,m){C(p,t,m),E(t,n),E(t,o),E(t,r),E(r,a),E(a,i),E(r,u),E(r,l),lt(l,e[0].worldSize),E(t,f),E(t,s),c||(v=[$(po,"keydown",e[2]),$(l,"input",e[7]),$(l,"change",e[6]),$(s,"mousemove",e[4]),$(s,"mousedown",Z(e[5])),$(s,"mouseup",e[5]),$(s,"wheel",e[3]),$(s,"keydown",Z(e[2])),$(s,"contextmenu",Z(go))],c=!0)},p(p,[m]){m&1&&mt(l.value)!==p[0].worldSize&&lt(l,p[0].worldSize)},i:I,o:I,d(p){p&&S(t),c=!1,ct(v)}}}const go=e=>e;function ho(e,t,n){const o={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},r={colors:"blackwhite",initialConditions:"full",reset:()=>g(),pause:!1,grid:!1,speed:10},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:12,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},i={iteration:0,worldSize:12},u={minK:.02,maxK:.07,minF:0,maxF:.12};let l,f;const s=async()=>{const x=await at(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new x.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const h=document.getElementById("datgui-container");if(!h)throw new Error("Gui container not ready");h.appendChild(l.domElement),l.add(r,"pause").name("Pause"),l.add(r,"grid").name("Debug grid"),l.add(r,"reset").name("Reset simulation"),l.add(r,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const A={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty",Full:"full"};l.add(r,"initialConditions",A).onFinishChange(r.reset).name("Initial conditions");const d=l.add(i,"iteration").listen();d.domElement.style.pointerEvents="none",l.add(r,"speed",1,500).name("Simulation speed"),l.add(a,"penSize",0,i.worldSize).name("Pen size"),l.add(a,"penDensity",0,1).name("Pen density"),l.add(u,"minK",0,u.maxK),l.add(u,"maxK",u.minK,1),l.add(u,"minF",0,u.maxF),l.add(u,"maxF",u.minF,1)},c=x=>{if(x.code==="Space"){r.pause=!r.pause,x.preventDefault();return}if(x.code==="KeyR"&&!x.getModifierState("Control")){g(),x.preventDefault();return}},v=x=>{if(!x.getModifierState("Control"))return;const h=Ct(x);a.panX=h.x,a.panY=h.y,x.deltaY>0?a.zoomLevel*=1+a.zoomLevel/2:a.zoomLevel*=1-a.zoomLevel/2,a.zoomLevel>1&&(a.zoomLevel=1),a.zoomLevel<0&&(a.zoomLevel=0),x.preventDefault()},p=x=>{const h=Ct(x);a.x=h.x,a.y=h.y},m=x=>{if(![0,2].includes(x.button)||!["mouseup","mousedown"].includes(x.type))return;let h=x.type==="mousedown";x.button===0&&(a.pressedLeft=h),x.button===2&&(a.pressedRight=h)},g=()=>{isNaN(i.worldSize)||(i.worldSize>12&&n(0,i.worldSize=12,i),i.worldSize<1&&n(0,i.worldSize=1,i),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),f?.destroy(),s(),f=mo({controls:r,info:i,mouseState:a,simulationParameters:u}))};et(()=>{g()}),rt(()=>{l.destroy(),f.destroy()});function y(){i.worldSize=mt(this.value),n(0,i)}return[i,o,c,v,p,m,g,y]}class xo extends U{constructor(t){super(),X(this,t,ho,vo,G,{})}}function Lt(e,t,n){const o=e.slice();return o[1]=t[n],o}function zt(e,t,n){const o=e.slice();return o[1]=t[n],o}function _o(e){let t;return{c(){t=P("About")},l(n){t=T(n,"About")},m(n,o){C(n,t,o)},d(n){n&&S(t)}}}function So(e){let t=e[1].title+"",n;return{c(){n=P(t)},l(o){n=T(o,t)},m(o,r){C(o,n,r)},p:I,d(o){o&&S(n)}}}function Rt(e){let t,n;return t=new Ft({props:{$$slots:{default:[So]},$$scope:{ctx:e}}}),{c(){H(t.$$.fragment)},l(o){W(t.$$.fragment,o)},m(o,r){N(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(k(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function yo(e){let t,n,o,r;t=new Ft({props:{$$slots:{default:[_o]},$$scope:{ctx:e}}});let a=e[0],i=[];for(let l=0;l<a.length;l+=1)i[l]=Rt(zt(e,a,l));const u=l=>R(i[l],1,1,()=>{i[l]=null});return{c(){H(t.$$.fragment),n=K();for(let l=0;l<i.length;l+=1)i[l].c();o=st()},l(l){W(t.$$.fragment,l),n=O(l);for(let f=0;f<i.length;f+=1)i[f].l(l);o=st()},m(l,f){N(t,l,f),C(l,n,f);for(let s=0;s<i.length;s+=1)i[s].m(l,f);C(l,o,f),r=!0},p(l,f){const s={};if(f&64&&(s.$$scope={dirty:f,ctx:l}),t.$set(s),f&1){a=l[0];let c;for(c=0;c<a.length;c+=1){const v=zt(l,a,c);i[c]?(i[c].p(v,f),k(i[c],1)):(i[c]=Rt(v),i[c].c(),k(i[c],1),i[c].m(o.parentNode,o))}for(ut(),c=a.length;c<i.length;c+=1)u(c);ft()}},i(l){if(!r){k(t.$$.fragment,l);for(let f=0;f<a.length;f+=1)k(i[f]);r=!0}},o(l){R(t.$$.fragment,l),i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)R(i[f]);r=!1},d(l){Y(t,l),l&&S(n),dt(i,l),l&&S(o)}}}function Eo(e){let t,n,o,r,a,i,u,l,f,s,c,v;return{c(){t=b("p"),n=P("Experiments with "),o=b("a"),r=P("Reaction-diffusion systems"),a=K(),i=b("p"),u=P("The code is based on "),l=b("a"),f=P("this tutorial"),s=P(`
                but reimplemented in a glsl shader with
                `),c=b("a"),v=P("regl"),this.h()},l(p){t=w(p,"P",{});var m=B(t);n=T(m,"Experiments with "),o=w(m,"A",{href:!0,target:!0});var g=B(o);r=T(g,"Reaction-diffusion systems"),g.forEach(S),m.forEach(S),a=O(p),i=w(p,"P",{});var y=B(i);u=T(y,"The code is based on "),l=w(y,"A",{href:!0,target:!0});var x=B(l);f=T(x,"this tutorial"),x.forEach(S),s=T(y,`
                but reimplemented in a glsl shader with
                `),c=w(y,"A",{href:!0,target:!0});var h=B(c);v=T(h,"regl"),h.forEach(S),y.forEach(S),this.h()},h(){_(o,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),_(o,"target","none"),_(l,"href","https://karlsims.com/rd.html"),_(l,"target","none"),_(c,"href","https://github.com/regl-project/regl"),_(c,"target","none")},m(p,m){C(p,t,m),E(t,n),E(t,o),E(o,r),C(p,a,m),C(p,i,m),E(i,u),E(i,l),E(l,f),E(i,s),E(i,c),E(c,v)},p:I,d(p){p&&S(t),p&&S(a),p&&S(i)}}}function bo(e){let t,n,o;var r=e[1].component;function a(i){return{}}return r&&(t=xt(r,a())),{c(){t&&H(t.$$.fragment),n=K()},l(i){t&&W(t.$$.fragment,i),n=O(i)},m(i,u){t&&N(t,i,u),C(i,n,u),o=!0},p(i,u){if(r!==(r=i[1].component)){if(t){ut();const l=t;R(l.$$.fragment,1,0,()=>{Y(l,1)}),ft()}r?(t=xt(r,a()),H(t.$$.fragment),k(t.$$.fragment,1),N(t,n.parentNode,n)):t=null}},i(i){o||(t&&k(t.$$.fragment,i),o=!0)},o(i){t&&R(t.$$.fragment,i),o=!1},d(i){t&&Y(t,i),i&&S(n)}}}function It(e){let t,n;return t=new Mt({props:{$$slots:{default:[bo]},$$scope:{ctx:e}}}),{c(){H(t.$$.fragment)},l(o){W(t.$$.fragment,o)},m(o,r){N(t,o,r),n=!0},p(o,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){n||(k(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function wo(e){let t,n,o,r,a,i;t=new Zt({props:{$$slots:{default:[yo]},$$scope:{ctx:e}}}),o=new Mt({props:{$$slots:{default:[Eo]},$$scope:{ctx:e}}});let u=e[0],l=[];for(let s=0;s<u.length;s+=1)l[s]=It(Lt(e,u,s));const f=s=>R(l[s],1,1,()=>{l[s]=null});return{c(){H(t.$$.fragment),n=K(),H(o.$$.fragment),r=K();for(let s=0;s<l.length;s+=1)l[s].c();a=st()},l(s){W(t.$$.fragment,s),n=O(s),W(o.$$.fragment,s),r=O(s);for(let c=0;c<l.length;c+=1)l[c].l(s);a=st()},m(s,c){N(t,s,c),C(s,n,c),N(o,s,c),C(s,r,c);for(let v=0;v<l.length;v+=1)l[v].m(s,c);C(s,a,c),i=!0},p(s,c){const v={};c&64&&(v.$$scope={dirty:c,ctx:s}),t.$set(v);const p={};if(c&64&&(p.$$scope={dirty:c,ctx:s}),o.$set(p),c&1){u=s[0];let m;for(m=0;m<u.length;m+=1){const g=Lt(s,u,m);l[m]?(l[m].p(g,c),k(l[m],1)):(l[m]=It(g),l[m].c(),k(l[m],1),l[m].m(a.parentNode,a))}for(ut(),m=u.length;m<l.length;m+=1)f(m);ft()}},i(s){if(!i){k(t.$$.fragment,s),k(o.$$.fragment,s);for(let c=0;c<u.length;c+=1)k(l[c]);i=!0}},o(s){R(t.$$.fragment,s),R(o.$$.fragment,s),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)R(l[c]);i=!1},d(s){Y(t,s),s&&S(n),Y(o,s),s&&S(r),dt(l,s),s&&S(a)}}}function Ao(e){let t,n,o;return n=new qt({props:{$$slots:{default:[wo]},$$scope:{ctx:e}}}),{c(){t=b("div"),H(n.$$.fragment)},l(r){t=w(r,"DIV",{});var a=B(t);W(n.$$.fragment,a),a.forEach(S)},m(r,a){C(r,t,a),N(n,t,null),o=!0},p(r,[a]){const i={};a&64&&(i.$$scope={dirty:a,ctx:r}),n.$set(i)},i(r){o||(k(n.$$.fragment,r),o=!0)},o(r){R(n.$$.fragment,r),o=!1},d(r){r&&S(t),Y(n)}}}function Do(e){return[[{title:"Parameters map",component:xo},{title:"V7",component:Kn},{title:"V6",component:qe},{title:"V5",component:Ve},{title:"V4",component:Re},{title:"V3",component:Ce},{title:"V2",component:Se},{title:"V1",component:ue}]]}class $o extends U{constructor(t){super(),X(this,t,Do,Ao,G,{})}}function Bo(e){let t,n;return t=new $o({}),{c(){H(t.$$.fragment)},l(o){W(t.$$.fragment,o)},m(o,r){N(t,o,r),n=!0},p:I,i(o){n||(k(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}class Oo extends U{constructor(t){super(),X(this,t,null,Bo,G,{})}}export{Oo as default};
