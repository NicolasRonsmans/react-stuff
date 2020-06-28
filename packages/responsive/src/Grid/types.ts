import { Overrides } from '../types';
import { ResponsiveContainerProps } from '../Container/types';

export interface ContainerProps {
  children: React.ReactNode;
  overrides: Overrides;
}

export type ResponsiveGridProps = ResponsiveContainerProps;
