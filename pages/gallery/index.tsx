import { VFC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'

import { GalleryTag, Gallery } from '../../types/GalleryType'
import { getAllGalleries } from '../../hooks/gellery/getAllGalleries'

interface Props {
  tags: GalleryTag[]
  galleries: Gallery[]
}

const GalleryIndex: VFC<Props> = ({ tags, galleries }) => {
  return (
    <Layout>
      <Seo />
    </Layout>
  )
}

export default GalleryIndex

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllGalleries()

  if (!response) {
    return {
      notFound: true
    }
  }

  return {
    props: { tags: response.galleriesTag, galleries: response.galleries }
  }
}
