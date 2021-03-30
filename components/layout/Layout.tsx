import React, { FC, useState } from 'react'

import Header from '../common/Header'
import Sidebar from '../common/Sidebar'

const Layout: FC = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar)
    console.log(isSidebar)
  }

  return (
    <React.Fragment>
      <Header toggleSidebar={() => toggleSidebar()} />
      {isSidebar && <Sidebar />}
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
