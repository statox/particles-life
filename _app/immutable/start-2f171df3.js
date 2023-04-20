import{S as Qe,i as et,s as tt,a as nt,e as V,c as at,b as G,g as ue,t as q,d as de,f as C,h as F,j as rt,o as Le,k as ot,l as st,m as it,n as ve,p as T,q as lt,r as ct,u as ft,v as z,w as H,x as Pe,y as W,z as Y,A as le}from"./chunks/index-2f3b6d71.js";import{S as Ze,I as D,g as Ge,f as Je,a as be,b as ce,s as M,i as Ke,c as fe,P as ze,d as ut,e as dt}from"./chunks/singletons-64e22588.js";import{_ as K}from"./chunks/preload-helper-41c905a7.js";import{s as pt}from"./chunks/paths-b4419565.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function _t(r){return r.split("%25").map(decodeURI).join("%25")}function mt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function yt(r,e){const n=new URL(r);for(const s of gt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return wt(n),n}function wt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const vt="/__data.json";function bt(r){return r.replace(/\/$/,"")+vt}function Et(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:e?.method||"GET")!=="GET"&&ee.delete(je(r)),pe(r,e));const ee=new Map;function kt(r,e){const n=je(r,e),s=document.querySelector(n);if(s?.textContent){const{body:o,...u}=JSON.parse(s.textContent),a=s.getAttribute("data-ttl");return a&&ee.set(n,{body:o,init:u,ttl:1e3*Number(a)}),Promise.resolve(new Response(o,u))}return pe(r,e)}function St(r,e,n){if(ee.size>0){const s=je(r,n),o=ee.get(s);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(o.body,o.init);ee.delete(s)}}return pe(e,n)}function je(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e?.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Et(e.body)}"]`),s}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Lt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${It(r).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const a=s.split(/\[(.+?)\](?!\])/);return"/"+a.map((p,_)=>{if(_%2){if(p.startsWith("x+"))return Ee(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return Ee(String.fromCharCode(...p.slice(2).split("-").map(O=>parseInt(O,16))));const y=Rt.exec(p);if(!y)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,k,N,$]=y;return e.push({name:N,matcher:$,optional:!!v,rest:!!k,chained:k?_===1&&a[0]==="":!1}),k?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Ee(p)}).join("")}).join("")}/?$`),params:e}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function It(r){return r.slice(1).split("/").filter(Ot)}function At(r,e,n){const s={},o=r.slice(1);let u="";for(let a=0;a<e.length;a+=1){const f=e[a];let p=o[a];if(f.chained&&f.rest&&u&&(p=p?u+"/"+p:u),u="",p===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!n[f.matcher](p)){if(f.optional&&f.chained){let _=o.indexOf(void 0,a);if(_===-1){const y=e[a+1];if(y?.rest&&y.chained)u=p;else return}for(;_>=a;)o[_]=o[_-1],_-=1;continue}return}s[f.name]=p}}if(!u)return s}function Ee(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Pt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([f,[p,_,y]])=>{const{pattern:v,params:k}=Lt(f),N={id:f,exec:$=>{const O=v.exec($);if(O)return At(O,k,s)},errors:[1,...y||[]].map($=>r[$]),layouts:[0,..._||[]].map(a),leaf:u(p)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function u(f){const p=f<0;return p&&(f=~f),[p,r[f]]}function a(f){return f===void 0?f:[o.has(f),r[f]]}}function jt(r){let e,n,s;var o=r[0][0];function u(a){return{props:{data:a[2],form:a[1]}}}return o&&(e=z(o,u(r))),{c(){e&&H(e.$$.fragment),n=V()},l(a){e&&Pe(e.$$.fragment,a),n=V()},m(a,f){e&&W(e,a,f),G(a,n,f),s=!0},p(a,f){const p={};if(f&4&&(p.data=a[2]),f&2&&(p.form=a[1]),o!==(o=a[0][0])){if(e){ue();const _=e;q(_.$$.fragment,1,0,()=>{Y(_,1)}),de()}o?(e=z(o,u(a)),H(e.$$.fragment),C(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(a){s||(e&&C(e.$$.fragment,a),s=!0)},o(a){e&&q(e.$$.fragment,a),s=!1},d(a){a&&F(n),e&&Y(e,a)}}}function Nt(r){let e,n,s;var o=r[0][0];function u(a){return{props:{data:a[2],$$slots:{default:[Ut]},$$scope:{ctx:a}}}}return o&&(e=z(o,u(r))),{c(){e&&H(e.$$.fragment),n=V()},l(a){e&&Pe(e.$$.fragment,a),n=V()},m(a,f){e&&W(e,a,f),G(a,n,f),s=!0},p(a,f){const p={};if(f&4&&(p.data=a[2]),f&523&&(p.$$scope={dirty:f,ctx:a}),o!==(o=a[0][0])){if(e){ue();const _=e;q(_.$$.fragment,1,0,()=>{Y(_,1)}),de()}o?(e=z(o,u(a)),H(e.$$.fragment),C(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(a){s||(e&&C(e.$$.fragment,a),s=!0)},o(a){e&&q(e.$$.fragment,a),s=!1},d(a){a&&F(n),e&&Y(e,a)}}}function Ut(r){let e,n,s;var o=r[0][1];function u(a){return{props:{data:a[3],form:a[1]}}}return o&&(e=z(o,u(r))),{c(){e&&H(e.$$.fragment),n=V()},l(a){e&&Pe(e.$$.fragment,a),n=V()},m(a,f){e&&W(e,a,f),G(a,n,f),s=!0},p(a,f){const p={};if(f&8&&(p.data=a[3]),f&2&&(p.form=a[1]),o!==(o=a[0][1])){if(e){ue();const _=e;q(_.$$.fragment,1,0,()=>{Y(_,1)}),de()}o?(e=z(o,u(a)),H(e.$$.fragment),C(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else o&&e.$set(p)},i(a){s||(e&&C(e.$$.fragment,a),s=!0)},o(a){e&&q(e.$$.fragment,a),s=!1},d(a){a&&F(n),e&&Y(e,a)}}}function He(r){let e,n=r[5]&&We(r);return{c(){e=ot("div"),n&&n.c(),this.h()},l(s){e=st(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=it(e);n&&n.l(o),o.forEach(F),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),T(e,"position","absolute"),T(e,"left","0"),T(e,"top","0"),T(e,"clip","rect(0 0 0 0)"),T(e,"clip-path","inset(50%)"),T(e,"overflow","hidden"),T(e,"white-space","nowrap"),T(e,"width","1px"),T(e,"height","1px")},m(s,o){G(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=We(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&F(e),n&&n.d()}}}function We(r){let e;return{c(){e=lt(r[6])},l(n){e=ct(n,r[6])},m(n,s){G(n,e,s)},p(n,s){s&64&&ft(e,n[6])},d(n){n&&F(e)}}}function $t(r){let e,n,s,o,u;const a=[Nt,jt],f=[];function p(y,v){return y[0][1]?0:1}e=p(r),n=f[e]=a[e](r);let _=r[4]&&He(r);return{c(){n.c(),s=nt(),_&&_.c(),o=V()},l(y){n.l(y),s=at(y),_&&_.l(y),o=V()},m(y,v){f[e].m(y,v),G(y,s,v),_&&_.m(y,v),G(y,o,v),u=!0},p(y,[v]){let k=e;e=p(y),e===k?f[e].p(y,v):(ue(),q(f[k],1,1,()=>{f[k]=null}),de(),n=f[e],n?n.p(y,v):(n=f[e]=a[e](y),n.c()),C(n,1),n.m(s.parentNode,s)),y[4]?_?_.p(y,v):(_=He(y),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(y){u||(C(n),u=!0)},o(y){q(n),u=!1},d(y){f[e].d(y),y&&F(s),_&&_.d(y),y&&F(o)}}}function Tt(r,e,n){let{stores:s}=e,{page:o}=e,{components:u}=e,{form:a}=e,{data_0:f=null}=e,{data_1:p=null}=e;rt(s.page.notify);let _=!1,y=!1,v=null;return Le(()=>{const k=s.page.subscribe(()=>{_&&(n(5,y=!0),n(6,v=document.title||"untitled page"))});return n(4,_=!0),k}),r.$$set=k=>{"stores"in k&&n(7,s=k.stores),"page"in k&&n(8,o=k.page),"components"in k&&n(0,u=k.components),"form"in k&&n(1,a=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,p=k.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[u,a,f,p,_,y,v,s,o]}class Dt extends Qe{constructor(e){super(),et(this,e,Tt,$t,tt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Vt={},he=[()=>K(()=>import("./chunks/0-283063cc.js"),["./chunks/0-283063cc.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-9b91be9c.js","./chunks/index-2f3b6d71.js","./chunks/paths-b4419565.js"],import.meta.url),()=>K(()=>import("./chunks/1-9a49ee0b.js"),["./chunks/1-9a49ee0b.js","./components/error.svelte-06b979a1.js","./chunks/index-2f3b6d71.js","./chunks/singletons-64e22588.js","./chunks/index-82e1dddc.js","./chunks/paths-b4419565.js"],import.meta.url),()=>K(()=>import("./chunks/2-a8e98ae0.js"),["./chunks/2-a8e98ae0.js","./components/pages/_page.svelte-feed2b6c.js","./chunks/index-2f3b6d71.js","./chunks/preload-helper-41c905a7.js","./assets/_page-3f60b7a3.css"],import.meta.url),()=>K(()=>import("./chunks/3-5d77ce7e.js"),["./chunks/3-5d77ce7e.js","./components/pages/gameoflife/_page.svelte-02ea4af4.js","./chunks/index-2f3b6d71.js","./chunks/TabPanel-e2218539.js","./chunks/index-82e1dddc.js","./assets/TabPanel-6417fb07.css","./chunks/preload-helper-41c905a7.js","./assets/_page-ce665811.css"],import.meta.url),()=>K(()=>import("./chunks/4-3b8cbdc9.js"),["./chunks/4-3b8cbdc9.js","./components/pages/reaction-diffusion/_page.svelte-223b7e58.js","./chunks/index-2f3b6d71.js","./chunks/TabPanel-e2218539.js","./chunks/index-82e1dddc.js","./assets/TabPanel-6417fb07.css","./chunks/preload-helper-41c905a7.js"],import.meta.url),()=>K(()=>import("./chunks/5-3a2fd514.js"),["./chunks/5-3a2fd514.js","./components/pages/shaders/_page.svelte-92967270.js","./chunks/index-2f3b6d71.js","./chunks/TabPanel-e2218539.js","./chunks/index-82e1dddc.js","./assets/TabPanel-6417fb07.css"],import.meta.url)],qt=[],Ct={"/":[2],"/gameoflife":[3],"/reaction-diffusion":[4],"/shaders":[5]},Ft={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,n){this.status=e,this.location=n}}async function Bt(r){for(const e in r)if(typeof r[e]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([n,s])=>[n,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Mt=-1,Gt=-2,Jt=-3,Kt=-4,zt=-5,Ht=-6;function Wt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,u=!1){if(o===Mt)return;if(o===Jt)return NaN;if(o===Kt)return 1/0;if(o===zt)return-1/0;if(o===Ht)return-0;if(u)throw new Error("Invalid input");if(o in n)return n[o];const a=e[o];if(!a||typeof a!="object")n[o]=a;else if(Array.isArray(a))if(typeof a[0]=="string")switch(a[0]){case"Date":n[o]=new Date(a[1]);break;case"Set":const p=new Set;n[o]=p;for(let v=1;v<a.length;v+=1)p.add(s(a[v]));break;case"Map":const _=new Map;n[o]=_;for(let v=1;v<a.length;v+=2)_.set(s(a[v]),s(a[v+1]));break;case"RegExp":n[o]=new RegExp(a[1],a[2]);break;case"Object":n[o]=Object(a[1]);break;case"BigInt":n[o]=BigInt(a[1]);break;case"null":const y=Object.create(null);n[o]=y;for(let v=1;v<a.length;v+=2)y[a[v]]=s(a[v+1]);break}else{const f=new Array(a.length);n[o]=f;for(let p=0;p<a.length;p+=1){const _=a[p];_!==Gt&&(f[p]=s(_))}}else{const f={};n[o]=f;for(const p in a){const _=a[p];f[p]=s(_)}}return n[o]}return s(0)}const ke=Pt(he,qt,Ct,Vt),Ie=he[0],Ae=he[1];Ie();Ae();let te={};try{te=JSON.parse(sessionStorage[Ze])}catch{}function Se(r){te[r]=fe()}function Yt({target:r,base:e}){const n=document.documentElement,s=[];let o=null;const u={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,url:null},f=!1,p=!1,_=!0,y=!1,v=!1,k=!1,N=!1,$,O=history.state?.[D];O||(O=Date.now(),history.replaceState({...history.state,[D]:O},"",location.href));const _e=te[O];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let B,Ne,ne;async function Ue(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),i=oe(t,!0);o=null,await Te(i,t,[])}async function me(t,{noScroll:i=!1,replaceState:l=!1,keepFocus:c=!1,state:d={},invalidateAll:m=!1},h,g){return typeof t=="string"&&(t=new URL(t,Ge(document))),se({url:t,scroll:i?fe():null,keepfocus:c,redirect_chain:h,details:{state:d,replaceState:l},nav_token:g,accepted:()=>{m&&(N=!0)},blocked:()=>{},type:"goto"})}async function $e(t){const i=oe(t,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);return o={id:i.id,promise:qe(i).then(l=>(l.type==="loaded"&&l.state.error&&(o=null),l))},o.promise}async function ae(...t){const l=ke.filter(c=>t.some(d=>c.exec(d))).map(c=>Promise.all([...c.layouts,c.leaf].map(d=>d?.[1]())));await Promise.all(l)}async function Te(t,i,l,c,d={},m){Ne=d;let h=t&&await qe(t);if(h||(h=await Be(i,{id:null},await Q(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=t?.url||i,Ne!==d)return!1;if(h.type==="redirect")if(l.length>10||l.includes(i.pathname))h=await re({status:500,error:await Q(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return me(new URL(h.location,i).href,{},[...l,i.pathname],d),!1;else h.props?.page?.status>=400&&await M.updated.check()&&await ie(i);if(s.length=0,N=!1,y=!0,c&&c.details){const{details:g}=c,b=g.replaceState?0:1;g.state[D]=O+=b,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(o=null,p?(a=h.state,h.props.page&&(h.props.page.url=i),$.$set(h.props)):De(h),c){const{scroll:g,keepfocus:b}=c;if(b||Re(),await le(),_){const E=i.hash&&document.getElementById(i.hash.slice(1));g?scrollTo(g.x,g.y):E?E.scrollIntoView():scrollTo(0,0)}}else await le();_=!0,h.props.page&&(B=h.props.page),m&&m(),y=!1}function De(t){a=t.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),B=t.props.page,$=new Dt({target:r,props:{...t.props,stores:M},hydrate:!0});const l={from:null,to:{params:a.params,route:{id:a.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(c=>c(l)),p=!0}async function X({url:t,params:i,branch:l,status:c,error:d,route:m,form:h}){const g=l.filter(Boolean);let b="never";for(const S of l)S?.slash!==void 0&&(b=S.slash);t.pathname=ht(t.pathname,b),t.search=t.search;const E={type:"loaded",state:{url:t,params:i,branch:l,error:d,route:m},props:{components:g.map(S=>S.node.component)}};h!==void 0&&(E.props.form=h);let L={},w=!B;for(let S=0;S<g.length;S+=1){const j=g[S];L={...L,...j.data},(w||!a.branch.some(Z=>Z===j))&&(E.props[`data_${S}`]=L,w=w||Object.keys(j.data??{}).length>0)}return w||(w=Object.keys(B.data).length!==Object.keys(L).length),(!a.url||t.href!==a.url.href||a.error!==d||h!==void 0||w)&&(E.props.page={error:d,params:i,route:m,status:c,url:new URL(t),form:h??null,data:w?L:B.data}),E}async function ge({loader:t,parent:i,url:l,params:c,route:d,server_data_node:m}){let h=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await t();if(b.universal?.load){let E=function(...w){for(const I of w){const{href:S}=new URL(I,l);g.dependencies.add(S)}};const L={route:{get id(){return g.route=!0,d.id}},params:new Proxy(c,{get:(w,I)=>(g.params.add(I),w[I])}),data:m?.data??null,url:yt(l,()=>{g.url=!0}),async fetch(w,I){let S;w instanceof Request?(S=w.url,I={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...I}):S=w;const j=new URL(S,l).href;return E(j),p?St(S,j,I):kt(S,I)},setHeaders:()=>{},depends:E,parent(){return g.parent=!0,i()}};h=await b.universal.load.call(null,L)??null,h=h?await Bt(h):null}return{node:b,loader:t,server:m,universal:b.universal?.load?{type:"data",data:h,uses:g}:null,data:h??m?.data??null,slash:b.universal?.trailingSlash??m?.slash}}function Ve(t,i,l,c,d){if(N)return!0;if(!c)return!1;if(c.parent&&t||c.route&&i||c.url&&l)return!0;for(const m of c.params)if(d[m]!==a.params[m])return!0;for(const m of c.dependencies)if(s.some(h=>h(new URL(m))))return!0;return!1}function ye(t,i){return t?.type==="data"?{type:"data",data:t.data,uses:{dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url},slash:t.slash}:t?.type==="skip"?i??null:null}async function qe({id:t,invalidating:i,url:l,params:c,route:d}){if(o?.id===t)return o.promise;const{errors:m,layouts:h,leaf:g}=d,b=[...h,g];m.forEach(R=>R?.().catch(()=>{})),b.forEach(R=>R?.[1]().catch(()=>{}));let E=null;const L=a.url?t!==a.url.pathname+a.url.search:!1,w=a.route?t!==a.route.id:!1,I=b.reduce((R,A,U)=>{const P=a.branch[U],J=!!A?.[0]&&(P?.loader!==A[1]||Ve(R.some(Boolean),w,L,P.server?.uses,c));return R.push(J),R},[]);if(I.some(Boolean)){try{E=await Xe(l,I)}catch(R){return re({status:500,error:await Q(R,{url:l,params:c,route:{id:d.id}}),url:l,route:d})}if(E.type==="redirect")return E}const S=E?.nodes;let j=!1;const Z=b.map(async(R,A)=>{if(!R)return;const U=a.branch[A],P=S?.[A];if((!P||P.type==="skip")&&R[1]===U?.loader&&!Ve(j,w,L,U.universal?.uses,c))return U;if(j=!0,P?.type==="error")throw P;return ge({loader:R[1],url:l,params:c,route:d,parent:async()=>{const Me={};for(let we=0;we<A;we+=1)Object.assign(Me,(await Z[we])?.data);return Me},server_data_node:ye(P===void 0&&R[0]?{type:"skip"}:P??null,U?.server)})});for(const R of Z)R.catch(()=>{});const x=[];for(let R=0;R<b.length;R+=1)if(b[R])try{x.push(await Z[R])}catch(A){if(A instanceof Ye)return{type:"redirect",location:A.location};let U=500,P;S?.includes(A)?(U=A.status??U,P=A.error):A instanceof Oe?(U=A.status,P=A.body):P=await Q(A,{params:c,url:l,route:{id:d.id}});const J=await Ce(R,x,m);return J?await X({url:l,params:c,branch:x.slice(0,J.idx).concat(J.node),status:U,error:P,route:d}):await Be(l,{id:d.id},P,U)}else x.push(void 0);return await X({url:l,params:c,branch:x,status:200,error:null,route:d,form:i?void 0:null})}async function Ce(t,i,l){for(;t--;)if(l[t]){let c=t;for(;!i[c];)c-=1;try{return{idx:c+1,node:{node:await l[t](),loader:l[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:i,url:l,route:c}){const d={},m=await Ie();let h=null;if(m.server)try{const E=await Xe(l,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;h=E.nodes[0]??null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||f)&&await ie(l)}const g=await ge({loader:Ie,url:l,params:d,route:c,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),b={node:await Ae(),loader:Ae,universal:null,server:null,data:null};return await X({url:l,params:d,branch:[g,b],status:t,error:i,route:null})}function oe(t,i){if(Ke(t,e))return;const l=_t(t.pathname.slice(e.length)||"/");for(const c of ke){const d=c.exec(l);if(d)return{id:t.pathname+t.search,invalidating:i,route:c,params:mt(d),url:t}}}function Fe({url:t,type:i,intent:l,delta:c}){let d=!1;const m={from:{params:a.params,route:{id:a.route?.id??null},url:a.url},to:{params:l?.params??null,route:{id:l?.route?.id??null},url:t},willUnload:!l,type:i};c!==void 0&&(m.delta=c);const h={...m,cancel:()=>{d=!0}};return v||u.before_navigate.forEach(g=>g(h)),d?null:m}async function se({url:t,scroll:i,keepfocus:l,redirect_chain:c,details:d,type:m,delta:h,nav_token:g,accepted:b,blocked:E}){const L=oe(t,!1),w=Fe({url:t,type:m,delta:h,intent:L});if(!w){E();return}Se(O),b(),v=!0,p&&M.navigating.set(w),await Te(L,t,c,{scroll:i,keepfocus:l,details:d},g,()=>{v=!1,u.after_navigate.forEach(I=>I(w)),M.navigating.set(null)})}async function Be(t,i,l,c){return t.origin===location.origin&&t.pathname===location.pathname&&!f?await re({status:c,error:l,url:t,route:i}):await ie(t)}function ie(t){return location.href=t.href,new Promise(()=>{})}function xe(){let t;n.addEventListener("mousemove",m=>{const h=m.target;clearTimeout(t),t=setTimeout(()=>{c(h,2)},20)});function i(m){c(m.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const l=new IntersectionObserver(m=>{for(const h of m)h.isIntersecting&&(ae(new URL(h.target.href).pathname),l.unobserve(h.target))},{threshold:0});function c(m,h){const g=Je(m,n);if(!g)return;const{url:b,external:E}=be(g,e);if(E)return;const L=ce(g);L.reload||(h<=L.preload_data?$e(b):h<=L.preload_code&&ae(b.pathname))}function d(){l.disconnect();for(const m of n.querySelectorAll("a")){const{url:h,external:g}=be(m,e);if(g)continue;const b=ce(m);b.reload||(b.preload_code===ze.viewport&&l.observe(m),b.preload_code===ze.eager&&ae(h.pathname))}}u.after_navigate.push(d),d()}return{after_navigate:t=>{Le(()=>(u.after_navigate.push(t),()=>{const i=u.after_navigate.indexOf(t);u.after_navigate.splice(i,1)}))},before_navigate:t=>{Le(()=>(u.before_navigate.push(t),()=>{const i=u.before_navigate.indexOf(t);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(y||!p)&&(_=!1)},goto:(t,i={})=>me(t,i,[]),invalidate:t=>{if(typeof t=="function")s.push(t);else{const{href:i}=new URL(t,location.href);s.push(l=>l.href===i)}return Ue()},invalidateAll:()=>(N=!0,Ue()),preload_data:async t=>{const i=new URL(t,Ge(document));await $e(i)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const i=new URL(location.href),{branch:l,route:c}=a;if(!c)return;const d=await Ce(a.branch.length,l,c.errors);if(d){const m=await X({url:i,params:a.params,branch:l.slice(0,d.idx).concat(d.node),status:t.status??500,error:t.error,route:c});a=m.state,$.$set(m.props),le().then(Re)}}else if(t.type==="redirect")me(t.location,{invalidateAll:!0},[]);else{const i={form:t.data,page:{...B,form:t.data,status:t.status}};$.$set(i),t.type==="success"&&le().then(Re)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let i=!1;if(!v){const l={from:{params:a.params,route:{id:a.route?.id??null},url:a.url},to:null,willUnload:!0,type:"leave",cancel:()=>i=!0};u.before_navigate.forEach(c=>c(l))}i?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[Ze]=JSON.stringify(te)}catch{}}}),navigator.connection?.saveData||xe(),n.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const i=Je(t.composedPath()[0],n);if(!i)return;const{url:l,external:c,has:d}=be(i,e),m=ce(i);if(!l||!(i instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||d.download)return;if(c||m.reload){Fe({url:l,type:"link"})||t.preventDefault(),v=!0;return}const[g,b]=l.href.split("#");if(b!==void 0&&g===location.href.split("#")[0]){k=!0,Se(O),a.url=l,M.page.set({...B,url:l}),M.page.notify();return}se({url:l,scroll:m.noscroll?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),n.addEventListener("submit",t=>{if(t.defaultPrevented)return;const i=HTMLFormElement.prototype.cloneNode.call(t.target),l=t.submitter;if((l?.formMethod||i.method)!=="get")return;const d=new URL(t.submitter?.hasAttribute("formaction")&&l?.formAction||i.action);if(Ke(d,e))return;const{noscroll:m,reload:h}=ce(t.target);h||(t.preventDefault(),t.stopPropagation(),d.search=new URLSearchParams(new FormData(t.target)).toString(),se({url:d,scroll:m?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",t=>{if(t.state?.[D]){if(t.state[D]===O)return;const i=t.state[D]-O;se({url:new URL(location.href),scroll:te[t.state[D]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=t.state[D]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[D]:++O},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&M.navigating.set(null)})},_hydrate:async({status:t=200,error:i,node_ids:l,params:c,route:d,data:m,form:h})=>{f=!0;const g=new URL(location.href);({params:c={},route:d={id:null}}=oe(g,!1)||{});let b;try{const E=l.map(async(L,w)=>{const I=m[w];return ge({loader:he[L],url:g,params:c,route:d,parent:async()=>{const S={};for(let j=0;j<w;j+=1)Object.assign(S,(await E[j]).data);return S},server_data_node:ye(I)})});b=await X({url:g,params:c,branch:await Promise.all(E),status:t,error:i,form:h,route:ke.find(({id:L})=>L===d.id)??null})}catch(E){if(E instanceof Ye){await ie(new URL(E.location,location.href));return}b=await re({status:E instanceof Oe?E.status:500,error:await Q(E,{url:g,params:c,route:d}),url:g,route:d})}De(b)}}}async function Xe(r,e){const n=new URL(r);n.pathname=bt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(u=>u?"1":"").join("_"));const s=await pe(n.href),o=await s.json();if(!s.ok)throw new Error(o);return o.nodes?.forEach(u=>{u?.type==="data"&&(u.data=Wt(u.data),u.uses={dependencies:new Set(u.uses.dependencies??[]),params:new Set(u.uses.params??[]),parent:!!u.uses.parent,route:!!u.uses.route,url:!!u.uses.url})}),o}function Q(r,e){return r instanceof Oe?r.body:Ft.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Re(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function en({env:r,hydrate:e,paths:n,target:s,version:o}){pt(n),dt(o);const u=Yt({target:s,base:n.base});ut({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{en as start};
