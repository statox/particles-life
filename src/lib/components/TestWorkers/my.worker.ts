import { distance } from '../Simulation/cells';
import type { PostMessageDataRequest } from './types';
import type { PostMessage } from './types';

onmessage = ({ data: { data, msg } }: MessageEvent<PostMessage<PostMessageDataRequest>>) => {
    // console.log(msg, data);
    const { a, b } = data;

    const d = distance({ x: 100, y: 100 }, a, b);

    postMessage({
        msg: 'distance',
        data: { result: d }
    });
};

export {};
