import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute = ({children}) => {
    const { isAuthenticated, isLoading, getAcessTokenSilently} = useAuth0();

    if(isLoading) return <div>Loading...</div>
}
    
    return isAuthenticated ? (
        <>{children}</>
    ):(
        <div>Es necesario iniciar sesión para ver este sitio
        </div>
        );
    
};

export default PrivateRoute;
