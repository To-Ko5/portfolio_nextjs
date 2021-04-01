import React, { FC, useState, useEffect } from 'react'

import Header from '../common/Header'
import Sidebar from '../common/Sidebar'
import ReturnTopButton from '../common/ReturnTopButton'
import Footer from '../common/Footer'

const Layout: FC = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar)
    console.log(isSidebar)
  }

  useEffect(() => {
    console.log('dd')
  })

  return (
    <React.Fragment>
      <Header toggleSidebar={() => toggleSidebar()} />
      {isSidebar && <Sidebar />}
      <main className="min-h-screen">{children}</main>
      <ReturnTopButton />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
