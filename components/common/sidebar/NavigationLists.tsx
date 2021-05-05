import NavigationList from './NavigationList'

const NavigationLists = () => {
  return (
    <nav>
      <ul className="text-center">
        <NavigationList path="/" name="Home" />
        <NavigationList path="/category" name="Category" />
        <NavigationList path="/tag" name="Tag" />
        <NavigationList path="/gallery" name="Gallery" />
        <NavigationList path="/about" name="About" />
        <li>
          <a
            href={process.env.NEXT_PUBLIC_PORTFOLIO_CONTACT_URL}
            target="_blank"
            rel="noopener"
            className="block p-2 hover:bg-opacity-20 hover:bg-gray-400 rounded transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationLists
