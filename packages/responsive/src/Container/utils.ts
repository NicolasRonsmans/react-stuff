import { Breakpoints, Breakpoint, Width, Margin } from '../types';
import { Overrides, Values } from './types';
import { getValueFromBreakpoint } from '../utils';

interface OverrideReturn {
  gutter: Margin;
  margin: Margin;
  minWidth: Width;
  width: Width;
}

export function overrideAll(breakpoints: Breakpoints, overrides: Overrides): OverrideReturn[] {
  return breakpoints.map((breakpoint) => override(breakpoint, overrides));
}

export function override(breakpoint: Breakpoint, overrides: Overrides): OverrideReturn {
  const gutter = getValueFromBreakpoint<Margin>(breakpoint, overrides.gutters, breakpoint?.gutter ?? 0);
  const margin = getValueFromBreakpoint<Margin>(breakpoint, overrides.margins, breakpoint?.margin ?? 0);
  const minWidth = breakpoint?.minWidth ?? 0;
  const width = getValueFromBreakpoint<Width>(breakpoint, overrides.widths, breakpoint?.width ?? 0);

  return { gutter, margin, minWidth, width };
}

export function generateAbsoluteResponsiveness(values: Values[]): string {
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

export function generateRelativeResponsiveness(values: Values): string {
  const padding = values.margin ? `0 ${values.margin}` : '0';
  const width = values.width ? `${values.width}` : '100%';

  return `
		padding: ${padding};
		width: ${width};
	`;
}
