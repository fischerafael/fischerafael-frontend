import React from 'react'
import styled from 'styled-components'

const ProfessionalCard = ({
    index,
    title,
    company,
    location,
    started,
    finished,
    current,
    description
}) => {
    return (
        <ProCardContainer>
            <div className="img-number">
                <span>{index}</span>
            </div>
            <div className="content">
                <h1>{title}</h1>
                <h2>
                    {company}, {location}
                </h2>
                <h2 className="period">
                    {started} - {current ? 'atualmente' : finished}
                </h2>
                <p>{description}</p>
            </div>
        </ProCardContainer>
    )
}

export default ProfessionalCard

export const ProCardContainer = styled.article`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 4fr;
    gap: 1rem;

    padding: 2rem 0;
    border-top: solid 0.1rem ${(props) => props.theme.color.dark};
    width: 100%;

    .img-number {
        width: 100%;
        height: 100%;
        max-width: 50rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        font-weight: bold;
        font-size: 6rem;

        color: ${(props) => props.theme.color.primary};
    }

    .content {
        h1 {
            font-weight: bold;
            font-size: 1.5rem;
            line-height: 2rem;
        }

        h2 {
            font-weight: normal;
            font-size: 0.75rem;
            line-height: 1.5rem;
        }

        .period {
            color: ${(props) => props.theme.color.primary};
        }

        p {
            font-weight: normal;
            padding: 1rem 0;
            font-size: 0.75rem;
            line-height: 1.5rem;
        }
    }

    @media (max-width: ${(props) => props.theme.breakPoints.md}) {
        grid-template-columns: 1fr;

        .content {
            h1 {
                text-align: center;
            }

            h2 {
                text-align: center;
            }

            .period {
                text-align: center;
            }

            p {
                font-weight: normal;
                padding: 1rem 0;
                font-size: 0.75rem;
                line-height: 1.5rem;
            }
        }
    }
`
