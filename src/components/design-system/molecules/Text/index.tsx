import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
    children: ReactNode
    as: 'h1' | 'h2' | 'p'
    color: 'light' | 'dark' | 'darker'
    [x: string]: any
}

const Text = ({ children, as, ...props }: Props) => {
    return (
        <TextStyle {...props} as={as}>
            {children}
        </TextStyle>
    )
}

export default Text

export const TextStyle = styled.span<Props>`
    ${(props) =>
        props.color === 'light' &&
        css`
            color: ${(props) => props.theme.color.ligth};
        `}
`
