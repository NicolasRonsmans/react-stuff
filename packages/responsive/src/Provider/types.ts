import { Breakpoints } from '../types';

export interface ResponsiveProviderProps {
  children: React.ReactNode;
  breakpoints?: Breakpoints;
  isRelativeToParent?: boolean;
}

export interface RelativeContainerProps {
  children: React.ReactNode;
  onResize: OnResize;
}

export type OnResize = (width: number) => void;
