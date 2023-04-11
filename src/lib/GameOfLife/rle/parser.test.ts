import { describe, expect, it } from 'vitest';
import { getConfiguration } from './configurations';
import {
    parseConfigurationString,
    lineToLineItems,
    lineItemsToTokens,
    tokensToMatrix
} from './parser';

import gliderString from './patterns/glider.rle';

describe('parsing pipeline', () => {
    it('simple pattern', () => {
        const input = 'ooo$3b$2ob!';
        const items = lineToLineItems(input);
        expect(items).toEqual(['o', 'o', 'o', '$', '3', 'b', '$', '2', 'o', 'b', '!']);
        const tokens = lineItemsToTokens(items);
        expect(tokens).toEqual([
            { count: 1, tag: 'o' },
            { count: 1, tag: 'o' },
            { count: 1, tag: 'o' },
            { count: 1, tag: '$' },
            { count: 3, tag: 'b' },
            { count: 1, tag: '$' },
            { count: 2, tag: 'o' },
            { count: 1, tag: 'b' }
        ]);
    });
    it('simple pattern start with number', () => {
        const input = '2bo$3b$2ob!';
        const items = lineToLineItems(input);
        expect(items).toEqual(['2', 'b', 'o', '$', '3', 'b', '$', '2', 'o', 'b', '!']);
        const tokens = lineItemsToTokens(items);
        expect(tokens).toEqual([
            { count: 2, tag: 'b' },
            { count: 1, tag: 'o' },
            { count: 1, tag: '$' },
            { count: 3, tag: 'b' },
            { count: 1, tag: '$' },
            { count: 2, tag: 'o' },
            { count: 1, tag: 'b' }
        ]);
    });
    it('double digit', () => {
        const input = 'ooo$33b$2ob!';
        const items = lineToLineItems(input);
        expect(items).toEqual(['o', 'o', 'o', '$', '33', 'b', '$', '2', 'o', 'b', '!']);
    });
    it('double digit start with number', () => {
        const input = '123o$33b$2ob!';
        const items = lineToLineItems(input);
        expect(items).toEqual(['123', 'o', '$', '33', 'b', '$', '2', 'o', 'b', '!']);
    });

    it('Ignore what is after !', () => {
        const input = 'ooo!$3b$2ob hello world';
        const items = lineToLineItems(input);
        const tokens = lineItemsToTokens(items);
        expect(tokens).toEqual([
            { count: 1, tag: 'o' },
            { count: 1, tag: 'o' },
            { count: 1, tag: 'o' }
        ]);
    });

    it('Fill implicit dead cells', () => {
        const properties = { x: 4, y: 4 };
        const input = 'o$b2o$2ob!';
        const items = lineToLineItems(input);
        const tokens = lineItemsToTokens(items);
        const matrix = tokensToMatrix({ properties, tokens });
        expect(matrix).toEqual([
            [1, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ]);
    });

    it('Fill implicit dead cells - 2', () => {
        const properties = { x: 4, y: 4 };
        const input = 'o$b2o$2ob$o!';
        const items = lineToLineItems(input);
        const tokens = lineItemsToTokens(items);
        const matrix = tokensToMatrix({ properties, tokens });
        expect(matrix).toEqual([
            [1, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0]
        ]);
    });
});

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
    it('should bypass to parseConfigurationString() properly', () => {
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

    it('should work with laputa', () => {
        const config = getConfiguration('laputa');
        expect(config).toEqual({
            width: 12,
            height: 7,
            pattern: [
                [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0]
            ]
        });
    });
});
