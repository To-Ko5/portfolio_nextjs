import { VFC } from 'react'

import { Gallery } from '../../types/GalleryType'

interface Props extends Pick<Gallery, 'image'> {
  id: string
  tagMenuId: string
}

const GalleryCard: VFC<Props> = ({ id, tagMenuId, image }) => {
  let style
  if (tagMenuId === 'all' || id === tagMenuId) {
    style = {
      display: 'block'
    }
  } else {
    style = {
      display: 'none'
    }
  }
  return (
    <div style={style}>
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
