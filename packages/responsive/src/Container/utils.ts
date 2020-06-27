import { Breakpoints, Breakpoint, Space, Width } from '../types';
import { getValueFromBreakpoint } from '../utils';

import { Overrides, BreakpointValues } from './types';

interface OverrideReturn {
  gutter: Space;
  margin: Space;
  minWidth: Width;
  width: Width;
}

export function overrideAll(breakpoints: Breakpoints, overrides: Overrides): OverrideReturn[] {
  return breakpoints.map((breakpoint) => override(breakpoint, overrides));
}

export function override(breakpoint: Breakpoint, overrides: Overrides): OverrideReturn {
  const gutter = getValueFromBreakpoint<Space>(breakpoint, overrides.gutters, breakpoint?.gutter ?? 0);
  const margin = getValueFromBreakpoint<Space>(breakpoint, overrides.margins, breakpoint?.margin ?? 0);
  const minWidth = breakpoint?.minWidth ?? 0;
  const width = getValueFromBreakpoint<Width>(breakpoint, overrides.widths, breakpoint?.width ?? 0);

  return { gutter, margin, minWidth, width };
}

export function generateAbsoluteResponsiveness(values: BreakpointValues[]): string {
  return values.reduce((str, value) => {
    if (!value.minWidth) {
      return `
        ${str}

				${generateRelativeResponsiveness(value)}
      `;
    }

    return `
      ${str}

      @media (min-width: ${value.minWidth}) {
				${generateRelativeResponsiveness(value)}
      }
    `;
  }, '');
}

export function generateRelativeResponsiveness(values: BreakpointValues): string {
  const padding = values.margin ? `0 ${values.margin}` : '0';
  const width = values.width ? `${values.width}` : '100%';

  return `
		padding: ${padding};
		width: ${width};
	`;
}
