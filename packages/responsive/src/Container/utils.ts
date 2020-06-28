import { BreakpointValues } from '../types';

export function generateAbsoluteResponsiveness(
  values: BreakpointValues[]
): string {
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

export function generateRelativeResponsiveness(
  values: BreakpointValues
): string {
  const padding = values.margin ? `0 ${values.margin}` : '0';
  const width = values.width ? `${values.width}` : '100%';

  return `
		padding: ${padding};
		width: ${width};
	`;
}
