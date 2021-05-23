import { VFC } from 'react'

import TagsListLink from './TagsListLink'
import { PostTag } from '../../types/PostType'

const TagsList: VFC<{ tags: PostTag[] }> = ({ tags }) => {
  const style = {
    transform: 'translateX(100%)',
    top: '-10px',
    right: '-10px'
  }
  return (
    <div
      className="absolute z-20 rounded bg-gray-50 dark:bg-dark-black py-2 shadow-2xl"
      style={style}
    >
      {tags &&
        tags.map((tag) => (
          <TagsListLink key={tag.id} id={tag.id} name={tag.name} />
        ))}
    </div>
  )
}

export default TagsList
