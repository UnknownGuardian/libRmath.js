import { IRNG } from '../';
import { IRNGNormal } from './inormal-rng';
export declare class KindermanRamage extends IRNGNormal {
    constructor(_rng?: IRNG);
    protected internal_norm_rand(): number;
}
