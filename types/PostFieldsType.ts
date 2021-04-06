export interface PostFields {
  title: string
  slug: string
  subtitle: string
  date: Date
  category: {
    metadata: { tags: [] }
    sys: {
      space: []
      id: string
      type: string
      createdAt: Date
      updatedAt: Date
      environment: []
      revision: number
      contentType: []
      locale: string
    }
    fields: { name: string }
  }
  tag: [{ metadata: []; sys: { id: string }; fields: { name: string } }]
  content: string
  image: {
    metadata: { tags: [] }
    sys: {
      space: []
      id: string
      type: string
      createdAt: Date
      updatedAt: Date
      environment: []
      revision: number
      locale: string
    }
    fields: {
      title: string
      file: {
        url: string
        details: { size: number; image: { width: number; height: number } }
        fileName: string
        contentType: string
      }
    }
  }
}
