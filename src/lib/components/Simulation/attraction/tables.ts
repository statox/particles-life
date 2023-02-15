import type { AttractionTable, StoredTable } from '../types';

export const getRandomAttractionTable = (): AttractionTable => {
    return {
        white: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        },
        red: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        },
        green: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        },
        blue: {
            white: Math.floor(Math.random() * 4 - 1),
            red: Math.floor(Math.random() * 4 - 1),
            green: Math.floor(Math.random() * 4 - 1),
            blue: Math.floor(Math.random() * 4 - 1)
        }
    };
};
export const tables: StoredTable[] = [
    {
        name: 'Infinite motion',
        description:
            'Some very simple patterns of reds chasing whites in a seemlingly infinite randomness',
        table: {
            white: {
                white: -1,
                red: -1,
                green: 0,
                blue: -1
            },
            red: {
                white: 2,
                red: -1,
                green: 1,
                blue: -1
            },
            green: {
                white: 0,
                red: 0,
                green: -1,
                blue: -1
            },
            blue: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            }
        }
    },
    {
        name: 'No cohesion',
        description: 'Cells of the same color repulse each other',
        table: {
            white: {
                white: -1,
                red: 0,
                green: 0,
                blue: 0
            },
            red: {
                white: 0,
                red: -1,
                green: 0,
                blue: 0
            },
            green: {
                white: 0,
                red: 0,
                green: -1,
                blue: 0
            },
            blue: {
                white: 0,
                red: 0,
                green: 0,
                blue: -1
            }
        }
    },
    {
        name: 'Spray around',
        description:
            'All the cells repulse each others, resulting in an even repartition of the cells',
        table: {
            white: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            },
            red: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            },
            green: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            },
            blue: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            }
        }
    },
    {
        name: 'Simple snake',
        description:
            'The colors attract each other in a circular manner creating some moving snakes',
        table: {
            white: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            },
            red: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            },
            green: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            },
            blue: {
                white: -1,
                red: -1,
                green: -1,
                blue: -1
            }
        }
    },
    {
        name: 'Fishes',
        description:
            'The cells regroup in moving structures with white/red head and blue/green tail swimming through the world.',
        table: {
            white: {
                white: 0,
                red: 1,
                green: -1,
                blue: -2
            },
            red: {
                white: 2,
                red: 0,
                green: 1,
                blue: -1
            },
            green: {
                white: -2,
                red: -2,
                green: -2,
                blue: 1
            },
            blue: {
                white: 2,
                red: -1,
                green: 1,
                blue: -2
            }
        }
    },
    {
        name: 'Movers and stills',
        description:
            'Create some moving objects mainly drivent by green and red and some living but still objects made by white, blue and red. Sometimes the movers grab still objects.',
        table: {
            white: {
                white: 1,
                red: -1,
                green: 0,
                blue: 1
            },
            red: {
                white: 2,
                red: 1,
                green: 2,
                blue: -1
            },
            green: {
                white: -1,
                red: -1,
                green: 1,
                blue: -1
            },
            blue: {
                white: 1,
                red: 2,
                green: 0,
                blue: 0
            }
        }
    },
    {
        name: 'White pushers',
        description: 'Create movers propelled by groups of white cells',
        table: {
            white: {
                white: 1,
                red: 1,
                green: 2,
                blue: -1
            },
            red: {
                white: 0,
                red: -1,
                green: 2,
                blue: 2
            },
            green: {
                white: -1,
                red: 0,
                green: -1,
                blue: 2
            },
            blue: {
                white: -1,
                red: 1,
                green: 1,
                blue: -1
            }
        }
    }
];
