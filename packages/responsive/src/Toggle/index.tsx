import React from 'react';

import { getValueFromBreakpoint } from '../utils';
import { useBreakpoint } from '../Provider/hooks';

import { CreateToggleComponentReturn, ToggleComponentProps } from './types';

type Inline = string | number;

interface ResponsiveToggleProps {
  children?: React.ReactNode;
  whitelist?: string[];
  blacklist?: string[];
  inline?: {
    [key: string]: Inline;
  };
}

function ResponsiveToggle({
  children,
  whitelist,
  blacklist,
  inline,
}: ResponsiveToggleProps): JSX.Element | null {
  const breakpoint = useBreakpoint();

  if (whitelist) {
    if (!whitelist.includes(breakpoint.name) || !children) {
      return null;
    }

    return <>{children}</>;
  }

  if (blacklist) {
    if (blacklist.includes(breakpoint.name) || !children) {
      return null;
    }

    return <>{children}</>;
  }

  if (inline) {
    const value = getValueFromBreakpoint<Inline>(breakpoint, inline, '');

    if (!value) {
      return null;
    }

    return <>{value}</>;
  }

  return null;
}

export function createToggleComponent(
  value: string
): CreateToggleComponentReturn {
  return function ToggleComponent({
    children,
  }: ToggleComponentProps): JSX.Element | null {
    const breakpoint = useBreakpoint();

    if (breakpoint.name !== value) {
      return null;
    }

    return <>{children}</>;
  };
}

export default ResponsiveToggle;
