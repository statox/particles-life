import type { Coordinates } from '../Simulation/types';

export type CoordinatesPair = { a: Coordinates; b: Coordinates };

export interface PostMessageDataRequest {
    a: Coordinates;
    b: Coordinates;
}

export interface PostMessageDataRequest2 {
    pairs: CoordinatesPair[];
}

export interface PostMessageDataResponse {
    result: number;
}

export type PostMessageRequest = 'distance';
export type PostMessageResponse = 'distance';

export interface PostMessage<
    T extends PostMessageDataRequest | PostMessageDataRequest2 | PostMessageDataResponse
> {
    msg: PostMessageRequest | PostMessageResponse;
    data: T;
}
