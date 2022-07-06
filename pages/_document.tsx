import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="has-navbar-fixed-top">
      <Head>
        <title>Portfolio website</title>
        <meta property="og:title" content="Max Zolotarenko | Front End Web Developer" />
        <meta name="description" content="Full stack developer portfolio website" />
        <meta name="keyword" content="portfolio, javascript, developer, angular, typescript" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}