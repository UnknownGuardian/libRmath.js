import { IRNG } from '../';
import { IRNG_CORE } from '../irng';
export interface IRNGNormal extends IRNG_CORE {
    norm_rand(n: number): number[];
}
export declare abstract class IRNGNormal {
    protected rng: IRNG;
    constructor(_rng: IRNG);
    norm_randOne(): number;
    protected abstract internal_norm_rand(): number;
    unif_rand(n?: number): number[];
    internal_unif_rand(): number;
}
