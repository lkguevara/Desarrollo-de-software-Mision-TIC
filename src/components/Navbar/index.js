import React from 'react';
import {FaBars} from 'react-icons/fa';
// import image1 from '../images/Vacalogo.png';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
     NavMenu, 
     NavItem, 
     NavLinks,
     NavBtn,
     NavBtn2,
     NavBtnLink,
    //  NavIcon
    } from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
      <>

      <Nav>
          <NavbarContainer>
              <NavLogo to='/'>Látiz</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon> o
              <NavMenu>
              <NavItem>
                      <NavLinks to ='home'>Home</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to ='sobrenosotros'>Sobre nosotros</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to ='descubre'>Descubre</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to ='productos'>Productos</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to ='contactenos'>Contáctenos</NavLinks>
                  </NavItem>
                
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn2>
                  <NavBtnLink to ='/signup'>Sign Up</NavBtnLink>
            </NavBtn2>
        </NavbarContainer>
      </Nav>

      </>
    );
}

export default Navbar;