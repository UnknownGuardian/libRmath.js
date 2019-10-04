import { dmultinom, IdmultinomOptions } from './dmultinom';
import { IRNG } from '../rng/irng';
export { IdmultinomOptions };
export declare function Multinomial(rng?: IRNG): {
    rmultinom: (n: number, size: number, prob: number | number[]) => number[];
    dmultinom: typeof dmultinom;
};
