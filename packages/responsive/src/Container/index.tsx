import React from 'react';

import ResponsiveProvider from '../Provider';
import { useResponsiveContext } from '../Provider/hooks';

import { ResponsiveContainerProps, ContainerProps } from './types';
import ConsumerRelativeToParent from './RelativeToParent';
import ConsumerRelativeToViewport from './RelativeToViewport';

function Container(props: ContainerProps): JSX.Element {
  const { isRelativeToParent } = useResponsiveContext();

  if (isRelativeToParent) {
    return <ConsumerRelativeToParent {...props} />;
  }

  return <ConsumerRelativeToViewport {...props} />;
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
  const props = { children, overrides, isCentered };

  if (breakpoints) {
    return (
      <ResponsiveProvider breakpoints={breakpoints} isRelativeToParent={isRelativeToParent}>
        <Container {...props} />
      </ResponsiveProvider>
    );
  }

  return <Container {...props} />;
}

export default ResponsiveContainer;
