import{S as L,i as M,s as E,k as C,l as S,m as X,h as _,n as R,b as k,X as ct,B as A,Y as lt,o as it,w as b,x as B,y as x,f as d,t as p,z as y,a as Y,e as N,c as P,g as j,d as q,L as nt,q as T,r as V,D as I,v as z}from"../../../chunks/index-2f3b6d71.js";import{T as ft,a as at,b as ot,c as st}from"../../../chunks/TabPanel-e2218539.js";import{_ as ht}from"../../../chunks/preload-helper-41c905a7.js";function ut(r){let e,n,t;return{c(){e=C("div"),this.h()},l(o){e=S(o,"DIV",{style:!0,class:!0}),X(e).forEach(_),this.h()},h(){R(e,"style",r[0]),R(e,"class","m-0")},m(o,s){k(o,e,s),n||(t=ct(r[1].call(null,e)),n=!0)},p(o,[s]){s&1&&R(e,"style",o[0])},i:A,o:A,d(o){o&&_(e),n=!1,t()}}}function gt(r,e){return e.forEach(([n,t])=>r[n]=t),r}function $t(r,e,n){let{target:t=void 0}=e,{sketch:o=void 0}=e,{parentDivStyle:s="display: block;"}=e,{debug:c=!1}=e,a;const l=lt(),h={ref(){l("ref",t)},instance(){l("instance",a)}};function f(i){return n(2,t=i),{destroy(){n(2,t=void 0)}}}return it(async()=>{const i=await ht(()=>import("../../../chunks/p5.min-bfbd1c19.js").then(w=>w.p),["../../../chunks/p5.min-bfbd1c19.js","../../../chunks/_commonjsHelpers-725317a4.js"],import.meta.url),{default:m}=i,u=Object.entries(i).filter(([w,rt])=>rt instanceof Function&&w[0]!=="_"&&w!=="default");c&&console.log("available p5 native classes",u),a=new m(w=>(w=gt(w,u),c&&console.log("p5 instance",w),window._p5Instance=w,o(w)),t),h.ref(),h.instance()}),r.$$set=i=>{"target"in i&&n(2,t=i.target),"sketch"in i&&n(3,o=i.sketch),"parentDivStyle"in i&&n(0,s=i.parentDivStyle),"debug"in i&&n(4,c=i.debug)},[s,f,t,o,c]}class O extends L{constructor(e){super(),M(this,e,$t,ut,E,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const dt=r=>{const e=[];for(let c=0;c<r.height;c++){e.push([]);for(let a=0;a<r.width;a++)e[e.length-1].push({A:1,B:0})}const n=5,t=5,o=Math.floor(r.width/2),s=Math.floor(r.height/2);for(let c=s-t;c<s+t;c++)for(let a=o-n;a<o+n;a++)e[c][a].B=1;return e},mt=(r,e)=>{const n={width:r.width/e[0].length,height:r.height/e.length};for(let t=0;t<e.length;t++)for(let o=0;o<e[0].length;o++){const{A:s,B:c}=e[t][o];r.fill(s*255,c*255,0),r.rect(o*n.width,t*n.height,n.width,n.height)}},pt=1,_t=.5,F=.055,wt=.062,bt=r=>{const e=[];for(let n=0;n<r.length;n++){e.push([]);for(let t=0;t<r[0].length;t++){const{A:o,B:s}=r[n][t],c=G(r,{x:t,y:n},"A"),a=G(r,{x:t,y:n},"B"),l=o+(pt*c-o*s*s+F*(1-o)),h=s+(_t*a+o*s*s-(wt+F)*s);e[n].push({A:l,B:h})}}return e},G=(r,e,n)=>{const t=xt(r,e);let o=0;for(const s of t){const{coord:c,weight:a}=s;o+=r[c.y][c.x][n]*a}return o},xt=(r,e)=>{const{x:n,y:t}=e,o=r[0].length,s=r.length,c={coord:{x:n>0?n-1:o-1,y:t>0?t-1:s-1},weight:.05},a={coord:{x:n,y:t>0?t-1:s-1},weight:.2},l={coord:{x:n<o-1?n+1:0,y:t>0?t-1:s-1},weight:.05},h={coord:{x:n>0?n-1:o-1,y:t},weight:.2},f={coord:{x:n,y:t},weight:-1},i={coord:{x:n<o-1?n+1:0,y:t},weight:.2},m={coord:{x:n>0?n-1:o-1,y:t<s-1?t+1:0},weight:.05},v={coord:{x:n,y:t<s-1?t+1:0},weight:.2},u={coord:{x:n<o-1?n+1:0,y:t<s-1?t+1:0},weight:.05};return[c,a,l,h,f,i,m,v,u]};function yt(r){let e,n;return e=new O({props:{sketch:r[0]}}),{c(){b(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){x(e,t,o),n=!0},p:A,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function kt(r){const e={width:200,height:200};let n;return[o=>{let s;o.setup=()=>{n=o,o.createCanvas(500,500),o.noStroke(),s=dt(e)},o.draw=()=>{o.background(0);for(let c=0;c<20;c++)s=bt(s);mt(n,s)}}]}let Bt=class extends L{constructor(e){super(),M(this,e,kt,yt,E,{})}},g,W;const vt=r=>{g=[],W=[];for(let s=0;s<r.height;s++){g.push([]),W.push([]);for(let c=0;c<r.width;c++)g[g.length-1].push({A:1,B:0}),W[g.length-1].push({A:1,B:0})}const e=5,n=5,t=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let s=o-n;s<o+n;s++)for(let c=t-e;c<t+e;c++)g[s][c].B=1;return g},At=r=>{const e={width:r.width/g[0].length,height:r.height/g.length};for(let n=0;n<g.length;n++)for(let t=0;t<g[0].length;t++){const{A:o,B:s}=g[n][t];r.fill(o*255,s*255,0),r.rect(t*e.width,n*e.height,e.width,e.height)}},Wt=1,Dt=.5,H=.055,Lt=.062,Mt=()=>{for(let e=0;e<g.length;e++)for(let n=0;n<g[0].length;n++){const{A:t,B:o}=g[e][n],s=J(g,{x:n,y:e},"A"),c=J(g,{x:n,y:e},"B"),a=t+(Wt*s-t*o*o+H*(1-t)),l=o+(Dt*c+t*o*o-(Lt+H)*o);W[e][n]={A:a,B:l}}const r=g;return g=W,W=r,g},J=(r,e,n)=>{const t=Et(r,e);let o=0;for(const s of t){const{coord:c,weight:a}=s;o+=r[c.y][c.x][n]*a}return o},Et=(r,e)=>{const{x:n,y:t}=e,o=r[0].length,s=r.length,c={coord:{x:n>0?n-1:o-1,y:t>0?t-1:s-1},weight:.05},a={coord:{x:n,y:t>0?t-1:s-1},weight:.2},l={coord:{x:n<o-1?n+1:0,y:t>0?t-1:s-1},weight:.05},h={coord:{x:n>0?n-1:o-1,y:t},weight:.2},f={coord:{x:n,y:t},weight:-1},i={coord:{x:n<o-1?n+1:0,y:t},weight:.2},m={coord:{x:n>0?n-1:o-1,y:t<s-1?t+1:0},weight:.05},v={coord:{x:n,y:t<s-1?t+1:0},weight:.2},u={coord:{x:n<o-1?n+1:0,y:t<s-1?t+1:0},weight:.05};return[c,a,l,h,f,i,m,v,u]};function Rt(r){let e,n;return e=new O({props:{sketch:r[0]}}),{c(){b(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){x(e,t,o),n=!0},p:A,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ct(r){const e={width:200,height:200};let n;return[o=>{o.setup=()=>{n=o,o.createCanvas(500,500),o.noStroke(),vt(e)},o.draw=()=>{for(let s=0;s<5;s++)Mt();At(n)}}]}let St=class extends L{constructor(e){super(),M(this,e,Ct,Rt,E,{})}},$,D;const Xt=r=>{$=[],D=[];for(let s=0;s<r.height;s++){$.push([]),D.push([]);for(let c=0;c<r.width;c++)$[$.length-1].push({A:1,B:0}),D[$.length-1].push({A:1,B:0})}const e=5,n=5,t=Math.floor(r.width/2),o=Math.floor(r.height/2);for(let s=o-n;s<o+n;s++)for(let c=t-e;c<t+e;c++)$[s][c].B=1;return $},Yt=r=>{const e={width:r.width/$[0].length,height:r.height/$.length};for(let n=0;n<$.length;n++)for(let t=0;t<$[0].length;t++){const{A:o,B:s}=$[n][t];r.fill(o*255,s*255,0),r.rect(t*e.width,n*e.height,e.width,e.height)}},Nt=1,Pt=.5,K=.055,Tt=.062,Vt=()=>{for(let e=0;e<$.length;e++)for(let n=0;n<$[0].length;n++){const{A:t,B:o}=$[e][n],s=Q($,{x:n,y:e},"A"),c=Q($,{x:n,y:e},"B"),a=t+(Nt*s-t*o*o+K*(1-t)),l=o+(Pt*c+t*o*o-(Tt+K)*o);D[e][n]={A:a,B:l}}const r=$;return $=D,D=r,$},Q=(r,e,n)=>{const t=It(r,e);let o=0;for(const s of t){const{coord:c,weight:a}=s;o+=r[c.y][c.x][n]*a}return o},It=(r,e)=>{const{x:n,y:t}=e,o=r[0].length,s=r.length,c={coord:{x:n>0?n-1:o-1,y:t>0?t-1:s-1},weight:.05},a={coord:{x:n,y:t>0?t-1:s-1},weight:.2},l={coord:{x:n<o-1?n+1:0,y:t>0?t-1:s-1},weight:.05},h={coord:{x:n>0?n-1:o-1,y:t},weight:.2},f={coord:{x:n,y:t},weight:-1},i={coord:{x:n<o-1?n+1:0,y:t},weight:.2},m={coord:{x:n>0?n-1:o-1,y:t<s-1?t+1:0},weight:.05},v={coord:{x:n,y:t<s-1?t+1:0},weight:.2},u={coord:{x:n<o-1?n+1:0,y:t<s-1?t+1:0},weight:.05};return[c,a,l,h,f,i,m,v,u]};function jt(r){let e,n;return e=new O({props:{sketch:r[0]}}),{c(){b(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){x(e,t,o),n=!0},p:A,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function qt(r){const e={width:200,height:200};let n;return[o=>{o.setup=()=>{n=o,o.createCanvas(500,500),o.noStroke(),Xt(e)},o.draw=()=>{for(let s=0;s<5;s++)Vt();Yt(n)}}]}class Ot extends L{constructor(e){super(),M(this,e,qt,jt,E,{})}}function U(r,e,n){const t=r.slice();return t[1]=e[n],t}function Z(r,e,n){const t=r.slice();return t[1]=e[n],t}function zt(r){let e;return{c(){e=T("About")},l(n){e=V(n,"About")},m(n,t){k(n,e,t)},d(n){n&&_(e)}}}function Ft(r){let e=r[1].title+"",n;return{c(){n=T(e)},l(t){n=V(t,e)},m(t,o){k(t,n,o)},p:A,d(t){t&&_(n)}}}function tt(r){let e,n;return e=new st({props:{$$slots:{default:[Ft]},$$scope:{ctx:r}}}),{c(){b(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){x(e,t,o),n=!0},p(t,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Gt(r){let e,n,t,o;e=new st({props:{$$slots:{default:[zt]},$$scope:{ctx:r}}});let s=r[0],c=[];for(let l=0;l<s.length;l+=1)c[l]=tt(Z(r,s,l));const a=l=>p(c[l],1,1,()=>{c[l]=null});return{c(){b(e.$$.fragment),n=Y();for(let l=0;l<c.length;l+=1)c[l].c();t=N()},l(l){B(e.$$.fragment,l),n=P(l);for(let h=0;h<c.length;h+=1)c[h].l(l);t=N()},m(l,h){x(e,l,h),k(l,n,h);for(let f=0;f<c.length;f+=1)c[f].m(l,h);k(l,t,h),o=!0},p(l,h){const f={};if(h&64&&(f.$$scope={dirty:h,ctx:l}),e.$set(f),h&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const m=Z(l,s,i);c[i]?(c[i].p(m,h),d(c[i],1)):(c[i]=tt(m),c[i].c(),d(c[i],1),c[i].m(t.parentNode,t))}for(j(),i=s.length;i<c.length;i+=1)a(i);q()}},i(l){if(!o){d(e.$$.fragment,l);for(let h=0;h<s.length;h+=1)d(c[h]);o=!0}},o(l){p(e.$$.fragment,l),c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)p(c[h]);o=!1},d(l){y(e,l),l&&_(n),nt(c,l),l&&_(t)}}}function Ht(r){let e,n,t,o;return{c(){e=C("p"),n=T("Experiments with "),t=C("a"),o=T("Reaction-diffusion systems"),this.h()},l(s){e=S(s,"P",{});var c=X(e);n=V(c,"Experiments with "),t=S(c,"A",{href:!0,target:!0});var a=X(t);o=V(a,"Reaction-diffusion systems"),a.forEach(_),c.forEach(_),this.h()},h(){R(t,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),R(t,"target","none")},m(s,c){k(s,e,c),I(e,n),I(e,t),I(t,o)},p:A,d(s){s&&_(e)}}}function Jt(r){let e,n,t;var o=r[1].component;function s(c){return{}}return o&&(e=z(o,s())),{c(){e&&b(e.$$.fragment),n=Y()},l(c){e&&B(e.$$.fragment,c),n=P(c)},m(c,a){e&&x(e,c,a),k(c,n,a),t=!0},p(c,a){if(o!==(o=c[1].component)){if(e){j();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),q()}o?(e=z(o,s()),b(e.$$.fragment),d(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}},i(c){t||(e&&d(e.$$.fragment,c),t=!0)},o(c){e&&p(e.$$.fragment,c),t=!1},d(c){e&&y(e,c),c&&_(n)}}}function et(r){let e,n;return e=new ot({props:{$$slots:{default:[Jt]},$$scope:{ctx:r}}}),{c(){b(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){x(e,t,o),n=!0},p(t,o){const s={};o&64&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Kt(r){let e,n,t,o,s,c;e=new at({props:{$$slots:{default:[Gt]},$$scope:{ctx:r}}}),t=new ot({props:{$$slots:{default:[Ht]},$$scope:{ctx:r}}});let a=r[0],l=[];for(let f=0;f<a.length;f+=1)l[f]=et(U(r,a,f));const h=f=>p(l[f],1,1,()=>{l[f]=null});return{c(){b(e.$$.fragment),n=Y(),b(t.$$.fragment),o=Y();for(let f=0;f<l.length;f+=1)l[f].c();s=N()},l(f){B(e.$$.fragment,f),n=P(f),B(t.$$.fragment,f),o=P(f);for(let i=0;i<l.length;i+=1)l[i].l(f);s=N()},m(f,i){x(e,f,i),k(f,n,i),x(t,f,i),k(f,o,i);for(let m=0;m<l.length;m+=1)l[m].m(f,i);k(f,s,i),c=!0},p(f,i){const m={};i&64&&(m.$$scope={dirty:i,ctx:f}),e.$set(m);const v={};if(i&64&&(v.$$scope={dirty:i,ctx:f}),t.$set(v),i&1){a=f[0];let u;for(u=0;u<a.length;u+=1){const w=U(f,a,u);l[u]?(l[u].p(w,i),d(l[u],1)):(l[u]=et(w),l[u].c(),d(l[u],1),l[u].m(s.parentNode,s))}for(j(),u=a.length;u<l.length;u+=1)h(u);q()}},i(f){if(!c){d(e.$$.fragment,f),d(t.$$.fragment,f);for(let i=0;i<a.length;i+=1)d(l[i]);c=!0}},o(f){p(e.$$.fragment,f),p(t.$$.fragment,f),l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)p(l[i]);c=!1},d(f){y(e,f),f&&_(n),y(t,f),f&&_(o),nt(l,f),f&&_(s)}}}function Qt(r){let e,n,t;return n=new ft({props:{$$slots:{default:[Kt]},$$scope:{ctx:r}}}),{c(){e=C("div"),b(n.$$.fragment)},l(o){e=S(o,"DIV",{});var s=X(e);B(n.$$.fragment,s),s.forEach(_)},m(o,s){k(o,e,s),x(n,e,null),t=!0},p(o,[s]){const c={};s&64&&(c.$$scope={dirty:s,ctx:o}),n.$set(c)},i(o){t||(d(n.$$.fragment,o),t=!0)},o(o){p(n.$$.fragment,o),t=!1},d(o){o&&_(e),y(n)}}}function Ut(r){return[[{title:"V3",component:Ot},{title:"V2",component:St},{title:"V1",component:Bt}]]}class Zt extends L{constructor(e){super(),M(this,e,Ut,Qt,E,{})}}function te(r){let e,n;return e=new Zt({}),{c(){b(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){x(e,t,o),n=!0},p:A,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}class ce extends L{constructor(e){super(),M(this,e,null,te,E,{})}}export{ce as default};
