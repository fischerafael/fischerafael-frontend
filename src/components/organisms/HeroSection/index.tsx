import SocialLinksContainer from '../../molecules/SocialLinksContainer'
import HeroImage from '../../atoms/HeroImage'

import styled from 'styled-components'

interface IHeroSection {
    title: string
    subtitle: string
    heroImage: string
}

const HeroSection: React.FC<IHeroSection> = ({
    title,
    subtitle,
    heroImage
}) => {
    return (
        <HeroSectionStyle>
            <HeroImage heroImage={heroImage} />
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <SocialLinksContainer />
        </HeroSectionStyle>
    )
}

export default HeroSection

export const HeroSectionStyle = styled.section`
    position: relative;

    height: 100%;

    max-width: 1024px;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        z-index: 1;

        font-family: sans-serif;
        font-size: 60px;
        color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${({ theme }) => theme.colors.primary};

        text-align: center;

        margin: 0;
        padding: 0;
        min-width: 300px;
        width: 70%;
    }

    h2 {
        z-index: 1;

        font-size: 18px;
        font-weight: 400;
        text-align: center;

        min-width: 300px;
        width: 70%;
    }

    .social-links {
        min-width: 100px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 50px;
        z-index: 2;
    }
`
