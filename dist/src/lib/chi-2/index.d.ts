import { IRNGNormal } from '../rng/normal';
export declare function ChiSquared(rng?: IRNGNormal): {
    dchisq: (x: number, df: number, ncp?: number | undefined, log?: boolean) => number;
    pchisq: (p: number, df: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    qchisq: (p: number, df: number, ncp?: number | undefined, lowerTail?: boolean, logP?: boolean) => number;
    rchisq: (n: number | number[] | undefined, df: number, ncp?: number | undefined) => number[];
};
