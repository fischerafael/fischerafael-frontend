import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../design-system/molecules/FlexContainer'
import GridThree from '../../design-system/molecules/GridThree'

const CardSection = ({ children }) => {
    return (
        <FlexContainer as="section" background="darker" align="flex-start">
            <GridThree style={{ marginTop: '-10rem' }}>{children}</GridThree>
        </FlexContainer>
    )
}

export default CardSection
