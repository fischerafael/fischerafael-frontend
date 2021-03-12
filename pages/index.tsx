import React, { useContext } from 'react'
import styled from 'styled-components'
import ProfessionalCard from '../src/components/Card/Professional'

import { DefaultPageContainer } from '../src/components/DefautPageContainer'
import Text from '../src/components/design-system/atoms/Text'

import ProfileSection from '../src/components/Templates/Profile'

import { LanguageContext } from '../src/contexts/LanguageContext'
import useData from '../src/hooks/useData'

const home = () => {
    const { language } = useContext(LanguageContext)
    const { data } = useData()

    return (
        <>
            <ProfileSection page="about" />
            <DefaultPageContainer>
                <AboutContent>
                    <Text as="p" variant="Paragraph">
                        {data.experience.coverLetter}
                    </Text>
                    <Text as="h1" variant="SectionTitle">
                        {language === 'portuguese' &&
                            'Experiências Profissionais'}
                        {language === 'english' && 'Professional Experiences'}
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
            </DefaultPageContainer>
        </>
    )
}

export default home

export const AboutContent = styled.section`
    width: 100%;
    height: 100%;

    max-width: ${(props) => props.theme.breakPoints.md};
    padding: 2rem;

    @media (max-width: 800px) {
        max-width: 100%;
    }
`
