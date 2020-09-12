import { AppProps } from 'next/app'
import Head from 'next/head'


import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import axios from 'axios';

import GlobalStyles from 'styles/global'


axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASEURL;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <ReactNotification />
  
      <Head>
        <title>Lucky In Live</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Easily pick a random participant during youtube live transmission"
        />
         <meta
          name="description"
          content="Facilmente selecione um participante da live no youtube"
        />
      </Head>
    

      <GlobalStyles />
      <Component {...pageProps} />
    
    </>
  )
}

export default App
