import { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import {NextSeo} from "next-seo"

import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import axios from 'axios';

import GlobalStyles from 'styles/global'


axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASEURL;

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
          content="Easily pick a random participant during youtube live transmission"
        />
      </Head>
      <NextSeo
        title="Lucky In Live - Pick a Random User During a Youtube Live Transmission"
        description="Easily pick a random participant during youtube live transmission"
        canonical="https://luckyinlive.vercel.app/"
        openGraph={{
          url: 'https://luckyinlive.vercel.app/',
          title:
            'Lucky In Live - Easily pick a random participant during youtube live transmission',
          description:
            'Easily pick a random participant during youtube live transmission',
          images: [{ url: 'https://luckyinlive.vercel.app/img/cover.png' }],
          site_name: 'Lucky In Libe',
          locale: 'en_US'
        }}
      />

      <GlobalStyles />
      <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

export default App
