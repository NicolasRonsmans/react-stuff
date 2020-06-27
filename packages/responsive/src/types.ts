export type Space = string | number;
export type Width = string | number;

export interface Breakpoint {
  gutter?: Space;
  margin?: Space;
  minWidth?: Width;
  name: string;
  width?: Width;
}

export type Breakpoints = Breakpoint[];

export type ResponsiveHashMap<T> = {
  [key: string]: T;
};

export interface UnitHashMap {
  [key: string]: number;
}

export type UnitSizes = UnitHashMap | number;

export type UnitOffsets = UnitHashMap | number;
