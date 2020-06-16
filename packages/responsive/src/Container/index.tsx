import React from 'react';

import { useResponsiveContext } from '../hooks';
import { ResponsiveContainerProps, ContainerProps } from './types';
import ConsumerRelativeToParent from './RelativeToParent';
import ConsumerRelativeToViewport from './RelativeToViewport';
import ResponsiveProvider from '../Provider';

function Container({ children, overrides, isCentered }: ContainerProps): JSX.Element {
  const { isRelativeToParent } = useResponsiveContext();

  if (isRelativeToParent) {
    return (
      <ConsumerRelativeToParent overrides={overrides} isCentered={isCentered}>
        {children}
      </ConsumerRelativeToParent>
    );
  }

  return (
    <ConsumerRelativeToViewport overrides={overrides} isCentered={isCentered}>
      {children}
    </ConsumerRelativeToViewport>
  );
}

function ResponsiveContainer({
  children,
  widths,
  gutters,
  margins,
  breakpoints,
  isRelativeToParent,
  isCentered = true,
}: ResponsiveContainerProps): JSX.Element {
  const overrides = { widths, gutters, margins };

  if (breakpoints) {
    return (
      <ResponsiveProvider breakpoints={breakpoints} isRelativeToParent={isRelativeToParent}>
        <Container overrides={overrides} isCentered={isCentered}>
          {children}
        </Container>
      </ResponsiveProvider>
    );
  }

  return (
    <Container overrides={overrides} isCentered={isCentered}>
      {children}
    </Container>
  );
}

export default ResponsiveContainer;
