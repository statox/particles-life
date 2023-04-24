import{S as k,i as L,s as M,k as C,l as I,m as R,h as d,n as b,b as x,X as ct,B as _,Y as lt,o as Y,w as y,x as S,y as D,f as m,t as v,z as A,a as N,e as T,c as V,g as F,d as j,L as nt,q as O,r as P,D as X,v as H}from"../../../chunks/index-2f3b6d71.js";import{T as ft,a as ut,b as rt,c as st}from"../../../chunks/TabPanel-e2218539.js";import{_ as ht}from"../../../chunks/preload-helper-41c905a7.js";import{R as at}from"../../../chunks/regl-89b00fbf.js";function gt(a){let e,t,o;return{c(){e=C("div"),this.h()},l(n){e=I(n,"DIV",{style:!0,class:!0}),R(e).forEach(d),this.h()},h(){b(e,"style",a[0]),b(e,"class","m-0")},m(n,s){x(n,e,s),t||(o=ct(a[1].call(null,e)),t=!0)},p(n,[s]){s&1&&b(e,"style",n[0])},i:_,o:_,d(n){n&&d(e),t=!1,o()}}}function pt(a,e){return e.forEach(([t,o])=>a[t]=o),a}function dt(a,e,t){let{target:o=void 0}=e,{sketch:n=void 0}=e,{parentDivStyle:s="display: block;"}=e,{debug:r=!1}=e,f;const i=lt(),u={ref(){i("ref",o)},instance(){i("instance",f)}};function c(l){return t(2,o=l),{destroy(){t(2,o=void 0)}}}return Y(async()=>{const l=await ht(()=>import("../../../chunks/p5.min-b96f42d1.js").then(w=>w.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:$}=l,h=Object.entries(l).filter(([w,it])=>it instanceof Function&&w[0]!=="_"&&w!=="default");r&&console.log("available p5 native classes",h),f=new $(w=>(w=pt(w,h),r&&console.log("p5 instance",w),window._p5Instance=w,n(w)),o),u.ref(),u.instance()}),a.$$set=l=>{"target"in l&&t(2,o=l.target),"sketch"in l&&t(3,n=l.sketch),"parentDivStyle"in l&&t(0,s=l.parentDivStyle),"debug"in l&&t(4,r=l.debug)},[s,c,o,n,r]}class q extends k{constructor(e){super(),L(this,e,dt,gt,M,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const mt=a=>{const e=[];for(let r=0;r<a.height;r++){e.push([]);for(let f=0;f<a.width;f++)e[e.length-1].push({A:1,B:0})}const t=5,o=5,n=Math.floor(a.width/2),s=Math.floor(a.height/2);for(let r=s-o;r<s+o;r++)for(let f=n-t;f<n+t;f++)e[r][f].B=1;return e},$t=(a,e)=>{const t={width:a.width/e[0].length,height:a.height/e.length};for(let o=0;o<e.length;o++)for(let n=0;n<e[0].length;n++){const{A:s,B:r}=e[o][n];a.fill(s*255,r*255,0),a.rect(n*t.width,o*t.height,t.width,t.height)}},vt=1,_t=.5,Q=.055,wt=.062,bt=a=>{const e=[];for(let t=0;t<a.length;t++){e.push([]);for(let o=0;o<a[0].length;o++){const{A:n,B:s}=a[t][o],r=U(a,{x:o,y:t},"A"),f=U(a,{x:o,y:t},"B"),i=n+(vt*r-n*s*s+Q*(1-n)),u=s+(_t*f+n*s*s-(wt+Q)*s);e[t].push({A:i,B:u})}}return e},U=(a,e,t)=>{const o=xt(a,e);let n=0;for(const s of o){const{coord:r,weight:f}=s;n+=a[r.y][r.x][t]*f}return n},xt=(a,e)=>{const{x:t,y:o}=e,n=a[0].length,s=a.length,r={coord:{x:t>0?t-1:n-1,y:o>0?o-1:s-1},weight:.05},f={coord:{x:t,y:o>0?o-1:s-1},weight:.2},i={coord:{x:t<n-1?t+1:0,y:o>0?o-1:s-1},weight:.05},u={coord:{x:t>0?t-1:n-1,y:o},weight:.2},c={coord:{x:t,y:o},weight:-1},l={coord:{x:t<n-1?t+1:0,y:o},weight:.2},$={coord:{x:t>0?t-1:n-1,y:o<s-1?o+1:0},weight:.05},B={coord:{x:t,y:o<s-1?o+1:0},weight:.2},h={coord:{x:t<n-1?t+1:0,y:o<s-1?o+1:0},weight:.05};return[r,f,i,u,c,l,$,B,h]};function yt(a){let e,t;return e=new q({props:{sketch:a[0]}}),{c(){y(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,n){D(e,o,n),t=!0},p:_,i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}function Dt(a){const e={width:200,height:200};let t;return[n=>{let s;n.setup=()=>{t=n,n.createCanvas(500,500),n.noStroke(),s=mt(e)},n.draw=()=>{n.background(0);for(let r=0;r<20;r++)s=bt(s);$t(t,s)}}]}let At=class extends k{constructor(e){super(),L(this,e,Dt,yt,M,{})}},g,W;const St=a=>{g=[],W=[];for(let s=0;s<a.height;s++){g.push([]),W.push([]);for(let r=0;r<a.width;r++)g[g.length-1].push({A:1,B:0}),W[g.length-1].push({A:1,B:0})}const e=5,t=5,o=Math.floor(a.width/2),n=Math.floor(a.height/2);for(let s=n-t;s<n+t;s++)for(let r=o-e;r<o+e;r++)g[s][r].B=1;return g},Bt=a=>{const e={width:a.width/g[0].length,height:a.height/g.length};for(let t=0;t<g.length;t++)for(let o=0;o<g[0].length;o++){const{A:n,B:s}=g[t][o];a.fill(n*255,s*255,0),a.rect(o*e.width,t*e.height,e.width,e.height)}},kt=1,Lt=.5,z=.055,Mt=.062,Wt=()=>{for(let e=0;e<g.length;e++)for(let t=0;t<g[0].length;t++){const{A:o,B:n}=g[e][t],s=G(g,{x:t,y:e},"A"),r=G(g,{x:t,y:e},"B"),f=o+(kt*s-o*n*n+z*(1-o)),i=n+(Lt*r+o*n*n-(Mt+z)*n);W[e][t]={A:f,B:i}}const a=g;return g=W,W=a,g},G=(a,e,t)=>{const o=Et(a,e);let n=0;for(const s of o){const{coord:r,weight:f}=s;n+=a[r.y][r.x][t]*f}return n},Et=(a,e)=>{const{x:t,y:o}=e,n=a[0].length,s=a.length,r={coord:{x:t>0?t-1:n-1,y:o>0?o-1:s-1},weight:.05},f={coord:{x:t,y:o>0?o-1:s-1},weight:.2},i={coord:{x:t<n-1?t+1:0,y:o>0?o-1:s-1},weight:.05},u={coord:{x:t>0?t-1:n-1,y:o},weight:.2},c={coord:{x:t,y:o},weight:-1},l={coord:{x:t<n-1?t+1:0,y:o},weight:.2},$={coord:{x:t>0?t-1:n-1,y:o<s-1?o+1:0},weight:.05},B={coord:{x:t,y:o<s-1?o+1:0},weight:.2},h={coord:{x:t<n-1?t+1:0,y:o<s-1?o+1:0},weight:.05};return[r,f,i,u,c,l,$,B,h]};function Ct(a){let e,t;return e=new q({props:{sketch:a[0]}}),{c(){y(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,n){D(e,o,n),t=!0},p:_,i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}function It(a){const e={width:200,height:200};let t;return[n=>{n.setup=()=>{t=n,n.createCanvas(500,500),n.noStroke(),St(e)},n.draw=()=>{for(let s=0;s<5;s++)Wt();Bt(t)}}]}let Rt=class extends k{constructor(e){super(),L(this,e,It,Ct,M,{})}},p,E;const Nt=a=>{p=[],E=[];for(let s=0;s<a.height;s++){p.push([]),E.push([]);for(let r=0;r<a.width;r++)p[p.length-1].push({A:1,B:0}),E[p.length-1].push({A:1,B:0})}const e=5,t=5,o=Math.floor(a.width/2),n=Math.floor(a.height/2);for(let s=n-t;s<n+t;s++)for(let r=o-e;r<o+e;r++)p[s][r].B=1;return p},Tt=a=>{const e={width:a.width/p[0].length,height:a.height/p.length};for(let t=0;t<p.length;t++)for(let o=0;o<p[0].length;o++){const{A:n,B:s}=p[t][o];a.fill(n*255,s*255,0),a.rect(o*e.width,t*e.height,e.width,e.height)}},Vt=1,Ot=.5,J=.055,Pt=.062,Xt=()=>{for(let e=0;e<p.length;e++)for(let t=0;t<p[0].length;t++){const{A:o,B:n}=p[e][t],s=K(p,{x:t,y:e},"A"),r=K(p,{x:t,y:e},"B"),f=o+(Vt*s-o*n*n+J*(1-o)),i=n+(Ot*r+o*n*n-(Pt+J)*n);E[e][t]={A:f,B:i}}const a=p;return p=E,E=a,p},K=(a,e,t)=>{const o=Yt(a,e);let n=0;for(const s of o){const{coord:r,weight:f}=s;n+=a[r.y][r.x][t]*f}return n},Yt=(a,e)=>{const{x:t,y:o}=e,n=a[0].length,s=a.length,r={coord:{x:t>0?t-1:n-1,y:o>0?o-1:s-1},weight:.05},f={coord:{x:t,y:o>0?o-1:s-1},weight:.2},i={coord:{x:t<n-1?t+1:0,y:o>0?o-1:s-1},weight:.05},u={coord:{x:t>0?t-1:n-1,y:o},weight:.2},c={coord:{x:t,y:o},weight:-1},l={coord:{x:t<n-1?t+1:0,y:o},weight:.2},$={coord:{x:t>0?t-1:n-1,y:o<s-1?o+1:0},weight:.05},B={coord:{x:t,y:o<s-1?o+1:0},weight:.2},h={coord:{x:t<n-1?t+1:0,y:o<s-1?o+1:0},weight:.05};return[r,f,i,u,c,l,$,B,h]};function Ft(a){let e,t;return e=new q({props:{sketch:a[0]}}),{c(){y(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,n){D(e,o,n),t=!0},p:_,i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}function jt(a){const e={width:200,height:200};let t;return[n=>{n.setup=()=>{t=n,n.createCanvas(500,500),n.noStroke(),Nt(e)},n.draw=()=>{for(let s=0;s<5;s++)Xt();Tt(t)}}]}let qt=class extends k{constructor(e){super(),L(this,e,jt,Ft,M,{})}};function Ht(a){let e;return{c(){e=C("canvas"),this.h()},l(t){e=I(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(d),this.h()},h(){b(e,"id","canvas"),b(e,"width",a[0].width),b(e,"height",a[0].height),b(e,"class","svelte-1b0ol19")},m(t,o){x(t,e,o)},p:_,i:_,o:_,d(t){t&&d(e)}}}function Qt(a){const e={width:window.innerWidth-50,height:window.innerHeight-10},t=2**10,o=t*.05,n=Array(t*t).fill(0).map((s,r)=>{const f=Math.floor(r/t),i=r%t;return Math.hypot(t/2-i,t/2-f)<o?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return Y(()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");const r=at({extensions:["OES_texture_float"],canvas:s}),f=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:t,data:n,wrap:"repeat",type:"float"}),depthStencil:!1})),i=r({frag:`
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${t})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${t})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${t})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${t})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${t})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${t})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${t})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${t})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${t})).rg * 0.05;

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
}`,framebuffer:c=>f[(c.tick+1)%2]}),u=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>f[c%2]},depth:{enable:!1},count:3});r.frame(()=>{u(()=>{r.draw(),i()})})}),[e]}let Ut=class extends k{constructor(e){super(),L(this,e,Qt,Ht,M,{})}};function zt(a){let e;return{c(){e=C("canvas"),this.h()},l(t){e=I(t,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(d),this.h()},h(){b(e,"id","canvas"),b(e,"width",a[0].width),b(e,"height",a[0].height),b(e,"class","svelte-1b0ol19")},m(t,o){x(t,e,o)},p:_,i:_,o:_,d(t){t&&d(e)}}}function Gt(a){const e={width:window.innerWidth-50,height:window.innerHeight-10},t=2**10,o=t*.05,n=Array(t*t).fill(0).map((s,r)=>{const f=Math.floor(r/t),i=r%t;return Math.hypot(t/2-i,t/2-f)<o?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return Y(()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");const r=at({extensions:["OES_texture_float"],canvas:s}),f=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:t,data:n,wrap:"repeat",type:"float"}),depthStencil:!1})),i=r({frag:`
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
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${t})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${t})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${t})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${t})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${t})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${t})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${t})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${t})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${t})).rg * 0.05;

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
}`,framebuffer:c=>f[(c.tick+1)%2],uniforms:{Da:r.prop("Da"),Db:r.prop("Db"),f:r.prop("f"),k:r.prop("k")}}),u=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>f[c%2]},depth:{enable:!1},count:3});r.frame(()=>{u(()=>{r.draw(),i({Da:1,Db:.5,f:.055,k:.062})})})}),[e]}class Jt extends k{constructor(e){super(),L(this,e,Gt,zt,M,{})}}function Z(a,e,t){const o=a.slice();return o[1]=e[t],o}function tt(a,e,t){const o=a.slice();return o[1]=e[t],o}function Kt(a){let e;return{c(){e=O("About")},l(t){e=P(t,"About")},m(t,o){x(t,e,o)},d(t){t&&d(e)}}}function Zt(a){let e=a[1].title+"",t;return{c(){t=O(e)},l(o){t=P(o,e)},m(o,n){x(o,t,n)},p:_,d(o){o&&d(t)}}}function et(a){let e,t;return e=new st({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,n){D(e,o,n),t=!0},p(o,n){const s={};n&64&&(s.$$scope={dirty:n,ctx:o}),e.$set(s)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}function te(a){let e,t,o,n;e=new st({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}});let s=a[0],r=[];for(let i=0;i<s.length;i+=1)r[i]=et(tt(a,s,i));const f=i=>v(r[i],1,1,()=>{r[i]=null});return{c(){y(e.$$.fragment),t=N();for(let i=0;i<r.length;i+=1)r[i].c();o=T()},l(i){S(e.$$.fragment,i),t=V(i);for(let u=0;u<r.length;u+=1)r[u].l(i);o=T()},m(i,u){D(e,i,u),x(i,t,u);for(let c=0;c<r.length;c+=1)r[c].m(i,u);x(i,o,u),n=!0},p(i,u){const c={};if(u&64&&(c.$$scope={dirty:u,ctx:i}),e.$set(c),u&1){s=i[0];let l;for(l=0;l<s.length;l+=1){const $=tt(i,s,l);r[l]?(r[l].p($,u),m(r[l],1)):(r[l]=et($),r[l].c(),m(r[l],1),r[l].m(o.parentNode,o))}for(F(),l=s.length;l<r.length;l+=1)f(l);j()}},i(i){if(!n){m(e.$$.fragment,i);for(let u=0;u<s.length;u+=1)m(r[u]);n=!0}},o(i){v(e.$$.fragment,i),r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)v(r[u]);n=!1},d(i){A(e,i),i&&d(t),nt(r,i),i&&d(o)}}}function ee(a){let e,t,o,n;return{c(){e=C("p"),t=O("Experiments with "),o=C("a"),n=O("Reaction-diffusion systems"),this.h()},l(s){e=I(s,"P",{});var r=R(e);t=P(r,"Experiments with "),o=I(r,"A",{href:!0,target:!0});var f=R(o);n=P(f,"Reaction-diffusion systems"),f.forEach(d),r.forEach(d),this.h()},h(){b(o,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),b(o,"target","none")},m(s,r){x(s,e,r),X(e,t),X(e,o),X(o,n)},p:_,d(s){s&&d(e)}}}function oe(a){let e,t,o;var n=a[1].component;function s(r){return{}}return n&&(e=H(n,s())),{c(){e&&y(e.$$.fragment),t=N()},l(r){e&&S(e.$$.fragment,r),t=V(r)},m(r,f){e&&D(e,r,f),x(r,t,f),o=!0},p(r,f){if(n!==(n=r[1].component)){if(e){F();const i=e;v(i.$$.fragment,1,0,()=>{A(i,1)}),j()}n?(e=H(n,s()),y(e.$$.fragment),m(e.$$.fragment,1),D(e,t.parentNode,t)):e=null}},i(r){o||(e&&m(e.$$.fragment,r),o=!0)},o(r){e&&v(e.$$.fragment,r),o=!1},d(r){e&&A(e,r),r&&d(t)}}}function ot(a){let e,t;return e=new rt({props:{$$slots:{default:[oe]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,n){D(e,o,n),t=!0},p(o,n){const s={};n&64&&(s.$$scope={dirty:n,ctx:o}),e.$set(s)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}function ne(a){let e,t,o,n,s,r;e=new ut({props:{$$slots:{default:[te]},$$scope:{ctx:a}}}),o=new rt({props:{$$slots:{default:[ee]},$$scope:{ctx:a}}});let f=a[0],i=[];for(let c=0;c<f.length;c+=1)i[c]=ot(Z(a,f,c));const u=c=>v(i[c],1,1,()=>{i[c]=null});return{c(){y(e.$$.fragment),t=N(),y(o.$$.fragment),n=N();for(let c=0;c<i.length;c+=1)i[c].c();s=T()},l(c){S(e.$$.fragment,c),t=V(c),S(o.$$.fragment,c),n=V(c);for(let l=0;l<i.length;l+=1)i[l].l(c);s=T()},m(c,l){D(e,c,l),x(c,t,l),D(o,c,l),x(c,n,l);for(let $=0;$<i.length;$+=1)i[$].m(c,l);x(c,s,l),r=!0},p(c,l){const $={};l&64&&($.$$scope={dirty:l,ctx:c}),e.$set($);const B={};if(l&64&&(B.$$scope={dirty:l,ctx:c}),o.$set(B),l&1){f=c[0];let h;for(h=0;h<f.length;h+=1){const w=Z(c,f,h);i[h]?(i[h].p(w,l),m(i[h],1)):(i[h]=ot(w),i[h].c(),m(i[h],1),i[h].m(s.parentNode,s))}for(F(),h=f.length;h<i.length;h+=1)u(h);j()}},i(c){if(!r){m(e.$$.fragment,c),m(o.$$.fragment,c);for(let l=0;l<f.length;l+=1)m(i[l]);r=!0}},o(c){v(e.$$.fragment,c),v(o.$$.fragment,c),i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)v(i[l]);r=!1},d(c){A(e,c),c&&d(t),A(o,c),c&&d(n),nt(i,c),c&&d(s)}}}function re(a){let e,t,o;return t=new ft({props:{$$slots:{default:[ne]},$$scope:{ctx:a}}}),{c(){e=C("div"),y(t.$$.fragment)},l(n){e=I(n,"DIV",{});var s=R(e);S(t.$$.fragment,s),s.forEach(d)},m(n,s){x(n,e,s),D(t,e,null),o=!0},p(n,[s]){const r={};s&64&&(r.$$scope={dirty:s,ctx:n}),t.$set(r)},i(n){o||(m(t.$$.fragment,n),o=!0)},o(n){v(t.$$.fragment,n),o=!1},d(n){n&&d(e),A(t)}}}function se(a){return[[{title:"V5",component:Jt},{title:"V4",component:Ut},{title:"V3",component:qt},{title:"V2",component:Rt},{title:"V1",component:At}]]}class ae extends k{constructor(e){super(),L(this,e,se,re,M,{})}}function ie(a){let e,t;return e=new ae({}),{c(){y(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,n){D(e,o,n),t=!0},p:_,i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}class me extends k{constructor(e){super(),L(this,e,null,ie,M,{})}}export{me as default};
