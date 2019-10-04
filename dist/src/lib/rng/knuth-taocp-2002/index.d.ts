import { IRNG } from '../irng';
export declare class KnuthTAOCP2002 extends IRNG {
    private qualityBuffer;
    private ran_arr_buf;
    private m_seed;
    private ran_x;
    private KT_pos;
    private ran_array;
    private ran_arr_cycle;
    private ran_start;
    private RNG_Init_KT2;
    private KT_next;
    constructor(_seed?: number);
    _setup(): void;
    internal_unif_rand(): number;
    init(_seed?: number): void;
    seed: number[];
}
