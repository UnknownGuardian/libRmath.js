import { IRNGNormal } from '../rng/normal';
import { dgeom } from './dgeom';
import { pgeom } from './pgeom';
import { qgeom } from './qgeom';
export declare function Geometric(rng?: IRNGNormal): {
    dgeom: typeof dgeom;
    pgeom: typeof pgeom;
    qgeom: typeof qgeom;
    rgeom: (N: number, prob: number) => number[];
};
