import { VFC } from 'react'

import { Profile } from '../../types/ProfileType'

const ProfileCertifications: VFC<Pick<Profile, 'certifications'>> = ({
  certifications
}) => {
  return (
    <div>
      <div className="mb-2">
        <div className="inline px-2 py-1 text-sm border border-gray-400 rounded text-gray-400">
          Certifications
        </div>
      </div>
      <ul className="ml-6 list-disc">
        {certifications &&
          certifications.map((certification) => <li>{certification}</li>)}
      </ul>
    </div>
  )
}

export default ProfileCertifications
