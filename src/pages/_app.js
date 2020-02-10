import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next &ndash; Launch</title>
        <meta name="title" content="Next &ndash; Launch" />
      </Head>
      <Header />
      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
