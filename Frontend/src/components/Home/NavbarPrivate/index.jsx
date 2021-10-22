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
                    <NavLinks to ='/'>Productos</NavLinks>
                    <NavLinks to ='/'>Ventas</NavLinks>
                    <NavLinks to ='/'>Usuarios</NavLinks>
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
