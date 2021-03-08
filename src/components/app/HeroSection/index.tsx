import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../design-system/molecules/FlexContainer'
import HeroSectionBackground from '../HeroSectionImage'
import HeroSectionText from '../HeroSectionText'

const HeroSection = ({ title, subTitle }) => {
    return (
        <FlexContainer
            as="main"
            background="darker"
            align="flex-end"
            justify="space-between"
            style={{ position: 'relative', minHeight: '100vh' }}
        >
            <HeroSectionText>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </HeroSectionText>
            <HeroSectionBackground />
        </FlexContainer>
    )
}

export default HeroSection

export const Title = styled.h1`
    color: ${(props) => props.theme.color.ligth};
    font-style: normal;
    font-weight: bold;
    font-size: 5rem;
    line-height: 100%;
`
export const SubTitle = styled.h2`
    color: ${(props) => props.theme.color.ligth};
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 125%;
    max-width: 75%;
    margin: 1rem 0;
`
