import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllCategory = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'category',
        order: '-sys.id'
      })
      .catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    const categories = response.items.map((e) => {
      return {
        id: e.sys.id,
        name: e.fields.name
      }
    })
    return categories
  } catch (error) {
    console.error(error)
  }
}
