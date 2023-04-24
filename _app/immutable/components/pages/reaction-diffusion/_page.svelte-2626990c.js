import{S as W,i as I,s as P,k as L,l as C,m as M,h as p,n as _,b as y,X as ut,B as x,Y as gt,o as G,w as D,x as k,y as S,f as v,t as b,z as A,Q as mt,a as X,e as Y,c as F,g as U,d as j,L as it,q as E,r as R,D as B,v as K}from"../../../chunks/index-2f3b6d71.js";import{T as pt,a as dt,b as lt,c as ct}from"../../../chunks/TabPanel-e2218539.js";import{_ as ft}from"../../../chunks/preload-helper-41c905a7.js";import{R as ht}from"../../../chunks/regl-89b00fbf.js";function $t(a){let t,e,n;return{c(){t=L("div"),this.h()},l(o){t=C(o,"DIV",{style:!0,class:!0}),M(t).forEach(p),this.h()},h(){_(t,"style",a[0]),_(t,"class","m-0")},m(o,r){y(o,t,r),e||(n=ut(a[1].call(null,t)),e=!0)},p(o,[r]){r&1&&_(t,"style",o[0])},i:x,o:x,d(o){o&&p(t),e=!1,n()}}}function vt(a,t){return t.forEach(([e,n])=>a[e]=n),a}function _t(a,t,e){let{target:n=void 0}=t,{sketch:o=void 0}=t,{parentDivStyle:r="display: block;"}=t,{debug:s=!1}=t,h;const i=gt(),f={ref(){i("ref",n)},instance(){i("instance",h)}};function c(l){return e(2,n=l),{destroy(){e(2,n=void 0)}}}return G(async()=>{const l=await ft(()=>import("../../../chunks/p5.min-b96f42d1.js").then(w=>w.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:g}=l,u=Object.entries(l).filter(([w,N])=>N instanceof Function&&w[0]!=="_"&&w!=="default");s&&console.log("available p5 native classes",u),h=new g(w=>(w=vt(w,u),s&&console.log("p5 instance",w),window._p5Instance=w,o(w)),n),f.ref(),f.instance()}),a.$$set=l=>{"target"in l&&e(2,n=l.target),"sketch"in l&&e(3,o=l.sketch),"parentDivStyle"in l&&e(0,r=l.parentDivStyle),"debug"in l&&e(4,s=l.debug)},[r,c,n,o,s]}class Q extends W{constructor(t){super(),I(this,t,_t,$t,P,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const wt=a=>{const t=[];for(let s=0;s<a.height;s++){t.push([]);for(let h=0;h<a.width;h++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(a.width/2),r=Math.floor(a.height/2);for(let s=r-n;s<r+n;s++)for(let h=o-e;h<o+e;h++)t[s][h].B=1;return t},bt=(a,t)=>{const e={width:a.width/t[0].length,height:a.height/t.length};for(let n=0;n<t.length;n++)for(let o=0;o<t[0].length;o++){const{A:r,B:s}=t[n][o];a.fill(r*255,s*255,0),a.rect(o*e.width,n*e.height,e.width,e.height)}},yt=1,xt=.5,z=.055,Dt=.062,St=a=>{const t=[];for(let e=0;e<a.length;e++){t.push([]);for(let n=0;n<a[0].length;n++){const{A:o,B:r}=a[e][n],s=J(a,{x:n,y:e},"A"),h=J(a,{x:n,y:e},"B"),i=o+(yt*s-o*r*r+z*(1-o)),f=r+(xt*h+o*r*r-(Dt+z)*r);t[e].push({A:i,B:f})}}return t},J=(a,t,e)=>{const n=At(a,t);let o=0;for(const r of n){const{coord:s,weight:h}=r;o+=a[s.y][s.x][e]*h}return o},At=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,r=a.length,s={coord:{x:e>0?e-1:o-1,y:n>0?n-1:r-1},weight:.05},h={coord:{x:e,y:n>0?n-1:r-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:r-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<r-1?n+1:0},weight:.05},m={coord:{x:e,y:n<r-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<r-1?n+1:0},weight:.05};return[s,h,i,f,c,l,g,m,u]};function kt(a){let t,e;return t=new Q({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Bt(a){const t={width:200,height:200};let e;return[o=>{let r;o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),r=wt(t)},o.draw=()=>{o.background(0);for(let s=0;s<20;s++)r=St(r);bt(e,r)}}]}let Lt=class extends W{constructor(t){super(),I(this,t,Bt,kt,P,{})}},d,T;const Ct=a=>{d=[],T=[];for(let r=0;r<a.height;r++){d.push([]),T.push([]);for(let s=0;s<a.width;s++)d[d.length-1].push({A:1,B:0}),T[d.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(a.width/2),o=Math.floor(a.height/2);for(let r=o-e;r<o+e;r++)for(let s=n-t;s<n+t;s++)d[r][s].B=1;return d},Mt=a=>{const t={width:a.width/d[0].length,height:a.height/d.length};for(let e=0;e<d.length;e++)for(let n=0;n<d[0].length;n++){const{A:o,B:r}=d[e][n];a.fill(o*255,r*255,0),a.rect(n*t.width,e*t.height,t.width,t.height)}},Et=1,Rt=.5,Z=.055,Wt=.062,It=()=>{for(let t=0;t<d.length;t++)for(let e=0;e<d[0].length;e++){const{A:n,B:o}=d[t][e],r=tt(d,{x:e,y:t},"A"),s=tt(d,{x:e,y:t},"B"),h=n+(Et*r-n*o*o+Z*(1-n)),i=o+(Rt*s+n*o*o-(Wt+Z)*o);T[t][e]={A:h,B:i}}const a=d;return d=T,T=a,d},tt=(a,t,e)=>{const n=Pt(a,t);let o=0;for(const r of n){const{coord:s,weight:h}=r;o+=a[s.y][s.x][e]*h}return o},Pt=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,r=a.length,s={coord:{x:e>0?e-1:o-1,y:n>0?n-1:r-1},weight:.05},h={coord:{x:e,y:n>0?n-1:r-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:r-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<r-1?n+1:0},weight:.05},m={coord:{x:e,y:n<r-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<r-1?n+1:0},weight:.05};return[s,h,i,f,c,l,g,m,u]};function Nt(a){let t,e;return t=new Q({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Tt(a){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Ct(t)},o.draw=()=>{for(let r=0;r<5;r++)It();Mt(e)}}]}let Ot=class extends W{constructor(t){super(),I(this,t,Tt,Nt,P,{})}},$,O;const Vt=a=>{$=[],O=[];for(let r=0;r<a.height;r++){$.push([]),O.push([]);for(let s=0;s<a.width;s++)$[$.length-1].push({A:1,B:0}),O[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(a.width/2),o=Math.floor(a.height/2);for(let r=o-e;r<o+e;r++)for(let s=n-t;s<n+t;s++)$[r][s].B=1;return $},Xt=a=>{const t={width:a.width/$[0].length,height:a.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:o,B:r}=$[e][n];a.fill(o*255,r*255,0),a.rect(n*t.width,e*t.height,t.width,t.height)}},Ft=1,Yt=.5,et=.055,Gt=.062,Ut=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:o}=$[t][e],r=nt($,{x:e,y:t},"A"),s=nt($,{x:e,y:t},"B"),h=n+(Ft*r-n*o*o+et*(1-n)),i=o+(Yt*s+n*o*o-(Gt+et)*o);O[t][e]={A:h,B:i}}const a=$;return $=O,O=a,$},nt=(a,t,e)=>{const n=jt(a,t);let o=0;for(const r of n){const{coord:s,weight:h}=r;o+=a[s.y][s.x][e]*h}return o},jt=(a,t)=>{const{x:e,y:n}=t,o=a[0].length,r=a.length,s={coord:{x:e>0?e-1:o-1,y:n>0?n-1:r-1},weight:.05},h={coord:{x:e,y:n>0?n-1:r-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:r-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<r-1?n+1:0},weight:.05},m={coord:{x:e,y:n<r-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<r-1?n+1:0},weight:.05};return[s,h,i,f,c,l,g,m,u]};function Qt(a){let t,e;return t=new Q({props:{sketch:a[0]}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function qt(a){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Vt(t)},o.draw=()=>{for(let r=0;r<5;r++)Ut();Xt(e)}}]}let Ht=class extends W{constructor(t){super(),I(this,t,qt,Qt,P,{})}};function Kt(a){let t;return{c(){t=L("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(p),this.h()},h(){_(t,"id","canvas"),_(t,"width",a[0].width),_(t,"height",a[0].height),_(t,"class","svelte-1b0ol19")},m(e,n){y(e,t,n)},p:x,i:x,o:x,d(e){e&&p(t)}}}function zt(a){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,o=Array(e*e).fill(0).map((r,s)=>{const h=Math.floor(s/e),i=s%e;return Math.hypot(e/2-i,e/2-h)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return G(()=>{const r=document.getElementById("canvas");if(!r)throw new Error("Canvas container not ready");const s=ht({extensions:["OES_texture_float"],canvas:r}),h=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:e,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),i=s({frag:`
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
}`,framebuffer:c=>h[(c.tick+1)%2]}),f=s({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>h[c%2]},depth:{enable:!1},count:3});s.frame(()=>{f(()=>{s.draw(),i()})})}),[t]}let Jt=class extends W{constructor(t){super(),I(this,t,zt,Kt,P,{})}};const Zt=(a,t,e)=>{const n=a*e;return Array(a*a).fill(0).map((o,r)=>{const s=Math.floor(r/a),h=r%a;return Math.hypot(a/2-h,a/2-s)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},te=(a,t)=>Array(a*a).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ee=(a,t)=>Array(a*a).fill(0).map((e,n)=>{const o=Math.floor(n/a),r=n%a;return Math.hypot(a/2-r,a/2-o)<t*a?[0,1,0,1]:[1,0,0,1]}).flat(),V=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523}];function ne(a){let t;return{c(){t=L("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),M(t).forEach(p),this.h()},h(){_(t,"id","canvas"),_(t,"width",a[0].width),_(t,"height",a[0].height),_(t,"class","svelte-1b0ol19")},m(e,n){y(e,t,n)},p:x,i:x,o:x,d(e){e&&p(t)}}}function oe(a){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>h()},n={f:V[e.presetParams].f,k:V[e.presetParams].k};let o,r;const s=async()=>{const i=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);o=new i.GUI,o.domElement.setAttribute("style","background-color: black"),o.add(n,"f").name("Feed rate").listen(),o.add(n,"k").name("Kill rate").listen(),o.add(e,"reset").name("Reset simulation");const f=V.reduce((l,g,m)=>(l[g.name]=m,l),{});o.add(e,"presetParams",f).onFinishChange(()=>{n.f=V[e.presetParams].f,n.k=V[e.presetParams].k});const c={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};o.add(e,"initialConditions",c).onFinishChange(e.reset)},h=()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");r&&r.destroy(),r=ht({extensions:["OES_texture_float"],canvas:i});const f=2**11;let c;e.initialConditions==="randomSpots"?c=te(f,.001):e.initialConditions==="middleCircleAndRandomSpots"?c=Zt(f,.005,.05):c=ee(f,.02);const l=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:f,data:c,wrap:"repeat",type:"float"}),depthStencil:!1})),g=r({frag:`
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
}`,framebuffer:u=>l[(u.tick+1)%2],uniforms:{Da:r.prop("Da"),Db:r.prop("Db"),f:r.prop("f"),k:r.prop("k")}}),m=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:u})=>l[u%2]},depth:{enable:!1},count:3});r.frame(()=>{m(()=>{r.draw(),g({Da:1,Db:.5,...n})})})};return G(()=>{s(),h()}),mt(()=>{o.destroy(),r.destroy()}),[t]}class re extends W{constructor(t){super(),I(this,t,oe,ne,P,{})}}function ot(a,t,e){const n=a.slice();return n[1]=t[e],n}function rt(a,t,e){const n=a.slice();return n[1]=t[e],n}function ae(a){let t;return{c(){t=E("About")},l(e){t=R(e,"About")},m(e,n){y(e,t,n)},d(e){e&&p(t)}}}function se(a){let t=a[1].title+"",e;return{c(){e=E(t)},l(n){e=R(n,t)},m(n,o){y(n,e,o)},p:x,d(n){n&&p(e)}}}function at(a){let t,e;return t=new ct({props:{$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p(n,o){const r={};o&64&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function ie(a){let t,e,n,o;t=new ct({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}});let r=a[0],s=[];for(let i=0;i<r.length;i+=1)s[i]=at(rt(a,r,i));const h=i=>b(s[i],1,1,()=>{s[i]=null});return{c(){D(t.$$.fragment),e=X();for(let i=0;i<s.length;i+=1)s[i].c();n=Y()},l(i){k(t.$$.fragment,i),e=F(i);for(let f=0;f<s.length;f+=1)s[f].l(i);n=Y()},m(i,f){S(t,i,f),y(i,e,f);for(let c=0;c<s.length;c+=1)s[c].m(i,f);y(i,n,f),o=!0},p(i,f){const c={};if(f&64&&(c.$$scope={dirty:f,ctx:i}),t.$set(c),f&1){r=i[0];let l;for(l=0;l<r.length;l+=1){const g=rt(i,r,l);s[l]?(s[l].p(g,f),v(s[l],1)):(s[l]=at(g),s[l].c(),v(s[l],1),s[l].m(n.parentNode,n))}for(U(),l=r.length;l<s.length;l+=1)h(l);j()}},i(i){if(!o){v(t.$$.fragment,i);for(let f=0;f<r.length;f+=1)v(s[f]);o=!0}},o(i){b(t.$$.fragment,i),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)b(s[f]);o=!1},d(i){A(t,i),i&&p(e),it(s,i),i&&p(n)}}}function le(a){let t,e,n,o,r,s,h,i,f,c,l,g;return{c(){t=L("p"),e=E("Experiments with "),n=L("a"),o=E("Reaction-diffusion systems"),r=X(),s=L("p"),h=E("The code is based on "),i=L("a"),f=E("this tutorial"),c=E(`
                but reimplemented in a glsl shader with
                `),l=L("a"),g=E("regl"),this.h()},l(m){t=C(m,"P",{});var u=M(t);e=R(u,"Experiments with "),n=C(u,"A",{href:!0,target:!0});var w=M(n);o=R(w,"Reaction-diffusion systems"),w.forEach(p),u.forEach(p),r=F(m),s=C(m,"P",{});var N=M(s);h=R(N,"The code is based on "),i=C(N,"A",{href:!0,target:!0});var q=M(i);f=R(q,"this tutorial"),q.forEach(p),c=R(N,`
                but reimplemented in a glsl shader with
                `),l=C(N,"A",{href:!0,target:!0});var H=M(l);g=R(H,"regl"),H.forEach(p),N.forEach(p),this.h()},h(){_(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),_(n,"target","none"),_(i,"href","https://karlsims.com/rd.html"),_(i,"target","none"),_(l,"href","https://github.com/regl-project/regl"),_(l,"target","none")},m(m,u){y(m,t,u),B(t,e),B(t,n),B(n,o),y(m,r,u),y(m,s,u),B(s,h),B(s,i),B(i,f),B(s,c),B(s,l),B(l,g)},p:x,d(m){m&&p(t),m&&p(r),m&&p(s)}}}function ce(a){let t,e,n;var o=a[1].component;function r(s){return{}}return o&&(t=K(o,r())),{c(){t&&D(t.$$.fragment),e=X()},l(s){t&&k(t.$$.fragment,s),e=F(s)},m(s,h){t&&S(t,s,h),y(s,e,h),n=!0},p(s,h){if(o!==(o=s[1].component)){if(t){U();const i=t;b(i.$$.fragment,1,0,()=>{A(i,1)}),j()}o?(t=K(o,r()),D(t.$$.fragment),v(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}},i(s){n||(t&&v(t.$$.fragment,s),n=!0)},o(s){t&&b(t.$$.fragment,s),n=!1},d(s){t&&A(t,s),s&&p(e)}}}function st(a){let t,e;return t=new lt({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p(n,o){const r={};o&64&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function fe(a){let t,e,n,o,r,s;t=new dt({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}}),n=new lt({props:{$$slots:{default:[le]},$$scope:{ctx:a}}});let h=a[0],i=[];for(let c=0;c<h.length;c+=1)i[c]=st(ot(a,h,c));const f=c=>b(i[c],1,1,()=>{i[c]=null});return{c(){D(t.$$.fragment),e=X(),D(n.$$.fragment),o=X();for(let c=0;c<i.length;c+=1)i[c].c();r=Y()},l(c){k(t.$$.fragment,c),e=F(c),k(n.$$.fragment,c),o=F(c);for(let l=0;l<i.length;l+=1)i[l].l(c);r=Y()},m(c,l){S(t,c,l),y(c,e,l),S(n,c,l),y(c,o,l);for(let g=0;g<i.length;g+=1)i[g].m(c,l);y(c,r,l),s=!0},p(c,l){const g={};l&64&&(g.$$scope={dirty:l,ctx:c}),t.$set(g);const m={};if(l&64&&(m.$$scope={dirty:l,ctx:c}),n.$set(m),l&1){h=c[0];let u;for(u=0;u<h.length;u+=1){const w=ot(c,h,u);i[u]?(i[u].p(w,l),v(i[u],1)):(i[u]=st(w),i[u].c(),v(i[u],1),i[u].m(r.parentNode,r))}for(U(),u=h.length;u<i.length;u+=1)f(u);j()}},i(c){if(!s){v(t.$$.fragment,c),v(n.$$.fragment,c);for(let l=0;l<h.length;l+=1)v(i[l]);s=!0}},o(c){b(t.$$.fragment,c),b(n.$$.fragment,c),i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)b(i[l]);s=!1},d(c){A(t,c),c&&p(e),A(n,c),c&&p(o),it(i,c),c&&p(r)}}}function he(a){let t,e,n;return e=new pt({props:{$$slots:{default:[fe]},$$scope:{ctx:a}}}),{c(){t=L("div"),D(e.$$.fragment)},l(o){t=C(o,"DIV",{});var r=M(t);k(e.$$.fragment,r),r.forEach(p)},m(o,r){y(o,t,r),S(e,t,null),n=!0},p(o,[r]){const s={};r&64&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){n||(v(e.$$.fragment,o),n=!0)},o(o){b(e.$$.fragment,o),n=!1},d(o){o&&p(t),A(e)}}}function ue(a){return[[{title:"V5",component:re},{title:"V4",component:Jt},{title:"V3",component:Ht},{title:"V2",component:Ot},{title:"V1",component:Lt}]]}class ge extends W{constructor(t){super(),I(this,t,ue,he,P,{})}}function me(a){let t,e;return t=new ge({}),{c(){D(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,o){S(t,n,o),e=!0},p:x,i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}class xe extends W{constructor(t){super(),I(this,t,null,me,P,{})}}export{xe as default};
