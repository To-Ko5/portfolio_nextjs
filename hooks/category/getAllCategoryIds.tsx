import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllCategoryIds = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'category',
        order: '-sys.createdAt'
      })
      .catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    return response.items.map((category) => {
      return {
        params: {
          id: String(category.sys.id)
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
}
