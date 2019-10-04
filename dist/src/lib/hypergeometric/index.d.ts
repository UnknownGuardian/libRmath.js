import { dhyper } from './dhyper';
import { phyper } from './phyper';
import { qhyper } from './qhyper';
import { IRNG } from '../rng/irng';
export declare function HyperGeometric(rng?: IRNG): {
    dhyper: typeof dhyper;
    phyper: typeof phyper;
    qhyper: typeof qhyper;
    rhyper: (N: number, nn1in: number, nn2in: number, kkin: number) => number[];
};
