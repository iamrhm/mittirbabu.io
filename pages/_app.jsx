import Head from 'next/head';

import './style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Scrap Template</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}