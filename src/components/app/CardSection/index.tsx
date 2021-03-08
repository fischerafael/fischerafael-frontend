import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../design-system/molecules/FlexContainer'

const CardSection = ({ children }) => {
    return (
        <FlexContainer as="section" background="darker" align="flex-start">
            <GridThree>{children}</GridThree>
        </FlexContainer>
    )
}

export default CardSection

const GridThree = styled.div`
    z-index: 10;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-items: center;

    width: 100%;
    gap: 2rem;
    padding: 2rem;

    margin-top: -7rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
