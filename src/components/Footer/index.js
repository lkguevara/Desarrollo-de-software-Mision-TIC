import React from 'react'
import {FooterContainer, FooterWrap, FooterTextContainer, FooterTextWrapper, FooterItems, FooterTitle,
FooterText,FooterIcon} from './FooterElements'
import {FaCcVisa, 
    FaPaypal, 
    FaApplePay, 
    FaCcMastercard,
     FaCcAmazonPay, 
     FaCcDinersClub, 
    } from 'react-icons/fa';

const Footer = () => {
    return(

        <>
<FooterContainer id= 'contactenos'>
<FooterWrap>
<FooterTextContainer>

<FooterTextWrapper>
<FooterItems>
<FooterTitle>Información de contacto</FooterTitle>
    <FooterText>Teléfono: +1 (877) 747-9986</FooterText>
    <FooterText>Dirección: 29010 Commerce Center Drive, Valencia, CA 91355 </FooterText>
    <FooterText>Correo: látiz_soporte@gmail.com</FooterText>
</FooterItems>
</FooterTextWrapper>

<FooterTextWrapper>
<FooterItems>
<FooterTitle>Pagos</FooterTitle>
    <FooterIcon>
        <FaCcVisa />
        <FaCcMastercard />
        <FaPaypal/>
        <FaApplePay />
        <FaCcAmazonPay />
        <FaCcDinersClub />
    </FooterIcon>
    <FooterIcon></FooterIcon>
</FooterItems>
</FooterTextWrapper>

<FooterTextWrapper>
<FooterItems>
<FooterTitle>Atención</FooterTitle>
<FooterText>Lunes a viernes: 8:00 am - 19:00 pm</FooterText>
<FooterText>Sábados: 9:30 am - 17:30 pm</FooterText>
</FooterItems>
</FooterTextWrapper>


</FooterTextContainer>


</FooterWrap>
</FooterContainer>


</>
)

}

export default Footer;
