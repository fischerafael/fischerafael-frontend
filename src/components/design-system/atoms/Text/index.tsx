import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
    children: ReactNode
    as: 'h1' | 'h2' | 'p'
    variant: 'MainTitle' | 'SubTitle' | 'SectionTitle' | 'Paragraph'
    [x: string]: any
}

const Text = ({ children, as, ...props }: Props) => {
    return (
        <TextStyle as={as} {...props}>
            {children}
        </TextStyle>
    )
}

export default Text

export const TextStyle = styled.span<Props>`
    padding: 0 2rem;
    ${(props) => props.variant === 'MainTitle' && MainTitle}
    ${(props) => props.variant === 'SubTitle' && SubTitle}
    ${(props) => props.variant === 'SectionTitle' && SectionTitle}
    ${(props) => props.variant === 'Paragraph' && Paragraph}
`
const MainTitle = css`
    font-weight: bold;
    font-size: 4rem;
    line-height: 125%;
    margin: 2rem 0;

    text-align: center;
`
const SubTitle = css`
    font-weight: normal;
    font-size: 1rem;
    line-height: 125%;
    margin: 1rem 0;

    text-align: center;
`

const SectionTitle = css`
    font-weight: bold;
    font-size: 2rem;
    line-height: 125%;
    padding: 2rem 0;

    text-align: start;
`

const Paragraph = css`
    font-weight: normal;
    font-size: 1rem;
    line-height: 200%;
    padding: 2rem 0;

    text-align: start;
`
