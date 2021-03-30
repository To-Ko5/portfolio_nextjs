import SwitchingTheme from '../common/SwitchingTheme'

const Header = () => {
  return (
    <header className="bg-gray-50 dark:bg-dark-black shadow p-4 flex justify-between">
      <div className="flex items-center">
        <button className="w-8 mr-8">
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
        <h1 className="text-4xl font-medium a">C-Portfolio</h1>
      </div>

      <SwitchingTheme />
    </header>
  )
}

export default Header
