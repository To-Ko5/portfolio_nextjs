import { VFC } from 'react'

import { Profile } from '../../types/ProfileType'
type SnsLinks = Pick<Profile, 'twitter' | 'qiita' | 'github' | 'instagram'>

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const ProfileSnsLinks: VFC<SnsLinks> = ({
  twitter,
  qiita,
  github,
  instagram
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-center">
        {twitter && (
          <div className="mr-6">
            <a href={twitter} target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faTwitter} width="24px" />
            </a>
          </div>
        )}

        {qiita && (
          <div className="mr-6">
            <a href={qiita} target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faNewspaper} width="24px" />
            </a>
          </div>
        )}

        {github && (
          <div className="mr-6">
            <a href={github} target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faGithub} width="24px" />
            </a>
          </div>
        )}

        {instagram && (
          <div>
            <a href={instagram} target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faInstagram} width="24px" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileSnsLinks
