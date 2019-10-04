import { dunif } from './dunif';
import { punif } from './punif';
import { qunif } from './qunif';
import { IRNG } from '../rng';
export declare function Uniform(rng?: IRNG): {
    dunif: typeof dunif;
    punif: typeof punif;
    qunif: typeof qunif;
    runif: (n?: number, min?: number, max?: number) => number[];
};
