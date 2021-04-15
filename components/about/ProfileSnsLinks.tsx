import { VFC } from 'react'

import { Profile } from '../../types/ProfileType'
type SnsLinks = Pick<Profile, 'twitter' | 'qiita' | 'github' | 'instagram'>

const ProfileSnsLinks: VFC<SnsLinks> = ({
  twitter,
  qiita,
  github,
  instagram
}) => {
  return <div>{twitter && twitter}</div>
}

export default ProfileSnsLinks
