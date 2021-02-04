import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ imgUrl, title, tags, description, link }) => {
    return (
        <ProjectCardStyle>
            <img src={imgUrl} alt="" />
            <div className="linear-bottom-top"></div>
            <div className="card-content">
                <h2>{title}</h2>
                <h3>{description}</h3>
                {tags && (
                    <div className="card-tags">
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                )}
            </div>
            <Link href={link}>
                <a>Ver Mais</a>
            </Link>
        </ProjectCardStyle>
    )
}

export default ProjectCard

export const ProjectCardStyle = styled.div`
    position: relative;
    background: ${({ theme }) => theme.colors.ultraDark};
    width: 100%;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex-wrap: wrap;

    img {
        border-radius: 10px 10px 0 0;

        width: 100%;
        height: 40vh;
        object-fit: cover;
    }

    .linear-bottom-top {
        z-index: 1;
        position: absolute;
        top: 0;
        background: linear-gradient(
            00deg,
            ${({ theme }) => theme.colors.ultraDark} 0%,
            rgba(0, 0, 0, 0) 100%
        );
        height: 20vh;
        margin-top: 20vh;
        width: 100%;
    }

    .card-content {
        width: 80%;
        min-height: 15vh;
        margin-bottom: 15vh;

        h2 {
            z-index: 2;
            position: absolute;
            top: 0;
            margin-top: 32vh;
            font-family: sans-serif;
            font-size: 24px;
            color: transparent;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: ${({ theme }) => theme.colors.primary};
        }

        .card-tags {
            width: 80%;
            display: flex;
            flex-wrap: wrap;

            span {
                font-size: 10px;
                margin-right: 2px;
                margin-bottom: 2px;
                padding: 2px 5px;
                background: rgba(0, 0, 0, 0.25);

                display: flex;
            }
        }

        h3 {
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 10%;
        }
    }

    a {
        position: absolute;
        bottom: 0;

        width: 100%;
        background: ${({ theme }) => theme.colors.secondary};
        height: 10vh;
        border-radius: 0 0 10px 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;

        transition: 0.5s;

        cursor: pointer;

        &:hover {
            background: ${({ theme }) => theme.colors.primary};
        }
    }
`
