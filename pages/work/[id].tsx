import { VFC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'

import { getAllPostSIds } from '../../hooks/posts/getAllPostsIds'
import { getPostDetails } from '../../hooks/posts/getPostDetails'
import { PostDetails } from '../../types/PostDetailsType'

interface Props {
  post: PostDetails
}

const Work: VFC<Props> = ({ post }) => {
  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto ">{post.title}</div>
    </Layout>
  )
}

export default Work

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await getPostDetails(ctx.params.id)
  const post = {
    title: response.fields.title,
    subTitle: response.fields.title,
    category: {
      id: response.fields.category.sys.id,
      name: response.fields.category.fields.name
    },
    tag: response.fields.tag,
    content: response.fields.content,
    image: {
      src: `https:${response.fields.image.fields.file.url}`,
      alt: response.fields.image.fields.title,
      width: response.fields.image.fields.file.details.image.width,
      height: response.fields.image.fields.file.details.image.height
    }
  }
  return {
    props: {
      post
    }
  }
}
