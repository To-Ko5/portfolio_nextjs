import { VFC } from 'react'

import SwitchingTheme from '../common/SwitchingTheme'

interface HEADER {
  toggleSidebar: () => void
}

const Header: VFC<HEADER> = ({ toggleSidebar }) => {
  return (
    <header className="fixed w-full z-10 bg-gray-50 dark:bg-dark-black shadow-md p-4 flex justify-between">
      <div className="flex items-center">
        <button className="w-8 mr-8" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <p className="text-4xl font-medium">C-Portfolio</p>
      </div>

      <SwitchingTheme />
    </header>
  )
}

export default Header
