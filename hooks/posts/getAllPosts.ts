import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllPosts = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'work',
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
