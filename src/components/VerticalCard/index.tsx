import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface IVerticalCard {
    imgUrl: string
    cardTitle: string
    cardText: string
    cardButton: string
    urlLink?: string
    newPage?: true
    tags?: true
}

const VerticalCard: React.FC<IVerticalCard> = ({
    imgUrl,
    cardTitle,
    cardText,
    cardButton,
    urlLink,
    newPage,
    tags
}) => {
    return (
        <CardContainerStyle>
            <img src={imgUrl} alt="" />
            <div className="card-gradient"></div>
            <h2>{cardTitle}</h2>
            <div className="card-content">
                <p>{cardText}</p>
            </div>
            <Link href={urlLink ? urlLink : '/'}>
                <a target={newPage && '_blank'}>{cardButton}</a>
            </Link>
        </CardContainerStyle>
    )
}

export default VerticalCard

export const CardContainerStyle = styled.div`
    z-index: 10;

    position: relative;

    background: ${({ theme }) => theme.colors.ultraDark};

    border-radius: ${({ theme }) => theme.card.borderRadius};

    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.5s;

    &:hover {
        box-shadow: 5px 5px 10px 5px rgba(5, 96, 138, 0.25);
    }

    img {
        height: 50vh;
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
        height: 50vh;

        background: linear-gradient(
            00deg,
            ${({ theme }) => theme.colors.ultraDark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }

    h2 {
        z-index: 10;

        position: absolute;
        top: 40vh;
        left: 10%;

        cursor: default;
    }

    .card-content {
        width: 80%;

        display: flex;

        flex-direction: column;

        height: 20vh;

        p {
            font-size: 10px;
            line-height: 16px;
            cursor: default;
        }
    }

    a {
        height: 10vh;
        width: 100%;
        border-radius: 0 0 10px 10px;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;

        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.ligth};

        cursor: pointer;

        transition: 0.5s;

        font: inherit;
        font-weight: 700;
        font-size: 14px;

        &:hover {
            background: ${({ theme }) => theme.colors.primary};
        }
    }

    .single {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
