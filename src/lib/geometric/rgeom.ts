/*  AUTHOR
 *  Jacob Bogers, jkfbogers@gmail.com
 *  March 20, 2017
 * 
 *  ORGINAL AUTHOR
 *  Mathlib : A C Library of Special Functions
 *  Copyright (C) 1998 Ross Ihaka and the R Core Team.
 *  Copyright (C) 2000 The R Core Team
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, a copy is available at
 *  https://www.R-project.org/Licenses/
 *
 *  SYNOPSIS
 *
 *    #include <Rmath.h>
 *    double rgeom(double p);
 *
 *  DESCRIPTION
 *
 *    Random variates from the geometric distribution.
 *
 *  NOTES
 *
 *    We generate lambda as exponential with scale parameter
 *    p / (1 - p).  Return a Poisson deviate with mean lambda.
 *    See Example 1.5 in Devroye (1986), Chapter 10, pages 488f.
 *
 *  REFERENCE
 *
 *    Devroye, L. (1986).
 *    Non-Uniform Random Variate Generation.
 *    New York: Springer-Verlag.
 *    Pages 488f.
 */

import {
    R_FINITE,
    ML_ERR_return_NAN
} from '~common';

import {
    rpois
} from '~poisson';

import {
    exp_rand
} from '~exp-tools';

import { INormal } from '~normal';

export function rgeom(p: number, normal: INormal): number {
    if (!R_FINITE(p) || p <= 0 || p > 1) ML_ERR_return_NAN;

    return rpois(1, exp_rand(normal.unif_rand) * ((1 - p) / p), normal) as number;
}
