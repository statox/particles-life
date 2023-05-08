// Classes of parameters desccribed here
// https://www.mrob.com/pub/comp/xmorphia/pearson-classes.html

import type { ParametersClass } from './types';

export const PARAMETERS_CLASSES: ParametersClass[] = [
    {
        name: 'KarlSims',
        type: 'Unknown',
        f: 0.055,
        k: 0.062
    },
    {
        name: 'Test 1',
        type: 'Unknown',
        f: 0.0353,
        k: 0.0614
    },
    {
        name: 'Never full population',
        type: 'Unknown',
        f: 0.0201,
        k: 0.0602
    },
    // Type alpha: Spatial-temporal chaos composed mainly of wavelets and "fledgling spirals" that repeatedly grow and/or multiply and quickly annihilate upon hitting another object.
    {
        name: 'α 1',
        type: 'alpha',
        f: 0.01,
        k: 0.047
    },
    {
        name: 'α 2',
        type: 'alpha',
        f: 0.014,
        k: 0.053
    },
    // Type beta: Spatial-temporal chaos with localised red and blue state in different spots at different times. This looks like waves on a blue ocean with periodic red "voids" that open up suddenly and then quickly fill in with blue.
    {
        name: 'β 1',
        type: 'beta',
        f: 0.014,
        k: 0.039
    },
    {
        name: 'β 2',
        type: 'beta',
        f: 0.026,
        k: 0.051
    },
    // Type delta:  Includes true Turing patterns and many parameter values that produce similar patterns through a presumably related effect.
    // The true Turing pattern arises from a starting pattern that is all blue, with arbitrarily small noise or other irregularities.
    // In "Turing-similar" systems, a pattern cannot arise from an all-blue starting state, instead they need to be "seeded" by a large amplitude disturbance
    // (anything non-blue and at least as large as a typical negaton will usually suffice); and the pattern grows outward from the disturbance.
    // In either case, the resulting pattern is a hexagonal array of negative spots, possibly with some stripes in place of rows of spots, and with grain boundaries that are asymptotically stable.
    {
        name: 'δ 1',
        type: 'delta',
        f: 0.03,
        k: 0.055
    },
    {
        name: 'δ 2',
        type: 'delta',
        f: 0.042,
        k: 0.059
    },
    // Type epsilon: Spatial-temporal chaos composed mainly of spots (resembling solitons but unstable). Rings can grow until they contact something else; spots with less symmetry tend to live longer and split via mitosis. Spots continually crowd each other out; after regions are opened up by die-outs; other spots on the boundary of the newly opened region quickly fill it in again.
    {
        name: 'ε 1',
        type: 'epsilon',
        f: 0.018,
        k: 0.055
    },
    {
        name: 'ε 2',
        type: 'epsilon',
        f: 0.022,
        k: 0.059
    },
    // Type eta: Similar to type gamma (γ), but instead of all stripes there is a mixture of spots and worms. Any longer or more serpentine stripes will break up into short pieces. Ongoing activity includes low-level oscillation seen in the ∂u/∂t component, and spots occasionally splitting off and/or rejoining the worms; but the system always reaches a steady state if run for longer than the 200,000 tu in Pearson's experiments
    {
        name: 'η 1',
        type: 'eta',
        f: 0.034,
        k: 0.063
    },
    // Type gamma: Stripes, either wormlike or branching, with endless instability in the form of occasional changes due to overcrowding, grain boundary instabilities, or other localised events, and oscillation in the ∂u/∂t component.
    {
        name: 'γ 1',
        type: 'gamma',
        f: 0.022,
        k: 0.051
    },
    {
        name: 'γ 2',
        type: 'gamma',
        f: 0.026,
        k: 0.055
    },
    // Type iota: Negative spots (negatons) with molecule-like interaction; solitary negatons are not viable.
    {
        name: 'ι 1',
        type: 'iota',
        f: 0.046,
        k: 0.0594
    },
    // Stripes in isolation grow width-wise (usually by developing meanders to grow longer and more serpentine); some irregular blue shapes grow into corals. The final state is mostly all stripes, often with branching, and usually in multiple disjoint sets (hedgerow mazes).
    {
        name: 'κ 1',
        type: 'kappa',
        f: 0.082,
        k: 0.06
    },
    {
        name: 'κ 2',
        type: 'kappa',
        f: 0.058,
        k: 0.063
    },
    // Type lambda:  Solitons that grow by mitosis (cell-division). After the space is filled, solitons rearrange into hexagonal grids, sometimes with grain boundaries. Eventually, all movement stops and the pattern is in a steady state
    {
        name: 'λ 1',
        type: 'lambda',
        f: 0.026,
        k: 0.061
    },
    {
        name: 'λ 2',
        type: 'lambda',
        f: 0.034,
        k: 0.065
    },
    // Type mu:  Stripes that grow from each end (worms), possibly also co-existing with inert (non-mitotic) solitons. After the space is filled by the worms, they reorganise towards parallel stripes and remain disconnected from one another.
    {
        name: 'μ 1',
        type: 'mu',
        f: 0.046,
        k: 0.065
    },
    {
        name: 'μ 2',
        type: 'mu',
        f: 0.058,
        k: 0.065
    },
    // Type nu: Inert (non-mitotic) solitons. The number of solitons depends on the number and size of blue areas in the starting pattern. All large blue areas shrink and/or split up into solitons. The solitons then drift apart from each other to spread as uniformly as possible across the space
    {
        name: 'ν 2',
        type: 'nu',
        f: 0.046,
        k: 0.067
    },
    //Type pi: supports stripes, loops, and spots, all of them negative. These form stable localised structures, both stationary and moving, and localised force-like interactions whose nature (attractive or repelling) oscillates in sign with increasing distance and whose strength decreases exponentially with distance. The combination of this force interaction and motion means that you also get rotating patterns.
    // Most significantly, the type pi patterns display such a great diversity that it is impossible to characterise the final outcome of a system just by looking at its initial state, except for a limited class of starting states (e.g. when the starting pattern consists only of lone negatons separated by large distances).
    {
        name: 'π 1',
        type: 'pi',
        f: 0.062,
        k: 0.061
    },
    // Type rho: Systems that are blue except for a small number of negatons evolve into a set of closed red "soap bubbles" bordered by stripes exhibiting "surface tension". These usually combine in a manner resembling real-world soap bubbles, with smaller bubbles shinking and vanishing whilst neighboring larger bubbles grow (though in limited cases at certain parameter values a negaton can persist).
    {
        name: 'ρ 1',
        type: 'rho',
        f: 0.09,
        k: 0.059
    },
    {
        name: 'ρ 2',
        type: 'rho',
        f: 0.102,
        k: 0.055
    },
    // Type sigma:  Systems that are red except for a small number of spots evolve into a set of closed blue "soap bubbles" bordered by red negative stripes exhibiting "surface tension". These bubbles usually combine in a manner resembling real-world soap bubbles, with smaller bubbles shinking and vanishing whilst neighboring larger bubbles grow (though in limited cases at certain parameter values a soliton can persist).
    {
        name: 'σ 1',
        type: 'sigma',
        f: 0.09,
        k: 0.057
    },
    {
        name: 'θ 2',
        type: 'sigma',
        f: 0.11,
        k: 0.0523
    },
    // Type theta:  Blue spots grow into concentric rings; stripes in isolation grow width-wise into parallel or crosswise stripes. Final state is mostly all stripes (sometimes with a few solitons), usually with branching and can be fully connected (network of loops). At lower F values there can be long-lasting oscillation in the ∂u/∂t component, or the system might never stop changing.
    {
        name: 'θ 1',
        type: 'theta',
        f: 0.03,
        k: 0.057
    },
    {
        name: 'θ 2',
        type: 'theta',
        f: 0.038,
        k: 0.061
    },
    // Type xi: Large, sustained spirals similar to the Belousov-Zhabotinsky reaction in a Petri dish. The seed of the spiral is an essential and sometimes rare feature, which must exist in suitable quantities to produce a long-lived pattern. This means that if the domain is small, the spirals will die out
    {
        name: 'ξ 1',
        type: 'xi',
        f: 0.01,
        k: 0.041
    },
    {
        name: 'ξ 2',
        type: 'xi',
        f: 0.014,
        k: 0.047
    },
    // Type zeta: Large, sustained spirals similar to the Belousov-Zhabotinsky reaction in a Petri dish. The seed of the spiral is an essential and sometimes rare feature, which must exist in suitable quantities to produce a long-lived pattern. This means that if the domain is small, the spirals will die out
    {
        name: 'ζ 1',
        type: 'zeta',
        f: 0.022,
        k: 0.061
    },
    {
        name: 'ζ 2',
        type: 'zeta',
        f: 0.026,
        k: 0.059
    }
];
