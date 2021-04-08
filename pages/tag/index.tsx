import { VFC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../../components/layout/Layout'
import Seo from '../../components/layout/Seo'
import TagLinkButton from '../../components/tag/TagLinkButton'

import { getAllTag } from '../../hooks/tag/getAllTag'
import { PostTag } from '../../types/PostType'

interface Tags {
  [index: string]: PostTag[]
}

const tagIndex: VFC<Tags> = ({ tags }) => {
  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-8">Tag</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {tags &&
            tags.map((tag) => (
              <TagLinkButton key={tag.id} id={tag.id} name={tag.name} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default tagIndex

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTag()

  console.log(tags)
  if (!tags) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      tags
    }
  }
}
