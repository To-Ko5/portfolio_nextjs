import { createClient } from '../../library/contentful'

const client = createClient()

export const getPostDetails = async (params) => {
  try {
    const response = await client
      .getEntries({
        content_type: 'work',
        'sys.id': params
      })
      .catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    return response.items[0]
  } catch (error) {
    console.error(error)
  }
}
