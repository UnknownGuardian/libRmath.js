import { IRNG } from '../irng';
export declare class LecuyerCMRG extends IRNG {
    private m_seed;
    constructor(_seed?: number);
    _setup(): void;
    init(se?: number): void;
    internal_unif_rand(): number;
    seed: number[];
}
