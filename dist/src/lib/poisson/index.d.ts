import { dpois } from './dpois';
import { ppois } from './ppois';
import { qpois } from './qpois';
import { IRNGNormal } from '../rng/normal';
export declare function Poisson(rng?: IRNGNormal): {
    dpois: typeof dpois;
    ppois: typeof ppois;
    qpois: typeof qpois;
    rpois: (n: number, lambda: number) => number[];
};
