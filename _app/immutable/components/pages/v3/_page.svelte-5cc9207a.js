import{S as Jt,i as Kt,s as jt,k as h,l as m,m as b,h as i,n as P,b as O,D as e,B as St,o as ae,q as g,a as E,w as Ct,r as y,c as S,x as Tt,R as $,y as Pt,I as L,T as tt,u as yt,f as It,t as zt,z as At,J as le,K as se}from"../../../chunks/index-689c9b92.js";import{_ as ie}from"../../../chunks/preload-helper-41c905a7.js";import{A as ue}from"../../../chunks/AttractionTableChoice-fd543907.js";import{A as fe}from"../../../chunks/AttractionTableComponent-d5de4049.js";const oe=function(o,l,a,r,n){const d=(o-l)/(a-l)*(n-r)+r;return r<n?ne(d,r,n):ne(d,n,r)},ne=function(o,l,a){return Math.max(Math.min(o,a),l)},ce=()=>({white:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)},red:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)},green:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)},blue:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)}}),re=["white","red","green","blue"],he=()=>{const o=Math.floor(Math.random()*re.length);return re[o]},me=(o,l)=>{const a=[];for(let r=0;r<l;r++){const n={id:r,pos:{x:Math.random()*o.x,y:Math.random()*o.y},nextPos:{x:0,y:0},vel:{x:0,y:0},color:he()};a.push(n)}return a};function de(o){let l,a;return{c(){l=h("div"),a=h("canvas"),this.h()},l(r){l=m(r,"DIV",{class:!0});var n=b(l);a=m(n,"CANVAS",{id:!0,class:!0}),b(a).forEach(i),n.forEach(i),this.h()},h(){P(a,"id","canvas"),P(a,"class","svelte-bkdgvm"),P(l,"class","container svelte-bkdgvm")},m(r,n){O(r,l,n),e(l,a)},p:St,i:St,o:St,d(r){r&&i(l)}}}function pe(o,l,a){let{cellSize:r}=l,{cells:n}=l,{worldSize:d}=l,{drewFrame:C}=l,A;const J=["white","red","green","blue"],f={white:0,red:1,green:2,blue:3},R={white:"#ffedff",red:"#fc2a51",green:"#8ff97c",blue:"#77cfff",background:"#383b3d"},M=J.length,v=r,w=v*2;function U(){const s=document.getElementById("canvas");if(!s||!A)throw new Error("Canvas is not ready");const T=s.getContext("2d");if(T.fillStyle=R.background,T.fillRect(0,0,s.width,s.height),!n?.length){window.requestAnimationFrame(U);return}for(let N=0;N<n.length;N++){const D=n[N],k=Math.floor(oe(D.pos.x,0,d.x,0,s.width)),q=Math.floor(oe(D.pos.y,0,d.y,0,s.height));var I=f[D.color];const B=I*w,et=0,z=w,ot=w,K=k-v,G=q-v,_=w,c=w;T.drawImage(A,B,et,z,ot,K,G,_,c)}C(),window.requestAnimationFrame(U)}return ae(()=>{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas is not ready");s.getContext("2d"),s.width=1600,s.height=960,A=document.createElement("canvas"),A.width=M*w,A.height=w;const T=A.getContext("2d");if(!T)throw new Error("Offscreen canvas is not ready");for(var I=0;I<M;++I){const N=J[I],D=R[N];T.fillStyle=D,T.beginPath(),T.arc(I*w+v,v,v,0,2*Math.PI),T.closePath(),T.fill()}window.requestAnimationFrame(U)}),o.$$set=s=>{"cellSize"in s&&a(0,r=s.cellSize),"cells"in s&&a(1,n=s.cells),"worldSize"in s&&a(2,d=s.worldSize),"drewFrame"in s&&a(3,C=s.drewFrame)},[r,n,d,C]}class be extends Jt{constructor(l){super(),Kt(this,l,pe,de,jt,{cellSize:0,cells:1,worldSize:2,drewFrame:3})}}function _e(o){let l,a,r,n,d,C,A,J,f,R,M,v,w,U,s,T,I=o[7]*o[5]+"",N,D,k,q,B,et,z,ot,K=o[8]*o[5]+"",G,_,c,p,V,j,H,dt,Q,pt,X,at,Rt,mt=(o[1]?.length||0)+"",bt,kt,lt,Nt,_t,vt,W,st,Bt,Wt,it,Ft,Lt,ut,Ut,Dt,ft,Vt,Mt,nt,wt,Y,Z,Ot,Gt;return Q=new be({props:{cells:o[0],worldSize:o[4],cellSize:ve,drewFrame:o[15]}}),nt=new ue({props:{updateTable:o[9]}}),Y=new fe({props:{attractionTable:o[2],onUpdateTable:o[9]}}),{c(){l=h("h2"),a=g("V3 WIP"),r=E(),n=h("div"),d=h("p"),C=h("label"),A=g("Simulation definition"),J=E(),f=h("input"),R=E(),M=h("p"),v=h("label"),w=g("Simulation horizontal resolution"),U=E(),s=h("input"),T=g(`
        = `),N=g(I),D=E(),k=h("p"),q=h("label"),B=g("Simulation vertical resolution"),et=E(),z=h("input"),ot=g(`
        = `),G=g(K),_=E(),c=h("p"),p=h("label"),V=g("Number of particles"),j=E(),H=h("input"),dt=E(),Ct(Q.$$.fragment),pt=E(),X=h("div"),at=h("span"),Rt=g("Buffer size: "),bt=g(mt),kt=E(),lt=h("span"),Nt=g("Waited for frame: "),_t=g(o[3]),vt=E(),W=h("div"),st=h("button"),Bt=g("Reset simulation"),Wt=E(),it=h("button"),Ft=g("Center cells"),Lt=E(),ut=h("button"),Ut=g("Large Center cells"),Dt=E(),ft=h("button"),Vt=g("Rainbow cells"),Mt=E(),Ct(nt.$$.fragment),wt=E(),Ct(Y.$$.fragment),this.h()},l(t){l=m(t,"H2",{});var u=b(l);a=y(u,"V3 WIP"),u.forEach(i),r=S(t),n=m(t,"DIV",{});var F=b(n);d=m(F,"P",{});var rt=b(d);C=m(rt,"LABEL",{for:!0});var Qt=b(C);A=y(Qt,"Simulation definition"),Qt.forEach(i),J=S(rt),f=m(rt,"INPUT",{id:!0,type:!0}),rt.forEach(i),R=S(F),M=m(F,"P",{});var ct=b(M);v=m(ct,"LABEL",{for:!0});var Xt=b(v);w=y(Xt,"Simulation horizontal resolution"),Xt.forEach(i),U=S(ct),s=m(ct,"INPUT",{id:!0,type:!0}),T=y(ct,`
        = `),N=y(ct,I),ct.forEach(i),D=S(F),k=m(F,"P",{});var ht=b(k);q=m(ht,"LABEL",{for:!0});var Yt=b(q);B=y(Yt,"Simulation vertical resolution"),Yt.forEach(i),et=S(ht),z=m(ht,"INPUT",{id:!0,type:!0}),ot=y(ht,`
        = `),G=y(ht,K),ht.forEach(i),_=S(F),c=m(F,"P",{});var gt=b(c);p=m(gt,"LABEL",{for:!0});var Zt=b(p);V=y(Zt,"Number of particles"),Zt.forEach(i),j=S(gt),H=m(gt,"INPUT",{id:!0,type:!0}),gt.forEach(i),F.forEach(i),dt=S(t),Tt(Q.$$.fragment,t),pt=S(t),X=m(t,"DIV",{});var Et=b(X);at=m(Et,"SPAN",{});var qt=b(at);Rt=y(qt,"Buffer size: "),bt=y(qt,mt),qt.forEach(i),kt=S(Et),lt=m(Et,"SPAN",{});var Ht=b(lt);Nt=y(Ht,"Waited for frame: "),_t=y(Ht,o[3]),Ht.forEach(i),Et.forEach(i),vt=S(t),W=m(t,"DIV",{});var x=b(W);st=m(x,"BUTTON",{});var xt=b(st);Bt=y(xt,"Reset simulation"),xt.forEach(i),Wt=S(x),it=m(x,"BUTTON",{});var $t=b(it);Ft=y($t,"Center cells"),$t.forEach(i),Lt=S(x),ut=m(x,"BUTTON",{});var te=b(ut);Ut=y(te,"Large Center cells"),te.forEach(i),Dt=S(x),ft=m(x,"BUTTON",{});var ee=b(ft);Vt=y(ee,"Rainbow cells"),ee.forEach(i),x.forEach(i),Mt=S(t),Tt(nt.$$.fragment,t),wt=S(t),Tt(Y.$$.fragment,t),this.h()},h(){P(C,"for","attractionRadius"),P(f,"id","attractionRadius"),P(f,"type","number"),P(v,"for","horizontalResolution"),P(s,"id","horizontalResolution"),P(s,"type","number"),P(q,"for","verticalResolution"),P(z,"id","verticalResolution"),P(z,"type","number"),P(p,"for","nbParticles"),P(H,"id","nbParticles"),P(H,"type","number")},m(t,u){O(t,l,u),e(l,a),O(t,r,u),O(t,n,u),e(n,d),e(d,C),e(C,A),e(d,J),e(d,f),$(f,o[5]),e(n,R),e(n,M),e(M,v),e(v,w),e(M,U),e(M,s),$(s,o[7]),e(M,T),e(M,N),e(n,D),e(n,k),e(k,q),e(q,B),e(k,et),e(k,z),$(z,o[8]),e(k,ot),e(k,G),e(n,_),e(n,c),e(c,p),e(p,V),e(c,j),e(c,H),$(H,o[6]),O(t,dt,u),Pt(Q,t,u),O(t,pt,u),O(t,X,u),e(X,at),e(at,Rt),e(at,bt),e(X,kt),e(X,lt),e(lt,Nt),e(lt,_t),O(t,vt,u),O(t,W,u),e(W,st),e(st,Bt),e(W,Wt),e(W,it),e(it,Ft),e(W,Lt),e(W,ut),e(ut,Ut),e(W,Dt),e(W,ft),e(ft,Vt),O(t,Mt,u),Pt(nt,t,u),O(t,wt,u),Pt(Y,t,u),Z=!0,Ot||(Gt=[L(f,"input",o[16]),L(f,"change",o[10]),L(s,"input",o[17]),L(s,"change",o[10]),L(z,"input",o[18]),L(z,"change",o[10]),L(H,"input",o[19]),L(H,"change",o[10]),L(st,"click",o[14]),L(it,"click",o[11]),L(ut,"click",o[12]),L(ft,"click",o[13])],Ot=!0)},p(t,[u]){u&32&&tt(f.value)!==t[5]&&$(f,t[5]),u&128&&tt(s.value)!==t[7]&&$(s,t[7]),(!Z||u&160)&&I!==(I=t[7]*t[5]+"")&&yt(N,I),u&256&&tt(z.value)!==t[8]&&$(z,t[8]),(!Z||u&288)&&K!==(K=t[8]*t[5]+"")&&yt(G,K),u&64&&tt(H.value)!==t[6]&&$(H,t[6]);const F={};u&1&&(F.cells=t[0]),u&16&&(F.worldSize=t[4]),Q.$set(F),(!Z||u&2)&&mt!==(mt=(t[1]?.length||0)+"")&&yt(bt,mt),(!Z||u&8)&&yt(_t,t[3]);const rt={};u&4&&(rt.attractionTable=t[2]),Y.$set(rt)},i(t){Z||(It(Q.$$.fragment,t),It(nt.$$.fragment,t),It(Y.$$.fragment,t),Z=!0)},o(t){zt(Q.$$.fragment,t),zt(nt.$$.fragment,t),zt(Y.$$.fragment,t),Z=!1},d(t){t&&i(l),t&&i(r),t&&i(n),t&&i(dt),At(Q,t),t&&i(pt),t&&i(X),t&&i(vt),t&&i(W),t&&i(Mt),At(nt,t),t&&i(wt),At(Y,t),Ot=!1,le(Gt)}}}const ve=1;function Me(o,l,a){let r,n,d,C,A=0,J=0;const f={x:1600,y:960};let R=32,M=4e3,v=60,w=40,U;const s=async()=>{U=(await ie(()=>import("../../../chunks/simulation.worker-a89055d5.js"),[],import.meta.url)).default,B()},T=_=>{a(2,C=_),r.postMessage({msg:"updateTable",attractionTable:C}),a(1,d=[n.map(c=>c.pos)])},I=()=>{a(4,f.x=R*v,f),a(4,f.y=R*w,f),B()},N=()=>{for(const _ of n){const c=2*Math.random(),p=Math.random()*2*Math.PI,V=f.x/2+c*Math.cos(p),j=f.y/2+c*Math.sin(p);_.pos={x:V,y:j}}B(!0,!0)},D=()=>{for(const _ of n){const c=200*Math.random(),p=Math.random()*2*Math.PI,V=f.x/2+c*Math.cos(p),j=f.y/2+c*Math.sin(p);_.pos={x:V,y:j}}B(!0,!0)},k=()=>{const _=["white","red","green","blue"],c=f.x/4;for(const p of n){const V=Math.floor(p.pos.x/c),j=_[V];p.color=j}B(!0,!0)},q=()=>{B(!1,!1)},B=(_,c)=>{if(U===void 0)throw new Error("Worker is not initialized");r&&(r.postMessage({msg:"destroy"}),r.terminate()),r=new U;const p=V=>{d.push(V.data.positions)};r.onmessage=p,_||a(0,n=me(f,M)),c||a(2,C=ce()),a(1,d=[]),r.postMessage({msg:"start",cells:n,attractionTable:C,worldSize:f,maxAttractionRadius:R})},et=()=>{if(d.length>0){const _=Date.now();a(3,J=_-A),A=_;const c=d.shift()||[];if(a(1,d),c.length!==n.length)return;for(let p=0;p<n.length;p++)a(0,n[p].pos=c[p],n)}};ae(s),se(()=>r?.terminate());function z(){R=tt(this.value),a(5,R)}function ot(){v=tt(this.value),a(7,v)}function K(){w=tt(this.value),a(8,w)}function G(){M=tt(this.value),a(6,M)}return[n,d,C,J,f,R,M,v,w,T,I,N,D,k,q,et,z,ot,K,G]}class we extends Jt{constructor(l){super(),Kt(this,l,Me,_e,jt,{})}}function ge(o){let l,a;return l=new we({}),{c(){Ct(l.$$.fragment)},l(r){Tt(l.$$.fragment,r)},m(r,n){Pt(l,r,n),a=!0},p:St,i(r){a||(It(l.$$.fragment,r),a=!0)},o(r){zt(l.$$.fragment,r),a=!1},d(r){At(l,r)}}}class Te extends Jt{constructor(l){super(),Kt(this,l,null,ge,jt,{})}}export{Te as default};
