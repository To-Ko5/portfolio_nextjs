import React, { FC, useState } from 'react'

import Header from '../common/Header'
import Sidebar from '../common/sidebar/Sidebar'
import SidebarOverlay from '../common/sidebar/SidebarOverlay'
import ReturnTopButton from '../common/buttons/ReturnTopButton'
import Footer from '../common/Footer'

const Layout: FC = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  return (
    <React.Fragment>
      <Header toggleSidebar={toggleSidebar} />

      <Sidebar isSidebar={isSidebar} />
      <SidebarOverlay isSidebar={isSidebar} toggleSidebar={toggleSidebar} />
      <main className="py-28 min-h-screen">{children}</main>
      <ReturnTopButton />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
