import React from 'react';
import {
  ResponsiveGrid,
  ResponsiveUnit,
  ResponsiveToggle,
  DEFAULT_BREAKPOINTS,
  DEFAULT_BREAKPOINTS_WITHOUT_MOBILE_MARGIN,
} from '@react-stuff/responsive';

import getTitle from './getTitle';
import { Wrapper, Viewport, Parent, Pink, Blue } from './styles';

export function RelativeToViewport(): JSX.Element {
  return (
    <Wrapper>
      <Viewport>
        <ResponsiveGrid breakpoints={DEFAULT_BREAKPOINTS}>
          <ResponsiveUnit
            sizes={{
              xsmall: 4 / 4,
              small: 3 / 6,
              medium: 3 / 8,
              large: 2.5 / 10,
              xlarge: 3 / 12,
            }}
          >
            <Pink>
              <ResponsiveToggle
                inline={{
                  xsmall: 'cols: 4 / 4',
                  small: 'cols: 3 / 6',
                  medium: 'cols: 3 / 8',
                  large: 'cols: 2.5 / 10',
                  xlarge: 'cols: 3 / 12',
                }}
              />
            </Pink>
          </ResponsiveUnit>
          <ResponsiveUnit
            sizes={{
              xsmall: 4 / 4,
              small: 3 / 6,
              medium: 5 / 8,
              large: 7.5 / 10,
              xlarge: 9 / 12,
            }}
          >
            <Pink>
              <ResponsiveToggle
                inline={{
                  xsmall: 'cols: 4 / 4',
                  small: 'cols: 3 / 6',
                  medium: 'cols: 5 / 8',
                  large: 'cols: 7.5 / 10',
                  xlarge: 'cols: 9 / 12',
                }}
              />
            </Pink>
          </ResponsiveUnit>
          <ResponsiveUnit
            sizes={{
              xsmall: 4 / 4,
              small: 4 / 6,
              medium: 4 / 8,
              large: 4 / 10,
              xlarge: 4 / 12,
            }}
            offsets={{
              xsmall: 0 / 4,
              small: 1 / 6,
              medium: 2 / 8,
              large: 3 / 10,
              xlarge: 4 / 12,
            }}
          >
            <Pink>
              <ResponsiveToggle
                inline={{
                  xsmall: 'cols: 4 / 4',
                  small: 'cols: 4 / 6',
                  medium: 'cols: 4 / 8',
                  large: 'cols: 4 / 10',
                  xlarge: 'cols: 4 / 12',
                }}
              />
            </Pink>
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
          <ResponsiveUnit
            sizes={{
              xsmall: 4 / 4,
              small: 3 / 6,
              medium: 3 / 8,
              large: 2.5 / 10,
              xlarge: 3 / 12,
            }}
          >
            <Blue>
              <ResponsiveToggle
                inline={{
                  xsmall: 'cols: 4 / 4',
                  small: 'cols: 3 / 6',
                  medium: 'cols: 3 / 8',
                  large: 'cols: 2.5 / 10',
                  xlarge: 'cols: 3 / 12',
                }}
              />
            </Blue>
          </ResponsiveUnit>
          <ResponsiveUnit
            sizes={{
              xsmall: 4 / 4,
              small: 3 / 6,
              medium: 5 / 8,
              large: 7.5 / 10,
              xlarge: 9 / 12,
            }}
          >
            <Blue>
              <ResponsiveToggle
                inline={{
                  xsmall: 'cols: 4 / 4',
                  small: 'cols: 3 / 6',
                  medium: 'cols: 5 / 8',
                  large: 'cols: 7.5 / 10',
                  xlarge: 'cols: 9 / 12',
                }}
              />
            </Blue>
          </ResponsiveUnit>
          <ResponsiveUnit
            sizes={{
              xsmall: 4 / 4,
              small: 4 / 6,
              medium: 4 / 8,
              large: 4 / 10,
              xlarge: 4 / 12,
            }}
            offsets={{
              xsmall: 0 / 4,
              small: 1 / 6,
              medium: 2 / 8,
              large: 3 / 10,
              xlarge: 4 / 12,
            }}
          >
            <Blue>
              <ResponsiveToggle
                inline={{
                  xsmall: 'cols: 4 / 4',
                  small: 'cols: 4 / 6',
                  medium: 'cols: 4 / 8',
                  large: 'cols: 4 / 10',
                  xlarge: 'cols: 4 / 12',
                }}
              />
            </Blue>
          </ResponsiveUnit>
        </ResponsiveGrid>
      </Parent>
    </Wrapper>
  );
}

export default {
  title: getTitle('Unit'),
};
