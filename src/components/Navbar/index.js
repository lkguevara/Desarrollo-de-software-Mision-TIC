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
