import styled from 'styled-components'

interface IHeroImage {
    imgUrl: string
    imgAlt: string
}

const HeroImage: React.FC<IHeroImage> = ({ imgUrl, imgAlt }) => {
    return (
        <HeroImgContainerStyle>
            <div className="linear left-right"></div>
            <img src={imgUrl} alt={imgAlt} />
            <div className="linear right-left"></div>
            <div className="linear-bottom-top"></div>
        </HeroImgContainerStyle>
    )
}

export default HeroImage

export const HeroImgContainerStyle = styled.div`
    position: relative;
    background: ${({ theme }) => theme.colors.dark};
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

    .linear-bottom-top {
        z-index: 10;
        position: absolute;

        bottom: 0;
        height: 50%;
        width: 100%;
        background: blue;

        background: linear-gradient(00deg, #1f212b 0%, rgba(0, 0, 0, 0) 100%);
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
