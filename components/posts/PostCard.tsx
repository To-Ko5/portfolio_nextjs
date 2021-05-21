import { VFC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import TagsList from '../tag/TagsList'
import { PostFields } from '../../types/PostFieldsType'
import {
  PostImage,
  PostArticle,
  PostCategory,
  PostTag
} from '../../types/PostType'
import ImageStyle from '../../styles/Image.module.css'

interface Props {
  id: number
  post: PostFields
}

const PostCard: VFC<Props> = ({ id, post }) => {
  const image: PostImage = {
    src: `https:${post.image.fields.file.url}`,
    alt: post.image.fields.title,
    width: post.image.fields.file.details.image.width,
    height: post.image.fields.file.details.image.height
  }

  const article: Omit<PostArticle, 'content'> = {
    title: post.title,
    subTitle: post.subtitle
  }

  const category: PostCategory = {
    id: post.category.sys.id,
    name: post.category.fields.name
  }

  const tags: PostTag[] = []
  post.tag.map((e) => {
    tags.push({ id: e.sys.id, name: e.fields.name })
  })

  const [isTagsList, setIsTagsList] = useState(false)

  const tabButtonMouseOver = () => {
    setIsTagsList(true)
  }

  const tabButtonMouseOut = () => {
    setIsTagsList(false)
  }

  return (
    <div className="bg-gray-50 dark:bg-dark2-black rounded shadow-md">
      <div className={ImageStyle.image}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="relative p-4">
        <p className="font-semibold text-lg">{article.title}</p>
        <p className="mb-5 text-sm">{article.subTitle}</p>
        <div className="mb-5">
          <div className="flex mb-4">
            <Link href="/category">
              <a className="flex items-center px-1 text-xs border border-gray-400 rounded text-gray-400 hover:bg-opacity-20 hover:bg-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-gray-400 transition-colors">
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
                CATEGORY
              </a>
            </Link>
            <div>
              <Link href={`/category/${category.id}`}>
                <a className="px-2 py-1 ml-4 dark:bg-dark-black rounded shadow text-sm hover:bg-opacity-20 hover:bg-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-gray-400 transition-colors">
                  {category.name}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div onMouseLeave={tabButtonMouseOut}>
          <div className="inline-flex mb-4 relative">
            <Link href="/tag">
              <a className="flex items-center px-1 text-xs border border-gray-400 rounded text-gray-400 hover:bg-opacity-20 hover:bg-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-gray-400 transition-colors">
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
            <div>
              <button
                className="h-full px-2 ml-4 dark:bg-dark-black rounded shadow text-sm focus:outline-none hover:bg-opacity-20 hover:bg-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-gray-400 transition-colors"
                onMouseOver={tabButtonMouseOver}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </div>
            {isTagsList && <TagsList tags={tags} />}
          </div>

          <div className="absolute bottom-5 right-3">
            <Link href={`/work/${id}`}>
              <a className="border border-deep-blue text-deep-blue font-medium rounded p-2 hover:bg-opacity-20 hover:bg-deep-blue transition-colors">
                READ MORE
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
