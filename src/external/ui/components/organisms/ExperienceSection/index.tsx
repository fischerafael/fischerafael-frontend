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
    single?: boolean
    experiences: Experience[]
}

const BioSection = ({ title, experiences, single }: Props) => {
    if (single)
        return (
            <ProjectSectionContainerStyle>
                <h2 style={{ maxWidth: '70%' }}>{title}</h2>
                <SingleContainerStyle>
                    {experiences.map((exp, index) => (
                        <SingleCardContainerStyle key={index}>
                            {exp}
                        </SingleCardContainerStyle>
                    ))}
                </SingleContainerStyle>
            </ProjectSectionContainerStyle>
        )

    return (
        <ProjectSectionContainerStyle>
            <h2 style={{ maxWidth: '70%' }}>{title}</h2>

            <ExperiencesContainerStyle>
                {experiences.map((experience, index) => (
                    <ExperienceContainerStyle key={index}>
                        <h3>{experience.title}</h3>
                        {experience.institution && experience.location && (
                            <h4>
                                <span>{experience.institution}</span>,{' '}
                                {experience.location}
                            </h4>
                        )}

                        <h5>
                            {experience.startedAt}

                            {experience.finishedAt === null
                                ? ' - atualmente'
                                : experience.finishedAt === 0
                                ? null
                                : ` - ${experience.finishedAt}`}
                        </h5>

                        {experience.description && (
                            <p className="exp-description">
                                {experience.description}
                            </p>
                        )}
                    </ExperienceContainerStyle>
                ))}
            </ExperiencesContainerStyle>
        </ProjectSectionContainerStyle>
    )
}

export default BioSection

export const ExperiencesContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const SingleContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    text-align: center;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 860px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`
export const SingleCardContainerStyle = styled.div`
    background: #f3f3f3;
    border-radius: 1rem;
    padding: 3rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`
export const ExperienceContainerStyle = styled.div`
    background: #f3f3f3;
    border-radius: 1rem;
    padding: 3rem;
    min-height: 25vh;

    display: flex;
    flex-direction: column;

    align-self: flex-start;

    width: 100%;

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
        margin-bottom: 2rem;
    }
    p {
        align-self: flex-start;
        font: 400 1rem 'Roboto Slab';
        line-height: 2rem;
    }
`
