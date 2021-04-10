import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import PostCard from '../../components/posts/PostCard'
import Button from '../../components/common/BackToTopPageButton'

import { getAllTagIds } from '../../hooks/tag/getAllTagIds'
import { getTagPosts } from '../../hooks/tag/getTagPosts'

const Tag = ({ posts }) => {
  const postData = posts.items
  const router = useRouter()

  // titleを取得
  const tagTitle = postData.map((posts) => {
    return posts.fields.tag
      .map((tag) => {
        if (tag.sys.id === router.query.id) {
          return tag.fields.name
        }
      })
      .filter((tag) => {
        return tag !== undefined
      })
  })

  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-medium text-center mb-8">{tagTitle[0]}</h1>
        <div className="grid grid-cols-3 gap-4">
          {postData &&
            postData.map((post) => (
              <PostCard id={post.sys.id} key={post.sys.id} post={post.fields} />
            ))}
        </div>
        <Button />
      </div>
    </Layout>
  )
}

export default Tag

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllTagIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await getTagPosts(ctx.params.id)

  if (!response) {
    return {
      notFound: true
    }
  }
  return {
    props: { posts: response }
  }
}
