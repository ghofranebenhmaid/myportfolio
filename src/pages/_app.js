import React, { useState, useEffect } from 'react';

import Head from 'next/head'
import Layout from '../components/Layout'

import '../styles/globals.scss'
import '../styles/style.scss'

function MyApp ({ Component, pageProps })
{
  // const [loading, setLoading] = useState(false);

  // useEffect(() =>
  // {
  //   setTimeout(() => setLoading(true), 2300);
  // });

  <Layout>
    <Head>
      <title>Ibh</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </Layout >
  return (
    <Component { ...pageProps } />
    // <>
    //   { loading ? (
    //     // <React.Fragment>
    //     // </React.Fragment>
    //   ) : (
    //     <p>Loading... </p>
    //   ) }
    // </>
  );
}

export default MyApp
