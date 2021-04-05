import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllPostSIds = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'work',
        order: '-sys.createdAt'
      })
      .catch((error: string) => {
        throw new Error(error)
      })

    return response.items.map((post) => {
      return {
        params: {
          id: String(post.sys.id)
        }
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}
