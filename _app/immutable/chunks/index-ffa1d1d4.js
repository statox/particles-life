function $(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(L)}function O(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function H(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(H(n,e))}function ot(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let l=0;l<c;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function st(t,n,e,i,r,s){if(r){const c=P(n,e,i,s);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let v=!1;function G(){v=!0}function J(){v=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&u.push(a)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const o=n[u].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:K(1,r,y=>n[e[y]].claim_order,o))-1;i[u]=e[a]+1;const f=a+1;e[f]=u,r=Math.max(f,r)}const s=[],c=[];let l=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(s.push(n[u-1]);l>=u;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);s.reverse(),c.sort((u,o)=>u.claim_order-o.claim_order);for(let u=0,o=0;u<c.length;u++){for(;o<s.length&&c[u].claim_order>=s[o].claim_order;)o++;const a=o<s.length?s[o]:null;t.insertBefore(c[u],a)}}function W(t,n){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){v&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function dt(){return S(" ")}function ht(){return S("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function yt(t){return t===""?null:+t}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){X(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const u=e(l);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const u=e(l);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];e[l.name]||s.push(l.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function gt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function xt(t){return Z(t," ")}function bt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n){t.value=n??""}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Et(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function Nt(t,n){return new t(n)}let m;function h(t){m=t}function A(){if(!m)throw new Error("Function called outside component initialization");return m}function St(t){A().$$.on_mount.push(t)}function At(t){A().$$.after_update.push(t)}function jt(t){A().$$.on_destroy.push(t)}const d=[],k=[],x=[],B=[],q=Promise.resolve();let E=!1;function D(){E||(E=!0,q.then(I))}function Ct(){return D(),q}function N(t){x.push(t)}const w=new Set;let g=0;function I(){const t=m;do{for(;g<d.length;){const n=d[g];g++,h(n),tt(n.$$)}for(h(null),d.length=0,g=0;k.length;)k.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];w.has(e)||(w.add(e),e())}x.length=0}while(d.length);for(;B.length;)B.pop()();E=!1,w.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const b=new Set;let _;function Mt(){_={r:0,c:[],p:_}}function kt(){_.r||p(_.c),_=_.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Lt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||N(()=>{const c=t.$$.on_mount.map(L).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),s.forEach(N)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Pt(t,n,e,i,r,s,c,l=[-1]){const u=m;h(t);const o=t.$$={fragment:null,ctx:[],props:s,update:$,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||u.$$.root};c&&c(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,y,...j)=>{const C=j.length?j[0]:y;return o.ctx&&r(o.ctx[f],o.ctx[f]=C)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](C),a&&rt(t,f)),y}):[],o.update(),a=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);o.fragment&&o.fragment.l(f),f.forEach(R)}else o.fragment&&o.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),I()}h(u)}class Tt{$destroy(){it(this,1),this.$destroy=$}$on(n,e){if(!O(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ct as A,$ as B,ot as C,W as D,st as E,ft as F,lt as G,ut as H,mt as I,p as J,jt as K,_t as L,N as M,wt as N,Et as O,$t as P,yt as Q,Tt as S,dt as a,at as b,xt as c,kt as d,ht as e,nt as f,Mt as g,R as h,Pt as i,At as j,U as k,gt as l,V as m,pt as n,St as o,vt as p,S as q,Z as r,ct as s,Bt as t,bt as u,Nt as v,Lt as w,Ot as x,et as y,it as z};
