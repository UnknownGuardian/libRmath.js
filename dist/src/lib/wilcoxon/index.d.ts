import { dwilcox } from './dwilcox';
import { pwilcox } from './pwilcox';
import { qwilcox } from './qwilcox';
import { IRNG } from '../rng';
export declare function Wilcoxon(rng?: IRNG): {
    dwilcox: typeof dwilcox;
    pwilcox: typeof pwilcox;
    qwilcox: typeof qwilcox;
    rwilcox: (nn: number, m: number, n: number) => number[];
};
