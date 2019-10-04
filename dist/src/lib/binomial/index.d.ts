import { IRNG } from '../rng/irng';
import { dbinom } from './dbinom';
import { pbinom } from './pbinom';
import { qbinom } from './qbinom';
export declare function Binomial(rng?: IRNG): {
    dbinom: typeof dbinom;
    pbinom: typeof pbinom;
    qbinom: typeof qbinom;
    rbinom: (N: number, nin: number, pp: number) => number[];
};
