const n=(o,t,s)=>{o.noStroke();for(const c of t){o.fill(c.color);const l=o.map(c.pos.x,0,s.x,0,o.width),e=o.map(c.pos.y,0,s.y,0,o.height);o.circle(l,e,4)}};export{n as d};
