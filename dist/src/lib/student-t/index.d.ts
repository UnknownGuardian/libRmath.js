import { IRNGNormal } from '../rng/normal/inormal-rng';
export declare function StudentT(rng?: IRNGNormal): {
    dt: (x: number, df: number, ncp?: number | undefined, asLog?: boolean) => number;
    pt: (q: number, df: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    qt: (p: number, df: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    rt: (n: number, df: number, ncp?: number | undefined) => {}[];
};
