import React from 'react'
import styled from 'styled-components'
import { TwoColContainerStyle } from '../TwoColContainerStyle'

type Experience = {
    current: boolean
    description: string
    title: string
    startedAt: number
    location: string
    finishedAt?: number
    institution: string
}

interface Props {
    title: string
    experiences: Experience[]
}

const BioSection = ({ title, experiences }: Props) => {
    return (
        <ProjectSectionContainerStyle>
            <h2>{title}</h2>

            {experiences.map((experience, index) => (
                <ExperienceContainerStyle key={index}>
                    <h3>{experience.title}</h3>
                    <h4>
                        <span>{experience.institution}</span>,{' '}
                        {experience.location}
                    </h4>
                    <h5>
                        {experience.startedAt} -{' '}
                        {experience.finishedAt
                            ? experience.finishedAt
                            : 'atualmente'}
                    </h5>
                    <p className="exp-description">{experience.description}</p>
                </ExperienceContainerStyle>
            ))}
        </ProjectSectionContainerStyle>
    )
}

export default BioSection

export const ExperienceContainerStyle = styled.div`
    background: #f3f3f3;
    border-radius: 1rem;
    padding: 3rem;
    min-height: 25vh;

    display: flex;
    flex-direction: column;

    align-self: flex-start;

    h3 {
        font: 900 1.5rem 'Roboto';
        margin-bottom: 1rem;
    }

    h4 {
        font: 400 1rem 'Roboto Slab';
        margin-bottom: 0.5rem;

        span {
            font-weight: 900;
        }
    }

    h5 {
        font: 400 0.75rem 'Roboto Slab';
        color: #777777;
    }

    .exp-description {
        font: 400 0.75rem 'Roboto Slab';
        line-height: 1.5rem;
        margin-top: 1rem;
    }
`
export const ProjectSectionContainerStyle = styled(TwoColContainerStyle)`
    min-height: 50vh;
    margin: 2rem 0;

    h2 {
        align-self: flex-start;
        font: 900 2rem 'Roboto';
    }
    p {
        align-self: flex-start;
        font: 400 1rem 'Roboto Slab';
        line-height: 2rem;
    }
`
