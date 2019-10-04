import { beta } from './beta';
import { lbeta } from './lbeta';
import { IRNGNormal } from '../rng/normal';
declare const _default: {
    beta: typeof beta;
    lbeta: typeof lbeta;
};
export default _default;
export declare function Beta(rng?: IRNGNormal): Readonly<{
    dbeta: (x: number, shape1: number, shape2: number, ncp?: number | undefined, log?: boolean | undefined) => number;
    pbeta: (q: number, shape1: number, shape2: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    qbeta: (p: number, shape1: number, shape2: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    rbeta: (n: number | number[], shape1: number, shape2: number, ncp?: number) => number[];
}>;
