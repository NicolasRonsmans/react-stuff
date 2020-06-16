import { isUndefined, isObject, isArray, isNumber } from 'lodash';

import { Breakpoint } from './types';

export function parseToInt(value: string | number): number {
  if (isNumber(value)) {
    return value;
  }

  // TODO: add support for different units (px, em, rem, ...)
  return parseInt(value, 10);
}

interface ValuesObject<T> {
  [key: string]: T;
}

export function getValueFromBreakpoint<T>(
  breakpoint: Breakpoint,
  values: T | ValuesObject<T> | undefined,
  defaultValue: T
): T {
  if (isUndefined(values)) {
    return defaultValue;
  }
  if (!isObject(values) || isArray(values)) {
    return values as T;
  }

  return values[breakpoint.name] ?? defaultValue;
}
