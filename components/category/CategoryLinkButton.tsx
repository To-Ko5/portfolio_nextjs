import { VFC } from 'react'
import Link from 'next/link'
import { PostCategory } from '../../types/PostType'

const CategoryLinkButton: VFC<PostCategory> = ({ id, name }) => {
  return (
    <div className="text-center">
      <Link href={`/category/${id}`}>
        <a className="block w-full p-2 border border-gray-900 dark:border-white rounded cursor-pointer">
          {name}
        </a>
      </Link>
    </div>
  )
}

export default CategoryLinkButton
