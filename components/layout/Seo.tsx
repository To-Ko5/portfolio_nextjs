import { FC } from 'react'
import Head from 'next/head'

interface METADATA {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
  pageImg?: string
  pageImgWidth?: number
  pageImgHeight?: number
}

const Seo: FC<METADATA> = (props) => {
  const defaultTitle = 'C-Portfolio'

  const title = props.pageTitle
    ? `${props.pageTitle} | ${defaultTitle}`
    : defaultTitle

  const description = props.pageDescription

  const url = props.pagePath

  const imgUrl = props.pageImg

  const imgWidth = props.pageImgWidth || 1280

  const imgHeight = props.pageImgHeight || 640

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="canonical" href={url} />
    </Head>
  )
}

export default Seo
