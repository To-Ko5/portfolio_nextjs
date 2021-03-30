import SwitchingTheme from '../common/SwitchingTheme'

const Header = () => {
  return (
    <header className="bg-gray-50 dark:bg-dark-black shadow p-4 flex justify-between">
      <h1 className="text-4xl">title</h1>
      <SwitchingTheme />
    </header>
  )
}

export default Header
