import type { Preview } from '@storybook/react';

import { withThemeProvider, withGlobalStyles } from './decorators';

const decorators = [withGlobalStyles, withThemeProvider];

export const backgrounds = {
  default: 'dark',
  defaultColor: '#5e5c64',
  values: [
    { name: 'dark', value: '#5e5c64' },
    { name: 'light', value: '#e4ebf5' },
  ],
};

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  backgrounds,
};

const preview: Preview = {
  parameters,
  decorators,
};

export default preview;
