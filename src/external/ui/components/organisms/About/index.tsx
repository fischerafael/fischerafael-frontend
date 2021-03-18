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

    return (
        <FlexContainer as="section">
            <AboutContent>
                <Text as="p" variant="Paragraph">
                    {data.experience.coverLetter}
                </Text>
                <Text as="h1" variant="SectionTitle">
                    {isPortuguese && 'Experiências Profissionais'}
                    {isEnglish && 'Professional Experiences'}
                </Text>
                <div>
                    {data.experience.professional.map((exp) => (
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
