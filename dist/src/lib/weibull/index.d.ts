import { dweibull } from './dweibull';
import { pweibull } from './pweibull';
import { qweibull } from './qweibull';
import { IRNG } from '../rng';
export declare function Weibull(rng?: IRNG): {
    dweibull: typeof dweibull;
    pweibull: typeof pweibull;
    qweibull: typeof qweibull;
    rweibull: (n: number, shape: number, scale?: number) => number[];
};
