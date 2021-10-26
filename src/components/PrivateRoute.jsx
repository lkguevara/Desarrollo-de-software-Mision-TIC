import React,{useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute = ({children}) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently} = useAuth0();
/// implementación api Auth0 para autenticación que además se realizó en la línea 24 de App.jsx
    useEffect(() => {

      const fetchAuth0Token =  async ()=>{
        const accessToken =  await getAccessTokenSilently({
        audience: `api-autenticacion-latiz`,
      });
      console.log(accessToken);
      };
      
       
      fetchAuth0Token();
    }, []);

    if(isLoading) return <div>Loading...</div>;

    if(!isAuthenticated){
        return loginWithRedirect();
    } 

    return <>{children}</>;

    
/*    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <div>Login Please
        </div>
    );*/
    
}; 

export default PrivateRoute;
