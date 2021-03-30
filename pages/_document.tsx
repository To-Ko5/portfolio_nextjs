import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body className="font-robot bg-white text-gray-900 dark:bg-darkest-black dark:text-white h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
