import { IRNG } from '../irng';
export declare class WichmannHill extends IRNG {
    private m_seed;
    constructor(_seed?: number);
    _setup(): void;
    internal_unif_rand(): number;
    fixupSeeds(): void;
    init(seed?: number): void;
    seed: number[];
}
