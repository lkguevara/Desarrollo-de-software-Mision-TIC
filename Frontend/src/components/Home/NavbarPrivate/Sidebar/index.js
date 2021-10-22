import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
        </Icon>  
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to='home' onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to='sobre nosotros' onClick={toggle}>
                    Productos
                </SidebarLink>
                <SidebarLink to='productos'  onClick={toggle}>
                    Ventas
                </SidebarLink>
                <SidebarLink to='contactenos'  onClick={toggle}>
                    Usuarios
                </SidebarLink>
            </SidebarMenu>
            <SidebtnWrap>
                
            </SidebtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar; 