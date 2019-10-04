import { IRNGNormal } from '../rng/normal';
export declare function NegativeBinomial(rng?: IRNGNormal): {
    dnbinom: (x: number | number[], size: number, prob?: number | undefined, mu?: number | undefined, giveLog?: boolean) => number | number[];
    pnbinom: (q: number | number[], size: number, prob?: number | undefined, mu?: number | undefined, lowerTail?: boolean, logP?: boolean) => number | number[];
    qnbinom: (q: number | number[], size: number, prob?: number | undefined, mu?: number | undefined, lowerTail?: boolean, logP?: boolean) => number | number[];
    rnbinom: (n: number, size: number, prob?: number | undefined, mu?: number | undefined) => number | number[];
};
