import React from 'react';

import { useResponsiveContext } from '../Provider/hooks';

import { ResponsiveUnitProps } from './types';
import UnitRelativeToParent from './ResponsiveToParent';
import UnitRelativeToViewport from './ResponsiveToViewport';

function ResponsiveUnit(props: ResponsiveUnitProps): JSX.Element {
  const { isRelativeToParent } = useResponsiveContext();

  if (isRelativeToParent) {
    return <UnitRelativeToParent {...props} />;
  }

  return <UnitRelativeToViewport {...props} />;
}

export default ResponsiveUnit;
