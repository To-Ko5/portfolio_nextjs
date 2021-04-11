import { VFC } from 'react'

interface SidebarOverlay {
  isSidebar: boolean
  toggleSidebar: () => void
}

const SidebarOverlay: VFC<SidebarOverlay> = ({ isSidebar, toggleSidebar }) => {
  return (
    <div
      className="fixed z-10 top-0 bg-black bg-opacity-40 h-full w-full"
      style={isSidebar ? { display: 'block' } : { display: 'none' }}
      onClick={toggleSidebar}
    ></div>
  )
}

export default SidebarOverlay
