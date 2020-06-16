import { useContext, useRef, useState, useEffect, useMemo } from 'react';

import { Context, ContextValues } from './Provider/context';
import { Breakpoints, Breakpoint } from './types';
import { parseToInt } from './utils';

interface UseSortedAndReversedBreakpointsReturn {
  sortedBreakpoints: Breakpoints;
  reversedBreakpoints: Breakpoints;
}

export function useSortedAndReversedBreakpoints(breakpoints: Breakpoints): UseSortedAndReversedBreakpointsReturn {
  return useMemo(() => {
    const sortedBreakpoints = [...breakpoints].sort((a, b) => {
      if (!a.minWidth) {
        return -1;
      }

      if (!b.minWidth) {
        return 1;
      }

      if (parseToInt(a.minWidth) < parseToInt(b.minWidth)) {
        return -1;
      }

      if (parseToInt(a.minWidth) > parseToInt(b.minWidth)) {
        return 1;
      }

      return 0;
    });
    const reversedBreakpoints = [...sortedBreakpoints].reverse();

    return { sortedBreakpoints, reversedBreakpoints };
  }, [breakpoints]);
}

export function useWidth(): number {
  const { width } = useContext(Context);

  return width;
}

export function useBreakpoint(): Breakpoint {
  const { breakpointIndex, breakpoints } = useContext(Context);

  return breakpoints[breakpointIndex];
}

export function useBreakpoints(): Breakpoints {
  const { breakpoints } = useContext(Context);

  return breakpoints;
}

export function useResponsiveContext(): ContextValues {
  return useContext(Context);
}

interface UseRefDimensionsReturn<T> {
  ref: React.RefObject<T>;
  dimensions: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export function useRefDimensions<T extends Element = Element>(): UseRefDimensionsReturn<T> {
  const ref = useRef<T>(null);
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;
    const resizeObserver = new ResizeObserver(handleResize);

    function handleResize() {
      setDimensions(element.getBoundingClientRect());
    }

    handleResize();
    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, dimensions };
}
