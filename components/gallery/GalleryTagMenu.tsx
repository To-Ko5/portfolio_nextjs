import { VFC } from 'react'

import { GalleryTag as GalleryTagType } from '../../types/GalleryType'

interface Props {
  tag: GalleryTagType
  tagMenuId: string
  clickTabMenu: (key: string) => void
}
const GalleryTagMenu: VFC<Props> = ({ tag, tagMenuId, clickTabMenu }) => {
  const nomalStyle =
    'px-6 py-4 border-b-2 border-transparent focus:outline-none'
  const activeStyle = `${nomalStyle} border-deep-blue`

  const style = tag.id !== tagMenuId ? nomalStyle : activeStyle

  return (
    <div>
      <button className={style} onClick={() => clickTabMenu(tag.id)}>
        {tag.name}
      </button>
    </div>
  )
}

export default GalleryTagMenu
