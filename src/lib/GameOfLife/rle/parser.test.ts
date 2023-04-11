import { describe, expect, it } from 'vitest';
import { getConfiguration } from './configurations';
import { parseConfigurationString } from './parser';

import gliderString from './patterns/glider.rle';

describe('parsePatternFile', () => {
    it('sould read from file', () => {
        const pattern = parseConfigurationString(gliderString);
        expect(pattern).toEqual({
            width: 3,
            height: 3,
            pattern: [
                [0, 1, 0],
                [0, 0, 1],
                [1, 1, 1]
            ]
        });
    });

    it('should read a simple pattern', () => {
        const patternString = `
x = 3, y = 3
ooo$3b$2ob!
`;
        const pattern = parseConfigurationString(patternString);
        expect(pattern).toEqual({
            width: 3,
            height: 3,
            pattern: [
                [1, 1, 1],
                [0, 0, 0],
                [1, 1, 0]
            ]
        });
    });

    it('should read double digits', () => {
        const patternString = `
x = 13, y = 3
13o$13b$12ob!
`;
        const pattern = parseConfigurationString(patternString);
        expect(pattern).toEqual({
            width: 13,
            height: 3,
            pattern: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        });
    });

    it('should ignore comments', () => {
        const patternString = `
# This is a test pattern
#C with comments
#O author
#N and name
x = 3, y = 3
ooo$3b$2ob!
`;
        const pattern = parseConfigurationString(patternString);
        expect(pattern).toEqual({
            width: 3,
            height: 3,
            pattern: [
                [1, 1, 1],
                [0, 0, 0],
                [1, 1, 0]
            ]
        });
    });

    it('should fail on invalid dimensions', () => {
        const patternString = `
y = 3, y = 3
ooo$3b$2ob!
`;
        expect(() => parseConfigurationString(patternString)).toThrow();
    });
});

describe('getConfiguration', () => {
    it('sould should bypass to parseConfigurationString() properly', () => {
        const config = getConfiguration('glider');
        expect(config).toEqual({
            width: 3,
            height: 3,
            pattern: [
                [0, 1, 0],
                [0, 0, 1],
                [1, 1, 1]
            ]
        });
    });
});
