import SocialLinksContainer from '../../molecules/SocialLinksContainer'

import styled from 'styled-components'

const HeroSection = () => {
    return (
        <HeroSectionStyle>
            <div className="linear-horizontal top-bottom"></div>
            <div className="linear-horizontal bottom-top"></div>
            <div className="linear-vertical left-right"></div>
            <div className="linear-vertical right-left"></div>
            <img src="/hero-img.png" alt="" />
            <h1>RAFAEL FISCHER</h1>
            <h2>
                Developer, UI/UX Designer, Architect and PhD Student in Civil
                Engineering
            </h2>
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

    img {
        z-index: 0;
        position: absolute;
        filter: brightness(25%);
        filter: blur(100%);

        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: 10%;
    }

    .linear-horizontal {
        z-index: 1;
        position: absolute;

        width: 100%;
        height: 40%;
    }

    .linear-vertical {
        z-index: 1;
        position: absolute;

        width: 50%;
        height: 100%;
    }

    .left-right {
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.dark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
        left: 0;
    }

    .right-left {
        background: linear-gradient(
            270deg,
            ${({ theme }) => theme.colors.dark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
        right: 0;
    }

    .top-bottom {
        background: linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.dark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
        top: 0;
    }

    .bottom-top {
        background: linear-gradient(
            0deg,
            ${({ theme }) => theme.colors.dark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
        bottom: 0;
    }

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
        width: 20%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 50px;
        z-index: 2;
    }
`
