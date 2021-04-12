import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta>K.K Portfolio</meta>
        </Head>
          <body className="bg-fixed bg-gradient-to-b from-blue-100 to-blue-500 dark:from-dark-200 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
          </body>
      </Html>
    )
  }
}

export default MyDocument;