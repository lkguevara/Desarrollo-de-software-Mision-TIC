import React from 'react';
import {FaBars} from 'react-icons/fa';
import {BiDownArrow} from 'react-icons/bi'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
     NavMenu, 
     NavItem, 
     NavLinks,
     DropDown,
     DropDownContent,
     DropDownIcon,
     NavBtn,
     NavBtn2,
     NavBtnLink,

    } from './NavbarElements';
import { useAuth0 } from "@auth0/auth0-react";    


const Navbar = ({ toggle }) => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    return (
      <>

     <Nav>
          <NavbarContainer>
              <NavLogo to='/'>Látiz</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon> 

              <NavMenu>
                <DropDown>
                      <NavLinks to ='home'>Home</NavLinks>
                      <DropDownIcon onClick={toggle}>
                          <BiDownArrow />
                       </DropDownIcon>
                      <DropDownContent>
                          <NavLinks to ='sobrenosotros'>Sobre nosotros</NavLinks>
                          <NavLinks to ='descubre'>Descubre</NavLinks>
                          <NavLinks to ='contactenos'>Contáctenos</NavLinks>
                       </DropDownContent>
                 </DropDown>
               </NavMenu>


                  <NavMenu>
                  <NavItem>
                      <NavLinks to ='/productos'>Productos</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn onClick={() => loginWithRedirect()}>
                  <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn2 onClick={() => logout({ returnTo: window.location.origin })}>
                  <NavBtnLink to ='/signup'>Logout</NavBtnLink>
            </NavBtn2>
        </NavbarContainer>
      </Nav>

      </>
    );
}

export default Navbar;
