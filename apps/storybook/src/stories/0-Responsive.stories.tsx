import React from 'react';
// import { action } from '@storybook/addon-actions';

import { ResponsiveProvider } from '@react-stuff/responsive';

export default {
  title: 'Responsive',
  component: ResponsiveProvider,
};

export function Provider(): JSX.Element {
  return <ResponsiveProvider>This is the provider</ResponsiveProvider>;
}
