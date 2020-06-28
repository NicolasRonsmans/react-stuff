import { useRef, useState, useEffect, useMemo } from 'react';

import { Breakpoints } from './types';
import { parseToInt } from './utils';

// PRIVATE
interface UseSortedAndReversedBreakpointsReturn {
  sortedBreakpoints: Breakpoints;
  reversedBreakpoints: Breakpoints;
}

export function useSortedAndReversedBreakpoints(
  breakpoints: Breakpoints
): UseSortedAndReversedBreakpointsReturn {
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

// PUBLIC
interface UseRefDimensionsReturn<T> {
  ref: React.RefObject<T>;
  dimensions: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export function useRefDimensions<
  T extends Element = Element
>(): UseRefDimensionsReturn<T> {
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
