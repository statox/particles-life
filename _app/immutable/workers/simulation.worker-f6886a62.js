(function(){"use strict";const T=(i,t,s,e,o,n)=>{if(e>t)return 0;if(e<s)return-1;const a=i[o][n]??0;return a===0?0:z(e,t/2,t,0,a)},z=function(i,t,s,e,o){const n=t+(s-t)/2;return i<n?w(i,t,n,e,o):w(i,n,s,o,e)},w=function(i,t,s,e,o){const n=(i-t)/(s-t)*(o-e)+e;return e<o?q(n,e,o):q(n,o,e)},q=function(i,t,s){return Math.max(Math.min(i,s),t)},A=()=>({white:{white:0,red:0,green:0,blue:0},red:{white:0,red:0,green:0,blue:0},green:{white:0,red:0,green:0,blue:0},blue:{white:0,red:0,green:0,blue:0}});class I{squares;squareByCellId;worldSize;maxAttractionRadius;constructor(t){const{worldSize:s,maxAttractionRadius:e}=t;if(s.x%e!==0||s.y%e!==0)throw new Error("Screen size is not a multiple of maxAttractionRadius");this.worldSize={...s},this.maxAttractionRadius=e,this.squareByCellId=new Map,this.squares=[];const o=e,n=s.x/o,a=s.y/o;for(let h=0;h<a;h++){this.squares.push([]);for(let c=0;c<n;c++)this.squares[h].push(new Set)}}checkCoord(t){if(t.x<0||t.x>this.worldSize.x||t.y<0||t.y>this.worldSize.y)throw new Error(`The cell at position ${t.x},${t.y} is outside of the screen ${this.worldSize.x},${this.worldSize.y} `)}getSquareCoords(t){return this.checkCoord(t),{x:Math.floor(t.x*this.squares[0].length/this.worldSize.x),y:Math.floor(t.y*this.squares.length/this.worldSize.y)}}insert(t){if(this.squareByCellId.get(t.id))throw new Error("Cell already in map");const s=this.getSquareCoords(t.pos);this.squares[s.y][s.x].add(t.id),this.squareByCellId.set(t.id,s)}updateCell(t){this.checkCoord(t.pos);const s=this.squareByCellId.get(t.id);if(!s)throw new Error("Cell not in map");this.squares[s.y][s.x].delete(t.id);const e=this.getSquareCoords(t.pos);this.squares[e.y][e.x].add(t.id),this.squareByCellId.set(t.id,e)}}const B=(i,t)=>{const s=i.squareByCellId.get(t.id);if(!s)throw new Error("Cell not in map");const{x:e,y:o}=s,n=e===0?i.squares[0].length-1:e-1,a=e===i.squares[0].length-1?0:e+1,h=o===0?i.squares.length-1:o-1,c=o===i.squares.length-1?0:o+1,d=[{x:n,y:h},{x:e,y:h},{x:a,y:h},{x:n,y:o},{x:e,y:o},{x:a,y:o},{x:n,y:c},{x:e,y:c},{x:a,y:c}],r=[];for(const{x,y}of d)r.push(...i.squares[y][x]);return r},E=(i,t,s)=>{let e=Math.abs(s.x-t.x);e>i.x/2&&(e=i.x-e);let o=Math.abs(s.y-t.y);return o>i.y/2&&(o=i.y-o),e*e+o*o},R=(i,t)=>{const s=Math.abs(t.x-i.x),e=Math.abs(t.y-i.y);return s*s+e*e},C=(i,t,s,e)=>{const o=e.worldSize.x<e.worldSize.y?e.worldSize.x:e.worldSize.y,n=o*o/2,a=t*t,c=(2*3)**2;for(let d=0;d<s.length;d++){const r=s[d];r.vel={x:0,y:0};const x=B(e,r);for(const S of x){if(d===S)continue;const p=s[S],b=R(r.pos,p.pos);let _=b,m=!1;b>n&&(_=E(e.worldSize,r.pos,p.pos),m=!0);let f=T(i,a,c,_,r.color,p.color);m&&(f*=-1);const l={x:p.pos.x-r.pos.x,y:p.pos.y-r.pos.y},g=Math.sqrt(l.x*l.x+l.y*l.y);if(g===0)continue;const v={x:l.x*(1/g),y:l.y*(1/g)},M={x:v.x*f,y:v.y*f};r.vel.x+=M.x,r.vel.y+=M.y}const y=Math.sqrt(r.vel.x*r.vel.x+r.vel.y*r.vel.y);y!==0&&(r.vel.x*=1/y,r.vel.y*=1/y,D(e.worldSize,r),e.updateCell(r))}},D=(i,t)=>{t.pos.x+=t.vel.x,t.pos.y+=t.vel.y,t.pos.x<=0?t.pos.x=i.x+t.pos.x:t.pos.x>=i.x&&(t.pos.x=t.pos.x-i.x),t.pos.y<=0?t.pos.y=i.y+t.pos.y:t.pos.y>=i.y&&(t.pos.y=t.pos.y-i.y)};class N{_stepTimeout;_stepCb;_running;_cellsMap;attractionTable;worldSize;cells;constructor(t,s,e,o,n){this._stepTimeout=void 0,this._stepCb=console.log,this._running=!1,this.cells=t,this.attractionTable=s,this.worldSize=e,this._cellsMap=new I({worldSize:this.worldSize,maxAttractionRadius:o});for(const a of this.cells)this._cellsMap.insert(a);if(n.pullAppartAtStart)for(let a=0;a<100;a++)C(A(),this._cellsMap.maxAttractionRadius,this.cells,this._cellsMap)}async run(t){this._stepCb=t;const s=()=>{this._running&&(this.step(),this._stepCb(void 0,this.cells)),this._stepTimeout=setTimeout(s)};this._running=!0,s()}destroy(){clearTimeout(this._stepTimeout)}pause(){this._running&&(this._running=!1)}unpause(){this._running||(this._running=!0)}updateAttractionTable(t){this.attractionTable=t}step(){C(this.attractionTable,this._cellsMap.maxAttractionRadius,this.cells,this._cellsMap)}}let u;onmessage=i=>{const{msg:t}=i.data;if(t==="start"){const{cells:s,attractionTable:e,worldSize:o,maxAttractionRadius:n}=i.data;u&&u.destroy(),u=new N(s,e,o,n,{pullAppartAtStart:!0}),u.run($)}t==="pause"&&u.pause(),t==="unpause"&&u.unpause(),t==="updateTable"&&u.updateAttractionTable(i.data.attractionTable),t==="destroy"&&u&&u.destroy()};const $=(i,t)=>{if(i)throw i;if(!t)throw new Error("No cells in engine step cb");const s=t.map(e=>e.pos);postMessage({positions:s})}})();
