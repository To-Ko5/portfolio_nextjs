import { VFC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import PostDetailsImage from '../../components/posts/details/PostDetailsImage'
import PostDetailsTitle from '../../components/posts/details/PostDetailsTitle'
import PostDetailsCategory from '../../components/posts/details/PostDetailsCategory'
import PostDetailsTags from '../../components/posts/details/PostDetailsTags'
import PostDetailsContent from '../../components/posts/details/PostDetailsContent'
import PostDetailsLink from '../../components/posts/details/PostDetailsLink'
import Button from '../../components/common/buttons/BackToTopPageButton'

import { getAllPostsIds } from '../../hooks/posts/getAllPostsIds'
import { getPostDetails } from '../../hooks/posts/getPostDetails'
import { PostFields } from '../../types/PostFieldsType'
import { PostDetails } from '../../types/PostDetailsType'

interface Props {
  post: PostDetails
}

const Work: VFC<Props> = ({ post }) => {
  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto px-4">
        <PostDetailsImage image={post.image} />
        <PostDetailsTitle title={post.title} subTitle={post.subTitle} />
        <PostDetailsCategory category={post.category} />
        <PostDetailsTags tags={post.tags} />
        <PostDetailsContent content={post.content} />
        {post.url && <PostDetailsLink url={post.url} />}
        <Button />
      </div>
    </Layout>
  )
}

export default Work

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response: any = await getPostDetails(ctx.params.id)

  if (!response) {
    return {
      notFound: true
    }
  }

  const fields = response.fields as PostFields

  // tagは複数あることもあるので展開する
  const tags = fields.tag.map((e) => {
    return { id: e.sys.id, name: e.fields.name }
  })

  const post = {
    title: fields.title,
    subTitle: fields.subtitle,
    category: {
      id: fields.category.sys.id,
      name: fields.category.fields.name
    },
    tags: tags,
    content: fields.content,
    image: {
      src: `https:${fields.image.fields.file.url}`,
      alt: fields.image.fields.title,
      width: fields.image.fields.file.details.image.width,
      height: fields.image.fields.file.details.image.height
    },
    url: fields.url ? fields.url : ''
  }
  return {
    props: {
      post
    }
  }
}
