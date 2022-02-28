import type { AppProps } from 'next/app'
import { applyGlobalCss } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  applyGlobalCss()

  return <Component {...pageProps} />
}

export default MyApp
