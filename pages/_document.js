import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://portfolio-mickencz.vercel.app/" />
        <script defer src="https://kit.fontawesome.com/2f83740298.js" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
        <meta name="description" content="Portfolio of Michael Cirkl" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Michael Cirkl" />
        <meta name="keywords" content="Portfolio, React, Next.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}