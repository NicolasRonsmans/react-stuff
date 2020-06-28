import React from 'react';
import {
  ResponsiveGrid,
  ResponsiveUnit,
  DEFAULT_BREAKPOINTS,
  DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN,
} from '@react-stuff/responsive';

import { Wrapper, Viewport, Parent, Pink, Blue } from './styles';

export function RelativeToViewport(): JSX.Element {
  return (
    <Wrapper>
      <Viewport>
        <ResponsiveGrid breakpoints={DEFAULT_BREAKPOINTS}>
          <ResponsiveUnit sizes={1 / 2}>
            <Pink>width: 50%</Pink>
          </ResponsiveUnit>
          <ResponsiveUnit sizes={1 / 2}>
            <Pink>width: 50%</Pink>
          </ResponsiveUnit>
          <ResponsiveUnit sizes={1 / 3} offsets={1 / 3}>
            <Pink>width: 33%</Pink>
          </ResponsiveUnit>
        </ResponsiveGrid>
      </Viewport>
    </Wrapper>
  );
}

export function RelativeToParent(): JSX.Element {
  return (
    <Wrapper>
      <Parent>
        <ResponsiveGrid
          breakpoints={DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN}
          isRelativeToParent
        >
          <ResponsiveUnit sizes={1 / 2}>
            <Blue>width: 50%</Blue>
          </ResponsiveUnit>
          <ResponsiveUnit sizes={1 / 2}>
            <Blue>width: 50%</Blue>
          </ResponsiveUnit>
          <ResponsiveUnit sizes={1 / 3} offsets={1 / 3}>
            <Blue>width: 33%</Blue>
          </ResponsiveUnit>
        </ResponsiveGrid>
      </Parent>
    </Wrapper>
  );
}

export default {
  title: 'Responsive/Grid',
};
