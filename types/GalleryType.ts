export interface GalleryTag {
  id: string
  name: string
}

export interface Gallery {
  id: string
  title: string
  description: string
  tag: {
    id: string
    name: string
  }
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}
