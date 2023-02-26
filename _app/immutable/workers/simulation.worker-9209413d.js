(function(){"use strict";class q{squares;squareByCellId;worldSize;maxAttractionRadius;constructor(t){const{worldSize:e,maxAttractionRadius:s}=t;if(e.x%s!==0||e.y%s!==0)throw new Error("Screen size is not a multiple of maxAttractionRadius");this.worldSize={...e},this.maxAttractionRadius=s,this.squareByCellId=new Map,this.squares=[];const n=s,o=e.x/n,a=e.y/n;for(let r=0;r<a;r++){this.squares.push([]);for(let u=0;u<o;u++)this.squares[r].push(new Set)}}checkCoord(t){if(t.x<0||t.x>this.worldSize.x||t.y<0||t.y>this.worldSize.y)throw new Error(`The cell at position ${t.x},${t.y} is outside of the screen ${this.worldSize.x},${this.worldSize.y} `)}getSquareCoords(t){return this.checkCoord(t),{x:Math.floor(t.x*this.squares[0].length/this.worldSize.x),y:Math.floor(t.y*this.squares.length/this.worldSize.y)}}insert(t){if(this.squareByCellId.get(t.id))throw new Error("Cell already in map");const e=this.getSquareCoords(t.pos);this.squares[e.y][e.x].add(t.id),this.squareByCellId.set(t.id,e)}updateCell(t){this.checkCoord(t.pos);const e=this.squareByCellId.get(t.id);if(!e)throw new Error("Cell not in map");this.squares[e.y][e.x].delete(t.id);const s=this.getSquareCoords(t.pos);this.squares[s.y][s.x].add(t.id),this.squareByCellId.set(t.id,s)}}const w=(i,t)=>{const e=i.squareByCellId.get(t.id);if(!e)throw new Error("Cell not in map");const{x:s,y:n}=e,o=s===0?i.squares[0].length-1:s-1,a=s===i.squares[0].length-1?0:s+1,r=n===0?i.squares.length-1:n-1,u=n===i.squares.length-1?0:n+1,h=[{x:o,y:r},{x:s,y:r},{x:a,y:r},{x:o,y:n},{x:s,y:n},{x:a,y:n},{x:o,y:u},{x:s,y:u},{x:a,y:u}],y=[];for(const{x:d,y:x}of h)y.push(...i.squares[x][d]);return y},C=(i,t,e,s,n)=>{const o=_(i,s.pos,n.pos),a=e*e;if(o>a)return 0;const u=(2*3)**2;if(o<u)return-1;const h=t[s.color][n.color]??0;return h===0?0:S(o,a/2,a,0,h)},S=function(i,t,e,s,n){const o=t+(e-t)/2;return i<o?l(i,t,o,s,n):l(i,o,e,n,s)},l=function(i,t,e,s,n){const o=(i-t)/(e-t)*(n-s)+s;return s<n?p(o,s,n):p(o,n,s)},p=function(i,t,e){return Math.max(Math.min(i,e),t)},_=(i,t,e)=>{let s=Math.abs(e.x-t.x);s>i.x/2&&(s=i.x-s);let n=Math.abs(e.y-t.y);return n>i.y/2&&(n=i.y-n),s*s+n*n},b=(i,t)=>{const e=Math.abs(t.x-i.x),s=Math.abs(t.y-i.y);return e*e+s*s},m=(i,t,e,s)=>{for(let n=0;n<e.length;n++){const o=e[n];o.vel={x:0,y:0};const a=w(s,o);for(const u of a){if(n===u)continue;const h=e[u];let y=C(s.worldSize,i,t,o,h);b(o.pos,h.pos)>s.worldSize.y*s.worldSize.y/2&&(y*=-1);const d={x:h.pos.x-o.pos.x,y:h.pos.y-o.pos.y},x=Math.sqrt(d.x*d.x+d.y*d.y);if(x===0)continue;const f={x:d.x*(1/x),y:d.y*(1/x)},g={x:f.x*y,y:f.y*y};o.vel.x+=g.x,o.vel.y+=g.y}const r=Math.sqrt(o.vel.x*o.vel.x+o.vel.y*o.vel.y);r!==0&&(o.vel.x*=1/r,o.vel.y*=1/r,v(s.worldSize,o),s.updateCell(o))}},v=(i,t)=>{t.pos.x+=t.vel.x,t.pos.y+=t.vel.y,t.pos.x<=0?t.pos.x=i.x+t.pos.x:t.pos.x>=i.x&&(t.pos.x=t.pos.x-i.x),t.pos.y<=0?t.pos.y=i.y+t.pos.y:t.pos.y>=i.y&&(t.pos.y=t.pos.y-i.y)};class M{_stepTimeout;_stepCb;_running;_cellsMap;attractionTable;worldSize;cells;constructor(t,e,s,n){this._stepTimeout=void 0,this._stepCb=console.log,this._running=!1,this.cells=t,this.attractionTable=e,this.worldSize=s,this._cellsMap=new q({worldSize:this.worldSize,maxAttractionRadius:n});for(const o of this.cells)this._cellsMap.insert(o)}async run(t){this._stepCb=t;const e=()=>{this._running&&(this.step(),this._stepCb(void 0,this.cells)),this._stepTimeout=setTimeout(e)};this._running=!0,e()}destroy(){clearTimeout(this._stepTimeout)}pause(){this._running&&(this._running=!1)}unpause(){this._running||(this._running=!0)}updateAttractionTable(t){this.attractionTable=t}step(){m(this.attractionTable,this._cellsMap.maxAttractionRadius,this.cells,this._cellsMap)}}let c;onmessage=i=>{const{msg:t}=i.data;if(t==="start"){const{cells:e,attractionTable:s,worldSize:n,maxAttractionRadius:o}=i.data;c&&c.destroy(),c=new M(e,s,n,o),c.run(T)}t==="pause"&&c.pause(),t==="unpause"&&c.unpause(),t==="updateTable"&&c.updateAttractionTable(i.data.attractionTable),t==="destroy"&&c&&c.destroy()};const T=(i,t)=>{if(i)throw i;if(!t)throw new Error("No cells in engine step cb");const e=t.map(s=>s.pos);postMessage({positions:e})}})();
