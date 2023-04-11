import { parseConfigurationString } from './parser';
import Glider from './patterns/glider.rle';
import Laputa from './patterns/laputa.rle';
import GliderLoop from './patterns/gliderloop.rle';
import Climber131c31 from './patterns/131c31climber.rle';

type ConfigurationName = 'glider' | 'laputa' | 'gliderLoop' | 'climber131c31';

const configurations: {
    [configName in ConfigurationName]: string;
} = {
    glider: Glider,
    laputa: Laputa,
    gliderLoop: GliderLoop,
    climber131c31: Climber131c31
};

export const getConfiguration = (name: ConfigurationName) => {
    if (!configurations[name]) {
        throw new Error(`Invalid configuration name ${name}`);
    }

    return parseConfigurationString(configurations[name]);
};
