import { getConfiguration, type ConfigurationName } from '../rle/configurations';
import * as webglUtils from './webglUtils';

export function getInitialData(
    gl: WebGLRenderingContext,
    params: {
        configuration: 'random' | 'empty' | ConfigurationName;
        initialDensity: number;
        worldDimensions: { width: number; height: number };
    }
) {
    const { worldDimensions, initialDensity, configuration } = params;
    let density = initialDensity;
    if (density > 1) {
        density = 1;
    }
    const nbParticles = worldDimensions.width * worldDimensions.height;
    let cells = new Array(nbParticles).fill(0);

    if (configuration === 'random') {
        cells = cells.map((_) => (Math.random() < density ? 1.0 : 0.0));
    } else if (configuration !== 'empty') {
        cells = insertConfigurationInCells({
            cells,
            insertPosition: {
                x: Math.floor(worldDimensions.width / 2),
                y: Math.floor(worldDimensions.height / 2)
            },
            worldDimensions,
            configurationName: configuration
        });
    }

    const cellsTex = webglUtils.createTexture(
        gl,
        new Float32Array(cells.map((v, id) => [v, id, 0, 0]).flat()),
        worldDimensions.width,
        worldDimensions.height
    );

    return { cellsTex };
}

const insertConfigurationInCells = (params: {
    cells: number[];
    insertPosition: { x: number; y: number };
    worldDimensions: { width: number; height: number };
    configurationName: ConfigurationName;
}) => {
    const { cells, insertPosition, worldDimensions, configurationName } = params;
    const config = getConfiguration(configurationName);

    if (worldDimensions.width < config.width || worldDimensions.height < config.height) {
        throw new Error('World is too small for this configuration');
    }
    if (
        insertPosition.x + config.width > worldDimensions.width ||
        insertPosition.y + config.height > worldDimensions.height
    ) {
        throw new Error('Configuration can be imported at this point');
    }

    for (let y = 0; y < config.height; y++) {
        for (let x = 0; x < config.width; x++) {
            const index = (insertPosition.y + y) * worldDimensions.width + (insertPosition.x + x);
            cells[index] = config.pattern[y][x];
        }
    }
    return cells;
};
