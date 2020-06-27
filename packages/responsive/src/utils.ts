import { Breakpoint } from './types';

// PRIVATE
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function isUndefined(value?: any): value is undefined {
  return typeof value === 'undefined';
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function isNumber(value?: any): value is number {
  return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function isObject(value?: any): value is Record<string, unknown> {
  return value !== null && typeof value === 'object';
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function isArray(value?: any): value is any[] {
  return Array.isArray(value);
}

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

// PUBLIC
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
