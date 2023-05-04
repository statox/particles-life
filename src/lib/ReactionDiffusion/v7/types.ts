import type { InitialConditionsMode } from './initialConditions';
import type { ColorMode } from './webgl/colors/colors';

export type Controls = {
    colors: ColorMode;
    initialConditions: InitialConditionsMode;
    reset: () => void;
    pause: boolean;
};

export type MouseState = {
    pressedLeft: boolean;
    pressedRight: boolean;
    x: number; // [0,1]
    y: number; // [0,1]
    penSize: number;
    penDensity: number;
    zoomLevel: number;
    panX: number;
    panY: number;
};

export type SimulationInfo = {
    iteration: number;
    worldSize: number;
};

export type SimulationParameters = {
    f: number;
    k: number;
};

export type ParametersClass = SimulationParameters & {
    name: string;
    type: string;
};
