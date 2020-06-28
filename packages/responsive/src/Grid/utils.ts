import { Space, BreakpointValues } from '../types';

export function generateRelativeResponsiveness(gutter: Space = 0): string {
  return `
    margin: calc(${gutter} / -2);
    width: calc(100% + ${gutter});

    > * {
      padding: calc(${gutter} / 2);
    }
  `;
}

export function generateAbsoluteResponsiveness(
  values: BreakpointValues[]
): string {
  return values.reduce((str, value) => {
    if (!value.minWidth || !value.width) {
      return `
        ${str}

        ${generateRelativeResponsiveness(value.gutter)}
      `;
    }

    return `
      ${str}

      @media (min-width: ${value.minWidth}) {
        ${generateRelativeResponsiveness(value.gutter)}
      }
    `;
  }, '');
}
