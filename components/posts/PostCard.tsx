import Image from 'next/image'
import Link from 'next/link'

import {
  PostImage,
  PostArticle,
  PostCategory,
  PostTags
} from '../../types/PostType'

const PostCard = ({ id, post }) => {
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

  const tags: PostTags[] = []
  post.tag.map((e) => {
    tags.push({ id: e.sys.id, name: e.fields.name })
  })

  return (
    <div className="relative bg-gray-50 dark:bg-dark2-black rounded overflow-hidden shadow-md">
      <div>
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
      <div className="p-4">
        <p className="font-semibold text-lg">{article.title}</p>
        <p className="mb-5 text-sm">{article.subTitle}</p>
        <div className="mb-5">
          <span className="text-xs border border-gray-400 rounded p-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
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
          </span>
          <button className="p-1 ml-4 dark:bg-dark-black rounded shadow">
            {category.name}
          </button>
        </div>
        <div>
          <span className="text-xs border border-gray-400 rounded p-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
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
          </span>
          <button className="p-1 px-3 ml-4 dark:bg-dark-black rounded shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
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

        <div className="absolute bottom-3.5 right-3.5">
          <Link href={`/work/${id}`}>
            <a className="border border-blue-400 rounded p-1 text-blue-400">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
