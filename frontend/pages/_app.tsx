import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
