import { VFC } from 'react'

import { Gallery } from '../../types/GalleryType'

interface Props extends Pick<Gallery, 'image'> {
  id: string
  tagMenuId: string
  toggleModal: () => void
}

const GalleryCard: VFC<Props> = ({ id, tagMenuId, image, toggleModal }) => {
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
    <div style={style} onClick={toggleModal}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        className="bg-opacity-20 bg-gray-400 cursor-pointer"
      />
    </div>
  )
}

export default GalleryCard
