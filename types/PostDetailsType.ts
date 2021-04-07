export interface PostDetails {
  title: string
  subTitle: string
  category: {
    id: string
    name: string
  }
  tags: [
    {
      id: string
      name: string
    }
  ]
  content: string
  url?: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}
