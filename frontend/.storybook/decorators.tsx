import React from 'react';
import type { Decorator } from '@storybook/react';
import { ThemeProvider, Global } from '@emotion/react';

import { backgrounds } from './preview';

import { GlobalStyles } from '~/styles/global';
import { Themes } from '~/styles/themes';
import { SharedDefaults } from '~/components/SharedDefaults';

export const withThemeProvider: Decorator = (Story, context) => {
  const background =
    context.globals.backgrounds?.value || backgrounds.defaultColor;

  const theme =
    Object.values(Themes).find((theme) => theme.background === background) ??
    {};

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const withGlobalStyles: Decorator = (Story, context) => (
  <SharedDefaults>
    <Global styles={GlobalStyles} />
    <Story {...context} />
  </SharedDefaults>
);
