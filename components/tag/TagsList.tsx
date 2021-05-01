import { VFC } from 'react'
import { PostTag } from '../../types/PostType'

const TagsList: VFC<{ tags: PostTag[] }> = ({ tags }) => {
  const style = {
    transform: 'translateX(100%)',
    right: '-10px'
  }
  return (
    <div className="absolute" style={style}>
      {tags && tags.map((tag) => <div key={tag.id}>{tag.name}</div>)}
    </div>
  )
}

export default TagsList
