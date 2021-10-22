import React from 'react'
import Sidebar from '../components/Home/NavbarPrivate/index'
import Footer from '../components/Home/Footer/index'

const PrivateLayout = ({ children }) => {
    return (
        <div>
          <Sidebar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
    )
}

export default PrivateLayout
