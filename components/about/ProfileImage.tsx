import { VFC } from 'react'
import Image from 'next/image'

import { Profile } from '../../types/ProfileType'

const ProfileImage: VFC<Pick<Profile, 'image'>> = ({ image }) => {
  return (
    <div className="mb-4 max-h-96">
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

export default ProfileImage
