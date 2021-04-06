import { VFC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'

import { getAllPostSIds } from '../../hooks/posts/getAllPostsIds'
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
  const response: any = await getPostDetails(ctx.params.id)
  const fields = response.fields as PostFields
  const post = {
    title: fields.title,
    subTitle: fields.title,
    category: {
      id: fields.category.sys.id,
      name: fields.category.fields.name
    },
    tag: fields.tag,
    content: fields.content,
    image: {
      src: `https:${fields.image.fields.file.url}`,
      alt: fields.image.fields.title,
      width: fields.image.fields.file.details.image.width,
      height: fields.image.fields.file.details.image.height
    }
  }
  return {
    props: {
      post
    }
  }
}
