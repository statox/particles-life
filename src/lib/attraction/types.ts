import type { Color } from '$lib/components/SimulationV3/engine';

export type AttractionTable = {
    [selfColor in Color]: {
        [othersColor in Color]: number;
    };
};

export type StoredTable = {
    name: string;
    description: string;
    table: AttractionTable;
};
