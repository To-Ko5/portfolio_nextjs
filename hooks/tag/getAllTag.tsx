import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllTag = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'tag',
        order: '-sys.id'
      })
      .catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    const tags = response.items.map((e) => {
      return {
        id: e.sys.id,
        name: e.fields.name
      }
    })

    return tags
  } catch (error) {
    console.error(error)
  }
}
