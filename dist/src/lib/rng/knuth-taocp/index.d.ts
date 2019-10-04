import { IRNG } from '../irng';
export declare class KnuthTAOCP extends IRNG {
    private buf;
    private m_seed;
    private KT_pos;
    private fixupSeeds;
    private KT_next;
    private RNG_Init_R_KT;
    private ran_arr_cycle;
    private ran_array;
    constructor(_seed?: number);
    _setup(): void;
    init(_seed?: number): void;
    seed: number[];
    internal_unif_rand(): number;
}
