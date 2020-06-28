import React, { useMemo } from 'react';

import { Unit } from '../types';
import { getValueFromBreakpoint } from '../utils';
import { useBreakpoint } from '../Provider/hooks';

import { ResponsiveUnitProps } from './types';
import { generateRelativeResponsiveness } from './utils';
import { Container } from './styles';

function UnitRelativeToParent({
  children,
  sizes,
  offsets,
}: ResponsiveUnitProps): JSX.Element {
  const breakpoint = useBreakpoint();
  const responsiveness = useMemo(() => {
    const size = getValueFromBreakpoint<Unit>(breakpoint, sizes, 1);
    const offset = getValueFromBreakpoint<Unit>(breakpoint, offsets, 0);

    return generateRelativeResponsiveness(size, offset);
  }, [breakpoint, sizes, offsets]);
  const props = { children, responsiveness };

  return <Container {...props} />;
}

export default UnitRelativeToParent;
