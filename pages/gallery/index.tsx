import { VFC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import GalleryCard from '../../components/gallery/GalleryCard'

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
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-8">Gallery</h1>
        <div className="grid items-center grid-cols-2 gap-4 md:grid-cols-3">
          {galleries &&
            galleries.map((gallery) => <GalleryCard image={gallery.image} />)}
        </div>
      </div>
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
