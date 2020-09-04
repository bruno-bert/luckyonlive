import { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr';

import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import axios from 'axios';

import GlobalStyles from 'styles/global'


axios.defaults.baseURL = 'http://localhost:3000/api';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <ReactNotification />
    <SWRConfig
            value={{ fetcher: (url: string) => axios(url).then(r => r.data) }}
          >
      <Head>
        <title>Lucky In Live</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Selecionar um usuário que comentar no chat de uma live no youtube"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

export default App
