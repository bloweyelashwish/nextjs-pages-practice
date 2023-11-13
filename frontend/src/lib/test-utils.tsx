import React from 'react';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { Themes } from '~/styles/themes';

const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={Themes.light}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ThemeWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
