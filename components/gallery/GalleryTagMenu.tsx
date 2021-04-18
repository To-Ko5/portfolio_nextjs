import { VFC } from 'react'

import { Gallery } from '../../types/GalleryType'

const GalleryTag: VFC<Pick<Gallery, 'tag'>> = ({ tag }) => {
  return <div>{tag.name}</div>
}

export default GalleryTag
