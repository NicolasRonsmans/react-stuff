import { Overrides } from '../types';
import { ResponsiveContainerProps } from '../Container/types';

export interface ContainerProps {
  children: React.ReactNode;
  overrides: Overrides;
  hasVerticalGutter: boolean;
}

export interface ResponsiveGridProps extends ResponsiveContainerProps {
  hasVerticalGutter?: boolean;
}
