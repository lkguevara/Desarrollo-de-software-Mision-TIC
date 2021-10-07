import styled from 'styled-components'

export const FooterContainer = styled.footer`
background-color: #1c2237;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterTextContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterTextWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
    flex-direction: column;
    }
`

export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;

    @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
    }
`

export const FooterTitle = styled.h1`
color: #fff;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const FooterIcon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 30px;
color: #fff;
`

export const FooterText = styled.h2`
color: #fff;
  font-size: 14px;
  margin-bottom: 0.5rem;

  &:hover {
      color: #318158;
      transition: 0.3 ease-out;
  }
`;
