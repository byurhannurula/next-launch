import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next &ndash; Launch</title>
        <meta name="title" content="Next &ndash; Launch" />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
