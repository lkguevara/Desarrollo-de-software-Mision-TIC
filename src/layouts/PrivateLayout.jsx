// import React,{useEffect} from 'react'
import Sidebar from '../components/Home/NavbarPrivate/index'
import Footer from '../components/Home/Footer/index'
// import { useAuth0 } from "@auth0/auth0-react";
// import { PrivateRoute } from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {
  
    return (
<<<<<<< HEAD
        // <PrivateRoute>
=======
        //<PrivateRoute>
>>>>>>> 1f9b63dd94a4a0fb5dc1005abec814ea8efe53e4
        <div>
          <Sidebar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
<<<<<<< HEAD
        // </PrivateRoute>
=======
        //</PrivateRoute>
>>>>>>> 1f9b63dd94a4a0fb5dc1005abec814ea8efe53e4
    )
}

export default PrivateLayout
