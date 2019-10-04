export declare function Tukey(): {
    ptukey: (q: number, nmeans: number, df: number, nranges?: number, lowerTail?: boolean, logP?: boolean) => number;
    qtukey: (q: number, nmeans: number, df: number, nranges?: number, lowerTail?: boolean, logP?: boolean) => number;
};
