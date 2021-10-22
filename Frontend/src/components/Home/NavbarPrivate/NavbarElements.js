import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: #1c2237;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
display: flex;
align-items: center;
margin-left: 30px;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
`

export const DropDown = styled.div`
position: relative;
display: inline-block;

&:hover {
    display: block;
    >div{
        display:block;
    }
}
`
export const DropDownIcon = styled.div`
display: inline-block;
padding: 0px 10px;
top: 3px;
right: -28px;
color: #fff;
position: absolute;

`

export const DropDownContent = styled.div`
background: #1c2237;
display: none;
position: absolute;
min-width: 220px;
padding: 22px 16px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 2);
z-index: 1;


`



export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;


&.active {
    border-bottom: 3px solid #01bf71;
}
&:hover {
    color: #318158;
      transform: scale(1.2);
      transition: all 0.3s ease;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavBtn2 = styled.nav`
display: flex;
align-items: center;
margin-left: -40px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 15px;
background: white;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;

}
`
