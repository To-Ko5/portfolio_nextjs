import { createClient } from '../../library/contentful'

const client = createClient()

export const getPostDetails = async (params) => {
  try {
    const response = await client
      .getEntries({
        content_type: 'work',
        'sys.id': params
      })
      .catch((error: string) => {
        throw new Error(error)
      })
    return response.items[0]
  } catch (error) {
    throw new Error(error)
  }
}
