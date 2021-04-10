import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllTagIds = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'tag',
        order: '-sys.createdAt'
      })
      .catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    return response.items.map((tag) => {
      return {
        params: {
          id: String(tag.sys.id)
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
}
