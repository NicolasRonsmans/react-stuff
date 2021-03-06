import React, { useMemo } from 'react';

import { override } from '../utils';
import { useBreakpoint } from '../Provider/hooks';

import { ConsumerProps } from './types';
import { generateRelativeResponsiveness } from './utils';
import { Container } from './styles';

function ContainerRelativeToParent({
  children,
  overrides,
  isCentered,
}: ConsumerProps): JSX.Element {
  const breakpoint = useBreakpoint();
  const responsiveness = useMemo(() => {
    const values = override(breakpoint, overrides);

    return generateRelativeResponsiveness(values);
  }, [breakpoint, overrides]);
  const props = { children, responsiveness, isCentered };

  return <Container {...props} />;
}

export default ContainerRelativeToParent;
