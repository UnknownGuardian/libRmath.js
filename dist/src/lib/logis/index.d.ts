import { IRNG } from '../rng/irng';
import { dlogis } from './dlogis';
import { plogis } from './plogis';
import { qlogis } from './qlogis';
export declare function Logistic(rng?: IRNG): {
    dlogis: typeof dlogis;
    plogis: typeof plogis;
    qlogis: typeof qlogis;
    rlogis: (N: number, location?: number, scale?: number) => number[];
};
