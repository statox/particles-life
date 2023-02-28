import{S as Ae,i as Oe,s as Be,k as _,q as C,a as N,l as g,m as E,r as P,h,c as U,n as z,I as Xt,b as q,D as o,J as Bt,K as R,B as ae,L as Ye,M as ze,N as Yt,e as xe,p as $e,O as te,P as le,o as Kt,w as Ze,x as Ge,y as Je,u as de,f as Ke,t as Qe,z as Xe,Q as xt}from"../../chunks/index-a8a449af.js";import{_ as $t}from"../../chunks/preload-helper-41c905a7.js";const zt=function(n,e,l,t,r){const s=(n-e)/(l-e)*(r-t)+t;return t<r?Rt(s,t,r):Rt(s,r,t)},Rt=function(n,e,l){return Math.max(Math.min(n,l),e)},Qt=()=>({white:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)},red:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)},green:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)},blue:{white:Math.floor(Math.random()*4-1),red:Math.floor(Math.random()*4-1),green:Math.floor(Math.random()*4-1),blue:Math.floor(Math.random()*4-1)}}),Ft=[{name:"Negs",description:"Only -1",table:{white:{white:-1,red:-1,green:-1,blue:-1},red:{white:-1,red:-1,green:-1,blue:-1},green:{white:-1,red:-1,green:-1,blue:-1},blue:{white:-1,red:-1,green:-1,blue:-1}}},{name:"Infinite motion",description:"Some very simple patterns of reds chasing whites in a seemlingly infinite randomness",table:{white:{white:-1,red:-1,green:0,blue:-1},red:{white:2,red:-1,green:1,blue:-1},green:{white:0,red:0,green:-1,blue:-1},blue:{white:-1,red:-1,green:-1,blue:-1}}},{name:"No cohesion",description:"Cells of the same color repulse each other",table:{white:{white:-1,red:0,green:0,blue:0},red:{white:0,red:-1,green:0,blue:0},green:{white:0,red:0,green:-1,blue:0},blue:{white:0,red:0,green:0,blue:-1}}},{name:"Spray around",description:"All the cells repulse each others, resulting in an even repartition of the cells",table:{white:{white:-1,red:-1,green:-1,blue:-1},red:{white:-1,red:-1,green:-1,blue:-1},green:{white:-1,red:-1,green:-1,blue:-1},blue:{white:-1,red:-1,green:-1,blue:-1}}},{name:"Simple snake",description:"The colors attract each other in a circular manner creating some moving snakes",table:{white:{white:-1,red:1,green:0,blue:0},red:{white:0,red:-1,green:1,blue:0},green:{white:0,red:0,green:-1,blue:1},blue:{white:1,red:0,green:0,blue:-1}}},{name:"Fishes",description:"The cells regroup in moving structures with white/red head and blue/green tail swimming through the world.",table:{white:{white:0,red:1,green:-1,blue:-2},red:{white:2,red:0,green:1,blue:-1},green:{white:-2,red:-2,green:-2,blue:1},blue:{white:2,red:-1,green:1,blue:-2}}},{name:"Movers and stills",description:"Create some moving objects mainly drivent by green and red and some living but still objects made by white, blue and red. Sometimes the movers grab still objects.",table:{white:{white:1,red:-1,green:0,blue:1},red:{white:2,red:1,green:2,blue:-1},green:{white:-1,red:-1,green:1,blue:-1},blue:{white:1,red:2,green:0,blue:0}}},{name:"White pushers",description:"Create movers propelled by groups of white cells",table:{white:{white:1,red:1,green:2,blue:-1},red:{white:0,red:-1,green:2,blue:2},green:{white:-1,red:0,green:-1,blue:2},blue:{white:-1,red:1,green:1,blue:-1}}},{name:"Large vessels",description:"Create large gliders with branches. The cells are ordered white, blue, red green",table:{white:{white:0,red:1,green:0,blue:2},red:{white:0,red:1,green:1,blue:-1},green:{white:-1,red:1,green:0,blue:1},blue:{white:-1,red:2,green:2,blue:2}}},{name:"Universe",description:"Galaxies with blue center, red and white rings turning around evolving in a green goo",table:{white:{white:-1,red:1,green:1,blue:1},red:{white:-1,red:-1,green:-1,blue:2},green:{white:-2,red:-1,green:0,blue:-1},blue:{white:1,red:2,green:-2,blue:2}}}];function Lt(n,e,l){const t=n.slice();return t[4]=e[l],t}function Dt(n){let e,l=n[4].name+"",t,r,s=n[4].description+"",d,f;return{c(){e=_("option"),t=C(l),r=C(` -
                `),d=C(s),f=N(),this.h()},l(a){e=g(a,"OPTION",{});var p=E(e);t=P(p,l),r=P(p,` -
                `),d=P(p,s),f=U(p),p.forEach(h),this.h()},h(){e.__value=n[4].table,e.value=e.__value},m(a,p){q(a,e,p),o(e,t),o(e,r),o(e,d),o(e,f)},p:ae,d(a){a&&h(e)}}}function el(n){let e,l,t,r,s,d,f,a,p,m=Ft,c=[];for(let w=0;w<m.length;w+=1)c[w]=Dt(Lt(n,m,w));return{c(){e=_("div"),l=_("label"),t=C("Select a new attraction table"),r=N(),s=_("select"),d=_("option"),f=C("Random - A randomly generated table");for(let w=0;w<c.length;w+=1)c[w].c();this.h()},l(w){e=g(w,"DIV",{});var I=E(e);l=g(I,"LABEL",{for:!0});var v=E(l);t=P(v,"Select a new attraction table"),v.forEach(h),r=U(I),s=g(I,"SELECT",{});var M=E(s);d=g(M,"OPTION",{});var b=E(d);f=P(b,"Random - A randomly generated table"),b.forEach(h);for(let T=0;T<c.length;T+=1)c[T].l(M);M.forEach(h),I.forEach(h),this.h()},h(){z(l,"for","tables"),d.__value=Qt(),d.value=d.__value,n[1]===void 0&&Xt(()=>n[2].call(s))},m(w,I){q(w,e,I),o(e,l),o(l,t),o(e,r),o(e,s),o(s,d),o(d,f);for(let v=0;v<c.length;v+=1)c[v].m(s,null);Bt(s,n[1]),a||(p=[R(s,"change",n[2]),R(s,"change",n[3])],a=!0)},p(w,[I]){if(I&0){m=Ft;let v;for(v=0;v<m.length;v+=1){const M=Lt(w,m,v);c[v]?c[v].p(M,I):(c[v]=Dt(M),c[v].c(),c[v].m(s,null))}for(;v<c.length;v+=1)c[v].d(1);c.length=m.length}I&2&&Bt(s,w[1])},i:ae,o:ae,d(w){w&&h(e),Ye(c,w),a=!1,ze(p)}}}function tl(n,e,l){let t,{updateTable:r}=e;function s(){t=Yt(this),l(1,t)}const d=()=>r(t);return n.$$set=f=>{"updateTable"in f&&l(0,r=f.updateTable)},[r,t,s,d]}class ll extends Ae{constructor(e){super(),Oe(this,e,tl,el,Be,{updateTable:0})}}function Vt(n,e,l){const t=n.slice();return t[13]=e[l],t}function Wt(n,e,l){const t=n.slice();t[16]=e[l];const r=t[1].get(t[0][t[13]][t[16]]);return t[17]=r,t}function jt(n,e,l){const t=n.slice();return t[17]=e[l],t}function qt(n){let e,l,t,r,s,d,f,a,p,m,c,w,I,v,M,b,T,y=n[2],B=[];for(let k=0;k<y.length;k+=1)B[k]=Ht(jt(n,y,k));let H=n[2],A=[];for(let k=0;k<H.length;k+=1)A[k]=Gt(Vt(n,H,k));return{c(){e=_("div"),l=_("button"),t=C("Randomize table"),r=N(),s=_("button"),d=C("Zero table"),f=N(),a=_("button"),p=C("Mutate table"),m=N(),c=_("div"),w=_("span"),I=C("Attraction"),v=N();for(let k=0;k<B.length;k+=1)B[k].c();M=N();for(let k=0;k<A.length;k+=1)A[k].c();this.h()},l(k){e=g(k,"DIV",{});var L=E(e);l=g(L,"BUTTON",{});var i=E(l);t=P(i,"Randomize table"),i.forEach(h),r=U(L),s=g(L,"BUTTON",{});var F=E(s);d=P(F,"Zero table"),F.forEach(h),f=U(L),a=g(L,"BUTTON",{});var O=E(a);p=P(O,"Mutate table"),O.forEach(h),L.forEach(h),m=U(k),c=g(k,"DIV",{class:!0});var W=E(c);w=g(W,"SPAN",{});var J=E(w);I=P(J,"Attraction"),J.forEach(h),v=U(W);for(let Z=0;Z<B.length;Z+=1)B[Z].l(W);M=U(W);for(let Z=0;Z<A.length;Z+=1)A[Z].l(W);W.forEach(h),this.h()},h(){z(c,"class","grid5cols svelte-41p0gs")},m(k,L){q(k,e,L),o(e,l),o(l,t),o(e,r),o(e,s),o(s,d),o(e,f),o(e,a),o(a,p),q(k,m,L),q(k,c,L),o(c,w),o(w,I),o(c,v);for(let i=0;i<B.length;i+=1)B[i].m(c,null);o(c,M);for(let i=0;i<A.length;i+=1)A[i].m(c,null);b||(T=[R(l,"click",n[6]),R(s,"click",n[8]),R(a,"click",n[7])],b=!0)},p(k,L){if(L&4){y=k[2];let i;for(i=0;i<y.length;i+=1){const F=jt(k,y,i);B[i]?B[i].p(F,L):(B[i]=Ht(F),B[i].c(),B[i].m(c,M))}for(;i<B.length;i+=1)B[i].d(1);B.length=y.length}if(L&63){H=k[2];let i;for(i=0;i<H.length;i+=1){const F=Vt(k,H,i);A[i]?A[i].p(F,L):(A[i]=Gt(F),A[i].c(),A[i].m(c,null))}for(;i<A.length;i+=1)A[i].d(1);A.length=H.length}},d(k){k&&h(e),k&&h(m),k&&h(c),Ye(B,k),Ye(A,k),b=!1,ze(T)}}}function Ht(n){let e,l=n[17]+"",t;return{c(){e=_("button"),t=C(l),this.h()},l(r){e=g(r,"BUTTON",{style:!0});var s=E(e);t=P(s,l),s.forEach(h),this.h()},h(){$e(e,"background-color",n[17]),e.disabled=!0},m(r,s){q(r,e,s),o(e,t)},p:ae,d(r){r&&h(e)}}}function Zt(n){let e,l,t,r,s,d,f,a,p,m,c;function w(){return n[10](n[13],n[16])}function I(){return n[11](n[13],n[16])}function v(){return n[12](n[13],n[16])}return{c(){e=_("span"),l=_("button"),t=C("-"),r=N(),s=_("button"),d=N(),f=_("button"),a=C("+"),p=N(),this.h()},l(M){e=g(M,"SPAN",{class:!0});var b=E(e);l=g(b,"BUTTON",{});var T=E(l);t=P(T,"-"),T.forEach(h),r=U(b),s=g(b,"BUTTON",{style:!0}),E(s).forEach(h),d=U(b),f=g(b,"BUTTON",{});var y=E(f);a=P(y,"+"),y.forEach(h),p=U(b),b.forEach(h),this.h()},h(){$e(s,"background-color",n[17]),z(e,"class","grid1row3cols svelte-41p0gs")},m(M,b){q(M,e,b),o(e,l),o(l,t),o(e,r),o(e,s),o(e,d),o(e,f),o(f,a),o(e,p),m||(c=[R(l,"click",w),R(s,"click",I),R(f,"click",v)],m=!0)},p(M,b){n=M,b&1&&$e(s,"background-color",n[17])},d(M){M&&h(e),m=!1,ze(c)}}}function Gt(n){let e,l=n[13]+"",t,r,s,d=n[2],f=[];for(let a=0;a<d.length;a+=1)f[a]=Zt(Wt(n,d,a));return{c(){e=_("button"),t=C(l),r=N();for(let a=0;a<f.length;a+=1)f[a].c();s=xe(),this.h()},l(a){e=g(a,"BUTTON",{style:!0});var p=E(e);t=P(p,l),p.forEach(h),r=U(a);for(let m=0;m<f.length;m+=1)f[m].l(a);s=xe(),this.h()},h(){$e(e,"background-color",n[13]),e.disabled=!0},m(a,p){q(a,e,p),o(e,t),q(a,r,p);for(let m=0;m<f.length;m+=1)f[m].m(a,p);q(a,s,p)},p(a,p){if(p&63){d=a[2];let m;for(m=0;m<d.length;m+=1){const c=Wt(a,d,m);f[m]?f[m].p(c,p):(f[m]=Zt(c),f[m].c(),f[m].m(s.parentNode,s))}for(;m<f.length;m+=1)f[m].d(1);f.length=d.length}},d(a){a&&h(e),a&&h(r),Ye(f,a),a&&h(s)}}}function nl(n){let e,l=n[0]&&qt(n);return{c(){l&&l.c(),e=xe()},l(t){l&&l.l(t),e=xe()},m(t,r){l&&l.m(t,r),q(t,e,r)},p(t,[r]){t[0]?l?l.p(t,r):(l=qt(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:ae,o:ae,d(t){l&&l.d(t),t&&h(e)}}}function ol(n,e,l){let{attractionTable:t}=e,{onUpdateTable:r}=e;const s=new Map([[-2,"#ff0000"],[-1,"#ff7d7d"],[0,"#000000"],[1,"#7dff7d"],[2,"#00ff00"]]),d=["white","red","green","blue"],f=(b,T)=>{let y=t[b][T];y++,y===3&&(y=-2),l(0,t[b][T]=y,t),r(t)},a=(b,T)=>{let y=t[b][T];y++,y===3&&(y=2),l(0,t[b][T]=y,t),r(t)},p=(b,T)=>{let y=t[b][T];y--,y===-3&&(y=-2),l(0,t[b][T]=y,t),r(t)},m=()=>{for(const b of Object.keys(t))for(const T of Object.keys(t[b])){const y=Math.floor(Math.random()*5)-2;l(0,t[b][T]=y,t)}r(t)},c=()=>{const b=Math.floor(Math.random()*d.length),T=d[b],y=Math.floor(Math.random()*d.length),B=d[y],H=Math.floor(Math.random()*5)-2;l(0,t[T][B]=H,t),r(t)},w=()=>{for(const b of Object.keys(t))for(const T of Object.keys(t[b]))l(0,t[b][T]=0,t);r(t)},I=(b,T)=>p(b,T),v=(b,T)=>f(b,T),M=(b,T)=>a(b,T);return n.$$set=b=>{"attractionTable"in b&&l(0,t=b.attractionTable),"onUpdateTable"in b&&l(9,r=b.onUpdateTable)},[t,s,d,f,a,p,m,c,w,r,I,v,M]}class rl extends Ae{constructor(e){super(),Oe(this,e,ol,nl,Be,{attractionTable:0,onUpdateTable:9})}}function al(n){let e,l,t,r,s,d,f,a,p;return{c(){e=_("div"),l=_("canvas"),t=N(),r=_("label"),s=C("Limit FPS"),d=N(),f=_("input"),this.h()},l(m){e=g(m,"DIV",{class:!0});var c=E(e);l=g(c,"CANVAS",{id:!0,class:!0}),E(l).forEach(h),t=U(c),r=g(c,"LABEL",{for:!0});var w=E(r);s=P(w,"Limit FPS"),w.forEach(h),d=U(c),f=g(c,"INPUT",{id:!0,type:!0,min:!0}),c.forEach(h),this.h()},h(){z(l,"id","canvas"),z(l,"class","svelte-bkdgvm"),z(r,"for","maxFPSInput"),z(f,"id","maxFPSInput"),z(f,"type","number"),z(f,"min","1"),z(e,"class","container svelte-bkdgvm")},m(m,c){q(m,e,c),o(e,l),o(e,t),o(e,r),o(r,s),o(e,d),o(e,f),te(f,n[1]),a||(p=[R(f,"input",n[8]),R(f,"change",n[9])],a=!0)},p(m,[c]){c&2&&le(f.value)!==m[1]&&te(f,m[1])},i:ae,o:ae,d(m){m&&h(e),a=!1,ze(p)}}}function sl(n,e,l){let{cellSize:t}=e,{cells:r}=e,{worldSize:s}=e,{drewFrame:d}=e,{showColors:f}=e,a;const p=["white","red","green","blue"],m={white:0,red:1,green:2,blue:3},c={white:"#ffedff",red:"#fc2a51",green:"#8ff97c",blue:"#77cfff",background:"#383b3d"},w=p.length,I=t,v=I*2;let M=25,b=M,T,y,B,H;function A(){const i=document.getElementById("canvas");if(!i||!a)throw new Error("Canvas is not ready");if(window.requestAnimationFrame(A),B=Date.now(),H=B-y,H<=T)return;y=B-H%T;const F=i.getContext("2d");if(!F)throw new Error("Ctx is not ready");if(F.fillStyle=c.background,F.fillRect(0,0,i.width,i.height),!r?.length){window.requestAnimationFrame(A);return}for(let W=0;W<r.length;W++){const J=r[W],Z=Math.floor(zt(J.pos.x,0,s.x,0,i.width)),K=Math.floor(zt(J.pos.y,0,s.y,0,i.height));var O=f?m[J.color]:0;const se=O*v,X=0,he=v,G=v,Y=Z-I,V=K-I,j=v,D=v;F.drawImage(a,se,X,he,G,Y,V,j,D)}d()}Kt(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas is not ready");i.width=1600,i.height=960,a=document.createElement("canvas"),a.width=w*v,a.height=v;const F=a.getContext("2d");if(!F)throw new Error("Offscreen canvas is not ready");for(var O=0;O<w;++O){const W=p[O],J=c[W];F.fillStyle=J,F.beginPath(),F.arc(O*v+I,I,I,0,2*Math.PI),F.closePath(),F.fill()}l(2,T=1e3/M),y=Date.now(),window.requestAnimationFrame(A)});function k(){b=le(this.value),l(1,b)}const L=()=>{l(0,M=b),l(2,T=1e3/M)};return n.$$set=i=>{"cellSize"in i&&l(3,t=i.cellSize),"cells"in i&&l(4,r=i.cells),"worldSize"in i&&l(5,s=i.worldSize),"drewFrame"in i&&l(6,d=i.drewFrame),"showColors"in i&&l(7,f=i.showColors)},[M,b,T,t,r,s,d,f,k,L]}class il extends Ae{constructor(e){super(),Oe(this,e,sl,al,Be,{cellSize:3,cells:4,worldSize:5,drewFrame:6,showColors:7})}}const Jt=["white","red","green","blue"],ul=()=>{const n=Math.floor(Math.random()*Jt.length);return Jt[n]},cl=(n,e)=>{const l=[];for(let t=0;t<e;t++){const r={id:t,pos:{x:Math.random()*n.x,y:Math.random()*n.y},nextPos:{x:0,y:0},vel:{x:0,y:0},color:ul()};l.push(r)}return l};function hl(n){let e,l,t,r,s,d,f,a,p,m,c,w,I,v=n[8]*n[6]+"",M,b,T,y,B,H,A,k,L=n[9]*n[6]+"",i,F,O,W,J,Z,K,se,X,he,G,Y,V,j,D=(n[1]?.length||0)-n[11]+"",x,ne,be,et,Re,tt,me,lt,Fe,nt,Q,Le,ot,oe,_e,rt,at,ge,st,it,pe,Pe=n[4]?"Play":"Pause",De,ut,Ie,we,Ne=n[5]?"Hide colors":"Show colors",Ve,We,$,ve,ct,ht,Te,ft,dt,Me,bt,mt,Ee,_t,je,fe,qe,ie,ee,gt,Tt;return X=new il({props:{cells:n[0],worldSize:n[10],cellSize:fl,showColors:n[5],drewFrame:n[19]}}),fe=new ll({props:{updateTable:n[12]}}),ie=new rl({props:{attractionTable:n[2],onUpdateTable:n[12]}}),{c(){e=_("div"),l=_("p"),t=_("label"),r=C("Simulation definition"),s=N(),d=_("input"),f=N(),a=_("p"),p=_("label"),m=C("Simulation horizontal resolution"),c=N(),w=_("input"),I=C(`
        = `),M=C(v),b=N(),T=_("p"),y=_("label"),B=C("Simulation vertical resolution"),H=N(),A=_("input"),k=C(`
        = `),i=C(L),F=N(),O=_("p"),W=_("label"),J=C("Number of particles"),Z=N(),K=_("input"),se=N(),Ze(X.$$.fragment),he=N(),G=_("div"),Y=_("div"),V=_("span"),j=C("Buffer size: "),x=C(D),ne=N(),be=_("span"),et=C("Current frame: "),Re=C(n[11]),tt=N(),me=_("span"),lt=C("Frame length (ms): "),Fe=C(n[3]),nt=N(),Q=_("input"),ot=N(),oe=_("div"),_e=_("button"),rt=C("Replay from start"),at=N(),ge=_("button"),st=C("Catchup last frame"),it=N(),pe=_("button"),De=C(Pe),ut=N(),Ie=_("div"),we=_("button"),Ve=C(Ne),We=N(),$=_("div"),ve=_("button"),ct=C("Reset cells"),ht=N(),Te=_("button"),ft=C("Center cells"),dt=N(),Me=_("button"),bt=C("Large Center cells"),mt=N(),Ee=_("button"),_t=C("Rainbow cells"),je=N(),Ze(fe.$$.fragment),qe=N(),Ze(ie.$$.fragment),this.h()},l(u){e=g(u,"DIV",{});var S=E(e);l=g(S,"P",{});var re=E(l);t=g(re,"LABEL",{for:!0});var Ue=E(t);r=P(Ue,"Simulation definition"),Ue.forEach(h),s=U(re),d=g(re,"INPUT",{id:!0,type:!0}),re.forEach(h),f=U(S),a=g(S,"P",{});var ke=E(a);p=g(ke,"LABEL",{for:!0});var Mt=E(p);m=P(Mt,"Simulation horizontal resolution"),Mt.forEach(h),c=U(ke),w=g(ke,"INPUT",{id:!0,type:!0}),I=P(ke,`
        = `),M=P(ke,v),ke.forEach(h),b=U(S),T=g(S,"P",{});var ye=E(T);y=g(ye,"LABEL",{for:!0});var Et=E(y);B=P(Et,"Simulation vertical resolution"),Et.forEach(h),H=U(ye),A=g(ye,"INPUT",{id:!0,type:!0}),k=P(ye,`
        = `),i=P(ye,L),ye.forEach(h),F=U(S),O=g(S,"P",{});var He=E(O);W=g(He,"LABEL",{for:!0});var kt=E(W);J=P(kt,"Number of particles"),kt.forEach(h),Z=U(He),K=g(He,"INPUT",{id:!0,type:!0}),He.forEach(h),S.forEach(h),se=U(u),Ge(X.$$.fragment,u),he=U(u),G=g(u,"DIV",{});var ue=E(G);Y=g(ue,"DIV",{});var Se=E(Y);V=g(Se,"SPAN",{});var pt=E(V);j=P(pt,"Buffer size: "),x=P(pt,D),pt.forEach(h),ne=U(Se),be=g(Se,"SPAN",{});var wt=E(be);et=P(wt,"Current frame: "),Re=P(wt,n[11]),wt.forEach(h),tt=U(Se),me=g(Se,"SPAN",{});var vt=E(me);lt=P(vt,"Frame length (ms): "),Fe=P(vt,n[3]),vt.forEach(h),Se.forEach(h),nt=U(ue),Q=g(ue,"INPUT",{type:!0,min:!0,max:!0,class:!0,id:!0}),ot=U(ue),oe=g(ue,"DIV",{});var Ce=E(oe);_e=g(Ce,"BUTTON",{});var yt=E(_e);rt=P(yt,"Replay from start"),yt.forEach(h),at=U(Ce),ge=g(Ce,"BUTTON",{});var St=E(ge);st=P(St,"Catchup last frame"),St.forEach(h),it=U(Ce),pe=g(Ce,"BUTTON",{});var Ct=E(pe);De=P(Ct,Pe),Ct.forEach(h),Ce.forEach(h),ut=U(ue),Ie=g(ue,"DIV",{});var Pt=E(Ie);we=g(Pt,"BUTTON",{});var It=E(we);Ve=P(It,Ne),It.forEach(h),Pt.forEach(h),ue.forEach(h),We=U(u),$=g(u,"DIV",{});var ce=E($);ve=g(ce,"BUTTON",{});var Nt=E(ve);ct=P(Nt,"Reset cells"),Nt.forEach(h),ht=U(ce),Te=g(ce,"BUTTON",{});var Ut=E(Te);ft=P(Ut,"Center cells"),Ut.forEach(h),dt=U(ce),Me=g(ce,"BUTTON",{});var At=E(Me);bt=P(At,"Large Center cells"),At.forEach(h),mt=U(ce),Ee=g(ce,"BUTTON",{});var Ot=E(Ee);_t=P(Ot,"Rainbow cells"),Ot.forEach(h),ce.forEach(h),je=U(u),Ge(fe.$$.fragment,u),qe=U(u),Ge(ie.$$.fragment,u),this.h()},h(){z(t,"for","attractionRadius"),z(d,"id","attractionRadius"),z(d,"type","number"),z(p,"for","horizontalResolution"),z(w,"id","horizontalResolution"),z(w,"type","number"),z(y,"for","verticalResolution"),z(A,"id","verticalResolution"),z(A,"type","number"),z(W,"for","nbParticles"),z(K,"id","nbParticles"),z(K,"type","number"),z(Q,"type","range"),z(Q,"min","1"),z(Q,"max",Le=n[1]?.length?n[1].length-1:0),z(Q,"class","slider"),z(Q,"id","frameIndexSlider")},m(u,S){q(u,e,S),o(e,l),o(l,t),o(t,r),o(l,s),o(l,d),te(d,n[6]),o(e,f),o(e,a),o(a,p),o(p,m),o(a,c),o(a,w),te(w,n[8]),o(a,I),o(a,M),o(e,b),o(e,T),o(T,y),o(y,B),o(T,H),o(T,A),te(A,n[9]),o(T,k),o(T,i),o(e,F),o(e,O),o(O,W),o(W,J),o(O,Z),o(O,K),te(K,n[7]),q(u,se,S),Je(X,u,S),q(u,he,S),q(u,G,S),o(G,Y),o(Y,V),o(V,j),o(V,x),o(Y,ne),o(Y,be),o(be,et),o(be,Re),o(Y,tt),o(Y,me),o(me,lt),o(me,Fe),o(G,nt),o(G,Q),te(Q,n[11]),o(G,ot),o(G,oe),o(oe,_e),o(_e,rt),o(oe,at),o(oe,ge),o(ge,st),o(oe,it),o(oe,pe),o(pe,De),o(G,ut),o(G,Ie),o(Ie,we),o(we,Ve),q(u,We,S),q(u,$,S),o($,ve),o(ve,ct),o($,ht),o($,Te),o(Te,ft),o($,dt),o($,Me),o(Me,bt),o($,mt),o($,Ee),o(Ee,_t),q(u,je,S),Je(fe,u,S),q(u,qe,S),Je(ie,u,S),ee=!0,gt||(Tt=[R(d,"input",n[20]),R(d,"change",n[13]),R(w,"input",n[21]),R(w,"change",n[13]),R(A,"input",n[22]),R(A,"change",n[13]),R(K,"input",n[23]),R(K,"change",n[13]),R(Q,"change",n[24]),R(Q,"input",n[24]),R(_e,"click",n[18]),R(ge,"click",n[25]),R(pe,"click",n[26]),R(we,"click",n[27]),R(ve,"click",n[17]),R(Te,"click",n[14]),R(Me,"click",n[15]),R(Ee,"click",n[16])],gt=!0)},p(u,S){S[0]&64&&le(d.value)!==u[6]&&te(d,u[6]),S[0]&256&&le(w.value)!==u[8]&&te(w,u[8]),(!ee||S[0]&320)&&v!==(v=u[8]*u[6]+"")&&de(M,v),S[0]&512&&le(A.value)!==u[9]&&te(A,u[9]),(!ee||S[0]&576)&&L!==(L=u[9]*u[6]+"")&&de(i,L),S[0]&128&&le(K.value)!==u[7]&&te(K,u[7]);const re={};S[0]&1&&(re.cells=u[0]),S[0]&1024&&(re.worldSize=u[10]),S[0]&32&&(re.showColors=u[5]),X.$set(re),(!ee||S[0]&2050)&&D!==(D=(u[1]?.length||0)-u[11]+"")&&de(x,D),(!ee||S[0]&2048)&&de(Re,u[11]),(!ee||S[0]&8)&&de(Fe,u[3]),(!ee||S[0]&2&&Le!==(Le=u[1]?.length?u[1].length-1:0))&&z(Q,"max",Le),S[0]&2048&&te(Q,u[11]),(!ee||S[0]&16)&&Pe!==(Pe=u[4]?"Play":"Pause")&&de(De,Pe),(!ee||S[0]&32)&&Ne!==(Ne=u[5]?"Hide colors":"Show colors")&&de(Ve,Ne);const Ue={};S[0]&4&&(Ue.attractionTable=u[2]),ie.$set(Ue)},i(u){ee||(Ke(X.$$.fragment,u),Ke(fe.$$.fragment,u),Ke(ie.$$.fragment,u),ee=!0)},o(u){Qe(X.$$.fragment,u),Qe(fe.$$.fragment,u),Qe(ie.$$.fragment,u),ee=!1},d(u){u&&h(e),u&&h(se),Xe(X,u),u&&h(he),u&&h(G),u&&h(We),u&&h($),u&&h(je),Xe(fe,u),u&&h(qe),Xe(ie,u),gt=!1,ze(Tt)}}}const fl=1;function dl(n,e,l){let t,r,s,d,f=0,a=0,p=!1,m=!0,c=32,w=4e3,I=30,v=20;const M={x:c*I,y:c*v};let b;const T=async()=>{b=(await $t(()=>import("../../chunks/simulation.worker-abfcfea4.js"),[],import.meta.url)).default,i()},y=V=>{l(2,d=V),t.postMessage({msg:"updateTable",attractionTable:d}),l(1,s=[r.map(j=>j.pos)]),l(11,O=0)},B=()=>{l(10,M.x=c*I,M),l(10,M.y=c*v,M),i()},H=()=>{for(const V of r){const j=2*Math.random(),D=Math.random()*2*Math.PI,x=M.x/2+j*Math.cos(D),ne=M.y/2+j*Math.sin(D);V.pos={x,y:ne}}i(!0,!0)},A=()=>{for(const V of r){const j=200*Math.random(),D=Math.random()*2*Math.PI,x=M.x/2+j*Math.cos(D),ne=M.y/2+j*Math.sin(D);V.pos={x,y:ne}}i(!0,!0)},k=()=>{const V=["white","red","green","blue"],j=M.x/4;for(const D of r){const x=Math.floor(D.pos.x/j),ne=V[x];D.color=ne}i(!0,!0)},L=()=>{i(!1,!0)},i=(V,j)=>{if(b===void 0)throw new Error("Worker is not initialized");t&&(t.postMessage({msg:"destroy"}),t.terminate()),t=new b;const D=x=>{s.push(x.data.positions)};t.onmessage=D,V||l(0,r=cl(M,w)),j||l(2,d=Qt()),l(1,s=[]),l(11,O=0),t.postMessage({msg:"start",cells:r,attractionTable:d,worldSize:M,maxAttractionRadius:c})},F=()=>{l(11,O=0)};let O=0;const W=()=>{if(s.length-1>O){const V=Date.now();l(3,a=V-f),f=V,p||l(11,O++,O);const j=s[O];if(l(1,s),j.length!==r.length)return;for(let D=0;D<r.length;D++)l(0,r[D].pos=j[D],r)}};Kt(T),xt(()=>t?.terminate());function J(){c=le(this.value),l(6,c)}function Z(){I=le(this.value),l(8,I)}function K(){v=le(this.value),l(9,v)}function se(){w=le(this.value),l(7,w)}function X(){O=le(this.value),l(11,O)}return[r,s,d,a,p,m,c,w,I,v,M,O,y,B,H,A,k,L,F,W,J,Z,K,se,X,()=>l(11,O=s.length-1||0),()=>l(4,p=!p),()=>l(5,m=!m)]}class bl extends Ae{constructor(e){super(),Oe(this,e,dl,hl,Be,{},null,[-1,-1])}}function ml(n){let e,l;return e=new bl({}),{c(){Ze(e.$$.fragment)},l(t){Ge(e.$$.fragment,t)},m(t,r){Je(e,t,r),l=!0},p:ae,i(t){l||(Ke(e.$$.fragment,t),l=!0)},o(t){Qe(e.$$.fragment,t),l=!1},d(t){Xe(e,t)}}}class pl extends Ae{constructor(e){super(),Oe(this,e,null,ml,Be,{})}}export{pl as default};
