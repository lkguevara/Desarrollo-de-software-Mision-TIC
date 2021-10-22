import styled from 'styled-components';



export const StepsContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`

export const StepsWrapper = styled.div`
max-width: auto;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 20px;

@media screen and(max-width: 768px) {
    grid-template-columns: 1fr;
    height: 1100px;
}

@media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    height: 1300px;
    padding: 0 20px;
}
`

export const StepsCard = styled.div`
background: lightgray;
border-style: outset;
display: flex;
flex-direction: flex-start;
align-items: center;
border-radius: 5px;
max-height: 340px;
box-shadow: 0 1px 3px 4px rgba(0, 0, 0, 2.);
transition: all 0.2s ease-in-out;


&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const StepsIcon = styled.img`
height:160px;
width:160px;
margin-bottom: 10px;
`

export const Stepsh1 = styled.h1`
font-size: 2.5rem;
color: black;
margin-bottom: 64px;
line-height: 1.1;
font-weight: 600;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`
export const Stepsh2 = styled.h2`
color: black;
font-size: 12px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.0px;
text-transform: uppercase;

`
