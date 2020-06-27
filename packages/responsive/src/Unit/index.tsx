import React, { useMemo } from 'react';

import { useBreakpoint } from '../Provider/hooks';
import { UnitSizes, UnitOffsets } from '../types';
import { getValueFromBreakpoint } from '../utils';

import { generateUnitResponsiveness } from './utils';
import { Container } from './styles';

interface ResponsiveUnitProps {
  children: React.ReactNode;
  sizes?: UnitSizes;
  offsets?: UnitOffsets;
}

function ResponsiveUnit({ children, sizes, offsets }: ResponsiveUnitProps): JSX.Element {
  const breakpoint = useBreakpoint();
  const responsiveness = useMemo(() => {
    const size = getValueFromBreakpoint<number>(breakpoint, sizes, 1);
    const offset = getValueFromBreakpoint<number>(breakpoint, offsets, 0);

    return generateUnitResponsiveness(size, offset);
  }, [breakpoint, sizes, offsets]);
  const props = { children, responsiveness };

  return <Container {...props} />;
}

export default ResponsiveUnit;
