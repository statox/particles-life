import{S as I,i as P,s as T,k as E,l as C,m as R,h as g,n as v,b as k,X as $t,B as b,Y as yt,o as Q,w as D,x as B,y as x,f as w,t as S,z as A,Q as ht,K,Z as nt,M as _t,a as U,e as Z,c as Y,g as H,d as q,L as dt,q as N,r as O,D as M,v as ot}from"../../../chunks/index-8c90984f.js";import{T as wt,a as bt,b as gt,c as vt}from"../../../chunks/TabPanel-5bd1c0f6.js";import{_ as J}from"../../../chunks/preload-helper-41c905a7.js";import{R as tt}from"../../../chunks/regl-89b00fbf.js";function St(r){let t,e,n;return{c(){t=E("div"),this.h()},l(o){t=C(o,"DIV",{style:!0,class:!0}),R(t).forEach(g),this.h()},h(){v(t,"style",r[0]),v(t,"class","m-0")},m(o,s){k(o,t,s),e||(n=$t(r[1].call(null,t)),e=!0)},p(o,[s]){s&1&&v(t,"style",o[0])},i:b,o:b,d(o){o&&g(t),e=!1,n()}}}function kt(r,t){return t.forEach(([e,n])=>r[e]=n),r}function Dt(r,t,e){let{target:n=void 0}=t,{sketch:o=void 0}=t,{parentDivStyle:s="display: block;"}=t,{debug:a=!1}=t,f;const i=yt(),m={ref(){i("ref",n)},instance(){i("instance",f)}};function c(l){return e(2,n=l),{destroy(){e(2,n=void 0)}}}return Q(async()=>{const l=await J(()=>import("../../../chunks/p5.min-b96f42d1.js").then(d=>d.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:h}=l,u=Object.entries(l).filter(([d,$])=>$ instanceof Function&&d[0]!=="_"&&d!=="default");a&&console.log("available p5 native classes",u),f=new h(d=>(d=kt(d,u),a&&console.log("p5 instance",d),window._p5Instance=d,o(d)),n),m.ref(),m.instance()}),r.$$set=l=>{"target"in l&&e(2,n=l.target),"sketch"in l&&e(3,o=l.sketch),"parentDivStyle"in l&&e(0,s=l.parentDivStyle),"debug"in l&&e(4,a=l.debug)},[s,c,n,o,a]}class et extends I{constructor(t){super(),P(this,t,Dt,St,T,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const xt=r=>{const t=[];for(let a=0;a<r.height;a++){t.push([]);for(let f=0;f<r.width;f++)t[t.length-1].push({A:1,B:0})}const e=5,n=5,o=Math.floor(r.width/2),s=Math.floor(r.height/2);for(let a=s-n;a<s+n;a++)for(let f=o-e;f<o+e;f++)t[a][f].B=1;return t},At=(r,t)=>{const e={width:r.width/t[0].length,height:r.height/t.length};for(let n=0;n<t.length;n++)for(let o=0;o<t[0].length;o++){const{A:s,B:a}=t[n][o];r.fill(s*255,a*255,0),r.rect(o*e.width,n*e.height,e.width,e.height)}},Bt=1,Lt=.5,rt=.055,Et=.062,Ct=r=>{const t=[];for(let e=0;e<r.length;e++){t.push([]);for(let n=0;n<r[0].length;n++){const{A:o,B:s}=r[e][n],a=at(r,{x:n,y:e},"A"),f=at(r,{x:n,y:e},"B"),i=o+(Bt*a-o*s*s+rt*(1-o)),m=s+(Lt*f+o*s*s-(Et+rt)*s);t[e].push({A:i,B:m})}}return t},at=(r,t,e)=>{const n=Rt(r,t);let o=0;for(const s of n){const{coord:a,weight:f}=s;o+=r[a.y][a.x][e]*f}return o},Rt=(r,t)=>{const{x:e,y:n}=t,o=r[0].length,s=r.length,a={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},m={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},p={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[a,f,i,m,c,l,h,p,u]};function Mt(r){let t,e;return t=new et({props:{sketch:r[0]}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){x(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function It(r){const t={width:200,height:200};let e;return[o=>{let s;o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),s=xt(t)},o.draw=()=>{o.background(0);for(let a=0;a<20;a++)s=Ct(s);At(e,s)}}]}let Pt=class extends I{constructor(t){super(),P(this,t,It,Mt,T,{})}},y,V;const Tt=r=>{y=[],V=[];for(let s=0;s<r.height;s++){y.push([]),V.push([]);for(let a=0;a<r.width;a++)y[y.length-1].push({A:1,B:0}),V[y.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let s=o-e;s<o+e;s++)for(let a=n-t;a<n+t;a++)y[s][a].B=1;return y},Wt=r=>{const t={width:r.width/y[0].length,height:r.height/y.length};for(let e=0;e<y.length;e++)for(let n=0;n<y[0].length;n++){const{A:o,B:s}=y[e][n];r.fill(o*255,s*255,0),r.rect(n*t.width,e*t.height,t.width,t.height)}},Nt=1,Ot=.5,st=.055,Ft=.062,Vt=()=>{for(let t=0;t<y.length;t++)for(let e=0;e<y[0].length;e++){const{A:n,B:o}=y[t][e],s=it(y,{x:e,y:t},"A"),a=it(y,{x:e,y:t},"B"),f=n+(Nt*s-n*o*o+st*(1-n)),i=o+(Ot*a+n*o*o-(Ft+st)*o);V[t][e]={A:f,B:i}}const r=y;return y=V,V=r,y},it=(r,t,e)=>{const n=Xt(r,t);let o=0;for(const s of n){const{coord:a,weight:f}=s;o+=r[a.y][a.x][e]*f}return o},Xt=(r,t)=>{const{x:e,y:n}=t,o=r[0].length,s=r.length,a={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},m={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},p={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[a,f,i,m,c,l,h,p,u]};function zt(r){let t,e;return t=new et({props:{sketch:r[0]}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){x(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Gt(r){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Tt(t)},o.draw=()=>{for(let s=0;s<5;s++)Vt();Wt(e)}}]}let Ut=class extends I{constructor(t){super(),P(this,t,Gt,zt,T,{})}},_,X;const Yt=r=>{_=[],X=[];for(let s=0;s<r.height;s++){_.push([]),X.push([]);for(let a=0;a<r.width;a++)_[_.length-1].push({A:1,B:0}),X[_.length-1].push({A:1,B:0})}const t=5,e=5,n=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let s=o-e;s<o+e;s++)for(let a=n-t;a<n+t;a++)_[s][a].B=1;return _},Kt=r=>{const t={width:r.width/_[0].length,height:r.height/_.length};for(let e=0;e<_.length;e++)for(let n=0;n<_[0].length;n++){const{A:o,B:s}=_[e][n];r.fill(o*255,s*255,0),r.rect(n*t.width,e*t.height,t.width,t.height)}},Zt=1,Qt=.5,lt=.055,jt=.062,Ht=()=>{for(let t=0;t<_.length;t++)for(let e=0;e<_[0].length;e++){const{A:n,B:o}=_[t][e],s=ct(_,{x:e,y:t},"A"),a=ct(_,{x:e,y:t},"B"),f=n+(Zt*s-n*o*o+lt*(1-n)),i=o+(Qt*a+n*o*o-(jt+lt)*o);X[t][e]={A:f,B:i}}const r=_;return _=X,X=r,_},ct=(r,t,e)=>{const n=qt(r,t);let o=0;for(const s of n){const{coord:a,weight:f}=s;o+=r[a.y][a.x][e]*f}return o},qt=(r,t)=>{const{x:e,y:n}=t,o=r[0].length,s=r.length,a={coord:{x:e>0?e-1:o-1,y:n>0?n-1:s-1},weight:.05},f={coord:{x:e,y:n>0?n-1:s-1},weight:.2},i={coord:{x:e<o-1?e+1:0,y:n>0?n-1:s-1},weight:.05},m={coord:{x:e>0?e-1:o-1,y:n},weight:.2},c={coord:{x:e,y:n},weight:-1},l={coord:{x:e<o-1?e+1:0,y:n},weight:.2},h={coord:{x:e>0?e-1:o-1,y:n<s-1?n+1:0},weight:.05},p={coord:{x:e,y:n<s-1?n+1:0},weight:.2},u={coord:{x:e<o-1?e+1:0,y:n<s-1?n+1:0},weight:.05};return[a,f,i,m,c,l,h,p,u]};function Jt(r){let t,e;return t=new et({props:{sketch:r[0]}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){x(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function te(r){const t={width:200,height:200};let e;return[o=>{o.setup=()=>{e=o,o.createCanvas(500,500),o.noStroke(),Yt(t)},o.draw=()=>{for(let s=0;s<5;s++)Ht();Kt(e)}}]}let ee=class extends I{constructor(t){super(),P(this,t,te,Jt,T,{})}};function ne(r){let t;return{c(){t=E("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(g),this.h()},h(){v(t,"id","canvas"),v(t,"width",r[0].width),v(t,"height",r[0].height),v(t,"class","svelte-1b0ol19")},m(e,n){k(e,t,n)},p:b,i:b,o:b,d(e){e&&g(t)}}}function oe(r){const t={width:window.innerWidth-50,height:window.innerHeight-10},e=2**10,n=e*.05,o=Array(e*e).fill(0).map((s,a)=>{const f=Math.floor(a/e),i=a%e;return Math.hypot(e/2-i,e/2-f)<n?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return Q(()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas container not ready");const a=tt({extensions:["OES_texture_float"],canvas:s}),f=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:e,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),i=a({frag:`
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
}`,framebuffer:c=>f[(c.tick+1)%2]}),m=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:c})=>f[c%2]},depth:{enable:!1},count:3});a.frame(()=>{m(()=>{a.draw(),i()})})}),[t]}let re=class extends I{constructor(t){super(),P(this,t,oe,ne,T,{})}};const ae=(r,t,e)=>{const n=r*e;return Array(r*r).fill(0).map((o,s)=>{const a=Math.floor(s/r),f=s%r;return Math.hypot(r/2-f,r/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},se=(r,t)=>Array(r*r).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),ie=(r,t)=>Array(r*r).fill(0).map((e,n)=>{const o=Math.floor(n/r),s=n%r;return Math.hypot(r/2-s,r/2-o)<t*r?[0,1,0,1]:[1,0,0,1]}).flat(),z=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function le(r){let t;return{c(){t=E("canvas"),this.h()},l(e){t=C(e,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(g),this.h()},h(){v(t,"id","canvas"),v(t,"width",r[0].width),v(t,"height",r[0].height),v(t,"class","svelte-1b0ol19")},m(e,n){k(e,t,n)},p:b,i:b,o:b,d(e){e&&g(t)}}}function ce(r){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},n={iteration:0},o={f:z[e.presetParams].f,k:z[e.presetParams].k};let s,a;const f=async()=>{const c=await J(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);s=new c.GUI,s.domElement.setAttribute("style","background-color: black"),s.add(o,"f").name("Feed rate").listen(),s.add(o,"k").name("Kill rate").listen(),s.add(e,"pause").name("Pause"),s.add(e,"reset").name("Reset simulation");const l=z.reduce((u,d,$)=>(u[d.name]=$,u),{});s.add(e,"presetParams",l).onFinishChange(()=>{o.f=z[e.presetParams].f,o.k=z[e.presetParams].k});const h={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};s.add(e,"initialConditions",h).onFinishChange(e.reset);const p=s.add(n,"iteration").listen();p.domElement.style.pointerEvents="none"},i=()=>{document.addEventListener("keydown",c=>{if(c.code==="Space")return e.pause=!e.pause,c.preventDefault();if(c.code==="KeyR")return m(),c.preventDefault()})},m=()=>{const c=document.getElementById("canvas");if(!c)throw new Error("Canvas container not ready");a&&a.destroy(),a=tt({extensions:["OES_texture_float"],canvas:c}),n.iteration=0;const l=2**11;let h;e.initialConditions==="randomSpots"?h=se(l,.001):e.initialConditions==="middleCircleAndRandomSpots"?h=ae(l,.005,.05):h=ie(l,.02);const p=Array(2).fill(0).map(()=>a.framebuffer({color:a.texture({radius:l,data:h,wrap:"repeat",type:"float"}),depthStencil:!1})),u=a({frag:`
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
}`,framebuffer:$=>p[($.tick+1)%2],uniforms:{Da:a.prop("Da"),Db:a.prop("Db"),f:a.prop("f"),k:a.prop("k")}}),d=a({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:$})=>p[$%2]},depth:{enable:!1},count:3});a.frame(()=>{d(()=>{a.draw(),!e.pause&&(n.iteration++,u({Da:1,Db:.5,...o}))})})};return Q(()=>{f(),i(),m()}),ht(()=>{s.destroy(),a.destroy()}),[t]}let fe=class extends I{constructor(t){super(),P(this,t,ce,le,T,{})}};const ue=(r,t,e)=>{const n=r*e;return Array(r*r).fill(0).map((o,s)=>{const a=Math.floor(s/r),f=s%r;return Math.hypot(r/2-f,r/2-a)<n?[0,1,0,1]:Math.random()<t?[0,1,0,1]:[1,0,0,1]}).flat()},pe=(r,t)=>Array(r*r).fill(0).map(()=>Math.random()<t?[0,1,0,1]:[1,0,0,1]).flat(),me=(r,t)=>Array(r*r).fill(0).map((e,n)=>{const o=Math.floor(n/r),s=n%r;return Math.hypot(r/2-s,r/2-o)<t*r?[0,1,0,1]:[1,0,0,1]}).flat(),G=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],he=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,de=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,ge=`precision mediump float;

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
`;function ve(r){let t,e,n;return{c(){t=E("canvas"),this.h()},l(o){t=C(o,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(t).forEach(g),this.h()},h(){v(t,"id","canvas"),v(t,"width",r[0].width),v(t,"height",r[0].height),v(t,"class","svelte-1b0ol19")},m(o,s){k(o,t,s),e||(n=[K(t,"mousemove",r[1]),K(t,"mousedown",nt(r[2])),K(t,"mouseup",r[2]),K(t,"contextmenu",nt($e))],e=!0)},p:b,i:b,o:b,d(o){o&&g(t),e=!1,_t(n)}}}const j=11,$e=r=>r;function ye(r){const t={width:window.innerWidth-50,height:window.innerHeight-10},e={presetParams:4,initialConditions:"randomSpots",reset:()=>c(),pause:!1},n={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},o={iteration:0},s={f:G[e.presetParams].f,k:G[e.presetParams].k};let a,f;const i=async()=>{const p=await J(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);a=new p.GUI,a.domElement.setAttribute("style","background-color: black"),a.add(s,"f").name("Feed rate").listen(),a.add(s,"k").name("Kill rate").listen(),a.add(e,"pause").name("Pause"),a.add(e,"reset").name("Reset simulation");const u=G.reduce((L,W,F)=>(L[W.name]=F,L),{});a.add(e,"presetParams",u).onFinishChange(()=>{s.f=G[e.presetParams].f,s.k=G[e.presetParams].k});const d={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};a.add(e,"initialConditions",d).onFinishChange(e.reset);const $=a.add(o,"iteration").listen();$.domElement.style.pointerEvents="none",a.add(n,"penSize",1,j,1).name("Pen size")},m=()=>{document.addEventListener("keydown",p=>{if(p.code==="Space")return e.pause=!e.pause,p.preventDefault();if(p.code==="KeyR")return c(),p.preventDefault()})},c=()=>{const p=document.getElementById("canvas");if(!p)throw new Error("Canvas container not ready");f&&f.destroy(),f=tt({extensions:["OES_texture_float"],canvas:p}),o.iteration=0;const u=2**j;let d;e.initialConditions==="randomSpots"?d=pe(u,.001):e.initialConditions==="middleCircleAndRandomSpots"?d=ue(u,.005,.05):d=me(u,.02);const $=Array(2).fill(0).map(()=>f.framebuffer({color:f.texture({radius:u,data:d,wrap:"repeat",type:"float"}),depthStencil:!1})),L=f({frag:ge,framebuffer:F=>$[(F.tick+1)%2],uniforms:{Da:f.prop("Da"),Db:f.prop("Db"),f:f.prop("f"),k:f.prop("k"),radius:u,pauseSimulation:f.prop("pauseSimulation"),mousePosition:f.prop("mousePosition"),penRadius:f.prop("penRadius"),penIsActive:f.prop("penIsActive"),eraserIsActive:f.prop("eraserIsActive")}}),W=f({frag:de,vert:he,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:F})=>$[F%2]},depth:{enable:!1},count:3});f.frame(()=>{W(()=>{f.draw(),e.pause||o.iteration++,L({Da:1,Db:.5,pauseSimulation:e.pause,mousePosition:[n.x,n.y],penRadius:1/2**(j-n.penSize),penIsActive:n.pressedLeft,eraserIsActive:n.pressedRight,...s})})})},l=p=>{if(!p.currentTarget)throw new Error("No target for the onmousemove event");if(!p.currentTarget.width||!p.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:u,y:d}=p,{width:$,height:L}=p.currentTarget,W=u/$,F=(L-d)/L;n.x=W,n.y=F},h=p=>{if(![0,2].includes(p.button)||!["mouseup","mousedown"].includes(p.type))return;let u=p.type==="mousedown";p.button===0&&(n.pressedLeft=u),p.button===2&&(n.pressedRight=u)};return Q(()=>{i(),m(),c()}),ht(()=>{a.destroy(),f.destroy()}),[t,l,h]}class _e extends I{constructor(t){super(),P(this,t,ye,ve,T,{})}}function ft(r,t,e){const n=r.slice();return n[1]=t[e],n}function ut(r,t,e){const n=r.slice();return n[1]=t[e],n}function we(r){let t;return{c(){t=N("About")},l(e){t=O(e,"About")},m(e,n){k(e,t,n)},d(e){e&&g(t)}}}function be(r){let t=r[1].title+"",e;return{c(){e=N(t)},l(n){e=O(n,t)},m(n,o){k(n,e,o)},p:b,d(n){n&&g(e)}}}function pt(r){let t,e;return t=new vt({props:{$$slots:{default:[be]},$$scope:{ctx:r}}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){x(t,n,o),e=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function Se(r){let t,e,n,o;t=new vt({props:{$$slots:{default:[we]},$$scope:{ctx:r}}});let s=r[0],a=[];for(let i=0;i<s.length;i+=1)a[i]=pt(ut(r,s,i));const f=i=>S(a[i],1,1,()=>{a[i]=null});return{c(){D(t.$$.fragment),e=U();for(let i=0;i<a.length;i+=1)a[i].c();n=Z()},l(i){B(t.$$.fragment,i),e=Y(i);for(let m=0;m<a.length;m+=1)a[m].l(i);n=Z()},m(i,m){x(t,i,m),k(i,e,m);for(let c=0;c<a.length;c+=1)a[c].m(i,m);k(i,n,m),o=!0},p(i,m){const c={};if(m&64&&(c.$$scope={dirty:m,ctx:i}),t.$set(c),m&1){s=i[0];let l;for(l=0;l<s.length;l+=1){const h=ut(i,s,l);a[l]?(a[l].p(h,m),w(a[l],1)):(a[l]=pt(h),a[l].c(),w(a[l],1),a[l].m(n.parentNode,n))}for(H(),l=s.length;l<a.length;l+=1)f(l);q()}},i(i){if(!o){w(t.$$.fragment,i);for(let m=0;m<s.length;m+=1)w(a[m]);o=!0}},o(i){S(t.$$.fragment,i),a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)S(a[m]);o=!1},d(i){A(t,i),i&&g(e),dt(a,i),i&&g(n)}}}function ke(r){let t,e,n,o,s,a,f,i,m,c,l,h;return{c(){t=E("p"),e=N("Experiments with "),n=E("a"),o=N("Reaction-diffusion systems"),s=U(),a=E("p"),f=N("The code is based on "),i=E("a"),m=N("this tutorial"),c=N(`
                but reimplemented in a glsl shader with
                `),l=E("a"),h=N("regl"),this.h()},l(p){t=C(p,"P",{});var u=R(t);e=O(u,"Experiments with "),n=C(u,"A",{href:!0,target:!0});var d=R(n);o=O(d,"Reaction-diffusion systems"),d.forEach(g),u.forEach(g),s=Y(p),a=C(p,"P",{});var $=R(a);f=O($,"The code is based on "),i=C($,"A",{href:!0,target:!0});var L=R(i);m=O(L,"this tutorial"),L.forEach(g),c=O($,`
                but reimplemented in a glsl shader with
                `),l=C($,"A",{href:!0,target:!0});var W=R(l);h=O(W,"regl"),W.forEach(g),$.forEach(g),this.h()},h(){v(n,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),v(n,"target","none"),v(i,"href","https://karlsims.com/rd.html"),v(i,"target","none"),v(l,"href","https://github.com/regl-project/regl"),v(l,"target","none")},m(p,u){k(p,t,u),M(t,e),M(t,n),M(n,o),k(p,s,u),k(p,a,u),M(a,f),M(a,i),M(i,m),M(a,c),M(a,l),M(l,h)},p:b,d(p){p&&g(t),p&&g(s),p&&g(a)}}}function De(r){let t,e,n;var o=r[1].component;function s(a){return{}}return o&&(t=ot(o,s())),{c(){t&&D(t.$$.fragment),e=U()},l(a){t&&B(t.$$.fragment,a),e=Y(a)},m(a,f){t&&x(t,a,f),k(a,e,f),n=!0},p(a,f){if(o!==(o=a[1].component)){if(t){H();const i=t;S(i.$$.fragment,1,0,()=>{A(i,1)}),q()}o?(t=ot(o,s()),D(t.$$.fragment),w(t.$$.fragment,1),x(t,e.parentNode,e)):t=null}},i(a){n||(t&&w(t.$$.fragment,a),n=!0)},o(a){t&&S(t.$$.fragment,a),n=!1},d(a){t&&A(t,a),a&&g(e)}}}function mt(r){let t,e;return t=new gt({props:{$$slots:{default:[De]},$$scope:{ctx:r}}}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){x(t,n,o),e=!0},p(n,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}function xe(r){let t,e,n,o,s,a;t=new bt({props:{$$slots:{default:[Se]},$$scope:{ctx:r}}}),n=new gt({props:{$$slots:{default:[ke]},$$scope:{ctx:r}}});let f=r[0],i=[];for(let c=0;c<f.length;c+=1)i[c]=mt(ft(r,f,c));const m=c=>S(i[c],1,1,()=>{i[c]=null});return{c(){D(t.$$.fragment),e=U(),D(n.$$.fragment),o=U();for(let c=0;c<i.length;c+=1)i[c].c();s=Z()},l(c){B(t.$$.fragment,c),e=Y(c),B(n.$$.fragment,c),o=Y(c);for(let l=0;l<i.length;l+=1)i[l].l(c);s=Z()},m(c,l){x(t,c,l),k(c,e,l),x(n,c,l),k(c,o,l);for(let h=0;h<i.length;h+=1)i[h].m(c,l);k(c,s,l),a=!0},p(c,l){const h={};l&64&&(h.$$scope={dirty:l,ctx:c}),t.$set(h);const p={};if(l&64&&(p.$$scope={dirty:l,ctx:c}),n.$set(p),l&1){f=c[0];let u;for(u=0;u<f.length;u+=1){const d=ft(c,f,u);i[u]?(i[u].p(d,l),w(i[u],1)):(i[u]=mt(d),i[u].c(),w(i[u],1),i[u].m(s.parentNode,s))}for(H(),u=f.length;u<i.length;u+=1)m(u);q()}},i(c){if(!a){w(t.$$.fragment,c),w(n.$$.fragment,c);for(let l=0;l<f.length;l+=1)w(i[l]);a=!0}},o(c){S(t.$$.fragment,c),S(n.$$.fragment,c),i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)S(i[l]);a=!1},d(c){A(t,c),c&&g(e),A(n,c),c&&g(o),dt(i,c),c&&g(s)}}}function Ae(r){let t,e,n;return e=new wt({props:{$$slots:{default:[xe]},$$scope:{ctx:r}}}),{c(){t=E("div"),D(e.$$.fragment)},l(o){t=C(o,"DIV",{});var s=R(t);B(e.$$.fragment,s),s.forEach(g)},m(o,s){k(o,t,s),x(e,t,null),n=!0},p(o,[s]){const a={};s&64&&(a.$$scope={dirty:s,ctx:o}),e.$set(a)},i(o){n||(w(e.$$.fragment,o),n=!0)},o(o){S(e.$$.fragment,o),n=!1},d(o){o&&g(t),A(e)}}}function Be(r){return[[{title:"V6",component:_e},{title:"V5",component:fe},{title:"V4",component:re},{title:"V3",component:ee},{title:"V2",component:Ut},{title:"V1",component:Pt}]]}class Le extends I{constructor(t){super(),P(this,t,Be,Ae,T,{})}}function Ee(r){let t,e;return t=new Le({}),{c(){D(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){x(t,n,o),e=!0},p:b,i(n){e||(w(t.$$.fragment,n),e=!0)},o(n){S(t.$$.fragment,n),e=!1},d(n){A(t,n)}}}class Fe extends I{constructor(t){super(),P(this,t,null,Ee,T,{})}}export{Fe as default};
