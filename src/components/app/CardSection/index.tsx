import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../design-system/molecules/FlexContainer'

const CardSection = ({ children }) => {
    return (
        <CardSectionContainer
            as="section"
            background="darker"
            align="flex-start"
            style={{ position: 'relative' }}
        >
            <GridThree>{children}</GridThree>
        </CardSectionContainer>
    )
}

export default CardSection

const CardSectionContainer = styled(FlexContainer)`
    height: 70vh;

    @media (max-width: 1024px) {
        height: 150vh;
    }

    @media (max-width: 600px) {
        height: 210vh;
    }
`

const GridThree = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-items: center;

    width: 100%;
    gap: 2rem;
    padding: 2rem;

    position: absolute;
    top: -7rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        position: relative;
    }
`
