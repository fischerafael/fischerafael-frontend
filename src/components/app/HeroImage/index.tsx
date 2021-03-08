import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../design-system/molecules/FlexContainer'

const HeroImage = () => {
    return (
        <FlexContainer
            as="section"
            background="darker"
            style={{ position: 'relative' }}
        >
            <MainImageBackground
                src="https://avatars.githubusercontent.com/u/47259718?v=4"
                alt="Rafael Fischer"
            />
            <FlexContainer
                style={{
                    position: 'absolute',
                    background:
                        'linear-gradient(90deg, #141414 0%, rgba(26, 26, 26, .75) 100%)'
                }}
            ></FlexContainer>
        </FlexContainer>
    )
}

export default HeroImage

const MainImageBackground = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
