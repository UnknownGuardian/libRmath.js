import { IRNGNormal } from '../rng/normal';
export declare function rlnorm(N: number, meanlog: number | undefined, sdlog: number | undefined, rng: IRNGNormal): number[];
export declare function rlnormOne(meanlog: number | undefined, sdlog: number | undefined, rng: IRNGNormal): number;
