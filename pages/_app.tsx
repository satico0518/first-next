import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}

export default MyApp
