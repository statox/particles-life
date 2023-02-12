import{S as je,i as ze,s as Be,k as n,q as h,a as g,w as ve,l,m as c,r as p,h as o,c as T,x as be,n as ue,b as H,D as e,y as _e,I as me,u as Re,f as ge,t as Te,z as $e,J as Ve,K as De,B as Le}from"../../../chunks/index-71905c10.js";import{P as We,g as Ge,u as Ne,a as Oe,b as Me,c as qe,d as Fe,e as Je}from"../../../chunks/cells-8607423a.js";import{A as Ke}from"../../../chunks/AttractionTableComponent-88e58b1f.js";function He(b){let t,d,i,$,x,f,_,z,B,R,P,N,k,A,O,M,w,V,s,u,m,v,q,S,re,I,ie,ne,X,U,j,Y,E,y,D,F=b[1].pause?"Run":"Pause",Z,le,L,ce,he,W,pe,de,C,J,fe,xe;return j=new We({props:{sketch:b[3]}}),C=new Ke({props:{attractionTable:b[0],onUpdateTable:b[4]}}),{c(){t=n("div"),d=n("p"),i=h("This is an attempt to use p5.js' ability to render glsl shaders to speed up the animation."),$=g(),x=n("p"),f=h("This is a complete failure "),_=n("b"),z=h("but"),B=h(` I learned things so that's cool. The principle of this
        simulation is that the neighbors detection and the position updates are still done in javascript.
        The role of the shader is only to render the different particles on the canvas.`),R=g(),P=n("p"),N=h(`To do that the vertex shader is as simple as possible it just handles the position properly.
        The fragment shader is where things happen: We pass all the particles as uniforms. Since the
        shader is ran on each vertex (i.e. each pixel of the screen), for each vertex we check the
        distance of each cell to the current vertex. Based on the distance we increment the color of
        the vertex so that the particles appear.`),k=g(),A=n("p"),O=h("There are several issues with this approach:"),M=g(),w=n("ul"),V=n("li"),s=h(`Passing more than 100 or 200 uniforms to the shader seems to overload the GPU which
            drastically limits our number of particles.`),u=g(),m=n("li"),v=h(`The hard calculations are not done in the shader so not parallelized so the performences
            are still not great`),q=g(),S=n("p"),re=h(`The approach described in
        `),I=n("a"),ie=h("this article"),ne=h(" seems much better."),X=g(),U=n("div"),ve(j.$$.fragment),Y=g(),E=n("div"),y=n("div"),D=n("button"),Z=h(F),le=g(),L=n("button"),ce=h("Reset cells"),he=g(),W=n("button"),pe=h("Rainbow"),de=g(),ve(C.$$.fragment),this.h()},l(a){t=l(a,"DIV",{});var r=c(t);d=l(r,"P",{});var K=c(d);i=p(K,"This is an attempt to use p5.js' ability to render glsl shaders to speed up the animation."),K.forEach(o),$=T(r),x=l(r,"P",{});var ee=c(x);f=p(ee,"This is a complete failure "),_=l(ee,"B",{});var we=c(_);z=p(we,"but"),we.forEach(o),B=p(ee,` I learned things so that's cool. The principle of this
        simulation is that the neighbors detection and the position updates are still done in javascript.
        The role of the shader is only to render the different particles on the canvas.`),ee.forEach(o),R=T(r),P=l(r,"P",{});var ye=c(P);N=p(ye,`To do that the vertex shader is as simple as possible it just handles the position properly.
        The fragment shader is where things happen: We pass all the particles as uniforms. Since the
        shader is ran on each vertex (i.e. each pixel of the screen), for each vertex we check the
        distance of each cell to the current vertex. Based on the distance we increment the color of
        the vertex so that the particles appear.`),ye.forEach(o),k=T(r),A=l(r,"P",{});var Ee=c(A);O=p(Ee,"There are several issues with this approach:"),Ee.forEach(o),M=T(r),w=l(r,"UL",{});var te=c(w);V=l(te,"LI",{});var Ce=c(V);s=p(Ce,`Passing more than 100 or 200 uniforms to the shader seems to overload the GPU which
            drastically limits our number of particles.`),Ce.forEach(o),u=T(te),m=l(te,"LI",{});var Pe=c(m);v=p(Pe,`The hard calculations are not done in the shader so not parallelized so the performences
            are still not great`),Pe.forEach(o),te.forEach(o),q=T(r),S=l(r,"P",{});var ae=c(S);re=p(ae,`The approach described in
        `),I=l(ae,"A",{href:!0,target:!0});var ke=c(I);ie=p(ke,"this article"),ke.forEach(o),ne=p(ae," seems much better."),ae.forEach(o),r.forEach(o),X=T(a),U=l(a,"DIV",{class:!0});var Ae=c(U);be(j.$$.fragment,Ae),Ae.forEach(o),Y=T(a),E=l(a,"DIV",{});var se=c(E);y=l(se,"DIV",{});var G=c(y);D=l(G,"BUTTON",{});var Se=c(D);Z=p(Se,F),Se.forEach(o),le=T(G),L=l(G,"BUTTON",{});var Ie=c(L);ce=p(Ie,"Reset cells"),Ie.forEach(o),he=T(G),W=l(G,"BUTTON",{});var Ue=c(W);pe=p(Ue,"Rainbow"),Ue.forEach(o),G.forEach(o),de=T(se),be(C.$$.fragment,se),se.forEach(o),this.h()},h(){ue(I,"href","https://gpfault.net/posts/webgl2-particles.txt.html"),ue(I,"target","blank"),ue(U,"class","d-flex justify-content-center")},m(a,r){H(a,t,r),e(t,d),e(d,i),e(t,$),e(t,x),e(x,f),e(x,_),e(_,z),e(x,B),e(t,R),e(t,P),e(P,N),e(t,k),e(t,A),e(A,O),e(t,M),e(t,w),e(w,V),e(V,s),e(w,u),e(w,m),e(m,v),e(t,q),e(t,S),e(S,re),e(S,I),e(I,ie),e(S,ne),H(a,X,r),H(a,U,r),_e(j,U,null),H(a,Y,r),H(a,E,r),e(E,y),e(y,D),e(D,Z),e(y,le),e(y,L),e(L,ce),e(y,he),e(y,W),e(W,pe),e(E,de),_e(C,E,null),J=!0,fe||(xe=[me(D,"click",b[6]),me(L,"click",b[2]),me(W,"click",b[5])],fe=!0)},p(a,[r]){(!J||r&2)&&F!==(F=a[1].pause?"Run":"Pause")&&Re(Z,F);const K={};r&1&&(K.attractionTable=a[0]),C.$set(K)},i(a){J||(ge(j.$$.fragment,a),ge(C.$$.fragment,a),J=!0)},o(a){Te(j.$$.fragment,a),Te(C.$$.fragment,a),J=!1},d(a){a&&o(t),a&&o(X),a&&o(U),$e(j),a&&o(Y),a&&o(E),$e(C),fe=!1,Ve(xe)}}}const oe=32,Q=100;function Qe(b,t,d){let i,$,x,f;const _={pause:!1},z={x:100*oe,y:60*oe},B=()=>{const s=Ge(z,1e3,oe);$=s.cells,x=s.cellsMap},R=()=>{_.pause===!1&&Ne(f,oe,$,x),setTimeout(R,1)};B(),f=Oe(),f=Me(),f=qe(),f=Fe(),f=Je(),R();const P=`attribute vec3 aPosition;
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
`+new Array(Q).fill(0).map((s,u)=>`uniform vec3 particle${u};`).join(`
`)+`
float circle(in vec2 _st, in float _radius){
  vec2 dist = _st-vec2(1.0);
  return 1.-smoothstep(0.0, _radius,
                         dot(dist,dist)*4.0);
}

void main() {
  vec2 coord = vTexCoord;
  vec3 particles[${Q}];
`+new Array(Q).fill(0).map((s,u)=>`particles[${u}] = particle${u};`).join(`
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
`;let k;const A=s=>{s.setup=()=>{i=s,s.createCanvas(1e3,700,s.WEBGL),k=s.createShader(P,N)},s.draw=()=>{s.shader(k),O(k,"particle",$),s.rect(0,0,s.width,s.height)}},O=(s,u,m)=>{for(let v=0;v<Q;v++)s.setUniform(u+v,[m[v].pos.x/3200,m[v].pos.y/1920,["white","green","red","blue"].indexOf(m[v].color)])},M=s=>{d(0,f=s)},w=()=>{const s=["white","red","green","blue"],u=z.x/4;for(const m of $){const v=Math.floor(m.pos.x/u),q=s[v];m.color=q}};return De(()=>{i==null||i.remove()}),[f,_,B,A,M,w,()=>d(1,_.pause=!_.pause,_)]}class Xe extends je{constructor(t){super(),ze(this,t,Qe,He,Be,{})}}function Ye(b){let t,d;return t=new Xe({}),{c(){ve(t.$$.fragment)},l(i){be(t.$$.fragment,i)},m(i,$){_e(t,i,$),d=!0},p:Le,i(i){d||(ge(t.$$.fragment,i),d=!0)},o(i){Te(t.$$.fragment,i),d=!1},d(i){$e(t,i)}}}class at extends je{constructor(t){super(),ze(this,t,null,Ye,Be,{})}}export{at as default};
