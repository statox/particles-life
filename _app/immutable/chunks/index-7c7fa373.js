function m(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(D)}function A(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function H(t,...n){if(t==null)return m;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(H(n,e))}function st(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,l){if(r){const c=L(n,e,i,l);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t&&A(t.destroy)?t.destroy:m}let v=!1;function G(){v=!0}function J(){v=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const u=n[o].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,g=>n[e[g]].claim_order,u))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,r=Math.max(a,r)}const l=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(l.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);l.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<l.length&&c[o].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(c[o],f)}}function W(t,n){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){v&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function mt(){return j(" ")}function pt(){return j("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){X(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Y(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||l.push(s.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function xt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function bt(t){return Z(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Et(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function wt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Nt(t,n){return new t(n)}let p;function h(t){p=t}function E(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){E().$$.on_mount.push(t)}function At(t){E().$$.after_update.push(t)}function jt(t){E().$$.on_destroy.push(t)}function Ct(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=tt(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const _=[],P=[],b=[],B=[],T=Promise.resolve();let N=!1;function q(){N||(N=!0,T.then(I))}function kt(){return q(),T}function S(t){b.push(t)}const w=new Set;let x=0;function I(){const t=p;do{for(;x<_.length;){const n=_[x];x++,h(n),nt(n.$$)}for(h(null),_.length=0,x=0;P.length;)P.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];w.has(e)||(w.add(e),e())}b.length=0}while(_.length);for(;B.length;)B.pop()();N=!1,w.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const $=new Set;let d;function Mt(){d={r:0,c:[],p:d}}function Pt(){d.r||y(d.c),d=d.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Dt(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||S(()=>{const c=t.$$.on_mount.map(D).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),l.forEach(S)}function rt(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(_.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,r,l,c,s=[-1]){const o=p;h(t);const u=t.$$={fragment:null,ctx:[],props:l,update:m,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,g,...C)=>{const k=C.length?C[0]:g;return u.ctx&&r(u.ctx[a],u.ctx[a]=k)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](k),f&&ct(t,a)),g}):[],u.update(),f=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const a=V(n.target);u.fragment&&u.fragment.l(a),a.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),J(),I()}h(o)}class Tt{$destroy(){rt(this,1),this.$destroy=m}$on(n,e){if(!A(e))return m;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{kt as A,m as B,st as C,W as D,at as E,ft as F,lt as G,ut as H,S as I,Et as J,yt as K,ht as L,y as M,wt as N,jt as O,dt as P,Ct as Q,Tt as S,mt as a,_t as b,bt as c,Pt as d,pt as e,et as f,Mt as g,R as h,Ot as i,At as j,U as k,xt as l,V as m,gt as n,St as o,vt as p,j as q,Z as r,ot as s,Bt as t,$t as u,Nt as v,Dt as w,Lt as x,it as y,rt as z};