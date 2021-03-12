import React, { useState } from 'react'
import styled from 'styled-components'

import { DefaultPageContainer } from '../src/components/DefautPageContainer'
import Text from '../src/components/design-system/atoms/Text'

import ProfileSection from '../src/components/Templates/Profile'

const home = () => {
    return (
        <>
            <ProfileSection page="about" />
            <DefaultPageContainer>
                <AboutContent>
                    <Text as="p" variant="Paragraph">
                        Desenvolvedor com eperiência na criação de aplicações
                        web completas, bonitas, rápidas e seguras, utilizando
                        tecnologias modernas como NextJS, ReactJS, NodeJS,
                        Typescript e Javascript.
                    </Text>
                    <Text as="p" variant="Paragraph">
                        UI & UX Designer com experiência na concepção de
                        produtos digitais com enfoque em promover a melhor
                        experiência para o usuário, e que geram o máximo de
                        valor possível.
                    </Text>
                    <Text as="h1" variant="SectionTitle">
                        Experiências Profissionais
                    </Text>
                </AboutContent>
            </DefaultPageContainer>
        </>
    )
}

export default home

export const AboutContent = styled.section`
    width: 100%;
    height: 100%;

    max-width: ${(props) => props.theme.breakPoints.md};
    padding: 2rem;

    @media (max-width: 800px) {
        max-width: 100%;
    }
`
