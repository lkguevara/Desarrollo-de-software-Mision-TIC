import React from 'react'
import Navbar from '../components/Home/Navbar/index'
import Footer from '../components/Home/Footer/index'

const PublicLayout = ({ children }) => {
    return (
        <div>
          {/* <Navbar /> */}
          <main>
            {children}
          </main>
          {/* <Footer /> */}
        </div>
    )
}

export default PublicLayout

