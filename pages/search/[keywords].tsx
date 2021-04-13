import { GetServerSideProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import PostCard from '../../components/posts/PostCard'
import Button from '../../components/common/buttons/BackToTopPageButton'

import { getSearchPosts } from '../../hooks/search/getSearchPosts'

const SearchKeywords = ({ posts, title }) => {
  const postData = posts.items

  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-8">{title}</h1>
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

export default SearchKeywords

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await getSearchPosts(ctx.query.keywords)

  if (!response) {
    return {
      notFound: true
    }
  }

  return {
    props: { posts: response, title: ctx.query.keywords }
  }
}
