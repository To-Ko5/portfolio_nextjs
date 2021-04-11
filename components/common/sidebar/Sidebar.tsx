import { VFC } from 'react'

import NavigationList from './NavigationLists'

interface Sidebar {
  isSidebar: boolean
}

const Sidebar: VFC<Sidebar> = ({ isSidebar }) => {
  const sidebarStyle = () => {
    return {
      transform: isSidebar ? 'translateX(0%)' : 'translateX(-100%)'
    }
  }

  return (
    <div
      className="fixed z-50 top-0 h-full w-64 bg-gray-50 dark:bg-dark-black shadow-md border-r border-gray-400 border-opacity-20 transition-transform"
      style={sidebarStyle()}
    >
      <aside className="p-2">
        <NavigationList />
      </aside>
    </div>
  )
}

export default Sidebar
