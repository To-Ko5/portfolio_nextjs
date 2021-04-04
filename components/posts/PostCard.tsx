import Image from 'next/image'

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
    <div className="bg-gray-50 dark:bg-dark-black shadow-md">
      <div className="">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>
      <p>{article.title}</p>
      <p>{article.subTitle}</p>
      <div>{/* {category.id},{category.name} */}</div>
      <div>
        {tags &&
          tags.map((tag) => (
            <div key={tag.id}>
              {tag.id},{tag.name}
            </div>
          ))}
      </div>
    </div>
  )
}

export default PostCard
