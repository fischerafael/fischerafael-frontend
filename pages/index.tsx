import React from 'react'

import CardSection from '../src/components/app/CardSection'
import FeatureCard from '../src/components/app/CardSection/FeatureCard'
import Main from '../src/components/app/Main'

const Home = () => {
    return (
        <>
            <Main
                title="Rafael Fischer"
                subTitle="Desenvolvedor Frontend & UI / UX Designer"
            />
            <CardSection>
                <FeatureCard
                    type="code"
                    title="DESENVOLVIMENTO WEB"
                    description="Aplicações web modernas, leves e rápidas utilizando ReactJS, NextJS, NodeJS e Typescript / Javascript."
                />
                <FeatureCard
                    type="design"
                    title="UI & UX DESIGN"
                    description="Criação de wireframes, protótipos e interfaces bonitas e pensadas na experiência do usuário."
                />
                <FeatureCard
                    type="content"
                    title="PRODUÇÃO DE CONTEÚDO"
                    description="Criação e edição de conteúdos para internet como vídeos (youtube), áudio (podcasts) e textos (blog)."
                />
            </CardSection>
        </>
    )
}

export default Home
