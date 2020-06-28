import React, { useMemo } from 'react';

import { override } from '../utils';
import { useBreakpoint } from '../Provider/hooks';

import { ContainerProps } from './types';
import { generateRelativeResponsiveness } from './utils';
import { Container } from './styles';

function GridRelativeToParent({
  children,
  overrides,
}: ContainerProps): JSX.Element {
  const breakpoint = useBreakpoint();
  const responsiveness = useMemo(() => {
    const values = override(breakpoint, overrides);

    return generateRelativeResponsiveness(values.gutter);
  }, [breakpoint, overrides]);
  const props = { children, responsiveness };

  return <Container {...props} />;
}

export default GridRelativeToParent;
