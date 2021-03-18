import React from 'react'
import styled from 'styled-components'
import useData from '../../../../../hooks/useData'
import { FlexContainer } from '../../_design-system/templates/FlexContainer'
import ProjectCard from '../ProjectCard'

const Projects = () => {
    const { data } = useData()

    const projects = data.projects

    return (
        <FlexContainer as="section">
            <ProjectsGrid>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        id={1}
                    />
                ))}
            </ProjectsGrid>
        </FlexContainer>
    )
}

export default Projects

export const ProjectsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;

    width: 100%;
    max-width: ${(props) => props.theme.breakPoints.md};
    padding: 2rem;
`
