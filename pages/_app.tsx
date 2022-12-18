import { Global } from '@emotion/react'
import { global } from '../styles/globals'
import type { AppProps } from 'next/app'

declare global { // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  
  return (
  <>
    <Global styles={global}/>
    <Component {...pageProps} />
  </>
  )
}


