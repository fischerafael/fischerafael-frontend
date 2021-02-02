import React from 'react'
import styled from 'styled-components'

interface IButton {
    main?: boolean
}

const Button: React.FC<IButton> = ({ children, main }) => {
    if (main === true) return <MainButtonStyle>{children}</MainButtonStyle>

    return <ButtonStyle>{children}</ButtonStyle>
}

export default Button

export const ButtonStyle = styled.button`
    height: 48px;

    cursor: pointer;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.ligth};
    border-radius: ${({ theme }) => theme.card.borderRadius};

    font: inherit;
    font-weight: 700;
    font-size: 14px;

    transition: 0.5s;

    &:hover {
        background: ${({ theme }) => theme.colors.primary};
    }
`
export const MainButtonStyle = styled(ButtonStyle)`
    width: 200px;
    margin-top: 24px;
`
