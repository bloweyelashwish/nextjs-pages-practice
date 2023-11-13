import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import { Themes } from '~/styles/themes';
import { Layout } from '~/components/Layout';
import { SharedDefaults } from '~/components/SharedDefaults';

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const theme = Themes[isDark ? 'dark' : 'light'];
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    setIsDark(window.matchMedia('prefers-color-scheme: dark').matches);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SharedDefaults>
        <Layout onThemeToggle={toggleTheme} isDark={isDark}>
          <Component {...pageProps} />
        </Layout>
      </SharedDefaults>
    </ThemeProvider>
  );
}
