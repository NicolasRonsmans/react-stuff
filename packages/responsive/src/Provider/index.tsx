import React, { useState } from 'react';

import { DEFAULT_BREAKPOINTS } from '../constants';
import { useSortedAndReversedBreakpoints } from '../hooks';

import { ResponsiveProviderProps } from './types';
import { Context, ContextValues } from './context';
import { getBreakpointReversedIndexFromWidth } from './utils';
import RelativeToViewport from './RelativeToViewport';
import RelativeToParent from './RelativeToParent';

function ResponsiveProvider({
  children,
  breakpoints = DEFAULT_BREAKPOINTS,
  isRelativeToParent = false,
}: ResponsiveProviderProps): JSX.Element {
  if (breakpoints.length === 0) {
    breakpoints = DEFAULT_BREAKPOINTS;
  }

  const shouldUseDefaultBehaviour = !isRelativeToParent || !ResizeObserver;
  const { sortedBreakpoints, reversedBreakpoints } = useSortedAndReversedBreakpoints(breakpoints);
  const [contextValue, setContextValue] = useState<ContextValues>({
    breakpointIndex: 0,
    width: 0,
    breakpoints: sortedBreakpoints,
    isRelativeToParent: !shouldUseDefaultBehaviour,
  });

  function handleResize(width: number) {
    setContextValue({
      ...contextValue,
      breakpointIndex: getBreakpointReversedIndexFromWidth(width, reversedBreakpoints),
      width,
    });
  }

  return (
    <Context.Provider value={contextValue}>
      {shouldUseDefaultBehaviour && <RelativeToViewport onResize={handleResize}>{children}</RelativeToViewport>}
      {!shouldUseDefaultBehaviour && <RelativeToParent onResize={handleResize}>{children}</RelativeToParent>}
    </Context.Provider>
  );
}

export default ResponsiveProvider;
