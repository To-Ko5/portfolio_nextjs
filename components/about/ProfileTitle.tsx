import { VFC } from 'react'

import { Profile } from '../../types/ProfileType'

const ProfileTitle: VFC<Pick<Profile, 'name' | 'job'>> = ({ name, job }) => {
  return (
    <div className="mb-4">
      <h1 className="mb-1 text-3xl font-semibold">{name}</h1>
      <p>{job}</p>
    </div>
  )
}

export default ProfileTitle
