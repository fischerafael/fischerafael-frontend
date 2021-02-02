import CTASection from '../CTASection'
import HeroImageSection from '../HeroImageSection'
import VerticalCard from '../VerticalCard'

import styled from 'styled-components'

interface IPageContainer {
    twoColumnMain?: boolean
    threeColumn?: boolean
}

const PageContainer: React.FC<IPageContainer> = ({
    twoColumnMain,
    threeColumn
}) => {
    if (twoColumnMain)
        return (
            <PageContainerStyle>
                <DesktopNavBarStyle>
                    <section>
                        <img src={'/fischerafael.svg'} alt="Logo Escrito" />
                    </section>
                </DesktopNavBarStyle>
                <TwoColumnContentStyle>
                    <CTASection />
                    <HeroImageSection
                        imgAlt="Hero Image"
                        imgUrl="https://images.unsplash.com/photo-1600267204026-85c3cc8e96cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                </TwoColumnContentStyle>
            </PageContainerStyle>
        )

    if (threeColumn)
        return (
            <PageContainerStyle>
                <ThreeColumnContentStyle>
                    <VerticalCard
                        imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                        cardTitle="Projetos"
                        cardText="Desenvolvimento Web com tecnologias modernas como React, NodeJS & Typescript, UI & UX Design e produção de conteúdo para a internet."
                        cardButton="Saiba Mais"
                    />
                    <VerticalCard
                        imgUrl="https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        cardTitle="Conteúdos"
                        cardText="Tutoriais em vídeo, podcasts, artigos de blog e cursos."
                        cardButton="Saiba Mais"
                    />
                    <VerticalCard
                        imgUrl="/hero-img.png"
                        cardTitle="Projetos"
                        cardText="Desenvolvimento Web com tecnologias modernas como React, NodeJS & Typescript, UI & UX Design e produção de conteúdo para a internet."
                        cardButton="Saiba Mais"
                    />
                </ThreeColumnContentStyle>
            </PageContainerStyle>
        )
}

export default PageContainer

export const DesktopNavBarStyle = styled.nav`
    position: absolute;
    z-index: 100;

    width: 100%;
    height: 15vh;

    display: flex;
    align-items: center;
    justify-content: center;

    section {
        width: 90%;
        max-width: 1024px;
    }
`

export const PageContainerStyle = styled.main`
    z-index: 1;
    background: ${({ theme }) => theme.colors.dark};
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SectionContentStyle = styled.div`
    color: ${({ theme }) => theme.colors.ligth};

    max-width: 1024px;
    width: 90%;
    min-height: 100vh;
`
export const TwoColumnContentStyle = styled(SectionContentStyle)`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 36px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
export const ThreeColumnContentStyle = styled(SectionContentStyle)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 36px;

    margin-bottom: 10vh;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        width: 80%;
    }
`
