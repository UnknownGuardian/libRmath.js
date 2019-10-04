import { IRNG } from '../rng';
export declare function csignrank(k: number, n: number, u: number, c: number, w: number[]): number;
export declare function dsignrank(x: number, n: number, logX?: boolean): number;
export declare function psignrank(x: number, n: number, lowerTail?: boolean, logP?: boolean): number;
export declare function qsignrank(x: number, n: number, lowerTail?: boolean, logP?: boolean): number;
export declare function rsignrankOne(n: number, rng: IRNG): number;
export declare function rsignrank(N: number, n: number, rng: IRNG): number[];
