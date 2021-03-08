import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../design-system/molecules/FlexContainer'
import HeroImage from '../HeroImage'
import Text from '../../design-system/molecules/Text'

const Main = () => {
    return (
        <MainContainer>
            <ContentContainer
                as="main"
                direction="column"
                align="flex-start"
                background="darker"
            >
                <Text
                    color="light"
                    as="h1"
                    style={{ fontSize: '5rem', fontWeight: 'bold' }}
                >
                    Rafael Fischer
                </Text>
                <Text
                    color="light"
                    as="h1"
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        margin: '1rem 0',
                        maxWidth: '30rem',
                        lineHeight: '125%'
                    }}
                >
                    Desenvolvedor Frontend & UI / UX Designer
                </Text>
            </ContentContainer>
            <HeroImage />
        </MainContainer>
    )
}

export default Main

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    min-height: 100vh;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        section {
            display: none;
        }
    }
`
const ContentContainer = styled(FlexContainer)`
    padding: 0 1rem;
`
