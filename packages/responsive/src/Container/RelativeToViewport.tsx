import React, { useMemo } from 'react';

import { useBreakpoints } from '../Provider/hooks';

import { ConsumerProps } from './types';
import { overrideAll, generateAbsoluteResponsiveness } from './utils';
import { Container } from './styles';
import Grid from './Grid/RelativeToViewport';

function ContainerRelativeToViewport({ children, overrides, isCentered }: ConsumerProps): JSX.Element {
  const breakpoints = useBreakpoints();
  const { responsiveness, hasGutters, values } = useMemo(() => {
    const values = overrideAll(breakpoints, overrides);
    const responsiveness = generateAbsoluteResponsiveness(values);
    const hasGutters = values.findIndex((value) => value.gutter) !== -1;

    return { responsiveness, hasGutters, values };
  }, [breakpoints, overrides]);
  const props = { children, values };

  return (
    <Container responsiveness={responsiveness} isCentered={isCentered}>
      {hasGutters && <Grid {...props} />}
      {!hasGutters && children}
    </Container>
  );
}

export default ContainerRelativeToViewport;
