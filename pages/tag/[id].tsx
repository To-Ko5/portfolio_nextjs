import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import PostCard from '../../components/posts/PostCard'
import Button from '../../components/common/buttons/BackToTopPageButton'

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
      <Seo pageTitle={tagTitle[0]} />
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-8">
          <Link href="/tag">
            <a className="p-2 text-xs border border-gray-400 rounded text-gray-400 hover:bg-opacity-20 hover:bg-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-gray-400 transition-colors">
              TAG
            </a>
          </Link>
          <h1 className="text-3xl font-medium mt-4">{tagTitle[0]}</h1>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
