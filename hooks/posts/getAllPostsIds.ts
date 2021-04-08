import { error } from 'node:console'
import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllPostSIds = async () => {
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

    return response.items.map((post) => {
      return {
        params: {
          id: String(post.sys.id)
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
}
