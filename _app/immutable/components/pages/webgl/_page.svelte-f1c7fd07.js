import{S as ze,i as Be,s as Re,k as i,q as h,a as _,w as ve,l as n,m as l,r as p,h as o,c as g,x as be,n as ue,b as H,D as e,y as _e,I as me,u as Ve,f as ge,t as Te,z as $e,J as Ae,K as De,B as Le}from"../../../chunks/index-689c9b92.js";import{P as We}from"../../../chunks/P5-a2aedab4.js";import{g as Ge,u as Ne}from"../../../chunks/cells-3d58d19f.js";import{A as Oe,g as Me}from"../../../chunks/AttractionTableComponent-68b8dc88.js";function qe(v){let t,d,c,T,$,y,b,B,R,V,C,N,k,S,O,M,x,A,s,f,u,m,q,I,re,U,ie,ne,X,j,z,Y,E,w,D,F=v[1].pause?"Run":"Pause",Z,le,L,ce,he,W,pe,de,P,J,fe,xe;return z=new We({props:{sketch:v[3]}}),P=new Oe({props:{attractionTable:v[0],onUpdateTable:v[4]}}),{c(){t=i("div"),d=i("p"),c=h("This is an attempt to use p5.js' ability to render glsl shaders to speed up the animation."),T=_(),$=i("p"),y=h("This is a complete failure "),b=i("b"),B=h("but"),R=h(` I learned things so that's cool. The principle of this
        simulation is that the neighbors detection and the position updates are still done in javascript.
        The role of the shader is only to render the different particles on the canvas.`),V=_(),C=i("p"),N=h(`To do that the vertex shader is as simple as possible it just handles the position properly.
        The fragment shader is where things happen: We pass all the particles as uniforms. Since the
        shader is ran on each vertex (i.e. each pixel of the screen), for each vertex we check the
        distance of each cell to the current vertex. Based on the distance we increment the color of
        the vertex so that the particles appear.`),k=_(),S=i("p"),O=h("There are several issues with this approach:"),M=_(),x=i("ul"),A=i("li"),s=h(`Passing more than 100 or 200 uniforms to the shader seems to overload the GPU which
            drastically limits our number of particles.`),f=_(),u=i("li"),m=h(`The hard calculations are not done in the shader so not parallelized so the performences
            are still not great`),q=_(),I=i("p"),re=h(`The approach described in
        `),U=i("a"),ie=h("this article"),ne=h(" seems much better."),X=_(),j=i("div"),ve(z.$$.fragment),Y=_(),E=i("div"),w=i("div"),D=i("button"),Z=h(F),le=_(),L=i("button"),ce=h("Reset cells"),he=_(),W=i("button"),pe=h("Rainbow"),de=_(),ve(P.$$.fragment),this.h()},l(a){t=n(a,"DIV",{});var r=l(t);d=n(r,"P",{});var K=l(d);c=p(K,"This is an attempt to use p5.js' ability to render glsl shaders to speed up the animation."),K.forEach(o),T=g(r),$=n(r,"P",{});var ee=l($);y=p(ee,"This is a complete failure "),b=n(ee,"B",{});var we=l(b);B=p(we,"but"),we.forEach(o),R=p(ee,` I learned things so that's cool. The principle of this
        simulation is that the neighbors detection and the position updates are still done in javascript.
        The role of the shader is only to render the different particles on the canvas.`),ee.forEach(o),V=g(r),C=n(r,"P",{});var ye=l(C);N=p(ye,`To do that the vertex shader is as simple as possible it just handles the position properly.
        The fragment shader is where things happen: We pass all the particles as uniforms. Since the
        shader is ran on each vertex (i.e. each pixel of the screen), for each vertex we check the
        distance of each cell to the current vertex. Based on the distance we increment the color of
        the vertex so that the particles appear.`),ye.forEach(o),k=g(r),S=n(r,"P",{});var Ee=l(S);O=p(Ee,"There are several issues with this approach:"),Ee.forEach(o),M=g(r),x=n(r,"UL",{});var te=l(x);A=n(te,"LI",{});var Pe=l(A);s=p(Pe,`Passing more than 100 or 200 uniforms to the shader seems to overload the GPU which
            drastically limits our number of particles.`),Pe.forEach(o),f=g(te),u=n(te,"LI",{});var Ce=l(u);m=p(Ce,`The hard calculations are not done in the shader so not parallelized so the performences
            are still not great`),Ce.forEach(o),te.forEach(o),q=g(r),I=n(r,"P",{});var ae=l(I);re=p(ae,`The approach described in
        `),U=n(ae,"A",{href:!0,target:!0});var ke=l(U);ie=p(ke,"this article"),ke.forEach(o),ne=p(ae," seems much better."),ae.forEach(o),r.forEach(o),X=g(a),j=n(a,"DIV",{class:!0});var Se=l(j);be(z.$$.fragment,Se),Se.forEach(o),Y=g(a),E=n(a,"DIV",{});var se=l(E);w=n(se,"DIV",{});var G=l(w);D=n(G,"BUTTON",{});var Ie=l(D);Z=p(Ie,F),Ie.forEach(o),le=g(G),L=n(G,"BUTTON",{});var Ue=l(L);ce=p(Ue,"Reset cells"),Ue.forEach(o),he=g(G),W=n(G,"BUTTON",{});var je=l(W);pe=p(je,"Rainbow"),je.forEach(o),G.forEach(o),de=g(se),be(P.$$.fragment,se),se.forEach(o),this.h()},h(){ue(U,"href","https://gpfault.net/posts/webgl2-particles.txt.html"),ue(U,"target","blank"),ue(j,"class","d-flex justify-content-center")},m(a,r){H(a,t,r),e(t,d),e(d,c),e(t,T),e(t,$),e($,y),e($,b),e(b,B),e($,R),e(t,V),e(t,C),e(C,N),e(t,k),e(t,S),e(S,O),e(t,M),e(t,x),e(x,A),e(A,s),e(x,f),e(x,u),e(u,m),e(t,q),e(t,I),e(I,re),e(I,U),e(U,ie),e(I,ne),H(a,X,r),H(a,j,r),_e(z,j,null),H(a,Y,r),H(a,E,r),e(E,w),e(w,D),e(D,Z),e(w,le),e(w,L),e(L,ce),e(w,he),e(w,W),e(W,pe),e(E,de),_e(P,E,null),J=!0,fe||(xe=[me(D,"click",v[6]),me(L,"click",v[2]),me(W,"click",v[5])],fe=!0)},p(a,[r]){(!J||r&2)&&F!==(F=a[1].pause?"Run":"Pause")&&Ve(Z,F);const K={};r&1&&(K.attractionTable=a[0]),P.$set(K)},i(a){J||(ge(z.$$.fragment,a),ge(P.$$.fragment,a),J=!0)},o(a){Te(z.$$.fragment,a),Te(P.$$.fragment,a),J=!1},d(a){a&&o(t),a&&o(X),a&&o(j),$e(z),a&&o(Y),a&&o(E),$e(P),fe=!1,Ae(xe)}}}const oe=32,Q=100;function Fe(v,t,d){let c,T,$,y;const b={pause:!1},B={x:100*oe,y:60*oe},R=()=>{const s=Ge(B,1e3,oe);T=s.cells,$=s.cellsMap},V=()=>{b.pause===!1&&Ne(y,oe,T,$),setTimeout(V,1)};R(),y=Me(),V();const C=`attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  gl_Position = positionVec4;
}
`,N=`precision mediump float;
varying vec2 vTexCoord;

uniform float aspectRatio;
`+new Array(Q).fill(0).map((s,f)=>`uniform vec3 particle${f};`).join(`
`)+`
float circle(in vec2 _st, in float _radius){
  vec2 dist = _st-vec2(1.0);
  return 1.-smoothstep(0.0, _radius,
                         dot(dist,dist)*4.0);
}

void main() {
  vec2 coord = vTexCoord;
  vec3 particles[${Q}];
`+new Array(Q).fill(0).map((s,f)=>`particles[${f}] = particle${f};`).join(`
`)+`
vec3 color = vec3(0.0);
  
  for (int i = 0; i < ${Q}; i++) {
    vec2 pos = vec2(particles[i].x, particles[i].y);
    float brightness = particles[i].z;
    vec3 part = vec3(circle(coord + pos, 0.0001));
    if (particles[i].z == 0.0) {
        part *= vec3(1.0, 1.0, 1.0);
    }
    if (particles[i].z == 1.0) {
        part *= vec3(1.0, 0.0, 0.0);
    }
    if (particles[i].z == 2.0) {
        part *= vec3(0.0, 1.0, 0.0);
    }
    if (particles[i].z == 3.0) {
        part *= vec3(0.0, 0.0, 1.0);
    }
    part *= vec3(1.0);
    color += part;
  }
  
  gl_FragColor = vec4(color, 1.0);
}
`;let k;const S=s=>{s.setup=()=>{c=s,s.createCanvas(1e3,700,s.WEBGL),k=s.createShader(C,N)},s.draw=()=>{s.shader(k),O(k,"particle",T),s.rect(0,0,s.width,s.height)}},O=(s,f,u)=>{for(let m=0;m<Q;m++)s.setUniform(f+m,[u[m].pos.x/3200,u[m].pos.y/1920,["white","green","red","blue"].indexOf(u[m].color)])},M=s=>{d(0,y=s)},x=()=>{const s=["white","red","green","blue"],f=B.x/4;for(const u of T){const m=Math.floor(u.pos.x/f),q=s[m];u.color=q}};return De(()=>{c?.remove()}),[y,b,R,S,M,x,()=>d(1,b.pause=!b.pause,b)]}class Je extends ze{constructor(t){super(),Be(this,t,Fe,qe,Re,{})}}function Ke(v){let t,d;return t=new Je({}),{c(){ve(t.$$.fragment)},l(c){be(t.$$.fragment,c)},m(c,T){_e(t,c,T),d=!0},p:Le,i(c){d||(ge(t.$$.fragment,c),d=!0)},o(c){Te(t.$$.fragment,c),d=!1},d(c){$e(t,c)}}}class Ze extends ze{constructor(t){super(),Be(this,t,null,Ke,Re,{})}}export{Ze as default};
