import{S as ke,i as _e,s as Te,k as m,q as f,a as v,l as h,m as p,r as w,h as t,c as E,b as r,D as n,I as ie,B as L,J as ye,o as ve,w as Ee,x as xe,y as Pe,f as We,t as $e,z as Be}from"../../../chunks/index-689c9b92.js";import{_ as De}from"../../../chunks/preload-helper-41c905a7.js";import{d as Ie}from"../../../chunks/cells-3d58d19f.js";function Ce(x){let o,u,c,k,z,S,T,P,i,l,b,d,y,a,W,$,_,M,R,V,q,B,g,X,j,F,D,N,G,K,A,I,Q,H,C,Y,J,O,Z,ee,ce;return{c(){o=m("h1"),u=f("Web worker test"),c=v(),k=m("p"),z=f(`This page is used to test web workers implementation. The buttons launch the same computations
    with different way to do them.`),S=v(),T=m("p"),P=m("b"),i=f("The computation:"),l=f(` To test our mecanism we generate a bunch of coordinates. The goal is to compute
    the distance from each coordinates to each others. We choose this computation because it is somewhat
    expensive and is good enough to do a proof of concept.`),b=v(),d=m("p"),y=m("b"),a=f("Test sync"),W=f(" runs the computation directly in a sync function in the component"),$=v(),_=m("p"),M=m("b"),R=f("Test worker"),V=f(` does the same thing but in a web worker. The computation time is similar to the
    sync test case with some overhead probably due to the worker creation.`),q=v(),B=m("p"),g=m("b"),X=f("Test workers"),j=f(` splits the array of coordinates into several chuncks, each chunk is processed
    by a different worker which are executing in parallel. This leads to shorter execution times which
    makes this POC a success.`),F=v(),D=m("p"),N=m("b"),G=f("For now the workers only work with Chrome-based browser."),K=f(" I need to figure out why."),A=v(),I=m("button"),Q=f("Test sync"),H=v(),C=m("button"),Y=f("Test worker"),J=v(),O=m("button"),Z=f("Test workers")},l(e){o=h(e,"H1",{});var s=p(o);u=w(s,"Web worker test"),s.forEach(t),c=E(e),k=h(e,"P",{});var le=p(k);z=w(le,`This page is used to test web workers implementation. The buttons launch the same computations
    with different way to do them.`),le.forEach(t),S=E(e),T=h(e,"P",{});var te=p(T);P=h(te,"B",{});var ue=p(P);i=w(ue,"The computation:"),ue.forEach(t),l=w(te,` To test our mecanism we generate a bunch of coordinates. The goal is to compute
    the distance from each coordinates to each others. We choose this computation because it is somewhat
    expensive and is good enough to do a proof of concept.`),te.forEach(t),b=E(e),d=h(e,"P",{});var oe=p(d);y=h(oe,"B",{});var me=p(y);a=w(me,"Test sync"),me.forEach(t),W=w(oe," runs the computation directly in a sync function in the component"),oe.forEach(t),$=E(e),_=h(e,"P",{});var se=p(_);M=h(se,"B",{});var fe=p(M);R=w(fe,"Test worker"),fe.forEach(t),V=w(se,` does the same thing but in a web worker. The computation time is similar to the
    sync test case with some overhead probably due to the worker creation.`),se.forEach(t),q=E(e),B=h(e,"P",{});var ne=p(B);g=h(ne,"B",{});var he=p(g);X=w(he,"Test workers"),he.forEach(t),j=w(ne,` splits the array of coordinates into several chuncks, each chunk is processed
    by a different worker which are executing in parallel. This leads to shorter execution times which
    makes this POC a success.`),ne.forEach(t),F=E(e),D=h(e,"P",{});var re=p(D);N=h(re,"B",{});var pe=p(N);G=w(pe,"For now the workers only work with Chrome-based browser."),pe.forEach(t),K=w(re," I need to figure out why."),re.forEach(t),A=E(e),I=h(e,"BUTTON",{});var we=p(I);Q=w(we,"Test sync"),we.forEach(t),H=E(e),C=h(e,"BUTTON",{});var de=p(C);Y=w(de,"Test worker"),de.forEach(t),J=E(e),O=h(e,"BUTTON",{});var be=p(O);Z=w(be,"Test workers"),be.forEach(t)},m(e,s){r(e,o,s),n(o,u),r(e,c,s),r(e,k,s),n(k,z),r(e,S,s),r(e,T,s),n(T,P),n(P,i),n(T,l),r(e,b,s),r(e,d,s),n(d,y),n(y,a),n(d,W),r(e,$,s),r(e,_,s),n(_,M),n(M,R),n(_,V),r(e,q,s),r(e,B,s),n(B,g),n(g,X),n(B,j),r(e,F,s),r(e,D,s),n(D,N),n(N,G),n(D,K),r(e,A,s),r(e,I,s),n(I,Q),r(e,H,s),r(e,C,s),n(C,Y),r(e,J,s),r(e,O,s),n(O,Z),ee||(ce=[ie(I,"click",x[0]),ie(C,"click",x[2]),ie(O,"click",x[1])],ee=!0)},p:L,i:L,o:L,d(e){e&&t(o),e&&t(c),e&&t(k),e&&t(S),e&&t(T),e&&t(b),e&&t(d),e&&t($),e&&t(_),e&&t(q),e&&t(B),e&&t(F),e&&t(D),e&&t(A),e&&t(I),e&&t(H),e&&t(C),e&&t(J),e&&t(O),ee=!1,ye(ce)}}}const ae=5,U=5e4;function Oe(x){let o;const u=[],c={x:100,y:100},k=i=>{const l=[];for(let b=0;b<i;b++)l.push({x:b,y:b});return l},z=async()=>{const i=await De(()=>import("../../../chunks/smarterSingleWorker.worker-9f6cfd6c.js"),[],import.meta.url);o=new i.default;for(let l=0;l<ae;l++)u.push(new i.default)},S=()=>{const i=k(U);console.log("start sync computing",U,"pairs");const l=Date.now();for(const y of i)for(const a of i)Ie(c,y,a);const d=Date.now()-l;console.log("sync compute took",d,"ms")},T=()=>{if(u.some(a=>!a))throw new Error("Workers are not initialized");const i=k(U);let l=0;const b=()=>{if(l++,l!==u.length)return;const W=Date.now()-y;console.log("workers compute took",W,"ms")};u.forEach(a=>a.onmessage=b);const d=Math.floor(U/u.length),y=Date.now();for(let a=0;a<ae;a++){const W=u[a],$=a*d,_=a===ae-1?i.length:(a+1)*d;W.postMessage({minIndex:$,maxIndex:_,coords:i}),console.log({minIndex:$,maxIndex:_})}},P=()=>{if(!o)throw new Error("Worker is not initialized");const i=k(U);o.onmessage=()=>{const d=Date.now()-l;console.log("worker compute took",d,"ms")};const l=Date.now();o.postMessage({minIndex:0,maxIndex:i.length,coords:i})};return ve(z),[S,T,P]}class Se extends ke{constructor(o){super(),_e(this,o,Oe,Ce,Te,{})}}function ze(x){let o,u;return o=new Se({}),{c(){Ee(o.$$.fragment)},l(c){xe(o.$$.fragment,c)},m(c,k){Pe(o,c,k),u=!0},p:L,i(c){u||(We(o.$$.fragment,c),u=!0)},o(c){$e(o.$$.fragment,c),u=!1},d(c){Be(o,c)}}}class Ue extends ke{constructor(o){super(),_e(this,o,null,ze,Te,{})}}export{Ue as default};
