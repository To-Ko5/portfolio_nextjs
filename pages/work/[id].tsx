import { GetStaticPaths, GetStaticProps } from 'next'

import { getAllPostSIds } from '../../hooks/posts/getAllPostsIds'
import { getPostDetails } from '../../hooks/posts/getPostDetails'

const Work = ({ post }) => {
  console.log(post)
  return (
    <div>
      <p>{post.fields.title}</p>
    </div>
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
  const post = await getPostDetails(ctx.params.id)
  return {
    props: {
      post
    }
  }
}
