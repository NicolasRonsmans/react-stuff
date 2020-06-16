import { Breakpoints } from '../types';
import { parseToInt } from '../utils';

export function getBreakpointReversedIndexFromWidth(width: number, reversedBreakpoints: Breakpoints): number {
  const breakpointIndex = reversedBreakpoints.findIndex((bp) => bp.minWidth && width >= parseToInt(bp.minWidth));

  if (breakpointIndex === -1) {
    return 0;
  }

  return reversedBreakpoints.length - breakpointIndex - 1;
}
