import React from 'react';
import {
  ResponsiveContainer,
  ResponsiveToggle,
  useWidth,
  DEFAULT_BREAKPOINTS,
  DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN,
} from '@react-stuff/responsive';

import getTitle from './getTitle';
import { Wrapper, Viewport, Parent, Pink, Blue } from './styles';

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
        <ResponsiveContainer breakpoints={DEFAULT_BREAKPOINTS}>
          <Pink>
            <Inner />
          </Pink>
        </ResponsiveContainer>
      </Viewport>
    </Wrapper>
  );
}

export function RelativeToParent(): JSX.Element {
  return (
    <Wrapper>
      <Parent>
        <ResponsiveContainer
          breakpoints={DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN}
          isRelativeToParent
        >
          <Blue>
            <Inner />
          </Blue>
        </ResponsiveContainer>
      </Parent>
    </Wrapper>
  );
}

export function Nested(): JSX.Element {
  return (
    <Wrapper>
      <Viewport>
        <ResponsiveContainer breakpoints={DEFAULT_BREAKPOINTS}>
          <Pink>
            <Inner />
            <br />
            <br />
            <ResponsiveContainer
              breakpoints={DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN}
              isRelativeToParent
            >
              <Blue>
                <Inner />
              </Blue>
            </ResponsiveContainer>
          </Pink>
        </ResponsiveContainer>
      </Viewport>
    </Wrapper>
  );
}

export default {
  title: getTitle('Container'),
};
