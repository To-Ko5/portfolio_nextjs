import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body className="font-robot">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
