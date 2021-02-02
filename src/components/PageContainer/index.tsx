import CTASection from '../CTASection'
import HeroImageSection from '../HeroImageSection'
import VerticalCard from '../VerticalCard'

import styled from 'styled-components'
import Link from 'next/link'

interface IPageContainer {
    type: 'two-column-main' | 'three-column' | 'one-column'
    oneColumnProps?: {
        title: string
        subTitle: string
    }
}

const PageContainer: React.FC<IPageContainer> = ({ type, oneColumnProps }) => {
    if (type === 'two-column-main')
        return (
            <PageContainerStyle>
                <TwoColumnContentStyle>
                    <CTASection />
                    <HeroImageSection
                        imgAlt="Hero Image"
                        imgUrl="https://images.unsplash.com/photo-1600267204026-85c3cc8e96cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                </TwoColumnContentStyle>
            </PageContainerStyle>
        )

    if (type === 'three-column')
        return (
            <PageContainerStyle>
                <ThreeColumnContentStyle>
                    <VerticalCard
                        imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                        cardTitle="Projetos"
                        cardText="Desenvolvimento Web com tecnologias modernas como React, NodeJS & Typescript, UI & UX Design e produção de conteúdo para a internet."
                        cardButton="Saiba Mais"
                        urlLink="/projetos"
                    />
                    <VerticalCard
                        imgUrl="https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        cardTitle="Conteúdos"
                        cardText="Tutoriais no Youtube, Podcasts, artigos de blog, cursos e outros conteúdos relacionados à tecnologia, criatividade e inovação."
                        cardButton="Saiba Mais"
                        urlLink="/conteudos"
                    />
                    <VerticalCard
                        imgUrl="/hero-img.png"
                        cardTitle="Sobre"
                        cardText="Olá, me chamo Rafael e trabalho com desenvolvimento web, UX & UI Design e produção de conteúdo. Também sou doutorando e professor."
                        cardButton="Saiba Mais"
                        urlLink="/sobre"
                    />
                </ThreeColumnContentStyle>
            </PageContainerStyle>
        )

    if (type === 'one-column')
        return (
            <PageContainerStyle>
                <OneColumnContentStyle>
                    <HeroImageSection
                        showResponsive={true}
                        imgAlt="Hero Image"
                        imgUrl="https://images.unsplash.com/photo-1600267204026-85c3cc8e96cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                    <div className="meta">
                        <h1>{oneColumnProps?.title}</h1>
                        <h2>{oneColumnProps?.subTitle}</h2>
                        <div className="meta-data">
                            <img
                                src="https://avatars.githubusercontent.com/u/47259718?v=4"
                                alt="fischerafael - Github Avatar"
                            />
                            <span>por</span>
                            <Link href="/sobre">
                                <a>Rafael Fischer</a>
                            </Link>
                        </div>
                    </div>
                </OneColumnContentStyle>
            </PageContainerStyle>
        )
}

export default PageContainer

export const PageContainerStyle = styled.main`
    z-index: 1;
    background: ${({ theme }) => theme.colors.dark};

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SectionContentStyle = styled.div`
    color: ${({ theme }) => theme.colors.ligth};

    max-width: 1024px;
    width: 90%;
    min-height: 50vh;
`
export const OneColumnContentStyle = styled(SectionContentStyle)`
    display: flex;
    flex-direction: column;

    height: 50vh;

    align-items: center;

    .meta {
        position: absolute;
        top: 0;

        width: 90%;
        height: 50vh;
        margin-top: 10vh;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        color: white;
        z-index: 11;

        h1 {
            font-size: 48px;
            margin: 0;
            padding: 0;
        }

        h2 {
            font-size: 18px;
            max-width: 90%;
            font-weight: 400;
        }

        .meta-data {
            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 10vh;

            img {
                width: 25px;
                height: 25px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 15px;
            }

            span {
                font-size: 10px;
                color: ${({ theme }) => theme.colors.ligth};
                margin-right: 5px;
            }

            a {
                text-decoration: none;
                font-size: 10px;
                font-weight: 900;
                color: ${({ theme }) => theme.colors.ligth};
            }
        }
    }
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

    padding: 10vh 0;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
