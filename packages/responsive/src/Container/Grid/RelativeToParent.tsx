import React, { useMemo } from 'react';

import { Values } from '../types';
import { Container } from './styles';
import { generateRelativeResponsiveness } from './utils';

interface GridProps {
  children: React.ReactNode;
  values: Values;
}

function GridRelativeToParent({ children, values }: GridProps): JSX.Element {
  const responsiveness = useMemo(() => generateRelativeResponsiveness(values.gutter), [values.gutter]);

  return <Container responsiveness={responsiveness}>{children}</Container>;
}

export default GridRelativeToParent;
