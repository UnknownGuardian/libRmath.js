import { IRNG } from '../rng';
export declare function Exponential(rng?: IRNG): {
    dexp: (x: number, rate?: number, asLog?: boolean) => number;
    pexp: (q: number, rate?: number, lowerTail?: boolean, logP?: boolean) => number;
    qexp: (p: number, rate?: number, lowerTail?: boolean, logP?: boolean) => number;
    rexp: (n: number, rate?: number) => number[];
};
