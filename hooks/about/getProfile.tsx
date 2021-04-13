import { createClient } from '../../library/contentful'

const client = createClient()

export const getProfile = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: 'profile'
      })
      .catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    return response.items
  } catch (error) {
    console.error(error)
  }
}
