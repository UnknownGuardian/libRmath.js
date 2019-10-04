import { IRNGNormal } from '../rng/normal';
export declare function FDist(rng?: IRNGNormal): {
    df: (x: number, df1: number, df2: number, ncp?: number | undefined, log?: boolean) => number;
    pf: (q: number, df1: number, df2: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    qf: (p: number, df1: number, df2: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    rf: (n: number, n1: number, n2: number, rng: IRNGNormal) => number[];
};
