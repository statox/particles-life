// Classes of parameters desccribed here
// https://www.mrob.com/pub/comp/xmorphia/pearson-classes.html

export const PARAMETERS_CLASSES = [
    {
        name: 'KarlSims',
        type: 'Unknown',
        f: 0.055,
        k: 0.062
    },
    // Type alpha: Spatial-temporal chaos composed mainly of wavelets and "fledgling spirals" that repeatedly grow and/or multiply and quickly annihilate upon hitting another object.
    {
        name: 'Alpha 1',
        type: 'alpha',
        f: 0.01,
        k: 0.047
    },
    {
        name: 'Alpha 2',
        type: 'alpha',
        f: 0.014,
        k: 0.053
    },
    // Type beta: Spatial-temporal chaos with localised red and blue state in different spots at different times. This looks like waves on a blue ocean with periodic red "voids" that open up suddenly and then quickly fill in with blue.
    {
        name: 'Beta 1',
        type: 'beta',
        f: 0.014,
        k: 0.039
    },
    {
        name: 'Beta 2',
        type: 'beta',
        f: 0.026,
        k: 0.051
    },
    // Type gamma: Stripes, either wormlike or branching, with endless instability in the form of occasional changes due to overcrowding, grain boundary instabilities, or other localised events, and oscillation in the ∂u/∂t component.
    {
        name: 'Gamma 1',
        type: 'gamma',
        f: 0.022,
        k: 0.051
    },
    {
        name: 'Gamma 2',
        type: 'gamma',
        f: 0.026,
        k: 0.055
    },
    // Type lambda:  Solitons that grow by mitosis (cell-division). After the space is filled, solitons rearrange into hexagonal grids, sometimes with grain boundaries. Eventually, all movement stops and the pattern is in a steady state
    {
        name: 'Lambda 1',
        type: 'lambda',
        f: 0.026,
        k: 0.061
    },
    {
        name: 'Lambda 2',
        type: 'lambda',
        f: 0.034,
        k: 0.065
    },
    // Type iota: Negative spots (negatons) with molecule-like interaction; solitary negatons are not viable.
    {
        name: 'Iota 1',
        type: 'iota',
        f: 0.046,
        k: 0.0594
    },
    // Type xi: Large, sustained spirals similar to the Belousov-Zhabotinsky reaction in a Petri dish. The seed of the spiral is an essential and sometimes rare feature, which must exist in suitable quantities to produce a long-lived pattern. This means that if the domain is small, the spirals will die out
    {
        name: 'Xi 1',
        type: 'xi',
        f: 0.01,
        k: 0.041
    },
    {
        name: 'Xi 2',
        type: 'xi',
        f: 0.014,
        k: 0.047
    },
    //Type pi: supports stripes, loops, and spots, all of them negative. These form stable localised structures, both stationary and moving, and localised force-like interactions whose nature (attractive or repelling) oscillates in sign with increasing distance and whose strength decreases exponentially with distance. The combination of this force interaction and motion means that you also get rotating patterns.
    // Most significantly, the type pi patterns display such a great diversity that it is impossible to characterise the final outcome of a system just by looking at its initial state, except for a limited class of starting states (e.g. when the starting pattern consists only of lone negatons separated by large distances).
    {
        name: 'Pi 1',
        type: 'pi',
        f: 0.062,
        k: 0.061
    },
    // Type rho: Systems that are blue except for a small number of negatons evolve into a set of closed red "soap bubbles" bordered by stripes exhibiting "surface tension". These usually combine in a manner resembling real-world soap bubbles, with smaller bubbles shinking and vanishing whilst neighboring larger bubbles grow (though in limited cases at certain parameter values a negaton can persist).
    {
        name: 'Rho 1',
        type: 'rho',
        f: 0.09,
        k: 0.059
    },
    {
        name: 'Rho 2',
        type: 'rho',
        f: 0.102,
        k: 0.055
    },
    // Type sigma:  Systems that are red except for a small number of spots evolve into a set of closed blue "soap bubbles" bordered by red negative stripes exhibiting "surface tension". These bubbles usually combine in a manner resembling real-world soap bubbles, with smaller bubbles shinking and vanishing whilst neighboring larger bubbles grow (though in limited cases at certain parameter values a soliton can persist).
    {
        name: 'Sigma 1',
        type: 'sigma',
        f: 0.09,
        k: 0.057
    },
    {
        name: 'Sigma 2',
        type: 'sigma',
        f: 0.11,
        k: 0.0523
    }
];
