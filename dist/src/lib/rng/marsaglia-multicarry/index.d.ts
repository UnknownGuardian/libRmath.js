import { IRNG } from '../irng';
export declare class MarsagliaMultiCarry extends IRNG {
    private m_seed;
    private fixupSeeds;
    constructor(_seed?: number);
    init(_seed?: number): void;
    _setup(): void;
    internal_unif_rand(): number;
    seed: number[];
}
