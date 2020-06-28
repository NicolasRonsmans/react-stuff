import React from 'react';
import {
  ResponsiveProvider,
  ResponsiveToggle,
  useWidth,
  DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN,
} from '@react-stuff/responsive';

import getTitle from './getTitle';
import { Wrapper, Viewport, Parent } from './styles';

function Inner() {
  const containerWidth = useWidth();

  return (
    <>
      breakpoint:{' '}
      <ResponsiveToggle
        inline={{
          xsmall: 'xsmall',
          small: 'small',
          medium: 'medium',
          large: 'large',
          xlarge: 'xlarge',
        }}
      />{' '}
      ({Math.round(containerWidth)}px)
    </>
  );
}

export function RelativeToViewport(): JSX.Element {
  return (
    <Wrapper>
      <Viewport>
        <ResponsiveProvider>
          <Inner />
        </ResponsiveProvider>
      </Viewport>
    </Wrapper>
  );
}

export function RelativeToParent(): JSX.Element {
  return (
    <Wrapper>
      <Parent>
        <ResponsiveProvider
          breakpoints={DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN}
          isRelativeToParent
        >
          <Inner />
        </ResponsiveProvider>
      </Parent>
    </Wrapper>
  );
}

export default {
  title: getTitle('Provider'),
};
