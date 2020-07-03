import { Space, BreakpointValues } from '../types';

export function generateRelativeResponsiveness(
  gutter: Space = 0,
  hasVerticalGutter: boolean
): string {
  return `
    margin: ${!hasVerticalGutter ? '0' : ''} calc(${gutter} / -2);
    width: calc(100% + ${gutter});

    > * {
      padding: ${!hasVerticalGutter ? '0' : ''} calc(${gutter} / 2);
    }
  `;
}

export function generateAbsoluteResponsiveness(
  values: BreakpointValues[],
  hasVerticalGutter: boolean
): string {
  return values.reduce((str, value) => {
    const css = generateRelativeResponsiveness(value.gutter, hasVerticalGutter);

    if (!value.minWidth || !value.width) {
      return `
        ${str}

        ${css}
      `;
    }

    return `
      ${str}

      @media (min-width: ${value.minWidth}) {
        ${css}
      }
    `;
  }, '');
}
