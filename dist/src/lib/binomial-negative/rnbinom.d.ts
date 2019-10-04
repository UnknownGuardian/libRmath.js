import { IRNGNormal } from '../rng/normal/inormal-rng';
export declare function rnbinom(n: number | number[], size: number, prob: number, rng: IRNGNormal): number[];
export declare function rnbinomOne(size: number, prob: number, rng: IRNGNormal): number | number[];
export declare function rnbinom_mu(n: number | number[] | undefined, size: number, mu: number, rng: IRNGNormal): number[];
