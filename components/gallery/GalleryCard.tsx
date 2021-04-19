import { VFC } from 'react'

import { Gallery } from '../../types/GalleryType'

interface Props extends Pick<Gallery, 'image'> {
  id: string
  tabMenuId: string
}

const GalleryCard: VFC<Props> = ({ id, tabMenuId, image }) => {
  let style
  if (tabMenuId === 'all' || id === tabMenuId) {
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
