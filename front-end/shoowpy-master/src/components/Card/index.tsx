import React from 'react'
import { CardButton, CardButtonText, CardContainer, CardImage, CardNewPrice, CardOldPrice, CardTitle } from './style'

function index(props: {title: string}) {
    return (
        <CardContainer>
            <CardImage src="https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/cozinhap.jpg" />
            <CardTitle>{props.title}</CardTitle>
            <CardOldPrice> 300,00</CardOldPrice>
            <CardNewPrice> 200,00</CardNewPrice>
            <CardButton>
                <CardButtonText>Detalhes</CardButtonText>
            </CardButton>
        </CardContainer>
    )
}

export default index