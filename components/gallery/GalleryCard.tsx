import { VFC } from 'react'

import { Gallery } from '../../types/GalleryType'

const GalleryCard: VFC<Pick<Gallery, 'image'>> = ({ image }) => {
  return (
    <div>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
    </div>
  )
}

export default GalleryCard
