import{S as P,i as C,s as N,k as E,l as M,m as W,h as p,n as w,b as y,X as ut,B as x,Y as gt,o as j,w as D,x as S,y as k,f as _,t as b,z as A,Q as mt,a as F,e as U,c as X,g as Q,d as q,L as it,q as R,r as I,D as L,v as K}from"../../../chunks/index-2f3b6d71.js";import{T as pt,a as dt,b as ct,c as lt}from"../../../chunks/TabPanel-e2218539.js";import{_ as ft}from"../../../chunks/preload-helper-41c905a7.js";import{R as ht}from"../../../chunks/regl-89b00fbf.js";function $t(s){let t,e,n;return{c(){t=E("div"),this.h()},l(o){t=M(o,"DIV",{style:!0,class:!0}),W(t).forEach(p),this.h()},h(){w(t,"style",s[0]),w(t,"class","m-0")},m(o,r){y(o,t,r),e||(n=ut(s[1].call(null,t)),e=!0)},p(o,[r]){r&1&&w(t,"style",o[0])},i:x,o:x,d(o){o&&p(t),e=!1,n()}}}function vt(s,t){return t.forEach(([e,n])=>s[e]=n),s}function _t(s,t,e){let{target:n=void 0}=t,{sketch:o=void 0}=t,{parentDivStyle:r="display: block;"}=t,{debug:a=!1}=t,h;const i=gt(),f={ref(){i("ref",n)},instance(){i("instance",h)}};function l(c){return e(2,n=c),{destroy(){e(2,n=void 0)}}}return j(async()=>{const c=await ft(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:g}=c,u=Object.entries(c).filter(([d,B])=>B instanceof Function&&d[0]!=="_"&&d!=="default");a&&console.log("available p5 native classes",u),h=new g(d=>(d=vt(d,u),a&&console.log("p5 instance",d),window._p5Instance=d,o(d)),n),f.ref(),f.instance()}),s.$$set=c=>{"target"in c&&e(2,n=c.target),"sketch"in c&&e(3,o=c.sketch),"parentDivStyle"in c&&e(0,r=c.parentDivStyle),"debug"in c&&e(4,a=c.debug)},[r,l,n,o,a]}class H extends P{constructor(t){super(),C(this,t,_t,$t,N,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const wt=s=>{const t=[];for(let a=0;a<s.height;a++){t.push([]);for(let h=0;h<s.width;h++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(s.width/2),r=Math.floor(s.height/2);for(let a=r-n;a<r+n;a++)for(let h=o-e;h<o+e;h++)t[a][h].B=1;return t},bt=(s,t)=>{const e={width:s.width/t[0].length,height:s.height/t.length};for(let n=0;n<t.length;n++)for(let o=0;o<t[0].length;o++){const{A:r,B:a}=t[n][o];s.fill(r*255,a*255,0),s.rect(o*e.width,n*e.height,e.width,e.height)}},yt=1,xt=.5,z=.055,Dt=.062,kt=s=>{const t=[];for(let e=0;e<s.length;e++){t.push([]);for(let n=0;n<s[0].length;n++){const{A:o,B:r}=s[e][n],a=J(s,{x:n,y:e},"A"),h=J(s,{x:n,y:e},"B"),i=o+(yt*a-o*r*r+z*(1-o)),f=r+(xt*h+o*r*r-(Dt+z)*r);t[e].push({A:i,B:f})}}return t},J=(s,t,e)=>{const n=At(s,t);let o=0;for(const r of n){const{coord:a,weight:h}=r;o+=s[a.y][a.x][e]*h}return o},At=(s,t)=>{const{x:e,y:n}=t,o=s[0].length,r=s.length,a={coord:{x:e>0?e-1:o-1,y:n>0?n-1:r-1},weight:.05},h={coord:{x:e,y:n>0?n-1:r-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:r-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},c={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<r-1?n+1:0},weight:.05},m={coord:{x:e,y:n<r-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<r-1?n+1:0},weight:.05};return[a,h,i,f,l,c,g,m,u]};function St(s){let t,e;return t=new H({props:{sketch:s[0]}}),{c(){D(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Bt(s){const t={width:200,height:200};let e;return[o=>{let r;o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),r=wt(t)},o.draw=()=>{o.background(0);for(let a=0;a<20;a++)r=kt(r);bt(e,r)}}]}let Lt=class extends P{constructor(t){super(),C(this,t,Bt,St,N,{})}},$,T;const Et=s=>{$=[],T=[];for(let r=0;r<s.height;r++){$.push([]),T.push([]);for(let a=0;a<s.width;a++)$[$.length-1].push({A:1,B:0}),T[$.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(s.width/2),o=Math.floor(s.height/2);for(let r=o-e;r<o+e;r++)for(let a=n-t;a<n+t;a++)$[r][a].B=1;return $},Mt=s=>{const t={width:s.width/$[0].length,height:s.height/$.length};for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:o,B:r}=$[e][n];s.fill(o*255,r*255,0),s.rect(n*t.width,e*t.height,t.width,t.height)}},Wt=1,Rt=.5,Z=.055,It=.062,Pt=()=>{for(let t=0;t<$.length;t++)for(let e=0;e<$[0].length;e++){const{A:n,B:o}=$[t][e],r=tt($,{x:e,y:t},"A"),a=tt($,{x:e,y:t},"B"),h=n+(Wt*r-n*o*o+Z*(1-n)),i=o+(Rt*a+n*o*o-(It+Z)*o);T[t][e]={A:h,B:i}}const s=$;return $=T,T=s,$},tt=(s,t,e)=>{const n=Ct(s,t);let o=0;for(const r of n){const{coord:a,weight:h}=r;o+=s[a.y][a.x][e]*h}return o},Ct=(s,t)=>{const{x:e,y:n}=t,o=s[0].length,r=s.length,a={coord:{x:e>0?e-1:o-1,y:n>0?n-1:r-1},weight:.05},h={coord:{x:e,y:n>0?n-1:r-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:r-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},c={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<r-1?n+1:0},weight:.05},m={coord:{x:e,y:n<r-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<r-1?n+1:0},weight:.05};return[a,h,i,f,l,c,g,m,u]};function Nt(s){let t,e;return t=new H({props:{sketch:s[0]}}),{c(){D(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Tt(s){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Et(t)},o.draw=()=>{for(let r=0;r<5;r++)Pt();Mt(e)}}]}let Vt=class extends P{constructor(t){super(),C(this,t,Tt,Nt,N,{})}},v,V;const Ot=s=>{v=[],V=[];for(let r=0;r<s.height;r++){v.push([]),V.push([]);for(let a=0;a<s.width;a++)v[v.length-1].push({A:1,B:0}),V[v.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(s.width/2),o=Math.floor(s.height/2);for(let r=o-e;r<o+e;r++)for(let a=n-t;a<n+t;a++)v[r][a].B=1;return v},Ft=s=>{const t={width:s.width/v[0].length,height:s.height/v.length};for(let e=0;e<v.length;e++)for(let n=0;n<v[0].length;n++){const{A:o,B:r}=v[e][n];s.fill(o*255,r*255,0),s.rect(n*t.width,e*t.height,t.width,t.height)}},Xt=1,Yt=.5,et=.055,Gt=.062,Ut=()=>{for(let t=0;t<v.length;t++)for(let e=0;e<v[0].length;e++){const{A:n,B:o}=v[t][e],r=nt(v,{x:e,y:t},"A"),a=nt(v,{x:e,y:t},"B"),h=n+(Xt*r-n*o*o+et*(1-n)),i=o+(Yt*a+n*o*o-(Gt+et)*o);V[t][e]={A:h,B:i}}const s=v;return v=V,V=s,v},nt=(s,t,e)=>{const n=jt(s,t);let o=0;for(const r of n){const{coord:a,weight:h}=r;o+=s[a.y][a.x][e]*h}return o},jt=(s,t)=>{const{x:e,y:n}=t,o=s[0].length,r=s.length,a={coord:{x:e>0?e-1:o-1,y:n>0?n-1:r-1},weight:.05},h={coord:{x:e,y:n>0?n-1:r-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:r-1},weight:.05},f={coord:{x:e>0?e-1:o-1,y:n},weight:.2},l={coord:{x:e,y:n},weight:-1},c={coord:{x:e<o-1?e+1:0,y:n},weight:.2},g={coord:{x:e>0?e-1:o-1,y:n<r-1?n+1:0},weight:.05},m={coord:{x:e,y:n<r-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<r-1?n+1:0},weight:.05};return[a,h,i,f,l,c,g,m,u]};function Qt(s){let t,e;return t=new H({props:{sketch:s[0]}}),{c(){D(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function qt(s){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Ot(t)},o.draw=()=>{for(let r=0;r<5;r++)Ut();Ft(e)}}]}let Ht=class extends P{constructor(t){super(),C(this,t,qt,Qt,N,{})}};function Kt(s){let t;return{c(){t=E("canvas"),this.h()},l(e){t=M(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),W(t).forEach(p),this.h()},h(){w(t,"id","canvas"),w(t,"width",s[0].width),w(t,"height",s[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){y(e,t,n)},p:x,i:x,o:x,d(e){e&&p(t)}}}function zt(s){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,o=Array(e*e).fill(0).map((r,a)=>{const h=Math.floor(a/e),i=a%e;return Math.hypot(e/2-i,e/2-h)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return j(()=>{const r=document.getElementById("canvas");if(!r)throw new Error("Canvas container not ready");const a=ht({extensions:["OES_texture_float"],canvas:r}),h=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),i=a({frag:`
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
}`,framebuffer:l=>h[(l.tick+1)%2]}),f=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:l})=>h[l%2]},depth:{enable:!1},count:3});a.frame(()=>{f(()=>{a.draw(),i()})})}),[t]}let Jt=class extends P{constructor(t){super(),C(this,t,zt,Kt,N,{})}};const O=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523}];function Zt(s){let t;return{c(){t=E("canvas"),this.h()},l(e){t=M(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),W(t).forEach(p),this.h()},h(){w(t,"id","canvas"),w(t,"width",s[0].width),w(t,"height",s[0].height),w(t,"class","svelte-1b0ol19")},m(e,n){y(e,t,n)},p:x,i:x,o:x,d(e){e&&p(t)}}}function te(s){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,reset:()=>h()},n={f:O[e.presetParams].f,k:O[e.presetParams].k};let o,r;const a=async()=>{const i=await ft(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);o=new i.GUI,o.domElement.setAttribute("style","background-color: black");const f=o.addFolder("Program");f.open(),f.add(n,"f").name("Feed rate").listen(),f.add(n,"k").name("Kill rate").listen(),f.add(e,"reset").name("Reset simulation");const l=O.reduce((c,g,m)=>(c[g.name]=m,c),{});f.add(e,"presetParams",l).onFinishChange(()=>{n.f=O[e.presetParams].f,n.k=O[e.presetParams].k})},h=()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");r&&r.destroy(),r=ht({extensions:["OES_texture_float"],canvas:i});const f=2**11,l=f*.05,c=Array(f*f).fill(0).map((d,B)=>{const Y=Math.floor(B/f),G=B%f;return Math.hypot(f/2-G,f/2-Y)<l?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat(),g=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:f,data:c,wrap:"repeat",type:"float"}),depthStencil:!1})),m=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:d})=>g[d%2]},depth:{enable:!1},count:3});r.frame(()=>{u(()=>{r.draw(),m({Da:1,Db:.5,...n})})})};return j(()=>{a(),h()}),mt(()=>{o.destroy(),r.destroy()}),[t]}class ee extends P{constructor(t){super(),C(this,t,te,Zt,N,{})}}function ot(s,t,e){const n=s.slice();return n[1]=t[e],n}function rt(s,t,e){const n=s.slice();return n[1]=t[e],n}function ne(s){let t;return{c(){t=R("About")},l(e){t=I(e,"About")},m(e,n){y(e,t,n)},d(e){e&&p(t)}}}function oe(s){let t=s[1].title+"",e;return{c(){e=R(t)},l(n){e=I(n,t)},m(n,o){y(n,e,o)},p:x,d(n){n&&p(e)}}}function at(s){let t,e;return t=new lt({props:{$$slots:{default:[oe]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p(n,o){const r={};o&64&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function re(s){let t,e,n,o;t=new lt({props:{$$slots:{default:[ne]},$$scope:{ctx:s}}});let r=s[0],a=[];for(let i=0;i<r.length;i+=1)a[i]=at(rt(s,r,i));const h=i=>b(a[i],1,1,()=>{a[i]=null});return{c(){D(t.$$.fragment),e=F();for(let i=0;i<a.length;i+=1)a[i].c();n=U()},l(i){S(t.$$.fragment,i),e=X(i);for(let f=0;f<a.length;f+=1)a[f].l(i);n=U()},m(i,f){k(t,i,f),y(i,e,f);for(let l=0;l<a.length;l+=1)a[l].m(i,f);y(i,n,f),o=!0},p(i,f){const l={};if(f&64&&(l.$$scope={dirty:f,ctx:i}),t.$set(l),f&1){r=i[0];let c;for(c=0;c<r.length;c+=1){const g=rt(i,r,c);a[c]?(a[c].p(g,f),_(a[c],1)):(a[c]=at(g),a[c].c(),_(a[c],1),a[c].m(n.parentNode,n))}for(Q(),c=r.length;c<a.length;c+=1)h(c);q()}},i(i){if(!o){_(t.$$.fragment,i);for(let f=0;f<r.length;f+=1)_(a[f]);o=!0}},o(i){b(t.$$.fragment,i),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)b(a[f]);o=!1},d(i){A(t,i),i&&p(e),it(a,i),i&&p(n)}}}function ae(s){let t,e,n,o,r,a,h,i,f,l,c,g;return{c(){t=E("p"),e=R("Experiments with "),n=E("a"),o=R("Reaction-diffusion systems"),r=F(),a=E("p"),h=R("The code is based on "),i=E("a"),f=R("this tutorial"),l=R(`
                but reimplemented in a glsl shader with
                `),c=E("a"),g=R("regl"),this.h()},l(m){t=M(m,"P",{});var u=W(t);e=I(u,"Experiments with "),n=M(u,"A",{href:!0,target:!0});var d=W(n);o=I(d,"Reaction-diffusion systems"),d.forEach(p),u.forEach(p),r=X(m),a=M(m,"P",{});var B=W(a);h=I(B,"The code is based on "),i=M(B,"A",{href:!0,target:!0});var Y=W(i);f=I(Y,"this tutorial"),Y.forEach(p),l=I(B,`
                but reimplemented in a glsl shader with
                `),c=M(B,"A",{href:!0,target:!0});var G=W(c);g=I(G,"regl"),G.forEach(p),B.forEach(p),this.h()},h(){w(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),w(n,"target","none"),w(i,"href","https://karlsims.com/rd.html"),w(i,"target","none"),w(c,"href","https://github.com/regl-project/regl"),w(c,"target","none")},m(m,u){y(m,t,u),L(t,e),L(t,n),L(n,o),y(m,r,u),y(m,a,u),L(a,h),L(a,i),L(i,f),L(a,l),L(a,c),L(c,g)},p:x,d(m){m&&p(t),m&&p(r),m&&p(a)}}}function se(s){let t,e,n;var o=s[1].component;function r(a){return{}}return o&&(t=K(o,r())),{c(){t&&D(t.$$.fragment),e=F()},l(a){t&&S(t.$$.fragment,a),e=X(a)},m(a,h){t&&k(t,a,h),y(a,e,h),n=!0},p(a,h){if(o!==(o=a[1].component)){if(t){Q();const i=t;b(i.$$.fragment,1,0,()=>{A(i,1)}),q()}o?(t=K(o,r()),D(t.$$.fragment),_(t.$$.fragment,1),k(t,e.parentNode,e)):t=null}},i(a){n||(t&&_(t.$$.fragment,a),n=!0)},o(a){t&&b(t.$$.fragment,a),n=!1},d(a){t&&A(t,a),a&&p(e)}}}function st(s){let t,e;return t=new ct({props:{$$slots:{default:[se]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p(n,o){const r={};o&64&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function ie(s){let t,e,n,o,r,a;t=new dt({props:{$$slots:{default:[re]},$$scope:{ctx:s}}}),n=new ct({props:{$$slots:{default:[ae]},$$scope:{ctx:s}}});let h=s[0],i=[];for(let l=0;l<h.length;l+=1)i[l]=st(ot(s,h,l));const f=l=>b(i[l],1,1,()=>{i[l]=null});return{c(){D(t.$$.fragment),e=F(),D(n.$$.fragment),o=F();for(let l=0;l<i.length;l+=1)i[l].c();r=U()},l(l){S(t.$$.fragment,l),e=X(l),S(n.$$.fragment,l),o=X(l);for(let c=0;c<i.length;c+=1)i[c].l(l);r=U()},m(l,c){k(t,l,c),y(l,e,c),k(n,l,c),y(l,o,c);for(let g=0;g<i.length;g+=1)i[g].m(l,c);y(l,r,c),a=!0},p(l,c){const g={};c&64&&(g.$$scope={dirty:c,ctx:l}),t.$set(g);const m={};if(c&64&&(m.$$scope={dirty:c,ctx:l}),n.$set(m),c&1){h=l[0];let u;for(u=0;u<h.length;u+=1){const d=ot(l,h,u);i[u]?(i[u].p(d,c),_(i[u],1)):(i[u]=st(d),i[u].c(),_(i[u],1),i[u].m(r.parentNode,r))}for(Q(),u=h.length;u<i.length;u+=1)f(u);q()}},i(l){if(!a){_(t.$$.fragment,l),_(n.$$.fragment,l);for(let c=0;c<h.length;c+=1)_(i[c]);a=!0}},o(l){b(t.$$.fragment,l),b(n.$$.fragment,l),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)b(i[c]);a=!1},d(l){A(t,l),l&&p(e),A(n,l),l&&p(o),it(i,l),l&&p(r)}}}function ce(s){let t,e,n;return e=new pt({props:{$$slots:{default:[ie]},$$scope:{ctx:s}}}),{c(){t=E("div"),D(e.$$.fragment)},l(o){t=M(o,"DIV",{});var r=W(t);S(e.$$.fragment,r),r.forEach(p)},m(o,r){y(o,t,r),k(e,t,null),n=!0},p(o,[r]){const a={};r&64&&(a.$$scope={dirty:r,ctx:o}),e.$set(a)},i(o){n||(_(e.$$.fragment,o),n=!0)},o(o){b(e.$$.fragment,o),n=!1},d(o){o&&p(t),A(e)}}}function le(s){return[[{title:"V5",component:ee},{title:"V4",component:Jt},{title:"V3",component:Ht},{title:"V2",component:Vt},{title:"V1",component:Lt}]]}class fe extends P{constructor(t){super(),C(this,t,le,ce,N,{})}}function he(s){let t,e;return t=new fe({}),{c(){D(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p:x,i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}class be extends P{constructor(t){super(),C(this,t,null,he,N,{})}}export{be as default};
