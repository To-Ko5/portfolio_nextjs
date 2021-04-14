export interface Profile {
  name: string
  job: string
  skills: string
  description: string
  github: string
  qiita: string
  twitter: string
  instagram: string
  certifications: string[]
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}
