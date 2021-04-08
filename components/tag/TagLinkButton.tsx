import { VFC } from 'react'
import Link from 'next/link'
import { PostTag } from '../../types/PostType'

const TagLinkButton: VFC<PostTag> = ({ id, name }) => {
  return (
    <div className="text-center">
      <Link href={`/tag/${id}`}>
        <a className="block w-full p-2 border border-gray-900 dark:border-white rounded cursor-pointer">
          {name}
        </a>
      </Link>
    </div>
  )
}

export default TagLinkButton
