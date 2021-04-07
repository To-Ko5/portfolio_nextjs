import { VFC } from 'react'
import Link from 'next/link'
import { PostDetails } from '../../../types/PostDetailsType'

const PostDetailsTags: VFC<Pick<PostDetails, 'tags'>> = ({ tags }) => {
  return (
    <div className="flex mb-8">
      <Link href="">
        <a className="flex items-center mr-4 px-1 text-xs border border-gray-400 rounded  text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="4-5 w-4 mr-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          TAG
        </a>
      </Link>
      <div className="flex">
        {tags &&
          tags.map((tag) => (
            <div key={tag.id}>
              <Link href="">
                <a className="px-2 py-1 mr-1  dark:bg-dark-black rounded shadow text-sm">
                  # {tag.name}
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PostDetailsTags
