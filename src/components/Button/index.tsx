import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => {
    return <ButtonStyle>{children}</ButtonStyle>
}

export default Button

export const ButtonStyle = styled.button`
    height: 62px;
    justify-self: flex-end;
    cursor: pointer;
    border: none;

    font: inherit;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.ligth};
    border-radius: ${({ theme }) => theme.card.borderRadius};

    font-weight: 900;
    font-size: 18px;

    transition: 0.5s;

    &:hover {
        background: ${({ theme }) => theme.colors.primary};
    }
`
