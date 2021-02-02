import CustomHead from '../src/components/Head'

import styled from 'styled-components'
import VerticalCard from '../src/components/VerticalCard'

const home = () => {
    return (
        <>
            <CustomHead pageTitle="Rafael Fischer" />
            <PageContainerStyle>
                <OneTwoGridContentStyle>
                    <SubSectionContentStyle>
                        <HeaderStyle>
                            Desenvolvimento Web, UI & UX Design e Inovação
                        </HeaderStyle>
                        <SubTitleStyle>
                            Olá, me chamo Rafael Fischer e ajudo
                            desenvolvedores, criativos e empresas.
                        </SubTitleStyle>
                    </SubSectionContentStyle>
                    <SubSectionContentStyle>
                        <HeroImageStyle>
                            <div className="linear left-right"></div>
                            <img
                                src="https://images.unsplash.com/photo-1600267204026-85c3cc8e96cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                alt="Hero Image"
                            />
                            <div className="linear right-left"></div>
                        </HeroImageStyle>
                    </SubSectionContentStyle>
                </OneTwoGridContentStyle>
            </PageContainerStyle>

            <PageContainerStyle>
                <OneOneOneGridContentStyle>
                    <VerticalCard
                        imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                        cardTitle="Projetos"
                        cardText="Desenvolvimento Web com tecnologias modernas como React, NodeJS & Typescript, UI & UX Design e produção de conteúdo para a internet."
                        cardButton="Saiba Mais"
                        marginTop="-10vh"
                    />
                    <VerticalCard
                        imgUrl="https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        cardTitle="Conteúdos"
                        cardText="Tutoriais em vídeo, podcasts, artigos de blog e cursos."
                        cardButton="Saiba Mais"
                        marginTop="-10vh"
                    />
                    <VerticalCard
                        imgUrl="/hero-img.png"
                        cardTitle="Projetos"
                        cardText="Desenvolvimento Web com tecnologias modernas como React, NodeJS & Typescript, UI & UX Design e produção de conteúdo para a internet."
                        cardButton="Saiba Mais"
                        marginTop="-10vh"
                    />
                </OneOneOneGridContentStyle>
            </PageContainerStyle>
        </>
    )
}

export default home

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
    height: 100%;
`
export const OneTwoGridContentStyle = styled(SectionContentStyle)`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 18px;
`
export const OneOneOneGridContentStyle = styled(SectionContentStyle)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
`
export const SubSectionContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HeaderStyle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.textSizes.title};
    font-weight: 900;
    line-height: 48px;
`
export const SubTitleStyle = styled.h2`
    color: ${({ theme }) => theme.colors.ligth};
    font-size: ${({ theme }) => theme.textSizes.subtitle};
    font-weight: 400;
    line-height: 24px;
`
export const HeroImageStyle = styled.div`
    position: relative;
    background: blue;
    width: 100%;
    height: 100vh;

    img {
        z-index: 9;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .linear {
        z-index: 10;
        position: absolute;

        top: 0;
        height: 100%;
        width: 50%;
    }

    .left-right {
        background: linear-gradient(90deg, #1f212b 0%, rgba(0, 0, 0, 0) 100%);
        left: 0;
    }
    .right-left {
        background: linear-gradient(270deg, #1f212b 0%, rgba(0, 0, 0, 0) 100%);
        right: 0;
    }
`
