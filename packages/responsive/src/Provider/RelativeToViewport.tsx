import React from 'react';

import { RelativeContainerProps } from './types';
import { useWindowResizeListener } from './hooks';

function RelativeToViewport({
  children,
  onResize,
}: RelativeContainerProps): JSX.Element {
  useWindowResizeListener(onResize);

  return <>{children}</>;
}

export default RelativeToViewport;
