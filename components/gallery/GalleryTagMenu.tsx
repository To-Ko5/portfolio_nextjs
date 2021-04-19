import { VFC } from 'react'

import { GalleryTag as GalleryTagType } from '../../types/GalleryType'

interface Props {
  tag: GalleryTagType
  clickTabMenu: (key: string) => void
}
const GalleryTagMenu: VFC<Props> = ({ tag, clickTabMenu }) => {
  return (
    <div>
      <button onClick={() => clickTabMenu(tag.id)} className="bg-red-100">
        {tag.name}
      </button>
    </div>
  )
}

export default GalleryTagMenu
