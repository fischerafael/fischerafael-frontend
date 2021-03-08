import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../design-system/molecules/FlexContainer'

const Hero = ({ children }) => {
    return (
        <FlexContainer
            as="section"
            direction="column"
            background="darker"
            align="flex-start"
            style={{ height: '100vh', paddingLeft: '2rem' }}
        >
            {children}
        </FlexContainer>
    )
}

export default Hero
