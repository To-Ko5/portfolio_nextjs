import { VFC } from 'react'
import Link from 'next/link'

interface NavigationList {
  path: string
  name: string
}

const NavigationList: VFC<NavigationList> = ({ path, name }) => {
  return (
    <li>
      <Link href={path}>
        <a className="block p-2 hover:bg-opacity-20 hover:bg-gray-400 rounded transition-colors">
          {name}
        </a>
      </Link>
    </li>
  )
}

export default NavigationList
