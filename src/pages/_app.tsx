import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/tomorrow.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
