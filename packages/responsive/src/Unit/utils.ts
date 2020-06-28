import { Unit } from '../types';
import { isNumber } from '../utils';

function parse(value: Unit, defaultValue: Unit) {
  if (!value) {
    return defaultValue;
  } else if (isNumber(value)) {
    return `${value * 100}%`;
  }

  return value;
}

export function generateUnitResponsiveness(size: Unit, offset: Unit): string {
  offset = parse(offset, 0);
  size = parse(size, 'auto');

  return `
    margin-left: ${offset};
    width: ${size};
  `;
}
