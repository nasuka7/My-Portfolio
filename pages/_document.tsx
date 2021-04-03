import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body className="bg-tokyo-img bg-opacity-40 bg-cover bg-no-repeat dark:bg-gray-900 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument