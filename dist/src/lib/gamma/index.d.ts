import { IRNGNormal } from '../rng/normal';
import { gammafn } from './gamma_fn';
import { lgammafn_sign as lgammafn } from './lgammafn_sign';
import { digamma, pentagamma, psigamma, tetragamma, trigamma } from './polygamma';
declare const _default: {
    digamma: typeof digamma;
    gamma: typeof gammafn;
    lgamma: typeof lgammafn;
    pentagamma: typeof pentagamma;
    psigamma: typeof psigamma;
    tetragamma: typeof tetragamma;
    trigamma: typeof trigamma;
};
export default _default;
export declare function Gamma(norm?: IRNGNormal): Readonly<{
    dgamma: (x: number, shape: number, rate?: number | undefined, scale?: number | undefined, asLog?: boolean) => number;
    pgamma: (q: number, shape: number, rate?: number | undefined, scale?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    qgamma: (q: number, shape: number, rate?: number | undefined, scale?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    rgamma: (n: number | number[], shape: number, rate?: number | undefined, scale?: number | undefined) => number[];
}>;
