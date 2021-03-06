import { VFC } from 'react'

import { Gallery } from '../../types/GalleryType'

interface Props {
  modalImage: Gallery
  toggleModal: () => void
}

const GalleryModal: VFC<Props> = ({ modalImage, toggleModal }) => {
  return (
    <div
      className="fixed z-10 top-0 bg-black bg-opacity-80 h-full w-full flex justify-center items-center"
      onClick={toggleModal}
    >
      <div className="px-2">
        <div className="mb-4 max-w-5xl">
          <img
            src={modalImage.image.src}
            alt={modalImage.image.alt}
            width={modalImage.image.width}
            height={modalImage.image.height}
            loading="lazy"
            style={{ maxHeight: '60vh' }}
          />
        </div>
        <div className="text-gray-100">
          <p className="mb-2 font-semibold md:text-lg">{modalImage.title}</p>
          <p>{modalImage.description}</p>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
