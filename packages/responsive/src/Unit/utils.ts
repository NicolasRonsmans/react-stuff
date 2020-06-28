import { Unit } from '../types';
import { isNumber } from '../utils';
import { UnitValues } from './types';

function parse(value: Unit, defaultValue: Unit) {
  if (!value) {
    return defaultValue;
  } else if (isNumber(value)) {
    return `${value * 100}%`;
  }

  return value;
}

export function generateRelativeResponsiveness(
  size: Unit,
  offset: Unit
): string {
  offset = parse(offset, 0);
  size = parse(size, 1);

  return `
    margin-left: ${offset};
    width: ${size};
  `;
}

export function generateAbsoluteResponsiveness(values: UnitValues[]): string {
  return values.reduce((str, value) => {
    if (!value.minWidth || !value.width) {
      return `
        ${str}

        ${generateRelativeResponsiveness(value.size, value.offset)}
      `;
    }

    return `
      ${str}

      @media (min-width: ${value.minWidth}) {
        ${generateRelativeResponsiveness(value.size, value.offset)}
      }
    `;
  }, '');
}
