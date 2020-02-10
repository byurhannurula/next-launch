import React from 'react'
import Head from 'next/head'

import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next &ndash; Launch</title>
        <meta name="title" content="Next &ndash; Launch" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
