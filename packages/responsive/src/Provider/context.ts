import { createContext } from 'react';

import { Breakpoints } from '../types';

export interface ContextValues {
  breakpointIndex: number;
  width: number;
  breakpoints: Breakpoints;
  isRelativeToParent: boolean;
}

export const Context = createContext<ContextValues>({
  breakpointIndex: 0,
  width: 0,
  breakpoints: [
    {
      name: 'none',
    },
  ],
  isRelativeToParent: false,
});
