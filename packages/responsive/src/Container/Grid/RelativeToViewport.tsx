import React, { useMemo } from 'react';

import { BreakpointValues } from '../types';

import { Container } from './styles';
import { generateAbsoluteResponsiveness } from './utils';

interface GridProps {
  children: React.ReactNode;
  values: BreakpointValues[];
}

function GridRelativeToViewport({ children, values }: GridProps): JSX.Element {
  const responsiveness = useMemo(() => generateAbsoluteResponsiveness(values), [values]);
  const props = { children, responsiveness };

  return <Container {...props} />;
}

export default GridRelativeToViewport;
