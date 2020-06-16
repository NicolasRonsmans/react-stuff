import React, { useMemo } from 'react';

import { Values } from '../types';
import { Container } from './styles';
import { generateAbsoluteResponsiveness } from './utils';

interface GridProps {
  children: React.ReactNode;
  values: Values[];
}

function GridRelativeToViewport({ children, values }: GridProps): JSX.Element {
  const responsiveness = useMemo(() => generateAbsoluteResponsiveness(values), [values]);

  return <Container responsiveness={responsiveness}>{children}</Container>;
}

export default GridRelativeToViewport;
