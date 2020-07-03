import React from 'react';

import { useResponsiveContext } from '../Provider/hooks';
import ResponsiveContainer from '../Container';

import { ResponsiveGridProps, ContainerProps } from './types';
import RelativeToParent from './RelativeToParent';
import RelativeToViewport from './RelativeToViewport';

function Container(props: ContainerProps): JSX.Element {
  const { isRelativeToParent } = useResponsiveContext();

  if (isRelativeToParent) {
    return <RelativeToParent {...props} />;
  }

  return <RelativeToViewport {...props} />;
}

function Grid({
  children,
  breakpoints,
  gutters,
  margins,
  widths,
  isRelativeToParent,
  isCentered,
  hasVerticalGutter = false,
}: ResponsiveGridProps): JSX.Element {
  const overrides = { gutters };
  const props = { children, overrides, hasVerticalGutter };

  if (breakpoints || margins || widths || isRelativeToParent || isCentered) {
    return (
      <ResponsiveContainer
        breakpoints={breakpoints}
        margins={margins}
        widths={widths}
        isRelativeToParent={isRelativeToParent}
        isCentered={isCentered}
      >
        <Container {...props} />
      </ResponsiveContainer>
    );
  }

  return <Container {...props} />;
}

export default Grid;
