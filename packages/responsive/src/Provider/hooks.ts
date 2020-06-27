import { useEffect, useMemo, useContext } from 'react';

import { Breakpoint, Breakpoints } from '../types';

import { OnResize } from './types';
import { Context, ContextValues } from './context';

// PRIVATE
export function useWindowResizeListener(onResize: OnResize): void {
  // If react complains about setting a new context value
  // while "rendering", swap with useEffect.
  useMemo(() => {
    function handleResize() {
      const width = window.innerWidth;

      onResize(width);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useResizeObserver(ref: React.RefObject<Element>, onResize: OnResize): void {
  useEffect(() => {
    if (!ref?.current?.parentElement) {
      return;
    }

    // TODO: check if parent is body.
    const parent = ref.current.parentElement;
    const resizeObserver: ResizeObserver = new ResizeObserver(handleResize);

    function handleResize() {
      // TODO: should the padding be substracted?
      const { width } = parent.getBoundingClientRect();

      onResize(width);
    }

    handleResize();
    resizeObserver.observe(parent);

    return () => resizeObserver.unobserve(parent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

// PUBLIC
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
