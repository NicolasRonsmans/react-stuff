import React, { useRef } from 'react';

import { RelativeContainerProps } from './types';
import { useResizeObserver } from './hooks';

function RelativeToParent({ children, onResize }: RelativeContainerProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const props = { children, ref };

  useResizeObserver(ref, onResize);

  return <div {...props} />;
}

export default RelativeToParent;
