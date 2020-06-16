import React from 'react';
import { isArray } from 'lodash';

import { Breakpoints } from '../types';
import { BOOTSTRAP_BREAKPOINTS } from '../constants';
import { useBreakpoint } from '../hooks';
import { getValueFromBreakpoint } from '../utils';

type Inline = string | number;

interface ResponsiveToggleProps {
  children?: React.ReactNode;
  whitelist?: string[];
  blacklist?: string[];
  inline: {
    [key: string]: Inline;
  };
}

function ResponsiveToggle({ children, whitelist, blacklist, inline }: ResponsiveToggleProps): JSX.Element | null {
  const breakpoint = useBreakpoint();

  if (isArray(whitelist)) {
    if (!whitelist.includes(breakpoint.name)) {
      return null;
    }

    return <>{children}</>;
  }

  if (isArray(blacklist)) {
    if (blacklist.includes(breakpoint.name)) {
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

interface ToggleComponentProps {
  children: React.ReactNode;
}

type CreateToggleComponentReturn = (props: ToggleComponentProps) => JSX.Element | null;

function createToggleComponent(value: string): CreateToggleComponentReturn {
  return function ToggleComponent({ children }: ToggleComponentProps): JSX.Element | null {
    const breakpoint = useBreakpoint();

    if (breakpoint.name !== value) {
      return null;
    }

    return <>{children}</>;
  };
}

export function generateToggleComponentsFromBreakpoints(
  breakpoints: Breakpoints = BOOTSTRAP_BREAKPOINTS
): CreateToggleComponentReturn[] {
  return breakpoints.map((bp) => createToggleComponent(bp.name));
}

export default ResponsiveToggle;
