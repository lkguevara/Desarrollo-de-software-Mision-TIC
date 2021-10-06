import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import Icon4 from '../../images/svg-5.svg'
import {StepsContainer, Stepsh1, Stepsh2, StepsWrapper, StepsCard, StepsIcon} from './StepsElements'

function Steps() {
    return (
        <div>
            <StepsContainer id = 'descubre'>
                <Stepsh1>En simples pasos</Stepsh1>
                <StepsWrapper>
                    <StepsCard>
                        <StepsIcon src={Icon1}></StepsIcon>
                        <Stepsh2>1. Regístrate</Stepsh2>
                    </StepsCard>

                    <StepsCard>
                        <StepsIcon src={Icon2}></StepsIcon>
                        <Stepsh2>2. Revisa nuestro catálogo y empieza a comprar</Stepsh2>
                    </StepsCard>

                    <StepsCard>
                        <StepsIcon src={Icon3}></StepsIcon>
                        <Stepsh2>3. Paga con el medio de tu preferencia</Stepsh2>
                    </StepsCard>

                    <StepsCard>
                        <StepsIcon src={Icon4}></StepsIcon>
                        <Stepsh2>4. Recibe tu pedido y disfruta</Stepsh2>
                    </StepsCard>


                </StepsWrapper>


            </StepsContainer>
        </div>
    )
}

export default Steps
