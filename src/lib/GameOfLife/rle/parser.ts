// Parse pattern files encoded with RLE algorithm as described in the wiki
// https://conwaylife.com/wiki/Run_Length_Encoded

type Properties = {
    x: number;
    y: number;
    [k: string]: number | string;
};

export const parseConfigurationString = (fileAsString: string) => {
    const lines = fileAsString
        .replaceAll('\r\n', '\n')
        .split('\n')
        .filter((l) => l !== '')
        .filter((l) => !l.match(/^#/));
    const propertiesLine = lines.shift();
    const patternList = lines.join('').split('');

    if (!propertiesLine || !lines) {
        throw new Error('Invalid pattern file');
    }

    const properties = propertiesLine
        .replaceAll(' ', '')
        .split(',')
        .reduce(
            (properties: Properties, chunk) => {
                const [name, value] = chunk.split('=');
                if (value.match(/^\d+$/)) {
                    properties[name] = Number(value);
                } else {
                    properties[name] = value;
                }
                return properties;
            },
            { x: 0, y: 0 }
        );

    if (!properties.x || !properties.y) {
        throw new Error('Invalid pattern file: no dimensions');
    }

    const pattern: number[][] = [[]];

    let i = 0;
    while (patternList.length) {
        const char = patternList.shift();
        if (!char) {
            throw new Error('Couldnt parse pattern file');
        }

        if (char.match(/^\d$/)) {
            let count = char;
            while (patternList[0].match(/^\d$/) && patternList.length) {
                count += patternList.shift();
            }
            const value = patternList.shift();

            for (let j = 0; j < Number(count); j++) {
                pattern[pattern.length - 1].push(value === 'b' ? 0 : 1);
                i++;
            }
        } else if (char === '$') {
            while (pattern[pattern.length - 1].length < properties.x) {
                pattern[pattern.length - 1].push(0);
            }
            pattern.push([]);
            continue;
        } else if (char === '!') {
            if (patternList.length) {
                throw new Error('Invalid ending char position in pattern file');
            }

            // Fill the end of the last line if necessary
            while (pattern[pattern.length - 1].length < properties.x) {
                pattern[pattern.length - 1].push(0);
            }
            // Push enough empty lines if necessary
            for (let j = i; j < pattern.length; j++) {
                pattern.push(new Array(properties.x).fill(0));
            }
        } else if (['b', 'o'].includes(char)) {
            pattern[pattern.length - 1].push(char === 'b' ? 0 : 1);
            i++;
        } else {
            throw new Error('Invalid character in pattern file');
        }
    }

    return {
        width: properties.x,
        height: properties.y,
        pattern
    };
};
