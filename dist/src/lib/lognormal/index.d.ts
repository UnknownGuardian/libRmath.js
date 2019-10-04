import { dlnorm } from './dlnorm';
import { plnorm } from './plnorm';
import { qlnorm } from './qlnorm';
import { IRNGNormal } from '../rng/normal';
export declare function LogNormal(rng?: IRNGNormal): {
    dlnorm: typeof dlnorm;
    plnorm: typeof plnorm;
    qlnorm: typeof qlnorm;
    rlnorm: (n: number, meanlog?: number, sdlog?: number) => number | number[];
};
