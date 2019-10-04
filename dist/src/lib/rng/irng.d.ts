import { IRNGType } from './irng-type';
export declare type MessageType = 'INIT';
export interface IRNG_CORE {
    unif_rand(n?: number): number[];
    internal_unif_rand(): number;
}
export interface IRNG extends IRNG_CORE {
}
export declare abstract class IRNG {
    protected _name: string;
    protected _kind: IRNGType;
    private notify;
    constructor(_seed: number);
    readonly name: string;
    readonly kind: IRNGType;
    abstract _setup(): void;
    init(_seed: number): void;
    abstract seed: number[];
    unif_rand(n?: number): number[];
    abstract internal_unif_rand(): number;
    register(event: MessageType, handler: () => void): void;
    emit(event: MessageType): void;
}
