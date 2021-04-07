import { VFC } from 'react'
import { PostDetails } from '../../../types/PostDetailsType'

const PostDetailsTitle: VFC<Pick<PostDetails, 'title' | 'subTitle'>> = ({
  title,
  subTitle
}) => {
  return (
    <div>
      <h1 className="mb-1">{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default PostDetailsTitle
