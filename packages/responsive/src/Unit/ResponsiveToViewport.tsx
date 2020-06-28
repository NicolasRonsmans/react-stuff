import React, { useMemo } from 'react';

import { Unit } from '../types';
import { getValueFromBreakpoint } from '../utils';
import { useBreakpoints } from '../Provider/hooks';

import { ResponsiveUnitProps } from './types';
import { generateAbsoluteResponsiveness } from './utils';
import { Container } from './styles';

function UnitRelativeToViewport({
  children,
  sizes,
  offsets,
}: ResponsiveUnitProps): JSX.Element {
  const breakpoints = useBreakpoints();
  const responsiveness = useMemo(() => {
    const values = breakpoints.map((breakpoint) => {
      const minWidth = breakpoint?.minWidth ?? 0;
      const width = breakpoint?.width ?? 0;
      const size = getValueFromBreakpoint<Unit>(breakpoint, sizes, 1);
      const offset = getValueFromBreakpoint<Unit>(breakpoint, offsets, 0);

      return { minWidth, width, size, offset };
    });

    return generateAbsoluteResponsiveness(values);
  }, [breakpoints, sizes, offsets]);
  const props = { children, responsiveness };

  return <Container {...props} />;
}

export default UnitRelativeToViewport;
