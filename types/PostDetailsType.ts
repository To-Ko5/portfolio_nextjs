export interface PostDetails {
  title: string
  subTitle: string
  category: {
    id: string
    name: string
  }
  tag: []
  content: string
  url?: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}
