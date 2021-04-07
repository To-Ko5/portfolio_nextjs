import { VFC } from 'react'
import { PostDetails } from '../../../types/PostDetailsType'

const PostDetailsTitle: VFC<Pick<PostDetails, 'title' | 'subTitle'>> = ({
  title,
  subTitle
}) => {
  return (
    <div className="mb-4">
      <h1 className="mb-1 text-3xl font-semibold">{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default PostDetailsTitle
