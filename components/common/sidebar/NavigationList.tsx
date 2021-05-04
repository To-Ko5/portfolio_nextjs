import { VFC } from 'react'
import ActiveLink from '../ActiveLink'

interface NavigationList {
  path: string
  name: string
}

const NavigationList: VFC<NavigationList> = ({ path, name }) => {
  return (
    <li>
      <ActiveLink href={path} activeClassName="bg-opacity-20 bg-gray-400">
        <a className="block p-2 hover:bg-opacity-20 hover:bg-gray-400 rounded transition-colors">
          {name}
        </a>
      </ActiveLink>
    </li>
  )
}

export default NavigationList
