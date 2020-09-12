import React from "react"

import Main from 'components/Main'
import Hero from 'components/Hero'
import { GetStaticProps } from 'next'
import { HomeLanguageType } from "locales/types"
import {NextSeo} from "next-seo"

export type HomeProps = {
  lang: HomeLanguageType
}


const Home = ( {lang}  : HomeProps) => {

  
  return (
    <>

<NextSeo
        title={lang.title}
        description={lang.description}
        canonical="https://luckynlive.com/"
        openGraph={{
          url: 'https://luckynlive.com/',
          title: `LuckynLive - ${lang.title}`,
          description:
           lang.description,
          images: [{ url: 'https://luckyinlive.com/img/cover.png' }],
          site_name: 'Lucky In Live',
          locale: lang.locale
        }}
      />

      <Hero >
        <Main lang={lang} />
      </Hero>
    </>
  )
 
}

export async function getStaticPaths() {

  const paths = [
    {params: {lang: 'pt'}},
    {params: {lang: 'en'}}
  ]

  return {paths , fallback: false }
}



export const getStaticProps: GetStaticProps = async ({params}) => {
  const lang = require(`../locales/${params!.lang}.json`)
  return { props: { lang } }
}

export default Home
 
