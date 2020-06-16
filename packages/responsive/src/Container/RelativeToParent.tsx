import React, { useMemo } from 'react';

import { useBreakpoint } from '../hooks';
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

  return (
    <Container responsiveness={responsiveness} isCentered={isCentered}>
      {hasGutter && <Grid values={values}>{children}</Grid>}
      {!hasGutter && children}
    </Container>
  );
}

export default ContainerRelativeToParent;
