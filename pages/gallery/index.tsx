import { GetStaticProps } from 'next'
import { getAllGalleries } from '../../hooks/gellery/getAllGalleries'

const GalleryIndex = ({ tags, galleries }) => {
  return <div></div>
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
