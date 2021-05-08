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
    <div className="mb-10 -ml-2">
      <div className="flex items-center">
        {twitter && (
          <div className="mr-2">
            <a
              href={twitter}
              target="_blank"
              rel="noopener"
              className="block text-blue-400 p-2 rounded-full hover:bg-opacity-20 hover:bg-blue-400 transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} width="24px" />
            </a>
          </div>
        )}

        {qiita && (
          <div className="mr-2">
            <a
              href={qiita}
              target="_blank"
              rel="noopener"
              className="block text-green-400 p-2 rounded-full hover:bg-opacity-20 hover:bg-green-400 transition-colors"
            >
              <FontAwesomeIcon icon={faNewspaper} width="24px" />
            </a>
          </div>
        )}

        {github && (
          <div className="mr-2">
            <a
              href={github}
              target="_blank"
              rel="noopener"
              className="block text-gray-700 p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} width="24px" />
            </a>
          </div>
        )}

        {instagram && (
          <div>
            <a
              href={instagram}
              target="_blank"
              rel="noopener"
              className="block text-purple-600  p-2 rounded-full hover:bg-opacity-20 hover:bg-purple-600 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} width="24px" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileSnsLinks
