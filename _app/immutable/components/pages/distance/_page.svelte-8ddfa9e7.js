import{S as C,i as I,s as S,k as $,q as w,a as P,w as T,l as v,m as x,r as g,h as m,c as E,x as B,n as j,b as k,D as h,y as M,u as z,f as q,t as L,z as V,K as A,o as F,B as G}from"../../../chunks/index-689c9b92.js";import{P as H}from"../../../chunks/P5-a2aedab4.js";import{d as K}from"../../../chunks/cells-3d58d19f.js";const N=(r,e,a)=>{r.noStroke();for(const s of[...e].sort((c,o)=>c.color<o.color?-1:1)){r.fill(s.color);const c=r.map(s.pos.x,0,a.x,0,r.width),o=r.map(s.pos.y,0,a.y,0,r.height);r.circle(c,o,4)}};function R(r){let e,a,s,c,o,d,l=Math.trunc(r[0])+"",p,t,i,f,_;return f=new H({props:{sketch:r[1]}}),{c(){e=$("div"),a=$("p"),s=w(`Click left and right buttons to place the particles. This page is used to check the distance
        function works properly with wrapping map`),c=P(),o=$("span"),d=w("Distance between cells: "),p=w(l),t=P(),i=$("div"),T(f.$$.fragment),this.h()},l(n){e=v(n,"DIV",{});var u=x(e);a=v(u,"P",{});var D=x(a);s=g(D,`Click left and right buttons to place the particles. This page is used to check the distance
        function works properly with wrapping map`),D.forEach(m),c=E(u),o=v(u,"SPAN",{});var y=x(o);d=g(y,"Distance between cells: "),p=g(y,l),y.forEach(m),u.forEach(m),t=E(n),i=v(n,"DIV",{class:!0});var b=x(i);B(f.$$.fragment,b),b.forEach(m),this.h()},h(){j(i,"class","d-flex justify-content-center")},m(n,u){k(n,e,u),h(e,a),h(a,s),h(e,c),h(e,o),h(o,d),h(o,p),k(n,t,u),k(n,i,u),M(f,i,null),_=!0},p(n,[u]){(!_||u&1)&&l!==(l=Math.trunc(n[0])+"")&&z(p,l)},i(n){_||(q(f.$$.fragment,n),_=!0)},o(n){L(f.$$.fragment,n),_=!1},d(n){n&&m(e),n&&m(t),n&&m(i),V(f)}}}function X(r,e,a){let s,c,o,d=0;const l={x:100,y:70},p=t=>{t.setup=()=>{s=t,t.createCanvas(1e3,700),c={id:1,pos:{x:200,y:350},vel:{x:0,y:0},color:"white"},o={id:2,pos:{x:800,y:350},vel:{x:0,y:0},color:"blue"}},t.draw=()=>{if(t.background(0),N(t,[c,o],l),a(0,d=K(l,c.pos,o.pos)),t.mouseIsPressed){let i={x:t.map(t.mouseX,0,t.width,0,l.x),y:t.map(t.mouseY,0,t.height,0,l.y)};t.mouseButton===t.LEFT&&(c.pos=i),t.mouseButton===t.RIGHT&&(o.pos=i)}}};return A(()=>{s?.remove()}),F(()=>{document.addEventListener("contextmenu",t=>t.preventDefault())}),[d,p]}class Y extends C{constructor(e){super(),I(this,e,X,R,S,{})}}function J(r){let e,a;return e=new Y({}),{c(){T(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,c){M(e,s,c),a=!0},p:G,i(s){a||(q(e.$$.fragment,s),a=!0)},o(s){L(e.$$.fragment,s),a=!1},d(s){V(e,s)}}}class W extends C{constructor(e){super(),I(this,e,null,J,S,{})}}export{W as default};