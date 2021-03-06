import { VFC } from 'react'
import Link from 'next/link'

import SearchForm from '../search/SearchForm'
import SwitchingTheme from '../common/SwitchingTheme'

interface HEADER {
  toggleSidebar: () => void
}

const Header: VFC<HEADER> = ({ toggleSidebar }) => {
  return (
    <header className="fixed w-full z-10 bg-gray-50 dark:bg-dark-black shadow-md p-4 flex justify-between">
      <div className="flex items-center">
        <button
          className="w-8 mr-5 md:mr-8 p-1 focus:outline-none"
          onClick={toggleSidebar}
        >
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
        <p className="text-3xl md:text-4xl font-medium">
          <Link href="/">C-Portfolio</Link>
        </p>
      </div>
      <div className="flex items-center">
        <div className="mr-10 hidden sm:block">
          <SearchForm />
        </div>
        <SwitchingTheme />
      </div>
    </header>
  )
}

export default Header
