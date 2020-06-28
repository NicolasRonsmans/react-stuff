import React, { useMemo } from 'react';

import { overrideAll } from '../utils';
import { useBreakpoints } from '../Provider/hooks';

import { ContainerProps } from './types';
import { generateAbsoluteResponsiveness } from './utils';
import { Container } from './styles';

function GridRelativeToViewport({
  children,
  overrides,
}: ContainerProps): JSX.Element {
  const breakpoints = useBreakpoints();
  const responsiveness = useMemo(() => {
    const values = overrideAll(breakpoints, overrides);

    return generateAbsoluteResponsiveness(values);
  }, [breakpoints, overrides]);
  const props = { children, responsiveness };

  return <Container {...props} />;
}

export default GridRelativeToViewport;
