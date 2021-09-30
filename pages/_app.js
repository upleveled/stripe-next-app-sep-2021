import { Global } from '@emotion/react';
import Head from 'next/head';
import { Header } from '../components/Header.js';
import { myGlobalStyles } from '../styles/globalStyles.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={myGlobalStyles} />
      <Head>
        <title>UpLeveled - stripe</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
