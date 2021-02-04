import OptionsCard from '../../atoms/OptionsCard'

import { FaCode, FaBookReader, FaUser } from 'react-icons/fa'

import { useContext } from 'react'
import styled from 'styled-components'

import OptionCardContext from '../../../contexts/optionCardContext'

const OptionsSection = () => {
    const {
        projectsSection,
        setProjectsSection,
        contentsSection,
        setContentsSection,
        aboutSection,
        setAboutSection
    } = useContext(OptionCardContext)

    return (
        <OptionsSectionStyle>
            <OptionsCard
                text="Web Development, UX & UI Design"
                setState={setProjectsSection}
                state={projectsSection}
            >
                {projectsSection ? (
                    <FaCode
                        style={{
                            width: '40px',
                            height: '40px',
                            color: 'white'
                        }}
                    />
                ) : (
                    <FaCode
                        style={{
                            width: '40px',
                            height: '40px',
                            color: '#2FD7E7'
                        }}
                    />
                )}
            </OptionsCard>
            <OptionsCard
                setState={setContentsSection}
                state={contentsSection}
                text="Blog, Podcast & Youtube"
            >
                {contentsSection ? (
                    <FaBookReader
                        style={{
                            width: '40px',
                            height: '40px',
                            color: 'white'
                        }}
                    />
                ) : (
                    <FaBookReader
                        style={{
                            width: '40px',
                            height: '40px',
                            color: '#2FD7E7'
                        }}
                    />
                )}
            </OptionsCard>
            <OptionsCard
                setState={setAboutSection}
                state={aboutSection}
                text="Rafael Fischer"
            >
                {aboutSection ? (
                    <FaUser
                        style={{
                            width: '40px',
                            height: '40px',
                            color: 'white'
                        }}
                    />
                ) : (
                    <FaUser
                        style={{
                            width: '40px',
                            height: '40px',
                            color: '#2FD7E7'
                        }}
                    />
                )}
            </OptionsCard>
        </OptionsSectionStyle>
    )
}

export default OptionsSection

export const OptionsSectionStyle = styled.div`
    position: relative;

    height: 100%;

    max-width: 1024px;
    width: 90%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;

    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`
