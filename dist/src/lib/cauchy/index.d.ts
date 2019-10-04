import { dcauchy } from './dcauchy';
import { pcauchy } from './pcauchy';
import { qcauchy } from './qcauchy';
import { MersenneTwister } from '../rng/mersenne-twister';
export declare function Cauchy(rng?: MersenneTwister): {
    rcauchy: (n: number, location?: number, scale?: number) => number[];
    dcauchy: typeof dcauchy;
    pcauchy: typeof pcauchy;
    qcauchy: typeof qcauchy;
};
