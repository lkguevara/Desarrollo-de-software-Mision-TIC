import React from 'react';
import {FaBars} from 'react-icons/fa';


import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
     NavMenu, 
     NavBtn,
     NavLinks,
     NavBtnLink,

    } from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
      <>

     <Nav>
          <NavbarContainer>
              <NavLogo to='/'>Látiz</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon> 

              <NavMenu>
                    <NavLinks to ='/product/master'>Productos</NavLinks>
                    <NavLinks to ='/sales/saleMaster'>Ventas</NavLinks>
                    <NavLinks to ='/user/master'>Usuarios</NavLinks>
               </NavMenu>
              <NavBtn>
                  <NavBtnLink to ='/signin'>Mi perfil</NavBtnLink>
            </NavBtn>
           
        </NavbarContainer>
      </Nav>

      </>
    );
}

export default Navbar;
