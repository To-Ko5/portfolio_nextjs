import { VFC } from 'react'
import { Profile } from '../../types/ProfileType'

const ProfileSkills: VFC<Pick<Profile, 'skills'>> = ({ skills }) => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <div className="inline px-2 py-1 text-sm border border-gray-400 rounded text-gray-400">
          Skills
        </div>
      </div>
      <p className="ml-2">{skills}</p>
    </div>
  )
}

export default ProfileSkills
