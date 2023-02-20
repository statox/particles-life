import { distance } from '../Simulation/cells';
import type { PostMessageDataRequest2 } from './types';
import type { PostMessage } from './types';

onmessage = ({ data: { data, msg } }: MessageEvent<PostMessage<PostMessageDataRequest2>>) => {
    const { pairs } = data;
    while (pairs.length) {
        const pair = pairs.pop();
        // console.log(pairs.length);
        distance({ x: 100, y: 100 }, pair.a, pair.b);
    }

    postMessage({
        msg: 'distance',
        data: { result: 1 }
    });
};

export {};
