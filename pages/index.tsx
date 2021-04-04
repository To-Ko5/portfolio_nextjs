import { GetStaticProps } from 'next'

import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import PostCard from '../components/posts/PostCard'
import { getAllPosts } from '../hooks/getAllPosts'

const Home = ({ posts }) => {
  const postData = posts.items
  // console.log(postData)
  return (
    <Layout>
      <Seo />
      <main className="">
        {postData &&
          postData.map((post) => (
            <PostCard key={post.sys.id} id={post.sys.id} post={post.fields} />
          ))}
      </main>
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
