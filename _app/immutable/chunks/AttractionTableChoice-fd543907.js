import{S as B,i as D,s as P,k as v,q as E,a as R,l as g,m as T,r as A,h as p,c as q,n as J,M,b as w,D as u,N as I,I as L,B as S,L as V,J as j,O as z}from"./index-689c9b92.js";import{g as F,t as y}from"./AttractionTableComponent-d5de4049.js";function C(o,e,c){const s=o.slice();return s[4]=e[c],s}function N(o){let e,c=o[4].name+"",s,r,l=o[4].description+"",i,h;return{c(){e=v("option"),s=E(c),r=E(` -
                `),i=E(l),h=R(),this.h()},l(f){e=g(f,"OPTION",{});var _=T(e);s=A(_,c),r=A(_,` -
                `),i=A(_,l),h=q(_),_.forEach(p),this.h()},h(){e.__value=o[4].table,e.value=e.__value},m(f,_){w(f,e,_),u(e,s),u(e,r),u(e,i),u(e,h)},p:S,d(f){f&&p(e)}}}function G(o){let e,c,s,r,l,i,h,f,_,m=y,n=[];for(let a=0;a<m.length;a+=1)n[a]=N(C(o,m,a));return{c(){e=v("div"),c=v("label"),s=E("Select a new attraction table"),r=R(),l=v("select"),i=v("option"),h=E("Random - A randomly generated table");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=g(a,"DIV",{});var d=T(e);c=g(d,"LABEL",{for:!0});var t=T(c);s=A(t,"Select a new attraction table"),t.forEach(p),r=q(d),l=g(d,"SELECT",{});var b=T(l);i=g(b,"OPTION",{});var k=T(i);h=A(k,"Random - A randomly generated table"),k.forEach(p);for(let O=0;O<n.length;O+=1)n[O].l(b);b.forEach(p),d.forEach(p),this.h()},h(){J(c,"for","tables"),i.__value=F(),i.value=i.__value,o[1]===void 0&&M(()=>o[2].call(l))},m(a,d){w(a,e,d),u(e,c),u(c,s),u(e,r),u(e,l),u(l,i),u(i,h);for(let t=0;t<n.length;t+=1)n[t].m(l,null);I(l,o[1]),f||(_=[L(l,"change",o[2]),L(l,"change",o[3])],f=!0)},p(a,[d]){if(d&0){m=y;let t;for(t=0;t<m.length;t+=1){const b=C(a,m,t);n[t]?n[t].p(b,d):(n[t]=N(b),n[t].c(),n[t].m(l,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=m.length}d&2&&I(l,a[1])},i:S,o:S,d(a){a&&p(e),V(n,a),f=!1,j(_)}}}function H(o,e,c){let s,{updateTable:r}=e;function l(){s=z(this),c(1,s)}const i=()=>r(s);return o.$$set=h=>{"updateTable"in h&&c(0,r=h.updateTable)},[r,s,l,i]}class U extends B{constructor(e){super(),D(this,e,H,G,P,{updateTable:0})}}export{U as A};
