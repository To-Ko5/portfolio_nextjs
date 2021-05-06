import { VFC } from 'react'
import Link from 'next/link'
import { PostCategory } from '../../types/PostType'

const CategoryLinkButton: VFC<PostCategory> = ({ id, name }) => {
  return (
    <div className="text-center">
      <Link href={`/category/${id}`}>
        <a className="block w-full p-2 border border-gray-900 dark:border-white rounded  hover:bg-opacity-20 hover:bg-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-gray-400 transition-colors cursor-pointer">
          {name}
        </a>
      </Link>
    </div>
  )
}

export default CategoryLinkButton
