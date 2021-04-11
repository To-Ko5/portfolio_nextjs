import { VFC } from 'react'

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
    <div>
      <div
        className="fixed z-50 top-0 h-full w-30 w-1/5 bg-gray-50 dark:bg-dark-black shadow-md transition-transform"
        style={sidebarStyle()}
      ></div>
    </div>
  )
}

export default Sidebar
