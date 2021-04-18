import { VFC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import CategoryLinkButton from '../../components/category/CategoryLinkButton'

import { getAllCategory } from '../../hooks/category/getAllCategory'
import { PostCategory } from '../../types/PostType'

interface Props {
  categories: PostCategory[]
}

const categoryIndex: VFC<Props> = ({ categories }) => {
  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-8">Category</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories &&
            categories.map((category) => (
              <CategoryLinkButton
                key={category.id}
                id={category.id}
                name={category.name}
              />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default categoryIndex

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategory()

  if (!categories) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      categories
    }
  }
}
