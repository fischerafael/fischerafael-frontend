import CustomHead from '../src/components/Head'
import PageContainer from '../src/components/PageContainer'

import styled from 'styled-components'

const home = () => {
    return (
        <>
            <CustomHead pageTitle="Rafael Fischer" />
            <PageContainer twoColumnMain={true} />
            <PageContainer threeColumn={true} />
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
    grid-template-columns: 2fr 1fr;
    grid-gap: 18px;

    @media (max-width: 802px) {
        grid-template-columns: 1fr;
    }
`
export const OneOneOneGridContentStyle = styled(SectionContentStyle)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;

    @media (max-width: 802px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
export const SubSectionContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HeroImageSubSectionContentStyle = styled(SubSectionContentStyle)`
    @media (max-width: 802px) {
        display: none;
    }
`
export const HeaderStyle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.textSizes.title};
    font-weight: 900;
    line-height: 48px;

    @media (max-width: 802px) {
    }

    @media (max-width: 600px) {
        font-size: 36px;
        align-self: center;
    }

    @media (max-width: 360px) {
        font-size: 24px;
        line-height: 36px;
    }
`
export const SubTitleStyle = styled.h2`
    color: ${({ theme }) => theme.colors.ligth};
    font-size: ${({ theme }) => theme.textSizes.subtitle};
    font-weight: 400;
    line-height: 24px;

    @media (max-width: 360px) {
        font-size: 14px;
        line-height: 18px;
    }
`
export const HeroImageStyle = styled.div`
    position: relative;
    background: blue;
    width: 100%;
    height: 100vh;

    @media (max-width: 802px) {
        height: 50vh;
    }

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
