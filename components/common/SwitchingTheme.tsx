import { useState, MouseEvent } from 'react'

const SwitchingTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const switchingTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const element = document.querySelector('html')
    if (element.classList.value === 'dark') {
      document.querySelector('html').classList.remove('dark')
    } else {
      document.querySelector('html').classList.add('dark')
    }
    setIsDarkTheme(!isDarkTheme)
    e.currentTarget.blur()
  }

  return (
    <button
      className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-deep-blue hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
      onClick={switchingTheme}
    >
      {isDarkTheme ? (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
      ) : (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      )}
    </button>
  )
}

export default SwitchingTheme
