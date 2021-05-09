import {Global} from '../styles/global';
import Head from 'next/head';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Robin White - Web and Mobile Developer</title>
        <meta name="title" content="Robin White - Web and Mobile Developer"/>
        <meta name="description" content="Blah blah blah blah"/>
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
