import { createClient } from '../../library/contentful'

const client = createClient()

export const getTagPosts = async (params) => {
  try {
    const response = await client
      .getEntries({
        content_type: 'work',
        'fields.tag.sys.id': params,
        order: '-sys.createdAt'
      })
      .catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    return response
  } catch (error) {
    console.error(error)
  }
}
