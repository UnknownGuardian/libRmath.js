'use strict'
/* This is a conversion from libRmath.so to Typescript/Javascript
Copyright (C) 2018  Jacob K.F. Bogers  info@mail.jacob-bogers.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import * as debug from 'debug'

import {
  ML_ERR_return_NAN,
  R_DT_0,
  R_DT_1
} from '../common/_general';

const {
  isNaN: ISNAN,
  isFinite: R_FINITE,
  NaN: ML_NAN
} = Number;

import { pnorm_both } from './pnorm_both'

const printer = debug('pnorm5');
import { NumberW } from '../common/toms708';

export function pnorm5(
  q: number,
  mu: number = 0,
  sigma: number = 1,
  lowerTail: boolean = true,
  logP: boolean = false
): number {


  let p = new NumberW(0);
  let cp = new NumberW(0);

  /* Note: The structure of these checks has been carefully thought through.
   * For example, if x == mu and sigma == 0, we get the correct answer 1.
   */

  if (ISNAN(q) || ISNAN(mu) || ISNAN(sigma)) return q + mu + sigma;

  if (!R_FINITE(q) && mu === q) return ML_NAN; /* x-mu is NaN */
  if (sigma <= 0) {
    if (sigma < 0) return ML_ERR_return_NAN(printer);
    /* sigma = 0 : */
    return q < mu ? R_DT_0(lowerTail, logP) : R_DT_1(lowerTail, logP);
  }
  p.val = (q - mu) / sigma;
  if (!R_FINITE(p.val))
    return q < mu ? R_DT_0(lowerTail, logP) : R_DT_1(lowerTail, logP);
  q = p.val;

  pnorm_both(q, p, cp, !lowerTail, logP);

  return lowerTail ? p.val : cp.val;
}
