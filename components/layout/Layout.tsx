import React, { FC, useState } from 'react'

import Header from '../common/Header'
import Sidebar from '../common/Sidebar'
import ReturnTopButton from '../common/ReturnTopButton'
import Footer from '../common/Footer'

const Layout: FC = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  return (
    <React.Fragment>
      <Header toggleSidebar={() => toggleSidebar()} />
      {isSidebar && <Sidebar />}
      <main className="py-28 min-h-screen">{children}</main>
      <ReturnTopButton />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
