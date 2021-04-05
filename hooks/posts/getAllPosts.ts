import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllPosts = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'work',
        order: '-sys.createdAt'
      })
      .catch((error: string) => {
        throw new Error(error)
      })
    return response
  } catch (error) {
    throw new Error(error)
  }
}
