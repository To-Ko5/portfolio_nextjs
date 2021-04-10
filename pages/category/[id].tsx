import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import PostCard from '../../components/posts/PostCard'
import Button from '../../components/common/BackToTopPageButton'

import { getAllCategoryIds } from '../../hooks/category/getAllCategoryIds'
import { getCategoryPosts } from '../../hooks/category/getCategoryPosts'

const Category = ({ posts }) => {
  const postData = posts.items

  // titleを取得
  const categoryTitle = postData.map((post, index) => {
    if (index === 0) {
      return post.fields.category.fields.name
    }
  })

  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-8">
          {categoryTitle}
        </h1>
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

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCategoryIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await getCategoryPosts(ctx.params.id)

  if (!response) {
    return {
      notFound: true
    }
  }
  return {
    props: { posts: response }
  }
}
