import React, {useState} from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { ProductsContainer, ProductsWrapper, Title1, Subtitle, Item, ItemIcon} from "./Item";
import Logo1 from '../../images/Leche.jpg';
import Logo2 from '../../images/Yogurt.png';
import Logo3 from '../../images/Queso.jpg';
import Logo4 from '../../images/Helado.jpg';
import Logo5 from '../../images/Mantequilla.jpg';
import Logo6 from '../../images/Crema.jpg';
import {Button} from '../Button';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const Slider = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
    <ProductsContainer >
      <Title1> Conoce lo mejor de la semana </Title1>
      <Subtitle> Tenemos una amplia variedad de productos para ti</Subtitle>
      <ProductsWrapper> 
        <Carousel breakPoints={breakPoints}>
          <Item>
          <ItemIcon src={Logo1}></ItemIcon>
           <Subtitle>Leche</Subtitle>
          </Item>
          <Item>
          <ItemIcon src={Logo2}></ItemIcon>
          <Subtitle>Yogures</Subtitle>
          </Item>
          <Item>
          <ItemIcon src={Logo3}></ItemIcon>
          <Subtitle>Quesos</Subtitle>
          </Item>
          <Item>
          <ItemIcon src={Logo4}></ItemIcon>
          <Subtitle>Helados</Subtitle>
          </Item>
          <Item>
          <ItemIcon src={Logo5}></ItemIcon>
          <Subtitle>Mantequilla</Subtitle>
          </Item>
          <Item>
          <ItemIcon src={Logo6}></ItemIcon>
          <Subtitle>Otros</Subtitle>
          </Item>
     
        </Carousel>
        <Button to='/' onMouseEnter={onHover} onMouseLeave={onHover}>Ver todos los productos</Button>
        {/* Este botón llevará a la página de los productos */}
        </ProductsWrapper> 
        </ProductsContainer>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Slider />, rootElement);

export default Slider;
