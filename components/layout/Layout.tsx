import React, { FC } from 'react'

import Header from '../common/Header'
import Sidebar from '../common/Sidebar'

const Layout: FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
