import { Html, Head, Main, NextScript } from 'next/document';
import { Global } from '@emotion/react';

import { GlobalStyles } from '~/styles/global';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Global styles={GlobalStyles} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
