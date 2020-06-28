import { Breakpoints } from './types';

export const DEFAULT_BREAKPOINTS: Breakpoints = [
  {
    name: 'xsmall',
    gutter: '14px',
    margin: '16px',
  },
  {
    name: 'small',
    minWidth: '576px',
    width: '540px',
    gutter: '16px',
  },
  {
    name: 'medium',
    minWidth: '768px',
    width: '720px',
    gutter: '20px',
  },
  {
    name: 'large',
    minWidth: '992px',
    width: '960px',
    gutter: '24px',
  },
  {
    name: 'xlarge',
    minWidth: '1200px',
    width: '1140px',
    gutter: '24px',
  },
];
export const DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN: Breakpoints = DEFAULT_BREAKPOINTS.map(
  (bp, index) => {
    if (index !== 0) {
      return bp;
    }

    const breakpoint = { ...bp };

    delete breakpoint.margin;

    return breakpoint;
  }
);
