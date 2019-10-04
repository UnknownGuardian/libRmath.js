import { IRNG } from '../irng';
export declare class SuperDuper extends IRNG {
    private m_seed;
    constructor(_seed?: number);
    _setup(): void;
    internal_unif_rand(): number;
    private fixupSeeds;
    init(_seed?: number): void;
    seed: number[];
}
