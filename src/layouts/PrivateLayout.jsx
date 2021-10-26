// import React,{useEffect} from 'react'
import Sidebar from '../components/Home/NavbarPrivate/index'
import Footer from '../components/Home/Footer/index'
// import { useAuth0 } from "@auth0/auth0-react";
import { PrivateRoute } from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {
  
    return (
        <PrivateRoute>
        <div>
          <Sidebar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        </PrivateRoute>
    )
}

export default PrivateLayout
