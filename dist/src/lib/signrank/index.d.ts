import { IRNG } from '../rng';
import { dsignrank } from './dsign';
import { psignrank } from './psign';
import { qsignrank } from './qsign';
export declare function SignRank(rng?: IRNG): {
    dsignrank: typeof dsignrank;
    psignrank: typeof psignrank;
    qsignrank: typeof qsignrank;
    rsignrank: (N: number, n: number) => number | number[];
};
