import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

interface IVerticalCard {
    imgUrl: string
    cardTitle: string
    cardText: string
    cardButton: string
    marginTop?: string
}

const VerticalCard: React.FC<IVerticalCard> = ({
    imgUrl,
    cardTitle,
    cardText,
    cardButton,
    marginTop
}) => {
    return (
        <CardContainerStyle style={{ marginTop: marginTop }}>
            <img src={imgUrl} alt="" />
            <div className="card-gradient"></div>
            <h2>{cardTitle}</h2>
            <div className="card-content">
                <div className="card-content-text">
                    <p>{cardText}</p>
                </div>

                <Button>{cardButton}</Button>
            </div>
        </CardContainerStyle>
    )
}

export default VerticalCard

export const CardContainerStyle = styled.div`
    z-index: 10;

    position: relative;

    background: ${({ theme }) => theme.colors.ultraDark};
    height: 500px;

    border-radius: ${({ theme }) => theme.card.borderRadius};

    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.5s;

    margin-bottom: 10vh;

    &:hover {
        box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.5);
    }

    img {
        height: 300px;
        width: 100%;
        object-fit: cover;

        filter: grayscale(80%);

        border-radius: ${({ theme }) => theme.card.borderRadius}
            ${({ theme }) => theme.card.borderRadius} 0 0;
    }

    .card-gradient {
        z-index: 10;

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 300px;

        background: linear-gradient(
            00deg,
            ${({ theme }) => theme.colors.ultraDark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }

    h2 {
        z-index: 10;

        position: absolute;
        bottom: 40%;
        left: 10%;
    }

    .card-content {
        width: 80%;

        display: flex;
        flex-direction: column;
        height: 200px;

        .card-content-text {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;

            p {
                font-size: 12px;
            }
        }
    }
`
