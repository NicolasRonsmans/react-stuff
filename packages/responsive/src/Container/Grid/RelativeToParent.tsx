import React, { useMemo } from 'react';

import { BreakpointValues } from '../types';

import { Container } from './styles';
import { generateRelativeResponsiveness } from './utils';

interface GridProps {
  children: React.ReactNode;
  values: BreakpointValues;
}

function GridRelativeToParent({ children, values }: GridProps): JSX.Element {
  const responsiveness = useMemo(() => generateRelativeResponsiveness(values.gutter), [values.gutter]);
  const props = { children, responsiveness };

  return <Container {...props} />;
}

export default GridRelativeToParent;
