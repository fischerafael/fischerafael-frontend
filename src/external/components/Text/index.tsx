import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    type: 'h1' | 'h2' | 'p'
    children: ReactNode
    [x: string]: any
}

const Text = ({ type, children, ...props }: Props) => {
    return (
        <TextStyle as={type} {...props}>
            {children}
        </TextStyle>
    )
}

export default Text

export const TextStyle = styled.span<Props>`

    font-size: ${(props) => props.type === 'h1' && };
    @media (max-width: 600px) {
        font-size: 90%;
    }
`
