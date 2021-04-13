import { createClient } from '../../library/contentful'

const client = createClient()

export const getSearchPosts = async (params) => {
  try {
    const response = await client
      .getEntries({
        content_type: 'work',
        query: params,
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
