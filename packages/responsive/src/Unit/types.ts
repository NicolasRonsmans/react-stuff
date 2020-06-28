import { UnitSizes, UnitOffsets, Unit, Width } from '../types';

export interface ResponsiveUnitProps {
  children: React.ReactNode;
  sizes?: UnitSizes;
  offsets?: UnitOffsets;
}

export interface UnitValues {
  minWidth: Width;
  width: Width;
  size: Unit;
  offset: Unit;
}
