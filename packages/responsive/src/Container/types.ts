import { Breakpoints, Overrides } from '../types';

interface Props extends Overrides {
  children: React.ReactNode;
  isCentered?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  overrides: Overrides;
  isCentered: boolean;
}

export interface ResponsiveContainerProps extends Props {
  breakpoints?: Breakpoints;
  isRelativeToParent?: boolean;
}

export interface ConsumerProps extends Props {
  overrides: Overrides;
}
