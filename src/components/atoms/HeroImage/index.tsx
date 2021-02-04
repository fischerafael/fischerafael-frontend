import styled from 'styled-components'

interface IHeroImage {
    heroImage: string
}

const HeroImage: React.FC<IHeroImage> = ({ heroImage }) => {
    return (
        <HeroImageStyle>
            <div className="linear-horizontal top-bottom"></div>
            <div className="linear-horizontal bottom-top"></div>
            <div className="linear-vertical left-right"></div>
            <div className="linear-vertical right-left"></div>
            <img src={heroImage} alt="" />
        </HeroImageStyle>
    )
}

export default HeroImage

export const HeroImageStyle = styled.div`
    position: absolute;
    top: 0;
    background: blue;

    display: flex;

    img {
        filter: brightness(50%);
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
        z-index: 1;
        background: linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.dark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
        top: 0;
    }

    .bottom-top {
        z-index: 1;
        background: linear-gradient(
            0deg,
            ${({ theme }) => theme.colors.dark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
        bottom: 0;
    }
`
