import { VFC } from 'react'
import Image from 'next/image'

import { Profile } from '../../types/ProfileType'

const ProfileImage: VFC<Pick<Profile, 'image'>> = ({ image }) => {
  return (
    <div className="mb-4">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        objectFit="contain"
        className="bg-opacity-20 bg-gray-400"
      />
    </div>
  )
}

export default ProfileImage
