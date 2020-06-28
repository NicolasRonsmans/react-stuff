import React from 'react';

import { useResponsiveContext } from '../Provider/hooks';
import ResponsiveContainer from '../Container';

import { ResponsiveGridProps, ContainerProps } from './types';
import ConsumerRelativeToParent from './RelativeToParent';
import ConsumerRelativeToViewport from './RelativeToViewport';

function Container(props: ContainerProps): JSX.Element {
  const { isRelativeToParent } = useResponsiveContext();

  if (isRelativeToParent) {
    return <ConsumerRelativeToParent {...props} />;
  }

  return <ConsumerRelativeToViewport {...props} />;
}

function Grid({
  children,
  breakpoints,
  gutters,
  margins,
  widths,
  isRelativeToParent,
  isCentered,
}: ResponsiveGridProps): JSX.Element {
  const overrides = { gutters };
  const props = { children, overrides };

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
