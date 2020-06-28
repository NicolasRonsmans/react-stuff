export type Space = string | number;

export type Width = string | number;

export type Unit = string | number;

interface BreakpointUnits {
  sizes: Unit[];
  offsets?: Unit[];
}

export interface Breakpoint {
  gutter?: Space;
  margin?: Space;
  minWidth?: Width;
  name: string;
  units?: BreakpointUnits;
  width?: Width;
}

export type Breakpoints = Breakpoint[];

export interface BreakpointValues {
  gutter: Space;
  margin: Space;
  minWidth: Width;
  width: Width;
}

export interface Overrides {
  gutters?: ResponsiveHashMap<Space> | Space;
  margins?: ResponsiveHashMap<Space> | Space;
  widths?: ResponsiveHashMap<Width> | Width;
}

export type ResponsiveHashMap<T> = {
  [key: string]: T;
};

export interface UnitHashMap {
  [key: string]: Unit;
}

export type UnitSizes = UnitHashMap | Unit;

export type UnitOffsets = UnitHashMap | Unit;
