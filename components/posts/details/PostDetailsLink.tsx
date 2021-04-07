import { VFC } from 'react'
import { PostDetails } from '../../../types/PostDetailsType'

const PostDetailsLink: VFC<Pick<PostDetails, 'url'>> = ({ url }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="block w-full p-2 border border-gray-900 dark:border-white rounded cursor-pointer"
      >
        READ MORE
      </a>
    </div>
  )
}

export default PostDetailsLink
