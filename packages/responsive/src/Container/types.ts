import { ResponsiveHashMap, Margin, Width, Breakpoints } from '../types';

export interface Overrides {
  gutters?: ResponsiveHashMap<Margin> | Margin;
  margins?: ResponsiveHashMap<Margin> | Margin;
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

export interface Values {
  gutter: Margin;
  margin: Margin;
  minWidth: Width;
  width: Width;
}
