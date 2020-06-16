import React, { useRef } from 'react';

import { RelativeContainerProps } from './types';
import { useResizeObserver } from './hooks';

function RelativeToParent({ children, onResize }: RelativeContainerProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  useResizeObserver(ref, onResize);

  return <div ref={ref}>{children}</div>;
}

export default RelativeToParent;
