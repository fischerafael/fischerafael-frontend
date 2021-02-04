import { createContext, useState } from 'react'

interface IOptions {
    projectsSection: boolean
    setProjectsSection(data: boolean): void
    contentsSection: boolean
    setContentsSection(data: boolean): void
    aboutSection: boolean
    setAboutSection(data: boolean): void
}

const OptionCardContext = createContext({} as IOptions)

export const OptionCardProvider = ({ children }) => {
    const [projectsSection, setProjectsSection] = useState(false)
    const [contentsSection, setContentsSection] = useState(false)
    const [aboutSection, setAboutSection] = useState(false)

    return (
        <OptionCardContext.Provider
            value={{
                projectsSection,
                setProjectsSection,
                contentsSection,
                setContentsSection,
                aboutSection,
                setAboutSection
            }}
        >
            {children}
        </OptionCardContext.Provider>
    )
}

export default OptionCardContext
