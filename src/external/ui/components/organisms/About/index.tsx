import React from 'react'
import styled from 'styled-components'

import useData from '../../../../../hooks/useData'
import useLanguage from '../../../../../hooks/useLanguage'

import ProfessionalCard from '../../../../../components/Card/Professional'
import Text from '../../../../../components/design-system/atoms/Text'

import { FlexContainer } from '../../_design-system/templates/FlexContainer'

const About = () => {
    const { data } = useData()
    const { language } = useLanguage()

    const isPortuguese = language === 'portuguese'
    const isEnglish = language === 'english'

    const coverLetter = data.experience.coverLetter
    const skills = data.experience.skills
    const professionalExperiences = data.experience.professional
    const educationExperiences = data.experience.education

    return (
        <FlexContainer as="section">
            <AboutContent>
                <Text as="p" variant="Paragraph">
                    {coverLetter}
                </Text>
                <Text as="h2" variant="SectionTitle">
                    Habilidades
                </Text>
                <SkillSection as="section">
                    {skills.map((skill) => (
                        <p>{skill}</p>
                    ))}
                </SkillSection>
                <Text as="h1" variant="SectionTitle">
                    Experiências Profissionais
                </Text>
                <div>
                    {professionalExperiences.map((exp) => (
                        <ProfessionalCard
                            key={exp.id}
                            index={exp.id}
                            title={exp.title}
                            company={exp.company}
                            location={exp.location}
                            started={exp.started}
                            finished={exp.finished}
                            current={exp.current}
                            description={exp.description}
                        />
                    ))}
                </div>
                <Text as="h1" variant="SectionTitle">
                    Educação
                </Text>
                <div>
                    {educationExperiences.map((exp) => (
                        <ProfessionalCard
                            key={exp.id}
                            index={exp.id}
                            title={exp.title}
                            company={exp.company}
                            location={exp.location}
                            started={exp.started}
                            finished={exp.finished}
                            current={exp.current}
                            description={exp.description}
                        />
                    ))}
                </div>
            </AboutContent>
        </FlexContainer>
    )
}

export default About

export const AboutContent = styled.section`
    width: 100%;
    height: 100%;

    max-width: ${(props) => props.theme.breakPoints.md};
    padding: 2rem;

    @media (max-width: 800px) {
        max-width: 100%;
    }
`
const SkillSection = styled(FlexContainer)`
    padding-bottom: 2rem;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    flex-wrap: wrap;

    p {
        background: ${(props) => props.theme.color.dark};
        padding: 0.5rem;
        font-size: 0.5rem;
    }
`
