import { GetStaticProps } from 'next'

import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import PostCard from '../components/posts/PostCard'
import { getAllPosts } from '../hooks/posts/getAllPosts'

const Home = ({ posts }) => {
  const postData = posts.items
  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {postData &&
            postData.map((post) => (
              <PostCard id={post.sys.id} key={post.sys.id} post={post.fields} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllPosts()
  if (!response) {
    return {
      notFound: true
    }
  }
  return {
    props: { posts: response }
  }
}
