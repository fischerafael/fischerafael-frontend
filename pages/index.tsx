import React from 'react'

import CardSection from '../src/components/app/CardSection'
import FeatureCard from '../src/components/app/CardSection/FeatureCard'
import Main from '../src/components/app/Main'
import { FlexContainer } from '../src/components/design-system/molecules/FlexContainer'
import GridThree from '../src/components/design-system/molecules/GridThree'
import Text from '../src/components/design-system/molecules/Text'

const Home = () => {
    return (
        <>
            <Main
                title="Rafael Fischer"
                subTitle="Desenvolvedor Frontend & UI / UX Designer"
            />
            <CardSection>
                <FeatureCard
                    img="code.svg"
                    title="DESENVOLVIMENTO WEB"
                    description="Aplicações web modernas, leves e rápidas utilizando ReactJS, NextJS, NodeJS e Typescript / Javascript."
                />
                <FeatureCard
                    img="design.svg"
                    title="UI & UX DESIGN"
                    description="Criação de wireframes, protótipos e interfaces bonitas e pensadas na experiência do usuário."
                />
                <FeatureCard
                    img="content.svg"
                    title="PRODUÇÃO DE CONTEÚDO"
                    description="Criação e edição de conteúdos para internet como vídeos (youtube), áudio (podcasts) e textos (blog)."
                />
            </CardSection>
            <FlexContainer
                as="section"
                background="darker"
                justify="flex-start"
                style={{ height: '30vh', padding: '2rem' }}
            >
                <Text
                    as="h2"
                    color="light"
                    style={{ fontSize: '2rem', fontWeight: 'bold' }}
                >
                    Últimos Projetos
                </Text>
            </FlexContainer>
            <FlexContainer background="darker">
                <GridThree>
                    <FeatureCard
                        tags={[
                            'React',
                            'NextJS',
                            'Frontend',
                            'UI & UX',
                            'Design'
                        ]}
                        img="project-logos/fischerafael.svg"
                        title="Fischerafael"
                        description="Site pessoal."
                    />
                </GridThree>
            </FlexContainer>
        </>
    )
}

export default Home
