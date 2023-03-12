(function(){"use strict";const T=(i,t,e,s,o,n)=>{if(s>t)return 0;if(s<e)return-1;const a=i[o][n]??0;return a===0?0:z(s,t/2,t,0,a)},z=function(i,t,e,s,o){const n=t+(e-t)/2;return i<n?w(i,t,n,s,o):w(i,n,e,o,s)},w=function(i,t,e,s,o){const n=(i-t)/(e-t)*(o-s)+s;return s<o?q(n,s,o):q(n,o,s)},q=function(i,t,e){return Math.max(Math.min(i,e),t)},A=()=>({white:{white:0,red:0,green:0,blue:0},red:{white:0,red:0,green:0,blue:0},green:{white:0,red:0,green:0,blue:0},blue:{white:0,red:0,green:0,blue:0}});class v{squares;squareByCellId;worldSize;maxAttractionRadius;constructor(t){const{worldSize:e,maxAttractionRadius:s}=t;if(e.x%s!==0||e.y%s!==0)throw new Error("Screen size is not a multiple of maxAttractionRadius");this.worldSize={...e},this.maxAttractionRadius=s,this.squareByCellId=new Map,this.squares=[];const o=s,n=e.x/o,a=e.y/o;for(let c=0;c<a;c++){this.squares.push([]);for(let r=0;r<n;r++)this.squares[c].push(new Set)}}checkCoord(t){if(t.x<0||t.x>this.worldSize.x||t.y<0||t.y>this.worldSize.y)throw new Error(`The cell at position ${t.x},${t.y} is outside of the screen ${this.worldSize.x},${this.worldSize.y} `)}getSquareCoords(t){return this.checkCoord(t),{x:Math.floor(t.x*this.squares[0].length/this.worldSize.x),y:Math.floor(t.y*this.squares.length/this.worldSize.y)}}insert(t){if(this.squareByCellId.get(t.id))throw new Error("Cell already in map");const e=this.getSquareCoords(t.pos);this.squares[e.y][e.x].add(t.id),this.squareByCellId.set(t.id,e)}updateCell(t){this.checkCoord(t.pos);const e=this.squareByCellId.get(t.id);if(!e)throw new Error("Cell not in map");this.squares[e.y][e.x].delete(t.id);const s=this.getSquareCoords(t.pos);this.squares[s.y][s.x].add(t.id),this.squareByCellId.set(t.id,s)}}const I=(i,t)=>{const e=i.squareByCellId.get(t.id);if(!e)throw new Error("Cell not in map");const{x:s,y:o}=e,n=s===0?i.squares[0].length-1:s-1,a=s===i.squares[0].length-1?0:s+1,c=o===0?i.squares.length-1:o-1,r=o===i.squares.length-1?0:o+1,l=[{x:n,y:c},{x:s,y:c},{x:a,y:c},{x:n,y:o},{x:s,y:o},{x:a,y:o},{x:n,y:r},{x:s,y:r},{x:a,y:r}],u=[];for(const{x:d,y:p}of l)u.push(...i.squares[p][d]);return u},R=(i,t,e)=>{let s=Math.abs(e.x-t.x);s>i.x/2&&(s=i.x-s);let o=Math.abs(e.y-t.y);return o>i.y/2&&(o=i.y-o),s*s+o*o},B=(i,t)=>{const e=Math.abs(t.x-i.x),s=Math.abs(t.y-i.y);return e*e+s*s},D=i=>{const{cell:t,attractionTable:e,maxAttractionRadiusSqrd:s,halfWorldDistance:o,minDistanceSqrd:n,cells:a,cellsMap:c}=i,r={x:0,y:0},l=I(c,t);for(const p of l){const y=a[p];if(t.id===y.id)continue;const b=B(t.pos,y.pos);let C=b,m=!1;b>o&&(C=R(c.worldSize,t.pos,y.pos),m=!0);let f=T(e,s,n,C,t.color,y.color);m&&(f*=-1);const x={x:y.pos.x-t.pos.x,y:y.pos.y-t.pos.y},g=Math.sqrt(x.x*x.x+x.y*x.y);if(g===0)continue;const _={x:x.x*(1/g),y:x.y*(1/g)},M={x:_.x*f,y:_.y*f};r.x+=M.x,r.y+=M.y}const u=Math.sqrt(r.x*r.x+r.y*r.y);if(u===0)return r;const d=1;return u>d&&(r.x*=d/u,r.y*=d/u),r},S=(i,t,e,s)=>{const o=s.worldSize.x<s.worldSize.y?s.worldSize.x:s.worldSize.y,n=o*o/2,a=t*t,r=(2*3)**2;for(let l=0;l<e.length;l++){const u=e[l];u.vel.x=0,u.vel.y=0;const d=D({cell:u,attractionTable:i,maxAttractionRadiusSqrd:a,minDistanceSqrd:r,halfWorldDistance:n,cells:e,cellsMap:s});u.vel.x=d.x,u.vel.y=d.y,E(s.worldSize,u),s.updateCell(u)}},E=(i,t)=>{t.pos.x+=t.vel.x,t.pos.y+=t.vel.y,t.pos.x<=0?t.pos.x=i.x+t.pos.x:t.pos.x>=i.x&&(t.pos.x=t.pos.x-i.x),t.pos.y<=0?t.pos.y=i.y+t.pos.y:t.pos.y>=i.y&&(t.pos.y=t.pos.y-i.y)};class N{_stepTimeout;_stepCb;_running;_cellsMap;attractionTable;worldSize;cells;constructor(t,e,s,o,n){this._stepTimeout=void 0,this._stepCb=console.log,this._running=!1,this.cells=t,this.attractionTable=e,this.worldSize=s,this._cellsMap=new v({worldSize:this.worldSize,maxAttractionRadius:o});for(const a of this.cells)this._cellsMap.insert(a);if(n.pullAppartAtStart)for(let a=0;a<100;a++)S(A(),this._cellsMap.maxAttractionRadius,this.cells,this._cellsMap)}async run(t){this._stepCb=t;const e=()=>{this._running&&(this.step(),this._stepCb(void 0,this.cells)),this._stepTimeout=setTimeout(e)};this._running=!0,e()}destroy(){clearTimeout(this._stepTimeout)}pause(){this._running&&(this._running=!1)}unpause(){this._running||(this._running=!0)}updateAttractionTable(t){this.attractionTable=t}step(){S(this.attractionTable,this._cellsMap.maxAttractionRadius,this.cells,this._cellsMap)}}let h;onmessage=i=>{const{msg:t}=i.data;if(t==="start"){const{cells:e,attractionTable:s,worldSize:o,maxAttractionRadius:n}=i.data;h&&h.destroy(),h=new N(e,s,o,n,{pullAppartAtStart:!0}),h.run(W)}t==="pause"&&h.pause(),t==="unpause"&&h.unpause(),t==="updateTable"&&h.updateAttractionTable(i.data.attractionTable),t==="destroy"&&h&&h.destroy()};const W=(i,t)=>{if(i)throw i;if(!t)throw new Error("No cells in engine step cb");const e=t.map(s=>s.pos);postMessage({positions:e})}})();