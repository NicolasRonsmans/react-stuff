import { ResponsiveHashMap, Space, Width, Breakpoints } from '../types';

export interface Overrides {
  gutters?: ResponsiveHashMap<Space> | Space;
  margins?: ResponsiveHashMap<Space> | Space;
  widths?: ResponsiveHashMap<Width> | Width;
}

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

export interface BreakpointValues {
  gutter: Space;
  margin: Space;
  minWidth: Width;
  width: Width;
}
