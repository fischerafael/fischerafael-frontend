import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../_design-system/templates/FlexContainer'

const ProjectCard = ({ image, title, description, id }) => {
    return (
        <ProjectCardContainer as="article">
            <img src={image} alt="" style={{ width: '100%', height: '100%' }} />
            <ProjectCardContent as="div">
                <p>{title}</p>
                <span>{description}</span>
            </ProjectCardContent>
        </ProjectCardContainer>
    )
}

export default ProjectCard

const ProjectCardContainer = styled(FlexContainer)`
    background: black;
    width: 100%;
    height: 100%;
    position: relative;

    div {
        filter: opacity(0);
        cursor: pointer;
        transition: 0.5s;
    }

    &:hover {
        div {
            filter: opacity(75%);
        }
    }
`

const ProjectCardContent = styled(FlexContainer)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    p {
        text-align: center;
    }

    span {
        font-size: 0.5rem;
        text-align: center;
    }
`
