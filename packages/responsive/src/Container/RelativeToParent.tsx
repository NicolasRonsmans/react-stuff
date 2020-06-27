import React, { useMemo } from 'react';

import { useBreakpoint } from '../Provider/hooks';

import { ConsumerProps } from './types';
import { generateRelativeResponsiveness, override } from './utils';
import { Container } from './styles';
import Grid from './Grid/RelativeToParent';

function ContainerRelativeToParent({ children, overrides, isCentered }: ConsumerProps): JSX.Element {
  const breakpoint = useBreakpoint();
  const { responsiveness, hasGutter, values } = useMemo(() => {
    const values = override(breakpoint, overrides);
    const responsiveness = generateRelativeResponsiveness(values);
    const hasGutter = !!values.gutter;

    return { responsiveness, hasGutter, values };
  }, [breakpoint, overrides]);
  const props = { children, values };

  return (
    <Container responsiveness={responsiveness} isCentered={isCentered}>
      {hasGutter && <Grid {...props} />}
      {!hasGutter && children}
    </Container>
  );
}

export default ContainerRelativeToParent;
