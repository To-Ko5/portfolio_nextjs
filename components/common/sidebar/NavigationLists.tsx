import Link from 'next/link'

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
        <NavigationList path="/contact" name="Contact" />
      </ul>
    </nav>
  )
}

export default NavigationLists
