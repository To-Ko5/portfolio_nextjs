import { VFC } from 'react'
import Image from 'next/image'
import { PostDetails } from '../../../types/PostDetailsType'

const PostDetailsImage: VFC<Pick<PostDetails, 'image'>> = ({ image }) => {
  return (
    <div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        objectFit="contain"
      />
    </div>
  )
}

export default PostDetailsImage
