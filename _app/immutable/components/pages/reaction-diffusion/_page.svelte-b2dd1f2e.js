import{S as W,i as I,s as P,k as L,l as C,m as E,h as p,n as w,b as y,X as ut,B as x,Y as gt,o as G,w as D,x as k,y as S,f as _,t as b,z as A,Q as mt,a as X,e as Y,c as F,g as U,d as j,L as it,q as M,r as R,D as B,v as K}from"../../../chunks/index-2f3b6d71.js";import{T as pt,a as dt,b as lt,c as ct}from"../../../chunks/TabPanel-e2218539.js";import{_ as ft}from"../../../chunks/preload-helper-41c905a7.js";import{R as ht}from"../../../chunks/regl-89b00fbf.js";function $t(a){let t,e,n;return{c(){t=L("div"),this.h()},l(o){t=C(o,"DIV",{style:!0,class:!0}),E(t).forEach(p),this.h()},h(){w(t,"style",a[0]),w(t,"class","m-0")},m(o,s){y(o,t,s),e||(n=ut(a[1].call(null,t)),e=!0)},p(o,[s]){s&1&&w(t,"style",o[0])},i:x,o:x,d(o){o&&p(t),e=!1,n()}}}function vt(a,t){return t.forEach(([e,n])=>a[e]=n),a}function _t(a,t,e){let{target:n=void 0}=t,{sketch:o=void 0}=t,{parentDivStyle:s="display: block;"}=t,{debug:r=!1}=t,f;const i=gt(),h={ref(){i("ref",n)},instance(){i("instance",f)}};function l(c){return e(2,n=c),{destroy(){e(2,n=void 0)}}}return G(async()=>{const c=await ft(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:g}=c,u=Object.entries(c).filter(([d,N])=>N instanceof Function&&d[0]!=="_"&&d!=="default");r&&console.log("available p5 native classes",u),f=new g(d=>(d=vt(d,u),r&&console.log("p5 instance",d),window._p5Instance=d,o(d)),n),h.ref(),h.instance()}),a.$$set=c=>{"target"in c&&e(2,n=c.target),"sketch"in c&&e(3,o=c.sketch),"parentDivStyle"in c&&e(0,s=c.parentDivStyle),"debug"in c&&e(4,r=c.debug)},[s,l,n,o,r]}class Q extends W{constructor(t){super(),I(this,t,_t,$t,P,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const wt=a=>{const t=[];for(let r=0;r<a.height;r++){t.push([]);for(let f=0;f<a.width;f++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(a.width/2),s=Math.floor(a.height/2);for(let r=s-n;r<s+n;r++)for(let f=o-e;f<o+e;f++)t[r][f].B=1;return t},bt=(a,t)=>{const e={width:a.width/t[0].length,height:a.height/t.length};for(let n=0;n<t.length;n++)for(let o=0;o<t[0].length;o++){const{A:s,B:r}=t[n][o];a.fill(s*255,r*255,0),a.rect(o*e.width,n*e.height,e.width,e.height)}},yt=1,xt=.5,z=.055,Dt=.062,St=a=>{const t=[];for(let e=0;e<a.length;e++){t.push([]);for(let n=0;n<a[0].length;n++){const{A:o,B:s}=a[e][n],r=J(a,{x:n,y:e},"A"),f=J(a,{x:n,y:e},"B"),i=o+(yt*r-o*s*s+z*(1-o)),h=s+(xt*f+o*s*s-(Dt+z)*s);t[e].push({A:i,B:h})}}return t},J=(a,t,e)=>{const n=At(a,t);let o=0;for(const s of n){const{coord:r,weight:f}=s;o+=a[r.y][r.x][e]*f}return o},At=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,s=a.length,r={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},h={coord:{x:e>0?e-1:o-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},c={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},m={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[r,f,i,h,l,c,g,m,u]};function kt(a){let t,e;return t=new Q({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Bt(a){const t={width:200,height:200};let e;return[o=>{let s;o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),s=wt(t)},o.draw=()=>{o.background(0);for(let r=0;r<20;r++)s=St(s);bt(e,s)}}]}let Lt=class extends W{constructor(t){super(),I(this,t,Bt,kt,P,{})}},$,T;const Ct=a=>{$=[],T=[];for(let s=0;s<a.height;s++){$.push([]),T.push([]);for(let r=0;r<a.width;r++)$[$.length-1].push({A:1,B:0}),T[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(a.width/2),o=Math.floor(a.height/2);for(let s=o-e;s<o+e;s++)for(let r=n-t;r<n+t;r++)$[s][r].B=1;return $},Et=a=>{const t={width:a.width/$[0].length,height:a.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:o,B:s}=$[e][n];a.fill(o*255,s*255,0),a.rect(n*t.width,e*t.height,t.width,t.height)}},Mt=1,Rt=.5,Z=.055,Wt=.062,It=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:o}=$[t][e],s=tt($,{x:e,y:t},"A"),r=tt($,{x:e,y:t},"B"),f=n+(Mt*s-n*o*o+Z*(1-n)),i=o+(Rt*r+n*o*o-(Wt+Z)*o);T[t][e]={A:f,B:i}}const a=$;return $=T,T=a,$},tt=(a,t,e)=>{const n=Pt(a,t);let o=0;for(const s of n){const{coord:r,weight:f}=s;o+=a[r.y][r.x][e]*f}return o},Pt=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,s=a.length,r={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},h={coord:{x:e>0?e-1:o-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},c={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},m={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[r,f,i,h,l,c,g,m,u]};function Nt(a){let t,e;return t=new Q({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Tt(a){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Ct(t)},o.draw=()=>{for(let s=0;s<5;s++)It();Et(e)}}]}let Ot=class extends W{constructor(t){super(),I(this,t,Tt,Nt,P,{})}},v,O;const Vt=a=>{v=[],O=[];for(let s=0;s<a.height;s++){v.push([]),O.push([]);for(let r=0;r<a.width;r++)v[v.length-1].push({A:1,B:0}),O[v.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(a.width/2),o=Math.floor(a.height/2);for(let s=o-e;s<o+e;s++)for(let r=n-t;r<n+t;r++)v[s][r].B=1;return v},Xt=a=>{const t={width:a.width/v[0].length,height:a.height/v.length};for(let e=0;e<v.length;e++)for(let n=0;n<v[0].length;n++){const{A:o,B:s}=v[e][n];a.fill(o*255,s*255,0),a.rect(n*t.width,e*t.height,t.width,t.height)}},Ft=1,Yt=.5,et=.055,Gt=.062,Ut=()=>{for(let t=0;t<v.length;t++)for(let e=0;e<v[0].length;e++){const{A:n,B:o}=v[t][e],s=nt(v,{x:e,y:t},"A"),r=nt(v,{x:e,y:t},"B"),f=n+(Ft*s-n*o*o+et*(1-n)),i=o+(Yt*r+n*o*o-(Gt+et)*o);O[t][e]={A:f,B:i}}const a=v;return v=O,O=a,v},nt=(a,t,e)=>{const n=jt(a,t);let o=0;for(const s of n){const{coord:r,weight:f}=s;o+=a[r.y][r.x][e]*f}return o},jt=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,s=a.length,r={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},h={coord:{x:e>0?e-1:o-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},c={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},m={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[r,f,i,h,l,c,g,m,u]};function Qt(a){let t,e;return t=new Q({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function qt(a){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Vt(t)},o.draw=()=>{for(let s=0;s<5;s++)Ut();Xt(e)}}]}let Ht=class extends W{constructor(t){super(),I(this,t,qt,Qt,P,{})}};function Kt(a){let t;return{c(){t=L("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(t).forEach(p),this.h()},h(){w(t,"id","canvas"),w(t,"width",a[0].width),w(t,"height",a[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){y(e,t,n)},p:x,i:x,o:x,d(e){e&&p(t)}}}function zt(a){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,o=Array(e*e).fill(0).map((s,r)=>{const f=Math.floor(r/e),i=r%e;return Math.hypot(e/2-i,e/2-f)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return G(()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");const r=ht({extensions:["OES_texture_float"],canvas:s}),f=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:e,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),i=r({frag:`
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
}`,framebuffer:l=>f[(l.tick+1)%2]}),h=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:l})=>f[l%2]},depth:{enable:!1},count:3});r.frame(()=>{h(()=>{r.draw(),i()})})}),[t]}let Jt=class extends W{constructor(t){super(),I(this,t,zt,Kt,P,{})}};const Zt=(a,t,e)=>{const n=a*e;return Array(a*a).fill(0).map((o,s)=>{const r=Math.floor(s/a),f=s%a;return Math.hypot(a/2-f,a/2-r)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},te=(a,t)=>Array(a*a).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ee=(a,t)=>Array(a*a).fill(0).map((e,n)=>{const o=Math.floor(n/a),s=n%a;return Math.hypot(a/2-s,a/2-o)<t*a?[0,1,0,1]:[1,0,0,1]}).flat(),V=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523}];function ne(a){let t;return{c(){t=L("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),E(t).forEach(p),this.h()},h(){w(t,"id","canvas"),w(t,"width",a[0].width),w(t,"height",a[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){y(e,t,n)},p:x,i:x,o:x,d(e){e&&p(t)}}}function oe(a){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>i()},n={iteration:0},o={f:V[e.presetParams].f,k:V[e.presetParams].k};let s,r;const f=async()=>{const h=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new h.GUI,s.domElement.setAttribute("style","background-color: black"),s.add(o,"f").name("Feed rate").listen(),s.add(o,"k").name("Kill rate").listen(),s.add(e,"reset").name("Reset simulation");const l=V.reduce((m,u,d)=>(m[u.name]=d,m),{});s.add(e,"presetParams",l).onFinishChange(()=>{o.f=V[e.presetParams].f,o.k=V[e.presetParams].k});const c={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};s.add(e,"initialConditions",c).onFinishChange(e.reset);const g=s.add(n,"iteration").listen();g.domElement.style.pointerEvents="none"},i=()=>{const h=document.getElementById("canvas");if(!h)throw new Error("Canvas container not ready");r&&r.destroy(),r=ht({extensions:["OES_texture_float"],canvas:h}),n.iteration=0;const l=2**11;let c;e.initialConditions==="randomSpots"?c=te(l,.001):e.initialConditions==="middleCircleAndRandomSpots"?c=Zt(l,.005,.05):c=ee(l,.02);const g=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:l,data:c,wrap:"repeat",type:"float"}),depthStencil:!1})),m=r({frag:`
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
}`,framebuffer:d=>g[(d.tick+1)%2],uniforms:{Da:r.prop("Da"),Db:r.prop("Db"),f:r.prop("f"),k:r.prop("k")}}),u=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:d})=>g[d%2]},depth:{enable:!1},count:3});r.frame(()=>{n.iteration++,u(()=>{r.draw(),m({Da:1,Db:.5,...o})})})};return G(()=>{f(),i()}),mt(()=>{s.destroy(),r.destroy()}),[t]}class re extends W{constructor(t){super(),I(this,t,oe,ne,P,{})}}function ot(a,t,e){const n=a.slice();return n[1]=t[e],n}function rt(a,t,e){const n=a.slice();return n[1]=t[e],n}function ae(a){let t;return{c(){t=M("About")},l(e){t=R(e,"About")},m(e,n){y(e,t,n)},d(e){e&&p(t)}}}function se(a){let t=a[1].title+"",e;return{c(){e=M(t)},l(n){e=R(n,t)},m(n,o){y(n,e,o)},p:x,d(n){n&&p(e)}}}function at(a){let t,e;return t=new ct({props:{$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function ie(a){let t,e,n,o;t=new ct({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}});let s=a[0],r=[];for(let i=0;i<s.length;i+=1)r[i]=at(rt(a,s,i));const f=i=>b(r[i],1,1,()=>{r[i]=null});return{c(){D(t.$$.fragment),e=X();for(let i=0;i<r.length;i+=1)r[i].c();n=Y()},l(i){k(t.$$.fragment,i),e=F(i);for(let h=0;h<r.length;h+=1)r[h].l(i);n=Y()},m(i,h){S(t,i,h),y(i,e,h);for(let l=0;l<r.length;l+=1)r[l].m(i,h);y(i,n,h),o=!0},p(i,h){const l={};if(h&64&&(l.$$scope={dirty:h,ctx:i}),t.$set(l),h&1){s=i[0];let c;for(c=0;c<s.length;c+=1){const g=rt(i,s,c);r[c]?(r[c].p(g,h),_(r[c],1)):(r[c]=at(g),r[c].c(),_(r[c],1),r[c].m(n.parentNode,n))}for(U(),c=s.length;c<r.length;c+=1)f(c);j()}},i(i){if(!o){_(t.$$.fragment,i);for(let h=0;h<s.length;h+=1)_(r[h]);o=!0}},o(i){b(t.$$.fragment,i),r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)b(r[h]);o=!1},d(i){A(t,i),i&&p(e),it(r,i),i&&p(n)}}}function le(a){let t,e,n,o,s,r,f,i,h,l,c,g;return{c(){t=L("p"),e=M("Experiments with "),n=L("a"),o=M("Reaction-diffusion systems"),s=X(),r=L("p"),f=M("The code is based on "),i=L("a"),h=M("this tutorial"),l=M(`
                but reimplemented in a glsl shader with
                `),c=L("a"),g=M("regl"),this.h()},l(m){t=C(m,"P",{});var u=E(t);e=R(u,"Experiments with "),n=C(u,"A",{href:!0,target:!0});var d=E(n);o=R(d,"Reaction-diffusion systems"),d.forEach(p),u.forEach(p),s=F(m),r=C(m,"P",{});var N=E(r);f=R(N,"The code is based on "),i=C(N,"A",{href:!0,target:!0});var q=E(i);h=R(q,"this tutorial"),q.forEach(p),l=R(N,`
                but reimplemented in a glsl shader with
                `),c=C(N,"A",{href:!0,target:!0});var H=E(c);g=R(H,"regl"),H.forEach(p),N.forEach(p),this.h()},h(){w(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),w(n,"target","none"),w(i,"href","https://karlsims.com/rd.html"),w(i,"target","none"),w(c,"href","https://github.com/regl-project/regl"),w(c,"target","none")},m(m,u){y(m,t,u),B(t,e),B(t,n),B(n,o),y(m,s,u),y(m,r,u),B(r,f),B(r,i),B(i,h),B(r,l),B(r,c),B(c,g)},p:x,d(m){m&&p(t),m&&p(s),m&&p(r)}}}function ce(a){let t,e,n;var o=a[1].component;function s(r){return{}}return o&&(t=K(o,s())),{c(){t&&D(t.$$.fragment),e=X()},l(r){t&&k(t.$$.fragment,r),e=F(r)},m(r,f){t&&S(t,r,f),y(r,e,f),n=!0},p(r,f){if(o!==(o=r[1].component)){if(t){U();const i=t;b(i.$$.fragment,1,0,()=>{A(i,1)}),j()}o?(t=K(o,s()),D(t.$$.fragment),_(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}},i(r){n||(t&&_(t.$$.fragment,r),n=!0)},o(r){t&&b(t.$$.fragment,r),n=!1},d(r){t&&A(t,r),r&&p(e)}}}function st(a){let t,e;return t=new lt({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function fe(a){let t,e,n,o,s,r;t=new dt({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}}),n=new lt({props:{$$slots:{default:[le]},$$scope:{ctx:a}}});let f=a[0],i=[];for(let l=0;l<f.length;l+=1)i[l]=st(ot(a,f,l));const h=l=>b(i[l],1,1,()=>{i[l]=null});return{c(){D(t.$$.fragment),e=X(),D(n.$$.fragment),o=X();for(let l=0;l<i.length;l+=1)i[l].c();s=Y()},l(l){k(t.$$.fragment,l),e=F(l),k(n.$$.fragment,l),o=F(l);for(let c=0;c<i.length;c+=1)i[c].l(l);s=Y()},m(l,c){S(t,l,c),y(l,e,c),S(n,l,c),y(l,o,c);for(let g=0;g<i.length;g+=1)i[g].m(l,c);y(l,s,c),r=!0},p(l,c){const g={};c&64&&(g.$$scope={dirty:c,ctx:l}),t.$set(g);const m={};if(c&64&&(m.$$scope={dirty:c,ctx:l}),n.$set(m),c&1){f=l[0];let u;for(u=0;u<f.length;u+=1){const d=ot(l,f,u);i[u]?(i[u].p(d,c),_(i[u],1)):(i[u]=st(d),i[u].c(),_(i[u],1),i[u].m(s.parentNode,s))}for(U(),u=f.length;u<i.length;u+=1)h(u);j()}},i(l){if(!r){_(t.$$.fragment,l),_(n.$$.fragment,l);for(let c=0;c<f.length;c+=1)_(i[c]);r=!0}},o(l){b(t.$$.fragment,l),b(n.$$.fragment,l),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)b(i[c]);r=!1},d(l){A(t,l),l&&p(e),A(n,l),l&&p(o),it(i,l),l&&p(s)}}}function he(a){let t,e,n;return e=new pt({props:{$$slots:{default:[fe]},$$scope:{ctx:a}}}),{c(){t=L("div"),D(e.$$.fragment)},l(o){t=C(o,"DIV",{});var s=E(t);k(e.$$.fragment,s),s.forEach(p)},m(o,s){y(o,t,s),S(e,t,null),n=!0},p(o,[s]){const r={};s&64&&(r.$$scope={dirty:s,ctx:o}),e.$set(r)},i(o){n||(_(e.$$.fragment,o),n=!0)},o(o){b(e.$$.fragment,o),n=!1},d(o){o&&p(t),A(e)}}}function ue(a){return[[{title:"V5",component:re},{title:"V4",component:Jt},{title:"V3",component:Ht},{title:"V2",component:Ot},{title:"V1",component:Lt}]]}class ge extends W{constructor(t){super(),I(this,t,ue,he,P,{})}}function me(a){let t,e;return t=new ge({}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}class xe extends W{constructor(t){super(),I(this,t,null,me,P,{})}}export{xe as default};
