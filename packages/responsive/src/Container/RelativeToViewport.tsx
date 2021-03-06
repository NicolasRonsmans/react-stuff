import React, { useMemo } from 'react';

import { overrideAll } from '../utils';
import { useBreakpoints } from '../Provider/hooks';

import { ConsumerProps } from './types';
import { generateAbsoluteResponsiveness } from './utils';
import { Container } from './styles';

function ContainerRelativeToViewport({
  children,
  overrides,
  isCentered,
}: ConsumerProps): JSX.Element {
  const breakpoints = useBreakpoints();
  const responsiveness = useMemo(() => {
    const values = overrideAll(breakpoints, overrides);

    return generateAbsoluteResponsiveness(values);
  }, [breakpoints, overrides]);
  const props = { children, responsiveness, isCentered };

  return <Container {...props} />;
}

export default ContainerRelativeToViewport;
