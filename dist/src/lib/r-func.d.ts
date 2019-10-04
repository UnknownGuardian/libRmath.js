export declare function seq_len({ length, base }: {
    length: number;
    base: number;
}): IterableIterator<number>;
export declare const seq: (adjust?: number) => (adjustMin?: number) => (start: number, end?: number, step?: number) => number[];
export declare const sequenceFactory: (adjust?: number, adjustMin?: number) => (start: number, end: number, delta?: number) => number[];
export declare function lazySeq(start: number, end?: number, step?: number, adjust?: number, adjustMin?: number): IterableIterator<number>;
export declare type strTypes = 'boolean' | 'number' | 'undefined' | 'string' | 'null' | 'symbol' | 'array' | 'function' | 'object';
export declare type system = boolean | number | undefined | string | null | symbol;
export declare function multiplexer(...rest: any[]): IterableIterator<any[]>;
export declare const c: (...args: any[]) => {}[];
export declare function Rcycle(fn: Function): (...args: any[]) => any[];
export declare function numberPrecision(prec?: number): <T>(x: T) => T;
export declare function sum(x: number[]): number;
export interface ISummary {
    N: number;
    mu: number;
    population: {
        variance: number;
        sd: number;
    };
    sample: {
        variance: number;
        sd: number;
    };
    relX: any;
    relX2: any;
    stats: {
        min: number;
        '1st Qu.': number;
        median: number;
        '3rd Qu.': number;
        max: number;
    };
}
export declare function randomGenHelper<T extends Function>(n: number | number[], fn: T, ...arg: any[]): number[];
export declare type Slicee<T> = {
    [P in keyof T]: T[P];
};
export declare type Sliced<T> = {
    key: keyof T;
    value: T[keyof T];
};
export declare function map<T, S>(data: Slicee<T>): {
    (fn: (value: T[keyof T], idx: keyof T) => S): S[];
};
export declare function each<T>(data: Slicee<T>): {
    (fn: (value: T[keyof T], idx: keyof T) => void): void;
};
export declare function array_flatten<T = unknown>(...rest: (T | IterableIterator<T> | T[])[]): T[];
export declare function flatten<T = unknown>(...rest: (T | IterableIterator<T> | T[])[]): IterableIterator<T>;
export declare function chain<F0 extends (...argv: any[]) => any, F extends (...argv: any[]) => any>(fn0: F0, ...fns: F[]): (...args: Parameters<F>) => ReturnType<F0>;
