import styled from 'styled-components'

export const CardContainer = styled.div`
    max-width: 18rem;
    margin: 10px;
    border: 1px solid #D2D2D2;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardImage = styled.img`
`

export const CardTitle = styled.h3`
`

export const CardOldPrice = styled.p`
    text-decoration: line-through;
`
export const CardNewPrice = styled.strong`
    color: red;
`

export const CardButton = styled.button`
    border: 0;
    padding: 15px;
    border-radius: 8px;
    background-color: blue;
    margin-top: 10px;
`
export const CardButtonText = styled.h3`
    color: white;
`