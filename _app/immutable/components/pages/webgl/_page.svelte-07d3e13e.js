import{S as Be,i as Ie,s as Re,k as n,q as h,a as _,w as ve,l,m as c,r as p,h as o,c as g,x as be,n as ue,b as J,D as e,y as _e,K as me,u as Ve,f as ge,t as Te,z as $e,M as Ae,O as De,B as Le}from"../../../chunks/index-7c7fa373.js";import{P as Oe}from"../../../chunks/P5-16fb71b6.js";import{g as We,u as Ge}from"../../../chunks/cells-998dd681.js";import{A as Me,g as Ne}from"../../../chunks/AttractionTableComponent-9eb04794.js";function qe(v){let t,d,i,T,$,y,b,I,R,V,C,G,k,S,M,N,x,A,s,f,u,m,q,U,re,j,ie,ne,X,z,B,Y,E,w,D,F=v[1].pause?"Run":"Pause",Z,le,L,ce,he,O,pe,de,P,K,fe,xe;return B=new Oe({props:{sketch:v[3]}}),P=new Me({props:{attractionTable:v[0],onUpdateTable:v[4]}}),{c(){t=n("div"),d=n("p"),i=h("This is an attempt to use p5.js' ability to render glsl shaders to speed up the animation."),T=_(),$=n("p"),y=h("This is a complete failure "),b=n("b"),I=h("but"),R=h(` I learned things so that's cool. The principle of this
        simulation is that the neighbors detection and the position updates are still done in javascript.
        The role of the shader is only to render the different particles on the canvas.`),V=_(),C=n("p"),G=h(`To do that the vertex shader is as simple as possible it just handles the position properly.
        The fragment shader is where things happen: We pass all the particles as uniforms. Since the
        shader is ran on each vertex (i.e. each pixel of the screen), for each vertex we check the
        distance of each cell to the current vertex. Based on the distance we increment the color of
        the vertex so that the particles appear.`),k=_(),S=n("p"),M=h("There are several issues with this approach:"),N=_(),x=n("ul"),A=n("li"),s=h(`Passing more than 100 or 200 uniforms to the shader seems to overload the GPU which
            drastically limits our number of particles.`),f=_(),u=n("li"),m=h(`The hard calculations are not done in the shader so not parallelized so the performences
            are still not great`),q=_(),U=n("p"),re=h(`The approach described in
        `),j=n("a"),ie=h("this article"),ne=h(" seems much better."),X=_(),z=n("div"),ve(B.$$.fragment),Y=_(),E=n("div"),w=n("div"),D=n("button"),Z=h(F),le=_(),L=n("button"),ce=h("Reset cells"),he=_(),O=n("button"),pe=h("Rainbow"),de=_(),ve(P.$$.fragment),this.h()},l(a){t=l(a,"DIV",{});var r=c(t);d=l(r,"P",{});var H=c(d);i=p(H,"This is an attempt to use p5.js' ability to render glsl shaders to speed up the animation."),H.forEach(o),T=g(r),$=l(r,"P",{});var ee=c($);y=p(ee,"This is a complete failure "),b=l(ee,"B",{});var we=c(b);I=p(we,"but"),we.forEach(o),R=p(ee,` I learned things so that's cool. The principle of this
        simulation is that the neighbors detection and the position updates are still done in javascript.
        The role of the shader is only to render the different particles on the canvas.`),ee.forEach(o),V=g(r),C=l(r,"P",{});var ye=c(C);G=p(ye,`To do that the vertex shader is as simple as possible it just handles the position properly.
        The fragment shader is where things happen: We pass all the particles as uniforms. Since the
        shader is ran on each vertex (i.e. each pixel of the screen), for each vertex we check the
        distance of each cell to the current vertex. Based on the distance we increment the color of
        the vertex so that the particles appear.`),ye.forEach(o),k=g(r),S=l(r,"P",{});var Ee=c(S);M=p(Ee,"There are several issues with this approach:"),Ee.forEach(o),N=g(r),x=l(r,"UL",{});var te=c(x);A=l(te,"LI",{});var Pe=c(A);s=p(Pe,`Passing more than 100 or 200 uniforms to the shader seems to overload the GPU which
            drastically limits our number of particles.`),Pe.forEach(o),f=g(te),u=l(te,"LI",{});var Ce=c(u);m=p(Ce,`The hard calculations are not done in the shader so not parallelized so the performences
            are still not great`),Ce.forEach(o),te.forEach(o),q=g(r),U=l(r,"P",{});var ae=c(U);re=p(ae,`The approach described in
        `),j=l(ae,"A",{href:!0,target:!0});var ke=c(j);ie=p(ke,"this article"),ke.forEach(o),ne=p(ae," seems much better."),ae.forEach(o),r.forEach(o),X=g(a),z=l(a,"DIV",{class:!0});var Se=c(z);be(B.$$.fragment,Se),Se.forEach(o),Y=g(a),E=l(a,"DIV",{});var se=c(E);w=l(se,"DIV",{});var W=c(w);D=l(W,"BUTTON",{});var Ue=c(D);Z=p(Ue,F),Ue.forEach(o),le=g(W),L=l(W,"BUTTON",{});var je=c(L);ce=p(je,"Reset cells"),je.forEach(o),he=g(W),O=l(W,"BUTTON",{});var ze=c(O);pe=p(ze,"Rainbow"),ze.forEach(o),W.forEach(o),de=g(se),be(P.$$.fragment,se),se.forEach(o),this.h()},h(){ue(j,"href","https://gpfault.net/posts/webgl2-particles.txt.html"),ue(j,"target","blank"),ue(z,"class","d-flex justify-content-center")},m(a,r){J(a,t,r),e(t,d),e(d,i),e(t,T),e(t,$),e($,y),e($,b),e(b,I),e($,R),e(t,V),e(t,C),e(C,G),e(t,k),e(t,S),e(S,M),e(t,N),e(t,x),e(x,A),e(A,s),e(x,f),e(x,u),e(u,m),e(t,q),e(t,U),e(U,re),e(U,j),e(j,ie),e(U,ne),J(a,X,r),J(a,z,r),_e(B,z,null),J(a,Y,r),J(a,E,r),e(E,w),e(w,D),e(D,Z),e(w,le),e(w,L),e(L,ce),e(w,he),e(w,O),e(O,pe),e(E,de),_e(P,E,null),K=!0,fe||(xe=[me(D,"click",v[6]),me(L,"click",v[2]),me(O,"click",v[5])],fe=!0)},p(a,[r]){(!K||r&2)&&F!==(F=a[1].pause?"Run":"Pause")&&Ve(Z,F);const H={};r&1&&(H.attractionTable=a[0]),P.$set(H)},i(a){K||(ge(B.$$.fragment,a),ge(P.$$.fragment,a),K=!0)},o(a){Te(B.$$.fragment,a),Te(P.$$.fragment,a),K=!1},d(a){a&&o(t),a&&o(X),a&&o(z),$e(B),a&&o(Y),a&&o(E),$e(P),fe=!1,Ae(xe)}}}const oe=32,Q=100;function Fe(v,t,d){let i,T,$,y;const b={pause:!1},I={x:100*oe,y:60*oe},R=()=>{const s=We(I,1e3,oe);T=s.cells,$=s.cellsMap},V=()=>{b.pause===!1&&Ge(y,oe,T,$),setTimeout(V,1)};R(),y=Ne(),V();const C=`attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  gl_Position = positionVec4;
}
`,G=`precision mediump float;
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
`;let k;const S=s=>{s.setup=()=>{i=s,s.createCanvas(1e3,700,s.WEBGL),k=s.createShader(C,G)},s.draw=()=>{s.shader(k),M(k,"particle",T),s.rect(0,0,s.width,s.height)}},M=(s,f,u)=>{for(let m=0;m<Q;m++)s.setUniform(f+m,[u[m].pos.x/3200,u[m].pos.y/1920,["white","green","red","blue"].indexOf(u[m].color)])},N=s=>{d(0,y=s)},x=()=>{const s=["white","red","green","blue"],f=I.x/4;for(const u of T){const m=Math.floor(u.pos.x/f),q=s[m];u.color=q}};return De(()=>{i==null||i.remove()}),[y,b,R,S,N,x,()=>d(1,b.pause=!b.pause,b)]}class Ke extends Be{constructor(t){super(),Ie(this,t,Fe,qe,Re,{})}}function He(v){let t,d;return t=new Ke({}),{c(){ve(t.$$.fragment)},l(i){be(t.$$.fragment,i)},m(i,T){_e(t,i,T),d=!0},p:Le,i(i){d||(ge(t.$$.fragment,i),d=!0)},o(i){Te(t.$$.fragment,i),d=!1},d(i){$e(t,i)}}}class Ze extends Be{constructor(t){super(),Ie(this,t,null,He,Re,{})}}export{Ze as default};
