import { VFC } from 'react'
import ReactMarkdown from 'react-markdown'

import { Profile } from '../../types/ProfileType'

const ProfileDescription: VFC<Pick<Profile, 'description'>> = ({
  description
}) => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <div className="inline px-2 py-1 text-sm border border-gray-400 rounded text-gray-400">
          Profile
        </div>
      </div>
      <div className="ml-2">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ProfileDescription
