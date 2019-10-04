import { dnorm4 as dnorm } from './dnorm';
import { pnorm5 as pnorm } from './pnorm';
import { qnorm } from './qnorm';
import { IRNGNormal } from '../rng';
export declare function Normal(prng?: IRNGNormal): {
    rnorm: (n?: number, mu?: number, sigma?: number) => number[];
    dnorm: typeof dnorm;
    pnorm: typeof pnorm;
    qnorm: typeof qnorm;
    rng: IRNGNormal;
};
