import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
    [x: string]: any
    children: ReactNode
    type: 'div' | 'header' | 'nav' | 'section' | 'main'
}

const Flex = ({ type, children, ...props }: Props) => {
    return (
        <FlexStyle as={type} {...props}>
            {children}
        </FlexStyle>
    )
}

export default Flex

export const FlexStyle = styled.div<Props>`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.color.ligth};

    @media (max-width: 600px) {
        font-size: 85%;
    }
`
