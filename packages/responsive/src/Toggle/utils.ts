import { Breakpoints } from '../types';
import { DEFAULT_BREAKPOINTS } from '../constants';

import { CreateToggleComponentReturn } from './types';
import { createToggleComponent } from './index';

export function generateToggleComponentsFromBreakpoints(
  breakpoints: Breakpoints = DEFAULT_BREAKPOINTS
): CreateToggleComponentReturn[] {
  return breakpoints.map((bp) => createToggleComponent(bp.name));
}
