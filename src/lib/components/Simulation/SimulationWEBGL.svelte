<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { getNewCells, updateCells } from './cells';
    import type { AttractionTable, Cell, Color } from './types';
    import {
        getCustomAttractionTable1,
        getCustomAttractionTable2,
        getCustomAttractionTableFishes,
        getCustomAttractionTableSnake,
        getRandomAttractionTable
    } from './attraction';
    import type { CellsMap } from './location';
    import AttractionTableComponent from './attraction/AttractionTableComponent.svelte';
    import type { Shader } from 'p5';

    let _p5: p5;

    let cells: Cell[];
    let cellsMap: CellsMap;
    let attractionTable: AttractionTable;

    const simulationControls = {
        pause: false
    };

    const maxAttractionRadius = 32;
    const worldSize = { x: 100 * maxAttractionRadius, y: 60 * maxAttractionRadius }; // Also works well with 1000-2000 particules

    const resetCells = () => {
        const newValues = getNewCells(worldSize, 1000, maxAttractionRadius);
        cells = newValues.cells;
        cellsMap = newValues.cellsMap;
    };

    const simulationLoop = () => {
        if (simulationControls.pause === false) {
            updateCells(attractionTable, maxAttractionRadius, cells, cellsMap);
        }
        setTimeout(simulationLoop, 1);
    };

    resetCells();
    attractionTable = getRandomAttractionTable();
    attractionTable = getCustomAttractionTable1();
    attractionTable = getCustomAttractionTable2();
    attractionTable = getCustomAttractionTableSnake();
    attractionTable = getCustomAttractionTableFishes();
    simulationLoop();

    const vertSrc = `attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  gl_Position = positionVec4;
}
`;

    const nbShaderUniforms = 100;
    const fragSrc =
        `precision mediump float;
varying vec2 vTexCoord;

uniform float aspectRatio;\n` +
        new Array(nbShaderUniforms)
            .fill(0)
            .map((_, i) => `uniform vec3 particle${i};`)
            .join('\n') +
        `\nfloat circle(in vec2 _st, in float _radius){
  vec2 dist = _st-vec2(1.0);
  return 1.-smoothstep(0.0, _radius,
                         dot(dist,dist)*4.0);
}

void main() {
  vec2 coord = vTexCoord;
  vec3 particles[${nbShaderUniforms}];\n` +
        new Array(nbShaderUniforms)
            .fill(0)
            .map((_, i) => `particles[${i}] = particle${i};`)
            .join('\n') +
        `\nvec3 color = vec3(0.0);
  
  for (int i = 0; i < ${nbShaderUniforms}; i++) {
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
`;

    // Use shader
    let cellsShader: Shader;
    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            p5.createCanvas(1000, 700, p5.WEBGL);
            cellsShader = p5.createShader(vertSrc, fragSrc);
        };
        p5.draw = () => {
            p5.shader(cellsShader);
            arrayUniform(cellsShader, 'particle', cells);
            p5.rect(0, 0, p5.width, p5.height);
        };
    };

    const arrayUniform = (shader: Shader, uniformName: string, cells: Cell[]) => {
        for (let i = 0; i < nbShaderUniforms; i++) {
            shader.setUniform(uniformName + i, [
                cells[i].pos.x / 3200,
                cells[i].pos.y / 1920,
                ['white', 'green', 'red', 'blue'].indexOf(cells[i].color)
            ]);
        }
    };

    const updateAttractionTable = (newAttractionTable: AttractionTable) => {
        attractionTable = newAttractionTable;
    };

    const rainbow = () => {
        // const colors: Color[] = ['white', 'red', 'green', 'blue'].sort(
        //     () => Math.random() - 0.5
        // ) as Color[];
        const colors: Color[] = ['white', 'red', 'green', 'blue'];
        const sectionWidth = worldSize.x / 4;
        for (const cell of cells) {
            const colorIndex = Math.floor(cell.pos.x / sectionWidth);
            const color = colors[colorIndex];
            cell.color = color;
        }
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>

<div>
    <div>
        <button on:click={() => (simulationControls.pause = !simulationControls.pause)}>
            {simulationControls.pause ? 'Run' : 'Pause'}
        </button>
        <button on:click={resetCells}>Reset cells</button>
        <button on:click={rainbow}>Rainbow</button>
    </div>

    <AttractionTableComponent {attractionTable} onUpdateTable={updateAttractionTable} />
</div>
