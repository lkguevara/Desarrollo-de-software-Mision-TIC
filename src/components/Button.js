import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
border-radius: 30px;
background: #318158;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
font-size: 20px;
width: 200px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2 ease-in-out;
    background: gray;
}


`