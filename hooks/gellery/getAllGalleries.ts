import { createClient } from '../../library/contentful'

const client = createClient()

export const getAllGalleries = async () => {
  try {
    const [response] = await Promise.all([
      client.getEntries({
        content_type: 'gallery',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        content_type: 'galleryTag',
        order: 'sys.id'
      })
    ]).catch((error) => error)

    if (response.sys.type === 'Error') {
      throw new Error(response.message)
    }

    const galleriesTag = response.includes.Entry.map((e) => {
      return {
        id: e.sys.id,
        name: e.fields.name
      }
    })
    
    const galleries = response.items.map((e) => {
      return {
        id: e.sys.id,
        title: e.fields.title,
        description: e.fields.description,
        tag: e.fields.tag,
        image: e.fields.image
      }
    })

    return { galleriesTag, galleries }
  } catch (error) {
    console.error(error)
  }
}
