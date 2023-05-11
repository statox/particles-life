import{S as j,i as Z,s as Q,k as B,q as k,a as V,l as C,m as R,r as D,h as _,c as N,n as $,b as z,D as h,B as G,X as Bt,Y as Re,o as he,U as ke,K,u as ae,f as F,g as ce,t as M,d as me,Q as ve,w as H,x as X,I as Ie,J as _e,y as Y,L as Ce,z as U,M as xe,N as Te,O as de,Z as se,P as ge,_ as Pe,e as le,v as fe}from"../../../chunks/index-2107b80f.js";import{T as xt,a as gt,b as ye,c as $e}from"../../../chunks/TabPanel-dec752e3.js";import{_ as Ee}from"../../../chunks/preload-helper-41c905a7.js";import{b as Fe}from"../../../chunks/paths-b4419565.js";import{R as Se}from"../../../chunks/regl-89b00fbf.js";function Ct(t){let e,n,a,o,i,r,s,l,m,p,u,f;return{c(){e=B("p"),n=k("Experiments with "),a=B("a"),o=k("Reaction-diffusion systems"),i=V(),r=B("p"),s=k("The code is based on "),l=B("a"),m=k("this tutorial"),p=k(`
    but reimplemented in a glsl shader with
    `),u=B("a"),f=k("regl"),this.h()},l(v){e=C(v,"P",{});var c=R(e);n=D(c,"Experiments with "),a=C(c,"A",{href:!0,target:!0});var x=R(a);o=D(x,"Reaction-diffusion systems"),x.forEach(_),c.forEach(_),i=N(v),r=C(v,"P",{});var w=R(r);s=D(w,"The code is based on "),l=C(w,"A",{href:!0,target:!0});var y=R(l);m=D(y,"this tutorial"),y.forEach(_),p=D(w,`
    but reimplemented in a glsl shader with
    `),u=C(w,"A",{href:!0,target:!0});var S=R(u);f=D(S,"regl"),S.forEach(_),w.forEach(_),this.h()},h(){$(a,"href","https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system"),$(a,"target","none"),$(l,"href","https://karlsims.com/rd.html"),$(l,"target","none"),$(u,"href","https://github.com/regl-project/regl"),$(u,"target","none")},m(v,c){z(v,e,c),h(e,n),h(e,a),h(a,o),z(v,i,c),z(v,r,c),h(r,s),h(r,l),h(l,m),h(r,p),h(r,u),h(u,f)},p:G,i:G,o:G,d(v){v&&_(e),v&&_(i),v&&_(r)}}}class Ve extends j{constructor(e){super(),Z(this,e,null,Ct,Q,{})}}function zt(t){let e,n,a;return{c(){e=B("div"),this.h()},l(o){e=C(o,"DIV",{style:!0,class:!0}),R(e).forEach(_),this.h()},h(){$(e,"style",t[0]),$(e,"class","m-0")},m(o,i){z(o,e,i),n||(a=Bt(t[1].call(null,e)),n=!0)},p(o,[i]){i&1&&$(e,"style",o[0])},i:G,o:G,d(o){o&&_(e),n=!1,a()}}}function Lt(t,e){return e.forEach(([n,a])=>t[n]=a),t}function Rt(t,e,n){let{target:a=void 0}=e,{sketch:o=void 0}=e,{parentDivStyle:i="display: block;"}=e,{debug:r=!1}=e,s;const l=Re(),m={ref(){l("ref",a)},instance(){l("instance",s)}};function p(u){return n(2,a=u),{destroy(){n(2,a=void 0)}}}return he(async()=>{const u=await Ee(()=>import("../../../chunks/p5.min-b96f42d1.js").then(x=>x.p),["../../../chunks/p5.min-b96f42d1.js","../../../chunks/regl-89b00fbf.js"],import.meta.url),{default:f}=u,c=Object.entries(u).filter(([x,w])=>w instanceof Function&&x[0]!=="_"&&x!=="default");r&&console.log("available p5 native classes",c),s=new f(x=>(x=Lt(x,c),r&&console.log("p5 instance",x),window._p5Instance=x,o(x)),a),m.ref(),m.instance()}),t.$$set=u=>{"target"in u&&n(2,a=u.target),"sketch"in u&&n(3,o=u.sketch),"parentDivStyle"in u&&n(0,i=u.parentDivStyle),"debug"in u&&n(4,r=u.debug)},[i,p,a,o,r]}class be extends j{constructor(e){super(),Z(this,e,Rt,zt,Q,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const ue=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"STX 1",type:"N.A",f:.0353,k:.0614},{name:"STX 2",type:"N.A",f:.0201,k:.0602},{name:"STX 2",type:"N.A",f:.0181,k:.0435},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function Ne(t,e,n){const a=t.slice();return a[18]=e[n],a}function Oe(t){let e,n,a,o,i,r,s,l,m,p=ue,u=[];for(let f=0;f<p.length;f+=1)u[f]=He(Ne(t,p,f));return r=new be({props:{sketch:t[3]}}),{c(){e=B("div"),n=k("Select f and k parameters on the map of use a preset"),a=V(),o=B("select");for(let f=0;f<u.length;f+=1)u[f].c();i=V(),H(r.$$.fragment),this.h()},l(f){e=C(f,"DIV",{});var v=R(e);n=D(v,"Select f and k parameters on the map of use a preset"),v.forEach(_),a=N(f),o=C(f,"SELECT",{class:!0});var c=R(o);for(let x=0;x<u.length;x+=1)u[x].l(c);c.forEach(_),i=N(f),X(r.$$.fragment,f),this.h()},h(){$(o,"class","full-width svelte-1qznlxf"),t[0]===void 0&&Ie(()=>t[5].call(o))},m(f,v){z(f,e,v),h(e,n),z(f,a,v),z(f,o,v);for(let c=0;c<u.length;c+=1)u[c].m(o,null);_e(o,t[0]),z(f,i,v),Y(r,f,v),s=!0,l||(m=[K(o,"change",t[5]),K(o,"change",t[6])],l=!0)},p(f,v){if(v&0){p=ue;let c;for(c=0;c<p.length;c+=1){const x=Ne(f,p,c);u[c]?u[c].p(x,v):(u[c]=He(x),u[c].c(),u[c].m(o,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=p.length}v&1&&_e(o,f[0])},i(f){s||(F(r.$$.fragment,f),s=!0)},o(f){M(r.$$.fragment,f),s=!1},d(f){f&&_(e),f&&_(a),f&&_(o),Ce(u,f),f&&_(i),U(r,f),l=!1,xe(m)}}}function He(t){let e,n=t[18].type+"",a,o,i=t[18].name+"",r,s,l=t[18].f+"",m,p,u=t[18].k+"",f,v;return{c(){e=B("option"),a=k(n),o=k(" - "),r=k(i),s=k(" (f/k "),m=k(l),p=k(" / "),f=k(u),v=k(`)
                `),this.h()},l(c){e=C(c,"OPTION",{});var x=R(e);a=D(x,n),o=D(x," - "),r=D(x,i),s=D(x," (f/k "),m=D(x,l),p=D(x," / "),f=D(x,u),v=D(x,`)
                `),x.forEach(_),this.h()},h(){e.__value=t[18],e.value=e.__value},m(c,x){z(c,e,x),h(e,a),h(e,o),h(e,r),h(e,s),h(e,m),h(e,p),h(e,f),h(e,v)},p:G,d(c){c&&_(e)}}}function Pt(t){let e,n,a=t[1]?"Close":"F/K selection",o,i,r,s,l,m=t[1]&&Oe(t);return{c(){e=B("div"),n=B("button"),o=k(a),i=V(),m&&m.c(),this.h()},l(p){e=C(p,"DIV",{id:!0,class:!0});var u=R(e);n=C(u,"BUTTON",{class:!0,id:!0});var f=R(n);o=D(f,a),f.forEach(_),i=N(u),m&&m.l(u),u.forEach(_),this.h()},h(){$(n,"class","full-width svelte-1qznlxf"),$(n,"id","toggleButton"),$(e,"id","container"),$(e,"class","svelte-1qznlxf"),ke(e,"no-cursor",It)},m(p,u){z(p,e,u),h(e,n),h(n,o),h(e,i),m&&m.m(e,null),r=!0,s||(l=K(n,"click",t[4]),s=!0)},p(p,[u]){(!r||u&2)&&a!==(a=p[1]?"Close":"F/K selection")&&ae(o,a),p[1]?m?(m.p(p,u),u&2&&F(m,1)):(m=Oe(p),m.c(),F(m,1),m.m(e,null)):m&&(ce(),M(m,1,1,()=>{m=null}),me())},i(p){r||(F(m),r=!0)},o(p){M(m),r=!1},d(p){p&&_(e),m&&m.d(),s=!1,l()}}}let It=!1;function Tt(t,e){let n=!1,a=1/0,o=null;for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];if(t[0]===r[0]&&t[1]===r[1])return t;r[1]>t[1]!=s[1]>t[1]&&t[0]<(s[0]-r[0])*(t[1]-r[1])/(s[1]-r[1])+r[0]&&(n=!n);const m=Ft(t,r,s);m<a&&(a=m,o=Mt(t,r,s))}if(n)return t;if(!o)throw new Error("Now closest point found");return o}function Ft(t,e,n){const a=[n[0]-e[0],n[1]-e[1]],o=[t[0]-e[0],t[1]-e[1]],i=a[0]*o[0]+a[1]*o[1],r=a[0]*a[0]+a[1]*a[1],s=i/r;let l;return s<0?l=e:s>1?l=n:l=[e[0]+s*a[0],e[1]+s*a[1]],Math.sqrt((t[0]-l[0])**2+(t[1]-l[1])**2)}function Mt(t,e,n){const a=[n[0]-e[0],n[1]-e[1]],o=[t[0]-e[0],t[1]-e[1]],i=a[0]*o[0]+a[1]*o[1],r=a[0]*a[0]+a[1]*a[1],s=i/r;let l;return s<0?l=e:s>1?l=n:l=[e[0]+s*a[0],e[1]+s*a[1]],l}function Kt(t,e,n){const a=Re();let o=ue[0],i=!0;const r=[0,.12],s=[.03,.07],l=[{f:.1045,k:.0553},{f:.0829,k:.0582},{f:.0664,k:.0595},{f:.0511,k:.0594},{f:.0307,k:.0549},{f:.017,k:.0467},{f:.005,k:.0335},{f:.0076,k:.0472},{f:.0166,k:.0594},{f:.0277,k:.0657},{f:.046,k:.0675},{f:.0757,k:.0643},{f:.0949,k:.0594}],m=d=>{const{f:E,k:A}=d,b=w.map(A,s[0],s[1],0,w.width),P=w.map(E,r[0],r[1],w.height,0);return{x:b,y:P}},p=d=>{d.noStroke();const E=d.textSize();for(const A of ue){const{x:b,y:P}=m({f:A.f,k:A.k}),O=A.f===o.f&&A.k===o.k;d.circle(b,P,3),d.textSize(O?E*2:E),d.fill(O?[240,240,150]:[255,255,255]),d.text(A.name,b-d.textWidth(A.name)/2,P-10)}},u=d=>{d.noFill(),d.stroke("red"),d.strokeWeight(1);const{x:E,y:A}=m(o);d.text("F",10,A>10?A-5:A+15),d.line(0,A,d.width,A),d.text("K",E<d.width-10?E+5:E-15,d.height-10),d.line(E,0,E,d.height),d.circle(E,A,10)},f=d=>{const{f:E,k:A}=o,b=`F: ${E.toFixed(4)}`,P=`K: ${A.toFixed(4)}`,O=d.textSize(),ie=d.height*.05;d.textStyle(d.BOLD),d.textSize(ie),d.fill("white"),d.stroke(0),d.strokeWeight(1),d.text(b,d.width*.05,d.textSize()),d.text(P,d.width*.05,d.textSize()+d.textSize()+6),d.textStyle(d.NORMAL),d.textSize(O)},v=d=>{for(let E=0;E<l.length;E++){const{x:A,y:b}=m(l[E]),{x:P,y:O}=m(l[(E+1)%l.length]);d.fill("white"),d.stroke("white"),d.strokeWeight(1),d.circle(A,b,3),d.circle(P,O,3),d.line(A,b,P,O)}},c=()=>{const d=[o.f,o.k],E=l.map(b=>[b.f,b.k]),A=Tt(d,E);n(0,o.f=A[0],o),n(0,o.k=A[1],o)},x=()=>{let{f:d,k:E}=o;const A=w.noise(w.frameCount*.01),b=w.noise(5321+w.frameCount*.01),O=Math.random()<.97?.001:.01;d=d+(b*2-1)*(r[1]-r[0])*O,E=E+(A*2-1)*(s[1]-s[0])*O,n(0,o={f:d,k:E,name:"custom",type:"manual"}),c(),a("fkupdated",o)};let w;const y=d=>{w=d;let E;d.preload=()=>{E=d.loadImage(Fe+"/parameters_map.png")},d.setup=()=>{d.createCanvas(400,400),d.frameRate(55)},d.draw=()=>{d.background(255),d.tint(150,190),d.image(E,0,0,d.width,d.height),p(d),v(d),u(d),f(d),x()}},S=()=>{n(1,i=!i),i||w.remove()};ve(()=>w?.remove());function L(){o=Te(this),n(0,o)}return[o,i,a,y,S,L,()=>a("fkupdated",o)]}let Vt=class extends j{constructor(e){super(),Z(this,e,Kt,Pt,Q,{})}};const Nt=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,Ot=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Ht=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float PI = 3.14159265359;
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = sin(iteration*PI/180.0);
    if (val < 0.0) {
        val = -1.0 * val;
    }
    gl_FragColor = vec4(A, B, val, 1.0);
}
`,Yt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Ut=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Wt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,Xt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    // vec3 color1 = vec3(1.0, 0.0, 0.0);
    // vec3 color2 = vec3(0.0, 1.0, 0.0);
    // vec3 result = color1 * A + color2 * B;

    vec3 color1RGB = vec3(0.639, 0.941, 0.717);
    vec3 color2RGB = vec3(0.929, 0.082, 0.705);

    vec3 color1HSV = rgb2hsv(color1RGB);
    vec3 color2HSV = rgb2hsv(color2RGB);

    float color1Offset = (cos(iteration * 0.001) + 1.0) * 0.5;
    float color1newH = 0.5 * (color1HSV.x + color1Offset);
    vec3 color1newHSV = vec3(color1newH, color1HSV.g, color1HSV.b);

    float color2Offset = (cos(iteration * 0.002)) * 0.5;
    float color2newH = 0.5 * (color2HSV.x + color2Offset + 0.33);
    vec3 color2newHSV = vec3(color2newH, color2HSV.g, color2HSV.b);


    vec3 resultHSV = color1newHSV * A + color2newHSV * B;
    vec3 result = hsv2rgb(resultHSV);

    gl_FragColor = vec4(result, 1.0);
}
`,qt=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,Gt=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec3 color1 = vec3(0.0, 0.0, 1.0);
    vec3 color2 = vec3(1.0, 0.0, 0.0);
    vec3 result = vec3(A, 0.0, 1.0-A);

    gl_FragColor = vec4(result, 1.0);
}
`,jt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    if (A > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else if (A > 0.4) {
        gl_FragColor = vec4(1.0 - A, 0.0, 0.0, 1.0);
    } else { 
        gl_FragColor = vec4(0.0, A, 0.0, 1.0);
    }
}
`,Zt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 blue = vec4(0.0, 0.0, 1.0, 1.0);
    vec4 color = mix(blue, red, A);

    vec4 softRed = vec4(0.8588, 0.2824, 0.3765, 1.0);
    vec4 softBlue = vec4(0.2824, 0.3882, 0.8588, 1.0);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.6);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.4);
    vec4 softColor = mix(softBlue, softRed, 1.0-A);


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(color);
    }

}
`,Qt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/MATLAB_cool.frag
float colormap_red(float x) {
    return (1.0 + 1.0 / 63.0) * x - 1.0 / 63.0;
}

float colormap_green(float x) {
    return -(1.0 + 1.0 / 63.0) * x + (1.0 + 1.0 / 63.0);
}

vec4 colormap(float x) {
    float r = clamp(colormap_red(x), 0.0, 1.0);
    float g = clamp(colormap_green(x), 0.0, 1.0);
    float b = 1.0;
    return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,Jt=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdBu.frag
float colormap_red(float x) {
	if (x < 0.09771832105856419) {
		return 7.60263247863246E+02 * x + 1.02931623931624E+02;
	} else if (x < 0.3017162107441106) {
		return (-2.54380938558548E+02 * x + 4.29911571188803E+02) * x + 1.37642085716717E+02;
	} else if (x < 0.4014205790737471) {
		return 8.67103448276151E+01 * x + 2.18034482758611E+02;
	} else if (x < 0.5019932233215039) {
		return -6.15461538461498E+01 * x + 2.77547692307680E+02;
	} else if (x < 0.5969483882550937) {
		return -3.77588522588624E+02 * x + 4.36198819698878E+02;
	} else if (x < 0.8046060096654594) {
		return (-6.51345897546620E+02 * x + 2.09780968434337E+02) * x + 3.17674951640855E+02;
	} else {
		return -3.08431855203590E+02 * x + 3.12956742081421E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09881640500975222) {
		return 2.41408547008547E+02 * x + 3.50427350427364E-01;
	} else if (x < 0.5000816285610199) {
		return ((((1.98531871433258E+04 * x - 2.64108262469187E+04) * x + 1.10991785969817E+04) * x - 1.92958444776211E+03) * x + 8.39569642882186E+02) * x - 4.82944517518776E+01;
	} else if (x < 0.8922355473041534) {
		return (((6.16712686949223E+03 * x - 1.59084026055125E+04) * x + 1.45172137257997E+04) * x - 5.80944127411621E+03) * x + 1.12477959061948E+03;
	} else {
		return -5.28313797313699E+02 * x + 5.78459299959206E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.1033699568661857) {
		return 1.30256410256410E+02 * x + 3.08518518518519E+01;
	} else if (x < 0.2037526071071625) {
		return 3.38458128078815E+02 * x + 9.33004926108412E+00;
	} else if (x < 0.2973267734050751) {
		return (-1.06345054944861E+02 * x + 5.93327252747168E+02) * x - 3.81852747252658E+01;
	} else if (x < 0.4029109179973602) {
		return 6.68959706959723E+02 * x - 7.00740740740798E+01;
	} else if (x < 0.5006715489526758) {
		return 4.87348695652202E+02 * x + 3.09898550724286E+00;
	} else if (x < 0.6004396902588283) {
		return -6.85799999999829E+01 * x + 2.81436666666663E+02;
	} else if (x < 0.702576607465744) {
		return -1.81331701891043E+02 * x + 3.49137263626287E+02;
	} else if (x < 0.9010407030582428) {
		return (2.06124143164576E+02 * x - 5.78166906665595E+02) * x + 5.26198653917172E+02;
	} else {
		return -7.36990769230737E+02 * x + 8.36652307692262E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,en=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,tn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap(1.0 - (A-0.4)*(1.0/0.6));


    if (A > 0.6) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,nn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/transform_seismic.frag
float colormap_f(float x) {
    return ((-2010.0 * x + 2502.5950459) * x - 481.763180924) / 255.0;
}

float colormap_red(float x) {
    if (x < 0.0) {
        return 3.0 / 255.0;
    } else if (x < 0.238) {
        return ((-1810.0 * x + 414.49) * x + 3.87702) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return (344441250.0 / 323659.0 * x - 23422005.0 / 92474.0) / 255.0;
    } else if (x < 25851.0 / 34402.0) {
        return 1.0;
    } else if (x <= 1.0) {
        return (-688.04 * x + 772.02) / 255.0;
    } else {
        return 83.0 / 255.0;
    }
}

float colormap_green(float x) {
    if (x < 0.0) {
        return 0.0;
    } else if (x < 0.238) {
        return 0.0;
    } else if (x < 51611.0 / 108060.0) {
        return colormap_f(x);
    } else if (x < 0.739376978894039) {
        float xx = x - 51611.0 / 108060.0;
        return ((-914.74 * xx - 734.72) * xx + 255.) / 255.0;
    } else {
        return 0.0;
    }
}

float colormap_blue(float x) {
    if (x < 0.0) {
        return 19.0 / 255.0;
    } else if (x < 0.238) {
        float xx = x - 0.238;
        return (((1624.6 * xx + 1191.4) * xx + 1180.2) * xx + 255.0) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return 1.0;
    } else if (x < 174.5 / 256.0) {
        return (-951.67322673866 * x + 709.532730938451) / 255.0;
    } else if (x < 0.745745353439206) {
        return (-705.250074130877 * x + 559.620050530617) / 255.0;
    } else if (x <= 1.0) {
        return ((-399.29 * x + 655.71) * x - 233.25) / 255.0;
    } else {
        return 23.0 / 255.0;
    }
}

vec4 colormap(float x) {
    return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,on=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((B-0.1)*(1.0/0.9));


    if (B < 0.1) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,te={},rn=t=>{const e={vert:Nt,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}};te.raw=t({frag:Ot,...e}),te.A_transform_seismic=t({frag:nn,...e}),te.A_gradiant1=t({frag:jt,...e}),te.A_gradiant2=t({frag:Zt,...e}),te.A_MATLAB_cool=t({frag:Qt,...e}),te.A_IDL_CB_RdBu=t({frag:Jt,...e}),te.A_IDL_CB_RdYiBu=t({frag:en,...e}),te.A_IDL_CB_BuYiRd=t({frag:tn,...e}),te.B_IDL_CB_RdYiBu=t({frag:on,...e}),te.grayscale=t({frag:Yt,...e}),te.blackwhite=t({frag:Ut,...e}),te.whiteblack=t({frag:Wt,...e}),te.timebasedblue=t({frag:Ht,...e}),te.lerp=t({frag:Xt,...e}),te.mrob=t({frag:qt,...e}),te.redblue=t({frag:Gt,...e})},an=t=>{const{colorMode:e,inputBuffer:n,iteration:a,outputBuffer:o,zoomState:i}=t;(te[e]||te.raw)({inputBuffer:n,iteration:a,outputBuffer:o,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},ln=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

uniform bool penIsActive;
uniform bool eraserIsActive;
uniform float penDensity;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

// https://thebookofshaders.com/10/
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

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


    float rnd = random(uv);
    if (penIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (eraserIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`,sn=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
uniform float penRadius;

attribute vec2 position;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

void main() {
    uv = 0.5 * (position + 1.0);
    mouseUv = (mousePosition * zoomLevel) + pan * (1.0 - zoomLevel);
    scaledPenRadius = penRadius * zoomLevel;
    gl_Position = vec4(position, 0, 1);
}
`;let ht;const fn=(t,e)=>{ht=t({frag:ln,vert:sn,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,f:t.prop("f"),k:t.prop("k"),radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive"),eraserIsActive:t.prop("eraserIsActive"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},un=t=>{const{inputBuffer:e,outputBuffer:n,pauseSimulation:a,mouseState:o,simulationParameters:i,worldSize:r}=t;ht({inputBuffer:e,outputBuffer:n,pauseSimulation:a,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY],mousePosition:[o.x,o.y],penRadius:1/2**(r-o.penSize),penDensity:o.penDensity,penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...i})},cn=(t,e)=>t==="randomSpots"?vn(e,.001):t==="middleCircleAndRandomSpots"?mn(e,.005,.05):t==="empty"?pn(e):dn(e,.02),mn=(t,e,n)=>{const a=t*n;return Array(t*t).fill(0).map((o,i)=>{const r=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-r)<a?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},pn=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),vn=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),dn=(t,e)=>Array(t*t).fill(0).map((n,a)=>{const o=Math.floor(a/t),i=a%t;return Math.hypot(t/2-i,t/2-o)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),xn=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,gn=`precision highp float;

uniform sampler2D prevState;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    float division = 10.0;
    float column = mod(uv.x, 1.0 / division);
    float c = column * division;

    float row = mod(uv.y, 1.0 / division);
    float r = row * division;

    // I haven't found a way to compare the value to an exact value
    // Might be a precision issue, or just that I'm missing something
    if (c < 0.05 || r < 0.05) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
       gl_FragColor = color;
    }
}
`;let _t;const hn=t=>{_t=t({vert:xn,frag:gn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},_n=t=>{const{inputBuffer:e,outputBuffer:n,zoomState:a}=t;_t({inputBuffer:e,outputBuffer:n,zoomLevel:a.zoomLevel,pan:[a.panX,a.panY]})},En=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Sn=`precision mediump float;

uniform sampler2D prevState;
uniform vec2 mousePosition;
uniform float penRadius;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    float d = distance(uv, mousePosition);
    if (
        (d >= penRadius && d <= penRadius + 0.001) ||
        (uv.x >= mousePosition.x - 0.001 && uv.x <= mousePosition.x + 0.001 && uv.y >= mousePosition.y - 0.01 && uv.y <= mousePosition.y + 0.01) ||
        (uv.x >= mousePosition.x - 0.01 && uv.x <= mousePosition.x + 0.01 && uv.y >= mousePosition.y - 0.001 && uv.y <= mousePosition.y + 0.001))
    {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    } else {
        gl_FragColor = color;
    }
}
`;let Et;const bn=t=>{Et=t({frag:Sn,vert:En,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}})},yn=t=>{const{inputBuffer:e,mouseState:n,outputBuffer:a,worldSize:o}=t;Et({inputBuffer:e,outputBuffer:a,mousePosition:[n.x,n.y],penRadius:1/2**(o-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},St=t=>{const{controls:e,info:n,mouseState:a,simulationParameters:o}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const r=Se({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const s=2**n.worldSize,l=cn(e.initialConditions,s),m=()=>r.framebuffer({color:r.texture({radius:s,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),p=Array(2).fill(0).map(m),u=Array(2).fill(0).map(m);return fn(r,s),rn(r),hn(r),bn(r),r.frame(()=>{e.pause||n.iteration++;let f=p[(n.iteration+1)%2];for(let v=0;v<e.speed;v++){n.iteration++;const c=p[n.iteration%2];f=p[(n.iteration+1)%2],un({inputBuffer:c,outputBuffer:f,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:a,simulationParameters:o})}$n({inputTexture:f,graphicsTextures:u,controls:e,info:n,mouseState:a})}),r},$n=t=>{const{inputTexture:e,graphicsTextures:n,controls:a,info:o,mouseState:i}=t;let r=0;r++;const s=e;let l=n[r%2];if(!a.grid&&!a.pen&&(l=null),an({colorMode:a.colors,inputBuffer:s,iteration:o.iteration,outputBuffer:l,zoomState:i}),a.grid){r++;const m=n[(r+1)%2];let p=n[r%2];a.pen||(p=null),_n({inputBuffer:m,outputBuffer:p,zoomState:i})}if(a.pen){r++;const m=n[(r+1)%2],p=null;yn({mouseState:i,worldSize:o.worldSize,inputBuffer:m,outputBuffer:p})}};const{window:wn}=Pe;function An(t){let e,n,a,o,i,r,s,l,m,p,u,f,v,c=2**t[0].worldSize+"",x,w,y=2**t[0].worldSize+"",S,L,g=2**(t[0].worldSize+1)+"",d,E,A,b,P,O,ie;return n=new Vt({}),n.$on("fkupdated",t[4]),{c(){e=B("main"),H(n.$$.fragment),a=V(),o=B("div"),i=V(),r=B("div"),s=B("label"),l=k("World Size:"),m=V(),p=B("input"),u=V(),f=B("span"),v=k("("),x=k(c),w=k(" x "),S=k(y),L=k(" : "),d=k(g),E=k(")"),A=V(),b=B("canvas"),this.h()},l(I){e=C(I,"MAIN",{});var T=R(e);X(n.$$.fragment,T),a=N(T),o=C(T,"DIV",{id:!0,class:!0}),R(o).forEach(_),i=N(T),r=C(T,"DIV",{});var q=R(r);s=C(q,"LABEL",{for:!0});var pe=R(s);l=D(pe,"World Size:"),pe.forEach(_),m=N(q),p=C(q,"INPUT",{id:!0,type:!0,step:!0}),u=N(q),f=C(q,"SPAN",{});var W=R(f);v=D(W,"("),x=D(W,c),w=D(W," x "),S=D(W,y),L=D(W," : "),d=D(W,g),E=D(W,")"),W.forEach(_),q.forEach(_),A=N(T),b=C(T,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(b).forEach(_),T.forEach(_),this.h()},h(){$(o,"id","datgui-container"),$(o,"class","svelte-198vt5w"),$(s,"for","worldSize"),$(p,"id","worldSize"),$(p,"type","number"),$(p,"step","1"),$(b,"id","canvas"),$(b,"width",t[1].width),$(b,"height",t[1].height),$(b,"class","svelte-198vt5w")},m(I,T){z(I,e,T),Y(n,e,null),h(e,a),h(e,o),h(e,i),h(e,r),h(r,s),h(s,l),h(r,m),h(r,p),de(p,t[0].worldSize),h(r,u),h(r,f),h(f,v),h(f,x),h(f,w),h(f,S),h(f,L),h(f,d),h(f,E),h(e,A),h(e,b),P=!0,O||(ie=[K(wn,"keydown",t[2]),K(p,"input",t[5]),K(p,"change",t[3]),K(b,"contextmenu",se(kn))],O=!0)},p(I,[T]){T&1&&ge(p.value)!==I[0].worldSize&&de(p,I[0].worldSize),(!P||T&1)&&c!==(c=2**I[0].worldSize+"")&&ae(x,c),(!P||T&1)&&y!==(y=2**I[0].worldSize+"")&&ae(S,y),(!P||T&1)&&g!==(g=2**(I[0].worldSize+1)+"")&&ae(d,g)},i(I){P||(F(n.$$.fragment,I),P=!0)},o(I){M(n.$$.fragment,I),P=!1},d(I){I&&_(e),U(n),O=!1,xe(ie)}}}const kn=t=>t;function Dn(t,e,n){const a={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},o={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>c(),pause:!1,grid:!1,pen:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},r={iteration:0,worldSize:8},s={f:ue[0].f,k:ue[0].k};let l,m;const p=async()=>{const y=await Ee(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new y.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const S=document.getElementById("datgui-container");if(!S)throw new Error("Gui container not ready");S.appendChild(l.domElement),l.add(o,"pause").name("Pause"),l.add(o,"grid").name("Debug grid"),l.add(o,"pen").name("Show pen"),l.add(o,"reset").name("Reset simulation"),l.add(o,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const L={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(o,"initialConditions",L).onFinishChange(o.reset).name("Initial conditions");const g=l.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",l.add(o,"speed",1,200).name("Simulation speed").listen(),l.add(i,"penSize",0,r.worldSize).name("Pen size").listen(),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},u=y=>{if(y.code==="Space"){o.pause=!o.pause,y.preventDefault();return}if(y.code==="KeyR"&&!y.getModifierState("Control")){c(),y.preventDefault();return}};let f;const v=()=>{i.x=Math.random(),i.y=Math.random(),i.penSize=Math.random()*3,i.pressedLeft=!0,setTimeout(()=>i.pressedLeft=!1,500),f=setTimeout(v,Math.random()*5e3)},c=()=>{isNaN(r.worldSize)||(r.worldSize>11&&n(0,r.worldSize=11,r),r.worldSize<1&&n(0,r.worldSize=1,r),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),p(),m=St({controls:o,info:r,mouseState:i,simulationParameters:s}),f&&clearTimeout(f),v())},x=y=>{s.f=y.detail.f,s.k=y.detail.k,s.f>.03?o.speed=50:o.speed=2};he(()=>{c()}),ve(()=>{l.destroy(),m.destroy()});function w(){r.worldSize=ge(this.value),n(0,r)}return[r,a,u,c,x,w]}class Ye extends j{constructor(e){super(),Z(this,e,Dn,An,Q,{})}}function Ue(t,e,n){const a=t.slice();return a[17]=e[n],a}function We(t){let e,n,a,o,i,r,s,l,m,p=ue,u=[];for(let f=0;f<p.length;f+=1)u[f]=Xe(Ue(t,p,f));return r=new be({props:{sketch:t[4]}}),{c(){e=B("div"),n=k("Select f and k parameters on the map of use a preset"),a=V(),o=B("select");for(let f=0;f<u.length;f+=1)u[f].c();i=V(),H(r.$$.fragment),this.h()},l(f){e=C(f,"DIV",{});var v=R(e);n=D(v,"Select f and k parameters on the map of use a preset"),v.forEach(_),a=N(f),o=C(f,"SELECT",{class:!0});var c=R(o);for(let x=0;x<u.length;x+=1)u[x].l(c);c.forEach(_),i=N(f),X(r.$$.fragment,f),this.h()},h(){$(o,"class","full-width svelte-1qznlxf"),t[0]===void 0&&Ie(()=>t[6].call(o))},m(f,v){z(f,e,v),h(e,n),z(f,a,v),z(f,o,v);for(let c=0;c<u.length;c+=1)u[c].m(o,null);_e(o,t[0]),z(f,i,v),Y(r,f,v),s=!0,l||(m=[K(o,"change",t[6]),K(o,"change",t[7])],l=!0)},p(f,v){if(v&0){p=ue;let c;for(c=0;c<p.length;c+=1){const x=Ue(f,p,c);u[c]?u[c].p(x,v):(u[c]=Xe(x),u[c].c(),u[c].m(o,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=p.length}v&1&&_e(o,f[0])},i(f){s||(F(r.$$.fragment,f),s=!0)},o(f){M(r.$$.fragment,f),s=!1},d(f){f&&_(e),f&&_(a),f&&_(o),Ce(u,f),f&&_(i),U(r,f),l=!1,xe(m)}}}function Xe(t){let e,n=t[17].type+"",a,o,i=t[17].name+"",r,s,l=t[17].f+"",m,p,u=t[17].k+"",f,v;return{c(){e=B("option"),a=k(n),o=k(" - "),r=k(i),s=k(" (f/k "),m=k(l),p=k(" / "),f=k(u),v=k(`)
                `),this.h()},l(c){e=C(c,"OPTION",{});var x=R(e);a=D(x,n),o=D(x," - "),r=D(x,i),s=D(x," (f/k "),m=D(x,l),p=D(x," / "),f=D(x,u),v=D(x,`)
                `),x.forEach(_),this.h()},h(){e.__value=t[17],e.value=e.__value},m(c,x){z(c,e,x),h(e,a),h(e,o),h(e,r),h(e,s),h(e,m),h(e,p),h(e,f),h(e,v)},p:G,d(c){c&&_(e)}}}function Bn(t){let e,n,a=t[1]?"Close":"F/K selection",o,i,r,s,l,m=t[1]&&We(t);return{c(){e=B("div"),n=B("button"),o=k(a),i=V(),m&&m.c(),this.h()},l(p){e=C(p,"DIV",{id:!0,class:!0});var u=R(e);n=C(u,"BUTTON",{class:!0,id:!0});var f=R(n);o=D(f,a),f.forEach(_),i=N(u),m&&m.l(u),u.forEach(_),this.h()},h(){$(n,"class","full-width svelte-1qznlxf"),$(n,"id","toggleButton"),$(e,"id","container"),$(e,"class","svelte-1qznlxf"),ke(e,"no-cursor",t[2])},m(p,u){z(p,e,u),h(e,n),h(n,o),h(e,i),m&&m.m(e,null),r=!0,s||(l=K(n,"click",t[5]),s=!0)},p(p,[u]){(!r||u&2)&&a!==(a=p[1]?"Close":"F/K selection")&&ae(o,a),p[1]?m?(m.p(p,u),u&2&&F(m,1)):(m=We(p),m.c(),F(m,1),m.m(e,null)):m&&(ce(),M(m,1,1,()=>{m=null}),me()),(!r||u&4)&&ke(e,"no-cursor",p[2])},i(p){r||(F(m),r=!0)},o(p){M(m),r=!1},d(p){p&&_(e),m&&m.d(),s=!1,l()}}}function Cn(t,e,n){const a=Re();let o=ue[0],i=!0;const r=[0,.12],s=[.03,.07],l=g=>{const{f:d,k:E}=g,A=c.map(E,s[0],s[1],0,c.width),b=c.map(d,r[0],r[1],c.height,0);return{x:A,y:b}},m=g=>{const{x:d,y:E}=g,A=c.map(E,c.height,0,r[0],r[1]),b=c.map(d,0,c.width,s[0],s[1]);return{f:A,k:b}},p=g=>{const d=g.mouseX,E=g.mouseY;if(d<0||E<0||d>g.width||E>g.height)return;const{f:A,k:b}=m({x:g.mouseX,y:g.mouseY});n(0,o={f:A,k:b,name:"custom",type:"manual"}),a("fkupdated",o)},u=g=>{g.noStroke();const d=g.textSize();for(const E of ue){const{x:A,y:b}=l({f:E.f,k:E.k}),P=E.f===o.f&&E.k===o.k;g.circle(A,b,3),g.textSize(P?d*2:d),g.fill(P?[240,240,150]:[255,255,255]),g.text(E.name,A-g.textWidth(E.name)/2,b-10)}},f=g=>{g.noFill(),g.stroke("red");const{x:d,y:E}=l(o);g.text("F",10,E>10?E-5:E+15),g.line(0,E,g.width,E),g.text("K",d<g.width-10?d+5:d-15,g.height-10),g.line(d,0,d,g.height),g.circle(d,E,10)},v=g=>{const{f:d,k:E}=o,A=`F: ${d.toFixed(4)}`,b=`K: ${E.toFixed(4)}`,P=g.textSize(),O=g.height*.05;g.textStyle(g.BOLD),g.textSize(O),g.fill("white"),g.stroke(0),g.strokeWeight(1),g.text(A,g.width*.05,g.textSize()),g.text(b,g.width*.05,g.textSize()+g.textSize()+6),g.textStyle(g.NORMAL),g.textSize(P)};let c,x=!1;const w=g=>{c=g;let d;g.preload=()=>{d=g.loadImage(Fe+"/parameters_map.png")},g.setup=()=>{g.createCanvas(400,400),g.frameRate(55)},g.draw=()=>{g.background(255),g.tint(150,190),g.image(d,0,0,g.width,g.height),u(g),f(g),v(g),n(2,x=!1),g.mouseIsPressed&&(p(g),n(2,x=!0))}},y=()=>{n(1,i=!i),i||c.remove()};ve(()=>c?.remove());function S(){o=Te(this),n(0,o)}return[o,i,x,a,w,y,S,()=>a("fkupdated",o)]}let zn=class extends j{constructor(e){super(),Z(this,e,Cn,Bn,Q,{})}};const qe=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),a=t.clientX-n.left,o=t.clientY-n.top,{width:i,height:r}=e,s=a/i,l=(r-o)/r;return{x:s,y:l}};const{window:Ln}=Pe;function Rn(t){let e,n,a,o,i,r,s,l,m,p,u,f,v,c=2**t[0].worldSize+"",x,w,y=2**t[0].worldSize+"",S,L,g=2**(t[0].worldSize+1)+"",d,E,A,b,P,O,ie;return n=new zn({}),n.$on("fkupdated",t[7]),{c(){e=B("main"),H(n.$$.fragment),a=V(),o=B("div"),i=V(),r=B("div"),s=B("label"),l=k("World Size:"),m=V(),p=B("input"),u=V(),f=B("span"),v=k("("),x=k(c),w=k(" x "),S=k(y),L=k(" : "),d=k(g),E=k(")"),A=V(),b=B("canvas"),this.h()},l(I){e=C(I,"MAIN",{});var T=R(e);X(n.$$.fragment,T),a=N(T),o=C(T,"DIV",{id:!0,class:!0}),R(o).forEach(_),i=N(T),r=C(T,"DIV",{});var q=R(r);s=C(q,"LABEL",{for:!0});var pe=R(s);l=D(pe,"World Size:"),pe.forEach(_),m=N(q),p=C(q,"INPUT",{id:!0,type:!0,step:!0}),u=N(q),f=C(q,"SPAN",{});var W=R(f);v=D(W,"("),x=D(W,c),w=D(W," x "),S=D(W,y),L=D(W," : "),d=D(W,g),E=D(W,")"),W.forEach(_),q.forEach(_),A=N(T),b=C(T,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(b).forEach(_),T.forEach(_),this.h()},h(){$(o,"id","datgui-container"),$(o,"class","svelte-18zf5fr"),$(s,"for","worldSize"),$(p,"id","worldSize"),$(p,"type","number"),$(p,"step","1"),$(b,"id","canvas"),$(b,"width",t[1].width),$(b,"height",t[1].height),$(b,"class","svelte-18zf5fr")},m(I,T){z(I,e,T),Y(n,e,null),h(e,a),h(e,o),h(e,i),h(e,r),h(r,s),h(s,l),h(r,m),h(r,p),de(p,t[0].worldSize),h(r,u),h(r,f),h(f,v),h(f,x),h(f,w),h(f,S),h(f,L),h(f,d),h(f,E),h(e,A),h(e,b),P=!0,O||(ie=[K(Ln,"keydown",t[2]),K(p,"input",t[8]),K(p,"change",t[6]),K(b,"mousemove",t[4]),K(b,"mousedown",se(t[5])),K(b,"mouseup",t[5]),K(b,"wheel",t[3]),K(b,"keydown",se(t[2])),K(b,"contextmenu",se(Pn))],O=!0)},p(I,[T]){T&1&&ge(p.value)!==I[0].worldSize&&de(p,I[0].worldSize),(!P||T&1)&&c!==(c=2**I[0].worldSize+"")&&ae(x,c),(!P||T&1)&&y!==(y=2**I[0].worldSize+"")&&ae(S,y),(!P||T&1)&&g!==(g=2**(I[0].worldSize+1)+"")&&ae(d,g)},i(I){P||(F(n.$$.fragment,I),P=!0)},o(I){M(n.$$.fragment,I),P=!1},d(I){I&&_(e),U(n),O=!1,xe(ie)}}}const Pn=t=>t;function In(t,e,n){const a={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},o={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>x(),pause:!1,grid:!1,pen:!0,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},r={iteration:0,worldSize:8},s={f:ue[0].f,k:ue[0].k};let l,m;const p=async()=>{const S=await Ee(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new S.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const L=document.getElementById("datgui-container");if(!L)throw new Error("Gui container not ready");L.appendChild(l.domElement),l.add(o,"pause").name("Pause"),l.add(o,"grid").name("Debug grid"),l.add(o,"reset").name("Reset simulation"),l.add(o,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(o,"initialConditions",g).onFinishChange(o.reset).name("Initial conditions");const d=l.add(r,"iteration").listen();d.domElement.style.pointerEvents="none",l.add(o,"speed",1,200).name("Simulation speed"),l.add(i,"penSize",0,r.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},u=S=>{if(S.code==="Space"){o.pause=!o.pause,S.preventDefault();return}if(S.code==="KeyR"&&!S.getModifierState("Control")){x(),S.preventDefault();return}},f=S=>{if(!S.getModifierState("Control"))return;const L=qe(S);i.panX=L.x,i.panY=L.y,S.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),S.preventDefault()},v=S=>{const L=qe(S);i.x=L.x,i.y=L.y},c=S=>{if(![0,2].includes(S.button)||!["mouseup","mousedown"].includes(S.type))return;let L=S.type==="mousedown";S.button===0&&(i.pressedLeft=L),S.button===2&&(i.pressedRight=L)},x=()=>{isNaN(r.worldSize)||(r.worldSize>11&&n(0,r.worldSize=11,r),r.worldSize<1&&n(0,r.worldSize=1,r),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),p(),m=St({controls:o,info:r,mouseState:i,simulationParameters:s}))},w=S=>{s.f=S.detail.f,s.k=S.detail.k};he(()=>{x()}),ve(()=>{l.destroy(),m.destroy()});function y(){r.worldSize=ge(this.value),n(0,r)}return[r,a,u,f,v,c,x,w,y]}class Ge extends j{constructor(e){super(),Z(this,e,In,Rn,Q,{})}}const Tn=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Fn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,Mn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float PI = 3.14159265359;
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = sin(iteration*PI/180.0);
    if (val < 0.0) {
        val = -1.0 * val;
    }
    gl_FragColor = vec4(A, B, val, 1.0);
}
`,Kn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,Vn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,Nn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,On=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    // vec3 color1 = vec3(1.0, 0.0, 0.0);
    // vec3 color2 = vec3(0.0, 1.0, 0.0);
    // vec3 result = color1 * A + color2 * B;

    vec3 color1RGB = vec3(0.639, 0.941, 0.717);
    vec3 color2RGB = vec3(0.929, 0.082, 0.705);

    vec3 color1HSV = rgb2hsv(color1RGB);
    vec3 color2HSV = rgb2hsv(color2RGB);

    float color1Offset = (cos(iteration * 0.001) + 1.0) * 0.5;
    float color1newH = 0.5 * (color1HSV.x + color1Offset);
    vec3 color1newHSV = vec3(color1newH, color1HSV.g, color1HSV.b);

    float color2Offset = (cos(iteration * 0.002)) * 0.5;
    float color2newH = 0.5 * (color2HSV.x + color2Offset + 0.33);
    vec3 color2newHSV = vec3(color2newH, color2HSV.g, color2HSV.b);


    vec3 resultHSV = color1newHSV * A + color2newHSV * B;
    vec3 result = hsv2rgb(resultHSV);

    gl_FragColor = vec4(result, 1.0);
}
`,Hn=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,Yn=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec3 color1 = vec3(0.0, 0.0, 1.0);
    vec3 color2 = vec3(1.0, 0.0, 0.0);
    vec3 result = vec3(A, 0.0, 1.0-A);

    gl_FragColor = vec4(result, 1.0);
}
`,Un=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    if (A > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else if (A > 0.4) {
        gl_FragColor = vec4(1.0 - A, 0.0, 0.0, 1.0);
    } else { 
        gl_FragColor = vec4(0.0, A, 0.0, 1.0);
    }
}
`,Wn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 blue = vec4(0.0, 0.0, 1.0, 1.0);
    vec4 color = mix(blue, red, A);

    vec4 softRed = vec4(0.8588, 0.2824, 0.3765, 1.0);
    vec4 softBlue = vec4(0.2824, 0.3882, 0.8588, 1.0);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.6);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.4);
    vec4 softColor = mix(softBlue, softRed, 1.0-A);


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(color);
    }

}
`,Xn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/MATLAB_cool.frag
float colormap_red(float x) {
    return (1.0 + 1.0 / 63.0) * x - 1.0 / 63.0;
}

float colormap_green(float x) {
    return -(1.0 + 1.0 / 63.0) * x + (1.0 + 1.0 / 63.0);
}

vec4 colormap(float x) {
    float r = clamp(colormap_red(x), 0.0, 1.0);
    float g = clamp(colormap_green(x), 0.0, 1.0);
    float b = 1.0;
    return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,qn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdBu.frag
float colormap_red(float x) {
	if (x < 0.09771832105856419) {
		return 7.60263247863246E+02 * x + 1.02931623931624E+02;
	} else if (x < 0.3017162107441106) {
		return (-2.54380938558548E+02 * x + 4.29911571188803E+02) * x + 1.37642085716717E+02;
	} else if (x < 0.4014205790737471) {
		return 8.67103448276151E+01 * x + 2.18034482758611E+02;
	} else if (x < 0.5019932233215039) {
		return -6.15461538461498E+01 * x + 2.77547692307680E+02;
	} else if (x < 0.5969483882550937) {
		return -3.77588522588624E+02 * x + 4.36198819698878E+02;
	} else if (x < 0.8046060096654594) {
		return (-6.51345897546620E+02 * x + 2.09780968434337E+02) * x + 3.17674951640855E+02;
	} else {
		return -3.08431855203590E+02 * x + 3.12956742081421E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09881640500975222) {
		return 2.41408547008547E+02 * x + 3.50427350427364E-01;
	} else if (x < 0.5000816285610199) {
		return ((((1.98531871433258E+04 * x - 2.64108262469187E+04) * x + 1.10991785969817E+04) * x - 1.92958444776211E+03) * x + 8.39569642882186E+02) * x - 4.82944517518776E+01;
	} else if (x < 0.8922355473041534) {
		return (((6.16712686949223E+03 * x - 1.59084026055125E+04) * x + 1.45172137257997E+04) * x - 5.80944127411621E+03) * x + 1.12477959061948E+03;
	} else {
		return -5.28313797313699E+02 * x + 5.78459299959206E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.1033699568661857) {
		return 1.30256410256410E+02 * x + 3.08518518518519E+01;
	} else if (x < 0.2037526071071625) {
		return 3.38458128078815E+02 * x + 9.33004926108412E+00;
	} else if (x < 0.2973267734050751) {
		return (-1.06345054944861E+02 * x + 5.93327252747168E+02) * x - 3.81852747252658E+01;
	} else if (x < 0.4029109179973602) {
		return 6.68959706959723E+02 * x - 7.00740740740798E+01;
	} else if (x < 0.5006715489526758) {
		return 4.87348695652202E+02 * x + 3.09898550724286E+00;
	} else if (x < 0.6004396902588283) {
		return -6.85799999999829E+01 * x + 2.81436666666663E+02;
	} else if (x < 0.702576607465744) {
		return -1.81331701891043E+02 * x + 3.49137263626287E+02;
	} else if (x < 0.9010407030582428) {
		return (2.06124143164576E+02 * x - 5.78166906665595E+02) * x + 5.26198653917172E+02;
	} else {
		return -7.36990769230737E+02 * x + 8.36652307692262E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,Gn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,jn=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((B-0.1)*(1.0/0.9));


    if (B < 0.1) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,re={},Zn=t=>{const e={vert:Tn,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),prevState:t.prop("inputBuffer")}};re.raw=t({frag:Fn,...e}),re.A_gradiant1=t({frag:Un,...e}),re.A_gradiant2=t({frag:Wn,...e}),re.A_MATLAB_cool=t({frag:Xn,...e}),re.A_IDL_CB_RdBu=t({frag:qn,...e}),re.A_IDL_CB_RdYiBu=t({frag:Gn,...e}),re.B_IDL_CB_RdYiBu=t({frag:jn,...e}),re.grayscale=t({frag:Kn,...e}),re.blackwhite=t({frag:Vn,...e}),re.whiteblack=t({frag:Nn,...e}),re.timebasedblue=t({frag:Mn,...e}),re.lerp=t({frag:On,...e}),re.mrob=t({frag:Hn,...e}),re.redblue=t({frag:Yn,...e})},Qn=t=>{const{colorMode:e,inputBuffer:n,iteration:a,outputBuffer:o,zoomState:i}=t;(re[e]||re.raw)({inputBuffer:n,iteration:a,outputBuffer:o,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},Jn=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;

varying vec2 v_fk;

uniform bool penIsActive;
uniform bool eraserIsActive;
uniform float penDensity;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

// https://thebookofshaders.com/10/
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

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

    float f = v_fk.x;
    float k = v_fk.y;

    float newA = A + ((Da * La) - (A * B * B) + (f * (1.0 - A)));
    float newB = B + ((Db * Lb) + (A * B * B) - ((k + f) * B));


    float rnd = random(uv);
    if (penIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`,eo=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float penRadius;

attribute vec2 position;
attribute vec2 fk;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;
varying vec2 v_fk;

void main() {
    uv = 0.5 * (position + 1.0);
    v_fk = fk;
    mouseUv = mousePosition;
    scaledPenRadius = penRadius;
    gl_Position = vec4(position, 0, 1);
}
`;let bt;const to=(t,e)=>{bt=t({frag:Jn,vert:eo,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]],fk:(n,a)=>{const{maxF:o,minF:i,maxK:r,minK:s}=a.simulationParameters;return[[i,r],[i,s],[o,r],[o,r],[i,s],[o,s]]}},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive")}})},no=t=>{const{inputBuffer:e,outputBuffer:n,simulationParameters:a,pauseSimulation:o,mouseState:i,worldSize:r}=t;bt({inputBuffer:e,outputBuffer:n,pauseSimulation:o,zoomLevel:i.zoomLevel,pan:[i.panX,i.panY],mousePosition:[i.x,i.y],penRadius:1/2**(r-i.penSize),penDensity:i.penDensity,penIsActive:i.pressedLeft,eraserIsActive:i.pressedRight,simulationParameters:a})},oo=(t,e)=>t==="randomSpots"?ao(e,.001):t==="middleCircleAndRandomSpots"?ro(e,.005,.05):t==="empty"||t==="full"?je(e):io(e,.02),ro=(t,e,n)=>{const a=t*n;return Array(t*t).fill(0).map((o,i)=>{const r=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-r)<a?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},je=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),ao=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),io=(t,e)=>Array(t*t).fill(0).map((n,a)=>{const o=Math.floor(a/t),i=a%t;return Math.hypot(t/2-i,t/2-o)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),lo=t=>{const{controls:e,info:n,mouseState:a,simulationParameters:o}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const r=Se({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const s=2**n.worldSize,l=oo(e.initialConditions,s),m=()=>r.framebuffer({color:r.texture({radius:s,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),p=Array(2).fill(0).map(m);return to(r,s),Zn(r),r.frame(()=>{e.pause||n.iteration++;let u=p[(n.iteration+1)%2];for(let f=0;f<e.speed;f++){n.iteration++;const v=p[n.iteration%2];u=p[(n.iteration+1)%2],no({inputBuffer:v,outputBuffer:u,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:a,simulationParameters:o})}Qn({colorMode:e.colors,inputBuffer:u,iteration:n.iteration,outputBuffer:null,zoomState:a})}),r},Ze=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),a=t.clientX-n.left,o=t.clientY-n.top,{width:i,height:r}=e,s=a/i,l=(r-o)/r;return{x:s,y:l}};const{window:so}=Pe;function fo(t){let e,n,a,o,i,r,s,l,m,p,u,f;return{c(){e=B("main"),n=B("div"),a=V(),o=B("div"),i=B("label"),r=k("World Size:"),s=V(),l=B("input"),m=V(),p=B("canvas"),this.h()},l(v){e=C(v,"MAIN",{});var c=R(e);n=C(c,"DIV",{id:!0,class:!0}),R(n).forEach(_),a=N(c),o=C(c,"DIV",{});var x=R(o);i=C(x,"LABEL",{for:!0});var w=R(i);r=D(w,"World Size:"),w.forEach(_),s=N(x),l=C(x,"INPUT",{id:!0,type:!0,step:!0}),x.forEach(_),m=N(c),p=C(c,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(p).forEach(_),c.forEach(_),this.h()},h(){$(n,"id","datgui-container"),$(n,"class","svelte-198vt5w"),$(i,"for","worldSize"),$(l,"id","worldSize"),$(l,"type","number"),$(l,"step","1"),$(p,"id","canvas"),$(p,"width",t[1].width),$(p,"height",t[1].height),$(p,"class","svelte-198vt5w")},m(v,c){z(v,e,c),h(e,n),h(e,a),h(e,o),h(o,i),h(i,r),h(o,s),h(o,l),de(l,t[0].worldSize),h(e,m),h(e,p),u||(f=[K(so,"keydown",t[2]),K(l,"input",t[7]),K(l,"change",t[6]),K(p,"mousemove",t[4]),K(p,"mousedown",se(t[5])),K(p,"mouseup",t[5]),K(p,"wheel",t[3]),K(p,"keydown",se(t[2])),K(p,"contextmenu",se(uo))],u=!0)},p(v,[c]){c&1&&ge(l.value)!==v[0].worldSize&&de(l,v[0].worldSize)},i:G,o:G,d(v){v&&_(e),u=!1,xe(f)}}}const uo=t=>t;function co(t,e,n){const a={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},o={colors:"B_IDL_CB_RdYiBu",initialConditions:"full",reset:()=>x(),pause:!1,grid:!1,speed:10},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:12,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},r={iteration:0,worldSize:10},s={minK:.02,maxK:.07,minF:0,maxF:.12};let l,m;const p=async()=>{const y=await Ee(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new y.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const S=document.getElementById("datgui-container");if(!S)throw new Error("Gui container not ready");S.appendChild(l.domElement),l.add(o,"pause").name("Pause"),l.add(o,"grid").name("Debug grid"),l.add(o,"reset").name("Reset simulation"),l.add(o,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","B_IDL_CB_RdYiBu"]).name("Color scheme");const L={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty",Full:"full"};l.add(o,"initialConditions",L).onFinishChange(o.reset).name("Initial conditions");const g=l.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",l.add(o,"speed",1,500).name("Simulation speed"),l.add(i,"penSize",0,r.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(s,"minK",0,s.maxK),l.add(s,"maxK",s.minK,1),l.add(s,"minF",0,s.maxF),l.add(s,"maxF",s.minF,1)},u=y=>{if(y.code==="Space"){o.pause=!o.pause,y.preventDefault();return}if(y.code==="KeyR"&&!y.getModifierState("Control")){x(),y.preventDefault();return}},f=y=>{if(!y.getModifierState("Control"))return;const S=Ze(y);i.panX=S.x,i.panY=S.y,y.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),y.preventDefault()},v=y=>{const S=Ze(y);i.x=S.x,i.y=S.y},c=y=>{if(![0,2].includes(y.button)||!["mouseup","mousedown"].includes(y.type))return;let S=y.type==="mousedown";y.button===0&&(i.pressedLeft=S),y.button===2&&(i.pressedRight=S)},x=()=>{isNaN(r.worldSize)||(r.worldSize>12&&n(0,r.worldSize=12,r),r.worldSize<1&&n(0,r.worldSize=1,r),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),p(),m=lo({controls:o,info:r,mouseState:i,simulationParameters:s}))};he(()=>{x(),i.pressedLeft=!0,setTimeout(()=>i.pressedLeft=!1,10)}),ve(()=>{l.destroy(),m.destroy()});function w(){r.worldSize=ge(this.value),n(0,r)}return[r,a,u,f,v,c,x,w]}let Ke=class extends j{constructor(e){super(),Z(this,e,co,fo,Q,{})}};const mo=t=>{const e=[];for(let r=0;r<t.height;r++){e.push([]);for(let s=0;s<t.width;s++)e[e.length-1].push({A:1,B:0})}const n=5,a=5,o=Math.floor(t.width/2),i=Math.floor(t.height/2);for(let r=i-a;r<i+a;r++)for(let s=o-n;s<o+n;s++)e[r][s].B=1;return e},po=(t,e)=>{const n={width:t.width/e[0].length,height:t.height/e.length};for(let a=0;a<e.length;a++)for(let o=0;o<e[0].length;o++){const{A:i,B:r}=e[a][o];t.fill(i*255,r*255,0),t.rect(o*n.width,a*n.height,n.width,n.height)}},vo=1,xo=.5,Qe=.055,go=.062,ho=t=>{const e=[];for(let n=0;n<t.length;n++){e.push([]);for(let a=0;a<t[0].length;a++){const{A:o,B:i}=t[n][a],r=Je(t,{x:a,y:n},"A"),s=Je(t,{x:a,y:n},"B"),l=o+(vo*r-o*i*i+Qe*(1-o)),m=i+(xo*s+o*i*i-(go+Qe)*i);e[n].push({A:l,B:m})}}return e},Je=(t,e,n)=>{const a=_o(t,e);let o=0;for(const i of a){const{coord:r,weight:s}=i;o+=t[r.y][r.x][n]*s}return o},_o=(t,e)=>{const{x:n,y:a}=e,o=t[0].length,i=t.length,r={coord:{x:n>0?n-1:o-1,y:a>0?a-1:i-1},weight:.05},s={coord:{x:n,y:a>0?a-1:i-1},weight:.2},l={coord:{x:n<o-1?n+1:0,y:a>0?a-1:i-1},weight:.05},m={coord:{x:n>0?n-1:o-1,y:a},weight:.2},p={coord:{x:n,y:a},weight:-1},u={coord:{x:n<o-1?n+1:0,y:a},weight:.2},f={coord:{x:n>0?n-1:o-1,y:a<i-1?a+1:0},weight:.05},v={coord:{x:n,y:a<i-1?a+1:0},weight:.2},c={coord:{x:n<o-1?n+1:0,y:a<i-1?a+1:0},weight:.05};return[r,s,l,m,p,u,f,v,c]};function Eo(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){H(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){Y(e,a,o),n=!0},p:G,i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){M(e.$$.fragment,a),n=!1},d(a){U(e,a)}}}function So(t){const e={width:200,height:200};let n;return[o=>{let i;o.setup=()=>{n=o,o.createCanvas(500,500),o.noStroke(),i=mo(e)},o.draw=()=>{o.background(0);for(let r=0;r<20;r++)i=ho(i);po(n,i)}}]}let bo=class extends j{constructor(e){super(),Z(this,e,So,Eo,Q,{})}},J,we;const yo=t=>{J=[],we=[];for(let i=0;i<t.height;i++){J.push([]),we.push([]);for(let r=0;r<t.width;r++)J[J.length-1].push({A:1,B:0}),we[J.length-1].push({A:1,B:0})}const e=5,n=5,a=Math.floor(t.width/2),o=Math.floor(t.height/2);for(let i=o-n;i<o+n;i++)for(let r=a-e;r<a+e;r++)J[i][r].B=1;return J},$o=t=>{const e={width:t.width/J[0].length,height:t.height/J.length};for(let n=0;n<J.length;n++)for(let a=0;a<J[0].length;a++){const{A:o,B:i}=J[n][a];t.fill(o*255,i*255,0),t.rect(a*e.width,n*e.height,e.width,e.height)}},wo=1,Ao=.5,et=.055,ko=.062,Do=()=>{for(let e=0;e<J.length;e++)for(let n=0;n<J[0].length;n++){const{A:a,B:o}=J[e][n],i=tt(J,{x:n,y:e},"A"),r=tt(J,{x:n,y:e},"B"),s=a+(wo*i-a*o*o+et*(1-a)),l=o+(Ao*r+a*o*o-(ko+et)*o);we[e][n]={A:s,B:l}}const t=J;return J=we,we=t,J},tt=(t,e,n)=>{const a=Bo(t,e);let o=0;for(const i of a){const{coord:r,weight:s}=i;o+=t[r.y][r.x][n]*s}return o},Bo=(t,e)=>{const{x:n,y:a}=e,o=t[0].length,i=t.length,r={coord:{x:n>0?n-1:o-1,y:a>0?a-1:i-1},weight:.05},s={coord:{x:n,y:a>0?a-1:i-1},weight:.2},l={coord:{x:n<o-1?n+1:0,y:a>0?a-1:i-1},weight:.05},m={coord:{x:n>0?n-1:o-1,y:a},weight:.2},p={coord:{x:n,y:a},weight:-1},u={coord:{x:n<o-1?n+1:0,y:a},weight:.2},f={coord:{x:n>0?n-1:o-1,y:a<i-1?a+1:0},weight:.05},v={coord:{x:n,y:a<i-1?a+1:0},weight:.2},c={coord:{x:n<o-1?n+1:0,y:a<i-1?a+1:0},weight:.05};return[r,s,l,m,p,u,f,v,c]};function Co(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){H(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){Y(e,a,o),n=!0},p:G,i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){M(e.$$.fragment,a),n=!1},d(a){U(e,a)}}}function zo(t){const e={width:200,height:200};let n;return[o=>{o.setup=()=>{n=o,o.createCanvas(500,500),o.noStroke(),yo(e)},o.draw=()=>{for(let i=0;i<5;i++)Do();$o(n)}}]}let Lo=class extends j{constructor(e){super(),Z(this,e,zo,Co,Q,{})}},ee,Ae;const Ro=t=>{ee=[],Ae=[];for(let i=0;i<t.height;i++){ee.push([]),Ae.push([]);for(let r=0;r<t.width;r++)ee[ee.length-1].push({A:1,B:0}),Ae[ee.length-1].push({A:1,B:0})}const e=5,n=5,a=Math.floor(t.width/2),o=Math.floor(t.height/2);for(let i=o-n;i<o+n;i++)for(let r=a-e;r<a+e;r++)ee[i][r].B=1;return ee},Po=t=>{const e={width:t.width/ee[0].length,height:t.height/ee.length};for(let n=0;n<ee.length;n++)for(let a=0;a<ee[0].length;a++){const{A:o,B:i}=ee[n][a];t.fill(o*255,i*255,0),t.rect(a*e.width,n*e.height,e.width,e.height)}},Io=1,To=.5,nt=.055,Fo=.062,Mo=()=>{for(let e=0;e<ee.length;e++)for(let n=0;n<ee[0].length;n++){const{A:a,B:o}=ee[e][n],i=ot(ee,{x:n,y:e},"A"),r=ot(ee,{x:n,y:e},"B"),s=a+(Io*i-a*o*o+nt*(1-a)),l=o+(To*r+a*o*o-(Fo+nt)*o);Ae[e][n]={A:s,B:l}}const t=ee;return ee=Ae,Ae=t,ee},ot=(t,e,n)=>{const a=Ko(t,e);let o=0;for(const i of a){const{coord:r,weight:s}=i;o+=t[r.y][r.x][n]*s}return o},Ko=(t,e)=>{const{x:n,y:a}=e,o=t[0].length,i=t.length,r={coord:{x:n>0?n-1:o-1,y:a>0?a-1:i-1},weight:.05},s={coord:{x:n,y:a>0?a-1:i-1},weight:.2},l={coord:{x:n<o-1?n+1:0,y:a>0?a-1:i-1},weight:.05},m={coord:{x:n>0?n-1:o-1,y:a},weight:.2},p={coord:{x:n,y:a},weight:-1},u={coord:{x:n<o-1?n+1:0,y:a},weight:.2},f={coord:{x:n>0?n-1:o-1,y:a<i-1?a+1:0},weight:.05},v={coord:{x:n,y:a<i-1?a+1:0},weight:.2},c={coord:{x:n<o-1?n+1:0,y:a<i-1?a+1:0},weight:.05};return[r,s,l,m,p,u,f,v,c]};function Vo(t){let e,n;return e=new be({props:{sketch:t[0]}}),{c(){H(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){Y(e,a,o),n=!0},p:G,i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){M(e.$$.fragment,a),n=!1},d(a){U(e,a)}}}function No(t){const e={width:200,height:200};let n;return[o=>{o.setup=()=>{n=o,o.createCanvas(500,500),o.noStroke(),Ro(e)},o.draw=()=>{for(let i=0;i<5;i++)Mo();Po(n)}}]}let Oo=class extends j{constructor(e){super(),Z(this,e,No,Vo,Q,{})}};function Ho(t){let e;return{c(){e=B("canvas"),this.h()},l(n){e=C(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(_),this.h()},h(){$(e,"id","canvas"),$(e,"width",t[0].width),$(e,"height",t[0].height),$(e,"class","svelte-1b0ol19")},m(n,a){z(n,e,a)},p:G,i:G,o:G,d(n){n&&_(e)}}}function Yo(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n=2**10,a=n*.05,o=Array(n*n).fill(0).map((i,r)=>{const s=Math.floor(r/n),l=r%n;return Math.hypot(n/2-l,n/2-s)<a?[0,1,0,1]:Math.random()<.01?[0,1,0,1]:[1,0,0,1]}).flat();return he(()=>{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const r=Se({extensions:["OES_texture_float"],canvas:i}),s=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:n,data:o,wrap:"repeat",type:"float"}),depthStencil:!1})),l=r({frag:`
precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

vec2 laplacianDiff() {
    vec2 r = vec2(0.0, 0.0);

    // top left
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${n})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${n})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${n})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${n})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${n})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${n})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${n})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${n})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${n})).rg * 0.05;

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
}`,framebuffer:p=>s[(p.tick+1)%2]}),m=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:p})=>s[p%2]},depth:{enable:!1},count:3});r.frame(()=>{m(()=>{r.draw(),l()})})}),[e]}let Uo=class extends j{constructor(e){super(),Z(this,e,Yo,Ho,Q,{})}};const Wo=(t,e,n)=>{const a=t*n;return Array(t*t).fill(0).map((o,i)=>{const r=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-r)<a?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Xo=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),qo=(t,e)=>Array(t*t).fill(0).map((n,a)=>{const o=Math.floor(a/t),i=a%t;return Math.hypot(t/2-i,t/2-o)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),ze=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}];function Go(t){let e;return{c(){e=B("canvas"),this.h()},l(n){e=C(n,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(_),this.h()},h(){$(e,"id","canvas"),$(e,"width",t[0].width),$(e,"height",t[0].height),$(e,"class","svelte-1b0ol19")},m(n,a){z(n,e,a)},p:G,i:G,o:G,d(n){n&&_(e)}}}function jo(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>m(),pause:!1},a={iteration:0},o={f:ze[n.presetParams].f,k:ze[n.presetParams].k};let i,r;const s=async()=>{const p=await Ee(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);i=new p.GUI,i.domElement.setAttribute("style","background-color: black"),i.add(o,"f").name("Feed rate").listen(),i.add(o,"k").name("Kill rate").listen(),i.add(n,"pause").name("Pause"),i.add(n,"reset").name("Reset simulation");const u=ze.reduce((c,x,w)=>(c[x.name]=w,c),{});i.add(n,"presetParams",u).onFinishChange(()=>{o.f=ze[n.presetParams].f,o.k=ze[n.presetParams].k});const f={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};i.add(n,"initialConditions",f).onFinishChange(n.reset);const v=i.add(a,"iteration").listen();v.domElement.style.pointerEvents="none"},l=()=>{document.addEventListener("keydown",p=>{if(p.code==="Space")return n.pause=!n.pause,p.preventDefault();if(p.code==="KeyR")return m(),p.preventDefault()})},m=()=>{const p=document.getElementById("canvas");if(!p)throw new Error("Canvas container not ready");r&&r.destroy(),r=Se({extensions:["OES_texture_float"],canvas:p}),a.iteration=0;const u=2**11;let f;n.initialConditions==="randomSpots"?f=Xo(u,.001):n.initialConditions==="middleCircleAndRandomSpots"?f=Wo(u,.005,.05):f=qo(u,.02);const v=Array(2).fill(0).map(()=>r.framebuffer({color:r.texture({radius:u,data:f,wrap:"repeat",type:"float"}),depthStencil:!1})),c=r({frag:`
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
    r += texture2D(prevState, uv+vec2(-1,-1)/float(${u})).rg * 0.05;
    // top
    r += texture2D(prevState, uv+vec2(0,-1)/float(${u})).rg * 0.2;
    // top right
    r += texture2D(prevState, uv+vec2(1,-1)/float(${u})).rg * 0.05;

    // left
    r += texture2D(prevState, uv+vec2(-1,0)/float(${u})).rg * 0.2;
    // middle
    r += texture2D(prevState, uv+vec2(0,0)/float(${u})).rg * -1.0;
    // right
    r += texture2D(prevState, uv+vec2(1,0)/float(${u})).rg * 0.2;

    // bottom left
    r += texture2D(prevState, uv+vec2(-1,1)/float(${u})).rg * 0.05;
    // bottom
    r += texture2D(prevState, uv+vec2(0,1)/float(${u})).rg * 0.2;
    // bottom right
    r += texture2D(prevState, uv+vec2(1,1)/float(${u})).rg * 0.05;

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
}`,framebuffer:w=>v[(w.tick+1)%2],uniforms:{Da:r.prop("Da"),Db:r.prop("Db"),f:r.prop("f"),k:r.prop("k")}}),x=r({frag:`
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
}`,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:w})=>v[w%2]},depth:{enable:!1},count:3});r.frame(()=>{x(()=>{r.draw(),!n.pause&&(a.iteration++,c({Da:1,Db:.5,...o}))})})};return he(()=>{s(),l(),m()}),ve(()=>{i.destroy(),r.destroy()}),[e]}let Zo=class extends j{constructor(e){super(),Z(this,e,jo,Go,Q,{})}};const Qo=(t,e,n)=>{const a=t*n;return Array(t*t).fill(0).map((o,i)=>{const r=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-r)<a?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Jo=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),er=(t,e)=>Array(t*t).fill(0).map((n,a)=>{const o=Math.floor(a/t),i=a%t;return Math.hypot(t/2-i,t/2-o)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),Le=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"Alpha 1",type:"alpha",f:.01,k:.047},{name:"Alpha 2",type:"alpha",f:.014,k:.053},{name:"Beta 1",type:"beta",f:.014,k:.039},{name:"Beta 2",type:"beta",f:.026,k:.051},{name:"Epsilon 1",type:"epsilon",f:.018,k:.055},{name:"Epsilon 2",type:"epsilon",f:.022,k:.059},{name:"Epsilon 1",type:"epsilon",f:.034,k:.063},{name:"Gamma 1",type:"gamma",f:.022,k:.051},{name:"Gamma 2",type:"gamma",f:.026,k:.055},{name:"Iota 1",type:"iota",f:.046,k:.0594},{name:"Lambda 1",type:"lambda",f:.026,k:.061},{name:"Lambda 2",type:"lambda",f:.034,k:.065},{name:"Mu 1",type:"mu",f:.046,k:.065},{name:"Mu 2",type:"mu",f:.058,k:.065},{name:"Pi 1",type:"pi",f:.062,k:.061},{name:"Rho 1",type:"rho",f:.09,k:.059},{name:"Rho 2",type:"rho",f:.102,k:.055},{name:"Sigma 1",type:"sigma",f:.09,k:.057},{name:"Sigma 2",type:"sigma",f:.11,k:.0523},{name:"Theta 1",type:"theta",f:.03,k:.057},{name:"Theta 2",type:"theta",f:.038,k:.061},{name:"Xi 1",type:"xi",f:.01,k:.041},{name:"Xi 2",type:"xi",f:.014,k:.047},{name:"Zeta 1",type:"zeta",f:.022,k:.061},{name:"Zeta 2",type:"zeta",f:.026,k:.059}],tr=`precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,nr=`precision mediump float;
uniform sampler2D prevState;
varying vec2 uv;

void main() {
    vec2 state = texture2D(prevState, uv).rg;
    gl_FragColor = vec4(state, 0, 1);
}
`,or=`precision mediump float;

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
`;function rr(t){let e,n,a;return{c(){e=B("canvas"),this.h()},l(o){e=C(o,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(e).forEach(_),this.h()},h(){$(e,"id","canvas"),$(e,"width",t[0].width),$(e,"height",t[0].height),$(e,"class","svelte-1b0ol19")},m(o,i){z(o,e,i),n||(a=[K(e,"mousemove",t[1]),K(e,"mousedown",se(t[2])),K(e,"mouseup",t[2]),K(e,"contextmenu",se(ar))],n=!0)},p:G,i:G,o:G,d(o){o&&_(e),n=!1,xe(a)}}}const Me=11,ar=t=>t;function ir(t){const e={width:window.innerWidth-50,height:window.innerHeight-10},n={presetParams:4,initialConditions:"randomSpots",reset:()=>p(),pause:!1},a={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3},o={iteration:0},i={f:Le[n.presetParams].f,k:Le[n.presetParams].k};let r,s;const l=async()=>{const v=await Ee(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);r=new v.GUI,r.domElement.setAttribute("style","background-color: black"),r.add(i,"f").name("Feed rate").listen(),r.add(i,"k").name("Kill rate").listen(),r.add(n,"pause").name("Pause"),r.add(n,"reset").name("Reset simulation");const c=Le.reduce((y,S,L)=>(y[S.name]=L,y),{});r.add(n,"presetParams",c).onFinishChange(()=>{i.f=Le[n.presetParams].f,i.k=Le[n.presetParams].k});const x={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots"};r.add(n,"initialConditions",x).onFinishChange(n.reset);const w=r.add(o,"iteration").listen();w.domElement.style.pointerEvents="none",r.add(a,"penSize",1,Me,1).name("Pen size")},m=()=>{document.addEventListener("keydown",v=>{if(v.code==="Space")return n.pause=!n.pause,v.preventDefault();if(v.code==="KeyR")return p(),v.preventDefault()})},p=()=>{const v=document.getElementById("canvas");if(!v)throw new Error("Canvas container not ready");s&&s.destroy(),s=Se({extensions:["OES_texture_float"],canvas:v}),o.iteration=0;const c=2**Me;let x;n.initialConditions==="randomSpots"?x=Jo(c,.001):n.initialConditions==="middleCircleAndRandomSpots"?x=Qo(c,.005,.05):x=er(c,.02);const w=Array(2).fill(0).map(()=>s.framebuffer({color:s.texture({radius:c,data:x,wrap:"repeat",type:"float"}),depthStencil:!1})),y=s({frag:or,framebuffer:L=>w[(L.tick+1)%2],uniforms:{Da:s.prop("Da"),Db:s.prop("Db"),f:s.prop("f"),k:s.prop("k"),radius:c,pauseSimulation:s.prop("pauseSimulation"),mousePosition:s.prop("mousePosition"),penRadius:s.prop("penRadius"),penIsActive:s.prop("penIsActive"),eraserIsActive:s.prop("eraserIsActive")}}),S=s({frag:nr,vert:tr,attributes:{position:[-4,-4,4,-4,0,4]},uniforms:{prevState:({tick:L})=>w[L%2]},depth:{enable:!1},count:3});s.frame(()=>{S(()=>{s.draw(),n.pause||o.iteration++,y({Da:1,Db:.5,pauseSimulation:n.pause,mousePosition:[a.x,a.y],penRadius:1/2**(Me-a.penSize),penIsActive:a.pressedLeft,eraserIsActive:a.pressedRight,...i})})})},u=v=>{if(!v.currentTarget)throw new Error("No target for the onmousemove event");if(!v.currentTarget.width||!v.currentTarget.height)throw new Error("No target dimensions for the onmousemove event target");const{x:c,y:x}=v,{width:w,height:y}=v.currentTarget,S=c/w,L=(y-x)/y;a.x=S,a.y=L},f=v=>{if(![0,2].includes(v.button)||!["mouseup","mousedown"].includes(v.type))return;let c=v.type==="mousedown";v.button===0&&(a.pressedLeft=c),v.button===2&&(a.pressedRight=c)};return he(()=>{l(),m(),p()}),ve(()=>{r.destroy(),s.destroy()}),[e,u,f]}let lr=class extends j{constructor(e){super(),Z(this,e,ir,rr,Q,{})}};const De=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"STX 1",type:"N.A",f:.0353,k:.0614},{name:"STX 2",type:"N.A",f:.0201,k:.0602},{name:"STX 2",type:"N.A",f:.0181,k:.0435},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function rt(t,e,n){const a=t.slice();return a[17]=e[n],a}function at(t){let e,n,a,o,i,r,s,l,m,p=De,u=[];for(let f=0;f<p.length;f+=1)u[f]=it(rt(t,p,f));return r=new be({props:{sketch:t[4]}}),{c(){e=B("div"),n=k("Select f and k parameters on the map of use a preset"),a=V(),o=B("select");for(let f=0;f<u.length;f+=1)u[f].c();i=V(),H(r.$$.fragment),this.h()},l(f){e=C(f,"DIV",{});var v=R(e);n=D(v,"Select f and k parameters on the map of use a preset"),v.forEach(_),a=N(f),o=C(f,"SELECT",{class:!0});var c=R(o);for(let x=0;x<u.length;x+=1)u[x].l(c);c.forEach(_),i=N(f),X(r.$$.fragment,f),this.h()},h(){$(o,"class","full-width svelte-1qznlxf"),t[0]===void 0&&Ie(()=>t[6].call(o))},m(f,v){z(f,e,v),h(e,n),z(f,a,v),z(f,o,v);for(let c=0;c<u.length;c+=1)u[c].m(o,null);_e(o,t[0]),z(f,i,v),Y(r,f,v),s=!0,l||(m=[K(o,"change",t[6]),K(o,"change",t[7])],l=!0)},p(f,v){if(v&0){p=De;let c;for(c=0;c<p.length;c+=1){const x=rt(f,p,c);u[c]?u[c].p(x,v):(u[c]=it(x),u[c].c(),u[c].m(o,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=p.length}v&1&&_e(o,f[0])},i(f){s||(F(r.$$.fragment,f),s=!0)},o(f){M(r.$$.fragment,f),s=!1},d(f){f&&_(e),f&&_(a),f&&_(o),Ce(u,f),f&&_(i),U(r,f),l=!1,xe(m)}}}function it(t){let e,n=t[17].type+"",a,o,i=t[17].name+"",r,s,l=t[17].f+"",m,p,u=t[17].k+"",f,v;return{c(){e=B("option"),a=k(n),o=k(" - "),r=k(i),s=k(" (f/k "),m=k(l),p=k(" / "),f=k(u),v=k(`)
                `),this.h()},l(c){e=C(c,"OPTION",{});var x=R(e);a=D(x,n),o=D(x," - "),r=D(x,i),s=D(x," (f/k "),m=D(x,l),p=D(x," / "),f=D(x,u),v=D(x,`)
                `),x.forEach(_),this.h()},h(){e.__value=t[17],e.value=e.__value},m(c,x){z(c,e,x),h(e,a),h(e,o),h(e,r),h(e,s),h(e,m),h(e,p),h(e,f),h(e,v)},p:G,d(c){c&&_(e)}}}function sr(t){let e,n,a=t[1]?"Close":"F/K selection",o,i,r,s,l,m=t[1]&&at(t);return{c(){e=B("div"),n=B("button"),o=k(a),i=V(),m&&m.c(),this.h()},l(p){e=C(p,"DIV",{id:!0,class:!0});var u=R(e);n=C(u,"BUTTON",{class:!0,id:!0});var f=R(n);o=D(f,a),f.forEach(_),i=N(u),m&&m.l(u),u.forEach(_),this.h()},h(){$(n,"class","full-width svelte-1qznlxf"),$(n,"id","toggleButton"),$(e,"id","container"),$(e,"class","svelte-1qznlxf"),ke(e,"no-cursor",t[2])},m(p,u){z(p,e,u),h(e,n),h(n,o),h(e,i),m&&m.m(e,null),r=!0,s||(l=K(n,"click",t[5]),s=!0)},p(p,[u]){(!r||u&2)&&a!==(a=p[1]?"Close":"F/K selection")&&ae(o,a),p[1]?m?(m.p(p,u),u&2&&F(m,1)):(m=at(p),m.c(),F(m,1),m.m(e,null)):m&&(ce(),M(m,1,1,()=>{m=null}),me()),(!r||u&4)&&ke(e,"no-cursor",p[2])},i(p){r||(F(m),r=!0)},o(p){M(m),r=!1},d(p){p&&_(e),m&&m.d(),s=!1,l()}}}function fr(t,e,n){const a=Re();let o=De[0],i=!0;const r=[0,.12],s=[.03,.07],l=g=>{const{f:d,k:E}=g,A=c.map(E,s[0],s[1],0,c.width),b=c.map(d,r[0],r[1],c.height,0);return{x:A,y:b}},m=g=>{const{x:d,y:E}=g,A=c.map(E,c.height,0,r[0],r[1]),b=c.map(d,0,c.width,s[0],s[1]);return{f:A,k:b}},p=g=>{const d=g.mouseX,E=g.mouseY;if(d<0||E<0||d>g.width||E>g.height)return;const{f:A,k:b}=m({x:g.mouseX,y:g.mouseY});n(0,o={f:A,k:b,name:"custom",type:"manual"}),a("fkupdated",o)},u=g=>{g.noStroke();const d=g.textSize();for(const E of De){const{x:A,y:b}=l({f:E.f,k:E.k}),P=E.f===o.f&&E.k===o.k;g.circle(A,b,3),g.textSize(P?d*2:d),g.fill(P?[240,240,150]:[255,255,255]),g.text(E.name,A-g.textWidth(E.name)/2,b-10)}},f=g=>{g.noFill(),g.stroke("red");const{x:d,y:E}=l(o);g.text("F",10,E>10?E-5:E+15),g.line(0,E,g.width,E),g.text("K",d<g.width-10?d+5:d-15,g.height-10),g.line(d,0,d,g.height),g.circle(d,E,10)},v=g=>{const{f:d,k:E}=o,A=`F: ${d.toFixed(4)}`,b=`K: ${E.toFixed(4)}`,P=g.textSize(),O=g.height*.05;g.textStyle(g.BOLD),g.textSize(O),g.fill("white"),g.stroke(0),g.strokeWeight(1),g.text(A,g.width*.05,g.textSize()),g.text(b,g.width*.05,g.textSize()+g.textSize()+6),g.textStyle(g.NORMAL),g.textSize(P)};let c,x=!1;const w=g=>{c=g;let d;g.preload=()=>{d=g.loadImage(Fe+"/parameters_map.png")},g.setup=()=>{g.createCanvas(400,400),g.frameRate(55)},g.draw=()=>{g.background(255),g.tint(150,190),g.image(d,0,0,g.width,g.height),u(g),f(g),v(g),n(2,x=!1),g.mouseIsPressed&&(p(g),n(2,x=!0))}},y=()=>{n(1,i=!i),i||c.remove()};ve(()=>c?.remove());function S(){o=Te(this),n(0,o)}return[o,i,x,a,w,y,S,()=>a("fkupdated",o)]}class ur extends j{constructor(e){super(),Z(this,e,fr,sr,Q,{})}}const cr=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,mr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,pr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float PI = 3.14159265359;
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = sin(iteration*PI/180.0);
    if (val < 0.0) {
        val = -1.0 * val;
    }
    gl_FragColor = vec4(A, B, val, 1.0);
}
`,vr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,dr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,xr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,gr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    // vec3 color1 = vec3(1.0, 0.0, 0.0);
    // vec3 color2 = vec3(0.0, 1.0, 0.0);
    // vec3 result = color1 * A + color2 * B;

    vec3 color1RGB = vec3(0.639, 0.941, 0.717);
    vec3 color2RGB = vec3(0.929, 0.082, 0.705);

    vec3 color1HSV = rgb2hsv(color1RGB);
    vec3 color2HSV = rgb2hsv(color2RGB);

    float color1Offset = (cos(iteration * 0.001) + 1.0) * 0.5;
    float color1newH = 0.5 * (color1HSV.x + color1Offset);
    vec3 color1newHSV = vec3(color1newH, color1HSV.g, color1HSV.b);

    float color2Offset = (cos(iteration * 0.002)) * 0.5;
    float color2newH = 0.5 * (color2HSV.x + color2Offset + 0.33);
    vec3 color2newHSV = vec3(color2newH, color2HSV.g, color2HSV.b);


    vec3 resultHSV = color1newHSV * A + color2newHSV * B;
    vec3 result = hsv2rgb(resultHSV);

    gl_FragColor = vec4(result, 1.0);
}
`,hr=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,_r=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec3 color1 = vec3(0.0, 0.0, 1.0);
    vec3 color2 = vec3(1.0, 0.0, 0.0);
    vec3 result = vec3(A, 0.0, 1.0-A);

    gl_FragColor = vec4(result, 1.0);
}
`,Er=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    if (A > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else if (A > 0.4) {
        gl_FragColor = vec4(1.0 - A, 0.0, 0.0, 1.0);
    } else { 
        gl_FragColor = vec4(0.0, A, 0.0, 1.0);
    }
}
`,Sr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 blue = vec4(0.0, 0.0, 1.0, 1.0);
    vec4 color = mix(blue, red, A);

    vec4 softRed = vec4(0.8588, 0.2824, 0.3765, 1.0);
    vec4 softBlue = vec4(0.2824, 0.3882, 0.8588, 1.0);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.6);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.4);
    vec4 softColor = mix(softBlue, softRed, 1.0-A);


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(color);
    }

}
`,br=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/MATLAB_cool.frag
float colormap_red(float x) {
    return (1.0 + 1.0 / 63.0) * x - 1.0 / 63.0;
}

float colormap_green(float x) {
    return -(1.0 + 1.0 / 63.0) * x + (1.0 + 1.0 / 63.0);
}

vec4 colormap(float x) {
    float r = clamp(colormap_red(x), 0.0, 1.0);
    float g = clamp(colormap_green(x), 0.0, 1.0);
    float b = 1.0;
    return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,yr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdBu.frag
float colormap_red(float x) {
	if (x < 0.09771832105856419) {
		return 7.60263247863246E+02 * x + 1.02931623931624E+02;
	} else if (x < 0.3017162107441106) {
		return (-2.54380938558548E+02 * x + 4.29911571188803E+02) * x + 1.37642085716717E+02;
	} else if (x < 0.4014205790737471) {
		return 8.67103448276151E+01 * x + 2.18034482758611E+02;
	} else if (x < 0.5019932233215039) {
		return -6.15461538461498E+01 * x + 2.77547692307680E+02;
	} else if (x < 0.5969483882550937) {
		return -3.77588522588624E+02 * x + 4.36198819698878E+02;
	} else if (x < 0.8046060096654594) {
		return (-6.51345897546620E+02 * x + 2.09780968434337E+02) * x + 3.17674951640855E+02;
	} else {
		return -3.08431855203590E+02 * x + 3.12956742081421E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09881640500975222) {
		return 2.41408547008547E+02 * x + 3.50427350427364E-01;
	} else if (x < 0.5000816285610199) {
		return ((((1.98531871433258E+04 * x - 2.64108262469187E+04) * x + 1.10991785969817E+04) * x - 1.92958444776211E+03) * x + 8.39569642882186E+02) * x - 4.82944517518776E+01;
	} else if (x < 0.8922355473041534) {
		return (((6.16712686949223E+03 * x - 1.59084026055125E+04) * x + 1.45172137257997E+04) * x - 5.80944127411621E+03) * x + 1.12477959061948E+03;
	} else {
		return -5.28313797313699E+02 * x + 5.78459299959206E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.1033699568661857) {
		return 1.30256410256410E+02 * x + 3.08518518518519E+01;
	} else if (x < 0.2037526071071625) {
		return 3.38458128078815E+02 * x + 9.33004926108412E+00;
	} else if (x < 0.2973267734050751) {
		return (-1.06345054944861E+02 * x + 5.93327252747168E+02) * x - 3.81852747252658E+01;
	} else if (x < 0.4029109179973602) {
		return 6.68959706959723E+02 * x - 7.00740740740798E+01;
	} else if (x < 0.5006715489526758) {
		return 4.87348695652202E+02 * x + 3.09898550724286E+00;
	} else if (x < 0.6004396902588283) {
		return -6.85799999999829E+01 * x + 2.81436666666663E+02;
	} else if (x < 0.702576607465744) {
		return -1.81331701891043E+02 * x + 3.49137263626287E+02;
	} else if (x < 0.9010407030582428) {
		return (2.06124143164576E+02 * x - 5.78166906665595E+02) * x + 5.26198653917172E+02;
	} else {
		return -7.36990769230737E+02 * x + 8.36652307692262E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,$r=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,wr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap(1.0 - (A-0.4)*(1.0/0.6));


    if (A > 0.6) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,Ar=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/transform_seismic.frag
float colormap_f(float x) {
    return ((-2010.0 * x + 2502.5950459) * x - 481.763180924) / 255.0;
}

float colormap_red(float x) {
    if (x < 0.0) {
        return 3.0 / 255.0;
    } else if (x < 0.238) {
        return ((-1810.0 * x + 414.49) * x + 3.87702) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return (344441250.0 / 323659.0 * x - 23422005.0 / 92474.0) / 255.0;
    } else if (x < 25851.0 / 34402.0) {
        return 1.0;
    } else if (x <= 1.0) {
        return (-688.04 * x + 772.02) / 255.0;
    } else {
        return 83.0 / 255.0;
    }
}

float colormap_green(float x) {
    if (x < 0.0) {
        return 0.0;
    } else if (x < 0.238) {
        return 0.0;
    } else if (x < 51611.0 / 108060.0) {
        return colormap_f(x);
    } else if (x < 0.739376978894039) {
        float xx = x - 51611.0 / 108060.0;
        return ((-914.74 * xx - 734.72) * xx + 255.) / 255.0;
    } else {
        return 0.0;
    }
}

float colormap_blue(float x) {
    if (x < 0.0) {
        return 19.0 / 255.0;
    } else if (x < 0.238) {
        float xx = x - 0.238;
        return (((1624.6 * xx + 1191.4) * xx + 1180.2) * xx + 255.0) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return 1.0;
    } else if (x < 174.5 / 256.0) {
        return (-951.67322673866 * x + 709.532730938451) / 255.0;
    } else if (x < 0.745745353439206) {
        return (-705.250074130877 * x + 559.620050530617) / 255.0;
    } else if (x <= 1.0) {
        return ((-399.29 * x + 655.71) * x - 233.25) / 255.0;
    } else {
        return 23.0 / 255.0;
    }
}

vec4 colormap(float x) {
    return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,kr=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((B-0.1)*(1.0/0.9));


    if (B < 0.1) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,ne={},Dr=t=>{const e={vert:cr,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}};ne.raw=t({frag:mr,...e}),ne.A_transform_seismic=t({frag:Ar,...e}),ne.A_gradiant1=t({frag:Er,...e}),ne.A_gradiant2=t({frag:Sr,...e}),ne.A_MATLAB_cool=t({frag:br,...e}),ne.A_IDL_CB_RdBu=t({frag:yr,...e}),ne.A_IDL_CB_RdYiBu=t({frag:$r,...e}),ne.A_IDL_CB_BuYiRd=t({frag:wr,...e}),ne.B_IDL_CB_RdYiBu=t({frag:kr,...e}),ne.grayscale=t({frag:vr,...e}),ne.blackwhite=t({frag:dr,...e}),ne.whiteblack=t({frag:xr,...e}),ne.timebasedblue=t({frag:pr,...e}),ne.lerp=t({frag:gr,...e}),ne.mrob=t({frag:hr,...e}),ne.redblue=t({frag:_r,...e})},Br=t=>{const{colorMode:e,inputBuffer:n,iteration:a,outputBuffer:o,zoomState:i}=t;(ne[e]||ne.raw)({inputBuffer:n,iteration:a,outputBuffer:o,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},Cr=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

uniform bool penIsActive;
uniform bool eraserIsActive;
uniform float penDensity;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

// https://thebookofshaders.com/10/
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

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


    float rnd = random(uv);
    if (penIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (eraserIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`,zr=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
uniform float penRadius;

attribute vec2 position;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

void main() {
    uv = 0.5 * (position + 1.0);
    mouseUv = (mousePosition * zoomLevel) + pan * (1.0 - zoomLevel);
    scaledPenRadius = penRadius * zoomLevel;
    gl_Position = vec4(position, 0, 1);
}
`;let yt;const Lr=(t,e)=>{yt=t({frag:Cr,vert:zr,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,f:t.prop("f"),k:t.prop("k"),radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive"),eraserIsActive:t.prop("eraserIsActive"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},Rr=t=>{const{inputBuffer:e,outputBuffer:n,pauseSimulation:a,mouseState:o,simulationParameters:i,worldSize:r}=t;yt({inputBuffer:e,outputBuffer:n,pauseSimulation:a,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY],mousePosition:[o.x,o.y],penRadius:1/2**(r-o.penSize),penDensity:o.penDensity,penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...i})},Pr=(t,e)=>t==="randomSpots"?Fr(e,.001):t==="middleCircleAndRandomSpots"?Ir(e,.005,.05):t==="empty"?Tr(e):Mr(e,.02),Ir=(t,e,n)=>{const a=t*n;return Array(t*t).fill(0).map((o,i)=>{const r=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-r)<a?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},Tr=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),Fr=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),Mr=(t,e)=>Array(t*t).fill(0).map((n,a)=>{const o=Math.floor(a/t),i=a%t;return Math.hypot(t/2-i,t/2-o)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),Kr=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,Vr=`precision highp float;

uniform sampler2D prevState;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    float division = 10.0;
    float column = mod(uv.x, 1.0 / division);
    float c = column * division;

    float row = mod(uv.y, 1.0 / division);
    float r = row * division;

    // I haven't found a way to compare the value to an exact value
    // Might be a precision issue, or just that I'm missing something
    if (c < 0.05 || r < 0.05) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
       gl_FragColor = color;
    }
}
`;let $t;const Nr=t=>{$t=t({vert:Kr,frag:Vr,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},Or=t=>{const{inputBuffer:e,outputBuffer:n,zoomState:a}=t;$t({inputBuffer:e,outputBuffer:n,zoomLevel:a.zoomLevel,pan:[a.panX,a.panY]})},Hr=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,Yr=`precision mediump float;

uniform sampler2D prevState;
uniform vec2 mousePosition;
uniform float penRadius;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    float d = distance(uv, mousePosition);
    if (
        (d >= penRadius && d <= penRadius + 0.001) ||
        (uv.x >= mousePosition.x - 0.001 && uv.x <= mousePosition.x + 0.001 && uv.y >= mousePosition.y - 0.01 && uv.y <= mousePosition.y + 0.01) ||
        (uv.x >= mousePosition.x - 0.01 && uv.x <= mousePosition.x + 0.01 && uv.y >= mousePosition.y - 0.001 && uv.y <= mousePosition.y + 0.001))
    {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    } else {
        gl_FragColor = color;
    }
}
`;let wt;const Ur=t=>{wt=t({frag:Yr,vert:Hr,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}})},Wr=t=>{const{inputBuffer:e,mouseState:n,outputBuffer:a,worldSize:o}=t;wt({inputBuffer:e,outputBuffer:a,mousePosition:[n.x,n.y],penRadius:1/2**(o-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},Xr=t=>{const{controls:e,info:n,mouseState:a,simulationParameters:o}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const r=Se({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const s=2**n.worldSize,l=Pr(e.initialConditions,s),m=()=>r.framebuffer({color:r.texture({radius:s,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),p=Array(2).fill(0).map(m),u=Array(2).fill(0).map(m);return Lr(r,s),Dr(r),Nr(r),Ur(r),r.frame(()=>{e.pause||n.iteration++;let f=p[(n.iteration+1)%2];for(let v=0;v<e.speed;v++){n.iteration++;const c=p[n.iteration%2];f=p[(n.iteration+1)%2],Rr({inputBuffer:c,outputBuffer:f,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:a,simulationParameters:o})}qr({inputTexture:f,graphicsTextures:u,controls:e,info:n,mouseState:a})}),r},qr=t=>{const{inputTexture:e,graphicsTextures:n,controls:a,info:o,mouseState:i}=t;let r=0;r++;const s=e,l=n[r%2];if(Br({colorMode:a.colors,inputBuffer:s,iteration:o.iteration,outputBuffer:l,zoomState:i}),a.grid){r++;const u=n[(r+1)%2],f=n[r%2];Or({inputBuffer:u,outputBuffer:f,zoomState:i})}r++;const m=n[(r+1)%2],p=null;Wr({mouseState:i,worldSize:o.worldSize,inputBuffer:m,outputBuffer:p})},lt=t=>{if(!t.currentTarget)throw new Error("Event has no currentTarget");const e=t.currentTarget,n=e.getBoundingClientRect(),a=t.clientX-n.left,o=t.clientY-n.top,{width:i,height:r}=e,s=a/i,l=(r-o)/r;return{x:s,y:l}};const{window:Gr}=Pe;function jr(t){let e,n,a,o,i,r,s,l,m,p,u,f,v,c=2**t[0].worldSize+"",x,w,y=2**t[0].worldSize+"",S,L,g=2**(t[0].worldSize+1)+"",d,E,A,b,P,O,ie;return n=new ur({}),n.$on("fkupdated",t[7]),{c(){e=B("main"),H(n.$$.fragment),a=V(),o=B("div"),i=V(),r=B("div"),s=B("label"),l=k("World Size:"),m=V(),p=B("input"),u=V(),f=B("span"),v=k("("),x=k(c),w=k(" x "),S=k(y),L=k(" : "),d=k(g),E=k(")"),A=V(),b=B("canvas"),this.h()},l(I){e=C(I,"MAIN",{});var T=R(e);X(n.$$.fragment,T),a=N(T),o=C(T,"DIV",{id:!0,class:!0}),R(o).forEach(_),i=N(T),r=C(T,"DIV",{});var q=R(r);s=C(q,"LABEL",{for:!0});var pe=R(s);l=D(pe,"World Size:"),pe.forEach(_),m=N(q),p=C(q,"INPUT",{id:!0,type:!0,step:!0}),u=N(q),f=C(q,"SPAN",{});var W=R(f);v=D(W,"("),x=D(W,c),w=D(W," x "),S=D(W,y),L=D(W," : "),d=D(W,g),E=D(W,")"),W.forEach(_),q.forEach(_),A=N(T),b=C(T,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(b).forEach(_),T.forEach(_),this.h()},h(){$(o,"id","datgui-container"),$(o,"class","svelte-18zf5fr"),$(s,"for","worldSize"),$(p,"id","worldSize"),$(p,"type","number"),$(p,"step","1"),$(b,"id","canvas"),$(b,"width",t[1].width),$(b,"height",t[1].height),$(b,"class","svelte-18zf5fr")},m(I,T){z(I,e,T),Y(n,e,null),h(e,a),h(e,o),h(e,i),h(e,r),h(r,s),h(s,l),h(r,m),h(r,p),de(p,t[0].worldSize),h(r,u),h(r,f),h(f,v),h(f,x),h(f,w),h(f,S),h(f,L),h(f,d),h(f,E),h(e,A),h(e,b),P=!0,O||(ie=[K(Gr,"keydown",t[2]),K(p,"input",t[8]),K(p,"change",t[6]),K(b,"mousemove",t[4]),K(b,"mousedown",se(t[5])),K(b,"mouseup",t[5]),K(b,"wheel",t[3]),K(b,"keydown",se(t[2])),K(b,"contextmenu",se(Zr))],O=!0)},p(I,[T]){T&1&&ge(p.value)!==I[0].worldSize&&de(p,I[0].worldSize),(!P||T&1)&&c!==(c=2**I[0].worldSize+"")&&ae(x,c),(!P||T&1)&&y!==(y=2**I[0].worldSize+"")&&ae(S,y),(!P||T&1)&&g!==(g=2**(I[0].worldSize+1)+"")&&ae(d,g)},i(I){P||(F(n.$$.fragment,I),P=!0)},o(I){M(n.$$.fragment,I),P=!1},d(I){I&&_(e),U(n),O=!1,xe(ie)}}}const Zr=t=>t;function Qr(t,e,n){const a={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},o={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>x(),pause:!1,grid:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},r={iteration:0,worldSize:8},s={f:De[0].f,k:De[0].k};let l,m;const p=async()=>{const S=await Ee(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new S.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const L=document.getElementById("datgui-container");if(!L)throw new Error("Gui container not ready");L.appendChild(l.domElement),l.add(o,"pause").name("Pause"),l.add(o,"grid").name("Debug grid"),l.add(o,"reset").name("Reset simulation"),l.add(o,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const g={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(o,"initialConditions",g).onFinishChange(o.reset).name("Initial conditions");const d=l.add(r,"iteration").listen();d.domElement.style.pointerEvents="none",l.add(o,"speed",1,200).name("Simulation speed"),l.add(i,"penSize",0,r.worldSize).name("Pen size"),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},u=S=>{if(S.code==="Space"){o.pause=!o.pause,S.preventDefault();return}if(S.code==="KeyR"&&!S.getModifierState("Control")){x(),S.preventDefault();return}},f=S=>{if(!S.getModifierState("Control"))return;const L=lt(S);i.panX=L.x,i.panY=L.y,S.deltaY>0?i.zoomLevel*=1+i.zoomLevel/2:i.zoomLevel*=1-i.zoomLevel/2,i.zoomLevel>1&&(i.zoomLevel=1),i.zoomLevel<0&&(i.zoomLevel=0),S.preventDefault()},v=S=>{const L=lt(S);i.x=L.x,i.y=L.y},c=S=>{if(![0,2].includes(S.button)||!["mouseup","mousedown"].includes(S.type))return;let L=S.type==="mousedown";S.button===0&&(i.pressedLeft=L),S.button===2&&(i.pressedRight=L)},x=()=>{isNaN(r.worldSize)||(r.worldSize>11&&n(0,r.worldSize=11,r),r.worldSize<1&&n(0,r.worldSize=1,r),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),p(),m=Xr({controls:o,info:r,mouseState:i,simulationParameters:s}))},w=S=>{s.f=S.detail.f,s.k=S.detail.k};he(()=>{x()}),ve(()=>{l.destroy(),m.destroy()});function y(){r.worldSize=ge(this.value),n(0,r)}return[r,a,u,f,v,c,x,w,y]}let Jr=class extends j{constructor(e){super(),Z(this,e,Qr,jr,Q,{})}};const Be=[{name:"KarlSims",type:"Unknown",f:.055,k:.062},{name:"STX 1",type:"N.A",f:.0353,k:.0614},{name:"STX 2",type:"N.A",f:.0201,k:.0602},{name:"STX 2",type:"N.A",f:.0181,k:.0435},{name:"α 1",type:"alpha",f:.01,k:.047},{name:"α 2",type:"alpha",f:.014,k:.053},{name:"β 1",type:"beta",f:.014,k:.039},{name:"β 2",type:"beta",f:.026,k:.051},{name:"δ 1",type:"delta",f:.03,k:.055},{name:"δ 2",type:"delta",f:.042,k:.059},{name:"ε 1",type:"epsilon",f:.018,k:.055},{name:"ε 2",type:"epsilon",f:.022,k:.059},{name:"η 1",type:"eta",f:.034,k:.063},{name:"γ 1",type:"gamma",f:.022,k:.051},{name:"γ 2",type:"gamma",f:.026,k:.055},{name:"ι 1",type:"iota",f:.046,k:.0594},{name:"κ 1",type:"kappa",f:.082,k:.06},{name:"κ 2",type:"kappa",f:.058,k:.063},{name:"λ 1",type:"lambda",f:.026,k:.061},{name:"λ 2",type:"lambda",f:.034,k:.065},{name:"μ 1",type:"mu",f:.046,k:.065},{name:"μ 2",type:"mu",f:.058,k:.065},{name:"ν 2",type:"nu",f:.046,k:.067},{name:"π 1",type:"pi",f:.062,k:.061},{name:"ρ 1",type:"rho",f:.09,k:.059},{name:"ρ 2",type:"rho",f:.102,k:.055},{name:"σ 1",type:"sigma",f:.09,k:.057},{name:"θ 2",type:"sigma",f:.11,k:.0523},{name:"θ 1",type:"theta",f:.03,k:.057},{name:"θ 2",type:"theta",f:.038,k:.061},{name:"ξ 1",type:"xi",f:.01,k:.041},{name:"ξ 2",type:"xi",f:.014,k:.047},{name:"ζ 1",type:"zeta",f:.022,k:.061},{name:"ζ 2",type:"zeta",f:.026,k:.059}];function st(t,e,n){const a=t.slice();return a[18]=e[n],a}function ft(t){let e,n,a,o,i,r,s,l,m,p=Be,u=[];for(let f=0;f<p.length;f+=1)u[f]=ut(st(t,p,f));return r=new be({props:{sketch:t[3]}}),{c(){e=B("div"),n=k("Select f and k parameters on the map of use a preset"),a=V(),o=B("select");for(let f=0;f<u.length;f+=1)u[f].c();i=V(),H(r.$$.fragment),this.h()},l(f){e=C(f,"DIV",{});var v=R(e);n=D(v,"Select f and k parameters on the map of use a preset"),v.forEach(_),a=N(f),o=C(f,"SELECT",{class:!0});var c=R(o);for(let x=0;x<u.length;x+=1)u[x].l(c);c.forEach(_),i=N(f),X(r.$$.fragment,f),this.h()},h(){$(o,"class","full-width svelte-1qznlxf"),t[0]===void 0&&Ie(()=>t[5].call(o))},m(f,v){z(f,e,v),h(e,n),z(f,a,v),z(f,o,v);for(let c=0;c<u.length;c+=1)u[c].m(o,null);_e(o,t[0]),z(f,i,v),Y(r,f,v),s=!0,l||(m=[K(o,"change",t[5]),K(o,"change",t[6])],l=!0)},p(f,v){if(v&0){p=Be;let c;for(c=0;c<p.length;c+=1){const x=st(f,p,c);u[c]?u[c].p(x,v):(u[c]=ut(x),u[c].c(),u[c].m(o,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=p.length}v&1&&_e(o,f[0])},i(f){s||(F(r.$$.fragment,f),s=!0)},o(f){M(r.$$.fragment,f),s=!1},d(f){f&&_(e),f&&_(a),f&&_(o),Ce(u,f),f&&_(i),U(r,f),l=!1,xe(m)}}}function ut(t){let e,n=t[18].type+"",a,o,i=t[18].name+"",r,s,l=t[18].f+"",m,p,u=t[18].k+"",f,v;return{c(){e=B("option"),a=k(n),o=k(" - "),r=k(i),s=k(" (f/k "),m=k(l),p=k(" / "),f=k(u),v=k(`)
                `),this.h()},l(c){e=C(c,"OPTION",{});var x=R(e);a=D(x,n),o=D(x," - "),r=D(x,i),s=D(x," (f/k "),m=D(x,l),p=D(x," / "),f=D(x,u),v=D(x,`)
                `),x.forEach(_),this.h()},h(){e.__value=t[18],e.value=e.__value},m(c,x){z(c,e,x),h(e,a),h(e,o),h(e,r),h(e,s),h(e,m),h(e,p),h(e,f),h(e,v)},p:G,d(c){c&&_(e)}}}function e0(t){let e,n,a=t[1]?"Close":"F/K selection",o,i,r,s,l,m=t[1]&&ft(t);return{c(){e=B("div"),n=B("button"),o=k(a),i=V(),m&&m.c(),this.h()},l(p){e=C(p,"DIV",{id:!0,class:!0});var u=R(e);n=C(u,"BUTTON",{class:!0,id:!0});var f=R(n);o=D(f,a),f.forEach(_),i=N(u),m&&m.l(u),u.forEach(_),this.h()},h(){$(n,"class","full-width svelte-1qznlxf"),$(n,"id","toggleButton"),$(e,"id","container"),$(e,"class","svelte-1qznlxf"),ke(e,"no-cursor",t0)},m(p,u){z(p,e,u),h(e,n),h(n,o),h(e,i),m&&m.m(e,null),r=!0,s||(l=K(n,"click",t[4]),s=!0)},p(p,[u]){(!r||u&2)&&a!==(a=p[1]?"Close":"F/K selection")&&ae(o,a),p[1]?m?(m.p(p,u),u&2&&F(m,1)):(m=ft(p),m.c(),F(m,1),m.m(e,null)):m&&(ce(),M(m,1,1,()=>{m=null}),me())},i(p){r||(F(m),r=!0)},o(p){M(m),r=!1},d(p){p&&_(e),m&&m.d(),s=!1,l()}}}let t0=!1;function n0(t,e){let n=!1,a=1/0,o=null;for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];if(t[0]===r[0]&&t[1]===r[1])return t;r[1]>t[1]!=s[1]>t[1]&&t[0]<(s[0]-r[0])*(t[1]-r[1])/(s[1]-r[1])+r[0]&&(n=!n);const m=o0(t,r,s);m<a&&(a=m,o=r0(t,r,s))}if(n)return t;if(!o)throw new Error("Now closest point found");return o}function o0(t,e,n){const a=[n[0]-e[0],n[1]-e[1]],o=[t[0]-e[0],t[1]-e[1]],i=a[0]*o[0]+a[1]*o[1],r=a[0]*a[0]+a[1]*a[1],s=i/r;let l;return s<0?l=e:s>1?l=n:l=[e[0]+s*a[0],e[1]+s*a[1]],Math.sqrt((t[0]-l[0])**2+(t[1]-l[1])**2)}function r0(t,e,n){const a=[n[0]-e[0],n[1]-e[1]],o=[t[0]-e[0],t[1]-e[1]],i=a[0]*o[0]+a[1]*o[1],r=a[0]*a[0]+a[1]*a[1],s=i/r;let l;return s<0?l=e:s>1?l=n:l=[e[0]+s*a[0],e[1]+s*a[1]],l}function a0(t,e,n){const a=Re();let o=Be[0],i=!0;const r=[0,.12],s=[.03,.07],l=[{f:.1045,k:.0553},{f:.0829,k:.0582},{f:.0664,k:.0595},{f:.0511,k:.0594},{f:.0307,k:.0549},{f:.017,k:.0467},{f:.005,k:.0335},{f:.0076,k:.0472},{f:.0166,k:.0594},{f:.0277,k:.0657},{f:.046,k:.0675},{f:.0757,k:.0643},{f:.0949,k:.0594}],m=d=>{const{f:E,k:A}=d,b=w.map(A,s[0],s[1],0,w.width),P=w.map(E,r[0],r[1],w.height,0);return{x:b,y:P}},p=d=>{d.noStroke();const E=d.textSize();for(const A of Be){const{x:b,y:P}=m({f:A.f,k:A.k}),O=A.f===o.f&&A.k===o.k;d.circle(b,P,3),d.textSize(O?E*2:E),d.fill(O?[240,240,150]:[255,255,255]),d.text(A.name,b-d.textWidth(A.name)/2,P-10)}},u=d=>{d.noFill(),d.stroke("red"),d.strokeWeight(1);const{x:E,y:A}=m(o);d.text("F",10,A>10?A-5:A+15),d.line(0,A,d.width,A),d.text("K",E<d.width-10?E+5:E-15,d.height-10),d.line(E,0,E,d.height),d.circle(E,A,10)},f=d=>{const{f:E,k:A}=o,b=`F: ${E.toFixed(4)}`,P=`K: ${A.toFixed(4)}`,O=d.textSize(),ie=d.height*.05;d.textStyle(d.BOLD),d.textSize(ie),d.fill("white"),d.stroke(0),d.strokeWeight(1),d.text(b,d.width*.05,d.textSize()),d.text(P,d.width*.05,d.textSize()+d.textSize()+6),d.textStyle(d.NORMAL),d.textSize(O)},v=d=>{for(let E=0;E<l.length;E++){const{x:A,y:b}=m(l[E]),{x:P,y:O}=m(l[(E+1)%l.length]);d.fill("white"),d.stroke("white"),d.strokeWeight(1),d.circle(A,b,3),d.circle(P,O,3),d.line(A,b,P,O)}},c=()=>{const d=[o.f,o.k],E=l.map(b=>[b.f,b.k]),A=n0(d,E);n(0,o.f=A[0],o),n(0,o.k=A[1],o)},x=()=>{let{f:d,k:E}=o;const A=w.noise(w.frameCount*.01),b=w.noise(5321+w.frameCount*.01),O=Math.random()<.97?.001:.01;d=d+(b*2-1)*(r[1]-r[0])*O,E=E+(A*2-1)*(s[1]-s[0])*O,n(0,o={f:d,k:E,name:"custom",type:"manual"}),c(),a("fkupdated",o)};let w;const y=d=>{w=d;let E;d.preload=()=>{E=d.loadImage(Fe+"/parameters_map.png")},d.setup=()=>{d.createCanvas(400,400),d.frameRate(55)},d.draw=()=>{d.background(255),d.tint(150,190),d.image(E,0,0,d.width,d.height),p(d),v(d),u(d),f(d),x()}},S=()=>{n(1,i=!i),i||w.remove()};ve(()=>w?.remove());function L(){o=Te(this),n(0,o)}return[o,i,a,y,S,L,()=>a("fkupdated",o)]}class i0 extends j{constructor(e){super(),Z(this,e,a0,e0,Q,{})}}const l0=`precision mediump float;
attribute vec2 position;
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,s0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    gl_FragColor = vec4(A, B, 0.0, 1.0);
}

`,f0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float PI = 3.14159265359;
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = sin(iteration*PI/180.0);
    if (val < 0.0) {
        val = -1.0 * val;
    }
    gl_FragColor = vec4(A, B, val, 1.0);
}
`,u0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (A + B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}

`,c0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(1.0 - val, 1.0 - val, 1.0 - val, 1.0);
}
`,m0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float val = (1.0 + A - B) / 2.0;

    gl_FragColor = vec4(val, val, val, 1.0);
}
`,p0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// All components are in the range [0...1], including hue. (https://stackoverflow.com/a/17897228)
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    // vec3 color1 = vec3(1.0, 0.0, 0.0);
    // vec3 color2 = vec3(0.0, 1.0, 0.0);
    // vec3 result = color1 * A + color2 * B;

    vec3 color1RGB = vec3(0.639, 0.941, 0.717);
    vec3 color2RGB = vec3(0.929, 0.082, 0.705);

    vec3 color1HSV = rgb2hsv(color1RGB);
    vec3 color2HSV = rgb2hsv(color2RGB);

    float color1Offset = (cos(iteration * 0.001) + 1.0) * 0.5;
    float color1newH = 0.5 * (color1HSV.x + color1Offset);
    vec3 color1newHSV = vec3(color1newH, color1HSV.g, color1HSV.b);

    float color2Offset = (cos(iteration * 0.002)) * 0.5;
    float color2newH = 0.5 * (color2HSV.x + color2Offset + 0.33);
    vec3 color2newHSV = vec3(color2newH, color2HSV.g, color2HSV.b);


    vec3 resultHSV = color1newHSV * A + color2newHSV * B;
    vec3 result = hsv2rgb(resultHSV);

    gl_FragColor = vec4(result, 1.0);
}
`,v0=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    float red = A; // The more A the redder
    float blue = 1.0 - A; // The less A the bleuer

    float green = max(A, B) - min(A, B);

    vec3 result = vec3(red, green, blue);

    gl_FragColor = vec4(result, 1.0);
}
`,d0=`// Colors scheme inspired by Robert Munafo described here:
// https://www.mrob.com/pub/comp/xmorphia/index.html
// 
// A is blue
// B is red

precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec3 color1 = vec3(0.0, 0.0, 1.0);
    vec3 color2 = vec3(1.0, 0.0, 0.0);
    vec3 result = vec3(A, 0.0, 1.0-A);

    gl_FragColor = vec4(result, 1.0);
}
`,x0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    if (A > 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else if (A > 0.4) {
        gl_FragColor = vec4(1.0 - A, 0.0, 0.0, 1.0);
    } else { 
        gl_FragColor = vec4(0.0, A, 0.0, 1.0);
    }
}
`,g0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 blue = vec4(0.0, 0.0, 1.0, 1.0);
    vec4 color = mix(blue, red, A);

    vec4 softRed = vec4(0.8588, 0.2824, 0.3765, 1.0);
    vec4 softBlue = vec4(0.2824, 0.3882, 0.8588, 1.0);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.6);
    // vec4 softColor = mix(blue, red, (A-0.4)/0.4);
    vec4 softColor = mix(softBlue, softRed, 1.0-A);


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(color);
    }

}
`,h0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/MATLAB_cool.frag
float colormap_red(float x) {
    return (1.0 + 1.0 / 63.0) * x - 1.0 / 63.0;
}

float colormap_green(float x) {
    return -(1.0 + 1.0 / 63.0) * x + (1.0 + 1.0 / 63.0);
}

vec4 colormap(float x) {
    float r = clamp(colormap_red(x), 0.0, 1.0);
    float g = clamp(colormap_green(x), 0.0, 1.0);
    float b = 1.0;
    return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,_0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdBu.frag
float colormap_red(float x) {
	if (x < 0.09771832105856419) {
		return 7.60263247863246E+02 * x + 1.02931623931624E+02;
	} else if (x < 0.3017162107441106) {
		return (-2.54380938558548E+02 * x + 4.29911571188803E+02) * x + 1.37642085716717E+02;
	} else if (x < 0.4014205790737471) {
		return 8.67103448276151E+01 * x + 2.18034482758611E+02;
	} else if (x < 0.5019932233215039) {
		return -6.15461538461498E+01 * x + 2.77547692307680E+02;
	} else if (x < 0.5969483882550937) {
		return -3.77588522588624E+02 * x + 4.36198819698878E+02;
	} else if (x < 0.8046060096654594) {
		return (-6.51345897546620E+02 * x + 2.09780968434337E+02) * x + 3.17674951640855E+02;
	} else {
		return -3.08431855203590E+02 * x + 3.12956742081421E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09881640500975222) {
		return 2.41408547008547E+02 * x + 3.50427350427364E-01;
	} else if (x < 0.5000816285610199) {
		return ((((1.98531871433258E+04 * x - 2.64108262469187E+04) * x + 1.10991785969817E+04) * x - 1.92958444776211E+03) * x + 8.39569642882186E+02) * x - 4.82944517518776E+01;
	} else if (x < 0.8922355473041534) {
		return (((6.16712686949223E+03 * x - 1.59084026055125E+04) * x + 1.45172137257997E+04) * x - 5.80944127411621E+03) * x + 1.12477959061948E+03;
	} else {
		return -5.28313797313699E+02 * x + 5.78459299959206E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.1033699568661857) {
		return 1.30256410256410E+02 * x + 3.08518518518519E+01;
	} else if (x < 0.2037526071071625) {
		return 3.38458128078815E+02 * x + 9.33004926108412E+00;
	} else if (x < 0.2973267734050751) {
		return (-1.06345054944861E+02 * x + 5.93327252747168E+02) * x - 3.81852747252658E+01;
	} else if (x < 0.4029109179973602) {
		return 6.68959706959723E+02 * x - 7.00740740740798E+01;
	} else if (x < 0.5006715489526758) {
		return 4.87348695652202E+02 * x + 3.09898550724286E+00;
	} else if (x < 0.6004396902588283) {
		return -6.85799999999829E+01 * x + 2.81436666666663E+02;
	} else if (x < 0.702576607465744) {
		return -1.81331701891043E+02 * x + 3.49137263626287E+02;
	} else if (x < 0.9010407030582428) {
		return (2.06124143164576E+02 * x - 5.78166906665595E+02) * x + 5.26198653917172E+02;
	} else {
		return -7.36990769230737E+02 * x + 8.36652307692262E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,E0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,S0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap(1.0 - (A-0.4)*(1.0/0.6));


    if (A > 0.6) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,b0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/transform_seismic.frag
float colormap_f(float x) {
    return ((-2010.0 * x + 2502.5950459) * x - 481.763180924) / 255.0;
}

float colormap_red(float x) {
    if (x < 0.0) {
        return 3.0 / 255.0;
    } else if (x < 0.238) {
        return ((-1810.0 * x + 414.49) * x + 3.87702) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return (344441250.0 / 323659.0 * x - 23422005.0 / 92474.0) / 255.0;
    } else if (x < 25851.0 / 34402.0) {
        return 1.0;
    } else if (x <= 1.0) {
        return (-688.04 * x + 772.02) / 255.0;
    } else {
        return 83.0 / 255.0;
    }
}

float colormap_green(float x) {
    if (x < 0.0) {
        return 0.0;
    } else if (x < 0.238) {
        return 0.0;
    } else if (x < 51611.0 / 108060.0) {
        return colormap_f(x);
    } else if (x < 0.739376978894039) {
        float xx = x - 51611.0 / 108060.0;
        return ((-914.74 * xx - 734.72) * xx + 255.) / 255.0;
    } else {
        return 0.0;
    }
}

float colormap_blue(float x) {
    if (x < 0.0) {
        return 19.0 / 255.0;
    } else if (x < 0.238) {
        float xx = x - 0.238;
        return (((1624.6 * xx + 1191.4) * xx + 1180.2) * xx + 255.0) / 255.0;
    } else if (x < 51611.0 / 108060.0) {
        return 1.0;
    } else if (x < 174.5 / 256.0) {
        return (-951.67322673866 * x + 709.532730938451) / 255.0;
    } else if (x < 0.745745353439206) {
        return (-705.250074130877 * x + 559.620050530617) / 255.0;
    } else if (x <= 1.0) {
        return ((-399.29 * x + 655.71) * x - 233.25) / 255.0;
    } else {
        return 23.0 / 255.0;
    }
}

vec4 colormap(float x) {
    return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((A-0.4)*(1.0/0.6));


    if (A < 0.4) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,y0=`precision mediump float;

uniform sampler2D prevState;
uniform float iteration;
varying vec2 uv;

// https://github.com/Polymole/glsl-colormap/blob/master/shaders/IDL_CB-RdYiBu.frag
float colormap_red(float x) {
	if (x < 0.09790863520700754) {
		return 5.14512820512820E+02 * x + 1.64641025641026E+02;
	} else if (x < 0.2001887081633112) {
		return 2.83195402298854E+02 * x + 1.87288998357964E+02;
	} else if (x < 0.3190117539655621) {
		return 9.27301587301214E+01 * x + 2.25417989417999E+02;
	} else if (x < 0.500517389125164) {
		return 255.0;
	} else if (x < 0.6068377196788788) {
		return -3.04674876847379E+02 * x + 4.07495073891681E+02;
	} else if (x < 0.9017468988895416) {
		return (1.55336390191951E+02 * x - 7.56394659038288E+02) * x + 6.24412733169483E+02;
	} else {
		return -1.88350769230735E+02 * x + 2.38492307692292E+02;
	}
}

float colormap_green(float x) {
	if (x < 0.09638568758964539) {
		return 4.81427692307692E+02 * x + 4.61538461538488E-01;
	} else if (x < 0.4987066686153412) {
		return ((((3.25545903568267E+04 * x - 4.24067109461319E+04) * x + 1.83751375886345E+04) * x - 3.19145329617892E+03) * x + 8.08315127034676E+02) * x - 1.44611527812961E+01;
	} else if (x < 0.6047312345537269) {
		return -1.18449917898218E+02 * x + 3.14234811165860E+02;
	} else if (x < 0.7067635953426361) {
		return -2.70822112753102E+02 * x + 4.06379036672115E+02;
	} else {
		return (-4.62308723214883E+02 * x + 2.42936159122279E+02) * x + 2.74203431802418E+02;
	}
}

float colormap_blue(float x) {
	if (x < 0.09982818011951204) {
		return 1.64123076923076E+01 * x + 3.72646153846154E+01;
	} else if (x < 0.2958717460833126) {
		return 2.87014675052409E+02 * x + 1.02508735150248E+01;
	} else if (x < 0.4900527540014758) {
		return 4.65475113122167E+02 * x - 4.25505279034673E+01;
	} else if (x < 0.6017014681258838) {
		return 5.61032967032998E+02 * x - 8.93789173789407E+01;
	} else if (x < 0.7015737100463595) {
		return -1.51655677655728E+02 * x + 3.39446886446912E+02;
	} else if (x < 0.8237156500567735) {
		return -2.43405347593559E+02 * x + 4.03816042780725E+02;
	} else {
		return -3.00296889157305E+02 * x + 4.50678495922638E+02;
	}
}

vec4 colormap(float x) {
	float r = clamp(colormap_red(x) / 255.0, 0.0, 1.0);
	float g = clamp(colormap_green(x) / 255.0, 0.0, 1.0);
	float b = clamp(colormap_blue(x) / 255.0, 0.0, 1.0);
	return vec4(r, g, b, 1.0);
}

void main() {
    float A = texture2D(prevState, uv).r;
    float B = texture2D(prevState, uv).g;

    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 softColor = colormap((B-0.1)*(1.0/0.9));


    if (B < 0.1) {
        gl_FragColor = vec4(black);
    } else {
        gl_FragColor = vec4(softColor);
    }

}
`,oe={},$0=t=>{const e={vert:l0,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{iteration:t.prop("iteration"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}};oe.raw=t({frag:s0,...e}),oe.A_transform_seismic=t({frag:b0,...e}),oe.A_gradiant1=t({frag:x0,...e}),oe.A_gradiant2=t({frag:g0,...e}),oe.A_MATLAB_cool=t({frag:h0,...e}),oe.A_IDL_CB_RdBu=t({frag:_0,...e}),oe.A_IDL_CB_RdYiBu=t({frag:E0,...e}),oe.A_IDL_CB_BuYiRd=t({frag:S0,...e}),oe.B_IDL_CB_RdYiBu=t({frag:y0,...e}),oe.grayscale=t({frag:u0,...e}),oe.blackwhite=t({frag:c0,...e}),oe.whiteblack=t({frag:m0,...e}),oe.timebasedblue=t({frag:f0,...e}),oe.lerp=t({frag:p0,...e}),oe.mrob=t({frag:v0,...e}),oe.redblue=t({frag:d0,...e})},w0=t=>{const{colorMode:e,inputBuffer:n,iteration:a,outputBuffer:o,zoomState:i}=t;(oe[e]||oe.raw)({inputBuffer:n,iteration:a,outputBuffer:o,pan:[i.panX,i.panY],zoomLevel:i.zoomLevel})},A0=`precision mediump float;

uniform float radius;
uniform sampler2D prevState;
uniform bool pauseSimulation;
uniform float Da;
uniform float Db;
uniform float f;
uniform float k;

uniform bool penIsActive;
uniform bool eraserIsActive;
uniform float penDensity;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

// https://thebookofshaders.com/10/
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

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


    float rnd = random(uv);
    if (penIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(0.0, 1.0, 0, 1);
    } else if (eraserIsActive && rnd < penDensity && distance(uv, mouseUv) < scaledPenRadius) {
        gl_FragColor = vec4(1.0, 0.0, 0, 1);
    } else if (pauseSimulation) {
        gl_FragColor = vec4(A, B, 0, 1);
    } else {
        gl_FragColor = vec4(newA, newB, 0, 1);
    }
}
`,k0=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right
uniform float penRadius;

attribute vec2 position;

varying vec2 uv;
varying vec2 mouseUv;
varying float scaledPenRadius;

void main() {
    uv = 0.5 * (position + 1.0);
    mouseUv = (mousePosition * zoomLevel) + pan * (1.0 - zoomLevel);
    scaledPenRadius = penRadius * zoomLevel;
    gl_Position = vec4(position, 0, 1);
}
`;let At;const D0=(t,e)=>{At=t({frag:A0,vert:k0,attributes:{position:[-4,-4,4,-4,0,4]},count:3,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),Da:1,Db:.5,f:t.prop("f"),k:t.prop("k"),radius:e,pauseSimulation:t.prop("pauseSimulation"),mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),penDensity:t.prop("penDensity"),penIsActive:t.prop("penIsActive"),eraserIsActive:t.prop("eraserIsActive"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},B0=t=>{const{inputBuffer:e,outputBuffer:n,pauseSimulation:a,mouseState:o,simulationParameters:i,worldSize:r}=t;At({inputBuffer:e,outputBuffer:n,pauseSimulation:a,zoomLevel:o.zoomLevel,pan:[o.panX,o.panY],mousePosition:[o.x,o.y],penRadius:1/2**(r-o.penSize),penDensity:o.penDensity,penIsActive:o.pressedLeft,eraserIsActive:o.pressedRight,...i})},C0=(t,e)=>t==="randomSpots"?R0(e,.001):t==="middleCircleAndRandomSpots"?z0(e,.005,.05):t==="empty"?L0(e):P0(e,.02),z0=(t,e,n)=>{const a=t*n;return Array(t*t).fill(0).map((o,i)=>{const r=Math.floor(i/t),s=i%t;return Math.hypot(t/2-s,t/2-r)<a?[0,1,0,1]:Math.random()<e?[0,1,0,1]:[1,0,0,1]}).flat()},L0=t=>Array(t*t).fill(0).map(()=>[0,0,0,1]).flat(),R0=(t,e)=>Array(t*t).fill(0).map(()=>Math.random()<e?[0,1,0,1]:[1,0,0,1]).flat(),P0=(t,e)=>Array(t*t).fill(0).map((n,a)=>{const o=Math.floor(a/t),i=a%t;return Math.hypot(t/2-i,t/2-o)<e*t?[0,1,0,1]:[1,0,0,1]}).flat(),I0=`precision highp float;

attribute vec2 position;

uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0) * zoomLevel + pan * (1.0 - zoomLevel);
    gl_Position = vec4(position, 0, 1);
}
`,T0=`precision highp float;

uniform sampler2D prevState;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    float division = 10.0;
    float column = mod(uv.x, 1.0 / division);
    float c = column * division;

    float row = mod(uv.y, 1.0 / division);
    float r = row * division;

    // I haven't found a way to compare the value to an exact value
    // Might be a precision issue, or just that I'm missing something
    if (c < 0.05 || r < 0.05) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
       gl_FragColor = color;
    }
}
`;let kt;const F0=t=>{kt=t({vert:I0,frag:T0,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{prevState:t.prop("inputBuffer"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan")}})},M0=t=>{const{inputBuffer:e,outputBuffer:n,zoomState:a}=t;kt({inputBuffer:e,outputBuffer:n,zoomLevel:a.zoomLevel,pan:[a.panX,a.panY]})},K0=`precision mediump float;

uniform vec2 mousePosition; // in range [0, 1] on the zoomed screen
uniform float zoomLevel;    // 1 full size, 0 max zoom
uniform vec2 pan;   // in range [0, 1], [0, 0]  is bottom left, [1, 1] top right

attribute vec2 position;

varying vec2 uv;

void main() {
    uv = 0.5 * (position + 1.0);
    gl_Position = vec4(position, 0, 1);
}
`,V0=`precision mediump float;

uniform sampler2D prevState;
uniform vec2 mousePosition;
uniform float penRadius;

varying vec2 uv;

void main() {
    vec4 color = texture2D(prevState, uv);

    float d = distance(uv, mousePosition);
    if (
        (d >= penRadius && d <= penRadius + 0.001) ||
        (uv.x >= mousePosition.x - 0.001 && uv.x <= mousePosition.x + 0.001 && uv.y >= mousePosition.y - 0.01 && uv.y <= mousePosition.y + 0.01) ||
        (uv.x >= mousePosition.x - 0.01 && uv.x <= mousePosition.x + 0.01 && uv.y >= mousePosition.y - 0.001 && uv.y <= mousePosition.y + 0.001))
    {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    } else {
        gl_FragColor = color;
    }
}
`;let Dt;const N0=t=>{Dt=t({frag:V0,vert:K0,attributes:{position:[[1,-1],[-1,-1],[1,1],[1,1],[-1,-1],[-1,1]]},count:6,framebuffer:t.prop("outputBuffer"),uniforms:{mousePosition:t.prop("mousePosition"),penRadius:t.prop("penRadius"),zoomLevel:t.prop("zoomLevel"),pan:t.prop("pan"),prevState:t.prop("inputBuffer")}})},O0=t=>{const{inputBuffer:e,mouseState:n,outputBuffer:a,worldSize:o}=t;Dt({inputBuffer:e,outputBuffer:a,mousePosition:[n.x,n.y],penRadius:1/2**(o-n.penSize),zoomLevel:n.zoomLevel,pan:[n.panX,n.panY]})},H0=t=>{const{controls:e,info:n,mouseState:a,simulationParameters:o}=t,i=document.getElementById("canvas");if(!i)throw new Error("Canvas container not ready");const r=Se({extensions:["OES_texture_float"],canvas:i});n.iteration=0;const s=2**n.worldSize,l=C0(e.initialConditions,s),m=()=>r.framebuffer({color:r.texture({radius:s,data:l,wrap:"repeat",type:"float"}),depthStencil:!1}),p=Array(2).fill(0).map(m),u=Array(2).fill(0).map(m);return D0(r,s),$0(r),F0(r),N0(r),r.frame(()=>{e.pause||n.iteration++;let f=p[(n.iteration+1)%2];for(let v=0;v<e.speed;v++){n.iteration++;const c=p[n.iteration%2];f=p[(n.iteration+1)%2],B0({inputBuffer:c,outputBuffer:f,worldSize:n.worldSize,pauseSimulation:e.pause,mouseState:a,simulationParameters:o})}Y0({inputTexture:f,graphicsTextures:u,controls:e,info:n,mouseState:a})}),r},Y0=t=>{const{inputTexture:e,graphicsTextures:n,controls:a,info:o,mouseState:i}=t;let r=0;r++;const s=e;let l=n[r%2];if(!a.grid&&!a.pen&&(l=null),w0({colorMode:a.colors,inputBuffer:s,iteration:o.iteration,outputBuffer:l,zoomState:i}),a.grid){r++;const m=n[(r+1)%2];let p=n[r%2];a.pen||(p=null),M0({inputBuffer:m,outputBuffer:p,zoomState:i})}if(a.pen){r++;const m=n[(r+1)%2],p=null;O0({mouseState:i,worldSize:o.worldSize,inputBuffer:m,outputBuffer:p})}};const{window:U0}=Pe;function W0(t){let e,n,a,o,i,r,s,l,m,p,u,f,v,c=2**t[0].worldSize+"",x,w,y=2**t[0].worldSize+"",S,L,g=2**(t[0].worldSize+1)+"",d,E,A,b,P,O,ie;return n=new i0({}),n.$on("fkupdated",t[4]),{c(){e=B("main"),H(n.$$.fragment),a=V(),o=B("div"),i=V(),r=B("div"),s=B("label"),l=k("World Size:"),m=V(),p=B("input"),u=V(),f=B("span"),v=k("("),x=k(c),w=k(" x "),S=k(y),L=k(" : "),d=k(g),E=k(")"),A=V(),b=B("canvas"),this.h()},l(I){e=C(I,"MAIN",{});var T=R(e);X(n.$$.fragment,T),a=N(T),o=C(T,"DIV",{id:!0,class:!0}),R(o).forEach(_),i=N(T),r=C(T,"DIV",{});var q=R(r);s=C(q,"LABEL",{for:!0});var pe=R(s);l=D(pe,"World Size:"),pe.forEach(_),m=N(q),p=C(q,"INPUT",{id:!0,type:!0,step:!0}),u=N(q),f=C(q,"SPAN",{});var W=R(f);v=D(W,"("),x=D(W,c),w=D(W," x "),S=D(W,y),L=D(W," : "),d=D(W,g),E=D(W,")"),W.forEach(_),q.forEach(_),A=N(T),b=C(T,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),R(b).forEach(_),T.forEach(_),this.h()},h(){$(o,"id","datgui-container"),$(o,"class","svelte-18zf5fr"),$(s,"for","worldSize"),$(p,"id","worldSize"),$(p,"type","number"),$(p,"step","1"),$(b,"id","canvas"),$(b,"width",t[1].width),$(b,"height",t[1].height),$(b,"class","svelte-18zf5fr")},m(I,T){z(I,e,T),Y(n,e,null),h(e,a),h(e,o),h(e,i),h(e,r),h(r,s),h(s,l),h(r,m),h(r,p),de(p,t[0].worldSize),h(r,u),h(r,f),h(f,v),h(f,x),h(f,w),h(f,S),h(f,L),h(f,d),h(f,E),h(e,A),h(e,b),P=!0,O||(ie=[K(U0,"keydown",t[2]),K(p,"input",t[5]),K(p,"change",t[3]),K(b,"contextmenu",se(X0))],O=!0)},p(I,[T]){T&1&&ge(p.value)!==I[0].worldSize&&de(p,I[0].worldSize),(!P||T&1)&&c!==(c=2**I[0].worldSize+"")&&ae(x,c),(!P||T&1)&&y!==(y=2**I[0].worldSize+"")&&ae(S,y),(!P||T&1)&&g!==(g=2**(I[0].worldSize+1)+"")&&ae(d,g)},i(I){P||(F(n.$$.fragment,I),P=!0)},o(I){M(n.$$.fragment,I),P=!1},d(I){I&&_(e),U(n),O=!1,xe(ie)}}}const X0=t=>t;function q0(t,e,n){const a={width:Math.min(window.innerWidth,window.innerHeight)*.9,height:Math.min(window.innerWidth,window.innerHeight)*.9},o={colors:"A_transform_seismic",initialConditions:"middleCircleAndRandomSpots",reset:()=>c(),pause:!1,grid:!1,pen:!1,speed:50},i={pressedLeft:!1,pressedRight:!1,x:0,y:0,penSize:3,penDensity:.3,zoomLevel:1,panX:.5,panY:.5},r={iteration:0,worldSize:8},s={f:Be[0].f,k:Be[0].k};let l,m;const p=async()=>{const y=await Ee(()=>import("../../../chunks/dat.gui.module-69d90d27.js"),[],import.meta.url);l=new y.GUI({autoPlace:!1,closeOnTop:!0}),l.domElement.id="datgui";const S=document.getElementById("datgui-container");if(!S)throw new Error("Gui container not ready");S.appendChild(l.domElement),l.add(o,"pause").name("Pause"),l.add(o,"grid").name("Debug grid"),l.add(o,"pen").name("Show pen"),l.add(o,"reset").name("Reset simulation"),l.add(o,"colors",["grayscale","blackwhite","whiteblack","raw","timebasedblue","lerp","mrob","redblue","A_gradiant1","A_gradiant2","A_MATLAB_cool","A_IDL_CB_RdBu","A_IDL_CB_RdYiBu","A_IDL_CB_BuYiRd","A_transform_seismic","B_IDL_CB_RdYiBu"]).name("Color scheme");const L={"Random spots":"randomSpots","Middle spot":"middleSpot","Middle + random":"middleCircleAndRandomSpots",Empty:"empty"};l.add(o,"initialConditions",L).onFinishChange(o.reset).name("Initial conditions");const g=l.add(r,"iteration").listen();g.domElement.style.pointerEvents="none",l.add(o,"speed",1,200).name("Simulation speed").listen(),l.add(i,"penSize",0,r.worldSize).name("Pen size").listen(),l.add(i,"penDensity",0,1).name("Pen density"),l.add(i,"zoomLevel",0,1).name("Zoom level").listen(),l.add(i,"panX",0,1).name("pan x").listen(),l.add(i,"panY",0,1).name("pan y").listen()},u=y=>{if(y.code==="Space"){o.pause=!o.pause,y.preventDefault();return}if(y.code==="KeyR"&&!y.getModifierState("Control")){c(),y.preventDefault();return}};let f;const v=()=>{i.x=Math.random(),i.y=Math.random(),i.penSize=Math.random()*3,i.pressedLeft=!0,setTimeout(()=>i.pressedLeft=!1,500),f=setTimeout(v,Math.random()*5e3)},c=()=>{isNaN(r.worldSize)||(r.worldSize>11&&n(0,r.worldSize=11,r),r.worldSize<1&&n(0,r.worldSize=1,r),l&&(document.getElementById(l.domElement.id)?.remove(),l.destroy()),m?.destroy(),p(),m=H0({controls:o,info:r,mouseState:i,simulationParameters:s}),f&&clearTimeout(f),v())},x=y=>{s.f=y.detail.f,s.k=y.detail.k,s.f>.03?o.speed=50:o.speed=2};he(()=>{c()}),ve(()=>{l.destroy(),m.destroy()});function w(){r.worldSize=ge(this.value),n(0,r)}return[r,a,u,c,x,w]}let G0=class extends j{constructor(e){super(),Z(this,e,q0,W0,Q,{})}};function ct(t,e,n){const a=t.slice();return a[1]=e[n],a}function mt(t,e,n){const a=t.slice();return a[1]=e[n],a}function j0(t){let e=t[1].title+"",n;return{c(){n=k(e)},l(a){n=D(a,e)},m(a,o){z(a,n,o)},p:G,d(a){a&&_(n)}}}function pt(t){let e,n;return e=new $e({props:{$$slots:{default:[j0]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){Y(e,a,o),n=!0},p(a,o){const i={};o&64&&(i.$$scope={dirty:o,ctx:a}),e.$set(i)},i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){M(e.$$.fragment,a),n=!1},d(a){U(e,a)}}}function Z0(t){let e,n,a=t[0],o=[];for(let r=0;r<a.length;r+=1)o[r]=pt(mt(t,a,r));const i=r=>M(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=le()},l(r){for(let s=0;s<o.length;s+=1)o[s].l(r);e=le()},m(r,s){for(let l=0;l<o.length;l+=1)o[l].m(r,s);z(r,e,s),n=!0},p(r,s){if(s&1){a=r[0];let l;for(l=0;l<a.length;l+=1){const m=mt(r,a,l);o[l]?(o[l].p(m,s),F(o[l],1)):(o[l]=pt(m),o[l].c(),F(o[l],1),o[l].m(e.parentNode,e))}for(ce(),l=a.length;l<o.length;l+=1)i(l);me()}},i(r){if(!n){for(let s=0;s<a.length;s+=1)F(o[s]);n=!0}},o(r){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)M(o[s]);n=!1},d(r){Ce(o,r),r&&_(e)}}}function Q0(t){let e,n,a;var o=t[1].component;function i(r){return{}}return o&&(e=fe(o,i())),{c(){e&&H(e.$$.fragment),n=V()},l(r){e&&X(e.$$.fragment,r),n=N(r)},m(r,s){e&&Y(e,r,s),z(r,n,s),a=!0},p(r,s){if(o!==(o=r[1].component)){if(e){ce();const l=e;M(l.$$.fragment,1,0,()=>{U(l,1)}),me()}o?(e=fe(o,i()),H(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}},i(r){a||(e&&F(e.$$.fragment,r),a=!0)},o(r){e&&M(e.$$.fragment,r),a=!1},d(r){e&&U(e,r),r&&_(n)}}}function vt(t){let e,n;return e=new ye({props:{$$slots:{default:[Q0]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){Y(e,a,o),n=!0},p(a,o){const i={};o&64&&(i.$$scope={dirty:o,ctx:a}),e.$set(i)},i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){M(e.$$.fragment,a),n=!1},d(a){U(e,a)}}}function J0(t){let e,n,a,o;e=new gt({props:{$$slots:{default:[Z0]},$$scope:{ctx:t}}});let i=t[0],r=[];for(let l=0;l<i.length;l+=1)r[l]=vt(ct(t,i,l));const s=l=>M(r[l],1,1,()=>{r[l]=null});return{c(){H(e.$$.fragment),n=V();for(let l=0;l<r.length;l+=1)r[l].c();a=le()},l(l){X(e.$$.fragment,l),n=N(l);for(let m=0;m<r.length;m+=1)r[m].l(l);a=le()},m(l,m){Y(e,l,m),z(l,n,m);for(let p=0;p<r.length;p+=1)r[p].m(l,m);z(l,a,m),o=!0},p(l,m){const p={};if(m&64&&(p.$$scope={dirty:m,ctx:l}),e.$set(p),m&1){i=l[0];let u;for(u=0;u<i.length;u+=1){const f=ct(l,i,u);r[u]?(r[u].p(f,m),F(r[u],1)):(r[u]=vt(f),r[u].c(),F(r[u],1),r[u].m(a.parentNode,a))}for(ce(),u=i.length;u<r.length;u+=1)s(u);me()}},i(l){if(!o){F(e.$$.fragment,l);for(let m=0;m<i.length;m+=1)F(r[m]);o=!0}},o(l){M(e.$$.fragment,l),r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)M(r[m]);o=!1},d(l){U(e,l),l&&_(n),Ce(r,l),l&&_(a)}}}function ea(t){let e,n,a,o,i,r,s,l,m,p,u,f,v;return f=new xt({props:{$$slots:{default:[J0]},$$scope:{ctx:t}}}),{c(){e=B("p"),n=k(`Here is a list of the various iterations I have made before I got the final version of this
    project.`),a=V(),o=B("div"),i=B("p"),r=k(`Some of the previous versions have a bug and the code is not cleaned up properly when the
        page unload. Which make that when navigating between different versions it is possible to
        end up in a state where several simulation are running in parallel.`),s=V(),l=B("p"),m=k(`To avoid this kind of issues make sure the refresh the page each time you select a new
        version`),p=V(),u=B("div"),H(f.$$.fragment),this.h()},l(c){e=C(c,"P",{});var x=R(e);n=D(x,`Here is a list of the various iterations I have made before I got the final version of this
    project.`),x.forEach(_),a=N(c),o=C(c,"DIV",{class:!0});var w=R(o);i=C(w,"P",{});var y=R(i);r=D(y,`Some of the previous versions have a bug and the code is not cleaned up properly when the
        page unload. Which make that when navigating between different versions it is possible to
        end up in a state where several simulation are running in parallel.`),y.forEach(_),s=N(w),l=C(w,"P",{});var S=R(l);m=D(S,`To avoid this kind of issues make sure the refresh the page each time you select a new
        version`),S.forEach(_),w.forEach(_),p=N(c),u=C(c,"DIV",{});var L=R(u);X(f.$$.fragment,L),L.forEach(_),this.h()},h(){$(o,"class","warning")},m(c,x){z(c,e,x),h(e,n),z(c,a,x),z(c,o,x),h(o,i),h(i,r),h(o,s),h(o,l),h(l,m),z(c,p,x),z(c,u,x),Y(f,u,null),v=!0},p(c,[x]){const w={};x&64&&(w.$$scope={dirty:x,ctx:c}),f.$set(w)},i(c){v||(F(f.$$.fragment,c),v=!0)},o(c){M(f.$$.fragment,c),v=!1},d(c){c&&_(e),c&&_(a),c&&_(o),c&&_(p),c&&_(u),U(f)}}}function ta(t){return[[{title:"Auto visualizer",component:G0},{title:"V7",component:Jr},{title:"Parameters map",component:Ke},{title:"V6",component:lr},{title:"V5",component:Zo},{title:"V4",component:Uo},{title:"V3",component:Oo},{title:"V2",component:Lo},{title:"V1",component:bo}]]}class dt extends j{constructor(e){super(),Z(this,e,ta,ea,Q,{})}}function na(t){let e;return{c(){e=k("About")},l(n){e=D(n,"About")},m(n,a){z(n,e,a)},d(n){n&&_(e)}}}function oa(t){let e;return{c(){e=k("Auto")},l(n){e=D(n,"Auto")},m(n,a){z(n,e,a)},d(n){n&&_(e)}}}function ra(t){let e;return{c(){e=k("Manual")},l(n){e=D(n,"Manual")},m(n,a){z(n,e,a)},d(n){n&&_(e)}}}function aa(t){let e;return{c(){e=k("Parameters map")},l(n){e=D(n,"Parameters map")},m(n,a){z(n,e,a)},d(n){n&&_(e)}}}function ia(t){let e;return{c(){e=k("Previous versions")},l(n){e=D(n,"Previous versions")},m(n,a){z(n,e,a)},d(n){n&&_(e)}}}function la(t){let e,n,a,o,i,r,s,l,m,p;return e=new $e({props:{$$slots:{default:[na]},$$scope:{ctx:t}}}),a=new $e({props:{$$slots:{default:[oa]},$$scope:{ctx:t}}}),i=new $e({props:{$$slots:{default:[ra]},$$scope:{ctx:t}}}),s=new $e({props:{$$slots:{default:[aa]},$$scope:{ctx:t}}}),m=new $e({props:{$$slots:{default:[ia]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment),n=V(),H(a.$$.fragment),o=V(),H(i.$$.fragment),r=V(),H(s.$$.fragment),l=V(),H(m.$$.fragment)},l(u){X(e.$$.fragment,u),n=N(u),X(a.$$.fragment,u),o=N(u),X(i.$$.fragment,u),r=N(u),X(s.$$.fragment,u),l=N(u),X(m.$$.fragment,u)},m(u,f){Y(e,u,f),z(u,n,f),Y(a,u,f),z(u,o,f),Y(i,u,f),z(u,r,f),Y(s,u,f),z(u,l,f),Y(m,u,f),p=!0},p(u,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:u}),e.$set(v);const c={};f&1&&(c.$$scope={dirty:f,ctx:u}),a.$set(c);const x={};f&1&&(x.$$scope={dirty:f,ctx:u}),i.$set(x);const w={};f&1&&(w.$$scope={dirty:f,ctx:u}),s.$set(w);const y={};f&1&&(y.$$scope={dirty:f,ctx:u}),m.$set(y)},i(u){p||(F(e.$$.fragment,u),F(a.$$.fragment,u),F(i.$$.fragment,u),F(s.$$.fragment,u),F(m.$$.fragment,u),p=!0)},o(u){M(e.$$.fragment,u),M(a.$$.fragment,u),M(i.$$.fragment,u),M(s.$$.fragment,u),M(m.$$.fragment,u),p=!1},d(u){U(e,u),u&&_(n),U(a,u),u&&_(o),U(i,u),u&&_(r),U(s,u),u&&_(l),U(m,u)}}}function sa(t){let e,n,a;var o=Ve;function i(r){return{}}return o&&(e=fe(o,i())),{c(){e&&H(e.$$.fragment),n=le()},l(r){e&&X(e.$$.fragment,r),n=le()},m(r,s){e&&Y(e,r,s),z(r,n,s),a=!0},p(r,s){if(o!==(o=Ve)){if(e){ce();const l=e;M(l.$$.fragment,1,0,()=>{U(l,1)}),me()}o?(e=fe(o,i()),H(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}},i(r){a||(e&&F(e.$$.fragment,r),a=!0)},o(r){e&&M(e.$$.fragment,r),a=!1},d(r){r&&_(n),e&&U(e,r)}}}function fa(t){let e,n,a;var o=Ye;function i(r){return{}}return o&&(e=fe(o,i())),{c(){e&&H(e.$$.fragment),n=le()},l(r){e&&X(e.$$.fragment,r),n=le()},m(r,s){e&&Y(e,r,s),z(r,n,s),a=!0},p(r,s){if(o!==(o=Ye)){if(e){ce();const l=e;M(l.$$.fragment,1,0,()=>{U(l,1)}),me()}o?(e=fe(o,i()),H(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}},i(r){a||(e&&F(e.$$.fragment,r),a=!0)},o(r){e&&M(e.$$.fragment,r),a=!1},d(r){r&&_(n),e&&U(e,r)}}}function ua(t){let e,n,a;var o=Ge;function i(r){return{}}return o&&(e=fe(o,i())),{c(){e&&H(e.$$.fragment),n=le()},l(r){e&&X(e.$$.fragment,r),n=le()},m(r,s){e&&Y(e,r,s),z(r,n,s),a=!0},p(r,s){if(o!==(o=Ge)){if(e){ce();const l=e;M(l.$$.fragment,1,0,()=>{U(l,1)}),me()}o?(e=fe(o,i()),H(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}},i(r){a||(e&&F(e.$$.fragment,r),a=!0)},o(r){e&&M(e.$$.fragment,r),a=!1},d(r){r&&_(n),e&&U(e,r)}}}function ca(t){let e,n,a;var o=Ke;function i(r){return{}}return o&&(e=fe(o,i())),{c(){e&&H(e.$$.fragment),n=le()},l(r){e&&X(e.$$.fragment,r),n=le()},m(r,s){e&&Y(e,r,s),z(r,n,s),a=!0},p(r,s){if(o!==(o=Ke)){if(e){ce();const l=e;M(l.$$.fragment,1,0,()=>{U(l,1)}),me()}o?(e=fe(o,i()),H(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}},i(r){a||(e&&F(e.$$.fragment,r),a=!0)},o(r){e&&M(e.$$.fragment,r),a=!1},d(r){r&&_(n),e&&U(e,r)}}}function ma(t){let e,n,a;var o=dt;function i(r){return{}}return o&&(e=fe(o,i())),{c(){e&&H(e.$$.fragment),n=le()},l(r){e&&X(e.$$.fragment,r),n=le()},m(r,s){e&&Y(e,r,s),z(r,n,s),a=!0},p(r,s){if(o!==(o=dt)){if(e){ce();const l=e;M(l.$$.fragment,1,0,()=>{U(l,1)}),me()}o?(e=fe(o,i()),H(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}},i(r){a||(e&&F(e.$$.fragment,r),a=!0)},o(r){e&&M(e.$$.fragment,r),a=!1},d(r){r&&_(n),e&&U(e,r)}}}function pa(t){let e,n,a,o,i,r,s,l,m,p,u,f;return e=new gt({props:{$$slots:{default:[la]},$$scope:{ctx:t}}}),a=new ye({props:{$$slots:{default:[sa]},$$scope:{ctx:t}}}),i=new ye({props:{$$slots:{default:[fa]},$$scope:{ctx:t}}}),s=new ye({props:{$$slots:{default:[ua]},$$scope:{ctx:t}}}),m=new ye({props:{$$slots:{default:[ca]},$$scope:{ctx:t}}}),u=new ye({props:{$$slots:{default:[ma]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment),n=V(),H(a.$$.fragment),o=V(),H(i.$$.fragment),r=V(),H(s.$$.fragment),l=V(),H(m.$$.fragment),p=V(),H(u.$$.fragment)},l(v){X(e.$$.fragment,v),n=N(v),X(a.$$.fragment,v),o=N(v),X(i.$$.fragment,v),r=N(v),X(s.$$.fragment,v),l=N(v),X(m.$$.fragment,v),p=N(v),X(u.$$.fragment,v)},m(v,c){Y(e,v,c),z(v,n,c),Y(a,v,c),z(v,o,c),Y(i,v,c),z(v,r,c),Y(s,v,c),z(v,l,c),Y(m,v,c),z(v,p,c),Y(u,v,c),f=!0},p(v,c){const x={};c&1&&(x.$$scope={dirty:c,ctx:v}),e.$set(x);const w={};c&1&&(w.$$scope={dirty:c,ctx:v}),a.$set(w);const y={};c&1&&(y.$$scope={dirty:c,ctx:v}),i.$set(y);const S={};c&1&&(S.$$scope={dirty:c,ctx:v}),s.$set(S);const L={};c&1&&(L.$$scope={dirty:c,ctx:v}),m.$set(L);const g={};c&1&&(g.$$scope={dirty:c,ctx:v}),u.$set(g)},i(v){f||(F(e.$$.fragment,v),F(a.$$.fragment,v),F(i.$$.fragment,v),F(s.$$.fragment,v),F(m.$$.fragment,v),F(u.$$.fragment,v),f=!0)},o(v){M(e.$$.fragment,v),M(a.$$.fragment,v),M(i.$$.fragment,v),M(s.$$.fragment,v),M(m.$$.fragment,v),M(u.$$.fragment,v),f=!1},d(v){U(e,v),v&&_(n),U(a,v),v&&_(o),U(i,v),v&&_(r),U(s,v),v&&_(l),U(m,v),v&&_(p),U(u,v)}}}function va(t){let e,n,a;return n=new xt({props:{$$slots:{default:[pa]},$$scope:{ctx:t}}}),{c(){e=B("div"),H(n.$$.fragment)},l(o){e=C(o,"DIV",{});var i=R(e);X(n.$$.fragment,i),i.forEach(_)},m(o,i){z(o,e,i),Y(n,e,null),a=!0},p(o,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:o}),n.$set(r)},i(o){a||(F(n.$$.fragment,o),a=!0)},o(o){M(n.$$.fragment,o),a=!1},d(o){o&&_(e),U(n)}}}class da extends j{constructor(e){super(),Z(this,e,null,va,Q,{})}}function xa(t){let e,n;return e=new da({}),{c(){H(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){Y(e,a,o),n=!0},p:G,i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){M(e.$$.fragment,a),n=!1},d(a){U(e,a)}}}class ga extends j{constructor(e){super(),Z(this,e,null,xa,Q,{})}}function ha(t){let e,n;return e=new ga({}),{c(){H(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){Y(e,a,o),n=!0},p:G,i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){M(e.$$.fragment,a),n=!1},d(a){U(e,a)}}}class Ia extends j{constructor(e){super(),Z(this,e,null,ha,Q,{})}}export{Ia as default};
