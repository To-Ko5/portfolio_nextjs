export interface PostImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface PostArticle {
  title: string
  subTitle: string
  content?: string
}

export interface PostCategory {
  id: string
  name: string
}

export interface PostTag {
  id: string
  name: string
}
