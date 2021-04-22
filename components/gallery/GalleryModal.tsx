import { VFC } from 'react'

import { Gallery } from '../../types/GalleryType'

interface Props {
  modalImage: Gallery
  toggleModal: () => void
}

const GalleryModal: VFC<Props> = ({ modalImage, toggleModal }) => {
  return (
    <div
      className="fixed z-10 top-0 bg-black bg-opacity-60 h-full w-full flex justify-center items-center"
      onClick={toggleModal}
    >
      <div className="px-2">
        <div className="max-w-5xl">
          <img
            src={modalImage.image.src}
            alt={modalImage.image.alt}
            width={modalImage.image.width}
            height={modalImage.image.height}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
